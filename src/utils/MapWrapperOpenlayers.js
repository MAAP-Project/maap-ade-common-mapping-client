import Ol_Map from "ol/Map";
import Ol_View from "ol/View";
import Ol_Layer_Vector from "ol/layer/Vector";
import Ol_Source_Vector from "ol/source/Vector";
import Ol_Layer_Tile from "ol/layer/Tile.js";
import Ol_Source_OSM from "ol/source/OSM.js";
import * as Ol_Proj from "ol/proj";
import { defaults as Ol_Interaction_Defaults } from "ol/interaction";
import Ol_Interaction_Draw, { createBox } from "ol/interaction/Draw";
import Ol_Geom_Linestring from "ol/geom/LineString";
import Ol_Geom_Polygon from "ol/geom/Polygon";
import * as appStrings from "_core/constants/appStrings";
import appConfig from "constants/appConfig";
import MapWrapper from "_core/utils/MapWrapper";

import MapWrapperOpenlayersCore from "_core/utils/MapWrapperOpenlayers";

export default class MapWrapperOpenlayers extends MapWrapperOpenlayersCore {
    ////////////////////// OVERRIDES //////////////////////

    /**
     * create an openlayers map object
     *
     * @param {string|domnode} container the domnode to render to
     * @param {object} options options for creating this map (usually map state from redux)
     * @returns {object} openlayers map object
     * @memberof MapWrapperOpenlayers
     */
    createMap(container, options) {
        try {
            // create default draw layer
            let vectorSource = new Ol_Source_Vector({ wrapX: true });

            let vectorLayer = new Ol_Layer_Vector({
                source: vectorSource,
                style: this.defaultGeometryStyle,
                extent: appConfig.DEFAULT_MAP_EXTENT
            });
            vectorLayer.set("_layerId", "_vector_drawings");
            vectorLayer.set("_layerType", appStrings.LAYER_GROUP_TYPE_REFERENCE);

            // get the view options for the map
            let viewOptions = options.get("view").toJS();
            let mapProjection = Ol_Proj.get(viewOptions.projection.code);

            return new Ol_Map({
                target: container,
                layers: [
                    vectorLayer,
                    new Ol_Layer_Tile({
                        source: new Ol_Source_OSM()
                    })
                ],
                view: new Ol_View({
                    maxZoom: viewOptions.maxZoom,
                    minZoom: viewOptions.minZoom,
                    projection: mapProjection,
                    maxResolution: viewOptions.maxResolution
                }),
                controls: [],
                interactions: Ol_Interaction_Defaults({
                    altShiftDragRotate: false,
                    pinchRotate: false,
                    shiftDragZoom: false,
                    keyboard: false
                })
            });
        } catch (err) {
            console.warn("Error in MapWrapperOpenlayers.createMap:", err);
            return false;
        }
    }

    /**
     * add a handler to the map for a given type of drawing
     *
     * @param {string} geometryType (Circle|LineString|Polygon|Line|Box)
     * @param {function} onDrawEnd callback for when the drawing completes
     * @param {string} interactionType (Draw|Measure)
     * @param {object} userDrawOptions additional options to be passed to OpenLayers Draw object
     * @returns {boolean} true if it succeeds
     * @memberof MapWrapperOpenlayers
     */
    addDrawHandler(geometryType, onDrawEnd, interactionType, userDrawOptions = {}) {
        try {
            const olGeometryType = appStrings.OL_GEOMETRY_TYPES[geometryType];
            let mapLayers = this.map.getLayers().getArray();
            let mapLayer = this.miscUtil.findObjectInArray(
                mapLayers,
                "_layerId",
                "_vector_drawings"
            );
            let mapProjection = Ol_Proj.get(
                this.map
                    .getView()
                    .getProjection()
                    .getCode()
            );
            if (mapLayer) {
                let measureDistGeom = (coords, opt_geom) => {
                    // remove duplicates
                    let newCoords = coords.reduce((acc, coord, i) => {
                        let prev = acc[i - 1];
                        coord = Ol_Proj.transform(
                            coord,
                            mapProjection,
                            appStrings.PROJECTIONS.latlon.code
                        );
                        coord = this.mapUtil.constrainCoordinates(coord);
                        if (!prev || (prev[0] !== coord[0] || prev[1] !== coord[1])) {
                            acc.push(coord);
                        }
                        return acc;
                    }, []);

                    let lineCoords = this.mapUtil.generateGeodesicArcsForLineString(newCoords);
                    let transformedLineCoords = lineCoords.map(coords =>
                        Ol_Proj.transform(coords, appStrings.PROJECTIONS.latlon.code, mapProjection)
                    );
                    let transformedOriginalCoords = newCoords.map(coords =>
                        Ol_Proj.transform(coords, appStrings.PROJECTIONS.latlon.code, mapProjection)
                    );

                    let geom = opt_geom ? opt_geom : new Ol_Geom_Linestring(transformedLineCoords);
                    geom.setCoordinates(transformedLineCoords);
                    geom.set("originalCoordinates", transformedOriginalCoords, true);
                    return geom;
                };
                let measureAreaGeom = (coords, opt_geom) => {
                    coords = coords[0]; // TODO: find case where this isn't what we want

                    // remove duplicates
                    let newCoords = coords.reduce((acc, coord, i) => {
                        let prev = acc[i - 1];
                        coord = Ol_Proj.transform(
                            coord,
                            mapProjection,
                            appStrings.PROJECTIONS.latlon.code
                        );
                        coord = this.mapUtil.constrainCoordinates(coord);
                        if (!prev || (prev[0] !== coord[0] || prev[1] !== coord[1])) {
                            acc.push(coord);
                        }
                        return acc;
                    }, []);

                    // add last leg
                    if (newCoords.length > 1) {
                        newCoords.push(newCoords[0]);
                    }

                    let lineCoords = this.mapUtil.generateGeodesicArcsForLineString(newCoords);
                    let transformedLineCoords = lineCoords.map(coords =>
                        Ol_Proj.transform(coords, appStrings.PROJECTIONS.latlon.code, mapProjection)
                    );
                    let transformedOriginalCoords = newCoords.map(coords =>
                        Ol_Proj.transform(coords, appStrings.PROJECTIONS.latlon.code, mapProjection)
                    );
                    let geom = opt_geom ? opt_geom : new Ol_Geom_Polygon([transformedLineCoords]);
                    geom.setCoordinates([transformedLineCoords]);
                    geom.set("originalCoordinates", transformedOriginalCoords, true);
                    return geom;
                };

                let geometryFunction = undefined;
                let shapeType = appStrings.SHAPE_AREA;
                let additionalDrawOptions = {};
                if (interactionType === appStrings.INTERACTION_MEASURE) {
                    if (geometryType === appStrings.GEOMETRY_LINE_STRING) {
                        geometryFunction = measureDistGeom;
                        shapeType = appStrings.SHAPE_DISTANCE;
                    } else if (geometryType === appStrings.GEOMETRY_POLYGON) {
                        geometryFunction = measureAreaGeom;
                        shapeType = appStrings.SHAPE_AREA;
                    } else if (geometryType === appStrings.GEOMETRY_CIRCLE) {
                        geometryFunction = measureAreaGeom;
                        shapeType = appStrings.SHAPE_DISTANCE;
                    }
                } else {
                    if (geometryType === appStrings.GEOMETRY_LINE_STRING) {
                        shapeType = appStrings.SHAPE_DISTANCE;
                    } else if (geometryType === appStrings.GEOMETRY_POLYGON) {
                        shapeType = appStrings.SHAPE_AREA;
                    } else if (geometryType === appStrings.GEOMETRY_CIRCLE) {
                        shapeType = appStrings.SHAPE_DISTANCE;
                    } else if (geometryType === appStrings.GEOMETRY_POINT) {
                        shapeType = appStrings.SHAPE_DISTANCE;
                    } else if (geometryType === appStrings.GEOMETRY_LINE) {
                        shapeType = appStrings.SHAPE_DISTANCE;
                        additionalDrawOptions.maxPoints = 2;
                    } else if (geometryType === appStrings.GEOMETRY_BOX) {
                        shapeType = appStrings.SHAPE_AREA;
                        geometryFunction = createBox();
                    }
                }
                let drawStyle = (feature, resolution) => {
                    return this.defaultDrawingStyle(feature, resolution, shapeType);
                };

                let drawInteraction = new Ol_Interaction_Draw({
                    source: mapLayer.getSource(),
                    type: olGeometryType,
                    geometryFunction: geometryFunction,
                    style: drawStyle,
                    wrapX: true,
                    ...userDrawOptions,
                    ...additionalDrawOptions
                });

                if (appConfig.DEFAULT_MAP_EXTENT) {
                    // Override creation of overlay_ so we can pass in an extent
                    // since OL doesn't let you do this via options
                    drawInteraction.overlay_ = new Ol_Layer_Vector({
                        extent: appConfig.DEFAULT_MAP_EXTENT,
                        source: new Ol_Source_Vector({
                            useSpatialIndex: false,
                            wrapX: true
                        }),
                        style: drawStyle
                    });
                }

                // Set callback
                drawInteraction.on("drawend", event => {
                    if (typeof onDrawEnd === "function") {
                        // store type of feature and id for later reference
                        let geometry = this.retrieveGeometryFromEvent(event, geometryType);
                        event.feature.set("interactionType", interactionType);
                        event.feature.setId(geometry.id);
                        onDrawEnd(geometry, event);
                    }
                });

                // Disable
                drawInteraction.setActive(false);

                // Set properties we'll need
                drawInteraction.set("_id", interactionType + geometryType);
                drawInteraction.set(interactionType, true);

                // Add to map
                this.map.addInteraction(drawInteraction);
                return true;
            }
            return false;
        } catch (err) {
            console.warn("Error in MapWrapperOpenlayers.addDrawHandler:", err);
            return false;
        }
    }

    ////////////////////// END OVERRIDES //////////////////////

    setProjection(options) {
        // get requested code
        let projCode = options.code;

        // get current map view
        const currView = this.map.getView();

        // find preconfigured projection info (if available)
        let configProj = undefined;
        for (const key in appStrings.PROJECTIONS) {
            let p = appStrings.PROJECTIONS[key];
            if (p.aliases.indexOf(projCode) !== -1) {
                configProj = p;
            }
        }

        // update the known projection code
        if (configProj) {
            projCode = configProj.code;
        }

        // find the max resolution for display (if available)
        let maxRes = undefined;
        if (appConfig.GIBS_IMAGERY_RESOLUTIONS[projCode]) {
            maxRes = appConfig.GIBS_IMAGERY_RESOLUTIONS[projCode][0];
        }

        // get the proj4js projection
        const mapProjection = Ol_Proj.get(projCode);

        // create a new map view
        const view = new Ol_View({
            maxZoom: currView.getMaxZoom(),
            minZoom: currView.getMinZoom(),
            projection: mapProjection,
            maxResolution: maxRes
        });

        // set the new map view and fit to the projection extent
        this.map.setView(view);
        view.fit(mapProjection.getExtent());

        return true;
    }

    resetView() {
        const currView = this.map.getView();
        const mapProjection = currView.getProjection();
        currView.fit(mapProjection.getExtent());
    }
}

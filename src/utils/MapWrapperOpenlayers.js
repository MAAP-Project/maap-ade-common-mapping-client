import Ol_Map from "ol/Map";
import Ol_View from "ol/View";
import Ol_Layer_Vector from "ol/layer/Vector";
import Ol_Source_Vector from "ol/source/Vector";
import * as Ol_Proj from "ol/proj";
import { defaults as Ol_Interaction_Defaults } from "ol/interaction";
import Ol_Interaction_Draw, { createBox } from "ol/interaction/Draw";
import Ol_Geom_Linestring from "ol/geom/LineString";
import Ol_Geom_Polygon from "ol/geom/Polygon";
import * as appStringsCore from "_core/constants/appStrings";
import appConfig from "constants/appConfig";
import MapUtil from "utils/MapUtil";

import MapWrapperOpenlayersCore from "_core/utils/MapWrapperOpenlayers";

export default class MapWrapperOpenlayers extends MapWrapperOpenlayersCore {
    ////////////////////// OVERRIDES //////////////////////

    /**
     * Initialize static class references for this instance
     *
     * @param {string|domnode} container the container to render this map into
     * @param {object} options view options for constructing this map wrapper (usually map state from redux)
     * @memberof MapWrapperOpenlayers
     */
    initStaticClasses(container, options) {
        MapWrapperOpenlayersCore.prototype.initStaticClasses.call(this, container, options);

        this.mapUtil = MapUtil;
    }

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
            vectorLayer.set("_layerType", appStringsCore.LAYER_GROUP_TYPE_REFERENCE);

            // get the view options for the map
            let viewOptions = options.get("view").toJS();
            let projCode = viewOptions.projection;
            let mapProjection = Ol_Proj.get(projCode);
            let configProj = this.mapUtil.getPreconfiguredProjection(projCode);
            let maxRes = configProj
                ? appConfig.GIBS_IMAGERY_RESOLUTIONS[configProj.code][0]
                : undefined;

            return new Ol_Map({
                target: container,
                layers: [vectorLayer],
                view: new Ol_View({
                    maxZoom: viewOptions.maxZoom,
                    minZoom: viewOptions.minZoom,
                    projection: mapProjection,
                    maxResolution: viewOptions.maxResolution || maxRes
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
            const olGeometryType = appStringsCore.OL_GEOMETRY_TYPES[geometryType];
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
                            appStringsCore.PROJECTIONS.latlon.code
                        );
                        coord = this.mapUtil.constrainCoordinates(coord);
                        if (!prev || (prev[0] !== coord[0] || prev[1] !== coord[1])) {
                            acc.push(coord);
                        }
                        return acc;
                    }, []);

                    let lineCoords = this.mapUtil.generateGeodesicArcsForLineString(newCoords);
                    let transformedLineCoords = lineCoords.map(coords =>
                        Ol_Proj.transform(
                            coords,
                            appStringsCore.PROJECTIONS.latlon.code,
                            mapProjection
                        )
                    );
                    let transformedOriginalCoords = newCoords.map(coords =>
                        Ol_Proj.transform(
                            coords,
                            appStringsCore.PROJECTIONS.latlon.code,
                            mapProjection
                        )
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
                            appStringsCore.PROJECTIONS.latlon.code
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
                        Ol_Proj.transform(
                            coords,
                            appStringsCore.PROJECTIONS.latlon.code,
                            mapProjection
                        )
                    );
                    let transformedOriginalCoords = newCoords.map(coords =>
                        Ol_Proj.transform(
                            coords,
                            appStringsCore.PROJECTIONS.latlon.code,
                            mapProjection
                        )
                    );
                    let geom = opt_geom ? opt_geom : new Ol_Geom_Polygon([transformedLineCoords]);
                    geom.setCoordinates([transformedLineCoords]);
                    geom.set("originalCoordinates", transformedOriginalCoords, true);
                    return geom;
                };

                let geometryFunction = undefined;
                let shapeType = appStringsCore.SHAPE_AREA;
                let additionalDrawOptions = {};
                if (interactionType === appStringsCore.INTERACTION_MEASURE) {
                    if (geometryType === appStringsCore.GEOMETRY_LINE_STRING) {
                        geometryFunction = measureDistGeom;
                        shapeType = appStringsCore.SHAPE_DISTANCE;
                    } else if (geometryType === appStringsCore.GEOMETRY_POLYGON) {
                        geometryFunction = measureAreaGeom;
                        shapeType = appStringsCore.SHAPE_AREA;
                    } else if (geometryType === appStringsCore.GEOMETRY_CIRCLE) {
                        geometryFunction = measureAreaGeom;
                        shapeType = appStringsCore.SHAPE_DISTANCE;
                    }
                } else {
                    if (geometryType === appStringsCore.GEOMETRY_LINE_STRING) {
                        shapeType = appStringsCore.SHAPE_DISTANCE;
                    } else if (geometryType === appStringsCore.GEOMETRY_POLYGON) {
                        shapeType = appStringsCore.SHAPE_AREA;
                    } else if (geometryType === appStringsCore.GEOMETRY_CIRCLE) {
                        shapeType = appStringsCore.SHAPE_DISTANCE;
                    } else if (geometryType === appStringsCore.GEOMETRY_POINT) {
                        shapeType = appStringsCore.SHAPE_DISTANCE;
                    } else if (geometryType === appStringsCore.GEOMETRY_LINE) {
                        shapeType = appStringsCore.SHAPE_DISTANCE;
                        additionalDrawOptions.maxPoints = 2;
                    } else if (geometryType === appStringsCore.GEOMETRY_BOX) {
                        shapeType = appStringsCore.SHAPE_AREA;
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

    retrieveGeometryFromEvent(event, geometryType) {
        // Base attributes common to all geometry types
        const baseGeometry = {
            type: geometryType,
            id: Math.random(),
            proj: this.map
                .getView()
                .getProjection()
                .getCode(),
            coordinateType: appStringsCore.COORDINATE_TYPE_CARTOGRAPHIC
        };

        if (geometryType === appStringsCore.GEOMETRY_CIRCLE) {
            let center = event.feature.getGeometry().getCenter();
            return {
                ...baseGeometry,
                center: { lon: center[0], lat: center[1] },
                radius:
                    event.feature.getGeometry().getRadius() *
                    Ol_Proj.METERS_PER_UNIT[
                        this.map
                            .getView()
                            .getProjection()
                            .getUnits()
                    ]
            };
        } else {
            return MapWrapperOpenlayersCore.prototype.retrieveGeometryFromEvent.call(
                this,
                event,
                geometryType
            );
        }
    }

    moveLayerToBottom(layer) {
        try {
            const mapLayers = this.map.getLayers();
            const mapLayersArr = mapLayers.getArray();
            const mapLayerWithIndex = this.miscUtil.findObjectWithIndexInArray(
                mapLayers.getArray(),
                "_layerId",
                layer.get("id")
            );
            if (mapLayerWithIndex) {
                let mapLayer = mapLayerWithIndex.value;
                let currIndex = mapLayerWithIndex.index;

                let bIndex = 0;
                let bottomLayer = mapLayersArr[0];
                if (
                    bottomLayer &&
                    bottomLayer.get("_layerType") === appStringsCore.LAYER_GROUP_TYPE_BASEMAP
                ) {
                    bIndex = 1;
                }

                mapLayers.removeAt(currIndex);
                mapLayers.insertAt(bIndex, mapLayer);
                return true;
            }
            return false;
        } catch (err) {
            console.warn("Error in MapWrapperOpenlayers.moveLayerToBottom:", err);
            return false;
        }
    }

    moveLayerDown(layer) {
        try {
            const mapLayers = this.map.getLayers();
            const mapLayersArr = mapLayers.getArray();
            const mapLayerWithIndex = this.miscUtil.findObjectWithIndexInArray(
                mapLayers.getArray(),
                "_layerId",
                layer.get("id")
            );
            if (mapLayerWithIndex) {
                let mapLayer = mapLayerWithIndex.value;
                let currIndex = mapLayerWithIndex.index;

                let bIndex = 0;
                let bottomLayer = mapLayersArr[0];
                if (
                    bottomLayer &&
                    bottomLayer.get("_layerType") === appStringsCore.LAYER_GROUP_TYPE_BASEMAP
                ) {
                    bIndex = 1;
                }

                if (currIndex > bIndex) {
                    mapLayers.removeAt(currIndex);
                    mapLayers.insertAt(currIndex - 1, mapLayer);
                }
                return true;
            }
            return false;
        } catch (err) {
            console.warn("Error in MapWrapperOpenlayers.moveLayerDown:", err);
            return false;
        }
    }

    ////////////////////// END OVERRIDES //////////////////////

    setProjection(projCode) {
        // get current map view
        const currView = this.map.getView();

        // get the proj4js projection
        const mapProjection = Ol_Proj.get(projCode);

        if (mapProjection) {
            // find the max resolution for display (if available)
            let configProj = this.mapUtil.getPreconfiguredProjection(projCode);
            let maxRes = configProj
                ? appConfig.GIBS_IMAGERY_RESOLUTIONS[configProj.code][0]
                : undefined;

            // create a new map view
            const view = new Ol_View({
                maxZoom: currView.getMaxZoom(),
                minZoom: currView.getMinZoom(),
                projection: mapProjection,
                maxResolution: maxRes
            });

            // set the new map view and fit to the projection extent
            this.map.setView(view);
            this.resetView();

            return true;
        }
        console.warn(
            `ERROR in MapWrapperOpenLayers: Failed to find matching projection for ${projCode}`
        );
        return false;
    }

    resetView() {
        const currView = this.map.getView();
        const mapProjection = currView.getProjection();
        let mapSize = this.map.getSize() || [];
        currView.fit(mapProjection.getExtent(), {
            size: mapSize,
            constrainResolution: false
        });
    }
}
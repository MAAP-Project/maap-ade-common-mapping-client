import Immutable from "immutable";
import * as appStringsCore from "_core/constants/appStrings";
import MapReducerCore from "_core/reducers/reducerFunctions/MapReducer";
import { layerModel } from "_core/reducers/models/map";
import appConfig from "constants/appConfig";
import MapUtil from "utils/MapUtil";

export default class MapReducer extends MapReducerCore {
    static mapUtil = MapUtil;

    static addGeometryToMap(state, action) {
        let alerts = state.get("alerts");
        // Add geometry to each inactive map
        state.get("maps").forEach(map => {
            // Only add geometry to inactive maps
            if (!map.isActive) {
                if (!map.addGeometry(action.geometry, action.interactionType, action.geodesic)) {
                    let contextStr = map.is3D ? "3D" : "2D";
                    alerts = alerts.push(
                        alert.merge({
                            title: appStringsCore.ALERTS.GEOMETRY_SYNC_FAILED.title,
                            body: appStringsCore.ALERTS.GEOMETRY_SYNC_FAILED.formatString.replace(
                                "{MAP}",
                                contextStr
                            ),
                            severity: appStringsCore.ALERTS.GEOMETRY_SYNC_FAILED.severity,
                            time: new Date()
                        })
                    );
                } else {
                    state = state.setIn(
                        ["areaSelections", action.geometry.id],
                        this.mapUtil.standardizeGeom(action.geometry)
                    );
                }
            }
        });

        return state.set("alerts", alerts);
    }

    static removeAllDrawings(state, action) {
        state = MapReducerCore.removeAllDrawings(state, action);
        return state.set("areaSelections", Immutable.Map());
    }

    static pixelClick(state, action) {
        let pixelCoordinate = state.getIn(["view", "pixelClickCoordinate"]).set("isValid", false);
        if (
            !state.getIn(["drawing", "isDrawingEnabled"]) &&
            !state.getIn(["measuring", "isMeasuringEnabled"])
        ) {
            state.get("maps").forEach(map => {
                if (map.isActive) {
                    let pixel = map.getPixelFromClickEvent(action.clickEvt);
                    if (pixel) {
                        let coords = map.getLatLonFromPixelCoordinate(pixel);
                        if (coords && coords.isValid) {
                            let data = Immutable.fromJS(
                                map.getDataAtPoint(coords, pixel, state.get("palettes"))
                            );
                            data = data.slice(0, 1); // just the first entry

                            pixelCoordinate = pixelCoordinate
                                .set("lat", coords.lat)
                                .set("lon", coords.lon)
                                .set("x", pixel[0])
                                .set("y", pixel[1])
                                .set("data", data)
                                .set("isValid", coords.isValid);
                            return false;
                        } else {
                            pixelCoordinate = pixelCoordinate.set("isValid", false);
                        }
                    }
                }
                return true;
            });
        }
        return state.setIn(["view", "pixelClickCoordinate"], pixelCoordinate);
    }

    static setMapProjection(state, action) {
        const aProj = action.projection;
        const proj = this.mapUtil.getPreconfiguredProjection(
            typeof aProj === "string" ? aProj : aProj.code
        );
        if (proj) {
            let anySucceed = state.get("maps").reduce((acc, map) => {
                if (!map.is3D) {
                    if (map.setProjection(proj.code)) {
                        return true;
                    }
                }
                return acc;
            }, false);

            if (anySucceed) {
                return state.setIn(["view", "projection"], proj.code);
            }
        }

        return state;
    }

    static resizeMap(state, action) {
        state.get("maps").forEach(map => {
            if (map.isActive) {
                map.resize();
            }
        });

        return state;
    }

    static resetMapView(state, action) {
        state.get("maps").forEach(map => {
            // Apply view to active/inactive maps depending on targetActiveMap
            if (map.isActive === action.targetActiveMap) {
                map.resetView();
            }
        });

        return state;
    }

    static addLayer(state, action) {
        const layer = layerModel.mergeDeep(action.layerInfo);

        state.get("maps").forEach(map => {
            map.setLayerActive(layer, true);
        });

        return state;
    }

    static removeLayer(state, action) {
        const layer = layerModel.mergeDeep(action.layerInfo);

        state.get("maps").forEach(map => {
            map.setLayerActive(layer, false);
        });

        return state;
    }

    static ingestLayerConfig(state, action) {
        if (action.options.type === appStringsCore.LAYER_CONFIG_JSON) {
            let currPartials = state.getIn(["layers", appStringsCore.LAYER_GROUP_TYPE_PARTIAL]);
            let newPartials = this.generatePartialsListFromJson(
                action.config,
                action.options.defaultOps
            );
            return state.setIn(
                ["layers", appStringsCore.LAYER_GROUP_TYPE_PARTIAL],
                currPartials.concat(newPartials)
            );
        } else if (action.options.type === appStringsCore.LAYER_CONFIG_WMTS_XML) {
            let currPartials = state.getIn(["layers", appStringsCore.LAYER_GROUP_TYPE_PARTIAL]);
            let newPartials = this.generatePartialsListFromWmtsXml(
                action.config,
                action.options.defaultOps
            );
            return state.setIn(
                ["layers", appStringsCore.LAYER_GROUP_TYPE_PARTIAL],
                currPartials.concat(newPartials)
            );
        } else {
            console.warn("Error in MapReducer.ingestLayerConfig: Could not ingest layer config");
        }
        return state;
    }

    static generatePartialsListFromJson(config, options = {}) {
        return config.layers.map(layer => {
            return Immutable.fromJS(layer)
                .set("fromJson", true)
                .mergeDeep(options);
        });
    }

    static generatePartialsListFromWmtsXml(config, options = {}) {
        let capabilities = this.mapUtil.parseCapabilities(config);
        if (capabilities) {
            let wmtsLayers = capabilities.Contents.Layer;
            let newLayers = wmtsLayers.map(layer => {
                let wmtsOptions = this.mapUtil.getWmtsOptions({
                    capabilities: capabilities,
                    options: {
                        layer: layer.Identifier,
                        matrixSet: layer.TileMatrixSetLink[0].TileMatrixSet
                    }
                });
                return Immutable.fromJS({
                    id: layer.Identifier,
                    title: layer.Title,
                    fromJson: false,
                    wmtsOptions: wmtsOptions
                }).mergeDeep(options);
            });
            return newLayers;
        }
        return [];
    }

    static mergeLayers(state, action) {
        let partials = state.getIn(["layers", appStringsCore.LAYER_GROUP_TYPE_PARTIAL]);
        let refPartial = null;
        let matchingPartials = null;
        let mergedLayer = null;
        let newLayers = null;
        let unmatchedLayers = Immutable.List();
        while (partials.size > 0) {
            // grab a partial
            refPartial = partials.last();
            // remove it from future evaluation
            partials = partials.pop();
            // grab matching partials
            matchingPartials = partials.filter(el => {
                return el.get("id") === refPartial.get("id");
            });
            // remove them from future evaluation
            partials = partials.filter(el => {
                return el.get("id") !== refPartial.get("id");
            });
            // merge the matching partials together
            mergedLayer = matchingPartials.reduce((acc, el) => {
                if (el.get("fromJson")) {
                    return acc.mergeDeep(el);
                }
                return el.mergeDeep(acc);
            }, refPartial);
            // merge in the default values
            mergedLayer = this.getLayerModel().mergeDeep(mergedLayer);

            // put the newly minted layer into state storage
            if (
                typeof mergedLayer.get("id") !== "undefined" &&
                typeof state.getIn(["layers", mergedLayer.get("type")]) !== "undefined" &&
                !state.getIn(["layers", mergedLayer.get("type")]).has(mergedLayer.get("id"))
            ) {
                state = state.setIn(
                    ["layers", mergedLayer.get("type"), mergedLayer.get("id")],
                    mergedLayer
                );
            } else {
                unmatchedLayers = unmatchedLayers.push(mergedLayer);
            }
        }

        if (unmatchedLayers.size > 0) {
            console.warn(
                "Error in MapReducer.mergeLayers: could not store merged layers; missing a valid id or type.",
                unmatchedLayers
            );
        }

        if (appConfig.DELETE_LAYER_PARTIALS) {
            return state.removeIn(["layers", appStringsCore.LAYER_GROUP_TYPE_PARTIAL]); // remove the partials list so that it doesn't intrude later
        }
        return state.setIn(["layers", appStringsCore.LAYER_GROUP_TYPE_PARTIAL], unmatchedLayers); // store only unmatched partials
    }

    static activateDefaultBasemap(state, action) {
        const proj = state.getIn(["view", "projection"]);
        const basemap = state
            .getIn(["layers", appStringsCore.LAYER_GROUP_TYPE_BASEMAP])
            .find(layer => {
                return (
                    layer.get("isDefault") && layer.getIn(["wmtsOptions", "projection"]) === proj
                );
            });

        if (basemap) {
            return this.setBasemap(state, { layer: basemap });
        }
        return state;
    }

    static removeDrawing(state, action) {
        const { id } = action;
        let anySucceed = state.get("maps").reduce((acc, map) => {
            if (map.removeShape(id)) {
                return true;
            }
            return acc;
        }, false);

        if (anySucceed) {
            return state.removeIn(["areaSelections", id]);
        }
        return state;
    }

    static invalidatePixelClick(state, action) {
        return state.setIn(["view", "pixelClickCoordinate", "isValid"], false);
    }

    static setMapViewMode(state, action) {
        state = MapReducerCore.setMapViewMode(state, action);
        return this.invalidatePixelClick(state, action);
    }

    static zoomToLayer(state, action) {
        const layer = this.findLayerById(state, action.layerId);
        if (typeof layer !== "undefined") {
            const projCode = appStringsCore.PROJECTIONS.latlon.code;
            const extent = this.mapUtil.transformExtent(
                layer.getIn(["wmtsOptions", "extents"]).toJS(),
                layer.getIn(["wmtsOptions", "projection"]),
                projCode
            );
            return this.setMapView(state, {
                viewInfo: {
                    extent: extent,
                    projection: projCode
                },
                targetActiveMap: true
            });
        }
        return state;
    }
}

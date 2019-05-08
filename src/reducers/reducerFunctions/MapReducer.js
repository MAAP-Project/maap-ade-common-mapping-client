import Immutable from "immutable";
import * as appStringsCore from "_core/constants/appStrings";
import MapReducerCore from "_core/reducers/reducerFunctions/MapReducer";
import { layerModel } from "_core/reducers/models/map";
import MapUtil from "utils/MapUtil";

export default class MapReducer extends MapReducerCore {
    static setMapProjection(state, action) {
        const aProj = action.projection;
        const proj = MapUtil.getPreconfiguredProjection(
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
                action.options.defOptions
            );
            return state.setIn(
                ["layers", appStringsCore.LAYER_GROUP_TYPE_PARTIAL],
                currPartials.concat(newPartials)
            );
        } else if (action.options.type === appStringsCore.LAYER_CONFIG_WMTS_XML) {
            let currPartials = state.getIn(["layers", appStringsCore.LAYER_GROUP_TYPE_PARTIAL]);
            let newPartials = this.generatePartialsListFromWmtsXml(
                action.config,
                action.options.defOptions
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
}

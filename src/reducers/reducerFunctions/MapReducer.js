import MapReducerCore from "_core/reducers/reducerFunctions/MapReducer";
import { layerModel } from "_core/reducers/models/map";
import MapUtil from "utils/MapUtil";

export default class MapReducer extends MapReducerCore {
    static setMapProjection(state, action) {
        const confProj = MapUtil.getPreconfiguredProjection(action.projection.code);
        const proj = confProj || action.projection;

        let anySucceed = state.get("maps").reduce((acc, map) => {
            if (!map.is3D) {
                if (map.setProjection(proj)) {
                    return true;
                }
            }
            return acc;
        }, false);

        if (anySucceed) {
            return state.setIn(["view", "projection"], proj);
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
}

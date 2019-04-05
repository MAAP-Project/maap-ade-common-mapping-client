import MapReducerCore from "_core/reducers/reducerFunctions/MapReducer";

export default class MapReducer extends MapReducerCore {
    static setMapProjection(state, action) {
        const proj = action.projection;

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
}

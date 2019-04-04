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
}

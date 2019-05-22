import * as actionTypes from "constants/actionTypes";
import { mapState } from "reducers/models/map";
import mapCore from "_core/reducers/map";
import MapReducer from "reducers/reducerFunctions/MapReducer";

export default function map(state = mapState, action, opt_reducer = MapReducer) {
    switch (action.type) {
        case actionTypes.SET_MAP_PROJECTION:
            return opt_reducer.setMapProjection(state, action);

        case actionTypes.RESET_MAP_VIEW:
            return opt_reducer.resetMapView(state, action);

        case actionTypes.ADD_LAYER:
            return opt_reducer.addLayer(state, action);

        case actionTypes.REMOVE_LAYER:
            return opt_reducer.removeLayer(state, action);

        case actionTypes.ACTIVATE_DEFAULT_BASEMAP:
            return opt_reducer.activateDefaultBasemap(state, action);

        case actionTypes.RESIZE_MAP:
            return opt_reducer.resizeMap(state, action);

        default:
            return mapCore.call(this, state, action, opt_reducer);
    }
}

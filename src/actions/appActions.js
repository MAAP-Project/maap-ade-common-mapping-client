import * as actionTypes from "constants/actionTypes";
import * as appStrings from "_core/constants/appStrings";
import * as mapActions from "_core/actions/mapActions";
import appConfig from "constants/appConfig";

export function dispatchAction(action) {
    return action;
}

export function addLayer(layerInfo) {
    return { type: actionTypes.ADD_LAYER, layerInfo };
}

export function removeLayer(layerInfo) {
    return { type: actionTypes.REMOVE_LAYER, layerInfo };
}

export function resetMapView(targetActiveMap = true) {
    return { type: actionTypes.RESET_MAP_VIEW, targetActiveMap };
}

export function setMapProjection(projection) {
    return { type: actionTypes.SET_MAP_PROJECTION, projection };
}

export function initializeMap(options) {
    return dispatch => {
        // initialize the maps
        dispatch(mapActions.initializeMap(appStrings.MAP_LIB_2D, "map2D"));
        dispatch(mapActions.initializeMap(appStrings.MAP_LIB_3D, "map3D"));

        // set the projection
        dispatch(setMapProjection(options.projection));

        // set initial view
        dispatch(
            mapActions.setMapView({ extent: options.extent || appConfig.DEFAULT_BBOX_EXTENT }, true)
        );
    };
}

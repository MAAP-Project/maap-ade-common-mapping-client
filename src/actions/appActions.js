import * as actionTypes from "constants/actionTypes";
import * as actionTypesCore from "_core/constants/actionTypes";
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
    return dispatch => {
        dispatch(mapActions.hideBasemap());
        dispatch({ type: actionTypes.SET_MAP_PROJECTION, projection });
    };
}

export function initializeMap(options) {
    return dispatch => {
        // load in built-in layers
        dispatch(loadBuiltInLayers());
        dispatch(mergeLayers());

        // initialize the maps
        dispatch(mapActions.initializeMap(appStrings.MAP_LIB_2D, "map2D"));
        dispatch(mapActions.initializeMap(appStrings.MAP_LIB_3D, "map3D"));
        dispatch(resetMapView());

        if (options) {
            // set the projection
            if (options.projection) {
                dispatch(setMapProjection(options.projection));
            }

            // set initial view
            if (options.extent) {
                dispatch(mapActions.setMapView({ extent: options.extent }, true));
            }
        }
    };
}

function loadBuiltInLayers() {
    return {
        type: actionTypesCore.INGEST_LAYER_CONFIG,
        config: { layers: appConfig.BUILT_IN_LAYER_PARTIALS },
        options: { type: "json" }
    };
}

function mergeLayers() {
    return { type: actionTypesCore.MERGE_LAYERS };
}

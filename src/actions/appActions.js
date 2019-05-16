import * as actionTypes from "constants/actionTypes";
import * as actionTypesCore from "_core/constants/actionTypes";
import * as appStringsCore from "_core/constants/appStrings";
import * as mapActionsCore from "_core/actions/mapActions";
import MiscUtil from "_core/utils/MiscUtil";
import appConfig from "constants/appConfig";

const DEFAULT_LAYER_OPS = {
    type: appStringsCore.LAYER_GROUP_TYPE_DATA,
    handleAs: appStringsCore.LAYER_GIBS_RASTER,
    wmtsOptions: {
        urlFunctions: {
            openlayers: "kvpTimeParam",
            cesium: "kvpTimeParam"
        }
    }
};

export function dispatchAction(action) {
    return action;
}

export function setDate(date) {
    return mapActionsCore.setDate(date);
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
        dispatch(mapActionsCore.hideBasemap());
        dispatch({ type: actionTypes.SET_MAP_PROJECTION, projection });
        dispatch(activateDefaultBasemap());
    };
}

export function loadLayerSource(options, defOptions = DEFAULT_LAYER_OPS) {
    const o = Object.assign({}, options, { defOptions });

    return dispatch => {
        dispatch(loadSingleLayerSource(o, true));
    };
}

export function initializeMap(options) {
    return dispatch => {
        // load in built-in layers
        dispatch(loadBuiltInLayers());
        dispatch(mergeLayers());

        // initialize the maps
        dispatch(mapActionsCore.initializeMap(appStringsCore.MAP_LIB_2D, "map2D"));
        dispatch(mapActionsCore.initializeMap(appStringsCore.MAP_LIB_3D, "map3D"));

        dispatch(activateDefaultBasemap());

        dispatch(resetMapView());

        if (options) {
            // set the projection
            if (options.projection) {
                dispatch(setMapProjection(options.projection));
            }

            // set initial view
            if (options.extent) {
                dispatch(mapActionsCore.setMapView({ extent: options.extent }, true));
            }
        }
    };
}

function loadSingleLayerSource(options, mergeOnLoad = false) {
    return dispatch => {
        return MiscUtil.asyncFetch({
            url: options.url,
            handleAs: options.type,
            options: { credentials: "same-origin" }
        }).then(
            data => {
                dispatch(ingestLayerConfig(data, options));
                if (mergeOnLoad) {
                    dispatch(mergeLayers());
                }
            },
            err => {
                console.warn("Error in mapActionsCore.loadSingleLayerSource: ", err);
                throw err;
            }
        );
    };
}

function loadBuiltInLayers() {
    return ingestLayerConfig({ layers: appConfig.BUILT_IN_LAYER_PARTIALS }, { type: "json" });
}

function ingestLayerConfig(config, options) {
    return { type: actionTypesCore.INGEST_LAYER_CONFIG, config, options };
}

function mergeLayers() {
    return { type: actionTypesCore.MERGE_LAYERS };
}

function activateDefaultBasemap() {
    return { type: actionTypes.ACTIVATE_DEFAULT_BASEMAP };
}
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MapContainer2D as MapContainer2DCore } from "_core/components/Map/MapContainer2D.js";
import * as mapActions from "_core/actions/mapActions";
import * as appStrings from "_core/constants/appStrings";
import MiscUtil from "utils/MiscUtil";
import stylesCore from "_core/components/Map/MapContainer.scss";
import displayStylesCore from "_core/styles/display.scss";

export class MapContainer2D extends MapContainer2DCore {
    initializeMapListeners() {
        MapContainer2DCore.prototype.initializeMapListeners.call(this);

        let map = this.props.maps.get(appStrings.MAP_LIB_2D);
        if (typeof map !== "undefined") {
            // mark complete
            this.listenersInitialized = true;
            console.log("2D Map Listeners Initialized");
        }
    }

    handleDrawEnd(geometry) {
        // Disable drawing
        this.props.mapActions.disableDrawing();
        // Add geometry to other maps
        this.props.mapActions.addGeometryToMap(geometry, appStrings.INTERACTION_DRAW, false);
    }

    render() {
        // need to get some sort of stored state value
        if (this.props.initialLoadComplete && !this.listenersInitialized) {
            this.initializeMapListeners();
        }

        let containerClass = MiscUtil.generateStringFromSet({
            [stylesCore.mapRenderWrapper]: true,
            [displayStylesCore.hidden]: this.props.in3DMode,
            [displayStylesCore.animationFadeIn]: !this.props.in3DMode,
            [displayStylesCore.animationFadeOut]: this.props.in3DMode,
            [this.props.className]: typeof this.props.className !== "undefined"
        });

        return (
            <div className={containerClass}>
                <div id="map2D" className={stylesCore.mapRender} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        maps: state.map.get("maps"),
        units: state.map.getIn(["displaySettings", "selectedScaleUnits"]),
        in3DMode: state.map.getIn(["view", "in3DMode"]),
        initialLoadComplete: state.view.get("initialLoadComplete")
    };
}

function mapDispatchToProps(dispatch) {
    return {
        mapActions: bindActionCreators(mapActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapContainer2D);

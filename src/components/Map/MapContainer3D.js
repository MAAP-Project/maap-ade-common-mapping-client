import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MapContainer3D as MapContainer3DCore } from "_core/components/Map/MapContainer3D.js";
import * as mapActions from "_core/actions/mapActions";
import * as appStrings from "_core/constants/appStrings";

export class MapContainer3D extends MapContainer3DCore {
    handleDrawEnd(geometry) {
        // TODO - fix in MapWrapperCesium
        geometry = { ...geometry, id: Math.random() };

        // Disable drawing
        this.props.mapActions.disableDrawing();
        // Add geometry to other maps
        this.props.mapActions.addGeometryToMap(geometry, appStrings.INTERACTION_DRAW, false);
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
)(MapContainer3D);

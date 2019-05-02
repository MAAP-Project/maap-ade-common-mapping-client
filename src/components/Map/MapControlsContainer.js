/**
 * Copyright 2017 California Institute of Technology.
 *
 * This source code is licensed under the APACHE 2.0 license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Modernizr from "modernizr";
import Earth from "mdi-material-ui/Earth";
import PlusIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import HomeIcon from "@material-ui/icons/Home";
import Paper from "@material-ui/core/Paper";
import * as mapActionsCore from "_core/actions/mapActions";
import * as appActionsCore from "_core/actions/appActions";
import * as appActions from "actions/appActions";
import MiscUtil from "_core/utils/MiscUtil";
import { MapButton, EnhancedTooltip } from "_core/components/Reusables";
import { BasemapPicker } from "components/Map";
import { MapControlsContainer as MapControlsContainerCore } from "_core/components/Map/MapControlsContainer.js";
import stylesCore from "_core/components/Map/MapControlsContainer.scss";
import styles from "components/Map/MapControlsContainer.scss";

export class MapControlsContainer extends MapControlsContainerCore {
    render() {
        let containerClasses = MiscUtil.generateStringFromSet({
            [this.props.className]: typeof this.props.className !== "undefined",
            [stylesCore.mapControlsContainer]: true,
            [styles.mapControlsContainer]: true
        });
        return (
            <div className={containerClasses}>
                <Paper elevation={2} className={stylesCore.buttonGroup}>
                    <EnhancedTooltip
                        title={this.props.in3DMode ? "Switch to 2D map" : "Switch to 3D map"}
                        placement="right"
                    >
                        <MapButton
                            disabled={!Modernizr.webgl && !this.props.in3DMode ? true : false}
                            onClick={() => this.setViewMode()}
                            aria-label={
                                this.props.in3DMode ? "Switch to 2D map" : "Switch to 3D map"
                            }
                            className={stylesCore.singleButton}
                        >
                            <Earth />
                        </MapButton>
                    </EnhancedTooltip>
                </Paper>
                <Paper elevation={2} className={stylesCore.buttonGroup}>
                    <EnhancedTooltip title="Home" placement="right">
                        <MapButton
                            onClick={() => {
                                this.props.resetMapView(true);
                            }}
                            aria-label="Home"
                            className={`${stylesCore.firstButton} ${stylesCore.lineButton}`}
                        >
                            <HomeIcon />
                        </MapButton>
                    </EnhancedTooltip>
                    <EnhancedTooltip title="Zoom In" placement="right">
                        <MapButton
                            onClick={this.props.mapActions.zoomIn}
                            aria-label="Zoom in"
                            className={stylesCore.lineButton}
                        >
                            <PlusIcon />
                        </MapButton>
                    </EnhancedTooltip>
                    <EnhancedTooltip title="Zoom Out" placement="right">
                        <MapButton
                            onClick={this.props.mapActions.zoomOut}
                            aria-label="Zoom out"
                            className={stylesCore.lastButton}
                        >
                            <RemoveIcon />
                        </MapButton>
                    </EnhancedTooltip>
                </Paper>
                <Paper elevation={2} className={stylesCore.buttonGroup}>
                    <BasemapPicker className={styles.singleButton} />
                </Paper>
            </div>
        );
    }
}

MapControlsContainer.propTypes = Object.assign({}, MapControlsContainerCore.propTypes, {
    resetMapView: PropTypes.func.isRequired
});

function mapStateToProps(state) {
    return {
        in3DMode: state.map.getIn(["view", "in3DMode"]),
        distractionFreeMode: state.view.get("distractionFreeMode"),
        mapControlsToolsOpen: state.view.get("mapControlsToolsOpen"),
        mapControlsHidden: state.view.get("mapControlsHidden")
    };
}

function mapDispatchToProps(dispatch) {
    return {
        mapActions: bindActionCreators(mapActionsCore, dispatch),
        appActions: bindActionCreators(appActionsCore, dispatch),
        resetMapView: bindActionCreators(appActions.resetMapView, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapControlsContainer);

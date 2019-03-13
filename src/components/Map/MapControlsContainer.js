/**
 * Copyright 2017 California Institute of Technology.
 *
 * This source code is licensed under the APACHE 2.0 license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Modernizr from "modernizr";
import Earth from "mdi-material-ui/Earth";
import PlusIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import HomeIcon from "@material-ui/icons/Home";
import Paper from "@material-ui/core/Paper";
import * as mapActions from "_core/actions/mapActions";
import * as appActions from "_core/actions/appActions";
import appConfig from "constants/appConfig";
import MiscUtil from "_core/utils/MiscUtil";
import { MapButton, EnhancedTooltip } from "_core/components/Reusables";
import { BasemapPicker } from "_core/components/Map";
import { MapControlsContainer as MapControlsContainerCore } from "_core/components/Map/MapControlsContainer.js";
import styles from "_core/components/Map/MapControlsContainer.scss";

export class MapControlsContainer extends MapControlsContainerCore {
    render() {
        let containerClasses = MiscUtil.generateStringFromSet({
            [this.props.className]: typeof this.props.className !== "undefined",
            [styles.mapControlsContainer]: true
        });
        return (
            <div className={containerClasses}>
                <Paper elevation={2} className={styles.buttonGroup}>
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
                            className={styles.singleButton}
                        >
                            <Earth />
                        </MapButton>
                    </EnhancedTooltip>
                </Paper>
                <Paper elevation={2} className={styles.buttonGroup}>
                    <EnhancedTooltip title="Home" placement="right">
                        <MapButton
                            onClick={() => {
                                this.props.mapActions.setMapView(
                                    { extent: appConfig.DEFAULT_BBOX_EXTENT },
                                    true
                                );
                            }}
                            aria-label="Home"
                            className={`${styles.firstButton} ${styles.lineButton}`}
                        >
                            <HomeIcon />
                        </MapButton>
                    </EnhancedTooltip>
                    <EnhancedTooltip title="Zoom In" placement="right">
                        <MapButton
                            onClick={this.props.mapActions.zoomIn}
                            aria-label="Zoom in"
                            className={styles.lineButton}
                        >
                            <PlusIcon />
                        </MapButton>
                    </EnhancedTooltip>
                    <EnhancedTooltip title="Zoom Out" placement="right">
                        <MapButton
                            onClick={this.props.mapActions.zoomOut}
                            aria-label="Zoom out"
                            className={styles.lastButton}
                        >
                            <RemoveIcon />
                        </MapButton>
                    </EnhancedTooltip>
                </Paper>
                <BasemapPicker />
            </div>
        );
    }
}

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
        mapActions: bindActionCreators(mapActions, dispatch),
        appActions: bindActionCreators(appActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapControlsContainer);

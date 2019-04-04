/**
 * Copyright 2017 California Institute of Technology.
 *
 * This source code is licensed under the APACHE 2.0 license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";
import * as appActionsCore from "_core/actions/appActions";
import * as mapActions from "_core/actions/mapActions";
import * as appActions from "actions/appActions";
// import * as appStrings from "_core/constants/appStrings";
// import appConfig from "constants/appConfig";
import MiscUtil from "_core/utils/MiscUtil";
import MapUtil from "_core/utils/MapUtil";

import {
    MapContainer,
    // MapContextMenu,
    CoordinateTracker
} from "_core/components/Map";
import { MapControlsContainer } from "components/Map";
// import { SettingsContainer } from "_core/components/Settings";
// import { ShareContainer } from "_core/components/Share";
// import { LayerInfoContainer } from "_core/components/LayerInfo";
import { LoadingContainer } from "_core/components/Loading";
// import { HelpContainer } from "_core/components/Help";
import { AlertsContainer } from "_core/components/Alerts";
// import { TimelineContainer } from "_core/components/Timeline";
// import { DatePickerContainer } from "_core/components/DatePicker";
// import { AppBarContainer } from "_core/components/AppBar";
// import { LayerMenuContainer } from "_core/components/LayerMenu";
// import { MouseFollowerContainer } from "_core/components/MouseFollower";
// import { AnalyticsContainer } from "_core/components/Analytics";
// import { KeyboardControlsContainer } from "_core/components/KeyboardControls";
import stylesCore from "_core/components/App/AppContainer.scss";
import styles from "components/App/AppContainer.scss";
import displayStyles from "_core/styles/display.scss";

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        htmlFontSize: 10
    },
    palette: {
        primary: pink
    },
    overrides: {
        MuiPaper: {
            rounded: {
                borderRadius: "2px"
            }
        }
    }
});

export class AppContainer extends Component {
    componentDidMount() {
        // disable the right click listener
        document.addEventListener(
            "contextmenu",
            function(e) {
                e.preventDefault();
            },
            false
        );

        // Perform initial browser functionality check
        this.props.checkBrowserFunctionalities();

        // prep the default projection for the application
        MapUtil.prepProjection();

        // initialize the map. I know this is hacky, but there simply doesn't seem to be a good way to
        // wait for the DOM to complete rendering.
        // see: http://stackoverflow.com/a/34999925
        window.requestAnimationFrame(() => {
            setTimeout(() => {
                // initialize the maps
                // this.props.initializeMap(appStrings.MAP_LIB_2D, "map2D");
                // this.props.initializeMap(appStrings.MAP_LIB_3D, "map3D");

                // set initial view
                // this.props.setMapView({ extent: appConfig.DEFAULT_BBOX_EXTENT }, true);

                // activate default params
                // this.props.activateDefaultLayers();

                // signal complete
                this.props.completeInitialLoad();

                // Store CMC actions in window
                window.CMC = {};
                window.CMC.dispatchAction = this.props.dispatchAction;
                window.CMC.setMapProjection = this.props.setMapProjection;
                window.CMC.intializeMap = this.props.intializeMap;
            }, 0);
        });
    }

    render() {
        let containerClasses = MiscUtil.generateStringFromSet({
            [stylesCore.appContainer]: true,
            [this.props.className]: typeof this.props.className !== "undefined"
        });
        return (
            <MuiThemeProvider theme={theme}>
                <div className={containerClasses}>
                    <MapContainer />
                    <LoadingContainer />
                    <MapControlsContainer />
                    <AlertsContainer />
                    <CoordinateTracker className={styles.coordinateTracker} />
                </div>
            </MuiThemeProvider>
        );
    }
}

AppContainer.propTypes = {
    completeInitialLoad: PropTypes.func.isRequired,
    checkBrowserFunctionalities: PropTypes.func.isRequired,
    activateDefaultLayers: PropTypes.func.isRequired,
    initializeMap: PropTypes.func.isRequired,
    setMapView: PropTypes.func.isRequired,
    dispatchAction: PropTypes.func.isRequired,
    setMapProjection: PropTypes.func.isRequired,
    intializeMap: PropTypes.func.isRequired,
    className: PropTypes.string
};

function mapDispatchToProps(dispatch) {
    return {
        completeInitialLoad: bindActionCreators(appActionsCore.completeInitialLoad, dispatch),
        checkBrowserFunctionalities: bindActionCreators(
            appActionsCore.checkBrowserFunctionalities,
            dispatch
        ),
        activateDefaultLayers: bindActionCreators(mapActions.activateDefaultLayers, dispatch),
        initializeMap: bindActionCreators(mapActions.initializeMap, dispatch),
        setMapView: bindActionCreators(mapActions.setMapView, dispatch),
        dispatchAction: bindActionCreators(appActions.dispatchAction, dispatch),
        setMapProjection: bindActionCreators(appActions.setMapProjection, dispatch),
        intializeMap: bindActionCreators(appActions.intializeMap, dispatch)
    };
}

export default connect(
    null,
    mapDispatchToProps
)(AppContainer);

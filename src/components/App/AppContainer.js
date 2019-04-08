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
import * as appActions from "actions/appActions";
import MiscUtil from "_core/utils/MiscUtil";
import MapUtil from "_core/utils/MapUtil";
import appConfig from "constants/appConfig";

import { MapContainer, CoordinateTracker } from "_core/components/Map";
import { MapControlsContainer } from "components/Map";
import { LoadingContainer } from "_core/components/Loading";
import { AlertsContainer } from "_core/components/Alerts";
import stylesCore from "_core/components/App/AppContainer.scss";
import styles from "components/App/AppContainer.scss";

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

        // prep the default projection for the application
        MapUtil.prepProjection();

        // initialize the map. I know this is hacky, but there simply doesn't seem to be a good way to
        // wait for the DOM to complete rendering.
        // see: http://stackoverflow.com/a/34999925
        window.requestAnimationFrame(() => {
            setTimeout(() => {
                // signal complete
                this.props.completeInitialLoad();

                // Store CMC actions in window
                window.CMC = {};
                window.CMC.dispatch = this.props.appActions;
                window.CMC.config = appConfig;
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
    appActions: PropTypes.object.isRequired,
    className: PropTypes.string
};

function mapDispatchToProps(dispatch) {
    return {
        completeInitialLoad: bindActionCreators(appActionsCore.completeInitialLoad, dispatch),
        appActions: bindActionCreators(appActions, dispatch)
    };
}

export default connect(
    null,
    mapDispatchToProps
)(AppContainer);

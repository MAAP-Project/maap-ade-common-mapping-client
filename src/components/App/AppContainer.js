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
import JssProvider from "react-jss/lib/JssProvider";
import { create } from "jss";
import {
    MuiThemeProvider,
    createMuiTheme,
    createGenerateClassName,
    jssPreset
} from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";
import * as appActionsCore from "_core/actions/appActions";
import * as appActions from "actions/appActions";
import MiscUtil from "_core/utils/MiscUtil";
import MapUtil from "_core/utils/MapUtil";

import { MapContainer } from "_core/components/Map";
import { MapControlsContainer, CoordinateTracker } from "components/Map";
import { AlertsContainer } from "_core/components/Alerts";
import stylesCore from "_core/components/App/AppContainer.scss";

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        htmlFontSize: 14
    },
    overrides: {
        MuiPaper: {
            rounded: {
                borderRadius: "2px"
            }
        }
    }
});

const styleNode = document.createComment("jss-insertion-point");
document.head.insertBefore(styleNode, document.head.firstChild);
const generateClassName = createGenerateClassName();
const jss = create({
    ...jssPreset(),
    // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
    insertionPoint: "jss-insertion-point"
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
                // link dispatch to external api
                this.props.linkDispatch(this.props.appActions);

                // signal complete
                this.props.completeInitialLoad();
            }, 0);
        });
    }

    componentDidUpdate() {
        this.props.linkDispatch(this.props.appActions);
    }

    render() {
        let containerClasses = MiscUtil.generateStringFromSet({
            [stylesCore.appContainer]: true,
            [this.props.className]: typeof this.props.className !== "undefined"
        });
        return (
            <JssProvider jss={jss} generateClassName={generateClassName}>
                <MuiThemeProvider theme={theme}>
                    <div className={containerClasses}>
                        <MapContainer />
                        <MapControlsContainer />
                        <AlertsContainer />
                        <CoordinateTracker />
                    </div>
                </MuiThemeProvider>
            </JssProvider>
        );
    }
}

AppContainer.propTypes = {
    completeInitialLoad: PropTypes.func.isRequired,
    appActions: PropTypes.object.isRequired,
    linkDispatch: PropTypes.func.isRequired,
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

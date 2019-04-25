/**
 * Copyright 2017 California Institute of Technology.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*eslint-disable import/default*/
import "@babel/polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "store/configureStore";
import { AppContainer } from "components/App";
import appConfig from "constants/appConfig";

// require("_core/styles/resources/img/apple-touch-icon.png");
// require("_core/styles/resources/img/favicon-32x32.png");
// require("_core/styles/resources/img/favicon-16x16.png");
// require("_core/styles/resources/img/safari-pinned-tab.svg");
// require("_core/styles/resources/img/favicon.ico");
// require("_core/styles/resources/img/7994970.png");

// const store = configureStore();

// render(
//     <Provider store={store}>
//         <AppContainer />
//     </Provider>,
//     document.getElementById("app")
// );

export class CMC {
    constructor(idOrElement = "app") {
        this.dispatch = {};
        this.config = appConfig;

        let el;
        if (typeof idOrElement === "string") {
            // assume its a domnode id
            el = document.getElementById(idOrElement);
        } else {
            // assume its a domnode
            el = idOrElement;
        }
        this.domNode = el;
    }

    render() {
        return new Promise((resolve, reject) => {
            const store = configureStore();

            render(
                <Provider store={store}>
                    <AppContainer
                        linkDispatch={dispatch => this._linkDispatch(dispatch, resolve)}
                    />
                </Provider>,
                this.domNode
            );
        });
    }

    _linkDispatch(dispatch, opt_resolve) {
        this.dispatch = dispatch;
        if (opt_resolve) {
            opt_resolve();
        }
    }
}

export default CMC;

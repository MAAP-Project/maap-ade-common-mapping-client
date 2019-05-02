import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Manager, Target, Popper } from "react-popper";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ListItemText from "@material-ui/core/ListItemText";
import MapIcon from "@material-ui/icons/Map";
import * as mapActions from "_core/actions/mapActions";
import * as appActions from "_core/actions/appActions";
import * as appStrings from "_core/constants/appStrings";
import { BaseMapList } from "_core/components/Settings";
import { ClickAwayListener, MapButton, EnhancedTooltip } from "_core/components/Reusables";
import MiscUtil from "_core/utils/MiscUtil";
import displayStylesCore from "_core/styles/display.scss";

export class BasemapPicker extends Component {
    setBasemap(layerId) {
        if (layerId && layerId !== "") {
            this.props.mapActions.setBasemap(layerId);
        } else {
            this.props.mapActions.hideBasemap();
        }
    }
    render() {
        // sort and gather the basemaps into a set of dropdown options
        let activeBasemapId = "";
        let basemapList = this.props.basemaps
            .filter(x => x.getIn(["wmtsOptions", "projection"]) === this.props.projection)
            .sort(MiscUtil.getImmutableObjectSort("title"));
        let basemapOptions = basemapList.reduce((acc, layer) => {
            if (layer.get("isActive")) {
                activeBasemapId = layer.get("id");
            }

            acc.push({
                value: layer.get("id"),
                label: layer.get("title")
            });
            return acc;
        }, []);
        basemapOptions.push({
            value: "",
            label: "None"
        });

        let popperClasses = MiscUtil.generateStringFromSet({
            [displayStylesCore.noPointer]: !this.props.mapControlsBasemapPickerOpen
        });
        let btnClasses = MiscUtil.generateStringFromSet({
            [this.props.className]: typeof this.props.className !== "undefined"
        });
        return (
            <ClickAwayListener
                onClickAway={() => {
                    if (this.props.mapControlsBasemapPickerOpen) {
                        this.props.appActions.setMapControlsBasemapPickerOpen(false);
                    }
                }}
            >
                <Manager>
                    <Target>
                        <EnhancedTooltip title={"Select Basemap"} placement="left">
                            <MapButton
                                onClick={() =>
                                    this.props.appActions.setMapControlsBasemapPickerOpen(
                                        !this.props.mapControlsBasemapPickerOpen
                                    )
                                }
                                aria-label="Select Basemap"
                                className={btnClasses}
                            >
                                <MapIcon />
                            </MapButton>
                        </EnhancedTooltip>
                    </Target>
                    <Popper
                        placement="left-end"
                        style={{ marginRight: "5px", zIndex: "3001" }}
                        modifiers={{
                            computeStyle: {
                                gpuAcceleration: false
                            }
                        }}
                        eventsEnabled={this.props.mapControlsBasemapPickerOpen}
                        className={popperClasses}
                    >
                        <Grow
                            style={{ transformOrigin: "right bottom" }}
                            in={this.props.mapControlsBasemapPickerOpen}
                        >
                            <div>
                                <Paper>
                                    <MenuList dense>
                                        {basemapOptions.map(x => (
                                            <MenuItem
                                                onClick={() => this.setBasemap(x.value)}
                                                value={x.value}
                                                key={x.value}
                                                selected={activeBasemapId === x.value}
                                            >
                                                <ListItemText
                                                    inset
                                                    style={{ padding: "0px" }}
                                                    primary={x.label}
                                                />
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </Paper>
                            </div>
                        </Grow>
                    </Popper>
                </Manager>
            </ClickAwayListener>
        );
    }
}

BasemapPicker.propTypes = {
    basemaps: PropTypes.object.isRequired,
    projection: PropTypes.string.isRequired,
    mapActions: PropTypes.object.isRequired,
    appActions: PropTypes.object.isRequired,
    mapControlsBasemapPickerOpen: PropTypes.bool.isRequired,
    className: PropTypes.string
};

function mapStateToProps(state) {
    return {
        basemaps: state.map.getIn(["layers", appStrings.LAYER_GROUP_TYPE_BASEMAP]),
        projection: state.map.getIn(["view", "projection"]),
        mapControlsBasemapPickerOpen: state.view.get("mapControlsBasemapPickerOpen")
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
)(BasemapPicker);

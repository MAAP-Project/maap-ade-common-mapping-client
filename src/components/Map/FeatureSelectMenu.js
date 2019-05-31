import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BarChartIcon from "@material-ui/icons/BarChart";
import DeleteIcon from "@material-ui/icons/Delete";
import Paper from "@material-ui/core/Paper";
import MiscUtil from "utils/MiscUtil";
import * as appActions from "actions/appActions";
import styles from "components/Map/FeatureSelectMenu.scss";
import displayStylesCore from "_core/styles/display.scss";

export class FeatureSelectMenu extends Component {
    removeDrawing() {
        const { clickData, invalidatePixelClick, removeDrawing } = this.props;
        const shape = clickData.get("data").get(0);
        removeDrawing(shape.get("featureId"));
        invalidatePixelClick();
    }

    plotData() {
        const { invalidatePixelClick } = this.props;
        invalidatePixelClick();
    }

    render() {
        const { clickData, className } = this.props;
        const data = clickData.get("data");

        const containerClasses = MiscUtil.generateStringFromSet({
            [styles.root]: true,
            [displayStylesCore.hidden]: data.size === 0 || !clickData.get("isValid"),
            [this.props.className]: typeof className !== "undefined"
        });

        const domStyles = {
            left: clickData.get("x"),
            top: clickData.get("y")
        };

        return (
            <Paper elevation={2} className={containerClasses} style={domStyles}>
                <MenuList dense>
                    <MenuItem
                        dense
                        className={styles.contextMenuItem}
                        aria-label="Plot"
                        onClick={() => {
                            console.log("GOOSE");
                        }}
                    >
                        <ListItemIcon classes={{ root: styles.listItemIcon }}>
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Plot Data" />
                    </MenuItem>
                    <MenuItem
                        className={styles.contextMenuItem}
                        dense
                        aria-label="Remove"
                        onClick={() => {
                            this.removeDrawing();
                        }}
                    >
                        <ListItemIcon classes={{ root: styles.listItemIcon }}>
                            <DeleteIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Remove Selection" />
                    </MenuItem>
                </MenuList>
            </Paper>
        );
    }
}

FeatureSelectMenu.propTypes = {
    clickData: PropTypes.object.isRequired,
    removeDrawing: PropTypes.func.isRequired,
    invalidatePixelClick: PropTypes.func.isRequired,
    className: PropTypes.string
};

function mapStateToProps(state) {
    return {
        clickData: state.map.getIn(["view", "pixelClickCoordinate"])
    };
}

function mapDispatchToProps(dispatch) {
    return {
        invalidatePixelClick: bindActionCreators(appActions.invalidatePixelClick, dispatch),
        removeDrawing: bindActionCreators(appActions.removeDrawing, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FeatureSelectMenu);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Icon from "@material-ui/core/Icon";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BarChartIcon from "@material-ui/icons/BarChart";
import DeleteIcon from "@material-ui/icons/Delete";
import Paper from "@material-ui/core/Paper";
import MiscUtil from "utils/MiscUtil";
import styles from "components/Map/FeatureSelectMenu.scss";
import displayStylesCore from "_core/styles/display.scss";

export class CoordinateTracker extends Component {
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

        console.log(data.toJS());

        return (
            <Paper elevation={2} className={containerClasses} style={domStyles}>
                <MenuList dense>
                    <MenuItem
                        dense
                        className={styles.contextMenuItem}
                        aria-label="Plot"
                        onClick={() => {
                            console.log("goob");
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
                            console.log("boog");
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

CoordinateTracker.propTypes = {
    clickData: PropTypes.object.isRequired,
    className: PropTypes.string
};

function mapStateToProps(state) {
    return {
        clickData: state.map.getIn(["view", "pixelClickCoordinate"])
    };
}

export default connect(
    mapStateToProps,
    null
)(CoordinateTracker);

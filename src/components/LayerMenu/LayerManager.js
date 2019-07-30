import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import MiscUtil from "utils/MiscUtil";
import appConfig from "constants/appConfig";
import { IconButtonSmall } from "_core/components/Reusables";
import * as appStringsCore from "_core/constants/appStrings";
import * as appActions from "actions/appActions";
import styles from "components/LayerMenu/LayerManager.scss";

export class LayerManager extends Component {
    constructor(props) {
        super(props);

        this.pageMax = 9;
        this.page = 0;
        this.onlyActive = false;
    }

    incPage(forward, numPages) {
        if (forward) {
            this.page += 1;
        } else {
            this.page -= 1;
        }
        this.page = Math.max(this.page, 0);
        this.page = Math.min(this.page, numPages);
        this.forceUpdate();
    }

    handleClose = () => {
        const { setLayerManagerOpen } = this.props;

        setLayerManagerOpen(false);
    };

    handleLayerToggle = layerId => {
        this.props.setLayerSelected(layerId, !this.props.layers.getIn([layerId, "isSelected"]));
    };

    renderPaginationControls(shouldPage, numPages, numActive) {
        if (shouldPage) {
            return (
                <div className={styles.pageCtrls}>
                    <div className={styles.pageCtrlRight}>
                        <Typography variant="caption" className={styles.pageNum}>
                            <span className={styles.activePageNum}>
                                {Math.min(this.page + 1, numPages)}
                            </span>{" "}
                            / {numPages}
                        </Typography>
                        <IconButtonSmall
                            className={styles.pageLeftBtn}
                            disabled={!shouldPage || this.page === 0}
                            onClick={() => this.incPage(false, numPages - 1)}
                        >
                            <ArrowDropDownIcon />
                        </IconButtonSmall>
                        <IconButtonSmall
                            className={styles.pageRightBtn}
                            disabled={!shouldPage || this.page === numPages - 1}
                            onClick={() => this.incPage(true, numPages - 1)}
                        >
                            <ArrowDropDownIcon />
                        </IconButtonSmall>
                    </div>
                </div>
            );
        }
    }

    render() {
        const { isOpen, layers } = this.props;
        let layerList = layers
            .filter(layer => !layer.get("isDisabled"))
            .toList()
            .sort(MiscUtil.getImmutableObjectSort("title"));

        let totalNum = layerList.size;
        const numPages = Math.ceil(totalNum / this.pageMax);
        if (totalNum > this.pageMax) {
            layerList = layerList.slice(this.page * this.pageMax, (this.page + 1) * this.pageMax);
        }

        const containerClasses = MiscUtil.generateStringFromSet({
            [styles.root]: true,
            [this.props.className]: typeof className !== "undefined"
        });

        return (
            <Dialog
                open={isOpen}
                onClose={this.handleClose}
                className={containerClasses}
                container={() => appConfig.RENDER_NODE}
                maxWidth="md"
                disableEnforceFocus={true}
                BackdropProps={{
                    className: styles.modalBackdrop
                }}
            >
                <DialogTitle disableTypography className={styles.title}>
                    <Typography variant="h6">Manage Datasets</Typography>
                    <IconButton
                        aria-label="Close"
                        className={styles.closeButton}
                        onClick={this.handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <List className={styles.layerList}>
                        {layerList.map(layer => {
                            const labelId = `checkbox-list-label-${layer.get("id")}`;

                            return (
                                <ListItem
                                    key={layer.get("id")}
                                    role={undefined}
                                    dense
                                    button
                                    onClick={() => this.handleLayerToggle(layer.get("id"))}
                                >
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={layer.get("isSelected")}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ "aria-labelledby": labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={layer.get("title")} />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="comments">
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            );
                        })}
                    </List>
                </DialogContent>
                {this.renderPaginationControls(totalNum > this.pageMax, numPages, totalNum)}
            </Dialog>
        );
    }
}

LayerManager.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    layers: PropTypes.object.isRequired,
    filter: PropTypes.string.isRequired,
    setLayerManagerOpen: PropTypes.func.isRequired,
    setLayerSelected: PropTypes.func.isRequired,
    className: PropTypes.string
};

function mapStateToProps(state) {
    return {
        isOpen: state.view.getIn(["layerManager", "isOpen"]),
        filter: state.view.getIn(["layerManager", "filter"]),
        layers: state.map.getIn(["layers", appStringsCore.LAYER_GROUP_TYPE_DATA])
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setLayerManagerOpen: bindActionCreators(appActions.setLayerManagerOpen, dispatch),
        setLayerSelected: bindActionCreators(appActions.setLayerSelected, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LayerManager);
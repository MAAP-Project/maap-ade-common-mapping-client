import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Grow from "@material-ui/core/Grow";
import Popover from "@material-ui/core/Popover";
import { Manager, Target, Popper } from "react-popper";
import { EnhancedSwitch, ClickAwayListener } from "_core/components/Reusables";
import * as mapActions from "_core/actions/mapActions";
import { LayerPositionIcon, LayerOpacityIcon } from "_core/components/LayerMenu";
import { LayerPositionControl, LayerOpacityControl } from "components/LayerMenu";
import MiscUtil from "_core/utils/MiscUtil";
import { LayerControlContainer as LayerControlContainerCore } from "_core/components/LayerMenu/LayerControlContainer.js";
import styles from "components/LayerMenu/LayerControlContainer.scss";
import textStyles from "_core/styles/text.scss";
import displayStyles from "_core/styles/display.scss";

export class LayerControlContainer extends LayerControlContainerCore {
    setLayerActive(active) {
        this.isChangingPosition = false;
        this.isChangingOpacity = false;
        this.props.mapActions.setLayerActive(this.props.layer.get("id"), active);
    }

    renderTopContent() {
        const active = this.props.layer.get("isActive");
        return (
            <div className={styles.topContent}>
                <EnhancedSwitch
                    checked={active}
                    onChange={(value, checked) => this.setLayerActive(!active)}
                    onClick={evt => this.setLayerActive(!active)}
                />
                <Typography
                    variant="body2"
                    className={`${styles.layerTitle} ${active ? textStyles.textEllipsis : ""}`}
                >
                    {this.props.layer.get("title")}
                </Typography>
                {this.renderIconRow()}
            </div>
        );
    }

    renderIconRow() {
        const active = this.props.layer.get("isActive");
        let classes = MiscUtil.generateStringFromSet({
            [styles.layerControlIconRow]: true,
            [styles.layerControlIconRow]: true,
            [displayStyles.invisible]: !active,
            [displayStyles.hiddenFadeIn]: active
        });

        let positionPopoverClasses = MiscUtil.generateStringFromSet({
            [styles.popover]: true,
            [styles.positionPopover]: true,
            [displayStyles.noPointer]: !this.isChangingPosition
        });

        let opacityPopoverClasses = MiscUtil.generateStringFromSet({
            [styles.popover]: true,
            [displayStyles.noPointer]: !this.isChangingOpacity
        });

        return (
            <div className={classes}>
                <Manager style={{ display: "inline-block" }}>
                    <ClickAwayListener
                        wrap={true}
                        onClickAway={() => {
                            if (this.isChangingPosition) {
                                this.toggleChangingPosition();
                            }
                        }}
                    >
                        <Target>
                            <LayerPositionIcon
                                displayIndex={this.props.layer.get("displayIndex")}
                                activeNum={this.props.activeNum}
                                className={styles.iconButtonSmall}
                                color={this.isChangingPosition ? "primary" : "default"}
                                onClick={() => this.toggleChangingPosition()}
                            />
                        </Target>
                        <Popper
                            placement="left"
                            modifiers={{
                                computeStyle: {
                                    gpuAcceleration: false
                                }
                            }}
                            eventsEnabled={this.isChangingPosition}
                            className={positionPopoverClasses}
                        >
                            <Grow style={{ transformOrigin: "right" }} in={this.isChangingPosition}>
                                <div>
                                    <LayerPositionControl
                                        isActive={this.isChangingPosition}
                                        moveToTop={() => this.moveToTop()}
                                        moveToBottom={() => this.moveToBottom()}
                                        moveUp={() => this.moveUp()}
                                        moveDown={() => this.moveDown()}
                                    />
                                </div>
                            </Grow>
                        </Popper>
                    </ClickAwayListener>
                    <ClickAwayListener
                        wrap={true}
                        onClickAway={() => {
                            if (this.isChangingOpacity) {
                                this.toggleChangingOpacity();
                            }
                        }}
                    >
                        <Target>
                            <LayerOpacityIcon
                                opacity={this.props.layer.get("opacity")}
                                className={styles.iconButtonSmall}
                                color={this.isChangingOpacity ? "primary" : "default"}
                                onClick={() => this.toggleChangingOpacity()}
                            />
                        </Target>
                        <Popper
                            placement="left"
                            modifiers={{
                                computeStyle: {
                                    gpuAcceleration: false
                                }
                            }}
                            className={opacityPopoverClasses}
                            eventsEnabled={this.isChangingOpacity}
                        >
                            <Grow style={{ transformOrigin: "right" }} in={this.isChangingOpacity}>
                                <div>
                                    <LayerOpacityControl
                                        isActive={this.isChangingOpacity}
                                        opacity={this.props.layer.get("opacity")}
                                        onChange={value => this.changeOpacity(value)}
                                    />
                                </div>
                            </Grow>
                        </Popper>
                    </ClickAwayListener>
                </Manager>
            </div>
        );
    }

    render() {
        let containerClasses = MiscUtil.generateStringFromSet({
            [this.props.className]: typeof this.props.className !== "undefined"
        });
        return (
            <div className={containerClasses}>
                {this.renderTopContent()}
                <Divider />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapActions: bindActionCreators(mapActions, dispatch)
    };
}

export default connect(
    null,
    mapDispatchToProps
)(LayerControlContainer);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import MiscUtil from "utils/MiscUtil";
import appConfig from "constants/appConfig";
import * as appActions from "actions/appActions";
import styles from "components/Plot/PlotCommandDisplay.scss";

export class PlotCommandDisplay extends Component {
    closeModal = () => {
        this.props.setPlotCommandDisplay(false);
    };

    copyRetrieve = () => {
        if (this.retrieveCmdText) {
            this.retrieveCmdText.focus();
            this.retrieveCmdText.select();

            document.execCommand("copy");
            this.retrieveCmdText.blur();
        }
    };

    copyPlot = () => {
        if (this.plotCmdText) {
            this.plotCmdText.focus();
            this.plotCmdText.select();

            document.execCommand("copy");
            this.plotCmdText.blur();
        }
    };

    render() {
        const { display, commandStr, className } = this.props;
        const containerClasses = MiscUtil.generateStringFromSet({
            [styles.root]: true,
            [this.props.className]: typeof className !== "undefined"
        });

        const plotStr = `ipycmc.plot_data("timeseries", data)`;

        return (
            <Dialog
                onClose={this.closeModal}
                aria-labelledby="customized-dialog-title"
                open={display}
                container={() => appConfig.RENDER_NODE}
                maxWidth="md"
                className={containerClasses}
                BackdropProps={{
                    className: styles.modalBackdrop
                }}
            >
                <MuiDialogTitle disableTypography className={styles.title}>
                    <Typography variant="h6">Notebook Plot Commands</Typography>
                    <IconButton
                        aria-label="Close"
                        className={styles.closeButton}
                        onClick={this.closeModal}
                    >
                        <CloseIcon />
                    </IconButton>
                </MuiDialogTitle>
                <MuiDialogContent className={styles.content}>
                    <Typography variant="subtitle2">Retrieve Data</Typography>
                    <Typography gutterBottom>
                        Enter this command to retrieve a json data structure packed with the
                        selected data. You may want to modify the plot type and the time range.
                    </Typography>
                    <Typography variant="overline">Signature</Typography>
                    <div className={styles.commandText}>
                        {`retrieve_data(plotType:String, startDate:String, endDate:String, layer_ids:Array<String>, geometry:Object)`}
                    </div>
                    <Typography variant="overline">Command</Typography>
                    <div className={styles.commandText}>{commandStr}</div>
                    <input
                        type="text"
                        ref={node => {
                            if (typeof node !== "undefined") {
                                this.retrieveCmdText = node;
                            }
                        }}
                        className={styles.hiddenCmdText}
                        value={commandStr}
                        readOnly
                    />
                    <div className={styles.buttonRow}>
                        <Button onClick={this.copyRetrieve} color="primary" size="small">
                            Copy Retrieval Command
                        </Button>
                    </div>
                    <Typography variant="subtitle2">Plot Data</Typography>
                    <Typography gutterBottom>
                        Enter this command to plot the retrieved data with our Plotly wrapper. You
                        may want to modify the plot type.
                    </Typography>
                    <Typography variant="overline">Signature</Typography>
                    <div className={styles.commandText}>
                        {`plot_data(plotType:String, data:Object)`}
                    </div>
                    <Typography variant="overline">Command</Typography>
                    <div className={styles.commandText}>{plotStr}</div>
                    <input
                        type="text"
                        ref={node => {
                            if (typeof node !== "undefined") {
                                this.plotCmdText = node;
                            }
                        }}
                        className={styles.hiddenCmdText}
                        value={plotStr}
                        readOnly
                    />
                    <div className={styles.buttonRow}>
                        <Button onClick={this.copyPlot} color="primary" size="small">
                            Copy Plot Command
                        </Button>
                    </div>
                </MuiDialogContent>
            </Dialog>
        );
    }
}

PlotCommandDisplay.propTypes = {
    display: PropTypes.bool.isRequired,
    commandStr: PropTypes.string.isRequired,
    setPlotCommandDisplay: PropTypes.func.isRequired,
    className: PropTypes.string
};

function mapStateToProps(state) {
    return {
        commandStr: state.plot.get("commandStr"),
        display: state.plot.get("display")
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setPlotCommandDisplay: bindActionCreators(appActions.setPlotCommandDisplay, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlotCommandDisplay);

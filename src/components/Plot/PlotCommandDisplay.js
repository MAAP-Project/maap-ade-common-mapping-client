import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
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
        const { display, commandStr, commandInfo, className } = this.props;
        const containerClasses = MiscUtil.generateStringFromSet({
            [styles.root]: true,
            [this.props.className]: typeof className !== "undefined"
        });

        const cmds = [
            `# Initialize parameter variables`,
            `plotType = "timeseries"`,
            `startDate = "${moment(commandInfo.get("startDate"))
                .utc()
                .toISOString()}"`,
            `endDate = "${moment(commandInfo.get("endDate"))
                .utc()
                .toISOString()}"`,
            `ds = [${commandInfo
                .get("layers")
                .map(l => '"' + l + '"')
                .join(", ")}]`,
            `geometry = ${JSON.stringify(commandInfo.get("geometry"))}`,
            `# Retrieve the data`,
            `data = ipycmc.retrieve_data(plotType, startDate, endDate, ds, geometry)`,
            `# Plot the data`,
            `ipycmc.plot_data(plotType, data)`
        ];

        const fullCmd = `<p>${cmds.slice(0, 6).join("<br />")}</p>
            <p>${cmds.slice(6, 8).join("<br />")}</p>
            <p>${cmds.slice(8).join("<br />")}</p>`;
        const fullCmdTxt = cmds.join("\r\n");

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
                    <Typography gutterBottom>
                        Enter this command to retrieve a json data structure packed with the
                        selected data and then plot it using Plotly. You may want to modify the
                        default plot type and the time range.
                    </Typography>
                    <Typography variant="overline">Command</Typography>
                    <div
                        className={styles.commandText}
                        dangerouslySetInnerHTML={{ __html: fullCmd }}
                    />
                    <textarea
                        type="text"
                        ref={node => {
                            if (typeof node !== "undefined") {
                                this.retrieveCmdText = node;
                            }
                        }}
                        className={styles.hiddenCmdText}
                        value={fullCmdTxt}
                        readOnly
                    />
                    <div className={styles.buttonRow}>
                        <Button onClick={this.copyRetrieve} color="primary" size="small">
                            Copy Command
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
    commandInfo: PropTypes.object.isRequired,
    setPlotCommandDisplay: PropTypes.func.isRequired,
    className: PropTypes.string
};

function mapStateToProps(state) {
    return {
        commandStr: state.plot.get("commandStr"),
        commandInfo: state.plot.get("commandInfo"),
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

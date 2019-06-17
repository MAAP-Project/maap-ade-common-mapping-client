import Immutable from "immutable";
import moment from "moment";

export const plotState = Immutable.fromJS({
    commandInfo: {
        plotType: "timeseries",
        layers: Immutable.Set(),
        startDate: new Date(),
        endDate: new Date(),
        geometry: {}
    },
    commandStr: "",
    display: false,
    alerts: []
});

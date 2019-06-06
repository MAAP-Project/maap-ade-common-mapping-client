import Immutable from "immutable";

export const plotState = Immutable.fromJS({
    commandInfo: {
        layers: [],
        startDate: [],
        endDate: [],
        geometry: {}
    },
    commandStr: "",
    display: false,
    alerts: []
});

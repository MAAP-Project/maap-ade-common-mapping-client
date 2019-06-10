//IMPORTANT: Note that with Redux, state should NEVER be changed.
//State is considered immutable. Instead,
//create a copy of the state passed and set new values on the copy.
import Immutable from "immutable";
import moment from "moment";

export default class PlotReducer {
    static generatePlotCommand(state, action) {
        const { layerIds, startDate, endDate, geometry } = action;

        const startDateStr = moment(startDate || new Date())
            .utc()
            .toISOString();
        const endDateStr = moment(endDate || new Date())
            .utc()
            .toISOString();
        const geom = Immutable.fromJS(geometry)
            .remove("coordinateType")
            .remove("id")
            .toJS();
        const layersStr = layerIds.join(", ");
        const geometryStr = JSON.stringify(geom);

        const commandStr = `data = ipycmc.retrieve_data("timeseries", "${startDateStr}", "${endDateStr}", [${layersStr}], ${geometryStr})`;

        return state
            .setIn(["commandInfo", "layers"], layerIds)
            .setIn(["commandInfo", "startDate"], startDate || new Date())
            .setIn(["commandInfo", "endDate"], endDate || new Date())
            .setIn(["commandInfo", "geometry"], geom)
            .set("commandStr", commandStr);
    }

    static setPlotCommandDisplay(state, action) {
        return state.set("display", action.display);
    }
}

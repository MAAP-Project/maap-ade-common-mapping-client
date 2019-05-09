import appConfig from "constants/appConfig";
import { mapState as mapStateCore } from "_core/reducers/models/map";

export const mapState = mapStateCore.mergeDeep({
    areaSelections: {},
    view: {
        projection: appConfig.DEFAULT_PROJECTION.code
    }
});

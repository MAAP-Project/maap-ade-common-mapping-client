import MapUtilCore from "_core/utils/MapUtil";
import { PROJECTIONS } from "_core/constants/appStrings";

export default class MapUtil extends MapUtilCore {
    static getPreconfiguredProjection(projCode) {
        for (const key in PROJECTIONS) {
            let p = PROJECTIONS[key];
            if (p.code === projCode || p.aliases.indexOf(projCode) !== -1) {
                return p;
            }
        }
        return false;
    }
}

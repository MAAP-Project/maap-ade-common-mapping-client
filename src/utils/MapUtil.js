import Immutable from "immutable";
import * as Ol_Proj from "ol/proj";
import MapUtilCore from "_core/utils/MapUtil";
import * as appStringsCore from "_core/constants/appStrings";

export default class MapUtil extends MapUtilCore {
    static getPreconfiguredProjection(projCode) {
        for (const key in appStringsCore.PROJECTIONS) {
            let p = appStringsCore.PROJECTIONS[key];
            if (p.code === projCode || p.aliases.indexOf(projCode) !== -1) {
                return p;
            }
        }
        return false;
    }

    static standardizeGeom(geometry) {
        let geom = Immutable.fromJS(geometry);
        if (geometry.type === appStringsCore.GEOMETRY_CIRCLE) {
            return geom.mergeDeep({
                radius:
                    geometry.radius /
                    Ol_Proj.METERS_PER_UNIT[
                        Ol_Proj.get(appStringsCore.PROJECTIONS.latlon.code).getUnits()
                    ]
            });
        }
        return geom;
    }
}

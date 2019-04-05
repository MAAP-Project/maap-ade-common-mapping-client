import appConfig from "constants/appConfig";

import MapWrapperCesiumCore from "_core/utils/MapWrapperCesium";

export default class MapWrapperCesium extends MapWrapperCesiumCore {
    resetView() {
        this.setExtent(appConfig.DEFAULT_BBOX_EXTENT);
    }
}

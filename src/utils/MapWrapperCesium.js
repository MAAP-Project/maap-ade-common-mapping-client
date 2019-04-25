import appConfig from "constants/appConfig";

import MapWrapperCesiumCore from "_core/utils/MapWrapperCesium";

export default class MapWrapperCesium extends MapWrapperCesiumCore {
    initCesium(container, options) {
        MapWrapperCesiumCore.prototype.initCesium.call(this, container, options);

        window.CESIUM_BASE_URL = appConfig.CESIUM_BASE_URL;
    }

    resetView() {
        this.setExtent(appConfig.DEFAULT_BBOX_EXTENT);
    }
}

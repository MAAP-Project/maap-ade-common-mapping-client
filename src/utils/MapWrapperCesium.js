import appConfig from "constants/appConfig";
import * as appStringsCore from "_core/constants/appStrings";
import MapWrapperCesiumCore from "_core/utils/MapWrapperCesium";

export default class MapWrapperCesium extends MapWrapperCesiumCore {
    initCesium(container, options) {
        MapWrapperCesiumCore.prototype.initCesium.call(this, container, options);

        window.CESIUM_BASE_URL = appConfig.CESIUM_BASE_URL;
    }

    addDrawHandler(geometryType, onDrawEnd, interactionType) {
        try {
            const interactionId = `_id${interactionType}${geometryType}`;
            const baseGeometry = {
                proj: appStringsCore.PROJECTIONS.latlon.code,
                type: geometryType
            };

            if (geometryType === appStringsCore.GEOMETRY_CIRCLE) {
                this.drawHandler._customInteractions[interactionId] = () => {
                    this.drawHandler.startDrawingCircle({
                        callback: (center, radius) => {
                            // Add geometry to cesium map since it's not done automatically
                            this.addGeometry(
                                {
                                    ...baseGeometry,
                                    id: Math.random(),
                                    center: center,
                                    radius: radius,
                                    coordinateType: appStringsCore.COORDINATE_TYPE_CARTESIAN
                                },
                                interactionType
                            );
                            if (typeof onDrawEnd === "function") {
                                // Recover geometry from event in cartographic
                                let cartographicCenter = this.cartesianToLatLon(center);
                                let geometry = {
                                    ...baseGeometry,
                                    id: Math.random(),
                                    center: cartographicCenter,
                                    radius: radius,
                                    coordinateType: appStringsCore.COORDINATE_TYPE_CARTOGRAPHIC
                                };
                                onDrawEnd(geometry);
                            }
                        }
                    });
                };
                return true;
            } else if (
                geometryType === appStringsCore.GEOMETRY_LINE_STRING ||
                geometryType === appStringsCore.GEOMETRY_LINE
            ) {
                const maxPoints = geometryType === appStringsCore.GEOMETRY_LINE ? 2 : undefined;
                this.drawHandler._customInteractions[interactionId] = () => {
                    this.drawHandler.startDrawingPolyline({
                        callback: coordinates => {
                            // Add geometry to cesium map since it's not done automatically
                            this.addGeometry(
                                {
                                    ...baseGeometry,
                                    id: Math.random(),
                                    coordinates: coordinates,
                                    coordinateType: appStringsCore.COORDINATE_TYPE_CARTESIAN
                                },
                                interactionType
                            );
                            if (typeof onDrawEnd === "function") {
                                // Recover geometry from event in cartographic
                                let cartographicCoordinates = coordinates.map(pos => {
                                    return this.cartesianToLatLon(pos);
                                });
                                let geometry = {
                                    ...baseGeometry,
                                    id: Math.random(),
                                    coordinates: cartographicCoordinates,
                                    coordinateType: appStringsCore.COORDINATE_TYPE_CARTOGRAPHIC
                                };
                                onDrawEnd(geometry);
                            }
                        },
                        maxPoints: maxPoints
                    });
                };
                return true;
            } else if (geometryType === appStringsCore.GEOMETRY_POLYGON) {
                this.drawHandler._customInteractions[interactionId] = () => {
                    this.drawHandler.startDrawingPolygon({
                        callback: coordinates => {
                            // Add geometry to cesium map since it's not done automatically
                            this.addGeometry(
                                {
                                    ...baseGeometry,
                                    id: Math.random(),
                                    coordinates: coordinates,
                                    coordinateType: appStringsCore.COORDINATE_TYPE_CARTESIAN
                                },
                                interactionType
                            );
                            if (typeof onDrawEnd === "function") {
                                // Recover geometry from event in cartographic
                                let cartographicCoordinates = coordinates.map(pos => {
                                    return this.cartesianToLatLon(pos);
                                });
                                let geometry = {
                                    ...baseGeometry,
                                    id: Math.random(),
                                    coordinates: cartographicCoordinates,
                                    coordinateType: appStringsCore.COORDINATE_TYPE_CARTOGRAPHIC
                                };
                                onDrawEnd(geometry);
                            }
                        }
                    });
                };
                return true;
            } else if (geometryType === appStringsCore.GEOMETRY_POINT) {
                this.drawHandler._customInteractions[interactionId] = () => {
                    this.drawHandler.startDrawingMarker({
                        callback: coordinates => {
                            // Add geometry to cesium map since it's not done automatically
                            this.addGeometry(
                                {
                                    ...baseGeometry,
                                    id: Math.random(),
                                    coordinates: coordinates,
                                    coordinateType: appStringsCore.COORDINATE_TYPE_CARTESIAN
                                },
                                interactionType
                            );
                            if (typeof onDrawEnd === "function") {
                                // Recover geometry from event in cartographic
                                let cartographicCoordinates = this.cartesianToLatLon(coordinates);
                                let geometry = {
                                    ...baseGeometry,
                                    id: Math.random(),
                                    coordinates: cartographicCoordinates,
                                    coordinateType: appStringsCore.COORDINATE_TYPE_CARTOGRAPHIC
                                };
                                onDrawEnd(geometry);
                            }
                        }
                    });
                };
                return true;
            } else if (geometryType === appStringsCore.GEOMETRY_BOX) {
                this.drawHandler._customInteractions[interactionId] = () => {
                    this.drawHandler.startDrawingExtent({
                        callback: extent => {
                            const coordinates = this.drawHandler.getExtentCorners(extent);
                            // Add geometry to cesium map since it's not done automatically
                            this.addGeometry(
                                {
                                    ...baseGeometry,
                                    id: Math.random(),
                                    coordinates: coordinates,
                                    coordinateType: appStringsCore.COORDINATE_TYPE_CARTESIAN
                                },
                                interactionType
                            );
                            if (typeof onDrawEnd === "function") {
                                // Recover geometry from event in cartographic
                                let cartographicCoordinates = coordinates.map(pos => {
                                    return this.cartesianToLatLon(pos);
                                });
                                let geometry = {
                                    ...baseGeometry,
                                    id: Math.random(),
                                    coordinates: cartographicCoordinates,
                                    coordinateType: appStringsCore.COORDINATE_TYPE_CARTOGRAPHIC
                                };
                                onDrawEnd(geometry);
                            }
                        }
                    });
                };
            }
            return false;
        } catch (err) {
            console.warn("Error in MapWrapperCesium.addDrawHandler:", err);
            return false;
        }
    }

    resetView() {
        this.setExtent(appConfig.DEFAULT_BBOX_EXTENT);
    }

    getDataAtPoint(coords, pixel, palettes) {
        const features = this.map.scene.drillPick({ x: pixel[0], y: pixel[1] }, 5);
        const data = features.reduce((acc, feature) => {
            let f = feature.primitive;
            if (f._interactionType === appStringsCore.INTERACTION_DRAW) {
                acc.push({
                    layerId: "_vector_drawings",
                    feature: f
                });
            }
            return acc;
        }, []);
        return data.slice(0, 1);
    }
}

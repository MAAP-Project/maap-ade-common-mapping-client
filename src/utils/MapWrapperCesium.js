import appConfig from "constants/appConfig";
import * as appStrings from "constants/appStrings";
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

    addGeometry(geometry, interactionType, geodesic = false) {
        const getGeomCartesianCoords = (geometry, multiplePoints = true) => {
            let cartesianCoords = null;
            // Check coordinate type
            if (geometry.coordinateType === appStringsCore.COORDINATE_TYPE_CARTOGRAPHIC) {
                // Transform coordinates from cartographic to cartesian
                if (multiplePoints) {
                    cartesianCoords = geometry.coordinates.map(x => {
                        return this.latLonToCartesian(x.lat, x.lon);
                    });
                } else {
                    const rawCoords = geometry.coordinates;
                    cartesianCoords = this.latLonToCartesian(rawCoords.lat, rawCoords.lon);
                }
            } else if (geometry.coordinateType === appStringsCore.COORDINATE_TYPE_CARTESIAN) {
                cartesianCoords = geometry.coordinates;
            } else {
                console.warn(
                    `Unhandled coordinate type when trying to draw cesium ${geometry.type}:`,
                    geometry.coordinateType
                );
                return false;
            }
            return cartesianCoords;
        };
        const getShapeMaterial = () => {
            let material = this.cesium.Material.fromType(this.cesium.Material.RimLightingType);
            material.uniforms.color = new this.cesium.Color.fromCssColorString(
                appConfig.GEOMETRY_FILL_COLOR
            );
            material.uniforms.rimColor = new this.cesium.Color.fromCssColorString(
                appConfig.GEOMETRY_FILL_COLOR
            );
            return material;
        };

        try {
            if (geometry.type === appStringsCore.GEOMETRY_CIRCLE) {
                let cesiumCenter = geometry.center;
                // Check coordinate type
                if (geometry.coordinateType === appStringsCore.COORDINATE_TYPE_CARTOGRAPHIC) {
                    cesiumCenter = this.latLonToCartesian(geometry.center.lat, geometry.center.lon);
                }
                const material = getShapeMaterial();
                let primitiveToAdd = new this.drawHelper.CirclePrimitive({
                    center: cesiumCenter,
                    radius: geometry.radius,
                    material: material,
                    showDrawingOutline: true
                });
                primitiveToAdd.id = geometry.id;
                primitiveToAdd._interactionType = interactionType;
                primitiveToAdd.setStrokeStyle(
                    new this.cesium.Color.fromCssColorString(appConfig.GEOMETRY_STROKE_COLOR),
                    appConfig.GEOMETRY_STROKE_WEIGHT
                );
                this.map.scene.primitives.add(primitiveToAdd);
                return true;
            } else if (
                geometry.type === appStringsCore.GEOMETRY_LINE_STRING ||
                geometry.type === appStringsCore.GEOMETRY_LINE
            ) {
                let cartesianCoords = getGeomCartesianCoords(geometry, true);
                let material = this.cesium.Material.fromType(this.cesium.Material.ColorType);
                material.uniforms.color = new this.cesium.Color.fromCssColorString(
                    appConfig.GEOMETRY_STROKE_COLOR
                );
                let primitiveToAdd = new this.drawHelper.PolylinePrimitive({
                    positions: cartesianCoords,
                    // width: appConfig.GEOMETRY_STROKE_WEIGHT,
                    width: 1.0, // match the other shapes
                    material: material,
                    showDrawingOutline: true,
                    geodesic: true
                });
                primitiveToAdd._interactionType = interactionType;
                primitiveToAdd.id = geometry.id;
                this.map.scene.primitives.add(primitiveToAdd);
                return true;
            } else if (
                geometry.type === appStringsCore.GEOMETRY_POLYGON ||
                geometry.type === appStringsCore.GEOMETRY_BOX
            ) {
                const cartesianCoords = getGeomCartesianCoords(geometry, true);
                const material = getShapeMaterial();
                let primitiveToAdd = new this.drawHelper.PolygonPrimitive({
                    positions: cartesianCoords,
                    material: material,
                    showDrawingOutline: true
                });
                primitiveToAdd.id = geometry.id;
                primitiveToAdd._interactionType = interactionType;
                primitiveToAdd.setStrokeStyle(
                    new this.cesium.Color.fromCssColorString(appConfig.GEOMETRY_STROKE_COLOR),
                    appConfig.GEOMETRY_STROKE_WEIGHT
                );
                this.map.scene.primitives.add(primitiveToAdd);
                return true;
            } else if (geometry.type === appStringsCore.GEOMETRY_POINT) {
                let cartesianCoords = getGeomCartesianCoords(geometry, false);
                const pointPrimitive = new this.cesium.PointPrimitive({
                    position: cartesianCoords,
                    color: new this.cesium.Color.fromCssColorString(
                        appConfig.GEOMETRY_STROKE_COLOR
                    ),
                    outlineColor: new this.cesium.Color(0.0, 0.0, 0.0, 1.0),
                    outlineWeight: appConfig.GEOMETRY_STROKE_WEIGHT,
                    pixelSize: 8.0
                });
                pointPrimitive.id = geometry.id;
                // add to our persistent PointPrimitiveCollection
                this.pointCollection.add(pointPrimitive);
                return true;
            }

            console.warn("add geometry not complete in cesium", geometry, " is unsupported");
            return false;
        } catch (err) {
            console.warn("Error in MapWrapperCesium.addGeometry:", err);
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
                    feature: f,
                    featureId: feature.id
                });
            }
            return acc;
        }, []);
        return data.slice(0, 1);
    }

    removeShape(shapeId) {
        try {
            let rFeature = false;
            let pList = this.map.scene.primitives;
            for (let i = 0; i < pList.length; ++i) {
                let f = pList.get(i);
                if (f.id === shapeId) {
                    rFeature = f;
                    break;
                }
            }

            if (rFeature) {
                pList.remove(rFeature);
            }
            return true;
        } catch (err) {
            console.warn(`WARN: could not remove shape with id ${shapeId}`, err);
            return false;
        }
    }

    addEventListener(eventStr, callback) {
        try {
            switch (eventStr) {
                case appStrings.EVENT_MOVE_START:
                    this.map.camera.moveStart.addEventListener(callback);
                    return true;

                default:
                    return MapWrapperCesiumCore.prototype.addEventListener.call(
                        this,
                        eventStr,
                        callback
                    );
            }
        } catch (err) {
            console.warn("Error in MapWrapperCesium.addEventListener:", err);
            return false;
        }
    }
}

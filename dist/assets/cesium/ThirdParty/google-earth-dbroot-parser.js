window.cesiumGoogleEarthDbRootParser = function(i) {
    "use strict";
    var e,
        r,
        l = i.Reader,
        s = (i.Writer, i.util),
        p = [],
        c = i.roots.default || (i.roots.default = {});
    function t(e) {
        if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
    }
    function o(e) {
        if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
    }
    function a(e) {
        if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
    }
    function n(e) {
        if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
    }
    function d(e) {
        if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
    }
    function u(e) {
        if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
    }
    function b(e) {
        if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
    }
    function y(e) {
        if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
    }
    function f(e) {
        if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
    }
    function h(e) {
        if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
    }
    function m(e) {
        if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
    }
    function v(e) {
        if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
    }
    function g(e) {
        if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
    }
    function P(e) {
        if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
    }
    function O(e) {
        if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
    }
    return (
        (c.keyhole = (((r = {}).dbroot = (((e = {}).StringEntryProto = ((t.prototype.stringId = 0),
        (t.prototype.stringValue = ""),
        (t.decode = function(e, r) {
            e instanceof l || (e = l.create(e));
            for (
                var t = void 0 === r ? e.len : e.pos + r,
                    o = new c.keyhole.dbroot.StringEntryProto();
                e.pos < t;

            ) {
                var a = e.uint32();
                switch (a >>> 3) {
                    case 1:
                        o.stringId = e.fixed32();
                        break;
                    case 2:
                        o.stringValue = e.string();
                        break;
                    default:
                        e.skipType(7 & a);
                }
            }
            return o;
        }),
        (t.verify = function(e) {
            return "object" != typeof e || null === e
                ? "object expected"
                : s.isInteger(e.stringId)
                ? s.isString(e.stringValue)
                    ? null
                    : "stringValue: string expected"
                : "stringId: integer expected";
        }),
        (t.from = t.fromObject = function(e) {
            if (e instanceof c.keyhole.dbroot.StringEntryProto) return e;
            var r = new c.keyhole.dbroot.StringEntryProto();
            return (
                void 0 !== e.stringId && null !== e.stringId && (r.stringId = e.stringId >>> 0),
                void 0 !== e.stringValue &&
                    null !== e.stringValue &&
                    (r.stringValue = String(e.stringValue)),
                r
            );
        }),
        (t.toObject = function(e, r) {
            r || (r = {});
            var t = {};
            return (
                r.defaults && ((t.stringId = 0), (t.stringValue = "")),
                void 0 !== e.stringId &&
                    null !== e.stringId &&
                    e.hasOwnProperty("stringId") &&
                    (t.stringId = e.stringId),
                void 0 !== e.stringValue &&
                    null !== e.stringValue &&
                    e.hasOwnProperty("stringValue") &&
                    (t.stringValue = e.stringValue),
                t
            );
        }),
        (t.prototype.toObject = function(e) {
            return this.constructor.toObject(this, e);
        }),
        (t.prototype.toJSON = function() {
            return this.constructor.toObject(this, i.util.toJSONOptions);
        }),
        t)),
        (e.StringIdOrValueProto = ((o.prototype.stringId = 0),
        (o.prototype.value = ""),
        (o.decode = function(e, r) {
            e instanceof l || (e = l.create(e));
            for (
                var t = void 0 === r ? e.len : e.pos + r,
                    o = new c.keyhole.dbroot.StringIdOrValueProto();
                e.pos < t;

            ) {
                var a = e.uint32();
                switch (a >>> 3) {
                    case 1:
                        o.stringId = e.fixed32();
                        break;
                    case 2:
                        o.value = e.string();
                        break;
                    default:
                        e.skipType(7 & a);
                }
            }
            return o;
        }),
        (o.verify = function(e) {
            return "object" != typeof e || null === e
                ? "object expected"
                : void 0 === e.stringId || s.isInteger(e.stringId)
                ? void 0 === e.value || s.isString(e.value)
                    ? null
                    : "value: string expected"
                : "stringId: integer expected";
        }),
        (o.from = o.fromObject = function(e) {
            if (e instanceof c.keyhole.dbroot.StringIdOrValueProto) return e;
            var r = new c.keyhole.dbroot.StringIdOrValueProto();
            return (
                void 0 !== e.stringId && null !== e.stringId && (r.stringId = e.stringId >>> 0),
                void 0 !== e.value && null !== e.value && (r.value = String(e.value)),
                r
            );
        }),
        (o.toObject = function(e, r) {
            r || (r = {});
            var t = {};
            return (
                r.defaults && ((t.stringId = 0), (t.value = "")),
                void 0 !== e.stringId &&
                    null !== e.stringId &&
                    e.hasOwnProperty("stringId") &&
                    (t.stringId = e.stringId),
                void 0 !== e.value &&
                    null !== e.value &&
                    e.hasOwnProperty("value") &&
                    (t.value = e.value),
                t
            );
        }),
        (o.prototype.toObject = function(e) {
            return this.constructor.toObject(this, e);
        }),
        (o.prototype.toJSON = function() {
            return this.constructor.toObject(this, i.util.toJSONOptions);
        }),
        o)),
        (e.PlanetModelProto = ((a.prototype.radius = 6378.137),
        (a.prototype.flattening = 0.00335281066474748),
        (a.prototype.elevationBias = 0),
        (a.prototype.negativeAltitudeExponentBias = 0),
        (a.prototype.compressedNegativeAltitudeThreshold = 0),
        (a.decode = function(e, r) {
            e instanceof l || (e = l.create(e));
            for (
                var t = void 0 === r ? e.len : e.pos + r,
                    o = new c.keyhole.dbroot.PlanetModelProto();
                e.pos < t;

            ) {
                var a = e.uint32();
                switch (a >>> 3) {
                    case 1:
                        o.radius = e.double();
                        break;
                    case 2:
                        o.flattening = e.double();
                        break;
                    case 4:
                        o.elevationBias = e.double();
                        break;
                    case 5:
                        o.negativeAltitudeExponentBias = e.int32();
                        break;
                    case 6:
                        o.compressedNegativeAltitudeThreshold = e.double();
                        break;
                    default:
                        e.skipType(7 & a);
                }
            }
            return o;
        }),
        (a.verify = function(e) {
            return "object" != typeof e || null === e
                ? "object expected"
                : void 0 !== e.radius && "number" != typeof e.radius
                ? "radius: number expected"
                : void 0 !== e.flattening && "number" != typeof e.flattening
                ? "flattening: number expected"
                : void 0 !== e.elevationBias && "number" != typeof e.elevationBias
                ? "elevationBias: number expected"
                : void 0 === e.negativeAltitudeExponentBias ||
                  s.isInteger(e.negativeAltitudeExponentBias)
                ? void 0 !== e.compressedNegativeAltitudeThreshold &&
                  "number" != typeof e.compressedNegativeAltitudeThreshold
                    ? "compressedNegativeAltitudeThreshold: number expected"
                    : null
                : "negativeAltitudeExponentBias: integer expected";
        }),
        (a.from = a.fromObject = function(e) {
            if (e instanceof c.keyhole.dbroot.PlanetModelProto) return e;
            var r = new c.keyhole.dbroot.PlanetModelProto();
            return (
                void 0 !== e.radius && null !== e.radius && (r.radius = Number(e.radius)),
                void 0 !== e.flattening &&
                    null !== e.flattening &&
                    (r.flattening = Number(e.flattening)),
                void 0 !== e.elevationBias &&
                    null !== e.elevationBias &&
                    (r.elevationBias = Number(e.elevationBias)),
                void 0 !== e.negativeAltitudeExponentBias &&
                    null !== e.negativeAltitudeExponentBias &&
                    (r.negativeAltitudeExponentBias = 0 | e.negativeAltitudeExponentBias),
                void 0 !== e.compressedNegativeAltitudeThreshold &&
                    null !== e.compressedNegativeAltitudeThreshold &&
                    (r.compressedNegativeAltitudeThreshold = Number(
                        e.compressedNegativeAltitudeThreshold
                    )),
                r
            );
        }),
        (a.toObject = function(e, r) {
            r || (r = {});
            var t = {};
            return (
                r.defaults &&
                    ((t.radius = 6378.137),
                    (t.flattening = 0.00335281066474748),
                    (t.elevationBias = 0),
                    (t.negativeAltitudeExponentBias = 0),
                    (t.compressedNegativeAltitudeThreshold = 0)),
                void 0 !== e.radius &&
                    null !== e.radius &&
                    e.hasOwnProperty("radius") &&
                    (t.radius = e.radius),
                void 0 !== e.flattening &&
                    null !== e.flattening &&
                    e.hasOwnProperty("flattening") &&
                    (t.flattening = e.flattening),
                void 0 !== e.elevationBias &&
                    null !== e.elevationBias &&
                    e.hasOwnProperty("elevationBias") &&
                    (t.elevationBias = e.elevationBias),
                void 0 !== e.negativeAltitudeExponentBias &&
                    null !== e.negativeAltitudeExponentBias &&
                    e.hasOwnProperty("negativeAltitudeExponentBias") &&
                    (t.negativeAltitudeExponentBias = e.negativeAltitudeExponentBias),
                void 0 !== e.compressedNegativeAltitudeThreshold &&
                    null !== e.compressedNegativeAltitudeThreshold &&
                    e.hasOwnProperty("compressedNegativeAltitudeThreshold") &&
                    (t.compressedNegativeAltitudeThreshold = e.compressedNegativeAltitudeThreshold),
                t
            );
        }),
        (a.prototype.toObject = function(e) {
            return this.constructor.toObject(this, e);
        }),
        (a.prototype.toJSON = function() {
            return this.constructor.toObject(this, i.util.toJSONOptions);
        }),
        a)),
        (e.ProviderInfoProto = (function() {
            function e(e) {
                if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
            }
            (e.prototype.providerId = 0),
                (e.prototype.copyrightString = null),
                (e.prototype.verticalPixelOffset = -1);
            var n = { 1: "keyhole.dbroot.StringIdOrValueProto" };
            return (
                p.push(n),
                (e.decode = function(e, r) {
                    e instanceof l || (e = l.create(e));
                    for (
                        var t = void 0 === r ? e.len : e.pos + r,
                            o = new c.keyhole.dbroot.ProviderInfoProto();
                        e.pos < t;

                    ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                            case 1:
                                o.providerId = e.int32();
                                break;
                            case 2:
                                o.copyrightString = n[1].decode(e, e.uint32());
                                break;
                            case 3:
                                o.verticalPixelOffset = e.int32();
                                break;
                            default:
                                e.skipType(7 & a);
                        }
                    }
                    return o;
                }),
                (e.verify = function(e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (!s.isInteger(e.providerId)) return "providerId: integer expected";
                    if (void 0 !== e.copyrightString && null !== e.copyrightString) {
                        var r = n[1].verify(e.copyrightString);
                        if (r) return "copyrightString." + r;
                    }
                    return void 0 === e.verticalPixelOffset || s.isInteger(e.verticalPixelOffset)
                        ? null
                        : "verticalPixelOffset: integer expected";
                }),
                (e.from = e.fromObject = function(e) {
                    if (e instanceof c.keyhole.dbroot.ProviderInfoProto) return e;
                    var r = new c.keyhole.dbroot.ProviderInfoProto();
                    if (
                        (void 0 !== e.providerId &&
                            null !== e.providerId &&
                            (r.providerId = 0 | e.providerId),
                        void 0 !== e.copyrightString && null !== e.copyrightString)
                    ) {
                        if ("object" != typeof e.copyrightString)
                            throw TypeError(
                                ".keyhole.dbroot.ProviderInfoProto.copyrightString: object expected"
                            );
                        r.copyrightString = n[1].fromObject(e.copyrightString);
                    }
                    return (
                        void 0 !== e.verticalPixelOffset &&
                            null !== e.verticalPixelOffset &&
                            (r.verticalPixelOffset = 0 | e.verticalPixelOffset),
                        r
                    );
                }),
                (e.toObject = function(e, r) {
                    r || (r = {});
                    var t = {};
                    return (
                        r.defaults &&
                            ((t.providerId = 0),
                            (t.copyrightString = null),
                            (t.verticalPixelOffset = -1)),
                        void 0 !== e.providerId &&
                            null !== e.providerId &&
                            e.hasOwnProperty("providerId") &&
                            (t.providerId = e.providerId),
                        void 0 !== e.copyrightString &&
                            null !== e.copyrightString &&
                            e.hasOwnProperty("copyrightString") &&
                            (t.copyrightString = n[1].toObject(e.copyrightString, r)),
                        void 0 !== e.verticalPixelOffset &&
                            null !== e.verticalPixelOffset &&
                            e.hasOwnProperty("verticalPixelOffset") &&
                            (t.verticalPixelOffset = e.verticalPixelOffset),
                        t
                    );
                }),
                (e.prototype.toObject = function(e) {
                    return this.constructor.toObject(this, e);
                }),
                (e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, i.util.toJSONOptions);
                }),
                e
            );
        })()),
        (e.PopUpProto = (function() {
            function e(e) {
                if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
            }
            (e.prototype.isBalloonStyle = !1),
                (e.prototype.text = null),
                (e.prototype.backgroundColorAbgr = 4294967295),
                (e.prototype.textColorAbgr = 4278190080);
            var n = { 1: "keyhole.dbroot.StringIdOrValueProto" };
            return (
                p.push(n),
                (e.decode = function(e, r) {
                    e instanceof l || (e = l.create(e));
                    for (
                        var t = void 0 === r ? e.len : e.pos + r,
                            o = new c.keyhole.dbroot.PopUpProto();
                        e.pos < t;

                    ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                            case 1:
                                o.isBalloonStyle = e.bool();
                                break;
                            case 2:
                                o.text = n[1].decode(e, e.uint32());
                                break;
                            case 3:
                                o.backgroundColorAbgr = e.fixed32();
                                break;
                            case 4:
                                o.textColorAbgr = e.fixed32();
                                break;
                            default:
                                e.skipType(7 & a);
                        }
                    }
                    return o;
                }),
                (e.verify = function(e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (void 0 !== e.isBalloonStyle && "boolean" != typeof e.isBalloonStyle)
                        return "isBalloonStyle: boolean expected";
                    if (void 0 !== e.text && null !== e.text) {
                        var r = n[1].verify(e.text);
                        if (r) return "text." + r;
                    }
                    return void 0 === e.backgroundColorAbgr || s.isInteger(e.backgroundColorAbgr)
                        ? void 0 === e.textColorAbgr || s.isInteger(e.textColorAbgr)
                            ? null
                            : "textColorAbgr: integer expected"
                        : "backgroundColorAbgr: integer expected";
                }),
                (e.from = e.fromObject = function(e) {
                    if (e instanceof c.keyhole.dbroot.PopUpProto) return e;
                    var r = new c.keyhole.dbroot.PopUpProto();
                    if (
                        (void 0 !== e.isBalloonStyle &&
                            null !== e.isBalloonStyle &&
                            (r.isBalloonStyle = Boolean(e.isBalloonStyle)),
                        void 0 !== e.text && null !== e.text)
                    ) {
                        if ("object" != typeof e.text)
                            throw TypeError(".keyhole.dbroot.PopUpProto.text: object expected");
                        r.text = n[1].fromObject(e.text);
                    }
                    return (
                        void 0 !== e.backgroundColorAbgr &&
                            null !== e.backgroundColorAbgr &&
                            (r.backgroundColorAbgr = e.backgroundColorAbgr >>> 0),
                        void 0 !== e.textColorAbgr &&
                            null !== e.textColorAbgr &&
                            (r.textColorAbgr = e.textColorAbgr >>> 0),
                        r
                    );
                }),
                (e.toObject = function(e, r) {
                    r || (r = {});
                    var t = {};
                    return (
                        r.defaults &&
                            ((t.isBalloonStyle = !1),
                            (t.text = null),
                            (t.backgroundColorAbgr = 4294967295),
                            (t.textColorAbgr = 4278190080)),
                        void 0 !== e.isBalloonStyle &&
                            null !== e.isBalloonStyle &&
                            e.hasOwnProperty("isBalloonStyle") &&
                            (t.isBalloonStyle = e.isBalloonStyle),
                        void 0 !== e.text &&
                            null !== e.text &&
                            e.hasOwnProperty("text") &&
                            (t.text = n[1].toObject(e.text, r)),
                        void 0 !== e.backgroundColorAbgr &&
                            null !== e.backgroundColorAbgr &&
                            e.hasOwnProperty("backgroundColorAbgr") &&
                            (t.backgroundColorAbgr = e.backgroundColorAbgr),
                        void 0 !== e.textColorAbgr &&
                            null !== e.textColorAbgr &&
                            e.hasOwnProperty("textColorAbgr") &&
                            (t.textColorAbgr = e.textColorAbgr),
                        t
                    );
                }),
                (e.prototype.toObject = function(e) {
                    return this.constructor.toObject(this, e);
                }),
                (e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, i.util.toJSONOptions);
                }),
                e
            );
        })()),
        (e.StyleAttributeProto = (function() {
            function e(e) {
                if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
            }
            (e.prototype.styleId = ""),
                (e.prototype.providerId = 0),
                (e.prototype.polyColorAbgr = 4294967295),
                (e.prototype.lineColorAbgr = 4294967295),
                (e.prototype.lineWidth = 1),
                (e.prototype.labelColorAbgr = 4294967295),
                (e.prototype.labelScale = 1),
                (e.prototype.placemarkIconColorAbgr = 4294967295),
                (e.prototype.placemarkIconScale = 1),
                (e.prototype.placemarkIconPath = null),
                (e.prototype.placemarkIconX = 0),
                (e.prototype.placemarkIconY = 0),
                (e.prototype.placemarkIconWidth = 32),
                (e.prototype.placemarkIconHeight = 32),
                (e.prototype.popUp = null),
                (e.prototype.drawFlag = s.emptyArray);
            var n = {
                9: "keyhole.dbroot.StringIdOrValueProto",
                14: "keyhole.dbroot.PopUpProto",
                15: "keyhole.dbroot.DrawFlagProto"
            };
            return (
                p.push(n),
                (e.decode = function(e, r) {
                    e instanceof l || (e = l.create(e));
                    for (
                        var t = void 0 === r ? e.len : e.pos + r,
                            o = new c.keyhole.dbroot.StyleAttributeProto();
                        e.pos < t;

                    ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                            case 1:
                                o.styleId = e.string();
                                break;
                            case 3:
                                o.providerId = e.int32();
                                break;
                            case 4:
                                o.polyColorAbgr = e.fixed32();
                                break;
                            case 5:
                                o.lineColorAbgr = e.fixed32();
                                break;
                            case 6:
                                o.lineWidth = e.float();
                                break;
                            case 7:
                                o.labelColorAbgr = e.fixed32();
                                break;
                            case 8:
                                o.labelScale = e.float();
                                break;
                            case 9:
                                o.placemarkIconColorAbgr = e.fixed32();
                                break;
                            case 10:
                                o.placemarkIconScale = e.float();
                                break;
                            case 11:
                                o.placemarkIconPath = n[9].decode(e, e.uint32());
                                break;
                            case 12:
                                o.placemarkIconX = e.int32();
                                break;
                            case 13:
                                o.placemarkIconY = e.int32();
                                break;
                            case 14:
                                o.placemarkIconWidth = e.int32();
                                break;
                            case 15:
                                o.placemarkIconHeight = e.int32();
                                break;
                            case 16:
                                o.popUp = n[14].decode(e, e.uint32());
                                break;
                            case 17:
                                (o.drawFlag && o.drawFlag.length) || (o.drawFlag = []),
                                    o.drawFlag.push(n[15].decode(e, e.uint32()));
                                break;
                            default:
                                e.skipType(7 & a);
                        }
                    }
                    return o;
                }),
                (e.verify = function(e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (!s.isString(e.styleId)) return "styleId: string expected";
                    if (void 0 !== e.providerId && !s.isInteger(e.providerId))
                        return "providerId: integer expected";
                    if (void 0 !== e.polyColorAbgr && !s.isInteger(e.polyColorAbgr))
                        return "polyColorAbgr: integer expected";
                    if (void 0 !== e.lineColorAbgr && !s.isInteger(e.lineColorAbgr))
                        return "lineColorAbgr: integer expected";
                    if (void 0 !== e.lineWidth && "number" != typeof e.lineWidth)
                        return "lineWidth: number expected";
                    if (void 0 !== e.labelColorAbgr && !s.isInteger(e.labelColorAbgr))
                        return "labelColorAbgr: integer expected";
                    if (void 0 !== e.labelScale && "number" != typeof e.labelScale)
                        return "labelScale: number expected";
                    if (
                        void 0 !== e.placemarkIconColorAbgr &&
                        !s.isInteger(e.placemarkIconColorAbgr)
                    )
                        return "placemarkIconColorAbgr: integer expected";
                    if (void 0 !== e.placemarkIconScale && "number" != typeof e.placemarkIconScale)
                        return "placemarkIconScale: number expected";
                    if (
                        void 0 !== e.placemarkIconPath &&
                        null !== e.placemarkIconPath &&
                        (t = n[9].verify(e.placemarkIconPath))
                    )
                        return "placemarkIconPath." + t;
                    if (void 0 !== e.placemarkIconX && !s.isInteger(e.placemarkIconX))
                        return "placemarkIconX: integer expected";
                    if (void 0 !== e.placemarkIconY && !s.isInteger(e.placemarkIconY))
                        return "placemarkIconY: integer expected";
                    if (void 0 !== e.placemarkIconWidth && !s.isInteger(e.placemarkIconWidth))
                        return "placemarkIconWidth: integer expected";
                    if (void 0 !== e.placemarkIconHeight && !s.isInteger(e.placemarkIconHeight))
                        return "placemarkIconHeight: integer expected";
                    if (void 0 !== e.popUp && null !== e.popUp && (t = n[14].verify(e.popUp)))
                        return "popUp." + t;
                    if (void 0 !== e.drawFlag) {
                        if (!Array.isArray(e.drawFlag)) return "drawFlag: array expected";
                        for (var r = 0; r < e.drawFlag.length; ++r) {
                            var t;
                            if ((t = n[15].verify(e.drawFlag[r]))) return "drawFlag." + t;
                        }
                    }
                    return null;
                }),
                (e.from = e.fromObject = function(e) {
                    if (e instanceof c.keyhole.dbroot.StyleAttributeProto) return e;
                    var r = new c.keyhole.dbroot.StyleAttributeProto();
                    if (
                        (void 0 !== e.styleId &&
                            null !== e.styleId &&
                            (r.styleId = String(e.styleId)),
                        void 0 !== e.providerId &&
                            null !== e.providerId &&
                            (r.providerId = 0 | e.providerId),
                        void 0 !== e.polyColorAbgr &&
                            null !== e.polyColorAbgr &&
                            (r.polyColorAbgr = e.polyColorAbgr >>> 0),
                        void 0 !== e.lineColorAbgr &&
                            null !== e.lineColorAbgr &&
                            (r.lineColorAbgr = e.lineColorAbgr >>> 0),
                        void 0 !== e.lineWidth &&
                            null !== e.lineWidth &&
                            (r.lineWidth = Number(e.lineWidth)),
                        void 0 !== e.labelColorAbgr &&
                            null !== e.labelColorAbgr &&
                            (r.labelColorAbgr = e.labelColorAbgr >>> 0),
                        void 0 !== e.labelScale &&
                            null !== e.labelScale &&
                            (r.labelScale = Number(e.labelScale)),
                        void 0 !== e.placemarkIconColorAbgr &&
                            null !== e.placemarkIconColorAbgr &&
                            (r.placemarkIconColorAbgr = e.placemarkIconColorAbgr >>> 0),
                        void 0 !== e.placemarkIconScale &&
                            null !== e.placemarkIconScale &&
                            (r.placemarkIconScale = Number(e.placemarkIconScale)),
                        void 0 !== e.placemarkIconPath && null !== e.placemarkIconPath)
                    ) {
                        if ("object" != typeof e.placemarkIconPath)
                            throw TypeError(
                                ".keyhole.dbroot.StyleAttributeProto.placemarkIconPath: object expected"
                            );
                        r.placemarkIconPath = n[9].fromObject(e.placemarkIconPath);
                    }
                    if (
                        (void 0 !== e.placemarkIconX &&
                            null !== e.placemarkIconX &&
                            (r.placemarkIconX = 0 | e.placemarkIconX),
                        void 0 !== e.placemarkIconY &&
                            null !== e.placemarkIconY &&
                            (r.placemarkIconY = 0 | e.placemarkIconY),
                        void 0 !== e.placemarkIconWidth &&
                            null !== e.placemarkIconWidth &&
                            (r.placemarkIconWidth = 0 | e.placemarkIconWidth),
                        void 0 !== e.placemarkIconHeight &&
                            null !== e.placemarkIconHeight &&
                            (r.placemarkIconHeight = 0 | e.placemarkIconHeight),
                        void 0 !== e.popUp && null !== e.popUp)
                    ) {
                        if ("object" != typeof e.popUp)
                            throw TypeError(
                                ".keyhole.dbroot.StyleAttributeProto.popUp: object expected"
                            );
                        r.popUp = n[14].fromObject(e.popUp);
                    }
                    if (e.drawFlag) {
                        if (!Array.isArray(e.drawFlag))
                            throw TypeError(
                                ".keyhole.dbroot.StyleAttributeProto.drawFlag: array expected"
                            );
                        r.drawFlag = [];
                        for (var t = 0; t < e.drawFlag.length; ++t) {
                            if ("object" != typeof e.drawFlag[t])
                                throw TypeError(
                                    ".keyhole.dbroot.StyleAttributeProto.drawFlag: object expected"
                                );
                            r.drawFlag[t] = n[15].fromObject(e.drawFlag[t]);
                        }
                    }
                    return r;
                }),
                (e.toObject = function(e, r) {
                    r || (r = {});
                    var t = {};
                    if (
                        ((r.arrays || r.defaults) && (t.drawFlag = []),
                        r.defaults &&
                            ((t.styleId = ""),
                            (t.providerId = 0),
                            (t.polyColorAbgr = 4294967295),
                            (t.lineColorAbgr = 4294967295),
                            (t.lineWidth = 1),
                            (t.labelColorAbgr = 4294967295),
                            (t.labelScale = 1),
                            (t.placemarkIconColorAbgr = 4294967295),
                            (t.placemarkIconScale = 1),
                            (t.placemarkIconPath = null),
                            (t.placemarkIconX = 0),
                            (t.placemarkIconY = 0),
                            (t.placemarkIconWidth = 32),
                            (t.placemarkIconHeight = 32),
                            (t.popUp = null)),
                        void 0 !== e.styleId &&
                            null !== e.styleId &&
                            e.hasOwnProperty("styleId") &&
                            (t.styleId = e.styleId),
                        void 0 !== e.providerId &&
                            null !== e.providerId &&
                            e.hasOwnProperty("providerId") &&
                            (t.providerId = e.providerId),
                        void 0 !== e.polyColorAbgr &&
                            null !== e.polyColorAbgr &&
                            e.hasOwnProperty("polyColorAbgr") &&
                            (t.polyColorAbgr = e.polyColorAbgr),
                        void 0 !== e.lineColorAbgr &&
                            null !== e.lineColorAbgr &&
                            e.hasOwnProperty("lineColorAbgr") &&
                            (t.lineColorAbgr = e.lineColorAbgr),
                        void 0 !== e.lineWidth &&
                            null !== e.lineWidth &&
                            e.hasOwnProperty("lineWidth") &&
                            (t.lineWidth = e.lineWidth),
                        void 0 !== e.labelColorAbgr &&
                            null !== e.labelColorAbgr &&
                            e.hasOwnProperty("labelColorAbgr") &&
                            (t.labelColorAbgr = e.labelColorAbgr),
                        void 0 !== e.labelScale &&
                            null !== e.labelScale &&
                            e.hasOwnProperty("labelScale") &&
                            (t.labelScale = e.labelScale),
                        void 0 !== e.placemarkIconColorAbgr &&
                            null !== e.placemarkIconColorAbgr &&
                            e.hasOwnProperty("placemarkIconColorAbgr") &&
                            (t.placemarkIconColorAbgr = e.placemarkIconColorAbgr),
                        void 0 !== e.placemarkIconScale &&
                            null !== e.placemarkIconScale &&
                            e.hasOwnProperty("placemarkIconScale") &&
                            (t.placemarkIconScale = e.placemarkIconScale),
                        void 0 !== e.placemarkIconPath &&
                            null !== e.placemarkIconPath &&
                            e.hasOwnProperty("placemarkIconPath") &&
                            (t.placemarkIconPath = n[9].toObject(e.placemarkIconPath, r)),
                        void 0 !== e.placemarkIconX &&
                            null !== e.placemarkIconX &&
                            e.hasOwnProperty("placemarkIconX") &&
                            (t.placemarkIconX = e.placemarkIconX),
                        void 0 !== e.placemarkIconY &&
                            null !== e.placemarkIconY &&
                            e.hasOwnProperty("placemarkIconY") &&
                            (t.placemarkIconY = e.placemarkIconY),
                        void 0 !== e.placemarkIconWidth &&
                            null !== e.placemarkIconWidth &&
                            e.hasOwnProperty("placemarkIconWidth") &&
                            (t.placemarkIconWidth = e.placemarkIconWidth),
                        void 0 !== e.placemarkIconHeight &&
                            null !== e.placemarkIconHeight &&
                            e.hasOwnProperty("placemarkIconHeight") &&
                            (t.placemarkIconHeight = e.placemarkIconHeight),
                        void 0 !== e.popUp &&
                            null !== e.popUp &&
                            e.hasOwnProperty("popUp") &&
                            (t.popUp = n[14].toObject(e.popUp, r)),
                        void 0 !== e.drawFlag &&
                            null !== e.drawFlag &&
                            e.hasOwnProperty("drawFlag"))
                    ) {
                        t.drawFlag = [];
                        for (var o = 0; o < e.drawFlag.length; ++o)
                            t.drawFlag[o] = n[15].toObject(e.drawFlag[o], r);
                    }
                    return t;
                }),
                (e.prototype.toObject = function(e) {
                    return this.constructor.toObject(this, e);
                }),
                (e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, i.util.toJSONOptions);
                }),
                e
            );
        })()),
        (e.StyleMapProto = ((n.prototype.styleMapId = 0),
        (n.prototype.channelId = s.emptyArray),
        (n.prototype.normalStyleAttribute = 0),
        (n.prototype.highlightStyleAttribute = 0),
        (n.decode = function(e, r) {
            e instanceof l || (e = l.create(e));
            for (
                var t = void 0 === r ? e.len : e.pos + r, o = new c.keyhole.dbroot.StyleMapProto();
                e.pos < t;

            ) {
                var a = e.uint32();
                switch (a >>> 3) {
                    case 1:
                        o.styleMapId = e.int32();
                        break;
                    case 2:
                        if (
                            ((o.channelId && o.channelId.length) || (o.channelId = []),
                            2 == (7 & a))
                        )
                            for (var n = e.uint32() + e.pos; e.pos < n; )
                                o.channelId.push(e.int32());
                        else o.channelId.push(e.int32());
                        break;
                    case 3:
                        o.normalStyleAttribute = e.int32();
                        break;
                    case 4:
                        o.highlightStyleAttribute = e.int32();
                        break;
                    default:
                        e.skipType(7 & a);
                }
            }
            return o;
        }),
        (n.verify = function(e) {
            if ("object" != typeof e || null === e) return "object expected";
            if (!s.isInteger(e.styleMapId)) return "styleMapId: integer expected";
            if (void 0 !== e.channelId) {
                if (!Array.isArray(e.channelId)) return "channelId: array expected";
                for (var r = 0; r < e.channelId.length; ++r)
                    if (!s.isInteger(e.channelId[r])) return "channelId: integer[] expected";
            }
            return void 0 === e.normalStyleAttribute || s.isInteger(e.normalStyleAttribute)
                ? void 0 === e.highlightStyleAttribute || s.isInteger(e.highlightStyleAttribute)
                    ? null
                    : "highlightStyleAttribute: integer expected"
                : "normalStyleAttribute: integer expected";
        }),
        (n.from = n.fromObject = function(e) {
            if (e instanceof c.keyhole.dbroot.StyleMapProto) return e;
            var r = new c.keyhole.dbroot.StyleMapProto();
            if (
                (void 0 !== e.styleMapId &&
                    null !== e.styleMapId &&
                    (r.styleMapId = 0 | e.styleMapId),
                e.channelId)
            ) {
                if (!Array.isArray(e.channelId))
                    throw TypeError(".keyhole.dbroot.StyleMapProto.channelId: array expected");
                r.channelId = [];
                for (var t = 0; t < e.channelId.length; ++t) r.channelId[t] = 0 | e.channelId[t];
            }
            return (
                void 0 !== e.normalStyleAttribute &&
                    null !== e.normalStyleAttribute &&
                    (r.normalStyleAttribute = 0 | e.normalStyleAttribute),
                void 0 !== e.highlightStyleAttribute &&
                    null !== e.highlightStyleAttribute &&
                    (r.highlightStyleAttribute = 0 | e.highlightStyleAttribute),
                r
            );
        }),
        (n.toObject = function(e, r) {
            r || (r = {});
            var t = {};
            if (
                ((r.arrays || r.defaults) && (t.channelId = []),
                r.defaults &&
                    ((t.styleMapId = 0),
                    (t.normalStyleAttribute = 0),
                    (t.highlightStyleAttribute = 0)),
                void 0 !== e.styleMapId &&
                    null !== e.styleMapId &&
                    e.hasOwnProperty("styleMapId") &&
                    (t.styleMapId = e.styleMapId),
                void 0 !== e.channelId && null !== e.channelId && e.hasOwnProperty("channelId"))
            ) {
                t.channelId = [];
                for (var o = 0; o < e.channelId.length; ++o) t.channelId[o] = e.channelId[o];
            }
            return (
                void 0 !== e.normalStyleAttribute &&
                    null !== e.normalStyleAttribute &&
                    e.hasOwnProperty("normalStyleAttribute") &&
                    (t.normalStyleAttribute = e.normalStyleAttribute),
                void 0 !== e.highlightStyleAttribute &&
                    null !== e.highlightStyleAttribute &&
                    e.hasOwnProperty("highlightStyleAttribute") &&
                    (t.highlightStyleAttribute = e.highlightStyleAttribute),
                t
            );
        }),
        (n.prototype.toObject = function(e) {
            return this.constructor.toObject(this, e);
        }),
        (n.prototype.toJSON = function() {
            return this.constructor.toObject(this, i.util.toJSONOptions);
        }),
        n)),
        (e.ZoomRangeProto = ((d.prototype.minZoom = 0),
        (d.prototype.maxZoom = 0),
        (d.decode = function(e, r) {
            e instanceof l || (e = l.create(e));
            for (
                var t = void 0 === r ? e.len : e.pos + r, o = new c.keyhole.dbroot.ZoomRangeProto();
                e.pos < t;

            ) {
                var a = e.uint32();
                switch (a >>> 3) {
                    case 1:
                        o.minZoom = e.int32();
                        break;
                    case 2:
                        o.maxZoom = e.int32();
                        break;
                    default:
                        e.skipType(7 & a);
                }
            }
            return o;
        }),
        (d.verify = function(e) {
            return "object" != typeof e || null === e
                ? "object expected"
                : s.isInteger(e.minZoom)
                ? s.isInteger(e.maxZoom)
                    ? null
                    : "maxZoom: integer expected"
                : "minZoom: integer expected";
        }),
        (d.from = d.fromObject = function(e) {
            if (e instanceof c.keyhole.dbroot.ZoomRangeProto) return e;
            var r = new c.keyhole.dbroot.ZoomRangeProto();
            return (
                void 0 !== e.minZoom && null !== e.minZoom && (r.minZoom = 0 | e.minZoom),
                void 0 !== e.maxZoom && null !== e.maxZoom && (r.maxZoom = 0 | e.maxZoom),
                r
            );
        }),
        (d.toObject = function(e, r) {
            r || (r = {});
            var t = {};
            return (
                r.defaults && ((t.minZoom = 0), (t.maxZoom = 0)),
                void 0 !== e.minZoom &&
                    null !== e.minZoom &&
                    e.hasOwnProperty("minZoom") &&
                    (t.minZoom = e.minZoom),
                void 0 !== e.maxZoom &&
                    null !== e.maxZoom &&
                    e.hasOwnProperty("maxZoom") &&
                    (t.maxZoom = e.maxZoom),
                t
            );
        }),
        (d.prototype.toObject = function(e) {
            return this.constructor.toObject(this, e);
        }),
        (d.prototype.toJSON = function() {
            return this.constructor.toObject(this, i.util.toJSONOptions);
        }),
        d)),
        (e.DrawFlagProto = (function() {
            function e(e) {
                if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
            }
            e.prototype.drawFlagType = 1;
            var r,
                o = { 0: "keyhole.dbroot.DrawFlagProto.DrawFlagType" };
            return (
                p.push(o),
                (e.decode = function(e, r) {
                    e instanceof l || (e = l.create(e));
                    for (
                        var t = void 0 === r ? e.len : e.pos + r,
                            o = new c.keyhole.dbroot.DrawFlagProto();
                        e.pos < t;

                    ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                            case 1:
                                o.drawFlagType = e.uint32();
                                break;
                            default:
                                e.skipType(7 & a);
                        }
                    }
                    return o;
                }),
                (e.verify = function(e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    switch (e.drawFlagType) {
                        default:
                            return "drawFlagType: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                    }
                    return null;
                }),
                (e.from = e.fromObject = function(e) {
                    if (e instanceof c.keyhole.dbroot.DrawFlagProto) return e;
                    var r = new c.keyhole.dbroot.DrawFlagProto();
                    switch (e.drawFlagType) {
                        case "TYPE_FILL_ONLY":
                        case 1:
                            r.drawFlagType = 1;
                            break;
                        case "TYPE_OUTLINE_ONLY":
                        case 2:
                            r.drawFlagType = 2;
                            break;
                        case "TYPE_FILL_AND_OUTLINE":
                        case 3:
                            r.drawFlagType = 3;
                            break;
                        case "TYPE_ANTIALIASING":
                        case 4:
                            r.drawFlagType = 4;
                            break;
                        case "TYPE_CENTER_LABEL":
                        case 5:
                            r.drawFlagType = 5;
                    }
                    return r;
                }),
                (e.toObject = function(e, r) {
                    r || (r = {});
                    var t = {};
                    return (
                        r.defaults && (t.drawFlagType = r.enums === String ? "TYPE_FILL_ONLY" : 1),
                        void 0 !== e.drawFlagType &&
                            null !== e.drawFlagType &&
                            e.hasOwnProperty("drawFlagType") &&
                            (t.drawFlagType =
                                r.enums === String ? o[0][e.drawFlagType] : e.drawFlagType),
                        t
                    );
                }),
                (e.prototype.toObject = function(e) {
                    return this.constructor.toObject(this, e);
                }),
                (e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, i.util.toJSONOptions);
                }),
                (e.DrawFlagType = (((r = Object.create({})).TYPE_FILL_ONLY = 1),
                (r.TYPE_OUTLINE_ONLY = 2),
                (r.TYPE_FILL_AND_OUTLINE = 3),
                (r.TYPE_ANTIALIASING = 4),
                (r.TYPE_CENTER_LABEL = 5),
                r)),
                e
            );
        })()),
        (e.LayerProto = (function() {
            function e(e) {
                if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
            }
            (e.prototype.zoomRange = s.emptyArray),
                (e.prototype.preserveTextLevel = 30),
                (e.prototype.lodBeginTransition = !1),
                (e.prototype.lodEndTransition = !1);
            var n = { 0: "keyhole.dbroot.ZoomRangeProto" };
            return (
                p.push(n),
                (e.decode = function(e, r) {
                    e instanceof l || (e = l.create(e));
                    for (
                        var t = void 0 === r ? e.len : e.pos + r,
                            o = new c.keyhole.dbroot.LayerProto();
                        e.pos < t;

                    ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                            case 1:
                                (o.zoomRange && o.zoomRange.length) || (o.zoomRange = []),
                                    o.zoomRange.push(n[0].decode(e, e.uint32()));
                                break;
                            case 2:
                                o.preserveTextLevel = e.int32();
                                break;
                            case 4:
                                o.lodBeginTransition = e.bool();
                                break;
                            case 5:
                                o.lodEndTransition = e.bool();
                                break;
                            default:
                                e.skipType(7 & a);
                        }
                    }
                    return o;
                }),
                (e.verify = function(e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (void 0 !== e.zoomRange) {
                        if (!Array.isArray(e.zoomRange)) return "zoomRange: array expected";
                        for (var r = 0; r < e.zoomRange.length; ++r) {
                            var t = n[0].verify(e.zoomRange[r]);
                            if (t) return "zoomRange." + t;
                        }
                    }
                    return void 0 === e.preserveTextLevel || s.isInteger(e.preserveTextLevel)
                        ? void 0 !== e.lodBeginTransition &&
                          "boolean" != typeof e.lodBeginTransition
                            ? "lodBeginTransition: boolean expected"
                            : void 0 !== e.lodEndTransition &&
                              "boolean" != typeof e.lodEndTransition
                            ? "lodEndTransition: boolean expected"
                            : null
                        : "preserveTextLevel: integer expected";
                }),
                (e.from = e.fromObject = function(e) {
                    if (e instanceof c.keyhole.dbroot.LayerProto) return e;
                    var r = new c.keyhole.dbroot.LayerProto();
                    if (e.zoomRange) {
                        if (!Array.isArray(e.zoomRange))
                            throw TypeError(".keyhole.dbroot.LayerProto.zoomRange: array expected");
                        r.zoomRange = [];
                        for (var t = 0; t < e.zoomRange.length; ++t) {
                            if ("object" != typeof e.zoomRange[t])
                                throw TypeError(
                                    ".keyhole.dbroot.LayerProto.zoomRange: object expected"
                                );
                            r.zoomRange[t] = n[0].fromObject(e.zoomRange[t]);
                        }
                    }
                    return (
                        void 0 !== e.preserveTextLevel &&
                            null !== e.preserveTextLevel &&
                            (r.preserveTextLevel = 0 | e.preserveTextLevel),
                        void 0 !== e.lodBeginTransition &&
                            null !== e.lodBeginTransition &&
                            (r.lodBeginTransition = Boolean(e.lodBeginTransition)),
                        void 0 !== e.lodEndTransition &&
                            null !== e.lodEndTransition &&
                            (r.lodEndTransition = Boolean(e.lodEndTransition)),
                        r
                    );
                }),
                (e.toObject = function(e, r) {
                    r || (r = {});
                    var t = {};
                    if (
                        ((r.arrays || r.defaults) && (t.zoomRange = []),
                        r.defaults &&
                            ((t.preserveTextLevel = 30),
                            (t.lodBeginTransition = !1),
                            (t.lodEndTransition = !1)),
                        void 0 !== e.zoomRange &&
                            null !== e.zoomRange &&
                            e.hasOwnProperty("zoomRange"))
                    ) {
                        t.zoomRange = [];
                        for (var o = 0; o < e.zoomRange.length; ++o)
                            t.zoomRange[o] = n[0].toObject(e.zoomRange[o], r);
                    }
                    return (
                        void 0 !== e.preserveTextLevel &&
                            null !== e.preserveTextLevel &&
                            e.hasOwnProperty("preserveTextLevel") &&
                            (t.preserveTextLevel = e.preserveTextLevel),
                        void 0 !== e.lodBeginTransition &&
                            null !== e.lodBeginTransition &&
                            e.hasOwnProperty("lodBeginTransition") &&
                            (t.lodBeginTransition = e.lodBeginTransition),
                        void 0 !== e.lodEndTransition &&
                            null !== e.lodEndTransition &&
                            e.hasOwnProperty("lodEndTransition") &&
                            (t.lodEndTransition = e.lodEndTransition),
                        t
                    );
                }),
                (e.prototype.toObject = function(e) {
                    return this.constructor.toObject(this, e);
                }),
                (e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, i.util.toJSONOptions);
                }),
                e
            );
        })()),
        (e.FolderProto = ((u.prototype.isExpandable = !0),
        (u.decode = function(e, r) {
            e instanceof l || (e = l.create(e));
            for (
                var t = void 0 === r ? e.len : e.pos + r, o = new c.keyhole.dbroot.FolderProto();
                e.pos < t;

            ) {
                var a = e.uint32();
                switch (a >>> 3) {
                    case 1:
                        o.isExpandable = e.bool();
                        break;
                    default:
                        e.skipType(7 & a);
                }
            }
            return o;
        }),
        (u.verify = function(e) {
            return "object" != typeof e || null === e
                ? "object expected"
                : void 0 !== e.isExpandable && "boolean" != typeof e.isExpandable
                ? "isExpandable: boolean expected"
                : null;
        }),
        (u.from = u.fromObject = function(e) {
            if (e instanceof c.keyhole.dbroot.FolderProto) return e;
            var r = new c.keyhole.dbroot.FolderProto();
            return (
                void 0 !== e.isExpandable &&
                    null !== e.isExpandable &&
                    (r.isExpandable = Boolean(e.isExpandable)),
                r
            );
        }),
        (u.toObject = function(e, r) {
            r || (r = {});
            var t = {};
            return (
                r.defaults && (t.isExpandable = !0),
                void 0 !== e.isExpandable &&
                    null !== e.isExpandable &&
                    e.hasOwnProperty("isExpandable") &&
                    (t.isExpandable = e.isExpandable),
                t
            );
        }),
        (u.prototype.toObject = function(e) {
            return this.constructor.toObject(this, e);
        }),
        (u.prototype.toJSON = function() {
            return this.constructor.toObject(this, i.util.toJSONOptions);
        }),
        u)),
        (e.RequirementProto = ((b.prototype.requiredVram = ""),
        (b.prototype.requiredClientVer = ""),
        (b.prototype.probability = ""),
        (b.prototype.requiredUserAgent = ""),
        (b.prototype.requiredClientCapabilities = ""),
        (b.decode = function(e, r) {
            e instanceof l || (e = l.create(e));
            for (
                var t = void 0 === r ? e.len : e.pos + r,
                    o = new c.keyhole.dbroot.RequirementProto();
                e.pos < t;

            ) {
                var a = e.uint32();
                switch (a >>> 3) {
                    case 3:
                        o.requiredVram = e.string();
                        break;
                    case 4:
                        o.requiredClientVer = e.string();
                        break;
                    case 5:
                        o.probability = e.string();
                        break;
                    case 6:
                        o.requiredUserAgent = e.string();
                        break;
                    case 7:
                        o.requiredClientCapabilities = e.string();
                        break;
                    default:
                        e.skipType(7 & a);
                }
            }
            return o;
        }),
        (b.verify = function(e) {
            return "object" != typeof e || null === e
                ? "object expected"
                : void 0 === e.requiredVram || s.isString(e.requiredVram)
                ? void 0 === e.requiredClientVer || s.isString(e.requiredClientVer)
                    ? void 0 === e.probability || s.isString(e.probability)
                        ? void 0 === e.requiredUserAgent || s.isString(e.requiredUserAgent)
                            ? void 0 === e.requiredClientCapabilities ||
                              s.isString(e.requiredClientCapabilities)
                                ? null
                                : "requiredClientCapabilities: string expected"
                            : "requiredUserAgent: string expected"
                        : "probability: string expected"
                    : "requiredClientVer: string expected"
                : "requiredVram: string expected";
        }),
        (b.from = b.fromObject = function(e) {
            if (e instanceof c.keyhole.dbroot.RequirementProto) return e;
            var r = new c.keyhole.dbroot.RequirementProto();
            return (
                void 0 !== e.requiredVram &&
                    null !== e.requiredVram &&
                    (r.requiredVram = String(e.requiredVram)),
                void 0 !== e.requiredClientVer &&
                    null !== e.requiredClientVer &&
                    (r.requiredClientVer = String(e.requiredClientVer)),
                void 0 !== e.probability &&
                    null !== e.probability &&
                    (r.probability = String(e.probability)),
                void 0 !== e.requiredUserAgent &&
                    null !== e.requiredUserAgent &&
                    (r.requiredUserAgent = String(e.requiredUserAgent)),
                void 0 !== e.requiredClientCapabilities &&
                    null !== e.requiredClientCapabilities &&
                    (r.requiredClientCapabilities = String(e.requiredClientCapabilities)),
                r
            );
        }),
        (b.toObject = function(e, r) {
            r || (r = {});
            var t = {};
            return (
                r.defaults &&
                    ((t.requiredVram = ""),
                    (t.requiredClientVer = ""),
                    (t.probability = ""),
                    (t.requiredUserAgent = ""),
                    (t.requiredClientCapabilities = "")),
                void 0 !== e.requiredVram &&
                    null !== e.requiredVram &&
                    e.hasOwnProperty("requiredVram") &&
                    (t.requiredVram = e.requiredVram),
                void 0 !== e.requiredClientVer &&
                    null !== e.requiredClientVer &&
                    e.hasOwnProperty("requiredClientVer") &&
                    (t.requiredClientVer = e.requiredClientVer),
                void 0 !== e.probability &&
                    null !== e.probability &&
                    e.hasOwnProperty("probability") &&
                    (t.probability = e.probability),
                void 0 !== e.requiredUserAgent &&
                    null !== e.requiredUserAgent &&
                    e.hasOwnProperty("requiredUserAgent") &&
                    (t.requiredUserAgent = e.requiredUserAgent),
                void 0 !== e.requiredClientCapabilities &&
                    null !== e.requiredClientCapabilities &&
                    e.hasOwnProperty("requiredClientCapabilities") &&
                    (t.requiredClientCapabilities = e.requiredClientCapabilities),
                t
            );
        }),
        (b.prototype.toObject = function(e) {
            return this.constructor.toObject(this, e);
        }),
        (b.prototype.toJSON = function() {
            return this.constructor.toObject(this, i.util.toJSONOptions);
        }),
        b)),
        (e.LookAtProto = ((y.prototype.longitude = 0),
        (y.prototype.latitude = 0),
        (y.prototype.range = 0),
        (y.prototype.tilt = 0),
        (y.prototype.heading = 0),
        (y.decode = function(e, r) {
            e instanceof l || (e = l.create(e));
            for (
                var t = void 0 === r ? e.len : e.pos + r, o = new c.keyhole.dbroot.LookAtProto();
                e.pos < t;

            ) {
                var a = e.uint32();
                switch (a >>> 3) {
                    case 1:
                        o.longitude = e.float();
                        break;
                    case 2:
                        o.latitude = e.float();
                        break;
                    case 3:
                        o.range = e.float();
                        break;
                    case 4:
                        o.tilt = e.float();
                        break;
                    case 5:
                        o.heading = e.float();
                        break;
                    default:
                        e.skipType(7 & a);
                }
            }
            return o;
        }),
        (y.verify = function(e) {
            return "object" != typeof e || null === e
                ? "object expected"
                : "number" != typeof e.longitude
                ? "longitude: number expected"
                : "number" != typeof e.latitude
                ? "latitude: number expected"
                : void 0 !== e.range && "number" != typeof e.range
                ? "range: number expected"
                : void 0 !== e.tilt && "number" != typeof e.tilt
                ? "tilt: number expected"
                : void 0 !== e.heading && "number" != typeof e.heading
                ? "heading: number expected"
                : null;
        }),
        (y.from = y.fromObject = function(e) {
            if (e instanceof c.keyhole.dbroot.LookAtProto) return e;
            var r = new c.keyhole.dbroot.LookAtProto();
            return (
                void 0 !== e.longitude &&
                    null !== e.longitude &&
                    (r.longitude = Number(e.longitude)),
                void 0 !== e.latitude && null !== e.latitude && (r.latitude = Number(e.latitude)),
                void 0 !== e.range && null !== e.range && (r.range = Number(e.range)),
                void 0 !== e.tilt && null !== e.tilt && (r.tilt = Number(e.tilt)),
                void 0 !== e.heading && null !== e.heading && (r.heading = Number(e.heading)),
                r
            );
        }),
        (y.toObject = function(e, r) {
            r || (r = {});
            var t = {};
            return (
                r.defaults &&
                    ((t.longitude = 0),
                    (t.latitude = 0),
                    (t.range = 0),
                    (t.tilt = 0),
                    (t.heading = 0)),
                void 0 !== e.longitude &&
                    null !== e.longitude &&
                    e.hasOwnProperty("longitude") &&
                    (t.longitude = e.longitude),
                void 0 !== e.latitude &&
                    null !== e.latitude &&
                    e.hasOwnProperty("latitude") &&
                    (t.latitude = e.latitude),
                void 0 !== e.range &&
                    null !== e.range &&
                    e.hasOwnProperty("range") &&
                    (t.range = e.range),
                void 0 !== e.tilt &&
                    null !== e.tilt &&
                    e.hasOwnProperty("tilt") &&
                    (t.tilt = e.tilt),
                void 0 !== e.heading &&
                    null !== e.heading &&
                    e.hasOwnProperty("heading") &&
                    (t.heading = e.heading),
                t
            );
        }),
        (y.prototype.toObject = function(e) {
            return this.constructor.toObject(this, e);
        }),
        (y.prototype.toJSON = function() {
            return this.constructor.toObject(this, i.util.toJSONOptions);
        }),
        y)),
        (e.NestedFeatureProto = (function() {
            function e(e) {
                if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
            }
            (e.prototype.featureType = 1),
                (e.prototype.kmlUrl = null),
                (e.prototype.databaseUrl = ""),
                (e.prototype.layer = null),
                (e.prototype.folder = null),
                (e.prototype.requirement = null),
                (e.prototype.channelId = 0),
                (e.prototype.displayName = null),
                (e.prototype.isVisible = !0),
                (e.prototype.isEnabled = !0),
                (e.prototype.isChecked = !1),
                (e.prototype.layerMenuIconPath = "icons/773_l.png"),
                (e.prototype.description = null),
                (e.prototype.lookAt = null),
                (e.prototype.assetUuid = ""),
                (e.prototype.isSaveLocked = !0),
                (e.prototype.children = s.emptyArray),
                (e.prototype.clientConfigScriptName = ""),
                (e.prototype.dioramaDataChannelBase = -1),
                (e.prototype.replicaDataChannelBase = -1);
            var r,
                n = {
                    0: "keyhole.dbroot.NestedFeatureProto.FeatureType",
                    1: "keyhole.dbroot.StringIdOrValueProto",
                    3: "keyhole.dbroot.LayerProto",
                    4: "keyhole.dbroot.FolderProto",
                    5: "keyhole.dbroot.RequirementProto",
                    7: "keyhole.dbroot.StringIdOrValueProto",
                    12: "keyhole.dbroot.StringIdOrValueProto",
                    13: "keyhole.dbroot.LookAtProto",
                    16: "keyhole.dbroot.NestedFeatureProto"
                };
            return (
                p.push(n),
                (e.decode = function(e, r) {
                    e instanceof l || (e = l.create(e));
                    for (
                        var t = void 0 === r ? e.len : e.pos + r,
                            o = new c.keyhole.dbroot.NestedFeatureProto();
                        e.pos < t;

                    ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                            case 1:
                                o.featureType = e.uint32();
                                break;
                            case 2:
                                o.kmlUrl = n[1].decode(e, e.uint32());
                                break;
                            case 21:
                                o.databaseUrl = e.string();
                                break;
                            case 3:
                                o.layer = n[3].decode(e, e.uint32());
                                break;
                            case 4:
                                o.folder = n[4].decode(e, e.uint32());
                                break;
                            case 5:
                                o.requirement = n[5].decode(e, e.uint32());
                                break;
                            case 6:
                                o.channelId = e.int32();
                                break;
                            case 7:
                                o.displayName = n[7].decode(e, e.uint32());
                                break;
                            case 8:
                                o.isVisible = e.bool();
                                break;
                            case 9:
                                o.isEnabled = e.bool();
                                break;
                            case 10:
                                o.isChecked = e.bool();
                                break;
                            case 11:
                                o.layerMenuIconPath = e.string();
                                break;
                            case 12:
                                o.description = n[12].decode(e, e.uint32());
                                break;
                            case 13:
                                o.lookAt = n[13].decode(e, e.uint32());
                                break;
                            case 15:
                                o.assetUuid = e.string();
                                break;
                            case 16:
                                o.isSaveLocked = e.bool();
                                break;
                            case 17:
                                (o.children && o.children.length) || (o.children = []),
                                    o.children.push(n[16].decode(e, e.uint32()));
                                break;
                            case 18:
                                o.clientConfigScriptName = e.string();
                                break;
                            case 19:
                                o.dioramaDataChannelBase = e.int32();
                                break;
                            case 20:
                                o.replicaDataChannelBase = e.int32();
                                break;
                            default:
                                e.skipType(7 & a);
                        }
                    }
                    return o;
                }),
                (e.verify = function(e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (void 0 !== e.featureType)
                        switch (e.featureType) {
                            default:
                                return "featureType: enum value expected";
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                        }
                    if (void 0 !== e.kmlUrl && null !== e.kmlUrl && (t = n[1].verify(e.kmlUrl)))
                        return "kmlUrl." + t;
                    if (void 0 !== e.databaseUrl && !s.isString(e.databaseUrl))
                        return "databaseUrl: string expected";
                    if (void 0 !== e.layer && null !== e.layer && (t = n[3].verify(e.layer)))
                        return "layer." + t;
                    if (void 0 !== e.folder && null !== e.folder && (t = n[4].verify(e.folder)))
                        return "folder." + t;
                    if (
                        void 0 !== e.requirement &&
                        null !== e.requirement &&
                        (t = n[5].verify(e.requirement))
                    )
                        return "requirement." + t;
                    if (!s.isInteger(e.channelId)) return "channelId: integer expected";
                    if (
                        void 0 !== e.displayName &&
                        null !== e.displayName &&
                        (t = n[7].verify(e.displayName))
                    )
                        return "displayName." + t;
                    if (void 0 !== e.isVisible && "boolean" != typeof e.isVisible)
                        return "isVisible: boolean expected";
                    if (void 0 !== e.isEnabled && "boolean" != typeof e.isEnabled)
                        return "isEnabled: boolean expected";
                    if (void 0 !== e.isChecked && "boolean" != typeof e.isChecked)
                        return "isChecked: boolean expected";
                    if (void 0 !== e.layerMenuIconPath && !s.isString(e.layerMenuIconPath))
                        return "layerMenuIconPath: string expected";
                    if (
                        void 0 !== e.description &&
                        null !== e.description &&
                        (t = n[12].verify(e.description))
                    )
                        return "description." + t;
                    if (void 0 !== e.lookAt && null !== e.lookAt && (t = n[13].verify(e.lookAt)))
                        return "lookAt." + t;
                    if (void 0 !== e.assetUuid && !s.isString(e.assetUuid))
                        return "assetUuid: string expected";
                    if (void 0 !== e.isSaveLocked && "boolean" != typeof e.isSaveLocked)
                        return "isSaveLocked: boolean expected";
                    if (void 0 !== e.children) {
                        if (!Array.isArray(e.children)) return "children: array expected";
                        for (var r = 0; r < e.children.length; ++r) {
                            var t;
                            if ((t = n[16].verify(e.children[r]))) return "children." + t;
                        }
                    }
                    return void 0 === e.clientConfigScriptName ||
                        s.isString(e.clientConfigScriptName)
                        ? void 0 === e.dioramaDataChannelBase ||
                          s.isInteger(e.dioramaDataChannelBase)
                            ? void 0 === e.replicaDataChannelBase ||
                              s.isInteger(e.replicaDataChannelBase)
                                ? null
                                : "replicaDataChannelBase: integer expected"
                            : "dioramaDataChannelBase: integer expected"
                        : "clientConfigScriptName: string expected";
                }),
                (e.from = e.fromObject = function(e) {
                    if (e instanceof c.keyhole.dbroot.NestedFeatureProto) return e;
                    var r = new c.keyhole.dbroot.NestedFeatureProto();
                    switch (e.featureType) {
                        case "TYPE_POINT_Z":
                        case 1:
                            r.featureType = 1;
                            break;
                        case "TYPE_POLYGON_Z":
                        case 2:
                            r.featureType = 2;
                            break;
                        case "TYPE_LINE_Z":
                        case 3:
                            r.featureType = 3;
                            break;
                        case "TYPE_TERRAIN":
                        case 4:
                            r.featureType = 4;
                    }
                    if (void 0 !== e.kmlUrl && null !== e.kmlUrl) {
                        if ("object" != typeof e.kmlUrl)
                            throw TypeError(
                                ".keyhole.dbroot.NestedFeatureProto.kmlUrl: object expected"
                            );
                        r.kmlUrl = n[1].fromObject(e.kmlUrl);
                    }
                    if (
                        (void 0 !== e.databaseUrl &&
                            null !== e.databaseUrl &&
                            (r.databaseUrl = String(e.databaseUrl)),
                        void 0 !== e.layer && null !== e.layer)
                    ) {
                        if ("object" != typeof e.layer)
                            throw TypeError(
                                ".keyhole.dbroot.NestedFeatureProto.layer: object expected"
                            );
                        r.layer = n[3].fromObject(e.layer);
                    }
                    if (void 0 !== e.folder && null !== e.folder) {
                        if ("object" != typeof e.folder)
                            throw TypeError(
                                ".keyhole.dbroot.NestedFeatureProto.folder: object expected"
                            );
                        r.folder = n[4].fromObject(e.folder);
                    }
                    if (void 0 !== e.requirement && null !== e.requirement) {
                        if ("object" != typeof e.requirement)
                            throw TypeError(
                                ".keyhole.dbroot.NestedFeatureProto.requirement: object expected"
                            );
                        r.requirement = n[5].fromObject(e.requirement);
                    }
                    if (
                        (void 0 !== e.channelId &&
                            null !== e.channelId &&
                            (r.channelId = 0 | e.channelId),
                        void 0 !== e.displayName && null !== e.displayName)
                    ) {
                        if ("object" != typeof e.displayName)
                            throw TypeError(
                                ".keyhole.dbroot.NestedFeatureProto.displayName: object expected"
                            );
                        r.displayName = n[7].fromObject(e.displayName);
                    }
                    if (
                        (void 0 !== e.isVisible &&
                            null !== e.isVisible &&
                            (r.isVisible = Boolean(e.isVisible)),
                        void 0 !== e.isEnabled &&
                            null !== e.isEnabled &&
                            (r.isEnabled = Boolean(e.isEnabled)),
                        void 0 !== e.isChecked &&
                            null !== e.isChecked &&
                            (r.isChecked = Boolean(e.isChecked)),
                        void 0 !== e.layerMenuIconPath &&
                            null !== e.layerMenuIconPath &&
                            (r.layerMenuIconPath = String(e.layerMenuIconPath)),
                        void 0 !== e.description && null !== e.description)
                    ) {
                        if ("object" != typeof e.description)
                            throw TypeError(
                                ".keyhole.dbroot.NestedFeatureProto.description: object expected"
                            );
                        r.description = n[12].fromObject(e.description);
                    }
                    if (void 0 !== e.lookAt && null !== e.lookAt) {
                        if ("object" != typeof e.lookAt)
                            throw TypeError(
                                ".keyhole.dbroot.NestedFeatureProto.lookAt: object expected"
                            );
                        r.lookAt = n[13].fromObject(e.lookAt);
                    }
                    if (
                        (void 0 !== e.assetUuid &&
                            null !== e.assetUuid &&
                            (r.assetUuid = String(e.assetUuid)),
                        void 0 !== e.isSaveLocked &&
                            null !== e.isSaveLocked &&
                            (r.isSaveLocked = Boolean(e.isSaveLocked)),
                        e.children)
                    ) {
                        if (!Array.isArray(e.children))
                            throw TypeError(
                                ".keyhole.dbroot.NestedFeatureProto.children: array expected"
                            );
                        r.children = [];
                        for (var t = 0; t < e.children.length; ++t) {
                            if ("object" != typeof e.children[t])
                                throw TypeError(
                                    ".keyhole.dbroot.NestedFeatureProto.children: object expected"
                                );
                            r.children[t] = n[16].fromObject(e.children[t]);
                        }
                    }
                    return (
                        void 0 !== e.clientConfigScriptName &&
                            null !== e.clientConfigScriptName &&
                            (r.clientConfigScriptName = String(e.clientConfigScriptName)),
                        void 0 !== e.dioramaDataChannelBase &&
                            null !== e.dioramaDataChannelBase &&
                            (r.dioramaDataChannelBase = 0 | e.dioramaDataChannelBase),
                        void 0 !== e.replicaDataChannelBase &&
                            null !== e.replicaDataChannelBase &&
                            (r.replicaDataChannelBase = 0 | e.replicaDataChannelBase),
                        r
                    );
                }),
                (e.toObject = function(e, r) {
                    r || (r = {});
                    var t = {};
                    if (
                        ((r.arrays || r.defaults) && (t.children = []),
                        r.defaults &&
                            ((t.featureType = r.enums === String ? "TYPE_POINT_Z" : 1),
                            (t.kmlUrl = null),
                            (t.databaseUrl = ""),
                            (t.layer = null),
                            (t.folder = null),
                            (t.requirement = null),
                            (t.channelId = 0),
                            (t.displayName = null),
                            (t.isVisible = !0),
                            (t.isEnabled = !0),
                            (t.isChecked = !1),
                            (t.layerMenuIconPath = "icons/773_l.png"),
                            (t.description = null),
                            (t.lookAt = null),
                            (t.assetUuid = ""),
                            (t.isSaveLocked = !0),
                            (t.clientConfigScriptName = ""),
                            (t.dioramaDataChannelBase = -1),
                            (t.replicaDataChannelBase = -1)),
                        void 0 !== e.featureType &&
                            null !== e.featureType &&
                            e.hasOwnProperty("featureType") &&
                            (t.featureType =
                                r.enums === String ? n[0][e.featureType] : e.featureType),
                        void 0 !== e.kmlUrl &&
                            null !== e.kmlUrl &&
                            e.hasOwnProperty("kmlUrl") &&
                            (t.kmlUrl = n[1].toObject(e.kmlUrl, r)),
                        void 0 !== e.databaseUrl &&
                            null !== e.databaseUrl &&
                            e.hasOwnProperty("databaseUrl") &&
                            (t.databaseUrl = e.databaseUrl),
                        void 0 !== e.layer &&
                            null !== e.layer &&
                            e.hasOwnProperty("layer") &&
                            (t.layer = n[3].toObject(e.layer, r)),
                        void 0 !== e.folder &&
                            null !== e.folder &&
                            e.hasOwnProperty("folder") &&
                            (t.folder = n[4].toObject(e.folder, r)),
                        void 0 !== e.requirement &&
                            null !== e.requirement &&
                            e.hasOwnProperty("requirement") &&
                            (t.requirement = n[5].toObject(e.requirement, r)),
                        void 0 !== e.channelId &&
                            null !== e.channelId &&
                            e.hasOwnProperty("channelId") &&
                            (t.channelId = e.channelId),
                        void 0 !== e.displayName &&
                            null !== e.displayName &&
                            e.hasOwnProperty("displayName") &&
                            (t.displayName = n[7].toObject(e.displayName, r)),
                        void 0 !== e.isVisible &&
                            null !== e.isVisible &&
                            e.hasOwnProperty("isVisible") &&
                            (t.isVisible = e.isVisible),
                        void 0 !== e.isEnabled &&
                            null !== e.isEnabled &&
                            e.hasOwnProperty("isEnabled") &&
                            (t.isEnabled = e.isEnabled),
                        void 0 !== e.isChecked &&
                            null !== e.isChecked &&
                            e.hasOwnProperty("isChecked") &&
                            (t.isChecked = e.isChecked),
                        void 0 !== e.layerMenuIconPath &&
                            null !== e.layerMenuIconPath &&
                            e.hasOwnProperty("layerMenuIconPath") &&
                            (t.layerMenuIconPath = e.layerMenuIconPath),
                        void 0 !== e.description &&
                            null !== e.description &&
                            e.hasOwnProperty("description") &&
                            (t.description = n[12].toObject(e.description, r)),
                        void 0 !== e.lookAt &&
                            null !== e.lookAt &&
                            e.hasOwnProperty("lookAt") &&
                            (t.lookAt = n[13].toObject(e.lookAt, r)),
                        void 0 !== e.assetUuid &&
                            null !== e.assetUuid &&
                            e.hasOwnProperty("assetUuid") &&
                            (t.assetUuid = e.assetUuid),
                        void 0 !== e.isSaveLocked &&
                            null !== e.isSaveLocked &&
                            e.hasOwnProperty("isSaveLocked") &&
                            (t.isSaveLocked = e.isSaveLocked),
                        void 0 !== e.children &&
                            null !== e.children &&
                            e.hasOwnProperty("children"))
                    ) {
                        t.children = [];
                        for (var o = 0; o < e.children.length; ++o)
                            t.children[o] = n[16].toObject(e.children[o], r);
                    }
                    return (
                        void 0 !== e.clientConfigScriptName &&
                            null !== e.clientConfigScriptName &&
                            e.hasOwnProperty("clientConfigScriptName") &&
                            (t.clientConfigScriptName = e.clientConfigScriptName),
                        void 0 !== e.dioramaDataChannelBase &&
                            null !== e.dioramaDataChannelBase &&
                            e.hasOwnProperty("dioramaDataChannelBase") &&
                            (t.dioramaDataChannelBase = e.dioramaDataChannelBase),
                        void 0 !== e.replicaDataChannelBase &&
                            null !== e.replicaDataChannelBase &&
                            e.hasOwnProperty("replicaDataChannelBase") &&
                            (t.replicaDataChannelBase = e.replicaDataChannelBase),
                        t
                    );
                }),
                (e.prototype.toObject = function(e) {
                    return this.constructor.toObject(this, e);
                }),
                (e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, i.util.toJSONOptions);
                }),
                (e.FeatureType = (((r = Object.create({})).TYPE_POINT_Z = 1),
                (r.TYPE_POLYGON_Z = 2),
                (r.TYPE_LINE_Z = 3),
                (r.TYPE_TERRAIN = 4),
                r)),
                e
            );
        })()),
        (e.MfeDomainFeaturesProto = (function() {
            function e(e) {
                if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
            }
            (e.prototype.countryCode = ""),
                (e.prototype.domainName = ""),
                (e.prototype.supportedFeatures = s.emptyArray);
            var r,
                a = { 2: "keyhole.dbroot.MfeDomainFeaturesProto.SupportedFeature" };
            return (
                p.push(a),
                (e.decode = function(e, r) {
                    e instanceof l || (e = l.create(e));
                    for (
                        var t = void 0 === r ? e.len : e.pos + r,
                            o = new c.keyhole.dbroot.MfeDomainFeaturesProto();
                        e.pos < t;

                    ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                            case 1:
                                o.countryCode = e.string();
                                break;
                            case 2:
                                o.domainName = e.string();
                                break;
                            case 3:
                                if (
                                    ((o.supportedFeatures && o.supportedFeatures.length) ||
                                        (o.supportedFeatures = []),
                                    2 == (7 & a))
                                )
                                    for (var n = e.uint32() + e.pos; e.pos < n; )
                                        o.supportedFeatures.push(e.uint32());
                                else o.supportedFeatures.push(e.uint32());
                                break;
                            default:
                                e.skipType(7 & a);
                        }
                    }
                    return o;
                }),
                (e.verify = function(e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (!s.isString(e.countryCode)) return "countryCode: string expected";
                    if (!s.isString(e.domainName)) return "domainName: string expected";
                    if (void 0 !== e.supportedFeatures) {
                        if (!Array.isArray(e.supportedFeatures))
                            return "supportedFeatures: array expected";
                        for (var r = 0; r < e.supportedFeatures.length; ++r)
                            switch (e.supportedFeatures[r]) {
                                default:
                                    return "supportedFeatures: enum value[] expected";
                                case 0:
                                case 1:
                                case 2:
                            }
                    }
                    return null;
                }),
                (e.from = e.fromObject = function(e) {
                    if (e instanceof c.keyhole.dbroot.MfeDomainFeaturesProto) return e;
                    var r = new c.keyhole.dbroot.MfeDomainFeaturesProto();
                    if (
                        (void 0 !== e.countryCode &&
                            null !== e.countryCode &&
                            (r.countryCode = String(e.countryCode)),
                        void 0 !== e.domainName &&
                            null !== e.domainName &&
                            (r.domainName = String(e.domainName)),
                        e.supportedFeatures)
                    ) {
                        if (!Array.isArray(e.supportedFeatures))
                            throw TypeError(
                                ".keyhole.dbroot.MfeDomainFeaturesProto.supportedFeatures: array expected"
                            );
                        r.supportedFeatures = [];
                        for (var t = 0; t < e.supportedFeatures.length; ++t)
                            switch (e.supportedFeatures[t]) {
                                default:
                                case "GEOCODING":
                                case 0:
                                    r.supportedFeatures[t] = 0;
                                    break;
                                case "LOCAL_SEARCH":
                                case 1:
                                    r.supportedFeatures[t] = 1;
                                    break;
                                case "DRIVING_DIRECTIONS":
                                case 2:
                                    r.supportedFeatures[t] = 2;
                            }
                    }
                    return r;
                }),
                (e.toObject = function(e, r) {
                    r || (r = {});
                    var t = {};
                    if (
                        ((r.arrays || r.defaults) && (t.supportedFeatures = []),
                        r.defaults && ((t.countryCode = ""), (t.domainName = "")),
                        void 0 !== e.countryCode &&
                            null !== e.countryCode &&
                            e.hasOwnProperty("countryCode") &&
                            (t.countryCode = e.countryCode),
                        void 0 !== e.domainName &&
                            null !== e.domainName &&
                            e.hasOwnProperty("domainName") &&
                            (t.domainName = e.domainName),
                        void 0 !== e.supportedFeatures &&
                            null !== e.supportedFeatures &&
                            e.hasOwnProperty("supportedFeatures"))
                    ) {
                        t.supportedFeatures = [];
                        for (var o = 0; o < e.supportedFeatures.length; ++o)
                            t.supportedFeatures[o] =
                                r.enums === String
                                    ? a[2][e.supportedFeatures[o]]
                                    : e.supportedFeatures[o];
                    }
                    return t;
                }),
                (e.prototype.toObject = function(e) {
                    return this.constructor.toObject(this, e);
                }),
                (e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, i.util.toJSONOptions);
                }),
                (e.SupportedFeature = (((r = Object.create({})).GEOCODING = 0),
                (r.LOCAL_SEARCH = 1),
                (r.DRIVING_DIRECTIONS = 2),
                r)),
                e
            );
        })()),
        (e.ClientOptionsProto = (function() {
            function e(e) {
                if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
            }
            (e.prototype.disableDiskCache = !1),
                (e.prototype.disableEmbeddedBrowserVista = !1),
                (e.prototype.drawAtmosphere = !0),
                (e.prototype.drawStars = !0),
                (e.prototype.shaderFilePrefix = ""),
                (e.prototype.useProtobufQuadtreePackets = !1),
                (e.prototype.useExtendedCopyrightIds = !0),
                (e.prototype.precipitationsOptions = null),
                (e.prototype.captureOptions = null),
                (e.prototype.show_2dMapsIcon = !0),
                (e.prototype.disableInternalBrowser = !1),
                (e.prototype.internalBrowserBlacklist = ""),
                (e.prototype.internalBrowserOriginWhitelist = "*"),
                (e.prototype.polarTileMergingLevel = 0),
                (e.prototype.jsBridgeRequestWhitelist = "http://*.google.com/*"),
                (e.prototype.mapsOptions = null);
            var n = {
                7: "keyhole.dbroot.ClientOptionsProto.PrecipitationsOptions",
                8: "keyhole.dbroot.ClientOptionsProto.CaptureOptions",
                15: "keyhole.dbroot.ClientOptionsProto.MapsOptions"
            };
            function r(e) {
                if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
            }
            function t(e) {
                if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
            }
            return (
                p.push(n),
                (e.decode = function(e, r) {
                    e instanceof l || (e = l.create(e));
                    for (
                        var t = void 0 === r ? e.len : e.pos + r,
                            o = new c.keyhole.dbroot.ClientOptionsProto();
                        e.pos < t;

                    ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                            case 1:
                                o.disableDiskCache = e.bool();
                                break;
                            case 2:
                                o.disableEmbeddedBrowserVista = e.bool();
                                break;
                            case 3:
                                o.drawAtmosphere = e.bool();
                                break;
                            case 4:
                                o.drawStars = e.bool();
                                break;
                            case 5:
                                o.shaderFilePrefix = e.string();
                                break;
                            case 6:
                                o.useProtobufQuadtreePackets = e.bool();
                                break;
                            case 7:
                                o.useExtendedCopyrightIds = e.bool();
                                break;
                            case 8:
                                o.precipitationsOptions = n[7].decode(e, e.uint32());
                                break;
                            case 9:
                                o.captureOptions = n[8].decode(e, e.uint32());
                                break;
                            case 10:
                                o.show_2dMapsIcon = e.bool();
                                break;
                            case 11:
                                o.disableInternalBrowser = e.bool();
                                break;
                            case 12:
                                o.internalBrowserBlacklist = e.string();
                                break;
                            case 13:
                                o.internalBrowserOriginWhitelist = e.string();
                                break;
                            case 14:
                                o.polarTileMergingLevel = e.int32();
                                break;
                            case 15:
                                o.jsBridgeRequestWhitelist = e.string();
                                break;
                            case 16:
                                o.mapsOptions = n[15].decode(e, e.uint32());
                                break;
                            default:
                                e.skipType(7 & a);
                        }
                    }
                    return o;
                }),
                (e.verify = function(e) {
                    return "object" != typeof e || null === e
                        ? "object expected"
                        : void 0 !== e.disableDiskCache && "boolean" != typeof e.disableDiskCache
                        ? "disableDiskCache: boolean expected"
                        : void 0 !== e.disableEmbeddedBrowserVista &&
                          "boolean" != typeof e.disableEmbeddedBrowserVista
                        ? "disableEmbeddedBrowserVista: boolean expected"
                        : void 0 !== e.drawAtmosphere && "boolean" != typeof e.drawAtmosphere
                        ? "drawAtmosphere: boolean expected"
                        : void 0 !== e.drawStars && "boolean" != typeof e.drawStars
                        ? "drawStars: boolean expected"
                        : void 0 === e.shaderFilePrefix || s.isString(e.shaderFilePrefix)
                        ? void 0 !== e.useProtobufQuadtreePackets &&
                          "boolean" != typeof e.useProtobufQuadtreePackets
                            ? "useProtobufQuadtreePackets: boolean expected"
                            : void 0 !== e.useExtendedCopyrightIds &&
                              "boolean" != typeof e.useExtendedCopyrightIds
                            ? "useExtendedCopyrightIds: boolean expected"
                            : void 0 !== e.precipitationsOptions &&
                              null !== e.precipitationsOptions &&
                              (r = n[7].verify(e.precipitationsOptions))
                            ? "precipitationsOptions." + r
                            : void 0 !== e.captureOptions &&
                              null !== e.captureOptions &&
                              (r = n[8].verify(e.captureOptions))
                            ? "captureOptions." + r
                            : void 0 !== e.show_2dMapsIcon && "boolean" != typeof e.show_2dMapsIcon
                            ? "show_2dMapsIcon: boolean expected"
                            : void 0 !== e.disableInternalBrowser &&
                              "boolean" != typeof e.disableInternalBrowser
                            ? "disableInternalBrowser: boolean expected"
                            : void 0 === e.internalBrowserBlacklist ||
                              s.isString(e.internalBrowserBlacklist)
                            ? void 0 === e.internalBrowserOriginWhitelist ||
                              s.isString(e.internalBrowserOriginWhitelist)
                                ? void 0 === e.polarTileMergingLevel ||
                                  s.isInteger(e.polarTileMergingLevel)
                                    ? void 0 === e.jsBridgeRequestWhitelist ||
                                      s.isString(e.jsBridgeRequestWhitelist)
                                        ? void 0 !== e.mapsOptions &&
                                          null !== e.mapsOptions &&
                                          (r = n[15].verify(e.mapsOptions))
                                            ? "mapsOptions." + r
                                            : null
                                        : "jsBridgeRequestWhitelist: string expected"
                                    : "polarTileMergingLevel: integer expected"
                                : "internalBrowserOriginWhitelist: string expected"
                            : "internalBrowserBlacklist: string expected"
                        : "shaderFilePrefix: string expected";
                    var r;
                }),
                (e.from = e.fromObject = function(e) {
                    if (e instanceof c.keyhole.dbroot.ClientOptionsProto) return e;
                    var r = new c.keyhole.dbroot.ClientOptionsProto();
                    if (
                        (void 0 !== e.disableDiskCache &&
                            null !== e.disableDiskCache &&
                            (r.disableDiskCache = Boolean(e.disableDiskCache)),
                        void 0 !== e.disableEmbeddedBrowserVista &&
                            null !== e.disableEmbeddedBrowserVista &&
                            (r.disableEmbeddedBrowserVista = Boolean(
                                e.disableEmbeddedBrowserVista
                            )),
                        void 0 !== e.drawAtmosphere &&
                            null !== e.drawAtmosphere &&
                            (r.drawAtmosphere = Boolean(e.drawAtmosphere)),
                        void 0 !== e.drawStars &&
                            null !== e.drawStars &&
                            (r.drawStars = Boolean(e.drawStars)),
                        void 0 !== e.shaderFilePrefix &&
                            null !== e.shaderFilePrefix &&
                            (r.shaderFilePrefix = String(e.shaderFilePrefix)),
                        void 0 !== e.useProtobufQuadtreePackets &&
                            null !== e.useProtobufQuadtreePackets &&
                            (r.useProtobufQuadtreePackets = Boolean(e.useProtobufQuadtreePackets)),
                        void 0 !== e.useExtendedCopyrightIds &&
                            null !== e.useExtendedCopyrightIds &&
                            (r.useExtendedCopyrightIds = Boolean(e.useExtendedCopyrightIds)),
                        void 0 !== e.precipitationsOptions && null !== e.precipitationsOptions)
                    ) {
                        if ("object" != typeof e.precipitationsOptions)
                            throw TypeError(
                                ".keyhole.dbroot.ClientOptionsProto.precipitationsOptions: object expected"
                            );
                        r.precipitationsOptions = n[7].fromObject(e.precipitationsOptions);
                    }
                    if (void 0 !== e.captureOptions && null !== e.captureOptions) {
                        if ("object" != typeof e.captureOptions)
                            throw TypeError(
                                ".keyhole.dbroot.ClientOptionsProto.captureOptions: object expected"
                            );
                        r.captureOptions = n[8].fromObject(e.captureOptions);
                    }
                    if (
                        (void 0 !== e.show_2dMapsIcon &&
                            null !== e.show_2dMapsIcon &&
                            (r.show_2dMapsIcon = Boolean(e.show_2dMapsIcon)),
                        void 0 !== e.disableInternalBrowser &&
                            null !== e.disableInternalBrowser &&
                            (r.disableInternalBrowser = Boolean(e.disableInternalBrowser)),
                        void 0 !== e.internalBrowserBlacklist &&
                            null !== e.internalBrowserBlacklist &&
                            (r.internalBrowserBlacklist = String(e.internalBrowserBlacklist)),
                        void 0 !== e.internalBrowserOriginWhitelist &&
                            null !== e.internalBrowserOriginWhitelist &&
                            (r.internalBrowserOriginWhitelist = String(
                                e.internalBrowserOriginWhitelist
                            )),
                        void 0 !== e.polarTileMergingLevel &&
                            null !== e.polarTileMergingLevel &&
                            (r.polarTileMergingLevel = 0 | e.polarTileMergingLevel),
                        void 0 !== e.jsBridgeRequestWhitelist &&
                            null !== e.jsBridgeRequestWhitelist &&
                            (r.jsBridgeRequestWhitelist = String(e.jsBridgeRequestWhitelist)),
                        void 0 !== e.mapsOptions && null !== e.mapsOptions)
                    ) {
                        if ("object" != typeof e.mapsOptions)
                            throw TypeError(
                                ".keyhole.dbroot.ClientOptionsProto.mapsOptions: object expected"
                            );
                        r.mapsOptions = n[15].fromObject(e.mapsOptions);
                    }
                    return r;
                }),
                (e.toObject = function(e, r) {
                    r || (r = {});
                    var t = {};
                    return (
                        r.defaults &&
                            ((t.disableDiskCache = !1),
                            (t.disableEmbeddedBrowserVista = !1),
                            (t.drawAtmosphere = !0),
                            (t.drawStars = !0),
                            (t.shaderFilePrefix = ""),
                            (t.useProtobufQuadtreePackets = !1),
                            (t.useExtendedCopyrightIds = !0),
                            (t.precipitationsOptions = null),
                            (t.captureOptions = null),
                            (t.show_2dMapsIcon = !0),
                            (t.disableInternalBrowser = !1),
                            (t.internalBrowserBlacklist = ""),
                            (t.internalBrowserOriginWhitelist = "*"),
                            (t.polarTileMergingLevel = 0),
                            (t.jsBridgeRequestWhitelist = "http://*.google.com/*"),
                            (t.mapsOptions = null)),
                        void 0 !== e.disableDiskCache &&
                            null !== e.disableDiskCache &&
                            e.hasOwnProperty("disableDiskCache") &&
                            (t.disableDiskCache = e.disableDiskCache),
                        void 0 !== e.disableEmbeddedBrowserVista &&
                            null !== e.disableEmbeddedBrowserVista &&
                            e.hasOwnProperty("disableEmbeddedBrowserVista") &&
                            (t.disableEmbeddedBrowserVista = e.disableEmbeddedBrowserVista),
                        void 0 !== e.drawAtmosphere &&
                            null !== e.drawAtmosphere &&
                            e.hasOwnProperty("drawAtmosphere") &&
                            (t.drawAtmosphere = e.drawAtmosphere),
                        void 0 !== e.drawStars &&
                            null !== e.drawStars &&
                            e.hasOwnProperty("drawStars") &&
                            (t.drawStars = e.drawStars),
                        void 0 !== e.shaderFilePrefix &&
                            null !== e.shaderFilePrefix &&
                            e.hasOwnProperty("shaderFilePrefix") &&
                            (t.shaderFilePrefix = e.shaderFilePrefix),
                        void 0 !== e.useProtobufQuadtreePackets &&
                            null !== e.useProtobufQuadtreePackets &&
                            e.hasOwnProperty("useProtobufQuadtreePackets") &&
                            (t.useProtobufQuadtreePackets = e.useProtobufQuadtreePackets),
                        void 0 !== e.useExtendedCopyrightIds &&
                            null !== e.useExtendedCopyrightIds &&
                            e.hasOwnProperty("useExtendedCopyrightIds") &&
                            (t.useExtendedCopyrightIds = e.useExtendedCopyrightIds),
                        void 0 !== e.precipitationsOptions &&
                            null !== e.precipitationsOptions &&
                            e.hasOwnProperty("precipitationsOptions") &&
                            (t.precipitationsOptions = n[7].toObject(e.precipitationsOptions, r)),
                        void 0 !== e.captureOptions &&
                            null !== e.captureOptions &&
                            e.hasOwnProperty("captureOptions") &&
                            (t.captureOptions = n[8].toObject(e.captureOptions, r)),
                        void 0 !== e.show_2dMapsIcon &&
                            null !== e.show_2dMapsIcon &&
                            e.hasOwnProperty("show_2dMapsIcon") &&
                            (t.show_2dMapsIcon = e.show_2dMapsIcon),
                        void 0 !== e.disableInternalBrowser &&
                            null !== e.disableInternalBrowser &&
                            e.hasOwnProperty("disableInternalBrowser") &&
                            (t.disableInternalBrowser = e.disableInternalBrowser),
                        void 0 !== e.internalBrowserBlacklist &&
                            null !== e.internalBrowserBlacklist &&
                            e.hasOwnProperty("internalBrowserBlacklist") &&
                            (t.internalBrowserBlacklist = e.internalBrowserBlacklist),
                        void 0 !== e.internalBrowserOriginWhitelist &&
                            null !== e.internalBrowserOriginWhitelist &&
                            e.hasOwnProperty("internalBrowserOriginWhitelist") &&
                            (t.internalBrowserOriginWhitelist = e.internalBrowserOriginWhitelist),
                        void 0 !== e.polarTileMergingLevel &&
                            null !== e.polarTileMergingLevel &&
                            e.hasOwnProperty("polarTileMergingLevel") &&
                            (t.polarTileMergingLevel = e.polarTileMergingLevel),
                        void 0 !== e.jsBridgeRequestWhitelist &&
                            null !== e.jsBridgeRequestWhitelist &&
                            e.hasOwnProperty("jsBridgeRequestWhitelist") &&
                            (t.jsBridgeRequestWhitelist = e.jsBridgeRequestWhitelist),
                        void 0 !== e.mapsOptions &&
                            null !== e.mapsOptions &&
                            e.hasOwnProperty("mapsOptions") &&
                            (t.mapsOptions = n[15].toObject(e.mapsOptions, r)),
                        t
                    );
                }),
                (e.prototype.toObject = function(e) {
                    return this.constructor.toObject(this, e);
                }),
                (e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, i.util.toJSONOptions);
                }),
                (e.PrecipitationsOptions = (function() {
                    function e(e) {
                        if (e)
                            for (var r = Object.keys(e), t = 0; t < r.length; ++t)
                                this[r[t]] = e[r[t]];
                    }
                    (e.prototype.imageUrl = ""),
                        (e.prototype.imageExpireTime = 900),
                        (e.prototype.maxColorDistance = 20),
                        (e.prototype.imageLevel = 5),
                        (e.prototype.weatherMapping = s.emptyArray),
                        (e.prototype.cloudsLayerUrl = ""),
                        (e.prototype.animationDecelerationDelay = 20);
                    var n = {
                        4: "keyhole.dbroot.ClientOptionsProto.PrecipitationsOptions.WeatherMapping"
                    };
                    return (
                        p.push(n),
                        (e.decode = function(e, r) {
                            e instanceof l || (e = l.create(e));
                            for (
                                var t = void 0 === r ? e.len : e.pos + r,
                                    o = new c.keyhole.dbroot.ClientOptionsProto.PrecipitationsOptions();
                                e.pos < t;

                            ) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        o.imageUrl = e.string();
                                        break;
                                    case 2:
                                        o.imageExpireTime = e.int32();
                                        break;
                                    case 3:
                                        o.maxColorDistance = e.int32();
                                        break;
                                    case 4:
                                        o.imageLevel = e.int32();
                                        break;
                                    case 5:
                                        (o.weatherMapping && o.weatherMapping.length) ||
                                            (o.weatherMapping = []),
                                            o.weatherMapping.push(n[4].decode(e, e.uint32()));
                                        break;
                                    case 6:
                                        o.cloudsLayerUrl = e.string();
                                        break;
                                    case 7:
                                        o.animationDecelerationDelay = e.float();
                                        break;
                                    default:
                                        e.skipType(7 & a);
                                }
                            }
                            return o;
                        }),
                        (e.verify = function(e) {
                            if ("object" != typeof e || null === e) return "object expected";
                            if (void 0 !== e.imageUrl && !s.isString(e.imageUrl))
                                return "imageUrl: string expected";
                            if (void 0 !== e.imageExpireTime && !s.isInteger(e.imageExpireTime))
                                return "imageExpireTime: integer expected";
                            if (void 0 !== e.maxColorDistance && !s.isInteger(e.maxColorDistance))
                                return "maxColorDistance: integer expected";
                            if (void 0 !== e.imageLevel && !s.isInteger(e.imageLevel))
                                return "imageLevel: integer expected";
                            if (void 0 !== e.weatherMapping) {
                                if (!Array.isArray(e.weatherMapping))
                                    return "weatherMapping: array expected";
                                for (var r = 0; r < e.weatherMapping.length; ++r) {
                                    var t = n[4].verify(e.weatherMapping[r]);
                                    if (t) return "weatherMapping." + t;
                                }
                            }
                            return void 0 === e.cloudsLayerUrl || s.isString(e.cloudsLayerUrl)
                                ? void 0 !== e.animationDecelerationDelay &&
                                  "number" != typeof e.animationDecelerationDelay
                                    ? "animationDecelerationDelay: number expected"
                                    : null
                                : "cloudsLayerUrl: string expected";
                        }),
                        (e.from = e.fromObject = function(e) {
                            if (
                                e instanceof
                                c.keyhole.dbroot.ClientOptionsProto.PrecipitationsOptions
                            )
                                return e;
                            var r = new c.keyhole.dbroot.ClientOptionsProto.PrecipitationsOptions();
                            if (
                                (void 0 !== e.imageUrl &&
                                    null !== e.imageUrl &&
                                    (r.imageUrl = String(e.imageUrl)),
                                void 0 !== e.imageExpireTime &&
                                    null !== e.imageExpireTime &&
                                    (r.imageExpireTime = 0 | e.imageExpireTime),
                                void 0 !== e.maxColorDistance &&
                                    null !== e.maxColorDistance &&
                                    (r.maxColorDistance = 0 | e.maxColorDistance),
                                void 0 !== e.imageLevel &&
                                    null !== e.imageLevel &&
                                    (r.imageLevel = 0 | e.imageLevel),
                                e.weatherMapping)
                            ) {
                                if (!Array.isArray(e.weatherMapping))
                                    throw TypeError(
                                        ".keyhole.dbroot.ClientOptionsProto.PrecipitationsOptions.weatherMapping: array expected"
                                    );
                                r.weatherMapping = [];
                                for (var t = 0; t < e.weatherMapping.length; ++t) {
                                    if ("object" != typeof e.weatherMapping[t])
                                        throw TypeError(
                                            ".keyhole.dbroot.ClientOptionsProto.PrecipitationsOptions.weatherMapping: object expected"
                                        );
                                    r.weatherMapping[t] = n[4].fromObject(e.weatherMapping[t]);
                                }
                            }
                            return (
                                void 0 !== e.cloudsLayerUrl &&
                                    null !== e.cloudsLayerUrl &&
                                    (r.cloudsLayerUrl = String(e.cloudsLayerUrl)),
                                void 0 !== e.animationDecelerationDelay &&
                                    null !== e.animationDecelerationDelay &&
                                    (r.animationDecelerationDelay = Number(
                                        e.animationDecelerationDelay
                                    )),
                                r
                            );
                        }),
                        (e.toObject = function(e, r) {
                            r || (r = {});
                            var t = {};
                            if (
                                ((r.arrays || r.defaults) && (t.weatherMapping = []),
                                r.defaults &&
                                    ((t.imageUrl = ""),
                                    (t.imageExpireTime = 900),
                                    (t.maxColorDistance = 20),
                                    (t.imageLevel = 5),
                                    (t.cloudsLayerUrl = ""),
                                    (t.animationDecelerationDelay = 20)),
                                void 0 !== e.imageUrl &&
                                    null !== e.imageUrl &&
                                    e.hasOwnProperty("imageUrl") &&
                                    (t.imageUrl = e.imageUrl),
                                void 0 !== e.imageExpireTime &&
                                    null !== e.imageExpireTime &&
                                    e.hasOwnProperty("imageExpireTime") &&
                                    (t.imageExpireTime = e.imageExpireTime),
                                void 0 !== e.maxColorDistance &&
                                    null !== e.maxColorDistance &&
                                    e.hasOwnProperty("maxColorDistance") &&
                                    (t.maxColorDistance = e.maxColorDistance),
                                void 0 !== e.imageLevel &&
                                    null !== e.imageLevel &&
                                    e.hasOwnProperty("imageLevel") &&
                                    (t.imageLevel = e.imageLevel),
                                void 0 !== e.weatherMapping &&
                                    null !== e.weatherMapping &&
                                    e.hasOwnProperty("weatherMapping"))
                            ) {
                                t.weatherMapping = [];
                                for (var o = 0; o < e.weatherMapping.length; ++o)
                                    t.weatherMapping[o] = n[4].toObject(e.weatherMapping[o], r);
                            }
                            return (
                                void 0 !== e.cloudsLayerUrl &&
                                    null !== e.cloudsLayerUrl &&
                                    e.hasOwnProperty("cloudsLayerUrl") &&
                                    (t.cloudsLayerUrl = e.cloudsLayerUrl),
                                void 0 !== e.animationDecelerationDelay &&
                                    null !== e.animationDecelerationDelay &&
                                    e.hasOwnProperty("animationDecelerationDelay") &&
                                    (t.animationDecelerationDelay = e.animationDecelerationDelay),
                                t
                            );
                        }),
                        (e.prototype.toObject = function(e) {
                            return this.constructor.toObject(this, e);
                        }),
                        (e.prototype.toJSON = function() {
                            return this.constructor.toObject(this, i.util.toJSONOptions);
                        }),
                        (e.WeatherMapping = (function() {
                            function e(e) {
                                if (e)
                                    for (var r = Object.keys(e), t = 0; t < r.length; ++t)
                                        this[r[t]] = e[r[t]];
                            }
                            (e.prototype.colorAbgr = 0),
                                (e.prototype.weatherType = 0),
                                (e.prototype.elongation = 1),
                                (e.prototype.opacity = 0),
                                (e.prototype.fogDensity = 0),
                                (e.prototype.speed0 = 0),
                                (e.prototype.speed1 = 0),
                                (e.prototype.speed2 = 0),
                                (e.prototype.speed3 = 0);
                            var r,
                                o = {
                                    1: "keyhole.dbroot.ClientOptionsProto.PrecipitationsOptions.WeatherMapping.WeatherType"
                                };
                            return (
                                p.push(o),
                                (e.decode = function(e, r) {
                                    e instanceof l || (e = l.create(e));
                                    for (
                                        var t = void 0 === r ? e.len : e.pos + r,
                                            o = new c.keyhole.dbroot.ClientOptionsProto.PrecipitationsOptions.WeatherMapping();
                                        e.pos < t;

                                    ) {
                                        var a = e.uint32();
                                        switch (a >>> 3) {
                                            case 1:
                                                o.colorAbgr = e.uint32();
                                                break;
                                            case 2:
                                                o.weatherType = e.uint32();
                                                break;
                                            case 3:
                                                o.elongation = e.float();
                                                break;
                                            case 4:
                                                o.opacity = e.float();
                                                break;
                                            case 5:
                                                o.fogDensity = e.float();
                                                break;
                                            case 6:
                                                o.speed0 = e.float();
                                                break;
                                            case 7:
                                                o.speed1 = e.float();
                                                break;
                                            case 8:
                                                o.speed2 = e.float();
                                                break;
                                            case 9:
                                                o.speed3 = e.float();
                                                break;
                                            default:
                                                e.skipType(7 & a);
                                        }
                                    }
                                    return o;
                                }),
                                (e.verify = function(e) {
                                    if ("object" != typeof e || null === e)
                                        return "object expected";
                                    if (!s.isInteger(e.colorAbgr))
                                        return "colorAbgr: integer expected";
                                    switch (e.weatherType) {
                                        default:
                                            return "weatherType: enum value expected";
                                        case 0:
                                        case 1:
                                        case 2:
                                    }
                                    return void 0 !== e.elongation &&
                                        "number" != typeof e.elongation
                                        ? "elongation: number expected"
                                        : void 0 !== e.opacity && "number" != typeof e.opacity
                                        ? "opacity: number expected"
                                        : void 0 !== e.fogDensity && "number" != typeof e.fogDensity
                                        ? "fogDensity: number expected"
                                        : void 0 !== e.speed0 && "number" != typeof e.speed0
                                        ? "speed0: number expected"
                                        : void 0 !== e.speed1 && "number" != typeof e.speed1
                                        ? "speed1: number expected"
                                        : void 0 !== e.speed2 && "number" != typeof e.speed2
                                        ? "speed2: number expected"
                                        : void 0 !== e.speed3 && "number" != typeof e.speed3
                                        ? "speed3: number expected"
                                        : null;
                                }),
                                (e.from = e.fromObject = function(e) {
                                    if (
                                        e instanceof
                                        c.keyhole.dbroot.ClientOptionsProto.PrecipitationsOptions
                                            .WeatherMapping
                                    )
                                        return e;
                                    var r = new c.keyhole.dbroot.ClientOptionsProto.PrecipitationsOptions.WeatherMapping();
                                    switch (
                                        (void 0 !== e.colorAbgr &&
                                            null !== e.colorAbgr &&
                                            (r.colorAbgr = e.colorAbgr >>> 0),
                                        e.weatherType)
                                    ) {
                                        case "NO_PRECIPITATION":
                                        case 0:
                                            r.weatherType = 0;
                                            break;
                                        case "RAIN":
                                        case 1:
                                            r.weatherType = 1;
                                            break;
                                        case "SNOW":
                                        case 2:
                                            r.weatherType = 2;
                                    }
                                    return (
                                        void 0 !== e.elongation &&
                                            null !== e.elongation &&
                                            (r.elongation = Number(e.elongation)),
                                        void 0 !== e.opacity &&
                                            null !== e.opacity &&
                                            (r.opacity = Number(e.opacity)),
                                        void 0 !== e.fogDensity &&
                                            null !== e.fogDensity &&
                                            (r.fogDensity = Number(e.fogDensity)),
                                        void 0 !== e.speed0 &&
                                            null !== e.speed0 &&
                                            (r.speed0 = Number(e.speed0)),
                                        void 0 !== e.speed1 &&
                                            null !== e.speed1 &&
                                            (r.speed1 = Number(e.speed1)),
                                        void 0 !== e.speed2 &&
                                            null !== e.speed2 &&
                                            (r.speed2 = Number(e.speed2)),
                                        void 0 !== e.speed3 &&
                                            null !== e.speed3 &&
                                            (r.speed3 = Number(e.speed3)),
                                        r
                                    );
                                }),
                                (e.toObject = function(e, r) {
                                    r || (r = {});
                                    var t = {};
                                    return (
                                        r.defaults &&
                                            ((t.colorAbgr = 0),
                                            (t.weatherType =
                                                r.enums === String ? "NO_PRECIPITATION" : 0),
                                            (t.elongation = 1),
                                            (t.opacity = 0),
                                            (t.fogDensity = 0),
                                            (t.speed0 = 0),
                                            (t.speed1 = 0),
                                            (t.speed2 = 0),
                                            (t.speed3 = 0)),
                                        void 0 !== e.colorAbgr &&
                                            null !== e.colorAbgr &&
                                            e.hasOwnProperty("colorAbgr") &&
                                            (t.colorAbgr = e.colorAbgr),
                                        void 0 !== e.weatherType &&
                                            null !== e.weatherType &&
                                            e.hasOwnProperty("weatherType") &&
                                            (t.weatherType =
                                                r.enums === String
                                                    ? o[1][e.weatherType]
                                                    : e.weatherType),
                                        void 0 !== e.elongation &&
                                            null !== e.elongation &&
                                            e.hasOwnProperty("elongation") &&
                                            (t.elongation = e.elongation),
                                        void 0 !== e.opacity &&
                                            null !== e.opacity &&
                                            e.hasOwnProperty("opacity") &&
                                            (t.opacity = e.opacity),
                                        void 0 !== e.fogDensity &&
                                            null !== e.fogDensity &&
                                            e.hasOwnProperty("fogDensity") &&
                                            (t.fogDensity = e.fogDensity),
                                        void 0 !== e.speed0 &&
                                            null !== e.speed0 &&
                                            e.hasOwnProperty("speed0") &&
                                            (t.speed0 = e.speed0),
                                        void 0 !== e.speed1 &&
                                            null !== e.speed1 &&
                                            e.hasOwnProperty("speed1") &&
                                            (t.speed1 = e.speed1),
                                        void 0 !== e.speed2 &&
                                            null !== e.speed2 &&
                                            e.hasOwnProperty("speed2") &&
                                            (t.speed2 = e.speed2),
                                        void 0 !== e.speed3 &&
                                            null !== e.speed3 &&
                                            e.hasOwnProperty("speed3") &&
                                            (t.speed3 = e.speed3),
                                        t
                                    );
                                }),
                                (e.prototype.toObject = function(e) {
                                    return this.constructor.toObject(this, e);
                                }),
                                (e.prototype.toJSON = function() {
                                    return this.constructor.toObject(this, i.util.toJSONOptions);
                                }),
                                (e.WeatherType = (((r = Object.create({})).NO_PRECIPITATION = 0),
                                (r.RAIN = 1),
                                (r.SNOW = 2),
                                r)),
                                e
                            );
                        })()),
                        e
                    );
                })()),
                (e.CaptureOptions = ((r.prototype.allowSaveAsImage = !0),
                (r.prototype.maxFreeCaptureRes = 2400),
                (r.prototype.maxPremiumCaptureRes = 4800),
                (r.decode = function(e, r) {
                    e instanceof l || (e = l.create(e));
                    for (
                        var t = void 0 === r ? e.len : e.pos + r,
                            o = new c.keyhole.dbroot.ClientOptionsProto.CaptureOptions();
                        e.pos < t;

                    ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                            case 1:
                                o.allowSaveAsImage = e.bool();
                                break;
                            case 2:
                                o.maxFreeCaptureRes = e.int32();
                                break;
                            case 3:
                                o.maxPremiumCaptureRes = e.int32();
                                break;
                            default:
                                e.skipType(7 & a);
                        }
                    }
                    return o;
                }),
                (r.verify = function(e) {
                    return "object" != typeof e || null === e
                        ? "object expected"
                        : void 0 !== e.allowSaveAsImage && "boolean" != typeof e.allowSaveAsImage
                        ? "allowSaveAsImage: boolean expected"
                        : void 0 === e.maxFreeCaptureRes || s.isInteger(e.maxFreeCaptureRes)
                        ? void 0 === e.maxPremiumCaptureRes || s.isInteger(e.maxPremiumCaptureRes)
                            ? null
                            : "maxPremiumCaptureRes: integer expected"
                        : "maxFreeCaptureRes: integer expected";
                }),
                (r.from = r.fromObject = function(e) {
                    if (e instanceof c.keyhole.dbroot.ClientOptionsProto.CaptureOptions) return e;
                    var r = new c.keyhole.dbroot.ClientOptionsProto.CaptureOptions();
                    return (
                        void 0 !== e.allowSaveAsImage &&
                            null !== e.allowSaveAsImage &&
                            (r.allowSaveAsImage = Boolean(e.allowSaveAsImage)),
                        void 0 !== e.maxFreeCaptureRes &&
                            null !== e.maxFreeCaptureRes &&
                            (r.maxFreeCaptureRes = 0 | e.maxFreeCaptureRes),
                        void 0 !== e.maxPremiumCaptureRes &&
                            null !== e.maxPremiumCaptureRes &&
                            (r.maxPremiumCaptureRes = 0 | e.maxPremiumCaptureRes),
                        r
                    );
                }),
                (r.toObject = function(e, r) {
                    r || (r = {});
                    var t = {};
                    return (
                        r.defaults &&
                            ((t.allowSaveAsImage = !0),
                            (t.maxFreeCaptureRes = 2400),
                            (t.maxPremiumCaptureRes = 4800)),
                        void 0 !== e.allowSaveAsImage &&
                            null !== e.allowSaveAsImage &&
                            e.hasOwnProperty("allowSaveAsImage") &&
                            (t.allowSaveAsImage = e.allowSaveAsImage),
                        void 0 !== e.maxFreeCaptureRes &&
                            null !== e.maxFreeCaptureRes &&
                            e.hasOwnProperty("maxFreeCaptureRes") &&
                            (t.maxFreeCaptureRes = e.maxFreeCaptureRes),
                        void 0 !== e.maxPremiumCaptureRes &&
                            null !== e.maxPremiumCaptureRes &&
                            e.hasOwnProperty("maxPremiumCaptureRes") &&
                            (t.maxPremiumCaptureRes = e.maxPremiumCaptureRes),
                        t
                    );
                }),
                (r.prototype.toObject = function(e) {
                    return this.constructor.toObject(this, e);
                }),
                (r.prototype.toJSON = function() {
                    return this.constructor.toObject(this, i.util.toJSONOptions);
                }),
                r)),
                (e.MapsOptions = ((t.prototype.enableMaps = !1),
                (t.prototype.docsAutoDownloadEnabled = !1),
                (t.prototype.docsAutoDownloadInterval = 0),
                (t.prototype.docsAutoUploadEnabled = !1),
                (t.prototype.docsAutoUploadDelay = 0),
                (t.decode = function(e, r) {
                    e instanceof l || (e = l.create(e));
                    for (
                        var t = void 0 === r ? e.len : e.pos + r,
                            o = new c.keyhole.dbroot.ClientOptionsProto.MapsOptions();
                        e.pos < t;

                    ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                            case 1:
                                o.enableMaps = e.bool();
                                break;
                            case 2:
                                o.docsAutoDownloadEnabled = e.bool();
                                break;
                            case 3:
                                o.docsAutoDownloadInterval = e.int32();
                                break;
                            case 4:
                                o.docsAutoUploadEnabled = e.bool();
                                break;
                            case 5:
                                o.docsAutoUploadDelay = e.int32();
                                break;
                            default:
                                e.skipType(7 & a);
                        }
                    }
                    return o;
                }),
                (t.verify = function(e) {
                    return "object" != typeof e || null === e
                        ? "object expected"
                        : void 0 !== e.enableMaps && "boolean" != typeof e.enableMaps
                        ? "enableMaps: boolean expected"
                        : void 0 !== e.docsAutoDownloadEnabled &&
                          "boolean" != typeof e.docsAutoDownloadEnabled
                        ? "docsAutoDownloadEnabled: boolean expected"
                        : void 0 === e.docsAutoDownloadInterval ||
                          s.isInteger(e.docsAutoDownloadInterval)
                        ? void 0 !== e.docsAutoUploadEnabled &&
                          "boolean" != typeof e.docsAutoUploadEnabled
                            ? "docsAutoUploadEnabled: boolean expected"
                            : void 0 === e.docsAutoUploadDelay || s.isInteger(e.docsAutoUploadDelay)
                            ? null
                            : "docsAutoUploadDelay: integer expected"
                        : "docsAutoDownloadInterval: integer expected";
                }),
                (t.from = t.fromObject = function(e) {
                    if (e instanceof c.keyhole.dbroot.ClientOptionsProto.MapsOptions) return e;
                    var r = new c.keyhole.dbroot.ClientOptionsProto.MapsOptions();
                    return (
                        void 0 !== e.enableMaps &&
                            null !== e.enableMaps &&
                            (r.enableMaps = Boolean(e.enableMaps)),
                        void 0 !== e.docsAutoDownloadEnabled &&
                            null !== e.docsAutoDownloadEnabled &&
                            (r.docsAutoDownloadEnabled = Boolean(e.docsAutoDownloadEnabled)),
                        void 0 !== e.docsAutoDownloadInterval &&
                            null !== e.docsAutoDownloadInterval &&
                            (r.docsAutoDownloadInterval = 0 | e.docsAutoDownloadInterval),
                        void 0 !== e.docsAutoUploadEnabled &&
                            null !== e.docsAutoUploadEnabled &&
                            (r.docsAutoUploadEnabled = Boolean(e.docsAutoUploadEnabled)),
                        void 0 !== e.docsAutoUploadDelay &&
                            null !== e.docsAutoUploadDelay &&
                            (r.docsAutoUploadDelay = 0 | e.docsAutoUploadDelay),
                        r
                    );
                }),
                (t.toObject = function(e, r) {
                    r || (r = {});
                    var t = {};
                    return (
                        r.defaults &&
                            ((t.enableMaps = !1),
                            (t.docsAutoDownloadEnabled = !1),
                            (t.docsAutoDownloadInterval = 0),
                            (t.docsAutoUploadEnabled = !1),
                            (t.docsAutoUploadDelay = 0)),
                        void 0 !== e.enableMaps &&
                            null !== e.enableMaps &&
                            e.hasOwnProperty("enableMaps") &&
                            (t.enableMaps = e.enableMaps),
                        void 0 !== e.docsAutoDownloadEnabled &&
                            null !== e.docsAutoDownloadEnabled &&
                            e.hasOwnProperty("docsAutoDownloadEnabled") &&
                            (t.docsAutoDownloadEnabled = e.docsAutoDownloadEnabled),
                        void 0 !== e.docsAutoDownloadInterval &&
                            null !== e.docsAutoDownloadInterval &&
                            e.hasOwnProperty("docsAutoDownloadInterval") &&
                            (t.docsAutoDownloadInterval = e.docsAutoDownloadInterval),
                        void 0 !== e.docsAutoUploadEnabled &&
                            null !== e.docsAutoUploadEnabled &&
                            e.hasOwnProperty("docsAutoUploadEnabled") &&
                            (t.docsAutoUploadEnabled = e.docsAutoUploadEnabled),
                        void 0 !== e.docsAutoUploadDelay &&
                            null !== e.docsAutoUploadDelay &&
                            e.hasOwnProperty("docsAutoUploadDelay") &&
                            (t.docsAutoUploadDelay = e.docsAutoUploadDelay),
                        t
                    );
                }),
                (t.prototype.toObject = function(e) {
                    return this.constructor.toObject(this, e);
                }),
                (t.prototype.toJSON = function() {
                    return this.constructor.toObject(this, i.util.toJSONOptions);
                }),
                t)),
                e
            );
        })()),
        (e.FetchingOptionsProto = ((f.prototype.maxRequestsPerQuery = 1),
        (f.prototype.forceMaxRequestsPerQuery = !1),
        (f.prototype.sortBatches = !1),
        (f.prototype.maxDrawable = 2),
        (f.prototype.maxImagery = 2),
        (f.prototype.maxTerrain = 5),
        (f.prototype.maxQuadtree = 5),
        (f.prototype.maxDioramaMetadata = 1),
        (f.prototype.maxDioramaData = 0),
        (f.prototype.maxConsumerFetchRatio = 1),
        (f.prototype.maxProEcFetchRatio = 0),
        (f.prototype.safeOverallQps = 0),
        (f.prototype.safeImageryQps = 0),
        (f.prototype.domainsForHttps = "google.com gstatic.com"),
        (f.prototype.hostsForHttp = ""),
        (f.decode = function(e, r) {
            e instanceof l || (e = l.create(e));
            for (
                var t = void 0 === r ? e.len : e.pos + r,
                    o = new c.keyhole.dbroot.FetchingOptionsProto();
                e.pos < t;

            ) {
                var a = e.uint32();
                switch (a >>> 3) {
                    case 1:
                        o.maxRequestsPerQuery = e.int32();
                        break;
                    case 12:
                        o.forceMaxRequestsPerQuery = e.bool();
                        break;
                    case 13:
                        o.sortBatches = e.bool();
                        break;
                    case 2:
                        o.maxDrawable = e.int32();
                        break;
                    case 3:
                        o.maxImagery = e.int32();
                        break;
                    case 4:
                        o.maxTerrain = e.int32();
                        break;
                    case 5:
                        o.maxQuadtree = e.int32();
                        break;
                    case 6:
                        o.maxDioramaMetadata = e.int32();
                        break;
                    case 7:
                        o.maxDioramaData = e.int32();
                        break;
                    case 8:
                        o.maxConsumerFetchRatio = e.float();
                        break;
                    case 9:
                        o.maxProEcFetchRatio = e.float();
                        break;
                    case 10:
                        o.safeOverallQps = e.float();
                        break;
                    case 11:
                        o.safeImageryQps = e.float();
                        break;
                    case 14:
                        o.domainsForHttps = e.string();
                        break;
                    case 15:
                        o.hostsForHttp = e.string();
                        break;
                    default:
                        e.skipType(7 & a);
                }
            }
            return o;
        }),
        (f.verify = function(e) {
            return "object" != typeof e || null === e
                ? "object expected"
                : void 0 === e.maxRequestsPerQuery || s.isInteger(e.maxRequestsPerQuery)
                ? void 0 !== e.forceMaxRequestsPerQuery &&
                  "boolean" != typeof e.forceMaxRequestsPerQuery
                    ? "forceMaxRequestsPerQuery: boolean expected"
                    : void 0 !== e.sortBatches && "boolean" != typeof e.sortBatches
                    ? "sortBatches: boolean expected"
                    : void 0 === e.maxDrawable || s.isInteger(e.maxDrawable)
                    ? void 0 === e.maxImagery || s.isInteger(e.maxImagery)
                        ? void 0 === e.maxTerrain || s.isInteger(e.maxTerrain)
                            ? void 0 === e.maxQuadtree || s.isInteger(e.maxQuadtree)
                                ? void 0 === e.maxDioramaMetadata ||
                                  s.isInteger(e.maxDioramaMetadata)
                                    ? void 0 === e.maxDioramaData || s.isInteger(e.maxDioramaData)
                                        ? void 0 !== e.maxConsumerFetchRatio &&
                                          "number" != typeof e.maxConsumerFetchRatio
                                            ? "maxConsumerFetchRatio: number expected"
                                            : void 0 !== e.maxProEcFetchRatio &&
                                              "number" != typeof e.maxProEcFetchRatio
                                            ? "maxProEcFetchRatio: number expected"
                                            : void 0 !== e.safeOverallQps &&
                                              "number" != typeof e.safeOverallQps
                                            ? "safeOverallQps: number expected"
                                            : void 0 !== e.safeImageryQps &&
                                              "number" != typeof e.safeImageryQps
                                            ? "safeImageryQps: number expected"
                                            : void 0 === e.domainsForHttps ||
                                              s.isString(e.domainsForHttps)
                                            ? void 0 === e.hostsForHttp ||
                                              s.isString(e.hostsForHttp)
                                                ? null
                                                : "hostsForHttp: string expected"
                                            : "domainsForHttps: string expected"
                                        : "maxDioramaData: integer expected"
                                    : "maxDioramaMetadata: integer expected"
                                : "maxQuadtree: integer expected"
                            : "maxTerrain: integer expected"
                        : "maxImagery: integer expected"
                    : "maxDrawable: integer expected"
                : "maxRequestsPerQuery: integer expected";
        }),
        (f.from = f.fromObject = function(e) {
            if (e instanceof c.keyhole.dbroot.FetchingOptionsProto) return e;
            var r = new c.keyhole.dbroot.FetchingOptionsProto();
            return (
                void 0 !== e.maxRequestsPerQuery &&
                    null !== e.maxRequestsPerQuery &&
                    (r.maxRequestsPerQuery = 0 | e.maxRequestsPerQuery),
                void 0 !== e.forceMaxRequestsPerQuery &&
                    null !== e.forceMaxRequestsPerQuery &&
                    (r.forceMaxRequestsPerQuery = Boolean(e.forceMaxRequestsPerQuery)),
                void 0 !== e.sortBatches &&
                    null !== e.sortBatches &&
                    (r.sortBatches = Boolean(e.sortBatches)),
                void 0 !== e.maxDrawable &&
                    null !== e.maxDrawable &&
                    (r.maxDrawable = 0 | e.maxDrawable),
                void 0 !== e.maxImagery &&
                    null !== e.maxImagery &&
                    (r.maxImagery = 0 | e.maxImagery),
                void 0 !== e.maxTerrain &&
                    null !== e.maxTerrain &&
                    (r.maxTerrain = 0 | e.maxTerrain),
                void 0 !== e.maxQuadtree &&
                    null !== e.maxQuadtree &&
                    (r.maxQuadtree = 0 | e.maxQuadtree),
                void 0 !== e.maxDioramaMetadata &&
                    null !== e.maxDioramaMetadata &&
                    (r.maxDioramaMetadata = 0 | e.maxDioramaMetadata),
                void 0 !== e.maxDioramaData &&
                    null !== e.maxDioramaData &&
                    (r.maxDioramaData = 0 | e.maxDioramaData),
                void 0 !== e.maxConsumerFetchRatio &&
                    null !== e.maxConsumerFetchRatio &&
                    (r.maxConsumerFetchRatio = Number(e.maxConsumerFetchRatio)),
                void 0 !== e.maxProEcFetchRatio &&
                    null !== e.maxProEcFetchRatio &&
                    (r.maxProEcFetchRatio = Number(e.maxProEcFetchRatio)),
                void 0 !== e.safeOverallQps &&
                    null !== e.safeOverallQps &&
                    (r.safeOverallQps = Number(e.safeOverallQps)),
                void 0 !== e.safeImageryQps &&
                    null !== e.safeImageryQps &&
                    (r.safeImageryQps = Number(e.safeImageryQps)),
                void 0 !== e.domainsForHttps &&
                    null !== e.domainsForHttps &&
                    (r.domainsForHttps = String(e.domainsForHttps)),
                void 0 !== e.hostsForHttp &&
                    null !== e.hostsForHttp &&
                    (r.hostsForHttp = String(e.hostsForHttp)),
                r
            );
        }),
        (f.toObject = function(e, r) {
            r || (r = {});
            var t = {};
            return (
                r.defaults &&
                    ((t.maxRequestsPerQuery = 1),
                    (t.forceMaxRequestsPerQuery = !1),
                    (t.sortBatches = !1),
                    (t.maxDrawable = 2),
                    (t.maxImagery = 2),
                    (t.maxTerrain = 5),
                    (t.maxQuadtree = 5),
                    (t.maxDioramaMetadata = 1),
                    (t.maxDioramaData = 0),
                    (t.maxConsumerFetchRatio = 1),
                    (t.maxProEcFetchRatio = 0),
                    (t.safeOverallQps = 0),
                    (t.safeImageryQps = 0),
                    (t.domainsForHttps = "google.com gstatic.com"),
                    (t.hostsForHttp = "")),
                void 0 !== e.maxRequestsPerQuery &&
                    null !== e.maxRequestsPerQuery &&
                    e.hasOwnProperty("maxRequestsPerQuery") &&
                    (t.maxRequestsPerQuery = e.maxRequestsPerQuery),
                void 0 !== e.forceMaxRequestsPerQuery &&
                    null !== e.forceMaxRequestsPerQuery &&
                    e.hasOwnProperty("forceMaxRequestsPerQuery") &&
                    (t.forceMaxRequestsPerQuery = e.forceMaxRequestsPerQuery),
                void 0 !== e.sortBatches &&
                    null !== e.sortBatches &&
                    e.hasOwnProperty("sortBatches") &&
                    (t.sortBatches = e.sortBatches),
                void 0 !== e.maxDrawable &&
                    null !== e.maxDrawable &&
                    e.hasOwnProperty("maxDrawable") &&
                    (t.maxDrawable = e.maxDrawable),
                void 0 !== e.maxImagery &&
                    null !== e.maxImagery &&
                    e.hasOwnProperty("maxImagery") &&
                    (t.maxImagery = e.maxImagery),
                void 0 !== e.maxTerrain &&
                    null !== e.maxTerrain &&
                    e.hasOwnProperty("maxTerrain") &&
                    (t.maxTerrain = e.maxTerrain),
                void 0 !== e.maxQuadtree &&
                    null !== e.maxQuadtree &&
                    e.hasOwnProperty("maxQuadtree") &&
                    (t.maxQuadtree = e.maxQuadtree),
                void 0 !== e.maxDioramaMetadata &&
                    null !== e.maxDioramaMetadata &&
                    e.hasOwnProperty("maxDioramaMetadata") &&
                    (t.maxDioramaMetadata = e.maxDioramaMetadata),
                void 0 !== e.maxDioramaData &&
                    null !== e.maxDioramaData &&
                    e.hasOwnProperty("maxDioramaData") &&
                    (t.maxDioramaData = e.maxDioramaData),
                void 0 !== e.maxConsumerFetchRatio &&
                    null !== e.maxConsumerFetchRatio &&
                    e.hasOwnProperty("maxConsumerFetchRatio") &&
                    (t.maxConsumerFetchRatio = e.maxConsumerFetchRatio),
                void 0 !== e.maxProEcFetchRatio &&
                    null !== e.maxProEcFetchRatio &&
                    e.hasOwnProperty("maxProEcFetchRatio") &&
                    (t.maxProEcFetchRatio = e.maxProEcFetchRatio),
                void 0 !== e.safeOverallQps &&
                    null !== e.safeOverallQps &&
                    e.hasOwnProperty("safeOverallQps") &&
                    (t.safeOverallQps = e.safeOverallQps),
                void 0 !== e.safeImageryQps &&
                    null !== e.safeImageryQps &&
                    e.hasOwnProperty("safeImageryQps") &&
                    (t.safeImageryQps = e.safeImageryQps),
                void 0 !== e.domainsForHttps &&
                    null !== e.domainsForHttps &&
                    e.hasOwnProperty("domainsForHttps") &&
                    (t.domainsForHttps = e.domainsForHttps),
                void 0 !== e.hostsForHttp &&
                    null !== e.hostsForHttp &&
                    e.hasOwnProperty("hostsForHttp") &&
                    (t.hostsForHttp = e.hostsForHttp),
                t
            );
        }),
        (f.prototype.toObject = function(e) {
            return this.constructor.toObject(this, e);
        }),
        (f.prototype.toJSON = function() {
            return this.constructor.toObject(this, i.util.toJSONOptions);
        }),
        f)),
        (e.TimeMachineOptionsProto = ((h.prototype.serverUrl = ""),
        (h.prototype.isTimemachine = !1),
        (h.prototype.dwellTimeMs = 500),
        (h.prototype.discoverabilityAltitudeMeters = 15e3),
        (h.decode = function(e, r) {
            e instanceof l || (e = l.create(e));
            for (
                var t = void 0 === r ? e.len : e.pos + r,
                    o = new c.keyhole.dbroot.TimeMachineOptionsProto();
                e.pos < t;

            ) {
                var a = e.uint32();
                switch (a >>> 3) {
                    case 1:
                        o.serverUrl = e.string();
                        break;
                    case 2:
                        o.isTimemachine = e.bool();
                        break;
                    case 3:
                        o.dwellTimeMs = e.int32();
                        break;
                    case 4:
                        o.discoverabilityAltitudeMeters = e.int32();
                        break;
                    default:
                        e.skipType(7 & a);
                }
            }
            return o;
        }),
        (h.verify = function(e) {
            return "object" != typeof e || null === e
                ? "object expected"
                : void 0 === e.serverUrl || s.isString(e.serverUrl)
                ? void 0 !== e.isTimemachine && "boolean" != typeof e.isTimemachine
                    ? "isTimemachine: boolean expected"
                    : void 0 === e.dwellTimeMs || s.isInteger(e.dwellTimeMs)
                    ? void 0 === e.discoverabilityAltitudeMeters ||
                      s.isInteger(e.discoverabilityAltitudeMeters)
                        ? null
                        : "discoverabilityAltitudeMeters: integer expected"
                    : "dwellTimeMs: integer expected"
                : "serverUrl: string expected";
        }),
        (h.from = h.fromObject = function(e) {
            if (e instanceof c.keyhole.dbroot.TimeMachineOptionsProto) return e;
            var r = new c.keyhole.dbroot.TimeMachineOptionsProto();
            return (
                void 0 !== e.serverUrl &&
                    null !== e.serverUrl &&
                    (r.serverUrl = String(e.serverUrl)),
                void 0 !== e.isTimemachine &&
                    null !== e.isTimemachine &&
                    (r.isTimemachine = Boolean(e.isTimemachine)),
                void 0 !== e.dwellTimeMs &&
                    null !== e.dwellTimeMs &&
                    (r.dwellTimeMs = 0 | e.dwellTimeMs),
                void 0 !== e.discoverabilityAltitudeMeters &&
                    null !== e.discoverabilityAltitudeMeters &&
                    (r.discoverabilityAltitudeMeters = 0 | e.discoverabilityAltitudeMeters),
                r
            );
        }),
        (h.toObject = function(e, r) {
            r || (r = {});
            var t = {};
            return (
                r.defaults &&
                    ((t.serverUrl = ""),
                    (t.isTimemachine = !1),
                    (t.dwellTimeMs = 500),
                    (t.discoverabilityAltitudeMeters = 15e3)),
                void 0 !== e.serverUrl &&
                    null !== e.serverUrl &&
                    e.hasOwnProperty("serverUrl") &&
                    (t.serverUrl = e.serverUrl),
                void 0 !== e.isTimemachine &&
                    null !== e.isTimemachine &&
                    e.hasOwnProperty("isTimemachine") &&
                    (t.isTimemachine = e.isTimemachine),
                void 0 !== e.dwellTimeMs &&
                    null !== e.dwellTimeMs &&
                    e.hasOwnProperty("dwellTimeMs") &&
                    (t.dwellTimeMs = e.dwellTimeMs),
                void 0 !== e.discoverabilityAltitudeMeters &&
                    null !== e.discoverabilityAltitudeMeters &&
                    e.hasOwnProperty("discoverabilityAltitudeMeters") &&
                    (t.discoverabilityAltitudeMeters = e.discoverabilityAltitudeMeters),
                t
            );
        }),
        (h.prototype.toObject = function(e) {
            return this.constructor.toObject(this, e);
        }),
        (h.prototype.toJSON = function() {
            return this.constructor.toObject(this, i.util.toJSONOptions);
        }),
        h)),
        (e.AutopiaOptionsProto = ((m.prototype.metadataServerUrl = "http://cbk0.google.com/cbk"),
        (m.prototype.depthmapServerUrl = "http://cbk0.google.com/cbk"),
        (m.prototype.coverageOverlayUrl = ""),
        (m.prototype.maxImageryQps = 0),
        (m.prototype.maxMetadataDepthmapQps = 0),
        (m.decode = function(e, r) {
            e instanceof l || (e = l.create(e));
            for (
                var t = void 0 === r ? e.len : e.pos + r,
                    o = new c.keyhole.dbroot.AutopiaOptionsProto();
                e.pos < t;

            ) {
                var a = e.uint32();
                switch (a >>> 3) {
                    case 1:
                        o.metadataServerUrl = e.string();
                        break;
                    case 2:
                        o.depthmapServerUrl = e.string();
                        break;
                    case 3:
                        o.coverageOverlayUrl = e.string();
                        break;
                    case 4:
                        o.maxImageryQps = e.float();
                        break;
                    case 5:
                        o.maxMetadataDepthmapQps = e.float();
                        break;
                    default:
                        e.skipType(7 & a);
                }
            }
            return o;
        }),
        (m.verify = function(e) {
            return "object" != typeof e || null === e
                ? "object expected"
                : void 0 === e.metadataServerUrl || s.isString(e.metadataServerUrl)
                ? void 0 === e.depthmapServerUrl || s.isString(e.depthmapServerUrl)
                    ? void 0 === e.coverageOverlayUrl || s.isString(e.coverageOverlayUrl)
                        ? void 0 !== e.maxImageryQps && "number" != typeof e.maxImageryQps
                            ? "maxImageryQps: number expected"
                            : void 0 !== e.maxMetadataDepthmapQps &&
                              "number" != typeof e.maxMetadataDepthmapQps
                            ? "maxMetadataDepthmapQps: number expected"
                            : null
                        : "coverageOverlayUrl: string expected"
                    : "depthmapServerUrl: string expected"
                : "metadataServerUrl: string expected";
        }),
        (m.from = m.fromObject = function(e) {
            if (e instanceof c.keyhole.dbroot.AutopiaOptionsProto) return e;
            var r = new c.keyhole.dbroot.AutopiaOptionsProto();
            return (
                void 0 !== e.metadataServerUrl &&
                    null !== e.metadataServerUrl &&
                    (r.metadataServerUrl = String(e.metadataServerUrl)),
                void 0 !== e.depthmapServerUrl &&
                    null !== e.depthmapServerUrl &&
                    (r.depthmapServerUrl = String(e.depthmapServerUrl)),
                void 0 !== e.coverageOverlayUrl &&
                    null !== e.coverageOverlayUrl &&
                    (r.coverageOverlayUrl = String(e.coverageOverlayUrl)),
                void 0 !== e.maxImageryQps &&
                    null !== e.maxImageryQps &&
                    (r.maxImageryQps = Number(e.maxImageryQps)),
                void 0 !== e.maxMetadataDepthmapQps &&
                    null !== e.maxMetadataDepthmapQps &&
                    (r.maxMetadataDepthmapQps = Number(e.maxMetadataDepthmapQps)),
                r
            );
        }),
        (m.toObject = function(e, r) {
            r || (r = {});
            var t = {};
            return (
                r.defaults &&
                    ((t.metadataServerUrl = "http://cbk0.google.com/cbk"),
                    (t.depthmapServerUrl = "http://cbk0.google.com/cbk"),
                    (t.coverageOverlayUrl = ""),
                    (t.maxImageryQps = 0),
                    (t.maxMetadataDepthmapQps = 0)),
                void 0 !== e.metadataServerUrl &&
                    null !== e.metadataServerUrl &&
                    e.hasOwnProperty("metadataServerUrl") &&
                    (t.metadataServerUrl = e.metadataServerUrl),
                void 0 !== e.depthmapServerUrl &&
                    null !== e.depthmapServerUrl &&
                    e.hasOwnProperty("depthmapServerUrl") &&
                    (t.depthmapServerUrl = e.depthmapServerUrl),
                void 0 !== e.coverageOverlayUrl &&
                    null !== e.coverageOverlayUrl &&
                    e.hasOwnProperty("coverageOverlayUrl") &&
                    (t.coverageOverlayUrl = e.coverageOverlayUrl),
                void 0 !== e.maxImageryQps &&
                    null !== e.maxImageryQps &&
                    e.hasOwnProperty("maxImageryQps") &&
                    (t.maxImageryQps = e.maxImageryQps),
                void 0 !== e.maxMetadataDepthmapQps &&
                    null !== e.maxMetadataDepthmapQps &&
                    e.hasOwnProperty("maxMetadataDepthmapQps") &&
                    (t.maxMetadataDepthmapQps = e.maxMetadataDepthmapQps),
                t
            );
        }),
        (m.prototype.toObject = function(e) {
            return this.constructor.toObject(this, e);
        }),
        (m.prototype.toJSON = function() {
            return this.constructor.toObject(this, i.util.toJSONOptions);
        }),
        m)),
        (e.CSIOptionsProto = ((v.prototype.samplingPercentage = 0),
        (v.prototype.experimentId = ""),
        (v.decode = function(e, r) {
            e instanceof l || (e = l.create(e));
            for (
                var t = void 0 === r ? e.len : e.pos + r,
                    o = new c.keyhole.dbroot.CSIOptionsProto();
                e.pos < t;

            ) {
                var a = e.uint32();
                switch (a >>> 3) {
                    case 1:
                        o.samplingPercentage = e.int32();
                        break;
                    case 2:
                        o.experimentId = e.string();
                        break;
                    default:
                        e.skipType(7 & a);
                }
            }
            return o;
        }),
        (v.verify = function(e) {
            return "object" != typeof e || null === e
                ? "object expected"
                : void 0 === e.samplingPercentage || s.isInteger(e.samplingPercentage)
                ? void 0 === e.experimentId || s.isString(e.experimentId)
                    ? null
                    : "experimentId: string expected"
                : "samplingPercentage: integer expected";
        }),
        (v.from = v.fromObject = function(e) {
            if (e instanceof c.keyhole.dbroot.CSIOptionsProto) return e;
            var r = new c.keyhole.dbroot.CSIOptionsProto();
            return (
                void 0 !== e.samplingPercentage &&
                    null !== e.samplingPercentage &&
                    (r.samplingPercentage = 0 | e.samplingPercentage),
                void 0 !== e.experimentId &&
                    null !== e.experimentId &&
                    (r.experimentId = String(e.experimentId)),
                r
            );
        }),
        (v.toObject = function(e, r) {
            r || (r = {});
            var t = {};
            return (
                r.defaults && ((t.samplingPercentage = 0), (t.experimentId = "")),
                void 0 !== e.samplingPercentage &&
                    null !== e.samplingPercentage &&
                    e.hasOwnProperty("samplingPercentage") &&
                    (t.samplingPercentage = e.samplingPercentage),
                void 0 !== e.experimentId &&
                    null !== e.experimentId &&
                    e.hasOwnProperty("experimentId") &&
                    (t.experimentId = e.experimentId),
                t
            );
        }),
        (v.prototype.toObject = function(e) {
            return this.constructor.toObject(this, e);
        }),
        (v.prototype.toJSON = function() {
            return this.constructor.toObject(this, i.util.toJSONOptions);
        }),
        v)),
        (e.SearchTabProto = (function() {
            function e(e) {
                if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
            }
            (e.prototype.isVisible = !1),
                (e.prototype.tabLabel = null),
                (e.prototype.baseUrl = ""),
                (e.prototype.viewportPrefix = ""),
                (e.prototype.inputBox = s.emptyArray),
                (e.prototype.requirement = null);
            var n = {
                1: "keyhole.dbroot.StringIdOrValueProto",
                4: "keyhole.dbroot.SearchTabProto.InputBoxInfo",
                5: "keyhole.dbroot.RequirementProto"
            };
            return (
                p.push(n),
                (e.decode = function(e, r) {
                    e instanceof l || (e = l.create(e));
                    for (
                        var t = void 0 === r ? e.len : e.pos + r,
                            o = new c.keyhole.dbroot.SearchTabProto();
                        e.pos < t;

                    ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                            case 1:
                                o.isVisible = e.bool();
                                break;
                            case 2:
                                o.tabLabel = n[1].decode(e, e.uint32());
                                break;
                            case 3:
                                o.baseUrl = e.string();
                                break;
                            case 4:
                                o.viewportPrefix = e.string();
                                break;
                            case 5:
                                (o.inputBox && o.inputBox.length) || (o.inputBox = []),
                                    o.inputBox.push(n[4].decode(e, e.uint32()));
                                break;
                            case 6:
                                o.requirement = n[5].decode(e, e.uint32());
                                break;
                            default:
                                e.skipType(7 & a);
                        }
                    }
                    return o;
                }),
                (e.verify = function(e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if ("boolean" != typeof e.isVisible) return "isVisible: boolean expected";
                    if (
                        void 0 !== e.tabLabel &&
                        null !== e.tabLabel &&
                        (t = n[1].verify(e.tabLabel))
                    )
                        return "tabLabel." + t;
                    if (void 0 !== e.baseUrl && !s.isString(e.baseUrl))
                        return "baseUrl: string expected";
                    if (void 0 !== e.viewportPrefix && !s.isString(e.viewportPrefix))
                        return "viewportPrefix: string expected";
                    if (void 0 !== e.inputBox) {
                        if (!Array.isArray(e.inputBox)) return "inputBox: array expected";
                        for (var r = 0; r < e.inputBox.length; ++r) {
                            var t;
                            if ((t = n[4].verify(e.inputBox[r]))) return "inputBox." + t;
                        }
                    }
                    return void 0 !== e.requirement &&
                        null !== e.requirement &&
                        (t = n[5].verify(e.requirement))
                        ? "requirement." + t
                        : null;
                }),
                (e.from = e.fromObject = function(e) {
                    if (e instanceof c.keyhole.dbroot.SearchTabProto) return e;
                    var r = new c.keyhole.dbroot.SearchTabProto();
                    if (
                        (void 0 !== e.isVisible &&
                            null !== e.isVisible &&
                            (r.isVisible = Boolean(e.isVisible)),
                        void 0 !== e.tabLabel && null !== e.tabLabel)
                    ) {
                        if ("object" != typeof e.tabLabel)
                            throw TypeError(
                                ".keyhole.dbroot.SearchTabProto.tabLabel: object expected"
                            );
                        r.tabLabel = n[1].fromObject(e.tabLabel);
                    }
                    if (
                        (void 0 !== e.baseUrl &&
                            null !== e.baseUrl &&
                            (r.baseUrl = String(e.baseUrl)),
                        void 0 !== e.viewportPrefix &&
                            null !== e.viewportPrefix &&
                            (r.viewportPrefix = String(e.viewportPrefix)),
                        e.inputBox)
                    ) {
                        if (!Array.isArray(e.inputBox))
                            throw TypeError(
                                ".keyhole.dbroot.SearchTabProto.inputBox: array expected"
                            );
                        r.inputBox = [];
                        for (var t = 0; t < e.inputBox.length; ++t) {
                            if ("object" != typeof e.inputBox[t])
                                throw TypeError(
                                    ".keyhole.dbroot.SearchTabProto.inputBox: object expected"
                                );
                            r.inputBox[t] = n[4].fromObject(e.inputBox[t]);
                        }
                    }
                    if (void 0 !== e.requirement && null !== e.requirement) {
                        if ("object" != typeof e.requirement)
                            throw TypeError(
                                ".keyhole.dbroot.SearchTabProto.requirement: object expected"
                            );
                        r.requirement = n[5].fromObject(e.requirement);
                    }
                    return r;
                }),
                (e.toObject = function(e, r) {
                    r || (r = {});
                    var t = {};
                    if (
                        ((r.arrays || r.defaults) && (t.inputBox = []),
                        r.defaults &&
                            ((t.isVisible = !1),
                            (t.tabLabel = null),
                            (t.baseUrl = ""),
                            (t.viewportPrefix = ""),
                            (t.requirement = null)),
                        void 0 !== e.isVisible &&
                            null !== e.isVisible &&
                            e.hasOwnProperty("isVisible") &&
                            (t.isVisible = e.isVisible),
                        void 0 !== e.tabLabel &&
                            null !== e.tabLabel &&
                            e.hasOwnProperty("tabLabel") &&
                            (t.tabLabel = n[1].toObject(e.tabLabel, r)),
                        void 0 !== e.baseUrl &&
                            null !== e.baseUrl &&
                            e.hasOwnProperty("baseUrl") &&
                            (t.baseUrl = e.baseUrl),
                        void 0 !== e.viewportPrefix &&
                            null !== e.viewportPrefix &&
                            e.hasOwnProperty("viewportPrefix") &&
                            (t.viewportPrefix = e.viewportPrefix),
                        void 0 !== e.inputBox &&
                            null !== e.inputBox &&
                            e.hasOwnProperty("inputBox"))
                    ) {
                        t.inputBox = [];
                        for (var o = 0; o < e.inputBox.length; ++o)
                            t.inputBox[o] = n[4].toObject(e.inputBox[o], r);
                    }
                    return (
                        void 0 !== e.requirement &&
                            null !== e.requirement &&
                            e.hasOwnProperty("requirement") &&
                            (t.requirement = n[5].toObject(e.requirement, r)),
                        t
                    );
                }),
                (e.prototype.toObject = function(e) {
                    return this.constructor.toObject(this, e);
                }),
                (e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, i.util.toJSONOptions);
                }),
                (e.InputBoxInfo = (function() {
                    function e(e) {
                        if (e)
                            for (var r = Object.keys(e), t = 0; t < r.length; ++t)
                                this[r[t]] = e[r[t]];
                    }
                    (e.prototype.label = null),
                        (e.prototype.queryVerb = ""),
                        (e.prototype.queryPrepend = "");
                    var n = { 0: "keyhole.dbroot.StringIdOrValueProto" };
                    return (
                        p.push(n),
                        (e.decode = function(e, r) {
                            e instanceof l || (e = l.create(e));
                            for (
                                var t = void 0 === r ? e.len : e.pos + r,
                                    o = new c.keyhole.dbroot.SearchTabProto.InputBoxInfo();
                                e.pos < t;

                            ) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        o.label = n[0].decode(e, e.uint32());
                                        break;
                                    case 2:
                                        o.queryVerb = e.string();
                                        break;
                                    case 3:
                                        o.queryPrepend = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a);
                                }
                            }
                            return o;
                        }),
                        (e.verify = function(e) {
                            if ("object" != typeof e || null === e) return "object expected";
                            var r = n[0].verify(e.label);
                            return r
                                ? "label." + r
                                : s.isString(e.queryVerb)
                                ? void 0 === e.queryPrepend || s.isString(e.queryPrepend)
                                    ? null
                                    : "queryPrepend: string expected"
                                : "queryVerb: string expected";
                        }),
                        (e.from = e.fromObject = function(e) {
                            if (e instanceof c.keyhole.dbroot.SearchTabProto.InputBoxInfo) return e;
                            var r = new c.keyhole.dbroot.SearchTabProto.InputBoxInfo();
                            if (void 0 !== e.label && null !== e.label) {
                                if ("object" != typeof e.label)
                                    throw TypeError(
                                        ".keyhole.dbroot.SearchTabProto.InputBoxInfo.label: object expected"
                                    );
                                r.label = n[0].fromObject(e.label);
                            }
                            return (
                                void 0 !== e.queryVerb &&
                                    null !== e.queryVerb &&
                                    (r.queryVerb = String(e.queryVerb)),
                                void 0 !== e.queryPrepend &&
                                    null !== e.queryPrepend &&
                                    (r.queryPrepend = String(e.queryPrepend)),
                                r
                            );
                        }),
                        (e.toObject = function(e, r) {
                            r || (r = {});
                            var t = {};
                            return (
                                r.defaults &&
                                    ((t.label = null), (t.queryVerb = ""), (t.queryPrepend = "")),
                                void 0 !== e.label &&
                                    null !== e.label &&
                                    e.hasOwnProperty("label") &&
                                    (t.label = n[0].toObject(e.label, r)),
                                void 0 !== e.queryVerb &&
                                    null !== e.queryVerb &&
                                    e.hasOwnProperty("queryVerb") &&
                                    (t.queryVerb = e.queryVerb),
                                void 0 !== e.queryPrepend &&
                                    null !== e.queryPrepend &&
                                    e.hasOwnProperty("queryPrepend") &&
                                    (t.queryPrepend = e.queryPrepend),
                                t
                            );
                        }),
                        (e.prototype.toObject = function(e) {
                            return this.constructor.toObject(this, e);
                        }),
                        (e.prototype.toJSON = function() {
                            return this.constructor.toObject(this, i.util.toJSONOptions);
                        }),
                        e
                    );
                })()),
                e
            );
        })()),
        (e.CobrandProto = (function() {
            function e(e) {
                if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
            }
            (e.prototype.logoUrl = ""),
                (e.prototype.xCoord = null),
                (e.prototype.yCoord = null),
                (e.prototype.tiePoint = 6),
                (e.prototype.screenSize = 0);
            var r,
                n = {
                    1: "keyhole.dbroot.CobrandProto.Coord",
                    2: "keyhole.dbroot.CobrandProto.Coord",
                    3: "keyhole.dbroot.CobrandProto.TiePoint"
                };
            function t(e) {
                if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
            }
            return (
                p.push(n),
                (e.decode = function(e, r) {
                    e instanceof l || (e = l.create(e));
                    for (
                        var t = void 0 === r ? e.len : e.pos + r,
                            o = new c.keyhole.dbroot.CobrandProto();
                        e.pos < t;

                    ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                            case 1:
                                o.logoUrl = e.string();
                                break;
                            case 2:
                                o.xCoord = n[1].decode(e, e.uint32());
                                break;
                            case 3:
                                o.yCoord = n[2].decode(e, e.uint32());
                                break;
                            case 4:
                                o.tiePoint = e.uint32();
                                break;
                            case 5:
                                o.screenSize = e.double();
                                break;
                            default:
                                e.skipType(7 & a);
                        }
                    }
                    return o;
                }),
                (e.verify = function(e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (!s.isString(e.logoUrl)) return "logoUrl: string expected";
                    var r;
                    if (void 0 !== e.xCoord && null !== e.xCoord && (r = n[1].verify(e.xCoord)))
                        return "xCoord." + r;
                    if (void 0 !== e.yCoord && null !== e.yCoord && (r = n[2].verify(e.yCoord)))
                        return "yCoord." + r;
                    if (void 0 !== e.tiePoint)
                        switch (e.tiePoint) {
                            default:
                                return "tiePoint: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                        }
                    return void 0 !== e.screenSize && "number" != typeof e.screenSize
                        ? "screenSize: number expected"
                        : null;
                }),
                (e.from = e.fromObject = function(e) {
                    if (e instanceof c.keyhole.dbroot.CobrandProto) return e;
                    var r = new c.keyhole.dbroot.CobrandProto();
                    if (
                        (void 0 !== e.logoUrl &&
                            null !== e.logoUrl &&
                            (r.logoUrl = String(e.logoUrl)),
                        void 0 !== e.xCoord && null !== e.xCoord)
                    ) {
                        if ("object" != typeof e.xCoord)
                            throw TypeError(".keyhole.dbroot.CobrandProto.xCoord: object expected");
                        r.xCoord = n[1].fromObject(e.xCoord);
                    }
                    if (void 0 !== e.yCoord && null !== e.yCoord) {
                        if ("object" != typeof e.yCoord)
                            throw TypeError(".keyhole.dbroot.CobrandProto.yCoord: object expected");
                        r.yCoord = n[2].fromObject(e.yCoord);
                    }
                    switch (e.tiePoint) {
                        case "TOP_LEFT":
                        case 0:
                            r.tiePoint = 0;
                            break;
                        case "TOP_CENTER":
                        case 1:
                            r.tiePoint = 1;
                            break;
                        case "TOP_RIGHT":
                        case 2:
                            r.tiePoint = 2;
                            break;
                        case "MID_LEFT":
                        case 3:
                            r.tiePoint = 3;
                            break;
                        case "MID_CENTER":
                        case 4:
                            r.tiePoint = 4;
                            break;
                        case "MID_RIGHT":
                        case 5:
                            r.tiePoint = 5;
                            break;
                        case "BOTTOM_LEFT":
                        case 6:
                            r.tiePoint = 6;
                            break;
                        case "BOTTOM_CENTER":
                        case 7:
                            r.tiePoint = 7;
                            break;
                        case "BOTTOM_RIGHT":
                        case 8:
                            r.tiePoint = 8;
                    }
                    return (
                        void 0 !== e.screenSize &&
                            null !== e.screenSize &&
                            (r.screenSize = Number(e.screenSize)),
                        r
                    );
                }),
                (e.toObject = function(e, r) {
                    r || (r = {});
                    var t = {};
                    return (
                        r.defaults &&
                            ((t.logoUrl = ""),
                            (t.xCoord = null),
                            (t.yCoord = null),
                            (t.tiePoint = r.enums === String ? "BOTTOM_LEFT" : 6),
                            (t.screenSize = 0)),
                        void 0 !== e.logoUrl &&
                            null !== e.logoUrl &&
                            e.hasOwnProperty("logoUrl") &&
                            (t.logoUrl = e.logoUrl),
                        void 0 !== e.xCoord &&
                            null !== e.xCoord &&
                            e.hasOwnProperty("xCoord") &&
                            (t.xCoord = n[1].toObject(e.xCoord, r)),
                        void 0 !== e.yCoord &&
                            null !== e.yCoord &&
                            e.hasOwnProperty("yCoord") &&
                            (t.yCoord = n[2].toObject(e.yCoord, r)),
                        void 0 !== e.tiePoint &&
                            null !== e.tiePoint &&
                            e.hasOwnProperty("tiePoint") &&
                            (t.tiePoint = r.enums === String ? n[3][e.tiePoint] : e.tiePoint),
                        void 0 !== e.screenSize &&
                            null !== e.screenSize &&
                            e.hasOwnProperty("screenSize") &&
                            (t.screenSize = e.screenSize),
                        t
                    );
                }),
                (e.prototype.toObject = function(e) {
                    return this.constructor.toObject(this, e);
                }),
                (e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, i.util.toJSONOptions);
                }),
                (e.Coord = ((t.prototype.value = 0),
                (t.prototype.isRelative = !1),
                (t.decode = function(e, r) {
                    e instanceof l || (e = l.create(e));
                    for (
                        var t = void 0 === r ? e.len : e.pos + r,
                            o = new c.keyhole.dbroot.CobrandProto.Coord();
                        e.pos < t;

                    ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                            case 1:
                                o.value = e.double();
                                break;
                            case 2:
                                o.isRelative = e.bool();
                                break;
                            default:
                                e.skipType(7 & a);
                        }
                    }
                    return o;
                }),
                (t.verify = function(e) {
                    return "object" != typeof e || null === e
                        ? "object expected"
                        : "number" != typeof e.value
                        ? "value: number expected"
                        : void 0 !== e.isRelative && "boolean" != typeof e.isRelative
                        ? "isRelative: boolean expected"
                        : null;
                }),
                (t.from = t.fromObject = function(e) {
                    if (e instanceof c.keyhole.dbroot.CobrandProto.Coord) return e;
                    var r = new c.keyhole.dbroot.CobrandProto.Coord();
                    return (
                        void 0 !== e.value && null !== e.value && (r.value = Number(e.value)),
                        void 0 !== e.isRelative &&
                            null !== e.isRelative &&
                            (r.isRelative = Boolean(e.isRelative)),
                        r
                    );
                }),
                (t.toObject = function(e, r) {
                    r || (r = {});
                    var t = {};
                    return (
                        r.defaults && ((t.value = 0), (t.isRelative = !1)),
                        void 0 !== e.value &&
                            null !== e.value &&
                            e.hasOwnProperty("value") &&
                            (t.value = e.value),
                        void 0 !== e.isRelative &&
                            null !== e.isRelative &&
                            e.hasOwnProperty("isRelative") &&
                            (t.isRelative = e.isRelative),
                        t
                    );
                }),
                (t.prototype.toObject = function(e) {
                    return this.constructor.toObject(this, e);
                }),
                (t.prototype.toJSON = function() {
                    return this.constructor.toObject(this, i.util.toJSONOptions);
                }),
                t)),
                (e.TiePoint = (((r = Object.create({})).TOP_LEFT = 0),
                (r.TOP_CENTER = 1),
                (r.TOP_RIGHT = 2),
                (r.MID_LEFT = 3),
                (r.MID_CENTER = 4),
                (r.MID_RIGHT = 5),
                (r.BOTTOM_LEFT = 6),
                (r.BOTTOM_CENTER = 7),
                (r.BOTTOM_RIGHT = 8),
                r)),
                e
            );
        })()),
        (e.DatabaseDescriptionProto = (function() {
            function e(e) {
                if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
            }
            (e.prototype.databaseName = null), (e.prototype.databaseUrl = "");
            var n = { 0: "keyhole.dbroot.StringIdOrValueProto" };
            return (
                p.push(n),
                (e.decode = function(e, r) {
                    e instanceof l || (e = l.create(e));
                    for (
                        var t = void 0 === r ? e.len : e.pos + r,
                            o = new c.keyhole.dbroot.DatabaseDescriptionProto();
                        e.pos < t;

                    ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                            case 1:
                                o.databaseName = n[0].decode(e, e.uint32());
                                break;
                            case 2:
                                o.databaseUrl = e.string();
                                break;
                            default:
                                e.skipType(7 & a);
                        }
                    }
                    return o;
                }),
                (e.verify = function(e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (void 0 !== e.databaseName && null !== e.databaseName) {
                        var r = n[0].verify(e.databaseName);
                        if (r) return "databaseName." + r;
                    }
                    return s.isString(e.databaseUrl) ? null : "databaseUrl: string expected";
                }),
                (e.from = e.fromObject = function(e) {
                    if (e instanceof c.keyhole.dbroot.DatabaseDescriptionProto) return e;
                    var r = new c.keyhole.dbroot.DatabaseDescriptionProto();
                    if (void 0 !== e.databaseName && null !== e.databaseName) {
                        if ("object" != typeof e.databaseName)
                            throw TypeError(
                                ".keyhole.dbroot.DatabaseDescriptionProto.databaseName: object expected"
                            );
                        r.databaseName = n[0].fromObject(e.databaseName);
                    }
                    return (
                        void 0 !== e.databaseUrl &&
                            null !== e.databaseUrl &&
                            (r.databaseUrl = String(e.databaseUrl)),
                        r
                    );
                }),
                (e.toObject = function(e, r) {
                    r || (r = {});
                    var t = {};
                    return (
                        r.defaults && ((t.databaseName = null), (t.databaseUrl = "")),
                        void 0 !== e.databaseName &&
                            null !== e.databaseName &&
                            e.hasOwnProperty("databaseName") &&
                            (t.databaseName = n[0].toObject(e.databaseName, r)),
                        void 0 !== e.databaseUrl &&
                            null !== e.databaseUrl &&
                            e.hasOwnProperty("databaseUrl") &&
                            (t.databaseUrl = e.databaseUrl),
                        t
                    );
                }),
                (e.prototype.toObject = function(e) {
                    return this.constructor.toObject(this, e);
                }),
                (e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, i.util.toJSONOptions);
                }),
                e
            );
        })()),
        (e.ConfigScriptProto = ((g.prototype.scriptName = ""),
        (g.prototype.scriptData = ""),
        (g.decode = function(e, r) {
            e instanceof l || (e = l.create(e));
            for (
                var t = void 0 === r ? e.len : e.pos + r,
                    o = new c.keyhole.dbroot.ConfigScriptProto();
                e.pos < t;

            ) {
                var a = e.uint32();
                switch (a >>> 3) {
                    case 1:
                        o.scriptName = e.string();
                        break;
                    case 2:
                        o.scriptData = e.string();
                        break;
                    default:
                        e.skipType(7 & a);
                }
            }
            return o;
        }),
        (g.verify = function(e) {
            return "object" != typeof e || null === e
                ? "object expected"
                : s.isString(e.scriptName)
                ? s.isString(e.scriptData)
                    ? null
                    : "scriptData: string expected"
                : "scriptName: string expected";
        }),
        (g.from = g.fromObject = function(e) {
            if (e instanceof c.keyhole.dbroot.ConfigScriptProto) return e;
            var r = new c.keyhole.dbroot.ConfigScriptProto();
            return (
                void 0 !== e.scriptName &&
                    null !== e.scriptName &&
                    (r.scriptName = String(e.scriptName)),
                void 0 !== e.scriptData &&
                    null !== e.scriptData &&
                    (r.scriptData = String(e.scriptData)),
                r
            );
        }),
        (g.toObject = function(e, r) {
            r || (r = {});
            var t = {};
            return (
                r.defaults && ((t.scriptName = ""), (t.scriptData = "")),
                void 0 !== e.scriptName &&
                    null !== e.scriptName &&
                    e.hasOwnProperty("scriptName") &&
                    (t.scriptName = e.scriptName),
                void 0 !== e.scriptData &&
                    null !== e.scriptData &&
                    e.hasOwnProperty("scriptData") &&
                    (t.scriptData = e.scriptData),
                t
            );
        }),
        (g.prototype.toObject = function(e) {
            return this.constructor.toObject(this, e);
        }),
        (g.prototype.toJSON = function() {
            return this.constructor.toObject(this, i.util.toJSONOptions);
        }),
        g)),
        (e.SwoopParamsProto = ((P.prototype.startDistInMeters = 0),
        (P.decode = function(e, r) {
            e instanceof l || (e = l.create(e));
            for (
                var t = void 0 === r ? e.len : e.pos + r,
                    o = new c.keyhole.dbroot.SwoopParamsProto();
                e.pos < t;

            ) {
                var a = e.uint32();
                switch (a >>> 3) {
                    case 1:
                        o.startDistInMeters = e.double();
                        break;
                    default:
                        e.skipType(7 & a);
                }
            }
            return o;
        }),
        (P.verify = function(e) {
            return "object" != typeof e || null === e
                ? "object expected"
                : void 0 !== e.startDistInMeters && "number" != typeof e.startDistInMeters
                ? "startDistInMeters: number expected"
                : null;
        }),
        (P.from = P.fromObject = function(e) {
            if (e instanceof c.keyhole.dbroot.SwoopParamsProto) return e;
            var r = new c.keyhole.dbroot.SwoopParamsProto();
            return (
                void 0 !== e.startDistInMeters &&
                    null !== e.startDistInMeters &&
                    (r.startDistInMeters = Number(e.startDistInMeters)),
                r
            );
        }),
        (P.toObject = function(e, r) {
            r || (r = {});
            var t = {};
            return (
                r.defaults && (t.startDistInMeters = 0),
                void 0 !== e.startDistInMeters &&
                    null !== e.startDistInMeters &&
                    e.hasOwnProperty("startDistInMeters") &&
                    (t.startDistInMeters = e.startDistInMeters),
                t
            );
        }),
        (P.prototype.toObject = function(e) {
            return this.constructor.toObject(this, e);
        }),
        (P.prototype.toJSON = function() {
            return this.constructor.toObject(this, i.util.toJSONOptions);
        }),
        P)),
        (e.PostingServerProto = (function() {
            function e(e) {
                if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
            }
            (e.prototype.name = null),
                (e.prototype.baseUrl = null),
                (e.prototype.postWizardPath = null),
                (e.prototype.fileSubmitPath = null);
            var n = {
                0: "keyhole.dbroot.StringIdOrValueProto",
                1: "keyhole.dbroot.StringIdOrValueProto",
                2: "keyhole.dbroot.StringIdOrValueProto",
                3: "keyhole.dbroot.StringIdOrValueProto"
            };
            return (
                p.push(n),
                (e.decode = function(e, r) {
                    e instanceof l || (e = l.create(e));
                    for (
                        var t = void 0 === r ? e.len : e.pos + r,
                            o = new c.keyhole.dbroot.PostingServerProto();
                        e.pos < t;

                    ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                            case 1:
                                o.name = n[0].decode(e, e.uint32());
                                break;
                            case 2:
                                o.baseUrl = n[1].decode(e, e.uint32());
                                break;
                            case 3:
                                o.postWizardPath = n[2].decode(e, e.uint32());
                                break;
                            case 4:
                                o.fileSubmitPath = n[3].decode(e, e.uint32());
                                break;
                            default:
                                e.skipType(7 & a);
                        }
                    }
                    return o;
                }),
                (e.verify = function(e) {
                    return "object" != typeof e || null === e
                        ? "object expected"
                        : void 0 !== e.name && null !== e.name && (r = n[0].verify(e.name))
                        ? "name." + r
                        : void 0 !== e.baseUrl && null !== e.baseUrl && (r = n[1].verify(e.baseUrl))
                        ? "baseUrl." + r
                        : void 0 !== e.postWizardPath &&
                          null !== e.postWizardPath &&
                          (r = n[2].verify(e.postWizardPath))
                        ? "postWizardPath." + r
                        : void 0 !== e.fileSubmitPath &&
                          null !== e.fileSubmitPath &&
                          (r = n[3].verify(e.fileSubmitPath))
                        ? "fileSubmitPath." + r
                        : null;
                    var r;
                }),
                (e.from = e.fromObject = function(e) {
                    if (e instanceof c.keyhole.dbroot.PostingServerProto) return e;
                    var r = new c.keyhole.dbroot.PostingServerProto();
                    if (void 0 !== e.name && null !== e.name) {
                        if ("object" != typeof e.name)
                            throw TypeError(
                                ".keyhole.dbroot.PostingServerProto.name: object expected"
                            );
                        r.name = n[0].fromObject(e.name);
                    }
                    if (void 0 !== e.baseUrl && null !== e.baseUrl) {
                        if ("object" != typeof e.baseUrl)
                            throw TypeError(
                                ".keyhole.dbroot.PostingServerProto.baseUrl: object expected"
                            );
                        r.baseUrl = n[1].fromObject(e.baseUrl);
                    }
                    if (void 0 !== e.postWizardPath && null !== e.postWizardPath) {
                        if ("object" != typeof e.postWizardPath)
                            throw TypeError(
                                ".keyhole.dbroot.PostingServerProto.postWizardPath: object expected"
                            );
                        r.postWizardPath = n[2].fromObject(e.postWizardPath);
                    }
                    if (void 0 !== e.fileSubmitPath && null !== e.fileSubmitPath) {
                        if ("object" != typeof e.fileSubmitPath)
                            throw TypeError(
                                ".keyhole.dbroot.PostingServerProto.fileSubmitPath: object expected"
                            );
                        r.fileSubmitPath = n[3].fromObject(e.fileSubmitPath);
                    }
                    return r;
                }),
                (e.toObject = function(e, r) {
                    r || (r = {});
                    var t = {};
                    return (
                        r.defaults &&
                            ((t.name = null),
                            (t.baseUrl = null),
                            (t.postWizardPath = null),
                            (t.fileSubmitPath = null)),
                        void 0 !== e.name &&
                            null !== e.name &&
                            e.hasOwnProperty("name") &&
                            (t.name = n[0].toObject(e.name, r)),
                        void 0 !== e.baseUrl &&
                            null !== e.baseUrl &&
                            e.hasOwnProperty("baseUrl") &&
                            (t.baseUrl = n[1].toObject(e.baseUrl, r)),
                        void 0 !== e.postWizardPath &&
                            null !== e.postWizardPath &&
                            e.hasOwnProperty("postWizardPath") &&
                            (t.postWizardPath = n[2].toObject(e.postWizardPath, r)),
                        void 0 !== e.fileSubmitPath &&
                            null !== e.fileSubmitPath &&
                            e.hasOwnProperty("fileSubmitPath") &&
                            (t.fileSubmitPath = n[3].toObject(e.fileSubmitPath, r)),
                        t
                    );
                }),
                (e.prototype.toObject = function(e) {
                    return this.constructor.toObject(this, e);
                }),
                (e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, i.util.toJSONOptions);
                }),
                e
            );
        })()),
        (e.PlanetaryDatabaseProto = (function() {
            function e(e) {
                if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
            }
            (e.prototype.url = null), (e.prototype.name = null);
            var n = {
                0: "keyhole.dbroot.StringIdOrValueProto",
                1: "keyhole.dbroot.StringIdOrValueProto"
            };
            return (
                p.push(n),
                (e.decode = function(e, r) {
                    e instanceof l || (e = l.create(e));
                    for (
                        var t = void 0 === r ? e.len : e.pos + r,
                            o = new c.keyhole.dbroot.PlanetaryDatabaseProto();
                        e.pos < t;

                    ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                            case 1:
                                o.url = n[0].decode(e, e.uint32());
                                break;
                            case 2:
                                o.name = n[1].decode(e, e.uint32());
                                break;
                            default:
                                e.skipType(7 & a);
                        }
                    }
                    return o;
                }),
                (e.verify = function(e) {
                    return "object" != typeof e || null === e
                        ? "object expected"
                        : (r = n[0].verify(e.url))
                        ? "url." + r
                        : (r = n[1].verify(e.name))
                        ? "name." + r
                        : null;
                    var r;
                }),
                (e.from = e.fromObject = function(e) {
                    if (e instanceof c.keyhole.dbroot.PlanetaryDatabaseProto) return e;
                    var r = new c.keyhole.dbroot.PlanetaryDatabaseProto();
                    if (void 0 !== e.url && null !== e.url) {
                        if ("object" != typeof e.url)
                            throw TypeError(
                                ".keyhole.dbroot.PlanetaryDatabaseProto.url: object expected"
                            );
                        r.url = n[0].fromObject(e.url);
                    }
                    if (void 0 !== e.name && null !== e.name) {
                        if ("object" != typeof e.name)
                            throw TypeError(
                                ".keyhole.dbroot.PlanetaryDatabaseProto.name: object expected"
                            );
                        r.name = n[1].fromObject(e.name);
                    }
                    return r;
                }),
                (e.toObject = function(e, r) {
                    r || (r = {});
                    var t = {};
                    return (
                        r.defaults && ((t.url = null), (t.name = null)),
                        void 0 !== e.url &&
                            null !== e.url &&
                            e.hasOwnProperty("url") &&
                            (t.url = n[0].toObject(e.url, r)),
                        void 0 !== e.name &&
                            null !== e.name &&
                            e.hasOwnProperty("name") &&
                            (t.name = n[1].toObject(e.name, r)),
                        t
                    );
                }),
                (e.prototype.toObject = function(e) {
                    return this.constructor.toObject(this, e);
                }),
                (e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, i.util.toJSONOptions);
                }),
                e
            );
        })()),
        (e.LogServerProto = (function() {
            function e(e) {
                if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
            }
            (e.prototype.url = null), (e.prototype.enable = !1), (e.prototype.throttlingFactor = 1);
            var n = { 0: "keyhole.dbroot.StringIdOrValueProto" };
            return (
                p.push(n),
                (e.decode = function(e, r) {
                    e instanceof l || (e = l.create(e));
                    for (
                        var t = void 0 === r ? e.len : e.pos + r,
                            o = new c.keyhole.dbroot.LogServerProto();
                        e.pos < t;

                    ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                            case 1:
                                o.url = n[0].decode(e, e.uint32());
                                break;
                            case 2:
                                o.enable = e.bool();
                                break;
                            case 3:
                                o.throttlingFactor = e.int32();
                                break;
                            default:
                                e.skipType(7 & a);
                        }
                    }
                    return o;
                }),
                (e.verify = function(e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (void 0 !== e.url && null !== e.url) {
                        var r = n[0].verify(e.url);
                        if (r) return "url." + r;
                    }
                    return void 0 !== e.enable && "boolean" != typeof e.enable
                        ? "enable: boolean expected"
                        : void 0 === e.throttlingFactor || s.isInteger(e.throttlingFactor)
                        ? null
                        : "throttlingFactor: integer expected";
                }),
                (e.from = e.fromObject = function(e) {
                    if (e instanceof c.keyhole.dbroot.LogServerProto) return e;
                    var r = new c.keyhole.dbroot.LogServerProto();
                    if (void 0 !== e.url && null !== e.url) {
                        if ("object" != typeof e.url)
                            throw TypeError(".keyhole.dbroot.LogServerProto.url: object expected");
                        r.url = n[0].fromObject(e.url);
                    }
                    return (
                        void 0 !== e.enable && null !== e.enable && (r.enable = Boolean(e.enable)),
                        void 0 !== e.throttlingFactor &&
                            null !== e.throttlingFactor &&
                            (r.throttlingFactor = 0 | e.throttlingFactor),
                        r
                    );
                }),
                (e.toObject = function(e, r) {
                    r || (r = {});
                    var t = {};
                    return (
                        r.defaults && ((t.url = null), (t.enable = !1), (t.throttlingFactor = 1)),
                        void 0 !== e.url &&
                            null !== e.url &&
                            e.hasOwnProperty("url") &&
                            (t.url = n[0].toObject(e.url, r)),
                        void 0 !== e.enable &&
                            null !== e.enable &&
                            e.hasOwnProperty("enable") &&
                            (t.enable = e.enable),
                        void 0 !== e.throttlingFactor &&
                            null !== e.throttlingFactor &&
                            e.hasOwnProperty("throttlingFactor") &&
                            (t.throttlingFactor = e.throttlingFactor),
                        t
                    );
                }),
                (e.prototype.toObject = function(e) {
                    return this.constructor.toObject(this, e);
                }),
                (e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, i.util.toJSONOptions);
                }),
                e
            );
        })()),
        (e.EndSnippetProto = (function() {
            function e(e) {
                if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
            }
            (e.prototype.model = null),
                (e.prototype.authServerUrl = null),
                (e.prototype.disableAuthentication = !1),
                (e.prototype.mfeDomains = s.emptyArray),
                (e.prototype.mfeLangParam = "hl=$5Bhl5D"),
                (e.prototype.adsUrlPatterns = ""),
                (e.prototype.reverseGeocoderUrl = null),
                (e.prototype.reverseGeocoderProtocolVersion = 3),
                (e.prototype.skyDatabaseIsAvailable = !0),
                (e.prototype.skyDatabaseUrl = null),
                (e.prototype.defaultWebPageIntlUrl = null),
                (e.prototype.numStartUpTips = 17),
                (e.prototype.startUpTipsUrl = null),
                (e.prototype.numProStartUpTips = 0),
                (e.prototype.proStartUpTipsUrl = null),
                (e.prototype.startupTipsIntlUrl = null),
                (e.prototype.userGuideIntlUrl = null),
                (e.prototype.supportCenterIntlUrl = null),
                (e.prototype.businessListingIntlUrl = null),
                (e.prototype.supportAnswerIntlUrl = null),
                (e.prototype.supportTopicIntlUrl = null),
                (e.prototype.supportRequestIntlUrl = null),
                (e.prototype.earthIntlUrl = null),
                (e.prototype.addContentUrl = null),
                (e.prototype.sketchupNotInstalledUrl = null),
                (e.prototype.sketchupErrorUrl = null),
                (e.prototype.freeLicenseUrl = null),
                (e.prototype.proLicenseUrl = null),
                (e.prototype.tutorialUrl = null),
                (e.prototype.keyboardShortcutsUrl = null),
                (e.prototype.releaseNotesUrl = null),
                (e.prototype.hideUserData = !1),
                (e.prototype.useGeLogo = !0),
                (e.prototype.dioramaDescriptionUrlBase = null),
                (e.prototype.dioramaDefaultColor = 4291281607),
                (e.prototype.dioramaBlacklistUrl = null),
                (e.prototype.clientOptions = null),
                (e.prototype.fetchingOptions = null),
                (e.prototype.timeMachineOptions = null),
                (e.prototype.csiOptions = null),
                (e.prototype.searchTab = s.emptyArray),
                (e.prototype.cobrandInfo = s.emptyArray),
                (e.prototype.validDatabase = s.emptyArray),
                (e.prototype.configScript = s.emptyArray),
                (e.prototype.deauthServerUrl = null),
                (e.prototype.swoopParameters = null),
                (e.prototype.bbsServerInfo = null),
                (e.prototype.dataErrorServerInfo = null),
                (e.prototype.planetaryDatabase = s.emptyArray),
                (e.prototype.logServer = null),
                (e.prototype.autopiaOptions = null),
                (e.prototype.searchConfig = null),
                (e.prototype.searchInfo = null),
                (e.prototype.elevationServiceBaseUrl =
                    "http://maps.google.com/maps/api/elevation/"),
                (e.prototype.elevationProfileQueryDelay = 500),
                (e.prototype.proUpgradeUrl = null),
                (e.prototype.earthCommunityUrl = null),
                (e.prototype.googleMapsUrl = null),
                (e.prototype.sharingUrl = null),
                (e.prototype.privacyPolicyUrl = null),
                (e.prototype.doGplusUserCheck = !1),
                (e.prototype.rocktreeDataProto = null),
                (e.prototype.filmstripConfig = s.emptyArray),
                (e.prototype.showSigninButton = !1),
                (e.prototype.proMeasureUpsellUrl = null),
                (e.prototype.proPrintUpsellUrl = null),
                (e.prototype.starDataProto = null),
                (e.prototype.feedbackUrl = null),
                (e.prototype.oauth2LoginUrl = null);
            var n = {
                0: "keyhole.dbroot.PlanetModelProto",
                1: "keyhole.dbroot.StringIdOrValueProto",
                3: "keyhole.dbroot.MfeDomainFeaturesProto",
                6: "keyhole.dbroot.StringIdOrValueProto",
                9: "keyhole.dbroot.StringIdOrValueProto",
                10: "keyhole.dbroot.StringIdOrValueProto",
                12: "keyhole.dbroot.StringIdOrValueProto",
                14: "keyhole.dbroot.StringIdOrValueProto",
                15: "keyhole.dbroot.StringIdOrValueProto",
                16: "keyhole.dbroot.StringIdOrValueProto",
                17: "keyhole.dbroot.StringIdOrValueProto",
                18: "keyhole.dbroot.StringIdOrValueProto",
                19: "keyhole.dbroot.StringIdOrValueProto",
                20: "keyhole.dbroot.StringIdOrValueProto",
                21: "keyhole.dbroot.StringIdOrValueProto",
                22: "keyhole.dbroot.StringIdOrValueProto",
                23: "keyhole.dbroot.StringIdOrValueProto",
                24: "keyhole.dbroot.StringIdOrValueProto",
                25: "keyhole.dbroot.StringIdOrValueProto",
                26: "keyhole.dbroot.StringIdOrValueProto",
                27: "keyhole.dbroot.StringIdOrValueProto",
                28: "keyhole.dbroot.StringIdOrValueProto",
                29: "keyhole.dbroot.StringIdOrValueProto",
                30: "keyhole.dbroot.StringIdOrValueProto",
                33: "keyhole.dbroot.StringIdOrValueProto",
                35: "keyhole.dbroot.StringIdOrValueProto",
                36: "keyhole.dbroot.ClientOptionsProto",
                37: "keyhole.dbroot.FetchingOptionsProto",
                38: "keyhole.dbroot.TimeMachineOptionsProto",
                39: "keyhole.dbroot.CSIOptionsProto",
                40: "keyhole.dbroot.SearchTabProto",
                41: "keyhole.dbroot.CobrandProto",
                42: "keyhole.dbroot.DatabaseDescriptionProto",
                43: "keyhole.dbroot.ConfigScriptProto",
                44: "keyhole.dbroot.StringIdOrValueProto",
                45: "keyhole.dbroot.SwoopParamsProto",
                46: "keyhole.dbroot.PostingServerProto",
                47: "keyhole.dbroot.PostingServerProto",
                48: "keyhole.dbroot.PlanetaryDatabaseProto",
                49: "keyhole.dbroot.LogServerProto",
                50: "keyhole.dbroot.AutopiaOptionsProto",
                51: "keyhole.dbroot.EndSnippetProto.SearchConfigProto",
                52: "keyhole.dbroot.EndSnippetProto.SearchInfoProto",
                55: "keyhole.dbroot.StringIdOrValueProto",
                56: "keyhole.dbroot.StringIdOrValueProto",
                57: "keyhole.dbroot.StringIdOrValueProto",
                58: "keyhole.dbroot.StringIdOrValueProto",
                59: "keyhole.dbroot.StringIdOrValueProto",
                61: "keyhole.dbroot.EndSnippetProto.RockTreeDataProto",
                62: "keyhole.dbroot.EndSnippetProto.FilmstripConfigProto",
                64: "keyhole.dbroot.StringIdOrValueProto",
                65: "keyhole.dbroot.StringIdOrValueProto",
                66: "keyhole.dbroot.EndSnippetProto.StarDataProto",
                67: "keyhole.dbroot.StringIdOrValueProto",
                68: "keyhole.dbroot.StringIdOrValueProto"
            };
            function r(e) {
                if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
            }
            return (
                p.push(n),
                (e.decode = function(e, r) {
                    e instanceof l || (e = l.create(e));
                    for (
                        var t = void 0 === r ? e.len : e.pos + r,
                            o = new c.keyhole.dbroot.EndSnippetProto();
                        e.pos < t;

                    ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                            case 1:
                                o.model = n[0].decode(e, e.uint32());
                                break;
                            case 2:
                                o.authServerUrl = n[1].decode(e, e.uint32());
                                break;
                            case 3:
                                o.disableAuthentication = e.bool();
                                break;
                            case 4:
                                (o.mfeDomains && o.mfeDomains.length) || (o.mfeDomains = []),
                                    o.mfeDomains.push(n[3].decode(e, e.uint32()));
                                break;
                            case 5:
                                o.mfeLangParam = e.string();
                                break;
                            case 6:
                                o.adsUrlPatterns = e.string();
                                break;
                            case 7:
                                o.reverseGeocoderUrl = n[6].decode(e, e.uint32());
                                break;
                            case 8:
                                o.reverseGeocoderProtocolVersion = e.int32();
                                break;
                            case 9:
                                o.skyDatabaseIsAvailable = e.bool();
                                break;
                            case 10:
                                o.skyDatabaseUrl = n[9].decode(e, e.uint32());
                                break;
                            case 11:
                                o.defaultWebPageIntlUrl = n[10].decode(e, e.uint32());
                                break;
                            case 12:
                                o.numStartUpTips = e.int32();
                                break;
                            case 13:
                                o.startUpTipsUrl = n[12].decode(e, e.uint32());
                                break;
                            case 51:
                                o.numProStartUpTips = e.int32();
                                break;
                            case 52:
                                o.proStartUpTipsUrl = n[14].decode(e, e.uint32());
                                break;
                            case 64:
                                o.startupTipsIntlUrl = n[15].decode(e, e.uint32());
                                break;
                            case 14:
                                o.userGuideIntlUrl = n[16].decode(e, e.uint32());
                                break;
                            case 15:
                                o.supportCenterIntlUrl = n[17].decode(e, e.uint32());
                                break;
                            case 16:
                                o.businessListingIntlUrl = n[18].decode(e, e.uint32());
                                break;
                            case 17:
                                o.supportAnswerIntlUrl = n[19].decode(e, e.uint32());
                                break;
                            case 18:
                                o.supportTopicIntlUrl = n[20].decode(e, e.uint32());
                                break;
                            case 19:
                                o.supportRequestIntlUrl = n[21].decode(e, e.uint32());
                                break;
                            case 20:
                                o.earthIntlUrl = n[22].decode(e, e.uint32());
                                break;
                            case 21:
                                o.addContentUrl = n[23].decode(e, e.uint32());
                                break;
                            case 22:
                                o.sketchupNotInstalledUrl = n[24].decode(e, e.uint32());
                                break;
                            case 23:
                                o.sketchupErrorUrl = n[25].decode(e, e.uint32());
                                break;
                            case 24:
                                o.freeLicenseUrl = n[26].decode(e, e.uint32());
                                break;
                            case 25:
                                o.proLicenseUrl = n[27].decode(e, e.uint32());
                                break;
                            case 48:
                                o.tutorialUrl = n[28].decode(e, e.uint32());
                                break;
                            case 49:
                                o.keyboardShortcutsUrl = n[29].decode(e, e.uint32());
                                break;
                            case 50:
                                o.releaseNotesUrl = n[30].decode(e, e.uint32());
                                break;
                            case 26:
                                o.hideUserData = e.bool();
                                break;
                            case 27:
                                o.useGeLogo = e.bool();
                                break;
                            case 28:
                                o.dioramaDescriptionUrlBase = n[33].decode(e, e.uint32());
                                break;
                            case 29:
                                o.dioramaDefaultColor = e.uint32();
                                break;
                            case 53:
                                o.dioramaBlacklistUrl = n[35].decode(e, e.uint32());
                                break;
                            case 30:
                                o.clientOptions = n[36].decode(e, e.uint32());
                                break;
                            case 31:
                                o.fetchingOptions = n[37].decode(e, e.uint32());
                                break;
                            case 32:
                                o.timeMachineOptions = n[38].decode(e, e.uint32());
                                break;
                            case 33:
                                o.csiOptions = n[39].decode(e, e.uint32());
                                break;
                            case 34:
                                (o.searchTab && o.searchTab.length) || (o.searchTab = []),
                                    o.searchTab.push(n[40].decode(e, e.uint32()));
                                break;
                            case 35:
                                (o.cobrandInfo && o.cobrandInfo.length) || (o.cobrandInfo = []),
                                    o.cobrandInfo.push(n[41].decode(e, e.uint32()));
                                break;
                            case 36:
                                (o.validDatabase && o.validDatabase.length) ||
                                    (o.validDatabase = []),
                                    o.validDatabase.push(n[42].decode(e, e.uint32()));
                                break;
                            case 37:
                                (o.configScript && o.configScript.length) || (o.configScript = []),
                                    o.configScript.push(n[43].decode(e, e.uint32()));
                                break;
                            case 38:
                                o.deauthServerUrl = n[44].decode(e, e.uint32());
                                break;
                            case 39:
                                o.swoopParameters = n[45].decode(e, e.uint32());
                                break;
                            case 40:
                                o.bbsServerInfo = n[46].decode(e, e.uint32());
                                break;
                            case 41:
                                o.dataErrorServerInfo = n[47].decode(e, e.uint32());
                                break;
                            case 42:
                                (o.planetaryDatabase && o.planetaryDatabase.length) ||
                                    (o.planetaryDatabase = []),
                                    o.planetaryDatabase.push(n[48].decode(e, e.uint32()));
                                break;
                            case 43:
                                o.logServer = n[49].decode(e, e.uint32());
                                break;
                            case 44:
                                o.autopiaOptions = n[50].decode(e, e.uint32());
                                break;
                            case 54:
                                o.searchConfig = n[51].decode(e, e.uint32());
                                break;
                            case 45:
                                o.searchInfo = n[52].decode(e, e.uint32());
                                break;
                            case 46:
                                o.elevationServiceBaseUrl = e.string();
                                break;
                            case 47:
                                o.elevationProfileQueryDelay = e.int32();
                                break;
                            case 55:
                                o.proUpgradeUrl = n[55].decode(e, e.uint32());
                                break;
                            case 56:
                                o.earthCommunityUrl = n[56].decode(e, e.uint32());
                                break;
                            case 57:
                                o.googleMapsUrl = n[57].decode(e, e.uint32());
                                break;
                            case 58:
                                o.sharingUrl = n[58].decode(e, e.uint32());
                                break;
                            case 59:
                                o.privacyPolicyUrl = n[59].decode(e, e.uint32());
                                break;
                            case 60:
                                o.doGplusUserCheck = e.bool();
                                break;
                            case 61:
                                o.rocktreeDataProto = n[61].decode(e, e.uint32());
                                break;
                            case 62:
                                (o.filmstripConfig && o.filmstripConfig.length) ||
                                    (o.filmstripConfig = []),
                                    o.filmstripConfig.push(n[62].decode(e, e.uint32()));
                                break;
                            case 63:
                                o.showSigninButton = e.bool();
                                break;
                            case 65:
                                o.proMeasureUpsellUrl = n[64].decode(e, e.uint32());
                                break;
                            case 66:
                                o.proPrintUpsellUrl = n[65].decode(e, e.uint32());
                                break;
                            case 67:
                                o.starDataProto = n[66].decode(e, e.uint32());
                                break;
                            case 68:
                                o.feedbackUrl = n[67].decode(e, e.uint32());
                                break;
                            case 69:
                                o.oauth2LoginUrl = n[68].decode(e, e.uint32());
                                break;
                            default:
                                e.skipType(7 & a);
                        }
                    }
                    return o;
                }),
                (e.verify = function(e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (void 0 !== e.model && null !== e.model && (t = n[0].verify(e.model)))
                        return "model." + t;
                    if (
                        void 0 !== e.authServerUrl &&
                        null !== e.authServerUrl &&
                        (t = n[1].verify(e.authServerUrl))
                    )
                        return "authServerUrl." + t;
                    if (
                        void 0 !== e.disableAuthentication &&
                        "boolean" != typeof e.disableAuthentication
                    )
                        return "disableAuthentication: boolean expected";
                    if (void 0 !== e.mfeDomains) {
                        if (!Array.isArray(e.mfeDomains)) return "mfeDomains: array expected";
                        for (var r = 0; r < e.mfeDomains.length; ++r)
                            if ((t = n[3].verify(e.mfeDomains[r]))) return "mfeDomains." + t;
                    }
                    if (void 0 !== e.mfeLangParam && !s.isString(e.mfeLangParam))
                        return "mfeLangParam: string expected";
                    if (void 0 !== e.adsUrlPatterns && !s.isString(e.adsUrlPatterns))
                        return "adsUrlPatterns: string expected";
                    if (
                        void 0 !== e.reverseGeocoderUrl &&
                        null !== e.reverseGeocoderUrl &&
                        (t = n[6].verify(e.reverseGeocoderUrl))
                    )
                        return "reverseGeocoderUrl." + t;
                    if (
                        void 0 !== e.reverseGeocoderProtocolVersion &&
                        !s.isInteger(e.reverseGeocoderProtocolVersion)
                    )
                        return "reverseGeocoderProtocolVersion: integer expected";
                    if (
                        void 0 !== e.skyDatabaseIsAvailable &&
                        "boolean" != typeof e.skyDatabaseIsAvailable
                    )
                        return "skyDatabaseIsAvailable: boolean expected";
                    if (
                        void 0 !== e.skyDatabaseUrl &&
                        null !== e.skyDatabaseUrl &&
                        (t = n[9].verify(e.skyDatabaseUrl))
                    )
                        return "skyDatabaseUrl." + t;
                    if (
                        void 0 !== e.defaultWebPageIntlUrl &&
                        null !== e.defaultWebPageIntlUrl &&
                        (t = n[10].verify(e.defaultWebPageIntlUrl))
                    )
                        return "defaultWebPageIntlUrl." + t;
                    if (void 0 !== e.numStartUpTips && !s.isInteger(e.numStartUpTips))
                        return "numStartUpTips: integer expected";
                    if (
                        void 0 !== e.startUpTipsUrl &&
                        null !== e.startUpTipsUrl &&
                        (t = n[12].verify(e.startUpTipsUrl))
                    )
                        return "startUpTipsUrl." + t;
                    if (void 0 !== e.numProStartUpTips && !s.isInteger(e.numProStartUpTips))
                        return "numProStartUpTips: integer expected";
                    if (
                        void 0 !== e.proStartUpTipsUrl &&
                        null !== e.proStartUpTipsUrl &&
                        (t = n[14].verify(e.proStartUpTipsUrl))
                    )
                        return "proStartUpTipsUrl." + t;
                    if (
                        void 0 !== e.startupTipsIntlUrl &&
                        null !== e.startupTipsIntlUrl &&
                        (t = n[15].verify(e.startupTipsIntlUrl))
                    )
                        return "startupTipsIntlUrl." + t;
                    if (
                        void 0 !== e.userGuideIntlUrl &&
                        null !== e.userGuideIntlUrl &&
                        (t = n[16].verify(e.userGuideIntlUrl))
                    )
                        return "userGuideIntlUrl." + t;
                    if (
                        void 0 !== e.supportCenterIntlUrl &&
                        null !== e.supportCenterIntlUrl &&
                        (t = n[17].verify(e.supportCenterIntlUrl))
                    )
                        return "supportCenterIntlUrl." + t;
                    if (
                        void 0 !== e.businessListingIntlUrl &&
                        null !== e.businessListingIntlUrl &&
                        (t = n[18].verify(e.businessListingIntlUrl))
                    )
                        return "businessListingIntlUrl." + t;
                    if (
                        void 0 !== e.supportAnswerIntlUrl &&
                        null !== e.supportAnswerIntlUrl &&
                        (t = n[19].verify(e.supportAnswerIntlUrl))
                    )
                        return "supportAnswerIntlUrl." + t;
                    if (
                        void 0 !== e.supportTopicIntlUrl &&
                        null !== e.supportTopicIntlUrl &&
                        (t = n[20].verify(e.supportTopicIntlUrl))
                    )
                        return "supportTopicIntlUrl." + t;
                    if (
                        void 0 !== e.supportRequestIntlUrl &&
                        null !== e.supportRequestIntlUrl &&
                        (t = n[21].verify(e.supportRequestIntlUrl))
                    )
                        return "supportRequestIntlUrl." + t;
                    if (
                        void 0 !== e.earthIntlUrl &&
                        null !== e.earthIntlUrl &&
                        (t = n[22].verify(e.earthIntlUrl))
                    )
                        return "earthIntlUrl." + t;
                    if (
                        void 0 !== e.addContentUrl &&
                        null !== e.addContentUrl &&
                        (t = n[23].verify(e.addContentUrl))
                    )
                        return "addContentUrl." + t;
                    if (
                        void 0 !== e.sketchupNotInstalledUrl &&
                        null !== e.sketchupNotInstalledUrl &&
                        (t = n[24].verify(e.sketchupNotInstalledUrl))
                    )
                        return "sketchupNotInstalledUrl." + t;
                    if (
                        void 0 !== e.sketchupErrorUrl &&
                        null !== e.sketchupErrorUrl &&
                        (t = n[25].verify(e.sketchupErrorUrl))
                    )
                        return "sketchupErrorUrl." + t;
                    if (
                        void 0 !== e.freeLicenseUrl &&
                        null !== e.freeLicenseUrl &&
                        (t = n[26].verify(e.freeLicenseUrl))
                    )
                        return "freeLicenseUrl." + t;
                    if (
                        void 0 !== e.proLicenseUrl &&
                        null !== e.proLicenseUrl &&
                        (t = n[27].verify(e.proLicenseUrl))
                    )
                        return "proLicenseUrl." + t;
                    if (
                        void 0 !== e.tutorialUrl &&
                        null !== e.tutorialUrl &&
                        (t = n[28].verify(e.tutorialUrl))
                    )
                        return "tutorialUrl." + t;
                    if (
                        void 0 !== e.keyboardShortcutsUrl &&
                        null !== e.keyboardShortcutsUrl &&
                        (t = n[29].verify(e.keyboardShortcutsUrl))
                    )
                        return "keyboardShortcutsUrl." + t;
                    if (
                        void 0 !== e.releaseNotesUrl &&
                        null !== e.releaseNotesUrl &&
                        (t = n[30].verify(e.releaseNotesUrl))
                    )
                        return "releaseNotesUrl." + t;
                    if (void 0 !== e.hideUserData && "boolean" != typeof e.hideUserData)
                        return "hideUserData: boolean expected";
                    if (void 0 !== e.useGeLogo && "boolean" != typeof e.useGeLogo)
                        return "useGeLogo: boolean expected";
                    if (
                        void 0 !== e.dioramaDescriptionUrlBase &&
                        null !== e.dioramaDescriptionUrlBase &&
                        (t = n[33].verify(e.dioramaDescriptionUrlBase))
                    )
                        return "dioramaDescriptionUrlBase." + t;
                    if (void 0 !== e.dioramaDefaultColor && !s.isInteger(e.dioramaDefaultColor))
                        return "dioramaDefaultColor: integer expected";
                    if (
                        void 0 !== e.dioramaBlacklistUrl &&
                        null !== e.dioramaBlacklistUrl &&
                        (t = n[35].verify(e.dioramaBlacklistUrl))
                    )
                        return "dioramaBlacklistUrl." + t;
                    if (
                        void 0 !== e.clientOptions &&
                        null !== e.clientOptions &&
                        (t = n[36].verify(e.clientOptions))
                    )
                        return "clientOptions." + t;
                    if (
                        void 0 !== e.fetchingOptions &&
                        null !== e.fetchingOptions &&
                        (t = n[37].verify(e.fetchingOptions))
                    )
                        return "fetchingOptions." + t;
                    if (
                        void 0 !== e.timeMachineOptions &&
                        null !== e.timeMachineOptions &&
                        (t = n[38].verify(e.timeMachineOptions))
                    )
                        return "timeMachineOptions." + t;
                    if (
                        void 0 !== e.csiOptions &&
                        null !== e.csiOptions &&
                        (t = n[39].verify(e.csiOptions))
                    )
                        return "csiOptions." + t;
                    if (void 0 !== e.searchTab) {
                        if (!Array.isArray(e.searchTab)) return "searchTab: array expected";
                        for (r = 0; r < e.searchTab.length; ++r)
                            if ((t = n[40].verify(e.searchTab[r]))) return "searchTab." + t;
                    }
                    if (void 0 !== e.cobrandInfo) {
                        if (!Array.isArray(e.cobrandInfo)) return "cobrandInfo: array expected";
                        for (r = 0; r < e.cobrandInfo.length; ++r)
                            if ((t = n[41].verify(e.cobrandInfo[r]))) return "cobrandInfo." + t;
                    }
                    if (void 0 !== e.validDatabase) {
                        if (!Array.isArray(e.validDatabase)) return "validDatabase: array expected";
                        for (r = 0; r < e.validDatabase.length; ++r)
                            if ((t = n[42].verify(e.validDatabase[r]))) return "validDatabase." + t;
                    }
                    if (void 0 !== e.configScript) {
                        if (!Array.isArray(e.configScript)) return "configScript: array expected";
                        for (r = 0; r < e.configScript.length; ++r)
                            if ((t = n[43].verify(e.configScript[r]))) return "configScript." + t;
                    }
                    if (
                        void 0 !== e.deauthServerUrl &&
                        null !== e.deauthServerUrl &&
                        (t = n[44].verify(e.deauthServerUrl))
                    )
                        return "deauthServerUrl." + t;
                    if (
                        void 0 !== e.swoopParameters &&
                        null !== e.swoopParameters &&
                        (t = n[45].verify(e.swoopParameters))
                    )
                        return "swoopParameters." + t;
                    if (
                        void 0 !== e.bbsServerInfo &&
                        null !== e.bbsServerInfo &&
                        (t = n[46].verify(e.bbsServerInfo))
                    )
                        return "bbsServerInfo." + t;
                    if (
                        void 0 !== e.dataErrorServerInfo &&
                        null !== e.dataErrorServerInfo &&
                        (t = n[47].verify(e.dataErrorServerInfo))
                    )
                        return "dataErrorServerInfo." + t;
                    if (void 0 !== e.planetaryDatabase) {
                        if (!Array.isArray(e.planetaryDatabase))
                            return "planetaryDatabase: array expected";
                        for (r = 0; r < e.planetaryDatabase.length; ++r)
                            if ((t = n[48].verify(e.planetaryDatabase[r])))
                                return "planetaryDatabase." + t;
                    }
                    if (
                        void 0 !== e.logServer &&
                        null !== e.logServer &&
                        (t = n[49].verify(e.logServer))
                    )
                        return "logServer." + t;
                    if (
                        void 0 !== e.autopiaOptions &&
                        null !== e.autopiaOptions &&
                        (t = n[50].verify(e.autopiaOptions))
                    )
                        return "autopiaOptions." + t;
                    if (
                        void 0 !== e.searchConfig &&
                        null !== e.searchConfig &&
                        (t = n[51].verify(e.searchConfig))
                    )
                        return "searchConfig." + t;
                    if (
                        void 0 !== e.searchInfo &&
                        null !== e.searchInfo &&
                        (t = n[52].verify(e.searchInfo))
                    )
                        return "searchInfo." + t;
                    if (
                        void 0 !== e.elevationServiceBaseUrl &&
                        !s.isString(e.elevationServiceBaseUrl)
                    )
                        return "elevationServiceBaseUrl: string expected";
                    if (
                        void 0 !== e.elevationProfileQueryDelay &&
                        !s.isInteger(e.elevationProfileQueryDelay)
                    )
                        return "elevationProfileQueryDelay: integer expected";
                    if (
                        void 0 !== e.proUpgradeUrl &&
                        null !== e.proUpgradeUrl &&
                        (t = n[55].verify(e.proUpgradeUrl))
                    )
                        return "proUpgradeUrl." + t;
                    if (
                        void 0 !== e.earthCommunityUrl &&
                        null !== e.earthCommunityUrl &&
                        (t = n[56].verify(e.earthCommunityUrl))
                    )
                        return "earthCommunityUrl." + t;
                    if (
                        void 0 !== e.googleMapsUrl &&
                        null !== e.googleMapsUrl &&
                        (t = n[57].verify(e.googleMapsUrl))
                    )
                        return "googleMapsUrl." + t;
                    if (
                        void 0 !== e.sharingUrl &&
                        null !== e.sharingUrl &&
                        (t = n[58].verify(e.sharingUrl))
                    )
                        return "sharingUrl." + t;
                    if (
                        void 0 !== e.privacyPolicyUrl &&
                        null !== e.privacyPolicyUrl &&
                        (t = n[59].verify(e.privacyPolicyUrl))
                    )
                        return "privacyPolicyUrl." + t;
                    if (void 0 !== e.doGplusUserCheck && "boolean" != typeof e.doGplusUserCheck)
                        return "doGplusUserCheck: boolean expected";
                    if (
                        void 0 !== e.rocktreeDataProto &&
                        null !== e.rocktreeDataProto &&
                        (t = n[61].verify(e.rocktreeDataProto))
                    )
                        return "rocktreeDataProto." + t;
                    if (void 0 !== e.filmstripConfig) {
                        if (!Array.isArray(e.filmstripConfig))
                            return "filmstripConfig: array expected";
                        for (r = 0; r < e.filmstripConfig.length; ++r) {
                            var t;
                            if ((t = n[62].verify(e.filmstripConfig[r])))
                                return "filmstripConfig." + t;
                        }
                    }
                    return void 0 !== e.showSigninButton && "boolean" != typeof e.showSigninButton
                        ? "showSigninButton: boolean expected"
                        : void 0 !== e.proMeasureUpsellUrl &&
                          null !== e.proMeasureUpsellUrl &&
                          (t = n[64].verify(e.proMeasureUpsellUrl))
                        ? "proMeasureUpsellUrl." + t
                        : void 0 !== e.proPrintUpsellUrl &&
                          null !== e.proPrintUpsellUrl &&
                          (t = n[65].verify(e.proPrintUpsellUrl))
                        ? "proPrintUpsellUrl." + t
                        : void 0 !== e.starDataProto &&
                          null !== e.starDataProto &&
                          (t = n[66].verify(e.starDataProto))
                        ? "starDataProto." + t
                        : void 0 !== e.feedbackUrl &&
                          null !== e.feedbackUrl &&
                          (t = n[67].verify(e.feedbackUrl))
                        ? "feedbackUrl." + t
                        : void 0 !== e.oauth2LoginUrl &&
                          null !== e.oauth2LoginUrl &&
                          (t = n[68].verify(e.oauth2LoginUrl))
                        ? "oauth2LoginUrl." + t
                        : null;
                }),
                (e.from = e.fromObject = function(e) {
                    if (e instanceof c.keyhole.dbroot.EndSnippetProto) return e;
                    var r = new c.keyhole.dbroot.EndSnippetProto();
                    if (void 0 !== e.model && null !== e.model) {
                        if ("object" != typeof e.model)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.model: object expected"
                            );
                        r.model = n[0].fromObject(e.model);
                    }
                    if (void 0 !== e.authServerUrl && null !== e.authServerUrl) {
                        if ("object" != typeof e.authServerUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.authServerUrl: object expected"
                            );
                        r.authServerUrl = n[1].fromObject(e.authServerUrl);
                    }
                    if (
                        (void 0 !== e.disableAuthentication &&
                            null !== e.disableAuthentication &&
                            (r.disableAuthentication = Boolean(e.disableAuthentication)),
                        e.mfeDomains)
                    ) {
                        if (!Array.isArray(e.mfeDomains))
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.mfeDomains: array expected"
                            );
                        r.mfeDomains = [];
                        for (var t = 0; t < e.mfeDomains.length; ++t) {
                            if ("object" != typeof e.mfeDomains[t])
                                throw TypeError(
                                    ".keyhole.dbroot.EndSnippetProto.mfeDomains: object expected"
                                );
                            r.mfeDomains[t] = n[3].fromObject(e.mfeDomains[t]);
                        }
                    }
                    if (
                        (void 0 !== e.mfeLangParam &&
                            null !== e.mfeLangParam &&
                            (r.mfeLangParam = String(e.mfeLangParam)),
                        void 0 !== e.adsUrlPatterns &&
                            null !== e.adsUrlPatterns &&
                            (r.adsUrlPatterns = String(e.adsUrlPatterns)),
                        void 0 !== e.reverseGeocoderUrl && null !== e.reverseGeocoderUrl)
                    ) {
                        if ("object" != typeof e.reverseGeocoderUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.reverseGeocoderUrl: object expected"
                            );
                        r.reverseGeocoderUrl = n[6].fromObject(e.reverseGeocoderUrl);
                    }
                    if (
                        (void 0 !== e.reverseGeocoderProtocolVersion &&
                            null !== e.reverseGeocoderProtocolVersion &&
                            (r.reverseGeocoderProtocolVersion =
                                0 | e.reverseGeocoderProtocolVersion),
                        void 0 !== e.skyDatabaseIsAvailable &&
                            null !== e.skyDatabaseIsAvailable &&
                            (r.skyDatabaseIsAvailable = Boolean(e.skyDatabaseIsAvailable)),
                        void 0 !== e.skyDatabaseUrl && null !== e.skyDatabaseUrl)
                    ) {
                        if ("object" != typeof e.skyDatabaseUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.skyDatabaseUrl: object expected"
                            );
                        r.skyDatabaseUrl = n[9].fromObject(e.skyDatabaseUrl);
                    }
                    if (void 0 !== e.defaultWebPageIntlUrl && null !== e.defaultWebPageIntlUrl) {
                        if ("object" != typeof e.defaultWebPageIntlUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.defaultWebPageIntlUrl: object expected"
                            );
                        r.defaultWebPageIntlUrl = n[10].fromObject(e.defaultWebPageIntlUrl);
                    }
                    if (
                        (void 0 !== e.numStartUpTips &&
                            null !== e.numStartUpTips &&
                            (r.numStartUpTips = 0 | e.numStartUpTips),
                        void 0 !== e.startUpTipsUrl && null !== e.startUpTipsUrl)
                    ) {
                        if ("object" != typeof e.startUpTipsUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.startUpTipsUrl: object expected"
                            );
                        r.startUpTipsUrl = n[12].fromObject(e.startUpTipsUrl);
                    }
                    if (
                        (void 0 !== e.numProStartUpTips &&
                            null !== e.numProStartUpTips &&
                            (r.numProStartUpTips = 0 | e.numProStartUpTips),
                        void 0 !== e.proStartUpTipsUrl && null !== e.proStartUpTipsUrl)
                    ) {
                        if ("object" != typeof e.proStartUpTipsUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.proStartUpTipsUrl: object expected"
                            );
                        r.proStartUpTipsUrl = n[14].fromObject(e.proStartUpTipsUrl);
                    }
                    if (void 0 !== e.startupTipsIntlUrl && null !== e.startupTipsIntlUrl) {
                        if ("object" != typeof e.startupTipsIntlUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.startupTipsIntlUrl: object expected"
                            );
                        r.startupTipsIntlUrl = n[15].fromObject(e.startupTipsIntlUrl);
                    }
                    if (void 0 !== e.userGuideIntlUrl && null !== e.userGuideIntlUrl) {
                        if ("object" != typeof e.userGuideIntlUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.userGuideIntlUrl: object expected"
                            );
                        r.userGuideIntlUrl = n[16].fromObject(e.userGuideIntlUrl);
                    }
                    if (void 0 !== e.supportCenterIntlUrl && null !== e.supportCenterIntlUrl) {
                        if ("object" != typeof e.supportCenterIntlUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.supportCenterIntlUrl: object expected"
                            );
                        r.supportCenterIntlUrl = n[17].fromObject(e.supportCenterIntlUrl);
                    }
                    if (void 0 !== e.businessListingIntlUrl && null !== e.businessListingIntlUrl) {
                        if ("object" != typeof e.businessListingIntlUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.businessListingIntlUrl: object expected"
                            );
                        r.businessListingIntlUrl = n[18].fromObject(e.businessListingIntlUrl);
                    }
                    if (void 0 !== e.supportAnswerIntlUrl && null !== e.supportAnswerIntlUrl) {
                        if ("object" != typeof e.supportAnswerIntlUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.supportAnswerIntlUrl: object expected"
                            );
                        r.supportAnswerIntlUrl = n[19].fromObject(e.supportAnswerIntlUrl);
                    }
                    if (void 0 !== e.supportTopicIntlUrl && null !== e.supportTopicIntlUrl) {
                        if ("object" != typeof e.supportTopicIntlUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.supportTopicIntlUrl: object expected"
                            );
                        r.supportTopicIntlUrl = n[20].fromObject(e.supportTopicIntlUrl);
                    }
                    if (void 0 !== e.supportRequestIntlUrl && null !== e.supportRequestIntlUrl) {
                        if ("object" != typeof e.supportRequestIntlUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.supportRequestIntlUrl: object expected"
                            );
                        r.supportRequestIntlUrl = n[21].fromObject(e.supportRequestIntlUrl);
                    }
                    if (void 0 !== e.earthIntlUrl && null !== e.earthIntlUrl) {
                        if ("object" != typeof e.earthIntlUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.earthIntlUrl: object expected"
                            );
                        r.earthIntlUrl = n[22].fromObject(e.earthIntlUrl);
                    }
                    if (void 0 !== e.addContentUrl && null !== e.addContentUrl) {
                        if ("object" != typeof e.addContentUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.addContentUrl: object expected"
                            );
                        r.addContentUrl = n[23].fromObject(e.addContentUrl);
                    }
                    if (
                        void 0 !== e.sketchupNotInstalledUrl &&
                        null !== e.sketchupNotInstalledUrl
                    ) {
                        if ("object" != typeof e.sketchupNotInstalledUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.sketchupNotInstalledUrl: object expected"
                            );
                        r.sketchupNotInstalledUrl = n[24].fromObject(e.sketchupNotInstalledUrl);
                    }
                    if (void 0 !== e.sketchupErrorUrl && null !== e.sketchupErrorUrl) {
                        if ("object" != typeof e.sketchupErrorUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.sketchupErrorUrl: object expected"
                            );
                        r.sketchupErrorUrl = n[25].fromObject(e.sketchupErrorUrl);
                    }
                    if (void 0 !== e.freeLicenseUrl && null !== e.freeLicenseUrl) {
                        if ("object" != typeof e.freeLicenseUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.freeLicenseUrl: object expected"
                            );
                        r.freeLicenseUrl = n[26].fromObject(e.freeLicenseUrl);
                    }
                    if (void 0 !== e.proLicenseUrl && null !== e.proLicenseUrl) {
                        if ("object" != typeof e.proLicenseUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.proLicenseUrl: object expected"
                            );
                        r.proLicenseUrl = n[27].fromObject(e.proLicenseUrl);
                    }
                    if (void 0 !== e.tutorialUrl && null !== e.tutorialUrl) {
                        if ("object" != typeof e.tutorialUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.tutorialUrl: object expected"
                            );
                        r.tutorialUrl = n[28].fromObject(e.tutorialUrl);
                    }
                    if (void 0 !== e.keyboardShortcutsUrl && null !== e.keyboardShortcutsUrl) {
                        if ("object" != typeof e.keyboardShortcutsUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.keyboardShortcutsUrl: object expected"
                            );
                        r.keyboardShortcutsUrl = n[29].fromObject(e.keyboardShortcutsUrl);
                    }
                    if (void 0 !== e.releaseNotesUrl && null !== e.releaseNotesUrl) {
                        if ("object" != typeof e.releaseNotesUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.releaseNotesUrl: object expected"
                            );
                        r.releaseNotesUrl = n[30].fromObject(e.releaseNotesUrl);
                    }
                    if (
                        (void 0 !== e.hideUserData &&
                            null !== e.hideUserData &&
                            (r.hideUserData = Boolean(e.hideUserData)),
                        void 0 !== e.useGeLogo &&
                            null !== e.useGeLogo &&
                            (r.useGeLogo = Boolean(e.useGeLogo)),
                        void 0 !== e.dioramaDescriptionUrlBase &&
                            null !== e.dioramaDescriptionUrlBase)
                    ) {
                        if ("object" != typeof e.dioramaDescriptionUrlBase)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.dioramaDescriptionUrlBase: object expected"
                            );
                        r.dioramaDescriptionUrlBase = n[33].fromObject(e.dioramaDescriptionUrlBase);
                    }
                    if (
                        (void 0 !== e.dioramaDefaultColor &&
                            null !== e.dioramaDefaultColor &&
                            (r.dioramaDefaultColor = e.dioramaDefaultColor >>> 0),
                        void 0 !== e.dioramaBlacklistUrl && null !== e.dioramaBlacklistUrl)
                    ) {
                        if ("object" != typeof e.dioramaBlacklistUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.dioramaBlacklistUrl: object expected"
                            );
                        r.dioramaBlacklistUrl = n[35].fromObject(e.dioramaBlacklistUrl);
                    }
                    if (void 0 !== e.clientOptions && null !== e.clientOptions) {
                        if ("object" != typeof e.clientOptions)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.clientOptions: object expected"
                            );
                        r.clientOptions = n[36].fromObject(e.clientOptions);
                    }
                    if (void 0 !== e.fetchingOptions && null !== e.fetchingOptions) {
                        if ("object" != typeof e.fetchingOptions)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.fetchingOptions: object expected"
                            );
                        r.fetchingOptions = n[37].fromObject(e.fetchingOptions);
                    }
                    if (void 0 !== e.timeMachineOptions && null !== e.timeMachineOptions) {
                        if ("object" != typeof e.timeMachineOptions)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.timeMachineOptions: object expected"
                            );
                        r.timeMachineOptions = n[38].fromObject(e.timeMachineOptions);
                    }
                    if (void 0 !== e.csiOptions && null !== e.csiOptions) {
                        if ("object" != typeof e.csiOptions)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.csiOptions: object expected"
                            );
                        r.csiOptions = n[39].fromObject(e.csiOptions);
                    }
                    if (e.searchTab) {
                        if (!Array.isArray(e.searchTab))
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.searchTab: array expected"
                            );
                        for (r.searchTab = [], t = 0; t < e.searchTab.length; ++t) {
                            if ("object" != typeof e.searchTab[t])
                                throw TypeError(
                                    ".keyhole.dbroot.EndSnippetProto.searchTab: object expected"
                                );
                            r.searchTab[t] = n[40].fromObject(e.searchTab[t]);
                        }
                    }
                    if (e.cobrandInfo) {
                        if (!Array.isArray(e.cobrandInfo))
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.cobrandInfo: array expected"
                            );
                        for (r.cobrandInfo = [], t = 0; t < e.cobrandInfo.length; ++t) {
                            if ("object" != typeof e.cobrandInfo[t])
                                throw TypeError(
                                    ".keyhole.dbroot.EndSnippetProto.cobrandInfo: object expected"
                                );
                            r.cobrandInfo[t] = n[41].fromObject(e.cobrandInfo[t]);
                        }
                    }
                    if (e.validDatabase) {
                        if (!Array.isArray(e.validDatabase))
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.validDatabase: array expected"
                            );
                        for (r.validDatabase = [], t = 0; t < e.validDatabase.length; ++t) {
                            if ("object" != typeof e.validDatabase[t])
                                throw TypeError(
                                    ".keyhole.dbroot.EndSnippetProto.validDatabase: object expected"
                                );
                            r.validDatabase[t] = n[42].fromObject(e.validDatabase[t]);
                        }
                    }
                    if (e.configScript) {
                        if (!Array.isArray(e.configScript))
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.configScript: array expected"
                            );
                        for (r.configScript = [], t = 0; t < e.configScript.length; ++t) {
                            if ("object" != typeof e.configScript[t])
                                throw TypeError(
                                    ".keyhole.dbroot.EndSnippetProto.configScript: object expected"
                                );
                            r.configScript[t] = n[43].fromObject(e.configScript[t]);
                        }
                    }
                    if (void 0 !== e.deauthServerUrl && null !== e.deauthServerUrl) {
                        if ("object" != typeof e.deauthServerUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.deauthServerUrl: object expected"
                            );
                        r.deauthServerUrl = n[44].fromObject(e.deauthServerUrl);
                    }
                    if (void 0 !== e.swoopParameters && null !== e.swoopParameters) {
                        if ("object" != typeof e.swoopParameters)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.swoopParameters: object expected"
                            );
                        r.swoopParameters = n[45].fromObject(e.swoopParameters);
                    }
                    if (void 0 !== e.bbsServerInfo && null !== e.bbsServerInfo) {
                        if ("object" != typeof e.bbsServerInfo)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.bbsServerInfo: object expected"
                            );
                        r.bbsServerInfo = n[46].fromObject(e.bbsServerInfo);
                    }
                    if (void 0 !== e.dataErrorServerInfo && null !== e.dataErrorServerInfo) {
                        if ("object" != typeof e.dataErrorServerInfo)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.dataErrorServerInfo: object expected"
                            );
                        r.dataErrorServerInfo = n[47].fromObject(e.dataErrorServerInfo);
                    }
                    if (e.planetaryDatabase) {
                        if (!Array.isArray(e.planetaryDatabase))
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.planetaryDatabase: array expected"
                            );
                        for (r.planetaryDatabase = [], t = 0; t < e.planetaryDatabase.length; ++t) {
                            if ("object" != typeof e.planetaryDatabase[t])
                                throw TypeError(
                                    ".keyhole.dbroot.EndSnippetProto.planetaryDatabase: object expected"
                                );
                            r.planetaryDatabase[t] = n[48].fromObject(e.planetaryDatabase[t]);
                        }
                    }
                    if (void 0 !== e.logServer && null !== e.logServer) {
                        if ("object" != typeof e.logServer)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.logServer: object expected"
                            );
                        r.logServer = n[49].fromObject(e.logServer);
                    }
                    if (void 0 !== e.autopiaOptions && null !== e.autopiaOptions) {
                        if ("object" != typeof e.autopiaOptions)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.autopiaOptions: object expected"
                            );
                        r.autopiaOptions = n[50].fromObject(e.autopiaOptions);
                    }
                    if (void 0 !== e.searchConfig && null !== e.searchConfig) {
                        if ("object" != typeof e.searchConfig)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.searchConfig: object expected"
                            );
                        r.searchConfig = n[51].fromObject(e.searchConfig);
                    }
                    if (void 0 !== e.searchInfo && null !== e.searchInfo) {
                        if ("object" != typeof e.searchInfo)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.searchInfo: object expected"
                            );
                        r.searchInfo = n[52].fromObject(e.searchInfo);
                    }
                    if (
                        (void 0 !== e.elevationServiceBaseUrl &&
                            null !== e.elevationServiceBaseUrl &&
                            (r.elevationServiceBaseUrl = String(e.elevationServiceBaseUrl)),
                        void 0 !== e.elevationProfileQueryDelay &&
                            null !== e.elevationProfileQueryDelay &&
                            (r.elevationProfileQueryDelay = 0 | e.elevationProfileQueryDelay),
                        void 0 !== e.proUpgradeUrl && null !== e.proUpgradeUrl)
                    ) {
                        if ("object" != typeof e.proUpgradeUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.proUpgradeUrl: object expected"
                            );
                        r.proUpgradeUrl = n[55].fromObject(e.proUpgradeUrl);
                    }
                    if (void 0 !== e.earthCommunityUrl && null !== e.earthCommunityUrl) {
                        if ("object" != typeof e.earthCommunityUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.earthCommunityUrl: object expected"
                            );
                        r.earthCommunityUrl = n[56].fromObject(e.earthCommunityUrl);
                    }
                    if (void 0 !== e.googleMapsUrl && null !== e.googleMapsUrl) {
                        if ("object" != typeof e.googleMapsUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.googleMapsUrl: object expected"
                            );
                        r.googleMapsUrl = n[57].fromObject(e.googleMapsUrl);
                    }
                    if (void 0 !== e.sharingUrl && null !== e.sharingUrl) {
                        if ("object" != typeof e.sharingUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.sharingUrl: object expected"
                            );
                        r.sharingUrl = n[58].fromObject(e.sharingUrl);
                    }
                    if (void 0 !== e.privacyPolicyUrl && null !== e.privacyPolicyUrl) {
                        if ("object" != typeof e.privacyPolicyUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.privacyPolicyUrl: object expected"
                            );
                        r.privacyPolicyUrl = n[59].fromObject(e.privacyPolicyUrl);
                    }
                    if (
                        (void 0 !== e.doGplusUserCheck &&
                            null !== e.doGplusUserCheck &&
                            (r.doGplusUserCheck = Boolean(e.doGplusUserCheck)),
                        void 0 !== e.rocktreeDataProto && null !== e.rocktreeDataProto)
                    ) {
                        if ("object" != typeof e.rocktreeDataProto)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.rocktreeDataProto: object expected"
                            );
                        r.rocktreeDataProto = n[61].fromObject(e.rocktreeDataProto);
                    }
                    if (e.filmstripConfig) {
                        if (!Array.isArray(e.filmstripConfig))
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.filmstripConfig: array expected"
                            );
                        for (r.filmstripConfig = [], t = 0; t < e.filmstripConfig.length; ++t) {
                            if ("object" != typeof e.filmstripConfig[t])
                                throw TypeError(
                                    ".keyhole.dbroot.EndSnippetProto.filmstripConfig: object expected"
                                );
                            r.filmstripConfig[t] = n[62].fromObject(e.filmstripConfig[t]);
                        }
                    }
                    if (
                        (void 0 !== e.showSigninButton &&
                            null !== e.showSigninButton &&
                            (r.showSigninButton = Boolean(e.showSigninButton)),
                        void 0 !== e.proMeasureUpsellUrl && null !== e.proMeasureUpsellUrl)
                    ) {
                        if ("object" != typeof e.proMeasureUpsellUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.proMeasureUpsellUrl: object expected"
                            );
                        r.proMeasureUpsellUrl = n[64].fromObject(e.proMeasureUpsellUrl);
                    }
                    if (void 0 !== e.proPrintUpsellUrl && null !== e.proPrintUpsellUrl) {
                        if ("object" != typeof e.proPrintUpsellUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.proPrintUpsellUrl: object expected"
                            );
                        r.proPrintUpsellUrl = n[65].fromObject(e.proPrintUpsellUrl);
                    }
                    if (void 0 !== e.starDataProto && null !== e.starDataProto) {
                        if ("object" != typeof e.starDataProto)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.starDataProto: object expected"
                            );
                        r.starDataProto = n[66].fromObject(e.starDataProto);
                    }
                    if (void 0 !== e.feedbackUrl && null !== e.feedbackUrl) {
                        if ("object" != typeof e.feedbackUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.feedbackUrl: object expected"
                            );
                        r.feedbackUrl = n[67].fromObject(e.feedbackUrl);
                    }
                    if (void 0 !== e.oauth2LoginUrl && null !== e.oauth2LoginUrl) {
                        if ("object" != typeof e.oauth2LoginUrl)
                            throw TypeError(
                                ".keyhole.dbroot.EndSnippetProto.oauth2LoginUrl: object expected"
                            );
                        r.oauth2LoginUrl = n[68].fromObject(e.oauth2LoginUrl);
                    }
                    return r;
                }),
                (e.toObject = function(e, r) {
                    r || (r = {});
                    var t = {};
                    if (
                        ((r.arrays || r.defaults) &&
                            ((t.mfeDomains = []),
                            (t.searchTab = []),
                            (t.cobrandInfo = []),
                            (t.validDatabase = []),
                            (t.configScript = []),
                            (t.planetaryDatabase = []),
                            (t.filmstripConfig = [])),
                        r.defaults &&
                            ((t.model = null),
                            (t.authServerUrl = null),
                            (t.disableAuthentication = !1),
                            (t.mfeLangParam = "hl=$5Bhl5D"),
                            (t.adsUrlPatterns = ""),
                            (t.reverseGeocoderUrl = null),
                            (t.reverseGeocoderProtocolVersion = 3),
                            (t.skyDatabaseIsAvailable = !0),
                            (t.skyDatabaseUrl = null),
                            (t.defaultWebPageIntlUrl = null),
                            (t.numStartUpTips = 17),
                            (t.startUpTipsUrl = null),
                            (t.numProStartUpTips = 0),
                            (t.proStartUpTipsUrl = null),
                            (t.startupTipsIntlUrl = null),
                            (t.userGuideIntlUrl = null),
                            (t.supportCenterIntlUrl = null),
                            (t.businessListingIntlUrl = null),
                            (t.supportAnswerIntlUrl = null),
                            (t.supportTopicIntlUrl = null),
                            (t.supportRequestIntlUrl = null),
                            (t.earthIntlUrl = null),
                            (t.addContentUrl = null),
                            (t.sketchupNotInstalledUrl = null),
                            (t.sketchupErrorUrl = null),
                            (t.freeLicenseUrl = null),
                            (t.proLicenseUrl = null),
                            (t.tutorialUrl = null),
                            (t.keyboardShortcutsUrl = null),
                            (t.releaseNotesUrl = null),
                            (t.hideUserData = !1),
                            (t.useGeLogo = !0),
                            (t.dioramaDescriptionUrlBase = null),
                            (t.dioramaDefaultColor = 4291281607),
                            (t.dioramaBlacklistUrl = null),
                            (t.clientOptions = null),
                            (t.fetchingOptions = null),
                            (t.timeMachineOptions = null),
                            (t.csiOptions = null),
                            (t.deauthServerUrl = null),
                            (t.swoopParameters = null),
                            (t.bbsServerInfo = null),
                            (t.dataErrorServerInfo = null),
                            (t.logServer = null),
                            (t.autopiaOptions = null),
                            (t.searchConfig = null),
                            (t.searchInfo = null),
                            (t.elevationServiceBaseUrl =
                                "http://maps.google.com/maps/api/elevation/"),
                            (t.elevationProfileQueryDelay = 500),
                            (t.proUpgradeUrl = null),
                            (t.earthCommunityUrl = null),
                            (t.googleMapsUrl = null),
                            (t.sharingUrl = null),
                            (t.privacyPolicyUrl = null),
                            (t.doGplusUserCheck = !1),
                            (t.rocktreeDataProto = null),
                            (t.showSigninButton = !1),
                            (t.proMeasureUpsellUrl = null),
                            (t.proPrintUpsellUrl = null),
                            (t.starDataProto = null),
                            (t.feedbackUrl = null),
                            (t.oauth2LoginUrl = null)),
                        void 0 !== e.model &&
                            null !== e.model &&
                            e.hasOwnProperty("model") &&
                            (t.model = n[0].toObject(e.model, r)),
                        void 0 !== e.authServerUrl &&
                            null !== e.authServerUrl &&
                            e.hasOwnProperty("authServerUrl") &&
                            (t.authServerUrl = n[1].toObject(e.authServerUrl, r)),
                        void 0 !== e.disableAuthentication &&
                            null !== e.disableAuthentication &&
                            e.hasOwnProperty("disableAuthentication") &&
                            (t.disableAuthentication = e.disableAuthentication),
                        void 0 !== e.mfeDomains &&
                            null !== e.mfeDomains &&
                            e.hasOwnProperty("mfeDomains"))
                    ) {
                        t.mfeDomains = [];
                        for (var o = 0; o < e.mfeDomains.length; ++o)
                            t.mfeDomains[o] = n[3].toObject(e.mfeDomains[o], r);
                    }
                    if (
                        (void 0 !== e.mfeLangParam &&
                            null !== e.mfeLangParam &&
                            e.hasOwnProperty("mfeLangParam") &&
                            (t.mfeLangParam = e.mfeLangParam),
                        void 0 !== e.adsUrlPatterns &&
                            null !== e.adsUrlPatterns &&
                            e.hasOwnProperty("adsUrlPatterns") &&
                            (t.adsUrlPatterns = e.adsUrlPatterns),
                        void 0 !== e.reverseGeocoderUrl &&
                            null !== e.reverseGeocoderUrl &&
                            e.hasOwnProperty("reverseGeocoderUrl") &&
                            (t.reverseGeocoderUrl = n[6].toObject(e.reverseGeocoderUrl, r)),
                        void 0 !== e.reverseGeocoderProtocolVersion &&
                            null !== e.reverseGeocoderProtocolVersion &&
                            e.hasOwnProperty("reverseGeocoderProtocolVersion") &&
                            (t.reverseGeocoderProtocolVersion = e.reverseGeocoderProtocolVersion),
                        void 0 !== e.skyDatabaseIsAvailable &&
                            null !== e.skyDatabaseIsAvailable &&
                            e.hasOwnProperty("skyDatabaseIsAvailable") &&
                            (t.skyDatabaseIsAvailable = e.skyDatabaseIsAvailable),
                        void 0 !== e.skyDatabaseUrl &&
                            null !== e.skyDatabaseUrl &&
                            e.hasOwnProperty("skyDatabaseUrl") &&
                            (t.skyDatabaseUrl = n[9].toObject(e.skyDatabaseUrl, r)),
                        void 0 !== e.defaultWebPageIntlUrl &&
                            null !== e.defaultWebPageIntlUrl &&
                            e.hasOwnProperty("defaultWebPageIntlUrl") &&
                            (t.defaultWebPageIntlUrl = n[10].toObject(e.defaultWebPageIntlUrl, r)),
                        void 0 !== e.numStartUpTips &&
                            null !== e.numStartUpTips &&
                            e.hasOwnProperty("numStartUpTips") &&
                            (t.numStartUpTips = e.numStartUpTips),
                        void 0 !== e.startUpTipsUrl &&
                            null !== e.startUpTipsUrl &&
                            e.hasOwnProperty("startUpTipsUrl") &&
                            (t.startUpTipsUrl = n[12].toObject(e.startUpTipsUrl, r)),
                        void 0 !== e.numProStartUpTips &&
                            null !== e.numProStartUpTips &&
                            e.hasOwnProperty("numProStartUpTips") &&
                            (t.numProStartUpTips = e.numProStartUpTips),
                        void 0 !== e.proStartUpTipsUrl &&
                            null !== e.proStartUpTipsUrl &&
                            e.hasOwnProperty("proStartUpTipsUrl") &&
                            (t.proStartUpTipsUrl = n[14].toObject(e.proStartUpTipsUrl, r)),
                        void 0 !== e.startupTipsIntlUrl &&
                            null !== e.startupTipsIntlUrl &&
                            e.hasOwnProperty("startupTipsIntlUrl") &&
                            (t.startupTipsIntlUrl = n[15].toObject(e.startupTipsIntlUrl, r)),
                        void 0 !== e.userGuideIntlUrl &&
                            null !== e.userGuideIntlUrl &&
                            e.hasOwnProperty("userGuideIntlUrl") &&
                            (t.userGuideIntlUrl = n[16].toObject(e.userGuideIntlUrl, r)),
                        void 0 !== e.supportCenterIntlUrl &&
                            null !== e.supportCenterIntlUrl &&
                            e.hasOwnProperty("supportCenterIntlUrl") &&
                            (t.supportCenterIntlUrl = n[17].toObject(e.supportCenterIntlUrl, r)),
                        void 0 !== e.businessListingIntlUrl &&
                            null !== e.businessListingIntlUrl &&
                            e.hasOwnProperty("businessListingIntlUrl") &&
                            (t.businessListingIntlUrl = n[18].toObject(
                                e.businessListingIntlUrl,
                                r
                            )),
                        void 0 !== e.supportAnswerIntlUrl &&
                            null !== e.supportAnswerIntlUrl &&
                            e.hasOwnProperty("supportAnswerIntlUrl") &&
                            (t.supportAnswerIntlUrl = n[19].toObject(e.supportAnswerIntlUrl, r)),
                        void 0 !== e.supportTopicIntlUrl &&
                            null !== e.supportTopicIntlUrl &&
                            e.hasOwnProperty("supportTopicIntlUrl") &&
                            (t.supportTopicIntlUrl = n[20].toObject(e.supportTopicIntlUrl, r)),
                        void 0 !== e.supportRequestIntlUrl &&
                            null !== e.supportRequestIntlUrl &&
                            e.hasOwnProperty("supportRequestIntlUrl") &&
                            (t.supportRequestIntlUrl = n[21].toObject(e.supportRequestIntlUrl, r)),
                        void 0 !== e.earthIntlUrl &&
                            null !== e.earthIntlUrl &&
                            e.hasOwnProperty("earthIntlUrl") &&
                            (t.earthIntlUrl = n[22].toObject(e.earthIntlUrl, r)),
                        void 0 !== e.addContentUrl &&
                            null !== e.addContentUrl &&
                            e.hasOwnProperty("addContentUrl") &&
                            (t.addContentUrl = n[23].toObject(e.addContentUrl, r)),
                        void 0 !== e.sketchupNotInstalledUrl &&
                            null !== e.sketchupNotInstalledUrl &&
                            e.hasOwnProperty("sketchupNotInstalledUrl") &&
                            (t.sketchupNotInstalledUrl = n[24].toObject(
                                e.sketchupNotInstalledUrl,
                                r
                            )),
                        void 0 !== e.sketchupErrorUrl &&
                            null !== e.sketchupErrorUrl &&
                            e.hasOwnProperty("sketchupErrorUrl") &&
                            (t.sketchupErrorUrl = n[25].toObject(e.sketchupErrorUrl, r)),
                        void 0 !== e.freeLicenseUrl &&
                            null !== e.freeLicenseUrl &&
                            e.hasOwnProperty("freeLicenseUrl") &&
                            (t.freeLicenseUrl = n[26].toObject(e.freeLicenseUrl, r)),
                        void 0 !== e.proLicenseUrl &&
                            null !== e.proLicenseUrl &&
                            e.hasOwnProperty("proLicenseUrl") &&
                            (t.proLicenseUrl = n[27].toObject(e.proLicenseUrl, r)),
                        void 0 !== e.tutorialUrl &&
                            null !== e.tutorialUrl &&
                            e.hasOwnProperty("tutorialUrl") &&
                            (t.tutorialUrl = n[28].toObject(e.tutorialUrl, r)),
                        void 0 !== e.keyboardShortcutsUrl &&
                            null !== e.keyboardShortcutsUrl &&
                            e.hasOwnProperty("keyboardShortcutsUrl") &&
                            (t.keyboardShortcutsUrl = n[29].toObject(e.keyboardShortcutsUrl, r)),
                        void 0 !== e.releaseNotesUrl &&
                            null !== e.releaseNotesUrl &&
                            e.hasOwnProperty("releaseNotesUrl") &&
                            (t.releaseNotesUrl = n[30].toObject(e.releaseNotesUrl, r)),
                        void 0 !== e.hideUserData &&
                            null !== e.hideUserData &&
                            e.hasOwnProperty("hideUserData") &&
                            (t.hideUserData = e.hideUserData),
                        void 0 !== e.useGeLogo &&
                            null !== e.useGeLogo &&
                            e.hasOwnProperty("useGeLogo") &&
                            (t.useGeLogo = e.useGeLogo),
                        void 0 !== e.dioramaDescriptionUrlBase &&
                            null !== e.dioramaDescriptionUrlBase &&
                            e.hasOwnProperty("dioramaDescriptionUrlBase") &&
                            (t.dioramaDescriptionUrlBase = n[33].toObject(
                                e.dioramaDescriptionUrlBase,
                                r
                            )),
                        void 0 !== e.dioramaDefaultColor &&
                            null !== e.dioramaDefaultColor &&
                            e.hasOwnProperty("dioramaDefaultColor") &&
                            (t.dioramaDefaultColor = e.dioramaDefaultColor),
                        void 0 !== e.dioramaBlacklistUrl &&
                            null !== e.dioramaBlacklistUrl &&
                            e.hasOwnProperty("dioramaBlacklistUrl") &&
                            (t.dioramaBlacklistUrl = n[35].toObject(e.dioramaBlacklistUrl, r)),
                        void 0 !== e.clientOptions &&
                            null !== e.clientOptions &&
                            e.hasOwnProperty("clientOptions") &&
                            (t.clientOptions = n[36].toObject(e.clientOptions, r)),
                        void 0 !== e.fetchingOptions &&
                            null !== e.fetchingOptions &&
                            e.hasOwnProperty("fetchingOptions") &&
                            (t.fetchingOptions = n[37].toObject(e.fetchingOptions, r)),
                        void 0 !== e.timeMachineOptions &&
                            null !== e.timeMachineOptions &&
                            e.hasOwnProperty("timeMachineOptions") &&
                            (t.timeMachineOptions = n[38].toObject(e.timeMachineOptions, r)),
                        void 0 !== e.csiOptions &&
                            null !== e.csiOptions &&
                            e.hasOwnProperty("csiOptions") &&
                            (t.csiOptions = n[39].toObject(e.csiOptions, r)),
                        void 0 !== e.searchTab &&
                            null !== e.searchTab &&
                            e.hasOwnProperty("searchTab"))
                    )
                        for (t.searchTab = [], o = 0; o < e.searchTab.length; ++o)
                            t.searchTab[o] = n[40].toObject(e.searchTab[o], r);
                    if (
                        void 0 !== e.cobrandInfo &&
                        null !== e.cobrandInfo &&
                        e.hasOwnProperty("cobrandInfo")
                    )
                        for (t.cobrandInfo = [], o = 0; o < e.cobrandInfo.length; ++o)
                            t.cobrandInfo[o] = n[41].toObject(e.cobrandInfo[o], r);
                    if (
                        void 0 !== e.validDatabase &&
                        null !== e.validDatabase &&
                        e.hasOwnProperty("validDatabase")
                    )
                        for (t.validDatabase = [], o = 0; o < e.validDatabase.length; ++o)
                            t.validDatabase[o] = n[42].toObject(e.validDatabase[o], r);
                    if (
                        void 0 !== e.configScript &&
                        null !== e.configScript &&
                        e.hasOwnProperty("configScript")
                    )
                        for (t.configScript = [], o = 0; o < e.configScript.length; ++o)
                            t.configScript[o] = n[43].toObject(e.configScript[o], r);
                    if (
                        (void 0 !== e.deauthServerUrl &&
                            null !== e.deauthServerUrl &&
                            e.hasOwnProperty("deauthServerUrl") &&
                            (t.deauthServerUrl = n[44].toObject(e.deauthServerUrl, r)),
                        void 0 !== e.swoopParameters &&
                            null !== e.swoopParameters &&
                            e.hasOwnProperty("swoopParameters") &&
                            (t.swoopParameters = n[45].toObject(e.swoopParameters, r)),
                        void 0 !== e.bbsServerInfo &&
                            null !== e.bbsServerInfo &&
                            e.hasOwnProperty("bbsServerInfo") &&
                            (t.bbsServerInfo = n[46].toObject(e.bbsServerInfo, r)),
                        void 0 !== e.dataErrorServerInfo &&
                            null !== e.dataErrorServerInfo &&
                            e.hasOwnProperty("dataErrorServerInfo") &&
                            (t.dataErrorServerInfo = n[47].toObject(e.dataErrorServerInfo, r)),
                        void 0 !== e.planetaryDatabase &&
                            null !== e.planetaryDatabase &&
                            e.hasOwnProperty("planetaryDatabase"))
                    )
                        for (t.planetaryDatabase = [], o = 0; o < e.planetaryDatabase.length; ++o)
                            t.planetaryDatabase[o] = n[48].toObject(e.planetaryDatabase[o], r);
                    if (
                        (void 0 !== e.logServer &&
                            null !== e.logServer &&
                            e.hasOwnProperty("logServer") &&
                            (t.logServer = n[49].toObject(e.logServer, r)),
                        void 0 !== e.autopiaOptions &&
                            null !== e.autopiaOptions &&
                            e.hasOwnProperty("autopiaOptions") &&
                            (t.autopiaOptions = n[50].toObject(e.autopiaOptions, r)),
                        void 0 !== e.searchConfig &&
                            null !== e.searchConfig &&
                            e.hasOwnProperty("searchConfig") &&
                            (t.searchConfig = n[51].toObject(e.searchConfig, r)),
                        void 0 !== e.searchInfo &&
                            null !== e.searchInfo &&
                            e.hasOwnProperty("searchInfo") &&
                            (t.searchInfo = n[52].toObject(e.searchInfo, r)),
                        void 0 !== e.elevationServiceBaseUrl &&
                            null !== e.elevationServiceBaseUrl &&
                            e.hasOwnProperty("elevationServiceBaseUrl") &&
                            (t.elevationServiceBaseUrl = e.elevationServiceBaseUrl),
                        void 0 !== e.elevationProfileQueryDelay &&
                            null !== e.elevationProfileQueryDelay &&
                            e.hasOwnProperty("elevationProfileQueryDelay") &&
                            (t.elevationProfileQueryDelay = e.elevationProfileQueryDelay),
                        void 0 !== e.proUpgradeUrl &&
                            null !== e.proUpgradeUrl &&
                            e.hasOwnProperty("proUpgradeUrl") &&
                            (t.proUpgradeUrl = n[55].toObject(e.proUpgradeUrl, r)),
                        void 0 !== e.earthCommunityUrl &&
                            null !== e.earthCommunityUrl &&
                            e.hasOwnProperty("earthCommunityUrl") &&
                            (t.earthCommunityUrl = n[56].toObject(e.earthCommunityUrl, r)),
                        void 0 !== e.googleMapsUrl &&
                            null !== e.googleMapsUrl &&
                            e.hasOwnProperty("googleMapsUrl") &&
                            (t.googleMapsUrl = n[57].toObject(e.googleMapsUrl, r)),
                        void 0 !== e.sharingUrl &&
                            null !== e.sharingUrl &&
                            e.hasOwnProperty("sharingUrl") &&
                            (t.sharingUrl = n[58].toObject(e.sharingUrl, r)),
                        void 0 !== e.privacyPolicyUrl &&
                            null !== e.privacyPolicyUrl &&
                            e.hasOwnProperty("privacyPolicyUrl") &&
                            (t.privacyPolicyUrl = n[59].toObject(e.privacyPolicyUrl, r)),
                        void 0 !== e.doGplusUserCheck &&
                            null !== e.doGplusUserCheck &&
                            e.hasOwnProperty("doGplusUserCheck") &&
                            (t.doGplusUserCheck = e.doGplusUserCheck),
                        void 0 !== e.rocktreeDataProto &&
                            null !== e.rocktreeDataProto &&
                            e.hasOwnProperty("rocktreeDataProto") &&
                            (t.rocktreeDataProto = n[61].toObject(e.rocktreeDataProto, r)),
                        void 0 !== e.filmstripConfig &&
                            null !== e.filmstripConfig &&
                            e.hasOwnProperty("filmstripConfig"))
                    )
                        for (t.filmstripConfig = [], o = 0; o < e.filmstripConfig.length; ++o)
                            t.filmstripConfig[o] = n[62].toObject(e.filmstripConfig[o], r);
                    return (
                        void 0 !== e.showSigninButton &&
                            null !== e.showSigninButton &&
                            e.hasOwnProperty("showSigninButton") &&
                            (t.showSigninButton = e.showSigninButton),
                        void 0 !== e.proMeasureUpsellUrl &&
                            null !== e.proMeasureUpsellUrl &&
                            e.hasOwnProperty("proMeasureUpsellUrl") &&
                            (t.proMeasureUpsellUrl = n[64].toObject(e.proMeasureUpsellUrl, r)),
                        void 0 !== e.proPrintUpsellUrl &&
                            null !== e.proPrintUpsellUrl &&
                            e.hasOwnProperty("proPrintUpsellUrl") &&
                            (t.proPrintUpsellUrl = n[65].toObject(e.proPrintUpsellUrl, r)),
                        void 0 !== e.starDataProto &&
                            null !== e.starDataProto &&
                            e.hasOwnProperty("starDataProto") &&
                            (t.starDataProto = n[66].toObject(e.starDataProto, r)),
                        void 0 !== e.feedbackUrl &&
                            null !== e.feedbackUrl &&
                            e.hasOwnProperty("feedbackUrl") &&
                            (t.feedbackUrl = n[67].toObject(e.feedbackUrl, r)),
                        void 0 !== e.oauth2LoginUrl &&
                            null !== e.oauth2LoginUrl &&
                            e.hasOwnProperty("oauth2LoginUrl") &&
                            (t.oauth2LoginUrl = n[68].toObject(e.oauth2LoginUrl, r)),
                        t
                    );
                }),
                (e.prototype.toObject = function(e) {
                    return this.constructor.toObject(this, e);
                }),
                (e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, i.util.toJSONOptions);
                }),
                (e.SearchConfigProto = (function() {
                    function e(e) {
                        if (e)
                            for (var r = Object.keys(e), t = 0; t < r.length; ++t)
                                this[r[t]] = e[r[t]];
                    }
                    (e.prototype.searchServer = s.emptyArray),
                        (e.prototype.oneboxService = s.emptyArray),
                        (e.prototype.kmlSearchUrl = null),
                        (e.prototype.kmlRenderUrl = null),
                        (e.prototype.searchHistoryUrl = null),
                        (e.prototype.errorPageUrl = null);
                    var n = {
                        0: "keyhole.dbroot.EndSnippetProto.SearchConfigProto.SearchServer",
                        1: "keyhole.dbroot.EndSnippetProto.SearchConfigProto.OneboxServiceProto",
                        2: "keyhole.dbroot.StringIdOrValueProto",
                        3: "keyhole.dbroot.StringIdOrValueProto",
                        4: "keyhole.dbroot.StringIdOrValueProto",
                        5: "keyhole.dbroot.StringIdOrValueProto"
                    };
                    return (
                        p.push(n),
                        (e.decode = function(e, r) {
                            e instanceof l || (e = l.create(e));
                            for (
                                var t = void 0 === r ? e.len : e.pos + r,
                                    o = new c.keyhole.dbroot.EndSnippetProto.SearchConfigProto();
                                e.pos < t;

                            ) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        (o.searchServer && o.searchServer.length) ||
                                            (o.searchServer = []),
                                            o.searchServer.push(n[0].decode(e, e.uint32()));
                                        break;
                                    case 2:
                                        (o.oneboxService && o.oneboxService.length) ||
                                            (o.oneboxService = []),
                                            o.oneboxService.push(n[1].decode(e, e.uint32()));
                                        break;
                                    case 3:
                                        o.kmlSearchUrl = n[2].decode(e, e.uint32());
                                        break;
                                    case 4:
                                        o.kmlRenderUrl = n[3].decode(e, e.uint32());
                                        break;
                                    case 6:
                                        o.searchHistoryUrl = n[4].decode(e, e.uint32());
                                        break;
                                    case 5:
                                        o.errorPageUrl = n[5].decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & a);
                                }
                            }
                            return o;
                        }),
                        (e.verify = function(e) {
                            if ("object" != typeof e || null === e) return "object expected";
                            if (void 0 !== e.searchServer) {
                                if (!Array.isArray(e.searchServer))
                                    return "searchServer: array expected";
                                for (var r = 0; r < e.searchServer.length; ++r)
                                    if ((t = n[0].verify(e.searchServer[r])))
                                        return "searchServer." + t;
                            }
                            if (void 0 !== e.oneboxService) {
                                if (!Array.isArray(e.oneboxService))
                                    return "oneboxService: array expected";
                                for (r = 0; r < e.oneboxService.length; ++r)
                                    if ((t = n[1].verify(e.oneboxService[r])))
                                        return "oneboxService." + t;
                            }
                            var t;
                            return void 0 !== e.kmlSearchUrl &&
                                null !== e.kmlSearchUrl &&
                                (t = n[2].verify(e.kmlSearchUrl))
                                ? "kmlSearchUrl." + t
                                : void 0 !== e.kmlRenderUrl &&
                                  null !== e.kmlRenderUrl &&
                                  (t = n[3].verify(e.kmlRenderUrl))
                                ? "kmlRenderUrl." + t
                                : void 0 !== e.searchHistoryUrl &&
                                  null !== e.searchHistoryUrl &&
                                  (t = n[4].verify(e.searchHistoryUrl))
                                ? "searchHistoryUrl." + t
                                : void 0 !== e.errorPageUrl &&
                                  null !== e.errorPageUrl &&
                                  (t = n[5].verify(e.errorPageUrl))
                                ? "errorPageUrl." + t
                                : null;
                        }),
                        (e.from = e.fromObject = function(e) {
                            if (e instanceof c.keyhole.dbroot.EndSnippetProto.SearchConfigProto)
                                return e;
                            var r = new c.keyhole.dbroot.EndSnippetProto.SearchConfigProto();
                            if (e.searchServer) {
                                if (!Array.isArray(e.searchServer))
                                    throw TypeError(
                                        ".keyhole.dbroot.EndSnippetProto.SearchConfigProto.searchServer: array expected"
                                    );
                                r.searchServer = [];
                                for (var t = 0; t < e.searchServer.length; ++t) {
                                    if ("object" != typeof e.searchServer[t])
                                        throw TypeError(
                                            ".keyhole.dbroot.EndSnippetProto.SearchConfigProto.searchServer: object expected"
                                        );
                                    r.searchServer[t] = n[0].fromObject(e.searchServer[t]);
                                }
                            }
                            if (e.oneboxService) {
                                if (!Array.isArray(e.oneboxService))
                                    throw TypeError(
                                        ".keyhole.dbroot.EndSnippetProto.SearchConfigProto.oneboxService: array expected"
                                    );
                                for (r.oneboxService = [], t = 0; t < e.oneboxService.length; ++t) {
                                    if ("object" != typeof e.oneboxService[t])
                                        throw TypeError(
                                            ".keyhole.dbroot.EndSnippetProto.SearchConfigProto.oneboxService: object expected"
                                        );
                                    r.oneboxService[t] = n[1].fromObject(e.oneboxService[t]);
                                }
                            }
                            if (void 0 !== e.kmlSearchUrl && null !== e.kmlSearchUrl) {
                                if ("object" != typeof e.kmlSearchUrl)
                                    throw TypeError(
                                        ".keyhole.dbroot.EndSnippetProto.SearchConfigProto.kmlSearchUrl: object expected"
                                    );
                                r.kmlSearchUrl = n[2].fromObject(e.kmlSearchUrl);
                            }
                            if (void 0 !== e.kmlRenderUrl && null !== e.kmlRenderUrl) {
                                if ("object" != typeof e.kmlRenderUrl)
                                    throw TypeError(
                                        ".keyhole.dbroot.EndSnippetProto.SearchConfigProto.kmlRenderUrl: object expected"
                                    );
                                r.kmlRenderUrl = n[3].fromObject(e.kmlRenderUrl);
                            }
                            if (void 0 !== e.searchHistoryUrl && null !== e.searchHistoryUrl) {
                                if ("object" != typeof e.searchHistoryUrl)
                                    throw TypeError(
                                        ".keyhole.dbroot.EndSnippetProto.SearchConfigProto.searchHistoryUrl: object expected"
                                    );
                                r.searchHistoryUrl = n[4].fromObject(e.searchHistoryUrl);
                            }
                            if (void 0 !== e.errorPageUrl && null !== e.errorPageUrl) {
                                if ("object" != typeof e.errorPageUrl)
                                    throw TypeError(
                                        ".keyhole.dbroot.EndSnippetProto.SearchConfigProto.errorPageUrl: object expected"
                                    );
                                r.errorPageUrl = n[5].fromObject(e.errorPageUrl);
                            }
                            return r;
                        }),
                        (e.toObject = function(e, r) {
                            r || (r = {});
                            var t = {};
                            if (
                                ((r.arrays || r.defaults) &&
                                    ((t.searchServer = []), (t.oneboxService = [])),
                                r.defaults &&
                                    ((t.kmlSearchUrl = null),
                                    (t.kmlRenderUrl = null),
                                    (t.searchHistoryUrl = null),
                                    (t.errorPageUrl = null)),
                                void 0 !== e.searchServer &&
                                    null !== e.searchServer &&
                                    e.hasOwnProperty("searchServer"))
                            ) {
                                t.searchServer = [];
                                for (var o = 0; o < e.searchServer.length; ++o)
                                    t.searchServer[o] = n[0].toObject(e.searchServer[o], r);
                            }
                            if (
                                void 0 !== e.oneboxService &&
                                null !== e.oneboxService &&
                                e.hasOwnProperty("oneboxService")
                            )
                                for (t.oneboxService = [], o = 0; o < e.oneboxService.length; ++o)
                                    t.oneboxService[o] = n[1].toObject(e.oneboxService[o], r);
                            return (
                                void 0 !== e.kmlSearchUrl &&
                                    null !== e.kmlSearchUrl &&
                                    e.hasOwnProperty("kmlSearchUrl") &&
                                    (t.kmlSearchUrl = n[2].toObject(e.kmlSearchUrl, r)),
                                void 0 !== e.kmlRenderUrl &&
                                    null !== e.kmlRenderUrl &&
                                    e.hasOwnProperty("kmlRenderUrl") &&
                                    (t.kmlRenderUrl = n[3].toObject(e.kmlRenderUrl, r)),
                                void 0 !== e.searchHistoryUrl &&
                                    null !== e.searchHistoryUrl &&
                                    e.hasOwnProperty("searchHistoryUrl") &&
                                    (t.searchHistoryUrl = n[4].toObject(e.searchHistoryUrl, r)),
                                void 0 !== e.errorPageUrl &&
                                    null !== e.errorPageUrl &&
                                    e.hasOwnProperty("errorPageUrl") &&
                                    (t.errorPageUrl = n[5].toObject(e.errorPageUrl, r)),
                                t
                            );
                        }),
                        (e.prototype.toObject = function(e) {
                            return this.constructor.toObject(this, e);
                        }),
                        (e.prototype.toJSON = function() {
                            return this.constructor.toObject(this, i.util.toJSONOptions);
                        }),
                        (e.SearchServer = (function() {
                            function e(e) {
                                if (e)
                                    for (var r = Object.keys(e), t = 0; t < r.length; ++t)
                                        this[r[t]] = e[r[t]];
                            }
                            (e.prototype.name = null),
                                (e.prototype.url = null),
                                (e.prototype.type = 0),
                                (e.prototype.htmlTransformUrl = null),
                                (e.prototype.kmlTransformUrl = null),
                                (e.prototype.supplementalUi = null),
                                (e.prototype.suggestion = s.emptyArray),
                                (e.prototype.searchlet = s.emptyArray),
                                (e.prototype.requirements = null),
                                (e.prototype.suggestServer = null);
                            var r,
                                n = {
                                    0: "keyhole.dbroot.StringIdOrValueProto",
                                    1: "keyhole.dbroot.StringIdOrValueProto",
                                    2: "keyhole.dbroot.EndSnippetProto.SearchConfigProto.SearchServer.ResultType",
                                    3: "keyhole.dbroot.StringIdOrValueProto",
                                    4: "keyhole.dbroot.StringIdOrValueProto",
                                    5: "keyhole.dbroot.EndSnippetProto.SearchConfigProto.SearchServer.SupplementalUi",
                                    6: "keyhole.dbroot.StringIdOrValueProto",
                                    7: "keyhole.dbroot.EndSnippetProto.SearchConfigProto.SearchServer.SearchletProto",
                                    8: "keyhole.dbroot.RequirementProto",
                                    9: "keyhole.dbroot.StringIdOrValueProto"
                                };
                            return (
                                p.push(n),
                                (e.decode = function(e, r) {
                                    e instanceof l || (e = l.create(e));
                                    for (
                                        var t = void 0 === r ? e.len : e.pos + r,
                                            o = new c.keyhole.dbroot.EndSnippetProto.SearchConfigProto.SearchServer();
                                        e.pos < t;

                                    ) {
                                        var a = e.uint32();
                                        switch (a >>> 3) {
                                            case 1:
                                                o.name = n[0].decode(e, e.uint32());
                                                break;
                                            case 2:
                                                o.url = n[1].decode(e, e.uint32());
                                                break;
                                            case 3:
                                                o.type = e.uint32();
                                                break;
                                            case 4:
                                                o.htmlTransformUrl = n[3].decode(e, e.uint32());
                                                break;
                                            case 5:
                                                o.kmlTransformUrl = n[4].decode(e, e.uint32());
                                                break;
                                            case 6:
                                                o.supplementalUi = n[5].decode(e, e.uint32());
                                                break;
                                            case 9:
                                                (o.suggestion && o.suggestion.length) ||
                                                    (o.suggestion = []),
                                                    o.suggestion.push(n[6].decode(e, e.uint32()));
                                                break;
                                            case 7:
                                                (o.searchlet && o.searchlet.length) ||
                                                    (o.searchlet = []),
                                                    o.searchlet.push(n[7].decode(e, e.uint32()));
                                                break;
                                            case 8:
                                                o.requirements = n[8].decode(e, e.uint32());
                                                break;
                                            case 10:
                                                o.suggestServer = n[9].decode(e, e.uint32());
                                                break;
                                            default:
                                                e.skipType(7 & a);
                                        }
                                    }
                                    return o;
                                }),
                                (e.verify = function(e) {
                                    if ("object" != typeof e || null === e)
                                        return "object expected";
                                    if (
                                        void 0 !== e.name &&
                                        null !== e.name &&
                                        (t = n[0].verify(e.name))
                                    )
                                        return "name." + t;
                                    if (
                                        void 0 !== e.url &&
                                        null !== e.url &&
                                        (t = n[1].verify(e.url))
                                    )
                                        return "url." + t;
                                    if (void 0 !== e.type)
                                        switch (e.type) {
                                            default:
                                                return "type: enum value expected";
                                            case 0:
                                            case 1:
                                        }
                                    if (
                                        void 0 !== e.htmlTransformUrl &&
                                        null !== e.htmlTransformUrl &&
                                        (t = n[3].verify(e.htmlTransformUrl))
                                    )
                                        return "htmlTransformUrl." + t;
                                    if (
                                        void 0 !== e.kmlTransformUrl &&
                                        null !== e.kmlTransformUrl &&
                                        (t = n[4].verify(e.kmlTransformUrl))
                                    )
                                        return "kmlTransformUrl." + t;
                                    if (
                                        void 0 !== e.supplementalUi &&
                                        null !== e.supplementalUi &&
                                        (t = n[5].verify(e.supplementalUi))
                                    )
                                        return "supplementalUi." + t;
                                    if (void 0 !== e.suggestion) {
                                        if (!Array.isArray(e.suggestion))
                                            return "suggestion: array expected";
                                        for (var r = 0; r < e.suggestion.length; ++r)
                                            if ((t = n[6].verify(e.suggestion[r])))
                                                return "suggestion." + t;
                                    }
                                    if (void 0 !== e.searchlet) {
                                        if (!Array.isArray(e.searchlet))
                                            return "searchlet: array expected";
                                        for (r = 0; r < e.searchlet.length; ++r) {
                                            var t;
                                            if ((t = n[7].verify(e.searchlet[r])))
                                                return "searchlet." + t;
                                        }
                                    }
                                    return void 0 !== e.requirements &&
                                        null !== e.requirements &&
                                        (t = n[8].verify(e.requirements))
                                        ? "requirements." + t
                                        : void 0 !== e.suggestServer &&
                                          null !== e.suggestServer &&
                                          (t = n[9].verify(e.suggestServer))
                                        ? "suggestServer." + t
                                        : null;
                                }),
                                (e.from = e.fromObject = function(e) {
                                    if (
                                        e instanceof
                                        c.keyhole.dbroot.EndSnippetProto.SearchConfigProto
                                            .SearchServer
                                    )
                                        return e;
                                    var r = new c.keyhole.dbroot.EndSnippetProto.SearchConfigProto.SearchServer();
                                    if (void 0 !== e.name && null !== e.name) {
                                        if ("object" != typeof e.name)
                                            throw TypeError(
                                                ".keyhole.dbroot.EndSnippetProto.SearchConfigProto.SearchServer.name: object expected"
                                            );
                                        r.name = n[0].fromObject(e.name);
                                    }
                                    if (void 0 !== e.url && null !== e.url) {
                                        if ("object" != typeof e.url)
                                            throw TypeError(
                                                ".keyhole.dbroot.EndSnippetProto.SearchConfigProto.SearchServer.url: object expected"
                                            );
                                        r.url = n[1].fromObject(e.url);
                                    }
                                    switch (e.type) {
                                        case "RESULT_TYPE_KML":
                                        case 0:
                                            r.type = 0;
                                            break;
                                        case "RESULT_TYPE_XML":
                                        case 1:
                                            r.type = 1;
                                    }
                                    if (
                                        void 0 !== e.htmlTransformUrl &&
                                        null !== e.htmlTransformUrl
                                    ) {
                                        if ("object" != typeof e.htmlTransformUrl)
                                            throw TypeError(
                                                ".keyhole.dbroot.EndSnippetProto.SearchConfigProto.SearchServer.htmlTransformUrl: object expected"
                                            );
                                        r.htmlTransformUrl = n[3].fromObject(e.htmlTransformUrl);
                                    }
                                    if (
                                        void 0 !== e.kmlTransformUrl &&
                                        null !== e.kmlTransformUrl
                                    ) {
                                        if ("object" != typeof e.kmlTransformUrl)
                                            throw TypeError(
                                                ".keyhole.dbroot.EndSnippetProto.SearchConfigProto.SearchServer.kmlTransformUrl: object expected"
                                            );
                                        r.kmlTransformUrl = n[4].fromObject(e.kmlTransformUrl);
                                    }
                                    if (void 0 !== e.supplementalUi && null !== e.supplementalUi) {
                                        if ("object" != typeof e.supplementalUi)
                                            throw TypeError(
                                                ".keyhole.dbroot.EndSnippetProto.SearchConfigProto.SearchServer.supplementalUi: object expected"
                                            );
                                        r.supplementalUi = n[5].fromObject(e.supplementalUi);
                                    }
                                    if (e.suggestion) {
                                        if (!Array.isArray(e.suggestion))
                                            throw TypeError(
                                                ".keyhole.dbroot.EndSnippetProto.SearchConfigProto.SearchServer.suggestion: array expected"
                                            );
                                        r.suggestion = [];
                                        for (var t = 0; t < e.suggestion.length; ++t) {
                                            if ("object" != typeof e.suggestion[t])
                                                throw TypeError(
                                                    ".keyhole.dbroot.EndSnippetProto.SearchConfigProto.SearchServer.suggestion: object expected"
                                                );
                                            r.suggestion[t] = n[6].fromObject(e.suggestion[t]);
                                        }
                                    }
                                    if (e.searchlet) {
                                        if (!Array.isArray(e.searchlet))
                                            throw TypeError(
                                                ".keyhole.dbroot.EndSnippetProto.SearchConfigProto.SearchServer.searchlet: array expected"
                                            );
                                        for (r.searchlet = [], t = 0; t < e.searchlet.length; ++t) {
                                            if ("object" != typeof e.searchlet[t])
                                                throw TypeError(
                                                    ".keyhole.dbroot.EndSnippetProto.SearchConfigProto.SearchServer.searchlet: object expected"
                                                );
                                            r.searchlet[t] = n[7].fromObject(e.searchlet[t]);
                                        }
                                    }
                                    if (void 0 !== e.requirements && null !== e.requirements) {
                                        if ("object" != typeof e.requirements)
                                            throw TypeError(
                                                ".keyhole.dbroot.EndSnippetProto.SearchConfigProto.SearchServer.requirements: object expected"
                                            );
                                        r.requirements = n[8].fromObject(e.requirements);
                                    }
                                    if (void 0 !== e.suggestServer && null !== e.suggestServer) {
                                        if ("object" != typeof e.suggestServer)
                                            throw TypeError(
                                                ".keyhole.dbroot.EndSnippetProto.SearchConfigProto.SearchServer.suggestServer: object expected"
                                            );
                                        r.suggestServer = n[9].fromObject(e.suggestServer);
                                    }
                                    return r;
                                }),
                                (e.toObject = function(e, r) {
                                    r || (r = {});
                                    var t = {};
                                    if (
                                        ((r.arrays || r.defaults) &&
                                            ((t.suggestion = []), (t.searchlet = [])),
                                        r.defaults &&
                                            ((t.name = null),
                                            (t.url = null),
                                            (t.type = r.enums === String ? "RESULT_TYPE_KML" : 0),
                                            (t.htmlTransformUrl = null),
                                            (t.kmlTransformUrl = null),
                                            (t.supplementalUi = null),
                                            (t.requirements = null),
                                            (t.suggestServer = null)),
                                        void 0 !== e.name &&
                                            null !== e.name &&
                                            e.hasOwnProperty("name") &&
                                            (t.name = n[0].toObject(e.name, r)),
                                        void 0 !== e.url &&
                                            null !== e.url &&
                                            e.hasOwnProperty("url") &&
                                            (t.url = n[1].toObject(e.url, r)),
                                        void 0 !== e.type &&
                                            null !== e.type &&
                                            e.hasOwnProperty("type") &&
                                            (t.type = r.enums === String ? n[2][e.type] : e.type),
                                        void 0 !== e.htmlTransformUrl &&
                                            null !== e.htmlTransformUrl &&
                                            e.hasOwnProperty("htmlTransformUrl") &&
                                            (t.htmlTransformUrl = n[3].toObject(
                                                e.htmlTransformUrl,
                                                r
                                            )),
                                        void 0 !== e.kmlTransformUrl &&
                                            null !== e.kmlTransformUrl &&
                                            e.hasOwnProperty("kmlTransformUrl") &&
                                            (t.kmlTransformUrl = n[4].toObject(
                                                e.kmlTransformUrl,
                                                r
                                            )),
                                        void 0 !== e.supplementalUi &&
                                            null !== e.supplementalUi &&
                                            e.hasOwnProperty("supplementalUi") &&
                                            (t.supplementalUi = n[5].toObject(e.supplementalUi, r)),
                                        void 0 !== e.suggestion &&
                                            null !== e.suggestion &&
                                            e.hasOwnProperty("suggestion"))
                                    ) {
                                        t.suggestion = [];
                                        for (var o = 0; o < e.suggestion.length; ++o)
                                            t.suggestion[o] = n[6].toObject(e.suggestion[o], r);
                                    }
                                    if (
                                        void 0 !== e.searchlet &&
                                        null !== e.searchlet &&
                                        e.hasOwnProperty("searchlet")
                                    )
                                        for (t.searchlet = [], o = 0; o < e.searchlet.length; ++o)
                                            t.searchlet[o] = n[7].toObject(e.searchlet[o], r);
                                    return (
                                        void 0 !== e.requirements &&
                                            null !== e.requirements &&
                                            e.hasOwnProperty("requirements") &&
                                            (t.requirements = n[8].toObject(e.requirements, r)),
                                        void 0 !== e.suggestServer &&
                                            null !== e.suggestServer &&
                                            e.hasOwnProperty("suggestServer") &&
                                            (t.suggestServer = n[9].toObject(e.suggestServer, r)),
                                        t
                                    );
                                }),
                                (e.prototype.toObject = function(e) {
                                    return this.constructor.toObject(this, e);
                                }),
                                (e.prototype.toJSON = function() {
                                    return this.constructor.toObject(this, i.util.toJSONOptions);
                                }),
                                (e.ResultType = (((r = Object.create({})).RESULT_TYPE_KML = 0),
                                (r.RESULT_TYPE_XML = 1),
                                r)),
                                (e.SupplementalUi = (function() {
                                    function e(e) {
                                        if (e)
                                            for (var r = Object.keys(e), t = 0; t < r.length; ++t)
                                                this[r[t]] = e[r[t]];
                                    }
                                    (e.prototype.url = null),
                                        (e.prototype.label = null),
                                        (e.prototype.height = 160);
                                    var n = {
                                        0: "keyhole.dbroot.StringIdOrValueProto",
                                        1: "keyhole.dbroot.StringIdOrValueProto"
                                    };
                                    return (
                                        p.push(n),
                                        (e.decode = function(e, r) {
                                            e instanceof l || (e = l.create(e));
                                            for (
                                                var t = void 0 === r ? e.len : e.pos + r,
                                                    o = new c.keyhole.dbroot.EndSnippetProto.SearchConfigProto.SearchServer.SupplementalUi();
                                                e.pos < t;

                                            ) {
                                                var a = e.uint32();
                                                switch (a >>> 3) {
                                                    case 1:
                                                        o.url = n[0].decode(e, e.uint32());
                                                        break;
                                                    case 2:
                                                        o.label = n[1].decode(e, e.uint32());
                                                        break;
                                                    case 3:
                                                        o.height = e.int32();
                                                        break;
                                                    default:
                                                        e.skipType(7 & a);
                                                }
                                            }
                                            return o;
                                        }),
                                        (e.verify = function(e) {
                                            return "object" != typeof e || null === e
                                                ? "object expected"
                                                : void 0 !== e.url &&
                                                  null !== e.url &&
                                                  (r = n[0].verify(e.url))
                                                ? "url." + r
                                                : void 0 !== e.label &&
                                                  null !== e.label &&
                                                  (r = n[1].verify(e.label))
                                                ? "label." + r
                                                : void 0 === e.height || s.isInteger(e.height)
                                                ? null
                                                : "height: integer expected";
                                            var r;
                                        }),
                                        (e.from = e.fromObject = function(e) {
                                            if (
                                                e instanceof
                                                c.keyhole.dbroot.EndSnippetProto.SearchConfigProto
                                                    .SearchServer.SupplementalUi
                                            )
                                                return e;
                                            var r = new c.keyhole.dbroot.EndSnippetProto.SearchConfigProto.SearchServer.SupplementalUi();
                                            if (void 0 !== e.url && null !== e.url) {
                                                if ("object" != typeof e.url)
                                                    throw TypeError(
                                                        ".keyhole.dbroot.EndSnippetProto.SearchConfigProto.SearchServer.SupplementalUi.url: object expected"
                                                    );
                                                r.url = n[0].fromObject(e.url);
                                            }
                                            if (void 0 !== e.label && null !== e.label) {
                                                if ("object" != typeof e.label)
                                                    throw TypeError(
                                                        ".keyhole.dbroot.EndSnippetProto.SearchConfigProto.SearchServer.SupplementalUi.label: object expected"
                                                    );
                                                r.label = n[1].fromObject(e.label);
                                            }
                                            return (
                                                void 0 !== e.height &&
                                                    null !== e.height &&
                                                    (r.height = 0 | e.height),
                                                r
                                            );
                                        }),
                                        (e.toObject = function(e, r) {
                                            r || (r = {});
                                            var t = {};
                                            return (
                                                r.defaults &&
                                                    ((t.url = null),
                                                    (t.label = null),
                                                    (t.height = 160)),
                                                void 0 !== e.url &&
                                                    null !== e.url &&
                                                    e.hasOwnProperty("url") &&
                                                    (t.url = n[0].toObject(e.url, r)),
                                                void 0 !== e.label &&
                                                    null !== e.label &&
                                                    e.hasOwnProperty("label") &&
                                                    (t.label = n[1].toObject(e.label, r)),
                                                void 0 !== e.height &&
                                                    null !== e.height &&
                                                    e.hasOwnProperty("height") &&
                                                    (t.height = e.height),
                                                t
                                            );
                                        }),
                                        (e.prototype.toObject = function(e) {
                                            return this.constructor.toObject(this, e);
                                        }),
                                        (e.prototype.toJSON = function() {
                                            return this.constructor.toObject(
                                                this,
                                                i.util.toJSONOptions
                                            );
                                        }),
                                        e
                                    );
                                })()),
                                (e.SearchletProto = (function() {
                                    function e(e) {
                                        if (e)
                                            for (var r = Object.keys(e), t = 0; t < r.length; ++t)
                                                this[r[t]] = e[r[t]];
                                    }
                                    (e.prototype.url = null),
                                        (e.prototype.name = null),
                                        (e.prototype.requirements = null);
                                    var n = {
                                        0: "keyhole.dbroot.StringIdOrValueProto",
                                        1: "keyhole.dbroot.StringIdOrValueProto",
                                        2: "keyhole.dbroot.RequirementProto"
                                    };
                                    return (
                                        p.push(n),
                                        (e.decode = function(e, r) {
                                            e instanceof l || (e = l.create(e));
                                            for (
                                                var t = void 0 === r ? e.len : e.pos + r,
                                                    o = new c.keyhole.dbroot.EndSnippetProto.SearchConfigProto.SearchServer.SearchletProto();
                                                e.pos < t;

                                            ) {
                                                var a = e.uint32();
                                                switch (a >>> 3) {
                                                    case 1:
                                                        o.url = n[0].decode(e, e.uint32());
                                                        break;
                                                    case 2:
                                                        o.name = n[1].decode(e, e.uint32());
                                                        break;
                                                    case 3:
                                                        o.requirements = n[2].decode(e, e.uint32());
                                                        break;
                                                    default:
                                                        e.skipType(7 & a);
                                                }
                                            }
                                            return o;
                                        }),
                                        (e.verify = function(e) {
                                            return "object" != typeof e || null === e
                                                ? "object expected"
                                                : void 0 !== e.url &&
                                                  null !== e.url &&
                                                  (r = n[0].verify(e.url))
                                                ? "url." + r
                                                : void 0 !== e.name &&
                                                  null !== e.name &&
                                                  (r = n[1].verify(e.name))
                                                ? "name." + r
                                                : void 0 !== e.requirements &&
                                                  null !== e.requirements &&
                                                  (r = n[2].verify(e.requirements))
                                                ? "requirements." + r
                                                : null;
                                            var r;
                                        }),
                                        (e.from = e.fromObject = function(e) {
                                            if (
                                                e instanceof
                                                c.keyhole.dbroot.EndSnippetProto.SearchConfigProto
                                                    .SearchServer.SearchletProto
                                            )
                                                return e;
                                            var r = new c.keyhole.dbroot.EndSnippetProto.SearchConfigProto.SearchServer.SearchletProto();
                                            if (void 0 !== e.url && null !== e.url) {
                                                if ("object" != typeof e.url)
                                                    throw TypeError(
                                                        ".keyhole.dbroot.EndSnippetProto.SearchConfigProto.SearchServer.SearchletProto.url: object expected"
                                                    );
                                                r.url = n[0].fromObject(e.url);
                                            }
                                            if (void 0 !== e.name && null !== e.name) {
                                                if ("object" != typeof e.name)
                                                    throw TypeError(
                                                        ".keyhole.dbroot.EndSnippetProto.SearchConfigProto.SearchServer.SearchletProto.name: object expected"
                                                    );
                                                r.name = n[1].fromObject(e.name);
                                            }
                                            if (
                                                void 0 !== e.requirements &&
                                                null !== e.requirements
                                            ) {
                                                if ("object" != typeof e.requirements)
                                                    throw TypeError(
                                                        ".keyhole.dbroot.EndSnippetProto.SearchConfigProto.SearchServer.SearchletProto.requirements: object expected"
                                                    );
                                                r.requirements = n[2].fromObject(e.requirements);
                                            }
                                            return r;
                                        }),
                                        (e.toObject = function(e, r) {
                                            r || (r = {});
                                            var t = {};
                                            return (
                                                r.defaults &&
                                                    ((t.url = null),
                                                    (t.name = null),
                                                    (t.requirements = null)),
                                                void 0 !== e.url &&
                                                    null !== e.url &&
                                                    e.hasOwnProperty("url") &&
                                                    (t.url = n[0].toObject(e.url, r)),
                                                void 0 !== e.name &&
                                                    null !== e.name &&
                                                    e.hasOwnProperty("name") &&
                                                    (t.name = n[1].toObject(e.name, r)),
                                                void 0 !== e.requirements &&
                                                    null !== e.requirements &&
                                                    e.hasOwnProperty("requirements") &&
                                                    (t.requirements = n[2].toObject(
                                                        e.requirements,
                                                        r
                                                    )),
                                                t
                                            );
                                        }),
                                        (e.prototype.toObject = function(e) {
                                            return this.constructor.toObject(this, e);
                                        }),
                                        (e.prototype.toJSON = function() {
                                            return this.constructor.toObject(
                                                this,
                                                i.util.toJSONOptions
                                            );
                                        }),
                                        e
                                    );
                                })()),
                                e
                            );
                        })()),
                        (e.OneboxServiceProto = (function() {
                            function e(e) {
                                if (e)
                                    for (var r = Object.keys(e), t = 0; t < r.length; ++t)
                                        this[r[t]] = e[r[t]];
                            }
                            (e.prototype.serviceUrl = null), (e.prototype.requirements = null);
                            var n = {
                                0: "keyhole.dbroot.StringIdOrValueProto",
                                1: "keyhole.dbroot.RequirementProto"
                            };
                            return (
                                p.push(n),
                                (e.decode = function(e, r) {
                                    e instanceof l || (e = l.create(e));
                                    for (
                                        var t = void 0 === r ? e.len : e.pos + r,
                                            o = new c.keyhole.dbroot.EndSnippetProto.SearchConfigProto.OneboxServiceProto();
                                        e.pos < t;

                                    ) {
                                        var a = e.uint32();
                                        switch (a >>> 3) {
                                            case 1:
                                                o.serviceUrl = n[0].decode(e, e.uint32());
                                                break;
                                            case 2:
                                                o.requirements = n[1].decode(e, e.uint32());
                                                break;
                                            default:
                                                e.skipType(7 & a);
                                        }
                                    }
                                    return o;
                                }),
                                (e.verify = function(e) {
                                    return "object" != typeof e || null === e
                                        ? "object expected"
                                        : void 0 !== e.serviceUrl &&
                                          null !== e.serviceUrl &&
                                          (r = n[0].verify(e.serviceUrl))
                                        ? "serviceUrl." + r
                                        : void 0 !== e.requirements &&
                                          null !== e.requirements &&
                                          (r = n[1].verify(e.requirements))
                                        ? "requirements." + r
                                        : null;
                                    var r;
                                }),
                                (e.from = e.fromObject = function(e) {
                                    if (
                                        e instanceof
                                        c.keyhole.dbroot.EndSnippetProto.SearchConfigProto
                                            .OneboxServiceProto
                                    )
                                        return e;
                                    var r = new c.keyhole.dbroot.EndSnippetProto.SearchConfigProto.OneboxServiceProto();
                                    if (void 0 !== e.serviceUrl && null !== e.serviceUrl) {
                                        if ("object" != typeof e.serviceUrl)
                                            throw TypeError(
                                                ".keyhole.dbroot.EndSnippetProto.SearchConfigProto.OneboxServiceProto.serviceUrl: object expected"
                                            );
                                        r.serviceUrl = n[0].fromObject(e.serviceUrl);
                                    }
                                    if (void 0 !== e.requirements && null !== e.requirements) {
                                        if ("object" != typeof e.requirements)
                                            throw TypeError(
                                                ".keyhole.dbroot.EndSnippetProto.SearchConfigProto.OneboxServiceProto.requirements: object expected"
                                            );
                                        r.requirements = n[1].fromObject(e.requirements);
                                    }
                                    return r;
                                }),
                                (e.toObject = function(e, r) {
                                    r || (r = {});
                                    var t = {};
                                    return (
                                        r.defaults &&
                                            ((t.serviceUrl = null), (t.requirements = null)),
                                        void 0 !== e.serviceUrl &&
                                            null !== e.serviceUrl &&
                                            e.hasOwnProperty("serviceUrl") &&
                                            (t.serviceUrl = n[0].toObject(e.serviceUrl, r)),
                                        void 0 !== e.requirements &&
                                            null !== e.requirements &&
                                            e.hasOwnProperty("requirements") &&
                                            (t.requirements = n[1].toObject(e.requirements, r)),
                                        t
                                    );
                                }),
                                (e.prototype.toObject = function(e) {
                                    return this.constructor.toObject(this, e);
                                }),
                                (e.prototype.toJSON = function() {
                                    return this.constructor.toObject(this, i.util.toJSONOptions);
                                }),
                                e
                            );
                        })()),
                        e
                    );
                })()),
                (e.SearchInfoProto = ((r.prototype.defaultUrl = "http://maps.google.com/maps"),
                (r.prototype.geocodeParam = "q"),
                (r.decode = function(e, r) {
                    e instanceof l || (e = l.create(e));
                    for (
                        var t = void 0 === r ? e.len : e.pos + r,
                            o = new c.keyhole.dbroot.EndSnippetProto.SearchInfoProto();
                        e.pos < t;

                    ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                            case 1:
                                o.defaultUrl = e.string();
                                break;
                            case 2:
                                o.geocodeParam = e.string();
                                break;
                            default:
                                e.skipType(7 & a);
                        }
                    }
                    return o;
                }),
                (r.verify = function(e) {
                    return "object" != typeof e || null === e
                        ? "object expected"
                        : void 0 === e.defaultUrl || s.isString(e.defaultUrl)
                        ? void 0 === e.geocodeParam || s.isString(e.geocodeParam)
                            ? null
                            : "geocodeParam: string expected"
                        : "defaultUrl: string expected";
                }),
                (r.from = r.fromObject = function(e) {
                    if (e instanceof c.keyhole.dbroot.EndSnippetProto.SearchInfoProto) return e;
                    var r = new c.keyhole.dbroot.EndSnippetProto.SearchInfoProto();
                    return (
                        void 0 !== e.defaultUrl &&
                            null !== e.defaultUrl &&
                            (r.defaultUrl = String(e.defaultUrl)),
                        void 0 !== e.geocodeParam &&
                            null !== e.geocodeParam &&
                            (r.geocodeParam = String(e.geocodeParam)),
                        r
                    );
                }),
                (r.toObject = function(e, r) {
                    r || (r = {});
                    var t = {};
                    return (
                        r.defaults &&
                            ((t.defaultUrl = "http://maps.google.com/maps"),
                            (t.geocodeParam = "q")),
                        void 0 !== e.defaultUrl &&
                            null !== e.defaultUrl &&
                            e.hasOwnProperty("defaultUrl") &&
                            (t.defaultUrl = e.defaultUrl),
                        void 0 !== e.geocodeParam &&
                            null !== e.geocodeParam &&
                            e.hasOwnProperty("geocodeParam") &&
                            (t.geocodeParam = e.geocodeParam),
                        t
                    );
                }),
                (r.prototype.toObject = function(e) {
                    return this.constructor.toObject(this, e);
                }),
                (r.prototype.toJSON = function() {
                    return this.constructor.toObject(this, i.util.toJSONOptions);
                }),
                r)),
                (e.RockTreeDataProto = (function() {
                    function e(e) {
                        if (e)
                            for (var r = Object.keys(e), t = 0; t < r.length; ++t)
                                this[r[t]] = e[r[t]];
                    }
                    e.prototype.url = null;
                    var n = { 0: "keyhole.dbroot.StringIdOrValueProto" };
                    return (
                        p.push(n),
                        (e.decode = function(e, r) {
                            e instanceof l || (e = l.create(e));
                            for (
                                var t = void 0 === r ? e.len : e.pos + r,
                                    o = new c.keyhole.dbroot.EndSnippetProto.RockTreeDataProto();
                                e.pos < t;

                            ) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        o.url = n[0].decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & a);
                                }
                            }
                            return o;
                        }),
                        (e.verify = function(e) {
                            if ("object" != typeof e || null === e) return "object expected";
                            if (void 0 !== e.url && null !== e.url) {
                                var r = n[0].verify(e.url);
                                if (r) return "url." + r;
                            }
                            return null;
                        }),
                        (e.from = e.fromObject = function(e) {
                            if (e instanceof c.keyhole.dbroot.EndSnippetProto.RockTreeDataProto)
                                return e;
                            var r = new c.keyhole.dbroot.EndSnippetProto.RockTreeDataProto();
                            if (void 0 !== e.url && null !== e.url) {
                                if ("object" != typeof e.url)
                                    throw TypeError(
                                        ".keyhole.dbroot.EndSnippetProto.RockTreeDataProto.url: object expected"
                                    );
                                r.url = n[0].fromObject(e.url);
                            }
                            return r;
                        }),
                        (e.toObject = function(e, r) {
                            r || (r = {});
                            var t = {};
                            return (
                                r.defaults && (t.url = null),
                                void 0 !== e.url &&
                                    null !== e.url &&
                                    e.hasOwnProperty("url") &&
                                    (t.url = n[0].toObject(e.url, r)),
                                t
                            );
                        }),
                        (e.prototype.toObject = function(e) {
                            return this.constructor.toObject(this, e);
                        }),
                        (e.prototype.toJSON = function() {
                            return this.constructor.toObject(this, i.util.toJSONOptions);
                        }),
                        e
                    );
                })()),
                (e.FilmstripConfigProto = (function() {
                    function e(e) {
                        if (e)
                            for (var r = Object.keys(e), t = 0; t < r.length; ++t)
                                this[r[t]] = e[r[t]];
                    }
                    (e.prototype.requirements = null),
                        (e.prototype.alleycatUrlTemplate = null),
                        (e.prototype.fallbackAlleycatUrlTemplate = null),
                        (e.prototype.metadataUrlTemplate = null),
                        (e.prototype.thumbnailUrlTemplate = null),
                        (e.prototype.kmlUrlTemplate = null),
                        (e.prototype.featuredToursUrl = null),
                        (e.prototype.enableViewportFallback = !1),
                        (e.prototype.viewportFallbackDistance = 0),
                        (e.prototype.imageryType = s.emptyArray);
                    var n = {
                        0: "keyhole.dbroot.RequirementProto",
                        1: "keyhole.dbroot.StringIdOrValueProto",
                        2: "keyhole.dbroot.StringIdOrValueProto",
                        3: "keyhole.dbroot.StringIdOrValueProto",
                        4: "keyhole.dbroot.StringIdOrValueProto",
                        5: "keyhole.dbroot.StringIdOrValueProto",
                        6: "keyhole.dbroot.StringIdOrValueProto",
                        9: "keyhole.dbroot.EndSnippetProto.FilmstripConfigProto.AlleycatImageryTypeProto"
                    };
                    return (
                        p.push(n),
                        (e.decode = function(e, r) {
                            e instanceof l || (e = l.create(e));
                            for (
                                var t = void 0 === r ? e.len : e.pos + r,
                                    o = new c.keyhole.dbroot.EndSnippetProto.FilmstripConfigProto();
                                e.pos < t;

                            ) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        o.requirements = n[0].decode(e, e.uint32());
                                        break;
                                    case 2:
                                        o.alleycatUrlTemplate = n[1].decode(e, e.uint32());
                                        break;
                                    case 9:
                                        o.fallbackAlleycatUrlTemplate = n[2].decode(e, e.uint32());
                                        break;
                                    case 3:
                                        o.metadataUrlTemplate = n[3].decode(e, e.uint32());
                                        break;
                                    case 4:
                                        o.thumbnailUrlTemplate = n[4].decode(e, e.uint32());
                                        break;
                                    case 5:
                                        o.kmlUrlTemplate = n[5].decode(e, e.uint32());
                                        break;
                                    case 6:
                                        o.featuredToursUrl = n[6].decode(e, e.uint32());
                                        break;
                                    case 7:
                                        o.enableViewportFallback = e.bool();
                                        break;
                                    case 8:
                                        o.viewportFallbackDistance = e.uint32();
                                        break;
                                    case 10:
                                        (o.imageryType && o.imageryType.length) ||
                                            (o.imageryType = []),
                                            o.imageryType.push(n[9].decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & a);
                                }
                            }
                            return o;
                        }),
                        (e.verify = function(e) {
                            if ("object" != typeof e || null === e) return "object expected";
                            if (
                                void 0 !== e.requirements &&
                                null !== e.requirements &&
                                (t = n[0].verify(e.requirements))
                            )
                                return "requirements." + t;
                            if (
                                void 0 !== e.alleycatUrlTemplate &&
                                null !== e.alleycatUrlTemplate &&
                                (t = n[1].verify(e.alleycatUrlTemplate))
                            )
                                return "alleycatUrlTemplate." + t;
                            if (
                                void 0 !== e.fallbackAlleycatUrlTemplate &&
                                null !== e.fallbackAlleycatUrlTemplate &&
                                (t = n[2].verify(e.fallbackAlleycatUrlTemplate))
                            )
                                return "fallbackAlleycatUrlTemplate." + t;
                            if (
                                void 0 !== e.metadataUrlTemplate &&
                                null !== e.metadataUrlTemplate &&
                                (t = n[3].verify(e.metadataUrlTemplate))
                            )
                                return "metadataUrlTemplate." + t;
                            if (
                                void 0 !== e.thumbnailUrlTemplate &&
                                null !== e.thumbnailUrlTemplate &&
                                (t = n[4].verify(e.thumbnailUrlTemplate))
                            )
                                return "thumbnailUrlTemplate." + t;
                            if (
                                void 0 !== e.kmlUrlTemplate &&
                                null !== e.kmlUrlTemplate &&
                                (t = n[5].verify(e.kmlUrlTemplate))
                            )
                                return "kmlUrlTemplate." + t;
                            if (
                                void 0 !== e.featuredToursUrl &&
                                null !== e.featuredToursUrl &&
                                (t = n[6].verify(e.featuredToursUrl))
                            )
                                return "featuredToursUrl." + t;
                            if (
                                void 0 !== e.enableViewportFallback &&
                                "boolean" != typeof e.enableViewportFallback
                            )
                                return "enableViewportFallback: boolean expected";
                            if (
                                void 0 !== e.viewportFallbackDistance &&
                                !s.isInteger(e.viewportFallbackDistance)
                            )
                                return "viewportFallbackDistance: integer expected";
                            if (void 0 !== e.imageryType) {
                                if (!Array.isArray(e.imageryType))
                                    return "imageryType: array expected";
                                for (var r = 0; r < e.imageryType.length; ++r) {
                                    var t;
                                    if ((t = n[9].verify(e.imageryType[r])))
                                        return "imageryType." + t;
                                }
                            }
                            return null;
                        }),
                        (e.from = e.fromObject = function(e) {
                            if (e instanceof c.keyhole.dbroot.EndSnippetProto.FilmstripConfigProto)
                                return e;
                            var r = new c.keyhole.dbroot.EndSnippetProto.FilmstripConfigProto();
                            if (void 0 !== e.requirements && null !== e.requirements) {
                                if ("object" != typeof e.requirements)
                                    throw TypeError(
                                        ".keyhole.dbroot.EndSnippetProto.FilmstripConfigProto.requirements: object expected"
                                    );
                                r.requirements = n[0].fromObject(e.requirements);
                            }
                            if (
                                void 0 !== e.alleycatUrlTemplate &&
                                null !== e.alleycatUrlTemplate
                            ) {
                                if ("object" != typeof e.alleycatUrlTemplate)
                                    throw TypeError(
                                        ".keyhole.dbroot.EndSnippetProto.FilmstripConfigProto.alleycatUrlTemplate: object expected"
                                    );
                                r.alleycatUrlTemplate = n[1].fromObject(e.alleycatUrlTemplate);
                            }
                            if (
                                void 0 !== e.fallbackAlleycatUrlTemplate &&
                                null !== e.fallbackAlleycatUrlTemplate
                            ) {
                                if ("object" != typeof e.fallbackAlleycatUrlTemplate)
                                    throw TypeError(
                                        ".keyhole.dbroot.EndSnippetProto.FilmstripConfigProto.fallbackAlleycatUrlTemplate: object expected"
                                    );
                                r.fallbackAlleycatUrlTemplate = n[2].fromObject(
                                    e.fallbackAlleycatUrlTemplate
                                );
                            }
                            if (
                                void 0 !== e.metadataUrlTemplate &&
                                null !== e.metadataUrlTemplate
                            ) {
                                if ("object" != typeof e.metadataUrlTemplate)
                                    throw TypeError(
                                        ".keyhole.dbroot.EndSnippetProto.FilmstripConfigProto.metadataUrlTemplate: object expected"
                                    );
                                r.metadataUrlTemplate = n[3].fromObject(e.metadataUrlTemplate);
                            }
                            if (
                                void 0 !== e.thumbnailUrlTemplate &&
                                null !== e.thumbnailUrlTemplate
                            ) {
                                if ("object" != typeof e.thumbnailUrlTemplate)
                                    throw TypeError(
                                        ".keyhole.dbroot.EndSnippetProto.FilmstripConfigProto.thumbnailUrlTemplate: object expected"
                                    );
                                r.thumbnailUrlTemplate = n[4].fromObject(e.thumbnailUrlTemplate);
                            }
                            if (void 0 !== e.kmlUrlTemplate && null !== e.kmlUrlTemplate) {
                                if ("object" != typeof e.kmlUrlTemplate)
                                    throw TypeError(
                                        ".keyhole.dbroot.EndSnippetProto.FilmstripConfigProto.kmlUrlTemplate: object expected"
                                    );
                                r.kmlUrlTemplate = n[5].fromObject(e.kmlUrlTemplate);
                            }
                            if (void 0 !== e.featuredToursUrl && null !== e.featuredToursUrl) {
                                if ("object" != typeof e.featuredToursUrl)
                                    throw TypeError(
                                        ".keyhole.dbroot.EndSnippetProto.FilmstripConfigProto.featuredToursUrl: object expected"
                                    );
                                r.featuredToursUrl = n[6].fromObject(e.featuredToursUrl);
                            }
                            if (
                                (void 0 !== e.enableViewportFallback &&
                                    null !== e.enableViewportFallback &&
                                    (r.enableViewportFallback = Boolean(e.enableViewportFallback)),
                                void 0 !== e.viewportFallbackDistance &&
                                    null !== e.viewportFallbackDistance &&
                                    (r.viewportFallbackDistance = e.viewportFallbackDistance >>> 0),
                                e.imageryType)
                            ) {
                                if (!Array.isArray(e.imageryType))
                                    throw TypeError(
                                        ".keyhole.dbroot.EndSnippetProto.FilmstripConfigProto.imageryType: array expected"
                                    );
                                r.imageryType = [];
                                for (var t = 0; t < e.imageryType.length; ++t) {
                                    if ("object" != typeof e.imageryType[t])
                                        throw TypeError(
                                            ".keyhole.dbroot.EndSnippetProto.FilmstripConfigProto.imageryType: object expected"
                                        );
                                    r.imageryType[t] = n[9].fromObject(e.imageryType[t]);
                                }
                            }
                            return r;
                        }),
                        (e.toObject = function(e, r) {
                            r || (r = {});
                            var t = {};
                            if (
                                ((r.arrays || r.defaults) && (t.imageryType = []),
                                r.defaults &&
                                    ((t.requirements = null),
                                    (t.alleycatUrlTemplate = null),
                                    (t.fallbackAlleycatUrlTemplate = null),
                                    (t.metadataUrlTemplate = null),
                                    (t.thumbnailUrlTemplate = null),
                                    (t.kmlUrlTemplate = null),
                                    (t.featuredToursUrl = null),
                                    (t.enableViewportFallback = !1),
                                    (t.viewportFallbackDistance = 0)),
                                void 0 !== e.requirements &&
                                    null !== e.requirements &&
                                    e.hasOwnProperty("requirements") &&
                                    (t.requirements = n[0].toObject(e.requirements, r)),
                                void 0 !== e.alleycatUrlTemplate &&
                                    null !== e.alleycatUrlTemplate &&
                                    e.hasOwnProperty("alleycatUrlTemplate") &&
                                    (t.alleycatUrlTemplate = n[1].toObject(
                                        e.alleycatUrlTemplate,
                                        r
                                    )),
                                void 0 !== e.fallbackAlleycatUrlTemplate &&
                                    null !== e.fallbackAlleycatUrlTemplate &&
                                    e.hasOwnProperty("fallbackAlleycatUrlTemplate") &&
                                    (t.fallbackAlleycatUrlTemplate = n[2].toObject(
                                        e.fallbackAlleycatUrlTemplate,
                                        r
                                    )),
                                void 0 !== e.metadataUrlTemplate &&
                                    null !== e.metadataUrlTemplate &&
                                    e.hasOwnProperty("metadataUrlTemplate") &&
                                    (t.metadataUrlTemplate = n[3].toObject(
                                        e.metadataUrlTemplate,
                                        r
                                    )),
                                void 0 !== e.thumbnailUrlTemplate &&
                                    null !== e.thumbnailUrlTemplate &&
                                    e.hasOwnProperty("thumbnailUrlTemplate") &&
                                    (t.thumbnailUrlTemplate = n[4].toObject(
                                        e.thumbnailUrlTemplate,
                                        r
                                    )),
                                void 0 !== e.kmlUrlTemplate &&
                                    null !== e.kmlUrlTemplate &&
                                    e.hasOwnProperty("kmlUrlTemplate") &&
                                    (t.kmlUrlTemplate = n[5].toObject(e.kmlUrlTemplate, r)),
                                void 0 !== e.featuredToursUrl &&
                                    null !== e.featuredToursUrl &&
                                    e.hasOwnProperty("featuredToursUrl") &&
                                    (t.featuredToursUrl = n[6].toObject(e.featuredToursUrl, r)),
                                void 0 !== e.enableViewportFallback &&
                                    null !== e.enableViewportFallback &&
                                    e.hasOwnProperty("enableViewportFallback") &&
                                    (t.enableViewportFallback = e.enableViewportFallback),
                                void 0 !== e.viewportFallbackDistance &&
                                    null !== e.viewportFallbackDistance &&
                                    e.hasOwnProperty("viewportFallbackDistance") &&
                                    (t.viewportFallbackDistance = e.viewportFallbackDistance),
                                void 0 !== e.imageryType &&
                                    null !== e.imageryType &&
                                    e.hasOwnProperty("imageryType"))
                            ) {
                                t.imageryType = [];
                                for (var o = 0; o < e.imageryType.length; ++o)
                                    t.imageryType[o] = n[9].toObject(e.imageryType[o], r);
                            }
                            return t;
                        }),
                        (e.prototype.toObject = function(e) {
                            return this.constructor.toObject(this, e);
                        }),
                        (e.prototype.toJSON = function() {
                            return this.constructor.toObject(this, i.util.toJSONOptions);
                        }),
                        (e.AlleycatImageryTypeProto = (function() {
                            function e(e) {
                                if (e)
                                    for (var r = Object.keys(e), t = 0; t < r.length; ++t)
                                        this[r[t]] = e[r[t]];
                            }
                            (e.prototype.imageryTypeId = 0),
                                (e.prototype.imageryTypeLabel = ""),
                                (e.prototype.metadataUrlTemplate = null),
                                (e.prototype.thumbnailUrlTemplate = null),
                                (e.prototype.kmlUrlTemplate = null);
                            var n = {
                                2: "keyhole.dbroot.StringIdOrValueProto",
                                3: "keyhole.dbroot.StringIdOrValueProto",
                                4: "keyhole.dbroot.StringIdOrValueProto"
                            };
                            return (
                                p.push(n),
                                (e.decode = function(e, r) {
                                    e instanceof l || (e = l.create(e));
                                    for (
                                        var t = void 0 === r ? e.len : e.pos + r,
                                            o = new c.keyhole.dbroot.EndSnippetProto.FilmstripConfigProto.AlleycatImageryTypeProto();
                                        e.pos < t;

                                    ) {
                                        var a = e.uint32();
                                        switch (a >>> 3) {
                                            case 1:
                                                o.imageryTypeId = e.int32();
                                                break;
                                            case 2:
                                                o.imageryTypeLabel = e.string();
                                                break;
                                            case 3:
                                                o.metadataUrlTemplate = n[2].decode(e, e.uint32());
                                                break;
                                            case 4:
                                                o.thumbnailUrlTemplate = n[3].decode(e, e.uint32());
                                                break;
                                            case 5:
                                                o.kmlUrlTemplate = n[4].decode(e, e.uint32());
                                                break;
                                            default:
                                                e.skipType(7 & a);
                                        }
                                    }
                                    return o;
                                }),
                                (e.verify = function(e) {
                                    return "object" != typeof e || null === e
                                        ? "object expected"
                                        : void 0 === e.imageryTypeId || s.isInteger(e.imageryTypeId)
                                        ? void 0 === e.imageryTypeLabel ||
                                          s.isString(e.imageryTypeLabel)
                                            ? void 0 !== e.metadataUrlTemplate &&
                                              null !== e.metadataUrlTemplate &&
                                              (r = n[2].verify(e.metadataUrlTemplate))
                                                ? "metadataUrlTemplate." + r
                                                : void 0 !== e.thumbnailUrlTemplate &&
                                                  null !== e.thumbnailUrlTemplate &&
                                                  (r = n[3].verify(e.thumbnailUrlTemplate))
                                                ? "thumbnailUrlTemplate." + r
                                                : void 0 !== e.kmlUrlTemplate &&
                                                  null !== e.kmlUrlTemplate &&
                                                  (r = n[4].verify(e.kmlUrlTemplate))
                                                ? "kmlUrlTemplate." + r
                                                : null
                                            : "imageryTypeLabel: string expected"
                                        : "imageryTypeId: integer expected";
                                    var r;
                                }),
                                (e.from = e.fromObject = function(e) {
                                    if (
                                        e instanceof
                                        c.keyhole.dbroot.EndSnippetProto.FilmstripConfigProto
                                            .AlleycatImageryTypeProto
                                    )
                                        return e;
                                    var r = new c.keyhole.dbroot.EndSnippetProto.FilmstripConfigProto.AlleycatImageryTypeProto();
                                    if (
                                        (void 0 !== e.imageryTypeId &&
                                            null !== e.imageryTypeId &&
                                            (r.imageryTypeId = 0 | e.imageryTypeId),
                                        void 0 !== e.imageryTypeLabel &&
                                            null !== e.imageryTypeLabel &&
                                            (r.imageryTypeLabel = String(e.imageryTypeLabel)),
                                        void 0 !== e.metadataUrlTemplate &&
                                            null !== e.metadataUrlTemplate)
                                    ) {
                                        if ("object" != typeof e.metadataUrlTemplate)
                                            throw TypeError(
                                                ".keyhole.dbroot.EndSnippetProto.FilmstripConfigProto.AlleycatImageryTypeProto.metadataUrlTemplate: object expected"
                                            );
                                        r.metadataUrlTemplate = n[2].fromObject(
                                            e.metadataUrlTemplate
                                        );
                                    }
                                    if (
                                        void 0 !== e.thumbnailUrlTemplate &&
                                        null !== e.thumbnailUrlTemplate
                                    ) {
                                        if ("object" != typeof e.thumbnailUrlTemplate)
                                            throw TypeError(
                                                ".keyhole.dbroot.EndSnippetProto.FilmstripConfigProto.AlleycatImageryTypeProto.thumbnailUrlTemplate: object expected"
                                            );
                                        r.thumbnailUrlTemplate = n[3].fromObject(
                                            e.thumbnailUrlTemplate
                                        );
                                    }
                                    if (void 0 !== e.kmlUrlTemplate && null !== e.kmlUrlTemplate) {
                                        if ("object" != typeof e.kmlUrlTemplate)
                                            throw TypeError(
                                                ".keyhole.dbroot.EndSnippetProto.FilmstripConfigProto.AlleycatImageryTypeProto.kmlUrlTemplate: object expected"
                                            );
                                        r.kmlUrlTemplate = n[4].fromObject(e.kmlUrlTemplate);
                                    }
                                    return r;
                                }),
                                (e.toObject = function(e, r) {
                                    r || (r = {});
                                    var t = {};
                                    return (
                                        r.defaults &&
                                            ((t.imageryTypeId = 0),
                                            (t.imageryTypeLabel = ""),
                                            (t.metadataUrlTemplate = null),
                                            (t.thumbnailUrlTemplate = null),
                                            (t.kmlUrlTemplate = null)),
                                        void 0 !== e.imageryTypeId &&
                                            null !== e.imageryTypeId &&
                                            e.hasOwnProperty("imageryTypeId") &&
                                            (t.imageryTypeId = e.imageryTypeId),
                                        void 0 !== e.imageryTypeLabel &&
                                            null !== e.imageryTypeLabel &&
                                            e.hasOwnProperty("imageryTypeLabel") &&
                                            (t.imageryTypeLabel = e.imageryTypeLabel),
                                        void 0 !== e.metadataUrlTemplate &&
                                            null !== e.metadataUrlTemplate &&
                                            e.hasOwnProperty("metadataUrlTemplate") &&
                                            (t.metadataUrlTemplate = n[2].toObject(
                                                e.metadataUrlTemplate,
                                                r
                                            )),
                                        void 0 !== e.thumbnailUrlTemplate &&
                                            null !== e.thumbnailUrlTemplate &&
                                            e.hasOwnProperty("thumbnailUrlTemplate") &&
                                            (t.thumbnailUrlTemplate = n[3].toObject(
                                                e.thumbnailUrlTemplate,
                                                r
                                            )),
                                        void 0 !== e.kmlUrlTemplate &&
                                            null !== e.kmlUrlTemplate &&
                                            e.hasOwnProperty("kmlUrlTemplate") &&
                                            (t.kmlUrlTemplate = n[4].toObject(e.kmlUrlTemplate, r)),
                                        t
                                    );
                                }),
                                (e.prototype.toObject = function(e) {
                                    return this.constructor.toObject(this, e);
                                }),
                                (e.prototype.toJSON = function() {
                                    return this.constructor.toObject(this, i.util.toJSONOptions);
                                }),
                                e
                            );
                        })()),
                        e
                    );
                })()),
                (e.StarDataProto = (function() {
                    function e(e) {
                        if (e)
                            for (var r = Object.keys(e), t = 0; t < r.length; ++t)
                                this[r[t]] = e[r[t]];
                    }
                    e.prototype.url = null;
                    var n = { 0: "keyhole.dbroot.StringIdOrValueProto" };
                    return (
                        p.push(n),
                        (e.decode = function(e, r) {
                            e instanceof l || (e = l.create(e));
                            for (
                                var t = void 0 === r ? e.len : e.pos + r,
                                    o = new c.keyhole.dbroot.EndSnippetProto.StarDataProto();
                                e.pos < t;

                            ) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        o.url = n[0].decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & a);
                                }
                            }
                            return o;
                        }),
                        (e.verify = function(e) {
                            if ("object" != typeof e || null === e) return "object expected";
                            if (void 0 !== e.url && null !== e.url) {
                                var r = n[0].verify(e.url);
                                if (r) return "url." + r;
                            }
                            return null;
                        }),
                        (e.from = e.fromObject = function(e) {
                            if (e instanceof c.keyhole.dbroot.EndSnippetProto.StarDataProto)
                                return e;
                            var r = new c.keyhole.dbroot.EndSnippetProto.StarDataProto();
                            if (void 0 !== e.url && null !== e.url) {
                                if ("object" != typeof e.url)
                                    throw TypeError(
                                        ".keyhole.dbroot.EndSnippetProto.StarDataProto.url: object expected"
                                    );
                                r.url = n[0].fromObject(e.url);
                            }
                            return r;
                        }),
                        (e.toObject = function(e, r) {
                            r || (r = {});
                            var t = {};
                            return (
                                r.defaults && (t.url = null),
                                void 0 !== e.url &&
                                    null !== e.url &&
                                    e.hasOwnProperty("url") &&
                                    (t.url = n[0].toObject(e.url, r)),
                                t
                            );
                        }),
                        (e.prototype.toObject = function(e) {
                            return this.constructor.toObject(this, e);
                        }),
                        (e.prototype.toJSON = function() {
                            return this.constructor.toObject(this, i.util.toJSONOptions);
                        }),
                        e
                    );
                })()),
                e
            );
        })()),
        (e.DbRootRefProto = (function() {
            function e(e) {
                if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
            }
            (e.prototype.url = ""),
                (e.prototype.isCritical = !1),
                (e.prototype.requirements = null);
            var n = { 2: "keyhole.dbroot.RequirementProto" };
            return (
                p.push(n),
                (e.decode = function(e, r) {
                    e instanceof l || (e = l.create(e));
                    for (
                        var t = void 0 === r ? e.len : e.pos + r,
                            o = new c.keyhole.dbroot.DbRootRefProto();
                        e.pos < t;

                    ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                            case 2:
                                o.url = e.string();
                                break;
                            case 1:
                                o.isCritical = e.bool();
                                break;
                            case 3:
                                o.requirements = n[2].decode(e, e.uint32());
                                break;
                            default:
                                e.skipType(7 & a);
                        }
                    }
                    return o;
                }),
                (e.verify = function(e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (!s.isString(e.url)) return "url: string expected";
                    if (void 0 !== e.isCritical && "boolean" != typeof e.isCritical)
                        return "isCritical: boolean expected";
                    if (void 0 !== e.requirements && null !== e.requirements) {
                        var r = n[2].verify(e.requirements);
                        if (r) return "requirements." + r;
                    }
                    return null;
                }),
                (e.from = e.fromObject = function(e) {
                    if (e instanceof c.keyhole.dbroot.DbRootRefProto) return e;
                    var r = new c.keyhole.dbroot.DbRootRefProto();
                    if (
                        (void 0 !== e.url && null !== e.url && (r.url = String(e.url)),
                        void 0 !== e.isCritical &&
                            null !== e.isCritical &&
                            (r.isCritical = Boolean(e.isCritical)),
                        void 0 !== e.requirements && null !== e.requirements)
                    ) {
                        if ("object" != typeof e.requirements)
                            throw TypeError(
                                ".keyhole.dbroot.DbRootRefProto.requirements: object expected"
                            );
                        r.requirements = n[2].fromObject(e.requirements);
                    }
                    return r;
                }),
                (e.toObject = function(e, r) {
                    r || (r = {});
                    var t = {};
                    return (
                        r.defaults && ((t.url = ""), (t.isCritical = !1), (t.requirements = null)),
                        void 0 !== e.url &&
                            null !== e.url &&
                            e.hasOwnProperty("url") &&
                            (t.url = e.url),
                        void 0 !== e.isCritical &&
                            null !== e.isCritical &&
                            e.hasOwnProperty("isCritical") &&
                            (t.isCritical = e.isCritical),
                        void 0 !== e.requirements &&
                            null !== e.requirements &&
                            e.hasOwnProperty("requirements") &&
                            (t.requirements = n[2].toObject(e.requirements, r)),
                        t
                    );
                }),
                (e.prototype.toObject = function(e) {
                    return this.constructor.toObject(this, e);
                }),
                (e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, i.util.toJSONOptions);
                }),
                e
            );
        })()),
        (e.DatabaseVersionProto = ((O.prototype.quadtreeVersion = 0),
        (O.decode = function(e, r) {
            e instanceof l || (e = l.create(e));
            for (
                var t = void 0 === r ? e.len : e.pos + r,
                    o = new c.keyhole.dbroot.DatabaseVersionProto();
                e.pos < t;

            ) {
                var a = e.uint32();
                switch (a >>> 3) {
                    case 1:
                        o.quadtreeVersion = e.uint32();
                        break;
                    default:
                        e.skipType(7 & a);
                }
            }
            return o;
        }),
        (O.verify = function(e) {
            return "object" != typeof e || null === e
                ? "object expected"
                : s.isInteger(e.quadtreeVersion)
                ? null
                : "quadtreeVersion: integer expected";
        }),
        (O.from = O.fromObject = function(e) {
            if (e instanceof c.keyhole.dbroot.DatabaseVersionProto) return e;
            var r = new c.keyhole.dbroot.DatabaseVersionProto();
            return (
                void 0 !== e.quadtreeVersion &&
                    null !== e.quadtreeVersion &&
                    (r.quadtreeVersion = e.quadtreeVersion >>> 0),
                r
            );
        }),
        (O.toObject = function(e, r) {
            r || (r = {});
            var t = {};
            return (
                r.defaults && (t.quadtreeVersion = 0),
                void 0 !== e.quadtreeVersion &&
                    null !== e.quadtreeVersion &&
                    e.hasOwnProperty("quadtreeVersion") &&
                    (t.quadtreeVersion = e.quadtreeVersion),
                t
            );
        }),
        (O.prototype.toObject = function(e) {
            return this.constructor.toObject(this, e);
        }),
        (O.prototype.toJSON = function() {
            return this.constructor.toObject(this, i.util.toJSONOptions);
        }),
        O)),
        (e.DbRootProto = (function() {
            function e(e) {
                if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
            }
            (e.prototype.databaseName = null),
                (e.prototype.imageryPresent = !0),
                (e.prototype.protoImagery = !1),
                (e.prototype.terrainPresent = !1),
                (e.prototype.providerInfo = s.emptyArray),
                (e.prototype.nestedFeature = s.emptyArray),
                (e.prototype.styleAttribute = s.emptyArray),
                (e.prototype.styleMap = s.emptyArray),
                (e.prototype.endSnippet = null),
                (e.prototype.translationEntry = s.emptyArray),
                (e.prototype.language = "en"),
                (e.prototype.version = 5),
                (e.prototype.dbrootReference = s.emptyArray),
                (e.prototype.databaseVersion = null),
                (e.prototype.refreshTimeout = 0);
            var n = {
                0: "keyhole.dbroot.StringIdOrValueProto",
                4: "keyhole.dbroot.ProviderInfoProto",
                5: "keyhole.dbroot.NestedFeatureProto",
                6: "keyhole.dbroot.StyleAttributeProto",
                7: "keyhole.dbroot.StyleMapProto",
                8: "keyhole.dbroot.EndSnippetProto",
                9: "keyhole.dbroot.StringEntryProto",
                12: "keyhole.dbroot.DbRootRefProto",
                13: "keyhole.dbroot.DatabaseVersionProto"
            };
            return (
                p.push(n),
                (e.decode = function(e, r) {
                    e instanceof l || (e = l.create(e));
                    for (
                        var t = void 0 === r ? e.len : e.pos + r,
                            o = new c.keyhole.dbroot.DbRootProto();
                        e.pos < t;

                    ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                            case 15:
                                o.databaseName = n[0].decode(e, e.uint32());
                                break;
                            case 1:
                                o.imageryPresent = e.bool();
                                break;
                            case 14:
                                o.protoImagery = e.bool();
                                break;
                            case 2:
                                o.terrainPresent = e.bool();
                                break;
                            case 3:
                                (o.providerInfo && o.providerInfo.length) || (o.providerInfo = []),
                                    o.providerInfo.push(n[4].decode(e, e.uint32()));
                                break;
                            case 4:
                                (o.nestedFeature && o.nestedFeature.length) ||
                                    (o.nestedFeature = []),
                                    o.nestedFeature.push(n[5].decode(e, e.uint32()));
                                break;
                            case 5:
                                (o.styleAttribute && o.styleAttribute.length) ||
                                    (o.styleAttribute = []),
                                    o.styleAttribute.push(n[6].decode(e, e.uint32()));
                                break;
                            case 6:
                                (o.styleMap && o.styleMap.length) || (o.styleMap = []),
                                    o.styleMap.push(n[7].decode(e, e.uint32()));
                                break;
                            case 7:
                                o.endSnippet = n[8].decode(e, e.uint32());
                                break;
                            case 8:
                                (o.translationEntry && o.translationEntry.length) ||
                                    (o.translationEntry = []),
                                    o.translationEntry.push(n[9].decode(e, e.uint32()));
                                break;
                            case 9:
                                o.language = e.string();
                                break;
                            case 10:
                                o.version = e.int32();
                                break;
                            case 11:
                                (o.dbrootReference && o.dbrootReference.length) ||
                                    (o.dbrootReference = []),
                                    o.dbrootReference.push(n[12].decode(e, e.uint32()));
                                break;
                            case 13:
                                o.databaseVersion = n[13].decode(e, e.uint32());
                                break;
                            case 16:
                                o.refreshTimeout = e.int32();
                                break;
                            default:
                                e.skipType(7 & a);
                        }
                    }
                    return o;
                }),
                (e.verify = function(e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (
                        void 0 !== e.databaseName &&
                        null !== e.databaseName &&
                        (t = n[0].verify(e.databaseName))
                    )
                        return "databaseName." + t;
                    if (void 0 !== e.imageryPresent && "boolean" != typeof e.imageryPresent)
                        return "imageryPresent: boolean expected";
                    if (void 0 !== e.protoImagery && "boolean" != typeof e.protoImagery)
                        return "protoImagery: boolean expected";
                    if (void 0 !== e.terrainPresent && "boolean" != typeof e.terrainPresent)
                        return "terrainPresent: boolean expected";
                    if (void 0 !== e.providerInfo) {
                        if (!Array.isArray(e.providerInfo)) return "providerInfo: array expected";
                        for (var r = 0; r < e.providerInfo.length; ++r)
                            if ((t = n[4].verify(e.providerInfo[r]))) return "providerInfo." + t;
                    }
                    if (void 0 !== e.nestedFeature) {
                        if (!Array.isArray(e.nestedFeature)) return "nestedFeature: array expected";
                        for (r = 0; r < e.nestedFeature.length; ++r)
                            if ((t = n[5].verify(e.nestedFeature[r]))) return "nestedFeature." + t;
                    }
                    if (void 0 !== e.styleAttribute) {
                        if (!Array.isArray(e.styleAttribute))
                            return "styleAttribute: array expected";
                        for (r = 0; r < e.styleAttribute.length; ++r)
                            if ((t = n[6].verify(e.styleAttribute[r])))
                                return "styleAttribute." + t;
                    }
                    if (void 0 !== e.styleMap) {
                        if (!Array.isArray(e.styleMap)) return "styleMap: array expected";
                        for (r = 0; r < e.styleMap.length; ++r)
                            if ((t = n[7].verify(e.styleMap[r]))) return "styleMap." + t;
                    }
                    if (
                        void 0 !== e.endSnippet &&
                        null !== e.endSnippet &&
                        (t = n[8].verify(e.endSnippet))
                    )
                        return "endSnippet." + t;
                    if (void 0 !== e.translationEntry) {
                        if (!Array.isArray(e.translationEntry))
                            return "translationEntry: array expected";
                        for (r = 0; r < e.translationEntry.length; ++r)
                            if ((t = n[9].verify(e.translationEntry[r])))
                                return "translationEntry." + t;
                    }
                    if (void 0 !== e.language && !s.isString(e.language))
                        return "language: string expected";
                    if (void 0 !== e.version && !s.isInteger(e.version))
                        return "version: integer expected";
                    if (void 0 !== e.dbrootReference) {
                        if (!Array.isArray(e.dbrootReference))
                            return "dbrootReference: array expected";
                        for (r = 0; r < e.dbrootReference.length; ++r) {
                            var t;
                            if ((t = n[12].verify(e.dbrootReference[r])))
                                return "dbrootReference." + t;
                        }
                    }
                    return void 0 !== e.databaseVersion &&
                        null !== e.databaseVersion &&
                        (t = n[13].verify(e.databaseVersion))
                        ? "databaseVersion." + t
                        : void 0 === e.refreshTimeout || s.isInteger(e.refreshTimeout)
                        ? null
                        : "refreshTimeout: integer expected";
                }),
                (e.from = e.fromObject = function(e) {
                    if (e instanceof c.keyhole.dbroot.DbRootProto) return e;
                    var r = new c.keyhole.dbroot.DbRootProto();
                    if (void 0 !== e.databaseName && null !== e.databaseName) {
                        if ("object" != typeof e.databaseName)
                            throw TypeError(
                                ".keyhole.dbroot.DbRootProto.databaseName: object expected"
                            );
                        r.databaseName = n[0].fromObject(e.databaseName);
                    }
                    if (
                        (void 0 !== e.imageryPresent &&
                            null !== e.imageryPresent &&
                            (r.imageryPresent = Boolean(e.imageryPresent)),
                        void 0 !== e.protoImagery &&
                            null !== e.protoImagery &&
                            (r.protoImagery = Boolean(e.protoImagery)),
                        void 0 !== e.terrainPresent &&
                            null !== e.terrainPresent &&
                            (r.terrainPresent = Boolean(e.terrainPresent)),
                        e.providerInfo)
                    ) {
                        if (!Array.isArray(e.providerInfo))
                            throw TypeError(
                                ".keyhole.dbroot.DbRootProto.providerInfo: array expected"
                            );
                        r.providerInfo = [];
                        for (var t = 0; t < e.providerInfo.length; ++t) {
                            if ("object" != typeof e.providerInfo[t])
                                throw TypeError(
                                    ".keyhole.dbroot.DbRootProto.providerInfo: object expected"
                                );
                            r.providerInfo[t] = n[4].fromObject(e.providerInfo[t]);
                        }
                    }
                    if (e.nestedFeature) {
                        if (!Array.isArray(e.nestedFeature))
                            throw TypeError(
                                ".keyhole.dbroot.DbRootProto.nestedFeature: array expected"
                            );
                        for (r.nestedFeature = [], t = 0; t < e.nestedFeature.length; ++t) {
                            if ("object" != typeof e.nestedFeature[t])
                                throw TypeError(
                                    ".keyhole.dbroot.DbRootProto.nestedFeature: object expected"
                                );
                            r.nestedFeature[t] = n[5].fromObject(e.nestedFeature[t]);
                        }
                    }
                    if (e.styleAttribute) {
                        if (!Array.isArray(e.styleAttribute))
                            throw TypeError(
                                ".keyhole.dbroot.DbRootProto.styleAttribute: array expected"
                            );
                        for (r.styleAttribute = [], t = 0; t < e.styleAttribute.length; ++t) {
                            if ("object" != typeof e.styleAttribute[t])
                                throw TypeError(
                                    ".keyhole.dbroot.DbRootProto.styleAttribute: object expected"
                                );
                            r.styleAttribute[t] = n[6].fromObject(e.styleAttribute[t]);
                        }
                    }
                    if (e.styleMap) {
                        if (!Array.isArray(e.styleMap))
                            throw TypeError(".keyhole.dbroot.DbRootProto.styleMap: array expected");
                        for (r.styleMap = [], t = 0; t < e.styleMap.length; ++t) {
                            if ("object" != typeof e.styleMap[t])
                                throw TypeError(
                                    ".keyhole.dbroot.DbRootProto.styleMap: object expected"
                                );
                            r.styleMap[t] = n[7].fromObject(e.styleMap[t]);
                        }
                    }
                    if (void 0 !== e.endSnippet && null !== e.endSnippet) {
                        if ("object" != typeof e.endSnippet)
                            throw TypeError(
                                ".keyhole.dbroot.DbRootProto.endSnippet: object expected"
                            );
                        r.endSnippet = n[8].fromObject(e.endSnippet);
                    }
                    if (e.translationEntry) {
                        if (!Array.isArray(e.translationEntry))
                            throw TypeError(
                                ".keyhole.dbroot.DbRootProto.translationEntry: array expected"
                            );
                        for (r.translationEntry = [], t = 0; t < e.translationEntry.length; ++t) {
                            if ("object" != typeof e.translationEntry[t])
                                throw TypeError(
                                    ".keyhole.dbroot.DbRootProto.translationEntry: object expected"
                                );
                            r.translationEntry[t] = n[9].fromObject(e.translationEntry[t]);
                        }
                    }
                    if (
                        (void 0 !== e.language &&
                            null !== e.language &&
                            (r.language = String(e.language)),
                        void 0 !== e.version && null !== e.version && (r.version = 0 | e.version),
                        e.dbrootReference)
                    ) {
                        if (!Array.isArray(e.dbrootReference))
                            throw TypeError(
                                ".keyhole.dbroot.DbRootProto.dbrootReference: array expected"
                            );
                        for (r.dbrootReference = [], t = 0; t < e.dbrootReference.length; ++t) {
                            if ("object" != typeof e.dbrootReference[t])
                                throw TypeError(
                                    ".keyhole.dbroot.DbRootProto.dbrootReference: object expected"
                                );
                            r.dbrootReference[t] = n[12].fromObject(e.dbrootReference[t]);
                        }
                    }
                    if (void 0 !== e.databaseVersion && null !== e.databaseVersion) {
                        if ("object" != typeof e.databaseVersion)
                            throw TypeError(
                                ".keyhole.dbroot.DbRootProto.databaseVersion: object expected"
                            );
                        r.databaseVersion = n[13].fromObject(e.databaseVersion);
                    }
                    return (
                        void 0 !== e.refreshTimeout &&
                            null !== e.refreshTimeout &&
                            (r.refreshTimeout = 0 | e.refreshTimeout),
                        r
                    );
                }),
                (e.toObject = function(e, r) {
                    r || (r = {});
                    var t = {};
                    if (
                        ((r.arrays || r.defaults) &&
                            ((t.providerInfo = []),
                            (t.nestedFeature = []),
                            (t.styleAttribute = []),
                            (t.styleMap = []),
                            (t.translationEntry = []),
                            (t.dbrootReference = [])),
                        r.defaults &&
                            ((t.databaseName = null),
                            (t.imageryPresent = !0),
                            (t.protoImagery = !1),
                            (t.terrainPresent = !1),
                            (t.endSnippet = null),
                            (t.language = "en"),
                            (t.version = 5),
                            (t.databaseVersion = null),
                            (t.refreshTimeout = 0)),
                        void 0 !== e.databaseName &&
                            null !== e.databaseName &&
                            e.hasOwnProperty("databaseName") &&
                            (t.databaseName = n[0].toObject(e.databaseName, r)),
                        void 0 !== e.imageryPresent &&
                            null !== e.imageryPresent &&
                            e.hasOwnProperty("imageryPresent") &&
                            (t.imageryPresent = e.imageryPresent),
                        void 0 !== e.protoImagery &&
                            null !== e.protoImagery &&
                            e.hasOwnProperty("protoImagery") &&
                            (t.protoImagery = e.protoImagery),
                        void 0 !== e.terrainPresent &&
                            null !== e.terrainPresent &&
                            e.hasOwnProperty("terrainPresent") &&
                            (t.terrainPresent = e.terrainPresent),
                        void 0 !== e.providerInfo &&
                            null !== e.providerInfo &&
                            e.hasOwnProperty("providerInfo"))
                    ) {
                        t.providerInfo = [];
                        for (var o = 0; o < e.providerInfo.length; ++o)
                            t.providerInfo[o] = n[4].toObject(e.providerInfo[o], r);
                    }
                    if (
                        void 0 !== e.nestedFeature &&
                        null !== e.nestedFeature &&
                        e.hasOwnProperty("nestedFeature")
                    )
                        for (t.nestedFeature = [], o = 0; o < e.nestedFeature.length; ++o)
                            t.nestedFeature[o] = n[5].toObject(e.nestedFeature[o], r);
                    if (
                        void 0 !== e.styleAttribute &&
                        null !== e.styleAttribute &&
                        e.hasOwnProperty("styleAttribute")
                    )
                        for (t.styleAttribute = [], o = 0; o < e.styleAttribute.length; ++o)
                            t.styleAttribute[o] = n[6].toObject(e.styleAttribute[o], r);
                    if (
                        void 0 !== e.styleMap &&
                        null !== e.styleMap &&
                        e.hasOwnProperty("styleMap")
                    )
                        for (t.styleMap = [], o = 0; o < e.styleMap.length; ++o)
                            t.styleMap[o] = n[7].toObject(e.styleMap[o], r);
                    if (
                        (void 0 !== e.endSnippet &&
                            null !== e.endSnippet &&
                            e.hasOwnProperty("endSnippet") &&
                            (t.endSnippet = n[8].toObject(e.endSnippet, r)),
                        void 0 !== e.translationEntry &&
                            null !== e.translationEntry &&
                            e.hasOwnProperty("translationEntry"))
                    )
                        for (t.translationEntry = [], o = 0; o < e.translationEntry.length; ++o)
                            t.translationEntry[o] = n[9].toObject(e.translationEntry[o], r);
                    if (
                        (void 0 !== e.language &&
                            null !== e.language &&
                            e.hasOwnProperty("language") &&
                            (t.language = e.language),
                        void 0 !== e.version &&
                            null !== e.version &&
                            e.hasOwnProperty("version") &&
                            (t.version = e.version),
                        void 0 !== e.dbrootReference &&
                            null !== e.dbrootReference &&
                            e.hasOwnProperty("dbrootReference"))
                    )
                        for (t.dbrootReference = [], o = 0; o < e.dbrootReference.length; ++o)
                            t.dbrootReference[o] = n[12].toObject(e.dbrootReference[o], r);
                    return (
                        void 0 !== e.databaseVersion &&
                            null !== e.databaseVersion &&
                            e.hasOwnProperty("databaseVersion") &&
                            (t.databaseVersion = n[13].toObject(e.databaseVersion, r)),
                        void 0 !== e.refreshTimeout &&
                            null !== e.refreshTimeout &&
                            e.hasOwnProperty("refreshTimeout") &&
                            (t.refreshTimeout = e.refreshTimeout),
                        t
                    );
                }),
                (e.prototype.toObject = function(e) {
                    return this.constructor.toObject(this, e);
                }),
                (e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, i.util.toJSONOptions);
                }),
                e
            );
        })()),
        (e.EncryptedDbRootProto = (function() {
            function e(e) {
                if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) this[r[t]] = e[r[t]];
            }
            (e.prototype.encryptionType = 0),
                (e.prototype.encryptionData = s.newBuffer([])),
                (e.prototype.dbrootData = s.newBuffer([]));
            var r,
                o = { 0: "keyhole.dbroot.EncryptedDbRootProto.EncryptionType" };
            return (
                p.push(o),
                (e.decode = function(e, r) {
                    e instanceof l || (e = l.create(e));
                    for (
                        var t = void 0 === r ? e.len : e.pos + r,
                            o = new c.keyhole.dbroot.EncryptedDbRootProto();
                        e.pos < t;

                    ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                            case 1:
                                o.encryptionType = e.uint32();
                                break;
                            case 2:
                                o.encryptionData = e.bytes();
                                break;
                            case 3:
                                o.dbrootData = e.bytes();
                                break;
                            default:
                                e.skipType(7 & a);
                        }
                    }
                    return o;
                }),
                (e.verify = function(e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (void 0 !== e.encryptionType)
                        switch (e.encryptionType) {
                            default:
                                return "encryptionType: enum value expected";
                            case 0:
                        }
                    return void 0 === e.encryptionData ||
                        (e.encryptionData && "number" == typeof e.encryptionData.length) ||
                        s.isString(e.encryptionData)
                        ? void 0 === e.dbrootData ||
                          (e.dbrootData && "number" == typeof e.dbrootData.length) ||
                          s.isString(e.dbrootData)
                            ? null
                            : "dbrootData: buffer expected"
                        : "encryptionData: buffer expected";
                }),
                (e.from = e.fromObject = function(e) {
                    if (e instanceof c.keyhole.dbroot.EncryptedDbRootProto) return e;
                    var r = new c.keyhole.dbroot.EncryptedDbRootProto();
                    switch (e.encryptionType) {
                        case "ENCRYPTION_XOR":
                        case 0:
                            r.encryptionType = 0;
                    }
                    return (
                        void 0 !== e.encryptionData &&
                            null !== e.encryptionData &&
                            ("string" == typeof e.encryptionData
                                ? s.base64.decode(
                                      e.encryptionData,
                                      (r.encryptionData = s.newBuffer(
                                          s.base64.length(e.encryptionData)
                                      )),
                                      0
                                  )
                                : e.encryptionData.length && (r.encryptionData = e.encryptionData)),
                        void 0 !== e.dbrootData &&
                            null !== e.dbrootData &&
                            ("string" == typeof e.dbrootData
                                ? s.base64.decode(
                                      e.dbrootData,
                                      (r.dbrootData = s.newBuffer(s.base64.length(e.dbrootData))),
                                      0
                                  )
                                : e.dbrootData.length && (r.dbrootData = e.dbrootData)),
                        r
                    );
                }),
                (e.toObject = function(e, r) {
                    r || (r = {});
                    var t = {};
                    return (
                        r.defaults &&
                            ((t.encryptionType = r.enums === String ? "ENCRYPTION_XOR" : 0),
                            (t.encryptionData = r.bytes === String ? "" : []),
                            (t.dbrootData = r.bytes === String ? "" : [])),
                        void 0 !== e.encryptionType &&
                            null !== e.encryptionType &&
                            e.hasOwnProperty("encryptionType") &&
                            (t.encryptionType =
                                r.enums === String ? o[0][e.encryptionType] : e.encryptionType),
                        void 0 !== e.encryptionData &&
                            null !== e.encryptionData &&
                            e.hasOwnProperty("encryptionData") &&
                            (t.encryptionData =
                                r.bytes === String
                                    ? s.base64.encode(e.encryptionData, 0, e.encryptionData.length)
                                    : r.bytes === Array
                                    ? Array.prototype.slice.call(e.encryptionData)
                                    : e.encryptionData),
                        void 0 !== e.dbrootData &&
                            null !== e.dbrootData &&
                            e.hasOwnProperty("dbrootData") &&
                            (t.dbrootData =
                                r.bytes === String
                                    ? s.base64.encode(e.dbrootData, 0, e.dbrootData.length)
                                    : r.bytes === Array
                                    ? Array.prototype.slice.call(e.dbrootData)
                                    : e.dbrootData),
                        t
                    );
                }),
                (e.prototype.toObject = function(e) {
                    return this.constructor.toObject(this, e);
                }),
                (e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, i.util.toJSONOptions);
                }),
                (e.EncryptionType = (((r = Object.create({})).ENCRYPTION_XOR = 0), r)),
                e
            );
        })()),
        e)),
        r)),
        s.lazyResolve(c, p),
        c.keyhole.dbroot
    );
};

/**
 * Cesium - https://github.com/AnalyticalGraphicsInc/cesium
 *
 * Copyright 2011-2017 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md for full licensing details.
 */
/**
  @license
  when.js - https://github.com/cujojs/when

  MIT License (c) copyright B Cavalier & J Hann

 * A lightweight CommonJS Promises/A and when() implementation
 * when is part of the cujo.js family of libraries (http://cujojs.com/)
 *
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @version 1.7.1
 */

/**
@license
mersenne-twister.js - https://gist.github.com/banksean/300494

   Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
   All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions
   are met:

     1. Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.

     2. Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.

     3. The names of its contributors may not be used to endorse or promote
        products derived from this software without specific prior written
        permission.

   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
   "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
   A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
   CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
   EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
   PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
   PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

!(function() {
    define("Core/defined", [], function() {
        "use strict";
        function e(e) {
            return void 0 !== e && null !== e;
        }
        return e;
    }),
        define("Core/freezeObject", ["./defined"], function(e) {
            "use strict";
            var r = Object.freeze;
            return (
                e(r) ||
                    (r = function(e) {
                        return e;
                    }),
                r
            );
        }),
        define("Core/defaultValue", ["./freezeObject"], function(e) {
            "use strict";
            function r(e, r) {
                return void 0 !== e && null !== e ? e : r;
            }
            return (r.EMPTY_OBJECT = e({})), r;
        }),
        define("Core/DeveloperError", ["./defined"], function(e) {
            "use strict";
            function r(e) {
                (this.name = "DeveloperError"), (this.message = e);
                var r;
                try {
                    throw new Error();
                } catch (e) {
                    r = e.stack;
                }
                this.stack = r;
            }
            return (
                e(Object.create) &&
                    ((r.prototype = Object.create(Error.prototype)), (r.prototype.constructor = r)),
                (r.prototype.toString = function() {
                    var r = this.name + ": " + this.message;
                    return e(this.stack) && (r += "\n" + this.stack.toString()), r;
                }),
                (r.throwInstantiationError = function() {
                    throw new r(
                        "This function defines an interface and should not be called directly."
                    );
                }),
                r
            );
        }),
        define("Core/defineProperties", ["./defined"], function(e) {
            "use strict";
            var r = (function() {
                    try {
                        return "x" in Object.defineProperty({}, "x", {});
                    } catch (e) {
                        return !1;
                    }
                })(),
                t = Object.defineProperties;
            return (
                (r && e(t)) ||
                    (t = function(e) {
                        return e;
                    }),
                t
            );
        }),
        define("Core/Fullscreen", ["./defined", "./defineProperties"], function(e, r) {
            "use strict";
            var t,
                E = {
                    requestFullscreen: void 0,
                    exitFullscreen: void 0,
                    fullscreenEnabled: void 0,
                    fullscreenElement: void 0,
                    fullscreenchange: void 0,
                    fullscreenerror: void 0
                },
                n = {};
            return (
                r(n, {
                    element: {
                        get: function() {
                            if (n.supportsFullscreen()) return document[E.fullscreenElement];
                        }
                    },
                    changeEventName: {
                        get: function() {
                            if (n.supportsFullscreen()) return E.fullscreenchange;
                        }
                    },
                    errorEventName: {
                        get: function() {
                            if (n.supportsFullscreen()) return E.fullscreenerror;
                        }
                    },
                    enabled: {
                        get: function() {
                            if (n.supportsFullscreen()) return document[E.fullscreenEnabled];
                        }
                    },
                    fullscreen: {
                        get: function() {
                            if (n.supportsFullscreen()) return null !== n.element;
                        }
                    }
                }),
                (n.supportsFullscreen = function() {
                    if (e(t)) return t;
                    t = !1;
                    var r = document.body;
                    if ("function" == typeof r.requestFullscreen)
                        return (
                            (E.requestFullscreen = "requestFullscreen"),
                            (E.exitFullscreen = "exitFullscreen"),
                            (E.fullscreenEnabled = "fullscreenEnabled"),
                            (E.fullscreenElement = "fullscreenElement"),
                            (E.fullscreenchange = "fullscreenchange"),
                            (E.fullscreenerror = "fullscreenerror"),
                            (t = !0)
                        );
                    for (
                        var n, _ = ["webkit", "moz", "o", "ms", "khtml"], T = 0, R = _.length;
                        T < R;
                        ++T
                    ) {
                        var A = _[T];
                        (n = A + "RequestFullscreen"),
                            "function" == typeof r[n]
                                ? ((E.requestFullscreen = n), (t = !0))
                                : ((n = A + "RequestFullScreen"),
                                  "function" == typeof r[n] &&
                                      ((E.requestFullscreen = n), (t = !0))),
                            (n = A + "ExitFullscreen"),
                            "function" == typeof document[n]
                                ? (E.exitFullscreen = n)
                                : ((n = A + "CancelFullScreen"),
                                  "function" == typeof document[n] && (E.exitFullscreen = n)),
                            (n = A + "FullscreenEnabled"),
                            void 0 !== document[n]
                                ? (E.fullscreenEnabled = n)
                                : ((n = A + "FullScreenEnabled"),
                                  void 0 !== document[n] && (E.fullscreenEnabled = n)),
                            (n = A + "FullscreenElement"),
                            void 0 !== document[n]
                                ? (E.fullscreenElement = n)
                                : ((n = A + "FullScreenElement"),
                                  void 0 !== document[n] && (E.fullscreenElement = n)),
                            (n = A + "fullscreenchange"),
                            void 0 !== document["on" + n] &&
                                ("ms" === A && (n = "MSFullscreenChange"),
                                (E.fullscreenchange = n)),
                            (n = A + "fullscreenerror"),
                            void 0 !== document["on" + n] &&
                                ("ms" === A && (n = "MSFullscreenError"), (E.fullscreenerror = n));
                    }
                    return t;
                }),
                (n.requestFullscreen = function(e, r) {
                    n.supportsFullscreen() && e[E.requestFullscreen]({ vrDisplay: r });
                }),
                (n.exitFullscreen = function() {
                    n.supportsFullscreen() && document[E.exitFullscreen]();
                }),
                n
            );
        }),
        (function(e) {
            "use strict";
            e("ThirdParty/when", [], function() {
                function e(e, t, E, n) {
                    return r(e).then(t, E, n);
                }
                function r(e) {
                    var r, t;
                    return (
                        e instanceof E
                            ? (r = e)
                            : R(e)
                            ? ((t = T()),
                              e.then(
                                  function(e) {
                                      t.resolve(e);
                                  },
                                  function(e) {
                                      t.reject(e);
                                  },
                                  function(e) {
                                      t.progress(e);
                                  }
                              ),
                              (r = t.promise))
                            : (r = n(e)),
                        r
                    );
                }
                function t(r) {
                    return e(r, _);
                }
                function E(e) {
                    this.then = e;
                }
                function n(e) {
                    return new E(function(t) {
                        try {
                            return r(t ? t(e) : e);
                        } catch (e) {
                            return _(e);
                        }
                    });
                }
                function _(e) {
                    return new E(function(t, E) {
                        try {
                            return E ? r(E(e)) : _(e);
                        } catch (e) {
                            return _(e);
                        }
                    });
                }
                function T() {
                    function e(e, r, t) {
                        return a(e, r, t);
                    }
                    function t(e) {
                        return I(e);
                    }
                    function n(e) {
                        return I(_(e));
                    }
                    function R(e) {
                        return N(e);
                    }
                    var A, o, i, u, a, N, I;
                    return (
                        (o = new E(e)),
                        (A = {
                            then: e,
                            resolve: t,
                            reject: n,
                            progress: R,
                            promise: o,
                            resolver: { resolve: t, reject: n, progress: R }
                        }),
                        (i = []),
                        (u = []),
                        (a = function(e, r, t) {
                            var E, n;
                            return (
                                (E = T()),
                                (n =
                                    "function" == typeof t
                                        ? function(e) {
                                              try {
                                                  E.progress(t(e));
                                              } catch (e) {
                                                  E.progress(e);
                                              }
                                          }
                                        : function(e) {
                                              E.progress(e);
                                          }),
                                i.push(function(t) {
                                    t.then(e, r).then(E.resolve, E.reject, n);
                                }),
                                u.push(n),
                                E.promise
                            );
                        }),
                        (N = function(e) {
                            return s(u, e), e;
                        }),
                        (I = function(e) {
                            return (
                                (e = r(e)), (a = e.then), (I = r), (N = c), s(i, e), (u = i = F), e
                            );
                        }),
                        A
                    );
                }
                function R(e) {
                    return e && "function" == typeof e.then;
                }
                function A(r, t, E, n, _) {
                    return (
                        S(2, arguments),
                        e(r, function(r) {
                            function R(e) {
                                s(e);
                            }
                            function A(e) {
                                I(e);
                            }
                            var o, i, u, a, N, I, s, S, O, f;
                            if (
                                ((O = r.length >>> 0),
                                (o = Math.max(0, Math.min(t, O))),
                                (u = []),
                                (i = O - o + 1),
                                (a = []),
                                (N = T()),
                                o)
                            )
                                for (
                                    S = N.progress,
                                        s = function(e) {
                                            a.push(e), --i || ((I = s = c), N.reject(a));
                                        },
                                        I = function(e) {
                                            u.push(e), --o || ((I = s = c), N.resolve(u));
                                        },
                                        f = 0;
                                    f < O;
                                    ++f
                                )
                                    f in r && e(r[f], A, R, S);
                            else N.resolve(u);
                            return N.then(E, n, _);
                        })
                    );
                }
                function o(e, r, t, E) {
                    function n(e) {
                        return r ? r(e[0]) : e[0];
                    }
                    return A(e, 1, n, t, E);
                }
                function i(e, r, t, E) {
                    return S(1, arguments), a(e, O).then(r, t, E);
                }
                function u() {
                    return a(arguments, O);
                }
                function a(r, t) {
                    return e(r, function(r) {
                        var E, n, _, R, A, o;
                        if (((_ = n = r.length >>> 0), (E = []), (o = T()), _))
                            for (
                                R = function(r, n) {
                                    e(r, t).then(function(e) {
                                        (E[n] = e), --_ || o.resolve(E);
                                    }, o.reject);
                                },
                                    A = 0;
                                A < n;
                                A++
                            )
                                A in r ? R(r[A], A) : --_;
                        else o.resolve(E);
                        return o.promise;
                    });
                }
                function N(r, t) {
                    var E = M.call(arguments, 1);
                    return e(r, function(r) {
                        var n;
                        return (
                            (n = r.length),
                            (E[0] = function(r, E, _) {
                                return e(r, function(r) {
                                    return e(E, function(e) {
                                        return t(r, e, _, n);
                                    });
                                });
                            }),
                            f.apply(r, E)
                        );
                    });
                }
                function I(r, t, E) {
                    var n = arguments.length > 2;
                    return e(
                        r,
                        function(e) {
                            return (e = n ? E : e), t.resolve(e), e;
                        },
                        function(e) {
                            return t.reject(e), _(e);
                        },
                        t.progress
                    );
                }
                function s(e, r) {
                    for (var t, E = 0; (t = e[E++]); ) t(r);
                }
                function S(e, r) {
                    for (var t, E = r.length; E > e; )
                        if (null != (t = r[--E]) && "function" != typeof t)
                            throw new Error("arg " + E + " must be a function");
                }
                function c() {}
                function O(e) {
                    return e;
                }
                var f, M, F;
                return (
                    (e.defer = T),
                    (e.resolve = r),
                    (e.reject = t),
                    (e.join = u),
                    (e.all = i),
                    (e.map = a),
                    (e.reduce = N),
                    (e.any = o),
                    (e.some = A),
                    (e.chain = I),
                    (e.isPromise = R),
                    (E.prototype = {
                        always: function(e, r) {
                            return this.then(e, e, r);
                        },
                        otherwise: function(e) {
                            return this.then(F, e);
                        },
                        yield: function(e) {
                            return this.then(function() {
                                return e;
                            });
                        },
                        spread: function(e) {
                            return this.then(function(r) {
                                return i(r, function(r) {
                                    return e.apply(F, r);
                                });
                            });
                        }
                    }),
                    (M = [].slice),
                    (f =
                        [].reduce ||
                        function(e) {
                            var r, t, E, n, _;
                            if (
                                ((_ = 0),
                                (r = Object(this)),
                                (n = r.length >>> 0),
                                (t = arguments),
                                t.length <= 1)
                            )
                                for (;;) {
                                    if (_ in r) {
                                        E = r[_++];
                                        break;
                                    }
                                    if (++_ >= n) throw new TypeError();
                                }
                            else E = t[1];
                            for (; _ < n; ++_) _ in r && (E = e(E, r[_], _, r));
                            return E;
                        }),
                    e
                );
            });
        })(
            "function" == typeof define && define.amd
                ? define
                : function(e) {
                      "object" == typeof exports ? (module.exports = e()) : (this.when = e());
                  }
        ),
        define("Core/FeatureDetection", [
            "./defaultValue",
            "./defined",
            "./defineProperties",
            "./DeveloperError",
            "./Fullscreen",
            "../ThirdParty/when"
        ], function(e, r, t, E, n, _) {
            "use strict";
            function T(e) {
                for (var r = e.split("."), t = 0, E = r.length; t < E; ++t)
                    r[t] = parseInt(r[t], 10);
                return r;
            }
            function R() {
                if (!r(l) && ((l = !1), !s())) {
                    var e = / Chrome\/([\.0-9]+)/.exec(D.userAgent);
                    null !== e && ((l = !0), (P = T(e[1])));
                }
                return l;
            }
            function A() {
                return R() && P;
            }
            function o() {
                if (!r(L) && ((L = !1), !R() && !s() && / Safari\/[\.0-9]+/.test(D.userAgent))) {
                    var e = / Version\/([\.0-9]+)/.exec(D.userAgent);
                    null !== e && ((L = !0), (B = T(e[1])));
                }
                return L;
            }
            function i() {
                return o() && B;
            }
            function u() {
                if (!r(h)) {
                    h = !1;
                    var e = / AppleWebKit\/([\.0-9]+)(\+?)/.exec(D.userAgent);
                    null !== e && ((h = !0), (d = T(e[1])), (d.isNightly = !!e[2]));
                }
                return h;
            }
            function a() {
                return u() && d;
            }
            function N() {
                if (!r(G)) {
                    G = !1;
                    var e;
                    "Microsoft Internet Explorer" === D.appName
                        ? null !== (e = /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(D.userAgent)) &&
                          ((G = !0), (p = T(e[1])))
                        : "Netscape" === D.appName &&
                          null !== (e = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(D.userAgent)) &&
                          ((G = !0), (p = T(e[1])));
                }
                return G;
            }
            function I() {
                return N() && p;
            }
            function s() {
                if (!r(y)) {
                    y = !1;
                    var e = / Edge\/([\.0-9]+)/.exec(D.userAgent);
                    null !== e && ((y = !0), (m = T(e[1])));
                }
                return y;
            }
            function S() {
                return s() && m;
            }
            function c() {
                if (!r(X)) {
                    X = !1;
                    var e = /Firefox\/([\.0-9]+)/.exec(D.userAgent);
                    null !== e && ((X = !0), (v = T(e[1])));
                }
                return X;
            }
            function O() {
                return r(w) || (w = /Windows/i.test(D.appVersion)), w;
            }
            function f() {
                return c() && v;
            }
            function M() {
                return (
                    r(H) ||
                        (H =
                            !c() &&
                            "undefined" != typeof PointerEvent &&
                            (!r(D.pointerEnabled) || D.pointerEnabled)),
                    H
                );
            }
            function F() {
                if (!r(g)) {
                    var e = document.createElement("canvas");
                    e.setAttribute(
                        "style",
                        "image-rendering: -moz-crisp-edges;image-rendering: pixelated;"
                    );
                    var t = e.style.imageRendering;
                    (g = r(t) && "" !== t), g && (V = t);
                }
                return g;
            }
            function U() {
                return F() ? V : void 0;
            }
            function C() {
                return C._result;
            }
            var D;
            D = "undefined" != typeof navigator ? navigator : {};
            var l, P, L, B, h, d, G, p, y, m, X, v, w, H, V, g;
            (C._promise = void 0),
                (C._result = void 0),
                (C.initialize = function() {
                    if (r(C._promise)) return C._promise;
                    var e = _.defer();
                    if (((C._promise = e.promise), s()))
                        return (C._result = !1), e.resolve(C._result), e.promise;
                    var t = new Image();
                    return (
                        (t.onload = function() {
                            (C._result = t.width > 0 && t.height > 0), e.resolve(C._result);
                        }),
                        (t.onerror = function() {
                            (C._result = !1), e.resolve(C._result);
                        }),
                        (t.src =
                            "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"),
                        e.promise
                    );
                }),
                t(C, {
                    initialized: {
                        get: function() {
                            return r(C._result);
                        }
                    }
                });
            var b = [];
            "undefined" != typeof ArrayBuffer &&
                (b.push(
                    Int8Array,
                    Uint8Array,
                    Int16Array,
                    Uint16Array,
                    Int32Array,
                    Uint32Array,
                    Float32Array,
                    Float64Array
                ),
                "undefined" != typeof Uint8ClampedArray && b.push(Uint8ClampedArray),
                "undefined" != typeof CanvasPixelArray && b.push(CanvasPixelArray));
            var Y = {
                isChrome: R,
                chromeVersion: A,
                isSafari: o,
                safariVersion: i,
                isWebkit: u,
                webkitVersion: a,
                isInternetExplorer: N,
                internetExplorerVersion: I,
                isEdge: s,
                edgeVersion: S,
                isFirefox: c,
                firefoxVersion: f,
                isWindows: O,
                hardwareConcurrency: e(D.hardwareConcurrency, 3),
                supportsPointerEvents: M,
                supportsImageRenderingPixelated: F,
                supportsWebP: C,
                imageRenderingValue: U,
                typedArrayTypes: b
            };
            return (
                (Y.supportsFullscreen = function() {
                    return n.supportsFullscreen();
                }),
                (Y.supportsTypedArrays = function() {
                    return "undefined" != typeof ArrayBuffer;
                }),
                (Y.supportsWebWorkers = function() {
                    return "undefined" != typeof Worker;
                }),
                (Y.supportsWebAssembly = function() {
                    return "undefined" != typeof WebAssembly && !Y.isEdge();
                }),
                Y
            );
        }),
        define("Core/WebGLConstants", ["./freezeObject"], function(e) {
            "use strict";
            return e({
                DEPTH_BUFFER_BIT: 256,
                STENCIL_BUFFER_BIT: 1024,
                COLOR_BUFFER_BIT: 16384,
                POINTS: 0,
                LINES: 1,
                LINE_LOOP: 2,
                LINE_STRIP: 3,
                TRIANGLES: 4,
                TRIANGLE_STRIP: 5,
                TRIANGLE_FAN: 6,
                ZERO: 0,
                ONE: 1,
                SRC_COLOR: 768,
                ONE_MINUS_SRC_COLOR: 769,
                SRC_ALPHA: 770,
                ONE_MINUS_SRC_ALPHA: 771,
                DST_ALPHA: 772,
                ONE_MINUS_DST_ALPHA: 773,
                DST_COLOR: 774,
                ONE_MINUS_DST_COLOR: 775,
                SRC_ALPHA_SATURATE: 776,
                FUNC_ADD: 32774,
                BLEND_EQUATION: 32777,
                BLEND_EQUATION_RGB: 32777,
                BLEND_EQUATION_ALPHA: 34877,
                FUNC_SUBTRACT: 32778,
                FUNC_REVERSE_SUBTRACT: 32779,
                BLEND_DST_RGB: 32968,
                BLEND_SRC_RGB: 32969,
                BLEND_DST_ALPHA: 32970,
                BLEND_SRC_ALPHA: 32971,
                CONSTANT_COLOR: 32769,
                ONE_MINUS_CONSTANT_COLOR: 32770,
                CONSTANT_ALPHA: 32771,
                ONE_MINUS_CONSTANT_ALPHA: 32772,
                BLEND_COLOR: 32773,
                ARRAY_BUFFER: 34962,
                ELEMENT_ARRAY_BUFFER: 34963,
                ARRAY_BUFFER_BINDING: 34964,
                ELEMENT_ARRAY_BUFFER_BINDING: 34965,
                STREAM_DRAW: 35040,
                STATIC_DRAW: 35044,
                DYNAMIC_DRAW: 35048,
                BUFFER_SIZE: 34660,
                BUFFER_USAGE: 34661,
                CURRENT_VERTEX_ATTRIB: 34342,
                FRONT: 1028,
                BACK: 1029,
                FRONT_AND_BACK: 1032,
                CULL_FACE: 2884,
                BLEND: 3042,
                DITHER: 3024,
                STENCIL_TEST: 2960,
                DEPTH_TEST: 2929,
                SCISSOR_TEST: 3089,
                POLYGON_OFFSET_FILL: 32823,
                SAMPLE_ALPHA_TO_COVERAGE: 32926,
                SAMPLE_COVERAGE: 32928,
                NO_ERROR: 0,
                INVALID_ENUM: 1280,
                INVALID_VALUE: 1281,
                INVALID_OPERATION: 1282,
                OUT_OF_MEMORY: 1285,
                CW: 2304,
                CCW: 2305,
                LINE_WIDTH: 2849,
                ALIASED_POINT_SIZE_RANGE: 33901,
                ALIASED_LINE_WIDTH_RANGE: 33902,
                CULL_FACE_MODE: 2885,
                FRONT_FACE: 2886,
                DEPTH_RANGE: 2928,
                DEPTH_WRITEMASK: 2930,
                DEPTH_CLEAR_VALUE: 2931,
                DEPTH_FUNC: 2932,
                STENCIL_CLEAR_VALUE: 2961,
                STENCIL_FUNC: 2962,
                STENCIL_FAIL: 2964,
                STENCIL_PASS_DEPTH_FAIL: 2965,
                STENCIL_PASS_DEPTH_PASS: 2966,
                STENCIL_REF: 2967,
                STENCIL_VALUE_MASK: 2963,
                STENCIL_WRITEMASK: 2968,
                STENCIL_BACK_FUNC: 34816,
                STENCIL_BACK_FAIL: 34817,
                STENCIL_BACK_PASS_DEPTH_FAIL: 34818,
                STENCIL_BACK_PASS_DEPTH_PASS: 34819,
                STENCIL_BACK_REF: 36003,
                STENCIL_BACK_VALUE_MASK: 36004,
                STENCIL_BACK_WRITEMASK: 36005,
                VIEWPORT: 2978,
                SCISSOR_BOX: 3088,
                COLOR_CLEAR_VALUE: 3106,
                COLOR_WRITEMASK: 3107,
                UNPACK_ALIGNMENT: 3317,
                PACK_ALIGNMENT: 3333,
                MAX_TEXTURE_SIZE: 3379,
                MAX_VIEWPORT_DIMS: 3386,
                SUBPIXEL_BITS: 3408,
                RED_BITS: 3410,
                GREEN_BITS: 3411,
                BLUE_BITS: 3412,
                ALPHA_BITS: 3413,
                DEPTH_BITS: 3414,
                STENCIL_BITS: 3415,
                POLYGON_OFFSET_UNITS: 10752,
                POLYGON_OFFSET_FACTOR: 32824,
                TEXTURE_BINDING_2D: 32873,
                SAMPLE_BUFFERS: 32936,
                SAMPLES: 32937,
                SAMPLE_COVERAGE_VALUE: 32938,
                SAMPLE_COVERAGE_INVERT: 32939,
                COMPRESSED_TEXTURE_FORMATS: 34467,
                DONT_CARE: 4352,
                FASTEST: 4353,
                NICEST: 4354,
                GENERATE_MIPMAP_HINT: 33170,
                BYTE: 5120,
                UNSIGNED_BYTE: 5121,
                SHORT: 5122,
                UNSIGNED_SHORT: 5123,
                INT: 5124,
                UNSIGNED_INT: 5125,
                FLOAT: 5126,
                DEPTH_COMPONENT: 6402,
                ALPHA: 6406,
                RGB: 6407,
                RGBA: 6408,
                LUMINANCE: 6409,
                LUMINANCE_ALPHA: 6410,
                UNSIGNED_SHORT_4_4_4_4: 32819,
                UNSIGNED_SHORT_5_5_5_1: 32820,
                UNSIGNED_SHORT_5_6_5: 33635,
                FRAGMENT_SHADER: 35632,
                VERTEX_SHADER: 35633,
                MAX_VERTEX_ATTRIBS: 34921,
                MAX_VERTEX_UNIFORM_VECTORS: 36347,
                MAX_VARYING_VECTORS: 36348,
                MAX_COMBINED_TEXTURE_IMAGE_UNITS: 35661,
                MAX_VERTEX_TEXTURE_IMAGE_UNITS: 35660,
                MAX_TEXTURE_IMAGE_UNITS: 34930,
                MAX_FRAGMENT_UNIFORM_VECTORS: 36349,
                SHADER_TYPE: 35663,
                DELETE_STATUS: 35712,
                LINK_STATUS: 35714,
                VALIDATE_STATUS: 35715,
                ATTACHED_SHADERS: 35717,
                ACTIVE_UNIFORMS: 35718,
                ACTIVE_ATTRIBUTES: 35721,
                SHADING_LANGUAGE_VERSION: 35724,
                CURRENT_PROGRAM: 35725,
                NEVER: 512,
                LESS: 513,
                EQUAL: 514,
                LEQUAL: 515,
                GREATER: 516,
                NOTEQUAL: 517,
                GEQUAL: 518,
                ALWAYS: 519,
                KEEP: 7680,
                REPLACE: 7681,
                INCR: 7682,
                DECR: 7683,
                INVERT: 5386,
                INCR_WRAP: 34055,
                DECR_WRAP: 34056,
                VENDOR: 7936,
                RENDERER: 7937,
                VERSION: 7938,
                NEAREST: 9728,
                LINEAR: 9729,
                NEAREST_MIPMAP_NEAREST: 9984,
                LINEAR_MIPMAP_NEAREST: 9985,
                NEAREST_MIPMAP_LINEAR: 9986,
                LINEAR_MIPMAP_LINEAR: 9987,
                TEXTURE_MAG_FILTER: 10240,
                TEXTURE_MIN_FILTER: 10241,
                TEXTURE_WRAP_S: 10242,
                TEXTURE_WRAP_T: 10243,
                TEXTURE_2D: 3553,
                TEXTURE: 5890,
                TEXTURE_CUBE_MAP: 34067,
                TEXTURE_BINDING_CUBE_MAP: 34068,
                TEXTURE_CUBE_MAP_POSITIVE_X: 34069,
                TEXTURE_CUBE_MAP_NEGATIVE_X: 34070,
                TEXTURE_CUBE_MAP_POSITIVE_Y: 34071,
                TEXTURE_CUBE_MAP_NEGATIVE_Y: 34072,
                TEXTURE_CUBE_MAP_POSITIVE_Z: 34073,
                TEXTURE_CUBE_MAP_NEGATIVE_Z: 34074,
                MAX_CUBE_MAP_TEXTURE_SIZE: 34076,
                TEXTURE0: 33984,
                TEXTURE1: 33985,
                TEXTURE2: 33986,
                TEXTURE3: 33987,
                TEXTURE4: 33988,
                TEXTURE5: 33989,
                TEXTURE6: 33990,
                TEXTURE7: 33991,
                TEXTURE8: 33992,
                TEXTURE9: 33993,
                TEXTURE10: 33994,
                TEXTURE11: 33995,
                TEXTURE12: 33996,
                TEXTURE13: 33997,
                TEXTURE14: 33998,
                TEXTURE15: 33999,
                TEXTURE16: 34e3,
                TEXTURE17: 34001,
                TEXTURE18: 34002,
                TEXTURE19: 34003,
                TEXTURE20: 34004,
                TEXTURE21: 34005,
                TEXTURE22: 34006,
                TEXTURE23: 34007,
                TEXTURE24: 34008,
                TEXTURE25: 34009,
                TEXTURE26: 34010,
                TEXTURE27: 34011,
                TEXTURE28: 34012,
                TEXTURE29: 34013,
                TEXTURE30: 34014,
                TEXTURE31: 34015,
                ACTIVE_TEXTURE: 34016,
                REPEAT: 10497,
                CLAMP_TO_EDGE: 33071,
                MIRRORED_REPEAT: 33648,
                FLOAT_VEC2: 35664,
                FLOAT_VEC3: 35665,
                FLOAT_VEC4: 35666,
                INT_VEC2: 35667,
                INT_VEC3: 35668,
                INT_VEC4: 35669,
                BOOL: 35670,
                BOOL_VEC2: 35671,
                BOOL_VEC3: 35672,
                BOOL_VEC4: 35673,
                FLOAT_MAT2: 35674,
                FLOAT_MAT3: 35675,
                FLOAT_MAT4: 35676,
                SAMPLER_2D: 35678,
                SAMPLER_CUBE: 35680,
                VERTEX_ATTRIB_ARRAY_ENABLED: 34338,
                VERTEX_ATTRIB_ARRAY_SIZE: 34339,
                VERTEX_ATTRIB_ARRAY_STRIDE: 34340,
                VERTEX_ATTRIB_ARRAY_TYPE: 34341,
                VERTEX_ATTRIB_ARRAY_NORMALIZED: 34922,
                VERTEX_ATTRIB_ARRAY_POINTER: 34373,
                VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 34975,
                IMPLEMENTATION_COLOR_READ_TYPE: 35738,
                IMPLEMENTATION_COLOR_READ_FORMAT: 35739,
                COMPILE_STATUS: 35713,
                LOW_FLOAT: 36336,
                MEDIUM_FLOAT: 36337,
                HIGH_FLOAT: 36338,
                LOW_INT: 36339,
                MEDIUM_INT: 36340,
                HIGH_INT: 36341,
                FRAMEBUFFER: 36160,
                RENDERBUFFER: 36161,
                RGBA4: 32854,
                RGB5_A1: 32855,
                RGB565: 36194,
                DEPTH_COMPONENT16: 33189,
                STENCIL_INDEX: 6401,
                STENCIL_INDEX8: 36168,
                DEPTH_STENCIL: 34041,
                RENDERBUFFER_WIDTH: 36162,
                RENDERBUFFER_HEIGHT: 36163,
                RENDERBUFFER_INTERNAL_FORMAT: 36164,
                RENDERBUFFER_RED_SIZE: 36176,
                RENDERBUFFER_GREEN_SIZE: 36177,
                RENDERBUFFER_BLUE_SIZE: 36178,
                RENDERBUFFER_ALPHA_SIZE: 36179,
                RENDERBUFFER_DEPTH_SIZE: 36180,
                RENDERBUFFER_STENCIL_SIZE: 36181,
                FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 36048,
                FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 36049,
                FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 36050,
                FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 36051,
                COLOR_ATTACHMENT0: 36064,
                DEPTH_ATTACHMENT: 36096,
                STENCIL_ATTACHMENT: 36128,
                DEPTH_STENCIL_ATTACHMENT: 33306,
                NONE: 0,
                FRAMEBUFFER_COMPLETE: 36053,
                FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 36054,
                FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 36055,
                FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 36057,
                FRAMEBUFFER_UNSUPPORTED: 36061,
                FRAMEBUFFER_BINDING: 36006,
                RENDERBUFFER_BINDING: 36007,
                MAX_RENDERBUFFER_SIZE: 34024,
                INVALID_FRAMEBUFFER_OPERATION: 1286,
                UNPACK_FLIP_Y_WEBGL: 37440,
                UNPACK_PREMULTIPLY_ALPHA_WEBGL: 37441,
                CONTEXT_LOST_WEBGL: 37442,
                UNPACK_COLORSPACE_CONVERSION_WEBGL: 37443,
                BROWSER_DEFAULT_WEBGL: 37444,
                COMPRESSED_RGB_S3TC_DXT1_EXT: 33776,
                COMPRESSED_RGBA_S3TC_DXT1_EXT: 33777,
                COMPRESSED_RGBA_S3TC_DXT3_EXT: 33778,
                COMPRESSED_RGBA_S3TC_DXT5_EXT: 33779,
                COMPRESSED_RGB_PVRTC_4BPPV1_IMG: 35840,
                COMPRESSED_RGB_PVRTC_2BPPV1_IMG: 35841,
                COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: 35842,
                COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: 35843,
                COMPRESSED_RGB_ETC1_WEBGL: 36196,
                HALF_FLOAT_OES: 36193,
                DOUBLE: 5130,
                READ_BUFFER: 3074,
                UNPACK_ROW_LENGTH: 3314,
                UNPACK_SKIP_ROWS: 3315,
                UNPACK_SKIP_PIXELS: 3316,
                PACK_ROW_LENGTH: 3330,
                PACK_SKIP_ROWS: 3331,
                PACK_SKIP_PIXELS: 3332,
                COLOR: 6144,
                DEPTH: 6145,
                STENCIL: 6146,
                RED: 6403,
                RGB8: 32849,
                RGBA8: 32856,
                RGB10_A2: 32857,
                TEXTURE_BINDING_3D: 32874,
                UNPACK_SKIP_IMAGES: 32877,
                UNPACK_IMAGE_HEIGHT: 32878,
                TEXTURE_3D: 32879,
                TEXTURE_WRAP_R: 32882,
                MAX_3D_TEXTURE_SIZE: 32883,
                UNSIGNED_INT_2_10_10_10_REV: 33640,
                MAX_ELEMENTS_VERTICES: 33e3,
                MAX_ELEMENTS_INDICES: 33001,
                TEXTURE_MIN_LOD: 33082,
                TEXTURE_MAX_LOD: 33083,
                TEXTURE_BASE_LEVEL: 33084,
                TEXTURE_MAX_LEVEL: 33085,
                MIN: 32775,
                MAX: 32776,
                DEPTH_COMPONENT24: 33190,
                MAX_TEXTURE_LOD_BIAS: 34045,
                TEXTURE_COMPARE_MODE: 34892,
                TEXTURE_COMPARE_FUNC: 34893,
                CURRENT_QUERY: 34917,
                QUERY_RESULT: 34918,
                QUERY_RESULT_AVAILABLE: 34919,
                STREAM_READ: 35041,
                STREAM_COPY: 35042,
                STATIC_READ: 35045,
                STATIC_COPY: 35046,
                DYNAMIC_READ: 35049,
                DYNAMIC_COPY: 35050,
                MAX_DRAW_BUFFERS: 34852,
                DRAW_BUFFER0: 34853,
                DRAW_BUFFER1: 34854,
                DRAW_BUFFER2: 34855,
                DRAW_BUFFER3: 34856,
                DRAW_BUFFER4: 34857,
                DRAW_BUFFER5: 34858,
                DRAW_BUFFER6: 34859,
                DRAW_BUFFER7: 34860,
                DRAW_BUFFER8: 34861,
                DRAW_BUFFER9: 34862,
                DRAW_BUFFER10: 34863,
                DRAW_BUFFER11: 34864,
                DRAW_BUFFER12: 34865,
                DRAW_BUFFER13: 34866,
                DRAW_BUFFER14: 34867,
                DRAW_BUFFER15: 34868,
                MAX_FRAGMENT_UNIFORM_COMPONENTS: 35657,
                MAX_VERTEX_UNIFORM_COMPONENTS: 35658,
                SAMPLER_3D: 35679,
                SAMPLER_2D_SHADOW: 35682,
                FRAGMENT_SHADER_DERIVATIVE_HINT: 35723,
                PIXEL_PACK_BUFFER: 35051,
                PIXEL_UNPACK_BUFFER: 35052,
                PIXEL_PACK_BUFFER_BINDING: 35053,
                PIXEL_UNPACK_BUFFER_BINDING: 35055,
                FLOAT_MAT2x3: 35685,
                FLOAT_MAT2x4: 35686,
                FLOAT_MAT3x2: 35687,
                FLOAT_MAT3x4: 35688,
                FLOAT_MAT4x2: 35689,
                FLOAT_MAT4x3: 35690,
                SRGB: 35904,
                SRGB8: 35905,
                SRGB8_ALPHA8: 35907,
                COMPARE_REF_TO_TEXTURE: 34894,
                RGBA32F: 34836,
                RGB32F: 34837,
                RGBA16F: 34842,
                RGB16F: 34843,
                VERTEX_ATTRIB_ARRAY_INTEGER: 35069,
                MAX_ARRAY_TEXTURE_LAYERS: 35071,
                MIN_PROGRAM_TEXEL_OFFSET: 35076,
                MAX_PROGRAM_TEXEL_OFFSET: 35077,
                MAX_VARYING_COMPONENTS: 35659,
                TEXTURE_2D_ARRAY: 35866,
                TEXTURE_BINDING_2D_ARRAY: 35869,
                R11F_G11F_B10F: 35898,
                UNSIGNED_INT_10F_11F_11F_REV: 35899,
                RGB9_E5: 35901,
                UNSIGNED_INT_5_9_9_9_REV: 35902,
                TRANSFORM_FEEDBACK_BUFFER_MODE: 35967,
                MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: 35968,
                TRANSFORM_FEEDBACK_VARYINGS: 35971,
                TRANSFORM_FEEDBACK_BUFFER_START: 35972,
                TRANSFORM_FEEDBACK_BUFFER_SIZE: 35973,
                TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: 35976,
                RASTERIZER_DISCARD: 35977,
                MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: 35978,
                MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: 35979,
                INTERLEAVED_ATTRIBS: 35980,
                SEPARATE_ATTRIBS: 35981,
                TRANSFORM_FEEDBACK_BUFFER: 35982,
                TRANSFORM_FEEDBACK_BUFFER_BINDING: 35983,
                RGBA32UI: 36208,
                RGB32UI: 36209,
                RGBA16UI: 36214,
                RGB16UI: 36215,
                RGBA8UI: 36220,
                RGB8UI: 36221,
                RGBA32I: 36226,
                RGB32I: 36227,
                RGBA16I: 36232,
                RGB16I: 36233,
                RGBA8I: 36238,
                RGB8I: 36239,
                RED_INTEGER: 36244,
                RGB_INTEGER: 36248,
                RGBA_INTEGER: 36249,
                SAMPLER_2D_ARRAY: 36289,
                SAMPLER_2D_ARRAY_SHADOW: 36292,
                SAMPLER_CUBE_SHADOW: 36293,
                UNSIGNED_INT_VEC2: 36294,
                UNSIGNED_INT_VEC3: 36295,
                UNSIGNED_INT_VEC4: 36296,
                INT_SAMPLER_2D: 36298,
                INT_SAMPLER_3D: 36299,
                INT_SAMPLER_CUBE: 36300,
                INT_SAMPLER_2D_ARRAY: 36303,
                UNSIGNED_INT_SAMPLER_2D: 36306,
                UNSIGNED_INT_SAMPLER_3D: 36307,
                UNSIGNED_INT_SAMPLER_CUBE: 36308,
                UNSIGNED_INT_SAMPLER_2D_ARRAY: 36311,
                DEPTH_COMPONENT32F: 36012,
                DEPTH32F_STENCIL8: 36013,
                FLOAT_32_UNSIGNED_INT_24_8_REV: 36269,
                FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: 33296,
                FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 33297,
                FRAMEBUFFER_ATTACHMENT_RED_SIZE: 33298,
                FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: 33299,
                FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: 33300,
                FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: 33301,
                FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 33302,
                FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: 33303,
                FRAMEBUFFER_DEFAULT: 33304,
                UNSIGNED_INT_24_8: 34042,
                DEPTH24_STENCIL8: 35056,
                UNSIGNED_NORMALIZED: 35863,
                DRAW_FRAMEBUFFER_BINDING: 36006,
                READ_FRAMEBUFFER: 36008,
                DRAW_FRAMEBUFFER: 36009,
                READ_FRAMEBUFFER_BINDING: 36010,
                RENDERBUFFER_SAMPLES: 36011,
                FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: 36052,
                MAX_COLOR_ATTACHMENTS: 36063,
                COLOR_ATTACHMENT1: 36065,
                COLOR_ATTACHMENT2: 36066,
                COLOR_ATTACHMENT3: 36067,
                COLOR_ATTACHMENT4: 36068,
                COLOR_ATTACHMENT5: 36069,
                COLOR_ATTACHMENT6: 36070,
                COLOR_ATTACHMENT7: 36071,
                COLOR_ATTACHMENT8: 36072,
                COLOR_ATTACHMENT9: 36073,
                COLOR_ATTACHMENT10: 36074,
                COLOR_ATTACHMENT11: 36075,
                COLOR_ATTACHMENT12: 36076,
                COLOR_ATTACHMENT13: 36077,
                COLOR_ATTACHMENT14: 36078,
                COLOR_ATTACHMENT15: 36079,
                FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: 36182,
                MAX_SAMPLES: 36183,
                HALF_FLOAT: 5131,
                RG: 33319,
                RG_INTEGER: 33320,
                R8: 33321,
                RG8: 33323,
                R16F: 33325,
                R32F: 33326,
                RG16F: 33327,
                RG32F: 33328,
                R8I: 33329,
                R8UI: 33330,
                R16I: 33331,
                R16UI: 33332,
                R32I: 33333,
                R32UI: 33334,
                RG8I: 33335,
                RG8UI: 33336,
                RG16I: 33337,
                RG16UI: 33338,
                RG32I: 33339,
                RG32UI: 33340,
                VERTEX_ARRAY_BINDING: 34229,
                R8_SNORM: 36756,
                RG8_SNORM: 36757,
                RGB8_SNORM: 36758,
                RGBA8_SNORM: 36759,
                SIGNED_NORMALIZED: 36764,
                COPY_READ_BUFFER: 36662,
                COPY_WRITE_BUFFER: 36663,
                COPY_READ_BUFFER_BINDING: 36662,
                COPY_WRITE_BUFFER_BINDING: 36663,
                UNIFORM_BUFFER: 35345,
                UNIFORM_BUFFER_BINDING: 35368,
                UNIFORM_BUFFER_START: 35369,
                UNIFORM_BUFFER_SIZE: 35370,
                MAX_VERTEX_UNIFORM_BLOCKS: 35371,
                MAX_FRAGMENT_UNIFORM_BLOCKS: 35373,
                MAX_COMBINED_UNIFORM_BLOCKS: 35374,
                MAX_UNIFORM_BUFFER_BINDINGS: 35375,
                MAX_UNIFORM_BLOCK_SIZE: 35376,
                MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: 35377,
                MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: 35379,
                UNIFORM_BUFFER_OFFSET_ALIGNMENT: 35380,
                ACTIVE_UNIFORM_BLOCKS: 35382,
                UNIFORM_TYPE: 35383,
                UNIFORM_SIZE: 35384,
                UNIFORM_BLOCK_INDEX: 35386,
                UNIFORM_OFFSET: 35387,
                UNIFORM_ARRAY_STRIDE: 35388,
                UNIFORM_MATRIX_STRIDE: 35389,
                UNIFORM_IS_ROW_MAJOR: 35390,
                UNIFORM_BLOCK_BINDING: 35391,
                UNIFORM_BLOCK_DATA_SIZE: 35392,
                UNIFORM_BLOCK_ACTIVE_UNIFORMS: 35394,
                UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: 35395,
                UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: 35396,
                UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: 35398,
                INVALID_INDEX: 4294967295,
                MAX_VERTEX_OUTPUT_COMPONENTS: 37154,
                MAX_FRAGMENT_INPUT_COMPONENTS: 37157,
                MAX_SERVER_WAIT_TIMEOUT: 37137,
                OBJECT_TYPE: 37138,
                SYNC_CONDITION: 37139,
                SYNC_STATUS: 37140,
                SYNC_FLAGS: 37141,
                SYNC_FENCE: 37142,
                SYNC_GPU_COMMANDS_COMPLETE: 37143,
                UNSIGNALED: 37144,
                SIGNALED: 37145,
                ALREADY_SIGNALED: 37146,
                TIMEOUT_EXPIRED: 37147,
                CONDITION_SATISFIED: 37148,
                WAIT_FAILED: 37149,
                SYNC_FLUSH_COMMANDS_BIT: 1,
                VERTEX_ATTRIB_ARRAY_DIVISOR: 35070,
                ANY_SAMPLES_PASSED: 35887,
                ANY_SAMPLES_PASSED_CONSERVATIVE: 36202,
                SAMPLER_BINDING: 35097,
                RGB10_A2UI: 36975,
                INT_2_10_10_10_REV: 36255,
                TRANSFORM_FEEDBACK: 36386,
                TRANSFORM_FEEDBACK_PAUSED: 36387,
                TRANSFORM_FEEDBACK_ACTIVE: 36388,
                TRANSFORM_FEEDBACK_BINDING: 36389,
                COMPRESSED_R11_EAC: 37488,
                COMPRESSED_SIGNED_R11_EAC: 37489,
                COMPRESSED_RG11_EAC: 37490,
                COMPRESSED_SIGNED_RG11_EAC: 37491,
                COMPRESSED_RGB8_ETC2: 37492,
                COMPRESSED_SRGB8_ETC2: 37493,
                COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: 37494,
                COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: 37495,
                COMPRESSED_RGBA8_ETC2_EAC: 37496,
                COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: 37497,
                TEXTURE_IMMUTABLE_FORMAT: 37167,
                MAX_ELEMENT_INDEX: 36203,
                TEXTURE_IMMUTABLE_LEVELS: 33503,
                MAX_TEXTURE_MAX_ANISOTROPY_EXT: 34047
            });
        }),
        define("Core/ComponentDatatype", [
            "./defaultValue",
            "./defined",
            "./DeveloperError",
            "./FeatureDetection",
            "./freezeObject",
            "./WebGLConstants"
        ], function(e, r, t, E, n, _) {
            "use strict";
            if (!E.supportsTypedArrays()) return {};
            var T = {
                BYTE: _.BYTE,
                UNSIGNED_BYTE: _.UNSIGNED_BYTE,
                SHORT: _.SHORT,
                UNSIGNED_SHORT: _.UNSIGNED_SHORT,
                INT: _.INT,
                UNSIGNED_INT: _.UNSIGNED_INT,
                FLOAT: _.FLOAT,
                DOUBLE: _.DOUBLE
            };
            return (
                (T.getSizeInBytes = function(e) {
                    switch (e) {
                        case T.BYTE:
                            return Int8Array.BYTES_PER_ELEMENT;
                        case T.UNSIGNED_BYTE:
                            return Uint8Array.BYTES_PER_ELEMENT;
                        case T.SHORT:
                            return Int16Array.BYTES_PER_ELEMENT;
                        case T.UNSIGNED_SHORT:
                            return Uint16Array.BYTES_PER_ELEMENT;
                        case T.INT:
                            return Int32Array.BYTES_PER_ELEMENT;
                        case T.UNSIGNED_INT:
                            return Uint32Array.BYTES_PER_ELEMENT;
                        case T.FLOAT:
                            return Float32Array.BYTES_PER_ELEMENT;
                        case T.DOUBLE:
                            return Float64Array.BYTES_PER_ELEMENT;
                    }
                }),
                (T.fromTypedArray = function(e) {
                    return e instanceof Int8Array
                        ? T.BYTE
                        : e instanceof Uint8Array
                        ? T.UNSIGNED_BYTE
                        : e instanceof Int16Array
                        ? T.SHORT
                        : e instanceof Uint16Array
                        ? T.UNSIGNED_SHORT
                        : e instanceof Int32Array
                        ? T.INT
                        : e instanceof Uint32Array
                        ? T.UNSIGNED_INT
                        : e instanceof Float32Array
                        ? T.FLOAT
                        : e instanceof Float64Array
                        ? T.DOUBLE
                        : void 0;
                }),
                (T.validate = function(e) {
                    return (
                        r(e) &&
                        (e === T.BYTE ||
                            e === T.UNSIGNED_BYTE ||
                            e === T.SHORT ||
                            e === T.UNSIGNED_SHORT ||
                            e === T.INT ||
                            e === T.UNSIGNED_INT ||
                            e === T.FLOAT ||
                            e === T.DOUBLE)
                    );
                }),
                (T.createTypedArray = function(e, r) {
                    switch (e) {
                        case T.BYTE:
                            return new Int8Array(r);
                        case T.UNSIGNED_BYTE:
                            return new Uint8Array(r);
                        case T.SHORT:
                            return new Int16Array(r);
                        case T.UNSIGNED_SHORT:
                            return new Uint16Array(r);
                        case T.INT:
                            return new Int32Array(r);
                        case T.UNSIGNED_INT:
                            return new Uint32Array(r);
                        case T.FLOAT:
                            return new Float32Array(r);
                        case T.DOUBLE:
                            return new Float64Array(r);
                    }
                }),
                (T.createArrayBufferView = function(r, t, E, n) {
                    switch (
                        ((E = e(E, 0)), (n = e(n, (t.byteLength - E) / T.getSizeInBytes(r))), r)
                    ) {
                        case T.BYTE:
                            return new Int8Array(t, E, n);
                        case T.UNSIGNED_BYTE:
                            return new Uint8Array(t, E, n);
                        case T.SHORT:
                            return new Int16Array(t, E, n);
                        case T.UNSIGNED_SHORT:
                            return new Uint16Array(t, E, n);
                        case T.INT:
                            return new Int32Array(t, E, n);
                        case T.UNSIGNED_INT:
                            return new Uint32Array(t, E, n);
                        case T.FLOAT:
                            return new Float32Array(t, E, n);
                        case T.DOUBLE:
                            return new Float64Array(t, E, n);
                    }
                }),
                (T.fromName = function(e) {
                    switch (e) {
                        case "BYTE":
                            return T.BYTE;
                        case "UNSIGNED_BYTE":
                            return T.UNSIGNED_BYTE;
                        case "SHORT":
                            return T.SHORT;
                        case "UNSIGNED_SHORT":
                            return T.UNSIGNED_SHORT;
                        case "INT":
                            return T.INT;
                        case "UNSIGNED_INT":
                            return T.UNSIGNED_INT;
                        case "FLOAT":
                            return T.FLOAT;
                        case "DOUBLE":
                            return T.DOUBLE;
                    }
                }),
                n(T)
            );
        }),
        define("ThirdParty/mersenne-twister", [], function() {
            var e = function(e) {
                void 0 == e && (e = new Date().getTime()),
                    (this.N = 624),
                    (this.M = 397),
                    (this.MATRIX_A = 2567483615),
                    (this.UPPER_MASK = 2147483648),
                    (this.LOWER_MASK = 2147483647),
                    (this.mt = new Array(this.N)),
                    (this.mti = this.N + 1),
                    this.init_genrand(e);
            };
            return (
                (e.prototype.init_genrand = function(e) {
                    for (this.mt[0] = e >>> 0, this.mti = 1; this.mti < this.N; this.mti++) {
                        var e = this.mt[this.mti - 1] ^ (this.mt[this.mti - 1] >>> 30);
                        (this.mt[this.mti] =
                            ((1812433253 * ((4294901760 & e) >>> 16)) << 16) +
                            1812433253 * (65535 & e) +
                            this.mti),
                            (this.mt[this.mti] >>>= 0);
                    }
                }),
                (e.prototype.genrand_int32 = function() {
                    var e,
                        r = new Array(0, this.MATRIX_A);
                    if (this.mti >= this.N) {
                        var t;
                        for (
                            this.mti == this.N + 1 && this.init_genrand(5489), t = 0;
                            t < this.N - this.M;
                            t++
                        )
                            (e =
                                (this.mt[t] & this.UPPER_MASK) |
                                (this.mt[t + 1] & this.LOWER_MASK)),
                                (this.mt[t] = this.mt[t + this.M] ^ (e >>> 1) ^ r[1 & e]);
                        for (; t < this.N - 1; t++)
                            (e =
                                (this.mt[t] & this.UPPER_MASK) |
                                (this.mt[t + 1] & this.LOWER_MASK)),
                                (this.mt[t] =
                                    this.mt[t + (this.M - this.N)] ^ (e >>> 1) ^ r[1 & e]);
                        (e =
                            (this.mt[this.N - 1] & this.UPPER_MASK) |
                            (this.mt[0] & this.LOWER_MASK)),
                            (this.mt[this.N - 1] = this.mt[this.M - 1] ^ (e >>> 1) ^ r[1 & e]),
                            (this.mti = 0);
                    }
                    return (
                        (e = this.mt[this.mti++]),
                        (e ^= e >>> 11),
                        (e ^= (e << 7) & 2636928640),
                        (e ^= (e << 15) & 4022730752),
                        (e ^= e >>> 18) >>> 0
                    );
                }),
                (e.prototype.random = function() {
                    return this.genrand_int32() * (1 / 4294967296);
                }),
                e
            );
        }),
        define("Core/Check", ["./defined", "./DeveloperError"], function(e, r) {
            "use strict";
            function t(e) {
                return e + " is required, actual value was undefined";
            }
            function E(e, r, t) {
                return "Expected " + t + " to be typeof " + r + ", actual typeof was " + e;
            }
            var n = {};
            return (
                (n.typeOf = {}),
                (n.defined = function(E, n) {
                    if (!e(n)) throw new r(t(E));
                }),
                (n.typeOf.func = function(e, t) {
                    if ("function" != typeof t) throw new r(E(typeof t, "function", e));
                }),
                (n.typeOf.string = function(e, t) {
                    if ("string" != typeof t) throw new r(E(typeof t, "string", e));
                }),
                (n.typeOf.number = function(e, t) {
                    if ("number" != typeof t) throw new r(E(typeof t, "number", e));
                }),
                (n.typeOf.number.lessThan = function(e, t, E) {
                    if ((n.typeOf.number(e, t), t >= E))
                        throw new r(
                            "Expected " + e + " to be less than " + E + ", actual value was " + t
                        );
                }),
                (n.typeOf.number.lessThanOrEquals = function(e, t, E) {
                    if ((n.typeOf.number(e, t), t > E))
                        throw new r(
                            "Expected " +
                                e +
                                " to be less than or equal to " +
                                E +
                                ", actual value was " +
                                t
                        );
                }),
                (n.typeOf.number.greaterThan = function(e, t, E) {
                    if ((n.typeOf.number(e, t), t <= E))
                        throw new r(
                            "Expected " + e + " to be greater than " + E + ", actual value was " + t
                        );
                }),
                (n.typeOf.number.greaterThanOrEquals = function(e, t, E) {
                    if ((n.typeOf.number(e, t), t < E))
                        throw new r(
                            "Expected " +
                                e +
                                " to be greater than or equal to" +
                                E +
                                ", actual value was " +
                                t
                        );
                }),
                (n.typeOf.object = function(e, t) {
                    if ("object" != typeof t) throw new r(E(typeof t, "object", e));
                }),
                (n.typeOf.bool = function(e, t) {
                    if ("boolean" != typeof t) throw new r(E(typeof t, "boolean", e));
                }),
                (n.typeOf.number.equals = function(e, t, E, _) {
                    if ((n.typeOf.number(e, E), n.typeOf.number(t, _), E !== _))
                        throw new r(
                            e +
                                " must be equal to " +
                                t +
                                ", the actual values are " +
                                E +
                                " and " +
                                _
                        );
                }),
                n
            );
        }),
        define("Core/Math", [
            "../ThirdParty/mersenne-twister",
            "./Check",
            "./defaultValue",
            "./defined",
            "./DeveloperError"
        ], function(e, r, t, E, n) {
            "use strict";
            var _ = {};
            (_.EPSILON1 = 0.1),
                (_.EPSILON2 = 0.01),
                (_.EPSILON3 = 0.001),
                (_.EPSILON4 = 1e-4),
                (_.EPSILON5 = 1e-5),
                (_.EPSILON6 = 1e-6),
                (_.EPSILON7 = 1e-7),
                (_.EPSILON8 = 1e-8),
                (_.EPSILON9 = 1e-9),
                (_.EPSILON10 = 1e-10),
                (_.EPSILON11 = 1e-11),
                (_.EPSILON12 = 1e-12),
                (_.EPSILON13 = 1e-13),
                (_.EPSILON14 = 1e-14),
                (_.EPSILON15 = 1e-15),
                (_.EPSILON16 = 1e-16),
                (_.EPSILON17 = 1e-17),
                (_.EPSILON18 = 1e-18),
                (_.EPSILON19 = 1e-19),
                (_.EPSILON20 = 1e-20),
                (_.EPSILON21 = 1e-21),
                (_.GRAVITATIONALPARAMETER = 3986004418e5),
                (_.SOLAR_RADIUS = 6955e5),
                (_.LUNAR_RADIUS = 1737400),
                (_.SIXTY_FOUR_KILOBYTES = 65536),
                (_.sign = t(Math.sign, function(e) {
                    return (e = +e), 0 === e || e !== e ? e : e > 0 ? 1 : -1;
                })),
                (_.signNotZero = function(e) {
                    return e < 0 ? -1 : 1;
                }),
                (_.toSNorm = function(e, r) {
                    return (r = t(r, 255)), Math.round((0.5 * _.clamp(e, -1, 1) + 0.5) * r);
                }),
                (_.fromSNorm = function(e, r) {
                    return (r = t(r, 255)), (_.clamp(e, 0, r) / r) * 2 - 1;
                }),
                (_.normalize = function(e, r, t) {
                    return (t = Math.max(t - r, 0)), 0 === t ? 0 : _.clamp((e - r) / t, 0, 1);
                }),
                (_.sinh = t(Math.sinh, function(e) {
                    return (Math.exp(e) - Math.exp(-e)) / 2;
                })),
                (_.cosh = t(Math.cosh, function(e) {
                    return (Math.exp(e) + Math.exp(-e)) / 2;
                })),
                (_.lerp = function(e, r, t) {
                    return (1 - t) * e + t * r;
                }),
                (_.PI = Math.PI),
                (_.ONE_OVER_PI = 1 / Math.PI),
                (_.PI_OVER_TWO = Math.PI / 2),
                (_.PI_OVER_THREE = Math.PI / 3),
                (_.PI_OVER_FOUR = Math.PI / 4),
                (_.PI_OVER_SIX = Math.PI / 6),
                (_.THREE_PI_OVER_TWO = (3 * Math.PI) / 2),
                (_.TWO_PI = 2 * Math.PI),
                (_.ONE_OVER_TWO_PI = 1 / (2 * Math.PI)),
                (_.RADIANS_PER_DEGREE = Math.PI / 180),
                (_.DEGREES_PER_RADIAN = 180 / Math.PI),
                (_.RADIANS_PER_ARCSECOND = _.RADIANS_PER_DEGREE / 3600),
                (_.toRadians = function(e) {
                    return e * _.RADIANS_PER_DEGREE;
                }),
                (_.toDegrees = function(e) {
                    return e * _.DEGREES_PER_RADIAN;
                }),
                (_.convertLongitudeRange = function(e) {
                    var r = _.TWO_PI,
                        t = e - Math.floor(e / r) * r;
                    return t < -Math.PI ? t + r : t >= Math.PI ? t - r : t;
                }),
                (_.clampToLatitudeRange = function(e) {
                    return _.clamp(e, -1 * _.PI_OVER_TWO, _.PI_OVER_TWO);
                }),
                (_.negativePiToPi = function(e) {
                    return _.zeroToTwoPi(e + _.PI) - _.PI;
                }),
                (_.zeroToTwoPi = function(e) {
                    var r = _.mod(e, _.TWO_PI);
                    return Math.abs(r) < _.EPSILON14 && Math.abs(e) > _.EPSILON14 ? _.TWO_PI : r;
                }),
                (_.mod = function(e, r) {
                    return ((e % r) + r) % r;
                }),
                (_.equalsEpsilon = function(e, r, E, n) {
                    n = t(n, E);
                    var _ = Math.abs(e - r);
                    return _ <= n || _ <= E * Math.max(Math.abs(e), Math.abs(r));
                }),
                (_.lessThan = function(e, r, t) {
                    return e - r < -t;
                }),
                (_.lessThanOrEquals = function(e, r, t) {
                    return e - r < t;
                }),
                (_.greaterThan = function(e, r, t) {
                    return e - r > t;
                }),
                (_.greaterThanOrEquals = function(e, r, t) {
                    return e - r > -t;
                });
            var T = [1];
            (_.factorial = function(e) {
                var r = T.length;
                if (e >= r) for (var t = T[r - 1], E = r; E <= e; E++) T.push(t * E);
                return T[e];
            }),
                (_.incrementWrap = function(e, r, E) {
                    return (E = t(E, 0)), ++e, e > r && (e = E), e;
                }),
                (_.isPowerOfTwo = function(e) {
                    return 0 !== e && 0 == (e & (e - 1));
                }),
                (_.nextPowerOfTwo = function(e) {
                    return (
                        --e,
                        (e |= e >> 1),
                        (e |= e >> 2),
                        (e |= e >> 4),
                        (e |= e >> 8),
                        (e |= e >> 16),
                        ++e
                    );
                }),
                (_.clamp = function(e, r, t) {
                    return e < r ? r : e > t ? t : e;
                });
            var R = new e();
            return (
                (_.setRandomNumberSeed = function(r) {
                    R = new e(r);
                }),
                (_.nextRandomNumber = function() {
                    return R.random();
                }),
                (_.randomBetween = function(e, r) {
                    return _.nextRandomNumber() * (r - e) + e;
                }),
                (_.acosClamped = function(e) {
                    return Math.acos(_.clamp(e, -1, 1));
                }),
                (_.asinClamped = function(e) {
                    return Math.asin(_.clamp(e, -1, 1));
                }),
                (_.chordLength = function(e, r) {
                    return 2 * r * Math.sin(0.5 * e);
                }),
                (_.logBase = function(e, r) {
                    return Math.log(e) / Math.log(r);
                }),
                (_.cbrt = t(Math.cbrt, function(e) {
                    var r = Math.pow(Math.abs(e), 1 / 3);
                    return e < 0 ? -r : r;
                })),
                (_.log2 = t(Math.log2, function(e) {
                    return Math.log(e) * Math.LOG2E;
                })),
                (_.fog = function(e, r) {
                    var t = e * r;
                    return 1 - Math.exp(-t * t);
                }),
                (_.fastApproximateAtan = function(e) {
                    return e * (-0.1784 * Math.abs(e) - 0.0663 * e * e + 1.0301);
                }),
                (_.fastApproximateAtan2 = function(e, r) {
                    var t,
                        E,
                        n = Math.abs(e);
                    (t = Math.abs(r)), (E = Math.max(n, t)), (t = Math.min(n, t));
                    var T = t / E;
                    return (
                        (n = _.fastApproximateAtan(T)),
                        (n = Math.abs(r) > Math.abs(e) ? _.PI_OVER_TWO - n : n),
                        (n = e < 0 ? _.PI - n : n),
                        (n = r < 0 ? -n : n)
                    );
                }),
                _
            );
        }),
        define("Core/IndexDatatype", [
            "./defined",
            "./DeveloperError",
            "./freezeObject",
            "./Math",
            "./WebGLConstants"
        ], function(e, r, t, E, n) {
            "use strict";
            var _ = {
                UNSIGNED_BYTE: n.UNSIGNED_BYTE,
                UNSIGNED_SHORT: n.UNSIGNED_SHORT,
                UNSIGNED_INT: n.UNSIGNED_INT
            };
            return (
                (_.getSizeInBytes = function(e) {
                    switch (e) {
                        case _.UNSIGNED_BYTE:
                            return Uint8Array.BYTES_PER_ELEMENT;
                        case _.UNSIGNED_SHORT:
                            return Uint16Array.BYTES_PER_ELEMENT;
                        case _.UNSIGNED_INT:
                            return Uint32Array.BYTES_PER_ELEMENT;
                    }
                }),
                (_.fromSizeInBytes = function(e) {
                    switch (e) {
                        case 2:
                            return _.UNSIGNED_SHORT;
                        case 4:
                            return _.UNSIGNED_INT;
                        case 1:
                            return _.UNSIGNED_BYTE;
                    }
                }),
                (_.validate = function(r) {
                    return (
                        e(r) &&
                        (r === _.UNSIGNED_BYTE || r === _.UNSIGNED_SHORT || r === _.UNSIGNED_INT)
                    );
                }),
                (_.createTypedArray = function(e, r) {
                    return e >= E.SIXTY_FOUR_KILOBYTES ? new Uint32Array(r) : new Uint16Array(r);
                }),
                (_.createTypedArrayFromArrayBuffer = function(e, r, t, n) {
                    return e >= E.SIXTY_FOUR_KILOBYTES
                        ? new Uint32Array(r, t, n)
                        : new Uint16Array(r, t, n);
                }),
                t(_)
            );
        }),
        define("Core/RuntimeError", ["./defined"], function(e) {
            "use strict";
            function r(e) {
                (this.name = "RuntimeError"), (this.message = e);
                var r;
                try {
                    throw new Error();
                } catch (e) {
                    r = e.stack;
                }
                this.stack = r;
            }
            return (
                e(Object.create) &&
                    ((r.prototype = Object.create(Error.prototype)), (r.prototype.constructor = r)),
                (r.prototype.toString = function() {
                    var r = this.name + ": " + this.message;
                    return e(this.stack) && (r += "\n" + this.stack.toString()), r;
                }),
                r
            );
        }),
        define("Core/formatError", ["./defined"], function(e) {
            "use strict";
            function r(r) {
                var t,
                    E = r.name,
                    n = r.message;
                t = e(E) && e(n) ? E + ": " + n : r.toString();
                var _ = r.stack;
                return e(_) && (t += "\n" + _), t;
            }
            return r;
        }),
        define("Workers/createTaskProcessorWorker", [
            "../ThirdParty/when",
            "../Core/defaultValue",
            "../Core/defined",
            "../Core/formatError"
        ], function(e, r, t, E) {
            "use strict";
            function n(r, t, E) {
                try {
                    return r(t, E);
                } catch (r) {
                    return e.reject(r);
                }
            }
            function _(_) {
                var T;
                return function(R) {
                    var A = R.data,
                        o = [],
                        i = { id: A.id, result: void 0, error: void 0 };
                    return e(n(_, A.parameters, o))
                        .then(function(e) {
                            i.result = e;
                        })
                        .otherwise(function(e) {
                            e instanceof Error
                                ? (i.error = { name: e.name, message: e.message, stack: e.stack })
                                : (i.error = e);
                        })
                        .always(function() {
                            t(T) || (T = r(self.webkitPostMessage, self.postMessage)),
                                A.canTransferArrayBuffer || (o.length = 0);
                            try {
                                T(i, o);
                            } catch (e) {
                                (i.result = void 0),
                                    (i.error =
                                        "postMessage failed with error: " +
                                        E(e) +
                                        "\n  with responseMessage: " +
                                        JSON.stringify(i)),
                                    T(i);
                            }
                        });
                };
            }
            return _;
        }),
        define("Workers/decodeDraco", [
            "../Core/ComponentDatatype",
            "../Core/defined",
            "../Core/IndexDatatype",
            "../Core/RuntimeError",
            "./createTaskProcessorWorker"
        ], function(e, r, t, E, n) {
            "use strict";
            function _(e, r) {
                for (
                    var E = e.num_points(),
                        n = e.num_faces(),
                        _ = new I.DracoInt32Array(),
                        T = 3 * n,
                        R = t.createTypedArray(E, T),
                        A = 0,
                        o = 0;
                    o < n;
                    ++o
                )
                    r.GetFaceFromMesh(e, o, _),
                        (R[A + 0] = _.GetValue(0)),
                        (R[A + 1] = _.GetValue(1)),
                        (R[A + 2] = _.GetValue(2)),
                        (A += 3);
                return I.destroy(_), { typedArray: R, numberOfIndices: T };
            }
            function T(e, r, t, E, n) {
                var _, T;
                E.quantizationBits <= 8
                    ? ((T = new I.DracoUInt8Array()),
                      (_ = new Uint8Array(n)),
                      r.GetAttributeUInt8ForAllPoints(e, t, T))
                    : ((T = new I.DracoUInt16Array()),
                      (_ = new Uint16Array(n)),
                      r.GetAttributeUInt16ForAllPoints(e, t, T));
                for (var R = 0; R < n; ++R) _[R] = T.GetValue(R);
                return I.destroy(T), _;
            }
            function R(e, r, t, E) {
                var n, _;
                switch (t.data_type()) {
                    case 1:
                    case 11:
                        (_ = new I.DracoInt8Array()),
                            (n = new Int8Array(E)),
                            r.GetAttributeInt8ForAllPoints(e, t, _);
                        break;
                    case 2:
                        (_ = new I.DracoUInt8Array()),
                            (n = new Uint8Array(E)),
                            r.GetAttributeUInt8ForAllPoints(e, t, _);
                        break;
                    case 3:
                        (_ = new I.DracoInt16Array()),
                            (n = new Int16Array(E)),
                            r.GetAttributeInt16ForAllPoints(e, t, _);
                        break;
                    case 4:
                        (_ = new I.DracoUInt16Array()),
                            (n = new Uint16Array(E)),
                            r.GetAttributeUInt16ForAllPoints(e, t, _);
                        break;
                    case 5:
                    case 7:
                        (_ = new I.DracoInt32Array()),
                            (n = new Int32Array(E)),
                            r.GetAttributeInt32ForAllPoints(e, t, _);
                        break;
                    case 6:
                    case 8:
                        (_ = new I.DracoUInt32Array()),
                            (n = new Uint32Array(E)),
                            r.GetAttributeUInt32ForAllPoints(e, t, _);
                        break;
                    case 9:
                    case 10:
                        (_ = new I.DracoFloat32Array()),
                            (n = new Float32Array(E)),
                            r.GetAttributeFloatForAllPoints(e, t, _);
                }
                for (var T = 0; T < E; ++T) n[T] = _.GetValue(T);
                return I.destroy(_), n;
            }
            function A(t, E, n) {
                var _,
                    A = t.num_points(),
                    o = n.num_components(),
                    i = new I.AttributeQuantizationTransform();
                if (i.InitFromAttribute(n)) {
                    for (var u = new Array(o), a = 0; a < o; ++a) u[a] = i.min_value(a);
                    _ = {
                        quantizationBits: i.quantization_bits(),
                        minValues: u,
                        range: i.range(),
                        octEncoded: !1
                    };
                }
                I.destroy(i),
                    (i = new I.AttributeOctahedronTransform()),
                    i.InitFromAttribute(n) &&
                        (_ = { quantizationBits: i.quantization_bits(), octEncoded: !0 }),
                    I.destroy(i);
                var N,
                    s = A * o;
                N = r(_) ? T(t, E, n, _, s) : R(t, E, n, s);
                var S = e.fromTypedArray(N);
                return {
                    array: N,
                    data: {
                        componentsPerAttribute: o,
                        componentDatatype: S,
                        byteOffset: n.byte_offset(),
                        byteStride: e.getSizeInBytes(S) * o,
                        normalized: n.normalized(),
                        quantization: _
                    }
                };
            }
            function o(e) {
                var r = new I.Decoder();
                e.dequantizeInShader &&
                    (r.SkipAttributeTransform(I.POSITION), r.SkipAttributeTransform(I.NORMAL));
                var t = new I.DecoderBuffer();
                if (
                    (t.Init(e.buffer, e.buffer.length),
                    r.GetEncodedGeometryType(t) !== I.POINT_CLOUD)
                )
                    throw new E("Draco geometry type must be POINT_CLOUD.");
                var n = new I.PointCloud(),
                    _ = r.DecodeBufferToPointCloud(t, n);
                if (!_.ok() || 0 === n.ptr)
                    throw new E("Error decoding draco point cloud: " + _.error_msg());
                I.destroy(t);
                var T = {},
                    R = e.properties;
                for (var o in R)
                    if (R.hasOwnProperty(o)) {
                        var i = R[o],
                            u = r.GetAttributeByUniqueId(n, i);
                        T[o] = A(n, r, u);
                    }
                return I.destroy(n), I.destroy(r), T;
            }
            function i(e) {
                var r = new I.Decoder(),
                    t = ["POSITION", "NORMAL", "COLOR", "TEX_COORD"];
                if (e.dequantizeInShader)
                    for (var n = 0; n < t.length; ++n) r.SkipAttributeTransform(I[t[n]]);
                var T = e.bufferView,
                    R = new I.DecoderBuffer();
                if (
                    (R.Init(e.array, T.byteLength),
                    r.GetEncodedGeometryType(R) !== I.TRIANGULAR_MESH)
                )
                    throw new E("Unsupported draco mesh geometry type.");
                var o = new I.Mesh(),
                    i = r.DecodeBufferToMesh(R, o);
                if (!i.ok() || 0 === o.ptr)
                    throw new E("Error decoding draco mesh geometry: " + i.error_msg());
                I.destroy(R);
                var u = {},
                    a = e.compressedAttributes;
                for (var N in a)
                    if (a.hasOwnProperty(N)) {
                        var s = a[N],
                            S = r.GetAttributeByUniqueId(o, s);
                        u[N] = A(o, r, S);
                    }
                var c = { indexArray: _(o, r), attributeData: u };
                return I.destroy(o), I.destroy(r), c;
            }
            function u(e) {
                return r(e.primitive) ? i(e) : o(e);
            }
            function a(e) {
                (I = e), (self.onmessage = n(u)), self.postMessage(!0);
            }
            function N(e) {
                var t = e.data,
                    E = t.webAssemblyConfig;
                if (r(E))
                    return require([E.modulePath], function(e) {
                        r(E.wasmBinaryFile)
                            ? (r(e) || (e = self.DracoDecoderModule),
                              e(E).then(function(e) {
                                  a(e);
                              }))
                            : a(e());
                    });
            }
            var I;
            return N;
        });
})();

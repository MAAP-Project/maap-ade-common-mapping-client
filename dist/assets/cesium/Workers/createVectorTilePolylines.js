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

!(function() {
    define("Core/defined", [], function() {
        "use strict";
        function t(t) {
            return void 0 !== t && null !== t;
        }
        return t;
    }),
        define("Core/DeveloperError", ["./defined"], function(t) {
            "use strict";
            function e(t) {
                (this.name = "DeveloperError"), (this.message = t);
                var e;
                try {
                    throw new Error();
                } catch (t) {
                    e = t.stack;
                }
                this.stack = e;
            }
            return (
                t(Object.create) &&
                    ((e.prototype = Object.create(Error.prototype)), (e.prototype.constructor = e)),
                (e.prototype.toString = function() {
                    var e = this.name + ": " + this.message;
                    return t(this.stack) && (e += "\n" + this.stack.toString()), e;
                }),
                (e.throwInstantiationError = function() {
                    throw new e(
                        "This function defines an interface and should not be called directly."
                    );
                }),
                e
            );
        }),
        define("Core/Check", ["./defined", "./DeveloperError"], function(t, e) {
            "use strict";
            function n(t) {
                return t + " is required, actual value was undefined";
            }
            function r(t, e, n) {
                return "Expected " + n + " to be typeof " + e + ", actual typeof was " + t;
            }
            var E = {};
            return (
                (E.typeOf = {}),
                (E.defined = function(r, E) {
                    if (!t(E)) throw new e(n(r));
                }),
                (E.typeOf.func = function(t, n) {
                    if ("function" != typeof n) throw new e(r(typeof n, "function", t));
                }),
                (E.typeOf.string = function(t, n) {
                    if ("string" != typeof n) throw new e(r(typeof n, "string", t));
                }),
                (E.typeOf.number = function(t, n) {
                    if ("number" != typeof n) throw new e(r(typeof n, "number", t));
                }),
                (E.typeOf.number.lessThan = function(t, n, r) {
                    if ((E.typeOf.number(t, n), n >= r))
                        throw new e(
                            "Expected " + t + " to be less than " + r + ", actual value was " + n
                        );
                }),
                (E.typeOf.number.lessThanOrEquals = function(t, n, r) {
                    if ((E.typeOf.number(t, n), n > r))
                        throw new e(
                            "Expected " +
                                t +
                                " to be less than or equal to " +
                                r +
                                ", actual value was " +
                                n
                        );
                }),
                (E.typeOf.number.greaterThan = function(t, n, r) {
                    if ((E.typeOf.number(t, n), n <= r))
                        throw new e(
                            "Expected " + t + " to be greater than " + r + ", actual value was " + n
                        );
                }),
                (E.typeOf.number.greaterThanOrEquals = function(t, n, r) {
                    if ((E.typeOf.number(t, n), n < r))
                        throw new e(
                            "Expected " +
                                t +
                                " to be greater than or equal to" +
                                r +
                                ", actual value was " +
                                n
                        );
                }),
                (E.typeOf.object = function(t, n) {
                    if ("object" != typeof n) throw new e(r(typeof n, "object", t));
                }),
                (E.typeOf.bool = function(t, n) {
                    if ("boolean" != typeof n) throw new e(r(typeof n, "boolean", t));
                }),
                (E.typeOf.number.equals = function(t, n, r, a) {
                    if ((E.typeOf.number(t, r), E.typeOf.number(n, a), r !== a))
                        throw new e(
                            t +
                                " must be equal to " +
                                n +
                                ", the actual values are " +
                                r +
                                " and " +
                                a
                        );
                }),
                E
            );
        }),
        define("Core/freezeObject", ["./defined"], function(t) {
            "use strict";
            var e = Object.freeze;
            return (
                t(e) ||
                    (e = function(t) {
                        return t;
                    }),
                e
            );
        }),
        define("Core/defaultValue", ["./freezeObject"], function(t) {
            "use strict";
            function e(t, e) {
                return void 0 !== t && null !== t ? t : e;
            }
            return (e.EMPTY_OBJECT = t({})), e;
        }),
        define("ThirdParty/mersenne-twister", [], function() {
            var t = function(t) {
                void 0 == t && (t = new Date().getTime()),
                    (this.N = 624),
                    (this.M = 397),
                    (this.MATRIX_A = 2567483615),
                    (this.UPPER_MASK = 2147483648),
                    (this.LOWER_MASK = 2147483647),
                    (this.mt = new Array(this.N)),
                    (this.mti = this.N + 1),
                    this.init_genrand(t);
            };
            return (
                (t.prototype.init_genrand = function(t) {
                    for (this.mt[0] = t >>> 0, this.mti = 1; this.mti < this.N; this.mti++) {
                        var t = this.mt[this.mti - 1] ^ (this.mt[this.mti - 1] >>> 30);
                        (this.mt[this.mti] =
                            ((1812433253 * ((4294901760 & t) >>> 16)) << 16) +
                            1812433253 * (65535 & t) +
                            this.mti),
                            (this.mt[this.mti] >>>= 0);
                    }
                }),
                (t.prototype.genrand_int32 = function() {
                    var t,
                        e = new Array(0, this.MATRIX_A);
                    if (this.mti >= this.N) {
                        var n;
                        for (
                            this.mti == this.N + 1 && this.init_genrand(5489), n = 0;
                            n < this.N - this.M;
                            n++
                        )
                            (t =
                                (this.mt[n] & this.UPPER_MASK) |
                                (this.mt[n + 1] & this.LOWER_MASK)),
                                (this.mt[n] = this.mt[n + this.M] ^ (t >>> 1) ^ e[1 & t]);
                        for (; n < this.N - 1; n++)
                            (t =
                                (this.mt[n] & this.UPPER_MASK) |
                                (this.mt[n + 1] & this.LOWER_MASK)),
                                (this.mt[n] =
                                    this.mt[n + (this.M - this.N)] ^ (t >>> 1) ^ e[1 & t]);
                        (t =
                            (this.mt[this.N - 1] & this.UPPER_MASK) |
                            (this.mt[0] & this.LOWER_MASK)),
                            (this.mt[this.N - 1] = this.mt[this.M - 1] ^ (t >>> 1) ^ e[1 & t]),
                            (this.mti = 0);
                    }
                    return (
                        (t = this.mt[this.mti++]),
                        (t ^= t >>> 11),
                        (t ^= (t << 7) & 2636928640),
                        (t ^= (t << 15) & 4022730752),
                        (t ^= t >>> 18) >>> 0
                    );
                }),
                (t.prototype.random = function() {
                    return this.genrand_int32() * (1 / 4294967296);
                }),
                t
            );
        }),
        define("Core/Math", [
            "../ThirdParty/mersenne-twister",
            "./Check",
            "./defaultValue",
            "./defined",
            "./DeveloperError"
        ], function(t, e, n, r, E) {
            "use strict";
            var a = {};
            (a.EPSILON1 = 0.1),
                (a.EPSILON2 = 0.01),
                (a.EPSILON3 = 0.001),
                (a.EPSILON4 = 1e-4),
                (a.EPSILON5 = 1e-5),
                (a.EPSILON6 = 1e-6),
                (a.EPSILON7 = 1e-7),
                (a.EPSILON8 = 1e-8),
                (a.EPSILON9 = 1e-9),
                (a.EPSILON10 = 1e-10),
                (a.EPSILON11 = 1e-11),
                (a.EPSILON12 = 1e-12),
                (a.EPSILON13 = 1e-13),
                (a.EPSILON14 = 1e-14),
                (a.EPSILON15 = 1e-15),
                (a.EPSILON16 = 1e-16),
                (a.EPSILON17 = 1e-17),
                (a.EPSILON18 = 1e-18),
                (a.EPSILON19 = 1e-19),
                (a.EPSILON20 = 1e-20),
                (a.EPSILON21 = 1e-21),
                (a.GRAVITATIONALPARAMETER = 3986004418e5),
                (a.SOLAR_RADIUS = 6955e5),
                (a.LUNAR_RADIUS = 1737400),
                (a.SIXTY_FOUR_KILOBYTES = 65536),
                (a.sign = n(Math.sign, function(t) {
                    return (t = +t), 0 === t || t !== t ? t : t > 0 ? 1 : -1;
                })),
                (a.signNotZero = function(t) {
                    return t < 0 ? -1 : 1;
                }),
                (a.toSNorm = function(t, e) {
                    return (e = n(e, 255)), Math.round((0.5 * a.clamp(t, -1, 1) + 0.5) * e);
                }),
                (a.fromSNorm = function(t, e) {
                    return (e = n(e, 255)), (a.clamp(t, 0, e) / e) * 2 - 1;
                }),
                (a.sinh = n(Math.sinh, function(t) {
                    return (Math.exp(t) - Math.exp(-t)) / 2;
                })),
                (a.cosh = n(Math.cosh, function(t) {
                    return (Math.exp(t) + Math.exp(-t)) / 2;
                })),
                (a.lerp = function(t, e, n) {
                    return (1 - n) * t + n * e;
                }),
                (a.PI = Math.PI),
                (a.ONE_OVER_PI = 1 / Math.PI),
                (a.PI_OVER_TWO = Math.PI / 2),
                (a.PI_OVER_THREE = Math.PI / 3),
                (a.PI_OVER_FOUR = Math.PI / 4),
                (a.PI_OVER_SIX = Math.PI / 6),
                (a.THREE_PI_OVER_TWO = (3 * Math.PI) / 2),
                (a.TWO_PI = 2 * Math.PI),
                (a.ONE_OVER_TWO_PI = 1 / (2 * Math.PI)),
                (a.RADIANS_PER_DEGREE = Math.PI / 180),
                (a.DEGREES_PER_RADIAN = 180 / Math.PI),
                (a.RADIANS_PER_ARCSECOND = a.RADIANS_PER_DEGREE / 3600),
                (a.toRadians = function(t) {
                    return t * a.RADIANS_PER_DEGREE;
                }),
                (a.toDegrees = function(t) {
                    return t * a.DEGREES_PER_RADIAN;
                }),
                (a.convertLongitudeRange = function(t) {
                    var e = a.TWO_PI,
                        n = t - Math.floor(t / e) * e;
                    return n < -Math.PI ? n + e : n >= Math.PI ? n - e : n;
                }),
                (a.clampToLatitudeRange = function(t) {
                    return a.clamp(t, -1 * a.PI_OVER_TWO, a.PI_OVER_TWO);
                }),
                (a.negativePiToPi = function(t) {
                    return a.zeroToTwoPi(t + a.PI) - a.PI;
                }),
                (a.zeroToTwoPi = function(t) {
                    var e = a.mod(t, a.TWO_PI);
                    return Math.abs(e) < a.EPSILON14 && Math.abs(t) > a.EPSILON14 ? a.TWO_PI : e;
                }),
                (a.mod = function(t, e) {
                    return ((t % e) + e) % e;
                }),
                (a.equalsEpsilon = function(t, e, r, E) {
                    E = n(E, r);
                    var a = Math.abs(t - e);
                    return a <= E || a <= r * Math.max(Math.abs(t), Math.abs(e));
                });
            var i = [1];
            (a.factorial = function(t) {
                var e = i.length;
                if (t >= e) for (var n = i[e - 1], r = e; r <= t; r++) i.push(n * r);
                return i[t];
            }),
                (a.incrementWrap = function(t, e, r) {
                    return (r = n(r, 0)), ++t, t > e && (t = r), t;
                }),
                (a.isPowerOfTwo = function(t) {
                    return 0 !== t && 0 == (t & (t - 1));
                }),
                (a.nextPowerOfTwo = function(t) {
                    return (
                        --t,
                        (t |= t >> 1),
                        (t |= t >> 2),
                        (t |= t >> 4),
                        (t |= t >> 8),
                        (t |= t >> 16),
                        ++t
                    );
                }),
                (a.clamp = function(t, e, n) {
                    return t < e ? e : t > n ? n : t;
                });
            var o = new t();
            return (
                (a.setRandomNumberSeed = function(e) {
                    o = new t(e);
                }),
                (a.nextRandomNumber = function() {
                    return o.random();
                }),
                (a.randomBetween = function(t, e) {
                    return a.nextRandomNumber() * (e - t) + t;
                }),
                (a.acosClamped = function(t) {
                    return Math.acos(a.clamp(t, -1, 1));
                }),
                (a.asinClamped = function(t) {
                    return Math.asin(a.clamp(t, -1, 1));
                }),
                (a.chordLength = function(t, e) {
                    return 2 * e * Math.sin(0.5 * t);
                }),
                (a.logBase = function(t, e) {
                    return Math.log(t) / Math.log(e);
                }),
                (a.cbrt = n(Math.cbrt, function(t) {
                    var e = Math.pow(Math.abs(t), 1 / 3);
                    return t < 0 ? -e : e;
                })),
                (a.log2 = n(Math.log2, function(t) {
                    return Math.log(t) * Math.LOG2E;
                })),
                (a.fog = function(t, e) {
                    var n = t * e;
                    return 1 - Math.exp(-n * n);
                }),
                (a.fastApproximateAtan = function(t) {
                    return t * (-0.1784 * Math.abs(t) - 0.0663 * t * t + 1.0301);
                }),
                (a.fastApproximateAtan2 = function(t, e) {
                    var n,
                        r,
                        E = Math.abs(t);
                    (n = Math.abs(e)), (r = Math.max(E, n)), (n = Math.min(E, n));
                    var i = n / r;
                    return (
                        (E = a.fastApproximateAtan(i)),
                        (E = Math.abs(e) > Math.abs(t) ? a.PI_OVER_TWO - E : E),
                        (E = t < 0 ? a.PI - E : E),
                        (E = e < 0 ? -E : E)
                    );
                }),
                a
            );
        }),
        define("Core/Cartesian2", [
            "./Check",
            "./defaultValue",
            "./defined",
            "./DeveloperError",
            "./freezeObject",
            "./Math"
        ], function(t, e, n, r, E, a) {
            "use strict";
            function i(t, n) {
                (this.x = e(t, 0)), (this.y = e(n, 0));
            }
            (i.fromElements = function(t, e, r) {
                return n(r) ? ((r.x = t), (r.y = e), r) : new i(t, e);
            }),
                (i.clone = function(t, e) {
                    if (n(t)) return n(e) ? ((e.x = t.x), (e.y = t.y), e) : new i(t.x, t.y);
                }),
                (i.fromCartesian3 = i.clone),
                (i.fromCartesian4 = i.clone),
                (i.packedLength = 2),
                (i.pack = function(t, n, r) {
                    return (r = e(r, 0)), (n[r++] = t.x), (n[r] = t.y), n;
                }),
                (i.unpack = function(t, r, E) {
                    return (r = e(r, 0)), n(E) || (E = new i()), (E.x = t[r++]), (E.y = t[r]), E;
                }),
                (i.packArray = function(t, e) {
                    var r = t.length;
                    n(e) ? (e.length = 2 * r) : (e = new Array(2 * r));
                    for (var E = 0; E < r; ++E) i.pack(t[E], e, 2 * E);
                    return e;
                }),
                (i.unpackArray = function(t, e) {
                    var r = t.length;
                    n(e) ? (e.length = r / 2) : (e = new Array(r / 2));
                    for (var E = 0; E < r; E += 2) {
                        var a = E / 2;
                        e[a] = i.unpack(t, E, e[a]);
                    }
                    return e;
                }),
                (i.fromArray = i.unpack),
                (i.maximumComponent = function(t) {
                    return Math.max(t.x, t.y);
                }),
                (i.minimumComponent = function(t) {
                    return Math.min(t.x, t.y);
                }),
                (i.minimumByComponent = function(t, e, n) {
                    return (n.x = Math.min(t.x, e.x)), (n.y = Math.min(t.y, e.y)), n;
                }),
                (i.maximumByComponent = function(t, e, n) {
                    return (n.x = Math.max(t.x, e.x)), (n.y = Math.max(t.y, e.y)), n;
                }),
                (i.magnitudeSquared = function(t) {
                    return t.x * t.x + t.y * t.y;
                }),
                (i.magnitude = function(t) {
                    return Math.sqrt(i.magnitudeSquared(t));
                });
            var o = new i();
            (i.distance = function(t, e) {
                return i.subtract(t, e, o), i.magnitude(o);
            }),
                (i.distanceSquared = function(t, e) {
                    return i.subtract(t, e, o), i.magnitudeSquared(o);
                }),
                (i.normalize = function(t, e) {
                    var n = i.magnitude(t);
                    return (e.x = t.x / n), (e.y = t.y / n), e;
                }),
                (i.dot = function(t, e) {
                    return t.x * e.x + t.y * e.y;
                }),
                (i.multiplyComponents = function(t, e, n) {
                    return (n.x = t.x * e.x), (n.y = t.y * e.y), n;
                }),
                (i.divideComponents = function(t, e, n) {
                    return (n.x = t.x / e.x), (n.y = t.y / e.y), n;
                }),
                (i.add = function(t, e, n) {
                    return (n.x = t.x + e.x), (n.y = t.y + e.y), n;
                }),
                (i.subtract = function(t, e, n) {
                    return (n.x = t.x - e.x), (n.y = t.y - e.y), n;
                }),
                (i.multiplyByScalar = function(t, e, n) {
                    return (n.x = t.x * e), (n.y = t.y * e), n;
                }),
                (i.divideByScalar = function(t, e, n) {
                    return (n.x = t.x / e), (n.y = t.y / e), n;
                }),
                (i.negate = function(t, e) {
                    return (e.x = -t.x), (e.y = -t.y), e;
                }),
                (i.abs = function(t, e) {
                    return (e.x = Math.abs(t.x)), (e.y = Math.abs(t.y)), e;
                });
            var _ = new i();
            i.lerp = function(t, e, n, r) {
                return (
                    i.multiplyByScalar(e, n, _),
                    (r = i.multiplyByScalar(t, 1 - n, r)),
                    i.add(_, r, r)
                );
            };
            var u = new i(),
                R = new i();
            i.angleBetween = function(t, e) {
                return i.normalize(t, u), i.normalize(e, R), a.acosClamped(i.dot(u, R));
            };
            var T = new i();
            return (
                (i.mostOrthogonalAxis = function(t, e) {
                    var n = i.normalize(t, T);
                    return (
                        i.abs(n, n), (e = n.x <= n.y ? i.clone(i.UNIT_X, e) : i.clone(i.UNIT_Y, e))
                    );
                }),
                (i.equals = function(t, e) {
                    return t === e || (n(t) && n(e) && t.x === e.x && t.y === e.y);
                }),
                (i.equalsArray = function(t, e, n) {
                    return t.x === e[n] && t.y === e[n + 1];
                }),
                (i.equalsEpsilon = function(t, e, r, E) {
                    return (
                        t === e ||
                        (n(t) &&
                            n(e) &&
                            a.equalsEpsilon(t.x, e.x, r, E) &&
                            a.equalsEpsilon(t.y, e.y, r, E))
                    );
                }),
                (i.ZERO = E(new i(0, 0))),
                (i.UNIT_X = E(new i(1, 0))),
                (i.UNIT_Y = E(new i(0, 1))),
                (i.prototype.clone = function(t) {
                    return i.clone(this, t);
                }),
                (i.prototype.equals = function(t) {
                    return i.equals(this, t);
                }),
                (i.prototype.equalsEpsilon = function(t, e, n) {
                    return i.equalsEpsilon(this, t, e, n);
                }),
                (i.prototype.toString = function() {
                    return "(" + this.x + ", " + this.y + ")";
                }),
                i
            );
        }),
        define("Core/Cartesian3", [
            "./Check",
            "./defaultValue",
            "./defined",
            "./DeveloperError",
            "./freezeObject",
            "./Math"
        ], function(t, e, n, r, E, a) {
            "use strict";
            function i(t, n, r) {
                (this.x = e(t, 0)), (this.y = e(n, 0)), (this.z = e(r, 0));
            }
            (i.fromSpherical = function(t, r) {
                n(r) || (r = new i());
                var E = t.clock,
                    a = t.cone,
                    o = e(t.magnitude, 1),
                    _ = o * Math.sin(a);
                return (r.x = _ * Math.cos(E)), (r.y = _ * Math.sin(E)), (r.z = o * Math.cos(a)), r;
            }),
                (i.fromElements = function(t, e, r, E) {
                    return n(E) ? ((E.x = t), (E.y = e), (E.z = r), E) : new i(t, e, r);
                }),
                (i.clone = function(t, e) {
                    if (n(t))
                        return n(e)
                            ? ((e.x = t.x), (e.y = t.y), (e.z = t.z), e)
                            : new i(t.x, t.y, t.z);
                }),
                (i.fromCartesian4 = i.clone),
                (i.packedLength = 3),
                (i.pack = function(t, n, r) {
                    return (r = e(r, 0)), (n[r++] = t.x), (n[r++] = t.y), (n[r] = t.z), n;
                }),
                (i.unpack = function(t, r, E) {
                    return (
                        (r = e(r, 0)),
                        n(E) || (E = new i()),
                        (E.x = t[r++]),
                        (E.y = t[r++]),
                        (E.z = t[r]),
                        E
                    );
                }),
                (i.packArray = function(t, e) {
                    var r = t.length;
                    n(e) ? (e.length = 3 * r) : (e = new Array(3 * r));
                    for (var E = 0; E < r; ++E) i.pack(t[E], e, 3 * E);
                    return e;
                }),
                (i.unpackArray = function(t, e) {
                    var r = t.length;
                    n(e) ? (e.length = r / 3) : (e = new Array(r / 3));
                    for (var E = 0; E < r; E += 3) {
                        var a = E / 3;
                        e[a] = i.unpack(t, E, e[a]);
                    }
                    return e;
                }),
                (i.fromArray = i.unpack),
                (i.maximumComponent = function(t) {
                    return Math.max(t.x, t.y, t.z);
                }),
                (i.minimumComponent = function(t) {
                    return Math.min(t.x, t.y, t.z);
                }),
                (i.minimumByComponent = function(t, e, n) {
                    return (
                        (n.x = Math.min(t.x, e.x)),
                        (n.y = Math.min(t.y, e.y)),
                        (n.z = Math.min(t.z, e.z)),
                        n
                    );
                }),
                (i.maximumByComponent = function(t, e, n) {
                    return (
                        (n.x = Math.max(t.x, e.x)),
                        (n.y = Math.max(t.y, e.y)),
                        (n.z = Math.max(t.z, e.z)),
                        n
                    );
                }),
                (i.magnitudeSquared = function(t) {
                    return t.x * t.x + t.y * t.y + t.z * t.z;
                }),
                (i.magnitude = function(t) {
                    return Math.sqrt(i.magnitudeSquared(t));
                });
            var o = new i();
            (i.distance = function(t, e) {
                return i.subtract(t, e, o), i.magnitude(o);
            }),
                (i.distanceSquared = function(t, e) {
                    return i.subtract(t, e, o), i.magnitudeSquared(o);
                }),
                (i.normalize = function(t, e) {
                    var n = i.magnitude(t);
                    return (e.x = t.x / n), (e.y = t.y / n), (e.z = t.z / n), e;
                }),
                (i.dot = function(t, e) {
                    return t.x * e.x + t.y * e.y + t.z * e.z;
                }),
                (i.multiplyComponents = function(t, e, n) {
                    return (n.x = t.x * e.x), (n.y = t.y * e.y), (n.z = t.z * e.z), n;
                }),
                (i.divideComponents = function(t, e, n) {
                    return (n.x = t.x / e.x), (n.y = t.y / e.y), (n.z = t.z / e.z), n;
                }),
                (i.add = function(t, e, n) {
                    return (n.x = t.x + e.x), (n.y = t.y + e.y), (n.z = t.z + e.z), n;
                }),
                (i.subtract = function(t, e, n) {
                    return (n.x = t.x - e.x), (n.y = t.y - e.y), (n.z = t.z - e.z), n;
                }),
                (i.multiplyByScalar = function(t, e, n) {
                    return (n.x = t.x * e), (n.y = t.y * e), (n.z = t.z * e), n;
                }),
                (i.divideByScalar = function(t, e, n) {
                    return (n.x = t.x / e), (n.y = t.y / e), (n.z = t.z / e), n;
                }),
                (i.negate = function(t, e) {
                    return (e.x = -t.x), (e.y = -t.y), (e.z = -t.z), e;
                }),
                (i.abs = function(t, e) {
                    return (e.x = Math.abs(t.x)), (e.y = Math.abs(t.y)), (e.z = Math.abs(t.z)), e;
                });
            var _ = new i();
            i.lerp = function(t, e, n, r) {
                return (
                    i.multiplyByScalar(e, n, _),
                    (r = i.multiplyByScalar(t, 1 - n, r)),
                    i.add(_, r, r)
                );
            };
            var u = new i(),
                R = new i();
            i.angleBetween = function(t, e) {
                i.normalize(t, u), i.normalize(e, R);
                var n = i.dot(u, R),
                    r = i.magnitude(i.cross(u, R, u));
                return Math.atan2(r, n);
            };
            var T = new i();
            (i.mostOrthogonalAxis = function(t, e) {
                var n = i.normalize(t, T);
                return (
                    i.abs(n, n),
                    (e =
                        n.x <= n.y
                            ? n.x <= n.z
                                ? i.clone(i.UNIT_X, e)
                                : i.clone(i.UNIT_Z, e)
                            : n.y <= n.z
                            ? i.clone(i.UNIT_Y, e)
                            : i.clone(i.UNIT_Z, e))
                );
            }),
                (i.projectVector = function(t, e, n) {
                    var r = i.dot(t, e) / i.dot(e, e);
                    return i.multiplyByScalar(e, r, n);
                }),
                (i.equals = function(t, e) {
                    return t === e || (n(t) && n(e) && t.x === e.x && t.y === e.y && t.z === e.z);
                }),
                (i.equalsArray = function(t, e, n) {
                    return t.x === e[n] && t.y === e[n + 1] && t.z === e[n + 2];
                }),
                (i.equalsEpsilon = function(t, e, r, E) {
                    return (
                        t === e ||
                        (n(t) &&
                            n(e) &&
                            a.equalsEpsilon(t.x, e.x, r, E) &&
                            a.equalsEpsilon(t.y, e.y, r, E) &&
                            a.equalsEpsilon(t.z, e.z, r, E))
                    );
                }),
                (i.cross = function(t, e, n) {
                    var r = t.x,
                        E = t.y,
                        a = t.z,
                        i = e.x,
                        o = e.y,
                        _ = e.z,
                        u = E * _ - a * o,
                        R = a * i - r * _,
                        T = r * o - E * i;
                    return (n.x = u), (n.y = R), (n.z = T), n;
                }),
                (i.midpoint = function(t, e, n) {
                    return (
                        (n.x = 0.5 * (t.x + e.x)),
                        (n.y = 0.5 * (t.y + e.y)),
                        (n.z = 0.5 * (t.z + e.z)),
                        n
                    );
                }),
                (i.fromDegrees = function(t, e, n, r, E) {
                    return (t = a.toRadians(t)), (e = a.toRadians(e)), i.fromRadians(t, e, n, r, E);
                });
            var A = new i(),
                s = new i(),
                c = new i(40680631590769, 40680631590769, 40408299984661.445);
            return (
                (i.fromRadians = function(t, r, E, a, o) {
                    E = e(E, 0);
                    var _ = n(a) ? a.radiiSquared : c,
                        u = Math.cos(r);
                    (A.x = u * Math.cos(t)),
                        (A.y = u * Math.sin(t)),
                        (A.z = Math.sin(r)),
                        (A = i.normalize(A, A)),
                        i.multiplyComponents(_, A, s);
                    var R = Math.sqrt(i.dot(A, s));
                    return (
                        (s = i.divideByScalar(s, R, s)),
                        (A = i.multiplyByScalar(A, E, A)),
                        n(o) || (o = new i()),
                        i.add(s, A, o)
                    );
                }),
                (i.fromDegreesArray = function(t, e, r) {
                    var E = t.length;
                    n(r) ? (r.length = E / 2) : (r = new Array(E / 2));
                    for (var a = 0; a < E; a += 2) {
                        var o = t[a],
                            _ = t[a + 1],
                            u = a / 2;
                        r[u] = i.fromDegrees(o, _, 0, e, r[u]);
                    }
                    return r;
                }),
                (i.fromRadiansArray = function(t, e, r) {
                    var E = t.length;
                    n(r) ? (r.length = E / 2) : (r = new Array(E / 2));
                    for (var a = 0; a < E; a += 2) {
                        var o = t[a],
                            _ = t[a + 1],
                            u = a / 2;
                        r[u] = i.fromRadians(o, _, 0, e, r[u]);
                    }
                    return r;
                }),
                (i.fromDegreesArrayHeights = function(t, e, r) {
                    var E = t.length;
                    n(r) ? (r.length = E / 3) : (r = new Array(E / 3));
                    for (var a = 0; a < E; a += 3) {
                        var o = t[a],
                            _ = t[a + 1],
                            u = t[a + 2],
                            R = a / 3;
                        r[R] = i.fromDegrees(o, _, u, e, r[R]);
                    }
                    return r;
                }),
                (i.fromRadiansArrayHeights = function(t, e, r) {
                    var E = t.length;
                    n(r) ? (r.length = E / 3) : (r = new Array(E / 3));
                    for (var a = 0; a < E; a += 3) {
                        var o = t[a],
                            _ = t[a + 1],
                            u = t[a + 2],
                            R = a / 3;
                        r[R] = i.fromRadians(o, _, u, e, r[R]);
                    }
                    return r;
                }),
                (i.ZERO = E(new i(0, 0, 0))),
                (i.UNIT_X = E(new i(1, 0, 0))),
                (i.UNIT_Y = E(new i(0, 1, 0))),
                (i.UNIT_Z = E(new i(0, 0, 1))),
                (i.prototype.clone = function(t) {
                    return i.clone(this, t);
                }),
                (i.prototype.equals = function(t) {
                    return i.equals(this, t);
                }),
                (i.prototype.equalsEpsilon = function(t, e, n) {
                    return i.equalsEpsilon(this, t, e, n);
                }),
                (i.prototype.toString = function() {
                    return "(" + this.x + ", " + this.y + ", " + this.z + ")";
                }),
                i
            );
        }),
        define("Core/AttributeCompression", [
            "./Cartesian2",
            "./Cartesian3",
            "./Check",
            "./defined",
            "./DeveloperError",
            "./Math"
        ], function(t, e, n, r, E, a) {
            "use strict";
            function i(t) {
                return (R[0] = t), R[0];
            }
            function o(t) {
                return (t >> 1) ^ -(1 & t);
            }
            var _ = {};
            (_.octEncodeInRange = function(t, e, n) {
                if (
                    ((n.x = t.x / (Math.abs(t.x) + Math.abs(t.y) + Math.abs(t.z))),
                    (n.y = t.y / (Math.abs(t.x) + Math.abs(t.y) + Math.abs(t.z))),
                    t.z < 0)
                ) {
                    var r = n.x,
                        E = n.y;
                    (n.x = (1 - Math.abs(E)) * a.signNotZero(r)),
                        (n.y = (1 - Math.abs(r)) * a.signNotZero(E));
                }
                return (n.x = a.toSNorm(n.x, e)), (n.y = a.toSNorm(n.y, e)), n;
            }),
                (_.octEncode = function(t, e) {
                    return _.octEncodeInRange(t, 255, e);
                });
            var u = new t(),
                R = new Uint8Array(1);
            (_.octEncodeToCartesian4 = function(t, e) {
                return (
                    _.octEncodeInRange(t, 65535, u),
                    (e.x = i(u.x * (1 / 256))),
                    (e.y = i(u.x)),
                    (e.z = i(u.y * (1 / 256))),
                    (e.w = i(u.y)),
                    e
                );
            }),
                (_.octDecodeInRange = function(t, n, r, E) {
                    if (
                        ((E.x = a.fromSNorm(t, r)),
                        (E.y = a.fromSNorm(n, r)),
                        (E.z = 1 - (Math.abs(E.x) + Math.abs(E.y))),
                        E.z < 0)
                    ) {
                        var i = E.x;
                        (E.x = (1 - Math.abs(E.y)) * a.signNotZero(i)),
                            (E.y = (1 - Math.abs(i)) * a.signNotZero(E.y));
                    }
                    return e.normalize(E, E);
                }),
                (_.octDecode = function(t, e, n) {
                    return _.octDecodeInRange(t, e, 255, n);
                }),
                (_.octDecodeFromCartesian4 = function(t, e) {
                    var n = t.x,
                        r = t.y,
                        E = t.z,
                        a = t.w,
                        i = 256 * n + r,
                        o = 256 * E + a;
                    return _.octDecodeInRange(i, o, 65535, e);
                }),
                (_.octPackFloat = function(t) {
                    return 256 * t.x + t.y;
                });
            var T = new t();
            return (
                (_.octEncodeFloat = function(t) {
                    return _.octEncode(t, T), _.octPackFloat(T);
                }),
                (_.octDecodeFloat = function(t, e) {
                    var n = t / 256,
                        r = Math.floor(n),
                        E = 256 * (n - r);
                    return _.octDecode(r, E, e);
                }),
                (_.octPack = function(t, e, n, r) {
                    var E = _.octEncodeFloat(t),
                        a = _.octEncodeFloat(e),
                        i = _.octEncode(n, T);
                    return (r.x = 65536 * i.x + E), (r.y = 65536 * i.y + a), r;
                }),
                (_.octUnpack = function(t, e, n, r) {
                    var E = t.x / 65536,
                        a = Math.floor(E),
                        i = 65536 * (E - a);
                    E = t.y / 65536;
                    var o = Math.floor(E),
                        u = 65536 * (E - o);
                    _.octDecodeFloat(i, e), _.octDecodeFloat(u, n), _.octDecode(a, o, r);
                }),
                (_.compressTextureCoordinates = function(t) {
                    return 4096 * ((4095 * t.x) | 0) + ((4095 * t.y) | 0);
                }),
                (_.decompressTextureCoordinates = function(t, e) {
                    var n = t / 4096,
                        r = Math.floor(n);
                    return (e.x = r / 4095), (e.y = (t - 4096 * r) / 4095), e;
                }),
                (_.zigZagDeltaDecode = function(t, e, n) {
                    for (var E = t.length, a = 0, i = 0, _ = 0, u = 0; u < E; ++u)
                        (a += o(t[u])),
                            (i += o(e[u])),
                            (t[u] = a),
                            (e[u] = i),
                            r(n) && ((_ += o(n[u])), (n[u] = _));
                }),
                _
            );
        }),
        define("Core/scaleToGeodeticSurface", [
            "./Cartesian3",
            "./defined",
            "./DeveloperError",
            "./Math"
        ], function(t, e, n, r) {
            "use strict";
            function E(n, E, o, _, u) {
                var R = n.x,
                    T = n.y,
                    A = n.z,
                    s = E.x,
                    c = E.y,
                    N = E.z,
                    I = R * R * s * s,
                    h = T * T * c * c,
                    f = A * A * N * N,
                    S = I + h + f,
                    M = Math.sqrt(1 / S),
                    O = t.multiplyByScalar(n, M, a);
                if (S < _) return isFinite(M) ? t.clone(O, u) : void 0;
                var d = o.x,
                    C = o.y,
                    l = o.z,
                    U = i;
                (U.x = O.x * d * 2), (U.y = O.y * C * 2), (U.z = O.z * l * 2);
                var F,
                    P,
                    L,
                    m,
                    D,
                    p,
                    y,
                    B,
                    g,
                    v,
                    w,
                    G = ((1 - M) * t.magnitude(n)) / (0.5 * t.magnitude(U)),
                    x = 0;
                do {
                    (G -= x),
                        (L = 1 / (1 + G * d)),
                        (m = 1 / (1 + G * C)),
                        (D = 1 / (1 + G * l)),
                        (p = L * L),
                        (y = m * m),
                        (B = D * D),
                        (g = p * L),
                        (v = y * m),
                        (w = B * D),
                        (F = I * p + h * y + f * B - 1),
                        (P = I * g * d + h * v * C + f * w * l);
                    x = F / (-2 * P);
                } while (Math.abs(F) > r.EPSILON12);
                return e(u)
                    ? ((u.x = R * L), (u.y = T * m), (u.z = A * D), u)
                    : new t(R * L, T * m, A * D);
            }
            var a = new t(),
                i = new t();
            return E;
        }),
        define("Core/Cartographic", [
            "./Cartesian3",
            "./Check",
            "./defaultValue",
            "./defined",
            "./freezeObject",
            "./Math",
            "./scaleToGeodeticSurface"
        ], function(t, e, n, r, E, a, i) {
            "use strict";
            function o(t, e, r) {
                (this.longitude = n(t, 0)), (this.latitude = n(e, 0)), (this.height = n(r, 0));
            }
            (o.fromRadians = function(t, e, E, a) {
                return (
                    (E = n(E, 0)),
                    r(a) ? ((a.longitude = t), (a.latitude = e), (a.height = E), a) : new o(t, e, E)
                );
            }),
                (o.fromDegrees = function(t, e, n, r) {
                    return (t = a.toRadians(t)), (e = a.toRadians(e)), o.fromRadians(t, e, n, r);
                });
            var _ = new t(),
                u = new t(),
                R = new t(),
                T = new t(1 / 6378137, 1 / 6378137, 1 / 6356752.314245179),
                A = new t(1 / 40680631590769, 1 / 40680631590769, 1 / 40408299984661.445),
                s = a.EPSILON1;
            return (
                (o.fromCartesian = function(e, n, E) {
                    var c = r(n) ? n.oneOverRadii : T,
                        N = r(n) ? n.oneOverRadiiSquared : A,
                        I = r(n) ? n._centerToleranceSquared : s,
                        h = i(e, c, N, I, u);
                    if (r(h)) {
                        var f = t.multiplyComponents(h, N, _);
                        f = t.normalize(f, f);
                        var S = t.subtract(e, h, R),
                            M = Math.atan2(f.y, f.x),
                            O = Math.asin(f.z),
                            d = a.sign(t.dot(S, e)) * t.magnitude(S);
                        return r(E)
                            ? ((E.longitude = M), (E.latitude = O), (E.height = d), E)
                            : new o(M, O, d);
                    }
                }),
                (o.toCartesian = function(e, n, r) {
                    return t.fromRadians(e.longitude, e.latitude, e.height, n, r);
                }),
                (o.clone = function(t, e) {
                    if (r(t))
                        return r(e)
                            ? ((e.longitude = t.longitude),
                              (e.latitude = t.latitude),
                              (e.height = t.height),
                              e)
                            : new o(t.longitude, t.latitude, t.height);
                }),
                (o.equals = function(t, e) {
                    return (
                        t === e ||
                        (r(t) &&
                            r(e) &&
                            t.longitude === e.longitude &&
                            t.latitude === e.latitude &&
                            t.height === e.height)
                    );
                }),
                (o.equalsEpsilon = function(t, e, n) {
                    return (
                        t === e ||
                        (r(t) &&
                            r(e) &&
                            Math.abs(t.longitude - e.longitude) <= n &&
                            Math.abs(t.latitude - e.latitude) <= n &&
                            Math.abs(t.height - e.height) <= n)
                    );
                }),
                (o.ZERO = E(new o(0, 0, 0))),
                (o.prototype.clone = function(t) {
                    return o.clone(this, t);
                }),
                (o.prototype.equals = function(t) {
                    return o.equals(this, t);
                }),
                (o.prototype.equalsEpsilon = function(t, e) {
                    return o.equalsEpsilon(this, t, e);
                }),
                (o.prototype.toString = function() {
                    return "(" + this.longitude + ", " + this.latitude + ", " + this.height + ")";
                }),
                o
            );
        }),
        define("Core/defineProperties", ["./defined"], function(t) {
            "use strict";
            var e = (function() {
                    try {
                        return "x" in Object.defineProperty({}, "x", {});
                    } catch (t) {
                        return !1;
                    }
                })(),
                n = Object.defineProperties;
            return (
                (e && t(n)) ||
                    (n = function(t) {
                        return t;
                    }),
                n
            );
        }),
        define("Core/Ellipsoid", [
            "./Cartesian3",
            "./Cartographic",
            "./Check",
            "./defaultValue",
            "./defined",
            "./defineProperties",
            "./DeveloperError",
            "./freezeObject",
            "./Math",
            "./scaleToGeodeticSurface"
        ], function(t, e, n, r, E, a, i, o, _, u) {
            "use strict";
            function R(e, n, E, a) {
                (n = r(n, 0)),
                    (E = r(E, 0)),
                    (a = r(a, 0)),
                    (e._radii = new t(n, E, a)),
                    (e._radiiSquared = new t(n * n, E * E, a * a)),
                    (e._radiiToTheFourth = new t(n * n * n * n, E * E * E * E, a * a * a * a)),
                    (e._oneOverRadii = new t(
                        0 === n ? 0 : 1 / n,
                        0 === E ? 0 : 1 / E,
                        0 === a ? 0 : 1 / a
                    )),
                    (e._oneOverRadiiSquared = new t(
                        0 === n ? 0 : 1 / (n * n),
                        0 === E ? 0 : 1 / (E * E),
                        0 === a ? 0 : 1 / (a * a)
                    )),
                    (e._minimumRadius = Math.min(n, E, a)),
                    (e._maximumRadius = Math.max(n, E, a)),
                    (e._centerToleranceSquared = _.EPSILON1),
                    0 !== e._radiiSquared.z &&
                        (e._squaredXOverSquaredZ = e._radiiSquared.x / e._radiiSquared.z);
            }
            function T(t, e, n) {
                (this._radii = void 0),
                    (this._radiiSquared = void 0),
                    (this._radiiToTheFourth = void 0),
                    (this._oneOverRadii = void 0),
                    (this._oneOverRadiiSquared = void 0),
                    (this._minimumRadius = void 0),
                    (this._maximumRadius = void 0),
                    (this._centerToleranceSquared = void 0),
                    (this._squaredXOverSquaredZ = void 0),
                    R(this, t, e, n);
            }
            a(T.prototype, {
                radii: {
                    get: function() {
                        return this._radii;
                    }
                },
                radiiSquared: {
                    get: function() {
                        return this._radiiSquared;
                    }
                },
                radiiToTheFourth: {
                    get: function() {
                        return this._radiiToTheFourth;
                    }
                },
                oneOverRadii: {
                    get: function() {
                        return this._oneOverRadii;
                    }
                },
                oneOverRadiiSquared: {
                    get: function() {
                        return this._oneOverRadiiSquared;
                    }
                },
                minimumRadius: {
                    get: function() {
                        return this._minimumRadius;
                    }
                },
                maximumRadius: {
                    get: function() {
                        return this._maximumRadius;
                    }
                }
            }),
                (T.clone = function(e, n) {
                    if (E(e)) {
                        var r = e._radii;
                        return E(n)
                            ? (t.clone(r, n._radii),
                              t.clone(e._radiiSquared, n._radiiSquared),
                              t.clone(e._radiiToTheFourth, n._radiiToTheFourth),
                              t.clone(e._oneOverRadii, n._oneOverRadii),
                              t.clone(e._oneOverRadiiSquared, n._oneOverRadiiSquared),
                              (n._minimumRadius = e._minimumRadius),
                              (n._maximumRadius = e._maximumRadius),
                              (n._centerToleranceSquared = e._centerToleranceSquared),
                              n)
                            : new T(r.x, r.y, r.z);
                    }
                }),
                (T.fromCartesian3 = function(t, e) {
                    return E(e) || (e = new T()), E(t) ? (R(e, t.x, t.y, t.z), e) : e;
                }),
                (T.WGS84 = o(new T(6378137, 6378137, 6356752.314245179))),
                (T.UNIT_SPHERE = o(new T(1, 1, 1))),
                (T.MOON = o(new T(_.LUNAR_RADIUS, _.LUNAR_RADIUS, _.LUNAR_RADIUS))),
                (T.prototype.clone = function(t) {
                    return T.clone(this, t);
                }),
                (T.packedLength = t.packedLength),
                (T.pack = function(e, n, E) {
                    return (E = r(E, 0)), t.pack(e._radii, n, E), n;
                }),
                (T.unpack = function(e, n, E) {
                    n = r(n, 0);
                    var a = t.unpack(e, n);
                    return T.fromCartesian3(a, E);
                }),
                (T.prototype.geocentricSurfaceNormal = t.normalize),
                (T.prototype.geodeticSurfaceNormalCartographic = function(e, n) {
                    var r = e.longitude,
                        a = e.latitude,
                        i = Math.cos(a),
                        o = i * Math.cos(r),
                        _ = i * Math.sin(r),
                        u = Math.sin(a);
                    return (
                        E(n) || (n = new t()), (n.x = o), (n.y = _), (n.z = u), t.normalize(n, n)
                    );
                }),
                (T.prototype.geodeticSurfaceNormal = function(e, n) {
                    return (
                        E(n) || (n = new t()),
                        (n = t.multiplyComponents(e, this._oneOverRadiiSquared, n)),
                        t.normalize(n, n)
                    );
                });
            var A = new t(),
                s = new t();
            (T.prototype.cartographicToCartesian = function(e, n) {
                var r = A,
                    a = s;
                this.geodeticSurfaceNormalCartographic(e, r),
                    t.multiplyComponents(this._radiiSquared, r, a);
                var i = Math.sqrt(t.dot(r, a));
                return (
                    t.divideByScalar(a, i, a),
                    t.multiplyByScalar(r, e.height, r),
                    E(n) || (n = new t()),
                    t.add(a, r, n)
                );
            }),
                (T.prototype.cartographicArrayToCartesianArray = function(t, e) {
                    var n = t.length;
                    E(e) ? (e.length = n) : (e = new Array(n));
                    for (var r = 0; r < n; r++) e[r] = this.cartographicToCartesian(t[r], e[r]);
                    return e;
                });
            var c = new t(),
                N = new t(),
                I = new t();
            return (
                (T.prototype.cartesianToCartographic = function(n, r) {
                    var a = this.scaleToGeodeticSurface(n, N);
                    if (E(a)) {
                        var i = this.geodeticSurfaceNormal(a, c),
                            o = t.subtract(n, a, I),
                            u = Math.atan2(i.y, i.x),
                            R = Math.asin(i.z),
                            T = _.sign(t.dot(o, n)) * t.magnitude(o);
                        return E(r)
                            ? ((r.longitude = u), (r.latitude = R), (r.height = T), r)
                            : new e(u, R, T);
                    }
                }),
                (T.prototype.cartesianArrayToCartographicArray = function(t, e) {
                    var n = t.length;
                    E(e) ? (e.length = n) : (e = new Array(n));
                    for (var r = 0; r < n; ++r) e[r] = this.cartesianToCartographic(t[r], e[r]);
                    return e;
                }),
                (T.prototype.scaleToGeodeticSurface = function(t, e) {
                    return u(
                        t,
                        this._oneOverRadii,
                        this._oneOverRadiiSquared,
                        this._centerToleranceSquared,
                        e
                    );
                }),
                (T.prototype.scaleToGeocentricSurface = function(e, n) {
                    E(n) || (n = new t());
                    var r = e.x,
                        a = e.y,
                        i = e.z,
                        o = this._oneOverRadiiSquared,
                        _ = 1 / Math.sqrt(r * r * o.x + a * a * o.y + i * i * o.z);
                    return t.multiplyByScalar(e, _, n);
                }),
                (T.prototype.transformPositionToScaledSpace = function(e, n) {
                    return E(n) || (n = new t()), t.multiplyComponents(e, this._oneOverRadii, n);
                }),
                (T.prototype.transformPositionFromScaledSpace = function(e, n) {
                    return E(n) || (n = new t()), t.multiplyComponents(e, this._radii, n);
                }),
                (T.prototype.equals = function(e) {
                    return this === e || (E(e) && t.equals(this._radii, e._radii));
                }),
                (T.prototype.toString = function() {
                    return this._radii.toString();
                }),
                (T.prototype.getSurfaceNormalIntersectionWithZAxis = function(e, n, a) {
                    n = r(n, 0);
                    var i = this._squaredXOverSquaredZ;
                    if (
                        (E(a) || (a = new t()),
                        (a.x = 0),
                        (a.y = 0),
                        (a.z = e.z * (1 - i)),
                        !(Math.abs(a.z) >= this._radii.z - n))
                    )
                        return a;
                }),
                T
            );
        }),
        define("Core/WebGLConstants", ["./freezeObject"], function(t) {
            "use strict";
            return t({
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
        define("Core/IndexDatatype", [
            "./defined",
            "./DeveloperError",
            "./freezeObject",
            "./Math",
            "./WebGLConstants"
        ], function(t, e, n, r, E) {
            "use strict";
            var a = {
                UNSIGNED_BYTE: E.UNSIGNED_BYTE,
                UNSIGNED_SHORT: E.UNSIGNED_SHORT,
                UNSIGNED_INT: E.UNSIGNED_INT
            };
            return (
                (a.getSizeInBytes = function(t) {
                    switch (t) {
                        case a.UNSIGNED_BYTE:
                            return Uint8Array.BYTES_PER_ELEMENT;
                        case a.UNSIGNED_SHORT:
                            return Uint16Array.BYTES_PER_ELEMENT;
                        case a.UNSIGNED_INT:
                            return Uint32Array.BYTES_PER_ELEMENT;
                    }
                }),
                (a.validate = function(e) {
                    return (
                        t(e) &&
                        (e === a.UNSIGNED_BYTE || e === a.UNSIGNED_SHORT || e === a.UNSIGNED_INT)
                    );
                }),
                (a.createTypedArray = function(t, e) {
                    return t >= r.SIXTY_FOUR_KILOBYTES ? new Uint32Array(e) : new Uint16Array(e);
                }),
                (a.createTypedArrayFromArrayBuffer = function(t, e, n, E) {
                    return t >= r.SIXTY_FOUR_KILOBYTES
                        ? new Uint32Array(e, n, E)
                        : new Uint16Array(e, n, E);
                }),
                n(a)
            );
        }),
        define("Core/Rectangle", [
            "./Cartographic",
            "./Check",
            "./defaultValue",
            "./defined",
            "./defineProperties",
            "./Ellipsoid",
            "./freezeObject",
            "./Math"
        ], function(t, e, n, r, E, a, i, o) {
            "use strict";
            function _(t, e, r, E) {
                (this.west = n(t, 0)),
                    (this.south = n(e, 0)),
                    (this.east = n(r, 0)),
                    (this.north = n(E, 0));
            }
            E(_.prototype, {
                width: {
                    get: function() {
                        return _.computeWidth(this);
                    }
                },
                height: {
                    get: function() {
                        return _.computeHeight(this);
                    }
                }
            }),
                (_.packedLength = 4),
                (_.pack = function(t, e, r) {
                    return (
                        (r = n(r, 0)),
                        (e[r++] = t.west),
                        (e[r++] = t.south),
                        (e[r++] = t.east),
                        (e[r] = t.north),
                        e
                    );
                }),
                (_.unpack = function(t, e, E) {
                    return (
                        (e = n(e, 0)),
                        r(E) || (E = new _()),
                        (E.west = t[e++]),
                        (E.south = t[e++]),
                        (E.east = t[e++]),
                        (E.north = t[e]),
                        E
                    );
                }),
                (_.computeWidth = function(t) {
                    var e = t.east,
                        n = t.west;
                    return e < n && (e += o.TWO_PI), e - n;
                }),
                (_.computeHeight = function(t) {
                    return t.north - t.south;
                }),
                (_.fromDegrees = function(t, e, E, a, i) {
                    return (
                        (t = o.toRadians(n(t, 0))),
                        (e = o.toRadians(n(e, 0))),
                        (E = o.toRadians(n(E, 0))),
                        (a = o.toRadians(n(a, 0))),
                        r(i)
                            ? ((i.west = t), (i.south = e), (i.east = E), (i.north = a), i)
                            : new _(t, e, E, a)
                    );
                }),
                (_.fromRadians = function(t, e, E, a, i) {
                    return r(i)
                        ? ((i.west = n(t, 0)),
                          (i.south = n(e, 0)),
                          (i.east = n(E, 0)),
                          (i.north = n(a, 0)),
                          i)
                        : new _(t, e, E, a);
                }),
                (_.fromCartographicArray = function(t, e) {
                    for (
                        var n = Number.MAX_VALUE,
                            E = -Number.MAX_VALUE,
                            a = Number.MAX_VALUE,
                            i = -Number.MAX_VALUE,
                            u = Number.MAX_VALUE,
                            R = -Number.MAX_VALUE,
                            T = 0,
                            A = t.length;
                        T < A;
                        T++
                    ) {
                        var s = t[T];
                        (n = Math.min(n, s.longitude)),
                            (E = Math.max(E, s.longitude)),
                            (u = Math.min(u, s.latitude)),
                            (R = Math.max(R, s.latitude));
                        var c = s.longitude >= 0 ? s.longitude : s.longitude + o.TWO_PI;
                        (a = Math.min(a, c)), (i = Math.max(i, c));
                    }
                    return (
                        E - n > i - a &&
                            ((n = a),
                            (E = i),
                            E > o.PI && (E -= o.TWO_PI),
                            n > o.PI && (n -= o.TWO_PI)),
                        r(e)
                            ? ((e.west = n), (e.south = u), (e.east = E), (e.north = R), e)
                            : new _(n, u, E, R)
                    );
                }),
                (_.fromCartesianArray = function(t, e, E) {
                    e = n(e, a.WGS84);
                    for (
                        var i = Number.MAX_VALUE,
                            u = -Number.MAX_VALUE,
                            R = Number.MAX_VALUE,
                            T = -Number.MAX_VALUE,
                            A = Number.MAX_VALUE,
                            s = -Number.MAX_VALUE,
                            c = 0,
                            N = t.length;
                        c < N;
                        c++
                    ) {
                        var I = e.cartesianToCartographic(t[c]);
                        (i = Math.min(i, I.longitude)),
                            (u = Math.max(u, I.longitude)),
                            (A = Math.min(A, I.latitude)),
                            (s = Math.max(s, I.latitude));
                        var h = I.longitude >= 0 ? I.longitude : I.longitude + o.TWO_PI;
                        (R = Math.min(R, h)), (T = Math.max(T, h));
                    }
                    return (
                        u - i > T - R &&
                            ((i = R),
                            (u = T),
                            u > o.PI && (u -= o.TWO_PI),
                            i > o.PI && (i -= o.TWO_PI)),
                        r(E)
                            ? ((E.west = i), (E.south = A), (E.east = u), (E.north = s), E)
                            : new _(i, A, u, s)
                    );
                }),
                (_.clone = function(t, e) {
                    if (r(t))
                        return r(e)
                            ? ((e.west = t.west),
                              (e.south = t.south),
                              (e.east = t.east),
                              (e.north = t.north),
                              e)
                            : new _(t.west, t.south, t.east, t.north);
                }),
                (_.equalsEpsilon = function(t, e, n) {
                    return (
                        t === e ||
                        (r(t) &&
                            r(e) &&
                            Math.abs(t.west - e.west) <= n &&
                            Math.abs(t.south - e.south) <= n &&
                            Math.abs(t.east - e.east) <= n &&
                            Math.abs(t.north - e.north) <= n)
                    );
                }),
                (_.prototype.clone = function(t) {
                    return _.clone(this, t);
                }),
                (_.prototype.equals = function(t) {
                    return _.equals(this, t);
                }),
                (_.equals = function(t, e) {
                    return (
                        t === e ||
                        (r(t) &&
                            r(e) &&
                            t.west === e.west &&
                            t.south === e.south &&
                            t.east === e.east &&
                            t.north === e.north)
                    );
                }),
                (_.prototype.equalsEpsilon = function(t, e) {
                    return _.equalsEpsilon(this, t, e);
                }),
                (_.validate = function(t) {}),
                (_.southwest = function(e, n) {
                    return r(n)
                        ? ((n.longitude = e.west), (n.latitude = e.south), (n.height = 0), n)
                        : new t(e.west, e.south);
                }),
                (_.northwest = function(e, n) {
                    return r(n)
                        ? ((n.longitude = e.west), (n.latitude = e.north), (n.height = 0), n)
                        : new t(e.west, e.north);
                }),
                (_.northeast = function(e, n) {
                    return r(n)
                        ? ((n.longitude = e.east), (n.latitude = e.north), (n.height = 0), n)
                        : new t(e.east, e.north);
                }),
                (_.southeast = function(e, n) {
                    return r(n)
                        ? ((n.longitude = e.east), (n.latitude = e.south), (n.height = 0), n)
                        : new t(e.east, e.south);
                }),
                (_.center = function(e, n) {
                    var E = e.east,
                        a = e.west;
                    E < a && (E += o.TWO_PI);
                    var i = o.negativePiToPi(0.5 * (a + E)),
                        _ = 0.5 * (e.south + e.north);
                    return r(n)
                        ? ((n.longitude = i), (n.latitude = _), (n.height = 0), n)
                        : new t(i, _);
                }),
                (_.intersection = function(t, e, n) {
                    var E = t.east,
                        a = t.west,
                        i = e.east,
                        u = e.west;
                    E < a && i > 0 ? (E += o.TWO_PI) : i < u && E > 0 && (i += o.TWO_PI),
                        E < a && u < 0 ? (u += o.TWO_PI) : i < u && a < 0 && (a += o.TWO_PI);
                    var R = o.negativePiToPi(Math.max(a, u)),
                        T = o.negativePiToPi(Math.min(E, i));
                    if (!((t.west < t.east || e.west < e.east) && T <= R)) {
                        var A = Math.max(t.south, e.south),
                            s = Math.min(t.north, e.north);
                        if (!(A >= s))
                            return r(n)
                                ? ((n.west = R), (n.south = A), (n.east = T), (n.north = s), n)
                                : new _(R, A, T, s);
                    }
                }),
                (_.simpleIntersection = function(t, e, n) {
                    var E = Math.max(t.west, e.west),
                        a = Math.max(t.south, e.south),
                        i = Math.min(t.east, e.east),
                        o = Math.min(t.north, e.north);
                    if (!(a >= o || E >= i))
                        return r(n)
                            ? ((n.west = E), (n.south = a), (n.east = i), (n.north = o), n)
                            : new _(E, a, i, o);
                }),
                (_.union = function(t, e, n) {
                    r(n) || (n = new _());
                    var E = t.east,
                        a = t.west,
                        i = e.east,
                        u = e.west;
                    E < a && i > 0 ? (E += o.TWO_PI) : i < u && E > 0 && (i += o.TWO_PI),
                        E < a && u < 0 ? (u += o.TWO_PI) : i < u && a < 0 && (a += o.TWO_PI);
                    var R = o.convertLongitudeRange(Math.min(a, u)),
                        T = o.convertLongitudeRange(Math.max(E, i));
                    return (
                        (n.west = R),
                        (n.south = Math.min(t.south, e.south)),
                        (n.east = T),
                        (n.north = Math.max(t.north, e.north)),
                        n
                    );
                }),
                (_.expand = function(t, e, n) {
                    return (
                        r(n) || (n = new _()),
                        (n.west = Math.min(t.west, e.longitude)),
                        (n.south = Math.min(t.south, e.latitude)),
                        (n.east = Math.max(t.east, e.longitude)),
                        (n.north = Math.max(t.north, e.latitude)),
                        n
                    );
                }),
                (_.contains = function(t, e) {
                    var n = e.longitude,
                        r = e.latitude,
                        E = t.west,
                        a = t.east;
                    return (
                        a < E && ((a += o.TWO_PI), n < 0 && (n += o.TWO_PI)),
                        (n > E || o.equalsEpsilon(n, E, o.EPSILON14)) &&
                            (n < a || o.equalsEpsilon(n, a, o.EPSILON14)) &&
                            r >= t.south &&
                            r <= t.north
                    );
                });
            var u = new t();
            return (
                (_.subsample = function(t, e, E, i) {
                    (e = n(e, a.WGS84)), (E = n(E, 0)), r(i) || (i = []);
                    var R = 0,
                        T = t.north,
                        A = t.south,
                        s = t.east,
                        c = t.west,
                        N = u;
                    (N.height = E),
                        (N.longitude = c),
                        (N.latitude = T),
                        (i[R] = e.cartographicToCartesian(N, i[R])),
                        R++,
                        (N.longitude = s),
                        (i[R] = e.cartographicToCartesian(N, i[R])),
                        R++,
                        (N.latitude = A),
                        (i[R] = e.cartographicToCartesian(N, i[R])),
                        R++,
                        (N.longitude = c),
                        (i[R] = e.cartographicToCartesian(N, i[R])),
                        R++,
                        (N.latitude = T < 0 ? T : A > 0 ? A : 0);
                    for (var I = 1; I < 8; ++I)
                        (N.longitude = -Math.PI + I * o.PI_OVER_TWO),
                            _.contains(t, N) && ((i[R] = e.cartographicToCartesian(N, i[R])), R++);
                    return (
                        0 === N.latitude &&
                            ((N.longitude = c),
                            (i[R] = e.cartographicToCartesian(N, i[R])),
                            R++,
                            (N.longitude = s),
                            (i[R] = e.cartographicToCartesian(N, i[R])),
                            R++),
                        (i.length = R),
                        i
                    );
                }),
                (_.MAX_VALUE = i(new _(-Math.PI, -o.PI_OVER_TWO, Math.PI, o.PI_OVER_TWO))),
                _
            );
        }),
        (function(t) {
            "use strict";
            t("ThirdParty/when", [], function() {
                function t(t, n, r, E) {
                    return e(t).then(n, r, E);
                }
                function e(t) {
                    var e, n;
                    return (
                        t instanceof r
                            ? (e = t)
                            : o(t)
                            ? ((n = i()),
                              t.then(
                                  function(t) {
                                      n.resolve(t);
                                  },
                                  function(t) {
                                      n.reject(t);
                                  },
                                  function(t) {
                                      n.progress(t);
                                  }
                              ),
                              (e = n.promise))
                            : (e = E(t)),
                        e
                    );
                }
                function n(e) {
                    return t(e, a);
                }
                function r(t) {
                    this.then = t;
                }
                function E(t) {
                    return new r(function(n) {
                        try {
                            return e(n ? n(t) : t);
                        } catch (t) {
                            return a(t);
                        }
                    });
                }
                function a(t) {
                    return new r(function(n, r) {
                        try {
                            return r ? e(r(t)) : a(t);
                        } catch (t) {
                            return a(t);
                        }
                    });
                }
                function i() {
                    function t(t, e, n) {
                        return A(t, e, n);
                    }
                    function n(t) {
                        return c(t);
                    }
                    function E(t) {
                        return c(a(t));
                    }
                    function o(t) {
                        return s(t);
                    }
                    var _, u, R, T, A, s, c;
                    return (
                        (u = new r(t)),
                        (_ = {
                            then: t,
                            resolve: n,
                            reject: E,
                            progress: o,
                            promise: u,
                            resolver: { resolve: n, reject: E, progress: o }
                        }),
                        (R = []),
                        (T = []),
                        (A = function(t, e, n) {
                            var r, E;
                            return (
                                (r = i()),
                                (E =
                                    "function" == typeof n
                                        ? function(t) {
                                              try {
                                                  r.progress(n(t));
                                              } catch (t) {
                                                  r.progress(t);
                                              }
                                          }
                                        : function(t) {
                                              r.progress(t);
                                          }),
                                R.push(function(n) {
                                    n.then(t, e).then(r.resolve, r.reject, E);
                                }),
                                T.push(E),
                                r.promise
                            );
                        }),
                        (s = function(t) {
                            return N(T, t), t;
                        }),
                        (c = function(t) {
                            return (
                                (t = e(t)), (A = t.then), (c = e), (s = h), N(R, t), (T = R = O), t
                            );
                        }),
                        _
                    );
                }
                function o(t) {
                    return t && "function" == typeof t.then;
                }
                function _(e, n, r, E, a) {
                    return (
                        I(2, arguments),
                        t(e, function(e) {
                            function o(t) {
                                N(t);
                            }
                            function _(t) {
                                c(t);
                            }
                            var u, R, T, A, s, c, N, I, f, S;
                            if (
                                ((f = e.length >>> 0),
                                (u = Math.max(0, Math.min(n, f))),
                                (T = []),
                                (R = f - u + 1),
                                (A = []),
                                (s = i()),
                                u)
                            )
                                for (
                                    I = s.progress,
                                        N = function(t) {
                                            A.push(t), --R || ((c = N = h), s.reject(A));
                                        },
                                        c = function(t) {
                                            T.push(t), --u || ((c = N = h), s.resolve(T));
                                        },
                                        S = 0;
                                    S < f;
                                    ++S
                                )
                                    S in e && t(e[S], _, o, I);
                            else s.resolve(T);
                            return s.then(r, E, a);
                        })
                    );
                }
                function u(t, e, n, r) {
                    function E(t) {
                        return e ? e(t[0]) : t[0];
                    }
                    return _(t, 1, E, n, r);
                }
                function R(t, e, n, r) {
                    return I(1, arguments), A(t, f).then(e, n, r);
                }
                function T() {
                    return A(arguments, f);
                }
                function A(e, n) {
                    return t(e, function(e) {
                        var r, E, a, o, _, u;
                        if (((a = E = e.length >>> 0), (r = []), (u = i()), a))
                            for (
                                o = function(e, E) {
                                    t(e, n).then(function(t) {
                                        (r[E] = t), --a || u.resolve(r);
                                    }, u.reject);
                                },
                                    _ = 0;
                                _ < E;
                                _++
                            )
                                _ in e ? o(e[_], _) : --a;
                        else u.resolve(r);
                        return u.promise;
                    });
                }
                function s(e, n) {
                    var r = M.call(arguments, 1);
                    return t(e, function(e) {
                        var E;
                        return (
                            (E = e.length),
                            (r[0] = function(e, r, a) {
                                return t(e, function(e) {
                                    return t(r, function(t) {
                                        return n(e, t, a, E);
                                    });
                                });
                            }),
                            S.apply(e, r)
                        );
                    });
                }
                function c(e, n, r) {
                    var E = arguments.length > 2;
                    return t(
                        e,
                        function(t) {
                            return (t = E ? r : t), n.resolve(t), t;
                        },
                        function(t) {
                            return n.reject(t), a(t);
                        },
                        n.progress
                    );
                }
                function N(t, e) {
                    for (var n, r = 0; (n = t[r++]); ) n(e);
                }
                function I(t, e) {
                    for (var n, r = e.length; r > t; )
                        if (null != (n = e[--r]) && "function" != typeof n)
                            throw new Error("arg " + r + " must be a function");
                }
                function h() {}
                function f(t) {
                    return t;
                }
                var S, M, O;
                return (
                    (t.defer = i),
                    (t.resolve = e),
                    (t.reject = n),
                    (t.join = T),
                    (t.all = R),
                    (t.map = A),
                    (t.reduce = s),
                    (t.any = u),
                    (t.some = _),
                    (t.chain = c),
                    (t.isPromise = o),
                    (r.prototype = {
                        always: function(t, e) {
                            return this.then(t, t, e);
                        },
                        otherwise: function(t) {
                            return this.then(O, t);
                        },
                        yield: function(t) {
                            return this.then(function() {
                                return t;
                            });
                        },
                        spread: function(t) {
                            return this.then(function(e) {
                                return R(e, function(e) {
                                    return t.apply(O, e);
                                });
                            });
                        }
                    }),
                    (M = [].slice),
                    (S =
                        [].reduce ||
                        function(t) {
                            var e, n, r, E, a;
                            if (
                                ((a = 0),
                                (e = Object(this)),
                                (E = e.length >>> 0),
                                (n = arguments),
                                n.length <= 1)
                            )
                                for (;;) {
                                    if (a in e) {
                                        r = e[a++];
                                        break;
                                    }
                                    if (++a >= E) throw new TypeError();
                                }
                            else r = n[1];
                            for (; a < E; ++a) a in e && (r = t(r, e[a], a, e));
                            return r;
                        }),
                    t
                );
            });
        })(
            "function" == typeof define && define.amd
                ? define
                : function(t) {
                      "object" == typeof exports ? (module.exports = t()) : (this.when = t());
                  }
        ),
        define("Core/formatError", ["./defined"], function(t) {
            "use strict";
            function e(e) {
                var n,
                    r = e.name,
                    E = e.message;
                n = t(r) && t(E) ? r + ": " + E : e.toString();
                var a = e.stack;
                return t(a) && (n += "\n" + a), n;
            }
            return e;
        }),
        define("Workers/createTaskProcessorWorker", [
            "../ThirdParty/when",
            "../Core/defaultValue",
            "../Core/defined",
            "../Core/formatError"
        ], function(t, e, n, r) {
            "use strict";
            function E(e, n, r) {
                try {
                    return e(n, r);
                } catch (e) {
                    return t.reject(e);
                }
            }
            function a(a) {
                var i;
                return function(o) {
                    var _ = o.data,
                        u = [],
                        R = { id: _.id, result: void 0, error: void 0 };
                    return t(E(a, _.parameters, u))
                        .then(function(t) {
                            R.result = t;
                        })
                        .otherwise(function(t) {
                            t instanceof Error
                                ? (R.error = { name: t.name, message: t.message, stack: t.stack })
                                : (R.error = t);
                        })
                        .always(function() {
                            n(i) || (i = e(self.webkitPostMessage, self.postMessage)),
                                _.canTransferArrayBuffer || (u.length = 0);
                            try {
                                i(R, u);
                            } catch (t) {
                                (R.result = void 0),
                                    (R.error =
                                        "postMessage failed with error: " +
                                        r(t) +
                                        "\n  with responseMessage: " +
                                        JSON.stringify(R)),
                                    i(R);
                            }
                        });
                };
            }
            return a;
        }),
        define("Workers/createVectorTilePolylines", [
            "../Core/AttributeCompression",
            "../Core/Cartesian3",
            "../Core/Cartographic",
            "../Core/Ellipsoid",
            "../Core/IndexDatatype",
            "../Core/Math",
            "../Core/Rectangle",
            "./createTaskProcessorWorker"
        ], function(t, e, n, r, E, a, i, o) {
            "use strict";
            function _(r, E, i, o, _) {
                var u = r.length / 3,
                    R = r.subarray(0, u),
                    c = r.subarray(u, 2 * u),
                    N = r.subarray(2 * u, 3 * u);
                t.zigZagDeltaDecode(R, c, N);
                for (var I = new Float32Array(r.length), h = 0; h < u; ++h) {
                    var f = R[h],
                        S = c[h],
                        M = N[h],
                        O = a.lerp(E.west, E.east, f / T),
                        d = a.lerp(E.south, E.north, S / T),
                        C = a.lerp(i, o, M / T),
                        l = n.fromRadians(O, d, C, A),
                        U = _.cartographicToCartesian(l, s);
                    e.pack(U, I, 3 * h);
                }
                return I;
            }
            function u(t) {
                t = new Float64Array(t);
                var n = 0;
                (h.min = t[n++]),
                    (h.max = t[n++]),
                    i.unpack(t, n, c),
                    (n += i.packedLength),
                    r.unpack(t, n, N),
                    (n += r.packedLength),
                    e.unpack(t, n, I);
            }
            function R(t, n) {
                var r = new Uint16Array(t.positions),
                    a = new Uint16Array(t.widths),
                    i = new Uint32Array(t.counts),
                    o = new Uint16Array(t.batchIds);
                u(t.packedBuffer);
                var R,
                    T = c,
                    A = N,
                    s = I,
                    C = h.min,
                    l = h.max,
                    U = _(r, T, C, l, A),
                    F = U.length / 3,
                    P = 4 * F - 4,
                    L = new Float32Array(3 * P),
                    m = new Float32Array(3 * P),
                    D = new Float32Array(3 * P),
                    p = new Float32Array(2 * P),
                    y = new Uint16Array(P),
                    B = 0,
                    g = 0,
                    v = 0,
                    w = 0,
                    G = i.length;
                for (R = 0; R < G; ++R) {
                    for (var x = i[R], X = a[R], V = o[R], b = 0; b < x; ++b) {
                        var H;
                        if (0 === b) {
                            var z = e.unpack(U, 3 * w, f),
                                W = e.unpack(U, 3 * (w + 1), S);
                            (H = e.subtract(z, W, M)), e.add(z, H, H);
                        } else H = e.unpack(U, 3 * (w + b - 1), M);
                        var q,
                            Y = e.unpack(U, 3 * (w + b), O);
                        if (b === x - 1) {
                            var K = e.unpack(U, 3 * (w + x - 1), f),
                                k = e.unpack(U, 3 * (w + x - 2), S);
                            (q = e.subtract(K, k, d)), e.add(K, q, q);
                        } else q = e.unpack(U, 3 * (w + b + 1), d);
                        e.subtract(H, s, H), e.subtract(Y, s, Y), e.subtract(q, s, q);
                        for (var Z = 0 === b ? 2 : 0, j = b === x - 1 ? 2 : 4, Q = Z; Q < j; ++Q) {
                            e.pack(Y, L, B), e.pack(H, m, B), e.pack(q, D, B), (B += 3);
                            var J = Q - 2 < 0 ? -1 : 1;
                            (p[g++] = (Q % 2) * 2 - 1), (p[g++] = J * X), (y[v++] = V);
                        }
                    }
                    w += x;
                }
                var $ = E.createTypedArray(P, 6 * F - 6),
                    tt = 0,
                    et = 0;
                for (G = F - 1, R = 0; R < G; ++R)
                    ($[et++] = tt),
                        ($[et++] = tt + 2),
                        ($[et++] = tt + 1),
                        ($[et++] = tt + 1),
                        ($[et++] = tt + 2),
                        ($[et++] = tt + 3),
                        (tt += 4);
                return (
                    n.push(L.buffer, m.buffer, D.buffer),
                    n.push(p.buffer, y.buffer, $.buffer),
                    {
                        indexDatatype:
                            2 === $.BYTES_PER_ELEMENT ? E.UNSIGNED_SHORT : E.UNSIGNED_INT,
                        currentPositions: L.buffer,
                        previousPositions: m.buffer,
                        nextPositions: D.buffer,
                        expandAndWidth: p.buffer,
                        batchIds: y.buffer,
                        indices: $.buffer
                    }
                );
            }
            var T = 32767,
                A = new n(),
                s = new e(),
                c = new i(),
                N = new r(),
                I = new e(),
                h = { min: void 0, max: void 0 },
                f = new e(),
                S = new e(),
                M = new e(),
                O = new e(),
                d = new e();
            return o(R);
        });
})();

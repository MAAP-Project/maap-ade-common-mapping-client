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
            var i = {};
            return (
                (i.typeOf = {}),
                (i.defined = function(r, i) {
                    if (!t(i)) throw new e(n(r));
                }),
                (i.typeOf.func = function(t, n) {
                    if ("function" != typeof n) throw new e(r(typeof n, "function", t));
                }),
                (i.typeOf.string = function(t, n) {
                    if ("string" != typeof n) throw new e(r(typeof n, "string", t));
                }),
                (i.typeOf.number = function(t, n) {
                    if ("number" != typeof n) throw new e(r(typeof n, "number", t));
                }),
                (i.typeOf.number.lessThan = function(t, n, r) {
                    if ((i.typeOf.number(t, n), n >= r))
                        throw new e(
                            "Expected " + t + " to be less than " + r + ", actual value was " + n
                        );
                }),
                (i.typeOf.number.lessThanOrEquals = function(t, n, r) {
                    if ((i.typeOf.number(t, n), n > r))
                        throw new e(
                            "Expected " +
                                t +
                                " to be less than or equal to " +
                                r +
                                ", actual value was " +
                                n
                        );
                }),
                (i.typeOf.number.greaterThan = function(t, n, r) {
                    if ((i.typeOf.number(t, n), n <= r))
                        throw new e(
                            "Expected " + t + " to be greater than " + r + ", actual value was " + n
                        );
                }),
                (i.typeOf.number.greaterThanOrEquals = function(t, n, r) {
                    if ((i.typeOf.number(t, n), n < r))
                        throw new e(
                            "Expected " +
                                t +
                                " to be greater than or equal to" +
                                r +
                                ", actual value was " +
                                n
                        );
                }),
                (i.typeOf.object = function(t, n) {
                    if ("object" != typeof n) throw new e(r(typeof n, "object", t));
                }),
                (i.typeOf.bool = function(t, n) {
                    if ("boolean" != typeof n) throw new e(r(typeof n, "boolean", t));
                }),
                (i.typeOf.number.equals = function(t, n, r, o) {
                    if ((i.typeOf.number(t, r), i.typeOf.number(n, o), r !== o))
                        throw new e(
                            t +
                                " must be equal to " +
                                n +
                                ", the actual values are " +
                                r +
                                " and " +
                                o
                        );
                }),
                i
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
        ], function(t, e, n, r, i) {
            "use strict";
            var o = {};
            (o.EPSILON1 = 0.1),
                (o.EPSILON2 = 0.01),
                (o.EPSILON3 = 0.001),
                (o.EPSILON4 = 1e-4),
                (o.EPSILON5 = 1e-5),
                (o.EPSILON6 = 1e-6),
                (o.EPSILON7 = 1e-7),
                (o.EPSILON8 = 1e-8),
                (o.EPSILON9 = 1e-9),
                (o.EPSILON10 = 1e-10),
                (o.EPSILON11 = 1e-11),
                (o.EPSILON12 = 1e-12),
                (o.EPSILON13 = 1e-13),
                (o.EPSILON14 = 1e-14),
                (o.EPSILON15 = 1e-15),
                (o.EPSILON16 = 1e-16),
                (o.EPSILON17 = 1e-17),
                (o.EPSILON18 = 1e-18),
                (o.EPSILON19 = 1e-19),
                (o.EPSILON20 = 1e-20),
                (o.EPSILON21 = 1e-21),
                (o.GRAVITATIONALPARAMETER = 3986004418e5),
                (o.SOLAR_RADIUS = 6955e5),
                (o.LUNAR_RADIUS = 1737400),
                (o.SIXTY_FOUR_KILOBYTES = 65536),
                (o.sign = n(Math.sign, function(t) {
                    return (t = +t), 0 === t || t !== t ? t : t > 0 ? 1 : -1;
                })),
                (o.signNotZero = function(t) {
                    return t < 0 ? -1 : 1;
                }),
                (o.toSNorm = function(t, e) {
                    return (e = n(e, 255)), Math.round((0.5 * o.clamp(t, -1, 1) + 0.5) * e);
                }),
                (o.fromSNorm = function(t, e) {
                    return (e = n(e, 255)), (o.clamp(t, 0, e) / e) * 2 - 1;
                }),
                (o.normalize = function(t, e, n) {
                    return (n = Math.max(n - e, 0)), 0 === n ? 0 : o.clamp((t - e) / n, 0, 1);
                }),
                (o.sinh = n(Math.sinh, function(t) {
                    return (Math.exp(t) - Math.exp(-t)) / 2;
                })),
                (o.cosh = n(Math.cosh, function(t) {
                    return (Math.exp(t) + Math.exp(-t)) / 2;
                })),
                (o.lerp = function(t, e, n) {
                    return (1 - n) * t + n * e;
                }),
                (o.PI = Math.PI),
                (o.ONE_OVER_PI = 1 / Math.PI),
                (o.PI_OVER_TWO = Math.PI / 2),
                (o.PI_OVER_THREE = Math.PI / 3),
                (o.PI_OVER_FOUR = Math.PI / 4),
                (o.PI_OVER_SIX = Math.PI / 6),
                (o.THREE_PI_OVER_TWO = (3 * Math.PI) / 2),
                (o.TWO_PI = 2 * Math.PI),
                (o.ONE_OVER_TWO_PI = 1 / (2 * Math.PI)),
                (o.RADIANS_PER_DEGREE = Math.PI / 180),
                (o.DEGREES_PER_RADIAN = 180 / Math.PI),
                (o.RADIANS_PER_ARCSECOND = o.RADIANS_PER_DEGREE / 3600),
                (o.toRadians = function(t) {
                    return t * o.RADIANS_PER_DEGREE;
                }),
                (o.toDegrees = function(t) {
                    return t * o.DEGREES_PER_RADIAN;
                }),
                (o.convertLongitudeRange = function(t) {
                    var e = o.TWO_PI,
                        n = t - Math.floor(t / e) * e;
                    return n < -Math.PI ? n + e : n >= Math.PI ? n - e : n;
                }),
                (o.clampToLatitudeRange = function(t) {
                    return o.clamp(t, -1 * o.PI_OVER_TWO, o.PI_OVER_TWO);
                }),
                (o.negativePiToPi = function(t) {
                    return o.zeroToTwoPi(t + o.PI) - o.PI;
                }),
                (o.zeroToTwoPi = function(t) {
                    var e = o.mod(t, o.TWO_PI);
                    return Math.abs(e) < o.EPSILON14 && Math.abs(t) > o.EPSILON14 ? o.TWO_PI : e;
                }),
                (o.mod = function(t, e) {
                    return ((t % e) + e) % e;
                }),
                (o.equalsEpsilon = function(t, e, r, i) {
                    i = n(i, r);
                    var o = Math.abs(t - e);
                    return o <= i || o <= r * Math.max(Math.abs(t), Math.abs(e));
                }),
                (o.lessThan = function(t, e, n) {
                    return t - e < -n;
                }),
                (o.lessThanOrEquals = function(t, e, n) {
                    return t - e < n;
                }),
                (o.greaterThan = function(t, e, n) {
                    return t - e > n;
                }),
                (o.greaterThanOrEquals = function(t, e, n) {
                    return t - e > -n;
                });
            var a = [1];
            (o.factorial = function(t) {
                var e = a.length;
                if (t >= e) for (var n = a[e - 1], r = e; r <= t; r++) a.push(n * r);
                return a[t];
            }),
                (o.incrementWrap = function(t, e, r) {
                    return (r = n(r, 0)), ++t, t > e && (t = r), t;
                }),
                (o.isPowerOfTwo = function(t) {
                    return 0 !== t && 0 == (t & (t - 1));
                }),
                (o.nextPowerOfTwo = function(t) {
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
                (o.clamp = function(t, e, n) {
                    return t < e ? e : t > n ? n : t;
                });
            var u = new t();
            return (
                (o.setRandomNumberSeed = function(e) {
                    u = new t(e);
                }),
                (o.nextRandomNumber = function() {
                    return u.random();
                }),
                (o.randomBetween = function(t, e) {
                    return o.nextRandomNumber() * (e - t) + t;
                }),
                (o.acosClamped = function(t) {
                    return Math.acos(o.clamp(t, -1, 1));
                }),
                (o.asinClamped = function(t) {
                    return Math.asin(o.clamp(t, -1, 1));
                }),
                (o.chordLength = function(t, e) {
                    return 2 * e * Math.sin(0.5 * t);
                }),
                (o.logBase = function(t, e) {
                    return Math.log(t) / Math.log(e);
                }),
                (o.cbrt = n(Math.cbrt, function(t) {
                    var e = Math.pow(Math.abs(t), 1 / 3);
                    return t < 0 ? -e : e;
                })),
                (o.log2 = n(Math.log2, function(t) {
                    return Math.log(t) * Math.LOG2E;
                })),
                (o.fog = function(t, e) {
                    var n = t * e;
                    return 1 - Math.exp(-n * n);
                }),
                (o.fastApproximateAtan = function(t) {
                    return t * (-0.1784 * Math.abs(t) - 0.0663 * t * t + 1.0301);
                }),
                (o.fastApproximateAtan2 = function(t, e) {
                    var n,
                        r,
                        i = Math.abs(t);
                    (n = Math.abs(e)), (r = Math.max(i, n)), (n = Math.min(i, n));
                    var a = n / r;
                    return (
                        (i = o.fastApproximateAtan(a)),
                        (i = Math.abs(e) > Math.abs(t) ? o.PI_OVER_TWO - i : i),
                        (i = t < 0 ? o.PI - i : i),
                        (i = e < 0 ? -i : i)
                    );
                }),
                o
            );
        }),
        define("Core/Cartesian2", [
            "./Check",
            "./defaultValue",
            "./defined",
            "./DeveloperError",
            "./freezeObject",
            "./Math"
        ], function(t, e, n, r, i, o) {
            "use strict";
            function a(t, n) {
                (this.x = e(t, 0)), (this.y = e(n, 0));
            }
            (a.fromElements = function(t, e, r) {
                return n(r) ? ((r.x = t), (r.y = e), r) : new a(t, e);
            }),
                (a.clone = function(t, e) {
                    if (n(t)) return n(e) ? ((e.x = t.x), (e.y = t.y), e) : new a(t.x, t.y);
                }),
                (a.fromCartesian3 = a.clone),
                (a.fromCartesian4 = a.clone),
                (a.packedLength = 2),
                (a.pack = function(t, n, r) {
                    return (r = e(r, 0)), (n[r++] = t.x), (n[r] = t.y), n;
                }),
                (a.unpack = function(t, r, i) {
                    return (r = e(r, 0)), n(i) || (i = new a()), (i.x = t[r++]), (i.y = t[r]), i;
                }),
                (a.packArray = function(t, e) {
                    var r = t.length;
                    n(e) ? (e.length = 2 * r) : (e = new Array(2 * r));
                    for (var i = 0; i < r; ++i) a.pack(t[i], e, 2 * i);
                    return e;
                }),
                (a.unpackArray = function(t, e) {
                    var r = t.length;
                    n(e) ? (e.length = r / 2) : (e = new Array(r / 2));
                    for (var i = 0; i < r; i += 2) {
                        var o = i / 2;
                        e[o] = a.unpack(t, i, e[o]);
                    }
                    return e;
                }),
                (a.fromArray = a.unpack),
                (a.maximumComponent = function(t) {
                    return Math.max(t.x, t.y);
                }),
                (a.minimumComponent = function(t) {
                    return Math.min(t.x, t.y);
                }),
                (a.minimumByComponent = function(t, e, n) {
                    return (n.x = Math.min(t.x, e.x)), (n.y = Math.min(t.y, e.y)), n;
                }),
                (a.maximumByComponent = function(t, e, n) {
                    return (n.x = Math.max(t.x, e.x)), (n.y = Math.max(t.y, e.y)), n;
                }),
                (a.magnitudeSquared = function(t) {
                    return t.x * t.x + t.y * t.y;
                }),
                (a.magnitude = function(t) {
                    return Math.sqrt(a.magnitudeSquared(t));
                });
            var u = new a();
            (a.distance = function(t, e) {
                return a.subtract(t, e, u), a.magnitude(u);
            }),
                (a.distanceSquared = function(t, e) {
                    return a.subtract(t, e, u), a.magnitudeSquared(u);
                }),
                (a.normalize = function(t, e) {
                    var n = a.magnitude(t);
                    return (e.x = t.x / n), (e.y = t.y / n), e;
                }),
                (a.dot = function(t, e) {
                    return t.x * e.x + t.y * e.y;
                }),
                (a.multiplyComponents = function(t, e, n) {
                    return (n.x = t.x * e.x), (n.y = t.y * e.y), n;
                }),
                (a.divideComponents = function(t, e, n) {
                    return (n.x = t.x / e.x), (n.y = t.y / e.y), n;
                }),
                (a.add = function(t, e, n) {
                    return (n.x = t.x + e.x), (n.y = t.y + e.y), n;
                }),
                (a.subtract = function(t, e, n) {
                    return (n.x = t.x - e.x), (n.y = t.y - e.y), n;
                }),
                (a.multiplyByScalar = function(t, e, n) {
                    return (n.x = t.x * e), (n.y = t.y * e), n;
                }),
                (a.divideByScalar = function(t, e, n) {
                    return (n.x = t.x / e), (n.y = t.y / e), n;
                }),
                (a.negate = function(t, e) {
                    return (e.x = -t.x), (e.y = -t.y), e;
                }),
                (a.abs = function(t, e) {
                    return (e.x = Math.abs(t.x)), (e.y = Math.abs(t.y)), e;
                });
            var s = new a();
            a.lerp = function(t, e, n, r) {
                return (
                    a.multiplyByScalar(e, n, s),
                    (r = a.multiplyByScalar(t, 1 - n, r)),
                    a.add(s, r, r)
                );
            };
            var c = new a(),
                h = new a();
            a.angleBetween = function(t, e) {
                return a.normalize(t, c), a.normalize(e, h), o.acosClamped(a.dot(c, h));
            };
            var f = new a();
            return (
                (a.mostOrthogonalAxis = function(t, e) {
                    var n = a.normalize(t, f);
                    return (
                        a.abs(n, n), (e = n.x <= n.y ? a.clone(a.UNIT_X, e) : a.clone(a.UNIT_Y, e))
                    );
                }),
                (a.equals = function(t, e) {
                    return t === e || (n(t) && n(e) && t.x === e.x && t.y === e.y);
                }),
                (a.equalsArray = function(t, e, n) {
                    return t.x === e[n] && t.y === e[n + 1];
                }),
                (a.equalsEpsilon = function(t, e, r, i) {
                    return (
                        t === e ||
                        (n(t) &&
                            n(e) &&
                            o.equalsEpsilon(t.x, e.x, r, i) &&
                            o.equalsEpsilon(t.y, e.y, r, i))
                    );
                }),
                (a.ZERO = i(new a(0, 0))),
                (a.UNIT_X = i(new a(1, 0))),
                (a.UNIT_Y = i(new a(0, 1))),
                (a.prototype.clone = function(t) {
                    return a.clone(this, t);
                }),
                (a.prototype.equals = function(t) {
                    return a.equals(this, t);
                }),
                (a.prototype.equalsEpsilon = function(t, e, n) {
                    return a.equalsEpsilon(this, t, e, n);
                }),
                (a.prototype.toString = function() {
                    return "(" + this.x + ", " + this.y + ")";
                }),
                a
            );
        }),
        define("Core/Cartesian3", [
            "./Check",
            "./defaultValue",
            "./defined",
            "./DeveloperError",
            "./freezeObject",
            "./Math"
        ], function(t, e, n, r, i, o) {
            "use strict";
            function a(t, n, r) {
                (this.x = e(t, 0)), (this.y = e(n, 0)), (this.z = e(r, 0));
            }
            (a.fromSpherical = function(t, r) {
                n(r) || (r = new a());
                var i = t.clock,
                    o = t.cone,
                    u = e(t.magnitude, 1),
                    s = u * Math.sin(o);
                return (r.x = s * Math.cos(i)), (r.y = s * Math.sin(i)), (r.z = u * Math.cos(o)), r;
            }),
                (a.fromElements = function(t, e, r, i) {
                    return n(i) ? ((i.x = t), (i.y = e), (i.z = r), i) : new a(t, e, r);
                }),
                (a.clone = function(t, e) {
                    if (n(t))
                        return n(e)
                            ? ((e.x = t.x), (e.y = t.y), (e.z = t.z), e)
                            : new a(t.x, t.y, t.z);
                }),
                (a.fromCartesian4 = a.clone),
                (a.packedLength = 3),
                (a.pack = function(t, n, r) {
                    return (r = e(r, 0)), (n[r++] = t.x), (n[r++] = t.y), (n[r] = t.z), n;
                }),
                (a.unpack = function(t, r, i) {
                    return (
                        (r = e(r, 0)),
                        n(i) || (i = new a()),
                        (i.x = t[r++]),
                        (i.y = t[r++]),
                        (i.z = t[r]),
                        i
                    );
                }),
                (a.packArray = function(t, e) {
                    var r = t.length;
                    n(e) ? (e.length = 3 * r) : (e = new Array(3 * r));
                    for (var i = 0; i < r; ++i) a.pack(t[i], e, 3 * i);
                    return e;
                }),
                (a.unpackArray = function(t, e) {
                    var r = t.length;
                    n(e) ? (e.length = r / 3) : (e = new Array(r / 3));
                    for (var i = 0; i < r; i += 3) {
                        var o = i / 3;
                        e[o] = a.unpack(t, i, e[o]);
                    }
                    return e;
                }),
                (a.fromArray = a.unpack),
                (a.maximumComponent = function(t) {
                    return Math.max(t.x, t.y, t.z);
                }),
                (a.minimumComponent = function(t) {
                    return Math.min(t.x, t.y, t.z);
                }),
                (a.minimumByComponent = function(t, e, n) {
                    return (
                        (n.x = Math.min(t.x, e.x)),
                        (n.y = Math.min(t.y, e.y)),
                        (n.z = Math.min(t.z, e.z)),
                        n
                    );
                }),
                (a.maximumByComponent = function(t, e, n) {
                    return (
                        (n.x = Math.max(t.x, e.x)),
                        (n.y = Math.max(t.y, e.y)),
                        (n.z = Math.max(t.z, e.z)),
                        n
                    );
                }),
                (a.magnitudeSquared = function(t) {
                    return t.x * t.x + t.y * t.y + t.z * t.z;
                }),
                (a.magnitude = function(t) {
                    return Math.sqrt(a.magnitudeSquared(t));
                });
            var u = new a();
            (a.distance = function(t, e) {
                return a.subtract(t, e, u), a.magnitude(u);
            }),
                (a.distanceSquared = function(t, e) {
                    return a.subtract(t, e, u), a.magnitudeSquared(u);
                }),
                (a.normalize = function(t, e) {
                    var n = a.magnitude(t);
                    return (e.x = t.x / n), (e.y = t.y / n), (e.z = t.z / n), e;
                }),
                (a.dot = function(t, e) {
                    return t.x * e.x + t.y * e.y + t.z * e.z;
                }),
                (a.multiplyComponents = function(t, e, n) {
                    return (n.x = t.x * e.x), (n.y = t.y * e.y), (n.z = t.z * e.z), n;
                }),
                (a.divideComponents = function(t, e, n) {
                    return (n.x = t.x / e.x), (n.y = t.y / e.y), (n.z = t.z / e.z), n;
                }),
                (a.add = function(t, e, n) {
                    return (n.x = t.x + e.x), (n.y = t.y + e.y), (n.z = t.z + e.z), n;
                }),
                (a.subtract = function(t, e, n) {
                    return (n.x = t.x - e.x), (n.y = t.y - e.y), (n.z = t.z - e.z), n;
                }),
                (a.multiplyByScalar = function(t, e, n) {
                    return (n.x = t.x * e), (n.y = t.y * e), (n.z = t.z * e), n;
                }),
                (a.divideByScalar = function(t, e, n) {
                    return (n.x = t.x / e), (n.y = t.y / e), (n.z = t.z / e), n;
                }),
                (a.negate = function(t, e) {
                    return (e.x = -t.x), (e.y = -t.y), (e.z = -t.z), e;
                }),
                (a.abs = function(t, e) {
                    return (e.x = Math.abs(t.x)), (e.y = Math.abs(t.y)), (e.z = Math.abs(t.z)), e;
                });
            var s = new a();
            a.lerp = function(t, e, n, r) {
                return (
                    a.multiplyByScalar(e, n, s),
                    (r = a.multiplyByScalar(t, 1 - n, r)),
                    a.add(s, r, r)
                );
            };
            var c = new a(),
                h = new a();
            a.angleBetween = function(t, e) {
                a.normalize(t, c), a.normalize(e, h);
                var n = a.dot(c, h),
                    r = a.magnitude(a.cross(c, h, c));
                return Math.atan2(r, n);
            };
            var f = new a();
            (a.mostOrthogonalAxis = function(t, e) {
                var n = a.normalize(t, f);
                return (
                    a.abs(n, n),
                    (e =
                        n.x <= n.y
                            ? n.x <= n.z
                                ? a.clone(a.UNIT_X, e)
                                : a.clone(a.UNIT_Z, e)
                            : n.y <= n.z
                            ? a.clone(a.UNIT_Y, e)
                            : a.clone(a.UNIT_Z, e))
                );
            }),
                (a.projectVector = function(t, e, n) {
                    var r = a.dot(t, e) / a.dot(e, e);
                    return a.multiplyByScalar(e, r, n);
                }),
                (a.equals = function(t, e) {
                    return t === e || (n(t) && n(e) && t.x === e.x && t.y === e.y && t.z === e.z);
                }),
                (a.equalsArray = function(t, e, n) {
                    return t.x === e[n] && t.y === e[n + 1] && t.z === e[n + 2];
                }),
                (a.equalsEpsilon = function(t, e, r, i) {
                    return (
                        t === e ||
                        (n(t) &&
                            n(e) &&
                            o.equalsEpsilon(t.x, e.x, r, i) &&
                            o.equalsEpsilon(t.y, e.y, r, i) &&
                            o.equalsEpsilon(t.z, e.z, r, i))
                    );
                }),
                (a.cross = function(t, e, n) {
                    var r = t.x,
                        i = t.y,
                        o = t.z,
                        a = e.x,
                        u = e.y,
                        s = e.z,
                        c = i * s - o * u,
                        h = o * a - r * s,
                        f = r * u - i * a;
                    return (n.x = c), (n.y = h), (n.z = f), n;
                }),
                (a.midpoint = function(t, e, n) {
                    return (
                        (n.x = 0.5 * (t.x + e.x)),
                        (n.y = 0.5 * (t.y + e.y)),
                        (n.z = 0.5 * (t.z + e.z)),
                        n
                    );
                }),
                (a.fromDegrees = function(t, e, n, r, i) {
                    return (t = o.toRadians(t)), (e = o.toRadians(e)), a.fromRadians(t, e, n, r, i);
                });
            var l = new a(),
                d = new a(),
                m = new a(40680631590769, 40680631590769, 40408299984661.445);
            return (
                (a.fromRadians = function(t, r, i, o, u) {
                    i = e(i, 0);
                    var s = n(o) ? o.radiiSquared : m,
                        c = Math.cos(r);
                    (l.x = c * Math.cos(t)),
                        (l.y = c * Math.sin(t)),
                        (l.z = Math.sin(r)),
                        (l = a.normalize(l, l)),
                        a.multiplyComponents(s, l, d);
                    var h = Math.sqrt(a.dot(l, d));
                    return (
                        (d = a.divideByScalar(d, h, d)),
                        (l = a.multiplyByScalar(l, i, l)),
                        n(u) || (u = new a()),
                        a.add(d, l, u)
                    );
                }),
                (a.fromDegreesArray = function(t, e, r) {
                    var i = t.length;
                    n(r) ? (r.length = i / 2) : (r = new Array(i / 2));
                    for (var o = 0; o < i; o += 2) {
                        var u = t[o],
                            s = t[o + 1],
                            c = o / 2;
                        r[c] = a.fromDegrees(u, s, 0, e, r[c]);
                    }
                    return r;
                }),
                (a.fromRadiansArray = function(t, e, r) {
                    var i = t.length;
                    n(r) ? (r.length = i / 2) : (r = new Array(i / 2));
                    for (var o = 0; o < i; o += 2) {
                        var u = t[o],
                            s = t[o + 1],
                            c = o / 2;
                        r[c] = a.fromRadians(u, s, 0, e, r[c]);
                    }
                    return r;
                }),
                (a.fromDegreesArrayHeights = function(t, e, r) {
                    var i = t.length;
                    n(r) ? (r.length = i / 3) : (r = new Array(i / 3));
                    for (var o = 0; o < i; o += 3) {
                        var u = t[o],
                            s = t[o + 1],
                            c = t[o + 2],
                            h = o / 3;
                        r[h] = a.fromDegrees(u, s, c, e, r[h]);
                    }
                    return r;
                }),
                (a.fromRadiansArrayHeights = function(t, e, r) {
                    var i = t.length;
                    n(r) ? (r.length = i / 3) : (r = new Array(i / 3));
                    for (var o = 0; o < i; o += 3) {
                        var u = t[o],
                            s = t[o + 1],
                            c = t[o + 2],
                            h = o / 3;
                        r[h] = a.fromRadians(u, s, c, e, r[h]);
                    }
                    return r;
                }),
                (a.ZERO = i(new a(0, 0, 0))),
                (a.UNIT_X = i(new a(1, 0, 0))),
                (a.UNIT_Y = i(new a(0, 1, 0))),
                (a.UNIT_Z = i(new a(0, 0, 1))),
                (a.prototype.clone = function(t) {
                    return a.clone(this, t);
                }),
                (a.prototype.equals = function(t) {
                    return a.equals(this, t);
                }),
                (a.prototype.equalsEpsilon = function(t, e, n) {
                    return a.equalsEpsilon(this, t, e, n);
                }),
                (a.prototype.toString = function() {
                    return "(" + this.x + ", " + this.y + ", " + this.z + ")";
                }),
                a
            );
        }),
        define("Core/AttributeCompression", [
            "./Cartesian2",
            "./Cartesian3",
            "./Check",
            "./defined",
            "./DeveloperError",
            "./Math"
        ], function(t, e, n, r, i, o) {
            "use strict";
            function a(t) {
                return (h[0] = t), h[0];
            }
            function u(t) {
                return (t >> 1) ^ -(1 & t);
            }
            var s = {};
            (s.octEncodeInRange = function(t, e, n) {
                if (
                    ((n.x = t.x / (Math.abs(t.x) + Math.abs(t.y) + Math.abs(t.z))),
                    (n.y = t.y / (Math.abs(t.x) + Math.abs(t.y) + Math.abs(t.z))),
                    t.z < 0)
                ) {
                    var r = n.x,
                        i = n.y;
                    (n.x = (1 - Math.abs(i)) * o.signNotZero(r)),
                        (n.y = (1 - Math.abs(r)) * o.signNotZero(i));
                }
                return (n.x = o.toSNorm(n.x, e)), (n.y = o.toSNorm(n.y, e)), n;
            }),
                (s.octEncode = function(t, e) {
                    return s.octEncodeInRange(t, 255, e);
                });
            var c = new t(),
                h = new Uint8Array(1);
            (s.octEncodeToCartesian4 = function(t, e) {
                return (
                    s.octEncodeInRange(t, 65535, c),
                    (e.x = a(c.x * (1 / 256))),
                    (e.y = a(c.x)),
                    (e.z = a(c.y * (1 / 256))),
                    (e.w = a(c.y)),
                    e
                );
            }),
                (s.octDecodeInRange = function(t, n, r, i) {
                    if (
                        ((i.x = o.fromSNorm(t, r)),
                        (i.y = o.fromSNorm(n, r)),
                        (i.z = 1 - (Math.abs(i.x) + Math.abs(i.y))),
                        i.z < 0)
                    ) {
                        var a = i.x;
                        (i.x = (1 - Math.abs(i.y)) * o.signNotZero(a)),
                            (i.y = (1 - Math.abs(a)) * o.signNotZero(i.y));
                    }
                    return e.normalize(i, i);
                }),
                (s.octDecode = function(t, e, n) {
                    return s.octDecodeInRange(t, e, 255, n);
                }),
                (s.octDecodeFromCartesian4 = function(t, e) {
                    var n = t.x,
                        r = t.y,
                        i = t.z,
                        o = t.w,
                        a = 256 * n + r,
                        u = 256 * i + o;
                    return s.octDecodeInRange(a, u, 65535, e);
                }),
                (s.octPackFloat = function(t) {
                    return 256 * t.x + t.y;
                });
            var f = new t();
            return (
                (s.octEncodeFloat = function(t) {
                    return s.octEncode(t, f), s.octPackFloat(f);
                }),
                (s.octDecodeFloat = function(t, e) {
                    var n = t / 256,
                        r = Math.floor(n),
                        i = 256 * (n - r);
                    return s.octDecode(r, i, e);
                }),
                (s.octPack = function(t, e, n, r) {
                    var i = s.octEncodeFloat(t),
                        o = s.octEncodeFloat(e),
                        a = s.octEncode(n, f);
                    return (r.x = 65536 * a.x + i), (r.y = 65536 * a.y + o), r;
                }),
                (s.octUnpack = function(t, e, n, r) {
                    var i = t.x / 65536,
                        o = Math.floor(i),
                        a = 65536 * (i - o);
                    i = t.y / 65536;
                    var u = Math.floor(i),
                        c = 65536 * (i - u);
                    s.octDecodeFloat(a, e), s.octDecodeFloat(c, n), s.octDecode(o, u, r);
                }),
                (s.compressTextureCoordinates = function(t) {
                    return 4096 * ((4095 * t.x) | 0) + ((4095 * t.y) | 0);
                }),
                (s.decompressTextureCoordinates = function(t, e) {
                    var n = t / 4096,
                        r = Math.floor(n);
                    return (e.x = r / 4095), (e.y = (t - 4096 * r) / 4095), e;
                }),
                (s.zigZagDeltaDecode = function(t, e, n) {
                    for (var i = t.length, o = 0, a = 0, s = 0, c = 0; c < i; ++c)
                        (o += u(t[c])),
                            (a += u(e[c])),
                            (t[c] = o),
                            (e[c] = a),
                            r(n) && ((s += u(n[c])), (n[c] = s));
                }),
                s
            );
        }),
        define("Core/scaleToGeodeticSurface", [
            "./Cartesian3",
            "./defined",
            "./DeveloperError",
            "./Math"
        ], function(t, e, n, r) {
            "use strict";
            function i(n, i, u, s, c) {
                var h = n.x,
                    f = n.y,
                    l = n.z,
                    d = i.x,
                    m = i.y,
                    p = i.z,
                    y = h * h * d * d,
                    g = f * f * m * m,
                    v = l * l * p * p,
                    w = y + g + v,
                    x = Math.sqrt(1 / w),
                    M = t.multiplyByScalar(n, x, o);
                if (w < s) return isFinite(x) ? t.clone(M, c) : void 0;
                var _ = u.x,
                    E = u.y,
                    O = u.z,
                    S = a;
                (S.x = M.x * _ * 2), (S.y = M.y * E * 2), (S.z = M.z * O * 2);
                var P,
                    R,
                    T,
                    I,
                    b,
                    A,
                    z,
                    C,
                    N,
                    q,
                    L,
                    k = ((1 - x) * t.magnitude(n)) / (0.5 * t.magnitude(S)),
                    D = 0;
                do {
                    (k -= D),
                        (T = 1 / (1 + k * _)),
                        (I = 1 / (1 + k * E)),
                        (b = 1 / (1 + k * O)),
                        (A = T * T),
                        (z = I * I),
                        (C = b * b),
                        (N = A * T),
                        (q = z * I),
                        (L = C * b),
                        (P = y * A + g * z + v * C - 1),
                        (R = y * N * _ + g * q * E + v * L * O);
                    D = P / (-2 * R);
                } while (Math.abs(P) > r.EPSILON12);
                return e(c)
                    ? ((c.x = h * T), (c.y = f * I), (c.z = l * b), c)
                    : new t(h * T, f * I, l * b);
            }
            var o = new t(),
                a = new t();
            return i;
        }),
        define("Core/Cartographic", [
            "./Cartesian3",
            "./Check",
            "./defaultValue",
            "./defined",
            "./freezeObject",
            "./Math",
            "./scaleToGeodeticSurface"
        ], function(t, e, n, r, i, o, a) {
            "use strict";
            function u(t, e, r) {
                (this.longitude = n(t, 0)), (this.latitude = n(e, 0)), (this.height = n(r, 0));
            }
            (u.fromRadians = function(t, e, i, o) {
                return (
                    (i = n(i, 0)),
                    r(o) ? ((o.longitude = t), (o.latitude = e), (o.height = i), o) : new u(t, e, i)
                );
            }),
                (u.fromDegrees = function(t, e, n, r) {
                    return (t = o.toRadians(t)), (e = o.toRadians(e)), u.fromRadians(t, e, n, r);
                });
            var s = new t(),
                c = new t(),
                h = new t(),
                f = new t(1 / 6378137, 1 / 6378137, 1 / 6356752.314245179),
                l = new t(1 / 40680631590769, 1 / 40680631590769, 1 / 40408299984661.445),
                d = o.EPSILON1;
            return (
                (u.fromCartesian = function(e, n, i) {
                    var m = r(n) ? n.oneOverRadii : f,
                        p = r(n) ? n.oneOverRadiiSquared : l,
                        y = r(n) ? n._centerToleranceSquared : d,
                        g = a(e, m, p, y, c);
                    if (r(g)) {
                        var v = t.multiplyComponents(g, p, s);
                        v = t.normalize(v, v);
                        var w = t.subtract(e, g, h),
                            x = Math.atan2(v.y, v.x),
                            M = Math.asin(v.z),
                            _ = o.sign(t.dot(w, e)) * t.magnitude(w);
                        return r(i)
                            ? ((i.longitude = x), (i.latitude = M), (i.height = _), i)
                            : new u(x, M, _);
                    }
                }),
                (u.toCartesian = function(e, n, r) {
                    return t.fromRadians(e.longitude, e.latitude, e.height, n, r);
                }),
                (u.clone = function(t, e) {
                    if (r(t))
                        return r(e)
                            ? ((e.longitude = t.longitude),
                              (e.latitude = t.latitude),
                              (e.height = t.height),
                              e)
                            : new u(t.longitude, t.latitude, t.height);
                }),
                (u.equals = function(t, e) {
                    return (
                        t === e ||
                        (r(t) &&
                            r(e) &&
                            t.longitude === e.longitude &&
                            t.latitude === e.latitude &&
                            t.height === e.height)
                    );
                }),
                (u.equalsEpsilon = function(t, e, n) {
                    return (
                        t === e ||
                        (r(t) &&
                            r(e) &&
                            Math.abs(t.longitude - e.longitude) <= n &&
                            Math.abs(t.latitude - e.latitude) <= n &&
                            Math.abs(t.height - e.height) <= n)
                    );
                }),
                (u.ZERO = i(new u(0, 0, 0))),
                (u.prototype.clone = function(t) {
                    return u.clone(this, t);
                }),
                (u.prototype.equals = function(t) {
                    return u.equals(this, t);
                }),
                (u.prototype.equalsEpsilon = function(t, e) {
                    return u.equalsEpsilon(this, t, e);
                }),
                (u.prototype.toString = function() {
                    return "(" + this.longitude + ", " + this.latitude + ", " + this.height + ")";
                }),
                u
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
        ], function(t, e, n, r, i, o, a, u, s, c) {
            "use strict";
            function h(e, n, i, o) {
                (n = r(n, 0)),
                    (i = r(i, 0)),
                    (o = r(o, 0)),
                    (e._radii = new t(n, i, o)),
                    (e._radiiSquared = new t(n * n, i * i, o * o)),
                    (e._radiiToTheFourth = new t(n * n * n * n, i * i * i * i, o * o * o * o)),
                    (e._oneOverRadii = new t(
                        0 === n ? 0 : 1 / n,
                        0 === i ? 0 : 1 / i,
                        0 === o ? 0 : 1 / o
                    )),
                    (e._oneOverRadiiSquared = new t(
                        0 === n ? 0 : 1 / (n * n),
                        0 === i ? 0 : 1 / (i * i),
                        0 === o ? 0 : 1 / (o * o)
                    )),
                    (e._minimumRadius = Math.min(n, i, o)),
                    (e._maximumRadius = Math.max(n, i, o)),
                    (e._centerToleranceSquared = s.EPSILON1),
                    0 !== e._radiiSquared.z &&
                        (e._squaredXOverSquaredZ = e._radiiSquared.x / e._radiiSquared.z);
            }
            function f(t, e, n) {
                (this._radii = void 0),
                    (this._radiiSquared = void 0),
                    (this._radiiToTheFourth = void 0),
                    (this._oneOverRadii = void 0),
                    (this._oneOverRadiiSquared = void 0),
                    (this._minimumRadius = void 0),
                    (this._maximumRadius = void 0),
                    (this._centerToleranceSquared = void 0),
                    (this._squaredXOverSquaredZ = void 0),
                    h(this, t, e, n);
            }
            o(f.prototype, {
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
                (f.clone = function(e, n) {
                    if (i(e)) {
                        var r = e._radii;
                        return i(n)
                            ? (t.clone(r, n._radii),
                              t.clone(e._radiiSquared, n._radiiSquared),
                              t.clone(e._radiiToTheFourth, n._radiiToTheFourth),
                              t.clone(e._oneOverRadii, n._oneOverRadii),
                              t.clone(e._oneOverRadiiSquared, n._oneOverRadiiSquared),
                              (n._minimumRadius = e._minimumRadius),
                              (n._maximumRadius = e._maximumRadius),
                              (n._centerToleranceSquared = e._centerToleranceSquared),
                              n)
                            : new f(r.x, r.y, r.z);
                    }
                }),
                (f.fromCartesian3 = function(t, e) {
                    return i(e) || (e = new f()), i(t) ? (h(e, t.x, t.y, t.z), e) : e;
                }),
                (f.WGS84 = u(new f(6378137, 6378137, 6356752.314245179))),
                (f.UNIT_SPHERE = u(new f(1, 1, 1))),
                (f.MOON = u(new f(s.LUNAR_RADIUS, s.LUNAR_RADIUS, s.LUNAR_RADIUS))),
                (f.prototype.clone = function(t) {
                    return f.clone(this, t);
                }),
                (f.packedLength = t.packedLength),
                (f.pack = function(e, n, i) {
                    return (i = r(i, 0)), t.pack(e._radii, n, i), n;
                }),
                (f.unpack = function(e, n, i) {
                    n = r(n, 0);
                    var o = t.unpack(e, n);
                    return f.fromCartesian3(o, i);
                }),
                (f.prototype.geocentricSurfaceNormal = t.normalize),
                (f.prototype.geodeticSurfaceNormalCartographic = function(e, n) {
                    var r = e.longitude,
                        o = e.latitude,
                        a = Math.cos(o),
                        u = a * Math.cos(r),
                        s = a * Math.sin(r),
                        c = Math.sin(o);
                    return (
                        i(n) || (n = new t()), (n.x = u), (n.y = s), (n.z = c), t.normalize(n, n)
                    );
                }),
                (f.prototype.geodeticSurfaceNormal = function(e, n) {
                    return (
                        i(n) || (n = new t()),
                        (n = t.multiplyComponents(e, this._oneOverRadiiSquared, n)),
                        t.normalize(n, n)
                    );
                });
            var l = new t(),
                d = new t();
            (f.prototype.cartographicToCartesian = function(e, n) {
                var r = l,
                    o = d;
                this.geodeticSurfaceNormalCartographic(e, r),
                    t.multiplyComponents(this._radiiSquared, r, o);
                var a = Math.sqrt(t.dot(r, o));
                return (
                    t.divideByScalar(o, a, o),
                    t.multiplyByScalar(r, e.height, r),
                    i(n) || (n = new t()),
                    t.add(o, r, n)
                );
            }),
                (f.prototype.cartographicArrayToCartesianArray = function(t, e) {
                    var n = t.length;
                    i(e) ? (e.length = n) : (e = new Array(n));
                    for (var r = 0; r < n; r++) e[r] = this.cartographicToCartesian(t[r], e[r]);
                    return e;
                });
            var m = new t(),
                p = new t(),
                y = new t();
            return (
                (f.prototype.cartesianToCartographic = function(n, r) {
                    var o = this.scaleToGeodeticSurface(n, p);
                    if (i(o)) {
                        var a = this.geodeticSurfaceNormal(o, m),
                            u = t.subtract(n, o, y),
                            c = Math.atan2(a.y, a.x),
                            h = Math.asin(a.z),
                            f = s.sign(t.dot(u, n)) * t.magnitude(u);
                        return i(r)
                            ? ((r.longitude = c), (r.latitude = h), (r.height = f), r)
                            : new e(c, h, f);
                    }
                }),
                (f.prototype.cartesianArrayToCartographicArray = function(t, e) {
                    var n = t.length;
                    i(e) ? (e.length = n) : (e = new Array(n));
                    for (var r = 0; r < n; ++r) e[r] = this.cartesianToCartographic(t[r], e[r]);
                    return e;
                }),
                (f.prototype.scaleToGeodeticSurface = function(t, e) {
                    return c(
                        t,
                        this._oneOverRadii,
                        this._oneOverRadiiSquared,
                        this._centerToleranceSquared,
                        e
                    );
                }),
                (f.prototype.scaleToGeocentricSurface = function(e, n) {
                    i(n) || (n = new t());
                    var r = e.x,
                        o = e.y,
                        a = e.z,
                        u = this._oneOverRadiiSquared,
                        s = 1 / Math.sqrt(r * r * u.x + o * o * u.y + a * a * u.z);
                    return t.multiplyByScalar(e, s, n);
                }),
                (f.prototype.transformPositionToScaledSpace = function(e, n) {
                    return i(n) || (n = new t()), t.multiplyComponents(e, this._oneOverRadii, n);
                }),
                (f.prototype.transformPositionFromScaledSpace = function(e, n) {
                    return i(n) || (n = new t()), t.multiplyComponents(e, this._radii, n);
                }),
                (f.prototype.equals = function(e) {
                    return this === e || (i(e) && t.equals(this._radii, e._radii));
                }),
                (f.prototype.toString = function() {
                    return this._radii.toString();
                }),
                (f.prototype.getSurfaceNormalIntersectionWithZAxis = function(e, n, o) {
                    n = r(n, 0);
                    var a = this._squaredXOverSquaredZ;
                    if (
                        (i(o) || (o = new t()),
                        (o.x = 0),
                        (o.y = 0),
                        (o.z = e.z * (1 - a)),
                        !(Math.abs(o.z) >= this._radii.z - n))
                    )
                        return o;
                }),
                f
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
        ], function(t, e, n, r, i, o, a, u) {
            "use strict";
            function s(t, e, r, i) {
                (this.west = n(t, 0)),
                    (this.south = n(e, 0)),
                    (this.east = n(r, 0)),
                    (this.north = n(i, 0));
            }
            i(s.prototype, {
                width: {
                    get: function() {
                        return s.computeWidth(this);
                    }
                },
                height: {
                    get: function() {
                        return s.computeHeight(this);
                    }
                }
            }),
                (s.packedLength = 4),
                (s.pack = function(t, e, r) {
                    return (
                        (r = n(r, 0)),
                        (e[r++] = t.west),
                        (e[r++] = t.south),
                        (e[r++] = t.east),
                        (e[r] = t.north),
                        e
                    );
                }),
                (s.unpack = function(t, e, i) {
                    return (
                        (e = n(e, 0)),
                        r(i) || (i = new s()),
                        (i.west = t[e++]),
                        (i.south = t[e++]),
                        (i.east = t[e++]),
                        (i.north = t[e]),
                        i
                    );
                }),
                (s.computeWidth = function(t) {
                    var e = t.east,
                        n = t.west;
                    return e < n && (e += u.TWO_PI), e - n;
                }),
                (s.computeHeight = function(t) {
                    return t.north - t.south;
                }),
                (s.fromDegrees = function(t, e, i, o, a) {
                    return (
                        (t = u.toRadians(n(t, 0))),
                        (e = u.toRadians(n(e, 0))),
                        (i = u.toRadians(n(i, 0))),
                        (o = u.toRadians(n(o, 0))),
                        r(a)
                            ? ((a.west = t), (a.south = e), (a.east = i), (a.north = o), a)
                            : new s(t, e, i, o)
                    );
                }),
                (s.fromRadians = function(t, e, i, o, a) {
                    return r(a)
                        ? ((a.west = n(t, 0)),
                          (a.south = n(e, 0)),
                          (a.east = n(i, 0)),
                          (a.north = n(o, 0)),
                          a)
                        : new s(t, e, i, o);
                }),
                (s.fromCartographicArray = function(t, e) {
                    for (
                        var n = Number.MAX_VALUE,
                            i = -Number.MAX_VALUE,
                            o = Number.MAX_VALUE,
                            a = -Number.MAX_VALUE,
                            c = Number.MAX_VALUE,
                            h = -Number.MAX_VALUE,
                            f = 0,
                            l = t.length;
                        f < l;
                        f++
                    ) {
                        var d = t[f];
                        (n = Math.min(n, d.longitude)),
                            (i = Math.max(i, d.longitude)),
                            (c = Math.min(c, d.latitude)),
                            (h = Math.max(h, d.latitude));
                        var m = d.longitude >= 0 ? d.longitude : d.longitude + u.TWO_PI;
                        (o = Math.min(o, m)), (a = Math.max(a, m));
                    }
                    return (
                        i - n > a - o &&
                            ((n = o),
                            (i = a),
                            i > u.PI && (i -= u.TWO_PI),
                            n > u.PI && (n -= u.TWO_PI)),
                        r(e)
                            ? ((e.west = n), (e.south = c), (e.east = i), (e.north = h), e)
                            : new s(n, c, i, h)
                    );
                }),
                (s.fromCartesianArray = function(t, e, i) {
                    e = n(e, o.WGS84);
                    for (
                        var a = Number.MAX_VALUE,
                            c = -Number.MAX_VALUE,
                            h = Number.MAX_VALUE,
                            f = -Number.MAX_VALUE,
                            l = Number.MAX_VALUE,
                            d = -Number.MAX_VALUE,
                            m = 0,
                            p = t.length;
                        m < p;
                        m++
                    ) {
                        var y = e.cartesianToCartographic(t[m]);
                        (a = Math.min(a, y.longitude)),
                            (c = Math.max(c, y.longitude)),
                            (l = Math.min(l, y.latitude)),
                            (d = Math.max(d, y.latitude));
                        var g = y.longitude >= 0 ? y.longitude : y.longitude + u.TWO_PI;
                        (h = Math.min(h, g)), (f = Math.max(f, g));
                    }
                    return (
                        c - a > f - h &&
                            ((a = h),
                            (c = f),
                            c > u.PI && (c -= u.TWO_PI),
                            a > u.PI && (a -= u.TWO_PI)),
                        r(i)
                            ? ((i.west = a), (i.south = l), (i.east = c), (i.north = d), i)
                            : new s(a, l, c, d)
                    );
                }),
                (s.clone = function(t, e) {
                    if (r(t))
                        return r(e)
                            ? ((e.west = t.west),
                              (e.south = t.south),
                              (e.east = t.east),
                              (e.north = t.north),
                              e)
                            : new s(t.west, t.south, t.east, t.north);
                }),
                (s.equalsEpsilon = function(t, e, n) {
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
                (s.prototype.clone = function(t) {
                    return s.clone(this, t);
                }),
                (s.prototype.equals = function(t) {
                    return s.equals(this, t);
                }),
                (s.equals = function(t, e) {
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
                (s.prototype.equalsEpsilon = function(t, e) {
                    return s.equalsEpsilon(this, t, e);
                }),
                (s.validate = function(t) {}),
                (s.southwest = function(e, n) {
                    return r(n)
                        ? ((n.longitude = e.west), (n.latitude = e.south), (n.height = 0), n)
                        : new t(e.west, e.south);
                }),
                (s.northwest = function(e, n) {
                    return r(n)
                        ? ((n.longitude = e.west), (n.latitude = e.north), (n.height = 0), n)
                        : new t(e.west, e.north);
                }),
                (s.northeast = function(e, n) {
                    return r(n)
                        ? ((n.longitude = e.east), (n.latitude = e.north), (n.height = 0), n)
                        : new t(e.east, e.north);
                }),
                (s.southeast = function(e, n) {
                    return r(n)
                        ? ((n.longitude = e.east), (n.latitude = e.south), (n.height = 0), n)
                        : new t(e.east, e.south);
                }),
                (s.center = function(e, n) {
                    var i = e.east,
                        o = e.west;
                    i < o && (i += u.TWO_PI);
                    var a = u.negativePiToPi(0.5 * (o + i)),
                        s = 0.5 * (e.south + e.north);
                    return r(n)
                        ? ((n.longitude = a), (n.latitude = s), (n.height = 0), n)
                        : new t(a, s);
                }),
                (s.intersection = function(t, e, n) {
                    var i = t.east,
                        o = t.west,
                        a = e.east,
                        c = e.west;
                    i < o && a > 0 ? (i += u.TWO_PI) : a < c && i > 0 && (a += u.TWO_PI),
                        i < o && c < 0 ? (c += u.TWO_PI) : a < c && o < 0 && (o += u.TWO_PI);
                    var h = u.negativePiToPi(Math.max(o, c)),
                        f = u.negativePiToPi(Math.min(i, a));
                    if (!((t.west < t.east || e.west < e.east) && f <= h)) {
                        var l = Math.max(t.south, e.south),
                            d = Math.min(t.north, e.north);
                        if (!(l >= d))
                            return r(n)
                                ? ((n.west = h), (n.south = l), (n.east = f), (n.north = d), n)
                                : new s(h, l, f, d);
                    }
                }),
                (s.simpleIntersection = function(t, e, n) {
                    var i = Math.max(t.west, e.west),
                        o = Math.max(t.south, e.south),
                        a = Math.min(t.east, e.east),
                        u = Math.min(t.north, e.north);
                    if (!(o >= u || i >= a))
                        return r(n)
                            ? ((n.west = i), (n.south = o), (n.east = a), (n.north = u), n)
                            : new s(i, o, a, u);
                }),
                (s.union = function(t, e, n) {
                    r(n) || (n = new s());
                    var i = t.east,
                        o = t.west,
                        a = e.east,
                        c = e.west;
                    i < o && a > 0 ? (i += u.TWO_PI) : a < c && i > 0 && (a += u.TWO_PI),
                        i < o && c < 0 ? (c += u.TWO_PI) : a < c && o < 0 && (o += u.TWO_PI);
                    var h = u.convertLongitudeRange(Math.min(o, c)),
                        f = u.convertLongitudeRange(Math.max(i, a));
                    return (
                        (n.west = h),
                        (n.south = Math.min(t.south, e.south)),
                        (n.east = f),
                        (n.north = Math.max(t.north, e.north)),
                        n
                    );
                }),
                (s.expand = function(t, e, n) {
                    return (
                        r(n) || (n = new s()),
                        (n.west = Math.min(t.west, e.longitude)),
                        (n.south = Math.min(t.south, e.latitude)),
                        (n.east = Math.max(t.east, e.longitude)),
                        (n.north = Math.max(t.north, e.latitude)),
                        n
                    );
                }),
                (s.contains = function(t, e) {
                    var n = e.longitude,
                        r = e.latitude,
                        i = t.west,
                        o = t.east;
                    return (
                        o < i && ((o += u.TWO_PI), n < 0 && (n += u.TWO_PI)),
                        (n > i || u.equalsEpsilon(n, i, u.EPSILON14)) &&
                            (n < o || u.equalsEpsilon(n, o, u.EPSILON14)) &&
                            r >= t.south &&
                            r <= t.north
                    );
                });
            var c = new t();
            return (
                (s.subsample = function(t, e, i, a) {
                    (e = n(e, o.WGS84)), (i = n(i, 0)), r(a) || (a = []);
                    var h = 0,
                        f = t.north,
                        l = t.south,
                        d = t.east,
                        m = t.west,
                        p = c;
                    (p.height = i),
                        (p.longitude = m),
                        (p.latitude = f),
                        (a[h] = e.cartographicToCartesian(p, a[h])),
                        h++,
                        (p.longitude = d),
                        (a[h] = e.cartographicToCartesian(p, a[h])),
                        h++,
                        (p.latitude = l),
                        (a[h] = e.cartographicToCartesian(p, a[h])),
                        h++,
                        (p.longitude = m),
                        (a[h] = e.cartographicToCartesian(p, a[h])),
                        h++,
                        (p.latitude = f < 0 ? f : l > 0 ? l : 0);
                    for (var y = 1; y < 8; ++y)
                        (p.longitude = -Math.PI + y * u.PI_OVER_TWO),
                            s.contains(t, p) && ((a[h] = e.cartographicToCartesian(p, a[h])), h++);
                    return (
                        0 === p.latitude &&
                            ((p.longitude = m),
                            (a[h] = e.cartographicToCartesian(p, a[h])),
                            h++,
                            (p.longitude = d),
                            (a[h] = e.cartographicToCartesian(p, a[h])),
                            h++),
                        (a.length = h),
                        a
                    );
                }),
                (s.MAX_VALUE = a(new s(-Math.PI, -u.PI_OVER_TWO, Math.PI, u.PI_OVER_TWO))),
                s
            );
        }),
        (function(t) {
            "use strict";
            t("ThirdParty/when", [], function() {
                function t(t, n, r, i) {
                    return e(t).then(n, r, i);
                }
                function e(t) {
                    var e, n;
                    return (
                        t instanceof r
                            ? (e = t)
                            : u(t)
                            ? ((n = a()),
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
                            : (e = i(t)),
                        e
                    );
                }
                function n(e) {
                    return t(e, o);
                }
                function r(t) {
                    this.then = t;
                }
                function i(t) {
                    return new r(function(n) {
                        try {
                            return e(n ? n(t) : t);
                        } catch (t) {
                            return o(t);
                        }
                    });
                }
                function o(t) {
                    return new r(function(n, r) {
                        try {
                            return r ? e(r(t)) : o(t);
                        } catch (t) {
                            return o(t);
                        }
                    });
                }
                function a() {
                    function t(t, e, n) {
                        return l(t, e, n);
                    }
                    function n(t) {
                        return m(t);
                    }
                    function i(t) {
                        return m(o(t));
                    }
                    function u(t) {
                        return d(t);
                    }
                    var s, c, h, f, l, d, m;
                    return (
                        (c = new r(t)),
                        (s = {
                            then: t,
                            resolve: n,
                            reject: i,
                            progress: u,
                            promise: c,
                            resolver: { resolve: n, reject: i, progress: u }
                        }),
                        (h = []),
                        (f = []),
                        (l = function(t, e, n) {
                            var r, i;
                            return (
                                (r = a()),
                                (i =
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
                                h.push(function(n) {
                                    n.then(t, e).then(r.resolve, r.reject, i);
                                }),
                                f.push(i),
                                r.promise
                            );
                        }),
                        (d = function(t) {
                            return p(f, t), t;
                        }),
                        (m = function(t) {
                            return (
                                (t = e(t)), (l = t.then), (m = e), (d = g), p(h, t), (f = h = M), t
                            );
                        }),
                        s
                    );
                }
                function u(t) {
                    return t && "function" == typeof t.then;
                }
                function s(e, n, r, i, o) {
                    return (
                        y(2, arguments),
                        t(e, function(e) {
                            function u(t) {
                                p(t);
                            }
                            function s(t) {
                                m(t);
                            }
                            var c, h, f, l, d, m, p, y, v, w;
                            if (
                                ((v = e.length >>> 0),
                                (c = Math.max(0, Math.min(n, v))),
                                (f = []),
                                (h = v - c + 1),
                                (l = []),
                                (d = a()),
                                c)
                            )
                                for (
                                    y = d.progress,
                                        p = function(t) {
                                            l.push(t), --h || ((m = p = g), d.reject(l));
                                        },
                                        m = function(t) {
                                            f.push(t), --c || ((m = p = g), d.resolve(f));
                                        },
                                        w = 0;
                                    w < v;
                                    ++w
                                )
                                    w in e && t(e[w], s, u, y);
                            else d.resolve(f);
                            return d.then(r, i, o);
                        })
                    );
                }
                function c(t, e, n, r) {
                    function i(t) {
                        return e ? e(t[0]) : t[0];
                    }
                    return s(t, 1, i, n, r);
                }
                function h(t, e, n, r) {
                    return y(1, arguments), l(t, v).then(e, n, r);
                }
                function f() {
                    return l(arguments, v);
                }
                function l(e, n) {
                    return t(e, function(e) {
                        var r, i, o, u, s, c;
                        if (((o = i = e.length >>> 0), (r = []), (c = a()), o))
                            for (
                                u = function(e, i) {
                                    t(e, n).then(function(t) {
                                        (r[i] = t), --o || c.resolve(r);
                                    }, c.reject);
                                },
                                    s = 0;
                                s < i;
                                s++
                            )
                                s in e ? u(e[s], s) : --o;
                        else c.resolve(r);
                        return c.promise;
                    });
                }
                function d(e, n) {
                    var r = x.call(arguments, 1);
                    return t(e, function(e) {
                        var i;
                        return (
                            (i = e.length),
                            (r[0] = function(e, r, o) {
                                return t(e, function(e) {
                                    return t(r, function(t) {
                                        return n(e, t, o, i);
                                    });
                                });
                            }),
                            w.apply(e, r)
                        );
                    });
                }
                function m(e, n, r) {
                    var i = arguments.length > 2;
                    return t(
                        e,
                        function(t) {
                            return (t = i ? r : t), n.resolve(t), t;
                        },
                        function(t) {
                            return n.reject(t), o(t);
                        },
                        n.progress
                    );
                }
                function p(t, e) {
                    for (var n, r = 0; (n = t[r++]); ) n(e);
                }
                function y(t, e) {
                    for (var n, r = e.length; r > t; )
                        if (null != (n = e[--r]) && "function" != typeof n)
                            throw new Error("arg " + r + " must be a function");
                }
                function g() {}
                function v(t) {
                    return t;
                }
                var w, x, M;
                return (
                    (t.defer = a),
                    (t.resolve = e),
                    (t.reject = n),
                    (t.join = f),
                    (t.all = h),
                    (t.map = l),
                    (t.reduce = d),
                    (t.any = c),
                    (t.some = s),
                    (t.chain = m),
                    (t.isPromise = u),
                    (r.prototype = {
                        always: function(t, e) {
                            return this.then(t, t, e);
                        },
                        otherwise: function(t) {
                            return this.then(M, t);
                        },
                        yield: function(t) {
                            return this.then(function() {
                                return t;
                            });
                        },
                        spread: function(t) {
                            return this.then(function(e) {
                                return h(e, function(e) {
                                    return t.apply(M, e);
                                });
                            });
                        }
                    }),
                    (x = [].slice),
                    (w =
                        [].reduce ||
                        function(t) {
                            var e, n, r, i, o;
                            if (
                                ((o = 0),
                                (e = Object(this)),
                                (i = e.length >>> 0),
                                (n = arguments),
                                n.length <= 1)
                            )
                                for (;;) {
                                    if (o in e) {
                                        r = e[o++];
                                        break;
                                    }
                                    if (++o >= i) throw new TypeError();
                                }
                            else r = n[1];
                            for (; o < i; ++o) o in e && (r = t(r, e[o], o, e));
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
                    i = e.message;
                n = t(r) && t(i) ? r + ": " + i : e.toString();
                var o = e.stack;
                return t(o) && (n += "\n" + o), n;
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
            function i(e, n, r) {
                try {
                    return e(n, r);
                } catch (e) {
                    return t.reject(e);
                }
            }
            function o(o) {
                var a;
                return function(u) {
                    var s = u.data,
                        c = [],
                        h = { id: s.id, result: void 0, error: void 0 };
                    return t(i(o, s.parameters, c))
                        .then(function(t) {
                            h.result = t;
                        })
                        .otherwise(function(t) {
                            t instanceof Error
                                ? (h.error = { name: t.name, message: t.message, stack: t.stack })
                                : (h.error = t);
                        })
                        .always(function() {
                            n(a) || (a = e(self.webkitPostMessage, self.postMessage)),
                                s.canTransferArrayBuffer || (c.length = 0);
                            try {
                                a(h, c);
                            } catch (t) {
                                (h.result = void 0),
                                    (h.error =
                                        "postMessage failed with error: " +
                                        r(t) +
                                        "\n  with responseMessage: " +
                                        JSON.stringify(h)),
                                    a(h);
                            }
                        });
                };
            }
            return o;
        }),
        define("Workers/createVectorTilePoints", [
            "../Core/AttributeCompression",
            "../Core/Cartesian3",
            "../Core/Cartographic",
            "../Core/Ellipsoid",
            "../Core/Math",
            "../Core/Rectangle",
            "./createTaskProcessorWorker"
        ], function(t, e, n, r, i, o, a) {
            "use strict";
            function u(t) {
                t = new Float64Array(t);
                var e = 0;
                (m.min = t[e++]),
                    (m.max = t[e++]),
                    o.unpack(t, e, l),
                    (e += o.packedLength),
                    r.unpack(t, e, d);
            }
            function s(r, o) {
                var a = new Uint16Array(r.positions);
                u(r.packedBuffer);
                var s = l,
                    p = d,
                    y = m.min,
                    g = m.max,
                    v = a.length / 3,
                    w = a.subarray(0, v),
                    x = a.subarray(v, 2 * v),
                    M = a.subarray(2 * v, 3 * v);
                t.zigZagDeltaDecode(w, x, M);
                for (var _ = new Float64Array(a.length), E = 0; E < v; ++E) {
                    var O = w[E],
                        S = x[E],
                        P = M[E],
                        R = i.lerp(s.west, s.east, O / c),
                        T = i.lerp(s.south, s.north, S / c),
                        I = i.lerp(y, g, P / c),
                        b = n.fromRadians(R, T, I, h),
                        A = p.cartographicToCartesian(b, f);
                    e.pack(A, _, 3 * E);
                }
                return o.push(_.buffer), { positions: _.buffer };
            }
            var c = 32767,
                h = new n(),
                f = new e(),
                l = new o(),
                d = new r(),
                m = { min: void 0, max: void 0 };
            return a(s);
        });
})();

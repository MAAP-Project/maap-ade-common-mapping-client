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

/**
@license
sprintf.js from the php.js project - https://github.com/kvz/phpjs
Directly from https://github.com/kvz/phpjs/blob/master/functions/strings/sprintf.js

php.js is copyright 2012 Kevin van Zonneveld.

Portions copyright Brett Zamir (http://brett-zamir.me), Kevin van Zonneveld
(http://kevin.vanzonneveld.net), Onno Marsman, Theriault, Michael White
(http://getsprink.com), Waldo Malqui Silva, Paulo Freitas, Jack, Jonas
Raoni Soares Silva (http://www.jsfromhell.com), Philip Peterson, Legaev
Andrey, Ates Goral (http://magnetiq.com), Alex, Ratheous, Martijn Wieringa,
Rafa? Kukawski (http://blog.kukawski.pl), lmeyrick
(https://sourceforge.net/projects/bcmath-js/), Nate, Philippe Baumann,
Enrique Gonzalez, Webtoolkit.info (http://www.webtoolkit.info/), Carlos R.
L. Rodrigues (http://www.jsfromhell.com), Ash Searle
(http://hexmen.com/blog/), Jani Hartikainen, travc, Ole Vrijenhoek,
Erkekjetter, Michael Grier, Rafa? Kukawski (http://kukawski.pl), Johnny
Mast (http://www.phpvrouwen.nl), T.Wild, d3x,
http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript,
Rafa? Kukawski (http://blog.kukawski.pl/), stag019, pilus, WebDevHobo
(http://webdevhobo.blogspot.com/), marrtins, GeekFG
(http://geekfg.blogspot.com), Andrea Giammarchi
(http://webreflection.blogspot.com), Arpad Ray (mailto:arpad@php.net),
gorthaur, Paul Smith, Tim de Koning (http://www.kingsquare.nl), Joris, Oleg
Eremeev, Steve Hilder, majak, gettimeofday, KELAN, Josh Fraser
(http://onlineaspect.com/2007/06/08/auto-detect-a-time-zone-with-javascript/),
Marc Palau, Martin
(http://www.erlenwiese.de/), Breaking Par Consulting Inc
(http://www.breakingpar.com/bkp/home.nsf/0/87256B280015193F87256CFB006C45F7),
Chris, Mirek Slugen, saulius, Alfonso Jimenez
(http://www.alfonsojimenez.com), Diplom@t (http://difane.com/), felix,
Mailfaker (http://www.weedem.fr/), Tyler Akins (http://rumkin.com), Caio
Ariede (http://caioariede.com), Robin, Kankrelune
(http://www.webfaktory.info/), Karol Kowalski, Imgen Tata
(http://www.myipdf.com/), mdsjack (http://www.mdsjack.bo.it), Dreamer,
Felix Geisendoerfer (http://www.debuggable.com/felix), Lars Fischer, AJ,
David, Aman Gupta, Michael White, Public Domain
(http://www.json.org/json2.js), Steven Levithan
(http://blog.stevenlevithan.com), Sakimori, Pellentesque Malesuada,
Thunder.m, Dj (http://phpjs.org/functions/htmlentities:425#comment_134018),
Steve Clay, David James, Francois, class_exists, nobbler, T. Wild, Itsacon
(http://www.itsacon.net/), date, Ole Vrijenhoek (http://www.nervous.nl/),
Fox, Raphael (Ao RUDLER), Marco, noname, Mateusz "loonquawl" Zalega, Frank
Forte, Arno, ger, mktime, john (http://www.jd-tech.net), Nick Kolosov
(http://sammy.ru), marc andreu, Scott Cariss, Douglas Crockford
(http://javascript.crockford.com), madipta, Slawomir Kaniecki,
ReverseSyntax, Nathan, Alex Wilson, kenneth, Bayron Guevara, Adam Wallner
(http://web2.bitbaro.hu/), paulo kuong, jmweb, Lincoln Ramsay, djmix,
Pyerre, Jon Hohle, Thiago Mata (http://thiagomata.blog.com), lmeyrick
(https://sourceforge.net/projects/bcmath-js/this.), Linuxworld, duncan,
Gilbert, Sanjoy Roy, Shingo, sankai, Oskar Larsson H?gfeldt
(http://oskar-lh.name/), Denny Wardhana, 0m3r, Everlasto, Subhasis Deb,
josh, jd, Pier Paolo Ramon (http://www.mastersoup.com/), P, merabi, Soren
Hansen, Eugene Bulkin (http://doubleaw.com/), Der Simon
(http://innerdom.sourceforge.net/), echo is bad, Ozh, XoraX
(http://www.xorax.info), EdorFaus, JB, J A R, Marc Jansen, Francesco, LH,
Stoyan Kyosev (http://www.svest.org/), nord_ua, omid
(http://phpjs.org/functions/380:380#comment_137122), Brad Touesnard, MeEtc
(http://yass.meetcweb.com), Peter-Paul Koch
(http://www.quirksmode.org/js/beat.html), Olivier Louvignes
(http://mg-crea.com/), T0bsn, Tim Wiel, Bryan Elliott, Jalal Berrami,
Martin, JT, David Randall, Thomas Beaucourt (http://www.webapp.fr), taith,
vlado houba, Pierre-Luc Paour, Kristof Coomans (SCK-CEN Belgian Nucleair
Research Centre), Martin Pool, Kirk Strobeck, Rick Waldron, Brant Messenger
(http://www.brantmessenger.com/), Devan Penner-Woelk, Saulo Vallory, Wagner
B. Soares, Artur Tchernychev, Valentina De Rosa, Jason Wong
(http://carrot.org/), Christoph, Daniel Esteban, strftime, Mick@el, rezna,
Simon Willison (http://simonwillison.net), Anton Ongson, Gabriel Paderni,
Marco van Oort, penutbutterjelly, Philipp Lenssen, Bjorn Roesbeke
(http://www.bjornroesbeke.be/), Bug?, Eric Nagel, Tomasz Wesolowski,
Evertjan Garretsen, Bobby Drake, Blues (http://tech.bluesmoon.info/), Luke
Godfrey, Pul, uestla, Alan C, Ulrich, Rafal Kukawski, Yves Sucaet,
sowberry, Norman "zEh" Fuchs, hitwork, Zahlii, johnrembo, Nick Callen,
Steven Levithan (stevenlevithan.com), ejsanders, Scott Baker, Brian Tafoya
(http://www.premasolutions.com/), Philippe Jausions
(http://pear.php.net/user/jausions), Aidan Lister
(http://aidanlister.com/), Rob, e-mike, HKM, ChaosNo1, metjay, strcasecmp,
strcmp, Taras Bogach, jpfle, Alexander Ermolaev
(http://snippets.dzone.com/user/AlexanderErmolaev), DxGx, kilops, Orlando,
dptr1988, Le Torbi, James (http://www.james-bell.co.uk/), Pedro Tainha
(http://www.pedrotainha.com), James, Arnout Kazemier
(http://www.3rd-Eden.com), Chris McMacken, gabriel paderni, Yannoo,
FGFEmperor, baris ozdil, Tod Gentille, Greg Frazier, jakes, 3D-GRAF, Allan
Jensen (http://www.winternet.no), Howard Yeend, Benjamin Lupton, davook,
daniel airton wermann (http://wermann.com.br), Atli T¨®r, Maximusya, Ryan
W Tenney (http://ryan.10e.us), Alexander M Beedie, fearphage
(http://http/my.opera.com/fearphage/), Nathan Sepulveda, Victor, Matteo,
Billy, stensi, Cord, Manish, T.J. Leahy, Riddler
(http://www.frontierwebdev.com/), Rafa? Kukawski, FremyCompany, Matt
Bradley, Tim de Koning, Luis Salazar (http://www.freaky-media.com/), Diogo
Resende, Rival, Andrej Pavlovic, Garagoth, Le Torbi
(http://www.letorbi.de/), Dino, Josep Sanz (http://www.ws3.es/), rem,
Russell Walker (http://www.nbill.co.uk/), Jamie Beck
(http://www.terabit.ca/), setcookie, Michael, YUI Library:
http://developer.yahoo.com/yui/docs/YAHOO.util.DateLocale.html, Blues at
http://hacks.bluesmoon.info/strftime/strftime.js, Ben
(http://benblume.co.uk/), DtTvB
(http://dt.in.th/2008-09-16.string-length-in-bytes.html), Andreas, William,
meo, incidence, Cagri Ekin, Amirouche, Amir Habibi
(http://www.residence-mixte.com/), Luke Smith (http://lucassmith.name),
Kheang Hok Chin (http://www.distantia.ca/), Jay Klehr, Lorenzo Pisani,
Tony, Yen-Wei Liu, Greenseed, mk.keck, Leslie Hoare, dude, booeyOH, Ben
Bryan

Licensed under the MIT (MIT-LICENSE.txt) license.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL KEVIN VAN ZONNEVELD BE LIABLE FOR ANY CLAIM, DAMAGES
OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * @license
 *
 * Grauw URI utilities
 *
 * See: http://hg.grauw.nl/grauw-lib/file/tip/src/uri.js
 *
 * @author Laurens Holst (http://www.grauw.nl/)
 *
 *   Copyright 2012 Laurens Holst
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 *
 */

!(function() {
    define("Core/defined", [], function() {
        "use strict";
        function e(e) {
            return void 0 !== e && null !== e;
        }
        return e;
    }),
        define("Core/DeveloperError", ["./defined"], function(e) {
            "use strict";
            function t(e) {
                (this.name = "DeveloperError"), (this.message = e);
                var t;
                try {
                    throw new Error();
                } catch (e) {
                    t = e.stack;
                }
                this.stack = t;
            }
            return (
                e(Object.create) &&
                    ((t.prototype = Object.create(Error.prototype)), (t.prototype.constructor = t)),
                (t.prototype.toString = function() {
                    var t = this.name + ": " + this.message;
                    return e(this.stack) && (t += "\n" + this.stack.toString()), t;
                }),
                (t.throwInstantiationError = function() {
                    throw new t(
                        "This function defines an interface and should not be called directly."
                    );
                }),
                t
            );
        }),
        define("Core/Check", ["./defined", "./DeveloperError"], function(e, t) {
            "use strict";
            function r(e) {
                return e + " is required, actual value was undefined";
            }
            function n(e, t, r) {
                return "Expected " + r + " to be typeof " + t + ", actual typeof was " + e;
            }
            var a = {};
            return (
                (a.typeOf = {}),
                (a.defined = function(n, a) {
                    if (!e(a)) throw new t(r(n));
                }),
                (a.typeOf.func = function(e, r) {
                    if ("function" != typeof r) throw new t(n(typeof r, "function", e));
                }),
                (a.typeOf.string = function(e, r) {
                    if ("string" != typeof r) throw new t(n(typeof r, "string", e));
                }),
                (a.typeOf.number = function(e, r) {
                    if ("number" != typeof r) throw new t(n(typeof r, "number", e));
                }),
                (a.typeOf.number.lessThan = function(e, r, n) {
                    if ((a.typeOf.number(e, r), r >= n))
                        throw new t(
                            "Expected " + e + " to be less than " + n + ", actual value was " + r
                        );
                }),
                (a.typeOf.number.lessThanOrEquals = function(e, r, n) {
                    if ((a.typeOf.number(e, r), r > n))
                        throw new t(
                            "Expected " +
                                e +
                                " to be less than or equal to " +
                                n +
                                ", actual value was " +
                                r
                        );
                }),
                (a.typeOf.number.greaterThan = function(e, r, n) {
                    if ((a.typeOf.number(e, r), r <= n))
                        throw new t(
                            "Expected " + e + " to be greater than " + n + ", actual value was " + r
                        );
                }),
                (a.typeOf.number.greaterThanOrEquals = function(e, r, n) {
                    if ((a.typeOf.number(e, r), r < n))
                        throw new t(
                            "Expected " +
                                e +
                                " to be greater than or equal to" +
                                n +
                                ", actual value was " +
                                r
                        );
                }),
                (a.typeOf.object = function(e, r) {
                    if ("object" != typeof r) throw new t(n(typeof r, "object", e));
                }),
                (a.typeOf.bool = function(e, r) {
                    if ("boolean" != typeof r) throw new t(n(typeof r, "boolean", e));
                }),
                (a.typeOf.number.equals = function(e, r, n, i) {
                    if ((a.typeOf.number(e, n), a.typeOf.number(r, i), n !== i))
                        throw new t(
                            e +
                                " must be equal to " +
                                r +
                                ", the actual values are " +
                                n +
                                " and " +
                                i
                        );
                }),
                a
            );
        }),
        define("Core/freezeObject", ["./defined"], function(e) {
            "use strict";
            var t = Object.freeze;
            return (
                e(t) ||
                    (t = function(e) {
                        return e;
                    }),
                t
            );
        }),
        define("Core/defaultValue", ["./freezeObject"], function(e) {
            "use strict";
            function t(e, t) {
                return void 0 !== e && null !== e ? e : t;
            }
            return (t.EMPTY_OBJECT = e({})), t;
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
                        t = new Array(0, this.MATRIX_A);
                    if (this.mti >= this.N) {
                        var r;
                        for (
                            this.mti == this.N + 1 && this.init_genrand(5489), r = 0;
                            r < this.N - this.M;
                            r++
                        )
                            (e =
                                (this.mt[r] & this.UPPER_MASK) |
                                (this.mt[r + 1] & this.LOWER_MASK)),
                                (this.mt[r] = this.mt[r + this.M] ^ (e >>> 1) ^ t[1 & e]);
                        for (; r < this.N - 1; r++)
                            (e =
                                (this.mt[r] & this.UPPER_MASK) |
                                (this.mt[r + 1] & this.LOWER_MASK)),
                                (this.mt[r] =
                                    this.mt[r + (this.M - this.N)] ^ (e >>> 1) ^ t[1 & e]);
                        (e =
                            (this.mt[this.N - 1] & this.UPPER_MASK) |
                            (this.mt[0] & this.LOWER_MASK)),
                            (this.mt[this.N - 1] = this.mt[this.M - 1] ^ (e >>> 1) ^ t[1 & e]),
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
        define("Core/Math", [
            "../ThirdParty/mersenne-twister",
            "./Check",
            "./defaultValue",
            "./defined",
            "./DeveloperError"
        ], function(e, t, r, n, a) {
            "use strict";
            var i = {};
            (i.EPSILON1 = 0.1),
                (i.EPSILON2 = 0.01),
                (i.EPSILON3 = 0.001),
                (i.EPSILON4 = 1e-4),
                (i.EPSILON5 = 1e-5),
                (i.EPSILON6 = 1e-6),
                (i.EPSILON7 = 1e-7),
                (i.EPSILON8 = 1e-8),
                (i.EPSILON9 = 1e-9),
                (i.EPSILON10 = 1e-10),
                (i.EPSILON11 = 1e-11),
                (i.EPSILON12 = 1e-12),
                (i.EPSILON13 = 1e-13),
                (i.EPSILON14 = 1e-14),
                (i.EPSILON15 = 1e-15),
                (i.EPSILON16 = 1e-16),
                (i.EPSILON17 = 1e-17),
                (i.EPSILON18 = 1e-18),
                (i.EPSILON19 = 1e-19),
                (i.EPSILON20 = 1e-20),
                (i.EPSILON21 = 1e-21),
                (i.GRAVITATIONALPARAMETER = 3986004418e5),
                (i.SOLAR_RADIUS = 6955e5),
                (i.LUNAR_RADIUS = 1737400),
                (i.SIXTY_FOUR_KILOBYTES = 65536),
                (i.sign = r(Math.sign, function(e) {
                    return (e = +e), 0 === e || e !== e ? e : e > 0 ? 1 : -1;
                })),
                (i.signNotZero = function(e) {
                    return e < 0 ? -1 : 1;
                }),
                (i.toSNorm = function(e, t) {
                    return (t = r(t, 255)), Math.round((0.5 * i.clamp(e, -1, 1) + 0.5) * t);
                }),
                (i.fromSNorm = function(e, t) {
                    return (t = r(t, 255)), (i.clamp(e, 0, t) / t) * 2 - 1;
                }),
                (i.sinh = r(Math.sinh, function(e) {
                    return (Math.exp(e) - Math.exp(-e)) / 2;
                })),
                (i.cosh = r(Math.cosh, function(e) {
                    return (Math.exp(e) + Math.exp(-e)) / 2;
                })),
                (i.lerp = function(e, t, r) {
                    return (1 - r) * e + r * t;
                }),
                (i.PI = Math.PI),
                (i.ONE_OVER_PI = 1 / Math.PI),
                (i.PI_OVER_TWO = Math.PI / 2),
                (i.PI_OVER_THREE = Math.PI / 3),
                (i.PI_OVER_FOUR = Math.PI / 4),
                (i.PI_OVER_SIX = Math.PI / 6),
                (i.THREE_PI_OVER_TWO = (3 * Math.PI) / 2),
                (i.TWO_PI = 2 * Math.PI),
                (i.ONE_OVER_TWO_PI = 1 / (2 * Math.PI)),
                (i.RADIANS_PER_DEGREE = Math.PI / 180),
                (i.DEGREES_PER_RADIAN = 180 / Math.PI),
                (i.RADIANS_PER_ARCSECOND = i.RADIANS_PER_DEGREE / 3600),
                (i.toRadians = function(e) {
                    return e * i.RADIANS_PER_DEGREE;
                }),
                (i.toDegrees = function(e) {
                    return e * i.DEGREES_PER_RADIAN;
                }),
                (i.convertLongitudeRange = function(e) {
                    var t = i.TWO_PI,
                        r = e - Math.floor(e / t) * t;
                    return r < -Math.PI ? r + t : r >= Math.PI ? r - t : r;
                }),
                (i.clampToLatitudeRange = function(e) {
                    return i.clamp(e, -1 * i.PI_OVER_TWO, i.PI_OVER_TWO);
                }),
                (i.negativePiToPi = function(e) {
                    return i.zeroToTwoPi(e + i.PI) - i.PI;
                }),
                (i.zeroToTwoPi = function(e) {
                    var t = i.mod(e, i.TWO_PI);
                    return Math.abs(t) < i.EPSILON14 && Math.abs(e) > i.EPSILON14 ? i.TWO_PI : t;
                }),
                (i.mod = function(e, t) {
                    return ((e % t) + t) % t;
                }),
                (i.equalsEpsilon = function(e, t, n, a) {
                    a = r(a, n);
                    var i = Math.abs(e - t);
                    return i <= a || i <= n * Math.max(Math.abs(e), Math.abs(t));
                });
            var o = [1];
            (i.factorial = function(e) {
                var t = o.length;
                if (e >= t) for (var r = o[t - 1], n = t; n <= e; n++) o.push(r * n);
                return o[e];
            }),
                (i.incrementWrap = function(e, t, n) {
                    return (n = r(n, 0)), ++e, e > t && (e = n), e;
                }),
                (i.isPowerOfTwo = function(e) {
                    return 0 !== e && 0 == (e & (e - 1));
                }),
                (i.nextPowerOfTwo = function(e) {
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
                (i.clamp = function(e, t, r) {
                    return e < t ? t : e > r ? r : e;
                });
            var u = new e();
            return (
                (i.setRandomNumberSeed = function(t) {
                    u = new e(t);
                }),
                (i.nextRandomNumber = function() {
                    return u.random();
                }),
                (i.randomBetween = function(e, t) {
                    return i.nextRandomNumber() * (t - e) + e;
                }),
                (i.acosClamped = function(e) {
                    return Math.acos(i.clamp(e, -1, 1));
                }),
                (i.asinClamped = function(e) {
                    return Math.asin(i.clamp(e, -1, 1));
                }),
                (i.chordLength = function(e, t) {
                    return 2 * t * Math.sin(0.5 * e);
                }),
                (i.logBase = function(e, t) {
                    return Math.log(e) / Math.log(t);
                }),
                (i.cbrt = r(Math.cbrt, function(e) {
                    var t = Math.pow(Math.abs(e), 1 / 3);
                    return e < 0 ? -t : t;
                })),
                (i.log2 = r(Math.log2, function(e) {
                    return Math.log(e) * Math.LOG2E;
                })),
                (i.fog = function(e, t) {
                    var r = e * t;
                    return 1 - Math.exp(-r * r);
                }),
                (i.fastApproximateAtan = function(e) {
                    return e * (-0.1784 * Math.abs(e) - 0.0663 * e * e + 1.0301);
                }),
                (i.fastApproximateAtan2 = function(e, t) {
                    var r,
                        n,
                        a = Math.abs(e);
                    (r = Math.abs(t)), (n = Math.max(a, r)), (r = Math.min(a, r));
                    var o = r / n;
                    return (
                        (a = i.fastApproximateAtan(o)),
                        (a = Math.abs(t) > Math.abs(e) ? i.PI_OVER_TWO - a : a),
                        (a = e < 0 ? i.PI - a : a),
                        (a = t < 0 ? -a : a)
                    );
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
        ], function(e, t, r, n, a, i) {
            "use strict";
            function o(e, r, n) {
                (this.x = t(e, 0)), (this.y = t(r, 0)), (this.z = t(n, 0));
            }
            (o.fromSpherical = function(e, n) {
                r(n) || (n = new o());
                var a = e.clock,
                    i = e.cone,
                    u = t(e.magnitude, 1),
                    s = u * Math.sin(i);
                return (n.x = s * Math.cos(a)), (n.y = s * Math.sin(a)), (n.z = u * Math.cos(i)), n;
            }),
                (o.fromElements = function(e, t, n, a) {
                    return r(a) ? ((a.x = e), (a.y = t), (a.z = n), a) : new o(e, t, n);
                }),
                (o.clone = function(e, t) {
                    if (r(e))
                        return r(t)
                            ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), t)
                            : new o(e.x, e.y, e.z);
                }),
                (o.fromCartesian4 = o.clone),
                (o.packedLength = 3),
                (o.pack = function(e, r, n) {
                    return (n = t(n, 0)), (r[n++] = e.x), (r[n++] = e.y), (r[n] = e.z), r;
                }),
                (o.unpack = function(e, n, a) {
                    return (
                        (n = t(n, 0)),
                        r(a) || (a = new o()),
                        (a.x = e[n++]),
                        (a.y = e[n++]),
                        (a.z = e[n]),
                        a
                    );
                }),
                (o.packArray = function(e, t) {
                    var n = e.length;
                    r(t) ? (t.length = 3 * n) : (t = new Array(3 * n));
                    for (var a = 0; a < n; ++a) o.pack(e[a], t, 3 * a);
                    return t;
                }),
                (o.unpackArray = function(e, t) {
                    var n = e.length;
                    r(t) ? (t.length = n / 3) : (t = new Array(n / 3));
                    for (var a = 0; a < n; a += 3) {
                        var i = a / 3;
                        t[i] = o.unpack(e, a, t[i]);
                    }
                    return t;
                }),
                (o.fromArray = o.unpack),
                (o.maximumComponent = function(e) {
                    return Math.max(e.x, e.y, e.z);
                }),
                (o.minimumComponent = function(e) {
                    return Math.min(e.x, e.y, e.z);
                }),
                (o.minimumByComponent = function(e, t, r) {
                    return (
                        (r.x = Math.min(e.x, t.x)),
                        (r.y = Math.min(e.y, t.y)),
                        (r.z = Math.min(e.z, t.z)),
                        r
                    );
                }),
                (o.maximumByComponent = function(e, t, r) {
                    return (
                        (r.x = Math.max(e.x, t.x)),
                        (r.y = Math.max(e.y, t.y)),
                        (r.z = Math.max(e.z, t.z)),
                        r
                    );
                }),
                (o.magnitudeSquared = function(e) {
                    return e.x * e.x + e.y * e.y + e.z * e.z;
                }),
                (o.magnitude = function(e) {
                    return Math.sqrt(o.magnitudeSquared(e));
                });
            var u = new o();
            (o.distance = function(e, t) {
                return o.subtract(e, t, u), o.magnitude(u);
            }),
                (o.distanceSquared = function(e, t) {
                    return o.subtract(e, t, u), o.magnitudeSquared(u);
                }),
                (o.normalize = function(e, t) {
                    var r = o.magnitude(e);
                    return (t.x = e.x / r), (t.y = e.y / r), (t.z = e.z / r), t;
                }),
                (o.dot = function(e, t) {
                    return e.x * t.x + e.y * t.y + e.z * t.z;
                }),
                (o.multiplyComponents = function(e, t, r) {
                    return (r.x = e.x * t.x), (r.y = e.y * t.y), (r.z = e.z * t.z), r;
                }),
                (o.divideComponents = function(e, t, r) {
                    return (r.x = e.x / t.x), (r.y = e.y / t.y), (r.z = e.z / t.z), r;
                }),
                (o.add = function(e, t, r) {
                    return (r.x = e.x + t.x), (r.y = e.y + t.y), (r.z = e.z + t.z), r;
                }),
                (o.subtract = function(e, t, r) {
                    return (r.x = e.x - t.x), (r.y = e.y - t.y), (r.z = e.z - t.z), r;
                }),
                (o.multiplyByScalar = function(e, t, r) {
                    return (r.x = e.x * t), (r.y = e.y * t), (r.z = e.z * t), r;
                }),
                (o.divideByScalar = function(e, t, r) {
                    return (r.x = e.x / t), (r.y = e.y / t), (r.z = e.z / t), r;
                }),
                (o.negate = function(e, t) {
                    return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), t;
                }),
                (o.abs = function(e, t) {
                    return (t.x = Math.abs(e.x)), (t.y = Math.abs(e.y)), (t.z = Math.abs(e.z)), t;
                });
            var s = new o();
            o.lerp = function(e, t, r, n) {
                return (
                    o.multiplyByScalar(t, r, s),
                    (n = o.multiplyByScalar(e, 1 - r, n)),
                    o.add(s, n, n)
                );
            };
            var c = new o(),
                l = new o();
            o.angleBetween = function(e, t) {
                o.normalize(e, c), o.normalize(t, l);
                var r = o.dot(c, l),
                    n = o.magnitude(o.cross(c, l, c));
                return Math.atan2(n, r);
            };
            var f = new o();
            (o.mostOrthogonalAxis = function(e, t) {
                var r = o.normalize(e, f);
                return (
                    o.abs(r, r),
                    (t =
                        r.x <= r.y
                            ? r.x <= r.z
                                ? o.clone(o.UNIT_X, t)
                                : o.clone(o.UNIT_Z, t)
                            : r.y <= r.z
                            ? o.clone(o.UNIT_Y, t)
                            : o.clone(o.UNIT_Z, t))
                );
            }),
                (o.projectVector = function(e, t, r) {
                    var n = o.dot(e, t) / o.dot(t, t);
                    return o.multiplyByScalar(t, n, r);
                }),
                (o.equals = function(e, t) {
                    return e === t || (r(e) && r(t) && e.x === t.x && e.y === t.y && e.z === t.z);
                }),
                (o.equalsArray = function(e, t, r) {
                    return e.x === t[r] && e.y === t[r + 1] && e.z === t[r + 2];
                }),
                (o.equalsEpsilon = function(e, t, n, a) {
                    return (
                        e === t ||
                        (r(e) &&
                            r(t) &&
                            i.equalsEpsilon(e.x, t.x, n, a) &&
                            i.equalsEpsilon(e.y, t.y, n, a) &&
                            i.equalsEpsilon(e.z, t.z, n, a))
                    );
                }),
                (o.cross = function(e, t, r) {
                    var n = e.x,
                        a = e.y,
                        i = e.z,
                        o = t.x,
                        u = t.y,
                        s = t.z,
                        c = a * s - i * u,
                        l = i * o - n * s,
                        f = n * u - a * o;
                    return (r.x = c), (r.y = l), (r.z = f), r;
                }),
                (o.midpoint = function(e, t, r) {
                    return (
                        (r.x = 0.5 * (e.x + t.x)),
                        (r.y = 0.5 * (e.y + t.y)),
                        (r.z = 0.5 * (e.z + t.z)),
                        r
                    );
                }),
                (o.fromDegrees = function(e, t, r, n, a) {
                    return (e = i.toRadians(e)), (t = i.toRadians(t)), o.fromRadians(e, t, r, n, a);
                });
            var h = new o(),
                d = new o(),
                p = new o(40680631590769, 40680631590769, 40408299984661.445);
            return (
                (o.fromRadians = function(e, n, a, i, u) {
                    a = t(a, 0);
                    var s = r(i) ? i.radiiSquared : p,
                        c = Math.cos(n);
                    (h.x = c * Math.cos(e)),
                        (h.y = c * Math.sin(e)),
                        (h.z = Math.sin(n)),
                        (h = o.normalize(h, h)),
                        o.multiplyComponents(s, h, d);
                    var l = Math.sqrt(o.dot(h, d));
                    return (
                        (d = o.divideByScalar(d, l, d)),
                        (h = o.multiplyByScalar(h, a, h)),
                        r(u) || (u = new o()),
                        o.add(d, h, u)
                    );
                }),
                (o.fromDegreesArray = function(e, t, n) {
                    var a = e.length;
                    r(n) ? (n.length = a / 2) : (n = new Array(a / 2));
                    for (var i = 0; i < a; i += 2) {
                        var u = e[i],
                            s = e[i + 1],
                            c = i / 2;
                        n[c] = o.fromDegrees(u, s, 0, t, n[c]);
                    }
                    return n;
                }),
                (o.fromRadiansArray = function(e, t, n) {
                    var a = e.length;
                    r(n) ? (n.length = a / 2) : (n = new Array(a / 2));
                    for (var i = 0; i < a; i += 2) {
                        var u = e[i],
                            s = e[i + 1],
                            c = i / 2;
                        n[c] = o.fromRadians(u, s, 0, t, n[c]);
                    }
                    return n;
                }),
                (o.fromDegreesArrayHeights = function(e, t, n) {
                    var a = e.length;
                    r(n) ? (n.length = a / 3) : (n = new Array(a / 3));
                    for (var i = 0; i < a; i += 3) {
                        var u = e[i],
                            s = e[i + 1],
                            c = e[i + 2],
                            l = i / 3;
                        n[l] = o.fromDegrees(u, s, c, t, n[l]);
                    }
                    return n;
                }),
                (o.fromRadiansArrayHeights = function(e, t, n) {
                    var a = e.length;
                    r(n) ? (n.length = a / 3) : (n = new Array(a / 3));
                    for (var i = 0; i < a; i += 3) {
                        var u = e[i],
                            s = e[i + 1],
                            c = e[i + 2],
                            l = i / 3;
                        n[l] = o.fromRadians(u, s, c, t, n[l]);
                    }
                    return n;
                }),
                (o.ZERO = a(new o(0, 0, 0))),
                (o.UNIT_X = a(new o(1, 0, 0))),
                (o.UNIT_Y = a(new o(0, 1, 0))),
                (o.UNIT_Z = a(new o(0, 0, 1))),
                (o.prototype.clone = function(e) {
                    return o.clone(this, e);
                }),
                (o.prototype.equals = function(e) {
                    return o.equals(this, e);
                }),
                (o.prototype.equalsEpsilon = function(e, t, r) {
                    return o.equalsEpsilon(this, e, t, r);
                }),
                (o.prototype.toString = function() {
                    return "(" + this.x + ", " + this.y + ", " + this.z + ")";
                }),
                o
            );
        }),
        define("Core/scaleToGeodeticSurface", [
            "./Cartesian3",
            "./defined",
            "./DeveloperError",
            "./Math"
        ], function(e, t, r, n) {
            "use strict";
            function a(r, a, u, s, c) {
                var l = r.x,
                    f = r.y,
                    h = r.z,
                    d = a.x,
                    p = a.y,
                    y = a.z,
                    m = l * l * d * d,
                    E = f * f * p * p,
                    _ = h * h * y * y,
                    v = m + E + _,
                    T = Math.sqrt(1 / v),
                    R = e.multiplyByScalar(r, T, i);
                if (v < s) return isFinite(T) ? e.clone(R, c) : void 0;
                var A = u.x,
                    g = u.y,
                    S = u.z,
                    w = o;
                (w.x = R.x * A * 2), (w.y = R.y * g * 2), (w.z = R.z * S * 2);
                var N,
                    O,
                    I,
                    x,
                    M,
                    C,
                    P,
                    b,
                    U,
                    D,
                    L,
                    F = ((1 - T) * e.magnitude(r)) / (0.5 * e.magnitude(w)),
                    B = 0;
                do {
                    (F -= B),
                        (I = 1 / (1 + F * A)),
                        (x = 1 / (1 + F * g)),
                        (M = 1 / (1 + F * S)),
                        (C = I * I),
                        (P = x * x),
                        (b = M * M),
                        (U = C * I),
                        (D = P * x),
                        (L = b * M),
                        (N = m * C + E * P + _ * b - 1),
                        (O = m * U * A + E * D * g + _ * L * S);
                    B = N / (-2 * O);
                } while (Math.abs(N) > n.EPSILON12);
                return t(c)
                    ? ((c.x = l * I), (c.y = f * x), (c.z = h * M), c)
                    : new e(l * I, f * x, h * M);
            }
            var i = new e(),
                o = new e();
            return a;
        }),
        define("Core/Cartographic", [
            "./Cartesian3",
            "./Check",
            "./defaultValue",
            "./defined",
            "./freezeObject",
            "./Math",
            "./scaleToGeodeticSurface"
        ], function(e, t, r, n, a, i, o) {
            "use strict";
            function u(e, t, n) {
                (this.longitude = r(e, 0)), (this.latitude = r(t, 0)), (this.height = r(n, 0));
            }
            (u.fromRadians = function(e, t, a, i) {
                return (
                    (a = r(a, 0)),
                    n(i) ? ((i.longitude = e), (i.latitude = t), (i.height = a), i) : new u(e, t, a)
                );
            }),
                (u.fromDegrees = function(e, t, r, n) {
                    return (e = i.toRadians(e)), (t = i.toRadians(t)), u.fromRadians(e, t, r, n);
                });
            var s = new e(),
                c = new e(),
                l = new e(),
                f = new e(1 / 6378137, 1 / 6378137, 1 / 6356752.314245179),
                h = new e(1 / 40680631590769, 1 / 40680631590769, 1 / 40408299984661.445),
                d = i.EPSILON1;
            return (
                (u.fromCartesian = function(t, r, a) {
                    var p = n(r) ? r.oneOverRadii : f,
                        y = n(r) ? r.oneOverRadiiSquared : h,
                        m = n(r) ? r._centerToleranceSquared : d,
                        E = o(t, p, y, m, c);
                    if (n(E)) {
                        var _ = e.multiplyComponents(E, y, s);
                        _ = e.normalize(_, _);
                        var v = e.subtract(t, E, l),
                            T = Math.atan2(_.y, _.x),
                            R = Math.asin(_.z),
                            A = i.sign(e.dot(v, t)) * e.magnitude(v);
                        return n(a)
                            ? ((a.longitude = T), (a.latitude = R), (a.height = A), a)
                            : new u(T, R, A);
                    }
                }),
                (u.toCartesian = function(t, r, n) {
                    return e.fromRadians(t.longitude, t.latitude, t.height, r, n);
                }),
                (u.clone = function(e, t) {
                    if (n(e))
                        return n(t)
                            ? ((t.longitude = e.longitude),
                              (t.latitude = e.latitude),
                              (t.height = e.height),
                              t)
                            : new u(e.longitude, e.latitude, e.height);
                }),
                (u.equals = function(e, t) {
                    return (
                        e === t ||
                        (n(e) &&
                            n(t) &&
                            e.longitude === t.longitude &&
                            e.latitude === t.latitude &&
                            e.height === t.height)
                    );
                }),
                (u.equalsEpsilon = function(e, t, r) {
                    return (
                        e === t ||
                        (n(e) &&
                            n(t) &&
                            Math.abs(e.longitude - t.longitude) <= r &&
                            Math.abs(e.latitude - t.latitude) <= r &&
                            Math.abs(e.height - t.height) <= r)
                    );
                }),
                (u.ZERO = a(new u(0, 0, 0))),
                (u.prototype.clone = function(e) {
                    return u.clone(this, e);
                }),
                (u.prototype.equals = function(e) {
                    return u.equals(this, e);
                }),
                (u.prototype.equalsEpsilon = function(e, t) {
                    return u.equalsEpsilon(this, e, t);
                }),
                (u.prototype.toString = function() {
                    return "(" + this.longitude + ", " + this.latitude + ", " + this.height + ")";
                }),
                u
            );
        }),
        define("Core/defineProperties", ["./defined"], function(e) {
            "use strict";
            var t = (function() {
                    try {
                        return "x" in Object.defineProperty({}, "x", {});
                    } catch (e) {
                        return !1;
                    }
                })(),
                r = Object.defineProperties;
            return (
                (t && e(r)) ||
                    (r = function(e) {
                        return e;
                    }),
                r
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
        ], function(e, t, r, n, a, i, o, u, s, c) {
            "use strict";
            function l(t, r, a, i) {
                (r = n(r, 0)),
                    (a = n(a, 0)),
                    (i = n(i, 0)),
                    (t._radii = new e(r, a, i)),
                    (t._radiiSquared = new e(r * r, a * a, i * i)),
                    (t._radiiToTheFourth = new e(r * r * r * r, a * a * a * a, i * i * i * i)),
                    (t._oneOverRadii = new e(
                        0 === r ? 0 : 1 / r,
                        0 === a ? 0 : 1 / a,
                        0 === i ? 0 : 1 / i
                    )),
                    (t._oneOverRadiiSquared = new e(
                        0 === r ? 0 : 1 / (r * r),
                        0 === a ? 0 : 1 / (a * a),
                        0 === i ? 0 : 1 / (i * i)
                    )),
                    (t._minimumRadius = Math.min(r, a, i)),
                    (t._maximumRadius = Math.max(r, a, i)),
                    (t._centerToleranceSquared = s.EPSILON1),
                    0 !== t._radiiSquared.z &&
                        (t._squaredXOverSquaredZ = t._radiiSquared.x / t._radiiSquared.z);
            }
            function f(e, t, r) {
                (this._radii = void 0),
                    (this._radiiSquared = void 0),
                    (this._radiiToTheFourth = void 0),
                    (this._oneOverRadii = void 0),
                    (this._oneOverRadiiSquared = void 0),
                    (this._minimumRadius = void 0),
                    (this._maximumRadius = void 0),
                    (this._centerToleranceSquared = void 0),
                    (this._squaredXOverSquaredZ = void 0),
                    l(this, e, t, r);
            }
            i(f.prototype, {
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
                (f.clone = function(t, r) {
                    if (a(t)) {
                        var n = t._radii;
                        return a(r)
                            ? (e.clone(n, r._radii),
                              e.clone(t._radiiSquared, r._radiiSquared),
                              e.clone(t._radiiToTheFourth, r._radiiToTheFourth),
                              e.clone(t._oneOverRadii, r._oneOverRadii),
                              e.clone(t._oneOverRadiiSquared, r._oneOverRadiiSquared),
                              (r._minimumRadius = t._minimumRadius),
                              (r._maximumRadius = t._maximumRadius),
                              (r._centerToleranceSquared = t._centerToleranceSquared),
                              r)
                            : new f(n.x, n.y, n.z);
                    }
                }),
                (f.fromCartesian3 = function(e, t) {
                    return a(t) || (t = new f()), a(e) ? (l(t, e.x, e.y, e.z), t) : t;
                }),
                (f.WGS84 = u(new f(6378137, 6378137, 6356752.314245179))),
                (f.UNIT_SPHERE = u(new f(1, 1, 1))),
                (f.MOON = u(new f(s.LUNAR_RADIUS, s.LUNAR_RADIUS, s.LUNAR_RADIUS))),
                (f.prototype.clone = function(e) {
                    return f.clone(this, e);
                }),
                (f.packedLength = e.packedLength),
                (f.pack = function(t, r, a) {
                    return (a = n(a, 0)), e.pack(t._radii, r, a), r;
                }),
                (f.unpack = function(t, r, a) {
                    r = n(r, 0);
                    var i = e.unpack(t, r);
                    return f.fromCartesian3(i, a);
                }),
                (f.prototype.geocentricSurfaceNormal = e.normalize),
                (f.prototype.geodeticSurfaceNormalCartographic = function(t, r) {
                    var n = t.longitude,
                        i = t.latitude,
                        o = Math.cos(i),
                        u = o * Math.cos(n),
                        s = o * Math.sin(n),
                        c = Math.sin(i);
                    return (
                        a(r) || (r = new e()), (r.x = u), (r.y = s), (r.z = c), e.normalize(r, r)
                    );
                }),
                (f.prototype.geodeticSurfaceNormal = function(t, r) {
                    return (
                        a(r) || (r = new e()),
                        (r = e.multiplyComponents(t, this._oneOverRadiiSquared, r)),
                        e.normalize(r, r)
                    );
                });
            var h = new e(),
                d = new e();
            (f.prototype.cartographicToCartesian = function(t, r) {
                var n = h,
                    i = d;
                this.geodeticSurfaceNormalCartographic(t, n),
                    e.multiplyComponents(this._radiiSquared, n, i);
                var o = Math.sqrt(e.dot(n, i));
                return (
                    e.divideByScalar(i, o, i),
                    e.multiplyByScalar(n, t.height, n),
                    a(r) || (r = new e()),
                    e.add(i, n, r)
                );
            }),
                (f.prototype.cartographicArrayToCartesianArray = function(e, t) {
                    var r = e.length;
                    a(t) ? (t.length = r) : (t = new Array(r));
                    for (var n = 0; n < r; n++) t[n] = this.cartographicToCartesian(e[n], t[n]);
                    return t;
                });
            var p = new e(),
                y = new e(),
                m = new e();
            return (
                (f.prototype.cartesianToCartographic = function(r, n) {
                    var i = this.scaleToGeodeticSurface(r, y);
                    if (a(i)) {
                        var o = this.geodeticSurfaceNormal(i, p),
                            u = e.subtract(r, i, m),
                            c = Math.atan2(o.y, o.x),
                            l = Math.asin(o.z),
                            f = s.sign(e.dot(u, r)) * e.magnitude(u);
                        return a(n)
                            ? ((n.longitude = c), (n.latitude = l), (n.height = f), n)
                            : new t(c, l, f);
                    }
                }),
                (f.prototype.cartesianArrayToCartographicArray = function(e, t) {
                    var r = e.length;
                    a(t) ? (t.length = r) : (t = new Array(r));
                    for (var n = 0; n < r; ++n) t[n] = this.cartesianToCartographic(e[n], t[n]);
                    return t;
                }),
                (f.prototype.scaleToGeodeticSurface = function(e, t) {
                    return c(
                        e,
                        this._oneOverRadii,
                        this._oneOverRadiiSquared,
                        this._centerToleranceSquared,
                        t
                    );
                }),
                (f.prototype.scaleToGeocentricSurface = function(t, r) {
                    a(r) || (r = new e());
                    var n = t.x,
                        i = t.y,
                        o = t.z,
                        u = this._oneOverRadiiSquared,
                        s = 1 / Math.sqrt(n * n * u.x + i * i * u.y + o * o * u.z);
                    return e.multiplyByScalar(t, s, r);
                }),
                (f.prototype.transformPositionToScaledSpace = function(t, r) {
                    return a(r) || (r = new e()), e.multiplyComponents(t, this._oneOverRadii, r);
                }),
                (f.prototype.transformPositionFromScaledSpace = function(t, r) {
                    return a(r) || (r = new e()), e.multiplyComponents(t, this._radii, r);
                }),
                (f.prototype.equals = function(t) {
                    return this === t || (a(t) && e.equals(this._radii, t._radii));
                }),
                (f.prototype.toString = function() {
                    return this._radii.toString();
                }),
                (f.prototype.getSurfaceNormalIntersectionWithZAxis = function(t, r, i) {
                    r = n(r, 0);
                    var o = this._squaredXOverSquaredZ;
                    if (
                        (a(i) || (i = new e()),
                        (i.x = 0),
                        (i.y = 0),
                        (i.z = t.z * (1 - o)),
                        !(Math.abs(i.z) >= this._radii.z - r))
                    )
                        return i;
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
        ], function(e, t, r, n, a, i, o, u) {
            "use strict";
            function s(e, t, n, a) {
                (this.west = r(e, 0)),
                    (this.south = r(t, 0)),
                    (this.east = r(n, 0)),
                    (this.north = r(a, 0));
            }
            a(s.prototype, {
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
                (s.pack = function(e, t, n) {
                    return (
                        (n = r(n, 0)),
                        (t[n++] = e.west),
                        (t[n++] = e.south),
                        (t[n++] = e.east),
                        (t[n] = e.north),
                        t
                    );
                }),
                (s.unpack = function(e, t, a) {
                    return (
                        (t = r(t, 0)),
                        n(a) || (a = new s()),
                        (a.west = e[t++]),
                        (a.south = e[t++]),
                        (a.east = e[t++]),
                        (a.north = e[t]),
                        a
                    );
                }),
                (s.computeWidth = function(e) {
                    var t = e.east,
                        r = e.west;
                    return t < r && (t += u.TWO_PI), t - r;
                }),
                (s.computeHeight = function(e) {
                    return e.north - e.south;
                }),
                (s.fromDegrees = function(e, t, a, i, o) {
                    return (
                        (e = u.toRadians(r(e, 0))),
                        (t = u.toRadians(r(t, 0))),
                        (a = u.toRadians(r(a, 0))),
                        (i = u.toRadians(r(i, 0))),
                        n(o)
                            ? ((o.west = e), (o.south = t), (o.east = a), (o.north = i), o)
                            : new s(e, t, a, i)
                    );
                }),
                (s.fromRadians = function(e, t, a, i, o) {
                    return n(o)
                        ? ((o.west = r(e, 0)),
                          (o.south = r(t, 0)),
                          (o.east = r(a, 0)),
                          (o.north = r(i, 0)),
                          o)
                        : new s(e, t, a, i);
                }),
                (s.fromCartographicArray = function(e, t) {
                    for (
                        var r = Number.MAX_VALUE,
                            a = -Number.MAX_VALUE,
                            i = Number.MAX_VALUE,
                            o = -Number.MAX_VALUE,
                            c = Number.MAX_VALUE,
                            l = -Number.MAX_VALUE,
                            f = 0,
                            h = e.length;
                        f < h;
                        f++
                    ) {
                        var d = e[f];
                        (r = Math.min(r, d.longitude)),
                            (a = Math.max(a, d.longitude)),
                            (c = Math.min(c, d.latitude)),
                            (l = Math.max(l, d.latitude));
                        var p = d.longitude >= 0 ? d.longitude : d.longitude + u.TWO_PI;
                        (i = Math.min(i, p)), (o = Math.max(o, p));
                    }
                    return (
                        a - r > o - i &&
                            ((r = i),
                            (a = o),
                            a > u.PI && (a -= u.TWO_PI),
                            r > u.PI && (r -= u.TWO_PI)),
                        n(t)
                            ? ((t.west = r), (t.south = c), (t.east = a), (t.north = l), t)
                            : new s(r, c, a, l)
                    );
                }),
                (s.fromCartesianArray = function(e, t, a) {
                    t = r(t, i.WGS84);
                    for (
                        var o = Number.MAX_VALUE,
                            c = -Number.MAX_VALUE,
                            l = Number.MAX_VALUE,
                            f = -Number.MAX_VALUE,
                            h = Number.MAX_VALUE,
                            d = -Number.MAX_VALUE,
                            p = 0,
                            y = e.length;
                        p < y;
                        p++
                    ) {
                        var m = t.cartesianToCartographic(e[p]);
                        (o = Math.min(o, m.longitude)),
                            (c = Math.max(c, m.longitude)),
                            (h = Math.min(h, m.latitude)),
                            (d = Math.max(d, m.latitude));
                        var E = m.longitude >= 0 ? m.longitude : m.longitude + u.TWO_PI;
                        (l = Math.min(l, E)), (f = Math.max(f, E));
                    }
                    return (
                        c - o > f - l &&
                            ((o = l),
                            (c = f),
                            c > u.PI && (c -= u.TWO_PI),
                            o > u.PI && (o -= u.TWO_PI)),
                        n(a)
                            ? ((a.west = o), (a.south = h), (a.east = c), (a.north = d), a)
                            : new s(o, h, c, d)
                    );
                }),
                (s.clone = function(e, t) {
                    if (n(e))
                        return n(t)
                            ? ((t.west = e.west),
                              (t.south = e.south),
                              (t.east = e.east),
                              (t.north = e.north),
                              t)
                            : new s(e.west, e.south, e.east, e.north);
                }),
                (s.equalsEpsilon = function(e, t, r) {
                    return (
                        e === t ||
                        (n(e) &&
                            n(t) &&
                            Math.abs(e.west - t.west) <= r &&
                            Math.abs(e.south - t.south) <= r &&
                            Math.abs(e.east - t.east) <= r &&
                            Math.abs(e.north - t.north) <= r)
                    );
                }),
                (s.prototype.clone = function(e) {
                    return s.clone(this, e);
                }),
                (s.prototype.equals = function(e) {
                    return s.equals(this, e);
                }),
                (s.equals = function(e, t) {
                    return (
                        e === t ||
                        (n(e) &&
                            n(t) &&
                            e.west === t.west &&
                            e.south === t.south &&
                            e.east === t.east &&
                            e.north === t.north)
                    );
                }),
                (s.prototype.equalsEpsilon = function(e, t) {
                    return s.equalsEpsilon(this, e, t);
                }),
                (s.validate = function(e) {}),
                (s.southwest = function(t, r) {
                    return n(r)
                        ? ((r.longitude = t.west), (r.latitude = t.south), (r.height = 0), r)
                        : new e(t.west, t.south);
                }),
                (s.northwest = function(t, r) {
                    return n(r)
                        ? ((r.longitude = t.west), (r.latitude = t.north), (r.height = 0), r)
                        : new e(t.west, t.north);
                }),
                (s.northeast = function(t, r) {
                    return n(r)
                        ? ((r.longitude = t.east), (r.latitude = t.north), (r.height = 0), r)
                        : new e(t.east, t.north);
                }),
                (s.southeast = function(t, r) {
                    return n(r)
                        ? ((r.longitude = t.east), (r.latitude = t.south), (r.height = 0), r)
                        : new e(t.east, t.south);
                }),
                (s.center = function(t, r) {
                    var a = t.east,
                        i = t.west;
                    a < i && (a += u.TWO_PI);
                    var o = u.negativePiToPi(0.5 * (i + a)),
                        s = 0.5 * (t.south + t.north);
                    return n(r)
                        ? ((r.longitude = o), (r.latitude = s), (r.height = 0), r)
                        : new e(o, s);
                }),
                (s.intersection = function(e, t, r) {
                    var a = e.east,
                        i = e.west,
                        o = t.east,
                        c = t.west;
                    a < i && o > 0 ? (a += u.TWO_PI) : o < c && a > 0 && (o += u.TWO_PI),
                        a < i && c < 0 ? (c += u.TWO_PI) : o < c && i < 0 && (i += u.TWO_PI);
                    var l = u.negativePiToPi(Math.max(i, c)),
                        f = u.negativePiToPi(Math.min(a, o));
                    if (!((e.west < e.east || t.west < t.east) && f <= l)) {
                        var h = Math.max(e.south, t.south),
                            d = Math.min(e.north, t.north);
                        if (!(h >= d))
                            return n(r)
                                ? ((r.west = l), (r.south = h), (r.east = f), (r.north = d), r)
                                : new s(l, h, f, d);
                    }
                }),
                (s.simpleIntersection = function(e, t, r) {
                    var a = Math.max(e.west, t.west),
                        i = Math.max(e.south, t.south),
                        o = Math.min(e.east, t.east),
                        u = Math.min(e.north, t.north);
                    if (!(i >= u || a >= o))
                        return n(r)
                            ? ((r.west = a), (r.south = i), (r.east = o), (r.north = u), r)
                            : new s(a, i, o, u);
                }),
                (s.union = function(e, t, r) {
                    n(r) || (r = new s());
                    var a = e.east,
                        i = e.west,
                        o = t.east,
                        c = t.west;
                    a < i && o > 0 ? (a += u.TWO_PI) : o < c && a > 0 && (o += u.TWO_PI),
                        a < i && c < 0 ? (c += u.TWO_PI) : o < c && i < 0 && (i += u.TWO_PI);
                    var l = u.convertLongitudeRange(Math.min(i, c)),
                        f = u.convertLongitudeRange(Math.max(a, o));
                    return (
                        (r.west = l),
                        (r.south = Math.min(e.south, t.south)),
                        (r.east = f),
                        (r.north = Math.max(e.north, t.north)),
                        r
                    );
                }),
                (s.expand = function(e, t, r) {
                    return (
                        n(r) || (r = new s()),
                        (r.west = Math.min(e.west, t.longitude)),
                        (r.south = Math.min(e.south, t.latitude)),
                        (r.east = Math.max(e.east, t.longitude)),
                        (r.north = Math.max(e.north, t.latitude)),
                        r
                    );
                }),
                (s.contains = function(e, t) {
                    var r = t.longitude,
                        n = t.latitude,
                        a = e.west,
                        i = e.east;
                    return (
                        i < a && ((i += u.TWO_PI), r < 0 && (r += u.TWO_PI)),
                        (r > a || u.equalsEpsilon(r, a, u.EPSILON14)) &&
                            (r < i || u.equalsEpsilon(r, i, u.EPSILON14)) &&
                            n >= e.south &&
                            n <= e.north
                    );
                });
            var c = new e();
            return (
                (s.subsample = function(e, t, a, o) {
                    (t = r(t, i.WGS84)), (a = r(a, 0)), n(o) || (o = []);
                    var l = 0,
                        f = e.north,
                        h = e.south,
                        d = e.east,
                        p = e.west,
                        y = c;
                    (y.height = a),
                        (y.longitude = p),
                        (y.latitude = f),
                        (o[l] = t.cartographicToCartesian(y, o[l])),
                        l++,
                        (y.longitude = d),
                        (o[l] = t.cartographicToCartesian(y, o[l])),
                        l++,
                        (y.latitude = h),
                        (o[l] = t.cartographicToCartesian(y, o[l])),
                        l++,
                        (y.longitude = p),
                        (o[l] = t.cartographicToCartesian(y, o[l])),
                        l++,
                        (y.latitude = f < 0 ? f : h > 0 ? h : 0);
                    for (var m = 1; m < 8; ++m)
                        (y.longitude = -Math.PI + m * u.PI_OVER_TWO),
                            s.contains(e, y) && ((o[l] = t.cartographicToCartesian(y, o[l])), l++);
                    return (
                        0 === y.latitude &&
                            ((y.longitude = p),
                            (o[l] = t.cartographicToCartesian(y, o[l])),
                            l++,
                            (y.longitude = d),
                            (o[l] = t.cartographicToCartesian(y, o[l])),
                            l++),
                        (o.length = l),
                        o
                    );
                }),
                (s.MAX_VALUE = o(new s(-Math.PI, -u.PI_OVER_TWO, Math.PI, u.PI_OVER_TWO))),
                s
            );
        }),
        define("Core/arrayFill", ["./Check", "./defaultValue", "./defined"], function(e, t, r) {
            "use strict";
            function n(e, r, n, a) {
                if ("function" == typeof e.fill) return e.fill(r, n, a);
                for (
                    var i = e.length >>> 0,
                        o = t(n, 0),
                        u = o < 0 ? Math.max(i + o, 0) : Math.min(o, i),
                        s = t(a, i),
                        c = s < 0 ? Math.max(i + s, 0) : Math.min(s, i);
                    u < c;

                )
                    (e[u] = r), u++;
                return e;
            }
            return n;
        }),
        define("Core/GeographicProjection", [
            "./Cartesian3",
            "./Cartographic",
            "./defaultValue",
            "./defined",
            "./defineProperties",
            "./DeveloperError",
            "./Ellipsoid"
        ], function(e, t, r, n, a, i, o) {
            "use strict";
            function u(e) {
                (this._ellipsoid = r(e, o.WGS84)),
                    (this._semimajorAxis = this._ellipsoid.maximumRadius),
                    (this._oneOverSemimajorAxis = 1 / this._semimajorAxis);
            }
            return (
                a(u.prototype, {
                    ellipsoid: {
                        get: function() {
                            return this._ellipsoid;
                        }
                    }
                }),
                (u.prototype.project = function(t, r) {
                    var a = this._semimajorAxis,
                        i = t.longitude * a,
                        o = t.latitude * a,
                        u = t.height;
                    return n(r) ? ((r.x = i), (r.y = o), (r.z = u), r) : new e(i, o, u);
                }),
                (u.prototype.unproject = function(e, r) {
                    var a = this._oneOverSemimajorAxis,
                        i = e.x * a,
                        o = e.y * a,
                        u = e.z;
                    return n(r)
                        ? ((r.longitude = i), (r.latitude = o), (r.height = u), r)
                        : new t(i, o, u);
                }),
                u
            );
        }),
        define("Core/Intersect", ["./freezeObject"], function(e) {
            "use strict";
            return e({ OUTSIDE: -1, INTERSECTING: 0, INSIDE: 1 });
        }),
        define("Core/Interval", ["./defaultValue"], function(e) {
            "use strict";
            function t(t, r) {
                (this.start = e(t, 0)), (this.stop = e(r, 0));
            }
            return t;
        }),
        define("Core/Matrix3", [
            "./Cartesian3",
            "./Check",
            "./defaultValue",
            "./defined",
            "./defineProperties",
            "./DeveloperError",
            "./freezeObject",
            "./Math"
        ], function(e, t, r, n, a, i, o, u) {
            "use strict";
            function s(e, t, n, a, i, o, u, s, c) {
                (this[0] = r(e, 0)),
                    (this[1] = r(a, 0)),
                    (this[2] = r(u, 0)),
                    (this[3] = r(t, 0)),
                    (this[4] = r(i, 0)),
                    (this[5] = r(s, 0)),
                    (this[6] = r(n, 0)),
                    (this[7] = r(o, 0)),
                    (this[8] = r(c, 0));
            }
            function c(e) {
                for (var t = 0, r = 0; r < 9; ++r) {
                    var n = e[r];
                    t += n * n;
                }
                return Math.sqrt(t);
            }
            function l(e) {
                for (var t = 0, r = 0; r < 3; ++r) {
                    var n = e[s.getElementIndex(y[r], p[r])];
                    t += 2 * n * n;
                }
                return Math.sqrt(t);
            }
            function f(e, t) {
                for (var r = u.EPSILON15, n = 0, a = 1, i = 0; i < 3; ++i) {
                    var o = Math.abs(e[s.getElementIndex(y[i], p[i])]);
                    o > n && ((a = i), (n = o));
                }
                var c = 1,
                    l = 0,
                    f = p[a],
                    h = y[a];
                if (Math.abs(e[s.getElementIndex(h, f)]) > r) {
                    var d,
                        m = e[s.getElementIndex(h, h)],
                        E = e[s.getElementIndex(f, f)],
                        _ = e[s.getElementIndex(h, f)],
                        v = (m - E) / 2 / _;
                    (d = v < 0 ? -1 / (-v + Math.sqrt(1 + v * v)) : 1 / (v + Math.sqrt(1 + v * v))),
                        (c = 1 / Math.sqrt(1 + d * d)),
                        (l = d * c);
                }
                return (
                    (t = s.clone(s.IDENTITY, t)),
                    (t[s.getElementIndex(f, f)] = t[s.getElementIndex(h, h)] = c),
                    (t[s.getElementIndex(h, f)] = l),
                    (t[s.getElementIndex(f, h)] = -l),
                    t
                );
            }
            (s.packedLength = 9),
                (s.pack = function(e, t, n) {
                    return (
                        (n = r(n, 0)),
                        (t[n++] = e[0]),
                        (t[n++] = e[1]),
                        (t[n++] = e[2]),
                        (t[n++] = e[3]),
                        (t[n++] = e[4]),
                        (t[n++] = e[5]),
                        (t[n++] = e[6]),
                        (t[n++] = e[7]),
                        (t[n++] = e[8]),
                        t
                    );
                }),
                (s.unpack = function(e, t, a) {
                    return (
                        (t = r(t, 0)),
                        n(a) || (a = new s()),
                        (a[0] = e[t++]),
                        (a[1] = e[t++]),
                        (a[2] = e[t++]),
                        (a[3] = e[t++]),
                        (a[4] = e[t++]),
                        (a[5] = e[t++]),
                        (a[6] = e[t++]),
                        (a[7] = e[t++]),
                        (a[8] = e[t++]),
                        a
                    );
                }),
                (s.clone = function(e, t) {
                    if (n(e))
                        return n(t)
                            ? ((t[0] = e[0]),
                              (t[1] = e[1]),
                              (t[2] = e[2]),
                              (t[3] = e[3]),
                              (t[4] = e[4]),
                              (t[5] = e[5]),
                              (t[6] = e[6]),
                              (t[7] = e[7]),
                              (t[8] = e[8]),
                              t)
                            : new s(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]);
                }),
                (s.fromArray = function(e, t, a) {
                    return (
                        (t = r(t, 0)),
                        n(a) || (a = new s()),
                        (a[0] = e[t]),
                        (a[1] = e[t + 1]),
                        (a[2] = e[t + 2]),
                        (a[3] = e[t + 3]),
                        (a[4] = e[t + 4]),
                        (a[5] = e[t + 5]),
                        (a[6] = e[t + 6]),
                        (a[7] = e[t + 7]),
                        (a[8] = e[t + 8]),
                        a
                    );
                }),
                (s.fromColumnMajorArray = function(e, t) {
                    return s.clone(e, t);
                }),
                (s.fromRowMajorArray = function(e, t) {
                    return n(t)
                        ? ((t[0] = e[0]),
                          (t[1] = e[3]),
                          (t[2] = e[6]),
                          (t[3] = e[1]),
                          (t[4] = e[4]),
                          (t[5] = e[7]),
                          (t[6] = e[2]),
                          (t[7] = e[5]),
                          (t[8] = e[8]),
                          t)
                        : new s(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]);
                }),
                (s.fromQuaternion = function(e, t) {
                    var r = e.x * e.x,
                        a = e.x * e.y,
                        i = e.x * e.z,
                        o = e.x * e.w,
                        u = e.y * e.y,
                        c = e.y * e.z,
                        l = e.y * e.w,
                        f = e.z * e.z,
                        h = e.z * e.w,
                        d = e.w * e.w,
                        p = r - u - f + d,
                        y = 2 * (a - h),
                        m = 2 * (i + l),
                        E = 2 * (a + h),
                        _ = -r + u - f + d,
                        v = 2 * (c - o),
                        T = 2 * (i - l),
                        R = 2 * (c + o),
                        A = -r - u + f + d;
                    return n(t)
                        ? ((t[0] = p),
                          (t[1] = E),
                          (t[2] = T),
                          (t[3] = y),
                          (t[4] = _),
                          (t[5] = R),
                          (t[6] = m),
                          (t[7] = v),
                          (t[8] = A),
                          t)
                        : new s(p, y, m, E, _, v, T, R, A);
                }),
                (s.fromHeadingPitchRoll = function(e, t) {
                    var r = Math.cos(-e.pitch),
                        a = Math.cos(-e.heading),
                        i = Math.cos(e.roll),
                        o = Math.sin(-e.pitch),
                        u = Math.sin(-e.heading),
                        c = Math.sin(e.roll),
                        l = r * a,
                        f = -i * u + c * o * a,
                        h = c * u + i * o * a,
                        d = r * u,
                        p = i * a + c * o * u,
                        y = -c * a + i * o * u,
                        m = -o,
                        E = c * r,
                        _ = i * r;
                    return n(t)
                        ? ((t[0] = l),
                          (t[1] = d),
                          (t[2] = m),
                          (t[3] = f),
                          (t[4] = p),
                          (t[5] = E),
                          (t[6] = h),
                          (t[7] = y),
                          (t[8] = _),
                          t)
                        : new s(l, f, h, d, p, y, m, E, _);
                }),
                (s.fromScale = function(e, t) {
                    return n(t)
                        ? ((t[0] = e.x),
                          (t[1] = 0),
                          (t[2] = 0),
                          (t[3] = 0),
                          (t[4] = e.y),
                          (t[5] = 0),
                          (t[6] = 0),
                          (t[7] = 0),
                          (t[8] = e.z),
                          t)
                        : new s(e.x, 0, 0, 0, e.y, 0, 0, 0, e.z);
                }),
                (s.fromUniformScale = function(e, t) {
                    return n(t)
                        ? ((t[0] = e),
                          (t[1] = 0),
                          (t[2] = 0),
                          (t[3] = 0),
                          (t[4] = e),
                          (t[5] = 0),
                          (t[6] = 0),
                          (t[7] = 0),
                          (t[8] = e),
                          t)
                        : new s(e, 0, 0, 0, e, 0, 0, 0, e);
                }),
                (s.fromCrossProduct = function(e, t) {
                    return n(t)
                        ? ((t[0] = 0),
                          (t[1] = e.z),
                          (t[2] = -e.y),
                          (t[3] = -e.z),
                          (t[4] = 0),
                          (t[5] = e.x),
                          (t[6] = e.y),
                          (t[7] = -e.x),
                          (t[8] = 0),
                          t)
                        : new s(0, -e.z, e.y, e.z, 0, -e.x, -e.y, e.x, 0);
                }),
                (s.fromRotationX = function(e, t) {
                    var r = Math.cos(e),
                        a = Math.sin(e);
                    return n(t)
                        ? ((t[0] = 1),
                          (t[1] = 0),
                          (t[2] = 0),
                          (t[3] = 0),
                          (t[4] = r),
                          (t[5] = a),
                          (t[6] = 0),
                          (t[7] = -a),
                          (t[8] = r),
                          t)
                        : new s(1, 0, 0, 0, r, -a, 0, a, r);
                }),
                (s.fromRotationY = function(e, t) {
                    var r = Math.cos(e),
                        a = Math.sin(e);
                    return n(t)
                        ? ((t[0] = r),
                          (t[1] = 0),
                          (t[2] = -a),
                          (t[3] = 0),
                          (t[4] = 1),
                          (t[5] = 0),
                          (t[6] = a),
                          (t[7] = 0),
                          (t[8] = r),
                          t)
                        : new s(r, 0, a, 0, 1, 0, -a, 0, r);
                }),
                (s.fromRotationZ = function(e, t) {
                    var r = Math.cos(e),
                        a = Math.sin(e);
                    return n(t)
                        ? ((t[0] = r),
                          (t[1] = a),
                          (t[2] = 0),
                          (t[3] = -a),
                          (t[4] = r),
                          (t[5] = 0),
                          (t[6] = 0),
                          (t[7] = 0),
                          (t[8] = 1),
                          t)
                        : new s(r, -a, 0, a, r, 0, 0, 0, 1);
                }),
                (s.toArray = function(e, t) {
                    return n(t)
                        ? ((t[0] = e[0]),
                          (t[1] = e[1]),
                          (t[2] = e[2]),
                          (t[3] = e[3]),
                          (t[4] = e[4]),
                          (t[5] = e[5]),
                          (t[6] = e[6]),
                          (t[7] = e[7]),
                          (t[8] = e[8]),
                          t)
                        : [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]];
                }),
                (s.getElementIndex = function(e, t) {
                    return 3 * e + t;
                }),
                (s.getColumn = function(e, t, r) {
                    var n = 3 * t,
                        a = e[n],
                        i = e[n + 1],
                        o = e[n + 2];
                    return (r.x = a), (r.y = i), (r.z = o), r;
                }),
                (s.setColumn = function(e, t, r, n) {
                    n = s.clone(e, n);
                    var a = 3 * t;
                    return (n[a] = r.x), (n[a + 1] = r.y), (n[a + 2] = r.z), n;
                }),
                (s.getRow = function(e, t, r) {
                    var n = e[t],
                        a = e[t + 3],
                        i = e[t + 6];
                    return (r.x = n), (r.y = a), (r.z = i), r;
                }),
                (s.setRow = function(e, t, r, n) {
                    return (n = s.clone(e, n)), (n[t] = r.x), (n[t + 3] = r.y), (n[t + 6] = r.z), n;
                });
            var h = new e();
            s.getScale = function(t, r) {
                return (
                    (r.x = e.magnitude(e.fromElements(t[0], t[1], t[2], h))),
                    (r.y = e.magnitude(e.fromElements(t[3], t[4], t[5], h))),
                    (r.z = e.magnitude(e.fromElements(t[6], t[7], t[8], h))),
                    r
                );
            };
            var d = new e();
            (s.getMaximumScale = function(t) {
                return s.getScale(t, d), e.maximumComponent(d);
            }),
                (s.multiply = function(e, t, r) {
                    var n = e[0] * t[0] + e[3] * t[1] + e[6] * t[2],
                        a = e[1] * t[0] + e[4] * t[1] + e[7] * t[2],
                        i = e[2] * t[0] + e[5] * t[1] + e[8] * t[2],
                        o = e[0] * t[3] + e[3] * t[4] + e[6] * t[5],
                        u = e[1] * t[3] + e[4] * t[4] + e[7] * t[5],
                        s = e[2] * t[3] + e[5] * t[4] + e[8] * t[5],
                        c = e[0] * t[6] + e[3] * t[7] + e[6] * t[8],
                        l = e[1] * t[6] + e[4] * t[7] + e[7] * t[8],
                        f = e[2] * t[6] + e[5] * t[7] + e[8] * t[8];
                    return (
                        (r[0] = n),
                        (r[1] = a),
                        (r[2] = i),
                        (r[3] = o),
                        (r[4] = u),
                        (r[5] = s),
                        (r[6] = c),
                        (r[7] = l),
                        (r[8] = f),
                        r
                    );
                }),
                (s.add = function(e, t, r) {
                    return (
                        (r[0] = e[0] + t[0]),
                        (r[1] = e[1] + t[1]),
                        (r[2] = e[2] + t[2]),
                        (r[3] = e[3] + t[3]),
                        (r[4] = e[4] + t[4]),
                        (r[5] = e[5] + t[5]),
                        (r[6] = e[6] + t[6]),
                        (r[7] = e[7] + t[7]),
                        (r[8] = e[8] + t[8]),
                        r
                    );
                }),
                (s.subtract = function(e, t, r) {
                    return (
                        (r[0] = e[0] - t[0]),
                        (r[1] = e[1] - t[1]),
                        (r[2] = e[2] - t[2]),
                        (r[3] = e[3] - t[3]),
                        (r[4] = e[4] - t[4]),
                        (r[5] = e[5] - t[5]),
                        (r[6] = e[6] - t[6]),
                        (r[7] = e[7] - t[7]),
                        (r[8] = e[8] - t[8]),
                        r
                    );
                }),
                (s.multiplyByVector = function(e, t, r) {
                    var n = t.x,
                        a = t.y,
                        i = t.z,
                        o = e[0] * n + e[3] * a + e[6] * i,
                        u = e[1] * n + e[4] * a + e[7] * i,
                        s = e[2] * n + e[5] * a + e[8] * i;
                    return (r.x = o), (r.y = u), (r.z = s), r;
                }),
                (s.multiplyByScalar = function(e, t, r) {
                    return (
                        (r[0] = e[0] * t),
                        (r[1] = e[1] * t),
                        (r[2] = e[2] * t),
                        (r[3] = e[3] * t),
                        (r[4] = e[4] * t),
                        (r[5] = e[5] * t),
                        (r[6] = e[6] * t),
                        (r[7] = e[7] * t),
                        (r[8] = e[8] * t),
                        r
                    );
                }),
                (s.multiplyByScale = function(e, t, r) {
                    return (
                        (r[0] = e[0] * t.x),
                        (r[1] = e[1] * t.x),
                        (r[2] = e[2] * t.x),
                        (r[3] = e[3] * t.y),
                        (r[4] = e[4] * t.y),
                        (r[5] = e[5] * t.y),
                        (r[6] = e[6] * t.z),
                        (r[7] = e[7] * t.z),
                        (r[8] = e[8] * t.z),
                        r
                    );
                }),
                (s.negate = function(e, t) {
                    return (
                        (t[0] = -e[0]),
                        (t[1] = -e[1]),
                        (t[2] = -e[2]),
                        (t[3] = -e[3]),
                        (t[4] = -e[4]),
                        (t[5] = -e[5]),
                        (t[6] = -e[6]),
                        (t[7] = -e[7]),
                        (t[8] = -e[8]),
                        t
                    );
                }),
                (s.transpose = function(e, t) {
                    var r = e[0],
                        n = e[3],
                        a = e[6],
                        i = e[1],
                        o = e[4],
                        u = e[7],
                        s = e[2],
                        c = e[5],
                        l = e[8];
                    return (
                        (t[0] = r),
                        (t[1] = n),
                        (t[2] = a),
                        (t[3] = i),
                        (t[4] = o),
                        (t[5] = u),
                        (t[6] = s),
                        (t[7] = c),
                        (t[8] = l),
                        t
                    );
                });
            var p = [1, 0, 0],
                y = [2, 2, 1],
                m = new s(),
                E = new s();
            return (
                (s.computeEigenDecomposition = function(e, t) {
                    var r = u.EPSILON20,
                        a = 0,
                        i = 0;
                    n(t) || (t = {});
                    for (
                        var o = (t.unitary = s.clone(s.IDENTITY, t.unitary)),
                            h = (t.diagonal = s.clone(e, t.diagonal)),
                            d = r * c(h);
                        i < 10 && l(h) > d;

                    )
                        f(h, m),
                            s.transpose(m, E),
                            s.multiply(h, m, h),
                            s.multiply(E, h, h),
                            s.multiply(o, m, o),
                            ++a > 2 && (++i, (a = 0));
                    return t;
                }),
                (s.abs = function(e, t) {
                    return (
                        (t[0] = Math.abs(e[0])),
                        (t[1] = Math.abs(e[1])),
                        (t[2] = Math.abs(e[2])),
                        (t[3] = Math.abs(e[3])),
                        (t[4] = Math.abs(e[4])),
                        (t[5] = Math.abs(e[5])),
                        (t[6] = Math.abs(e[6])),
                        (t[7] = Math.abs(e[7])),
                        (t[8] = Math.abs(e[8])),
                        t
                    );
                }),
                (s.determinant = function(e) {
                    var t = e[0],
                        r = e[3],
                        n = e[6],
                        a = e[1],
                        i = e[4],
                        o = e[7],
                        u = e[2],
                        s = e[5],
                        c = e[8];
                    return t * (i * c - s * o) + a * (s * n - r * c) + u * (r * o - i * n);
                }),
                (s.inverse = function(e, t) {
                    var r = e[0],
                        n = e[1],
                        a = e[2],
                        i = e[3],
                        o = e[4],
                        u = e[5],
                        c = e[6],
                        l = e[7],
                        f = e[8],
                        h = s.determinant(e);
                    (t[0] = o * f - l * u),
                        (t[1] = l * a - n * f),
                        (t[2] = n * u - o * a),
                        (t[3] = c * u - i * f),
                        (t[4] = r * f - c * a),
                        (t[5] = i * a - r * u),
                        (t[6] = i * l - c * o),
                        (t[7] = c * n - r * l),
                        (t[8] = r * o - i * n);
                    var d = 1 / h;
                    return s.multiplyByScalar(t, d, t);
                }),
                (s.equals = function(e, t) {
                    return (
                        e === t ||
                        (n(e) &&
                            n(t) &&
                            e[0] === t[0] &&
                            e[1] === t[1] &&
                            e[2] === t[2] &&
                            e[3] === t[3] &&
                            e[4] === t[4] &&
                            e[5] === t[5] &&
                            e[6] === t[6] &&
                            e[7] === t[7] &&
                            e[8] === t[8])
                    );
                }),
                (s.equalsEpsilon = function(e, t, r) {
                    return (
                        e === t ||
                        (n(e) &&
                            n(t) &&
                            Math.abs(e[0] - t[0]) <= r &&
                            Math.abs(e[1] - t[1]) <= r &&
                            Math.abs(e[2] - t[2]) <= r &&
                            Math.abs(e[3] - t[3]) <= r &&
                            Math.abs(e[4] - t[4]) <= r &&
                            Math.abs(e[5] - t[5]) <= r &&
                            Math.abs(e[6] - t[6]) <= r &&
                            Math.abs(e[7] - t[7]) <= r &&
                            Math.abs(e[8] - t[8]) <= r)
                    );
                }),
                (s.IDENTITY = o(new s(1, 0, 0, 0, 1, 0, 0, 0, 1))),
                (s.ZERO = o(new s(0, 0, 0, 0, 0, 0, 0, 0, 0))),
                (s.COLUMN0ROW0 = 0),
                (s.COLUMN0ROW1 = 1),
                (s.COLUMN0ROW2 = 2),
                (s.COLUMN1ROW0 = 3),
                (s.COLUMN1ROW1 = 4),
                (s.COLUMN1ROW2 = 5),
                (s.COLUMN2ROW0 = 6),
                (s.COLUMN2ROW1 = 7),
                (s.COLUMN2ROW2 = 8),
                a(s.prototype, {
                    length: {
                        get: function() {
                            return s.packedLength;
                        }
                    }
                }),
                (s.prototype.clone = function(e) {
                    return s.clone(this, e);
                }),
                (s.prototype.equals = function(e) {
                    return s.equals(this, e);
                }),
                (s.equalsArray = function(e, t, r) {
                    return (
                        e[0] === t[r] &&
                        e[1] === t[r + 1] &&
                        e[2] === t[r + 2] &&
                        e[3] === t[r + 3] &&
                        e[4] === t[r + 4] &&
                        e[5] === t[r + 5] &&
                        e[6] === t[r + 6] &&
                        e[7] === t[r + 7] &&
                        e[8] === t[r + 8]
                    );
                }),
                (s.prototype.equalsEpsilon = function(e, t) {
                    return s.equalsEpsilon(this, e, t);
                }),
                (s.prototype.toString = function() {
                    return (
                        "(" +
                        this[0] +
                        ", " +
                        this[3] +
                        ", " +
                        this[6] +
                        ")\n(" +
                        this[1] +
                        ", " +
                        this[4] +
                        ", " +
                        this[7] +
                        ")\n(" +
                        this[2] +
                        ", " +
                        this[5] +
                        ", " +
                        this[8] +
                        ")"
                    );
                }),
                s
            );
        }),
        define("Core/Cartesian4", [
            "./Check",
            "./defaultValue",
            "./defined",
            "./DeveloperError",
            "./freezeObject",
            "./Math"
        ], function(e, t, r, n, a, i) {
            "use strict";
            function o(e, r, n, a) {
                (this.x = t(e, 0)), (this.y = t(r, 0)), (this.z = t(n, 0)), (this.w = t(a, 0));
            }
            (o.fromElements = function(e, t, n, a, i) {
                return r(i) ? ((i.x = e), (i.y = t), (i.z = n), (i.w = a), i) : new o(e, t, n, a);
            }),
                (o.fromColor = function(e, t) {
                    return r(t)
                        ? ((t.x = e.red), (t.y = e.green), (t.z = e.blue), (t.w = e.alpha), t)
                        : new o(e.red, e.green, e.blue, e.alpha);
                }),
                (o.clone = function(e, t) {
                    if (r(e))
                        return r(t)
                            ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), (t.w = e.w), t)
                            : new o(e.x, e.y, e.z, e.w);
                }),
                (o.packedLength = 4),
                (o.pack = function(e, r, n) {
                    return (
                        (n = t(n, 0)),
                        (r[n++] = e.x),
                        (r[n++] = e.y),
                        (r[n++] = e.z),
                        (r[n] = e.w),
                        r
                    );
                }),
                (o.unpack = function(e, n, a) {
                    return (
                        (n = t(n, 0)),
                        r(a) || (a = new o()),
                        (a.x = e[n++]),
                        (a.y = e[n++]),
                        (a.z = e[n++]),
                        (a.w = e[n]),
                        a
                    );
                }),
                (o.packArray = function(e, t) {
                    var n = e.length;
                    r(t) ? (t.length = 4 * n) : (t = new Array(4 * n));
                    for (var a = 0; a < n; ++a) o.pack(e[a], t, 4 * a);
                    return t;
                }),
                (o.unpackArray = function(e, t) {
                    var n = e.length;
                    r(t) ? (t.length = n / 4) : (t = new Array(n / 4));
                    for (var a = 0; a < n; a += 4) {
                        var i = a / 4;
                        t[i] = o.unpack(e, a, t[i]);
                    }
                    return t;
                }),
                (o.fromArray = o.unpack),
                (o.maximumComponent = function(e) {
                    return Math.max(e.x, e.y, e.z, e.w);
                }),
                (o.minimumComponent = function(e) {
                    return Math.min(e.x, e.y, e.z, e.w);
                }),
                (o.minimumByComponent = function(e, t, r) {
                    return (
                        (r.x = Math.min(e.x, t.x)),
                        (r.y = Math.min(e.y, t.y)),
                        (r.z = Math.min(e.z, t.z)),
                        (r.w = Math.min(e.w, t.w)),
                        r
                    );
                }),
                (o.maximumByComponent = function(e, t, r) {
                    return (
                        (r.x = Math.max(e.x, t.x)),
                        (r.y = Math.max(e.y, t.y)),
                        (r.z = Math.max(e.z, t.z)),
                        (r.w = Math.max(e.w, t.w)),
                        r
                    );
                }),
                (o.magnitudeSquared = function(e) {
                    return e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w;
                }),
                (o.magnitude = function(e) {
                    return Math.sqrt(o.magnitudeSquared(e));
                });
            var u = new o();
            (o.distance = function(e, t) {
                return o.subtract(e, t, u), o.magnitude(u);
            }),
                (o.distanceSquared = function(e, t) {
                    return o.subtract(e, t, u), o.magnitudeSquared(u);
                }),
                (o.normalize = function(e, t) {
                    var r = o.magnitude(e);
                    return (t.x = e.x / r), (t.y = e.y / r), (t.z = e.z / r), (t.w = e.w / r), t;
                }),
                (o.dot = function(e, t) {
                    return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w;
                }),
                (o.multiplyComponents = function(e, t, r) {
                    return (
                        (r.x = e.x * t.x),
                        (r.y = e.y * t.y),
                        (r.z = e.z * t.z),
                        (r.w = e.w * t.w),
                        r
                    );
                }),
                (o.divideComponents = function(e, t, r) {
                    return (
                        (r.x = e.x / t.x),
                        (r.y = e.y / t.y),
                        (r.z = e.z / t.z),
                        (r.w = e.w / t.w),
                        r
                    );
                }),
                (o.add = function(e, t, r) {
                    return (
                        (r.x = e.x + t.x),
                        (r.y = e.y + t.y),
                        (r.z = e.z + t.z),
                        (r.w = e.w + t.w),
                        r
                    );
                }),
                (o.subtract = function(e, t, r) {
                    return (
                        (r.x = e.x - t.x),
                        (r.y = e.y - t.y),
                        (r.z = e.z - t.z),
                        (r.w = e.w - t.w),
                        r
                    );
                }),
                (o.multiplyByScalar = function(e, t, r) {
                    return (r.x = e.x * t), (r.y = e.y * t), (r.z = e.z * t), (r.w = e.w * t), r;
                }),
                (o.divideByScalar = function(e, t, r) {
                    return (r.x = e.x / t), (r.y = e.y / t), (r.z = e.z / t), (r.w = e.w / t), r;
                }),
                (o.negate = function(e, t) {
                    return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), (t.w = -e.w), t;
                }),
                (o.abs = function(e, t) {
                    return (
                        (t.x = Math.abs(e.x)),
                        (t.y = Math.abs(e.y)),
                        (t.z = Math.abs(e.z)),
                        (t.w = Math.abs(e.w)),
                        t
                    );
                });
            var s = new o();
            o.lerp = function(e, t, r, n) {
                return (
                    o.multiplyByScalar(t, r, s),
                    (n = o.multiplyByScalar(e, 1 - r, n)),
                    o.add(s, n, n)
                );
            };
            var c = new o();
            (o.mostOrthogonalAxis = function(e, t) {
                var r = o.normalize(e, c);
                return (
                    o.abs(r, r),
                    (t =
                        r.x <= r.y
                            ? r.x <= r.z
                                ? r.x <= r.w
                                    ? o.clone(o.UNIT_X, t)
                                    : o.clone(o.UNIT_W, t)
                                : r.z <= r.w
                                ? o.clone(o.UNIT_Z, t)
                                : o.clone(o.UNIT_W, t)
                            : r.y <= r.z
                            ? r.y <= r.w
                                ? o.clone(o.UNIT_Y, t)
                                : o.clone(o.UNIT_W, t)
                            : r.z <= r.w
                            ? o.clone(o.UNIT_Z, t)
                            : o.clone(o.UNIT_W, t))
                );
            }),
                (o.equals = function(e, t) {
                    return (
                        e === t ||
                        (r(e) && r(t) && e.x === t.x && e.y === t.y && e.z === t.z && e.w === t.w)
                    );
                }),
                (o.equalsArray = function(e, t, r) {
                    return e.x === t[r] && e.y === t[r + 1] && e.z === t[r + 2] && e.w === t[r + 3];
                }),
                (o.equalsEpsilon = function(e, t, n, a) {
                    return (
                        e === t ||
                        (r(e) &&
                            r(t) &&
                            i.equalsEpsilon(e.x, t.x, n, a) &&
                            i.equalsEpsilon(e.y, t.y, n, a) &&
                            i.equalsEpsilon(e.z, t.z, n, a) &&
                            i.equalsEpsilon(e.w, t.w, n, a))
                    );
                }),
                (o.ZERO = a(new o(0, 0, 0, 0))),
                (o.UNIT_X = a(new o(1, 0, 0, 0))),
                (o.UNIT_Y = a(new o(0, 1, 0, 0))),
                (o.UNIT_Z = a(new o(0, 0, 1, 0))),
                (o.UNIT_W = a(new o(0, 0, 0, 1))),
                (o.prototype.clone = function(e) {
                    return o.clone(this, e);
                }),
                (o.prototype.equals = function(e) {
                    return o.equals(this, e);
                }),
                (o.prototype.equalsEpsilon = function(e, t, r) {
                    return o.equalsEpsilon(this, e, t, r);
                }),
                (o.prototype.toString = function() {
                    return "(" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + ")";
                });
            var l = new Float32Array(1);
            return (
                (o.packFloat = function(e, t) {
                    if ((r(t) || (t = new o()), (l[0] = e), 0 === (e = l[0])))
                        return o.clone(o.ZERO, t);
                    var n,
                        a = e < 0 ? 1 : 0;
                    isFinite(e)
                        ? ((e = Math.abs(e)),
                          (n = Math.floor(i.logBase(e, 10)) + 1),
                          (e /= Math.pow(10, n)))
                        : ((e = 0.1), (n = 38));
                    var u = 256 * e;
                    return (
                        (t.x = Math.floor(u)),
                        (u = 256 * (u - t.x)),
                        (t.y = Math.floor(u)),
                        (u = 256 * (u - t.y)),
                        (t.z = Math.floor(u)),
                        (t.w = 2 * (n + 38) + a),
                        t
                    );
                }),
                (o.unpackFloat = function(e) {
                    var t = e.w / 2,
                        r = Math.floor(t),
                        n = 2 * (t - r);
                    if (((r -= 38), (n = 2 * n - 1), (n = -n), r >= 38))
                        return n < 0 ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
                    var a = n * e.x * (1 / 256);
                    return (
                        (a += n * e.y * (1 / 65536)),
                        (a += n * e.z * (1 / 16777216)) * Math.pow(10, r)
                    );
                }),
                o
            );
        }),
        define("Core/RuntimeError", ["./defined"], function(e) {
            "use strict";
            function t(e) {
                (this.name = "RuntimeError"), (this.message = e);
                var t;
                try {
                    throw new Error();
                } catch (e) {
                    t = e.stack;
                }
                this.stack = t;
            }
            return (
                e(Object.create) &&
                    ((t.prototype = Object.create(Error.prototype)), (t.prototype.constructor = t)),
                (t.prototype.toString = function() {
                    var t = this.name + ": " + this.message;
                    return e(this.stack) && (t += "\n" + this.stack.toString()), t;
                }),
                t
            );
        }),
        define("Core/Matrix4", [
            "./Cartesian3",
            "./Cartesian4",
            "./Check",
            "./defaultValue",
            "./defined",
            "./defineProperties",
            "./freezeObject",
            "./Math",
            "./Matrix3",
            "./RuntimeError"
        ], function(e, t, r, n, a, i, o, u, s, c) {
            "use strict";
            function l(e, t, r, a, i, o, u, s, c, l, f, h, d, p, y, m) {
                (this[0] = n(e, 0)),
                    (this[1] = n(i, 0)),
                    (this[2] = n(c, 0)),
                    (this[3] = n(d, 0)),
                    (this[4] = n(t, 0)),
                    (this[5] = n(o, 0)),
                    (this[6] = n(l, 0)),
                    (this[7] = n(p, 0)),
                    (this[8] = n(r, 0)),
                    (this[9] = n(u, 0)),
                    (this[10] = n(f, 0)),
                    (this[11] = n(y, 0)),
                    (this[12] = n(a, 0)),
                    (this[13] = n(s, 0)),
                    (this[14] = n(h, 0)),
                    (this[15] = n(m, 0));
            }
            (l.packedLength = 16),
                (l.pack = function(e, t, r) {
                    return (
                        (r = n(r, 0)),
                        (t[r++] = e[0]),
                        (t[r++] = e[1]),
                        (t[r++] = e[2]),
                        (t[r++] = e[3]),
                        (t[r++] = e[4]),
                        (t[r++] = e[5]),
                        (t[r++] = e[6]),
                        (t[r++] = e[7]),
                        (t[r++] = e[8]),
                        (t[r++] = e[9]),
                        (t[r++] = e[10]),
                        (t[r++] = e[11]),
                        (t[r++] = e[12]),
                        (t[r++] = e[13]),
                        (t[r++] = e[14]),
                        (t[r] = e[15]),
                        t
                    );
                }),
                (l.unpack = function(e, t, r) {
                    return (
                        (t = n(t, 0)),
                        a(r) || (r = new l()),
                        (r[0] = e[t++]),
                        (r[1] = e[t++]),
                        (r[2] = e[t++]),
                        (r[3] = e[t++]),
                        (r[4] = e[t++]),
                        (r[5] = e[t++]),
                        (r[6] = e[t++]),
                        (r[7] = e[t++]),
                        (r[8] = e[t++]),
                        (r[9] = e[t++]),
                        (r[10] = e[t++]),
                        (r[11] = e[t++]),
                        (r[12] = e[t++]),
                        (r[13] = e[t++]),
                        (r[14] = e[t++]),
                        (r[15] = e[t]),
                        r
                    );
                }),
                (l.clone = function(e, t) {
                    if (a(e))
                        return a(t)
                            ? ((t[0] = e[0]),
                              (t[1] = e[1]),
                              (t[2] = e[2]),
                              (t[3] = e[3]),
                              (t[4] = e[4]),
                              (t[5] = e[5]),
                              (t[6] = e[6]),
                              (t[7] = e[7]),
                              (t[8] = e[8]),
                              (t[9] = e[9]),
                              (t[10] = e[10]),
                              (t[11] = e[11]),
                              (t[12] = e[12]),
                              (t[13] = e[13]),
                              (t[14] = e[14]),
                              (t[15] = e[15]),
                              t)
                            : new l(
                                  e[0],
                                  e[4],
                                  e[8],
                                  e[12],
                                  e[1],
                                  e[5],
                                  e[9],
                                  e[13],
                                  e[2],
                                  e[6],
                                  e[10],
                                  e[14],
                                  e[3],
                                  e[7],
                                  e[11],
                                  e[15]
                              );
                }),
                (l.fromArray = l.unpack),
                (l.fromColumnMajorArray = function(e, t) {
                    return l.clone(e, t);
                }),
                (l.fromRowMajorArray = function(e, t) {
                    return a(t)
                        ? ((t[0] = e[0]),
                          (t[1] = e[4]),
                          (t[2] = e[8]),
                          (t[3] = e[12]),
                          (t[4] = e[1]),
                          (t[5] = e[5]),
                          (t[6] = e[9]),
                          (t[7] = e[13]),
                          (t[8] = e[2]),
                          (t[9] = e[6]),
                          (t[10] = e[10]),
                          (t[11] = e[14]),
                          (t[12] = e[3]),
                          (t[13] = e[7]),
                          (t[14] = e[11]),
                          (t[15] = e[15]),
                          t)
                        : new l(
                              e[0],
                              e[1],
                              e[2],
                              e[3],
                              e[4],
                              e[5],
                              e[6],
                              e[7],
                              e[8],
                              e[9],
                              e[10],
                              e[11],
                              e[12],
                              e[13],
                              e[14],
                              e[15]
                          );
                }),
                (l.fromRotationTranslation = function(t, r, i) {
                    return (
                        (r = n(r, e.ZERO)),
                        a(i)
                            ? ((i[0] = t[0]),
                              (i[1] = t[1]),
                              (i[2] = t[2]),
                              (i[3] = 0),
                              (i[4] = t[3]),
                              (i[5] = t[4]),
                              (i[6] = t[5]),
                              (i[7] = 0),
                              (i[8] = t[6]),
                              (i[9] = t[7]),
                              (i[10] = t[8]),
                              (i[11] = 0),
                              (i[12] = r.x),
                              (i[13] = r.y),
                              (i[14] = r.z),
                              (i[15] = 1),
                              i)
                            : new l(
                                  t[0],
                                  t[3],
                                  t[6],
                                  r.x,
                                  t[1],
                                  t[4],
                                  t[7],
                                  r.y,
                                  t[2],
                                  t[5],
                                  t[8],
                                  r.z,
                                  0,
                                  0,
                                  0,
                                  1
                              )
                    );
                }),
                (l.fromTranslationQuaternionRotationScale = function(e, t, r, n) {
                    a(n) || (n = new l());
                    var i = r.x,
                        o = r.y,
                        u = r.z,
                        s = t.x * t.x,
                        c = t.x * t.y,
                        f = t.x * t.z,
                        h = t.x * t.w,
                        d = t.y * t.y,
                        p = t.y * t.z,
                        y = t.y * t.w,
                        m = t.z * t.z,
                        E = t.z * t.w,
                        _ = t.w * t.w,
                        v = s - d - m + _,
                        T = 2 * (c - E),
                        R = 2 * (f + y),
                        A = 2 * (c + E),
                        g = -s + d - m + _,
                        S = 2 * (p - h),
                        w = 2 * (f - y),
                        N = 2 * (p + h),
                        O = -s - d + m + _;
                    return (
                        (n[0] = v * i),
                        (n[1] = A * i),
                        (n[2] = w * i),
                        (n[3] = 0),
                        (n[4] = T * o),
                        (n[5] = g * o),
                        (n[6] = N * o),
                        (n[7] = 0),
                        (n[8] = R * u),
                        (n[9] = S * u),
                        (n[10] = O * u),
                        (n[11] = 0),
                        (n[12] = e.x),
                        (n[13] = e.y),
                        (n[14] = e.z),
                        (n[15] = 1),
                        n
                    );
                }),
                (l.fromTranslationRotationScale = function(e, t) {
                    return l.fromTranslationQuaternionRotationScale(
                        e.translation,
                        e.rotation,
                        e.scale,
                        t
                    );
                }),
                (l.fromTranslation = function(e, t) {
                    return l.fromRotationTranslation(s.IDENTITY, e, t);
                }),
                (l.fromScale = function(e, t) {
                    return a(t)
                        ? ((t[0] = e.x),
                          (t[1] = 0),
                          (t[2] = 0),
                          (t[3] = 0),
                          (t[4] = 0),
                          (t[5] = e.y),
                          (t[6] = 0),
                          (t[7] = 0),
                          (t[8] = 0),
                          (t[9] = 0),
                          (t[10] = e.z),
                          (t[11] = 0),
                          (t[12] = 0),
                          (t[13] = 0),
                          (t[14] = 0),
                          (t[15] = 1),
                          t)
                        : new l(e.x, 0, 0, 0, 0, e.y, 0, 0, 0, 0, e.z, 0, 0, 0, 0, 1);
                }),
                (l.fromUniformScale = function(e, t) {
                    return a(t)
                        ? ((t[0] = e),
                          (t[1] = 0),
                          (t[2] = 0),
                          (t[3] = 0),
                          (t[4] = 0),
                          (t[5] = e),
                          (t[6] = 0),
                          (t[7] = 0),
                          (t[8] = 0),
                          (t[9] = 0),
                          (t[10] = e),
                          (t[11] = 0),
                          (t[12] = 0),
                          (t[13] = 0),
                          (t[14] = 0),
                          (t[15] = 1),
                          t)
                        : new l(e, 0, 0, 0, 0, e, 0, 0, 0, 0, e, 0, 0, 0, 0, 1);
                });
            var f = new e(),
                h = new e(),
                d = new e();
            (l.fromCamera = function(t, r) {
                var n = t.position,
                    i = t.direction,
                    o = t.up;
                e.normalize(i, f),
                    e.normalize(e.cross(f, o, h), h),
                    e.normalize(e.cross(h, f, d), d);
                var u = h.x,
                    s = h.y,
                    c = h.z,
                    p = f.x,
                    y = f.y,
                    m = f.z,
                    E = d.x,
                    _ = d.y,
                    v = d.z,
                    T = n.x,
                    R = n.y,
                    A = n.z,
                    g = u * -T + s * -R + c * -A,
                    S = E * -T + _ * -R + v * -A,
                    w = p * T + y * R + m * A;
                return a(r)
                    ? ((r[0] = u),
                      (r[1] = E),
                      (r[2] = -p),
                      (r[3] = 0),
                      (r[4] = s),
                      (r[5] = _),
                      (r[6] = -y),
                      (r[7] = 0),
                      (r[8] = c),
                      (r[9] = v),
                      (r[10] = -m),
                      (r[11] = 0),
                      (r[12] = g),
                      (r[13] = S),
                      (r[14] = w),
                      (r[15] = 1),
                      r)
                    : new l(u, s, c, g, E, _, v, S, -p, -y, -m, w, 0, 0, 0, 1);
            }),
                (l.computePerspectiveFieldOfView = function(e, t, r, n, a) {
                    var i = Math.tan(0.5 * e),
                        o = 1 / i,
                        u = o / t,
                        s = (n + r) / (r - n),
                        c = (2 * n * r) / (r - n);
                    return (
                        (a[0] = u),
                        (a[1] = 0),
                        (a[2] = 0),
                        (a[3] = 0),
                        (a[4] = 0),
                        (a[5] = o),
                        (a[6] = 0),
                        (a[7] = 0),
                        (a[8] = 0),
                        (a[9] = 0),
                        (a[10] = s),
                        (a[11] = -1),
                        (a[12] = 0),
                        (a[13] = 0),
                        (a[14] = c),
                        (a[15] = 0),
                        a
                    );
                }),
                (l.computeOrthographicOffCenter = function(e, t, r, n, a, i, o) {
                    var u = 1 / (t - e),
                        s = 1 / (n - r),
                        c = 1 / (i - a),
                        l = -(t + e) * u,
                        f = -(n + r) * s,
                        h = -(i + a) * c;
                    return (
                        (u *= 2),
                        (s *= 2),
                        (c *= -2),
                        (o[0] = u),
                        (o[1] = 0),
                        (o[2] = 0),
                        (o[3] = 0),
                        (o[4] = 0),
                        (o[5] = s),
                        (o[6] = 0),
                        (o[7] = 0),
                        (o[8] = 0),
                        (o[9] = 0),
                        (o[10] = c),
                        (o[11] = 0),
                        (o[12] = l),
                        (o[13] = f),
                        (o[14] = h),
                        (o[15] = 1),
                        o
                    );
                }),
                (l.computePerspectiveOffCenter = function(e, t, r, n, a, i, o) {
                    var u = (2 * a) / (t - e),
                        s = (2 * a) / (n - r),
                        c = (t + e) / (t - e),
                        l = (n + r) / (n - r),
                        f = -(i + a) / (i - a),
                        h = (-2 * i * a) / (i - a);
                    return (
                        (o[0] = u),
                        (o[1] = 0),
                        (o[2] = 0),
                        (o[3] = 0),
                        (o[4] = 0),
                        (o[5] = s),
                        (o[6] = 0),
                        (o[7] = 0),
                        (o[8] = c),
                        (o[9] = l),
                        (o[10] = f),
                        (o[11] = -1),
                        (o[12] = 0),
                        (o[13] = 0),
                        (o[14] = h),
                        (o[15] = 0),
                        o
                    );
                }),
                (l.computeInfinitePerspectiveOffCenter = function(e, t, r, n, a, i) {
                    var o = (2 * a) / (t - e),
                        u = (2 * a) / (n - r),
                        s = (t + e) / (t - e),
                        c = (n + r) / (n - r),
                        l = -2 * a;
                    return (
                        (i[0] = o),
                        (i[1] = 0),
                        (i[2] = 0),
                        (i[3] = 0),
                        (i[4] = 0),
                        (i[5] = u),
                        (i[6] = 0),
                        (i[7] = 0),
                        (i[8] = s),
                        (i[9] = c),
                        (i[10] = -1),
                        (i[11] = -1),
                        (i[12] = 0),
                        (i[13] = 0),
                        (i[14] = l),
                        (i[15] = 0),
                        i
                    );
                }),
                (l.computeViewportTransformation = function(e, t, r, a) {
                    e = n(e, n.EMPTY_OBJECT);
                    var i = n(e.x, 0),
                        o = n(e.y, 0),
                        u = n(e.width, 0),
                        s = n(e.height, 0);
                    (t = n(t, 0)), (r = n(r, 1));
                    var c = 0.5 * u,
                        l = 0.5 * s,
                        f = 0.5 * (r - t),
                        h = c,
                        d = l,
                        p = f,
                        y = i + c,
                        m = o + l,
                        E = t + f;
                    return (
                        (a[0] = h),
                        (a[1] = 0),
                        (a[2] = 0),
                        (a[3] = 0),
                        (a[4] = 0),
                        (a[5] = d),
                        (a[6] = 0),
                        (a[7] = 0),
                        (a[8] = 0),
                        (a[9] = 0),
                        (a[10] = p),
                        (a[11] = 0),
                        (a[12] = y),
                        (a[13] = m),
                        (a[14] = E),
                        (a[15] = 1),
                        a
                    );
                }),
                (l.computeView = function(t, r, n, a, i) {
                    return (
                        (i[0] = a.x),
                        (i[1] = n.x),
                        (i[2] = -r.x),
                        (i[3] = 0),
                        (i[4] = a.y),
                        (i[5] = n.y),
                        (i[6] = -r.y),
                        (i[7] = 0),
                        (i[8] = a.z),
                        (i[9] = n.z),
                        (i[10] = -r.z),
                        (i[11] = 0),
                        (i[12] = -e.dot(a, t)),
                        (i[13] = -e.dot(n, t)),
                        (i[14] = e.dot(r, t)),
                        (i[15] = 1),
                        i
                    );
                }),
                (l.toArray = function(e, t) {
                    return a(t)
                        ? ((t[0] = e[0]),
                          (t[1] = e[1]),
                          (t[2] = e[2]),
                          (t[3] = e[3]),
                          (t[4] = e[4]),
                          (t[5] = e[5]),
                          (t[6] = e[6]),
                          (t[7] = e[7]),
                          (t[8] = e[8]),
                          (t[9] = e[9]),
                          (t[10] = e[10]),
                          (t[11] = e[11]),
                          (t[12] = e[12]),
                          (t[13] = e[13]),
                          (t[14] = e[14]),
                          (t[15] = e[15]),
                          t)
                        : [
                              e[0],
                              e[1],
                              e[2],
                              e[3],
                              e[4],
                              e[5],
                              e[6],
                              e[7],
                              e[8],
                              e[9],
                              e[10],
                              e[11],
                              e[12],
                              e[13],
                              e[14],
                              e[15]
                          ];
                }),
                (l.getElementIndex = function(e, t) {
                    return 4 * e + t;
                }),
                (l.getColumn = function(e, t, r) {
                    var n = 4 * t,
                        a = e[n],
                        i = e[n + 1],
                        o = e[n + 2],
                        u = e[n + 3];
                    return (r.x = a), (r.y = i), (r.z = o), (r.w = u), r;
                }),
                (l.setColumn = function(e, t, r, n) {
                    n = l.clone(e, n);
                    var a = 4 * t;
                    return (n[a] = r.x), (n[a + 1] = r.y), (n[a + 2] = r.z), (n[a + 3] = r.w), n;
                }),
                (l.setTranslation = function(e, t, r) {
                    return (
                        (r[0] = e[0]),
                        (r[1] = e[1]),
                        (r[2] = e[2]),
                        (r[3] = e[3]),
                        (r[4] = e[4]),
                        (r[5] = e[5]),
                        (r[6] = e[6]),
                        (r[7] = e[7]),
                        (r[8] = e[8]),
                        (r[9] = e[9]),
                        (r[10] = e[10]),
                        (r[11] = e[11]),
                        (r[12] = t.x),
                        (r[13] = t.y),
                        (r[14] = t.z),
                        (r[15] = e[15]),
                        r
                    );
                });
            var p = new e();
            (l.setScale = function(t, r, n) {
                var a = l.getScale(t, p),
                    i = e.divideComponents(r, a, p);
                return l.multiplyByScale(t, i, n);
            }),
                (l.getRow = function(e, t, r) {
                    var n = e[t],
                        a = e[t + 4],
                        i = e[t + 8],
                        o = e[t + 12];
                    return (r.x = n), (r.y = a), (r.z = i), (r.w = o), r;
                }),
                (l.setRow = function(e, t, r, n) {
                    return (
                        (n = l.clone(e, n)),
                        (n[t] = r.x),
                        (n[t + 4] = r.y),
                        (n[t + 8] = r.z),
                        (n[t + 12] = r.w),
                        n
                    );
                });
            var y = new e();
            l.getScale = function(t, r) {
                return (
                    (r.x = e.magnitude(e.fromElements(t[0], t[1], t[2], y))),
                    (r.y = e.magnitude(e.fromElements(t[4], t[5], t[6], y))),
                    (r.z = e.magnitude(e.fromElements(t[8], t[9], t[10], y))),
                    r
                );
            };
            var m = new e();
            (l.getMaximumScale = function(t) {
                return l.getScale(t, m), e.maximumComponent(m);
            }),
                (l.multiply = function(e, t, r) {
                    var n = e[0],
                        a = e[1],
                        i = e[2],
                        o = e[3],
                        u = e[4],
                        s = e[5],
                        c = e[6],
                        l = e[7],
                        f = e[8],
                        h = e[9],
                        d = e[10],
                        p = e[11],
                        y = e[12],
                        m = e[13],
                        E = e[14],
                        _ = e[15],
                        v = t[0],
                        T = t[1],
                        R = t[2],
                        A = t[3],
                        g = t[4],
                        S = t[5],
                        w = t[6],
                        N = t[7],
                        O = t[8],
                        I = t[9],
                        x = t[10],
                        M = t[11],
                        C = t[12],
                        P = t[13],
                        b = t[14],
                        U = t[15],
                        D = n * v + u * T + f * R + y * A,
                        L = a * v + s * T + h * R + m * A,
                        F = i * v + c * T + d * R + E * A,
                        B = o * v + l * T + p * R + _ * A,
                        z = n * g + u * S + f * w + y * N,
                        q = a * g + s * S + h * w + m * N,
                        G = i * g + c * S + d * w + E * N,
                        V = o * g + l * S + p * w + _ * N,
                        X = n * O + u * I + f * x + y * M,
                        W = a * O + s * I + h * x + m * M,
                        H = i * O + c * I + d * x + E * M,
                        Y = o * O + l * I + p * x + _ * M,
                        k = n * C + u * P + f * b + y * U,
                        Z = a * C + s * P + h * b + m * U,
                        j = i * C + c * P + d * b + E * U,
                        K = o * C + l * P + p * b + _ * U;
                    return (
                        (r[0] = D),
                        (r[1] = L),
                        (r[2] = F),
                        (r[3] = B),
                        (r[4] = z),
                        (r[5] = q),
                        (r[6] = G),
                        (r[7] = V),
                        (r[8] = X),
                        (r[9] = W),
                        (r[10] = H),
                        (r[11] = Y),
                        (r[12] = k),
                        (r[13] = Z),
                        (r[14] = j),
                        (r[15] = K),
                        r
                    );
                }),
                (l.add = function(e, t, r) {
                    return (
                        (r[0] = e[0] + t[0]),
                        (r[1] = e[1] + t[1]),
                        (r[2] = e[2] + t[2]),
                        (r[3] = e[3] + t[3]),
                        (r[4] = e[4] + t[4]),
                        (r[5] = e[5] + t[5]),
                        (r[6] = e[6] + t[6]),
                        (r[7] = e[7] + t[7]),
                        (r[8] = e[8] + t[8]),
                        (r[9] = e[9] + t[9]),
                        (r[10] = e[10] + t[10]),
                        (r[11] = e[11] + t[11]),
                        (r[12] = e[12] + t[12]),
                        (r[13] = e[13] + t[13]),
                        (r[14] = e[14] + t[14]),
                        (r[15] = e[15] + t[15]),
                        r
                    );
                }),
                (l.subtract = function(e, t, r) {
                    return (
                        (r[0] = e[0] - t[0]),
                        (r[1] = e[1] - t[1]),
                        (r[2] = e[2] - t[2]),
                        (r[3] = e[3] - t[3]),
                        (r[4] = e[4] - t[4]),
                        (r[5] = e[5] - t[5]),
                        (r[6] = e[6] - t[6]),
                        (r[7] = e[7] - t[7]),
                        (r[8] = e[8] - t[8]),
                        (r[9] = e[9] - t[9]),
                        (r[10] = e[10] - t[10]),
                        (r[11] = e[11] - t[11]),
                        (r[12] = e[12] - t[12]),
                        (r[13] = e[13] - t[13]),
                        (r[14] = e[14] - t[14]),
                        (r[15] = e[15] - t[15]),
                        r
                    );
                }),
                (l.multiplyTransformation = function(e, t, r) {
                    var n = e[0],
                        a = e[1],
                        i = e[2],
                        o = e[4],
                        u = e[5],
                        s = e[6],
                        c = e[8],
                        l = e[9],
                        f = e[10],
                        h = e[12],
                        d = e[13],
                        p = e[14],
                        y = t[0],
                        m = t[1],
                        E = t[2],
                        _ = t[4],
                        v = t[5],
                        T = t[6],
                        R = t[8],
                        A = t[9],
                        g = t[10],
                        S = t[12],
                        w = t[13],
                        N = t[14],
                        O = n * y + o * m + c * E,
                        I = a * y + u * m + l * E,
                        x = i * y + s * m + f * E,
                        M = n * _ + o * v + c * T,
                        C = a * _ + u * v + l * T,
                        P = i * _ + s * v + f * T,
                        b = n * R + o * A + c * g,
                        U = a * R + u * A + l * g,
                        D = i * R + s * A + f * g,
                        L = n * S + o * w + c * N + h,
                        F = a * S + u * w + l * N + d,
                        B = i * S + s * w + f * N + p;
                    return (
                        (r[0] = O),
                        (r[1] = I),
                        (r[2] = x),
                        (r[3] = 0),
                        (r[4] = M),
                        (r[5] = C),
                        (r[6] = P),
                        (r[7] = 0),
                        (r[8] = b),
                        (r[9] = U),
                        (r[10] = D),
                        (r[11] = 0),
                        (r[12] = L),
                        (r[13] = F),
                        (r[14] = B),
                        (r[15] = 1),
                        r
                    );
                }),
                (l.multiplyByMatrix3 = function(e, t, r) {
                    var n = e[0],
                        a = e[1],
                        i = e[2],
                        o = e[4],
                        u = e[5],
                        s = e[6],
                        c = e[8],
                        l = e[9],
                        f = e[10],
                        h = t[0],
                        d = t[1],
                        p = t[2],
                        y = t[3],
                        m = t[4],
                        E = t[5],
                        _ = t[6],
                        v = t[7],
                        T = t[8],
                        R = n * h + o * d + c * p,
                        A = a * h + u * d + l * p,
                        g = i * h + s * d + f * p,
                        S = n * y + o * m + c * E,
                        w = a * y + u * m + l * E,
                        N = i * y + s * m + f * E,
                        O = n * _ + o * v + c * T,
                        I = a * _ + u * v + l * T,
                        x = i * _ + s * v + f * T;
                    return (
                        (r[0] = R),
                        (r[1] = A),
                        (r[2] = g),
                        (r[3] = 0),
                        (r[4] = S),
                        (r[5] = w),
                        (r[6] = N),
                        (r[7] = 0),
                        (r[8] = O),
                        (r[9] = I),
                        (r[10] = x),
                        (r[11] = 0),
                        (r[12] = e[12]),
                        (r[13] = e[13]),
                        (r[14] = e[14]),
                        (r[15] = e[15]),
                        r
                    );
                }),
                (l.multiplyByTranslation = function(e, t, r) {
                    var n = t.x,
                        a = t.y,
                        i = t.z,
                        o = n * e[0] + a * e[4] + i * e[8] + e[12],
                        u = n * e[1] + a * e[5] + i * e[9] + e[13],
                        s = n * e[2] + a * e[6] + i * e[10] + e[14];
                    return (
                        (r[0] = e[0]),
                        (r[1] = e[1]),
                        (r[2] = e[2]),
                        (r[3] = e[3]),
                        (r[4] = e[4]),
                        (r[5] = e[5]),
                        (r[6] = e[6]),
                        (r[7] = e[7]),
                        (r[8] = e[8]),
                        (r[9] = e[9]),
                        (r[10] = e[10]),
                        (r[11] = e[11]),
                        (r[12] = o),
                        (r[13] = u),
                        (r[14] = s),
                        (r[15] = e[15]),
                        r
                    );
                });
            var E = new e();
            (l.multiplyByUniformScale = function(e, t, r) {
                return (E.x = t), (E.y = t), (E.z = t), l.multiplyByScale(e, E, r);
            }),
                (l.multiplyByScale = function(e, t, r) {
                    var n = t.x,
                        a = t.y,
                        i = t.z;
                    return 1 === n && 1 === a && 1 === i
                        ? l.clone(e, r)
                        : ((r[0] = n * e[0]),
                          (r[1] = n * e[1]),
                          (r[2] = n * e[2]),
                          (r[3] = 0),
                          (r[4] = a * e[4]),
                          (r[5] = a * e[5]),
                          (r[6] = a * e[6]),
                          (r[7] = 0),
                          (r[8] = i * e[8]),
                          (r[9] = i * e[9]),
                          (r[10] = i * e[10]),
                          (r[11] = 0),
                          (r[12] = e[12]),
                          (r[13] = e[13]),
                          (r[14] = e[14]),
                          (r[15] = 1),
                          r);
                }),
                (l.multiplyByVector = function(e, t, r) {
                    var n = t.x,
                        a = t.y,
                        i = t.z,
                        o = t.w,
                        u = e[0] * n + e[4] * a + e[8] * i + e[12] * o,
                        s = e[1] * n + e[5] * a + e[9] * i + e[13] * o,
                        c = e[2] * n + e[6] * a + e[10] * i + e[14] * o,
                        l = e[3] * n + e[7] * a + e[11] * i + e[15] * o;
                    return (r.x = u), (r.y = s), (r.z = c), (r.w = l), r;
                }),
                (l.multiplyByPointAsVector = function(e, t, r) {
                    var n = t.x,
                        a = t.y,
                        i = t.z,
                        o = e[0] * n + e[4] * a + e[8] * i,
                        u = e[1] * n + e[5] * a + e[9] * i,
                        s = e[2] * n + e[6] * a + e[10] * i;
                    return (r.x = o), (r.y = u), (r.z = s), r;
                }),
                (l.multiplyByPoint = function(e, t, r) {
                    var n = t.x,
                        a = t.y,
                        i = t.z,
                        o = e[0] * n + e[4] * a + e[8] * i + e[12],
                        u = e[1] * n + e[5] * a + e[9] * i + e[13],
                        s = e[2] * n + e[6] * a + e[10] * i + e[14];
                    return (r.x = o), (r.y = u), (r.z = s), r;
                }),
                (l.multiplyByScalar = function(e, t, r) {
                    return (
                        (r[0] = e[0] * t),
                        (r[1] = e[1] * t),
                        (r[2] = e[2] * t),
                        (r[3] = e[3] * t),
                        (r[4] = e[4] * t),
                        (r[5] = e[5] * t),
                        (r[6] = e[6] * t),
                        (r[7] = e[7] * t),
                        (r[8] = e[8] * t),
                        (r[9] = e[9] * t),
                        (r[10] = e[10] * t),
                        (r[11] = e[11] * t),
                        (r[12] = e[12] * t),
                        (r[13] = e[13] * t),
                        (r[14] = e[14] * t),
                        (r[15] = e[15] * t),
                        r
                    );
                }),
                (l.negate = function(e, t) {
                    return (
                        (t[0] = -e[0]),
                        (t[1] = -e[1]),
                        (t[2] = -e[2]),
                        (t[3] = -e[3]),
                        (t[4] = -e[4]),
                        (t[5] = -e[5]),
                        (t[6] = -e[6]),
                        (t[7] = -e[7]),
                        (t[8] = -e[8]),
                        (t[9] = -e[9]),
                        (t[10] = -e[10]),
                        (t[11] = -e[11]),
                        (t[12] = -e[12]),
                        (t[13] = -e[13]),
                        (t[14] = -e[14]),
                        (t[15] = -e[15]),
                        t
                    );
                }),
                (l.transpose = function(e, t) {
                    var r = e[1],
                        n = e[2],
                        a = e[3],
                        i = e[6],
                        o = e[7],
                        u = e[11];
                    return (
                        (t[0] = e[0]),
                        (t[1] = e[4]),
                        (t[2] = e[8]),
                        (t[3] = e[12]),
                        (t[4] = r),
                        (t[5] = e[5]),
                        (t[6] = e[9]),
                        (t[7] = e[13]),
                        (t[8] = n),
                        (t[9] = i),
                        (t[10] = e[10]),
                        (t[11] = e[14]),
                        (t[12] = a),
                        (t[13] = o),
                        (t[14] = u),
                        (t[15] = e[15]),
                        t
                    );
                }),
                (l.abs = function(e, t) {
                    return (
                        (t[0] = Math.abs(e[0])),
                        (t[1] = Math.abs(e[1])),
                        (t[2] = Math.abs(e[2])),
                        (t[3] = Math.abs(e[3])),
                        (t[4] = Math.abs(e[4])),
                        (t[5] = Math.abs(e[5])),
                        (t[6] = Math.abs(e[6])),
                        (t[7] = Math.abs(e[7])),
                        (t[8] = Math.abs(e[8])),
                        (t[9] = Math.abs(e[9])),
                        (t[10] = Math.abs(e[10])),
                        (t[11] = Math.abs(e[11])),
                        (t[12] = Math.abs(e[12])),
                        (t[13] = Math.abs(e[13])),
                        (t[14] = Math.abs(e[14])),
                        (t[15] = Math.abs(e[15])),
                        t
                    );
                }),
                (l.equals = function(e, t) {
                    return (
                        e === t ||
                        (a(e) &&
                            a(t) &&
                            e[12] === t[12] &&
                            e[13] === t[13] &&
                            e[14] === t[14] &&
                            e[0] === t[0] &&
                            e[1] === t[1] &&
                            e[2] === t[2] &&
                            e[4] === t[4] &&
                            e[5] === t[5] &&
                            e[6] === t[6] &&
                            e[8] === t[8] &&
                            e[9] === t[9] &&
                            e[10] === t[10] &&
                            e[3] === t[3] &&
                            e[7] === t[7] &&
                            e[11] === t[11] &&
                            e[15] === t[15])
                    );
                }),
                (l.equalsEpsilon = function(e, t, r) {
                    return (
                        e === t ||
                        (a(e) &&
                            a(t) &&
                            Math.abs(e[0] - t[0]) <= r &&
                            Math.abs(e[1] - t[1]) <= r &&
                            Math.abs(e[2] - t[2]) <= r &&
                            Math.abs(e[3] - t[3]) <= r &&
                            Math.abs(e[4] - t[4]) <= r &&
                            Math.abs(e[5] - t[5]) <= r &&
                            Math.abs(e[6] - t[6]) <= r &&
                            Math.abs(e[7] - t[7]) <= r &&
                            Math.abs(e[8] - t[8]) <= r &&
                            Math.abs(e[9] - t[9]) <= r &&
                            Math.abs(e[10] - t[10]) <= r &&
                            Math.abs(e[11] - t[11]) <= r &&
                            Math.abs(e[12] - t[12]) <= r &&
                            Math.abs(e[13] - t[13]) <= r &&
                            Math.abs(e[14] - t[14]) <= r &&
                            Math.abs(e[15] - t[15]) <= r)
                    );
                }),
                (l.getTranslation = function(e, t) {
                    return (t.x = e[12]), (t.y = e[13]), (t.z = e[14]), t;
                }),
                (l.getRotation = function(e, t) {
                    return (
                        (t[0] = e[0]),
                        (t[1] = e[1]),
                        (t[2] = e[2]),
                        (t[3] = e[4]),
                        (t[4] = e[5]),
                        (t[5] = e[6]),
                        (t[6] = e[8]),
                        (t[7] = e[9]),
                        (t[8] = e[10]),
                        t
                    );
                });
            var _ = new s(),
                v = new s(),
                T = new t(),
                R = new t(0, 0, 0, 1);
            return (
                (l.inverse = function(e, r) {
                    var n = e[0],
                        a = e[4],
                        i = e[8],
                        o = e[12],
                        f = e[1],
                        h = e[5],
                        d = e[9],
                        p = e[13],
                        y = e[2],
                        m = e[6],
                        E = e[10],
                        A = e[14],
                        g = e[3],
                        S = e[7],
                        w = e[11],
                        N = e[15],
                        O = E * N,
                        I = A * w,
                        x = m * N,
                        M = A * S,
                        C = m * w,
                        P = E * S,
                        b = y * N,
                        U = A * g,
                        D = y * w,
                        L = E * g,
                        F = y * S,
                        B = m * g,
                        z = O * h + M * d + C * p - (I * h + x * d + P * p),
                        q = I * f + b * d + L * p - (O * f + U * d + D * p),
                        G = x * f + U * h + F * p - (M * f + b * h + B * p),
                        V = P * f + D * h + B * d - (C * f + L * h + F * d),
                        X = I * a + x * i + P * o - (O * a + M * i + C * o),
                        W = O * n + U * i + D * o - (I * n + b * i + L * o),
                        H = M * n + b * a + B * o - (x * n + U * a + F * o),
                        Y = C * n + L * a + F * i - (P * n + D * a + B * i);
                    (O = i * p),
                        (I = o * d),
                        (x = a * p),
                        (M = o * h),
                        (C = a * d),
                        (P = i * h),
                        (b = n * p),
                        (U = o * f),
                        (D = n * d),
                        (L = i * f),
                        (F = n * h),
                        (B = a * f);
                    var k = O * S + M * w + C * N - (I * S + x * w + P * N),
                        Z = I * g + b * w + L * N - (O * g + U * w + D * N),
                        j = x * g + U * S + F * N - (M * g + b * S + B * N),
                        K = P * g + D * S + B * w - (C * g + L * S + F * w),
                        J = x * E + P * A + I * m - (C * A + O * m + M * E),
                        Q = D * A + O * y + U * E - (b * E + L * A + I * y),
                        $ = b * m + B * A + M * y - (F * A + x * y + U * m),
                        ee = F * E + C * y + L * m - (D * m + B * E + P * y),
                        te = n * z + a * q + i * G + o * V;
                    if (Math.abs(te) < u.EPSILON21) {
                        if (
                            s.equalsEpsilon(l.getRotation(e, _), v, u.EPSILON7) &&
                            t.equals(l.getRow(e, 3, T), R)
                        )
                            return (
                                (r[0] = 0),
                                (r[1] = 0),
                                (r[2] = 0),
                                (r[3] = 0),
                                (r[4] = 0),
                                (r[5] = 0),
                                (r[6] = 0),
                                (r[7] = 0),
                                (r[8] = 0),
                                (r[9] = 0),
                                (r[10] = 0),
                                (r[11] = 0),
                                (r[12] = -e[12]),
                                (r[13] = -e[13]),
                                (r[14] = -e[14]),
                                (r[15] = 1),
                                r
                            );
                        throw new c("matrix is not invertible because its determinate is zero.");
                    }
                    return (
                        (te = 1 / te),
                        (r[0] = z * te),
                        (r[1] = q * te),
                        (r[2] = G * te),
                        (r[3] = V * te),
                        (r[4] = X * te),
                        (r[5] = W * te),
                        (r[6] = H * te),
                        (r[7] = Y * te),
                        (r[8] = k * te),
                        (r[9] = Z * te),
                        (r[10] = j * te),
                        (r[11] = K * te),
                        (r[12] = J * te),
                        (r[13] = Q * te),
                        (r[14] = $ * te),
                        (r[15] = ee * te),
                        r
                    );
                }),
                (l.inverseTransformation = function(e, t) {
                    var r = e[0],
                        n = e[1],
                        a = e[2],
                        i = e[4],
                        o = e[5],
                        u = e[6],
                        s = e[8],
                        c = e[9],
                        l = e[10],
                        f = e[12],
                        h = e[13],
                        d = e[14],
                        p = -r * f - n * h - a * d,
                        y = -i * f - o * h - u * d,
                        m = -s * f - c * h - l * d;
                    return (
                        (t[0] = r),
                        (t[1] = i),
                        (t[2] = s),
                        (t[3] = 0),
                        (t[4] = n),
                        (t[5] = o),
                        (t[6] = c),
                        (t[7] = 0),
                        (t[8] = a),
                        (t[9] = u),
                        (t[10] = l),
                        (t[11] = 0),
                        (t[12] = p),
                        (t[13] = y),
                        (t[14] = m),
                        (t[15] = 1),
                        t
                    );
                }),
                (l.IDENTITY = o(new l(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1))),
                (l.ZERO = o(new l(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0))),
                (l.COLUMN0ROW0 = 0),
                (l.COLUMN0ROW1 = 1),
                (l.COLUMN0ROW2 = 2),
                (l.COLUMN0ROW3 = 3),
                (l.COLUMN1ROW0 = 4),
                (l.COLUMN1ROW1 = 5),
                (l.COLUMN1ROW2 = 6),
                (l.COLUMN1ROW3 = 7),
                (l.COLUMN2ROW0 = 8),
                (l.COLUMN2ROW1 = 9),
                (l.COLUMN2ROW2 = 10),
                (l.COLUMN2ROW3 = 11),
                (l.COLUMN3ROW0 = 12),
                (l.COLUMN3ROW1 = 13),
                (l.COLUMN3ROW2 = 14),
                (l.COLUMN3ROW3 = 15),
                i(l.prototype, {
                    length: {
                        get: function() {
                            return l.packedLength;
                        }
                    }
                }),
                (l.prototype.clone = function(e) {
                    return l.clone(this, e);
                }),
                (l.prototype.equals = function(e) {
                    return l.equals(this, e);
                }),
                (l.equalsArray = function(e, t, r) {
                    return (
                        e[0] === t[r] &&
                        e[1] === t[r + 1] &&
                        e[2] === t[r + 2] &&
                        e[3] === t[r + 3] &&
                        e[4] === t[r + 4] &&
                        e[5] === t[r + 5] &&
                        e[6] === t[r + 6] &&
                        e[7] === t[r + 7] &&
                        e[8] === t[r + 8] &&
                        e[9] === t[r + 9] &&
                        e[10] === t[r + 10] &&
                        e[11] === t[r + 11] &&
                        e[12] === t[r + 12] &&
                        e[13] === t[r + 13] &&
                        e[14] === t[r + 14] &&
                        e[15] === t[r + 15]
                    );
                }),
                (l.prototype.equalsEpsilon = function(e, t) {
                    return l.equalsEpsilon(this, e, t);
                }),
                (l.prototype.toString = function() {
                    return (
                        "(" +
                        this[0] +
                        ", " +
                        this[4] +
                        ", " +
                        this[8] +
                        ", " +
                        this[12] +
                        ")\n(" +
                        this[1] +
                        ", " +
                        this[5] +
                        ", " +
                        this[9] +
                        ", " +
                        this[13] +
                        ")\n(" +
                        this[2] +
                        ", " +
                        this[6] +
                        ", " +
                        this[10] +
                        ", " +
                        this[14] +
                        ")\n(" +
                        this[3] +
                        ", " +
                        this[7] +
                        ", " +
                        this[11] +
                        ", " +
                        this[15] +
                        ")"
                    );
                }),
                l
            );
        }),
        define("Core/BoundingSphere", [
            "./Cartesian3",
            "./Cartographic",
            "./Check",
            "./defaultValue",
            "./defined",
            "./Ellipsoid",
            "./GeographicProjection",
            "./Intersect",
            "./Interval",
            "./Math",
            "./Matrix3",
            "./Matrix4",
            "./Rectangle"
        ], function(e, t, r, n, a, i, o, u, s, c, l, f, h) {
            "use strict";
            function d(t, r) {
                (this.center = e.clone(n(t, e.ZERO))), (this.radius = n(r, 0));
            }
            var p = new e(),
                y = new e(),
                m = new e(),
                E = new e(),
                _ = new e(),
                v = new e(),
                T = new e(),
                R = new e(),
                A = new e(),
                g = new e(),
                S = new e(),
                w = new e(),
                N = (4 / 3) * c.PI;
            d.fromPoints = function(t, r) {
                if ((a(r) || (r = new d()), !a(t) || 0 === t.length))
                    return (r.center = e.clone(e.ZERO, r.center)), (r.radius = 0), r;
                var n,
                    i = e.clone(t[0], T),
                    o = e.clone(i, p),
                    u = e.clone(i, y),
                    s = e.clone(i, m),
                    c = e.clone(i, E),
                    l = e.clone(i, _),
                    f = e.clone(i, v),
                    h = t.length;
                for (n = 1; n < h; n++) {
                    e.clone(t[n], i);
                    var N = i.x,
                        O = i.y,
                        I = i.z;
                    N < o.x && e.clone(i, o),
                        N > c.x && e.clone(i, c),
                        O < u.y && e.clone(i, u),
                        O > l.y && e.clone(i, l),
                        I < s.z && e.clone(i, s),
                        I > f.z && e.clone(i, f);
                }
                var x = e.magnitudeSquared(e.subtract(c, o, R)),
                    M = e.magnitudeSquared(e.subtract(l, u, R)),
                    C = e.magnitudeSquared(e.subtract(f, s, R)),
                    P = o,
                    b = c,
                    U = x;
                M > U && ((U = M), (P = u), (b = l)), C > U && ((U = C), (P = s), (b = f));
                var D = A;
                (D.x = 0.5 * (P.x + b.x)), (D.y = 0.5 * (P.y + b.y)), (D.z = 0.5 * (P.z + b.z));
                var L = e.magnitudeSquared(e.subtract(b, D, R)),
                    F = Math.sqrt(L),
                    B = g;
                (B.x = o.x), (B.y = u.y), (B.z = s.z);
                var z = S;
                (z.x = c.x), (z.y = l.y), (z.z = f.z);
                var q = e.midpoint(B, z, w),
                    G = 0;
                for (n = 0; n < h; n++) {
                    e.clone(t[n], i);
                    var V = e.magnitude(e.subtract(i, q, R));
                    V > G && (G = V);
                    var X = e.magnitudeSquared(e.subtract(i, D, R));
                    if (X > L) {
                        var W = Math.sqrt(X);
                        (F = 0.5 * (F + W)), (L = F * F);
                        var H = W - F;
                        (D.x = (F * D.x + H * i.x) / W),
                            (D.y = (F * D.y + H * i.y) / W),
                            (D.z = (F * D.z + H * i.z) / W);
                    }
                }
                return (
                    F < G
                        ? (e.clone(D, r.center), (r.radius = F))
                        : (e.clone(q, r.center), (r.radius = G)),
                    r
                );
            };
            var O = new o(),
                I = new e(),
                x = new e(),
                M = new t(),
                C = new t();
            (d.fromRectangle2D = function(e, t, r) {
                return d.fromRectangleWithHeights2D(e, t, 0, 0, r);
            }),
                (d.fromRectangleWithHeights2D = function(t, r, i, o, u) {
                    if ((a(u) || (u = new d()), !a(t)))
                        return (u.center = e.clone(e.ZERO, u.center)), (u.radius = 0), u;
                    (r = n(r, O)),
                        h.southwest(t, M),
                        (M.height = i),
                        h.northeast(t, C),
                        (C.height = o);
                    var s = r.project(M, I),
                        c = r.project(C, x),
                        l = c.x - s.x,
                        f = c.y - s.y,
                        p = c.z - s.z;
                    u.radius = 0.5 * Math.sqrt(l * l + f * f + p * p);
                    var y = u.center;
                    return (y.x = s.x + 0.5 * l), (y.y = s.y + 0.5 * f), (y.z = s.z + 0.5 * p), u;
                });
            var P = [];
            (d.fromRectangle3D = function(t, r, o, u) {
                if (((r = n(r, i.WGS84)), (o = n(o, 0)), a(u) || (u = new d()), !a(t)))
                    return (u.center = e.clone(e.ZERO, u.center)), (u.radius = 0), u;
                var s = h.subsample(t, r, o, P);
                return d.fromPoints(s, u);
            }),
                (d.fromVertices = function(t, r, i, o) {
                    if ((a(o) || (o = new d()), !a(t) || 0 === t.length))
                        return (o.center = e.clone(e.ZERO, o.center)), (o.radius = 0), o;
                    (r = n(r, e.ZERO)), (i = n(i, 3));
                    var u = T;
                    (u.x = t[0] + r.x), (u.y = t[1] + r.y), (u.z = t[2] + r.z);
                    var s,
                        c = e.clone(u, p),
                        l = e.clone(u, y),
                        f = e.clone(u, m),
                        h = e.clone(u, E),
                        N = e.clone(u, _),
                        O = e.clone(u, v),
                        I = t.length;
                    for (s = 0; s < I; s += i) {
                        var x = t[s] + r.x,
                            M = t[s + 1] + r.y,
                            C = t[s + 2] + r.z;
                        (u.x = x),
                            (u.y = M),
                            (u.z = C),
                            x < c.x && e.clone(u, c),
                            x > h.x && e.clone(u, h),
                            M < l.y && e.clone(u, l),
                            M > N.y && e.clone(u, N),
                            C < f.z && e.clone(u, f),
                            C > O.z && e.clone(u, O);
                    }
                    var P = e.magnitudeSquared(e.subtract(h, c, R)),
                        b = e.magnitudeSquared(e.subtract(N, l, R)),
                        U = e.magnitudeSquared(e.subtract(O, f, R)),
                        D = c,
                        L = h,
                        F = P;
                    b > F && ((F = b), (D = l), (L = N)), U > F && ((F = U), (D = f), (L = O));
                    var B = A;
                    (B.x = 0.5 * (D.x + L.x)), (B.y = 0.5 * (D.y + L.y)), (B.z = 0.5 * (D.z + L.z));
                    var z = e.magnitudeSquared(e.subtract(L, B, R)),
                        q = Math.sqrt(z),
                        G = g;
                    (G.x = c.x), (G.y = l.y), (G.z = f.z);
                    var V = S;
                    (V.x = h.x), (V.y = N.y), (V.z = O.z);
                    var X = e.midpoint(G, V, w),
                        W = 0;
                    for (s = 0; s < I; s += i) {
                        (u.x = t[s] + r.x), (u.y = t[s + 1] + r.y), (u.z = t[s + 2] + r.z);
                        var H = e.magnitude(e.subtract(u, X, R));
                        H > W && (W = H);
                        var Y = e.magnitudeSquared(e.subtract(u, B, R));
                        if (Y > z) {
                            var k = Math.sqrt(Y);
                            (q = 0.5 * (q + k)), (z = q * q);
                            var Z = k - q;
                            (B.x = (q * B.x + Z * u.x) / k),
                                (B.y = (q * B.y + Z * u.y) / k),
                                (B.z = (q * B.z + Z * u.z) / k);
                        }
                    }
                    return (
                        q < W
                            ? (e.clone(B, o.center), (o.radius = q))
                            : (e.clone(X, o.center), (o.radius = W)),
                        o
                    );
                }),
                (d.fromEncodedCartesianVertices = function(t, r, n) {
                    if (
                        (a(n) || (n = new d()),
                        !a(t) || !a(r) || t.length !== r.length || 0 === t.length)
                    )
                        return (n.center = e.clone(e.ZERO, n.center)), (n.radius = 0), n;
                    var i = T;
                    (i.x = t[0] + r[0]), (i.y = t[1] + r[1]), (i.z = t[2] + r[2]);
                    var o,
                        u = e.clone(i, p),
                        s = e.clone(i, y),
                        c = e.clone(i, m),
                        l = e.clone(i, E),
                        f = e.clone(i, _),
                        h = e.clone(i, v),
                        N = t.length;
                    for (o = 0; o < N; o += 3) {
                        var O = t[o] + r[o],
                            I = t[o + 1] + r[o + 1],
                            x = t[o + 2] + r[o + 2];
                        (i.x = O),
                            (i.y = I),
                            (i.z = x),
                            O < u.x && e.clone(i, u),
                            O > l.x && e.clone(i, l),
                            I < s.y && e.clone(i, s),
                            I > f.y && e.clone(i, f),
                            x < c.z && e.clone(i, c),
                            x > h.z && e.clone(i, h);
                    }
                    var M = e.magnitudeSquared(e.subtract(l, u, R)),
                        C = e.magnitudeSquared(e.subtract(f, s, R)),
                        P = e.magnitudeSquared(e.subtract(h, c, R)),
                        b = u,
                        U = l,
                        D = M;
                    C > D && ((D = C), (b = s), (U = f)), P > D && ((D = P), (b = c), (U = h));
                    var L = A;
                    (L.x = 0.5 * (b.x + U.x)), (L.y = 0.5 * (b.y + U.y)), (L.z = 0.5 * (b.z + U.z));
                    var F = e.magnitudeSquared(e.subtract(U, L, R)),
                        B = Math.sqrt(F),
                        z = g;
                    (z.x = u.x), (z.y = s.y), (z.z = c.z);
                    var q = S;
                    (q.x = l.x), (q.y = f.y), (q.z = h.z);
                    var G = e.midpoint(z, q, w),
                        V = 0;
                    for (o = 0; o < N; o += 3) {
                        (i.x = t[o] + r[o]),
                            (i.y = t[o + 1] + r[o + 1]),
                            (i.z = t[o + 2] + r[o + 2]);
                        var X = e.magnitude(e.subtract(i, G, R));
                        X > V && (V = X);
                        var W = e.magnitudeSquared(e.subtract(i, L, R));
                        if (W > F) {
                            var H = Math.sqrt(W);
                            (B = 0.5 * (B + H)), (F = B * B);
                            var Y = H - B;
                            (L.x = (B * L.x + Y * i.x) / H),
                                (L.y = (B * L.y + Y * i.y) / H),
                                (L.z = (B * L.z + Y * i.z) / H);
                        }
                    }
                    return (
                        B < V
                            ? (e.clone(L, n.center), (n.radius = B))
                            : (e.clone(G, n.center), (n.radius = V)),
                        n
                    );
                }),
                (d.fromCornerPoints = function(t, r, n) {
                    a(n) || (n = new d());
                    var i = e.midpoint(t, r, n.center);
                    return (n.radius = e.distance(i, r)), n;
                }),
                (d.fromEllipsoid = function(t, r) {
                    return (
                        a(r) || (r = new d()),
                        e.clone(e.ZERO, r.center),
                        (r.radius = t.maximumRadius),
                        r
                    );
                });
            var b = new e();
            d.fromBoundingSpheres = function(t, r) {
                if ((a(r) || (r = new d()), !a(t) || 0 === t.length))
                    return (r.center = e.clone(e.ZERO, r.center)), (r.radius = 0), r;
                var n = t.length;
                if (1 === n) return d.clone(t[0], r);
                if (2 === n) return d.union(t[0], t[1], r);
                var i,
                    o = [];
                for (i = 0; i < n; i++) o.push(t[i].center);
                r = d.fromPoints(o, r);
                var u = r.center,
                    s = r.radius;
                for (i = 0; i < n; i++) {
                    var c = t[i];
                    s = Math.max(s, e.distance(u, c.center, b) + c.radius);
                }
                return (r.radius = s), r;
            };
            var U = new e(),
                D = new e(),
                L = new e();
            (d.fromOrientedBoundingBox = function(t, r) {
                a(r) || (r = new d());
                var n = t.halfAxes,
                    i = l.getColumn(n, 0, U),
                    o = l.getColumn(n, 1, D),
                    u = l.getColumn(n, 2, L);
                return (
                    e.add(i, o, i),
                    e.add(i, u, i),
                    (r.center = e.clone(t.center, r.center)),
                    (r.radius = e.magnitude(i)),
                    r
                );
            }),
                (d.clone = function(t, r) {
                    if (a(t))
                        return a(r)
                            ? ((r.center = e.clone(t.center, r.center)), (r.radius = t.radius), r)
                            : new d(t.center, t.radius);
                }),
                (d.packedLength = 4),
                (d.pack = function(e, t, r) {
                    r = n(r, 0);
                    var a = e.center;
                    return (t[r++] = a.x), (t[r++] = a.y), (t[r++] = a.z), (t[r] = e.radius), t;
                }),
                (d.unpack = function(e, t, r) {
                    (t = n(t, 0)), a(r) || (r = new d());
                    var i = r.center;
                    return (i.x = e[t++]), (i.y = e[t++]), (i.z = e[t++]), (r.radius = e[t]), r;
                });
            var F = new e(),
                B = new e();
            d.union = function(t, r, n) {
                a(n) || (n = new d());
                var i = t.center,
                    o = t.radius,
                    u = r.center,
                    s = r.radius,
                    c = e.subtract(u, i, F),
                    l = e.magnitude(c);
                if (o >= l + s) return t.clone(n), n;
                if (s >= l + o) return r.clone(n), n;
                var f = 0.5 * (o + l + s),
                    h = e.multiplyByScalar(c, (-o + f) / l, B);
                return e.add(h, i, h), e.clone(h, n.center), (n.radius = f), n;
            };
            var z = new e();
            (d.expand = function(t, r, n) {
                n = d.clone(t, n);
                var a = e.magnitude(e.subtract(r, n.center, z));
                return a > n.radius && (n.radius = a), n;
            }),
                (d.intersectPlane = function(t, r) {
                    var n = t.center,
                        a = t.radius,
                        i = r.normal,
                        o = e.dot(i, n) + r.distance;
                    return o < -a ? u.OUTSIDE : o < a ? u.INTERSECTING : u.INSIDE;
                }),
                (d.transform = function(e, t, r) {
                    return (
                        a(r) || (r = new d()),
                        (r.center = f.multiplyByPoint(t, e.center, r.center)),
                        (r.radius = f.getMaximumScale(t) * e.radius),
                        r
                    );
                });
            var q = new e();
            (d.distanceSquaredTo = function(t, r) {
                var n = e.subtract(t.center, r, q);
                return e.magnitudeSquared(n) - t.radius * t.radius;
            }),
                (d.transformWithoutScale = function(e, t, r) {
                    return (
                        a(r) || (r = new d()),
                        (r.center = f.multiplyByPoint(t, e.center, r.center)),
                        (r.radius = e.radius),
                        r
                    );
                });
            var G = new e();
            d.computePlaneDistances = function(t, r, n, i) {
                a(i) || (i = new s());
                var o = e.subtract(t.center, r, G),
                    u = e.dot(n, o);
                return (i.start = u - t.radius), (i.stop = u + t.radius), i;
            };
            for (
                var V = new e(),
                    X = new e(),
                    W = new e(),
                    H = new e(),
                    Y = new e(),
                    k = new t(),
                    Z = new Array(8),
                    j = 0;
                j < 8;
                ++j
            )
                Z[j] = new e();
            var K = new o();
            return (
                (d.projectTo2D = function(t, r, a) {
                    r = n(r, K);
                    var i = r.ellipsoid,
                        o = t.center,
                        u = t.radius,
                        s = i.geodeticSurfaceNormal(o, V),
                        c = e.cross(e.UNIT_Z, s, X);
                    e.normalize(c, c);
                    var l = e.cross(s, c, W);
                    e.normalize(l, l),
                        e.multiplyByScalar(s, u, s),
                        e.multiplyByScalar(l, u, l),
                        e.multiplyByScalar(c, u, c);
                    var f = e.negate(l, Y),
                        h = e.negate(c, H),
                        p = Z,
                        y = p[0];
                    e.add(s, l, y),
                        e.add(y, c, y),
                        (y = p[1]),
                        e.add(s, l, y),
                        e.add(y, h, y),
                        (y = p[2]),
                        e.add(s, f, y),
                        e.add(y, h, y),
                        (y = p[3]),
                        e.add(s, f, y),
                        e.add(y, c, y),
                        e.negate(s, s),
                        (y = p[4]),
                        e.add(s, l, y),
                        e.add(y, c, y),
                        (y = p[5]),
                        e.add(s, l, y),
                        e.add(y, h, y),
                        (y = p[6]),
                        e.add(s, f, y),
                        e.add(y, h, y),
                        (y = p[7]),
                        e.add(s, f, y),
                        e.add(y, c, y);
                    for (var m = p.length, E = 0; E < m; ++E) {
                        var _ = p[E];
                        e.add(o, _, _);
                        var v = i.cartesianToCartographic(_, k);
                        r.project(v, _);
                    }
                    (a = d.fromPoints(p, a)), (o = a.center);
                    var T = o.x,
                        R = o.y,
                        A = o.z;
                    return (o.x = A), (o.y = T), (o.z = R), a;
                }),
                (d.isOccluded = function(e, t) {
                    return !t.isBoundingSphereVisible(e);
                }),
                (d.equals = function(t, r) {
                    return (
                        t === r ||
                        (a(t) && a(r) && e.equals(t.center, r.center) && t.radius === r.radius)
                    );
                }),
                (d.prototype.intersectPlane = function(e) {
                    return d.intersectPlane(this, e);
                }),
                (d.prototype.distanceSquaredTo = function(e) {
                    return d.distanceSquaredTo(this, e);
                }),
                (d.prototype.computePlaneDistances = function(e, t, r) {
                    return d.computePlaneDistances(this, e, t, r);
                }),
                (d.prototype.isOccluded = function(e) {
                    return d.isOccluded(this, e);
                }),
                (d.prototype.equals = function(e) {
                    return d.equals(this, e);
                }),
                (d.prototype.clone = function(e) {
                    return d.clone(this, e);
                }),
                (d.prototype.volume = function() {
                    var e = this.radius;
                    return N * e * e * e;
                }),
                d
            );
        }),
        define("Core/Cartesian2", [
            "./Check",
            "./defaultValue",
            "./defined",
            "./DeveloperError",
            "./freezeObject",
            "./Math"
        ], function(e, t, r, n, a, i) {
            "use strict";
            function o(e, r) {
                (this.x = t(e, 0)), (this.y = t(r, 0));
            }
            (o.fromElements = function(e, t, n) {
                return r(n) ? ((n.x = e), (n.y = t), n) : new o(e, t);
            }),
                (o.clone = function(e, t) {
                    if (r(e)) return r(t) ? ((t.x = e.x), (t.y = e.y), t) : new o(e.x, e.y);
                }),
                (o.fromCartesian3 = o.clone),
                (o.fromCartesian4 = o.clone),
                (o.packedLength = 2),
                (o.pack = function(e, r, n) {
                    return (n = t(n, 0)), (r[n++] = e.x), (r[n] = e.y), r;
                }),
                (o.unpack = function(e, n, a) {
                    return (n = t(n, 0)), r(a) || (a = new o()), (a.x = e[n++]), (a.y = e[n]), a;
                }),
                (o.packArray = function(e, t) {
                    var n = e.length;
                    r(t) ? (t.length = 2 * n) : (t = new Array(2 * n));
                    for (var a = 0; a < n; ++a) o.pack(e[a], t, 2 * a);
                    return t;
                }),
                (o.unpackArray = function(e, t) {
                    var n = e.length;
                    r(t) ? (t.length = n / 2) : (t = new Array(n / 2));
                    for (var a = 0; a < n; a += 2) {
                        var i = a / 2;
                        t[i] = o.unpack(e, a, t[i]);
                    }
                    return t;
                }),
                (o.fromArray = o.unpack),
                (o.maximumComponent = function(e) {
                    return Math.max(e.x, e.y);
                }),
                (o.minimumComponent = function(e) {
                    return Math.min(e.x, e.y);
                }),
                (o.minimumByComponent = function(e, t, r) {
                    return (r.x = Math.min(e.x, t.x)), (r.y = Math.min(e.y, t.y)), r;
                }),
                (o.maximumByComponent = function(e, t, r) {
                    return (r.x = Math.max(e.x, t.x)), (r.y = Math.max(e.y, t.y)), r;
                }),
                (o.magnitudeSquared = function(e) {
                    return e.x * e.x + e.y * e.y;
                }),
                (o.magnitude = function(e) {
                    return Math.sqrt(o.magnitudeSquared(e));
                });
            var u = new o();
            (o.distance = function(e, t) {
                return o.subtract(e, t, u), o.magnitude(u);
            }),
                (o.distanceSquared = function(e, t) {
                    return o.subtract(e, t, u), o.magnitudeSquared(u);
                }),
                (o.normalize = function(e, t) {
                    var r = o.magnitude(e);
                    return (t.x = e.x / r), (t.y = e.y / r), t;
                }),
                (o.dot = function(e, t) {
                    return e.x * t.x + e.y * t.y;
                }),
                (o.multiplyComponents = function(e, t, r) {
                    return (r.x = e.x * t.x), (r.y = e.y * t.y), r;
                }),
                (o.divideComponents = function(e, t, r) {
                    return (r.x = e.x / t.x), (r.y = e.y / t.y), r;
                }),
                (o.add = function(e, t, r) {
                    return (r.x = e.x + t.x), (r.y = e.y + t.y), r;
                }),
                (o.subtract = function(e, t, r) {
                    return (r.x = e.x - t.x), (r.y = e.y - t.y), r;
                }),
                (o.multiplyByScalar = function(e, t, r) {
                    return (r.x = e.x * t), (r.y = e.y * t), r;
                }),
                (o.divideByScalar = function(e, t, r) {
                    return (r.x = e.x / t), (r.y = e.y / t), r;
                }),
                (o.negate = function(e, t) {
                    return (t.x = -e.x), (t.y = -e.y), t;
                }),
                (o.abs = function(e, t) {
                    return (t.x = Math.abs(e.x)), (t.y = Math.abs(e.y)), t;
                });
            var s = new o();
            o.lerp = function(e, t, r, n) {
                return (
                    o.multiplyByScalar(t, r, s),
                    (n = o.multiplyByScalar(e, 1 - r, n)),
                    o.add(s, n, n)
                );
            };
            var c = new o(),
                l = new o();
            o.angleBetween = function(e, t) {
                return o.normalize(e, c), o.normalize(t, l), i.acosClamped(o.dot(c, l));
            };
            var f = new o();
            return (
                (o.mostOrthogonalAxis = function(e, t) {
                    var r = o.normalize(e, f);
                    return (
                        o.abs(r, r), (t = r.x <= r.y ? o.clone(o.UNIT_X, t) : o.clone(o.UNIT_Y, t))
                    );
                }),
                (o.equals = function(e, t) {
                    return e === t || (r(e) && r(t) && e.x === t.x && e.y === t.y);
                }),
                (o.equalsArray = function(e, t, r) {
                    return e.x === t[r] && e.y === t[r + 1];
                }),
                (o.equalsEpsilon = function(e, t, n, a) {
                    return (
                        e === t ||
                        (r(e) &&
                            r(t) &&
                            i.equalsEpsilon(e.x, t.x, n, a) &&
                            i.equalsEpsilon(e.y, t.y, n, a))
                    );
                }),
                (o.ZERO = a(new o(0, 0))),
                (o.UNIT_X = a(new o(1, 0))),
                (o.UNIT_Y = a(new o(0, 1))),
                (o.prototype.clone = function(e) {
                    return o.clone(this, e);
                }),
                (o.prototype.equals = function(e) {
                    return o.equals(this, e);
                }),
                (o.prototype.equalsEpsilon = function(e, t, r) {
                    return o.equalsEpsilon(this, e, t, r);
                }),
                (o.prototype.toString = function() {
                    return "(" + this.x + ", " + this.y + ")";
                }),
                o
            );
        }),
        define("Core/Fullscreen", ["./defined", "./defineProperties"], function(e, t) {
            "use strict";
            var r,
                n = {
                    requestFullscreen: void 0,
                    exitFullscreen: void 0,
                    fullscreenEnabled: void 0,
                    fullscreenElement: void 0,
                    fullscreenchange: void 0,
                    fullscreenerror: void 0
                },
                a = {};
            return (
                t(a, {
                    element: {
                        get: function() {
                            if (a.supportsFullscreen()) return document[n.fullscreenElement];
                        }
                    },
                    changeEventName: {
                        get: function() {
                            if (a.supportsFullscreen()) return n.fullscreenchange;
                        }
                    },
                    errorEventName: {
                        get: function() {
                            if (a.supportsFullscreen()) return n.fullscreenerror;
                        }
                    },
                    enabled: {
                        get: function() {
                            if (a.supportsFullscreen()) return document[n.fullscreenEnabled];
                        }
                    },
                    fullscreen: {
                        get: function() {
                            if (a.supportsFullscreen()) return null !== a.element;
                        }
                    }
                }),
                (a.supportsFullscreen = function() {
                    if (e(r)) return r;
                    r = !1;
                    var t = document.body;
                    if ("function" == typeof t.requestFullscreen)
                        return (
                            (n.requestFullscreen = "requestFullscreen"),
                            (n.exitFullscreen = "exitFullscreen"),
                            (n.fullscreenEnabled = "fullscreenEnabled"),
                            (n.fullscreenElement = "fullscreenElement"),
                            (n.fullscreenchange = "fullscreenchange"),
                            (n.fullscreenerror = "fullscreenerror"),
                            (r = !0)
                        );
                    for (
                        var a, i = ["webkit", "moz", "o", "ms", "khtml"], o = 0, u = i.length;
                        o < u;
                        ++o
                    ) {
                        var s = i[o];
                        (a = s + "RequestFullscreen"),
                            "function" == typeof t[a]
                                ? ((n.requestFullscreen = a), (r = !0))
                                : ((a = s + "RequestFullScreen"),
                                  "function" == typeof t[a] &&
                                      ((n.requestFullscreen = a), (r = !0))),
                            (a = s + "ExitFullscreen"),
                            "function" == typeof document[a]
                                ? (n.exitFullscreen = a)
                                : ((a = s + "CancelFullScreen"),
                                  "function" == typeof document[a] && (n.exitFullscreen = a)),
                            (a = s + "FullscreenEnabled"),
                            void 0 !== document[a]
                                ? (n.fullscreenEnabled = a)
                                : ((a = s + "FullScreenEnabled"),
                                  void 0 !== document[a] && (n.fullscreenEnabled = a)),
                            (a = s + "FullscreenElement"),
                            void 0 !== document[a]
                                ? (n.fullscreenElement = a)
                                : ((a = s + "FullScreenElement"),
                                  void 0 !== document[a] && (n.fullscreenElement = a)),
                            (a = s + "fullscreenchange"),
                            void 0 !== document["on" + a] &&
                                ("ms" === s && (a = "MSFullscreenChange"),
                                (n.fullscreenchange = a)),
                            (a = s + "fullscreenerror"),
                            void 0 !== document["on" + a] &&
                                ("ms" === s && (a = "MSFullscreenError"), (n.fullscreenerror = a));
                    }
                    return r;
                }),
                (a.requestFullscreen = function(e, t) {
                    a.supportsFullscreen() && e[n.requestFullscreen]({ vrDisplay: t });
                }),
                (a.exitFullscreen = function() {
                    a.supportsFullscreen() && document[n.exitFullscreen]();
                }),
                a
            );
        }),
        define("Core/FeatureDetection", ["./defaultValue", "./defined", "./Fullscreen"], function(
            e,
            t,
            r
        ) {
            "use strict";
            function n(e) {
                for (var t = e.split("."), r = 0, n = t.length; r < n; ++r)
                    t[r] = parseInt(t[r], 10);
                return t;
            }
            function a() {
                if (!t(R) && ((R = !1), !h())) {
                    var e = / Chrome\/([\.0-9]+)/.exec(T.userAgent);
                    null !== e && ((R = !0), (A = n(e[1])));
                }
                return R;
            }
            function i() {
                return a() && A;
            }
            function o() {
                if (!t(g) && ((g = !1), !a() && !h() && / Safari\/[\.0-9]+/.test(T.userAgent))) {
                    var e = / Version\/([\.0-9]+)/.exec(T.userAgent);
                    null !== e && ((g = !0), (S = n(e[1])));
                }
                return g;
            }
            function u() {
                return o() && S;
            }
            function s() {
                if (!t(w)) {
                    w = !1;
                    var e = / AppleWebKit\/([\.0-9]+)(\+?)/.exec(T.userAgent);
                    null !== e && ((w = !0), (N = n(e[1])), (N.isNightly = !!e[2]));
                }
                return w;
            }
            function c() {
                return s() && N;
            }
            function l() {
                if (!t(O)) {
                    O = !1;
                    var e;
                    "Microsoft Internet Explorer" === T.appName
                        ? null !== (e = /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T.userAgent)) &&
                          ((O = !0), (I = n(e[1])))
                        : "Netscape" === T.appName &&
                          null !== (e = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T.userAgent)) &&
                          ((O = !0), (I = n(e[1])));
                }
                return O;
            }
            function f() {
                return l() && I;
            }
            function h() {
                if (!t(x)) {
                    x = !1;
                    var e = / Edge\/([\.0-9]+)/.exec(T.userAgent);
                    null !== e && ((x = !0), (M = n(e[1])));
                }
                return x;
            }
            function d() {
                return h() && M;
            }
            function p() {
                if (!t(C)) {
                    C = !1;
                    var e = /Firefox\/([\.0-9]+)/.exec(T.userAgent);
                    null !== e && ((C = !0), (P = n(e[1])));
                }
                return C;
            }
            function y() {
                return t(b) || (b = /Windows/i.test(T.appVersion)), b;
            }
            function m() {
                return p() && P;
            }
            function E() {
                return (
                    t(U) ||
                        (U =
                            !p() &&
                            "undefined" != typeof PointerEvent &&
                            (!t(T.pointerEnabled) || T.pointerEnabled)),
                    U
                );
            }
            function _() {
                if (!t(L)) {
                    var e = document.createElement("canvas");
                    e.setAttribute(
                        "style",
                        "image-rendering: -moz-crisp-edges;image-rendering: pixelated;"
                    );
                    var r = e.style.imageRendering;
                    (L = t(r) && "" !== r), L && (D = r);
                }
                return L;
            }
            function v() {
                return _() ? D : void 0;
            }
            var T;
            T = "undefined" != typeof navigator ? navigator : {};
            var R,
                A,
                g,
                S,
                w,
                N,
                O,
                I,
                x,
                M,
                C,
                P,
                b,
                U,
                D,
                L,
                F = [];
            "undefined" != typeof ArrayBuffer &&
                (F.push(
                    Int8Array,
                    Uint8Array,
                    Int16Array,
                    Uint16Array,
                    Int32Array,
                    Uint32Array,
                    Float32Array,
                    Float64Array
                ),
                "undefined" != typeof Uint8ClampedArray && F.push(Uint8ClampedArray),
                "undefined" != typeof CanvasPixelArray && F.push(CanvasPixelArray));
            var B = {
                isChrome: a,
                chromeVersion: i,
                isSafari: o,
                safariVersion: u,
                isWebkit: s,
                webkitVersion: c,
                isInternetExplorer: l,
                internetExplorerVersion: f,
                isEdge: h,
                edgeVersion: d,
                isFirefox: p,
                firefoxVersion: m,
                isWindows: y,
                hardwareConcurrency: e(T.hardwareConcurrency, 3),
                supportsPointerEvents: E,
                supportsImageRenderingPixelated: _,
                imageRenderingValue: v,
                typedArrayTypes: F
            };
            return (
                (B.supportsFullscreen = function() {
                    return r.supportsFullscreen();
                }),
                (B.supportsTypedArrays = function() {
                    return "undefined" != typeof ArrayBuffer;
                }),
                (B.supportsWebWorkers = function() {
                    return "undefined" != typeof Worker;
                }),
                (B.supportsWebAssembly = function() {
                    return "undefined" != typeof WebAssembly && !B.isEdge();
                }),
                B
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
        ], function(e, t, r, n, a, i) {
            "use strict";
            if (!n.supportsTypedArrays()) return {};
            var o = {
                BYTE: i.BYTE,
                UNSIGNED_BYTE: i.UNSIGNED_BYTE,
                SHORT: i.SHORT,
                UNSIGNED_SHORT: i.UNSIGNED_SHORT,
                INT: i.INT,
                UNSIGNED_INT: i.UNSIGNED_INT,
                FLOAT: i.FLOAT,
                DOUBLE: i.DOUBLE
            };
            return (
                (o.getSizeInBytes = function(e) {
                    switch (e) {
                        case o.BYTE:
                            return Int8Array.BYTES_PER_ELEMENT;
                        case o.UNSIGNED_BYTE:
                            return Uint8Array.BYTES_PER_ELEMENT;
                        case o.SHORT:
                            return Int16Array.BYTES_PER_ELEMENT;
                        case o.UNSIGNED_SHORT:
                            return Uint16Array.BYTES_PER_ELEMENT;
                        case o.INT:
                            return Int32Array.BYTES_PER_ELEMENT;
                        case o.UNSIGNED_INT:
                            return Uint32Array.BYTES_PER_ELEMENT;
                        case o.FLOAT:
                            return Float32Array.BYTES_PER_ELEMENT;
                        case o.DOUBLE:
                            return Float64Array.BYTES_PER_ELEMENT;
                    }
                }),
                (o.fromTypedArray = function(e) {
                    return e instanceof Int8Array
                        ? o.BYTE
                        : e instanceof Uint8Array
                        ? o.UNSIGNED_BYTE
                        : e instanceof Int16Array
                        ? o.SHORT
                        : e instanceof Uint16Array
                        ? o.UNSIGNED_SHORT
                        : e instanceof Int32Array
                        ? o.INT
                        : e instanceof Uint32Array
                        ? o.UNSIGNED_INT
                        : e instanceof Float32Array
                        ? o.FLOAT
                        : e instanceof Float64Array
                        ? o.DOUBLE
                        : void 0;
                }),
                (o.validate = function(e) {
                    return (
                        t(e) &&
                        (e === o.BYTE ||
                            e === o.UNSIGNED_BYTE ||
                            e === o.SHORT ||
                            e === o.UNSIGNED_SHORT ||
                            e === o.INT ||
                            e === o.UNSIGNED_INT ||
                            e === o.FLOAT ||
                            e === o.DOUBLE)
                    );
                }),
                (o.createTypedArray = function(e, t) {
                    switch (e) {
                        case o.BYTE:
                            return new Int8Array(t);
                        case o.UNSIGNED_BYTE:
                            return new Uint8Array(t);
                        case o.SHORT:
                            return new Int16Array(t);
                        case o.UNSIGNED_SHORT:
                            return new Uint16Array(t);
                        case o.INT:
                            return new Int32Array(t);
                        case o.UNSIGNED_INT:
                            return new Uint32Array(t);
                        case o.FLOAT:
                            return new Float32Array(t);
                        case o.DOUBLE:
                            return new Float64Array(t);
                    }
                }),
                (o.createArrayBufferView = function(t, r, n, a) {
                    switch (
                        ((n = e(n, 0)), (a = e(a, (r.byteLength - n) / o.getSizeInBytes(t))), t)
                    ) {
                        case o.BYTE:
                            return new Int8Array(r, n, a);
                        case o.UNSIGNED_BYTE:
                            return new Uint8Array(r, n, a);
                        case o.SHORT:
                            return new Int16Array(r, n, a);
                        case o.UNSIGNED_SHORT:
                            return new Uint16Array(r, n, a);
                        case o.INT:
                            return new Int32Array(r, n, a);
                        case o.UNSIGNED_INT:
                            return new Uint32Array(r, n, a);
                        case o.FLOAT:
                            return new Float32Array(r, n, a);
                        case o.DOUBLE:
                            return new Float64Array(r, n, a);
                    }
                }),
                (o.fromName = function(e) {
                    switch (e) {
                        case "BYTE":
                            return o.BYTE;
                        case "UNSIGNED_BYTE":
                            return o.UNSIGNED_BYTE;
                        case "SHORT":
                            return o.SHORT;
                        case "UNSIGNED_SHORT":
                            return o.UNSIGNED_SHORT;
                        case "INT":
                            return o.INT;
                        case "UNSIGNED_INT":
                            return o.UNSIGNED_INT;
                        case "FLOAT":
                            return o.FLOAT;
                        case "DOUBLE":
                            return o.DOUBLE;
                    }
                }),
                a(o)
            );
        }),
        define("Core/GeometryOffsetAttribute", ["../Core/freezeObject"], function(e) {
            "use strict";
            return e({ NONE: 0, TOP: 1, ALL: 2 });
        }),
        define("Core/GeometryType", ["./freezeObject"], function(e) {
            "use strict";
            return e({ NONE: 0, TRIANGLES: 1, LINES: 2, POLYLINES: 3 });
        }),
        define("Core/Matrix2", [
            "./Cartesian2",
            "./Check",
            "./defaultValue",
            "./defined",
            "./defineProperties",
            "./freezeObject"
        ], function(e, t, r, n, a, i) {
            "use strict";
            function o(e, t, n, a) {
                (this[0] = r(e, 0)), (this[1] = r(n, 0)), (this[2] = r(t, 0)), (this[3] = r(a, 0));
            }
            (o.packedLength = 4),
                (o.pack = function(e, t, n) {
                    return (
                        (n = r(n, 0)),
                        (t[n++] = e[0]),
                        (t[n++] = e[1]),
                        (t[n++] = e[2]),
                        (t[n++] = e[3]),
                        t
                    );
                }),
                (o.unpack = function(e, t, a) {
                    return (
                        (t = r(t, 0)),
                        n(a) || (a = new o()),
                        (a[0] = e[t++]),
                        (a[1] = e[t++]),
                        (a[2] = e[t++]),
                        (a[3] = e[t++]),
                        a
                    );
                }),
                (o.clone = function(e, t) {
                    if (n(e))
                        return n(t)
                            ? ((t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t)
                            : new o(e[0], e[2], e[1], e[3]);
                }),
                (o.fromArray = function(e, t, a) {
                    return (
                        (t = r(t, 0)),
                        n(a) || (a = new o()),
                        (a[0] = e[t]),
                        (a[1] = e[t + 1]),
                        (a[2] = e[t + 2]),
                        (a[3] = e[t + 3]),
                        a
                    );
                }),
                (o.fromColumnMajorArray = function(e, t) {
                    return o.clone(e, t);
                }),
                (o.fromRowMajorArray = function(e, t) {
                    return n(t)
                        ? ((t[0] = e[0]), (t[1] = e[2]), (t[2] = e[1]), (t[3] = e[3]), t)
                        : new o(e[0], e[1], e[2], e[3]);
                }),
                (o.fromScale = function(e, t) {
                    return n(t)
                        ? ((t[0] = e.x), (t[1] = 0), (t[2] = 0), (t[3] = e.y), t)
                        : new o(e.x, 0, 0, e.y);
                }),
                (o.fromUniformScale = function(e, t) {
                    return n(t)
                        ? ((t[0] = e), (t[1] = 0), (t[2] = 0), (t[3] = e), t)
                        : new o(e, 0, 0, e);
                }),
                (o.fromRotation = function(e, t) {
                    var r = Math.cos(e),
                        a = Math.sin(e);
                    return n(t)
                        ? ((t[0] = r), (t[1] = a), (t[2] = -a), (t[3] = r), t)
                        : new o(r, -a, a, r);
                }),
                (o.toArray = function(e, t) {
                    return n(t)
                        ? ((t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t)
                        : [e[0], e[1], e[2], e[3]];
                }),
                (o.getElementIndex = function(e, t) {
                    return 2 * e + t;
                }),
                (o.getColumn = function(e, t, r) {
                    var n = 2 * t,
                        a = e[n],
                        i = e[n + 1];
                    return (r.x = a), (r.y = i), r;
                }),
                (o.setColumn = function(e, t, r, n) {
                    n = o.clone(e, n);
                    var a = 2 * t;
                    return (n[a] = r.x), (n[a + 1] = r.y), n;
                }),
                (o.getRow = function(e, t, r) {
                    var n = e[t],
                        a = e[t + 2];
                    return (r.x = n), (r.y = a), r;
                }),
                (o.setRow = function(e, t, r, n) {
                    return (n = o.clone(e, n)), (n[t] = r.x), (n[t + 2] = r.y), n;
                });
            var u = new e();
            o.getScale = function(t, r) {
                return (
                    (r.x = e.magnitude(e.fromElements(t[0], t[1], u))),
                    (r.y = e.magnitude(e.fromElements(t[2], t[3], u))),
                    r
                );
            };
            var s = new e();
            return (
                (o.getMaximumScale = function(t) {
                    return o.getScale(t, s), e.maximumComponent(s);
                }),
                (o.multiply = function(e, t, r) {
                    var n = e[0] * t[0] + e[2] * t[1],
                        a = e[0] * t[2] + e[2] * t[3],
                        i = e[1] * t[0] + e[3] * t[1],
                        o = e[1] * t[2] + e[3] * t[3];
                    return (r[0] = n), (r[1] = i), (r[2] = a), (r[3] = o), r;
                }),
                (o.add = function(e, t, r) {
                    return (
                        (r[0] = e[0] + t[0]),
                        (r[1] = e[1] + t[1]),
                        (r[2] = e[2] + t[2]),
                        (r[3] = e[3] + t[3]),
                        r
                    );
                }),
                (o.subtract = function(e, t, r) {
                    return (
                        (r[0] = e[0] - t[0]),
                        (r[1] = e[1] - t[1]),
                        (r[2] = e[2] - t[2]),
                        (r[3] = e[3] - t[3]),
                        r
                    );
                }),
                (o.multiplyByVector = function(e, t, r) {
                    var n = e[0] * t.x + e[2] * t.y,
                        a = e[1] * t.x + e[3] * t.y;
                    return (r.x = n), (r.y = a), r;
                }),
                (o.multiplyByScalar = function(e, t, r) {
                    return (
                        (r[0] = e[0] * t),
                        (r[1] = e[1] * t),
                        (r[2] = e[2] * t),
                        (r[3] = e[3] * t),
                        r
                    );
                }),
                (o.multiplyByScale = function(e, t, r) {
                    return (
                        (r[0] = e[0] * t.x),
                        (r[1] = e[1] * t.x),
                        (r[2] = e[2] * t.y),
                        (r[3] = e[3] * t.y),
                        r
                    );
                }),
                (o.negate = function(e, t) {
                    return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), (t[3] = -e[3]), t;
                }),
                (o.transpose = function(e, t) {
                    var r = e[0],
                        n = e[2],
                        a = e[1],
                        i = e[3];
                    return (t[0] = r), (t[1] = n), (t[2] = a), (t[3] = i), t;
                }),
                (o.abs = function(e, t) {
                    return (
                        (t[0] = Math.abs(e[0])),
                        (t[1] = Math.abs(e[1])),
                        (t[2] = Math.abs(e[2])),
                        (t[3] = Math.abs(e[3])),
                        t
                    );
                }),
                (o.equals = function(e, t) {
                    return (
                        e === t ||
                        (n(e) &&
                            n(t) &&
                            e[0] === t[0] &&
                            e[1] === t[1] &&
                            e[2] === t[2] &&
                            e[3] === t[3])
                    );
                }),
                (o.equalsArray = function(e, t, r) {
                    return (
                        e[0] === t[r] && e[1] === t[r + 1] && e[2] === t[r + 2] && e[3] === t[r + 3]
                    );
                }),
                (o.equalsEpsilon = function(e, t, r) {
                    return (
                        e === t ||
                        (n(e) &&
                            n(t) &&
                            Math.abs(e[0] - t[0]) <= r &&
                            Math.abs(e[1] - t[1]) <= r &&
                            Math.abs(e[2] - t[2]) <= r &&
                            Math.abs(e[3] - t[3]) <= r)
                    );
                }),
                (o.IDENTITY = i(new o(1, 0, 0, 1))),
                (o.ZERO = i(new o(0, 0, 0, 0))),
                (o.COLUMN0ROW0 = 0),
                (o.COLUMN0ROW1 = 1),
                (o.COLUMN1ROW0 = 2),
                (o.COLUMN1ROW1 = 3),
                a(o.prototype, {
                    length: {
                        get: function() {
                            return o.packedLength;
                        }
                    }
                }),
                (o.prototype.clone = function(e) {
                    return o.clone(this, e);
                }),
                (o.prototype.equals = function(e) {
                    return o.equals(this, e);
                }),
                (o.prototype.equalsEpsilon = function(e, t) {
                    return o.equalsEpsilon(this, e, t);
                }),
                (o.prototype.toString = function() {
                    return "(" + this[0] + ", " + this[2] + ")\n(" + this[1] + ", " + this[3] + ")";
                }),
                o
            );
        }),
        define("Core/PrimitiveType", ["./freezeObject", "./WebGLConstants"], function(e, t) {
            "use strict";
            var r = {
                POINTS: t.POINTS,
                LINES: t.LINES,
                LINE_LOOP: t.LINE_LOOP,
                LINE_STRIP: t.LINE_STRIP,
                TRIANGLES: t.TRIANGLES,
                TRIANGLE_STRIP: t.TRIANGLE_STRIP,
                TRIANGLE_FAN: t.TRIANGLE_FAN,
                validate: function(e) {
                    return (
                        e === r.POINTS ||
                        e === r.LINES ||
                        e === r.LINE_LOOP ||
                        e === r.LINE_STRIP ||
                        e === r.TRIANGLES ||
                        e === r.TRIANGLE_STRIP ||
                        e === r.TRIANGLE_FAN
                    );
                }
            };
            return e(r);
        }),
        define("Core/Quaternion", [
            "./Cartesian3",
            "./Check",
            "./defaultValue",
            "./defined",
            "./FeatureDetection",
            "./freezeObject",
            "./Math",
            "./Matrix3"
        ], function(e, t, r, n, a, i, o, u) {
            "use strict";
            function s(e, t, n, a) {
                (this.x = r(e, 0)), (this.y = r(t, 0)), (this.z = r(n, 0)), (this.w = r(a, 0));
            }
            var c = new e();
            s.fromAxisAngle = function(t, r, a) {
                var i = r / 2,
                    o = Math.sin(i);
                c = e.normalize(t, c);
                var u = c.x * o,
                    l = c.y * o,
                    f = c.z * o,
                    h = Math.cos(i);
                return n(a) ? ((a.x = u), (a.y = l), (a.z = f), (a.w = h), a) : new s(u, l, f, h);
            };
            var l = [1, 2, 0],
                f = new Array(3);
            s.fromRotationMatrix = function(e, t) {
                var r,
                    a,
                    i,
                    o,
                    c,
                    h = e[u.COLUMN0ROW0],
                    d = e[u.COLUMN1ROW1],
                    p = e[u.COLUMN2ROW2],
                    y = h + d + p;
                if (y > 0)
                    (r = Math.sqrt(y + 1)),
                        (c = 0.5 * r),
                        (r = 0.5 / r),
                        (a = (e[u.COLUMN1ROW2] - e[u.COLUMN2ROW1]) * r),
                        (i = (e[u.COLUMN2ROW0] - e[u.COLUMN0ROW2]) * r),
                        (o = (e[u.COLUMN0ROW1] - e[u.COLUMN1ROW0]) * r);
                else {
                    var m = l,
                        E = 0;
                    d > h && (E = 1), p > h && p > d && (E = 2);
                    var _ = m[E],
                        v = m[_];
                    r = Math.sqrt(
                        e[u.getElementIndex(E, E)] -
                            e[u.getElementIndex(_, _)] -
                            e[u.getElementIndex(v, v)] +
                            1
                    );
                    var T = f;
                    (T[E] = 0.5 * r),
                        (r = 0.5 / r),
                        (c = (e[u.getElementIndex(v, _)] - e[u.getElementIndex(_, v)]) * r),
                        (T[_] = (e[u.getElementIndex(_, E)] + e[u.getElementIndex(E, _)]) * r),
                        (T[v] = (e[u.getElementIndex(v, E)] + e[u.getElementIndex(E, v)]) * r),
                        (a = -T[0]),
                        (i = -T[1]),
                        (o = -T[2]);
                }
                return n(t) ? ((t.x = a), (t.y = i), (t.z = o), (t.w = c), t) : new s(a, i, o, c);
            };
            var h = new s(),
                d = new s(),
                p = new s(),
                y = new s();
            s.fromHeadingPitchRoll = function(t, r) {
                return (
                    (y = s.fromAxisAngle(e.UNIT_X, t.roll, h)),
                    (p = s.fromAxisAngle(e.UNIT_Y, -t.pitch, r)),
                    (r = s.multiply(p, y, p)),
                    (d = s.fromAxisAngle(e.UNIT_Z, -t.heading, h)),
                    s.multiply(d, r, r)
                );
            };
            var m = new e(),
                E = new e(),
                _ = new s(),
                v = new s(),
                T = new s();
            (s.packedLength = 4),
                (s.pack = function(e, t, n) {
                    return (
                        (n = r(n, 0)),
                        (t[n++] = e.x),
                        (t[n++] = e.y),
                        (t[n++] = e.z),
                        (t[n] = e.w),
                        t
                    );
                }),
                (s.unpack = function(e, t, a) {
                    return (
                        (t = r(t, 0)),
                        n(a) || (a = new s()),
                        (a.x = e[t]),
                        (a.y = e[t + 1]),
                        (a.z = e[t + 2]),
                        (a.w = e[t + 3]),
                        a
                    );
                }),
                (s.packedInterpolationLength = 3),
                (s.convertPackedArrayForInterpolation = function(e, t, r, n) {
                    s.unpack(e, 4 * r, T), s.conjugate(T, T);
                    for (var a = 0, i = r - t + 1; a < i; a++) {
                        var o = 3 * a;
                        s.unpack(e, 4 * (t + a), _),
                            s.multiply(_, T, _),
                            _.w < 0 && s.negate(_, _),
                            s.computeAxis(_, m);
                        var u = s.computeAngle(_);
                        (n[o] = m.x * u), (n[o + 1] = m.y * u), (n[o + 2] = m.z * u);
                    }
                }),
                (s.unpackInterpolationResult = function(t, r, a, i, o) {
                    n(o) || (o = new s()), e.fromArray(t, 0, E);
                    var u = e.magnitude(E);
                    return (
                        s.unpack(r, 4 * i, v),
                        0 === u ? s.clone(s.IDENTITY, _) : s.fromAxisAngle(E, u, _),
                        s.multiply(_, v, o)
                    );
                }),
                (s.clone = function(e, t) {
                    if (n(e))
                        return n(t)
                            ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), (t.w = e.w), t)
                            : new s(e.x, e.y, e.z, e.w);
                }),
                (s.conjugate = function(e, t) {
                    return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), (t.w = e.w), t;
                }),
                (s.magnitudeSquared = function(e) {
                    return e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w;
                }),
                (s.magnitude = function(e) {
                    return Math.sqrt(s.magnitudeSquared(e));
                }),
                (s.normalize = function(e, t) {
                    var r = 1 / s.magnitude(e),
                        n = e.x * r,
                        a = e.y * r,
                        i = e.z * r,
                        o = e.w * r;
                    return (t.x = n), (t.y = a), (t.z = i), (t.w = o), t;
                }),
                (s.inverse = function(e, t) {
                    var r = s.magnitudeSquared(e);
                    return (t = s.conjugate(e, t)), s.multiplyByScalar(t, 1 / r, t);
                }),
                (s.add = function(e, t, r) {
                    return (
                        (r.x = e.x + t.x),
                        (r.y = e.y + t.y),
                        (r.z = e.z + t.z),
                        (r.w = e.w + t.w),
                        r
                    );
                }),
                (s.subtract = function(e, t, r) {
                    return (
                        (r.x = e.x - t.x),
                        (r.y = e.y - t.y),
                        (r.z = e.z - t.z),
                        (r.w = e.w - t.w),
                        r
                    );
                }),
                (s.negate = function(e, t) {
                    return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), (t.w = -e.w), t;
                }),
                (s.dot = function(e, t) {
                    return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w;
                }),
                (s.multiply = function(e, t, r) {
                    var n = e.x,
                        a = e.y,
                        i = e.z,
                        o = e.w,
                        u = t.x,
                        s = t.y,
                        c = t.z,
                        l = t.w,
                        f = o * u + n * l + a * c - i * s,
                        h = o * s - n * c + a * l + i * u,
                        d = o * c + n * s - a * u + i * l,
                        p = o * l - n * u - a * s - i * c;
                    return (r.x = f), (r.y = h), (r.z = d), (r.w = p), r;
                }),
                (s.multiplyByScalar = function(e, t, r) {
                    return (r.x = e.x * t), (r.y = e.y * t), (r.z = e.z * t), (r.w = e.w * t), r;
                }),
                (s.divideByScalar = function(e, t, r) {
                    return (r.x = e.x / t), (r.y = e.y / t), (r.z = e.z / t), (r.w = e.w / t), r;
                }),
                (s.computeAxis = function(e, t) {
                    var r = e.w;
                    if (Math.abs(r - 1) < o.EPSILON6) return (t.x = t.y = t.z = 0), t;
                    var n = 1 / Math.sqrt(1 - r * r);
                    return (t.x = e.x * n), (t.y = e.y * n), (t.z = e.z * n), t;
                }),
                (s.computeAngle = function(e) {
                    return Math.abs(e.w - 1) < o.EPSILON6 ? 0 : 2 * Math.acos(e.w);
                });
            var R = new s();
            s.lerp = function(e, t, r, n) {
                return (
                    (R = s.multiplyByScalar(t, r, R)),
                    (n = s.multiplyByScalar(e, 1 - r, n)),
                    s.add(R, n, n)
                );
            };
            var A = new s(),
                g = new s(),
                S = new s();
            (s.slerp = function(e, t, r, n) {
                var a = s.dot(e, t),
                    i = t;
                if ((a < 0 && ((a = -a), (i = A = s.negate(t, A))), 1 - a < o.EPSILON6))
                    return s.lerp(e, i, r, n);
                var u = Math.acos(a);
                return (
                    (g = s.multiplyByScalar(e, Math.sin((1 - r) * u), g)),
                    (S = s.multiplyByScalar(i, Math.sin(r * u), S)),
                    (n = s.add(g, S, n)),
                    s.multiplyByScalar(n, 1 / Math.sin(u), n)
                );
            }),
                (s.log = function(t, r) {
                    var n = o.acosClamped(t.w),
                        a = 0;
                    return 0 !== n && (a = n / Math.sin(n)), e.multiplyByScalar(t, a, r);
                }),
                (s.exp = function(t, r) {
                    var n = e.magnitude(t),
                        a = 0;
                    return (
                        0 !== n && (a = Math.sin(n) / n),
                        (r.x = t.x * a),
                        (r.y = t.y * a),
                        (r.z = t.z * a),
                        (r.w = Math.cos(n)),
                        r
                    );
                });
            var w = new e(),
                N = new e(),
                O = new s(),
                I = new s();
            (s.computeInnerQuadrangle = function(t, r, n, a) {
                var i = s.conjugate(r, O);
                s.multiply(i, n, I);
                var o = s.log(I, w);
                s.multiply(i, t, I);
                var u = s.log(I, N);
                return (
                    e.add(o, u, o),
                    e.multiplyByScalar(o, 0.25, o),
                    e.negate(o, o),
                    s.exp(o, O),
                    s.multiply(r, O, a)
                );
            }),
                (s.squad = function(e, t, r, n, a, i) {
                    var o = s.slerp(e, t, a, O),
                        u = s.slerp(r, n, a, I);
                    return s.slerp(o, u, 2 * a * (1 - a), i);
                });
            for (
                var x = new s(),
                    M = 1.9011074535173003,
                    C = a.supportsTypedArrays() ? new Float32Array(8) : [],
                    P = a.supportsTypedArrays() ? new Float32Array(8) : [],
                    b = a.supportsTypedArrays() ? new Float32Array(8) : [],
                    U = a.supportsTypedArrays() ? new Float32Array(8) : [],
                    D = 0;
                D < 7;
                ++D
            ) {
                var L = D + 1,
                    F = 2 * L + 1;
                (C[D] = 1 / (L * F)), (P[D] = L / F);
            }
            return (
                (C[7] = M / 136),
                (P[7] = (8 * M) / 17),
                (s.fastSlerp = function(e, t, r, n) {
                    var a,
                        i = s.dot(e, t);
                    i >= 0 ? (a = 1) : ((a = -1), (i = -i));
                    for (var o = i - 1, u = 1 - r, c = r * r, l = u * u, f = 7; f >= 0; --f)
                        (b[f] = (C[f] * c - P[f]) * o), (U[f] = (C[f] * l - P[f]) * o);
                    var h =
                            a *
                            r *
                            (1 +
                                b[0] *
                                    (1 +
                                        b[1] *
                                            (1 +
                                                b[2] *
                                                    (1 +
                                                        b[3] *
                                                            (1 +
                                                                b[4] *
                                                                    (1 +
                                                                        b[5] *
                                                                            (1 +
                                                                                b[6] *
                                                                                    (1 +
                                                                                        b[7])))))))),
                        d =
                            u *
                            (1 +
                                U[0] *
                                    (1 +
                                        U[1] *
                                            (1 +
                                                U[2] *
                                                    (1 +
                                                        U[3] *
                                                            (1 +
                                                                U[4] *
                                                                    (1 +
                                                                        U[5] *
                                                                            (1 +
                                                                                U[6] *
                                                                                    (1 +
                                                                                        U[7])))))))),
                        p = s.multiplyByScalar(e, d, x);
                    return s.multiplyByScalar(t, h, n), s.add(p, n, n);
                }),
                (s.fastSquad = function(e, t, r, n, a, i) {
                    var o = s.fastSlerp(e, t, a, O),
                        u = s.fastSlerp(r, n, a, I);
                    return s.fastSlerp(o, u, 2 * a * (1 - a), i);
                }),
                (s.equals = function(e, t) {
                    return (
                        e === t ||
                        (n(e) && n(t) && e.x === t.x && e.y === t.y && e.z === t.z && e.w === t.w)
                    );
                }),
                (s.equalsEpsilon = function(e, t, r) {
                    return (
                        e === t ||
                        (n(e) &&
                            n(t) &&
                            Math.abs(e.x - t.x) <= r &&
                            Math.abs(e.y - t.y) <= r &&
                            Math.abs(e.z - t.z) <= r &&
                            Math.abs(e.w - t.w) <= r)
                    );
                }),
                (s.ZERO = i(new s(0, 0, 0, 0))),
                (s.IDENTITY = i(new s(0, 0, 0, 1))),
                (s.prototype.clone = function(e) {
                    return s.clone(this, e);
                }),
                (s.prototype.equals = function(e) {
                    return s.equals(this, e);
                }),
                (s.prototype.equalsEpsilon = function(e, t) {
                    return s.equalsEpsilon(this, e, t);
                }),
                (s.prototype.toString = function() {
                    return "(" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + ")";
                }),
                s
            );
        }),
        (function(e) {
            "use strict";
            e("ThirdParty/when", [], function() {
                function e(e, r, n, a) {
                    return t(e).then(r, n, a);
                }
                function t(e) {
                    var t, r;
                    return (
                        e instanceof n
                            ? (t = e)
                            : u(e)
                            ? ((r = o()),
                              e.then(
                                  function(e) {
                                      r.resolve(e);
                                  },
                                  function(e) {
                                      r.reject(e);
                                  },
                                  function(e) {
                                      r.progress(e);
                                  }
                              ),
                              (t = r.promise))
                            : (t = a(e)),
                        t
                    );
                }
                function r(t) {
                    return e(t, i);
                }
                function n(e) {
                    this.then = e;
                }
                function a(e) {
                    return new n(function(r) {
                        try {
                            return t(r ? r(e) : e);
                        } catch (e) {
                            return i(e);
                        }
                    });
                }
                function i(e) {
                    return new n(function(r, n) {
                        try {
                            return n ? t(n(e)) : i(e);
                        } catch (e) {
                            return i(e);
                        }
                    });
                }
                function o() {
                    function e(e, t, r) {
                        return h(e, t, r);
                    }
                    function r(e) {
                        return p(e);
                    }
                    function a(e) {
                        return p(i(e));
                    }
                    function u(e) {
                        return d(e);
                    }
                    var s, c, l, f, h, d, p;
                    return (
                        (c = new n(e)),
                        (s = {
                            then: e,
                            resolve: r,
                            reject: a,
                            progress: u,
                            promise: c,
                            resolver: { resolve: r, reject: a, progress: u }
                        }),
                        (l = []),
                        (f = []),
                        (h = function(e, t, r) {
                            var n, a;
                            return (
                                (n = o()),
                                (a =
                                    "function" == typeof r
                                        ? function(e) {
                                              try {
                                                  n.progress(r(e));
                                              } catch (e) {
                                                  n.progress(e);
                                              }
                                          }
                                        : function(e) {
                                              n.progress(e);
                                          }),
                                l.push(function(r) {
                                    r.then(e, t).then(n.resolve, n.reject, a);
                                }),
                                f.push(a),
                                n.promise
                            );
                        }),
                        (d = function(e) {
                            return y(f, e), e;
                        }),
                        (p = function(e) {
                            return (
                                (e = t(e)), (h = e.then), (p = t), (d = E), y(l, e), (f = l = R), e
                            );
                        }),
                        s
                    );
                }
                function u(e) {
                    return e && "function" == typeof e.then;
                }
                function s(t, r, n, a, i) {
                    return (
                        m(2, arguments),
                        e(t, function(t) {
                            function u(e) {
                                y(e);
                            }
                            function s(e) {
                                p(e);
                            }
                            var c, l, f, h, d, p, y, m, _, v;
                            if (
                                ((_ = t.length >>> 0),
                                (c = Math.max(0, Math.min(r, _))),
                                (f = []),
                                (l = _ - c + 1),
                                (h = []),
                                (d = o()),
                                c)
                            )
                                for (
                                    m = d.progress,
                                        y = function(e) {
                                            h.push(e), --l || ((p = y = E), d.reject(h));
                                        },
                                        p = function(e) {
                                            f.push(e), --c || ((p = y = E), d.resolve(f));
                                        },
                                        v = 0;
                                    v < _;
                                    ++v
                                )
                                    v in t && e(t[v], s, u, m);
                            else d.resolve(f);
                            return d.then(n, a, i);
                        })
                    );
                }
                function c(e, t, r, n) {
                    function a(e) {
                        return t ? t(e[0]) : e[0];
                    }
                    return s(e, 1, a, r, n);
                }
                function l(e, t, r, n) {
                    return m(1, arguments), h(e, _).then(t, r, n);
                }
                function f() {
                    return h(arguments, _);
                }
                function h(t, r) {
                    return e(t, function(t) {
                        var n, a, i, u, s, c;
                        if (((i = a = t.length >>> 0), (n = []), (c = o()), i))
                            for (
                                u = function(t, a) {
                                    e(t, r).then(function(e) {
                                        (n[a] = e), --i || c.resolve(n);
                                    }, c.reject);
                                },
                                    s = 0;
                                s < a;
                                s++
                            )
                                s in t ? u(t[s], s) : --i;
                        else c.resolve(n);
                        return c.promise;
                    });
                }
                function d(t, r) {
                    var n = T.call(arguments, 1);
                    return e(t, function(t) {
                        var a;
                        return (
                            (a = t.length),
                            (n[0] = function(t, n, i) {
                                return e(t, function(t) {
                                    return e(n, function(e) {
                                        return r(t, e, i, a);
                                    });
                                });
                            }),
                            v.apply(t, n)
                        );
                    });
                }
                function p(t, r, n) {
                    var a = arguments.length > 2;
                    return e(
                        t,
                        function(e) {
                            return (e = a ? n : e), r.resolve(e), e;
                        },
                        function(e) {
                            return r.reject(e), i(e);
                        },
                        r.progress
                    );
                }
                function y(e, t) {
                    for (var r, n = 0; (r = e[n++]); ) r(t);
                }
                function m(e, t) {
                    for (var r, n = t.length; n > e; )
                        if (null != (r = t[--n]) && "function" != typeof r)
                            throw new Error("arg " + n + " must be a function");
                }
                function E() {}
                function _(e) {
                    return e;
                }
                var v, T, R;
                return (
                    (e.defer = o),
                    (e.resolve = t),
                    (e.reject = r),
                    (e.join = f),
                    (e.all = l),
                    (e.map = h),
                    (e.reduce = d),
                    (e.any = c),
                    (e.some = s),
                    (e.chain = p),
                    (e.isPromise = u),
                    (n.prototype = {
                        always: function(e, t) {
                            return this.then(e, e, t);
                        },
                        otherwise: function(e) {
                            return this.then(R, e);
                        },
                        yield: function(e) {
                            return this.then(function() {
                                return e;
                            });
                        },
                        spread: function(e) {
                            return this.then(function(t) {
                                return l(t, function(t) {
                                    return e.apply(R, t);
                                });
                            });
                        }
                    }),
                    (T = [].slice),
                    (v =
                        [].reduce ||
                        function(e) {
                            var t, r, n, a, i;
                            if (
                                ((i = 0),
                                (t = Object(this)),
                                (a = t.length >>> 0),
                                (r = arguments),
                                r.length <= 1)
                            )
                                for (;;) {
                                    if (i in t) {
                                        n = t[i++];
                                        break;
                                    }
                                    if (++i >= a) throw new TypeError();
                                }
                            else n = r[1];
                            for (; i < a; ++i) i in t && (n = e(n, t[i], i, t));
                            return n;
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
        define("Core/binarySearch", ["./Check"], function(e) {
            "use strict";
            function t(e, t, r) {
                for (var n, a, i = 0, o = e.length - 1; i <= o; )
                    if (((n = ~~((i + o) / 2)), (a = r(e[n], t)) < 0)) i = n + 1;
                    else {
                        if (!(a > 0)) return n;
                        o = n - 1;
                    }
                return ~(o + 1);
            }
            return t;
        }),
        define("Core/EarthOrientationParametersSample", [], function() {
            "use strict";
            function e(e, t, r, n, a) {
                (this.xPoleWander = e),
                    (this.yPoleWander = t),
                    (this.xPoleOffset = r),
                    (this.yPoleOffset = n),
                    (this.ut1MinusUtc = a);
            }
            return e;
        }),
        define("ThirdParty/sprintf", [], function() {
            function e() {
                var e = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g,
                    t = arguments,
                    r = 0,
                    n = t[r++],
                    a = function(e, t, r, n) {
                        r || (r = " ");
                        var a = e.length >= t ? "" : Array((1 + t - e.length) >>> 0).join(r);
                        return n ? e + a : a + e;
                    },
                    i = function(e, t, r, n, i, o) {
                        var u = n - e.length;
                        return (
                            u > 0 &&
                                (e =
                                    r || !i
                                        ? a(e, n, o, r)
                                        : e.slice(0, t.length) +
                                          a("", u, "0", !0) +
                                          e.slice(t.length)),
                            e
                        );
                    },
                    o = function(e, t, r, n, o, u, s) {
                        var c = e >>> 0;
                        return (
                            (r = (r && c && { 2: "0b", 8: "0", 16: "0x" }[t]) || ""),
                            (e = r + a(c.toString(t), u || 0, "0", !1)),
                            i(e, r, n, o, s)
                        );
                    },
                    u = function(e, t, r, n, a, o) {
                        return null != n && (e = e.slice(0, n)), i(e, "", t, r, a, o);
                    },
                    s = function(e, n, s, c, l, f, h) {
                        var d, p, y, m, E;
                        if ("%%" == e) return "%";
                        for (
                            var _ = !1, v = "", T = !1, R = !1, A = " ", g = s.length, S = 0;
                            s && S < g;
                            S++
                        )
                            switch (s.charAt(S)) {
                                case " ":
                                    v = " ";
                                    break;
                                case "+":
                                    v = "+";
                                    break;
                                case "-":
                                    _ = !0;
                                    break;
                                case "'":
                                    A = s.charAt(S + 1);
                                    break;
                                case "0":
                                    T = !0;
                                    break;
                                case "#":
                                    R = !0;
                            }
                        if (
                            ((c = c
                                ? "*" == c
                                    ? +t[r++]
                                    : "*" == c.charAt(0)
                                    ? +t[c.slice(1, -1)]
                                    : +c
                                : 0),
                            c < 0 && ((c = -c), (_ = !0)),
                            !isFinite(c))
                        )
                            throw new Error("sprintf: (minimum-)width must be finite");
                        switch (
                            ((f = f
                                ? "*" == f
                                    ? +t[r++]
                                    : "*" == f.charAt(0)
                                    ? +t[f.slice(1, -1)]
                                    : +f
                                : "fFeE".indexOf(h) > -1
                                ? 6
                                : "d" == h
                                ? 0
                                : void 0),
                            (E = n ? t[n.slice(0, -1)] : t[r++]),
                            h)
                        ) {
                            case "s":
                                return u(String(E), _, c, f, T, A);
                            case "c":
                                return u(String.fromCharCode(+E), _, c, f, T);
                            case "b":
                                return o(E, 2, R, _, c, f, T);
                            case "o":
                                return o(E, 8, R, _, c, f, T);
                            case "x":
                                return o(E, 16, R, _, c, f, T);
                            case "X":
                                return o(E, 16, R, _, c, f, T).toUpperCase();
                            case "u":
                                return o(E, 10, R, _, c, f, T);
                            case "i":
                            case "d":
                                return (
                                    (d = +E || 0),
                                    (d = Math.round(d - (d % 1))),
                                    (p = d < 0 ? "-" : v),
                                    (E = p + a(String(Math.abs(d)), f, "0", !1)),
                                    i(E, p, _, c, T)
                                );
                            case "e":
                            case "E":
                            case "f":
                            case "F":
                            case "g":
                            case "G":
                                return (
                                    (d = +E),
                                    (p = d < 0 ? "-" : v),
                                    (y = ["toExponential", "toFixed", "toPrecision"][
                                        "efg".indexOf(h.toLowerCase())
                                    ]),
                                    (m = ["toString", "toUpperCase"]["eEfFgG".indexOf(h) % 2]),
                                    (E = p + Math.abs(d)[y](f)),
                                    i(E, p, _, c, T)[m]()
                                );
                            default:
                                return e;
                        }
                    };
                return n.replace(e, s);
            }
            return e;
        }),
        define("Core/GregorianDate", [], function() {
            "use strict";
            function e(e, t, r, n, a, i, o, u) {
                (this.year = e),
                    (this.month = t),
                    (this.day = r),
                    (this.hour = n),
                    (this.minute = a),
                    (this.second = i),
                    (this.millisecond = o),
                    (this.isLeapSecond = u);
            }
            return e;
        }),
        define("Core/isLeapYear", ["./DeveloperError"], function(e) {
            "use strict";
            function t(e) {
                return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
            }
            return t;
        }),
        define("Core/LeapSecond", [], function() {
            "use strict";
            function e(e, t) {
                (this.julianDate = e), (this.offset = t);
            }
            return e;
        }),
        define("Core/TimeConstants", ["./freezeObject"], function(e) {
            "use strict";
            return e({
                SECONDS_PER_MILLISECOND: 0.001,
                SECONDS_PER_MINUTE: 60,
                MINUTES_PER_HOUR: 60,
                HOURS_PER_DAY: 24,
                SECONDS_PER_HOUR: 3600,
                MINUTES_PER_DAY: 1440,
                SECONDS_PER_DAY: 86400,
                DAYS_PER_JULIAN_CENTURY: 36525,
                PICOSECOND: 1e-9,
                MODIFIED_JULIAN_DATE_DIFFERENCE: 2400000.5
            });
        }),
        define("Core/TimeStandard", ["./freezeObject"], function(e) {
            "use strict";
            return e({ UTC: 0, TAI: 1 });
        }),
        define("Core/JulianDate", [
            "../ThirdParty/sprintf",
            "./binarySearch",
            "./defaultValue",
            "./defined",
            "./DeveloperError",
            "./GregorianDate",
            "./isLeapYear",
            "./LeapSecond",
            "./TimeConstants",
            "./TimeStandard"
        ], function(e, t, r, n, a, i, o, u, s, c) {
            "use strict";
            function l(e, t) {
                return y.compare(e.julianDate, t.julianDate);
            }
            function f(e) {
                _.julianDate = e;
                var r = y.leapSeconds,
                    n = t(r, _, l);
                n < 0 && (n = ~n), n >= r.length && (n = r.length - 1);
                var a = r[n].offset;
                if (n > 0) {
                    y.secondsDifference(r[n].julianDate, e) > a && (n--, (a = r[n].offset));
                }
                y.addSeconds(e, a, e);
            }
            function h(e, r) {
                _.julianDate = e;
                var n = y.leapSeconds,
                    a = t(n, _, l);
                if ((a < 0 && (a = ~a), 0 === a)) return y.addSeconds(e, -n[0].offset, r);
                if (a >= n.length) return y.addSeconds(e, -n[a - 1].offset, r);
                var i = y.secondsDifference(n[a].julianDate, e);
                return 0 === i
                    ? y.addSeconds(e, -n[a].offset, r)
                    : i <= 1
                    ? void 0
                    : y.addSeconds(e, -n[--a].offset, r);
            }
            function d(e, t, r) {
                var n = (t / s.SECONDS_PER_DAY) | 0;
                return (
                    (e += n),
                    (t -= s.SECONDS_PER_DAY * n),
                    t < 0 && (e--, (t += s.SECONDS_PER_DAY)),
                    (r.dayNumber = e),
                    (r.secondsOfDay = t),
                    r
                );
            }
            function p(e, t, r, n, a, i, o) {
                var u = ((t - 14) / 12) | 0,
                    c = e + 4800 + u,
                    l =
                        (((1461 * c) / 4) | 0) +
                        (((367 * (t - 2 - 12 * u)) / 12) | 0) -
                        (((3 * (((c + 100) / 100) | 0)) / 4) | 0) +
                        r -
                        32075;
                (n -= 12) < 0 && (n += 24);
                var f =
                    i +
                    (n * s.SECONDS_PER_HOUR +
                        a * s.SECONDS_PER_MINUTE +
                        o * s.SECONDS_PER_MILLISECOND);
                return f >= 43200 && (l -= 1), [l, f];
            }
            function y(e, t, n) {
                (this.dayNumber = void 0),
                    (this.secondsOfDay = void 0),
                    (e = r(e, 0)),
                    (t = r(t, 0)),
                    (n = r(n, c.UTC));
                var a = 0 | e;
                (t += (e - a) * s.SECONDS_PER_DAY), d(a, t, this), n === c.UTC && f(this);
            }
            var m = new i(),
                E = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                _ = new u(),
                v = /^(\d{4})$/,
                T = /^(\d{4})-(\d{2})$/,
                R = /^(\d{4})-?(\d{3})$/,
                A = /^(\d{4})-?W(\d{2})-?(\d{1})?$/,
                g = /^(\d{4})-?(\d{2})-?(\d{2})$/,
                S = /([Z+\-])?(\d{2})?:?(\d{2})?$/,
                w = /^(\d{2})(\.\d+)?/.source + S.source,
                N = /^(\d{2}):?(\d{2})(\.\d+)?/.source + S.source,
                O = /^(\d{2}):?(\d{2}):?(\d{2})(\.\d+)?/.source + S.source;
            (y.fromGregorianDate = function(e, t) {
                var r = p(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
                return n(t) ? (d(r[0], r[1], t), f(t), t) : new y(r[0], r[1], c.UTC);
            }),
                (y.fromDate = function(e, t) {
                    var r = p(
                        e.getUTCFullYear(),
                        e.getUTCMonth() + 1,
                        e.getUTCDate(),
                        e.getUTCHours(),
                        e.getUTCMinutes(),
                        e.getUTCSeconds(),
                        e.getUTCMilliseconds()
                    );
                    return n(t) ? (d(r[0], r[1], t), f(t), t) : new y(r[0], r[1], c.UTC);
                }),
                (y.fromIso8601 = function(e, t) {
                    e = e.replace(",", ".");
                    var r,
                        a,
                        i,
                        u = e.split("T"),
                        s = 1,
                        l = 1,
                        h = 0,
                        m = 0,
                        _ = 0,
                        S = 0,
                        I = u[0],
                        x = u[1];
                    if (null !== (u = I.match(g))) (r = +u[1]), (s = +u[2]), (l = +u[3]);
                    else if (null !== (u = I.match(T))) (r = +u[1]), (s = +u[2]);
                    else if (null !== (u = I.match(v))) r = +u[1];
                    else {
                        var M;
                        if (null !== (u = I.match(R))) (r = +u[1]), (M = +u[2]), (i = o(r));
                        else if (null !== (u = I.match(A))) {
                            r = +u[1];
                            var C = +u[2],
                                P = +u[3] || 0,
                                b = new Date(Date.UTC(r, 0, 4));
                            M = 7 * C + P - b.getUTCDay() - 3;
                        }
                        (a = new Date(Date.UTC(r, 0, 1))),
                            a.setUTCDate(M),
                            (s = a.getUTCMonth() + 1),
                            (l = a.getUTCDate());
                    }
                    i = o(r);
                    var U;
                    if (n(x)) {
                        (u = x.match(O)),
                            null !== u
                                ? ((h = +u[1]),
                                  (m = +u[2]),
                                  (_ = +u[3]),
                                  (S = 1e3 * +(u[4] || 0)),
                                  (U = 5))
                                : ((u = x.match(N)),
                                  null !== u
                                      ? ((h = +u[1]), (m = +u[2]), (_ = 60 * +(u[3] || 0)), (U = 4))
                                      : null !== (u = x.match(w)) &&
                                        ((h = +u[1]), (m = 60 * +(u[2] || 0)), (U = 3)));
                        var D = u[U],
                            L = +u[U + 1],
                            F = +(u[U + 2] || 0);
                        switch (D) {
                            case "+":
                                (h -= L), (m -= F);
                                break;
                            case "-":
                                (h += L), (m += F);
                                break;
                            case "Z":
                                break;
                            default:
                                m += new Date(Date.UTC(r, s - 1, l, h, m)).getTimezoneOffset();
                        }
                    }
                    var B = 60 === _;
                    for (B && _--; m >= 60; ) (m -= 60), h++;
                    for (; h >= 24; ) (h -= 24), l++;
                    for (a = i && 2 === s ? 29 : E[s - 1]; l > a; )
                        (l -= a),
                            s++,
                            s > 12 && ((s -= 12), r++),
                            (a = i && 2 === s ? 29 : E[s - 1]);
                    for (; m < 0; ) (m += 60), h--;
                    for (; h < 0; ) (h += 24), l--;
                    for (; l < 1; )
                        s--,
                            s < 1 && ((s += 12), r--),
                            (a = i && 2 === s ? 29 : E[s - 1]),
                            (l += a);
                    var z = p(r, s, l, h, m, _, S);
                    return (
                        n(t) ? (d(z[0], z[1], t), f(t)) : (t = new y(z[0], z[1], c.UTC)),
                        B && y.addSeconds(t, 1, t),
                        t
                    );
                }),
                (y.now = function(e) {
                    return y.fromDate(new Date(), e);
                });
            var I = new y(0, 0, c.TAI);
            return (
                (y.toGregorianDate = function(e, t) {
                    var r = !1,
                        a = h(e, I);
                    n(a) || (y.addSeconds(e, -1, I), (a = h(I, I)), (r = !0));
                    var o = a.dayNumber,
                        u = a.secondsOfDay;
                    u >= 43200 && (o += 1);
                    var c = (o + 68569) | 0,
                        l = ((4 * c) / 146097) | 0;
                    c = (c - (((146097 * l + 3) / 4) | 0)) | 0;
                    var f = ((4e3 * (c + 1)) / 1461001) | 0;
                    c = (c - (((1461 * f) / 4) | 0) + 31) | 0;
                    var d = ((80 * c) / 2447) | 0,
                        p = (c - (((2447 * d) / 80) | 0)) | 0;
                    c = (d / 11) | 0;
                    var m = (d + 2 - 12 * c) | 0,
                        E = (100 * (l - 49) + f + c) | 0,
                        _ = (u / s.SECONDS_PER_HOUR) | 0,
                        v = u - _ * s.SECONDS_PER_HOUR,
                        T = (v / s.SECONDS_PER_MINUTE) | 0;
                    v -= T * s.SECONDS_PER_MINUTE;
                    var R = 0 | v,
                        A = (v - R) / s.SECONDS_PER_MILLISECOND;
                    return (
                        (_ += 12),
                        _ > 23 && (_ -= 24),
                        r && (R += 1),
                        n(t)
                            ? ((t.year = E),
                              (t.month = m),
                              (t.day = p),
                              (t.hour = _),
                              (t.minute = T),
                              (t.second = R),
                              (t.millisecond = A),
                              (t.isLeapSecond = r),
                              t)
                            : new i(E, m, p, _, T, R, A, r)
                    );
                }),
                (y.toDate = function(e) {
                    var t = y.toGregorianDate(e, m),
                        r = t.second;
                    return (
                        t.isLeapSecond && (r -= 1),
                        new Date(
                            Date.UTC(t.year, t.month - 1, t.day, t.hour, t.minute, r, t.millisecond)
                        )
                    );
                }),
                (y.toIso8601 = function(t, r) {
                    var a = y.toGregorianDate(t, m),
                        i = a.year,
                        o = a.month,
                        u = a.day,
                        s = a.hour,
                        c = a.minute,
                        l = a.second,
                        f = a.millisecond;
                    1e4 === i &&
                        1 === o &&
                        1 === u &&
                        0 === s &&
                        0 === c &&
                        0 === l &&
                        0 === f &&
                        ((i = 9999), (o = 12), (u = 31), (s = 24));
                    var h;
                    return n(r) || 0 === f
                        ? n(r) && 0 !== r
                            ? ((h = (0.01 * f)
                                  .toFixed(r)
                                  .replace(".", "")
                                  .slice(0, r)),
                              e("%04d-%02d-%02dT%02d:%02d:%02d.%sZ", i, o, u, s, c, l, h))
                            : e("%04d-%02d-%02dT%02d:%02d:%02dZ", i, o, u, s, c, l)
                        : ((h = (0.01 * f).toString().replace(".", "")),
                          e("%04d-%02d-%02dT%02d:%02d:%02d.%sZ", i, o, u, s, c, l, h));
                }),
                (y.clone = function(e, t) {
                    if (n(e))
                        return n(t)
                            ? ((t.dayNumber = e.dayNumber), (t.secondsOfDay = e.secondsOfDay), t)
                            : new y(e.dayNumber, e.secondsOfDay, c.TAI);
                }),
                (y.compare = function(e, t) {
                    var r = e.dayNumber - t.dayNumber;
                    return 0 !== r ? r : e.secondsOfDay - t.secondsOfDay;
                }),
                (y.equals = function(e, t) {
                    return (
                        e === t ||
                        (n(e) &&
                            n(t) &&
                            e.dayNumber === t.dayNumber &&
                            e.secondsOfDay === t.secondsOfDay)
                    );
                }),
                (y.equalsEpsilon = function(e, t, r) {
                    return e === t || (n(e) && n(t) && Math.abs(y.secondsDifference(e, t)) <= r);
                }),
                (y.totalDays = function(e) {
                    return e.dayNumber + e.secondsOfDay / s.SECONDS_PER_DAY;
                }),
                (y.secondsDifference = function(e, t) {
                    return (
                        (e.dayNumber - t.dayNumber) * s.SECONDS_PER_DAY +
                        (e.secondsOfDay - t.secondsOfDay)
                    );
                }),
                (y.daysDifference = function(e, t) {
                    return (
                        e.dayNumber -
                        t.dayNumber +
                        (e.secondsOfDay - t.secondsOfDay) / s.SECONDS_PER_DAY
                    );
                }),
                (y.computeTaiMinusUtc = function(e) {
                    _.julianDate = e;
                    var r = y.leapSeconds,
                        n = t(r, _, l);
                    return n < 0 && ((n = ~n), --n < 0 && (n = 0)), r[n].offset;
                }),
                (y.addSeconds = function(e, t, r) {
                    return d(e.dayNumber, e.secondsOfDay + t, r);
                }),
                (y.addMinutes = function(e, t, r) {
                    var n = e.secondsOfDay + t * s.SECONDS_PER_MINUTE;
                    return d(e.dayNumber, n, r);
                }),
                (y.addHours = function(e, t, r) {
                    var n = e.secondsOfDay + t * s.SECONDS_PER_HOUR;
                    return d(e.dayNumber, n, r);
                }),
                (y.addDays = function(e, t, r) {
                    return d(e.dayNumber + t, e.secondsOfDay, r);
                }),
                (y.lessThan = function(e, t) {
                    return y.compare(e, t) < 0;
                }),
                (y.lessThanOrEquals = function(e, t) {
                    return y.compare(e, t) <= 0;
                }),
                (y.greaterThan = function(e, t) {
                    return y.compare(e, t) > 0;
                }),
                (y.greaterThanOrEquals = function(e, t) {
                    return y.compare(e, t) >= 0;
                }),
                (y.prototype.clone = function(e) {
                    return y.clone(this, e);
                }),
                (y.prototype.equals = function(e) {
                    return y.equals(this, e);
                }),
                (y.prototype.equalsEpsilon = function(e, t) {
                    return y.equalsEpsilon(this, e, t);
                }),
                (y.prototype.toString = function() {
                    return y.toIso8601(this);
                }),
                (y.leapSeconds = [
                    new u(new y(2441317, 43210, c.TAI), 10),
                    new u(new y(2441499, 43211, c.TAI), 11),
                    new u(new y(2441683, 43212, c.TAI), 12),
                    new u(new y(2442048, 43213, c.TAI), 13),
                    new u(new y(2442413, 43214, c.TAI), 14),
                    new u(new y(2442778, 43215, c.TAI), 15),
                    new u(new y(2443144, 43216, c.TAI), 16),
                    new u(new y(2443509, 43217, c.TAI), 17),
                    new u(new y(2443874, 43218, c.TAI), 18),
                    new u(new y(2444239, 43219, c.TAI), 19),
                    new u(new y(2444786, 43220, c.TAI), 20),
                    new u(new y(2445151, 43221, c.TAI), 21),
                    new u(new y(2445516, 43222, c.TAI), 22),
                    new u(new y(2446247, 43223, c.TAI), 23),
                    new u(new y(2447161, 43224, c.TAI), 24),
                    new u(new y(2447892, 43225, c.TAI), 25),
                    new u(new y(2448257, 43226, c.TAI), 26),
                    new u(new y(2448804, 43227, c.TAI), 27),
                    new u(new y(2449169, 43228, c.TAI), 28),
                    new u(new y(2449534, 43229, c.TAI), 29),
                    new u(new y(2450083, 43230, c.TAI), 30),
                    new u(new y(2450630, 43231, c.TAI), 31),
                    new u(new y(2451179, 43232, c.TAI), 32),
                    new u(new y(2453736, 43233, c.TAI), 33),
                    new u(new y(2454832, 43234, c.TAI), 34),
                    new u(new y(2456109, 43235, c.TAI), 35),
                    new u(new y(2457204, 43236, c.TAI), 36),
                    new u(new y(2457754, 43237, c.TAI), 37)
                ]),
                y
            );
        }),
        define("ThirdParty/Uri", [], function() {
            function e(t) {
                if (t instanceof e)
                    (this.scheme = t.scheme),
                        (this.authority = t.authority),
                        (this.path = t.path),
                        (this.query = t.query),
                        (this.fragment = t.fragment);
                else if (t) {
                    var r = n.exec(t);
                    (this.scheme = r[1]),
                        (this.authority = r[2]),
                        (this.path = r[3]),
                        (this.query = r[4]),
                        (this.fragment = r[5]);
                }
            }
            function t(e) {
                var t = unescape(e);
                return i.test(t) ? t : e.toUpperCase();
            }
            function r(e, t, r, n) {
                return (t || "") + r.toLowerCase() + (n || "");
            }
            (e.prototype.scheme = null),
                (e.prototype.authority = null),
                (e.prototype.path = ""),
                (e.prototype.query = null),
                (e.prototype.fragment = null);
            var n = new RegExp(
                "^(?:([^:/?#]+):)?(?://([^/?#]*))?([^?#]*)(?:\\?([^#]*))?(?:#(.*))?$"
            );
            (e.prototype.getScheme = function() {
                return this.scheme;
            }),
                (e.prototype.getAuthority = function() {
                    return this.authority;
                }),
                (e.prototype.getPath = function() {
                    return this.path;
                }),
                (e.prototype.getQuery = function() {
                    return this.query;
                }),
                (e.prototype.getFragment = function() {
                    return this.fragment;
                }),
                (e.prototype.isAbsolute = function() {
                    return !!this.scheme && !this.fragment;
                }),
                (e.prototype.isSameDocumentAs = function(e) {
                    return (
                        e.scheme == this.scheme &&
                        e.authority == this.authority &&
                        e.path == this.path &&
                        e.query == this.query
                    );
                }),
                (e.prototype.equals = function(e) {
                    return this.isSameDocumentAs(e) && e.fragment == this.fragment;
                }),
                (e.prototype.normalize = function() {
                    this.removeDotSegments(),
                        this.scheme && (this.scheme = this.scheme.toLowerCase()),
                        this.authority &&
                            (this.authority = this.authority.replace(o, r).replace(a, t)),
                        this.path && (this.path = this.path.replace(a, t)),
                        this.query && (this.query = this.query.replace(a, t)),
                        this.fragment && (this.fragment = this.fragment.replace(a, t));
                });
            var a = /%[0-9a-z]{2}/gi,
                i = /[a-zA-Z0-9\-\._~]/,
                o = /(.*@)?([^@:]*)(:.*)?/;
            return (
                (e.prototype.resolve = function(t) {
                    var r = new e();
                    return (
                        this.scheme
                            ? ((r.scheme = this.scheme),
                              (r.authority = this.authority),
                              (r.path = this.path),
                              (r.query = this.query))
                            : ((r.scheme = t.scheme),
                              this.authority
                                  ? ((r.authority = this.authority),
                                    (r.path = this.path),
                                    (r.query = this.query))
                                  : ((r.authority = t.authority),
                                    "" == this.path
                                        ? ((r.path = t.path), (r.query = this.query || t.query))
                                        : ("/" == this.path.charAt(0)
                                              ? ((r.path = this.path), r.removeDotSegments())
                                              : (t.authority && "" == t.path
                                                    ? (r.path = "/" + this.path)
                                                    : (r.path =
                                                          t.path.substring(
                                                              0,
                                                              t.path.lastIndexOf("/") + 1
                                                          ) + this.path),
                                                r.removeDotSegments()),
                                          (r.query = this.query)))),
                        (r.fragment = this.fragment),
                        r
                    );
                }),
                (e.prototype.removeDotSegments = function() {
                    var e,
                        t = this.path.split("/"),
                        r = [],
                        n = "" == t[0];
                    n && t.shift();
                    for ("" == t[0] && t.shift(); t.length; )
                        (e = t.shift()), ".." == e ? r.pop() : "." != e && r.push(e);
                    ("." != e && ".." != e) || r.push(""),
                        n && r.unshift(""),
                        (this.path = r.join("/"));
                }),
                (e.prototype.toString = function() {
                    var e = "";
                    return (
                        this.scheme && (e += this.scheme + ":"),
                        this.authority && (e += "//" + this.authority),
                        (e += this.path),
                        this.query && (e += "?" + this.query),
                        this.fragment && (e += "#" + this.fragment),
                        e
                    );
                }),
                e
            );
        }),
        define("Core/appendForwardSlash", [], function() {
            "use strict";
            function e(e) {
                return (0 !== e.length && "/" === e[e.length - 1]) || (e += "/"), e;
            }
            return e;
        }),
        define("Core/clone", ["./defaultValue"], function(e) {
            "use strict";
            function t(r, n) {
                if (null === r || "object" != typeof r) return r;
                n = e(n, !1);
                var a = new r.constructor();
                for (var i in r)
                    if (r.hasOwnProperty(i)) {
                        var o = r[i];
                        n && (o = t(o, n)), (a[i] = o);
                    }
                return a;
            }
            return t;
        }),
        define("Core/combine", ["./defaultValue", "./defined"], function(e, t) {
            "use strict";
            function r(n, a, i) {
                i = e(i, !1);
                var o,
                    u,
                    s,
                    c = {},
                    l = t(n),
                    f = t(a);
                if (l)
                    for (o in n)
                        n.hasOwnProperty(o) &&
                            ((u = n[o]),
                            f && i && "object" == typeof u && a.hasOwnProperty(o)
                                ? ((s = a[o]), (c[o] = "object" == typeof s ? r(u, s, i) : u))
                                : (c[o] = u));
                if (f)
                    for (o in a)
                        a.hasOwnProperty(o) && !c.hasOwnProperty(o) && ((s = a[o]), (c[o] = s));
                return c;
            }
            return r;
        }),
        define("Core/oneTimeWarning", ["./defaultValue", "./defined", "./DeveloperError"], function(
            e,
            t,
            r
        ) {
            "use strict";
            function n(r, n) {
                t(a[r]) || ((a[r] = !0), console.warn(e(n, r)));
            }
            var a = {};
            return (
                (n.geometryOutlines =
                    "Entity geometry outlines are unsupported on terrain. Outlines will be disabled. To enable outlines, disable geometry terrain clamping by explicitly setting height to 0."),
                (n.geometryZIndex =
                    "Entity geometry with zIndex are unsupported when height or extrudedHeight are defined.  zIndex will be ignored"),
                (n.geometryHeightReference =
                    "Entity corridor, ellipse, polygon or rectangle with heightReference must also have a defined height.  heightReference will be ignored"),
                (n.geometryExtrudedHeightReference =
                    "Entity corridor, ellipse, polygon or rectangle with extrudedHeightReference must also have a defined extrudedHeight.  extrudedHeightReference will be ignored"),
                n
            );
        }),
        define("Core/deprecationWarning", [
            "./defined",
            "./DeveloperError",
            "./oneTimeWarning"
        ], function(e, t, r) {
            "use strict";
            function n(e, t) {
                r(e, t);
            }
            return n;
        }),
        define("Core/getAbsoluteUri", [
            "../ThirdParty/Uri",
            "./defaultValue",
            "./defined",
            "./DeveloperError"
        ], function(e, t, r, n) {
            "use strict";
            function a(e, t) {
                var r;
                return "undefined" != typeof document && (r = document), a._implementation(e, t, r);
            }
            return (
                (a._implementation = function(n, a, i) {
                    if (!r(a)) {
                        if (void 0 === i) return n;
                        a = t(i.baseURI, i.location.href);
                    }
                    var o = new e(a);
                    return new e(n).resolve(o).toString();
                }),
                a
            );
        }),
        define("Core/getBaseUri", ["../ThirdParty/Uri", "./defined", "./DeveloperError"], function(
            e,
            t,
            r
        ) {
            "use strict";
            function n(r, n) {
                var a = "",
                    i = r.lastIndexOf("/");
                return (
                    -1 !== i && (a = r.substring(0, i + 1)),
                    n
                        ? ((r = new e(r)),
                          t(r.query) && (a += "?" + r.query),
                          t(r.fragment) && (a += "#" + r.fragment),
                          a)
                        : a
                );
            }
            return n;
        }),
        define("Core/getExtensionFromUri", [
            "../ThirdParty/Uri",
            "./defined",
            "./DeveloperError"
        ], function(e, t, r) {
            "use strict";
            function n(t) {
                var r = new e(t);
                r.normalize();
                var n = r.path,
                    a = n.lastIndexOf("/");
                return (
                    -1 !== a && (n = n.substr(a + 1)),
                    (a = n.lastIndexOf(".")),
                    (n = -1 === a ? "" : n.substr(a + 1))
                );
            }
            return n;
        }),
        define("Core/isBlobUri", ["./Check"], function(e) {
            "use strict";
            function t(e) {
                return r.test(e);
            }
            var r = /^blob:/i;
            return t;
        }),
        define("Core/isCrossOriginUrl", ["./defined"], function(e) {
            "use strict";
            function t(t) {
                e(r) || (r = document.createElement("a")), (r.href = window.location.href);
                var n = r.host,
                    a = r.protocol;
                return (r.href = t), (r.href = r.href), a !== r.protocol || n !== r.host;
            }
            var r;
            return t;
        }),
        define("Core/isDataUri", ["./Check"], function(e) {
            "use strict";
            function t(e) {
                return r.test(e);
            }
            var r = /^data:/i;
            return t;
        }),
        define("Core/loadAndExecuteScript", ["../ThirdParty/when"], function(e) {
            "use strict";
            function t(t) {
                var r = e.defer(),
                    n = document.createElement("script");
                (n.async = !0), (n.src = t);
                var a = document.getElementsByTagName("head")[0];
                return (
                    (n.onload = function() {
                        (n.onload = void 0), a.removeChild(n), r.resolve();
                    }),
                    (n.onerror = function(e) {
                        r.reject(e);
                    }),
                    a.appendChild(n),
                    r.promise
                );
            }
            return t;
        }),
        define("Core/isArray", ["./defined"], function(e) {
            "use strict";
            var t = Array.isArray;
            return (
                e(t) ||
                    (t = function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e);
                    }),
                t
            );
        }),
        define("Core/objectToQuery", ["./defined", "./DeveloperError", "./isArray"], function(
            e,
            t,
            r
        ) {
            "use strict";
            function n(e) {
                var t = "";
                for (var n in e)
                    if (e.hasOwnProperty(n)) {
                        var a = e[n],
                            i = encodeURIComponent(n) + "=";
                        if (r(a))
                            for (var o = 0, u = a.length; o < u; ++o)
                                t += i + encodeURIComponent(a[o]) + "&";
                        else t += i + encodeURIComponent(a) + "&";
                    }
                return (t = t.slice(0, -1));
            }
            return n;
        }),
        define("Core/queryToObject", ["./defined", "./DeveloperError", "./isArray"], function(
            e,
            t,
            r
        ) {
            "use strict";
            function n(t) {
                var n = {};
                if ("" === t) return n;
                for (
                    var a = t.replace(/\+/g, "%20").split(/[&;]/), i = 0, o = a.length;
                    i < o;
                    ++i
                ) {
                    var u = a[i].split("="),
                        s = decodeURIComponent(u[0]),
                        c = u[1];
                    c = e(c) ? decodeURIComponent(c) : "";
                    var l = n[s];
                    "string" == typeof l ? (n[s] = [l, c]) : r(l) ? l.push(c) : (n[s] = c);
                }
                return n;
            }
            return n;
        }),
        define("Core/RequestState", ["../Core/freezeObject"], function(e) {
            "use strict";
            return e({ UNISSUED: 0, ISSUED: 1, ACTIVE: 2, RECEIVED: 3, CANCELLED: 4, FAILED: 5 });
        }),
        define("Core/RequestType", ["../Core/freezeObject"], function(e) {
            "use strict";
            return e({ TERRAIN: 0, IMAGERY: 1, TILES3D: 2, OTHER: 3 });
        }),
        define("Core/Request", [
            "./defaultValue",
            "./defined",
            "./RequestState",
            "./RequestType"
        ], function(e, t, r, n) {
            "use strict";
            function a(t) {
                t = e(t, e.EMPTY_OBJECT);
                var a = e(t.throttleByServer, !1),
                    i = a || e(t.throttle, !1);
                (this.url = t.url),
                    (this.requestFunction = t.requestFunction),
                    (this.cancelFunction = t.cancelFunction),
                    (this.priorityFunction = t.priorityFunction),
                    (this.priority = e(t.priority, 0)),
                    (this.throttle = i),
                    (this.throttleByServer = a),
                    (this.type = e(t.type, n.OTHER)),
                    (this.serverKey = void 0),
                    (this.state = r.UNISSUED),
                    (this.deferred = void 0),
                    (this.cancelled = !1);
            }
            return (
                (a.prototype.cancel = function() {
                    this.cancelled = !0;
                }),
                (a.prototype.clone = function(e) {
                    return t(e)
                        ? ((e.url = this.url),
                          (e.requestFunction = this.requestFunction),
                          (e.cancelFunction = this.cancelFunction),
                          (e.priorityFunction = this.priorityFunction),
                          (e.priority = this.priority),
                          (e.throttle = this.throttle),
                          (e.throttleByServer = this.throttleByServer),
                          (e.type = this.type),
                          (e.serverKey = this.serverKey),
                          (e.state = this.RequestState.UNISSUED),
                          (e.deferred = void 0),
                          (e.cancelled = !1),
                          e)
                        : new a(this);
                }),
                a
            );
        }),
        define("Core/parseResponseHeaders", [], function() {
            "use strict";
            function e(e) {
                var t = {};
                if (!e) return t;
                for (var r = e.split("\r\n"), n = 0; n < r.length; ++n) {
                    var a = r[n],
                        i = a.indexOf(": ");
                    if (i > 0) {
                        var o = a.substring(0, i),
                            u = a.substring(i + 2);
                        t[o] = u;
                    }
                }
                return t;
            }
            return e;
        }),
        define("Core/RequestErrorEvent", ["./defined", "./parseResponseHeaders"], function(e, t) {
            "use strict";
            function r(e, r, n) {
                (this.statusCode = e),
                    (this.response = r),
                    (this.responseHeaders = n),
                    "string" == typeof this.responseHeaders &&
                        (this.responseHeaders = t(this.responseHeaders));
            }
            return (
                (r.prototype.toString = function() {
                    var t = "Request has failed.";
                    return e(this.statusCode) && (t += " Status Code: " + this.statusCode), t;
                }),
                r
            );
        }),
        define("Core/Event", ["./Check", "./defined", "./defineProperties"], function(e, t, r) {
            "use strict";
            function n() {
                (this._listeners = []),
                    (this._scopes = []),
                    (this._toRemove = []),
                    (this._insideRaiseEvent = !1);
            }
            function a(e, t) {
                return t - e;
            }
            return (
                r(n.prototype, {
                    numberOfListeners: {
                        get: function() {
                            return this._listeners.length - this._toRemove.length;
                        }
                    }
                }),
                (n.prototype.addEventListener = function(e, t) {
                    this._listeners.push(e), this._scopes.push(t);
                    var r = this;
                    return function() {
                        r.removeEventListener(e, t);
                    };
                }),
                (n.prototype.removeEventListener = function(e, t) {
                    for (
                        var r = this._listeners, n = this._scopes, a = -1, i = 0;
                        i < r.length;
                        i++
                    )
                        if (r[i] === e && n[i] === t) {
                            a = i;
                            break;
                        }
                    return (
                        -1 !== a &&
                        (this._insideRaiseEvent
                            ? (this._toRemove.push(a), (r[a] = void 0), (n[a] = void 0))
                            : (r.splice(a, 1), n.splice(a, 1)),
                        !0)
                    );
                }),
                (n.prototype.raiseEvent = function() {
                    this._insideRaiseEvent = !0;
                    var e,
                        r = this._listeners,
                        n = this._scopes,
                        i = r.length;
                    for (e = 0; e < i; e++) {
                        var o = r[e];
                        t(o) && r[e].apply(n[e], arguments);
                    }
                    var u = this._toRemove;
                    if ((i = u.length) > 0) {
                        for (u.sort(a), e = 0; e < i; e++) {
                            var s = u[e];
                            r.splice(s, 1), n.splice(s, 1);
                        }
                        u.length = 0;
                    }
                    this._insideRaiseEvent = !1;
                }),
                n
            );
        }),
        define("Core/Heap", [
            "./Check",
            "./defaultValue",
            "./defined",
            "./defineProperties"
        ], function(e, t, r, n) {
            "use strict";
            function a(e) {
                (this._comparator = e.comparator),
                    (this._array = []),
                    (this._length = 0),
                    (this._maximumLength = void 0);
            }
            function i(e, t, r) {
                var n = e[t];
                (e[t] = e[r]), (e[r] = n);
            }
            return (
                n(a.prototype, {
                    length: {
                        get: function() {
                            return this._length;
                        }
                    },
                    internalArray: {
                        get: function() {
                            return this._array;
                        }
                    },
                    maximumLength: {
                        get: function() {
                            return this._maximumLength;
                        },
                        set: function(e) {
                            (this._maximumLength = e),
                                this._length > e &&
                                    e > 0 &&
                                    ((this._length = e), (this._array.length = e));
                        }
                    },
                    comparator: {
                        get: function() {
                            return this._comparator;
                        }
                    }
                }),
                (a.prototype.reserve = function(e) {
                    (e = t(e, this._length)), (this._array.length = e);
                }),
                (a.prototype.heapify = function(e) {
                    e = t(e, 0);
                    for (
                        var r = this._length, n = this._comparator, a = this._array, o = -1, u = !0;
                        u;

                    ) {
                        var s = 2 * (e + 1),
                            c = s - 1;
                        (o = c < r && n(a[c], a[e]) < 0 ? c : e),
                            s < r && n(a[s], a[o]) < 0 && (o = s),
                            o !== e ? (i(a, o, e), (e = o)) : (u = !1);
                    }
                }),
                (a.prototype.resort = function() {
                    for (var e = this._length, t = Math.ceil(e / 2); t >= 0; --t) this.heapify(t);
                }),
                (a.prototype.insert = function(e) {
                    var t = this._array,
                        n = this._comparator,
                        a = this._maximumLength,
                        o = this._length++;
                    for (o < t.length ? (t[o] = e) : t.push(e); 0 !== o; ) {
                        var u = Math.floor((o - 1) / 2);
                        if (!(n(t[o], t[u]) < 0)) break;
                        i(t, o, u), (o = u);
                    }
                    var s;
                    return r(a) && this._length > a && ((s = t[a]), (this._length = a)), s;
                }),
                (a.prototype.pop = function(e) {
                    if (((e = t(e, 0)), 0 !== this._length)) {
                        var r = this._array,
                            n = r[e];
                        return i(r, e, --this._length), this.heapify(e), n;
                    }
                }),
                a
            );
        }),
        define("Core/RequestScheduler", [
            "../ThirdParty/Uri",
            "../ThirdParty/when",
            "./Check",
            "./defaultValue",
            "./defined",
            "./defineProperties",
            "./Event",
            "./Heap",
            "./isBlobUri",
            "./isDataUri",
            "./RequestState"
        ], function(e, t, r, n, a, i, o, u, s, c, l) {
            "use strict";
            function f(e, t) {
                return e.priority - t.priority;
            }
            function h() {}
            function d(e) {
                a(e.priorityFunction) && (e.priority = e.priorityFunction());
            }
            function p(e) {
                var t = n(h.requestsByServer[e], h.maximumRequestsPerServer);
                return N[e] < t;
            }
            function y(e) {
                return (
                    e.state === l.UNISSUED && ((e.state = l.ISSUED), (e.deferred = t.defer())),
                    e.deferred.promise
                );
            }
            function m(e) {
                return function(t) {
                    e.state !== l.CANCELLED &&
                        (--A.numberOfActiveRequests,
                        --N[e.serverKey],
                        I.raiseEvent(),
                        (e.state = l.RECEIVED),
                        e.deferred.resolve(t));
                };
            }
            function E(e) {
                return function(t) {
                    e.state !== l.CANCELLED &&
                        (++A.numberOfFailedRequests,
                        --A.numberOfActiveRequests,
                        --N[e.serverKey],
                        I.raiseEvent(t),
                        (e.state = l.FAILED),
                        e.deferred.reject(t));
                };
            }
            function _(e) {
                var t = y(e);
                return (
                    (e.state = l.ACTIVE),
                    w.push(e),
                    ++A.numberOfActiveRequests,
                    ++A.numberOfActiveRequestsEver,
                    ++N[e.serverKey],
                    e
                        .requestFunction()
                        .then(m(e))
                        .otherwise(E(e)),
                    t
                );
            }
            function v(e) {
                var t = e.state === l.ACTIVE;
                (e.state = l.CANCELLED),
                    ++A.numberOfCancelledRequests,
                    e.deferred.reject(),
                    t &&
                        (--A.numberOfActiveRequests,
                        --N[e.serverKey],
                        ++A.numberOfCancelledActiveRequests),
                    a(e.cancelFunction) && e.cancelFunction();
            }
            function T() {
                (A.numberOfAttemptedRequests = 0),
                    (A.numberOfCancelledRequests = 0),
                    (A.numberOfCancelledActiveRequests = 0);
            }
            function R() {
                h.debugShowStatistics &&
                    (A.numberOfAttemptedRequests > 0 &&
                        console.log("Number of attempted requests: " + A.numberOfAttemptedRequests),
                    A.numberOfActiveRequests > 0 &&
                        console.log("Number of active requests: " + A.numberOfActiveRequests),
                    A.numberOfCancelledRequests > 0 &&
                        console.log("Number of cancelled requests: " + A.numberOfCancelledRequests),
                    A.numberOfCancelledActiveRequests > 0 &&
                        console.log(
                            "Number of cancelled active requests: " +
                                A.numberOfCancelledActiveRequests
                        ),
                    A.numberOfFailedRequests > 0 &&
                        console.log("Number of failed requests: " + A.numberOfFailedRequests),
                    T());
            }
            var A = {
                    numberOfAttemptedRequests: 0,
                    numberOfActiveRequests: 0,
                    numberOfCancelledRequests: 0,
                    numberOfCancelledActiveRequests: 0,
                    numberOfFailedRequests: 0,
                    numberOfActiveRequestsEver: 0
                },
                g = 20,
                S = new u({ comparator: f });
            (S.maximumLength = g), S.reserve(g);
            var w = [],
                N = {},
                O = "undefined" != typeof document ? new e(document.location.href) : new e(),
                I = new o();
            return (
                (h.maximumRequests = 50),
                (h.maximumRequestsPerServer = 6),
                (h.requestsByServer = { "api.cesium.com:443": 18, "assets.cesium.com:443": 18 }),
                (h.throttleRequests = !0),
                (h.debugShowStatistics = !1),
                (h.requestCompletedEvent = I),
                i(h, {
                    statistics: {
                        get: function() {
                            return A;
                        }
                    },
                    priorityHeapLength: {
                        get: function() {
                            return g;
                        },
                        set: function(e) {
                            if (e < g)
                                for (; S.length > e; ) {
                                    var t = S.pop();
                                    v(t);
                                }
                            (g = e), (S.maximumLength = e), S.reserve(e);
                        }
                    }
                }),
                (h.update = function() {
                    var e,
                        t,
                        r = 0,
                        n = w.length;
                    for (e = 0; e < n; ++e)
                        (t = w[e]),
                            t.cancelled && v(t),
                            t.state === l.ACTIVE ? r > 0 && (w[e - r] = t) : ++r;
                    w.length -= r;
                    var a = S.internalArray,
                        i = S.length;
                    for (e = 0; e < i; ++e) d(a[e]);
                    S.resort();
                    for (
                        var o = Math.max(h.maximumRequests - w.length, 0), u = 0;
                        u < o && S.length > 0;

                    )
                        (t = S.pop()),
                            t.cancelled
                                ? v(t)
                                : !t.throttleByServer || p(t.serverKey)
                                ? (_(t), ++u)
                                : v(t);
                    R();
                }),
                (h.getServerKey = function(t) {
                    var r = new e(t).resolve(O);
                    r.normalize();
                    var n = r.authority;
                    /:/.test(n) || (n = n + ":" + ("https" === r.scheme ? "443" : "80"));
                    var i = N[n];
                    return a(i) || (N[n] = 0), n;
                }),
                (h.request = function(e) {
                    if (c(e.url) || s(e.url))
                        return I.raiseEvent(), (e.state = l.RECEIVED), e.requestFunction();
                    if (
                        (++A.numberOfAttemptedRequests,
                        a(e.serverKey) || (e.serverKey = h.getServerKey(e.url)),
                        !h.throttleRequests || !e.throttle)
                    )
                        return _(e);
                    if (
                        !(w.length >= h.maximumRequests) &&
                        (!e.throttleByServer || p(e.serverKey))
                    ) {
                        d(e);
                        var t = S.insert(e);
                        if (a(t)) {
                            if (t === e) return;
                            v(t);
                        }
                        return y(e);
                    }
                }),
                (h.clearForSpecs = function() {
                    for (; S.length > 0; ) {
                        v(S.pop());
                    }
                    for (var e = w.length, t = 0; t < e; ++t) v(w[t]);
                    (w.length = 0),
                        (N = {}),
                        (A.numberOfAttemptedRequests = 0),
                        (A.numberOfActiveRequests = 0),
                        (A.numberOfCancelledRequests = 0),
                        (A.numberOfCancelledActiveRequests = 0),
                        (A.numberOfFailedRequests = 0),
                        (A.numberOfActiveRequestsEver = 0);
                }),
                (h.numberOfActiveRequestsByServer = function(e) {
                    return N[e];
                }),
                (h.requestHeap = S),
                h
            );
        }),
        define("Core/TrustedServers", [
            "../ThirdParty/Uri",
            "./defined",
            "./DeveloperError"
        ], function(e, t, r) {
            "use strict";
            function n(r) {
                var n = new e(r);
                n.normalize();
                var a = n.getAuthority();
                if (t(a)) {
                    if (-1 !== a.indexOf("@")) {
                        a = a.split("@")[1];
                    }
                    if (-1 === a.indexOf(":")) {
                        var i = n.getScheme();
                        if (
                            (t(i) ||
                                ((i = window.location.protocol),
                                (i = i.substring(0, i.length - 1))),
                            "http" === i)
                        )
                            a += ":80";
                        else {
                            if ("https" !== i) return;
                            a += ":443";
                        }
                    }
                    return a;
                }
            }
            var a = {},
                i = {};
            return (
                (a.add = function(e, r) {
                    var n = e.toLowerCase() + ":" + r;
                    t(i[n]) || (i[n] = !0);
                }),
                (a.remove = function(e, r) {
                    var n = e.toLowerCase() + ":" + r;
                    t(i[n]) && delete i[n];
                }),
                (a.contains = function(e) {
                    var r = n(e);
                    return !(!t(r) || !t(i[r]));
                }),
                (a.clear = function() {
                    i = {};
                }),
                a
            );
        }),
        define("Core/Resource", [
            "../ThirdParty/Uri",
            "../ThirdParty/when",
            "./appendForwardSlash",
            "./Check",
            "./clone",
            "./combine",
            "./defaultValue",
            "./defined",
            "./defineProperties",
            "./deprecationWarning",
            "./DeveloperError",
            "./freezeObject",
            "./getAbsoluteUri",
            "./getBaseUri",
            "./getExtensionFromUri",
            "./isBlobUri",
            "./isCrossOriginUrl",
            "./isDataUri",
            "./loadAndExecuteScript",
            "./objectToQuery",
            "./queryToObject",
            "./Request",
            "./RequestErrorEvent",
            "./RequestScheduler",
            "./RequestState",
            "./RuntimeError",
            "./TrustedServers"
        ], function(
            e,
            t,
            r,
            n,
            a,
            i,
            o,
            u,
            s,
            c,
            l,
            f,
            h,
            d,
            p,
            y,
            m,
            E,
            _,
            v,
            T,
            R,
            A,
            g,
            S,
            w,
            N
        ) {
            "use strict";
            function O(e, t, r, n) {
                var a = e.query;
                if (!u(a) || 0 === a.length) return {};
                var i;
                if (-1 === a.indexOf("=")) {
                    var o = {};
                    (o[a] = void 0), (i = o);
                } else i = T(a);
                (t._queryParameters = r ? C(i, t._queryParameters, n) : i), (e.query = void 0);
            }
            function I(e, t) {
                var r = t._queryParameters,
                    n = Object.keys(r);
                1 !== n.length || u(r[n[0]]) ? (e.query = v(r)) : (e.query = n[0]);
            }
            function x(e, t) {
                return u(e) ? (u(e.clone) ? e.clone() : a(e)) : t;
            }
            function M(e) {
                if (e.state === S.ISSUED || e.state === S.ACTIVE)
                    throw new w("The Resource is already being fetched.");
                (e.state = S.UNISSUED), (e.deferred = void 0);
            }
            function C(e, t, r) {
                if (!r) return i(e, t);
                var n = a(e, !0);
                for (var o in t)
                    if (t.hasOwnProperty(o)) {
                        var s = n[o],
                            c = t[o];
                        u(s)
                            ? (Array.isArray(s) || (s = n[o] = [s]), (n[o] = s.concat(c)))
                            : (n[o] = Array.isArray(c) ? c.slice() : c);
                    }
                return n;
            }
            function P(t) {
                (t = o(t, o.EMPTY_OBJECT)),
                    "string" == typeof t && (t = { url: t }),
                    (this._url = void 0),
                    (this._templateValues = x(t.templateValues, {})),
                    (this._queryParameters = x(t.queryParameters, {})),
                    (this.headers = x(t.headers, {})),
                    (this.request = o(t.request, new R())),
                    (this.proxy = t.proxy),
                    (this.retryCallback = t.retryCallback),
                    (this.retryAttempts = o(t.retryAttempts, 0)),
                    (this._retryCount = 0);
                var r = new e(t.url);
                O(r, this, !0, !0), (r.fragment = void 0), (this._url = r.toString());
            }
            function b(e) {
                var r = e.request;
                (r.url = e.url),
                    (r.requestFunction = function() {
                        var r = e.url,
                            n = !1;
                        e.isDataUri || e.isBlobUri || (n = e.isCrossOriginUrl);
                        var a = t.defer();
                        return P._Implementations.createImage(r, n, a), a.promise;
                    });
                var n = g.request(r);
                if (u(n))
                    return n.otherwise(function(n) {
                        return r.state !== S.FAILED
                            ? t.reject(n)
                            : e.retryOnError(n).then(function(a) {
                                  return a
                                      ? ((r.state = S.UNISSUED), (r.deferred = void 0), b(e))
                                      : t.reject(n);
                              });
                    });
            }
            function U(e, r, n) {
                var a = {};
                (a[r] = n), e.setQueryParameters(a);
                var i = e.request;
                (i.url = e.url),
                    (i.requestFunction = function() {
                        var r = t.defer();
                        return (
                            (window[n] = function(e) {
                                r.resolve(e);
                                try {
                                    delete window[n];
                                } catch (e) {
                                    window[n] = void 0;
                                }
                            }),
                            P._Implementations.loadAndExecuteScript(e.url, n, r),
                            r.promise
                        );
                    });
                var o = g.request(i);
                if (u(o))
                    return o.otherwise(function(a) {
                        return i.state !== S.FAILED
                            ? t.reject(a)
                            : e.retryOnError(a).then(function(o) {
                                  return o
                                      ? ((i.state = S.UNISSUED), (i.deferred = void 0), U(e, r, n))
                                      : t.reject(a);
                              });
                    });
            }
            function D(e, t) {
                var r = decodeURIComponent(t);
                return e ? atob(r) : r;
            }
            function L(e, t) {
                for (
                    var r = D(e, t), n = new ArrayBuffer(r.length), a = new Uint8Array(n), i = 0;
                    i < r.length;
                    i++
                )
                    a[i] = r.charCodeAt(i);
                return n;
            }
            function F(e, t) {
                t = o(t, "");
                var r = e[1],
                    n = !!e[2],
                    a = e[3];
                switch (t) {
                    case "":
                    case "text":
                        return D(n, a);
                    case "arraybuffer":
                        return L(n, a);
                    case "blob":
                        var i = L(n, a);
                        return new Blob([i], { type: r });
                    case "document":
                        return new DOMParser().parseFromString(D(n, a), r);
                    case "json":
                        return JSON.parse(D(n, a));
                }
            }
            function B(e, t) {
                switch (t) {
                    case "text":
                        return e.toString("utf8");
                    case "json":
                        return JSON.parse(e.toString("utf8"));
                    default:
                        return new Uint8Array(e).buffer;
                }
            }
            function z(e, t, r, n, a, i, o) {
                var u = require("url").parse(e),
                    s = "https:" === u.protocol ? require("https") : require("http"),
                    c = require("zlib"),
                    l = {
                        protocol: u.protocol,
                        hostname: u.hostname,
                        port: u.port,
                        path: u.path,
                        query: u.query,
                        method: r,
                        headers: a
                    };
                s.request(l)
                    .on("response", function(e) {
                        if (e.statusCode < 200 || e.statusCode >= 300)
                            return void i.reject(new A(e.statusCode, e, e.headers));
                        var r = [];
                        e.on("data", function(e) {
                            r.push(e);
                        }),
                            e.on("end", function() {
                                var n = Buffer.concat(r);
                                "gzip" === e.headers["content-encoding"]
                                    ? c.gunzip(n, function(e, r) {
                                          e
                                              ? i.reject(new w("Error decompressing response."))
                                              : i.resolve(B(r, t));
                                      })
                                    : i.resolve(B(n, t));
                            });
                    })
                    .on("error", function(e) {
                        i.reject(new A());
                    })
                    .end();
            }
            var q = (function() {
                try {
                    var e = new XMLHttpRequest();
                    return (
                        e.open("GET", "#", !0), (e.responseType = "blob"), "blob" === e.responseType
                    );
                } catch (e) {
                    return !1;
                }
            })();
            (P.createIfNeeded = function(e) {
                return e instanceof P
                    ? e.getDerivedResource({ request: e.request })
                    : "string" != typeof e
                    ? e
                    : new P({ url: e });
            }),
                s(P, {
                    isBlobSupported: {
                        get: function() {
                            return q;
                        }
                    }
                }),
                s(P.prototype, {
                    queryParameters: {
                        get: function() {
                            return this._queryParameters;
                        }
                    },
                    templateValues: {
                        get: function() {
                            return this._templateValues;
                        }
                    },
                    url: {
                        get: function() {
                            return this.getUrlComponent(!0, !0);
                        },
                        set: function(t) {
                            var r = new e(t);
                            O(r, this, !1), (r.fragment = void 0), (this._url = r.toString());
                        }
                    },
                    extension: {
                        get: function() {
                            return p(this._url);
                        }
                    },
                    isDataUri: {
                        get: function() {
                            return E(this._url);
                        }
                    },
                    isBlobUri: {
                        get: function() {
                            return y(this._url);
                        }
                    },
                    isCrossOriginUrl: {
                        get: function() {
                            return m(this._url);
                        }
                    },
                    hasHeaders: {
                        get: function() {
                            return Object.keys(this.headers).length > 0;
                        }
                    }
                }),
                (P.prototype.getUrlComponent = function(t, r) {
                    if (this.isDataUri) return this._url;
                    var n = new e(this._url);
                    t && I(n, this);
                    var a = n
                            .toString()
                            .replace(/%7B/g, "{")
                            .replace(/%7D/g, "}"),
                        i = this._templateValues,
                        o = Object.keys(i);
                    if (o.length > 0)
                        for (var s = 0; s < o.length; s++) {
                            var c = o[s],
                                l = i[c];
                            a = a.replace(new RegExp("{" + c + "}", "g"), encodeURIComponent(l));
                        }
                    return r && u(this.proxy) && (a = this.proxy.getURL(a)), a;
                }),
                (P.prototype.setQueryParameters = function(e, t) {
                    this._queryParameters = t
                        ? C(this._queryParameters, e, !1)
                        : C(e, this._queryParameters, !1);
                }),
                (P.prototype.addQueryParameters = function(e, t) {
                    return (
                        c(
                            "Resource.addQueryParameters",
                            "addQueryParameters has been deprecated and will be removed 1.45. Use setQueryParameters or appendQueryParameters instead."
                        ),
                        this.setQueryParameters(e, t)
                    );
                }),
                (P.prototype.appendQueryParameters = function(e) {
                    this._queryParameters = C(e, this._queryParameters, !0);
                }),
                (P.prototype.setTemplateValues = function(e, t) {
                    this._templateValues = t
                        ? i(this._templateValues, e)
                        : i(e, this._templateValues);
                }),
                (P.prototype.addTemplateValues = function(e, t) {
                    return (
                        c(
                            "Resource.addTemplateValues",
                            "addTemplateValues has been deprecated and will be removed 1.45. Use setTemplateValues."
                        ),
                        this.setTemplateValues(e, t)
                    );
                }),
                (P.prototype.getDerivedResource = function(t) {
                    var r = this.clone();
                    if (((r._retryCount = 0), u(t.url))) {
                        var n = new e(t.url);
                        O(n, r, !0, o(t.preserveQueryParameters, !1)),
                            (n.fragment = void 0),
                            (r._url = n.resolve(new e(h(this._url))).toString());
                    }
                    return (
                        u(t.queryParameters) &&
                            (r._queryParameters = i(t.queryParameters, r._queryParameters)),
                        u(t.templateValues) &&
                            (r._templateValues = i(t.templateValues, r.templateValues)),
                        u(t.headers) && (r.headers = i(t.headers, r.headers)),
                        u(t.proxy) && (r.proxy = t.proxy),
                        u(t.request) && (r.request = t.request),
                        u(t.retryCallback) && (r.retryCallback = t.retryCallback),
                        u(t.retryAttempts) && (r.retryAttempts = t.retryAttempts),
                        r
                    );
                }),
                (P.prototype.retryOnError = function(e) {
                    var r = this.retryCallback;
                    if ("function" != typeof r || this._retryCount >= this.retryAttempts)
                        return t(!1);
                    var n = this;
                    return t(r(this, e)).then(function(e) {
                        return ++n._retryCount, e;
                    });
                }),
                (P.prototype.clone = function(e) {
                    return (
                        u(e) || (e = new P({ url: this._url })),
                        (e._url = this._url),
                        (e._queryParameters = a(this._queryParameters)),
                        (e._templateValues = a(this._templateValues)),
                        (e.headers = a(this.headers)),
                        (e.proxy = this.proxy),
                        (e.retryCallback = this.retryCallback),
                        (e.retryAttempts = this.retryAttempts),
                        (e._retryCount = 0),
                        (e.request = this.request.clone()),
                        e
                    );
                }),
                (P.prototype.getBaseUri = function(e) {
                    return d(this.getUrlComponent(e), e);
                }),
                (P.prototype.appendForwardSlash = function() {
                    this._url = r(this._url);
                }),
                (P.prototype.fetchArrayBuffer = function() {
                    return this.fetch({ responseType: "arraybuffer" });
                }),
                (P.fetchArrayBuffer = function(e) {
                    return new P(e).fetchArrayBuffer();
                }),
                (P.prototype.fetchBlob = function() {
                    return this.fetch({ responseType: "blob" });
                }),
                (P.fetchBlob = function(e) {
                    return new P(e).fetchBlob();
                }),
                (P.prototype.fetchImage = function(e) {
                    if (
                        ((e = o(e, !1)),
                        M(this.request),
                        !q || this.isDataUri || this.isBlobUri || (!this.hasHeaders && !e))
                    )
                        return b(this, !0);
                    var r = this.fetchBlob();
                    if (u(r)) {
                        var n, a;
                        return r
                            .then(function(e) {
                                if (u(e)) {
                                    a = e;
                                    var t = window.URL.createObjectURL(e);
                                    return (n = new P({ url: t })), b(n);
                                }
                            })
                            .then(function(e) {
                                if (u(e)) return window.URL.revokeObjectURL(n.url), (e.blob = a), e;
                            })
                            .otherwise(function(e) {
                                return u(n) && window.URL.revokeObjectURL(n.url), t.reject(e);
                            });
                    }
                }),
                (P.fetchImage = function(e) {
                    return new P(e).fetchImage(e.preferBlob);
                }),
                (P.prototype.fetchText = function() {
                    return this.fetch({ responseType: "text" });
                }),
                (P.fetchText = function(e) {
                    return new P(e).fetchText();
                }),
                (P.prototype.fetchJson = function() {
                    var e = this.fetch({
                        responseType: "text",
                        headers: { Accept: "application/json,*/*;q=0.01" }
                    });
                    if (u(e))
                        return e.then(function(e) {
                            if (u(e)) return JSON.parse(e);
                        });
                }),
                (P.fetchJson = function(e) {
                    return new P(e).fetchJson();
                }),
                (P.prototype.fetchXML = function() {
                    return this.fetch({ responseType: "document", overrideMimeType: "text/xml" });
                }),
                (P.fetchXML = function(e) {
                    return new P(e).fetchXML();
                }),
                (P.prototype.fetchJsonp = function(e) {
                    (e = o(e, "callback")), M(this.request);
                    var t;
                    do {
                        t =
                            "loadJsonp" +
                            Math.random()
                                .toString()
                                .substring(2, 8);
                    } while (u(window[t]));
                    return U(this, e, t);
                }),
                (P.fetchJsonp = function(e) {
                    return new P(e).fetchJsonp(e.callbackParameterName);
                }),
                (P.prototype._makeRequest = function(e) {
                    var r = this;
                    M(r.request);
                    var n = r.request;
                    (n.url = r.url),
                        (n.requestFunction = function() {
                            var a = e.responseType,
                                o = i(e.headers, r.headers),
                                s = e.overrideMimeType,
                                c = e.method,
                                l = e.data,
                                f = t.defer(),
                                h = P._Implementations.loadWithXhr(r.url, a, c, l, o, f, s);
                            return (
                                u(h) &&
                                    u(h.abort) &&
                                    (n.cancelFunction = function() {
                                        h.abort();
                                    }),
                                f.promise
                            );
                        });
                    var a = g.request(n);
                    if (u(a))
                        return a
                            .then(function(e) {
                                return e;
                            })
                            .otherwise(function(a) {
                                return n.state !== S.FAILED
                                    ? t.reject(a)
                                    : r.retryOnError(a).then(function(i) {
                                          return i
                                              ? ((n.state = S.UNISSUED),
                                                (n.deferred = void 0),
                                                r.fetch(e))
                                              : t.reject(a);
                                      });
                            });
                });
            var G = /^data:(.*?)(;base64)?,(.*)$/;
            (P.prototype.fetch = function(e) {
                return (e = x(e, {})), (e.method = "GET"), this._makeRequest(e);
            }),
                (P.fetch = function(e) {
                    return new P(e).fetch({
                        responseType: e.responseType,
                        overrideMimeType: e.overrideMimeType
                    });
                }),
                (P.prototype.delete = function(e) {
                    return (e = x(e, {})), (e.method = "DELETE"), this._makeRequest(e);
                }),
                (P.delete = function(e) {
                    return new P(e).delete({
                        responseType: e.responseType,
                        overrideMimeType: e.overrideMimeType,
                        data: e.data
                    });
                }),
                (P.prototype.head = function(e) {
                    return (e = x(e, {})), (e.method = "HEAD"), this._makeRequest(e);
                }),
                (P.head = function(e) {
                    return new P(e).head({
                        responseType: e.responseType,
                        overrideMimeType: e.overrideMimeType
                    });
                }),
                (P.prototype.options = function(e) {
                    return (e = x(e, {})), (e.method = "OPTIONS"), this._makeRequest(e);
                }),
                (P.options = function(e) {
                    return new P(e).options({
                        responseType: e.responseType,
                        overrideMimeType: e.overrideMimeType
                    });
                }),
                (P.prototype.post = function(e, t) {
                    return (
                        n.defined("data", e),
                        (t = x(t, {})),
                        (t.method = "POST"),
                        (t.data = e),
                        this._makeRequest(t)
                    );
                }),
                (P.post = function(e) {
                    return new P(e).post(e.data, {
                        responseType: e.responseType,
                        overrideMimeType: e.overrideMimeType
                    });
                }),
                (P.prototype.put = function(e, t) {
                    return (
                        n.defined("data", e),
                        (t = x(t, {})),
                        (t.method = "PUT"),
                        (t.data = e),
                        this._makeRequest(t)
                    );
                }),
                (P.put = function(e) {
                    return new P(e).put(e.data, {
                        responseType: e.responseType,
                        overrideMimeType: e.overrideMimeType
                    });
                }),
                (P.prototype.patch = function(e, t) {
                    return (
                        n.defined("data", e),
                        (t = x(t, {})),
                        (t.method = "PATCH"),
                        (t.data = e),
                        this._makeRequest(t)
                    );
                }),
                (P.patch = function(e) {
                    return new P(e).patch(e.data, {
                        responseType: e.responseType,
                        overrideMimeType: e.overrideMimeType
                    });
                }),
                (P._Implementations = {}),
                (P._Implementations.createImage = function(e, t, r) {
                    var n = new Image();
                    (n.onload = function() {
                        r.resolve(n);
                    }),
                        (n.onerror = function(e) {
                            r.reject(e);
                        }),
                        t &&
                            (N.contains(e)
                                ? (n.crossOrigin = "use-credentials")
                                : (n.crossOrigin = "")),
                        (n.src = e);
                });
            var V = "undefined" == typeof XMLHttpRequest;
            return (
                (P._Implementations.loadWithXhr = function(e, t, r, n, a, i, o) {
                    var s = G.exec(e);
                    if (null !== s) return void i.resolve(F(s, t));
                    if (V) return void z(e, t, r, n, a, i, o);
                    var c = new XMLHttpRequest();
                    if (
                        (N.contains(e) && (c.withCredentials = !0),
                        c.open(r, e, !0),
                        u(o) && u(c.overrideMimeType) && c.overrideMimeType(o),
                        u(a))
                    )
                        for (var l in a) a.hasOwnProperty(l) && c.setRequestHeader(l, a[l]);
                    u(t) && (c.responseType = t);
                    var f = !1;
                    return (
                        "string" == typeof e &&
                            (f =
                                0 === e.indexOf("file://") ||
                                ("undefined" != typeof window &&
                                    "file://" === window.location.origin)),
                        (c.onload = function() {
                            if ((c.status < 200 || c.status >= 300) && (!f || 0 !== c.status))
                                return void i.reject(
                                    new A(c.status, c.response, c.getAllResponseHeaders())
                                );
                            var e = c.response,
                                n = c.responseType;
                            if ("HEAD" === r || "OPTIONS" === r) {
                                var a = c.getAllResponseHeaders(),
                                    o = a.trim().split(/[\r\n]+/),
                                    s = {};
                                return (
                                    o.forEach(function(e) {
                                        var t = e.split(": "),
                                            r = t.shift();
                                        s[r] = t.join(": ");
                                    }),
                                    void i.resolve(s)
                                );
                            }
                            if (204 === c.status) i.resolve();
                            else if (!u(e) || (u(t) && n !== t))
                                if ("json" === t && "string" == typeof e)
                                    try {
                                        i.resolve(JSON.parse(e));
                                    } catch (e) {
                                        i.reject(e);
                                    }
                                else
                                    ("" === n || "document" === n) &&
                                    u(c.responseXML) &&
                                    c.responseXML.hasChildNodes()
                                        ? i.resolve(c.responseXML)
                                        : ("" !== n && "text" !== n) || !u(c.responseText)
                                        ? i.reject(new w("Invalid XMLHttpRequest response type."))
                                        : i.resolve(c.responseText);
                            else i.resolve(e);
                        }),
                        (c.onerror = function(e) {
                            i.reject(new A());
                        }),
                        c.send(n),
                        c
                    );
                }),
                (P._Implementations.loadAndExecuteScript = function(e, t, r) {
                    return _(e, t).otherwise(r.reject);
                }),
                (P._DefaultImplementations = {}),
                (P._DefaultImplementations.createImage = P._Implementations.createImage),
                (P._DefaultImplementations.loadWithXhr = P._Implementations.loadWithXhr),
                (P._DefaultImplementations.loadAndExecuteScript =
                    P._Implementations.loadAndExecuteScript),
                (P.DEFAULT = f(
                    new P({
                        url:
                            "undefined" == typeof document
                                ? ""
                                : document.location.href.split("?")[0]
                    })
                )),
                P
            );
        }),
        define("Core/EarthOrientationParameters", [
            "../ThirdParty/when",
            "./binarySearch",
            "./defaultValue",
            "./defined",
            "./EarthOrientationParametersSample",
            "./freezeObject",
            "./JulianDate",
            "./LeapSecond",
            "./Resource",
            "./RuntimeError",
            "./TimeConstants",
            "./TimeStandard"
        ], function(e, t, r, n, a, i, o, u, s, c, l, f) {
            "use strict";
            function h(t) {
                if (
                    ((t = r(t, r.EMPTY_OBJECT)),
                    (this._dates = void 0),
                    (this._samples = void 0),
                    (this._dateColumn = -1),
                    (this._xPoleWanderRadiansColumn = -1),
                    (this._yPoleWanderRadiansColumn = -1),
                    (this._ut1MinusUtcSecondsColumn = -1),
                    (this._xCelestialPoleOffsetRadiansColumn = -1),
                    (this._yCelestialPoleOffsetRadiansColumn = -1),
                    (this._taiMinusUtcSecondsColumn = -1),
                    (this._columnCount = 0),
                    (this._lastIndex = -1),
                    (this._downloadPromise = void 0),
                    (this._dataError = void 0),
                    (this._addNewLeapSeconds = r(t.addNewLeapSeconds, !0)),
                    n(t.data))
                )
                    p(this, t.data);
                else if (n(t.url)) {
                    var a = s.createIfNeeded(t.url),
                        i = this;
                    this._downloadPromise = e(
                        a.fetchJson(),
                        function(e) {
                            p(i, e);
                        },
                        function() {
                            i._dataError =
                                "An error occurred while retrieving the EOP data from the URL " +
                                a.url +
                                ".";
                        }
                    );
                } else
                    p(this, {
                        columnNames: [
                            "dateIso8601",
                            "modifiedJulianDateUtc",
                            "xPoleWanderRadians",
                            "yPoleWanderRadians",
                            "ut1MinusUtcSeconds",
                            "lengthOfDayCorrectionSeconds",
                            "xCelestialPoleOffsetRadians",
                            "yCelestialPoleOffsetRadians",
                            "taiMinusUtcSeconds"
                        ],
                        samples: []
                    });
            }
            function d(e, t) {
                return o.compare(e.julianDate, t);
            }
            function p(e, r) {
                if (!n(r.columnNames))
                    return void (e._dataError =
                        "Error in loaded EOP data: The columnNames property is required.");
                if (!n(r.samples))
                    return void (e._dataError =
                        "Error in loaded EOP data: The samples property is required.");
                var a = r.columnNames.indexOf("modifiedJulianDateUtc"),
                    i = r.columnNames.indexOf("xPoleWanderRadians"),
                    s = r.columnNames.indexOf("yPoleWanderRadians"),
                    c = r.columnNames.indexOf("ut1MinusUtcSeconds"),
                    h = r.columnNames.indexOf("xCelestialPoleOffsetRadians"),
                    p = r.columnNames.indexOf("yCelestialPoleOffsetRadians"),
                    y = r.columnNames.indexOf("taiMinusUtcSeconds");
                if (a < 0 || i < 0 || s < 0 || c < 0 || h < 0 || p < 0 || y < 0)
                    return void (e._dataError =
                        "Error in loaded EOP data: The columnNames property must include modifiedJulianDateUtc, xPoleWanderRadians, yPoleWanderRadians, ut1MinusUtcSeconds, xCelestialPoleOffsetRadians, yCelestialPoleOffsetRadians, and taiMinusUtcSeconds columns");
                var m = (e._samples = r.samples),
                    E = (e._dates = []);
                (e._dateColumn = a),
                    (e._xPoleWanderRadiansColumn = i),
                    (e._yPoleWanderRadiansColumn = s),
                    (e._ut1MinusUtcSecondsColumn = c),
                    (e._xCelestialPoleOffsetRadiansColumn = h),
                    (e._yCelestialPoleOffsetRadiansColumn = p),
                    (e._taiMinusUtcSecondsColumn = y),
                    (e._columnCount = r.columnNames.length),
                    (e._lastIndex = void 0);
                for (
                    var _, v = e._addNewLeapSeconds, T = 0, R = m.length;
                    T < R;
                    T += e._columnCount
                ) {
                    var A = m[T + a],
                        g = m[T + y],
                        S = A + l.MODIFIED_JULIAN_DATE_DIFFERENCE,
                        w = new o(S, g, f.TAI);
                    if ((E.push(w), v)) {
                        if (g !== _ && n(_)) {
                            var N = o.leapSeconds,
                                O = t(N, w, d);
                            if (O < 0) {
                                var I = new u(w, g);
                                N.splice(~O, 0, I);
                            }
                        }
                        _ = g;
                    }
                }
            }
            function y(e, t, r, n, a) {
                var i = r * n;
                (a.xPoleWander = t[i + e._xPoleWanderRadiansColumn]),
                    (a.yPoleWander = t[i + e._yPoleWanderRadiansColumn]),
                    (a.xPoleOffset = t[i + e._xCelestialPoleOffsetRadiansColumn]),
                    (a.yPoleOffset = t[i + e._yCelestialPoleOffsetRadiansColumn]),
                    (a.ut1MinusUtc = t[i + e._ut1MinusUtcSecondsColumn]);
            }
            function m(e, t, r) {
                return t + e * (r - t);
            }
            function E(e, t, r, n, a, i, u) {
                var s = e._columnCount;
                if (i > t.length - 1)
                    return (
                        (u.xPoleWander = 0),
                        (u.yPoleWander = 0),
                        (u.xPoleOffset = 0),
                        (u.yPoleOffset = 0),
                        (u.ut1MinusUtc = 0),
                        u
                    );
                var c = t[a],
                    l = t[i];
                if (c.equals(l) || n.equals(c)) return y(e, r, a, s, u), u;
                if (n.equals(l)) return y(e, r, i, s, u), u;
                var f = o.secondsDifference(n, c) / o.secondsDifference(l, c),
                    h = a * s,
                    d = i * s,
                    p = r[h + e._ut1MinusUtcSecondsColumn],
                    E = r[d + e._ut1MinusUtcSecondsColumn],
                    _ = E - p;
                if (_ > 0.5 || _ < -0.5) {
                    var v = r[h + e._taiMinusUtcSecondsColumn],
                        T = r[d + e._taiMinusUtcSecondsColumn];
                    v !== T && (l.equals(n) ? (p = E) : (E -= T - v));
                }
                return (
                    (u.xPoleWander = m(
                        f,
                        r[h + e._xPoleWanderRadiansColumn],
                        r[d + e._xPoleWanderRadiansColumn]
                    )),
                    (u.yPoleWander = m(
                        f,
                        r[h + e._yPoleWanderRadiansColumn],
                        r[d + e._yPoleWanderRadiansColumn]
                    )),
                    (u.xPoleOffset = m(
                        f,
                        r[h + e._xCelestialPoleOffsetRadiansColumn],
                        r[d + e._xCelestialPoleOffsetRadiansColumn]
                    )),
                    (u.yPoleOffset = m(
                        f,
                        r[h + e._yCelestialPoleOffsetRadiansColumn],
                        r[d + e._yCelestialPoleOffsetRadiansColumn]
                    )),
                    (u.ut1MinusUtc = m(f, p, E)),
                    u
                );
            }
            return (
                (h.NONE = i({
                    getPromiseToLoad: function() {
                        return e();
                    },
                    compute: function(e, t) {
                        return (
                            n(t)
                                ? ((t.xPoleWander = 0),
                                  (t.yPoleWander = 0),
                                  (t.xPoleOffset = 0),
                                  (t.yPoleOffset = 0),
                                  (t.ut1MinusUtc = 0))
                                : (t = new a(0, 0, 0, 0, 0)),
                            t
                        );
                    }
                })),
                (h.prototype.getPromiseToLoad = function() {
                    return e(this._downloadPromise);
                }),
                (h.prototype.compute = function(e, r) {
                    if (n(this._samples)) {
                        if ((n(r) || (r = new a(0, 0, 0, 0, 0)), 0 === this._samples.length))
                            return (
                                (r.xPoleWander = 0),
                                (r.yPoleWander = 0),
                                (r.xPoleOffset = 0),
                                (r.yPoleOffset = 0),
                                (r.ut1MinusUtc = 0),
                                r
                            );
                        var i = this._dates,
                            u = this._lastIndex,
                            s = 0,
                            l = 0;
                        if (n(u)) {
                            var f = i[u],
                                h = i[u + 1],
                                d = o.lessThanOrEquals(f, e),
                                p = !n(h),
                                y = p || o.greaterThanOrEquals(h, e);
                            if (d && y)
                                return (
                                    (s = u),
                                    !p && h.equals(e) && ++s,
                                    (l = s + 1),
                                    E(this, i, this._samples, e, s, l, r),
                                    r
                                );
                        }
                        var m = t(i, e, o.compare, this._dateColumn);
                        return (
                            m >= 0
                                ? (m < i.length - 1 && i[m + 1].equals(e) && ++m, (s = m), (l = m))
                                : ((l = ~m), (s = l - 1) < 0 && (s = 0)),
                            (this._lastIndex = s),
                            E(this, i, this._samples, e, s, l, r),
                            r
                        );
                    }
                    if (n(this._dataError)) throw new c(this._dataError);
                }),
                h
            );
        }),
        define("Core/HeadingPitchRoll", [
            "./defaultValue",
            "./defined",
            "./DeveloperError",
            "./Math"
        ], function(e, t, r, n) {
            "use strict";
            function a(t, r, n) {
                (this.heading = e(t, 0)), (this.pitch = e(r, 0)), (this.roll = e(n, 0));
            }
            return (
                (a.fromQuaternion = function(e, r) {
                    t(r) || (r = new a());
                    var n = 2 * (e.w * e.y - e.z * e.x),
                        i = 1 - 2 * (e.x * e.x + e.y * e.y),
                        o = 2 * (e.w * e.x + e.y * e.z),
                        u = 1 - 2 * (e.y * e.y + e.z * e.z),
                        s = 2 * (e.w * e.z + e.x * e.y);
                    return (
                        (r.heading = -Math.atan2(s, u)),
                        (r.roll = Math.atan2(o, i)),
                        (r.pitch = -Math.asin(n)),
                        r
                    );
                }),
                (a.fromDegrees = function(e, r, i, o) {
                    return (
                        t(o) || (o = new a()),
                        (o.heading = e * n.RADIANS_PER_DEGREE),
                        (o.pitch = r * n.RADIANS_PER_DEGREE),
                        (o.roll = i * n.RADIANS_PER_DEGREE),
                        o
                    );
                }),
                (a.clone = function(e, r) {
                    if (t(e))
                        return t(r)
                            ? ((r.heading = e.heading), (r.pitch = e.pitch), (r.roll = e.roll), r)
                            : new a(e.heading, e.pitch, e.roll);
                }),
                (a.equals = function(e, r) {
                    return (
                        e === r ||
                        (t(e) &&
                            t(r) &&
                            e.heading === r.heading &&
                            e.pitch === r.pitch &&
                            e.roll === r.roll)
                    );
                }),
                (a.equalsEpsilon = function(e, r, a, i) {
                    return (
                        e === r ||
                        (t(e) &&
                            t(r) &&
                            n.equalsEpsilon(e.heading, r.heading, a, i) &&
                            n.equalsEpsilon(e.pitch, r.pitch, a, i) &&
                            n.equalsEpsilon(e.roll, r.roll, a, i))
                    );
                }),
                (a.prototype.clone = function(e) {
                    return a.clone(this, e);
                }),
                (a.prototype.equals = function(e) {
                    return a.equals(this, e);
                }),
                (a.prototype.equalsEpsilon = function(e, t, r) {
                    return a.equalsEpsilon(this, e, t, r);
                }),
                (a.prototype.toString = function() {
                    return "(" + this.heading + ", " + this.pitch + ", " + this.roll + ")";
                }),
                a
            );
        }),
        define("Core/buildModuleUrl", [
            "./defined",
            "./DeveloperError",
            "./getAbsoluteUri",
            "./Resource",
            "require"
        ], function(e, t, r, n, a) {
            "use strict";
            function i() {
                for (
                    var e = document.getElementsByTagName("script"), t = 0, r = e.length;
                    t < r;
                    ++t
                ) {
                    var n = e[t].getAttribute("src"),
                        a = p.exec(n);
                    if (null !== a) return a[1];
                }
            }
            function o(t) {
                return "undefined" == typeof document
                    ? t
                    : (e(f) || (f = document.createElement("a")),
                      (f.href = t),
                      (f.href = f.href),
                      f.href);
            }
            function u() {
                if (e(h)) return h;
                var t;
                return (
                    (t =
                        "undefined" != typeof CESIUM_BASE_URL
                            ? CESIUM_BASE_URL
                            : e(define.amd) && !define.amd.toUrlUndefined && e(a.toUrl)
                            ? r("..", l("Core/buildModuleUrl.js"))
                            : i()),
                    (h = new n({ url: o(t) })),
                    h.appendForwardSlash(),
                    h
                );
            }
            function s(e) {
                return o(a.toUrl("../" + e));
            }
            function c(e) {
                return u().getDerivedResource({ url: e }).url;
            }
            function l(t) {
                return (
                    e(d) || (d = e(define.amd) && !define.amd.toUrlUndefined && e(a.toUrl) ? s : c),
                    d(t)
                );
            }
            var f,
                h,
                d,
                p = /((?:.*\/)|^)cesium[\w-]*\.js(?:\W|$)/i;
            return (
                (l._cesiumScriptRegex = p),
                (l._buildModuleUrlFromBaseUrl = c),
                (l._clearBaseResource = function() {
                    h = void 0;
                }),
                (l.setBaseUrl = function(e) {
                    h = n.DEFAULT.getDerivedResource({ url: e });
                }),
                (l.getCesiumBaseUrl = u),
                l
            );
        }),
        define("Core/Iau2006XysSample", [], function() {
            "use strict";
            function e(e, t, r) {
                (this.x = e), (this.y = t), (this.s = r);
            }
            return e;
        }),
        define("Core/Iau2006XysData", [
            "../ThirdParty/when",
            "./buildModuleUrl",
            "./defaultValue",
            "./defined",
            "./Iau2006XysSample",
            "./JulianDate",
            "./Resource",
            "./TimeStandard"
        ], function(e, t, r, n, a, i, o, u) {
            "use strict";
            function s(e) {
                (e = r(e, r.EMPTY_OBJECT)),
                    (this._xysFileUrlTemplate = o.createIfNeeded(e.xysFileUrlTemplate)),
                    (this._interpolationOrder = r(e.interpolationOrder, 9)),
                    (this._sampleZeroJulianEphemerisDate = r(
                        e.sampleZeroJulianEphemerisDate,
                        2442396.5
                    )),
                    (this._sampleZeroDateTT = new i(this._sampleZeroJulianEphemerisDate, 0, u.TAI)),
                    (this._stepSizeDays = r(e.stepSizeDays, 1)),
                    (this._samplesPerXysFile = r(e.samplesPerXysFile, 1e3)),
                    (this._totalSamples = r(e.totalSamples, 27426)),
                    (this._samples = new Array(3 * this._totalSamples)),
                    (this._chunkDownloadsInProgress = []);
                for (
                    var t = this._interpolationOrder,
                        n = (this._denominators = new Array(t + 1)),
                        a = (this._xTable = new Array(t + 1)),
                        s = Math.pow(this._stepSizeDays, t),
                        c = 0;
                    c <= t;
                    ++c
                ) {
                    (n[c] = s), (a[c] = c * this._stepSizeDays);
                    for (var l = 0; l <= t; ++l) l !== c && (n[c] *= c - l);
                    n[c] = 1 / n[c];
                }
                (this._work = new Array(t + 1)), (this._coef = new Array(t + 1));
            }
            function c(e, t, r) {
                var n = f;
                return (
                    (n.dayNumber = t),
                    (n.secondsOfDay = r),
                    i.daysDifference(n, e._sampleZeroDateTT)
                );
            }
            function l(r, a) {
                if (r._chunkDownloadsInProgress[a]) return r._chunkDownloadsInProgress[a];
                var i = e.defer();
                r._chunkDownloadsInProgress[a] = i;
                var u,
                    s = r._xysFileUrlTemplate;
                return (
                    (u = n(s)
                        ? s.getDerivedResource({ templateValues: { 0: a } })
                        : new o({ url: t("Assets/IAU2006_XYS/IAU2006_XYS_" + a + ".json") })),
                    e(u.fetchJson(), function(e) {
                        r._chunkDownloadsInProgress[a] = !1;
                        for (
                            var t = r._samples,
                                n = e.samples,
                                o = a * r._samplesPerXysFile * 3,
                                u = 0,
                                s = n.length;
                            u < s;
                            ++u
                        )
                            t[o + u] = n[u];
                        i.resolve();
                    }),
                    i.promise
                );
            }
            var f = new i(0, 0, u.TAI);
            return (
                (s.prototype.preload = function(t, r, n, a) {
                    var i = c(this, t, r),
                        o = c(this, n, a),
                        u = (i / this._stepSizeDays - this._interpolationOrder / 2) | 0;
                    u < 0 && (u = 0);
                    var s =
                        (o / this._stepSizeDays - this._interpolationOrder / 2) |
                        (0 + this._interpolationOrder);
                    s >= this._totalSamples && (s = this._totalSamples - 1);
                    for (
                        var f = (u / this._samplesPerXysFile) | 0,
                            h = (s / this._samplesPerXysFile) | 0,
                            d = [],
                            p = f;
                        p <= h;
                        ++p
                    )
                        d.push(l(this, p));
                    return e.all(d);
                }),
                (s.prototype.computeXysRadians = function(e, t, r) {
                    var i = c(this, e, t);
                    if (!(i < 0)) {
                        var o = (i / this._stepSizeDays) | 0;
                        if (!(o >= this._totalSamples)) {
                            var u = this._interpolationOrder,
                                s = o - ((u / 2) | 0);
                            s < 0 && (s = 0);
                            var f = s + u;
                            f >= this._totalSamples &&
                                ((f = this._totalSamples - 1), (s = f - u) < 0 && (s = 0));
                            var h = !1,
                                d = this._samples;
                            if (
                                (n(d[3 * s]) ||
                                    (l(this, (s / this._samplesPerXysFile) | 0), (h = !0)),
                                n(d[3 * f]) ||
                                    (l(this, (f / this._samplesPerXysFile) | 0), (h = !0)),
                                !h)
                            ) {
                                n(r) ? ((r.x = 0), (r.y = 0), (r.s = 0)) : (r = new a(0, 0, 0));
                                var p,
                                    y,
                                    m = i - s * this._stepSizeDays,
                                    E = this._work,
                                    _ = this._denominators,
                                    v = this._coef,
                                    T = this._xTable;
                                for (p = 0; p <= u; ++p) E[p] = m - T[p];
                                for (p = 0; p <= u; ++p) {
                                    for (v[p] = 1, y = 0; y <= u; ++y) y !== p && (v[p] *= E[y]);
                                    v[p] *= _[p];
                                    var R = 3 * (s + p);
                                    (r.x += v[p] * d[R++]),
                                        (r.y += v[p] * d[R++]),
                                        (r.s += v[p] * d[R]);
                                }
                                return r;
                            }
                        }
                    }
                }),
                s
            );
        }),
        define("Core/Transforms", [
            "../ThirdParty/when",
            "./Cartesian2",
            "./Cartesian3",
            "./Cartesian4",
            "./Cartographic",
            "./Check",
            "./defaultValue",
            "./defined",
            "./DeveloperError",
            "./EarthOrientationParameters",
            "./EarthOrientationParametersSample",
            "./Ellipsoid",
            "./HeadingPitchRoll",
            "./Iau2006XysData",
            "./Iau2006XysSample",
            "./JulianDate",
            "./Math",
            "./Matrix3",
            "./Matrix4",
            "./Quaternion",
            "./TimeConstants"
        ], function(e, t, r, n, a, i, o, u, s, c, l, f, h, d, p, y, m, E, _, v, T) {
            "use strict";
            var R = {},
                A = {
                    up: { south: "east", north: "west", west: "south", east: "north" },
                    down: { south: "west", north: "east", west: "north", east: "south" },
                    south: { up: "west", down: "east", west: "down", east: "up" },
                    north: { up: "east", down: "west", west: "up", east: "down" },
                    west: { up: "north", down: "south", north: "down", south: "up" },
                    east: { up: "south", down: "north", north: "up", south: "down" }
                },
                g = {
                    north: [-1, 0, 0],
                    east: [0, 1, 0],
                    up: [0, 0, 1],
                    south: [1, 0, 0],
                    west: [0, -1, 0],
                    down: [0, 0, -1]
                },
                S = {},
                w = {
                    east: new r(),
                    north: new r(),
                    up: new r(),
                    west: new r(),
                    south: new r(),
                    down: new r()
                },
                N = new r(),
                O = new r(),
                I = new r();
            (R.localFrameToFixedFrameGenerator = function(e, t) {
                if (!A.hasOwnProperty(e) || !A[e].hasOwnProperty(t))
                    throw new s(
                        "firstAxis and secondAxis must be east, north, up, west, south or down."
                    );
                var n,
                    a = A[e][t],
                    i = e + t;
                return (
                    u(S[i])
                        ? (n = S[i])
                        : ((n = function(n, i, s) {
                              if (
                                  (u(s) || (s = new _()),
                                  m.equalsEpsilon(n.x, 0, m.EPSILON14) &&
                                      m.equalsEpsilon(n.y, 0, m.EPSILON14))
                              ) {
                                  var c = m.sign(n.z);
                                  r.unpack(g[e], 0, N),
                                      "east" !== e && "west" !== e && r.multiplyByScalar(N, c, N),
                                      r.unpack(g[t], 0, O),
                                      "east" !== t && "west" !== t && r.multiplyByScalar(O, c, O),
                                      r.unpack(g[a], 0, I),
                                      "east" !== a && "west" !== a && r.multiplyByScalar(I, c, I);
                              } else {
                                  (i = o(i, f.WGS84)), i.geodeticSurfaceNormal(n, w.up);
                                  var l = w.up,
                                      h = w.east;
                                  (h.x = -n.y),
                                      (h.y = n.x),
                                      (h.z = 0),
                                      r.normalize(h, w.east),
                                      r.cross(l, h, w.north),
                                      r.multiplyByScalar(w.up, -1, w.down),
                                      r.multiplyByScalar(w.east, -1, w.west),
                                      r.multiplyByScalar(w.north, -1, w.south),
                                      (N = w[e]),
                                      (O = w[t]),
                                      (I = w[a]);
                              }
                              return (
                                  (s[0] = N.x),
                                  (s[1] = N.y),
                                  (s[2] = N.z),
                                  (s[3] = 0),
                                  (s[4] = O.x),
                                  (s[5] = O.y),
                                  (s[6] = O.z),
                                  (s[7] = 0),
                                  (s[8] = I.x),
                                  (s[9] = I.y),
                                  (s[10] = I.z),
                                  (s[11] = 0),
                                  (s[12] = n.x),
                                  (s[13] = n.y),
                                  (s[14] = n.z),
                                  (s[15] = 1),
                                  s
                              );
                          }),
                          (S[i] = n)),
                    n
                );
            }),
                (R.eastNorthUpToFixedFrame = R.localFrameToFixedFrameGenerator("east", "north")),
                (R.northEastDownToFixedFrame = R.localFrameToFixedFrameGenerator("north", "east")),
                (R.northUpEastToFixedFrame = R.localFrameToFixedFrameGenerator("north", "up")),
                (R.northWestUpToFixedFrame = R.localFrameToFixedFrameGenerator("north", "west"));
            var x = new v(),
                M = new r(1, 1, 1),
                C = new _();
            R.headingPitchRollToFixedFrame = function(e, t, n, a, i) {
                a = o(a, R.eastNorthUpToFixedFrame);
                var u = v.fromHeadingPitchRoll(t, x),
                    s = _.fromTranslationQuaternionRotationScale(r.ZERO, u, M, C);
                return (i = a(e, n, i)), _.multiply(i, s, i);
            };
            var P = new _(),
                b = new E();
            R.headingPitchRollQuaternion = function(e, t, r, n, a) {
                var i = R.headingPitchRollToFixedFrame(e, t, r, n, P),
                    o = _.getRotation(i, b);
                return v.fromRotationMatrix(o, a);
            };
            var U = new r(1, 1, 1),
                D = new r(),
                L = new _(),
                F = new _(),
                B = new E(),
                z = new v();
            R.fixedFrameToHeadingPitchRoll = function(e, t, n, a) {
                (t = o(t, f.WGS84)), (n = o(n, R.eastNorthUpToFixedFrame)), u(a) || (a = new h());
                var i = _.getTranslation(e, D);
                if (r.equals(i, r.ZERO)) return (a.heading = 0), (a.pitch = 0), (a.roll = 0), a;
                var s = _.inverseTransformation(n(i, t, L), L),
                    c = _.setScale(e, U, F);
                (c = _.setTranslation(c, r.ZERO, c)), (s = _.multiply(s, c, s));
                var l = v.fromRotationMatrix(_.getRotation(s, B), z);
                return (l = v.normalize(l, l)), h.fromQuaternion(l, a);
            };
            var q = m.TWO_PI / 86400,
                G = new y();
            (R.computeTemeToPseudoFixedMatrix = function(e, t) {
                G = y.addSeconds(e, -y.computeTaiMinusUtc(e), G);
                var r,
                    n = G.dayNumber,
                    a = G.secondsOfDay,
                    i = n - 2451545;
                r =
                    a >= 43200
                        ? (i + 0.5) / T.DAYS_PER_JULIAN_CENTURY
                        : (i - 0.5) / T.DAYS_PER_JULIAN_CENTURY;
                var o = 24110.54841 + r * (8640184.812866 + r * (0.093104 + -62e-7 * r)),
                    s = (o * q) % m.TWO_PI,
                    c = 72921158553e-15 + 1.1772758384668e-19 * (n - 2451545.5),
                    l = (a + 0.5 * T.SECONDS_PER_DAY) % T.SECONDS_PER_DAY,
                    f = s + c * l,
                    h = Math.cos(f),
                    d = Math.sin(f);
                return u(t)
                    ? ((t[0] = h),
                      (t[1] = -d),
                      (t[2] = 0),
                      (t[3] = d),
                      (t[4] = h),
                      (t[5] = 0),
                      (t[6] = 0),
                      (t[7] = 0),
                      (t[8] = 1),
                      t)
                    : new E(h, d, 0, -d, h, 0, 0, 0, 1);
            }),
                (R.iau2006XysData = new d()),
                (R.earthOrientationParameters = c.NONE);
            (R.preloadIcrfFixed = function(t) {
                var r = t.start.dayNumber,
                    n = t.start.secondsOfDay + 32.184,
                    a = t.stop.dayNumber,
                    i = t.stop.secondsOfDay + 32.184,
                    o = R.iau2006XysData.preload(r, n, a, i),
                    u = R.earthOrientationParameters.getPromiseToLoad();
                return e.all([o, u]);
            }),
                (R.computeIcrfToFixedMatrix = function(e, t) {
                    u(t) || (t = new E());
                    var r = R.computeFixedToIcrfMatrix(e, t);
                    if (u(r)) return E.transpose(r, t);
                });
            var V = new p(0, 0, 0),
                X = new l(0, 0, 0, 0, 0, 0),
                W = new E(),
                H = new E();
            R.computeFixedToIcrfMatrix = function(e, t) {
                u(t) || (t = new E());
                var r = R.earthOrientationParameters.compute(e, X);
                if (u(r)) {
                    var n = e.dayNumber,
                        a = e.secondsOfDay + 32.184,
                        i = R.iau2006XysData.computeXysRadians(n, a, V);
                    if (u(i)) {
                        var o = i.x + r.xPoleOffset,
                            s = i.y + r.yPoleOffset,
                            c = 1 / (1 + Math.sqrt(1 - o * o - s * s)),
                            l = W;
                        (l[0] = 1 - c * o * o),
                            (l[3] = -c * o * s),
                            (l[6] = o),
                            (l[1] = -c * o * s),
                            (l[4] = 1 - c * s * s),
                            (l[7] = s),
                            (l[2] = -o),
                            (l[5] = -s),
                            (l[8] = 1 - c * (o * o + s * s));
                        var f = E.fromRotationZ(-i.s, H),
                            h = E.multiply(l, f, W),
                            d = e.dayNumber,
                            p = e.secondsOfDay - y.computeTaiMinusUtc(e) + r.ut1MinusUtc,
                            _ = d - 2451545,
                            v = p / T.SECONDS_PER_DAY,
                            A = 0.779057273264 + v + 0.00273781191135448 * (_ + v);
                        A = (A % 1) * m.TWO_PI;
                        var g = E.fromRotationZ(A, H),
                            S = E.multiply(h, g, W),
                            w = Math.cos(r.xPoleWander),
                            N = Math.cos(r.yPoleWander),
                            O = Math.sin(r.xPoleWander),
                            I = Math.sin(r.yPoleWander),
                            x = n - 2451545 + a / T.SECONDS_PER_DAY;
                        x /= 36525;
                        var M = (-47e-6 * x * m.RADIANS_PER_DEGREE) / 3600,
                            C = Math.cos(M),
                            P = Math.sin(M),
                            b = H;
                        return (
                            (b[0] = w * C),
                            (b[1] = w * P),
                            (b[2] = O),
                            (b[3] = -N * P + I * O * C),
                            (b[4] = N * C + I * O * P),
                            (b[5] = -I * w),
                            (b[6] = -I * P - N * O * C),
                            (b[7] = I * C - N * O * P),
                            (b[8] = N * w),
                            E.multiply(S, b, t)
                        );
                    }
                }
            };
            var Y = new n();
            (R.pointToWindowCoordinates = function(e, t, r, n) {
                return (n = R.pointToGLWindowCoordinates(e, t, r, n)), (n.y = 2 * t[5] - n.y), n;
            }),
                (R.pointToGLWindowCoordinates = function(e, r, a, i) {
                    u(i) || (i = new t());
                    var o = Y;
                    return (
                        _.multiplyByVector(e, n.fromElements(a.x, a.y, a.z, 1, o), o),
                        n.multiplyByScalar(o, 1 / o.w, o),
                        _.multiplyByVector(r, o, o),
                        t.fromCartesian4(o, i)
                    );
                });
            var k = new r(),
                Z = new r(),
                j = new r();
            R.rotationMatrixFromPositionVelocity = function(e, t, n, a) {
                var i = o(n, f.WGS84).geodeticSurfaceNormal(e, k),
                    s = r.cross(t, i, Z);
                r.equalsEpsilon(s, r.ZERO, m.EPSILON6) && (s = r.clone(r.UNIT_X, s));
                var c = r.cross(s, t, j);
                return (
                    r.normalize(c, c),
                    r.cross(t, c, s),
                    r.negate(s, s),
                    r.normalize(s, s),
                    u(a) || (a = new E()),
                    (a[0] = t.x),
                    (a[1] = t.y),
                    (a[2] = t.z),
                    (a[3] = s.x),
                    (a[4] = s.y),
                    (a[5] = s.z),
                    (a[6] = c.x),
                    (a[7] = c.y),
                    (a[8] = c.z),
                    a
                );
            };
            var K = new _(0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1),
                J = new a(),
                Q = new r(),
                $ = new r(),
                ee = new E(),
                te = new _(),
                re = new _();
            return (
                (R.basisTo2D = function(e, t, n) {
                    var a = _.getTranslation(t, $),
                        i = e.ellipsoid,
                        o = i.cartesianToCartographic(a, J),
                        u = e.project(o, Q);
                    r.fromElements(u.z, u.x, u.y, u);
                    var s = R.eastNorthUpToFixedFrame(a, i, te),
                        c = _.inverseTransformation(s, re),
                        l = _.getRotation(t, ee),
                        f = _.multiplyByMatrix3(c, l, n);
                    return _.multiply(K, f, n), _.setTranslation(n, u, n), n;
                }),
                (R.wgs84To2DModelMatrix = function(e, t, n) {
                    var a = e.ellipsoid,
                        i = R.eastNorthUpToFixedFrame(t, a, te),
                        o = _.inverseTransformation(i, re),
                        u = a.cartesianToCartographic(t, J),
                        s = e.project(u, Q);
                    r.fromElements(s.z, s.x, s.y, s);
                    var c = _.fromTranslation(s, te);
                    return _.multiply(K, o, n), _.multiply(c, n, n), n;
                }),
                R
            );
        }),
        define("Core/Geometry", [
            "./Cartesian2",
            "./Cartesian3",
            "./Cartographic",
            "./Check",
            "./defaultValue",
            "./defined",
            "./DeveloperError",
            "./GeometryOffsetAttribute",
            "./GeometryType",
            "./Matrix2",
            "./Matrix3",
            "./Matrix4",
            "./PrimitiveType",
            "./Quaternion",
            "./Rectangle",
            "./Transforms"
        ], function(e, t, r, n, a, i, o, u, s, c, l, f, h, d, p, y) {
            "use strict";
            function m(e) {
                (e = a(e, a.EMPTY_OBJECT)),
                    (this.attributes = e.attributes),
                    (this.indices = e.indices),
                    (this.primitiveType = a(e.primitiveType, h.TRIANGLES)),
                    (this.boundingSphere = e.boundingSphere),
                    (this.geometryType = a(e.geometryType, s.NONE)),
                    (this.boundingSphereCV = e.boundingSphereCV),
                    (this.offsetAttribute = e.offsetAttribute);
            }
            m.computeNumberOfVertices = function(e) {
                var t = -1;
                for (var r in e.attributes)
                    if (
                        e.attributes.hasOwnProperty(r) &&
                        i(e.attributes[r]) &&
                        i(e.attributes[r].values)
                    ) {
                        var n = e.attributes[r],
                            a = n.values.length / n.componentsPerAttribute;
                        t = a;
                    }
                return t;
            };
            var E = new r(),
                _ = new t(),
                v = new f(),
                T = [new r(), new r(), new r()],
                R = [new e(), new e(), new e()],
                A = [new e(), new e(), new e()],
                g = new t(),
                S = new d(),
                w = new f(),
                N = new c();
            return (
                (m._textureCoordinateRotationPoints = function(n, a, i, o) {
                    var u,
                        s = p.center(o, E),
                        h = r.toCartesian(s, i, _),
                        m = y.eastNorthUpToFixedFrame(h, i, v),
                        O = f.inverse(m, v),
                        I = R,
                        x = T;
                    (x[0].longitude = o.west),
                        (x[0].latitude = o.south),
                        (x[1].longitude = o.west),
                        (x[1].latitude = o.north),
                        (x[2].longitude = o.east),
                        (x[2].latitude = o.south);
                    var M = g;
                    for (u = 0; u < 3; u++)
                        r.toCartesian(x[u], i, M),
                            (M = f.multiplyByPointAsVector(O, M, M)),
                            (I[u].x = M.x),
                            (I[u].y = M.y);
                    var C = d.fromAxisAngle(t.UNIT_Z, -a, S),
                        P = l.fromQuaternion(C, w),
                        b = n.length,
                        U = Number.POSITIVE_INFINITY,
                        D = Number.POSITIVE_INFINITY,
                        L = Number.NEGATIVE_INFINITY,
                        F = Number.NEGATIVE_INFINITY;
                    for (u = 0; u < b; u++)
                        (M = f.multiplyByPointAsVector(O, n[u], M)),
                            (M = l.multiplyByVector(P, M, M)),
                            (U = Math.min(U, M.x)),
                            (D = Math.min(D, M.y)),
                            (L = Math.max(L, M.x)),
                            (F = Math.max(F, M.y));
                    var B = c.fromRotation(a, N),
                        z = A;
                    (z[0].x = U),
                        (z[0].y = D),
                        (z[1].x = U),
                        (z[1].y = F),
                        (z[2].x = L),
                        (z[2].y = D);
                    var q = I[0],
                        G = I[2].x - q.x,
                        V = I[1].y - q.y;
                    for (u = 0; u < 3; u++) {
                        var X = z[u];
                        c.multiplyByVector(B, X, X),
                            (X.x = (X.x - q.x) / G),
                            (X.y = (X.y - q.y) / V);
                    }
                    var W = z[0],
                        H = z[1],
                        Y = z[2],
                        k = new Array(6);
                    return e.pack(W, k), e.pack(H, k, 2), e.pack(Y, k, 4), k;
                }),
                m
            );
        }),
        define("Core/GeometryAttribute", [
            "./defaultValue",
            "./defined",
            "./DeveloperError"
        ], function(e, t, r) {
            "use strict";
            function n(t) {
                (t = e(t, e.EMPTY_OBJECT)),
                    (this.componentDatatype = t.componentDatatype),
                    (this.componentsPerAttribute = t.componentsPerAttribute),
                    (this.normalize = e(t.normalize, !1)),
                    (this.values = t.values);
            }
            return n;
        }),
        define("Core/GeometryAttributes", ["./defaultValue"], function(e) {
            "use strict";
            function t(t) {
                (t = e(t, e.EMPTY_OBJECT)),
                    (this.position = t.position),
                    (this.normal = t.normal),
                    (this.st = t.st),
                    (this.bitangent = t.bitangent),
                    (this.tangent = t.tangent),
                    (this.color = t.color);
            }
            return t;
        }),
        define("Core/GeometryInstance", [
            "./defaultValue",
            "./defined",
            "./DeveloperError",
            "./Matrix4"
        ], function(e, t, r, n) {
            "use strict";
            function a(t) {
                (t = e(t, e.EMPTY_OBJECT)),
                    (this.geometry = t.geometry),
                    (this.modelMatrix = n.clone(e(t.modelMatrix, n.IDENTITY))),
                    (this.id = t.id),
                    (this.pickPrimitive = t.pickPrimitive),
                    (this.attributes = e(t.attributes, {})),
                    (this.westHemisphereGeometry = void 0),
                    (this.eastHemisphereGeometry = void 0);
            }
            return a;
        }),
        define("Core/AttributeCompression", [
            "./Cartesian2",
            "./Cartesian3",
            "./Check",
            "./defined",
            "./DeveloperError",
            "./Math"
        ], function(e, t, r, n, a, i) {
            "use strict";
            function o(e) {
                return (l[0] = e), l[0];
            }
            function u(e) {
                return (e >> 1) ^ -(1 & e);
            }
            var s = {};
            (s.octEncodeInRange = function(e, t, r) {
                if (
                    ((r.x = e.x / (Math.abs(e.x) + Math.abs(e.y) + Math.abs(e.z))),
                    (r.y = e.y / (Math.abs(e.x) + Math.abs(e.y) + Math.abs(e.z))),
                    e.z < 0)
                ) {
                    var n = r.x,
                        a = r.y;
                    (r.x = (1 - Math.abs(a)) * i.signNotZero(n)),
                        (r.y = (1 - Math.abs(n)) * i.signNotZero(a));
                }
                return (r.x = i.toSNorm(r.x, t)), (r.y = i.toSNorm(r.y, t)), r;
            }),
                (s.octEncode = function(e, t) {
                    return s.octEncodeInRange(e, 255, t);
                });
            var c = new e(),
                l = new Uint8Array(1);
            (s.octEncodeToCartesian4 = function(e, t) {
                return (
                    s.octEncodeInRange(e, 65535, c),
                    (t.x = o(c.x * (1 / 256))),
                    (t.y = o(c.x)),
                    (t.z = o(c.y * (1 / 256))),
                    (t.w = o(c.y)),
                    t
                );
            }),
                (s.octDecodeInRange = function(e, r, n, a) {
                    if (
                        ((a.x = i.fromSNorm(e, n)),
                        (a.y = i.fromSNorm(r, n)),
                        (a.z = 1 - (Math.abs(a.x) + Math.abs(a.y))),
                        a.z < 0)
                    ) {
                        var o = a.x;
                        (a.x = (1 - Math.abs(a.y)) * i.signNotZero(o)),
                            (a.y = (1 - Math.abs(o)) * i.signNotZero(a.y));
                    }
                    return t.normalize(a, a);
                }),
                (s.octDecode = function(e, t, r) {
                    return s.octDecodeInRange(e, t, 255, r);
                }),
                (s.octDecodeFromCartesian4 = function(e, t) {
                    var r = e.x,
                        n = e.y,
                        a = e.z,
                        i = e.w,
                        o = 256 * r + n,
                        u = 256 * a + i;
                    return s.octDecodeInRange(o, u, 65535, t);
                }),
                (s.octPackFloat = function(e) {
                    return 256 * e.x + e.y;
                });
            var f = new e();
            return (
                (s.octEncodeFloat = function(e) {
                    return s.octEncode(e, f), s.octPackFloat(f);
                }),
                (s.octDecodeFloat = function(e, t) {
                    var r = e / 256,
                        n = Math.floor(r),
                        a = 256 * (r - n);
                    return s.octDecode(n, a, t);
                }),
                (s.octPack = function(e, t, r, n) {
                    var a = s.octEncodeFloat(e),
                        i = s.octEncodeFloat(t),
                        o = s.octEncode(r, f);
                    return (n.x = 65536 * o.x + a), (n.y = 65536 * o.y + i), n;
                }),
                (s.octUnpack = function(e, t, r, n) {
                    var a = e.x / 65536,
                        i = Math.floor(a),
                        o = 65536 * (a - i);
                    a = e.y / 65536;
                    var u = Math.floor(a),
                        c = 65536 * (a - u);
                    s.octDecodeFloat(o, t), s.octDecodeFloat(c, r), s.octDecode(i, u, n);
                }),
                (s.compressTextureCoordinates = function(e) {
                    return 4096 * ((4095 * e.x) | 0) + ((4095 * e.y) | 0);
                }),
                (s.decompressTextureCoordinates = function(e, t) {
                    var r = e / 4096,
                        n = Math.floor(r);
                    return (t.x = n / 4095), (t.y = (e - 4096 * n) / 4095), t;
                }),
                (s.zigZagDeltaDecode = function(e, t, r) {
                    for (var a = e.length, i = 0, o = 0, s = 0, c = 0; c < a; ++c)
                        (i += u(e[c])),
                            (o += u(t[c])),
                            (e[c] = i),
                            (t[c] = o),
                            n(r) && ((s += u(r[c])), (r[c] = s));
                }),
                s
            );
        }),
        define("Core/barycentricCoordinates", [
            "./Cartesian2",
            "./Cartesian3",
            "./Check",
            "./defined",
            "./Math"
        ], function(e, t, r, n, a) {
            "use strict";
            function i(r, i, c, l, f) {
                n(f) || (f = new t());
                var h, d, p, y, m, E, _, v;
                if (n(i.z)) {
                    if (t.equalsEpsilon(r, i, a.EPSILON14)) return t.clone(t.UNIT_X, f);
                    if (t.equalsEpsilon(r, c, a.EPSILON14)) return t.clone(t.UNIT_Y, f);
                    if (t.equalsEpsilon(r, l, a.EPSILON14)) return t.clone(t.UNIT_Z, f);
                    (h = t.subtract(c, i, o)),
                        (d = t.subtract(l, i, u)),
                        (p = t.subtract(r, i, s)),
                        (y = t.dot(h, h)),
                        (m = t.dot(h, d)),
                        (E = t.dot(h, p)),
                        (_ = t.dot(d, d)),
                        (v = t.dot(d, p));
                } else {
                    if (e.equalsEpsilon(r, i, a.EPSILON14)) return t.clone(t.UNIT_X, f);
                    if (e.equalsEpsilon(r, c, a.EPSILON14)) return t.clone(t.UNIT_Y, f);
                    if (e.equalsEpsilon(r, l, a.EPSILON14)) return t.clone(t.UNIT_Z, f);
                    (h = e.subtract(c, i, o)),
                        (d = e.subtract(l, i, u)),
                        (p = e.subtract(r, i, s)),
                        (y = e.dot(h, h)),
                        (m = e.dot(h, d)),
                        (E = e.dot(h, p)),
                        (_ = e.dot(d, d)),
                        (v = e.dot(d, p));
                }
                var T = y * _ - m * m,
                    R = 1 / T;
                return (
                    (f.y = (_ * E - m * v) * R),
                    (f.z = (y * v - m * E) * R),
                    (f.x = 1 - f.y - f.z),
                    f
                );
            }
            var o = new t(),
                u = new t(),
                s = new t();
            return i;
        }),
        define("Core/EncodedCartesian3", ["./Cartesian3", "./Check", "./defined"], function(
            e,
            t,
            r
        ) {
            "use strict";
            function n() {
                (this.high = e.clone(e.ZERO)), (this.low = e.clone(e.ZERO));
            }
            n.encode = function(e, t) {
                r(t) || (t = { high: 0, low: 0 });
                var n;
                return (
                    e >= 0
                        ? ((n = 65536 * Math.floor(e / 65536)), (t.high = n), (t.low = e - n))
                        : ((n = 65536 * Math.floor(-e / 65536)), (t.high = -n), (t.low = e + n)),
                    t
                );
            };
            var a = { high: 0, low: 0 };
            n.fromCartesian = function(e, t) {
                r(t) || (t = new n());
                var i = t.high,
                    o = t.low;
                return (
                    n.encode(e.x, a),
                    (i.x = a.high),
                    (o.x = a.low),
                    n.encode(e.y, a),
                    (i.y = a.high),
                    (o.y = a.low),
                    n.encode(e.z, a),
                    (i.z = a.high),
                    (o.z = a.low),
                    t
                );
            };
            var i = new n();
            return (
                (n.writeElements = function(e, t, r) {
                    n.fromCartesian(e, i);
                    var a = i.high,
                        o = i.low;
                    (t[r] = a.x),
                        (t[r + 1] = a.y),
                        (t[r + 2] = a.z),
                        (t[r + 3] = o.x),
                        (t[r + 4] = o.y),
                        (t[r + 5] = o.z);
                }),
                n
            );
        }),
        define("Core/IndexDatatype", [
            "./defined",
            "./DeveloperError",
            "./freezeObject",
            "./Math",
            "./WebGLConstants"
        ], function(e, t, r, n, a) {
            "use strict";
            var i = {
                UNSIGNED_BYTE: a.UNSIGNED_BYTE,
                UNSIGNED_SHORT: a.UNSIGNED_SHORT,
                UNSIGNED_INT: a.UNSIGNED_INT
            };
            return (
                (i.getSizeInBytes = function(e) {
                    switch (e) {
                        case i.UNSIGNED_BYTE:
                            return Uint8Array.BYTES_PER_ELEMENT;
                        case i.UNSIGNED_SHORT:
                            return Uint16Array.BYTES_PER_ELEMENT;
                        case i.UNSIGNED_INT:
                            return Uint32Array.BYTES_PER_ELEMENT;
                    }
                }),
                (i.validate = function(t) {
                    return (
                        e(t) &&
                        (t === i.UNSIGNED_BYTE || t === i.UNSIGNED_SHORT || t === i.UNSIGNED_INT)
                    );
                }),
                (i.createTypedArray = function(e, t) {
                    return e >= n.SIXTY_FOUR_KILOBYTES ? new Uint32Array(t) : new Uint16Array(t);
                }),
                (i.createTypedArrayFromArrayBuffer = function(e, t, r, a) {
                    return e >= n.SIXTY_FOUR_KILOBYTES
                        ? new Uint32Array(t, r, a)
                        : new Uint16Array(t, r, a);
                }),
                r(i)
            );
        }),
        define("Core/QuadraticRealPolynomial", ["./DeveloperError", "./Math"], function(e, t) {
            "use strict";
            function r(e, r, n) {
                var a = e + r;
                return t.sign(e) !== t.sign(r) &&
                    Math.abs(a / Math.max(Math.abs(e), Math.abs(r))) < n
                    ? 0
                    : a;
            }
            var n = {};
            return (
                (n.computeDiscriminant = function(e, t, r) {
                    return t * t - 4 * e * r;
                }),
                (n.computeRealRoots = function(e, n, a) {
                    var i;
                    if (0 === e) return 0 === n ? [] : [-a / n];
                    if (0 === n) {
                        if (0 === a) return [0, 0];
                        var o = Math.abs(a),
                            u = Math.abs(e);
                        if (o < u && o / u < t.EPSILON14) return [0, 0];
                        if (o > u && u / o < t.EPSILON14) return [];
                        if ((i = -a / e) < 0) return [];
                        var s = Math.sqrt(i);
                        return [-s, s];
                    }
                    if (0 === a) return (i = -n / e), i < 0 ? [i, 0] : [0, i];
                    var c = n * n,
                        l = 4 * e * a,
                        f = r(c, -l, t.EPSILON14);
                    if (f < 0) return [];
                    var h = -0.5 * r(n, t.sign(n) * Math.sqrt(f), t.EPSILON14);
                    return n > 0 ? [h / e, a / h] : [a / h, h / e];
                }),
                n
            );
        }),
        define("Core/CubicRealPolynomial", [
            "./DeveloperError",
            "./QuadraticRealPolynomial"
        ], function(e, t) {
            "use strict";
            function r(e, t, r, n) {
                var a,
                    i,
                    o = e,
                    u = t / 3,
                    s = r / 3,
                    c = n,
                    l = o * s,
                    f = u * c,
                    h = u * u,
                    d = s * s,
                    p = o * s - h,
                    y = o * c - u * s,
                    m = u * c - d,
                    E = 4 * p * m - y * y;
                if (E < 0) {
                    var _, v, T;
                    h * f >= l * d
                        ? ((_ = o), (v = p), (T = -2 * u * p + o * y))
                        : ((_ = c), (v = m), (T = -c * y + 2 * s * m));
                    var R = T < 0 ? -1 : 1,
                        A = -R * Math.abs(_) * Math.sqrt(-E);
                    i = -T + A;
                    var g = i / 2,
                        S = g < 0 ? -Math.pow(-g, 1 / 3) : Math.pow(g, 1 / 3),
                        w = i === A ? -S : -v / S;
                    return (
                        (a = v <= 0 ? S + w : -T / (S * S + w * w + v)),
                        h * f >= l * d ? [(a - u) / o] : [-c / (a + s)]
                    );
                }
                var N = p,
                    O = -2 * u * p + o * y,
                    I = m,
                    x = -c * y + 2 * s * m,
                    M = Math.sqrt(E),
                    C = Math.sqrt(3) / 2,
                    P = Math.abs(Math.atan2(o * M, -O) / 3);
                a = 2 * Math.sqrt(-N);
                var b = Math.cos(P);
                i = a * b;
                var U = a * (-b / 2 - C * Math.sin(P)),
                    D = i + U > 2 * u ? i - u : U - u,
                    L = o,
                    F = D / L;
                (P = Math.abs(Math.atan2(c * M, -x) / 3)),
                    (a = 2 * Math.sqrt(-I)),
                    (b = Math.cos(P)),
                    (i = a * b),
                    (U = a * (-b / 2 - C * Math.sin(P)));
                var B = -c,
                    z = i + U < 2 * s ? i + s : U + s,
                    q = B / z,
                    G = L * z,
                    V = -D * z - L * B,
                    X = D * B,
                    W = (s * V - u * X) / (-u * V + s * G);
                return F <= W
                    ? F <= q
                        ? W <= q
                            ? [F, W, q]
                            : [F, q, W]
                        : [q, F, W]
                    : F <= q
                    ? [W, F, q]
                    : W <= q
                    ? [W, q, F]
                    : [q, W, F];
            }
            var n = {};
            return (
                (n.computeDiscriminant = function(e, t, r, n) {
                    var a = e * e,
                        i = t * t,
                        o = r * r;
                    return (
                        18 * e * t * r * n + i * o - 27 * a * (n * n) - 4 * (e * o * r + i * t * n)
                    );
                }),
                (n.computeRealRoots = function(e, n, a, i) {
                    var o, u;
                    if (0 === e) return t.computeRealRoots(n, a, i);
                    if (0 === n) {
                        if (0 === a) {
                            if (0 === i) return [0, 0, 0];
                            u = -i / e;
                            var s = u < 0 ? -Math.pow(-u, 1 / 3) : Math.pow(u, 1 / 3);
                            return [s, s, s];
                        }
                        return 0 === i
                            ? ((o = t.computeRealRoots(e, 0, a)),
                              0 === o.Length ? [0] : [o[0], 0, o[1]])
                            : r(e, 0, a, i);
                    }
                    return 0 === a
                        ? 0 === i
                            ? ((u = -n / e), u < 0 ? [u, 0, 0] : [0, 0, u])
                            : r(e, n, 0, i)
                        : 0 === i
                        ? ((o = t.computeRealRoots(e, n, a)),
                          0 === o.length
                              ? [0]
                              : o[1] <= 0
                              ? [o[0], o[1], 0]
                              : o[0] >= 0
                              ? [0, o[0], o[1]]
                              : [o[0], 0, o[1]])
                        : r(e, n, a, i);
                }),
                n
            );
        }),
        define("Core/QuarticRealPolynomial", [
            "./CubicRealPolynomial",
            "./DeveloperError",
            "./Math",
            "./QuadraticRealPolynomial"
        ], function(e, t, r, n) {
            "use strict";
            function a(t, a, i, o) {
                var u = t * t,
                    s = a - (3 * u) / 8,
                    c = i - (a * t) / 2 + (u * t) / 8,
                    l = o - (i * t) / 4 + (a * u) / 16 - (3 * u * u) / 256,
                    f = e.computeRealRoots(1, 2 * s, s * s - 4 * l, -c * c);
                if (f.length > 0) {
                    var h = -t / 4,
                        d = f[f.length - 1];
                    if (Math.abs(d) < r.EPSILON14) {
                        var p = n.computeRealRoots(1, s, l);
                        if (2 === p.length) {
                            var y,
                                m = p[0],
                                E = p[1];
                            if (m >= 0 && E >= 0) {
                                var _ = Math.sqrt(m),
                                    v = Math.sqrt(E);
                                return [h - v, h - _, h + _, h + v];
                            }
                            if (m >= 0 && E < 0) return (y = Math.sqrt(m)), [h - y, h + y];
                            if (m < 0 && E >= 0) return (y = Math.sqrt(E)), [h - y, h + y];
                        }
                        return [];
                    }
                    if (d > 0) {
                        var T = Math.sqrt(d),
                            R = (s + d - c / T) / 2,
                            A = (s + d + c / T) / 2,
                            g = n.computeRealRoots(1, T, R),
                            S = n.computeRealRoots(1, -T, A);
                        return 0 !== g.length
                            ? ((g[0] += h),
                              (g[1] += h),
                              0 !== S.length
                                  ? ((S[0] += h),
                                    (S[1] += h),
                                    g[1] <= S[0]
                                        ? [g[0], g[1], S[0], S[1]]
                                        : S[1] <= g[0]
                                        ? [S[0], S[1], g[0], g[1]]
                                        : g[0] >= S[0] && g[1] <= S[1]
                                        ? [S[0], g[0], g[1], S[1]]
                                        : S[0] >= g[0] && S[1] <= g[1]
                                        ? [g[0], S[0], S[1], g[1]]
                                        : g[0] > S[0] && g[0] < S[1]
                                        ? [S[0], g[0], S[1], g[1]]
                                        : [g[0], S[0], g[1], S[1]])
                                  : g)
                            : 0 !== S.length
                            ? ((S[0] += h), (S[1] += h), S)
                            : [];
                    }
                }
                return [];
            }
            function i(t, a, i, o) {
                var u = i * i,
                    s = a * a,
                    c = t * t,
                    l = -2 * a,
                    f = i * t + s - 4 * o,
                    h = c * o - i * a * t + u,
                    d = e.computeRealRoots(1, l, f, h);
                if (d.length > 0) {
                    var p,
                        y,
                        m = d[0],
                        E = a - m,
                        _ = E * E,
                        v = t / 2,
                        T = E / 2,
                        R = _ - 4 * o,
                        A = _ + 4 * Math.abs(o),
                        g = c - 4 * m,
                        S = c + 4 * Math.abs(m);
                    if (m < 0 || R * S < g * A) {
                        var w = Math.sqrt(g);
                        (p = w / 2), (y = 0 === w ? 0 : (t * T - i) / w);
                    } else {
                        var N = Math.sqrt(R);
                        (p = 0 === N ? 0 : (t * T - i) / N), (y = N / 2);
                    }
                    var O, I;
                    0 === v && 0 === p
                        ? ((O = 0), (I = 0))
                        : r.sign(v) === r.sign(p)
                        ? ((O = v + p), (I = m / O))
                        : ((I = v - p), (O = m / I));
                    var x, M;
                    0 === T && 0 === y
                        ? ((x = 0), (M = 0))
                        : r.sign(T) === r.sign(y)
                        ? ((x = T + y), (M = o / x))
                        : ((M = T - y), (x = o / M));
                    var C = n.computeRealRoots(1, O, x),
                        P = n.computeRealRoots(1, I, M);
                    if (0 !== C.length)
                        return 0 !== P.length
                            ? C[1] <= P[0]
                                ? [C[0], C[1], P[0], P[1]]
                                : P[1] <= C[0]
                                ? [P[0], P[1], C[0], C[1]]
                                : C[0] >= P[0] && C[1] <= P[1]
                                ? [P[0], C[0], C[1], P[1]]
                                : P[0] >= C[0] && P[1] <= C[1]
                                ? [C[0], P[0], P[1], C[1]]
                                : C[0] > P[0] && C[0] < P[1]
                                ? [P[0], C[0], P[1], C[1]]
                                : [C[0], P[0], C[1], P[1]]
                            : C;
                    if (0 !== P.length) return P;
                }
                return [];
            }
            var o = {};
            return (
                (o.computeDiscriminant = function(e, t, r, n, a) {
                    var i = e * e,
                        o = i * e,
                        u = t * t,
                        s = u * t,
                        c = r * r,
                        l = c * r,
                        f = n * n,
                        h = f * n,
                        d = a * a;
                    return (
                        u * c * f -
                        4 * s * h -
                        4 * e * l * f +
                        18 * e * t * r * h -
                        27 * i * f * f +
                        256 * o * (d * a) +
                        a *
                            (18 * s * r * n -
                                4 * u * l +
                                16 * e * c * c -
                                80 * e * t * c * n -
                                6 * e * u * f +
                                144 * i * r * f) +
                        d * (144 * e * u * r - 27 * u * u - 128 * i * c - 192 * i * t * n)
                    );
                }),
                (o.computeRealRoots = function(t, n, o, u, s) {
                    if (Math.abs(t) < r.EPSILON15) return e.computeRealRoots(n, o, u, s);
                    var c = n / t,
                        l = o / t,
                        f = u / t,
                        h = s / t,
                        d = c < 0 ? 1 : 0;
                    switch (
                        ((d += l < 0 ? d + 1 : d),
                        (d += f < 0 ? d + 1 : d),
                        (d += h < 0 ? d + 1 : d))
                    ) {
                        case 0:
                            return a(c, l, f, h);
                        case 1:
                        case 2:
                            return i(c, l, f, h);
                        case 3:
                        case 4:
                            return a(c, l, f, h);
                        case 5:
                            return i(c, l, f, h);
                        case 6:
                        case 7:
                            return a(c, l, f, h);
                        case 8:
                            return i(c, l, f, h);
                        case 9:
                        case 10:
                            return a(c, l, f, h);
                        case 11:
                            return i(c, l, f, h);
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                            return a(c, l, f, h);
                        default:
                            return;
                    }
                }),
                o
            );
        }),
        define("Core/Ray", ["./Cartesian3", "./Check", "./defaultValue", "./defined"], function(
            e,
            t,
            r,
            n
        ) {
            "use strict";
            function a(t, n) {
                (n = e.clone(r(n, e.ZERO))),
                    e.equals(n, e.ZERO) || e.normalize(n, n),
                    (this.origin = e.clone(r(t, e.ZERO))),
                    (this.direction = n);
            }
            return (
                (a.clone = function(t, r) {
                    if (n(t))
                        return n(r)
                            ? ((r.origin = e.clone(t.origin)),
                              (r.direction = e.clone(t.direction)),
                              r)
                            : new a(t.origin, t.direction);
                }),
                (a.getPoint = function(t, r, a) {
                    return (
                        n(a) || (a = new e()),
                        (a = e.multiplyByScalar(t.direction, r, a)),
                        e.add(t.origin, a, a)
                    );
                }),
                a
            );
        }),
        define("Core/IntersectionTests", [
            "./Cartesian3",
            "./Cartographic",
            "./defaultValue",
            "./defined",
            "./DeveloperError",
            "./Interval",
            "./Math",
            "./Matrix3",
            "./QuadraticRealPolynomial",
            "./QuarticRealPolynomial",
            "./Ray"
        ], function(e, t, r, n, a, i, o, u, s, c, l) {
            "use strict";
            function f(e, t, r, n) {
                var a = t * t - 4 * e * r;
                if (!(a < 0)) {
                    if (a > 0) {
                        var i = 1 / (2 * e),
                            o = Math.sqrt(a),
                            u = (-t + o) * i,
                            s = (-t - o) * i;
                        return (
                            u < s ? ((n.root0 = u), (n.root1 = s)) : ((n.root0 = s), (n.root1 = u)),
                            n
                        );
                    }
                    var c = -t / (2 * e);
                    if (0 !== c) return (n.root0 = n.root1 = c), n;
                }
            }
            function h(t, r, a) {
                n(a) || (a = new i());
                var o = t.origin,
                    u = t.direction,
                    s = r.center,
                    c = r.radius * r.radius,
                    l = e.subtract(o, s, _),
                    h = e.dot(u, u),
                    d = 2 * e.dot(u, l),
                    p = e.magnitudeSquared(l) - c,
                    y = f(h, d, p, A);
                if (n(y)) return (a.start = y.root0), (a.stop = y.root1), a;
            }
            function d(e, t, r) {
                var n = e + t;
                return o.sign(e) !== o.sign(t) &&
                    Math.abs(n / Math.max(Math.abs(e), Math.abs(t))) < r
                    ? 0
                    : n;
            }
            function p(t, r, n, a, i) {
                var l,
                    f = a * a,
                    h = i * i,
                    p = (t[u.COLUMN1ROW1] - t[u.COLUMN2ROW2]) * h,
                    y = i * (a * d(t[u.COLUMN1ROW0], t[u.COLUMN0ROW1], o.EPSILON15) + r.y),
                    m = t[u.COLUMN0ROW0] * f + t[u.COLUMN2ROW2] * h + a * r.x + n,
                    E = h * d(t[u.COLUMN2ROW1], t[u.COLUMN1ROW2], o.EPSILON15),
                    _ = i * (a * d(t[u.COLUMN2ROW0], t[u.COLUMN0ROW2]) + r.z),
                    v = [];
                if (0 === _ && 0 === E) {
                    if (((l = s.computeRealRoots(p, y, m)), 0 === l.length)) return v;
                    var T = l[0],
                        R = Math.sqrt(Math.max(1 - T * T, 0));
                    if (
                        (v.push(new e(a, i * T, i * -R)),
                        v.push(new e(a, i * T, i * R)),
                        2 === l.length)
                    ) {
                        var A = l[1],
                            g = Math.sqrt(Math.max(1 - A * A, 0));
                        v.push(new e(a, i * A, i * -g)), v.push(new e(a, i * A, i * g));
                    }
                    return v;
                }
                var S = _ * _,
                    w = E * E,
                    N = p * p,
                    O = _ * E,
                    I = N + w,
                    x = 2 * (y * p + O),
                    M = 2 * m * p + y * y - w + S,
                    C = 2 * (m * y - O),
                    P = m * m - S;
                if (0 === I && 0 === x && 0 === M && 0 === C) return v;
                l = c.computeRealRoots(I, x, M, C, P);
                var b = l.length;
                if (0 === b) return v;
                for (var U = 0; U < b; ++U) {
                    var D,
                        L = l[U],
                        F = L * L,
                        B = Math.max(1 - F, 0),
                        z = Math.sqrt(B);
                    D =
                        o.sign(p) === o.sign(m)
                            ? d(p * F + m, y * L, o.EPSILON12)
                            : o.sign(m) === o.sign(y * L)
                            ? d(p * F, y * L + m, o.EPSILON12)
                            : d(p * F + y * L, m, o.EPSILON12);
                    var q = d(E * L, _, o.EPSILON15),
                        G = D * q;
                    G < 0
                        ? v.push(new e(a, i * L, i * z))
                        : G > 0
                        ? v.push(new e(a, i * L, i * -z))
                        : 0 !== z
                        ? (v.push(new e(a, i * L, i * -z)), v.push(new e(a, i * L, i * z)), ++U)
                        : v.push(new e(a, i * L, i * z));
                }
                return v;
            }
            var y = {};
            y.rayPlane = function(t, r, a) {
                n(a) || (a = new e());
                var i = t.origin,
                    u = t.direction,
                    s = r.normal,
                    c = e.dot(s, u);
                if (!(Math.abs(c) < o.EPSILON15)) {
                    var l = (-r.distance - e.dot(s, i)) / c;
                    if (!(l < 0)) return (a = e.multiplyByScalar(u, l, a)), e.add(i, a, a);
                }
            };
            var m = new e(),
                E = new e(),
                _ = new e(),
                v = new e(),
                T = new e();
            (y.rayTriangleParametric = function(t, n, a, i, u) {
                u = r(u, !1);
                var s,
                    c,
                    l,
                    f,
                    h,
                    d = t.origin,
                    p = t.direction,
                    y = e.subtract(a, n, m),
                    R = e.subtract(i, n, E),
                    A = e.cross(p, R, _),
                    g = e.dot(y, A);
                if (u) {
                    if (g < o.EPSILON6) return;
                    if (((s = e.subtract(d, n, v)), (l = e.dot(s, A)) < 0 || l > g)) return;
                    if (((c = e.cross(s, y, T)), (f = e.dot(p, c)) < 0 || l + f > g)) return;
                    h = e.dot(R, c) / g;
                } else {
                    if (Math.abs(g) < o.EPSILON6) return;
                    var S = 1 / g;
                    if (((s = e.subtract(d, n, v)), (l = e.dot(s, A) * S) < 0 || l > 1)) return;
                    if (((c = e.cross(s, y, T)), (f = e.dot(p, c) * S) < 0 || l + f > 1)) return;
                    h = e.dot(R, c) * S;
                }
                return h;
            }),
                (y.rayTriangle = function(t, r, a, i, o, u) {
                    var s = y.rayTriangleParametric(t, r, a, i, o);
                    if (n(s) && !(s < 0))
                        return (
                            n(u) || (u = new e()),
                            e.multiplyByScalar(t.direction, s, u),
                            e.add(t.origin, u, u)
                        );
                });
            var R = new l();
            y.lineSegmentTriangle = function(t, r, a, i, o, u, s) {
                var c = R;
                e.clone(t, c.origin),
                    e.subtract(r, t, c.direction),
                    e.normalize(c.direction, c.direction);
                var l = y.rayTriangleParametric(c, a, i, o, u);
                if (!(!n(l) || l < 0 || l > e.distance(t, r)))
                    return (
                        n(s) || (s = new e()),
                        e.multiplyByScalar(c.direction, l, s),
                        e.add(c.origin, s, s)
                    );
            };
            var A = { root0: 0, root1: 0 };
            y.raySphere = function(e, t, r) {
                if (((r = h(e, t, r)), n(r) && !(r.stop < 0)))
                    return (r.start = Math.max(r.start, 0)), r;
            };
            var g = new l();
            y.lineSegmentSphere = function(t, r, a, i) {
                var o = g;
                e.clone(t, o.origin);
                var u = e.subtract(r, t, o.direction),
                    s = e.magnitude(u);
                if ((e.normalize(u, u), (i = h(o, a, i)), !(!n(i) || i.stop < 0 || i.start > s)))
                    return (i.start = Math.max(i.start, 0)), (i.stop = Math.min(i.stop, s)), i;
            };
            var S = new e(),
                w = new e();
            y.rayEllipsoid = function(t, r) {
                var n,
                    a,
                    o,
                    u,
                    s,
                    c = r.oneOverRadii,
                    l = e.multiplyComponents(c, t.origin, S),
                    f = e.multiplyComponents(c, t.direction, w),
                    h = e.magnitudeSquared(l),
                    d = e.dot(l, f);
                if (h > 1) {
                    if (d >= 0) return;
                    var p = d * d;
                    if (((n = h - 1), (a = e.magnitudeSquared(f)), (o = a * n), p < o)) return;
                    if (p > o) {
                        (u = d * d - o), (s = -d + Math.sqrt(u));
                        var y = s / a,
                            m = n / s;
                        return y < m ? new i(y, m) : { start: m, stop: y };
                    }
                    var E = Math.sqrt(n / a);
                    return new i(E, E);
                }
                return h < 1
                    ? ((n = h - 1),
                      (a = e.magnitudeSquared(f)),
                      (o = a * n),
                      (u = d * d - o),
                      (s = -d + Math.sqrt(u)),
                      new i(0, s / a))
                    : d < 0
                    ? ((a = e.magnitudeSquared(f)), new i(0, -d / a))
                    : void 0;
            };
            var N = new e(),
                O = new e(),
                I = new e(),
                x = new e(),
                M = new e(),
                C = new u(),
                P = new u(),
                b = new u(),
                U = new u(),
                D = new u(),
                L = new u(),
                F = new u(),
                B = new e(),
                z = new e(),
                q = new t();
            y.grazingAltitudeLocation = function(t, r) {
                var a = t.origin,
                    i = t.direction;
                if (!e.equals(a, e.ZERO)) {
                    var s = r.geodeticSurfaceNormal(a, N);
                    if (e.dot(i, s) >= 0) return a;
                }
                var c = n(this.rayEllipsoid(t, r)),
                    l = r.transformPositionToScaledSpace(i, N),
                    f = e.normalize(l, l),
                    h = e.mostOrthogonalAxis(l, x),
                    d = e.normalize(e.cross(h, f, O), O),
                    y = e.normalize(e.cross(f, d, I), I),
                    m = C;
                (m[0] = f.x),
                    (m[1] = f.y),
                    (m[2] = f.z),
                    (m[3] = d.x),
                    (m[4] = d.y),
                    (m[5] = d.z),
                    (m[6] = y.x),
                    (m[7] = y.y),
                    (m[8] = y.z);
                var E = u.transpose(m, P),
                    _ = u.fromScale(r.radii, b),
                    v = u.fromScale(r.oneOverRadii, U),
                    T = D;
                (T[0] = 0),
                    (T[1] = -i.z),
                    (T[2] = i.y),
                    (T[3] = i.z),
                    (T[4] = 0),
                    (T[5] = -i.x),
                    (T[6] = -i.y),
                    (T[7] = i.x),
                    (T[8] = 0);
                var R,
                    A,
                    g = u.multiply(u.multiply(E, v, L), T, L),
                    S = u.multiply(u.multiply(g, _, F), m, F),
                    w = u.multiplyByVector(g, a, M),
                    G = p(S, e.negate(w, N), 0, 0, 1),
                    V = G.length;
                if (V > 0) {
                    for (
                        var X = e.clone(e.ZERO, z), W = Number.NEGATIVE_INFINITY, H = 0;
                        H < V;
                        ++H
                    ) {
                        R = u.multiplyByVector(_, u.multiplyByVector(m, G[H], B), B);
                        var Y = e.normalize(e.subtract(R, a, x), x),
                            k = e.dot(Y, i);
                        k > W && ((W = k), (X = e.clone(R, X)));
                    }
                    var Z = r.cartesianToCartographic(X, q);
                    return (
                        (W = o.clamp(W, 0, 1)),
                        (A = e.magnitude(e.subtract(X, a, x)) * Math.sqrt(1 - W * W)),
                        (A = c ? -A : A),
                        (Z.height = A),
                        r.cartographicToCartesian(Z, new e())
                    );
                }
            };
            var G = new e();
            return (
                (y.lineSegmentPlane = function(t, r, a, i) {
                    n(i) || (i = new e());
                    var u = e.subtract(r, t, G),
                        s = a.normal,
                        c = e.dot(s, u);
                    if (!(Math.abs(c) < o.EPSILON6)) {
                        var l = e.dot(s, t),
                            f = -(a.distance + l) / c;
                        if (!(f < 0 || f > 1))
                            return e.multiplyByScalar(u, f, i), e.add(t, i, i), i;
                    }
                }),
                (y.trianglePlaneIntersection = function(t, r, n, a) {
                    var i = a.normal,
                        o = a.distance,
                        u = e.dot(i, t) + o < 0,
                        s = e.dot(i, r) + o < 0,
                        c = e.dot(i, n) + o < 0,
                        l = 0;
                    (l += u ? 1 : 0), (l += s ? 1 : 0), (l += c ? 1 : 0);
                    var f, h;
                    if (((1 !== l && 2 !== l) || ((f = new e()), (h = new e())), 1 === l)) {
                        if (u)
                            return (
                                y.lineSegmentPlane(t, r, a, f),
                                y.lineSegmentPlane(t, n, a, h),
                                { positions: [t, r, n, f, h], indices: [0, 3, 4, 1, 2, 4, 1, 4, 3] }
                            );
                        if (s)
                            return (
                                y.lineSegmentPlane(r, n, a, f),
                                y.lineSegmentPlane(r, t, a, h),
                                { positions: [t, r, n, f, h], indices: [1, 3, 4, 2, 0, 4, 2, 4, 3] }
                            );
                        if (c)
                            return (
                                y.lineSegmentPlane(n, t, a, f),
                                y.lineSegmentPlane(n, r, a, h),
                                { positions: [t, r, n, f, h], indices: [2, 3, 4, 0, 1, 4, 0, 4, 3] }
                            );
                    } else if (2 === l) {
                        if (!u)
                            return (
                                y.lineSegmentPlane(r, t, a, f),
                                y.lineSegmentPlane(n, t, a, h),
                                { positions: [t, r, n, f, h], indices: [1, 2, 4, 1, 4, 3, 0, 3, 4] }
                            );
                        if (!s)
                            return (
                                y.lineSegmentPlane(n, r, a, f),
                                y.lineSegmentPlane(t, r, a, h),
                                { positions: [t, r, n, f, h], indices: [2, 0, 4, 2, 4, 3, 1, 3, 4] }
                            );
                        if (!c)
                            return (
                                y.lineSegmentPlane(t, n, a, f),
                                y.lineSegmentPlane(r, n, a, h),
                                { positions: [t, r, n, f, h], indices: [0, 1, 4, 0, 4, 3, 2, 3, 4] }
                            );
                    }
                }),
                y
            );
        }),
        define("Core/Plane", [
            "./Cartesian3",
            "./Check",
            "./defined",
            "./DeveloperError",
            "./freezeObject",
            "./Math",
            "./Matrix4"
        ], function(e, t, r, n, a, i, o) {
            "use strict";
            function u(t, r) {
                (this.normal = e.clone(t)), (this.distance = r);
            }
            u.fromPointNormal = function(t, n, a) {
                var i = -e.dot(n, t);
                return r(a) ? (e.clone(n, a.normal), (a.distance = i), a) : new u(n, i);
            };
            var s = new e();
            (u.fromCartesian4 = function(t, n) {
                var a = e.fromCartesian4(t, s),
                    i = t.w;
                return r(n) ? (e.clone(a, n.normal), (n.distance = i), n) : new u(a, i);
            }),
                (u.getPointDistance = function(t, r) {
                    return e.dot(t.normal, r) + t.distance;
                });
            var c = new e();
            u.projectPointOntoPlane = function(t, n, a) {
                r(a) || (a = new e());
                var i = u.getPointDistance(t, n),
                    o = e.multiplyByScalar(t.normal, i, c);
                return e.subtract(n, o, a);
            };
            var l = new e();
            return (
                (u.transform = function(t, r, n) {
                    return (
                        o.multiplyByPointAsVector(r, t.normal, s),
                        e.normalize(s, s),
                        e.multiplyByScalar(t.normal, -t.distance, l),
                        o.multiplyByPoint(r, l, l),
                        u.fromPointNormal(l, s, n)
                    );
                }),
                (u.clone = function(t, n) {
                    return r(n)
                        ? (e.clone(t.normal, n.normal), (n.distance = t.distance), n)
                        : new u(t.normal, t.distance);
                }),
                (u.equals = function(t, r) {
                    return t.distance === r.distance && e.equals(t.normal, r.normal);
                }),
                (u.ORIGIN_XY_PLANE = a(new u(e.UNIT_Z, 0))),
                (u.ORIGIN_YZ_PLANE = a(new u(e.UNIT_X, 0))),
                (u.ORIGIN_ZX_PLANE = a(new u(e.UNIT_Y, 0))),
                u
            );
        }),
        define("Core/Tipsify", ["./defaultValue", "./defined", "./DeveloperError"], function(
            e,
            t,
            r
        ) {
            "use strict";
            var n = {};
            return (
                (n.calculateACMR = function(r) {
                    r = e(r, e.EMPTY_OBJECT);
                    var n = r.indices,
                        a = r.maximumIndex,
                        i = e(r.cacheSize, 24),
                        o = n.length;
                    if (!t(a)) {
                        a = 0;
                        for (var u = 0, s = n[u]; u < o; ) s > a && (a = s), ++u, (s = n[u]);
                    }
                    for (var c = [], l = 0; l < a + 1; l++) c[l] = 0;
                    for (var f = i + 1, h = 0; h < o; ++h) f - c[n[h]] > i && ((c[n[h]] = f), ++f);
                    return (f - i + 1) / (o / 3);
                }),
                (n.tipsify = function(r) {
                    function n(e, t, r, n) {
                        for (; t.length >= 1; ) {
                            var i = t[t.length - 1];
                            if ((t.splice(t.length - 1, 1), e[i].numLiveTriangles > 0)) return i;
                        }
                        for (; a < n; ) {
                            if (e[a].numLiveTriangles > 0) return ++a - 1;
                            ++a;
                        }
                        return -1;
                    }
                    r = e(r, e.EMPTY_OBJECT);
                    var a,
                        i = r.indices,
                        o = r.maximumIndex,
                        u = e(r.cacheSize, 24),
                        s = i.length,
                        c = 0,
                        l = 0,
                        f = i[l],
                        h = s;
                    if (t(o)) c = o + 1;
                    else {
                        for (; l < h; ) f > c && (c = f), ++l, (f = i[l]);
                        if (-1 === c) return 0;
                        ++c;
                    }
                    var d,
                        p = [];
                    for (d = 0; d < c; d++)
                        p[d] = { numLiveTriangles: 0, timeStamp: 0, vertexTriangles: [] };
                    l = 0;
                    for (var y = 0; l < h; )
                        p[i[l]].vertexTriangles.push(y),
                            ++p[i[l]].numLiveTriangles,
                            p[i[l + 1]].vertexTriangles.push(y),
                            ++p[i[l + 1]].numLiveTriangles,
                            p[i[l + 2]].vertexTriangles.push(y),
                            ++p[i[l + 2]].numLiveTriangles,
                            ++y,
                            (l += 3);
                    var m = 0,
                        E = u + 1;
                    a = 1;
                    var _,
                        v,
                        T = [],
                        R = [],
                        A = 0,
                        g = [],
                        S = s / 3,
                        w = [];
                    for (d = 0; d < S; d++) w[d] = !1;
                    for (var N, O; -1 !== m; ) {
                        (T = []), (v = p[m]), (O = v.vertexTriangles.length);
                        for (var I = 0; I < O; ++I)
                            if (((y = v.vertexTriangles[I]), !w[y])) {
                                (w[y] = !0), (l = y + y + y);
                                for (var x = 0; x < 3; ++x)
                                    (N = i[l]),
                                        T.push(N),
                                        R.push(N),
                                        (g[A] = N),
                                        ++A,
                                        (_ = p[N]),
                                        --_.numLiveTriangles,
                                        E - _.timeStamp > u && ((_.timeStamp = E), ++E),
                                        ++l;
                            }
                        m = (function(e, t, r, a, i, o, u) {
                            for (var s, c = -1, l = -1, f = 0; f < r.length; ) {
                                var h = r[f];
                                a[h].numLiveTriangles &&
                                    ((s = 0),
                                    i - a[h].timeStamp + 2 * a[h].numLiveTriangles <= t &&
                                        (s = i - a[h].timeStamp),
                                    (s > l || -1 === l) && ((l = s), (c = h))),
                                    ++f;
                            }
                            return -1 === c ? n(a, o, e, u) : c;
                        })(i, u, T, p, E, R, c);
                    }
                    return g;
                }),
                n
            );
        }),
        define("Core/GeometryPipeline", [
            "./AttributeCompression",
            "./barycentricCoordinates",
            "./BoundingSphere",
            "./Cartesian2",
            "./Cartesian3",
            "./Cartesian4",
            "./Cartographic",
            "./ComponentDatatype",
            "./defaultValue",
            "./defined",
            "./DeveloperError",
            "./EncodedCartesian3",
            "./GeographicProjection",
            "./Geometry",
            "./GeometryAttribute",
            "./GeometryType",
            "./IndexDatatype",
            "./Intersect",
            "./IntersectionTests",
            "./Math",
            "./Matrix3",
            "./Matrix4",
            "./Plane",
            "./PrimitiveType",
            "./Tipsify"
        ], function(e, t, r, n, a, i, o, u, s, c, l, f, h, d, p, y, m, E, _, v, T, R, A, g, S) {
            "use strict";
            function w(e, t, r, n, a) {
                (e[t++] = r), (e[t++] = n), (e[t++] = n), (e[t++] = a), (e[t++] = a), (e[t] = r);
            }
            function N(e) {
                for (
                    var t = e.length, r = (t / 3) * 6, n = m.createTypedArray(t, r), a = 0, i = 0;
                    i < t;
                    i += 3, a += 6
                )
                    w(n, a, e[i], e[i + 1], e[i + 2]);
                return n;
            }
            function O(e) {
                var t = e.length;
                if (t >= 3) {
                    var r = 6 * (t - 2),
                        n = m.createTypedArray(t, r);
                    w(n, 0, e[0], e[1], e[2]);
                    for (var a = 6, i = 3; i < t; ++i, a += 6) w(n, a, e[i - 1], e[i], e[i - 2]);
                    return n;
                }
                return new Uint16Array();
            }
            function I(e) {
                if (e.length > 0) {
                    for (
                        var t = e.length - 1,
                            r = 6 * (t - 1),
                            n = m.createTypedArray(t, r),
                            a = e[0],
                            i = 0,
                            o = 1;
                        o < t;
                        ++o, i += 6
                    )
                        w(n, i, a, e[o], e[o + 1]);
                    return n;
                }
                return new Uint16Array();
            }
            function x(e) {
                var t = {};
                for (var r in e)
                    if (e.hasOwnProperty(r) && c(e[r]) && c(e[r].values)) {
                        var n = e[r];
                        t[r] = new p({
                            componentDatatype: n.componentDatatype,
                            componentsPerAttribute: n.componentsPerAttribute,
                            normalize: n.normalize,
                            values: []
                        });
                    }
                return t;
            }
            function M(e, t, r) {
                for (var n in t)
                    if (t.hasOwnProperty(n) && c(t[n]) && c(t[n].values))
                        for (var a = t[n], i = 0; i < a.componentsPerAttribute; ++i)
                            e[n].values.push(a.values[r * a.componentsPerAttribute + i]);
            }
            function C(e, t) {
                if (c(t))
                    for (var r = t.values, n = r.length, i = 0; i < n; i += 3)
                        a.unpack(r, i, se), R.multiplyByPoint(e, se, se), a.pack(se, r, i);
            }
            function P(e, t) {
                if (c(t))
                    for (var r = t.values, n = r.length, i = 0; i < n; i += 3)
                        a.unpack(r, i, se),
                            T.multiplyByVector(e, se, se),
                            (se = a.normalize(se, se)),
                            a.pack(se, r, i);
            }
            function b(e, t) {
                var r,
                    n = e.length,
                    a = {},
                    i = e[0][t].attributes;
                for (r in i)
                    if (i.hasOwnProperty(r) && c(i[r]) && c(i[r].values)) {
                        for (var o = i[r], s = o.values.length, l = !0, f = 1; f < n; ++f) {
                            var h = e[f][t].attributes[r];
                            if (
                                !c(h) ||
                                o.componentDatatype !== h.componentDatatype ||
                                o.componentsPerAttribute !== h.componentsPerAttribute ||
                                o.normalize !== h.normalize
                            ) {
                                l = !1;
                                break;
                            }
                            s += h.values.length;
                        }
                        l &&
                            (a[r] = new p({
                                componentDatatype: o.componentDatatype,
                                componentsPerAttribute: o.componentsPerAttribute,
                                normalize: o.normalize,
                                values: u.createTypedArray(o.componentDatatype, s)
                            }));
                    }
                return a;
            }
            function U(e, t) {
                var n,
                    i,
                    o,
                    u,
                    s,
                    l,
                    f,
                    h = e.length,
                    p = (e[0].modelMatrix, c(e[0][t].indices)),
                    y = e[0][t].primitiveType,
                    E = b(e, t);
                for (n in E)
                    if (E.hasOwnProperty(n))
                        for (s = E[n].values, u = 0, i = 0; i < h; ++i)
                            for (l = e[i][t].attributes[n].values, f = l.length, o = 0; o < f; ++o)
                                s[u++] = l[o];
                var _;
                if (p) {
                    var v = 0;
                    for (i = 0; i < h; ++i) v += e[i][t].indices.length;
                    var T = d.computeNumberOfVertices(
                            new d({ attributes: E, primitiveType: g.POINTS })
                        ),
                        R = m.createTypedArray(T, v),
                        A = 0,
                        S = 0;
                    for (i = 0; i < h; ++i) {
                        var w = e[i][t].indices,
                            N = w.length;
                        for (u = 0; u < N; ++u) R[A++] = S + w[u];
                        S += d.computeNumberOfVertices(e[i][t]);
                    }
                    _ = R;
                }
                var O,
                    I = new a(),
                    x = 0;
                for (i = 0; i < h; ++i) {
                    if (((O = e[i][t].boundingSphere), !c(O))) {
                        I = void 0;
                        break;
                    }
                    a.add(O.center, I, I);
                }
                if (c(I))
                    for (a.divideByScalar(I, h, I), i = 0; i < h; ++i) {
                        O = e[i][t].boundingSphere;
                        var M = a.magnitude(a.subtract(O.center, I, fe)) + O.radius;
                        M > x && (x = M);
                    }
                return new d({
                    attributes: E,
                    indices: _,
                    primitiveType: y,
                    boundingSphere: c(I) ? new r(I, x) : void 0
                });
            }
            function D(e) {
                if (c(e.indices)) return e;
                for (
                    var t = d.computeNumberOfVertices(e), r = m.createTypedArray(t, t), n = 0;
                    n < t;
                    ++n
                )
                    r[n] = n;
                return (e.indices = r), e;
            }
            function L(e) {
                var t = d.computeNumberOfVertices(e),
                    r = m.createTypedArray(t, 3 * (t - 2));
                (r[0] = 1), (r[1] = 0), (r[2] = 2);
                for (var n = 3, a = 3; a < t; ++a) (r[n++] = a - 1), (r[n++] = 0), (r[n++] = a);
                return (e.indices = r), (e.primitiveType = g.TRIANGLES), e;
            }
            function F(e) {
                var t = d.computeNumberOfVertices(e),
                    r = m.createTypedArray(t, 3 * (t - 2));
                (r[0] = 0), (r[1] = 1), (r[2] = 2), t > 3 && ((r[3] = 0), (r[4] = 2), (r[5] = 3));
                for (var n = 6, a = 3; a < t - 1; a += 2)
                    (r[n++] = a),
                        (r[n++] = a - 1),
                        (r[n++] = a + 1),
                        a + 2 < t && ((r[n++] = a), (r[n++] = a + 1), (r[n++] = a + 2));
                return (e.indices = r), (e.primitiveType = g.TRIANGLES), e;
            }
            function B(e) {
                if (c(e.indices)) return e;
                for (
                    var t = d.computeNumberOfVertices(e), r = m.createTypedArray(t, t), n = 0;
                    n < t;
                    ++n
                )
                    r[n] = n;
                return (e.indices = r), e;
            }
            function z(e) {
                var t = d.computeNumberOfVertices(e),
                    r = m.createTypedArray(t, 2 * (t - 1));
                (r[0] = 0), (r[1] = 1);
                for (var n = 2, a = 2; a < t; ++a) (r[n++] = a - 1), (r[n++] = a);
                return (e.indices = r), (e.primitiveType = g.LINES), e;
            }
            function q(e) {
                var t = d.computeNumberOfVertices(e),
                    r = m.createTypedArray(t, 2 * t);
                (r[0] = 0), (r[1] = 1);
                for (var n = 2, a = 2; a < t; ++a) (r[n++] = a - 1), (r[n++] = a);
                return (
                    (r[n++] = t - 1), (r[n] = 0), (e.indices = r), (e.primitiveType = g.LINES), e
                );
            }
            function G(e) {
                switch (e.primitiveType) {
                    case g.TRIANGLE_FAN:
                        return L(e);
                    case g.TRIANGLE_STRIP:
                        return F(e);
                    case g.TRIANGLES:
                        return D(e);
                    case g.LINE_STRIP:
                        return z(e);
                    case g.LINE_LOOP:
                        return q(e);
                    case g.LINES:
                        return B(e);
                }
                return e;
            }
            function V(e, t) {
                Math.abs(e.y) < v.EPSILON6 && (e.y = t ? -v.EPSILON6 : v.EPSILON6);
            }
            function X(e, t, r) {
                if (0 !== e.y && 0 !== t.y && 0 !== r.y)
                    return V(e, e.y < 0), V(t, t.y < 0), void V(r, r.y < 0);
                var n,
                    a = Math.abs(e.y),
                    i = Math.abs(t.y),
                    o = Math.abs(r.y);
                n = a > i ? (a > o ? v.sign(e.y) : v.sign(r.y)) : i > o ? v.sign(t.y) : v.sign(r.y);
                var u = n < 0;
                V(e, u), V(t, u), V(r, u);
            }
            function W(e, t, r, n) {
                a.add(e, a.multiplyByScalar(a.subtract(t, e, Se), e.y / (e.y - t.y), Se), r),
                    a.clone(r, n),
                    V(r, !0),
                    V(n, !1);
            }
            function H(e, t, r) {
                if (!(e.x >= 0 || t.x >= 0 || r.x >= 0)) {
                    X(e, t, r);
                    var n = e.y < 0,
                        a = t.y < 0,
                        i = r.y < 0,
                        o = 0;
                    (o += n ? 1 : 0), (o += a ? 1 : 0), (o += i ? 1 : 0);
                    var u = xe.indices;
                    1 === o
                        ? ((u[1] = 3),
                          (u[2] = 4),
                          (u[5] = 6),
                          (u[7] = 6),
                          (u[8] = 5),
                          n
                              ? (W(e, t, we, Oe),
                                W(e, r, Ne, Ie),
                                (u[0] = 0),
                                (u[3] = 1),
                                (u[4] = 2),
                                (u[6] = 1))
                              : a
                              ? (W(t, r, we, Oe),
                                W(t, e, Ne, Ie),
                                (u[0] = 1),
                                (u[3] = 2),
                                (u[4] = 0),
                                (u[6] = 2))
                              : i &&
                                (W(r, e, we, Oe),
                                W(r, t, Ne, Ie),
                                (u[0] = 2),
                                (u[3] = 0),
                                (u[4] = 1),
                                (u[6] = 0)))
                        : 2 === o &&
                          ((u[2] = 4),
                          (u[4] = 4),
                          (u[5] = 3),
                          (u[7] = 5),
                          (u[8] = 6),
                          n
                              ? a
                                  ? i ||
                                    (W(r, e, we, Oe),
                                    W(r, t, Ne, Ie),
                                    (u[0] = 0),
                                    (u[1] = 1),
                                    (u[3] = 0),
                                    (u[6] = 2))
                                  : (W(t, r, we, Oe),
                                    W(t, e, Ne, Ie),
                                    (u[0] = 2),
                                    (u[1] = 0),
                                    (u[3] = 2),
                                    (u[6] = 1))
                              : (W(e, t, we, Oe),
                                W(e, r, Ne, Ie),
                                (u[0] = 1),
                                (u[1] = 2),
                                (u[3] = 1),
                                (u[6] = 0)));
                    var s = xe.positions;
                    return (
                        (s[0] = e),
                        (s[1] = t),
                        (s[2] = r),
                        (s.length = 3),
                        (1 !== o && 2 !== o) ||
                            ((s[3] = we), (s[4] = Ne), (s[5] = Oe), (s[6] = Ie), (s.length = 7)),
                        xe
                    );
                }
            }
            function Y(e, t) {
                var n = e.attributes;
                if (0 !== n.position.values.length) {
                    for (var a in n)
                        if (n.hasOwnProperty(a) && c(n[a]) && c(n[a].values)) {
                            var i = n[a];
                            i.values = u.createTypedArray(i.componentDatatype, i.values);
                        }
                    var o = d.computeNumberOfVertices(e);
                    return (
                        (e.indices = m.createTypedArray(o, e.indices)),
                        t && (e.boundingSphere = r.fromVertices(n.position.values)),
                        e
                    );
                }
            }
            function k(e) {
                var t = e.attributes,
                    r = {};
                for (var n in t)
                    if (t.hasOwnProperty(n) && c(t[n]) && c(t[n].values)) {
                        var a = t[n];
                        r[n] = new p({
                            componentDatatype: a.componentDatatype,
                            componentsPerAttribute: a.componentsPerAttribute,
                            normalize: a.normalize,
                            values: []
                        });
                    }
                return new d({ attributes: r, indices: [], primitiveType: e.primitiveType });
            }
            function Z(e, t, r) {
                var n = c(e.geometry.boundingSphere);
                (t = Y(t, n)),
                    (r = Y(r, n)),
                    c(r) && !c(t)
                        ? (e.geometry = r)
                        : !c(r) && c(t)
                        ? (e.geometry = t)
                        : ((e.westHemisphereGeometry = t),
                          (e.eastHemisphereGeometry = r),
                          (e.geometry = void 0));
            }
            function j(e, t) {
                var r = new e(),
                    n = new e(),
                    a = new e();
                return function(i, o, u, s, c, l, f, h) {
                    var d = e.fromArray(c, i * t, r),
                        p = e.fromArray(c, o * t, n),
                        y = e.fromArray(c, u * t, a);
                    e.multiplyByScalar(d, s.x, d),
                        e.multiplyByScalar(p, s.y, p),
                        e.multiplyByScalar(y, s.z, y);
                    var m = e.add(d, p, d);
                    e.add(m, y, m), h && e.normalize(m, m), e.pack(m, l, f * t);
                };
            }
            function K(e, r, n, i, o, u, s, l, f, h, d, p, y, m, E, _) {
                if (c(u) || c(s) || c(l) || c(f) || c(h) || 0 !== m) {
                    var v = a.fromArray(o, 3 * e, Ue),
                        T = a.fromArray(o, 3 * r, De),
                        R = a.fromArray(o, 3 * n, Le),
                        A = t(i, v, T, R, Fe);
                    if ((c(u) && Ce(e, r, n, A, u, p.normal.values, _, !0), c(h))) {
                        var g = a.fromArray(h, 3 * e, Ue),
                            S = a.fromArray(h, 3 * r, De),
                            w = a.fromArray(h, 3 * n, Le);
                        a.multiplyByScalar(g, A.x, g),
                            a.multiplyByScalar(S, A.y, S),
                            a.multiplyByScalar(w, A.z, w);
                        var N;
                        a.equals(g, a.ZERO) && a.equals(S, a.ZERO) && a.equals(w, a.ZERO)
                            ? ((N = Ue), (N.x = 0), (N.y = 0), (N.z = 0))
                            : ((N = a.add(g, S, g)), a.add(N, w, N), a.normalize(N, N)),
                            a.pack(N, p.extrudeDirection.values, 3 * _);
                    }
                    if (
                        (c(d) && be(e, r, n, A, d, p.applyOffset.values, _),
                        c(s) && Ce(e, r, n, A, s, p.tangent.values, _, !0),
                        c(l) && Ce(e, r, n, A, l, p.bitangent.values, _, !0),
                        c(f) && Pe(e, r, n, A, f, p.st.values, _),
                        m > 0)
                    )
                        for (var O = 0; O < m; O++) {
                            var I = y[O];
                            J(e, r, n, A, _, E[I], p[I]);
                        }
                }
            }
            function J(e, t, r, n, a, i, o) {
                var u = i.componentsPerAttribute,
                    s = i.values,
                    c = o.values;
                switch (u) {
                    case 4:
                        Me(e, t, r, n, s, c, a, !1);
                        break;
                    case 3:
                        Ce(e, t, r, n, s, c, a, !1);
                        break;
                    case 2:
                        Pe(e, t, r, n, s, c, a, !1);
                        break;
                    default:
                        c[a] = s[e] * n.x + s[t] * n.y + s[r] * n.z;
                }
            }
            function Q(e, t, r, n, a, i) {
                var o = e.position.values.length / 3;
                if (-1 !== a) {
                    var u = n[a],
                        s = r[u];
                    return -1 === s
                        ? ((r[u] = o), e.position.values.push(i.x, i.y, i.z), t.push(o), o)
                        : (t.push(s), s);
                }
                return e.position.values.push(i.x, i.y, i.z), t.push(o), o;
            }
            function $(e) {
                var t = e.geometry,
                    r = t.attributes,
                    n = r.position.values,
                    i = c(r.normal) ? r.normal.values : void 0,
                    o = c(r.bitangent) ? r.bitangent.values : void 0,
                    u = c(r.tangent) ? r.tangent.values : void 0,
                    s = c(r.st) ? r.st.values : void 0,
                    l = c(r.extrudeDirection) ? r.extrudeDirection.values : void 0,
                    f = c(r.applyOffset) ? r.applyOffset.values : void 0,
                    h = t.indices,
                    d = [];
                for (var p in r) r.hasOwnProperty(p) && !Be[p] && c(r[p]) && d.push(p);
                var y,
                    m,
                    E,
                    _,
                    v,
                    T = d.length,
                    R = k(t),
                    A = k(t),
                    g = [];
                g.length = n.length / 3;
                var S = [];
                for (S.length = n.length / 3, v = 0; v < g.length; ++v) (g[v] = -1), (S[v] = -1);
                var w = h.length;
                for (v = 0; v < w; v += 3) {
                    var N = h[v],
                        O = h[v + 1],
                        I = h[v + 2],
                        x = a.fromArray(n, 3 * N),
                        M = a.fromArray(n, 3 * O),
                        C = a.fromArray(n, 3 * I),
                        P = H(x, M, C);
                    if (c(P) && P.positions.length > 3)
                        for (var b = P.positions, U = P.indices, D = U.length, L = 0; L < D; ++L) {
                            var F = U[L],
                                B = b[F];
                            B.y < 0
                                ? ((y = A.attributes), (m = A.indices), (E = g))
                                : ((y = R.attributes), (m = R.indices), (E = S)),
                                (_ = Q(y, m, E, h, F < 3 ? v + F : -1, B)),
                                K(N, O, I, B, n, i, u, o, s, l, f, y, d, T, r, _);
                        }
                    else
                        c(P) && ((x = P.positions[0]), (M = P.positions[1]), (C = P.positions[2])),
                            x.y < 0
                                ? ((y = A.attributes), (m = A.indices), (E = g))
                                : ((y = R.attributes), (m = R.indices), (E = S)),
                            (_ = Q(y, m, E, h, v, x)),
                            K(N, O, I, x, n, i, u, o, s, l, f, y, d, T, r, _),
                            (_ = Q(y, m, E, h, v + 1, M)),
                            K(N, O, I, M, n, i, u, o, s, l, f, y, d, T, r, _),
                            (_ = Q(y, m, E, h, v + 2, C)),
                            K(N, O, I, C, n, i, u, o, s, l, f, y, d, T, r, _);
                }
                Z(e, A, R);
            }
            function ee(e, t, r, n, i, o, u) {
                if (c(u)) {
                    var s = a.fromArray(n, 3 * e, Ue);
                    a.equalsEpsilon(s, r, v.EPSILON10)
                        ? (o.applyOffset.values[i] = u[e])
                        : (o.applyOffset.values[i] = u[t]);
                }
            }
            function te(e) {
                var t,
                    r = e.geometry,
                    n = r.attributes,
                    i = n.position.values,
                    o = c(n.applyOffset) ? n.applyOffset.values : void 0,
                    u = r.indices,
                    s = k(r),
                    l = k(r),
                    f = u.length,
                    h = [];
                h.length = i.length / 3;
                var d = [];
                for (d.length = i.length / 3, t = 0; t < h.length; ++t) (h[t] = -1), (d[t] = -1);
                for (t = 0; t < f; t += 2) {
                    var p,
                        y = u[t],
                        m = u[t + 1],
                        E = a.fromArray(i, 3 * y, Ue),
                        T = a.fromArray(i, 3 * m, De);
                    Math.abs(E.y) < v.EPSILON6 &&
                        (E.y < 0 ? (E.y = -v.EPSILON6) : (E.y = v.EPSILON6)),
                        Math.abs(T.y) < v.EPSILON6 &&
                            (T.y < 0 ? (T.y = -v.EPSILON6) : (T.y = v.EPSILON6));
                    var R = s.attributes,
                        A = s.indices,
                        g = d,
                        S = l.attributes,
                        w = l.indices,
                        N = h,
                        O = _.lineSegmentPlane(E, T, ze, Le);
                    if (c(O)) {
                        var I = a.multiplyByScalar(a.UNIT_Y, 5 * v.EPSILON9, qe);
                        E.y < 0 &&
                            (a.negate(I, I),
                            (R = l.attributes),
                            (A = l.indices),
                            (g = h),
                            (S = s.attributes),
                            (w = s.indices),
                            (N = d));
                        var x = a.add(O, I, Ge);
                        (p = Q(R, A, g, u, t, E)),
                            ee(y, m, E, i, p, R, o),
                            (p = Q(R, A, g, u, -1, x)),
                            ee(y, m, x, i, p, R, o),
                            a.negate(I, I),
                            a.add(O, I, x),
                            (p = Q(S, w, N, u, -1, x)),
                            ee(y, m, x, i, p, S, o),
                            (p = Q(S, w, N, u, t + 1, T)),
                            ee(y, m, T, i, p, S, o);
                    } else {
                        var M, C, P;
                        E.y < 0
                            ? ((M = l.attributes), (C = l.indices), (P = h))
                            : ((M = s.attributes), (C = s.indices), (P = d)),
                            (p = Q(M, C, P, u, t, E)),
                            ee(y, m, E, i, p, M, o),
                            (p = Q(M, C, P, u, t + 1, T)),
                            ee(y, m, T, i, p, M, o);
                    }
                }
                Z(e, l, s);
            }
            function re(e) {
                for (
                    var t = e.attributes,
                        r = t.position.values,
                        n = t.prevPosition.values,
                        i = t.nextPosition.values,
                        o = r.length,
                        u = 0;
                    u < o;
                    u += 3
                ) {
                    var s = a.unpack(r, u, We);
                    if (!(s.x > 0)) {
                        var c = a.unpack(n, u, He);
                        ((s.y < 0 && c.y > 0) || (s.y > 0 && c.y < 0)) &&
                            (u - 3 > 0
                                ? ((n[u] = r[u - 3]), (n[u + 1] = r[u - 2]), (n[u + 2] = r[u - 1]))
                                : a.pack(s, n, u));
                        var l = a.unpack(i, u, Ye);
                        ((s.y < 0 && l.y > 0) || (s.y > 0 && l.y < 0)) &&
                            (u + 3 < o
                                ? ((i[u] = r[u + 3]), (i[u + 1] = r[u + 4]), (i[u + 2] = r[u + 5]))
                                : a.pack(s, i, u));
                    }
                }
            }
            function ne(e) {
                var t,
                    r,
                    o,
                    u = e.geometry,
                    s = u.attributes,
                    l = s.position.values,
                    f = s.prevPosition.values,
                    h = s.nextPosition.values,
                    d = s.expandAndWidth.values,
                    p = c(s.st) ? s.st.values : void 0,
                    y = c(s.color) ? s.color.values : void 0,
                    m = k(u),
                    E = k(u),
                    T = !1,
                    R = l.length / 3;
                for (t = 0; t < R; t += 4) {
                    var A = t,
                        g = t + 2,
                        S = a.fromArray(l, 3 * A, We),
                        w = a.fromArray(l, 3 * g, He);
                    if (Math.abs(S.y) < Qe)
                        for (
                            S.y = Qe * (w.y < 0 ? -1 : 1),
                                l[3 * t + 1] = S.y,
                                l[3 * (t + 1) + 1] = S.y,
                                r = 3 * A;
                            r < 3 * A + 12;
                            r += 3
                        )
                            (f[r] = l[3 * t]), (f[r + 1] = l[3 * t + 1]), (f[r + 2] = l[3 * t + 2]);
                    if (Math.abs(w.y) < Qe)
                        for (
                            w.y = Qe * (S.y < 0 ? -1 : 1),
                                l[3 * (t + 2) + 1] = w.y,
                                l[3 * (t + 3) + 1] = w.y,
                                r = 3 * A;
                            r < 3 * A + 12;
                            r += 3
                        )
                            (h[r] = l[3 * (t + 2)]),
                                (h[r + 1] = l[3 * (t + 2) + 1]),
                                (h[r + 2] = l[3 * (t + 2) + 2]);
                    var N = m.attributes,
                        O = m.indices,
                        I = E.attributes,
                        x = E.indices,
                        M = _.lineSegmentPlane(S, w, ze, ke);
                    if (c(M)) {
                        T = !0;
                        var C = a.multiplyByScalar(a.UNIT_Y, Je, Ze);
                        S.y < 0 &&
                            (a.negate(C, C),
                            (N = E.attributes),
                            (O = E.indices),
                            (I = m.attributes),
                            (x = m.indices));
                        var P = a.add(M, C, je);
                        N.position.values.push(S.x, S.y, S.z, S.x, S.y, S.z),
                            N.position.values.push(P.x, P.y, P.z),
                            N.position.values.push(P.x, P.y, P.z),
                            N.prevPosition.values.push(f[3 * A], f[3 * A + 1], f[3 * A + 2]),
                            N.prevPosition.values.push(f[3 * A + 3], f[3 * A + 4], f[3 * A + 5]),
                            N.prevPosition.values.push(S.x, S.y, S.z, S.x, S.y, S.z),
                            N.nextPosition.values.push(P.x, P.y, P.z),
                            N.nextPosition.values.push(P.x, P.y, P.z),
                            N.nextPosition.values.push(P.x, P.y, P.z),
                            N.nextPosition.values.push(P.x, P.y, P.z),
                            a.negate(C, C),
                            a.add(M, C, P),
                            I.position.values.push(P.x, P.y, P.z),
                            I.position.values.push(P.x, P.y, P.z),
                            I.position.values.push(w.x, w.y, w.z, w.x, w.y, w.z),
                            I.prevPosition.values.push(P.x, P.y, P.z),
                            I.prevPosition.values.push(P.x, P.y, P.z),
                            I.prevPosition.values.push(P.x, P.y, P.z),
                            I.prevPosition.values.push(P.x, P.y, P.z),
                            I.nextPosition.values.push(w.x, w.y, w.z, w.x, w.y, w.z),
                            I.nextPosition.values.push(h[3 * g], h[3 * g + 1], h[3 * g + 2]),
                            I.nextPosition.values.push(h[3 * g + 3], h[3 * g + 4], h[3 * g + 5]);
                        var b = n.fromArray(d, 2 * A, Ve),
                            U = Math.abs(b.y);
                        N.expandAndWidth.values.push(-1, U, 1, U),
                            N.expandAndWidth.values.push(-1, -U, 1, -U),
                            I.expandAndWidth.values.push(-1, U, 1, U),
                            I.expandAndWidth.values.push(-1, -U, 1, -U);
                        var D = a.magnitudeSquared(a.subtract(M, S, Ye));
                        if (((D /= a.magnitudeSquared(a.subtract(w, S, Ye))), c(y))) {
                            var L = i.fromArray(y, 4 * A, Ke),
                                F = i.fromArray(y, 4 * g, Ke),
                                B = v.lerp(L.x, F.x, D),
                                z = v.lerp(L.y, F.y, D),
                                q = v.lerp(L.z, F.z, D),
                                G = v.lerp(L.w, F.w, D);
                            for (r = 4 * A; r < 4 * A + 8; ++r) N.color.values.push(y[r]);
                            for (
                                N.color.values.push(B, z, q, G),
                                    N.color.values.push(B, z, q, G),
                                    I.color.values.push(B, z, q, G),
                                    I.color.values.push(B, z, q, G),
                                    r = 4 * g;
                                r < 4 * g + 8;
                                ++r
                            )
                                I.color.values.push(y[r]);
                        }
                        if (c(p)) {
                            var V = n.fromArray(p, 2 * A, Ve),
                                X = n.fromArray(p, 2 * (t + 3), Xe),
                                W = v.lerp(V.x, X.x, D);
                            for (r = 2 * A; r < 2 * A + 4; ++r) N.st.values.push(p[r]);
                            for (
                                N.st.values.push(W, V.y),
                                    N.st.values.push(W, X.y),
                                    I.st.values.push(W, V.y),
                                    I.st.values.push(W, X.y),
                                    r = 2 * g;
                                r < 2 * g + 4;
                                ++r
                            )
                                I.st.values.push(p[r]);
                        }
                        (o = N.position.values.length / 3 - 4),
                            O.push(o, o + 2, o + 1),
                            O.push(o + 1, o + 2, o + 3),
                            (o = I.position.values.length / 3 - 4),
                            x.push(o, o + 2, o + 1),
                            x.push(o + 1, o + 2, o + 3);
                    } else {
                        var H, Y;
                        for (
                            S.y < 0
                                ? ((H = E.attributes), (Y = E.indices))
                                : ((H = m.attributes), (Y = m.indices)),
                                H.position.values.push(S.x, S.y, S.z),
                                H.position.values.push(S.x, S.y, S.z),
                                H.position.values.push(w.x, w.y, w.z),
                                H.position.values.push(w.x, w.y, w.z),
                                r = 3 * t;
                            r < 3 * t + 12;
                            ++r
                        )
                            H.prevPosition.values.push(f[r]), H.nextPosition.values.push(h[r]);
                        for (r = 2 * t; r < 2 * t + 8; ++r)
                            H.expandAndWidth.values.push(d[r]), c(p) && H.st.values.push(p[r]);
                        if (c(y)) for (r = 4 * t; r < 4 * t + 16; ++r) H.color.values.push(y[r]);
                        (o = H.position.values.length / 3 - 4),
                            Y.push(o, o + 2, o + 1),
                            Y.push(o + 1, o + 2, o + 3);
                    }
                }
                T && (re(E), re(m)), Z(e, E, m);
            }
            var ae = {};
            (ae.toWireframe = function(e) {
                var t = e.indices;
                if (c(t)) {
                    switch (e.primitiveType) {
                        case g.TRIANGLES:
                            e.indices = N(t);
                            break;
                        case g.TRIANGLE_STRIP:
                            e.indices = O(t);
                            break;
                        case g.TRIANGLE_FAN:
                            e.indices = I(t);
                    }
                    e.primitiveType = g.LINES;
                }
                return e;
            }),
                (ae.createLineSegmentsForVectors = function(e, t, n) {
                    (t = s(t, "normal")), (n = s(n, 1e4));
                    for (
                        var a = e.attributes.position.values,
                            i = e.attributes[t].values,
                            o = a.length,
                            l = new Float64Array(2 * o),
                            f = 0,
                            h = 0;
                        h < o;
                        h += 3
                    )
                        (l[f++] = a[h]),
                            (l[f++] = a[h + 1]),
                            (l[f++] = a[h + 2]),
                            (l[f++] = a[h] + i[h] * n),
                            (l[f++] = a[h + 1] + i[h + 1] * n),
                            (l[f++] = a[h + 2] + i[h + 2] * n);
                    var y,
                        m = e.boundingSphere;
                    return (
                        c(m) && (y = new r(m.center, m.radius + n)),
                        new d({
                            attributes: {
                                position: new p({
                                    componentDatatype: u.DOUBLE,
                                    componentsPerAttribute: 3,
                                    values: l
                                })
                            },
                            primitiveType: g.LINES,
                            boundingSphere: y
                        })
                    );
                }),
                (ae.createAttributeLocations = function(e) {
                    var t,
                        r = [
                            "position",
                            "positionHigh",
                            "positionLow",
                            "position3DHigh",
                            "position3DLow",
                            "position2DHigh",
                            "position2DLow",
                            "pickColor",
                            "normal",
                            "st",
                            "tangent",
                            "bitangent",
                            "extrudeDirection",
                            "compressedAttributes"
                        ],
                        n = e.attributes,
                        a = {},
                        i = 0,
                        o = r.length;
                    for (t = 0; t < o; ++t) {
                        var u = r[t];
                        c(n[u]) && (a[u] = i++);
                    }
                    for (var s in n) n.hasOwnProperty(s) && !c(a[s]) && (a[s] = i++);
                    return a;
                }),
                (ae.reorderForPreVertexCache = function(e) {
                    var t = d.computeNumberOfVertices(e),
                        r = e.indices;
                    if (c(r)) {
                        for (var n = new Int32Array(t), a = 0; a < t; a++) n[a] = -1;
                        for (
                            var i,
                                o = r,
                                s = o.length,
                                l = m.createTypedArray(t, s),
                                f = 0,
                                h = 0,
                                p = 0;
                            f < s;

                        )
                            (i = n[o[f]]),
                                -1 !== i ? (l[h] = i) : ((i = o[f]), (n[i] = p), (l[h] = p), ++p),
                                ++f,
                                ++h;
                        e.indices = l;
                        var y = e.attributes;
                        for (var E in y)
                            if (y.hasOwnProperty(E) && c(y[E]) && c(y[E].values)) {
                                for (
                                    var _ = y[E],
                                        v = _.values,
                                        T = 0,
                                        R = _.componentsPerAttribute,
                                        A = u.createTypedArray(_.componentDatatype, p * R);
                                    T < t;

                                ) {
                                    var g = n[T];
                                    if (-1 !== g)
                                        for (var S = 0; S < R; S++) A[R * g + S] = v[R * T + S];
                                    ++T;
                                }
                                _.values = A;
                            }
                    }
                    return e;
                }),
                (ae.reorderForPostVertexCache = function(e, t) {
                    var r = e.indices;
                    if (e.primitiveType === g.TRIANGLES && c(r)) {
                        for (var n = r.length, a = 0, i = 0; i < n; i++) r[i] > a && (a = r[i]);
                        e.indices = S.tipsify({ indices: r, maximumIndex: a, cacheSize: t });
                    }
                    return e;
                }),
                (ae.fitToUnsignedShortIndices = function(e) {
                    var t = [],
                        r = d.computeNumberOfVertices(e);
                    if (c(e.indices) && r >= v.SIXTY_FOUR_KILOBYTES) {
                        var n,
                            a = [],
                            i = [],
                            o = 0,
                            u = x(e.attributes),
                            s = e.indices,
                            l = s.length;
                        e.primitiveType === g.TRIANGLES
                            ? (n = 3)
                            : e.primitiveType === g.LINES
                            ? (n = 2)
                            : e.primitiveType === g.POINTS && (n = 1);
                        for (var f = 0; f < l; f += n) {
                            for (var h = 0; h < n; ++h) {
                                var p = s[f + h],
                                    y = a[p];
                                c(y) || ((y = o++), (a[p] = y), M(u, e.attributes, p)), i.push(y);
                            }
                            o + n >= v.SIXTY_FOUR_KILOBYTES &&
                                (t.push(
                                    new d({
                                        attributes: u,
                                        indices: i,
                                        primitiveType: e.primitiveType,
                                        boundingSphere: e.boundingSphere,
                                        boundingSphereCV: e.boundingSphereCV
                                    })
                                ),
                                (a = []),
                                (i = []),
                                (o = 0),
                                (u = x(e.attributes)));
                        }
                        0 !== i.length &&
                            t.push(
                                new d({
                                    attributes: u,
                                    indices: i,
                                    primitiveType: e.primitiveType,
                                    boundingSphere: e.boundingSphere,
                                    boundingSphereCV: e.boundingSphereCV
                                })
                            );
                    } else t.push(e);
                    return t;
                });
            var ie = new a(),
                oe = new o();
            ae.projectTo2D = function(e, t, r, n, i) {
                var o = e.attributes[t];
                i = c(i) ? i : new h();
                for (
                    var s = i.ellipsoid, l = o.values, f = new Float64Array(l.length), d = 0, y = 0;
                    y < l.length;
                    y += 3
                ) {
                    var m = a.fromArray(l, y, ie),
                        E = s.cartesianToCartographic(m, oe),
                        _ = i.project(E, ie);
                    (f[d++] = _.x), (f[d++] = _.y), (f[d++] = _.z);
                }
                return (
                    (e.attributes[r] = o),
                    (e.attributes[n] = new p({
                        componentDatatype: u.DOUBLE,
                        componentsPerAttribute: 3,
                        values: f
                    })),
                    delete e.attributes[t],
                    e
                );
            };
            var ue = { high: 0, low: 0 };
            ae.encodeAttribute = function(e, t, r, n) {
                for (
                    var a = e.attributes[t],
                        i = a.values,
                        o = i.length,
                        s = new Float32Array(o),
                        c = new Float32Array(o),
                        l = 0;
                    l < o;
                    ++l
                )
                    f.encode(i[l], ue), (s[l] = ue.high), (c[l] = ue.low);
                var h = a.componentsPerAttribute;
                return (
                    (e.attributes[r] = new p({
                        componentDatatype: u.FLOAT,
                        componentsPerAttribute: h,
                        values: s
                    })),
                    (e.attributes[n] = new p({
                        componentDatatype: u.FLOAT,
                        componentsPerAttribute: h,
                        values: c
                    })),
                    delete e.attributes[t],
                    e
                );
            };
            var se = new a(),
                ce = new R(),
                le = new T();
            ae.transformToWorldCoordinates = function(e) {
                var t = e.modelMatrix;
                if (R.equals(t, R.IDENTITY)) return e;
                var n = e.geometry.attributes;
                C(t, n.position),
                    C(t, n.prevPosition),
                    C(t, n.nextPosition),
                    (c(n.normal) || c(n.tangent) || c(n.bitangent)) &&
                        (R.inverse(t, ce),
                        R.transpose(ce, ce),
                        R.getRotation(ce, le),
                        P(le, n.normal),
                        P(le, n.tangent),
                        P(le, n.bitangent));
                var a = e.geometry.boundingSphere;
                return (
                    c(a) && (e.geometry.boundingSphere = r.transform(a, t, a)),
                    (e.modelMatrix = R.clone(R.IDENTITY)),
                    e
                );
            };
            var fe = new a();
            ae.combineInstances = function(e) {
                for (var t = [], r = [], n = e.length, a = 0; a < n; ++a) {
                    var i = e[a];
                    c(i.geometry)
                        ? t.push(i)
                        : c(i.westHemisphereGeometry) && c(i.eastHemisphereGeometry) && r.push(i);
                }
                var o = [];
                return (
                    t.length > 0 && o.push(U(t, "geometry")),
                    r.length > 0 &&
                        (o.push(U(r, "westHemisphereGeometry")),
                        o.push(U(r, "eastHemisphereGeometry"))),
                    o
                );
            };
            var he = new a(),
                de = new a(),
                pe = new a(),
                ye = new a();
            ae.computeNormal = function(e) {
                var t,
                    r = e.indices,
                    n = e.attributes,
                    i = n.position.values,
                    o = n.position.values.length / 3,
                    s = r.length,
                    c = new Array(o),
                    l = new Array(s / 3),
                    f = new Array(s);
                for (t = 0; t < o; t++) c[t] = { indexOffset: 0, count: 0, currentCount: 0 };
                var h = 0;
                for (t = 0; t < s; t += 3) {
                    var d = r[t],
                        y = r[t + 1],
                        m = r[t + 2],
                        E = 3 * d,
                        _ = 3 * y,
                        T = 3 * m;
                    (de.x = i[E]),
                        (de.y = i[E + 1]),
                        (de.z = i[E + 2]),
                        (pe.x = i[_]),
                        (pe.y = i[_ + 1]),
                        (pe.z = i[_ + 2]),
                        (ye.x = i[T]),
                        (ye.y = i[T + 1]),
                        (ye.z = i[T + 2]),
                        c[d].count++,
                        c[y].count++,
                        c[m].count++,
                        a.subtract(pe, de, pe),
                        a.subtract(ye, de, ye),
                        (l[h] = a.cross(pe, ye, new a())),
                        h++;
                }
                var R = 0;
                for (t = 0; t < o; t++) (c[t].indexOffset += R), (R += c[t].count);
                h = 0;
                var A;
                for (t = 0; t < s; t += 3) {
                    A = c[r[t]];
                    var g = A.indexOffset + A.currentCount;
                    (f[g] = h),
                        A.currentCount++,
                        (A = c[r[t + 1]]),
                        (g = A.indexOffset + A.currentCount),
                        (f[g] = h),
                        A.currentCount++,
                        (A = c[r[t + 2]]),
                        (g = A.indexOffset + A.currentCount),
                        (f[g] = h),
                        A.currentCount++,
                        h++;
                }
                var S = new Float32Array(3 * o);
                for (t = 0; t < o; t++) {
                    var w = 3 * t;
                    if (((A = c[t]), a.clone(a.ZERO, he), A.count > 0)) {
                        for (h = 0; h < A.count; h++) a.add(he, l[f[A.indexOffset + h]], he);
                        a.equalsEpsilon(a.ZERO, he, v.EPSILON10) &&
                            a.clone(l[f[A.indexOffset]], he);
                    }
                    a.equalsEpsilon(a.ZERO, he, v.EPSILON10) && (he.z = 1),
                        a.normalize(he, he),
                        (S[w] = he.x),
                        (S[w + 1] = he.y),
                        (S[w + 2] = he.z);
                }
                return (
                    (e.attributes.normal = new p({
                        componentDatatype: u.FLOAT,
                        componentsPerAttribute: 3,
                        values: S
                    })),
                    e
                );
            };
            var me = new a(),
                Ee = new a(),
                _e = new a();
            ae.computeTangentAndBitangent = function(e) {
                var t,
                    r = (e.attributes, e.indices),
                    n = e.attributes.position.values,
                    i = e.attributes.normal.values,
                    o = e.attributes.st.values,
                    s = e.attributes.position.values.length / 3,
                    c = r.length,
                    l = new Array(3 * s);
                for (t = 0; t < l.length; t++) l[t] = 0;
                var f, h, d;
                for (t = 0; t < c; t += 3) {
                    var y = r[t],
                        m = r[t + 1],
                        E = r[t + 2];
                    (f = 3 * y), (h = 3 * m), (d = 3 * E);
                    var _ = 2 * y,
                        v = 2 * m,
                        T = 2 * E,
                        R = n[f],
                        A = n[f + 1],
                        g = n[f + 2],
                        S = o[_],
                        w = o[_ + 1],
                        N = o[v + 1] - w,
                        O = o[T + 1] - w,
                        I = 1 / ((o[v] - S) * O - (o[T] - S) * N),
                        x = (O * (n[h] - R) - N * (n[d] - R)) * I,
                        M = (O * (n[h + 1] - A) - N * (n[d + 1] - A)) * I,
                        C = (O * (n[h + 2] - g) - N * (n[d + 2] - g)) * I;
                    (l[f] += x),
                        (l[f + 1] += M),
                        (l[f + 2] += C),
                        (l[h] += x),
                        (l[h + 1] += M),
                        (l[h + 2] += C),
                        (l[d] += x),
                        (l[d + 1] += M),
                        (l[d + 2] += C);
                }
                var P = new Float32Array(3 * s),
                    b = new Float32Array(3 * s);
                for (t = 0; t < s; t++) {
                    (f = 3 * t), (h = f + 1), (d = f + 2);
                    var U = a.fromArray(i, f, me),
                        D = a.fromArray(l, f, _e),
                        L = a.dot(U, D);
                    a.multiplyByScalar(U, L, Ee),
                        a.normalize(a.subtract(D, Ee, D), D),
                        (P[f] = D.x),
                        (P[h] = D.y),
                        (P[d] = D.z),
                        a.normalize(a.cross(U, D, D), D),
                        (b[f] = D.x),
                        (b[h] = D.y),
                        (b[d] = D.z);
                }
                return (
                    (e.attributes.tangent = new p({
                        componentDatatype: u.FLOAT,
                        componentsPerAttribute: 3,
                        values: P
                    })),
                    (e.attributes.bitangent = new p({
                        componentDatatype: u.FLOAT,
                        componentsPerAttribute: 3,
                        values: b
                    })),
                    e
                );
            };
            var ve = new n(),
                Te = new a(),
                Re = new a(),
                Ae = new a(),
                ge = new n();
            ae.compressVertices = function(t) {
                var r,
                    i,
                    o = t.attributes.extrudeDirection;
                if (c(o)) {
                    var s = o.values;
                    i = s.length / 3;
                    var l = new Float32Array(2 * i),
                        f = 0;
                    for (r = 0; r < i; ++r)
                        a.fromArray(s, 3 * r, Te),
                            a.equals(Te, a.ZERO)
                                ? (f += 2)
                                : ((ge = e.octEncodeInRange(Te, 65535, ge)),
                                  (l[f++] = ge.x),
                                  (l[f++] = ge.y));
                    return (
                        (t.attributes.compressedAttributes = new p({
                            componentDatatype: u.FLOAT,
                            componentsPerAttribute: 2,
                            values: l
                        })),
                        delete t.attributes.extrudeDirection,
                        t
                    );
                }
                var h = t.attributes.normal,
                    d = t.attributes.st,
                    y = c(h),
                    m = c(d);
                if (!y && !m) return t;
                var E,
                    _,
                    v,
                    T,
                    R = t.attributes.tangent,
                    A = t.attributes.bitangent,
                    g = c(R),
                    S = c(A);
                y && (E = h.values),
                    m && (_ = d.values),
                    g && (v = R.values),
                    S && (T = A.values),
                    (i = (y ? E.length : _.length) / (y ? 3 : 2));
                var w = i,
                    N = m && y ? 2 : 1;
                (N += g || S ? 1 : 0), (w *= N);
                var O = new Float32Array(w),
                    I = 0;
                for (r = 0; r < i; ++r) {
                    m && (n.fromArray(_, 2 * r, ve), (O[I++] = e.compressTextureCoordinates(ve)));
                    var x = 3 * r;
                    y && c(v) && c(T)
                        ? (a.fromArray(E, x, Te),
                          a.fromArray(v, x, Re),
                          a.fromArray(T, x, Ae),
                          e.octPack(Te, Re, Ae, ve),
                          (O[I++] = ve.x),
                          (O[I++] = ve.y))
                        : (y && (a.fromArray(E, x, Te), (O[I++] = e.octEncodeFloat(Te))),
                          g && (a.fromArray(v, x, Te), (O[I++] = e.octEncodeFloat(Te))),
                          S && (a.fromArray(T, x, Te), (O[I++] = e.octEncodeFloat(Te))));
                }
                return (
                    (t.attributes.compressedAttributes = new p({
                        componentDatatype: u.FLOAT,
                        componentsPerAttribute: N,
                        values: O
                    })),
                    y && delete t.attributes.normal,
                    m && delete t.attributes.st,
                    S && delete t.attributes.bitangent,
                    g && delete t.attributes.tangent,
                    t
                );
            };
            var Se = new a(),
                we = new a(),
                Ne = new a(),
                Oe = new a(),
                Ie = new a(),
                xe = { positions: new Array(7), indices: new Array(9) },
                Me = j(i, 4),
                Ce = j(a, 3),
                Pe = j(n, 2),
                be = function(e, t, r, n, a, i, o) {
                    var u = a[e] * n.x,
                        s = a[t] * n.y,
                        c = a[r] * n.z;
                    i[o] = u + s + c > v.EPSILON6 ? 1 : 0;
                },
                Ue = new a(),
                De = new a(),
                Le = new a(),
                Fe = new a(),
                Be = {
                    position: !0,
                    normal: !0,
                    bitangent: !0,
                    tangent: !0,
                    st: !0,
                    extrudeDirection: !0,
                    applyOffset: !0
                },
                ze = A.fromPointNormal(a.ZERO, a.UNIT_Y),
                qe = new a(),
                Ge = new a(),
                Ve = new n(),
                Xe = new n(),
                We = new a(),
                He = new a(),
                Ye = new a(),
                ke = new a(),
                Ze = new a(),
                je = new a(),
                Ke = new i(),
                Je = 5 * v.EPSILON9,
                Qe = v.EPSILON6;
            return (
                (ae.splitLongitude = function(e) {
                    var t = e.geometry,
                        n = t.boundingSphere;
                    if (c(n)) {
                        if (
                            n.center.x - n.radius > 0 ||
                            r.intersectPlane(n, A.ORIGIN_ZX_PLANE) !== E.INTERSECTING
                        )
                            return e;
                    }
                    if (t.geometryType !== y.NONE)
                        switch (t.geometryType) {
                            case y.POLYLINES:
                                ne(e);
                                break;
                            case y.TRIANGLES:
                                $(e);
                                break;
                            case y.LINES:
                                te(e);
                        }
                    else
                        G(t),
                            t.primitiveType === g.TRIANGLES
                                ? $(e)
                                : t.primitiveType === g.LINES && te(e);
                    return e;
                }),
                ae
            );
        }),
        define("ThirdParty/earcut-2.1.1", [], function() {
            "use strict";
            function e(e, r, a) {
                a = a || 2;
                var i = r && r.length,
                    o = i ? r[0] * a : e.length,
                    u = t(e, 0, o, a, !0),
                    c = [];
                if (!u) return c;
                var l, f, h, d, p, y, m;
                if ((i && (u = s(e, r, u, a)), e.length > 80 * a)) {
                    (l = h = e[0]), (f = d = e[1]);
                    for (var E = a; E < o; E += a)
                        (p = e[E]),
                            (y = e[E + 1]),
                            p < l && (l = p),
                            y < f && (f = y),
                            p > h && (h = p),
                            y > d && (d = y);
                    m = Math.max(h - l, d - f);
                }
                return n(u, c, a, l, f, m), c;
            }
            function t(e, t, r, n, a) {
                var i, o;
                if (a === I(e, t, r, n) > 0) for (i = t; i < r; i += n) o = w(i, e[i], e[i + 1], o);
                else for (i = r - n; i >= t; i -= n) o = w(i, e[i], e[i + 1], o);
                return o && v(o, o.next) && (N(o), (o = o.next)), o;
            }
            function r(e, t) {
                if (!e) return e;
                t || (t = e);
                var r,
                    n = e;
                do {
                    if (((r = !1), n.steiner || (!v(n, n.next) && 0 !== _(n.prev, n, n.next))))
                        n = n.next;
                    else {
                        if ((N(n), (n = t = n.prev) === n.next)) return null;
                        r = !0;
                    }
                } while (r || n !== t);
                return t;
            }
            function n(e, t, s, c, l, f, d) {
                if (e) {
                    !d && f && h(e, c, l, f);
                    for (var p, y, m = e; e.prev !== e.next; )
                        if (((p = e.prev), (y = e.next), f ? i(e, c, l, f) : a(e)))
                            t.push(p.i / s),
                                t.push(e.i / s),
                                t.push(y.i / s),
                                N(e),
                                (e = y.next),
                                (m = y.next);
                        else if ((e = y) === m) {
                            d
                                ? 1 === d
                                    ? ((e = o(e, t, s)), n(e, t, s, c, l, f, 2))
                                    : 2 === d && u(e, t, s, c, l, f)
                                : n(r(e), t, s, c, l, f, 1);
                            break;
                        }
                }
            }
            function a(e) {
                var t = e.prev,
                    r = e,
                    n = e.next;
                if (_(t, r, n) >= 0) return !1;
                for (var a = e.next.next; a !== e.prev; ) {
                    if (m(t.x, t.y, r.x, r.y, n.x, n.y, a.x, a.y) && _(a.prev, a, a.next) >= 0)
                        return !1;
                    a = a.next;
                }
                return !0;
            }
            function i(e, t, r, n) {
                var a = e.prev,
                    i = e,
                    o = e.next;
                if (_(a, i, o) >= 0) return !1;
                for (
                    var u = a.x < i.x ? (a.x < o.x ? a.x : o.x) : i.x < o.x ? i.x : o.x,
                        s = a.y < i.y ? (a.y < o.y ? a.y : o.y) : i.y < o.y ? i.y : o.y,
                        c = a.x > i.x ? (a.x > o.x ? a.x : o.x) : i.x > o.x ? i.x : o.x,
                        l = a.y > i.y ? (a.y > o.y ? a.y : o.y) : i.y > o.y ? i.y : o.y,
                        f = p(u, s, t, r, n),
                        h = p(c, l, t, r, n),
                        d = e.nextZ;
                    d && d.z <= h;

                ) {
                    if (
                        d !== e.prev &&
                        d !== e.next &&
                        m(a.x, a.y, i.x, i.y, o.x, o.y, d.x, d.y) &&
                        _(d.prev, d, d.next) >= 0
                    )
                        return !1;
                    d = d.nextZ;
                }
                for (d = e.prevZ; d && d.z >= f; ) {
                    if (
                        d !== e.prev &&
                        d !== e.next &&
                        m(a.x, a.y, i.x, i.y, o.x, o.y, d.x, d.y) &&
                        _(d.prev, d, d.next) >= 0
                    )
                        return !1;
                    d = d.prevZ;
                }
                return !0;
            }
            function o(e, t, r) {
                var n = e;
                do {
                    var a = n.prev,
                        i = n.next.next;
                    !v(a, i) &&
                        T(a, n, n.next, i) &&
                        A(a, i) &&
                        A(i, a) &&
                        (t.push(a.i / r),
                        t.push(n.i / r),
                        t.push(i.i / r),
                        N(n),
                        N(n.next),
                        (n = e = i)),
                        (n = n.next);
                } while (n !== e);
                return n;
            }
            function u(e, t, a, i, o, u) {
                var s = e;
                do {
                    for (var c = s.next.next; c !== s.prev; ) {
                        if (s.i !== c.i && E(s, c)) {
                            var l = S(s, c);
                            return (
                                (s = r(s, s.next)),
                                (l = r(l, l.next)),
                                n(s, t, a, i, o, u),
                                void n(l, t, a, i, o, u)
                            );
                        }
                        c = c.next;
                    }
                    s = s.next;
                } while (s !== e);
            }
            function s(e, n, a, i) {
                var o,
                    u,
                    s,
                    f,
                    h,
                    d = [];
                for (o = 0, u = n.length; o < u; o++)
                    (s = n[o] * i),
                        (f = o < u - 1 ? n[o + 1] * i : e.length),
                        (h = t(e, s, f, i, !1)),
                        h === h.next && (h.steiner = !0),
                        d.push(y(h));
                for (d.sort(c), o = 0; o < d.length; o++) l(d[o], a), (a = r(a, a.next));
                return a;
            }
            function c(e, t) {
                return e.x - t.x;
            }
            function l(e, t) {
                if ((t = f(e, t))) {
                    var n = S(t, e);
                    r(n, n.next);
                }
            }
            function f(e, t) {
                var r,
                    n = t,
                    a = e.x,
                    i = e.y,
                    o = -1 / 0;
                do {
                    if (i <= n.y && i >= n.next.y) {
                        var u = n.x + ((i - n.y) * (n.next.x - n.x)) / (n.next.y - n.y);
                        if (u <= a && u > o) {
                            if (((o = u), u === a)) {
                                if (i === n.y) return n;
                                if (i === n.next.y) return n.next;
                            }
                            r = n.x < n.next.x ? n : n.next;
                        }
                    }
                    n = n.next;
                } while (n !== t);
                if (!r) return null;
                if (a === o) return r.prev;
                var s,
                    c = r,
                    l = r.x,
                    f = r.y,
                    h = 1 / 0;
                for (n = r.next; n !== c; )
                    a >= n.x &&
                        n.x >= l &&
                        m(i < f ? a : o, i, l, f, i < f ? o : a, i, n.x, n.y) &&
                        ((s = Math.abs(i - n.y) / (a - n.x)) < h || (s === h && n.x > r.x)) &&
                        A(n, e) &&
                        ((r = n), (h = s)),
                        (n = n.next);
                return r;
            }
            function h(e, t, r, n) {
                var a = e;
                do {
                    null === a.z && (a.z = p(a.x, a.y, t, r, n)),
                        (a.prevZ = a.prev),
                        (a.nextZ = a.next),
                        (a = a.next);
                } while (a !== e);
                (a.prevZ.nextZ = null), (a.prevZ = null), d(a);
            }
            function d(e) {
                var t,
                    r,
                    n,
                    a,
                    i,
                    o,
                    u,
                    s,
                    c = 1;
                do {
                    for (r = e, e = null, i = null, o = 0; r; ) {
                        for (o++, n = r, u = 0, t = 0; t < c && (u++, (n = n.nextZ)); t++);
                        for (s = c; u > 0 || (s > 0 && n); )
                            0 === u
                                ? ((a = n), (n = n.nextZ), s--)
                                : 0 !== s && n
                                ? r.z <= n.z
                                    ? ((a = r), (r = r.nextZ), u--)
                                    : ((a = n), (n = n.nextZ), s--)
                                : ((a = r), (r = r.nextZ), u--),
                                i ? (i.nextZ = a) : (e = a),
                                (a.prevZ = i),
                                (i = a);
                        r = n;
                    }
                    (i.nextZ = null), (c *= 2);
                } while (o > 1);
                return e;
            }
            function p(e, t, r, n, a) {
                return (
                    (e = (32767 * (e - r)) / a),
                    (t = (32767 * (t - n)) / a),
                    (e = 16711935 & (e | (e << 8))),
                    (e = 252645135 & (e | (e << 4))),
                    (e = 858993459 & (e | (e << 2))),
                    (e = 1431655765 & (e | (e << 1))),
                    (t = 16711935 & (t | (t << 8))),
                    (t = 252645135 & (t | (t << 4))),
                    (t = 858993459 & (t | (t << 2))),
                    (t = 1431655765 & (t | (t << 1))),
                    e | (t << 1)
                );
            }
            function y(e) {
                var t = e,
                    r = e;
                do {
                    t.x < r.x && (r = t), (t = t.next);
                } while (t !== e);
                return r;
            }
            function m(e, t, r, n, a, i, o, u) {
                return (
                    (a - o) * (t - u) - (e - o) * (i - u) >= 0 &&
                    (e - o) * (n - u) - (r - o) * (t - u) >= 0 &&
                    (r - o) * (i - u) - (a - o) * (n - u) >= 0
                );
            }
            function E(e, t) {
                return (
                    e.next.i !== t.i &&
                    e.prev.i !== t.i &&
                    !R(e, t) &&
                    A(e, t) &&
                    A(t, e) &&
                    g(e, t)
                );
            }
            function _(e, t, r) {
                return (t.y - e.y) * (r.x - t.x) - (t.x - e.x) * (r.y - t.y);
            }
            function v(e, t) {
                return e.x === t.x && e.y === t.y;
            }
            function T(e, t, r, n) {
                return (
                    !!((v(e, t) && v(r, n)) || (v(e, n) && v(r, t))) ||
                    (_(e, t, r) > 0 != _(e, t, n) > 0 && _(r, n, e) > 0 != _(r, n, t) > 0)
                );
            }
            function R(e, t) {
                var r = e;
                do {
                    if (
                        r.i !== e.i &&
                        r.next.i !== e.i &&
                        r.i !== t.i &&
                        r.next.i !== t.i &&
                        T(r, r.next, e, t)
                    )
                        return !0;
                    r = r.next;
                } while (r !== e);
                return !1;
            }
            function A(e, t) {
                return _(e.prev, e, e.next) < 0
                    ? _(e, t, e.next) >= 0 && _(e, e.prev, t) >= 0
                    : _(e, t, e.prev) < 0 || _(e, e.next, t) < 0;
            }
            function g(e, t) {
                var r = e,
                    n = !1,
                    a = (e.x + t.x) / 2,
                    i = (e.y + t.y) / 2;
                do {
                    r.y > i != r.next.y > i &&
                        a < ((r.next.x - r.x) * (i - r.y)) / (r.next.y - r.y) + r.x &&
                        (n = !n),
                        (r = r.next);
                } while (r !== e);
                return n;
            }
            function S(e, t) {
                var r = new O(e.i, e.x, e.y),
                    n = new O(t.i, t.x, t.y),
                    a = e.next,
                    i = t.prev;
                return (
                    (e.next = t),
                    (t.prev = e),
                    (r.next = a),
                    (a.prev = r),
                    (n.next = r),
                    (r.prev = n),
                    (i.next = n),
                    (n.prev = i),
                    n
                );
            }
            function w(e, t, r, n) {
                var a = new O(e, t, r);
                return (
                    n
                        ? ((a.next = n.next), (a.prev = n), (n.next.prev = a), (n.next = a))
                        : ((a.prev = a), (a.next = a)),
                    a
                );
            }
            function N(e) {
                (e.next.prev = e.prev),
                    (e.prev.next = e.next),
                    e.prevZ && (e.prevZ.nextZ = e.nextZ),
                    e.nextZ && (e.nextZ.prevZ = e.prevZ);
            }
            function O(e, t, r) {
                (this.i = e),
                    (this.x = t),
                    (this.y = r),
                    (this.prev = null),
                    (this.next = null),
                    (this.z = null),
                    (this.prevZ = null),
                    (this.nextZ = null),
                    (this.steiner = !1);
            }
            function I(e, t, r, n) {
                for (var a = 0, i = t, o = r - n; i < r; i += n)
                    (a += (e[o] - e[i]) * (e[i + 1] + e[o + 1])), (o = i);
                return a;
            }
            return (
                (e.deviation = function(e, t, r, n) {
                    var a = t && t.length,
                        i = a ? t[0] * r : e.length,
                        o = Math.abs(I(e, 0, i, r));
                    if (a)
                        for (var u = 0, s = t.length; u < s; u++) {
                            var c = t[u] * r,
                                l = u < s - 1 ? t[u + 1] * r : e.length;
                            o -= Math.abs(I(e, c, l, r));
                        }
                    var f = 0;
                    for (u = 0; u < n.length; u += 3) {
                        var h = n[u] * r,
                            d = n[u + 1] * r,
                            p = n[u + 2] * r;
                        f += Math.abs(
                            (e[h] - e[p]) * (e[d + 1] - e[h + 1]) -
                                (e[h] - e[d]) * (e[p + 1] - e[h + 1])
                        );
                    }
                    return 0 === o && 0 === f ? 0 : Math.abs((f - o) / o);
                }),
                (e.flatten = function(e) {
                    for (
                        var t = e[0][0].length,
                            r = { vertices: [], holes: [], dimensions: t },
                            n = 0,
                            a = 0;
                        a < e.length;
                        a++
                    ) {
                        for (var i = 0; i < e[a].length; i++)
                            for (var o = 0; o < t; o++) r.vertices.push(e[a][i][o]);
                        a > 0 && ((n += e[a - 1].length), r.holes.push(n));
                    }
                    return r;
                }),
                e
            );
        }),
        define("Core/WindingOrder", ["./freezeObject", "./WebGLConstants"], function(e, t) {
            "use strict";
            var r = {
                CLOCKWISE: t.CW,
                COUNTER_CLOCKWISE: t.CCW,
                validate: function(e) {
                    return e === r.CLOCKWISE || e === r.COUNTER_CLOCKWISE;
                }
            };
            return e(r);
        }),
        define("Core/PolygonPipeline", [
            "../ThirdParty/earcut-2.1.1",
            "./Cartesian2",
            "./Cartesian3",
            "./Check",
            "./ComponentDatatype",
            "./defaultValue",
            "./defined",
            "./Ellipsoid",
            "./Geometry",
            "./GeometryAttribute",
            "./Math",
            "./PrimitiveType",
            "./WindingOrder"
        ], function(e, t, r, n, a, i, o, u, s, c, l, f, h) {
            "use strict";
            var d = new r(),
                p = new r(),
                y = {};
            (y.computeArea2D = function(e) {
                for (var t = e.length, r = 0, n = t - 1, a = 0; a < t; n = a++) {
                    var i = e[n],
                        o = e[a];
                    r += i.x * o.y - o.x * i.y;
                }
                return 0.5 * r;
            }),
                (y.computeWindingOrder2D = function(e) {
                    return y.computeArea2D(e) > 0 ? h.COUNTER_CLOCKWISE : h.CLOCKWISE;
                }),
                (y.triangulate = function(r, n) {
                    var a = t.packArray(r);
                    return e(a, n, 2);
                });
            var m = new r(),
                E = new r(),
                _ = new r(),
                v = new r(),
                T = new r(),
                R = new r(),
                A = new r();
            return (
                (y.computeSubdivision = function(e, t, n, u) {
                    u = i(u, l.RADIANS_PER_DEGREE);
                    var h,
                        d = n.slice(0),
                        p = t.length,
                        y = new Array(3 * p),
                        g = 0;
                    for (h = 0; h < p; h++) {
                        var S = t[h];
                        (y[g++] = S.x), (y[g++] = S.y), (y[g++] = S.z);
                    }
                    for (
                        var w = [], N = {}, O = e.maximumRadius, I = l.chordLength(u, O), x = I * I;
                        d.length > 0;

                    ) {
                        var M,
                            C,
                            P = d.pop(),
                            b = d.pop(),
                            U = d.pop(),
                            D = r.fromArray(y, 3 * U, m),
                            L = r.fromArray(y, 3 * b, E),
                            F = r.fromArray(y, 3 * P, _),
                            B = r.multiplyByScalar(r.normalize(D, v), O, v),
                            z = r.multiplyByScalar(r.normalize(L, T), O, T),
                            q = r.multiplyByScalar(r.normalize(F, R), O, R),
                            G = r.magnitudeSquared(r.subtract(B, z, A)),
                            V = r.magnitudeSquared(r.subtract(z, q, A)),
                            X = r.magnitudeSquared(r.subtract(q, B, A)),
                            W = Math.max(G, V, X);
                        W > x
                            ? G === W
                                ? ((M = Math.min(U, b) + " " + Math.max(U, b)),
                                  (h = N[M]),
                                  o(h) ||
                                      ((C = r.add(D, L, A)),
                                      r.multiplyByScalar(C, 0.5, C),
                                      y.push(C.x, C.y, C.z),
                                      (h = y.length / 3 - 1),
                                      (N[M] = h)),
                                  d.push(U, h, P),
                                  d.push(h, b, P))
                                : V === W
                                ? ((M = Math.min(b, P) + " " + Math.max(b, P)),
                                  (h = N[M]),
                                  o(h) ||
                                      ((C = r.add(L, F, A)),
                                      r.multiplyByScalar(C, 0.5, C),
                                      y.push(C.x, C.y, C.z),
                                      (h = y.length / 3 - 1),
                                      (N[M] = h)),
                                  d.push(b, h, U),
                                  d.push(h, P, U))
                                : X === W &&
                                  ((M = Math.min(P, U) + " " + Math.max(P, U)),
                                  (h = N[M]),
                                  o(h) ||
                                      ((C = r.add(F, D, A)),
                                      r.multiplyByScalar(C, 0.5, C),
                                      y.push(C.x, C.y, C.z),
                                      (h = y.length / 3 - 1),
                                      (N[M] = h)),
                                  d.push(P, h, b),
                                  d.push(h, U, b))
                            : (w.push(U), w.push(b), w.push(P));
                    }
                    return new s({
                        attributes: {
                            position: new c({
                                componentDatatype: a.DOUBLE,
                                componentsPerAttribute: 3,
                                values: y
                            })
                        },
                        indices: w,
                        primitiveType: f.TRIANGLES
                    });
                }),
                (y.scaleToGeodeticHeight = function(e, t, n, a) {
                    n = i(n, u.WGS84);
                    var s = d,
                        c = p;
                    if (((t = i(t, 0)), (a = i(a, !0)), o(e)))
                        for (var l = e.length, f = 0; f < l; f += 3)
                            r.fromArray(e, f, c),
                                a && (c = n.scaleToGeodeticSurface(c, c)),
                                0 !== t &&
                                    ((s = n.geodeticSurfaceNormal(c, s)),
                                    r.multiplyByScalar(s, t, s),
                                    r.add(c, s, c)),
                                (e[f] = c.x),
                                (e[f + 1] = c.y),
                                (e[f + 2] = c.z);
                    return e;
                }),
                y
            );
        }),
        define("Core/RectangleGeometryLibrary", [
            "./Cartesian3",
            "./Cartographic",
            "./defined",
            "./DeveloperError",
            "./GeographicProjection",
            "./Math",
            "./Matrix2",
            "./Rectangle"
        ], function(e, t, r, n, a, i, o, u) {
            "use strict";
            function s(t, r, n, a, i, u, s) {
                var c = Math.cos(r),
                    l = a * c,
                    f = n * c,
                    h = Math.sin(r),
                    y = a * h,
                    _ = n * h;
                (p = E.project(t, p)), (p = e.subtract(p, m, p));
                var v = o.fromRotation(r, d);
                (p = o.multiplyByVector(v, p, p)),
                    (p = e.add(p, m, p)),
                    (t = E.unproject(p, t)),
                    (u -= 1),
                    (s -= 1);
                var T = t.latitude,
                    R = T + u * _,
                    A = T - l * s,
                    g = T - l * s + u * _,
                    S = Math.max(T, R, A, g),
                    w = Math.min(T, R, A, g),
                    N = t.longitude,
                    O = N + u * f,
                    I = N + s * y,
                    x = N + s * y + u * f;
                return {
                    north: S,
                    south: w,
                    east: Math.max(N, O, I, x),
                    west: Math.min(N, O, I, x),
                    granYCos: l,
                    granYSin: y,
                    granXCos: f,
                    granXSin: _,
                    nwCorner: t
                };
            }
            var c = Math.cos,
                l = Math.sin,
                f = Math.sqrt,
                h = {};
            h.computePosition = function(e, t, n, a, i, o, u) {
                var s = t.radiiSquared,
                    h = e.nwCorner,
                    d = e.boundingRectangle,
                    p = h.latitude - e.granYCos * a + i * e.granXSin,
                    y = c(p),
                    m = l(p),
                    E = s.z * m,
                    _ = h.longitude + a * e.granYSin + i * e.granXCos,
                    v = y * c(_),
                    T = y * l(_),
                    R = s.x * v,
                    A = s.y * T,
                    g = f(R * v + A * T + E * m);
                if (((o.x = R / g), (o.y = A / g), (o.z = E / g), n)) {
                    var S = e.stNwCorner;
                    r(S)
                        ? ((p = S.latitude - e.stGranYCos * a + i * e.stGranXSin),
                          (_ = S.longitude + a * e.stGranYSin + i * e.stGranXCos),
                          (u.x = (_ - e.stWest) * e.lonScalar),
                          (u.y = (p - e.stSouth) * e.latScalar))
                        : ((u.x = (_ - d.west) * e.lonScalar), (u.y = (p - d.south) * e.latScalar));
                }
            };
            var d = new o(),
                p = new e(),
                y = new t(),
                m = new e(),
                E = new a();
            return (
                (h.computeOptions = function(e, t, r, n, a, o, c) {
                    var l,
                        f,
                        h,
                        d,
                        p,
                        _ = e.east,
                        v = e.west,
                        T = e.north,
                        R = e.south,
                        A = T - R;
                    v > _
                        ? ((p = i.TWO_PI - v + _),
                          (l = Math.ceil(p / t) + 1),
                          (f = Math.ceil(A / t) + 1),
                          (h = p / (l - 1)),
                          (d = A / (f - 1)))
                        : ((p = _ - v),
                          (l = Math.ceil(p / t) + 1),
                          (f = Math.ceil(A / t) + 1),
                          (h = p / (l - 1)),
                          (d = A / (f - 1)));
                    var g = u.northwest(e, o),
                        S = u.center(e, y);
                    (0 === r && 0 === n) ||
                        (S.longitude < g.longitude && (S.longitude += i.TWO_PI),
                        (m = E.project(S, m)));
                    var w = d,
                        N = h,
                        O = u.clone(e, a),
                        I = {
                            granYCos: w,
                            granYSin: 0,
                            granXCos: N,
                            granXSin: 0,
                            nwCorner: g,
                            boundingRectangle: O,
                            width: l,
                            height: f
                        };
                    if (0 !== r) {
                        var x = s(g, r, h, d, S, l, f);
                        (T = x.north),
                            (R = x.south),
                            (_ = x.east),
                            (v = x.west),
                            (I.granYCos = x.granYCos),
                            (I.granYSin = x.granYSin),
                            (I.granXCos = x.granXCos),
                            (I.granXSin = x.granXSin),
                            (O.north = T),
                            (O.south = R),
                            (O.east = _),
                            (O.west = v);
                    }
                    if (0 !== n) {
                        r -= n;
                        var M = u.northwest(O, c),
                            C = s(M, r, h, d, S, l, f);
                        (I.stGranYCos = C.granYCos),
                            (I.stGranXCos = C.granXCos),
                            (I.stGranYSin = C.granYSin),
                            (I.stGranXSin = C.granXSin),
                            (I.stNwCorner = M),
                            (I.stWest = C.west),
                            (I.stSouth = C.south);
                    }
                    return I;
                }),
                h
            );
        }),
        define("Core/VertexFormat", [
            "./defaultValue",
            "./defined",
            "./DeveloperError",
            "./freezeObject"
        ], function(e, t, r, n) {
            "use strict";
            function a(t) {
                (t = e(t, e.EMPTY_OBJECT)),
                    (this.position = e(t.position, !1)),
                    (this.normal = e(t.normal, !1)),
                    (this.st = e(t.st, !1)),
                    (this.bitangent = e(t.bitangent, !1)),
                    (this.tangent = e(t.tangent, !1)),
                    (this.color = e(t.color, !1));
            }
            return (
                (a.POSITION_ONLY = n(new a({ position: !0 }))),
                (a.POSITION_AND_NORMAL = n(new a({ position: !0, normal: !0 }))),
                (a.POSITION_NORMAL_AND_ST = n(new a({ position: !0, normal: !0, st: !0 }))),
                (a.POSITION_AND_ST = n(new a({ position: !0, st: !0 }))),
                (a.POSITION_AND_COLOR = n(new a({ position: !0, color: !0 }))),
                (a.ALL = n(
                    new a({ position: !0, normal: !0, st: !0, tangent: !0, bitangent: !0 })
                )),
                (a.DEFAULT = a.POSITION_NORMAL_AND_ST),
                (a.packedLength = 6),
                (a.pack = function(t, r, n) {
                    return (
                        (n = e(n, 0)),
                        (r[n++] = t.position ? 1 : 0),
                        (r[n++] = t.normal ? 1 : 0),
                        (r[n++] = t.st ? 1 : 0),
                        (r[n++] = t.tangent ? 1 : 0),
                        (r[n++] = t.bitangent ? 1 : 0),
                        (r[n] = t.color ? 1 : 0),
                        r
                    );
                }),
                (a.unpack = function(r, n, i) {
                    return (
                        (n = e(n, 0)),
                        t(i) || (i = new a()),
                        (i.position = 1 === r[n++]),
                        (i.normal = 1 === r[n++]),
                        (i.st = 1 === r[n++]),
                        (i.tangent = 1 === r[n++]),
                        (i.bitangent = 1 === r[n++]),
                        (i.color = 1 === r[n]),
                        i
                    );
                }),
                (a.clone = function(e, r) {
                    if (t(e))
                        return (
                            t(r) || (r = new a()),
                            (r.position = e.position),
                            (r.normal = e.normal),
                            (r.st = e.st),
                            (r.tangent = e.tangent),
                            (r.bitangent = e.bitangent),
                            (r.color = e.color),
                            r
                        );
                }),
                a
            );
        }),
        define("Core/RectangleGeometry", [
            "./arrayFill",
            "./BoundingSphere",
            "./Cartesian2",
            "./Cartesian3",
            "./Cartographic",
            "./Check",
            "./ComponentDatatype",
            "./defaultValue",
            "./defined",
            "./defineProperties",
            "./DeveloperError",
            "./Ellipsoid",
            "./Geometry",
            "./GeometryAttribute",
            "./GeometryAttributes",
            "./GeometryInstance",
            "./GeometryOffsetAttribute",
            "./GeometryPipeline",
            "./IndexDatatype",
            "./Math",
            "./Matrix2",
            "./Matrix3",
            "./PolygonPipeline",
            "./PrimitiveType",
            "./Quaternion",
            "./Rectangle",
            "./RectangleGeometryLibrary",
            "./VertexFormat"
        ], function(
            e,
            t,
            r,
            n,
            a,
            i,
            o,
            u,
            s,
            c,
            l,
            f,
            h,
            d,
            p,
            y,
            m,
            E,
            _,
            v,
            T,
            R,
            A,
            g,
            S,
            w,
            N,
            O
        ) {
            "use strict";
            function I(e, t) {
                var r = new h({ attributes: new p(), primitiveType: g.TRIANGLES });
                return (
                    (r.attributes.position = new d({
                        componentDatatype: o.DOUBLE,
                        componentsPerAttribute: 3,
                        values: t.positions
                    })),
                    e.normal &&
                        (r.attributes.normal = new d({
                            componentDatatype: o.FLOAT,
                            componentsPerAttribute: 3,
                            values: t.normals
                        })),
                    e.tangent &&
                        (r.attributes.tangent = new d({
                            componentDatatype: o.FLOAT,
                            componentsPerAttribute: 3,
                            values: t.tangents
                        })),
                    e.bitangent &&
                        (r.attributes.bitangent = new d({
                            componentDatatype: o.FLOAT,
                            componentsPerAttribute: 3,
                            values: t.bitangents
                        })),
                    r
                );
            }
            function x(e, t, r, a) {
                var i = e.length,
                    o = t.normal ? new Float32Array(i) : void 0,
                    u = t.tangent ? new Float32Array(i) : void 0,
                    s = t.bitangent ? new Float32Array(i) : void 0,
                    c = 0,
                    l = G,
                    f = q,
                    h = z;
                if (t.normal || t.tangent || t.bitangent)
                    for (var d = 0; d < i; d += 3) {
                        var p = n.fromArray(e, d, B),
                            y = c + 1,
                            m = c + 2;
                        (h = r.geodeticSurfaceNormal(p, h)),
                            (t.tangent || t.bitangent) &&
                                (n.cross(n.UNIT_Z, h, f),
                                R.multiplyByVector(a, f, f),
                                n.normalize(f, f),
                                t.bitangent && n.normalize(n.cross(h, f, l), l)),
                            t.normal && ((o[c] = h.x), (o[y] = h.y), (o[m] = h.z)),
                            t.tangent && ((u[c] = f.x), (u[y] = f.y), (u[m] = f.z)),
                            t.bitangent && ((s[c] = l.x), (s[y] = l.y), (s[m] = l.z)),
                            (c += 3);
                    }
                return I(t, { positions: e, normals: o, tangents: u, bitangents: s });
            }
            function M(e, t, r) {
                var a = e.length,
                    i = t.normal ? new Float32Array(a) : void 0,
                    o = t.tangent ? new Float32Array(a) : void 0,
                    u = t.bitangent ? new Float32Array(a) : void 0,
                    s = 0,
                    c = 0,
                    l = 0,
                    f = !0,
                    h = G,
                    d = q,
                    p = z;
                if (t.normal || t.tangent || t.bitangent)
                    for (var y = 0; y < a; y += 6) {
                        var m = n.fromArray(e, y, B),
                            E = n.fromArray(e, (y + 6) % a, Y);
                        if (f) {
                            var _ = n.fromArray(e, (y + 3) % a, k);
                            n.subtract(E, m, E),
                                n.subtract(_, m, _),
                                (p = n.normalize(n.cross(_, E, p), p)),
                                (f = !1);
                        }
                        n.equalsEpsilon(E, m, v.EPSILON10) && (f = !0),
                            (t.tangent || t.bitangent) &&
                                ((h = r.geodeticSurfaceNormal(m, h)),
                                t.tangent && (d = n.normalize(n.cross(h, p, d), d))),
                            t.normal &&
                                ((i[s++] = p.x),
                                (i[s++] = p.y),
                                (i[s++] = p.z),
                                (i[s++] = p.x),
                                (i[s++] = p.y),
                                (i[s++] = p.z)),
                            t.tangent &&
                                ((o[c++] = d.x),
                                (o[c++] = d.y),
                                (o[c++] = d.z),
                                (o[c++] = d.x),
                                (o[c++] = d.y),
                                (o[c++] = d.z)),
                            t.bitangent &&
                                ((u[l++] = h.x),
                                (u[l++] = h.y),
                                (u[l++] = h.z),
                                (u[l++] = h.x),
                                (u[l++] = h.y),
                                (u[l++] = h.z));
                    }
                return I(t, { positions: e, normals: i, tangents: o, bitangents: u });
            }
            function C(e, t) {
                for (
                    var r = e._vertexFormat,
                        n = e._ellipsoid,
                        a = t.size,
                        i = t.height,
                        u = t.width,
                        s = r.position ? new Float64Array(3 * a) : void 0,
                        c = r.st ? new Float32Array(2 * a) : void 0,
                        l = 0,
                        f = 0,
                        h = B,
                        p = X,
                        y = Number.MAX_VALUE,
                        m = Number.MAX_VALUE,
                        E = -Number.MAX_VALUE,
                        v = -Number.MAX_VALUE,
                        T = 0;
                    T < i;
                    ++T
                )
                    for (var R = 0; R < u; ++R)
                        N.computePosition(t, n, r.st, T, R, h, p),
                            (s[l++] = h.x),
                            (s[l++] = h.y),
                            (s[l++] = h.z),
                            r.st &&
                                ((c[f++] = p.x),
                                (c[f++] = p.y),
                                (y = Math.min(y, p.x)),
                                (m = Math.min(m, p.y)),
                                (E = Math.max(E, p.x)),
                                (v = Math.max(v, p.y)));
                if (r.st && (y < 0 || m < 0 || E > 1 || v > 1))
                    for (var A = 0; A < c.length; A += 2)
                        (c[A] = (c[A] - y) / (E - y)), (c[A + 1] = (c[A + 1] - m) / (v - m));
                for (
                    var g = x(s, r, n, t.tangentRotationMatrix),
                        S = 6 * (u - 1) * (i - 1),
                        w = _.createTypedArray(a, S),
                        O = 0,
                        I = 0,
                        M = 0;
                    M < i - 1;
                    ++M
                ) {
                    for (var C = 0; C < u - 1; ++C) {
                        var P = O,
                            b = P + u,
                            U = b + 1,
                            D = P + 1;
                        (w[I++] = P),
                            (w[I++] = b),
                            (w[I++] = D),
                            (w[I++] = D),
                            (w[I++] = b),
                            (w[I++] = U),
                            ++O;
                    }
                    ++O;
                }
                return (
                    (g.indices = w),
                    r.st &&
                        (g.attributes.st = new d({
                            componentDatatype: o.FLOAT,
                            componentsPerAttribute: 2,
                            values: c
                        })),
                    g
                );
            }
            function P(e, t, r, n, a) {
                return (
                    (e[t++] = n[r]),
                    (e[t++] = n[r + 1]),
                    (e[t++] = n[r + 2]),
                    (e[t++] = a[r]),
                    (e[t++] = a[r + 1]),
                    (e[t++] = a[r + 2]),
                    e
                );
            }
            function b(e, t, r, n) {
                return (
                    (e[t++] = n[r]), (e[t++] = n[r + 1]), (e[t++] = n[r]), (e[t++] = n[r + 1]), e
                );
            }
            function U(t, r) {
                var a,
                    i = t._shadowVolume,
                    u = t._offsetAttribute,
                    c = t._vertexFormat,
                    l = t._extrudedHeight,
                    f = t._surfaceHeight,
                    h = t._ellipsoid,
                    p = r.height,
                    T = r.width;
                if (i) {
                    var R = O.clone(c, Z);
                    (R.normal = !0), (t._vertexFormat = R);
                }
                var g = C(t, r);
                i && (t._vertexFormat = c);
                var S = A.scaleToGeodeticHeight(g.attributes.position.values, f, h, !1);
                S = new Float64Array(S);
                var w = S.length,
                    N = 2 * w,
                    I = new Float64Array(N);
                I.set(S);
                var x = A.scaleToGeodeticHeight(g.attributes.position.values, l, h);
                I.set(x, w), (g.attributes.position.values = I);
                var U,
                    D,
                    L = c.normal ? new Float32Array(N) : void 0,
                    F = c.tangent ? new Float32Array(N) : void 0,
                    B = c.bitangent ? new Float32Array(N) : void 0,
                    z = c.st ? new Float32Array((N / 3) * 2) : void 0;
                if (c.normal) {
                    for (D = g.attributes.normal.values, L.set(D), a = 0; a < w; a++) D[a] = -D[a];
                    L.set(D, w), (g.attributes.normal.values = L);
                }
                if (i) {
                    (D = g.attributes.normal.values), c.normal || (g.attributes.normal = void 0);
                    var q = new Float32Array(N);
                    for (a = 0; a < w; a++) D[a] = -D[a];
                    q.set(D, w),
                        (g.attributes.extrudeDirection = new d({
                            componentDatatype: o.FLOAT,
                            componentsPerAttribute: 3,
                            values: q
                        }));
                }
                var G,
                    V = s(u);
                if (V) {
                    var X = (w / 3) * 2,
                        W = new Uint8Array(X);
                    u === m.TOP
                        ? (W = e(W, 1, 0, X / 2))
                        : ((G = u === m.NONE ? 0 : 1), (W = e(W, G))),
                        (g.attributes.applyOffset = new d({
                            componentDatatype: o.UNSIGNED_BYTE,
                            componentsPerAttribute: 1,
                            values: W
                        }));
                }
                if (c.tangent) {
                    var H = g.attributes.tangent.values;
                    for (F.set(H), a = 0; a < w; a++) H[a] = -H[a];
                    F.set(H, w), (g.attributes.tangent.values = F);
                }
                if (c.bitangent) {
                    var j = g.attributes.bitangent.values;
                    B.set(j), B.set(j, w), (g.attributes.bitangent.values = B);
                }
                c.st &&
                    ((U = g.attributes.st.values),
                    z.set(U),
                    z.set(U, (w / 3) * 2),
                    (g.attributes.st.values = z));
                var K = g.indices,
                    J = K.length,
                    Q = w / 3,
                    $ = _.createTypedArray(N / 3, 2 * J);
                for ($.set(K), a = 0; a < J; a += 3)
                    ($[a + J] = K[a + 2] + Q),
                        ($[a + 1 + J] = K[a + 1] + Q),
                        ($[a + 2 + J] = K[a] + Q);
                g.indices = $;
                var ee = 2 * T + 2 * p - 4,
                    te = 2 * (ee + 4),
                    re = new Float64Array(3 * te),
                    ne = i ? new Float32Array(3 * te) : void 0,
                    ae = V ? new Uint8Array(te) : void 0,
                    ie = c.st ? new Float32Array(2 * te) : void 0,
                    oe = u === m.TOP;
                V && !oe && ((G = u === m.ALL ? 1 : 0), (ae = e(ae, G)));
                var ue,
                    se = 0,
                    ce = 0,
                    le = 0,
                    fe = 0,
                    he = T * p;
                for (a = 0; a < he; a += T)
                    (ue = 3 * a),
                        (re = P(re, se, ue, S, x)),
                        (se += 6),
                        c.st && ((ie = b(ie, ce, 2 * a, U)), (ce += 4)),
                        i &&
                            ((le += 3),
                            (ne[le++] = D[ue]),
                            (ne[le++] = D[ue + 1]),
                            (ne[le++] = D[ue + 2])),
                        oe && ((ae[fe++] = 1), (fe += 1));
                for (a = he - T; a < he; a++)
                    (ue = 3 * a),
                        (re = P(re, se, ue, S, x)),
                        (se += 6),
                        c.st && ((ie = b(ie, ce, 2 * a, U)), (ce += 4)),
                        i &&
                            ((le += 3),
                            (ne[le++] = D[ue]),
                            (ne[le++] = D[ue + 1]),
                            (ne[le++] = D[ue + 2])),
                        oe && ((ae[fe++] = 1), (fe += 1));
                for (a = he - 1; a > 0; a -= T)
                    (ue = 3 * a),
                        (re = P(re, se, ue, S, x)),
                        (se += 6),
                        c.st && ((ie = b(ie, ce, 2 * a, U)), (ce += 4)),
                        i &&
                            ((le += 3),
                            (ne[le++] = D[ue]),
                            (ne[le++] = D[ue + 1]),
                            (ne[le++] = D[ue + 2])),
                        oe && ((ae[fe++] = 1), (fe += 1));
                for (a = T - 1; a >= 0; a--)
                    (ue = 3 * a),
                        (re = P(re, se, ue, S, x)),
                        (se += 6),
                        c.st && ((ie = b(ie, ce, 2 * a, U)), (ce += 4)),
                        i &&
                            ((le += 3),
                            (ne[le++] = D[ue]),
                            (ne[le++] = D[ue + 1]),
                            (ne[le++] = D[ue + 2])),
                        oe && ((ae[fe++] = 1), (fe += 1));
                var de = M(re, c, h);
                c.st &&
                    (de.attributes.st = new d({
                        componentDatatype: o.FLOAT,
                        componentsPerAttribute: 2,
                        values: ie
                    })),
                    i &&
                        (de.attributes.extrudeDirection = new d({
                            componentDatatype: o.FLOAT,
                            componentsPerAttribute: 3,
                            values: ne
                        })),
                    V &&
                        (de.attributes.applyOffset = new d({
                            componentDatatype: o.UNSIGNED_BYTE,
                            componentsPerAttribute: 1,
                            values: ae
                        }));
                var pe,
                    ye,
                    me,
                    Ee,
                    _e = _.createTypedArray(te, 6 * ee);
                w = re.length / 3;
                var ve = 0;
                for (a = 0; a < w - 1; a += 2) {
                    (pe = a), (Ee = (pe + 2) % w);
                    var Te = n.fromArray(re, 3 * pe, Y),
                        Re = n.fromArray(re, 3 * Ee, k);
                    n.equalsEpsilon(Te, Re, v.EPSILON10) ||
                        ((ye = (pe + 1) % w),
                        (me = (ye + 2) % w),
                        (_e[ve++] = pe),
                        (_e[ve++] = ye),
                        (_e[ve++] = Ee),
                        (_e[ve++] = Ee),
                        (_e[ve++] = ye),
                        (_e[ve++] = me));
                }
                return (
                    (de.indices = _e),
                    (de = E.combineInstances([new y({ geometry: g }), new y({ geometry: de })])),
                    de[0]
                );
            }
            function D(e, t, r, n, a) {
                if (0 === r) return w.clone(e, a);
                var i = N.computeOptions(e, t, r, 0, V, K),
                    o = i.height,
                    u = i.width,
                    s = j;
                return (
                    N.computePosition(i, n, !1, 0, 0, s[0]),
                    N.computePosition(i, n, !1, 0, u - 1, s[1]),
                    N.computePosition(i, n, !1, o - 1, 0, s[2]),
                    N.computePosition(i, n, !1, o - 1, u - 1, s[3]),
                    w.fromCartesianArray(s, n, a)
                );
            }
            function L(e) {
                e = u(e, u.EMPTY_OBJECT);
                var t = e.rectangle,
                    r = u(e.height, 0),
                    n = u(e.extrudedHeight, r);
                (this._rectangle = w.clone(t)),
                    (this._granularity = u(e.granularity, v.RADIANS_PER_DEGREE)),
                    (this._ellipsoid = f.clone(u(e.ellipsoid, f.WGS84))),
                    (this._surfaceHeight = Math.max(r, n)),
                    (this._rotation = u(e.rotation, 0)),
                    (this._stRotation = u(e.stRotation, 0)),
                    (this._vertexFormat = O.clone(u(e.vertexFormat, O.DEFAULT))),
                    (this._extrudedHeight = Math.min(r, n)),
                    (this._shadowVolume = u(e.shadowVolume, !1)),
                    (this._workerName = "createRectangleGeometry"),
                    (this._offsetAttribute = e.offsetAttribute),
                    (this._rotatedRectangle = void 0),
                    (this._textureCoordinateRotationPoints = void 0);
            }
            function F(e) {
                if (0 === e._stRotation) return [0, 0, 0, 1, 1, 0];
                var t = w.clone(e._rectangle, ae),
                    n = e._granularity,
                    a = e._ellipsoid,
                    i = e._rotation - e._stRotation,
                    o = D(t, n, i, a, ae),
                    u = ie;
                (u[0].x = o.west),
                    (u[0].y = o.south),
                    (u[1].x = o.west),
                    (u[1].y = o.north),
                    (u[2].x = o.east),
                    (u[2].y = o.south);
                for (
                    var s = e.rectangle,
                        c = T.fromRotation(e._stRotation, oe),
                        l = w.center(s, ue),
                        f = 0;
                    f < 3;
                    ++f
                ) {
                    var h = u[f];
                    (h.x -= l.longitude),
                        (h.y -= l.latitude),
                        T.multiplyByVector(c, h, h),
                        (h.x += l.longitude),
                        (h.y += l.latitude),
                        (h.x = (h.x - s.west) / s.width),
                        (h.y = (h.y - s.south) / s.height);
                }
                var d = u[0],
                    p = u[1],
                    y = u[2],
                    m = new Array(6);
                return r.pack(d, m), r.pack(p, m, 2), r.pack(y, m, 4), m;
            }
            var B = new n(),
                z = new n(),
                q = new n(),
                G = new n(),
                V = new w(),
                X = new r(),
                W = new t(),
                H = new t(),
                Y = new n(),
                k = new n(),
                Z = new O(),
                j = [new n(), new n(), new n(), new n()],
                K = new a(),
                J = new a();
            (L.packedLength = w.packedLength + f.packedLength + O.packedLength + 7),
                (L.pack = function(e, t, r) {
                    return (
                        (r = u(r, 0)),
                        w.pack(e._rectangle, t, r),
                        (r += w.packedLength),
                        f.pack(e._ellipsoid, t, r),
                        (r += f.packedLength),
                        O.pack(e._vertexFormat, t, r),
                        (r += O.packedLength),
                        (t[r++] = e._granularity),
                        (t[r++] = e._surfaceHeight),
                        (t[r++] = e._rotation),
                        (t[r++] = e._stRotation),
                        (t[r++] = e._extrudedHeight),
                        (t[r++] = e._shadowVolume ? 1 : 0),
                        (t[r] = u(e._offsetAttribute, -1)),
                        t
                    );
                });
            var Q = new w(),
                $ = f.clone(f.UNIT_SPHERE),
                ee = {
                    rectangle: Q,
                    ellipsoid: $,
                    vertexFormat: Z,
                    granularity: void 0,
                    height: void 0,
                    rotation: void 0,
                    stRotation: void 0,
                    extrudedHeight: void 0,
                    shadowVolume: void 0,
                    offsetAttribute: void 0
                };
            (L.unpack = function(e, t, r) {
                t = u(t, 0);
                var n = w.unpack(e, t, Q);
                t += w.packedLength;
                var a = f.unpack(e, t, $);
                t += f.packedLength;
                var i = O.unpack(e, t, Z);
                t += O.packedLength;
                var o = e[t++],
                    c = e[t++],
                    l = e[t++],
                    h = e[t++],
                    d = e[t++],
                    p = 1 === e[t++],
                    y = e[t];
                return s(r)
                    ? ((r._rectangle = w.clone(n, r._rectangle)),
                      (r._ellipsoid = f.clone(a, r._ellipsoid)),
                      (r._vertexFormat = O.clone(i, r._vertexFormat)),
                      (r._granularity = o),
                      (r._surfaceHeight = c),
                      (r._rotation = l),
                      (r._stRotation = h),
                      (r._extrudedHeight = d),
                      (r._shadowVolume = p),
                      (r._offsetAttribute = -1 === y ? void 0 : y),
                      r)
                    : ((ee.granularity = o),
                      (ee.height = c),
                      (ee.rotation = l),
                      (ee.stRotation = h),
                      (ee.extrudedHeight = d),
                      (ee.shadowVolume = p),
                      (ee.offsetAttribute = -1 === y ? void 0 : y),
                      new L(ee));
            }),
                (L.computeRectangle = function(e, t) {
                    e = u(e, u.EMPTY_OBJECT);
                    var r = e.rectangle,
                        n = u(e.granularity, v.RADIANS_PER_DEGREE),
                        a = u(e.ellipsoid, f.WGS84);
                    return D(r, n, u(e.rotation, 0), a, t);
                });
            var te = new R(),
                re = new S(),
                ne = new a();
            (L.createGeometry = function(r) {
                if (
                    !v.equalsEpsilon(r._rectangle.north, r._rectangle.south, v.EPSILON10) &&
                    !v.equalsEpsilon(r._rectangle.east, r._rectangle.west, v.EPSILON10)
                ) {
                    var n = r._rectangle,
                        a = r._ellipsoid,
                        i = r._rotation,
                        u = r._stRotation,
                        c = r._vertexFormat,
                        l = N.computeOptions(n, r._granularity, i, u, V, K, J),
                        f = te;
                    if (0 !== u || 0 !== i) {
                        var p = w.center(n, ne),
                            y = a.geodeticSurfaceNormalCartographic(p, Y);
                        S.fromAxisAngle(y, -u, re), R.fromQuaternion(re, f);
                    } else R.clone(R.IDENTITY, f);
                    var E = r._surfaceHeight,
                        _ = r._extrudedHeight,
                        T = !v.equalsEpsilon(E, _, 0, v.EPSILON2);
                    (l.lonScalar = 1 / r._rectangle.width),
                        (l.latScalar = 1 / r._rectangle.height),
                        (l.tangentRotationMatrix = f),
                        (l.size = l.width * l.height);
                    var g, O;
                    if (((n = r._rectangle), T)) {
                        g = U(r, l);
                        var I = t.fromRectangle3D(n, a, E, H),
                            x = t.fromRectangle3D(n, a, _, W);
                        O = t.union(I, x);
                    } else {
                        if (
                            ((g = C(r, l)),
                            (g.attributes.position.values = A.scaleToGeodeticHeight(
                                g.attributes.position.values,
                                E,
                                a,
                                !1
                            )),
                            s(r._offsetAttribute))
                        ) {
                            var M = g.attributes.position.values.length,
                                P = new Uint8Array(M / 3),
                                b = r._offsetAttribute === m.NONE ? 0 : 1;
                            e(P, b),
                                (g.attributes.applyOffset = new d({
                                    componentDatatype: o.UNSIGNED_BYTE,
                                    componentsPerAttribute: 1,
                                    values: P
                                }));
                        }
                        O = t.fromRectangle3D(n, a, E);
                    }
                    return (
                        c.position || delete g.attributes.position,
                        new h({
                            attributes: g.attributes,
                            indices: g.indices,
                            primitiveType: g.primitiveType,
                            boundingSphere: O,
                            offsetAttribute: r._offsetAttribute
                        })
                    );
                }
            }),
                (L.createShadowVolume = function(e, t, r) {
                    var n = e._granularity,
                        a = e._ellipsoid,
                        i = t(n, a),
                        o = r(n, a);
                    return new L({
                        rectangle: e._rectangle,
                        rotation: e._rotation,
                        ellipsoid: a,
                        stRotation: e._stRotation,
                        granularity: n,
                        extrudedHeight: o,
                        height: i,
                        vertexFormat: O.POSITION_ONLY,
                        shadowVolume: !0
                    });
                });
            var ae = new w(),
                ie = [new r(), new r(), new r()],
                oe = new T(),
                ue = new a();
            return (
                c(L.prototype, {
                    rectangle: {
                        get: function() {
                            return (
                                s(this._rotatedRectangle) ||
                                    (this._rotatedRectangle = D(
                                        this._rectangle,
                                        this._granularity,
                                        this._rotation,
                                        this._ellipsoid
                                    )),
                                this._rotatedRectangle
                            );
                        }
                    },
                    textureCoordinateRotationPoints: {
                        get: function() {
                            return (
                                s(this._textureCoordinateRotationPoints) ||
                                    (this._textureCoordinateRotationPoints = F(this)),
                                this._textureCoordinateRotationPoints
                            );
                        }
                    }
                }),
                L
            );
        }),
        define("Workers/createRectangleGeometry", [
            "../Core/defined",
            "../Core/Ellipsoid",
            "../Core/Rectangle",
            "../Core/RectangleGeometry"
        ], function(e, t, r, n) {
            "use strict";
            function a(a, i) {
                return (
                    e(i) && (a = n.unpack(a, i)),
                    (a._ellipsoid = t.clone(a._ellipsoid)),
                    (a._rectangle = r.clone(a._rectangle)),
                    n.createGeometry(a)
                );
            }
            return a;
        });
})();

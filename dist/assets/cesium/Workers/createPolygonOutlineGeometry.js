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
            var i = {};
            return (
                (i.typeOf = {}),
                (i.defined = function(n, i) {
                    if (!e(i)) throw new t(r(n));
                }),
                (i.typeOf.func = function(e, r) {
                    if ("function" != typeof r) throw new t(n(typeof r, "function", e));
                }),
                (i.typeOf.string = function(e, r) {
                    if ("string" != typeof r) throw new t(n(typeof r, "string", e));
                }),
                (i.typeOf.number = function(e, r) {
                    if ("number" != typeof r) throw new t(n(typeof r, "number", e));
                }),
                (i.typeOf.number.lessThan = function(e, r, n) {
                    if ((i.typeOf.number(e, r), r >= n))
                        throw new t(
                            "Expected " + e + " to be less than " + n + ", actual value was " + r
                        );
                }),
                (i.typeOf.number.lessThanOrEquals = function(e, r, n) {
                    if ((i.typeOf.number(e, r), r > n))
                        throw new t(
                            "Expected " +
                                e +
                                " to be less than or equal to " +
                                n +
                                ", actual value was " +
                                r
                        );
                }),
                (i.typeOf.number.greaterThan = function(e, r, n) {
                    if ((i.typeOf.number(e, r), r <= n))
                        throw new t(
                            "Expected " + e + " to be greater than " + n + ", actual value was " + r
                        );
                }),
                (i.typeOf.number.greaterThanOrEquals = function(e, r, n) {
                    if ((i.typeOf.number(e, r), r < n))
                        throw new t(
                            "Expected " +
                                e +
                                " to be greater than or equal to" +
                                n +
                                ", actual value was " +
                                r
                        );
                }),
                (i.typeOf.object = function(e, r) {
                    if ("object" != typeof r) throw new t(n(typeof r, "object", e));
                }),
                (i.typeOf.bool = function(e, r) {
                    if ("boolean" != typeof r) throw new t(n(typeof r, "boolean", e));
                }),
                (i.typeOf.number.equals = function(e, r, n, a) {
                    if ((i.typeOf.number(e, n), i.typeOf.number(r, a), n !== a))
                        throw new t(
                            e +
                                " must be equal to " +
                                r +
                                ", the actual values are " +
                                n +
                                " and " +
                                a
                        );
                }),
                i
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
        ], function(e, t, r, n, i) {
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
                (a.sign = r(Math.sign, function(e) {
                    return (e = +e), 0 === e || e !== e ? e : e > 0 ? 1 : -1;
                })),
                (a.signNotZero = function(e) {
                    return e < 0 ? -1 : 1;
                }),
                (a.toSNorm = function(e, t) {
                    return (t = r(t, 255)), Math.round((0.5 * a.clamp(e, -1, 1) + 0.5) * t);
                }),
                (a.fromSNorm = function(e, t) {
                    return (t = r(t, 255)), (a.clamp(e, 0, t) / t) * 2 - 1;
                }),
                (a.sinh = r(Math.sinh, function(e) {
                    return (Math.exp(e) - Math.exp(-e)) / 2;
                })),
                (a.cosh = r(Math.cosh, function(e) {
                    return (Math.exp(e) + Math.exp(-e)) / 2;
                })),
                (a.lerp = function(e, t, r) {
                    return (1 - r) * e + r * t;
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
                (a.toRadians = function(e) {
                    return e * a.RADIANS_PER_DEGREE;
                }),
                (a.toDegrees = function(e) {
                    return e * a.DEGREES_PER_RADIAN;
                }),
                (a.convertLongitudeRange = function(e) {
                    var t = a.TWO_PI,
                        r = e - Math.floor(e / t) * t;
                    return r < -Math.PI ? r + t : r >= Math.PI ? r - t : r;
                }),
                (a.clampToLatitudeRange = function(e) {
                    return a.clamp(e, -1 * a.PI_OVER_TWO, a.PI_OVER_TWO);
                }),
                (a.negativePiToPi = function(e) {
                    return a.zeroToTwoPi(e + a.PI) - a.PI;
                }),
                (a.zeroToTwoPi = function(e) {
                    var t = a.mod(e, a.TWO_PI);
                    return Math.abs(t) < a.EPSILON14 && Math.abs(e) > a.EPSILON14 ? a.TWO_PI : t;
                }),
                (a.mod = function(e, t) {
                    return ((e % t) + t) % t;
                }),
                (a.equalsEpsilon = function(e, t, n, i) {
                    i = r(i, n);
                    var a = Math.abs(e - t);
                    return a <= i || a <= n * Math.max(Math.abs(e), Math.abs(t));
                });
            var o = [1];
            (a.factorial = function(e) {
                var t = o.length;
                if (e >= t) for (var r = o[t - 1], n = t; n <= e; n++) o.push(r * n);
                return o[e];
            }),
                (a.incrementWrap = function(e, t, n) {
                    return (n = r(n, 0)), ++e, e > t && (e = n), e;
                }),
                (a.isPowerOfTwo = function(e) {
                    return 0 !== e && 0 == (e & (e - 1));
                }),
                (a.nextPowerOfTwo = function(e) {
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
                (a.clamp = function(e, t, r) {
                    return e < t ? t : e > r ? r : e;
                });
            var u = new e();
            return (
                (a.setRandomNumberSeed = function(t) {
                    u = new e(t);
                }),
                (a.nextRandomNumber = function() {
                    return u.random();
                }),
                (a.randomBetween = function(e, t) {
                    return a.nextRandomNumber() * (t - e) + e;
                }),
                (a.acosClamped = function(e) {
                    return Math.acos(a.clamp(e, -1, 1));
                }),
                (a.asinClamped = function(e) {
                    return Math.asin(a.clamp(e, -1, 1));
                }),
                (a.chordLength = function(e, t) {
                    return 2 * t * Math.sin(0.5 * e);
                }),
                (a.logBase = function(e, t) {
                    return Math.log(e) / Math.log(t);
                }),
                (a.cbrt = r(Math.cbrt, function(e) {
                    var t = Math.pow(Math.abs(e), 1 / 3);
                    return e < 0 ? -t : t;
                })),
                (a.log2 = r(Math.log2, function(e) {
                    return Math.log(e) * Math.LOG2E;
                })),
                (a.fog = function(e, t) {
                    var r = e * t;
                    return 1 - Math.exp(-r * r);
                }),
                (a.fastApproximateAtan = function(e) {
                    return e * (-0.1784 * Math.abs(e) - 0.0663 * e * e + 1.0301);
                }),
                (a.fastApproximateAtan2 = function(e, t) {
                    var r,
                        n,
                        i = Math.abs(e);
                    (r = Math.abs(t)), (n = Math.max(i, r)), (r = Math.min(i, r));
                    var o = r / n;
                    return (
                        (i = a.fastApproximateAtan(o)),
                        (i = Math.abs(t) > Math.abs(e) ? a.PI_OVER_TWO - i : i),
                        (i = e < 0 ? a.PI - i : i),
                        (i = t < 0 ? -i : i)
                    );
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
        ], function(e, t, r, n, i, a) {
            "use strict";
            function o(e, r, n) {
                (this.x = t(e, 0)), (this.y = t(r, 0)), (this.z = t(n, 0));
            }
            (o.fromSpherical = function(e, n) {
                r(n) || (n = new o());
                var i = e.clock,
                    a = e.cone,
                    u = t(e.magnitude, 1),
                    s = u * Math.sin(a);
                return (n.x = s * Math.cos(i)), (n.y = s * Math.sin(i)), (n.z = u * Math.cos(a)), n;
            }),
                (o.fromElements = function(e, t, n, i) {
                    return r(i) ? ((i.x = e), (i.y = t), (i.z = n), i) : new o(e, t, n);
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
                (o.unpack = function(e, n, i) {
                    return (
                        (n = t(n, 0)),
                        r(i) || (i = new o()),
                        (i.x = e[n++]),
                        (i.y = e[n++]),
                        (i.z = e[n]),
                        i
                    );
                }),
                (o.packArray = function(e, t) {
                    var n = e.length;
                    r(t) ? (t.length = 3 * n) : (t = new Array(3 * n));
                    for (var i = 0; i < n; ++i) o.pack(e[i], t, 3 * i);
                    return t;
                }),
                (o.unpackArray = function(e, t) {
                    var n = e.length;
                    r(t) ? (t.length = n / 3) : (t = new Array(n / 3));
                    for (var i = 0; i < n; i += 3) {
                        var a = i / 3;
                        t[a] = o.unpack(e, i, t[a]);
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
                (o.equalsEpsilon = function(e, t, n, i) {
                    return (
                        e === t ||
                        (r(e) &&
                            r(t) &&
                            a.equalsEpsilon(e.x, t.x, n, i) &&
                            a.equalsEpsilon(e.y, t.y, n, i) &&
                            a.equalsEpsilon(e.z, t.z, n, i))
                    );
                }),
                (o.cross = function(e, t, r) {
                    var n = e.x,
                        i = e.y,
                        a = e.z,
                        o = t.x,
                        u = t.y,
                        s = t.z,
                        c = i * s - a * u,
                        l = a * o - n * s,
                        f = n * u - i * o;
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
                (o.fromDegrees = function(e, t, r, n, i) {
                    return (e = a.toRadians(e)), (t = a.toRadians(t)), o.fromRadians(e, t, r, n, i);
                });
            var h = new o(),
                d = new o(),
                p = new o(40680631590769, 40680631590769, 40408299984661.445);
            return (
                (o.fromRadians = function(e, n, i, a, u) {
                    i = t(i, 0);
                    var s = r(a) ? a.radiiSquared : p,
                        c = Math.cos(n);
                    (h.x = c * Math.cos(e)),
                        (h.y = c * Math.sin(e)),
                        (h.z = Math.sin(n)),
                        (h = o.normalize(h, h)),
                        o.multiplyComponents(s, h, d);
                    var l = Math.sqrt(o.dot(h, d));
                    return (
                        (d = o.divideByScalar(d, l, d)),
                        (h = o.multiplyByScalar(h, i, h)),
                        r(u) || (u = new o()),
                        o.add(d, h, u)
                    );
                }),
                (o.fromDegreesArray = function(e, t, n) {
                    var i = e.length;
                    r(n) ? (n.length = i / 2) : (n = new Array(i / 2));
                    for (var a = 0; a < i; a += 2) {
                        var u = e[a],
                            s = e[a + 1],
                            c = a / 2;
                        n[c] = o.fromDegrees(u, s, 0, t, n[c]);
                    }
                    return n;
                }),
                (o.fromRadiansArray = function(e, t, n) {
                    var i = e.length;
                    r(n) ? (n.length = i / 2) : (n = new Array(i / 2));
                    for (var a = 0; a < i; a += 2) {
                        var u = e[a],
                            s = e[a + 1],
                            c = a / 2;
                        n[c] = o.fromRadians(u, s, 0, t, n[c]);
                    }
                    return n;
                }),
                (o.fromDegreesArrayHeights = function(e, t, n) {
                    var i = e.length;
                    r(n) ? (n.length = i / 3) : (n = new Array(i / 3));
                    for (var a = 0; a < i; a += 3) {
                        var u = e[a],
                            s = e[a + 1],
                            c = e[a + 2],
                            l = a / 3;
                        n[l] = o.fromDegrees(u, s, c, t, n[l]);
                    }
                    return n;
                }),
                (o.fromRadiansArrayHeights = function(e, t, n) {
                    var i = e.length;
                    r(n) ? (n.length = i / 3) : (n = new Array(i / 3));
                    for (var a = 0; a < i; a += 3) {
                        var u = e[a],
                            s = e[a + 1],
                            c = e[a + 2],
                            l = a / 3;
                        n[l] = o.fromRadians(u, s, c, t, n[l]);
                    }
                    return n;
                }),
                (o.ZERO = i(new o(0, 0, 0))),
                (o.UNIT_X = i(new o(1, 0, 0))),
                (o.UNIT_Y = i(new o(0, 1, 0))),
                (o.UNIT_Z = i(new o(0, 0, 1))),
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
            function i(r, i, u, s, c) {
                var l = r.x,
                    f = r.y,
                    h = r.z,
                    d = i.x,
                    p = i.y,
                    y = i.z,
                    m = l * l * d * d,
                    E = f * f * p * p,
                    _ = h * h * y * y,
                    v = m + E + _,
                    T = Math.sqrt(1 / v),
                    R = e.multiplyByScalar(r, T, a);
                if (v < s) return isFinite(T) ? e.clone(R, c) : void 0;
                var A = u.x,
                    g = u.y,
                    S = u.z,
                    N = o;
                (N.x = R.x * A * 2), (N.y = R.y * g * 2), (N.z = R.z * S * 2);
                var I,
                    O,
                    w,
                    x,
                    M,
                    C,
                    P,
                    b,
                    U,
                    D,
                    L,
                    F = ((1 - T) * e.magnitude(r)) / (0.5 * e.magnitude(N)),
                    B = 0;
                do {
                    (F -= B),
                        (w = 1 / (1 + F * A)),
                        (x = 1 / (1 + F * g)),
                        (M = 1 / (1 + F * S)),
                        (C = w * w),
                        (P = x * x),
                        (b = M * M),
                        (U = C * w),
                        (D = P * x),
                        (L = b * M),
                        (I = m * C + E * P + _ * b - 1),
                        (O = m * U * A + E * D * g + _ * L * S);
                    B = I / (-2 * O);
                } while (Math.abs(I) > n.EPSILON12);
                return t(c)
                    ? ((c.x = l * w), (c.y = f * x), (c.z = h * M), c)
                    : new e(l * w, f * x, h * M);
            }
            var a = new e(),
                o = new e();
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
        ], function(e, t, r, n, i, a, o) {
            "use strict";
            function u(e, t, n) {
                (this.longitude = r(e, 0)), (this.latitude = r(t, 0)), (this.height = r(n, 0));
            }
            (u.fromRadians = function(e, t, i, a) {
                return (
                    (i = r(i, 0)),
                    n(a) ? ((a.longitude = e), (a.latitude = t), (a.height = i), a) : new u(e, t, i)
                );
            }),
                (u.fromDegrees = function(e, t, r, n) {
                    return (e = a.toRadians(e)), (t = a.toRadians(t)), u.fromRadians(e, t, r, n);
                });
            var s = new e(),
                c = new e(),
                l = new e(),
                f = new e(1 / 6378137, 1 / 6378137, 1 / 6356752.314245179),
                h = new e(1 / 40680631590769, 1 / 40680631590769, 1 / 40408299984661.445),
                d = a.EPSILON1;
            return (
                (u.fromCartesian = function(t, r, i) {
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
                            A = a.sign(e.dot(v, t)) * e.magnitude(v);
                        return n(i)
                            ? ((i.longitude = T), (i.latitude = R), (i.height = A), i)
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
                (u.ZERO = i(new u(0, 0, 0))),
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
        ], function(e, t, r, n, i, a, o, u, s, c) {
            "use strict";
            function l(t, r, i, a) {
                (r = n(r, 0)),
                    (i = n(i, 0)),
                    (a = n(a, 0)),
                    (t._radii = new e(r, i, a)),
                    (t._radiiSquared = new e(r * r, i * i, a * a)),
                    (t._radiiToTheFourth = new e(r * r * r * r, i * i * i * i, a * a * a * a)),
                    (t._oneOverRadii = new e(
                        0 === r ? 0 : 1 / r,
                        0 === i ? 0 : 1 / i,
                        0 === a ? 0 : 1 / a
                    )),
                    (t._oneOverRadiiSquared = new e(
                        0 === r ? 0 : 1 / (r * r),
                        0 === i ? 0 : 1 / (i * i),
                        0 === a ? 0 : 1 / (a * a)
                    )),
                    (t._minimumRadius = Math.min(r, i, a)),
                    (t._maximumRadius = Math.max(r, i, a)),
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
            a(f.prototype, {
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
                    if (i(t)) {
                        var n = t._radii;
                        return i(r)
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
                    return i(t) || (t = new f()), i(e) ? (l(t, e.x, e.y, e.z), t) : t;
                }),
                (f.WGS84 = u(new f(6378137, 6378137, 6356752.314245179))),
                (f.UNIT_SPHERE = u(new f(1, 1, 1))),
                (f.MOON = u(new f(s.LUNAR_RADIUS, s.LUNAR_RADIUS, s.LUNAR_RADIUS))),
                (f.prototype.clone = function(e) {
                    return f.clone(this, e);
                }),
                (f.packedLength = e.packedLength),
                (f.pack = function(t, r, i) {
                    return (i = n(i, 0)), e.pack(t._radii, r, i), r;
                }),
                (f.unpack = function(t, r, i) {
                    r = n(r, 0);
                    var a = e.unpack(t, r);
                    return f.fromCartesian3(a, i);
                }),
                (f.prototype.geocentricSurfaceNormal = e.normalize),
                (f.prototype.geodeticSurfaceNormalCartographic = function(t, r) {
                    var n = t.longitude,
                        a = t.latitude,
                        o = Math.cos(a),
                        u = o * Math.cos(n),
                        s = o * Math.sin(n),
                        c = Math.sin(a);
                    return (
                        i(r) || (r = new e()), (r.x = u), (r.y = s), (r.z = c), e.normalize(r, r)
                    );
                }),
                (f.prototype.geodeticSurfaceNormal = function(t, r) {
                    return (
                        i(r) || (r = new e()),
                        (r = e.multiplyComponents(t, this._oneOverRadiiSquared, r)),
                        e.normalize(r, r)
                    );
                });
            var h = new e(),
                d = new e();
            (f.prototype.cartographicToCartesian = function(t, r) {
                var n = h,
                    a = d;
                this.geodeticSurfaceNormalCartographic(t, n),
                    e.multiplyComponents(this._radiiSquared, n, a);
                var o = Math.sqrt(e.dot(n, a));
                return (
                    e.divideByScalar(a, o, a),
                    e.multiplyByScalar(n, t.height, n),
                    i(r) || (r = new e()),
                    e.add(a, n, r)
                );
            }),
                (f.prototype.cartographicArrayToCartesianArray = function(e, t) {
                    var r = e.length;
                    i(t) ? (t.length = r) : (t = new Array(r));
                    for (var n = 0; n < r; n++) t[n] = this.cartographicToCartesian(e[n], t[n]);
                    return t;
                });
            var p = new e(),
                y = new e(),
                m = new e();
            return (
                (f.prototype.cartesianToCartographic = function(r, n) {
                    var a = this.scaleToGeodeticSurface(r, y);
                    if (i(a)) {
                        var o = this.geodeticSurfaceNormal(a, p),
                            u = e.subtract(r, a, m),
                            c = Math.atan2(o.y, o.x),
                            l = Math.asin(o.z),
                            f = s.sign(e.dot(u, r)) * e.magnitude(u);
                        return i(n)
                            ? ((n.longitude = c), (n.latitude = l), (n.height = f), n)
                            : new t(c, l, f);
                    }
                }),
                (f.prototype.cartesianArrayToCartographicArray = function(e, t) {
                    var r = e.length;
                    i(t) ? (t.length = r) : (t = new Array(r));
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
                    i(r) || (r = new e());
                    var n = t.x,
                        a = t.y,
                        o = t.z,
                        u = this._oneOverRadiiSquared,
                        s = 1 / Math.sqrt(n * n * u.x + a * a * u.y + o * o * u.z);
                    return e.multiplyByScalar(t, s, r);
                }),
                (f.prototype.transformPositionToScaledSpace = function(t, r) {
                    return i(r) || (r = new e()), e.multiplyComponents(t, this._oneOverRadii, r);
                }),
                (f.prototype.transformPositionFromScaledSpace = function(t, r) {
                    return i(r) || (r = new e()), e.multiplyComponents(t, this._radii, r);
                }),
                (f.prototype.equals = function(t) {
                    return this === t || (i(t) && e.equals(this._radii, t._radii));
                }),
                (f.prototype.toString = function() {
                    return this._radii.toString();
                }),
                (f.prototype.getSurfaceNormalIntersectionWithZAxis = function(t, r, a) {
                    r = n(r, 0);
                    var o = this._squaredXOverSquaredZ;
                    if (
                        (i(a) || (a = new e()),
                        (a.x = 0),
                        (a.y = 0),
                        (a.z = t.z * (1 - o)),
                        !(Math.abs(a.z) >= this._radii.z - r))
                    )
                        return a;
                }),
                f
            );
        }),
        define("Core/arrayFill", ["./Check", "./defaultValue", "./defined"], function(e, t, r) {
            "use strict";
            function n(e, r, n, i) {
                if ("function" == typeof e.fill) return e.fill(r, n, i);
                for (
                    var a = e.length >>> 0,
                        o = t(n, 0),
                        u = o < 0 ? Math.max(a + o, 0) : Math.min(o, a),
                        s = t(i, a),
                        c = s < 0 ? Math.max(a + s, 0) : Math.min(s, a);
                    u < c;

                )
                    (e[u] = r), u++;
                return e;
            }
            return n;
        }),
        define("Core/arrayRemoveDuplicates", [
            "./Check",
            "./defaultValue",
            "./defined",
            "./Math"
        ], function(e, t, r, n) {
            "use strict";
            function i(e, n, i) {
                if (r(e)) {
                    i = t(i, !1);
                    var o = e.length;
                    if (o < 2) return e;
                    var u, s, c;
                    for (u = 1; u < o && ((s = e[u - 1]), (c = e[u]), !n(s, c, a)); ++u);
                    if (u === o) return i && n(e[0], e[e.length - 1], a) ? e.slice(1) : e;
                    for (var l = e.slice(0, u); u < o; ++u)
                        (c = e[u]), n(s, c, a) || (l.push(c), (s = c));
                    return i && l.length > 1 && n(l[0], l[l.length - 1], a) && l.shift(), l;
                }
            }
            var a = n.EPSILON10;
            return i;
        }),
        define("Core/GeographicProjection", [
            "./Cartesian3",
            "./Cartographic",
            "./defaultValue",
            "./defined",
            "./defineProperties",
            "./DeveloperError",
            "./Ellipsoid"
        ], function(e, t, r, n, i, a, o) {
            "use strict";
            function u(e) {
                (this._ellipsoid = r(e, o.WGS84)),
                    (this._semimajorAxis = this._ellipsoid.maximumRadius),
                    (this._oneOverSemimajorAxis = 1 / this._semimajorAxis);
            }
            return (
                i(u.prototype, {
                    ellipsoid: {
                        get: function() {
                            return this._ellipsoid;
                        }
                    }
                }),
                (u.prototype.project = function(t, r) {
                    var i = this._semimajorAxis,
                        a = t.longitude * i,
                        o = t.latitude * i,
                        u = t.height;
                    return n(r) ? ((r.x = a), (r.y = o), (r.z = u), r) : new e(a, o, u);
                }),
                (u.prototype.unproject = function(e, r) {
                    var i = this._oneOverSemimajorAxis,
                        a = e.x * i,
                        o = e.y * i,
                        u = e.z;
                    return n(r)
                        ? ((r.longitude = a), (r.latitude = o), (r.height = u), r)
                        : new t(a, o, u);
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
        ], function(e, t, r, n, i, a, o, u) {
            "use strict";
            function s(e, t, n, i, a, o, u, s, c) {
                (this[0] = r(e, 0)),
                    (this[1] = r(i, 0)),
                    (this[2] = r(u, 0)),
                    (this[3] = r(t, 0)),
                    (this[4] = r(a, 0)),
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
                for (var r = u.EPSILON15, n = 0, i = 1, a = 0; a < 3; ++a) {
                    var o = Math.abs(e[s.getElementIndex(y[a], p[a])]);
                    o > n && ((i = a), (n = o));
                }
                var c = 1,
                    l = 0,
                    f = p[i],
                    h = y[i];
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
                (s.unpack = function(e, t, i) {
                    return (
                        (t = r(t, 0)),
                        n(i) || (i = new s()),
                        (i[0] = e[t++]),
                        (i[1] = e[t++]),
                        (i[2] = e[t++]),
                        (i[3] = e[t++]),
                        (i[4] = e[t++]),
                        (i[5] = e[t++]),
                        (i[6] = e[t++]),
                        (i[7] = e[t++]),
                        (i[8] = e[t++]),
                        i
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
                (s.fromArray = function(e, t, i) {
                    return (
                        (t = r(t, 0)),
                        n(i) || (i = new s()),
                        (i[0] = e[t]),
                        (i[1] = e[t + 1]),
                        (i[2] = e[t + 2]),
                        (i[3] = e[t + 3]),
                        (i[4] = e[t + 4]),
                        (i[5] = e[t + 5]),
                        (i[6] = e[t + 6]),
                        (i[7] = e[t + 7]),
                        (i[8] = e[t + 8]),
                        i
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
                        i = e.x * e.y,
                        a = e.x * e.z,
                        o = e.x * e.w,
                        u = e.y * e.y,
                        c = e.y * e.z,
                        l = e.y * e.w,
                        f = e.z * e.z,
                        h = e.z * e.w,
                        d = e.w * e.w,
                        p = r - u - f + d,
                        y = 2 * (i - h),
                        m = 2 * (a + l),
                        E = 2 * (i + h),
                        _ = -r + u - f + d,
                        v = 2 * (c - o),
                        T = 2 * (a - l),
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
                        i = Math.cos(-e.heading),
                        a = Math.cos(e.roll),
                        o = Math.sin(-e.pitch),
                        u = Math.sin(-e.heading),
                        c = Math.sin(e.roll),
                        l = r * i,
                        f = -a * u + c * o * i,
                        h = c * u + a * o * i,
                        d = r * u,
                        p = a * i + c * o * u,
                        y = -c * i + a * o * u,
                        m = -o,
                        E = c * r,
                        _ = a * r;
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
                        i = Math.sin(e);
                    return n(t)
                        ? ((t[0] = 1),
                          (t[1] = 0),
                          (t[2] = 0),
                          (t[3] = 0),
                          (t[4] = r),
                          (t[5] = i),
                          (t[6] = 0),
                          (t[7] = -i),
                          (t[8] = r),
                          t)
                        : new s(1, 0, 0, 0, r, -i, 0, i, r);
                }),
                (s.fromRotationY = function(e, t) {
                    var r = Math.cos(e),
                        i = Math.sin(e);
                    return n(t)
                        ? ((t[0] = r),
                          (t[1] = 0),
                          (t[2] = -i),
                          (t[3] = 0),
                          (t[4] = 1),
                          (t[5] = 0),
                          (t[6] = i),
                          (t[7] = 0),
                          (t[8] = r),
                          t)
                        : new s(r, 0, i, 0, 1, 0, -i, 0, r);
                }),
                (s.fromRotationZ = function(e, t) {
                    var r = Math.cos(e),
                        i = Math.sin(e);
                    return n(t)
                        ? ((t[0] = r),
                          (t[1] = i),
                          (t[2] = 0),
                          (t[3] = -i),
                          (t[4] = r),
                          (t[5] = 0),
                          (t[6] = 0),
                          (t[7] = 0),
                          (t[8] = 1),
                          t)
                        : new s(r, -i, 0, i, r, 0, 0, 0, 1);
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
                        i = e[n],
                        a = e[n + 1],
                        o = e[n + 2];
                    return (r.x = i), (r.y = a), (r.z = o), r;
                }),
                (s.setColumn = function(e, t, r, n) {
                    n = s.clone(e, n);
                    var i = 3 * t;
                    return (n[i] = r.x), (n[i + 1] = r.y), (n[i + 2] = r.z), n;
                }),
                (s.getRow = function(e, t, r) {
                    var n = e[t],
                        i = e[t + 3],
                        a = e[t + 6];
                    return (r.x = n), (r.y = i), (r.z = a), r;
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
                        i = e[1] * t[0] + e[4] * t[1] + e[7] * t[2],
                        a = e[2] * t[0] + e[5] * t[1] + e[8] * t[2],
                        o = e[0] * t[3] + e[3] * t[4] + e[6] * t[5],
                        u = e[1] * t[3] + e[4] * t[4] + e[7] * t[5],
                        s = e[2] * t[3] + e[5] * t[4] + e[8] * t[5],
                        c = e[0] * t[6] + e[3] * t[7] + e[6] * t[8],
                        l = e[1] * t[6] + e[4] * t[7] + e[7] * t[8],
                        f = e[2] * t[6] + e[5] * t[7] + e[8] * t[8];
                    return (
                        (r[0] = n),
                        (r[1] = i),
                        (r[2] = a),
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
                        i = t.y,
                        a = t.z,
                        o = e[0] * n + e[3] * i + e[6] * a,
                        u = e[1] * n + e[4] * i + e[7] * a,
                        s = e[2] * n + e[5] * i + e[8] * a;
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
                        i = e[6],
                        a = e[1],
                        o = e[4],
                        u = e[7],
                        s = e[2],
                        c = e[5],
                        l = e[8];
                    return (
                        (t[0] = r),
                        (t[1] = n),
                        (t[2] = i),
                        (t[3] = a),
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
                        i = 0,
                        a = 0;
                    n(t) || (t = {});
                    for (
                        var o = (t.unitary = s.clone(s.IDENTITY, t.unitary)),
                            h = (t.diagonal = s.clone(e, t.diagonal)),
                            d = r * c(h);
                        a < 10 && l(h) > d;

                    )
                        f(h, m),
                            s.transpose(m, E),
                            s.multiply(h, m, h),
                            s.multiply(E, h, h),
                            s.multiply(o, m, o),
                            ++i > 2 && (++a, (i = 0));
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
                        i = e[1],
                        a = e[4],
                        o = e[7],
                        u = e[2],
                        s = e[5],
                        c = e[8];
                    return t * (a * c - s * o) + i * (s * n - r * c) + u * (r * o - a * n);
                }),
                (s.inverse = function(e, t) {
                    var r = e[0],
                        n = e[1],
                        i = e[2],
                        a = e[3],
                        o = e[4],
                        u = e[5],
                        c = e[6],
                        l = e[7],
                        f = e[8],
                        h = s.determinant(e);
                    (t[0] = o * f - l * u),
                        (t[1] = l * i - n * f),
                        (t[2] = n * u - o * i),
                        (t[3] = c * u - a * f),
                        (t[4] = r * f - c * i),
                        (t[5] = a * i - r * u),
                        (t[6] = a * l - c * o),
                        (t[7] = c * n - r * l),
                        (t[8] = r * o - a * n);
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
                i(s.prototype, {
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
        ], function(e, t, r, n, i, a) {
            "use strict";
            function o(e, r, n, i) {
                (this.x = t(e, 0)), (this.y = t(r, 0)), (this.z = t(n, 0)), (this.w = t(i, 0));
            }
            (o.fromElements = function(e, t, n, i, a) {
                return r(a) ? ((a.x = e), (a.y = t), (a.z = n), (a.w = i), a) : new o(e, t, n, i);
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
                (o.unpack = function(e, n, i) {
                    return (
                        (n = t(n, 0)),
                        r(i) || (i = new o()),
                        (i.x = e[n++]),
                        (i.y = e[n++]),
                        (i.z = e[n++]),
                        (i.w = e[n]),
                        i
                    );
                }),
                (o.packArray = function(e, t) {
                    var n = e.length;
                    r(t) ? (t.length = 4 * n) : (t = new Array(4 * n));
                    for (var i = 0; i < n; ++i) o.pack(e[i], t, 4 * i);
                    return t;
                }),
                (o.unpackArray = function(e, t) {
                    var n = e.length;
                    r(t) ? (t.length = n / 4) : (t = new Array(n / 4));
                    for (var i = 0; i < n; i += 4) {
                        var a = i / 4;
                        t[a] = o.unpack(e, i, t[a]);
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
                (o.equalsEpsilon = function(e, t, n, i) {
                    return (
                        e === t ||
                        (r(e) &&
                            r(t) &&
                            a.equalsEpsilon(e.x, t.x, n, i) &&
                            a.equalsEpsilon(e.y, t.y, n, i) &&
                            a.equalsEpsilon(e.z, t.z, n, i) &&
                            a.equalsEpsilon(e.w, t.w, n, i))
                    );
                }),
                (o.ZERO = i(new o(0, 0, 0, 0))),
                (o.UNIT_X = i(new o(1, 0, 0, 0))),
                (o.UNIT_Y = i(new o(0, 1, 0, 0))),
                (o.UNIT_Z = i(new o(0, 0, 1, 0))),
                (o.UNIT_W = i(new o(0, 0, 0, 1))),
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
                        i = e < 0 ? 1 : 0;
                    isFinite(e)
                        ? ((e = Math.abs(e)),
                          (n = Math.floor(a.logBase(e, 10)) + 1),
                          (e /= Math.pow(10, n)))
                        : ((e = 0.1), (n = 38));
                    var u = 256 * e;
                    return (
                        (t.x = Math.floor(u)),
                        (u = 256 * (u - t.x)),
                        (t.y = Math.floor(u)),
                        (u = 256 * (u - t.y)),
                        (t.z = Math.floor(u)),
                        (t.w = 2 * (n + 38) + i),
                        t
                    );
                }),
                (o.unpackFloat = function(e) {
                    var t = e.w / 2,
                        r = Math.floor(t),
                        n = 2 * (t - r);
                    if (((r -= 38), (n = 2 * n - 1), (n = -n), r >= 38))
                        return n < 0 ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
                    var i = n * e.x * (1 / 256);
                    return (
                        (i += n * e.y * (1 / 65536)),
                        (i += n * e.z * (1 / 16777216)) * Math.pow(10, r)
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
        ], function(e, t, r, n, i, a, o, u, s, c) {
            "use strict";
            function l(e, t, r, i, a, o, u, s, c, l, f, h, d, p, y, m) {
                (this[0] = n(e, 0)),
                    (this[1] = n(a, 0)),
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
                    (this[12] = n(i, 0)),
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
                        i(r) || (r = new l()),
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
                    if (i(e))
                        return i(t)
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
                    return i(t)
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
                (l.fromRotationTranslation = function(t, r, a) {
                    return (
                        (r = n(r, e.ZERO)),
                        i(a)
                            ? ((a[0] = t[0]),
                              (a[1] = t[1]),
                              (a[2] = t[2]),
                              (a[3] = 0),
                              (a[4] = t[3]),
                              (a[5] = t[4]),
                              (a[6] = t[5]),
                              (a[7] = 0),
                              (a[8] = t[6]),
                              (a[9] = t[7]),
                              (a[10] = t[8]),
                              (a[11] = 0),
                              (a[12] = r.x),
                              (a[13] = r.y),
                              (a[14] = r.z),
                              (a[15] = 1),
                              a)
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
                    i(n) || (n = new l());
                    var a = r.x,
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
                        N = 2 * (f - y),
                        I = 2 * (p + h),
                        O = -s - d + m + _;
                    return (
                        (n[0] = v * a),
                        (n[1] = A * a),
                        (n[2] = N * a),
                        (n[3] = 0),
                        (n[4] = T * o),
                        (n[5] = g * o),
                        (n[6] = I * o),
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
                    return i(t)
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
                    return i(t)
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
                    a = t.direction,
                    o = t.up;
                e.normalize(a, f),
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
                    N = p * T + y * R + m * A;
                return i(r)
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
                      (r[14] = N),
                      (r[15] = 1),
                      r)
                    : new l(u, s, c, g, E, _, v, S, -p, -y, -m, N, 0, 0, 0, 1);
            }),
                (l.computePerspectiveFieldOfView = function(e, t, r, n, i) {
                    var a = Math.tan(0.5 * e),
                        o = 1 / a,
                        u = o / t,
                        s = (n + r) / (r - n),
                        c = (2 * n * r) / (r - n);
                    return (
                        (i[0] = u),
                        (i[1] = 0),
                        (i[2] = 0),
                        (i[3] = 0),
                        (i[4] = 0),
                        (i[5] = o),
                        (i[6] = 0),
                        (i[7] = 0),
                        (i[8] = 0),
                        (i[9] = 0),
                        (i[10] = s),
                        (i[11] = -1),
                        (i[12] = 0),
                        (i[13] = 0),
                        (i[14] = c),
                        (i[15] = 0),
                        i
                    );
                }),
                (l.computeOrthographicOffCenter = function(e, t, r, n, i, a, o) {
                    var u = 1 / (t - e),
                        s = 1 / (n - r),
                        c = 1 / (a - i),
                        l = -(t + e) * u,
                        f = -(n + r) * s,
                        h = -(a + i) * c;
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
                (l.computePerspectiveOffCenter = function(e, t, r, n, i, a, o) {
                    var u = (2 * i) / (t - e),
                        s = (2 * i) / (n - r),
                        c = (t + e) / (t - e),
                        l = (n + r) / (n - r),
                        f = -(a + i) / (a - i),
                        h = (-2 * a * i) / (a - i);
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
                (l.computeInfinitePerspectiveOffCenter = function(e, t, r, n, i, a) {
                    var o = (2 * i) / (t - e),
                        u = (2 * i) / (n - r),
                        s = (t + e) / (t - e),
                        c = (n + r) / (n - r),
                        l = -2 * i;
                    return (
                        (a[0] = o),
                        (a[1] = 0),
                        (a[2] = 0),
                        (a[3] = 0),
                        (a[4] = 0),
                        (a[5] = u),
                        (a[6] = 0),
                        (a[7] = 0),
                        (a[8] = s),
                        (a[9] = c),
                        (a[10] = -1),
                        (a[11] = -1),
                        (a[12] = 0),
                        (a[13] = 0),
                        (a[14] = l),
                        (a[15] = 0),
                        a
                    );
                }),
                (l.computeViewportTransformation = function(e, t, r, i) {
                    e = n(e, n.EMPTY_OBJECT);
                    var a = n(e.x, 0),
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
                        y = a + c,
                        m = o + l,
                        E = t + f;
                    return (
                        (i[0] = h),
                        (i[1] = 0),
                        (i[2] = 0),
                        (i[3] = 0),
                        (i[4] = 0),
                        (i[5] = d),
                        (i[6] = 0),
                        (i[7] = 0),
                        (i[8] = 0),
                        (i[9] = 0),
                        (i[10] = p),
                        (i[11] = 0),
                        (i[12] = y),
                        (i[13] = m),
                        (i[14] = E),
                        (i[15] = 1),
                        i
                    );
                }),
                (l.computeView = function(t, r, n, i, a) {
                    return (
                        (a[0] = i.x),
                        (a[1] = n.x),
                        (a[2] = -r.x),
                        (a[3] = 0),
                        (a[4] = i.y),
                        (a[5] = n.y),
                        (a[6] = -r.y),
                        (a[7] = 0),
                        (a[8] = i.z),
                        (a[9] = n.z),
                        (a[10] = -r.z),
                        (a[11] = 0),
                        (a[12] = -e.dot(i, t)),
                        (a[13] = -e.dot(n, t)),
                        (a[14] = e.dot(r, t)),
                        (a[15] = 1),
                        a
                    );
                }),
                (l.toArray = function(e, t) {
                    return i(t)
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
                        i = e[n],
                        a = e[n + 1],
                        o = e[n + 2],
                        u = e[n + 3];
                    return (r.x = i), (r.y = a), (r.z = o), (r.w = u), r;
                }),
                (l.setColumn = function(e, t, r, n) {
                    n = l.clone(e, n);
                    var i = 4 * t;
                    return (n[i] = r.x), (n[i + 1] = r.y), (n[i + 2] = r.z), (n[i + 3] = r.w), n;
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
                var i = l.getScale(t, p),
                    a = e.divideComponents(r, i, p);
                return l.multiplyByScale(t, a, n);
            }),
                (l.getRow = function(e, t, r) {
                    var n = e[t],
                        i = e[t + 4],
                        a = e[t + 8],
                        o = e[t + 12];
                    return (r.x = n), (r.y = i), (r.z = a), (r.w = o), r;
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
                        i = e[1],
                        a = e[2],
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
                        N = t[6],
                        I = t[7],
                        O = t[8],
                        w = t[9],
                        x = t[10],
                        M = t[11],
                        C = t[12],
                        P = t[13],
                        b = t[14],
                        U = t[15],
                        D = n * v + u * T + f * R + y * A,
                        L = i * v + s * T + h * R + m * A,
                        F = a * v + c * T + d * R + E * A,
                        B = o * v + l * T + p * R + _ * A,
                        z = n * g + u * S + f * N + y * I,
                        q = i * g + s * S + h * N + m * I,
                        G = a * g + c * S + d * N + E * I,
                        V = o * g + l * S + p * N + _ * I,
                        W = n * O + u * w + f * x + y * M,
                        H = i * O + s * w + h * x + m * M,
                        X = a * O + c * w + d * x + E * M,
                        k = o * O + l * w + p * x + _ * M,
                        Y = n * C + u * P + f * b + y * U,
                        j = i * C + s * P + h * b + m * U,
                        Z = a * C + c * P + d * b + E * U,
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
                        (r[8] = W),
                        (r[9] = H),
                        (r[10] = X),
                        (r[11] = k),
                        (r[12] = Y),
                        (r[13] = j),
                        (r[14] = Z),
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
                        i = e[1],
                        a = e[2],
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
                        N = t[13],
                        I = t[14],
                        O = n * y + o * m + c * E,
                        w = i * y + u * m + l * E,
                        x = a * y + s * m + f * E,
                        M = n * _ + o * v + c * T,
                        C = i * _ + u * v + l * T,
                        P = a * _ + s * v + f * T,
                        b = n * R + o * A + c * g,
                        U = i * R + u * A + l * g,
                        D = a * R + s * A + f * g,
                        L = n * S + o * N + c * I + h,
                        F = i * S + u * N + l * I + d,
                        B = a * S + s * N + f * I + p;
                    return (
                        (r[0] = O),
                        (r[1] = w),
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
                        i = e[1],
                        a = e[2],
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
                        A = i * h + u * d + l * p,
                        g = a * h + s * d + f * p,
                        S = n * y + o * m + c * E,
                        N = i * y + u * m + l * E,
                        I = a * y + s * m + f * E,
                        O = n * _ + o * v + c * T,
                        w = i * _ + u * v + l * T,
                        x = a * _ + s * v + f * T;
                    return (
                        (r[0] = R),
                        (r[1] = A),
                        (r[2] = g),
                        (r[3] = 0),
                        (r[4] = S),
                        (r[5] = N),
                        (r[6] = I),
                        (r[7] = 0),
                        (r[8] = O),
                        (r[9] = w),
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
                        i = t.y,
                        a = t.z,
                        o = n * e[0] + i * e[4] + a * e[8] + e[12],
                        u = n * e[1] + i * e[5] + a * e[9] + e[13],
                        s = n * e[2] + i * e[6] + a * e[10] + e[14];
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
                        i = t.y,
                        a = t.z;
                    return 1 === n && 1 === i && 1 === a
                        ? l.clone(e, r)
                        : ((r[0] = n * e[0]),
                          (r[1] = n * e[1]),
                          (r[2] = n * e[2]),
                          (r[3] = 0),
                          (r[4] = i * e[4]),
                          (r[5] = i * e[5]),
                          (r[6] = i * e[6]),
                          (r[7] = 0),
                          (r[8] = a * e[8]),
                          (r[9] = a * e[9]),
                          (r[10] = a * e[10]),
                          (r[11] = 0),
                          (r[12] = e[12]),
                          (r[13] = e[13]),
                          (r[14] = e[14]),
                          (r[15] = 1),
                          r);
                }),
                (l.multiplyByVector = function(e, t, r) {
                    var n = t.x,
                        i = t.y,
                        a = t.z,
                        o = t.w,
                        u = e[0] * n + e[4] * i + e[8] * a + e[12] * o,
                        s = e[1] * n + e[5] * i + e[9] * a + e[13] * o,
                        c = e[2] * n + e[6] * i + e[10] * a + e[14] * o,
                        l = e[3] * n + e[7] * i + e[11] * a + e[15] * o;
                    return (r.x = u), (r.y = s), (r.z = c), (r.w = l), r;
                }),
                (l.multiplyByPointAsVector = function(e, t, r) {
                    var n = t.x,
                        i = t.y,
                        a = t.z,
                        o = e[0] * n + e[4] * i + e[8] * a,
                        u = e[1] * n + e[5] * i + e[9] * a,
                        s = e[2] * n + e[6] * i + e[10] * a;
                    return (r.x = o), (r.y = u), (r.z = s), r;
                }),
                (l.multiplyByPoint = function(e, t, r) {
                    var n = t.x,
                        i = t.y,
                        a = t.z,
                        o = e[0] * n + e[4] * i + e[8] * a + e[12],
                        u = e[1] * n + e[5] * i + e[9] * a + e[13],
                        s = e[2] * n + e[6] * i + e[10] * a + e[14];
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
                        i = e[3],
                        a = e[6],
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
                        (t[9] = a),
                        (t[10] = e[10]),
                        (t[11] = e[14]),
                        (t[12] = i),
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
                        (i(e) &&
                            i(t) &&
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
                        (i(e) &&
                            i(t) &&
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
                        i = e[4],
                        a = e[8],
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
                        N = e[11],
                        I = e[15],
                        O = E * I,
                        w = A * N,
                        x = m * I,
                        M = A * S,
                        C = m * N,
                        P = E * S,
                        b = y * I,
                        U = A * g,
                        D = y * N,
                        L = E * g,
                        F = y * S,
                        B = m * g,
                        z = O * h + M * d + C * p - (w * h + x * d + P * p),
                        q = w * f + b * d + L * p - (O * f + U * d + D * p),
                        G = x * f + U * h + F * p - (M * f + b * h + B * p),
                        V = P * f + D * h + B * d - (C * f + L * h + F * d),
                        W = w * i + x * a + P * o - (O * i + M * a + C * o),
                        H = O * n + U * a + D * o - (w * n + b * a + L * o),
                        X = M * n + b * i + B * o - (x * n + U * i + F * o),
                        k = C * n + L * i + F * a - (P * n + D * i + B * a);
                    (O = a * p),
                        (w = o * d),
                        (x = i * p),
                        (M = o * h),
                        (C = i * d),
                        (P = a * h),
                        (b = n * p),
                        (U = o * f),
                        (D = n * d),
                        (L = a * f),
                        (F = n * h),
                        (B = i * f);
                    var Y = O * S + M * N + C * I - (w * S + x * N + P * I),
                        j = w * g + b * N + L * I - (O * g + U * N + D * I),
                        Z = x * g + U * S + F * I - (M * g + b * S + B * I),
                        K = P * g + D * S + B * N - (C * g + L * S + F * N),
                        Q = x * E + P * A + w * m - (C * A + O * m + M * E),
                        J = D * A + O * y + U * E - (b * E + L * A + w * y),
                        $ = b * m + B * A + M * y - (F * A + x * y + U * m),
                        ee = F * E + C * y + L * m - (D * m + B * E + P * y),
                        te = n * z + i * q + a * G + o * V;
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
                        (r[4] = W * te),
                        (r[5] = H * te),
                        (r[6] = X * te),
                        (r[7] = k * te),
                        (r[8] = Y * te),
                        (r[9] = j * te),
                        (r[10] = Z * te),
                        (r[11] = K * te),
                        (r[12] = Q * te),
                        (r[13] = J * te),
                        (r[14] = $ * te),
                        (r[15] = ee * te),
                        r
                    );
                }),
                (l.inverseTransformation = function(e, t) {
                    var r = e[0],
                        n = e[1],
                        i = e[2],
                        a = e[4],
                        o = e[5],
                        u = e[6],
                        s = e[8],
                        c = e[9],
                        l = e[10],
                        f = e[12],
                        h = e[13],
                        d = e[14],
                        p = -r * f - n * h - i * d,
                        y = -a * f - o * h - u * d,
                        m = -s * f - c * h - l * d;
                    return (
                        (t[0] = r),
                        (t[1] = a),
                        (t[2] = s),
                        (t[3] = 0),
                        (t[4] = n),
                        (t[5] = o),
                        (t[6] = c),
                        (t[7] = 0),
                        (t[8] = i),
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
                a(l.prototype, {
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
        define("Core/Rectangle", [
            "./Cartographic",
            "./Check",
            "./defaultValue",
            "./defined",
            "./defineProperties",
            "./Ellipsoid",
            "./freezeObject",
            "./Math"
        ], function(e, t, r, n, i, a, o, u) {
            "use strict";
            function s(e, t, n, i) {
                (this.west = r(e, 0)),
                    (this.south = r(t, 0)),
                    (this.east = r(n, 0)),
                    (this.north = r(i, 0));
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
                (s.unpack = function(e, t, i) {
                    return (
                        (t = r(t, 0)),
                        n(i) || (i = new s()),
                        (i.west = e[t++]),
                        (i.south = e[t++]),
                        (i.east = e[t++]),
                        (i.north = e[t]),
                        i
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
                (s.fromDegrees = function(e, t, i, a, o) {
                    return (
                        (e = u.toRadians(r(e, 0))),
                        (t = u.toRadians(r(t, 0))),
                        (i = u.toRadians(r(i, 0))),
                        (a = u.toRadians(r(a, 0))),
                        n(o)
                            ? ((o.west = e), (o.south = t), (o.east = i), (o.north = a), o)
                            : new s(e, t, i, a)
                    );
                }),
                (s.fromRadians = function(e, t, i, a, o) {
                    return n(o)
                        ? ((o.west = r(e, 0)),
                          (o.south = r(t, 0)),
                          (o.east = r(i, 0)),
                          (o.north = r(a, 0)),
                          o)
                        : new s(e, t, i, a);
                }),
                (s.fromCartographicArray = function(e, t) {
                    for (
                        var r = Number.MAX_VALUE,
                            i = -Number.MAX_VALUE,
                            a = Number.MAX_VALUE,
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
                            (i = Math.max(i, d.longitude)),
                            (c = Math.min(c, d.latitude)),
                            (l = Math.max(l, d.latitude));
                        var p = d.longitude >= 0 ? d.longitude : d.longitude + u.TWO_PI;
                        (a = Math.min(a, p)), (o = Math.max(o, p));
                    }
                    return (
                        i - r > o - a &&
                            ((r = a),
                            (i = o),
                            i > u.PI && (i -= u.TWO_PI),
                            r > u.PI && (r -= u.TWO_PI)),
                        n(t)
                            ? ((t.west = r), (t.south = c), (t.east = i), (t.north = l), t)
                            : new s(r, c, i, l)
                    );
                }),
                (s.fromCartesianArray = function(e, t, i) {
                    t = r(t, a.WGS84);
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
                        n(i)
                            ? ((i.west = o), (i.south = h), (i.east = c), (i.north = d), i)
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
                    var i = t.east,
                        a = t.west;
                    i < a && (i += u.TWO_PI);
                    var o = u.negativePiToPi(0.5 * (a + i)),
                        s = 0.5 * (t.south + t.north);
                    return n(r)
                        ? ((r.longitude = o), (r.latitude = s), (r.height = 0), r)
                        : new e(o, s);
                }),
                (s.intersection = function(e, t, r) {
                    var i = e.east,
                        a = e.west,
                        o = t.east,
                        c = t.west;
                    i < a && o > 0 ? (i += u.TWO_PI) : o < c && i > 0 && (o += u.TWO_PI),
                        i < a && c < 0 ? (c += u.TWO_PI) : o < c && a < 0 && (a += u.TWO_PI);
                    var l = u.negativePiToPi(Math.max(a, c)),
                        f = u.negativePiToPi(Math.min(i, o));
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
                    var i = Math.max(e.west, t.west),
                        a = Math.max(e.south, t.south),
                        o = Math.min(e.east, t.east),
                        u = Math.min(e.north, t.north);
                    if (!(a >= u || i >= o))
                        return n(r)
                            ? ((r.west = i), (r.south = a), (r.east = o), (r.north = u), r)
                            : new s(i, a, o, u);
                }),
                (s.union = function(e, t, r) {
                    n(r) || (r = new s());
                    var i = e.east,
                        a = e.west,
                        o = t.east,
                        c = t.west;
                    i < a && o > 0 ? (i += u.TWO_PI) : o < c && i > 0 && (o += u.TWO_PI),
                        i < a && c < 0 ? (c += u.TWO_PI) : o < c && a < 0 && (a += u.TWO_PI);
                    var l = u.convertLongitudeRange(Math.min(a, c)),
                        f = u.convertLongitudeRange(Math.max(i, o));
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
                        i = e.west,
                        a = e.east;
                    return (
                        a < i && ((a += u.TWO_PI), r < 0 && (r += u.TWO_PI)),
                        (r > i || u.equalsEpsilon(r, i, u.EPSILON14)) &&
                            (r < a || u.equalsEpsilon(r, a, u.EPSILON14)) &&
                            n >= e.south &&
                            n <= e.north
                    );
                });
            var c = new e();
            return (
                (s.subsample = function(e, t, i, o) {
                    (t = r(t, a.WGS84)), (i = r(i, 0)), n(o) || (o = []);
                    var l = 0,
                        f = e.north,
                        h = e.south,
                        d = e.east,
                        p = e.west,
                        y = c;
                    (y.height = i),
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
        ], function(e, t, r, n, i, a, o, u, s, c, l, f, h) {
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
                N = new e(),
                I = (4 / 3) * c.PI;
            d.fromPoints = function(t, r) {
                if ((i(r) || (r = new d()), !i(t) || 0 === t.length))
                    return (r.center = e.clone(e.ZERO, r.center)), (r.radius = 0), r;
                var n,
                    a = e.clone(t[0], T),
                    o = e.clone(a, p),
                    u = e.clone(a, y),
                    s = e.clone(a, m),
                    c = e.clone(a, E),
                    l = e.clone(a, _),
                    f = e.clone(a, v),
                    h = t.length;
                for (n = 1; n < h; n++) {
                    e.clone(t[n], a);
                    var I = a.x,
                        O = a.y,
                        w = a.z;
                    I < o.x && e.clone(a, o),
                        I > c.x && e.clone(a, c),
                        O < u.y && e.clone(a, u),
                        O > l.y && e.clone(a, l),
                        w < s.z && e.clone(a, s),
                        w > f.z && e.clone(a, f);
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
                var q = e.midpoint(B, z, N),
                    G = 0;
                for (n = 0; n < h; n++) {
                    e.clone(t[n], a);
                    var V = e.magnitude(e.subtract(a, q, R));
                    V > G && (G = V);
                    var W = e.magnitudeSquared(e.subtract(a, D, R));
                    if (W > L) {
                        var H = Math.sqrt(W);
                        (F = 0.5 * (F + H)), (L = F * F);
                        var X = H - F;
                        (D.x = (F * D.x + X * a.x) / H),
                            (D.y = (F * D.y + X * a.y) / H),
                            (D.z = (F * D.z + X * a.z) / H);
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
                w = new e(),
                x = new e(),
                M = new t(),
                C = new t();
            (d.fromRectangle2D = function(e, t, r) {
                return d.fromRectangleWithHeights2D(e, t, 0, 0, r);
            }),
                (d.fromRectangleWithHeights2D = function(t, r, a, o, u) {
                    if ((i(u) || (u = new d()), !i(t)))
                        return (u.center = e.clone(e.ZERO, u.center)), (u.radius = 0), u;
                    (r = n(r, O)),
                        h.southwest(t, M),
                        (M.height = a),
                        h.northeast(t, C),
                        (C.height = o);
                    var s = r.project(M, w),
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
                if (((r = n(r, a.WGS84)), (o = n(o, 0)), i(u) || (u = new d()), !i(t)))
                    return (u.center = e.clone(e.ZERO, u.center)), (u.radius = 0), u;
                var s = h.subsample(t, r, o, P);
                return d.fromPoints(s, u);
            }),
                (d.fromVertices = function(t, r, a, o) {
                    if ((i(o) || (o = new d()), !i(t) || 0 === t.length))
                        return (o.center = e.clone(e.ZERO, o.center)), (o.radius = 0), o;
                    (r = n(r, e.ZERO)), (a = n(a, 3));
                    var u = T;
                    (u.x = t[0] + r.x), (u.y = t[1] + r.y), (u.z = t[2] + r.z);
                    var s,
                        c = e.clone(u, p),
                        l = e.clone(u, y),
                        f = e.clone(u, m),
                        h = e.clone(u, E),
                        I = e.clone(u, _),
                        O = e.clone(u, v),
                        w = t.length;
                    for (s = 0; s < w; s += a) {
                        var x = t[s] + r.x,
                            M = t[s + 1] + r.y,
                            C = t[s + 2] + r.z;
                        (u.x = x),
                            (u.y = M),
                            (u.z = C),
                            x < c.x && e.clone(u, c),
                            x > h.x && e.clone(u, h),
                            M < l.y && e.clone(u, l),
                            M > I.y && e.clone(u, I),
                            C < f.z && e.clone(u, f),
                            C > O.z && e.clone(u, O);
                    }
                    var P = e.magnitudeSquared(e.subtract(h, c, R)),
                        b = e.magnitudeSquared(e.subtract(I, l, R)),
                        U = e.magnitudeSquared(e.subtract(O, f, R)),
                        D = c,
                        L = h,
                        F = P;
                    b > F && ((F = b), (D = l), (L = I)), U > F && ((F = U), (D = f), (L = O));
                    var B = A;
                    (B.x = 0.5 * (D.x + L.x)), (B.y = 0.5 * (D.y + L.y)), (B.z = 0.5 * (D.z + L.z));
                    var z = e.magnitudeSquared(e.subtract(L, B, R)),
                        q = Math.sqrt(z),
                        G = g;
                    (G.x = c.x), (G.y = l.y), (G.z = f.z);
                    var V = S;
                    (V.x = h.x), (V.y = I.y), (V.z = O.z);
                    var W = e.midpoint(G, V, N),
                        H = 0;
                    for (s = 0; s < w; s += a) {
                        (u.x = t[s] + r.x), (u.y = t[s + 1] + r.y), (u.z = t[s + 2] + r.z);
                        var X = e.magnitude(e.subtract(u, W, R));
                        X > H && (H = X);
                        var k = e.magnitudeSquared(e.subtract(u, B, R));
                        if (k > z) {
                            var Y = Math.sqrt(k);
                            (q = 0.5 * (q + Y)), (z = q * q);
                            var j = Y - q;
                            (B.x = (q * B.x + j * u.x) / Y),
                                (B.y = (q * B.y + j * u.y) / Y),
                                (B.z = (q * B.z + j * u.z) / Y);
                        }
                    }
                    return (
                        q < H
                            ? (e.clone(B, o.center), (o.radius = q))
                            : (e.clone(W, o.center), (o.radius = H)),
                        o
                    );
                }),
                (d.fromEncodedCartesianVertices = function(t, r, n) {
                    if (
                        (i(n) || (n = new d()),
                        !i(t) || !i(r) || t.length !== r.length || 0 === t.length)
                    )
                        return (n.center = e.clone(e.ZERO, n.center)), (n.radius = 0), n;
                    var a = T;
                    (a.x = t[0] + r[0]), (a.y = t[1] + r[1]), (a.z = t[2] + r[2]);
                    var o,
                        u = e.clone(a, p),
                        s = e.clone(a, y),
                        c = e.clone(a, m),
                        l = e.clone(a, E),
                        f = e.clone(a, _),
                        h = e.clone(a, v),
                        I = t.length;
                    for (o = 0; o < I; o += 3) {
                        var O = t[o] + r[o],
                            w = t[o + 1] + r[o + 1],
                            x = t[o + 2] + r[o + 2];
                        (a.x = O),
                            (a.y = w),
                            (a.z = x),
                            O < u.x && e.clone(a, u),
                            O > l.x && e.clone(a, l),
                            w < s.y && e.clone(a, s),
                            w > f.y && e.clone(a, f),
                            x < c.z && e.clone(a, c),
                            x > h.z && e.clone(a, h);
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
                    var G = e.midpoint(z, q, N),
                        V = 0;
                    for (o = 0; o < I; o += 3) {
                        (a.x = t[o] + r[o]),
                            (a.y = t[o + 1] + r[o + 1]),
                            (a.z = t[o + 2] + r[o + 2]);
                        var W = e.magnitude(e.subtract(a, G, R));
                        W > V && (V = W);
                        var H = e.magnitudeSquared(e.subtract(a, L, R));
                        if (H > F) {
                            var X = Math.sqrt(H);
                            (B = 0.5 * (B + X)), (F = B * B);
                            var k = X - B;
                            (L.x = (B * L.x + k * a.x) / X),
                                (L.y = (B * L.y + k * a.y) / X),
                                (L.z = (B * L.z + k * a.z) / X);
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
                    i(n) || (n = new d());
                    var a = e.midpoint(t, r, n.center);
                    return (n.radius = e.distance(a, r)), n;
                }),
                (d.fromEllipsoid = function(t, r) {
                    return (
                        i(r) || (r = new d()),
                        e.clone(e.ZERO, r.center),
                        (r.radius = t.maximumRadius),
                        r
                    );
                });
            var b = new e();
            d.fromBoundingSpheres = function(t, r) {
                if ((i(r) || (r = new d()), !i(t) || 0 === t.length))
                    return (r.center = e.clone(e.ZERO, r.center)), (r.radius = 0), r;
                var n = t.length;
                if (1 === n) return d.clone(t[0], r);
                if (2 === n) return d.union(t[0], t[1], r);
                var a,
                    o = [];
                for (a = 0; a < n; a++) o.push(t[a].center);
                r = d.fromPoints(o, r);
                var u = r.center,
                    s = r.radius;
                for (a = 0; a < n; a++) {
                    var c = t[a];
                    s = Math.max(s, e.distance(u, c.center, b) + c.radius);
                }
                return (r.radius = s), r;
            };
            var U = new e(),
                D = new e(),
                L = new e();
            (d.fromOrientedBoundingBox = function(t, r) {
                i(r) || (r = new d());
                var n = t.halfAxes,
                    a = l.getColumn(n, 0, U),
                    o = l.getColumn(n, 1, D),
                    u = l.getColumn(n, 2, L);
                return (
                    e.add(a, o, a),
                    e.add(a, u, a),
                    (r.center = e.clone(t.center, r.center)),
                    (r.radius = e.magnitude(a)),
                    r
                );
            }),
                (d.clone = function(t, r) {
                    if (i(t))
                        return i(r)
                            ? ((r.center = e.clone(t.center, r.center)), (r.radius = t.radius), r)
                            : new d(t.center, t.radius);
                }),
                (d.packedLength = 4),
                (d.pack = function(e, t, r) {
                    r = n(r, 0);
                    var i = e.center;
                    return (t[r++] = i.x), (t[r++] = i.y), (t[r++] = i.z), (t[r] = e.radius), t;
                }),
                (d.unpack = function(e, t, r) {
                    (t = n(t, 0)), i(r) || (r = new d());
                    var a = r.center;
                    return (a.x = e[t++]), (a.y = e[t++]), (a.z = e[t++]), (r.radius = e[t]), r;
                });
            var F = new e(),
                B = new e();
            d.union = function(t, r, n) {
                i(n) || (n = new d());
                var a = t.center,
                    o = t.radius,
                    u = r.center,
                    s = r.radius,
                    c = e.subtract(u, a, F),
                    l = e.magnitude(c);
                if (o >= l + s) return t.clone(n), n;
                if (s >= l + o) return r.clone(n), n;
                var f = 0.5 * (o + l + s),
                    h = e.multiplyByScalar(c, (-o + f) / l, B);
                return e.add(h, a, h), e.clone(h, n.center), (n.radius = f), n;
            };
            var z = new e();
            (d.expand = function(t, r, n) {
                n = d.clone(t, n);
                var i = e.magnitude(e.subtract(r, n.center, z));
                return i > n.radius && (n.radius = i), n;
            }),
                (d.intersectPlane = function(t, r) {
                    var n = t.center,
                        i = t.radius,
                        a = r.normal,
                        o = e.dot(a, n) + r.distance;
                    return o < -i ? u.OUTSIDE : o < i ? u.INTERSECTING : u.INSIDE;
                }),
                (d.transform = function(e, t, r) {
                    return (
                        i(r) || (r = new d()),
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
                        i(r) || (r = new d()),
                        (r.center = f.multiplyByPoint(t, e.center, r.center)),
                        (r.radius = e.radius),
                        r
                    );
                });
            var G = new e();
            d.computePlaneDistances = function(t, r, n, a) {
                i(a) || (a = new s());
                var o = e.subtract(t.center, r, G),
                    u = e.dot(n, o);
                return (a.start = u - t.radius), (a.stop = u + t.radius), a;
            };
            for (
                var V = new e(),
                    W = new e(),
                    H = new e(),
                    X = new e(),
                    k = new e(),
                    Y = new t(),
                    j = new Array(8),
                    Z = 0;
                Z < 8;
                ++Z
            )
                j[Z] = new e();
            var K = new o();
            return (
                (d.projectTo2D = function(t, r, i) {
                    r = n(r, K);
                    var a = r.ellipsoid,
                        o = t.center,
                        u = t.radius,
                        s = a.geodeticSurfaceNormal(o, V),
                        c = e.cross(e.UNIT_Z, s, W);
                    e.normalize(c, c);
                    var l = e.cross(s, c, H);
                    e.normalize(l, l),
                        e.multiplyByScalar(s, u, s),
                        e.multiplyByScalar(l, u, l),
                        e.multiplyByScalar(c, u, c);
                    var f = e.negate(l, k),
                        h = e.negate(c, X),
                        p = j,
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
                        var v = a.cartesianToCartographic(_, Y);
                        r.project(v, _);
                    }
                    (i = d.fromPoints(p, i)), (o = i.center);
                    var T = o.x,
                        R = o.y,
                        A = o.z;
                    return (o.x = A), (o.y = T), (o.z = R), i;
                }),
                (d.isOccluded = function(e, t) {
                    return !t.isBoundingSphereVisible(e);
                }),
                (d.equals = function(t, r) {
                    return (
                        t === r ||
                        (i(t) && i(r) && e.equals(t.center, r.center) && t.radius === r.radius)
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
                    return I * e * e * e;
                }),
                d
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
                i = {};
            return (
                t(i, {
                    element: {
                        get: function() {
                            if (i.supportsFullscreen()) return document[n.fullscreenElement];
                        }
                    },
                    changeEventName: {
                        get: function() {
                            if (i.supportsFullscreen()) return n.fullscreenchange;
                        }
                    },
                    errorEventName: {
                        get: function() {
                            if (i.supportsFullscreen()) return n.fullscreenerror;
                        }
                    },
                    enabled: {
                        get: function() {
                            if (i.supportsFullscreen()) return document[n.fullscreenEnabled];
                        }
                    },
                    fullscreen: {
                        get: function() {
                            if (i.supportsFullscreen()) return null !== i.element;
                        }
                    }
                }),
                (i.supportsFullscreen = function() {
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
                        var i, a = ["webkit", "moz", "o", "ms", "khtml"], o = 0, u = a.length;
                        o < u;
                        ++o
                    ) {
                        var s = a[o];
                        (i = s + "RequestFullscreen"),
                            "function" == typeof t[i]
                                ? ((n.requestFullscreen = i), (r = !0))
                                : ((i = s + "RequestFullScreen"),
                                  "function" == typeof t[i] &&
                                      ((n.requestFullscreen = i), (r = !0))),
                            (i = s + "ExitFullscreen"),
                            "function" == typeof document[i]
                                ? (n.exitFullscreen = i)
                                : ((i = s + "CancelFullScreen"),
                                  "function" == typeof document[i] && (n.exitFullscreen = i)),
                            (i = s + "FullscreenEnabled"),
                            void 0 !== document[i]
                                ? (n.fullscreenEnabled = i)
                                : ((i = s + "FullScreenEnabled"),
                                  void 0 !== document[i] && (n.fullscreenEnabled = i)),
                            (i = s + "FullscreenElement"),
                            void 0 !== document[i]
                                ? (n.fullscreenElement = i)
                                : ((i = s + "FullScreenElement"),
                                  void 0 !== document[i] && (n.fullscreenElement = i)),
                            (i = s + "fullscreenchange"),
                            void 0 !== document["on" + i] &&
                                ("ms" === s && (i = "MSFullscreenChange"),
                                (n.fullscreenchange = i)),
                            (i = s + "fullscreenerror"),
                            void 0 !== document["on" + i] &&
                                ("ms" === s && (i = "MSFullscreenError"), (n.fullscreenerror = i));
                    }
                    return r;
                }),
                (i.requestFullscreen = function(e, t) {
                    i.supportsFullscreen() && e[n.requestFullscreen]({ vrDisplay: t });
                }),
                (i.exitFullscreen = function() {
                    i.supportsFullscreen() && document[n.exitFullscreen]();
                }),
                i
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
            function i() {
                if (!t(R) && ((R = !1), !h())) {
                    var e = / Chrome\/([\.0-9]+)/.exec(T.userAgent);
                    null !== e && ((R = !0), (A = n(e[1])));
                }
                return R;
            }
            function a() {
                return i() && A;
            }
            function o() {
                if (!t(g) && ((g = !1), !i() && !h() && / Safari\/[\.0-9]+/.test(T.userAgent))) {
                    var e = / Version\/([\.0-9]+)/.exec(T.userAgent);
                    null !== e && ((g = !0), (S = n(e[1])));
                }
                return g;
            }
            function u() {
                return o() && S;
            }
            function s() {
                if (!t(N)) {
                    N = !1;
                    var e = / AppleWebKit\/([\.0-9]+)(\+?)/.exec(T.userAgent);
                    null !== e && ((N = !0), (I = n(e[1])), (I.isNightly = !!e[2]));
                }
                return N;
            }
            function c() {
                return s() && I;
            }
            function l() {
                if (!t(O)) {
                    O = !1;
                    var e;
                    "Microsoft Internet Explorer" === T.appName
                        ? null !== (e = /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T.userAgent)) &&
                          ((O = !0), (w = n(e[1])))
                        : "Netscape" === T.appName &&
                          null !== (e = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T.userAgent)) &&
                          ((O = !0), (w = n(e[1])));
                }
                return O;
            }
            function f() {
                return l() && w;
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
                N,
                I,
                O,
                w,
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
                isChrome: i,
                chromeVersion: a,
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
        ], function(e, t, r, n, i, a) {
            "use strict";
            if (!n.supportsTypedArrays()) return {};
            var o = {
                BYTE: a.BYTE,
                UNSIGNED_BYTE: a.UNSIGNED_BYTE,
                SHORT: a.SHORT,
                UNSIGNED_SHORT: a.UNSIGNED_SHORT,
                INT: a.INT,
                UNSIGNED_INT: a.UNSIGNED_INT,
                FLOAT: a.FLOAT,
                DOUBLE: a.DOUBLE
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
                (o.createArrayBufferView = function(t, r, n, i) {
                    switch (
                        ((n = e(n, 0)), (i = e(i, (r.byteLength - n) / o.getSizeInBytes(t))), t)
                    ) {
                        case o.BYTE:
                            return new Int8Array(r, n, i);
                        case o.UNSIGNED_BYTE:
                            return new Uint8Array(r, n, i);
                        case o.SHORT:
                            return new Int16Array(r, n, i);
                        case o.UNSIGNED_SHORT:
                            return new Uint16Array(r, n, i);
                        case o.INT:
                            return new Int32Array(r, n, i);
                        case o.UNSIGNED_INT:
                            return new Uint32Array(r, n, i);
                        case o.FLOAT:
                            return new Float32Array(r, n, i);
                        case o.DOUBLE:
                            return new Float64Array(r, n, i);
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
                i(o)
            );
        }),
        define("Core/AxisAlignedBoundingBox", [
            "./Cartesian3",
            "./Check",
            "./defaultValue",
            "./defined",
            "./Intersect"
        ], function(e, t, r, n, i) {
            "use strict";
            function a(t, i, a) {
                (this.minimum = e.clone(r(t, e.ZERO))),
                    (this.maximum = e.clone(r(i, e.ZERO))),
                    (a = n(a) ? e.clone(a) : e.midpoint(this.minimum, this.maximum, new e())),
                    (this.center = a);
            }
            (a.fromPoints = function(t, r) {
                if ((n(r) || (r = new a()), !n(t) || 0 === t.length))
                    return (
                        (r.minimum = e.clone(e.ZERO, r.minimum)),
                        (r.maximum = e.clone(e.ZERO, r.maximum)),
                        (r.center = e.clone(e.ZERO, r.center)),
                        r
                    );
                for (
                    var i = t[0].x,
                        o = t[0].y,
                        u = t[0].z,
                        s = t[0].x,
                        c = t[0].y,
                        l = t[0].z,
                        f = t.length,
                        h = 1;
                    h < f;
                    h++
                ) {
                    var d = t[h],
                        p = d.x,
                        y = d.y,
                        m = d.z;
                    (i = Math.min(p, i)),
                        (s = Math.max(p, s)),
                        (o = Math.min(y, o)),
                        (c = Math.max(y, c)),
                        (u = Math.min(m, u)),
                        (l = Math.max(m, l));
                }
                var E = r.minimum;
                (E.x = i), (E.y = o), (E.z = u);
                var _ = r.maximum;
                return (_.x = s), (_.y = c), (_.z = l), (r.center = e.midpoint(E, _, r.center)), r;
            }),
                (a.clone = function(t, r) {
                    if (n(t))
                        return n(r)
                            ? ((r.minimum = e.clone(t.minimum, r.minimum)),
                              (r.maximum = e.clone(t.maximum, r.maximum)),
                              (r.center = e.clone(t.center, r.center)),
                              r)
                            : new a(t.minimum, t.maximum, t.center);
                }),
                (a.equals = function(t, r) {
                    return (
                        t === r ||
                        (n(t) &&
                            n(r) &&
                            e.equals(t.center, r.center) &&
                            e.equals(t.minimum, r.minimum) &&
                            e.equals(t.maximum, r.maximum))
                    );
                });
            var o = new e();
            return (
                (a.intersectPlane = function(t, r) {
                    o = e.subtract(t.maximum, t.minimum, o);
                    var n = e.multiplyByScalar(o, 0.5, o),
                        a = r.normal,
                        u = n.x * Math.abs(a.x) + n.y * Math.abs(a.y) + n.z * Math.abs(a.z),
                        s = e.dot(t.center, a) + r.distance;
                    return s - u > 0 ? i.INSIDE : s + u < 0 ? i.OUTSIDE : i.INTERSECTING;
                }),
                (a.prototype.clone = function(e) {
                    return a.clone(this, e);
                }),
                (a.prototype.intersectPlane = function(e) {
                    return a.intersectPlane(this, e);
                }),
                (a.prototype.equals = function(e) {
                    return a.equals(this, e);
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
        ], function(e, t, r, n, i, a) {
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
                (o.unpack = function(e, n, i) {
                    return (n = t(n, 0)), r(i) || (i = new o()), (i.x = e[n++]), (i.y = e[n]), i;
                }),
                (o.packArray = function(e, t) {
                    var n = e.length;
                    r(t) ? (t.length = 2 * n) : (t = new Array(2 * n));
                    for (var i = 0; i < n; ++i) o.pack(e[i], t, 2 * i);
                    return t;
                }),
                (o.unpackArray = function(e, t) {
                    var n = e.length;
                    r(t) ? (t.length = n / 2) : (t = new Array(n / 2));
                    for (var i = 0; i < n; i += 2) {
                        var a = i / 2;
                        t[a] = o.unpack(e, i, t[a]);
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
                return o.normalize(e, c), o.normalize(t, l), a.acosClamped(o.dot(c, l));
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
                (o.equalsEpsilon = function(e, t, n, i) {
                    return (
                        e === t ||
                        (r(e) &&
                            r(t) &&
                            a.equalsEpsilon(e.x, t.x, n, i) &&
                            a.equalsEpsilon(e.y, t.y, n, i))
                    );
                }),
                (o.ZERO = i(new o(0, 0))),
                (o.UNIT_X = i(new o(1, 0))),
                (o.UNIT_Y = i(new o(0, 1))),
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
        define("Core/QuadraticRealPolynomial", ["./DeveloperError", "./Math"], function(e, t) {
            "use strict";
            function r(e, r, n) {
                var i = e + r;
                return t.sign(e) !== t.sign(r) &&
                    Math.abs(i / Math.max(Math.abs(e), Math.abs(r))) < n
                    ? 0
                    : i;
            }
            var n = {};
            return (
                (n.computeDiscriminant = function(e, t, r) {
                    return t * t - 4 * e * r;
                }),
                (n.computeRealRoots = function(e, n, i) {
                    var a;
                    if (0 === e) return 0 === n ? [] : [-i / n];
                    if (0 === n) {
                        if (0 === i) return [0, 0];
                        var o = Math.abs(i),
                            u = Math.abs(e);
                        if (o < u && o / u < t.EPSILON14) return [0, 0];
                        if (o > u && u / o < t.EPSILON14) return [];
                        if ((a = -i / e) < 0) return [];
                        var s = Math.sqrt(a);
                        return [-s, s];
                    }
                    if (0 === i) return (a = -n / e), a < 0 ? [a, 0] : [0, a];
                    var c = n * n,
                        l = 4 * e * i,
                        f = r(c, -l, t.EPSILON14);
                    if (f < 0) return [];
                    var h = -0.5 * r(n, t.sign(n) * Math.sqrt(f), t.EPSILON14);
                    return n > 0 ? [h / e, i / h] : [i / h, h / e];
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
                var i,
                    a,
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
                    a = -T + A;
                    var g = a / 2,
                        S = g < 0 ? -Math.pow(-g, 1 / 3) : Math.pow(g, 1 / 3),
                        N = a === A ? -S : -v / S;
                    return (
                        (i = v <= 0 ? S + N : -T / (S * S + N * N + v)),
                        h * f >= l * d ? [(i - u) / o] : [-c / (i + s)]
                    );
                }
                var I = p,
                    O = -2 * u * p + o * y,
                    w = m,
                    x = -c * y + 2 * s * m,
                    M = Math.sqrt(E),
                    C = Math.sqrt(3) / 2,
                    P = Math.abs(Math.atan2(o * M, -O) / 3);
                i = 2 * Math.sqrt(-I);
                var b = Math.cos(P);
                a = i * b;
                var U = i * (-b / 2 - C * Math.sin(P)),
                    D = a + U > 2 * u ? a - u : U - u,
                    L = o,
                    F = D / L;
                (P = Math.abs(Math.atan2(c * M, -x) / 3)),
                    (i = 2 * Math.sqrt(-w)),
                    (b = Math.cos(P)),
                    (a = i * b),
                    (U = i * (-b / 2 - C * Math.sin(P)));
                var B = -c,
                    z = a + U < 2 * s ? a + s : U + s,
                    q = B / z,
                    G = L * z,
                    V = -D * z - L * B,
                    W = D * B,
                    H = (s * V - u * W) / (-u * V + s * G);
                return F <= H
                    ? F <= q
                        ? H <= q
                            ? [F, H, q]
                            : [F, q, H]
                        : [q, F, H]
                    : F <= q
                    ? [H, F, q]
                    : H <= q
                    ? [H, q, F]
                    : [q, H, F];
            }
            var n = {};
            return (
                (n.computeDiscriminant = function(e, t, r, n) {
                    var i = e * e,
                        a = t * t,
                        o = r * r;
                    return (
                        18 * e * t * r * n + a * o - 27 * i * (n * n) - 4 * (e * o * r + a * t * n)
                    );
                }),
                (n.computeRealRoots = function(e, n, i, a) {
                    var o, u;
                    if (0 === e) return t.computeRealRoots(n, i, a);
                    if (0 === n) {
                        if (0 === i) {
                            if (0 === a) return [0, 0, 0];
                            u = -a / e;
                            var s = u < 0 ? -Math.pow(-u, 1 / 3) : Math.pow(u, 1 / 3);
                            return [s, s, s];
                        }
                        return 0 === a
                            ? ((o = t.computeRealRoots(e, 0, i)),
                              0 === o.Length ? [0] : [o[0], 0, o[1]])
                            : r(e, 0, i, a);
                    }
                    return 0 === i
                        ? 0 === a
                            ? ((u = -n / e), u < 0 ? [u, 0, 0] : [0, 0, u])
                            : r(e, n, 0, a)
                        : 0 === a
                        ? ((o = t.computeRealRoots(e, n, i)),
                          0 === o.length
                              ? [0]
                              : o[1] <= 0
                              ? [o[0], o[1], 0]
                              : o[0] >= 0
                              ? [0, o[0], o[1]]
                              : [o[0], 0, o[1]])
                        : r(e, n, i, a);
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
            function i(t, i, a, o) {
                var u = t * t,
                    s = i - (3 * u) / 8,
                    c = a - (i * t) / 2 + (u * t) / 8,
                    l = o - (a * t) / 4 + (i * u) / 16 - (3 * u * u) / 256,
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
            function a(t, i, a, o) {
                var u = a * a,
                    s = i * i,
                    c = t * t,
                    l = -2 * i,
                    f = a * t + s - 4 * o,
                    h = c * o - a * i * t + u,
                    d = e.computeRealRoots(1, l, f, h);
                if (d.length > 0) {
                    var p,
                        y,
                        m = d[0],
                        E = i - m,
                        _ = E * E,
                        v = t / 2,
                        T = E / 2,
                        R = _ - 4 * o,
                        A = _ + 4 * Math.abs(o),
                        g = c - 4 * m,
                        S = c + 4 * Math.abs(m);
                    if (m < 0 || R * S < g * A) {
                        var N = Math.sqrt(g);
                        (p = N / 2), (y = 0 === N ? 0 : (t * T - a) / N);
                    } else {
                        var I = Math.sqrt(R);
                        (p = 0 === I ? 0 : (t * T - a) / I), (y = I / 2);
                    }
                    var O, w;
                    0 === v && 0 === p
                        ? ((O = 0), (w = 0))
                        : r.sign(v) === r.sign(p)
                        ? ((O = v + p), (w = m / O))
                        : ((w = v - p), (O = m / w));
                    var x, M;
                    0 === T && 0 === y
                        ? ((x = 0), (M = 0))
                        : r.sign(T) === r.sign(y)
                        ? ((x = T + y), (M = o / x))
                        : ((M = T - y), (x = o / M));
                    var C = n.computeRealRoots(1, O, x),
                        P = n.computeRealRoots(1, w, M);
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
                (o.computeDiscriminant = function(e, t, r, n, i) {
                    var a = e * e,
                        o = a * e,
                        u = t * t,
                        s = u * t,
                        c = r * r,
                        l = c * r,
                        f = n * n,
                        h = f * n,
                        d = i * i;
                    return (
                        u * c * f -
                        4 * s * h -
                        4 * e * l * f +
                        18 * e * t * r * h -
                        27 * a * f * f +
                        256 * o * (d * i) +
                        i *
                            (18 * s * r * n -
                                4 * u * l +
                                16 * e * c * c -
                                80 * e * t * c * n -
                                6 * e * u * f +
                                144 * a * r * f) +
                        d * (144 * e * u * r - 27 * u * u - 128 * a * c - 192 * a * t * n)
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
                            return i(c, l, f, h);
                        case 1:
                        case 2:
                            return a(c, l, f, h);
                        case 3:
                        case 4:
                            return i(c, l, f, h);
                        case 5:
                            return a(c, l, f, h);
                        case 6:
                        case 7:
                            return i(c, l, f, h);
                        case 8:
                            return a(c, l, f, h);
                        case 9:
                        case 10:
                            return i(c, l, f, h);
                        case 11:
                            return a(c, l, f, h);
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                            return i(c, l, f, h);
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
            function i(t, n) {
                (n = e.clone(r(n, e.ZERO))),
                    e.equals(n, e.ZERO) || e.normalize(n, n),
                    (this.origin = e.clone(r(t, e.ZERO))),
                    (this.direction = n);
            }
            return (
                (i.clone = function(t, r) {
                    if (n(t))
                        return n(r)
                            ? ((r.origin = e.clone(t.origin)),
                              (r.direction = e.clone(t.direction)),
                              r)
                            : new i(t.origin, t.direction);
                }),
                (i.getPoint = function(t, r, i) {
                    return (
                        n(i) || (i = new e()),
                        (i = e.multiplyByScalar(t.direction, r, i)),
                        e.add(t.origin, i, i)
                    );
                }),
                i
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
        ], function(e, t, r, n, i, a, o, u, s, c, l) {
            "use strict";
            function f(e, t, r, n) {
                var i = t * t - 4 * e * r;
                if (!(i < 0)) {
                    if (i > 0) {
                        var a = 1 / (2 * e),
                            o = Math.sqrt(i),
                            u = (-t + o) * a,
                            s = (-t - o) * a;
                        return (
                            u < s ? ((n.root0 = u), (n.root1 = s)) : ((n.root0 = s), (n.root1 = u)),
                            n
                        );
                    }
                    var c = -t / (2 * e);
                    if (0 !== c) return (n.root0 = n.root1 = c), n;
                }
            }
            function h(t, r, i) {
                n(i) || (i = new a());
                var o = t.origin,
                    u = t.direction,
                    s = r.center,
                    c = r.radius * r.radius,
                    l = e.subtract(o, s, _),
                    h = e.dot(u, u),
                    d = 2 * e.dot(u, l),
                    p = e.magnitudeSquared(l) - c,
                    y = f(h, d, p, A);
                if (n(y)) return (i.start = y.root0), (i.stop = y.root1), i;
            }
            function d(e, t, r) {
                var n = e + t;
                return o.sign(e) !== o.sign(t) &&
                    Math.abs(n / Math.max(Math.abs(e), Math.abs(t))) < r
                    ? 0
                    : n;
            }
            function p(t, r, n, i, a) {
                var l,
                    f = i * i,
                    h = a * a,
                    p = (t[u.COLUMN1ROW1] - t[u.COLUMN2ROW2]) * h,
                    y = a * (i * d(t[u.COLUMN1ROW0], t[u.COLUMN0ROW1], o.EPSILON15) + r.y),
                    m = t[u.COLUMN0ROW0] * f + t[u.COLUMN2ROW2] * h + i * r.x + n,
                    E = h * d(t[u.COLUMN2ROW1], t[u.COLUMN1ROW2], o.EPSILON15),
                    _ = a * (i * d(t[u.COLUMN2ROW0], t[u.COLUMN0ROW2]) + r.z),
                    v = [];
                if (0 === _ && 0 === E) {
                    if (((l = s.computeRealRoots(p, y, m)), 0 === l.length)) return v;
                    var T = l[0],
                        R = Math.sqrt(Math.max(1 - T * T, 0));
                    if (
                        (v.push(new e(i, a * T, a * -R)),
                        v.push(new e(i, a * T, a * R)),
                        2 === l.length)
                    ) {
                        var A = l[1],
                            g = Math.sqrt(Math.max(1 - A * A, 0));
                        v.push(new e(i, a * A, a * -g)), v.push(new e(i, a * A, a * g));
                    }
                    return v;
                }
                var S = _ * _,
                    N = E * E,
                    I = p * p,
                    O = _ * E,
                    w = I + N,
                    x = 2 * (y * p + O),
                    M = 2 * m * p + y * y - N + S,
                    C = 2 * (m * y - O),
                    P = m * m - S;
                if (0 === w && 0 === x && 0 === M && 0 === C) return v;
                l = c.computeRealRoots(w, x, M, C, P);
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
                        ? v.push(new e(i, a * L, a * z))
                        : G > 0
                        ? v.push(new e(i, a * L, a * -z))
                        : 0 !== z
                        ? (v.push(new e(i, a * L, a * -z)), v.push(new e(i, a * L, a * z)), ++U)
                        : v.push(new e(i, a * L, a * z));
                }
                return v;
            }
            var y = {};
            y.rayPlane = function(t, r, i) {
                n(i) || (i = new e());
                var a = t.origin,
                    u = t.direction,
                    s = r.normal,
                    c = e.dot(s, u);
                if (!(Math.abs(c) < o.EPSILON15)) {
                    var l = (-r.distance - e.dot(s, a)) / c;
                    if (!(l < 0)) return (i = e.multiplyByScalar(u, l, i)), e.add(a, i, i);
                }
            };
            var m = new e(),
                E = new e(),
                _ = new e(),
                v = new e(),
                T = new e();
            (y.rayTriangleParametric = function(t, n, i, a, u) {
                u = r(u, !1);
                var s,
                    c,
                    l,
                    f,
                    h,
                    d = t.origin,
                    p = t.direction,
                    y = e.subtract(i, n, m),
                    R = e.subtract(a, n, E),
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
                (y.rayTriangle = function(t, r, i, a, o, u) {
                    var s = y.rayTriangleParametric(t, r, i, a, o);
                    if (n(s) && !(s < 0))
                        return (
                            n(u) || (u = new e()),
                            e.multiplyByScalar(t.direction, s, u),
                            e.add(t.origin, u, u)
                        );
                });
            var R = new l();
            y.lineSegmentTriangle = function(t, r, i, a, o, u, s) {
                var c = R;
                e.clone(t, c.origin),
                    e.subtract(r, t, c.direction),
                    e.normalize(c.direction, c.direction);
                var l = y.rayTriangleParametric(c, i, a, o, u);
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
            y.lineSegmentSphere = function(t, r, i, a) {
                var o = g;
                e.clone(t, o.origin);
                var u = e.subtract(r, t, o.direction),
                    s = e.magnitude(u);
                if ((e.normalize(u, u), (a = h(o, i, a)), !(!n(a) || a.stop < 0 || a.start > s)))
                    return (a.start = Math.max(a.start, 0)), (a.stop = Math.min(a.stop, s)), a;
            };
            var S = new e(),
                N = new e();
            y.rayEllipsoid = function(t, r) {
                var n,
                    i,
                    o,
                    u,
                    s,
                    c = r.oneOverRadii,
                    l = e.multiplyComponents(c, t.origin, S),
                    f = e.multiplyComponents(c, t.direction, N),
                    h = e.magnitudeSquared(l),
                    d = e.dot(l, f);
                if (h > 1) {
                    if (d >= 0) return;
                    var p = d * d;
                    if (((n = h - 1), (i = e.magnitudeSquared(f)), (o = i * n), p < o)) return;
                    if (p > o) {
                        (u = d * d - o), (s = -d + Math.sqrt(u));
                        var y = s / i,
                            m = n / s;
                        return y < m ? new a(y, m) : { start: m, stop: y };
                    }
                    var E = Math.sqrt(n / i);
                    return new a(E, E);
                }
                return h < 1
                    ? ((n = h - 1),
                      (i = e.magnitudeSquared(f)),
                      (o = i * n),
                      (u = d * d - o),
                      (s = -d + Math.sqrt(u)),
                      new a(0, s / i))
                    : d < 0
                    ? ((i = e.magnitudeSquared(f)), new a(0, -d / i))
                    : void 0;
            };
            var I = new e(),
                O = new e(),
                w = new e(),
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
                var i = t.origin,
                    a = t.direction;
                if (!e.equals(i, e.ZERO)) {
                    var s = r.geodeticSurfaceNormal(i, I);
                    if (e.dot(a, s) >= 0) return i;
                }
                var c = n(this.rayEllipsoid(t, r)),
                    l = r.transformPositionToScaledSpace(a, I),
                    f = e.normalize(l, l),
                    h = e.mostOrthogonalAxis(l, x),
                    d = e.normalize(e.cross(h, f, O), O),
                    y = e.normalize(e.cross(f, d, w), w),
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
                    (T[1] = -a.z),
                    (T[2] = a.y),
                    (T[3] = a.z),
                    (T[4] = 0),
                    (T[5] = -a.x),
                    (T[6] = -a.y),
                    (T[7] = a.x),
                    (T[8] = 0);
                var R,
                    A,
                    g = u.multiply(u.multiply(E, v, L), T, L),
                    S = u.multiply(u.multiply(g, _, F), m, F),
                    N = u.multiplyByVector(g, i, M),
                    G = p(S, e.negate(N, I), 0, 0, 1),
                    V = G.length;
                if (V > 0) {
                    for (
                        var W = e.clone(e.ZERO, z), H = Number.NEGATIVE_INFINITY, X = 0;
                        X < V;
                        ++X
                    ) {
                        R = u.multiplyByVector(_, u.multiplyByVector(m, G[X], B), B);
                        var k = e.normalize(e.subtract(R, i, x), x),
                            Y = e.dot(k, a);
                        Y > H && ((H = Y), (W = e.clone(R, W)));
                    }
                    var j = r.cartesianToCartographic(W, q);
                    return (
                        (H = o.clamp(H, 0, 1)),
                        (A = e.magnitude(e.subtract(W, i, x)) * Math.sqrt(1 - H * H)),
                        (A = c ? -A : A),
                        (j.height = A),
                        r.cartographicToCartesian(j, new e())
                    );
                }
            };
            var G = new e();
            return (
                (y.lineSegmentPlane = function(t, r, i, a) {
                    n(a) || (a = new e());
                    var u = e.subtract(r, t, G),
                        s = i.normal,
                        c = e.dot(s, u);
                    if (!(Math.abs(c) < o.EPSILON6)) {
                        var l = e.dot(s, t),
                            f = -(i.distance + l) / c;
                        if (!(f < 0 || f > 1))
                            return e.multiplyByScalar(u, f, a), e.add(t, a, a), a;
                    }
                }),
                (y.trianglePlaneIntersection = function(t, r, n, i) {
                    var a = i.normal,
                        o = i.distance,
                        u = e.dot(a, t) + o < 0,
                        s = e.dot(a, r) + o < 0,
                        c = e.dot(a, n) + o < 0,
                        l = 0;
                    (l += u ? 1 : 0), (l += s ? 1 : 0), (l += c ? 1 : 0);
                    var f, h;
                    if (((1 !== l && 2 !== l) || ((f = new e()), (h = new e())), 1 === l)) {
                        if (u)
                            return (
                                y.lineSegmentPlane(t, r, i, f),
                                y.lineSegmentPlane(t, n, i, h),
                                { positions: [t, r, n, f, h], indices: [0, 3, 4, 1, 2, 4, 1, 4, 3] }
                            );
                        if (s)
                            return (
                                y.lineSegmentPlane(r, n, i, f),
                                y.lineSegmentPlane(r, t, i, h),
                                { positions: [t, r, n, f, h], indices: [1, 3, 4, 2, 0, 4, 2, 4, 3] }
                            );
                        if (c)
                            return (
                                y.lineSegmentPlane(n, t, i, f),
                                y.lineSegmentPlane(n, r, i, h),
                                { positions: [t, r, n, f, h], indices: [2, 3, 4, 0, 1, 4, 0, 4, 3] }
                            );
                    } else if (2 === l) {
                        if (!u)
                            return (
                                y.lineSegmentPlane(r, t, i, f),
                                y.lineSegmentPlane(n, t, i, h),
                                { positions: [t, r, n, f, h], indices: [1, 2, 4, 1, 4, 3, 0, 3, 4] }
                            );
                        if (!s)
                            return (
                                y.lineSegmentPlane(n, r, i, f),
                                y.lineSegmentPlane(t, r, i, h),
                                { positions: [t, r, n, f, h], indices: [2, 0, 4, 2, 4, 3, 1, 3, 4] }
                            );
                        if (!c)
                            return (
                                y.lineSegmentPlane(t, n, i, f),
                                y.lineSegmentPlane(r, n, i, h),
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
        ], function(e, t, r, n, i, a, o) {
            "use strict";
            function u(t, r) {
                (this.normal = e.clone(t)), (this.distance = r);
            }
            u.fromPointNormal = function(t, n, i) {
                var a = -e.dot(n, t);
                return r(i) ? (e.clone(n, i.normal), (i.distance = a), i) : new u(n, a);
            };
            var s = new e();
            (u.fromCartesian4 = function(t, n) {
                var i = e.fromCartesian4(t, s),
                    a = t.w;
                return r(n) ? (e.clone(i, n.normal), (n.distance = a), n) : new u(i, a);
            }),
                (u.getPointDistance = function(t, r) {
                    return e.dot(t.normal, r) + t.distance;
                });
            var c = new e();
            u.projectPointOntoPlane = function(t, n, i) {
                r(i) || (i = new e());
                var a = u.getPointDistance(t, n),
                    o = e.multiplyByScalar(t.normal, a, c);
                return e.subtract(n, o, i);
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
                (u.ORIGIN_XY_PLANE = i(new u(e.UNIT_Z, 0))),
                (u.ORIGIN_YZ_PLANE = i(new u(e.UNIT_X, 0))),
                (u.ORIGIN_ZX_PLANE = i(new u(e.UNIT_Y, 0))),
                u
            );
        }),
        (function(e) {
            "use strict";
            e("ThirdParty/when", [], function() {
                function e(e, r, n, i) {
                    return t(e).then(r, n, i);
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
                            : (t = i(e)),
                        t
                    );
                }
                function r(t) {
                    return e(t, a);
                }
                function n(e) {
                    this.then = e;
                }
                function i(e) {
                    return new n(function(r) {
                        try {
                            return t(r ? r(e) : e);
                        } catch (e) {
                            return a(e);
                        }
                    });
                }
                function a(e) {
                    return new n(function(r, n) {
                        try {
                            return n ? t(n(e)) : a(e);
                        } catch (e) {
                            return a(e);
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
                    function i(e) {
                        return p(a(e));
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
                            reject: i,
                            progress: u,
                            promise: c,
                            resolver: { resolve: r, reject: i, progress: u }
                        }),
                        (l = []),
                        (f = []),
                        (h = function(e, t, r) {
                            var n, i;
                            return (
                                (n = o()),
                                (i =
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
                                    r.then(e, t).then(n.resolve, n.reject, i);
                                }),
                                f.push(i),
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
                function s(t, r, n, i, a) {
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
                            return d.then(n, i, a);
                        })
                    );
                }
                function c(e, t, r, n) {
                    function i(e) {
                        return t ? t(e[0]) : e[0];
                    }
                    return s(e, 1, i, r, n);
                }
                function l(e, t, r, n) {
                    return m(1, arguments), h(e, _).then(t, r, n);
                }
                function f() {
                    return h(arguments, _);
                }
                function h(t, r) {
                    return e(t, function(t) {
                        var n, i, a, u, s, c;
                        if (((a = i = t.length >>> 0), (n = []), (c = o()), a))
                            for (
                                u = function(t, i) {
                                    e(t, r).then(function(e) {
                                        (n[i] = e), --a || c.resolve(n);
                                    }, c.reject);
                                },
                                    s = 0;
                                s < i;
                                s++
                            )
                                s in t ? u(t[s], s) : --a;
                        else c.resolve(n);
                        return c.promise;
                    });
                }
                function d(t, r) {
                    var n = T.call(arguments, 1);
                    return e(t, function(t) {
                        var i;
                        return (
                            (i = t.length),
                            (n[0] = function(t, n, a) {
                                return e(t, function(t) {
                                    return e(n, function(e) {
                                        return r(t, e, a, i);
                                    });
                                });
                            }),
                            v.apply(t, n)
                        );
                    });
                }
                function p(t, r, n) {
                    var i = arguments.length > 2;
                    return e(
                        t,
                        function(e) {
                            return (e = i ? n : e), r.resolve(e), e;
                        },
                        function(e) {
                            return r.reject(e), a(e);
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
                            var t, r, n, i, a;
                            if (
                                ((a = 0),
                                (t = Object(this)),
                                (i = t.length >>> 0),
                                (r = arguments),
                                r.length <= 1)
                            )
                                for (;;) {
                                    if (a in t) {
                                        n = t[a++];
                                        break;
                                    }
                                    if (++a >= i) throw new TypeError();
                                }
                            else n = r[1];
                            for (; a < i; ++a) a in t && (n = e(n, t[a], a, t));
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
                for (var n, i, a = 0, o = e.length - 1; a <= o; )
                    if (((n = ~~((a + o) / 2)), (i = r(e[n], t)) < 0)) a = n + 1;
                    else {
                        if (!(i > 0)) return n;
                        o = n - 1;
                    }
                return ~(o + 1);
            }
            return t;
        }),
        define("Core/EarthOrientationParametersSample", [], function() {
            "use strict";
            function e(e, t, r, n, i) {
                (this.xPoleWander = e),
                    (this.yPoleWander = t),
                    (this.xPoleOffset = r),
                    (this.yPoleOffset = n),
                    (this.ut1MinusUtc = i);
            }
            return e;
        }),
        define("ThirdParty/sprintf", [], function() {
            function e() {
                var e = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g,
                    t = arguments,
                    r = 0,
                    n = t[r++],
                    i = function(e, t, r, n) {
                        r || (r = " ");
                        var i = e.length >= t ? "" : Array((1 + t - e.length) >>> 0).join(r);
                        return n ? e + i : i + e;
                    },
                    a = function(e, t, r, n, a, o) {
                        var u = n - e.length;
                        return (
                            u > 0 &&
                                (e =
                                    r || !a
                                        ? i(e, n, o, r)
                                        : e.slice(0, t.length) +
                                          i("", u, "0", !0) +
                                          e.slice(t.length)),
                            e
                        );
                    },
                    o = function(e, t, r, n, o, u, s) {
                        var c = e >>> 0;
                        return (
                            (r = (r && c && { 2: "0b", 8: "0", 16: "0x" }[t]) || ""),
                            (e = r + i(c.toString(t), u || 0, "0", !1)),
                            a(e, r, n, o, s)
                        );
                    },
                    u = function(e, t, r, n, i, o) {
                        return null != n && (e = e.slice(0, n)), a(e, "", t, r, i, o);
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
                                    (E = p + i(String(Math.abs(d)), f, "0", !1)),
                                    a(E, p, _, c, T)
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
                                    a(E, p, _, c, T)[m]()
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
            function e(e, t, r, n, i, a, o, u) {
                (this.year = e),
                    (this.month = t),
                    (this.day = r),
                    (this.hour = n),
                    (this.minute = i),
                    (this.second = a),
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
        ], function(e, t, r, n, i, a, o, u, s, c) {
            "use strict";
            function l(e, t) {
                return y.compare(e.julianDate, t.julianDate);
            }
            function f(e) {
                _.julianDate = e;
                var r = y.leapSeconds,
                    n = t(r, _, l);
                n < 0 && (n = ~n), n >= r.length && (n = r.length - 1);
                var i = r[n].offset;
                if (n > 0) {
                    y.secondsDifference(r[n].julianDate, e) > i && (n--, (i = r[n].offset));
                }
                y.addSeconds(e, i, e);
            }
            function h(e, r) {
                _.julianDate = e;
                var n = y.leapSeconds,
                    i = t(n, _, l);
                if ((i < 0 && (i = ~i), 0 === i)) return y.addSeconds(e, -n[0].offset, r);
                if (i >= n.length) return y.addSeconds(e, -n[i - 1].offset, r);
                var a = y.secondsDifference(n[i].julianDate, e);
                return 0 === a
                    ? y.addSeconds(e, -n[i].offset, r)
                    : a <= 1
                    ? void 0
                    : y.addSeconds(e, -n[--i].offset, r);
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
            function p(e, t, r, n, i, a, o) {
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
                    a +
                    (n * s.SECONDS_PER_HOUR +
                        i * s.SECONDS_PER_MINUTE +
                        o * s.SECONDS_PER_MILLISECOND);
                return f >= 43200 && (l -= 1), [l, f];
            }
            function y(e, t, n) {
                (this.dayNumber = void 0),
                    (this.secondsOfDay = void 0),
                    (e = r(e, 0)),
                    (t = r(t, 0)),
                    (n = r(n, c.UTC));
                var i = 0 | e;
                (t += (e - i) * s.SECONDS_PER_DAY), d(i, t, this), n === c.UTC && f(this);
            }
            var m = new a(),
                E = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                _ = new u(),
                v = /^(\d{4})$/,
                T = /^(\d{4})-(\d{2})$/,
                R = /^(\d{4})-?(\d{3})$/,
                A = /^(\d{4})-?W(\d{2})-?(\d{1})?$/,
                g = /^(\d{4})-?(\d{2})-?(\d{2})$/,
                S = /([Z+\-])?(\d{2})?:?(\d{2})?$/,
                N = /^(\d{2})(\.\d+)?/.source + S.source,
                I = /^(\d{2}):?(\d{2})(\.\d+)?/.source + S.source,
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
                        i,
                        a,
                        u = e.split("T"),
                        s = 1,
                        l = 1,
                        h = 0,
                        m = 0,
                        _ = 0,
                        S = 0,
                        w = u[0],
                        x = u[1];
                    if (null !== (u = w.match(g))) (r = +u[1]), (s = +u[2]), (l = +u[3]);
                    else if (null !== (u = w.match(T))) (r = +u[1]), (s = +u[2]);
                    else if (null !== (u = w.match(v))) r = +u[1];
                    else {
                        var M;
                        if (null !== (u = w.match(R))) (r = +u[1]), (M = +u[2]), (a = o(r));
                        else if (null !== (u = w.match(A))) {
                            r = +u[1];
                            var C = +u[2],
                                P = +u[3] || 0,
                                b = new Date(Date.UTC(r, 0, 4));
                            M = 7 * C + P - b.getUTCDay() - 3;
                        }
                        (i = new Date(Date.UTC(r, 0, 1))),
                            i.setUTCDate(M),
                            (s = i.getUTCMonth() + 1),
                            (l = i.getUTCDate());
                    }
                    a = o(r);
                    var U;
                    if (n(x)) {
                        (u = x.match(O)),
                            null !== u
                                ? ((h = +u[1]),
                                  (m = +u[2]),
                                  (_ = +u[3]),
                                  (S = 1e3 * +(u[4] || 0)),
                                  (U = 5))
                                : ((u = x.match(I)),
                                  null !== u
                                      ? ((h = +u[1]), (m = +u[2]), (_ = 60 * +(u[3] || 0)), (U = 4))
                                      : null !== (u = x.match(N)) &&
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
                    for (i = a && 2 === s ? 29 : E[s - 1]; l > i; )
                        (l -= i),
                            s++,
                            s > 12 && ((s -= 12), r++),
                            (i = a && 2 === s ? 29 : E[s - 1]);
                    for (; m < 0; ) (m += 60), h--;
                    for (; h < 0; ) (h += 24), l--;
                    for (; l < 1; )
                        s--,
                            s < 1 && ((s += 12), r--),
                            (i = a && 2 === s ? 29 : E[s - 1]),
                            (l += i);
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
            var w = new y(0, 0, c.TAI);
            return (
                (y.toGregorianDate = function(e, t) {
                    var r = !1,
                        i = h(e, w);
                    n(i) || (y.addSeconds(e, -1, w), (i = h(w, w)), (r = !0));
                    var o = i.dayNumber,
                        u = i.secondsOfDay;
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
                            : new a(E, m, p, _, T, R, A, r)
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
                    var i = y.toGregorianDate(t, m),
                        a = i.year,
                        o = i.month,
                        u = i.day,
                        s = i.hour,
                        c = i.minute,
                        l = i.second,
                        f = i.millisecond;
                    1e4 === a &&
                        1 === o &&
                        1 === u &&
                        0 === s &&
                        0 === c &&
                        0 === l &&
                        0 === f &&
                        ((a = 9999), (o = 12), (u = 31), (s = 24));
                    var h;
                    return n(r) || 0 === f
                        ? n(r) && 0 !== r
                            ? ((h = (0.01 * f)
                                  .toFixed(r)
                                  .replace(".", "")
                                  .slice(0, r)),
                              e("%04d-%02d-%02dT%02d:%02d:%02d.%sZ", a, o, u, s, c, l, h))
                            : e("%04d-%02d-%02dT%02d:%02d:%02dZ", a, o, u, s, c, l)
                        : ((h = (0.01 * f).toString().replace(".", "")),
                          e("%04d-%02d-%02dT%02d:%02d:%02d.%sZ", a, o, u, s, c, l, h));
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
                return a.test(t) ? t : e.toUpperCase();
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
                            (this.authority = this.authority.replace(o, r).replace(i, t)),
                        this.path && (this.path = this.path.replace(i, t)),
                        this.query && (this.query = this.query.replace(i, t)),
                        this.fragment && (this.fragment = this.fragment.replace(i, t));
                });
            var i = /%[0-9a-z]{2}/gi,
                a = /[a-zA-Z0-9\-\._~]/,
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
                var i = new r.constructor();
                for (var a in r)
                    if (r.hasOwnProperty(a)) {
                        var o = r[a];
                        n && (o = t(o, n)), (i[a] = o);
                    }
                return i;
            }
            return t;
        }),
        define("Core/combine", ["./defaultValue", "./defined"], function(e, t) {
            "use strict";
            function r(n, i, a) {
                a = e(a, !1);
                var o,
                    u,
                    s,
                    c = {},
                    l = t(n),
                    f = t(i);
                if (l)
                    for (o in n)
                        n.hasOwnProperty(o) &&
                            ((u = n[o]),
                            f && a && "object" == typeof u && i.hasOwnProperty(o)
                                ? ((s = i[o]), (c[o] = "object" == typeof s ? r(u, s, a) : u))
                                : (c[o] = u));
                if (f)
                    for (o in i)
                        i.hasOwnProperty(o) && !c.hasOwnProperty(o) && ((s = i[o]), (c[o] = s));
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
                t(i[r]) || ((i[r] = !0), console.warn(e(n, r)));
            }
            var i = {};
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
            function i(e, t) {
                var r;
                return "undefined" != typeof document && (r = document), i._implementation(e, t, r);
            }
            return (
                (i._implementation = function(n, i, a) {
                    if (!r(i)) {
                        if (void 0 === a) return n;
                        i = t(a.baseURI, a.location.href);
                    }
                    var o = new e(i);
                    return new e(n).resolve(o).toString();
                }),
                i
            );
        }),
        define("Core/getBaseUri", ["../ThirdParty/Uri", "./defined", "./DeveloperError"], function(
            e,
            t,
            r
        ) {
            "use strict";
            function n(r, n) {
                var i = "",
                    a = r.lastIndexOf("/");
                return (
                    -1 !== a && (i = r.substring(0, a + 1)),
                    n
                        ? ((r = new e(r)),
                          t(r.query) && (i += "?" + r.query),
                          t(r.fragment) && (i += "#" + r.fragment),
                          i)
                        : i
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
                    i = n.lastIndexOf("/");
                return (
                    -1 !== i && (n = n.substr(i + 1)),
                    (i = n.lastIndexOf(".")),
                    (n = -1 === i ? "" : n.substr(i + 1))
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
                    i = r.protocol;
                return (r.href = t), (r.href = r.href), i !== r.protocol || n !== r.host;
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
                var i = document.getElementsByTagName("head")[0];
                return (
                    (n.onload = function() {
                        (n.onload = void 0), i.removeChild(n), r.resolve();
                    }),
                    (n.onerror = function(e) {
                        r.reject(e);
                    }),
                    i.appendChild(n),
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
                        var i = e[n],
                            a = encodeURIComponent(n) + "=";
                        if (r(i))
                            for (var o = 0, u = i.length; o < u; ++o)
                                t += a + encodeURIComponent(i[o]) + "&";
                        else t += a + encodeURIComponent(i) + "&";
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
                    var i = t.replace(/\+/g, "%20").split(/[&;]/), a = 0, o = i.length;
                    a < o;
                    ++a
                ) {
                    var u = i[a].split("="),
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
            function i(t) {
                t = e(t, e.EMPTY_OBJECT);
                var i = e(t.throttleByServer, !1),
                    a = i || e(t.throttle, !1);
                (this.url = t.url),
                    (this.requestFunction = t.requestFunction),
                    (this.cancelFunction = t.cancelFunction),
                    (this.priorityFunction = t.priorityFunction),
                    (this.priority = e(t.priority, 0)),
                    (this.throttle = a),
                    (this.throttleByServer = i),
                    (this.type = e(t.type, n.OTHER)),
                    (this.serverKey = void 0),
                    (this.state = r.UNISSUED),
                    (this.deferred = void 0),
                    (this.cancelled = !1);
            }
            return (
                (i.prototype.cancel = function() {
                    this.cancelled = !0;
                }),
                (i.prototype.clone = function(e) {
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
                        : new i(this);
                }),
                i
            );
        }),
        define("Core/parseResponseHeaders", [], function() {
            "use strict";
            function e(e) {
                var t = {};
                if (!e) return t;
                for (var r = e.split("\r\n"), n = 0; n < r.length; ++n) {
                    var i = r[n],
                        a = i.indexOf(": ");
                    if (a > 0) {
                        var o = i.substring(0, a),
                            u = i.substring(a + 2);
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
            function i(e, t) {
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
                        var r = this._listeners, n = this._scopes, i = -1, a = 0;
                        a < r.length;
                        a++
                    )
                        if (r[a] === e && n[a] === t) {
                            i = a;
                            break;
                        }
                    return (
                        -1 !== i &&
                        (this._insideRaiseEvent
                            ? (this._toRemove.push(i), (r[i] = void 0), (n[i] = void 0))
                            : (r.splice(i, 1), n.splice(i, 1)),
                        !0)
                    );
                }),
                (n.prototype.raiseEvent = function() {
                    this._insideRaiseEvent = !0;
                    var e,
                        r = this._listeners,
                        n = this._scopes,
                        a = r.length;
                    for (e = 0; e < a; e++) {
                        var o = r[e];
                        t(o) && r[e].apply(n[e], arguments);
                    }
                    var u = this._toRemove;
                    if ((a = u.length) > 0) {
                        for (u.sort(i), e = 0; e < a; e++) {
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
            function i(e) {
                (this._comparator = e.comparator),
                    (this._array = []),
                    (this._length = 0),
                    (this._maximumLength = void 0);
            }
            function a(e, t, r) {
                var n = e[t];
                (e[t] = e[r]), (e[r] = n);
            }
            return (
                n(i.prototype, {
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
                (i.prototype.reserve = function(e) {
                    (e = t(e, this._length)), (this._array.length = e);
                }),
                (i.prototype.heapify = function(e) {
                    e = t(e, 0);
                    for (
                        var r = this._length, n = this._comparator, i = this._array, o = -1, u = !0;
                        u;

                    ) {
                        var s = 2 * (e + 1),
                            c = s - 1;
                        (o = c < r && n(i[c], i[e]) < 0 ? c : e),
                            s < r && n(i[s], i[o]) < 0 && (o = s),
                            o !== e ? (a(i, o, e), (e = o)) : (u = !1);
                    }
                }),
                (i.prototype.resort = function() {
                    for (var e = this._length, t = Math.ceil(e / 2); t >= 0; --t) this.heapify(t);
                }),
                (i.prototype.insert = function(e) {
                    var t = this._array,
                        n = this._comparator,
                        i = this._maximumLength,
                        o = this._length++;
                    for (o < t.length ? (t[o] = e) : t.push(e); 0 !== o; ) {
                        var u = Math.floor((o - 1) / 2);
                        if (!(n(t[o], t[u]) < 0)) break;
                        a(t, o, u), (o = u);
                    }
                    var s;
                    return r(i) && this._length > i && ((s = t[i]), (this._length = i)), s;
                }),
                (i.prototype.pop = function(e) {
                    if (((e = t(e, 0)), 0 !== this._length)) {
                        var r = this._array,
                            n = r[e];
                        return a(r, e, --this._length), this.heapify(e), n;
                    }
                }),
                i
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
        ], function(e, t, r, n, i, a, o, u, s, c, l) {
            "use strict";
            function f(e, t) {
                return e.priority - t.priority;
            }
            function h() {}
            function d(e) {
                i(e.priorityFunction) && (e.priority = e.priorityFunction());
            }
            function p(e) {
                var t = n(h.requestsByServer[e], h.maximumRequestsPerServer);
                return I[e] < t;
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
                        --I[e.serverKey],
                        w.raiseEvent(),
                        (e.state = l.RECEIVED),
                        e.deferred.resolve(t));
                };
            }
            function E(e) {
                return function(t) {
                    e.state !== l.CANCELLED &&
                        (++A.numberOfFailedRequests,
                        --A.numberOfActiveRequests,
                        --I[e.serverKey],
                        w.raiseEvent(t),
                        (e.state = l.FAILED),
                        e.deferred.reject(t));
                };
            }
            function _(e) {
                var t = y(e);
                return (
                    (e.state = l.ACTIVE),
                    N.push(e),
                    ++A.numberOfActiveRequests,
                    ++A.numberOfActiveRequestsEver,
                    ++I[e.serverKey],
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
                        --I[e.serverKey],
                        ++A.numberOfCancelledActiveRequests),
                    i(e.cancelFunction) && e.cancelFunction();
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
            var N = [],
                I = {},
                O = "undefined" != typeof document ? new e(document.location.href) : new e(),
                w = new o();
            return (
                (h.maximumRequests = 50),
                (h.maximumRequestsPerServer = 6),
                (h.requestsByServer = { "api.cesium.com:443": 18, "assets.cesium.com:443": 18 }),
                (h.throttleRequests = !0),
                (h.debugShowStatistics = !1),
                (h.requestCompletedEvent = w),
                a(h, {
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
                        n = N.length;
                    for (e = 0; e < n; ++e)
                        (t = N[e]),
                            t.cancelled && v(t),
                            t.state === l.ACTIVE ? r > 0 && (N[e - r] = t) : ++r;
                    N.length -= r;
                    var i = S.internalArray,
                        a = S.length;
                    for (e = 0; e < a; ++e) d(i[e]);
                    S.resort();
                    for (
                        var o = Math.max(h.maximumRequests - N.length, 0), u = 0;
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
                    var a = I[n];
                    return i(a) || (I[n] = 0), n;
                }),
                (h.request = function(e) {
                    if (c(e.url) || s(e.url))
                        return w.raiseEvent(), (e.state = l.RECEIVED), e.requestFunction();
                    if (
                        (++A.numberOfAttemptedRequests,
                        i(e.serverKey) || (e.serverKey = h.getServerKey(e.url)),
                        !h.throttleRequests || !e.throttle)
                    )
                        return _(e);
                    if (
                        !(N.length >= h.maximumRequests) &&
                        (!e.throttleByServer || p(e.serverKey))
                    ) {
                        d(e);
                        var t = S.insert(e);
                        if (i(t)) {
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
                    for (var e = N.length, t = 0; t < e; ++t) v(N[t]);
                    (N.length = 0),
                        (I = {}),
                        (A.numberOfAttemptedRequests = 0),
                        (A.numberOfActiveRequests = 0),
                        (A.numberOfCancelledRequests = 0),
                        (A.numberOfCancelledActiveRequests = 0),
                        (A.numberOfFailedRequests = 0),
                        (A.numberOfActiveRequestsEver = 0);
                }),
                (h.numberOfActiveRequestsByServer = function(e) {
                    return I[e];
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
                var i = n.getAuthority();
                if (t(i)) {
                    if (-1 !== i.indexOf("@")) {
                        i = i.split("@")[1];
                    }
                    if (-1 === i.indexOf(":")) {
                        var a = n.getScheme();
                        if (
                            (t(a) ||
                                ((a = window.location.protocol),
                                (a = a.substring(0, a.length - 1))),
                            "http" === a)
                        )
                            i += ":80";
                        else {
                            if ("https" !== a) return;
                            i += ":443";
                        }
                    }
                    return i;
                }
            }
            var i = {},
                a = {};
            return (
                (i.add = function(e, r) {
                    var n = e.toLowerCase() + ":" + r;
                    t(a[n]) || (a[n] = !0);
                }),
                (i.remove = function(e, r) {
                    var n = e.toLowerCase() + ":" + r;
                    t(a[n]) && delete a[n];
                }),
                (i.contains = function(e) {
                    var r = n(e);
                    return !(!t(r) || !t(a[r]));
                }),
                (i.clear = function() {
                    a = {};
                }),
                i
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
            i,
            a,
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
            N,
            I
        ) {
            "use strict";
            function O(e, t, r, n) {
                var i = e.query;
                if (!u(i) || 0 === i.length) return {};
                var a;
                if (-1 === i.indexOf("=")) {
                    var o = {};
                    (o[i] = void 0), (a = o);
                } else a = T(i);
                (t._queryParameters = r ? C(a, t._queryParameters, n) : a), (e.query = void 0);
            }
            function w(e, t) {
                var r = t._queryParameters,
                    n = Object.keys(r);
                1 !== n.length || u(r[n[0]]) ? (e.query = v(r)) : (e.query = n[0]);
            }
            function x(e, t) {
                return u(e) ? (u(e.clone) ? e.clone() : i(e)) : t;
            }
            function M(e) {
                if (e.state === S.ISSUED || e.state === S.ACTIVE)
                    throw new N("The Resource is already being fetched.");
                (e.state = S.UNISSUED), (e.deferred = void 0);
            }
            function C(e, t, r) {
                if (!r) return a(e, t);
                var n = i(e, !0);
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
                        var i = t.defer();
                        return P._Implementations.createImage(r, n, i), i.promise;
                    });
                var n = g.request(r);
                if (u(n))
                    return n.otherwise(function(n) {
                        return r.state !== S.FAILED
                            ? t.reject(n)
                            : e.retryOnError(n).then(function(i) {
                                  return i
                                      ? ((r.state = S.UNISSUED), (r.deferred = void 0), b(e))
                                      : t.reject(n);
                              });
                    });
            }
            function U(e, r, n) {
                var i = {};
                (i[r] = n), e.setQueryParameters(i);
                var a = e.request;
                (a.url = e.url),
                    (a.requestFunction = function() {
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
                var o = g.request(a);
                if (u(o))
                    return o.otherwise(function(i) {
                        return a.state !== S.FAILED
                            ? t.reject(i)
                            : e.retryOnError(i).then(function(o) {
                                  return o
                                      ? ((a.state = S.UNISSUED), (a.deferred = void 0), U(e, r, n))
                                      : t.reject(i);
                              });
                    });
            }
            function D(e, t) {
                var r = decodeURIComponent(t);
                return e ? atob(r) : r;
            }
            function L(e, t) {
                for (
                    var r = D(e, t), n = new ArrayBuffer(r.length), i = new Uint8Array(n), a = 0;
                    a < r.length;
                    a++
                )
                    i[a] = r.charCodeAt(a);
                return n;
            }
            function F(e, t) {
                t = o(t, "");
                var r = e[1],
                    n = !!e[2],
                    i = e[3];
                switch (t) {
                    case "":
                    case "text":
                        return D(n, i);
                    case "arraybuffer":
                        return L(n, i);
                    case "blob":
                        var a = L(n, i);
                        return new Blob([a], { type: r });
                    case "document":
                        return new DOMParser().parseFromString(D(n, i), r);
                    case "json":
                        return JSON.parse(D(n, i));
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
            function z(e, t, r, n, i, a, o) {
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
                        headers: i
                    };
                s.request(l)
                    .on("response", function(e) {
                        if (e.statusCode < 200 || e.statusCode >= 300)
                            return void a.reject(new A(e.statusCode, e, e.headers));
                        var r = [];
                        e.on("data", function(e) {
                            r.push(e);
                        }),
                            e.on("end", function() {
                                var n = Buffer.concat(r);
                                "gzip" === e.headers["content-encoding"]
                                    ? c.gunzip(n, function(e, r) {
                                          e
                                              ? a.reject(new N("Error decompressing response."))
                                              : a.resolve(B(r, t));
                                      })
                                    : a.resolve(B(n, t));
                            });
                    })
                    .on("error", function(e) {
                        a.reject(new A());
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
                    t && w(n, this);
                    var i = n
                            .toString()
                            .replace(/%7B/g, "{")
                            .replace(/%7D/g, "}"),
                        a = this._templateValues,
                        o = Object.keys(a);
                    if (o.length > 0)
                        for (var s = 0; s < o.length; s++) {
                            var c = o[s],
                                l = a[c];
                            i = i.replace(new RegExp("{" + c + "}", "g"), encodeURIComponent(l));
                        }
                    return r && u(this.proxy) && (i = this.proxy.getURL(i)), i;
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
                        ? a(this._templateValues, e)
                        : a(e, this._templateValues);
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
                            (r._queryParameters = a(t.queryParameters, r._queryParameters)),
                        u(t.templateValues) &&
                            (r._templateValues = a(t.templateValues, r.templateValues)),
                        u(t.headers) && (r.headers = a(t.headers, r.headers)),
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
                        (e._queryParameters = i(this._queryParameters)),
                        (e._templateValues = i(this._templateValues)),
                        (e.headers = i(this.headers)),
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
                        var n, i;
                        return r
                            .then(function(e) {
                                if (u(e)) {
                                    i = e;
                                    var t = window.URL.createObjectURL(e);
                                    return (n = new P({ url: t })), b(n);
                                }
                            })
                            .then(function(e) {
                                if (u(e)) return window.URL.revokeObjectURL(n.url), (e.blob = i), e;
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
                            var i = e.responseType,
                                o = a(e.headers, r.headers),
                                s = e.overrideMimeType,
                                c = e.method,
                                l = e.data,
                                f = t.defer(),
                                h = P._Implementations.loadWithXhr(r.url, i, c, l, o, f, s);
                            return (
                                u(h) &&
                                    u(h.abort) &&
                                    (n.cancelFunction = function() {
                                        h.abort();
                                    }),
                                f.promise
                            );
                        });
                    var i = g.request(n);
                    if (u(i))
                        return i
                            .then(function(e) {
                                return e;
                            })
                            .otherwise(function(i) {
                                return n.state !== S.FAILED
                                    ? t.reject(i)
                                    : r.retryOnError(i).then(function(a) {
                                          return a
                                              ? ((n.state = S.UNISSUED),
                                                (n.deferred = void 0),
                                                r.fetch(e))
                                              : t.reject(i);
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
                            (I.contains(e)
                                ? (n.crossOrigin = "use-credentials")
                                : (n.crossOrigin = "")),
                        (n.src = e);
                });
            var V = "undefined" == typeof XMLHttpRequest;
            return (
                (P._Implementations.loadWithXhr = function(e, t, r, n, i, a, o) {
                    var s = G.exec(e);
                    if (null !== s) return void a.resolve(F(s, t));
                    if (V) return void z(e, t, r, n, i, a, o);
                    var c = new XMLHttpRequest();
                    if (
                        (I.contains(e) && (c.withCredentials = !0),
                        c.open(r, e, !0),
                        u(o) && u(c.overrideMimeType) && c.overrideMimeType(o),
                        u(i))
                    )
                        for (var l in i) i.hasOwnProperty(l) && c.setRequestHeader(l, i[l]);
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
                                return void a.reject(
                                    new A(c.status, c.response, c.getAllResponseHeaders())
                                );
                            var e = c.response,
                                n = c.responseType;
                            if ("HEAD" === r || "OPTIONS" === r) {
                                var i = c.getAllResponseHeaders(),
                                    o = i.trim().split(/[\r\n]+/),
                                    s = {};
                                return (
                                    o.forEach(function(e) {
                                        var t = e.split(": "),
                                            r = t.shift();
                                        s[r] = t.join(": ");
                                    }),
                                    void a.resolve(s)
                                );
                            }
                            if (204 === c.status) a.resolve();
                            else if (!u(e) || (u(t) && n !== t))
                                if ("json" === t && "string" == typeof e)
                                    try {
                                        a.resolve(JSON.parse(e));
                                    } catch (e) {
                                        a.reject(e);
                                    }
                                else
                                    ("" === n || "document" === n) &&
                                    u(c.responseXML) &&
                                    c.responseXML.hasChildNodes()
                                        ? a.resolve(c.responseXML)
                                        : ("" !== n && "text" !== n) || !u(c.responseText)
                                        ? a.reject(new N("Invalid XMLHttpRequest response type."))
                                        : a.resolve(c.responseText);
                            else a.resolve(e);
                        }),
                        (c.onerror = function(e) {
                            a.reject(new A());
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
        ], function(e, t, r, n, i, a, o, u, s, c, l, f) {
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
                    var i = s.createIfNeeded(t.url),
                        a = this;
                    this._downloadPromise = e(
                        i.fetchJson(),
                        function(e) {
                            p(a, e);
                        },
                        function() {
                            a._dataError =
                                "An error occurred while retrieving the EOP data from the URL " +
                                i.url +
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
                var i = r.columnNames.indexOf("modifiedJulianDateUtc"),
                    a = r.columnNames.indexOf("xPoleWanderRadians"),
                    s = r.columnNames.indexOf("yPoleWanderRadians"),
                    c = r.columnNames.indexOf("ut1MinusUtcSeconds"),
                    h = r.columnNames.indexOf("xCelestialPoleOffsetRadians"),
                    p = r.columnNames.indexOf("yCelestialPoleOffsetRadians"),
                    y = r.columnNames.indexOf("taiMinusUtcSeconds");
                if (i < 0 || a < 0 || s < 0 || c < 0 || h < 0 || p < 0 || y < 0)
                    return void (e._dataError =
                        "Error in loaded EOP data: The columnNames property must include modifiedJulianDateUtc, xPoleWanderRadians, yPoleWanderRadians, ut1MinusUtcSeconds, xCelestialPoleOffsetRadians, yCelestialPoleOffsetRadians, and taiMinusUtcSeconds columns");
                var m = (e._samples = r.samples),
                    E = (e._dates = []);
                (e._dateColumn = i),
                    (e._xPoleWanderRadiansColumn = a),
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
                    var A = m[T + i],
                        g = m[T + y],
                        S = A + l.MODIFIED_JULIAN_DATE_DIFFERENCE,
                        N = new o(S, g, f.TAI);
                    if ((E.push(N), v)) {
                        if (g !== _ && n(_)) {
                            var I = o.leapSeconds,
                                O = t(I, N, d);
                            if (O < 0) {
                                var w = new u(N, g);
                                I.splice(~O, 0, w);
                            }
                        }
                        _ = g;
                    }
                }
            }
            function y(e, t, r, n, i) {
                var a = r * n;
                (i.xPoleWander = t[a + e._xPoleWanderRadiansColumn]),
                    (i.yPoleWander = t[a + e._yPoleWanderRadiansColumn]),
                    (i.xPoleOffset = t[a + e._xCelestialPoleOffsetRadiansColumn]),
                    (i.yPoleOffset = t[a + e._yCelestialPoleOffsetRadiansColumn]),
                    (i.ut1MinusUtc = t[a + e._ut1MinusUtcSecondsColumn]);
            }
            function m(e, t, r) {
                return t + e * (r - t);
            }
            function E(e, t, r, n, i, a, u) {
                var s = e._columnCount;
                if (a > t.length - 1)
                    return (
                        (u.xPoleWander = 0),
                        (u.yPoleWander = 0),
                        (u.xPoleOffset = 0),
                        (u.yPoleOffset = 0),
                        (u.ut1MinusUtc = 0),
                        u
                    );
                var c = t[i],
                    l = t[a];
                if (c.equals(l) || n.equals(c)) return y(e, r, i, s, u), u;
                if (n.equals(l)) return y(e, r, a, s, u), u;
                var f = o.secondsDifference(n, c) / o.secondsDifference(l, c),
                    h = i * s,
                    d = a * s,
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
                (h.NONE = a({
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
                                : (t = new i(0, 0, 0, 0, 0)),
                            t
                        );
                    }
                })),
                (h.prototype.getPromiseToLoad = function() {
                    return e(this._downloadPromise);
                }),
                (h.prototype.compute = function(e, r) {
                    if (n(this._samples)) {
                        if ((n(r) || (r = new i(0, 0, 0, 0, 0)), 0 === this._samples.length))
                            return (
                                (r.xPoleWander = 0),
                                (r.yPoleWander = 0),
                                (r.xPoleOffset = 0),
                                (r.yPoleOffset = 0),
                                (r.ut1MinusUtc = 0),
                                r
                            );
                        var a = this._dates,
                            u = this._lastIndex,
                            s = 0,
                            l = 0;
                        if (n(u)) {
                            var f = a[u],
                                h = a[u + 1],
                                d = o.lessThanOrEquals(f, e),
                                p = !n(h),
                                y = p || o.greaterThanOrEquals(h, e);
                            if (d && y)
                                return (
                                    (s = u),
                                    !p && h.equals(e) && ++s,
                                    (l = s + 1),
                                    E(this, a, this._samples, e, s, l, r),
                                    r
                                );
                        }
                        var m = t(a, e, o.compare, this._dateColumn);
                        return (
                            m >= 0
                                ? (m < a.length - 1 && a[m + 1].equals(e) && ++m, (s = m), (l = m))
                                : ((l = ~m), (s = l - 1) < 0 && (s = 0)),
                            (this._lastIndex = s),
                            E(this, a, this._samples, e, s, l, r),
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
            function i(t, r, n) {
                (this.heading = e(t, 0)), (this.pitch = e(r, 0)), (this.roll = e(n, 0));
            }
            return (
                (i.fromQuaternion = function(e, r) {
                    t(r) || (r = new i());
                    var n = 2 * (e.w * e.y - e.z * e.x),
                        a = 1 - 2 * (e.x * e.x + e.y * e.y),
                        o = 2 * (e.w * e.x + e.y * e.z),
                        u = 1 - 2 * (e.y * e.y + e.z * e.z),
                        s = 2 * (e.w * e.z + e.x * e.y);
                    return (
                        (r.heading = -Math.atan2(s, u)),
                        (r.roll = Math.atan2(o, a)),
                        (r.pitch = -Math.asin(n)),
                        r
                    );
                }),
                (i.fromDegrees = function(e, r, a, o) {
                    return (
                        t(o) || (o = new i()),
                        (o.heading = e * n.RADIANS_PER_DEGREE),
                        (o.pitch = r * n.RADIANS_PER_DEGREE),
                        (o.roll = a * n.RADIANS_PER_DEGREE),
                        o
                    );
                }),
                (i.clone = function(e, r) {
                    if (t(e))
                        return t(r)
                            ? ((r.heading = e.heading), (r.pitch = e.pitch), (r.roll = e.roll), r)
                            : new i(e.heading, e.pitch, e.roll);
                }),
                (i.equals = function(e, r) {
                    return (
                        e === r ||
                        (t(e) &&
                            t(r) &&
                            e.heading === r.heading &&
                            e.pitch === r.pitch &&
                            e.roll === r.roll)
                    );
                }),
                (i.equalsEpsilon = function(e, r, i, a) {
                    return (
                        e === r ||
                        (t(e) &&
                            t(r) &&
                            n.equalsEpsilon(e.heading, r.heading, i, a) &&
                            n.equalsEpsilon(e.pitch, r.pitch, i, a) &&
                            n.equalsEpsilon(e.roll, r.roll, i, a))
                    );
                }),
                (i.prototype.clone = function(e) {
                    return i.clone(this, e);
                }),
                (i.prototype.equals = function(e) {
                    return i.equals(this, e);
                }),
                (i.prototype.equalsEpsilon = function(e, t, r) {
                    return i.equalsEpsilon(this, e, t, r);
                }),
                (i.prototype.toString = function() {
                    return "(" + this.heading + ", " + this.pitch + ", " + this.roll + ")";
                }),
                i
            );
        }),
        define("Core/buildModuleUrl", [
            "./defined",
            "./DeveloperError",
            "./getAbsoluteUri",
            "./Resource",
            "require"
        ], function(e, t, r, n, i) {
            "use strict";
            function a() {
                for (
                    var e = document.getElementsByTagName("script"), t = 0, r = e.length;
                    t < r;
                    ++t
                ) {
                    var n = e[t].getAttribute("src"),
                        i = p.exec(n);
                    if (null !== i) return i[1];
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
                            : e(define.amd) && !define.amd.toUrlUndefined && e(i.toUrl)
                            ? r("..", l("Core/buildModuleUrl.js"))
                            : a()),
                    (h = new n({ url: o(t) })),
                    h.appendForwardSlash(),
                    h
                );
            }
            function s(e) {
                return o(i.toUrl("../" + e));
            }
            function c(e) {
                return u().getDerivedResource({ url: e }).url;
            }
            function l(t) {
                return (
                    e(d) || (d = e(define.amd) && !define.amd.toUrlUndefined && e(i.toUrl) ? s : c),
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
        ], function(e, t, r, n, i, a, o, u) {
            "use strict";
            function s(e) {
                (e = r(e, r.EMPTY_OBJECT)),
                    (this._xysFileUrlTemplate = o.createIfNeeded(e.xysFileUrlTemplate)),
                    (this._interpolationOrder = r(e.interpolationOrder, 9)),
                    (this._sampleZeroJulianEphemerisDate = r(
                        e.sampleZeroJulianEphemerisDate,
                        2442396.5
                    )),
                    (this._sampleZeroDateTT = new a(this._sampleZeroJulianEphemerisDate, 0, u.TAI)),
                    (this._stepSizeDays = r(e.stepSizeDays, 1)),
                    (this._samplesPerXysFile = r(e.samplesPerXysFile, 1e3)),
                    (this._totalSamples = r(e.totalSamples, 27426)),
                    (this._samples = new Array(3 * this._totalSamples)),
                    (this._chunkDownloadsInProgress = []);
                for (
                    var t = this._interpolationOrder,
                        n = (this._denominators = new Array(t + 1)),
                        i = (this._xTable = new Array(t + 1)),
                        s = Math.pow(this._stepSizeDays, t),
                        c = 0;
                    c <= t;
                    ++c
                ) {
                    (n[c] = s), (i[c] = c * this._stepSizeDays);
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
                    a.daysDifference(n, e._sampleZeroDateTT)
                );
            }
            function l(r, i) {
                if (r._chunkDownloadsInProgress[i]) return r._chunkDownloadsInProgress[i];
                var a = e.defer();
                r._chunkDownloadsInProgress[i] = a;
                var u,
                    s = r._xysFileUrlTemplate;
                return (
                    (u = n(s)
                        ? s.getDerivedResource({ templateValues: { 0: i } })
                        : new o({ url: t("Assets/IAU2006_XYS/IAU2006_XYS_" + i + ".json") })),
                    e(u.fetchJson(), function(e) {
                        r._chunkDownloadsInProgress[i] = !1;
                        for (
                            var t = r._samples,
                                n = e.samples,
                                o = i * r._samplesPerXysFile * 3,
                                u = 0,
                                s = n.length;
                            u < s;
                            ++u
                        )
                            t[o + u] = n[u];
                        a.resolve();
                    }),
                    a.promise
                );
            }
            var f = new a(0, 0, u.TAI);
            return (
                (s.prototype.preload = function(t, r, n, i) {
                    var a = c(this, t, r),
                        o = c(this, n, i),
                        u = (a / this._stepSizeDays - this._interpolationOrder / 2) | 0;
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
                    var a = c(this, e, t);
                    if (!(a < 0)) {
                        var o = (a / this._stepSizeDays) | 0;
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
                                n(r) ? ((r.x = 0), (r.y = 0), (r.s = 0)) : (r = new i(0, 0, 0));
                                var p,
                                    y,
                                    m = a - s * this._stepSizeDays,
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
        define("Core/Quaternion", [
            "./Cartesian3",
            "./Check",
            "./defaultValue",
            "./defined",
            "./FeatureDetection",
            "./freezeObject",
            "./Math",
            "./Matrix3"
        ], function(e, t, r, n, i, a, o, u) {
            "use strict";
            function s(e, t, n, i) {
                (this.x = r(e, 0)), (this.y = r(t, 0)), (this.z = r(n, 0)), (this.w = r(i, 0));
            }
            var c = new e();
            s.fromAxisAngle = function(t, r, i) {
                var a = r / 2,
                    o = Math.sin(a);
                c = e.normalize(t, c);
                var u = c.x * o,
                    l = c.y * o,
                    f = c.z * o,
                    h = Math.cos(a);
                return n(i) ? ((i.x = u), (i.y = l), (i.z = f), (i.w = h), i) : new s(u, l, f, h);
            };
            var l = [1, 2, 0],
                f = new Array(3);
            s.fromRotationMatrix = function(e, t) {
                var r,
                    i,
                    a,
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
                        (i = (e[u.COLUMN1ROW2] - e[u.COLUMN2ROW1]) * r),
                        (a = (e[u.COLUMN2ROW0] - e[u.COLUMN0ROW2]) * r),
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
                        (i = -T[0]),
                        (a = -T[1]),
                        (o = -T[2]);
                }
                return n(t) ? ((t.x = i), (t.y = a), (t.z = o), (t.w = c), t) : new s(i, a, o, c);
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
                (s.unpack = function(e, t, i) {
                    return (
                        (t = r(t, 0)),
                        n(i) || (i = new s()),
                        (i.x = e[t]),
                        (i.y = e[t + 1]),
                        (i.z = e[t + 2]),
                        (i.w = e[t + 3]),
                        i
                    );
                }),
                (s.packedInterpolationLength = 3),
                (s.convertPackedArrayForInterpolation = function(e, t, r, n) {
                    s.unpack(e, 4 * r, T), s.conjugate(T, T);
                    for (var i = 0, a = r - t + 1; i < a; i++) {
                        var o = 3 * i;
                        s.unpack(e, 4 * (t + i), _),
                            s.multiply(_, T, _),
                            _.w < 0 && s.negate(_, _),
                            s.computeAxis(_, m);
                        var u = s.computeAngle(_);
                        (n[o] = m.x * u), (n[o + 1] = m.y * u), (n[o + 2] = m.z * u);
                    }
                }),
                (s.unpackInterpolationResult = function(t, r, i, a, o) {
                    n(o) || (o = new s()), e.fromArray(t, 0, E);
                    var u = e.magnitude(E);
                    return (
                        s.unpack(r, 4 * a, v),
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
                        i = e.y * r,
                        a = e.z * r,
                        o = e.w * r;
                    return (t.x = n), (t.y = i), (t.z = a), (t.w = o), t;
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
                        i = e.y,
                        a = e.z,
                        o = e.w,
                        u = t.x,
                        s = t.y,
                        c = t.z,
                        l = t.w,
                        f = o * u + n * l + i * c - a * s,
                        h = o * s - n * c + i * l + a * u,
                        d = o * c + n * s - i * u + a * l,
                        p = o * l - n * u - i * s - a * c;
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
                var i = s.dot(e, t),
                    a = t;
                if ((i < 0 && ((i = -i), (a = A = s.negate(t, A))), 1 - i < o.EPSILON6))
                    return s.lerp(e, a, r, n);
                var u = Math.acos(i);
                return (
                    (g = s.multiplyByScalar(e, Math.sin((1 - r) * u), g)),
                    (S = s.multiplyByScalar(a, Math.sin(r * u), S)),
                    (n = s.add(g, S, n)),
                    s.multiplyByScalar(n, 1 / Math.sin(u), n)
                );
            }),
                (s.log = function(t, r) {
                    var n = o.acosClamped(t.w),
                        i = 0;
                    return 0 !== n && (i = n / Math.sin(n)), e.multiplyByScalar(t, i, r);
                }),
                (s.exp = function(t, r) {
                    var n = e.magnitude(t),
                        i = 0;
                    return (
                        0 !== n && (i = Math.sin(n) / n),
                        (r.x = t.x * i),
                        (r.y = t.y * i),
                        (r.z = t.z * i),
                        (r.w = Math.cos(n)),
                        r
                    );
                });
            var N = new e(),
                I = new e(),
                O = new s(),
                w = new s();
            (s.computeInnerQuadrangle = function(t, r, n, i) {
                var a = s.conjugate(r, O);
                s.multiply(a, n, w);
                var o = s.log(w, N);
                s.multiply(a, t, w);
                var u = s.log(w, I);
                return (
                    e.add(o, u, o),
                    e.multiplyByScalar(o, 0.25, o),
                    e.negate(o, o),
                    s.exp(o, O),
                    s.multiply(r, O, i)
                );
            }),
                (s.squad = function(e, t, r, n, i, a) {
                    var o = s.slerp(e, t, i, O),
                        u = s.slerp(r, n, i, w);
                    return s.slerp(o, u, 2 * i * (1 - i), a);
                });
            for (
                var x = new s(),
                    M = 1.9011074535173003,
                    C = i.supportsTypedArrays() ? new Float32Array(8) : [],
                    P = i.supportsTypedArrays() ? new Float32Array(8) : [],
                    b = i.supportsTypedArrays() ? new Float32Array(8) : [],
                    U = i.supportsTypedArrays() ? new Float32Array(8) : [],
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
                    var i,
                        a = s.dot(e, t);
                    a >= 0 ? (i = 1) : ((i = -1), (a = -a));
                    for (var o = a - 1, u = 1 - r, c = r * r, l = u * u, f = 7; f >= 0; --f)
                        (b[f] = (C[f] * c - P[f]) * o), (U[f] = (C[f] * l - P[f]) * o);
                    var h =
                            i *
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
                (s.fastSquad = function(e, t, r, n, i, a) {
                    var o = s.fastSlerp(e, t, i, O),
                        u = s.fastSlerp(r, n, i, w);
                    return s.fastSlerp(o, u, 2 * i * (1 - i), a);
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
                (s.ZERO = a(new s(0, 0, 0, 0))),
                (s.IDENTITY = a(new s(0, 0, 0, 1))),
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
        ], function(e, t, r, n, i, a, o, u, s, c, l, f, h, d, p, y, m, E, _, v, T) {
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
                N = {
                    east: new r(),
                    north: new r(),
                    up: new r(),
                    west: new r(),
                    south: new r(),
                    down: new r()
                },
                I = new r(),
                O = new r(),
                w = new r();
            (R.localFrameToFixedFrameGenerator = function(e, t) {
                if (!A.hasOwnProperty(e) || !A[e].hasOwnProperty(t))
                    throw new s(
                        "firstAxis and secondAxis must be east, north, up, west, south or down."
                    );
                var n,
                    i = A[e][t],
                    a = e + t;
                return (
                    u(S[a])
                        ? (n = S[a])
                        : ((n = function(n, a, s) {
                              if (
                                  (u(s) || (s = new _()),
                                  m.equalsEpsilon(n.x, 0, m.EPSILON14) &&
                                      m.equalsEpsilon(n.y, 0, m.EPSILON14))
                              ) {
                                  var c = m.sign(n.z);
                                  r.unpack(g[e], 0, I),
                                      "east" !== e && "west" !== e && r.multiplyByScalar(I, c, I),
                                      r.unpack(g[t], 0, O),
                                      "east" !== t && "west" !== t && r.multiplyByScalar(O, c, O),
                                      r.unpack(g[i], 0, w),
                                      "east" !== i && "west" !== i && r.multiplyByScalar(w, c, w);
                              } else {
                                  (a = o(a, f.WGS84)), a.geodeticSurfaceNormal(n, N.up);
                                  var l = N.up,
                                      h = N.east;
                                  (h.x = -n.y),
                                      (h.y = n.x),
                                      (h.z = 0),
                                      r.normalize(h, N.east),
                                      r.cross(l, h, N.north),
                                      r.multiplyByScalar(N.up, -1, N.down),
                                      r.multiplyByScalar(N.east, -1, N.west),
                                      r.multiplyByScalar(N.north, -1, N.south),
                                      (I = N[e]),
                                      (O = N[t]),
                                      (w = N[i]);
                              }
                              return (
                                  (s[0] = I.x),
                                  (s[1] = I.y),
                                  (s[2] = I.z),
                                  (s[3] = 0),
                                  (s[4] = O.x),
                                  (s[5] = O.y),
                                  (s[6] = O.z),
                                  (s[7] = 0),
                                  (s[8] = w.x),
                                  (s[9] = w.y),
                                  (s[10] = w.z),
                                  (s[11] = 0),
                                  (s[12] = n.x),
                                  (s[13] = n.y),
                                  (s[14] = n.z),
                                  (s[15] = 1),
                                  s
                              );
                          }),
                          (S[a] = n)),
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
            R.headingPitchRollToFixedFrame = function(e, t, n, i, a) {
                i = o(i, R.eastNorthUpToFixedFrame);
                var u = v.fromHeadingPitchRoll(t, x),
                    s = _.fromTranslationQuaternionRotationScale(r.ZERO, u, M, C);
                return (a = i(e, n, a)), _.multiply(a, s, a);
            };
            var P = new _(),
                b = new E();
            R.headingPitchRollQuaternion = function(e, t, r, n, i) {
                var a = R.headingPitchRollToFixedFrame(e, t, r, n, P),
                    o = _.getRotation(a, b);
                return v.fromRotationMatrix(o, i);
            };
            var U = new r(1, 1, 1),
                D = new r(),
                L = new _(),
                F = new _(),
                B = new E(),
                z = new v();
            R.fixedFrameToHeadingPitchRoll = function(e, t, n, i) {
                (t = o(t, f.WGS84)), (n = o(n, R.eastNorthUpToFixedFrame)), u(i) || (i = new h());
                var a = _.getTranslation(e, D);
                if (r.equals(a, r.ZERO)) return (i.heading = 0), (i.pitch = 0), (i.roll = 0), i;
                var s = _.inverseTransformation(n(a, t, L), L),
                    c = _.setScale(e, U, F);
                (c = _.setTranslation(c, r.ZERO, c)), (s = _.multiply(s, c, s));
                var l = v.fromRotationMatrix(_.getRotation(s, B), z);
                return (l = v.normalize(l, l)), h.fromQuaternion(l, i);
            };
            var q = m.TWO_PI / 86400,
                G = new y();
            (R.computeTemeToPseudoFixedMatrix = function(e, t) {
                G = y.addSeconds(e, -y.computeTaiMinusUtc(e), G);
                var r,
                    n = G.dayNumber,
                    i = G.secondsOfDay,
                    a = n - 2451545;
                r =
                    i >= 43200
                        ? (a + 0.5) / T.DAYS_PER_JULIAN_CENTURY
                        : (a - 0.5) / T.DAYS_PER_JULIAN_CENTURY;
                var o = 24110.54841 + r * (8640184.812866 + r * (0.093104 + -62e-7 * r)),
                    s = (o * q) % m.TWO_PI,
                    c = 72921158553e-15 + 1.1772758384668e-19 * (n - 2451545.5),
                    l = (i + 0.5 * T.SECONDS_PER_DAY) % T.SECONDS_PER_DAY,
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
                    i = t.stop.dayNumber,
                    a = t.stop.secondsOfDay + 32.184,
                    o = R.iau2006XysData.preload(r, n, i, a),
                    u = R.earthOrientationParameters.getPromiseToLoad();
                return e.all([o, u]);
            }),
                (R.computeIcrfToFixedMatrix = function(e, t) {
                    u(t) || (t = new E());
                    var r = R.computeFixedToIcrfMatrix(e, t);
                    if (u(r)) return E.transpose(r, t);
                });
            var V = new p(0, 0, 0),
                W = new l(0, 0, 0, 0, 0, 0),
                H = new E(),
                X = new E();
            R.computeFixedToIcrfMatrix = function(e, t) {
                u(t) || (t = new E());
                var r = R.earthOrientationParameters.compute(e, W);
                if (u(r)) {
                    var n = e.dayNumber,
                        i = e.secondsOfDay + 32.184,
                        a = R.iau2006XysData.computeXysRadians(n, i, V);
                    if (u(a)) {
                        var o = a.x + r.xPoleOffset,
                            s = a.y + r.yPoleOffset,
                            c = 1 / (1 + Math.sqrt(1 - o * o - s * s)),
                            l = H;
                        (l[0] = 1 - c * o * o),
                            (l[3] = -c * o * s),
                            (l[6] = o),
                            (l[1] = -c * o * s),
                            (l[4] = 1 - c * s * s),
                            (l[7] = s),
                            (l[2] = -o),
                            (l[5] = -s),
                            (l[8] = 1 - c * (o * o + s * s));
                        var f = E.fromRotationZ(-a.s, X),
                            h = E.multiply(l, f, H),
                            d = e.dayNumber,
                            p = e.secondsOfDay - y.computeTaiMinusUtc(e) + r.ut1MinusUtc,
                            _ = d - 2451545,
                            v = p / T.SECONDS_PER_DAY,
                            A = 0.779057273264 + v + 0.00273781191135448 * (_ + v);
                        A = (A % 1) * m.TWO_PI;
                        var g = E.fromRotationZ(A, X),
                            S = E.multiply(h, g, H),
                            N = Math.cos(r.xPoleWander),
                            I = Math.cos(r.yPoleWander),
                            O = Math.sin(r.xPoleWander),
                            w = Math.sin(r.yPoleWander),
                            x = n - 2451545 + i / T.SECONDS_PER_DAY;
                        x /= 36525;
                        var M = (-47e-6 * x * m.RADIANS_PER_DEGREE) / 3600,
                            C = Math.cos(M),
                            P = Math.sin(M),
                            b = X;
                        return (
                            (b[0] = N * C),
                            (b[1] = N * P),
                            (b[2] = O),
                            (b[3] = -I * P + w * O * C),
                            (b[4] = I * C + w * O * P),
                            (b[5] = -w * N),
                            (b[6] = -w * P - I * O * C),
                            (b[7] = w * C - I * O * P),
                            (b[8] = I * N),
                            E.multiply(S, b, t)
                        );
                    }
                }
            };
            var k = new n();
            (R.pointToWindowCoordinates = function(e, t, r, n) {
                return (n = R.pointToGLWindowCoordinates(e, t, r, n)), (n.y = 2 * t[5] - n.y), n;
            }),
                (R.pointToGLWindowCoordinates = function(e, r, i, a) {
                    u(a) || (a = new t());
                    var o = k;
                    return (
                        _.multiplyByVector(e, n.fromElements(i.x, i.y, i.z, 1, o), o),
                        n.multiplyByScalar(o, 1 / o.w, o),
                        _.multiplyByVector(r, o, o),
                        t.fromCartesian4(o, a)
                    );
                });
            var Y = new r(),
                j = new r(),
                Z = new r();
            R.rotationMatrixFromPositionVelocity = function(e, t, n, i) {
                var a = o(n, f.WGS84).geodeticSurfaceNormal(e, Y),
                    s = r.cross(t, a, j);
                r.equalsEpsilon(s, r.ZERO, m.EPSILON6) && (s = r.clone(r.UNIT_X, s));
                var c = r.cross(s, t, Z);
                return (
                    r.normalize(c, c),
                    r.cross(t, c, s),
                    r.negate(s, s),
                    r.normalize(s, s),
                    u(i) || (i = new E()),
                    (i[0] = t.x),
                    (i[1] = t.y),
                    (i[2] = t.z),
                    (i[3] = s.x),
                    (i[4] = s.y),
                    (i[5] = s.z),
                    (i[6] = c.x),
                    (i[7] = c.y),
                    (i[8] = c.z),
                    i
                );
            };
            var K = new _(0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1),
                Q = new i(),
                J = new r(),
                $ = new r(),
                ee = new E(),
                te = new _(),
                re = new _();
            return (
                (R.basisTo2D = function(e, t, n) {
                    var i = _.getTranslation(t, $),
                        a = e.ellipsoid,
                        o = a.cartesianToCartographic(i, Q),
                        u = e.project(o, J);
                    r.fromElements(u.z, u.x, u.y, u);
                    var s = R.eastNorthUpToFixedFrame(i, a, te),
                        c = _.inverseTransformation(s, re),
                        l = _.getRotation(t, ee),
                        f = _.multiplyByMatrix3(c, l, n);
                    return _.multiply(K, f, n), _.setTranslation(n, u, n), n;
                }),
                (R.wgs84To2DModelMatrix = function(e, t, n) {
                    var i = e.ellipsoid,
                        a = R.eastNorthUpToFixedFrame(t, i, te),
                        o = _.inverseTransformation(a, re),
                        u = i.cartesianToCartographic(t, Q),
                        s = e.project(u, J);
                    r.fromElements(s.z, s.x, s.y, s);
                    var c = _.fromTranslation(s, te);
                    return _.multiply(K, o, n), _.multiply(c, n, n), n;
                }),
                R
            );
        }),
        define("Core/EllipsoidTangentPlane", [
            "./AxisAlignedBoundingBox",
            "./Cartesian2",
            "./Cartesian3",
            "./Cartesian4",
            "./Check",
            "./defaultValue",
            "./defined",
            "./defineProperties",
            "./DeveloperError",
            "./Ellipsoid",
            "./IntersectionTests",
            "./Matrix4",
            "./Plane",
            "./Ray",
            "./Transforms"
        ], function(e, t, r, n, i, a, o, u, s, c, l, f, h, d, p) {
            "use strict";
            function y(e, t) {
                (t = a(t, c.WGS84)), (e = t.scaleToGeodeticSurface(e));
                var n = p.eastNorthUpToFixedFrame(e, t);
                (this._ellipsoid = t),
                    (this._origin = e),
                    (this._xAxis = r.fromCartesian4(f.getColumn(n, 0, m))),
                    (this._yAxis = r.fromCartesian4(f.getColumn(n, 1, m)));
                var i = r.fromCartesian4(f.getColumn(n, 2, m));
                this._plane = h.fromPointNormal(e, i);
            }
            var m = new n();
            u(y.prototype, {
                ellipsoid: {
                    get: function() {
                        return this._ellipsoid;
                    }
                },
                origin: {
                    get: function() {
                        return this._origin;
                    }
                },
                plane: {
                    get: function() {
                        return this._plane;
                    }
                },
                xAxis: {
                    get: function() {
                        return this._xAxis;
                    }
                },
                yAxis: {
                    get: function() {
                        return this._yAxis;
                    }
                },
                zAxis: {
                    get: function() {
                        return this._plane.normal;
                    }
                }
            });
            var E = new e();
            y.fromPoints = function(t, r) {
                return new y(e.fromPoints(t, E).center, r);
            };
            var _ = new d(),
                v = new r();
            (y.prototype.projectPointOntoPlane = function(e, n) {
                var i = _;
                (i.origin = e), r.normalize(e, i.direction);
                var a = l.rayPlane(i, this._plane, v);
                if (
                    (o(a) ||
                        (r.negate(i.direction, i.direction), (a = l.rayPlane(i, this._plane, v))),
                    o(a))
                ) {
                    var u = r.subtract(a, this._origin, a),
                        s = r.dot(this._xAxis, u),
                        c = r.dot(this._yAxis, u);
                    return o(n) ? ((n.x = s), (n.y = c), n) : new t(s, c);
                }
            }),
                (y.prototype.projectPointsOntoPlane = function(e, t) {
                    o(t) || (t = []);
                    for (var r = 0, n = e.length, i = 0; i < n; i++) {
                        var a = this.projectPointOntoPlane(e[i], t[r]);
                        o(a) && ((t[r] = a), r++);
                    }
                    return (t.length = r), t;
                }),
                (y.prototype.projectPointToNearestOnPlane = function(e, n) {
                    o(n) || (n = new t());
                    var i = _;
                    (i.origin = e), r.clone(this._plane.normal, i.direction);
                    var a = l.rayPlane(i, this._plane, v);
                    o(a) ||
                        (r.negate(i.direction, i.direction), (a = l.rayPlane(i, this._plane, v)));
                    var u = r.subtract(a, this._origin, a),
                        s = r.dot(this._xAxis, u),
                        c = r.dot(this._yAxis, u);
                    return (n.x = s), (n.y = c), n;
                }),
                (y.prototype.projectPointsToNearestOnPlane = function(e, t) {
                    o(t) || (t = []);
                    var r = e.length;
                    t.length = r;
                    for (var n = 0; n < r; n++)
                        t[n] = this.projectPointToNearestOnPlane(e[n], t[n]);
                    return t;
                });
            var T = new r();
            return (
                (y.prototype.projectPointOntoEllipsoid = function(e, t) {
                    o(t) || (t = new r());
                    var n = this._ellipsoid,
                        i = this._origin,
                        a = this._xAxis,
                        u = this._yAxis,
                        s = T;
                    return (
                        r.multiplyByScalar(a, e.x, s),
                        (t = r.add(i, s, t)),
                        r.multiplyByScalar(u, e.y, s),
                        r.add(t, s, t),
                        n.scaleToGeocentricSurface(t, t),
                        t
                    );
                }),
                (y.prototype.projectPointsOntoEllipsoid = function(e, t) {
                    var r = e.length;
                    o(t) ? (t.length = r) : (t = new Array(r));
                    for (var n = 0; n < r; ++n) t[n] = this.projectPointOntoEllipsoid(e[n], t[n]);
                    return t;
                }),
                y
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
        ], function(e, t, r, n, i, a) {
            "use strict";
            function o(e, t, n, i) {
                (this[0] = r(e, 0)), (this[1] = r(n, 0)), (this[2] = r(t, 0)), (this[3] = r(i, 0));
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
                (o.unpack = function(e, t, i) {
                    return (
                        (t = r(t, 0)),
                        n(i) || (i = new o()),
                        (i[0] = e[t++]),
                        (i[1] = e[t++]),
                        (i[2] = e[t++]),
                        (i[3] = e[t++]),
                        i
                    );
                }),
                (o.clone = function(e, t) {
                    if (n(e))
                        return n(t)
                            ? ((t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t)
                            : new o(e[0], e[2], e[1], e[3]);
                }),
                (o.fromArray = function(e, t, i) {
                    return (
                        (t = r(t, 0)),
                        n(i) || (i = new o()),
                        (i[0] = e[t]),
                        (i[1] = e[t + 1]),
                        (i[2] = e[t + 2]),
                        (i[3] = e[t + 3]),
                        i
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
                        i = Math.sin(e);
                    return n(t)
                        ? ((t[0] = r), (t[1] = i), (t[2] = -i), (t[3] = r), t)
                        : new o(r, -i, i, r);
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
                        i = e[n],
                        a = e[n + 1];
                    return (r.x = i), (r.y = a), r;
                }),
                (o.setColumn = function(e, t, r, n) {
                    n = o.clone(e, n);
                    var i = 2 * t;
                    return (n[i] = r.x), (n[i + 1] = r.y), n;
                }),
                (o.getRow = function(e, t, r) {
                    var n = e[t],
                        i = e[t + 2];
                    return (r.x = n), (r.y = i), r;
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
                        i = e[0] * t[2] + e[2] * t[3],
                        a = e[1] * t[0] + e[3] * t[1],
                        o = e[1] * t[2] + e[3] * t[3];
                    return (r[0] = n), (r[1] = a), (r[2] = i), (r[3] = o), r;
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
                        i = e[1] * t.x + e[3] * t.y;
                    return (r.x = n), (r.y = i), r;
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
                        i = e[1],
                        a = e[3];
                    return (t[0] = r), (t[1] = n), (t[2] = i), (t[3] = a), t;
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
                (o.IDENTITY = a(new o(1, 0, 0, 1))),
                (o.ZERO = a(new o(0, 0, 0, 0))),
                (o.COLUMN0ROW0 = 0),
                (o.COLUMN0ROW1 = 1),
                (o.COLUMN1ROW0 = 2),
                (o.COLUMN1ROW1 = 3),
                i(o.prototype, {
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
        ], function(e, t, r, n, i, a, o, u, s, c, l, f, h, d, p, y) {
            "use strict";
            function m(e) {
                (e = i(e, i.EMPTY_OBJECT)),
                    (this.attributes = e.attributes),
                    (this.indices = e.indices),
                    (this.primitiveType = i(e.primitiveType, h.TRIANGLES)),
                    (this.boundingSphere = e.boundingSphere),
                    (this.geometryType = i(e.geometryType, s.NONE)),
                    (this.boundingSphereCV = e.boundingSphereCV),
                    (this.offsetAttribute = e.offsetAttribute);
            }
            m.computeNumberOfVertices = function(e) {
                var t = -1;
                for (var r in e.attributes)
                    if (
                        e.attributes.hasOwnProperty(r) &&
                        a(e.attributes[r]) &&
                        a(e.attributes[r].values)
                    ) {
                        var n = e.attributes[r],
                            i = n.values.length / n.componentsPerAttribute;
                        t = i;
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
                N = new f(),
                I = new c();
            return (
                (m._textureCoordinateRotationPoints = function(n, i, a, o) {
                    var u,
                        s = p.center(o, E),
                        h = r.toCartesian(s, a, _),
                        m = y.eastNorthUpToFixedFrame(h, a, v),
                        O = f.inverse(m, v),
                        w = R,
                        x = T;
                    (x[0].longitude = o.west),
                        (x[0].latitude = o.south),
                        (x[1].longitude = o.west),
                        (x[1].latitude = o.north),
                        (x[2].longitude = o.east),
                        (x[2].latitude = o.south);
                    var M = g;
                    for (u = 0; u < 3; u++)
                        r.toCartesian(x[u], a, M),
                            (M = f.multiplyByPointAsVector(O, M, M)),
                            (w[u].x = M.x),
                            (w[u].y = M.y);
                    var C = d.fromAxisAngle(t.UNIT_Z, -i, S),
                        P = l.fromQuaternion(C, N),
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
                    var B = c.fromRotation(i, I),
                        z = A;
                    (z[0].x = U),
                        (z[0].y = D),
                        (z[1].x = U),
                        (z[1].y = F),
                        (z[2].x = L),
                        (z[2].y = D);
                    var q = w[0],
                        G = w[2].x - q.x,
                        V = w[1].y - q.y;
                    for (u = 0; u < 3; u++) {
                        var W = z[u];
                        c.multiplyByVector(B, W, W),
                            (W.x = (W.x - q.x) / G),
                            (W.y = (W.y - q.y) / V);
                    }
                    var H = z[0],
                        X = z[1],
                        k = z[2],
                        Y = new Array(6);
                    return e.pack(H, Y), e.pack(X, Y, 2), e.pack(k, Y, 4), Y;
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
            function i(t) {
                (t = e(t, e.EMPTY_OBJECT)),
                    (this.geometry = t.geometry),
                    (this.modelMatrix = n.clone(e(t.modelMatrix, n.IDENTITY))),
                    (this.id = t.id),
                    (this.pickPrimitive = t.pickPrimitive),
                    (this.attributes = e(t.attributes, {})),
                    (this.westHemisphereGeometry = void 0),
                    (this.eastHemisphereGeometry = void 0);
            }
            return i;
        }),
        define("Core/AttributeCompression", [
            "./Cartesian2",
            "./Cartesian3",
            "./Check",
            "./defined",
            "./DeveloperError",
            "./Math"
        ], function(e, t, r, n, i, a) {
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
                        i = r.y;
                    (r.x = (1 - Math.abs(i)) * a.signNotZero(n)),
                        (r.y = (1 - Math.abs(n)) * a.signNotZero(i));
                }
                return (r.x = a.toSNorm(r.x, t)), (r.y = a.toSNorm(r.y, t)), r;
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
                (s.octDecodeInRange = function(e, r, n, i) {
                    if (
                        ((i.x = a.fromSNorm(e, n)),
                        (i.y = a.fromSNorm(r, n)),
                        (i.z = 1 - (Math.abs(i.x) + Math.abs(i.y))),
                        i.z < 0)
                    ) {
                        var o = i.x;
                        (i.x = (1 - Math.abs(i.y)) * a.signNotZero(o)),
                            (i.y = (1 - Math.abs(o)) * a.signNotZero(i.y));
                    }
                    return t.normalize(i, i);
                }),
                (s.octDecode = function(e, t, r) {
                    return s.octDecodeInRange(e, t, 255, r);
                }),
                (s.octDecodeFromCartesian4 = function(e, t) {
                    var r = e.x,
                        n = e.y,
                        i = e.z,
                        a = e.w,
                        o = 256 * r + n,
                        u = 256 * i + a;
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
                        i = 256 * (r - n);
                    return s.octDecode(n, i, t);
                }),
                (s.octPack = function(e, t, r, n) {
                    var i = s.octEncodeFloat(e),
                        a = s.octEncodeFloat(t),
                        o = s.octEncode(r, f);
                    return (n.x = 65536 * o.x + i), (n.y = 65536 * o.y + a), n;
                }),
                (s.octUnpack = function(e, t, r, n) {
                    var i = e.x / 65536,
                        a = Math.floor(i),
                        o = 65536 * (i - a);
                    i = e.y / 65536;
                    var u = Math.floor(i),
                        c = 65536 * (i - u);
                    s.octDecodeFloat(o, t), s.octDecodeFloat(c, r), s.octDecode(a, u, n);
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
                    for (var i = e.length, a = 0, o = 0, s = 0, c = 0; c < i; ++c)
                        (a += u(e[c])),
                            (o += u(t[c])),
                            (e[c] = a),
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
        ], function(e, t, r, n, i) {
            "use strict";
            function a(r, a, c, l, f) {
                n(f) || (f = new t());
                var h, d, p, y, m, E, _, v;
                if (n(a.z)) {
                    if (t.equalsEpsilon(r, a, i.EPSILON14)) return t.clone(t.UNIT_X, f);
                    if (t.equalsEpsilon(r, c, i.EPSILON14)) return t.clone(t.UNIT_Y, f);
                    if (t.equalsEpsilon(r, l, i.EPSILON14)) return t.clone(t.UNIT_Z, f);
                    (h = t.subtract(c, a, o)),
                        (d = t.subtract(l, a, u)),
                        (p = t.subtract(r, a, s)),
                        (y = t.dot(h, h)),
                        (m = t.dot(h, d)),
                        (E = t.dot(h, p)),
                        (_ = t.dot(d, d)),
                        (v = t.dot(d, p));
                } else {
                    if (e.equalsEpsilon(r, a, i.EPSILON14)) return t.clone(t.UNIT_X, f);
                    if (e.equalsEpsilon(r, c, i.EPSILON14)) return t.clone(t.UNIT_Y, f);
                    if (e.equalsEpsilon(r, l, i.EPSILON14)) return t.clone(t.UNIT_Z, f);
                    (h = e.subtract(c, a, o)),
                        (d = e.subtract(l, a, u)),
                        (p = e.subtract(r, a, s)),
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
            return a;
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
            var i = { high: 0, low: 0 };
            n.fromCartesian = function(e, t) {
                r(t) || (t = new n());
                var a = t.high,
                    o = t.low;
                return (
                    n.encode(e.x, i),
                    (a.x = i.high),
                    (o.x = i.low),
                    n.encode(e.y, i),
                    (a.y = i.high),
                    (o.y = i.low),
                    n.encode(e.z, i),
                    (a.z = i.high),
                    (o.z = i.low),
                    t
                );
            };
            var a = new n();
            return (
                (n.writeElements = function(e, t, r) {
                    n.fromCartesian(e, a);
                    var i = a.high,
                        o = a.low;
                    (t[r] = i.x),
                        (t[r + 1] = i.y),
                        (t[r + 2] = i.z),
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
        ], function(e, t, r, n, i) {
            "use strict";
            var a = {
                UNSIGNED_BYTE: i.UNSIGNED_BYTE,
                UNSIGNED_SHORT: i.UNSIGNED_SHORT,
                UNSIGNED_INT: i.UNSIGNED_INT
            };
            return (
                (a.getSizeInBytes = function(e) {
                    switch (e) {
                        case a.UNSIGNED_BYTE:
                            return Uint8Array.BYTES_PER_ELEMENT;
                        case a.UNSIGNED_SHORT:
                            return Uint16Array.BYTES_PER_ELEMENT;
                        case a.UNSIGNED_INT:
                            return Uint32Array.BYTES_PER_ELEMENT;
                    }
                }),
                (a.validate = function(t) {
                    return (
                        e(t) &&
                        (t === a.UNSIGNED_BYTE || t === a.UNSIGNED_SHORT || t === a.UNSIGNED_INT)
                    );
                }),
                (a.createTypedArray = function(e, t) {
                    return e >= n.SIXTY_FOUR_KILOBYTES ? new Uint32Array(t) : new Uint16Array(t);
                }),
                (a.createTypedArrayFromArrayBuffer = function(e, t, r, i) {
                    return e >= n.SIXTY_FOUR_KILOBYTES
                        ? new Uint32Array(t, r, i)
                        : new Uint16Array(t, r, i);
                }),
                r(a)
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
                        i = r.maximumIndex,
                        a = e(r.cacheSize, 24),
                        o = n.length;
                    if (!t(i)) {
                        i = 0;
                        for (var u = 0, s = n[u]; u < o; ) s > i && (i = s), ++u, (s = n[u]);
                    }
                    for (var c = [], l = 0; l < i + 1; l++) c[l] = 0;
                    for (var f = a + 1, h = 0; h < o; ++h) f - c[n[h]] > a && ((c[n[h]] = f), ++f);
                    return (f - a + 1) / (o / 3);
                }),
                (n.tipsify = function(r) {
                    function n(e, t, r, n) {
                        for (; t.length >= 1; ) {
                            var a = t[t.length - 1];
                            if ((t.splice(t.length - 1, 1), e[a].numLiveTriangles > 0)) return a;
                        }
                        for (; i < n; ) {
                            if (e[i].numLiveTriangles > 0) return ++i - 1;
                            ++i;
                        }
                        return -1;
                    }
                    r = e(r, e.EMPTY_OBJECT);
                    var i,
                        a = r.indices,
                        o = r.maximumIndex,
                        u = e(r.cacheSize, 24),
                        s = a.length,
                        c = 0,
                        l = 0,
                        f = a[l],
                        h = s;
                    if (t(o)) c = o + 1;
                    else {
                        for (; l < h; ) f > c && (c = f), ++l, (f = a[l]);
                        if (-1 === c) return 0;
                        ++c;
                    }
                    var d,
                        p = [];
                    for (d = 0; d < c; d++)
                        p[d] = { numLiveTriangles: 0, timeStamp: 0, vertexTriangles: [] };
                    l = 0;
                    for (var y = 0; l < h; )
                        p[a[l]].vertexTriangles.push(y),
                            ++p[a[l]].numLiveTriangles,
                            p[a[l + 1]].vertexTriangles.push(y),
                            ++p[a[l + 1]].numLiveTriangles,
                            p[a[l + 2]].vertexTriangles.push(y),
                            ++p[a[l + 2]].numLiveTriangles,
                            ++y,
                            (l += 3);
                    var m = 0,
                        E = u + 1;
                    i = 1;
                    var _,
                        v,
                        T = [],
                        R = [],
                        A = 0,
                        g = [],
                        S = s / 3,
                        N = [];
                    for (d = 0; d < S; d++) N[d] = !1;
                    for (var I, O; -1 !== m; ) {
                        (T = []), (v = p[m]), (O = v.vertexTriangles.length);
                        for (var w = 0; w < O; ++w)
                            if (((y = v.vertexTriangles[w]), !N[y])) {
                                (N[y] = !0), (l = y + y + y);
                                for (var x = 0; x < 3; ++x)
                                    (I = a[l]),
                                        T.push(I),
                                        R.push(I),
                                        (g[A] = I),
                                        ++A,
                                        (_ = p[I]),
                                        --_.numLiveTriangles,
                                        E - _.timeStamp > u && ((_.timeStamp = E), ++E),
                                        ++l;
                            }
                        m = (function(e, t, r, i, a, o, u) {
                            for (var s, c = -1, l = -1, f = 0; f < r.length; ) {
                                var h = r[f];
                                i[h].numLiveTriangles &&
                                    ((s = 0),
                                    a - i[h].timeStamp + 2 * i[h].numLiveTriangles <= t &&
                                        (s = a - i[h].timeStamp),
                                    (s > l || -1 === l) && ((l = s), (c = h))),
                                    ++f;
                            }
                            return -1 === c ? n(i, o, e, u) : c;
                        })(a, u, T, p, E, R, c);
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
        ], function(e, t, r, n, i, a, o, u, s, c, l, f, h, d, p, y, m, E, _, v, T, R, A, g, S) {
            "use strict";
            function N(e, t, r, n, i) {
                (e[t++] = r), (e[t++] = n), (e[t++] = n), (e[t++] = i), (e[t++] = i), (e[t] = r);
            }
            function I(e) {
                for (
                    var t = e.length, r = (t / 3) * 6, n = m.createTypedArray(t, r), i = 0, a = 0;
                    a < t;
                    a += 3, i += 6
                )
                    N(n, i, e[a], e[a + 1], e[a + 2]);
                return n;
            }
            function O(e) {
                var t = e.length;
                if (t >= 3) {
                    var r = 6 * (t - 2),
                        n = m.createTypedArray(t, r);
                    N(n, 0, e[0], e[1], e[2]);
                    for (var i = 6, a = 3; a < t; ++a, i += 6) N(n, i, e[a - 1], e[a], e[a - 2]);
                    return n;
                }
                return new Uint16Array();
            }
            function w(e) {
                if (e.length > 0) {
                    for (
                        var t = e.length - 1,
                            r = 6 * (t - 1),
                            n = m.createTypedArray(t, r),
                            i = e[0],
                            a = 0,
                            o = 1;
                        o < t;
                        ++o, a += 6
                    )
                        N(n, a, i, e[o], e[o + 1]);
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
                        for (var i = t[n], a = 0; a < i.componentsPerAttribute; ++a)
                            e[n].values.push(i.values[r * i.componentsPerAttribute + a]);
            }
            function C(e, t) {
                if (c(t))
                    for (var r = t.values, n = r.length, a = 0; a < n; a += 3)
                        i.unpack(r, a, se), R.multiplyByPoint(e, se, se), i.pack(se, r, a);
            }
            function P(e, t) {
                if (c(t))
                    for (var r = t.values, n = r.length, a = 0; a < n; a += 3)
                        i.unpack(r, a, se),
                            T.multiplyByVector(e, se, se),
                            (se = i.normalize(se, se)),
                            i.pack(se, r, a);
            }
            function b(e, t) {
                var r,
                    n = e.length,
                    i = {},
                    a = e[0][t].attributes;
                for (r in a)
                    if (a.hasOwnProperty(r) && c(a[r]) && c(a[r].values)) {
                        for (var o = a[r], s = o.values.length, l = !0, f = 1; f < n; ++f) {
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
                            (i[r] = new p({
                                componentDatatype: o.componentDatatype,
                                componentsPerAttribute: o.componentsPerAttribute,
                                normalize: o.normalize,
                                values: u.createTypedArray(o.componentDatatype, s)
                            }));
                    }
                return i;
            }
            function U(e, t) {
                var n,
                    a,
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
                        for (s = E[n].values, u = 0, a = 0; a < h; ++a)
                            for (l = e[a][t].attributes[n].values, f = l.length, o = 0; o < f; ++o)
                                s[u++] = l[o];
                var _;
                if (p) {
                    var v = 0;
                    for (a = 0; a < h; ++a) v += e[a][t].indices.length;
                    var T = d.computeNumberOfVertices(
                            new d({ attributes: E, primitiveType: g.POINTS })
                        ),
                        R = m.createTypedArray(T, v),
                        A = 0,
                        S = 0;
                    for (a = 0; a < h; ++a) {
                        var N = e[a][t].indices,
                            I = N.length;
                        for (u = 0; u < I; ++u) R[A++] = S + N[u];
                        S += d.computeNumberOfVertices(e[a][t]);
                    }
                    _ = R;
                }
                var O,
                    w = new i(),
                    x = 0;
                for (a = 0; a < h; ++a) {
                    if (((O = e[a][t].boundingSphere), !c(O))) {
                        w = void 0;
                        break;
                    }
                    i.add(O.center, w, w);
                }
                if (c(w))
                    for (i.divideByScalar(w, h, w), a = 0; a < h; ++a) {
                        O = e[a][t].boundingSphere;
                        var M = i.magnitude(i.subtract(O.center, w, fe)) + O.radius;
                        M > x && (x = M);
                    }
                return new d({
                    attributes: E,
                    indices: _,
                    primitiveType: y,
                    boundingSphere: c(w) ? new r(w, x) : void 0
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
                for (var n = 3, i = 3; i < t; ++i) (r[n++] = i - 1), (r[n++] = 0), (r[n++] = i);
                return (e.indices = r), (e.primitiveType = g.TRIANGLES), e;
            }
            function F(e) {
                var t = d.computeNumberOfVertices(e),
                    r = m.createTypedArray(t, 3 * (t - 2));
                (r[0] = 0), (r[1] = 1), (r[2] = 2), t > 3 && ((r[3] = 0), (r[4] = 2), (r[5] = 3));
                for (var n = 6, i = 3; i < t - 1; i += 2)
                    (r[n++] = i),
                        (r[n++] = i - 1),
                        (r[n++] = i + 1),
                        i + 2 < t && ((r[n++] = i), (r[n++] = i + 1), (r[n++] = i + 2));
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
                for (var n = 2, i = 2; i < t; ++i) (r[n++] = i - 1), (r[n++] = i);
                return (e.indices = r), (e.primitiveType = g.LINES), e;
            }
            function q(e) {
                var t = d.computeNumberOfVertices(e),
                    r = m.createTypedArray(t, 2 * t);
                (r[0] = 0), (r[1] = 1);
                for (var n = 2, i = 2; i < t; ++i) (r[n++] = i - 1), (r[n++] = i);
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
            function W(e, t, r) {
                if (0 !== e.y && 0 !== t.y && 0 !== r.y)
                    return V(e, e.y < 0), V(t, t.y < 0), void V(r, r.y < 0);
                var n,
                    i = Math.abs(e.y),
                    a = Math.abs(t.y),
                    o = Math.abs(r.y);
                n = i > a ? (i > o ? v.sign(e.y) : v.sign(r.y)) : a > o ? v.sign(t.y) : v.sign(r.y);
                var u = n < 0;
                V(e, u), V(t, u), V(r, u);
            }
            function H(e, t, r, n) {
                i.add(e, i.multiplyByScalar(i.subtract(t, e, Se), e.y / (e.y - t.y), Se), r),
                    i.clone(r, n),
                    V(r, !0),
                    V(n, !1);
            }
            function X(e, t, r) {
                if (!(e.x >= 0 || t.x >= 0 || r.x >= 0)) {
                    W(e, t, r);
                    var n = e.y < 0,
                        i = t.y < 0,
                        a = r.y < 0,
                        o = 0;
                    (o += n ? 1 : 0), (o += i ? 1 : 0), (o += a ? 1 : 0);
                    var u = xe.indices;
                    1 === o
                        ? ((u[1] = 3),
                          (u[2] = 4),
                          (u[5] = 6),
                          (u[7] = 6),
                          (u[8] = 5),
                          n
                              ? (H(e, t, Ne, Oe),
                                H(e, r, Ie, we),
                                (u[0] = 0),
                                (u[3] = 1),
                                (u[4] = 2),
                                (u[6] = 1))
                              : i
                              ? (H(t, r, Ne, Oe),
                                H(t, e, Ie, we),
                                (u[0] = 1),
                                (u[3] = 2),
                                (u[4] = 0),
                                (u[6] = 2))
                              : a &&
                                (H(r, e, Ne, Oe),
                                H(r, t, Ie, we),
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
                              ? i
                                  ? a ||
                                    (H(r, e, Ne, Oe),
                                    H(r, t, Ie, we),
                                    (u[0] = 0),
                                    (u[1] = 1),
                                    (u[3] = 0),
                                    (u[6] = 2))
                                  : (H(t, r, Ne, Oe),
                                    H(t, e, Ie, we),
                                    (u[0] = 2),
                                    (u[1] = 0),
                                    (u[3] = 2),
                                    (u[6] = 1))
                              : (H(e, t, Ne, Oe),
                                H(e, r, Ie, we),
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
                            ((s[3] = Ne), (s[4] = Ie), (s[5] = Oe), (s[6] = we), (s.length = 7)),
                        xe
                    );
                }
            }
            function k(e, t) {
                var n = e.attributes;
                if (0 !== n.position.values.length) {
                    for (var i in n)
                        if (n.hasOwnProperty(i) && c(n[i]) && c(n[i].values)) {
                            var a = n[i];
                            a.values = u.createTypedArray(a.componentDatatype, a.values);
                        }
                    var o = d.computeNumberOfVertices(e);
                    return (
                        (e.indices = m.createTypedArray(o, e.indices)),
                        t && (e.boundingSphere = r.fromVertices(n.position.values)),
                        e
                    );
                }
            }
            function Y(e) {
                var t = e.attributes,
                    r = {};
                for (var n in t)
                    if (t.hasOwnProperty(n) && c(t[n]) && c(t[n].values)) {
                        var i = t[n];
                        r[n] = new p({
                            componentDatatype: i.componentDatatype,
                            componentsPerAttribute: i.componentsPerAttribute,
                            normalize: i.normalize,
                            values: []
                        });
                    }
                return new d({ attributes: r, indices: [], primitiveType: e.primitiveType });
            }
            function j(e, t, r) {
                var n = c(e.geometry.boundingSphere);
                (t = k(t, n)),
                    (r = k(r, n)),
                    c(r) && !c(t)
                        ? (e.geometry = r)
                        : !c(r) && c(t)
                        ? (e.geometry = t)
                        : ((e.westHemisphereGeometry = t),
                          (e.eastHemisphereGeometry = r),
                          (e.geometry = void 0));
            }
            function Z(e, t) {
                var r = new e(),
                    n = new e(),
                    i = new e();
                return function(a, o, u, s, c, l, f, h) {
                    var d = e.fromArray(c, a * t, r),
                        p = e.fromArray(c, o * t, n),
                        y = e.fromArray(c, u * t, i);
                    e.multiplyByScalar(d, s.x, d),
                        e.multiplyByScalar(p, s.y, p),
                        e.multiplyByScalar(y, s.z, y);
                    var m = e.add(d, p, d);
                    e.add(m, y, m), h && e.normalize(m, m), e.pack(m, l, f * t);
                };
            }
            function K(e, r, n, a, o, u, s, l, f, h, d, p, y, m, E, _) {
                if (c(u) || c(s) || c(l) || c(f) || c(h) || 0 !== m) {
                    var v = i.fromArray(o, 3 * e, Ue),
                        T = i.fromArray(o, 3 * r, De),
                        R = i.fromArray(o, 3 * n, Le),
                        A = t(a, v, T, R, Fe);
                    if ((c(u) && Ce(e, r, n, A, u, p.normal.values, _, !0), c(h))) {
                        var g = i.fromArray(h, 3 * e, Ue),
                            S = i.fromArray(h, 3 * r, De),
                            N = i.fromArray(h, 3 * n, Le);
                        i.multiplyByScalar(g, A.x, g),
                            i.multiplyByScalar(S, A.y, S),
                            i.multiplyByScalar(N, A.z, N);
                        var I;
                        i.equals(g, i.ZERO) && i.equals(S, i.ZERO) && i.equals(N, i.ZERO)
                            ? ((I = Ue), (I.x = 0), (I.y = 0), (I.z = 0))
                            : ((I = i.add(g, S, g)), i.add(I, N, I), i.normalize(I, I)),
                            i.pack(I, p.extrudeDirection.values, 3 * _);
                    }
                    if (
                        (c(d) && be(e, r, n, A, d, p.applyOffset.values, _),
                        c(s) && Ce(e, r, n, A, s, p.tangent.values, _, !0),
                        c(l) && Ce(e, r, n, A, l, p.bitangent.values, _, !0),
                        c(f) && Pe(e, r, n, A, f, p.st.values, _),
                        m > 0)
                    )
                        for (var O = 0; O < m; O++) {
                            var w = y[O];
                            Q(e, r, n, A, _, E[w], p[w]);
                        }
                }
            }
            function Q(e, t, r, n, i, a, o) {
                var u = a.componentsPerAttribute,
                    s = a.values,
                    c = o.values;
                switch (u) {
                    case 4:
                        Me(e, t, r, n, s, c, i, !1);
                        break;
                    case 3:
                        Ce(e, t, r, n, s, c, i, !1);
                        break;
                    case 2:
                        Pe(e, t, r, n, s, c, i, !1);
                        break;
                    default:
                        c[i] = s[e] * n.x + s[t] * n.y + s[r] * n.z;
                }
            }
            function J(e, t, r, n, i, a) {
                var o = e.position.values.length / 3;
                if (-1 !== i) {
                    var u = n[i],
                        s = r[u];
                    return -1 === s
                        ? ((r[u] = o), e.position.values.push(a.x, a.y, a.z), t.push(o), o)
                        : (t.push(s), s);
                }
                return e.position.values.push(a.x, a.y, a.z), t.push(o), o;
            }
            function $(e) {
                var t = e.geometry,
                    r = t.attributes,
                    n = r.position.values,
                    a = c(r.normal) ? r.normal.values : void 0,
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
                    R = Y(t),
                    A = Y(t),
                    g = [];
                g.length = n.length / 3;
                var S = [];
                for (S.length = n.length / 3, v = 0; v < g.length; ++v) (g[v] = -1), (S[v] = -1);
                var N = h.length;
                for (v = 0; v < N; v += 3) {
                    var I = h[v],
                        O = h[v + 1],
                        w = h[v + 2],
                        x = i.fromArray(n, 3 * I),
                        M = i.fromArray(n, 3 * O),
                        C = i.fromArray(n, 3 * w),
                        P = X(x, M, C);
                    if (c(P) && P.positions.length > 3)
                        for (var b = P.positions, U = P.indices, D = U.length, L = 0; L < D; ++L) {
                            var F = U[L],
                                B = b[F];
                            B.y < 0
                                ? ((y = A.attributes), (m = A.indices), (E = g))
                                : ((y = R.attributes), (m = R.indices), (E = S)),
                                (_ = J(y, m, E, h, F < 3 ? v + F : -1, B)),
                                K(I, O, w, B, n, a, u, o, s, l, f, y, d, T, r, _);
                        }
                    else
                        c(P) && ((x = P.positions[0]), (M = P.positions[1]), (C = P.positions[2])),
                            x.y < 0
                                ? ((y = A.attributes), (m = A.indices), (E = g))
                                : ((y = R.attributes), (m = R.indices), (E = S)),
                            (_ = J(y, m, E, h, v, x)),
                            K(I, O, w, x, n, a, u, o, s, l, f, y, d, T, r, _),
                            (_ = J(y, m, E, h, v + 1, M)),
                            K(I, O, w, M, n, a, u, o, s, l, f, y, d, T, r, _),
                            (_ = J(y, m, E, h, v + 2, C)),
                            K(I, O, w, C, n, a, u, o, s, l, f, y, d, T, r, _);
                }
                j(e, A, R);
            }
            function ee(e, t, r, n, a, o, u) {
                if (c(u)) {
                    var s = i.fromArray(n, 3 * e, Ue);
                    i.equalsEpsilon(s, r, v.EPSILON10)
                        ? (o.applyOffset.values[a] = u[e])
                        : (o.applyOffset.values[a] = u[t]);
                }
            }
            function te(e) {
                var t,
                    r = e.geometry,
                    n = r.attributes,
                    a = n.position.values,
                    o = c(n.applyOffset) ? n.applyOffset.values : void 0,
                    u = r.indices,
                    s = Y(r),
                    l = Y(r),
                    f = u.length,
                    h = [];
                h.length = a.length / 3;
                var d = [];
                for (d.length = a.length / 3, t = 0; t < h.length; ++t) (h[t] = -1), (d[t] = -1);
                for (t = 0; t < f; t += 2) {
                    var p,
                        y = u[t],
                        m = u[t + 1],
                        E = i.fromArray(a, 3 * y, Ue),
                        T = i.fromArray(a, 3 * m, De);
                    Math.abs(E.y) < v.EPSILON6 &&
                        (E.y < 0 ? (E.y = -v.EPSILON6) : (E.y = v.EPSILON6)),
                        Math.abs(T.y) < v.EPSILON6 &&
                            (T.y < 0 ? (T.y = -v.EPSILON6) : (T.y = v.EPSILON6));
                    var R = s.attributes,
                        A = s.indices,
                        g = d,
                        S = l.attributes,
                        N = l.indices,
                        I = h,
                        O = _.lineSegmentPlane(E, T, ze, Le);
                    if (c(O)) {
                        var w = i.multiplyByScalar(i.UNIT_Y, 5 * v.EPSILON9, qe);
                        E.y < 0 &&
                            (i.negate(w, w),
                            (R = l.attributes),
                            (A = l.indices),
                            (g = h),
                            (S = s.attributes),
                            (N = s.indices),
                            (I = d));
                        var x = i.add(O, w, Ge);
                        (p = J(R, A, g, u, t, E)),
                            ee(y, m, E, a, p, R, o),
                            (p = J(R, A, g, u, -1, x)),
                            ee(y, m, x, a, p, R, o),
                            i.negate(w, w),
                            i.add(O, w, x),
                            (p = J(S, N, I, u, -1, x)),
                            ee(y, m, x, a, p, S, o),
                            (p = J(S, N, I, u, t + 1, T)),
                            ee(y, m, T, a, p, S, o);
                    } else {
                        var M, C, P;
                        E.y < 0
                            ? ((M = l.attributes), (C = l.indices), (P = h))
                            : ((M = s.attributes), (C = s.indices), (P = d)),
                            (p = J(M, C, P, u, t, E)),
                            ee(y, m, E, a, p, M, o),
                            (p = J(M, C, P, u, t + 1, T)),
                            ee(y, m, T, a, p, M, o);
                    }
                }
                j(e, l, s);
            }
            function re(e) {
                for (
                    var t = e.attributes,
                        r = t.position.values,
                        n = t.prevPosition.values,
                        a = t.nextPosition.values,
                        o = r.length,
                        u = 0;
                    u < o;
                    u += 3
                ) {
                    var s = i.unpack(r, u, He);
                    if (!(s.x > 0)) {
                        var c = i.unpack(n, u, Xe);
                        ((s.y < 0 && c.y > 0) || (s.y > 0 && c.y < 0)) &&
                            (u - 3 > 0
                                ? ((n[u] = r[u - 3]), (n[u + 1] = r[u - 2]), (n[u + 2] = r[u - 1]))
                                : i.pack(s, n, u));
                        var l = i.unpack(a, u, ke);
                        ((s.y < 0 && l.y > 0) || (s.y > 0 && l.y < 0)) &&
                            (u + 3 < o
                                ? ((a[u] = r[u + 3]), (a[u + 1] = r[u + 4]), (a[u + 2] = r[u + 5]))
                                : i.pack(s, a, u));
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
                    m = Y(u),
                    E = Y(u),
                    T = !1,
                    R = l.length / 3;
                for (t = 0; t < R; t += 4) {
                    var A = t,
                        g = t + 2,
                        S = i.fromArray(l, 3 * A, He),
                        N = i.fromArray(l, 3 * g, Xe);
                    if (Math.abs(S.y) < Je)
                        for (
                            S.y = Je * (N.y < 0 ? -1 : 1),
                                l[3 * t + 1] = S.y,
                                l[3 * (t + 1) + 1] = S.y,
                                r = 3 * A;
                            r < 3 * A + 12;
                            r += 3
                        )
                            (f[r] = l[3 * t]), (f[r + 1] = l[3 * t + 1]), (f[r + 2] = l[3 * t + 2]);
                    if (Math.abs(N.y) < Je)
                        for (
                            N.y = Je * (S.y < 0 ? -1 : 1),
                                l[3 * (t + 2) + 1] = N.y,
                                l[3 * (t + 3) + 1] = N.y,
                                r = 3 * A;
                            r < 3 * A + 12;
                            r += 3
                        )
                            (h[r] = l[3 * (t + 2)]),
                                (h[r + 1] = l[3 * (t + 2) + 1]),
                                (h[r + 2] = l[3 * (t + 2) + 2]);
                    var I = m.attributes,
                        O = m.indices,
                        w = E.attributes,
                        x = E.indices,
                        M = _.lineSegmentPlane(S, N, ze, Ye);
                    if (c(M)) {
                        T = !0;
                        var C = i.multiplyByScalar(i.UNIT_Y, Qe, je);
                        S.y < 0 &&
                            (i.negate(C, C),
                            (I = E.attributes),
                            (O = E.indices),
                            (w = m.attributes),
                            (x = m.indices));
                        var P = i.add(M, C, Ze);
                        I.position.values.push(S.x, S.y, S.z, S.x, S.y, S.z),
                            I.position.values.push(P.x, P.y, P.z),
                            I.position.values.push(P.x, P.y, P.z),
                            I.prevPosition.values.push(f[3 * A], f[3 * A + 1], f[3 * A + 2]),
                            I.prevPosition.values.push(f[3 * A + 3], f[3 * A + 4], f[3 * A + 5]),
                            I.prevPosition.values.push(S.x, S.y, S.z, S.x, S.y, S.z),
                            I.nextPosition.values.push(P.x, P.y, P.z),
                            I.nextPosition.values.push(P.x, P.y, P.z),
                            I.nextPosition.values.push(P.x, P.y, P.z),
                            I.nextPosition.values.push(P.x, P.y, P.z),
                            i.negate(C, C),
                            i.add(M, C, P),
                            w.position.values.push(P.x, P.y, P.z),
                            w.position.values.push(P.x, P.y, P.z),
                            w.position.values.push(N.x, N.y, N.z, N.x, N.y, N.z),
                            w.prevPosition.values.push(P.x, P.y, P.z),
                            w.prevPosition.values.push(P.x, P.y, P.z),
                            w.prevPosition.values.push(P.x, P.y, P.z),
                            w.prevPosition.values.push(P.x, P.y, P.z),
                            w.nextPosition.values.push(N.x, N.y, N.z, N.x, N.y, N.z),
                            w.nextPosition.values.push(h[3 * g], h[3 * g + 1], h[3 * g + 2]),
                            w.nextPosition.values.push(h[3 * g + 3], h[3 * g + 4], h[3 * g + 5]);
                        var b = n.fromArray(d, 2 * A, Ve),
                            U = Math.abs(b.y);
                        I.expandAndWidth.values.push(-1, U, 1, U),
                            I.expandAndWidth.values.push(-1, -U, 1, -U),
                            w.expandAndWidth.values.push(-1, U, 1, U),
                            w.expandAndWidth.values.push(-1, -U, 1, -U);
                        var D = i.magnitudeSquared(i.subtract(M, S, ke));
                        if (((D /= i.magnitudeSquared(i.subtract(N, S, ke))), c(y))) {
                            var L = a.fromArray(y, 4 * A, Ke),
                                F = a.fromArray(y, 4 * g, Ke),
                                B = v.lerp(L.x, F.x, D),
                                z = v.lerp(L.y, F.y, D),
                                q = v.lerp(L.z, F.z, D),
                                G = v.lerp(L.w, F.w, D);
                            for (r = 4 * A; r < 4 * A + 8; ++r) I.color.values.push(y[r]);
                            for (
                                I.color.values.push(B, z, q, G),
                                    I.color.values.push(B, z, q, G),
                                    w.color.values.push(B, z, q, G),
                                    w.color.values.push(B, z, q, G),
                                    r = 4 * g;
                                r < 4 * g + 8;
                                ++r
                            )
                                w.color.values.push(y[r]);
                        }
                        if (c(p)) {
                            var V = n.fromArray(p, 2 * A, Ve),
                                W = n.fromArray(p, 2 * (t + 3), We),
                                H = v.lerp(V.x, W.x, D);
                            for (r = 2 * A; r < 2 * A + 4; ++r) I.st.values.push(p[r]);
                            for (
                                I.st.values.push(H, V.y),
                                    I.st.values.push(H, W.y),
                                    w.st.values.push(H, V.y),
                                    w.st.values.push(H, W.y),
                                    r = 2 * g;
                                r < 2 * g + 4;
                                ++r
                            )
                                w.st.values.push(p[r]);
                        }
                        (o = I.position.values.length / 3 - 4),
                            O.push(o, o + 2, o + 1),
                            O.push(o + 1, o + 2, o + 3),
                            (o = w.position.values.length / 3 - 4),
                            x.push(o, o + 2, o + 1),
                            x.push(o + 1, o + 2, o + 3);
                    } else {
                        var X, k;
                        for (
                            S.y < 0
                                ? ((X = E.attributes), (k = E.indices))
                                : ((X = m.attributes), (k = m.indices)),
                                X.position.values.push(S.x, S.y, S.z),
                                X.position.values.push(S.x, S.y, S.z),
                                X.position.values.push(N.x, N.y, N.z),
                                X.position.values.push(N.x, N.y, N.z),
                                r = 3 * t;
                            r < 3 * t + 12;
                            ++r
                        )
                            X.prevPosition.values.push(f[r]), X.nextPosition.values.push(h[r]);
                        for (r = 2 * t; r < 2 * t + 8; ++r)
                            X.expandAndWidth.values.push(d[r]), c(p) && X.st.values.push(p[r]);
                        if (c(y)) for (r = 4 * t; r < 4 * t + 16; ++r) X.color.values.push(y[r]);
                        (o = X.position.values.length / 3 - 4),
                            k.push(o, o + 2, o + 1),
                            k.push(o + 1, o + 2, o + 3);
                    }
                }
                T && (re(E), re(m)), j(e, E, m);
            }
            var ie = {};
            (ie.toWireframe = function(e) {
                var t = e.indices;
                if (c(t)) {
                    switch (e.primitiveType) {
                        case g.TRIANGLES:
                            e.indices = I(t);
                            break;
                        case g.TRIANGLE_STRIP:
                            e.indices = O(t);
                            break;
                        case g.TRIANGLE_FAN:
                            e.indices = w(t);
                    }
                    e.primitiveType = g.LINES;
                }
                return e;
            }),
                (ie.createLineSegmentsForVectors = function(e, t, n) {
                    (t = s(t, "normal")), (n = s(n, 1e4));
                    for (
                        var i = e.attributes.position.values,
                            a = e.attributes[t].values,
                            o = i.length,
                            l = new Float64Array(2 * o),
                            f = 0,
                            h = 0;
                        h < o;
                        h += 3
                    )
                        (l[f++] = i[h]),
                            (l[f++] = i[h + 1]),
                            (l[f++] = i[h + 2]),
                            (l[f++] = i[h] + a[h] * n),
                            (l[f++] = i[h + 1] + a[h + 1] * n),
                            (l[f++] = i[h + 2] + a[h + 2] * n);
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
                (ie.createAttributeLocations = function(e) {
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
                        i = {},
                        a = 0,
                        o = r.length;
                    for (t = 0; t < o; ++t) {
                        var u = r[t];
                        c(n[u]) && (i[u] = a++);
                    }
                    for (var s in n) n.hasOwnProperty(s) && !c(i[s]) && (i[s] = a++);
                    return i;
                }),
                (ie.reorderForPreVertexCache = function(e) {
                    var t = d.computeNumberOfVertices(e),
                        r = e.indices;
                    if (c(r)) {
                        for (var n = new Int32Array(t), i = 0; i < t; i++) n[i] = -1;
                        for (
                            var a,
                                o = r,
                                s = o.length,
                                l = m.createTypedArray(t, s),
                                f = 0,
                                h = 0,
                                p = 0;
                            f < s;

                        )
                            (a = n[o[f]]),
                                -1 !== a ? (l[h] = a) : ((a = o[f]), (n[a] = p), (l[h] = p), ++p),
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
                (ie.reorderForPostVertexCache = function(e, t) {
                    var r = e.indices;
                    if (e.primitiveType === g.TRIANGLES && c(r)) {
                        for (var n = r.length, i = 0, a = 0; a < n; a++) r[a] > i && (i = r[a]);
                        e.indices = S.tipsify({ indices: r, maximumIndex: i, cacheSize: t });
                    }
                    return e;
                }),
                (ie.fitToUnsignedShortIndices = function(e) {
                    var t = [],
                        r = d.computeNumberOfVertices(e);
                    if (c(e.indices) && r >= v.SIXTY_FOUR_KILOBYTES) {
                        var n,
                            i = [],
                            a = [],
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
                                    y = i[p];
                                c(y) || ((y = o++), (i[p] = y), M(u, e.attributes, p)), a.push(y);
                            }
                            o + n >= v.SIXTY_FOUR_KILOBYTES &&
                                (t.push(
                                    new d({
                                        attributes: u,
                                        indices: a,
                                        primitiveType: e.primitiveType,
                                        boundingSphere: e.boundingSphere,
                                        boundingSphereCV: e.boundingSphereCV
                                    })
                                ),
                                (i = []),
                                (a = []),
                                (o = 0),
                                (u = x(e.attributes)));
                        }
                        0 !== a.length &&
                            t.push(
                                new d({
                                    attributes: u,
                                    indices: a,
                                    primitiveType: e.primitiveType,
                                    boundingSphere: e.boundingSphere,
                                    boundingSphereCV: e.boundingSphereCV
                                })
                            );
                    } else t.push(e);
                    return t;
                });
            var ae = new i(),
                oe = new o();
            ie.projectTo2D = function(e, t, r, n, a) {
                var o = e.attributes[t];
                a = c(a) ? a : new h();
                for (
                    var s = a.ellipsoid, l = o.values, f = new Float64Array(l.length), d = 0, y = 0;
                    y < l.length;
                    y += 3
                ) {
                    var m = i.fromArray(l, y, ae),
                        E = s.cartesianToCartographic(m, oe),
                        _ = a.project(E, ae);
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
            ie.encodeAttribute = function(e, t, r, n) {
                for (
                    var i = e.attributes[t],
                        a = i.values,
                        o = a.length,
                        s = new Float32Array(o),
                        c = new Float32Array(o),
                        l = 0;
                    l < o;
                    ++l
                )
                    f.encode(a[l], ue), (s[l] = ue.high), (c[l] = ue.low);
                var h = i.componentsPerAttribute;
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
            var se = new i(),
                ce = new R(),
                le = new T();
            ie.transformToWorldCoordinates = function(e) {
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
                var i = e.geometry.boundingSphere;
                return (
                    c(i) && (e.geometry.boundingSphere = r.transform(i, t, i)),
                    (e.modelMatrix = R.clone(R.IDENTITY)),
                    e
                );
            };
            var fe = new i();
            ie.combineInstances = function(e) {
                for (var t = [], r = [], n = e.length, i = 0; i < n; ++i) {
                    var a = e[i];
                    c(a.geometry)
                        ? t.push(a)
                        : c(a.westHemisphereGeometry) && c(a.eastHemisphereGeometry) && r.push(a);
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
            var he = new i(),
                de = new i(),
                pe = new i(),
                ye = new i();
            ie.computeNormal = function(e) {
                var t,
                    r = e.indices,
                    n = e.attributes,
                    a = n.position.values,
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
                    (de.x = a[E]),
                        (de.y = a[E + 1]),
                        (de.z = a[E + 2]),
                        (pe.x = a[_]),
                        (pe.y = a[_ + 1]),
                        (pe.z = a[_ + 2]),
                        (ye.x = a[T]),
                        (ye.y = a[T + 1]),
                        (ye.z = a[T + 2]),
                        c[d].count++,
                        c[y].count++,
                        c[m].count++,
                        i.subtract(pe, de, pe),
                        i.subtract(ye, de, ye),
                        (l[h] = i.cross(pe, ye, new i())),
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
                    var N = 3 * t;
                    if (((A = c[t]), i.clone(i.ZERO, he), A.count > 0)) {
                        for (h = 0; h < A.count; h++) i.add(he, l[f[A.indexOffset + h]], he);
                        i.equalsEpsilon(i.ZERO, he, v.EPSILON10) &&
                            i.clone(l[f[A.indexOffset]], he);
                    }
                    i.equalsEpsilon(i.ZERO, he, v.EPSILON10) && (he.z = 1),
                        i.normalize(he, he),
                        (S[N] = he.x),
                        (S[N + 1] = he.y),
                        (S[N + 2] = he.z);
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
            var me = new i(),
                Ee = new i(),
                _e = new i();
            ie.computeTangentAndBitangent = function(e) {
                var t,
                    r = (e.attributes, e.indices),
                    n = e.attributes.position.values,
                    a = e.attributes.normal.values,
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
                        N = o[_ + 1],
                        I = o[v + 1] - N,
                        O = o[T + 1] - N,
                        w = 1 / ((o[v] - S) * O - (o[T] - S) * I),
                        x = (O * (n[h] - R) - I * (n[d] - R)) * w,
                        M = (O * (n[h + 1] - A) - I * (n[d + 1] - A)) * w,
                        C = (O * (n[h + 2] - g) - I * (n[d + 2] - g)) * w;
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
                    var U = i.fromArray(a, f, me),
                        D = i.fromArray(l, f, _e),
                        L = i.dot(U, D);
                    i.multiplyByScalar(U, L, Ee),
                        i.normalize(i.subtract(D, Ee, D), D),
                        (P[f] = D.x),
                        (P[h] = D.y),
                        (P[d] = D.z),
                        i.normalize(i.cross(U, D, D), D),
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
                Te = new i(),
                Re = new i(),
                Ae = new i(),
                ge = new n();
            ie.compressVertices = function(t) {
                var r,
                    a,
                    o = t.attributes.extrudeDirection;
                if (c(o)) {
                    var s = o.values;
                    a = s.length / 3;
                    var l = new Float32Array(2 * a),
                        f = 0;
                    for (r = 0; r < a; ++r)
                        i.fromArray(s, 3 * r, Te),
                            i.equals(Te, i.ZERO)
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
                    (a = (y ? E.length : _.length) / (y ? 3 : 2));
                var N = a,
                    I = m && y ? 2 : 1;
                (I += g || S ? 1 : 0), (N *= I);
                var O = new Float32Array(N),
                    w = 0;
                for (r = 0; r < a; ++r) {
                    m && (n.fromArray(_, 2 * r, ve), (O[w++] = e.compressTextureCoordinates(ve)));
                    var x = 3 * r;
                    y && c(v) && c(T)
                        ? (i.fromArray(E, x, Te),
                          i.fromArray(v, x, Re),
                          i.fromArray(T, x, Ae),
                          e.octPack(Te, Re, Ae, ve),
                          (O[w++] = ve.x),
                          (O[w++] = ve.y))
                        : (y && (i.fromArray(E, x, Te), (O[w++] = e.octEncodeFloat(Te))),
                          g && (i.fromArray(v, x, Te), (O[w++] = e.octEncodeFloat(Te))),
                          S && (i.fromArray(T, x, Te), (O[w++] = e.octEncodeFloat(Te))));
                }
                return (
                    (t.attributes.compressedAttributes = new p({
                        componentDatatype: u.FLOAT,
                        componentsPerAttribute: I,
                        values: O
                    })),
                    y && delete t.attributes.normal,
                    m && delete t.attributes.st,
                    S && delete t.attributes.bitangent,
                    g && delete t.attributes.tangent,
                    t
                );
            };
            var Se = new i(),
                Ne = new i(),
                Ie = new i(),
                Oe = new i(),
                we = new i(),
                xe = { positions: new Array(7), indices: new Array(9) },
                Me = Z(a, 4),
                Ce = Z(i, 3),
                Pe = Z(n, 2),
                be = function(e, t, r, n, i, a, o) {
                    var u = i[e] * n.x,
                        s = i[t] * n.y,
                        c = i[r] * n.z;
                    a[o] = u + s + c > v.EPSILON6 ? 1 : 0;
                },
                Ue = new i(),
                De = new i(),
                Le = new i(),
                Fe = new i(),
                Be = {
                    position: !0,
                    normal: !0,
                    bitangent: !0,
                    tangent: !0,
                    st: !0,
                    extrudeDirection: !0,
                    applyOffset: !0
                },
                ze = A.fromPointNormal(i.ZERO, i.UNIT_Y),
                qe = new i(),
                Ge = new i(),
                Ve = new n(),
                We = new n(),
                He = new i(),
                Xe = new i(),
                ke = new i(),
                Ye = new i(),
                je = new i(),
                Ze = new i(),
                Ke = new a(),
                Qe = 5 * v.EPSILON9,
                Je = v.EPSILON6;
            return (
                (ie.splitLongitude = function(e) {
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
                ie
            );
        }),
        define("ThirdParty/earcut-2.1.1", [], function() {
            "use strict";
            function e(e, r, i) {
                i = i || 2;
                var a = r && r.length,
                    o = a ? r[0] * i : e.length,
                    u = t(e, 0, o, i, !0),
                    c = [];
                if (!u) return c;
                var l, f, h, d, p, y, m;
                if ((a && (u = s(e, r, u, i)), e.length > 80 * i)) {
                    (l = h = e[0]), (f = d = e[1]);
                    for (var E = i; E < o; E += i)
                        (p = e[E]),
                            (y = e[E + 1]),
                            p < l && (l = p),
                            y < f && (f = y),
                            p > h && (h = p),
                            y > d && (d = y);
                    m = Math.max(h - l, d - f);
                }
                return n(u, c, i, l, f, m), c;
            }
            function t(e, t, r, n, i) {
                var a, o;
                if (i === w(e, t, r, n) > 0) for (a = t; a < r; a += n) o = N(a, e[a], e[a + 1], o);
                else for (a = r - n; a >= t; a -= n) o = N(a, e[a], e[a + 1], o);
                return o && v(o, o.next) && (I(o), (o = o.next)), o;
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
                        if ((I(n), (n = t = n.prev) === n.next)) return null;
                        r = !0;
                    }
                } while (r || n !== t);
                return t;
            }
            function n(e, t, s, c, l, f, d) {
                if (e) {
                    !d && f && h(e, c, l, f);
                    for (var p, y, m = e; e.prev !== e.next; )
                        if (((p = e.prev), (y = e.next), f ? a(e, c, l, f) : i(e)))
                            t.push(p.i / s),
                                t.push(e.i / s),
                                t.push(y.i / s),
                                I(e),
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
            function i(e) {
                var t = e.prev,
                    r = e,
                    n = e.next;
                if (_(t, r, n) >= 0) return !1;
                for (var i = e.next.next; i !== e.prev; ) {
                    if (m(t.x, t.y, r.x, r.y, n.x, n.y, i.x, i.y) && _(i.prev, i, i.next) >= 0)
                        return !1;
                    i = i.next;
                }
                return !0;
            }
            function a(e, t, r, n) {
                var i = e.prev,
                    a = e,
                    o = e.next;
                if (_(i, a, o) >= 0) return !1;
                for (
                    var u = i.x < a.x ? (i.x < o.x ? i.x : o.x) : a.x < o.x ? a.x : o.x,
                        s = i.y < a.y ? (i.y < o.y ? i.y : o.y) : a.y < o.y ? a.y : o.y,
                        c = i.x > a.x ? (i.x > o.x ? i.x : o.x) : a.x > o.x ? a.x : o.x,
                        l = i.y > a.y ? (i.y > o.y ? i.y : o.y) : a.y > o.y ? a.y : o.y,
                        f = p(u, s, t, r, n),
                        h = p(c, l, t, r, n),
                        d = e.nextZ;
                    d && d.z <= h;

                ) {
                    if (
                        d !== e.prev &&
                        d !== e.next &&
                        m(i.x, i.y, a.x, a.y, o.x, o.y, d.x, d.y) &&
                        _(d.prev, d, d.next) >= 0
                    )
                        return !1;
                    d = d.nextZ;
                }
                for (d = e.prevZ; d && d.z >= f; ) {
                    if (
                        d !== e.prev &&
                        d !== e.next &&
                        m(i.x, i.y, a.x, a.y, o.x, o.y, d.x, d.y) &&
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
                    var i = n.prev,
                        a = n.next.next;
                    !v(i, a) &&
                        T(i, n, n.next, a) &&
                        A(i, a) &&
                        A(a, i) &&
                        (t.push(i.i / r),
                        t.push(n.i / r),
                        t.push(a.i / r),
                        I(n),
                        I(n.next),
                        (n = e = a)),
                        (n = n.next);
                } while (n !== e);
                return n;
            }
            function u(e, t, i, a, o, u) {
                var s = e;
                do {
                    for (var c = s.next.next; c !== s.prev; ) {
                        if (s.i !== c.i && E(s, c)) {
                            var l = S(s, c);
                            return (
                                (s = r(s, s.next)),
                                (l = r(l, l.next)),
                                n(s, t, i, a, o, u),
                                void n(l, t, i, a, o, u)
                            );
                        }
                        c = c.next;
                    }
                    s = s.next;
                } while (s !== e);
            }
            function s(e, n, i, a) {
                var o,
                    u,
                    s,
                    f,
                    h,
                    d = [];
                for (o = 0, u = n.length; o < u; o++)
                    (s = n[o] * a),
                        (f = o < u - 1 ? n[o + 1] * a : e.length),
                        (h = t(e, s, f, a, !1)),
                        h === h.next && (h.steiner = !0),
                        d.push(y(h));
                for (d.sort(c), o = 0; o < d.length; o++) l(d[o], i), (i = r(i, i.next));
                return i;
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
                    i = e.x,
                    a = e.y,
                    o = -1 / 0;
                do {
                    if (a <= n.y && a >= n.next.y) {
                        var u = n.x + ((a - n.y) * (n.next.x - n.x)) / (n.next.y - n.y);
                        if (u <= i && u > o) {
                            if (((o = u), u === i)) {
                                if (a === n.y) return n;
                                if (a === n.next.y) return n.next;
                            }
                            r = n.x < n.next.x ? n : n.next;
                        }
                    }
                    n = n.next;
                } while (n !== t);
                if (!r) return null;
                if (i === o) return r.prev;
                var s,
                    c = r,
                    l = r.x,
                    f = r.y,
                    h = 1 / 0;
                for (n = r.next; n !== c; )
                    i >= n.x &&
                        n.x >= l &&
                        m(a < f ? i : o, a, l, f, a < f ? o : i, a, n.x, n.y) &&
                        ((s = Math.abs(a - n.y) / (i - n.x)) < h || (s === h && n.x > r.x)) &&
                        A(n, e) &&
                        ((r = n), (h = s)),
                        (n = n.next);
                return r;
            }
            function h(e, t, r, n) {
                var i = e;
                do {
                    null === i.z && (i.z = p(i.x, i.y, t, r, n)),
                        (i.prevZ = i.prev),
                        (i.nextZ = i.next),
                        (i = i.next);
                } while (i !== e);
                (i.prevZ.nextZ = null), (i.prevZ = null), d(i);
            }
            function d(e) {
                var t,
                    r,
                    n,
                    i,
                    a,
                    o,
                    u,
                    s,
                    c = 1;
                do {
                    for (r = e, e = null, a = null, o = 0; r; ) {
                        for (o++, n = r, u = 0, t = 0; t < c && (u++, (n = n.nextZ)); t++);
                        for (s = c; u > 0 || (s > 0 && n); )
                            0 === u
                                ? ((i = n), (n = n.nextZ), s--)
                                : 0 !== s && n
                                ? r.z <= n.z
                                    ? ((i = r), (r = r.nextZ), u--)
                                    : ((i = n), (n = n.nextZ), s--)
                                : ((i = r), (r = r.nextZ), u--),
                                a ? (a.nextZ = i) : (e = i),
                                (i.prevZ = a),
                                (a = i);
                        r = n;
                    }
                    (a.nextZ = null), (c *= 2);
                } while (o > 1);
                return e;
            }
            function p(e, t, r, n, i) {
                return (
                    (e = (32767 * (e - r)) / i),
                    (t = (32767 * (t - n)) / i),
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
            function m(e, t, r, n, i, a, o, u) {
                return (
                    (i - o) * (t - u) - (e - o) * (a - u) >= 0 &&
                    (e - o) * (n - u) - (r - o) * (t - u) >= 0 &&
                    (r - o) * (a - u) - (i - o) * (n - u) >= 0
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
                    i = (e.x + t.x) / 2,
                    a = (e.y + t.y) / 2;
                do {
                    r.y > a != r.next.y > a &&
                        i < ((r.next.x - r.x) * (a - r.y)) / (r.next.y - r.y) + r.x &&
                        (n = !n),
                        (r = r.next);
                } while (r !== e);
                return n;
            }
            function S(e, t) {
                var r = new O(e.i, e.x, e.y),
                    n = new O(t.i, t.x, t.y),
                    i = e.next,
                    a = t.prev;
                return (
                    (e.next = t),
                    (t.prev = e),
                    (r.next = i),
                    (i.prev = r),
                    (n.next = r),
                    (r.prev = n),
                    (a.next = n),
                    (n.prev = a),
                    n
                );
            }
            function N(e, t, r, n) {
                var i = new O(e, t, r);
                return (
                    n
                        ? ((i.next = n.next), (i.prev = n), (n.next.prev = i), (n.next = i))
                        : ((i.prev = i), (i.next = i)),
                    i
                );
            }
            function I(e) {
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
            function w(e, t, r, n) {
                for (var i = 0, a = t, o = r - n; a < r; a += n)
                    (i += (e[o] - e[a]) * (e[a + 1] + e[o + 1])), (o = a);
                return i;
            }
            return (
                (e.deviation = function(e, t, r, n) {
                    var i = t && t.length,
                        a = i ? t[0] * r : e.length,
                        o = Math.abs(w(e, 0, a, r));
                    if (i)
                        for (var u = 0, s = t.length; u < s; u++) {
                            var c = t[u] * r,
                                l = u < s - 1 ? t[u + 1] * r : e.length;
                            o -= Math.abs(w(e, c, l, r));
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
                            i = 0;
                        i < e.length;
                        i++
                    ) {
                        for (var a = 0; a < e[i].length; a++)
                            for (var o = 0; o < t; o++) r.vertices.push(e[i][a][o]);
                        i > 0 && ((n += e[i - 1].length), r.holes.push(n));
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
        ], function(e, t, r, n, i, a, o, u, s, c, l, f, h) {
            "use strict";
            var d = new r(),
                p = new r(),
                y = {};
            (y.computeArea2D = function(e) {
                for (var t = e.length, r = 0, n = t - 1, i = 0; i < t; n = i++) {
                    var a = e[n],
                        o = e[i];
                    r += a.x * o.y - o.x * a.y;
                }
                return 0.5 * r;
            }),
                (y.computeWindingOrder2D = function(e) {
                    return y.computeArea2D(e) > 0 ? h.COUNTER_CLOCKWISE : h.CLOCKWISE;
                }),
                (y.triangulate = function(r, n) {
                    var i = t.packArray(r);
                    return e(i, n, 2);
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
                    u = a(u, l.RADIANS_PER_DEGREE);
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
                        var N = [], I = {}, O = e.maximumRadius, w = l.chordLength(u, O), x = w * w;
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
                            W = r.magnitudeSquared(r.subtract(q, B, A)),
                            H = Math.max(G, V, W);
                        H > x
                            ? G === H
                                ? ((M = Math.min(U, b) + " " + Math.max(U, b)),
                                  (h = I[M]),
                                  o(h) ||
                                      ((C = r.add(D, L, A)),
                                      r.multiplyByScalar(C, 0.5, C),
                                      y.push(C.x, C.y, C.z),
                                      (h = y.length / 3 - 1),
                                      (I[M] = h)),
                                  d.push(U, h, P),
                                  d.push(h, b, P))
                                : V === H
                                ? ((M = Math.min(b, P) + " " + Math.max(b, P)),
                                  (h = I[M]),
                                  o(h) ||
                                      ((C = r.add(L, F, A)),
                                      r.multiplyByScalar(C, 0.5, C),
                                      y.push(C.x, C.y, C.z),
                                      (h = y.length / 3 - 1),
                                      (I[M] = h)),
                                  d.push(b, h, U),
                                  d.push(h, P, U))
                                : W === H &&
                                  ((M = Math.min(P, U) + " " + Math.max(P, U)),
                                  (h = I[M]),
                                  o(h) ||
                                      ((C = r.add(F, D, A)),
                                      r.multiplyByScalar(C, 0.5, C),
                                      y.push(C.x, C.y, C.z),
                                      (h = y.length / 3 - 1),
                                      (I[M] = h)),
                                  d.push(P, h, b),
                                  d.push(h, U, b))
                            : (N.push(U), N.push(b), N.push(P));
                    }
                    return new s({
                        attributes: {
                            position: new c({
                                componentDatatype: i.DOUBLE,
                                componentsPerAttribute: 3,
                                values: y
                            })
                        },
                        indices: N,
                        primitiveType: f.TRIANGLES
                    });
                }),
                (y.scaleToGeodeticHeight = function(e, t, n, i) {
                    n = a(n, u.WGS84);
                    var s = d,
                        c = p;
                    if (((t = a(t, 0)), (i = a(i, !0)), o(e)))
                        for (var l = e.length, f = 0; f < l; f += 3)
                            r.fromArray(e, f, c),
                                i && (c = n.scaleToGeodeticSurface(c, c)),
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
        define("Core/Queue", ["./defineProperties"], function(e) {
            "use strict";
            function t() {
                (this._array = []), (this._offset = 0), (this._length = 0);
            }
            return (
                e(t.prototype, {
                    length: {
                        get: function() {
                            return this._length;
                        }
                    }
                }),
                (t.prototype.enqueue = function(e) {
                    this._array.push(e), this._length++;
                }),
                (t.prototype.dequeue = function() {
                    if (0 !== this._length) {
                        var e = this._array,
                            t = this._offset,
                            r = e[t];
                        return (
                            (e[t] = void 0),
                            t++,
                            t > 10 && 2 * t > e.length && ((this._array = e.slice(t)), (t = 0)),
                            (this._offset = t),
                            this._length--,
                            r
                        );
                    }
                }),
                (t.prototype.peek = function() {
                    if (0 !== this._length) return this._array[this._offset];
                }),
                (t.prototype.contains = function(e) {
                    return -1 !== this._array.indexOf(e);
                }),
                (t.prototype.clear = function() {
                    this._array.length = this._offset = this._length = 0;
                }),
                (t.prototype.sort = function(e) {
                    this._offset > 0 &&
                        ((this._array = this._array.slice(this._offset)), (this._offset = 0)),
                        this._array.sort(e);
                }),
                t
            );
        }),
        define("Core/PolygonGeometryLibrary", [
            "./arrayRemoveDuplicates",
            "./Cartesian2",
            "./Cartesian3",
            "./ComponentDatatype",
            "./defaultValue",
            "./defined",
            "./Ellipsoid",
            "./Geometry",
            "./GeometryAttribute",
            "./GeometryAttributes",
            "./GeometryPipeline",
            "./IndexDatatype",
            "./Math",
            "./Matrix3",
            "./PolygonPipeline",
            "./PrimitiveType",
            "./Quaternion",
            "./Queue",
            "./WindingOrder"
        ], function(e, t, r, n, i, a, o, u, s, c, l, f, h, d, p, y, m, E, _) {
            "use strict";
            function v(e, t, n, i) {
                return (
                    r.subtract(t, e, R),
                    r.multiplyByScalar(R, n / i, R),
                    r.add(e, R, R),
                    [R.x, R.y, R.z]
                );
            }
            var T = {};
            (T.computeHierarchyPackedLength = function(e) {
                for (var t = 0, n = [e]; n.length > 0; ) {
                    var i = n.pop();
                    if (a(i)) {
                        t += 2;
                        var o = i.positions,
                            u = i.holes;
                        if ((a(o) && (t += o.length * r.packedLength), a(u)))
                            for (var s = u.length, c = 0; c < s; ++c) n.push(u[c]);
                    }
                }
                return t;
            }),
                (T.packPolygonHierarchy = function(e, t, n) {
                    for (var i = [e]; i.length > 0; ) {
                        var o = i.pop();
                        if (a(o)) {
                            var u = o.positions,
                                s = o.holes;
                            if (
                                ((t[n++] = a(u) ? u.length : 0),
                                (t[n++] = a(s) ? s.length : 0),
                                a(u))
                            )
                                for (var c = u.length, l = 0; l < c; ++l, n += 3)
                                    r.pack(u[l], t, n);
                            if (a(s)) for (var f = s.length, h = 0; h < f; ++h) i.push(s[h]);
                        }
                    }
                    return n;
                }),
                (T.unpackPolygonHierarchy = function(e, t) {
                    for (
                        var n = e[t++],
                            i = e[t++],
                            a = new Array(n),
                            o = i > 0 ? new Array(i) : void 0,
                            u = 0;
                        u < n;
                        ++u, t += r.packedLength
                    )
                        a[u] = r.unpack(e, t);
                    for (var s = 0; s < i; ++s)
                        (o[s] = T.unpackPolygonHierarchy(e, t)),
                            (t = o[s].startingIndex),
                            delete o[s].startingIndex;
                    return { positions: a, holes: o, startingIndex: t };
                });
            var R = new r();
            (T.subdivideLineCount = function(e, t, n) {
                var i = r.distance(e, t),
                    a = i / n,
                    o = Math.max(0, Math.ceil(Math.log(a) / Math.log(2)));
                return Math.pow(2, o);
            }),
                (T.subdivideLine = function(e, t, n, i) {
                    var o = T.subdivideLineCount(e, t, n),
                        u = r.distance(e, t),
                        s = u / o;
                    a(i) || (i = []);
                    var c = i;
                    c.length = 3 * o;
                    for (var l = 0, f = 0; f < o; f++) {
                        var h = v(e, t, f * s, u);
                        (c[l++] = h[0]), (c[l++] = h[1]), (c[l++] = h[2]);
                    }
                    return c;
                });
            var A = new r(),
                g = new r(),
                S = new r(),
                N = new r();
            (T.scaleToGeodeticHeightExtruded = function(e, t, n, u, s) {
                u = i(u, o.WGS84);
                var c = A,
                    l = g,
                    f = S,
                    h = N;
                if (a(e) && a(e.attributes) && a(e.attributes.position))
                    for (
                        var d = e.attributes.position.values, p = d.length / 2, y = 0;
                        y < p;
                        y += 3
                    )
                        r.fromArray(d, y, f),
                            u.geodeticSurfaceNormal(f, c),
                            (h = u.scaleToGeodeticSurface(f, h)),
                            (l = r.multiplyByScalar(c, n, l)),
                            (l = r.add(h, l, l)),
                            (d[y + p] = l.x),
                            (d[y + 1 + p] = l.y),
                            (d[y + 2 + p] = l.z),
                            s && (h = r.clone(f, h)),
                            (l = r.multiplyByScalar(c, t, l)),
                            (l = r.add(h, l, l)),
                            (d[y] = l.x),
                            (d[y + 1] = l.y),
                            (d[y + 2] = l.z);
                return e;
            }),
                (T.polygonOutlinesFromHierarchy = function(t, n, i) {
                    var o = [],
                        u = new E();
                    u.enqueue(t);
                    for (var s, c, l; 0 !== u.length; ) {
                        var f = u.dequeue(),
                            h = f.positions;
                        if (n)
                            for (l = h.length, s = 0; s < l; s++)
                                i.scaleToGeodeticSurface(h[s], h[s]);
                        if (((h = e(h, r.equalsEpsilon, !0)), !(h.length < 3))) {
                            var d = f.holes ? f.holes.length : 0;
                            for (s = 0; s < d; s++) {
                                var p = f.holes[s],
                                    y = p.positions;
                                if (n)
                                    for (l = y.length, c = 0; c < l; ++c)
                                        i.scaleToGeodeticSurface(y[c], y[c]);
                                if (((y = e(y, r.equalsEpsilon, !0)), !(y.length < 3))) {
                                    o.push(y);
                                    var m = 0;
                                    for (a(p.holes) && (m = p.holes.length), c = 0; c < m; c++)
                                        u.enqueue(p.holes[c]);
                                }
                            }
                            o.push(h);
                        }
                    }
                    return o;
                }),
                (T.polygonsFromHierarchy = function(t, n, i, o) {
                    var u = [],
                        s = [],
                        c = new E();
                    for (c.enqueue(t); 0 !== c.length; ) {
                        var l,
                            f,
                            h = c.dequeue(),
                            d = h.positions,
                            y = h.holes;
                        if (i)
                            for (f = d.length, l = 0; l < f; l++)
                                o.scaleToGeodeticSurface(d[l], d[l]);
                        if (((d = e(d, r.equalsEpsilon, !0)), !(d.length < 3))) {
                            var m = n(d);
                            if (a(m)) {
                                var v = [],
                                    T = p.computeWindingOrder2D(m);
                                T === _.CLOCKWISE && (m.reverse(), (d = d.slice().reverse()));
                                var R,
                                    A = d.slice(),
                                    g = a(y) ? y.length : 0,
                                    S = [];
                                for (l = 0; l < g; l++) {
                                    var N = y[l],
                                        I = N.positions;
                                    if (i)
                                        for (f = I.length, R = 0; R < f; ++R)
                                            o.scaleToGeodeticSurface(I[R], I[R]);
                                    if (((I = e(I, r.equalsEpsilon, !0)), !(I.length < 3))) {
                                        var O = n(I);
                                        if (a(O)) {
                                            (T = p.computeWindingOrder2D(O)),
                                                T === _.CLOCKWISE &&
                                                    (O.reverse(), (I = I.slice().reverse())),
                                                S.push(I),
                                                v.push(A.length),
                                                (A = A.concat(I)),
                                                (m = m.concat(O));
                                            var w = 0;
                                            for (
                                                a(N.holes) && (w = N.holes.length), R = 0;
                                                R < w;
                                                R++
                                            )
                                                c.enqueue(N.holes[R]);
                                        }
                                    }
                                }
                                u.push({ outerRing: d, holes: S }),
                                    s.push({ positions: A, positions2D: m, holes: v });
                            }
                        }
                    }
                    return { hierarchy: u, polygons: s };
                });
            var I = new t(),
                O = new r(),
                w = new m(),
                x = new d();
            (T.computeBoundingRectangle = function(e, t, n, i, o) {
                for (
                    var u = m.fromAxisAngle(e, i, w),
                        s = d.fromQuaternion(u, x),
                        c = Number.POSITIVE_INFINITY,
                        l = Number.NEGATIVE_INFINITY,
                        f = Number.POSITIVE_INFINITY,
                        h = Number.NEGATIVE_INFINITY,
                        p = n.length,
                        y = 0;
                    y < p;
                    ++y
                ) {
                    var E = r.clone(n[y], O);
                    d.multiplyByVector(s, E, E);
                    var _ = t(E, I);
                    a(_) &&
                        ((c = Math.min(c, _.x)),
                        (l = Math.max(l, _.x)),
                        (f = Math.min(f, _.y)),
                        (h = Math.max(h, _.y)));
                }
                return (o.x = c), (o.y = f), (o.width = l - c), (o.height = h - f), o;
            }),
                (T.createGeometryFromPositions = function(e, t, r, i, a) {
                    var o = p.triangulate(t.positions2D, t.holes);
                    o.length < 3 && (o = [0, 1, 2]);
                    var c = t.positions;
                    if (i) {
                        for (var f = c.length, h = new Array(3 * f), d = 0, m = 0; m < f; m++) {
                            var E = c[m];
                            (h[d++] = E.x), (h[d++] = E.y), (h[d++] = E.z);
                        }
                        var _ = new u({
                            attributes: {
                                position: new s({
                                    componentDatatype: n.DOUBLE,
                                    componentsPerAttribute: 3,
                                    values: h
                                })
                            },
                            indices: o,
                            primitiveType: y.TRIANGLES
                        });
                        return a.normal ? l.computeNormal(_) : _;
                    }
                    return p.computeSubdivision(e, c, o, r);
                });
            var M = [],
                C = new r(),
                P = new r();
            return (
                (T.computeWallGeometry = function(e, t, i, a) {
                    var o,
                        l,
                        d,
                        p,
                        m,
                        E = e.length,
                        _ = 0;
                    if (a)
                        for (l = 3 * E * 2, o = new Array(2 * l), d = 0; d < E; d++)
                            (p = e[d]),
                                (m = e[(d + 1) % E]),
                                (o[_] = o[_ + l] = p.x),
                                ++_,
                                (o[_] = o[_ + l] = p.y),
                                ++_,
                                (o[_] = o[_ + l] = p.z),
                                ++_,
                                (o[_] = o[_ + l] = m.x),
                                ++_,
                                (o[_] = o[_ + l] = m.y),
                                ++_,
                                (o[_] = o[_ + l] = m.z),
                                ++_;
                    else {
                        var v = h.chordLength(i, t.maximumRadius),
                            R = 0;
                        for (d = 0; d < E; d++) R += T.subdivideLineCount(e[d], e[(d + 1) % E], v);
                        for (l = 3 * (R + E), o = new Array(2 * l), d = 0; d < E; d++) {
                            (p = e[d]), (m = e[(d + 1) % E]);
                            for (
                                var A = T.subdivideLine(p, m, v, M), g = A.length, S = 0;
                                S < g;
                                ++S, ++_
                            )
                                (o[_] = A[S]), (o[_ + l] = A[S]);
                            (o[_] = m.x),
                                (o[_ + l] = m.x),
                                ++_,
                                (o[_] = m.y),
                                (o[_ + l] = m.y),
                                ++_,
                                (o[_] = m.z),
                                (o[_ + l] = m.z),
                                ++_;
                        }
                    }
                    E = o.length;
                    var N = f.createTypedArray(E / 3, E - 6 * e.length),
                        I = 0;
                    for (E /= 6, d = 0; d < E; d++) {
                        var O = d,
                            w = O + 1,
                            x = O + E,
                            b = x + 1;
                        (p = r.fromArray(o, 3 * O, C)),
                            (m = r.fromArray(o, 3 * w, P)),
                            r.equalsEpsilon(p, m, h.EPSILON14) ||
                                ((N[I++] = O),
                                (N[I++] = x),
                                (N[I++] = w),
                                (N[I++] = w),
                                (N[I++] = x),
                                (N[I++] = b));
                    }
                    return new u({
                        attributes: new c({
                            position: new s({
                                componentDatatype: n.DOUBLE,
                                componentsPerAttribute: 3,
                                values: o
                            })
                        }),
                        indices: N,
                        primitiveType: y.TRIANGLES
                    });
                }),
                T
            );
        }),
        define("Core/PolygonOutlineGeometry", [
            "./arrayFill",
            "./arrayRemoveDuplicates",
            "./BoundingSphere",
            "./Cartesian3",
            "./Check",
            "./ComponentDatatype",
            "./defaultValue",
            "./defined",
            "./DeveloperError",
            "./Ellipsoid",
            "./EllipsoidTangentPlane",
            "./Geometry",
            "./GeometryAttribute",
            "./GeometryAttributes",
            "./GeometryInstance",
            "./GeometryOffsetAttribute",
            "./GeometryPipeline",
            "./IndexDatatype",
            "./Math",
            "./PolygonGeometryLibrary",
            "./PolygonPipeline",
            "./PrimitiveType",
            "./Queue",
            "./WindingOrder"
        ], function(e, t, r, n, i, a, o, u, s, c, l, f, h, d, p, y, m, E, _, v, T, R, A, g) {
            "use strict";
            function S(e, t, r, n) {
                var i = l.fromPoints(t, e),
                    o = i.projectPointsOntoPlane(t, O);
                T.computeWindingOrder2D(o) === g.CLOCKWISE &&
                    (o.reverse(), (t = t.slice().reverse()));
                var u,
                    s,
                    c = t.length,
                    y = 0;
                if (n)
                    for (u = new Float64Array(2 * c * 3), s = 0; s < c; s++) {
                        var m = t[s],
                            _ = t[(s + 1) % c];
                        (u[y++] = m.x),
                            (u[y++] = m.y),
                            (u[y++] = m.z),
                            (u[y++] = _.x),
                            (u[y++] = _.y),
                            (u[y++] = _.z);
                    }
                else {
                    var A = 0;
                    for (s = 0; s < c; s++) A += v.subdivideLineCount(t[s], t[(s + 1) % c], r);
                    for (u = new Float64Array(3 * A), s = 0; s < c; s++)
                        for (
                            var S = v.subdivideLine(t[s], t[(s + 1) % c], r, w),
                                N = S.length,
                                I = 0;
                            I < N;
                            ++I
                        )
                            u[y++] = S[I];
                }
                c = u.length / 3;
                var x = 2 * c,
                    M = E.createTypedArray(c, x);
                for (y = 0, s = 0; s < c - 1; s++) (M[y++] = s), (M[y++] = s + 1);
                return (
                    (M[y++] = c - 1),
                    (M[y++] = 0),
                    new p({
                        geometry: new f({
                            attributes: new d({
                                position: new h({
                                    componentDatatype: a.DOUBLE,
                                    componentsPerAttribute: 3,
                                    values: u
                                })
                            }),
                            indices: M,
                            primitiveType: R.LINES
                        })
                    })
                );
            }
            function N(e, t, r, n) {
                var i = l.fromPoints(t, e),
                    o = i.projectPointsOntoPlane(t, O);
                T.computeWindingOrder2D(o) === g.CLOCKWISE &&
                    (o.reverse(), (t = t.slice().reverse()));
                var u,
                    s,
                    c = t.length,
                    y = new Array(c),
                    m = 0;
                if (n)
                    for (u = new Float64Array(2 * c * 3 * 2), s = 0; s < c; ++s) {
                        y[s] = m / 3;
                        var _ = t[s],
                            A = t[(s + 1) % c];
                        (u[m++] = _.x),
                            (u[m++] = _.y),
                            (u[m++] = _.z),
                            (u[m++] = A.x),
                            (u[m++] = A.y),
                            (u[m++] = A.z);
                    }
                else {
                    var S = 0;
                    for (s = 0; s < c; s++) S += v.subdivideLineCount(t[s], t[(s + 1) % c], r);
                    for (u = new Float64Array(3 * S * 2), s = 0; s < c; ++s) {
                        y[s] = m / 3;
                        for (
                            var N = v.subdivideLine(t[s], t[(s + 1) % c], r, w),
                                I = N.length,
                                x = 0;
                            x < I;
                            ++x
                        )
                            u[m++] = N[x];
                    }
                }
                c = u.length / 6;
                var M = y.length,
                    C = 2 * (2 * c + M),
                    P = E.createTypedArray(c, C);
                for (m = 0, s = 0; s < c; ++s)
                    (P[m++] = s),
                        (P[m++] = (s + 1) % c),
                        (P[m++] = s + c),
                        (P[m++] = ((s + 1) % c) + c);
                for (s = 0; s < M; s++) {
                    var b = y[s];
                    (P[m++] = b), (P[m++] = b + c);
                }
                return new p({
                    geometry: new f({
                        attributes: new d({
                            position: new h({
                                componentDatatype: a.DOUBLE,
                                componentsPerAttribute: 3,
                                values: u
                            })
                        }),
                        indices: P,
                        primitiveType: R.LINES
                    })
                });
            }
            function I(e) {
                var t = e.polygonHierarchy,
                    r = o(e.ellipsoid, c.WGS84),
                    n = o(e.granularity, _.RADIANS_PER_DEGREE),
                    i = o(e.perPositionHeight, !1),
                    a = i && u(e.extrudedHeight),
                    s = o(e.height, 0),
                    l = o(e.extrudedHeight, s);
                if (!a) {
                    var f = Math.max(s, l);
                    (l = Math.min(s, l)), (s = f);
                }
                (this._ellipsoid = c.clone(r)),
                    (this._granularity = n),
                    (this._height = s),
                    (this._extrudedHeight = l),
                    (this._polygonHierarchy = t),
                    (this._perPositionHeight = i),
                    (this._perPositionHeightExtrude = a),
                    (this._offsetAttribute = e.offsetAttribute),
                    (this._workerName = "createPolygonOutlineGeometry"),
                    (this.packedLength = v.computeHierarchyPackedLength(t) + c.packedLength + 7);
            }
            var O = [],
                w = [];
            I.pack = function(e, t, r) {
                return (
                    (r = o(r, 0)),
                    (r = v.packPolygonHierarchy(e._polygonHierarchy, t, r)),
                    c.pack(e._ellipsoid, t, r),
                    (r += c.packedLength),
                    (t[r++] = e._height),
                    (t[r++] = e._extrudedHeight),
                    (t[r++] = e._granularity),
                    (t[r++] = e._perPositionHeightExtrude ? 1 : 0),
                    (t[r++] = e._perPositionHeight ? 1 : 0),
                    (t[r++] = o(e._offsetAttribute, -1)),
                    (t[r] = e.packedLength),
                    t
                );
            };
            var x = c.clone(c.UNIT_SPHERE),
                M = { polygonHierarchy: {} };
            return (
                (I.unpack = function(e, t, r) {
                    t = o(t, 0);
                    var n = v.unpackPolygonHierarchy(e, t);
                    (t = n.startingIndex), delete n.startingIndex;
                    var i = c.unpack(e, t, x);
                    t += c.packedLength;
                    var a = e[t++],
                        s = e[t++],
                        l = e[t++],
                        f = 1 === e[t++],
                        h = 1 === e[t++],
                        d = e[t++],
                        p = e[t];
                    return (
                        u(r) || (r = new I(M)),
                        (r._polygonHierarchy = n),
                        (r._ellipsoid = c.clone(i, r._ellipsoid)),
                        (r._height = a),
                        (r._extrudedHeight = s),
                        (r._granularity = l),
                        (r._perPositionHeight = h),
                        (r._perPositionHeightExtrude = f),
                        (r._offsetAttribute = -1 === d ? void 0 : d),
                        (r.packedLength = p),
                        r
                    );
                }),
                (I.fromPositions = function(e) {
                    return (
                        (e = o(e, o.EMPTY_OBJECT)),
                        new I({
                            polygonHierarchy: { positions: e.positions },
                            height: e.height,
                            extrudedHeight: e.extrudedHeight,
                            ellipsoid: e.ellipsoid,
                            granularity: e.granularity,
                            perPositionHeight: e.perPositionHeight,
                            offsetAttribute: e.offsetAttribute
                        })
                    );
                }),
                (I.createGeometry = function(t) {
                    var n = t._ellipsoid,
                        i = t._granularity,
                        o = t._polygonHierarchy,
                        s = t._perPositionHeight,
                        c = v.polygonOutlinesFromHierarchy(o, !s, n);
                    if (0 !== c.length) {
                        var l,
                            d,
                            p,
                            E = [],
                            R = _.chordLength(i, n.maximumRadius),
                            A = t._height,
                            g = t._extrudedHeight,
                            I =
                                t._perPositionHeightExtrude ||
                                !_.equalsEpsilon(A, g, 0, _.EPSILON2);
                        if (I)
                            for (p = 0; p < c.length; p++) {
                                if (
                                    ((l = N(n, c[p], R, s)),
                                    (l.geometry = v.scaleToGeodeticHeightExtruded(
                                        l.geometry,
                                        A,
                                        g,
                                        n,
                                        s
                                    )),
                                    u(t._offsetAttribute))
                                ) {
                                    var O = l.geometry.attributes.position.values.length / 3,
                                        w = new Uint8Array(O);
                                    t._offsetAttribute === y.TOP
                                        ? (w = e(w, 1, 0, O / 2))
                                        : ((d = t._offsetAttribute === y.NONE ? 0 : 1),
                                          (w = e(w, d))),
                                        (l.geometry.attributes.applyOffset = new h({
                                            componentDatatype: a.UNSIGNED_BYTE,
                                            componentsPerAttribute: 1,
                                            values: w
                                        }));
                                }
                                E.push(l);
                            }
                        else
                            for (p = 0; p < c.length; p++) {
                                if (
                                    ((l = S(n, c[p], R, s)),
                                    (l.geometry.attributes.position.values = T.scaleToGeodeticHeight(
                                        l.geometry.attributes.position.values,
                                        A,
                                        n,
                                        !s
                                    )),
                                    u(t._offsetAttribute))
                                ) {
                                    var x = l.geometry.attributes.position.values.length,
                                        M = new Uint8Array(x / 3);
                                    (d = t._offsetAttribute === y.NONE ? 0 : 1),
                                        e(M, d),
                                        (l.geometry.attributes.applyOffset = new h({
                                            componentDatatype: a.UNSIGNED_BYTE,
                                            componentsPerAttribute: 1,
                                            values: M
                                        }));
                                }
                                E.push(l);
                            }
                        var C = m.combineInstances(E)[0],
                            P = r.fromVertices(C.attributes.position.values);
                        return new f({
                            attributes: C.attributes,
                            indices: C.indices,
                            primitiveType: C.primitiveType,
                            boundingSphere: P,
                            offsetAttribute: t._offsetAttribute
                        });
                    }
                }),
                I
            );
        }),
        define("Workers/createPolygonOutlineGeometry", [
            "../Core/defined",
            "../Core/Ellipsoid",
            "../Core/PolygonOutlineGeometry"
        ], function(e, t, r) {
            "use strict";
            function n(n, i) {
                return (
                    e(i) && (n = r.unpack(n, i)),
                    (n._ellipsoid = t.clone(n._ellipsoid)),
                    r.createGeometry(n)
                );
            }
            return n;
        });
})();

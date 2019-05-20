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
            var o = {};
            return (
                (o.typeOf = {}),
                (o.defined = function(n, o) {
                    if (!e(o)) throw new t(r(n));
                }),
                (o.typeOf.func = function(e, r) {
                    if ("function" != typeof r) throw new t(n(typeof r, "function", e));
                }),
                (o.typeOf.string = function(e, r) {
                    if ("string" != typeof r) throw new t(n(typeof r, "string", e));
                }),
                (o.typeOf.number = function(e, r) {
                    if ("number" != typeof r) throw new t(n(typeof r, "number", e));
                }),
                (o.typeOf.number.lessThan = function(e, r, n) {
                    if ((o.typeOf.number(e, r), r >= n))
                        throw new t(
                            "Expected " + e + " to be less than " + n + ", actual value was " + r
                        );
                }),
                (o.typeOf.number.lessThanOrEquals = function(e, r, n) {
                    if ((o.typeOf.number(e, r), r > n))
                        throw new t(
                            "Expected " +
                                e +
                                " to be less than or equal to " +
                                n +
                                ", actual value was " +
                                r
                        );
                }),
                (o.typeOf.number.greaterThan = function(e, r, n) {
                    if ((o.typeOf.number(e, r), r <= n))
                        throw new t(
                            "Expected " + e + " to be greater than " + n + ", actual value was " + r
                        );
                }),
                (o.typeOf.number.greaterThanOrEquals = function(e, r, n) {
                    if ((o.typeOf.number(e, r), r < n))
                        throw new t(
                            "Expected " +
                                e +
                                " to be greater than or equal to" +
                                n +
                                ", actual value was " +
                                r
                        );
                }),
                (o.typeOf.object = function(e, r) {
                    if ("object" != typeof r) throw new t(n(typeof r, "object", e));
                }),
                (o.typeOf.bool = function(e, r) {
                    if ("boolean" != typeof r) throw new t(n(typeof r, "boolean", e));
                }),
                (o.typeOf.number.equals = function(e, r, n, a) {
                    if ((o.typeOf.number(e, n), o.typeOf.number(r, a), n !== a))
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
                o
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
        ], function(e, t, r, n, o) {
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
                (a.equalsEpsilon = function(e, t, n, o) {
                    o = r(o, n);
                    var a = Math.abs(e - t);
                    return a <= o || a <= n * Math.max(Math.abs(e), Math.abs(t));
                });
            var i = [1];
            (a.factorial = function(e) {
                var t = i.length;
                if (e >= t) for (var r = i[t - 1], n = t; n <= e; n++) i.push(r * n);
                return i[e];
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
                        o = Math.abs(e);
                    (r = Math.abs(t)), (n = Math.max(o, r)), (r = Math.min(o, r));
                    var i = r / n;
                    return (
                        (o = a.fastApproximateAtan(i)),
                        (o = Math.abs(t) > Math.abs(e) ? a.PI_OVER_TWO - o : o),
                        (o = e < 0 ? a.PI - o : o),
                        (o = t < 0 ? -o : o)
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
        ], function(e, t, r, n, o, a) {
            "use strict";
            function i(e, r) {
                (this.x = t(e, 0)), (this.y = t(r, 0));
            }
            (i.fromElements = function(e, t, n) {
                return r(n) ? ((n.x = e), (n.y = t), n) : new i(e, t);
            }),
                (i.clone = function(e, t) {
                    if (r(e)) return r(t) ? ((t.x = e.x), (t.y = e.y), t) : new i(e.x, e.y);
                }),
                (i.fromCartesian3 = i.clone),
                (i.fromCartesian4 = i.clone),
                (i.packedLength = 2),
                (i.pack = function(e, r, n) {
                    return (n = t(n, 0)), (r[n++] = e.x), (r[n] = e.y), r;
                }),
                (i.unpack = function(e, n, o) {
                    return (n = t(n, 0)), r(o) || (o = new i()), (o.x = e[n++]), (o.y = e[n]), o;
                }),
                (i.packArray = function(e, t) {
                    var n = e.length;
                    r(t) ? (t.length = 2 * n) : (t = new Array(2 * n));
                    for (var o = 0; o < n; ++o) i.pack(e[o], t, 2 * o);
                    return t;
                }),
                (i.unpackArray = function(e, t) {
                    var n = e.length;
                    r(t) ? (t.length = n / 2) : (t = new Array(n / 2));
                    for (var o = 0; o < n; o += 2) {
                        var a = o / 2;
                        t[a] = i.unpack(e, o, t[a]);
                    }
                    return t;
                }),
                (i.fromArray = i.unpack),
                (i.maximumComponent = function(e) {
                    return Math.max(e.x, e.y);
                }),
                (i.minimumComponent = function(e) {
                    return Math.min(e.x, e.y);
                }),
                (i.minimumByComponent = function(e, t, r) {
                    return (r.x = Math.min(e.x, t.x)), (r.y = Math.min(e.y, t.y)), r;
                }),
                (i.maximumByComponent = function(e, t, r) {
                    return (r.x = Math.max(e.x, t.x)), (r.y = Math.max(e.y, t.y)), r;
                }),
                (i.magnitudeSquared = function(e) {
                    return e.x * e.x + e.y * e.y;
                }),
                (i.magnitude = function(e) {
                    return Math.sqrt(i.magnitudeSquared(e));
                });
            var u = new i();
            (i.distance = function(e, t) {
                return i.subtract(e, t, u), i.magnitude(u);
            }),
                (i.distanceSquared = function(e, t) {
                    return i.subtract(e, t, u), i.magnitudeSquared(u);
                }),
                (i.normalize = function(e, t) {
                    var r = i.magnitude(e);
                    return (t.x = e.x / r), (t.y = e.y / r), t;
                }),
                (i.dot = function(e, t) {
                    return e.x * t.x + e.y * t.y;
                }),
                (i.multiplyComponents = function(e, t, r) {
                    return (r.x = e.x * t.x), (r.y = e.y * t.y), r;
                }),
                (i.divideComponents = function(e, t, r) {
                    return (r.x = e.x / t.x), (r.y = e.y / t.y), r;
                }),
                (i.add = function(e, t, r) {
                    return (r.x = e.x + t.x), (r.y = e.y + t.y), r;
                }),
                (i.subtract = function(e, t, r) {
                    return (r.x = e.x - t.x), (r.y = e.y - t.y), r;
                }),
                (i.multiplyByScalar = function(e, t, r) {
                    return (r.x = e.x * t), (r.y = e.y * t), r;
                }),
                (i.divideByScalar = function(e, t, r) {
                    return (r.x = e.x / t), (r.y = e.y / t), r;
                }),
                (i.negate = function(e, t) {
                    return (t.x = -e.x), (t.y = -e.y), t;
                }),
                (i.abs = function(e, t) {
                    return (t.x = Math.abs(e.x)), (t.y = Math.abs(e.y)), t;
                });
            var s = new i();
            i.lerp = function(e, t, r, n) {
                return (
                    i.multiplyByScalar(t, r, s),
                    (n = i.multiplyByScalar(e, 1 - r, n)),
                    i.add(s, n, n)
                );
            };
            var c = new i(),
                l = new i();
            i.angleBetween = function(e, t) {
                return i.normalize(e, c), i.normalize(t, l), a.acosClamped(i.dot(c, l));
            };
            var f = new i();
            return (
                (i.mostOrthogonalAxis = function(e, t) {
                    var r = i.normalize(e, f);
                    return (
                        i.abs(r, r), (t = r.x <= r.y ? i.clone(i.UNIT_X, t) : i.clone(i.UNIT_Y, t))
                    );
                }),
                (i.equals = function(e, t) {
                    return e === t || (r(e) && r(t) && e.x === t.x && e.y === t.y);
                }),
                (i.equalsArray = function(e, t, r) {
                    return e.x === t[r] && e.y === t[r + 1];
                }),
                (i.equalsEpsilon = function(e, t, n, o) {
                    return (
                        e === t ||
                        (r(e) &&
                            r(t) &&
                            a.equalsEpsilon(e.x, t.x, n, o) &&
                            a.equalsEpsilon(e.y, t.y, n, o))
                    );
                }),
                (i.ZERO = o(new i(0, 0))),
                (i.UNIT_X = o(new i(1, 0))),
                (i.UNIT_Y = o(new i(0, 1))),
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
        ], function(e, t, r, n, o, a) {
            "use strict";
            function i(e, r, n) {
                (this.x = t(e, 0)), (this.y = t(r, 0)), (this.z = t(n, 0));
            }
            (i.fromSpherical = function(e, n) {
                r(n) || (n = new i());
                var o = e.clock,
                    a = e.cone,
                    u = t(e.magnitude, 1),
                    s = u * Math.sin(a);
                return (n.x = s * Math.cos(o)), (n.y = s * Math.sin(o)), (n.z = u * Math.cos(a)), n;
            }),
                (i.fromElements = function(e, t, n, o) {
                    return r(o) ? ((o.x = e), (o.y = t), (o.z = n), o) : new i(e, t, n);
                }),
                (i.clone = function(e, t) {
                    if (r(e))
                        return r(t)
                            ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), t)
                            : new i(e.x, e.y, e.z);
                }),
                (i.fromCartesian4 = i.clone),
                (i.packedLength = 3),
                (i.pack = function(e, r, n) {
                    return (n = t(n, 0)), (r[n++] = e.x), (r[n++] = e.y), (r[n] = e.z), r;
                }),
                (i.unpack = function(e, n, o) {
                    return (
                        (n = t(n, 0)),
                        r(o) || (o = new i()),
                        (o.x = e[n++]),
                        (o.y = e[n++]),
                        (o.z = e[n]),
                        o
                    );
                }),
                (i.packArray = function(e, t) {
                    var n = e.length;
                    r(t) ? (t.length = 3 * n) : (t = new Array(3 * n));
                    for (var o = 0; o < n; ++o) i.pack(e[o], t, 3 * o);
                    return t;
                }),
                (i.unpackArray = function(e, t) {
                    var n = e.length;
                    r(t) ? (t.length = n / 3) : (t = new Array(n / 3));
                    for (var o = 0; o < n; o += 3) {
                        var a = o / 3;
                        t[a] = i.unpack(e, o, t[a]);
                    }
                    return t;
                }),
                (i.fromArray = i.unpack),
                (i.maximumComponent = function(e) {
                    return Math.max(e.x, e.y, e.z);
                }),
                (i.minimumComponent = function(e) {
                    return Math.min(e.x, e.y, e.z);
                }),
                (i.minimumByComponent = function(e, t, r) {
                    return (
                        (r.x = Math.min(e.x, t.x)),
                        (r.y = Math.min(e.y, t.y)),
                        (r.z = Math.min(e.z, t.z)),
                        r
                    );
                }),
                (i.maximumByComponent = function(e, t, r) {
                    return (
                        (r.x = Math.max(e.x, t.x)),
                        (r.y = Math.max(e.y, t.y)),
                        (r.z = Math.max(e.z, t.z)),
                        r
                    );
                }),
                (i.magnitudeSquared = function(e) {
                    return e.x * e.x + e.y * e.y + e.z * e.z;
                }),
                (i.magnitude = function(e) {
                    return Math.sqrt(i.magnitudeSquared(e));
                });
            var u = new i();
            (i.distance = function(e, t) {
                return i.subtract(e, t, u), i.magnitude(u);
            }),
                (i.distanceSquared = function(e, t) {
                    return i.subtract(e, t, u), i.magnitudeSquared(u);
                }),
                (i.normalize = function(e, t) {
                    var r = i.magnitude(e);
                    return (t.x = e.x / r), (t.y = e.y / r), (t.z = e.z / r), t;
                }),
                (i.dot = function(e, t) {
                    return e.x * t.x + e.y * t.y + e.z * t.z;
                }),
                (i.multiplyComponents = function(e, t, r) {
                    return (r.x = e.x * t.x), (r.y = e.y * t.y), (r.z = e.z * t.z), r;
                }),
                (i.divideComponents = function(e, t, r) {
                    return (r.x = e.x / t.x), (r.y = e.y / t.y), (r.z = e.z / t.z), r;
                }),
                (i.add = function(e, t, r) {
                    return (r.x = e.x + t.x), (r.y = e.y + t.y), (r.z = e.z + t.z), r;
                }),
                (i.subtract = function(e, t, r) {
                    return (r.x = e.x - t.x), (r.y = e.y - t.y), (r.z = e.z - t.z), r;
                }),
                (i.multiplyByScalar = function(e, t, r) {
                    return (r.x = e.x * t), (r.y = e.y * t), (r.z = e.z * t), r;
                }),
                (i.divideByScalar = function(e, t, r) {
                    return (r.x = e.x / t), (r.y = e.y / t), (r.z = e.z / t), r;
                }),
                (i.negate = function(e, t) {
                    return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), t;
                }),
                (i.abs = function(e, t) {
                    return (t.x = Math.abs(e.x)), (t.y = Math.abs(e.y)), (t.z = Math.abs(e.z)), t;
                });
            var s = new i();
            i.lerp = function(e, t, r, n) {
                return (
                    i.multiplyByScalar(t, r, s),
                    (n = i.multiplyByScalar(e, 1 - r, n)),
                    i.add(s, n, n)
                );
            };
            var c = new i(),
                l = new i();
            i.angleBetween = function(e, t) {
                i.normalize(e, c), i.normalize(t, l);
                var r = i.dot(c, l),
                    n = i.magnitude(i.cross(c, l, c));
                return Math.atan2(n, r);
            };
            var f = new i();
            (i.mostOrthogonalAxis = function(e, t) {
                var r = i.normalize(e, f);
                return (
                    i.abs(r, r),
                    (t =
                        r.x <= r.y
                            ? r.x <= r.z
                                ? i.clone(i.UNIT_X, t)
                                : i.clone(i.UNIT_Z, t)
                            : r.y <= r.z
                            ? i.clone(i.UNIT_Y, t)
                            : i.clone(i.UNIT_Z, t))
                );
            }),
                (i.projectVector = function(e, t, r) {
                    var n = i.dot(e, t) / i.dot(t, t);
                    return i.multiplyByScalar(t, n, r);
                }),
                (i.equals = function(e, t) {
                    return e === t || (r(e) && r(t) && e.x === t.x && e.y === t.y && e.z === t.z);
                }),
                (i.equalsArray = function(e, t, r) {
                    return e.x === t[r] && e.y === t[r + 1] && e.z === t[r + 2];
                }),
                (i.equalsEpsilon = function(e, t, n, o) {
                    return (
                        e === t ||
                        (r(e) &&
                            r(t) &&
                            a.equalsEpsilon(e.x, t.x, n, o) &&
                            a.equalsEpsilon(e.y, t.y, n, o) &&
                            a.equalsEpsilon(e.z, t.z, n, o))
                    );
                }),
                (i.cross = function(e, t, r) {
                    var n = e.x,
                        o = e.y,
                        a = e.z,
                        i = t.x,
                        u = t.y,
                        s = t.z,
                        c = o * s - a * u,
                        l = a * i - n * s,
                        f = n * u - o * i;
                    return (r.x = c), (r.y = l), (r.z = f), r;
                }),
                (i.midpoint = function(e, t, r) {
                    return (
                        (r.x = 0.5 * (e.x + t.x)),
                        (r.y = 0.5 * (e.y + t.y)),
                        (r.z = 0.5 * (e.z + t.z)),
                        r
                    );
                }),
                (i.fromDegrees = function(e, t, r, n, o) {
                    return (e = a.toRadians(e)), (t = a.toRadians(t)), i.fromRadians(e, t, r, n, o);
                });
            var h = new i(),
                d = new i(),
                E = new i(40680631590769, 40680631590769, 40408299984661.445);
            return (
                (i.fromRadians = function(e, n, o, a, u) {
                    o = t(o, 0);
                    var s = r(a) ? a.radiiSquared : E,
                        c = Math.cos(n);
                    (h.x = c * Math.cos(e)),
                        (h.y = c * Math.sin(e)),
                        (h.z = Math.sin(n)),
                        (h = i.normalize(h, h)),
                        i.multiplyComponents(s, h, d);
                    var l = Math.sqrt(i.dot(h, d));
                    return (
                        (d = i.divideByScalar(d, l, d)),
                        (h = i.multiplyByScalar(h, o, h)),
                        r(u) || (u = new i()),
                        i.add(d, h, u)
                    );
                }),
                (i.fromDegreesArray = function(e, t, n) {
                    var o = e.length;
                    r(n) ? (n.length = o / 2) : (n = new Array(o / 2));
                    for (var a = 0; a < o; a += 2) {
                        var u = e[a],
                            s = e[a + 1],
                            c = a / 2;
                        n[c] = i.fromDegrees(u, s, 0, t, n[c]);
                    }
                    return n;
                }),
                (i.fromRadiansArray = function(e, t, n) {
                    var o = e.length;
                    r(n) ? (n.length = o / 2) : (n = new Array(o / 2));
                    for (var a = 0; a < o; a += 2) {
                        var u = e[a],
                            s = e[a + 1],
                            c = a / 2;
                        n[c] = i.fromRadians(u, s, 0, t, n[c]);
                    }
                    return n;
                }),
                (i.fromDegreesArrayHeights = function(e, t, n) {
                    var o = e.length;
                    r(n) ? (n.length = o / 3) : (n = new Array(o / 3));
                    for (var a = 0; a < o; a += 3) {
                        var u = e[a],
                            s = e[a + 1],
                            c = e[a + 2],
                            l = a / 3;
                        n[l] = i.fromDegrees(u, s, c, t, n[l]);
                    }
                    return n;
                }),
                (i.fromRadiansArrayHeights = function(e, t, n) {
                    var o = e.length;
                    r(n) ? (n.length = o / 3) : (n = new Array(o / 3));
                    for (var a = 0; a < o; a += 3) {
                        var u = e[a],
                            s = e[a + 1],
                            c = e[a + 2],
                            l = a / 3;
                        n[l] = i.fromRadians(u, s, c, t, n[l]);
                    }
                    return n;
                }),
                (i.ZERO = o(new i(0, 0, 0))),
                (i.UNIT_X = o(new i(1, 0, 0))),
                (i.UNIT_Y = o(new i(0, 1, 0))),
                (i.UNIT_Z = o(new i(0, 0, 1))),
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
        ], function(e, t, r, n, o, a) {
            "use strict";
            function i(e) {
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
                        o = r.y;
                    (r.x = (1 - Math.abs(o)) * a.signNotZero(n)),
                        (r.y = (1 - Math.abs(n)) * a.signNotZero(o));
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
                    (t.x = i(c.x * (1 / 256))),
                    (t.y = i(c.x)),
                    (t.z = i(c.y * (1 / 256))),
                    (t.w = i(c.y)),
                    t
                );
            }),
                (s.octDecodeInRange = function(e, r, n, o) {
                    if (
                        ((o.x = a.fromSNorm(e, n)),
                        (o.y = a.fromSNorm(r, n)),
                        (o.z = 1 - (Math.abs(o.x) + Math.abs(o.y))),
                        o.z < 0)
                    ) {
                        var i = o.x;
                        (o.x = (1 - Math.abs(o.y)) * a.signNotZero(i)),
                            (o.y = (1 - Math.abs(i)) * a.signNotZero(o.y));
                    }
                    return t.normalize(o, o);
                }),
                (s.octDecode = function(e, t, r) {
                    return s.octDecodeInRange(e, t, 255, r);
                }),
                (s.octDecodeFromCartesian4 = function(e, t) {
                    var r = e.x,
                        n = e.y,
                        o = e.z,
                        a = e.w,
                        i = 256 * r + n,
                        u = 256 * o + a;
                    return s.octDecodeInRange(i, u, 65535, t);
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
                        o = 256 * (r - n);
                    return s.octDecode(n, o, t);
                }),
                (s.octPack = function(e, t, r, n) {
                    var o = s.octEncodeFloat(e),
                        a = s.octEncodeFloat(t),
                        i = s.octEncode(r, f);
                    return (n.x = 65536 * i.x + o), (n.y = 65536 * i.y + a), n;
                }),
                (s.octUnpack = function(e, t, r, n) {
                    var o = e.x / 65536,
                        a = Math.floor(o),
                        i = 65536 * (o - a);
                    o = e.y / 65536;
                    var u = Math.floor(o),
                        c = 65536 * (o - u);
                    s.octDecodeFloat(i, t), s.octDecodeFloat(c, r), s.octDecode(a, u, n);
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
                    for (var o = e.length, a = 0, i = 0, s = 0, c = 0; c < o; ++c)
                        (a += u(e[c])),
                            (i += u(t[c])),
                            (e[c] = a),
                            (t[c] = i),
                            n(r) && ((s += u(r[c])), (r[c] = s));
                }),
                s
            );
        }),
        define("Core/scaleToGeodeticSurface", [
            "./Cartesian3",
            "./defined",
            "./DeveloperError",
            "./Math"
        ], function(e, t, r, n) {
            "use strict";
            function o(r, o, u, s, c) {
                var l = r.x,
                    f = r.y,
                    h = r.z,
                    d = o.x,
                    E = o.y,
                    m = o.z,
                    p = l * l * d * d,
                    y = f * f * E * E,
                    _ = h * h * m * m,
                    R = p + y + _,
                    T = Math.sqrt(1 / R),
                    A = e.multiplyByScalar(r, T, a);
                if (R < s) return isFinite(T) ? e.clone(A, c) : void 0;
                var C = u.x,
                    S = u.y,
                    g = u.z,
                    v = i;
                (v.x = A.x * C * 2), (v.y = A.y * S * 2), (v.z = A.z * g * 2);
                var O,
                    I,
                    M,
                    N,
                    w,
                    x,
                    P,
                    F,
                    D,
                    U,
                    L,
                    b = ((1 - T) * e.magnitude(r)) / (0.5 * e.magnitude(v)),
                    B = 0;
                do {
                    (b -= B),
                        (M = 1 / (1 + b * C)),
                        (N = 1 / (1 + b * S)),
                        (w = 1 / (1 + b * g)),
                        (x = M * M),
                        (P = N * N),
                        (F = w * w),
                        (D = x * M),
                        (U = P * N),
                        (L = F * w),
                        (O = p * x + y * P + _ * F - 1),
                        (I = p * D * C + y * U * S + _ * L * g);
                    B = O / (-2 * I);
                } while (Math.abs(O) > n.EPSILON12);
                return t(c)
                    ? ((c.x = l * M), (c.y = f * N), (c.z = h * w), c)
                    : new e(l * M, f * N, h * w);
            }
            var a = new e(),
                i = new e();
            return o;
        }),
        define("Core/Cartographic", [
            "./Cartesian3",
            "./Check",
            "./defaultValue",
            "./defined",
            "./freezeObject",
            "./Math",
            "./scaleToGeodeticSurface"
        ], function(e, t, r, n, o, a, i) {
            "use strict";
            function u(e, t, n) {
                (this.longitude = r(e, 0)), (this.latitude = r(t, 0)), (this.height = r(n, 0));
            }
            (u.fromRadians = function(e, t, o, a) {
                return (
                    (o = r(o, 0)),
                    n(a) ? ((a.longitude = e), (a.latitude = t), (a.height = o), a) : new u(e, t, o)
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
                (u.fromCartesian = function(t, r, o) {
                    var E = n(r) ? r.oneOverRadii : f,
                        m = n(r) ? r.oneOverRadiiSquared : h,
                        p = n(r) ? r._centerToleranceSquared : d,
                        y = i(t, E, m, p, c);
                    if (n(y)) {
                        var _ = e.multiplyComponents(y, m, s);
                        _ = e.normalize(_, _);
                        var R = e.subtract(t, y, l),
                            T = Math.atan2(_.y, _.x),
                            A = Math.asin(_.z),
                            C = a.sign(e.dot(R, t)) * e.magnitude(R);
                        return n(o)
                            ? ((o.longitude = T), (o.latitude = A), (o.height = C), o)
                            : new u(T, A, C);
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
                (u.ZERO = o(new u(0, 0, 0))),
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
                o = {};
            return (
                t(o, {
                    element: {
                        get: function() {
                            if (o.supportsFullscreen()) return document[n.fullscreenElement];
                        }
                    },
                    changeEventName: {
                        get: function() {
                            if (o.supportsFullscreen()) return n.fullscreenchange;
                        }
                    },
                    errorEventName: {
                        get: function() {
                            if (o.supportsFullscreen()) return n.fullscreenerror;
                        }
                    },
                    enabled: {
                        get: function() {
                            if (o.supportsFullscreen()) return document[n.fullscreenEnabled];
                        }
                    },
                    fullscreen: {
                        get: function() {
                            if (o.supportsFullscreen()) return null !== o.element;
                        }
                    }
                }),
                (o.supportsFullscreen = function() {
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
                        var o, a = ["webkit", "moz", "o", "ms", "khtml"], i = 0, u = a.length;
                        i < u;
                        ++i
                    ) {
                        var s = a[i];
                        (o = s + "RequestFullscreen"),
                            "function" == typeof t[o]
                                ? ((n.requestFullscreen = o), (r = !0))
                                : ((o = s + "RequestFullScreen"),
                                  "function" == typeof t[o] &&
                                      ((n.requestFullscreen = o), (r = !0))),
                            (o = s + "ExitFullscreen"),
                            "function" == typeof document[o]
                                ? (n.exitFullscreen = o)
                                : ((o = s + "CancelFullScreen"),
                                  "function" == typeof document[o] && (n.exitFullscreen = o)),
                            (o = s + "FullscreenEnabled"),
                            void 0 !== document[o]
                                ? (n.fullscreenEnabled = o)
                                : ((o = s + "FullScreenEnabled"),
                                  void 0 !== document[o] && (n.fullscreenEnabled = o)),
                            (o = s + "FullscreenElement"),
                            void 0 !== document[o]
                                ? (n.fullscreenElement = o)
                                : ((o = s + "FullScreenElement"),
                                  void 0 !== document[o] && (n.fullscreenElement = o)),
                            (o = s + "fullscreenchange"),
                            void 0 !== document["on" + o] &&
                                ("ms" === s && (o = "MSFullscreenChange"),
                                (n.fullscreenchange = o)),
                            (o = s + "fullscreenerror"),
                            void 0 !== document["on" + o] &&
                                ("ms" === s && (o = "MSFullscreenError"), (n.fullscreenerror = o));
                    }
                    return r;
                }),
                (o.requestFullscreen = function(e, t) {
                    o.supportsFullscreen() && e[n.requestFullscreen]({ vrDisplay: t });
                }),
                (o.exitFullscreen = function() {
                    o.supportsFullscreen() && document[n.exitFullscreen]();
                }),
                o
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
            function o() {
                if (!t(A) && ((A = !1), !h())) {
                    var e = / Chrome\/([\.0-9]+)/.exec(T.userAgent);
                    null !== e && ((A = !0), (C = n(e[1])));
                }
                return A;
            }
            function a() {
                return o() && C;
            }
            function i() {
                if (!t(S) && ((S = !1), !o() && !h() && / Safari\/[\.0-9]+/.test(T.userAgent))) {
                    var e = / Version\/([\.0-9]+)/.exec(T.userAgent);
                    null !== e && ((S = !0), (g = n(e[1])));
                }
                return S;
            }
            function u() {
                return i() && g;
            }
            function s() {
                if (!t(v)) {
                    v = !1;
                    var e = / AppleWebKit\/([\.0-9]+)(\+?)/.exec(T.userAgent);
                    null !== e && ((v = !0), (O = n(e[1])), (O.isNightly = !!e[2]));
                }
                return v;
            }
            function c() {
                return s() && O;
            }
            function l() {
                if (!t(I)) {
                    I = !1;
                    var e;
                    "Microsoft Internet Explorer" === T.appName
                        ? null !== (e = /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T.userAgent)) &&
                          ((I = !0), (M = n(e[1])))
                        : "Netscape" === T.appName &&
                          null !== (e = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T.userAgent)) &&
                          ((I = !0), (M = n(e[1])));
                }
                return I;
            }
            function f() {
                return l() && M;
            }
            function h() {
                if (!t(N)) {
                    N = !1;
                    var e = / Edge\/([\.0-9]+)/.exec(T.userAgent);
                    null !== e && ((N = !0), (w = n(e[1])));
                }
                return N;
            }
            function d() {
                return h() && w;
            }
            function E() {
                if (!t(x)) {
                    x = !1;
                    var e = /Firefox\/([\.0-9]+)/.exec(T.userAgent);
                    null !== e && ((x = !0), (P = n(e[1])));
                }
                return x;
            }
            function m() {
                return t(F) || (F = /Windows/i.test(T.appVersion)), F;
            }
            function p() {
                return E() && P;
            }
            function y() {
                return (
                    t(D) ||
                        (D =
                            !E() &&
                            "undefined" != typeof PointerEvent &&
                            (!t(T.pointerEnabled) || T.pointerEnabled)),
                    D
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
                    (L = t(r) && "" !== r), L && (U = r);
                }
                return L;
            }
            function R() {
                return _() ? U : void 0;
            }
            var T;
            T = "undefined" != typeof navigator ? navigator : {};
            var A,
                C,
                S,
                g,
                v,
                O,
                I,
                M,
                N,
                w,
                x,
                P,
                F,
                D,
                U,
                L,
                b = [];
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
            var B = {
                isChrome: o,
                chromeVersion: a,
                isSafari: i,
                safariVersion: u,
                isWebkit: s,
                webkitVersion: c,
                isInternetExplorer: l,
                internetExplorerVersion: f,
                isEdge: h,
                edgeVersion: d,
                isFirefox: E,
                firefoxVersion: p,
                isWindows: m,
                hardwareConcurrency: e(T.hardwareConcurrency, 3),
                supportsPointerEvents: y,
                supportsImageRenderingPixelated: _,
                imageRenderingValue: R,
                typedArrayTypes: b
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
        define("Core/Color", [
            "./Check",
            "./defaultValue",
            "./defined",
            "./FeatureDetection",
            "./freezeObject",
            "./Math"
        ], function(e, t, r, n, o, a) {
            "use strict";
            function i(e, t, r) {
                return (
                    r < 0 && (r += 1),
                    r > 1 && (r -= 1),
                    6 * r < 1
                        ? e + 6 * (t - e) * r
                        : 2 * r < 1
                        ? t
                        : 3 * r < 2
                        ? e + (t - e) * (2 / 3 - r) * 6
                        : e
                );
            }
            function u(e, r, n, o) {
                (this.red = t(e, 1)),
                    (this.green = t(r, 1)),
                    (this.blue = t(n, 1)),
                    (this.alpha = t(o, 1));
            }
            (u.fromCartesian4 = function(e, t) {
                return r(t)
                    ? ((t.red = e.x), (t.green = e.y), (t.blue = e.z), (t.alpha = e.w), t)
                    : new u(e.x, e.y, e.z, e.w);
            }),
                (u.fromBytes = function(e, n, o, a, i) {
                    return (
                        (e = u.byteToFloat(t(e, 255))),
                        (n = u.byteToFloat(t(n, 255))),
                        (o = u.byteToFloat(t(o, 255))),
                        (a = u.byteToFloat(t(a, 255))),
                        r(i)
                            ? ((i.red = e), (i.green = n), (i.blue = o), (i.alpha = a), i)
                            : new u(e, n, o, a)
                    );
                }),
                (u.fromAlpha = function(e, t, n) {
                    return r(n)
                        ? ((n.red = e.red),
                          (n.green = e.green),
                          (n.blue = e.blue),
                          (n.alpha = t),
                          n)
                        : new u(e.red, e.green, e.blue, t);
                });
            var s, c, l;
            n.supportsTypedArrays() &&
                ((s = new ArrayBuffer(4)), (c = new Uint32Array(s)), (l = new Uint8Array(s))),
                (u.fromRgba = function(e, t) {
                    return (c[0] = e), u.fromBytes(l[0], l[1], l[2], l[3], t);
                }),
                (u.fromHsl = function(e, n, o, a, s) {
                    (e = t(e, 0) % 1), (n = t(n, 0)), (o = t(o, 0)), (a = t(a, 1));
                    var c = o,
                        l = o,
                        f = o;
                    if (0 !== n) {
                        var h;
                        h = o < 0.5 ? o * (1 + n) : o + n - o * n;
                        var d = 2 * o - h;
                        (c = i(d, h, e + 1 / 3)), (l = i(d, h, e)), (f = i(d, h, e - 1 / 3));
                    }
                    return r(s)
                        ? ((s.red = c), (s.green = l), (s.blue = f), (s.alpha = a), s)
                        : new u(c, l, f, a);
                }),
                (u.fromRandom = function(e, n) {
                    e = t(e, t.EMPTY_OBJECT);
                    var o = e.red;
                    if (!r(o)) {
                        var i = t(e.minimumRed, 0),
                            s = t(e.maximumRed, 1);
                        o = i + a.nextRandomNumber() * (s - i);
                    }
                    var c = e.green;
                    if (!r(c)) {
                        var l = t(e.minimumGreen, 0),
                            f = t(e.maximumGreen, 1);
                        c = l + a.nextRandomNumber() * (f - l);
                    }
                    var h = e.blue;
                    if (!r(h)) {
                        var d = t(e.minimumBlue, 0),
                            E = t(e.maximumBlue, 1);
                        h = d + a.nextRandomNumber() * (E - d);
                    }
                    var m = e.alpha;
                    if (!r(m)) {
                        var p = t(e.minimumAlpha, 0),
                            y = t(e.maximumAlpha, 1);
                        m = p + a.nextRandomNumber() * (y - p);
                    }
                    return r(n)
                        ? ((n.red = o), (n.green = c), (n.blue = h), (n.alpha = m), n)
                        : new u(o, c, h, m);
                });
            var f = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i,
                h = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i,
                d = /^rgba?\(\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)(?:\s*,\s*([0-9.]+))?\s*\)$/i,
                E = /^hsla?\(\s*([0-9.]+)\s*,\s*([0-9.]+%)\s*,\s*([0-9.]+%)(?:\s*,\s*([0-9.]+))?\s*\)$/i;
            return (
                (u.fromCssColorString = function(e, n) {
                    r(n) || (n = new u());
                    var o = u[e.toUpperCase()];
                    if (r(o)) return u.clone(o, n), n;
                    var a = f.exec(e);
                    return null !== a
                        ? ((n.red = parseInt(a[1], 16) / 15),
                          (n.green = parseInt(a[2], 16) / 15),
                          (n.blue = parseInt(a[3], 16) / 15),
                          (n.alpha = 1),
                          n)
                        : null !== (a = h.exec(e))
                        ? ((n.red = parseInt(a[1], 16) / 255),
                          (n.green = parseInt(a[2], 16) / 255),
                          (n.blue = parseInt(a[3], 16) / 255),
                          (n.alpha = 1),
                          n)
                        : null !== (a = d.exec(e))
                        ? ((n.red = parseFloat(a[1]) / ("%" === a[1].substr(-1) ? 100 : 255)),
                          (n.green = parseFloat(a[2]) / ("%" === a[2].substr(-1) ? 100 : 255)),
                          (n.blue = parseFloat(a[3]) / ("%" === a[3].substr(-1) ? 100 : 255)),
                          (n.alpha = parseFloat(t(a[4], "1.0"))),
                          n)
                        : null !== (a = E.exec(e))
                        ? u.fromHsl(
                              parseFloat(a[1]) / 360,
                              parseFloat(a[2]) / 100,
                              parseFloat(a[3]) / 100,
                              parseFloat(t(a[4], "1.0")),
                              n
                          )
                        : (n = void 0);
                }),
                (u.packedLength = 4),
                (u.pack = function(e, r, n) {
                    return (
                        (n = t(n, 0)),
                        (r[n++] = e.red),
                        (r[n++] = e.green),
                        (r[n++] = e.blue),
                        (r[n] = e.alpha),
                        r
                    );
                }),
                (u.unpack = function(e, n, o) {
                    return (
                        (n = t(n, 0)),
                        r(o) || (o = new u()),
                        (o.red = e[n++]),
                        (o.green = e[n++]),
                        (o.blue = e[n++]),
                        (o.alpha = e[n]),
                        o
                    );
                }),
                (u.byteToFloat = function(e) {
                    return e / 255;
                }),
                (u.floatToByte = function(e) {
                    return 1 === e ? 255 : (256 * e) | 0;
                }),
                (u.clone = function(e, t) {
                    if (r(e))
                        return r(t)
                            ? ((t.red = e.red),
                              (t.green = e.green),
                              (t.blue = e.blue),
                              (t.alpha = e.alpha),
                              t)
                            : new u(e.red, e.green, e.blue, e.alpha);
                }),
                (u.equals = function(e, t) {
                    return (
                        e === t ||
                        (r(e) &&
                            r(t) &&
                            e.red === t.red &&
                            e.green === t.green &&
                            e.blue === t.blue &&
                            e.alpha === t.alpha)
                    );
                }),
                (u.equalsArray = function(e, t, r) {
                    return (
                        e.red === t[r] &&
                        e.green === t[r + 1] &&
                        e.blue === t[r + 2] &&
                        e.alpha === t[r + 3]
                    );
                }),
                (u.prototype.clone = function(e) {
                    return u.clone(this, e);
                }),
                (u.prototype.equals = function(e) {
                    return u.equals(this, e);
                }),
                (u.prototype.equalsEpsilon = function(e, t) {
                    return (
                        this === e ||
                        (r(e) &&
                            Math.abs(this.red - e.red) <= t &&
                            Math.abs(this.green - e.green) <= t &&
                            Math.abs(this.blue - e.blue) <= t &&
                            Math.abs(this.alpha - e.alpha) <= t)
                    );
                }),
                (u.prototype.toString = function() {
                    return (
                        "(" +
                        this.red +
                        ", " +
                        this.green +
                        ", " +
                        this.blue +
                        ", " +
                        this.alpha +
                        ")"
                    );
                }),
                (u.prototype.toCssColorString = function() {
                    var e = u.floatToByte(this.red),
                        t = u.floatToByte(this.green),
                        r = u.floatToByte(this.blue);
                    return 1 === this.alpha
                        ? "rgb(" + e + "," + t + "," + r + ")"
                        : "rgba(" + e + "," + t + "," + r + "," + this.alpha + ")";
                }),
                (u.prototype.toBytes = function(e) {
                    var t = u.floatToByte(this.red),
                        n = u.floatToByte(this.green),
                        o = u.floatToByte(this.blue),
                        a = u.floatToByte(this.alpha);
                    return r(e)
                        ? ((e[0] = t), (e[1] = n), (e[2] = o), (e[3] = a), e)
                        : [t, n, o, a];
                }),
                (u.prototype.toRgba = function() {
                    return (
                        (l[0] = u.floatToByte(this.red)),
                        (l[1] = u.floatToByte(this.green)),
                        (l[2] = u.floatToByte(this.blue)),
                        (l[3] = u.floatToByte(this.alpha)),
                        c[0]
                    );
                }),
                (u.prototype.brighten = function(e, t) {
                    return (
                        (e = 1 - e),
                        (t.red = 1 - (1 - this.red) * e),
                        (t.green = 1 - (1 - this.green) * e),
                        (t.blue = 1 - (1 - this.blue) * e),
                        (t.alpha = this.alpha),
                        t
                    );
                }),
                (u.prototype.darken = function(e, t) {
                    return (
                        (e = 1 - e),
                        (t.red = this.red * e),
                        (t.green = this.green * e),
                        (t.blue = this.blue * e),
                        (t.alpha = this.alpha),
                        t
                    );
                }),
                (u.prototype.withAlpha = function(e, t) {
                    return u.fromAlpha(this, e, t);
                }),
                (u.add = function(e, t, r) {
                    return (
                        (r.red = e.red + t.red),
                        (r.green = e.green + t.green),
                        (r.blue = e.blue + t.blue),
                        (r.alpha = e.alpha + t.alpha),
                        r
                    );
                }),
                (u.subtract = function(e, t, r) {
                    return (
                        (r.red = e.red - t.red),
                        (r.green = e.green - t.green),
                        (r.blue = e.blue - t.blue),
                        (r.alpha = e.alpha - t.alpha),
                        r
                    );
                }),
                (u.multiply = function(e, t, r) {
                    return (
                        (r.red = e.red * t.red),
                        (r.green = e.green * t.green),
                        (r.blue = e.blue * t.blue),
                        (r.alpha = e.alpha * t.alpha),
                        r
                    );
                }),
                (u.divide = function(e, t, r) {
                    return (
                        (r.red = e.red / t.red),
                        (r.green = e.green / t.green),
                        (r.blue = e.blue / t.blue),
                        (r.alpha = e.alpha / t.alpha),
                        r
                    );
                }),
                (u.mod = function(e, t, r) {
                    return (
                        (r.red = e.red % t.red),
                        (r.green = e.green % t.green),
                        (r.blue = e.blue % t.blue),
                        (r.alpha = e.alpha % t.alpha),
                        r
                    );
                }),
                (u.multiplyByScalar = function(e, t, r) {
                    return (
                        (r.red = e.red * t),
                        (r.green = e.green * t),
                        (r.blue = e.blue * t),
                        (r.alpha = e.alpha * t),
                        r
                    );
                }),
                (u.divideByScalar = function(e, t, r) {
                    return (
                        (r.red = e.red / t),
                        (r.green = e.green / t),
                        (r.blue = e.blue / t),
                        (r.alpha = e.alpha / t),
                        r
                    );
                }),
                (u.ALICEBLUE = o(u.fromCssColorString("#F0F8FF"))),
                (u.ANTIQUEWHITE = o(u.fromCssColorString("#FAEBD7"))),
                (u.AQUA = o(u.fromCssColorString("#00FFFF"))),
                (u.AQUAMARINE = o(u.fromCssColorString("#7FFFD4"))),
                (u.AZURE = o(u.fromCssColorString("#F0FFFF"))),
                (u.BEIGE = o(u.fromCssColorString("#F5F5DC"))),
                (u.BISQUE = o(u.fromCssColorString("#FFE4C4"))),
                (u.BLACK = o(u.fromCssColorString("#000000"))),
                (u.BLANCHEDALMOND = o(u.fromCssColorString("#FFEBCD"))),
                (u.BLUE = o(u.fromCssColorString("#0000FF"))),
                (u.BLUEVIOLET = o(u.fromCssColorString("#8A2BE2"))),
                (u.BROWN = o(u.fromCssColorString("#A52A2A"))),
                (u.BURLYWOOD = o(u.fromCssColorString("#DEB887"))),
                (u.CADETBLUE = o(u.fromCssColorString("#5F9EA0"))),
                (u.CHARTREUSE = o(u.fromCssColorString("#7FFF00"))),
                (u.CHOCOLATE = o(u.fromCssColorString("#D2691E"))),
                (u.CORAL = o(u.fromCssColorString("#FF7F50"))),
                (u.CORNFLOWERBLUE = o(u.fromCssColorString("#6495ED"))),
                (u.CORNSILK = o(u.fromCssColorString("#FFF8DC"))),
                (u.CRIMSON = o(u.fromCssColorString("#DC143C"))),
                (u.CYAN = o(u.fromCssColorString("#00FFFF"))),
                (u.DARKBLUE = o(u.fromCssColorString("#00008B"))),
                (u.DARKCYAN = o(u.fromCssColorString("#008B8B"))),
                (u.DARKGOLDENROD = o(u.fromCssColorString("#B8860B"))),
                (u.DARKGRAY = o(u.fromCssColorString("#A9A9A9"))),
                (u.DARKGREEN = o(u.fromCssColorString("#006400"))),
                (u.DARKGREY = u.DARKGRAY),
                (u.DARKKHAKI = o(u.fromCssColorString("#BDB76B"))),
                (u.DARKMAGENTA = o(u.fromCssColorString("#8B008B"))),
                (u.DARKOLIVEGREEN = o(u.fromCssColorString("#556B2F"))),
                (u.DARKORANGE = o(u.fromCssColorString("#FF8C00"))),
                (u.DARKORCHID = o(u.fromCssColorString("#9932CC"))),
                (u.DARKRED = o(u.fromCssColorString("#8B0000"))),
                (u.DARKSALMON = o(u.fromCssColorString("#E9967A"))),
                (u.DARKSEAGREEN = o(u.fromCssColorString("#8FBC8F"))),
                (u.DARKSLATEBLUE = o(u.fromCssColorString("#483D8B"))),
                (u.DARKSLATEGRAY = o(u.fromCssColorString("#2F4F4F"))),
                (u.DARKSLATEGREY = u.DARKSLATEGRAY),
                (u.DARKTURQUOISE = o(u.fromCssColorString("#00CED1"))),
                (u.DARKVIOLET = o(u.fromCssColorString("#9400D3"))),
                (u.DEEPPINK = o(u.fromCssColorString("#FF1493"))),
                (u.DEEPSKYBLUE = o(u.fromCssColorString("#00BFFF"))),
                (u.DIMGRAY = o(u.fromCssColorString("#696969"))),
                (u.DIMGREY = u.DIMGRAY),
                (u.DODGERBLUE = o(u.fromCssColorString("#1E90FF"))),
                (u.FIREBRICK = o(u.fromCssColorString("#B22222"))),
                (u.FLORALWHITE = o(u.fromCssColorString("#FFFAF0"))),
                (u.FORESTGREEN = o(u.fromCssColorString("#228B22"))),
                (u.FUCHSIA = o(u.fromCssColorString("#FF00FF"))),
                (u.GAINSBORO = o(u.fromCssColorString("#DCDCDC"))),
                (u.GHOSTWHITE = o(u.fromCssColorString("#F8F8FF"))),
                (u.GOLD = o(u.fromCssColorString("#FFD700"))),
                (u.GOLDENROD = o(u.fromCssColorString("#DAA520"))),
                (u.GRAY = o(u.fromCssColorString("#808080"))),
                (u.GREEN = o(u.fromCssColorString("#008000"))),
                (u.GREENYELLOW = o(u.fromCssColorString("#ADFF2F"))),
                (u.GREY = u.GRAY),
                (u.HONEYDEW = o(u.fromCssColorString("#F0FFF0"))),
                (u.HOTPINK = o(u.fromCssColorString("#FF69B4"))),
                (u.INDIANRED = o(u.fromCssColorString("#CD5C5C"))),
                (u.INDIGO = o(u.fromCssColorString("#4B0082"))),
                (u.IVORY = o(u.fromCssColorString("#FFFFF0"))),
                (u.KHAKI = o(u.fromCssColorString("#F0E68C"))),
                (u.LAVENDER = o(u.fromCssColorString("#E6E6FA"))),
                (u.LAVENDAR_BLUSH = o(u.fromCssColorString("#FFF0F5"))),
                (u.LAWNGREEN = o(u.fromCssColorString("#7CFC00"))),
                (u.LEMONCHIFFON = o(u.fromCssColorString("#FFFACD"))),
                (u.LIGHTBLUE = o(u.fromCssColorString("#ADD8E6"))),
                (u.LIGHTCORAL = o(u.fromCssColorString("#F08080"))),
                (u.LIGHTCYAN = o(u.fromCssColorString("#E0FFFF"))),
                (u.LIGHTGOLDENRODYELLOW = o(u.fromCssColorString("#FAFAD2"))),
                (u.LIGHTGRAY = o(u.fromCssColorString("#D3D3D3"))),
                (u.LIGHTGREEN = o(u.fromCssColorString("#90EE90"))),
                (u.LIGHTGREY = u.LIGHTGRAY),
                (u.LIGHTPINK = o(u.fromCssColorString("#FFB6C1"))),
                (u.LIGHTSEAGREEN = o(u.fromCssColorString("#20B2AA"))),
                (u.LIGHTSKYBLUE = o(u.fromCssColorString("#87CEFA"))),
                (u.LIGHTSLATEGRAY = o(u.fromCssColorString("#778899"))),
                (u.LIGHTSLATEGREY = u.LIGHTSLATEGRAY),
                (u.LIGHTSTEELBLUE = o(u.fromCssColorString("#B0C4DE"))),
                (u.LIGHTYELLOW = o(u.fromCssColorString("#FFFFE0"))),
                (u.LIME = o(u.fromCssColorString("#00FF00"))),
                (u.LIMEGREEN = o(u.fromCssColorString("#32CD32"))),
                (u.LINEN = o(u.fromCssColorString("#FAF0E6"))),
                (u.MAGENTA = o(u.fromCssColorString("#FF00FF"))),
                (u.MAROON = o(u.fromCssColorString("#800000"))),
                (u.MEDIUMAQUAMARINE = o(u.fromCssColorString("#66CDAA"))),
                (u.MEDIUMBLUE = o(u.fromCssColorString("#0000CD"))),
                (u.MEDIUMORCHID = o(u.fromCssColorString("#BA55D3"))),
                (u.MEDIUMPURPLE = o(u.fromCssColorString("#9370DB"))),
                (u.MEDIUMSEAGREEN = o(u.fromCssColorString("#3CB371"))),
                (u.MEDIUMSLATEBLUE = o(u.fromCssColorString("#7B68EE"))),
                (u.MEDIUMSPRINGGREEN = o(u.fromCssColorString("#00FA9A"))),
                (u.MEDIUMTURQUOISE = o(u.fromCssColorString("#48D1CC"))),
                (u.MEDIUMVIOLETRED = o(u.fromCssColorString("#C71585"))),
                (u.MIDNIGHTBLUE = o(u.fromCssColorString("#191970"))),
                (u.MINTCREAM = o(u.fromCssColorString("#F5FFFA"))),
                (u.MISTYROSE = o(u.fromCssColorString("#FFE4E1"))),
                (u.MOCCASIN = o(u.fromCssColorString("#FFE4B5"))),
                (u.NAVAJOWHITE = o(u.fromCssColorString("#FFDEAD"))),
                (u.NAVY = o(u.fromCssColorString("#000080"))),
                (u.OLDLACE = o(u.fromCssColorString("#FDF5E6"))),
                (u.OLIVE = o(u.fromCssColorString("#808000"))),
                (u.OLIVEDRAB = o(u.fromCssColorString("#6B8E23"))),
                (u.ORANGE = o(u.fromCssColorString("#FFA500"))),
                (u.ORANGERED = o(u.fromCssColorString("#FF4500"))),
                (u.ORCHID = o(u.fromCssColorString("#DA70D6"))),
                (u.PALEGOLDENROD = o(u.fromCssColorString("#EEE8AA"))),
                (u.PALEGREEN = o(u.fromCssColorString("#98FB98"))),
                (u.PALETURQUOISE = o(u.fromCssColorString("#AFEEEE"))),
                (u.PALEVIOLETRED = o(u.fromCssColorString("#DB7093"))),
                (u.PAPAYAWHIP = o(u.fromCssColorString("#FFEFD5"))),
                (u.PEACHPUFF = o(u.fromCssColorString("#FFDAB9"))),
                (u.PERU = o(u.fromCssColorString("#CD853F"))),
                (u.PINK = o(u.fromCssColorString("#FFC0CB"))),
                (u.PLUM = o(u.fromCssColorString("#DDA0DD"))),
                (u.POWDERBLUE = o(u.fromCssColorString("#B0E0E6"))),
                (u.PURPLE = o(u.fromCssColorString("#800080"))),
                (u.RED = o(u.fromCssColorString("#FF0000"))),
                (u.ROSYBROWN = o(u.fromCssColorString("#BC8F8F"))),
                (u.ROYALBLUE = o(u.fromCssColorString("#4169E1"))),
                (u.SADDLEBROWN = o(u.fromCssColorString("#8B4513"))),
                (u.SALMON = o(u.fromCssColorString("#FA8072"))),
                (u.SANDYBROWN = o(u.fromCssColorString("#F4A460"))),
                (u.SEAGREEN = o(u.fromCssColorString("#2E8B57"))),
                (u.SEASHELL = o(u.fromCssColorString("#FFF5EE"))),
                (u.SIENNA = o(u.fromCssColorString("#A0522D"))),
                (u.SILVER = o(u.fromCssColorString("#C0C0C0"))),
                (u.SKYBLUE = o(u.fromCssColorString("#87CEEB"))),
                (u.SLATEBLUE = o(u.fromCssColorString("#6A5ACD"))),
                (u.SLATEGRAY = o(u.fromCssColorString("#708090"))),
                (u.SLATEGREY = u.SLATEGRAY),
                (u.SNOW = o(u.fromCssColorString("#FFFAFA"))),
                (u.SPRINGGREEN = o(u.fromCssColorString("#00FF7F"))),
                (u.STEELBLUE = o(u.fromCssColorString("#4682B4"))),
                (u.TAN = o(u.fromCssColorString("#D2B48C"))),
                (u.TEAL = o(u.fromCssColorString("#008080"))),
                (u.THISTLE = o(u.fromCssColorString("#D8BFD8"))),
                (u.TOMATO = o(u.fromCssColorString("#FF6347"))),
                (u.TURQUOISE = o(u.fromCssColorString("#40E0D0"))),
                (u.VIOLET = o(u.fromCssColorString("#EE82EE"))),
                (u.WHEAT = o(u.fromCssColorString("#F5DEB3"))),
                (u.WHITE = o(u.fromCssColorString("#FFFFFF"))),
                (u.WHITESMOKE = o(u.fromCssColorString("#F5F5F5"))),
                (u.YELLOW = o(u.fromCssColorString("#FFFF00"))),
                (u.YELLOWGREEN = o(u.fromCssColorString("#9ACD32"))),
                (u.TRANSPARENT = o(new u(0, 0, 0, 0))),
                u
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
        ], function(e, t, r, n, o, a, i, u, s, c) {
            "use strict";
            function l(t, r, o, a) {
                (r = n(r, 0)),
                    (o = n(o, 0)),
                    (a = n(a, 0)),
                    (t._radii = new e(r, o, a)),
                    (t._radiiSquared = new e(r * r, o * o, a * a)),
                    (t._radiiToTheFourth = new e(r * r * r * r, o * o * o * o, a * a * a * a)),
                    (t._oneOverRadii = new e(
                        0 === r ? 0 : 1 / r,
                        0 === o ? 0 : 1 / o,
                        0 === a ? 0 : 1 / a
                    )),
                    (t._oneOverRadiiSquared = new e(
                        0 === r ? 0 : 1 / (r * r),
                        0 === o ? 0 : 1 / (o * o),
                        0 === a ? 0 : 1 / (a * a)
                    )),
                    (t._minimumRadius = Math.min(r, o, a)),
                    (t._maximumRadius = Math.max(r, o, a)),
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
                    if (o(t)) {
                        var n = t._radii;
                        return o(r)
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
                    return o(t) || (t = new f()), o(e) ? (l(t, e.x, e.y, e.z), t) : t;
                }),
                (f.WGS84 = u(new f(6378137, 6378137, 6356752.314245179))),
                (f.UNIT_SPHERE = u(new f(1, 1, 1))),
                (f.MOON = u(new f(s.LUNAR_RADIUS, s.LUNAR_RADIUS, s.LUNAR_RADIUS))),
                (f.prototype.clone = function(e) {
                    return f.clone(this, e);
                }),
                (f.packedLength = e.packedLength),
                (f.pack = function(t, r, o) {
                    return (o = n(o, 0)), e.pack(t._radii, r, o), r;
                }),
                (f.unpack = function(t, r, o) {
                    r = n(r, 0);
                    var a = e.unpack(t, r);
                    return f.fromCartesian3(a, o);
                }),
                (f.prototype.geocentricSurfaceNormal = e.normalize),
                (f.prototype.geodeticSurfaceNormalCartographic = function(t, r) {
                    var n = t.longitude,
                        a = t.latitude,
                        i = Math.cos(a),
                        u = i * Math.cos(n),
                        s = i * Math.sin(n),
                        c = Math.sin(a);
                    return (
                        o(r) || (r = new e()), (r.x = u), (r.y = s), (r.z = c), e.normalize(r, r)
                    );
                }),
                (f.prototype.geodeticSurfaceNormal = function(t, r) {
                    return (
                        o(r) || (r = new e()),
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
                var i = Math.sqrt(e.dot(n, a));
                return (
                    e.divideByScalar(a, i, a),
                    e.multiplyByScalar(n, t.height, n),
                    o(r) || (r = new e()),
                    e.add(a, n, r)
                );
            }),
                (f.prototype.cartographicArrayToCartesianArray = function(e, t) {
                    var r = e.length;
                    o(t) ? (t.length = r) : (t = new Array(r));
                    for (var n = 0; n < r; n++) t[n] = this.cartographicToCartesian(e[n], t[n]);
                    return t;
                });
            var E = new e(),
                m = new e(),
                p = new e();
            return (
                (f.prototype.cartesianToCartographic = function(r, n) {
                    var a = this.scaleToGeodeticSurface(r, m);
                    if (o(a)) {
                        var i = this.geodeticSurfaceNormal(a, E),
                            u = e.subtract(r, a, p),
                            c = Math.atan2(i.y, i.x),
                            l = Math.asin(i.z),
                            f = s.sign(e.dot(u, r)) * e.magnitude(u);
                        return o(n)
                            ? ((n.longitude = c), (n.latitude = l), (n.height = f), n)
                            : new t(c, l, f);
                    }
                }),
                (f.prototype.cartesianArrayToCartographicArray = function(e, t) {
                    var r = e.length;
                    o(t) ? (t.length = r) : (t = new Array(r));
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
                    o(r) || (r = new e());
                    var n = t.x,
                        a = t.y,
                        i = t.z,
                        u = this._oneOverRadiiSquared,
                        s = 1 / Math.sqrt(n * n * u.x + a * a * u.y + i * i * u.z);
                    return e.multiplyByScalar(t, s, r);
                }),
                (f.prototype.transformPositionToScaledSpace = function(t, r) {
                    return o(r) || (r = new e()), e.multiplyComponents(t, this._oneOverRadii, r);
                }),
                (f.prototype.transformPositionFromScaledSpace = function(t, r) {
                    return o(r) || (r = new e()), e.multiplyComponents(t, this._radii, r);
                }),
                (f.prototype.equals = function(t) {
                    return this === t || (o(t) && e.equals(this._radii, t._radii));
                }),
                (f.prototype.toString = function() {
                    return this._radii.toString();
                }),
                (f.prototype.getSurfaceNormalIntersectionWithZAxis = function(t, r, a) {
                    r = n(r, 0);
                    var i = this._squaredXOverSquaredZ;
                    if (
                        (o(a) || (a = new e()),
                        (a.x = 0),
                        (a.y = 0),
                        (a.z = t.z * (1 - i)),
                        !(Math.abs(a.z) >= this._radii.z - r))
                    )
                        return a;
                }),
                f
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
        define("Core/IndexDatatype", [
            "./defined",
            "./DeveloperError",
            "./freezeObject",
            "./Math",
            "./WebGLConstants"
        ], function(e, t, r, n, o) {
            "use strict";
            var a = {
                UNSIGNED_BYTE: o.UNSIGNED_BYTE,
                UNSIGNED_SHORT: o.UNSIGNED_SHORT,
                UNSIGNED_INT: o.UNSIGNED_INT
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
                (a.createTypedArrayFromArrayBuffer = function(e, t, r, o) {
                    return e >= n.SIXTY_FOUR_KILOBYTES
                        ? new Uint32Array(t, r, o)
                        : new Uint16Array(t, r, o);
                }),
                r(a)
            );
        }),
        define("Core/GeographicProjection", [
            "./Cartesian3",
            "./Cartographic",
            "./defaultValue",
            "./defined",
            "./defineProperties",
            "./DeveloperError",
            "./Ellipsoid"
        ], function(e, t, r, n, o, a, i) {
            "use strict";
            function u(e) {
                (this._ellipsoid = r(e, i.WGS84)),
                    (this._semimajorAxis = this._ellipsoid.maximumRadius),
                    (this._oneOverSemimajorAxis = 1 / this._semimajorAxis);
            }
            return (
                o(u.prototype, {
                    ellipsoid: {
                        get: function() {
                            return this._ellipsoid;
                        }
                    }
                }),
                (u.prototype.project = function(t, r) {
                    var o = this._semimajorAxis,
                        a = t.longitude * o,
                        i = t.latitude * o,
                        u = t.height;
                    return n(r) ? ((r.x = a), (r.y = i), (r.z = u), r) : new e(a, i, u);
                }),
                (u.prototype.unproject = function(e, r) {
                    var o = this._oneOverSemimajorAxis,
                        a = e.x * o,
                        i = e.y * o,
                        u = e.z;
                    return n(r)
                        ? ((r.longitude = a), (r.latitude = i), (r.height = u), r)
                        : new t(a, i, u);
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
        ], function(e, t, r, n, o, a, i, u) {
            "use strict";
            function s(e, t, n, o, a, i, u, s, c) {
                (this[0] = r(e, 0)),
                    (this[1] = r(o, 0)),
                    (this[2] = r(u, 0)),
                    (this[3] = r(t, 0)),
                    (this[4] = r(a, 0)),
                    (this[5] = r(s, 0)),
                    (this[6] = r(n, 0)),
                    (this[7] = r(i, 0)),
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
                    var n = e[s.getElementIndex(m[r], E[r])];
                    t += 2 * n * n;
                }
                return Math.sqrt(t);
            }
            function f(e, t) {
                for (var r = u.EPSILON15, n = 0, o = 1, a = 0; a < 3; ++a) {
                    var i = Math.abs(e[s.getElementIndex(m[a], E[a])]);
                    i > n && ((o = a), (n = i));
                }
                var c = 1,
                    l = 0,
                    f = E[o],
                    h = m[o];
                if (Math.abs(e[s.getElementIndex(h, f)]) > r) {
                    var d,
                        p = e[s.getElementIndex(h, h)],
                        y = e[s.getElementIndex(f, f)],
                        _ = e[s.getElementIndex(h, f)],
                        R = (p - y) / 2 / _;
                    (d = R < 0 ? -1 / (-R + Math.sqrt(1 + R * R)) : 1 / (R + Math.sqrt(1 + R * R))),
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
                (s.unpack = function(e, t, o) {
                    return (
                        (t = r(t, 0)),
                        n(o) || (o = new s()),
                        (o[0] = e[t++]),
                        (o[1] = e[t++]),
                        (o[2] = e[t++]),
                        (o[3] = e[t++]),
                        (o[4] = e[t++]),
                        (o[5] = e[t++]),
                        (o[6] = e[t++]),
                        (o[7] = e[t++]),
                        (o[8] = e[t++]),
                        o
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
                (s.fromArray = function(e, t, o) {
                    return (
                        (t = r(t, 0)),
                        n(o) || (o = new s()),
                        (o[0] = e[t]),
                        (o[1] = e[t + 1]),
                        (o[2] = e[t + 2]),
                        (o[3] = e[t + 3]),
                        (o[4] = e[t + 4]),
                        (o[5] = e[t + 5]),
                        (o[6] = e[t + 6]),
                        (o[7] = e[t + 7]),
                        (o[8] = e[t + 8]),
                        o
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
                        o = e.x * e.y,
                        a = e.x * e.z,
                        i = e.x * e.w,
                        u = e.y * e.y,
                        c = e.y * e.z,
                        l = e.y * e.w,
                        f = e.z * e.z,
                        h = e.z * e.w,
                        d = e.w * e.w,
                        E = r - u - f + d,
                        m = 2 * (o - h),
                        p = 2 * (a + l),
                        y = 2 * (o + h),
                        _ = -r + u - f + d,
                        R = 2 * (c - i),
                        T = 2 * (a - l),
                        A = 2 * (c + i),
                        C = -r - u + f + d;
                    return n(t)
                        ? ((t[0] = E),
                          (t[1] = y),
                          (t[2] = T),
                          (t[3] = m),
                          (t[4] = _),
                          (t[5] = A),
                          (t[6] = p),
                          (t[7] = R),
                          (t[8] = C),
                          t)
                        : new s(E, m, p, y, _, R, T, A, C);
                }),
                (s.fromHeadingPitchRoll = function(e, t) {
                    var r = Math.cos(-e.pitch),
                        o = Math.cos(-e.heading),
                        a = Math.cos(e.roll),
                        i = Math.sin(-e.pitch),
                        u = Math.sin(-e.heading),
                        c = Math.sin(e.roll),
                        l = r * o,
                        f = -a * u + c * i * o,
                        h = c * u + a * i * o,
                        d = r * u,
                        E = a * o + c * i * u,
                        m = -c * o + a * i * u,
                        p = -i,
                        y = c * r,
                        _ = a * r;
                    return n(t)
                        ? ((t[0] = l),
                          (t[1] = d),
                          (t[2] = p),
                          (t[3] = f),
                          (t[4] = E),
                          (t[5] = y),
                          (t[6] = h),
                          (t[7] = m),
                          (t[8] = _),
                          t)
                        : new s(l, f, h, d, E, m, p, y, _);
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
                        o = Math.sin(e);
                    return n(t)
                        ? ((t[0] = 1),
                          (t[1] = 0),
                          (t[2] = 0),
                          (t[3] = 0),
                          (t[4] = r),
                          (t[5] = o),
                          (t[6] = 0),
                          (t[7] = -o),
                          (t[8] = r),
                          t)
                        : new s(1, 0, 0, 0, r, -o, 0, o, r);
                }),
                (s.fromRotationY = function(e, t) {
                    var r = Math.cos(e),
                        o = Math.sin(e);
                    return n(t)
                        ? ((t[0] = r),
                          (t[1] = 0),
                          (t[2] = -o),
                          (t[3] = 0),
                          (t[4] = 1),
                          (t[5] = 0),
                          (t[6] = o),
                          (t[7] = 0),
                          (t[8] = r),
                          t)
                        : new s(r, 0, o, 0, 1, 0, -o, 0, r);
                }),
                (s.fromRotationZ = function(e, t) {
                    var r = Math.cos(e),
                        o = Math.sin(e);
                    return n(t)
                        ? ((t[0] = r),
                          (t[1] = o),
                          (t[2] = 0),
                          (t[3] = -o),
                          (t[4] = r),
                          (t[5] = 0),
                          (t[6] = 0),
                          (t[7] = 0),
                          (t[8] = 1),
                          t)
                        : new s(r, -o, 0, o, r, 0, 0, 0, 1);
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
                        o = e[n],
                        a = e[n + 1],
                        i = e[n + 2];
                    return (r.x = o), (r.y = a), (r.z = i), r;
                }),
                (s.setColumn = function(e, t, r, n) {
                    n = s.clone(e, n);
                    var o = 3 * t;
                    return (n[o] = r.x), (n[o + 1] = r.y), (n[o + 2] = r.z), n;
                }),
                (s.getRow = function(e, t, r) {
                    var n = e[t],
                        o = e[t + 3],
                        a = e[t + 6];
                    return (r.x = n), (r.y = o), (r.z = a), r;
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
                        o = e[1] * t[0] + e[4] * t[1] + e[7] * t[2],
                        a = e[2] * t[0] + e[5] * t[1] + e[8] * t[2],
                        i = e[0] * t[3] + e[3] * t[4] + e[6] * t[5],
                        u = e[1] * t[3] + e[4] * t[4] + e[7] * t[5],
                        s = e[2] * t[3] + e[5] * t[4] + e[8] * t[5],
                        c = e[0] * t[6] + e[3] * t[7] + e[6] * t[8],
                        l = e[1] * t[6] + e[4] * t[7] + e[7] * t[8],
                        f = e[2] * t[6] + e[5] * t[7] + e[8] * t[8];
                    return (
                        (r[0] = n),
                        (r[1] = o),
                        (r[2] = a),
                        (r[3] = i),
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
                        o = t.y,
                        a = t.z,
                        i = e[0] * n + e[3] * o + e[6] * a,
                        u = e[1] * n + e[4] * o + e[7] * a,
                        s = e[2] * n + e[5] * o + e[8] * a;
                    return (r.x = i), (r.y = u), (r.z = s), r;
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
                        o = e[6],
                        a = e[1],
                        i = e[4],
                        u = e[7],
                        s = e[2],
                        c = e[5],
                        l = e[8];
                    return (
                        (t[0] = r),
                        (t[1] = n),
                        (t[2] = o),
                        (t[3] = a),
                        (t[4] = i),
                        (t[5] = u),
                        (t[6] = s),
                        (t[7] = c),
                        (t[8] = l),
                        t
                    );
                });
            var E = [1, 0, 0],
                m = [2, 2, 1],
                p = new s(),
                y = new s();
            return (
                (s.computeEigenDecomposition = function(e, t) {
                    var r = u.EPSILON20,
                        o = 0,
                        a = 0;
                    n(t) || (t = {});
                    for (
                        var i = (t.unitary = s.clone(s.IDENTITY, t.unitary)),
                            h = (t.diagonal = s.clone(e, t.diagonal)),
                            d = r * c(h);
                        a < 10 && l(h) > d;

                    )
                        f(h, p),
                            s.transpose(p, y),
                            s.multiply(h, p, h),
                            s.multiply(y, h, h),
                            s.multiply(i, p, i),
                            ++o > 2 && (++a, (o = 0));
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
                        o = e[1],
                        a = e[4],
                        i = e[7],
                        u = e[2],
                        s = e[5],
                        c = e[8];
                    return t * (a * c - s * i) + o * (s * n - r * c) + u * (r * i - a * n);
                }),
                (s.inverse = function(e, t) {
                    var r = e[0],
                        n = e[1],
                        o = e[2],
                        a = e[3],
                        i = e[4],
                        u = e[5],
                        c = e[6],
                        l = e[7],
                        f = e[8],
                        h = s.determinant(e);
                    (t[0] = i * f - l * u),
                        (t[1] = l * o - n * f),
                        (t[2] = n * u - i * o),
                        (t[3] = c * u - a * f),
                        (t[4] = r * f - c * o),
                        (t[5] = a * o - r * u),
                        (t[6] = a * l - c * i),
                        (t[7] = c * n - r * l),
                        (t[8] = r * i - a * n);
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
                (s.IDENTITY = i(new s(1, 0, 0, 0, 1, 0, 0, 0, 1))),
                (s.ZERO = i(new s(0, 0, 0, 0, 0, 0, 0, 0, 0))),
                (s.COLUMN0ROW0 = 0),
                (s.COLUMN0ROW1 = 1),
                (s.COLUMN0ROW2 = 2),
                (s.COLUMN1ROW0 = 3),
                (s.COLUMN1ROW1 = 4),
                (s.COLUMN1ROW2 = 5),
                (s.COLUMN2ROW0 = 6),
                (s.COLUMN2ROW1 = 7),
                (s.COLUMN2ROW2 = 8),
                o(s.prototype, {
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
        ], function(e, t, r, n, o, a) {
            "use strict";
            function i(e, r, n, o) {
                (this.x = t(e, 0)), (this.y = t(r, 0)), (this.z = t(n, 0)), (this.w = t(o, 0));
            }
            (i.fromElements = function(e, t, n, o, a) {
                return r(a) ? ((a.x = e), (a.y = t), (a.z = n), (a.w = o), a) : new i(e, t, n, o);
            }),
                (i.fromColor = function(e, t) {
                    return r(t)
                        ? ((t.x = e.red), (t.y = e.green), (t.z = e.blue), (t.w = e.alpha), t)
                        : new i(e.red, e.green, e.blue, e.alpha);
                }),
                (i.clone = function(e, t) {
                    if (r(e))
                        return r(t)
                            ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), (t.w = e.w), t)
                            : new i(e.x, e.y, e.z, e.w);
                }),
                (i.packedLength = 4),
                (i.pack = function(e, r, n) {
                    return (
                        (n = t(n, 0)),
                        (r[n++] = e.x),
                        (r[n++] = e.y),
                        (r[n++] = e.z),
                        (r[n] = e.w),
                        r
                    );
                }),
                (i.unpack = function(e, n, o) {
                    return (
                        (n = t(n, 0)),
                        r(o) || (o = new i()),
                        (o.x = e[n++]),
                        (o.y = e[n++]),
                        (o.z = e[n++]),
                        (o.w = e[n]),
                        o
                    );
                }),
                (i.packArray = function(e, t) {
                    var n = e.length;
                    r(t) ? (t.length = 4 * n) : (t = new Array(4 * n));
                    for (var o = 0; o < n; ++o) i.pack(e[o], t, 4 * o);
                    return t;
                }),
                (i.unpackArray = function(e, t) {
                    var n = e.length;
                    r(t) ? (t.length = n / 4) : (t = new Array(n / 4));
                    for (var o = 0; o < n; o += 4) {
                        var a = o / 4;
                        t[a] = i.unpack(e, o, t[a]);
                    }
                    return t;
                }),
                (i.fromArray = i.unpack),
                (i.maximumComponent = function(e) {
                    return Math.max(e.x, e.y, e.z, e.w);
                }),
                (i.minimumComponent = function(e) {
                    return Math.min(e.x, e.y, e.z, e.w);
                }),
                (i.minimumByComponent = function(e, t, r) {
                    return (
                        (r.x = Math.min(e.x, t.x)),
                        (r.y = Math.min(e.y, t.y)),
                        (r.z = Math.min(e.z, t.z)),
                        (r.w = Math.min(e.w, t.w)),
                        r
                    );
                }),
                (i.maximumByComponent = function(e, t, r) {
                    return (
                        (r.x = Math.max(e.x, t.x)),
                        (r.y = Math.max(e.y, t.y)),
                        (r.z = Math.max(e.z, t.z)),
                        (r.w = Math.max(e.w, t.w)),
                        r
                    );
                }),
                (i.magnitudeSquared = function(e) {
                    return e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w;
                }),
                (i.magnitude = function(e) {
                    return Math.sqrt(i.magnitudeSquared(e));
                });
            var u = new i();
            (i.distance = function(e, t) {
                return i.subtract(e, t, u), i.magnitude(u);
            }),
                (i.distanceSquared = function(e, t) {
                    return i.subtract(e, t, u), i.magnitudeSquared(u);
                }),
                (i.normalize = function(e, t) {
                    var r = i.magnitude(e);
                    return (t.x = e.x / r), (t.y = e.y / r), (t.z = e.z / r), (t.w = e.w / r), t;
                }),
                (i.dot = function(e, t) {
                    return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w;
                }),
                (i.multiplyComponents = function(e, t, r) {
                    return (
                        (r.x = e.x * t.x),
                        (r.y = e.y * t.y),
                        (r.z = e.z * t.z),
                        (r.w = e.w * t.w),
                        r
                    );
                }),
                (i.divideComponents = function(e, t, r) {
                    return (
                        (r.x = e.x / t.x),
                        (r.y = e.y / t.y),
                        (r.z = e.z / t.z),
                        (r.w = e.w / t.w),
                        r
                    );
                }),
                (i.add = function(e, t, r) {
                    return (
                        (r.x = e.x + t.x),
                        (r.y = e.y + t.y),
                        (r.z = e.z + t.z),
                        (r.w = e.w + t.w),
                        r
                    );
                }),
                (i.subtract = function(e, t, r) {
                    return (
                        (r.x = e.x - t.x),
                        (r.y = e.y - t.y),
                        (r.z = e.z - t.z),
                        (r.w = e.w - t.w),
                        r
                    );
                }),
                (i.multiplyByScalar = function(e, t, r) {
                    return (r.x = e.x * t), (r.y = e.y * t), (r.z = e.z * t), (r.w = e.w * t), r;
                }),
                (i.divideByScalar = function(e, t, r) {
                    return (r.x = e.x / t), (r.y = e.y / t), (r.z = e.z / t), (r.w = e.w / t), r;
                }),
                (i.negate = function(e, t) {
                    return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), (t.w = -e.w), t;
                }),
                (i.abs = function(e, t) {
                    return (
                        (t.x = Math.abs(e.x)),
                        (t.y = Math.abs(e.y)),
                        (t.z = Math.abs(e.z)),
                        (t.w = Math.abs(e.w)),
                        t
                    );
                });
            var s = new i();
            i.lerp = function(e, t, r, n) {
                return (
                    i.multiplyByScalar(t, r, s),
                    (n = i.multiplyByScalar(e, 1 - r, n)),
                    i.add(s, n, n)
                );
            };
            var c = new i();
            (i.mostOrthogonalAxis = function(e, t) {
                var r = i.normalize(e, c);
                return (
                    i.abs(r, r),
                    (t =
                        r.x <= r.y
                            ? r.x <= r.z
                                ? r.x <= r.w
                                    ? i.clone(i.UNIT_X, t)
                                    : i.clone(i.UNIT_W, t)
                                : r.z <= r.w
                                ? i.clone(i.UNIT_Z, t)
                                : i.clone(i.UNIT_W, t)
                            : r.y <= r.z
                            ? r.y <= r.w
                                ? i.clone(i.UNIT_Y, t)
                                : i.clone(i.UNIT_W, t)
                            : r.z <= r.w
                            ? i.clone(i.UNIT_Z, t)
                            : i.clone(i.UNIT_W, t))
                );
            }),
                (i.equals = function(e, t) {
                    return (
                        e === t ||
                        (r(e) && r(t) && e.x === t.x && e.y === t.y && e.z === t.z && e.w === t.w)
                    );
                }),
                (i.equalsArray = function(e, t, r) {
                    return e.x === t[r] && e.y === t[r + 1] && e.z === t[r + 2] && e.w === t[r + 3];
                }),
                (i.equalsEpsilon = function(e, t, n, o) {
                    return (
                        e === t ||
                        (r(e) &&
                            r(t) &&
                            a.equalsEpsilon(e.x, t.x, n, o) &&
                            a.equalsEpsilon(e.y, t.y, n, o) &&
                            a.equalsEpsilon(e.z, t.z, n, o) &&
                            a.equalsEpsilon(e.w, t.w, n, o))
                    );
                }),
                (i.ZERO = o(new i(0, 0, 0, 0))),
                (i.UNIT_X = o(new i(1, 0, 0, 0))),
                (i.UNIT_Y = o(new i(0, 1, 0, 0))),
                (i.UNIT_Z = o(new i(0, 0, 1, 0))),
                (i.UNIT_W = o(new i(0, 0, 0, 1))),
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
                    return "(" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + ")";
                });
            var l = new Float32Array(1);
            return (
                (i.packFloat = function(e, t) {
                    if ((r(t) || (t = new i()), (l[0] = e), 0 === (e = l[0])))
                        return i.clone(i.ZERO, t);
                    var n,
                        o = e < 0 ? 1 : 0;
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
                        (t.w = 2 * (n + 38) + o),
                        t
                    );
                }),
                (i.unpackFloat = function(e) {
                    var t = e.w / 2,
                        r = Math.floor(t),
                        n = 2 * (t - r);
                    if (((r -= 38), (n = 2 * n - 1), (n = -n), r >= 38))
                        return n < 0 ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
                    var o = n * e.x * (1 / 256);
                    return (
                        (o += n * e.y * (1 / 65536)),
                        (o += n * e.z * (1 / 16777216)) * Math.pow(10, r)
                    );
                }),
                i
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
        ], function(e, t, r, n, o, a, i, u, s, c) {
            "use strict";
            function l(e, t, r, o, a, i, u, s, c, l, f, h, d, E, m, p) {
                (this[0] = n(e, 0)),
                    (this[1] = n(a, 0)),
                    (this[2] = n(c, 0)),
                    (this[3] = n(d, 0)),
                    (this[4] = n(t, 0)),
                    (this[5] = n(i, 0)),
                    (this[6] = n(l, 0)),
                    (this[7] = n(E, 0)),
                    (this[8] = n(r, 0)),
                    (this[9] = n(u, 0)),
                    (this[10] = n(f, 0)),
                    (this[11] = n(m, 0)),
                    (this[12] = n(o, 0)),
                    (this[13] = n(s, 0)),
                    (this[14] = n(h, 0)),
                    (this[15] = n(p, 0));
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
                        o(r) || (r = new l()),
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
                    if (o(e))
                        return o(t)
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
                    return o(t)
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
                        o(a)
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
                    o(n) || (n = new l());
                    var a = r.x,
                        i = r.y,
                        u = r.z,
                        s = t.x * t.x,
                        c = t.x * t.y,
                        f = t.x * t.z,
                        h = t.x * t.w,
                        d = t.y * t.y,
                        E = t.y * t.z,
                        m = t.y * t.w,
                        p = t.z * t.z,
                        y = t.z * t.w,
                        _ = t.w * t.w,
                        R = s - d - p + _,
                        T = 2 * (c - y),
                        A = 2 * (f + m),
                        C = 2 * (c + y),
                        S = -s + d - p + _,
                        g = 2 * (E - h),
                        v = 2 * (f - m),
                        O = 2 * (E + h),
                        I = -s - d + p + _;
                    return (
                        (n[0] = R * a),
                        (n[1] = C * a),
                        (n[2] = v * a),
                        (n[3] = 0),
                        (n[4] = T * i),
                        (n[5] = S * i),
                        (n[6] = O * i),
                        (n[7] = 0),
                        (n[8] = A * u),
                        (n[9] = g * u),
                        (n[10] = I * u),
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
                    return o(t)
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
                    return o(t)
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
                    i = t.up;
                e.normalize(a, f),
                    e.normalize(e.cross(f, i, h), h),
                    e.normalize(e.cross(h, f, d), d);
                var u = h.x,
                    s = h.y,
                    c = h.z,
                    E = f.x,
                    m = f.y,
                    p = f.z,
                    y = d.x,
                    _ = d.y,
                    R = d.z,
                    T = n.x,
                    A = n.y,
                    C = n.z,
                    S = u * -T + s * -A + c * -C,
                    g = y * -T + _ * -A + R * -C,
                    v = E * T + m * A + p * C;
                return o(r)
                    ? ((r[0] = u),
                      (r[1] = y),
                      (r[2] = -E),
                      (r[3] = 0),
                      (r[4] = s),
                      (r[5] = _),
                      (r[6] = -m),
                      (r[7] = 0),
                      (r[8] = c),
                      (r[9] = R),
                      (r[10] = -p),
                      (r[11] = 0),
                      (r[12] = S),
                      (r[13] = g),
                      (r[14] = v),
                      (r[15] = 1),
                      r)
                    : new l(u, s, c, S, y, _, R, g, -E, -m, -p, v, 0, 0, 0, 1);
            }),
                (l.computePerspectiveFieldOfView = function(e, t, r, n, o) {
                    var a = Math.tan(0.5 * e),
                        i = 1 / a,
                        u = i / t,
                        s = (n + r) / (r - n),
                        c = (2 * n * r) / (r - n);
                    return (
                        (o[0] = u),
                        (o[1] = 0),
                        (o[2] = 0),
                        (o[3] = 0),
                        (o[4] = 0),
                        (o[5] = i),
                        (o[6] = 0),
                        (o[7] = 0),
                        (o[8] = 0),
                        (o[9] = 0),
                        (o[10] = s),
                        (o[11] = -1),
                        (o[12] = 0),
                        (o[13] = 0),
                        (o[14] = c),
                        (o[15] = 0),
                        o
                    );
                }),
                (l.computeOrthographicOffCenter = function(e, t, r, n, o, a, i) {
                    var u = 1 / (t - e),
                        s = 1 / (n - r),
                        c = 1 / (a - o),
                        l = -(t + e) * u,
                        f = -(n + r) * s,
                        h = -(a + o) * c;
                    return (
                        (u *= 2),
                        (s *= 2),
                        (c *= -2),
                        (i[0] = u),
                        (i[1] = 0),
                        (i[2] = 0),
                        (i[3] = 0),
                        (i[4] = 0),
                        (i[5] = s),
                        (i[6] = 0),
                        (i[7] = 0),
                        (i[8] = 0),
                        (i[9] = 0),
                        (i[10] = c),
                        (i[11] = 0),
                        (i[12] = l),
                        (i[13] = f),
                        (i[14] = h),
                        (i[15] = 1),
                        i
                    );
                }),
                (l.computePerspectiveOffCenter = function(e, t, r, n, o, a, i) {
                    var u = (2 * o) / (t - e),
                        s = (2 * o) / (n - r),
                        c = (t + e) / (t - e),
                        l = (n + r) / (n - r),
                        f = -(a + o) / (a - o),
                        h = (-2 * a * o) / (a - o);
                    return (
                        (i[0] = u),
                        (i[1] = 0),
                        (i[2] = 0),
                        (i[3] = 0),
                        (i[4] = 0),
                        (i[5] = s),
                        (i[6] = 0),
                        (i[7] = 0),
                        (i[8] = c),
                        (i[9] = l),
                        (i[10] = f),
                        (i[11] = -1),
                        (i[12] = 0),
                        (i[13] = 0),
                        (i[14] = h),
                        (i[15] = 0),
                        i
                    );
                }),
                (l.computeInfinitePerspectiveOffCenter = function(e, t, r, n, o, a) {
                    var i = (2 * o) / (t - e),
                        u = (2 * o) / (n - r),
                        s = (t + e) / (t - e),
                        c = (n + r) / (n - r),
                        l = -2 * o;
                    return (
                        (a[0] = i),
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
                (l.computeViewportTransformation = function(e, t, r, o) {
                    e = n(e, n.EMPTY_OBJECT);
                    var a = n(e.x, 0),
                        i = n(e.y, 0),
                        u = n(e.width, 0),
                        s = n(e.height, 0);
                    (t = n(t, 0)), (r = n(r, 1));
                    var c = 0.5 * u,
                        l = 0.5 * s,
                        f = 0.5 * (r - t),
                        h = c,
                        d = l,
                        E = f,
                        m = a + c,
                        p = i + l,
                        y = t + f;
                    return (
                        (o[0] = h),
                        (o[1] = 0),
                        (o[2] = 0),
                        (o[3] = 0),
                        (o[4] = 0),
                        (o[5] = d),
                        (o[6] = 0),
                        (o[7] = 0),
                        (o[8] = 0),
                        (o[9] = 0),
                        (o[10] = E),
                        (o[11] = 0),
                        (o[12] = m),
                        (o[13] = p),
                        (o[14] = y),
                        (o[15] = 1),
                        o
                    );
                }),
                (l.computeView = function(t, r, n, o, a) {
                    return (
                        (a[0] = o.x),
                        (a[1] = n.x),
                        (a[2] = -r.x),
                        (a[3] = 0),
                        (a[4] = o.y),
                        (a[5] = n.y),
                        (a[6] = -r.y),
                        (a[7] = 0),
                        (a[8] = o.z),
                        (a[9] = n.z),
                        (a[10] = -r.z),
                        (a[11] = 0),
                        (a[12] = -e.dot(o, t)),
                        (a[13] = -e.dot(n, t)),
                        (a[14] = e.dot(r, t)),
                        (a[15] = 1),
                        a
                    );
                }),
                (l.toArray = function(e, t) {
                    return o(t)
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
                        o = e[n],
                        a = e[n + 1],
                        i = e[n + 2],
                        u = e[n + 3];
                    return (r.x = o), (r.y = a), (r.z = i), (r.w = u), r;
                }),
                (l.setColumn = function(e, t, r, n) {
                    n = l.clone(e, n);
                    var o = 4 * t;
                    return (n[o] = r.x), (n[o + 1] = r.y), (n[o + 2] = r.z), (n[o + 3] = r.w), n;
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
            var E = new e();
            (l.setScale = function(t, r, n) {
                var o = l.getScale(t, E),
                    a = e.divideComponents(r, o, E);
                return l.multiplyByScale(t, a, n);
            }),
                (l.getRow = function(e, t, r) {
                    var n = e[t],
                        o = e[t + 4],
                        a = e[t + 8],
                        i = e[t + 12];
                    return (r.x = n), (r.y = o), (r.z = a), (r.w = i), r;
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
            var m = new e();
            l.getScale = function(t, r) {
                return (
                    (r.x = e.magnitude(e.fromElements(t[0], t[1], t[2], m))),
                    (r.y = e.magnitude(e.fromElements(t[4], t[5], t[6], m))),
                    (r.z = e.magnitude(e.fromElements(t[8], t[9], t[10], m))),
                    r
                );
            };
            var p = new e();
            (l.getMaximumScale = function(t) {
                return l.getScale(t, p), e.maximumComponent(p);
            }),
                (l.multiply = function(e, t, r) {
                    var n = e[0],
                        o = e[1],
                        a = e[2],
                        i = e[3],
                        u = e[4],
                        s = e[5],
                        c = e[6],
                        l = e[7],
                        f = e[8],
                        h = e[9],
                        d = e[10],
                        E = e[11],
                        m = e[12],
                        p = e[13],
                        y = e[14],
                        _ = e[15],
                        R = t[0],
                        T = t[1],
                        A = t[2],
                        C = t[3],
                        S = t[4],
                        g = t[5],
                        v = t[6],
                        O = t[7],
                        I = t[8],
                        M = t[9],
                        N = t[10],
                        w = t[11],
                        x = t[12],
                        P = t[13],
                        F = t[14],
                        D = t[15],
                        U = n * R + u * T + f * A + m * C,
                        L = o * R + s * T + h * A + p * C,
                        b = a * R + c * T + d * A + y * C,
                        B = i * R + l * T + E * A + _ * C,
                        z = n * S + u * g + f * v + m * O,
                        q = o * S + s * g + h * v + p * O,
                        G = a * S + c * g + d * v + y * O,
                        W = i * S + l * g + E * v + _ * O,
                        V = n * I + u * M + f * N + m * w,
                        X = o * I + s * M + h * N + p * w,
                        H = a * I + c * M + d * N + y * w,
                        k = i * I + l * M + E * N + _ * w,
                        Y = n * x + u * P + f * F + m * D,
                        j = o * x + s * P + h * F + p * D,
                        K = a * x + c * P + d * F + y * D,
                        Z = i * x + l * P + E * F + _ * D;
                    return (
                        (r[0] = U),
                        (r[1] = L),
                        (r[2] = b),
                        (r[3] = B),
                        (r[4] = z),
                        (r[5] = q),
                        (r[6] = G),
                        (r[7] = W),
                        (r[8] = V),
                        (r[9] = X),
                        (r[10] = H),
                        (r[11] = k),
                        (r[12] = Y),
                        (r[13] = j),
                        (r[14] = K),
                        (r[15] = Z),
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
                        o = e[1],
                        a = e[2],
                        i = e[4],
                        u = e[5],
                        s = e[6],
                        c = e[8],
                        l = e[9],
                        f = e[10],
                        h = e[12],
                        d = e[13],
                        E = e[14],
                        m = t[0],
                        p = t[1],
                        y = t[2],
                        _ = t[4],
                        R = t[5],
                        T = t[6],
                        A = t[8],
                        C = t[9],
                        S = t[10],
                        g = t[12],
                        v = t[13],
                        O = t[14],
                        I = n * m + i * p + c * y,
                        M = o * m + u * p + l * y,
                        N = a * m + s * p + f * y,
                        w = n * _ + i * R + c * T,
                        x = o * _ + u * R + l * T,
                        P = a * _ + s * R + f * T,
                        F = n * A + i * C + c * S,
                        D = o * A + u * C + l * S,
                        U = a * A + s * C + f * S,
                        L = n * g + i * v + c * O + h,
                        b = o * g + u * v + l * O + d,
                        B = a * g + s * v + f * O + E;
                    return (
                        (r[0] = I),
                        (r[1] = M),
                        (r[2] = N),
                        (r[3] = 0),
                        (r[4] = w),
                        (r[5] = x),
                        (r[6] = P),
                        (r[7] = 0),
                        (r[8] = F),
                        (r[9] = D),
                        (r[10] = U),
                        (r[11] = 0),
                        (r[12] = L),
                        (r[13] = b),
                        (r[14] = B),
                        (r[15] = 1),
                        r
                    );
                }),
                (l.multiplyByMatrix3 = function(e, t, r) {
                    var n = e[0],
                        o = e[1],
                        a = e[2],
                        i = e[4],
                        u = e[5],
                        s = e[6],
                        c = e[8],
                        l = e[9],
                        f = e[10],
                        h = t[0],
                        d = t[1],
                        E = t[2],
                        m = t[3],
                        p = t[4],
                        y = t[5],
                        _ = t[6],
                        R = t[7],
                        T = t[8],
                        A = n * h + i * d + c * E,
                        C = o * h + u * d + l * E,
                        S = a * h + s * d + f * E,
                        g = n * m + i * p + c * y,
                        v = o * m + u * p + l * y,
                        O = a * m + s * p + f * y,
                        I = n * _ + i * R + c * T,
                        M = o * _ + u * R + l * T,
                        N = a * _ + s * R + f * T;
                    return (
                        (r[0] = A),
                        (r[1] = C),
                        (r[2] = S),
                        (r[3] = 0),
                        (r[4] = g),
                        (r[5] = v),
                        (r[6] = O),
                        (r[7] = 0),
                        (r[8] = I),
                        (r[9] = M),
                        (r[10] = N),
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
                        o = t.y,
                        a = t.z,
                        i = n * e[0] + o * e[4] + a * e[8] + e[12],
                        u = n * e[1] + o * e[5] + a * e[9] + e[13],
                        s = n * e[2] + o * e[6] + a * e[10] + e[14];
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
                        (r[12] = i),
                        (r[13] = u),
                        (r[14] = s),
                        (r[15] = e[15]),
                        r
                    );
                });
            var y = new e();
            (l.multiplyByUniformScale = function(e, t, r) {
                return (y.x = t), (y.y = t), (y.z = t), l.multiplyByScale(e, y, r);
            }),
                (l.multiplyByScale = function(e, t, r) {
                    var n = t.x,
                        o = t.y,
                        a = t.z;
                    return 1 === n && 1 === o && 1 === a
                        ? l.clone(e, r)
                        : ((r[0] = n * e[0]),
                          (r[1] = n * e[1]),
                          (r[2] = n * e[2]),
                          (r[3] = 0),
                          (r[4] = o * e[4]),
                          (r[5] = o * e[5]),
                          (r[6] = o * e[6]),
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
                        o = t.y,
                        a = t.z,
                        i = t.w,
                        u = e[0] * n + e[4] * o + e[8] * a + e[12] * i,
                        s = e[1] * n + e[5] * o + e[9] * a + e[13] * i,
                        c = e[2] * n + e[6] * o + e[10] * a + e[14] * i,
                        l = e[3] * n + e[7] * o + e[11] * a + e[15] * i;
                    return (r.x = u), (r.y = s), (r.z = c), (r.w = l), r;
                }),
                (l.multiplyByPointAsVector = function(e, t, r) {
                    var n = t.x,
                        o = t.y,
                        a = t.z,
                        i = e[0] * n + e[4] * o + e[8] * a,
                        u = e[1] * n + e[5] * o + e[9] * a,
                        s = e[2] * n + e[6] * o + e[10] * a;
                    return (r.x = i), (r.y = u), (r.z = s), r;
                }),
                (l.multiplyByPoint = function(e, t, r) {
                    var n = t.x,
                        o = t.y,
                        a = t.z,
                        i = e[0] * n + e[4] * o + e[8] * a + e[12],
                        u = e[1] * n + e[5] * o + e[9] * a + e[13],
                        s = e[2] * n + e[6] * o + e[10] * a + e[14];
                    return (r.x = i), (r.y = u), (r.z = s), r;
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
                        o = e[3],
                        a = e[6],
                        i = e[7],
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
                        (t[12] = o),
                        (t[13] = i),
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
                        (o(e) &&
                            o(t) &&
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
                        (o(e) &&
                            o(t) &&
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
                R = new s(),
                T = new t(),
                A = new t(0, 0, 0, 1);
            return (
                (l.inverse = function(e, r) {
                    var n = e[0],
                        o = e[4],
                        a = e[8],
                        i = e[12],
                        f = e[1],
                        h = e[5],
                        d = e[9],
                        E = e[13],
                        m = e[2],
                        p = e[6],
                        y = e[10],
                        C = e[14],
                        S = e[3],
                        g = e[7],
                        v = e[11],
                        O = e[15],
                        I = y * O,
                        M = C * v,
                        N = p * O,
                        w = C * g,
                        x = p * v,
                        P = y * g,
                        F = m * O,
                        D = C * S,
                        U = m * v,
                        L = y * S,
                        b = m * g,
                        B = p * S,
                        z = I * h + w * d + x * E - (M * h + N * d + P * E),
                        q = M * f + F * d + L * E - (I * f + D * d + U * E),
                        G = N * f + D * h + b * E - (w * f + F * h + B * E),
                        W = P * f + U * h + B * d - (x * f + L * h + b * d),
                        V = M * o + N * a + P * i - (I * o + w * a + x * i),
                        X = I * n + D * a + U * i - (M * n + F * a + L * i),
                        H = w * n + F * o + B * i - (N * n + D * o + b * i),
                        k = x * n + L * o + b * a - (P * n + U * o + B * a);
                    (I = a * E),
                        (M = i * d),
                        (N = o * E),
                        (w = i * h),
                        (x = o * d),
                        (P = a * h),
                        (F = n * E),
                        (D = i * f),
                        (U = n * d),
                        (L = a * f),
                        (b = n * h),
                        (B = o * f);
                    var Y = I * g + w * v + x * O - (M * g + N * v + P * O),
                        j = M * S + F * v + L * O - (I * S + D * v + U * O),
                        K = N * S + D * g + b * O - (w * S + F * g + B * O),
                        Z = P * S + U * g + B * v - (x * S + L * g + b * v),
                        Q = N * y + P * C + M * p - (x * C + I * p + w * y),
                        J = U * C + I * m + D * y - (F * y + L * C + M * m),
                        $ = F * p + B * C + w * m - (b * C + N * m + D * p),
                        ee = b * y + x * m + L * p - (U * p + B * y + P * m),
                        te = n * z + o * q + a * G + i * W;
                    if (Math.abs(te) < u.EPSILON21) {
                        if (
                            s.equalsEpsilon(l.getRotation(e, _), R, u.EPSILON7) &&
                            t.equals(l.getRow(e, 3, T), A)
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
                        (r[3] = W * te),
                        (r[4] = V * te),
                        (r[5] = X * te),
                        (r[6] = H * te),
                        (r[7] = k * te),
                        (r[8] = Y * te),
                        (r[9] = j * te),
                        (r[10] = K * te),
                        (r[11] = Z * te),
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
                        o = e[2],
                        a = e[4],
                        i = e[5],
                        u = e[6],
                        s = e[8],
                        c = e[9],
                        l = e[10],
                        f = e[12],
                        h = e[13],
                        d = e[14],
                        E = -r * f - n * h - o * d,
                        m = -a * f - i * h - u * d,
                        p = -s * f - c * h - l * d;
                    return (
                        (t[0] = r),
                        (t[1] = a),
                        (t[2] = s),
                        (t[3] = 0),
                        (t[4] = n),
                        (t[5] = i),
                        (t[6] = c),
                        (t[7] = 0),
                        (t[8] = o),
                        (t[9] = u),
                        (t[10] = l),
                        (t[11] = 0),
                        (t[12] = E),
                        (t[13] = m),
                        (t[14] = p),
                        (t[15] = 1),
                        t
                    );
                }),
                (l.IDENTITY = i(new l(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1))),
                (l.ZERO = i(new l(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0))),
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
        ], function(e, t, r, n, o, a, i, u) {
            "use strict";
            function s(e, t, n, o) {
                (this.west = r(e, 0)),
                    (this.south = r(t, 0)),
                    (this.east = r(n, 0)),
                    (this.north = r(o, 0));
            }
            o(s.prototype, {
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
                (s.unpack = function(e, t, o) {
                    return (
                        (t = r(t, 0)),
                        n(o) || (o = new s()),
                        (o.west = e[t++]),
                        (o.south = e[t++]),
                        (o.east = e[t++]),
                        (o.north = e[t]),
                        o
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
                (s.fromDegrees = function(e, t, o, a, i) {
                    return (
                        (e = u.toRadians(r(e, 0))),
                        (t = u.toRadians(r(t, 0))),
                        (o = u.toRadians(r(o, 0))),
                        (a = u.toRadians(r(a, 0))),
                        n(i)
                            ? ((i.west = e), (i.south = t), (i.east = o), (i.north = a), i)
                            : new s(e, t, o, a)
                    );
                }),
                (s.fromRadians = function(e, t, o, a, i) {
                    return n(i)
                        ? ((i.west = r(e, 0)),
                          (i.south = r(t, 0)),
                          (i.east = r(o, 0)),
                          (i.north = r(a, 0)),
                          i)
                        : new s(e, t, o, a);
                }),
                (s.fromCartographicArray = function(e, t) {
                    for (
                        var r = Number.MAX_VALUE,
                            o = -Number.MAX_VALUE,
                            a = Number.MAX_VALUE,
                            i = -Number.MAX_VALUE,
                            c = Number.MAX_VALUE,
                            l = -Number.MAX_VALUE,
                            f = 0,
                            h = e.length;
                        f < h;
                        f++
                    ) {
                        var d = e[f];
                        (r = Math.min(r, d.longitude)),
                            (o = Math.max(o, d.longitude)),
                            (c = Math.min(c, d.latitude)),
                            (l = Math.max(l, d.latitude));
                        var E = d.longitude >= 0 ? d.longitude : d.longitude + u.TWO_PI;
                        (a = Math.min(a, E)), (i = Math.max(i, E));
                    }
                    return (
                        o - r > i - a &&
                            ((r = a),
                            (o = i),
                            o > u.PI && (o -= u.TWO_PI),
                            r > u.PI && (r -= u.TWO_PI)),
                        n(t)
                            ? ((t.west = r), (t.south = c), (t.east = o), (t.north = l), t)
                            : new s(r, c, o, l)
                    );
                }),
                (s.fromCartesianArray = function(e, t, o) {
                    t = r(t, a.WGS84);
                    for (
                        var i = Number.MAX_VALUE,
                            c = -Number.MAX_VALUE,
                            l = Number.MAX_VALUE,
                            f = -Number.MAX_VALUE,
                            h = Number.MAX_VALUE,
                            d = -Number.MAX_VALUE,
                            E = 0,
                            m = e.length;
                        E < m;
                        E++
                    ) {
                        var p = t.cartesianToCartographic(e[E]);
                        (i = Math.min(i, p.longitude)),
                            (c = Math.max(c, p.longitude)),
                            (h = Math.min(h, p.latitude)),
                            (d = Math.max(d, p.latitude));
                        var y = p.longitude >= 0 ? p.longitude : p.longitude + u.TWO_PI;
                        (l = Math.min(l, y)), (f = Math.max(f, y));
                    }
                    return (
                        c - i > f - l &&
                            ((i = l),
                            (c = f),
                            c > u.PI && (c -= u.TWO_PI),
                            i > u.PI && (i -= u.TWO_PI)),
                        n(o)
                            ? ((o.west = i), (o.south = h), (o.east = c), (o.north = d), o)
                            : new s(i, h, c, d)
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
                    var o = t.east,
                        a = t.west;
                    o < a && (o += u.TWO_PI);
                    var i = u.negativePiToPi(0.5 * (a + o)),
                        s = 0.5 * (t.south + t.north);
                    return n(r)
                        ? ((r.longitude = i), (r.latitude = s), (r.height = 0), r)
                        : new e(i, s);
                }),
                (s.intersection = function(e, t, r) {
                    var o = e.east,
                        a = e.west,
                        i = t.east,
                        c = t.west;
                    o < a && i > 0 ? (o += u.TWO_PI) : i < c && o > 0 && (i += u.TWO_PI),
                        o < a && c < 0 ? (c += u.TWO_PI) : i < c && a < 0 && (a += u.TWO_PI);
                    var l = u.negativePiToPi(Math.max(a, c)),
                        f = u.negativePiToPi(Math.min(o, i));
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
                    var o = Math.max(e.west, t.west),
                        a = Math.max(e.south, t.south),
                        i = Math.min(e.east, t.east),
                        u = Math.min(e.north, t.north);
                    if (!(a >= u || o >= i))
                        return n(r)
                            ? ((r.west = o), (r.south = a), (r.east = i), (r.north = u), r)
                            : new s(o, a, i, u);
                }),
                (s.union = function(e, t, r) {
                    n(r) || (r = new s());
                    var o = e.east,
                        a = e.west,
                        i = t.east,
                        c = t.west;
                    o < a && i > 0 ? (o += u.TWO_PI) : i < c && o > 0 && (i += u.TWO_PI),
                        o < a && c < 0 ? (c += u.TWO_PI) : i < c && a < 0 && (a += u.TWO_PI);
                    var l = u.convertLongitudeRange(Math.min(a, c)),
                        f = u.convertLongitudeRange(Math.max(o, i));
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
                        o = e.west,
                        a = e.east;
                    return (
                        a < o && ((a += u.TWO_PI), r < 0 && (r += u.TWO_PI)),
                        (r > o || u.equalsEpsilon(r, o, u.EPSILON14)) &&
                            (r < a || u.equalsEpsilon(r, a, u.EPSILON14)) &&
                            n >= e.south &&
                            n <= e.north
                    );
                });
            var c = new e();
            return (
                (s.subsample = function(e, t, o, i) {
                    (t = r(t, a.WGS84)), (o = r(o, 0)), n(i) || (i = []);
                    var l = 0,
                        f = e.north,
                        h = e.south,
                        d = e.east,
                        E = e.west,
                        m = c;
                    (m.height = o),
                        (m.longitude = E),
                        (m.latitude = f),
                        (i[l] = t.cartographicToCartesian(m, i[l])),
                        l++,
                        (m.longitude = d),
                        (i[l] = t.cartographicToCartesian(m, i[l])),
                        l++,
                        (m.latitude = h),
                        (i[l] = t.cartographicToCartesian(m, i[l])),
                        l++,
                        (m.longitude = E),
                        (i[l] = t.cartographicToCartesian(m, i[l])),
                        l++,
                        (m.latitude = f < 0 ? f : h > 0 ? h : 0);
                    for (var p = 1; p < 8; ++p)
                        (m.longitude = -Math.PI + p * u.PI_OVER_TWO),
                            s.contains(e, m) && ((i[l] = t.cartographicToCartesian(m, i[l])), l++);
                    return (
                        0 === m.latitude &&
                            ((m.longitude = E),
                            (i[l] = t.cartographicToCartesian(m, i[l])),
                            l++,
                            (m.longitude = d),
                            (i[l] = t.cartographicToCartesian(m, i[l])),
                            l++),
                        (i.length = l),
                        i
                    );
                }),
                (s.MAX_VALUE = i(new s(-Math.PI, -u.PI_OVER_TWO, Math.PI, u.PI_OVER_TWO))),
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
        ], function(e, t, r, n, o, a, i, u, s, c, l, f, h) {
            "use strict";
            function d(t, r) {
                (this.center = e.clone(n(t, e.ZERO))), (this.radius = n(r, 0));
            }
            var E = new e(),
                m = new e(),
                p = new e(),
                y = new e(),
                _ = new e(),
                R = new e(),
                T = new e(),
                A = new e(),
                C = new e(),
                S = new e(),
                g = new e(),
                v = new e(),
                O = (4 / 3) * c.PI;
            d.fromPoints = function(t, r) {
                if ((o(r) || (r = new d()), !o(t) || 0 === t.length))
                    return (r.center = e.clone(e.ZERO, r.center)), (r.radius = 0), r;
                var n,
                    a = e.clone(t[0], T),
                    i = e.clone(a, E),
                    u = e.clone(a, m),
                    s = e.clone(a, p),
                    c = e.clone(a, y),
                    l = e.clone(a, _),
                    f = e.clone(a, R),
                    h = t.length;
                for (n = 1; n < h; n++) {
                    e.clone(t[n], a);
                    var O = a.x,
                        I = a.y,
                        M = a.z;
                    O < i.x && e.clone(a, i),
                        O > c.x && e.clone(a, c),
                        I < u.y && e.clone(a, u),
                        I > l.y && e.clone(a, l),
                        M < s.z && e.clone(a, s),
                        M > f.z && e.clone(a, f);
                }
                var N = e.magnitudeSquared(e.subtract(c, i, A)),
                    w = e.magnitudeSquared(e.subtract(l, u, A)),
                    x = e.magnitudeSquared(e.subtract(f, s, A)),
                    P = i,
                    F = c,
                    D = N;
                w > D && ((D = w), (P = u), (F = l)), x > D && ((D = x), (P = s), (F = f));
                var U = C;
                (U.x = 0.5 * (P.x + F.x)), (U.y = 0.5 * (P.y + F.y)), (U.z = 0.5 * (P.z + F.z));
                var L = e.magnitudeSquared(e.subtract(F, U, A)),
                    b = Math.sqrt(L),
                    B = S;
                (B.x = i.x), (B.y = u.y), (B.z = s.z);
                var z = g;
                (z.x = c.x), (z.y = l.y), (z.z = f.z);
                var q = e.midpoint(B, z, v),
                    G = 0;
                for (n = 0; n < h; n++) {
                    e.clone(t[n], a);
                    var W = e.magnitude(e.subtract(a, q, A));
                    W > G && (G = W);
                    var V = e.magnitudeSquared(e.subtract(a, U, A));
                    if (V > L) {
                        var X = Math.sqrt(V);
                        (b = 0.5 * (b + X)), (L = b * b);
                        var H = X - b;
                        (U.x = (b * U.x + H * a.x) / X),
                            (U.y = (b * U.y + H * a.y) / X),
                            (U.z = (b * U.z + H * a.z) / X);
                    }
                }
                return (
                    b < G
                        ? (e.clone(U, r.center), (r.radius = b))
                        : (e.clone(q, r.center), (r.radius = G)),
                    r
                );
            };
            var I = new i(),
                M = new e(),
                N = new e(),
                w = new t(),
                x = new t();
            (d.fromRectangle2D = function(e, t, r) {
                return d.fromRectangleWithHeights2D(e, t, 0, 0, r);
            }),
                (d.fromRectangleWithHeights2D = function(t, r, a, i, u) {
                    if ((o(u) || (u = new d()), !o(t)))
                        return (u.center = e.clone(e.ZERO, u.center)), (u.radius = 0), u;
                    (r = n(r, I)),
                        h.southwest(t, w),
                        (w.height = a),
                        h.northeast(t, x),
                        (x.height = i);
                    var s = r.project(w, M),
                        c = r.project(x, N),
                        l = c.x - s.x,
                        f = c.y - s.y,
                        E = c.z - s.z;
                    u.radius = 0.5 * Math.sqrt(l * l + f * f + E * E);
                    var m = u.center;
                    return (m.x = s.x + 0.5 * l), (m.y = s.y + 0.5 * f), (m.z = s.z + 0.5 * E), u;
                });
            var P = [];
            (d.fromRectangle3D = function(t, r, i, u) {
                if (((r = n(r, a.WGS84)), (i = n(i, 0)), o(u) || (u = new d()), !o(t)))
                    return (u.center = e.clone(e.ZERO, u.center)), (u.radius = 0), u;
                var s = h.subsample(t, r, i, P);
                return d.fromPoints(s, u);
            }),
                (d.fromVertices = function(t, r, a, i) {
                    if ((o(i) || (i = new d()), !o(t) || 0 === t.length))
                        return (i.center = e.clone(e.ZERO, i.center)), (i.radius = 0), i;
                    (r = n(r, e.ZERO)), (a = n(a, 3));
                    var u = T;
                    (u.x = t[0] + r.x), (u.y = t[1] + r.y), (u.z = t[2] + r.z);
                    var s,
                        c = e.clone(u, E),
                        l = e.clone(u, m),
                        f = e.clone(u, p),
                        h = e.clone(u, y),
                        O = e.clone(u, _),
                        I = e.clone(u, R),
                        M = t.length;
                    for (s = 0; s < M; s += a) {
                        var N = t[s] + r.x,
                            w = t[s + 1] + r.y,
                            x = t[s + 2] + r.z;
                        (u.x = N),
                            (u.y = w),
                            (u.z = x),
                            N < c.x && e.clone(u, c),
                            N > h.x && e.clone(u, h),
                            w < l.y && e.clone(u, l),
                            w > O.y && e.clone(u, O),
                            x < f.z && e.clone(u, f),
                            x > I.z && e.clone(u, I);
                    }
                    var P = e.magnitudeSquared(e.subtract(h, c, A)),
                        F = e.magnitudeSquared(e.subtract(O, l, A)),
                        D = e.magnitudeSquared(e.subtract(I, f, A)),
                        U = c,
                        L = h,
                        b = P;
                    F > b && ((b = F), (U = l), (L = O)), D > b && ((b = D), (U = f), (L = I));
                    var B = C;
                    (B.x = 0.5 * (U.x + L.x)), (B.y = 0.5 * (U.y + L.y)), (B.z = 0.5 * (U.z + L.z));
                    var z = e.magnitudeSquared(e.subtract(L, B, A)),
                        q = Math.sqrt(z),
                        G = S;
                    (G.x = c.x), (G.y = l.y), (G.z = f.z);
                    var W = g;
                    (W.x = h.x), (W.y = O.y), (W.z = I.z);
                    var V = e.midpoint(G, W, v),
                        X = 0;
                    for (s = 0; s < M; s += a) {
                        (u.x = t[s] + r.x), (u.y = t[s + 1] + r.y), (u.z = t[s + 2] + r.z);
                        var H = e.magnitude(e.subtract(u, V, A));
                        H > X && (X = H);
                        var k = e.magnitudeSquared(e.subtract(u, B, A));
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
                        q < X
                            ? (e.clone(B, i.center), (i.radius = q))
                            : (e.clone(V, i.center), (i.radius = X)),
                        i
                    );
                }),
                (d.fromEncodedCartesianVertices = function(t, r, n) {
                    if (
                        (o(n) || (n = new d()),
                        !o(t) || !o(r) || t.length !== r.length || 0 === t.length)
                    )
                        return (n.center = e.clone(e.ZERO, n.center)), (n.radius = 0), n;
                    var a = T;
                    (a.x = t[0] + r[0]), (a.y = t[1] + r[1]), (a.z = t[2] + r[2]);
                    var i,
                        u = e.clone(a, E),
                        s = e.clone(a, m),
                        c = e.clone(a, p),
                        l = e.clone(a, y),
                        f = e.clone(a, _),
                        h = e.clone(a, R),
                        O = t.length;
                    for (i = 0; i < O; i += 3) {
                        var I = t[i] + r[i],
                            M = t[i + 1] + r[i + 1],
                            N = t[i + 2] + r[i + 2];
                        (a.x = I),
                            (a.y = M),
                            (a.z = N),
                            I < u.x && e.clone(a, u),
                            I > l.x && e.clone(a, l),
                            M < s.y && e.clone(a, s),
                            M > f.y && e.clone(a, f),
                            N < c.z && e.clone(a, c),
                            N > h.z && e.clone(a, h);
                    }
                    var w = e.magnitudeSquared(e.subtract(l, u, A)),
                        x = e.magnitudeSquared(e.subtract(f, s, A)),
                        P = e.magnitudeSquared(e.subtract(h, c, A)),
                        F = u,
                        D = l,
                        U = w;
                    x > U && ((U = x), (F = s), (D = f)), P > U && ((U = P), (F = c), (D = h));
                    var L = C;
                    (L.x = 0.5 * (F.x + D.x)), (L.y = 0.5 * (F.y + D.y)), (L.z = 0.5 * (F.z + D.z));
                    var b = e.magnitudeSquared(e.subtract(D, L, A)),
                        B = Math.sqrt(b),
                        z = S;
                    (z.x = u.x), (z.y = s.y), (z.z = c.z);
                    var q = g;
                    (q.x = l.x), (q.y = f.y), (q.z = h.z);
                    var G = e.midpoint(z, q, v),
                        W = 0;
                    for (i = 0; i < O; i += 3) {
                        (a.x = t[i] + r[i]),
                            (a.y = t[i + 1] + r[i + 1]),
                            (a.z = t[i + 2] + r[i + 2]);
                        var V = e.magnitude(e.subtract(a, G, A));
                        V > W && (W = V);
                        var X = e.magnitudeSquared(e.subtract(a, L, A));
                        if (X > b) {
                            var H = Math.sqrt(X);
                            (B = 0.5 * (B + H)), (b = B * B);
                            var k = H - B;
                            (L.x = (B * L.x + k * a.x) / H),
                                (L.y = (B * L.y + k * a.y) / H),
                                (L.z = (B * L.z + k * a.z) / H);
                        }
                    }
                    return (
                        B < W
                            ? (e.clone(L, n.center), (n.radius = B))
                            : (e.clone(G, n.center), (n.radius = W)),
                        n
                    );
                }),
                (d.fromCornerPoints = function(t, r, n) {
                    o(n) || (n = new d());
                    var a = e.midpoint(t, r, n.center);
                    return (n.radius = e.distance(a, r)), n;
                }),
                (d.fromEllipsoid = function(t, r) {
                    return (
                        o(r) || (r = new d()),
                        e.clone(e.ZERO, r.center),
                        (r.radius = t.maximumRadius),
                        r
                    );
                });
            var F = new e();
            d.fromBoundingSpheres = function(t, r) {
                if ((o(r) || (r = new d()), !o(t) || 0 === t.length))
                    return (r.center = e.clone(e.ZERO, r.center)), (r.radius = 0), r;
                var n = t.length;
                if (1 === n) return d.clone(t[0], r);
                if (2 === n) return d.union(t[0], t[1], r);
                var a,
                    i = [];
                for (a = 0; a < n; a++) i.push(t[a].center);
                r = d.fromPoints(i, r);
                var u = r.center,
                    s = r.radius;
                for (a = 0; a < n; a++) {
                    var c = t[a];
                    s = Math.max(s, e.distance(u, c.center, F) + c.radius);
                }
                return (r.radius = s), r;
            };
            var D = new e(),
                U = new e(),
                L = new e();
            (d.fromOrientedBoundingBox = function(t, r) {
                o(r) || (r = new d());
                var n = t.halfAxes,
                    a = l.getColumn(n, 0, D),
                    i = l.getColumn(n, 1, U),
                    u = l.getColumn(n, 2, L);
                return (
                    e.add(a, i, a),
                    e.add(a, u, a),
                    (r.center = e.clone(t.center, r.center)),
                    (r.radius = e.magnitude(a)),
                    r
                );
            }),
                (d.clone = function(t, r) {
                    if (o(t))
                        return o(r)
                            ? ((r.center = e.clone(t.center, r.center)), (r.radius = t.radius), r)
                            : new d(t.center, t.radius);
                }),
                (d.packedLength = 4),
                (d.pack = function(e, t, r) {
                    r = n(r, 0);
                    var o = e.center;
                    return (t[r++] = o.x), (t[r++] = o.y), (t[r++] = o.z), (t[r] = e.radius), t;
                }),
                (d.unpack = function(e, t, r) {
                    (t = n(t, 0)), o(r) || (r = new d());
                    var a = r.center;
                    return (a.x = e[t++]), (a.y = e[t++]), (a.z = e[t++]), (r.radius = e[t]), r;
                });
            var b = new e(),
                B = new e();
            d.union = function(t, r, n) {
                o(n) || (n = new d());
                var a = t.center,
                    i = t.radius,
                    u = r.center,
                    s = r.radius,
                    c = e.subtract(u, a, b),
                    l = e.magnitude(c);
                if (i >= l + s) return t.clone(n), n;
                if (s >= l + i) return r.clone(n), n;
                var f = 0.5 * (i + l + s),
                    h = e.multiplyByScalar(c, (-i + f) / l, B);
                return e.add(h, a, h), e.clone(h, n.center), (n.radius = f), n;
            };
            var z = new e();
            (d.expand = function(t, r, n) {
                n = d.clone(t, n);
                var o = e.magnitude(e.subtract(r, n.center, z));
                return o > n.radius && (n.radius = o), n;
            }),
                (d.intersectPlane = function(t, r) {
                    var n = t.center,
                        o = t.radius,
                        a = r.normal,
                        i = e.dot(a, n) + r.distance;
                    return i < -o ? u.OUTSIDE : i < o ? u.INTERSECTING : u.INSIDE;
                }),
                (d.transform = function(e, t, r) {
                    return (
                        o(r) || (r = new d()),
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
                        o(r) || (r = new d()),
                        (r.center = f.multiplyByPoint(t, e.center, r.center)),
                        (r.radius = e.radius),
                        r
                    );
                });
            var G = new e();
            d.computePlaneDistances = function(t, r, n, a) {
                o(a) || (a = new s());
                var i = e.subtract(t.center, r, G),
                    u = e.dot(n, i);
                return (a.start = u - t.radius), (a.stop = u + t.radius), a;
            };
            for (
                var W = new e(),
                    V = new e(),
                    X = new e(),
                    H = new e(),
                    k = new e(),
                    Y = new t(),
                    j = new Array(8),
                    K = 0;
                K < 8;
                ++K
            )
                j[K] = new e();
            var Z = new i();
            return (
                (d.projectTo2D = function(t, r, o) {
                    r = n(r, Z);
                    var a = r.ellipsoid,
                        i = t.center,
                        u = t.radius,
                        s = a.geodeticSurfaceNormal(i, W),
                        c = e.cross(e.UNIT_Z, s, V);
                    e.normalize(c, c);
                    var l = e.cross(s, c, X);
                    e.normalize(l, l),
                        e.multiplyByScalar(s, u, s),
                        e.multiplyByScalar(l, u, l),
                        e.multiplyByScalar(c, u, c);
                    var f = e.negate(l, k),
                        h = e.negate(c, H),
                        E = j,
                        m = E[0];
                    e.add(s, l, m),
                        e.add(m, c, m),
                        (m = E[1]),
                        e.add(s, l, m),
                        e.add(m, h, m),
                        (m = E[2]),
                        e.add(s, f, m),
                        e.add(m, h, m),
                        (m = E[3]),
                        e.add(s, f, m),
                        e.add(m, c, m),
                        e.negate(s, s),
                        (m = E[4]),
                        e.add(s, l, m),
                        e.add(m, c, m),
                        (m = E[5]),
                        e.add(s, l, m),
                        e.add(m, h, m),
                        (m = E[6]),
                        e.add(s, f, m),
                        e.add(m, h, m),
                        (m = E[7]),
                        e.add(s, f, m),
                        e.add(m, c, m);
                    for (var p = E.length, y = 0; y < p; ++y) {
                        var _ = E[y];
                        e.add(i, _, _);
                        var R = a.cartesianToCartographic(_, Y);
                        r.project(R, _);
                    }
                    (o = d.fromPoints(E, o)), (i = o.center);
                    var T = i.x,
                        A = i.y,
                        C = i.z;
                    return (i.x = C), (i.y = T), (i.z = A), o;
                }),
                (d.isOccluded = function(e, t) {
                    return !t.isBoundingSphereVisible(e);
                }),
                (d.equals = function(t, r) {
                    return (
                        t === r ||
                        (o(t) && o(r) && e.equals(t.center, r.center) && t.radius === r.radius)
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
                    return O * e * e * e;
                }),
                d
            );
        }),
        define("Core/AxisAlignedBoundingBox", [
            "./Cartesian3",
            "./Check",
            "./defaultValue",
            "./defined",
            "./Intersect"
        ], function(e, t, r, n, o) {
            "use strict";
            function a(t, o, a) {
                (this.minimum = e.clone(r(t, e.ZERO))),
                    (this.maximum = e.clone(r(o, e.ZERO))),
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
                    var o = t[0].x,
                        i = t[0].y,
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
                        E = d.x,
                        m = d.y,
                        p = d.z;
                    (o = Math.min(E, o)),
                        (s = Math.max(E, s)),
                        (i = Math.min(m, i)),
                        (c = Math.max(m, c)),
                        (u = Math.min(p, u)),
                        (l = Math.max(p, l));
                }
                var y = r.minimum;
                (y.x = o), (y.y = i), (y.z = u);
                var _ = r.maximum;
                return (_.x = s), (_.y = c), (_.z = l), (r.center = e.midpoint(y, _, r.center)), r;
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
            var i = new e();
            return (
                (a.intersectPlane = function(t, r) {
                    i = e.subtract(t.maximum, t.minimum, i);
                    var n = e.multiplyByScalar(i, 0.5, i),
                        a = r.normal,
                        u = n.x * Math.abs(a.x) + n.y * Math.abs(a.y) + n.z * Math.abs(a.z),
                        s = e.dot(t.center, a) + r.distance;
                    return s - u > 0 ? o.INSIDE : s + u < 0 ? o.OUTSIDE : o.INTERSECTING;
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
        define("Core/QuadraticRealPolynomial", ["./DeveloperError", "./Math"], function(e, t) {
            "use strict";
            function r(e, r, n) {
                var o = e + r;
                return t.sign(e) !== t.sign(r) &&
                    Math.abs(o / Math.max(Math.abs(e), Math.abs(r))) < n
                    ? 0
                    : o;
            }
            var n = {};
            return (
                (n.computeDiscriminant = function(e, t, r) {
                    return t * t - 4 * e * r;
                }),
                (n.computeRealRoots = function(e, n, o) {
                    var a;
                    if (0 === e) return 0 === n ? [] : [-o / n];
                    if (0 === n) {
                        if (0 === o) return [0, 0];
                        var i = Math.abs(o),
                            u = Math.abs(e);
                        if (i < u && i / u < t.EPSILON14) return [0, 0];
                        if (i > u && u / i < t.EPSILON14) return [];
                        if ((a = -o / e) < 0) return [];
                        var s = Math.sqrt(a);
                        return [-s, s];
                    }
                    if (0 === o) return (a = -n / e), a < 0 ? [a, 0] : [0, a];
                    var c = n * n,
                        l = 4 * e * o,
                        f = r(c, -l, t.EPSILON14);
                    if (f < 0) return [];
                    var h = -0.5 * r(n, t.sign(n) * Math.sqrt(f), t.EPSILON14);
                    return n > 0 ? [h / e, o / h] : [o / h, h / e];
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
                var o,
                    a,
                    i = e,
                    u = t / 3,
                    s = r / 3,
                    c = n,
                    l = i * s,
                    f = u * c,
                    h = u * u,
                    d = s * s,
                    E = i * s - h,
                    m = i * c - u * s,
                    p = u * c - d,
                    y = 4 * E * p - m * m;
                if (y < 0) {
                    var _, R, T;
                    h * f >= l * d
                        ? ((_ = i), (R = E), (T = -2 * u * E + i * m))
                        : ((_ = c), (R = p), (T = -c * m + 2 * s * p));
                    var A = T < 0 ? -1 : 1,
                        C = -A * Math.abs(_) * Math.sqrt(-y);
                    a = -T + C;
                    var S = a / 2,
                        g = S < 0 ? -Math.pow(-S, 1 / 3) : Math.pow(S, 1 / 3),
                        v = a === C ? -g : -R / g;
                    return (
                        (o = R <= 0 ? g + v : -T / (g * g + v * v + R)),
                        h * f >= l * d ? [(o - u) / i] : [-c / (o + s)]
                    );
                }
                var O = E,
                    I = -2 * u * E + i * m,
                    M = p,
                    N = -c * m + 2 * s * p,
                    w = Math.sqrt(y),
                    x = Math.sqrt(3) / 2,
                    P = Math.abs(Math.atan2(i * w, -I) / 3);
                o = 2 * Math.sqrt(-O);
                var F = Math.cos(P);
                a = o * F;
                var D = o * (-F / 2 - x * Math.sin(P)),
                    U = a + D > 2 * u ? a - u : D - u,
                    L = i,
                    b = U / L;
                (P = Math.abs(Math.atan2(c * w, -N) / 3)),
                    (o = 2 * Math.sqrt(-M)),
                    (F = Math.cos(P)),
                    (a = o * F),
                    (D = o * (-F / 2 - x * Math.sin(P)));
                var B = -c,
                    z = a + D < 2 * s ? a + s : D + s,
                    q = B / z,
                    G = L * z,
                    W = -U * z - L * B,
                    V = U * B,
                    X = (s * W - u * V) / (-u * W + s * G);
                return b <= X
                    ? b <= q
                        ? X <= q
                            ? [b, X, q]
                            : [b, q, X]
                        : [q, b, X]
                    : b <= q
                    ? [X, b, q]
                    : X <= q
                    ? [X, q, b]
                    : [q, X, b];
            }
            var n = {};
            return (
                (n.computeDiscriminant = function(e, t, r, n) {
                    var o = e * e,
                        a = t * t,
                        i = r * r;
                    return (
                        18 * e * t * r * n + a * i - 27 * o * (n * n) - 4 * (e * i * r + a * t * n)
                    );
                }),
                (n.computeRealRoots = function(e, n, o, a) {
                    var i, u;
                    if (0 === e) return t.computeRealRoots(n, o, a);
                    if (0 === n) {
                        if (0 === o) {
                            if (0 === a) return [0, 0, 0];
                            u = -a / e;
                            var s = u < 0 ? -Math.pow(-u, 1 / 3) : Math.pow(u, 1 / 3);
                            return [s, s, s];
                        }
                        return 0 === a
                            ? ((i = t.computeRealRoots(e, 0, o)),
                              0 === i.Length ? [0] : [i[0], 0, i[1]])
                            : r(e, 0, o, a);
                    }
                    return 0 === o
                        ? 0 === a
                            ? ((u = -n / e), u < 0 ? [u, 0, 0] : [0, 0, u])
                            : r(e, n, 0, a)
                        : 0 === a
                        ? ((i = t.computeRealRoots(e, n, o)),
                          0 === i.length
                              ? [0]
                              : i[1] <= 0
                              ? [i[0], i[1], 0]
                              : i[0] >= 0
                              ? [0, i[0], i[1]]
                              : [i[0], 0, i[1]])
                        : r(e, n, o, a);
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
            function o(t, o, a, i) {
                var u = t * t,
                    s = o - (3 * u) / 8,
                    c = a - (o * t) / 2 + (u * t) / 8,
                    l = i - (a * t) / 4 + (o * u) / 16 - (3 * u * u) / 256,
                    f = e.computeRealRoots(1, 2 * s, s * s - 4 * l, -c * c);
                if (f.length > 0) {
                    var h = -t / 4,
                        d = f[f.length - 1];
                    if (Math.abs(d) < r.EPSILON14) {
                        var E = n.computeRealRoots(1, s, l);
                        if (2 === E.length) {
                            var m,
                                p = E[0],
                                y = E[1];
                            if (p >= 0 && y >= 0) {
                                var _ = Math.sqrt(p),
                                    R = Math.sqrt(y);
                                return [h - R, h - _, h + _, h + R];
                            }
                            if (p >= 0 && y < 0) return (m = Math.sqrt(p)), [h - m, h + m];
                            if (p < 0 && y >= 0) return (m = Math.sqrt(y)), [h - m, h + m];
                        }
                        return [];
                    }
                    if (d > 0) {
                        var T = Math.sqrt(d),
                            A = (s + d - c / T) / 2,
                            C = (s + d + c / T) / 2,
                            S = n.computeRealRoots(1, T, A),
                            g = n.computeRealRoots(1, -T, C);
                        return 0 !== S.length
                            ? ((S[0] += h),
                              (S[1] += h),
                              0 !== g.length
                                  ? ((g[0] += h),
                                    (g[1] += h),
                                    S[1] <= g[0]
                                        ? [S[0], S[1], g[0], g[1]]
                                        : g[1] <= S[0]
                                        ? [g[0], g[1], S[0], S[1]]
                                        : S[0] >= g[0] && S[1] <= g[1]
                                        ? [g[0], S[0], S[1], g[1]]
                                        : g[0] >= S[0] && g[1] <= S[1]
                                        ? [S[0], g[0], g[1], S[1]]
                                        : S[0] > g[0] && S[0] < g[1]
                                        ? [g[0], S[0], g[1], S[1]]
                                        : [S[0], g[0], S[1], g[1]])
                                  : S)
                            : 0 !== g.length
                            ? ((g[0] += h), (g[1] += h), g)
                            : [];
                    }
                }
                return [];
            }
            function a(t, o, a, i) {
                var u = a * a,
                    s = o * o,
                    c = t * t,
                    l = -2 * o,
                    f = a * t + s - 4 * i,
                    h = c * i - a * o * t + u,
                    d = e.computeRealRoots(1, l, f, h);
                if (d.length > 0) {
                    var E,
                        m,
                        p = d[0],
                        y = o - p,
                        _ = y * y,
                        R = t / 2,
                        T = y / 2,
                        A = _ - 4 * i,
                        C = _ + 4 * Math.abs(i),
                        S = c - 4 * p,
                        g = c + 4 * Math.abs(p);
                    if (p < 0 || A * g < S * C) {
                        var v = Math.sqrt(S);
                        (E = v / 2), (m = 0 === v ? 0 : (t * T - a) / v);
                    } else {
                        var O = Math.sqrt(A);
                        (E = 0 === O ? 0 : (t * T - a) / O), (m = O / 2);
                    }
                    var I, M;
                    0 === R && 0 === E
                        ? ((I = 0), (M = 0))
                        : r.sign(R) === r.sign(E)
                        ? ((I = R + E), (M = p / I))
                        : ((M = R - E), (I = p / M));
                    var N, w;
                    0 === T && 0 === m
                        ? ((N = 0), (w = 0))
                        : r.sign(T) === r.sign(m)
                        ? ((N = T + m), (w = i / N))
                        : ((w = T - m), (N = i / w));
                    var x = n.computeRealRoots(1, I, N),
                        P = n.computeRealRoots(1, M, w);
                    if (0 !== x.length)
                        return 0 !== P.length
                            ? x[1] <= P[0]
                                ? [x[0], x[1], P[0], P[1]]
                                : P[1] <= x[0]
                                ? [P[0], P[1], x[0], x[1]]
                                : x[0] >= P[0] && x[1] <= P[1]
                                ? [P[0], x[0], x[1], P[1]]
                                : P[0] >= x[0] && P[1] <= x[1]
                                ? [x[0], P[0], P[1], x[1]]
                                : x[0] > P[0] && x[0] < P[1]
                                ? [P[0], x[0], P[1], x[1]]
                                : [x[0], P[0], x[1], P[1]]
                            : x;
                    if (0 !== P.length) return P;
                }
                return [];
            }
            var i = {};
            return (
                (i.computeDiscriminant = function(e, t, r, n, o) {
                    var a = e * e,
                        i = a * e,
                        u = t * t,
                        s = u * t,
                        c = r * r,
                        l = c * r,
                        f = n * n,
                        h = f * n,
                        d = o * o;
                    return (
                        u * c * f -
                        4 * s * h -
                        4 * e * l * f +
                        18 * e * t * r * h -
                        27 * a * f * f +
                        256 * i * (d * o) +
                        o *
                            (18 * s * r * n -
                                4 * u * l +
                                16 * e * c * c -
                                80 * e * t * c * n -
                                6 * e * u * f +
                                144 * a * r * f) +
                        d * (144 * e * u * r - 27 * u * u - 128 * a * c - 192 * a * t * n)
                    );
                }),
                (i.computeRealRoots = function(t, n, i, u, s) {
                    if (Math.abs(t) < r.EPSILON15) return e.computeRealRoots(n, i, u, s);
                    var c = n / t,
                        l = i / t,
                        f = u / t,
                        h = s / t,
                        d = c < 0 ? 1 : 0;
                    switch (
                        ((d += l < 0 ? d + 1 : d),
                        (d += f < 0 ? d + 1 : d),
                        (d += h < 0 ? d + 1 : d))
                    ) {
                        case 0:
                            return o(c, l, f, h);
                        case 1:
                        case 2:
                            return a(c, l, f, h);
                        case 3:
                        case 4:
                            return o(c, l, f, h);
                        case 5:
                            return a(c, l, f, h);
                        case 6:
                        case 7:
                            return o(c, l, f, h);
                        case 8:
                            return a(c, l, f, h);
                        case 9:
                        case 10:
                            return o(c, l, f, h);
                        case 11:
                            return a(c, l, f, h);
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                            return o(c, l, f, h);
                        default:
                            return;
                    }
                }),
                i
            );
        }),
        define("Core/Ray", ["./Cartesian3", "./Check", "./defaultValue", "./defined"], function(
            e,
            t,
            r,
            n
        ) {
            "use strict";
            function o(t, n) {
                (n = e.clone(r(n, e.ZERO))),
                    e.equals(n, e.ZERO) || e.normalize(n, n),
                    (this.origin = e.clone(r(t, e.ZERO))),
                    (this.direction = n);
            }
            return (
                (o.clone = function(t, r) {
                    if (n(t))
                        return n(r)
                            ? ((r.origin = e.clone(t.origin)),
                              (r.direction = e.clone(t.direction)),
                              r)
                            : new o(t.origin, t.direction);
                }),
                (o.getPoint = function(t, r, o) {
                    return (
                        n(o) || (o = new e()),
                        (o = e.multiplyByScalar(t.direction, r, o)),
                        e.add(t.origin, o, o)
                    );
                }),
                o
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
        ], function(e, t, r, n, o, a, i, u, s, c, l) {
            "use strict";
            function f(e, t, r, n) {
                var o = t * t - 4 * e * r;
                if (!(o < 0)) {
                    if (o > 0) {
                        var a = 1 / (2 * e),
                            i = Math.sqrt(o),
                            u = (-t + i) * a,
                            s = (-t - i) * a;
                        return (
                            u < s ? ((n.root0 = u), (n.root1 = s)) : ((n.root0 = s), (n.root1 = u)),
                            n
                        );
                    }
                    var c = -t / (2 * e);
                    if (0 !== c) return (n.root0 = n.root1 = c), n;
                }
            }
            function h(t, r, o) {
                n(o) || (o = new a());
                var i = t.origin,
                    u = t.direction,
                    s = r.center,
                    c = r.radius * r.radius,
                    l = e.subtract(i, s, _),
                    h = e.dot(u, u),
                    d = 2 * e.dot(u, l),
                    E = e.magnitudeSquared(l) - c,
                    m = f(h, d, E, C);
                if (n(m)) return (o.start = m.root0), (o.stop = m.root1), o;
            }
            function d(e, t, r) {
                var n = e + t;
                return i.sign(e) !== i.sign(t) &&
                    Math.abs(n / Math.max(Math.abs(e), Math.abs(t))) < r
                    ? 0
                    : n;
            }
            function E(t, r, n, o, a) {
                var l,
                    f = o * o,
                    h = a * a,
                    E = (t[u.COLUMN1ROW1] - t[u.COLUMN2ROW2]) * h,
                    m = a * (o * d(t[u.COLUMN1ROW0], t[u.COLUMN0ROW1], i.EPSILON15) + r.y),
                    p = t[u.COLUMN0ROW0] * f + t[u.COLUMN2ROW2] * h + o * r.x + n,
                    y = h * d(t[u.COLUMN2ROW1], t[u.COLUMN1ROW2], i.EPSILON15),
                    _ = a * (o * d(t[u.COLUMN2ROW0], t[u.COLUMN0ROW2]) + r.z),
                    R = [];
                if (0 === _ && 0 === y) {
                    if (((l = s.computeRealRoots(E, m, p)), 0 === l.length)) return R;
                    var T = l[0],
                        A = Math.sqrt(Math.max(1 - T * T, 0));
                    if (
                        (R.push(new e(o, a * T, a * -A)),
                        R.push(new e(o, a * T, a * A)),
                        2 === l.length)
                    ) {
                        var C = l[1],
                            S = Math.sqrt(Math.max(1 - C * C, 0));
                        R.push(new e(o, a * C, a * -S)), R.push(new e(o, a * C, a * S));
                    }
                    return R;
                }
                var g = _ * _,
                    v = y * y,
                    O = E * E,
                    I = _ * y,
                    M = O + v,
                    N = 2 * (m * E + I),
                    w = 2 * p * E + m * m - v + g,
                    x = 2 * (p * m - I),
                    P = p * p - g;
                if (0 === M && 0 === N && 0 === w && 0 === x) return R;
                l = c.computeRealRoots(M, N, w, x, P);
                var F = l.length;
                if (0 === F) return R;
                for (var D = 0; D < F; ++D) {
                    var U,
                        L = l[D],
                        b = L * L,
                        B = Math.max(1 - b, 0),
                        z = Math.sqrt(B);
                    U =
                        i.sign(E) === i.sign(p)
                            ? d(E * b + p, m * L, i.EPSILON12)
                            : i.sign(p) === i.sign(m * L)
                            ? d(E * b, m * L + p, i.EPSILON12)
                            : d(E * b + m * L, p, i.EPSILON12);
                    var q = d(y * L, _, i.EPSILON15),
                        G = U * q;
                    G < 0
                        ? R.push(new e(o, a * L, a * z))
                        : G > 0
                        ? R.push(new e(o, a * L, a * -z))
                        : 0 !== z
                        ? (R.push(new e(o, a * L, a * -z)), R.push(new e(o, a * L, a * z)), ++D)
                        : R.push(new e(o, a * L, a * z));
                }
                return R;
            }
            var m = {};
            m.rayPlane = function(t, r, o) {
                n(o) || (o = new e());
                var a = t.origin,
                    u = t.direction,
                    s = r.normal,
                    c = e.dot(s, u);
                if (!(Math.abs(c) < i.EPSILON15)) {
                    var l = (-r.distance - e.dot(s, a)) / c;
                    if (!(l < 0)) return (o = e.multiplyByScalar(u, l, o)), e.add(a, o, o);
                }
            };
            var p = new e(),
                y = new e(),
                _ = new e(),
                R = new e(),
                T = new e();
            (m.rayTriangleParametric = function(t, n, o, a, u) {
                u = r(u, !1);
                var s,
                    c,
                    l,
                    f,
                    h,
                    d = t.origin,
                    E = t.direction,
                    m = e.subtract(o, n, p),
                    A = e.subtract(a, n, y),
                    C = e.cross(E, A, _),
                    S = e.dot(m, C);
                if (u) {
                    if (S < i.EPSILON6) return;
                    if (((s = e.subtract(d, n, R)), (l = e.dot(s, C)) < 0 || l > S)) return;
                    if (((c = e.cross(s, m, T)), (f = e.dot(E, c)) < 0 || l + f > S)) return;
                    h = e.dot(A, c) / S;
                } else {
                    if (Math.abs(S) < i.EPSILON6) return;
                    var g = 1 / S;
                    if (((s = e.subtract(d, n, R)), (l = e.dot(s, C) * g) < 0 || l > 1)) return;
                    if (((c = e.cross(s, m, T)), (f = e.dot(E, c) * g) < 0 || l + f > 1)) return;
                    h = e.dot(A, c) * g;
                }
                return h;
            }),
                (m.rayTriangle = function(t, r, o, a, i, u) {
                    var s = m.rayTriangleParametric(t, r, o, a, i);
                    if (n(s) && !(s < 0))
                        return (
                            n(u) || (u = new e()),
                            e.multiplyByScalar(t.direction, s, u),
                            e.add(t.origin, u, u)
                        );
                });
            var A = new l();
            m.lineSegmentTriangle = function(t, r, o, a, i, u, s) {
                var c = A;
                e.clone(t, c.origin),
                    e.subtract(r, t, c.direction),
                    e.normalize(c.direction, c.direction);
                var l = m.rayTriangleParametric(c, o, a, i, u);
                if (!(!n(l) || l < 0 || l > e.distance(t, r)))
                    return (
                        n(s) || (s = new e()),
                        e.multiplyByScalar(c.direction, l, s),
                        e.add(c.origin, s, s)
                    );
            };
            var C = { root0: 0, root1: 0 };
            m.raySphere = function(e, t, r) {
                if (((r = h(e, t, r)), n(r) && !(r.stop < 0)))
                    return (r.start = Math.max(r.start, 0)), r;
            };
            var S = new l();
            m.lineSegmentSphere = function(t, r, o, a) {
                var i = S;
                e.clone(t, i.origin);
                var u = e.subtract(r, t, i.direction),
                    s = e.magnitude(u);
                if ((e.normalize(u, u), (a = h(i, o, a)), !(!n(a) || a.stop < 0 || a.start > s)))
                    return (a.start = Math.max(a.start, 0)), (a.stop = Math.min(a.stop, s)), a;
            };
            var g = new e(),
                v = new e();
            m.rayEllipsoid = function(t, r) {
                var n,
                    o,
                    i,
                    u,
                    s,
                    c = r.oneOverRadii,
                    l = e.multiplyComponents(c, t.origin, g),
                    f = e.multiplyComponents(c, t.direction, v),
                    h = e.magnitudeSquared(l),
                    d = e.dot(l, f);
                if (h > 1) {
                    if (d >= 0) return;
                    var E = d * d;
                    if (((n = h - 1), (o = e.magnitudeSquared(f)), (i = o * n), E < i)) return;
                    if (E > i) {
                        (u = d * d - i), (s = -d + Math.sqrt(u));
                        var m = s / o,
                            p = n / s;
                        return m < p ? new a(m, p) : { start: p, stop: m };
                    }
                    var y = Math.sqrt(n / o);
                    return new a(y, y);
                }
                return h < 1
                    ? ((n = h - 1),
                      (o = e.magnitudeSquared(f)),
                      (i = o * n),
                      (u = d * d - i),
                      (s = -d + Math.sqrt(u)),
                      new a(0, s / o))
                    : d < 0
                    ? ((o = e.magnitudeSquared(f)), new a(0, -d / o))
                    : void 0;
            };
            var O = new e(),
                I = new e(),
                M = new e(),
                N = new e(),
                w = new e(),
                x = new u(),
                P = new u(),
                F = new u(),
                D = new u(),
                U = new u(),
                L = new u(),
                b = new u(),
                B = new e(),
                z = new e(),
                q = new t();
            m.grazingAltitudeLocation = function(t, r) {
                var o = t.origin,
                    a = t.direction;
                if (!e.equals(o, e.ZERO)) {
                    var s = r.geodeticSurfaceNormal(o, O);
                    if (e.dot(a, s) >= 0) return o;
                }
                var c = n(this.rayEllipsoid(t, r)),
                    l = r.transformPositionToScaledSpace(a, O),
                    f = e.normalize(l, l),
                    h = e.mostOrthogonalAxis(l, N),
                    d = e.normalize(e.cross(h, f, I), I),
                    m = e.normalize(e.cross(f, d, M), M),
                    p = x;
                (p[0] = f.x),
                    (p[1] = f.y),
                    (p[2] = f.z),
                    (p[3] = d.x),
                    (p[4] = d.y),
                    (p[5] = d.z),
                    (p[6] = m.x),
                    (p[7] = m.y),
                    (p[8] = m.z);
                var y = u.transpose(p, P),
                    _ = u.fromScale(r.radii, F),
                    R = u.fromScale(r.oneOverRadii, D),
                    T = U;
                (T[0] = 0),
                    (T[1] = -a.z),
                    (T[2] = a.y),
                    (T[3] = a.z),
                    (T[4] = 0),
                    (T[5] = -a.x),
                    (T[6] = -a.y),
                    (T[7] = a.x),
                    (T[8] = 0);
                var A,
                    C,
                    S = u.multiply(u.multiply(y, R, L), T, L),
                    g = u.multiply(u.multiply(S, _, b), p, b),
                    v = u.multiplyByVector(S, o, w),
                    G = E(g, e.negate(v, O), 0, 0, 1),
                    W = G.length;
                if (W > 0) {
                    for (
                        var V = e.clone(e.ZERO, z), X = Number.NEGATIVE_INFINITY, H = 0;
                        H < W;
                        ++H
                    ) {
                        A = u.multiplyByVector(_, u.multiplyByVector(p, G[H], B), B);
                        var k = e.normalize(e.subtract(A, o, N), N),
                            Y = e.dot(k, a);
                        Y > X && ((X = Y), (V = e.clone(A, V)));
                    }
                    var j = r.cartesianToCartographic(V, q);
                    return (
                        (X = i.clamp(X, 0, 1)),
                        (C = e.magnitude(e.subtract(V, o, N)) * Math.sqrt(1 - X * X)),
                        (C = c ? -C : C),
                        (j.height = C),
                        r.cartographicToCartesian(j, new e())
                    );
                }
            };
            var G = new e();
            return (
                (m.lineSegmentPlane = function(t, r, o, a) {
                    n(a) || (a = new e());
                    var u = e.subtract(r, t, G),
                        s = o.normal,
                        c = e.dot(s, u);
                    if (!(Math.abs(c) < i.EPSILON6)) {
                        var l = e.dot(s, t),
                            f = -(o.distance + l) / c;
                        if (!(f < 0 || f > 1))
                            return e.multiplyByScalar(u, f, a), e.add(t, a, a), a;
                    }
                }),
                (m.trianglePlaneIntersection = function(t, r, n, o) {
                    var a = o.normal,
                        i = o.distance,
                        u = e.dot(a, t) + i < 0,
                        s = e.dot(a, r) + i < 0,
                        c = e.dot(a, n) + i < 0,
                        l = 0;
                    (l += u ? 1 : 0), (l += s ? 1 : 0), (l += c ? 1 : 0);
                    var f, h;
                    if (((1 !== l && 2 !== l) || ((f = new e()), (h = new e())), 1 === l)) {
                        if (u)
                            return (
                                m.lineSegmentPlane(t, r, o, f),
                                m.lineSegmentPlane(t, n, o, h),
                                { positions: [t, r, n, f, h], indices: [0, 3, 4, 1, 2, 4, 1, 4, 3] }
                            );
                        if (s)
                            return (
                                m.lineSegmentPlane(r, n, o, f),
                                m.lineSegmentPlane(r, t, o, h),
                                { positions: [t, r, n, f, h], indices: [1, 3, 4, 2, 0, 4, 2, 4, 3] }
                            );
                        if (c)
                            return (
                                m.lineSegmentPlane(n, t, o, f),
                                m.lineSegmentPlane(n, r, o, h),
                                { positions: [t, r, n, f, h], indices: [2, 3, 4, 0, 1, 4, 0, 4, 3] }
                            );
                    } else if (2 === l) {
                        if (!u)
                            return (
                                m.lineSegmentPlane(r, t, o, f),
                                m.lineSegmentPlane(n, t, o, h),
                                { positions: [t, r, n, f, h], indices: [1, 2, 4, 1, 4, 3, 0, 3, 4] }
                            );
                        if (!s)
                            return (
                                m.lineSegmentPlane(n, r, o, f),
                                m.lineSegmentPlane(t, r, o, h),
                                { positions: [t, r, n, f, h], indices: [2, 0, 4, 2, 4, 3, 1, 3, 4] }
                            );
                        if (!c)
                            return (
                                m.lineSegmentPlane(t, n, o, f),
                                m.lineSegmentPlane(r, n, o, h),
                                { positions: [t, r, n, f, h], indices: [0, 1, 4, 0, 4, 3, 2, 3, 4] }
                            );
                    }
                }),
                m
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
        ], function(e, t, r, n, o, a, i) {
            "use strict";
            function u(t, r) {
                (this.normal = e.clone(t)), (this.distance = r);
            }
            u.fromPointNormal = function(t, n, o) {
                var a = -e.dot(n, t);
                return r(o) ? (e.clone(n, o.normal), (o.distance = a), o) : new u(n, a);
            };
            var s = new e();
            (u.fromCartesian4 = function(t, n) {
                var o = e.fromCartesian4(t, s),
                    a = t.w;
                return r(n) ? (e.clone(o, n.normal), (n.distance = a), n) : new u(o, a);
            }),
                (u.getPointDistance = function(t, r) {
                    return e.dot(t.normal, r) + t.distance;
                });
            var c = new e();
            u.projectPointOntoPlane = function(t, n, o) {
                r(o) || (o = new e());
                var a = u.getPointDistance(t, n),
                    i = e.multiplyByScalar(t.normal, a, c);
                return e.subtract(n, i, o);
            };
            var l = new e();
            return (
                (u.transform = function(t, r, n) {
                    return (
                        i.multiplyByPointAsVector(r, t.normal, s),
                        e.normalize(s, s),
                        e.multiplyByScalar(t.normal, -t.distance, l),
                        i.multiplyByPoint(r, l, l),
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
                (u.ORIGIN_XY_PLANE = o(new u(e.UNIT_Z, 0))),
                (u.ORIGIN_YZ_PLANE = o(new u(e.UNIT_X, 0))),
                (u.ORIGIN_ZX_PLANE = o(new u(e.UNIT_Y, 0))),
                u
            );
        }),
        (function(e) {
            "use strict";
            e("ThirdParty/when", [], function() {
                function e(e, r, n, o) {
                    return t(e).then(r, n, o);
                }
                function t(e) {
                    var t, r;
                    return (
                        e instanceof n
                            ? (t = e)
                            : u(e)
                            ? ((r = i()),
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
                            : (t = o(e)),
                        t
                    );
                }
                function r(t) {
                    return e(t, a);
                }
                function n(e) {
                    this.then = e;
                }
                function o(e) {
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
                function i() {
                    function e(e, t, r) {
                        return h(e, t, r);
                    }
                    function r(e) {
                        return E(e);
                    }
                    function o(e) {
                        return E(a(e));
                    }
                    function u(e) {
                        return d(e);
                    }
                    var s, c, l, f, h, d, E;
                    return (
                        (c = new n(e)),
                        (s = {
                            then: e,
                            resolve: r,
                            reject: o,
                            progress: u,
                            promise: c,
                            resolver: { resolve: r, reject: o, progress: u }
                        }),
                        (l = []),
                        (f = []),
                        (h = function(e, t, r) {
                            var n, o;
                            return (
                                (n = i()),
                                (o =
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
                                    r.then(e, t).then(n.resolve, n.reject, o);
                                }),
                                f.push(o),
                                n.promise
                            );
                        }),
                        (d = function(e) {
                            return m(f, e), e;
                        }),
                        (E = function(e) {
                            return (
                                (e = t(e)), (h = e.then), (E = t), (d = y), m(l, e), (f = l = A), e
                            );
                        }),
                        s
                    );
                }
                function u(e) {
                    return e && "function" == typeof e.then;
                }
                function s(t, r, n, o, a) {
                    return (
                        p(2, arguments),
                        e(t, function(t) {
                            function u(e) {
                                m(e);
                            }
                            function s(e) {
                                E(e);
                            }
                            var c, l, f, h, d, E, m, p, _, R;
                            if (
                                ((_ = t.length >>> 0),
                                (c = Math.max(0, Math.min(r, _))),
                                (f = []),
                                (l = _ - c + 1),
                                (h = []),
                                (d = i()),
                                c)
                            )
                                for (
                                    p = d.progress,
                                        m = function(e) {
                                            h.push(e), --l || ((E = m = y), d.reject(h));
                                        },
                                        E = function(e) {
                                            f.push(e), --c || ((E = m = y), d.resolve(f));
                                        },
                                        R = 0;
                                    R < _;
                                    ++R
                                )
                                    R in t && e(t[R], s, u, p);
                            else d.resolve(f);
                            return d.then(n, o, a);
                        })
                    );
                }
                function c(e, t, r, n) {
                    function o(e) {
                        return t ? t(e[0]) : e[0];
                    }
                    return s(e, 1, o, r, n);
                }
                function l(e, t, r, n) {
                    return p(1, arguments), h(e, _).then(t, r, n);
                }
                function f() {
                    return h(arguments, _);
                }
                function h(t, r) {
                    return e(t, function(t) {
                        var n, o, a, u, s, c;
                        if (((a = o = t.length >>> 0), (n = []), (c = i()), a))
                            for (
                                u = function(t, o) {
                                    e(t, r).then(function(e) {
                                        (n[o] = e), --a || c.resolve(n);
                                    }, c.reject);
                                },
                                    s = 0;
                                s < o;
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
                        var o;
                        return (
                            (o = t.length),
                            (n[0] = function(t, n, a) {
                                return e(t, function(t) {
                                    return e(n, function(e) {
                                        return r(t, e, a, o);
                                    });
                                });
                            }),
                            R.apply(t, n)
                        );
                    });
                }
                function E(t, r, n) {
                    var o = arguments.length > 2;
                    return e(
                        t,
                        function(e) {
                            return (e = o ? n : e), r.resolve(e), e;
                        },
                        function(e) {
                            return r.reject(e), a(e);
                        },
                        r.progress
                    );
                }
                function m(e, t) {
                    for (var r, n = 0; (r = e[n++]); ) r(t);
                }
                function p(e, t) {
                    for (var r, n = t.length; n > e; )
                        if (null != (r = t[--n]) && "function" != typeof r)
                            throw new Error("arg " + n + " must be a function");
                }
                function y() {}
                function _(e) {
                    return e;
                }
                var R, T, A;
                return (
                    (e.defer = i),
                    (e.resolve = t),
                    (e.reject = r),
                    (e.join = f),
                    (e.all = l),
                    (e.map = h),
                    (e.reduce = d),
                    (e.any = c),
                    (e.some = s),
                    (e.chain = E),
                    (e.isPromise = u),
                    (n.prototype = {
                        always: function(e, t) {
                            return this.then(e, e, t);
                        },
                        otherwise: function(e) {
                            return this.then(A, e);
                        },
                        yield: function(e) {
                            return this.then(function() {
                                return e;
                            });
                        },
                        spread: function(e) {
                            return this.then(function(t) {
                                return l(t, function(t) {
                                    return e.apply(A, t);
                                });
                            });
                        }
                    }),
                    (T = [].slice),
                    (R =
                        [].reduce ||
                        function(e) {
                            var t, r, n, o, a;
                            if (
                                ((a = 0),
                                (t = Object(this)),
                                (o = t.length >>> 0),
                                (r = arguments),
                                r.length <= 1)
                            )
                                for (;;) {
                                    if (a in t) {
                                        n = t[a++];
                                        break;
                                    }
                                    if (++a >= o) throw new TypeError();
                                }
                            else n = r[1];
                            for (; a < o; ++a) a in t && (n = e(n, t[a], a, t));
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
                for (var n, o, a = 0, i = e.length - 1; a <= i; )
                    if (((n = ~~((a + i) / 2)), (o = r(e[n], t)) < 0)) a = n + 1;
                    else {
                        if (!(o > 0)) return n;
                        i = n - 1;
                    }
                return ~(i + 1);
            }
            return t;
        }),
        define("Core/EarthOrientationParametersSample", [], function() {
            "use strict";
            function e(e, t, r, n, o) {
                (this.xPoleWander = e),
                    (this.yPoleWander = t),
                    (this.xPoleOffset = r),
                    (this.yPoleOffset = n),
                    (this.ut1MinusUtc = o);
            }
            return e;
        }),
        define("ThirdParty/sprintf", [], function() {
            function e() {
                var e = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g,
                    t = arguments,
                    r = 0,
                    n = t[r++],
                    o = function(e, t, r, n) {
                        r || (r = " ");
                        var o = e.length >= t ? "" : Array((1 + t - e.length) >>> 0).join(r);
                        return n ? e + o : o + e;
                    },
                    a = function(e, t, r, n, a, i) {
                        var u = n - e.length;
                        return (
                            u > 0 &&
                                (e =
                                    r || !a
                                        ? o(e, n, i, r)
                                        : e.slice(0, t.length) +
                                          o("", u, "0", !0) +
                                          e.slice(t.length)),
                            e
                        );
                    },
                    i = function(e, t, r, n, i, u, s) {
                        var c = e >>> 0;
                        return (
                            (r = (r && c && { 2: "0b", 8: "0", 16: "0x" }[t]) || ""),
                            (e = r + o(c.toString(t), u || 0, "0", !1)),
                            a(e, r, n, i, s)
                        );
                    },
                    u = function(e, t, r, n, o, i) {
                        return null != n && (e = e.slice(0, n)), a(e, "", t, r, o, i);
                    },
                    s = function(e, n, s, c, l, f, h) {
                        var d, E, m, p, y;
                        if ("%%" == e) return "%";
                        for (
                            var _ = !1, R = "", T = !1, A = !1, C = " ", S = s.length, g = 0;
                            s && g < S;
                            g++
                        )
                            switch (s.charAt(g)) {
                                case " ":
                                    R = " ";
                                    break;
                                case "+":
                                    R = "+";
                                    break;
                                case "-":
                                    _ = !0;
                                    break;
                                case "'":
                                    C = s.charAt(g + 1);
                                    break;
                                case "0":
                                    T = !0;
                                    break;
                                case "#":
                                    A = !0;
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
                            (y = n ? t[n.slice(0, -1)] : t[r++]),
                            h)
                        ) {
                            case "s":
                                return u(String(y), _, c, f, T, C);
                            case "c":
                                return u(String.fromCharCode(+y), _, c, f, T);
                            case "b":
                                return i(y, 2, A, _, c, f, T);
                            case "o":
                                return i(y, 8, A, _, c, f, T);
                            case "x":
                                return i(y, 16, A, _, c, f, T);
                            case "X":
                                return i(y, 16, A, _, c, f, T).toUpperCase();
                            case "u":
                                return i(y, 10, A, _, c, f, T);
                            case "i":
                            case "d":
                                return (
                                    (d = +y || 0),
                                    (d = Math.round(d - (d % 1))),
                                    (E = d < 0 ? "-" : R),
                                    (y = E + o(String(Math.abs(d)), f, "0", !1)),
                                    a(y, E, _, c, T)
                                );
                            case "e":
                            case "E":
                            case "f":
                            case "F":
                            case "g":
                            case "G":
                                return (
                                    (d = +y),
                                    (E = d < 0 ? "-" : R),
                                    (m = ["toExponential", "toFixed", "toPrecision"][
                                        "efg".indexOf(h.toLowerCase())
                                    ]),
                                    (p = ["toString", "toUpperCase"]["eEfFgG".indexOf(h) % 2]),
                                    (y = E + Math.abs(d)[m](f)),
                                    a(y, E, _, c, T)[p]()
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
            function e(e, t, r, n, o, a, i, u) {
                (this.year = e),
                    (this.month = t),
                    (this.day = r),
                    (this.hour = n),
                    (this.minute = o),
                    (this.second = a),
                    (this.millisecond = i),
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
        ], function(e, t, r, n, o, a, i, u, s, c) {
            "use strict";
            function l(e, t) {
                return m.compare(e.julianDate, t.julianDate);
            }
            function f(e) {
                _.julianDate = e;
                var r = m.leapSeconds,
                    n = t(r, _, l);
                n < 0 && (n = ~n), n >= r.length && (n = r.length - 1);
                var o = r[n].offset;
                if (n > 0) {
                    m.secondsDifference(r[n].julianDate, e) > o && (n--, (o = r[n].offset));
                }
                m.addSeconds(e, o, e);
            }
            function h(e, r) {
                _.julianDate = e;
                var n = m.leapSeconds,
                    o = t(n, _, l);
                if ((o < 0 && (o = ~o), 0 === o)) return m.addSeconds(e, -n[0].offset, r);
                if (o >= n.length) return m.addSeconds(e, -n[o - 1].offset, r);
                var a = m.secondsDifference(n[o].julianDate, e);
                return 0 === a
                    ? m.addSeconds(e, -n[o].offset, r)
                    : a <= 1
                    ? void 0
                    : m.addSeconds(e, -n[--o].offset, r);
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
            function E(e, t, r, n, o, a, i) {
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
                        o * s.SECONDS_PER_MINUTE +
                        i * s.SECONDS_PER_MILLISECOND);
                return f >= 43200 && (l -= 1), [l, f];
            }
            function m(e, t, n) {
                (this.dayNumber = void 0),
                    (this.secondsOfDay = void 0),
                    (e = r(e, 0)),
                    (t = r(t, 0)),
                    (n = r(n, c.UTC));
                var o = 0 | e;
                (t += (e - o) * s.SECONDS_PER_DAY), d(o, t, this), n === c.UTC && f(this);
            }
            var p = new a(),
                y = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                _ = new u(),
                R = /^(\d{4})$/,
                T = /^(\d{4})-(\d{2})$/,
                A = /^(\d{4})-?(\d{3})$/,
                C = /^(\d{4})-?W(\d{2})-?(\d{1})?$/,
                S = /^(\d{4})-?(\d{2})-?(\d{2})$/,
                g = /([Z+\-])?(\d{2})?:?(\d{2})?$/,
                v = /^(\d{2})(\.\d+)?/.source + g.source,
                O = /^(\d{2}):?(\d{2})(\.\d+)?/.source + g.source,
                I = /^(\d{2}):?(\d{2}):?(\d{2})(\.\d+)?/.source + g.source;
            (m.fromGregorianDate = function(e, t) {
                var r = E(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
                return n(t) ? (d(r[0], r[1], t), f(t), t) : new m(r[0], r[1], c.UTC);
            }),
                (m.fromDate = function(e, t) {
                    var r = E(
                        e.getUTCFullYear(),
                        e.getUTCMonth() + 1,
                        e.getUTCDate(),
                        e.getUTCHours(),
                        e.getUTCMinutes(),
                        e.getUTCSeconds(),
                        e.getUTCMilliseconds()
                    );
                    return n(t) ? (d(r[0], r[1], t), f(t), t) : new m(r[0], r[1], c.UTC);
                }),
                (m.fromIso8601 = function(e, t) {
                    e = e.replace(",", ".");
                    var r,
                        o,
                        a,
                        u = e.split("T"),
                        s = 1,
                        l = 1,
                        h = 0,
                        p = 0,
                        _ = 0,
                        g = 0,
                        M = u[0],
                        N = u[1];
                    if (null !== (u = M.match(S))) (r = +u[1]), (s = +u[2]), (l = +u[3]);
                    else if (null !== (u = M.match(T))) (r = +u[1]), (s = +u[2]);
                    else if (null !== (u = M.match(R))) r = +u[1];
                    else {
                        var w;
                        if (null !== (u = M.match(A))) (r = +u[1]), (w = +u[2]), (a = i(r));
                        else if (null !== (u = M.match(C))) {
                            r = +u[1];
                            var x = +u[2],
                                P = +u[3] || 0,
                                F = new Date(Date.UTC(r, 0, 4));
                            w = 7 * x + P - F.getUTCDay() - 3;
                        }
                        (o = new Date(Date.UTC(r, 0, 1))),
                            o.setUTCDate(w),
                            (s = o.getUTCMonth() + 1),
                            (l = o.getUTCDate());
                    }
                    a = i(r);
                    var D;
                    if (n(N)) {
                        (u = N.match(I)),
                            null !== u
                                ? ((h = +u[1]),
                                  (p = +u[2]),
                                  (_ = +u[3]),
                                  (g = 1e3 * +(u[4] || 0)),
                                  (D = 5))
                                : ((u = N.match(O)),
                                  null !== u
                                      ? ((h = +u[1]), (p = +u[2]), (_ = 60 * +(u[3] || 0)), (D = 4))
                                      : null !== (u = N.match(v)) &&
                                        ((h = +u[1]), (p = 60 * +(u[2] || 0)), (D = 3)));
                        var U = u[D],
                            L = +u[D + 1],
                            b = +(u[D + 2] || 0);
                        switch (U) {
                            case "+":
                                (h -= L), (p -= b);
                                break;
                            case "-":
                                (h += L), (p += b);
                                break;
                            case "Z":
                                break;
                            default:
                                p += new Date(Date.UTC(r, s - 1, l, h, p)).getTimezoneOffset();
                        }
                    }
                    var B = 60 === _;
                    for (B && _--; p >= 60; ) (p -= 60), h++;
                    for (; h >= 24; ) (h -= 24), l++;
                    for (o = a && 2 === s ? 29 : y[s - 1]; l > o; )
                        (l -= o),
                            s++,
                            s > 12 && ((s -= 12), r++),
                            (o = a && 2 === s ? 29 : y[s - 1]);
                    for (; p < 0; ) (p += 60), h--;
                    for (; h < 0; ) (h += 24), l--;
                    for (; l < 1; )
                        s--,
                            s < 1 && ((s += 12), r--),
                            (o = a && 2 === s ? 29 : y[s - 1]),
                            (l += o);
                    var z = E(r, s, l, h, p, _, g);
                    return (
                        n(t) ? (d(z[0], z[1], t), f(t)) : (t = new m(z[0], z[1], c.UTC)),
                        B && m.addSeconds(t, 1, t),
                        t
                    );
                }),
                (m.now = function(e) {
                    return m.fromDate(new Date(), e);
                });
            var M = new m(0, 0, c.TAI);
            return (
                (m.toGregorianDate = function(e, t) {
                    var r = !1,
                        o = h(e, M);
                    n(o) || (m.addSeconds(e, -1, M), (o = h(M, M)), (r = !0));
                    var i = o.dayNumber,
                        u = o.secondsOfDay;
                    u >= 43200 && (i += 1);
                    var c = (i + 68569) | 0,
                        l = ((4 * c) / 146097) | 0;
                    c = (c - (((146097 * l + 3) / 4) | 0)) | 0;
                    var f = ((4e3 * (c + 1)) / 1461001) | 0;
                    c = (c - (((1461 * f) / 4) | 0) + 31) | 0;
                    var d = ((80 * c) / 2447) | 0,
                        E = (c - (((2447 * d) / 80) | 0)) | 0;
                    c = (d / 11) | 0;
                    var p = (d + 2 - 12 * c) | 0,
                        y = (100 * (l - 49) + f + c) | 0,
                        _ = (u / s.SECONDS_PER_HOUR) | 0,
                        R = u - _ * s.SECONDS_PER_HOUR,
                        T = (R / s.SECONDS_PER_MINUTE) | 0;
                    R -= T * s.SECONDS_PER_MINUTE;
                    var A = 0 | R,
                        C = (R - A) / s.SECONDS_PER_MILLISECOND;
                    return (
                        (_ += 12),
                        _ > 23 && (_ -= 24),
                        r && (A += 1),
                        n(t)
                            ? ((t.year = y),
                              (t.month = p),
                              (t.day = E),
                              (t.hour = _),
                              (t.minute = T),
                              (t.second = A),
                              (t.millisecond = C),
                              (t.isLeapSecond = r),
                              t)
                            : new a(y, p, E, _, T, A, C, r)
                    );
                }),
                (m.toDate = function(e) {
                    var t = m.toGregorianDate(e, p),
                        r = t.second;
                    return (
                        t.isLeapSecond && (r -= 1),
                        new Date(
                            Date.UTC(t.year, t.month - 1, t.day, t.hour, t.minute, r, t.millisecond)
                        )
                    );
                }),
                (m.toIso8601 = function(t, r) {
                    var o = m.toGregorianDate(t, p),
                        a = o.year,
                        i = o.month,
                        u = o.day,
                        s = o.hour,
                        c = o.minute,
                        l = o.second,
                        f = o.millisecond;
                    1e4 === a &&
                        1 === i &&
                        1 === u &&
                        0 === s &&
                        0 === c &&
                        0 === l &&
                        0 === f &&
                        ((a = 9999), (i = 12), (u = 31), (s = 24));
                    var h;
                    return n(r) || 0 === f
                        ? n(r) && 0 !== r
                            ? ((h = (0.01 * f)
                                  .toFixed(r)
                                  .replace(".", "")
                                  .slice(0, r)),
                              e("%04d-%02d-%02dT%02d:%02d:%02d.%sZ", a, i, u, s, c, l, h))
                            : e("%04d-%02d-%02dT%02d:%02d:%02dZ", a, i, u, s, c, l)
                        : ((h = (0.01 * f).toString().replace(".", "")),
                          e("%04d-%02d-%02dT%02d:%02d:%02d.%sZ", a, i, u, s, c, l, h));
                }),
                (m.clone = function(e, t) {
                    if (n(e))
                        return n(t)
                            ? ((t.dayNumber = e.dayNumber), (t.secondsOfDay = e.secondsOfDay), t)
                            : new m(e.dayNumber, e.secondsOfDay, c.TAI);
                }),
                (m.compare = function(e, t) {
                    var r = e.dayNumber - t.dayNumber;
                    return 0 !== r ? r : e.secondsOfDay - t.secondsOfDay;
                }),
                (m.equals = function(e, t) {
                    return (
                        e === t ||
                        (n(e) &&
                            n(t) &&
                            e.dayNumber === t.dayNumber &&
                            e.secondsOfDay === t.secondsOfDay)
                    );
                }),
                (m.equalsEpsilon = function(e, t, r) {
                    return e === t || (n(e) && n(t) && Math.abs(m.secondsDifference(e, t)) <= r);
                }),
                (m.totalDays = function(e) {
                    return e.dayNumber + e.secondsOfDay / s.SECONDS_PER_DAY;
                }),
                (m.secondsDifference = function(e, t) {
                    return (
                        (e.dayNumber - t.dayNumber) * s.SECONDS_PER_DAY +
                        (e.secondsOfDay - t.secondsOfDay)
                    );
                }),
                (m.daysDifference = function(e, t) {
                    return (
                        e.dayNumber -
                        t.dayNumber +
                        (e.secondsOfDay - t.secondsOfDay) / s.SECONDS_PER_DAY
                    );
                }),
                (m.computeTaiMinusUtc = function(e) {
                    _.julianDate = e;
                    var r = m.leapSeconds,
                        n = t(r, _, l);
                    return n < 0 && ((n = ~n), --n < 0 && (n = 0)), r[n].offset;
                }),
                (m.addSeconds = function(e, t, r) {
                    return d(e.dayNumber, e.secondsOfDay + t, r);
                }),
                (m.addMinutes = function(e, t, r) {
                    var n = e.secondsOfDay + t * s.SECONDS_PER_MINUTE;
                    return d(e.dayNumber, n, r);
                }),
                (m.addHours = function(e, t, r) {
                    var n = e.secondsOfDay + t * s.SECONDS_PER_HOUR;
                    return d(e.dayNumber, n, r);
                }),
                (m.addDays = function(e, t, r) {
                    return d(e.dayNumber + t, e.secondsOfDay, r);
                }),
                (m.lessThan = function(e, t) {
                    return m.compare(e, t) < 0;
                }),
                (m.lessThanOrEquals = function(e, t) {
                    return m.compare(e, t) <= 0;
                }),
                (m.greaterThan = function(e, t) {
                    return m.compare(e, t) > 0;
                }),
                (m.greaterThanOrEquals = function(e, t) {
                    return m.compare(e, t) >= 0;
                }),
                (m.prototype.clone = function(e) {
                    return m.clone(this, e);
                }),
                (m.prototype.equals = function(e) {
                    return m.equals(this, e);
                }),
                (m.prototype.equalsEpsilon = function(e, t) {
                    return m.equalsEpsilon(this, e, t);
                }),
                (m.prototype.toString = function() {
                    return m.toIso8601(this);
                }),
                (m.leapSeconds = [
                    new u(new m(2441317, 43210, c.TAI), 10),
                    new u(new m(2441499, 43211, c.TAI), 11),
                    new u(new m(2441683, 43212, c.TAI), 12),
                    new u(new m(2442048, 43213, c.TAI), 13),
                    new u(new m(2442413, 43214, c.TAI), 14),
                    new u(new m(2442778, 43215, c.TAI), 15),
                    new u(new m(2443144, 43216, c.TAI), 16),
                    new u(new m(2443509, 43217, c.TAI), 17),
                    new u(new m(2443874, 43218, c.TAI), 18),
                    new u(new m(2444239, 43219, c.TAI), 19),
                    new u(new m(2444786, 43220, c.TAI), 20),
                    new u(new m(2445151, 43221, c.TAI), 21),
                    new u(new m(2445516, 43222, c.TAI), 22),
                    new u(new m(2446247, 43223, c.TAI), 23),
                    new u(new m(2447161, 43224, c.TAI), 24),
                    new u(new m(2447892, 43225, c.TAI), 25),
                    new u(new m(2448257, 43226, c.TAI), 26),
                    new u(new m(2448804, 43227, c.TAI), 27),
                    new u(new m(2449169, 43228, c.TAI), 28),
                    new u(new m(2449534, 43229, c.TAI), 29),
                    new u(new m(2450083, 43230, c.TAI), 30),
                    new u(new m(2450630, 43231, c.TAI), 31),
                    new u(new m(2451179, 43232, c.TAI), 32),
                    new u(new m(2453736, 43233, c.TAI), 33),
                    new u(new m(2454832, 43234, c.TAI), 34),
                    new u(new m(2456109, 43235, c.TAI), 35),
                    new u(new m(2457204, 43236, c.TAI), 36),
                    new u(new m(2457754, 43237, c.TAI), 37)
                ]),
                m
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
                            (this.authority = this.authority.replace(i, r).replace(o, t)),
                        this.path && (this.path = this.path.replace(o, t)),
                        this.query && (this.query = this.query.replace(o, t)),
                        this.fragment && (this.fragment = this.fragment.replace(o, t));
                });
            var o = /%[0-9a-z]{2}/gi,
                a = /[a-zA-Z0-9\-\._~]/,
                i = /(.*@)?([^@:]*)(:.*)?/;
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
                var o = new r.constructor();
                for (var a in r)
                    if (r.hasOwnProperty(a)) {
                        var i = r[a];
                        n && (i = t(i, n)), (o[a] = i);
                    }
                return o;
            }
            return t;
        }),
        define("Core/combine", ["./defaultValue", "./defined"], function(e, t) {
            "use strict";
            function r(n, o, a) {
                a = e(a, !1);
                var i,
                    u,
                    s,
                    c = {},
                    l = t(n),
                    f = t(o);
                if (l)
                    for (i in n)
                        n.hasOwnProperty(i) &&
                            ((u = n[i]),
                            f && a && "object" == typeof u && o.hasOwnProperty(i)
                                ? ((s = o[i]), (c[i] = "object" == typeof s ? r(u, s, a) : u))
                                : (c[i] = u));
                if (f)
                    for (i in o)
                        o.hasOwnProperty(i) && !c.hasOwnProperty(i) && ((s = o[i]), (c[i] = s));
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
                t(o[r]) || ((o[r] = !0), console.warn(e(n, r)));
            }
            var o = {};
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
            function o(e, t) {
                var r;
                return "undefined" != typeof document && (r = document), o._implementation(e, t, r);
            }
            return (
                (o._implementation = function(n, o, a) {
                    if (!r(o)) {
                        if (void 0 === a) return n;
                        o = t(a.baseURI, a.location.href);
                    }
                    var i = new e(o);
                    return new e(n).resolve(i).toString();
                }),
                o
            );
        }),
        define("Core/getBaseUri", ["../ThirdParty/Uri", "./defined", "./DeveloperError"], function(
            e,
            t,
            r
        ) {
            "use strict";
            function n(r, n) {
                var o = "",
                    a = r.lastIndexOf("/");
                return (
                    -1 !== a && (o = r.substring(0, a + 1)),
                    n
                        ? ((r = new e(r)),
                          t(r.query) && (o += "?" + r.query),
                          t(r.fragment) && (o += "#" + r.fragment),
                          o)
                        : o
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
                    o = n.lastIndexOf("/");
                return (
                    -1 !== o && (n = n.substr(o + 1)),
                    (o = n.lastIndexOf(".")),
                    (n = -1 === o ? "" : n.substr(o + 1))
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
                    o = r.protocol;
                return (r.href = t), (r.href = r.href), o !== r.protocol || n !== r.host;
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
                var o = document.getElementsByTagName("head")[0];
                return (
                    (n.onload = function() {
                        (n.onload = void 0), o.removeChild(n), r.resolve();
                    }),
                    (n.onerror = function(e) {
                        r.reject(e);
                    }),
                    o.appendChild(n),
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
                        var o = e[n],
                            a = encodeURIComponent(n) + "=";
                        if (r(o))
                            for (var i = 0, u = o.length; i < u; ++i)
                                t += a + encodeURIComponent(o[i]) + "&";
                        else t += a + encodeURIComponent(o) + "&";
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
                    var o = t.replace(/\+/g, "%20").split(/[&;]/), a = 0, i = o.length;
                    a < i;
                    ++a
                ) {
                    var u = o[a].split("="),
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
            function o(t) {
                t = e(t, e.EMPTY_OBJECT);
                var o = e(t.throttleByServer, !1),
                    a = o || e(t.throttle, !1);
                (this.url = t.url),
                    (this.requestFunction = t.requestFunction),
                    (this.cancelFunction = t.cancelFunction),
                    (this.priorityFunction = t.priorityFunction),
                    (this.priority = e(t.priority, 0)),
                    (this.throttle = a),
                    (this.throttleByServer = o),
                    (this.type = e(t.type, n.OTHER)),
                    (this.serverKey = void 0),
                    (this.state = r.UNISSUED),
                    (this.deferred = void 0),
                    (this.cancelled = !1);
            }
            return (
                (o.prototype.cancel = function() {
                    this.cancelled = !0;
                }),
                (o.prototype.clone = function(e) {
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
                        : new o(this);
                }),
                o
            );
        }),
        define("Core/parseResponseHeaders", [], function() {
            "use strict";
            function e(e) {
                var t = {};
                if (!e) return t;
                for (var r = e.split("\r\n"), n = 0; n < r.length; ++n) {
                    var o = r[n],
                        a = o.indexOf(": ");
                    if (a > 0) {
                        var i = o.substring(0, a),
                            u = o.substring(a + 2);
                        t[i] = u;
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
            function o(e, t) {
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
                        var r = this._listeners, n = this._scopes, o = -1, a = 0;
                        a < r.length;
                        a++
                    )
                        if (r[a] === e && n[a] === t) {
                            o = a;
                            break;
                        }
                    return (
                        -1 !== o &&
                        (this._insideRaiseEvent
                            ? (this._toRemove.push(o), (r[o] = void 0), (n[o] = void 0))
                            : (r.splice(o, 1), n.splice(o, 1)),
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
                        var i = r[e];
                        t(i) && r[e].apply(n[e], arguments);
                    }
                    var u = this._toRemove;
                    if ((a = u.length) > 0) {
                        for (u.sort(o), e = 0; e < a; e++) {
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
            function o(e) {
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
                n(o.prototype, {
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
                (o.prototype.reserve = function(e) {
                    (e = t(e, this._length)), (this._array.length = e);
                }),
                (o.prototype.heapify = function(e) {
                    e = t(e, 0);
                    for (
                        var r = this._length, n = this._comparator, o = this._array, i = -1, u = !0;
                        u;

                    ) {
                        var s = 2 * (e + 1),
                            c = s - 1;
                        (i = c < r && n(o[c], o[e]) < 0 ? c : e),
                            s < r && n(o[s], o[i]) < 0 && (i = s),
                            i !== e ? (a(o, i, e), (e = i)) : (u = !1);
                    }
                }),
                (o.prototype.resort = function() {
                    for (var e = this._length, t = Math.ceil(e / 2); t >= 0; --t) this.heapify(t);
                }),
                (o.prototype.insert = function(e) {
                    var t = this._array,
                        n = this._comparator,
                        o = this._maximumLength,
                        i = this._length++;
                    for (i < t.length ? (t[i] = e) : t.push(e); 0 !== i; ) {
                        var u = Math.floor((i - 1) / 2);
                        if (!(n(t[i], t[u]) < 0)) break;
                        a(t, i, u), (i = u);
                    }
                    var s;
                    return r(o) && this._length > o && ((s = t[o]), (this._length = o)), s;
                }),
                (o.prototype.pop = function(e) {
                    if (((e = t(e, 0)), 0 !== this._length)) {
                        var r = this._array,
                            n = r[e];
                        return a(r, e, --this._length), this.heapify(e), n;
                    }
                }),
                o
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
        ], function(e, t, r, n, o, a, i, u, s, c, l) {
            "use strict";
            function f(e, t) {
                return e.priority - t.priority;
            }
            function h() {}
            function d(e) {
                o(e.priorityFunction) && (e.priority = e.priorityFunction());
            }
            function E(e) {
                var t = n(h.requestsByServer[e], h.maximumRequestsPerServer);
                return O[e] < t;
            }
            function m(e) {
                return (
                    e.state === l.UNISSUED && ((e.state = l.ISSUED), (e.deferred = t.defer())),
                    e.deferred.promise
                );
            }
            function p(e) {
                return function(t) {
                    e.state !== l.CANCELLED &&
                        (--C.numberOfActiveRequests,
                        --O[e.serverKey],
                        M.raiseEvent(),
                        (e.state = l.RECEIVED),
                        e.deferred.resolve(t));
                };
            }
            function y(e) {
                return function(t) {
                    e.state !== l.CANCELLED &&
                        (++C.numberOfFailedRequests,
                        --C.numberOfActiveRequests,
                        --O[e.serverKey],
                        M.raiseEvent(t),
                        (e.state = l.FAILED),
                        e.deferred.reject(t));
                };
            }
            function _(e) {
                var t = m(e);
                return (
                    (e.state = l.ACTIVE),
                    v.push(e),
                    ++C.numberOfActiveRequests,
                    ++C.numberOfActiveRequestsEver,
                    ++O[e.serverKey],
                    e
                        .requestFunction()
                        .then(p(e))
                        .otherwise(y(e)),
                    t
                );
            }
            function R(e) {
                var t = e.state === l.ACTIVE;
                (e.state = l.CANCELLED),
                    ++C.numberOfCancelledRequests,
                    e.deferred.reject(),
                    t &&
                        (--C.numberOfActiveRequests,
                        --O[e.serverKey],
                        ++C.numberOfCancelledActiveRequests),
                    o(e.cancelFunction) && e.cancelFunction();
            }
            function T() {
                (C.numberOfAttemptedRequests = 0),
                    (C.numberOfCancelledRequests = 0),
                    (C.numberOfCancelledActiveRequests = 0);
            }
            function A() {
                h.debugShowStatistics &&
                    (C.numberOfAttemptedRequests > 0 &&
                        console.log("Number of attempted requests: " + C.numberOfAttemptedRequests),
                    C.numberOfActiveRequests > 0 &&
                        console.log("Number of active requests: " + C.numberOfActiveRequests),
                    C.numberOfCancelledRequests > 0 &&
                        console.log("Number of cancelled requests: " + C.numberOfCancelledRequests),
                    C.numberOfCancelledActiveRequests > 0 &&
                        console.log(
                            "Number of cancelled active requests: " +
                                C.numberOfCancelledActiveRequests
                        ),
                    C.numberOfFailedRequests > 0 &&
                        console.log("Number of failed requests: " + C.numberOfFailedRequests),
                    T());
            }
            var C = {
                    numberOfAttemptedRequests: 0,
                    numberOfActiveRequests: 0,
                    numberOfCancelledRequests: 0,
                    numberOfCancelledActiveRequests: 0,
                    numberOfFailedRequests: 0,
                    numberOfActiveRequestsEver: 0
                },
                S = 20,
                g = new u({ comparator: f });
            (g.maximumLength = S), g.reserve(S);
            var v = [],
                O = {},
                I = "undefined" != typeof document ? new e(document.location.href) : new e(),
                M = new i();
            return (
                (h.maximumRequests = 50),
                (h.maximumRequestsPerServer = 6),
                (h.requestsByServer = { "api.cesium.com:443": 18, "assets.cesium.com:443": 18 }),
                (h.throttleRequests = !0),
                (h.debugShowStatistics = !1),
                (h.requestCompletedEvent = M),
                a(h, {
                    statistics: {
                        get: function() {
                            return C;
                        }
                    },
                    priorityHeapLength: {
                        get: function() {
                            return S;
                        },
                        set: function(e) {
                            if (e < S)
                                for (; g.length > e; ) {
                                    var t = g.pop();
                                    R(t);
                                }
                            (S = e), (g.maximumLength = e), g.reserve(e);
                        }
                    }
                }),
                (h.update = function() {
                    var e,
                        t,
                        r = 0,
                        n = v.length;
                    for (e = 0; e < n; ++e)
                        (t = v[e]),
                            t.cancelled && R(t),
                            t.state === l.ACTIVE ? r > 0 && (v[e - r] = t) : ++r;
                    v.length -= r;
                    var o = g.internalArray,
                        a = g.length;
                    for (e = 0; e < a; ++e) d(o[e]);
                    g.resort();
                    for (
                        var i = Math.max(h.maximumRequests - v.length, 0), u = 0;
                        u < i && g.length > 0;

                    )
                        (t = g.pop()),
                            t.cancelled
                                ? R(t)
                                : !t.throttleByServer || E(t.serverKey)
                                ? (_(t), ++u)
                                : R(t);
                    A();
                }),
                (h.getServerKey = function(t) {
                    var r = new e(t).resolve(I);
                    r.normalize();
                    var n = r.authority;
                    /:/.test(n) || (n = n + ":" + ("https" === r.scheme ? "443" : "80"));
                    var a = O[n];
                    return o(a) || (O[n] = 0), n;
                }),
                (h.request = function(e) {
                    if (c(e.url) || s(e.url))
                        return M.raiseEvent(), (e.state = l.RECEIVED), e.requestFunction();
                    if (
                        (++C.numberOfAttemptedRequests,
                        o(e.serverKey) || (e.serverKey = h.getServerKey(e.url)),
                        !h.throttleRequests || !e.throttle)
                    )
                        return _(e);
                    if (
                        !(v.length >= h.maximumRequests) &&
                        (!e.throttleByServer || E(e.serverKey))
                    ) {
                        d(e);
                        var t = g.insert(e);
                        if (o(t)) {
                            if (t === e) return;
                            R(t);
                        }
                        return m(e);
                    }
                }),
                (h.clearForSpecs = function() {
                    for (; g.length > 0; ) {
                        R(g.pop());
                    }
                    for (var e = v.length, t = 0; t < e; ++t) R(v[t]);
                    (v.length = 0),
                        (O = {}),
                        (C.numberOfAttemptedRequests = 0),
                        (C.numberOfActiveRequests = 0),
                        (C.numberOfCancelledRequests = 0),
                        (C.numberOfCancelledActiveRequests = 0),
                        (C.numberOfFailedRequests = 0),
                        (C.numberOfActiveRequestsEver = 0);
                }),
                (h.numberOfActiveRequestsByServer = function(e) {
                    return O[e];
                }),
                (h.requestHeap = g),
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
                var o = n.getAuthority();
                if (t(o)) {
                    if (-1 !== o.indexOf("@")) {
                        o = o.split("@")[1];
                    }
                    if (-1 === o.indexOf(":")) {
                        var a = n.getScheme();
                        if (
                            (t(a) ||
                                ((a = window.location.protocol),
                                (a = a.substring(0, a.length - 1))),
                            "http" === a)
                        )
                            o += ":80";
                        else {
                            if ("https" !== a) return;
                            o += ":443";
                        }
                    }
                    return o;
                }
            }
            var o = {},
                a = {};
            return (
                (o.add = function(e, r) {
                    var n = e.toLowerCase() + ":" + r;
                    t(a[n]) || (a[n] = !0);
                }),
                (o.remove = function(e, r) {
                    var n = e.toLowerCase() + ":" + r;
                    t(a[n]) && delete a[n];
                }),
                (o.contains = function(e) {
                    var r = n(e);
                    return !(!t(r) || !t(a[r]));
                }),
                (o.clear = function() {
                    a = {};
                }),
                o
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
            o,
            a,
            i,
            u,
            s,
            c,
            l,
            f,
            h,
            d,
            E,
            m,
            p,
            y,
            _,
            R,
            T,
            A,
            C,
            S,
            g,
            v,
            O
        ) {
            "use strict";
            function I(e, t, r, n) {
                var o = e.query;
                if (!u(o) || 0 === o.length) return {};
                var a;
                if (-1 === o.indexOf("=")) {
                    var i = {};
                    (i[o] = void 0), (a = i);
                } else a = T(o);
                (t._queryParameters = r ? x(a, t._queryParameters, n) : a), (e.query = void 0);
            }
            function M(e, t) {
                var r = t._queryParameters,
                    n = Object.keys(r);
                1 !== n.length || u(r[n[0]]) ? (e.query = R(r)) : (e.query = n[0]);
            }
            function N(e, t) {
                return u(e) ? (u(e.clone) ? e.clone() : o(e)) : t;
            }
            function w(e) {
                if (e.state === g.ISSUED || e.state === g.ACTIVE)
                    throw new v("The Resource is already being fetched.");
                (e.state = g.UNISSUED), (e.deferred = void 0);
            }
            function x(e, t, r) {
                if (!r) return a(e, t);
                var n = o(e, !0);
                for (var i in t)
                    if (t.hasOwnProperty(i)) {
                        var s = n[i],
                            c = t[i];
                        u(s)
                            ? (Array.isArray(s) || (s = n[i] = [s]), (n[i] = s.concat(c)))
                            : (n[i] = Array.isArray(c) ? c.slice() : c);
                    }
                return n;
            }
            function P(t) {
                (t = i(t, i.EMPTY_OBJECT)),
                    "string" == typeof t && (t = { url: t }),
                    (this._url = void 0),
                    (this._templateValues = N(t.templateValues, {})),
                    (this._queryParameters = N(t.queryParameters, {})),
                    (this.headers = N(t.headers, {})),
                    (this.request = i(t.request, new A())),
                    (this.proxy = t.proxy),
                    (this.retryCallback = t.retryCallback),
                    (this.retryAttempts = i(t.retryAttempts, 0)),
                    (this._retryCount = 0);
                var r = new e(t.url);
                I(r, this, !0, !0), (r.fragment = void 0), (this._url = r.toString());
            }
            function F(e) {
                var r = e.request;
                (r.url = e.url),
                    (r.requestFunction = function() {
                        var r = e.url,
                            n = !1;
                        e.isDataUri || e.isBlobUri || (n = e.isCrossOriginUrl);
                        var o = t.defer();
                        return P._Implementations.createImage(r, n, o), o.promise;
                    });
                var n = S.request(r);
                if (u(n))
                    return n.otherwise(function(n) {
                        return r.state !== g.FAILED
                            ? t.reject(n)
                            : e.retryOnError(n).then(function(o) {
                                  return o
                                      ? ((r.state = g.UNISSUED), (r.deferred = void 0), F(e))
                                      : t.reject(n);
                              });
                    });
            }
            function D(e, r, n) {
                var o = {};
                (o[r] = n), e.setQueryParameters(o);
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
                var i = S.request(a);
                if (u(i))
                    return i.otherwise(function(o) {
                        return a.state !== g.FAILED
                            ? t.reject(o)
                            : e.retryOnError(o).then(function(i) {
                                  return i
                                      ? ((a.state = g.UNISSUED), (a.deferred = void 0), D(e, r, n))
                                      : t.reject(o);
                              });
                    });
            }
            function U(e, t) {
                var r = decodeURIComponent(t);
                return e ? atob(r) : r;
            }
            function L(e, t) {
                for (
                    var r = U(e, t), n = new ArrayBuffer(r.length), o = new Uint8Array(n), a = 0;
                    a < r.length;
                    a++
                )
                    o[a] = r.charCodeAt(a);
                return n;
            }
            function b(e, t) {
                t = i(t, "");
                var r = e[1],
                    n = !!e[2],
                    o = e[3];
                switch (t) {
                    case "":
                    case "text":
                        return U(n, o);
                    case "arraybuffer":
                        return L(n, o);
                    case "blob":
                        var a = L(n, o);
                        return new Blob([a], { type: r });
                    case "document":
                        return new DOMParser().parseFromString(U(n, o), r);
                    case "json":
                        return JSON.parse(U(n, o));
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
            function z(e, t, r, n, o, a, i) {
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
                        headers: o
                    };
                s.request(l)
                    .on("response", function(e) {
                        if (e.statusCode < 200 || e.statusCode >= 300)
                            return void a.reject(new C(e.statusCode, e, e.headers));
                        var r = [];
                        e.on("data", function(e) {
                            r.push(e);
                        }),
                            e.on("end", function() {
                                var n = Buffer.concat(r);
                                "gzip" === e.headers["content-encoding"]
                                    ? c.gunzip(n, function(e, r) {
                                          e
                                              ? a.reject(new v("Error decompressing response."))
                                              : a.resolve(B(r, t));
                                      })
                                    : a.resolve(B(n, t));
                            });
                    })
                    .on("error", function(e) {
                        a.reject(new C());
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
                            I(r, this, !1), (r.fragment = void 0), (this._url = r.toString());
                        }
                    },
                    extension: {
                        get: function() {
                            return E(this._url);
                        }
                    },
                    isDataUri: {
                        get: function() {
                            return y(this._url);
                        }
                    },
                    isBlobUri: {
                        get: function() {
                            return m(this._url);
                        }
                    },
                    isCrossOriginUrl: {
                        get: function() {
                            return p(this._url);
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
                    t && M(n, this);
                    var o = n
                            .toString()
                            .replace(/%7B/g, "{")
                            .replace(/%7D/g, "}"),
                        a = this._templateValues,
                        i = Object.keys(a);
                    if (i.length > 0)
                        for (var s = 0; s < i.length; s++) {
                            var c = i[s],
                                l = a[c];
                            o = o.replace(new RegExp("{" + c + "}", "g"), encodeURIComponent(l));
                        }
                    return r && u(this.proxy) && (o = this.proxy.getURL(o)), o;
                }),
                (P.prototype.setQueryParameters = function(e, t) {
                    this._queryParameters = t
                        ? x(this._queryParameters, e, !1)
                        : x(e, this._queryParameters, !1);
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
                    this._queryParameters = x(e, this._queryParameters, !0);
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
                        I(n, r, !0, i(t.preserveQueryParameters, !1)),
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
                        (e._queryParameters = o(this._queryParameters)),
                        (e._templateValues = o(this._templateValues)),
                        (e.headers = o(this.headers)),
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
                        ((e = i(e, !1)),
                        w(this.request),
                        !q || this.isDataUri || this.isBlobUri || (!this.hasHeaders && !e))
                    )
                        return F(this, !0);
                    var r = this.fetchBlob();
                    if (u(r)) {
                        var n, o;
                        return r
                            .then(function(e) {
                                if (u(e)) {
                                    o = e;
                                    var t = window.URL.createObjectURL(e);
                                    return (n = new P({ url: t })), F(n);
                                }
                            })
                            .then(function(e) {
                                if (u(e)) return window.URL.revokeObjectURL(n.url), (e.blob = o), e;
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
                    (e = i(e, "callback")), w(this.request);
                    var t;
                    do {
                        t =
                            "loadJsonp" +
                            Math.random()
                                .toString()
                                .substring(2, 8);
                    } while (u(window[t]));
                    return D(this, e, t);
                }),
                (P.fetchJsonp = function(e) {
                    return new P(e).fetchJsonp(e.callbackParameterName);
                }),
                (P.prototype._makeRequest = function(e) {
                    var r = this;
                    w(r.request);
                    var n = r.request;
                    (n.url = r.url),
                        (n.requestFunction = function() {
                            var o = e.responseType,
                                i = a(e.headers, r.headers),
                                s = e.overrideMimeType,
                                c = e.method,
                                l = e.data,
                                f = t.defer(),
                                h = P._Implementations.loadWithXhr(r.url, o, c, l, i, f, s);
                            return (
                                u(h) &&
                                    u(h.abort) &&
                                    (n.cancelFunction = function() {
                                        h.abort();
                                    }),
                                f.promise
                            );
                        });
                    var o = S.request(n);
                    if (u(o))
                        return o
                            .then(function(e) {
                                return e;
                            })
                            .otherwise(function(o) {
                                return n.state !== g.FAILED
                                    ? t.reject(o)
                                    : r.retryOnError(o).then(function(a) {
                                          return a
                                              ? ((n.state = g.UNISSUED),
                                                (n.deferred = void 0),
                                                r.fetch(e))
                                              : t.reject(o);
                                      });
                            });
                });
            var G = /^data:(.*?)(;base64)?,(.*)$/;
            (P.prototype.fetch = function(e) {
                return (e = N(e, {})), (e.method = "GET"), this._makeRequest(e);
            }),
                (P.fetch = function(e) {
                    return new P(e).fetch({
                        responseType: e.responseType,
                        overrideMimeType: e.overrideMimeType
                    });
                }),
                (P.prototype.delete = function(e) {
                    return (e = N(e, {})), (e.method = "DELETE"), this._makeRequest(e);
                }),
                (P.delete = function(e) {
                    return new P(e).delete({
                        responseType: e.responseType,
                        overrideMimeType: e.overrideMimeType,
                        data: e.data
                    });
                }),
                (P.prototype.head = function(e) {
                    return (e = N(e, {})), (e.method = "HEAD"), this._makeRequest(e);
                }),
                (P.head = function(e) {
                    return new P(e).head({
                        responseType: e.responseType,
                        overrideMimeType: e.overrideMimeType
                    });
                }),
                (P.prototype.options = function(e) {
                    return (e = N(e, {})), (e.method = "OPTIONS"), this._makeRequest(e);
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
                        (t = N(t, {})),
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
                        (t = N(t, {})),
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
                        (t = N(t, {})),
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
                            (O.contains(e)
                                ? (n.crossOrigin = "use-credentials")
                                : (n.crossOrigin = "")),
                        (n.src = e);
                });
            var W = "undefined" == typeof XMLHttpRequest;
            return (
                (P._Implementations.loadWithXhr = function(e, t, r, n, o, a, i) {
                    var s = G.exec(e);
                    if (null !== s) return void a.resolve(b(s, t));
                    if (W) return void z(e, t, r, n, o, a, i);
                    var c = new XMLHttpRequest();
                    if (
                        (O.contains(e) && (c.withCredentials = !0),
                        c.open(r, e, !0),
                        u(i) && u(c.overrideMimeType) && c.overrideMimeType(i),
                        u(o))
                    )
                        for (var l in o) o.hasOwnProperty(l) && c.setRequestHeader(l, o[l]);
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
                                    new C(c.status, c.response, c.getAllResponseHeaders())
                                );
                            var e = c.response,
                                n = c.responseType;
                            if ("HEAD" === r || "OPTIONS" === r) {
                                var o = c.getAllResponseHeaders(),
                                    i = o.trim().split(/[\r\n]+/),
                                    s = {};
                                return (
                                    i.forEach(function(e) {
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
                                        ? a.reject(new v("Invalid XMLHttpRequest response type."))
                                        : a.resolve(c.responseText);
                            else a.resolve(e);
                        }),
                        (c.onerror = function(e) {
                            a.reject(new C());
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
        ], function(e, t, r, n, o, a, i, u, s, c, l, f) {
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
                    E(this, t.data);
                else if (n(t.url)) {
                    var o = s.createIfNeeded(t.url),
                        a = this;
                    this._downloadPromise = e(
                        o.fetchJson(),
                        function(e) {
                            E(a, e);
                        },
                        function() {
                            a._dataError =
                                "An error occurred while retrieving the EOP data from the URL " +
                                o.url +
                                ".";
                        }
                    );
                } else
                    E(this, {
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
                return i.compare(e.julianDate, t);
            }
            function E(e, r) {
                if (!n(r.columnNames))
                    return void (e._dataError =
                        "Error in loaded EOP data: The columnNames property is required.");
                if (!n(r.samples))
                    return void (e._dataError =
                        "Error in loaded EOP data: The samples property is required.");
                var o = r.columnNames.indexOf("modifiedJulianDateUtc"),
                    a = r.columnNames.indexOf("xPoleWanderRadians"),
                    s = r.columnNames.indexOf("yPoleWanderRadians"),
                    c = r.columnNames.indexOf("ut1MinusUtcSeconds"),
                    h = r.columnNames.indexOf("xCelestialPoleOffsetRadians"),
                    E = r.columnNames.indexOf("yCelestialPoleOffsetRadians"),
                    m = r.columnNames.indexOf("taiMinusUtcSeconds");
                if (o < 0 || a < 0 || s < 0 || c < 0 || h < 0 || E < 0 || m < 0)
                    return void (e._dataError =
                        "Error in loaded EOP data: The columnNames property must include modifiedJulianDateUtc, xPoleWanderRadians, yPoleWanderRadians, ut1MinusUtcSeconds, xCelestialPoleOffsetRadians, yCelestialPoleOffsetRadians, and taiMinusUtcSeconds columns");
                var p = (e._samples = r.samples),
                    y = (e._dates = []);
                (e._dateColumn = o),
                    (e._xPoleWanderRadiansColumn = a),
                    (e._yPoleWanderRadiansColumn = s),
                    (e._ut1MinusUtcSecondsColumn = c),
                    (e._xCelestialPoleOffsetRadiansColumn = h),
                    (e._yCelestialPoleOffsetRadiansColumn = E),
                    (e._taiMinusUtcSecondsColumn = m),
                    (e._columnCount = r.columnNames.length),
                    (e._lastIndex = void 0);
                for (
                    var _, R = e._addNewLeapSeconds, T = 0, A = p.length;
                    T < A;
                    T += e._columnCount
                ) {
                    var C = p[T + o],
                        S = p[T + m],
                        g = C + l.MODIFIED_JULIAN_DATE_DIFFERENCE,
                        v = new i(g, S, f.TAI);
                    if ((y.push(v), R)) {
                        if (S !== _ && n(_)) {
                            var O = i.leapSeconds,
                                I = t(O, v, d);
                            if (I < 0) {
                                var M = new u(v, S);
                                O.splice(~I, 0, M);
                            }
                        }
                        _ = S;
                    }
                }
            }
            function m(e, t, r, n, o) {
                var a = r * n;
                (o.xPoleWander = t[a + e._xPoleWanderRadiansColumn]),
                    (o.yPoleWander = t[a + e._yPoleWanderRadiansColumn]),
                    (o.xPoleOffset = t[a + e._xCelestialPoleOffsetRadiansColumn]),
                    (o.yPoleOffset = t[a + e._yCelestialPoleOffsetRadiansColumn]),
                    (o.ut1MinusUtc = t[a + e._ut1MinusUtcSecondsColumn]);
            }
            function p(e, t, r) {
                return t + e * (r - t);
            }
            function y(e, t, r, n, o, a, u) {
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
                var c = t[o],
                    l = t[a];
                if (c.equals(l) || n.equals(c)) return m(e, r, o, s, u), u;
                if (n.equals(l)) return m(e, r, a, s, u), u;
                var f = i.secondsDifference(n, c) / i.secondsDifference(l, c),
                    h = o * s,
                    d = a * s,
                    E = r[h + e._ut1MinusUtcSecondsColumn],
                    y = r[d + e._ut1MinusUtcSecondsColumn],
                    _ = y - E;
                if (_ > 0.5 || _ < -0.5) {
                    var R = r[h + e._taiMinusUtcSecondsColumn],
                        T = r[d + e._taiMinusUtcSecondsColumn];
                    R !== T && (l.equals(n) ? (E = y) : (y -= T - R));
                }
                return (
                    (u.xPoleWander = p(
                        f,
                        r[h + e._xPoleWanderRadiansColumn],
                        r[d + e._xPoleWanderRadiansColumn]
                    )),
                    (u.yPoleWander = p(
                        f,
                        r[h + e._yPoleWanderRadiansColumn],
                        r[d + e._yPoleWanderRadiansColumn]
                    )),
                    (u.xPoleOffset = p(
                        f,
                        r[h + e._xCelestialPoleOffsetRadiansColumn],
                        r[d + e._xCelestialPoleOffsetRadiansColumn]
                    )),
                    (u.yPoleOffset = p(
                        f,
                        r[h + e._yCelestialPoleOffsetRadiansColumn],
                        r[d + e._yCelestialPoleOffsetRadiansColumn]
                    )),
                    (u.ut1MinusUtc = p(f, E, y)),
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
                                : (t = new o(0, 0, 0, 0, 0)),
                            t
                        );
                    }
                })),
                (h.prototype.getPromiseToLoad = function() {
                    return e(this._downloadPromise);
                }),
                (h.prototype.compute = function(e, r) {
                    if (n(this._samples)) {
                        if ((n(r) || (r = new o(0, 0, 0, 0, 0)), 0 === this._samples.length))
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
                                d = i.lessThanOrEquals(f, e),
                                E = !n(h),
                                m = E || i.greaterThanOrEquals(h, e);
                            if (d && m)
                                return (
                                    (s = u),
                                    !E && h.equals(e) && ++s,
                                    (l = s + 1),
                                    y(this, a, this._samples, e, s, l, r),
                                    r
                                );
                        }
                        var p = t(a, e, i.compare, this._dateColumn);
                        return (
                            p >= 0
                                ? (p < a.length - 1 && a[p + 1].equals(e) && ++p, (s = p), (l = p))
                                : ((l = ~p), (s = l - 1) < 0 && (s = 0)),
                            (this._lastIndex = s),
                            y(this, a, this._samples, e, s, l, r),
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
            function o(t, r, n) {
                (this.heading = e(t, 0)), (this.pitch = e(r, 0)), (this.roll = e(n, 0));
            }
            return (
                (o.fromQuaternion = function(e, r) {
                    t(r) || (r = new o());
                    var n = 2 * (e.w * e.y - e.z * e.x),
                        a = 1 - 2 * (e.x * e.x + e.y * e.y),
                        i = 2 * (e.w * e.x + e.y * e.z),
                        u = 1 - 2 * (e.y * e.y + e.z * e.z),
                        s = 2 * (e.w * e.z + e.x * e.y);
                    return (
                        (r.heading = -Math.atan2(s, u)),
                        (r.roll = Math.atan2(i, a)),
                        (r.pitch = -Math.asin(n)),
                        r
                    );
                }),
                (o.fromDegrees = function(e, r, a, i) {
                    return (
                        t(i) || (i = new o()),
                        (i.heading = e * n.RADIANS_PER_DEGREE),
                        (i.pitch = r * n.RADIANS_PER_DEGREE),
                        (i.roll = a * n.RADIANS_PER_DEGREE),
                        i
                    );
                }),
                (o.clone = function(e, r) {
                    if (t(e))
                        return t(r)
                            ? ((r.heading = e.heading), (r.pitch = e.pitch), (r.roll = e.roll), r)
                            : new o(e.heading, e.pitch, e.roll);
                }),
                (o.equals = function(e, r) {
                    return (
                        e === r ||
                        (t(e) &&
                            t(r) &&
                            e.heading === r.heading &&
                            e.pitch === r.pitch &&
                            e.roll === r.roll)
                    );
                }),
                (o.equalsEpsilon = function(e, r, o, a) {
                    return (
                        e === r ||
                        (t(e) &&
                            t(r) &&
                            n.equalsEpsilon(e.heading, r.heading, o, a) &&
                            n.equalsEpsilon(e.pitch, r.pitch, o, a) &&
                            n.equalsEpsilon(e.roll, r.roll, o, a))
                    );
                }),
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
                    return "(" + this.heading + ", " + this.pitch + ", " + this.roll + ")";
                }),
                o
            );
        }),
        define("Core/buildModuleUrl", [
            "./defined",
            "./DeveloperError",
            "./getAbsoluteUri",
            "./Resource",
            "require"
        ], function(e, t, r, n, o) {
            "use strict";
            function a() {
                for (
                    var e = document.getElementsByTagName("script"), t = 0, r = e.length;
                    t < r;
                    ++t
                ) {
                    var n = e[t].getAttribute("src"),
                        o = E.exec(n);
                    if (null !== o) return o[1];
                }
            }
            function i(t) {
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
                            : e(define.amd) && !define.amd.toUrlUndefined && e(o.toUrl)
                            ? r("..", l("Core/buildModuleUrl.js"))
                            : a()),
                    (h = new n({ url: i(t) })),
                    h.appendForwardSlash(),
                    h
                );
            }
            function s(e) {
                return i(o.toUrl("../" + e));
            }
            function c(e) {
                return u().getDerivedResource({ url: e }).url;
            }
            function l(t) {
                return (
                    e(d) || (d = e(define.amd) && !define.amd.toUrlUndefined && e(o.toUrl) ? s : c),
                    d(t)
                );
            }
            var f,
                h,
                d,
                E = /((?:.*\/)|^)cesium[\w-]*\.js(?:\W|$)/i;
            return (
                (l._cesiumScriptRegex = E),
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
        ], function(e, t, r, n, o, a, i, u) {
            "use strict";
            function s(e) {
                (e = r(e, r.EMPTY_OBJECT)),
                    (this._xysFileUrlTemplate = i.createIfNeeded(e.xysFileUrlTemplate)),
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
                        o = (this._xTable = new Array(t + 1)),
                        s = Math.pow(this._stepSizeDays, t),
                        c = 0;
                    c <= t;
                    ++c
                ) {
                    (n[c] = s), (o[c] = c * this._stepSizeDays);
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
            function l(r, o) {
                if (r._chunkDownloadsInProgress[o]) return r._chunkDownloadsInProgress[o];
                var a = e.defer();
                r._chunkDownloadsInProgress[o] = a;
                var u,
                    s = r._xysFileUrlTemplate;
                return (
                    (u = n(s)
                        ? s.getDerivedResource({ templateValues: { 0: o } })
                        : new i({ url: t("Assets/IAU2006_XYS/IAU2006_XYS_" + o + ".json") })),
                    e(u.fetchJson(), function(e) {
                        r._chunkDownloadsInProgress[o] = !1;
                        for (
                            var t = r._samples,
                                n = e.samples,
                                i = o * r._samplesPerXysFile * 3,
                                u = 0,
                                s = n.length;
                            u < s;
                            ++u
                        )
                            t[i + u] = n[u];
                        a.resolve();
                    }),
                    a.promise
                );
            }
            var f = new a(0, 0, u.TAI);
            return (
                (s.prototype.preload = function(t, r, n, o) {
                    var a = c(this, t, r),
                        i = c(this, n, o),
                        u = (a / this._stepSizeDays - this._interpolationOrder / 2) | 0;
                    u < 0 && (u = 0);
                    var s =
                        (i / this._stepSizeDays - this._interpolationOrder / 2) |
                        (0 + this._interpolationOrder);
                    s >= this._totalSamples && (s = this._totalSamples - 1);
                    for (
                        var f = (u / this._samplesPerXysFile) | 0,
                            h = (s / this._samplesPerXysFile) | 0,
                            d = [],
                            E = f;
                        E <= h;
                        ++E
                    )
                        d.push(l(this, E));
                    return e.all(d);
                }),
                (s.prototype.computeXysRadians = function(e, t, r) {
                    var a = c(this, e, t);
                    if (!(a < 0)) {
                        var i = (a / this._stepSizeDays) | 0;
                        if (!(i >= this._totalSamples)) {
                            var u = this._interpolationOrder,
                                s = i - ((u / 2) | 0);
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
                                n(r) ? ((r.x = 0), (r.y = 0), (r.s = 0)) : (r = new o(0, 0, 0));
                                var E,
                                    m,
                                    p = a - s * this._stepSizeDays,
                                    y = this._work,
                                    _ = this._denominators,
                                    R = this._coef,
                                    T = this._xTable;
                                for (E = 0; E <= u; ++E) y[E] = p - T[E];
                                for (E = 0; E <= u; ++E) {
                                    for (R[E] = 1, m = 0; m <= u; ++m) m !== E && (R[E] *= y[m]);
                                    R[E] *= _[E];
                                    var A = 3 * (s + E);
                                    (r.x += R[E] * d[A++]),
                                        (r.y += R[E] * d[A++]),
                                        (r.s += R[E] * d[A]);
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
        ], function(e, t, r, n, o, a, i, u) {
            "use strict";
            function s(e, t, n, o) {
                (this.x = r(e, 0)), (this.y = r(t, 0)), (this.z = r(n, 0)), (this.w = r(o, 0));
            }
            var c = new e();
            s.fromAxisAngle = function(t, r, o) {
                var a = r / 2,
                    i = Math.sin(a);
                c = e.normalize(t, c);
                var u = c.x * i,
                    l = c.y * i,
                    f = c.z * i,
                    h = Math.cos(a);
                return n(o) ? ((o.x = u), (o.y = l), (o.z = f), (o.w = h), o) : new s(u, l, f, h);
            };
            var l = [1, 2, 0],
                f = new Array(3);
            s.fromRotationMatrix = function(e, t) {
                var r,
                    o,
                    a,
                    i,
                    c,
                    h = e[u.COLUMN0ROW0],
                    d = e[u.COLUMN1ROW1],
                    E = e[u.COLUMN2ROW2],
                    m = h + d + E;
                if (m > 0)
                    (r = Math.sqrt(m + 1)),
                        (c = 0.5 * r),
                        (r = 0.5 / r),
                        (o = (e[u.COLUMN1ROW2] - e[u.COLUMN2ROW1]) * r),
                        (a = (e[u.COLUMN2ROW0] - e[u.COLUMN0ROW2]) * r),
                        (i = (e[u.COLUMN0ROW1] - e[u.COLUMN1ROW0]) * r);
                else {
                    var p = l,
                        y = 0;
                    d > h && (y = 1), E > h && E > d && (y = 2);
                    var _ = p[y],
                        R = p[_];
                    r = Math.sqrt(
                        e[u.getElementIndex(y, y)] -
                            e[u.getElementIndex(_, _)] -
                            e[u.getElementIndex(R, R)] +
                            1
                    );
                    var T = f;
                    (T[y] = 0.5 * r),
                        (r = 0.5 / r),
                        (c = (e[u.getElementIndex(R, _)] - e[u.getElementIndex(_, R)]) * r),
                        (T[_] = (e[u.getElementIndex(_, y)] + e[u.getElementIndex(y, _)]) * r),
                        (T[R] = (e[u.getElementIndex(R, y)] + e[u.getElementIndex(y, R)]) * r),
                        (o = -T[0]),
                        (a = -T[1]),
                        (i = -T[2]);
                }
                return n(t) ? ((t.x = o), (t.y = a), (t.z = i), (t.w = c), t) : new s(o, a, i, c);
            };
            var h = new s(),
                d = new s(),
                E = new s(),
                m = new s();
            s.fromHeadingPitchRoll = function(t, r) {
                return (
                    (m = s.fromAxisAngle(e.UNIT_X, t.roll, h)),
                    (E = s.fromAxisAngle(e.UNIT_Y, -t.pitch, r)),
                    (r = s.multiply(E, m, E)),
                    (d = s.fromAxisAngle(e.UNIT_Z, -t.heading, h)),
                    s.multiply(d, r, r)
                );
            };
            var p = new e(),
                y = new e(),
                _ = new s(),
                R = new s(),
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
                (s.unpack = function(e, t, o) {
                    return (
                        (t = r(t, 0)),
                        n(o) || (o = new s()),
                        (o.x = e[t]),
                        (o.y = e[t + 1]),
                        (o.z = e[t + 2]),
                        (o.w = e[t + 3]),
                        o
                    );
                }),
                (s.packedInterpolationLength = 3),
                (s.convertPackedArrayForInterpolation = function(e, t, r, n) {
                    s.unpack(e, 4 * r, T), s.conjugate(T, T);
                    for (var o = 0, a = r - t + 1; o < a; o++) {
                        var i = 3 * o;
                        s.unpack(e, 4 * (t + o), _),
                            s.multiply(_, T, _),
                            _.w < 0 && s.negate(_, _),
                            s.computeAxis(_, p);
                        var u = s.computeAngle(_);
                        (n[i] = p.x * u), (n[i + 1] = p.y * u), (n[i + 2] = p.z * u);
                    }
                }),
                (s.unpackInterpolationResult = function(t, r, o, a, i) {
                    n(i) || (i = new s()), e.fromArray(t, 0, y);
                    var u = e.magnitude(y);
                    return (
                        s.unpack(r, 4 * a, R),
                        0 === u ? s.clone(s.IDENTITY, _) : s.fromAxisAngle(y, u, _),
                        s.multiply(_, R, i)
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
                        o = e.y * r,
                        a = e.z * r,
                        i = e.w * r;
                    return (t.x = n), (t.y = o), (t.z = a), (t.w = i), t;
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
                        o = e.y,
                        a = e.z,
                        i = e.w,
                        u = t.x,
                        s = t.y,
                        c = t.z,
                        l = t.w,
                        f = i * u + n * l + o * c - a * s,
                        h = i * s - n * c + o * l + a * u,
                        d = i * c + n * s - o * u + a * l,
                        E = i * l - n * u - o * s - a * c;
                    return (r.x = f), (r.y = h), (r.z = d), (r.w = E), r;
                }),
                (s.multiplyByScalar = function(e, t, r) {
                    return (r.x = e.x * t), (r.y = e.y * t), (r.z = e.z * t), (r.w = e.w * t), r;
                }),
                (s.divideByScalar = function(e, t, r) {
                    return (r.x = e.x / t), (r.y = e.y / t), (r.z = e.z / t), (r.w = e.w / t), r;
                }),
                (s.computeAxis = function(e, t) {
                    var r = e.w;
                    if (Math.abs(r - 1) < i.EPSILON6) return (t.x = t.y = t.z = 0), t;
                    var n = 1 / Math.sqrt(1 - r * r);
                    return (t.x = e.x * n), (t.y = e.y * n), (t.z = e.z * n), t;
                }),
                (s.computeAngle = function(e) {
                    return Math.abs(e.w - 1) < i.EPSILON6 ? 0 : 2 * Math.acos(e.w);
                });
            var A = new s();
            s.lerp = function(e, t, r, n) {
                return (
                    (A = s.multiplyByScalar(t, r, A)),
                    (n = s.multiplyByScalar(e, 1 - r, n)),
                    s.add(A, n, n)
                );
            };
            var C = new s(),
                S = new s(),
                g = new s();
            (s.slerp = function(e, t, r, n) {
                var o = s.dot(e, t),
                    a = t;
                if ((o < 0 && ((o = -o), (a = C = s.negate(t, C))), 1 - o < i.EPSILON6))
                    return s.lerp(e, a, r, n);
                var u = Math.acos(o);
                return (
                    (S = s.multiplyByScalar(e, Math.sin((1 - r) * u), S)),
                    (g = s.multiplyByScalar(a, Math.sin(r * u), g)),
                    (n = s.add(S, g, n)),
                    s.multiplyByScalar(n, 1 / Math.sin(u), n)
                );
            }),
                (s.log = function(t, r) {
                    var n = i.acosClamped(t.w),
                        o = 0;
                    return 0 !== n && (o = n / Math.sin(n)), e.multiplyByScalar(t, o, r);
                }),
                (s.exp = function(t, r) {
                    var n = e.magnitude(t),
                        o = 0;
                    return (
                        0 !== n && (o = Math.sin(n) / n),
                        (r.x = t.x * o),
                        (r.y = t.y * o),
                        (r.z = t.z * o),
                        (r.w = Math.cos(n)),
                        r
                    );
                });
            var v = new e(),
                O = new e(),
                I = new s(),
                M = new s();
            (s.computeInnerQuadrangle = function(t, r, n, o) {
                var a = s.conjugate(r, I);
                s.multiply(a, n, M);
                var i = s.log(M, v);
                s.multiply(a, t, M);
                var u = s.log(M, O);
                return (
                    e.add(i, u, i),
                    e.multiplyByScalar(i, 0.25, i),
                    e.negate(i, i),
                    s.exp(i, I),
                    s.multiply(r, I, o)
                );
            }),
                (s.squad = function(e, t, r, n, o, a) {
                    var i = s.slerp(e, t, o, I),
                        u = s.slerp(r, n, o, M);
                    return s.slerp(i, u, 2 * o * (1 - o), a);
                });
            for (
                var N = new s(),
                    w = 1.9011074535173003,
                    x = o.supportsTypedArrays() ? new Float32Array(8) : [],
                    P = o.supportsTypedArrays() ? new Float32Array(8) : [],
                    F = o.supportsTypedArrays() ? new Float32Array(8) : [],
                    D = o.supportsTypedArrays() ? new Float32Array(8) : [],
                    U = 0;
                U < 7;
                ++U
            ) {
                var L = U + 1,
                    b = 2 * L + 1;
                (x[U] = 1 / (L * b)), (P[U] = L / b);
            }
            return (
                (x[7] = w / 136),
                (P[7] = (8 * w) / 17),
                (s.fastSlerp = function(e, t, r, n) {
                    var o,
                        a = s.dot(e, t);
                    a >= 0 ? (o = 1) : ((o = -1), (a = -a));
                    for (var i = a - 1, u = 1 - r, c = r * r, l = u * u, f = 7; f >= 0; --f)
                        (F[f] = (x[f] * c - P[f]) * i), (D[f] = (x[f] * l - P[f]) * i);
                    var h =
                            o *
                            r *
                            (1 +
                                F[0] *
                                    (1 +
                                        F[1] *
                                            (1 +
                                                F[2] *
                                                    (1 +
                                                        F[3] *
                                                            (1 +
                                                                F[4] *
                                                                    (1 +
                                                                        F[5] *
                                                                            (1 +
                                                                                F[6] *
                                                                                    (1 +
                                                                                        F[7])))))))),
                        d =
                            u *
                            (1 +
                                D[0] *
                                    (1 +
                                        D[1] *
                                            (1 +
                                                D[2] *
                                                    (1 +
                                                        D[3] *
                                                            (1 +
                                                                D[4] *
                                                                    (1 +
                                                                        D[5] *
                                                                            (1 +
                                                                                D[6] *
                                                                                    (1 +
                                                                                        D[7])))))))),
                        E = s.multiplyByScalar(e, d, N);
                    return s.multiplyByScalar(t, h, n), s.add(E, n, n);
                }),
                (s.fastSquad = function(e, t, r, n, o, a) {
                    var i = s.fastSlerp(e, t, o, I),
                        u = s.fastSlerp(r, n, o, M);
                    return s.fastSlerp(i, u, 2 * o * (1 - o), a);
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
        ], function(e, t, r, n, o, a, i, u, s, c, l, f, h, d, E, m, p, y, _, R, T) {
            "use strict";
            var A = {},
                C = {
                    up: { south: "east", north: "west", west: "south", east: "north" },
                    down: { south: "west", north: "east", west: "north", east: "south" },
                    south: { up: "west", down: "east", west: "down", east: "up" },
                    north: { up: "east", down: "west", west: "up", east: "down" },
                    west: { up: "north", down: "south", north: "down", south: "up" },
                    east: { up: "south", down: "north", north: "up", south: "down" }
                },
                S = {
                    north: [-1, 0, 0],
                    east: [0, 1, 0],
                    up: [0, 0, 1],
                    south: [1, 0, 0],
                    west: [0, -1, 0],
                    down: [0, 0, -1]
                },
                g = {},
                v = {
                    east: new r(),
                    north: new r(),
                    up: new r(),
                    west: new r(),
                    south: new r(),
                    down: new r()
                },
                O = new r(),
                I = new r(),
                M = new r();
            (A.localFrameToFixedFrameGenerator = function(e, t) {
                if (!C.hasOwnProperty(e) || !C[e].hasOwnProperty(t))
                    throw new s(
                        "firstAxis and secondAxis must be east, north, up, west, south or down."
                    );
                var n,
                    o = C[e][t],
                    a = e + t;
                return (
                    u(g[a])
                        ? (n = g[a])
                        : ((n = function(n, a, s) {
                              if (
                                  (u(s) || (s = new _()),
                                  p.equalsEpsilon(n.x, 0, p.EPSILON14) &&
                                      p.equalsEpsilon(n.y, 0, p.EPSILON14))
                              ) {
                                  var c = p.sign(n.z);
                                  r.unpack(S[e], 0, O),
                                      "east" !== e && "west" !== e && r.multiplyByScalar(O, c, O),
                                      r.unpack(S[t], 0, I),
                                      "east" !== t && "west" !== t && r.multiplyByScalar(I, c, I),
                                      r.unpack(S[o], 0, M),
                                      "east" !== o && "west" !== o && r.multiplyByScalar(M, c, M);
                              } else {
                                  (a = i(a, f.WGS84)), a.geodeticSurfaceNormal(n, v.up);
                                  var l = v.up,
                                      h = v.east;
                                  (h.x = -n.y),
                                      (h.y = n.x),
                                      (h.z = 0),
                                      r.normalize(h, v.east),
                                      r.cross(l, h, v.north),
                                      r.multiplyByScalar(v.up, -1, v.down),
                                      r.multiplyByScalar(v.east, -1, v.west),
                                      r.multiplyByScalar(v.north, -1, v.south),
                                      (O = v[e]),
                                      (I = v[t]),
                                      (M = v[o]);
                              }
                              return (
                                  (s[0] = O.x),
                                  (s[1] = O.y),
                                  (s[2] = O.z),
                                  (s[3] = 0),
                                  (s[4] = I.x),
                                  (s[5] = I.y),
                                  (s[6] = I.z),
                                  (s[7] = 0),
                                  (s[8] = M.x),
                                  (s[9] = M.y),
                                  (s[10] = M.z),
                                  (s[11] = 0),
                                  (s[12] = n.x),
                                  (s[13] = n.y),
                                  (s[14] = n.z),
                                  (s[15] = 1),
                                  s
                              );
                          }),
                          (g[a] = n)),
                    n
                );
            }),
                (A.eastNorthUpToFixedFrame = A.localFrameToFixedFrameGenerator("east", "north")),
                (A.northEastDownToFixedFrame = A.localFrameToFixedFrameGenerator("north", "east")),
                (A.northUpEastToFixedFrame = A.localFrameToFixedFrameGenerator("north", "up")),
                (A.northWestUpToFixedFrame = A.localFrameToFixedFrameGenerator("north", "west"));
            var N = new R(),
                w = new r(1, 1, 1),
                x = new _();
            A.headingPitchRollToFixedFrame = function(e, t, n, o, a) {
                o = i(o, A.eastNorthUpToFixedFrame);
                var u = R.fromHeadingPitchRoll(t, N),
                    s = _.fromTranslationQuaternionRotationScale(r.ZERO, u, w, x);
                return (a = o(e, n, a)), _.multiply(a, s, a);
            };
            var P = new _(),
                F = new y();
            A.headingPitchRollQuaternion = function(e, t, r, n, o) {
                var a = A.headingPitchRollToFixedFrame(e, t, r, n, P),
                    i = _.getRotation(a, F);
                return R.fromRotationMatrix(i, o);
            };
            var D = new r(1, 1, 1),
                U = new r(),
                L = new _(),
                b = new _(),
                B = new y(),
                z = new R();
            A.fixedFrameToHeadingPitchRoll = function(e, t, n, o) {
                (t = i(t, f.WGS84)), (n = i(n, A.eastNorthUpToFixedFrame)), u(o) || (o = new h());
                var a = _.getTranslation(e, U);
                if (r.equals(a, r.ZERO)) return (o.heading = 0), (o.pitch = 0), (o.roll = 0), o;
                var s = _.inverseTransformation(n(a, t, L), L),
                    c = _.setScale(e, D, b);
                (c = _.setTranslation(c, r.ZERO, c)), (s = _.multiply(s, c, s));
                var l = R.fromRotationMatrix(_.getRotation(s, B), z);
                return (l = R.normalize(l, l)), h.fromQuaternion(l, o);
            };
            var q = p.TWO_PI / 86400,
                G = new m();
            (A.computeTemeToPseudoFixedMatrix = function(e, t) {
                G = m.addSeconds(e, -m.computeTaiMinusUtc(e), G);
                var r,
                    n = G.dayNumber,
                    o = G.secondsOfDay,
                    a = n - 2451545;
                r =
                    o >= 43200
                        ? (a + 0.5) / T.DAYS_PER_JULIAN_CENTURY
                        : (a - 0.5) / T.DAYS_PER_JULIAN_CENTURY;
                var i = 24110.54841 + r * (8640184.812866 + r * (0.093104 + -62e-7 * r)),
                    s = (i * q) % p.TWO_PI,
                    c = 72921158553e-15 + 1.1772758384668e-19 * (n - 2451545.5),
                    l = (o + 0.5 * T.SECONDS_PER_DAY) % T.SECONDS_PER_DAY,
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
                    : new y(h, d, 0, -d, h, 0, 0, 0, 1);
            }),
                (A.iau2006XysData = new d()),
                (A.earthOrientationParameters = c.NONE);
            (A.preloadIcrfFixed = function(t) {
                var r = t.start.dayNumber,
                    n = t.start.secondsOfDay + 32.184,
                    o = t.stop.dayNumber,
                    a = t.stop.secondsOfDay + 32.184,
                    i = A.iau2006XysData.preload(r, n, o, a),
                    u = A.earthOrientationParameters.getPromiseToLoad();
                return e.all([i, u]);
            }),
                (A.computeIcrfToFixedMatrix = function(e, t) {
                    u(t) || (t = new y());
                    var r = A.computeFixedToIcrfMatrix(e, t);
                    if (u(r)) return y.transpose(r, t);
                });
            var W = new E(0, 0, 0),
                V = new l(0, 0, 0, 0, 0, 0),
                X = new y(),
                H = new y();
            A.computeFixedToIcrfMatrix = function(e, t) {
                u(t) || (t = new y());
                var r = A.earthOrientationParameters.compute(e, V);
                if (u(r)) {
                    var n = e.dayNumber,
                        o = e.secondsOfDay + 32.184,
                        a = A.iau2006XysData.computeXysRadians(n, o, W);
                    if (u(a)) {
                        var i = a.x + r.xPoleOffset,
                            s = a.y + r.yPoleOffset,
                            c = 1 / (1 + Math.sqrt(1 - i * i - s * s)),
                            l = X;
                        (l[0] = 1 - c * i * i),
                            (l[3] = -c * i * s),
                            (l[6] = i),
                            (l[1] = -c * i * s),
                            (l[4] = 1 - c * s * s),
                            (l[7] = s),
                            (l[2] = -i),
                            (l[5] = -s),
                            (l[8] = 1 - c * (i * i + s * s));
                        var f = y.fromRotationZ(-a.s, H),
                            h = y.multiply(l, f, X),
                            d = e.dayNumber,
                            E = e.secondsOfDay - m.computeTaiMinusUtc(e) + r.ut1MinusUtc,
                            _ = d - 2451545,
                            R = E / T.SECONDS_PER_DAY,
                            C = 0.779057273264 + R + 0.00273781191135448 * (_ + R);
                        C = (C % 1) * p.TWO_PI;
                        var S = y.fromRotationZ(C, H),
                            g = y.multiply(h, S, X),
                            v = Math.cos(r.xPoleWander),
                            O = Math.cos(r.yPoleWander),
                            I = Math.sin(r.xPoleWander),
                            M = Math.sin(r.yPoleWander),
                            N = n - 2451545 + o / T.SECONDS_PER_DAY;
                        N /= 36525;
                        var w = (-47e-6 * N * p.RADIANS_PER_DEGREE) / 3600,
                            x = Math.cos(w),
                            P = Math.sin(w),
                            F = H;
                        return (
                            (F[0] = v * x),
                            (F[1] = v * P),
                            (F[2] = I),
                            (F[3] = -O * P + M * I * x),
                            (F[4] = O * x + M * I * P),
                            (F[5] = -M * v),
                            (F[6] = -M * P - O * I * x),
                            (F[7] = M * x - O * I * P),
                            (F[8] = O * v),
                            y.multiply(g, F, t)
                        );
                    }
                }
            };
            var k = new n();
            (A.pointToWindowCoordinates = function(e, t, r, n) {
                return (n = A.pointToGLWindowCoordinates(e, t, r, n)), (n.y = 2 * t[5] - n.y), n;
            }),
                (A.pointToGLWindowCoordinates = function(e, r, o, a) {
                    u(a) || (a = new t());
                    var i = k;
                    return (
                        _.multiplyByVector(e, n.fromElements(o.x, o.y, o.z, 1, i), i),
                        n.multiplyByScalar(i, 1 / i.w, i),
                        _.multiplyByVector(r, i, i),
                        t.fromCartesian4(i, a)
                    );
                });
            var Y = new r(),
                j = new r(),
                K = new r();
            A.rotationMatrixFromPositionVelocity = function(e, t, n, o) {
                var a = i(n, f.WGS84).geodeticSurfaceNormal(e, Y),
                    s = r.cross(t, a, j);
                r.equalsEpsilon(s, r.ZERO, p.EPSILON6) && (s = r.clone(r.UNIT_X, s));
                var c = r.cross(s, t, K);
                return (
                    r.normalize(c, c),
                    r.cross(t, c, s),
                    r.negate(s, s),
                    r.normalize(s, s),
                    u(o) || (o = new y()),
                    (o[0] = t.x),
                    (o[1] = t.y),
                    (o[2] = t.z),
                    (o[3] = s.x),
                    (o[4] = s.y),
                    (o[5] = s.z),
                    (o[6] = c.x),
                    (o[7] = c.y),
                    (o[8] = c.z),
                    o
                );
            };
            var Z = new _(0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1),
                Q = new o(),
                J = new r(),
                $ = new r(),
                ee = new y(),
                te = new _(),
                re = new _();
            return (
                (A.basisTo2D = function(e, t, n) {
                    var o = _.getTranslation(t, $),
                        a = e.ellipsoid,
                        i = a.cartesianToCartographic(o, Q),
                        u = e.project(i, J);
                    r.fromElements(u.z, u.x, u.y, u);
                    var s = A.eastNorthUpToFixedFrame(o, a, te),
                        c = _.inverseTransformation(s, re),
                        l = _.getRotation(t, ee),
                        f = _.multiplyByMatrix3(c, l, n);
                    return _.multiply(Z, f, n), _.setTranslation(n, u, n), n;
                }),
                (A.wgs84To2DModelMatrix = function(e, t, n) {
                    var o = e.ellipsoid,
                        a = A.eastNorthUpToFixedFrame(t, o, te),
                        i = _.inverseTransformation(a, re),
                        u = o.cartesianToCartographic(t, Q),
                        s = e.project(u, J);
                    r.fromElements(s.z, s.x, s.y, s);
                    var c = _.fromTranslation(s, te);
                    return _.multiply(Z, i, n), _.multiply(c, n, n), n;
                }),
                A
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
        ], function(e, t, r, n, o, a, i, u, s, c, l, f, h, d, E) {
            "use strict";
            function m(e, t) {
                (t = a(t, c.WGS84)), (e = t.scaleToGeodeticSurface(e));
                var n = E.eastNorthUpToFixedFrame(e, t);
                (this._ellipsoid = t),
                    (this._origin = e),
                    (this._xAxis = r.fromCartesian4(f.getColumn(n, 0, p))),
                    (this._yAxis = r.fromCartesian4(f.getColumn(n, 1, p)));
                var o = r.fromCartesian4(f.getColumn(n, 2, p));
                this._plane = h.fromPointNormal(e, o);
            }
            var p = new n();
            u(m.prototype, {
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
            var y = new e();
            m.fromPoints = function(t, r) {
                return new m(e.fromPoints(t, y).center, r);
            };
            var _ = new d(),
                R = new r();
            (m.prototype.projectPointOntoPlane = function(e, n) {
                var o = _;
                (o.origin = e), r.normalize(e, o.direction);
                var a = l.rayPlane(o, this._plane, R);
                if (
                    (i(a) ||
                        (r.negate(o.direction, o.direction), (a = l.rayPlane(o, this._plane, R))),
                    i(a))
                ) {
                    var u = r.subtract(a, this._origin, a),
                        s = r.dot(this._xAxis, u),
                        c = r.dot(this._yAxis, u);
                    return i(n) ? ((n.x = s), (n.y = c), n) : new t(s, c);
                }
            }),
                (m.prototype.projectPointsOntoPlane = function(e, t) {
                    i(t) || (t = []);
                    for (var r = 0, n = e.length, o = 0; o < n; o++) {
                        var a = this.projectPointOntoPlane(e[o], t[r]);
                        i(a) && ((t[r] = a), r++);
                    }
                    return (t.length = r), t;
                }),
                (m.prototype.projectPointToNearestOnPlane = function(e, n) {
                    i(n) || (n = new t());
                    var o = _;
                    (o.origin = e), r.clone(this._plane.normal, o.direction);
                    var a = l.rayPlane(o, this._plane, R);
                    i(a) ||
                        (r.negate(o.direction, o.direction), (a = l.rayPlane(o, this._plane, R)));
                    var u = r.subtract(a, this._origin, a),
                        s = r.dot(this._xAxis, u),
                        c = r.dot(this._yAxis, u);
                    return (n.x = s), (n.y = c), n;
                }),
                (m.prototype.projectPointsToNearestOnPlane = function(e, t) {
                    i(t) || (t = []);
                    var r = e.length;
                    t.length = r;
                    for (var n = 0; n < r; n++)
                        t[n] = this.projectPointToNearestOnPlane(e[n], t[n]);
                    return t;
                });
            var T = new r();
            return (
                (m.prototype.projectPointOntoEllipsoid = function(e, t) {
                    i(t) || (t = new r());
                    var n = this._ellipsoid,
                        o = this._origin,
                        a = this._xAxis,
                        u = this._yAxis,
                        s = T;
                    return (
                        r.multiplyByScalar(a, e.x, s),
                        (t = r.add(o, s, t)),
                        r.multiplyByScalar(u, e.y, s),
                        r.add(t, s, t),
                        n.scaleToGeocentricSurface(t, t),
                        t
                    );
                }),
                (m.prototype.projectPointsOntoEllipsoid = function(e, t) {
                    var r = e.length;
                    i(t) ? (t.length = r) : (t = new Array(r));
                    for (var n = 0; n < r; ++n) t[n] = this.projectPointOntoEllipsoid(e[n], t[n]);
                    return t;
                }),
                m
            );
        }),
        define("Core/OrientedBoundingBox", [
            "./BoundingSphere",
            "./Cartesian2",
            "./Cartesian3",
            "./Cartographic",
            "./Check",
            "./defaultValue",
            "./defined",
            "./DeveloperError",
            "./Ellipsoid",
            "./EllipsoidTangentPlane",
            "./Intersect",
            "./Interval",
            "./Math",
            "./Matrix3",
            "./Plane",
            "./Rectangle"
        ], function(e, t, r, n, o, a, i, u, s, c, l, f, h, d, E, m) {
            "use strict";
            function p(e, t) {
                (this.center = r.clone(a(e, r.ZERO))), (this.halfAxes = d.clone(a(t, d.ZERO)));
            }
            function y(e, t, n, o, a, u, s, c) {
                i(c) || (c = new p());
                var l = c.halfAxes;
                d.setColumn(l, 0, e.xAxis, l),
                    d.setColumn(l, 1, e.yAxis, l),
                    d.setColumn(l, 2, e.zAxis, l);
                var f = O;
                (f.x = (t + n) / 2), (f.y = (o + a) / 2), (f.z = (u + s) / 2);
                var h = I;
                (h.x = (n - t) / 2), (h.y = (a - o) / 2), (h.z = (s - u) / 2);
                var E = c.center;
                return (
                    (f = d.multiplyByVector(l, f, f)),
                    r.add(e.origin, f, E),
                    d.multiplyByScale(l, h, l),
                    c
                );
            }
            (p.packedLength = r.packedLength + d.packedLength),
                (p.pack = function(e, t, n) {
                    return (
                        (n = a(n, 0)),
                        r.pack(e.center, t, n),
                        d.pack(e.halfAxes, t, n + r.packedLength),
                        t
                    );
                }),
                (p.unpack = function(e, t, n) {
                    return (
                        (t = a(t, 0)),
                        i(n) || (n = new p()),
                        r.unpack(e, t, n.center),
                        d.unpack(e, t + r.packedLength, n.halfAxes),
                        n
                    );
                });
            var _ = new r(),
                R = new r(),
                T = new r(),
                A = new r(),
                C = new r(),
                S = new r(),
                g = new d(),
                v = { unitary: new d(), diagonal: new d() };
            p.fromPoints = function(e, t) {
                if ((i(t) || (t = new p()), !i(e) || 0 === e.length))
                    return (t.halfAxes = d.ZERO), (t.center = r.ZERO), t;
                var n,
                    o = e.length,
                    a = r.clone(e[0], _);
                for (n = 1; n < o; n++) r.add(a, e[n], a);
                var u = 1 / o;
                r.multiplyByScalar(a, u, a);
                var s,
                    c = 0,
                    l = 0,
                    f = 0,
                    h = 0,
                    E = 0,
                    m = 0;
                for (n = 0; n < o; n++)
                    (s = r.subtract(e[n], a, R)),
                        (c += s.x * s.x),
                        (l += s.x * s.y),
                        (f += s.x * s.z),
                        (h += s.y * s.y),
                        (E += s.y * s.z),
                        (m += s.z * s.z);
                (c *= u), (l *= u), (f *= u), (h *= u), (E *= u), (m *= u);
                var y = g;
                (y[0] = c),
                    (y[1] = l),
                    (y[2] = f),
                    (y[3] = l),
                    (y[4] = h),
                    (y[5] = E),
                    (y[6] = f),
                    (y[7] = E),
                    (y[8] = m);
                var O = d.computeEigenDecomposition(y, v),
                    I = d.clone(O.unitary, t.halfAxes),
                    M = d.getColumn(I, 0, A),
                    N = d.getColumn(I, 1, C),
                    w = d.getColumn(I, 2, S),
                    x = -Number.MAX_VALUE,
                    P = -Number.MAX_VALUE,
                    F = -Number.MAX_VALUE,
                    D = Number.MAX_VALUE,
                    U = Number.MAX_VALUE,
                    L = Number.MAX_VALUE;
                for (n = 0; n < o; n++)
                    (s = e[n]),
                        (x = Math.max(r.dot(M, s), x)),
                        (P = Math.max(r.dot(N, s), P)),
                        (F = Math.max(r.dot(w, s), F)),
                        (D = Math.min(r.dot(M, s), D)),
                        (U = Math.min(r.dot(N, s), U)),
                        (L = Math.min(r.dot(w, s), L));
                (M = r.multiplyByScalar(M, 0.5 * (D + x), M)),
                    (N = r.multiplyByScalar(N, 0.5 * (U + P), N)),
                    (w = r.multiplyByScalar(w, 0.5 * (L + F), w));
                var b = r.add(M, N, t.center);
                r.add(b, w, b);
                var B = T;
                return (
                    (B.x = x - D),
                    (B.y = P - U),
                    (B.z = F - L),
                    r.multiplyByScalar(B, 0.5, B),
                    d.multiplyByScale(t.halfAxes, B, t.halfAxes),
                    t
                );
            };
            var O = new r(),
                I = new r(),
                M = new n(),
                N = new r(),
                w = [new n(), new n(), new n(), new n(), new n(), new n(), new n(), new n()],
                x = [new r(), new r(), new r(), new r(), new r(), new r(), new r(), new r()],
                P = [new t(), new t(), new t(), new t(), new t(), new t(), new t(), new t()];
            (p.fromRectangle = function(e, t, r, n, o) {
                (t = a(t, 0)), (r = a(r, 0)), (n = a(n, s.WGS84));
                var i = m.center(e, M),
                    u = n.cartographicToCartesian(i, N),
                    l = new c(u, n),
                    f = l.plane,
                    h = w[0],
                    d = w[1],
                    p = w[2],
                    _ = w[3],
                    R = w[4],
                    T = w[5],
                    A = w[6],
                    C = w[7],
                    S = i.longitude,
                    g = e.south < 0 && e.north > 0 ? 0 : i.latitude;
                (A.latitude = T.latitude = R.latitude = e.south),
                    (C.latitude = _.latitude = g),
                    (h.latitude = d.latitude = p.latitude = e.north),
                    (A.longitude = C.longitude = h.longitude = e.west),
                    (T.longitude = d.longitude = S),
                    (R.longitude = _.longitude = p.longitude = e.east),
                    (p.height = d.height = h.height = C.height = A.height = T.height = R.height = _.height = r),
                    n.cartographicArrayToCartesianArray(w, x),
                    l.projectPointsToNearestOnPlane(x, P);
                var v = Math.min(P[6].x, P[7].x, P[0].x),
                    O = Math.max(P[2].x, P[3].x, P[4].x),
                    I = Math.min(P[4].y, P[5].y, P[6].y),
                    F = Math.max(P[0].y, P[1].y, P[2].y);
                return (
                    (p.height = h.height = R.height = A.height = t),
                    n.cartographicArrayToCartesianArray(w, x),
                    y(
                        l,
                        v,
                        O,
                        I,
                        F,
                        Math.min(
                            E.getPointDistance(f, x[0]),
                            E.getPointDistance(f, x[2]),
                            E.getPointDistance(f, x[4]),
                            E.getPointDistance(f, x[6])
                        ),
                        r,
                        o
                    )
                );
            }),
                (p.clone = function(e, t) {
                    if (i(e))
                        return i(t)
                            ? (r.clone(e.center, t.center), d.clone(e.halfAxes, t.halfAxes), t)
                            : new p(e.center, e.halfAxes);
                }),
                (p.intersectPlane = function(e, t) {
                    var n = e.center,
                        o = t.normal,
                        a = e.halfAxes,
                        i = o.x,
                        u = o.y,
                        s = o.z,
                        c =
                            Math.abs(
                                i * a[d.COLUMN0ROW0] + u * a[d.COLUMN0ROW1] + s * a[d.COLUMN0ROW2]
                            ) +
                            Math.abs(
                                i * a[d.COLUMN1ROW0] + u * a[d.COLUMN1ROW1] + s * a[d.COLUMN1ROW2]
                            ) +
                            Math.abs(
                                i * a[d.COLUMN2ROW0] + u * a[d.COLUMN2ROW1] + s * a[d.COLUMN2ROW2]
                            ),
                        f = r.dot(o, n) + t.distance;
                    return f <= -c ? l.OUTSIDE : f >= c ? l.INSIDE : l.INTERSECTING;
                });
            var F = new r(),
                D = new r(),
                U = new r(),
                L = new r();
            p.distanceSquaredTo = function(e, t) {
                var n = r.subtract(t, e.center, O),
                    o = e.halfAxes,
                    a = d.getColumn(o, 0, F),
                    i = d.getColumn(o, 1, D),
                    u = d.getColumn(o, 2, U),
                    s = r.magnitude(a),
                    c = r.magnitude(i),
                    l = r.magnitude(u);
                r.normalize(a, a), r.normalize(i, i), r.normalize(u, u);
                var f = L;
                (f.x = r.dot(n, a)), (f.y = r.dot(n, i)), (f.z = r.dot(n, u));
                var h,
                    E = 0;
                return (
                    f.x < -s
                        ? ((h = f.x + s), (E += h * h))
                        : f.x > s && ((h = f.x - s), (E += h * h)),
                    f.y < -c
                        ? ((h = f.y + c), (E += h * h))
                        : f.y > c && ((h = f.y - c), (E += h * h)),
                    f.z < -l
                        ? ((h = f.z + l), (E += h * h))
                        : f.z > l && ((h = f.z - l), (E += h * h)),
                    E
                );
            };
            var b = new r(),
                B = new r();
            p.computePlaneDistances = function(e, t, n, o) {
                i(o) || (o = new f());
                var a = Number.POSITIVE_INFINITY,
                    u = Number.NEGATIVE_INFINITY,
                    s = e.center,
                    c = e.halfAxes,
                    l = d.getColumn(c, 0, F),
                    h = d.getColumn(c, 1, D),
                    E = d.getColumn(c, 2, U),
                    m = r.add(l, h, b);
                r.add(m, E, m), r.add(m, s, m);
                var p = r.subtract(m, t, B),
                    y = r.dot(n, p);
                return (
                    (a = Math.min(y, a)),
                    (u = Math.max(y, u)),
                    r.add(s, l, m),
                    r.add(m, h, m),
                    r.subtract(m, E, m),
                    r.subtract(m, t, p),
                    (y = r.dot(n, p)),
                    (a = Math.min(y, a)),
                    (u = Math.max(y, u)),
                    r.add(s, l, m),
                    r.subtract(m, h, m),
                    r.add(m, E, m),
                    r.subtract(m, t, p),
                    (y = r.dot(n, p)),
                    (a = Math.min(y, a)),
                    (u = Math.max(y, u)),
                    r.add(s, l, m),
                    r.subtract(m, h, m),
                    r.subtract(m, E, m),
                    r.subtract(m, t, p),
                    (y = r.dot(n, p)),
                    (a = Math.min(y, a)),
                    (u = Math.max(y, u)),
                    r.subtract(s, l, m),
                    r.add(m, h, m),
                    r.add(m, E, m),
                    r.subtract(m, t, p),
                    (y = r.dot(n, p)),
                    (a = Math.min(y, a)),
                    (u = Math.max(y, u)),
                    r.subtract(s, l, m),
                    r.add(m, h, m),
                    r.subtract(m, E, m),
                    r.subtract(m, t, p),
                    (y = r.dot(n, p)),
                    (a = Math.min(y, a)),
                    (u = Math.max(y, u)),
                    r.subtract(s, l, m),
                    r.subtract(m, h, m),
                    r.add(m, E, m),
                    r.subtract(m, t, p),
                    (y = r.dot(n, p)),
                    (a = Math.min(y, a)),
                    (u = Math.max(y, u)),
                    r.subtract(s, l, m),
                    r.subtract(m, h, m),
                    r.subtract(m, E, m),
                    r.subtract(m, t, p),
                    (y = r.dot(n, p)),
                    (a = Math.min(y, a)),
                    (u = Math.max(y, u)),
                    (o.start = a),
                    (o.stop = u),
                    o
                );
            };
            var z = new e();
            return (
                (p.isOccluded = function(t, r) {
                    var n = e.fromOrientedBoundingBox(t, z);
                    return !r.isBoundingSphereVisible(n);
                }),
                (p.prototype.intersectPlane = function(e) {
                    return p.intersectPlane(this, e);
                }),
                (p.prototype.distanceSquaredTo = function(e) {
                    return p.distanceSquaredTo(this, e);
                }),
                (p.prototype.computePlaneDistances = function(e, t, r) {
                    return p.computePlaneDistances(this, e, t, r);
                }),
                (p.prototype.isOccluded = function(e) {
                    return p.isOccluded(this, e);
                }),
                (p.equals = function(e, t) {
                    return (
                        e === t ||
                        (i(e) &&
                            i(t) &&
                            r.equals(e.center, t.center) &&
                            d.equals(e.halfAxes, t.halfAxes))
                    );
                }),
                (p.prototype.clone = function(e) {
                    return p.clone(this, e);
                }),
                (p.prototype.equals = function(e) {
                    return p.equals(this, e);
                }),
                p
            );
        }),
        define("Core/formatError", ["./defined"], function(e) {
            "use strict";
            function t(t) {
                var r,
                    n = t.name,
                    o = t.message;
                r = e(n) && e(o) ? n + ": " + o : t.toString();
                var a = t.stack;
                return e(a) && (r += "\n" + a), r;
            }
            return t;
        }),
        define("Workers/createTaskProcessorWorker", [
            "../ThirdParty/when",
            "../Core/defaultValue",
            "../Core/defined",
            "../Core/formatError"
        ], function(e, t, r, n) {
            "use strict";
            function o(t, r, n) {
                try {
                    return t(r, n);
                } catch (t) {
                    return e.reject(t);
                }
            }
            function a(a) {
                var i;
                return function(u) {
                    var s = u.data,
                        c = [],
                        l = { id: s.id, result: void 0, error: void 0 };
                    return e(o(a, s.parameters, c))
                        .then(function(e) {
                            l.result = e;
                        })
                        .otherwise(function(e) {
                            e instanceof Error
                                ? (l.error = { name: e.name, message: e.message, stack: e.stack })
                                : (l.error = e);
                        })
                        .always(function() {
                            r(i) || (i = t(self.webkitPostMessage, self.postMessage)),
                                s.canTransferArrayBuffer || (c.length = 0);
                            try {
                                i(l, c);
                            } catch (e) {
                                (l.result = void 0),
                                    (l.error =
                                        "postMessage failed with error: " +
                                        n(e) +
                                        "\n  with responseMessage: " +
                                        JSON.stringify(l)),
                                    i(l);
                            }
                        });
                };
            }
            return a;
        }),
        define("Workers/createVectorTilePolygons", [
            "../Core/AttributeCompression",
            "../Core/Cartesian3",
            "../Core/Cartographic",
            "../Core/Color",
            "../Core/defined",
            "../Core/Ellipsoid",
            "../Core/IndexDatatype",
            "../Core/Math",
            "../Core/OrientedBoundingBox",
            "../Core/Rectangle",
            "./createTaskProcessorWorker"
        ], function(e, t, r, n, o, a, i, u, s, c, l) {
            "use strict";
            function f(e) {
                var r = new Float64Array(e),
                    n = 0;
                (_.indexBytesPerElement = r[n++]),
                    (_.min = r[n++]),
                    (_.max = r[n++]),
                    t.unpack(r, n, m),
                    (n += t.packedLength),
                    a.unpack(r, n, p),
                    (n += a.packedLength),
                    c.unpack(r, n, y);
            }
            function h(e) {
                for (var t = e.length, r = 0, o = 0; o < t; ++o)
                    r += n.packedLength + 3 + e[o].batchIds.length;
                return r;
            }
            function d(e, t, r) {
                var o = t.length,
                    a = 2 + o * s.packedLength + 1 + h(r),
                    i = new Float64Array(a),
                    u = 0;
                (i[u++] = e), (i[u++] = o);
                for (var c = 0; c < o; ++c) s.pack(t[c], i, u), (u += s.packedLength);
                var l = r.length;
                i[u++] = l;
                for (var f = 0; f < l; ++f) {
                    var d = r[f];
                    n.pack(d.color, i, u),
                        (u += n.packedLength),
                        (i[u++] = d.offset),
                        (i[u++] = d.count);
                    var E = d.batchIds,
                        m = E.length;
                    i[u++] = m;
                    for (var p = 0; p < m; ++p) i[u++] = E[p];
                }
                return i;
            }
            function E(a, c) {
                f(a.packedBuffer);
                var l;
                l =
                    2 === _.indexBytesPerElement
                        ? new Uint16Array(a.indices)
                        : new Uint32Array(a.indices);
                var h = new Uint16Array(a.positions),
                    E = new Uint32Array(a.counts),
                    I = new Uint32Array(a.indexCounts),
                    M = new Uint32Array(a.batchIds),
                    N = new Uint32Array(a.batchTableColors),
                    w = new Array(E.length),
                    x = m,
                    P = p,
                    F = y,
                    D = _.min,
                    U = _.max,
                    L = a.minimumHeights,
                    b = a.maximumHeights;
                o(L) && o(b) && ((L = new Float32Array(L)), (b = new Float32Array(b)));
                var B,
                    z,
                    q,
                    G = h.length / 2,
                    W = h.subarray(0, G),
                    V = h.subarray(G, 2 * G);
                e.zigZagDeltaDecode(W, V);
                var X = new Float32Array(3 * G);
                for (B = 0; B < G; ++B) {
                    var H = W[B],
                        k = V[B],
                        Y = u.lerp(F.west, F.east, H / R),
                        j = u.lerp(F.south, F.north, k / R),
                        K = r.fromRadians(Y, j, 0, v),
                        Z = P.cartographicToCartesian(K, T);
                    t.pack(Z, X, 3 * B);
                }
                var Q = E.length,
                    J = new Array(Q),
                    $ = new Array(Q),
                    ee = 0,
                    te = 0;
                for (B = 0; B < Q; ++B) (J[B] = ee), ($[B] = te), (ee += E[B]), (te += I[B]);
                var re = new Float32Array(3 * G * 2),
                    ne = new Uint16Array(2 * G),
                    oe = new Uint32Array($.length),
                    ae = new Uint32Array(I.length),
                    ie = [],
                    ue = {};
                for (B = 0; B < Q; ++B)
                    (q = N[B]),
                        o(ue[q])
                            ? ((ue[q].positionLength += E[B]),
                              (ue[q].indexLength += I[B]),
                              ue[q].batchIds.push(B))
                            : (ue[q] = {
                                  positionLength: E[B],
                                  indexLength: I[B],
                                  offset: 0,
                                  indexOffset: 0,
                                  batchIds: [B]
                              });
                var se,
                    ce = 0,
                    le = 0;
                for (q in ue)
                    if (ue.hasOwnProperty(q)) {
                        (se = ue[q]), (se.offset = ce), (se.indexOffset = le);
                        var fe = 2 * se.positionLength,
                            he = 2 * se.indexLength + 6 * se.positionLength;
                        (ce += fe), (le += he), (se.indexLength = he);
                    }
                var de = [];
                for (q in ue)
                    ue.hasOwnProperty(q) &&
                        ((se = ue[q]),
                        de.push({
                            color: n.fromRgba(parseInt(q)),
                            offset: se.indexOffset,
                            count: se.indexLength,
                            batchIds: se.batchIds
                        }));
                for (B = 0; B < Q; ++B) {
                    (q = N[B]), (se = ue[q]);
                    var Ee = se.offset,
                        me = 3 * Ee,
                        pe = Ee,
                        ye = J[B],
                        _e = E[B],
                        Re = M[B],
                        Te = D,
                        Ae = U;
                    o(L) && o(b) && ((Te = L[B]), (Ae = b[B]));
                    var Ce = Number.POSITIVE_INFINITY,
                        Se = Number.NEGATIVE_INFINITY,
                        ge = Number.POSITIVE_INFINITY,
                        ve = Number.NEGATIVE_INFINITY;
                    for (z = 0; z < _e; ++z) {
                        var Oe = t.unpack(X, 3 * ye + 3 * z, T);
                        P.scaleToGeodeticSurface(Oe, Oe);
                        var Ie = P.cartesianToCartographic(Oe, v),
                            Me = Ie.latitude,
                            Ne = Ie.longitude;
                        (Ce = Math.min(Me, Ce)),
                            (Se = Math.max(Me, Se)),
                            (ge = Math.min(Ne, ge)),
                            (ve = Math.max(Ne, ve));
                        var we = P.geodeticSurfaceNormal(Oe, A),
                            xe = t.multiplyByScalar(we, Te, C),
                            Pe = t.add(Oe, xe, S);
                        xe = t.multiplyByScalar(we, Ae, xe);
                        var Fe = t.add(Oe, xe, g);
                        t.subtract(Fe, x, Fe),
                            t.subtract(Pe, x, Pe),
                            t.pack(Fe, re, me),
                            t.pack(Pe, re, me + 3),
                            (ne[pe] = Re),
                            (ne[pe + 1] = Re),
                            (me += 6),
                            (pe += 2);
                    }
                    (F = O),
                        (F.west = ge),
                        (F.east = ve),
                        (F.south = Ce),
                        (F.north = Se),
                        (w[B] = s.fromRectangle(F, D, U, P));
                    var De = se.indexOffset,
                        Ue = $[B],
                        Le = I[B];
                    for (oe[B] = De, z = 0; z < Le; z += 3) {
                        var be = l[Ue + z] - ye,
                            Be = l[Ue + z + 1] - ye,
                            ze = l[Ue + z + 2] - ye;
                        (ie[De++] = 2 * be + Ee),
                            (ie[De++] = 2 * Be + Ee),
                            (ie[De++] = 2 * ze + Ee),
                            (ie[De++] = 2 * ze + 1 + Ee),
                            (ie[De++] = 2 * Be + 1 + Ee),
                            (ie[De++] = 2 * be + 1 + Ee);
                    }
                    for (z = 0; z < _e; ++z) {
                        var qe = z,
                            Ge = (z + 1) % _e;
                        (ie[De++] = 2 * qe + 1 + Ee),
                            (ie[De++] = 2 * Ge + Ee),
                            (ie[De++] = 2 * qe + Ee),
                            (ie[De++] = 2 * qe + 1 + Ee),
                            (ie[De++] = 2 * Ge + 1 + Ee),
                            (ie[De++] = 2 * Ge + Ee);
                    }
                    (se.offset += 2 * _e), (se.indexOffset = De), (ae[B] = De - oe[B]);
                }
                ie = i.createTypedArray(re.length / 3, ie);
                for (var We = de.length, Ve = 0; Ve < We; ++Ve) {
                    for (var Xe = de[Ve].batchIds, He = 0, ke = Xe.length, Ye = 0; Ye < ke; ++Ye)
                        He += ae[Xe[Ye]];
                    de[Ve].count = He;
                }
                var je = 2 === ie.BYTES_PER_ELEMENT ? i.UNSIGNED_SHORT : i.UNSIGNED_INT,
                    Ke = d(je, w, de);
                return (
                    c.push(re.buffer, ie.buffer, oe.buffer, ae.buffer, ne.buffer, Ke.buffer),
                    {
                        positions: re.buffer,
                        indices: ie.buffer,
                        indexOffsets: oe.buffer,
                        indexCounts: ae.buffer,
                        batchIds: ne.buffer,
                        packedBuffer: Ke.buffer
                    }
                );
            }
            var m = new t(),
                p = new a(),
                y = new c(),
                _ = { min: void 0, max: void 0, indexBytesPerElement: void 0 },
                R = 32767,
                T = new t(),
                A = new t(),
                C = new t(),
                S = new t(),
                g = new t(),
                v = new r(),
                O = new c();
            return l(E);
        });
})();

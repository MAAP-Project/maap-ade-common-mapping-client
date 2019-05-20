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
                (o.typeOf.number.equals = function(e, r, n, i) {
                    if ((o.typeOf.number(e, n), o.typeOf.number(r, i), n !== i))
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
                (i.equalsEpsilon = function(e, t, n, o) {
                    o = r(o, n);
                    var i = Math.abs(e - t);
                    return i <= o || i <= n * Math.max(Math.abs(e), Math.abs(t));
                });
            var a = [1];
            (i.factorial = function(e) {
                var t = a.length;
                if (e >= t) for (var r = a[t - 1], n = t; n <= e; n++) a.push(r * n);
                return a[e];
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
            var s = new e();
            return (
                (i.setRandomNumberSeed = function(t) {
                    s = new e(t);
                }),
                (i.nextRandomNumber = function() {
                    return s.random();
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
                        o = Math.abs(e);
                    (r = Math.abs(t)), (n = Math.max(o, r)), (r = Math.min(o, r));
                    var a = r / n;
                    return (
                        (o = i.fastApproximateAtan(a)),
                        (o = Math.abs(t) > Math.abs(e) ? i.PI_OVER_TWO - o : o),
                        (o = e < 0 ? i.PI - o : o),
                        (o = t < 0 ? -o : o)
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
        ], function(e, t, r, n, o, i) {
            "use strict";
            function a(e, r, n) {
                (this.x = t(e, 0)), (this.y = t(r, 0)), (this.z = t(n, 0));
            }
            (a.fromSpherical = function(e, n) {
                r(n) || (n = new a());
                var o = e.clock,
                    i = e.cone,
                    s = t(e.magnitude, 1),
                    u = s * Math.sin(i);
                return (n.x = u * Math.cos(o)), (n.y = u * Math.sin(o)), (n.z = s * Math.cos(i)), n;
            }),
                (a.fromElements = function(e, t, n, o) {
                    return r(o) ? ((o.x = e), (o.y = t), (o.z = n), o) : new a(e, t, n);
                }),
                (a.clone = function(e, t) {
                    if (r(e))
                        return r(t)
                            ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), t)
                            : new a(e.x, e.y, e.z);
                }),
                (a.fromCartesian4 = a.clone),
                (a.packedLength = 3),
                (a.pack = function(e, r, n) {
                    return (n = t(n, 0)), (r[n++] = e.x), (r[n++] = e.y), (r[n] = e.z), r;
                }),
                (a.unpack = function(e, n, o) {
                    return (
                        (n = t(n, 0)),
                        r(o) || (o = new a()),
                        (o.x = e[n++]),
                        (o.y = e[n++]),
                        (o.z = e[n]),
                        o
                    );
                }),
                (a.packArray = function(e, t) {
                    var n = e.length;
                    r(t) ? (t.length = 3 * n) : (t = new Array(3 * n));
                    for (var o = 0; o < n; ++o) a.pack(e[o], t, 3 * o);
                    return t;
                }),
                (a.unpackArray = function(e, t) {
                    var n = e.length;
                    r(t) ? (t.length = n / 3) : (t = new Array(n / 3));
                    for (var o = 0; o < n; o += 3) {
                        var i = o / 3;
                        t[i] = a.unpack(e, o, t[i]);
                    }
                    return t;
                }),
                (a.fromArray = a.unpack),
                (a.maximumComponent = function(e) {
                    return Math.max(e.x, e.y, e.z);
                }),
                (a.minimumComponent = function(e) {
                    return Math.min(e.x, e.y, e.z);
                }),
                (a.minimumByComponent = function(e, t, r) {
                    return (
                        (r.x = Math.min(e.x, t.x)),
                        (r.y = Math.min(e.y, t.y)),
                        (r.z = Math.min(e.z, t.z)),
                        r
                    );
                }),
                (a.maximumByComponent = function(e, t, r) {
                    return (
                        (r.x = Math.max(e.x, t.x)),
                        (r.y = Math.max(e.y, t.y)),
                        (r.z = Math.max(e.z, t.z)),
                        r
                    );
                }),
                (a.magnitudeSquared = function(e) {
                    return e.x * e.x + e.y * e.y + e.z * e.z;
                }),
                (a.magnitude = function(e) {
                    return Math.sqrt(a.magnitudeSquared(e));
                });
            var s = new a();
            (a.distance = function(e, t) {
                return a.subtract(e, t, s), a.magnitude(s);
            }),
                (a.distanceSquared = function(e, t) {
                    return a.subtract(e, t, s), a.magnitudeSquared(s);
                }),
                (a.normalize = function(e, t) {
                    var r = a.magnitude(e);
                    return (t.x = e.x / r), (t.y = e.y / r), (t.z = e.z / r), t;
                }),
                (a.dot = function(e, t) {
                    return e.x * t.x + e.y * t.y + e.z * t.z;
                }),
                (a.multiplyComponents = function(e, t, r) {
                    return (r.x = e.x * t.x), (r.y = e.y * t.y), (r.z = e.z * t.z), r;
                }),
                (a.divideComponents = function(e, t, r) {
                    return (r.x = e.x / t.x), (r.y = e.y / t.y), (r.z = e.z / t.z), r;
                }),
                (a.add = function(e, t, r) {
                    return (r.x = e.x + t.x), (r.y = e.y + t.y), (r.z = e.z + t.z), r;
                }),
                (a.subtract = function(e, t, r) {
                    return (r.x = e.x - t.x), (r.y = e.y - t.y), (r.z = e.z - t.z), r;
                }),
                (a.multiplyByScalar = function(e, t, r) {
                    return (r.x = e.x * t), (r.y = e.y * t), (r.z = e.z * t), r;
                }),
                (a.divideByScalar = function(e, t, r) {
                    return (r.x = e.x / t), (r.y = e.y / t), (r.z = e.z / t), r;
                }),
                (a.negate = function(e, t) {
                    return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), t;
                }),
                (a.abs = function(e, t) {
                    return (t.x = Math.abs(e.x)), (t.y = Math.abs(e.y)), (t.z = Math.abs(e.z)), t;
                });
            var u = new a();
            a.lerp = function(e, t, r, n) {
                return (
                    a.multiplyByScalar(t, r, u),
                    (n = a.multiplyByScalar(e, 1 - r, n)),
                    a.add(u, n, n)
                );
            };
            var c = new a(),
                l = new a();
            a.angleBetween = function(e, t) {
                a.normalize(e, c), a.normalize(t, l);
                var r = a.dot(c, l),
                    n = a.magnitude(a.cross(c, l, c));
                return Math.atan2(n, r);
            };
            var f = new a();
            (a.mostOrthogonalAxis = function(e, t) {
                var r = a.normalize(e, f);
                return (
                    a.abs(r, r),
                    (t =
                        r.x <= r.y
                            ? r.x <= r.z
                                ? a.clone(a.UNIT_X, t)
                                : a.clone(a.UNIT_Z, t)
                            : r.y <= r.z
                            ? a.clone(a.UNIT_Y, t)
                            : a.clone(a.UNIT_Z, t))
                );
            }),
                (a.projectVector = function(e, t, r) {
                    var n = a.dot(e, t) / a.dot(t, t);
                    return a.multiplyByScalar(t, n, r);
                }),
                (a.equals = function(e, t) {
                    return e === t || (r(e) && r(t) && e.x === t.x && e.y === t.y && e.z === t.z);
                }),
                (a.equalsArray = function(e, t, r) {
                    return e.x === t[r] && e.y === t[r + 1] && e.z === t[r + 2];
                }),
                (a.equalsEpsilon = function(e, t, n, o) {
                    return (
                        e === t ||
                        (r(e) &&
                            r(t) &&
                            i.equalsEpsilon(e.x, t.x, n, o) &&
                            i.equalsEpsilon(e.y, t.y, n, o) &&
                            i.equalsEpsilon(e.z, t.z, n, o))
                    );
                }),
                (a.cross = function(e, t, r) {
                    var n = e.x,
                        o = e.y,
                        i = e.z,
                        a = t.x,
                        s = t.y,
                        u = t.z,
                        c = o * u - i * s,
                        l = i * a - n * u,
                        f = n * s - o * a;
                    return (r.x = c), (r.y = l), (r.z = f), r;
                }),
                (a.midpoint = function(e, t, r) {
                    return (
                        (r.x = 0.5 * (e.x + t.x)),
                        (r.y = 0.5 * (e.y + t.y)),
                        (r.z = 0.5 * (e.z + t.z)),
                        r
                    );
                }),
                (a.fromDegrees = function(e, t, r, n, o) {
                    return (e = i.toRadians(e)), (t = i.toRadians(t)), a.fromRadians(e, t, r, n, o);
                });
            var h = new a(),
                d = new a(),
                E = new a(40680631590769, 40680631590769, 40408299984661.445);
            return (
                (a.fromRadians = function(e, n, o, i, s) {
                    o = t(o, 0);
                    var u = r(i) ? i.radiiSquared : E,
                        c = Math.cos(n);
                    (h.x = c * Math.cos(e)),
                        (h.y = c * Math.sin(e)),
                        (h.z = Math.sin(n)),
                        (h = a.normalize(h, h)),
                        a.multiplyComponents(u, h, d);
                    var l = Math.sqrt(a.dot(h, d));
                    return (
                        (d = a.divideByScalar(d, l, d)),
                        (h = a.multiplyByScalar(h, o, h)),
                        r(s) || (s = new a()),
                        a.add(d, h, s)
                    );
                }),
                (a.fromDegreesArray = function(e, t, n) {
                    var o = e.length;
                    r(n) ? (n.length = o / 2) : (n = new Array(o / 2));
                    for (var i = 0; i < o; i += 2) {
                        var s = e[i],
                            u = e[i + 1],
                            c = i / 2;
                        n[c] = a.fromDegrees(s, u, 0, t, n[c]);
                    }
                    return n;
                }),
                (a.fromRadiansArray = function(e, t, n) {
                    var o = e.length;
                    r(n) ? (n.length = o / 2) : (n = new Array(o / 2));
                    for (var i = 0; i < o; i += 2) {
                        var s = e[i],
                            u = e[i + 1],
                            c = i / 2;
                        n[c] = a.fromRadians(s, u, 0, t, n[c]);
                    }
                    return n;
                }),
                (a.fromDegreesArrayHeights = function(e, t, n) {
                    var o = e.length;
                    r(n) ? (n.length = o / 3) : (n = new Array(o / 3));
                    for (var i = 0; i < o; i += 3) {
                        var s = e[i],
                            u = e[i + 1],
                            c = e[i + 2],
                            l = i / 3;
                        n[l] = a.fromDegrees(s, u, c, t, n[l]);
                    }
                    return n;
                }),
                (a.fromRadiansArrayHeights = function(e, t, n) {
                    var o = e.length;
                    r(n) ? (n.length = o / 3) : (n = new Array(o / 3));
                    for (var i = 0; i < o; i += 3) {
                        var s = e[i],
                            u = e[i + 1],
                            c = e[i + 2],
                            l = i / 3;
                        n[l] = a.fromRadians(s, u, c, t, n[l]);
                    }
                    return n;
                }),
                (a.ZERO = o(new a(0, 0, 0))),
                (a.UNIT_X = o(new a(1, 0, 0))),
                (a.UNIT_Y = o(new a(0, 1, 0))),
                (a.UNIT_Z = o(new a(0, 0, 1))),
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
                    return "(" + this.x + ", " + this.y + ", " + this.z + ")";
                }),
                a
            );
        }),
        define("Core/scaleToGeodeticSurface", [
            "./Cartesian3",
            "./defined",
            "./DeveloperError",
            "./Math"
        ], function(e, t, r, n) {
            "use strict";
            function o(r, o, s, u, c) {
                var l = r.x,
                    f = r.y,
                    h = r.z,
                    d = o.x,
                    E = o.y,
                    p = o.z,
                    m = l * l * d * d,
                    _ = f * f * E * E,
                    y = h * h * p * p,
                    R = m + _ + y,
                    T = Math.sqrt(1 / R),
                    A = e.multiplyByScalar(r, T, i);
                if (R < u) return isFinite(T) ? e.clone(A, c) : void 0;
                var S = s.x,
                    C = s.y,
                    g = s.z,
                    v = a;
                (v.x = A.x * S * 2), (v.y = A.y * C * 2), (v.z = A.z * g * 2);
                var N,
                    I,
                    O,
                    M,
                    w,
                    P,
                    D,
                    F,
                    U,
                    x,
                    L,
                    b = ((1 - T) * e.magnitude(r)) / (0.5 * e.magnitude(v)),
                    B = 0;
                do {
                    (b -= B),
                        (O = 1 / (1 + b * S)),
                        (M = 1 / (1 + b * C)),
                        (w = 1 / (1 + b * g)),
                        (P = O * O),
                        (D = M * M),
                        (F = w * w),
                        (U = P * O),
                        (x = D * M),
                        (L = F * w),
                        (N = m * P + _ * D + y * F - 1),
                        (I = m * U * S + _ * x * C + y * L * g);
                    B = N / (-2 * I);
                } while (Math.abs(N) > n.EPSILON12);
                return t(c)
                    ? ((c.x = l * O), (c.y = f * M), (c.z = h * w), c)
                    : new e(l * O, f * M, h * w);
            }
            var i = new e(),
                a = new e();
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
        ], function(e, t, r, n, o, i, a) {
            "use strict";
            function s(e, t, n) {
                (this.longitude = r(e, 0)), (this.latitude = r(t, 0)), (this.height = r(n, 0));
            }
            (s.fromRadians = function(e, t, o, i) {
                return (
                    (o = r(o, 0)),
                    n(i) ? ((i.longitude = e), (i.latitude = t), (i.height = o), i) : new s(e, t, o)
                );
            }),
                (s.fromDegrees = function(e, t, r, n) {
                    return (e = i.toRadians(e)), (t = i.toRadians(t)), s.fromRadians(e, t, r, n);
                });
            var u = new e(),
                c = new e(),
                l = new e(),
                f = new e(1 / 6378137, 1 / 6378137, 1 / 6356752.314245179),
                h = new e(1 / 40680631590769, 1 / 40680631590769, 1 / 40408299984661.445),
                d = i.EPSILON1;
            return (
                (s.fromCartesian = function(t, r, o) {
                    var E = n(r) ? r.oneOverRadii : f,
                        p = n(r) ? r.oneOverRadiiSquared : h,
                        m = n(r) ? r._centerToleranceSquared : d,
                        _ = a(t, E, p, m, c);
                    if (n(_)) {
                        var y = e.multiplyComponents(_, p, u);
                        y = e.normalize(y, y);
                        var R = e.subtract(t, _, l),
                            T = Math.atan2(y.y, y.x),
                            A = Math.asin(y.z),
                            S = i.sign(e.dot(R, t)) * e.magnitude(R);
                        return n(o)
                            ? ((o.longitude = T), (o.latitude = A), (o.height = S), o)
                            : new s(T, A, S);
                    }
                }),
                (s.toCartesian = function(t, r, n) {
                    return e.fromRadians(t.longitude, t.latitude, t.height, r, n);
                }),
                (s.clone = function(e, t) {
                    if (n(e))
                        return n(t)
                            ? ((t.longitude = e.longitude),
                              (t.latitude = e.latitude),
                              (t.height = e.height),
                              t)
                            : new s(e.longitude, e.latitude, e.height);
                }),
                (s.equals = function(e, t) {
                    return (
                        e === t ||
                        (n(e) &&
                            n(t) &&
                            e.longitude === t.longitude &&
                            e.latitude === t.latitude &&
                            e.height === t.height)
                    );
                }),
                (s.equalsEpsilon = function(e, t, r) {
                    return (
                        e === t ||
                        (n(e) &&
                            n(t) &&
                            Math.abs(e.longitude - t.longitude) <= r &&
                            Math.abs(e.latitude - t.latitude) <= r &&
                            Math.abs(e.height - t.height) <= r)
                    );
                }),
                (s.ZERO = o(new s(0, 0, 0))),
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
                    return "(" + this.longitude + ", " + this.latitude + ", " + this.height + ")";
                }),
                s
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
        ], function(e, t, r, n, o, i, a, s, u, c) {
            "use strict";
            function l(t, r, o, i) {
                (r = n(r, 0)),
                    (o = n(o, 0)),
                    (i = n(i, 0)),
                    (t._radii = new e(r, o, i)),
                    (t._radiiSquared = new e(r * r, o * o, i * i)),
                    (t._radiiToTheFourth = new e(r * r * r * r, o * o * o * o, i * i * i * i)),
                    (t._oneOverRadii = new e(
                        0 === r ? 0 : 1 / r,
                        0 === o ? 0 : 1 / o,
                        0 === i ? 0 : 1 / i
                    )),
                    (t._oneOverRadiiSquared = new e(
                        0 === r ? 0 : 1 / (r * r),
                        0 === o ? 0 : 1 / (o * o),
                        0 === i ? 0 : 1 / (i * i)
                    )),
                    (t._minimumRadius = Math.min(r, o, i)),
                    (t._maximumRadius = Math.max(r, o, i)),
                    (t._centerToleranceSquared = u.EPSILON1),
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
                (f.WGS84 = s(new f(6378137, 6378137, 6356752.314245179))),
                (f.UNIT_SPHERE = s(new f(1, 1, 1))),
                (f.MOON = s(new f(u.LUNAR_RADIUS, u.LUNAR_RADIUS, u.LUNAR_RADIUS))),
                (f.prototype.clone = function(e) {
                    return f.clone(this, e);
                }),
                (f.packedLength = e.packedLength),
                (f.pack = function(t, r, o) {
                    return (o = n(o, 0)), e.pack(t._radii, r, o), r;
                }),
                (f.unpack = function(t, r, o) {
                    r = n(r, 0);
                    var i = e.unpack(t, r);
                    return f.fromCartesian3(i, o);
                }),
                (f.prototype.geocentricSurfaceNormal = e.normalize),
                (f.prototype.geodeticSurfaceNormalCartographic = function(t, r) {
                    var n = t.longitude,
                        i = t.latitude,
                        a = Math.cos(i),
                        s = a * Math.cos(n),
                        u = a * Math.sin(n),
                        c = Math.sin(i);
                    return (
                        o(r) || (r = new e()), (r.x = s), (r.y = u), (r.z = c), e.normalize(r, r)
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
                    i = d;
                this.geodeticSurfaceNormalCartographic(t, n),
                    e.multiplyComponents(this._radiiSquared, n, i);
                var a = Math.sqrt(e.dot(n, i));
                return (
                    e.divideByScalar(i, a, i),
                    e.multiplyByScalar(n, t.height, n),
                    o(r) || (r = new e()),
                    e.add(i, n, r)
                );
            }),
                (f.prototype.cartographicArrayToCartesianArray = function(e, t) {
                    var r = e.length;
                    o(t) ? (t.length = r) : (t = new Array(r));
                    for (var n = 0; n < r; n++) t[n] = this.cartographicToCartesian(e[n], t[n]);
                    return t;
                });
            var E = new e(),
                p = new e(),
                m = new e();
            return (
                (f.prototype.cartesianToCartographic = function(r, n) {
                    var i = this.scaleToGeodeticSurface(r, p);
                    if (o(i)) {
                        var a = this.geodeticSurfaceNormal(i, E),
                            s = e.subtract(r, i, m),
                            c = Math.atan2(a.y, a.x),
                            l = Math.asin(a.z),
                            f = u.sign(e.dot(s, r)) * e.magnitude(s);
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
                        i = t.y,
                        a = t.z,
                        s = this._oneOverRadiiSquared,
                        u = 1 / Math.sqrt(n * n * s.x + i * i * s.y + a * a * s.z);
                    return e.multiplyByScalar(t, u, r);
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
                (f.prototype.getSurfaceNormalIntersectionWithZAxis = function(t, r, i) {
                    r = n(r, 0);
                    var a = this._squaredXOverSquaredZ;
                    if (
                        (o(i) || (i = new e()),
                        (i.x = 0),
                        (i.y = 0),
                        (i.z = t.z * (1 - a)),
                        !(Math.abs(i.z) >= this._radii.z - r))
                    )
                        return i;
                }),
                f
            );
        }),
        define("Core/arrayRemoveDuplicates", [
            "./Check",
            "./defaultValue",
            "./defined",
            "./Math"
        ], function(e, t, r, n) {
            "use strict";
            function o(e, n, o) {
                if (r(e)) {
                    o = t(o, !1);
                    var a = e.length;
                    if (a < 2) return e;
                    var s, u, c;
                    for (s = 1; s < a && ((u = e[s - 1]), (c = e[s]), !n(u, c, i)); ++s);
                    if (s === a) return o && n(e[0], e[e.length - 1], i) ? e.slice(1) : e;
                    for (var l = e.slice(0, s); s < a; ++s)
                        (c = e[s]), n(u, c, i) || (l.push(c), (u = c));
                    return o && l.length > 1 && n(l[0], l[l.length - 1], i) && l.shift(), l;
                }
            }
            var i = n.EPSILON10;
            return o;
        }),
        define("Core/GeographicProjection", [
            "./Cartesian3",
            "./Cartographic",
            "./defaultValue",
            "./defined",
            "./defineProperties",
            "./DeveloperError",
            "./Ellipsoid"
        ], function(e, t, r, n, o, i, a) {
            "use strict";
            function s(e) {
                (this._ellipsoid = r(e, a.WGS84)),
                    (this._semimajorAxis = this._ellipsoid.maximumRadius),
                    (this._oneOverSemimajorAxis = 1 / this._semimajorAxis);
            }
            return (
                o(s.prototype, {
                    ellipsoid: {
                        get: function() {
                            return this._ellipsoid;
                        }
                    }
                }),
                (s.prototype.project = function(t, r) {
                    var o = this._semimajorAxis,
                        i = t.longitude * o,
                        a = t.latitude * o,
                        s = t.height;
                    return n(r) ? ((r.x = i), (r.y = a), (r.z = s), r) : new e(i, a, s);
                }),
                (s.prototype.unproject = function(e, r) {
                    var o = this._oneOverSemimajorAxis,
                        i = e.x * o,
                        a = e.y * o,
                        s = e.z;
                    return n(r)
                        ? ((r.longitude = i), (r.latitude = a), (r.height = s), r)
                        : new t(i, a, s);
                }),
                s
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
        ], function(e, t, r, n, o, i, a, s) {
            "use strict";
            function u(e, t, n, o, i, a, s, u, c) {
                (this[0] = r(e, 0)),
                    (this[1] = r(o, 0)),
                    (this[2] = r(s, 0)),
                    (this[3] = r(t, 0)),
                    (this[4] = r(i, 0)),
                    (this[5] = r(u, 0)),
                    (this[6] = r(n, 0)),
                    (this[7] = r(a, 0)),
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
                    var n = e[u.getElementIndex(p[r], E[r])];
                    t += 2 * n * n;
                }
                return Math.sqrt(t);
            }
            function f(e, t) {
                for (var r = s.EPSILON15, n = 0, o = 1, i = 0; i < 3; ++i) {
                    var a = Math.abs(e[u.getElementIndex(p[i], E[i])]);
                    a > n && ((o = i), (n = a));
                }
                var c = 1,
                    l = 0,
                    f = E[o],
                    h = p[o];
                if (Math.abs(e[u.getElementIndex(h, f)]) > r) {
                    var d,
                        m = e[u.getElementIndex(h, h)],
                        _ = e[u.getElementIndex(f, f)],
                        y = e[u.getElementIndex(h, f)],
                        R = (m - _) / 2 / y;
                    (d = R < 0 ? -1 / (-R + Math.sqrt(1 + R * R)) : 1 / (R + Math.sqrt(1 + R * R))),
                        (c = 1 / Math.sqrt(1 + d * d)),
                        (l = d * c);
                }
                return (
                    (t = u.clone(u.IDENTITY, t)),
                    (t[u.getElementIndex(f, f)] = t[u.getElementIndex(h, h)] = c),
                    (t[u.getElementIndex(h, f)] = l),
                    (t[u.getElementIndex(f, h)] = -l),
                    t
                );
            }
            (u.packedLength = 9),
                (u.pack = function(e, t, n) {
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
                (u.unpack = function(e, t, o) {
                    return (
                        (t = r(t, 0)),
                        n(o) || (o = new u()),
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
                (u.clone = function(e, t) {
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
                            : new u(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]);
                }),
                (u.fromArray = function(e, t, o) {
                    return (
                        (t = r(t, 0)),
                        n(o) || (o = new u()),
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
                (u.fromColumnMajorArray = function(e, t) {
                    return u.clone(e, t);
                }),
                (u.fromRowMajorArray = function(e, t) {
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
                        : new u(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]);
                }),
                (u.fromQuaternion = function(e, t) {
                    var r = e.x * e.x,
                        o = e.x * e.y,
                        i = e.x * e.z,
                        a = e.x * e.w,
                        s = e.y * e.y,
                        c = e.y * e.z,
                        l = e.y * e.w,
                        f = e.z * e.z,
                        h = e.z * e.w,
                        d = e.w * e.w,
                        E = r - s - f + d,
                        p = 2 * (o - h),
                        m = 2 * (i + l),
                        _ = 2 * (o + h),
                        y = -r + s - f + d,
                        R = 2 * (c - a),
                        T = 2 * (i - l),
                        A = 2 * (c + a),
                        S = -r - s + f + d;
                    return n(t)
                        ? ((t[0] = E),
                          (t[1] = _),
                          (t[2] = T),
                          (t[3] = p),
                          (t[4] = y),
                          (t[5] = A),
                          (t[6] = m),
                          (t[7] = R),
                          (t[8] = S),
                          t)
                        : new u(E, p, m, _, y, R, T, A, S);
                }),
                (u.fromHeadingPitchRoll = function(e, t) {
                    var r = Math.cos(-e.pitch),
                        o = Math.cos(-e.heading),
                        i = Math.cos(e.roll),
                        a = Math.sin(-e.pitch),
                        s = Math.sin(-e.heading),
                        c = Math.sin(e.roll),
                        l = r * o,
                        f = -i * s + c * a * o,
                        h = c * s + i * a * o,
                        d = r * s,
                        E = i * o + c * a * s,
                        p = -c * o + i * a * s,
                        m = -a,
                        _ = c * r,
                        y = i * r;
                    return n(t)
                        ? ((t[0] = l),
                          (t[1] = d),
                          (t[2] = m),
                          (t[3] = f),
                          (t[4] = E),
                          (t[5] = _),
                          (t[6] = h),
                          (t[7] = p),
                          (t[8] = y),
                          t)
                        : new u(l, f, h, d, E, p, m, _, y);
                }),
                (u.fromScale = function(e, t) {
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
                        : new u(e.x, 0, 0, 0, e.y, 0, 0, 0, e.z);
                }),
                (u.fromUniformScale = function(e, t) {
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
                        : new u(e, 0, 0, 0, e, 0, 0, 0, e);
                }),
                (u.fromCrossProduct = function(e, t) {
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
                        : new u(0, -e.z, e.y, e.z, 0, -e.x, -e.y, e.x, 0);
                }),
                (u.fromRotationX = function(e, t) {
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
                        : new u(1, 0, 0, 0, r, -o, 0, o, r);
                }),
                (u.fromRotationY = function(e, t) {
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
                        : new u(r, 0, o, 0, 1, 0, -o, 0, r);
                }),
                (u.fromRotationZ = function(e, t) {
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
                        : new u(r, -o, 0, o, r, 0, 0, 0, 1);
                }),
                (u.toArray = function(e, t) {
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
                (u.getElementIndex = function(e, t) {
                    return 3 * e + t;
                }),
                (u.getColumn = function(e, t, r) {
                    var n = 3 * t,
                        o = e[n],
                        i = e[n + 1],
                        a = e[n + 2];
                    return (r.x = o), (r.y = i), (r.z = a), r;
                }),
                (u.setColumn = function(e, t, r, n) {
                    n = u.clone(e, n);
                    var o = 3 * t;
                    return (n[o] = r.x), (n[o + 1] = r.y), (n[o + 2] = r.z), n;
                }),
                (u.getRow = function(e, t, r) {
                    var n = e[t],
                        o = e[t + 3],
                        i = e[t + 6];
                    return (r.x = n), (r.y = o), (r.z = i), r;
                }),
                (u.setRow = function(e, t, r, n) {
                    return (n = u.clone(e, n)), (n[t] = r.x), (n[t + 3] = r.y), (n[t + 6] = r.z), n;
                });
            var h = new e();
            u.getScale = function(t, r) {
                return (
                    (r.x = e.magnitude(e.fromElements(t[0], t[1], t[2], h))),
                    (r.y = e.magnitude(e.fromElements(t[3], t[4], t[5], h))),
                    (r.z = e.magnitude(e.fromElements(t[6], t[7], t[8], h))),
                    r
                );
            };
            var d = new e();
            (u.getMaximumScale = function(t) {
                return u.getScale(t, d), e.maximumComponent(d);
            }),
                (u.multiply = function(e, t, r) {
                    var n = e[0] * t[0] + e[3] * t[1] + e[6] * t[2],
                        o = e[1] * t[0] + e[4] * t[1] + e[7] * t[2],
                        i = e[2] * t[0] + e[5] * t[1] + e[8] * t[2],
                        a = e[0] * t[3] + e[3] * t[4] + e[6] * t[5],
                        s = e[1] * t[3] + e[4] * t[4] + e[7] * t[5],
                        u = e[2] * t[3] + e[5] * t[4] + e[8] * t[5],
                        c = e[0] * t[6] + e[3] * t[7] + e[6] * t[8],
                        l = e[1] * t[6] + e[4] * t[7] + e[7] * t[8],
                        f = e[2] * t[6] + e[5] * t[7] + e[8] * t[8];
                    return (
                        (r[0] = n),
                        (r[1] = o),
                        (r[2] = i),
                        (r[3] = a),
                        (r[4] = s),
                        (r[5] = u),
                        (r[6] = c),
                        (r[7] = l),
                        (r[8] = f),
                        r
                    );
                }),
                (u.add = function(e, t, r) {
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
                (u.subtract = function(e, t, r) {
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
                (u.multiplyByVector = function(e, t, r) {
                    var n = t.x,
                        o = t.y,
                        i = t.z,
                        a = e[0] * n + e[3] * o + e[6] * i,
                        s = e[1] * n + e[4] * o + e[7] * i,
                        u = e[2] * n + e[5] * o + e[8] * i;
                    return (r.x = a), (r.y = s), (r.z = u), r;
                }),
                (u.multiplyByScalar = function(e, t, r) {
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
                (u.multiplyByScale = function(e, t, r) {
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
                (u.negate = function(e, t) {
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
                (u.transpose = function(e, t) {
                    var r = e[0],
                        n = e[3],
                        o = e[6],
                        i = e[1],
                        a = e[4],
                        s = e[7],
                        u = e[2],
                        c = e[5],
                        l = e[8];
                    return (
                        (t[0] = r),
                        (t[1] = n),
                        (t[2] = o),
                        (t[3] = i),
                        (t[4] = a),
                        (t[5] = s),
                        (t[6] = u),
                        (t[7] = c),
                        (t[8] = l),
                        t
                    );
                });
            var E = [1, 0, 0],
                p = [2, 2, 1],
                m = new u(),
                _ = new u();
            return (
                (u.computeEigenDecomposition = function(e, t) {
                    var r = s.EPSILON20,
                        o = 0,
                        i = 0;
                    n(t) || (t = {});
                    for (
                        var a = (t.unitary = u.clone(u.IDENTITY, t.unitary)),
                            h = (t.diagonal = u.clone(e, t.diagonal)),
                            d = r * c(h);
                        i < 10 && l(h) > d;

                    )
                        f(h, m),
                            u.transpose(m, _),
                            u.multiply(h, m, h),
                            u.multiply(_, h, h),
                            u.multiply(a, m, a),
                            ++o > 2 && (++i, (o = 0));
                    return t;
                }),
                (u.abs = function(e, t) {
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
                (u.determinant = function(e) {
                    var t = e[0],
                        r = e[3],
                        n = e[6],
                        o = e[1],
                        i = e[4],
                        a = e[7],
                        s = e[2],
                        u = e[5],
                        c = e[8];
                    return t * (i * c - u * a) + o * (u * n - r * c) + s * (r * a - i * n);
                }),
                (u.inverse = function(e, t) {
                    var r = e[0],
                        n = e[1],
                        o = e[2],
                        i = e[3],
                        a = e[4],
                        s = e[5],
                        c = e[6],
                        l = e[7],
                        f = e[8],
                        h = u.determinant(e);
                    (t[0] = a * f - l * s),
                        (t[1] = l * o - n * f),
                        (t[2] = n * s - a * o),
                        (t[3] = c * s - i * f),
                        (t[4] = r * f - c * o),
                        (t[5] = i * o - r * s),
                        (t[6] = i * l - c * a),
                        (t[7] = c * n - r * l),
                        (t[8] = r * a - i * n);
                    var d = 1 / h;
                    return u.multiplyByScalar(t, d, t);
                }),
                (u.equals = function(e, t) {
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
                (u.equalsEpsilon = function(e, t, r) {
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
                (u.IDENTITY = a(new u(1, 0, 0, 0, 1, 0, 0, 0, 1))),
                (u.ZERO = a(new u(0, 0, 0, 0, 0, 0, 0, 0, 0))),
                (u.COLUMN0ROW0 = 0),
                (u.COLUMN0ROW1 = 1),
                (u.COLUMN0ROW2 = 2),
                (u.COLUMN1ROW0 = 3),
                (u.COLUMN1ROW1 = 4),
                (u.COLUMN1ROW2 = 5),
                (u.COLUMN2ROW0 = 6),
                (u.COLUMN2ROW1 = 7),
                (u.COLUMN2ROW2 = 8),
                o(u.prototype, {
                    length: {
                        get: function() {
                            return u.packedLength;
                        }
                    }
                }),
                (u.prototype.clone = function(e) {
                    return u.clone(this, e);
                }),
                (u.prototype.equals = function(e) {
                    return u.equals(this, e);
                }),
                (u.equalsArray = function(e, t, r) {
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
                (u.prototype.equalsEpsilon = function(e, t) {
                    return u.equalsEpsilon(this, e, t);
                }),
                (u.prototype.toString = function() {
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
                u
            );
        }),
        define("Core/Cartesian4", [
            "./Check",
            "./defaultValue",
            "./defined",
            "./DeveloperError",
            "./freezeObject",
            "./Math"
        ], function(e, t, r, n, o, i) {
            "use strict";
            function a(e, r, n, o) {
                (this.x = t(e, 0)), (this.y = t(r, 0)), (this.z = t(n, 0)), (this.w = t(o, 0));
            }
            (a.fromElements = function(e, t, n, o, i) {
                return r(i) ? ((i.x = e), (i.y = t), (i.z = n), (i.w = o), i) : new a(e, t, n, o);
            }),
                (a.fromColor = function(e, t) {
                    return r(t)
                        ? ((t.x = e.red), (t.y = e.green), (t.z = e.blue), (t.w = e.alpha), t)
                        : new a(e.red, e.green, e.blue, e.alpha);
                }),
                (a.clone = function(e, t) {
                    if (r(e))
                        return r(t)
                            ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), (t.w = e.w), t)
                            : new a(e.x, e.y, e.z, e.w);
                }),
                (a.packedLength = 4),
                (a.pack = function(e, r, n) {
                    return (
                        (n = t(n, 0)),
                        (r[n++] = e.x),
                        (r[n++] = e.y),
                        (r[n++] = e.z),
                        (r[n] = e.w),
                        r
                    );
                }),
                (a.unpack = function(e, n, o) {
                    return (
                        (n = t(n, 0)),
                        r(o) || (o = new a()),
                        (o.x = e[n++]),
                        (o.y = e[n++]),
                        (o.z = e[n++]),
                        (o.w = e[n]),
                        o
                    );
                }),
                (a.packArray = function(e, t) {
                    var n = e.length;
                    r(t) ? (t.length = 4 * n) : (t = new Array(4 * n));
                    for (var o = 0; o < n; ++o) a.pack(e[o], t, 4 * o);
                    return t;
                }),
                (a.unpackArray = function(e, t) {
                    var n = e.length;
                    r(t) ? (t.length = n / 4) : (t = new Array(n / 4));
                    for (var o = 0; o < n; o += 4) {
                        var i = o / 4;
                        t[i] = a.unpack(e, o, t[i]);
                    }
                    return t;
                }),
                (a.fromArray = a.unpack),
                (a.maximumComponent = function(e) {
                    return Math.max(e.x, e.y, e.z, e.w);
                }),
                (a.minimumComponent = function(e) {
                    return Math.min(e.x, e.y, e.z, e.w);
                }),
                (a.minimumByComponent = function(e, t, r) {
                    return (
                        (r.x = Math.min(e.x, t.x)),
                        (r.y = Math.min(e.y, t.y)),
                        (r.z = Math.min(e.z, t.z)),
                        (r.w = Math.min(e.w, t.w)),
                        r
                    );
                }),
                (a.maximumByComponent = function(e, t, r) {
                    return (
                        (r.x = Math.max(e.x, t.x)),
                        (r.y = Math.max(e.y, t.y)),
                        (r.z = Math.max(e.z, t.z)),
                        (r.w = Math.max(e.w, t.w)),
                        r
                    );
                }),
                (a.magnitudeSquared = function(e) {
                    return e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w;
                }),
                (a.magnitude = function(e) {
                    return Math.sqrt(a.magnitudeSquared(e));
                });
            var s = new a();
            (a.distance = function(e, t) {
                return a.subtract(e, t, s), a.magnitude(s);
            }),
                (a.distanceSquared = function(e, t) {
                    return a.subtract(e, t, s), a.magnitudeSquared(s);
                }),
                (a.normalize = function(e, t) {
                    var r = a.magnitude(e);
                    return (t.x = e.x / r), (t.y = e.y / r), (t.z = e.z / r), (t.w = e.w / r), t;
                }),
                (a.dot = function(e, t) {
                    return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w;
                }),
                (a.multiplyComponents = function(e, t, r) {
                    return (
                        (r.x = e.x * t.x),
                        (r.y = e.y * t.y),
                        (r.z = e.z * t.z),
                        (r.w = e.w * t.w),
                        r
                    );
                }),
                (a.divideComponents = function(e, t, r) {
                    return (
                        (r.x = e.x / t.x),
                        (r.y = e.y / t.y),
                        (r.z = e.z / t.z),
                        (r.w = e.w / t.w),
                        r
                    );
                }),
                (a.add = function(e, t, r) {
                    return (
                        (r.x = e.x + t.x),
                        (r.y = e.y + t.y),
                        (r.z = e.z + t.z),
                        (r.w = e.w + t.w),
                        r
                    );
                }),
                (a.subtract = function(e, t, r) {
                    return (
                        (r.x = e.x - t.x),
                        (r.y = e.y - t.y),
                        (r.z = e.z - t.z),
                        (r.w = e.w - t.w),
                        r
                    );
                }),
                (a.multiplyByScalar = function(e, t, r) {
                    return (r.x = e.x * t), (r.y = e.y * t), (r.z = e.z * t), (r.w = e.w * t), r;
                }),
                (a.divideByScalar = function(e, t, r) {
                    return (r.x = e.x / t), (r.y = e.y / t), (r.z = e.z / t), (r.w = e.w / t), r;
                }),
                (a.negate = function(e, t) {
                    return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), (t.w = -e.w), t;
                }),
                (a.abs = function(e, t) {
                    return (
                        (t.x = Math.abs(e.x)),
                        (t.y = Math.abs(e.y)),
                        (t.z = Math.abs(e.z)),
                        (t.w = Math.abs(e.w)),
                        t
                    );
                });
            var u = new a();
            a.lerp = function(e, t, r, n) {
                return (
                    a.multiplyByScalar(t, r, u),
                    (n = a.multiplyByScalar(e, 1 - r, n)),
                    a.add(u, n, n)
                );
            };
            var c = new a();
            (a.mostOrthogonalAxis = function(e, t) {
                var r = a.normalize(e, c);
                return (
                    a.abs(r, r),
                    (t =
                        r.x <= r.y
                            ? r.x <= r.z
                                ? r.x <= r.w
                                    ? a.clone(a.UNIT_X, t)
                                    : a.clone(a.UNIT_W, t)
                                : r.z <= r.w
                                ? a.clone(a.UNIT_Z, t)
                                : a.clone(a.UNIT_W, t)
                            : r.y <= r.z
                            ? r.y <= r.w
                                ? a.clone(a.UNIT_Y, t)
                                : a.clone(a.UNIT_W, t)
                            : r.z <= r.w
                            ? a.clone(a.UNIT_Z, t)
                            : a.clone(a.UNIT_W, t))
                );
            }),
                (a.equals = function(e, t) {
                    return (
                        e === t ||
                        (r(e) && r(t) && e.x === t.x && e.y === t.y && e.z === t.z && e.w === t.w)
                    );
                }),
                (a.equalsArray = function(e, t, r) {
                    return e.x === t[r] && e.y === t[r + 1] && e.z === t[r + 2] && e.w === t[r + 3];
                }),
                (a.equalsEpsilon = function(e, t, n, o) {
                    return (
                        e === t ||
                        (r(e) &&
                            r(t) &&
                            i.equalsEpsilon(e.x, t.x, n, o) &&
                            i.equalsEpsilon(e.y, t.y, n, o) &&
                            i.equalsEpsilon(e.z, t.z, n, o) &&
                            i.equalsEpsilon(e.w, t.w, n, o))
                    );
                }),
                (a.ZERO = o(new a(0, 0, 0, 0))),
                (a.UNIT_X = o(new a(1, 0, 0, 0))),
                (a.UNIT_Y = o(new a(0, 1, 0, 0))),
                (a.UNIT_Z = o(new a(0, 0, 1, 0))),
                (a.UNIT_W = o(new a(0, 0, 0, 1))),
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
                    return "(" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + ")";
                });
            var l = new Float32Array(1);
            return (
                (a.packFloat = function(e, t) {
                    if ((r(t) || (t = new a()), (l[0] = e), 0 === (e = l[0])))
                        return a.clone(a.ZERO, t);
                    var n,
                        o = e < 0 ? 1 : 0;
                    isFinite(e)
                        ? ((e = Math.abs(e)),
                          (n = Math.floor(i.logBase(e, 10)) + 1),
                          (e /= Math.pow(10, n)))
                        : ((e = 0.1), (n = 38));
                    var s = 256 * e;
                    return (
                        (t.x = Math.floor(s)),
                        (s = 256 * (s - t.x)),
                        (t.y = Math.floor(s)),
                        (s = 256 * (s - t.y)),
                        (t.z = Math.floor(s)),
                        (t.w = 2 * (n + 38) + o),
                        t
                    );
                }),
                (a.unpackFloat = function(e) {
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
                a
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
        ], function(e, t, r, n, o, i, a, s, u, c) {
            "use strict";
            function l(e, t, r, o, i, a, s, u, c, l, f, h, d, E, p, m) {
                (this[0] = n(e, 0)),
                    (this[1] = n(i, 0)),
                    (this[2] = n(c, 0)),
                    (this[3] = n(d, 0)),
                    (this[4] = n(t, 0)),
                    (this[5] = n(a, 0)),
                    (this[6] = n(l, 0)),
                    (this[7] = n(E, 0)),
                    (this[8] = n(r, 0)),
                    (this[9] = n(s, 0)),
                    (this[10] = n(f, 0)),
                    (this[11] = n(p, 0)),
                    (this[12] = n(o, 0)),
                    (this[13] = n(u, 0)),
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
                (l.fromRotationTranslation = function(t, r, i) {
                    return (
                        (r = n(r, e.ZERO)),
                        o(i)
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
                    o(n) || (n = new l());
                    var i = r.x,
                        a = r.y,
                        s = r.z,
                        u = t.x * t.x,
                        c = t.x * t.y,
                        f = t.x * t.z,
                        h = t.x * t.w,
                        d = t.y * t.y,
                        E = t.y * t.z,
                        p = t.y * t.w,
                        m = t.z * t.z,
                        _ = t.z * t.w,
                        y = t.w * t.w,
                        R = u - d - m + y,
                        T = 2 * (c - _),
                        A = 2 * (f + p),
                        S = 2 * (c + _),
                        C = -u + d - m + y,
                        g = 2 * (E - h),
                        v = 2 * (f - p),
                        N = 2 * (E + h),
                        I = -u - d + m + y;
                    return (
                        (n[0] = R * i),
                        (n[1] = S * i),
                        (n[2] = v * i),
                        (n[3] = 0),
                        (n[4] = T * a),
                        (n[5] = C * a),
                        (n[6] = N * a),
                        (n[7] = 0),
                        (n[8] = A * s),
                        (n[9] = g * s),
                        (n[10] = I * s),
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
                    return l.fromRotationTranslation(u.IDENTITY, e, t);
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
                    i = t.direction,
                    a = t.up;
                e.normalize(i, f),
                    e.normalize(e.cross(f, a, h), h),
                    e.normalize(e.cross(h, f, d), d);
                var s = h.x,
                    u = h.y,
                    c = h.z,
                    E = f.x,
                    p = f.y,
                    m = f.z,
                    _ = d.x,
                    y = d.y,
                    R = d.z,
                    T = n.x,
                    A = n.y,
                    S = n.z,
                    C = s * -T + u * -A + c * -S,
                    g = _ * -T + y * -A + R * -S,
                    v = E * T + p * A + m * S;
                return o(r)
                    ? ((r[0] = s),
                      (r[1] = _),
                      (r[2] = -E),
                      (r[3] = 0),
                      (r[4] = u),
                      (r[5] = y),
                      (r[6] = -p),
                      (r[7] = 0),
                      (r[8] = c),
                      (r[9] = R),
                      (r[10] = -m),
                      (r[11] = 0),
                      (r[12] = C),
                      (r[13] = g),
                      (r[14] = v),
                      (r[15] = 1),
                      r)
                    : new l(s, u, c, C, _, y, R, g, -E, -p, -m, v, 0, 0, 0, 1);
            }),
                (l.computePerspectiveFieldOfView = function(e, t, r, n, o) {
                    var i = Math.tan(0.5 * e),
                        a = 1 / i,
                        s = a / t,
                        u = (n + r) / (r - n),
                        c = (2 * n * r) / (r - n);
                    return (
                        (o[0] = s),
                        (o[1] = 0),
                        (o[2] = 0),
                        (o[3] = 0),
                        (o[4] = 0),
                        (o[5] = a),
                        (o[6] = 0),
                        (o[7] = 0),
                        (o[8] = 0),
                        (o[9] = 0),
                        (o[10] = u),
                        (o[11] = -1),
                        (o[12] = 0),
                        (o[13] = 0),
                        (o[14] = c),
                        (o[15] = 0),
                        o
                    );
                }),
                (l.computeOrthographicOffCenter = function(e, t, r, n, o, i, a) {
                    var s = 1 / (t - e),
                        u = 1 / (n - r),
                        c = 1 / (i - o),
                        l = -(t + e) * s,
                        f = -(n + r) * u,
                        h = -(i + o) * c;
                    return (
                        (s *= 2),
                        (u *= 2),
                        (c *= -2),
                        (a[0] = s),
                        (a[1] = 0),
                        (a[2] = 0),
                        (a[3] = 0),
                        (a[4] = 0),
                        (a[5] = u),
                        (a[6] = 0),
                        (a[7] = 0),
                        (a[8] = 0),
                        (a[9] = 0),
                        (a[10] = c),
                        (a[11] = 0),
                        (a[12] = l),
                        (a[13] = f),
                        (a[14] = h),
                        (a[15] = 1),
                        a
                    );
                }),
                (l.computePerspectiveOffCenter = function(e, t, r, n, o, i, a) {
                    var s = (2 * o) / (t - e),
                        u = (2 * o) / (n - r),
                        c = (t + e) / (t - e),
                        l = (n + r) / (n - r),
                        f = -(i + o) / (i - o),
                        h = (-2 * i * o) / (i - o);
                    return (
                        (a[0] = s),
                        (a[1] = 0),
                        (a[2] = 0),
                        (a[3] = 0),
                        (a[4] = 0),
                        (a[5] = u),
                        (a[6] = 0),
                        (a[7] = 0),
                        (a[8] = c),
                        (a[9] = l),
                        (a[10] = f),
                        (a[11] = -1),
                        (a[12] = 0),
                        (a[13] = 0),
                        (a[14] = h),
                        (a[15] = 0),
                        a
                    );
                }),
                (l.computeInfinitePerspectiveOffCenter = function(e, t, r, n, o, i) {
                    var a = (2 * o) / (t - e),
                        s = (2 * o) / (n - r),
                        u = (t + e) / (t - e),
                        c = (n + r) / (n - r),
                        l = -2 * o;
                    return (
                        (i[0] = a),
                        (i[1] = 0),
                        (i[2] = 0),
                        (i[3] = 0),
                        (i[4] = 0),
                        (i[5] = s),
                        (i[6] = 0),
                        (i[7] = 0),
                        (i[8] = u),
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
                (l.computeViewportTransformation = function(e, t, r, o) {
                    e = n(e, n.EMPTY_OBJECT);
                    var i = n(e.x, 0),
                        a = n(e.y, 0),
                        s = n(e.width, 0),
                        u = n(e.height, 0);
                    (t = n(t, 0)), (r = n(r, 1));
                    var c = 0.5 * s,
                        l = 0.5 * u,
                        f = 0.5 * (r - t),
                        h = c,
                        d = l,
                        E = f,
                        p = i + c,
                        m = a + l,
                        _ = t + f;
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
                        (o[12] = p),
                        (o[13] = m),
                        (o[14] = _),
                        (o[15] = 1),
                        o
                    );
                }),
                (l.computeView = function(t, r, n, o, i) {
                    return (
                        (i[0] = o.x),
                        (i[1] = n.x),
                        (i[2] = -r.x),
                        (i[3] = 0),
                        (i[4] = o.y),
                        (i[5] = n.y),
                        (i[6] = -r.y),
                        (i[7] = 0),
                        (i[8] = o.z),
                        (i[9] = n.z),
                        (i[10] = -r.z),
                        (i[11] = 0),
                        (i[12] = -e.dot(o, t)),
                        (i[13] = -e.dot(n, t)),
                        (i[14] = e.dot(r, t)),
                        (i[15] = 1),
                        i
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
                        i = e[n + 1],
                        a = e[n + 2],
                        s = e[n + 3];
                    return (r.x = o), (r.y = i), (r.z = a), (r.w = s), r;
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
                    i = e.divideComponents(r, o, E);
                return l.multiplyByScale(t, i, n);
            }),
                (l.getRow = function(e, t, r) {
                    var n = e[t],
                        o = e[t + 4],
                        i = e[t + 8],
                        a = e[t + 12];
                    return (r.x = n), (r.y = o), (r.z = i), (r.w = a), r;
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
            var p = new e();
            l.getScale = function(t, r) {
                return (
                    (r.x = e.magnitude(e.fromElements(t[0], t[1], t[2], p))),
                    (r.y = e.magnitude(e.fromElements(t[4], t[5], t[6], p))),
                    (r.z = e.magnitude(e.fromElements(t[8], t[9], t[10], p))),
                    r
                );
            };
            var m = new e();
            (l.getMaximumScale = function(t) {
                return l.getScale(t, m), e.maximumComponent(m);
            }),
                (l.multiply = function(e, t, r) {
                    var n = e[0],
                        o = e[1],
                        i = e[2],
                        a = e[3],
                        s = e[4],
                        u = e[5],
                        c = e[6],
                        l = e[7],
                        f = e[8],
                        h = e[9],
                        d = e[10],
                        E = e[11],
                        p = e[12],
                        m = e[13],
                        _ = e[14],
                        y = e[15],
                        R = t[0],
                        T = t[1],
                        A = t[2],
                        S = t[3],
                        C = t[4],
                        g = t[5],
                        v = t[6],
                        N = t[7],
                        I = t[8],
                        O = t[9],
                        M = t[10],
                        w = t[11],
                        P = t[12],
                        D = t[13],
                        F = t[14],
                        U = t[15],
                        x = n * R + s * T + f * A + p * S,
                        L = o * R + u * T + h * A + m * S,
                        b = i * R + c * T + d * A + _ * S,
                        B = a * R + l * T + E * A + y * S,
                        q = n * C + s * g + f * v + p * N,
                        z = o * C + u * g + h * v + m * N,
                        G = i * C + c * g + d * v + _ * N,
                        V = a * C + l * g + E * v + y * N,
                        H = n * I + s * O + f * M + p * w,
                        W = o * I + u * O + h * M + m * w,
                        X = i * I + c * O + d * M + _ * w,
                        Y = a * I + l * O + E * M + y * w,
                        k = n * P + s * D + f * F + p * U,
                        j = o * P + u * D + h * F + m * U,
                        K = i * P + c * D + d * F + _ * U,
                        Z = a * P + l * D + E * F + y * U;
                    return (
                        (r[0] = x),
                        (r[1] = L),
                        (r[2] = b),
                        (r[3] = B),
                        (r[4] = q),
                        (r[5] = z),
                        (r[6] = G),
                        (r[7] = V),
                        (r[8] = H),
                        (r[9] = W),
                        (r[10] = X),
                        (r[11] = Y),
                        (r[12] = k),
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
                        i = e[2],
                        a = e[4],
                        s = e[5],
                        u = e[6],
                        c = e[8],
                        l = e[9],
                        f = e[10],
                        h = e[12],
                        d = e[13],
                        E = e[14],
                        p = t[0],
                        m = t[1],
                        _ = t[2],
                        y = t[4],
                        R = t[5],
                        T = t[6],
                        A = t[8],
                        S = t[9],
                        C = t[10],
                        g = t[12],
                        v = t[13],
                        N = t[14],
                        I = n * p + a * m + c * _,
                        O = o * p + s * m + l * _,
                        M = i * p + u * m + f * _,
                        w = n * y + a * R + c * T,
                        P = o * y + s * R + l * T,
                        D = i * y + u * R + f * T,
                        F = n * A + a * S + c * C,
                        U = o * A + s * S + l * C,
                        x = i * A + u * S + f * C,
                        L = n * g + a * v + c * N + h,
                        b = o * g + s * v + l * N + d,
                        B = i * g + u * v + f * N + E;
                    return (
                        (r[0] = I),
                        (r[1] = O),
                        (r[2] = M),
                        (r[3] = 0),
                        (r[4] = w),
                        (r[5] = P),
                        (r[6] = D),
                        (r[7] = 0),
                        (r[8] = F),
                        (r[9] = U),
                        (r[10] = x),
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
                        i = e[2],
                        a = e[4],
                        s = e[5],
                        u = e[6],
                        c = e[8],
                        l = e[9],
                        f = e[10],
                        h = t[0],
                        d = t[1],
                        E = t[2],
                        p = t[3],
                        m = t[4],
                        _ = t[5],
                        y = t[6],
                        R = t[7],
                        T = t[8],
                        A = n * h + a * d + c * E,
                        S = o * h + s * d + l * E,
                        C = i * h + u * d + f * E,
                        g = n * p + a * m + c * _,
                        v = o * p + s * m + l * _,
                        N = i * p + u * m + f * _,
                        I = n * y + a * R + c * T,
                        O = o * y + s * R + l * T,
                        M = i * y + u * R + f * T;
                    return (
                        (r[0] = A),
                        (r[1] = S),
                        (r[2] = C),
                        (r[3] = 0),
                        (r[4] = g),
                        (r[5] = v),
                        (r[6] = N),
                        (r[7] = 0),
                        (r[8] = I),
                        (r[9] = O),
                        (r[10] = M),
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
                        i = t.z,
                        a = n * e[0] + o * e[4] + i * e[8] + e[12],
                        s = n * e[1] + o * e[5] + i * e[9] + e[13],
                        u = n * e[2] + o * e[6] + i * e[10] + e[14];
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
                        (r[12] = a),
                        (r[13] = s),
                        (r[14] = u),
                        (r[15] = e[15]),
                        r
                    );
                });
            var _ = new e();
            (l.multiplyByUniformScale = function(e, t, r) {
                return (_.x = t), (_.y = t), (_.z = t), l.multiplyByScale(e, _, r);
            }),
                (l.multiplyByScale = function(e, t, r) {
                    var n = t.x,
                        o = t.y,
                        i = t.z;
                    return 1 === n && 1 === o && 1 === i
                        ? l.clone(e, r)
                        : ((r[0] = n * e[0]),
                          (r[1] = n * e[1]),
                          (r[2] = n * e[2]),
                          (r[3] = 0),
                          (r[4] = o * e[4]),
                          (r[5] = o * e[5]),
                          (r[6] = o * e[6]),
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
                        o = t.y,
                        i = t.z,
                        a = t.w,
                        s = e[0] * n + e[4] * o + e[8] * i + e[12] * a,
                        u = e[1] * n + e[5] * o + e[9] * i + e[13] * a,
                        c = e[2] * n + e[6] * o + e[10] * i + e[14] * a,
                        l = e[3] * n + e[7] * o + e[11] * i + e[15] * a;
                    return (r.x = s), (r.y = u), (r.z = c), (r.w = l), r;
                }),
                (l.multiplyByPointAsVector = function(e, t, r) {
                    var n = t.x,
                        o = t.y,
                        i = t.z,
                        a = e[0] * n + e[4] * o + e[8] * i,
                        s = e[1] * n + e[5] * o + e[9] * i,
                        u = e[2] * n + e[6] * o + e[10] * i;
                    return (r.x = a), (r.y = s), (r.z = u), r;
                }),
                (l.multiplyByPoint = function(e, t, r) {
                    var n = t.x,
                        o = t.y,
                        i = t.z,
                        a = e[0] * n + e[4] * o + e[8] * i + e[12],
                        s = e[1] * n + e[5] * o + e[9] * i + e[13],
                        u = e[2] * n + e[6] * o + e[10] * i + e[14];
                    return (r.x = a), (r.y = s), (r.z = u), r;
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
                        i = e[6],
                        a = e[7],
                        s = e[11];
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
                        (t[12] = o),
                        (t[13] = a),
                        (t[14] = s),
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
            var y = new u(),
                R = new u(),
                T = new t(),
                A = new t(0, 0, 0, 1);
            return (
                (l.inverse = function(e, r) {
                    var n = e[0],
                        o = e[4],
                        i = e[8],
                        a = e[12],
                        f = e[1],
                        h = e[5],
                        d = e[9],
                        E = e[13],
                        p = e[2],
                        m = e[6],
                        _ = e[10],
                        S = e[14],
                        C = e[3],
                        g = e[7],
                        v = e[11],
                        N = e[15],
                        I = _ * N,
                        O = S * v,
                        M = m * N,
                        w = S * g,
                        P = m * v,
                        D = _ * g,
                        F = p * N,
                        U = S * C,
                        x = p * v,
                        L = _ * C,
                        b = p * g,
                        B = m * C,
                        q = I * h + w * d + P * E - (O * h + M * d + D * E),
                        z = O * f + F * d + L * E - (I * f + U * d + x * E),
                        G = M * f + U * h + b * E - (w * f + F * h + B * E),
                        V = D * f + x * h + B * d - (P * f + L * h + b * d),
                        H = O * o + M * i + D * a - (I * o + w * i + P * a),
                        W = I * n + U * i + x * a - (O * n + F * i + L * a),
                        X = w * n + F * o + B * a - (M * n + U * o + b * a),
                        Y = P * n + L * o + b * i - (D * n + x * o + B * i);
                    (I = i * E),
                        (O = a * d),
                        (M = o * E),
                        (w = a * h),
                        (P = o * d),
                        (D = i * h),
                        (F = n * E),
                        (U = a * f),
                        (x = n * d),
                        (L = i * f),
                        (b = n * h),
                        (B = o * f);
                    var k = I * g + w * v + P * N - (O * g + M * v + D * N),
                        j = O * C + F * v + L * N - (I * C + U * v + x * N),
                        K = M * C + U * g + b * N - (w * C + F * g + B * N),
                        Z = D * C + x * g + B * v - (P * C + L * g + b * v),
                        Q = M * _ + D * S + O * m - (P * S + I * m + w * _),
                        J = x * S + I * p + U * _ - (F * _ + L * S + O * p),
                        $ = F * m + B * S + w * p - (b * S + M * p + U * m),
                        ee = b * _ + P * p + L * m - (x * m + B * _ + D * p),
                        te = n * q + o * z + i * G + a * V;
                    if (Math.abs(te) < s.EPSILON21) {
                        if (
                            u.equalsEpsilon(l.getRotation(e, y), R, s.EPSILON7) &&
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
                        (r[0] = q * te),
                        (r[1] = z * te),
                        (r[2] = G * te),
                        (r[3] = V * te),
                        (r[4] = H * te),
                        (r[5] = W * te),
                        (r[6] = X * te),
                        (r[7] = Y * te),
                        (r[8] = k * te),
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
                        i = e[4],
                        a = e[5],
                        s = e[6],
                        u = e[8],
                        c = e[9],
                        l = e[10],
                        f = e[12],
                        h = e[13],
                        d = e[14],
                        E = -r * f - n * h - o * d,
                        p = -i * f - a * h - s * d,
                        m = -u * f - c * h - l * d;
                    return (
                        (t[0] = r),
                        (t[1] = i),
                        (t[2] = u),
                        (t[3] = 0),
                        (t[4] = n),
                        (t[5] = a),
                        (t[6] = c),
                        (t[7] = 0),
                        (t[8] = o),
                        (t[9] = s),
                        (t[10] = l),
                        (t[11] = 0),
                        (t[12] = E),
                        (t[13] = p),
                        (t[14] = m),
                        (t[15] = 1),
                        t
                    );
                }),
                (l.IDENTITY = a(new l(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1))),
                (l.ZERO = a(new l(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0))),
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
        define("Core/Rectangle", [
            "./Cartographic",
            "./Check",
            "./defaultValue",
            "./defined",
            "./defineProperties",
            "./Ellipsoid",
            "./freezeObject",
            "./Math"
        ], function(e, t, r, n, o, i, a, s) {
            "use strict";
            function u(e, t, n, o) {
                (this.west = r(e, 0)),
                    (this.south = r(t, 0)),
                    (this.east = r(n, 0)),
                    (this.north = r(o, 0));
            }
            o(u.prototype, {
                width: {
                    get: function() {
                        return u.computeWidth(this);
                    }
                },
                height: {
                    get: function() {
                        return u.computeHeight(this);
                    }
                }
            }),
                (u.packedLength = 4),
                (u.pack = function(e, t, n) {
                    return (
                        (n = r(n, 0)),
                        (t[n++] = e.west),
                        (t[n++] = e.south),
                        (t[n++] = e.east),
                        (t[n] = e.north),
                        t
                    );
                }),
                (u.unpack = function(e, t, o) {
                    return (
                        (t = r(t, 0)),
                        n(o) || (o = new u()),
                        (o.west = e[t++]),
                        (o.south = e[t++]),
                        (o.east = e[t++]),
                        (o.north = e[t]),
                        o
                    );
                }),
                (u.computeWidth = function(e) {
                    var t = e.east,
                        r = e.west;
                    return t < r && (t += s.TWO_PI), t - r;
                }),
                (u.computeHeight = function(e) {
                    return e.north - e.south;
                }),
                (u.fromDegrees = function(e, t, o, i, a) {
                    return (
                        (e = s.toRadians(r(e, 0))),
                        (t = s.toRadians(r(t, 0))),
                        (o = s.toRadians(r(o, 0))),
                        (i = s.toRadians(r(i, 0))),
                        n(a)
                            ? ((a.west = e), (a.south = t), (a.east = o), (a.north = i), a)
                            : new u(e, t, o, i)
                    );
                }),
                (u.fromRadians = function(e, t, o, i, a) {
                    return n(a)
                        ? ((a.west = r(e, 0)),
                          (a.south = r(t, 0)),
                          (a.east = r(o, 0)),
                          (a.north = r(i, 0)),
                          a)
                        : new u(e, t, o, i);
                }),
                (u.fromCartographicArray = function(e, t) {
                    for (
                        var r = Number.MAX_VALUE,
                            o = -Number.MAX_VALUE,
                            i = Number.MAX_VALUE,
                            a = -Number.MAX_VALUE,
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
                        var E = d.longitude >= 0 ? d.longitude : d.longitude + s.TWO_PI;
                        (i = Math.min(i, E)), (a = Math.max(a, E));
                    }
                    return (
                        o - r > a - i &&
                            ((r = i),
                            (o = a),
                            o > s.PI && (o -= s.TWO_PI),
                            r > s.PI && (r -= s.TWO_PI)),
                        n(t)
                            ? ((t.west = r), (t.south = c), (t.east = o), (t.north = l), t)
                            : new u(r, c, o, l)
                    );
                }),
                (u.fromCartesianArray = function(e, t, o) {
                    t = r(t, i.WGS84);
                    for (
                        var a = Number.MAX_VALUE,
                            c = -Number.MAX_VALUE,
                            l = Number.MAX_VALUE,
                            f = -Number.MAX_VALUE,
                            h = Number.MAX_VALUE,
                            d = -Number.MAX_VALUE,
                            E = 0,
                            p = e.length;
                        E < p;
                        E++
                    ) {
                        var m = t.cartesianToCartographic(e[E]);
                        (a = Math.min(a, m.longitude)),
                            (c = Math.max(c, m.longitude)),
                            (h = Math.min(h, m.latitude)),
                            (d = Math.max(d, m.latitude));
                        var _ = m.longitude >= 0 ? m.longitude : m.longitude + s.TWO_PI;
                        (l = Math.min(l, _)), (f = Math.max(f, _));
                    }
                    return (
                        c - a > f - l &&
                            ((a = l),
                            (c = f),
                            c > s.PI && (c -= s.TWO_PI),
                            a > s.PI && (a -= s.TWO_PI)),
                        n(o)
                            ? ((o.west = a), (o.south = h), (o.east = c), (o.north = d), o)
                            : new u(a, h, c, d)
                    );
                }),
                (u.clone = function(e, t) {
                    if (n(e))
                        return n(t)
                            ? ((t.west = e.west),
                              (t.south = e.south),
                              (t.east = e.east),
                              (t.north = e.north),
                              t)
                            : new u(e.west, e.south, e.east, e.north);
                }),
                (u.equalsEpsilon = function(e, t, r) {
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
                (u.prototype.clone = function(e) {
                    return u.clone(this, e);
                }),
                (u.prototype.equals = function(e) {
                    return u.equals(this, e);
                }),
                (u.equals = function(e, t) {
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
                (u.prototype.equalsEpsilon = function(e, t) {
                    return u.equalsEpsilon(this, e, t);
                }),
                (u.validate = function(e) {}),
                (u.southwest = function(t, r) {
                    return n(r)
                        ? ((r.longitude = t.west), (r.latitude = t.south), (r.height = 0), r)
                        : new e(t.west, t.south);
                }),
                (u.northwest = function(t, r) {
                    return n(r)
                        ? ((r.longitude = t.west), (r.latitude = t.north), (r.height = 0), r)
                        : new e(t.west, t.north);
                }),
                (u.northeast = function(t, r) {
                    return n(r)
                        ? ((r.longitude = t.east), (r.latitude = t.north), (r.height = 0), r)
                        : new e(t.east, t.north);
                }),
                (u.southeast = function(t, r) {
                    return n(r)
                        ? ((r.longitude = t.east), (r.latitude = t.south), (r.height = 0), r)
                        : new e(t.east, t.south);
                }),
                (u.center = function(t, r) {
                    var o = t.east,
                        i = t.west;
                    o < i && (o += s.TWO_PI);
                    var a = s.negativePiToPi(0.5 * (i + o)),
                        u = 0.5 * (t.south + t.north);
                    return n(r)
                        ? ((r.longitude = a), (r.latitude = u), (r.height = 0), r)
                        : new e(a, u);
                }),
                (u.intersection = function(e, t, r) {
                    var o = e.east,
                        i = e.west,
                        a = t.east,
                        c = t.west;
                    o < i && a > 0 ? (o += s.TWO_PI) : a < c && o > 0 && (a += s.TWO_PI),
                        o < i && c < 0 ? (c += s.TWO_PI) : a < c && i < 0 && (i += s.TWO_PI);
                    var l = s.negativePiToPi(Math.max(i, c)),
                        f = s.negativePiToPi(Math.min(o, a));
                    if (!((e.west < e.east || t.west < t.east) && f <= l)) {
                        var h = Math.max(e.south, t.south),
                            d = Math.min(e.north, t.north);
                        if (!(h >= d))
                            return n(r)
                                ? ((r.west = l), (r.south = h), (r.east = f), (r.north = d), r)
                                : new u(l, h, f, d);
                    }
                }),
                (u.simpleIntersection = function(e, t, r) {
                    var o = Math.max(e.west, t.west),
                        i = Math.max(e.south, t.south),
                        a = Math.min(e.east, t.east),
                        s = Math.min(e.north, t.north);
                    if (!(i >= s || o >= a))
                        return n(r)
                            ? ((r.west = o), (r.south = i), (r.east = a), (r.north = s), r)
                            : new u(o, i, a, s);
                }),
                (u.union = function(e, t, r) {
                    n(r) || (r = new u());
                    var o = e.east,
                        i = e.west,
                        a = t.east,
                        c = t.west;
                    o < i && a > 0 ? (o += s.TWO_PI) : a < c && o > 0 && (a += s.TWO_PI),
                        o < i && c < 0 ? (c += s.TWO_PI) : a < c && i < 0 && (i += s.TWO_PI);
                    var l = s.convertLongitudeRange(Math.min(i, c)),
                        f = s.convertLongitudeRange(Math.max(o, a));
                    return (
                        (r.west = l),
                        (r.south = Math.min(e.south, t.south)),
                        (r.east = f),
                        (r.north = Math.max(e.north, t.north)),
                        r
                    );
                }),
                (u.expand = function(e, t, r) {
                    return (
                        n(r) || (r = new u()),
                        (r.west = Math.min(e.west, t.longitude)),
                        (r.south = Math.min(e.south, t.latitude)),
                        (r.east = Math.max(e.east, t.longitude)),
                        (r.north = Math.max(e.north, t.latitude)),
                        r
                    );
                }),
                (u.contains = function(e, t) {
                    var r = t.longitude,
                        n = t.latitude,
                        o = e.west,
                        i = e.east;
                    return (
                        i < o && ((i += s.TWO_PI), r < 0 && (r += s.TWO_PI)),
                        (r > o || s.equalsEpsilon(r, o, s.EPSILON14)) &&
                            (r < i || s.equalsEpsilon(r, i, s.EPSILON14)) &&
                            n >= e.south &&
                            n <= e.north
                    );
                });
            var c = new e();
            return (
                (u.subsample = function(e, t, o, a) {
                    (t = r(t, i.WGS84)), (o = r(o, 0)), n(a) || (a = []);
                    var l = 0,
                        f = e.north,
                        h = e.south,
                        d = e.east,
                        E = e.west,
                        p = c;
                    (p.height = o),
                        (p.longitude = E),
                        (p.latitude = f),
                        (a[l] = t.cartographicToCartesian(p, a[l])),
                        l++,
                        (p.longitude = d),
                        (a[l] = t.cartographicToCartesian(p, a[l])),
                        l++,
                        (p.latitude = h),
                        (a[l] = t.cartographicToCartesian(p, a[l])),
                        l++,
                        (p.longitude = E),
                        (a[l] = t.cartographicToCartesian(p, a[l])),
                        l++,
                        (p.latitude = f < 0 ? f : h > 0 ? h : 0);
                    for (var m = 1; m < 8; ++m)
                        (p.longitude = -Math.PI + m * s.PI_OVER_TWO),
                            u.contains(e, p) && ((a[l] = t.cartographicToCartesian(p, a[l])), l++);
                    return (
                        0 === p.latitude &&
                            ((p.longitude = E),
                            (a[l] = t.cartographicToCartesian(p, a[l])),
                            l++,
                            (p.longitude = d),
                            (a[l] = t.cartographicToCartesian(p, a[l])),
                            l++),
                        (a.length = l),
                        a
                    );
                }),
                (u.MAX_VALUE = a(new u(-Math.PI, -s.PI_OVER_TWO, Math.PI, s.PI_OVER_TWO))),
                u
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
        ], function(e, t, r, n, o, i, a, s, u, c, l, f, h) {
            "use strict";
            function d(t, r) {
                (this.center = e.clone(n(t, e.ZERO))), (this.radius = n(r, 0));
            }
            var E = new e(),
                p = new e(),
                m = new e(),
                _ = new e(),
                y = new e(),
                R = new e(),
                T = new e(),
                A = new e(),
                S = new e(),
                C = new e(),
                g = new e(),
                v = new e(),
                N = (4 / 3) * c.PI;
            d.fromPoints = function(t, r) {
                if ((o(r) || (r = new d()), !o(t) || 0 === t.length))
                    return (r.center = e.clone(e.ZERO, r.center)), (r.radius = 0), r;
                var n,
                    i = e.clone(t[0], T),
                    a = e.clone(i, E),
                    s = e.clone(i, p),
                    u = e.clone(i, m),
                    c = e.clone(i, _),
                    l = e.clone(i, y),
                    f = e.clone(i, R),
                    h = t.length;
                for (n = 1; n < h; n++) {
                    e.clone(t[n], i);
                    var N = i.x,
                        I = i.y,
                        O = i.z;
                    N < a.x && e.clone(i, a),
                        N > c.x && e.clone(i, c),
                        I < s.y && e.clone(i, s),
                        I > l.y && e.clone(i, l),
                        O < u.z && e.clone(i, u),
                        O > f.z && e.clone(i, f);
                }
                var M = e.magnitudeSquared(e.subtract(c, a, A)),
                    w = e.magnitudeSquared(e.subtract(l, s, A)),
                    P = e.magnitudeSquared(e.subtract(f, u, A)),
                    D = a,
                    F = c,
                    U = M;
                w > U && ((U = w), (D = s), (F = l)), P > U && ((U = P), (D = u), (F = f));
                var x = S;
                (x.x = 0.5 * (D.x + F.x)), (x.y = 0.5 * (D.y + F.y)), (x.z = 0.5 * (D.z + F.z));
                var L = e.magnitudeSquared(e.subtract(F, x, A)),
                    b = Math.sqrt(L),
                    B = C;
                (B.x = a.x), (B.y = s.y), (B.z = u.z);
                var q = g;
                (q.x = c.x), (q.y = l.y), (q.z = f.z);
                var z = e.midpoint(B, q, v),
                    G = 0;
                for (n = 0; n < h; n++) {
                    e.clone(t[n], i);
                    var V = e.magnitude(e.subtract(i, z, A));
                    V > G && (G = V);
                    var H = e.magnitudeSquared(e.subtract(i, x, A));
                    if (H > L) {
                        var W = Math.sqrt(H);
                        (b = 0.5 * (b + W)), (L = b * b);
                        var X = W - b;
                        (x.x = (b * x.x + X * i.x) / W),
                            (x.y = (b * x.y + X * i.y) / W),
                            (x.z = (b * x.z + X * i.z) / W);
                    }
                }
                return (
                    b < G
                        ? (e.clone(x, r.center), (r.radius = b))
                        : (e.clone(z, r.center), (r.radius = G)),
                    r
                );
            };
            var I = new a(),
                O = new e(),
                M = new e(),
                w = new t(),
                P = new t();
            (d.fromRectangle2D = function(e, t, r) {
                return d.fromRectangleWithHeights2D(e, t, 0, 0, r);
            }),
                (d.fromRectangleWithHeights2D = function(t, r, i, a, s) {
                    if ((o(s) || (s = new d()), !o(t)))
                        return (s.center = e.clone(e.ZERO, s.center)), (s.radius = 0), s;
                    (r = n(r, I)),
                        h.southwest(t, w),
                        (w.height = i),
                        h.northeast(t, P),
                        (P.height = a);
                    var u = r.project(w, O),
                        c = r.project(P, M),
                        l = c.x - u.x,
                        f = c.y - u.y,
                        E = c.z - u.z;
                    s.radius = 0.5 * Math.sqrt(l * l + f * f + E * E);
                    var p = s.center;
                    return (p.x = u.x + 0.5 * l), (p.y = u.y + 0.5 * f), (p.z = u.z + 0.5 * E), s;
                });
            var D = [];
            (d.fromRectangle3D = function(t, r, a, s) {
                if (((r = n(r, i.WGS84)), (a = n(a, 0)), o(s) || (s = new d()), !o(t)))
                    return (s.center = e.clone(e.ZERO, s.center)), (s.radius = 0), s;
                var u = h.subsample(t, r, a, D);
                return d.fromPoints(u, s);
            }),
                (d.fromVertices = function(t, r, i, a) {
                    if ((o(a) || (a = new d()), !o(t) || 0 === t.length))
                        return (a.center = e.clone(e.ZERO, a.center)), (a.radius = 0), a;
                    (r = n(r, e.ZERO)), (i = n(i, 3));
                    var s = T;
                    (s.x = t[0] + r.x), (s.y = t[1] + r.y), (s.z = t[2] + r.z);
                    var u,
                        c = e.clone(s, E),
                        l = e.clone(s, p),
                        f = e.clone(s, m),
                        h = e.clone(s, _),
                        N = e.clone(s, y),
                        I = e.clone(s, R),
                        O = t.length;
                    for (u = 0; u < O; u += i) {
                        var M = t[u] + r.x,
                            w = t[u + 1] + r.y,
                            P = t[u + 2] + r.z;
                        (s.x = M),
                            (s.y = w),
                            (s.z = P),
                            M < c.x && e.clone(s, c),
                            M > h.x && e.clone(s, h),
                            w < l.y && e.clone(s, l),
                            w > N.y && e.clone(s, N),
                            P < f.z && e.clone(s, f),
                            P > I.z && e.clone(s, I);
                    }
                    var D = e.magnitudeSquared(e.subtract(h, c, A)),
                        F = e.magnitudeSquared(e.subtract(N, l, A)),
                        U = e.magnitudeSquared(e.subtract(I, f, A)),
                        x = c,
                        L = h,
                        b = D;
                    F > b && ((b = F), (x = l), (L = N)), U > b && ((b = U), (x = f), (L = I));
                    var B = S;
                    (B.x = 0.5 * (x.x + L.x)), (B.y = 0.5 * (x.y + L.y)), (B.z = 0.5 * (x.z + L.z));
                    var q = e.magnitudeSquared(e.subtract(L, B, A)),
                        z = Math.sqrt(q),
                        G = C;
                    (G.x = c.x), (G.y = l.y), (G.z = f.z);
                    var V = g;
                    (V.x = h.x), (V.y = N.y), (V.z = I.z);
                    var H = e.midpoint(G, V, v),
                        W = 0;
                    for (u = 0; u < O; u += i) {
                        (s.x = t[u] + r.x), (s.y = t[u + 1] + r.y), (s.z = t[u + 2] + r.z);
                        var X = e.magnitude(e.subtract(s, H, A));
                        X > W && (W = X);
                        var Y = e.magnitudeSquared(e.subtract(s, B, A));
                        if (Y > q) {
                            var k = Math.sqrt(Y);
                            (z = 0.5 * (z + k)), (q = z * z);
                            var j = k - z;
                            (B.x = (z * B.x + j * s.x) / k),
                                (B.y = (z * B.y + j * s.y) / k),
                                (B.z = (z * B.z + j * s.z) / k);
                        }
                    }
                    return (
                        z < W
                            ? (e.clone(B, a.center), (a.radius = z))
                            : (e.clone(H, a.center), (a.radius = W)),
                        a
                    );
                }),
                (d.fromEncodedCartesianVertices = function(t, r, n) {
                    if (
                        (o(n) || (n = new d()),
                        !o(t) || !o(r) || t.length !== r.length || 0 === t.length)
                    )
                        return (n.center = e.clone(e.ZERO, n.center)), (n.radius = 0), n;
                    var i = T;
                    (i.x = t[0] + r[0]), (i.y = t[1] + r[1]), (i.z = t[2] + r[2]);
                    var a,
                        s = e.clone(i, E),
                        u = e.clone(i, p),
                        c = e.clone(i, m),
                        l = e.clone(i, _),
                        f = e.clone(i, y),
                        h = e.clone(i, R),
                        N = t.length;
                    for (a = 0; a < N; a += 3) {
                        var I = t[a] + r[a],
                            O = t[a + 1] + r[a + 1],
                            M = t[a + 2] + r[a + 2];
                        (i.x = I),
                            (i.y = O),
                            (i.z = M),
                            I < s.x && e.clone(i, s),
                            I > l.x && e.clone(i, l),
                            O < u.y && e.clone(i, u),
                            O > f.y && e.clone(i, f),
                            M < c.z && e.clone(i, c),
                            M > h.z && e.clone(i, h);
                    }
                    var w = e.magnitudeSquared(e.subtract(l, s, A)),
                        P = e.magnitudeSquared(e.subtract(f, u, A)),
                        D = e.magnitudeSquared(e.subtract(h, c, A)),
                        F = s,
                        U = l,
                        x = w;
                    P > x && ((x = P), (F = u), (U = f)), D > x && ((x = D), (F = c), (U = h));
                    var L = S;
                    (L.x = 0.5 * (F.x + U.x)), (L.y = 0.5 * (F.y + U.y)), (L.z = 0.5 * (F.z + U.z));
                    var b = e.magnitudeSquared(e.subtract(U, L, A)),
                        B = Math.sqrt(b),
                        q = C;
                    (q.x = s.x), (q.y = u.y), (q.z = c.z);
                    var z = g;
                    (z.x = l.x), (z.y = f.y), (z.z = h.z);
                    var G = e.midpoint(q, z, v),
                        V = 0;
                    for (a = 0; a < N; a += 3) {
                        (i.x = t[a] + r[a]),
                            (i.y = t[a + 1] + r[a + 1]),
                            (i.z = t[a + 2] + r[a + 2]);
                        var H = e.magnitude(e.subtract(i, G, A));
                        H > V && (V = H);
                        var W = e.magnitudeSquared(e.subtract(i, L, A));
                        if (W > b) {
                            var X = Math.sqrt(W);
                            (B = 0.5 * (B + X)), (b = B * B);
                            var Y = X - B;
                            (L.x = (B * L.x + Y * i.x) / X),
                                (L.y = (B * L.y + Y * i.y) / X),
                                (L.z = (B * L.z + Y * i.z) / X);
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
                    o(n) || (n = new d());
                    var i = e.midpoint(t, r, n.center);
                    return (n.radius = e.distance(i, r)), n;
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
                var i,
                    a = [];
                for (i = 0; i < n; i++) a.push(t[i].center);
                r = d.fromPoints(a, r);
                var s = r.center,
                    u = r.radius;
                for (i = 0; i < n; i++) {
                    var c = t[i];
                    u = Math.max(u, e.distance(s, c.center, F) + c.radius);
                }
                return (r.radius = u), r;
            };
            var U = new e(),
                x = new e(),
                L = new e();
            (d.fromOrientedBoundingBox = function(t, r) {
                o(r) || (r = new d());
                var n = t.halfAxes,
                    i = l.getColumn(n, 0, U),
                    a = l.getColumn(n, 1, x),
                    s = l.getColumn(n, 2, L);
                return (
                    e.add(i, a, i),
                    e.add(i, s, i),
                    (r.center = e.clone(t.center, r.center)),
                    (r.radius = e.magnitude(i)),
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
                    var i = r.center;
                    return (i.x = e[t++]), (i.y = e[t++]), (i.z = e[t++]), (r.radius = e[t]), r;
                });
            var b = new e(),
                B = new e();
            d.union = function(t, r, n) {
                o(n) || (n = new d());
                var i = t.center,
                    a = t.radius,
                    s = r.center,
                    u = r.radius,
                    c = e.subtract(s, i, b),
                    l = e.magnitude(c);
                if (a >= l + u) return t.clone(n), n;
                if (u >= l + a) return r.clone(n), n;
                var f = 0.5 * (a + l + u),
                    h = e.multiplyByScalar(c, (-a + f) / l, B);
                return e.add(h, i, h), e.clone(h, n.center), (n.radius = f), n;
            };
            var q = new e();
            (d.expand = function(t, r, n) {
                n = d.clone(t, n);
                var o = e.magnitude(e.subtract(r, n.center, q));
                return o > n.radius && (n.radius = o), n;
            }),
                (d.intersectPlane = function(t, r) {
                    var n = t.center,
                        o = t.radius,
                        i = r.normal,
                        a = e.dot(i, n) + r.distance;
                    return a < -o ? s.OUTSIDE : a < o ? s.INTERSECTING : s.INSIDE;
                }),
                (d.transform = function(e, t, r) {
                    return (
                        o(r) || (r = new d()),
                        (r.center = f.multiplyByPoint(t, e.center, r.center)),
                        (r.radius = f.getMaximumScale(t) * e.radius),
                        r
                    );
                });
            var z = new e();
            (d.distanceSquaredTo = function(t, r) {
                var n = e.subtract(t.center, r, z);
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
            d.computePlaneDistances = function(t, r, n, i) {
                o(i) || (i = new u());
                var a = e.subtract(t.center, r, G),
                    s = e.dot(n, a);
                return (i.start = s - t.radius), (i.stop = s + t.radius), i;
            };
            for (
                var V = new e(),
                    H = new e(),
                    W = new e(),
                    X = new e(),
                    Y = new e(),
                    k = new t(),
                    j = new Array(8),
                    K = 0;
                K < 8;
                ++K
            )
                j[K] = new e();
            var Z = new a();
            return (
                (d.projectTo2D = function(t, r, o) {
                    r = n(r, Z);
                    var i = r.ellipsoid,
                        a = t.center,
                        s = t.radius,
                        u = i.geodeticSurfaceNormal(a, V),
                        c = e.cross(e.UNIT_Z, u, H);
                    e.normalize(c, c);
                    var l = e.cross(u, c, W);
                    e.normalize(l, l),
                        e.multiplyByScalar(u, s, u),
                        e.multiplyByScalar(l, s, l),
                        e.multiplyByScalar(c, s, c);
                    var f = e.negate(l, Y),
                        h = e.negate(c, X),
                        E = j,
                        p = E[0];
                    e.add(u, l, p),
                        e.add(p, c, p),
                        (p = E[1]),
                        e.add(u, l, p),
                        e.add(p, h, p),
                        (p = E[2]),
                        e.add(u, f, p),
                        e.add(p, h, p),
                        (p = E[3]),
                        e.add(u, f, p),
                        e.add(p, c, p),
                        e.negate(u, u),
                        (p = E[4]),
                        e.add(u, l, p),
                        e.add(p, c, p),
                        (p = E[5]),
                        e.add(u, l, p),
                        e.add(p, h, p),
                        (p = E[6]),
                        e.add(u, f, p),
                        e.add(p, h, p),
                        (p = E[7]),
                        e.add(u, f, p),
                        e.add(p, c, p);
                    for (var m = E.length, _ = 0; _ < m; ++_) {
                        var y = E[_];
                        e.add(a, y, y);
                        var R = i.cartesianToCartographic(y, k);
                        r.project(R, y);
                    }
                    (o = d.fromPoints(E, o)), (a = o.center);
                    var T = a.x,
                        A = a.y,
                        S = a.z;
                    return (a.x = S), (a.y = T), (a.z = A), o;
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
                    return N * e * e * e;
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
                        var o, i = ["webkit", "moz", "o", "ms", "khtml"], a = 0, s = i.length;
                        a < s;
                        ++a
                    ) {
                        var u = i[a];
                        (o = u + "RequestFullscreen"),
                            "function" == typeof t[o]
                                ? ((n.requestFullscreen = o), (r = !0))
                                : ((o = u + "RequestFullScreen"),
                                  "function" == typeof t[o] &&
                                      ((n.requestFullscreen = o), (r = !0))),
                            (o = u + "ExitFullscreen"),
                            "function" == typeof document[o]
                                ? (n.exitFullscreen = o)
                                : ((o = u + "CancelFullScreen"),
                                  "function" == typeof document[o] && (n.exitFullscreen = o)),
                            (o = u + "FullscreenEnabled"),
                            void 0 !== document[o]
                                ? (n.fullscreenEnabled = o)
                                : ((o = u + "FullScreenEnabled"),
                                  void 0 !== document[o] && (n.fullscreenEnabled = o)),
                            (o = u + "FullscreenElement"),
                            void 0 !== document[o]
                                ? (n.fullscreenElement = o)
                                : ((o = u + "FullScreenElement"),
                                  void 0 !== document[o] && (n.fullscreenElement = o)),
                            (o = u + "fullscreenchange"),
                            void 0 !== document["on" + o] &&
                                ("ms" === u && (o = "MSFullscreenChange"),
                                (n.fullscreenchange = o)),
                            (o = u + "fullscreenerror"),
                            void 0 !== document["on" + o] &&
                                ("ms" === u && (o = "MSFullscreenError"), (n.fullscreenerror = o));
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
                    null !== e && ((A = !0), (S = n(e[1])));
                }
                return A;
            }
            function i() {
                return o() && S;
            }
            function a() {
                if (!t(C) && ((C = !1), !o() && !h() && / Safari\/[\.0-9]+/.test(T.userAgent))) {
                    var e = / Version\/([\.0-9]+)/.exec(T.userAgent);
                    null !== e && ((C = !0), (g = n(e[1])));
                }
                return C;
            }
            function s() {
                return a() && g;
            }
            function u() {
                if (!t(v)) {
                    v = !1;
                    var e = / AppleWebKit\/([\.0-9]+)(\+?)/.exec(T.userAgent);
                    null !== e && ((v = !0), (N = n(e[1])), (N.isNightly = !!e[2]));
                }
                return v;
            }
            function c() {
                return u() && N;
            }
            function l() {
                if (!t(I)) {
                    I = !1;
                    var e;
                    "Microsoft Internet Explorer" === T.appName
                        ? null !== (e = /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T.userAgent)) &&
                          ((I = !0), (O = n(e[1])))
                        : "Netscape" === T.appName &&
                          null !== (e = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T.userAgent)) &&
                          ((I = !0), (O = n(e[1])));
                }
                return I;
            }
            function f() {
                return l() && O;
            }
            function h() {
                if (!t(M)) {
                    M = !1;
                    var e = / Edge\/([\.0-9]+)/.exec(T.userAgent);
                    null !== e && ((M = !0), (w = n(e[1])));
                }
                return M;
            }
            function d() {
                return h() && w;
            }
            function E() {
                if (!t(P)) {
                    P = !1;
                    var e = /Firefox\/([\.0-9]+)/.exec(T.userAgent);
                    null !== e && ((P = !0), (D = n(e[1])));
                }
                return P;
            }
            function p() {
                return t(F) || (F = /Windows/i.test(T.appVersion)), F;
            }
            function m() {
                return E() && D;
            }
            function _() {
                return (
                    t(U) ||
                        (U =
                            !E() &&
                            "undefined" != typeof PointerEvent &&
                            (!t(T.pointerEnabled) || T.pointerEnabled)),
                    U
                );
            }
            function y() {
                if (!t(L)) {
                    var e = document.createElement("canvas");
                    e.setAttribute(
                        "style",
                        "image-rendering: -moz-crisp-edges;image-rendering: pixelated;"
                    );
                    var r = e.style.imageRendering;
                    (L = t(r) && "" !== r), L && (x = r);
                }
                return L;
            }
            function R() {
                return y() ? x : void 0;
            }
            var T;
            T = "undefined" != typeof navigator ? navigator : {};
            var A,
                S,
                C,
                g,
                v,
                N,
                I,
                O,
                M,
                w,
                P,
                D,
                F,
                U,
                x,
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
                chromeVersion: i,
                isSafari: a,
                safariVersion: s,
                isWebkit: u,
                webkitVersion: c,
                isInternetExplorer: l,
                internetExplorerVersion: f,
                isEdge: h,
                edgeVersion: d,
                isFirefox: E,
                firefoxVersion: m,
                isWindows: p,
                hardwareConcurrency: e(T.hardwareConcurrency, 3),
                supportsPointerEvents: _,
                supportsImageRenderingPixelated: y,
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
        ], function(e, t, r, n, o, i) {
            "use strict";
            function a(e, t, r) {
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
            function s(e, r, n, o) {
                (this.red = t(e, 1)),
                    (this.green = t(r, 1)),
                    (this.blue = t(n, 1)),
                    (this.alpha = t(o, 1));
            }
            (s.fromCartesian4 = function(e, t) {
                return r(t)
                    ? ((t.red = e.x), (t.green = e.y), (t.blue = e.z), (t.alpha = e.w), t)
                    : new s(e.x, e.y, e.z, e.w);
            }),
                (s.fromBytes = function(e, n, o, i, a) {
                    return (
                        (e = s.byteToFloat(t(e, 255))),
                        (n = s.byteToFloat(t(n, 255))),
                        (o = s.byteToFloat(t(o, 255))),
                        (i = s.byteToFloat(t(i, 255))),
                        r(a)
                            ? ((a.red = e), (a.green = n), (a.blue = o), (a.alpha = i), a)
                            : new s(e, n, o, i)
                    );
                }),
                (s.fromAlpha = function(e, t, n) {
                    return r(n)
                        ? ((n.red = e.red),
                          (n.green = e.green),
                          (n.blue = e.blue),
                          (n.alpha = t),
                          n)
                        : new s(e.red, e.green, e.blue, t);
                });
            var u, c, l;
            n.supportsTypedArrays() &&
                ((u = new ArrayBuffer(4)), (c = new Uint32Array(u)), (l = new Uint8Array(u))),
                (s.fromRgba = function(e, t) {
                    return (c[0] = e), s.fromBytes(l[0], l[1], l[2], l[3], t);
                }),
                (s.fromHsl = function(e, n, o, i, u) {
                    (e = t(e, 0) % 1), (n = t(n, 0)), (o = t(o, 0)), (i = t(i, 1));
                    var c = o,
                        l = o,
                        f = o;
                    if (0 !== n) {
                        var h;
                        h = o < 0.5 ? o * (1 + n) : o + n - o * n;
                        var d = 2 * o - h;
                        (c = a(d, h, e + 1 / 3)), (l = a(d, h, e)), (f = a(d, h, e - 1 / 3));
                    }
                    return r(u)
                        ? ((u.red = c), (u.green = l), (u.blue = f), (u.alpha = i), u)
                        : new s(c, l, f, i);
                }),
                (s.fromRandom = function(e, n) {
                    e = t(e, t.EMPTY_OBJECT);
                    var o = e.red;
                    if (!r(o)) {
                        var a = t(e.minimumRed, 0),
                            u = t(e.maximumRed, 1);
                        o = a + i.nextRandomNumber() * (u - a);
                    }
                    var c = e.green;
                    if (!r(c)) {
                        var l = t(e.minimumGreen, 0),
                            f = t(e.maximumGreen, 1);
                        c = l + i.nextRandomNumber() * (f - l);
                    }
                    var h = e.blue;
                    if (!r(h)) {
                        var d = t(e.minimumBlue, 0),
                            E = t(e.maximumBlue, 1);
                        h = d + i.nextRandomNumber() * (E - d);
                    }
                    var p = e.alpha;
                    if (!r(p)) {
                        var m = t(e.minimumAlpha, 0),
                            _ = t(e.maximumAlpha, 1);
                        p = m + i.nextRandomNumber() * (_ - m);
                    }
                    return r(n)
                        ? ((n.red = o), (n.green = c), (n.blue = h), (n.alpha = p), n)
                        : new s(o, c, h, p);
                });
            var f = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i,
                h = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i,
                d = /^rgba?\(\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)(?:\s*,\s*([0-9.]+))?\s*\)$/i,
                E = /^hsla?\(\s*([0-9.]+)\s*,\s*([0-9.]+%)\s*,\s*([0-9.]+%)(?:\s*,\s*([0-9.]+))?\s*\)$/i;
            return (
                (s.fromCssColorString = function(e, n) {
                    r(n) || (n = new s());
                    var o = s[e.toUpperCase()];
                    if (r(o)) return s.clone(o, n), n;
                    var i = f.exec(e);
                    return null !== i
                        ? ((n.red = parseInt(i[1], 16) / 15),
                          (n.green = parseInt(i[2], 16) / 15),
                          (n.blue = parseInt(i[3], 16) / 15),
                          (n.alpha = 1),
                          n)
                        : null !== (i = h.exec(e))
                        ? ((n.red = parseInt(i[1], 16) / 255),
                          (n.green = parseInt(i[2], 16) / 255),
                          (n.blue = parseInt(i[3], 16) / 255),
                          (n.alpha = 1),
                          n)
                        : null !== (i = d.exec(e))
                        ? ((n.red = parseFloat(i[1]) / ("%" === i[1].substr(-1) ? 100 : 255)),
                          (n.green = parseFloat(i[2]) / ("%" === i[2].substr(-1) ? 100 : 255)),
                          (n.blue = parseFloat(i[3]) / ("%" === i[3].substr(-1) ? 100 : 255)),
                          (n.alpha = parseFloat(t(i[4], "1.0"))),
                          n)
                        : null !== (i = E.exec(e))
                        ? s.fromHsl(
                              parseFloat(i[1]) / 360,
                              parseFloat(i[2]) / 100,
                              parseFloat(i[3]) / 100,
                              parseFloat(t(i[4], "1.0")),
                              n
                          )
                        : (n = void 0);
                }),
                (s.packedLength = 4),
                (s.pack = function(e, r, n) {
                    return (
                        (n = t(n, 0)),
                        (r[n++] = e.red),
                        (r[n++] = e.green),
                        (r[n++] = e.blue),
                        (r[n] = e.alpha),
                        r
                    );
                }),
                (s.unpack = function(e, n, o) {
                    return (
                        (n = t(n, 0)),
                        r(o) || (o = new s()),
                        (o.red = e[n++]),
                        (o.green = e[n++]),
                        (o.blue = e[n++]),
                        (o.alpha = e[n]),
                        o
                    );
                }),
                (s.byteToFloat = function(e) {
                    return e / 255;
                }),
                (s.floatToByte = function(e) {
                    return 1 === e ? 255 : (256 * e) | 0;
                }),
                (s.clone = function(e, t) {
                    if (r(e))
                        return r(t)
                            ? ((t.red = e.red),
                              (t.green = e.green),
                              (t.blue = e.blue),
                              (t.alpha = e.alpha),
                              t)
                            : new s(e.red, e.green, e.blue, e.alpha);
                }),
                (s.equals = function(e, t) {
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
                (s.equalsArray = function(e, t, r) {
                    return (
                        e.red === t[r] &&
                        e.green === t[r + 1] &&
                        e.blue === t[r + 2] &&
                        e.alpha === t[r + 3]
                    );
                }),
                (s.prototype.clone = function(e) {
                    return s.clone(this, e);
                }),
                (s.prototype.equals = function(e) {
                    return s.equals(this, e);
                }),
                (s.prototype.equalsEpsilon = function(e, t) {
                    return (
                        this === e ||
                        (r(e) &&
                            Math.abs(this.red - e.red) <= t &&
                            Math.abs(this.green - e.green) <= t &&
                            Math.abs(this.blue - e.blue) <= t &&
                            Math.abs(this.alpha - e.alpha) <= t)
                    );
                }),
                (s.prototype.toString = function() {
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
                (s.prototype.toCssColorString = function() {
                    var e = s.floatToByte(this.red),
                        t = s.floatToByte(this.green),
                        r = s.floatToByte(this.blue);
                    return 1 === this.alpha
                        ? "rgb(" + e + "," + t + "," + r + ")"
                        : "rgba(" + e + "," + t + "," + r + "," + this.alpha + ")";
                }),
                (s.prototype.toBytes = function(e) {
                    var t = s.floatToByte(this.red),
                        n = s.floatToByte(this.green),
                        o = s.floatToByte(this.blue),
                        i = s.floatToByte(this.alpha);
                    return r(e)
                        ? ((e[0] = t), (e[1] = n), (e[2] = o), (e[3] = i), e)
                        : [t, n, o, i];
                }),
                (s.prototype.toRgba = function() {
                    return (
                        (l[0] = s.floatToByte(this.red)),
                        (l[1] = s.floatToByte(this.green)),
                        (l[2] = s.floatToByte(this.blue)),
                        (l[3] = s.floatToByte(this.alpha)),
                        c[0]
                    );
                }),
                (s.prototype.brighten = function(e, t) {
                    return (
                        (e = 1 - e),
                        (t.red = 1 - (1 - this.red) * e),
                        (t.green = 1 - (1 - this.green) * e),
                        (t.blue = 1 - (1 - this.blue) * e),
                        (t.alpha = this.alpha),
                        t
                    );
                }),
                (s.prototype.darken = function(e, t) {
                    return (
                        (e = 1 - e),
                        (t.red = this.red * e),
                        (t.green = this.green * e),
                        (t.blue = this.blue * e),
                        (t.alpha = this.alpha),
                        t
                    );
                }),
                (s.prototype.withAlpha = function(e, t) {
                    return s.fromAlpha(this, e, t);
                }),
                (s.add = function(e, t, r) {
                    return (
                        (r.red = e.red + t.red),
                        (r.green = e.green + t.green),
                        (r.blue = e.blue + t.blue),
                        (r.alpha = e.alpha + t.alpha),
                        r
                    );
                }),
                (s.subtract = function(e, t, r) {
                    return (
                        (r.red = e.red - t.red),
                        (r.green = e.green - t.green),
                        (r.blue = e.blue - t.blue),
                        (r.alpha = e.alpha - t.alpha),
                        r
                    );
                }),
                (s.multiply = function(e, t, r) {
                    return (
                        (r.red = e.red * t.red),
                        (r.green = e.green * t.green),
                        (r.blue = e.blue * t.blue),
                        (r.alpha = e.alpha * t.alpha),
                        r
                    );
                }),
                (s.divide = function(e, t, r) {
                    return (
                        (r.red = e.red / t.red),
                        (r.green = e.green / t.green),
                        (r.blue = e.blue / t.blue),
                        (r.alpha = e.alpha / t.alpha),
                        r
                    );
                }),
                (s.mod = function(e, t, r) {
                    return (
                        (r.red = e.red % t.red),
                        (r.green = e.green % t.green),
                        (r.blue = e.blue % t.blue),
                        (r.alpha = e.alpha % t.alpha),
                        r
                    );
                }),
                (s.multiplyByScalar = function(e, t, r) {
                    return (
                        (r.red = e.red * t),
                        (r.green = e.green * t),
                        (r.blue = e.blue * t),
                        (r.alpha = e.alpha * t),
                        r
                    );
                }),
                (s.divideByScalar = function(e, t, r) {
                    return (
                        (r.red = e.red / t),
                        (r.green = e.green / t),
                        (r.blue = e.blue / t),
                        (r.alpha = e.alpha / t),
                        r
                    );
                }),
                (s.ALICEBLUE = o(s.fromCssColorString("#F0F8FF"))),
                (s.ANTIQUEWHITE = o(s.fromCssColorString("#FAEBD7"))),
                (s.AQUA = o(s.fromCssColorString("#00FFFF"))),
                (s.AQUAMARINE = o(s.fromCssColorString("#7FFFD4"))),
                (s.AZURE = o(s.fromCssColorString("#F0FFFF"))),
                (s.BEIGE = o(s.fromCssColorString("#F5F5DC"))),
                (s.BISQUE = o(s.fromCssColorString("#FFE4C4"))),
                (s.BLACK = o(s.fromCssColorString("#000000"))),
                (s.BLANCHEDALMOND = o(s.fromCssColorString("#FFEBCD"))),
                (s.BLUE = o(s.fromCssColorString("#0000FF"))),
                (s.BLUEVIOLET = o(s.fromCssColorString("#8A2BE2"))),
                (s.BROWN = o(s.fromCssColorString("#A52A2A"))),
                (s.BURLYWOOD = o(s.fromCssColorString("#DEB887"))),
                (s.CADETBLUE = o(s.fromCssColorString("#5F9EA0"))),
                (s.CHARTREUSE = o(s.fromCssColorString("#7FFF00"))),
                (s.CHOCOLATE = o(s.fromCssColorString("#D2691E"))),
                (s.CORAL = o(s.fromCssColorString("#FF7F50"))),
                (s.CORNFLOWERBLUE = o(s.fromCssColorString("#6495ED"))),
                (s.CORNSILK = o(s.fromCssColorString("#FFF8DC"))),
                (s.CRIMSON = o(s.fromCssColorString("#DC143C"))),
                (s.CYAN = o(s.fromCssColorString("#00FFFF"))),
                (s.DARKBLUE = o(s.fromCssColorString("#00008B"))),
                (s.DARKCYAN = o(s.fromCssColorString("#008B8B"))),
                (s.DARKGOLDENROD = o(s.fromCssColorString("#B8860B"))),
                (s.DARKGRAY = o(s.fromCssColorString("#A9A9A9"))),
                (s.DARKGREEN = o(s.fromCssColorString("#006400"))),
                (s.DARKGREY = s.DARKGRAY),
                (s.DARKKHAKI = o(s.fromCssColorString("#BDB76B"))),
                (s.DARKMAGENTA = o(s.fromCssColorString("#8B008B"))),
                (s.DARKOLIVEGREEN = o(s.fromCssColorString("#556B2F"))),
                (s.DARKORANGE = o(s.fromCssColorString("#FF8C00"))),
                (s.DARKORCHID = o(s.fromCssColorString("#9932CC"))),
                (s.DARKRED = o(s.fromCssColorString("#8B0000"))),
                (s.DARKSALMON = o(s.fromCssColorString("#E9967A"))),
                (s.DARKSEAGREEN = o(s.fromCssColorString("#8FBC8F"))),
                (s.DARKSLATEBLUE = o(s.fromCssColorString("#483D8B"))),
                (s.DARKSLATEGRAY = o(s.fromCssColorString("#2F4F4F"))),
                (s.DARKSLATEGREY = s.DARKSLATEGRAY),
                (s.DARKTURQUOISE = o(s.fromCssColorString("#00CED1"))),
                (s.DARKVIOLET = o(s.fromCssColorString("#9400D3"))),
                (s.DEEPPINK = o(s.fromCssColorString("#FF1493"))),
                (s.DEEPSKYBLUE = o(s.fromCssColorString("#00BFFF"))),
                (s.DIMGRAY = o(s.fromCssColorString("#696969"))),
                (s.DIMGREY = s.DIMGRAY),
                (s.DODGERBLUE = o(s.fromCssColorString("#1E90FF"))),
                (s.FIREBRICK = o(s.fromCssColorString("#B22222"))),
                (s.FLORALWHITE = o(s.fromCssColorString("#FFFAF0"))),
                (s.FORESTGREEN = o(s.fromCssColorString("#228B22"))),
                (s.FUCHSIA = o(s.fromCssColorString("#FF00FF"))),
                (s.GAINSBORO = o(s.fromCssColorString("#DCDCDC"))),
                (s.GHOSTWHITE = o(s.fromCssColorString("#F8F8FF"))),
                (s.GOLD = o(s.fromCssColorString("#FFD700"))),
                (s.GOLDENROD = o(s.fromCssColorString("#DAA520"))),
                (s.GRAY = o(s.fromCssColorString("#808080"))),
                (s.GREEN = o(s.fromCssColorString("#008000"))),
                (s.GREENYELLOW = o(s.fromCssColorString("#ADFF2F"))),
                (s.GREY = s.GRAY),
                (s.HONEYDEW = o(s.fromCssColorString("#F0FFF0"))),
                (s.HOTPINK = o(s.fromCssColorString("#FF69B4"))),
                (s.INDIANRED = o(s.fromCssColorString("#CD5C5C"))),
                (s.INDIGO = o(s.fromCssColorString("#4B0082"))),
                (s.IVORY = o(s.fromCssColorString("#FFFFF0"))),
                (s.KHAKI = o(s.fromCssColorString("#F0E68C"))),
                (s.LAVENDER = o(s.fromCssColorString("#E6E6FA"))),
                (s.LAVENDAR_BLUSH = o(s.fromCssColorString("#FFF0F5"))),
                (s.LAWNGREEN = o(s.fromCssColorString("#7CFC00"))),
                (s.LEMONCHIFFON = o(s.fromCssColorString("#FFFACD"))),
                (s.LIGHTBLUE = o(s.fromCssColorString("#ADD8E6"))),
                (s.LIGHTCORAL = o(s.fromCssColorString("#F08080"))),
                (s.LIGHTCYAN = o(s.fromCssColorString("#E0FFFF"))),
                (s.LIGHTGOLDENRODYELLOW = o(s.fromCssColorString("#FAFAD2"))),
                (s.LIGHTGRAY = o(s.fromCssColorString("#D3D3D3"))),
                (s.LIGHTGREEN = o(s.fromCssColorString("#90EE90"))),
                (s.LIGHTGREY = s.LIGHTGRAY),
                (s.LIGHTPINK = o(s.fromCssColorString("#FFB6C1"))),
                (s.LIGHTSEAGREEN = o(s.fromCssColorString("#20B2AA"))),
                (s.LIGHTSKYBLUE = o(s.fromCssColorString("#87CEFA"))),
                (s.LIGHTSLATEGRAY = o(s.fromCssColorString("#778899"))),
                (s.LIGHTSLATEGREY = s.LIGHTSLATEGRAY),
                (s.LIGHTSTEELBLUE = o(s.fromCssColorString("#B0C4DE"))),
                (s.LIGHTYELLOW = o(s.fromCssColorString("#FFFFE0"))),
                (s.LIME = o(s.fromCssColorString("#00FF00"))),
                (s.LIMEGREEN = o(s.fromCssColorString("#32CD32"))),
                (s.LINEN = o(s.fromCssColorString("#FAF0E6"))),
                (s.MAGENTA = o(s.fromCssColorString("#FF00FF"))),
                (s.MAROON = o(s.fromCssColorString("#800000"))),
                (s.MEDIUMAQUAMARINE = o(s.fromCssColorString("#66CDAA"))),
                (s.MEDIUMBLUE = o(s.fromCssColorString("#0000CD"))),
                (s.MEDIUMORCHID = o(s.fromCssColorString("#BA55D3"))),
                (s.MEDIUMPURPLE = o(s.fromCssColorString("#9370DB"))),
                (s.MEDIUMSEAGREEN = o(s.fromCssColorString("#3CB371"))),
                (s.MEDIUMSLATEBLUE = o(s.fromCssColorString("#7B68EE"))),
                (s.MEDIUMSPRINGGREEN = o(s.fromCssColorString("#00FA9A"))),
                (s.MEDIUMTURQUOISE = o(s.fromCssColorString("#48D1CC"))),
                (s.MEDIUMVIOLETRED = o(s.fromCssColorString("#C71585"))),
                (s.MIDNIGHTBLUE = o(s.fromCssColorString("#191970"))),
                (s.MINTCREAM = o(s.fromCssColorString("#F5FFFA"))),
                (s.MISTYROSE = o(s.fromCssColorString("#FFE4E1"))),
                (s.MOCCASIN = o(s.fromCssColorString("#FFE4B5"))),
                (s.NAVAJOWHITE = o(s.fromCssColorString("#FFDEAD"))),
                (s.NAVY = o(s.fromCssColorString("#000080"))),
                (s.OLDLACE = o(s.fromCssColorString("#FDF5E6"))),
                (s.OLIVE = o(s.fromCssColorString("#808000"))),
                (s.OLIVEDRAB = o(s.fromCssColorString("#6B8E23"))),
                (s.ORANGE = o(s.fromCssColorString("#FFA500"))),
                (s.ORANGERED = o(s.fromCssColorString("#FF4500"))),
                (s.ORCHID = o(s.fromCssColorString("#DA70D6"))),
                (s.PALEGOLDENROD = o(s.fromCssColorString("#EEE8AA"))),
                (s.PALEGREEN = o(s.fromCssColorString("#98FB98"))),
                (s.PALETURQUOISE = o(s.fromCssColorString("#AFEEEE"))),
                (s.PALEVIOLETRED = o(s.fromCssColorString("#DB7093"))),
                (s.PAPAYAWHIP = o(s.fromCssColorString("#FFEFD5"))),
                (s.PEACHPUFF = o(s.fromCssColorString("#FFDAB9"))),
                (s.PERU = o(s.fromCssColorString("#CD853F"))),
                (s.PINK = o(s.fromCssColorString("#FFC0CB"))),
                (s.PLUM = o(s.fromCssColorString("#DDA0DD"))),
                (s.POWDERBLUE = o(s.fromCssColorString("#B0E0E6"))),
                (s.PURPLE = o(s.fromCssColorString("#800080"))),
                (s.RED = o(s.fromCssColorString("#FF0000"))),
                (s.ROSYBROWN = o(s.fromCssColorString("#BC8F8F"))),
                (s.ROYALBLUE = o(s.fromCssColorString("#4169E1"))),
                (s.SADDLEBROWN = o(s.fromCssColorString("#8B4513"))),
                (s.SALMON = o(s.fromCssColorString("#FA8072"))),
                (s.SANDYBROWN = o(s.fromCssColorString("#F4A460"))),
                (s.SEAGREEN = o(s.fromCssColorString("#2E8B57"))),
                (s.SEASHELL = o(s.fromCssColorString("#FFF5EE"))),
                (s.SIENNA = o(s.fromCssColorString("#A0522D"))),
                (s.SILVER = o(s.fromCssColorString("#C0C0C0"))),
                (s.SKYBLUE = o(s.fromCssColorString("#87CEEB"))),
                (s.SLATEBLUE = o(s.fromCssColorString("#6A5ACD"))),
                (s.SLATEGRAY = o(s.fromCssColorString("#708090"))),
                (s.SLATEGREY = s.SLATEGRAY),
                (s.SNOW = o(s.fromCssColorString("#FFFAFA"))),
                (s.SPRINGGREEN = o(s.fromCssColorString("#00FF7F"))),
                (s.STEELBLUE = o(s.fromCssColorString("#4682B4"))),
                (s.TAN = o(s.fromCssColorString("#D2B48C"))),
                (s.TEAL = o(s.fromCssColorString("#008080"))),
                (s.THISTLE = o(s.fromCssColorString("#D8BFD8"))),
                (s.TOMATO = o(s.fromCssColorString("#FF6347"))),
                (s.TURQUOISE = o(s.fromCssColorString("#40E0D0"))),
                (s.VIOLET = o(s.fromCssColorString("#EE82EE"))),
                (s.WHEAT = o(s.fromCssColorString("#F5DEB3"))),
                (s.WHITE = o(s.fromCssColorString("#FFFFFF"))),
                (s.WHITESMOKE = o(s.fromCssColorString("#F5F5F5"))),
                (s.YELLOW = o(s.fromCssColorString("#FFFF00"))),
                (s.YELLOWGREEN = o(s.fromCssColorString("#9ACD32"))),
                (s.TRANSPARENT = o(new s(0, 0, 0, 0))),
                s
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
        ], function(e, t, r, n, o, i) {
            "use strict";
            if (!n.supportsTypedArrays()) return {};
            var a = {
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
                (a.getSizeInBytes = function(e) {
                    switch (e) {
                        case a.BYTE:
                            return Int8Array.BYTES_PER_ELEMENT;
                        case a.UNSIGNED_BYTE:
                            return Uint8Array.BYTES_PER_ELEMENT;
                        case a.SHORT:
                            return Int16Array.BYTES_PER_ELEMENT;
                        case a.UNSIGNED_SHORT:
                            return Uint16Array.BYTES_PER_ELEMENT;
                        case a.INT:
                            return Int32Array.BYTES_PER_ELEMENT;
                        case a.UNSIGNED_INT:
                            return Uint32Array.BYTES_PER_ELEMENT;
                        case a.FLOAT:
                            return Float32Array.BYTES_PER_ELEMENT;
                        case a.DOUBLE:
                            return Float64Array.BYTES_PER_ELEMENT;
                    }
                }),
                (a.fromTypedArray = function(e) {
                    return e instanceof Int8Array
                        ? a.BYTE
                        : e instanceof Uint8Array
                        ? a.UNSIGNED_BYTE
                        : e instanceof Int16Array
                        ? a.SHORT
                        : e instanceof Uint16Array
                        ? a.UNSIGNED_SHORT
                        : e instanceof Int32Array
                        ? a.INT
                        : e instanceof Uint32Array
                        ? a.UNSIGNED_INT
                        : e instanceof Float32Array
                        ? a.FLOAT
                        : e instanceof Float64Array
                        ? a.DOUBLE
                        : void 0;
                }),
                (a.validate = function(e) {
                    return (
                        t(e) &&
                        (e === a.BYTE ||
                            e === a.UNSIGNED_BYTE ||
                            e === a.SHORT ||
                            e === a.UNSIGNED_SHORT ||
                            e === a.INT ||
                            e === a.UNSIGNED_INT ||
                            e === a.FLOAT ||
                            e === a.DOUBLE)
                    );
                }),
                (a.createTypedArray = function(e, t) {
                    switch (e) {
                        case a.BYTE:
                            return new Int8Array(t);
                        case a.UNSIGNED_BYTE:
                            return new Uint8Array(t);
                        case a.SHORT:
                            return new Int16Array(t);
                        case a.UNSIGNED_SHORT:
                            return new Uint16Array(t);
                        case a.INT:
                            return new Int32Array(t);
                        case a.UNSIGNED_INT:
                            return new Uint32Array(t);
                        case a.FLOAT:
                            return new Float32Array(t);
                        case a.DOUBLE:
                            return new Float64Array(t);
                    }
                }),
                (a.createArrayBufferView = function(t, r, n, o) {
                    switch (
                        ((n = e(n, 0)), (o = e(o, (r.byteLength - n) / a.getSizeInBytes(t))), t)
                    ) {
                        case a.BYTE:
                            return new Int8Array(r, n, o);
                        case a.UNSIGNED_BYTE:
                            return new Uint8Array(r, n, o);
                        case a.SHORT:
                            return new Int16Array(r, n, o);
                        case a.UNSIGNED_SHORT:
                            return new Uint16Array(r, n, o);
                        case a.INT:
                            return new Int32Array(r, n, o);
                        case a.UNSIGNED_INT:
                            return new Uint32Array(r, n, o);
                        case a.FLOAT:
                            return new Float32Array(r, n, o);
                        case a.DOUBLE:
                            return new Float64Array(r, n, o);
                    }
                }),
                (a.fromName = function(e) {
                    switch (e) {
                        case "BYTE":
                            return a.BYTE;
                        case "UNSIGNED_BYTE":
                            return a.UNSIGNED_BYTE;
                        case "SHORT":
                            return a.SHORT;
                        case "UNSIGNED_SHORT":
                            return a.UNSIGNED_SHORT;
                        case "INT":
                            return a.INT;
                        case "UNSIGNED_INT":
                            return a.UNSIGNED_INT;
                        case "FLOAT":
                            return a.FLOAT;
                        case "DOUBLE":
                            return a.DOUBLE;
                    }
                }),
                o(a)
            );
        }),
        define("Core/Cartesian2", [
            "./Check",
            "./defaultValue",
            "./defined",
            "./DeveloperError",
            "./freezeObject",
            "./Math"
        ], function(e, t, r, n, o, i) {
            "use strict";
            function a(e, r) {
                (this.x = t(e, 0)), (this.y = t(r, 0));
            }
            (a.fromElements = function(e, t, n) {
                return r(n) ? ((n.x = e), (n.y = t), n) : new a(e, t);
            }),
                (a.clone = function(e, t) {
                    if (r(e)) return r(t) ? ((t.x = e.x), (t.y = e.y), t) : new a(e.x, e.y);
                }),
                (a.fromCartesian3 = a.clone),
                (a.fromCartesian4 = a.clone),
                (a.packedLength = 2),
                (a.pack = function(e, r, n) {
                    return (n = t(n, 0)), (r[n++] = e.x), (r[n] = e.y), r;
                }),
                (a.unpack = function(e, n, o) {
                    return (n = t(n, 0)), r(o) || (o = new a()), (o.x = e[n++]), (o.y = e[n]), o;
                }),
                (a.packArray = function(e, t) {
                    var n = e.length;
                    r(t) ? (t.length = 2 * n) : (t = new Array(2 * n));
                    for (var o = 0; o < n; ++o) a.pack(e[o], t, 2 * o);
                    return t;
                }),
                (a.unpackArray = function(e, t) {
                    var n = e.length;
                    r(t) ? (t.length = n / 2) : (t = new Array(n / 2));
                    for (var o = 0; o < n; o += 2) {
                        var i = o / 2;
                        t[i] = a.unpack(e, o, t[i]);
                    }
                    return t;
                }),
                (a.fromArray = a.unpack),
                (a.maximumComponent = function(e) {
                    return Math.max(e.x, e.y);
                }),
                (a.minimumComponent = function(e) {
                    return Math.min(e.x, e.y);
                }),
                (a.minimumByComponent = function(e, t, r) {
                    return (r.x = Math.min(e.x, t.x)), (r.y = Math.min(e.y, t.y)), r;
                }),
                (a.maximumByComponent = function(e, t, r) {
                    return (r.x = Math.max(e.x, t.x)), (r.y = Math.max(e.y, t.y)), r;
                }),
                (a.magnitudeSquared = function(e) {
                    return e.x * e.x + e.y * e.y;
                }),
                (a.magnitude = function(e) {
                    return Math.sqrt(a.magnitudeSquared(e));
                });
            var s = new a();
            (a.distance = function(e, t) {
                return a.subtract(e, t, s), a.magnitude(s);
            }),
                (a.distanceSquared = function(e, t) {
                    return a.subtract(e, t, s), a.magnitudeSquared(s);
                }),
                (a.normalize = function(e, t) {
                    var r = a.magnitude(e);
                    return (t.x = e.x / r), (t.y = e.y / r), t;
                }),
                (a.dot = function(e, t) {
                    return e.x * t.x + e.y * t.y;
                }),
                (a.multiplyComponents = function(e, t, r) {
                    return (r.x = e.x * t.x), (r.y = e.y * t.y), r;
                }),
                (a.divideComponents = function(e, t, r) {
                    return (r.x = e.x / t.x), (r.y = e.y / t.y), r;
                }),
                (a.add = function(e, t, r) {
                    return (r.x = e.x + t.x), (r.y = e.y + t.y), r;
                }),
                (a.subtract = function(e, t, r) {
                    return (r.x = e.x - t.x), (r.y = e.y - t.y), r;
                }),
                (a.multiplyByScalar = function(e, t, r) {
                    return (r.x = e.x * t), (r.y = e.y * t), r;
                }),
                (a.divideByScalar = function(e, t, r) {
                    return (r.x = e.x / t), (r.y = e.y / t), r;
                }),
                (a.negate = function(e, t) {
                    return (t.x = -e.x), (t.y = -e.y), t;
                }),
                (a.abs = function(e, t) {
                    return (t.x = Math.abs(e.x)), (t.y = Math.abs(e.y)), t;
                });
            var u = new a();
            a.lerp = function(e, t, r, n) {
                return (
                    a.multiplyByScalar(t, r, u),
                    (n = a.multiplyByScalar(e, 1 - r, n)),
                    a.add(u, n, n)
                );
            };
            var c = new a(),
                l = new a();
            a.angleBetween = function(e, t) {
                return a.normalize(e, c), a.normalize(t, l), i.acosClamped(a.dot(c, l));
            };
            var f = new a();
            return (
                (a.mostOrthogonalAxis = function(e, t) {
                    var r = a.normalize(e, f);
                    return (
                        a.abs(r, r), (t = r.x <= r.y ? a.clone(a.UNIT_X, t) : a.clone(a.UNIT_Y, t))
                    );
                }),
                (a.equals = function(e, t) {
                    return e === t || (r(e) && r(t) && e.x === t.x && e.y === t.y);
                }),
                (a.equalsArray = function(e, t, r) {
                    return e.x === t[r] && e.y === t[r + 1];
                }),
                (a.equalsEpsilon = function(e, t, n, o) {
                    return (
                        e === t ||
                        (r(e) &&
                            r(t) &&
                            i.equalsEpsilon(e.x, t.x, n, o) &&
                            i.equalsEpsilon(e.y, t.y, n, o))
                    );
                }),
                (a.ZERO = o(new a(0, 0))),
                (a.UNIT_X = o(new a(1, 0))),
                (a.UNIT_Y = o(new a(0, 1))),
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
                    return "(" + this.x + ", " + this.y + ")";
                }),
                a
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
        ], function(e, t, r, n, o, i) {
            "use strict";
            function a(e, t, n, o) {
                (this[0] = r(e, 0)), (this[1] = r(n, 0)), (this[2] = r(t, 0)), (this[3] = r(o, 0));
            }
            (a.packedLength = 4),
                (a.pack = function(e, t, n) {
                    return (
                        (n = r(n, 0)),
                        (t[n++] = e[0]),
                        (t[n++] = e[1]),
                        (t[n++] = e[2]),
                        (t[n++] = e[3]),
                        t
                    );
                }),
                (a.unpack = function(e, t, o) {
                    return (
                        (t = r(t, 0)),
                        n(o) || (o = new a()),
                        (o[0] = e[t++]),
                        (o[1] = e[t++]),
                        (o[2] = e[t++]),
                        (o[3] = e[t++]),
                        o
                    );
                }),
                (a.clone = function(e, t) {
                    if (n(e))
                        return n(t)
                            ? ((t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t)
                            : new a(e[0], e[2], e[1], e[3]);
                }),
                (a.fromArray = function(e, t, o) {
                    return (
                        (t = r(t, 0)),
                        n(o) || (o = new a()),
                        (o[0] = e[t]),
                        (o[1] = e[t + 1]),
                        (o[2] = e[t + 2]),
                        (o[3] = e[t + 3]),
                        o
                    );
                }),
                (a.fromColumnMajorArray = function(e, t) {
                    return a.clone(e, t);
                }),
                (a.fromRowMajorArray = function(e, t) {
                    return n(t)
                        ? ((t[0] = e[0]), (t[1] = e[2]), (t[2] = e[1]), (t[3] = e[3]), t)
                        : new a(e[0], e[1], e[2], e[3]);
                }),
                (a.fromScale = function(e, t) {
                    return n(t)
                        ? ((t[0] = e.x), (t[1] = 0), (t[2] = 0), (t[3] = e.y), t)
                        : new a(e.x, 0, 0, e.y);
                }),
                (a.fromUniformScale = function(e, t) {
                    return n(t)
                        ? ((t[0] = e), (t[1] = 0), (t[2] = 0), (t[3] = e), t)
                        : new a(e, 0, 0, e);
                }),
                (a.fromRotation = function(e, t) {
                    var r = Math.cos(e),
                        o = Math.sin(e);
                    return n(t)
                        ? ((t[0] = r), (t[1] = o), (t[2] = -o), (t[3] = r), t)
                        : new a(r, -o, o, r);
                }),
                (a.toArray = function(e, t) {
                    return n(t)
                        ? ((t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t)
                        : [e[0], e[1], e[2], e[3]];
                }),
                (a.getElementIndex = function(e, t) {
                    return 2 * e + t;
                }),
                (a.getColumn = function(e, t, r) {
                    var n = 2 * t,
                        o = e[n],
                        i = e[n + 1];
                    return (r.x = o), (r.y = i), r;
                }),
                (a.setColumn = function(e, t, r, n) {
                    n = a.clone(e, n);
                    var o = 2 * t;
                    return (n[o] = r.x), (n[o + 1] = r.y), n;
                }),
                (a.getRow = function(e, t, r) {
                    var n = e[t],
                        o = e[t + 2];
                    return (r.x = n), (r.y = o), r;
                }),
                (a.setRow = function(e, t, r, n) {
                    return (n = a.clone(e, n)), (n[t] = r.x), (n[t + 2] = r.y), n;
                });
            var s = new e();
            a.getScale = function(t, r) {
                return (
                    (r.x = e.magnitude(e.fromElements(t[0], t[1], s))),
                    (r.y = e.magnitude(e.fromElements(t[2], t[3], s))),
                    r
                );
            };
            var u = new e();
            return (
                (a.getMaximumScale = function(t) {
                    return a.getScale(t, u), e.maximumComponent(u);
                }),
                (a.multiply = function(e, t, r) {
                    var n = e[0] * t[0] + e[2] * t[1],
                        o = e[0] * t[2] + e[2] * t[3],
                        i = e[1] * t[0] + e[3] * t[1],
                        a = e[1] * t[2] + e[3] * t[3];
                    return (r[0] = n), (r[1] = i), (r[2] = o), (r[3] = a), r;
                }),
                (a.add = function(e, t, r) {
                    return (
                        (r[0] = e[0] + t[0]),
                        (r[1] = e[1] + t[1]),
                        (r[2] = e[2] + t[2]),
                        (r[3] = e[3] + t[3]),
                        r
                    );
                }),
                (a.subtract = function(e, t, r) {
                    return (
                        (r[0] = e[0] - t[0]),
                        (r[1] = e[1] - t[1]),
                        (r[2] = e[2] - t[2]),
                        (r[3] = e[3] - t[3]),
                        r
                    );
                }),
                (a.multiplyByVector = function(e, t, r) {
                    var n = e[0] * t.x + e[2] * t.y,
                        o = e[1] * t.x + e[3] * t.y;
                    return (r.x = n), (r.y = o), r;
                }),
                (a.multiplyByScalar = function(e, t, r) {
                    return (
                        (r[0] = e[0] * t),
                        (r[1] = e[1] * t),
                        (r[2] = e[2] * t),
                        (r[3] = e[3] * t),
                        r
                    );
                }),
                (a.multiplyByScale = function(e, t, r) {
                    return (
                        (r[0] = e[0] * t.x),
                        (r[1] = e[1] * t.x),
                        (r[2] = e[2] * t.y),
                        (r[3] = e[3] * t.y),
                        r
                    );
                }),
                (a.negate = function(e, t) {
                    return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), (t[3] = -e[3]), t;
                }),
                (a.transpose = function(e, t) {
                    var r = e[0],
                        n = e[2],
                        o = e[1],
                        i = e[3];
                    return (t[0] = r), (t[1] = n), (t[2] = o), (t[3] = i), t;
                }),
                (a.abs = function(e, t) {
                    return (
                        (t[0] = Math.abs(e[0])),
                        (t[1] = Math.abs(e[1])),
                        (t[2] = Math.abs(e[2])),
                        (t[3] = Math.abs(e[3])),
                        t
                    );
                }),
                (a.equals = function(e, t) {
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
                (a.equalsArray = function(e, t, r) {
                    return (
                        e[0] === t[r] && e[1] === t[r + 1] && e[2] === t[r + 2] && e[3] === t[r + 3]
                    );
                }),
                (a.equalsEpsilon = function(e, t, r) {
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
                (a.IDENTITY = i(new a(1, 0, 0, 1))),
                (a.ZERO = i(new a(0, 0, 0, 0))),
                (a.COLUMN0ROW0 = 0),
                (a.COLUMN0ROW1 = 1),
                (a.COLUMN1ROW0 = 2),
                (a.COLUMN1ROW1 = 3),
                o(a.prototype, {
                    length: {
                        get: function() {
                            return a.packedLength;
                        }
                    }
                }),
                (a.prototype.clone = function(e) {
                    return a.clone(this, e);
                }),
                (a.prototype.equals = function(e) {
                    return a.equals(this, e);
                }),
                (a.prototype.equalsEpsilon = function(e, t) {
                    return a.equalsEpsilon(this, e, t);
                }),
                (a.prototype.toString = function() {
                    return "(" + this[0] + ", " + this[2] + ")\n(" + this[1] + ", " + this[3] + ")";
                }),
                a
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
        ], function(e, t, r, n, o, i, a, s) {
            "use strict";
            function u(e, t, n, o) {
                (this.x = r(e, 0)), (this.y = r(t, 0)), (this.z = r(n, 0)), (this.w = r(o, 0));
            }
            var c = new e();
            u.fromAxisAngle = function(t, r, o) {
                var i = r / 2,
                    a = Math.sin(i);
                c = e.normalize(t, c);
                var s = c.x * a,
                    l = c.y * a,
                    f = c.z * a,
                    h = Math.cos(i);
                return n(o) ? ((o.x = s), (o.y = l), (o.z = f), (o.w = h), o) : new u(s, l, f, h);
            };
            var l = [1, 2, 0],
                f = new Array(3);
            u.fromRotationMatrix = function(e, t) {
                var r,
                    o,
                    i,
                    a,
                    c,
                    h = e[s.COLUMN0ROW0],
                    d = e[s.COLUMN1ROW1],
                    E = e[s.COLUMN2ROW2],
                    p = h + d + E;
                if (p > 0)
                    (r = Math.sqrt(p + 1)),
                        (c = 0.5 * r),
                        (r = 0.5 / r),
                        (o = (e[s.COLUMN1ROW2] - e[s.COLUMN2ROW1]) * r),
                        (i = (e[s.COLUMN2ROW0] - e[s.COLUMN0ROW2]) * r),
                        (a = (e[s.COLUMN0ROW1] - e[s.COLUMN1ROW0]) * r);
                else {
                    var m = l,
                        _ = 0;
                    d > h && (_ = 1), E > h && E > d && (_ = 2);
                    var y = m[_],
                        R = m[y];
                    r = Math.sqrt(
                        e[s.getElementIndex(_, _)] -
                            e[s.getElementIndex(y, y)] -
                            e[s.getElementIndex(R, R)] +
                            1
                    );
                    var T = f;
                    (T[_] = 0.5 * r),
                        (r = 0.5 / r),
                        (c = (e[s.getElementIndex(R, y)] - e[s.getElementIndex(y, R)]) * r),
                        (T[y] = (e[s.getElementIndex(y, _)] + e[s.getElementIndex(_, y)]) * r),
                        (T[R] = (e[s.getElementIndex(R, _)] + e[s.getElementIndex(_, R)]) * r),
                        (o = -T[0]),
                        (i = -T[1]),
                        (a = -T[2]);
                }
                return n(t) ? ((t.x = o), (t.y = i), (t.z = a), (t.w = c), t) : new u(o, i, a, c);
            };
            var h = new u(),
                d = new u(),
                E = new u(),
                p = new u();
            u.fromHeadingPitchRoll = function(t, r) {
                return (
                    (p = u.fromAxisAngle(e.UNIT_X, t.roll, h)),
                    (E = u.fromAxisAngle(e.UNIT_Y, -t.pitch, r)),
                    (r = u.multiply(E, p, E)),
                    (d = u.fromAxisAngle(e.UNIT_Z, -t.heading, h)),
                    u.multiply(d, r, r)
                );
            };
            var m = new e(),
                _ = new e(),
                y = new u(),
                R = new u(),
                T = new u();
            (u.packedLength = 4),
                (u.pack = function(e, t, n) {
                    return (
                        (n = r(n, 0)),
                        (t[n++] = e.x),
                        (t[n++] = e.y),
                        (t[n++] = e.z),
                        (t[n] = e.w),
                        t
                    );
                }),
                (u.unpack = function(e, t, o) {
                    return (
                        (t = r(t, 0)),
                        n(o) || (o = new u()),
                        (o.x = e[t]),
                        (o.y = e[t + 1]),
                        (o.z = e[t + 2]),
                        (o.w = e[t + 3]),
                        o
                    );
                }),
                (u.packedInterpolationLength = 3),
                (u.convertPackedArrayForInterpolation = function(e, t, r, n) {
                    u.unpack(e, 4 * r, T), u.conjugate(T, T);
                    for (var o = 0, i = r - t + 1; o < i; o++) {
                        var a = 3 * o;
                        u.unpack(e, 4 * (t + o), y),
                            u.multiply(y, T, y),
                            y.w < 0 && u.negate(y, y),
                            u.computeAxis(y, m);
                        var s = u.computeAngle(y);
                        (n[a] = m.x * s), (n[a + 1] = m.y * s), (n[a + 2] = m.z * s);
                    }
                }),
                (u.unpackInterpolationResult = function(t, r, o, i, a) {
                    n(a) || (a = new u()), e.fromArray(t, 0, _);
                    var s = e.magnitude(_);
                    return (
                        u.unpack(r, 4 * i, R),
                        0 === s ? u.clone(u.IDENTITY, y) : u.fromAxisAngle(_, s, y),
                        u.multiply(y, R, a)
                    );
                }),
                (u.clone = function(e, t) {
                    if (n(e))
                        return n(t)
                            ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), (t.w = e.w), t)
                            : new u(e.x, e.y, e.z, e.w);
                }),
                (u.conjugate = function(e, t) {
                    return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), (t.w = e.w), t;
                }),
                (u.magnitudeSquared = function(e) {
                    return e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w;
                }),
                (u.magnitude = function(e) {
                    return Math.sqrt(u.magnitudeSquared(e));
                }),
                (u.normalize = function(e, t) {
                    var r = 1 / u.magnitude(e),
                        n = e.x * r,
                        o = e.y * r,
                        i = e.z * r,
                        a = e.w * r;
                    return (t.x = n), (t.y = o), (t.z = i), (t.w = a), t;
                }),
                (u.inverse = function(e, t) {
                    var r = u.magnitudeSquared(e);
                    return (t = u.conjugate(e, t)), u.multiplyByScalar(t, 1 / r, t);
                }),
                (u.add = function(e, t, r) {
                    return (
                        (r.x = e.x + t.x),
                        (r.y = e.y + t.y),
                        (r.z = e.z + t.z),
                        (r.w = e.w + t.w),
                        r
                    );
                }),
                (u.subtract = function(e, t, r) {
                    return (
                        (r.x = e.x - t.x),
                        (r.y = e.y - t.y),
                        (r.z = e.z - t.z),
                        (r.w = e.w - t.w),
                        r
                    );
                }),
                (u.negate = function(e, t) {
                    return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), (t.w = -e.w), t;
                }),
                (u.dot = function(e, t) {
                    return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w;
                }),
                (u.multiply = function(e, t, r) {
                    var n = e.x,
                        o = e.y,
                        i = e.z,
                        a = e.w,
                        s = t.x,
                        u = t.y,
                        c = t.z,
                        l = t.w,
                        f = a * s + n * l + o * c - i * u,
                        h = a * u - n * c + o * l + i * s,
                        d = a * c + n * u - o * s + i * l,
                        E = a * l - n * s - o * u - i * c;
                    return (r.x = f), (r.y = h), (r.z = d), (r.w = E), r;
                }),
                (u.multiplyByScalar = function(e, t, r) {
                    return (r.x = e.x * t), (r.y = e.y * t), (r.z = e.z * t), (r.w = e.w * t), r;
                }),
                (u.divideByScalar = function(e, t, r) {
                    return (r.x = e.x / t), (r.y = e.y / t), (r.z = e.z / t), (r.w = e.w / t), r;
                }),
                (u.computeAxis = function(e, t) {
                    var r = e.w;
                    if (Math.abs(r - 1) < a.EPSILON6) return (t.x = t.y = t.z = 0), t;
                    var n = 1 / Math.sqrt(1 - r * r);
                    return (t.x = e.x * n), (t.y = e.y * n), (t.z = e.z * n), t;
                }),
                (u.computeAngle = function(e) {
                    return Math.abs(e.w - 1) < a.EPSILON6 ? 0 : 2 * Math.acos(e.w);
                });
            var A = new u();
            u.lerp = function(e, t, r, n) {
                return (
                    (A = u.multiplyByScalar(t, r, A)),
                    (n = u.multiplyByScalar(e, 1 - r, n)),
                    u.add(A, n, n)
                );
            };
            var S = new u(),
                C = new u(),
                g = new u();
            (u.slerp = function(e, t, r, n) {
                var o = u.dot(e, t),
                    i = t;
                if ((o < 0 && ((o = -o), (i = S = u.negate(t, S))), 1 - o < a.EPSILON6))
                    return u.lerp(e, i, r, n);
                var s = Math.acos(o);
                return (
                    (C = u.multiplyByScalar(e, Math.sin((1 - r) * s), C)),
                    (g = u.multiplyByScalar(i, Math.sin(r * s), g)),
                    (n = u.add(C, g, n)),
                    u.multiplyByScalar(n, 1 / Math.sin(s), n)
                );
            }),
                (u.log = function(t, r) {
                    var n = a.acosClamped(t.w),
                        o = 0;
                    return 0 !== n && (o = n / Math.sin(n)), e.multiplyByScalar(t, o, r);
                }),
                (u.exp = function(t, r) {
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
                N = new e(),
                I = new u(),
                O = new u();
            (u.computeInnerQuadrangle = function(t, r, n, o) {
                var i = u.conjugate(r, I);
                u.multiply(i, n, O);
                var a = u.log(O, v);
                u.multiply(i, t, O);
                var s = u.log(O, N);
                return (
                    e.add(a, s, a),
                    e.multiplyByScalar(a, 0.25, a),
                    e.negate(a, a),
                    u.exp(a, I),
                    u.multiply(r, I, o)
                );
            }),
                (u.squad = function(e, t, r, n, o, i) {
                    var a = u.slerp(e, t, o, I),
                        s = u.slerp(r, n, o, O);
                    return u.slerp(a, s, 2 * o * (1 - o), i);
                });
            for (
                var M = new u(),
                    w = 1.9011074535173003,
                    P = o.supportsTypedArrays() ? new Float32Array(8) : [],
                    D = o.supportsTypedArrays() ? new Float32Array(8) : [],
                    F = o.supportsTypedArrays() ? new Float32Array(8) : [],
                    U = o.supportsTypedArrays() ? new Float32Array(8) : [],
                    x = 0;
                x < 7;
                ++x
            ) {
                var L = x + 1,
                    b = 2 * L + 1;
                (P[x] = 1 / (L * b)), (D[x] = L / b);
            }
            return (
                (P[7] = w / 136),
                (D[7] = (8 * w) / 17),
                (u.fastSlerp = function(e, t, r, n) {
                    var o,
                        i = u.dot(e, t);
                    i >= 0 ? (o = 1) : ((o = -1), (i = -i));
                    for (var a = i - 1, s = 1 - r, c = r * r, l = s * s, f = 7; f >= 0; --f)
                        (F[f] = (P[f] * c - D[f]) * a), (U[f] = (P[f] * l - D[f]) * a);
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
                            s *
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
                        E = u.multiplyByScalar(e, d, M);
                    return u.multiplyByScalar(t, h, n), u.add(E, n, n);
                }),
                (u.fastSquad = function(e, t, r, n, o, i) {
                    var a = u.fastSlerp(e, t, o, I),
                        s = u.fastSlerp(r, n, o, O);
                    return u.fastSlerp(a, s, 2 * o * (1 - o), i);
                }),
                (u.equals = function(e, t) {
                    return (
                        e === t ||
                        (n(e) && n(t) && e.x === t.x && e.y === t.y && e.z === t.z && e.w === t.w)
                    );
                }),
                (u.equalsEpsilon = function(e, t, r) {
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
                (u.ZERO = i(new u(0, 0, 0, 0))),
                (u.IDENTITY = i(new u(0, 0, 0, 1))),
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
                    return "(" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + ")";
                }),
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
                            : s(e)
                            ? ((r = a()),
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
                    return e(t, i);
                }
                function n(e) {
                    this.then = e;
                }
                function o(e) {
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
                function a() {
                    function e(e, t, r) {
                        return h(e, t, r);
                    }
                    function r(e) {
                        return E(e);
                    }
                    function o(e) {
                        return E(i(e));
                    }
                    function s(e) {
                        return d(e);
                    }
                    var u, c, l, f, h, d, E;
                    return (
                        (c = new n(e)),
                        (u = {
                            then: e,
                            resolve: r,
                            reject: o,
                            progress: s,
                            promise: c,
                            resolver: { resolve: r, reject: o, progress: s }
                        }),
                        (l = []),
                        (f = []),
                        (h = function(e, t, r) {
                            var n, o;
                            return (
                                (n = a()),
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
                            return p(f, e), e;
                        }),
                        (E = function(e) {
                            return (
                                (e = t(e)), (h = e.then), (E = t), (d = _), p(l, e), (f = l = A), e
                            );
                        }),
                        u
                    );
                }
                function s(e) {
                    return e && "function" == typeof e.then;
                }
                function u(t, r, n, o, i) {
                    return (
                        m(2, arguments),
                        e(t, function(t) {
                            function s(e) {
                                p(e);
                            }
                            function u(e) {
                                E(e);
                            }
                            var c, l, f, h, d, E, p, m, y, R;
                            if (
                                ((y = t.length >>> 0),
                                (c = Math.max(0, Math.min(r, y))),
                                (f = []),
                                (l = y - c + 1),
                                (h = []),
                                (d = a()),
                                c)
                            )
                                for (
                                    m = d.progress,
                                        p = function(e) {
                                            h.push(e), --l || ((E = p = _), d.reject(h));
                                        },
                                        E = function(e) {
                                            f.push(e), --c || ((E = p = _), d.resolve(f));
                                        },
                                        R = 0;
                                    R < y;
                                    ++R
                                )
                                    R in t && e(t[R], u, s, m);
                            else d.resolve(f);
                            return d.then(n, o, i);
                        })
                    );
                }
                function c(e, t, r, n) {
                    function o(e) {
                        return t ? t(e[0]) : e[0];
                    }
                    return u(e, 1, o, r, n);
                }
                function l(e, t, r, n) {
                    return m(1, arguments), h(e, y).then(t, r, n);
                }
                function f() {
                    return h(arguments, y);
                }
                function h(t, r) {
                    return e(t, function(t) {
                        var n, o, i, s, u, c;
                        if (((i = o = t.length >>> 0), (n = []), (c = a()), i))
                            for (
                                s = function(t, o) {
                                    e(t, r).then(function(e) {
                                        (n[o] = e), --i || c.resolve(n);
                                    }, c.reject);
                                },
                                    u = 0;
                                u < o;
                                u++
                            )
                                u in t ? s(t[u], u) : --i;
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
                            (n[0] = function(t, n, i) {
                                return e(t, function(t) {
                                    return e(n, function(e) {
                                        return r(t, e, i, o);
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
                            return r.reject(e), i(e);
                        },
                        r.progress
                    );
                }
                function p(e, t) {
                    for (var r, n = 0; (r = e[n++]); ) r(t);
                }
                function m(e, t) {
                    for (var r, n = t.length; n > e; )
                        if (null != (r = t[--n]) && "function" != typeof r)
                            throw new Error("arg " + n + " must be a function");
                }
                function _() {}
                function y(e) {
                    return e;
                }
                var R, T, A;
                return (
                    (e.defer = a),
                    (e.resolve = t),
                    (e.reject = r),
                    (e.join = f),
                    (e.all = l),
                    (e.map = h),
                    (e.reduce = d),
                    (e.any = c),
                    (e.some = u),
                    (e.chain = E),
                    (e.isPromise = s),
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
                            var t, r, n, o, i;
                            if (
                                ((i = 0),
                                (t = Object(this)),
                                (o = t.length >>> 0),
                                (r = arguments),
                                r.length <= 1)
                            )
                                for (;;) {
                                    if (i in t) {
                                        n = t[i++];
                                        break;
                                    }
                                    if (++i >= o) throw new TypeError();
                                }
                            else n = r[1];
                            for (; i < o; ++i) i in t && (n = e(n, t[i], i, t));
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
                for (var n, o, i = 0, a = e.length - 1; i <= a; )
                    if (((n = ~~((i + a) / 2)), (o = r(e[n], t)) < 0)) i = n + 1;
                    else {
                        if (!(o > 0)) return n;
                        a = n - 1;
                    }
                return ~(a + 1);
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
                    i = function(e, t, r, n, i, a) {
                        var s = n - e.length;
                        return (
                            s > 0 &&
                                (e =
                                    r || !i
                                        ? o(e, n, a, r)
                                        : e.slice(0, t.length) +
                                          o("", s, "0", !0) +
                                          e.slice(t.length)),
                            e
                        );
                    },
                    a = function(e, t, r, n, a, s, u) {
                        var c = e >>> 0;
                        return (
                            (r = (r && c && { 2: "0b", 8: "0", 16: "0x" }[t]) || ""),
                            (e = r + o(c.toString(t), s || 0, "0", !1)),
                            i(e, r, n, a, u)
                        );
                    },
                    s = function(e, t, r, n, o, a) {
                        return null != n && (e = e.slice(0, n)), i(e, "", t, r, o, a);
                    },
                    u = function(e, n, u, c, l, f, h) {
                        var d, E, p, m, _;
                        if ("%%" == e) return "%";
                        for (
                            var y = !1, R = "", T = !1, A = !1, S = " ", C = u.length, g = 0;
                            u && g < C;
                            g++
                        )
                            switch (u.charAt(g)) {
                                case " ":
                                    R = " ";
                                    break;
                                case "+":
                                    R = "+";
                                    break;
                                case "-":
                                    y = !0;
                                    break;
                                case "'":
                                    S = u.charAt(g + 1);
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
                            c < 0 && ((c = -c), (y = !0)),
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
                            (_ = n ? t[n.slice(0, -1)] : t[r++]),
                            h)
                        ) {
                            case "s":
                                return s(String(_), y, c, f, T, S);
                            case "c":
                                return s(String.fromCharCode(+_), y, c, f, T);
                            case "b":
                                return a(_, 2, A, y, c, f, T);
                            case "o":
                                return a(_, 8, A, y, c, f, T);
                            case "x":
                                return a(_, 16, A, y, c, f, T);
                            case "X":
                                return a(_, 16, A, y, c, f, T).toUpperCase();
                            case "u":
                                return a(_, 10, A, y, c, f, T);
                            case "i":
                            case "d":
                                return (
                                    (d = +_ || 0),
                                    (d = Math.round(d - (d % 1))),
                                    (E = d < 0 ? "-" : R),
                                    (_ = E + o(String(Math.abs(d)), f, "0", !1)),
                                    i(_, E, y, c, T)
                                );
                            case "e":
                            case "E":
                            case "f":
                            case "F":
                            case "g":
                            case "G":
                                return (
                                    (d = +_),
                                    (E = d < 0 ? "-" : R),
                                    (p = ["toExponential", "toFixed", "toPrecision"][
                                        "efg".indexOf(h.toLowerCase())
                                    ]),
                                    (m = ["toString", "toUpperCase"]["eEfFgG".indexOf(h) % 2]),
                                    (_ = E + Math.abs(d)[p](f)),
                                    i(_, E, y, c, T)[m]()
                                );
                            default:
                                return e;
                        }
                    };
                return n.replace(e, u);
            }
            return e;
        }),
        define("Core/GregorianDate", [], function() {
            "use strict";
            function e(e, t, r, n, o, i, a, s) {
                (this.year = e),
                    (this.month = t),
                    (this.day = r),
                    (this.hour = n),
                    (this.minute = o),
                    (this.second = i),
                    (this.millisecond = a),
                    (this.isLeapSecond = s);
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
        ], function(e, t, r, n, o, i, a, s, u, c) {
            "use strict";
            function l(e, t) {
                return p.compare(e.julianDate, t.julianDate);
            }
            function f(e) {
                y.julianDate = e;
                var r = p.leapSeconds,
                    n = t(r, y, l);
                n < 0 && (n = ~n), n >= r.length && (n = r.length - 1);
                var o = r[n].offset;
                if (n > 0) {
                    p.secondsDifference(r[n].julianDate, e) > o && (n--, (o = r[n].offset));
                }
                p.addSeconds(e, o, e);
            }
            function h(e, r) {
                y.julianDate = e;
                var n = p.leapSeconds,
                    o = t(n, y, l);
                if ((o < 0 && (o = ~o), 0 === o)) return p.addSeconds(e, -n[0].offset, r);
                if (o >= n.length) return p.addSeconds(e, -n[o - 1].offset, r);
                var i = p.secondsDifference(n[o].julianDate, e);
                return 0 === i
                    ? p.addSeconds(e, -n[o].offset, r)
                    : i <= 1
                    ? void 0
                    : p.addSeconds(e, -n[--o].offset, r);
            }
            function d(e, t, r) {
                var n = (t / u.SECONDS_PER_DAY) | 0;
                return (
                    (e += n),
                    (t -= u.SECONDS_PER_DAY * n),
                    t < 0 && (e--, (t += u.SECONDS_PER_DAY)),
                    (r.dayNumber = e),
                    (r.secondsOfDay = t),
                    r
                );
            }
            function E(e, t, r, n, o, i, a) {
                var s = ((t - 14) / 12) | 0,
                    c = e + 4800 + s,
                    l =
                        (((1461 * c) / 4) | 0) +
                        (((367 * (t - 2 - 12 * s)) / 12) | 0) -
                        (((3 * (((c + 100) / 100) | 0)) / 4) | 0) +
                        r -
                        32075;
                (n -= 12) < 0 && (n += 24);
                var f =
                    i +
                    (n * u.SECONDS_PER_HOUR +
                        o * u.SECONDS_PER_MINUTE +
                        a * u.SECONDS_PER_MILLISECOND);
                return f >= 43200 && (l -= 1), [l, f];
            }
            function p(e, t, n) {
                (this.dayNumber = void 0),
                    (this.secondsOfDay = void 0),
                    (e = r(e, 0)),
                    (t = r(t, 0)),
                    (n = r(n, c.UTC));
                var o = 0 | e;
                (t += (e - o) * u.SECONDS_PER_DAY), d(o, t, this), n === c.UTC && f(this);
            }
            var m = new i(),
                _ = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                y = new s(),
                R = /^(\d{4})$/,
                T = /^(\d{4})-(\d{2})$/,
                A = /^(\d{4})-?(\d{3})$/,
                S = /^(\d{4})-?W(\d{2})-?(\d{1})?$/,
                C = /^(\d{4})-?(\d{2})-?(\d{2})$/,
                g = /([Z+\-])?(\d{2})?:?(\d{2})?$/,
                v = /^(\d{2})(\.\d+)?/.source + g.source,
                N = /^(\d{2}):?(\d{2})(\.\d+)?/.source + g.source,
                I = /^(\d{2}):?(\d{2}):?(\d{2})(\.\d+)?/.source + g.source;
            (p.fromGregorianDate = function(e, t) {
                var r = E(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
                return n(t) ? (d(r[0], r[1], t), f(t), t) : new p(r[0], r[1], c.UTC);
            }),
                (p.fromDate = function(e, t) {
                    var r = E(
                        e.getUTCFullYear(),
                        e.getUTCMonth() + 1,
                        e.getUTCDate(),
                        e.getUTCHours(),
                        e.getUTCMinutes(),
                        e.getUTCSeconds(),
                        e.getUTCMilliseconds()
                    );
                    return n(t) ? (d(r[0], r[1], t), f(t), t) : new p(r[0], r[1], c.UTC);
                }),
                (p.fromIso8601 = function(e, t) {
                    e = e.replace(",", ".");
                    var r,
                        o,
                        i,
                        s = e.split("T"),
                        u = 1,
                        l = 1,
                        h = 0,
                        m = 0,
                        y = 0,
                        g = 0,
                        O = s[0],
                        M = s[1];
                    if (null !== (s = O.match(C))) (r = +s[1]), (u = +s[2]), (l = +s[3]);
                    else if (null !== (s = O.match(T))) (r = +s[1]), (u = +s[2]);
                    else if (null !== (s = O.match(R))) r = +s[1];
                    else {
                        var w;
                        if (null !== (s = O.match(A))) (r = +s[1]), (w = +s[2]), (i = a(r));
                        else if (null !== (s = O.match(S))) {
                            r = +s[1];
                            var P = +s[2],
                                D = +s[3] || 0,
                                F = new Date(Date.UTC(r, 0, 4));
                            w = 7 * P + D - F.getUTCDay() - 3;
                        }
                        (o = new Date(Date.UTC(r, 0, 1))),
                            o.setUTCDate(w),
                            (u = o.getUTCMonth() + 1),
                            (l = o.getUTCDate());
                    }
                    i = a(r);
                    var U;
                    if (n(M)) {
                        (s = M.match(I)),
                            null !== s
                                ? ((h = +s[1]),
                                  (m = +s[2]),
                                  (y = +s[3]),
                                  (g = 1e3 * +(s[4] || 0)),
                                  (U = 5))
                                : ((s = M.match(N)),
                                  null !== s
                                      ? ((h = +s[1]), (m = +s[2]), (y = 60 * +(s[3] || 0)), (U = 4))
                                      : null !== (s = M.match(v)) &&
                                        ((h = +s[1]), (m = 60 * +(s[2] || 0)), (U = 3)));
                        var x = s[U],
                            L = +s[U + 1],
                            b = +(s[U + 2] || 0);
                        switch (x) {
                            case "+":
                                (h -= L), (m -= b);
                                break;
                            case "-":
                                (h += L), (m += b);
                                break;
                            case "Z":
                                break;
                            default:
                                m += new Date(Date.UTC(r, u - 1, l, h, m)).getTimezoneOffset();
                        }
                    }
                    var B = 60 === y;
                    for (B && y--; m >= 60; ) (m -= 60), h++;
                    for (; h >= 24; ) (h -= 24), l++;
                    for (o = i && 2 === u ? 29 : _[u - 1]; l > o; )
                        (l -= o),
                            u++,
                            u > 12 && ((u -= 12), r++),
                            (o = i && 2 === u ? 29 : _[u - 1]);
                    for (; m < 0; ) (m += 60), h--;
                    for (; h < 0; ) (h += 24), l--;
                    for (; l < 1; )
                        u--,
                            u < 1 && ((u += 12), r--),
                            (o = i && 2 === u ? 29 : _[u - 1]),
                            (l += o);
                    var q = E(r, u, l, h, m, y, g);
                    return (
                        n(t) ? (d(q[0], q[1], t), f(t)) : (t = new p(q[0], q[1], c.UTC)),
                        B && p.addSeconds(t, 1, t),
                        t
                    );
                }),
                (p.now = function(e) {
                    return p.fromDate(new Date(), e);
                });
            var O = new p(0, 0, c.TAI);
            return (
                (p.toGregorianDate = function(e, t) {
                    var r = !1,
                        o = h(e, O);
                    n(o) || (p.addSeconds(e, -1, O), (o = h(O, O)), (r = !0));
                    var a = o.dayNumber,
                        s = o.secondsOfDay;
                    s >= 43200 && (a += 1);
                    var c = (a + 68569) | 0,
                        l = ((4 * c) / 146097) | 0;
                    c = (c - (((146097 * l + 3) / 4) | 0)) | 0;
                    var f = ((4e3 * (c + 1)) / 1461001) | 0;
                    c = (c - (((1461 * f) / 4) | 0) + 31) | 0;
                    var d = ((80 * c) / 2447) | 0,
                        E = (c - (((2447 * d) / 80) | 0)) | 0;
                    c = (d / 11) | 0;
                    var m = (d + 2 - 12 * c) | 0,
                        _ = (100 * (l - 49) + f + c) | 0,
                        y = (s / u.SECONDS_PER_HOUR) | 0,
                        R = s - y * u.SECONDS_PER_HOUR,
                        T = (R / u.SECONDS_PER_MINUTE) | 0;
                    R -= T * u.SECONDS_PER_MINUTE;
                    var A = 0 | R,
                        S = (R - A) / u.SECONDS_PER_MILLISECOND;
                    return (
                        (y += 12),
                        y > 23 && (y -= 24),
                        r && (A += 1),
                        n(t)
                            ? ((t.year = _),
                              (t.month = m),
                              (t.day = E),
                              (t.hour = y),
                              (t.minute = T),
                              (t.second = A),
                              (t.millisecond = S),
                              (t.isLeapSecond = r),
                              t)
                            : new i(_, m, E, y, T, A, S, r)
                    );
                }),
                (p.toDate = function(e) {
                    var t = p.toGregorianDate(e, m),
                        r = t.second;
                    return (
                        t.isLeapSecond && (r -= 1),
                        new Date(
                            Date.UTC(t.year, t.month - 1, t.day, t.hour, t.minute, r, t.millisecond)
                        )
                    );
                }),
                (p.toIso8601 = function(t, r) {
                    var o = p.toGregorianDate(t, m),
                        i = o.year,
                        a = o.month,
                        s = o.day,
                        u = o.hour,
                        c = o.minute,
                        l = o.second,
                        f = o.millisecond;
                    1e4 === i &&
                        1 === a &&
                        1 === s &&
                        0 === u &&
                        0 === c &&
                        0 === l &&
                        0 === f &&
                        ((i = 9999), (a = 12), (s = 31), (u = 24));
                    var h;
                    return n(r) || 0 === f
                        ? n(r) && 0 !== r
                            ? ((h = (0.01 * f)
                                  .toFixed(r)
                                  .replace(".", "")
                                  .slice(0, r)),
                              e("%04d-%02d-%02dT%02d:%02d:%02d.%sZ", i, a, s, u, c, l, h))
                            : e("%04d-%02d-%02dT%02d:%02d:%02dZ", i, a, s, u, c, l)
                        : ((h = (0.01 * f).toString().replace(".", "")),
                          e("%04d-%02d-%02dT%02d:%02d:%02d.%sZ", i, a, s, u, c, l, h));
                }),
                (p.clone = function(e, t) {
                    if (n(e))
                        return n(t)
                            ? ((t.dayNumber = e.dayNumber), (t.secondsOfDay = e.secondsOfDay), t)
                            : new p(e.dayNumber, e.secondsOfDay, c.TAI);
                }),
                (p.compare = function(e, t) {
                    var r = e.dayNumber - t.dayNumber;
                    return 0 !== r ? r : e.secondsOfDay - t.secondsOfDay;
                }),
                (p.equals = function(e, t) {
                    return (
                        e === t ||
                        (n(e) &&
                            n(t) &&
                            e.dayNumber === t.dayNumber &&
                            e.secondsOfDay === t.secondsOfDay)
                    );
                }),
                (p.equalsEpsilon = function(e, t, r) {
                    return e === t || (n(e) && n(t) && Math.abs(p.secondsDifference(e, t)) <= r);
                }),
                (p.totalDays = function(e) {
                    return e.dayNumber + e.secondsOfDay / u.SECONDS_PER_DAY;
                }),
                (p.secondsDifference = function(e, t) {
                    return (
                        (e.dayNumber - t.dayNumber) * u.SECONDS_PER_DAY +
                        (e.secondsOfDay - t.secondsOfDay)
                    );
                }),
                (p.daysDifference = function(e, t) {
                    return (
                        e.dayNumber -
                        t.dayNumber +
                        (e.secondsOfDay - t.secondsOfDay) / u.SECONDS_PER_DAY
                    );
                }),
                (p.computeTaiMinusUtc = function(e) {
                    y.julianDate = e;
                    var r = p.leapSeconds,
                        n = t(r, y, l);
                    return n < 0 && ((n = ~n), --n < 0 && (n = 0)), r[n].offset;
                }),
                (p.addSeconds = function(e, t, r) {
                    return d(e.dayNumber, e.secondsOfDay + t, r);
                }),
                (p.addMinutes = function(e, t, r) {
                    var n = e.secondsOfDay + t * u.SECONDS_PER_MINUTE;
                    return d(e.dayNumber, n, r);
                }),
                (p.addHours = function(e, t, r) {
                    var n = e.secondsOfDay + t * u.SECONDS_PER_HOUR;
                    return d(e.dayNumber, n, r);
                }),
                (p.addDays = function(e, t, r) {
                    return d(e.dayNumber + t, e.secondsOfDay, r);
                }),
                (p.lessThan = function(e, t) {
                    return p.compare(e, t) < 0;
                }),
                (p.lessThanOrEquals = function(e, t) {
                    return p.compare(e, t) <= 0;
                }),
                (p.greaterThan = function(e, t) {
                    return p.compare(e, t) > 0;
                }),
                (p.greaterThanOrEquals = function(e, t) {
                    return p.compare(e, t) >= 0;
                }),
                (p.prototype.clone = function(e) {
                    return p.clone(this, e);
                }),
                (p.prototype.equals = function(e) {
                    return p.equals(this, e);
                }),
                (p.prototype.equalsEpsilon = function(e, t) {
                    return p.equalsEpsilon(this, e, t);
                }),
                (p.prototype.toString = function() {
                    return p.toIso8601(this);
                }),
                (p.leapSeconds = [
                    new s(new p(2441317, 43210, c.TAI), 10),
                    new s(new p(2441499, 43211, c.TAI), 11),
                    new s(new p(2441683, 43212, c.TAI), 12),
                    new s(new p(2442048, 43213, c.TAI), 13),
                    new s(new p(2442413, 43214, c.TAI), 14),
                    new s(new p(2442778, 43215, c.TAI), 15),
                    new s(new p(2443144, 43216, c.TAI), 16),
                    new s(new p(2443509, 43217, c.TAI), 17),
                    new s(new p(2443874, 43218, c.TAI), 18),
                    new s(new p(2444239, 43219, c.TAI), 19),
                    new s(new p(2444786, 43220, c.TAI), 20),
                    new s(new p(2445151, 43221, c.TAI), 21),
                    new s(new p(2445516, 43222, c.TAI), 22),
                    new s(new p(2446247, 43223, c.TAI), 23),
                    new s(new p(2447161, 43224, c.TAI), 24),
                    new s(new p(2447892, 43225, c.TAI), 25),
                    new s(new p(2448257, 43226, c.TAI), 26),
                    new s(new p(2448804, 43227, c.TAI), 27),
                    new s(new p(2449169, 43228, c.TAI), 28),
                    new s(new p(2449534, 43229, c.TAI), 29),
                    new s(new p(2450083, 43230, c.TAI), 30),
                    new s(new p(2450630, 43231, c.TAI), 31),
                    new s(new p(2451179, 43232, c.TAI), 32),
                    new s(new p(2453736, 43233, c.TAI), 33),
                    new s(new p(2454832, 43234, c.TAI), 34),
                    new s(new p(2456109, 43235, c.TAI), 35),
                    new s(new p(2457204, 43236, c.TAI), 36),
                    new s(new p(2457754, 43237, c.TAI), 37)
                ]),
                p
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
                            (this.authority = this.authority.replace(a, r).replace(o, t)),
                        this.path && (this.path = this.path.replace(o, t)),
                        this.query && (this.query = this.query.replace(o, t)),
                        this.fragment && (this.fragment = this.fragment.replace(o, t));
                });
            var o = /%[0-9a-z]{2}/gi,
                i = /[a-zA-Z0-9\-\._~]/,
                a = /(.*@)?([^@:]*)(:.*)?/;
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
                for (var i in r)
                    if (r.hasOwnProperty(i)) {
                        var a = r[i];
                        n && (a = t(a, n)), (o[i] = a);
                    }
                return o;
            }
            return t;
        }),
        define("Core/combine", ["./defaultValue", "./defined"], function(e, t) {
            "use strict";
            function r(n, o, i) {
                i = e(i, !1);
                var a,
                    s,
                    u,
                    c = {},
                    l = t(n),
                    f = t(o);
                if (l)
                    for (a in n)
                        n.hasOwnProperty(a) &&
                            ((s = n[a]),
                            f && i && "object" == typeof s && o.hasOwnProperty(a)
                                ? ((u = o[a]), (c[a] = "object" == typeof u ? r(s, u, i) : s))
                                : (c[a] = s));
                if (f)
                    for (a in o)
                        o.hasOwnProperty(a) && !c.hasOwnProperty(a) && ((u = o[a]), (c[a] = u));
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
                (o._implementation = function(n, o, i) {
                    if (!r(o)) {
                        if (void 0 === i) return n;
                        o = t(i.baseURI, i.location.href);
                    }
                    var a = new e(o);
                    return new e(n).resolve(a).toString();
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
                    i = r.lastIndexOf("/");
                return (
                    -1 !== i && (o = r.substring(0, i + 1)),
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
                            i = encodeURIComponent(n) + "=";
                        if (r(o))
                            for (var a = 0, s = o.length; a < s; ++a)
                                t += i + encodeURIComponent(o[a]) + "&";
                        else t += i + encodeURIComponent(o) + "&";
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
                    var o = t.replace(/\+/g, "%20").split(/[&;]/), i = 0, a = o.length;
                    i < a;
                    ++i
                ) {
                    var s = o[i].split("="),
                        u = decodeURIComponent(s[0]),
                        c = s[1];
                    c = e(c) ? decodeURIComponent(c) : "";
                    var l = n[u];
                    "string" == typeof l ? (n[u] = [l, c]) : r(l) ? l.push(c) : (n[u] = c);
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
                    i = o || e(t.throttle, !1);
                (this.url = t.url),
                    (this.requestFunction = t.requestFunction),
                    (this.cancelFunction = t.cancelFunction),
                    (this.priorityFunction = t.priorityFunction),
                    (this.priority = e(t.priority, 0)),
                    (this.throttle = i),
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
                        i = o.indexOf(": ");
                    if (i > 0) {
                        var a = o.substring(0, i),
                            s = o.substring(i + 2);
                        t[a] = s;
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
                        var r = this._listeners, n = this._scopes, o = -1, i = 0;
                        i < r.length;
                        i++
                    )
                        if (r[i] === e && n[i] === t) {
                            o = i;
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
                        i = r.length;
                    for (e = 0; e < i; e++) {
                        var a = r[e];
                        t(a) && r[e].apply(n[e], arguments);
                    }
                    var s = this._toRemove;
                    if ((i = s.length) > 0) {
                        for (s.sort(o), e = 0; e < i; e++) {
                            var u = s[e];
                            r.splice(u, 1), n.splice(u, 1);
                        }
                        s.length = 0;
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
            function i(e, t, r) {
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
                        var r = this._length, n = this._comparator, o = this._array, a = -1, s = !0;
                        s;

                    ) {
                        var u = 2 * (e + 1),
                            c = u - 1;
                        (a = c < r && n(o[c], o[e]) < 0 ? c : e),
                            u < r && n(o[u], o[a]) < 0 && (a = u),
                            a !== e ? (i(o, a, e), (e = a)) : (s = !1);
                    }
                }),
                (o.prototype.resort = function() {
                    for (var e = this._length, t = Math.ceil(e / 2); t >= 0; --t) this.heapify(t);
                }),
                (o.prototype.insert = function(e) {
                    var t = this._array,
                        n = this._comparator,
                        o = this._maximumLength,
                        a = this._length++;
                    for (a < t.length ? (t[a] = e) : t.push(e); 0 !== a; ) {
                        var s = Math.floor((a - 1) / 2);
                        if (!(n(t[a], t[s]) < 0)) break;
                        i(t, a, s), (a = s);
                    }
                    var u;
                    return r(o) && this._length > o && ((u = t[o]), (this._length = o)), u;
                }),
                (o.prototype.pop = function(e) {
                    if (((e = t(e, 0)), 0 !== this._length)) {
                        var r = this._array,
                            n = r[e];
                        return i(r, e, --this._length), this.heapify(e), n;
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
        ], function(e, t, r, n, o, i, a, s, u, c, l) {
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
                return N[e] < t;
            }
            function p(e) {
                return (
                    e.state === l.UNISSUED && ((e.state = l.ISSUED), (e.deferred = t.defer())),
                    e.deferred.promise
                );
            }
            function m(e) {
                return function(t) {
                    e.state !== l.CANCELLED &&
                        (--S.numberOfActiveRequests,
                        --N[e.serverKey],
                        O.raiseEvent(),
                        (e.state = l.RECEIVED),
                        e.deferred.resolve(t));
                };
            }
            function _(e) {
                return function(t) {
                    e.state !== l.CANCELLED &&
                        (++S.numberOfFailedRequests,
                        --S.numberOfActiveRequests,
                        --N[e.serverKey],
                        O.raiseEvent(t),
                        (e.state = l.FAILED),
                        e.deferred.reject(t));
                };
            }
            function y(e) {
                var t = p(e);
                return (
                    (e.state = l.ACTIVE),
                    v.push(e),
                    ++S.numberOfActiveRequests,
                    ++S.numberOfActiveRequestsEver,
                    ++N[e.serverKey],
                    e
                        .requestFunction()
                        .then(m(e))
                        .otherwise(_(e)),
                    t
                );
            }
            function R(e) {
                var t = e.state === l.ACTIVE;
                (e.state = l.CANCELLED),
                    ++S.numberOfCancelledRequests,
                    e.deferred.reject(),
                    t &&
                        (--S.numberOfActiveRequests,
                        --N[e.serverKey],
                        ++S.numberOfCancelledActiveRequests),
                    o(e.cancelFunction) && e.cancelFunction();
            }
            function T() {
                (S.numberOfAttemptedRequests = 0),
                    (S.numberOfCancelledRequests = 0),
                    (S.numberOfCancelledActiveRequests = 0);
            }
            function A() {
                h.debugShowStatistics &&
                    (S.numberOfAttemptedRequests > 0 &&
                        console.log("Number of attempted requests: " + S.numberOfAttemptedRequests),
                    S.numberOfActiveRequests > 0 &&
                        console.log("Number of active requests: " + S.numberOfActiveRequests),
                    S.numberOfCancelledRequests > 0 &&
                        console.log("Number of cancelled requests: " + S.numberOfCancelledRequests),
                    S.numberOfCancelledActiveRequests > 0 &&
                        console.log(
                            "Number of cancelled active requests: " +
                                S.numberOfCancelledActiveRequests
                        ),
                    S.numberOfFailedRequests > 0 &&
                        console.log("Number of failed requests: " + S.numberOfFailedRequests),
                    T());
            }
            var S = {
                    numberOfAttemptedRequests: 0,
                    numberOfActiveRequests: 0,
                    numberOfCancelledRequests: 0,
                    numberOfCancelledActiveRequests: 0,
                    numberOfFailedRequests: 0,
                    numberOfActiveRequestsEver: 0
                },
                C = 20,
                g = new s({ comparator: f });
            (g.maximumLength = C), g.reserve(C);
            var v = [],
                N = {},
                I = "undefined" != typeof document ? new e(document.location.href) : new e(),
                O = new a();
            return (
                (h.maximumRequests = 50),
                (h.maximumRequestsPerServer = 6),
                (h.requestsByServer = { "api.cesium.com:443": 18, "assets.cesium.com:443": 18 }),
                (h.throttleRequests = !0),
                (h.debugShowStatistics = !1),
                (h.requestCompletedEvent = O),
                i(h, {
                    statistics: {
                        get: function() {
                            return S;
                        }
                    },
                    priorityHeapLength: {
                        get: function() {
                            return C;
                        },
                        set: function(e) {
                            if (e < C)
                                for (; g.length > e; ) {
                                    var t = g.pop();
                                    R(t);
                                }
                            (C = e), (g.maximumLength = e), g.reserve(e);
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
                        i = g.length;
                    for (e = 0; e < i; ++e) d(o[e]);
                    g.resort();
                    for (
                        var a = Math.max(h.maximumRequests - v.length, 0), s = 0;
                        s < a && g.length > 0;

                    )
                        (t = g.pop()),
                            t.cancelled
                                ? R(t)
                                : !t.throttleByServer || E(t.serverKey)
                                ? (y(t), ++s)
                                : R(t);
                    A();
                }),
                (h.getServerKey = function(t) {
                    var r = new e(t).resolve(I);
                    r.normalize();
                    var n = r.authority;
                    /:/.test(n) || (n = n + ":" + ("https" === r.scheme ? "443" : "80"));
                    var i = N[n];
                    return o(i) || (N[n] = 0), n;
                }),
                (h.request = function(e) {
                    if (c(e.url) || u(e.url))
                        return O.raiseEvent(), (e.state = l.RECEIVED), e.requestFunction();
                    if (
                        (++S.numberOfAttemptedRequests,
                        o(e.serverKey) || (e.serverKey = h.getServerKey(e.url)),
                        !h.throttleRequests || !e.throttle)
                    )
                        return y(e);
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
                        return p(e);
                    }
                }),
                (h.clearForSpecs = function() {
                    for (; g.length > 0; ) {
                        R(g.pop());
                    }
                    for (var e = v.length, t = 0; t < e; ++t) R(v[t]);
                    (v.length = 0),
                        (N = {}),
                        (S.numberOfAttemptedRequests = 0),
                        (S.numberOfActiveRequests = 0),
                        (S.numberOfCancelledRequests = 0),
                        (S.numberOfCancelledActiveRequests = 0),
                        (S.numberOfFailedRequests = 0),
                        (S.numberOfActiveRequestsEver = 0);
                }),
                (h.numberOfActiveRequestsByServer = function(e) {
                    return N[e];
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
                        var i = n.getScheme();
                        if (
                            (t(i) ||
                                ((i = window.location.protocol),
                                (i = i.substring(0, i.length - 1))),
                            "http" === i)
                        )
                            o += ":80";
                        else {
                            if ("https" !== i) return;
                            o += ":443";
                        }
                    }
                    return o;
                }
            }
            var o = {},
                i = {};
            return (
                (o.add = function(e, r) {
                    var n = e.toLowerCase() + ":" + r;
                    t(i[n]) || (i[n] = !0);
                }),
                (o.remove = function(e, r) {
                    var n = e.toLowerCase() + ":" + r;
                    t(i[n]) && delete i[n];
                }),
                (o.contains = function(e) {
                    var r = n(e);
                    return !(!t(r) || !t(i[r]));
                }),
                (o.clear = function() {
                    i = {};
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
            i,
            a,
            s,
            u,
            c,
            l,
            f,
            h,
            d,
            E,
            p,
            m,
            _,
            y,
            R,
            T,
            A,
            S,
            C,
            g,
            v,
            N
        ) {
            "use strict";
            function I(e, t, r, n) {
                var o = e.query;
                if (!s(o) || 0 === o.length) return {};
                var i;
                if (-1 === o.indexOf("=")) {
                    var a = {};
                    (a[o] = void 0), (i = a);
                } else i = T(o);
                (t._queryParameters = r ? P(i, t._queryParameters, n) : i), (e.query = void 0);
            }
            function O(e, t) {
                var r = t._queryParameters,
                    n = Object.keys(r);
                1 !== n.length || s(r[n[0]]) ? (e.query = R(r)) : (e.query = n[0]);
            }
            function M(e, t) {
                return s(e) ? (s(e.clone) ? e.clone() : o(e)) : t;
            }
            function w(e) {
                if (e.state === g.ISSUED || e.state === g.ACTIVE)
                    throw new v("The Resource is already being fetched.");
                (e.state = g.UNISSUED), (e.deferred = void 0);
            }
            function P(e, t, r) {
                if (!r) return i(e, t);
                var n = o(e, !0);
                for (var a in t)
                    if (t.hasOwnProperty(a)) {
                        var u = n[a],
                            c = t[a];
                        s(u)
                            ? (Array.isArray(u) || (u = n[a] = [u]), (n[a] = u.concat(c)))
                            : (n[a] = Array.isArray(c) ? c.slice() : c);
                    }
                return n;
            }
            function D(t) {
                (t = a(t, a.EMPTY_OBJECT)),
                    "string" == typeof t && (t = { url: t }),
                    (this._url = void 0),
                    (this._templateValues = M(t.templateValues, {})),
                    (this._queryParameters = M(t.queryParameters, {})),
                    (this.headers = M(t.headers, {})),
                    (this.request = a(t.request, new A())),
                    (this.proxy = t.proxy),
                    (this.retryCallback = t.retryCallback),
                    (this.retryAttempts = a(t.retryAttempts, 0)),
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
                        return D._Implementations.createImage(r, n, o), o.promise;
                    });
                var n = C.request(r);
                if (s(n))
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
            function U(e, r, n) {
                var o = {};
                (o[r] = n), e.setQueryParameters(o);
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
                            D._Implementations.loadAndExecuteScript(e.url, n, r),
                            r.promise
                        );
                    });
                var a = C.request(i);
                if (s(a))
                    return a.otherwise(function(o) {
                        return i.state !== g.FAILED
                            ? t.reject(o)
                            : e.retryOnError(o).then(function(a) {
                                  return a
                                      ? ((i.state = g.UNISSUED), (i.deferred = void 0), U(e, r, n))
                                      : t.reject(o);
                              });
                    });
            }
            function x(e, t) {
                var r = decodeURIComponent(t);
                return e ? atob(r) : r;
            }
            function L(e, t) {
                for (
                    var r = x(e, t), n = new ArrayBuffer(r.length), o = new Uint8Array(n), i = 0;
                    i < r.length;
                    i++
                )
                    o[i] = r.charCodeAt(i);
                return n;
            }
            function b(e, t) {
                t = a(t, "");
                var r = e[1],
                    n = !!e[2],
                    o = e[3];
                switch (t) {
                    case "":
                    case "text":
                        return x(n, o);
                    case "arraybuffer":
                        return L(n, o);
                    case "blob":
                        var i = L(n, o);
                        return new Blob([i], { type: r });
                    case "document":
                        return new DOMParser().parseFromString(x(n, o), r);
                    case "json":
                        return JSON.parse(x(n, o));
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
            function q(e, t, r, n, o, i, a) {
                var s = require("url").parse(e),
                    u = "https:" === s.protocol ? require("https") : require("http"),
                    c = require("zlib"),
                    l = {
                        protocol: s.protocol,
                        hostname: s.hostname,
                        port: s.port,
                        path: s.path,
                        query: s.query,
                        method: r,
                        headers: o
                    };
                u.request(l)
                    .on("response", function(e) {
                        if (e.statusCode < 200 || e.statusCode >= 300)
                            return void i.reject(new S(e.statusCode, e, e.headers));
                        var r = [];
                        e.on("data", function(e) {
                            r.push(e);
                        }),
                            e.on("end", function() {
                                var n = Buffer.concat(r);
                                "gzip" === e.headers["content-encoding"]
                                    ? c.gunzip(n, function(e, r) {
                                          e
                                              ? i.reject(new v("Error decompressing response."))
                                              : i.resolve(B(r, t));
                                      })
                                    : i.resolve(B(n, t));
                            });
                    })
                    .on("error", function(e) {
                        i.reject(new S());
                    })
                    .end();
            }
            var z = (function() {
                try {
                    var e = new XMLHttpRequest();
                    return (
                        e.open("GET", "#", !0), (e.responseType = "blob"), "blob" === e.responseType
                    );
                } catch (e) {
                    return !1;
                }
            })();
            (D.createIfNeeded = function(e) {
                return e instanceof D
                    ? e.getDerivedResource({ request: e.request })
                    : "string" != typeof e
                    ? e
                    : new D({ url: e });
            }),
                u(D, {
                    isBlobSupported: {
                        get: function() {
                            return z;
                        }
                    }
                }),
                u(D.prototype, {
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
                            return _(this._url);
                        }
                    },
                    isBlobUri: {
                        get: function() {
                            return p(this._url);
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
                (D.prototype.getUrlComponent = function(t, r) {
                    if (this.isDataUri) return this._url;
                    var n = new e(this._url);
                    t && O(n, this);
                    var o = n
                            .toString()
                            .replace(/%7B/g, "{")
                            .replace(/%7D/g, "}"),
                        i = this._templateValues,
                        a = Object.keys(i);
                    if (a.length > 0)
                        for (var u = 0; u < a.length; u++) {
                            var c = a[u],
                                l = i[c];
                            o = o.replace(new RegExp("{" + c + "}", "g"), encodeURIComponent(l));
                        }
                    return r && s(this.proxy) && (o = this.proxy.getURL(o)), o;
                }),
                (D.prototype.setQueryParameters = function(e, t) {
                    this._queryParameters = t
                        ? P(this._queryParameters, e, !1)
                        : P(e, this._queryParameters, !1);
                }),
                (D.prototype.addQueryParameters = function(e, t) {
                    return (
                        c(
                            "Resource.addQueryParameters",
                            "addQueryParameters has been deprecated and will be removed 1.45. Use setQueryParameters or appendQueryParameters instead."
                        ),
                        this.setQueryParameters(e, t)
                    );
                }),
                (D.prototype.appendQueryParameters = function(e) {
                    this._queryParameters = P(e, this._queryParameters, !0);
                }),
                (D.prototype.setTemplateValues = function(e, t) {
                    this._templateValues = t
                        ? i(this._templateValues, e)
                        : i(e, this._templateValues);
                }),
                (D.prototype.addTemplateValues = function(e, t) {
                    return (
                        c(
                            "Resource.addTemplateValues",
                            "addTemplateValues has been deprecated and will be removed 1.45. Use setTemplateValues."
                        ),
                        this.setTemplateValues(e, t)
                    );
                }),
                (D.prototype.getDerivedResource = function(t) {
                    var r = this.clone();
                    if (((r._retryCount = 0), s(t.url))) {
                        var n = new e(t.url);
                        I(n, r, !0, a(t.preserveQueryParameters, !1)),
                            (n.fragment = void 0),
                            (r._url = n.resolve(new e(h(this._url))).toString());
                    }
                    return (
                        s(t.queryParameters) &&
                            (r._queryParameters = i(t.queryParameters, r._queryParameters)),
                        s(t.templateValues) &&
                            (r._templateValues = i(t.templateValues, r.templateValues)),
                        s(t.headers) && (r.headers = i(t.headers, r.headers)),
                        s(t.proxy) && (r.proxy = t.proxy),
                        s(t.request) && (r.request = t.request),
                        s(t.retryCallback) && (r.retryCallback = t.retryCallback),
                        s(t.retryAttempts) && (r.retryAttempts = t.retryAttempts),
                        r
                    );
                }),
                (D.prototype.retryOnError = function(e) {
                    var r = this.retryCallback;
                    if ("function" != typeof r || this._retryCount >= this.retryAttempts)
                        return t(!1);
                    var n = this;
                    return t(r(this, e)).then(function(e) {
                        return ++n._retryCount, e;
                    });
                }),
                (D.prototype.clone = function(e) {
                    return (
                        s(e) || (e = new D({ url: this._url })),
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
                (D.prototype.getBaseUri = function(e) {
                    return d(this.getUrlComponent(e), e);
                }),
                (D.prototype.appendForwardSlash = function() {
                    this._url = r(this._url);
                }),
                (D.prototype.fetchArrayBuffer = function() {
                    return this.fetch({ responseType: "arraybuffer" });
                }),
                (D.fetchArrayBuffer = function(e) {
                    return new D(e).fetchArrayBuffer();
                }),
                (D.prototype.fetchBlob = function() {
                    return this.fetch({ responseType: "blob" });
                }),
                (D.fetchBlob = function(e) {
                    return new D(e).fetchBlob();
                }),
                (D.prototype.fetchImage = function(e) {
                    if (
                        ((e = a(e, !1)),
                        w(this.request),
                        !z || this.isDataUri || this.isBlobUri || (!this.hasHeaders && !e))
                    )
                        return F(this, !0);
                    var r = this.fetchBlob();
                    if (s(r)) {
                        var n, o;
                        return r
                            .then(function(e) {
                                if (s(e)) {
                                    o = e;
                                    var t = window.URL.createObjectURL(e);
                                    return (n = new D({ url: t })), F(n);
                                }
                            })
                            .then(function(e) {
                                if (s(e)) return window.URL.revokeObjectURL(n.url), (e.blob = o), e;
                            })
                            .otherwise(function(e) {
                                return s(n) && window.URL.revokeObjectURL(n.url), t.reject(e);
                            });
                    }
                }),
                (D.fetchImage = function(e) {
                    return new D(e).fetchImage(e.preferBlob);
                }),
                (D.prototype.fetchText = function() {
                    return this.fetch({ responseType: "text" });
                }),
                (D.fetchText = function(e) {
                    return new D(e).fetchText();
                }),
                (D.prototype.fetchJson = function() {
                    var e = this.fetch({
                        responseType: "text",
                        headers: { Accept: "application/json,*/*;q=0.01" }
                    });
                    if (s(e))
                        return e.then(function(e) {
                            if (s(e)) return JSON.parse(e);
                        });
                }),
                (D.fetchJson = function(e) {
                    return new D(e).fetchJson();
                }),
                (D.prototype.fetchXML = function() {
                    return this.fetch({ responseType: "document", overrideMimeType: "text/xml" });
                }),
                (D.fetchXML = function(e) {
                    return new D(e).fetchXML();
                }),
                (D.prototype.fetchJsonp = function(e) {
                    (e = a(e, "callback")), w(this.request);
                    var t;
                    do {
                        t =
                            "loadJsonp" +
                            Math.random()
                                .toString()
                                .substring(2, 8);
                    } while (s(window[t]));
                    return U(this, e, t);
                }),
                (D.fetchJsonp = function(e) {
                    return new D(e).fetchJsonp(e.callbackParameterName);
                }),
                (D.prototype._makeRequest = function(e) {
                    var r = this;
                    w(r.request);
                    var n = r.request;
                    (n.url = r.url),
                        (n.requestFunction = function() {
                            var o = e.responseType,
                                a = i(e.headers, r.headers),
                                u = e.overrideMimeType,
                                c = e.method,
                                l = e.data,
                                f = t.defer(),
                                h = D._Implementations.loadWithXhr(r.url, o, c, l, a, f, u);
                            return (
                                s(h) &&
                                    s(h.abort) &&
                                    (n.cancelFunction = function() {
                                        h.abort();
                                    }),
                                f.promise
                            );
                        });
                    var o = C.request(n);
                    if (s(o))
                        return o
                            .then(function(e) {
                                return e;
                            })
                            .otherwise(function(o) {
                                return n.state !== g.FAILED
                                    ? t.reject(o)
                                    : r.retryOnError(o).then(function(i) {
                                          return i
                                              ? ((n.state = g.UNISSUED),
                                                (n.deferred = void 0),
                                                r.fetch(e))
                                              : t.reject(o);
                                      });
                            });
                });
            var G = /^data:(.*?)(;base64)?,(.*)$/;
            (D.prototype.fetch = function(e) {
                return (e = M(e, {})), (e.method = "GET"), this._makeRequest(e);
            }),
                (D.fetch = function(e) {
                    return new D(e).fetch({
                        responseType: e.responseType,
                        overrideMimeType: e.overrideMimeType
                    });
                }),
                (D.prototype.delete = function(e) {
                    return (e = M(e, {})), (e.method = "DELETE"), this._makeRequest(e);
                }),
                (D.delete = function(e) {
                    return new D(e).delete({
                        responseType: e.responseType,
                        overrideMimeType: e.overrideMimeType,
                        data: e.data
                    });
                }),
                (D.prototype.head = function(e) {
                    return (e = M(e, {})), (e.method = "HEAD"), this._makeRequest(e);
                }),
                (D.head = function(e) {
                    return new D(e).head({
                        responseType: e.responseType,
                        overrideMimeType: e.overrideMimeType
                    });
                }),
                (D.prototype.options = function(e) {
                    return (e = M(e, {})), (e.method = "OPTIONS"), this._makeRequest(e);
                }),
                (D.options = function(e) {
                    return new D(e).options({
                        responseType: e.responseType,
                        overrideMimeType: e.overrideMimeType
                    });
                }),
                (D.prototype.post = function(e, t) {
                    return (
                        n.defined("data", e),
                        (t = M(t, {})),
                        (t.method = "POST"),
                        (t.data = e),
                        this._makeRequest(t)
                    );
                }),
                (D.post = function(e) {
                    return new D(e).post(e.data, {
                        responseType: e.responseType,
                        overrideMimeType: e.overrideMimeType
                    });
                }),
                (D.prototype.put = function(e, t) {
                    return (
                        n.defined("data", e),
                        (t = M(t, {})),
                        (t.method = "PUT"),
                        (t.data = e),
                        this._makeRequest(t)
                    );
                }),
                (D.put = function(e) {
                    return new D(e).put(e.data, {
                        responseType: e.responseType,
                        overrideMimeType: e.overrideMimeType
                    });
                }),
                (D.prototype.patch = function(e, t) {
                    return (
                        n.defined("data", e),
                        (t = M(t, {})),
                        (t.method = "PATCH"),
                        (t.data = e),
                        this._makeRequest(t)
                    );
                }),
                (D.patch = function(e) {
                    return new D(e).patch(e.data, {
                        responseType: e.responseType,
                        overrideMimeType: e.overrideMimeType
                    });
                }),
                (D._Implementations = {}),
                (D._Implementations.createImage = function(e, t, r) {
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
                (D._Implementations.loadWithXhr = function(e, t, r, n, o, i, a) {
                    var u = G.exec(e);
                    if (null !== u) return void i.resolve(b(u, t));
                    if (V) return void q(e, t, r, n, o, i, a);
                    var c = new XMLHttpRequest();
                    if (
                        (N.contains(e) && (c.withCredentials = !0),
                        c.open(r, e, !0),
                        s(a) && s(c.overrideMimeType) && c.overrideMimeType(a),
                        s(o))
                    )
                        for (var l in o) o.hasOwnProperty(l) && c.setRequestHeader(l, o[l]);
                    s(t) && (c.responseType = t);
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
                                    new S(c.status, c.response, c.getAllResponseHeaders())
                                );
                            var e = c.response,
                                n = c.responseType;
                            if ("HEAD" === r || "OPTIONS" === r) {
                                var o = c.getAllResponseHeaders(),
                                    a = o.trim().split(/[\r\n]+/),
                                    u = {};
                                return (
                                    a.forEach(function(e) {
                                        var t = e.split(": "),
                                            r = t.shift();
                                        u[r] = t.join(": ");
                                    }),
                                    void i.resolve(u)
                                );
                            }
                            if (204 === c.status) i.resolve();
                            else if (!s(e) || (s(t) && n !== t))
                                if ("json" === t && "string" == typeof e)
                                    try {
                                        i.resolve(JSON.parse(e));
                                    } catch (e) {
                                        i.reject(e);
                                    }
                                else
                                    ("" === n || "document" === n) &&
                                    s(c.responseXML) &&
                                    c.responseXML.hasChildNodes()
                                        ? i.resolve(c.responseXML)
                                        : ("" !== n && "text" !== n) || !s(c.responseText)
                                        ? i.reject(new v("Invalid XMLHttpRequest response type."))
                                        : i.resolve(c.responseText);
                            else i.resolve(e);
                        }),
                        (c.onerror = function(e) {
                            i.reject(new S());
                        }),
                        c.send(n),
                        c
                    );
                }),
                (D._Implementations.loadAndExecuteScript = function(e, t, r) {
                    return y(e, t).otherwise(r.reject);
                }),
                (D._DefaultImplementations = {}),
                (D._DefaultImplementations.createImage = D._Implementations.createImage),
                (D._DefaultImplementations.loadWithXhr = D._Implementations.loadWithXhr),
                (D._DefaultImplementations.loadAndExecuteScript =
                    D._Implementations.loadAndExecuteScript),
                (D.DEFAULT = f(
                    new D({
                        url:
                            "undefined" == typeof document
                                ? ""
                                : document.location.href.split("?")[0]
                    })
                )),
                D
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
        ], function(e, t, r, n, o, i, a, s, u, c, l, f) {
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
                    var o = u.createIfNeeded(t.url),
                        i = this;
                    this._downloadPromise = e(
                        o.fetchJson(),
                        function(e) {
                            E(i, e);
                        },
                        function() {
                            i._dataError =
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
                return a.compare(e.julianDate, t);
            }
            function E(e, r) {
                if (!n(r.columnNames))
                    return void (e._dataError =
                        "Error in loaded EOP data: The columnNames property is required.");
                if (!n(r.samples))
                    return void (e._dataError =
                        "Error in loaded EOP data: The samples property is required.");
                var o = r.columnNames.indexOf("modifiedJulianDateUtc"),
                    i = r.columnNames.indexOf("xPoleWanderRadians"),
                    u = r.columnNames.indexOf("yPoleWanderRadians"),
                    c = r.columnNames.indexOf("ut1MinusUtcSeconds"),
                    h = r.columnNames.indexOf("xCelestialPoleOffsetRadians"),
                    E = r.columnNames.indexOf("yCelestialPoleOffsetRadians"),
                    p = r.columnNames.indexOf("taiMinusUtcSeconds");
                if (o < 0 || i < 0 || u < 0 || c < 0 || h < 0 || E < 0 || p < 0)
                    return void (e._dataError =
                        "Error in loaded EOP data: The columnNames property must include modifiedJulianDateUtc, xPoleWanderRadians, yPoleWanderRadians, ut1MinusUtcSeconds, xCelestialPoleOffsetRadians, yCelestialPoleOffsetRadians, and taiMinusUtcSeconds columns");
                var m = (e._samples = r.samples),
                    _ = (e._dates = []);
                (e._dateColumn = o),
                    (e._xPoleWanderRadiansColumn = i),
                    (e._yPoleWanderRadiansColumn = u),
                    (e._ut1MinusUtcSecondsColumn = c),
                    (e._xCelestialPoleOffsetRadiansColumn = h),
                    (e._yCelestialPoleOffsetRadiansColumn = E),
                    (e._taiMinusUtcSecondsColumn = p),
                    (e._columnCount = r.columnNames.length),
                    (e._lastIndex = void 0);
                for (
                    var y, R = e._addNewLeapSeconds, T = 0, A = m.length;
                    T < A;
                    T += e._columnCount
                ) {
                    var S = m[T + o],
                        C = m[T + p],
                        g = S + l.MODIFIED_JULIAN_DATE_DIFFERENCE,
                        v = new a(g, C, f.TAI);
                    if ((_.push(v), R)) {
                        if (C !== y && n(y)) {
                            var N = a.leapSeconds,
                                I = t(N, v, d);
                            if (I < 0) {
                                var O = new s(v, C);
                                N.splice(~I, 0, O);
                            }
                        }
                        y = C;
                    }
                }
            }
            function p(e, t, r, n, o) {
                var i = r * n;
                (o.xPoleWander = t[i + e._xPoleWanderRadiansColumn]),
                    (o.yPoleWander = t[i + e._yPoleWanderRadiansColumn]),
                    (o.xPoleOffset = t[i + e._xCelestialPoleOffsetRadiansColumn]),
                    (o.yPoleOffset = t[i + e._yCelestialPoleOffsetRadiansColumn]),
                    (o.ut1MinusUtc = t[i + e._ut1MinusUtcSecondsColumn]);
            }
            function m(e, t, r) {
                return t + e * (r - t);
            }
            function _(e, t, r, n, o, i, s) {
                var u = e._columnCount;
                if (i > t.length - 1)
                    return (
                        (s.xPoleWander = 0),
                        (s.yPoleWander = 0),
                        (s.xPoleOffset = 0),
                        (s.yPoleOffset = 0),
                        (s.ut1MinusUtc = 0),
                        s
                    );
                var c = t[o],
                    l = t[i];
                if (c.equals(l) || n.equals(c)) return p(e, r, o, u, s), s;
                if (n.equals(l)) return p(e, r, i, u, s), s;
                var f = a.secondsDifference(n, c) / a.secondsDifference(l, c),
                    h = o * u,
                    d = i * u,
                    E = r[h + e._ut1MinusUtcSecondsColumn],
                    _ = r[d + e._ut1MinusUtcSecondsColumn],
                    y = _ - E;
                if (y > 0.5 || y < -0.5) {
                    var R = r[h + e._taiMinusUtcSecondsColumn],
                        T = r[d + e._taiMinusUtcSecondsColumn];
                    R !== T && (l.equals(n) ? (E = _) : (_ -= T - R));
                }
                return (
                    (s.xPoleWander = m(
                        f,
                        r[h + e._xPoleWanderRadiansColumn],
                        r[d + e._xPoleWanderRadiansColumn]
                    )),
                    (s.yPoleWander = m(
                        f,
                        r[h + e._yPoleWanderRadiansColumn],
                        r[d + e._yPoleWanderRadiansColumn]
                    )),
                    (s.xPoleOffset = m(
                        f,
                        r[h + e._xCelestialPoleOffsetRadiansColumn],
                        r[d + e._xCelestialPoleOffsetRadiansColumn]
                    )),
                    (s.yPoleOffset = m(
                        f,
                        r[h + e._yCelestialPoleOffsetRadiansColumn],
                        r[d + e._yCelestialPoleOffsetRadiansColumn]
                    )),
                    (s.ut1MinusUtc = m(f, E, _)),
                    s
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
                        var i = this._dates,
                            s = this._lastIndex,
                            u = 0,
                            l = 0;
                        if (n(s)) {
                            var f = i[s],
                                h = i[s + 1],
                                d = a.lessThanOrEquals(f, e),
                                E = !n(h),
                                p = E || a.greaterThanOrEquals(h, e);
                            if (d && p)
                                return (
                                    (u = s),
                                    !E && h.equals(e) && ++u,
                                    (l = u + 1),
                                    _(this, i, this._samples, e, u, l, r),
                                    r
                                );
                        }
                        var m = t(i, e, a.compare, this._dateColumn);
                        return (
                            m >= 0
                                ? (m < i.length - 1 && i[m + 1].equals(e) && ++m, (u = m), (l = m))
                                : ((l = ~m), (u = l - 1) < 0 && (u = 0)),
                            (this._lastIndex = u),
                            _(this, i, this._samples, e, u, l, r),
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
                        i = 1 - 2 * (e.x * e.x + e.y * e.y),
                        a = 2 * (e.w * e.x + e.y * e.z),
                        s = 1 - 2 * (e.y * e.y + e.z * e.z),
                        u = 2 * (e.w * e.z + e.x * e.y);
                    return (
                        (r.heading = -Math.atan2(u, s)),
                        (r.roll = Math.atan2(a, i)),
                        (r.pitch = -Math.asin(n)),
                        r
                    );
                }),
                (o.fromDegrees = function(e, r, i, a) {
                    return (
                        t(a) || (a = new o()),
                        (a.heading = e * n.RADIANS_PER_DEGREE),
                        (a.pitch = r * n.RADIANS_PER_DEGREE),
                        (a.roll = i * n.RADIANS_PER_DEGREE),
                        a
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
                (o.equalsEpsilon = function(e, r, o, i) {
                    return (
                        e === r ||
                        (t(e) &&
                            t(r) &&
                            n.equalsEpsilon(e.heading, r.heading, o, i) &&
                            n.equalsEpsilon(e.pitch, r.pitch, o, i) &&
                            n.equalsEpsilon(e.roll, r.roll, o, i))
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
            function i() {
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
            function a(t) {
                return "undefined" == typeof document
                    ? t
                    : (e(f) || (f = document.createElement("a")),
                      (f.href = t),
                      (f.href = f.href),
                      f.href);
            }
            function s() {
                if (e(h)) return h;
                var t;
                return (
                    (t =
                        "undefined" != typeof CESIUM_BASE_URL
                            ? CESIUM_BASE_URL
                            : e(define.amd) && !define.amd.toUrlUndefined && e(o.toUrl)
                            ? r("..", l("Core/buildModuleUrl.js"))
                            : i()),
                    (h = new n({ url: a(t) })),
                    h.appendForwardSlash(),
                    h
                );
            }
            function u(e) {
                return a(o.toUrl("../" + e));
            }
            function c(e) {
                return s().getDerivedResource({ url: e }).url;
            }
            function l(t) {
                return (
                    e(d) || (d = e(define.amd) && !define.amd.toUrlUndefined && e(o.toUrl) ? u : c),
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
                (l.getCesiumBaseUrl = s),
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
        ], function(e, t, r, n, o, i, a, s) {
            "use strict";
            function u(e) {
                (e = r(e, r.EMPTY_OBJECT)),
                    (this._xysFileUrlTemplate = a.createIfNeeded(e.xysFileUrlTemplate)),
                    (this._interpolationOrder = r(e.interpolationOrder, 9)),
                    (this._sampleZeroJulianEphemerisDate = r(
                        e.sampleZeroJulianEphemerisDate,
                        2442396.5
                    )),
                    (this._sampleZeroDateTT = new i(this._sampleZeroJulianEphemerisDate, 0, s.TAI)),
                    (this._stepSizeDays = r(e.stepSizeDays, 1)),
                    (this._samplesPerXysFile = r(e.samplesPerXysFile, 1e3)),
                    (this._totalSamples = r(e.totalSamples, 27426)),
                    (this._samples = new Array(3 * this._totalSamples)),
                    (this._chunkDownloadsInProgress = []);
                for (
                    var t = this._interpolationOrder,
                        n = (this._denominators = new Array(t + 1)),
                        o = (this._xTable = new Array(t + 1)),
                        u = Math.pow(this._stepSizeDays, t),
                        c = 0;
                    c <= t;
                    ++c
                ) {
                    (n[c] = u), (o[c] = c * this._stepSizeDays);
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
            function l(r, o) {
                if (r._chunkDownloadsInProgress[o]) return r._chunkDownloadsInProgress[o];
                var i = e.defer();
                r._chunkDownloadsInProgress[o] = i;
                var s,
                    u = r._xysFileUrlTemplate;
                return (
                    (s = n(u)
                        ? u.getDerivedResource({ templateValues: { 0: o } })
                        : new a({ url: t("Assets/IAU2006_XYS/IAU2006_XYS_" + o + ".json") })),
                    e(s.fetchJson(), function(e) {
                        r._chunkDownloadsInProgress[o] = !1;
                        for (
                            var t = r._samples,
                                n = e.samples,
                                a = o * r._samplesPerXysFile * 3,
                                s = 0,
                                u = n.length;
                            s < u;
                            ++s
                        )
                            t[a + s] = n[s];
                        i.resolve();
                    }),
                    i.promise
                );
            }
            var f = new i(0, 0, s.TAI);
            return (
                (u.prototype.preload = function(t, r, n, o) {
                    var i = c(this, t, r),
                        a = c(this, n, o),
                        s = (i / this._stepSizeDays - this._interpolationOrder / 2) | 0;
                    s < 0 && (s = 0);
                    var u =
                        (a / this._stepSizeDays - this._interpolationOrder / 2) |
                        (0 + this._interpolationOrder);
                    u >= this._totalSamples && (u = this._totalSamples - 1);
                    for (
                        var f = (s / this._samplesPerXysFile) | 0,
                            h = (u / this._samplesPerXysFile) | 0,
                            d = [],
                            E = f;
                        E <= h;
                        ++E
                    )
                        d.push(l(this, E));
                    return e.all(d);
                }),
                (u.prototype.computeXysRadians = function(e, t, r) {
                    var i = c(this, e, t);
                    if (!(i < 0)) {
                        var a = (i / this._stepSizeDays) | 0;
                        if (!(a >= this._totalSamples)) {
                            var s = this._interpolationOrder,
                                u = a - ((s / 2) | 0);
                            u < 0 && (u = 0);
                            var f = u + s;
                            f >= this._totalSamples &&
                                ((f = this._totalSamples - 1), (u = f - s) < 0 && (u = 0));
                            var h = !1,
                                d = this._samples;
                            if (
                                (n(d[3 * u]) ||
                                    (l(this, (u / this._samplesPerXysFile) | 0), (h = !0)),
                                n(d[3 * f]) ||
                                    (l(this, (f / this._samplesPerXysFile) | 0), (h = !0)),
                                !h)
                            ) {
                                n(r) ? ((r.x = 0), (r.y = 0), (r.s = 0)) : (r = new o(0, 0, 0));
                                var E,
                                    p,
                                    m = i - u * this._stepSizeDays,
                                    _ = this._work,
                                    y = this._denominators,
                                    R = this._coef,
                                    T = this._xTable;
                                for (E = 0; E <= s; ++E) _[E] = m - T[E];
                                for (E = 0; E <= s; ++E) {
                                    for (R[E] = 1, p = 0; p <= s; ++p) p !== E && (R[E] *= _[p]);
                                    R[E] *= y[E];
                                    var A = 3 * (u + E);
                                    (r.x += R[E] * d[A++]),
                                        (r.y += R[E] * d[A++]),
                                        (r.s += R[E] * d[A]);
                                }
                                return r;
                            }
                        }
                    }
                }),
                u
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
        ], function(e, t, r, n, o, i, a, s, u, c, l, f, h, d, E, p, m, _, y, R, T) {
            "use strict";
            var A = {},
                S = {
                    up: { south: "east", north: "west", west: "south", east: "north" },
                    down: { south: "west", north: "east", west: "north", east: "south" },
                    south: { up: "west", down: "east", west: "down", east: "up" },
                    north: { up: "east", down: "west", west: "up", east: "down" },
                    west: { up: "north", down: "south", north: "down", south: "up" },
                    east: { up: "south", down: "north", north: "up", south: "down" }
                },
                C = {
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
                N = new r(),
                I = new r(),
                O = new r();
            (A.localFrameToFixedFrameGenerator = function(e, t) {
                if (!S.hasOwnProperty(e) || !S[e].hasOwnProperty(t))
                    throw new u(
                        "firstAxis and secondAxis must be east, north, up, west, south or down."
                    );
                var n,
                    o = S[e][t],
                    i = e + t;
                return (
                    s(g[i])
                        ? (n = g[i])
                        : ((n = function(n, i, u) {
                              if (
                                  (s(u) || (u = new y()),
                                  m.equalsEpsilon(n.x, 0, m.EPSILON14) &&
                                      m.equalsEpsilon(n.y, 0, m.EPSILON14))
                              ) {
                                  var c = m.sign(n.z);
                                  r.unpack(C[e], 0, N),
                                      "east" !== e && "west" !== e && r.multiplyByScalar(N, c, N),
                                      r.unpack(C[t], 0, I),
                                      "east" !== t && "west" !== t && r.multiplyByScalar(I, c, I),
                                      r.unpack(C[o], 0, O),
                                      "east" !== o && "west" !== o && r.multiplyByScalar(O, c, O);
                              } else {
                                  (i = a(i, f.WGS84)), i.geodeticSurfaceNormal(n, v.up);
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
                                      (N = v[e]),
                                      (I = v[t]),
                                      (O = v[o]);
                              }
                              return (
                                  (u[0] = N.x),
                                  (u[1] = N.y),
                                  (u[2] = N.z),
                                  (u[3] = 0),
                                  (u[4] = I.x),
                                  (u[5] = I.y),
                                  (u[6] = I.z),
                                  (u[7] = 0),
                                  (u[8] = O.x),
                                  (u[9] = O.y),
                                  (u[10] = O.z),
                                  (u[11] = 0),
                                  (u[12] = n.x),
                                  (u[13] = n.y),
                                  (u[14] = n.z),
                                  (u[15] = 1),
                                  u
                              );
                          }),
                          (g[i] = n)),
                    n
                );
            }),
                (A.eastNorthUpToFixedFrame = A.localFrameToFixedFrameGenerator("east", "north")),
                (A.northEastDownToFixedFrame = A.localFrameToFixedFrameGenerator("north", "east")),
                (A.northUpEastToFixedFrame = A.localFrameToFixedFrameGenerator("north", "up")),
                (A.northWestUpToFixedFrame = A.localFrameToFixedFrameGenerator("north", "west"));
            var M = new R(),
                w = new r(1, 1, 1),
                P = new y();
            A.headingPitchRollToFixedFrame = function(e, t, n, o, i) {
                o = a(o, A.eastNorthUpToFixedFrame);
                var s = R.fromHeadingPitchRoll(t, M),
                    u = y.fromTranslationQuaternionRotationScale(r.ZERO, s, w, P);
                return (i = o(e, n, i)), y.multiply(i, u, i);
            };
            var D = new y(),
                F = new _();
            A.headingPitchRollQuaternion = function(e, t, r, n, o) {
                var i = A.headingPitchRollToFixedFrame(e, t, r, n, D),
                    a = y.getRotation(i, F);
                return R.fromRotationMatrix(a, o);
            };
            var U = new r(1, 1, 1),
                x = new r(),
                L = new y(),
                b = new y(),
                B = new _(),
                q = new R();
            A.fixedFrameToHeadingPitchRoll = function(e, t, n, o) {
                (t = a(t, f.WGS84)), (n = a(n, A.eastNorthUpToFixedFrame)), s(o) || (o = new h());
                var i = y.getTranslation(e, x);
                if (r.equals(i, r.ZERO)) return (o.heading = 0), (o.pitch = 0), (o.roll = 0), o;
                var u = y.inverseTransformation(n(i, t, L), L),
                    c = y.setScale(e, U, b);
                (c = y.setTranslation(c, r.ZERO, c)), (u = y.multiply(u, c, u));
                var l = R.fromRotationMatrix(y.getRotation(u, B), q);
                return (l = R.normalize(l, l)), h.fromQuaternion(l, o);
            };
            var z = m.TWO_PI / 86400,
                G = new p();
            (A.computeTemeToPseudoFixedMatrix = function(e, t) {
                G = p.addSeconds(e, -p.computeTaiMinusUtc(e), G);
                var r,
                    n = G.dayNumber,
                    o = G.secondsOfDay,
                    i = n - 2451545;
                r =
                    o >= 43200
                        ? (i + 0.5) / T.DAYS_PER_JULIAN_CENTURY
                        : (i - 0.5) / T.DAYS_PER_JULIAN_CENTURY;
                var a = 24110.54841 + r * (8640184.812866 + r * (0.093104 + -62e-7 * r)),
                    u = (a * z) % m.TWO_PI,
                    c = 72921158553e-15 + 1.1772758384668e-19 * (n - 2451545.5),
                    l = (o + 0.5 * T.SECONDS_PER_DAY) % T.SECONDS_PER_DAY,
                    f = u + c * l,
                    h = Math.cos(f),
                    d = Math.sin(f);
                return s(t)
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
                    : new _(h, d, 0, -d, h, 0, 0, 0, 1);
            }),
                (A.iau2006XysData = new d()),
                (A.earthOrientationParameters = c.NONE);
            (A.preloadIcrfFixed = function(t) {
                var r = t.start.dayNumber,
                    n = t.start.secondsOfDay + 32.184,
                    o = t.stop.dayNumber,
                    i = t.stop.secondsOfDay + 32.184,
                    a = A.iau2006XysData.preload(r, n, o, i),
                    s = A.earthOrientationParameters.getPromiseToLoad();
                return e.all([a, s]);
            }),
                (A.computeIcrfToFixedMatrix = function(e, t) {
                    s(t) || (t = new _());
                    var r = A.computeFixedToIcrfMatrix(e, t);
                    if (s(r)) return _.transpose(r, t);
                });
            var V = new E(0, 0, 0),
                H = new l(0, 0, 0, 0, 0, 0),
                W = new _(),
                X = new _();
            A.computeFixedToIcrfMatrix = function(e, t) {
                s(t) || (t = new _());
                var r = A.earthOrientationParameters.compute(e, H);
                if (s(r)) {
                    var n = e.dayNumber,
                        o = e.secondsOfDay + 32.184,
                        i = A.iau2006XysData.computeXysRadians(n, o, V);
                    if (s(i)) {
                        var a = i.x + r.xPoleOffset,
                            u = i.y + r.yPoleOffset,
                            c = 1 / (1 + Math.sqrt(1 - a * a - u * u)),
                            l = W;
                        (l[0] = 1 - c * a * a),
                            (l[3] = -c * a * u),
                            (l[6] = a),
                            (l[1] = -c * a * u),
                            (l[4] = 1 - c * u * u),
                            (l[7] = u),
                            (l[2] = -a),
                            (l[5] = -u),
                            (l[8] = 1 - c * (a * a + u * u));
                        var f = _.fromRotationZ(-i.s, X),
                            h = _.multiply(l, f, W),
                            d = e.dayNumber,
                            E = e.secondsOfDay - p.computeTaiMinusUtc(e) + r.ut1MinusUtc,
                            y = d - 2451545,
                            R = E / T.SECONDS_PER_DAY,
                            S = 0.779057273264 + R + 0.00273781191135448 * (y + R);
                        S = (S % 1) * m.TWO_PI;
                        var C = _.fromRotationZ(S, X),
                            g = _.multiply(h, C, W),
                            v = Math.cos(r.xPoleWander),
                            N = Math.cos(r.yPoleWander),
                            I = Math.sin(r.xPoleWander),
                            O = Math.sin(r.yPoleWander),
                            M = n - 2451545 + o / T.SECONDS_PER_DAY;
                        M /= 36525;
                        var w = (-47e-6 * M * m.RADIANS_PER_DEGREE) / 3600,
                            P = Math.cos(w),
                            D = Math.sin(w),
                            F = X;
                        return (
                            (F[0] = v * P),
                            (F[1] = v * D),
                            (F[2] = I),
                            (F[3] = -N * D + O * I * P),
                            (F[4] = N * P + O * I * D),
                            (F[5] = -O * v),
                            (F[6] = -O * D - N * I * P),
                            (F[7] = O * P - N * I * D),
                            (F[8] = N * v),
                            _.multiply(g, F, t)
                        );
                    }
                }
            };
            var Y = new n();
            (A.pointToWindowCoordinates = function(e, t, r, n) {
                return (n = A.pointToGLWindowCoordinates(e, t, r, n)), (n.y = 2 * t[5] - n.y), n;
            }),
                (A.pointToGLWindowCoordinates = function(e, r, o, i) {
                    s(i) || (i = new t());
                    var a = Y;
                    return (
                        y.multiplyByVector(e, n.fromElements(o.x, o.y, o.z, 1, a), a),
                        n.multiplyByScalar(a, 1 / a.w, a),
                        y.multiplyByVector(r, a, a),
                        t.fromCartesian4(a, i)
                    );
                });
            var k = new r(),
                j = new r(),
                K = new r();
            A.rotationMatrixFromPositionVelocity = function(e, t, n, o) {
                var i = a(n, f.WGS84).geodeticSurfaceNormal(e, k),
                    u = r.cross(t, i, j);
                r.equalsEpsilon(u, r.ZERO, m.EPSILON6) && (u = r.clone(r.UNIT_X, u));
                var c = r.cross(u, t, K);
                return (
                    r.normalize(c, c),
                    r.cross(t, c, u),
                    r.negate(u, u),
                    r.normalize(u, u),
                    s(o) || (o = new _()),
                    (o[0] = t.x),
                    (o[1] = t.y),
                    (o[2] = t.z),
                    (o[3] = u.x),
                    (o[4] = u.y),
                    (o[5] = u.z),
                    (o[6] = c.x),
                    (o[7] = c.y),
                    (o[8] = c.z),
                    o
                );
            };
            var Z = new y(0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1),
                Q = new o(),
                J = new r(),
                $ = new r(),
                ee = new _(),
                te = new y(),
                re = new y();
            return (
                (A.basisTo2D = function(e, t, n) {
                    var o = y.getTranslation(t, $),
                        i = e.ellipsoid,
                        a = i.cartesianToCartographic(o, Q),
                        s = e.project(a, J);
                    r.fromElements(s.z, s.x, s.y, s);
                    var u = A.eastNorthUpToFixedFrame(o, i, te),
                        c = y.inverseTransformation(u, re),
                        l = y.getRotation(t, ee),
                        f = y.multiplyByMatrix3(c, l, n);
                    return y.multiply(Z, f, n), y.setTranslation(n, s, n), n;
                }),
                (A.wgs84To2DModelMatrix = function(e, t, n) {
                    var o = e.ellipsoid,
                        i = A.eastNorthUpToFixedFrame(t, o, te),
                        a = y.inverseTransformation(i, re),
                        s = o.cartesianToCartographic(t, Q),
                        u = e.project(s, J);
                    r.fromElements(u.z, u.x, u.y, u);
                    var c = y.fromTranslation(u, te);
                    return y.multiply(Z, a, n), y.multiply(c, n, n), n;
                }),
                A
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
        ], function(e, t, r, n, o, i, a, s, u, c, l, f, h, d, E, p) {
            "use strict";
            function m(e) {
                (e = o(e, o.EMPTY_OBJECT)),
                    (this.attributes = e.attributes),
                    (this.indices = e.indices),
                    (this.primitiveType = o(e.primitiveType, h.TRIANGLES)),
                    (this.boundingSphere = e.boundingSphere),
                    (this.geometryType = o(e.geometryType, u.NONE)),
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
                            o = n.values.length / n.componentsPerAttribute;
                        t = o;
                    }
                return t;
            };
            var _ = new r(),
                y = new t(),
                R = new f(),
                T = [new r(), new r(), new r()],
                A = [new e(), new e(), new e()],
                S = [new e(), new e(), new e()],
                C = new t(),
                g = new d(),
                v = new f(),
                N = new c();
            return (
                (m._textureCoordinateRotationPoints = function(n, o, i, a) {
                    var s,
                        u = E.center(a, _),
                        h = r.toCartesian(u, i, y),
                        m = p.eastNorthUpToFixedFrame(h, i, R),
                        I = f.inverse(m, R),
                        O = A,
                        M = T;
                    (M[0].longitude = a.west),
                        (M[0].latitude = a.south),
                        (M[1].longitude = a.west),
                        (M[1].latitude = a.north),
                        (M[2].longitude = a.east),
                        (M[2].latitude = a.south);
                    var w = C;
                    for (s = 0; s < 3; s++)
                        r.toCartesian(M[s], i, w),
                            (w = f.multiplyByPointAsVector(I, w, w)),
                            (O[s].x = w.x),
                            (O[s].y = w.y);
                    var P = d.fromAxisAngle(t.UNIT_Z, -o, g),
                        D = l.fromQuaternion(P, v),
                        F = n.length,
                        U = Number.POSITIVE_INFINITY,
                        x = Number.POSITIVE_INFINITY,
                        L = Number.NEGATIVE_INFINITY,
                        b = Number.NEGATIVE_INFINITY;
                    for (s = 0; s < F; s++)
                        (w = f.multiplyByPointAsVector(I, n[s], w)),
                            (w = l.multiplyByVector(D, w, w)),
                            (U = Math.min(U, w.x)),
                            (x = Math.min(x, w.y)),
                            (L = Math.max(L, w.x)),
                            (b = Math.max(b, w.y));
                    var B = c.fromRotation(o, N),
                        q = S;
                    (q[0].x = U),
                        (q[0].y = x),
                        (q[1].x = U),
                        (q[1].y = b),
                        (q[2].x = L),
                        (q[2].y = x);
                    var z = O[0],
                        G = O[2].x - z.x,
                        V = O[1].y - z.y;
                    for (s = 0; s < 3; s++) {
                        var H = q[s];
                        c.multiplyByVector(B, H, H),
                            (H.x = (H.x - z.x) / G),
                            (H.y = (H.y - z.y) / V);
                    }
                    var W = q[0],
                        X = q[1],
                        Y = q[2],
                        k = new Array(6);
                    return e.pack(W, k), e.pack(X, k, 2), e.pack(Y, k, 4), k;
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
        define("Core/IndexDatatype", [
            "./defined",
            "./DeveloperError",
            "./freezeObject",
            "./Math",
            "./WebGLConstants"
        ], function(e, t, r, n, o) {
            "use strict";
            var i = {
                UNSIGNED_BYTE: o.UNSIGNED_BYTE,
                UNSIGNED_SHORT: o.UNSIGNED_SHORT,
                UNSIGNED_INT: o.UNSIGNED_INT
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
                (i.createTypedArrayFromArrayBuffer = function(e, t, r, o) {
                    return e >= n.SIXTY_FOUR_KILOBYTES
                        ? new Uint32Array(t, r, o)
                        : new Uint16Array(t, r, o);
                }),
                r(i)
            );
        }),
        define("Core/EllipsoidGeodesic", [
            "./Cartesian3",
            "./Cartographic",
            "./Check",
            "./defaultValue",
            "./defined",
            "./defineProperties",
            "./Ellipsoid",
            "./Math"
        ], function(e, t, r, n, o, i, a, s) {
            "use strict";
            function u(e) {
                var t = e._uSquared,
                    r = e._ellipsoid.maximumRadius,
                    n = e._ellipsoid.minimumRadius,
                    o = (r - n) / r,
                    i = Math.cos(e._startHeading),
                    a = Math.sin(e._startHeading),
                    s = (1 - o) * Math.tan(e._start.latitude),
                    u = 1 / Math.sqrt(1 + s * s),
                    c = u * s,
                    l = Math.atan2(s, i),
                    f = u * a,
                    h = f * f,
                    d = 1 - h,
                    E = Math.sqrt(d),
                    p = t / 4,
                    m = p * p,
                    _ = m * p,
                    y = m * m,
                    R = 1 + p - (3 * m) / 4 + (5 * _) / 4 - (175 * y) / 64,
                    T = 1 - p + (15 * m) / 8 - (35 * _) / 8,
                    A = 1 - 3 * p + (35 * m) / 4,
                    S = 1 - 5 * p,
                    C =
                        R * l -
                        (T * Math.sin(2 * l) * p) / 2 -
                        (A * Math.sin(4 * l) * m) / 16 -
                        (S * Math.sin(6 * l) * _) / 48 -
                        (5 * Math.sin(8 * l) * y) / 512,
                    g = e._constants;
                (g.a = r),
                    (g.b = n),
                    (g.f = o),
                    (g.cosineHeading = i),
                    (g.sineHeading = a),
                    (g.tanU = s),
                    (g.cosineU = u),
                    (g.sineU = c),
                    (g.sigma = l),
                    (g.sineAlpha = f),
                    (g.sineSquaredAlpha = h),
                    (g.cosineSquaredAlpha = d),
                    (g.cosineAlpha = E),
                    (g.u2Over4 = p),
                    (g.u4Over16 = m),
                    (g.u6Over64 = _),
                    (g.u8Over256 = y),
                    (g.a0 = R),
                    (g.a1 = T),
                    (g.a2 = A),
                    (g.a3 = S),
                    (g.distanceRatio = C);
            }
            function c(e, t) {
                return (e * t * (4 + e * (4 - 3 * t))) / 16;
            }
            function l(e, t, r, n, o, i, a) {
                var s = c(e, r);
                return (1 - s) * e * t * (n + s * o * (a + s * i * (2 * a * a - 1)));
            }
            function f(e, t, r, n, o, i, a) {
                var u,
                    c,
                    f,
                    h,
                    d,
                    E = (t - r) / t,
                    p = i - n,
                    m = Math.atan((1 - E) * Math.tan(o)),
                    _ = Math.atan((1 - E) * Math.tan(a)),
                    y = Math.cos(m),
                    R = Math.sin(m),
                    T = Math.cos(_),
                    A = Math.sin(_),
                    S = y * T,
                    C = y * A,
                    g = R * A,
                    v = R * T,
                    N = p,
                    I = s.TWO_PI,
                    O = Math.cos(N),
                    M = Math.sin(N);
                do {
                    (O = Math.cos(N)), (M = Math.sin(N));
                    var w = C - v * O;
                    (f = Math.sqrt(T * T * M * M + w * w)), (c = g + S * O), (u = Math.atan2(f, c));
                    var P;
                    0 === f ? ((P = 0), (h = 1)) : ((P = (S * M) / f), (h = 1 - P * P)),
                        (I = N),
                        (d = c - (2 * g) / h),
                        isNaN(d) && (d = 0),
                        (N = p + l(E, P, h, u, f, c, d));
                } while (Math.abs(N - I) > s.EPSILON12);
                var D = (h * (t * t - r * r)) / (r * r),
                    F = 1 + (D * (4096 + D * (D * (320 - 175 * D) - 768))) / 16384,
                    U = (D * (256 + D * (D * (74 - 47 * D) - 128))) / 1024,
                    x = d * d,
                    L =
                        U *
                        f *
                        (d +
                            (U * (c * (2 * x - 1) - (U * d * (4 * f * f - 3) * (4 * x - 3)) / 6)) /
                                4),
                    b = r * F * (u - L),
                    B = Math.atan2(T * M, C - v * O),
                    q = Math.atan2(y * M, C * O - v);
                (e._distance = b), (e._startHeading = B), (e._endHeading = q), (e._uSquared = D);
            }
            function h(r, n, o, i) {
                e.normalize(i.cartographicToCartesian(n, p), E),
                    e.normalize(i.cartographicToCartesian(o, p), p);
                f(
                    r,
                    i.maximumRadius,
                    i.minimumRadius,
                    n.longitude,
                    n.latitude,
                    o.longitude,
                    o.latitude
                ),
                    (r._start = t.clone(n, r._start)),
                    (r._end = t.clone(o, r._end)),
                    (r._start.height = 0),
                    (r._end.height = 0),
                    u(r);
            }
            function d(e, r, i) {
                var s = n(i, a.WGS84);
                (this._ellipsoid = s),
                    (this._start = new t()),
                    (this._end = new t()),
                    (this._constants = {}),
                    (this._startHeading = void 0),
                    (this._endHeading = void 0),
                    (this._distance = void 0),
                    (this._uSquared = void 0),
                    o(e) && o(r) && h(this, e, r, s);
            }
            var E = new e(),
                p = new e();
            return (
                i(d.prototype, {
                    ellipsoid: {
                        get: function() {
                            return this._ellipsoid;
                        }
                    },
                    surfaceDistance: {
                        get: function() {
                            return this._distance;
                        }
                    },
                    start: {
                        get: function() {
                            return this._start;
                        }
                    },
                    end: {
                        get: function() {
                            return this._end;
                        }
                    },
                    startHeading: {
                        get: function() {
                            return this._startHeading;
                        }
                    },
                    endHeading: {
                        get: function() {
                            return this._endHeading;
                        }
                    }
                }),
                (d.prototype.setEndPoints = function(e, t) {
                    h(this, e, t, this._ellipsoid);
                }),
                (d.prototype.interpolateUsingFraction = function(e, t) {
                    return this.interpolateUsingSurfaceDistance(this._distance * e, t);
                }),
                (d.prototype.interpolateUsingSurfaceDistance = function(e, r) {
                    var n = this._constants,
                        i = n.distanceRatio + e / n.b,
                        a = Math.cos(2 * i),
                        s = Math.cos(4 * i),
                        u = Math.cos(6 * i),
                        c = Math.sin(2 * i),
                        f = Math.sin(4 * i),
                        h = Math.sin(6 * i),
                        d = Math.sin(8 * i),
                        E = i * i,
                        p = i * E,
                        m = n.u8Over256,
                        _ = n.u2Over4,
                        y = n.u6Over64,
                        R = n.u4Over16,
                        T =
                            (2 * p * m * a) / 3 +
                            i *
                                (1 -
                                    _ +
                                    (7 * R) / 4 -
                                    (15 * y) / 4 +
                                    (579 * m) / 64 -
                                    (R - (15 * y) / 4 + (187 * m) / 16) * a -
                                    ((5 * y) / 4 - (115 * m) / 16) * s -
                                    (29 * m * u) / 16) +
                            (_ / 2 - R + (71 * y) / 32 - (85 * m) / 16) * c +
                            ((5 * R) / 16 - (5 * y) / 4 + (383 * m) / 96) * f -
                            E * ((y - (11 * m) / 2) * c + (5 * m * f) / 2) +
                            ((29 * y) / 96 - (29 * m) / 16) * h +
                            (539 * m * d) / 1536,
                        A = Math.asin(Math.sin(T) * n.cosineAlpha),
                        S = Math.atan((n.a / n.b) * Math.tan(A));
                    T -= n.sigma;
                    var C = Math.cos(2 * n.sigma + T),
                        g = Math.sin(T),
                        v = Math.cos(T),
                        N = n.cosineU * v,
                        I = n.sineU * g,
                        O = Math.atan2(g * n.sineHeading, N - I * n.cosineHeading),
                        M = O - l(n.f, n.sineAlpha, n.cosineSquaredAlpha, T, g, v, C);
                    return o(r)
                        ? ((r.longitude = this._start.longitude + M),
                          (r.latitude = S),
                          (r.height = 0),
                          r)
                        : new t(this._start.longitude + M, S, 0);
                }),
                d
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
                    var i;
                    if (0 === e) return 0 === n ? [] : [-o / n];
                    if (0 === n) {
                        if (0 === o) return [0, 0];
                        var a = Math.abs(o),
                            s = Math.abs(e);
                        if (a < s && a / s < t.EPSILON14) return [0, 0];
                        if (a > s && s / a < t.EPSILON14) return [];
                        if ((i = -o / e) < 0) return [];
                        var u = Math.sqrt(i);
                        return [-u, u];
                    }
                    if (0 === o) return (i = -n / e), i < 0 ? [i, 0] : [0, i];
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
                    i,
                    a = e,
                    s = t / 3,
                    u = r / 3,
                    c = n,
                    l = a * u,
                    f = s * c,
                    h = s * s,
                    d = u * u,
                    E = a * u - h,
                    p = a * c - s * u,
                    m = s * c - d,
                    _ = 4 * E * m - p * p;
                if (_ < 0) {
                    var y, R, T;
                    h * f >= l * d
                        ? ((y = a), (R = E), (T = -2 * s * E + a * p))
                        : ((y = c), (R = m), (T = -c * p + 2 * u * m));
                    var A = T < 0 ? -1 : 1,
                        S = -A * Math.abs(y) * Math.sqrt(-_);
                    i = -T + S;
                    var C = i / 2,
                        g = C < 0 ? -Math.pow(-C, 1 / 3) : Math.pow(C, 1 / 3),
                        v = i === S ? -g : -R / g;
                    return (
                        (o = R <= 0 ? g + v : -T / (g * g + v * v + R)),
                        h * f >= l * d ? [(o - s) / a] : [-c / (o + u)]
                    );
                }
                var N = E,
                    I = -2 * s * E + a * p,
                    O = m,
                    M = -c * p + 2 * u * m,
                    w = Math.sqrt(_),
                    P = Math.sqrt(3) / 2,
                    D = Math.abs(Math.atan2(a * w, -I) / 3);
                o = 2 * Math.sqrt(-N);
                var F = Math.cos(D);
                i = o * F;
                var U = o * (-F / 2 - P * Math.sin(D)),
                    x = i + U > 2 * s ? i - s : U - s,
                    L = a,
                    b = x / L;
                (D = Math.abs(Math.atan2(c * w, -M) / 3)),
                    (o = 2 * Math.sqrt(-O)),
                    (F = Math.cos(D)),
                    (i = o * F),
                    (U = o * (-F / 2 - P * Math.sin(D)));
                var B = -c,
                    q = i + U < 2 * u ? i + u : U + u,
                    z = B / q,
                    G = L * q,
                    V = -x * q - L * B,
                    H = x * B,
                    W = (u * V - s * H) / (-s * V + u * G);
                return b <= W
                    ? b <= z
                        ? W <= z
                            ? [b, W, z]
                            : [b, z, W]
                        : [z, b, W]
                    : b <= z
                    ? [W, b, z]
                    : W <= z
                    ? [W, z, b]
                    : [z, W, b];
            }
            var n = {};
            return (
                (n.computeDiscriminant = function(e, t, r, n) {
                    var o = e * e,
                        i = t * t,
                        a = r * r;
                    return (
                        18 * e * t * r * n + i * a - 27 * o * (n * n) - 4 * (e * a * r + i * t * n)
                    );
                }),
                (n.computeRealRoots = function(e, n, o, i) {
                    var a, s;
                    if (0 === e) return t.computeRealRoots(n, o, i);
                    if (0 === n) {
                        if (0 === o) {
                            if (0 === i) return [0, 0, 0];
                            s = -i / e;
                            var u = s < 0 ? -Math.pow(-s, 1 / 3) : Math.pow(s, 1 / 3);
                            return [u, u, u];
                        }
                        return 0 === i
                            ? ((a = t.computeRealRoots(e, 0, o)),
                              0 === a.Length ? [0] : [a[0], 0, a[1]])
                            : r(e, 0, o, i);
                    }
                    return 0 === o
                        ? 0 === i
                            ? ((s = -n / e), s < 0 ? [s, 0, 0] : [0, 0, s])
                            : r(e, n, 0, i)
                        : 0 === i
                        ? ((a = t.computeRealRoots(e, n, o)),
                          0 === a.length
                              ? [0]
                              : a[1] <= 0
                              ? [a[0], a[1], 0]
                              : a[0] >= 0
                              ? [0, a[0], a[1]]
                              : [a[0], 0, a[1]])
                        : r(e, n, o, i);
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
            function o(t, o, i, a) {
                var s = t * t,
                    u = o - (3 * s) / 8,
                    c = i - (o * t) / 2 + (s * t) / 8,
                    l = a - (i * t) / 4 + (o * s) / 16 - (3 * s * s) / 256,
                    f = e.computeRealRoots(1, 2 * u, u * u - 4 * l, -c * c);
                if (f.length > 0) {
                    var h = -t / 4,
                        d = f[f.length - 1];
                    if (Math.abs(d) < r.EPSILON14) {
                        var E = n.computeRealRoots(1, u, l);
                        if (2 === E.length) {
                            var p,
                                m = E[0],
                                _ = E[1];
                            if (m >= 0 && _ >= 0) {
                                var y = Math.sqrt(m),
                                    R = Math.sqrt(_);
                                return [h - R, h - y, h + y, h + R];
                            }
                            if (m >= 0 && _ < 0) return (p = Math.sqrt(m)), [h - p, h + p];
                            if (m < 0 && _ >= 0) return (p = Math.sqrt(_)), [h - p, h + p];
                        }
                        return [];
                    }
                    if (d > 0) {
                        var T = Math.sqrt(d),
                            A = (u + d - c / T) / 2,
                            S = (u + d + c / T) / 2,
                            C = n.computeRealRoots(1, T, A),
                            g = n.computeRealRoots(1, -T, S);
                        return 0 !== C.length
                            ? ((C[0] += h),
                              (C[1] += h),
                              0 !== g.length
                                  ? ((g[0] += h),
                                    (g[1] += h),
                                    C[1] <= g[0]
                                        ? [C[0], C[1], g[0], g[1]]
                                        : g[1] <= C[0]
                                        ? [g[0], g[1], C[0], C[1]]
                                        : C[0] >= g[0] && C[1] <= g[1]
                                        ? [g[0], C[0], C[1], g[1]]
                                        : g[0] >= C[0] && g[1] <= C[1]
                                        ? [C[0], g[0], g[1], C[1]]
                                        : C[0] > g[0] && C[0] < g[1]
                                        ? [g[0], C[0], g[1], C[1]]
                                        : [C[0], g[0], C[1], g[1]])
                                  : C)
                            : 0 !== g.length
                            ? ((g[0] += h), (g[1] += h), g)
                            : [];
                    }
                }
                return [];
            }
            function i(t, o, i, a) {
                var s = i * i,
                    u = o * o,
                    c = t * t,
                    l = -2 * o,
                    f = i * t + u - 4 * a,
                    h = c * a - i * o * t + s,
                    d = e.computeRealRoots(1, l, f, h);
                if (d.length > 0) {
                    var E,
                        p,
                        m = d[0],
                        _ = o - m,
                        y = _ * _,
                        R = t / 2,
                        T = _ / 2,
                        A = y - 4 * a,
                        S = y + 4 * Math.abs(a),
                        C = c - 4 * m,
                        g = c + 4 * Math.abs(m);
                    if (m < 0 || A * g < C * S) {
                        var v = Math.sqrt(C);
                        (E = v / 2), (p = 0 === v ? 0 : (t * T - i) / v);
                    } else {
                        var N = Math.sqrt(A);
                        (E = 0 === N ? 0 : (t * T - i) / N), (p = N / 2);
                    }
                    var I, O;
                    0 === R && 0 === E
                        ? ((I = 0), (O = 0))
                        : r.sign(R) === r.sign(E)
                        ? ((I = R + E), (O = m / I))
                        : ((O = R - E), (I = m / O));
                    var M, w;
                    0 === T && 0 === p
                        ? ((M = 0), (w = 0))
                        : r.sign(T) === r.sign(p)
                        ? ((M = T + p), (w = a / M))
                        : ((w = T - p), (M = a / w));
                    var P = n.computeRealRoots(1, I, M),
                        D = n.computeRealRoots(1, O, w);
                    if (0 !== P.length)
                        return 0 !== D.length
                            ? P[1] <= D[0]
                                ? [P[0], P[1], D[0], D[1]]
                                : D[1] <= P[0]
                                ? [D[0], D[1], P[0], P[1]]
                                : P[0] >= D[0] && P[1] <= D[1]
                                ? [D[0], P[0], P[1], D[1]]
                                : D[0] >= P[0] && D[1] <= P[1]
                                ? [P[0], D[0], D[1], P[1]]
                                : P[0] > D[0] && P[0] < D[1]
                                ? [D[0], P[0], D[1], P[1]]
                                : [P[0], D[0], P[1], D[1]]
                            : P;
                    if (0 !== D.length) return D;
                }
                return [];
            }
            var a = {};
            return (
                (a.computeDiscriminant = function(e, t, r, n, o) {
                    var i = e * e,
                        a = i * e,
                        s = t * t,
                        u = s * t,
                        c = r * r,
                        l = c * r,
                        f = n * n,
                        h = f * n,
                        d = o * o;
                    return (
                        s * c * f -
                        4 * u * h -
                        4 * e * l * f +
                        18 * e * t * r * h -
                        27 * i * f * f +
                        256 * a * (d * o) +
                        o *
                            (18 * u * r * n -
                                4 * s * l +
                                16 * e * c * c -
                                80 * e * t * c * n -
                                6 * e * s * f +
                                144 * i * r * f) +
                        d * (144 * e * s * r - 27 * s * s - 128 * i * c - 192 * i * t * n)
                    );
                }),
                (a.computeRealRoots = function(t, n, a, s, u) {
                    if (Math.abs(t) < r.EPSILON15) return e.computeRealRoots(n, a, s, u);
                    var c = n / t,
                        l = a / t,
                        f = s / t,
                        h = u / t,
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
                            return i(c, l, f, h);
                        case 3:
                        case 4:
                            return o(c, l, f, h);
                        case 5:
                            return i(c, l, f, h);
                        case 6:
                        case 7:
                            return o(c, l, f, h);
                        case 8:
                            return i(c, l, f, h);
                        case 9:
                        case 10:
                            return o(c, l, f, h);
                        case 11:
                            return i(c, l, f, h);
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                            return o(c, l, f, h);
                        default:
                            return;
                    }
                }),
                a
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
        ], function(e, t, r, n, o, i, a, s, u, c, l) {
            "use strict";
            function f(e, t, r, n) {
                var o = t * t - 4 * e * r;
                if (!(o < 0)) {
                    if (o > 0) {
                        var i = 1 / (2 * e),
                            a = Math.sqrt(o),
                            s = (-t + a) * i,
                            u = (-t - a) * i;
                        return (
                            s < u ? ((n.root0 = s), (n.root1 = u)) : ((n.root0 = u), (n.root1 = s)),
                            n
                        );
                    }
                    var c = -t / (2 * e);
                    if (0 !== c) return (n.root0 = n.root1 = c), n;
                }
            }
            function h(t, r, o) {
                n(o) || (o = new i());
                var a = t.origin,
                    s = t.direction,
                    u = r.center,
                    c = r.radius * r.radius,
                    l = e.subtract(a, u, y),
                    h = e.dot(s, s),
                    d = 2 * e.dot(s, l),
                    E = e.magnitudeSquared(l) - c,
                    p = f(h, d, E, S);
                if (n(p)) return (o.start = p.root0), (o.stop = p.root1), o;
            }
            function d(e, t, r) {
                var n = e + t;
                return a.sign(e) !== a.sign(t) &&
                    Math.abs(n / Math.max(Math.abs(e), Math.abs(t))) < r
                    ? 0
                    : n;
            }
            function E(t, r, n, o, i) {
                var l,
                    f = o * o,
                    h = i * i,
                    E = (t[s.COLUMN1ROW1] - t[s.COLUMN2ROW2]) * h,
                    p = i * (o * d(t[s.COLUMN1ROW0], t[s.COLUMN0ROW1], a.EPSILON15) + r.y),
                    m = t[s.COLUMN0ROW0] * f + t[s.COLUMN2ROW2] * h + o * r.x + n,
                    _ = h * d(t[s.COLUMN2ROW1], t[s.COLUMN1ROW2], a.EPSILON15),
                    y = i * (o * d(t[s.COLUMN2ROW0], t[s.COLUMN0ROW2]) + r.z),
                    R = [];
                if (0 === y && 0 === _) {
                    if (((l = u.computeRealRoots(E, p, m)), 0 === l.length)) return R;
                    var T = l[0],
                        A = Math.sqrt(Math.max(1 - T * T, 0));
                    if (
                        (R.push(new e(o, i * T, i * -A)),
                        R.push(new e(o, i * T, i * A)),
                        2 === l.length)
                    ) {
                        var S = l[1],
                            C = Math.sqrt(Math.max(1 - S * S, 0));
                        R.push(new e(o, i * S, i * -C)), R.push(new e(o, i * S, i * C));
                    }
                    return R;
                }
                var g = y * y,
                    v = _ * _,
                    N = E * E,
                    I = y * _,
                    O = N + v,
                    M = 2 * (p * E + I),
                    w = 2 * m * E + p * p - v + g,
                    P = 2 * (m * p - I),
                    D = m * m - g;
                if (0 === O && 0 === M && 0 === w && 0 === P) return R;
                l = c.computeRealRoots(O, M, w, P, D);
                var F = l.length;
                if (0 === F) return R;
                for (var U = 0; U < F; ++U) {
                    var x,
                        L = l[U],
                        b = L * L,
                        B = Math.max(1 - b, 0),
                        q = Math.sqrt(B);
                    x =
                        a.sign(E) === a.sign(m)
                            ? d(E * b + m, p * L, a.EPSILON12)
                            : a.sign(m) === a.sign(p * L)
                            ? d(E * b, p * L + m, a.EPSILON12)
                            : d(E * b + p * L, m, a.EPSILON12);
                    var z = d(_ * L, y, a.EPSILON15),
                        G = x * z;
                    G < 0
                        ? R.push(new e(o, i * L, i * q))
                        : G > 0
                        ? R.push(new e(o, i * L, i * -q))
                        : 0 !== q
                        ? (R.push(new e(o, i * L, i * -q)), R.push(new e(o, i * L, i * q)), ++U)
                        : R.push(new e(o, i * L, i * q));
                }
                return R;
            }
            var p = {};
            p.rayPlane = function(t, r, o) {
                n(o) || (o = new e());
                var i = t.origin,
                    s = t.direction,
                    u = r.normal,
                    c = e.dot(u, s);
                if (!(Math.abs(c) < a.EPSILON15)) {
                    var l = (-r.distance - e.dot(u, i)) / c;
                    if (!(l < 0)) return (o = e.multiplyByScalar(s, l, o)), e.add(i, o, o);
                }
            };
            var m = new e(),
                _ = new e(),
                y = new e(),
                R = new e(),
                T = new e();
            (p.rayTriangleParametric = function(t, n, o, i, s) {
                s = r(s, !1);
                var u,
                    c,
                    l,
                    f,
                    h,
                    d = t.origin,
                    E = t.direction,
                    p = e.subtract(o, n, m),
                    A = e.subtract(i, n, _),
                    S = e.cross(E, A, y),
                    C = e.dot(p, S);
                if (s) {
                    if (C < a.EPSILON6) return;
                    if (((u = e.subtract(d, n, R)), (l = e.dot(u, S)) < 0 || l > C)) return;
                    if (((c = e.cross(u, p, T)), (f = e.dot(E, c)) < 0 || l + f > C)) return;
                    h = e.dot(A, c) / C;
                } else {
                    if (Math.abs(C) < a.EPSILON6) return;
                    var g = 1 / C;
                    if (((u = e.subtract(d, n, R)), (l = e.dot(u, S) * g) < 0 || l > 1)) return;
                    if (((c = e.cross(u, p, T)), (f = e.dot(E, c) * g) < 0 || l + f > 1)) return;
                    h = e.dot(A, c) * g;
                }
                return h;
            }),
                (p.rayTriangle = function(t, r, o, i, a, s) {
                    var u = p.rayTriangleParametric(t, r, o, i, a);
                    if (n(u) && !(u < 0))
                        return (
                            n(s) || (s = new e()),
                            e.multiplyByScalar(t.direction, u, s),
                            e.add(t.origin, s, s)
                        );
                });
            var A = new l();
            p.lineSegmentTriangle = function(t, r, o, i, a, s, u) {
                var c = A;
                e.clone(t, c.origin),
                    e.subtract(r, t, c.direction),
                    e.normalize(c.direction, c.direction);
                var l = p.rayTriangleParametric(c, o, i, a, s);
                if (!(!n(l) || l < 0 || l > e.distance(t, r)))
                    return (
                        n(u) || (u = new e()),
                        e.multiplyByScalar(c.direction, l, u),
                        e.add(c.origin, u, u)
                    );
            };
            var S = { root0: 0, root1: 0 };
            p.raySphere = function(e, t, r) {
                if (((r = h(e, t, r)), n(r) && !(r.stop < 0)))
                    return (r.start = Math.max(r.start, 0)), r;
            };
            var C = new l();
            p.lineSegmentSphere = function(t, r, o, i) {
                var a = C;
                e.clone(t, a.origin);
                var s = e.subtract(r, t, a.direction),
                    u = e.magnitude(s);
                if ((e.normalize(s, s), (i = h(a, o, i)), !(!n(i) || i.stop < 0 || i.start > u)))
                    return (i.start = Math.max(i.start, 0)), (i.stop = Math.min(i.stop, u)), i;
            };
            var g = new e(),
                v = new e();
            p.rayEllipsoid = function(t, r) {
                var n,
                    o,
                    a,
                    s,
                    u,
                    c = r.oneOverRadii,
                    l = e.multiplyComponents(c, t.origin, g),
                    f = e.multiplyComponents(c, t.direction, v),
                    h = e.magnitudeSquared(l),
                    d = e.dot(l, f);
                if (h > 1) {
                    if (d >= 0) return;
                    var E = d * d;
                    if (((n = h - 1), (o = e.magnitudeSquared(f)), (a = o * n), E < a)) return;
                    if (E > a) {
                        (s = d * d - a), (u = -d + Math.sqrt(s));
                        var p = u / o,
                            m = n / u;
                        return p < m ? new i(p, m) : { start: m, stop: p };
                    }
                    var _ = Math.sqrt(n / o);
                    return new i(_, _);
                }
                return h < 1
                    ? ((n = h - 1),
                      (o = e.magnitudeSquared(f)),
                      (a = o * n),
                      (s = d * d - a),
                      (u = -d + Math.sqrt(s)),
                      new i(0, u / o))
                    : d < 0
                    ? ((o = e.magnitudeSquared(f)), new i(0, -d / o))
                    : void 0;
            };
            var N = new e(),
                I = new e(),
                O = new e(),
                M = new e(),
                w = new e(),
                P = new s(),
                D = new s(),
                F = new s(),
                U = new s(),
                x = new s(),
                L = new s(),
                b = new s(),
                B = new e(),
                q = new e(),
                z = new t();
            p.grazingAltitudeLocation = function(t, r) {
                var o = t.origin,
                    i = t.direction;
                if (!e.equals(o, e.ZERO)) {
                    var u = r.geodeticSurfaceNormal(o, N);
                    if (e.dot(i, u) >= 0) return o;
                }
                var c = n(this.rayEllipsoid(t, r)),
                    l = r.transformPositionToScaledSpace(i, N),
                    f = e.normalize(l, l),
                    h = e.mostOrthogonalAxis(l, M),
                    d = e.normalize(e.cross(h, f, I), I),
                    p = e.normalize(e.cross(f, d, O), O),
                    m = P;
                (m[0] = f.x),
                    (m[1] = f.y),
                    (m[2] = f.z),
                    (m[3] = d.x),
                    (m[4] = d.y),
                    (m[5] = d.z),
                    (m[6] = p.x),
                    (m[7] = p.y),
                    (m[8] = p.z);
                var _ = s.transpose(m, D),
                    y = s.fromScale(r.radii, F),
                    R = s.fromScale(r.oneOverRadii, U),
                    T = x;
                (T[0] = 0),
                    (T[1] = -i.z),
                    (T[2] = i.y),
                    (T[3] = i.z),
                    (T[4] = 0),
                    (T[5] = -i.x),
                    (T[6] = -i.y),
                    (T[7] = i.x),
                    (T[8] = 0);
                var A,
                    S,
                    C = s.multiply(s.multiply(_, R, L), T, L),
                    g = s.multiply(s.multiply(C, y, b), m, b),
                    v = s.multiplyByVector(C, o, w),
                    G = E(g, e.negate(v, N), 0, 0, 1),
                    V = G.length;
                if (V > 0) {
                    for (
                        var H = e.clone(e.ZERO, q), W = Number.NEGATIVE_INFINITY, X = 0;
                        X < V;
                        ++X
                    ) {
                        A = s.multiplyByVector(y, s.multiplyByVector(m, G[X], B), B);
                        var Y = e.normalize(e.subtract(A, o, M), M),
                            k = e.dot(Y, i);
                        k > W && ((W = k), (H = e.clone(A, H)));
                    }
                    var j = r.cartesianToCartographic(H, z);
                    return (
                        (W = a.clamp(W, 0, 1)),
                        (S = e.magnitude(e.subtract(H, o, M)) * Math.sqrt(1 - W * W)),
                        (S = c ? -S : S),
                        (j.height = S),
                        r.cartographicToCartesian(j, new e())
                    );
                }
            };
            var G = new e();
            return (
                (p.lineSegmentPlane = function(t, r, o, i) {
                    n(i) || (i = new e());
                    var s = e.subtract(r, t, G),
                        u = o.normal,
                        c = e.dot(u, s);
                    if (!(Math.abs(c) < a.EPSILON6)) {
                        var l = e.dot(u, t),
                            f = -(o.distance + l) / c;
                        if (!(f < 0 || f > 1))
                            return e.multiplyByScalar(s, f, i), e.add(t, i, i), i;
                    }
                }),
                (p.trianglePlaneIntersection = function(t, r, n, o) {
                    var i = o.normal,
                        a = o.distance,
                        s = e.dot(i, t) + a < 0,
                        u = e.dot(i, r) + a < 0,
                        c = e.dot(i, n) + a < 0,
                        l = 0;
                    (l += s ? 1 : 0), (l += u ? 1 : 0), (l += c ? 1 : 0);
                    var f, h;
                    if (((1 !== l && 2 !== l) || ((f = new e()), (h = new e())), 1 === l)) {
                        if (s)
                            return (
                                p.lineSegmentPlane(t, r, o, f),
                                p.lineSegmentPlane(t, n, o, h),
                                { positions: [t, r, n, f, h], indices: [0, 3, 4, 1, 2, 4, 1, 4, 3] }
                            );
                        if (u)
                            return (
                                p.lineSegmentPlane(r, n, o, f),
                                p.lineSegmentPlane(r, t, o, h),
                                { positions: [t, r, n, f, h], indices: [1, 3, 4, 2, 0, 4, 2, 4, 3] }
                            );
                        if (c)
                            return (
                                p.lineSegmentPlane(n, t, o, f),
                                p.lineSegmentPlane(n, r, o, h),
                                { positions: [t, r, n, f, h], indices: [2, 3, 4, 0, 1, 4, 0, 4, 3] }
                            );
                    } else if (2 === l) {
                        if (!s)
                            return (
                                p.lineSegmentPlane(r, t, o, f),
                                p.lineSegmentPlane(n, t, o, h),
                                { positions: [t, r, n, f, h], indices: [1, 2, 4, 1, 4, 3, 0, 3, 4] }
                            );
                        if (!u)
                            return (
                                p.lineSegmentPlane(n, r, o, f),
                                p.lineSegmentPlane(t, r, o, h),
                                { positions: [t, r, n, f, h], indices: [2, 0, 4, 2, 4, 3, 1, 3, 4] }
                            );
                        if (!c)
                            return (
                                p.lineSegmentPlane(t, n, o, f),
                                p.lineSegmentPlane(r, n, o, h),
                                { positions: [t, r, n, f, h], indices: [0, 1, 4, 0, 4, 3, 2, 3, 4] }
                            );
                    }
                }),
                p
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
        ], function(e, t, r, n, o, i, a) {
            "use strict";
            function s(t, r) {
                (this.normal = e.clone(t)), (this.distance = r);
            }
            s.fromPointNormal = function(t, n, o) {
                var i = -e.dot(n, t);
                return r(o) ? (e.clone(n, o.normal), (o.distance = i), o) : new s(n, i);
            };
            var u = new e();
            (s.fromCartesian4 = function(t, n) {
                var o = e.fromCartesian4(t, u),
                    i = t.w;
                return r(n) ? (e.clone(o, n.normal), (n.distance = i), n) : new s(o, i);
            }),
                (s.getPointDistance = function(t, r) {
                    return e.dot(t.normal, r) + t.distance;
                });
            var c = new e();
            s.projectPointOntoPlane = function(t, n, o) {
                r(o) || (o = new e());
                var i = s.getPointDistance(t, n),
                    a = e.multiplyByScalar(t.normal, i, c);
                return e.subtract(n, a, o);
            };
            var l = new e();
            return (
                (s.transform = function(t, r, n) {
                    return (
                        a.multiplyByPointAsVector(r, t.normal, u),
                        e.normalize(u, u),
                        e.multiplyByScalar(t.normal, -t.distance, l),
                        a.multiplyByPoint(r, l, l),
                        s.fromPointNormal(l, u, n)
                    );
                }),
                (s.clone = function(t, n) {
                    return r(n)
                        ? (e.clone(t.normal, n.normal), (n.distance = t.distance), n)
                        : new s(t.normal, t.distance);
                }),
                (s.equals = function(t, r) {
                    return t.distance === r.distance && e.equals(t.normal, r.normal);
                }),
                (s.ORIGIN_XY_PLANE = o(new s(e.UNIT_Z, 0))),
                (s.ORIGIN_YZ_PLANE = o(new s(e.UNIT_X, 0))),
                (s.ORIGIN_ZX_PLANE = o(new s(e.UNIT_Y, 0))),
                s
            );
        }),
        define("Core/PolylinePipeline", [
            "./Cartesian3",
            "./Cartographic",
            "./defaultValue",
            "./defined",
            "./DeveloperError",
            "./Ellipsoid",
            "./EllipsoidGeodesic",
            "./IntersectionTests",
            "./isArray",
            "./Math",
            "./Matrix4",
            "./Plane"
        ], function(e, t, r, n, o, i, a, s, u, c, l, f) {
            "use strict";
            function h(e, t, r) {
                var n = g;
                n.length = e;
                var o;
                if (t === r) {
                    for (o = 0; o < e; o++) n[o] = t;
                    return n;
                }
                var i = r - t,
                    a = i / e;
                for (o = 0; o < e; o++) {
                    var s = t + o * a;
                    n[o] = s;
                }
                return n;
            }
            function d(t, r, n, o, i, a, s, u) {
                var c = o.scaleToGeodeticSurface(t, O),
                    l = o.scaleToGeodeticSurface(r, M),
                    f = E.numberOfPoints(t, r, n),
                    d = o.cartesianToCartographic(c, v),
                    p = o.cartesianToCartographic(l, N),
                    m = h(f, i, a);
                w.setEndPoints(d, p);
                var _ = w.surfaceDistance / f,
                    y = u;
                d.height = i;
                var R = o.cartographicToCartesian(d, I);
                e.pack(R, s, y), (y += 3);
                for (var T = 1; T < f; T++) {
                    var A = w.interpolateUsingSurfaceDistance(T * _, N);
                    (A.height = m[T]),
                        (R = o.cartographicToCartesian(A, I)),
                        e.pack(R, s, y),
                        (y += 3);
                }
                return y;
            }
            var E = {};
            E.numberOfPoints = function(t, r, n) {
                var o = e.distance(t, r);
                return Math.ceil(o / n);
            };
            var p = new t();
            E.extractHeights = function(e, t) {
                for (var r = e.length, n = new Array(r), o = 0; o < r; o++) {
                    var i = e[o];
                    n[o] = t.cartesianToCartographic(i, p).height;
                }
                return n;
            };
            var m = new l(),
                _ = new e(),
                y = new e(),
                R = new f(e.UNIT_X, 0),
                T = new e(),
                A = new f(e.UNIT_X, 0),
                S = new e(),
                C = new e(),
                g = [],
                v = new t(),
                N = new t(),
                I = new e(),
                O = new e(),
                M = new e(),
                w = new a();
            return (
                (E.wrapLongitude = function(t, o) {
                    var i = [],
                        a = [];
                    if (n(t) && t.length > 0) {
                        o = r(o, l.IDENTITY);
                        var u = l.inverseTransformation(o, m),
                            c = l.multiplyByPoint(u, e.ZERO, _),
                            h = e.normalize(l.multiplyByPointAsVector(u, e.UNIT_Y, y), y),
                            d = f.fromPointNormal(c, h, R),
                            E = e.normalize(l.multiplyByPointAsVector(u, e.UNIT_X, T), T),
                            p = f.fromPointNormal(c, E, A),
                            g = 1;
                        i.push(e.clone(t[0]));
                        for (var v = i[0], N = t.length, I = 1; I < N; ++I) {
                            var O = t[I];
                            if (f.getPointDistance(p, v) < 0 || f.getPointDistance(p, O) < 0) {
                                var M = s.lineSegmentPlane(v, O, d, S);
                                if (n(M)) {
                                    var w = e.multiplyByScalar(h, 5e-9, C);
                                    f.getPointDistance(d, v) < 0 && e.negate(w, w),
                                        i.push(e.add(M, w, new e())),
                                        a.push(g + 1),
                                        e.negate(w, w),
                                        i.push(e.add(M, w, new e())),
                                        (g = 1);
                                }
                            }
                            i.push(e.clone(t[I])), g++, (v = O);
                        }
                        a.push(g);
                    }
                    return { positions: i, lengths: a };
                }),
                (E.generateArc = function(t) {
                    n(t) || (t = {});
                    var o = t.positions,
                        a = o.length,
                        s = r(t.ellipsoid, i.WGS84),
                        l = r(t.height, 0),
                        f = u(l);
                    if (a < 1) return [];
                    if (1 === a) {
                        var h = s.scaleToGeodeticSurface(o[0], O);
                        if (0 !== (l = f ? l[0] : l)) {
                            var p = s.geodeticSurfaceNormal(h, I);
                            e.multiplyByScalar(p, l, p), e.add(h, p, h);
                        }
                        return [h.x, h.y, h.z];
                    }
                    var m = t.minDistance;
                    if (!n(m)) {
                        var _ = r(t.granularity, c.RADIANS_PER_DEGREE);
                        m = c.chordLength(_, s.maximumRadius);
                    }
                    var y,
                        R = 0;
                    for (y = 0; y < a - 1; y++) R += E.numberOfPoints(o[y], o[y + 1], m);
                    var T = 3 * (R + 1),
                        A = new Array(T),
                        S = 0;
                    for (y = 0; y < a - 1; y++) {
                        S = d(o[y], o[y + 1], m, s, f ? l[y] : l, f ? l[y + 1] : l, A, S);
                    }
                    g.length = 0;
                    var C = o[a - 1],
                        N = s.cartesianToCartographic(C, v);
                    N.height = f ? l[a - 1] : l;
                    var M = s.cartographicToCartesian(N, I);
                    return e.pack(M, A, T - 3), A;
                }),
                (E.generateCartesianArc = function(t) {
                    for (
                        var r = E.generateArc(t), n = r.length / 3, o = new Array(n), i = 0;
                        i < n;
                        i++
                    )
                        o[i] = e.unpack(r, 3 * i);
                    return o;
                }),
                E
            );
        }),
        define("Core/VertexFormat", [
            "./defaultValue",
            "./defined",
            "./DeveloperError",
            "./freezeObject"
        ], function(e, t, r, n) {
            "use strict";
            function o(t) {
                (t = e(t, e.EMPTY_OBJECT)),
                    (this.position = e(t.position, !1)),
                    (this.normal = e(t.normal, !1)),
                    (this.st = e(t.st, !1)),
                    (this.bitangent = e(t.bitangent, !1)),
                    (this.tangent = e(t.tangent, !1)),
                    (this.color = e(t.color, !1));
            }
            return (
                (o.POSITION_ONLY = n(new o({ position: !0 }))),
                (o.POSITION_AND_NORMAL = n(new o({ position: !0, normal: !0 }))),
                (o.POSITION_NORMAL_AND_ST = n(new o({ position: !0, normal: !0, st: !0 }))),
                (o.POSITION_AND_ST = n(new o({ position: !0, st: !0 }))),
                (o.POSITION_AND_COLOR = n(new o({ position: !0, color: !0 }))),
                (o.ALL = n(
                    new o({ position: !0, normal: !0, st: !0, tangent: !0, bitangent: !0 })
                )),
                (o.DEFAULT = o.POSITION_NORMAL_AND_ST),
                (o.packedLength = 6),
                (o.pack = function(t, r, n) {
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
                (o.unpack = function(r, n, i) {
                    return (
                        (n = e(n, 0)),
                        t(i) || (i = new o()),
                        (i.position = 1 === r[n++]),
                        (i.normal = 1 === r[n++]),
                        (i.st = 1 === r[n++]),
                        (i.tangent = 1 === r[n++]),
                        (i.bitangent = 1 === r[n++]),
                        (i.color = 1 === r[n]),
                        i
                    );
                }),
                (o.clone = function(e, r) {
                    if (t(e))
                        return (
                            t(r) || (r = new o()),
                            (r.position = e.position),
                            (r.normal = e.normal),
                            (r.st = e.st),
                            (r.tangent = e.tangent),
                            (r.bitangent = e.bitangent),
                            (r.color = e.color),
                            r
                        );
                }),
                o
            );
        }),
        define("Core/PolylineGeometry", [
            "./arrayRemoveDuplicates",
            "./BoundingSphere",
            "./Cartesian3",
            "./Color",
            "./ComponentDatatype",
            "./defaultValue",
            "./defined",
            "./DeveloperError",
            "./Ellipsoid",
            "./Geometry",
            "./GeometryAttribute",
            "./GeometryAttributes",
            "./GeometryType",
            "./IndexDatatype",
            "./Math",
            "./PolylinePipeline",
            "./PrimitiveType",
            "./VertexFormat"
        ], function(e, t, r, n, o, i, a, s, u, c, l, f, h, d, E, p, m, _) {
            "use strict";
            function y(e, t, r, o, i) {
                var a = T;
                a.length = i;
                var s,
                    u = r.red,
                    c = r.green,
                    l = r.blue,
                    f = r.alpha,
                    h = o.red,
                    d = o.green,
                    E = o.blue,
                    p = o.alpha;
                if (n.equals(r, o)) {
                    for (s = 0; s < i; s++) a[s] = n.clone(r);
                    return a;
                }
                var m = (h - u) / i,
                    _ = (d - c) / i,
                    y = (E - l) / i,
                    R = (p - f) / i;
                for (s = 0; s < i; s++) a[s] = new n(u + s * m, c + s * _, l + s * y, f + s * R);
                return a;
            }
            function R(e) {
                e = i(e, i.EMPTY_OBJECT);
                var t = e.positions,
                    o = e.colors,
                    s = i(e.width, 1),
                    c = i(e.colorsPerVertex, !1);
                (this._positions = t),
                    (this._colors = o),
                    (this._width = s),
                    (this._colorsPerVertex = c),
                    (this._vertexFormat = _.clone(i(e.vertexFormat, _.DEFAULT))),
                    (this._followSurface = i(e.followSurface, !0)),
                    (this._granularity = i(e.granularity, E.RADIANS_PER_DEGREE)),
                    (this._ellipsoid = u.clone(i(e.ellipsoid, u.WGS84))),
                    (this._workerName = "createPolylineGeometry");
                var l = 1 + t.length * r.packedLength;
                (l += a(o) ? 1 + o.length * n.packedLength : 1),
                    (this.packedLength = l + u.packedLength + _.packedLength + 4);
            }
            var T = [];
            R.pack = function(e, t, o) {
                o = i(o, 0);
                var s,
                    c = e._positions,
                    l = c.length;
                for (t[o++] = l, s = 0; s < l; ++s, o += r.packedLength) r.pack(c[s], t, o);
                var f = e._colors;
                for (l = a(f) ? f.length : 0, t[o++] = l, s = 0; s < l; ++s, o += n.packedLength)
                    n.pack(f[s], t, o);
                return (
                    u.pack(e._ellipsoid, t, o),
                    (o += u.packedLength),
                    _.pack(e._vertexFormat, t, o),
                    (o += _.packedLength),
                    (t[o++] = e._width),
                    (t[o++] = e._colorsPerVertex ? 1 : 0),
                    (t[o++] = e._followSurface ? 1 : 0),
                    (t[o] = e._granularity),
                    t
                );
            };
            var A = u.clone(u.UNIT_SPHERE),
                S = new _(),
                C = {
                    positions: void 0,
                    colors: void 0,
                    ellipsoid: A,
                    vertexFormat: S,
                    width: void 0,
                    colorsPerVertex: void 0,
                    followSurface: void 0,
                    granularity: void 0
                };
            R.unpack = function(e, t, o) {
                t = i(t, 0);
                var s,
                    c = e[t++],
                    l = new Array(c);
                for (s = 0; s < c; ++s, t += r.packedLength) l[s] = r.unpack(e, t);
                c = e[t++];
                var f = c > 0 ? new Array(c) : void 0;
                for (s = 0; s < c; ++s, t += n.packedLength) f[s] = n.unpack(e, t);
                var h = u.unpack(e, t, A);
                t += u.packedLength;
                var d = _.unpack(e, t, S);
                t += _.packedLength;
                var E = e[t++],
                    p = 1 === e[t++],
                    m = 1 === e[t++],
                    y = e[t];
                return a(o)
                    ? ((o._positions = l),
                      (o._colors = f),
                      (o._ellipsoid = u.clone(h, o._ellipsoid)),
                      (o._vertexFormat = _.clone(d, o._vertexFormat)),
                      (o._width = E),
                      (o._colorsPerVertex = p),
                      (o._followSurface = m),
                      (o._granularity = y),
                      o)
                    : ((C.positions = l),
                      (C.colors = f),
                      (C.width = E),
                      (C.colorsPerVertex = p),
                      (C.followSurface = m),
                      (C.granularity = y),
                      new R(C));
            };
            var g = new r(),
                v = new r(),
                N = new r(),
                I = new r();
            return (
                (R.createGeometry = function(i) {
                    var s,
                        u,
                        _,
                        R = i._width,
                        A = i._vertexFormat,
                        S = i._colors,
                        C = i._colorsPerVertex,
                        O = i._followSurface,
                        M = i._granularity,
                        w = i._ellipsoid,
                        P = e(i._positions, r.equalsEpsilon),
                        D = P.length;
                    if (!(D < 2 || R <= 0)) {
                        if (O) {
                            var F = p.extractHeights(P, w),
                                U = E.chordLength(M, w.maximumRadius);
                            if (a(S)) {
                                var x = 1;
                                for (s = 0; s < D - 1; ++s)
                                    x += p.numberOfPoints(P[s], P[s + 1], U);
                                var L = new Array(x),
                                    b = 0;
                                for (s = 0; s < D - 1; ++s) {
                                    var B = P[s],
                                        q = P[s + 1],
                                        z = S[s],
                                        G = p.numberOfPoints(B, q, U);
                                    if (C && s < x) {
                                        var V = S[s + 1],
                                            H = y(B, q, z, V, G),
                                            W = H.length;
                                        for (u = 0; u < W; ++u) L[b++] = H[u];
                                    } else for (u = 0; u < G; ++u) L[b++] = n.clone(z);
                                }
                                (L[b] = n.clone(S[S.length - 1])), (S = L), (T.length = 0);
                            }
                            P = p.generateCartesianArc({
                                positions: P,
                                minDistance: U,
                                ellipsoid: w,
                                height: F
                            });
                        }
                        D = P.length;
                        var X,
                            Y = 4 * D - 4,
                            k = new Float64Array(3 * Y),
                            j = new Float64Array(3 * Y),
                            K = new Float64Array(3 * Y),
                            Z = new Float32Array(2 * Y),
                            Q = A.st ? new Float32Array(2 * Y) : void 0,
                            J = a(S) ? new Uint8Array(4 * Y) : void 0,
                            $ = 0,
                            ee = 0,
                            te = 0,
                            re = 0;
                        for (u = 0; u < D; ++u) {
                            0 === u
                                ? ((X = g), r.subtract(P[0], P[1], X), r.add(P[0], X, X))
                                : (X = P[u - 1]),
                                r.clone(X, N),
                                r.clone(P[u], v),
                                u === D - 1
                                    ? ((X = g),
                                      r.subtract(P[D - 1], P[D - 2], X),
                                      r.add(P[D - 1], X, X))
                                    : (X = P[u + 1]),
                                r.clone(X, I);
                            var ne, oe;
                            a(J) &&
                                ((ne = 0 === u || C ? S[u] : S[u - 1]), u !== D - 1 && (oe = S[u]));
                            var ie = 0 === u ? 2 : 0,
                                ae = u === D - 1 ? 2 : 4;
                            for (_ = ie; _ < ae; ++_) {
                                r.pack(v, k, $), r.pack(N, j, $), r.pack(I, K, $), ($ += 3);
                                var se = _ - 2 < 0 ? -1 : 1;
                                if (
                                    ((Z[ee++] = (_ % 2) * 2 - 1),
                                    (Z[ee++] = se * R),
                                    A.st &&
                                        ((Q[te++] = u / (D - 1)),
                                        (Q[te++] = Math.max(Z[ee - 2], 0))),
                                    a(J))
                                ) {
                                    var ue = _ < 2 ? ne : oe;
                                    (J[re++] = n.floatToByte(ue.red)),
                                        (J[re++] = n.floatToByte(ue.green)),
                                        (J[re++] = n.floatToByte(ue.blue)),
                                        (J[re++] = n.floatToByte(ue.alpha));
                                }
                            }
                        }
                        var ce = new f();
                        (ce.position = new l({
                            componentDatatype: o.DOUBLE,
                            componentsPerAttribute: 3,
                            values: k
                        })),
                            (ce.prevPosition = new l({
                                componentDatatype: o.DOUBLE,
                                componentsPerAttribute: 3,
                                values: j
                            })),
                            (ce.nextPosition = new l({
                                componentDatatype: o.DOUBLE,
                                componentsPerAttribute: 3,
                                values: K
                            })),
                            (ce.expandAndWidth = new l({
                                componentDatatype: o.FLOAT,
                                componentsPerAttribute: 2,
                                values: Z
                            })),
                            A.st &&
                                (ce.st = new l({
                                    componentDatatype: o.FLOAT,
                                    componentsPerAttribute: 2,
                                    values: Q
                                })),
                            a(J) &&
                                (ce.color = new l({
                                    componentDatatype: o.UNSIGNED_BYTE,
                                    componentsPerAttribute: 4,
                                    values: J,
                                    normalize: !0
                                }));
                        var le = d.createTypedArray(Y, 6 * D - 6),
                            fe = 0,
                            he = 0,
                            de = D - 1;
                        for (u = 0; u < de; ++u)
                            (le[he++] = fe),
                                (le[he++] = fe + 2),
                                (le[he++] = fe + 1),
                                (le[he++] = fe + 1),
                                (le[he++] = fe + 2),
                                (le[he++] = fe + 3),
                                (fe += 4);
                        return new c({
                            attributes: ce,
                            indices: le,
                            primitiveType: m.TRIANGLES,
                            boundingSphere: t.fromPoints(P),
                            geometryType: h.POLYLINES
                        });
                    }
                }),
                R
            );
        }),
        define("Workers/createPolylineGeometry", [
            "../Core/defined",
            "../Core/Ellipsoid",
            "../Core/PolylineGeometry"
        ], function(e, t, r) {
            "use strict";
            function n(n, o) {
                return (
                    e(o) && (n = r.unpack(n, o)),
                    (n._ellipsoid = t.clone(n._ellipsoid)),
                    r.createGeometry(n)
                );
            }
            return n;
        });
})();

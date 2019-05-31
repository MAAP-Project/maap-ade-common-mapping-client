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
            function n(e) {
                return e + " is required, actual value was undefined";
            }
            function r(e, t, n) {
                return "Expected " + n + " to be typeof " + t + ", actual typeof was " + e;
            }
            var i = {};
            return (
                (i.typeOf = {}),
                (i.defined = function(r, i) {
                    if (!e(i)) throw new t(n(r));
                }),
                (i.typeOf.func = function(e, n) {
                    if ("function" != typeof n) throw new t(r(typeof n, "function", e));
                }),
                (i.typeOf.string = function(e, n) {
                    if ("string" != typeof n) throw new t(r(typeof n, "string", e));
                }),
                (i.typeOf.number = function(e, n) {
                    if ("number" != typeof n) throw new t(r(typeof n, "number", e));
                }),
                (i.typeOf.number.lessThan = function(e, n, r) {
                    if ((i.typeOf.number(e, n), n >= r))
                        throw new t(
                            "Expected " + e + " to be less than " + r + ", actual value was " + n
                        );
                }),
                (i.typeOf.number.lessThanOrEquals = function(e, n, r) {
                    if ((i.typeOf.number(e, n), n > r))
                        throw new t(
                            "Expected " +
                                e +
                                " to be less than or equal to " +
                                r +
                                ", actual value was " +
                                n
                        );
                }),
                (i.typeOf.number.greaterThan = function(e, n, r) {
                    if ((i.typeOf.number(e, n), n <= r))
                        throw new t(
                            "Expected " + e + " to be greater than " + r + ", actual value was " + n
                        );
                }),
                (i.typeOf.number.greaterThanOrEquals = function(e, n, r) {
                    if ((i.typeOf.number(e, n), n < r))
                        throw new t(
                            "Expected " +
                                e +
                                " to be greater than or equal to" +
                                r +
                                ", actual value was " +
                                n
                        );
                }),
                (i.typeOf.object = function(e, n) {
                    if ("object" != typeof n) throw new t(r(typeof n, "object", e));
                }),
                (i.typeOf.bool = function(e, n) {
                    if ("boolean" != typeof n) throw new t(r(typeof n, "boolean", e));
                }),
                (i.typeOf.number.equals = function(e, n, r, a) {
                    if ((i.typeOf.number(e, r), i.typeOf.number(n, a), r !== a))
                        throw new t(
                            e +
                                " must be equal to " +
                                n +
                                ", the actual values are " +
                                r +
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
                        var n;
                        for (
                            this.mti == this.N + 1 && this.init_genrand(5489), n = 0;
                            n < this.N - this.M;
                            n++
                        )
                            (e =
                                (this.mt[n] & this.UPPER_MASK) |
                                (this.mt[n + 1] & this.LOWER_MASK)),
                                (this.mt[n] = this.mt[n + this.M] ^ (e >>> 1) ^ t[1 & e]);
                        for (; n < this.N - 1; n++)
                            (e =
                                (this.mt[n] & this.UPPER_MASK) |
                                (this.mt[n + 1] & this.LOWER_MASK)),
                                (this.mt[n] =
                                    this.mt[n + (this.M - this.N)] ^ (e >>> 1) ^ t[1 & e]);
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
        ], function(e, t, n, r, i) {
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
                (a.sign = n(Math.sign, function(e) {
                    return (e = +e), 0 === e || e !== e ? e : e > 0 ? 1 : -1;
                })),
                (a.signNotZero = function(e) {
                    return e < 0 ? -1 : 1;
                }),
                (a.toSNorm = function(e, t) {
                    return (t = n(t, 255)), Math.round((0.5 * a.clamp(e, -1, 1) + 0.5) * t);
                }),
                (a.fromSNorm = function(e, t) {
                    return (t = n(t, 255)), (a.clamp(e, 0, t) / t) * 2 - 1;
                }),
                (a.normalize = function(e, t, n) {
                    return (n = Math.max(n - t, 0)), 0 === n ? 0 : a.clamp((e - t) / n, 0, 1);
                }),
                (a.sinh = n(Math.sinh, function(e) {
                    return (Math.exp(e) - Math.exp(-e)) / 2;
                })),
                (a.cosh = n(Math.cosh, function(e) {
                    return (Math.exp(e) + Math.exp(-e)) / 2;
                })),
                (a.lerp = function(e, t, n) {
                    return (1 - n) * e + n * t;
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
                        n = e - Math.floor(e / t) * t;
                    return n < -Math.PI ? n + t : n >= Math.PI ? n - t : n;
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
                (a.equalsEpsilon = function(e, t, r, i) {
                    i = n(i, r);
                    var a = Math.abs(e - t);
                    return a <= i || a <= r * Math.max(Math.abs(e), Math.abs(t));
                }),
                (a.lessThan = function(e, t, n) {
                    return e - t < -n;
                }),
                (a.lessThanOrEquals = function(e, t, n) {
                    return e - t < n;
                }),
                (a.greaterThan = function(e, t, n) {
                    return e - t > n;
                }),
                (a.greaterThanOrEquals = function(e, t, n) {
                    return e - t > -n;
                });
            var o = [1];
            (a.factorial = function(e) {
                var t = o.length;
                if (e >= t) for (var n = o[t - 1], r = t; r <= e; r++) o.push(n * r);
                return o[e];
            }),
                (a.incrementWrap = function(e, t, r) {
                    return (r = n(r, 0)), ++e, e > t && (e = r), e;
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
                (a.clamp = function(e, t, n) {
                    return e < t ? t : e > n ? n : e;
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
                (a.cbrt = n(Math.cbrt, function(e) {
                    var t = Math.pow(Math.abs(e), 1 / 3);
                    return e < 0 ? -t : t;
                })),
                (a.log2 = n(Math.log2, function(e) {
                    return Math.log(e) * Math.LOG2E;
                })),
                (a.fog = function(e, t) {
                    var n = e * t;
                    return 1 - Math.exp(-n * n);
                }),
                (a.fastApproximateAtan = function(e) {
                    return e * (-0.1784 * Math.abs(e) - 0.0663 * e * e + 1.0301);
                }),
                (a.fastApproximateAtan2 = function(e, t) {
                    var n,
                        r,
                        i = Math.abs(e);
                    (n = Math.abs(t)), (r = Math.max(i, n)), (n = Math.min(i, n));
                    var o = n / r;
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
        ], function(e, t, n, r, i, a) {
            "use strict";
            function o(e, n, r) {
                (this.x = t(e, 0)), (this.y = t(n, 0)), (this.z = t(r, 0));
            }
            (o.fromSpherical = function(e, r) {
                n(r) || (r = new o());
                var i = e.clock,
                    a = e.cone,
                    u = t(e.magnitude, 1),
                    s = u * Math.sin(a);
                return (r.x = s * Math.cos(i)), (r.y = s * Math.sin(i)), (r.z = u * Math.cos(a)), r;
            }),
                (o.fromElements = function(e, t, r, i) {
                    return n(i) ? ((i.x = e), (i.y = t), (i.z = r), i) : new o(e, t, r);
                }),
                (o.clone = function(e, t) {
                    if (n(e))
                        return n(t)
                            ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), t)
                            : new o(e.x, e.y, e.z);
                }),
                (o.fromCartesian4 = o.clone),
                (o.packedLength = 3),
                (o.pack = function(e, n, r) {
                    return (r = t(r, 0)), (n[r++] = e.x), (n[r++] = e.y), (n[r] = e.z), n;
                }),
                (o.unpack = function(e, r, i) {
                    return (
                        (r = t(r, 0)),
                        n(i) || (i = new o()),
                        (i.x = e[r++]),
                        (i.y = e[r++]),
                        (i.z = e[r]),
                        i
                    );
                }),
                (o.packArray = function(e, t) {
                    var r = e.length;
                    n(t) ? (t.length = 3 * r) : (t = new Array(3 * r));
                    for (var i = 0; i < r; ++i) o.pack(e[i], t, 3 * i);
                    return t;
                }),
                (o.unpackArray = function(e, t) {
                    var r = e.length;
                    n(t) ? (t.length = r / 3) : (t = new Array(r / 3));
                    for (var i = 0; i < r; i += 3) {
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
                (o.minimumByComponent = function(e, t, n) {
                    return (
                        (n.x = Math.min(e.x, t.x)),
                        (n.y = Math.min(e.y, t.y)),
                        (n.z = Math.min(e.z, t.z)),
                        n
                    );
                }),
                (o.maximumByComponent = function(e, t, n) {
                    return (
                        (n.x = Math.max(e.x, t.x)),
                        (n.y = Math.max(e.y, t.y)),
                        (n.z = Math.max(e.z, t.z)),
                        n
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
                    var n = o.magnitude(e);
                    return (t.x = e.x / n), (t.y = e.y / n), (t.z = e.z / n), t;
                }),
                (o.dot = function(e, t) {
                    return e.x * t.x + e.y * t.y + e.z * t.z;
                }),
                (o.multiplyComponents = function(e, t, n) {
                    return (n.x = e.x * t.x), (n.y = e.y * t.y), (n.z = e.z * t.z), n;
                }),
                (o.divideComponents = function(e, t, n) {
                    return (n.x = e.x / t.x), (n.y = e.y / t.y), (n.z = e.z / t.z), n;
                }),
                (o.add = function(e, t, n) {
                    return (n.x = e.x + t.x), (n.y = e.y + t.y), (n.z = e.z + t.z), n;
                }),
                (o.subtract = function(e, t, n) {
                    return (n.x = e.x - t.x), (n.y = e.y - t.y), (n.z = e.z - t.z), n;
                }),
                (o.multiplyByScalar = function(e, t, n) {
                    return (n.x = e.x * t), (n.y = e.y * t), (n.z = e.z * t), n;
                }),
                (o.divideByScalar = function(e, t, n) {
                    return (n.x = e.x / t), (n.y = e.y / t), (n.z = e.z / t), n;
                }),
                (o.negate = function(e, t) {
                    return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), t;
                }),
                (o.abs = function(e, t) {
                    return (t.x = Math.abs(e.x)), (t.y = Math.abs(e.y)), (t.z = Math.abs(e.z)), t;
                });
            var s = new o();
            o.lerp = function(e, t, n, r) {
                return (
                    o.multiplyByScalar(t, n, s),
                    (r = o.multiplyByScalar(e, 1 - n, r)),
                    o.add(s, r, r)
                );
            };
            var c = new o(),
                l = new o();
            o.angleBetween = function(e, t) {
                o.normalize(e, c), o.normalize(t, l);
                var n = o.dot(c, l),
                    r = o.magnitude(o.cross(c, l, c));
                return Math.atan2(r, n);
            };
            var f = new o();
            (o.mostOrthogonalAxis = function(e, t) {
                var n = o.normalize(e, f);
                return (
                    o.abs(n, n),
                    (t =
                        n.x <= n.y
                            ? n.x <= n.z
                                ? o.clone(o.UNIT_X, t)
                                : o.clone(o.UNIT_Z, t)
                            : n.y <= n.z
                            ? o.clone(o.UNIT_Y, t)
                            : o.clone(o.UNIT_Z, t))
                );
            }),
                (o.projectVector = function(e, t, n) {
                    var r = o.dot(e, t) / o.dot(t, t);
                    return o.multiplyByScalar(t, r, n);
                }),
                (o.equals = function(e, t) {
                    return e === t || (n(e) && n(t) && e.x === t.x && e.y === t.y && e.z === t.z);
                }),
                (o.equalsArray = function(e, t, n) {
                    return e.x === t[n] && e.y === t[n + 1] && e.z === t[n + 2];
                }),
                (o.equalsEpsilon = function(e, t, r, i) {
                    return (
                        e === t ||
                        (n(e) &&
                            n(t) &&
                            a.equalsEpsilon(e.x, t.x, r, i) &&
                            a.equalsEpsilon(e.y, t.y, r, i) &&
                            a.equalsEpsilon(e.z, t.z, r, i))
                    );
                }),
                (o.cross = function(e, t, n) {
                    var r = e.x,
                        i = e.y,
                        a = e.z,
                        o = t.x,
                        u = t.y,
                        s = t.z,
                        c = i * s - a * u,
                        l = a * o - r * s,
                        f = r * u - i * o;
                    return (n.x = c), (n.y = l), (n.z = f), n;
                }),
                (o.midpoint = function(e, t, n) {
                    return (
                        (n.x = 0.5 * (e.x + t.x)),
                        (n.y = 0.5 * (e.y + t.y)),
                        (n.z = 0.5 * (e.z + t.z)),
                        n
                    );
                }),
                (o.fromDegrees = function(e, t, n, r, i) {
                    return (e = a.toRadians(e)), (t = a.toRadians(t)), o.fromRadians(e, t, n, r, i);
                });
            var h = new o(),
                d = new o(),
                p = new o(40680631590769, 40680631590769, 40408299984661.445);
            return (
                (o.fromRadians = function(e, r, i, a, u) {
                    i = t(i, 0);
                    var s = n(a) ? a.radiiSquared : p,
                        c = Math.cos(r);
                    (h.x = c * Math.cos(e)),
                        (h.y = c * Math.sin(e)),
                        (h.z = Math.sin(r)),
                        (h = o.normalize(h, h)),
                        o.multiplyComponents(s, h, d);
                    var l = Math.sqrt(o.dot(h, d));
                    return (
                        (d = o.divideByScalar(d, l, d)),
                        (h = o.multiplyByScalar(h, i, h)),
                        n(u) || (u = new o()),
                        o.add(d, h, u)
                    );
                }),
                (o.fromDegreesArray = function(e, t, r) {
                    var i = e.length;
                    n(r) ? (r.length = i / 2) : (r = new Array(i / 2));
                    for (var a = 0; a < i; a += 2) {
                        var u = e[a],
                            s = e[a + 1],
                            c = a / 2;
                        r[c] = o.fromDegrees(u, s, 0, t, r[c]);
                    }
                    return r;
                }),
                (o.fromRadiansArray = function(e, t, r) {
                    var i = e.length;
                    n(r) ? (r.length = i / 2) : (r = new Array(i / 2));
                    for (var a = 0; a < i; a += 2) {
                        var u = e[a],
                            s = e[a + 1],
                            c = a / 2;
                        r[c] = o.fromRadians(u, s, 0, t, r[c]);
                    }
                    return r;
                }),
                (o.fromDegreesArrayHeights = function(e, t, r) {
                    var i = e.length;
                    n(r) ? (r.length = i / 3) : (r = new Array(i / 3));
                    for (var a = 0; a < i; a += 3) {
                        var u = e[a],
                            s = e[a + 1],
                            c = e[a + 2],
                            l = a / 3;
                        r[l] = o.fromDegrees(u, s, c, t, r[l]);
                    }
                    return r;
                }),
                (o.fromRadiansArrayHeights = function(e, t, r) {
                    var i = e.length;
                    n(r) ? (r.length = i / 3) : (r = new Array(i / 3));
                    for (var a = 0; a < i; a += 3) {
                        var u = e[a],
                            s = e[a + 1],
                            c = e[a + 2],
                            l = a / 3;
                        r[l] = o.fromRadians(u, s, c, t, r[l]);
                    }
                    return r;
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
                (o.prototype.equalsEpsilon = function(e, t, n) {
                    return o.equalsEpsilon(this, e, t, n);
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
        ], function(e, t, n, r) {
            "use strict";
            function i(n, i, u, s, c) {
                var l = n.x,
                    f = n.y,
                    h = n.z,
                    d = i.x,
                    p = i.y,
                    E = i.z,
                    m = l * l * d * d,
                    y = f * f * p * p,
                    _ = h * h * E * E,
                    T = m + y + _,
                    R = Math.sqrt(1 / T),
                    v = e.multiplyByScalar(n, R, a);
                if (T < s) return isFinite(R) ? e.clone(v, c) : void 0;
                var A = u.x,
                    g = u.y,
                    S = u.z,
                    O = o;
                (O.x = v.x * A * 2), (O.y = v.y * g * 2), (O.z = v.z * S * 2);
                var M,
                    I,
                    w,
                    N,
                    x,
                    C,
                    P,
                    U,
                    D,
                    L,
                    F,
                    b = ((1 - R) * e.magnitude(n)) / (0.5 * e.magnitude(O)),
                    B = 0;
                do {
                    (b -= B),
                        (w = 1 / (1 + b * A)),
                        (N = 1 / (1 + b * g)),
                        (x = 1 / (1 + b * S)),
                        (C = w * w),
                        (P = N * N),
                        (U = x * x),
                        (D = C * w),
                        (L = P * N),
                        (F = U * x),
                        (M = m * C + y * P + _ * U - 1),
                        (I = m * D * A + y * L * g + _ * F * S);
                    B = M / (-2 * I);
                } while (Math.abs(M) > r.EPSILON12);
                return t(c)
                    ? ((c.x = l * w), (c.y = f * N), (c.z = h * x), c)
                    : new e(l * w, f * N, h * x);
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
        ], function(e, t, n, r, i, a, o) {
            "use strict";
            function u(e, t, r) {
                (this.longitude = n(e, 0)), (this.latitude = n(t, 0)), (this.height = n(r, 0));
            }
            (u.fromRadians = function(e, t, i, a) {
                return (
                    (i = n(i, 0)),
                    r(a) ? ((a.longitude = e), (a.latitude = t), (a.height = i), a) : new u(e, t, i)
                );
            }),
                (u.fromDegrees = function(e, t, n, r) {
                    return (e = a.toRadians(e)), (t = a.toRadians(t)), u.fromRadians(e, t, n, r);
                });
            var s = new e(),
                c = new e(),
                l = new e(),
                f = new e(1 / 6378137, 1 / 6378137, 1 / 6356752.314245179),
                h = new e(1 / 40680631590769, 1 / 40680631590769, 1 / 40408299984661.445),
                d = a.EPSILON1;
            return (
                (u.fromCartesian = function(t, n, i) {
                    var p = r(n) ? n.oneOverRadii : f,
                        E = r(n) ? n.oneOverRadiiSquared : h,
                        m = r(n) ? n._centerToleranceSquared : d,
                        y = o(t, p, E, m, c);
                    if (r(y)) {
                        var _ = e.multiplyComponents(y, E, s);
                        _ = e.normalize(_, _);
                        var T = e.subtract(t, y, l),
                            R = Math.atan2(_.y, _.x),
                            v = Math.asin(_.z),
                            A = a.sign(e.dot(T, t)) * e.magnitude(T);
                        return r(i)
                            ? ((i.longitude = R), (i.latitude = v), (i.height = A), i)
                            : new u(R, v, A);
                    }
                }),
                (u.toCartesian = function(t, n, r) {
                    return e.fromRadians(t.longitude, t.latitude, t.height, n, r);
                }),
                (u.clone = function(e, t) {
                    if (r(e))
                        return r(t)
                            ? ((t.longitude = e.longitude),
                              (t.latitude = e.latitude),
                              (t.height = e.height),
                              t)
                            : new u(e.longitude, e.latitude, e.height);
                }),
                (u.equals = function(e, t) {
                    return (
                        e === t ||
                        (r(e) &&
                            r(t) &&
                            e.longitude === t.longitude &&
                            e.latitude === t.latitude &&
                            e.height === t.height)
                    );
                }),
                (u.equalsEpsilon = function(e, t, n) {
                    return (
                        e === t ||
                        (r(e) &&
                            r(t) &&
                            Math.abs(e.longitude - t.longitude) <= n &&
                            Math.abs(e.latitude - t.latitude) <= n &&
                            Math.abs(e.height - t.height) <= n)
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
                n = Object.defineProperties;
            return (
                (t && e(n)) ||
                    (n = function(e) {
                        return e;
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
        ], function(e, t, n, r, i, a, o, u, s, c) {
            "use strict";
            function l(t, n, i, a) {
                (n = r(n, 0)),
                    (i = r(i, 0)),
                    (a = r(a, 0)),
                    (t._radii = new e(n, i, a)),
                    (t._radiiSquared = new e(n * n, i * i, a * a)),
                    (t._radiiToTheFourth = new e(n * n * n * n, i * i * i * i, a * a * a * a)),
                    (t._oneOverRadii = new e(
                        0 === n ? 0 : 1 / n,
                        0 === i ? 0 : 1 / i,
                        0 === a ? 0 : 1 / a
                    )),
                    (t._oneOverRadiiSquared = new e(
                        0 === n ? 0 : 1 / (n * n),
                        0 === i ? 0 : 1 / (i * i),
                        0 === a ? 0 : 1 / (a * a)
                    )),
                    (t._minimumRadius = Math.min(n, i, a)),
                    (t._maximumRadius = Math.max(n, i, a)),
                    (t._centerToleranceSquared = s.EPSILON1),
                    0 !== t._radiiSquared.z &&
                        (t._squaredXOverSquaredZ = t._radiiSquared.x / t._radiiSquared.z);
            }
            function f(e, t, n) {
                (this._radii = void 0),
                    (this._radiiSquared = void 0),
                    (this._radiiToTheFourth = void 0),
                    (this._oneOverRadii = void 0),
                    (this._oneOverRadiiSquared = void 0),
                    (this._minimumRadius = void 0),
                    (this._maximumRadius = void 0),
                    (this._centerToleranceSquared = void 0),
                    (this._squaredXOverSquaredZ = void 0),
                    l(this, e, t, n);
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
                (f.clone = function(t, n) {
                    if (i(t)) {
                        var r = t._radii;
                        return i(n)
                            ? (e.clone(r, n._radii),
                              e.clone(t._radiiSquared, n._radiiSquared),
                              e.clone(t._radiiToTheFourth, n._radiiToTheFourth),
                              e.clone(t._oneOverRadii, n._oneOverRadii),
                              e.clone(t._oneOverRadiiSquared, n._oneOverRadiiSquared),
                              (n._minimumRadius = t._minimumRadius),
                              (n._maximumRadius = t._maximumRadius),
                              (n._centerToleranceSquared = t._centerToleranceSquared),
                              n)
                            : new f(r.x, r.y, r.z);
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
                (f.pack = function(t, n, i) {
                    return (i = r(i, 0)), e.pack(t._radii, n, i), n;
                }),
                (f.unpack = function(t, n, i) {
                    n = r(n, 0);
                    var a = e.unpack(t, n);
                    return f.fromCartesian3(a, i);
                }),
                (f.prototype.geocentricSurfaceNormal = e.normalize),
                (f.prototype.geodeticSurfaceNormalCartographic = function(t, n) {
                    var r = t.longitude,
                        a = t.latitude,
                        o = Math.cos(a),
                        u = o * Math.cos(r),
                        s = o * Math.sin(r),
                        c = Math.sin(a);
                    return (
                        i(n) || (n = new e()), (n.x = u), (n.y = s), (n.z = c), e.normalize(n, n)
                    );
                }),
                (f.prototype.geodeticSurfaceNormal = function(t, n) {
                    return (
                        i(n) || (n = new e()),
                        (n = e.multiplyComponents(t, this._oneOverRadiiSquared, n)),
                        e.normalize(n, n)
                    );
                });
            var h = new e(),
                d = new e();
            (f.prototype.cartographicToCartesian = function(t, n) {
                var r = h,
                    a = d;
                this.geodeticSurfaceNormalCartographic(t, r),
                    e.multiplyComponents(this._radiiSquared, r, a);
                var o = Math.sqrt(e.dot(r, a));
                return (
                    e.divideByScalar(a, o, a),
                    e.multiplyByScalar(r, t.height, r),
                    i(n) || (n = new e()),
                    e.add(a, r, n)
                );
            }),
                (f.prototype.cartographicArrayToCartesianArray = function(e, t) {
                    var n = e.length;
                    i(t) ? (t.length = n) : (t = new Array(n));
                    for (var r = 0; r < n; r++) t[r] = this.cartographicToCartesian(e[r], t[r]);
                    return t;
                });
            var p = new e(),
                E = new e(),
                m = new e();
            return (
                (f.prototype.cartesianToCartographic = function(n, r) {
                    var a = this.scaleToGeodeticSurface(n, E);
                    if (i(a)) {
                        var o = this.geodeticSurfaceNormal(a, p),
                            u = e.subtract(n, a, m),
                            c = Math.atan2(o.y, o.x),
                            l = Math.asin(o.z),
                            f = s.sign(e.dot(u, n)) * e.magnitude(u);
                        return i(r)
                            ? ((r.longitude = c), (r.latitude = l), (r.height = f), r)
                            : new t(c, l, f);
                    }
                }),
                (f.prototype.cartesianArrayToCartographicArray = function(e, t) {
                    var n = e.length;
                    i(t) ? (t.length = n) : (t = new Array(n));
                    for (var r = 0; r < n; ++r) t[r] = this.cartesianToCartographic(e[r], t[r]);
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
                (f.prototype.scaleToGeocentricSurface = function(t, n) {
                    i(n) || (n = new e());
                    var r = t.x,
                        a = t.y,
                        o = t.z,
                        u = this._oneOverRadiiSquared,
                        s = 1 / Math.sqrt(r * r * u.x + a * a * u.y + o * o * u.z);
                    return e.multiplyByScalar(t, s, n);
                }),
                (f.prototype.transformPositionToScaledSpace = function(t, n) {
                    return i(n) || (n = new e()), e.multiplyComponents(t, this._oneOverRadii, n);
                }),
                (f.prototype.transformPositionFromScaledSpace = function(t, n) {
                    return i(n) || (n = new e()), e.multiplyComponents(t, this._radii, n);
                }),
                (f.prototype.equals = function(t) {
                    return this === t || (i(t) && e.equals(this._radii, t._radii));
                }),
                (f.prototype.toString = function() {
                    return this._radii.toString();
                }),
                (f.prototype.getSurfaceNormalIntersectionWithZAxis = function(t, n, a) {
                    n = r(n, 0);
                    var o = this._squaredXOverSquaredZ;
                    if (
                        (i(a) || (a = new e()),
                        (a.x = 0),
                        (a.y = 0),
                        (a.z = t.z * (1 - o)),
                        !(Math.abs(a.z) >= this._radii.z - n))
                    )
                        return a;
                }),
                f
            );
        }),
        define("Core/arrayRemoveDuplicates", [
            "./Check",
            "./defaultValue",
            "./defined",
            "./Math"
        ], function(e, t, n, r) {
            "use strict";
            function i(e, r, i) {
                if (n(e)) {
                    i = t(i, !1);
                    var o = e.length;
                    if (o < 2) return e;
                    var u, s, c;
                    for (u = 1; u < o && ((s = e[u - 1]), (c = e[u]), !r(s, c, a)); ++u);
                    if (u === o) return i && r(e[0], e[e.length - 1], a) ? e.slice(1) : e;
                    for (var l = e.slice(0, u); u < o; ++u)
                        (c = e[u]), r(s, c, a) || (l.push(c), (s = c));
                    return i && l.length > 1 && r(l[0], l[l.length - 1], a) && l.shift(), l;
                }
            }
            var a = r.EPSILON10;
            return i;
        }),
        define("Core/Cartesian2", [
            "./Check",
            "./defaultValue",
            "./defined",
            "./DeveloperError",
            "./freezeObject",
            "./Math"
        ], function(e, t, n, r, i, a) {
            "use strict";
            function o(e, n) {
                (this.x = t(e, 0)), (this.y = t(n, 0));
            }
            (o.fromElements = function(e, t, r) {
                return n(r) ? ((r.x = e), (r.y = t), r) : new o(e, t);
            }),
                (o.clone = function(e, t) {
                    if (n(e)) return n(t) ? ((t.x = e.x), (t.y = e.y), t) : new o(e.x, e.y);
                }),
                (o.fromCartesian3 = o.clone),
                (o.fromCartesian4 = o.clone),
                (o.packedLength = 2),
                (o.pack = function(e, n, r) {
                    return (r = t(r, 0)), (n[r++] = e.x), (n[r] = e.y), n;
                }),
                (o.unpack = function(e, r, i) {
                    return (r = t(r, 0)), n(i) || (i = new o()), (i.x = e[r++]), (i.y = e[r]), i;
                }),
                (o.packArray = function(e, t) {
                    var r = e.length;
                    n(t) ? (t.length = 2 * r) : (t = new Array(2 * r));
                    for (var i = 0; i < r; ++i) o.pack(e[i], t, 2 * i);
                    return t;
                }),
                (o.unpackArray = function(e, t) {
                    var r = e.length;
                    n(t) ? (t.length = r / 2) : (t = new Array(r / 2));
                    for (var i = 0; i < r; i += 2) {
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
                (o.minimumByComponent = function(e, t, n) {
                    return (n.x = Math.min(e.x, t.x)), (n.y = Math.min(e.y, t.y)), n;
                }),
                (o.maximumByComponent = function(e, t, n) {
                    return (n.x = Math.max(e.x, t.x)), (n.y = Math.max(e.y, t.y)), n;
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
                    var n = o.magnitude(e);
                    return (t.x = e.x / n), (t.y = e.y / n), t;
                }),
                (o.dot = function(e, t) {
                    return e.x * t.x + e.y * t.y;
                }),
                (o.multiplyComponents = function(e, t, n) {
                    return (n.x = e.x * t.x), (n.y = e.y * t.y), n;
                }),
                (o.divideComponents = function(e, t, n) {
                    return (n.x = e.x / t.x), (n.y = e.y / t.y), n;
                }),
                (o.add = function(e, t, n) {
                    return (n.x = e.x + t.x), (n.y = e.y + t.y), n;
                }),
                (o.subtract = function(e, t, n) {
                    return (n.x = e.x - t.x), (n.y = e.y - t.y), n;
                }),
                (o.multiplyByScalar = function(e, t, n) {
                    return (n.x = e.x * t), (n.y = e.y * t), n;
                }),
                (o.divideByScalar = function(e, t, n) {
                    return (n.x = e.x / t), (n.y = e.y / t), n;
                }),
                (o.negate = function(e, t) {
                    return (t.x = -e.x), (t.y = -e.y), t;
                }),
                (o.abs = function(e, t) {
                    return (t.x = Math.abs(e.x)), (t.y = Math.abs(e.y)), t;
                });
            var s = new o();
            o.lerp = function(e, t, n, r) {
                return (
                    o.multiplyByScalar(t, n, s),
                    (r = o.multiplyByScalar(e, 1 - n, r)),
                    o.add(s, r, r)
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
                    var n = o.normalize(e, f);
                    return (
                        o.abs(n, n), (t = n.x <= n.y ? o.clone(o.UNIT_X, t) : o.clone(o.UNIT_Y, t))
                    );
                }),
                (o.equals = function(e, t) {
                    return e === t || (n(e) && n(t) && e.x === t.x && e.y === t.y);
                }),
                (o.equalsArray = function(e, t, n) {
                    return e.x === t[n] && e.y === t[n + 1];
                }),
                (o.equalsEpsilon = function(e, t, r, i) {
                    return (
                        e === t ||
                        (n(e) &&
                            n(t) &&
                            a.equalsEpsilon(e.x, t.x, r, i) &&
                            a.equalsEpsilon(e.y, t.y, r, i))
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
                (o.prototype.equalsEpsilon = function(e, t, n) {
                    return o.equalsEpsilon(this, e, t, n);
                }),
                (o.prototype.toString = function() {
                    return "(" + this.x + ", " + this.y + ")";
                }),
                o
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
        ], function(e, t, n, r, i, a, o) {
            "use strict";
            function u(e) {
                (this._ellipsoid = n(e, o.WGS84)),
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
                (u.prototype.project = function(t, n) {
                    var i = this._semimajorAxis,
                        a = t.longitude * i,
                        o = t.latitude * i,
                        u = t.height;
                    return r(n) ? ((n.x = a), (n.y = o), (n.z = u), n) : new e(a, o, u);
                }),
                (u.prototype.unproject = function(e, n) {
                    var i = this._oneOverSemimajorAxis,
                        a = e.x * i,
                        o = e.y * i,
                        u = e.z;
                    return r(n)
                        ? ((n.longitude = a), (n.latitude = o), (n.height = u), n)
                        : new t(a, o, u);
                }),
                u
            );
        }),
        define("Core/Intersect", ["./freezeObject"], function(e) {
            "use strict";
            return e({ OUTSIDE: -1, INTERSECTING: 0, INSIDE: 1 });
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
        ], function(e, t, n, r, i, a, o, u) {
            "use strict";
            function s(e, t, r, i) {
                (this.west = n(e, 0)),
                    (this.south = n(t, 0)),
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
                (s.pack = function(e, t, r) {
                    return (
                        (r = n(r, 0)),
                        (t[r++] = e.west),
                        (t[r++] = e.south),
                        (t[r++] = e.east),
                        (t[r] = e.north),
                        t
                    );
                }),
                (s.unpack = function(e, t, i) {
                    return (
                        (t = n(t, 0)),
                        r(i) || (i = new s()),
                        (i.west = e[t++]),
                        (i.south = e[t++]),
                        (i.east = e[t++]),
                        (i.north = e[t]),
                        i
                    );
                }),
                (s.computeWidth = function(e) {
                    var t = e.east,
                        n = e.west;
                    return t < n && (t += u.TWO_PI), t - n;
                }),
                (s.computeHeight = function(e) {
                    return e.north - e.south;
                }),
                (s.fromDegrees = function(e, t, i, a, o) {
                    return (
                        (e = u.toRadians(n(e, 0))),
                        (t = u.toRadians(n(t, 0))),
                        (i = u.toRadians(n(i, 0))),
                        (a = u.toRadians(n(a, 0))),
                        r(o)
                            ? ((o.west = e), (o.south = t), (o.east = i), (o.north = a), o)
                            : new s(e, t, i, a)
                    );
                }),
                (s.fromRadians = function(e, t, i, a, o) {
                    return r(o)
                        ? ((o.west = n(e, 0)),
                          (o.south = n(t, 0)),
                          (o.east = n(i, 0)),
                          (o.north = n(a, 0)),
                          o)
                        : new s(e, t, i, a);
                }),
                (s.fromCartographicArray = function(e, t) {
                    for (
                        var n = Number.MAX_VALUE,
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
                        (n = Math.min(n, d.longitude)),
                            (i = Math.max(i, d.longitude)),
                            (c = Math.min(c, d.latitude)),
                            (l = Math.max(l, d.latitude));
                        var p = d.longitude >= 0 ? d.longitude : d.longitude + u.TWO_PI;
                        (a = Math.min(a, p)), (o = Math.max(o, p));
                    }
                    return (
                        i - n > o - a &&
                            ((n = a),
                            (i = o),
                            i > u.PI && (i -= u.TWO_PI),
                            n > u.PI && (n -= u.TWO_PI)),
                        r(t)
                            ? ((t.west = n), (t.south = c), (t.east = i), (t.north = l), t)
                            : new s(n, c, i, l)
                    );
                }),
                (s.fromCartesianArray = function(e, t, i) {
                    t = n(t, a.WGS84);
                    for (
                        var o = Number.MAX_VALUE,
                            c = -Number.MAX_VALUE,
                            l = Number.MAX_VALUE,
                            f = -Number.MAX_VALUE,
                            h = Number.MAX_VALUE,
                            d = -Number.MAX_VALUE,
                            p = 0,
                            E = e.length;
                        p < E;
                        p++
                    ) {
                        var m = t.cartesianToCartographic(e[p]);
                        (o = Math.min(o, m.longitude)),
                            (c = Math.max(c, m.longitude)),
                            (h = Math.min(h, m.latitude)),
                            (d = Math.max(d, m.latitude));
                        var y = m.longitude >= 0 ? m.longitude : m.longitude + u.TWO_PI;
                        (l = Math.min(l, y)), (f = Math.max(f, y));
                    }
                    return (
                        c - o > f - l &&
                            ((o = l),
                            (c = f),
                            c > u.PI && (c -= u.TWO_PI),
                            o > u.PI && (o -= u.TWO_PI)),
                        r(i)
                            ? ((i.west = o), (i.south = h), (i.east = c), (i.north = d), i)
                            : new s(o, h, c, d)
                    );
                }),
                (s.clone = function(e, t) {
                    if (r(e))
                        return r(t)
                            ? ((t.west = e.west),
                              (t.south = e.south),
                              (t.east = e.east),
                              (t.north = e.north),
                              t)
                            : new s(e.west, e.south, e.east, e.north);
                }),
                (s.equalsEpsilon = function(e, t, n) {
                    return (
                        e === t ||
                        (r(e) &&
                            r(t) &&
                            Math.abs(e.west - t.west) <= n &&
                            Math.abs(e.south - t.south) <= n &&
                            Math.abs(e.east - t.east) <= n &&
                            Math.abs(e.north - t.north) <= n)
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
                        (r(e) &&
                            r(t) &&
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
                (s.southwest = function(t, n) {
                    return r(n)
                        ? ((n.longitude = t.west), (n.latitude = t.south), (n.height = 0), n)
                        : new e(t.west, t.south);
                }),
                (s.northwest = function(t, n) {
                    return r(n)
                        ? ((n.longitude = t.west), (n.latitude = t.north), (n.height = 0), n)
                        : new e(t.west, t.north);
                }),
                (s.northeast = function(t, n) {
                    return r(n)
                        ? ((n.longitude = t.east), (n.latitude = t.north), (n.height = 0), n)
                        : new e(t.east, t.north);
                }),
                (s.southeast = function(t, n) {
                    return r(n)
                        ? ((n.longitude = t.east), (n.latitude = t.south), (n.height = 0), n)
                        : new e(t.east, t.south);
                }),
                (s.center = function(t, n) {
                    var i = t.east,
                        a = t.west;
                    i < a && (i += u.TWO_PI);
                    var o = u.negativePiToPi(0.5 * (a + i)),
                        s = 0.5 * (t.south + t.north);
                    return r(n)
                        ? ((n.longitude = o), (n.latitude = s), (n.height = 0), n)
                        : new e(o, s);
                }),
                (s.intersection = function(e, t, n) {
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
                            return r(n)
                                ? ((n.west = l), (n.south = h), (n.east = f), (n.north = d), n)
                                : new s(l, h, f, d);
                    }
                }),
                (s.simpleIntersection = function(e, t, n) {
                    var i = Math.max(e.west, t.west),
                        a = Math.max(e.south, t.south),
                        o = Math.min(e.east, t.east),
                        u = Math.min(e.north, t.north);
                    if (!(a >= u || i >= o))
                        return r(n)
                            ? ((n.west = i), (n.south = a), (n.east = o), (n.north = u), n)
                            : new s(i, a, o, u);
                }),
                (s.union = function(e, t, n) {
                    r(n) || (n = new s());
                    var i = e.east,
                        a = e.west,
                        o = t.east,
                        c = t.west;
                    i < a && o > 0 ? (i += u.TWO_PI) : o < c && i > 0 && (o += u.TWO_PI),
                        i < a && c < 0 ? (c += u.TWO_PI) : o < c && a < 0 && (a += u.TWO_PI);
                    var l = u.convertLongitudeRange(Math.min(a, c)),
                        f = u.convertLongitudeRange(Math.max(i, o));
                    return (
                        (n.west = l),
                        (n.south = Math.min(e.south, t.south)),
                        (n.east = f),
                        (n.north = Math.max(e.north, t.north)),
                        n
                    );
                }),
                (s.expand = function(e, t, n) {
                    return (
                        r(n) || (n = new s()),
                        (n.west = Math.min(e.west, t.longitude)),
                        (n.south = Math.min(e.south, t.latitude)),
                        (n.east = Math.max(e.east, t.longitude)),
                        (n.north = Math.max(e.north, t.latitude)),
                        n
                    );
                }),
                (s.contains = function(e, t) {
                    var n = t.longitude,
                        r = t.latitude,
                        i = e.west,
                        a = e.east;
                    return (
                        a < i && ((a += u.TWO_PI), n < 0 && (n += u.TWO_PI)),
                        (n > i || u.equalsEpsilon(n, i, u.EPSILON14)) &&
                            (n < a || u.equalsEpsilon(n, a, u.EPSILON14)) &&
                            r >= e.south &&
                            r <= e.north
                    );
                });
            var c = new e();
            return (
                (s.subsample = function(e, t, i, o) {
                    (t = n(t, a.WGS84)), (i = n(i, 0)), r(o) || (o = []);
                    var l = 0,
                        f = e.north,
                        h = e.south,
                        d = e.east,
                        p = e.west,
                        E = c;
                    (E.height = i),
                        (E.longitude = p),
                        (E.latitude = f),
                        (o[l] = t.cartographicToCartesian(E, o[l])),
                        l++,
                        (E.longitude = d),
                        (o[l] = t.cartographicToCartesian(E, o[l])),
                        l++,
                        (E.latitude = h),
                        (o[l] = t.cartographicToCartesian(E, o[l])),
                        l++,
                        (E.longitude = p),
                        (o[l] = t.cartographicToCartesian(E, o[l])),
                        l++,
                        (E.latitude = f < 0 ? f : h > 0 ? h : 0);
                    for (var m = 1; m < 8; ++m)
                        (E.longitude = -Math.PI + m * u.PI_OVER_TWO),
                            s.contains(e, E) && ((o[l] = t.cartographicToCartesian(E, o[l])), l++);
                    return (
                        0 === E.latitude &&
                            ((E.longitude = p),
                            (o[l] = t.cartographicToCartesian(E, o[l])),
                            l++,
                            (E.longitude = d),
                            (o[l] = t.cartographicToCartesian(E, o[l])),
                            l++),
                        (o.length = l),
                        o
                    );
                }),
                (s.MAX_VALUE = o(new s(-Math.PI, -u.PI_OVER_TWO, Math.PI, u.PI_OVER_TWO))),
                s
            );
        }),
        define("Core/BoundingRectangle", [
            "./Cartesian2",
            "./Cartographic",
            "./Check",
            "./defaultValue",
            "./defined",
            "./GeographicProjection",
            "./Intersect",
            "./Rectangle"
        ], function(e, t, n, r, i, a, o, u) {
            "use strict";
            function s(e, t, n, i) {
                (this.x = r(e, 0)),
                    (this.y = r(t, 0)),
                    (this.width = r(n, 0)),
                    (this.height = r(i, 0));
            }
            (s.packedLength = 4),
                (s.pack = function(e, t, n) {
                    return (
                        (n = r(n, 0)),
                        (t[n++] = e.x),
                        (t[n++] = e.y),
                        (t[n++] = e.width),
                        (t[n] = e.height),
                        t
                    );
                }),
                (s.unpack = function(e, t, n) {
                    return (
                        (t = r(t, 0)),
                        i(n) || (n = new s()),
                        (n.x = e[t++]),
                        (n.y = e[t++]),
                        (n.width = e[t++]),
                        (n.height = e[t]),
                        n
                    );
                }),
                (s.fromPoints = function(e, t) {
                    if ((i(t) || (t = new s()), !i(e) || 0 === e.length))
                        return (t.x = 0), (t.y = 0), (t.width = 0), (t.height = 0), t;
                    for (
                        var n = e.length, r = e[0].x, a = e[0].y, o = e[0].x, u = e[0].y, c = 1;
                        c < n;
                        c++
                    ) {
                        var l = e[c],
                            f = l.x,
                            h = l.y;
                        (r = Math.min(f, r)),
                            (o = Math.max(f, o)),
                            (a = Math.min(h, a)),
                            (u = Math.max(h, u));
                    }
                    return (t.x = r), (t.y = a), (t.width = o - r), (t.height = u - a), t;
                });
            var c = new a(),
                l = new t(),
                f = new t();
            return (
                (s.fromRectangle = function(t, n, a) {
                    if ((i(a) || (a = new s()), !i(t)))
                        return (a.x = 0), (a.y = 0), (a.width = 0), (a.height = 0), a;
                    n = r(n, c);
                    var o = n.project(u.southwest(t, l)),
                        h = n.project(u.northeast(t, f));
                    return (
                        e.subtract(h, o, h),
                        (a.x = o.x),
                        (a.y = o.y),
                        (a.width = h.x),
                        (a.height = h.y),
                        a
                    );
                }),
                (s.clone = function(e, t) {
                    if (i(e))
                        return i(t)
                            ? ((t.x = e.x),
                              (t.y = e.y),
                              (t.width = e.width),
                              (t.height = e.height),
                              t)
                            : new s(e.x, e.y, e.width, e.height);
                }),
                (s.union = function(e, t, n) {
                    i(n) || (n = new s());
                    var r = Math.min(e.x, t.x),
                        a = Math.min(e.y, t.y),
                        o = Math.max(e.x + e.width, t.x + t.width),
                        u = Math.max(e.y + e.height, t.y + t.height);
                    return (n.x = r), (n.y = a), (n.width = o - r), (n.height = u - a), n;
                }),
                (s.expand = function(e, t, n) {
                    n = s.clone(e, n);
                    var r = t.x - n.x,
                        i = t.y - n.y;
                    return (
                        r > n.width ? (n.width = r) : r < 0 && ((n.width -= r), (n.x = t.x)),
                        i > n.height ? (n.height = i) : i < 0 && ((n.height -= i), (n.y = t.y)),
                        n
                    );
                }),
                (s.intersect = function(e, t) {
                    var n = e.x,
                        r = e.y,
                        i = t.x,
                        a = t.y;
                    return n > i + t.width ||
                        n + e.width < i ||
                        r + e.height < a ||
                        r > a + t.height
                        ? o.OUTSIDE
                        : o.INTERSECTING;
                }),
                (s.equals = function(e, t) {
                    return (
                        e === t ||
                        (i(e) &&
                            i(t) &&
                            e.x === t.x &&
                            e.y === t.y &&
                            e.width === t.width &&
                            e.height === t.height)
                    );
                }),
                (s.prototype.clone = function(e) {
                    return s.clone(this, e);
                }),
                (s.prototype.intersect = function(e) {
                    return s.intersect(this, e);
                }),
                (s.prototype.equals = function(e) {
                    return s.equals(this, e);
                }),
                s
            );
        }),
        define("Core/Interval", ["./defaultValue"], function(e) {
            "use strict";
            function t(t, n) {
                (this.start = e(t, 0)), (this.stop = e(n, 0));
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
        ], function(e, t, n, r, i, a, o, u) {
            "use strict";
            function s(e, t, r, i, a, o, u, s, c) {
                (this[0] = n(e, 0)),
                    (this[1] = n(i, 0)),
                    (this[2] = n(u, 0)),
                    (this[3] = n(t, 0)),
                    (this[4] = n(a, 0)),
                    (this[5] = n(s, 0)),
                    (this[6] = n(r, 0)),
                    (this[7] = n(o, 0)),
                    (this[8] = n(c, 0));
            }
            function c(e) {
                for (var t = 0, n = 0; n < 9; ++n) {
                    var r = e[n];
                    t += r * r;
                }
                return Math.sqrt(t);
            }
            function l(e) {
                for (var t = 0, n = 0; n < 3; ++n) {
                    var r = e[s.getElementIndex(E[n], p[n])];
                    t += 2 * r * r;
                }
                return Math.sqrt(t);
            }
            function f(e, t) {
                for (var n = u.EPSILON15, r = 0, i = 1, a = 0; a < 3; ++a) {
                    var o = Math.abs(e[s.getElementIndex(E[a], p[a])]);
                    o > r && ((i = a), (r = o));
                }
                var c = 1,
                    l = 0,
                    f = p[i],
                    h = E[i];
                if (Math.abs(e[s.getElementIndex(h, f)]) > n) {
                    var d,
                        m = e[s.getElementIndex(h, h)],
                        y = e[s.getElementIndex(f, f)],
                        _ = e[s.getElementIndex(h, f)],
                        T = (m - y) / 2 / _;
                    (d = T < 0 ? -1 / (-T + Math.sqrt(1 + T * T)) : 1 / (T + Math.sqrt(1 + T * T))),
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
                (s.pack = function(e, t, r) {
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
                        t
                    );
                }),
                (s.unpack = function(e, t, i) {
                    return (
                        (t = n(t, 0)),
                        r(i) || (i = new s()),
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
                    if (r(e))
                        return r(t)
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
                        (t = n(t, 0)),
                        r(i) || (i = new s()),
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
                    return r(t)
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
                    var n = e.x * e.x,
                        i = e.x * e.y,
                        a = e.x * e.z,
                        o = e.x * e.w,
                        u = e.y * e.y,
                        c = e.y * e.z,
                        l = e.y * e.w,
                        f = e.z * e.z,
                        h = e.z * e.w,
                        d = e.w * e.w,
                        p = n - u - f + d,
                        E = 2 * (i - h),
                        m = 2 * (a + l),
                        y = 2 * (i + h),
                        _ = -n + u - f + d,
                        T = 2 * (c - o),
                        R = 2 * (a - l),
                        v = 2 * (c + o),
                        A = -n - u + f + d;
                    return r(t)
                        ? ((t[0] = p),
                          (t[1] = y),
                          (t[2] = R),
                          (t[3] = E),
                          (t[4] = _),
                          (t[5] = v),
                          (t[6] = m),
                          (t[7] = T),
                          (t[8] = A),
                          t)
                        : new s(p, E, m, y, _, T, R, v, A);
                }),
                (s.fromHeadingPitchRoll = function(e, t) {
                    var n = Math.cos(-e.pitch),
                        i = Math.cos(-e.heading),
                        a = Math.cos(e.roll),
                        o = Math.sin(-e.pitch),
                        u = Math.sin(-e.heading),
                        c = Math.sin(e.roll),
                        l = n * i,
                        f = -a * u + c * o * i,
                        h = c * u + a * o * i,
                        d = n * u,
                        p = a * i + c * o * u,
                        E = -c * i + a * o * u,
                        m = -o,
                        y = c * n,
                        _ = a * n;
                    return r(t)
                        ? ((t[0] = l),
                          (t[1] = d),
                          (t[2] = m),
                          (t[3] = f),
                          (t[4] = p),
                          (t[5] = y),
                          (t[6] = h),
                          (t[7] = E),
                          (t[8] = _),
                          t)
                        : new s(l, f, h, d, p, E, m, y, _);
                }),
                (s.fromScale = function(e, t) {
                    return r(t)
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
                    return r(t)
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
                    return r(t)
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
                    var n = Math.cos(e),
                        i = Math.sin(e);
                    return r(t)
                        ? ((t[0] = 1),
                          (t[1] = 0),
                          (t[2] = 0),
                          (t[3] = 0),
                          (t[4] = n),
                          (t[5] = i),
                          (t[6] = 0),
                          (t[7] = -i),
                          (t[8] = n),
                          t)
                        : new s(1, 0, 0, 0, n, -i, 0, i, n);
                }),
                (s.fromRotationY = function(e, t) {
                    var n = Math.cos(e),
                        i = Math.sin(e);
                    return r(t)
                        ? ((t[0] = n),
                          (t[1] = 0),
                          (t[2] = -i),
                          (t[3] = 0),
                          (t[4] = 1),
                          (t[5] = 0),
                          (t[6] = i),
                          (t[7] = 0),
                          (t[8] = n),
                          t)
                        : new s(n, 0, i, 0, 1, 0, -i, 0, n);
                }),
                (s.fromRotationZ = function(e, t) {
                    var n = Math.cos(e),
                        i = Math.sin(e);
                    return r(t)
                        ? ((t[0] = n),
                          (t[1] = i),
                          (t[2] = 0),
                          (t[3] = -i),
                          (t[4] = n),
                          (t[5] = 0),
                          (t[6] = 0),
                          (t[7] = 0),
                          (t[8] = 1),
                          t)
                        : new s(n, -i, 0, i, n, 0, 0, 0, 1);
                }),
                (s.toArray = function(e, t) {
                    return r(t)
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
                (s.getColumn = function(e, t, n) {
                    var r = 3 * t,
                        i = e[r],
                        a = e[r + 1],
                        o = e[r + 2];
                    return (n.x = i), (n.y = a), (n.z = o), n;
                }),
                (s.setColumn = function(e, t, n, r) {
                    r = s.clone(e, r);
                    var i = 3 * t;
                    return (r[i] = n.x), (r[i + 1] = n.y), (r[i + 2] = n.z), r;
                }),
                (s.getRow = function(e, t, n) {
                    var r = e[t],
                        i = e[t + 3],
                        a = e[t + 6];
                    return (n.x = r), (n.y = i), (n.z = a), n;
                }),
                (s.setRow = function(e, t, n, r) {
                    return (r = s.clone(e, r)), (r[t] = n.x), (r[t + 3] = n.y), (r[t + 6] = n.z), r;
                });
            var h = new e();
            s.getScale = function(t, n) {
                return (
                    (n.x = e.magnitude(e.fromElements(t[0], t[1], t[2], h))),
                    (n.y = e.magnitude(e.fromElements(t[3], t[4], t[5], h))),
                    (n.z = e.magnitude(e.fromElements(t[6], t[7], t[8], h))),
                    n
                );
            };
            var d = new e();
            (s.getMaximumScale = function(t) {
                return s.getScale(t, d), e.maximumComponent(d);
            }),
                (s.multiply = function(e, t, n) {
                    var r = e[0] * t[0] + e[3] * t[1] + e[6] * t[2],
                        i = e[1] * t[0] + e[4] * t[1] + e[7] * t[2],
                        a = e[2] * t[0] + e[5] * t[1] + e[8] * t[2],
                        o = e[0] * t[3] + e[3] * t[4] + e[6] * t[5],
                        u = e[1] * t[3] + e[4] * t[4] + e[7] * t[5],
                        s = e[2] * t[3] + e[5] * t[4] + e[8] * t[5],
                        c = e[0] * t[6] + e[3] * t[7] + e[6] * t[8],
                        l = e[1] * t[6] + e[4] * t[7] + e[7] * t[8],
                        f = e[2] * t[6] + e[5] * t[7] + e[8] * t[8];
                    return (
                        (n[0] = r),
                        (n[1] = i),
                        (n[2] = a),
                        (n[3] = o),
                        (n[4] = u),
                        (n[5] = s),
                        (n[6] = c),
                        (n[7] = l),
                        (n[8] = f),
                        n
                    );
                }),
                (s.add = function(e, t, n) {
                    return (
                        (n[0] = e[0] + t[0]),
                        (n[1] = e[1] + t[1]),
                        (n[2] = e[2] + t[2]),
                        (n[3] = e[3] + t[3]),
                        (n[4] = e[4] + t[4]),
                        (n[5] = e[5] + t[5]),
                        (n[6] = e[6] + t[6]),
                        (n[7] = e[7] + t[7]),
                        (n[8] = e[8] + t[8]),
                        n
                    );
                }),
                (s.subtract = function(e, t, n) {
                    return (
                        (n[0] = e[0] - t[0]),
                        (n[1] = e[1] - t[1]),
                        (n[2] = e[2] - t[2]),
                        (n[3] = e[3] - t[3]),
                        (n[4] = e[4] - t[4]),
                        (n[5] = e[5] - t[5]),
                        (n[6] = e[6] - t[6]),
                        (n[7] = e[7] - t[7]),
                        (n[8] = e[8] - t[8]),
                        n
                    );
                }),
                (s.multiplyByVector = function(e, t, n) {
                    var r = t.x,
                        i = t.y,
                        a = t.z,
                        o = e[0] * r + e[3] * i + e[6] * a,
                        u = e[1] * r + e[4] * i + e[7] * a,
                        s = e[2] * r + e[5] * i + e[8] * a;
                    return (n.x = o), (n.y = u), (n.z = s), n;
                }),
                (s.multiplyByScalar = function(e, t, n) {
                    return (
                        (n[0] = e[0] * t),
                        (n[1] = e[1] * t),
                        (n[2] = e[2] * t),
                        (n[3] = e[3] * t),
                        (n[4] = e[4] * t),
                        (n[5] = e[5] * t),
                        (n[6] = e[6] * t),
                        (n[7] = e[7] * t),
                        (n[8] = e[8] * t),
                        n
                    );
                }),
                (s.multiplyByScale = function(e, t, n) {
                    return (
                        (n[0] = e[0] * t.x),
                        (n[1] = e[1] * t.x),
                        (n[2] = e[2] * t.x),
                        (n[3] = e[3] * t.y),
                        (n[4] = e[4] * t.y),
                        (n[5] = e[5] * t.y),
                        (n[6] = e[6] * t.z),
                        (n[7] = e[7] * t.z),
                        (n[8] = e[8] * t.z),
                        n
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
                    var n = e[0],
                        r = e[3],
                        i = e[6],
                        a = e[1],
                        o = e[4],
                        u = e[7],
                        s = e[2],
                        c = e[5],
                        l = e[8];
                    return (
                        (t[0] = n),
                        (t[1] = r),
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
                E = [2, 2, 1],
                m = new s(),
                y = new s();
            return (
                (s.computeEigenDecomposition = function(e, t) {
                    var n = u.EPSILON20,
                        i = 0,
                        a = 0;
                    r(t) || (t = {});
                    for (
                        var o = (t.unitary = s.clone(s.IDENTITY, t.unitary)),
                            h = (t.diagonal = s.clone(e, t.diagonal)),
                            d = n * c(h);
                        a < 10 && l(h) > d;

                    )
                        f(h, m),
                            s.transpose(m, y),
                            s.multiply(h, m, h),
                            s.multiply(y, h, h),
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
                        n = e[3],
                        r = e[6],
                        i = e[1],
                        a = e[4],
                        o = e[7],
                        u = e[2],
                        s = e[5],
                        c = e[8];
                    return t * (a * c - s * o) + i * (s * r - n * c) + u * (n * o - a * r);
                }),
                (s.inverse = function(e, t) {
                    var n = e[0],
                        r = e[1],
                        i = e[2],
                        a = e[3],
                        o = e[4],
                        u = e[5],
                        c = e[6],
                        l = e[7],
                        f = e[8],
                        h = s.determinant(e);
                    (t[0] = o * f - l * u),
                        (t[1] = l * i - r * f),
                        (t[2] = r * u - o * i),
                        (t[3] = c * u - a * f),
                        (t[4] = n * f - c * i),
                        (t[5] = a * i - n * u),
                        (t[6] = a * l - c * o),
                        (t[7] = c * r - n * l),
                        (t[8] = n * o - a * r);
                    var d = 1 / h;
                    return s.multiplyByScalar(t, d, t);
                }),
                (s.equals = function(e, t) {
                    return (
                        e === t ||
                        (r(e) &&
                            r(t) &&
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
                (s.equalsEpsilon = function(e, t, n) {
                    return (
                        e === t ||
                        (r(e) &&
                            r(t) &&
                            Math.abs(e[0] - t[0]) <= n &&
                            Math.abs(e[1] - t[1]) <= n &&
                            Math.abs(e[2] - t[2]) <= n &&
                            Math.abs(e[3] - t[3]) <= n &&
                            Math.abs(e[4] - t[4]) <= n &&
                            Math.abs(e[5] - t[5]) <= n &&
                            Math.abs(e[6] - t[6]) <= n &&
                            Math.abs(e[7] - t[7]) <= n &&
                            Math.abs(e[8] - t[8]) <= n)
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
                (s.equalsArray = function(e, t, n) {
                    return (
                        e[0] === t[n] &&
                        e[1] === t[n + 1] &&
                        e[2] === t[n + 2] &&
                        e[3] === t[n + 3] &&
                        e[4] === t[n + 4] &&
                        e[5] === t[n + 5] &&
                        e[6] === t[n + 6] &&
                        e[7] === t[n + 7] &&
                        e[8] === t[n + 8]
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
        ], function(e, t, n, r, i, a) {
            "use strict";
            function o(e, n, r, i) {
                (this.x = t(e, 0)), (this.y = t(n, 0)), (this.z = t(r, 0)), (this.w = t(i, 0));
            }
            (o.fromElements = function(e, t, r, i, a) {
                return n(a) ? ((a.x = e), (a.y = t), (a.z = r), (a.w = i), a) : new o(e, t, r, i);
            }),
                (o.fromColor = function(e, t) {
                    return n(t)
                        ? ((t.x = e.red), (t.y = e.green), (t.z = e.blue), (t.w = e.alpha), t)
                        : new o(e.red, e.green, e.blue, e.alpha);
                }),
                (o.clone = function(e, t) {
                    if (n(e))
                        return n(t)
                            ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), (t.w = e.w), t)
                            : new o(e.x, e.y, e.z, e.w);
                }),
                (o.packedLength = 4),
                (o.pack = function(e, n, r) {
                    return (
                        (r = t(r, 0)),
                        (n[r++] = e.x),
                        (n[r++] = e.y),
                        (n[r++] = e.z),
                        (n[r] = e.w),
                        n
                    );
                }),
                (o.unpack = function(e, r, i) {
                    return (
                        (r = t(r, 0)),
                        n(i) || (i = new o()),
                        (i.x = e[r++]),
                        (i.y = e[r++]),
                        (i.z = e[r++]),
                        (i.w = e[r]),
                        i
                    );
                }),
                (o.packArray = function(e, t) {
                    var r = e.length;
                    n(t) ? (t.length = 4 * r) : (t = new Array(4 * r));
                    for (var i = 0; i < r; ++i) o.pack(e[i], t, 4 * i);
                    return t;
                }),
                (o.unpackArray = function(e, t) {
                    var r = e.length;
                    n(t) ? (t.length = r / 4) : (t = new Array(r / 4));
                    for (var i = 0; i < r; i += 4) {
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
                (o.minimumByComponent = function(e, t, n) {
                    return (
                        (n.x = Math.min(e.x, t.x)),
                        (n.y = Math.min(e.y, t.y)),
                        (n.z = Math.min(e.z, t.z)),
                        (n.w = Math.min(e.w, t.w)),
                        n
                    );
                }),
                (o.maximumByComponent = function(e, t, n) {
                    return (
                        (n.x = Math.max(e.x, t.x)),
                        (n.y = Math.max(e.y, t.y)),
                        (n.z = Math.max(e.z, t.z)),
                        (n.w = Math.max(e.w, t.w)),
                        n
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
                    var n = o.magnitude(e);
                    return (t.x = e.x / n), (t.y = e.y / n), (t.z = e.z / n), (t.w = e.w / n), t;
                }),
                (o.dot = function(e, t) {
                    return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w;
                }),
                (o.multiplyComponents = function(e, t, n) {
                    return (
                        (n.x = e.x * t.x),
                        (n.y = e.y * t.y),
                        (n.z = e.z * t.z),
                        (n.w = e.w * t.w),
                        n
                    );
                }),
                (o.divideComponents = function(e, t, n) {
                    return (
                        (n.x = e.x / t.x),
                        (n.y = e.y / t.y),
                        (n.z = e.z / t.z),
                        (n.w = e.w / t.w),
                        n
                    );
                }),
                (o.add = function(e, t, n) {
                    return (
                        (n.x = e.x + t.x),
                        (n.y = e.y + t.y),
                        (n.z = e.z + t.z),
                        (n.w = e.w + t.w),
                        n
                    );
                }),
                (o.subtract = function(e, t, n) {
                    return (
                        (n.x = e.x - t.x),
                        (n.y = e.y - t.y),
                        (n.z = e.z - t.z),
                        (n.w = e.w - t.w),
                        n
                    );
                }),
                (o.multiplyByScalar = function(e, t, n) {
                    return (n.x = e.x * t), (n.y = e.y * t), (n.z = e.z * t), (n.w = e.w * t), n;
                }),
                (o.divideByScalar = function(e, t, n) {
                    return (n.x = e.x / t), (n.y = e.y / t), (n.z = e.z / t), (n.w = e.w / t), n;
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
            o.lerp = function(e, t, n, r) {
                return (
                    o.multiplyByScalar(t, n, s),
                    (r = o.multiplyByScalar(e, 1 - n, r)),
                    o.add(s, r, r)
                );
            };
            var c = new o();
            (o.mostOrthogonalAxis = function(e, t) {
                var n = o.normalize(e, c);
                return (
                    o.abs(n, n),
                    (t =
                        n.x <= n.y
                            ? n.x <= n.z
                                ? n.x <= n.w
                                    ? o.clone(o.UNIT_X, t)
                                    : o.clone(o.UNIT_W, t)
                                : n.z <= n.w
                                ? o.clone(o.UNIT_Z, t)
                                : o.clone(o.UNIT_W, t)
                            : n.y <= n.z
                            ? n.y <= n.w
                                ? o.clone(o.UNIT_Y, t)
                                : o.clone(o.UNIT_W, t)
                            : n.z <= n.w
                            ? o.clone(o.UNIT_Z, t)
                            : o.clone(o.UNIT_W, t))
                );
            }),
                (o.equals = function(e, t) {
                    return (
                        e === t ||
                        (n(e) && n(t) && e.x === t.x && e.y === t.y && e.z === t.z && e.w === t.w)
                    );
                }),
                (o.equalsArray = function(e, t, n) {
                    return e.x === t[n] && e.y === t[n + 1] && e.z === t[n + 2] && e.w === t[n + 3];
                }),
                (o.equalsEpsilon = function(e, t, r, i) {
                    return (
                        e === t ||
                        (n(e) &&
                            n(t) &&
                            a.equalsEpsilon(e.x, t.x, r, i) &&
                            a.equalsEpsilon(e.y, t.y, r, i) &&
                            a.equalsEpsilon(e.z, t.z, r, i) &&
                            a.equalsEpsilon(e.w, t.w, r, i))
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
                (o.prototype.equalsEpsilon = function(e, t, n) {
                    return o.equalsEpsilon(this, e, t, n);
                }),
                (o.prototype.toString = function() {
                    return "(" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + ")";
                });
            var l = new Float32Array(1);
            return (
                (o.packFloat = function(e, t) {
                    if ((n(t) || (t = new o()), (l[0] = e), 0 === (e = l[0])))
                        return o.clone(o.ZERO, t);
                    var r,
                        i = e < 0 ? 1 : 0;
                    isFinite(e)
                        ? ((e = Math.abs(e)),
                          (r = Math.floor(a.logBase(e, 10)) + 1),
                          (e /= Math.pow(10, r)))
                        : ((e = 0.1), (r = 38));
                    var u = 256 * e;
                    return (
                        (t.x = Math.floor(u)),
                        (u = 256 * (u - t.x)),
                        (t.y = Math.floor(u)),
                        (u = 256 * (u - t.y)),
                        (t.z = Math.floor(u)),
                        (t.w = 2 * (r + 38) + i),
                        t
                    );
                }),
                (o.unpackFloat = function(e) {
                    var t = e.w / 2,
                        n = Math.floor(t),
                        r = 2 * (t - n);
                    if (((n -= 38), (r = 2 * r - 1), (r = -r), n >= 38))
                        return r < 0 ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
                    var i = r * e.x * (1 / 256);
                    return (
                        (i += r * e.y * (1 / 65536)),
                        (i += r * e.z * (1 / 16777216)) * Math.pow(10, n)
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
        ], function(e, t, n, r, i, a, o, u, s, c) {
            "use strict";
            function l(e, t, n, i, a, o, u, s, c, l, f, h, d, p, E, m) {
                (this[0] = r(e, 0)),
                    (this[1] = r(a, 0)),
                    (this[2] = r(c, 0)),
                    (this[3] = r(d, 0)),
                    (this[4] = r(t, 0)),
                    (this[5] = r(o, 0)),
                    (this[6] = r(l, 0)),
                    (this[7] = r(p, 0)),
                    (this[8] = r(n, 0)),
                    (this[9] = r(u, 0)),
                    (this[10] = r(f, 0)),
                    (this[11] = r(E, 0)),
                    (this[12] = r(i, 0)),
                    (this[13] = r(s, 0)),
                    (this[14] = r(h, 0)),
                    (this[15] = r(m, 0));
            }
            (l.packedLength = 16),
                (l.pack = function(e, t, n) {
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
                        (t[n++] = e[9]),
                        (t[n++] = e[10]),
                        (t[n++] = e[11]),
                        (t[n++] = e[12]),
                        (t[n++] = e[13]),
                        (t[n++] = e[14]),
                        (t[n] = e[15]),
                        t
                    );
                }),
                (l.unpack = function(e, t, n) {
                    return (
                        (t = r(t, 0)),
                        i(n) || (n = new l()),
                        (n[0] = e[t++]),
                        (n[1] = e[t++]),
                        (n[2] = e[t++]),
                        (n[3] = e[t++]),
                        (n[4] = e[t++]),
                        (n[5] = e[t++]),
                        (n[6] = e[t++]),
                        (n[7] = e[t++]),
                        (n[8] = e[t++]),
                        (n[9] = e[t++]),
                        (n[10] = e[t++]),
                        (n[11] = e[t++]),
                        (n[12] = e[t++]),
                        (n[13] = e[t++]),
                        (n[14] = e[t++]),
                        (n[15] = e[t]),
                        n
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
                (l.fromRotationTranslation = function(t, n, a) {
                    return (
                        (n = r(n, e.ZERO)),
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
                              (a[12] = n.x),
                              (a[13] = n.y),
                              (a[14] = n.z),
                              (a[15] = 1),
                              a)
                            : new l(
                                  t[0],
                                  t[3],
                                  t[6],
                                  n.x,
                                  t[1],
                                  t[4],
                                  t[7],
                                  n.y,
                                  t[2],
                                  t[5],
                                  t[8],
                                  n.z,
                                  0,
                                  0,
                                  0,
                                  1
                              )
                    );
                }),
                (l.fromTranslationQuaternionRotationScale = function(e, t, n, r) {
                    i(r) || (r = new l());
                    var a = n.x,
                        o = n.y,
                        u = n.z,
                        s = t.x * t.x,
                        c = t.x * t.y,
                        f = t.x * t.z,
                        h = t.x * t.w,
                        d = t.y * t.y,
                        p = t.y * t.z,
                        E = t.y * t.w,
                        m = t.z * t.z,
                        y = t.z * t.w,
                        _ = t.w * t.w,
                        T = s - d - m + _,
                        R = 2 * (c - y),
                        v = 2 * (f + E),
                        A = 2 * (c + y),
                        g = -s + d - m + _,
                        S = 2 * (p - h),
                        O = 2 * (f - E),
                        M = 2 * (p + h),
                        I = -s - d + m + _;
                    return (
                        (r[0] = T * a),
                        (r[1] = A * a),
                        (r[2] = O * a),
                        (r[3] = 0),
                        (r[4] = R * o),
                        (r[5] = g * o),
                        (r[6] = M * o),
                        (r[7] = 0),
                        (r[8] = v * u),
                        (r[9] = S * u),
                        (r[10] = I * u),
                        (r[11] = 0),
                        (r[12] = e.x),
                        (r[13] = e.y),
                        (r[14] = e.z),
                        (r[15] = 1),
                        r
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
            (l.fromCamera = function(t, n) {
                var r = t.position,
                    a = t.direction,
                    o = t.up;
                e.normalize(a, f),
                    e.normalize(e.cross(f, o, h), h),
                    e.normalize(e.cross(h, f, d), d);
                var u = h.x,
                    s = h.y,
                    c = h.z,
                    p = f.x,
                    E = f.y,
                    m = f.z,
                    y = d.x,
                    _ = d.y,
                    T = d.z,
                    R = r.x,
                    v = r.y,
                    A = r.z,
                    g = u * -R + s * -v + c * -A,
                    S = y * -R + _ * -v + T * -A,
                    O = p * R + E * v + m * A;
                return i(n)
                    ? ((n[0] = u),
                      (n[1] = y),
                      (n[2] = -p),
                      (n[3] = 0),
                      (n[4] = s),
                      (n[5] = _),
                      (n[6] = -E),
                      (n[7] = 0),
                      (n[8] = c),
                      (n[9] = T),
                      (n[10] = -m),
                      (n[11] = 0),
                      (n[12] = g),
                      (n[13] = S),
                      (n[14] = O),
                      (n[15] = 1),
                      n)
                    : new l(u, s, c, g, y, _, T, S, -p, -E, -m, O, 0, 0, 0, 1);
            }),
                (l.computePerspectiveFieldOfView = function(e, t, n, r, i) {
                    var a = Math.tan(0.5 * e),
                        o = 1 / a,
                        u = o / t,
                        s = (r + n) / (n - r),
                        c = (2 * r * n) / (n - r);
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
                (l.computeOrthographicOffCenter = function(e, t, n, r, i, a, o) {
                    var u = 1 / (t - e),
                        s = 1 / (r - n),
                        c = 1 / (a - i),
                        l = -(t + e) * u,
                        f = -(r + n) * s,
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
                (l.computePerspectiveOffCenter = function(e, t, n, r, i, a, o) {
                    var u = (2 * i) / (t - e),
                        s = (2 * i) / (r - n),
                        c = (t + e) / (t - e),
                        l = (r + n) / (r - n),
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
                (l.computeInfinitePerspectiveOffCenter = function(e, t, n, r, i, a) {
                    var o = (2 * i) / (t - e),
                        u = (2 * i) / (r - n),
                        s = (t + e) / (t - e),
                        c = (r + n) / (r - n),
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
                (l.computeViewportTransformation = function(e, t, n, i) {
                    e = r(e, r.EMPTY_OBJECT);
                    var a = r(e.x, 0),
                        o = r(e.y, 0),
                        u = r(e.width, 0),
                        s = r(e.height, 0);
                    (t = r(t, 0)), (n = r(n, 1));
                    var c = 0.5 * u,
                        l = 0.5 * s,
                        f = 0.5 * (n - t),
                        h = c,
                        d = l,
                        p = f,
                        E = a + c,
                        m = o + l,
                        y = t + f;
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
                        (i[12] = E),
                        (i[13] = m),
                        (i[14] = y),
                        (i[15] = 1),
                        i
                    );
                }),
                (l.computeView = function(t, n, r, i, a) {
                    return (
                        (a[0] = i.x),
                        (a[1] = r.x),
                        (a[2] = -n.x),
                        (a[3] = 0),
                        (a[4] = i.y),
                        (a[5] = r.y),
                        (a[6] = -n.y),
                        (a[7] = 0),
                        (a[8] = i.z),
                        (a[9] = r.z),
                        (a[10] = -n.z),
                        (a[11] = 0),
                        (a[12] = -e.dot(i, t)),
                        (a[13] = -e.dot(r, t)),
                        (a[14] = e.dot(n, t)),
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
                (l.getColumn = function(e, t, n) {
                    var r = 4 * t,
                        i = e[r],
                        a = e[r + 1],
                        o = e[r + 2],
                        u = e[r + 3];
                    return (n.x = i), (n.y = a), (n.z = o), (n.w = u), n;
                }),
                (l.setColumn = function(e, t, n, r) {
                    r = l.clone(e, r);
                    var i = 4 * t;
                    return (r[i] = n.x), (r[i + 1] = n.y), (r[i + 2] = n.z), (r[i + 3] = n.w), r;
                }),
                (l.setTranslation = function(e, t, n) {
                    return (
                        (n[0] = e[0]),
                        (n[1] = e[1]),
                        (n[2] = e[2]),
                        (n[3] = e[3]),
                        (n[4] = e[4]),
                        (n[5] = e[5]),
                        (n[6] = e[6]),
                        (n[7] = e[7]),
                        (n[8] = e[8]),
                        (n[9] = e[9]),
                        (n[10] = e[10]),
                        (n[11] = e[11]),
                        (n[12] = t.x),
                        (n[13] = t.y),
                        (n[14] = t.z),
                        (n[15] = e[15]),
                        n
                    );
                });
            var p = new e();
            (l.setScale = function(t, n, r) {
                var i = l.getScale(t, p),
                    a = e.divideComponents(n, i, p);
                return l.multiplyByScale(t, a, r);
            }),
                (l.getRow = function(e, t, n) {
                    var r = e[t],
                        i = e[t + 4],
                        a = e[t + 8],
                        o = e[t + 12];
                    return (n.x = r), (n.y = i), (n.z = a), (n.w = o), n;
                }),
                (l.setRow = function(e, t, n, r) {
                    return (
                        (r = l.clone(e, r)),
                        (r[t] = n.x),
                        (r[t + 4] = n.y),
                        (r[t + 8] = n.z),
                        (r[t + 12] = n.w),
                        r
                    );
                });
            var E = new e();
            l.getScale = function(t, n) {
                return (
                    (n.x = e.magnitude(e.fromElements(t[0], t[1], t[2], E))),
                    (n.y = e.magnitude(e.fromElements(t[4], t[5], t[6], E))),
                    (n.z = e.magnitude(e.fromElements(t[8], t[9], t[10], E))),
                    n
                );
            };
            var m = new e();
            (l.getMaximumScale = function(t) {
                return l.getScale(t, m), e.maximumComponent(m);
            }),
                (l.multiply = function(e, t, n) {
                    var r = e[0],
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
                        E = e[12],
                        m = e[13],
                        y = e[14],
                        _ = e[15],
                        T = t[0],
                        R = t[1],
                        v = t[2],
                        A = t[3],
                        g = t[4],
                        S = t[5],
                        O = t[6],
                        M = t[7],
                        I = t[8],
                        w = t[9],
                        N = t[10],
                        x = t[11],
                        C = t[12],
                        P = t[13],
                        U = t[14],
                        D = t[15],
                        L = r * T + u * R + f * v + E * A,
                        F = i * T + s * R + h * v + m * A,
                        b = a * T + c * R + d * v + y * A,
                        B = o * T + l * R + p * v + _ * A,
                        q = r * g + u * S + f * O + E * M,
                        z = i * g + s * S + h * O + m * M,
                        G = a * g + c * S + d * O + y * M,
                        V = o * g + l * S + p * O + _ * M,
                        W = r * I + u * w + f * N + E * x,
                        X = i * I + s * w + h * N + m * x,
                        H = a * I + c * w + d * N + y * x,
                        Y = o * I + l * w + p * N + _ * x,
                        k = r * C + u * P + f * U + E * D,
                        j = i * C + s * P + h * U + m * D,
                        Z = a * C + c * P + d * U + y * D,
                        K = o * C + l * P + p * U + _ * D;
                    return (
                        (n[0] = L),
                        (n[1] = F),
                        (n[2] = b),
                        (n[3] = B),
                        (n[4] = q),
                        (n[5] = z),
                        (n[6] = G),
                        (n[7] = V),
                        (n[8] = W),
                        (n[9] = X),
                        (n[10] = H),
                        (n[11] = Y),
                        (n[12] = k),
                        (n[13] = j),
                        (n[14] = Z),
                        (n[15] = K),
                        n
                    );
                }),
                (l.add = function(e, t, n) {
                    return (
                        (n[0] = e[0] + t[0]),
                        (n[1] = e[1] + t[1]),
                        (n[2] = e[2] + t[2]),
                        (n[3] = e[3] + t[3]),
                        (n[4] = e[4] + t[4]),
                        (n[5] = e[5] + t[5]),
                        (n[6] = e[6] + t[6]),
                        (n[7] = e[7] + t[7]),
                        (n[8] = e[8] + t[8]),
                        (n[9] = e[9] + t[9]),
                        (n[10] = e[10] + t[10]),
                        (n[11] = e[11] + t[11]),
                        (n[12] = e[12] + t[12]),
                        (n[13] = e[13] + t[13]),
                        (n[14] = e[14] + t[14]),
                        (n[15] = e[15] + t[15]),
                        n
                    );
                }),
                (l.subtract = function(e, t, n) {
                    return (
                        (n[0] = e[0] - t[0]),
                        (n[1] = e[1] - t[1]),
                        (n[2] = e[2] - t[2]),
                        (n[3] = e[3] - t[3]),
                        (n[4] = e[4] - t[4]),
                        (n[5] = e[5] - t[5]),
                        (n[6] = e[6] - t[6]),
                        (n[7] = e[7] - t[7]),
                        (n[8] = e[8] - t[8]),
                        (n[9] = e[9] - t[9]),
                        (n[10] = e[10] - t[10]),
                        (n[11] = e[11] - t[11]),
                        (n[12] = e[12] - t[12]),
                        (n[13] = e[13] - t[13]),
                        (n[14] = e[14] - t[14]),
                        (n[15] = e[15] - t[15]),
                        n
                    );
                }),
                (l.multiplyTransformation = function(e, t, n) {
                    var r = e[0],
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
                        E = t[0],
                        m = t[1],
                        y = t[2],
                        _ = t[4],
                        T = t[5],
                        R = t[6],
                        v = t[8],
                        A = t[9],
                        g = t[10],
                        S = t[12],
                        O = t[13],
                        M = t[14],
                        I = r * E + o * m + c * y,
                        w = i * E + u * m + l * y,
                        N = a * E + s * m + f * y,
                        x = r * _ + o * T + c * R,
                        C = i * _ + u * T + l * R,
                        P = a * _ + s * T + f * R,
                        U = r * v + o * A + c * g,
                        D = i * v + u * A + l * g,
                        L = a * v + s * A + f * g,
                        F = r * S + o * O + c * M + h,
                        b = i * S + u * O + l * M + d,
                        B = a * S + s * O + f * M + p;
                    return (
                        (n[0] = I),
                        (n[1] = w),
                        (n[2] = N),
                        (n[3] = 0),
                        (n[4] = x),
                        (n[5] = C),
                        (n[6] = P),
                        (n[7] = 0),
                        (n[8] = U),
                        (n[9] = D),
                        (n[10] = L),
                        (n[11] = 0),
                        (n[12] = F),
                        (n[13] = b),
                        (n[14] = B),
                        (n[15] = 1),
                        n
                    );
                }),
                (l.multiplyByMatrix3 = function(e, t, n) {
                    var r = e[0],
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
                        E = t[3],
                        m = t[4],
                        y = t[5],
                        _ = t[6],
                        T = t[7],
                        R = t[8],
                        v = r * h + o * d + c * p,
                        A = i * h + u * d + l * p,
                        g = a * h + s * d + f * p,
                        S = r * E + o * m + c * y,
                        O = i * E + u * m + l * y,
                        M = a * E + s * m + f * y,
                        I = r * _ + o * T + c * R,
                        w = i * _ + u * T + l * R,
                        N = a * _ + s * T + f * R;
                    return (
                        (n[0] = v),
                        (n[1] = A),
                        (n[2] = g),
                        (n[3] = 0),
                        (n[4] = S),
                        (n[5] = O),
                        (n[6] = M),
                        (n[7] = 0),
                        (n[8] = I),
                        (n[9] = w),
                        (n[10] = N),
                        (n[11] = 0),
                        (n[12] = e[12]),
                        (n[13] = e[13]),
                        (n[14] = e[14]),
                        (n[15] = e[15]),
                        n
                    );
                }),
                (l.multiplyByTranslation = function(e, t, n) {
                    var r = t.x,
                        i = t.y,
                        a = t.z,
                        o = r * e[0] + i * e[4] + a * e[8] + e[12],
                        u = r * e[1] + i * e[5] + a * e[9] + e[13],
                        s = r * e[2] + i * e[6] + a * e[10] + e[14];
                    return (
                        (n[0] = e[0]),
                        (n[1] = e[1]),
                        (n[2] = e[2]),
                        (n[3] = e[3]),
                        (n[4] = e[4]),
                        (n[5] = e[5]),
                        (n[6] = e[6]),
                        (n[7] = e[7]),
                        (n[8] = e[8]),
                        (n[9] = e[9]),
                        (n[10] = e[10]),
                        (n[11] = e[11]),
                        (n[12] = o),
                        (n[13] = u),
                        (n[14] = s),
                        (n[15] = e[15]),
                        n
                    );
                });
            var y = new e();
            (l.multiplyByUniformScale = function(e, t, n) {
                return (y.x = t), (y.y = t), (y.z = t), l.multiplyByScale(e, y, n);
            }),
                (l.multiplyByScale = function(e, t, n) {
                    var r = t.x,
                        i = t.y,
                        a = t.z;
                    return 1 === r && 1 === i && 1 === a
                        ? l.clone(e, n)
                        : ((n[0] = r * e[0]),
                          (n[1] = r * e[1]),
                          (n[2] = r * e[2]),
                          (n[3] = 0),
                          (n[4] = i * e[4]),
                          (n[5] = i * e[5]),
                          (n[6] = i * e[6]),
                          (n[7] = 0),
                          (n[8] = a * e[8]),
                          (n[9] = a * e[9]),
                          (n[10] = a * e[10]),
                          (n[11] = 0),
                          (n[12] = e[12]),
                          (n[13] = e[13]),
                          (n[14] = e[14]),
                          (n[15] = 1),
                          n);
                }),
                (l.multiplyByVector = function(e, t, n) {
                    var r = t.x,
                        i = t.y,
                        a = t.z,
                        o = t.w,
                        u = e[0] * r + e[4] * i + e[8] * a + e[12] * o,
                        s = e[1] * r + e[5] * i + e[9] * a + e[13] * o,
                        c = e[2] * r + e[6] * i + e[10] * a + e[14] * o,
                        l = e[3] * r + e[7] * i + e[11] * a + e[15] * o;
                    return (n.x = u), (n.y = s), (n.z = c), (n.w = l), n;
                }),
                (l.multiplyByPointAsVector = function(e, t, n) {
                    var r = t.x,
                        i = t.y,
                        a = t.z,
                        o = e[0] * r + e[4] * i + e[8] * a,
                        u = e[1] * r + e[5] * i + e[9] * a,
                        s = e[2] * r + e[6] * i + e[10] * a;
                    return (n.x = o), (n.y = u), (n.z = s), n;
                }),
                (l.multiplyByPoint = function(e, t, n) {
                    var r = t.x,
                        i = t.y,
                        a = t.z,
                        o = e[0] * r + e[4] * i + e[8] * a + e[12],
                        u = e[1] * r + e[5] * i + e[9] * a + e[13],
                        s = e[2] * r + e[6] * i + e[10] * a + e[14];
                    return (n.x = o), (n.y = u), (n.z = s), n;
                }),
                (l.multiplyByScalar = function(e, t, n) {
                    return (
                        (n[0] = e[0] * t),
                        (n[1] = e[1] * t),
                        (n[2] = e[2] * t),
                        (n[3] = e[3] * t),
                        (n[4] = e[4] * t),
                        (n[5] = e[5] * t),
                        (n[6] = e[6] * t),
                        (n[7] = e[7] * t),
                        (n[8] = e[8] * t),
                        (n[9] = e[9] * t),
                        (n[10] = e[10] * t),
                        (n[11] = e[11] * t),
                        (n[12] = e[12] * t),
                        (n[13] = e[13] * t),
                        (n[14] = e[14] * t),
                        (n[15] = e[15] * t),
                        n
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
                    var n = e[1],
                        r = e[2],
                        i = e[3],
                        a = e[6],
                        o = e[7],
                        u = e[11];
                    return (
                        (t[0] = e[0]),
                        (t[1] = e[4]),
                        (t[2] = e[8]),
                        (t[3] = e[12]),
                        (t[4] = n),
                        (t[5] = e[5]),
                        (t[6] = e[9]),
                        (t[7] = e[13]),
                        (t[8] = r),
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
                (l.equalsEpsilon = function(e, t, n) {
                    return (
                        e === t ||
                        (i(e) &&
                            i(t) &&
                            Math.abs(e[0] - t[0]) <= n &&
                            Math.abs(e[1] - t[1]) <= n &&
                            Math.abs(e[2] - t[2]) <= n &&
                            Math.abs(e[3] - t[3]) <= n &&
                            Math.abs(e[4] - t[4]) <= n &&
                            Math.abs(e[5] - t[5]) <= n &&
                            Math.abs(e[6] - t[6]) <= n &&
                            Math.abs(e[7] - t[7]) <= n &&
                            Math.abs(e[8] - t[8]) <= n &&
                            Math.abs(e[9] - t[9]) <= n &&
                            Math.abs(e[10] - t[10]) <= n &&
                            Math.abs(e[11] - t[11]) <= n &&
                            Math.abs(e[12] - t[12]) <= n &&
                            Math.abs(e[13] - t[13]) <= n &&
                            Math.abs(e[14] - t[14]) <= n &&
                            Math.abs(e[15] - t[15]) <= n)
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
                T = new s(),
                R = new t(),
                v = new t(0, 0, 0, 1);
            return (
                (l.inverse = function(e, n) {
                    var r = e[0],
                        i = e[4],
                        a = e[8],
                        o = e[12],
                        f = e[1],
                        h = e[5],
                        d = e[9],
                        p = e[13],
                        E = e[2],
                        m = e[6],
                        y = e[10],
                        A = e[14],
                        g = e[3],
                        S = e[7],
                        O = e[11],
                        M = e[15],
                        I = y * M,
                        w = A * O,
                        N = m * M,
                        x = A * S,
                        C = m * O,
                        P = y * S,
                        U = E * M,
                        D = A * g,
                        L = E * O,
                        F = y * g,
                        b = E * S,
                        B = m * g,
                        q = I * h + x * d + C * p - (w * h + N * d + P * p),
                        z = w * f + U * d + F * p - (I * f + D * d + L * p),
                        G = N * f + D * h + b * p - (x * f + U * h + B * p),
                        V = P * f + L * h + B * d - (C * f + F * h + b * d),
                        W = w * i + N * a + P * o - (I * i + x * a + C * o),
                        X = I * r + D * a + L * o - (w * r + U * a + F * o),
                        H = x * r + U * i + B * o - (N * r + D * i + b * o),
                        Y = C * r + F * i + b * a - (P * r + L * i + B * a);
                    (I = a * p),
                        (w = o * d),
                        (N = i * p),
                        (x = o * h),
                        (C = i * d),
                        (P = a * h),
                        (U = r * p),
                        (D = o * f),
                        (L = r * d),
                        (F = a * f),
                        (b = r * h),
                        (B = i * f);
                    var k = I * S + x * O + C * M - (w * S + N * O + P * M),
                        j = w * g + U * O + F * M - (I * g + D * O + L * M),
                        Z = N * g + D * S + b * M - (x * g + U * S + B * M),
                        K = P * g + L * S + B * O - (C * g + F * S + b * O),
                        J = N * y + P * A + w * m - (C * A + I * m + x * y),
                        Q = L * A + I * E + D * y - (U * y + F * A + w * E),
                        $ = U * m + B * A + x * E - (b * A + N * E + D * m),
                        ee = b * y + C * E + F * m - (L * m + B * y + P * E),
                        te = r * q + i * z + a * G + o * V;
                    if (Math.abs(te) < u.EPSILON21) {
                        if (
                            s.equalsEpsilon(l.getRotation(e, _), T, u.EPSILON7) &&
                            t.equals(l.getRow(e, 3, R), v)
                        )
                            return (
                                (n[0] = 0),
                                (n[1] = 0),
                                (n[2] = 0),
                                (n[3] = 0),
                                (n[4] = 0),
                                (n[5] = 0),
                                (n[6] = 0),
                                (n[7] = 0),
                                (n[8] = 0),
                                (n[9] = 0),
                                (n[10] = 0),
                                (n[11] = 0),
                                (n[12] = -e[12]),
                                (n[13] = -e[13]),
                                (n[14] = -e[14]),
                                (n[15] = 1),
                                n
                            );
                        throw new c("matrix is not invertible because its determinate is zero.");
                    }
                    return (
                        (te = 1 / te),
                        (n[0] = q * te),
                        (n[1] = z * te),
                        (n[2] = G * te),
                        (n[3] = V * te),
                        (n[4] = W * te),
                        (n[5] = X * te),
                        (n[6] = H * te),
                        (n[7] = Y * te),
                        (n[8] = k * te),
                        (n[9] = j * te),
                        (n[10] = Z * te),
                        (n[11] = K * te),
                        (n[12] = J * te),
                        (n[13] = Q * te),
                        (n[14] = $ * te),
                        (n[15] = ee * te),
                        n
                    );
                }),
                (l.inverseTransformation = function(e, t) {
                    var n = e[0],
                        r = e[1],
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
                        p = -n * f - r * h - i * d,
                        E = -a * f - o * h - u * d,
                        m = -s * f - c * h - l * d;
                    return (
                        (t[0] = n),
                        (t[1] = a),
                        (t[2] = s),
                        (t[3] = 0),
                        (t[4] = r),
                        (t[5] = o),
                        (t[6] = c),
                        (t[7] = 0),
                        (t[8] = i),
                        (t[9] = u),
                        (t[10] = l),
                        (t[11] = 0),
                        (t[12] = p),
                        (t[13] = E),
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
                (l.equalsArray = function(e, t, n) {
                    return (
                        e[0] === t[n] &&
                        e[1] === t[n + 1] &&
                        e[2] === t[n + 2] &&
                        e[3] === t[n + 3] &&
                        e[4] === t[n + 4] &&
                        e[5] === t[n + 5] &&
                        e[6] === t[n + 6] &&
                        e[7] === t[n + 7] &&
                        e[8] === t[n + 8] &&
                        e[9] === t[n + 9] &&
                        e[10] === t[n + 10] &&
                        e[11] === t[n + 11] &&
                        e[12] === t[n + 12] &&
                        e[13] === t[n + 13] &&
                        e[14] === t[n + 14] &&
                        e[15] === t[n + 15]
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
        ], function(e, t, n, r, i, a, o, u, s, c, l, f, h) {
            "use strict";
            function d(t, n) {
                (this.center = e.clone(r(t, e.ZERO))), (this.radius = r(n, 0));
            }
            var p = new e(),
                E = new e(),
                m = new e(),
                y = new e(),
                _ = new e(),
                T = new e(),
                R = new e(),
                v = new e(),
                A = new e(),
                g = new e(),
                S = new e(),
                O = new e(),
                M = (4 / 3) * c.PI;
            d.fromPoints = function(t, n) {
                if ((i(n) || (n = new d()), !i(t) || 0 === t.length))
                    return (n.center = e.clone(e.ZERO, n.center)), (n.radius = 0), n;
                var r,
                    a = e.clone(t[0], R),
                    o = e.clone(a, p),
                    u = e.clone(a, E),
                    s = e.clone(a, m),
                    c = e.clone(a, y),
                    l = e.clone(a, _),
                    f = e.clone(a, T),
                    h = t.length;
                for (r = 1; r < h; r++) {
                    e.clone(t[r], a);
                    var M = a.x,
                        I = a.y,
                        w = a.z;
                    M < o.x && e.clone(a, o),
                        M > c.x && e.clone(a, c),
                        I < u.y && e.clone(a, u),
                        I > l.y && e.clone(a, l),
                        w < s.z && e.clone(a, s),
                        w > f.z && e.clone(a, f);
                }
                var N = e.magnitudeSquared(e.subtract(c, o, v)),
                    x = e.magnitudeSquared(e.subtract(l, u, v)),
                    C = e.magnitudeSquared(e.subtract(f, s, v)),
                    P = o,
                    U = c,
                    D = N;
                x > D && ((D = x), (P = u), (U = l)), C > D && ((D = C), (P = s), (U = f));
                var L = A;
                (L.x = 0.5 * (P.x + U.x)), (L.y = 0.5 * (P.y + U.y)), (L.z = 0.5 * (P.z + U.z));
                var F = e.magnitudeSquared(e.subtract(U, L, v)),
                    b = Math.sqrt(F),
                    B = g;
                (B.x = o.x), (B.y = u.y), (B.z = s.z);
                var q = S;
                (q.x = c.x), (q.y = l.y), (q.z = f.z);
                var z = e.midpoint(B, q, O),
                    G = 0;
                for (r = 0; r < h; r++) {
                    e.clone(t[r], a);
                    var V = e.magnitude(e.subtract(a, z, v));
                    V > G && (G = V);
                    var W = e.magnitudeSquared(e.subtract(a, L, v));
                    if (W > F) {
                        var X = Math.sqrt(W);
                        (b = 0.5 * (b + X)), (F = b * b);
                        var H = X - b;
                        (L.x = (b * L.x + H * a.x) / X),
                            (L.y = (b * L.y + H * a.y) / X),
                            (L.z = (b * L.z + H * a.z) / X);
                    }
                }
                return (
                    b < G
                        ? (e.clone(L, n.center), (n.radius = b))
                        : (e.clone(z, n.center), (n.radius = G)),
                    n
                );
            };
            var I = new o(),
                w = new e(),
                N = new e(),
                x = new t(),
                C = new t();
            (d.fromRectangle2D = function(e, t, n) {
                return d.fromRectangleWithHeights2D(e, t, 0, 0, n);
            }),
                (d.fromRectangleWithHeights2D = function(t, n, a, o, u) {
                    if ((i(u) || (u = new d()), !i(t)))
                        return (u.center = e.clone(e.ZERO, u.center)), (u.radius = 0), u;
                    (n = r(n, I)),
                        h.southwest(t, x),
                        (x.height = a),
                        h.northeast(t, C),
                        (C.height = o);
                    var s = n.project(x, w),
                        c = n.project(C, N),
                        l = c.x - s.x,
                        f = c.y - s.y,
                        p = c.z - s.z;
                    u.radius = 0.5 * Math.sqrt(l * l + f * f + p * p);
                    var E = u.center;
                    return (E.x = s.x + 0.5 * l), (E.y = s.y + 0.5 * f), (E.z = s.z + 0.5 * p), u;
                });
            var P = [];
            (d.fromRectangle3D = function(t, n, o, u) {
                if (((n = r(n, a.WGS84)), (o = r(o, 0)), i(u) || (u = new d()), !i(t)))
                    return (u.center = e.clone(e.ZERO, u.center)), (u.radius = 0), u;
                var s = h.subsample(t, n, o, P);
                return d.fromPoints(s, u);
            }),
                (d.fromVertices = function(t, n, a, o) {
                    if ((i(o) || (o = new d()), !i(t) || 0 === t.length))
                        return (o.center = e.clone(e.ZERO, o.center)), (o.radius = 0), o;
                    (n = r(n, e.ZERO)), (a = r(a, 3));
                    var u = R;
                    (u.x = t[0] + n.x), (u.y = t[1] + n.y), (u.z = t[2] + n.z);
                    var s,
                        c = e.clone(u, p),
                        l = e.clone(u, E),
                        f = e.clone(u, m),
                        h = e.clone(u, y),
                        M = e.clone(u, _),
                        I = e.clone(u, T),
                        w = t.length;
                    for (s = 0; s < w; s += a) {
                        var N = t[s] + n.x,
                            x = t[s + 1] + n.y,
                            C = t[s + 2] + n.z;
                        (u.x = N),
                            (u.y = x),
                            (u.z = C),
                            N < c.x && e.clone(u, c),
                            N > h.x && e.clone(u, h),
                            x < l.y && e.clone(u, l),
                            x > M.y && e.clone(u, M),
                            C < f.z && e.clone(u, f),
                            C > I.z && e.clone(u, I);
                    }
                    var P = e.magnitudeSquared(e.subtract(h, c, v)),
                        U = e.magnitudeSquared(e.subtract(M, l, v)),
                        D = e.magnitudeSquared(e.subtract(I, f, v)),
                        L = c,
                        F = h,
                        b = P;
                    U > b && ((b = U), (L = l), (F = M)), D > b && ((b = D), (L = f), (F = I));
                    var B = A;
                    (B.x = 0.5 * (L.x + F.x)), (B.y = 0.5 * (L.y + F.y)), (B.z = 0.5 * (L.z + F.z));
                    var q = e.magnitudeSquared(e.subtract(F, B, v)),
                        z = Math.sqrt(q),
                        G = g;
                    (G.x = c.x), (G.y = l.y), (G.z = f.z);
                    var V = S;
                    (V.x = h.x), (V.y = M.y), (V.z = I.z);
                    var W = e.midpoint(G, V, O),
                        X = 0;
                    for (s = 0; s < w; s += a) {
                        (u.x = t[s] + n.x), (u.y = t[s + 1] + n.y), (u.z = t[s + 2] + n.z);
                        var H = e.magnitude(e.subtract(u, W, v));
                        H > X && (X = H);
                        var Y = e.magnitudeSquared(e.subtract(u, B, v));
                        if (Y > q) {
                            var k = Math.sqrt(Y);
                            (z = 0.5 * (z + k)), (q = z * z);
                            var j = k - z;
                            (B.x = (z * B.x + j * u.x) / k),
                                (B.y = (z * B.y + j * u.y) / k),
                                (B.z = (z * B.z + j * u.z) / k);
                        }
                    }
                    return (
                        z < X
                            ? (e.clone(B, o.center), (o.radius = z))
                            : (e.clone(W, o.center), (o.radius = X)),
                        o
                    );
                }),
                (d.fromEncodedCartesianVertices = function(t, n, r) {
                    if (
                        (i(r) || (r = new d()),
                        !i(t) || !i(n) || t.length !== n.length || 0 === t.length)
                    )
                        return (r.center = e.clone(e.ZERO, r.center)), (r.radius = 0), r;
                    var a = R;
                    (a.x = t[0] + n[0]), (a.y = t[1] + n[1]), (a.z = t[2] + n[2]);
                    var o,
                        u = e.clone(a, p),
                        s = e.clone(a, E),
                        c = e.clone(a, m),
                        l = e.clone(a, y),
                        f = e.clone(a, _),
                        h = e.clone(a, T),
                        M = t.length;
                    for (o = 0; o < M; o += 3) {
                        var I = t[o] + n[o],
                            w = t[o + 1] + n[o + 1],
                            N = t[o + 2] + n[o + 2];
                        (a.x = I),
                            (a.y = w),
                            (a.z = N),
                            I < u.x && e.clone(a, u),
                            I > l.x && e.clone(a, l),
                            w < s.y && e.clone(a, s),
                            w > f.y && e.clone(a, f),
                            N < c.z && e.clone(a, c),
                            N > h.z && e.clone(a, h);
                    }
                    var x = e.magnitudeSquared(e.subtract(l, u, v)),
                        C = e.magnitudeSquared(e.subtract(f, s, v)),
                        P = e.magnitudeSquared(e.subtract(h, c, v)),
                        U = u,
                        D = l,
                        L = x;
                    C > L && ((L = C), (U = s), (D = f)), P > L && ((L = P), (U = c), (D = h));
                    var F = A;
                    (F.x = 0.5 * (U.x + D.x)), (F.y = 0.5 * (U.y + D.y)), (F.z = 0.5 * (U.z + D.z));
                    var b = e.magnitudeSquared(e.subtract(D, F, v)),
                        B = Math.sqrt(b),
                        q = g;
                    (q.x = u.x), (q.y = s.y), (q.z = c.z);
                    var z = S;
                    (z.x = l.x), (z.y = f.y), (z.z = h.z);
                    var G = e.midpoint(q, z, O),
                        V = 0;
                    for (o = 0; o < M; o += 3) {
                        (a.x = t[o] + n[o]),
                            (a.y = t[o + 1] + n[o + 1]),
                            (a.z = t[o + 2] + n[o + 2]);
                        var W = e.magnitude(e.subtract(a, G, v));
                        W > V && (V = W);
                        var X = e.magnitudeSquared(e.subtract(a, F, v));
                        if (X > b) {
                            var H = Math.sqrt(X);
                            (B = 0.5 * (B + H)), (b = B * B);
                            var Y = H - B;
                            (F.x = (B * F.x + Y * a.x) / H),
                                (F.y = (B * F.y + Y * a.y) / H),
                                (F.z = (B * F.z + Y * a.z) / H);
                        }
                    }
                    return (
                        B < V
                            ? (e.clone(F, r.center), (r.radius = B))
                            : (e.clone(G, r.center), (r.radius = V)),
                        r
                    );
                }),
                (d.fromCornerPoints = function(t, n, r) {
                    i(r) || (r = new d());
                    var a = e.midpoint(t, n, r.center);
                    return (r.radius = e.distance(a, n)), r;
                }),
                (d.fromEllipsoid = function(t, n) {
                    return (
                        i(n) || (n = new d()),
                        e.clone(e.ZERO, n.center),
                        (n.radius = t.maximumRadius),
                        n
                    );
                });
            var U = new e();
            d.fromBoundingSpheres = function(t, n) {
                if ((i(n) || (n = new d()), !i(t) || 0 === t.length))
                    return (n.center = e.clone(e.ZERO, n.center)), (n.radius = 0), n;
                var r = t.length;
                if (1 === r) return d.clone(t[0], n);
                if (2 === r) return d.union(t[0], t[1], n);
                var a,
                    o = [];
                for (a = 0; a < r; a++) o.push(t[a].center);
                n = d.fromPoints(o, n);
                var u = n.center,
                    s = n.radius;
                for (a = 0; a < r; a++) {
                    var c = t[a];
                    s = Math.max(s, e.distance(u, c.center, U) + c.radius);
                }
                return (n.radius = s), n;
            };
            var D = new e(),
                L = new e(),
                F = new e();
            (d.fromOrientedBoundingBox = function(t, n) {
                i(n) || (n = new d());
                var r = t.halfAxes,
                    a = l.getColumn(r, 0, D),
                    o = l.getColumn(r, 1, L),
                    u = l.getColumn(r, 2, F);
                return (
                    e.add(a, o, a),
                    e.add(a, u, a),
                    (n.center = e.clone(t.center, n.center)),
                    (n.radius = e.magnitude(a)),
                    n
                );
            }),
                (d.clone = function(t, n) {
                    if (i(t))
                        return i(n)
                            ? ((n.center = e.clone(t.center, n.center)), (n.radius = t.radius), n)
                            : new d(t.center, t.radius);
                }),
                (d.packedLength = 4),
                (d.pack = function(e, t, n) {
                    n = r(n, 0);
                    var i = e.center;
                    return (t[n++] = i.x), (t[n++] = i.y), (t[n++] = i.z), (t[n] = e.radius), t;
                }),
                (d.unpack = function(e, t, n) {
                    (t = r(t, 0)), i(n) || (n = new d());
                    var a = n.center;
                    return (a.x = e[t++]), (a.y = e[t++]), (a.z = e[t++]), (n.radius = e[t]), n;
                });
            var b = new e(),
                B = new e();
            d.union = function(t, n, r) {
                i(r) || (r = new d());
                var a = t.center,
                    o = t.radius,
                    u = n.center,
                    s = n.radius,
                    c = e.subtract(u, a, b),
                    l = e.magnitude(c);
                if (o >= l + s) return t.clone(r), r;
                if (s >= l + o) return n.clone(r), r;
                var f = 0.5 * (o + l + s),
                    h = e.multiplyByScalar(c, (-o + f) / l, B);
                return e.add(h, a, h), e.clone(h, r.center), (r.radius = f), r;
            };
            var q = new e();
            (d.expand = function(t, n, r) {
                r = d.clone(t, r);
                var i = e.magnitude(e.subtract(n, r.center, q));
                return i > r.radius && (r.radius = i), r;
            }),
                (d.intersectPlane = function(t, n) {
                    var r = t.center,
                        i = t.radius,
                        a = n.normal,
                        o = e.dot(a, r) + n.distance;
                    return o < -i ? u.OUTSIDE : o < i ? u.INTERSECTING : u.INSIDE;
                }),
                (d.transform = function(e, t, n) {
                    return (
                        i(n) || (n = new d()),
                        (n.center = f.multiplyByPoint(t, e.center, n.center)),
                        (n.radius = f.getMaximumScale(t) * e.radius),
                        n
                    );
                });
            var z = new e();
            (d.distanceSquaredTo = function(t, n) {
                var r = e.subtract(t.center, n, z);
                return e.magnitudeSquared(r) - t.radius * t.radius;
            }),
                (d.transformWithoutScale = function(e, t, n) {
                    return (
                        i(n) || (n = new d()),
                        (n.center = f.multiplyByPoint(t, e.center, n.center)),
                        (n.radius = e.radius),
                        n
                    );
                });
            var G = new e();
            d.computePlaneDistances = function(t, n, r, a) {
                i(a) || (a = new s());
                var o = e.subtract(t.center, n, G),
                    u = e.dot(r, o);
                return (a.start = u - t.radius), (a.stop = u + t.radius), a;
            };
            for (
                var V = new e(),
                    W = new e(),
                    X = new e(),
                    H = new e(),
                    Y = new e(),
                    k = new t(),
                    j = new Array(8),
                    Z = 0;
                Z < 8;
                ++Z
            )
                j[Z] = new e();
            var K = new o();
            return (
                (d.projectTo2D = function(t, n, i) {
                    n = r(n, K);
                    var a = n.ellipsoid,
                        o = t.center,
                        u = t.radius,
                        s = a.geodeticSurfaceNormal(o, V),
                        c = e.cross(e.UNIT_Z, s, W);
                    e.normalize(c, c);
                    var l = e.cross(s, c, X);
                    e.normalize(l, l),
                        e.multiplyByScalar(s, u, s),
                        e.multiplyByScalar(l, u, l),
                        e.multiplyByScalar(c, u, c);
                    var f = e.negate(l, Y),
                        h = e.negate(c, H),
                        p = j,
                        E = p[0];
                    e.add(s, l, E),
                        e.add(E, c, E),
                        (E = p[1]),
                        e.add(s, l, E),
                        e.add(E, h, E),
                        (E = p[2]),
                        e.add(s, f, E),
                        e.add(E, h, E),
                        (E = p[3]),
                        e.add(s, f, E),
                        e.add(E, c, E),
                        e.negate(s, s),
                        (E = p[4]),
                        e.add(s, l, E),
                        e.add(E, c, E),
                        (E = p[5]),
                        e.add(s, l, E),
                        e.add(E, h, E),
                        (E = p[6]),
                        e.add(s, f, E),
                        e.add(E, h, E),
                        (E = p[7]),
                        e.add(s, f, E),
                        e.add(E, c, E);
                    for (var m = p.length, y = 0; y < m; ++y) {
                        var _ = p[y];
                        e.add(o, _, _);
                        var T = a.cartesianToCartographic(_, k);
                        n.project(T, _);
                    }
                    (i = d.fromPoints(p, i)), (o = i.center);
                    var R = o.x,
                        v = o.y,
                        A = o.z;
                    return (o.x = A), (o.y = R), (o.z = v), i;
                }),
                (d.isOccluded = function(e, t) {
                    return !t.isBoundingSphereVisible(e);
                }),
                (d.equals = function(t, n) {
                    return (
                        t === n ||
                        (i(t) && i(n) && e.equals(t.center, n.center) && t.radius === n.radius)
                    );
                }),
                (d.prototype.intersectPlane = function(e) {
                    return d.intersectPlane(this, e);
                }),
                (d.prototype.distanceSquaredTo = function(e) {
                    return d.distanceSquaredTo(this, e);
                }),
                (d.prototype.computePlaneDistances = function(e, t, n) {
                    return d.computePlaneDistances(this, e, t, n);
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
                    return M * e * e * e;
                }),
                d
            );
        }),
        define("Core/Fullscreen", ["./defined", "./defineProperties"], function(e, t) {
            "use strict";
            var n,
                r = {
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
                            if (i.supportsFullscreen()) return document[r.fullscreenElement];
                        }
                    },
                    changeEventName: {
                        get: function() {
                            if (i.supportsFullscreen()) return r.fullscreenchange;
                        }
                    },
                    errorEventName: {
                        get: function() {
                            if (i.supportsFullscreen()) return r.fullscreenerror;
                        }
                    },
                    enabled: {
                        get: function() {
                            if (i.supportsFullscreen()) return document[r.fullscreenEnabled];
                        }
                    },
                    fullscreen: {
                        get: function() {
                            if (i.supportsFullscreen()) return null !== i.element;
                        }
                    }
                }),
                (i.supportsFullscreen = function() {
                    if (e(n)) return n;
                    n = !1;
                    var t = document.body;
                    if ("function" == typeof t.requestFullscreen)
                        return (
                            (r.requestFullscreen = "requestFullscreen"),
                            (r.exitFullscreen = "exitFullscreen"),
                            (r.fullscreenEnabled = "fullscreenEnabled"),
                            (r.fullscreenElement = "fullscreenElement"),
                            (r.fullscreenchange = "fullscreenchange"),
                            (r.fullscreenerror = "fullscreenerror"),
                            (n = !0)
                        );
                    for (
                        var i, a = ["webkit", "moz", "o", "ms", "khtml"], o = 0, u = a.length;
                        o < u;
                        ++o
                    ) {
                        var s = a[o];
                        (i = s + "RequestFullscreen"),
                            "function" == typeof t[i]
                                ? ((r.requestFullscreen = i), (n = !0))
                                : ((i = s + "RequestFullScreen"),
                                  "function" == typeof t[i] &&
                                      ((r.requestFullscreen = i), (n = !0))),
                            (i = s + "ExitFullscreen"),
                            "function" == typeof document[i]
                                ? (r.exitFullscreen = i)
                                : ((i = s + "CancelFullScreen"),
                                  "function" == typeof document[i] && (r.exitFullscreen = i)),
                            (i = s + "FullscreenEnabled"),
                            void 0 !== document[i]
                                ? (r.fullscreenEnabled = i)
                                : ((i = s + "FullScreenEnabled"),
                                  void 0 !== document[i] && (r.fullscreenEnabled = i)),
                            (i = s + "FullscreenElement"),
                            void 0 !== document[i]
                                ? (r.fullscreenElement = i)
                                : ((i = s + "FullScreenElement"),
                                  void 0 !== document[i] && (r.fullscreenElement = i)),
                            (i = s + "fullscreenchange"),
                            void 0 !== document["on" + i] &&
                                ("ms" === s && (i = "MSFullscreenChange"),
                                (r.fullscreenchange = i)),
                            (i = s + "fullscreenerror"),
                            void 0 !== document["on" + i] &&
                                ("ms" === s && (i = "MSFullscreenError"), (r.fullscreenerror = i));
                    }
                    return n;
                }),
                (i.requestFullscreen = function(e, t) {
                    i.supportsFullscreen() && e[r.requestFullscreen]({ vrDisplay: t });
                }),
                (i.exitFullscreen = function() {
                    i.supportsFullscreen() && document[r.exitFullscreen]();
                }),
                i
            );
        }),
        (function(e) {
            "use strict";
            e("ThirdParty/when", [], function() {
                function e(e, n, r, i) {
                    return t(e).then(n, r, i);
                }
                function t(e) {
                    var t, n;
                    return (
                        e instanceof r
                            ? (t = e)
                            : u(e)
                            ? ((n = o()),
                              e.then(
                                  function(e) {
                                      n.resolve(e);
                                  },
                                  function(e) {
                                      n.reject(e);
                                  },
                                  function(e) {
                                      n.progress(e);
                                  }
                              ),
                              (t = n.promise))
                            : (t = i(e)),
                        t
                    );
                }
                function n(t) {
                    return e(t, a);
                }
                function r(e) {
                    this.then = e;
                }
                function i(e) {
                    return new r(function(n) {
                        try {
                            return t(n ? n(e) : e);
                        } catch (e) {
                            return a(e);
                        }
                    });
                }
                function a(e) {
                    return new r(function(n, r) {
                        try {
                            return r ? t(r(e)) : a(e);
                        } catch (e) {
                            return a(e);
                        }
                    });
                }
                function o() {
                    function e(e, t, n) {
                        return h(e, t, n);
                    }
                    function n(e) {
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
                        (c = new r(e)),
                        (s = {
                            then: e,
                            resolve: n,
                            reject: i,
                            progress: u,
                            promise: c,
                            resolver: { resolve: n, reject: i, progress: u }
                        }),
                        (l = []),
                        (f = []),
                        (h = function(e, t, n) {
                            var r, i;
                            return (
                                (r = o()),
                                (i =
                                    "function" == typeof n
                                        ? function(e) {
                                              try {
                                                  r.progress(n(e));
                                              } catch (e) {
                                                  r.progress(e);
                                              }
                                          }
                                        : function(e) {
                                              r.progress(e);
                                          }),
                                l.push(function(n) {
                                    n.then(e, t).then(r.resolve, r.reject, i);
                                }),
                                f.push(i),
                                r.promise
                            );
                        }),
                        (d = function(e) {
                            return E(f, e), e;
                        }),
                        (p = function(e) {
                            return (
                                (e = t(e)), (h = e.then), (p = t), (d = y), E(l, e), (f = l = v), e
                            );
                        }),
                        s
                    );
                }
                function u(e) {
                    return e && "function" == typeof e.then;
                }
                function s(t, n, r, i, a) {
                    return (
                        m(2, arguments),
                        e(t, function(t) {
                            function u(e) {
                                E(e);
                            }
                            function s(e) {
                                p(e);
                            }
                            var c, l, f, h, d, p, E, m, _, T;
                            if (
                                ((_ = t.length >>> 0),
                                (c = Math.max(0, Math.min(n, _))),
                                (f = []),
                                (l = _ - c + 1),
                                (h = []),
                                (d = o()),
                                c)
                            )
                                for (
                                    m = d.progress,
                                        E = function(e) {
                                            h.push(e), --l || ((p = E = y), d.reject(h));
                                        },
                                        p = function(e) {
                                            f.push(e), --c || ((p = E = y), d.resolve(f));
                                        },
                                        T = 0;
                                    T < _;
                                    ++T
                                )
                                    T in t && e(t[T], s, u, m);
                            else d.resolve(f);
                            return d.then(r, i, a);
                        })
                    );
                }
                function c(e, t, n, r) {
                    function i(e) {
                        return t ? t(e[0]) : e[0];
                    }
                    return s(e, 1, i, n, r);
                }
                function l(e, t, n, r) {
                    return m(1, arguments), h(e, _).then(t, n, r);
                }
                function f() {
                    return h(arguments, _);
                }
                function h(t, n) {
                    return e(t, function(t) {
                        var r, i, a, u, s, c;
                        if (((a = i = t.length >>> 0), (r = []), (c = o()), a))
                            for (
                                u = function(t, i) {
                                    e(t, n).then(function(e) {
                                        (r[i] = e), --a || c.resolve(r);
                                    }, c.reject);
                                },
                                    s = 0;
                                s < i;
                                s++
                            )
                                s in t ? u(t[s], s) : --a;
                        else c.resolve(r);
                        return c.promise;
                    });
                }
                function d(t, n) {
                    var r = R.call(arguments, 1);
                    return e(t, function(t) {
                        var i;
                        return (
                            (i = t.length),
                            (r[0] = function(t, r, a) {
                                return e(t, function(t) {
                                    return e(r, function(e) {
                                        return n(t, e, a, i);
                                    });
                                });
                            }),
                            T.apply(t, r)
                        );
                    });
                }
                function p(t, n, r) {
                    var i = arguments.length > 2;
                    return e(
                        t,
                        function(e) {
                            return (e = i ? r : e), n.resolve(e), e;
                        },
                        function(e) {
                            return n.reject(e), a(e);
                        },
                        n.progress
                    );
                }
                function E(e, t) {
                    for (var n, r = 0; (n = e[r++]); ) n(t);
                }
                function m(e, t) {
                    for (var n, r = t.length; r > e; )
                        if (null != (n = t[--r]) && "function" != typeof n)
                            throw new Error("arg " + r + " must be a function");
                }
                function y() {}
                function _(e) {
                    return e;
                }
                var T, R, v;
                return (
                    (e.defer = o),
                    (e.resolve = t),
                    (e.reject = n),
                    (e.join = f),
                    (e.all = l),
                    (e.map = h),
                    (e.reduce = d),
                    (e.any = c),
                    (e.some = s),
                    (e.chain = p),
                    (e.isPromise = u),
                    (r.prototype = {
                        always: function(e, t) {
                            return this.then(e, e, t);
                        },
                        otherwise: function(e) {
                            return this.then(v, e);
                        },
                        yield: function(e) {
                            return this.then(function() {
                                return e;
                            });
                        },
                        spread: function(e) {
                            return this.then(function(t) {
                                return l(t, function(t) {
                                    return e.apply(v, t);
                                });
                            });
                        }
                    }),
                    (R = [].slice),
                    (T =
                        [].reduce ||
                        function(e) {
                            var t, n, r, i, a;
                            if (
                                ((a = 0),
                                (t = Object(this)),
                                (i = t.length >>> 0),
                                (n = arguments),
                                n.length <= 1)
                            )
                                for (;;) {
                                    if (a in t) {
                                        r = t[a++];
                                        break;
                                    }
                                    if (++a >= i) throw new TypeError();
                                }
                            else r = n[1];
                            for (; a < i; ++a) a in t && (r = e(r, t[a], a, t));
                            return r;
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
        ], function(e, t, n, r, i, a) {
            "use strict";
            function o(e) {
                for (var t = e.split("."), n = 0, r = t.length; n < r; ++n)
                    t[n] = parseInt(t[n], 10);
                return t;
            }
            function u() {
                if (!t(O) && ((O = !1), !E())) {
                    var e = / Chrome\/([\.0-9]+)/.exec(S.userAgent);
                    null !== e && ((O = !0), (M = o(e[1])));
                }
                return O;
            }
            function s() {
                return u() && M;
            }
            function c() {
                if (!t(I) && ((I = !1), !u() && !E() && / Safari\/[\.0-9]+/.test(S.userAgent))) {
                    var e = / Version\/([\.0-9]+)/.exec(S.userAgent);
                    null !== e && ((I = !0), (w = o(e[1])));
                }
                return I;
            }
            function l() {
                return c() && w;
            }
            function f() {
                if (!t(N)) {
                    N = !1;
                    var e = / AppleWebKit\/([\.0-9]+)(\+?)/.exec(S.userAgent);
                    null !== e && ((N = !0), (x = o(e[1])), (x.isNightly = !!e[2]));
                }
                return N;
            }
            function h() {
                return f() && x;
            }
            function d() {
                if (!t(C)) {
                    C = !1;
                    var e;
                    "Microsoft Internet Explorer" === S.appName
                        ? null !== (e = /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(S.userAgent)) &&
                          ((C = !0), (P = o(e[1])))
                        : "Netscape" === S.appName &&
                          null !== (e = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(S.userAgent)) &&
                          ((C = !0), (P = o(e[1])));
                }
                return C;
            }
            function p() {
                return d() && P;
            }
            function E() {
                if (!t(U)) {
                    U = !1;
                    var e = / Edge\/([\.0-9]+)/.exec(S.userAgent);
                    null !== e && ((U = !0), (D = o(e[1])));
                }
                return U;
            }
            function m() {
                return E() && D;
            }
            function y() {
                if (!t(L)) {
                    L = !1;
                    var e = /Firefox\/([\.0-9]+)/.exec(S.userAgent);
                    null !== e && ((L = !0), (F = o(e[1])));
                }
                return L;
            }
            function _() {
                return t(b) || (b = /Windows/i.test(S.appVersion)), b;
            }
            function T() {
                return y() && F;
            }
            function R() {
                return (
                    t(B) ||
                        (B =
                            !y() &&
                            "undefined" != typeof PointerEvent &&
                            (!t(S.pointerEnabled) || S.pointerEnabled)),
                    B
                );
            }
            function v() {
                if (!t(z)) {
                    var e = document.createElement("canvas");
                    e.setAttribute(
                        "style",
                        "image-rendering: -moz-crisp-edges;image-rendering: pixelated;"
                    );
                    var n = e.style.imageRendering;
                    (z = t(n) && "" !== n), z && (q = n);
                }
                return z;
            }
            function A() {
                return v() ? q : void 0;
            }
            function g() {
                return g._result;
            }
            var S;
            S = "undefined" != typeof navigator ? navigator : {};
            var O, M, I, w, N, x, C, P, U, D, L, F, b, B, q, z;
            (g._promise = void 0),
                (g._result = void 0),
                (g.initialize = function() {
                    if (t(g._promise)) return g._promise;
                    var e = a.defer();
                    if (((g._promise = e.promise), E()))
                        return (g._result = !1), e.resolve(g._result), e.promise;
                    var n = new Image();
                    return (
                        (n.onload = function() {
                            (g._result = n.width > 0 && n.height > 0), e.resolve(g._result);
                        }),
                        (n.onerror = function() {
                            (g._result = !1), e.resolve(g._result);
                        }),
                        (n.src =
                            "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"),
                        e.promise
                    );
                }),
                n(g, {
                    initialized: {
                        get: function() {
                            return t(g._result);
                        }
                    }
                });
            var G = [];
            "undefined" != typeof ArrayBuffer &&
                (G.push(
                    Int8Array,
                    Uint8Array,
                    Int16Array,
                    Uint16Array,
                    Int32Array,
                    Uint32Array,
                    Float32Array,
                    Float64Array
                ),
                "undefined" != typeof Uint8ClampedArray && G.push(Uint8ClampedArray),
                "undefined" != typeof CanvasPixelArray && G.push(CanvasPixelArray));
            var V = {
                isChrome: u,
                chromeVersion: s,
                isSafari: c,
                safariVersion: l,
                isWebkit: f,
                webkitVersion: h,
                isInternetExplorer: d,
                internetExplorerVersion: p,
                isEdge: E,
                edgeVersion: m,
                isFirefox: y,
                firefoxVersion: T,
                isWindows: _,
                hardwareConcurrency: e(S.hardwareConcurrency, 3),
                supportsPointerEvents: R,
                supportsImageRenderingPixelated: v,
                supportsWebP: g,
                imageRenderingValue: A,
                typedArrayTypes: G
            };
            return (
                (V.supportsFullscreen = function() {
                    return i.supportsFullscreen();
                }),
                (V.supportsTypedArrays = function() {
                    return "undefined" != typeof ArrayBuffer;
                }),
                (V.supportsWebWorkers = function() {
                    return "undefined" != typeof Worker;
                }),
                (V.supportsWebAssembly = function() {
                    return "undefined" != typeof WebAssembly && !V.isEdge();
                }),
                V
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
        ], function(e, t, n, r, i, a) {
            "use strict";
            if (!r.supportsTypedArrays()) return {};
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
                (o.createArrayBufferView = function(t, n, r, i) {
                    switch (
                        ((r = e(r, 0)), (i = e(i, (n.byteLength - r) / o.getSizeInBytes(t))), t)
                    ) {
                        case o.BYTE:
                            return new Int8Array(n, r, i);
                        case o.UNSIGNED_BYTE:
                            return new Uint8Array(n, r, i);
                        case o.SHORT:
                            return new Int16Array(n, r, i);
                        case o.UNSIGNED_SHORT:
                            return new Uint16Array(n, r, i);
                        case o.INT:
                            return new Int32Array(n, r, i);
                        case o.UNSIGNED_INT:
                            return new Uint32Array(n, r, i);
                        case o.FLOAT:
                            return new Float32Array(n, r, i);
                        case o.DOUBLE:
                            return new Float64Array(n, r, i);
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
        define("Core/CornerType", ["./freezeObject"], function(e) {
            "use strict";
            return e({ ROUNDED: 0, MITERED: 1, BEVELED: 2 });
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
        ], function(e, t, n, r, i, a) {
            "use strict";
            function o(e, t, r, i) {
                (this[0] = n(e, 0)), (this[1] = n(r, 0)), (this[2] = n(t, 0)), (this[3] = n(i, 0));
            }
            (o.packedLength = 4),
                (o.pack = function(e, t, r) {
                    return (
                        (r = n(r, 0)),
                        (t[r++] = e[0]),
                        (t[r++] = e[1]),
                        (t[r++] = e[2]),
                        (t[r++] = e[3]),
                        t
                    );
                }),
                (o.unpack = function(e, t, i) {
                    return (
                        (t = n(t, 0)),
                        r(i) || (i = new o()),
                        (i[0] = e[t++]),
                        (i[1] = e[t++]),
                        (i[2] = e[t++]),
                        (i[3] = e[t++]),
                        i
                    );
                }),
                (o.clone = function(e, t) {
                    if (r(e))
                        return r(t)
                            ? ((t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t)
                            : new o(e[0], e[2], e[1], e[3]);
                }),
                (o.fromArray = function(e, t, i) {
                    return (
                        (t = n(t, 0)),
                        r(i) || (i = new o()),
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
                    return r(t)
                        ? ((t[0] = e[0]), (t[1] = e[2]), (t[2] = e[1]), (t[3] = e[3]), t)
                        : new o(e[0], e[1], e[2], e[3]);
                }),
                (o.fromScale = function(e, t) {
                    return r(t)
                        ? ((t[0] = e.x), (t[1] = 0), (t[2] = 0), (t[3] = e.y), t)
                        : new o(e.x, 0, 0, e.y);
                }),
                (o.fromUniformScale = function(e, t) {
                    return r(t)
                        ? ((t[0] = e), (t[1] = 0), (t[2] = 0), (t[3] = e), t)
                        : new o(e, 0, 0, e);
                }),
                (o.fromRotation = function(e, t) {
                    var n = Math.cos(e),
                        i = Math.sin(e);
                    return r(t)
                        ? ((t[0] = n), (t[1] = i), (t[2] = -i), (t[3] = n), t)
                        : new o(n, -i, i, n);
                }),
                (o.toArray = function(e, t) {
                    return r(t)
                        ? ((t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t)
                        : [e[0], e[1], e[2], e[3]];
                }),
                (o.getElementIndex = function(e, t) {
                    return 2 * e + t;
                }),
                (o.getColumn = function(e, t, n) {
                    var r = 2 * t,
                        i = e[r],
                        a = e[r + 1];
                    return (n.x = i), (n.y = a), n;
                }),
                (o.setColumn = function(e, t, n, r) {
                    r = o.clone(e, r);
                    var i = 2 * t;
                    return (r[i] = n.x), (r[i + 1] = n.y), r;
                }),
                (o.getRow = function(e, t, n) {
                    var r = e[t],
                        i = e[t + 2];
                    return (n.x = r), (n.y = i), n;
                }),
                (o.setRow = function(e, t, n, r) {
                    return (r = o.clone(e, r)), (r[t] = n.x), (r[t + 2] = n.y), r;
                });
            var u = new e();
            o.getScale = function(t, n) {
                return (
                    (n.x = e.magnitude(e.fromElements(t[0], t[1], u))),
                    (n.y = e.magnitude(e.fromElements(t[2], t[3], u))),
                    n
                );
            };
            var s = new e();
            return (
                (o.getMaximumScale = function(t) {
                    return o.getScale(t, s), e.maximumComponent(s);
                }),
                (o.multiply = function(e, t, n) {
                    var r = e[0] * t[0] + e[2] * t[1],
                        i = e[0] * t[2] + e[2] * t[3],
                        a = e[1] * t[0] + e[3] * t[1],
                        o = e[1] * t[2] + e[3] * t[3];
                    return (n[0] = r), (n[1] = a), (n[2] = i), (n[3] = o), n;
                }),
                (o.add = function(e, t, n) {
                    return (
                        (n[0] = e[0] + t[0]),
                        (n[1] = e[1] + t[1]),
                        (n[2] = e[2] + t[2]),
                        (n[3] = e[3] + t[3]),
                        n
                    );
                }),
                (o.subtract = function(e, t, n) {
                    return (
                        (n[0] = e[0] - t[0]),
                        (n[1] = e[1] - t[1]),
                        (n[2] = e[2] - t[2]),
                        (n[3] = e[3] - t[3]),
                        n
                    );
                }),
                (o.multiplyByVector = function(e, t, n) {
                    var r = e[0] * t.x + e[2] * t.y,
                        i = e[1] * t.x + e[3] * t.y;
                    return (n.x = r), (n.y = i), n;
                }),
                (o.multiplyByScalar = function(e, t, n) {
                    return (
                        (n[0] = e[0] * t),
                        (n[1] = e[1] * t),
                        (n[2] = e[2] * t),
                        (n[3] = e[3] * t),
                        n
                    );
                }),
                (o.multiplyByScale = function(e, t, n) {
                    return (
                        (n[0] = e[0] * t.x),
                        (n[1] = e[1] * t.x),
                        (n[2] = e[2] * t.y),
                        (n[3] = e[3] * t.y),
                        n
                    );
                }),
                (o.negate = function(e, t) {
                    return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), (t[3] = -e[3]), t;
                }),
                (o.transpose = function(e, t) {
                    var n = e[0],
                        r = e[2],
                        i = e[1],
                        a = e[3];
                    return (t[0] = n), (t[1] = r), (t[2] = i), (t[3] = a), t;
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
                        (r(e) &&
                            r(t) &&
                            e[0] === t[0] &&
                            e[1] === t[1] &&
                            e[2] === t[2] &&
                            e[3] === t[3])
                    );
                }),
                (o.equalsArray = function(e, t, n) {
                    return (
                        e[0] === t[n] && e[1] === t[n + 1] && e[2] === t[n + 2] && e[3] === t[n + 3]
                    );
                }),
                (o.equalsEpsilon = function(e, t, n) {
                    return (
                        e === t ||
                        (r(e) &&
                            r(t) &&
                            Math.abs(e[0] - t[0]) <= n &&
                            Math.abs(e[1] - t[1]) <= n &&
                            Math.abs(e[2] - t[2]) <= n &&
                            Math.abs(e[3] - t[3]) <= n)
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
            var n = {
                POINTS: t.POINTS,
                LINES: t.LINES,
                LINE_LOOP: t.LINE_LOOP,
                LINE_STRIP: t.LINE_STRIP,
                TRIANGLES: t.TRIANGLES,
                TRIANGLE_STRIP: t.TRIANGLE_STRIP,
                TRIANGLE_FAN: t.TRIANGLE_FAN,
                validate: function(e) {
                    return (
                        e === n.POINTS ||
                        e === n.LINES ||
                        e === n.LINE_LOOP ||
                        e === n.LINE_STRIP ||
                        e === n.TRIANGLES ||
                        e === n.TRIANGLE_STRIP ||
                        e === n.TRIANGLE_FAN
                    );
                }
            };
            return e(n);
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
        ], function(e, t, n, r, i, a, o, u) {
            "use strict";
            function s(e, t, r, i) {
                (this.x = n(e, 0)), (this.y = n(t, 0)), (this.z = n(r, 0)), (this.w = n(i, 0));
            }
            var c = new e();
            s.fromAxisAngle = function(t, n, i) {
                var a = n / 2,
                    o = Math.sin(a);
                c = e.normalize(t, c);
                var u = c.x * o,
                    l = c.y * o,
                    f = c.z * o,
                    h = Math.cos(a);
                return r(i) ? ((i.x = u), (i.y = l), (i.z = f), (i.w = h), i) : new s(u, l, f, h);
            };
            var l = [1, 2, 0],
                f = new Array(3);
            s.fromRotationMatrix = function(e, t) {
                var n,
                    i,
                    a,
                    o,
                    c,
                    h = e[u.COLUMN0ROW0],
                    d = e[u.COLUMN1ROW1],
                    p = e[u.COLUMN2ROW2],
                    E = h + d + p;
                if (E > 0)
                    (n = Math.sqrt(E + 1)),
                        (c = 0.5 * n),
                        (n = 0.5 / n),
                        (i = (e[u.COLUMN1ROW2] - e[u.COLUMN2ROW1]) * n),
                        (a = (e[u.COLUMN2ROW0] - e[u.COLUMN0ROW2]) * n),
                        (o = (e[u.COLUMN0ROW1] - e[u.COLUMN1ROW0]) * n);
                else {
                    var m = l,
                        y = 0;
                    d > h && (y = 1), p > h && p > d && (y = 2);
                    var _ = m[y],
                        T = m[_];
                    n = Math.sqrt(
                        e[u.getElementIndex(y, y)] -
                            e[u.getElementIndex(_, _)] -
                            e[u.getElementIndex(T, T)] +
                            1
                    );
                    var R = f;
                    (R[y] = 0.5 * n),
                        (n = 0.5 / n),
                        (c = (e[u.getElementIndex(T, _)] - e[u.getElementIndex(_, T)]) * n),
                        (R[_] = (e[u.getElementIndex(_, y)] + e[u.getElementIndex(y, _)]) * n),
                        (R[T] = (e[u.getElementIndex(T, y)] + e[u.getElementIndex(y, T)]) * n),
                        (i = -R[0]),
                        (a = -R[1]),
                        (o = -R[2]);
                }
                return r(t) ? ((t.x = i), (t.y = a), (t.z = o), (t.w = c), t) : new s(i, a, o, c);
            };
            var h = new s(),
                d = new s(),
                p = new s(),
                E = new s();
            s.fromHeadingPitchRoll = function(t, n) {
                return (
                    (E = s.fromAxisAngle(e.UNIT_X, t.roll, h)),
                    (p = s.fromAxisAngle(e.UNIT_Y, -t.pitch, n)),
                    (n = s.multiply(p, E, p)),
                    (d = s.fromAxisAngle(e.UNIT_Z, -t.heading, h)),
                    s.multiply(d, n, n)
                );
            };
            var m = new e(),
                y = new e(),
                _ = new s(),
                T = new s(),
                R = new s();
            (s.packedLength = 4),
                (s.pack = function(e, t, r) {
                    return (
                        (r = n(r, 0)),
                        (t[r++] = e.x),
                        (t[r++] = e.y),
                        (t[r++] = e.z),
                        (t[r] = e.w),
                        t
                    );
                }),
                (s.unpack = function(e, t, i) {
                    return (
                        (t = n(t, 0)),
                        r(i) || (i = new s()),
                        (i.x = e[t]),
                        (i.y = e[t + 1]),
                        (i.z = e[t + 2]),
                        (i.w = e[t + 3]),
                        i
                    );
                }),
                (s.packedInterpolationLength = 3),
                (s.convertPackedArrayForInterpolation = function(e, t, n, r) {
                    s.unpack(e, 4 * n, R), s.conjugate(R, R);
                    for (var i = 0, a = n - t + 1; i < a; i++) {
                        var o = 3 * i;
                        s.unpack(e, 4 * (t + i), _),
                            s.multiply(_, R, _),
                            _.w < 0 && s.negate(_, _),
                            s.computeAxis(_, m);
                        var u = s.computeAngle(_);
                        (r[o] = m.x * u), (r[o + 1] = m.y * u), (r[o + 2] = m.z * u);
                    }
                }),
                (s.unpackInterpolationResult = function(t, n, i, a, o) {
                    r(o) || (o = new s()), e.fromArray(t, 0, y);
                    var u = e.magnitude(y);
                    return (
                        s.unpack(n, 4 * a, T),
                        0 === u ? s.clone(s.IDENTITY, _) : s.fromAxisAngle(y, u, _),
                        s.multiply(_, T, o)
                    );
                }),
                (s.clone = function(e, t) {
                    if (r(e))
                        return r(t)
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
                    var n = 1 / s.magnitude(e),
                        r = e.x * n,
                        i = e.y * n,
                        a = e.z * n,
                        o = e.w * n;
                    return (t.x = r), (t.y = i), (t.z = a), (t.w = o), t;
                }),
                (s.inverse = function(e, t) {
                    var n = s.magnitudeSquared(e);
                    return (t = s.conjugate(e, t)), s.multiplyByScalar(t, 1 / n, t);
                }),
                (s.add = function(e, t, n) {
                    return (
                        (n.x = e.x + t.x),
                        (n.y = e.y + t.y),
                        (n.z = e.z + t.z),
                        (n.w = e.w + t.w),
                        n
                    );
                }),
                (s.subtract = function(e, t, n) {
                    return (
                        (n.x = e.x - t.x),
                        (n.y = e.y - t.y),
                        (n.z = e.z - t.z),
                        (n.w = e.w - t.w),
                        n
                    );
                }),
                (s.negate = function(e, t) {
                    return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), (t.w = -e.w), t;
                }),
                (s.dot = function(e, t) {
                    return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w;
                }),
                (s.multiply = function(e, t, n) {
                    var r = e.x,
                        i = e.y,
                        a = e.z,
                        o = e.w,
                        u = t.x,
                        s = t.y,
                        c = t.z,
                        l = t.w,
                        f = o * u + r * l + i * c - a * s,
                        h = o * s - r * c + i * l + a * u,
                        d = o * c + r * s - i * u + a * l,
                        p = o * l - r * u - i * s - a * c;
                    return (n.x = f), (n.y = h), (n.z = d), (n.w = p), n;
                }),
                (s.multiplyByScalar = function(e, t, n) {
                    return (n.x = e.x * t), (n.y = e.y * t), (n.z = e.z * t), (n.w = e.w * t), n;
                }),
                (s.divideByScalar = function(e, t, n) {
                    return (n.x = e.x / t), (n.y = e.y / t), (n.z = e.z / t), (n.w = e.w / t), n;
                }),
                (s.computeAxis = function(e, t) {
                    var n = e.w;
                    if (Math.abs(n - 1) < o.EPSILON6) return (t.x = t.y = t.z = 0), t;
                    var r = 1 / Math.sqrt(1 - n * n);
                    return (t.x = e.x * r), (t.y = e.y * r), (t.z = e.z * r), t;
                }),
                (s.computeAngle = function(e) {
                    return Math.abs(e.w - 1) < o.EPSILON6 ? 0 : 2 * Math.acos(e.w);
                });
            var v = new s();
            s.lerp = function(e, t, n, r) {
                return (
                    (v = s.multiplyByScalar(t, n, v)),
                    (r = s.multiplyByScalar(e, 1 - n, r)),
                    s.add(v, r, r)
                );
            };
            var A = new s(),
                g = new s(),
                S = new s();
            (s.slerp = function(e, t, n, r) {
                var i = s.dot(e, t),
                    a = t;
                if ((i < 0 && ((i = -i), (a = A = s.negate(t, A))), 1 - i < o.EPSILON6))
                    return s.lerp(e, a, n, r);
                var u = Math.acos(i);
                return (
                    (g = s.multiplyByScalar(e, Math.sin((1 - n) * u), g)),
                    (S = s.multiplyByScalar(a, Math.sin(n * u), S)),
                    (r = s.add(g, S, r)),
                    s.multiplyByScalar(r, 1 / Math.sin(u), r)
                );
            }),
                (s.log = function(t, n) {
                    var r = o.acosClamped(t.w),
                        i = 0;
                    return 0 !== r && (i = r / Math.sin(r)), e.multiplyByScalar(t, i, n);
                }),
                (s.exp = function(t, n) {
                    var r = e.magnitude(t),
                        i = 0;
                    return (
                        0 !== r && (i = Math.sin(r) / r),
                        (n.x = t.x * i),
                        (n.y = t.y * i),
                        (n.z = t.z * i),
                        (n.w = Math.cos(r)),
                        n
                    );
                });
            var O = new e(),
                M = new e(),
                I = new s(),
                w = new s();
            (s.computeInnerQuadrangle = function(t, n, r, i) {
                var a = s.conjugate(n, I);
                s.multiply(a, r, w);
                var o = s.log(w, O);
                s.multiply(a, t, w);
                var u = s.log(w, M);
                return (
                    e.add(o, u, o),
                    e.multiplyByScalar(o, 0.25, o),
                    e.negate(o, o),
                    s.exp(o, I),
                    s.multiply(n, I, i)
                );
            }),
                (s.squad = function(e, t, n, r, i, a) {
                    var o = s.slerp(e, t, i, I),
                        u = s.slerp(n, r, i, w);
                    return s.slerp(o, u, 2 * i * (1 - i), a);
                });
            for (
                var N = new s(),
                    x = 1.9011074535173003,
                    C = i.supportsTypedArrays() ? new Float32Array(8) : [],
                    P = i.supportsTypedArrays() ? new Float32Array(8) : [],
                    U = i.supportsTypedArrays() ? new Float32Array(8) : [],
                    D = i.supportsTypedArrays() ? new Float32Array(8) : [],
                    L = 0;
                L < 7;
                ++L
            ) {
                var F = L + 1,
                    b = 2 * F + 1;
                (C[L] = 1 / (F * b)), (P[L] = F / b);
            }
            return (
                (C[7] = x / 136),
                (P[7] = (8 * x) / 17),
                (s.fastSlerp = function(e, t, n, r) {
                    var i,
                        a = s.dot(e, t);
                    a >= 0 ? (i = 1) : ((i = -1), (a = -a));
                    for (var o = a - 1, u = 1 - n, c = n * n, l = u * u, f = 7; f >= 0; --f)
                        (U[f] = (C[f] * c - P[f]) * o), (D[f] = (C[f] * l - P[f]) * o);
                    var h =
                            i *
                            n *
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
                        p = s.multiplyByScalar(e, d, N);
                    return s.multiplyByScalar(t, h, r), s.add(p, r, r);
                }),
                (s.fastSquad = function(e, t, n, r, i, a) {
                    var o = s.fastSlerp(e, t, i, I),
                        u = s.fastSlerp(n, r, i, w);
                    return s.fastSlerp(o, u, 2 * i * (1 - i), a);
                }),
                (s.equals = function(e, t) {
                    return (
                        e === t ||
                        (r(e) && r(t) && e.x === t.x && e.y === t.y && e.z === t.z && e.w === t.w)
                    );
                }),
                (s.equalsEpsilon = function(e, t, n) {
                    return (
                        e === t ||
                        (r(e) &&
                            r(t) &&
                            Math.abs(e.x - t.x) <= n &&
                            Math.abs(e.y - t.y) <= n &&
                            Math.abs(e.z - t.z) <= n &&
                            Math.abs(e.w - t.w) <= n)
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
        define("Core/binarySearch", ["./Check"], function(e) {
            "use strict";
            function t(e, t, n) {
                for (var r, i, a = 0, o = e.length - 1; a <= o; )
                    if (((r = ~~((a + o) / 2)), (i = n(e[r], t)) < 0)) a = r + 1;
                    else {
                        if (!(i > 0)) return r;
                        o = r - 1;
                    }
                return ~(o + 1);
            }
            return t;
        }),
        define("Core/EarthOrientationParametersSample", [], function() {
            "use strict";
            function e(e, t, n, r, i) {
                (this.xPoleWander = e),
                    (this.yPoleWander = t),
                    (this.xPoleOffset = n),
                    (this.yPoleOffset = r),
                    (this.ut1MinusUtc = i);
            }
            return e;
        }),
        define("ThirdParty/sprintf", [], function() {
            function e() {
                var e = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g,
                    t = arguments,
                    n = 0,
                    r = t[n++],
                    i = function(e, t, n, r) {
                        n || (n = " ");
                        var i = e.length >= t ? "" : Array((1 + t - e.length) >>> 0).join(n);
                        return r ? e + i : i + e;
                    },
                    a = function(e, t, n, r, a, o) {
                        var u = r - e.length;
                        return (
                            u > 0 &&
                                (e =
                                    n || !a
                                        ? i(e, r, o, n)
                                        : e.slice(0, t.length) +
                                          i("", u, "0", !0) +
                                          e.slice(t.length)),
                            e
                        );
                    },
                    o = function(e, t, n, r, o, u, s) {
                        var c = e >>> 0;
                        return (
                            (n = (n && c && { 2: "0b", 8: "0", 16: "0x" }[t]) || ""),
                            (e = n + i(c.toString(t), u || 0, "0", !1)),
                            a(e, n, r, o, s)
                        );
                    },
                    u = function(e, t, n, r, i, o) {
                        return null != r && (e = e.slice(0, r)), a(e, "", t, n, i, o);
                    },
                    s = function(e, r, s, c, l, f, h) {
                        var d, p, E, m, y;
                        if ("%%" == e) return "%";
                        for (
                            var _ = !1, T = "", R = !1, v = !1, A = " ", g = s.length, S = 0;
                            s && S < g;
                            S++
                        )
                            switch (s.charAt(S)) {
                                case " ":
                                    T = " ";
                                    break;
                                case "+":
                                    T = "+";
                                    break;
                                case "-":
                                    _ = !0;
                                    break;
                                case "'":
                                    A = s.charAt(S + 1);
                                    break;
                                case "0":
                                    R = !0;
                                    break;
                                case "#":
                                    v = !0;
                            }
                        if (
                            ((c = c
                                ? "*" == c
                                    ? +t[n++]
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
                                    ? +t[n++]
                                    : "*" == f.charAt(0)
                                    ? +t[f.slice(1, -1)]
                                    : +f
                                : "fFeE".indexOf(h) > -1
                                ? 6
                                : "d" == h
                                ? 0
                                : void 0),
                            (y = r ? t[r.slice(0, -1)] : t[n++]),
                            h)
                        ) {
                            case "s":
                                return u(String(y), _, c, f, R, A);
                            case "c":
                                return u(String.fromCharCode(+y), _, c, f, R);
                            case "b":
                                return o(y, 2, v, _, c, f, R);
                            case "o":
                                return o(y, 8, v, _, c, f, R);
                            case "x":
                                return o(y, 16, v, _, c, f, R);
                            case "X":
                                return o(y, 16, v, _, c, f, R).toUpperCase();
                            case "u":
                                return o(y, 10, v, _, c, f, R);
                            case "i":
                            case "d":
                                return (
                                    (d = +y || 0),
                                    (d = Math.round(d - (d % 1))),
                                    (p = d < 0 ? "-" : T),
                                    (y = p + i(String(Math.abs(d)), f, "0", !1)),
                                    a(y, p, _, c, R)
                                );
                            case "e":
                            case "E":
                            case "f":
                            case "F":
                            case "g":
                            case "G":
                                return (
                                    (d = +y),
                                    (p = d < 0 ? "-" : T),
                                    (E = ["toExponential", "toFixed", "toPrecision"][
                                        "efg".indexOf(h.toLowerCase())
                                    ]),
                                    (m = ["toString", "toUpperCase"]["eEfFgG".indexOf(h) % 2]),
                                    (y = p + Math.abs(d)[E](f)),
                                    a(y, p, _, c, R)[m]()
                                );
                            default:
                                return e;
                        }
                    };
                return r.replace(e, s);
            }
            return e;
        }),
        define("Core/GregorianDate", [], function() {
            "use strict";
            function e(e, t, n, r, i, a, o, u) {
                (this.year = e),
                    (this.month = t),
                    (this.day = n),
                    (this.hour = r),
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
        ], function(e, t, n, r, i, a, o, u, s, c) {
            "use strict";
            function l(e, t) {
                return E.compare(e.julianDate, t.julianDate);
            }
            function f(e) {
                _.julianDate = e;
                var n = E.leapSeconds,
                    r = t(n, _, l);
                r < 0 && (r = ~r), r >= n.length && (r = n.length - 1);
                var i = n[r].offset;
                if (r > 0) {
                    E.secondsDifference(n[r].julianDate, e) > i && (r--, (i = n[r].offset));
                }
                E.addSeconds(e, i, e);
            }
            function h(e, n) {
                _.julianDate = e;
                var r = E.leapSeconds,
                    i = t(r, _, l);
                if ((i < 0 && (i = ~i), 0 === i)) return E.addSeconds(e, -r[0].offset, n);
                if (i >= r.length) return E.addSeconds(e, -r[i - 1].offset, n);
                var a = E.secondsDifference(r[i].julianDate, e);
                return 0 === a
                    ? E.addSeconds(e, -r[i].offset, n)
                    : a <= 1
                    ? void 0
                    : E.addSeconds(e, -r[--i].offset, n);
            }
            function d(e, t, n) {
                var r = (t / s.SECONDS_PER_DAY) | 0;
                return (
                    (e += r),
                    (t -= s.SECONDS_PER_DAY * r),
                    t < 0 && (e--, (t += s.SECONDS_PER_DAY)),
                    (n.dayNumber = e),
                    (n.secondsOfDay = t),
                    n
                );
            }
            function p(e, t, n, r, i, a, o) {
                var u = ((t - 14) / 12) | 0,
                    c = e + 4800 + u,
                    l =
                        (((1461 * c) / 4) | 0) +
                        (((367 * (t - 2 - 12 * u)) / 12) | 0) -
                        (((3 * (((c + 100) / 100) | 0)) / 4) | 0) +
                        n -
                        32075;
                (r -= 12) < 0 && (r += 24);
                var f =
                    a +
                    (r * s.SECONDS_PER_HOUR +
                        i * s.SECONDS_PER_MINUTE +
                        o * s.SECONDS_PER_MILLISECOND);
                return f >= 43200 && (l -= 1), [l, f];
            }
            function E(e, t, r) {
                (this.dayNumber = void 0),
                    (this.secondsOfDay = void 0),
                    (e = n(e, 0)),
                    (t = n(t, 0)),
                    (r = n(r, c.UTC));
                var i = 0 | e;
                (t += (e - i) * s.SECONDS_PER_DAY), d(i, t, this), r === c.UTC && f(this);
            }
            var m = new a(),
                y = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                _ = new u(),
                T = /^(\d{4})$/,
                R = /^(\d{4})-(\d{2})$/,
                v = /^(\d{4})-?(\d{3})$/,
                A = /^(\d{4})-?W(\d{2})-?(\d{1})?$/,
                g = /^(\d{4})-?(\d{2})-?(\d{2})$/,
                S = /([Z+\-])?(\d{2})?:?(\d{2})?$/,
                O = /^(\d{2})(\.\d+)?/.source + S.source,
                M = /^(\d{2}):?(\d{2})(\.\d+)?/.source + S.source,
                I = /^(\d{2}):?(\d{2}):?(\d{2})(\.\d+)?/.source + S.source;
            (E.fromGregorianDate = function(e, t) {
                var n = p(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
                return r(t) ? (d(n[0], n[1], t), f(t), t) : new E(n[0], n[1], c.UTC);
            }),
                (E.fromDate = function(e, t) {
                    var n = p(
                        e.getUTCFullYear(),
                        e.getUTCMonth() + 1,
                        e.getUTCDate(),
                        e.getUTCHours(),
                        e.getUTCMinutes(),
                        e.getUTCSeconds(),
                        e.getUTCMilliseconds()
                    );
                    return r(t) ? (d(n[0], n[1], t), f(t), t) : new E(n[0], n[1], c.UTC);
                }),
                (E.fromIso8601 = function(e, t) {
                    e = e.replace(",", ".");
                    var n,
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
                        N = u[1];
                    if (null !== (u = w.match(g))) (n = +u[1]), (s = +u[2]), (l = +u[3]);
                    else if (null !== (u = w.match(R))) (n = +u[1]), (s = +u[2]);
                    else if (null !== (u = w.match(T))) n = +u[1];
                    else {
                        var x;
                        if (null !== (u = w.match(v))) (n = +u[1]), (x = +u[2]), (a = o(n));
                        else if (null !== (u = w.match(A))) {
                            n = +u[1];
                            var C = +u[2],
                                P = +u[3] || 0,
                                U = new Date(Date.UTC(n, 0, 4));
                            x = 7 * C + P - U.getUTCDay() - 3;
                        }
                        (i = new Date(Date.UTC(n, 0, 1))),
                            i.setUTCDate(x),
                            (s = i.getUTCMonth() + 1),
                            (l = i.getUTCDate());
                    }
                    a = o(n);
                    var D;
                    if (r(N)) {
                        (u = N.match(I)),
                            null !== u
                                ? ((h = +u[1]),
                                  (m = +u[2]),
                                  (_ = +u[3]),
                                  (S = 1e3 * +(u[4] || 0)),
                                  (D = 5))
                                : ((u = N.match(M)),
                                  null !== u
                                      ? ((h = +u[1]), (m = +u[2]), (_ = 60 * +(u[3] || 0)), (D = 4))
                                      : null !== (u = N.match(O)) &&
                                        ((h = +u[1]), (m = 60 * +(u[2] || 0)), (D = 3)));
                        var L = u[D],
                            F = +u[D + 1],
                            b = +(u[D + 2] || 0);
                        switch (L) {
                            case "+":
                                (h -= F), (m -= b);
                                break;
                            case "-":
                                (h += F), (m += b);
                                break;
                            case "Z":
                                break;
                            default:
                                m += new Date(Date.UTC(n, s - 1, l, h, m)).getTimezoneOffset();
                        }
                    }
                    var B = 60 === _;
                    for (B && _--; m >= 60; ) (m -= 60), h++;
                    for (; h >= 24; ) (h -= 24), l++;
                    for (i = a && 2 === s ? 29 : y[s - 1]; l > i; )
                        (l -= i),
                            s++,
                            s > 12 && ((s -= 12), n++),
                            (i = a && 2 === s ? 29 : y[s - 1]);
                    for (; m < 0; ) (m += 60), h--;
                    for (; h < 0; ) (h += 24), l--;
                    for (; l < 1; )
                        s--,
                            s < 1 && ((s += 12), n--),
                            (i = a && 2 === s ? 29 : y[s - 1]),
                            (l += i);
                    var q = p(n, s, l, h, m, _, S);
                    return (
                        r(t) ? (d(q[0], q[1], t), f(t)) : (t = new E(q[0], q[1], c.UTC)),
                        B && E.addSeconds(t, 1, t),
                        t
                    );
                }),
                (E.now = function(e) {
                    return E.fromDate(new Date(), e);
                });
            var w = new E(0, 0, c.TAI);
            return (
                (E.toGregorianDate = function(e, t) {
                    var n = !1,
                        i = h(e, w);
                    r(i) || (E.addSeconds(e, -1, w), (i = h(w, w)), (n = !0));
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
                        y = (100 * (l - 49) + f + c) | 0,
                        _ = (u / s.SECONDS_PER_HOUR) | 0,
                        T = u - _ * s.SECONDS_PER_HOUR,
                        R = (T / s.SECONDS_PER_MINUTE) | 0;
                    T -= R * s.SECONDS_PER_MINUTE;
                    var v = 0 | T,
                        A = (T - v) / s.SECONDS_PER_MILLISECOND;
                    return (
                        (_ += 12),
                        _ > 23 && (_ -= 24),
                        n && (v += 1),
                        r(t)
                            ? ((t.year = y),
                              (t.month = m),
                              (t.day = p),
                              (t.hour = _),
                              (t.minute = R),
                              (t.second = v),
                              (t.millisecond = A),
                              (t.isLeapSecond = n),
                              t)
                            : new a(y, m, p, _, R, v, A, n)
                    );
                }),
                (E.toDate = function(e) {
                    var t = E.toGregorianDate(e, m),
                        n = t.second;
                    return (
                        t.isLeapSecond && (n -= 1),
                        new Date(
                            Date.UTC(t.year, t.month - 1, t.day, t.hour, t.minute, n, t.millisecond)
                        )
                    );
                }),
                (E.toIso8601 = function(t, n) {
                    var i = E.toGregorianDate(t, m),
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
                    return r(n) || 0 === f
                        ? r(n) && 0 !== n
                            ? ((h = (0.01 * f)
                                  .toFixed(n)
                                  .replace(".", "")
                                  .slice(0, n)),
                              e("%04d-%02d-%02dT%02d:%02d:%02d.%sZ", a, o, u, s, c, l, h))
                            : e("%04d-%02d-%02dT%02d:%02d:%02dZ", a, o, u, s, c, l)
                        : ((h = (0.01 * f).toString().replace(".", "")),
                          e("%04d-%02d-%02dT%02d:%02d:%02d.%sZ", a, o, u, s, c, l, h));
                }),
                (E.clone = function(e, t) {
                    if (r(e))
                        return r(t)
                            ? ((t.dayNumber = e.dayNumber), (t.secondsOfDay = e.secondsOfDay), t)
                            : new E(e.dayNumber, e.secondsOfDay, c.TAI);
                }),
                (E.compare = function(e, t) {
                    var n = e.dayNumber - t.dayNumber;
                    return 0 !== n ? n : e.secondsOfDay - t.secondsOfDay;
                }),
                (E.equals = function(e, t) {
                    return (
                        e === t ||
                        (r(e) &&
                            r(t) &&
                            e.dayNumber === t.dayNumber &&
                            e.secondsOfDay === t.secondsOfDay)
                    );
                }),
                (E.equalsEpsilon = function(e, t, n) {
                    return e === t || (r(e) && r(t) && Math.abs(E.secondsDifference(e, t)) <= n);
                }),
                (E.totalDays = function(e) {
                    return e.dayNumber + e.secondsOfDay / s.SECONDS_PER_DAY;
                }),
                (E.secondsDifference = function(e, t) {
                    return (
                        (e.dayNumber - t.dayNumber) * s.SECONDS_PER_DAY +
                        (e.secondsOfDay - t.secondsOfDay)
                    );
                }),
                (E.daysDifference = function(e, t) {
                    return (
                        e.dayNumber -
                        t.dayNumber +
                        (e.secondsOfDay - t.secondsOfDay) / s.SECONDS_PER_DAY
                    );
                }),
                (E.computeTaiMinusUtc = function(e) {
                    _.julianDate = e;
                    var n = E.leapSeconds,
                        r = t(n, _, l);
                    return r < 0 && ((r = ~r), --r < 0 && (r = 0)), n[r].offset;
                }),
                (E.addSeconds = function(e, t, n) {
                    return d(e.dayNumber, e.secondsOfDay + t, n);
                }),
                (E.addMinutes = function(e, t, n) {
                    var r = e.secondsOfDay + t * s.SECONDS_PER_MINUTE;
                    return d(e.dayNumber, r, n);
                }),
                (E.addHours = function(e, t, n) {
                    var r = e.secondsOfDay + t * s.SECONDS_PER_HOUR;
                    return d(e.dayNumber, r, n);
                }),
                (E.addDays = function(e, t, n) {
                    return d(e.dayNumber + t, e.secondsOfDay, n);
                }),
                (E.lessThan = function(e, t) {
                    return E.compare(e, t) < 0;
                }),
                (E.lessThanOrEquals = function(e, t) {
                    return E.compare(e, t) <= 0;
                }),
                (E.greaterThan = function(e, t) {
                    return E.compare(e, t) > 0;
                }),
                (E.greaterThanOrEquals = function(e, t) {
                    return E.compare(e, t) >= 0;
                }),
                (E.prototype.clone = function(e) {
                    return E.clone(this, e);
                }),
                (E.prototype.equals = function(e) {
                    return E.equals(this, e);
                }),
                (E.prototype.equalsEpsilon = function(e, t) {
                    return E.equalsEpsilon(this, e, t);
                }),
                (E.prototype.toString = function() {
                    return E.toIso8601(this);
                }),
                (E.leapSeconds = [
                    new u(new E(2441317, 43210, c.TAI), 10),
                    new u(new E(2441499, 43211, c.TAI), 11),
                    new u(new E(2441683, 43212, c.TAI), 12),
                    new u(new E(2442048, 43213, c.TAI), 13),
                    new u(new E(2442413, 43214, c.TAI), 14),
                    new u(new E(2442778, 43215, c.TAI), 15),
                    new u(new E(2443144, 43216, c.TAI), 16),
                    new u(new E(2443509, 43217, c.TAI), 17),
                    new u(new E(2443874, 43218, c.TAI), 18),
                    new u(new E(2444239, 43219, c.TAI), 19),
                    new u(new E(2444786, 43220, c.TAI), 20),
                    new u(new E(2445151, 43221, c.TAI), 21),
                    new u(new E(2445516, 43222, c.TAI), 22),
                    new u(new E(2446247, 43223, c.TAI), 23),
                    new u(new E(2447161, 43224, c.TAI), 24),
                    new u(new E(2447892, 43225, c.TAI), 25),
                    new u(new E(2448257, 43226, c.TAI), 26),
                    new u(new E(2448804, 43227, c.TAI), 27),
                    new u(new E(2449169, 43228, c.TAI), 28),
                    new u(new E(2449534, 43229, c.TAI), 29),
                    new u(new E(2450083, 43230, c.TAI), 30),
                    new u(new E(2450630, 43231, c.TAI), 31),
                    new u(new E(2451179, 43232, c.TAI), 32),
                    new u(new E(2453736, 43233, c.TAI), 33),
                    new u(new E(2454832, 43234, c.TAI), 34),
                    new u(new E(2456109, 43235, c.TAI), 35),
                    new u(new E(2457204, 43236, c.TAI), 36),
                    new u(new E(2457754, 43237, c.TAI), 37)
                ]),
                E
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
                    var n = r.exec(t);
                    (this.scheme = n[1]),
                        (this.authority = n[2]),
                        (this.path = n[3]),
                        (this.query = n[4]),
                        (this.fragment = n[5]);
                }
            }
            function t(e) {
                var t = unescape(e);
                return a.test(t) ? t : e.toUpperCase();
            }
            function n(e, t, n, r) {
                return (t || "") + n.toLowerCase() + (r || "");
            }
            (e.prototype.scheme = null),
                (e.prototype.authority = null),
                (e.prototype.path = ""),
                (e.prototype.query = null),
                (e.prototype.fragment = null);
            var r = new RegExp(
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
                            (this.authority = this.authority.replace(o, n).replace(i, t)),
                        this.path && (this.path = this.path.replace(i, t)),
                        this.query && (this.query = this.query.replace(i, t)),
                        this.fragment && (this.fragment = this.fragment.replace(i, t));
                });
            var i = /%[0-9a-z]{2}/gi,
                a = /[a-zA-Z0-9\-\._~]/,
                o = /(.*@)?([^@:]*)(:.*)?/;
            return (
                (e.prototype.resolve = function(t) {
                    var n = new e();
                    return (
                        this.scheme
                            ? ((n.scheme = this.scheme),
                              (n.authority = this.authority),
                              (n.path = this.path),
                              (n.query = this.query))
                            : ((n.scheme = t.scheme),
                              this.authority
                                  ? ((n.authority = this.authority),
                                    (n.path = this.path),
                                    (n.query = this.query))
                                  : ((n.authority = t.authority),
                                    "" == this.path
                                        ? ((n.path = t.path), (n.query = this.query || t.query))
                                        : ("/" == this.path.charAt(0)
                                              ? ((n.path = this.path), n.removeDotSegments())
                                              : (t.authority && "" == t.path
                                                    ? (n.path = "/" + this.path)
                                                    : (n.path =
                                                          t.path.substring(
                                                              0,
                                                              t.path.lastIndexOf("/") + 1
                                                          ) + this.path),
                                                n.removeDotSegments()),
                                          (n.query = this.query)))),
                        (n.fragment = this.fragment),
                        n
                    );
                }),
                (e.prototype.removeDotSegments = function() {
                    var e,
                        t = this.path.split("/"),
                        n = [],
                        r = "" == t[0];
                    r && t.shift();
                    for ("" == t[0] && t.shift(); t.length; )
                        (e = t.shift()), ".." == e ? n.pop() : "." != e && n.push(e);
                    ("." != e && ".." != e) || n.push(""),
                        r && n.unshift(""),
                        (this.path = n.join("/"));
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
            function t(n, r) {
                if (null === n || "object" != typeof n) return n;
                r = e(r, !1);
                var i = new n.constructor();
                for (var a in n)
                    if (n.hasOwnProperty(a)) {
                        var o = n[a];
                        r && (o = t(o, r)), (i[a] = o);
                    }
                return i;
            }
            return t;
        }),
        define("Core/combine", ["./defaultValue", "./defined"], function(e, t) {
            "use strict";
            function n(r, i, a) {
                a = e(a, !1);
                var o,
                    u,
                    s,
                    c = {},
                    l = t(r),
                    f = t(i);
                if (l)
                    for (o in r)
                        r.hasOwnProperty(o) &&
                            ((u = r[o]),
                            f && a && "object" == typeof u && i.hasOwnProperty(o)
                                ? ((s = i[o]), (c[o] = "object" == typeof s ? n(u, s, a) : u))
                                : (c[o] = u));
                if (f)
                    for (o in i)
                        i.hasOwnProperty(o) && !c.hasOwnProperty(o) && ((s = i[o]), (c[o] = s));
                return c;
            }
            return n;
        }),
        define("Core/getAbsoluteUri", [
            "../ThirdParty/Uri",
            "./defaultValue",
            "./defined",
            "./DeveloperError"
        ], function(e, t, n, r) {
            "use strict";
            function i(e, t) {
                var n;
                return "undefined" != typeof document && (n = document), i._implementation(e, t, n);
            }
            return (
                (i._implementation = function(r, i, a) {
                    if (!n(i)) {
                        if (void 0 === a) return r;
                        i = t(a.baseURI, a.location.href);
                    }
                    var o = new e(i);
                    return new e(r).resolve(o).toString();
                }),
                i
            );
        }),
        define("Core/getBaseUri", ["../ThirdParty/Uri", "./defined", "./DeveloperError"], function(
            e,
            t,
            n
        ) {
            "use strict";
            function r(n, r) {
                var i = "",
                    a = n.lastIndexOf("/");
                return (
                    -1 !== a && (i = n.substring(0, a + 1)),
                    r
                        ? ((n = new e(n)),
                          t(n.query) && (i += "?" + n.query),
                          t(n.fragment) && (i += "#" + n.fragment),
                          i)
                        : i
                );
            }
            return r;
        }),
        define("Core/getExtensionFromUri", [
            "../ThirdParty/Uri",
            "./defined",
            "./DeveloperError"
        ], function(e, t, n) {
            "use strict";
            function r(t) {
                var n = new e(t);
                n.normalize();
                var r = n.path,
                    i = r.lastIndexOf("/");
                return (
                    -1 !== i && (r = r.substr(i + 1)),
                    (i = r.lastIndexOf(".")),
                    (r = -1 === i ? "" : r.substr(i + 1))
                );
            }
            return r;
        }),
        define("Core/isBlobUri", ["./Check"], function(e) {
            "use strict";
            function t(e) {
                return n.test(e);
            }
            var n = /^blob:/i;
            return t;
        }),
        define("Core/isCrossOriginUrl", ["./defined"], function(e) {
            "use strict";
            function t(t) {
                e(n) || (n = document.createElement("a")), (n.href = window.location.href);
                var r = n.host,
                    i = n.protocol;
                return (n.href = t), (n.href = n.href), i !== n.protocol || r !== n.host;
            }
            var n;
            return t;
        }),
        define("Core/isDataUri", ["./Check"], function(e) {
            "use strict";
            function t(e) {
                return n.test(e);
            }
            var n = /^data:/i;
            return t;
        }),
        define("Core/loadAndExecuteScript", ["../ThirdParty/when"], function(e) {
            "use strict";
            function t(t) {
                var n = e.defer(),
                    r = document.createElement("script");
                (r.async = !0), (r.src = t);
                var i = document.getElementsByTagName("head")[0];
                return (
                    (r.onload = function() {
                        (r.onload = void 0), i.removeChild(r), n.resolve();
                    }),
                    (r.onerror = function(e) {
                        n.reject(e);
                    }),
                    i.appendChild(r),
                    n.promise
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
            n
        ) {
            "use strict";
            function r(e) {
                var t = "";
                for (var r in e)
                    if (e.hasOwnProperty(r)) {
                        var i = e[r],
                            a = encodeURIComponent(r) + "=";
                        if (n(i))
                            for (var o = 0, u = i.length; o < u; ++o)
                                t += a + encodeURIComponent(i[o]) + "&";
                        else t += a + encodeURIComponent(i) + "&";
                    }
                return (t = t.slice(0, -1));
            }
            return r;
        }),
        define("Core/queryToObject", ["./defined", "./DeveloperError", "./isArray"], function(
            e,
            t,
            n
        ) {
            "use strict";
            function r(t) {
                var r = {};
                if ("" === t) return r;
                for (
                    var i = t.replace(/\+/g, "%20").split(/[&;]/), a = 0, o = i.length;
                    a < o;
                    ++a
                ) {
                    var u = i[a].split("="),
                        s = decodeURIComponent(u[0]),
                        c = u[1];
                    c = e(c) ? decodeURIComponent(c) : "";
                    var l = r[s];
                    "string" == typeof l ? (r[s] = [l, c]) : n(l) ? l.push(c) : (r[s] = c);
                }
                return r;
            }
            return r;
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
        ], function(e, t, n, r) {
            "use strict";
            function i(t) {
                t = e(t, e.EMPTY_OBJECT);
                var i = e(t.throttleByServer, !1),
                    a = e(t.throttle, !1);
                (this.url = t.url),
                    (this.requestFunction = t.requestFunction),
                    (this.cancelFunction = t.cancelFunction),
                    (this.priorityFunction = t.priorityFunction),
                    (this.priority = e(t.priority, 0)),
                    (this.throttle = a),
                    (this.throttleByServer = i),
                    (this.type = e(t.type, r.OTHER)),
                    (this.serverKey = void 0),
                    (this.state = n.UNISSUED),
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
                for (var n = e.split("\r\n"), r = 0; r < n.length; ++r) {
                    var i = n[r],
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
            function n(e, n, r) {
                (this.statusCode = e),
                    (this.response = n),
                    (this.responseHeaders = r),
                    "string" == typeof this.responseHeaders &&
                        (this.responseHeaders = t(this.responseHeaders));
            }
            return (
                (n.prototype.toString = function() {
                    var t = "Request has failed.";
                    return e(this.statusCode) && (t += " Status Code: " + this.statusCode), t;
                }),
                n
            );
        }),
        define("Core/Event", ["./Check", "./defined", "./defineProperties"], function(e, t, n) {
            "use strict";
            function r() {
                (this._listeners = []),
                    (this._scopes = []),
                    (this._toRemove = []),
                    (this._insideRaiseEvent = !1);
            }
            function i(e, t) {
                return t - e;
            }
            return (
                n(r.prototype, {
                    numberOfListeners: {
                        get: function() {
                            return this._listeners.length - this._toRemove.length;
                        }
                    }
                }),
                (r.prototype.addEventListener = function(e, t) {
                    this._listeners.push(e), this._scopes.push(t);
                    var n = this;
                    return function() {
                        n.removeEventListener(e, t);
                    };
                }),
                (r.prototype.removeEventListener = function(e, t) {
                    for (
                        var n = this._listeners, r = this._scopes, i = -1, a = 0;
                        a < n.length;
                        a++
                    )
                        if (n[a] === e && r[a] === t) {
                            i = a;
                            break;
                        }
                    return (
                        -1 !== i &&
                        (this._insideRaiseEvent
                            ? (this._toRemove.push(i), (n[i] = void 0), (r[i] = void 0))
                            : (n.splice(i, 1), r.splice(i, 1)),
                        !0)
                    );
                }),
                (r.prototype.raiseEvent = function() {
                    this._insideRaiseEvent = !0;
                    var e,
                        n = this._listeners,
                        r = this._scopes,
                        a = n.length;
                    for (e = 0; e < a; e++) {
                        var o = n[e];
                        t(o) && n[e].apply(r[e], arguments);
                    }
                    var u = this._toRemove;
                    if ((a = u.length) > 0) {
                        for (u.sort(i), e = 0; e < a; e++) {
                            var s = u[e];
                            n.splice(s, 1), r.splice(s, 1);
                        }
                        u.length = 0;
                    }
                    this._insideRaiseEvent = !1;
                }),
                r
            );
        }),
        define("Core/Heap", [
            "./Check",
            "./defaultValue",
            "./defined",
            "./defineProperties"
        ], function(e, t, n, r) {
            "use strict";
            function i(e) {
                (this._comparator = e.comparator),
                    (this._array = []),
                    (this._length = 0),
                    (this._maximumLength = void 0);
            }
            function a(e, t, n) {
                var r = e[t];
                (e[t] = e[n]), (e[n] = r);
            }
            return (
                r(i.prototype, {
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
                        var n = this._length, r = this._comparator, i = this._array, o = -1, u = !0;
                        u;

                    ) {
                        var s = 2 * (e + 1),
                            c = s - 1;
                        (o = c < n && r(i[c], i[e]) < 0 ? c : e),
                            s < n && r(i[s], i[o]) < 0 && (o = s),
                            o !== e ? (a(i, o, e), (e = o)) : (u = !1);
                    }
                }),
                (i.prototype.resort = function() {
                    for (var e = this._length, t = Math.ceil(e / 2); t >= 0; --t) this.heapify(t);
                }),
                (i.prototype.insert = function(e) {
                    var t = this._array,
                        r = this._comparator,
                        i = this._maximumLength,
                        o = this._length++;
                    for (o < t.length ? (t[o] = e) : t.push(e); 0 !== o; ) {
                        var u = Math.floor((o - 1) / 2);
                        if (!(r(t[o], t[u]) < 0)) break;
                        a(t, o, u), (o = u);
                    }
                    var s;
                    return n(i) && this._length > i && ((s = t[i]), (this._length = i)), s;
                }),
                (i.prototype.pop = function(e) {
                    if (((e = t(e, 0)), 0 !== this._length)) {
                        var n = this._array,
                            r = n[e];
                        return a(n, e, --this._length), this.heapify(e), r;
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
        ], function(e, t, n, r, i, a, o, u, s, c, l) {
            "use strict";
            function f(e, t) {
                return e.priority - t.priority;
            }
            function h() {}
            function d(e) {
                i(e.priorityFunction) && (e.priority = e.priorityFunction());
            }
            function p(e) {
                var t = r(h.requestsByServer[e], h.maximumRequestsPerServer);
                return O[e] < t;
            }
            function E(e) {
                return (
                    e.state === l.UNISSUED && ((e.state = l.ISSUED), (e.deferred = t.defer())),
                    e.deferred.promise
                );
            }
            function m(e) {
                return function(t) {
                    e.state !== l.CANCELLED &&
                        (--v.numberOfActiveRequests,
                        --O[e.serverKey],
                        I.raiseEvent(),
                        (e.state = l.RECEIVED),
                        e.deferred.resolve(t));
                };
            }
            function y(e) {
                return function(t) {
                    e.state !== l.CANCELLED &&
                        (++v.numberOfFailedRequests,
                        --v.numberOfActiveRequests,
                        --O[e.serverKey],
                        I.raiseEvent(t),
                        (e.state = l.FAILED),
                        e.deferred.reject(t));
                };
            }
            function _(e) {
                var t = E(e);
                return (
                    (e.state = l.ACTIVE),
                    S.push(e),
                    ++v.numberOfActiveRequests,
                    ++v.numberOfActiveRequestsEver,
                    ++O[e.serverKey],
                    e
                        .requestFunction()
                        .then(m(e))
                        .otherwise(y(e)),
                    t
                );
            }
            function T(e) {
                var t = e.state === l.ACTIVE;
                (e.state = l.CANCELLED),
                    ++v.numberOfCancelledRequests,
                    e.deferred.reject(),
                    t &&
                        (--v.numberOfActiveRequests,
                        --O[e.serverKey],
                        ++v.numberOfCancelledActiveRequests),
                    i(e.cancelFunction) && e.cancelFunction();
            }
            function R() {
                h.debugShowStatistics &&
                    (0 === v.numberOfActiveRequests &&
                        v.lastNumberOfActiveRequests > 0 &&
                        (v.numberOfAttemptedRequests > 0 &&
                            (console.log(
                                "Number of attempted requests: " + v.numberOfAttemptedRequests
                            ),
                            (v.numberOfAttemptedRequests = 0)),
                        v.numberOfCancelledRequests > 0 &&
                            (console.log(
                                "Number of cancelled requests: " + v.numberOfCancelledRequests
                            ),
                            (v.numberOfCancelledRequests = 0)),
                        v.numberOfCancelledActiveRequests > 0 &&
                            (console.log(
                                "Number of cancelled active requests: " +
                                    v.numberOfCancelledActiveRequests
                            ),
                            (v.numberOfCancelledActiveRequests = 0)),
                        v.numberOfFailedRequests > 0 &&
                            (console.log("Number of failed requests: " + v.numberOfFailedRequests),
                            (v.numberOfFailedRequests = 0))),
                    (v.lastNumberOfActiveRequests = v.numberOfActiveRequests));
            }
            var v = {
                    numberOfAttemptedRequests: 0,
                    numberOfActiveRequests: 0,
                    numberOfCancelledRequests: 0,
                    numberOfCancelledActiveRequests: 0,
                    numberOfFailedRequests: 0,
                    numberOfActiveRequestsEver: 0,
                    lastNumberOfActiveRequests: 0
                },
                A = 20,
                g = new u({ comparator: f });
            (g.maximumLength = A), g.reserve(A);
            var S = [],
                O = {},
                M = "undefined" != typeof document ? new e(document.location.href) : new e(),
                I = new o();
            return (
                (h.maximumRequests = 50),
                (h.maximumRequestsPerServer = 6),
                (h.requestsByServer = { "api.cesium.com:443": 18, "assets.cesium.com:443": 18 }),
                (h.throttleRequests = !0),
                (h.debugShowStatistics = !1),
                (h.requestCompletedEvent = I),
                a(h, {
                    statistics: {
                        get: function() {
                            return v;
                        }
                    },
                    priorityHeapLength: {
                        get: function() {
                            return A;
                        },
                        set: function(e) {
                            if (e < A)
                                for (; g.length > e; ) {
                                    var t = g.pop();
                                    T(t);
                                }
                            (A = e), (g.maximumLength = e), g.reserve(e);
                        }
                    }
                }),
                (h.update = function() {
                    var e,
                        t,
                        n = 0,
                        r = S.length;
                    for (e = 0; e < r; ++e)
                        (t = S[e]),
                            t.cancelled && T(t),
                            t.state === l.ACTIVE ? n > 0 && (S[e - n] = t) : ++n;
                    S.length -= n;
                    var i = g.internalArray,
                        a = g.length;
                    for (e = 0; e < a; ++e) d(i[e]);
                    g.resort();
                    for (
                        var o = Math.max(h.maximumRequests - S.length, 0), u = 0;
                        u < o && g.length > 0;

                    )
                        (t = g.pop()),
                            t.cancelled
                                ? T(t)
                                : !t.throttleByServer || p(t.serverKey)
                                ? (_(t), ++u)
                                : T(t);
                    R();
                }),
                (h.getServerKey = function(t) {
                    var n = new e(t).resolve(M);
                    n.normalize();
                    var r = n.authority;
                    /:/.test(r) || (r = r + ":" + ("https" === n.scheme ? "443" : "80"));
                    var a = O[r];
                    return i(a) || (O[r] = 0), r;
                }),
                (h.request = function(e) {
                    if (c(e.url) || s(e.url))
                        return I.raiseEvent(), (e.state = l.RECEIVED), e.requestFunction();
                    if (
                        (++v.numberOfAttemptedRequests,
                        i(e.serverKey) || (e.serverKey = h.getServerKey(e.url)),
                        !e.throttleByServer || p(e.serverKey))
                    ) {
                        if (!h.throttleRequests || !e.throttle) return _(e);
                        if (!(S.length >= h.maximumRequests)) {
                            d(e);
                            var t = g.insert(e);
                            if (i(t)) {
                                if (t === e) return;
                                T(t);
                            }
                            return E(e);
                        }
                    }
                }),
                (h.clearForSpecs = function() {
                    for (; g.length > 0; ) {
                        T(g.pop());
                    }
                    for (var e = S.length, t = 0; t < e; ++t) T(S[t]);
                    (S.length = 0),
                        (O = {}),
                        (v.numberOfAttemptedRequests = 0),
                        (v.numberOfActiveRequests = 0),
                        (v.numberOfCancelledRequests = 0),
                        (v.numberOfCancelledActiveRequests = 0),
                        (v.numberOfFailedRequests = 0),
                        (v.numberOfActiveRequestsEver = 0),
                        (v.lastNumberOfActiveRequests = 0);
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
        ], function(e, t, n) {
            "use strict";
            function r(n) {
                var r = new e(n);
                r.normalize();
                var i = r.getAuthority();
                if (t(i)) {
                    if (-1 !== i.indexOf("@")) {
                        i = i.split("@")[1];
                    }
                    if (-1 === i.indexOf(":")) {
                        var a = r.getScheme();
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
                (i.add = function(e, n) {
                    var r = e.toLowerCase() + ":" + n;
                    t(a[r]) || (a[r] = !0);
                }),
                (i.remove = function(e, n) {
                    var r = e.toLowerCase() + ":" + n;
                    t(a[r]) && delete a[r];
                }),
                (i.contains = function(e) {
                    var n = r(e);
                    return !(!t(n) || !t(a[n]));
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
            "./DeveloperError",
            "./freezeObject",
            "./FeatureDetection",
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
            n,
            r,
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
            E,
            m,
            y,
            _,
            T,
            R,
            v,
            A,
            g,
            S,
            O,
            M
        ) {
            "use strict";
            function I(e, t, n, r) {
                var i = e.query;
                if (!u(i) || 0 === i.length) return {};
                var a;
                if (-1 === i.indexOf("=")) {
                    var o = {};
                    (o[i] = void 0), (a = o);
                } else a = R(i);
                (t._queryParameters = n ? C(a, t._queryParameters, r) : a), (e.query = void 0);
            }
            function w(e, t) {
                var n = t._queryParameters,
                    r = Object.keys(n);
                1 !== r.length || u(n[r[0]]) ? (e.query = T(n)) : (e.query = r[0]);
            }
            function N(e, t) {
                return u(e) ? (u(e.clone) ? e.clone() : i(e)) : t;
            }
            function x(e) {
                if (e.state === S.ISSUED || e.state === S.ACTIVE)
                    throw new O("The Resource is already being fetched.");
                (e.state = S.UNISSUED), (e.deferred = void 0);
            }
            function C(e, t, n) {
                if (!n) return a(e, t);
                var r = i(e, !0);
                for (var o in t)
                    if (t.hasOwnProperty(o)) {
                        var s = r[o],
                            c = t[o];
                        u(s)
                            ? (Array.isArray(s) || (s = r[o] = [s]), (r[o] = s.concat(c)))
                            : (r[o] = Array.isArray(c) ? c.slice() : c);
                    }
                return r;
            }
            function P(t) {
                (t = o(t, o.EMPTY_OBJECT)),
                    "string" == typeof t && (t = { url: t }),
                    (this._url = void 0),
                    (this._templateValues = N(t.templateValues, {})),
                    (this._queryParameters = N(t.queryParameters, {})),
                    (this.headers = N(t.headers, {})),
                    (this.request = o(t.request, new v())),
                    (this.proxy = t.proxy),
                    (this.retryCallback = t.retryCallback),
                    (this.retryAttempts = o(t.retryAttempts, 0)),
                    (this._retryCount = 0);
                var n = new e(t.url);
                I(n, this, !0, !0), (n.fragment = void 0), (this._url = n.toString());
            }
            function U(e) {
                var n = e.resource,
                    r = e.flipY,
                    i = e.preferImageBitmap,
                    a = n.request;
                (a.url = n.url),
                    (a.requestFunction = function() {
                        var e = n.url,
                            a = !1;
                        n.isDataUri || n.isBlobUri || (a = n.isCrossOriginUrl);
                        var o = t.defer();
                        return P._Implementations.createImage(e, a, o, r, i), o.promise;
                    });
                var o = g.request(a);
                if (u(o))
                    return o.otherwise(function(e) {
                        return a.state !== S.FAILED
                            ? t.reject(e)
                            : n.retryOnError(e).then(function(o) {
                                  return o
                                      ? ((a.state = S.UNISSUED),
                                        (a.deferred = void 0),
                                        U({ resource: n, flipY: r, preferImageBitmap: i }))
                                      : t.reject(e);
                              });
                    });
            }
            function D(e, n, r) {
                var i = {};
                (i[n] = r), e.setQueryParameters(i);
                var a = e.request;
                (a.url = e.url),
                    (a.requestFunction = function() {
                        var n = t.defer();
                        return (
                            (window[r] = function(e) {
                                n.resolve(e);
                                try {
                                    delete window[r];
                                } catch (e) {
                                    window[r] = void 0;
                                }
                            }),
                            P._Implementations.loadAndExecuteScript(e.url, r, n),
                            n.promise
                        );
                    });
                var o = g.request(a);
                if (u(o))
                    return o.otherwise(function(i) {
                        return a.state !== S.FAILED
                            ? t.reject(i)
                            : e.retryOnError(i).then(function(o) {
                                  return o
                                      ? ((a.state = S.UNISSUED), (a.deferred = void 0), D(e, n, r))
                                      : t.reject(i);
                              });
                    });
            }
            function L(e, t) {
                var n = decodeURIComponent(t);
                return e ? atob(n) : n;
            }
            function F(e, t) {
                for (
                    var n = L(e, t), r = new ArrayBuffer(n.length), i = new Uint8Array(r), a = 0;
                    a < n.length;
                    a++
                )
                    i[a] = n.charCodeAt(a);
                return r;
            }
            function b(e, t) {
                t = o(t, "");
                var n = e[1],
                    r = !!e[2],
                    i = e[3];
                switch (t) {
                    case "":
                    case "text":
                        return L(r, i);
                    case "arraybuffer":
                        return F(r, i);
                    case "blob":
                        var a = F(r, i);
                        return new Blob([a], { type: n });
                    case "document":
                        return new DOMParser().parseFromString(L(r, i), n);
                    case "json":
                        return JSON.parse(L(r, i));
                }
            }
            function B(e, t, n) {
                var r = new Image();
                (r.onload = function() {
                    n.resolve(r);
                }),
                    (r.onerror = function(e) {
                        n.reject(e);
                    }),
                    t &&
                        (M.contains(e)
                            ? (r.crossOrigin = "use-credentials")
                            : (r.crossOrigin = "")),
                    (r.src = e);
            }
            function q(e, t) {
                switch (t) {
                    case "text":
                        return e.toString("utf8");
                    case "json":
                        return JSON.parse(e.toString("utf8"));
                    default:
                        return new Uint8Array(e).buffer;
                }
            }
            function z(e, t, n, r, i, a, o) {
                var u = global.require,
                    s = u("url").parse(e),
                    c = u("https:" === s.protocol ? "https" : "http"),
                    l = u("zlib"),
                    f = {
                        protocol: s.protocol,
                        hostname: s.hostname,
                        port: s.port,
                        path: s.path,
                        query: s.query,
                        method: n,
                        headers: i
                    };
                c.request(f)
                    .on("response", function(e) {
                        if (e.statusCode < 200 || e.statusCode >= 300)
                            return void a.reject(new A(e.statusCode, e, e.headers));
                        var n = [];
                        e.on("data", function(e) {
                            n.push(e);
                        }),
                            e.on("end", function() {
                                var r = Buffer.concat(n);
                                "gzip" === e.headers["content-encoding"]
                                    ? l.gunzip(r, function(e, n) {
                                          e
                                              ? a.reject(new O("Error decompressing response."))
                                              : a.resolve(q(n, t));
                                      })
                                    : a.resolve(q(r, t));
                            });
                    })
                    .on("error", function(e) {
                        a.reject(new A());
                    })
                    .end();
            }
            var G = (function() {
                try {
                    var e = new XMLHttpRequest();
                    return (
                        e.open("GET", "#", !0), (e.responseType = "blob"), "blob" === e.responseType
                    );
                } catch (e) {
                    return !1;
                }
            })();
            P.createIfNeeded = function(e) {
                return e instanceof P
                    ? e.getDerivedResource({ request: e.request })
                    : "string" != typeof e
                    ? e
                    : new P({ url: e });
            };
            var V;
            (P.supportsImageBitmapOptions = function() {
                if (u(V)) return V;
                if ("function" != typeof createImageBitmap) return (V = t.resolve(!1));
                return (V = P.fetchBlob({
                    url:
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWP4////fwAJ+wP9CNHoHgAAAABJRU5ErkJggg=="
                })
                    .then(function(e) {
                        return createImageBitmap(e, {
                            imageOrientation: "flipY",
                            premultiplyAlpha: "none"
                        });
                    })
                    .then(function(e) {
                        return !0;
                    })
                    .otherwise(function() {
                        return !1;
                    }));
            }),
                s(P, {
                    isBlobSupported: {
                        get: function() {
                            return G;
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
                            var n = new e(t);
                            I(n, this, !1), (n.fragment = void 0), (this._url = n.toString());
                        }
                    },
                    extension: {
                        get: function() {
                            return p(this._url);
                        }
                    },
                    isDataUri: {
                        get: function() {
                            return y(this._url);
                        }
                    },
                    isBlobUri: {
                        get: function() {
                            return E(this._url);
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
                (P.prototype.getUrlComponent = function(t, n) {
                    if (this.isDataUri) return this._url;
                    var r = new e(this._url);
                    t && w(r, this);
                    var i = r
                            .toString()
                            .replace(/%7B/g, "{")
                            .replace(/%7D/g, "}"),
                        a = this._templateValues;
                    return (
                        (i = i.replace(/{(.*?)}/g, function(e, t) {
                            var n = a[t];
                            return u(n) ? encodeURIComponent(n) : e;
                        })),
                        n && u(this.proxy) && (i = this.proxy.getURL(i)),
                        i
                    );
                }),
                (P.prototype.setQueryParameters = function(e, t) {
                    this._queryParameters = t
                        ? C(this._queryParameters, e, !1)
                        : C(e, this._queryParameters, !1);
                }),
                (P.prototype.appendQueryParameters = function(e) {
                    this._queryParameters = C(e, this._queryParameters, !0);
                }),
                (P.prototype.setTemplateValues = function(e, t) {
                    this._templateValues = t
                        ? a(this._templateValues, e)
                        : a(e, this._templateValues);
                }),
                (P.prototype.getDerivedResource = function(t) {
                    var n = this.clone();
                    if (((n._retryCount = 0), u(t.url))) {
                        var r = new e(t.url);
                        I(r, n, !0, o(t.preserveQueryParameters, !1)),
                            (r.fragment = void 0),
                            (n._url = r.resolve(new e(h(this._url))).toString());
                    }
                    return (
                        u(t.queryParameters) &&
                            (n._queryParameters = a(t.queryParameters, n._queryParameters)),
                        u(t.templateValues) &&
                            (n._templateValues = a(t.templateValues, n.templateValues)),
                        u(t.headers) && (n.headers = a(t.headers, n.headers)),
                        u(t.proxy) && (n.proxy = t.proxy),
                        u(t.request) && (n.request = t.request),
                        u(t.retryCallback) && (n.retryCallback = t.retryCallback),
                        u(t.retryAttempts) && (n.retryAttempts = t.retryAttempts),
                        n
                    );
                }),
                (P.prototype.retryOnError = function(e) {
                    var n = this.retryCallback;
                    if ("function" != typeof n || this._retryCount >= this.retryAttempts)
                        return t(!1);
                    var r = this;
                    return t(n(this, e)).then(function(e) {
                        return ++r._retryCount, e;
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
                    this._url = n(this._url);
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
                    e = o(e, o.EMPTY_OBJECT);
                    var n = o(e.preferImageBitmap, !1),
                        r = o(e.preferBlob, !1),
                        i = o(e.flipY, !1);
                    if (
                        (x(this.request),
                        !G || this.isDataUri || this.isBlobUri || (!this.hasHeaders && !r))
                    )
                        return U({ resource: this, flipY: i, preferImageBitmap: n });
                    var a = this.fetchBlob();
                    if (u(a)) {
                        var s, c, l, f;
                        return P.supportsImageBitmapOptions()
                            .then(function(e) {
                                return (s = e), (c = s && n), a;
                            })
                            .then(function(e) {
                                if (u(e)) {
                                    if (((f = e), c))
                                        return P.createImageBitmapFromBlob(e, {
                                            flipY: i,
                                            premultiplyAlpha: !1
                                        });
                                    var t = window.URL.createObjectURL(e);
                                    return (
                                        (l = new P({ url: t })),
                                        U({ resource: l, flipY: i, preferImageBitmap: !1 })
                                    );
                                }
                            })
                            .then(function(e) {
                                if (u(e))
                                    return (
                                        (e.blob = f), c ? e : (window.URL.revokeObjectURL(l.url), e)
                                    );
                            })
                            .otherwise(function(e) {
                                return u(l) && window.URL.revokeObjectURL(l.url), t.reject(e);
                            });
                    }
                }),
                (P.fetchImage = function(e) {
                    return new P(e).fetchImage({
                        flipY: e.flipY,
                        preferBlob: e.preferBlob,
                        preferImageBitmap: e.preferImageBitmap
                    });
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
                    (e = o(e, "callback")), x(this.request);
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
                    var n = this;
                    x(n.request);
                    var r = n.request;
                    (r.url = n.url),
                        (r.requestFunction = function() {
                            var i = e.responseType,
                                o = a(e.headers, n.headers),
                                s = e.overrideMimeType,
                                c = e.method,
                                l = e.data,
                                f = t.defer(),
                                h = P._Implementations.loadWithXhr(n.url, i, c, l, o, f, s);
                            return (
                                u(h) &&
                                    u(h.abort) &&
                                    (r.cancelFunction = function() {
                                        h.abort();
                                    }),
                                f.promise
                            );
                        });
                    var i = g.request(r);
                    if (u(i))
                        return i
                            .then(function(e) {
                                return e;
                            })
                            .otherwise(function(i) {
                                return r.state !== S.FAILED
                                    ? t.reject(i)
                                    : n.retryOnError(i).then(function(a) {
                                          return a
                                              ? ((r.state = S.UNISSUED),
                                                (r.deferred = void 0),
                                                n.fetch(e))
                                              : t.reject(i);
                                      });
                            });
                });
            var W = /^data:(.*?)(;base64)?,(.*)$/;
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
                        r.defined("data", e),
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
                        r.defined("data", e),
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
                        r.defined("data", e),
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
                (P._Implementations.createImage = function(e, t, n, r, i) {
                    P.supportsImageBitmapOptions()
                        .then(function(r) {
                            return r && i ? P.fetchBlob({ url: e }) : void B(e, t, n);
                        })
                        .then(function(e) {
                            if (u(e))
                                return P.createImageBitmapFromBlob(e, {
                                    flipY: r,
                                    premultiplyAlpha: !1
                                });
                        })
                        .then(function(e) {
                            u(e) && n.resolve(e);
                        })
                        .otherwise(n.reject);
                }),
                (P.createImageBitmapFromBlob = function(e, t) {
                    return (
                        r.defined("options", t),
                        r.typeOf.bool("options.flipY", t.flipY),
                        r.typeOf.bool("options.premultiplyAlpha", t.premultiplyAlpha),
                        createImageBitmap(e, {
                            imageOrientation: t.flipY ? "flipY" : "none",
                            premultiplyAlpha: t.premultiplyAlpha ? "premultiply" : "none"
                        })
                    );
                });
            var X = "undefined" == typeof XMLHttpRequest;
            return (
                (P._Implementations.loadWithXhr = function(e, t, n, r, i, a, o) {
                    var s = W.exec(e);
                    if (null !== s) return void a.resolve(b(s, t));
                    if (X) return void z(e, t, n, r, i, a, o);
                    var c = new XMLHttpRequest();
                    if (
                        (M.contains(e) && (c.withCredentials = !0),
                        c.open(n, e, !0),
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
                                r = c.responseType;
                            if ("HEAD" === n || "OPTIONS" === n) {
                                var i = c.getAllResponseHeaders(),
                                    o = i.trim().split(/[\r\n]+/),
                                    s = {};
                                return (
                                    o.forEach(function(e) {
                                        var t = e.split(": "),
                                            n = t.shift();
                                        s[n] = t.join(": ");
                                    }),
                                    void a.resolve(s)
                                );
                            }
                            if (204 === c.status) a.resolve();
                            else if (!u(e) || (u(t) && r !== t))
                                if ("json" === t && "string" == typeof e)
                                    try {
                                        a.resolve(JSON.parse(e));
                                    } catch (e) {
                                        a.reject(e);
                                    }
                                else
                                    ("" === r || "document" === r) &&
                                    u(c.responseXML) &&
                                    c.responseXML.hasChildNodes()
                                        ? a.resolve(c.responseXML)
                                        : ("" !== r && "text" !== r) || !u(c.responseText)
                                        ? a.reject(new O("Invalid XMLHttpRequest response type."))
                                        : a.resolve(c.responseText);
                            else a.resolve(e);
                        }),
                        (c.onerror = function(e) {
                            a.reject(new A());
                        }),
                        c.send(r),
                        c
                    );
                }),
                (P._Implementations.loadAndExecuteScript = function(e, t, n) {
                    return _(e, t).otherwise(n.reject);
                }),
                (P._DefaultImplementations = {}),
                (P._DefaultImplementations.createImage = P._Implementations.createImage),
                (P._DefaultImplementations.loadWithXhr = P._Implementations.loadWithXhr),
                (P._DefaultImplementations.loadAndExecuteScript =
                    P._Implementations.loadAndExecuteScript),
                (P.DEFAULT = l(
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
        ], function(e, t, n, r, i, a, o, u, s, c, l, f) {
            "use strict";
            function h(t) {
                if (
                    ((t = n(t, n.EMPTY_OBJECT)),
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
                    (this._addNewLeapSeconds = n(t.addNewLeapSeconds, !0)),
                    r(t.data))
                )
                    p(this, t.data);
                else if (r(t.url)) {
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
            function p(e, n) {
                if (!r(n.columnNames))
                    return void (e._dataError =
                        "Error in loaded EOP data: The columnNames property is required.");
                if (!r(n.samples))
                    return void (e._dataError =
                        "Error in loaded EOP data: The samples property is required.");
                var i = n.columnNames.indexOf("modifiedJulianDateUtc"),
                    a = n.columnNames.indexOf("xPoleWanderRadians"),
                    s = n.columnNames.indexOf("yPoleWanderRadians"),
                    c = n.columnNames.indexOf("ut1MinusUtcSeconds"),
                    h = n.columnNames.indexOf("xCelestialPoleOffsetRadians"),
                    p = n.columnNames.indexOf("yCelestialPoleOffsetRadians"),
                    E = n.columnNames.indexOf("taiMinusUtcSeconds");
                if (i < 0 || a < 0 || s < 0 || c < 0 || h < 0 || p < 0 || E < 0)
                    return void (e._dataError =
                        "Error in loaded EOP data: The columnNames property must include modifiedJulianDateUtc, xPoleWanderRadians, yPoleWanderRadians, ut1MinusUtcSeconds, xCelestialPoleOffsetRadians, yCelestialPoleOffsetRadians, and taiMinusUtcSeconds columns");
                var m = (e._samples = n.samples),
                    y = (e._dates = []);
                (e._dateColumn = i),
                    (e._xPoleWanderRadiansColumn = a),
                    (e._yPoleWanderRadiansColumn = s),
                    (e._ut1MinusUtcSecondsColumn = c),
                    (e._xCelestialPoleOffsetRadiansColumn = h),
                    (e._yCelestialPoleOffsetRadiansColumn = p),
                    (e._taiMinusUtcSecondsColumn = E),
                    (e._columnCount = n.columnNames.length),
                    (e._lastIndex = void 0);
                for (
                    var _, T = e._addNewLeapSeconds, R = 0, v = m.length;
                    R < v;
                    R += e._columnCount
                ) {
                    var A = m[R + i],
                        g = m[R + E],
                        S = A + l.MODIFIED_JULIAN_DATE_DIFFERENCE,
                        O = new o(S, g, f.TAI);
                    if ((y.push(O), T)) {
                        if (g !== _ && r(_)) {
                            var M = o.leapSeconds,
                                I = t(M, O, d);
                            if (I < 0) {
                                var w = new u(O, g);
                                M.splice(~I, 0, w);
                            }
                        }
                        _ = g;
                    }
                }
            }
            function E(e, t, n, r, i) {
                var a = n * r;
                (i.xPoleWander = t[a + e._xPoleWanderRadiansColumn]),
                    (i.yPoleWander = t[a + e._yPoleWanderRadiansColumn]),
                    (i.xPoleOffset = t[a + e._xCelestialPoleOffsetRadiansColumn]),
                    (i.yPoleOffset = t[a + e._yCelestialPoleOffsetRadiansColumn]),
                    (i.ut1MinusUtc = t[a + e._ut1MinusUtcSecondsColumn]);
            }
            function m(e, t, n) {
                return t + e * (n - t);
            }
            function y(e, t, n, r, i, a, u) {
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
                if (c.equals(l) || r.equals(c)) return E(e, n, i, s, u), u;
                if (r.equals(l)) return E(e, n, a, s, u), u;
                var f = o.secondsDifference(r, c) / o.secondsDifference(l, c),
                    h = i * s,
                    d = a * s,
                    p = n[h + e._ut1MinusUtcSecondsColumn],
                    y = n[d + e._ut1MinusUtcSecondsColumn],
                    _ = y - p;
                if (_ > 0.5 || _ < -0.5) {
                    var T = n[h + e._taiMinusUtcSecondsColumn],
                        R = n[d + e._taiMinusUtcSecondsColumn];
                    T !== R && (l.equals(r) ? (p = y) : (y -= R - T));
                }
                return (
                    (u.xPoleWander = m(
                        f,
                        n[h + e._xPoleWanderRadiansColumn],
                        n[d + e._xPoleWanderRadiansColumn]
                    )),
                    (u.yPoleWander = m(
                        f,
                        n[h + e._yPoleWanderRadiansColumn],
                        n[d + e._yPoleWanderRadiansColumn]
                    )),
                    (u.xPoleOffset = m(
                        f,
                        n[h + e._xCelestialPoleOffsetRadiansColumn],
                        n[d + e._xCelestialPoleOffsetRadiansColumn]
                    )),
                    (u.yPoleOffset = m(
                        f,
                        n[h + e._yCelestialPoleOffsetRadiansColumn],
                        n[d + e._yCelestialPoleOffsetRadiansColumn]
                    )),
                    (u.ut1MinusUtc = m(f, p, y)),
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
                            r(t)
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
                (h.prototype.compute = function(e, n) {
                    if (r(this._samples)) {
                        if ((r(n) || (n = new i(0, 0, 0, 0, 0)), 0 === this._samples.length))
                            return (
                                (n.xPoleWander = 0),
                                (n.yPoleWander = 0),
                                (n.xPoleOffset = 0),
                                (n.yPoleOffset = 0),
                                (n.ut1MinusUtc = 0),
                                n
                            );
                        var a = this._dates,
                            u = this._lastIndex,
                            s = 0,
                            l = 0;
                        if (r(u)) {
                            var f = a[u],
                                h = a[u + 1],
                                d = o.lessThanOrEquals(f, e),
                                p = !r(h),
                                E = p || o.greaterThanOrEquals(h, e);
                            if (d && E)
                                return (
                                    (s = u),
                                    !p && h.equals(e) && ++s,
                                    (l = s + 1),
                                    y(this, a, this._samples, e, s, l, n),
                                    n
                                );
                        }
                        var m = t(a, e, o.compare, this._dateColumn);
                        return (
                            m >= 0
                                ? (m < a.length - 1 && a[m + 1].equals(e) && ++m, (s = m), (l = m))
                                : ((l = ~m), (s = l - 1) < 0 && (s = 0)),
                            (this._lastIndex = s),
                            y(this, a, this._samples, e, s, l, n),
                            n
                        );
                    }
                    if (r(this._dataError)) throw new c(this._dataError);
                }),
                h
            );
        }),
        define("Core/HeadingPitchRoll", [
            "./defaultValue",
            "./defined",
            "./DeveloperError",
            "./Math"
        ], function(e, t, n, r) {
            "use strict";
            function i(t, n, r) {
                (this.heading = e(t, 0)), (this.pitch = e(n, 0)), (this.roll = e(r, 0));
            }
            return (
                (i.fromQuaternion = function(e, n) {
                    t(n) || (n = new i());
                    var a = 2 * (e.w * e.y - e.z * e.x),
                        o = 1 - 2 * (e.x * e.x + e.y * e.y),
                        u = 2 * (e.w * e.x + e.y * e.z),
                        s = 1 - 2 * (e.y * e.y + e.z * e.z),
                        c = 2 * (e.w * e.z + e.x * e.y);
                    return (
                        (n.heading = -Math.atan2(c, s)),
                        (n.roll = Math.atan2(u, o)),
                        (n.pitch = -r.asinClamped(a)),
                        n
                    );
                }),
                (i.fromDegrees = function(e, n, a, o) {
                    return (
                        t(o) || (o = new i()),
                        (o.heading = e * r.RADIANS_PER_DEGREE),
                        (o.pitch = n * r.RADIANS_PER_DEGREE),
                        (o.roll = a * r.RADIANS_PER_DEGREE),
                        o
                    );
                }),
                (i.clone = function(e, n) {
                    if (t(e))
                        return t(n)
                            ? ((n.heading = e.heading), (n.pitch = e.pitch), (n.roll = e.roll), n)
                            : new i(e.heading, e.pitch, e.roll);
                }),
                (i.equals = function(e, n) {
                    return (
                        e === n ||
                        (t(e) &&
                            t(n) &&
                            e.heading === n.heading &&
                            e.pitch === n.pitch &&
                            e.roll === n.roll)
                    );
                }),
                (i.equalsEpsilon = function(e, n, i, a) {
                    return (
                        e === n ||
                        (t(e) &&
                            t(n) &&
                            r.equalsEpsilon(e.heading, n.heading, i, a) &&
                            r.equalsEpsilon(e.pitch, n.pitch, i, a) &&
                            r.equalsEpsilon(e.roll, n.roll, i, a))
                    );
                }),
                (i.prototype.clone = function(e) {
                    return i.clone(this, e);
                }),
                (i.prototype.equals = function(e) {
                    return i.equals(this, e);
                }),
                (i.prototype.equalsEpsilon = function(e, t, n) {
                    return i.equalsEpsilon(this, e, t, n);
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
        ], function(e, t, n, r, i) {
            "use strict";
            function a() {
                for (
                    var e = document.getElementsByTagName("script"), t = 0, n = e.length;
                    t < n;
                    ++t
                ) {
                    var r = e[t].getAttribute("src"),
                        i = p.exec(r);
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
                            ? n("..", l("Core/buildModuleUrl.js"))
                            : a()),
                    (h = new r({ url: o(t) })),
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
                    h = r.DEFAULT.getDerivedResource({ url: e });
                }),
                (l.getCesiumBaseUrl = u),
                l
            );
        }),
        define("Core/Iau2006XysSample", [], function() {
            "use strict";
            function e(e, t, n) {
                (this.x = e), (this.y = t), (this.s = n);
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
        ], function(e, t, n, r, i, a, o, u) {
            "use strict";
            function s(e) {
                (e = n(e, n.EMPTY_OBJECT)),
                    (this._xysFileUrlTemplate = o.createIfNeeded(e.xysFileUrlTemplate)),
                    (this._interpolationOrder = n(e.interpolationOrder, 9)),
                    (this._sampleZeroJulianEphemerisDate = n(
                        e.sampleZeroJulianEphemerisDate,
                        2442396.5
                    )),
                    (this._sampleZeroDateTT = new a(this._sampleZeroJulianEphemerisDate, 0, u.TAI)),
                    (this._stepSizeDays = n(e.stepSizeDays, 1)),
                    (this._samplesPerXysFile = n(e.samplesPerXysFile, 1e3)),
                    (this._totalSamples = n(e.totalSamples, 27426)),
                    (this._samples = new Array(3 * this._totalSamples)),
                    (this._chunkDownloadsInProgress = []);
                for (
                    var t = this._interpolationOrder,
                        r = (this._denominators = new Array(t + 1)),
                        i = (this._xTable = new Array(t + 1)),
                        s = Math.pow(this._stepSizeDays, t),
                        c = 0;
                    c <= t;
                    ++c
                ) {
                    (r[c] = s), (i[c] = c * this._stepSizeDays);
                    for (var l = 0; l <= t; ++l) l !== c && (r[c] *= c - l);
                    r[c] = 1 / r[c];
                }
                (this._work = new Array(t + 1)), (this._coef = new Array(t + 1));
            }
            function c(e, t, n) {
                var r = f;
                return (
                    (r.dayNumber = t),
                    (r.secondsOfDay = n),
                    a.daysDifference(r, e._sampleZeroDateTT)
                );
            }
            function l(n, i) {
                if (n._chunkDownloadsInProgress[i]) return n._chunkDownloadsInProgress[i];
                var a = e.defer();
                n._chunkDownloadsInProgress[i] = a;
                var u,
                    s = n._xysFileUrlTemplate;
                return (
                    (u = r(s)
                        ? s.getDerivedResource({ templateValues: { 0: i } })
                        : new o({ url: t("Assets/IAU2006_XYS/IAU2006_XYS_" + i + ".json") })),
                    e(u.fetchJson(), function(e) {
                        n._chunkDownloadsInProgress[i] = !1;
                        for (
                            var t = n._samples,
                                r = e.samples,
                                o = i * n._samplesPerXysFile * 3,
                                u = 0,
                                s = r.length;
                            u < s;
                            ++u
                        )
                            t[o + u] = r[u];
                        a.resolve();
                    }),
                    a.promise
                );
            }
            var f = new a(0, 0, u.TAI);
            return (
                (s.prototype.preload = function(t, n, r, i) {
                    var a = c(this, t, n),
                        o = c(this, r, i),
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
                (s.prototype.computeXysRadians = function(e, t, n) {
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
                                (r(d[3 * s]) ||
                                    (l(this, (s / this._samplesPerXysFile) | 0), (h = !0)),
                                r(d[3 * f]) ||
                                    (l(this, (f / this._samplesPerXysFile) | 0), (h = !0)),
                                !h)
                            ) {
                                r(n) ? ((n.x = 0), (n.y = 0), (n.s = 0)) : (n = new i(0, 0, 0));
                                var p,
                                    E,
                                    m = a - s * this._stepSizeDays,
                                    y = this._work,
                                    _ = this._denominators,
                                    T = this._coef,
                                    R = this._xTable;
                                for (p = 0; p <= u; ++p) y[p] = m - R[p];
                                for (p = 0; p <= u; ++p) {
                                    for (T[p] = 1, E = 0; E <= u; ++E) E !== p && (T[p] *= y[E]);
                                    T[p] *= _[p];
                                    var v = 3 * (s + p);
                                    (n.x += T[p] * d[v++]),
                                        (n.y += T[p] * d[v++]),
                                        (n.s += T[p] * d[v]);
                                }
                                return n;
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
        ], function(e, t, n, r, i, a, o, u, s, c, l, f, h, d, p, E, m, y, _, T, R) {
            "use strict";
            var v = {},
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
                O = {
                    east: new n(),
                    north: new n(),
                    up: new n(),
                    west: new n(),
                    south: new n(),
                    down: new n()
                },
                M = new n(),
                I = new n(),
                w = new n();
            (v.localFrameToFixedFrameGenerator = function(e, t) {
                if (!A.hasOwnProperty(e) || !A[e].hasOwnProperty(t))
                    throw new s(
                        "firstAxis and secondAxis must be east, north, up, west, south or down."
                    );
                var r,
                    i = A[e][t],
                    a = e + t;
                return (
                    u(S[a])
                        ? (r = S[a])
                        : ((r = function(r, a, s) {
                              if (
                                  (u(s) || (s = new _()),
                                  m.equalsEpsilon(r.x, 0, m.EPSILON14) &&
                                      m.equalsEpsilon(r.y, 0, m.EPSILON14))
                              ) {
                                  var c = m.sign(r.z);
                                  n.unpack(g[e], 0, M),
                                      "east" !== e && "west" !== e && n.multiplyByScalar(M, c, M),
                                      n.unpack(g[t], 0, I),
                                      "east" !== t && "west" !== t && n.multiplyByScalar(I, c, I),
                                      n.unpack(g[i], 0, w),
                                      "east" !== i && "west" !== i && n.multiplyByScalar(w, c, w);
                              } else {
                                  (a = o(a, f.WGS84)), a.geodeticSurfaceNormal(r, O.up);
                                  var l = O.up,
                                      h = O.east;
                                  (h.x = -r.y),
                                      (h.y = r.x),
                                      (h.z = 0),
                                      n.normalize(h, O.east),
                                      n.cross(l, h, O.north),
                                      n.multiplyByScalar(O.up, -1, O.down),
                                      n.multiplyByScalar(O.east, -1, O.west),
                                      n.multiplyByScalar(O.north, -1, O.south),
                                      (M = O[e]),
                                      (I = O[t]),
                                      (w = O[i]);
                              }
                              return (
                                  (s[0] = M.x),
                                  (s[1] = M.y),
                                  (s[2] = M.z),
                                  (s[3] = 0),
                                  (s[4] = I.x),
                                  (s[5] = I.y),
                                  (s[6] = I.z),
                                  (s[7] = 0),
                                  (s[8] = w.x),
                                  (s[9] = w.y),
                                  (s[10] = w.z),
                                  (s[11] = 0),
                                  (s[12] = r.x),
                                  (s[13] = r.y),
                                  (s[14] = r.z),
                                  (s[15] = 1),
                                  s
                              );
                          }),
                          (S[a] = r)),
                    r
                );
            }),
                (v.eastNorthUpToFixedFrame = v.localFrameToFixedFrameGenerator("east", "north")),
                (v.northEastDownToFixedFrame = v.localFrameToFixedFrameGenerator("north", "east")),
                (v.northUpEastToFixedFrame = v.localFrameToFixedFrameGenerator("north", "up")),
                (v.northWestUpToFixedFrame = v.localFrameToFixedFrameGenerator("north", "west"));
            var N = new T(),
                x = new n(1, 1, 1),
                C = new _();
            v.headingPitchRollToFixedFrame = function(e, t, r, i, a) {
                i = o(i, v.eastNorthUpToFixedFrame);
                var u = T.fromHeadingPitchRoll(t, N),
                    s = _.fromTranslationQuaternionRotationScale(n.ZERO, u, x, C);
                return (a = i(e, r, a)), _.multiply(a, s, a);
            };
            var P = new _(),
                U = new y();
            v.headingPitchRollQuaternion = function(e, t, n, r, i) {
                var a = v.headingPitchRollToFixedFrame(e, t, n, r, P),
                    o = _.getRotation(a, U);
                return T.fromRotationMatrix(o, i);
            };
            var D = new n(1, 1, 1),
                L = new n(),
                F = new _(),
                b = new _(),
                B = new y(),
                q = new T();
            v.fixedFrameToHeadingPitchRoll = function(e, t, r, i) {
                (t = o(t, f.WGS84)), (r = o(r, v.eastNorthUpToFixedFrame)), u(i) || (i = new h());
                var a = _.getTranslation(e, L);
                if (n.equals(a, n.ZERO)) return (i.heading = 0), (i.pitch = 0), (i.roll = 0), i;
                var s = _.inverseTransformation(r(a, t, F), F),
                    c = _.setScale(e, D, b);
                (c = _.setTranslation(c, n.ZERO, c)), (s = _.multiply(s, c, s));
                var l = T.fromRotationMatrix(_.getRotation(s, B), q);
                return (l = T.normalize(l, l)), h.fromQuaternion(l, i);
            };
            var z = m.TWO_PI / 86400,
                G = new E();
            (v.computeTemeToPseudoFixedMatrix = function(e, t) {
                G = E.addSeconds(e, -E.computeTaiMinusUtc(e), G);
                var n,
                    r = G.dayNumber,
                    i = G.secondsOfDay,
                    a = r - 2451545;
                n =
                    i >= 43200
                        ? (a + 0.5) / R.DAYS_PER_JULIAN_CENTURY
                        : (a - 0.5) / R.DAYS_PER_JULIAN_CENTURY;
                var o = 24110.54841 + n * (8640184.812866 + n * (0.093104 + -62e-7 * n)),
                    s = (o * z) % m.TWO_PI,
                    c = 72921158553e-15 + 1.1772758384668e-19 * (r - 2451545.5),
                    l = (i + 0.5 * R.SECONDS_PER_DAY) % R.SECONDS_PER_DAY,
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
                (v.iau2006XysData = new d()),
                (v.earthOrientationParameters = c.NONE);
            (v.preloadIcrfFixed = function(t) {
                var n = t.start.dayNumber,
                    r = t.start.secondsOfDay + 32.184,
                    i = t.stop.dayNumber,
                    a = t.stop.secondsOfDay + 32.184,
                    o = v.iau2006XysData.preload(n, r, i, a),
                    u = v.earthOrientationParameters.getPromiseToLoad();
                return e.all([o, u]);
            }),
                (v.computeIcrfToFixedMatrix = function(e, t) {
                    u(t) || (t = new y());
                    var n = v.computeFixedToIcrfMatrix(e, t);
                    if (u(n)) return y.transpose(n, t);
                });
            var V = new p(0, 0, 0),
                W = new l(0, 0, 0, 0, 0, 0),
                X = new y(),
                H = new y();
            v.computeFixedToIcrfMatrix = function(e, t) {
                u(t) || (t = new y());
                var n = v.earthOrientationParameters.compute(e, W);
                if (u(n)) {
                    var r = e.dayNumber,
                        i = e.secondsOfDay + 32.184,
                        a = v.iau2006XysData.computeXysRadians(r, i, V);
                    if (u(a)) {
                        var o = a.x + n.xPoleOffset,
                            s = a.y + n.yPoleOffset,
                            c = 1 / (1 + Math.sqrt(1 - o * o - s * s)),
                            l = X;
                        (l[0] = 1 - c * o * o),
                            (l[3] = -c * o * s),
                            (l[6] = o),
                            (l[1] = -c * o * s),
                            (l[4] = 1 - c * s * s),
                            (l[7] = s),
                            (l[2] = -o),
                            (l[5] = -s),
                            (l[8] = 1 - c * (o * o + s * s));
                        var f = y.fromRotationZ(-a.s, H),
                            h = y.multiply(l, f, X),
                            d = e.dayNumber,
                            p = e.secondsOfDay - E.computeTaiMinusUtc(e) + n.ut1MinusUtc,
                            _ = d - 2451545,
                            T = p / R.SECONDS_PER_DAY,
                            A = 0.779057273264 + T + 0.00273781191135448 * (_ + T);
                        A = (A % 1) * m.TWO_PI;
                        var g = y.fromRotationZ(A, H),
                            S = y.multiply(h, g, X),
                            O = Math.cos(n.xPoleWander),
                            M = Math.cos(n.yPoleWander),
                            I = Math.sin(n.xPoleWander),
                            w = Math.sin(n.yPoleWander),
                            N = r - 2451545 + i / R.SECONDS_PER_DAY;
                        N /= 36525;
                        var x = (-47e-6 * N * m.RADIANS_PER_DEGREE) / 3600,
                            C = Math.cos(x),
                            P = Math.sin(x),
                            U = H;
                        return (
                            (U[0] = O * C),
                            (U[1] = O * P),
                            (U[2] = I),
                            (U[3] = -M * P + w * I * C),
                            (U[4] = M * C + w * I * P),
                            (U[5] = -w * O),
                            (U[6] = -w * P - M * I * C),
                            (U[7] = w * C - M * I * P),
                            (U[8] = M * O),
                            y.multiply(S, U, t)
                        );
                    }
                }
            };
            var Y = new r();
            (v.pointToWindowCoordinates = function(e, t, n, r) {
                return (r = v.pointToGLWindowCoordinates(e, t, n, r)), (r.y = 2 * t[5] - r.y), r;
            }),
                (v.pointToGLWindowCoordinates = function(e, n, i, a) {
                    u(a) || (a = new t());
                    var o = Y;
                    return (
                        _.multiplyByVector(e, r.fromElements(i.x, i.y, i.z, 1, o), o),
                        r.multiplyByScalar(o, 1 / o.w, o),
                        _.multiplyByVector(n, o, o),
                        t.fromCartesian4(o, a)
                    );
                });
            var k = new n(),
                j = new n(),
                Z = new n();
            v.rotationMatrixFromPositionVelocity = function(e, t, r, i) {
                var a = o(r, f.WGS84).geodeticSurfaceNormal(e, k),
                    s = n.cross(t, a, j);
                n.equalsEpsilon(s, n.ZERO, m.EPSILON6) && (s = n.clone(n.UNIT_X, s));
                var c = n.cross(s, t, Z);
                return (
                    n.normalize(c, c),
                    n.cross(t, c, s),
                    n.negate(s, s),
                    n.normalize(s, s),
                    u(i) || (i = new y()),
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
                J = new i(),
                Q = new n(),
                $ = new n(),
                ee = new y(),
                te = new _(),
                ne = new _();
            return (
                (v.basisTo2D = function(e, t, r) {
                    var i = _.getTranslation(t, $),
                        a = e.ellipsoid,
                        o = a.cartesianToCartographic(i, J),
                        u = e.project(o, Q);
                    n.fromElements(u.z, u.x, u.y, u);
                    var s = v.eastNorthUpToFixedFrame(i, a, te),
                        c = _.inverseTransformation(s, ne),
                        l = _.getRotation(t, ee),
                        f = _.multiplyByMatrix3(c, l, r);
                    return _.multiply(K, f, r), _.setTranslation(r, u, r), r;
                }),
                (v.wgs84To2DModelMatrix = function(e, t, r) {
                    var i = e.ellipsoid,
                        a = v.eastNorthUpToFixedFrame(t, i, te),
                        o = _.inverseTransformation(a, ne),
                        u = i.cartesianToCartographic(t, J),
                        s = e.project(u, Q);
                    n.fromElements(s.z, s.x, s.y, s);
                    var c = _.fromTranslation(s, te);
                    return _.multiply(K, o, r), _.multiply(c, r, r), r;
                }),
                v
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
        ], function(e, t, n, r, i, a, o, u, s, c, l, f, h, d, p, E) {
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
                for (var n in e.attributes)
                    if (
                        e.attributes.hasOwnProperty(n) &&
                        a(e.attributes[n]) &&
                        a(e.attributes[n].values)
                    ) {
                        var r = e.attributes[n],
                            i = r.values.length / r.componentsPerAttribute;
                        t = i;
                    }
                return t;
            };
            var y = new n(),
                _ = new t(),
                T = new f(),
                R = [new n(), new n(), new n()],
                v = [new e(), new e(), new e()],
                A = [new e(), new e(), new e()],
                g = new t(),
                S = new d(),
                O = new f(),
                M = new c();
            return (
                (m._textureCoordinateRotationPoints = function(r, i, a, o) {
                    var u,
                        s = p.center(o, y),
                        h = n.toCartesian(s, a, _),
                        m = E.eastNorthUpToFixedFrame(h, a, T),
                        I = f.inverse(m, T),
                        w = v,
                        N = R;
                    (N[0].longitude = o.west),
                        (N[0].latitude = o.south),
                        (N[1].longitude = o.west),
                        (N[1].latitude = o.north),
                        (N[2].longitude = o.east),
                        (N[2].latitude = o.south);
                    var x = g;
                    for (u = 0; u < 3; u++)
                        n.toCartesian(N[u], a, x),
                            (x = f.multiplyByPointAsVector(I, x, x)),
                            (w[u].x = x.x),
                            (w[u].y = x.y);
                    var C = d.fromAxisAngle(t.UNIT_Z, -i, S),
                        P = l.fromQuaternion(C, O),
                        U = r.length,
                        D = Number.POSITIVE_INFINITY,
                        L = Number.POSITIVE_INFINITY,
                        F = Number.NEGATIVE_INFINITY,
                        b = Number.NEGATIVE_INFINITY;
                    for (u = 0; u < U; u++)
                        (x = f.multiplyByPointAsVector(I, r[u], x)),
                            (x = l.multiplyByVector(P, x, x)),
                            (D = Math.min(D, x.x)),
                            (L = Math.min(L, x.y)),
                            (F = Math.max(F, x.x)),
                            (b = Math.max(b, x.y));
                    var B = c.fromRotation(i, M),
                        q = A;
                    (q[0].x = D),
                        (q[0].y = L),
                        (q[1].x = D),
                        (q[1].y = b),
                        (q[2].x = F),
                        (q[2].y = L);
                    var z = w[0],
                        G = w[2].x - z.x,
                        V = w[1].y - z.y;
                    for (u = 0; u < 3; u++) {
                        var W = q[u];
                        c.multiplyByVector(B, W, W),
                            (W.x = (W.x - z.x) / G),
                            (W.y = (W.y - z.y) / V);
                    }
                    var X = q[0],
                        H = q[1],
                        Y = q[2],
                        k = new Array(6);
                    return e.pack(X, k), e.pack(H, k, 2), e.pack(Y, k, 4), k;
                }),
                m
            );
        }),
        define("Core/GeometryAttribute", [
            "./defaultValue",
            "./defined",
            "./DeveloperError"
        ], function(e, t, n) {
            "use strict";
            function r(t) {
                (t = e(t, e.EMPTY_OBJECT)),
                    (this.componentDatatype = t.componentDatatype),
                    (this.componentsPerAttribute = t.componentsPerAttribute),
                    (this.normalize = e(t.normalize, !1)),
                    (this.values = t.values);
            }
            return r;
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
        ], function(e, t, n, r, i) {
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
                (a.fromSizeInBytes = function(e) {
                    switch (e) {
                        case 2:
                            return a.UNSIGNED_SHORT;
                        case 4:
                            return a.UNSIGNED_INT;
                        case 1:
                            return a.UNSIGNED_BYTE;
                    }
                }),
                (a.validate = function(t) {
                    return (
                        e(t) &&
                        (t === a.UNSIGNED_BYTE || t === a.UNSIGNED_SHORT || t === a.UNSIGNED_INT)
                    );
                }),
                (a.createTypedArray = function(e, t) {
                    return e >= r.SIXTY_FOUR_KILOBYTES ? new Uint32Array(t) : new Uint16Array(t);
                }),
                (a.createTypedArrayFromArrayBuffer = function(e, t, n, i) {
                    return e >= r.SIXTY_FOUR_KILOBYTES
                        ? new Uint32Array(t, n, i)
                        : new Uint16Array(t, n, i);
                }),
                n(a)
            );
        }),
        define("ThirdParty/earcut-2.1.1", [], function() {
            "use strict";
            function e(e, n, i) {
                i = i || 2;
                var a = n && n.length,
                    o = a ? n[0] * i : e.length,
                    u = t(e, 0, o, i, !0),
                    c = [];
                if (!u) return c;
                var l, f, h, d, p, E, m;
                if ((a && (u = s(e, n, u, i)), e.length > 80 * i)) {
                    (l = h = e[0]), (f = d = e[1]);
                    for (var y = i; y < o; y += i)
                        (p = e[y]),
                            (E = e[y + 1]),
                            p < l && (l = p),
                            E < f && (f = E),
                            p > h && (h = p),
                            E > d && (d = E);
                    m = Math.max(h - l, d - f);
                }
                return r(u, c, i, l, f, m), c;
            }
            function t(e, t, n, r, i) {
                var a, o;
                if (i === w(e, t, n, r) > 0) for (a = t; a < n; a += r) o = O(a, e[a], e[a + 1], o);
                else for (a = n - r; a >= t; a -= r) o = O(a, e[a], e[a + 1], o);
                return o && T(o, o.next) && (M(o), (o = o.next)), o;
            }
            function n(e, t) {
                if (!e) return e;
                t || (t = e);
                var n,
                    r = e;
                do {
                    if (((n = !1), r.steiner || (!T(r, r.next) && 0 !== _(r.prev, r, r.next))))
                        r = r.next;
                    else {
                        if ((M(r), (r = t = r.prev) === r.next)) return null;
                        n = !0;
                    }
                } while (n || r !== t);
                return t;
            }
            function r(e, t, s, c, l, f, d) {
                if (e) {
                    !d && f && h(e, c, l, f);
                    for (var p, E, m = e; e.prev !== e.next; )
                        if (((p = e.prev), (E = e.next), f ? a(e, c, l, f) : i(e)))
                            t.push(p.i / s),
                                t.push(e.i / s),
                                t.push(E.i / s),
                                M(e),
                                (e = E.next),
                                (m = E.next);
                        else if ((e = E) === m) {
                            d
                                ? 1 === d
                                    ? ((e = o(e, t, s)), r(e, t, s, c, l, f, 2))
                                    : 2 === d && u(e, t, s, c, l, f)
                                : r(n(e), t, s, c, l, f, 1);
                            break;
                        }
                }
            }
            function i(e) {
                var t = e.prev,
                    n = e,
                    r = e.next;
                if (_(t, n, r) >= 0) return !1;
                for (var i = e.next.next; i !== e.prev; ) {
                    if (m(t.x, t.y, n.x, n.y, r.x, r.y, i.x, i.y) && _(i.prev, i, i.next) >= 0)
                        return !1;
                    i = i.next;
                }
                return !0;
            }
            function a(e, t, n, r) {
                var i = e.prev,
                    a = e,
                    o = e.next;
                if (_(i, a, o) >= 0) return !1;
                for (
                    var u = i.x < a.x ? (i.x < o.x ? i.x : o.x) : a.x < o.x ? a.x : o.x,
                        s = i.y < a.y ? (i.y < o.y ? i.y : o.y) : a.y < o.y ? a.y : o.y,
                        c = i.x > a.x ? (i.x > o.x ? i.x : o.x) : a.x > o.x ? a.x : o.x,
                        l = i.y > a.y ? (i.y > o.y ? i.y : o.y) : a.y > o.y ? a.y : o.y,
                        f = p(u, s, t, n, r),
                        h = p(c, l, t, n, r),
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
            function o(e, t, n) {
                var r = e;
                do {
                    var i = r.prev,
                        a = r.next.next;
                    !T(i, a) &&
                        R(i, r, r.next, a) &&
                        A(i, a) &&
                        A(a, i) &&
                        (t.push(i.i / n),
                        t.push(r.i / n),
                        t.push(a.i / n),
                        M(r),
                        M(r.next),
                        (r = e = a)),
                        (r = r.next);
                } while (r !== e);
                return r;
            }
            function u(e, t, i, a, o, u) {
                var s = e;
                do {
                    for (var c = s.next.next; c !== s.prev; ) {
                        if (s.i !== c.i && y(s, c)) {
                            var l = S(s, c);
                            return (
                                (s = n(s, s.next)),
                                (l = n(l, l.next)),
                                r(s, t, i, a, o, u),
                                void r(l, t, i, a, o, u)
                            );
                        }
                        c = c.next;
                    }
                    s = s.next;
                } while (s !== e);
            }
            function s(e, r, i, a) {
                var o,
                    u,
                    s,
                    f,
                    h,
                    d = [];
                for (o = 0, u = r.length; o < u; o++)
                    (s = r[o] * a),
                        (f = o < u - 1 ? r[o + 1] * a : e.length),
                        (h = t(e, s, f, a, !1)),
                        h === h.next && (h.steiner = !0),
                        d.push(E(h));
                for (d.sort(c), o = 0; o < d.length; o++) l(d[o], i), (i = n(i, i.next));
                return i;
            }
            function c(e, t) {
                return e.x - t.x;
            }
            function l(e, t) {
                if ((t = f(e, t))) {
                    var r = S(t, e);
                    n(r, r.next);
                }
            }
            function f(e, t) {
                var n,
                    r = t,
                    i = e.x,
                    a = e.y,
                    o = -1 / 0;
                do {
                    if (a <= r.y && a >= r.next.y) {
                        var u = r.x + ((a - r.y) * (r.next.x - r.x)) / (r.next.y - r.y);
                        if (u <= i && u > o) {
                            if (((o = u), u === i)) {
                                if (a === r.y) return r;
                                if (a === r.next.y) return r.next;
                            }
                            n = r.x < r.next.x ? r : r.next;
                        }
                    }
                    r = r.next;
                } while (r !== t);
                if (!n) return null;
                if (i === o) return n.prev;
                var s,
                    c = n,
                    l = n.x,
                    f = n.y,
                    h = 1 / 0;
                for (r = n.next; r !== c; )
                    i >= r.x &&
                        r.x >= l &&
                        m(a < f ? i : o, a, l, f, a < f ? o : i, a, r.x, r.y) &&
                        ((s = Math.abs(a - r.y) / (i - r.x)) < h || (s === h && r.x > n.x)) &&
                        A(r, e) &&
                        ((n = r), (h = s)),
                        (r = r.next);
                return n;
            }
            function h(e, t, n, r) {
                var i = e;
                do {
                    null === i.z && (i.z = p(i.x, i.y, t, n, r)),
                        (i.prevZ = i.prev),
                        (i.nextZ = i.next),
                        (i = i.next);
                } while (i !== e);
                (i.prevZ.nextZ = null), (i.prevZ = null), d(i);
            }
            function d(e) {
                var t,
                    n,
                    r,
                    i,
                    a,
                    o,
                    u,
                    s,
                    c = 1;
                do {
                    for (n = e, e = null, a = null, o = 0; n; ) {
                        for (o++, r = n, u = 0, t = 0; t < c && (u++, (r = r.nextZ)); t++);
                        for (s = c; u > 0 || (s > 0 && r); )
                            0 === u
                                ? ((i = r), (r = r.nextZ), s--)
                                : 0 !== s && r
                                ? n.z <= r.z
                                    ? ((i = n), (n = n.nextZ), u--)
                                    : ((i = r), (r = r.nextZ), s--)
                                : ((i = n), (n = n.nextZ), u--),
                                a ? (a.nextZ = i) : (e = i),
                                (i.prevZ = a),
                                (a = i);
                        n = r;
                    }
                    (a.nextZ = null), (c *= 2);
                } while (o > 1);
                return e;
            }
            function p(e, t, n, r, i) {
                return (
                    (e = (32767 * (e - n)) / i),
                    (t = (32767 * (t - r)) / i),
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
            function E(e) {
                var t = e,
                    n = e;
                do {
                    t.x < n.x && (n = t), (t = t.next);
                } while (t !== e);
                return n;
            }
            function m(e, t, n, r, i, a, o, u) {
                return (
                    (i - o) * (t - u) - (e - o) * (a - u) >= 0 &&
                    (e - o) * (r - u) - (n - o) * (t - u) >= 0 &&
                    (n - o) * (a - u) - (i - o) * (r - u) >= 0
                );
            }
            function y(e, t) {
                return (
                    e.next.i !== t.i &&
                    e.prev.i !== t.i &&
                    !v(e, t) &&
                    A(e, t) &&
                    A(t, e) &&
                    g(e, t)
                );
            }
            function _(e, t, n) {
                return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
            }
            function T(e, t) {
                return e.x === t.x && e.y === t.y;
            }
            function R(e, t, n, r) {
                return (
                    !!((T(e, t) && T(n, r)) || (T(e, r) && T(n, t))) ||
                    (_(e, t, n) > 0 != _(e, t, r) > 0 && _(n, r, e) > 0 != _(n, r, t) > 0)
                );
            }
            function v(e, t) {
                var n = e;
                do {
                    if (
                        n.i !== e.i &&
                        n.next.i !== e.i &&
                        n.i !== t.i &&
                        n.next.i !== t.i &&
                        R(n, n.next, e, t)
                    )
                        return !0;
                    n = n.next;
                } while (n !== e);
                return !1;
            }
            function A(e, t) {
                return _(e.prev, e, e.next) < 0
                    ? _(e, t, e.next) >= 0 && _(e, e.prev, t) >= 0
                    : _(e, t, e.prev) < 0 || _(e, e.next, t) < 0;
            }
            function g(e, t) {
                var n = e,
                    r = !1,
                    i = (e.x + t.x) / 2,
                    a = (e.y + t.y) / 2;
                do {
                    n.y > a != n.next.y > a &&
                        i < ((n.next.x - n.x) * (a - n.y)) / (n.next.y - n.y) + n.x &&
                        (r = !r),
                        (n = n.next);
                } while (n !== e);
                return r;
            }
            function S(e, t) {
                var n = new I(e.i, e.x, e.y),
                    r = new I(t.i, t.x, t.y),
                    i = e.next,
                    a = t.prev;
                return (
                    (e.next = t),
                    (t.prev = e),
                    (n.next = i),
                    (i.prev = n),
                    (r.next = n),
                    (n.prev = r),
                    (a.next = r),
                    (r.prev = a),
                    r
                );
            }
            function O(e, t, n, r) {
                var i = new I(e, t, n);
                return (
                    r
                        ? ((i.next = r.next), (i.prev = r), (r.next.prev = i), (r.next = i))
                        : ((i.prev = i), (i.next = i)),
                    i
                );
            }
            function M(e) {
                (e.next.prev = e.prev),
                    (e.prev.next = e.next),
                    e.prevZ && (e.prevZ.nextZ = e.nextZ),
                    e.nextZ && (e.nextZ.prevZ = e.prevZ);
            }
            function I(e, t, n) {
                (this.i = e),
                    (this.x = t),
                    (this.y = n),
                    (this.prev = null),
                    (this.next = null),
                    (this.z = null),
                    (this.prevZ = null),
                    (this.nextZ = null),
                    (this.steiner = !1);
            }
            function w(e, t, n, r) {
                for (var i = 0, a = t, o = n - r; a < n; a += r)
                    (i += (e[o] - e[a]) * (e[a + 1] + e[o + 1])), (o = a);
                return i;
            }
            return (
                (e.deviation = function(e, t, n, r) {
                    var i = t && t.length,
                        a = i ? t[0] * n : e.length,
                        o = Math.abs(w(e, 0, a, n));
                    if (i)
                        for (var u = 0, s = t.length; u < s; u++) {
                            var c = t[u] * n,
                                l = u < s - 1 ? t[u + 1] * n : e.length;
                            o -= Math.abs(w(e, c, l, n));
                        }
                    var f = 0;
                    for (u = 0; u < r.length; u += 3) {
                        var h = r[u] * n,
                            d = r[u + 1] * n,
                            p = r[u + 2] * n;
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
                            n = { vertices: [], holes: [], dimensions: t },
                            r = 0,
                            i = 0;
                        i < e.length;
                        i++
                    ) {
                        for (var a = 0; a < e[i].length; a++)
                            for (var o = 0; o < t; o++) n.vertices.push(e[i][a][o]);
                        i > 0 && ((r += e[i - 1].length), n.holes.push(r));
                    }
                    return n;
                }),
                e
            );
        }),
        define("Core/EllipsoidRhumbLine", [
            "./Cartesian3",
            "./Cartographic",
            "./Check",
            "./defaultValue",
            "./defined",
            "./defineProperties",
            "./DeveloperError",
            "./Ellipsoid",
            "./Math"
        ], function(e, t, n, r, i, a, o, u, s) {
            "use strict";
            function c(e, t, n) {
                if (0 === e) return t * n;
                var r = e * e,
                    i = r * r,
                    a = i * r,
                    o = a * r,
                    u = o * r,
                    s = u * r,
                    c = n;
                return (
                    t *
                    ((1 -
                        r / 4 -
                        (3 * i) / 64 -
                        (5 * a) / 256 -
                        (175 * o) / 16384 -
                        (441 * u) / 65536 -
                        (4851 * s) / 1048576) *
                        c -
                        ((3 * r) / 8 +
                            (3 * i) / 32 +
                            (45 * a) / 1024 +
                            (105 * o) / 4096 +
                            (2205 * u) / 131072 +
                            (6237 * s) / 524288) *
                            Math.sin(2 * c) +
                        ((15 * i) / 256 +
                            (45 * a) / 1024 +
                            (525 * o) / 16384 +
                            (1575 * u) / 65536 +
                            (155925 * s) / 8388608) *
                            Math.sin(4 * c) -
                        ((35 * a) / 3072 +
                            (175 * o) / 12288 +
                            (3675 * u) / 262144 +
                            (13475 * s) / 1048576) *
                            Math.sin(6 * c) +
                        ((315 * o) / 131072 + (2205 * u) / 524288 + (43659 * s) / 8388608) *
                            Math.sin(8 * c) -
                        ((693 * u) / 1310720 + (6237 * s) / 5242880) * Math.sin(10 * c) +
                        ((1001 * s) / 8388608) * Math.sin(12 * c))
                );
            }
            function l(e, t, n) {
                var r = e / n;
                if (0 === t) return r;
                var i = r * r,
                    a = i * r,
                    o = a * r,
                    u = t,
                    s = u * u,
                    c = s * s,
                    l = c * s,
                    f = l * s,
                    h = f * s,
                    d = h * s,
                    p = Math.sin(2 * r),
                    E = Math.cos(2 * r),
                    m = Math.sin(4 * r),
                    y = Math.cos(4 * r),
                    _ = Math.sin(6 * r),
                    T = Math.cos(6 * r),
                    R = Math.sin(8 * r),
                    v = Math.cos(8 * r),
                    A = Math.sin(10 * r);
                return (
                    r +
                    (r * s) / 4 +
                    (7 * r * c) / 64 +
                    (15 * r * l) / 256 +
                    (579 * r * f) / 16384 +
                    (1515 * r * h) / 65536 +
                    (16837 * r * d) / 1048576 +
                    ((3 * r * c) / 16 +
                        (45 * r * l) / 256 -
                        (r * (32 * i - 561) * f) / 4096 -
                        (r * (232 * i - 1677) * h) / 16384 +
                        (r * (399985 - 90560 * i + 512 * o) * d) / 5242880) *
                        E +
                    ((21 * r * l) / 256 +
                        (483 * r * f) / 4096 -
                        (r * (224 * i - 1969) * h) / 16384 -
                        (r * (33152 * i - 112599) * d) / 1048576) *
                        y +
                    ((151 * r * f) / 4096 +
                        (4681 * r * h) / 65536 +
                        (1479 * r * d) / 16384 -
                        (453 * a * d) / 32768) *
                        T +
                    ((1097 * r * h) / 65536 + (42783 * r * d) / 1048576) * v +
                    ((8011 * r * d) / 1048576) * Math.cos(10 * r) +
                    ((3 * s) / 8 +
                        (3 * c) / 16 +
                        (213 * l) / 2048 -
                        (3 * i * l) / 64 +
                        (255 * f) / 4096 -
                        (33 * i * f) / 512 +
                        (20861 * h) / 524288 -
                        (33 * i * h) / 512 +
                        (o * h) / 1024 +
                        (28273 * d) / 1048576 -
                        (471 * i * d) / 8192 +
                        (9 * o * d) / 4096) *
                        p +
                    ((21 * c) / 256 +
                        (21 * l) / 256 +
                        (533 * f) / 8192 -
                        (21 * i * f) / 512 +
                        (197 * h) / 4096 -
                        (315 * i * h) / 4096 +
                        (584039 * d) / 16777216 -
                        (12517 * i * d) / 131072 +
                        (7 * o * d) / 2048) *
                        m +
                    ((151 * l) / 6144 +
                        (151 * f) / 4096 +
                        (5019 * h) / 131072 -
                        (453 * i * h) / 16384 +
                        (26965 * d) / 786432 -
                        (8607 * i * d) / 131072) *
                        _ +
                    ((1097 * f) / 131072 +
                        (1097 * h) / 65536 +
                        (225797 * d) / 10485760 -
                        (1097 * i * d) / 65536) *
                        R +
                    ((8011 * h) / 2621440 + (8011 * d) / 1048576) * A +
                    ((293393 * d) / 251658240) * Math.sin(12 * r)
                );
            }
            function f(e, t) {
                if (0 === e) return Math.log(Math.tan(0.5 * (s.PI_OVER_TWO + t)));
                var n = e * Math.sin(t);
                return (
                    Math.log(Math.tan(0.5 * (s.PI_OVER_TWO + t))) -
                    (e / 2) * Math.log((1 + n) / (1 - n))
                );
            }
            function h(e, t, n, r, i) {
                var a = f(e._ellipticity, n),
                    o = f(e._ellipticity, i);
                return Math.atan2(s.negativePiToPi(r - t), o - a);
            }
            function d(e, t, n, r, i, a, o) {
                var u = e._heading,
                    l = a - r,
                    f = 0;
                if (s.equalsEpsilon(Math.abs(u), s.PI_OVER_TWO, s.EPSILON8))
                    if (t === n) f = t * Math.cos(i) * s.negativePiToPi(l);
                    else {
                        var h = Math.sin(i);
                        f =
                            (t * Math.cos(i) * s.negativePiToPi(l)) /
                            Math.sqrt(1 - e._ellipticitySquared * h * h);
                    }
                else {
                    var d = c(e._ellipticity, t, i);
                    f = (c(e._ellipticity, t, o) - d) / Math.cos(u);
                }
                return Math.abs(f);
            }
            function p(n, r, i, a) {
                var o = (e.normalize(a.cartographicToCartesian(r, _), y),
                    e.normalize(a.cartographicToCartesian(i, _), _),
                    a.maximumRadius),
                    u = a.minimumRadius,
                    s = o * o,
                    c = u * u;
                (n._ellipticitySquared = (s - c) / s),
                    (n._ellipticity = Math.sqrt(n._ellipticitySquared)),
                    (n._start = t.clone(r, n._start)),
                    (n._start.height = 0),
                    (n._end = t.clone(i, n._end)),
                    (n._end.height = 0),
                    (n._heading = h(n, r.longitude, r.latitude, i.longitude, i.latitude)),
                    (n._distance = d(
                        n,
                        a.maximumRadius,
                        a.minimumRadius,
                        r.longitude,
                        r.latitude,
                        i.longitude,
                        i.latitude
                    ));
            }
            function E(e, n, r, a, o, u) {
                var h,
                    d,
                    p,
                    E = o * o;
                if (Math.abs(s.PI_OVER_TWO - Math.abs(n)) > s.EPSILON8) {
                    d = l(c(o, a, e.latitude) + r * Math.cos(n), o, a);
                    var m = f(o, e.latitude),
                        y = f(o, d);
                    (p = Math.tan(n) * (y - m)), (h = s.negativePiToPi(e.longitude + p));
                } else {
                    d = e.latitude;
                    var _;
                    if (0 === o) _ = a * Math.cos(e.latitude);
                    else {
                        var T = Math.sin(e.latitude);
                        _ = (a * Math.cos(e.latitude)) / Math.sqrt(1 - E * T * T);
                    }
                    (p = r / _),
                        (h =
                            n > 0
                                ? s.negativePiToPi(e.longitude + p)
                                : s.negativePiToPi(e.longitude - p));
                }
                return i(u)
                    ? ((u.longitude = h), (u.latitude = d), (u.height = 0), u)
                    : new t(h, d, 0);
            }
            function m(e, n, a) {
                var o = r(a, u.WGS84);
                (this._ellipsoid = o),
                    (this._start = new t()),
                    (this._end = new t()),
                    (this._heading = void 0),
                    (this._distance = void 0),
                    (this._ellipticity = void 0),
                    (this._ellipticitySquared = void 0),
                    i(e) && i(n) && p(this, e, n, o);
            }
            var y = new e(),
                _ = new e();
            return (
                a(m.prototype, {
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
                    heading: {
                        get: function() {
                            return this._heading;
                        }
                    }
                }),
                (m.fromStartHeadingDistance = function(e, t, n, a, o) {
                    var c = r(a, u.WGS84),
                        l = c.maximumRadius,
                        f = c.minimumRadius,
                        h = l * l,
                        d = f * f,
                        p = Math.sqrt((h - d) / h);
                    t = s.negativePiToPi(t);
                    var y = E(e, t, n, c.maximumRadius, p);
                    return !i(o) || (i(a) && !a.equals(o.ellipsoid))
                        ? new m(e, y, c)
                        : (o.setEndPoints(e, y), o);
                }),
                (m.prototype.setEndPoints = function(e, t) {
                    p(this, e, t, this._ellipsoid);
                }),
                (m.prototype.interpolateUsingFraction = function(e, t) {
                    return this.interpolateUsingSurfaceDistance(e * this._distance, t);
                }),
                (m.prototype.interpolateUsingSurfaceDistance = function(e, t) {
                    return E(
                        this._start,
                        this._heading,
                        e,
                        this._ellipsoid.maximumRadius,
                        this._ellipticity,
                        t
                    );
                }),
                (m.prototype.findIntersectionWithLongitude = function(e, n) {
                    var r = this._ellipticity,
                        a = this._heading,
                        o = Math.abs(a),
                        u = this._start;
                    if (
                        ((e = s.negativePiToPi(e)),
                        s.equalsEpsilon(Math.abs(e), Math.PI, s.EPSILON14) &&
                            (e = s.sign(u.longitude) * Math.PI),
                        i(n) || (n = new t()),
                        Math.abs(s.PI_OVER_TWO - o) <= s.EPSILON8)
                    )
                        return (n.longitude = e), (n.latitude = u.latitude), (n.height = 0), n;
                    if (s.equalsEpsilon(Math.abs(s.PI_OVER_TWO - o), s.PI_OVER_TWO, s.EPSILON8)) {
                        if (s.equalsEpsilon(e, u.longitude, s.EPSILON12)) return;
                        return (
                            (n.longitude = e),
                            (n.latitude = s.PI_OVER_TWO * s.sign(s.PI_OVER_TWO - a)),
                            (n.height = 0),
                            n
                        );
                    }
                    var c,
                        l = u.latitude,
                        f = r * Math.sin(l),
                        h =
                            Math.tan(0.5 * (s.PI_OVER_TWO + l)) *
                            Math.exp((e - u.longitude) / Math.tan(a)),
                        d = (1 + f) / (1 - f),
                        p = u.latitude;
                    do {
                        c = p;
                        var E = r * Math.sin(c),
                            m = (1 + E) / (1 - E);
                        p = 2 * Math.atan(h * Math.pow(m / d, r / 2)) - s.PI_OVER_TWO;
                    } while (!s.equalsEpsilon(p, c, s.EPSILON12));
                    return (n.longitude = e), (n.latitude = p), (n.height = 0), n;
                }),
                (m.prototype.findIntersectionWithLatitude = function(e, n) {
                    var r = this._ellipticity,
                        a = this._heading,
                        o = this._start;
                    if (!s.equalsEpsilon(Math.abs(a), s.PI_OVER_TWO, s.EPSILON8)) {
                        var u = f(r, o.latitude),
                            c = f(r, e),
                            l = Math.tan(a) * (c - u),
                            h = s.negativePiToPi(o.longitude + l);
                        return i(n)
                            ? ((n.longitude = h), (n.latitude = e), (n.height = 0), n)
                            : new t(h, e, 0);
                    }
                }),
                m
            );
        }),
        define("Core/WindingOrder", ["./freezeObject", "./WebGLConstants"], function(e, t) {
            "use strict";
            var n = {
                CLOCKWISE: t.CW,
                COUNTER_CLOCKWISE: t.CCW,
                validate: function(e) {
                    return e === n.CLOCKWISE || e === n.COUNTER_CLOCKWISE;
                }
            };
            return e(n);
        }),
        define("Core/PolygonPipeline", [
            "../ThirdParty/earcut-2.1.1",
            "./Cartesian2",
            "./Cartesian3",
            "./Cartographic",
            "./Check",
            "./ComponentDatatype",
            "./defaultValue",
            "./defined",
            "./Ellipsoid",
            "./EllipsoidRhumbLine",
            "./Geometry",
            "./GeometryAttribute",
            "./Math",
            "./PrimitiveType",
            "./WindingOrder"
        ], function(e, t, n, r, i, a, o, u, s, c, l, f, h, d, p) {
            "use strict";
            var E = new n(),
                m = new n(),
                y = {};
            (y.computeArea2D = function(e) {
                for (var t = e.length, n = 0, r = t - 1, i = 0; i < t; r = i++) {
                    var a = e[r],
                        o = e[i];
                    n += a.x * o.y - o.x * a.y;
                }
                return 0.5 * n;
            }),
                (y.computeWindingOrder2D = function(e) {
                    return y.computeArea2D(e) > 0 ? p.COUNTER_CLOCKWISE : p.CLOCKWISE;
                }),
                (y.triangulate = function(n, r) {
                    var i = t.packArray(n);
                    return e(i, r, 2);
                });
            var _ = new n(),
                T = new n(),
                R = new n(),
                v = new n(),
                A = new n(),
                g = new n(),
                S = new n();
            y.computeSubdivision = function(e, t, r, i) {
                i = o(i, h.RADIANS_PER_DEGREE);
                var s,
                    c = r.slice(0),
                    p = t.length,
                    E = new Array(3 * p),
                    m = 0;
                for (s = 0; s < p; s++) {
                    var y = t[s];
                    (E[m++] = y.x), (E[m++] = y.y), (E[m++] = y.z);
                }
                for (
                    var O = [], M = {}, I = e.maximumRadius, w = h.chordLength(i, I), N = w * w;
                    c.length > 0;

                ) {
                    var x,
                        C,
                        P = c.pop(),
                        U = c.pop(),
                        D = c.pop(),
                        L = n.fromArray(E, 3 * D, _),
                        F = n.fromArray(E, 3 * U, T),
                        b = n.fromArray(E, 3 * P, R),
                        B = n.multiplyByScalar(n.normalize(L, v), I, v),
                        q = n.multiplyByScalar(n.normalize(F, A), I, A),
                        z = n.multiplyByScalar(n.normalize(b, g), I, g),
                        G = n.magnitudeSquared(n.subtract(B, q, S)),
                        V = n.magnitudeSquared(n.subtract(q, z, S)),
                        W = n.magnitudeSquared(n.subtract(z, B, S)),
                        X = Math.max(G, V, W);
                    X > N
                        ? G === X
                            ? ((x = Math.min(D, U) + " " + Math.max(D, U)),
                              (s = M[x]),
                              u(s) ||
                                  ((C = n.add(L, F, S)),
                                  n.multiplyByScalar(C, 0.5, C),
                                  E.push(C.x, C.y, C.z),
                                  (s = E.length / 3 - 1),
                                  (M[x] = s)),
                              c.push(D, s, P),
                              c.push(s, U, P))
                            : V === X
                            ? ((x = Math.min(U, P) + " " + Math.max(U, P)),
                              (s = M[x]),
                              u(s) ||
                                  ((C = n.add(F, b, S)),
                                  n.multiplyByScalar(C, 0.5, C),
                                  E.push(C.x, C.y, C.z),
                                  (s = E.length / 3 - 1),
                                  (M[x] = s)),
                              c.push(U, s, D),
                              c.push(s, P, D))
                            : W === X &&
                              ((x = Math.min(P, D) + " " + Math.max(P, D)),
                              (s = M[x]),
                              u(s) ||
                                  ((C = n.add(b, L, S)),
                                  n.multiplyByScalar(C, 0.5, C),
                                  E.push(C.x, C.y, C.z),
                                  (s = E.length / 3 - 1),
                                  (M[x] = s)),
                              c.push(P, s, U),
                              c.push(s, D, U))
                        : (O.push(D), O.push(U), O.push(P));
                }
                return new l({
                    attributes: {
                        position: new f({
                            componentDatatype: a.DOUBLE,
                            componentsPerAttribute: 3,
                            values: E
                        })
                    },
                    indices: O,
                    primitiveType: d.TRIANGLES
                });
            };
            var O = new r(),
                M = new r(),
                I = new r(),
                w = new r();
            return (
                (y.computeRhumbLineSubdivision = function(e, t, r, i) {
                    i = o(i, h.RADIANS_PER_DEGREE);
                    var s,
                        p = r.slice(0),
                        E = t.length,
                        m = new Array(3 * E),
                        y = 0;
                    for (s = 0; s < E; s++) {
                        var v = t[s];
                        (m[y++] = v.x), (m[y++] = v.y), (m[y++] = v.z);
                    }
                    for (
                        var A = [],
                            g = {},
                            N = e.maximumRadius,
                            x = h.chordLength(i, N),
                            C = new c(void 0, void 0, e),
                            P = new c(void 0, void 0, e),
                            U = new c(void 0, void 0, e);
                        p.length > 0;

                    ) {
                        var D = p.pop(),
                            L = p.pop(),
                            F = p.pop(),
                            b = n.fromArray(m, 3 * F, _),
                            B = n.fromArray(m, 3 * L, T),
                            q = n.fromArray(m, 3 * D, R),
                            z = e.cartesianToCartographic(b, O),
                            G = e.cartesianToCartographic(B, M),
                            V = e.cartesianToCartographic(q, I);
                        C.setEndPoints(z, G);
                        var W = C.surfaceDistance;
                        P.setEndPoints(G, V);
                        var X = P.surfaceDistance;
                        U.setEndPoints(V, z);
                        var H,
                            Y,
                            k,
                            j,
                            Z = U.surfaceDistance,
                            K = Math.max(W, X, Z);
                        K > x
                            ? W === K
                                ? ((H = Math.min(F, L) + " " + Math.max(F, L)),
                                  (s = g[H]),
                                  u(s) ||
                                      ((Y = C.interpolateUsingFraction(0.5, w)),
                                      (k = 0.5 * (z.height + G.height)),
                                      (j = n.fromRadians(Y.longitude, Y.latitude, k, e, S)),
                                      m.push(j.x, j.y, j.z),
                                      (s = m.length / 3 - 1),
                                      (g[H] = s)),
                                  p.push(F, s, D),
                                  p.push(s, L, D))
                                : X === K
                                ? ((H = Math.min(L, D) + " " + Math.max(L, D)),
                                  (s = g[H]),
                                  u(s) ||
                                      ((Y = P.interpolateUsingFraction(0.5, w)),
                                      (k = 0.5 * (G.height + V.height)),
                                      (j = n.fromRadians(Y.longitude, Y.latitude, k, e, S)),
                                      m.push(j.x, j.y, j.z),
                                      (s = m.length / 3 - 1),
                                      (g[H] = s)),
                                  p.push(L, s, F),
                                  p.push(s, D, F))
                                : Z === K &&
                                  ((H = Math.min(D, F) + " " + Math.max(D, F)),
                                  (s = g[H]),
                                  u(s) ||
                                      ((Y = U.interpolateUsingFraction(0.5, w)),
                                      (k = 0.5 * (V.height + z.height)),
                                      (j = n.fromRadians(Y.longitude, Y.latitude, k, e, S)),
                                      m.push(j.x, j.y, j.z),
                                      (s = m.length / 3 - 1),
                                      (g[H] = s)),
                                  p.push(D, s, L),
                                  p.push(s, F, L))
                            : (A.push(F), A.push(L), A.push(D));
                    }
                    return new l({
                        attributes: {
                            position: new f({
                                componentDatatype: a.DOUBLE,
                                componentsPerAttribute: 3,
                                values: m
                            })
                        },
                        indices: A,
                        primitiveType: d.TRIANGLES
                    });
                }),
                (y.scaleToGeodeticHeight = function(e, t, r, i) {
                    r = o(r, s.WGS84);
                    var a = E,
                        c = m;
                    if (((t = o(t, 0)), (i = o(i, !0)), u(e)))
                        for (var l = e.length, f = 0; f < l; f += 3)
                            n.fromArray(e, f, c),
                                i && (c = r.scaleToGeodeticSurface(c, c)),
                                0 !== t &&
                                    ((a = r.geodeticSurfaceNormal(c, a)),
                                    n.multiplyByScalar(a, t, a),
                                    n.add(c, a, c)),
                                (e[f] = c.x),
                                (e[f + 1] = c.y),
                                (e[f + 2] = c.z);
                    return e;
                }),
                y
            );
        }),
        define("Core/AxisAlignedBoundingBox", [
            "./Cartesian3",
            "./Check",
            "./defaultValue",
            "./defined",
            "./Intersect"
        ], function(e, t, n, r, i) {
            "use strict";
            function a(t, i, a) {
                (this.minimum = e.clone(n(t, e.ZERO))),
                    (this.maximum = e.clone(n(i, e.ZERO))),
                    (a = r(a) ? e.clone(a) : e.midpoint(this.minimum, this.maximum, new e())),
                    (this.center = a);
            }
            (a.fromPoints = function(t, n) {
                if ((r(n) || (n = new a()), !r(t) || 0 === t.length))
                    return (
                        (n.minimum = e.clone(e.ZERO, n.minimum)),
                        (n.maximum = e.clone(e.ZERO, n.maximum)),
                        (n.center = e.clone(e.ZERO, n.center)),
                        n
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
                        E = d.y,
                        m = d.z;
                    (i = Math.min(p, i)),
                        (s = Math.max(p, s)),
                        (o = Math.min(E, o)),
                        (c = Math.max(E, c)),
                        (u = Math.min(m, u)),
                        (l = Math.max(m, l));
                }
                var y = n.minimum;
                (y.x = i), (y.y = o), (y.z = u);
                var _ = n.maximum;
                return (_.x = s), (_.y = c), (_.z = l), (n.center = e.midpoint(y, _, n.center)), n;
            }),
                (a.clone = function(t, n) {
                    if (r(t))
                        return r(n)
                            ? ((n.minimum = e.clone(t.minimum, n.minimum)),
                              (n.maximum = e.clone(t.maximum, n.maximum)),
                              (n.center = e.clone(t.center, n.center)),
                              n)
                            : new a(t.minimum, t.maximum, t.center);
                }),
                (a.equals = function(t, n) {
                    return (
                        t === n ||
                        (r(t) &&
                            r(n) &&
                            e.equals(t.center, n.center) &&
                            e.equals(t.minimum, n.minimum) &&
                            e.equals(t.maximum, n.maximum))
                    );
                });
            var o = new e();
            return (
                (a.intersectPlane = function(t, n) {
                    o = e.subtract(t.maximum, t.minimum, o);
                    var r = e.multiplyByScalar(o, 0.5, o),
                        a = n.normal,
                        u = r.x * Math.abs(a.x) + r.y * Math.abs(a.y) + r.z * Math.abs(a.z),
                        s = e.dot(t.center, a) + n.distance;
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
        define("Core/QuadraticRealPolynomial", ["./DeveloperError", "./Math"], function(e, t) {
            "use strict";
            function n(e, n, r) {
                var i = e + n;
                return t.sign(e) !== t.sign(n) &&
                    Math.abs(i / Math.max(Math.abs(e), Math.abs(n))) < r
                    ? 0
                    : i;
            }
            var r = {};
            return (
                (r.computeDiscriminant = function(e, t, n) {
                    return t * t - 4 * e * n;
                }),
                (r.computeRealRoots = function(e, r, i) {
                    var a;
                    if (0 === e) return 0 === r ? [] : [-i / r];
                    if (0 === r) {
                        if (0 === i) return [0, 0];
                        var o = Math.abs(i),
                            u = Math.abs(e);
                        if (o < u && o / u < t.EPSILON14) return [0, 0];
                        if (o > u && u / o < t.EPSILON14) return [];
                        if ((a = -i / e) < 0) return [];
                        var s = Math.sqrt(a);
                        return [-s, s];
                    }
                    if (0 === i) return (a = -r / e), a < 0 ? [a, 0] : [0, a];
                    var c = r * r,
                        l = 4 * e * i,
                        f = n(c, -l, t.EPSILON14);
                    if (f < 0) return [];
                    var h = -0.5 * n(r, t.sign(r) * Math.sqrt(f), t.EPSILON14);
                    return r > 0 ? [h / e, i / h] : [i / h, h / e];
                }),
                r
            );
        }),
        define("Core/CubicRealPolynomial", [
            "./DeveloperError",
            "./QuadraticRealPolynomial"
        ], function(e, t) {
            "use strict";
            function n(e, t, n, r) {
                var i,
                    a,
                    o = e,
                    u = t / 3,
                    s = n / 3,
                    c = r,
                    l = o * s,
                    f = u * c,
                    h = u * u,
                    d = s * s,
                    p = o * s - h,
                    E = o * c - u * s,
                    m = u * c - d,
                    y = 4 * p * m - E * E;
                if (y < 0) {
                    var _, T, R;
                    h * f >= l * d
                        ? ((_ = o), (T = p), (R = -2 * u * p + o * E))
                        : ((_ = c), (T = m), (R = -c * E + 2 * s * m));
                    var v = R < 0 ? -1 : 1,
                        A = -v * Math.abs(_) * Math.sqrt(-y);
                    a = -R + A;
                    var g = a / 2,
                        S = g < 0 ? -Math.pow(-g, 1 / 3) : Math.pow(g, 1 / 3),
                        O = a === A ? -S : -T / S;
                    return (
                        (i = T <= 0 ? S + O : -R / (S * S + O * O + T)),
                        h * f >= l * d ? [(i - u) / o] : [-c / (i + s)]
                    );
                }
                var M = p,
                    I = -2 * u * p + o * E,
                    w = m,
                    N = -c * E + 2 * s * m,
                    x = Math.sqrt(y),
                    C = Math.sqrt(3) / 2,
                    P = Math.abs(Math.atan2(o * x, -I) / 3);
                i = 2 * Math.sqrt(-M);
                var U = Math.cos(P);
                a = i * U;
                var D = i * (-U / 2 - C * Math.sin(P)),
                    L = a + D > 2 * u ? a - u : D - u,
                    F = o,
                    b = L / F;
                (P = Math.abs(Math.atan2(c * x, -N) / 3)),
                    (i = 2 * Math.sqrt(-w)),
                    (U = Math.cos(P)),
                    (a = i * U),
                    (D = i * (-U / 2 - C * Math.sin(P)));
                var B = -c,
                    q = a + D < 2 * s ? a + s : D + s,
                    z = B / q,
                    G = F * q,
                    V = -L * q - F * B,
                    W = L * B,
                    X = (s * V - u * W) / (-u * V + s * G);
                return b <= X
                    ? b <= z
                        ? X <= z
                            ? [b, X, z]
                            : [b, z, X]
                        : [z, b, X]
                    : b <= z
                    ? [X, b, z]
                    : X <= z
                    ? [X, z, b]
                    : [z, X, b];
            }
            var r = {};
            return (
                (r.computeDiscriminant = function(e, t, n, r) {
                    var i = e * e,
                        a = t * t,
                        o = n * n;
                    return (
                        18 * e * t * n * r + a * o - 27 * i * (r * r) - 4 * (e * o * n + a * t * r)
                    );
                }),
                (r.computeRealRoots = function(e, r, i, a) {
                    var o, u;
                    if (0 === e) return t.computeRealRoots(r, i, a);
                    if (0 === r) {
                        if (0 === i) {
                            if (0 === a) return [0, 0, 0];
                            u = -a / e;
                            var s = u < 0 ? -Math.pow(-u, 1 / 3) : Math.pow(u, 1 / 3);
                            return [s, s, s];
                        }
                        return 0 === a
                            ? ((o = t.computeRealRoots(e, 0, i)),
                              0 === o.Length ? [0] : [o[0], 0, o[1]])
                            : n(e, 0, i, a);
                    }
                    return 0 === i
                        ? 0 === a
                            ? ((u = -r / e), u < 0 ? [u, 0, 0] : [0, 0, u])
                            : n(e, r, 0, a)
                        : 0 === a
                        ? ((o = t.computeRealRoots(e, r, i)),
                          0 === o.length
                              ? [0]
                              : o[1] <= 0
                              ? [o[0], o[1], 0]
                              : o[0] >= 0
                              ? [0, o[0], o[1]]
                              : [o[0], 0, o[1]])
                        : n(e, r, i, a);
                }),
                r
            );
        }),
        define("Core/QuarticRealPolynomial", [
            "./CubicRealPolynomial",
            "./DeveloperError",
            "./Math",
            "./QuadraticRealPolynomial"
        ], function(e, t, n, r) {
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
                    if (Math.abs(d) < n.EPSILON14) {
                        var p = r.computeRealRoots(1, s, l);
                        if (2 === p.length) {
                            var E,
                                m = p[0],
                                y = p[1];
                            if (m >= 0 && y >= 0) {
                                var _ = Math.sqrt(m),
                                    T = Math.sqrt(y);
                                return [h - T, h - _, h + _, h + T];
                            }
                            if (m >= 0 && y < 0) return (E = Math.sqrt(m)), [h - E, h + E];
                            if (m < 0 && y >= 0) return (E = Math.sqrt(y)), [h - E, h + E];
                        }
                        return [];
                    }
                    if (d > 0) {
                        var R = Math.sqrt(d),
                            v = (s + d - c / R) / 2,
                            A = (s + d + c / R) / 2,
                            g = r.computeRealRoots(1, R, v),
                            S = r.computeRealRoots(1, -R, A);
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
                        E,
                        m = d[0],
                        y = i - m,
                        _ = y * y,
                        T = t / 2,
                        R = y / 2,
                        v = _ - 4 * o,
                        A = _ + 4 * Math.abs(o),
                        g = c - 4 * m,
                        S = c + 4 * Math.abs(m);
                    if (m < 0 || v * S < g * A) {
                        var O = Math.sqrt(g);
                        (p = O / 2), (E = 0 === O ? 0 : (t * R - a) / O);
                    } else {
                        var M = Math.sqrt(v);
                        (p = 0 === M ? 0 : (t * R - a) / M), (E = M / 2);
                    }
                    var I, w;
                    0 === T && 0 === p
                        ? ((I = 0), (w = 0))
                        : n.sign(T) === n.sign(p)
                        ? ((I = T + p), (w = m / I))
                        : ((w = T - p), (I = m / w));
                    var N, x;
                    0 === R && 0 === E
                        ? ((N = 0), (x = 0))
                        : n.sign(R) === n.sign(E)
                        ? ((N = R + E), (x = o / N))
                        : ((x = R - E), (N = o / x));
                    var C = r.computeRealRoots(1, I, N),
                        P = r.computeRealRoots(1, w, x);
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
                (o.computeDiscriminant = function(e, t, n, r, i) {
                    var a = e * e,
                        o = a * e,
                        u = t * t,
                        s = u * t,
                        c = n * n,
                        l = c * n,
                        f = r * r,
                        h = f * r,
                        d = i * i;
                    return (
                        u * c * f -
                        4 * s * h -
                        4 * e * l * f +
                        18 * e * t * n * h -
                        27 * a * f * f +
                        256 * o * (d * i) +
                        i *
                            (18 * s * n * r -
                                4 * u * l +
                                16 * e * c * c -
                                80 * e * t * c * r -
                                6 * e * u * f +
                                144 * a * n * f) +
                        d * (144 * e * u * n - 27 * u * u - 128 * a * c - 192 * a * t * r)
                    );
                }),
                (o.computeRealRoots = function(t, r, o, u, s) {
                    if (Math.abs(t) < n.EPSILON15) return e.computeRealRoots(r, o, u, s);
                    var c = r / t,
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
            n,
            r
        ) {
            "use strict";
            function i(t, r) {
                (r = e.clone(n(r, e.ZERO))),
                    e.equals(r, e.ZERO) || e.normalize(r, r),
                    (this.origin = e.clone(n(t, e.ZERO))),
                    (this.direction = r);
            }
            return (
                (i.clone = function(t, n) {
                    if (r(t))
                        return r(n)
                            ? ((n.origin = e.clone(t.origin)),
                              (n.direction = e.clone(t.direction)),
                              n)
                            : new i(t.origin, t.direction);
                }),
                (i.getPoint = function(t, n, i) {
                    return (
                        r(i) || (i = new e()),
                        (i = e.multiplyByScalar(t.direction, n, i)),
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
        ], function(e, t, n, r, i, a, o, u, s, c, l) {
            "use strict";
            function f(e, t, n, r) {
                var i = t * t - 4 * e * n;
                if (!(i < 0)) {
                    if (i > 0) {
                        var a = 1 / (2 * e),
                            o = Math.sqrt(i),
                            u = (-t + o) * a,
                            s = (-t - o) * a;
                        return (
                            u < s ? ((r.root0 = u), (r.root1 = s)) : ((r.root0 = s), (r.root1 = u)),
                            r
                        );
                    }
                    var c = -t / (2 * e);
                    if (0 !== c) return (r.root0 = r.root1 = c), r;
                }
            }
            function h(t, n, i) {
                r(i) || (i = new a());
                var o = t.origin,
                    u = t.direction,
                    s = n.center,
                    c = n.radius * n.radius,
                    l = e.subtract(o, s, _),
                    h = e.dot(u, u),
                    d = 2 * e.dot(u, l),
                    p = e.magnitudeSquared(l) - c,
                    E = f(h, d, p, A);
                if (r(E)) return (i.start = E.root0), (i.stop = E.root1), i;
            }
            function d(e, t, n) {
                var r = e + t;
                return o.sign(e) !== o.sign(t) &&
                    Math.abs(r / Math.max(Math.abs(e), Math.abs(t))) < n
                    ? 0
                    : r;
            }
            function p(t, n, r, i, a) {
                var l,
                    f = i * i,
                    h = a * a,
                    p = (t[u.COLUMN1ROW1] - t[u.COLUMN2ROW2]) * h,
                    E = a * (i * d(t[u.COLUMN1ROW0], t[u.COLUMN0ROW1], o.EPSILON15) + n.y),
                    m = t[u.COLUMN0ROW0] * f + t[u.COLUMN2ROW2] * h + i * n.x + r,
                    y = h * d(t[u.COLUMN2ROW1], t[u.COLUMN1ROW2], o.EPSILON15),
                    _ = a * (i * d(t[u.COLUMN2ROW0], t[u.COLUMN0ROW2]) + n.z),
                    T = [];
                if (0 === _ && 0 === y) {
                    if (((l = s.computeRealRoots(p, E, m)), 0 === l.length)) return T;
                    var R = l[0],
                        v = Math.sqrt(Math.max(1 - R * R, 0));
                    if (
                        (T.push(new e(i, a * R, a * -v)),
                        T.push(new e(i, a * R, a * v)),
                        2 === l.length)
                    ) {
                        var A = l[1],
                            g = Math.sqrt(Math.max(1 - A * A, 0));
                        T.push(new e(i, a * A, a * -g)), T.push(new e(i, a * A, a * g));
                    }
                    return T;
                }
                var S = _ * _,
                    O = y * y,
                    M = p * p,
                    I = _ * y,
                    w = M + O,
                    N = 2 * (E * p + I),
                    x = 2 * m * p + E * E - O + S,
                    C = 2 * (m * E - I),
                    P = m * m - S;
                if (0 === w && 0 === N && 0 === x && 0 === C) return T;
                l = c.computeRealRoots(w, N, x, C, P);
                var U = l.length;
                if (0 === U) return T;
                for (var D = 0; D < U; ++D) {
                    var L,
                        F = l[D],
                        b = F * F,
                        B = Math.max(1 - b, 0),
                        q = Math.sqrt(B);
                    L =
                        o.sign(p) === o.sign(m)
                            ? d(p * b + m, E * F, o.EPSILON12)
                            : o.sign(m) === o.sign(E * F)
                            ? d(p * b, E * F + m, o.EPSILON12)
                            : d(p * b + E * F, m, o.EPSILON12);
                    var z = d(y * F, _, o.EPSILON15),
                        G = L * z;
                    G < 0
                        ? T.push(new e(i, a * F, a * q))
                        : G > 0
                        ? T.push(new e(i, a * F, a * -q))
                        : 0 !== q
                        ? (T.push(new e(i, a * F, a * -q)), T.push(new e(i, a * F, a * q)), ++D)
                        : T.push(new e(i, a * F, a * q));
                }
                return T;
            }
            var E = {};
            E.rayPlane = function(t, n, i) {
                r(i) || (i = new e());
                var a = t.origin,
                    u = t.direction,
                    s = n.normal,
                    c = e.dot(s, u);
                if (!(Math.abs(c) < o.EPSILON15)) {
                    var l = (-n.distance - e.dot(s, a)) / c;
                    if (!(l < 0)) return (i = e.multiplyByScalar(u, l, i)), e.add(a, i, i);
                }
            };
            var m = new e(),
                y = new e(),
                _ = new e(),
                T = new e(),
                R = new e();
            (E.rayTriangleParametric = function(t, r, i, a, u) {
                u = n(u, !1);
                var s,
                    c,
                    l,
                    f,
                    h,
                    d = t.origin,
                    p = t.direction,
                    E = e.subtract(i, r, m),
                    v = e.subtract(a, r, y),
                    A = e.cross(p, v, _),
                    g = e.dot(E, A);
                if (u) {
                    if (g < o.EPSILON6) return;
                    if (((s = e.subtract(d, r, T)), (l = e.dot(s, A)) < 0 || l > g)) return;
                    if (((c = e.cross(s, E, R)), (f = e.dot(p, c)) < 0 || l + f > g)) return;
                    h = e.dot(v, c) / g;
                } else {
                    if (Math.abs(g) < o.EPSILON6) return;
                    var S = 1 / g;
                    if (((s = e.subtract(d, r, T)), (l = e.dot(s, A) * S) < 0 || l > 1)) return;
                    if (((c = e.cross(s, E, R)), (f = e.dot(p, c) * S) < 0 || l + f > 1)) return;
                    h = e.dot(v, c) * S;
                }
                return h;
            }),
                (E.rayTriangle = function(t, n, i, a, o, u) {
                    var s = E.rayTriangleParametric(t, n, i, a, o);
                    if (r(s) && !(s < 0))
                        return (
                            r(u) || (u = new e()),
                            e.multiplyByScalar(t.direction, s, u),
                            e.add(t.origin, u, u)
                        );
                });
            var v = new l();
            E.lineSegmentTriangle = function(t, n, i, a, o, u, s) {
                var c = v;
                e.clone(t, c.origin),
                    e.subtract(n, t, c.direction),
                    e.normalize(c.direction, c.direction);
                var l = E.rayTriangleParametric(c, i, a, o, u);
                if (!(!r(l) || l < 0 || l > e.distance(t, n)))
                    return (
                        r(s) || (s = new e()),
                        e.multiplyByScalar(c.direction, l, s),
                        e.add(c.origin, s, s)
                    );
            };
            var A = { root0: 0, root1: 0 };
            E.raySphere = function(e, t, n) {
                if (((n = h(e, t, n)), r(n) && !(n.stop < 0)))
                    return (n.start = Math.max(n.start, 0)), n;
            };
            var g = new l();
            E.lineSegmentSphere = function(t, n, i, a) {
                var o = g;
                e.clone(t, o.origin);
                var u = e.subtract(n, t, o.direction),
                    s = e.magnitude(u);
                if ((e.normalize(u, u), (a = h(o, i, a)), !(!r(a) || a.stop < 0 || a.start > s)))
                    return (a.start = Math.max(a.start, 0)), (a.stop = Math.min(a.stop, s)), a;
            };
            var S = new e(),
                O = new e();
            E.rayEllipsoid = function(t, n) {
                var r,
                    i,
                    o,
                    u,
                    s,
                    c = n.oneOverRadii,
                    l = e.multiplyComponents(c, t.origin, S),
                    f = e.multiplyComponents(c, t.direction, O),
                    h = e.magnitudeSquared(l),
                    d = e.dot(l, f);
                if (h > 1) {
                    if (d >= 0) return;
                    var p = d * d;
                    if (((r = h - 1), (i = e.magnitudeSquared(f)), (o = i * r), p < o)) return;
                    if (p > o) {
                        (u = d * d - o), (s = -d + Math.sqrt(u));
                        var E = s / i,
                            m = r / s;
                        return E < m ? new a(E, m) : { start: m, stop: E };
                    }
                    var y = Math.sqrt(r / i);
                    return new a(y, y);
                }
                return h < 1
                    ? ((r = h - 1),
                      (i = e.magnitudeSquared(f)),
                      (o = i * r),
                      (u = d * d - o),
                      (s = -d + Math.sqrt(u)),
                      new a(0, s / i))
                    : d < 0
                    ? ((i = e.magnitudeSquared(f)), new a(0, -d / i))
                    : void 0;
            };
            var M = new e(),
                I = new e(),
                w = new e(),
                N = new e(),
                x = new e(),
                C = new u(),
                P = new u(),
                U = new u(),
                D = new u(),
                L = new u(),
                F = new u(),
                b = new u(),
                B = new e(),
                q = new e(),
                z = new t();
            E.grazingAltitudeLocation = function(t, n) {
                var i = t.origin,
                    a = t.direction;
                if (!e.equals(i, e.ZERO)) {
                    var s = n.geodeticSurfaceNormal(i, M);
                    if (e.dot(a, s) >= 0) return i;
                }
                var c = r(this.rayEllipsoid(t, n)),
                    l = n.transformPositionToScaledSpace(a, M),
                    f = e.normalize(l, l),
                    h = e.mostOrthogonalAxis(l, N),
                    d = e.normalize(e.cross(h, f, I), I),
                    E = e.normalize(e.cross(f, d, w), w),
                    m = C;
                (m[0] = f.x),
                    (m[1] = f.y),
                    (m[2] = f.z),
                    (m[3] = d.x),
                    (m[4] = d.y),
                    (m[5] = d.z),
                    (m[6] = E.x),
                    (m[7] = E.y),
                    (m[8] = E.z);
                var y = u.transpose(m, P),
                    _ = u.fromScale(n.radii, U),
                    T = u.fromScale(n.oneOverRadii, D),
                    R = L;
                (R[0] = 0),
                    (R[1] = -a.z),
                    (R[2] = a.y),
                    (R[3] = a.z),
                    (R[4] = 0),
                    (R[5] = -a.x),
                    (R[6] = -a.y),
                    (R[7] = a.x),
                    (R[8] = 0);
                var v,
                    A,
                    g = u.multiply(u.multiply(y, T, F), R, F),
                    S = u.multiply(u.multiply(g, _, b), m, b),
                    O = u.multiplyByVector(g, i, x),
                    G = p(S, e.negate(O, M), 0, 0, 1),
                    V = G.length;
                if (V > 0) {
                    for (
                        var W = e.clone(e.ZERO, q), X = Number.NEGATIVE_INFINITY, H = 0;
                        H < V;
                        ++H
                    ) {
                        v = u.multiplyByVector(_, u.multiplyByVector(m, G[H], B), B);
                        var Y = e.normalize(e.subtract(v, i, N), N),
                            k = e.dot(Y, a);
                        k > X && ((X = k), (W = e.clone(v, W)));
                    }
                    var j = n.cartesianToCartographic(W, z);
                    return (
                        (X = o.clamp(X, 0, 1)),
                        (A = e.magnitude(e.subtract(W, i, N)) * Math.sqrt(1 - X * X)),
                        (A = c ? -A : A),
                        (j.height = A),
                        n.cartographicToCartesian(j, new e())
                    );
                }
            };
            var G = new e();
            return (
                (E.lineSegmentPlane = function(t, n, i, a) {
                    r(a) || (a = new e());
                    var u = e.subtract(n, t, G),
                        s = i.normal,
                        c = e.dot(s, u);
                    if (!(Math.abs(c) < o.EPSILON6)) {
                        var l = e.dot(s, t),
                            f = -(i.distance + l) / c;
                        if (!(f < 0 || f > 1))
                            return e.multiplyByScalar(u, f, a), e.add(t, a, a), a;
                    }
                }),
                (E.trianglePlaneIntersection = function(t, n, r, i) {
                    var a = i.normal,
                        o = i.distance,
                        u = e.dot(a, t) + o < 0,
                        s = e.dot(a, n) + o < 0,
                        c = e.dot(a, r) + o < 0,
                        l = 0;
                    (l += u ? 1 : 0), (l += s ? 1 : 0), (l += c ? 1 : 0);
                    var f, h;
                    if (((1 !== l && 2 !== l) || ((f = new e()), (h = new e())), 1 === l)) {
                        if (u)
                            return (
                                E.lineSegmentPlane(t, n, i, f),
                                E.lineSegmentPlane(t, r, i, h),
                                { positions: [t, n, r, f, h], indices: [0, 3, 4, 1, 2, 4, 1, 4, 3] }
                            );
                        if (s)
                            return (
                                E.lineSegmentPlane(n, r, i, f),
                                E.lineSegmentPlane(n, t, i, h),
                                { positions: [t, n, r, f, h], indices: [1, 3, 4, 2, 0, 4, 2, 4, 3] }
                            );
                        if (c)
                            return (
                                E.lineSegmentPlane(r, t, i, f),
                                E.lineSegmentPlane(r, n, i, h),
                                { positions: [t, n, r, f, h], indices: [2, 3, 4, 0, 1, 4, 0, 4, 3] }
                            );
                    } else if (2 === l) {
                        if (!u)
                            return (
                                E.lineSegmentPlane(n, t, i, f),
                                E.lineSegmentPlane(r, t, i, h),
                                { positions: [t, n, r, f, h], indices: [1, 2, 4, 1, 4, 3, 0, 3, 4] }
                            );
                        if (!s)
                            return (
                                E.lineSegmentPlane(r, n, i, f),
                                E.lineSegmentPlane(t, n, i, h),
                                { positions: [t, n, r, f, h], indices: [2, 0, 4, 2, 4, 3, 1, 3, 4] }
                            );
                        if (!c)
                            return (
                                E.lineSegmentPlane(t, r, i, f),
                                E.lineSegmentPlane(n, r, i, h),
                                { positions: [t, n, r, f, h], indices: [0, 1, 4, 0, 4, 3, 2, 3, 4] }
                            );
                    }
                }),
                E
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
        ], function(e, t, n, r, i, a, o) {
            "use strict";
            function u(t, n) {
                (this.normal = e.clone(t)), (this.distance = n);
            }
            u.fromPointNormal = function(t, r, i) {
                var a = -e.dot(r, t);
                return n(i) ? (e.clone(r, i.normal), (i.distance = a), i) : new u(r, a);
            };
            var s = new e();
            (u.fromCartesian4 = function(t, r) {
                var i = e.fromCartesian4(t, s),
                    a = t.w;
                return n(r) ? (e.clone(i, r.normal), (r.distance = a), r) : new u(i, a);
            }),
                (u.getPointDistance = function(t, n) {
                    return e.dot(t.normal, n) + t.distance;
                });
            var c = new e();
            u.projectPointOntoPlane = function(t, r, i) {
                n(i) || (i = new e());
                var a = u.getPointDistance(t, r),
                    o = e.multiplyByScalar(t.normal, a, c);
                return e.subtract(r, o, i);
            };
            var l = new e();
            return (
                (u.transform = function(t, n, r) {
                    return (
                        o.multiplyByPointAsVector(n, t.normal, s),
                        e.normalize(s, s),
                        e.multiplyByScalar(t.normal, -t.distance, l),
                        o.multiplyByPoint(n, l, l),
                        u.fromPointNormal(l, s, r)
                    );
                }),
                (u.clone = function(t, r) {
                    return n(r)
                        ? (e.clone(t.normal, r.normal), (r.distance = t.distance), r)
                        : new u(t.normal, t.distance);
                }),
                (u.equals = function(t, n) {
                    return t.distance === n.distance && e.equals(t.normal, n.normal);
                }),
                (u.ORIGIN_XY_PLANE = i(new u(e.UNIT_Z, 0))),
                (u.ORIGIN_YZ_PLANE = i(new u(e.UNIT_X, 0))),
                (u.ORIGIN_ZX_PLANE = i(new u(e.UNIT_Y, 0))),
                u
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
        ], function(e, t, n, r, i, a, o, u, s, c, l, f, h, d, p) {
            "use strict";
            function E(e, t) {
                (t = a(t, c.WGS84)), (e = t.scaleToGeodeticSurface(e));
                var r = p.eastNorthUpToFixedFrame(e, t);
                (this._ellipsoid = t),
                    (this._origin = e),
                    (this._xAxis = n.fromCartesian4(f.getColumn(r, 0, m))),
                    (this._yAxis = n.fromCartesian4(f.getColumn(r, 1, m)));
                var i = n.fromCartesian4(f.getColumn(r, 2, m));
                this._plane = h.fromPointNormal(e, i);
            }
            var m = new r();
            u(E.prototype, {
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
            E.fromPoints = function(t, n) {
                return new E(e.fromPoints(t, y).center, n);
            };
            var _ = new d(),
                T = new n();
            (E.prototype.projectPointOntoPlane = function(e, r) {
                var i = _;
                (i.origin = e), n.normalize(e, i.direction);
                var a = l.rayPlane(i, this._plane, T);
                if (
                    (o(a) ||
                        (n.negate(i.direction, i.direction), (a = l.rayPlane(i, this._plane, T))),
                    o(a))
                ) {
                    var u = n.subtract(a, this._origin, a),
                        s = n.dot(this._xAxis, u),
                        c = n.dot(this._yAxis, u);
                    return o(r) ? ((r.x = s), (r.y = c), r) : new t(s, c);
                }
            }),
                (E.prototype.projectPointsOntoPlane = function(e, t) {
                    o(t) || (t = []);
                    for (var n = 0, r = e.length, i = 0; i < r; i++) {
                        var a = this.projectPointOntoPlane(e[i], t[n]);
                        o(a) && ((t[n] = a), n++);
                    }
                    return (t.length = n), t;
                }),
                (E.prototype.projectPointToNearestOnPlane = function(e, r) {
                    o(r) || (r = new t());
                    var i = _;
                    (i.origin = e), n.clone(this._plane.normal, i.direction);
                    var a = l.rayPlane(i, this._plane, T);
                    o(a) ||
                        (n.negate(i.direction, i.direction), (a = l.rayPlane(i, this._plane, T)));
                    var u = n.subtract(a, this._origin, a),
                        s = n.dot(this._xAxis, u),
                        c = n.dot(this._yAxis, u);
                    return (r.x = s), (r.y = c), r;
                }),
                (E.prototype.projectPointsToNearestOnPlane = function(e, t) {
                    o(t) || (t = []);
                    var n = e.length;
                    t.length = n;
                    for (var r = 0; r < n; r++)
                        t[r] = this.projectPointToNearestOnPlane(e[r], t[r]);
                    return t;
                });
            var R = new n();
            return (
                (E.prototype.projectPointOntoEllipsoid = function(e, t) {
                    o(t) || (t = new n());
                    var r = this._ellipsoid,
                        i = this._origin,
                        a = this._xAxis,
                        u = this._yAxis,
                        s = R;
                    return (
                        n.multiplyByScalar(a, e.x, s),
                        (t = n.add(i, s, t)),
                        n.multiplyByScalar(u, e.y, s),
                        n.add(t, s, t),
                        r.scaleToGeocentricSurface(t, t),
                        t
                    );
                }),
                (E.prototype.projectPointsOntoEllipsoid = function(e, t) {
                    var n = e.length;
                    o(t) ? (t.length = n) : (t = new Array(n));
                    for (var r = 0; r < n; ++r) t[r] = this.projectPointOntoEllipsoid(e[r], t[r]);
                    return t;
                }),
                E
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
        ], function(e, t, n, r, i, a, o, u) {
            "use strict";
            function s(e) {
                var t = e._uSquared,
                    n = e._ellipsoid.maximumRadius,
                    r = e._ellipsoid.minimumRadius,
                    i = (n - r) / n,
                    a = Math.cos(e._startHeading),
                    o = Math.sin(e._startHeading),
                    u = (1 - i) * Math.tan(e._start.latitude),
                    s = 1 / Math.sqrt(1 + u * u),
                    c = s * u,
                    l = Math.atan2(u, a),
                    f = s * o,
                    h = f * f,
                    d = 1 - h,
                    p = Math.sqrt(d),
                    E = t / 4,
                    m = E * E,
                    y = m * E,
                    _ = m * m,
                    T = 1 + E - (3 * m) / 4 + (5 * y) / 4 - (175 * _) / 64,
                    R = 1 - E + (15 * m) / 8 - (35 * y) / 8,
                    v = 1 - 3 * E + (35 * m) / 4,
                    A = 1 - 5 * E,
                    g =
                        T * l -
                        (R * Math.sin(2 * l) * E) / 2 -
                        (v * Math.sin(4 * l) * m) / 16 -
                        (A * Math.sin(6 * l) * y) / 48 -
                        (5 * Math.sin(8 * l) * _) / 512,
                    S = e._constants;
                (S.a = n),
                    (S.b = r),
                    (S.f = i),
                    (S.cosineHeading = a),
                    (S.sineHeading = o),
                    (S.tanU = u),
                    (S.cosineU = s),
                    (S.sineU = c),
                    (S.sigma = l),
                    (S.sineAlpha = f),
                    (S.sineSquaredAlpha = h),
                    (S.cosineSquaredAlpha = d),
                    (S.cosineAlpha = p),
                    (S.u2Over4 = E),
                    (S.u4Over16 = m),
                    (S.u6Over64 = y),
                    (S.u8Over256 = _),
                    (S.a0 = T),
                    (S.a1 = R),
                    (S.a2 = v),
                    (S.a3 = A),
                    (S.distanceRatio = g);
            }
            function c(e, t) {
                return (e * t * (4 + e * (4 - 3 * t))) / 16;
            }
            function l(e, t, n, r, i, a, o) {
                var u = c(e, n);
                return (1 - u) * e * t * (r + u * i * (o + u * a * (2 * o * o - 1)));
            }
            function f(e, t, n, r, i, a, o) {
                var s,
                    c,
                    f,
                    h,
                    d,
                    p = (t - n) / t,
                    E = a - r,
                    m = Math.atan((1 - p) * Math.tan(i)),
                    y = Math.atan((1 - p) * Math.tan(o)),
                    _ = Math.cos(m),
                    T = Math.sin(m),
                    R = Math.cos(y),
                    v = Math.sin(y),
                    A = _ * R,
                    g = _ * v,
                    S = T * v,
                    O = T * R,
                    M = E,
                    I = u.TWO_PI,
                    w = Math.cos(M),
                    N = Math.sin(M);
                do {
                    (w = Math.cos(M)), (N = Math.sin(M));
                    var x = g - O * w;
                    (f = Math.sqrt(R * R * N * N + x * x)), (c = S + A * w), (s = Math.atan2(f, c));
                    var C;
                    0 === f ? ((C = 0), (h = 1)) : ((C = (A * N) / f), (h = 1 - C * C)),
                        (I = M),
                        (d = c - (2 * S) / h),
                        isNaN(d) && (d = 0),
                        (M = E + l(p, C, h, s, f, c, d));
                } while (Math.abs(M - I) > u.EPSILON12);
                var P = (h * (t * t - n * n)) / (n * n),
                    U = 1 + (P * (4096 + P * (P * (320 - 175 * P) - 768))) / 16384,
                    D = (P * (256 + P * (P * (74 - 47 * P) - 128))) / 1024,
                    L = d * d,
                    F =
                        D *
                        f *
                        (d +
                            (D * (c * (2 * L - 1) - (D * d * (4 * f * f - 3) * (4 * L - 3)) / 6)) /
                                4),
                    b = n * U * (s - F),
                    B = Math.atan2(R * N, g - O * w),
                    q = Math.atan2(_ * N, g * w - O);
                (e._distance = b), (e._startHeading = B), (e._endHeading = q), (e._uSquared = P);
            }
            function h(n, r, i, a) {
                e.normalize(a.cartographicToCartesian(r, E), p),
                    e.normalize(a.cartographicToCartesian(i, E), E);
                f(
                    n,
                    a.maximumRadius,
                    a.minimumRadius,
                    r.longitude,
                    r.latitude,
                    i.longitude,
                    i.latitude
                ),
                    (n._start = t.clone(r, n._start)),
                    (n._end = t.clone(i, n._end)),
                    (n._start.height = 0),
                    (n._end.height = 0),
                    s(n);
            }
            function d(e, n, a) {
                var u = r(a, o.WGS84);
                (this._ellipsoid = u),
                    (this._start = new t()),
                    (this._end = new t()),
                    (this._constants = {}),
                    (this._startHeading = void 0),
                    (this._endHeading = void 0),
                    (this._distance = void 0),
                    (this._uSquared = void 0),
                    i(e) && i(n) && h(this, e, n, u);
            }
            var p = new e(),
                E = new e();
            return (
                a(d.prototype, {
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
                (d.prototype.interpolateUsingSurfaceDistance = function(e, n) {
                    var r = this._constants,
                        a = r.distanceRatio + e / r.b,
                        o = Math.cos(2 * a),
                        u = Math.cos(4 * a),
                        s = Math.cos(6 * a),
                        c = Math.sin(2 * a),
                        f = Math.sin(4 * a),
                        h = Math.sin(6 * a),
                        d = Math.sin(8 * a),
                        p = a * a,
                        E = a * p,
                        m = r.u8Over256,
                        y = r.u2Over4,
                        _ = r.u6Over64,
                        T = r.u4Over16,
                        R =
                            (2 * E * m * o) / 3 +
                            a *
                                (1 -
                                    y +
                                    (7 * T) / 4 -
                                    (15 * _) / 4 +
                                    (579 * m) / 64 -
                                    (T - (15 * _) / 4 + (187 * m) / 16) * o -
                                    ((5 * _) / 4 - (115 * m) / 16) * u -
                                    (29 * m * s) / 16) +
                            (y / 2 - T + (71 * _) / 32 - (85 * m) / 16) * c +
                            ((5 * T) / 16 - (5 * _) / 4 + (383 * m) / 96) * f -
                            p * ((_ - (11 * m) / 2) * c + (5 * m * f) / 2) +
                            ((29 * _) / 96 - (29 * m) / 16) * h +
                            (539 * m * d) / 1536,
                        v = Math.asin(Math.sin(R) * r.cosineAlpha),
                        A = Math.atan((r.a / r.b) * Math.tan(v));
                    R -= r.sigma;
                    var g = Math.cos(2 * r.sigma + R),
                        S = Math.sin(R),
                        O = Math.cos(R),
                        M = r.cosineU * O,
                        I = r.sineU * S,
                        w = Math.atan2(S * r.sineHeading, M - I * r.cosineHeading),
                        N = w - l(r.f, r.sineAlpha, r.cosineSquaredAlpha, R, S, O, g);
                    return i(n)
                        ? ((n.longitude = this._start.longitude + N),
                          (n.latitude = A),
                          (n.height = 0),
                          n)
                        : new t(this._start.longitude + N, A, 0);
                }),
                d
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
            "./EllipsoidRhumbLine",
            "./IntersectionTests",
            "./isArray",
            "./Math",
            "./Matrix4",
            "./Plane"
        ], function(e, t, n, r, i, a, o, u, s, c, l, f, h) {
            "use strict";
            function d(e, t, n) {
                var r = M;
                r.length = e;
                var i;
                if (t === n) {
                    for (i = 0; i < e; i++) r[i] = t;
                    return r;
                }
                var a = n - t,
                    o = a / e;
                for (i = 0; i < e; i++) {
                    var u = t + i * o;
                    r[i] = u;
                }
                return r;
            }
            function p(t, n, r, i, a, o, u, s) {
                var c = i.scaleToGeodeticSurface(t, x),
                    l = i.scaleToGeodeticSurface(n, C),
                    f = m.numberOfPoints(t, n, r),
                    h = i.cartesianToCartographic(c, I),
                    p = i.cartesianToCartographic(l, w),
                    E = d(f, a, o);
                P.setEndPoints(h, p);
                var y = P.surfaceDistance / f,
                    _ = s;
                h.height = a;
                var T = i.cartographicToCartesian(h, N);
                e.pack(T, u, _), (_ += 3);
                for (var R = 1; R < f; R++) {
                    var v = P.interpolateUsingSurfaceDistance(R * y, w);
                    (v.height = E[R]),
                        (T = i.cartographicToCartesian(v, N)),
                        e.pack(T, u, _),
                        (_ += 3);
                }
                return _;
            }
            function E(t, n, r, i, a, o, s, c) {
                var l = i.scaleToGeodeticSurface(t, x),
                    f = i.scaleToGeodeticSurface(n, C),
                    h = i.cartesianToCartographic(l, I),
                    p = i.cartesianToCartographic(f, w),
                    E = m.numberOfPointsRhumbLine(h, p, r),
                    y = d(E, a, o);
                U.ellipsoid.equals(i) || (U = new u(void 0, void 0, i)), U.setEndPoints(h, p);
                var _ = U.surfaceDistance / E,
                    T = c;
                h.height = a;
                var R = i.cartographicToCartesian(h, N);
                e.pack(R, s, T), (T += 3);
                for (var v = 1; v < E; v++) {
                    var A = U.interpolateUsingSurfaceDistance(v * _, w);
                    (A.height = y[v]),
                        (R = i.cartographicToCartesian(A, N)),
                        e.pack(R, s, T),
                        (T += 3);
                }
                return T;
            }
            var m = {};
            (m.numberOfPoints = function(t, n, r) {
                var i = e.distance(t, n);
                return Math.ceil(i / r);
            }),
                (m.numberOfPointsRhumbLine = function(e, t, n) {
                    var r =
                        Math.pow(e.longitude - t.longitude, 2) +
                        Math.pow(e.latitude - t.latitude, 2);
                    return Math.ceil(Math.sqrt(r / (n * n)));
                });
            var y = new t();
            m.extractHeights = function(e, t) {
                for (var n = e.length, r = new Array(n), i = 0; i < n; i++) {
                    var a = e[i];
                    r[i] = t.cartesianToCartographic(a, y).height;
                }
                return r;
            };
            var _ = new f(),
                T = new e(),
                R = new e(),
                v = new h(e.UNIT_X, 0),
                A = new e(),
                g = new h(e.UNIT_X, 0),
                S = new e(),
                O = new e(),
                M = [],
                I = new t(),
                w = new t(),
                N = new e(),
                x = new e(),
                C = new e(),
                P = new o(),
                U = new u();
            (m.wrapLongitude = function(t, i) {
                var a = [],
                    o = [];
                if (r(t) && t.length > 0) {
                    i = n(i, f.IDENTITY);
                    var u = f.inverseTransformation(i, _),
                        c = f.multiplyByPoint(u, e.ZERO, T),
                        l = e.normalize(f.multiplyByPointAsVector(u, e.UNIT_Y, R), R),
                        d = h.fromPointNormal(c, l, v),
                        p = e.normalize(f.multiplyByPointAsVector(u, e.UNIT_X, A), A),
                        E = h.fromPointNormal(c, p, g),
                        m = 1;
                    a.push(e.clone(t[0]));
                    for (var y = a[0], M = t.length, I = 1; I < M; ++I) {
                        var w = t[I];
                        if (h.getPointDistance(E, y) < 0 || h.getPointDistance(E, w) < 0) {
                            var N = s.lineSegmentPlane(y, w, d, S);
                            if (r(N)) {
                                var x = e.multiplyByScalar(l, 5e-9, O);
                                h.getPointDistance(d, y) < 0 && e.negate(x, x),
                                    a.push(e.add(N, x, new e())),
                                    o.push(m + 1),
                                    e.negate(x, x),
                                    a.push(e.add(N, x, new e())),
                                    (m = 1);
                            }
                        }
                        a.push(e.clone(t[I])), m++, (y = w);
                    }
                    o.push(m);
                }
                return { positions: a, lengths: o };
            }),
                (m.generateArc = function(t) {
                    r(t) || (t = {});
                    var i = t.positions,
                        o = i.length,
                        u = n(t.ellipsoid, a.WGS84),
                        s = n(t.height, 0),
                        f = c(s);
                    if (o < 1) return [];
                    if (1 === o) {
                        var h = u.scaleToGeodeticSurface(i[0], x);
                        if (0 !== (s = f ? s[0] : s)) {
                            var d = u.geodeticSurfaceNormal(h, N);
                            e.multiplyByScalar(d, s, d), e.add(h, d, h);
                        }
                        return [h.x, h.y, h.z];
                    }
                    var E = t.minDistance;
                    if (!r(E)) {
                        var y = n(t.granularity, l.RADIANS_PER_DEGREE);
                        E = l.chordLength(y, u.maximumRadius);
                    }
                    var _,
                        T = 0;
                    for (_ = 0; _ < o - 1; _++) T += m.numberOfPoints(i[_], i[_ + 1], E);
                    var R = 3 * (T + 1),
                        v = new Array(R),
                        A = 0;
                    for (_ = 0; _ < o - 1; _++) {
                        A = p(i[_], i[_ + 1], E, u, f ? s[_] : s, f ? s[_ + 1] : s, v, A);
                    }
                    M.length = 0;
                    var g = i[o - 1],
                        S = u.cartesianToCartographic(g, I);
                    S.height = f ? s[o - 1] : s;
                    var O = u.cartographicToCartesian(S, N);
                    return e.pack(O, v, R - 3), v;
                });
            var D = new t(),
                L = new t();
            return (
                (m.generateRhumbArc = function(i) {
                    r(i) || (i = {});
                    var o = i.positions,
                        u = o.length,
                        s = n(i.ellipsoid, a.WGS84),
                        f = n(i.height, 0),
                        h = c(f);
                    if (u < 1) return [];
                    if (1 === u) {
                        var d = s.scaleToGeodeticSurface(o[0], x);
                        if (0 !== (f = h ? f[0] : f)) {
                            var p = s.geodeticSurfaceNormal(d, N);
                            e.multiplyByScalar(p, f, p), e.add(d, p, d);
                        }
                        return [d.x, d.y, d.z];
                    }
                    var y,
                        _,
                        T = n(i.granularity, l.RADIANS_PER_DEGREE),
                        R = 0,
                        v = s.cartesianToCartographic(o[0], D);
                    for (y = 0; y < u - 1; y++)
                        (_ = s.cartesianToCartographic(o[y + 1], L)),
                            (R += m.numberOfPointsRhumbLine(v, _, T)),
                            (v = t.clone(_, D));
                    var A = 3 * (R + 1),
                        g = new Array(A),
                        S = 0;
                    for (y = 0; y < u - 1; y++) {
                        S = E(o[y], o[y + 1], T, s, h ? f[y] : f, h ? f[y + 1] : f, g, S);
                    }
                    M.length = 0;
                    var O = o[u - 1],
                        w = s.cartesianToCartographic(O, I);
                    w.height = h ? f[u - 1] : f;
                    var C = s.cartographicToCartesian(w, N);
                    return e.pack(C, g, A - 3), g;
                }),
                (m.generateCartesianArc = function(t) {
                    for (
                        var n = m.generateArc(t), r = n.length / 3, i = new Array(r), a = 0;
                        a < r;
                        a++
                    )
                        i[a] = e.unpack(n, 3 * a);
                    return i;
                }),
                (m.generateCartesianRhumbArc = function(t) {
                    for (
                        var n = m.generateRhumbArc(t), r = n.length / 3, i = new Array(r), a = 0;
                        a < r;
                        a++
                    )
                        i[a] = e.unpack(n, 3 * a);
                    return i;
                }),
                m
            );
        }),
        define("Core/PolylineVolumeGeometryLibrary", [
            "./Cartesian2",
            "./Cartesian3",
            "./Cartesian4",
            "./Cartographic",
            "./CornerType",
            "./EllipsoidTangentPlane",
            "./Math",
            "./Matrix3",
            "./Matrix4",
            "./PolylinePipeline",
            "./Quaternion",
            "./Transforms"
        ], function(e, t, n, r, i, a, o, u, s, c, l, f) {
            "use strict";
            function h(e, t) {
                for (var n = new Array(e.length), r = 0; r < e.length; r++) {
                    var i = e[r];
                    (U = t.cartesianToCartographic(i, U)),
                        (n[r] = U.height),
                        (e[r] = t.scaleToGeodeticSurface(i, i));
                }
                return n;
            }
            function d(e, n, r, i) {
                var a,
                    o = e[0],
                    u = e[1],
                    s = t.angleBetween(o, u),
                    c = Math.ceil(s / i),
                    l = new Array(c);
                if (n === r) {
                    for (a = 0; a < c; a++) l[a] = n;
                    return l.push(r), l;
                }
                var f = r - n,
                    h = f / c;
                for (a = 1; a < c; a++) {
                    var d = n + a * h;
                    l[a] = d;
                }
                return (l[0] = n), l.push(r), l;
            }
            function p(n, r, i, o) {
                var u = new a(i, o),
                    s = u.projectPointOntoPlane(t.add(i, n, D), D),
                    c = u.projectPointOntoPlane(t.add(i, r, L), L),
                    l = e.angleBetween(s, c);
                return c.x * s.y - c.y * s.x >= 0 ? -l : l;
            }
            function E(e, n, r, i, a, o, c, l) {
                var h = G,
                    d = V;
                (b = f.eastNorthUpToFixedFrame(e, a, b)),
                    (h = s.multiplyByPointAsVector(b, F, h)),
                    (h = t.normalize(h, h));
                var E = p(h, n, e, a);
                (q = u.fromRotationZ(E, q)),
                    (W.z = o),
                    (b = s.multiplyTransformation(b, s.fromRotationTranslation(q, W, B), b));
                var m = z;
                m[0] = c;
                for (var y = 0; y < l; y++)
                    for (var _ = 0; _ < r.length; _ += 3)
                        (d = t.fromArray(r, _, d)),
                            (d = u.multiplyByVector(m, d, d)),
                            (d = s.multiplyByPoint(b, d, d)),
                            i.push(d.x, d.y, d.z);
                return i;
            }
            function m(e, n, r, i, a, o, u) {
                for (var s = 0; s < e.length; s += 3) {
                    i = E(t.fromArray(e, s, X), n, r, i, a, o[s / 3], u, 1);
                }
                return i;
            }
            function y(e, t) {
                var n = e.length,
                    r = new Array(6 * n),
                    i = 0,
                    a = t.x + t.width / 2,
                    o = t.y + t.height / 2,
                    u = e[0];
                (r[i++] = u.x - a), (r[i++] = 0), (r[i++] = u.y - o);
                for (var s = 1; s < n; s++) {
                    u = e[s];
                    var c = u.x - a,
                        l = u.y - o;
                    (r[i++] = c),
                        (r[i++] = 0),
                        (r[i++] = l),
                        (r[i++] = c),
                        (r[i++] = 0),
                        (r[i++] = l);
                }
                return (u = e[0]), (r[i++] = u.x - a), (r[i++] = 0), (r[i++] = u.y - o), r;
            }
            function _(e, t) {
                for (
                    var n = e.length,
                        r = new Array(3 * n),
                        i = 0,
                        a = t.x + t.width / 2,
                        o = t.y + t.height / 2,
                        u = 0;
                    u < n;
                    u++
                )
                    (r[i++] = e[u].x - a), (r[i++] = 0), (r[i++] = e[u].y - o);
                return r;
            }
            function T(e, n, r, a, s, c, f, h, d, p) {
                var m,
                    y = t.angleBetween(t.subtract(n, e, x), t.subtract(r, e, C)),
                    _ = a === i.BEVELED ? 0 : Math.ceil(y / o.toRadians(5));
                m = s
                    ? u.fromQuaternion(l.fromAxisAngle(t.negate(e, x), y / (_ + 1), H), k)
                    : u.fromQuaternion(l.fromAxisAngle(e, y / (_ + 1), H), k);
                var T, R;
                if (((n = t.clone(n, Y)), _ > 0))
                    for (var v = p ? 2 : 1, A = 0; A < _; A++)
                        (n = u.multiplyByVector(m, n, n)),
                            (T = t.subtract(n, e, x)),
                            (T = t.normalize(T, T)),
                            s || (T = t.negate(T, T)),
                            (R = c.scaleToGeodeticSurface(n, C)),
                            (f = E(R, T, h, f, c, d, 1, v));
                else
                    (T = t.subtract(n, e, x)),
                        (T = t.normalize(T, T)),
                        s || (T = t.negate(T, T)),
                        (R = c.scaleToGeodeticSurface(n, C)),
                        (f = E(R, T, h, f, c, d, 1, 1)),
                        (r = t.clone(r, Y)),
                        (T = t.subtract(r, e, x)),
                        (T = t.normalize(T, T)),
                        s || (T = t.negate(T, T)),
                        (R = c.scaleToGeodeticSurface(r, C)),
                        (f = E(R, T, h, f, c, d, 1, 1));
                return f;
            }
            var R = [new t(), new t()],
                v = new t(),
                A = new t(),
                g = new t(),
                S = new t(),
                O = new t(),
                M = new t(),
                I = new t(),
                w = new t(),
                N = new t(),
                x = new t(),
                C = new t(),
                P = {},
                U = new r(),
                D = new t(),
                L = new t(),
                F = new t(-1, 0, 0),
                b = new s(),
                B = new s(),
                q = new u(),
                z = u.IDENTITY.clone(),
                G = new t(),
                V = new n(),
                W = new t(),
                X = new t(),
                H = new l(),
                Y = new t(),
                k = new u();
            (P.removeDuplicatesFromShape = function(t) {
                for (var n = t.length, r = [], i = n - 1, a = 0; a < n; i = a++) {
                    var o = t[i],
                        u = t[a];
                    e.equals(o, u) || r.push(u);
                }
                return r;
            }),
                (P.angleIsGreaterThanPi = function(e, n, r, i) {
                    var o = new a(r, i),
                        u = o.projectPointOntoPlane(t.add(r, e, D), D),
                        s = o.projectPointOntoPlane(t.add(r, n, L), L);
                    return s.x * u.y - s.y * u.x >= 0;
                });
            var j = new t(),
                Z = new t();
            return (
                (P.computePositions = function(e, n, r, a, u) {
                    var s = a._ellipsoid,
                        l = h(e, s),
                        f = a._granularity,
                        p = a._cornerType,
                        C = u ? y(n, r) : _(n, r),
                        U = u ? _(n, r) : void 0,
                        D = r.height / 2,
                        L = r.width / 2,
                        F = e.length,
                        b = [],
                        B = u ? [] : void 0,
                        q = v,
                        z = A,
                        G = g,
                        V = S,
                        W = O,
                        X = M,
                        H = I,
                        Y = w,
                        k = N,
                        K = e[0],
                        J = e[1];
                    (V = s.geodeticSurfaceNormal(K, V)),
                        (q = t.subtract(J, K, q)),
                        (q = t.normalize(q, q)),
                        (Y = t.cross(V, q, Y)),
                        (Y = t.normalize(Y, Y));
                    var Q = l[0],
                        $ = l[1];
                    u && (B = E(K, Y, U, B, s, Q + D, 1, 1)),
                        (k = t.clone(K, k)),
                        (K = J),
                        (z = t.negate(q, z));
                    for (var ee, te, ne = 1; ne < F - 1; ne++) {
                        var re = u ? 2 : 1;
                        (J = e[ne + 1]),
                            (q = t.subtract(J, K, q)),
                            (q = t.normalize(q, q)),
                            (G = t.add(q, z, G)),
                            (G = t.normalize(G, G)),
                            (V = s.geodeticSurfaceNormal(K, V));
                        var ie = t.multiplyByScalar(V, t.dot(q, V), j);
                        t.subtract(q, ie, ie), t.normalize(ie, ie);
                        var ae = t.multiplyByScalar(V, t.dot(z, V), Z);
                        t.subtract(z, ae, ae), t.normalize(ae, ae);
                        if (!o.equalsEpsilon(Math.abs(t.dot(ie, ae)), 1, o.EPSILON7)) {
                            (G = t.cross(G, V, G)), (G = t.cross(V, G, G)), (G = t.normalize(G, G));
                            var oe = 1 / Math.max(0.25, t.magnitude(t.cross(G, z, x))),
                                ue = P.angleIsGreaterThanPi(q, z, K, s);
                            ue
                                ? ((W = t.add(K, t.multiplyByScalar(G, oe * L, G), W)),
                                  (X = t.add(W, t.multiplyByScalar(Y, L, X), X)),
                                  (R[0] = t.clone(k, R[0])),
                                  (R[1] = t.clone(X, R[1])),
                                  (ee = d(R, Q + D, $ + D, f)),
                                  (te = c.generateArc({
                                      positions: R,
                                      granularity: f,
                                      ellipsoid: s
                                  })),
                                  (b = m(te, Y, C, b, s, ee, 1)),
                                  (Y = t.cross(V, q, Y)),
                                  (Y = t.normalize(Y, Y)),
                                  (H = t.add(W, t.multiplyByScalar(Y, L, H), H)),
                                  p === i.ROUNDED || p === i.BEVELED
                                      ? T(W, X, H, p, ue, s, b, C, $ + D, u)
                                      : ((G = t.negate(G, G)),
                                        (b = E(K, G, C, b, s, $ + D, oe, re))),
                                  (k = t.clone(H, k)))
                                : ((W = t.add(K, t.multiplyByScalar(G, oe * L, G), W)),
                                  (X = t.add(W, t.multiplyByScalar(Y, -L, X), X)),
                                  (R[0] = t.clone(k, R[0])),
                                  (R[1] = t.clone(X, R[1])),
                                  (ee = d(R, Q + D, $ + D, f)),
                                  (te = c.generateArc({
                                      positions: R,
                                      granularity: f,
                                      ellipsoid: s
                                  })),
                                  (b = m(te, Y, C, b, s, ee, 1)),
                                  (Y = t.cross(V, q, Y)),
                                  (Y = t.normalize(Y, Y)),
                                  (H = t.add(W, t.multiplyByScalar(Y, -L, H), H)),
                                  p === i.ROUNDED || p === i.BEVELED
                                      ? T(W, X, H, p, ue, s, b, C, $ + D, u)
                                      : (b = E(K, G, C, b, s, $ + D, oe, re)),
                                  (k = t.clone(H, k))),
                                (z = t.negate(q, z));
                        } else (b = E(k, Y, C, b, s, Q + D, 1, 1)), (k = K);
                        (Q = $), ($ = l[ne + 1]), (K = J);
                    }
                    (R[0] = t.clone(k, R[0])),
                        (R[1] = t.clone(K, R[1])),
                        (ee = d(R, Q + D, $ + D, f)),
                        (te = c.generateArc({ positions: R, granularity: f, ellipsoid: s })),
                        (b = m(te, Y, C, b, s, ee, 1)),
                        u && (B = E(K, Y, U, B, s, $ + D, 1, 1)),
                        (F = b.length);
                    var se = u ? F + B.length : F,
                        ce = new Float64Array(se);
                    return ce.set(b), u && ce.set(B, F), ce;
                }),
                P
            );
        }),
        define("Core/PolylineVolumeOutlineGeometry", [
            "./arrayRemoveDuplicates",
            "./BoundingRectangle",
            "./BoundingSphere",
            "./Cartesian2",
            "./Cartesian3",
            "./ComponentDatatype",
            "./CornerType",
            "./defaultValue",
            "./defined",
            "./DeveloperError",
            "./Ellipsoid",
            "./Geometry",
            "./GeometryAttribute",
            "./GeometryAttributes",
            "./IndexDatatype",
            "./Math",
            "./PolygonPipeline",
            "./PolylineVolumeGeometryLibrary",
            "./PrimitiveType",
            "./WindingOrder"
        ], function(e, t, n, r, i, a, o, u, s, c, l, f, h, d, p, E, m, y, _, T) {
            "use strict";
            function R(e, t) {
                var r = new d();
                r.position = new h({
                    componentDatatype: a.DOUBLE,
                    componentsPerAttribute: 3,
                    values: e
                });
                var i,
                    o,
                    u = t.length,
                    s = r.position.values.length / 3,
                    c = e.length / 3,
                    l = c / u,
                    E = p.createTypedArray(s, 2 * u * (l + 1)),
                    m = 0;
                i = 0;
                var y = i * u;
                for (o = 0; o < u - 1; o++) (E[m++] = o + y), (E[m++] = o + y + 1);
                for (E[m++] = u - 1 + y, E[m++] = y, i = l - 1, y = i * u, o = 0; o < u - 1; o++)
                    (E[m++] = o + y), (E[m++] = o + y + 1);
                for (E[m++] = u - 1 + y, E[m++] = y, i = 0; i < l - 1; i++) {
                    var T = u * i,
                        R = T + u;
                    for (o = 0; o < u; o++) (E[m++] = o + T), (E[m++] = o + R);
                }
                return new f({
                    attributes: r,
                    indices: p.createTypedArray(s, E),
                    boundingSphere: n.fromVertices(e),
                    primitiveType: _.LINES
                });
            }
            function v(e) {
                e = u(e, u.EMPTY_OBJECT);
                var t = e.polylinePositions,
                    n = e.shapePositions;
                (this._positions = t),
                    (this._shape = n),
                    (this._ellipsoid = l.clone(u(e.ellipsoid, l.WGS84))),
                    (this._cornerType = u(e.cornerType, o.ROUNDED)),
                    (this._granularity = u(e.granularity, E.RADIANS_PER_DEGREE)),
                    (this._workerName = "createPolylineVolumeOutlineGeometry");
                var a = 1 + t.length * i.packedLength;
                (a += 1 + n.length * r.packedLength), (this.packedLength = a + l.packedLength + 2);
            }
            v.pack = function(e, t, n) {
                n = u(n, 0);
                var a,
                    o = e._positions,
                    s = o.length;
                for (t[n++] = s, a = 0; a < s; ++a, n += i.packedLength) i.pack(o[a], t, n);
                var c = e._shape;
                for (s = c.length, t[n++] = s, a = 0; a < s; ++a, n += r.packedLength)
                    r.pack(c[a], t, n);
                return (
                    l.pack(e._ellipsoid, t, n),
                    (n += l.packedLength),
                    (t[n++] = e._cornerType),
                    (t[n] = e._granularity),
                    t
                );
            };
            var A = l.clone(l.UNIT_SPHERE),
                g = {
                    polylinePositions: void 0,
                    shapePositions: void 0,
                    ellipsoid: A,
                    height: void 0,
                    cornerType: void 0,
                    granularity: void 0
                };
            v.unpack = function(e, t, n) {
                t = u(t, 0);
                var a,
                    o = e[t++],
                    c = new Array(o);
                for (a = 0; a < o; ++a, t += i.packedLength) c[a] = i.unpack(e, t);
                o = e[t++];
                var f = new Array(o);
                for (a = 0; a < o; ++a, t += r.packedLength) f[a] = r.unpack(e, t);
                var h = l.unpack(e, t, A);
                t += l.packedLength;
                var d = e[t++],
                    p = e[t];
                return s(n)
                    ? ((n._positions = c),
                      (n._shape = f),
                      (n._ellipsoid = l.clone(h, n._ellipsoid)),
                      (n._cornerType = d),
                      (n._granularity = p),
                      n)
                    : ((g.polylinePositions = c),
                      (g.shapePositions = f),
                      (g.cornerType = d),
                      (g.granularity = p),
                      new v(g));
            };
            var S = new t();
            return (
                (v.createGeometry = function(n) {
                    var r = n._positions,
                        a = e(r, i.equalsEpsilon),
                        o = n._shape;
                    if (((o = y.removeDuplicatesFromShape(o)), !(a.length < 2 || o.length < 3))) {
                        m.computeWindingOrder2D(o) === T.CLOCKWISE && o.reverse();
                        var u = t.fromPoints(o, S);
                        return R(y.computePositions(a, o, u, n, !1), o);
                    }
                }),
                v
            );
        }),
        define("Workers/createPolylineVolumeOutlineGeometry", [
            "../Core/defined",
            "../Core/Ellipsoid",
            "../Core/PolylineVolumeOutlineGeometry"
        ], function(e, t, n) {
            "use strict";
            function r(r, i) {
                return (
                    e(i) && (r = n.unpack(r, i)),
                    (r._ellipsoid = t.clone(r._ellipsoid)),
                    n.createGeometry(r)
                );
            }
            return r;
        });
})();

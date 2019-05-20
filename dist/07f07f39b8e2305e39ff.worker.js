!(function(e) {
    var t = {};
    function n(o) {
        if (t[o]) return t[o].exports;
        var r = (t[o] = { i: o, l: !1, exports: {} });
        return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function(e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
        }),
        (n.r = function(e) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function(e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (
                (n.r(o),
                Object.defineProperty(o, "default", { enumerable: !0, value: e }),
                2 & t && "string" != typeof e)
            )
                for (var r in e)
                    n.d(
                        o,
                        r,
                        function(t) {
                            return e[t];
                        }.bind(null, r)
                    );
            return o;
        }),
        (n.n = function(e) {
            var t =
                e && e.__esModule
                    ? function() {
                          return e.default;
                      }
                    : function() {
                          return e;
                      };
            return n.d(t, "a", t), t;
        }),
        (n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ""),
        n((n.s = 9));
})([
    function(e, t) {
        e.exports = function(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                      })
                    : (e[t] = n),
                e
            );
        };
    },
    function(e, t) {
        e.exports = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        };
    },
    function(e, t) {
        function n(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
            }
        }
        e.exports = function(e, t, o) {
            return t && n(e.prototype, t), o && n(e, o), e;
        };
    },
    function(e, t, n) {
        var o = n(6),
            r = n(7);
        e.exports = function(e, t) {
            return !t || ("object" !== o(t) && "function" != typeof t) ? r(e) : t;
        };
    },
    function(e, t) {
        function n(t) {
            return (
                (e.exports = n = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function(e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      }),
                n(t)
            );
        }
        e.exports = n;
    },
    function(e, t, n) {
        var o = n(8);
        e.exports = function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
            })),
                t && o(e, t);
        };
    },
    function(e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function(e) {
                          return typeof e;
                      }
                    : function(e) {
                          return e &&
                              "function" == typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? "symbol"
                              : typeof e;
                      })(e);
        }
        function o(t) {
            return (
                "function" == typeof Symbol && "symbol" === n(Symbol.iterator)
                    ? (e.exports = o = function(e) {
                          return n(e);
                      })
                    : (e.exports = o = function(e) {
                          return e &&
                              "function" == typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? "symbol"
                              : n(e);
                      }),
                o(t)
            );
        }
        e.exports = o;
    },
    function(e, t) {
        e.exports = function(e) {
            if (void 0 === e)
                throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                );
            return e;
        };
    },
    function(e, t) {
        function n(t, o) {
            return (
                (e.exports = n =
                    Object.setPrototypeOf ||
                    function(e, t) {
                        return (e.__proto__ = t), e;
                    }),
                n(t, o)
            );
        }
        e.exports = n;
    },
    function(e, t, n) {
        "use strict";
        n.r(t);
        var o,
            r = n(0),
            i = n.n(r),
            u = ((o = {}),
            i()(o, "Circle", "Circle"),
            i()(o, "LineString", "LineString"),
            i()(o, "Polygon", "Polygon"),
            i()(o, "Point", "Point"),
            i()(o, "Line", "LineString"),
            i()(o, "Box", "Circle"),
            n(1)),
            c = n.n(u),
            a = n(2),
            f = n.n(a),
            s = n(3),
            l = n.n(s),
            p = n(4),
            y = n.n(p),
            b = n(5),
            d = n.n(b),
            O = (function() {
                function e() {
                    c()(this, e);
                }
                return (
                    f()(e, [
                        {
                            key: "handleMessage",
                            value: function(e, t) {
                                switch (e.operation) {
                                    case "WORKER_TASK_TEST":
                                        return this.handleTest(e);
                                    default:
                                        return new Promise(function(e, t) {
                                            e({});
                                        });
                                }
                            }
                        },
                        {
                            key: "handleTest",
                            value: function(e) {
                                var t = e.data,
                                    n = void 0 !== e.delay ? e.delay : 500;
                                return new Promise(function(e, o) {
                                    setTimeout(function() {
                                        e(t);
                                    }, n);
                                });
                            }
                        }
                    ]),
                    e
                );
            })(),
            _ = new ((function(e) {
                function t() {
                    return c()(this, t), l()(this, y()(t).apply(this, arguments));
                }
                return (
                    d()(t, e),
                    f()(t, [
                        {
                            key: "handleMessage",
                            value: function(e, t) {
                                e.operation;
                                return O.prototype.handleMessage.call(this, e, t);
                            }
                        }
                    ]),
                    t
                );
            })(O))();
        self.addEventListener("message", function(e) {
            var t = e.data.operation,
                n = e.data.workerId;
            try {
                switch (t) {
                    case "WORKER_TASK_COMPLETE":
                    case "WORKER_TASK_COMPLETE_ERROR":
                        break;
                    case "WORKER_TASK_CLOSE":
                        close();
                        break;
                    default:
                        _.handleMessage(e.data, self).then(
                            function(e) {
                                self.postMessage({
                                    operation: "WORKER_TASK_COMPLETE",
                                    prevOperation: t,
                                    workerId: n,
                                    data: e
                                });
                            },
                            function(e) {
                                self.postMessage({
                                    operation: "WORKER_TASK_COMPLETE_ERROR",
                                    prevOperation: t,
                                    workerId: n
                                });
                            }
                        );
                }
            } catch (e) {
                console.warn("ERROR in Worker: " + n, e),
                    self.postMessage({
                        operation: "WORKER_TASK_COMPLETE_ERROR",
                        prevOperation: t,
                        workerId: n
                    });
            }
        });
    }
]);

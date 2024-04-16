(() => {
    "use strict";
    var e, v = {},
        y = {};

    function r(e) {
        var o = y[e];
        if (void 0 !== o) return o.exports;
        var t = y[e] = {
            exports: {}
        };
        return v[e].call(t.exports, t, t.exports, r), t.exports
    }
    r.m = v, r.amdO = {}, e = [], r.O = (o, t, i, f) => {
        if (!t) {
            var a = 1 / 0;
            for (n = 0; n < e.length; n++) {
                for (var [t, i, f] = e[n], u = !0, l = 0; l < t.length; l++)(!1 & f || a >= f) && Object.keys(r.O).every(b => r.O[b](t[l])) ? t.splice(l--, 1) : (u = !1, f < a && (a = f));
                if (u) {
                    e.splice(n--, 1);
                    var s = i();
                    void 0 !== s && (o = s)
                }
            }
            return o
        }
        f = f || 0;
        for (var n = e.length; n > 0 && e[n - 1][2] > f; n--) e[n] = e[n - 1];
        e[n] = [t, i, f]
    }, r.n = e => {
        var o = e && e.__esModule ? () => e.default : () => e;
        return r.d(o, {
            a: o
        }), o
    }, (() => {
        var o, e = Object.getPrototypeOf ? t => Object.getPrototypeOf(t) : t => t.__proto__;
        r.t = function(t, i) {
            if (1 & i && (t = this(t)), 8 & i || "object" == typeof t && t && (4 & i && t.__esModule || 16 & i && "function" == typeof t.then)) return t;
            var f = Object.create(null);
            r.r(f);
            var n = {};
            o = o || [null, e({}), e([]), e(e)];
            for (var a = 2 & i && t;
                "object" == typeof a && !~o.indexOf(a); a = e(a)) Object.getOwnPropertyNames(a).forEach(u => n[u] = () => t[u]);
            return n.default = () => t, r.d(f, n), f
        }
    })(), r.d = (e, o) => {
        for (var t in o) r.o(o, t) && !r.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: o[t]
        })
    }, r.f = {}, r.e = e => Promise.all(Object.keys(r.f).reduce((o, t) => (r.f[t](e, o), o), [])), r.u = e => "lottie-web.d1f7e80ce2a58b85.js", r.miniCssF = e => "styles.b513c06b0e9bdbc9.css", r.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o), (() => {
        var e = {},
            o = "lotteryBoilerplate:";
        r.l = (t, i, f, n) => {
            if (e[t]) e[t].push(i);
            else {
                var a, u;
                if (void 0 !== f)
                    for (var l = document.getElementsByTagName("script"), s = 0; s < l.length; s++) {
                        var d = l[s];
                        if (d.getAttribute("src") == t || d.getAttribute("data-webpack") == o + f) {
                            a = d;
                            break
                        }
                    }
                a || (u = !0, (a = document.createElement("script")).type = "module", a.charset = "utf-8", a.timeout = 120, r.nc && a.setAttribute("nonce", r.nc), a.setAttribute("data-webpack", o + f), a.src = r.tu(t)), e[t] = [i];
                var c = (g, b) => {
                        a.onerror = a.onload = null, clearTimeout(p);
                        var _ = e[t];
                        if (delete e[t], a.parentNode && a.parentNode.removeChild(a), _ && _.forEach(h => h(b)), g) return g(b)
                    },
                    p = setTimeout(c.bind(null, void 0, {
                        type: "timeout",
                        target: a
                    }), 12e4);
                a.onerror = c.bind(null, a.onerror), a.onload = c.bind(null, a.onload), u && document.head.appendChild(a)
            }
        }
    })(), r.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        var e;
        r.tu = o => (void 0 === e && (e = {
            createScriptURL: t => t
        }, "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (e = trustedTypes.createPolicy("angular#bundler", e))), e.createScriptURL(o))
    })(), r.p = "", (() => {
        var e = {
            666: 0
        };
        r.f.j = (i, f) => {
            var n = r.o(e, i) ? e[i] : void 0;
            if (0 !== n)
                if (n) f.push(n[2]);
                else if (666 != i) {
                var a = new Promise((d, c) => n = e[i] = [d, c]);
                f.push(n[2] = a);
                var u = r.p + r.u(i),
                    l = new Error;
                r.l(u, d => {
                    if (r.o(e, i) && (0 !== (n = e[i]) && (e[i] = void 0), n)) {
                        var c = d && ("load" === d.type ? "missing" : d.type),
                            p = d && d.target && d.target.src;
                        l.message = "Loading chunk " + i + " failed.\n(" + c + ": " + p + ")", l.name = "ChunkLoadError", l.type = c, l.request = p, n[1](l)
                    }
                }, "chunk-" + i, i)
            } else e[i] = 0
        }, r.O.j = i => 0 === e[i];
        var o = (i, f) => {
                var l, s, [n, a, u] = f,
                    d = 0;
                if (n.some(p => 0 !== e[p])) {
                    for (l in a) r.o(a, l) && (r.m[l] = a[l]);
                    if (u) var c = u(r)
                }
                for (i && i(f); d < n.length; d++) r.o(e, s = n[d]) && e[s] && e[s][0](), e[n[d]] = 0;
                return r.O(c)
            },
            t = self.webpackChunklotteryBoilerplate = self.webpackChunklotteryBoilerplate || [];
        t.forEach(o.bind(null, 0)), t.push = o.bind(null, t.push.bind(t))
    })()
})();
if (Array.prototype.filter || (Array.prototype.filter = function(a) {
    "use strict";
    if (void 0 === this || null === this) throw new TypeError;
    var b = Object(this),
    c = b.length >>> 0;
    if ("function" != typeof a) throw new TypeError;
    for (var d = [], e = arguments.length >= 2 ? arguments[1] : void 0, f = 0; c > f; f++) if (f in b) {
        var g = b[f];
        a.call(e, g, f, b) && d.push(g)
    }
    return d
}),
function() {
    for (var a = 0,
    b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !window.requestAnimationFrame; ++c) window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"],
    window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(b) {
        var c = (new Date).getTime(),
        d = Math.max(0, 16 - (c - a)),
        e = window.setTimeout(function() {
            b(c + d)
        },
        d);
        return a = c + d,
        e
    }),
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
        clearTimeout(a)
    })
} (),
function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    }: b(a)
} ("undefined" != typeof window ? window: this,
function(a, b) {
    function c(a) {
        var b = a.length,
        c = _.type(a);
        return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    function d(a, b, c) {
        if (_.isFunction(b)) return _.grep(a,
        function(a, d) {
            return !! b.call(a, d, a) !== c
        });
        if (b.nodeType) return _.grep(a,
        function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (hb.test(b)) return _.filter(b, a, c);
            b = _.filter(b, a)
        }
        return _.grep(a,
        function(a) {
            return U.call(b, a) >= 0 !== c
        })
    }
    function e(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType;);
        return a
    }
    function f(a) {
        var b = ob[a] = {};
        return _.each(a.match(nb) || [],
        function(a, c) {
            b[c] = !0
        }),
        b
    }
    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1),
        a.removeEventListener("load", g, !1),
        _.ready()
    }
    function h() {
        Object.defineProperty(this.cache = {},
        0, {
            get: function() {
                return {}
            }
        }),
        this.expando = _.expando + h.uid++
    }
    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(ub, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null: +c + "" === c ? +c: tb.test(c) ? _.parseJSON(c) : c
            } catch(e) {}
            sb.set(a, b, c)
        } else c = void 0;
        return c
    }
    function j() {
        return ! 0
    }
    function k() {
        return ! 1
    }
    function l() {
        try {
            return Z.activeElement
        } catch(a) {}
    }
    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b: b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
        a
    }
    function o(a) {
        var b = Kb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function p(a, b) {
        for (var c = 0,
        d = a.length; d > c; c++) rb.set(a[c], "globalEval", !b || rb.get(b[c], "globalEval"))
    }
    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (rb.hasData(a) && (f = rb.access(a), g = rb.set(b, f), j = f.events)) {
                delete g.handle,
                g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c])
            }
            sb.hasData(a) && (h = sb.access(a), i = _.extend({},
            h), sb.set(b, i))
        }
    }
    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
    }
    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && yb.test(a.type) ? b.checked = a.checked: ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body),
        f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display: _.css(e[0], "display");
        return e.detach(),
        f
    }
    function u(a) {
        var b = Z,
        c = Ob[a];
        return c || (c = t(a, b), "none" !== c && c || (Nb = (Nb || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Nb[0].contentDocument, b.write(), b.close(), c = t(a, b), Nb.detach()), Ob[a] = c),
        c
    }
    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Rb(a),
        c && (g = c.getPropertyValue(b) || c[b]),
        c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qb.test(g) && Pb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)),
        void 0 !== g ? g + "": g
    }
    function w(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get: (this.get = b).apply(this, arguments)
            }
        }
    }
    function x(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xb.length; e--;) if (b = Xb[e] + c, b in a) return b;
        return d
    }
    function y(a, b, c) {
        var d = Tb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border": "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += _.css(a, c + wb[f], !0, e)),
        d ? ("content" === c && (g -= _.css(a, "padding" + wb[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wb[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wb[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wb[f] + "Width", !0, e)));
        return g
    }
    function A(a, b, c) {
        var d = !0,
        e = "width" === b ? a.offsetWidth: a.offsetHeight,
        f = Rb(a),
        g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qb.test(e)) return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border": "content"), d, f) + "px"
    }
    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g],
        d.style && (f[g] = rb.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xb(d) && (f[g] = rb.access(d, "olddisplay", u(d.nodeName)))) : (e = xb(d), "none" === c && e || rb.set(d, "olddisplay", e ? c: _.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g],
        d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "": "none"));
        return a
    }
    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e)
    }
    function D() {
        return setTimeout(function() {
            Yb = void 0
        }),
        Yb = _.now()
    }
    function E(a, b) {
        var c, d = 0,
        e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wb[d],
        e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a),
        e
    }
    function F(a, b, c) {
        for (var d, e = (cc[b] || []).concat(cc["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
    }
    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
        m = {},
        n = a.style,
        o = a.nodeType && xb(a),
        p = rb.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--,
                _.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? rb.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")),
        c.overflow && (n.overflow = "hidden", l.always(function() {
            n.overflow = c.overflow[0],
            n.overflowX = c.overflow[1],
            n.overflowY = c.overflow[2]
        }));
        for (d in b) if (e = b[d], $b.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (o ? "hide": "show")) {
                if ("show" !== e || !p || void 0 === p[d]) continue;
                o = !0
            }
            m[d] = p && p[d] || _.style(a, d)
        } else j = void 0;
        if (_.isEmptyObject(m))"inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden" in p && (o = p.hidden) : p = rb.access(a, "fxshow", {}),
            f && (p.hidden = !o),
            o ? _(a).show() : l.done(function() {
                _(a).hide()
            }),
            l.done(function() {
                var b;
                rb.remove(a, "fxshow");
                for (b in m) _.style(a, b, m[b])
            });
            for (d in m) g = F(o ? p[d] : 0, d, l),
            d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function H(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
            f = g.expand(f),
            delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }
    function I(a, b, c) {
        var d, e, f = 0,
        g = bc.length,
        h = _.Deferred().always(function() {
            delete i.elem
        }),
        i = function() {
            if (e) return ! 1;
            for (var b = Yb || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c: (h.resolveWith(a, [j]), !1)
        },
        j = h.promise({
            elem: a,
            props: _.extend({},
            b),
            opts: _.extend(!0, {
                specialEasing: {}
            },
            c),
            originalProperties: b,
            originalOptions: c,
            startTime: Yb || D(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0,
                d = b ? j.tweens.length: 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                this
            }
        }),
        k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++) if (d = bc[f].call(j, a, k, j.opts)) return d;
        return _.map(k, F, j),
        _.isFunction(j.opts.start) && j.opts.start.call(a, j),
        _.fx.timer(_.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
            f = b.toLowerCase().match(nb) || [];
            if (_.isFunction(c)) for (; d = f[e++];)"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0,
            _.each(a[h] || [],
            function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }),
            i
        }
        var f = {},
        g = a === tc;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }
    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a: d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d),
        a
    }
    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents,
        i = a.dataTypes;
        "*" === i[0];) i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
        }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }
    function N(a, b, c, d) {
        var e, f, g, h, i, j = {},
        k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0) if (g && a["throws"]) b = g(b);
            else try {
                b = g(b)
            } catch(l) {
                return {
                    state: "parsererror",
                    error: g ? l: "No conversion from " + i + " to " + f
                }
            }
        }
        return {
            state: "success",
            data: b
        }
    }
    function O(a, b, c, d) {
        var e;
        if (_.isArray(b)) _.each(b,
        function(b, e) {
            c || yc.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b: "") + "]", e, c, d)
        });
        else if (c || "object" !== _.type(b)) d(a, b);
        else for (e in b) O(a + "[" + e + "]", b[e], c, d)
    }
    function P(a) {
        return _.isWindow(a) ? a: 9 === a.nodeType && a.defaultView
    }
    var Q = [],
    R = Q.slice,
    S = Q.concat,
    T = Q.push,
    U = Q.indexOf,
    V = {},
    W = V.toString,
    X = V.hasOwnProperty,
    Y = {},
    Z = a.document,
    $ = "2.1.3",
    _ = function(a, b) {
        return new _.fn.init(a, b)
    },
    ab = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    bb = /^-ms-/,
    cb = /-([\da-z])/gi,
    db = function(a, b) {
        return b.toUpperCase()
    };
    _.fn = _.prototype = {
        jquery: $,
        constructor: _,
        selector: "",
        length: 0,
        toArray: function() {
            return R.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
        },
        pushStack: function(a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a, b) {
            return _.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(_.map(this,
            function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(R.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(a) {
            var b = this.length,
            c = +a + (0 > a ? b: 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: T,
        sort: Q.sort,
        splice: Q.splice
    },
    _.extend = _.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {},
        h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b],
        d = a[b],
        g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c: []) : f = c && _.isPlainObject(c) ? c: {},
        g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    },
    _.extend({
        expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === _.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return ! _.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isPlainObject: function(a) {
            return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return ! 1;
            return ! 0
        },
        type: function(a) {
            return null == a ? a + "": "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object": typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = _.trim(a),
            a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(bb, "ms-").replace(cb, db)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e, f = 0,
            g = a.length,
            h = c(a);
            if (d) {
                if (h) for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else for (f in a) if (e = b.apply(a[f], d), e === !1) break
            } else if (h) for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else for (f in a) if (e = b.call(a[f], f, a[f]), e === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "": (a + "").replace(ab, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)),
            d
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : U.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length,
            d = 0,
            e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f),
            d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f = 0,
            g = a.length,
            h = c(a),
            i = [];
            if (h) for (; g > f; f++) e = b(a[f], f, d),
            null != e && i.push(e);
            else for (f in a) e = b(a[f], f, d),
            null != e && i.push(e);
            return S.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c),
            _.isFunction(a) ? (d = R.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(R.call(arguments)))
            },
            e.guid = a.guid = a.guid || _.guid++, e) : void 0
        },
        now: Date.now,
        support: Y
    }),
    _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(a, b) {
        V["[object " + b + "]"] = b.toLowerCase()
    });
    var eb = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b: O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
            if (!d && I) {
                if (11 !== h && (e = sb.exec(a))) if (g = e[1]) {
                    if (9 === h) {
                        if (f = b.getElementById(g), !f || !f.parentNode) return c;
                        if (f.id === g) return c.push(f),
                        c
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f),
                    c
                } else {
                    if (e[2]) return $.apply(c, b.getElementsByTagName(a)),
                    c;
                    if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)),
                    c
                }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ub, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                        o = tb.test(a) && k(b.parentNode) || b,
                        p = j.join(",")
                    }
                    if (p) try {
                        return $.apply(c, o.querySelectorAll(p)),
                        c
                    } catch(q) {} finally {
                        l || b.removeAttribute("id")
                    }
                }
            }
            return B(a.replace(ib, "$1"), b, c, d)
        }
        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()],
                a[c + " "] = d
            }
            var b = [];
            return a
        }
        function d(a) {
            return a[N] = !0,
            a
        }
        function e(a) {
            var b = G.createElement("div");
            try {
                return !! a(b)
            } catch(c) {
                return ! 1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
        }
        function g(a, b) {
            var c = b && a,
            d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c) for (; c = c.nextSibling;) if (c === b) return - 1;
            return a ? 1 : -1
        }
        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function j(a) {
            return d(function(b) {
                return b = +b,
                d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        function l() {}
        function m(a) {
            for (var b = 0,
            c = a.length,
            d = ""; c > b; b++) d += a[b].value;
            return d
        }
        function n(a, b, c) {
            var d = b.dir,
            e = c && "parentNode" === d,
            f = Q++;
            return b.first ?
            function(b, c, f) {
                for (; b = b[d];) if (1 === b.nodeType || e) return a(b, c, f)
            }: function(b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d];) if ((1 === b.nodeType || e) && a(b, c, g)) return ! 0
                } else for (; b = b[d];) if (1 === b.nodeType || e) {
                    if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return ! 0
                }
            }
        }
        function o(a) {
            return a.length > 1 ?
            function(b, c, d) {
                for (var e = a.length; e--;) if (!a[e](b, c, d)) return ! 1;
                return ! 0
            }: a[0]
        }
        function p(a, c, d) {
            for (var e = 0,
            f = c.length; f > e; e++) b(a, c[e], d);
            return d
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }
        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)),
            f && !f[N] && (f = r(f, g)),
            d(function(d, g, h, i) {
                var j, k, l, m = [],
                n = [],
                o = g.length,
                r = d || p(b || "*", h.nodeType ? [h] : h, []),
                s = !a || !d && b ? r: q(r, m, a, h, i),
                t = c ? f || (d ? a: o || e) ? [] : g: s;
                if (c && c(s, t, h, i), e) for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? ab(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t),
                f ? f(null, g, t, i) : $.apply(g, t)
            })
        }
        function s(a) {
            for (var b, c, d, e = a.length,
            f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                return a === b
            },
            g, !0), j = n(function(a) {
                return ab(b, a) > -1
            },
            g, !0), k = [function(a, c, d) {
                var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return b = null,
                e
            }]; e > h; h++) if (c = w.relative[a[h].type]) k = [n(o(k), c)];
            else {
                if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                    for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                    return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                        value: " " === a[h - 2].type ? "*": ""
                    })).replace(ib, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                }
                k.push(c)
            }
            return o(k)
        }
        function t(a, c) {
            var e = c.length > 0,
            f = a.length > 0,
            g = function(d, g, h, i, j) {
                var k, l, m, n = 0,
                o = "0",
                p = d && [],
                r = [],
                s = C,
                t = d || f && w.find.TAG("*", j),
                u = P += null == s ? 1 : Math.random() || .1,
                v = t.length;
                for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0; m = a[l++];) if (m(k, g, h)) {
                            i.push(k);
                            break
                        }
                        j && (P = u)
                    }
                    e && ((k = !m && k) && n--, d && p.push(k))
                }
                if (n += o, e && o !== n) {
                    for (l = 0; m = c[l++];) m(p, r, g, h);
                    if (d) {
                        if (n > 0) for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                        r = q(r)
                    }
                    $.apply(i, r),
                    j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                }
                return j && (P = u, C = s),
                p
            };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
        O = a.document,
        P = 0,
        Q = 0,
        R = c(),
        S = c(),
        T = c(),
        U = function(a, b) {
            return a === b && (E = !0),
            0
        },
        V = 1 << 31,
        W = {}.hasOwnProperty,
        X = [],
        Y = X.pop,
        Z = X.push,
        $ = X.push,
        _ = X.slice,
        ab = function(a, b) {
            for (var c = 0,
            d = a.length; d > c; c++) if (a[c] === b) return c;
            return - 1
        },
        bb = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        cb = "[\\x20\\t\\r\\n\\f]",
        db = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        eb = db.replace("w", "w#"),
        fb = "\\[" + cb + "*(" + db + ")(?:" + cb + "*([*^$|!~]?=)" + cb + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + eb + "))|)" + cb + "*\\]",
        gb = ":(" + db + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fb + ")*)|.*)\\)|)",
        hb = new RegExp(cb + "+", "g"),
        ib = new RegExp("^" + cb + "+|((?:^|[^\\\\])(?:\\\\.)*)" + cb + "+$", "g"),
        jb = new RegExp("^" + cb + "*," + cb + "*"),
        kb = new RegExp("^" + cb + "*([>+~]|" + cb + ")" + cb + "*"),
        lb = new RegExp("=" + cb + "*([^\\]'\"]*?)" + cb + "*\\]", "g"),
        mb = new RegExp(gb),
        nb = new RegExp("^" + eb + "$"),
        ob = {
            ID: new RegExp("^#(" + db + ")"),
            CLASS: new RegExp("^\\.(" + db + ")"),
            TAG: new RegExp("^(" + db.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + fb),
            PSEUDO: new RegExp("^" + gb),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + cb + "*(even|odd|(([+-]|)(\\d*)n|)" + cb + "*(?:([+-]|)" + cb + "*(\\d+)|))" + cb + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + bb + ")$", "i"),
            needsContext: new RegExp("^" + cb + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + cb + "*((?:-\\d)?\\d*)" + cb + "*\\)|)(?=[^-]|$)", "i")
        },
        pb = /^(?:input|select|textarea|button)$/i,
        qb = /^h\d$/i,
        rb = /^[^{]+\{\s*\[native \w/,
        sb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        tb = /[+~]/,
        ub = /'|\\/g,
        vb = new RegExp("\\\\([\\da-f]{1,6}" + cb + "?|(" + cb + ")|.)", "ig"),
        wb = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b: 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        },
        xb = function() {
            F()
        };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes),
            X[O.childNodes.length].nodeType
        } catch(yb) {
            $ = {
                apply: X.length ?
                function(a, b) {
                    Z.apply(a, _.call(b))
                }: function(a, b) {
                    for (var c = a.length,
                    d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        v = b.support = {},
        y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName: !1
        },
        F = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a: O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xb, !1) : c.attachEvent && c.attachEvent("onunload", xb)), I = !y(d), v.attributes = e(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(d.createComment("")),
                !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = rb.test(d.getElementsByClassName), v.getById = e(function(a) {
                return H.appendChild(a).id = N,
                !d.getElementsByName || !d.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            },
            w.filter.ID = function(a) {
                var b = a.replace(vb, wb);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(vb, wb);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ?
            function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
            }: function(a, b) {
                var c, d = [],
                e = 0,
                f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            },
            w.find.CLASS = v.getElementsByClassName &&
            function(a, b) {
                return I ? b.getElementsByClassName(a) : void 0
            },
            K = [], J = [], (v.qsa = rb.test(d.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + cb + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || J.push("\\[" + cb + "*(?:value|" + bb + ")"),
                a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="),
                a.querySelectorAll(":checked").length || J.push(":checked"),
                a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
            }), e(function(a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && J.push("name" + cb + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                J.push(",.*:")
            })), (v.matchesSelector = rb.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"),
                L.call(a, "[s!='']:x"),
                K.push("!=", gb)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = rb.test(H.compareDocumentPosition), M = b || rb.test(H.contains) ?
            function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement: a,
                d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }: function(a, b) {
                if (b) for (; b = b.parentNode;) if (b === a) return ! 0;
                return ! 1
            },
            U = b ?
            function(a, b) {
                if (a === b) return E = !0,
                0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c: (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? ab(D, a) - ab(D, b) : 0 : 4 & c ? -1 : 1)
            }: function(a, b) {
                if (a === b) return E = !0,
                0;
                var c, e = 0,
                f = a.parentNode,
                h = b.parentNode,
                i = [a],
                j = [b];
                if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? ab(D, a) - ab(D, b) : 0;
                if (f === h) return g(a, b);
                for (c = a; c = c.parentNode;) i.unshift(c);
                for (c = b; c = c.parentNode;) j.unshift(c);
                for (; i[e] === j[e];) e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            },
            d) : G
        },
        b.matches = function(a, c) {
            return b(a, null, null, c)
        },
        b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(lb, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch(e) {}
            return b(c, G, null, [a]).length > 0
        },
        b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a),
            M(a, b)
        },
        b.attr = function(a, b) { (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()],
            d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d: v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value: null
        },
        b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        },
        b.uniqueSort = function(a) {
            var b, c = [],
            d = 0,
            e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return D = null,
            a
        },
        x = b.getText = function(a) {
            var b, c = "",
            d = 0,
            e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else for (; b = a[d++];) c += x(b);
            return c
        },
        w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: ob,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(vb, wb),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(vb, wb),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return ob.CHILD.test(a[0]) ? null: (a[3] ? a[2] = a[4] || a[5] || "": c && mb.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(vb, wb).toLowerCase();
                    return "*" === a ?
                    function() {
                        return ! 0
                    }: function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + cb + ")" + a + "(" + cb + "|$)")) && R(a,
                    function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c: c ? (f += "", "=" === c ? f === d: "!=" === c ? f !== d: "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice( - d.length) === d: "~=" === c ? (" " + f.replace(hb, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-": !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                    g = "last" !== a.slice( - 4),
                    h = "of-type" === b;
                    return 1 === d && 0 === e ?
                    function(a) {
                        return !! a.parentNode
                    }: function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling": "previousSibling",
                        q = b.parentNode,
                        r = h && b.nodeName.toLowerCase(),
                        s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];) if (h ? l.nodeName.toLowerCase() === r: 1 === l.nodeType) return ! 1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return ! 0
                            }
                            if (o = [g ? q.firstChild: q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [P, n, m];
                                    break
                                }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                            else for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r: 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                            return m -= e,
                            m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = ab(a, e[g]),
                        a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                    c = [],
                    e = A(a.replace(ib, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a,
                        e(b, null, f, c),
                        b[0] = null,
                        !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return a = a.replace(vb, wb),
                    function(b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                    }
                }),
                lang: d(function(a) {
                    return nb.test(a || "") || b.error("unsupported lang: " + a),
                    a = a.replace(vb, wb).toLowerCase(),
                    function(b) {
                        var c;
                        do
                        if (c = I ? b.lang: b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(),
                        c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return ! 1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === H
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return ! 1;
                    return ! 0
                },
                parent: function(a) {
                    return ! w.pseudos.empty(a)
                },
                header: function(a) {
                    return qb.test(a.nodeName)
                },
                input: function(a) {
                    return pb.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function() {
                    return [0]
                }),
                last: j(function(a, b) {
                    return [b - 1]
                }),
                eq: j(function(a, b, c) {
                    return [0 > c ? c + b: c]
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b: c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b: c; ++d < b;) a.push(d);
                    return a
                })
            }
        },
        w.pseudos.nth = w.pseudos.eq;
        for (u in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[u] = h(u);
        for (u in {
            submit: !0,
            reset: !0
        }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos,
        w.setFilters = new l,
        z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h;) { (!d || (e = jb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])),
                d = !1,
                (e = kb.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ib, " ")
                }), h = h.slice(d.length));
                for (g in w.filter) ! (e = ob[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length: h ? b.error(a) : S(a, i).slice(0)
        },
        A = b.compile = function(a, b) {
            var c, d = [],
            e = [],
            f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]),
                f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)),
                f.selector = a
            }
            return f
        },
        B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a,
            l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(vb, wb), b) || [])[0], !b) return c;
                    j && (b = b.parentNode),
                    a = a.slice(f.shift().value.length)
                }
                for (e = ob.needsContext.test(a) ? 0 : f.length; e--&&(g = f[e], !w.relative[h = g.type]);) if ((i = w.find[h]) && (d = i(g.matches[0].replace(vb, wb), tb.test(f[0].type) && k(b.parentNode) || b))) {
                    if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d),
                    c;
                    break
                }
            }
            return (j || A(a, l))(d, b, !I, c, tb.test(a) && k(b.parentNode) || b),
            c
        },
        v.sortStable = N.split("").sort(U).join("") === N,
        v.detectDuplicates = !!E,
        F(),
        v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }),
        e(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width",
        function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        v.attributes && e(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || f("value",
        function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(bb,
        function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value: null
        }),
        b
    } (a);
    _.find = eb,
    _.expr = eb.selectors,
    _.expr[":"] = _.expr.pseudos,
    _.unique = eb.uniqueSort,
    _.text = eb.getText,
    _.isXMLDoc = eb.isXML,
    _.contains = eb.contains;
    var fb = _.expr.match.needsContext,
    gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    hb = /^.[^:#\[\.,]*$/;
    _.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b,
        function(a) {
            return 1 === a.nodeType
        }))
    },
    _.fn.extend({
        find: function(a) {
            var b, c = this.length,
            d = [],
            e = this;
            if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
                for (b = 0; c > b; b++) if (_.contains(e[b], this)) return ! 0
            }));
            for (b = 0; c > b; b++) _.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? _.unique(d) : d),
            d.selector = this.selector ? this.selector + " " + a: a,
            d
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function(a) {
            return !! d(this, "string" == typeof a && fb.test(a) ? _(a) : a || [], !1).length
        }
    });
    var ib, jb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    kb = _.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : jb.exec(a), !c || !c[1] && b) return ! b || b.jquery ? (b || ib).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b: Z, !0)), gb.test(c[1]) && _.isPlainObject(b)) for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = Z.getElementById(c[2]),
            d && d.parentNode && (this.length = 1, this[0] = d),
            this.context = Z,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ib.ready ? ib.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
    };
    kb.prototype = _.fn,
    ib = _(Z);
    var lb = /^(?:parents|prev(?:Until|All))/,
    mb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    _.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType;) if (1 === a.nodeType) {
                if (e && _(a).is(c)) break;
                d.push(a)
            }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }),
    _.fn.extend({
        has: function(a) {
            var b = _(a, this),
            c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) if (_.contains(this, b[a])) return ! 0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0,
            e = this.length,
            f = [], g = fb.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? _.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(a, b) {
            return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject: this.prevObject.filter(a))
        }
    }),
    _.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b: null
        },
        parents: function(a) {
            return _.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return _.dir(a, "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return _.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return _.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return _.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return _.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return _.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return _.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || _.merge([], a.childNodes)
        }
    },
    function(a, b) {
        _.fn[a] = function(c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice( - 5) && (d = c),
            d && "string" == typeof d && (e = _.filter(d, e)),
            this.length > 1 && (mb[a] || _.unique(e), lb.test(a) && e.reverse()),
            this.pushStack(e)
        }
    });
    var nb = /\S+/g,
    ob = {};
    _.Callbacks = function(a) {
        a = "string" == typeof a ? ob[a] || f(a) : _.extend({},
        a);
        var b, c, d, e, g, h, i = [],
        j = !a.once && [],
        k = function(f) {
            for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++) if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break
            }
            d = !1,
            i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
        },
        l = {
            add: function() {
                if (i) {
                    var c = i.length; !
                    function f(b) {
                        _.each(b,
                        function(b, c) {
                            var d = _.type(c);
                            "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    } (arguments),
                    d ? g = i.length: b && (e = c, k(b))
                }
                return this
            },
            remove: function() {
                return i && _.each(arguments,
                function(a, b) {
                    for (var c; (c = _.inArray(b, i, c)) > -1;) i.splice(c, 1),
                    d && (g >= c && g--, h >= c && h--)
                }),
                this
            },
            has: function(a) {
                return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
            },
            empty: function() {
                return i = [],
                g = 0,
                this
            },
            disable: function() {
                return i = j = b = void 0,
                this
            },
            disabled: function() {
                return ! i
            },
            lock: function() {
                return j = void 0,
                b || l.disable(),
                this
            },
            locked: function() {
                return ! j
            },
            fireWith: function(a, b) {
                return ! i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! c
            }
        };
        return l
    },
    _.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", _.Callbacks("once memory"), "resolved"], ["reject", "fail", _.Callbacks("once memory"), "rejected"], ["notify", "progress", _.Callbacks("memory")]],
            c = "pending",
            d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return _.Deferred(function(c) {
                        _.each(b,
                        function(b, f) {
                            var g = _.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? _.extend(a, d) : d
                }
            },
            e = {};
            return d.pipe = d.then,
            _.each(b,
            function(a, f) {
                var g = f[2],
                h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                },
                b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d: this, arguments),
                    this
                },
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b, c, d, e = 0,
            f = R.call(arguments),
            g = f.length,
            h = 1 !== g || a && _.isFunction(a.promise) ? g: 0,
            i = 1 === h ? a: _.Deferred(),
            j = function(a, c, d) {
                return function(e) {
                    c[a] = this,
                    d[a] = arguments.length > 1 ? R.call(arguments) : e,
                    d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                }
            };
            if (g > 1) for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f),
            i.promise()
        }
    });
    var pb;
    _.fn.ready = function(a) {
        return _.ready.promise().done(a),
        this
    },
    _.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? _.readyWait++:_.ready(!0)
        },
        ready: function(a) { (a === !0 ? --_.readyWait: _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pb.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
        }
    }),
    _.ready.promise = function(b) {
        return pb || (pb = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))),
        pb.promise(b)
    },
    _.ready.promise();
    var qb = _.access = function(a, b, c, d, e, f, g) {
        var h = 0,
        i = a.length,
        j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c) _.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
            return j.call(_(a), c)
        })), b)) for (; i > h; h++) b(a[h], c, g ? d: d.call(a[h], h, b(a[h], c)));
        return e ? a: j ? b.call(a) : i ? b(a[0], c) : f
    };
    _.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    },
    h.uid = 1,
    h.accepts = _.acceptData,
    h.prototype = {
        key: function(a) {
            if (!h.accepts(a)) return 0;
            var b = {},
            c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    },
                    Object.defineProperties(a, b)
                } catch(d) {
                    b[this.expando] = c,
                    _.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}),
            c
        },
        set: function(a, b, c) {
            var d, e = this.key(a),
            f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
            else for (d in b) f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c: c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d: this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c: b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a),
            g = this.cache[f];
            if (void 0 === b) this.cache[f] = {};
            else {
                _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(nb) || [])),
                c = d.length;
                for (; c--;) delete g[d[c]]
            }
        },
        hasData: function(a) {
            return ! _.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var rb = new h,
    sb = new h,
    tb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ub = /([A-Z])/g;
    _.extend({
        hasData: function(a) {
            return sb.hasData(a) || rb.hasData(a)
        },
        data: function(a, b, c) {
            return sb.access(a, b, c)
        },
        removeData: function(a, b) {
            sb.remove(a, b)
        },
        _data: function(a, b, c) {
            return rb.access(a, b, c)
        },
        _removeData: function(a, b) {
            rb.remove(a, b)
        }
    }),
    _.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
            g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = sb.get(f), 1 === f.nodeType && !rb.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                    rb.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                sb.set(this, a)
            }) : qb(this,
            function(b) {
                var c, d = _.camelCase(a);
                if (f && void 0 === b) {
                    if (c = sb.get(f, a), void 0 !== c) return c;
                    if (c = sb.get(f, d), void 0 !== c) return c;
                    if (c = i(f, d, void 0), void 0 !== c) return c
                } else this.each(function() {
                    var c = sb.get(this, d);
                    sb.set(this, d, b),
                    -1 !== a.indexOf("-") && void 0 !== c && sb.set(this, a, b)
                })
            },
            null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                sb.remove(this, a)
            })
        }
    }),
    _.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = rb.get(a, b), c && (!d || _.isArray(c) ? d = rb.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = _.queue(a, b),
            d = c.length,
            e = c.shift(),
            f = _._queueHooks(a, b),
            g = function() {
                _.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--),
            e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return rb.get(a, c) || rb.access(a, c, {
                empty: _.Callbacks("once memory").add(function() {
                    rb.remove(a, [b + "queue", c])
                })
            })
        }
    }),
    _.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--),
            arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this: this.each(function() {
                var c = _.queue(this, a, b);
                _._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                _.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
            e = _.Deferred(),
            f = this,
            g = this.length,
            h = function() {--d || e.resolveWith(f, [f])
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = rb.get(f[g], a + "queueHooks"),
            c && c.empty && (d++, c.empty.add(h));
            return h(),
            e.promise(b)
        }
    });
    var vb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    wb = ["Top", "Right", "Bottom", "Left"],
    xb = function(a, b) {
        return a = b || a,
        "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
    },
    yb = /^(?:checkbox|radio)$/i; !
    function() {
        var a = Z.createDocumentFragment(),
        b = a.appendChild(Z.createElement("div")),
        c = Z.createElement("input");
        c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        b.appendChild(c),
        Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        b.innerHTML = "<textarea>x</textarea>",
        Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    } ();
    var zb = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Ab = /^key/,
    Bb = /^(?:mouse|pointer|contextmenu)|click/,
    Cb = /^(?:focusinfocus|focusoutblur)$/,
    Db = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = rb.get(a);
            if (q) for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                return typeof _ !== zb && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
            }), b = (b || "").match(nb) || [""], j = b.length; j--;) h = Db.exec(b[j]) || [],
            n = p = h[1],
            o = (h[2] || "").split(".").sort(),
            n && (l = _.event.special[n] || {},
            n = (e ? l.delegateType: l.bindType) || n, l = _.event.special[n] || {},
            k = _.extend({
                type: n,
                origType: p,
                data: d,
                handler: c,
                guid: c.guid,
                selector: e,
                needsContext: e && _.expr.match.needsContext.test(e),
                namespace: o.join(".")
            },
            f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = rb.hasData(a) && rb.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(nb) || [""], j = b.length; j--;) if (h = Db.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = _.event.special[n] || {},
                    n = (d ? l.delegateType: l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f],
                    !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                } else for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle, rb.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || Z],
            n = X.call(b, "type") ? b.type: b,
            o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Cb.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b: new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {},
            e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !_.isWindow(d)) {
                    for (i = l.delegateType || n, Cb.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g),
                    h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0; (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i: l.bindType || n,
                k = (rb.get(g, "events") || {})[b.type] && rb.get(g, "handle"),
                k && k.apply(g, c),
                k = j && g[j],
                k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n,
                e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)),
                b.result
            }
        },
        dispatch: function(a) {
            a = _.event.fix(a);
            var b, c, d, e, f, g = [],
            h = R.call(arguments),
            i = (rb.get(this, "events") || {})[a.type] || [],
            j = _.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = _.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped();) for (a.currentTarget = e.elem, c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
            h = b.delegateCount,
            i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++) f = b[c],
                e = f.selector + " ",
                void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length),
                d[e] && d.push(f);
                d.length && g.push({
                    elem: i,
                    handlers: d
                })
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode: b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)),
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                a
            }
        },
        fix: function(a) {
            if (a[_.expando]) return a;
            var b, c, d, e = a.type,
            f = a,
            g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Bb.test(e) ? this.mouseHooks: Ab.test(e) ? this.keyHooks: {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;) c = d[b],
            a[c] = f[c];
            return a.target || (a.target = Z),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== l() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === l() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return _.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = _.extend(new _.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    _.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    },
    _.Event = function(a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j: k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
    },
    _.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = j,
            a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = j,
            a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j,
            a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    },
    function(a, b) {
        _.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                e = a.relatedTarget,
                f = a.handleObj;
                return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b),
                c
            }
        }
    }),
    Y.focusinBubbles || _.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(a, b) {
        var c = function(a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0)
        };
        _.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                e = rb.access(d, b);
                e || d.addEventListener(a, c, !0),
                rb.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                e = rb.access(d, b) - 1;
                e ? rb.access(d, b, e) : (d.removeEventListener(a, c, !0), rb.remove(d, b))
            }
        }
    }),
    _.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k;
            else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return _().off(a),
                f.apply(this, arguments)
            },
            d.guid = f.guid || (f.guid = _.guid++)),
            this.each(function() {
                _.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj,
            _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace: d.origType, d.selector, d.handler),
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0),
            c === !1 && (c = k),
            this.each(function() {
                _.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                _.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? _.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Eb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Fb = /<([\w:]+)/,
    Gb = /<|&#?\w+;/,
    Hb = /<(?:script|style|link)/i,
    Ib = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Jb = /^$|\/(?:java|ecma)script/i,
    Kb = /^true\/(.*)/,
    Lb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Mb = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Mb.optgroup = Mb.option,
    Mb.tbody = Mb.tfoot = Mb.colgroup = Mb.caption = Mb.thead,
    Mb.th = Mb.td,
    _.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
            i = _.contains(a.ownerDocument, a);
            if (! (Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a))) for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
            if (b) if (c) for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
            else q(a, h);
            return g = r(h, "script"),
            g.length > 0 && p(g, !i && r(a, "script")),
            h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++) if (e = a[m], e || 0 === e) if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
            else if (Gb.test(e)) {
                for (f = f || k.appendChild(b.createElement("div")), g = (Fb.exec(e) || ["", ""])[1].toLowerCase(), h = Mb[g] || Mb._default, f.innerHTML = h[1] + e.replace(Eb, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                _.merge(l, f.childNodes),
                f = k.firstChild,
                f.textContent = ""
            } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++];) if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c)) for (j = 0; e = f[j++];) Jb.test(e.type || "") && c.push(e);
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = _.event.special,
            g = 0; void 0 !== (c = a[g]); g++) {
                if (_.acceptData(c) && (e = c[rb.expando], e && (b = rb.cache[e]))) {
                    if (b.events) for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                    rb.cache[e] && delete rb.cache[e]
                }
                delete sb.cache[c[sb.expando]]
            }
        }
    }),
    _.fn.extend({
        text: function(a) {
            return qb(this,
            function(a) {
                return void 0 === a ? _.text(this) : this.empty().each(function() { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            },
            null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments,
            function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
            function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
            function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)),
            c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a: b,
            this.map(function() {
                return _.clone(this, a, b)
            })
        },
        html: function(a) {
            return qb(this,
            function(a) {
                var b = this[0] || {},
                c = 0,
                d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Hb.test(a) && !Mb[(Fb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Eb, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {},
                        1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch(e) {}
                }
                b && this.empty().append(a)
            },
            null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments,
            function(b) {
                a = this.parentNode,
                _.cleanData(r(this)),
                a && a.replaceChild(b, this)
            }),
            a && (a.length || a.nodeType) ? this: this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0,
            j = this.length,
            k = this,
            l = j - 1,
            m = a[0],
            p = _.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ib.test(m)) return this.each(function(c) {
                var d = k.eq(c);
                p && (a[0] = m.call(this, c, d.html())),
                d.domManip(a, b)
            });
            if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c,
                i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))),
                b.call(this[i], g, i);
                if (f) for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i],
                Jb.test(g.type || "") && !rb.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(Lb, "")))
            }
            return this
        }
    }),
    _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(a, b) {
        _.fn[a] = function(a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this: this.clone(!0),
            _(e[g])[b](c),
            T.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Nb, Ob = {},
    Pb = /^margin/,
    Qb = new RegExp("^(" + vb + ")(?!px)[a-z%]+$", "i"),
    Rb = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    }; !
    function() {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
            g.innerHTML = "",
            e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top,
            d = "4px" === b.width,
            e.removeChild(f)
        }
        var c, d, e = Z.documentElement,
        f = Z.createElement("div"),
        g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
            pixelPosition: function() {
                return b(),
                c
            },
            boxSizingReliable: function() {
                return null == d && b(),
                d
            },
            reliableMarginRight: function() {
                var b, c = g.appendChild(Z.createElement("div"));
                return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                c.style.marginRight = c.style.width = "0",
                g.style.width = "1px",
                e.appendChild(f),
                b = !parseFloat(a.getComputedStyle(c, null).marginRight),
                e.removeChild(f),
                g.removeChild(c),
                b
            }
        }))
    } (),
    _.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f],
        a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Sb = /^(none|table(?!-c[ea]).+)/,
    Tb = new RegExp("^(" + vb + ")(.*)$", "i"),
    Ub = new RegExp("^([+-])=(" + vb + ")", "i"),
    Vb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Wb = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    Xb = ["Webkit", "O", "Moz", "ms"];
    _.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1": c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = _.camelCase(b),
                i = a.style;
                return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)),
                g = _.cssHooks[b] || _.cssHooks[h],
                void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e: i[b] : (f = typeof c, "string" === f && (e = Ub.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = _.camelCase(b);
            return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)),
            g = _.cssHooks[b] || _.cssHooks[h],
            g && "get" in g && (e = g.get(a, !0, c)),
            void 0 === e && (e = v(a, b, d)),
            "normal" === e && b in Wb && (e = Wb[b]),
            "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
        }
    }),
    _.each(["height", "width"],
    function(a, b) {
        _.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Sb.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Vb,
                function() {
                    return A(a, b, d)
                }) : A(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Rb(a);
                return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }),
    _.cssHooks.marginRight = w(Y.reliableMarginRight,
    function(a, b) {
        return b ? _.swap(a, {
            display: "inline-block"
        },
        v, [a, "marginRight"]) : void 0
    }),
    _.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(a, b) {
        _.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0,
                e = {},
                f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + wb[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        Pb.test(a) || (_.cssHooks[a + b].set = y)
    }),
    _.fn.extend({
        css: function(a, b) {
            return qb(this,
            function(a, b, c) {
                var d, e, f = {},
                g = 0;
                if (_.isArray(b)) {
                    for (d = Rb(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
            },
            a, b, arguments.length > 1)
        },
        show: function() {
            return B(this, !0)
        },
        hide: function() {
            return B(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                xb(this) ? _(this).show() : _(this).hide()
            })
        }
    }),
    _.Tween = C,
    C.prototype = {
        constructor: C,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || "swing",
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (_.cssNumber[c] ? "": "px")
        },
        cur: function() {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = C.propHooks[this.prop];
            return this.pos = b = this.options.duration ? _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : C.propHooks._default.set(this),
            this
        }
    },
    C.prototype.init.prototype = C.prototype,
    C.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b: 0) : a.elem[a.prop]
            },
            set: function(a) {
                _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    },
    C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    _.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return.5 - Math.cos(a * Math.PI) / 2
        }
    },
    _.fx = C.prototype.init,
    _.fx.step = {};
    var Yb, Zb, $b = /^(?:toggle|show|hide)$/,
    _b = new RegExp("^(?:([+-])=|)(" + vb + ")([a-z%]*)$", "i"),
    ac = /queueHooks$/,
    bc = [G],
    cc = {
        "*": [function(a, b) {
            var c = this.createTween(a, b),
            d = c.cur(),
            e = _b.exec(b),
            f = e && e[3] || (_.cssNumber[a] ? "": "px"),
            g = (_.cssNumber[a] || "px" !== f && +d) && _b.exec(_.css(c.elem, a)),
            h = 1,
            i = 20;
            if (g && g[3] !== f) {
                f = f || g[3],
                e = e || [],
                g = +d || 1;
                do h = h || ".5",
                g /= h,
                _.style(c.elem, a, g + f);
                while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
            c
        }]
    };
    _.Animation = _.extend(I, {
        tweener: function(a, b) {
            _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0,
            e = a.length; e > d; d++) c = a[d],
            cc[c] = cc[c] || [],
            cc[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? bc.unshift(a) : bc.push(a)
        }
    }),
    _.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? _.extend({},
        a) : {
            complete: c || !c && b || _.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !_.isFunction(b) && b
        };
        return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration: d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default,
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            _.isFunction(d.old) && d.old.call(this),
            d.queue && _.dequeue(this, d.queue)
        },
        d
    },
    _.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(xb).css("opacity", 0).show().end().animate({
                opacity: b
            },
            a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = _.isEmptyObject(a),
            f = _.speed(b, c, d),
            g = function() {
                var b = I(this, _.extend({},
                a), f); (e || rb.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0,
                e = null != a && a + "queueHooks",
                f = _.timers,
                g = rb.get(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else for (e in g) g[e] && g[e].stop && ac.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); (b || !c) && _.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = rb.get(this),
                d = c[a + "queue"],
                e = c[a + "queueHooks"],
                f = _.timers,
                g = d ? d.length: 0;
                for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    _.each(["toggle", "show", "hide"],
    function(a, b) {
        var c = _.fn[b];
        _.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
        }
    }),
    _.each({
        slideDown: E("show"),
        slideUp: E("hide"),
        slideToggle: E("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(a, b) {
        _.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    _.timers = [],
    _.fx.tick = function() {
        var a, b = 0,
        c = _.timers;
        for (Yb = _.now(); b < c.length; b++) a = c[b],
        a() || c[b] !== a || c.splice(b--, 1);
        c.length || _.fx.stop(),
        Yb = void 0
    },
    _.fx.timer = function(a) {
        _.timers.push(a),
        a() ? _.fx.start() : _.timers.pop()
    },
    _.fx.interval = 13,
    _.fx.start = function() {
        Zb || (Zb = setInterval(_.fx.tick, _.fx.interval))
    },
    _.fx.stop = function() {
        clearInterval(Zb),
        Zb = null
    },
    _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    _.fn.delay = function(a, b) {
        return a = _.fx ? _.fx.speeds[a] || a: a,
        b = b || "fx",
        this.queue(b,
        function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    },
    function() {
        var a = Z.createElement("input"),
        b = Z.createElement("select"),
        c = b.appendChild(Z.createElement("option"));
        a.type = "checkbox",
        Y.checkOn = "" !== a.value,
        Y.optSelected = c.selected,
        b.disabled = !0,
        Y.optDisabled = !c.disabled,
        a = Z.createElement("input"),
        a.value = "t",
        a.type = "radio",
        Y.radioValue = "t" === a.value
    } ();
    var dc, ec, fc = _.expr.attrHandle;
    _.fn.extend({
        attr: function(a, b) {
            return qb(this, _.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                _.removeAttr(this, a)
            })
        }
    }),
    _.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === zb ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? ec: dc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e: (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e: (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
            f = b && b.match(nb);
            if (f && 1 === a.nodeType) for (; c = f[e++];) d = _.propFix[c] || c,
            _.expr.match.bool.test(c) && (a[d] = !1),
            a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        }
    }),
    ec = {
        set: function(a, b, c) {
            return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c),
            c
        }
    },
    _.each(_.expr.match.bool.source.match(/\w+/g),
    function(a, b) {
        var c = fc[b] || _.find.attr;
        fc[b] = function(a, b, d) {
            var e, f;
            return d || (f = fc[b], fc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fc[b] = f),
            e
        }
    });
    var gc = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
        prop: function(a, b) {
            return qb(this, _.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[_.propFix[a] || a]
            })
        }
    }),
    _.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !_.isXMLDoc(a),
            f && (b = _.propFix[b] || b, e = _.propHooks[b]),
            void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d: a[b] = c: e && "get" in e && null !== (d = e.get(a, b)) ? d: a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || gc.test(a.nodeName) || a.href ? a.tabIndex: -1
                }
            }
        }
    }),
    Y.optSelected || (_.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex,
            null
        }
    }),
    _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        _.propFix[this.toLowerCase()] = this
    });
    var hc = /[\t\r\n\f]/g;
    _.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a,
            i = 0,
            j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).addClass(a.call(this, b, this.className))
            });
            if (h) for (b = (a || "").match(nb) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : " ")) {
                for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = _.trim(d),
                c.className !== g && (c.className = g)
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
            i = 0,
            j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).removeClass(a.call(this, b, this.className))
            });
            if (h) for (b = (a || "").match(nb) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : "")) {
                for (f = 0; e = b[f++];) for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                g = a ? _.trim(d) : "",
                c.className !== g && (c.className = g)
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ?
            function(c) {
                _(this).toggleClass(a.call(this, c, this.className, b), b)
            }: function() {
                if ("string" === c) for (var b, d = 0,
                e = _(this), f = a.match(nb) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else(c === zb || "boolean" === c) && (this.className && rb.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "": rb.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ",
            c = 0,
            d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hc, " ").indexOf(b) >= 0) return ! 0;
            return ! 1
        }
    });
    var ic = /\r/g;
    _.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = _.isFunction(a),
                this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "": "number" == typeof e ? e += "": _.isArray(e) && (e = _.map(e,
                    function(a) {
                        return null == a ? "": a + ""
                    })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()],
                b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c: (c = e.value, "string" == typeof c ? c.replace(ic, "") : null == c ? "": c)
            }
        }
    }),
    _.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = _.find.attr(a, "value");
                    return null != b ? b: _.trim(_.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options,
                    e = a.selectedIndex,
                    f = "select-one" === a.type || 0 > e,
                    g = f ? null: [], h = f ? e + 1 : d.length, i = 0 > e ? h: f ? e: 0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (Y.optDisabled ? c.disabled: null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                        if (b = _(c).val(), f) return b;
                        g.push(b)
                    }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options,
                    f = _.makeArray(b), g = e.length; g--;) d = e[g],
                    (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1),
                    f
                }
            }
        }
    }),
    _.each(["radio", "checkbox"],
    function() {
        _.valHooks[this] = {
            set: function(a, b) {
                return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
            }
        },
        Y.checkOn || (_.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on": a.value
        })
    }),
    _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(a, b) {
        _.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    _.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var jc = _.now(),
    kc = /\?/;
    _.parseJSON = function(a) {
        return JSON.parse(a + "")
    },
    _.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser,
            b = c.parseFromString(a, "text/xml")
        } catch(d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a),
        b
    };
    var lc = /#.*$/,
    mc = /([?&])_=[^&]*/,
    nc = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    oc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    pc = /^(?:GET|HEAD)$/,
    qc = /^\/\//,
    rc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    sc = {},
    tc = {},
    uc = "*/".concat("*"),
    vc = a.location.href,
    wc = rc.exec(vc.toLowerCase()) || [];
    _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vc,
            type: "GET",
            isLocal: oc.test(wc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": uc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": _.parseJSON,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
        },
        ajaxPrefilter: J(sc),
        ajaxTransport: J(tc),
        ajax: function(a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent": 304 === a ? w = "notmodified": (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess": "ajaxError", [v, l, i ? k: r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a, a = void 0),
            b = b || {};
            var d, e, f, g, h, i, j, k, l = _.ajaxSetup({},
            b),
            m = l.context || l,
            n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
            o = _.Deferred(),
            p = _.Callbacks("once memory"),
            q = l.statusCode || {},
            r = {},
            s = {},
            t = 0,
            u = "canceled",
            v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!g) for (g = {}; b = nc.exec(f);) g[b[1].toLowerCase()] = b[2];
                        b = g[a.toLowerCase()]
                    }
                    return null == b ? null: b
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? f: null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return t || (l.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]];
                    else v.always(a[v.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || u;
                    return d && d.abort(b),
                    c(0, b),
                    this
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vc) + "").replace(lc, "").replace(qc, wc[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(nb) || [""], null == l.crossDomain && (i = rc.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wc[1] && i[2] === wc[2] && (i[3] || ("http:" === i[1] ? "80": "443")) === (wc[3] || ("http:" === wc[1] ? "80": "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sc, l, b, v), 2 === t) return v;
            j = _.event && l.global,
            j && 0 === _.active++&&_.event.trigger("ajaxStart"),
            l.type = l.type.toUpperCase(),
            l.hasContent = !pc.test(l.type),
            e = l.url,
            l.hasContent || (l.data && (e = l.url += (kc.test(e) ? "&": "?") + l.data, delete l.data), l.cache === !1 && (l.url = mc.test(e) ? e.replace(mc, "$1_=" + jc++) : e + (kc.test(e) ? "&": "?") + "_=" + jc++)),
            l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])),
            (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType),
            v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + uc + "; q=0.01": "") : l.accepts["*"]);
            for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (k in {
                success: 1,
                error: 1,
                complete: 1
            }) v[k](l[k]);
            if (d = K(tc, l, b, v)) {
                v.readyState = 1,
                j && n.trigger("ajaxSend", [v, l]),
                l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout")
                },
                l.timeout));
                try {
                    t = 1,
                    d.send(r, c)
                } catch(w) {
                    if (! (2 > t)) throw w;
                    c( - 1, w)
                }
            } else c( - 1, "No Transport");
            return v
        },
        getJSON: function(a, b, c) {
            return _.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return _.get(a, void 0, b, "script")
        }
    }),
    _.each(["get", "post"],
    function(a, b) {
        _[b] = function(a, c, d, e) {
            return _.isFunction(c) && (e = e || d, d = c, c = void 0),
            _.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }),
    _._evalUrl = function(a) {
        return _.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    },
    _.fn.extend({
        wrapAll: function(a) {
            var b;
            return _.isFunction(a) ? this.each(function(b) {
                _(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(_.isFunction(a) ?
            function(b) {
                _(this).wrapInner(a.call(this, b))
            }: function() {
                var b = _(this),
                c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = _.isFunction(a);
            return this.each(function(c) {
                _(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    _.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    },
    _.expr.filters.visible = function(a) {
        return ! _.expr.filters.hidden(a)
    };
    var xc = /%20/g,
    yc = /\[\]$/,
    zc = /\r?\n/g,
    Ac = /^(?:submit|button|image|reset|file)$/i,
    Bc = /^(?:input|select|textarea|keygen)/i;
    _.param = function(a, b) {
        var c, d = [],
        e = function(a, b) {
            b = _.isFunction(b) ? b() : null == b ? "": b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a,
        function() {
            e(this.name, this.value)
        });
        else for (c in a) O(c, a[c], b, e);
        return d.join("&").replace(xc, "+")
    },
    _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = _.prop(this, "elements");
                return a ? _.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !_(this).is(":disabled") && Bc.test(this.nodeName) && !Ac.test(a) && (this.checked || !yb.test(a))
            }).map(function(a, b) {
                var c = _(this).val();
                return null == c ? null: _.isArray(c) ? _.map(c,
                function(a) {
                    return {
                        name: b.name,
                        value: a.replace(zc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(zc, "\r\n")
                }
            }).get()
        }
    }),
    _.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch(a) {}
    };
    var Cc = 0,
    Dc = {},
    Ec = {
        0 : 200,
        1223 : 204
    },
    Fc = _.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload",
    function() {
        for (var a in Dc) Dc[a]()
    }),
    Y.cors = !!Fc && "withCredentials" in Fc,
    Y.ajax = Fc = !!Fc,
    _.ajaxTransport(function(a) {
        var b;
        return Y.cors || Fc && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(),
                g = ++Cc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Dc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        }: void 0, f.getAllResponseHeaders()))
                    }
                },
                f.onload = b(),
                f.onerror = b("error"),
                b = Dc[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch(h) {
                    if (b) throw h
                }
            },
            abort: function() {
                b && b()
            }
        }: void 0
    }),
    _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return _.globalEval(a),
                a
            }
        }
    }),
    _.ajaxPrefilter("script",
    function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET")
    }),
    _.ajaxTransport("script",
    function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = _("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(),
                        c = null,
                        a && e("error" === a.type ? 404 : 200, a.type)
                    }),
                    Z.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Gc = [],
    Hc = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Gc.pop() || _.expando + "_" + jc++;
            return this[a] = !0,
            a
        }
    }),
    _.ajaxPrefilter("json jsonp",
    function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hc.test(b.url) ? "url": "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp !== !1 && (b.url += (kc.test(b.url) ? "&": "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || _.error(e + " was not called"),
            g[0]
        },
        b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        },
        d.always(function() {
            a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)),
            g && _.isFunction(f) && f(g[0]),
            g = f = void 0
        }), "script") : void 0
    }),
    _.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1),
        b = b || Z;
        var d = gb.exec(a),
        e = !c && [];
        return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
    };
    var Ic = _.fn.load;
    _.fn.load = function(a, b, c) {
        if ("string" != typeof a && Ic) return Ic.apply(this, arguments);
        var d, e, f, g = this,
        h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)),
        _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"),
        g.length > 0 && _.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments,
            g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
        }).complete(c &&
        function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }),
        this
    },
    _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(a, b) {
        _.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    _.expr.filters.animated = function(a) {
        return _.grep(_.timers,
        function(b) {
            return a === b.elem
        }).length
    };
    var Jc = a.document.documentElement;
    _.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = _.css(a, "position"),
            l = _(a),
            m = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = _.css(a, "top"),
            i = _.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1,
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0),
            _.isFunction(b) && (b = b.call(a, c, h)),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using" in b ? b.using.call(a, m) : l.css(m)
        }
    },
    _.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this: this.each(function(b) {
                _.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
            e = {
                top: 0,
                left: 0
            },
            f = d && d.ownerDocument;
            if (f) return b = f.documentElement,
            _.contains(b, d) ? (typeof d.getBoundingClientRect !== zb && (e = d.getBoundingClientRect()), c = P(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - d.top - _.css(c, "marginTop", !0),
                    left: b.left - d.left - _.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Jc; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");) a = a.offsetParent;
                return a || Jc
            })
        }
    }),
    _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function(e) {
            return qb(this,
            function(b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset: f, d ? f: a.pageYOffset) : b[e] = f)
            },
            b, e, arguments.length, null)
        }
    }),
    _.each(["top", "left"],
    function(a, b) {
        _.cssHooks[b] = w(Y.pixelPosition,
        function(a, c) {
            return c ? (c = v(a, b), Qb.test(c) ? _(a).position()[b] + "px": c) : void 0
        })
    }),
    _.each({
        Height: "height",
        Width: "width"
    },
    function(a, b) {
        _.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        },
        function(c, d) {
            _.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                g = c || (d === !0 || e === !0 ? "margin": "border");
                return qb(this,
                function(b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                },
                b, f ? d: void 0, f, null)
            }
        })
    }),
    _.fn.size = function() {
        return this.length
    },
    _.fn.andSelf = _.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return _
    });
    var Kc = a.jQuery,
    Lc = a.$;
    return _.noConflict = function(b) {
        return a.$ === _ && (a.$ = Lc),
        b && a.jQuery === _ && (a.jQuery = Kc),
        _
    },
    typeof b === zb && (a.jQuery = a.$ = _),
    _
}), 

"undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +
function(a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"),
        b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b) if (void 0 !== a.style[c]) return {
            end: b[c]
        };
        return ! 1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
        d = this;
        a(this).one("bsTransitionEnd",
        function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b),
        this
    },
    a(function() {
        a.support.transition = b(),
        a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var c = a(this),
            e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)),
            "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
    d = function(b) {
        a(b).on("click", c, this.close)
    };
    d.VERSION = "3.2.0",
    d.prototype.close = function(b) {
        function c() {
            f.detach().trigger("closed.bs.alert").remove()
        }
        var d = a(this),
        e = d.attr("data-target");
        e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
        var f = a(e);
        b && b.preventDefault(),
        f.length || (f = d.hasClass("alert") ? d: d.parent()),
        f.trigger(b = a.Event("close.bs.alert")),
        b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", c).emulateTransitionEnd(150) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b,
    a.fn.alert.Constructor = d,
    a.fn.alert.noConflict = function() {
        return a.fn.alert = e,
        this
    },
    a(document).on("click.bs.alert.data-api", c, d.prototype.close)
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.button"),
            f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)),
            "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b),
        this.options = a.extend({},
        c.DEFAULTS, d),
        this.isLoading = !1
    };
    c.VERSION = "3.2.0",
    c.DEFAULTS = {
        loadingText: "loading..."
    },
    c.prototype.setState = function(b) {
        var c = "disabled",
        d = this.$element,
        e = d.is("input") ? "val": "html",
        f = d.data();
        b += "Text",
        null == f.resetText && d.data("resetText", d[e]()),
        d[e](null == f[b] ? this.options[b] : f[b]),
        setTimeout(a.proxy(function() {
            "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        },
        this), 0)
    },
    c.prototype.toggle = function() {
        var a = !0,
        b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")),
            a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        a && this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b,
    a.fn.button.Constructor = c,
    a.fn.button.noConflict = function() {
        return a.fn.button = d,
        this
    },
    a(document).on("click.bs.button.data-api", '[data-toggle^="button"]',
    function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")),
        b.call(d, "toggle"),
        c.preventDefault()
    })
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.carousel"),
            f = a.extend({},
            c.DEFAULTS, d.data(), "object" == typeof b && b),
            g = "string" == typeof b ? b: f.slide;
            e || d.data("bs.carousel", e = new c(this, f)),
            "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b).on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = c,
        this.paused = this.sliding = this.interval = this.$active = this.$items = null,
        "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.2.0",
    c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    },
    c.prototype.keydown = function(a) {
        switch (a.which) {
        case 37:
            this.prev();
            break;
        case 39:
            this.next();
            break;
        default:
            return
        }
        a.preventDefault()
    },
    c.prototype.cycle = function(b) {
        return b || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)),
        this
    },
    c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"),
        this.$items.index(a || this.$active)
    },
    c.prototype.to = function(b) {
        var c = this,
        d = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel",
        function() {
            c.to(b)
        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next": "prev", a(this.$items[b]))
    },
    c.prototype.pause = function(b) {
        return b || (this.paused = !0),
        this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    },
    c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    },
    c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    },
    c.prototype.slide = function(b, c) {
        var d = this.$element.find(".item.active"),
        e = c || d[b](),
        f = this.interval,
        g = "next" == b ? "left": "right",
        h = "next" == b ? "first": "last",
        i = this;
        if (!e.length) {
            if (!this.options.wrap) return;
            e = this.$element.find(".item")[h]()
        }
        if (e.hasClass("active")) return this.sliding = !1;
        var j = e[0],
        k = a.Event("slide.bs.carousel", {
            relatedTarget: j,
            direction: g
        });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, f && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(e)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: g
            });
            return a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one("bsTransitionEnd",
            function() {
                e.removeClass([b, g].join(" ")).addClass("active"),
                d.removeClass(["active", g].join(" ")),
                i.sliding = !1,
                setTimeout(function() {
                    i.$element.trigger(m)
                },
                0)
            }).emulateTransitionEnd(1e3 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger(m)),
            f && this.cycle(),
            this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b,
    a.fn.carousel.Constructor = c,
    a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d,
        this
    },
    a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]",
    function(c) {
        var d, e = a(this),
        f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({},
            f.data(), e.data()),
            h = e.attr("data-slide-to");
            h && (g.interval = !1),
            b.call(f, g),
            h && f.data("bs.carousel").to(h),
            c.preventDefault()
        }
    }),
    a(window).on("load",
    function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.collapse"),
            f = a.extend({},
            c.DEFAULTS, d.data(), "object" == typeof b && b); ! e && f.toggle && "show" == b && (b = !b),
            e || d.data("bs.collapse", e = new c(this, f)),
            "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.$element = a(b),
        this.options = a.extend({},
        c.DEFAULTS, d),
        this.transitioning = null,
        this.options.parent && (this.$parent = a(this.options.parent)),
        this.options.toggle && this.toggle()
    };
    c.VERSION = "3.2.0",
    c.DEFAULTS = {
        toggle: !0
    },
    c.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width": "height"
    },
    c.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var c = a.Event("show.bs.collapse");
            if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                var d = this.$parent && this.$parent.find("> .panel > .in");
                if (d && d.length) {
                    var e = d.data("bs.collapse");
                    if (e && e.transitioning) return;
                    b.call(d, "hide"),
                    e || d.data("bs.collapse", null)
                }
                var f = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[f](0),
                this.transitioning = 1;
                var g = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[f](""),
                    this.transitioning = 0,
                    this.$element.trigger("shown.bs.collapse")
                };
                if (!a.support.transition) return g.call(this);
                var h = a.camelCase(["scroll", f].join("-"));
                this.$element.one("bsTransitionEnd", a.proxy(g, this)).emulateTransitionEnd(350)[f](this.$element[0][h])
            }
        }
    },
    c.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),
                this.transitioning = 1;
                var d = function() {
                    this.transitioning = 0,
                    this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this)
            }
        }
    },
    c.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide": "show"]()
    };
    var d = a.fn.collapse;
    a.fn.collapse = b,
    a.fn.collapse.Constructor = c,
    a.fn.collapse.noConflict = function() {
        return a.fn.collapse = d,
        this
    },
    a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]',
    function(c) {
        var d, e = a(this),
        f = e.attr("data-target") || c.preventDefault() || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""),
        g = a(f),
        h = g.data("bs.collapse"),
        i = h ? "toggle": e.data(),
        j = e.attr("data-parent"),
        k = j && a(j);
        h && h.transitioning || (k && k.find('[data-toggle="collapse"][data-parent="' + j + '"]').not(e).addClass("collapsed"), e[g.hasClass("in") ? "addClass": "removeClass"]("collapsed")),
        b.call(g, i)
    })
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        b && 3 === b.which || (a(e).remove(), a(f).each(function() {
            var d = c(a(this)),
            e = {
                relatedTarget: this
            };
            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown", e)), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e))
        }))
    }
    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d: b.parent()
    }
    function d(b) {
        return this.each(function() {
            var c = a(this),
            d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)),
            "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
    f = '[data-toggle="dropdown"]',
    g = function(b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    g.VERSION = "3.2.0",
    g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e),
            g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus"),
                f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return ! 1
        }
    },
    g.prototype.keydown = function(b) {
        if (/(38|40|27)/.test(b.keyCode)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = c(d),
                g = e.hasClass("open");
                if (!g || g && 27 == b.keyCode) return 27 == b.which && e.find(f).trigger("focus"),
                d.trigger("click");
                var h = " li:not(.divider):visible a",
                i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
                if (i.length) {
                    var j = i.index(i.filter(":focus"));
                    38 == b.keyCode && j > 0 && j--,
                    40 == b.keyCode && j < i.length - 1 && j++,
                    ~j || (j = 0),
                    i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d,
    a.fn.dropdown.Constructor = g,
    a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h,
        this
    },
    a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form",
    function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f + ', [role="menu"], [role="listbox"]', g.prototype.keydown)
} (jQuery),
+
function(a) {
    "use strict";
    function b(b, d) {
        return this.each(function() {
            var e = a(this),
            f = e.data("bs.modal"),
            g = a.extend({},
            c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)),
            "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c,
        this.$body = a(document.body),
        this.$element = a(b),
        this.$backdrop = this.isShown = null,
        this.scrollbarWidth = 0,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        },
        this))
    };
    c.VERSION = "3.2.0",
    c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    },
    c.prototype.show = function(b) {
        var c = this,
        d = a.Event("show.bs.modal", {
            relatedTarget: b
        });
        this.$element.trigger(d),
        this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
            var d = a.support.transition && c.$element.hasClass("fade");
            c.$element.parent().length || c.$element.appendTo(c.$body),
            c.$element.show().scrollTop(0),
            d && c.$element[0].offsetWidth,
            c.$element.addClass("in").attr("aria-hidden", !1),
            c.enforceFocus();
            var e = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            d ? c.$element.find(".modal-dialog").one("bsTransitionEnd",
            function() {
                c.$element.trigger("focus").trigger(e)
            }).emulateTransitionEnd(300) : c.$element.trigger("focus").trigger(e)
        }))
    },
    c.prototype.hide = function(b) {
        b && b.preventDefault(),
        b = a.Event("hide.bs.modal"),
        this.$element.trigger(b),
        this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    },
    c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        },
        this))
    },
    c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        },
        this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    },
    c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(),
        this.backdrop(function() {
            a.$element.trigger("hidden.bs.modal")
        })
    },
    c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    },
    c.prototype.backdrop = function(b) {
        var c = this,
        d = this.$element.hasClass("fade") ? "fade": "";
        if (this.isShown && this.options.backdrop) {
            var e = a.support.transition && d;
            if (this.$backdrop = a('<div class="modal-backdrop ' + d + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            },
            this)), e && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            e ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var f = function() {
                c.removeBackdrop(),
                b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", f).emulateTransitionEnd(150) : f()
        } else b && b()
    },
    c.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    },
    c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", a + this.scrollbarWidth)
    },
    c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    },
    c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure",
        this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a),
        b
    };
    var d = a.fn.modal;
    a.fn.modal = b,
    a.fn.modal.Constructor = c,
    a.fn.modal.noConflict = function() {
        return a.fn.modal = d,
        this
    },
    a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]',
    function(c) {
        var d = a(this),
        e = d.attr("href"),
        f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
        g = f.data("bs.modal") ? "toggle": a.extend({
            remote: !/#/.test(e) && e
        },
        f.data(), d.data());
        d.is("a") && c.preventDefault(),
        f.one("show.bs.modal",
        function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal",
            function() {
                d.is(":visible") && d.trigger("focus")
            })
        }),
        b.call(f, g, this)
    })
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.tooltip"),
            f = "object" == typeof b && b; (e || "destroy" != b) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null,
        this.init("tooltip", a, b)
    };
    c.VERSION = "3.2.0",
    c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    },
    c.prototype.init = function(b, c, d) {
        this.enabled = !0,
        this.type = b,
        this.$element = a(c),
        this.options = this.getOptions(d),
        this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter": "focusin",
                i = "hover" == g ? "mouseleave": "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)),
                this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({},
        this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    },
    c.prototype.getDefaults = function() {
        return c.DEFAULTS
    },
    c.prototype.getOptions = function(b) {
        return b = a.extend({},
        this.getDefaults(), this.$element.data(), b),
        b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }),
        b
    },
    c.prototype.getDelegateOptions = function() {
        var b = {},
        c = this.getDefaults();
        return this._options && a.each(this._options,
        function(a, d) {
            c[a] != d && (b[a] = d)
        }),
        b
    },
    c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b: a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)),
        clearTimeout(c.timeout),
        c.hoverState = "in",
        c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        },
        c.options.delay.show)) : c.show()
    },
    c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b: a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)),
        clearTimeout(c.timeout),
        c.hoverState = "out",
        c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        },
        c.options.delay.hide)) : c.hide()
    },
    c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var c = a.contains(document.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !c) return;
            var d = this,
            e = this.tip(),
            f = this.getUID(this.type);
            this.setContent(),
            e.attr("id", f),
            this.$element.attr("aria-describedby", f),
            this.options.animation && e.addClass("fade");
            var g = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement,
            h = /\s?auto?\s?/i,
            i = h.test(g);
            i && (g = g.replace(h, "") || "top"),
            e.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(g).data("bs." + this.type, this),
            this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element);
            var j = this.getPosition(),
            k = e[0].offsetWidth,
            l = e[0].offsetHeight;
            if (i) {
                var m = g,
                n = this.$element.parent(),
                o = this.getPosition(n);
                g = "bottom" == g && j.top + j.height + l - o.scroll > o.height ? "top": "top" == g && j.top - o.scroll - l < 0 ? "bottom": "right" == g && j.right + k > o.width ? "left": "left" == g && j.left - k < o.left ? "right": g,
                e.removeClass(m).addClass(g)
            }
            var p = this.getCalculatedOffset(g, j, k, l);
            this.applyPlacement(p, g);
            var q = function() {
                d.$element.trigger("shown.bs." + d.type),
                d.hoverState = null
            };
            a.support.transition && this.$tip.hasClass("fade") ? e.one("bsTransitionEnd", q).emulateTransitionEnd(150) : q()
        }
    },
    c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
        e = d[0].offsetWidth,
        f = d[0].offsetHeight,
        g = parseInt(d.css("margin-top"), 10),
        h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
        isNaN(h) && (h = 0),
        b.top = b.top + g,
        b.left = b.left + h,
        a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        },
        b), 0),
        d.addClass("in");
        var i = d[0].offsetWidth,
        j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left: b.top += k.top;
        var l = k.left ? 2 * k.left - e + i: 2 * k.top - f + j,
        m = k.left ? "left": "top",
        n = k.left ? "offsetWidth": "offsetHeight";
        d.offset(b),
        this.replaceArrow(l, d[0][n], m)
    },
    c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%": "")
    },
    c.prototype.setContent = function() {
        var a = this.tip(),
        b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html": "text"](b),
        a.removeClass("fade in top bottom left right")
    },
    c.prototype.hide = function() {
        function b() {
            "in" != c.hoverState && d.detach(),
            c.$element.trigger("hidden.bs." + c.type)
        }
        var c = this,
        d = this.tip(),
        e = a.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"),
        this.$element.trigger(e),
        e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b(), this.hoverState = null, this)
    },
    c.prototype.fixTitle = function() {
        var a = this.$element; (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    },
    c.prototype.hasContent = function() {
        return this.getTitle()
    },
    c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
        d = "BODY" == c.tagName;
        return a.extend({},
        "function" == typeof c.getBoundingClientRect ? c.getBoundingClientRect() : null, {
            scroll: d ? document.documentElement.scrollTop || document.body.scrollTop: b.scrollTop(),
            width: d ? a(window).width() : b.outerWidth(),
            height: d ? a(window).height() : b.outerHeight()
        },
        d ? {
            top: 0,
            left: 0
        }: b.offset())
    },
    c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        }: "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        }: "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        }: {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    },
    c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
        g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
            i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h: i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
            k = b.left + f + c;
            j < g.left ? e.left = g.left - j: k > g.width && (e.left = g.left + g.width - k)
        }
        return e
    },
    c.prototype.getTitle = function() {
        var a, b = this.$element,
        c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    },
    c.prototype.getUID = function(a) {
        do a += ~~ (1e6 * Math.random());
        while (document.getElementById(a));
        return a
    },
    c.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template)
    },
    c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    },
    c.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    },
    c.prototype.enable = function() {
        this.enabled = !0
    },
    c.prototype.disable = function() {
        this.enabled = !1
    },
    c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    },
    c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))),
        c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    },
    c.prototype.destroy = function() {
        clearTimeout(this.timeout),
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b,
    a.fn.tooltip.Constructor = c,
    a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d,
        this
    }
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.popover"),
            f = "object" == typeof b && b; (e || "destroy" != b) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.2.0",
    c.DEFAULTS = a.extend({},
    a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    c.prototype = a.extend({},
    a.fn.tooltip.Constructor.prototype),
    c.prototype.constructor = c,
    c.prototype.getDefaults = function() {
        return c.DEFAULTS
    },
    c.prototype.setContent = function() {
        var a = this.tip(),
        b = this.getTitle(),
        c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html": "text"](b),
        a.find(".popover-content").empty()[this.options.html ? "string" == typeof c ? "html": "append": "text"](c),
        a.removeClass("fade top bottom left right in"),
        a.find(".popover-title").html() || a.find(".popover-title").hide()
    },
    c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    },
    c.prototype.getContent = function() {
        var a = this.$element,
        b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    },
    c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    },
    c.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)),
        this.$tip
    };
    var d = a.fn.popover;
    a.fn.popover = b,
    a.fn.popover.Constructor = c,
    a.fn.popover.noConflict = function() {
        return a.fn.popover = d,
        this
    }
} (jQuery),
+
function(a) {
    "use strict";
    function b(c, d) {
        var e = a.proxy(this.process, this);
        this.$body = a("body"),
        this.$scrollElement = a(a(c).is("body") ? window: c),
        this.options = a.extend({},
        b.DEFAULTS, d),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", e),
        this.refresh(),
        this.process()
    }
    function c(c) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.scrollspy"),
            f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)),
            "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.2.0",
    b.DEFAULTS = {
        offset: 10
    },
    b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    },
    b.prototype.refresh = function() {
        var b = "offset",
        c = 0;
        a.isWindow(this.$scrollElement[0]) || (b = "position", c = this.$scrollElement.scrollTop()),
        this.offsets = [],
        this.targets = [],
        this.scrollHeight = this.getScrollHeight();
        var d = this;
        this.$body.find(this.selector).map(function() {
            var d = a(this),
            e = d.data("target") || d.attr("href"),
            f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [[f[b]().top + c, e]] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            d.offsets.push(this[0]),
            d.targets.push(this[1])
        })
    },
    b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
        c = this.getScrollHeight(),
        d = this.options.offset + c - this.$scrollElement.height(),
        e = this.offsets,
        f = this.targets,
        g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b <= e[0]) return g != (a = f[0]) && this.activate(a);
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    },
    b.prototype.activate = function(b) {
        this.activeTarget = b,
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
        d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")),
        d.trigger("activate.bs.scrollspy")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c,
    a.fn.scrollspy.Constructor = b,
    a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d,
        this
    },
    a(window).on("load.bs.scrollspy.data-api",
    function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)),
            "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.2.0",
    c.prototype.show = function() {
        var b = this.element,
        c = b.closest("ul:not(.dropdown-menu)"),
        d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")[0],
            f = a.Event("show.bs.tab", {
                relatedTarget: e
            });
            if (b.trigger(f), !f.isDefaultPrevented()) {
                var g = a(d);
                this.activate(b.closest("li"), c),
                this.activate(g, g.parent(),
                function() {
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e
                    })
                })
            }
        }
    },
    c.prototype.activate = function(b, c, d) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),
            b.addClass("active"),
            g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"),
            d && d()
        }
        var f = c.find("> .active"),
        g = d && a.support.transition && f.hasClass("fade");
        g ? f.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(),
        f.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b,
    a.fn.tab.Constructor = c,
    a.fn.tab.noConflict = function() {
        return a.fn.tab = d,
        this
    },
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]',
    function(c) {
        c.preventDefault(),
        b.call(a(this), "show")
    })
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.affix"),
            f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)),
            "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({},
        c.DEFAULTS, d),
        this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = a(b),
        this.affixed = this.unpin = this.pinnedOffset = null,
        this.checkPosition()
    };
    c.VERSION = "3.2.0",
    c.RESET = "affix affix-top affix-bottom",
    c.DEFAULTS = {
        offset: 0,
        target: window
    },
    c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
        b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    },
    c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    },
    c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = a(document).height(),
            d = this.$target.scrollTop(),
            e = this.$element.offset(),
            f = this.options.offset,
            g = f.top,
            h = f.bottom;
            "object" != typeof f && (h = g = f),
            "function" == typeof g && (g = f.top(this.$element)),
            "function" == typeof h && (h = f.bottom(this.$element));
            var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= b - h ? "bottom": null != g && g >= d ? "top": !1;
            if (this.affixed !== i) {
                null != this.unpin && this.$element.css("top", "");
                var j = "affix" + (i ? "-" + i: ""),
                k = a.Event(j + ".bs.affix");
                this.$element.trigger(k),
                k.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))), "bottom" == i && this.$element.offset({
                    top: b - this.$element.height() - h
                }))
            }
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b,
    a.fn.affix.Constructor = c,
    a.fn.affix.noConflict = function() {
        return a.fn.affix = d,
        this
    },
    a(window).on("load",
    function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
            d = c.data();
            d.offset = d.offset || {},
            d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d)
        })
    })
} (jQuery),
function(a, b, c) {
    "use strict";
    function d(a) {
        return function() {
            var b, c, d = arguments[0],
            e = "[" + (a ? a + ":": "") + d + "] ",
            f = arguments[1],
            g = arguments,
            h = function(a) {
                return "function" == typeof a ? a.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof a ? "undefined": "string" != typeof a ? JSON.stringify(a) : a
            };
            for (b = e + f.replace(/\{\d+\}/g,
            function(a) {
                var b, c = +a.slice(1, -1);
                return c + 2 < g.length ? (b = g[c + 2], "function" == typeof b ? b.toString().replace(/ ?\{[\s\S]*$/, "") : "undefined" == typeof b ? "undefined": "string" != typeof b ? Q(b) : b) : a
            }), b = b + "\nhttp://errors.angularjs.org/1.2.26/" + (a ? a + "/": "") + d, c = 2; c < arguments.length; c++) b = b + (2 == c ? "?": "&") + "p" + (c - 2) + "=" + encodeURIComponent(h(arguments[c]));
            return new Error(b)
        }
    }
    function e(a) {
        if (null == a || z(a)) return ! 1;
        var b = a.length;
        return 1 === a.nodeType && b ? !0 : u(a) || Cd(a) || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    function f(a, b, c) {
        var d;
        if (a) if (x(a)) for (d in a)"prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d);
        else if (Cd(a) || e(a)) for (d = 0; d < a.length; d++) b.call(c, a[d], d);
        else if (a.forEach && a.forEach !== f) a.forEach(b, c);
        else for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d);
        return a
    }
    function g(a) {
        var b = [];
        for (var c in a) a.hasOwnProperty(c) && b.push(c);
        return b.sort()
    }
    function h(a, b, c) {
        for (var d = g(a), e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]);
        return d
    }
    function i(a) {
        return function(b, c) {
            a(c, b)
        }
    }
    function j() {
        for (var a, b = Bd.length; b;) {
            if (b--, a = Bd[b].charCodeAt(0), 57 == a) return Bd[b] = "A",
            Bd.join("");
            if (90 != a) return Bd[b] = String.fromCharCode(a + 1),
            Bd.join("");
            Bd[b] = "0"
        }
        return Bd.unshift("0"),
        Bd.join("")
    }
    function k(a, b) {
        b ? a.$$hashKey = b: delete a.$$hashKey
    }
    function l(a) {
        var b = a.$$hashKey;
        return f(arguments,
        function(b) {
            b !== a && f(b,
            function(b, c) {
                a[c] = b
            })
        }),
        k(a, b),
        a
    }
    function m(a) {
        return parseInt(a, 10)
    }
    function n(a, b) {
        return l(new(l(function() {},
        {
            prototype: a
        })), b)
    }
    function o() {}
    function p(a) {
        return a
    }
    function q(a) {
        return function() {
            return a
        }
    }
    function r(a) {
        return "undefined" == typeof a
    }
    function s(a) {
        return "undefined" != typeof a
    }
    function t(a) {
        return null != a && "object" == typeof a
    }
    function u(a) {
        return "string" == typeof a
    }
    function v(a) {
        return "number" == typeof a
    }
    function w(a) {
        return "[object Date]" === yd.call(a)
    }
    function x(a) {
        return "function" == typeof a
    }
    function y(a) {
        return "[object RegExp]" === yd.call(a)
    }
    function z(a) {
        return a && a.document && a.location && a.alert && a.setInterval
    }
    function A(a) {
        return a && a.$evalAsync && a.$watch
    }
    function B(a) {
        return "[object File]" === yd.call(a)
    }
    function C(a) {
        return "[object Blob]" === yd.call(a)
    }
    function D(a) {
        return a && x(a.then)
    }
    function E(a) {
        return ! (!a || !(a.nodeName || a.prop && a.attr && a.find))
    }
    function F(a, b, c) {
        var d = [];
        return f(a,
        function(a, e, f) {
            d.push(b.call(c, a, e, f))
        }),
        d
    }
    function G(a, b) {
        return - 1 != H(a, b)
    }
    function H(a, b) {
        if (a.indexOf) return a.indexOf(b);
        for (var c = 0; c < a.length; c++) if (b === a[c]) return c;
        return - 1
    }
    function I(a, b) {
        var c = H(a, b);
        return c >= 0 && a.splice(c, 1),
        b
    }
    function J(a, b, c, d) {
        if (z(a) || A(a)) throw zd("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
        if (b) {
            if (a === b) throw zd("cpi", "Can't copy! Source and destination are identical.");
            if (c = c || [], d = d || [], t(a)) {
                var e = H(c, a);
                if ( - 1 !== e) return d[e];
                c.push(a),
                d.push(b)
            }
            var g;
            if (Cd(a)) {
                b.length = 0;
                for (var h = 0; h < a.length; h++) g = J(a[h], null, c, d),
                t(a[h]) && (c.push(a[h]), d.push(g)),
                b.push(g)
            } else {
                var i = b.$$hashKey;
                Cd(b) ? b.length = 0 : f(b,
                function(a, c) {
                    delete b[c]
                });
                for (var j in a) g = J(a[j], null, c, d),
                t(a[j]) && (c.push(a[j]), d.push(g)),
                b[j] = g;
                k(b, i)
            }
        } else b = a,
        a && (Cd(a) ? b = J(a, [], c, d) : w(a) ? b = new Date(a.getTime()) : y(a) ? (b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex) : t(a) && (b = J(a, {},
        c, d)));
        return b
    }
    function K(a, b) {
        if (Cd(a)) {
            b = b || [];
            for (var c = 0; c < a.length; c++) b[c] = a[c]
        } else if (t(a)) {
            b = b || {};
            for (var d in a) ! nd.call(a, d) || "$" === d.charAt(0) && "$" === d.charAt(1) || (b[d] = a[d])
        }
        return b || a
    }
    function L(a, b) {
        if (a === b) return ! 0;
        if (null === a || null === b) return ! 1;
        if (a !== a && b !== b) return ! 0;
        var d, e, f, g = typeof a,
        h = typeof b;
        if (g == h && "object" == g) {
            if (!Cd(a)) {
                if (w(a)) return w(b) ? isNaN(a.getTime()) && isNaN(b.getTime()) || a.getTime() === b.getTime() : !1;
                if (y(a) && y(b)) return a.toString() == b.toString();
                if (A(a) || A(b) || z(a) || z(b) || Cd(b)) return ! 1;
                f = {};
                for (e in a) if ("$" !== e.charAt(0) && !x(a[e])) {
                    if (!L(a[e], b[e])) return ! 1;
                    f[e] = !0
                }
                for (e in b) if (!f.hasOwnProperty(e) && "$" !== e.charAt(0) && b[e] !== c && !x(b[e])) return ! 1;
                return ! 0
            }
            if (!Cd(b)) return ! 1;
            if ((d = a.length) == b.length) {
                for (e = 0; d > e; e++) if (!L(a[e], b[e])) return ! 1;
                return ! 0
            }
        }
        return ! 1
    }
    function M(a, b, c) {
        return a.concat(wd.call(b, c))
    }
    function N(a, b) {
        return wd.call(a, b || 0)
    }
    function O(a, b) {
        var c = arguments.length > 2 ? N(arguments, 2) : [];
        return ! x(b) || b instanceof RegExp ? b: c.length ?
        function() {
            return arguments.length ? b.apply(a, c.concat(wd.call(arguments, 0))) : b.apply(a, c)
        }: function() {
            return arguments.length ? b.apply(a, arguments) : b.call(a)
        }
    }
    function P(a, d) {
        var e = d;
        return "string" == typeof a && "$" === a.charAt(0) ? e = c: z(d) ? e = "$WINDOW": d && b === d ? e = "$DOCUMENT": A(d) && (e = "$SCOPE"),
        e
    }
    function Q(a, b) {
        return "undefined" == typeof a ? c: JSON.stringify(a, P, b ? "  ": null)
    }
    function R(a) {
        return u(a) ? JSON.parse(a) : a
    }
    function S(a) {
        if ("function" == typeof a) a = !0;
        else if (a && 0 !== a.length) {
            var b = md("" + a);
            a = !("f" == b || "0" == b || "false" == b || "no" == b || "n" == b || "[]" == b)
        } else a = !1;
        return a
    }
    function T(a) {
        a = sd(a).clone();
        try {
            a.empty()
        } catch(b) {}
        var c = 3,
        d = sd("<div>").append(a).html();
        try {
            return a[0].nodeType === c ? md(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
            function(a, b) {
                return "<" + md(b)
            })
        } catch(b) {
            return md(d)
        }
    }
    function U(a) {
        try {
            return decodeURIComponent(a)
        } catch(b) {}
    }
    function V(a) {
        var b, c, d = {};
        return f((a || "").split("&"),
        function(a) {
            if (a && (b = a.replace(/\+/g, "%20").split("="), c = U(b[0]), s(c))) {
                var e = s(b[1]) ? U(b[1]) : !0;
                nd.call(d, c) ? Cd(d[c]) ? d[c].push(e) : d[c] = [d[c], e] : d[c] = e
            }
        }),
        d
    }
    function W(a) {
        var b = [];
        return f(a,
        function(a, c) {
            Cd(a) ? f(a,
            function(a) {
                b.push(Y(c, !0) + (a === !0 ? "": "=" + Y(a, !0)))
            }) : b.push(Y(c, !0) + (a === !0 ? "": "=" + Y(a, !0)))
        }),
        b.length ? b.join("&") : ""
    }
    function X(a) {
        return Y(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }
    function Y(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20": "+")
    }
    function Z(a, c) {
        function d(a) {
            a && h.push(a)
        }
        var e, g, h = [a],
        i = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
        j = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        f(i,
        function(c) {
            i[c] = !0,
            d(b.getElementById(c)),
            c = c.replace(":", "\\:"),
            a.querySelectorAll && (f(a.querySelectorAll("." + c), d), f(a.querySelectorAll("." + c + "\\:"), d), f(a.querySelectorAll("[" + c + "]"), d))
        }),
        f(h,
        function(a) {
            if (!e) {
                var b = " " + a.className + " ",
                c = j.exec(b);
                c ? (e = a, g = (c[2] || "").replace(/\s+/g, ",")) : f(a.attributes,
                function(b) { ! e && i[b.name] && (e = a, g = b.value)
                })
            }
        }),
        e && c(e, g ? [g] : [])
    }
    function $(c, d) {
        var e = function() {
            if (c = sd(c), c.injector()) {
                var a = c[0] === b ? "document": T(c);
                throw zd("btstrpd", "App Already Bootstrapped with this Element '{0}'", a.replace(/</, "&lt;").replace(/>/, "&gt;"))
            }
            d = d || [],
            d.unshift(["$provide",
            function(a) {
                a.value("$rootElement", c)
            }]),
            d.unshift("ng");
            var e = Hb(d);
            return e.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate",
            function(a, b, c, d) {
                a.$apply(function() {
                    b.data("$injector", d),
                    c(b)(a)
                })
            }]),
            e
        },
        g = /^NG_DEFER_BOOTSTRAP!/;
        return a && !g.test(a.name) ? e() : (a.name = a.name.replace(g, ""), void(Ad.resumeBootstrap = function(a) {
            f(a,
            function(a) {
                d.push(a)
            }),
            e()
        }))
    }
    function _(a, b) {
        return b = b || "_",
        a.replace(Fd,
        function(a, c) {
            return (c ? b: "") + a.toLowerCase()
        })
    }
    function ab() {
        td = a.jQuery,
        td && td.fn.on ? (sd = td, l(td.fn, {
            scope: Td.scope,
            isolateScope: Td.isolateScope,
            controller: Td.controller,
            injector: Td.injector,
            inheritedData: Td.inheritedData
        }), kb("remove", !0, !0, !1), kb("empty", !1, !1, !1), kb("html", !1, !1, !0)) : sd = ob,
        Ad.element = sd
    }
    function bb(a, b, c) {
        if (!a) throw zd("areq", "Argument '{0}' is {1}", b || "?", c || "required");
        return a
    }
    function cb(a, b, c) {
        return c && Cd(a) && (a = a[a.length - 1]),
        bb(x(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object": typeof a)),
        a
    }
    function db(a, b) {
        if ("hasOwnProperty" === a) throw zd("badname", "hasOwnProperty is not a valid {0} name", b)
    }
    function eb(a, b, c) {
        if (!b) return a;
        for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++) d = e[h],
        a && (a = (f = a)[d]);
        return ! c && x(a) ? O(f, a) : a
    }
    function fb(a) {
        var b = a[0],
        c = a[a.length - 1];
        if (b === c) return sd(b);
        var d = b,
        e = [d];
        do {
            if (d = d.nextSibling, !d) break;
            e.push(d)
        } while ( d !== c );
        return sd(e)
    }
    function gb(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c())
        }
        var c = d("$injector"),
        e = d("ng"),
        f = b(a, "angular", Object);
        return f.$$minErr = f.$$minErr || d,
        b(f, "module",
        function() {
            var a = {};
            return function(d, f, g) {
                var h = function(a, b) {
                    if ("hasOwnProperty" === a) throw e("badname", "hasOwnProperty is not a valid {0} name", b)
                };
                return h(d, "module"),
                f && a.hasOwnProperty(d) && (a[d] = null),
                b(a, d,
                function() {
                    function a(a, c, d) {
                        return function() {
                            return b[d || "push"]([a, c, arguments]),
                            i
                        }
                    }
                    if (!f) throw c("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", d);
                    var b = [],
                    e = [],
                    h = a("$injector", "invoke"),
                    i = {
                        _invokeQueue: b,
                        _runBlocks: e,
                        requires: f,
                        name: d,
                        provider: a("$provide", "provider"),
                        factory: a("$provide", "factory"),
                        service: a("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        animation: a("$animateProvider", "register"),
                        filter: a("$filterProvider", "register"),
                        controller: a("$controllerProvider", "register"),
                        directive: a("$compileProvider", "directive"),
                        config: h,
                        run: function(a) {
                            return e.push(a),
                            this
                        }
                    };
                    return g && h(g),
                    i
                })
            }
        })
    }
    function hb(b) {
        l(b, {
            bootstrap: $,
            copy: J,
            extend: l,
            equals: L,
            element: sd,
            forEach: f,
            injector: Hb,
            noop: o,
            bind: O,
            toJson: Q,
            fromJson: R,
            identity: p,
            isUndefined: r,
            isDefined: s,
            isString: u,
            isFunction: x,
            isObject: t,
            isNumber: v,
            isElement: E,
            isArray: Cd,
            version: Gd,
            isDate: w,
            lowercase: md,
            uppercase: od,
            callbacks: {
                counter: 0
            },
            $$minErr: d,
            $$csp: Ed
        }),
        ud = gb(a);
        try {
            ud("ngLocale")
        } catch(c) {
            ud("ngLocale", []).provider("$locale", cc)
        }
        ud("ng", ["ngLocale"], ["$provide",
        function(a) {
            a.provider({
                $$sanitizeUri: Cc
            }),
            a.provider("$compile", Ob).directive({
                a: Ce,
                input: Ne,
                textarea: Ne,
                form: Ge,
                script: wf,
                select: zf,
                style: Bf,
                option: Af,
                ngBind: Ze,
                ngBindHtml: _e,
                ngBindTemplate: $e,
                ngClass: af,
                ngClassEven: cf,
                ngClassOdd: bf,
                ngCloak: df,
                ngController: ef,
                ngForm: He,
                ngHide: qf,
                ngIf: hf,
                ngInclude: jf,
                ngInit: lf,
                ngNonBindable: mf,
                ngPluralize: nf,
                ngRepeat: of,
                ngShow: pf,
                ngStyle: rf,
                ngSwitch: sf,
                ngSwitchWhen: tf,
                ngSwitchDefault: uf,
                ngOptions: yf,
                ngTransclude: vf,
                ngModel: Te,
                ngList: We,
                ngChange: Ue,
                required: Ve,
                ngRequired: Ve,
                ngValue: Ye
            }).directive({
                ngInclude: kf
            }).directive(De).directive(ff),
            a.provider({
                $anchorScroll: Ib,
                $animate: ae,
                $browser: Lb,
                $cacheFactory: Mb,
                $controller: Rb,
                $document: Sb,
                $exceptionHandler: Tb,
                $filter: Nc,
                $interpolate: ac,
                $interval: bc,
                $http: Yb,
                $httpBackend: $b,
                $location: pc,
                $log: qc,
                $parse: xc,
                $rootScope: Bc,
                $q: yc,
                $sce: Hc,
                $sceDelegate: Gc,
                $sniffer: Ic,
                $templateCache: Nb,
                $timeout: Jc,
                $window: Mc,
                $$rAF: Ac,
                $$asyncCallback: Jb
            })
        }])
    }
    function ib() {
        return++Id
    }
    function jb(a) {
        return a.replace(Ld,
        function(a, b, c, d) {
            return d ? c.toUpperCase() : c
        }).replace(Md, "Moz$1")
    }
    function kb(a, b, c, d) {
        function e(a) {
            var e, g, h, i, j, k, l, m = c && a ? [this.filter(a)] : [this],
            n = b;
            if (!d || null != a) for (; m.length;) for (e = m.shift(), g = 0, h = e.length; h > g; g++) for (i = sd(e[g]), n ? i.triggerHandler("$destroy") : n = !n, j = 0, k = (l = i.children()).length; k > j; j++) m.push(td(l[j]));
            return f.apply(this, arguments)
        }
        var f = td.fn[a];
        f = f.$original || f,
        e.$original = f,
        td.fn[a] = e
    }
    function lb(a) {
        return ! Pd.test(a)
    }
    function mb(a, b) {
        var c, d, e, f, g, h, i = b.createDocumentFragment(),
        j = [];
        if (lb(a)) j.push(b.createTextNode(a));
        else {
            for (c = i.appendChild(b.createElement("div")), d = (Qd.exec(a) || ["", ""])[1].toLowerCase(), e = Sd[d] || Sd._default, c.innerHTML = "<div>&#160;</div>" + e[1] + a.replace(Rd, "<$1></$2>") + e[2], c.removeChild(c.firstChild), f = e[0]; f--;) c = c.lastChild;
            for (g = 0, h = c.childNodes.length; h > g; ++g) j.push(c.childNodes[g]);
            c = i.firstChild,
            c.textContent = ""
        }
        return i.textContent = "",
        i.innerHTML = "",
        j
    }
    function nb(a, c) {
        c = c || b;
        var d;
        return (d = Od.exec(a)) ? [c.createElement(d[1])] : mb(a, c)
    }
    function ob(a) {
        if (a instanceof ob) return a;
        if (u(a) && (a = Dd(a)), !(this instanceof ob)) {
            if (u(a) && "<" != a.charAt(0)) throw Nd("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new ob(a)
        }
        if (u(a)) {
            yb(this, nb(a));
            var c = sd(b.createDocumentFragment());
            c.append(this)
        } else yb(this, a)
    }
    function pb(a) {
        return a.cloneNode(!0)
    }
    function qb(a) {
        sb(a);
        for (var b = 0,
        c = a.childNodes || []; b < c.length; b++) qb(c[b])
    }
    function rb(a, b, c, d) {
        if (s(d)) throw Nd("offargs", "jqLite#off() does not support the `selector` argument");
        var e = tb(a, "events"),
        g = tb(a, "handle");
        g && (r(b) ? f(e,
        function(b, c) {
            Kd(a, c, b),
            delete e[c]
        }) : f(b.split(" "),
        function(b) {
            r(c) ? (Kd(a, b, e[b]), delete e[b]) : I(e[b] || [], c)
        }))
    }
    function sb(a, b) {
        var d = a.ng339,
        e = Hd[d];
        if (e) {
            if (b) return void delete Hd[d].data[b];
            e.handle && (e.events.$destroy && e.handle({},
            "$destroy"), rb(a)),
            delete Hd[d],
            a.ng339 = c
        }
    }
    function tb(a, b, c) {
        var d = a.ng339,
        e = Hd[d || -1];
        return s(c) ? (e || (a.ng339 = d = ib(), e = Hd[d] = {}), void(e[b] = c)) : e && e[b]
    }
    function ub(a, b, c) {
        var d = tb(a, "data"),
        e = s(c),
        f = !e && s(b),
        g = f && !t(b);
        if (d || g || tb(a, "data", d = {}), e) d[b] = c;
        else {
            if (!f) return d;
            if (g) return d && d[b];
            l(d, b)
        }
    }
    function vb(a, b) {
        return a.getAttribute ? (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1 : !1
    }
    function wb(a, b) {
        b && a.setAttribute && f(b.split(" "),
        function(b) {
            a.setAttribute("class", Dd((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Dd(b) + " ", " ")))
        })
    }
    function xb(a, b) {
        if (b && a.setAttribute) {
            var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            f(b.split(" "),
            function(a) {
                a = Dd(a),
                -1 === c.indexOf(" " + a + " ") && (c += a + " ")
            }),
            a.setAttribute("class", Dd(c))
        }
    }
    function yb(a, b) {
        if (b) {
            b = b.nodeName || !s(b.length) || z(b) ? [b] : b;
            for (var c = 0; c < b.length; c++) a.push(b[c])
        }
    }
    function zb(a, b) {
        return Ab(a, "$" + (b || "ngController") + "Controller")
    }
    function Ab(a, b, d) {
        9 == a.nodeType && (a = a.documentElement);
        for (var e = Cd(b) ? b: [b]; a;) {
            for (var f = 0,
            g = e.length; g > f; f++) if ((d = sd.data(a, e[f])) !== c) return d;
            a = a.parentNode || 11 === a.nodeType && a.host
        }
    }
    function Bb(a) {
        for (var b = 0,
        c = a.childNodes; b < c.length; b++) qb(c[b]);
        for (; a.firstChild;) a.removeChild(a.firstChild)
    }
    function Cb(a, b) {
        var c = Ud[b.toLowerCase()];
        return c && Vd[a.nodeName] && c
    }
    function Db(a, c) {
        var d = function(d, e) {
            if (d.preventDefault || (d.preventDefault = function() {
                d.returnValue = !1
            }), d.stopPropagation || (d.stopPropagation = function() {
                d.cancelBubble = !0
            }), d.target || (d.target = d.srcElement || b), r(d.defaultPrevented)) {
                var g = d.preventDefault;
                d.preventDefault = function() {
                    d.defaultPrevented = !0,
                    g.call(d)
                },
                d.defaultPrevented = !1
            }
            d.isDefaultPrevented = function() {
                return d.defaultPrevented || d.returnValue === !1
            };
            var h = K(c[e || d.type] || []);
            f(h,
            function(b) {
                b.call(a, d)
            }),
            8 >= rd ? (d.preventDefault = null, d.stopPropagation = null, d.isDefaultPrevented = null) : (delete d.preventDefault, delete d.stopPropagation, delete d.isDefaultPrevented)
        };
        return d.elem = a,
        d
    }
    function Eb(a, b) {
        var d, e = typeof a;
        return "function" == e || "object" == e && null !== a ? "function" == typeof(d = a.$$hashKey) ? d = a.$$hashKey() : d === c && (d = a.$$hashKey = (b || j)()) : d = a,
        e + ":" + d
    }
    function Fb(a, b) {
        if (b) {
            var c = 0;
            this.nextUid = function() {
                return++c
            }
        }
        f(a, this.put, this)
    }
    function Gb(a) {
        var b, c, d, e;
        return "function" == typeof a ? (b = a.$inject) || (b = [], a.length && (c = a.toString().replace(Zd, ""), d = c.match(Wd), f(d[1].split(Xd),
        function(a) {
            a.replace(Yd,
            function(a, c, d) {
                b.push(d)
            })
        })), a.$inject = b) : Cd(a) ? (e = a.length - 1, cb(a[e], "fn"), b = a.slice(0, e)) : cb(a, "fn", !0),
        b
    }
    function Hb(a) {
        function b(a) {
            return function(b, c) {
                return t(b) ? void f(b, i(a)) : a(b, c)
            }
        }
        function c(a, b) {
            if (db(a, "service"), (x(b) || Cd(b)) && (b = v.instantiate(b)), !b.$get) throw $d("pget", "Provider '{0}' must define $get factory method.", a);
            return s[a + n] = b
        }
        function d(a, b) {
            return c(a, {
                $get: b
            })
        }
        function e(a, b) {
            return d(a, ["$injector",
            function(a) {
                return a.instantiate(b)
            }])
        }
        function g(a, b) {
            return d(a, q(b))
        }
        function h(a, b) {
            db(a, "constant"),
            s[a] = b,
            w[a] = b
        }
        function j(a, b) {
            var c = v.get(a + n),
            d = c.$get;
            c.$get = function() {
                var a = y.invoke(d, c);
                return y.invoke(b, null, {
                    $delegate: a
                })
            }
        }
        function k(a) {
            var b, c, d, e, g = [];
            return f(a,
            function(a) {
                if (!r.get(a)) {
                    r.put(a, !0);
                    try {
                        if (u(a)) for (b = ud(a), g = g.concat(k(b.requires)).concat(b._runBlocks), c = b._invokeQueue, d = 0, e = c.length; e > d; d++) {
                            var f = c[d],
                            h = v.get(f[0]);
                            h[f[1]].apply(h, f[2])
                        } else x(a) ? g.push(v.invoke(a)) : Cd(a) ? g.push(v.invoke(a)) : cb(a, "module")
                    } catch(i) {
                        throw Cd(a) && (a = a[a.length - 1]),
                        i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack),
                        $d("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, i.stack || i.message || i)
                    }
                }
            }),
            g
        }
        function l(a, b) {
            function c(c) {
                if (a.hasOwnProperty(c)) {
                    if (a[c] === m) throw $d("cdep", "Circular dependency found: {0}", c + " <- " + p.join(" <- "));
                    return a[c]
                }
                try {
                    return p.unshift(c),
                    a[c] = m,
                    a[c] = b(c)
                } catch(d) {
                    throw a[c] === m && delete a[c],
                    d
                } finally {
                    p.shift()
                }
            }
            function d(a, b, d) {
                var e, f, g, h = [],
                i = Gb(a);
                for (f = 0, e = i.length; e > f; f++) {
                    if (g = i[f], "string" != typeof g) throw $d("itkn", "Incorrect injection token! Expected service name as string, got {0}", g);
                    h.push(d && d.hasOwnProperty(g) ? d[g] : c(g))
                }
                return Cd(a) && (a = a[e]),
                a.apply(b, h)
            }
            function e(a, b) {
                var c, e, f = function() {};
                return f.prototype = (Cd(a) ? a[a.length - 1] : a).prototype,
                c = new f,
                e = d(a, c, b),
                t(e) || x(e) ? e: c
            }
            return {
                invoke: d,
                instantiate: e,
                get: c,
                annotate: Gb,
                has: function(b) {
                    return s.hasOwnProperty(b + n) || a.hasOwnProperty(b)
                }
            }
        }
        var m = {},
        n = "Provider",
        p = [],
        r = new Fb([], !0),
        s = {
            $provide: {
                provider: b(c),
                factory: b(d),
                service: b(e),
                value: b(g),
                constant: b(h),
                decorator: j
            }
        },
        v = s.$injector = l(s,
        function() {
            throw $d("unpr", "Unknown provider: {0}", p.join(" <- "))
        }),
        w = {},
        y = w.$injector = l(w,
        function(a) {
            var b = v.get(a + n);
            return y.invoke(b.$get, b)
        });
        return f(k(a),
        function(a) {
            y.invoke(a || o)
        }),
        y
    }
    function Ib() {
        var a = !0;
        this.disableAutoScrolling = function() {
            a = !1
        },
        this.$get = ["$window", "$location", "$rootScope",
        function(b, c, d) {
            function e(a) {
                var b = null;
                return f(a,
                function(a) {
                    b || "a" !== md(a.nodeName) || (b = a)
                }),
                b
            }
            function g() {
                var a, d = c.hash();
                d ? (a = h.getElementById(d)) ? a.scrollIntoView() : (a = e(h.getElementsByName(d))) ? a.scrollIntoView() : "top" === d && b.scrollTo(0, 0) : b.scrollTo(0, 0)
            }
            var h = b.document;
            return a && d.$watch(function() {
                return c.hash()
            },
            function() {
                d.$evalAsync(g)
            }),
            g
        }]
    }
    function Jb() {
        this.$get = ["$$rAF", "$timeout",
        function(a, b) {
            return a.supported ?
            function(b) {
                return a(b)
            }: function(a) {
                return b(a, 0, !1)
            }
        }]
    }
    function Kb(a, b, d, e) {
        function g(a) {
            try {
                a.apply(null, N(arguments, 1))
            } finally {
                if (s--, 0 === s) for (; t.length;) try {
                    t.pop()()
                } catch(b) {
                    d.error(b)
                }
            }
        }
        function h(a, b) { !
            function c() {
                f(w,
                function(a) {
                    a()
                }),
                v = b(c, a)
            } ()
        }
        function i() {
            z = null,
            x != j.url() && (x = j.url(), f(A,
            function(a) {
                a(j.url())
            }))
        }
        var j = this,
        k = b[0],
        l = a.location,
        m = a.history,
        n = a.setTimeout,
        p = a.clearTimeout,
        q = {};
        j.isMock = !1;
        var s = 0,
        t = [];
        j.$$completeOutstandingRequest = g,
        j.$$incOutstandingRequestCount = function() {
            s++
        },
        j.notifyWhenNoOutstandingRequests = function(a) {
            f(w,
            function(a) {
                a()
            }),
            0 === s ? a() : t.push(a)
        };
        var v, w = [];
        j.addPollFn = function(a) {
            return r(v) && h(100, n),
            w.push(a),
            a
        };
        var x = l.href,
        y = b.find("base"),
        z = null;
        j.url = function(b, c) {
            if (l !== a.location && (l = a.location), m !== a.history && (m = a.history), b) {
                if (x == b) return;
                return x = b,
                e.history ? c ? m.replaceState(null, "", b) : (m.pushState(null, "", b), y.attr("href", y.attr("href"))) : (z = b, c ? l.replace(b) : l.href = b),
                j
            }
            return z || l.href.replace(/%27/g, "'")
        };
        var A = [],
        B = !1;
        j.onUrlChange = function(b) {
            return B || (e.history && sd(a).on("popstate", i), e.hashchange ? sd(a).on("hashchange", i) : j.addPollFn(i), B = !0),
            A.push(b),
            b
        },
        j.$$checkUrlChange = i,
        j.baseHref = function() {
            var a = y.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var C = {},
        D = "",
        E = j.baseHref();
        j.cookies = function(a, b) {
            var e, f, g, h, i;
            if (!a) {
                if (k.cookie !== D) for (D = k.cookie, f = D.split("; "), C = {},
                h = 0; h < f.length; h++) g = f[h],
                i = g.indexOf("="),
                i > 0 && (a = unescape(g.substring(0, i)), C[a] === c && (C[a] = unescape(g.substring(i + 1))));
                return C
            }
            b === c ? k.cookie = escape(a) + "=;path=" + E + ";expires=Thu, 01 Jan 1970 00:00:00 GMT": u(b) && (e = (k.cookie = escape(a) + "=" + escape(b) + ";path=" + E).length + 1, e > 4096 && d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + e + " > 4096 bytes)!"))
        },
        j.defer = function(a, b) {
            var c;
            return s++,
            c = n(function() {
                delete q[c],
                g(a)
            },
            b || 0),
            q[c] = !0,
            c
        },
        j.defer.cancel = function(a) {
            return q[a] ? (delete q[a], p(a), g(o), !0) : !1
        }
    }
    function Lb() {
        this.$get = ["$window", "$log", "$sniffer", "$document",
        function(a, b, c, d) {
            return new Kb(a, d, b, c)
        }]
    }
    function Mb() {
        this.$get = function() {
            function a(a, c) {
                function e(a) {
                    a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null)
                }
                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }
                if (a in b) throw d("$cacheFactory")("iid", "CacheId '{0}' is already taken!", a);
                var g = 0,
                h = l({},
                c, {
                    id: a
                }),
                i = {},
                j = c && c.capacity || Number.MAX_VALUE,
                k = {},
                m = null,
                n = null;
                return b[a] = {
                    put: function(a, b) {
                        if (j < Number.MAX_VALUE) {
                            var c = k[a] || (k[a] = {
                                key: a
                            });
                            e(c)
                        }
                        if (!r(b)) return a in i || g++,
                        i[a] = b,
                        g > j && this.remove(n.key),
                        b
                    },
                    get: function(a) {
                        if (j < Number.MAX_VALUE) {
                            var b = k[a];
                            if (!b) return;
                            e(b)
                        }
                        return i[a]
                    },
                    remove: function(a) {
                        if (j < Number.MAX_VALUE) {
                            var b = k[a];
                            if (!b) return;
                            b == m && (m = b.p),
                            b == n && (n = b.n),
                            f(b.n, b.p),
                            delete k[a]
                        }
                        delete i[a],
                        g--
                    },
                    removeAll: function() {
                        i = {},
                        g = 0,
                        k = {},
                        m = n = null
                    },
                    destroy: function() {
                        i = null,
                        h = null,
                        k = null,
                        delete b[a]
                    },
                    info: function() {
                        return l({},
                        h, {
                            size: g
                        })
                    }
                }
            }
            var b = {};
            return a.info = function() {
                var a = {};
                return f(b,
                function(b, c) {
                    a[c] = b.info()
                }),
                a
            },
            a.get = function(a) {
                return b[a]
            },
            a
        }
    }
    function Nb() {
        this.$get = ["$cacheFactory",
        function(a) {
            return a("templates")
        }]
    }
    function Ob(a, d) {
        var e = {},
        g = "Directive",
        h = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,
        j = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
        k = /^(on[a-z]+|formaction)$/;
        this.directive = function m(b, c) {
            return db(b, "directive"),
            u(b) ? (bb(c, "directiveFactory"), e.hasOwnProperty(b) || (e[b] = [], a.factory(b + g, ["$injector", "$exceptionHandler",
            function(a, c) {
                var d = [];
                return f(e[b],
                function(e, f) {
                    try {
                        var g = a.invoke(e);
                        x(g) ? g = {
                            compile: q(g)
                        }: !g.compile && g.link && (g.compile = q(g.link)),
                        g.priority = g.priority || 0,
                        g.index = f,
                        g.name = g.name || b,
                        g.require = g.require || g.controller && g.name,
                        g.restrict = g.restrict || "A",
                        d.push(g)
                    } catch(h) {
                        c(h)
                    }
                }),
                d
            }])), e[b].push(c)) : f(b, i(m)),
            this
        },
        this.aHrefSanitizationWhitelist = function(a) {
            return s(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist()
        },
        this.imgSrcSanitizationWhitelist = function(a) {
            return s(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist()
        },
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri",
        function(a, d, i, m, o, q, r, s, v, w, y, z) {
            function A(a, b, c, d, e) {
                a instanceof sd || (a = sd(a)),
                f(a,
                function(b, c) {
                    3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = b = sd(b).wrap("<span></span>").parent()[0])
                });
                var g = C(a, b, a, c, d, e);
                return B(a, "ng-scope"),
                function(b, c, d, e) {
                    bb(b, "scope");
                    var h = c ? Td.clone.call(a) : a;
                    f(d,
                    function(a, b) {
                        h.data("$" + b + "Controller", a)
                    });
                    for (var i = 0,
                    j = h.length; j > i; i++) {
                        var k = h[i],
                        l = k.nodeType; (1 === l || 9 === l) && h.eq(i).data("$scope", b)
                    }
                    return c && c(h, b),
                    g && g(b, h, h, e),
                    h
                }
            }
            function B(a, b) {
                try {
                    a.addClass(b)
                } catch(c) {}
            }
            function C(a, b, d, e, f, g) {
                function h(a, d, e, f) {
                    var g, h, i, j, k, l, m, n, p = d.length,
                    q = new Array(p);
                    for (k = 0; p > k; k++) q[k] = d[k];
                    for (k = 0, m = 0, l = o.length; l > k; m++) i = q[m],
                    g = o[k++],
                    h = o[k++],
                    g ? (g.scope ? (j = a.$new(), sd.data(i, "$scope", j)) : j = a, n = g.transcludeOnThisElement ? D(a, g.transclude, f) : !g.templateOnThisElement && f ? f: !f && b ? D(a, b) : null, g(h, j, i, e, n)) : h && h(a, i.childNodes, c, f)
                }
                for (var i, j, k, l, m, n, o = [], p = 0; p < a.length; p++) i = new X,
                j = E(a[p], [], i, 0 === p ? e: c, f),
                k = j.length ? H(j, a[p], i, b, d, null, [], [], g) : null,
                k && k.scope && B(i.$$element, "ng-scope"),
                m = k && k.terminal || !(l = a[p].childNodes) || !l.length ? null: C(l, k ? (k.transcludeOnThisElement || !k.templateOnThisElement) && k.transclude: b),
                o.push(k, m),
                n = n || k || m,
                g = null;
                return n ? h: null
            }
            function D(a, b, c) {
                var d = function(d, e, f) {
                    var g = !1;
                    d || (d = a.$new(), d.$$transcluded = !0, g = !0);
                    var h = b(d, e, f, c);
                    return g && h.on("$destroy",
                    function() {
                        d.$destroy()
                    }),
                    h
                };
                return d
            }
            function E(a, b, c, d, e) {
                var f, g, i = a.nodeType,
                k = c.$attr;
                switch (i) {
                case 1:
                    J(b, Pb(vd(a).toLowerCase()), "E", d, e);
                    for (var l, m, n, o, p, q, r = a.attributes,
                    s = 0,
                    t = r && r.length; t > s; s++) {
                        var v = !1,
                        w = !1;
                        if (l = r[s], !rd || rd >= 8 || l.specified) {
                            m = l.name,
                            p = Dd(l.value),
                            o = Pb(m),
                            (q = ab.test(o)) && (m = _(o.substr(6), "-"));
                            var x = o.replace(/(Start|End)$/, "");
                            o === x + "Start" && (v = m, w = m.substr(0, m.length - 5) + "end", m = m.substr(0, m.length - 6)),
                            n = Pb(m.toLowerCase()),
                            k[n] = m,
                            (q || !c.hasOwnProperty(n)) && (c[n] = p, Cb(a, n) && (c[n] = !0)),
                            U(a, b, p, n),
                            J(b, n, "A", d, e, v, w)
                        }
                    }
                    if (g = a.className, u(g) && "" !== g) for (; f = j.exec(g);) n = Pb(f[2]),
                    J(b, n, "C", d, e) && (c[n] = Dd(f[3])),
                    g = g.substr(f.index + f[0].length);
                    break;
                case 3:
                    R(b, a.nodeValue);
                    break;
                case 8:
                    try {
                        f = h.exec(a.nodeValue),
                        f && (n = Pb(f[1]), J(b, n, "M", d, e) && (c[n] = Dd(f[2])))
                    } catch(y) {}
                }
                return b.sort(P),
                b
            }
            function F(a, b, c) {
                var d = [],
                e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw be("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
                        1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), a = a.nextSibling
                    } while ( e > 0 )
                } else d.push(a);
                return sd(d)
            }
            function G(a, b, c) {
                return function(d, e, f, g, h) {
                    return e = F(e[0], b, c),
                    a(d, e, f, g, h)
                }
            }
            function H(a, e, g, h, j, k, l, m, n) {
                function o(a, b, c, d) {
                    a && (c && (a = G(a, c, d)), a.require = w.require, a.directiveName = y, (P === w || w.$$isolateScope) && (a = W(a, {
                        isolateScope: !0
                    })), l.push(a)),
                    b && (c && (b = G(b, c, d)), b.require = w.require, b.directiveName = y, (P === w || w.$$isolateScope) && (b = W(b, {
                        isolateScope: !0
                    })), m.push(b))
                }
                function p(a, b, c, d) {
                    var e, g = "data",
                    h = !1;
                    if (u(b)) {
                        for (;
                        "^" == (e = b.charAt(0)) || "?" == e;) b = b.substr(1),
                        "^" == e && (g = "inheritedData"),
                        h = h || "?" == e;
                        if (e = null, d && "data" === g && (e = d[b]), e = e || c[g]("$" + b + "Controller"), !e && !h) throw be("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", b, a);
                        return e
                    }
                    return Cd(b) && (e = [], f(b,
                    function(b) {
                        e.push(p(a, b, c, d))
                    })),
                    e
                }
                function s(a, b, h, j, k) {
                    function n(a, b) {
                        var d;
                        return arguments.length < 2 && (b = a, a = c),
                        Z && (d = z),
                        k(a, b, d)
                    }
                    var o, s, t, u, v, w, x, y, z = {};
                    if (o = e === h ? g: K(g, new X(sd(h), g.$attr)), s = o.$$element, P) {
                        var A = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
                        x = b.$new(!0),
                        !R || R !== P && R !== P.$$originalDirective ? s.data("$isolateScopeNoTemplate", x) : s.data("$isolateScope", x),
                        B(s, "ng-isolate-scope"),
                        f(P.scope,
                        function(a, c) {
                            var e, f, g, h, i = a.match(A) || [],
                            j = i[3] || c,
                            k = "?" == i[2],
                            l = i[1];
                            switch (x.$$isolateBindings[c] = l + j, l) {
                            case "@":
                                o.$observe(j,
                                function(a) {
                                    x[c] = a
                                }),
                                o.$$observers[j].$$scope = b,
                                o[j] && (x[c] = d(o[j])(b));
                                break;
                            case "=":
                                if (k && !o[j]) return;
                                f = q(o[j]),
                                h = f.literal ? L: function(a, b) {
                                    return a === b || a !== a && b !== b
                                },
                                g = f.assign ||
                                function() {
                                    throw e = x[c] = f(b),
                                    be("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", o[j], P.name)
                                },
                                e = x[c] = f(b),
                                x.$watch(function() {
                                    var a = f(b);
                                    return h(a, x[c]) || (h(a, e) ? g(b, a = x[c]) : x[c] = a),
                                    e = a
                                },
                                null, f.literal);
                                break;
                            case "&":
                                f = q(o[j]),
                                x[c] = function(a) {
                                    return f(b, a)
                                };
                                break;
                            default:
                                throw be("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", P.name, c, a)
                            }
                        })
                    }
                    for (y = k && n, J && f(J,
                    function(a) {
                        var c, d = {
                            $scope: a === P || a.$$isolateScope ? x: b,
                            $element: s,
                            $attrs: o,
                            $transclude: y
                        };
                        w = a.controller,
                        "@" == w && (w = o[a.name]),
                        c = r(w, d),
                        z[a.name] = c,
                        Z || s.data("$" + a.name + "Controller", c),
                        a.controllerAs && (d.$scope[a.controllerAs] = c)
                    }), t = 0, u = l.length; u > t; t++) try {
                        v = l[t],
                        v(v.isolateScope ? x: b, s, o, v.require && p(v.directiveName, v.require, s, z), y)
                    } catch(C) {
                        i(C, T(s))
                    }
                    var D = b;
                    for (P && (P.template || null === P.templateUrl) && (D = x), a && a(D, h.childNodes, c, k), t = m.length - 1; t >= 0; t--) try {
                        v = m[t],
                        v(v.isolateScope ? x: b, s, o, v.require && p(v.directiveName, v.require, s, z), y)
                    } catch(C) {
                        i(C, T(s))
                    }
                }
                n = n || {};
                for (var v, w, y, z, C, D, H = -Number.MAX_VALUE,
                J = n.controllerDirectives,
                P = n.newIsolateScopeDirective,
                R = n.templateDirective,
                S = n.nonTlbTranscludeDirective,
                U = !1,
                Y = !1,
                Z = n.hasElementTranscludeDirective,
                _ = g.$$element = sd(e), ab = k, bb = h, cb = 0, db = a.length; db > cb; cb++) {
                    w = a[cb];
                    var eb = w.$$start,
                    fb = w.$$end;
                    if (eb && (_ = F(e, eb, fb)), z = c, H > w.priority) break;
                    if ((D = w.scope) && (v = v || w, w.templateUrl || (Q("new/isolated scope", P, w, _), t(D) && (P = w))), y = w.name, !w.templateUrl && w.controller && (D = w.controller, J = J || {},
                    Q("'" + y + "' controller", J[y], w, _), J[y] = w), (D = w.transclude) && (U = !0, w.$$tlb || (Q("transclusion", S, w, _), S = w), "element" == D ? (Z = !0, H = w.priority, z = _, _ = g.$$element = sd(b.createComment(" " + y + ": " + g[y] + " ")), e = _[0], V(j, N(z), e), bb = A(z, h, H, ab && ab.name, {
                        nonTlbTranscludeDirective: S
                    })) : (z = sd(pb(e)).contents(), _.empty(), bb = A(z, h))), w.template) if (Y = !0, Q("template", R, w, _), R = w, D = x(w.template) ? w.template(_, g) : w.template, D = $(D), w.replace) {
                        if (ab = w, z = lb(D) ? [] : sd(Dd(D)), e = z[0], 1 != z.length || 1 !== e.nodeType) throw be("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", y, "");
                        V(j, _, e);
                        var gb = {
                            $attr: {}
                        },
                        hb = E(e, [], gb),
                        ib = a.splice(cb + 1, a.length - (cb + 1));
                        P && I(hb),
                        a = a.concat(hb).concat(ib),
                        M(g, gb),
                        db = a.length
                    } else _.html(D);
                    if (w.templateUrl) Y = !0,
                    Q("template", R, w, _),
                    R = w,
                    w.replace && (ab = w),
                    s = O(a.splice(cb, a.length - cb), _, g, j, U && bb, l, m, {
                        controllerDirectives: J,
                        newIsolateScopeDirective: P,
                        templateDirective: R,
                        nonTlbTranscludeDirective: S
                    }),
                    db = a.length;
                    else if (w.compile) try {
                        C = w.compile(_, g, bb),
                        x(C) ? o(null, C, eb, fb) : C && o(C.pre, C.post, eb, fb)
                    } catch(jb) {
                        i(jb, T(_))
                    }
                    w.terminal && (s.terminal = !0, H = Math.max(H, w.priority))
                }
                return s.scope = v && v.scope === !0,
                s.transcludeOnThisElement = U,
                s.templateOnThisElement = Y,
                s.transclude = bb,
                n.hasElementTranscludeDirective = Z,
                s
            }
            function I(a) {
                for (var b = 0,
                c = a.length; c > b; b++) a[b] = n(a[b], {
                    $$isolateScope: !0
                })
            }
            function J(b, d, f, h, j, k, l) {
                if (d === j) return null;
                var m = null;
                if (e.hasOwnProperty(d)) for (var o, p = a.get(d + g), q = 0, r = p.length; r > q; q++) try {
                    o = p[q],
                    (h === c || h > o.priority) && -1 != o.restrict.indexOf(f) && (k && (o = n(o, {
                        $$start: k,
                        $$end: l
                    })), b.push(o), m = o)
                } catch(s) {
                    i(s)
                }
                return m
            }
            function M(a, b) {
                var c = b.$attr,
                d = a.$attr,
                e = a.$$element;
                f(a,
                function(d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";": " ") + b[e]), a.$set(e, d, !0, c[e]))
                }),
                f(b,
                function(b, f) {
                    "class" == f ? (B(e, b), a["class"] = (a["class"] ? a["class"] + " ": "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";": "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                })
            }
            function O(a, b, c, d, e, g, h, i) {
                var j, k, n = [],
                p = b[0],
                q = a.shift(),
                r = l({},
                q, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: q
                }),
                s = x(q.templateUrl) ? q.templateUrl(b, c) : q.templateUrl;
                return b.empty(),
                m.get(w.getTrustedResourceUrl(s), {
                    cache: o
                }).success(function(l) {
                    var m, o, u, v;
                    if (l = $(l), q.replace) {
                        if (u = lb(l) ? [] : sd(Dd(l)), m = u[0], 1 != u.length || 1 !== m.nodeType) throw be("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", q.name, s);
                        o = {
                            $attr: {}
                        },
                        V(d, b, m);
                        var w = E(m, [], o);
                        t(q.scope) && I(w),
                        a = w.concat(a),
                        M(c, o)
                    } else m = p,
                    b.html(l);
                    for (a.unshift(r), j = H(a, m, c, e, b, q, g, h, i), f(d,
                    function(a, c) {
                        a == m && (d[c] = b[0])
                    }), k = C(b[0].childNodes, e); n.length;) {
                        var x = n.shift(),
                        y = n.shift(),
                        z = n.shift(),
                        A = n.shift(),
                        F = b[0];
                        if (y !== p) {
                            var G = y.className;
                            i.hasElementTranscludeDirective && q.replace || (F = pb(m)),
                            V(z, sd(y), F),
                            B(sd(F), G)
                        }
                        v = j.transcludeOnThisElement ? D(x, j.transclude, A) : A,
                        j(k, x, F, d, v)
                    }
                    n = null
                }).error(function(a, b, c, d) {
                    throw be("tpload", "Failed to load template: {0}", d.url)
                }),
                function(a, b, c, d, e) {
                    var f = e;
                    n ? (n.push(b), n.push(c), n.push(d), n.push(f)) : (j.transcludeOnThisElement && (f = D(b, j.transclude, e)), j(k, b, c, d, f))
                }
            }
            function P(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c: a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
            }
            function Q(a, b, c, d) {
                if (b) throw be("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", b.name, c.name, a, T(d))
            }
            function R(a, b) {
                var c = d(b, !0);
                c && a.push({
                    priority: 0,
                    compile: function(a) {
                        var b = a.parent(),
                        d = b.length;
                        return d && B(a.parent(), "ng-binding"),
                        function(a, b) {
                            var e = b.parent(),
                            f = e.data("$binding") || [];
                            f.push(c),
                            e.data("$binding", f),
                            d || B(e, "ng-binding"),
                            a.$watch(c,
                            function(a) {
                                b[0].nodeValue = a
                            })
                        }
                    }
                })
            }
            function S(a, b) {
                if ("srcdoc" == b) return w.HTML;
                var c = vd(a);
                return "xlinkHref" == b || "FORM" == c && "action" == b || "IMG" != c && ("src" == b || "ngSrc" == b) ? w.RESOURCE_URL: void 0
            }
            function U(a, b, c, e) {
                var f = d(c, !0);
                if (f) {
                    if ("multiple" === e && "SELECT" === vd(a)) throw be("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", T(a));
                    b.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(b, c, g) {
                                    var h = g.$$observers || (g.$$observers = {});
                                    if (k.test(e)) throw be("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                    f = d(g[e], !0, S(a, e)),
                                    f && (g[e] = f(b), (h[e] || (h[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope || b).$watch(f,
                                    function(a, b) {
                                        "class" === e && a != b ? g.$updateClass(a, b) : g.$set(e, a)
                                    }))
                                }
                            }
                        }
                    })
                }
            }
            function V(a, c, d) {
                var e, f, g = c[0],
                h = c.length,
                i = g.parentNode;
                if (a) for (e = 0, f = a.length; f > e; e++) if (a[e] == g) {
                    a[e++] = d;
                    for (var j = e,
                    k = j + h - 1,
                    l = a.length; l > j; j++, k++) l > k ? a[j] = a[k] : delete a[j];
                    a.length -= h - 1;
                    break
                }
                i && i.replaceChild(d, g);
                var m = b.createDocumentFragment();
                m.appendChild(g),
                d[sd.expando] = g[sd.expando];
                for (var n = 1,
                o = c.length; o > n; n++) {
                    var p = c[n];
                    sd(p).remove(),
                    m.appendChild(p),
                    delete c[n]
                }
                c[0] = d,
                c.length = 1
            }
            function W(a, b) {
                return l(function() {
                    return a.apply(null, arguments)
                },
                a, b)
            }
            var X = function(a, b) {
                this.$$element = a,
                this.$attr = b || {}
            };
            X.prototype = {
                $normalize: Pb,
                $addClass: function(a) {
                    a && a.length > 0 && y.addClass(this.$$element, a)
                },
                $removeClass: function(a) {
                    a && a.length > 0 && y.removeClass(this.$$element, a)
                },
                $updateClass: function(a, b) {
                    var c = Qb(a, b),
                    d = Qb(b, a);
                    0 === c.length ? y.removeClass(this.$$element, d) : 0 === d.length ? y.addClass(this.$$element, c) : y.setClass(this.$$element, c, d)
                },
                $set: function(a, b, d, e) {
                    var g, h = Cb(this.$$element[0], a);
                    h && (this.$$element.prop(a, b), e = h),
                    this[a] = b,
                    e ? this.$attr[a] = e: (e = this.$attr[a], e || (this.$attr[a] = e = _(a, "-"))),
                    g = vd(this.$$element),
                    ("A" === g && "href" === a || "IMG" === g && "src" === a) && (this[a] = b = z(b, "src" === a)),
                    d !== !1 && (null === b || b === c ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
                    var j = this.$$observers;
                    j && f(j[a],
                    function(a) {
                        try {
                            a(b)
                        } catch(c) {
                            i(c)
                        }
                    })
                },
                $observe: function(a, b) {
                    var c = this,
                    d = c.$$observers || (c.$$observers = {}),
                    e = d[a] || (d[a] = []);
                    return e.push(b),
                    s.$evalAsync(function() {
                        e.$$inter || b(c[a])
                    }),
                    b
                }
            };
            var Y = d.startSymbol(),
            Z = d.endSymbol(),
            $ = "{{" == Y || "}}" == Z ? p: function(a) {
                return a.replace(/\{\{/g, Y).replace(/}}/g, Z)
            },
            ab = /^ngAttr[A-Z]/;
            return A
        }]
    }
    function Pb(a) {
        return jb(a.replace(ce, ""))
    }
    function Qb(a, b) {
        var c = "",
        d = a.split(/\s+/),
        e = b.split(/\s+/);
        a: for (var f = 0; f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++) if (g == e[h]) continue a;
            c += (c.length > 0 ? " ": "") + g
        }
        return c
    }
    function Rb() {
        var a = {},
        b = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(b, c) {
            db(b, "controller"),
            t(b) ? l(a, b) : a[b] = c
        },
        this.$get = ["$injector", "$window",
        function(c, e) {
            return function(f, g) {
                var h, i, j, k;
                if (u(f) && (i = f.match(b), j = i[1], k = i[3], f = a.hasOwnProperty(j) ? a[j] : eb(g.$scope, j, !0) || eb(e, j, !0), cb(f, j, !0)), h = c.instantiate(f, g), k) {
                    if (!g || "object" != typeof g.$scope) throw d("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", j || f.name, k);
                    g.$scope[k] = h
                }
                return h
            }
        }]
    }
    function Sb() {
        this.$get = ["$window",
        function(a) {
            return sd(a.document)
        }]
    }
    function Tb() {
        this.$get = ["$log",
        function(a) {
            return function() {
                a.error.apply(a, arguments)
            }
        }]
    }
    function Ub(a) {
        var b, c, d, e = {};
        return a ? (f(a.split("\n"),
        function(a) {
            d = a.indexOf(":"),
            b = md(Dd(a.substr(0, d))),
            c = Dd(a.substr(d + 1)),
            b && (e[b] = e[b] ? e[b] + ", " + c: c)
        }), e) : e
    }
    function Vb(a) {
        var b = t(a) ? a: c;
        return function(c) {
            return b || (b = Ub(a)),
            c ? b[md(c)] || null: b
        }
    }
    function Wb(a, b, c) {
        return x(c) ? c(a, b) : (f(c,
        function(c) {
            a = c(a, b)
        }), a)
    }
    function Xb(a) {
        return a >= 200 && 300 > a
    }
    function Yb() {
        var a = /^\s*(\[|\{[^\{])/,
        b = /[\}\]]\s*$/,
        d = /^\)\]\}',?\n/,
        e = {
            "Content-Type": "application/json;charset=utf-8"
        },
        g = this.defaults = {
            transformResponse: [function(c) {
                return u(c) && (c = c.replace(d, ""), a.test(c) && b.test(c) && (c = R(c))),
                c
            }],
            transformRequest: [function(a) {
                return ! t(a) || B(a) || C(a) ? a: Q(a)
            }],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: K(e),
                put: K(e),
                patch: K(e)
            },
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN"
        },
        i = this.interceptors = [],
        j = this.responseInterceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector",
        function(a, b, d, e, k, m) {
            function n(a) {
                function b(a) {
                    var b = l({},
                    a, {
                        data: Wb(a.data, a.headers, e.transformResponse)
                    });
                    return Xb(a.status) ? b: k.reject(b)
                }
                function d(a) {
                    function b(a) {
                        var b;
                        f(a,
                        function(c, d) {
                            x(c) && (b = c(), null != b ? a[d] = b: delete a[d])
                        })
                    }
                    var c, d, e, h = g.headers,
                    i = l({},
                    a.headers);
                    h = l({},
                    h.common, h[md(a.method)]);
                    a: for (c in h) {
                        d = md(c);
                        for (e in i) if (md(e) === d) continue a;
                        i[c] = h[c]
                    }
                    return b(i),
                    i
                }
                var e = {
                    method: "get",
                    transformRequest: g.transformRequest,
                    transformResponse: g.transformResponse
                },
                h = d(a);
                l(e, a),
                e.headers = h,
                e.method = od(e.method);
                var i = function(a) {
                    h = a.headers;
                    var c = Wb(a.data, Vb(h), a.transformRequest);
                    return r(c) && f(h,
                    function(a, b) {
                        "content-type" === md(b) && delete h[b]
                    }),
                    r(a.withCredentials) && !r(g.withCredentials) && (a.withCredentials = g.withCredentials),
                    q(a, c, h).then(b, b)
                },
                j = [i, c],
                m = k.when(e);
                for (f(z,
                function(a) { (a.request || a.requestError) && j.unshift(a.request, a.requestError),
                    (a.response || a.responseError) && j.push(a.response, a.responseError)
                }); j.length;) {
                    var n = j.shift(),
                    o = j.shift();
                    m = m.then(n, o)
                }
                return m.success = function(a) {
                    return m.then(function(b) {
                        a(b.data, b.status, b.headers, e)
                    }),
                    m
                },
                m.error = function(a) {
                    return m.then(null,
                    function(b) {
                        a(b.data, b.status, b.headers, e)
                    }),
                    m
                },
                m
            }
            function o() {
                f(arguments,
                function(a) {
                    n[a] = function(b, c) {
                        return n(l(c || {},
                        {
                            method: a,
                            url: b
                        }))
                    }
                })
            }
            function p() {
                f(arguments,
                function(a) {
                    n[a] = function(b, c, d) {
                        return n(l(d || {},
                        {
                            method: a,
                            url: b,
                            data: c
                        }))
                    }
                })
            }
            function q(d, f, h) {
                function i(a, b, c, d) {
                    m && (Xb(a) ? m.put(u, [a, b, Ub(c), d]) : m.remove(u)),
                    j(b, a, c, d),
                    e.$$phase || e.$apply()
                }
                function j(a, b, c, e) {
                    b = Math.max(b, 0),
                    (Xb(b) ? p.resolve: p.reject)({
                        data: a,
                        status: b,
                        headers: Vb(c),
                        config: d,
                        statusText: e
                    })
                }
                function l() {
                    var a = H(n.pendingRequests, d); - 1 !== a && n.pendingRequests.splice(a, 1)
                }
                var m, o, p = k.defer(),
                q = p.promise,
                u = v(d.url, d.params);
                if (n.pendingRequests.push(d), q.then(l, l), !d.cache && !g.cache || d.cache === !1 || "GET" !== d.method && "JSONP" !== d.method || (m = t(d.cache) ? d.cache: t(g.cache) ? g.cache: y), m) if (o = m.get(u), s(o)) {
                    if (D(o)) return o.then(l, l),
                    o;
                    Cd(o) ? j(o[1], o[0], K(o[2]), o[3]) : j(o, 200, {},
                    "OK")
                } else m.put(u, q);
                if (r(o)) {
                    var w = Lc(d.url) ? b.cookies()[d.xsrfCookieName || g.xsrfCookieName] : c;
                    w && (h[d.xsrfHeaderName || g.xsrfHeaderName] = w),
                    a(d.method, u, f, i, h, d.timeout, d.withCredentials, d.responseType)
                }
                return q
            }
            function v(a, b) {
                if (!b) return a;
                var c = [];
                return h(b,
                function(a, b) {
                    null === a || r(a) || (Cd(a) || (a = [a]), f(a,
                    function(a) {
                        t(a) && (a = w(a) ? a.toISOString() : Q(a)),
                        c.push(Y(b) + "=" + Y(a))
                    }))
                }),
                c.length > 0 && (a += ( - 1 == a.indexOf("?") ? "?": "&") + c.join("&")),
                a
            }
            var y = d("$http"),
            z = [];
            return f(i,
            function(a) {
                z.unshift(u(a) ? m.get(a) : m.invoke(a))
            }),
            f(j,
            function(a, b) {
                var c = u(a) ? m.get(a) : m.invoke(a);
                z.splice(b, 0, {
                    response: function(a) {
                        return c(k.when(a))
                    },
                    responseError: function(a) {
                        return c(k.reject(a))
                    }
                })
            }),
            n.pendingRequests = [],
            o("get", "delete", "head", "jsonp"),
            p("post", "put"),
            n.defaults = g,
            n
        }]
    }
    function Zb(b) {
        if (8 >= rd && (!b.match(/^(get|post|head|put|delete|options)$/i) || !a.XMLHttpRequest)) return new a.ActiveXObject("Microsoft.XMLHTTP");
        if (a.XMLHttpRequest) return new a.XMLHttpRequest;
        throw d("$httpBackend")("noxhr", "This browser does not support XMLHttpRequest.")
    }
    function $b() {
        this.$get = ["$browser", "$window", "$document",
        function(a, b, c) {
            return _b(a, Zb, a.defer, b.angular.callbacks, c[0])
        }]
    }
    function _b(a, b, c, d, e) {
        function g(a, b, c) {
            var f = e.createElement("script"),
            g = null;
            return f.type = "text/javascript",
            f.src = a,
            f.async = !0,
            g = function(a) {
                Kd(f, "load", g),
                Kd(f, "error", g),
                e.body.removeChild(f),
                f = null;
                var h = -1,
                i = "unknown";
                a && ("load" !== a.type || d[b].called || (a = {
                    type: "error"
                }), i = a.type, h = "error" === a.type ? 404 : 200),
                c && c(h, i)
            },
            Jd(f, "load", g),
            Jd(f, "error", g),
            8 >= rd && (f.onreadystatechange = function() {
                u(f.readyState) && /loaded|complete/.test(f.readyState) && (f.onreadystatechange = null, g({
                    type: "load"
                }))
            }),
            e.body.appendChild(f),
            g
        }
        var h = -1;
        return function(e, i, j, k, l, m, n, p) {
            function q() {
                t = h,
                v && v(),
                w && w.abort()
            }
            function r(b, d, e, f, g) {
                y && c.cancel(y),
                v = w = null,
                0 === d && (d = e ? 200 : "file" == Kc(i).protocol ? 404 : 0),
                d = 1223 === d ? 204 : d,
                g = g || "",
                b(d, e, f, g),
                a.$$completeOutstandingRequest(o)
            }
            var t;
            if (a.$$incOutstandingRequestCount(), i = i || a.url(), "jsonp" == md(e)) {
                var u = "_" + (d.counter++).toString(36);
                d[u] = function(a) {
                    d[u].data = a,
                    d[u].called = !0
                };
                var v = g(i.replace("JSON_CALLBACK", "angular.callbacks." + u), u,
                function(a, b) {
                    r(k, a, d[u].data, "", b),
                    d[u] = o
                })
            } else {
                var w = b(e);
                if (w.open(e, i, !0), f(l,
                function(a, b) {
                    s(a) && w.setRequestHeader(b, a)
                }), w.onreadystatechange = function() {
                    if (w && 4 == w.readyState) {
                        var a = null,
                        b = null,
                        c = "";
                        t !== h && (a = w.getAllResponseHeaders(), b = "response" in w ? w.response: w.responseText),
                        t === h && 10 > rd || (c = w.statusText),
                        r(k, t || w.status, b, a, c)
                    }
                },
                n && (w.withCredentials = !0), p) try {
                    w.responseType = p
                } catch(x) {
                    if ("json" !== p) throw x
                }
                w.send(j || null)
            }
            if (m > 0) var y = c(q, m);
            else D(m) && m.then(q)
        }
    }
    function ac() {
        var a = "{{",
        b = "}}";
        this.startSymbol = function(b) {
            return b ? (a = b, this) : a
        },
        this.endSymbol = function(a) {
            return a ? (b = a, this) : b
        },
        this.$get = ["$parse", "$exceptionHandler", "$sce",
        function(c, d, e) {
            function f(f, i, j) {
                for (var k, l, m, n, o = 0,
                p = [], q = f.length, r = !1, s = []; q > o;) - 1 != (k = f.indexOf(a, o)) && -1 != (l = f.indexOf(b, k + g)) ? (o != k && p.push(f.substring(o, k)), p.push(m = c(n = f.substring(k + g, l))), m.exp = n, o = l + h, r = !0) : (o != q && p.push(f.substring(o)), o = q);
                if ((q = p.length) || (p.push(""), q = 1), j && p.length > 1) throw de("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", f);
                return ! i || r ? (s.length = q, m = function(a) {
                    try {
                        for (var b, c = 0,
                        g = q; g > c; c++) {
                            if ("function" == typeof(b = p[c])) if (b = b(a), b = j ? e.getTrusted(j, b) : e.valueOf(b), null == b) b = "";
                            else switch (typeof b) {
                            case "string":
                                break;
                            case "number":
                                b = "" + b;
                                break;
                            default:
                                b = Q(b)
                            }
                            s[c] = b
                        }
                        return s.join("")
                    } catch(h) {
                        var i = de("interr", "Can't interpolate: {0}\n{1}", f, h.toString());
                        d(i)
                    }
                },
                m.exp = f, m.parts = p, m) : void 0
            }
            var g = a.length,
            h = b.length;
            return f.startSymbol = function() {
                return a
            },
            f.endSymbol = function() {
                return b
            },
            f
        }]
    }
    function bc() {
        this.$get = ["$rootScope", "$window", "$q",
        function(a, b, c) {
            function d(d, f, g, h) {
                var i = b.setInterval,
                j = b.clearInterval,
                k = c.defer(),
                l = k.promise,
                m = 0,
                n = s(h) && !h;
                return g = s(g) ? g: 0,
                l.then(null, null, d),
                l.$$intervalId = i(function() {
                    k.notify(m++),
                    g > 0 && m >= g && (k.resolve(m), j(l.$$intervalId), delete e[l.$$intervalId]),
                    n || a.$apply()
                },
                f),
                e[l.$$intervalId] = k,
                l
            }
            var e = {};
            return d.cancel = function(a) {
                return a && a.$$intervalId in e ? (e[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete e[a.$$intervalId], !0) : !1
            },
            d
        }]
    }
    function cc() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    },
                    {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                    SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                    DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                    SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(a) {
                    return 1 === a ? "one": "other"
                }
            }
        }
    }
    function dc(a) {
        for (var b = a.split("/"), c = b.length; c--;) b[c] = X(b[c]);
        return b.join("/")
    }
    function ec(a, b, c) {
        var d = Kc(a, c);
        b.$$protocol = d.protocol,
        b.$$host = d.hostname,
        b.$$port = m(d.port) || fe[d.protocol] || null
    }
    function fc(a, b, c) {
        var d = "/" !== a.charAt(0);
        d && (a = "/" + a);
        var e = Kc(a, c);
        b.$$path = decodeURIComponent(d && "/" === e.pathname.charAt(0) ? e.pathname.substring(1) : e.pathname),
        b.$$search = V(e.search),
        b.$$hash = decodeURIComponent(e.hash),
        b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
    }
    function gc(a, b) {
        return 0 === b.indexOf(a) ? b.substr(a.length) : void 0
    }
    function hc(a) {
        var b = a.indexOf("#");
        return - 1 == b ? a: a.substr(0, b)
    }
    function ic(a) {
        return a.substr(0, hc(a).lastIndexOf("/") + 1)
    }
    function jc(a) {
        return a.substring(0, a.indexOf("/", a.indexOf("//") + 2))
    }
    function kc(a, b) {
        this.$$html5 = !0,
        b = b || "";
        var d = ic(a);
        ec(a, this, a),
        this.$$parse = function(b) {
            var c = gc(d, b);
            if (!u(c)) throw ge("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', b, d);
            fc(c, this, a),
            this.$$path || (this.$$path = "/"),
            this.$$compose()
        },
        this.$$compose = function() {
            var a = W(this.$$search),
            b = this.$$hash ? "#" + X(this.$$hash) : "";
            this.$$url = dc(this.$$path) + (a ? "?" + a: "") + b,
            this.$$absUrl = d + this.$$url.substr(1)
        },
        this.$$rewrite = function(e) {
            var f, g;
            return (f = gc(a, e)) !== c ? (g = f, (f = gc(b, f)) !== c ? d + (gc("/", f) || f) : a + g) : (f = gc(d, e)) !== c ? d + f: d == e + "/" ? d: void 0
        }
    }
    function lc(a, b) {
        var c = ic(a);
        ec(a, this, a),
        this.$$parse = function(d) {
            function e(a, b, c) {
                var d, e = /^\/[A-Z]:(\/.*)/;
                return 0 === b.indexOf(c) && (b = b.replace(c, "")),
                e.exec(b) ? a: (d = e.exec(a), d ? d[1] : a)
            }
            var f = gc(a, d) || gc(c, d),
            g = "#" == f.charAt(0) ? gc(b, f) : this.$$html5 ? f: "";
            if (!u(g)) throw ge("ihshprfx", 'Invalid url "{0}", missing hash prefix "{1}".', d, b);
            fc(g, this, a),
            this.$$path = e(this.$$path, g, a),
            this.$$compose()
        },
        this.$$compose = function() {
            var c = W(this.$$search),
            d = this.$$hash ? "#" + X(this.$$hash) : "";
            this.$$url = dc(this.$$path) + (c ? "?" + c: "") + d,
            this.$$absUrl = a + (this.$$url ? b + this.$$url: "")
        },
        this.$$rewrite = function(b) {
            return hc(a) == hc(b) ? b: void 0
        }
    }
    function mc(a, b) {
        this.$$html5 = !0,
        lc.apply(this, arguments);
        var c = ic(a);
        this.$$rewrite = function(d) {
            var e;
            return a == hc(d) ? d: (e = gc(c, d)) ? a + b + e: c === d + "/" ? c: void 0
        },
        this.$$compose = function() {
            var c = W(this.$$search),
            d = this.$$hash ? "#" + X(this.$$hash) : "";
            this.$$url = dc(this.$$path) + (c ? "?" + c: "") + d,
            this.$$absUrl = a + b + this.$$url
        }
    }
    function nc(a) {
        return function() {
            return this[a]
        }
    }
    function oc(a, b) {
        return function(c) {
            return r(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
        }
    }
    function pc() {
        var b = "",
        c = !1;
        this.hashPrefix = function(a) {
            return s(a) ? (b = a, this) : b
        },
        this.html5Mode = function(a) {
            return s(a) ? (c = a, this) : c
        },
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement",
        function(d, e, f, g) {
            function h(a) {
                d.$broadcast("$locationChangeSuccess", i.absUrl(), a)
            }
            var i, j, k, l = e.baseHref(),
            m = e.url();
            c ? (k = jc(m) + (l || "/"), j = f.history ? kc: mc) : (k = hc(m), j = lc),
            i = new j(k, "#" + b),
            i.$$parse(i.$$rewrite(m));
            var n = /^\s*(javascript|mailto):/i;
            g.on("click",
            function(c) {
                if (!c.ctrlKey && !c.metaKey && 2 != c.which) {
                    for (var f = sd(c.target);
                    "a" !== md(f[0].nodeName);) if (f[0] === g[0] || !(f = f.parent())[0]) return;
                    var h = f.prop("href");
                    if (t(h) && "[object SVGAnimatedString]" === h.toString() && (h = Kc(h.animVal).href), !n.test(h)) {
                        if (j === mc) {
                            var l = f.attr("href") || f.attr("xlink:href");
                            if (l && l.indexOf("://") < 0) {
                                var m = "#" + b;
                                if ("/" == l[0]) h = k + m + l;
                                else if ("#" == l[0]) h = k + m + (i.path() || "/") + l;
                                else {
                                    var o = i.path().split("/"),
                                    p = l.split("/");
                                    2 !== o.length || o[1] || (o.length = 1);
                                    for (var q = 0; q < p.length; q++)"." != p[q] && (".." == p[q] ? o.pop() : p[q].length && o.push(p[q]));
                                    h = k + m + o.join("/")
                                }
                            }
                        }
                        var r = i.$$rewrite(h);
                        h && !f.attr("target") && r && !c.isDefaultPrevented() && (c.preventDefault(), r != e.url() && (i.$$parse(r), d.$apply(), a.angular["ff-684208-preventDefault"] = !0))
                    }
                }
            }),
            i.absUrl() != m && e.url(i.absUrl(), !0),
            e.onUrlChange(function(a) {
                i.absUrl() != a && (d.$evalAsync(function() {
                    var b = i.absUrl();
                    i.$$parse(a),
                    d.$broadcast("$locationChangeStart", a, b).defaultPrevented ? (i.$$parse(b), e.url(b)) : h(b)
                }), d.$$phase || d.$digest())
            });
            var o = 0;
            return d.$watch(function() {
                var a = e.url(),
                b = i.$$replace;
                return o && a == i.absUrl() || (o++, d.$evalAsync(function() {
                    d.$broadcast("$locationChangeStart", i.absUrl(), a).defaultPrevented ? i.$$parse(a) : (e.url(i.absUrl(), b), h(a))
                })),
                i.$$replace = !1,
                o
            }),
            i
        }]
    }
    function qc() {
        var a = !0,
        b = this;
        this.debugEnabled = function(b) {
            return s(b) ? (a = b, this) : a
        },
        this.$get = ["$window",
        function(c) {
            function d(a) {
                return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack: a.stack: a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)),
                a
            }
            function e(a) {
                var b = c.console || {},
                e = b[a] || b.log || o,
                g = !1;
                try {
                    g = !!e.apply
                } catch(h) {}
                return g ?
                function() {
                    var a = [];
                    return f(arguments,
                    function(b) {
                        a.push(d(b))
                    }),
                    e.apply(b, a)
                }: function(a, b) {
                    e(a, null == b ? "": b)
                }
            }
            return {
                log: e("log"),
                info: e("info"),
                warn: e("warn"),
                error: e("error"),
                debug: function() {
                    var c = e("debug");
                    return function() {
                        a && c.apply(b, arguments)
                    }
                } ()
            }
        }]
    }
    function rc(a, b) {
        if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw ie("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", b);
        return a
    }
    function sc(a, b) {
        if (a) {
            if (a.constructor === a) throw ie("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
            if (a.document && a.location && a.alert && a.setInterval) throw ie("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
            if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw ie("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b);
            if (a === Object) throw ie("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", b)
        }
        return a
    }
    function tc(a, b) {
        if (a) {
            if (a.constructor === a) throw ie("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
            if (a === ke || a === le || me && a === me) throw ie("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", b)
        }
    }
    function uc(a, b, d, e, f) {
        sc(a, e),
        f = f || {};
        for (var g, h = b.split("."), i = 0; h.length > 1; i++) {
            g = rc(h.shift(), e);
            var j = sc(a[g], e);
            j || (j = {},
            a[g] = j),
            a = j,
            a.then && f.unwrapPromises && (he(e), "$$v" in a || !
            function(a) {
                a.then(function(b) {
                    a.$$v = b
                })
            } (a), a.$$v === c && (a.$$v = {}), a = a.$$v)
        }
        return g = rc(h.shift(), e),
        sc(a[g], e),
        a[g] = d,
        d
    }
    function vc(a, b, d, e, f, g, h) {
        return rc(a, g),
        rc(b, g),
        rc(d, g),
        rc(e, g),
        rc(f, g),
        h.unwrapPromises ?
        function(h, i) {
            var j, k = i && i.hasOwnProperty(a) ? i: h;
            return null == k ? k: (k = k[a], k && k.then && (he(g), "$$v" in k || (j = k, j.$$v = c, j.then(function(a) {
                j.$$v = a
            })), k = k.$$v), b ? null == k ? c: (k = k[b], k && k.then && (he(g), "$$v" in k || (j = k, j.$$v = c, j.then(function(a) {
                j.$$v = a
            })), k = k.$$v), d ? null == k ? c: (k = k[d], k && k.then && (he(g), "$$v" in k || (j = k, j.$$v = c, j.then(function(a) {
                j.$$v = a
            })), k = k.$$v), e ? null == k ? c: (k = k[e], k && k.then && (he(g), "$$v" in k || (j = k, j.$$v = c, j.then(function(a) {
                j.$$v = a
            })), k = k.$$v), f ? null == k ? c: (k = k[f], k && k.then && (he(g), "$$v" in k || (j = k, j.$$v = c, j.then(function(a) {
                j.$$v = a
            })), k = k.$$v), k) : k) : k) : k) : k)
        }: function(g, h) {
            var i = h && h.hasOwnProperty(a) ? h: g;
            return null == i ? i: (i = i[a], b ? null == i ? c: (i = i[b], d ? null == i ? c: (i = i[d], e ? null == i ? c: (i = i[e], f ? null == i ? c: i = i[f] : i) : i) : i) : i)
        }
    }
    function wc(a, b, d) {
        if (re.hasOwnProperty(a)) return re[a];
        var e, g = a.split("."),
        h = g.length;
        if (b.csp) e = 6 > h ? vc(g[0], g[1], g[2], g[3], g[4], d, b) : function(a, e) {
            var f, i = 0;
            do f = vc(g[i++], g[i++], g[i++], g[i++], g[i++], d, b)(a, e),
            e = c,
            a = f;
            while (h > i);
            return f
        };
        else {
            var i = "var p;\n";
            f(g,
            function(a, c) {
                rc(a, d),
                i += "if(s == null) return undefined;\ns=" + (c ? "s": '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"];\n' + (b.unwrapPromises ? 'if (s && s.then) {\n pw("' + d.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n': "")
            }),
            i += "return s;";
            var j = new Function("s", "k", "pw", i);
            j.toString = q(i),
            e = b.unwrapPromises ?
            function(a, b) {
                return j(a, b, he)
            }: j
        }
        return "hasOwnProperty" !== a && (re[a] = e),
        e
    }
    function xc() {
        var a = {},
        b = {
            csp: !1,
            unwrapPromises: !1,
            logPromiseWarnings: !0
        };
        this.unwrapPromises = function(a) {
            return s(a) ? (b.unwrapPromises = !!a, this) : b.unwrapPromises
        },
        this.logPromiseWarnings = function(a) {
            return s(a) ? (b.logPromiseWarnings = a, this) : b.logPromiseWarnings
        },
        this.$get = ["$filter", "$sniffer", "$log",
        function(c, d, e) {
            return b.csp = d.csp,
            he = function(a) {
                b.logPromiseWarnings && !je.hasOwnProperty(a) && (je[a] = !0, e.warn("[$parse] Promise found in the expression `" + a + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
            },
            function(d) {
                var e;
                switch (typeof d) {
                case "string":
                    if (a.hasOwnProperty(d)) return a[d];
                    var f = new pe(b),
                    g = new qe(f, c, b);
                    return e = g.parse(d),
                    "hasOwnProperty" !== d && (a[d] = e),
                    e;
                case "function":
                    return d;
                default:
                    return o
                }
            }
        }]
    }
    function yc() {
        this.$get = ["$rootScope", "$exceptionHandler",
        function(a, b) {
            return zc(function(b) {
                a.$evalAsync(b)
            },
            b)
        }]
    }
    function zc(a, b) {
        function d(a) {
            return a
        }
        function e(a) {
            return j(a)
        }
        function g(a) {
            var b = h(),
            c = 0,
            d = Cd(a) ? [] : {};
            return f(a,
            function(a, e) {
                c++,
                i(a).then(function(a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                },
                function(a) {
                    d.hasOwnProperty(e) || b.reject(a)
                })
            }),
            0 === c && b.resolve(d),
            b.promise
        }
        var h = function() {
            var f, g, j = [];
            return g = {
                resolve: function(b) {
                    if (j) {
                        var d = j;
                        j = c,
                        f = i(b),
                        d.length && a(function() {
                            for (var a, b = 0,
                            c = d.length; c > b; b++) a = d[b],
                            f.then(a[0], a[1], a[2])
                        })
                    }
                },
                reject: function(a) {
                    g.resolve(k(a))
                },
                notify: function(b) {
                    if (j) {
                        var c = j;
                        j.length && a(function() {
                            for (var a, d = 0,
                            e = c.length; e > d; d++) a = c[d],
                            a[2](b)
                        })
                    }
                },
                promise: {
                    then: function(a, c, g) {
                        var i = h(),
                        k = function(c) {
                            try {
                                i.resolve((x(a) ? a: d)(c))
                            } catch(e) {
                                i.reject(e),
                                b(e)
                            }
                        },
                        l = function(a) {
                            try {
                                i.resolve((x(c) ? c: e)(a))
                            } catch(d) {
                                i.reject(d),
                                b(d)
                            }
                        },
                        m = function(a) {
                            try {
                                i.notify((x(g) ? g: d)(a))
                            } catch(c) {
                                b(c)
                            }
                        };
                        return j ? j.push([k, l, m]) : f.then(k, l, m),
                        i.promise
                    },
                    "catch": function(a) {
                        return this.then(null, a)
                    },
                    "finally": function(a) {
                        function b(a, b) {
                            var c = h();
                            return b ? c.resolve(a) : c.reject(a),
                            c.promise
                        }
                        function c(c, e) {
                            var f = null;
                            try {
                                f = (a || d)()
                            } catch(g) {
                                return b(g, !1)
                            }
                            return D(f) ? f.then(function() {
                                return b(c, e)
                            },
                            function(a) {
                                return b(a, !1)
                            }) : b(c, e)
                        }
                        return this.then(function(a) {
                            return c(a, !0)
                        },
                        function(a) {
                            return c(a, !1)
                        })
                    }
                }
            }
        },
        i = function(b) {
            return D(b) ? b: {
                then: function(c) {
                    var d = h();
                    return a(function() {
                        d.resolve(c(b))
                    }),
                    d.promise
                }
            }
        },
        j = function(a) {
            var b = h();
            return b.reject(a),
            b.promise
        },
        k = function(c) {
            return {
                then: function(d, f) {
                    var g = h();
                    return a(function() {
                        try {
                            g.resolve((x(f) ? f: e)(c))
                        } catch(a) {
                            g.reject(a),
                            b(a)
                        }
                    }),
                    g.promise
                }
            }
        },
        l = function(c, f, g, k) {
            var l, m = h(),
            n = function(a) {
                try {
                    return (x(f) ? f: d)(a)
                } catch(c) {
                    return b(c),
                    j(c)
                }
            },
            o = function(a) {
                try {
                    return (x(g) ? g: e)(a)
                } catch(c) {
                    return b(c),
                    j(c)
                }
            },
            p = function(a) {
                try {
                    return (x(k) ? k: d)(a)
                } catch(c) {
                    b(c)
                }
            };
            return a(function() {
                i(c).then(function(a) {
                    l || (l = !0, m.resolve(i(a).then(n, o, p)))
                },
                function(a) {
                    l || (l = !0, m.resolve(o(a)))
                },
                function(a) {
                    l || m.notify(p(a))
                })
            }),
            m.promise
        };
        return {
            defer: h,
            reject: j,
            when: l,
            all: g
        }
    }
    function Ac() {
        this.$get = ["$window", "$timeout",
        function(a, b) {
            var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame,
            d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.mozCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
            e = !!c,
            f = e ?
            function(a) {
                var b = c(a);
                return function() {
                    d(b)
                }
            }: function(a) {
                var c = b(a, 16.66, !1);
                return function() {
                    b.cancel(c)
                }
            };
            return f.supported = e,
            f
        }]
    }
    function Bc() {
        var a = 10,
        b = d("$rootScope"),
        c = null;
        this.digestTtl = function(b) {
            return arguments.length && (a = b),
            a
        },
        this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser",
        function(d, g, h, i) {
            function k() {
                this.$id = j(),
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null,
                this["this"] = this.$root = this,
                this.$$destroyed = !1,
                this.$$asyncQueue = [],
                this.$$postDigestQueue = [],
                this.$$listeners = {},
                this.$$listenerCount = {},
                this.$$isolateBindings = {}
            }
            function l(a) {
                if (r.$$phase) throw b("inprog", "{0} already in progress", r.$$phase);
                r.$$phase = a
            }
            function m() {
                r.$$phase = null
            }
            function n(a, b) {
                var c = h(a);
                return cb(c, b),
                c
            }
            function p(a, b, c) {
                do a.$$listenerCount[c] -= b,
                0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
                while (a = a.$parent)
            }
            function q() {}
            k.prototype = {
                constructor: k,
                $new: function(a) {
                    var b;
                    return a ? (b = new k, b.$root = this.$root, b.$$asyncQueue = this.$$asyncQueue, b.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function() {
                        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null,
                        this.$$listeners = {},
                        this.$$listenerCount = {},
                        this.$id = j(),
                        this.$$childScopeClass = null
                    },
                    this.$$childScopeClass.prototype = this), b = new this.$$childScopeClass),
                    b["this"] = b,
                    b.$parent = this,
                    b.$$prevSibling = this.$$childTail,
                    this.$$childHead ? (this.$$childTail.$$nextSibling = b, this.$$childTail = b) : this.$$childHead = this.$$childTail = b,
                    b
                },
                $watch: function(a, b, d) {
                    var e = this,
                    f = n(a, "watch"),
                    g = e.$$watchers,
                    h = {
                        fn: b,
                        last: q,
                        get: f,
                        exp: a,
                        eq: !!d
                    };
                    if (c = null, !x(b)) {
                        var i = n(b || o, "listener");
                        h.fn = function(a, b, c) {
                            i(c)
                        }
                    }
                    if ("string" == typeof a && f.constant) {
                        var j = h.fn;
                        h.fn = function(a, b, c) {
                            j.call(this, a, b, c),
                            I(g, h)
                        }
                    }
                    return g || (g = e.$$watchers = []),
                    g.unshift(h),
                    function() {
                        I(g, h),
                        c = null
                    }
                },
                $watchCollection: function(a, b) {
                    function c() {
                        f = m(j);
                        var a, b, c;
                        if (t(f)) if (e(f)) {
                            g !== n && (g = n, q = g.length = 0, l++),
                            a = f.length,
                            q !== a && (l++, g.length = q = a);
                            for (var d = 0; a > d; d++) c = g[d] !== g[d] && f[d] !== f[d],
                            c || g[d] === f[d] || (l++, g[d] = f[d])
                        } else {
                            g !== o && (g = o = {},
                            q = 0, l++),
                            a = 0;
                            for (b in f) f.hasOwnProperty(b) && (a++, g.hasOwnProperty(b) ? (c = g[b] !== g[b] && f[b] !== f[b], c || g[b] === f[b] || (l++, g[b] = f[b])) : (q++, g[b] = f[b], l++));
                            if (q > a) {
                                l++;
                                for (b in g) g.hasOwnProperty(b) && !f.hasOwnProperty(b) && (q--, delete g[b])
                            }
                        } else g !== f && (g = f, l++);
                        return l
                    }
                    function d() {
                        if (p ? (p = !1, b(f, f, j)) : b(f, i, j), k) if (t(f)) if (e(f)) {
                            i = new Array(f.length);
                            for (var a = 0; a < f.length; a++) i[a] = f[a]
                        } else {
                            i = {};
                            for (var c in f) nd.call(f, c) && (i[c] = f[c])
                        } else i = f
                    }
                    var f, g, i, j = this,
                    k = b.length > 1,
                    l = 0,
                    m = h(a),
                    n = [],
                    o = {},
                    p = !0,
                    q = 0;
                    return this.$watch(c, d)
                },
                $digest: function() {
                    var d, e, f, h, j, k, n, o, p, r, s, t = this.$$asyncQueue,
                    u = this.$$postDigestQueue,
                    v = a,
                    w = this,
                    y = [];
                    l("$digest"),
                    i.$$checkUrlChange(),
                    c = null;
                    do {
                        for (k = !1, o = w; t.length;) {
                            try {
                                s = t.shift(),
                                s.scope.$eval(s.expression)
                            } catch(z) {
                                m(),
                                g(z)
                            }
                            c = null
                        }
                        a: do {
                            if (h = o.$$watchers) for (j = h.length; j--;) try {
                                if (d = h[j]) if ((e = d.get(o)) === (f = d.last) || (d.eq ? L(e, f) : "number" == typeof e && "number" == typeof f && isNaN(e) && isNaN(f))) {
                                    if (d === c) {
                                        k = !1;
                                        break a
                                    }
                                } else k = !0,
                                c = d,
                                d.last = d.eq ? J(e, null) : e,
                                d.fn(e, f === q ? e: f, o),
                                5 > v && (p = 4 - v, y[p] || (y[p] = []), r = x(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) : d.exp, r += "; newVal: " + Q(e) + "; oldVal: " + Q(f), y[p].push(r))
                            } catch(z) {
                                m(),
                                g(z)
                            }
                            if (! (n = o.$$childHead || o !== w && o.$$nextSibling)) for (; o !== w && !(n = o.$$nextSibling);) o = o.$parent
                        } while ( o = n );
                        if ((k || t.length) && !v--) throw m(), b("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", a, Q(y))
                    } while ( k || t . length );
                    for (m(); u.length;) try {
                        u.shift()()
                    } catch(z) {
                        g(z)
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy"),
                        this.$$destroyed = !0,
                        this !== r && (f(this.$$listenerCount, O(null, p, this)), a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {},
                        this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = o, this.$on = this.$watch = function() {
                            return o
                        })
                    }
                },
                $eval: function(a, b) {
                    return h(a)(this, b)
                },
                $evalAsync: function(a) {
                    r.$$phase || r.$$asyncQueue.length || i.defer(function() {
                        r.$$asyncQueue.length && r.$digest()
                    }),
                    this.$$asyncQueue.push({
                        scope: this,
                        expression: a
                    })
                },
                $$postDigest: function(a) {
                    this.$$postDigestQueue.push(a)
                },
                $apply: function(a) {
                    try {
                        return l("$apply"),
                        this.$eval(a)
                    } catch(b) {
                        g(b)
                    } finally {
                        m();
                        try {
                            r.$digest()
                        } catch(b) {
                            throw g(b),
                            b
                        }
                    }
                },
                $on: function(a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []),
                    c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0),
                    d.$$listenerCount[a]++;
                    while (d = d.$parent);
                    var e = this;
                    return function() {
                        c[H(c, b)] = null,
                        p(e, 1, a)
                    }
                },
                $emit: function(a) {
                    var b, c, d, e = [],
                    f = this,
                    h = !1,
                    i = {
                        name: a,
                        targetScope: f,
                        stopPropagation: function() {
                            h = !0
                        },
                        preventDefault: function() {
                            i.defaultPrevented = !0
                        },
                        defaultPrevented: !1
                    },
                    j = M([i], arguments, 1);
                    do {
                        for (b = f.$$listeners[a] || e, i.currentScope = f, c = 0, d = b.length; d > c; c++) if (b[c]) try {
                            b[c].apply(null, j)
                        } catch(k) {
                            g(k)
                        } else b.splice(c, 1), c--, d--;
                        if (h) return i;
                        f = f.$parent
                    } while ( f );
                    return i
                },
                $broadcast: function(a) {
                    for (var b, c, d, e = this,
                    f = e,
                    h = e,
                    i = {
                        name: a,
                        targetScope: e,
                        preventDefault: function() {
                            i.defaultPrevented = !0
                        },
                        defaultPrevented: !1
                    },
                    j = M([i], arguments, 1); f = h;) {
                        for (i.currentScope = f, b = f.$$listeners[a] || [], c = 0, d = b.length; d > c; c++) if (b[c]) try {
                            b[c].apply(null, j)
                        } catch(k) {
                            g(k)
                        } else b.splice(c, 1),
                        c--,
                        d--;
                        if (! (h = f.$$listenerCount[a] && f.$$childHead || f !== e && f.$$nextSibling)) for (; f !== e && !(h = f.$$nextSibling);) f = f.$parent
                    }
                    return i
                }
            };
            var r = new k;
            return r
        }]
    }
    function Cc() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/,
        b = /^\s*((https?|ftp|file):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(b) {
            return s(b) ? (a = b, this) : a
        },
        this.imgSrcSanitizationWhitelist = function(a) {
            return s(a) ? (b = a, this) : b
        },
        this.$get = function() {
            return function(c, d) {
                var e, f = d ? b: a;
                return rd && !(rd >= 8) || (e = Kc(c).href, "" === e || e.match(f)) ? c: "unsafe:" + e
            }
        }
    }
    function Dc(a) {
        return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }
    function Ec(a) {
        if ("self" === a) return a;
        if (u(a)) {
            if (a.indexOf("***") > -1) throw se("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
            return a = Dc(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"),
            new RegExp("^" + a + "$")
        }
        if (y(a)) return new RegExp("^" + a.source + "$");
        throw se("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
    }
    function Fc(a) {
        var b = [];
        return s(a) && f(a,
        function(a) {
            b.push(Ec(a))
        }),
        b
    }
    function Gc() {
        this.SCE_CONTEXTS = te;
        var a = ["self"],
        b = [];
        this.resourceUrlWhitelist = function(b) {
            return arguments.length && (a = Fc(b)),
            a
        },
        this.resourceUrlBlacklist = function(a) {
            return arguments.length && (b = Fc(a)),
            b
        },
        this.$get = ["$injector",
        function(d) {
            function e(a, b) {
                return "self" === a ? Lc(b) : !!a.exec(b.href)
            }
            function f(c) {
                var d, f, g = Kc(c.toString()),
                h = !1;
                for (d = 0, f = a.length; f > d; d++) if (e(a[d], g)) {
                    h = !0;
                    break
                }
                if (h) for (d = 0, f = b.length; f > d; d++) if (e(b[d], g)) {
                    h = !1;
                    break
                }
                return h
            }
            function g(a) {
                var b = function(a) {
                    this.$$unwrapTrustedValue = function() {
                        return a
                    }
                };
                return a && (b.prototype = new a),
                b.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue()
                },
                b.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString()
                },
                b
            }
            function h(a, b) {
                var d = m.hasOwnProperty(a) ? m[a] : null;
                if (!d) throw se("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
                if (null === b || b === c || "" === b) return b;
                if ("string" != typeof b) throw se("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
                return new d(b)
            }
            function i(a) {
                return a instanceof l ? a.$$unwrapTrustedValue() : a
            }
            function j(a, b) {
                if (null === b || b === c || "" === b) return b;
                var d = m.hasOwnProperty(a) ? m[a] : null;
                if (d && b instanceof d) return b.$$unwrapTrustedValue();
                if (a === te.RESOURCE_URL) {
                    if (f(b)) return b;
                    throw se("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString())
                }
                if (a === te.HTML) return k(b);
                throw se("unsafe", "Attempting to use an unsafe value in a safe context.")
            }
            var k = function() {
                throw se("unsafe", "Attempting to use an unsafe value in a safe context.")
            };
            d.has("$sanitize") && (k = d.get("$sanitize"));
            var l = g(),
            m = {};
            return m[te.HTML] = g(l),
            m[te.CSS] = g(l),
            m[te.URL] = g(l),
            m[te.JS] = g(l),
            m[te.RESOURCE_URL] = g(m[te.URL]),
            {
                trustAs: h,
                getTrusted: j,
                valueOf: i
            }
        }]
    }
    function Hc() {
        var a = !0;
        this.enabled = function(b) {
            return arguments.length && (a = !!b),
            a
        },
        this.$get = ["$parse", "$sniffer", "$sceDelegate",
        function(b, c, d) {
            if (a && c.msie && c.msieDocumentMode < 8) throw se("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 9 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var e = K(te);
            e.isEnabled = function() {
                return a
            },
            e.trustAs = d.trustAs,
            e.getTrusted = d.getTrusted,
            e.valueOf = d.valueOf,
            a || (e.trustAs = e.getTrusted = function(a, b) {
                return b
            },
            e.valueOf = p),
            e.parseAs = function(a, c) {
                var d = b(c);
                return d.literal && d.constant ? d: function(b, c) {
                    return e.getTrusted(a, d(b, c))
                }
            };
            var g = e.parseAs,
            h = e.getTrusted,
            i = e.trustAs;
            return f(te,
            function(a, b) {
                var c = md(b);
                e[jb("parse_as_" + c)] = function(b) {
                    return g(a, b)
                },
                e[jb("get_trusted_" + c)] = function(b) {
                    return h(a, b)
                },
                e[jb("trust_as_" + c)] = function(b) {
                    return i(a, b)
                }
            }),
            e
        }]
    }
    function Ic() {
        this.$get = ["$window", "$document",
        function(a, b) {
            var c, d, e = {},
            f = m((/android (\d+)/.exec(md((a.navigator || {}).userAgent)) || [])[1]),
            g = /Boxee/i.test((a.navigator || {}).userAgent),
            h = b[0] || {},
            i = h.documentMode,
            j = /^(Moz|webkit|O|ms)(?=[A-Z])/,
            k = h.body && h.body.style,
            l = !1,
            n = !1;
            if (k) {
                for (var o in k) if (d = j.exec(o)) {
                    c = d[0],
                    c = c.substr(0, 1).toUpperCase() + c.substr(1);
                    break
                }
                c || (c = "WebkitOpacity" in k && "webkit"),
                l = !!("transition" in k || c + "Transition" in k),
                n = !!("animation" in k || c + "Animation" in k),
                !f || l && n || (l = u(h.body.style.webkitTransition), n = u(h.body.style.webkitAnimation))
            }
            return {
                history: !(!a.history || !a.history.pushState || 4 > f || g),
                hashchange: "onhashchange" in a && (!i || i > 7),
                hasEvent: function(a) {
                    if ("input" == a && 9 == rd) return ! 1;
                    if (r(e[a])) {
                        var b = h.createElement("div");
                        e[a] = "on" + a in b
                    }
                    return e[a]
                },
                csp: Ed(),
                vendorPrefix: c,
                transitions: l,
                animations: n,
                android: f,
                msie: rd,
                msieDocumentMode: i
            }
        }]
    }
    function Jc() {
        this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler",
        function(a, b, c, d) {
            function e(e, g, h) {
                var i, j = c.defer(),
                k = j.promise,
                l = s(h) && !h;
                return i = b.defer(function() {
                    try {
                        j.resolve(e())
                    } catch(b) {
                        j.reject(b),
                        d(b)
                    } finally {
                        delete f[k.$$timeoutId]
                    }
                    l || a.$apply()
                },
                g),
                k.$$timeoutId = i,
                f[i] = j,
                k
            }
            var f = {};
            return e.cancel = function(a) {
                return a && a.$$timeoutId in f ? (f[a.$$timeoutId].reject("canceled"), delete f[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
            },
            e
        }]
    }
    function Kc(a) {
        var b = a;
        return rd && (ue.setAttribute("href", b), b = ue.href),
        ue.setAttribute("href", b),
        {
            href: ue.href,
            protocol: ue.protocol ? ue.protocol.replace(/:$/, "") : "",
            host: ue.host,
            search: ue.search ? ue.search.replace(/^\?/, "") : "",
            hash: ue.hash ? ue.hash.replace(/^#/, "") : "",
            hostname: ue.hostname,
            port: ue.port,
            pathname: "/" === ue.pathname.charAt(0) ? ue.pathname: "/" + ue.pathname
        }
    }
    function Lc(a) {
        var b = u(a) ? Kc(a) : a;
        return b.protocol === ve.protocol && b.host === ve.host
    }
    function Mc() {
        this.$get = q(a)
    }
    function Nc(a) {
        function b(d, e) {
            if (t(d)) {
                var g = {};
                return f(d,
                function(a, c) {
                    g[c] = b(c, a)
                }),
                g
            }
            return a.factory(d + c, e)
        }
        var c = "Filter";
        this.register = b,
        this.$get = ["$injector",
        function(a) {
            return function(b) {
                return a.get(b + c)
            }
        }],
        b("currency", Pc),
        b("date", Xc),
        b("filter", Oc),
        b("json", Yc),
        b("limitTo", Zc),
        b("lowercase", Ae),
        b("number", Qc),
        b("orderBy", $c),
        b("uppercase", Be)
    }
    function Oc() {
        return function(a, b, c) {
            if (!Cd(a)) return a;
            var d = typeof c,
            e = [];
            e.check = function(a) {
                for (var b = 0; b < e.length; b++) if (!e[b](a)) return ! 1;
                return ! 0
            },
            "function" !== d && (c = "boolean" === d && c ?
            function(a, b) {
                return Ad.equals(a, b)
            }: function(a, b) {
                if (a && b && "object" == typeof a && "object" == typeof b) {
                    for (var d in a) if ("$" !== d.charAt(0) && nd.call(a, d) && c(a[d], b[d])) return ! 0;
                    return ! 1
                }
                return b = ("" + b).toLowerCase(),
                ("" + a).toLowerCase().indexOf(b) > -1
            });
            var f = function(a, b) {
                if ("string" == typeof b && "!" === b.charAt(0)) return ! f(a, b.substr(1));
                switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                    return c(a, b);
                case "object":
                    switch (typeof b) {
                    case "object":
                        return c(a, b);
                    default:
                        for (var d in a) if ("$" !== d.charAt(0) && f(a[d], b)) return ! 0
                    }
                    return ! 1;
                case "array":
                    for (var e = 0; e < a.length; e++) if (f(a[e], b)) return ! 0;
                    return ! 1;
                default:
                    return ! 1
                }
            };
            switch (typeof b) {
            case "boolean":
            case "number":
            case "string":
                b = {
                    $: b
                };
            case "object":
                for (var g in b) !
                function(a) {
                    "undefined" != typeof b[a] && e.push(function(c) {
                        return f("$" == a ? c: c && c[a], b[a])
                    })
                } (g);
                break;
            case "function":
                e.push(b);
                break;
            default:
                return a
            }
            for (var h = [], i = 0; i < a.length; i++) {
                var j = a[i];
                e.check(j) && h.push(j)
            }
            return h
        }
    }
    function Pc(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c) {
            return r(c) && (c = b.CURRENCY_SYM),
            Rc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, 2).replace(/\u00A4/g, c)
        }
    }
    function Qc(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c) {
            return Rc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
        }
    }
    function Rc(a, b, c, d, e) {
        if (null == a || !isFinite(a) || t(a)) return "";
        var f = 0 > a;
        a = Math.abs(a);
        var g = a + "",
        h = "",
        i = [],
        j = !1;
        if ( - 1 !== g.indexOf("e")) {
            var k = g.match(/([\d\.]+)e(-?)(\d+)/);
            k && "-" == k[2] && k[3] > e + 1 ? (g = "0", a = 0) : (h = g, j = !0)
        }
        if (j) e > 0 && a > -1 && 1 > a && (h = a.toFixed(e));
        else {
            var l = (g.split(we)[1] || "").length;
            r(e) && (e = Math.min(Math.max(b.minFrac, l), b.maxFrac)),
            a = +(Math.round( + (a.toString() + "e" + e)).toString() + "e" + -e),
            0 === a && (f = !1);
            var m = ("" + a).split(we),
            n = m[0];
            m = m[1] || "";
            var o, p = 0,
            q = b.lgSize,
            s = b.gSize;
            if (n.length >= q + s) for (p = n.length - q, o = 0; p > o; o++)(p - o) % s === 0 && 0 !== o && (h += c),
            h += n.charAt(o);
            for (o = p; o < n.length; o++)(n.length - o) % q === 0 && 0 !== o && (h += c),
            h += n.charAt(o);
            for (; m.length < e;) m += "0";
            e && "0" !== e && (h += d + m.substr(0, e))
        }
        return i.push(f ? b.negPre: b.posPre),
        i.push(h),
        i.push(f ? b.negSuf: b.posSuf),
        i.join("")
    }
    function Sc(a, b, c) {
        var d = "";
        for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b;) a = "0" + a;
        return c && (a = a.substr(a.length - b)),
        d + a
    }
    function Tc(a, b, c, d) {
        return c = c || 0,
        function(e) {
            var f = e["get" + a]();
            return (c > 0 || f > -c) && (f += c),
            0 === f && -12 == c && (f = 12),
            Sc(f, b, d)
        }
    }
    function Uc(a, b) {
        return function(c, d) {
            var e = c["get" + a](),
            f = od(b ? "SHORT" + a: a);
            return d[f][e]
        }
    }
    function Vc(a) {
        var b = -1 * a.getTimezoneOffset(),
        c = b >= 0 ? "+": "";
        return c += Sc(Math[b > 0 ? "floor": "ceil"](b / 60), 2) + Sc(Math.abs(b % 60), 2)
    }
    function Wc(a, b) {
        return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1]
    }
    function Xc(a) {
        function b(a) {
            var b;
            if (b = a.match(c)) {
                var d = new Date(0),
                e = 0,
                f = 0,
                g = b[8] ? d.setUTCFullYear: d.setFullYear,
                h = b[8] ? d.setUTCHours: d.setHours;
                b[9] && (e = m(b[9] + b[10]), f = m(b[9] + b[11])),
                g.call(d, m(b[1]), m(b[2]) - 1, m(b[3]));
                var i = m(b[4] || 0) - e,
                j = m(b[5] || 0) - f,
                k = m(b[6] || 0),
                l = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
                return h.call(d, i, j, k, l),
                d
            }
            return a
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, d) {
            var e, g, h = "",
            i = [];
            if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, u(c) && (c = ze.test(c) ? m(c) : b(c)), v(c) && (c = new Date(c)), !w(c)) return c;
            for (; d;) g = ye.exec(d),
            g ? (i = M(i, g, 1), d = i.pop()) : (i.push(d), d = null);
            return f(i,
            function(b) {
                e = xe[b],
                h += e ? e(c, a.DATETIME_FORMATS) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }),
            h
        }
    }
    function Yc() {
        return function(a) {
            return Q(a, !0)
        }
    }
    function Zc() {
        return function(a, b) {
            if (!Cd(a) && !u(a)) return a;
            if (b = 1 / 0 === Math.abs(Number(b)) ? Number(b) : m(b), u(a)) return b ? b >= 0 ? a.slice(0, b) : a.slice(b, a.length) : "";
            var c, d, e = [];
            for (b > a.length ? b = a.length: b < -a.length && (b = -a.length), b > 0 ? (c = 0, d = b) : (c = a.length + b, d = a.length); d > c; c++) e.push(a[c]);
            return e
        }
    }
    function $c(a) {
        return function(b, c, d) {
            function f(a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e) return e
                }
                return 0
            }
            function g(a, b) {
                return S(b) ?
                function(b, c) {
                    return a(c, b)
                }: a
            }
            function h(a, b) {
                var c = typeof a,
                d = typeof b;
                return c == d ? (w(a) && w(b) && (a = a.valueOf(), b = b.valueOf()), "string" == c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1) : d > c ? -1 : 1
            }
            if (!e(b)) return b;
            if (!c) return b;
            c = Cd(c) ? c: [c],
            c = F(c,
            function(b) {
                var c = !1,
                d = b || p;
                if (u(b) && (("+" == b.charAt(0) || "-" == b.charAt(0)) && (c = "-" == b.charAt(0), b = b.substring(1)), d = a(b), d.constant)) {
                    var e = d();
                    return g(function(a, b) {
                        return h(a[e], b[e])
                    },
                    c)
                }
                return g(function(a, b) {
                    return h(d(a), d(b))
                },
                c)
            });
            for (var i = [], j = 0; j < b.length; j++) i.push(b[j]);
            return i.sort(g(f, d))
        }
    }
    function _c(a) {
        return x(a) && (a = {
            link: a
        }),
        a.restrict = a.restrict || "AC",
        q(a)
    }
    function ad(a, b, c, d) {
        function e(b, c) {
            c = c ? "-" + _(c, "-") : "",
            d.setClass(a, (b ? Oe: Pe) + c, (b ? Pe: Oe) + c)
        }
        var g = this,
        h = a.parent().controller("form") || Ee,
        i = 0,
        j = g.$error = {},
        k = [];
        g.$name = b.name || b.ngForm,
        g.$dirty = !1,
        g.$pristine = !0,
        g.$valid = !0,
        g.$invalid = !1,
        h.$addControl(g),
        a.addClass(Qe),
        e(!0),
        g.$addControl = function(a) {
            db(a.$name, "input"),
            k.push(a),
            a.$name && (g[a.$name] = a)
        },
        g.$removeControl = function(a) {
            a.$name && g[a.$name] === a && delete g[a.$name],
            f(j,
            function(b, c) {
                g.$setValidity(c, !0, a)
            }),
            I(k, a)
        },
        g.$setValidity = function(a, b, c) {
            var d = j[a];
            if (b) d && (I(d, c), d.length || (i--, i || (e(b), g.$valid = !0, g.$invalid = !1), j[a] = !1, e(!0, a), h.$setValidity(a, !0, g)));
            else {
                if (i || e(b), d) {
                    if (G(d, c)) return
                } else j[a] = d = [],
                i++,
                e(!1, a),
                h.$setValidity(a, !1, g);
                d.push(c),
                g.$valid = !1,
                g.$invalid = !0
            }
        },
        g.$setDirty = function() {
            d.removeClass(a, Qe),
            d.addClass(a, Re),
            g.$dirty = !0,
            g.$pristine = !1,
            h.$setDirty()
        },
        g.$setPristine = function() {
            d.removeClass(a, Re),
            d.addClass(a, Qe),
            g.$dirty = !1,
            g.$pristine = !0,
            f(k,
            function(a) {
                a.$setPristine()
            })
        }
    }
    function bd(a, b, d, e) {
        return a.$setValidity(b, d),
        d ? e: c
    }
    function cd(a, b) {
        var c, d;
        if (b) for (c = 0; c < b.length; ++c) if (d = b[c], a[d]) return ! 0;
        return ! 1
    }
    function dd(a, b, c, d, e) {
        if (t(e)) {
            a.$$hasNativeValidators = !0;
            var f = function(f) {
                return a.$error[b] || cd(e, d) || !cd(e, c) ? f: void a.$setValidity(b, !1)
            };
            a.$parsers.push(f)
        }
    }
    function ed(a, b, c, e, f, g) {
        var h = b.prop(ld),
        i = b[0].placeholder,
        j = {},
        k = md(b[0].type);
        if (e.$$validityState = h, !f.android) {
            var l = !1;
            b.on("compositionstart",
            function() {
                l = !0
            }),
            b.on("compositionend",
            function() {
                l = !1,
                n()
            })
        }
        var n = function(d) {
            if (!l) {
                var f = b.val();
                if (rd && "input" === (d || j).type && b[0].placeholder !== i) return void(i = b[0].placeholder);
                "password" !== k && S(c.ngTrim || "T") && (f = Dd(f));
                var g = h && e.$$hasNativeValidators; (e.$viewValue !== f || "" === f && g) && (a.$root.$$phase ? e.$setViewValue(f) : a.$apply(function() {
                    e.$setViewValue(f)
                }))
            }
        };
        if (f.hasEvent("input")) b.on("input", n);
        else {
            var o, p = function() {
                o || (o = g.defer(function() {
                    n(),
                    o = null
                }))
            };
            b.on("keydown",
            function(a) {
                var b = a.keyCode;
                91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || p()
            }),
            f.hasEvent("paste") && b.on("paste cut", p)
        }
        b.on("change", n),
        e.$render = function() {
            b.val(e.$isEmpty(e.$viewValue) ? "": e.$viewValue)
        };
        var q, r, s = c.ngPattern;
        if (s) {
            var t = function(a, b) {
                return bd(e, "pattern", e.$isEmpty(b) || a.test(b), b)
            };
            r = s.match(/^\/(.*)\/([gim]*)$/),
            r ? (s = new RegExp(r[1], r[2]), q = function(a) {
                return t(s, a)
            }) : q = function(c) {
                var e = a.$eval(s);
                if (!e || !e.test) throw d("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", s, e, T(b));
                return t(e, c)
            },
            e.$formatters.push(q),
            e.$parsers.push(q)
        }
        if (c.ngMinlength) {
            var u = m(c.ngMinlength),
            v = function(a) {
                return bd(e, "minlength", e.$isEmpty(a) || a.length >= u, a)
            };
            e.$parsers.push(v),
            e.$formatters.push(v)
        }
        if (c.ngMaxlength) {
            var w = m(c.ngMaxlength),
            x = function(a) {
                return bd(e, "maxlength", e.$isEmpty(a) || a.length <= w, a)
            };
            e.$parsers.push(x),
            e.$formatters.push(x)
        }
    }
    function fd(a, b, d, e, f, g) {
        if (ed(a, b, d, e, f, g), e.$parsers.push(function(a) {
            var b = e.$isEmpty(a);
            return b || Ke.test(a) ? (e.$setValidity("number", !0), "" === a ? null: b ? a: parseFloat(a)) : (e.$setValidity("number", !1), c)
        }), dd(e, "number", Me, null, e.$$validityState), e.$formatters.push(function(a) {
            return e.$isEmpty(a) ? "": "" + a
        }), d.min) {
            var h = function(a) {
                var b = parseFloat(d.min);
                return bd(e, "min", e.$isEmpty(a) || a >= b, a)
            };
            e.$parsers.push(h),
            e.$formatters.push(h)
        }
        if (d.max) {
            var i = function(a) {
                var b = parseFloat(d.max);
                return bd(e, "max", e.$isEmpty(a) || b >= a, a)
            };
            e.$parsers.push(i),
            e.$formatters.push(i)
        }
        e.$formatters.push(function(a) {
            return bd(e, "number", e.$isEmpty(a) || v(a), a)
        })
    }
    function gd(a, b, c, d, e, f) {
        ed(a, b, c, d, e, f);
        var g = function(a) {
            return bd(d, "url", d.$isEmpty(a) || Ie.test(a), a)
        };
        d.$formatters.push(g),
        d.$parsers.push(g)
    }
    function hd(a, b, c, d, e, f) {
        ed(a, b, c, d, e, f);
        var g = function(a) {
            return bd(d, "email", d.$isEmpty(a) || Je.test(a), a)
        };
        d.$formatters.push(g),
        d.$parsers.push(g)
    }
    function id(a, b, c, d) {
        r(c.name) && b.attr("name", j()),
        b.on("click",
        function() {
            b[0].checked && a.$apply(function() {
                d.$setViewValue(c.value)
            })
        }),
        d.$render = function() {
            var a = c.value;
            b[0].checked = a == d.$viewValue
        },
        c.$observe("value", d.$render)
    }
    function jd(a, b, c, d) {
        var e = c.ngTrueValue,
        f = c.ngFalseValue;
        u(e) || (e = !0),
        u(f) || (f = !1),
        b.on("click",
        function() {
            a.$apply(function() {
                d.$setViewValue(b[0].checked)
            })
        }),
        d.$render = function() {
            b[0].checked = d.$viewValue
        },
        d.$isEmpty = function(a) {
            return a !== e
        },
        d.$formatters.push(function(a) {
            return a === e
        }),
        d.$parsers.push(function(a) {
            return a ? e: f
        })
    }
    function kd(a, b) {
        return a = "ngClass" + a,
        ["$animate",
        function(c) {
            function d(a, b) {
                var c = [];
                a: for (var d = 0; d < a.length; d++) {
                    for (var e = a[d], f = 0; f < b.length; f++) if (e == b[f]) continue a;
                    c.push(e)
                }
                return c
            }
            function e(a) {
                if (Cd(a)) return a;
                if (u(a)) return a.split(" ");
                if (t(a)) {
                    var b = [];
                    return f(a,
                    function(a, c) {
                        a && (b = b.concat(c.split(" ")))
                    }),
                    b
                }
                return a
            }
            return {
                restrict: "AC",
                link: function(g, h, i) {
                    function j(a) {
                        var b = l(a, 1);
                        i.$addClass(b)
                    }
                    function k(a) {
                        var b = l(a, -1);
                        i.$removeClass(b)
                    }
                    function l(a, b) {
                        var c = h.data("$classCounts") || {},
                        d = [];
                        return f(a,
                        function(a) { (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && d.push(a))
                        }),
                        h.data("$classCounts", c),
                        d.join(" ")
                    }
                    function m(a, b) {
                        var e = d(b, a),
                        f = d(a, b);
                        f = l(f, -1),
                        e = l(e, 1),
                        0 === e.length ? c.removeClass(h, f) : 0 === f.length ? c.addClass(h, e) : c.setClass(h, e, f)
                    }
                    function n(a) {
                        if (b === !0 || g.$index % 2 === b) {
                            var c = e(a || []);
                            if (o) {
                                if (!L(a, o)) {
                                    var d = e(o);
                                    m(d, c)
                                }
                            } else j(c)
                        }
                        o = K(a)
                    }
                    var o;
                    g.$watch(i[a], n, !0),
                    i.$observe("class",
                    function() {
                        n(g.$eval(i[a]))
                    }),
                    "ngClass" !== a && g.$watch("$index",
                    function(c, d) {
                        var f = 1 & c;
                        if (f !== (1 & d)) {
                            var h = e(g.$eval(i[a]));
                            f === b ? j(h) : k(h)
                        }
                    })
                }
            }
        }]
    }
    var ld = "validity",
    md = function(a) {
        return u(a) ? a.toLowerCase() : a
    },
    nd = Object.prototype.hasOwnProperty,
    od = function(a) {
        return u(a) ? a.toUpperCase() : a
    },
    pd = function(a) {
        return u(a) ? a.replace(/[A-Z]/g,
        function(a) {
            return String.fromCharCode(32 | a.charCodeAt(0))
        }) : a
    },
    qd = function(a) {
        return u(a) ? a.replace(/[a-z]/g,
        function(a) {
            return String.fromCharCode( - 33 & a.charCodeAt(0))
        }) : a
    };
    "i" !== "I".toLowerCase() && (md = pd, od = qd);
    var rd, sd, td, ud, vd, wd = [].slice,
    xd = [].push,
    yd = Object.prototype.toString,
    zd = d("ng"),
    Ad = a.angular || (a.angular = {}),
    Bd = ["0", "0", "0"];
    rd = m((/msie (\d+)/.exec(md(navigator.userAgent)) || [])[1]),
    isNaN(rd) && (rd = m((/trident\/.*; rv:(\d+)/.exec(md(navigator.userAgent)) || [])[1])),
    o.$inject = [],
    p.$inject = [];
    var Cd = function() {
        return x(Array.isArray) ? Array.isArray: function(a) {
            return "[object Array]" === yd.call(a)
        }
    } (),
    Dd = function() {
        return String.prototype.trim ?
        function(a) {
            return u(a) ? a.trim() : a
        }: function(a) {
            return u(a) ? a.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : a
        }
    } ();
    vd = 9 > rd ?
    function(a) {
        return a = a.nodeName ? a: a[0],
        a.scopeName && "HTML" != a.scopeName ? od(a.scopeName + ":" + a.nodeName) : a.nodeName
    }: function(a) {
        return a.nodeName ? a.nodeName: a[0].nodeName
    };
    var Ed = function() {
        if (s(Ed.isActive_)) return Ed.isActive_;
        var a = !(!b.querySelector("[ng-csp]") && !b.querySelector("[data-ng-csp]"));
        if (!a) try {
            new Function("")
        } catch(c) {
            a = !0
        }
        return Ed.isActive_ = a
    },
    Fd = /[A-Z]/g,
    Gd = {
        full: "1.2.26",
        major: 1,
        minor: 2,
        dot: 26,
        codeName: "captivating-disinterest"
    };
    ob.expando = "ng339";
    var Hd = ob.cache = {},
    Id = 1,
    Jd = a.document.addEventListener ?
    function(a, b, c) {
        a.addEventListener(b, c, !1)
    }: function(a, b, c) {
        a.attachEvent("on" + b, c)
    },
    Kd = a.document.removeEventListener ?
    function(a, b, c) {
        a.removeEventListener(b, c, !1)
    }: function(a, b, c) {
        a.detachEvent("on" + b, c)
    },
    Ld = (ob._data = function(a) {
        return this.cache[a[this.expando]] || {}
    },
    /([\:\-\_]+(.))/g),
    Md = /^moz([A-Z])/,
    Nd = d("jqLite"),
    Od = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    Pd = /<|&#?\w+;/,
    Qd = /<([\w:]+)/,
    Rd = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Sd = {
        option: [1, '<select multiple="multiple">', "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Sd.optgroup = Sd.option,
    Sd.tbody = Sd.tfoot = Sd.colgroup = Sd.caption = Sd.thead,
    Sd.th = Sd.td;
    var Td = ob.prototype = {
        ready: function(c) {
            function d() {
                e || (e = !0, c())
            }
            var e = !1;
            "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), ob(a).on("load", d))
        },
        toString: function() {
            var a = [];
            return f(this,
            function(b) {
                a.push("" + b)
            }),
            "[" + a.join(", ") + "]"
        },
        eq: function(a) {
            return sd(a >= 0 ? this[a] : this[this.length + a])
        },
        length: 0,
        push: xd,
        sort: [].sort,
        splice: [].splice
    },
    Ud = {};
    f("multiple,selected,checked,disabled,readOnly,required,open".split(","),
    function(a) {
        Ud[md(a)] = a
    });
    var Vd = {};
    f("input,select,option,textarea,button,form,details".split(","),
    function(a) {
        Vd[od(a)] = !0
    }),
    f({
        data: ub,
        removeData: sb
    },
    function(a, b) {
        ob[b] = a
    }),
    f({
        data: ub,
        inheritedData: Ab,
        scope: function(a) {
            return sd.data(a, "$scope") || Ab(a.parentNode || a, ["$isolateScope", "$scope"])
        },
        isolateScope: function(a) {
            return sd.data(a, "$isolateScope") || sd.data(a, "$isolateScopeNoTemplate")
        },
        controller: zb,
        injector: function(a) {
            return Ab(a, "$injector")
        },
        removeAttr: function(a, b) {
            a.removeAttribute(b)
        },
        hasClass: vb,
        css: function(a, b, d) {
            if (b = jb(b), !s(d)) {
                var e;
                return 8 >= rd && (e = a.currentStyle && a.currentStyle[b], "" === e && (e = "auto")),
                e = e || a.style[b],
                8 >= rd && (e = "" === e ? c: e),
                e
            }
            a.style[b] = d
        },
        attr: function(a, b, d) {
            var e = md(b);
            if (Ud[e]) {
                if (!s(d)) return a[b] || (a.attributes.getNamedItem(b) || o).specified ? e: c;
                d ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e))
            } else if (s(d)) a.setAttribute(b, d);
            else if (a.getAttribute) {
                var f = a.getAttribute(b, 2);
                return null === f ? c: f
            }
        },
        prop: function(a, b, c) {
            return s(c) ? void(a[b] = c) : a[b]
        },
        text: function() {
            function a(a, c) {
                var d = b[a.nodeType];
                return r(c) ? d ? a[d] : "": void(a[d] = c)
            }
            var b = [];
            return 9 > rd ? (b[1] = "innerText", b[3] = "nodeValue") : b[1] = b[3] = "textContent",
            a.$dv = "",
            a
        } (),
        val: function(a, b) {
            if (r(b)) {
                if ("SELECT" === vd(a) && a.multiple) {
                    var c = [];
                    return f(a.options,
                    function(a) {
                        a.selected && c.push(a.value || a.text)
                    }),
                    0 === c.length ? null: c
                }
                return a.value
            }
            a.value = b
        },
        html: function(a, b) {
            if (r(b)) return a.innerHTML;
            for (var c = 0,
            d = a.childNodes; c < d.length; c++) qb(d[c]);
            a.innerHTML = b
        },
        empty: Bb
    },
    function(a, b) {
        ob.prototype[b] = function(b, d) {
            var e, f, g = this.length;
            if (a !== Bb && (2 == a.length && a !== vb && a !== zb ? b: d) === c) {
                if (t(b)) {
                    for (e = 0; g > e; e++) if (a === ub) a(this[e], b);
                    else for (f in b) a(this[e], f, b[f]);
                    return this
                }
                for (var h = a.$dv,
                i = h === c ? Math.min(g, 1) : g, j = 0; i > j; j++) {
                    var k = a(this[j], b, d);
                    h = h ? h + k: k
                }
                return h
            }
            for (e = 0; g > e; e++) a(this[e], b, d);
            return this
        }
    }),
    f({
        removeData: sb,
        dealoc: qb,
        on: function Cf(a, c, d, e) {
            if (s(e)) throw Nd("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            var g = tb(a, "events"),
            h = tb(a, "handle");
            g || tb(a, "events", g = {}),
            h || tb(a, "handle", h = Db(a, g)),
            f(c.split(" "),
            function(c) {
                var e = g[c];
                if (!e) {
                    if ("mouseenter" == c || "mouseleave" == c) {
                        var f = b.body.contains || b.body.compareDocumentPosition ?
                        function(a, b) {
                            var c = 9 === a.nodeType ? a.documentElement: a,
                            d = b && b.parentNode;
                            return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                        }: function(a, b) {
                            if (b) for (; b = b.parentNode;) if (b === a) return ! 0;
                            return ! 1
                        };
                        g[c] = [];
                        var i = {
                            mouseleave: "mouseout",
                            mouseenter: "mouseover"
                        };
                        Cf(a, i[c],
                        function(a) {
                            var b = this,
                            d = a.relatedTarget; (!d || d !== b && !f(b, d)) && h(a, c)
                        })
                    } else Jd(a, c, h),
                    g[c] = [];
                    e = g[c]
                }
                e.push(d)
            })
        },
        off: rb,
        one: function(a, b, c) {
            a = sd(a),
            a.on(b,
            function d() {
                a.off(b, c),
                a.off(b, d)
            }),
            a.on(b, c)
        },
        replaceWith: function(a, b) {
            var c, d = a.parentNode;
            qb(a),
            f(new ob(b),
            function(b) {
                c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a),
                c = b
            })
        },
        children: function(a) {
            var b = [];
            return f(a.childNodes,
            function(a) {
                1 === a.nodeType && b.push(a)
            }),
            b
        },
        contents: function(a) {
            return a.contentDocument || a.childNodes || []
        },
        append: function(a, b) {
            f(new ob(b),
            function(b) { (1 === a.nodeType || 11 === a.nodeType) && a.appendChild(b)
            })
        },
        prepend: function(a, b) {
            if (1 === a.nodeType) {
                var c = a.firstChild;
                f(new ob(b),
                function(b) {
                    a.insertBefore(b, c)
                })
            }
        },
        wrap: function(a, b) {
            b = sd(b)[0];
            var c = a.parentNode;
            c && c.replaceChild(b, a),
            b.appendChild(a)
        },
        remove: function(a) {
            qb(a);
            var b = a.parentNode;
            b && b.removeChild(a)
        },
        after: function(a, b) {
            var c = a,
            d = a.parentNode;
            f(new ob(b),
            function(a) {
                d.insertBefore(a, c.nextSibling),
                c = a
            })
        },
        addClass: xb,
        removeClass: wb,
        toggleClass: function(a, b, c) {
            b && f(b.split(" "),
            function(b) {
                var d = c;
                r(d) && (d = !vb(a, b)),
                (d ? xb: wb)(a, b)
            })
        },
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b: null
        },
        next: function(a) {
            if (a.nextElementSibling) return a.nextElementSibling;
            for (var b = a.nextSibling; null != b && 1 !== b.nodeType;) b = b.nextSibling;
            return b
        },
        find: function(a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : []
        },
        clone: pb,
        triggerHandler: function(a, b, c) {
            var d, e, g, h = b.type || b,
            i = (tb(a, "events") || {})[h];
            i && (d = {
                preventDefault: function() {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function() {
                    return this.defaultPrevented === !0
                },
                stopPropagation: o,
                type: h,
                target: a
            },
            b.type && (d = l(d, b)), e = K(i), g = c ? [d].concat(c) : [d], f(e,
            function(b) {
                b.apply(a, g)
            }))
        }
    },
    function(a, b) {
        ob.prototype[b] = function(b, c, d) {
            for (var e, f = 0; f < this.length; f++) r(e) ? (e = a(this[f], b, c, d), s(e) && (e = sd(e))) : yb(e, a(this[f], b, c, d));
            return s(e) ? e: this
        },
        ob.prototype.bind = ob.prototype.on,
        ob.prototype.unbind = ob.prototype.off
    }),
    Fb.prototype = {
        put: function(a, b) {
            this[Eb(a, this.nextUid)] = b
        },
        get: function(a) {
            return this[Eb(a, this.nextUid)]
        },
        remove: function(a) {
            var b = this[a = Eb(a, this.nextUid)];
            return delete this[a],
            b
        }
    };
    var Wd = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
    Xd = /,/,
    Yd = /^\s*(_?)(\S+?)\1\s*$/,
    Zd = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
    $d = d("$injector"),
    _d = d("$animate"),
    ae = ["$provide",
    function(a) {
        this.$$selectors = {},
        this.register = function(b, c) {
            var d = b + "-animation";
            if (b && "." != b.charAt(0)) throw _d("notcsel", "Expecting class selector starting with '.' got '{0}'.", b);
            this.$$selectors[b.substr(1)] = d,
            a.factory(d, c)
        },
        this.classNameFilter = function(a) {
            return 1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a: null),
            this.$$classNameFilter
        },
        this.$get = ["$timeout", "$$asyncCallback",
        function(a, b) {
            function c(a) {
                a && b(a)
            }
            return {
                enter: function(a, b, d, e) {
                    d ? d.after(a) : (b && b[0] || (b = d.parent()), b.append(a)),
                    c(e)
                },
                leave: function(a, b) {
                    a.remove(),
                    c(b)
                },
                move: function(a, b, c, d) {
                    this.enter(a, b, c, d)
                },
                addClass: function(a, b, d) {
                    b = u(b) ? b: Cd(b) ? b.join(" ") : "",
                    f(a,
                    function(a) {
                        xb(a, b)
                    }),
                    c(d)
                },
                removeClass: function(a, b, d) {
                    b = u(b) ? b: Cd(b) ? b.join(" ") : "",
                    f(a,
                    function(a) {
                        wb(a, b)
                    }),
                    c(d)
                },
                setClass: function(a, b, d, e) {
                    f(a,
                    function(a) {
                        xb(a, b),
                        wb(a, d)
                    }),
                    c(e)
                },
                enabled: o
            }
        }]
    }],
    be = d("$compile");
    Ob.$inject = ["$provide", "$$sanitizeUriProvider"];
    var ce = /^(x[\:\-_]|data[\:\-_])/i,
    de = d("$interpolate"),
    ee = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
    fe = {
        http: 80,
        https: 443,
        ftp: 21
    },
    ge = d("$location");
    mc.prototype = lc.prototype = kc.prototype = {
        $$html5: !1,
        $$replace: !1,
        absUrl: nc("$$absUrl"),
        url: function(a) {
            if (r(a)) return this.$$url;
            var b = ee.exec(a);
            return b[1] && this.path(decodeURIComponent(b[1])),
            (b[2] || b[1]) && this.search(b[3] || ""),
            this.hash(b[5] || ""),
            this
        },
        protocol: nc("$$protocol"),
        host: nc("$$host"),
        port: nc("$$port"),
        path: oc("$$path",
        function(a) {
            return a = a ? a.toString() : "",
            "/" == a.charAt(0) ? a: "/" + a
        }),
        search: function(a, b) {
            switch (arguments.length) {
            case 0:
                return this.$$search;
            case 1:
                if (u(a) || v(a)) a = a.toString(),
                this.$$search = V(a);
                else {
                    if (!t(a)) throw ge("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                    f(a,
                    function(b, c) {
                        null == b && delete a[c]
                    }),
                    this.$$search = a
                }
                break;
            default:
                r(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
            }
            return this.$$compose(),
            this
        },
        hash: oc("$$hash",
        function(a) {
            return a ? a.toString() : ""
        }),
        replace: function() {
            return this.$$replace = !0,
            this
        }
    };
    var he, ie = d("$parse"),
    je = {},
    ke = Function.prototype.call,
    le = Function.prototype.apply,
    me = Function.prototype.bind,
    ne = {
        "null": function() {
            return null
        },
        "true": function() {
            return ! 0
        },
        "false": function() {
            return ! 1
        },
        undefined: o,
        "+": function(a, b, d, e) {
            return d = d(a, b),
            e = e(a, b),
            s(d) ? s(e) ? d + e: d: s(e) ? e: c
        },
        "-": function(a, b, c, d) {
            return c = c(a, b),
            d = d(a, b),
            (s(c) ? c: 0) - (s(d) ? d: 0)
        },
        "*": function(a, b, c, d) {
            return c(a, b) * d(a, b)
        },
        "/": function(a, b, c, d) {
            return c(a, b) / d(a, b)
        },
        "%": function(a, b, c, d) {
            return c(a, b) % d(a, b)
        },
        "^": function(a, b, c, d) {
            return c(a, b) ^ d(a, b)
        },
        "=": o,
        "===": function(a, b, c, d) {
            return c(a, b) === d(a, b)
        },
        "!==": function(a, b, c, d) {
            return c(a, b) !== d(a, b)
        },
        "==": function(a, b, c, d) {
            return c(a, b) == d(a, b)
        },
        "!=": function(a, b, c, d) {
            return c(a, b) != d(a, b)
        },
        "<": function(a, b, c, d) {
            return c(a, b) < d(a, b)
        },
        ">": function(a, b, c, d) {
            return c(a, b) > d(a, b)
        },
        "<=": function(a, b, c, d) {
            return c(a, b) <= d(a, b)
        },
        ">=": function(a, b, c, d) {
            return c(a, b) >= d(a, b)
        },
        "&&": function(a, b, c, d) {
            return c(a, b) && d(a, b)
        },
        "||": function(a, b, c, d) {
            return c(a, b) || d(a, b)
        },
        "&": function(a, b, c, d) {
            return c(a, b) & d(a, b)
        },
        "|": function(a, b, c, d) {
            return d(a, b)(a, b, c(a, b))
        },
        "!": function(a, b, c) {
            return ! c(a, b)
        }
    },
    oe = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "",
        "'": "'",
        '"': '"'
    },
    pe = function(a) {
        this.options = a
    };
    pe.prototype = {
        constructor: pe,
        lex: function(a) {
            for (this.text = a, this.index = 0, this.ch = c, this.lastCh = ":", this.tokens = []; this.index < this.text.length;) {
                if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch);
                else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber();
                else if (this.isIdent(this.ch)) this.readIdent();
                else if (this.is("(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: this.ch
                }),
                this.index++;
                else {
                    if (this.isWhitespace(this.ch)) {
                        this.index++;
                        continue
                    }
                    var b = this.ch + this.peek(),
                    d = b + this.peek(2),
                    e = ne[this.ch],
                    f = ne[b],
                    g = ne[d];
                    g ? (this.tokens.push({
                        index: this.index,
                        text: d,
                        fn: g
                    }), this.index += 3) : f ? (this.tokens.push({
                        index: this.index,
                        text: b,
                        fn: f
                    }), this.index += 2) : e ? (this.tokens.push({
                        index: this.index,
                        text: this.ch,
                        fn: e
                    }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
                this.lastCh = this.ch
            }
            return this.tokens
        },
        is: function(a) {
            return - 1 !== a.indexOf(this.ch)
        },
        was: function(a) {
            return - 1 !== a.indexOf(this.lastCh)
        },
        peek: function(a) {
            var b = a || 1;
            return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1
        },
        isNumber: function(a) {
            return a >= "0" && "9" >= a
        },
        isWhitespace: function(a) {
            return " " === a || "\r" === a || "	" === a || "\n" === a || "" === a || " " === a
        },
        isIdent: function(a) {
            return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a
        },
        isExpOperator: function(a) {
            return "-" === a || "+" === a || this.isNumber(a)
        },
        throwError: function(a, b, c) {
            c = c || this.index;
            var d = s(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]": " " + c;
            throw ie("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text)
        },
        readNumber: function() {
            for (var a = "",
            b = this.index; this.index < this.text.length;) {
                var c = md(this.text.charAt(this.index));
                if ("." == c || this.isNumber(c)) a += c;
                else {
                    var d = this.peek();
                    if ("e" == c && this.isExpOperator(d)) a += c;
                    else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1)) a += c;
                    else {
                        if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            a = 1 * a,
            this.tokens.push({
                index: b,
                text: a,
                literal: !0,
                constant: !0,
                fn: function() {
                    return a
                }
            })
        },
        readIdent: function() {
            for (var a, b, c, d, e = this,
            f = "",
            g = this.index; this.index < this.text.length && (d = this.text.charAt(this.index), "." === d || this.isIdent(d) || this.isNumber(d));)"." === d && (a = this.index),
            f += d,
            this.index++;
            if (a) for (b = this.index; b < this.text.length;) {
                if (d = this.text.charAt(b), "(" === d) {
                    c = f.substr(a - g + 1),
                    f = f.substr(0, a - g),
                    this.index = b;
                    break
                }
                if (!this.isWhitespace(d)) break;
                b++
            }
            var h = {
                index: g,
                text: f
            };
            if (ne.hasOwnProperty(f)) h.fn = ne[f],
            h.literal = !0,
            h.constant = !0;
            else {
                var i = wc(f, this.options, this.text);
                h.fn = l(function(a, b) {
                    return i(a, b)
                },
                {
                    assign: function(a, b) {
                        return uc(a, f, b, e.text, e.options)
                    }
                })
            }
            this.tokens.push(h),
            c && (this.tokens.push({
                index: a,
                text: "."
            }), this.tokens.push({
                index: a + 1,
                text: c
            }))
        },
        readString: function(a) {
            var b = this.index;
            this.index++;
            for (var c = "",
            d = a,
            e = !1; this.index < this.text.length;) {
                var f = this.text.charAt(this.index);
                if (d += f, e) {
                    if ("u" === f) {
                        var g = this.text.substring(this.index + 1, this.index + 5);
                        g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"),
                        this.index += 4,
                        c += String.fromCharCode(parseInt(g, 16))
                    } else {
                        var h = oe[f];
                        c += h || f
                    }
                    e = !1
                } else if ("\\" === f) e = !0;
                else {
                    if (f === a) return this.index++,
                    void this.tokens.push({
                        index: b,
                        text: d,
                        string: c,
                        literal: !0,
                        constant: !0,
                        fn: function() {
                            return c
                        }
                    });
                    c += f
                }
                this.index++
            }
            this.throwError("Unterminated quote", b)
        }
    };
    var qe = function(a, b, c) {
        this.lexer = a,
        this.$filter = b,
        this.options = c
    };
    qe.ZERO = l(function() {
        return 0
    },
    {
        constant: !0
    }),
    qe.prototype = {
        constructor: qe,
        parse: function(a) {
            this.text = a,
            this.tokens = this.lexer.lex(a);
            var b = this.statements();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]),
            b.literal = !!b.literal,
            b.constant = !!b.constant,
            b
        },
        primary: function() {
            var a;
            if (this.expect("(")) a = this.filterChain(),
            this.consume(")");
            else if (this.expect("[")) a = this.arrayDeclaration();
            else if (this.expect("{")) a = this.object();
            else {
                var b = this.expect();
                a = b.fn,
                a || this.throwError("not a primary expression", b),
                a.literal = !!b.literal,
                a.constant = !!b.constant
            }
            for (var c, d; c = this.expect("(", "[", ".");)"(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
            return a
        },
        throwError: function(a, b) {
            throw ie("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index))
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw ie("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0]
        },
        peek: function(a, b, c, d) {
            if (this.tokens.length > 0) {
                var e = this.tokens[0],
                f = e.text;
                if (f === a || f === b || f === c || f === d || !a && !b && !c && !d) return e
            }
            return ! 1
        },
        expect: function(a, b, c, d) {
            var e = this.peek(a, b, c, d);
            return e ? (this.tokens.shift(), e) : !1
        },
        consume: function(a) {
            this.expect(a) || this.throwError("is unexpected, expecting [" + a + "]", this.peek())
        },
        unaryFn: function(a, b) {
            return l(function(c, d) {
                return a(c, d, b)
            },
            {
                constant: b.constant
            })
        },
        ternaryFn: function(a, b, c) {
            return l(function(d, e) {
                return a(d, e) ? b(d, e) : c(d, e)
            },
            {
                constant: a.constant && b.constant && c.constant
            })
        },
        binaryFn: function(a, b, c) {
            return l(function(d, e) {
                return b(d, e, a, c)
            },
            {
                constant: a.constant && c.constant
            })
        },
        statements: function() {
            for (var a = [];;) if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";")) return 1 === a.length ? a[0] : function(b, c) {
                for (var d, e = 0; e < a.length; e++) {
                    var f = a[e];
                    f && (d = f(b, c))
                }
                return d
            }
        },
        filterChain: function() {
            for (var a, b = this.expression();;) {
                if (! (a = this.expect("|"))) return b;
                b = this.binaryFn(b, a.fn, this.filter())
            }
        },
        filter: function() {
            for (var a = this.expect(), b = this.$filter(a.text), c = [];;) {
                if (! (a = this.expect(":"))) {
                    var d = function(a, d, e) {
                        for (var f = [e], g = 0; g < c.length; g++) f.push(c[g](a, d));
                        return b.apply(a, f)
                    };
                    return function() {
                        return d
                    }
                }
                c.push(this.expression())
            }
        },
        expression: function() {
            return this.assignment()
        },
        assignment: function() {
            var a, b, c = this.ternary();
            return (b = this.expect("=")) ? (c.assign || this.throwError("implies assignment but [" + this.text.substring(0, b.index) + "] can not be assigned to", b), a = this.ternary(),
            function(b, d) {
                return c.assign(b, a(b, d), d)
            }) : c
        },
        ternary: function() {
            var a, b, c = this.logicalOR();
            return (b = this.expect("?")) ? (a = this.assignment(), (b = this.expect(":")) ? this.ternaryFn(c, a, this.assignment()) : void this.throwError("expected :", b)) : c
        },
        logicalOR: function() {
            for (var a, b = this.logicalAND();;) {
                if (! (a = this.expect("||"))) return b;
                b = this.binaryFn(b, a.fn, this.logicalAND())
            }
        },
        logicalAND: function() {
            var a, b = this.equality();
            return (a = this.expect("&&")) && (b = this.binaryFn(b, a.fn, this.logicalAND())),
            b
        },
        equality: function() {
            var a, b = this.relational();
            return (a = this.expect("==", "!=", "===", "!==")) && (b = this.binaryFn(b, a.fn, this.equality())),
            b
        },
        relational: function() {
            var a, b = this.additive();
            return (a = this.expect("<", ">", "<=", ">=")) && (b = this.binaryFn(b, a.fn, this.relational())),
            b
        },
        additive: function() {
            for (var a, b = this.multiplicative(); a = this.expect("+", "-");) b = this.binaryFn(b, a.fn, this.multiplicative());
            return b
        },
        multiplicative: function() {
            for (var a, b = this.unary(); a = this.expect("*", "/", "%");) b = this.binaryFn(b, a.fn, this.unary());
            return b
        },
        unary: function() {
            var a;
            return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(qe.ZERO, a.fn, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.fn, this.unary()) : this.primary()
        },
        fieldAccess: function(a) {
            var b = this,
            c = this.expect().text,
            d = wc(c, this.options, this.text);
            return l(function(b, c, e) {
                return d(e || a(b, c))
            },
            {
                assign: function(d, e, f) {
                    var g = a(d, f);
                    return g || a.assign(d, g = {}),
                    uc(g, c, e, b.text, b.options)
                }
            })
        },
        objectIndex: function(a) {
            var b = this,
            d = this.expression();
            return this.consume("]"),
            l(function(e, f) {
                var g, h, i = a(e, f),
                j = d(e, f);
                return rc(j, b.text),
                i ? (g = sc(i[j], b.text), g && g.then && b.options.unwrapPromises && (h = g, "$$v" in g || (h.$$v = c, h.then(function(a) {
                    h.$$v = a
                })), g = g.$$v), g) : c
            },
            {
                assign: function(c, e, f) {
                    var g = rc(d(c, f), b.text),
                    h = sc(a(c, f), b.text);
                    return h || a.assign(c, h = {}),
                    h[g] = e
                }
            })
        },
        functionCall: function(a, b) {
            var c = [];
            if (")" !== this.peekToken().text) do c.push(this.expression());
            while (this.expect(","));
            this.consume(")");
            var d = this;
            return function(e, f) {
                for (var g = [], h = b ? b(e, f) : e, i = 0; i < c.length; i++) g.push(sc(c[i](e, f), d.text));
                var j = a(e, f, h) || o;
                sc(h, d.text),
                tc(j, d.text);
                var k = j.apply ? j.apply(h, g) : j(g[0], g[1], g[2], g[3], g[4]);
                return sc(k, d.text)
            }
        },
        arrayDeclaration: function() {
            var a = [],
            b = !0;
            if ("]" !== this.peekToken().text) do {
                if (this.peek("]")) break;
                var c = this.expression();
                a.push(c), c.constant || (b = !1)
            } while ( this . expect (","));
            return this.consume("]"),
            l(function(b, c) {
                for (var d = [], e = 0; e < a.length; e++) d.push(a[e](b, c));
                return d
            },
            {
                literal: !0,
                constant: b
            })
        },
        object: function() {
            var a = [],
            b = !0;
            if ("}" !== this.peekToken().text) do {
                if (this.peek("}")) break;
                var c = this.expect(), d = c.string || c.text;
                this.consume(":");
                var e = this.expression();
                a.push({
                    key: d,
                    value: e
                }), e.constant || (b = !1)
            } while ( this . expect (","));
            return this.consume("}"),
            l(function(b, c) {
                for (var d = {},
                e = 0; e < a.length; e++) {
                    var f = a[e];
                    d[f.key] = f.value(b, c)
                }
                return d
            },
            {
                literal: !0,
                constant: b
            })
        }
    };
    var re = {},
    se = d("$sce"),
    te = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    },
    ue = b.createElement("a"),
    ve = Kc(a.location.href, !0);
    Nc.$inject = ["$provide"],
    Pc.$inject = ["$locale"],
    Qc.$inject = ["$locale"];
    var we = ".",
    xe = {
        yyyy: Tc("FullYear", 4),
        yy: Tc("FullYear", 2, 0, !0),
        y: Tc("FullYear", 1),
        MMMM: Uc("Month"),
        MMM: Uc("Month", !0),
        MM: Tc("Month", 2, 1),
        M: Tc("Month", 1, 1),
        dd: Tc("Date", 2),
        d: Tc("Date", 1),
        HH: Tc("Hours", 2),
        H: Tc("Hours", 1),
        hh: Tc("Hours", 2, -12),
        h: Tc("Hours", 1, -12),
        mm: Tc("Minutes", 2),
        m: Tc("Minutes", 1),
        ss: Tc("Seconds", 2),
        s: Tc("Seconds", 1),
        sss: Tc("Milliseconds", 3),
        EEEE: Uc("Day"),
        EEE: Uc("Day", !0),
        a: Wc,
        Z: Vc
    },
    ye = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
    ze = /^\-?\d+$/;
    Xc.$inject = ["$locale"];
    var Ae = q(md),
    Be = q(od);
    $c.$inject = ["$parse"];
    var Ce = q({
        restrict: "E",
        compile: function(a, c) {
            return 8 >= rd && (c.href || c.name || c.$set("href", ""), a.append(b.createComment("IE fix"))),
            c.href || c.xlinkHref || c.name ? void 0 : function(a, b) {
                var c = "[object SVGAnimatedString]" === yd.call(b.prop("href")) ? "xlink:href": "href";
                b.on("click",
                function(a) {
                    b.attr(c) || a.preventDefault()
                })
            }
        }
    }),
    De = {};
    f(Ud,
    function(a, b) {
        if ("multiple" != a) {
            var c = Pb("ng-" + b);
            De[c] = function() {
                return {
                    priority: 100,
                    link: function(a, d, e) {
                        a.$watch(e[c],
                        function(a) {
                            e.$set(b, !!a)
                        })
                    }
                }
            }
        }
    }),
    f(["src", "srcset", "href"],
    function(a) {
        var b = Pb("ng-" + a);
        De[b] = function() {
            return {
                priority: 99,
                link: function(c, d, e) {
                    var f = a,
                    g = a;
                    "href" === a && "[object SVGAnimatedString]" === yd.call(d.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null),
                    e.$observe(b,
                    function(b) {
                        return b ? (e.$set(g, b), void(rd && f && d.prop(f, e[g]))) : void("href" === a && e.$set(g, null))
                    })
                }
            }
        }
    });
    var Ee = {
        $addControl: o,
        $removeControl: o,
        $setValidity: o,
        $setDirty: o,
        $setPristine: o
    };
    ad.$inject = ["$element", "$attrs", "$scope", "$animate"];
    var Fe = function(a) {
        return ["$timeout",
        function(b) {
            var d = {
                name: "form",
                restrict: a ? "EAC": "E",
                controller: ad,
                compile: function() {
                    return {
                        pre: function(a, d, e, f) {
                            if (!e.action) {
                                var g = function(a) {
                                    a.preventDefault ? a.preventDefault() : a.returnValue = !1
                                };
                                Jd(d[0], "submit", g),
                                d.on("$destroy",
                                function() {
                                    b(function() {
                                        Kd(d[0], "submit", g)
                                    },
                                    0, !1)
                                })
                            }
                            var h = d.parent().controller("form"),
                            i = e.name || e.ngForm;
                            i && uc(a, i, f, i),
                            h && d.on("$destroy",
                            function() {
                                h.$removeControl(f),
                                i && uc(a, i, c, i),
                                l(f, Ee)
                            })
                        }
                    }
                }
            };
            return d
        }]
    },
    Ge = Fe(),
    He = Fe(!0),
    Ie = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
    Je = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
    Ke = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
    Le = {
        text: ed,
        number: fd,
        url: gd,
        email: hd,
        radio: id,
        checkbox: jd,
        hidden: o,
        button: o,
        submit: o,
        reset: o,
        file: o
    },
    Me = ["badInput"],
    Ne = ["$browser", "$sniffer",
    function(a, b) {
        return {
            restrict: "E",
            require: "?ngModel",
            link: function(c, d, e, f) {
                f && (Le[md(e.type)] || Le.text)(c, d, e, f, b, a)
            }
        }
    }],
    Oe = "ng-valid",
    Pe = "ng-invalid",
    Qe = "ng-pristine",
    Re = "ng-dirty",
    Se = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate",
    function(a, b, c, e, g, h) {
        function i(a, b) {
            b = b ? "-" + _(b, "-") : "",
            h.removeClass(e, (a ? Pe: Oe) + b),
            h.addClass(e, (a ? Oe: Pe) + b)
        }
        this.$viewValue = Number.NaN,
        this.$modelValue = Number.NaN,
        this.$parsers = [],
        this.$formatters = [],
        this.$viewChangeListeners = [],
        this.$pristine = !0,
        this.$dirty = !1,
        this.$valid = !0,
        this.$invalid = !1,
        this.$name = c.name;
        var j = g(c.ngModel),
        k = j.assign;
        if (!k) throw d("ngModel")("nonassign", "Expression '{0}' is non-assignable. Element: {1}", c.ngModel, T(e));
        this.$render = o,
        this.$isEmpty = function(a) {
            return r(a) || "" === a || null === a || a !== a
        };
        var l = e.inheritedData("$formController") || Ee,
        m = 0,
        n = this.$error = {};
        e.addClass(Qe),
        i(!0),
        this.$setValidity = function(a, b) {
            n[a] !== !b && (b ? (n[a] && m--, m || (i(!0), this.$valid = !0, this.$invalid = !1)) : (i(!1), this.$invalid = !0, this.$valid = !1, m++), n[a] = !b, i(b, a), l.$setValidity(a, b, this))
        },
        this.$setPristine = function() {
            this.$dirty = !1,
            this.$pristine = !0,
            h.removeClass(e, Re),
            h.addClass(e, Qe)
        },
        this.$setViewValue = function(c) {
            this.$viewValue = c,
            this.$pristine && (this.$dirty = !0, this.$pristine = !1, h.removeClass(e, Qe), h.addClass(e, Re), l.$setDirty()),
            f(this.$parsers,
            function(a) {
                c = a(c)
            }),
            this.$modelValue !== c && (this.$modelValue = c, k(a, c), f(this.$viewChangeListeners,
            function(a) {
                try {
                    a()
                } catch(c) {
                    b(c)
                }
            }))
        };
        var p = this;
        a.$watch(function() {
            var b = j(a);
            if (p.$modelValue !== b) {
                var c = p.$formatters,
                d = c.length;
                for (p.$modelValue = b; d--;) b = c[d](b);
                p.$viewValue !== b && (p.$viewValue = b, p.$render())
            }
            return b
        })
    }],
    Te = function() {
        return {
            require: ["ngModel", "^?form"],
            controller: Se,
            link: function(a, b, c, d) {
                var e = d[0],
                f = d[1] || Ee;
                f.$addControl(e),
                a.$on("$destroy",
                function() {
                    f.$removeControl(e)
                })
            }
        }
    },
    Ue = q({
        require: "ngModel",
        link: function(a, b, c, d) {
            d.$viewChangeListeners.push(function() {
                a.$eval(c.ngChange)
            })
        }
    }),
    Ve = function() {
        return {
            require: "?ngModel",
            link: function(a, b, c, d) {
                if (d) {
                    c.required = !0;
                    var e = function(a) {
                        return c.required && d.$isEmpty(a) ? void d.$setValidity("required", !1) : (d.$setValidity("required", !0), a)
                    };
                    d.$formatters.push(e),
                    d.$parsers.unshift(e),
                    c.$observe("required",
                    function() {
                        e(d.$viewValue)
                    })
                }
            }
        }
    },
    We = function() {
        return {
            require: "ngModel",
            link: function(a, b, d, e) {
                var g = /\/(.*)\//.exec(d.ngList),
                h = g && new RegExp(g[1]) || d.ngList || ",",
                i = function(a) {
                    if (!r(a)) {
                        var b = [];
                        return a && f(a.split(h),
                        function(a) {
                            a && b.push(Dd(a))
                        }),
                        b
                    }
                };
                e.$parsers.push(i),
                e.$formatters.push(function(a) {
                    return Cd(a) ? a.join(", ") : c
                }),
                e.$isEmpty = function(a) {
                    return ! a || !a.length
                }
            }
        }
    },
    Xe = /^(true|false|\d+)$/,
    Ye = function() {
        return {
            priority: 100,
            compile: function(a, b) {
                return Xe.test(b.ngValue) ?
                function(a, b, c) {
                    c.$set("value", a.$eval(c.ngValue))
                }: function(a, b, c) {
                    a.$watch(c.ngValue,
                    function(a) {
                        c.$set("value", a)
                    })
                }
            }
        }
    },
    Ze = _c({
        compile: function(a) {
            return a.addClass("ng-binding"),
            function(a, b, d) {
                b.data("$binding", d.ngBind),
                a.$watch(d.ngBind,
                function(a) {
                    b.text(a == c ? "": a)
                })
            }
        }
    }),
    $e = ["$interpolate",
    function(a) {
        return function(b, c, d) {
            var e = a(c.attr(d.$attr.ngBindTemplate));
            c.addClass("ng-binding").data("$binding", e),
            d.$observe("ngBindTemplate",
            function(a) {
                c.text(a)
            })
        }
    }],
    _e = ["$sce", "$parse",
    function(a, b) {
        return {
            compile: function(c) {
                return c.addClass("ng-binding"),
                function(c, d, e) {
                    function f() {
                        return (g(c) || "").toString()
                    }
                    d.data("$binding", e.ngBindHtml);
                    var g = b(e.ngBindHtml);
                    c.$watch(f,
                    function() {
                        d.html(a.getTrustedHtml(g(c)) || "")
                    })
                }
            }
        }
    }],
    af = kd("", !0),
    bf = kd("Odd", 0),
    cf = kd("Even", 1),
    df = _c({
        compile: function(a, b) {
            b.$set("ngCloak", c),
            a.removeClass("ng-cloak")
        }
    }),
    ef = [function() {
        return {
            scope: !0,
            controller: "@",
            priority: 500
        }
    }],
    ff = {},
    gf = {
        blur: !0,
        focus: !0
    };
    f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
    function(a) {
        var b = Pb("ng-" + a);
        ff[b] = ["$parse", "$rootScope",
        function(c, d) {
            return {
                compile: function(e, f) {
                    var g = c(f[b]);
                    return function(b, c) {
                        c.on(a,
                        function(c) {
                            var e = function() {
                                g(b, {
                                    $event: c
                                })
                            };
                            gf[a] && d.$$phase ? b.$evalAsync(e) : b.$apply(e)
                        })
                    }
                }
            }
        }]
    });
    var hf = ["$animate",
    function(a) {
        return {
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function(c, d, e, f, g) {
                var h, i, j;
                c.$watch(e.ngIf,
                function(f) {
                    S(f) ? i || (i = c.$new(), g(i,
                    function(c) {
                        c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "),
                        h = {
                            clone: c
                        },
                        a.enter(c, d.parent(), d)
                    })) : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = fb(h.clone), a.leave(j,
                    function() {
                        j = null
                    }), h = null))
                })
            }
        }
    }],
    jf = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce",
    function(a, b, c, d, e) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: Ad.noop,
            compile: function(f, g) {
                var h = g.ngInclude || g.src,
                i = g.onload || "",
                j = g.autoscroll;
                return function(f, g, k, l, m) {
                    var n, o, p, q = 0,
                    r = function() {
                        o && (o.remove(), o = null),
                        n && (n.$destroy(), n = null),
                        p && (d.leave(p,
                        function() {
                            o = null
                        }), o = p, p = null)
                    };
                    f.$watch(e.parseAsResourceUrl(h),
                    function(e) {
                        var h = function() { ! s(j) || j && !f.$eval(j) || c()
                        },
                        k = ++q;
                        e ? (a.get(e, {
                            cache: b
                        }).success(function(a) {
                            if (k === q) {
                                var b = f.$new();
                                l.template = a;
                                var c = m(b,
                                function(a) {
                                    r(),
                                    d.enter(a, null, g, h)
                                });
                                n = b,
                                p = c,
                                n.$emit("$includeContentLoaded"),
                                f.$eval(i)
                            }
                        }).error(function() {
                            k === q && r()
                        }), f.$emit("$includeContentRequested")) : (r(), l.template = null)
                    })
                }
            }
        }
    }],
    kf = ["$compile",
    function(a) {
        return {
            restrict: "ECA",
            priority: -400,
            require: "ngInclude",
            link: function(b, c, d, e) {
                c.html(e.template),
                a(c.contents())(b)
            }
        }
    }],
    lf = _c({
        priority: 450,
        compile: function() {
            return {
                pre: function(a, b, c) {
                    a.$eval(c.ngInit)
                }
            }
        }
    }),
    mf = _c({
        terminal: !0,
        priority: 1e3
    }),
    nf = ["$locale", "$interpolate",
    function(a, b) {
        var c = /{}/g;
        return {
            restrict: "EA",
            link: function(d, e, g) {
                var h = g.count,
                i = g.$attr.when && e.attr(g.$attr.when),
                j = g.offset || 0,
                k = d.$eval(i) || {},
                l = {},
                m = b.startSymbol(),
                n = b.endSymbol(),
                o = /^when(Minus)?(.+)$/;
                f(g,
                function(a, b) {
                    o.test(b) && (k[md(b.replace("when", "").replace("Minus", "-"))] = e.attr(g.$attr[b]))
                }),
                f(k,
                function(a, d) {
                    l[d] = b(a.replace(c, m + h + "-" + j + n))
                }),
                d.$watch(function() {
                    var b = parseFloat(d.$eval(h));
                    return isNaN(b) ? "": (b in k || (b = a.pluralCat(b - j)), l[b](d, e, !0))
                },
                function(a) {
                    e.text(a)
                })
            }
        }
    }],
    of = ["$parse", "$animate",
    function(a, c) {
        function g(a) {
            return a.clone[0]
        }
        function h(a) {
            return a.clone[a.clone.length - 1]
        }
        var i = "$$NG_REMOVED",
        j = d("ngRepeat");
        return {
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            link: function(d, k, l, m, n) {
                var o, p, q, r, s, t, u, v, w, x = l.ngRepeat,
                y = x.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
                z = {
                    $id: Eb
                };
                if (!y) throw j("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", x);
                if (t = y[1], u = y[2], o = y[3], o ? (p = a(o), q = function(a, b, c) {
                    return w && (z[w] = a),
                    z[v] = b,
                    z.$index = c,
                    p(d, z)
                }) : (r = function(a, b) {
                    return Eb(b)
                },
                s = function(a) {
                    return a
                }), y = t.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !y) throw j("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", t);
                v = y[3] || y[1],
                w = y[2];
                var A = {};
                d.$watchCollection(u,
                function(a) {
                    var l, m, o, p, t, u, y, z, B, C, D, E, F = k[0],
                    G = {},
                    H = [];
                    if (e(a)) C = a,
                    B = q || r;
                    else {
                        B = q || s,
                        C = [];
                        for (u in a) a.hasOwnProperty(u) && "$" != u.charAt(0) && C.push(u);
                        C.sort()
                    }
                    for (p = C.length, m = H.length = C.length, l = 0; m > l; l++) if (u = a === C ? l: C[l], y = a[u], z = B(u, y, l), db(z, "`track by` id"), A.hasOwnProperty(z)) D = A[z],
                    delete A[z],
                    G[z] = D,
                    H[l] = D;
                    else {
                        if (G.hasOwnProperty(z)) throw f(H,
                        function(a) {
                            a && a.scope && (A[a.id] = a)
                        }),
                        j("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", x, z, Q(y));
                        H[l] = {
                            id: z
                        },
                        G[z] = !1
                    }
                    for (u in A) A.hasOwnProperty(u) && (D = A[u], E = fb(D.clone), c.leave(E), f(E,
                    function(a) {
                        a[i] = !0
                    }), D.scope.$destroy());
                    for (l = 0, m = C.length; m > l; l++) {
                        if (u = a === C ? l: C[l], y = a[u], D = H[l], H[l - 1] && (F = h(H[l - 1])), D.scope) {
                            t = D.scope,
                            o = F;
                            do o = o.nextSibling;
                            while (o && o[i]);
                            g(D) != o && c.move(fb(D.clone), null, sd(F)),
                            F = h(D)
                        } else t = d.$new();
                        t[v] = y,
                        w && (t[w] = u),
                        t.$index = l,
                        t.$first = 0 === l,
                        t.$last = l === p - 1,
                        t.$middle = !(t.$first || t.$last),
                        t.$odd = !(t.$even = 0 === (1 & l)),
                        D.scope || n(t,
                        function(a) {
                            a[a.length++] = b.createComment(" end ngRepeat: " + x + " "),
                            c.enter(a, null, sd(F)),
                            F = a,
                            D.scope = t,
                            D.clone = a,
                            G[D.id] = D
                        })
                    }
                    A = G
                })
            }
        }
    }],
    pf = ["$animate",
    function(a) {
        return function(b, c, d) {
            b.$watch(d.ngShow,
            function(b) {
                a[S(b) ? "removeClass": "addClass"](c, "ng-hide")
            })
        }
    }],
    qf = ["$animate",
    function(a) {
        return function(b, c, d) {
            b.$watch(d.ngHide,
            function(b) {
                a[S(b) ? "addClass": "removeClass"](c, "ng-hide")
            })
        }
    }],
    rf = _c(function(a, b, c) {
        a.$watch(c.ngStyle,
        function(a, c) {
            c && a !== c && f(c,
            function(a, c) {
                b.css(c, "")
            }),
            a && b.css(a)
        },
        !0)
    }),
    sf = ["$animate",
    function(a) {
        return {
            restrict: "EA",
            require: "ngSwitch",
            controller: ["$scope",
            function() {
                this.cases = {}
            }],
            link: function(b, c, d, e) {
                var g = d.ngSwitch || d.on,
                h = [],
                i = [],
                j = [],
                k = [];
                b.$watch(g,
                function(c) {
                    var g, l;
                    for (g = 0, l = j.length; l > g; ++g) j[g].remove();
                    for (j.length = 0, g = 0, l = k.length; l > g; ++g) {
                        var m = i[g];
                        k[g].$destroy(),
                        j[g] = m,
                        a.leave(m,
                        function() {
                            j.splice(g, 1)
                        })
                    }
                    i.length = 0,
                    k.length = 0,
                    (h = e.cases["!" + c] || e.cases["?"]) && (b.$eval(d.change), f(h,
                    function(c) {
                        var d = b.$new();
                        k.push(d),
                        c.transclude(d,
                        function(b) {
                            var d = c.element;
                            i.push(b),
                            a.enter(b, d.parent(), d)
                        })
                    }))
                })
            }
        }
    }],
    tf = _c({
        transclude: "element",
        priority: 800,
        require: "^ngSwitch",
        link: function(a, b, c, d, e) {
            d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [],
            d.cases["!" + c.ngSwitchWhen].push({
                transclude: e,
                element: b
            })
        }
    }),
    uf = _c({
        transclude: "element",
        priority: 800,
        require: "^ngSwitch",
        link: function(a, b, c, d, e) {
            d.cases["?"] = d.cases["?"] || [],
            d.cases["?"].push({
                transclude: e,
                element: b
            })
        }
    }),
    vf = _c({
        link: function(a, b, c, e, f) {
            if (!f) throw d("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", T(b));
            f(function(a) {
                b.empty(),
                b.append(a)
            })
        }
    }),
    wf = ["$templateCache",
    function(a) {
        return {
            restrict: "E",
            terminal: !0,
            compile: function(b, c) {
                if ("text/ng-template" == c.type) {
                    var d = c.id,
                    e = b[0].text;
                    a.put(d, e)
                }
            }
        }
    }],
    xf = d("ngOptions"),
    yf = q({
        terminal: !0
    }),
    zf = ["$compile", "$parse",
    function(a, d) {
        var e = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        h = {
            $setViewValue: o
        };
        return {
            restrict: "E",
            require: ["select", "?ngModel"],
            controller: ["$element", "$scope", "$attrs",
            function(a, b, c) {
                var d, e, f = this,
                g = {},
                i = h;
                f.databound = c.ngModel,
                f.init = function(a, b, c) {
                    i = a,
                    d = b,
                    e = c
                },
                f.addOption = function(b) {
                    db(b, '"option value"'),
                    g[b] = !0,
                    i.$viewValue == b && (a.val(b), e.parent() && e.remove())
                },
                f.removeOption = function(a) {
                    this.hasOption(a) && (delete g[a], i.$viewValue == a && this.renderUnknownOption(a))
                },
                f.renderUnknownOption = function(b) {
                    var c = "? " + Eb(b) + " ?";
                    e.val(c),
                    a.prepend(e),
                    a.val(c),
                    e.prop("selected", !0)
                },
                f.hasOption = function(a) {
                    return g.hasOwnProperty(a)
                },
                b.$on("$destroy",
                function() {
                    f.renderUnknownOption = o
                })
            }],
            link: function(h, i, j, k) {
                function l(a, b, c, d) {
                    c.$render = function() {
                        var a = c.$viewValue;
                        d.hasOption(a) ? (y.parent() && y.remove(), b.val(a), "" === a && o.prop("selected", !0)) : r(a) && o ? b.val("") : d.renderUnknownOption(a)
                    },
                    b.on("change",
                    function() {
                        a.$apply(function() {
                            y.parent() && y.remove(),
                            c.$setViewValue(b.val())
                        })
                    })
                }
                function m(a, b, c) {
                    var d;
                    c.$render = function() {
                        var a = new Fb(c.$viewValue);
                        f(b.find("option"),
                        function(b) {
                            b.selected = s(a.get(b.value))
                        })
                    },
                    a.$watch(function() {
                        L(d, c.$viewValue) || (d = K(c.$viewValue), c.$render())
                    }),
                    b.on("change",
                    function() {
                        a.$apply(function() {
                            var a = [];
                            f(b.find("option"),
                            function(b) {
                                b.selected && a.push(b.value)
                            }),
                            c.$setViewValue(a)
                        })
                    })
                }
                function n(b, f, h) {
                    function i() {
                        var a = !1;
                        if (t) {
                            var c = h.$modelValue;
                            if (z && Cd(c)) {
                                a = new Fb([]);
                                for (var d = {},
                                e = 0; e < c.length; e++) d[m] = c[e],
                                a.put(z(b, d), c[e])
                            } else a = new Fb(c)
                        }
                        return a
                    }
                    function j() {
                        var a, c, d, e, j, k, u, y, B, C, D, E, F, G, H, I = {
                            "": []
                        },
                        J = [""],
                        K = h.$modelValue,
                        L = r(b) || [],
                        M = n ? g(L) : L,
                        N = {},
                        O = i();
                        for (D = 0; B = M.length, B > D; D++) {
                            if (u = D, n) {
                                if (u = M[D], "$" === u.charAt(0)) continue;
                                N[n] = u
                            }
                            if (N[m] = L[u], a = o(b, N) || "", (c = I[a]) || (c = I[a] = [], J.push(a)), t) E = s(O.remove(z ? z(b, N) : q(b, N)));
                            else {
                                if (z) {
                                    var P = {};
                                    P[m] = K,
                                    E = z(b, P) === z(b, N)
                                } else E = K === q(b, N);
                                O = O || E
                            }
                            H = l(b, N),
                            H = s(H) ? H: "",
                            c.push({
                                id: z ? z(b, N) : n ? M[D] : D,
                                label: H,
                                selected: E
                            })
                        }
                        for (t || (v || null === K ? I[""].unshift({
                            id: "",
                            label: "",
                            selected: !O
                        }) : O || I[""].unshift({
                            id: "?",
                            label: "",
                            selected: !0
                        })), C = 0, y = J.length; y > C; C++) {
                            for (a = J[C], c = I[a], A.length <= C ? (e = {
                                element: x.clone().attr("label", a),
                                label: c.label
                            },
                            j = [e], A.push(j), f.append(e.element)) : (j = A[C], e = j[0], e.label != a && e.element.attr("label", e.label = a)), F = null, D = 0, B = c.length; B > D; D++) d = c[D],
                            (k = j[D + 1]) ? (F = k.element, k.label !== d.label && F.text(k.label = d.label), k.id !== d.id && F.val(k.id = d.id), F[0].selected !== d.selected && (F.prop("selected", k.selected = d.selected), rd && F.prop("selected", k.selected))) : ("" === d.id && v ? G = v: (G = w.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).text(d.label), j.push(k = {
                                element: G,
                                label: d.label,
                                id: d.id,
                                selected: d.selected
                            }), p.addOption(d.label, G), F ? F.after(G) : e.element.append(G), F = G);
                            for (D++; j.length > D;) d = j.pop(),
                            p.removeOption(d.label),
                            d.element.remove()
                        }
                        for (; A.length > C;) A.pop()[0].element.remove()
                    }
                    var k;
                    if (! (k = u.match(e))) throw xf("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", u, T(f));
                    var l = d(k[2] || k[1]),
                    m = k[4] || k[6],
                    n = k[5],
                    o = d(k[3] || ""),
                    q = d(k[2] ? k[1] : m),
                    r = d(k[7]),
                    y = k[8],
                    z = y ? d(k[8]) : null,
                    A = [[{
                        element: f,
                        label: ""
                    }]];
                    v && (a(v)(b), v.removeClass("ng-scope"), v.remove()),
                    f.empty(),
                    f.on("change",
                    function() {
                        b.$apply(function() {
                            var a, d, e, g, i, k, l, o, p, s = r(b) || [],
                            u = {};
                            if (t) {
                                for (e = [], k = 0, o = A.length; o > k; k++) for (a = A[k], i = 1, l = a.length; l > i; i++) if ((g = a[i].element)[0].selected) {
                                    if (d = g.val(), n && (u[n] = d), z) for (p = 0; p < s.length && (u[m] = s[p], z(b, u) != d); p++);
                                    else u[m] = s[d];
                                    e.push(q(b, u))
                                }
                            } else if (d = f.val(), "?" == d) e = c;
                            else if ("" === d) e = null;
                            else if (z) {
                                for (p = 0; p < s.length; p++) if (u[m] = s[p], z(b, u) == d) {
                                    e = q(b, u);
                                    break
                                }
                            } else u[m] = s[d],
                            n && (u[n] = d),
                            e = q(b, u);
                            h.$setViewValue(e),
                            j()
                        })
                    }),
                    h.$render = j,
                    b.$watchCollection(r, j),
                    b.$watchCollection(function() {
                        var a = {},
                        c = r(b);
                        if (c) {
                            for (var d = new Array(c.length), e = 0, f = c.length; f > e; e++) a[m] = c[e],
                            d[e] = l(b, a);
                            return d
                        }
                    },
                    j),
                    t && b.$watchCollection(function() {
                        return h.$modelValue
                    },
                    j)
                }
                if (k[1]) {
                    for (var o, p = k[0], q = k[1], t = j.multiple, u = j.ngOptions, v = !1, w = sd(b.createElement("option")), x = sd(b.createElement("optgroup")), y = w.clone(), z = 0, A = i.children(), B = A.length; B > z; z++) if ("" === A[z].value) {
                        o = v = A.eq(z);
                        break
                    }
                    p.init(q, v, y),
                    t && (q.$isEmpty = function(a) {
                        return ! a || 0 === a.length
                    }),
                    u ? n(h, i, q) : t ? m(h, i, q) : l(h, i, q, p)
                }
            }
        }
    }],
    Af = ["$interpolate",
    function(a) {
        var b = {
            addOption: o,
            removeOption: o
        };
        return {
            restrict: "E",
            priority: 100,
            compile: function(c, d) {
                if (r(d.value)) {
                    var e = a(c.text(), !0);
                    e || d.$set("value", c.text())
                }
                return function(a, c, d) {
                    var f = "$selectController",
                    g = c.parent(),
                    h = g.data(f) || g.parent().data(f);
                    h && h.databound ? c.prop("selected", !1) : h = b,
                    e ? a.$watch(e,
                    function(a, b) {
                        d.$set("value", a),
                        a !== b && h.removeOption(b),
                        h.addOption(a)
                    }) : h.addOption(d.value),
                    c.on("$destroy",
                    function() {
                        h.removeOption(d.value)
                    })
                }
            }
        }
    }],
    Bf = q({
        restrict: "E",
        terminal: !0
    });
    return a.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (ab(), hb(Ad), void sd(b).ready(function() {
        Z(b, $)
    }))
} (window, document),
!window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>'),
function(a, b) {
    "use strict";
    function c() {
        this.$get = ["$$sanitizeUri",
        function(a) {
            return function(b) {
                var c = [];
                return f(b, i(c,
                function(b, c) {
                    return ! /^unsafe/.test(a(b, c))
                })),
                c.join("")
            }
        }]
    }
    function d(a) {
        var c = [],
        d = i(c, b.noop);
        return d.chars(a),
        c.join("")
    }
    function e(a) {
        var b, c = {},
        d = a.split(",");
        for (b = 0; b < d.length; b++) c[d[b]] = !0;
        return c
    }
    function f(a, c) {
        function d(a, d, f, h) {
            if (d = b.lowercase(d), y[d]) for (; t.last() && z[t.last()];) e("", t.last());
            x[d] && t.last() == d && e("", d),
            h = u[d] || !!h,
            h || t.push(d);
            var i = {};
            f.replace(m,
            function(a, b, c, d, e) {
                var f = c || d || e || "";
                i[b] = g(f)
            }),
            c.start && c.start(d, i, h)
        }
        function e(a, d) {
            var e, f = 0;
            if (d = b.lowercase(d)) for (f = t.length - 1; f >= 0 && t[f] != d; f--);
            if (f >= 0) {
                for (e = t.length - 1; e >= f; e--) c.end && c.end(t[e]);
                t.length = f
            }
        }
        "string" != typeof a && (a = null === a || "undefined" == typeof a ? "": "" + a);
        var f, h, i, s, t = [],
        v = a;
        for (t.last = function() {
            return t[t.length - 1]
        }; a;) {
            if (s = "", h = !0, t.last() && B[t.last()] ? (a = a.replace(new RegExp("(.*)<\\s*\\/\\s*" + t.last() + "[^>]*>", "i"),
            function(a, b) {
                return b = b.replace(p, "$1").replace(r, "$1"),
                c.chars && c.chars(g(b)),
                ""
            }), e("", t.last())) : (0 === a.indexOf("<!--") ? (f = a.indexOf("--", 4), f >= 0 && a.lastIndexOf("-->", f) === f && (c.comment && c.comment(a.substring(4, f)), a = a.substring(f + 3), h = !1)) : q.test(a) ? (i = a.match(q), i && (a = a.replace(i[0], ""), h = !1)) : o.test(a) ? (i = a.match(l), i && (a = a.substring(i[0].length), i[0].replace(l, e), h = !1)) : n.test(a) && (i = a.match(k), i ? (i[4] && (a = a.substring(i[0].length), i[0].replace(k, d)), h = !1) : (s += "<", a = a.substring(1))), h && (f = a.indexOf("<"), s += 0 > f ? a: a.substring(0, f), a = 0 > f ? "": a.substring(f), c.chars && c.chars(g(s)))), a == v) throw j("badparse", "The sanitizer was unable to parse the following block of html: {0}", a);
            v = a
        }
        e()
    }
    function g(a) {
        if (!a) return "";
        var b = I.exec(a),
        c = b[1],
        d = b[3],
        e = b[2];
        return e && (H.innerHTML = e.replace(/</g, "&lt;"), e = "textContent" in H ? H.textContent: H.innerText),
        c + e + d
    }
    function h(a) {
        return a.replace(/&/g, "&amp;").replace(s,
        function(a) {
            var b = a.charCodeAt(0),
            c = a.charCodeAt(1);
            return "&#" + (1024 * (b - 55296) + (c - 56320) + 65536) + ";"
        }).replace(t,
        function(a) {
            return "&#" + a.charCodeAt(0) + ";"
        }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    function i(a, c) {
        var d = !1,
        e = b.bind(a, a.push);
        return {
            start: function(a, f, g) {
                a = b.lowercase(a),
                !d && B[a] && (d = a),
                d || C[a] !== !0 || (e("<"), e(a), b.forEach(f,
                function(d, f) {
                    var g = b.lowercase(f),
                    i = "img" === a && "src" === g || "background" === g;
                    G[g] !== !0 || D[g] === !0 && !c(d, i) || (e(" "), e(f), e('="'), e(h(d)), e('"'))
                }), e(g ? "/>": ">"))
            },
            end: function(a) {
                a = b.lowercase(a),
                d || C[a] !== !0 || (e("</"), e(a), e(">")),
                a == d && (d = !1)
            },
            chars: function(a) {
                d || e(h(a))
            }
        }
    }
    var j = b.$$minErr("$sanitize"),
    k = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
    l = /^<\/\s*([\w:-]+)[^>]*>/,
    m = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
    n = /^</,
    o = /^<\//,
    p = /<!--(.*?)-->/g,
    q = /<!DOCTYPE([^>]*?)>/i,
    r = /<!\[CDATA\[(.*?)]]>/g,
    s = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
    t = /([^\#-~| |!])/g,
    u = e("area,br,col,hr,img,wbr"),
    v = e("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
    w = e("rp,rt"),
    x = b.extend({},
    w, v),
    y = b.extend({},
    v, e("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
    z = b.extend({},
    w, e("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
    A = e("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use"),
    B = e("script,style"),
    C = b.extend({},
    u, y, z, x, A),
    D = e("background,cite,href,longdesc,src,usemap,xlink:href"),
    E = e("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width"),
    F = e("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan"),
    G = b.extend({},
    D, F, E),
    H = document.createElement("pre"),
    I = /^(\s*)([\s\S]*?)(\s*)$/;
    b.module("ngSanitize", []).provider("$sanitize", c),
    b.module("ngSanitize").filter("linky", ["$sanitize",
    function(a) {
        var c = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"]/,
        e = /^mailto:/;
        return function(f, g) {
            function h(a) {
                a && n.push(d(a))
            }
            function i(a, c) {
                n.push("<a "),
                b.isDefined(g) && (n.push('target="'), n.push(g), n.push('" ')),
                n.push('href="'),
                n.push(a),
                n.push('">'),
                h(c),
                n.push("</a>")
            }
            if (!f) return f;
            for (var j, k, l, m = f,
            n = []; j = m.match(c);) k = j[0],
            j[2] == j[3] && (k = "mailto:" + k),
            l = j.index,
            h(m.substr(0, l)),
            i(k, j[0].replace(e, "")),
            m = m.substring(l + j[0].length);
            return h(m),
            a(n.join(""))
        }
    }])
} (window, window.angular),
function(a) {
    var b, c = {
        className: "autosizejs",
        id: "autosizejs",
        append: "\n",
        callback: !1,
        resizeDelay: 10,
        placeholder: !0
    },
    d = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',
    e = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent", "whiteSpace"],
    f = a(d).data("autosize", !0)[0];
    f.style.lineHeight = "99px",
    "99px" === a(f).css("lineHeight") && e.push("lineHeight"),
    f.style.lineHeight = "",
    a.fn.autosize = function(d) {
        return this.length ? (d = a.extend({},
        c, d || {}), f.parentNode !== document.body && a(document.body).append(f), this.each(function() {
            function c() {
                var b, c = window.getComputedStyle ? window.getComputedStyle(m, null) : !1;
                c ? (b = m.getBoundingClientRect().width, (0 === b || "number" != typeof b) && (b = parseInt(c.width, 10)), a.each(["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"],
                function(a, d) {
                    b -= parseInt(c[d], 10)
                })) : b = n.width(),
                f.style.width = Math.max(b, 0) + "px"
            }
            function g() {
                var g = {};
                if (b = m, f.className = d.className, f.id = d.id, j = parseInt(n.css("maxHeight"), 10), a.each(e,
                function(a, b) {
                    g[b] = n.css(b)
                }), a(f).css(g).attr("wrap", n.attr("wrap")), c(), window.chrome) {
                    var h = m.style.width;
                    m.style.width = "0px"; {
                        m.offsetWidth
                    }
                    m.style.width = h
                }
            }
            function h() {
                var a, e;
                b !== m ? g() : c(),
                f.value = !m.value && d.placeholder ? n.attr("placeholder") || "": m.value,
                f.value += d.append || "",
                f.style.overflowY = m.style.overflowY,
                e = parseInt(m.style.height, 10),
                f.scrollTop = 0,
                f.scrollTop = 9e4,
                a = f.scrollTop,
                j && a > j ? (m.style.overflowY = "scroll", a = j) : (m.style.overflowY = "hidden", k > a && (a = k)),
                a += o,
                e !== a && (m.style.height = a + "px", p && d.callback.call(m, m), n.trigger("autosize.resized"))
            }
            function i() {
                clearTimeout(l),
                l = setTimeout(function() {
                    var a = n.width();
                    a !== r && (r = a, h())
                },
                parseInt(d.resizeDelay, 10))
            }
            var j, k, l, m = this,
            n = a(m),
            o = 0,
            p = a.isFunction(d.callback),
            q = {
                height: m.style.height,
                overflow: m.style.overflow,
                overflowY: m.style.overflowY,
                wordWrap: m.style.wordWrap,
                resize: m.style.resize
            },
            r = n.width(),
            s = n.css("resize");
            n.data("autosize") || (n.data("autosize", !0), ("border-box" === n.css("box-sizing") || "border-box" === n.css("-moz-box-sizing") || "border-box" === n.css("-webkit-box-sizing")) && (o = n.outerHeight() - n.height()), k = Math.max(parseInt(n.css("minHeight"), 10) - o || 0, n.height()), n.css({
                overflow: "hidden",
                overflowY: "hidden",
                wordWrap: "break-word"
            }), "vertical" === s ? n.css("resize", "none") : "both" === s && n.css("resize", "horizontal"), "onpropertychange" in m ? "oninput" in m ? n.on("input.autosize keyup.autosize", h) : n.on("propertychange.autosize",
            function() {
                "value" === event.propertyName && h()
            }) : n.on("input.autosize", h), d.resizeDelay !== !1 && a(window).on("resize.autosize", i), n.on("autosize.resize", h), n.on("autosize.resizeIncludeStyle",
            function() {
                b = null,
                h()
            }), n.on("autosize.destroy",
            function() {
                b = null,
                clearTimeout(l),
                a(window).off("resize", i),
                n.off("autosize").off(".autosize").css(q).removeData("autosize")
            }), h())
        })) : this
    }
} (jQuery || $),
!
function(a) {
    a.fn.ellipsis = function(b) {
        var c = {
            row: 1,
            onlyFullWords: !1,
            "char": "...",
            callback: function() {},
            position: "tail"
        };
        return b = a.extend(c, b),
        this.each(function() {
            var c = a(this),
            d = c.text(),
            e = d,
            f = e.length,
            g = c.height();
            c.text("a");
            var h = parseFloat(c.css("lineHeight"), 10),
            i = c.height(),
            j = h > i ? h - i: 0,
            k = j * (b.row - 1) + i * b.row;
            if (k >= g) return c.text(d),
            void b.callback.call(this);
            var l = 1,
            m = 0,
            n = d.length;
            if ("tail" === b.position) {
                for (; n > l;) m = Math.ceil((l + n) / 2),
                c.text(d.slice(0, m) + b["char"]),
                c.height() <= k ? l = m: n = m - 1;
                d = d.slice(0, l),
                b.onlyFullWords && (d = d.replace(/[\u00AD\w\uac00-\ud7af]+$/, "")),
                d += b["char"]
            } else if ("middle" === b.position) {
                for (var o = 0; n > l;) m = Math.ceil((l + n) / 2),
                o = Math.max(f - m, 0),
                c.text(e.slice(0, Math.floor((f - o) / 2)) + b["char"] + e.slice(Math.floor((f + o) / 2), f)),
                c.height() <= k ? l = m: n = m - 1;
                o = Math.max(f - l, 0);
                var p = e.slice(0, Math.floor((f - o) / 2)),
                q = e.slice(Math.floor((f + o) / 2), f);
                b.onlyFullWords && (p = p.replace(/[\u00AD\w\uac00-\ud7af]+$/, "")),
                d = p + b["char"] + q
            }
            c.text(d),
            b.callback.call(this)
        }),
        this
    }
} (jQuery),
function() {
    function a(a, b, c) {
        for (var d = (c || 0) - 1, e = a ? a.length: 0; ++d < e;) if (a[d] === b) return d;
        return - 1
    }
    function b(b, c) {
        var d = typeof c;
        if (b = b.cache, "boolean" == d || null == c) return b[c] ? 0 : -1;
        "number" != d && "string" != d && (d = "object");
        var e = "number" == d ? c: r + c;
        return b = (b = b[d]) && b[e],
        "object" == d ? b && a(b, c) > -1 ? 0 : -1 : b ? 0 : -1
    }
    function c(a) {
        var b = this.cache,
        c = typeof a;
        if ("boolean" == c || null == a) b[a] = !0;
        else {
            "number" != c && "string" != c && (c = "object");
            var d = "number" == c ? a: r + a,
            e = b[c] || (b[c] = {});
            "object" == c ? (e[d] || (e[d] = [])).push(a) : e[d] = !0
        }
    }
    function d(a) {
        return a.charCodeAt(0)
    }
    function e(a, b) {
        for (var c = a.criteria,
        d = b.criteria,
        e = -1,
        f = c.length; ++e < f;) {
            var g = c[e],
            h = d[e];
            if (g !== h) {
                if (g > h || "undefined" == typeof g) return 1;
                if (h > g || "undefined" == typeof h) return - 1
            }
        }
        return a.index - b.index
    }
    function f(a) {
        var b = -1,
        d = a.length,
        e = a[0],
        f = a[d / 2 | 0],
        g = a[d - 1];
        if (e && "object" == typeof e && f && "object" == typeof f && g && "object" == typeof g) return ! 1;
        var h = i();
        h["false"] = h["null"] = h["true"] = h.undefined = !1;
        var j = i();
        for (j.array = a, j.cache = h, j.push = c; ++b < d;) j.push(a[b]);
        return j
    }
    function g(a) {
        return "\\" + V[a]
    }
    function h() {
        return o.pop() || []
    }
    function i() {
        return p.pop() || {
            array: null,
            cache: null,
            criteria: null,
            "false": !1,
            index: 0,
            "null": !1,
            number: null,
            object: null,
            push: null,
            string: null,
            "true": !1,
            undefined: !1,
            value: null
        }
    }
    function j(a) {
        a.length = 0,
        o.length < t && o.push(a)
    }
    function k(a) {
        var b = a.cache;
        b && k(b),
        a.array = a.cache = a.criteria = a.object = a.number = a.string = a.value = null,
        p.length < t && p.push(a)
    }
    function l(a, b, c) {
        b || (b = 0),
        "undefined" == typeof c && (c = a ? a.length: 0);
        for (var d = -1,
        e = c - b || 0,
        f = Array(0 > e ? 0 : e); ++d < e;) f[d] = a[b + d];
        return f
    }
    function m(c) {
        function o(a) {
            return a && "object" == typeof a && !Zd(a) && Hd.call(a, "__wrapped__") ? a: new p(a)
        }
        function p(a, b) {
            this.__chain__ = !!b,
            this.__wrapped__ = a
        }
        function t(a) {
            function b() {
                if (d) {
                    var a = l(d);
                    Id.apply(a, arguments)
                }
                if (this instanceof b) {
                    var f = X(c.prototype),
                    g = c.apply(f, a || arguments);
                    return Eb(g) ? g: f
                }
                return c.apply(e, a || arguments)
            }
            var c = a[0],
            d = a[2],
            e = a[4];
            return Yd(b, a),
            b
        }
        function V(a, b, c, d, e) {
            if (c) {
                var f = c(a);
                if ("undefined" != typeof f) return f
            }
            var g = Eb(a);
            if (!g) return a;
            var i = Ad.call(a);
            if (!R[i]) return a;
            var k = Wd[i];
            switch (i) {
            case K:
            case L:
                return new k( + a);
            case N:
            case Q:
                return new k(a);
            case P:
                return f = k(a.source, z.exec(a)),
                f.lastIndex = a.lastIndex,
                f
            }
            var m = Zd(a);
            if (b) {
                var n = !d;
                d || (d = h()),
                e || (e = h());
                for (var o = d.length; o--;) if (d[o] == a) return e[o];
                f = m ? k(a.length) : {}
            } else f = m ? l(a) : ee({},
            a);
            return m && (Hd.call(a, "index") && (f.index = a.index), Hd.call(a, "input") && (f.input = a.input)),
            b ? (d.push(a), e.push(f), (m ? Yb: he)(a,
            function(a, g) {
                f[g] = V(a, b, c, d, e)
            }), n && (j(d), j(e)), f) : f
        }
        function X(a) {
            return Eb(a) ? Nd(a) : {}
        }
        function Y(a, b, c) {
            if ("function" != typeof a) return Zc;
            if ("undefined" == typeof b || !("prototype" in a)) return a;
            var d = a.__bindData__;
            if ("undefined" == typeof d && (Xd.funcNames && (d = !a.name), d = d || !Xd.funcDecomp, !d)) {
                var e = Fd.call(a);
                Xd.funcNames || (d = !A.test(e)),
                d || (d = E.test(e), Yd(a, d))
            }
            if (d === !1 || d !== !0 && 1 & d[1]) return a;
            switch (c) {
            case 1:
                return function(c) {
                    return a.call(b, c)
                };
            case 2:
                return function(c, d) {
                    return a.call(b, c, d)
                };
            case 3:
                return function(c, d, e) {
                    return a.call(b, c, d, e)
                };
            case 4:
                return function(c, d, e, f) {
                    return a.call(b, c, d, e, f)
                }
            }
            return Ic(a, b)
        }
        function Z(a) {
            function b() {
                var a = i ? g: this;
                if (e) {
                    var o = l(e);
                    Id.apply(o, arguments)
                }
                if ((f || k) && (o || (o = l(arguments)), f && Id.apply(o, f), k && o.length < h)) return d |= 16,
                Z([c, m ? d: -4 & d, o, null, g, h]);
                if (o || (o = arguments), j && (c = a[n]), this instanceof b) {
                    a = X(c.prototype);
                    var p = c.apply(a, o);
                    return Eb(p) ? p: a
                }
                return c.apply(a, o)
            }
            var c = a[0],
            d = a[1],
            e = a[2],
            f = a[3],
            g = a[4],
            h = a[5],
            i = 1 & d,
            j = 2 & d,
            k = 4 & d,
            m = 8 & d,
            n = c;
            return Yd(b, a),
            b
        }
        function $(c, d) {
            var e = -1,
            g = ib(),
            h = c ? c.length: 0,
            i = h >= s && g === a,
            j = [];
            if (i) {
                var l = f(d);
                l ? (g = b, d = l) : i = !1
            }
            for (; ++e < h;) {
                var m = c[e];
                g(d, m) < 0 && j.push(m)
            }
            return i && k(d),
            j
        }
        function ab(a, b, c, d) {
            for (var e = (d || 0) - 1, f = a ? a.length: 0, g = []; ++e < f;) {
                var h = a[e];
                if (h && "object" == typeof h && "number" == typeof h.length && (Zd(h) || mb(h))) {
                    b || (h = ab(h, b, c));
                    var i = -1,
                    j = h.length,
                    k = g.length;
                    for (g.length += j; ++i < j;) g[k++] = h[i]
                } else c || g.push(h)
            }
            return g
        }
        function bb(a, b, c, d, e, f) {
            if (c) {
                var g = c(a, b);
                if ("undefined" != typeof g) return !! g
            }
            if (a === b) return 0 !== a || 1 / a == 1 / b;
            var i = typeof a,
            k = typeof b;
            if (! (a !== a || a && U[i] || b && U[k])) return ! 1;
            if (null == a || null == b) return a === b;
            var l = Ad.call(a),
            m = Ad.call(b);
            if (l == I && (l = O), m == I && (m = O), l != m) return ! 1;
            switch (l) {
            case K:
            case L:
                return + a == +b;
            case N:
                return a != +a ? b != +b: 0 == a ? 1 / a == 1 / b: a == +b;
            case P:
            case Q:
                return a == vd(b)
            }
            var n = l == J;
            if (!n) {
                var o = Hd.call(a, "__wrapped__"),
                p = Hd.call(b, "__wrapped__");
                if (o || p) return bb(o ? a.__wrapped__: a, p ? b.__wrapped__: b, c, d, e, f);
                if (l != O) return ! 1;
                var q = a.constructor,
                r = b.constructor;
                if (q != r && !(Db(q) && q instanceof q && Db(r) && r instanceof r) && "constructor" in a && "constructor" in b) return ! 1
            }
            var s = !e;
            e || (e = h()),
            f || (f = h());
            for (var t = e.length; t--;) if (e[t] == a) return f[t] == b;
            var u = 0;
            if (g = !0, e.push(a), f.push(b), n) {
                if (t = a.length, u = b.length, g = u == t, g || d) for (; u--;) {
                    var v = t,
                    w = b[u];
                    if (d) for (; v--&&!(g = bb(a[v], w, c, d, e, f)););
                    else if (! (g = bb(a[u], w, c, d, e, f))) break
                }
            } else ge(b,
            function(b, h, i) {
                return Hd.call(i, h) ? (u++, g = Hd.call(a, h) && bb(a[h], b, c, d, e, f)) : void 0
            }),
            g && !d && ge(a,
            function(a, b, c) {
                return Hd.call(c, b) ? g = --u > -1 : void 0
            });
            return e.pop(),
            f.pop(),
            s && (j(e), j(f)),
            g
        }
        function cb(a, b, c, d, e) { (Zd(b) ? Yb: he)(b,
            function(b, f) {
                var g, h, i = b,
                j = a[f];
                if (b && ((h = Zd(b)) || ie(b))) {
                    for (var k = d.length; k--;) if (g = d[k] == b) {
                        j = e[k];
                        break
                    }
                    if (!g) {
                        var l;
                        c && (i = c(j, b), (l = "undefined" != typeof i) && (j = i)),
                        l || (j = h ? Zd(j) ? j: [] : ie(j) ? j: {}),
                        d.push(b),
                        e.push(j),
                        l || cb(j, b, c, d, e)
                    }
                } else c && (i = c(j, b), "undefined" == typeof i && (i = b)),
                "undefined" != typeof i && (j = i);
                a[f] = j
            })
        }
        function db(a, b) {
            return a + Ed(Vd() * (b - a + 1))
        }
        function eb(c, d, e) {
            var g = -1,
            i = ib(),
            l = c ? c.length: 0,
            m = [],
            n = !d && l >= s && i === a,
            o = e || n ? h() : m;
            if (n) {
                var p = f(o);
                i = b,
                o = p
            }
            for (; ++g < l;) {
                var q = c[g],
                r = e ? e(q, g, c) : q; (d ? !g || o[o.length - 1] !== r: i(o, r) < 0) && ((e || n) && o.push(r), m.push(q))
            }
            return n ? (j(o.array), k(o)) : e && j(o),
            m
        }
        function fb(a) {
            return function(b, c, d) {
                var e = {};
                c = o.createCallback(c, d, 3);
                var f = -1,
                g = b ? b.length: 0;
                if ("number" == typeof g) for (; ++f < g;) {
                    var h = b[f];
                    a(e, h, c(h, f, b), b)
                } else he(b,
                function(b, d, f) {
                    a(e, b, c(b, d, f), f)
                });
                return e
            }
        }
        function gb(a, b, c, d, e, f) {
            var g = 1 & b,
            h = 2 & b,
            i = 4 & b,
            j = 16 & b,
            k = 32 & b;
            if (!h && !Db(a)) throw new wd;
            j && !c.length && (b &= -17, j = c = !1),
            k && !d.length && (b &= -33, k = d = !1);
            var m = a && a.__bindData__;
            if (m && m !== !0) return m = l(m),
            m[2] && (m[2] = l(m[2])),
            m[3] && (m[3] = l(m[3])),
            !g || 1 & m[1] || (m[4] = e),
            !g && 1 & m[1] && (b |= 8),
            !i || 4 & m[1] || (m[5] = f),
            j && Id.apply(m[2] || (m[2] = []), c),
            k && Ld.apply(m[3] || (m[3] = []), d),
            m[1] |= b,
            gb.apply(null, m);
            var n = 1 == b || 17 === b ? t: Z;
            return n([a, b, c, d, e, f])
        }
        function hb(a) {
            return ae[a]
        }
        function ib() {
            var b = (b = o.indexOf) === rc ? a: b;
            return b
        }
        function jb(a) {
            return "function" == typeof a && Bd.test(a)
        }
        function kb(a) {
            var b, c;
            return a && Ad.call(a) == O && (b = a.constructor, !Db(b) || b instanceof b) ? (ge(a,
            function(a, b) {
                c = b
            }), "undefined" == typeof c || Hd.call(a, c)) : !1
        }
        function lb(a) {
            return be[a]
        }
        function mb(a) {
            return a && "object" == typeof a && "number" == typeof a.length && Ad.call(a) == I || !1
        }
        function nb(a, b, c, d) {
            return "boolean" != typeof b && null != b && (d = c, c = b, b = !1),
            V(a, b, "function" == typeof c && Y(c, d, 1))
        }
        function ob(a, b, c) {
            return V(a, !0, "function" == typeof b && Y(b, c, 1))
        }
        function pb(a, b) {
            var c = X(a);
            return b ? ee(c, b) : c
        }
        function qb(a, b, c) {
            var d;
            return b = o.createCallback(b, c, 3),
            he(a,
            function(a, c, e) {
                return b(a, c, e) ? (d = c, !1) : void 0
            }),
            d
        }
        function rb(a, b, c) {
            var d;
            return b = o.createCallback(b, c, 3),
            tb(a,
            function(a, c, e) {
                return b(a, c, e) ? (d = c, !1) : void 0
            }),
            d
        }
        function sb(a, b, c) {
            var d = [];
            ge(a,
            function(a, b) {
                d.push(b, a)
            });
            var e = d.length;
            for (b = Y(b, c, 3); e--&&b(d[e--], d[e], a) !== !1;);
            return a
        }
        function tb(a, b, c) {
            var d = _d(a),
            e = d.length;
            for (b = Y(b, c, 3); e--;) {
                var f = d[e];
                if (b(a[f], f, a) === !1) break
            }
            return a
        }
        function ub(a) {
            var b = [];
            return ge(a,
            function(a, c) {
                Db(a) && b.push(c)
            }),
            b.sort()
        }
        function vb(a, b) {
            return a ? Hd.call(a, b) : !1
        }
        function wb(a) {
            for (var b = -1,
            c = _d(a), d = c.length, e = {}; ++b < d;) {
                var f = c[b];
                e[a[f]] = f
            }
            return e
        }
        function xb(a) {
            return a === !0 || a === !1 || a && "object" == typeof a && Ad.call(a) == K || !1
        }
        function yb(a) {
            return a && "object" == typeof a && Ad.call(a) == L || !1
        }
        function zb(a) {
            return a && 1 === a.nodeType || !1
        }
        function Ab(a) {
            var b = !0;
            if (!a) return b;
            var c = Ad.call(a),
            d = a.length;
            return c == J || c == Q || c == I || c == O && "number" == typeof d && Db(a.splice) ? !d: (he(a,
            function() {
                return b = !1
            }), b)
        }
        function Bb(a, b, c, d) {
            return bb(a, b, "function" == typeof c && Y(c, d, 2))
        }
        function Cb(a) {
            return Pd(a) && !Qd(parseFloat(a))
        }
        function Db(a) {
            return "function" == typeof a
        }
        function Eb(a) {
            return ! (!a || !U[typeof a])
        }
        function Fb(a) {
            return Hb(a) && a != +a
        }
        function Gb(a) {
            return null === a
        }
        function Hb(a) {
            return "number" == typeof a || a && "object" == typeof a && Ad.call(a) == N || !1
        }
        function Ib(a) {
            return a && "object" == typeof a && Ad.call(a) == P || !1
        }
        function Jb(a) {
            return "string" == typeof a || a && "object" == typeof a && Ad.call(a) == Q || !1
        }
        function Kb(a) {
            return "undefined" == typeof a
        }
        function Lb(a, b, c) {
            var d = {};
            return b = o.createCallback(b, c, 3),
            he(a,
            function(a, c, e) {
                d[c] = b(a, c, e)
            }),
            d
        }
        function Mb(a) {
            var b = arguments,
            c = 2;
            if (!Eb(a)) return a;
            if ("number" != typeof b[2] && (c = b.length), c > 3 && "function" == typeof b[c - 2]) var d = Y(b[--c - 1], b[c--], 2);
            else c > 2 && "function" == typeof b[c - 1] && (d = b[--c]);
            for (var e = l(arguments, 1, c), f = -1, g = h(), i = h(); ++f < c;) cb(a, e[f], d, g, i);
            return j(g),
            j(i),
            a
        }
        function Nb(a, b, c) {
            var d = {};
            if ("function" != typeof b) {
                var e = [];
                ge(a,
                function(a, b) {
                    e.push(b)
                }),
                e = $(e, ab(arguments, !0, !1, 1));
                for (var f = -1,
                g = e.length; ++f < g;) {
                    var h = e[f];
                    d[h] = a[h]
                }
            } else b = o.createCallback(b, c, 3),
            ge(a,
            function(a, c, e) {
                b(a, c, e) || (d[c] = a)
            });
            return d
        }
        function Ob(a) {
            for (var b = -1,
            c = _d(a), d = c.length, e = nd(d); ++b < d;) {
                var f = c[b];
                e[b] = [f, a[f]]
            }
            return e
        }
        function Pb(a, b, c) {
            var d = {};
            if ("function" != typeof b) for (var e = -1,
            f = ab(arguments, !0, !1, 1), g = Eb(a) ? f.length: 0; ++e < g;) {
                var h = f[e];
                h in a && (d[h] = a[h])
            } else b = o.createCallback(b, c, 3),
            ge(a,
            function(a, c, e) {
                b(a, c, e) && (d[c] = a)
            });
            return d
        }
        function Qb(a, b, c, d) {
            var e = Zd(a);
            if (null == c) if (e) c = [];
            else {
                var f = a && a.constructor,
                g = f && f.prototype;
                c = X(g)
            }
            return b && (b = o.createCallback(b, d, 4), (e ? Yb: he)(a,
            function(a, d, e) {
                return b(c, a, d, e)
            })),
            c
        }
        function Rb(a) {
            for (var b = -1,
            c = _d(a), d = c.length, e = nd(d); ++b < d;) e[b] = a[c[b]];
            return e
        }
        function Sb(a) {
            for (var b = arguments,
            c = -1,
            d = ab(b, !0, !1, 1), e = b[2] && b[2][b[1]] === a ? 1 : d.length, f = nd(e); ++c < e;) f[c] = a[d[c]];
            return f
        }
        function Tb(a, b, c) {
            var d = -1,
            e = ib(),
            f = a ? a.length: 0,
            g = !1;
            return c = (0 > c ? Sd(0, f + c) : c) || 0,
            Zd(a) ? g = e(a, b, c) > -1 : "number" == typeof f ? g = (Jb(a) ? a.indexOf(b, c) : e(a, b, c)) > -1 : he(a,
            function(a) {
                return++d >= c ? !(g = a === b) : void 0
            }),
            g
        }
        function Ub(a, b, c) {
            var d = !0;
            b = o.createCallback(b, c, 3);
            var e = -1,
            f = a ? a.length: 0;
            if ("number" == typeof f) for (; ++e < f && (d = !!b(a[e], e, a)););
            else he(a,
            function(a, c, e) {
                return d = !!b(a, c, e)
            });
            return d
        }
        function Vb(a, b, c) {
            var d = [];
            b = o.createCallback(b, c, 3);
            var e = -1,
            f = a ? a.length: 0;
            if ("number" == typeof f) for (; ++e < f;) {
                var g = a[e];
                b(g, e, a) && d.push(g)
            } else he(a,
            function(a, c, e) {
                b(a, c, e) && d.push(a)
            });
            return d
        }
        function Wb(a, b, c) {
            b = o.createCallback(b, c, 3);
            var d = -1,
            e = a ? a.length: 0;
            if ("number" != typeof e) {
                var f;
                return he(a,
                function(a, c, d) {
                    return b(a, c, d) ? (f = a, !1) : void 0
                }),
                f
            }
            for (; ++d < e;) {
                var g = a[d];
                if (b(g, d, a)) return g
            }
        }
        function Xb(a, b, c) {
            var d;
            return b = o.createCallback(b, c, 3),
            Zb(a,
            function(a, c, e) {
                return b(a, c, e) ? (d = a, !1) : void 0
            }),
            d
        }
        function Yb(a, b, c) {
            var d = -1,
            e = a ? a.length: 0;
            if (b = b && "undefined" == typeof c ? b: Y(b, c, 3), "number" == typeof e) for (; ++d < e && b(a[d], d, a) !== !1;);
            else he(a, b);
            return a
        }
        function Zb(a, b, c) {
            var d = a ? a.length: 0;
            if (b = b && "undefined" == typeof c ? b: Y(b, c, 3), "number" == typeof d) for (; d--&&b(a[d], d, a) !== !1;);
            else {
                var e = _d(a);
                d = e.length,
                he(a,
                function(a, c, f) {
                    return c = e ? e[--d] : --d,
                    b(f[c], c, f)
                })
            }
            return a
        }
        function $b(a, b) {
            var c = l(arguments, 2),
            d = -1,
            e = "function" == typeof b,
            f = a ? a.length: 0,
            g = nd("number" == typeof f ? f: 0);
            return Yb(a,
            function(a) {
                g[++d] = (e ? b: a[b]).apply(a, c)
            }),
            g
        }
        function _b(a, b, c) {
            var d = -1,
            e = a ? a.length: 0;
            if (b = o.createCallback(b, c, 3), "number" == typeof e) for (var f = nd(e); ++d < e;) f[d] = b(a[d], d, a);
            else f = [],
            he(a,
            function(a, c, e) {
                f[++d] = b(a, c, e)
            });
            return f
        }
        function ac(a, b, c) {
            var e = -1 / 0,
            f = e;
            if ("function" != typeof b && c && c[b] === a && (b = null), null == b && Zd(a)) for (var g = -1,
            h = a.length; ++g < h;) {
                var i = a[g];
                i > f && (f = i)
            } else b = null == b && Jb(a) ? d: o.createCallback(b, c, 3),
            Yb(a,
            function(a, c, d) {
                var g = b(a, c, d);
                g > e && (e = g, f = a)
            });
            return f
        }
        function bc(a, b, c) {
            var e = 1 / 0,
            f = e;
            if ("function" != typeof b && c && c[b] === a && (b = null), null == b && Zd(a)) for (var g = -1,
            h = a.length; ++g < h;) {
                var i = a[g];
                f > i && (f = i)
            } else b = null == b && Jb(a) ? d: o.createCallback(b, c, 3),
            Yb(a,
            function(a, c, d) {
                var g = b(a, c, d);
                e > g && (e = g, f = a)
            });
            return f
        }
        function cc(a, b, c, d) {
            if (!a) return c;
            var e = arguments.length < 3;
            b = o.createCallback(b, d, 4);
            var f = -1,
            g = a.length;
            if ("number" == typeof g) for (e && (c = a[++f]); ++f < g;) c = b(c, a[f], f, a);
            else he(a,
            function(a, d, f) {
                c = e ? (e = !1, a) : b(c, a, d, f)
            });
            return c
        }
        function dc(a, b, c, d) {
            var e = arguments.length < 3;
            return b = o.createCallback(b, d, 4),
            Zb(a,
            function(a, d, f) {
                c = e ? (e = !1, a) : b(c, a, d, f)
            }),
            c
        }
        function ec(a, b, c) {
            return b = o.createCallback(b, c, 3),
            Vb(a,
            function(a, c, d) {
                return ! b(a, c, d)
            })
        }
        function fc(a, b, c) {
            if (a && "number" != typeof a.length && (a = Rb(a)), null == b || c) return a ? a[db(0, a.length - 1)] : n;
            var d = gc(a);
            return d.length = Td(Sd(0, b), d.length),
            d
        }
        function gc(a) {
            var b = -1,
            c = a ? a.length: 0,
            d = nd("number" == typeof c ? c: 0);
            return Yb(a,
            function(a) {
                var c = db(0, ++b);
                d[b] = d[c],
                d[c] = a
            }),
            d
        }
        function hc(a) {
            var b = a ? a.length: 0;
            return "number" == typeof b ? b: _d(a).length
        }
        function ic(a, b, c) {
            var d;
            b = o.createCallback(b, c, 3);
            var e = -1,
            f = a ? a.length: 0;
            if ("number" == typeof f) for (; ++e < f && !(d = b(a[e], e, a)););
            else he(a,
            function(a, c, e) {
                return ! (d = b(a, c, e))
            });
            return !! d
        }
        function jc(a, b, c) {
            var d = -1,
            f = Zd(b),
            g = a ? a.length: 0,
            l = nd("number" == typeof g ? g: 0);
            for (f || (b = o.createCallback(b, c, 3)), Yb(a,
            function(a, c, e) {
                var g = l[++d] = i();
                f ? g.criteria = _b(b,
                function(b) {
                    return a[b]
                }) : (g.criteria = h())[0] = b(a, c, e),
                g.index = d,
                g.value = a
            }), g = l.length, l.sort(e); g--;) {
                var m = l[g];
                l[g] = m.value,
                f || j(m.criteria),
                k(m)
            }
            return l
        }
        function kc(a) {
            return a && "number" == typeof a.length ? l(a) : Rb(a)
        }
        function lc(a) {
            for (var b = -1,
            c = a ? a.length: 0, d = []; ++b < c;) {
                var e = a[b];
                e && d.push(e)
            }
            return d
        }
        function mc(a) {
            return $(a, ab(arguments, !0, !0, 1))
        }
        function nc(a, b, c) {
            var d = -1,
            e = a ? a.length: 0;
            for (b = o.createCallback(b, c, 3); ++d < e;) if (b(a[d], d, a)) return d;
            return - 1
        }
        function oc(a, b, c) {
            var d = a ? a.length: 0;
            for (b = o.createCallback(b, c, 3); d--;) if (b(a[d], d, a)) return d;
            return - 1
        }
        function pc(a, b, c) {
            var d = 0,
            e = a ? a.length: 0;
            if ("number" != typeof b && null != b) {
                var f = -1;
                for (b = o.createCallback(b, c, 3); ++f < e && b(a[f], f, a);) d++
            } else if (d = b, null == d || c) return a ? a[0] : n;
            return l(a, 0, Td(Sd(0, d), e))
        }
        function qc(a, b, c, d) {
            return "boolean" != typeof b && null != b && (d = c, c = "function" != typeof b && d && d[b] === a ? null: b, b = !1),
            null != c && (a = _b(a, c, d)),
            ab(a, b)
        }
        function rc(b, c, d) {
            if ("number" == typeof d) {
                var e = b ? b.length: 0;
                d = 0 > d ? Sd(0, e + d) : d || 0
            } else if (d) {
                var f = Ac(b, c);
                return b[f] === c ? f: -1
            }
            return a(b, c, d)
        }
        function sc(a, b, c) {
            var d = 0,
            e = a ? a.length: 0;
            if ("number" != typeof b && null != b) {
                var f = e;
                for (b = o.createCallback(b, c, 3); f--&&b(a[f], f, a);) d++
            } else d = null == b || c ? 1 : b || d;
            return l(a, 0, Td(Sd(0, e - d), e))
        }
        function tc() {
            for (var c = [], d = -1, e = arguments.length, g = h(), i = ib(), l = i === a, m = h(); ++d < e;) {
                var n = arguments[d]; (Zd(n) || mb(n)) && (c.push(n), g.push(l && n.length >= s && f(d ? c[d] : m)))
            }
            var o = c[0],
            p = -1,
            q = o ? o.length: 0,
            r = [];
            a: for (; ++p < q;) {
                var t = g[0];
                if (n = o[p], (t ? b(t, n) : i(m, n)) < 0) {
                    for (d = e, (t || m).push(n); --d;) if (t = g[d], (t ? b(t, n) : i(c[d], n)) < 0) continue a;
                    r.push(n)
                }
            }
            for (; e--;) t = g[e],
            t && k(t);
            return j(g),
            j(m),
            r
        }
        function uc(a, b, c) {
            var d = 0,
            e = a ? a.length: 0;
            if ("number" != typeof b && null != b) {
                var f = e;
                for (b = o.createCallback(b, c, 3); f--&&b(a[f], f, a);) d++
            } else if (d = b, null == d || c) return a ? a[e - 1] : n;
            return l(a, Sd(0, e - d))
        }
        function vc(a, b, c) {
            var d = a ? a.length: 0;
            for ("number" == typeof c && (d = (0 > c ? Sd(0, d + c) : Td(c, d - 1)) + 1); d--;) if (a[d] === b) return d;
            return - 1
        }
        function wc(a) {
            for (var b = arguments,
            c = 0,
            d = b.length,
            e = a ? a.length: 0; ++c < d;) for (var f = -1,
            g = b[c]; ++f < e;) a[f] === g && (Kd.call(a, f--, 1), e--);
            return a
        }
        function xc(a, b, c) {
            a = +a || 0,
            c = "number" == typeof c ? c: +c || 1,
            null == b && (b = a, a = 0);
            for (var d = -1,
            e = Sd(0, Cd((b - a) / (c || 1))), f = nd(e); ++d < e;) f[d] = a,
            a += c;
            return f
        }
        function yc(a, b, c) {
            var d = -1,
            e = a ? a.length: 0,
            f = [];
            for (b = o.createCallback(b, c, 3); ++d < e;) {
                var g = a[d];
                b(g, d, a) && (f.push(g), Kd.call(a, d--, 1), e--)
            }
            return f
        }
        function zc(a, b, c) {
            if ("number" != typeof b && null != b) {
                var d = 0,
                e = -1,
                f = a ? a.length: 0;
                for (b = o.createCallback(b, c, 3); ++e < f && b(a[e], e, a);) d++
            } else d = null == b || c ? 1 : Sd(0, b);
            return l(a, d)
        }
        function Ac(a, b, c, d) {
            var e = 0,
            f = a ? a.length: e;
            for (c = c ? o.createCallback(c, d, 1) : Zc, b = c(b); f > e;) {
                var g = e + f >>> 1;
                c(a[g]) < b ? e = g + 1 : f = g
            }
            return e
        }
        function Bc() {
            return eb(ab(arguments, !0, !0))
        }
        function Cc(a, b, c, d) {
            return "boolean" != typeof b && null != b && (d = c, c = "function" != typeof b && d && d[b] === a ? null: b, b = !1),
            null != c && (c = o.createCallback(c, d, 3)),
            eb(a, b, c)
        }
        function Dc(a) {
            return $(a, l(arguments, 1))
        }
        function Ec() {
            for (var a = -1,
            b = arguments.length; ++a < b;) {
                var c = arguments[a];
                if (Zd(c) || mb(c)) var d = d ? eb($(d, c).concat($(c, d))) : c
            }
            return d || []
        }
        function Fc() {
            for (var a = arguments.length > 1 ? arguments: arguments[0], b = -1, c = a ? ac(me(a, "length")) : 0, d = nd(0 > c ? 0 : c); ++b < c;) d[b] = me(a, b);
            return d
        }
        function Gc(a, b) {
            var c = -1,
            d = a ? a.length: 0,
            e = {};
            for (b || !d || Zd(a[0]) || (b = []); ++c < d;) {
                var f = a[c];
                b ? e[f] = b[c] : f && (e[f[0]] = f[1])
            }
            return e
        }
        function Hc(a, b) {
            if (!Db(b)) throw new wd;
            return function() {
                return--a < 1 ? b.apply(this, arguments) : void 0
            }
        }
        function Ic(a, b) {
            return arguments.length > 2 ? gb(a, 17, l(arguments, 2), null, b) : gb(a, 1, null, null, b)
        }
        function Jc(a) {
            for (var b = arguments.length > 1 ? ab(arguments, !0, !1, 1) : ub(a), c = -1, d = b.length; ++c < d;) {
                var e = b[c];
                a[e] = gb(a[e], 1, null, null, a)
            }
            return a
        }
        function Kc(a, b) {
            return arguments.length > 2 ? gb(b, 19, l(arguments, 2), null, a) : gb(b, 3, null, null, a)
        }
        function Lc() {
            for (var a = arguments,
            b = a.length; b--;) if (!Db(a[b])) throw new wd;
            return function() {
                for (var b = arguments,
                c = a.length; c--;) b = [a[c].apply(this, b)];
                return b[0]
            }
        }
        function Mc(a, b) {
            return b = "number" == typeof b ? b: +b || a.length,
            gb(a, 4, null, null, null, b)
        }
        function Nc(a, b, c) {
            var d, e, f, g, h, i, j, k = 0,
            l = !1,
            m = !0;
            if (!Db(a)) throw new wd;
            if (b = Sd(0, b) || 0, c === !0) {
                var o = !0;
                m = !1
            } else Eb(c) && (o = c.leading, l = "maxWait" in c && (Sd(b, c.maxWait) || 0), m = "trailing" in c ? c.trailing: m);
            var p = function() {
                var c = b - (oe() - g);
                if (0 >= c) {
                    e && Dd(e);
                    var l = j;
                    e = i = j = n,
                    l && (k = oe(), f = a.apply(h, d), i || e || (d = h = null))
                } else i = Jd(p, c)
            },
            q = function() {
                i && Dd(i),
                e = i = j = n,
                (m || l !== b) && (k = oe(), f = a.apply(h, d), i || e || (d = h = null))
            };
            return function() {
                if (d = arguments, g = oe(), h = this, j = m && (i || !o), l === !1) var c = o && !i;
                else {
                    e || o || (k = g);
                    var n = l - (g - k),
                    r = 0 >= n;
                    r ? (e && (e = Dd(e)), k = g, f = a.apply(h, d)) : e || (e = Jd(q, n))
                }
                return r && i ? i = Dd(i) : i || b === l || (i = Jd(p, b)),
                c && (r = !0, f = a.apply(h, d)),
                !r || i || e || (d = h = null),
                f
            }
        }
        function Oc(a) {
            if (!Db(a)) throw new wd;
            var b = l(arguments, 1);
            return Jd(function() {
                a.apply(n, b)
            },
            1)
        }
        function Pc(a, b) {
            if (!Db(a)) throw new wd;
            var c = l(arguments, 2);
            return Jd(function() {
                a.apply(n, c)
            },
            b)
        }
        function Qc(a, b) {
            if (!Db(a)) throw new wd;
            var c = function() {
                var d = c.cache,
                e = b ? b.apply(this, arguments) : r + arguments[0];
                return Hd.call(d, e) ? d[e] : d[e] = a.apply(this, arguments)
            };
            return c.cache = {},
            c
        }
        function Rc(a) {
            var b, c;
            if (!Db(a)) throw new wd;
            return function() {
                return b ? c: (b = !0, c = a.apply(this, arguments), a = null, c)
            }
        }
        function Sc(a) {
            return gb(a, 16, l(arguments, 1))
        }
        function Tc(a) {
            return gb(a, 32, null, l(arguments, 1))
        }
        function Uc(a, b, c) {
            var d = !0,
            e = !0;
            if (!Db(a)) throw new wd;
            return c === !1 ? d = !1 : Eb(c) && (d = "leading" in c ? c.leading: d, e = "trailing" in c ? c.trailing: e),
            S.leading = d,
            S.maxWait = b,
            S.trailing = e,
            Nc(a, b, S)
        }
        function Vc(a, b) {
            return gb(b, 16, [a])
        }
        function Wc(a) {
            return function() {
                return a
            }
        }
        function Xc(a, b, c) {
            var d = typeof a;
            if (null == a || "function" == d) return Y(a, b, c);
            if ("object" != d) return bd(a);
            var e = _d(a),
            f = e[0],
            g = a[f];
            return 1 != e.length || g !== g || Eb(g) ?
            function(b) {
                for (var c = e.length,
                d = !1; c--&&(d = bb(b[e[c]], a[e[c]], null, !0)););
                return d
            }: function(a) {
                var b = a[f];
                return g === b && (0 !== g || 1 / g == 1 / b)
            }
        }
        function Yc(a) {
            return null == a ? "": vd(a).replace(de, hb)
        }
        function Zc(a) {
            return a
        }
        function $c(a, b, c) {
            var d = !0,
            e = b && ub(b);
            b && (c || e.length) || (null == c && (c = b), f = p, b = a, a = o, e = ub(b)),
            c === !1 ? d = !1 : Eb(c) && "chain" in c && (d = c.chain);
            var f = a,
            g = Db(f);
            Yb(e,
            function(c) {
                var e = a[c] = b[c];
                g && (f.prototype[c] = function() {
                    var b = this.__chain__,
                    c = this.__wrapped__,
                    g = [c];
                    Id.apply(g, arguments);
                    var h = e.apply(a, g);
                    if (d || b) {
                        if (c === h && Eb(h)) return this;
                        h = new f(h),
                        h.__chain__ = b
                    }
                    return h
                })
            })
        }
        function _c() {
            return c._ = zd,
            this
        }
        function ad() {}
        function bd(a) {
            return function(b) {
                return b[a]
            }
        }
        function cd(a, b, c) {
            var d = null == a,
            e = null == b;
            if (null == c && ("boolean" == typeof a && e ? (c = a, a = 1) : e || "boolean" != typeof b || (c = b, e = !0)), d && e && (b = 1), a = +a || 0, e ? (b = a, a = 0) : b = +b || 0, c || a % 1 || b % 1) {
                var f = Vd();
                return Td(a + f * (b - a + parseFloat("1e-" + ((f + "").length - 1))), b)
            }
            return db(a, b)
        }
        function dd(a, b) {
            if (a) {
                var c = a[b];
                return Db(c) ? a[b]() : c
            }
        }
        function ed(a, b, c) {
            var d = o.templateSettings;
            a = vd(a || ""),
            c = fe({},
            c, d);
            var e, f = fe({},
            c.imports, d.imports),
            h = _d(f),
            i = Rb(f),
            j = 0,
            k = c.interpolate || D,
            l = "__p += '",
            m = ud((c.escape || D).source + "|" + k.source + "|" + (k === B ? y: D).source + "|" + (c.evaluate || D).source + "|$", "g");
            a.replace(m,
            function(b, c, d, f, h, i) {
                return d || (d = f),
                l += a.slice(j, i).replace(F, g),
                c && (l += "' +\n__e(" + c + ") +\n'"),
                h && (e = !0, l += "';\n" + h + ";\n__p += '"),
                d && (l += "' +\n((__t = (" + d + ")) == null ? '' : __t) +\n'"),
                j = i + b.length,
                b
            }),
            l += "';\n";
            var p = c.variable,
            q = p;
            q || (p = "obj", l = "with (" + p + ") {\n" + l + "\n}\n"),
            l = (e ? l.replace(v, "") : l).replace(w, "$1").replace(x, "$1;"),
            l = "function(" + p + ") {\n" + (q ? "": p + " || (" + p + " = {});\n") + "var __t, __p = '', __e = _.escape" + (e ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n": ";\n") + l + "return __p\n}";
            var r = "\n/*\n//# sourceURL=" + (c.sourceURL || "/lodash/template/source[" + H+++"]") + "\n*/";
            try {
                var s = qd(h, "return " + l + r).apply(n, i)
            } catch(t) {
                throw t.source = l,
                t
            }
            return b ? s(b) : (s.source = l, s)
        }
        function fd(a, b, c) {
            a = (a = +a) > -1 ? a: 0;
            var d = -1,
            e = nd(a);
            for (b = Y(b, c, 1); ++d < a;) e[d] = b(d);
            return e
        }
        function gd(a) {
            return null == a ? "": vd(a).replace(ce, lb)
        }
        function hd(a) {
            var b = ++q;
            return vd(null == a ? "": a) + b
        }
        function id(a) {
            return a = new p(a),
            a.__chain__ = !0,
            a
        }
        function jd(a, b) {
            return b(a),
            a
        }
        function kd() {
            return this.__chain__ = !0,
            this
        }
        function ld() {
            return vd(this.__wrapped__)
        }
        function md() {
            return this.__wrapped__
        }
        c = c ? _.defaults(W.Object(), c, _.pick(W, G)) : W;
        var nd = c.Array,
        od = c.Boolean,
        pd = c.Date,
        qd = c.Function,
        rd = c.Math,
        sd = c.Number,
        td = c.Object,
        ud = c.RegExp,
        vd = c.String,
        wd = c.TypeError,
        xd = [],
        yd = td.prototype,
        zd = c._,
        Ad = yd.toString,
        Bd = ud("^" + vd(Ad).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
        Cd = rd.ceil,
        Dd = c.clearTimeout,
        Ed = rd.floor,
        Fd = qd.prototype.toString,
        Gd = jb(Gd = td.getPrototypeOf) && Gd,
        Hd = yd.hasOwnProperty,
        Id = xd.push,
        Jd = c.setTimeout,
        Kd = xd.splice,
        Ld = xd.unshift,
        Md = function() {
            try {
                var a = {},
                b = jb(b = td.defineProperty) && b,
                c = b(a, a, a) && b
            } catch(d) {}
            return c
        } (),
        Nd = jb(Nd = td.create) && Nd,
        Od = jb(Od = nd.isArray) && Od,
        Pd = c.isFinite,
        Qd = c.isNaN,
        Rd = jb(Rd = td.keys) && Rd,
        Sd = rd.max,
        Td = rd.min,
        Ud = c.parseInt,
        Vd = rd.random,
        Wd = {};
        Wd[J] = nd,
        Wd[K] = od,
        Wd[L] = pd,
        Wd[M] = qd,
        Wd[O] = td,
        Wd[N] = sd,
        Wd[P] = ud,
        Wd[Q] = vd,
        p.prototype = o.prototype;
        var Xd = o.support = {};
        Xd.funcDecomp = !jb(c.WinRTError) && E.test(m),
        Xd.funcNames = "string" == typeof qd.name,
        o.templateSettings = {
            escape: /<%-([\s\S]+?)%>/g,
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: B,
            variable: "",
            imports: {
                _: o
            }
        },
        Nd || (X = function() {
            function a() {}
            return function(b) {
                if (Eb(b)) {
                    a.prototype = b;
                    var d = new a;
                    a.prototype = null
                }
                return d || c.Object()
            }
        } ());
        var Yd = Md ?
        function(a, b) {
            T.value = b,
            Md(a, "__bindData__", T)
        }: ad,
        Zd = Od ||
        function(a) {
            return a && "object" == typeof a && "number" == typeof a.length && Ad.call(a) == J || !1
        },
        $d = function(a) {
            var b, c = a,
            d = [];
            if (!c) return d;
            if (!U[typeof a]) return d;
            for (b in c) Hd.call(c, b) && d.push(b);
            return d
        },
        _d = Rd ?
        function(a) {
            return Eb(a) ? Rd(a) : []
        }: $d,
        ae = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        },
        be = wb(ae),
        ce = ud("(" + _d(be).join("|") + ")", "g"),
        de = ud("[" + _d(ae).join("") + "]", "g"),
        ee = function(a, b, c) {
            var d, e = a,
            f = e;
            if (!e) return f;
            var g = arguments,
            h = 0,
            i = "number" == typeof c ? 2 : g.length;
            if (i > 3 && "function" == typeof g[i - 2]) var j = Y(g[--i - 1], g[i--], 2);
            else i > 2 && "function" == typeof g[i - 1] && (j = g[--i]);
            for (; ++h < i;) if (e = g[h], e && U[typeof e]) for (var k = -1,
            l = U[typeof e] && _d(e), m = l ? l.length: 0; ++k < m;) d = l[k],
            f[d] = j ? j(f[d], e[d]) : e[d];
            return f
        },
        fe = function(a, b, c) {
            var d, e = a,
            f = e;
            if (!e) return f;
            for (var g = arguments,
            h = 0,
            i = "number" == typeof c ? 2 : g.length; ++h < i;) if (e = g[h], e && U[typeof e]) for (var j = -1,
            k = U[typeof e] && _d(e), l = k ? k.length: 0; ++j < l;) d = k[j],
            "undefined" == typeof f[d] && (f[d] = e[d]);
            return f
        },
        ge = function(a, b, c) {
            var d, e = a,
            f = e;
            if (!e) return f;
            if (!U[typeof e]) return f;
            b = b && "undefined" == typeof c ? b: Y(b, c, 3);
            for (d in e) if (b(e[d], d, a) === !1) return f;
            return f
        },
        he = function(a, b, c) {
            var d, e = a,
            f = e;
            if (!e) return f;
            if (!U[typeof e]) return f;
            b = b && "undefined" == typeof c ? b: Y(b, c, 3);
            for (var g = -1,
            h = U[typeof e] && _d(e), i = h ? h.length: 0; ++g < i;) if (d = h[g], b(e[d], d, a) === !1) return f;
            return f
        },
        ie = Gd ?
        function(a) {
            if (!a || Ad.call(a) != O) return ! 1;
            var b = a.valueOf,
            c = jb(b) && (c = Gd(b)) && Gd(c);
            return c ? a == c || Gd(a) == c: kb(a)
        }: kb,
        je = fb(function(a, b, c) {
            Hd.call(a, c) ? a[c]++:a[c] = 1
        }),
        ke = fb(function(a, b, c) { (Hd.call(a, c) ? a[c] : a[c] = []).push(b)
        }),
        le = fb(function(a, b, c) {
            a[c] = b
        }),
        me = _b,
        ne = Vb,
        oe = jb(oe = pd.now) && oe ||
        function() {
            return (new pd).getTime()
        },
        pe = 8 == Ud(u + "08") ? Ud: function(a, b) {
            return Ud(Jb(a) ? a.replace(C, "") : a, b || 0)
        };
        return o.after = Hc,
        o.assign = ee,
        o.at = Sb,
        o.bind = Ic,
        o.bindAll = Jc,
        o.bindKey = Kc,
        o.chain = id,
        o.compact = lc,
        o.compose = Lc,
        o.constant = Wc,
        o.countBy = je,
        o.create = pb,
        o.createCallback = Xc,
        o.curry = Mc,
        o.debounce = Nc,
        o.defaults = fe,
        o.defer = Oc,
        o.delay = Pc,
        o.difference = mc,
        o.filter = Vb,
        o.flatten = qc,
        o.forEach = Yb,
        o.forEachRight = Zb,
        o.forIn = ge,
        o.forInRight = sb,
        o.forOwn = he,
        o.forOwnRight = tb,
        o.functions = ub,
        o.groupBy = ke,
        o.indexBy = le,
        o.initial = sc,
        o.intersection = tc,
        o.invert = wb,
        o.invoke = $b,
        o.keys = _d,
        o.map = _b,
        o.mapValues = Lb,
        o.max = ac,
        o.memoize = Qc,
        o.merge = Mb,
        o.min = bc,
        o.omit = Nb,
        o.once = Rc,
        o.pairs = Ob,
        o.partial = Sc,
        o.partialRight = Tc,
        o.pick = Pb,
        o.pluck = me,
        o.property = bd,
        o.pull = wc,
        o.range = xc,
        o.reject = ec,
        o.remove = yc,
        o.rest = zc,
        o.shuffle = gc,
        o.sortBy = jc,
        o.tap = jd,
        o.throttle = Uc,
        o.times = fd,
        o.toArray = kc,
        o.transform = Qb,
        o.union = Bc,
        o.uniq = Cc,
        o.values = Rb,
        o.where = ne,
        o.without = Dc,
        o.wrap = Vc,
        o.xor = Ec,
        o.zip = Fc,
        o.zipObject = Gc,
        o.collect = _b,
        o.drop = zc,
        o.each = Yb,
        o.eachRight = Zb,
        o.extend = ee,
        o.methods = ub,
        o.object = Gc,
        o.select = Vb,
        o.tail = zc,
        o.unique = Cc,
        o.unzip = Fc,
        $c(o),
        o.clone = nb,
        o.cloneDeep = ob,
        o.contains = Tb,
        o.escape = Yc,
        o.every = Ub,
        o.find = Wb,
        o.findIndex = nc,
        o.findKey = qb,
        o.findLast = Xb,
        o.findLastIndex = oc,
        o.findLastKey = rb,
        o.has = vb,
        o.identity = Zc,
        o.indexOf = rc,
        o.isArguments = mb,
        o.isArray = Zd,
        o.isBoolean = xb,
        o.isDate = yb,
        o.isElement = zb,
        o.isEmpty = Ab,
        o.isEqual = Bb,
        o.isFinite = Cb,
        o.isFunction = Db,
        o.isNaN = Fb,
        o.isNull = Gb,
        o.isNumber = Hb,
        o.isObject = Eb,
        o.isPlainObject = ie,
        o.isRegExp = Ib,
        o.isString = Jb,
        o.isUndefined = Kb,
        o.lastIndexOf = vc,
        o.mixin = $c,
        o.noConflict = _c,
        o.noop = ad,
        o.now = oe,
        o.parseInt = pe,
        o.random = cd,
        o.reduce = cc,
        o.reduceRight = dc,
        o.result = dd,
        o.runInContext = m,
        o.size = hc,
        o.some = ic,
        o.sortedIndex = Ac,
        o.template = ed,
        o.unescape = gd,
        o.uniqueId = hd,
        o.all = Ub,
        o.any = ic,
        o.detect = Wb,
        o.findWhere = Wb,
        o.foldl = cc,
        o.foldr = dc,
        o.include = Tb,
        o.inject = cc,
        $c(function() {
            var a = {};
            return he(o,
            function(b, c) {
                o.prototype[c] || (a[c] = b)
            }),
            a
        } (), !1),
        o.first = pc,
        o.last = uc,
        o.sample = fc,
        o.take = pc,
        o.head = pc,
        he(o,
        function(a, b) {
            var c = "sample" !== b;
            o.prototype[b] || (o.prototype[b] = function(b, d) {
                var e = this.__chain__,
                f = a(this.__wrapped__, b, d);
                return e || null != b && (!d || c && "function" == typeof b) ? new p(f, e) : f
            })
        }),
        o.VERSION = "2.4.1",
        o.prototype.chain = kd,
        o.prototype.toString = ld,
        o.prototype.value = md,
        o.prototype.valueOf = md,
        Yb(["join", "pop", "shift"],
        function(a) {
            var b = xd[a];
            o.prototype[a] = function() {
                var a = this.__chain__,
                c = b.apply(this.__wrapped__, arguments);
                return a ? new p(c, a) : c
            }
        }),
        Yb(["push", "reverse", "sort", "unshift"],
        function(a) {
            var b = xd[a];
            o.prototype[a] = function() {
                return b.apply(this.__wrapped__, arguments),
                this
            }
        }),
        Yb(["concat", "slice", "splice"],
        function(a) {
            var b = xd[a];
            o.prototype[a] = function() {
                return new p(b.apply(this.__wrapped__, arguments), this.__chain__)
            }
        }),
        o
    }
    var n, o = [],
    p = [],
    q = 0,
    r = +new Date + "",
    s = 75,
    t = 40,
    u = " 	\f ﻿\n\r\u2028\u2029 ᠎             　",
    v = /\b__p \+= '';/g,
    w = /\b(__p \+=) '' \+/g,
    x = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
    y = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
    z = /\w*$/,
    A = /^\s*function[ \n\r\t]+\w/,
    B = /<%=([\s\S]+?)%>/g,
    C = RegExp("^[" + u + "]*0+(?=.$)"),
    D = /($^)/,
    E = /\bthis\b/,
    F = /['\n\r\t\u2028\u2029\\]/g,
    G = ["Array", "Boolean", "Date", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"],
    H = 0,
    I = "[object Arguments]",
    J = "[object Array]",
    K = "[object Boolean]",
    L = "[object Date]",
    M = "[object Function]",
    N = "[object Number]",
    O = "[object Object]",
    P = "[object RegExp]",
    Q = "[object String]",
    R = {};
    R[M] = !1,
    R[I] = R[J] = R[K] = R[L] = R[N] = R[O] = R[P] = R[Q] = !0;
    var S = {
        leading: !1,
        maxWait: 0,
        trailing: !1
    },
    T = {
        configurable: !1,
        enumerable: !1,
        value: null,
        writable: !1
    },
    U = {
        "boolean": !1,
        "function": !0,
        object: !0,
        number: !1,
        string: !1,
        undefined: !1
    },
    V = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    },
    W = U[typeof window] && window || this,
    X = U[typeof exports] && exports && !exports.nodeType && exports,
    Y = U[typeof module] && module && !module.nodeType && module,
    Z = Y && Y.exports === X && X,
    $ = U[typeof global] && global; ! $ || $.global !== $ && $.window !== $ || (W = $);
    var _ = m();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (W._ = _, define(function() {
        return _
    })) : X && Y ? Z ? (Y.exports = _)._ = _: X._ = _: W._ = _
}.call(this),
function(a, b, c) {
    function d() {
        function d(a) {
            var b = n;
            return "undefined" != typeof b[a] ? b[a] : u[a]
        }
        function h(b) {
            var d = b || a.event,
            e = d.keyCode || d.which;
            if ( - 1 !== [9, 13, 32, 27].indexOf(e)) {
                for (var f = d.target || d.srcElement,
                g = -1,
                h = 0; h < G.length; h++) if (f === G[h]) {
                    g = h;
                    break
                }
                9 === e ? (f = -1 === g ? D: g === G.length - 1 ? G[0] : G[g + 1], K(d), f.focus(), i(f, r.confirmButtonColor)) : (f = 13 === e || 32 === e ? -1 === g ? D: c: 27 === e && r.allowEscapeKey === !0 ? E: c, f !== c && J(f, d))
            }
        }
        function l(b) {
            var c = b || a.event,
            d = c.target || c.srcElement,
            e = c.relatedTarget,
            f = x(z, "visible");
            if (f) {
                var g = -1;
                if (null !== e) {
                    for (var h = 0; h < G.length; h++) if (e === G[h]) {
                        g = h;
                        break
                    } - 1 === g && d.focus()
                } else q = d
            }
        }
        var n = arguments[0];
        if (arguments[0] === c) return m("SweetAlert expects at least 1 attribute!"),
        !1;
        var r = g({},
        u);
        switch (typeof arguments[0]) {
        case "string":
            r.title = arguments[0],
            r.text = arguments[1] || "",
            r.type = arguments[2] || "";
            break;
        case "object":
            if (arguments[0].title === c) return m('Missing "title" argument!'),
            !1;
            r.title = arguments[0].title;
            for (var s = ["text", "type", "customClass", "allowOutsideClick", "showCancelButton", "closeOnConfirm", "closeOnCancel", "timer", "confirmButtonColor", "cancelButtonText", "imageUrl", "imageSize", "html", "animation", "allowEscapeKey"], t = s.length, w = 0; t > w; w++) {
                var y = s[w];
                r[y] = d(y)
            }
            r.confirmButtonText = r.showCancelButton ? "Confirm": u.confirmButtonText,
            r.confirmButtonText = d("confirmButtonText"),
            r.doneFunction = arguments[1] || null;
            break;
        default:
            return m('Unexpected type of argument! Expected "string" or "object", got ' + typeof arguments[0]),
            !1
        }
        e(r),
        k(),
        j();
        for (var z = v(), A = function(b) {
            var c = b || a.event,
            d = c.target || c.srcElement,
            e = -1 !== d.className.indexOf("confirm"),
            g = x(z, "visible"),
            h = r.doneFunction && "true" === z.getAttribute("data-has-done-function");
            switch (c.type) {
            case "mouseover":
                e && (d.style.backgroundColor = f(r.confirmButtonColor, -.04));
                break;
            case "mouseout":
                e && (d.style.backgroundColor = r.confirmButtonColor);
                break;
            case "mousedown":
                e && (d.style.backgroundColor = f(r.confirmButtonColor, -.14));
                break;
            case "mouseup":
                e && (d.style.backgroundColor = f(r.confirmButtonColor, -.04));
                break;
            case "focus":
                var i = z.querySelector("button.confirm"),
                j = z.querySelector("button.cancel");
                e ? j.style.boxShadow = "none": i.style.boxShadow = "none";
                break;
            case "click":
                if (e && h && g) r.doneFunction(!0),
                r.closeOnConfirm && a.sweetAlert.close();
                else if (h && g) {
                    var k = String(r.doneFunction).replace(/\s/g, ""),
                    l = "function(" === k.substring(0, 9) && ")" !== k.substring(9, 10);
                    l && r.doneFunction(!1),
                    r.closeOnCancel && a.sweetAlert.close()
                } else a.sweetAlert.close()
            }
        },
        B = z.querySelectorAll("button"), C = 0; C < B.length; C++) B[C].onclick = A,
        B[C].onmouseover = A,
        B[C].onmouseout = A,
        B[C].onmousedown = A,
        B[C].onfocus = A;
        o = b.onclick,
        b.onclick = function(b) {
            var c = b || a.event,
            d = c.target || c.srcElement,
            e = z === d,
            f = F(z, d),
            g = x(z, "visible"),
            h = "true" === z.getAttribute("data-allow-ouside-click"); ! e && !f && g && h && a.sweetAlert.close()
        };
        var D = z.querySelector("button.confirm"),
        E = z.querySelector("button.cancel"),
        G = z.querySelectorAll("button[tabindex]");
        p = a.onkeydown,
        a.onkeydown = h,
        D.onblur = l,
        E.onblur = l,
        a.onfocus = function() {
            a.setTimeout(function() {
                q !== c && (q.focus(), q = c)
            },
            0)
        }
    }
    function e(a) {
        var b = v(),
        c = b.querySelector("h2"),
        d = b.querySelector("p"),
        e = b.querySelector("button.cancel"),
        f = b.querySelector("button.confirm");
        if (c.innerHTML = a.html ? a.title: A(a.title).split("\n").join("<br>"), d.innerHTML = a.html ? a.text: A(a.text || "").split("\n").join("<br>"), a.text && C(d), a.customClass) y(b, a.customClass),
        b.setAttribute("data-custom-class", a.customClass);
        else {
            var g = b.getAttribute("data-custom-class");
            z(b, g),
            b.setAttribute("data-custom-class", "")
        }
        if (E(b.querySelectorAll(".icon")), a.type && !l()) {
            for (var h = !1,
            j = 0; j < t.length; j++) if (a.type === t[j]) {
                h = !0;
                break
            }
            if (!h) return m("Unknown alert type: " + a.type),
            !1;
            var k = b.querySelector(".icon." + a.type);
            switch (C(k), a.type) {
            case "success":
                y(k, "animate"),
                y(k.querySelector(".tip"), "animateSuccessTip"),
                y(k.querySelector(".long"), "animateSuccessLong");
                break;
            case "error":
                y(k, "animateErrorIcon"),
                y(k.querySelector(".x-mark"), "animateXMark");
                break;
            case "warning":
                y(k, "pulseWarning"),
                y(k.querySelector(".body"), "pulseWarningIns"),
                y(k.querySelector(".dot"), "pulseWarningIns")
            }
        }
        if (a.imageUrl) {
            var n = b.querySelector(".icon.custom");
            n.style.backgroundImage = "url(" + a.imageUrl + ")",
            C(n);
            var o = 80,
            p = 80;
            if (a.imageSize) {
                var q = a.imageSize.toString().split("x"),
                r = q[0],
                s = q[1];
                r && s ? (o = r, p = s) : m("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + a.imageSize)
            }
            n.setAttribute("style", n.getAttribute("style") + "width:" + o + "px; height:" + p + "px")
        }
        b.setAttribute("data-has-cancel-button", a.showCancelButton),
        a.showCancelButton ? e.style.display = "inline-block": E(e),
        a.cancelButtonText && (e.innerHTML = A(a.cancelButtonText)),
        a.confirmButtonText && (f.innerHTML = A(a.confirmButtonText)),
        f.style.backgroundColor = a.confirmButtonColor,
        i(f, a.confirmButtonColor),
        b.setAttribute("data-allow-ouside-click", a.allowOutsideClick);
        var u = a.doneFunction ? !0 : !1;
        b.setAttribute("data-has-done-function", u),
        a.animation ? b.setAttribute("data-animation", "pop") : b.setAttribute("data-animation", "none"),
        b.setAttribute("data-timer", a.timer)
    }
    function f(a, b) {
        a = String(a).replace(/[^0-9a-f]/gi, ""),
        a.length < 6 && (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]),
        b = b || 0;
        var c, d, e = "#";
        for (d = 0; 3 > d; d++) c = parseInt(a.substr(2 * d, 2), 16),
        c = Math.round(Math.min(Math.max(0, c + c * b), 255)).toString(16),
        e += ("00" + c).substr(c.length);
        return e
    }
    function g(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    }
    function h(a) {
        var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
        return b ? parseInt(b[1], 16) + ", " + parseInt(b[2], 16) + ", " + parseInt(b[3], 16) : null
    }
    function i(a, b) {
        var c = h(b);
        a.style.boxShadow = "0 0 2px rgba(" + c + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
    }
    function j() {
        var c = v();
        H(w(), 10),
        C(c),
        y(c, "showSweetAlert"),
        z(c, "hideSweetAlert"),
        n = b.activeElement;
        var d = c.querySelector("button.confirm");
        d.focus(),
        setTimeout(function() {
            y(c, "visible")
        },
        500);
        var e = c.getAttribute("data-timer");
        "null" !== e && "" !== e && (c.timeout = setTimeout(function() {
            a.sweetAlert.close()
        },
        e))
    }
    function k() {
        var a = v();
        a.style.marginTop = G(v())
    }
    function l() {
        return a.attachEvent && !a.addEventListener ? !0 : !1
    }
    function m(b) {
        a.console && a.console.log("SweetAlert: " + b)
    }
    var n, o, p, q, r = ".sweet-alert",
    s = ".sweet-overlay",
    t = ["error", "warning", "info", "success"],
    u = {
        title: "",
        text: "",
        type: null,
        allowOutsideClick: !1,
        showCancelButton: !1,
        closeOnConfirm: !0,
        closeOnCancel: !0,
        confirmButtonText: "OK",
        confirmButtonColor: "#AEDEF4",
        cancelButtonText: "Cancel",
        imageUrl: null,
        imageSize: null,
        timer: null,
        customClass: "",
        html: !1,
        animation: !0,
        allowEscapeKey: !0
    },
    v = function() {
        var a = b.querySelector(r);
        return a || (sweetAlertInitialize(), a = v()),
        a
    },
    w = function() {
        return b.querySelector(s)
    },
    x = function(a, b) {
        return new RegExp(" " + b + " ").test(" " + a.className + " ")
    },
    y = function(a, b) {
        x(a, b) || (a.className += " " + b)
    },
    z = function(a, b) {
        var c = " " + a.className.replace(/[\t\r\n]/g, " ") + " ";
        if (x(a, b)) {
            for (; c.indexOf(" " + b + " ") >= 0;) c = c.replace(" " + b + " ", " ");
            a.className = c.replace(/^\s+|\s+$/g, "")
        }
    },
    A = function(a) {
        var c = b.createElement("div");
        return c.appendChild(b.createTextNode(a)),
        c.innerHTML
    },
    B = function(a) {
        a.style.opacity = "",
        a.style.display = "block"
    },
    C = function(a) {
        if (a && !a.length) return B(a);
        for (var b = 0; b < a.length; ++b) B(a[b])
    },
    D = function(a) {
        a.style.opacity = "",
        a.style.display = "none"
    },
    E = function(a) {
        if (a && !a.length) return D(a);
        for (var b = 0; b < a.length; ++b) D(a[b])
    },
    F = function(a, b) {
        for (var c = b.parentNode; null !== c;) {
            if (c === a) return ! 0;
            c = c.parentNode
        }
        return ! 1
    },
    G = function(a) {
        a.style.left = "-9999px",
        a.style.display = "block";
        var b, c = a.clientHeight;
        return b = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(a).getPropertyValue("padding"), 10) : parseInt(a.currentStyle.padding),
        a.style.left = "",
        a.style.display = "none",
        "-" + parseInt(c / 2 + b) + "px"
    },
    H = function(a, b) {
        if ( + a.style.opacity < 1) {
            b = b || 16,
            a.style.opacity = 0,
            a.style.display = "block";
            var c = +new Date,
            d = function() {
                a.style.opacity = +a.style.opacity + (new Date - c) / 100,
                c = +new Date,
                +a.style.opacity < 1 && setTimeout(d, b)
            };
            d()
        }
        a.style.display = "block"
    },
    I = function(a, b) {
        b = b || 16,
        a.style.opacity = 1;
        var c = +new Date,
        d = function() {
            a.style.opacity = +a.style.opacity - (new Date - c) / 100,
            c = +new Date,
            +a.style.opacity > 0 ? setTimeout(d, b) : a.style.display = "none"
        };
        d()
    },
    J = function(c) {
        if ("function" == typeof MouseEvent) {
            var d = new MouseEvent("click", {
                view: a,
                bubbles: !1,
                cancelable: !0
            });
            c.dispatchEvent(d)
        } else if (b.createEvent) {
            var e = b.createEvent("MouseEvents");
            e.initEvent("click", !1, !1),
            c.dispatchEvent(e)
        } else b.createEventObject ? c.fireEvent("onclick") : "function" == typeof c.onclick && c.onclick()
    },
    K = function(b) {
        "function" == typeof b.stopPropagation ? (b.stopPropagation(), b.preventDefault()) : a.event && a.event.hasOwnProperty("cancelBubble") && (a.event.cancelBubble = !0)
    };
    a.sweetAlertInitialize = function() {
        var a = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert" tabIndex="-1"><div class="icon error"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="icon warning"> <span class="body"></span> <span class="dot"></span> </div> <div class="icon info"></div> <div class="icon success"> <span class="line tip"></span> <span class="line long"></span> <div class="placeholder"></div> <div class="fix"></div> </div> <div class="icon custom"></div> <h2>Title</h2><p>Text</p><button class="cancel" tabIndex="2">Cancel</button><button class="confirm" tabIndex="1">OK</button></div>',
        c = b.createElement("div");
        for (c.innerHTML = a; c.firstChild;) b.body.appendChild(c.firstChild)
    },
    a.sweetAlert = a.swal = function() {
        var a = arguments;
        if (null !== v()) d.apply(this, a);
        else var b = setInterval(function() {
            null !== v() && (clearInterval(b), d.apply(this, a))
        },
        100)
    },
    a.sweetAlert.setDefaults = a.swal.setDefaults = function(a) {
        if (!a) throw new Error("userParams is required");
        if ("object" != typeof a) throw new Error("userParams has to be a object");
        g(u, a)
    },
    a.sweetAlert.close = a.swal.close = function() {
        var d = v();
        I(w(), 5),
        I(d, 5),
        z(d, "showSweetAlert"),
        y(d, "hideSweetAlert"),
        z(d, "visible");
        var e = d.querySelector(".icon.success");
        z(e, "animate"),
        z(e.querySelector(".tip"), "animateSuccessTip"),
        z(e.querySelector(".long"), "animateSuccessLong");
        var f = d.querySelector(".icon.error");
        z(f, "animateErrorIcon"),
        z(f.querySelector(".x-mark"), "animateXMark");
        var g = d.querySelector(".icon.warning");
        z(g, "pulseWarning"),
        z(g.querySelector(".body"), "pulseWarningIns"),
        z(g.querySelector(".dot"), "pulseWarningIns"),
        a.onkeydown = p,
        b.onclick = o,
        n && n.focus(),
        q = c,
        clearTimeout(d.timeout)
    }
} (window, document),
function(a, b) {
    "function" == typeof define && define.amd ? define([],
    function() {
        return a.returnExportsGlobal = b()
    }) : "object" == typeof exports ? module.exports = b() : a.Autolinker = b()
} (this,
function() {
    var a = function(b) {
        a.Util.assign(this, b),
        this.matchValidator = new a.MatchValidator
    };
    return a.prototype = {
        constructor: a,
        urls: !0,
        email: !0,
        twitter: !0,
        newWindow: !0,
        stripPrefix: !0,
        className: "",
        htmlCharacterEntitiesRegex: /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,
        matcherRegex: function() {
            var a = /(^|[^\w])@(\w{1,15})/,
            b = /(?:[\-;:&=\+\$,\w\.]+@)/,
            c = /(?:[A-Za-z][-.+A-Za-z0-9]+:(?![A-Za-z][-.+A-Za-z0-9]+:\/\/)(?!\d+\/?)(?:\/\/)?)/,
            d = /(?:www\.)/,
            e = /[A-Za-z0-9\.\-]*[A-Za-z0-9\-]/,
            f = /\.(?:international|construction|contractors|enterprises|photography|productions|foundation|immobilien|industries|management|properties|technology|christmas|community|directory|education|equipment|institute|marketing|solutions|vacations|bargains|boutique|builders|catering|cleaning|clothing|computer|democrat|diamonds|graphics|holdings|lighting|partners|plumbing|supplies|training|ventures|academy|careers|company|cruises|domains|exposed|flights|florist|gallery|guitars|holiday|kitchen|neustar|okinawa|recipes|rentals|reviews|shiksha|singles|support|systems|agency|berlin|camera|center|coffee|condos|dating|estate|events|expert|futbol|kaufen|luxury|maison|monash|museum|nagoya|photos|repair|report|social|supply|tattoo|tienda|travel|viajes|villas|vision|voting|voyage|actor|build|cards|cheap|codes|dance|email|glass|house|mango|ninja|parts|photo|shoes|solar|today|tokyo|tools|watch|works|aero|arpa|asia|best|bike|blue|buzz|camp|club|cool|coop|farm|fish|gift|guru|info|jobs|kiwi|kred|land|limo|link|menu|mobi|moda|name|pics|pink|post|qpon|rich|ruhr|sexy|tips|vote|voto|wang|wien|wiki|zone|bar|bid|biz|cab|cat|ceo|com|edu|gov|int|kim|mil|net|onl|org|pro|pub|red|tel|uno|wed|xxx|xyz|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)\b/,
            g = /[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]?!:,.;]*[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]]/;
            return new RegExp(["(", a.source, ")", "|", "(", b.source, e.source, f.source, ")", "|", "(", "(?:", "(", c.source, e.source, ")", "|", "(?:", "(.?//)?", d.source, e.source, ")", "|", "(?:", "(.?//)?", e.source, f.source, ")", ")", "(?:" + g.source + ")?", ")"].join(""), "gi")
        } (),
        charBeforeProtocolRelMatchRegex: /^(.)?\/\//,
        link: function(b) {
            var c = this,
            d = this.getHtmlParser(),
            e = this.htmlCharacterEntitiesRegex,
            f = 0,
            g = [];
            return d.parse(b, {
                processHtmlNode: function(a, b, c) {
                    "a" === b && (c ? f = Math.max(f - 1, 0) : f++),
                    g.push(a)
                },
                processTextNode: function(b) {
                    if (0 === f) for (var d = a.Util.splitAndCapture(b, e), h = 0, i = d.length; i > h; h++) {
                        var j = d[h],
                        k = c.processTextNode(j);
                        g.push(k)
                    } else g.push(b)
                }
            }),
            g.join("")
        },
        getHtmlParser: function() {
            var b = this.htmlParser;
            return b || (b = this.htmlParser = new a.HtmlParser),
            b
        },
        getTagBuilder: function() {
            var b = this.tagBuilder;
            return b || (b = this.tagBuilder = new a.AnchorTagBuilder({
                newWindow: this.newWindow,
                truncate: this.truncate,
                className: this.className
            })),
            b
        },
        processTextNode: function(a) {
            var b = this;
            return a.replace(this.matcherRegex,
            function(a, c, d, e, f, g, h, i, j) {
                var k = b.processCandidateMatch(a, c, d, e, f, g, h, i, j);
                if (k) {
                    var l = b.createMatchReturnVal(k.match, k.matchStr);
                    return k.prefixStr + l + k.suffixStr
                }
                return a
            })
        },
        processCandidateMatch: function(b, c, d, e, f, g, h, i, j) {
            var k, l = i || j,
            m = "",
            n = "";
            if (c && !this.twitter || f && !this.email || g && !this.urls || !this.matchValidator.isValidMatch(g, h, l)) return null;
            if (this.matchHasUnbalancedClosingParen(b) && (b = b.substr(0, b.length - 1), n = ")"), f) k = new a.match.Email({
                matchedText: b,
                email: f
            });
            else if (c) d && (m = d, b = b.slice(1)),
            k = new a.match.Twitter({
                matchedText: b,
                twitterHandle: e
            });
            else {
                if (l) {
                    var o = l.match(this.charBeforeProtocolRelMatchRegex)[1] || "";
                    o && (m = o, b = b.slice(1))
                }
                k = new a.match.Url({
                    matchedText: b,
                    url: b,
                    protocolUrlMatch: !!h,
                    protocolRelativeMatch: !!l,
                    stripPrefix: this.stripPrefix
                })
            }
            return {
                prefixStr: m,
                suffixStr: n,
                matchStr: b,
                match: k
            }
        },
        matchHasUnbalancedClosingParen: function(a) {
            var b = a.charAt(a.length - 1);
            if (")" === b) {
                var c = a.match(/\(/g),
                d = a.match(/\)/g),
                e = c && c.length || 0,
                f = d && d.length || 0;
                if (f > e) return ! 0
            }
            return ! 1
        },
        createMatchReturnVal: function(b, c) {
            var d;
            if (this.replaceFn && (d = this.replaceFn.call(this, this, b)), "string" == typeof d) return d;
            if (d === !1) return c;
            if (d instanceof a.HtmlTag) return d.toString();
            var e = this.getTagBuilder(),
            f = e.build(b);
            return f.toString()
        }
    },
    a.link = function(b, c) {
        var d = new a(c);
        return d.link(b)
    },
    a.match = {},
    a.Util = {
        abstractMethod: function() {
            throw "abstract"
        },
        assign: function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
            return a
        },
        extend: function(b, c) {
            var d = b.prototype,
            e = function() {};
            e.prototype = d;
            var f;
            f = c.hasOwnProperty("constructor") ? c.constructor: function() {
                d.constructor.apply(this, arguments)
            };
            var g = f.prototype = new e;
            return g.constructor = f,
            g.superclass = d,
            delete c.constructor,
            a.Util.assign(g, c),
            f
        },
        ellipsis: function(a, b, c) {
            return a.length > b && (c = null == c ? "..": c, a = a.substring(0, b - c.length) + c),
            a
        },
        indexOf: function(a, b) {
            if (Array.prototype.indexOf) return a.indexOf(b);
            for (var c = 0,
            d = a.length; d > c; c++) if (a[c] === b) return c;
            return - 1
        },
        splitAndCapture: function(a, b) {
            if (!b.global) throw new Error("`splitRegex` must have the 'g' flag set");
            for (var c, d = [], e = 0; c = b.exec(a);) d.push(a.substring(e, c.index)),
            d.push(c[0]),
            e = c.index + c[0].length;
            return d.push(a.substring(e)),
            d
        }
    },
    a.HtmlParser = a.Util.extend(Object, {
        htmlRegex: function() {
            var a = /[0-9a-zA-Z][0-9a-zA-Z:]*/,
            b = /[^\s\0"'>\/=\x01-\x1F\x7F]+/,
            c = /(?:"[^"]*?"|'[^']*?'|[^'"=<>`\s]+)/,
            d = b.source + "(?:\\s*=\\s*" + c.source + ")?";
            return new RegExp(["(?:", "<(!DOCTYPE)", "(?:", "\\s+", "(?:", d, "|", c.source + ")", ")*", ">", ")", "|", "(?:", "<(/)?", "(" + a.source + ")", "(?:", "\\s+", d, ")*", "\\s*/?", ">", ")"].join(""), "gi")
        } (),
        parse: function(a, b) {
            b = b || {};
            for (var c, d = b.processHtmlNode ||
            function() {},
            e = b.processTextNode ||
            function() {},
            f = this.htmlRegex, g = 0; null !== (c = f.exec(a));) {
                var h = c[0],
                i = c[1] || c[3],
                j = !!c[2],
                k = a.substring(g, c.index);
                k && e(k),
                d(h, i.toLowerCase(), j),
                g = c.index + h.length
            }
            if (g < a.length) {
                var l = a.substring(g);
                l && e(l)
            }
        }
    }),
    a.HtmlTag = a.Util.extend(Object, {
        whitespaceRegex: /\s+/,
        constructor: function(b) {
            a.Util.assign(this, b),
            this.innerHtml = this.innerHtml || this.innerHTML
        },
        setTagName: function(a) {
            return this.tagName = a,
            this
        },
        getTagName: function() {
            return this.tagName || ""
        },
        setAttr: function(a, b) {
            var c = this.getAttrs();
            return c[a] = b,
            this
        },
        getAttr: function(a) {
            return this.getAttrs()[a]
        },
        setAttrs: function(b) {
            var c = this.getAttrs();
            return a.Util.assign(c, b),
            this
        },
        getAttrs: function() {
            return this.attrs || (this.attrs = {})
        },
        setClass: function(a) {
            return this.setAttr("class", a)
        },
        addClass: function(b) {
            for (var c, d = this.getClass(), e = this.whitespaceRegex, f = a.Util.indexOf, g = d ? d.split(e) : [], h = b.split(e); c = h.shift();) - 1 === f(g, c) && g.push(c);
            return this.getAttrs()["class"] = g.join(" "),
            this
        },
        removeClass: function(b) {
            for (var c, d = this.getClass(), e = this.whitespaceRegex, f = a.Util.indexOf, g = d ? d.split(e) : [], h = b.split(e); g.length && (c = h.shift());) {
                var i = f(g, c); - 1 !== i && g.splice(i, 1)
            }
            return this.getAttrs()["class"] = g.join(" "),
            this
        },
        getClass: function() {
            return this.getAttrs()["class"] || ""
        },
        hasClass: function(a) {
            return - 1 !== (" " + this.getClass() + " ").indexOf(" " + a + " ")
        },
        setInnerHtml: function(a) {
            return this.innerHtml = a,
            this
        },
        getInnerHtml: function() {
            return this.innerHtml || ""
        },
        toString: function() {
            var a = this.getTagName(),
            b = this.buildAttrsStr();
            return b = b ? " " + b: "",
            ["<", a, b, ">", this.getInnerHtml(), "</", a, ">"].join("")
        },
        buildAttrsStr: function() {
            if (!this.attrs) return "";
            var a = this.getAttrs(),
            b = [];
            for (var c in a) a.hasOwnProperty(c) && b.push(c + '="' + a[c] + '"');
            return b.join(" ")
        }
    }),
    a.MatchValidator = a.Util.extend(Object, {
        invalidProtocolRelMatchRegex: /^[\w]\/\//,
        hasFullProtocolRegex: /^[A-Za-z][-.+A-Za-z0-9]+:\/\//,
        uriSchemeRegex: /^[A-Za-z][-.+A-Za-z0-9]+:/,
        hasWordCharAfterProtocolRegex: /:[^\s]*?[A-Za-z]/,
        isValidMatch: function(a, b, c) {
            return b && !this.isValidUriScheme(b) || this.urlMatchDoesNotHaveProtocolOrDot(a, b) || this.urlMatchDoesNotHaveAtLeastOneWordChar(a, b) || this.isInvalidProtocolRelativeMatch(c) ? !1 : !0
        },
        isValidUriScheme: function(a) {
            var b = a.match(this.uriSchemeRegex)[0];
            return "javascript:" !== b && "vbscript:" !== b
        },
        urlMatchDoesNotHaveProtocolOrDot: function(a, b) {
            return ! (!a || b && this.hasFullProtocolRegex.test(b) || -1 !== a.indexOf("."))
        },
        urlMatchDoesNotHaveAtLeastOneWordChar: function(a, b) {
            return a && b ? !this.hasWordCharAfterProtocolRegex.test(a) : !1
        },
        isInvalidProtocolRelativeMatch: function(a) {
            return !! a && this.invalidProtocolRelMatchRegex.test(a)
        }
    }),
    a.AnchorTagBuilder = a.Util.extend(Object, {
        constructor: function(b) {
            a.Util.assign(this, b)
        },
        build: function(b) {
            var c = new a.HtmlTag({
                tagName: "a",
                attrs: this.createAttrs(b.getType(), b.getAnchorHref()),
                innerHtml: this.processAnchorText(b.getAnchorText())
            });
            return c
        },
        createAttrs: function(a, b) {
            var c = {
                href: b
            },
            d = this.createCssClass(a);
            return d && (c["class"] = d),
            this.newWindow && (c.target = "_blank"),
            c
        },
        createCssClass: function(a) {
            var b = this.className;
            return b ? b + " " + b + "-" + a: ""
        },
        processAnchorText: function(a) {
            return a = this.doTruncate(a)
        },
        doTruncate: function(b) {
            return a.Util.ellipsis(b, this.truncate || Number.POSITIVE_INFINITY)
        }
    }),
    a.match.Match = a.Util.extend(Object, {
        constructor: function(b) {
            a.Util.assign(this, b)
        },
        getType: a.Util.abstractMethod,
        getMatchedText: function() {
            return this.matchedText
        },
        getAnchorHref: a.Util.abstractMethod,
        getAnchorText: a.Util.abstractMethod
    }),
    a.match.Email = a.Util.extend(a.match.Match, {
        getType: function() {
            return "email"
        },
        getEmail: function() {
            return this.email
        },
        getAnchorHref: function() {
            return "mailto:" + this.email
        },
        getAnchorText: function() {
            return this.email
        }
    }),
    a.match.Twitter = a.Util.extend(a.match.Match, {
        getType: function() {
            return "twitter"
        },
        getTwitterHandle: function() {
            return this.twitterHandle
        },
        getAnchorHref: function() {
            return "https://twitter.com/" + this.twitterHandle
        },
        getAnchorText: function() {
            return "@" + this.twitterHandle
        }
    }),
    a.match.Url = a.Util.extend(a.match.Match, {
        urlPrefixRegex: /^(https?:\/\/)?(www\.)?/i,
        protocolRelativeRegex: /^\/\//,
        protocolPrepended: !1,
        getType: function() {
            return "url"
        },
        getUrl: function() {
            var a = this.url;
            return this.protocolRelativeMatch || this.protocolUrlMatch || this.protocolPrepended || (a = this.url = "http://" + a, this.protocolPrepended = !0),
            a
        },
        getAnchorHref: function() {
            var a = this.getUrl();
            return a.replace(/&amp;/g, "&")
        },
        getAnchorText: function() {
            var a = this.getUrl();
            return this.protocolRelativeMatch && (a = this.stripProtocolRelativePrefix(a)),
            this.stripPrefix && (a = this.stripUrlPrefix(a)),
            a = this.removeTrailingSlash(a)
        },
        stripUrlPrefix: function(a) {
            return a.replace(this.urlPrefixRegex, "")
        },
        stripProtocolRelativePrefix: function(a) {
            return a.replace(this.protocolRelativeRegex, "")
        },
        removeTrailingSlash: function(a) {
            return "/" === a.charAt(a.length - 1) && (a = a.slice(0, -1)),
            a
        }
    }),
    a
}),
function(a) {
    function b(a, b, c) {
        switch (arguments.length) {
        case 2:
            return null != a ? a: b;
        case 3:
            return null != a ? a: null != b ? b: c;
        default:
            throw new Error("Implement me")
        }
    }
    function c(a, b) {
        return Bb.call(a, b)
    }
    function d() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }
    function e(a) {
        vb.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + a)
    }
    function f(a, b) {
        var c = !0;
        return o(function() {
            return c && (e(a), c = !1),
            b.apply(this, arguments)
        },
        b)
    }
    function g(a, b) {
        sc[a] || (e(b), sc[a] = !0)
    }
    function h(a, b) {
        return function(c) {
            return r(a.call(this, c), b)
        }
    }
    function i(a, b) {
        return function(c) {
            return this.localeData().ordinal(a.call(this, c), b)
        }
    }
    function j(a, b) {
        var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
        f = a.clone().add(e, "months");
        return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)),
        -(e + d)
    }
    function k(a, b, c) {
        var d;
        return null == c ? b: null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b
    }
    function l() {}
    function m(a, b) {
        b !== !1 && H(a),
        p(this, a),
        this._d = new Date( + a._d),
        uc === !1 && (uc = !0, vb.updateOffset(this), uc = !1)
    }
    function n(a) {
        var b = A(a),
        c = b.year || 0,
        d = b.quarter || 0,
        e = b.month || 0,
        f = b.week || 0,
        g = b.day || 0,
        h = b.hour || 0,
        i = b.minute || 0,
        j = b.second || 0,
        k = b.millisecond || 0;
        this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h,
        this._days = +g + 7 * f,
        this._months = +e + 3 * d + 12 * c,
        this._data = {},
        this._locale = vb.localeData(),
        this._bubble()
    }
    function o(a, b) {
        for (var d in b) c(b, d) && (a[d] = b[d]);
        return c(b, "toString") && (a.toString = b.toString),
        c(b, "valueOf") && (a.valueOf = b.valueOf),
        a
    }
    function p(a, b) {
        var c, d, e;
        if ("undefined" != typeof b._isAMomentObject && (a._isAMomentObject = b._isAMomentObject), "undefined" != typeof b._i && (a._i = b._i), "undefined" != typeof b._f && (a._f = b._f), "undefined" != typeof b._l && (a._l = b._l), "undefined" != typeof b._strict && (a._strict = b._strict), "undefined" != typeof b._tzm && (a._tzm = b._tzm), "undefined" != typeof b._isUTC && (a._isUTC = b._isUTC), "undefined" != typeof b._offset && (a._offset = b._offset), "undefined" != typeof b._pf && (a._pf = b._pf), "undefined" != typeof b._locale && (a._locale = b._locale), Kb.length > 0) for (c in Kb) d = Kb[c],
        e = b[d],
        "undefined" != typeof e && (a[d] = e);
        return a
    }
    function q(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    }
    function r(a, b, c) {
        for (var d = "" + Math.abs(a), e = a >= 0; d.length < b;) d = "0" + d;
        return (e ? c ? "+": "": "-") + d
    }
    function s(a, b) {
        var c = {
            milliseconds: 0,
            months: 0
        };
        return c.months = b.month() - a.month() + 12 * (b.year() - a.year()),
        a.clone().add(c.months, "M").isAfter(b) && --c.months,
        c.milliseconds = +b - +a.clone().add(c.months, "M"),
        c
    }
    function t(a, b) {
        var c;
        return b = M(b, a),
        a.isBefore(b) ? c = s(a, b) : (c = s(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months),
        c
    }
    function u(a, b) {
        return function(c, d) {
            var e, f;
            return null === d || isNaN( + d) || (g(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f),
            c = "string" == typeof c ? +c: c,
            e = vb.duration(c, d),
            v(this, e, a),
            this
        }
    }
    function v(a, b, c, d) {
        var e = b._milliseconds,
        f = b._days,
        g = b._months;
        d = null == d ? !0 : d,
        e && a._d.setTime( + a._d + e * c),
        f && pb(a, "Date", ob(a, "Date") + f * c),
        g && nb(a, ob(a, "Month") + g * c),
        d && vb.updateOffset(a, f || g)
    }
    function w(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }
    function x(a) {
        return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
    }
    function y(a, b, c) {
        var d, e = Math.min(a.length, b.length),
        f = Math.abs(a.length - b.length),
        g = 0;
        for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && C(a[d]) !== C(b[d])) && g++;
        return g + f
    }
    function z(a) {
        if (a) {
            var b = a.toLowerCase().replace(/(.)s$/, "$1");
            a = lc[a] || mc[b] || b
        }
        return a
    }
    function A(a) {
        var b, d, e = {};
        for (d in a) c(a, d) && (b = z(d), b && (e[b] = a[d]));
        return e
    }
    function B(b) {
        var c, d;
        if (0 === b.indexOf("week")) c = 7,
        d = "day";
        else {
            if (0 !== b.indexOf("month")) return;
            c = 12,
            d = "month"
        }
        vb[b] = function(e, f) {
            var g, h, i = vb._locale[b],
            j = [];
            if ("number" == typeof e && (f = e, e = a), h = function(a) {
                var b = vb().utc().set(d, a);
                return i.call(vb._locale, b, e || "")
            },
            null != f) return h(f);
            for (g = 0; c > g; g++) j.push(h(g));
            return j
        }
    }
    function C(a) {
        var b = +a,
        c = 0;
        return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)),
        c
    }
    function D(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }
    function E(a, b, c) {
        return jb(vb([a, 11, 31 + b - c]), b, c).week
    }
    function F(a) {
        return G(a) ? 366 : 365
    }
    function G(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }
    function H(a) {
        var b;
        a._a && -2 === a._pf.overflow && (b = a._a[Db] < 0 || a._a[Db] > 11 ? Db: a._a[Eb] < 1 || a._a[Eb] > D(a._a[Cb], a._a[Db]) ? Eb: a._a[Fb] < 0 || a._a[Fb] > 24 || 24 === a._a[Fb] && (0 !== a._a[Gb] || 0 !== a._a[Hb] || 0 !== a._a[Ib]) ? Fb: a._a[Gb] < 0 || a._a[Gb] > 59 ? Gb: a._a[Hb] < 0 || a._a[Hb] > 59 ? Hb: a._a[Ib] < 0 || a._a[Ib] > 999 ? Ib: -1, a._pf._overflowDayOfYear && (Cb > b || b > Eb) && (b = Eb), a._pf.overflow = b)
    }
    function I(b) {
        return null == b._isValid && (b._isValid = !isNaN(b._d.getTime()) && b._pf.overflow < 0 && !b._pf.empty && !b._pf.invalidMonth && !b._pf.nullInput && !b._pf.invalidFormat && !b._pf.userInvalidated, b._strict && (b._isValid = b._isValid && 0 === b._pf.charsLeftOver && 0 === b._pf.unusedTokens.length && b._pf.bigHour === a)),
        b._isValid
    }
    function J(a) {
        return a ? a.toLowerCase().replace("_", "-") : a
    }
    function K(a) {
        for (var b, c, d, e, f = 0; f < a.length;) {
            for (e = J(a[f]).split("-"), b = e.length, c = J(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                if (d = L(e.slice(0, b).join("-"))) return d;
                if (c && c.length >= b && y(e, c, !0) >= b - 1) break;
                b--
            }
            f++
        }
        return null
    }
    function L(a) {
        var b = null;
        if (!Jb[a] && Lb) try {
            b = vb.locale(),
            require("./locale/" + a),
            vb.locale(b)
        } catch(c) {}
        return Jb[a]
    }
    function M(a, b) {
        var c, d;
        return b._isUTC ? (c = b.clone(), d = (vb.isMoment(a) || x(a) ? +a: +vb(a)) - +c, c._d.setTime( + c._d + d), vb.updateOffset(c, !1), c) : vb(a).local()
    }
    function N(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }
    function O(a) {
        var b, c, d = a.match(Pb);
        for (b = 0, c = d.length; c > b; b++) d[b] = rc[d[b]] ? rc[d[b]] : N(d[b]);
        return function(e) {
            var f = "";
            for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
            return f
        }
    }
    function P(a, b) {
        return a.isValid() ? (b = Q(b, a.localeData()), nc[b] || (nc[b] = O(b)), nc[b](a)) : a.localeData().invalidDate()
    }
    function Q(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a
        }
        var d = 5;
        for (Qb.lastIndex = 0; d >= 0 && Qb.test(a);) a = a.replace(Qb, c),
        Qb.lastIndex = 0,
        d -= 1;
        return a
    }
    function R(a, b) {
        var c, d = b._strict;
        switch (a) {
        case "Q":
            return _b;
        case "DDDD":
            return bc;
        case "YYYY":
        case "GGGG":
        case "gggg":
            return d ? cc: Tb;
        case "Y":
        case "G":
        case "g":
            return ec;
        case "YYYYYY":
        case "YYYYY":
        case "GGGGG":
        case "ggggg":
            return d ? dc: Ub;
        case "S":
            if (d) return _b;
        case "SS":
            if (d) return ac;
        case "SSS":
            if (d) return bc;
        case "DDD":
            return Sb;
        case "MMM":
        case "MMMM":
        case "dd":
        case "ddd":
        case "dddd":
            return Wb;
        case "a":
        case "A":
            return b._locale._meridiemParse;
        case "x":
            return Zb;
        case "X":
            return $b;
        case "Z":
        case "ZZ":
            return Xb;
        case "T":
            return Yb;
        case "SSSS":
            return Vb;
        case "MM":
        case "DD":
        case "YY":
        case "GG":
        case "gg":
        case "HH":
        case "hh":
        case "mm":
        case "ss":
        case "ww":
        case "WW":
            return d ? ac: Rb;
        case "M":
        case "D":
        case "d":
        case "H":
        case "h":
        case "m":
        case "s":
        case "w":
        case "W":
        case "e":
        case "E":
            return Rb;
        case "Do":
            return d ? b._locale._ordinalParse: b._locale._ordinalParseLenient;
        default:
            return c = new RegExp($(Z(a.replace("\\", "")), "i"))
        }
    }
    function S(a) {
        a = a || "";
        var b = a.match(Xb) || [],
        c = b[b.length - 1] || [],
        d = (c + "").match(jc) || ["-", 0, 0],
        e = +(60 * d[1]) + C(d[2]);
        return "+" === d[0] ? e: -e
    }
    function T(a, b, c) {
        var d, e = c._a;
        switch (a) {
        case "Q":
            null != b && (e[Db] = 3 * (C(b) - 1));
            break;
        case "M":
        case "MM":
            null != b && (e[Db] = C(b) - 1);
            break;
        case "MMM":
        case "MMMM":
            d = c._locale.monthsParse(b, a, c._strict),
            null != d ? e[Db] = d: c._pf.invalidMonth = b;
            break;
        case "D":
        case "DD":
            null != b && (e[Eb] = C(b));
            break;
        case "Do":
            null != b && (e[Eb] = C(parseInt(b.match(/\d{1,2}/)[0], 10)));
            break;
        case "DDD":
        case "DDDD":
            null != b && (c._dayOfYear = C(b));
            break;
        case "YY":
            e[Cb] = vb.parseTwoDigitYear(b);
            break;
        case "YYYY":
        case "YYYYY":
        case "YYYYYY":
            e[Cb] = C(b);
            break;
        case "a":
        case "A":
            c._meridiem = b;
            break;
        case "h":
        case "hh":
            c._pf.bigHour = !0;
        case "H":
        case "HH":
            e[Fb] = C(b);
            break;
        case "m":
        case "mm":
            e[Gb] = C(b);
            break;
        case "s":
        case "ss":
            e[Hb] = C(b);
            break;
        case "S":
        case "SS":
        case "SSS":
        case "SSSS":
            e[Ib] = C(1e3 * ("0." + b));
            break;
        case "x":
            c._d = new Date(C(b));
            break;
        case "X":
            c._d = new Date(1e3 * parseFloat(b));
            break;
        case "Z":
        case "ZZ":
            c._useUTC = !0,
            c._tzm = S(b);
            break;
        case "dd":
        case "ddd":
        case "dddd":
            d = c._locale.weekdaysParse(b),
            null != d ? (c._w = c._w || {},
            c._w.d = d) : c._pf.invalidWeekday = b;
            break;
        case "w":
        case "ww":
        case "W":
        case "WW":
        case "d":
        case "e":
        case "E":
            a = a.substr(0, 1);
        case "gggg":
        case "GGGG":
        case "GGGGG":
            a = a.substr(0, 2),
            b && (c._w = c._w || {},
            c._w[a] = C(b));
            break;
        case "gg":
        case "GG":
            c._w = c._w || {},
            c._w[a] = vb.parseTwoDigitYear(b)
        }
    }
    function U(a) {
        var c, d, e, f, g, h, i;
        c = a._w,
        null != c.GG || null != c.W || null != c.E ? (g = 1, h = 4, d = b(c.GG, a._a[Cb], jb(vb(), 1, 4).year), e = b(c.W, 1), f = b(c.E, 1)) : (g = a._locale._week.dow, h = a._locale._week.doy, d = b(c.gg, a._a[Cb], jb(vb(), g, h).year), e = b(c.w, 1), null != c.d ? (f = c.d, g > f && ++e) : f = null != c.e ? c.e + g: g),
        i = kb(d, e, f, h, g),
        a._a[Cb] = i.year,
        a._dayOfYear = i.dayOfYear
    }
    function V(a) {
        var c, d, e, f, g = [];
        if (!a._d) {
            for (e = X(a), a._w && null == a._a[Eb] && null == a._a[Db] && U(a), a._dayOfYear && (f = b(a._a[Cb], e[Cb]), a._dayOfYear > F(f) && (a._pf._overflowDayOfYear = !0), d = fb(f, 0, a._dayOfYear), a._a[Db] = d.getUTCMonth(), a._a[Eb] = d.getUTCDate()), c = 0; 3 > c && null == a._a[c]; ++c) a._a[c] = g[c] = e[c];
            for (; 7 > c; c++) a._a[c] = g[c] = null == a._a[c] ? 2 === c ? 1 : 0 : a._a[c];
            24 === a._a[Fb] && 0 === a._a[Gb] && 0 === a._a[Hb] && 0 === a._a[Ib] && (a._nextDay = !0, a._a[Fb] = 0),
            a._d = (a._useUTC ? fb: eb).apply(null, g),
            null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm),
            a._nextDay && (a._a[Fb] = 24)
        }
    }
    function W(a) {
        var b;
        a._d || (b = A(a._i), a._a = [b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], V(a))
    }
    function X(a) {
        var b = new Date;
        return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
    }
    function Y(b) {
        if (b._f === vb.ISO_8601) return void ab(b);
        b._a = [],
        b._pf.empty = !0;
        var c, d, e, f, g, h = "" + b._i,
        i = h.length,
        j = 0;
        for (e = Q(b._f, b._locale).match(Pb) || [], c = 0; c < e.length; c++) f = e[c],
        d = (h.match(R(f, b)) || [])[0],
        d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && b._pf.unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length),
        rc[f] ? (d ? b._pf.empty = !1 : b._pf.unusedTokens.push(f), T(f, d, b)) : b._strict && !d && b._pf.unusedTokens.push(f);
        b._pf.charsLeftOver = i - j,
        h.length > 0 && b._pf.unusedInput.push(h),
        b._pf.bigHour === !0 && b._a[Fb] <= 12 && (b._pf.bigHour = a),
        b._a[Fb] = k(b._locale, b._a[Fb], b._meridiem),
        V(b),
        H(b)
    }
    function Z(a) {
        return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
        function(a, b, c, d, e) {
            return b || c || d || e
        })
    }
    function $(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function _(a) {
        var b, c, e, f, g;
        if (0 === a._f.length) return a._pf.invalidFormat = !0,
        void(a._d = new Date(0 / 0));
        for (f = 0; f < a._f.length; f++) g = 0,
        b = p({},
        a),
        null != a._useUTC && (b._useUTC = a._useUTC),
        b._pf = d(),
        b._f = a._f[f],
        Y(b),
        I(b) && (g += b._pf.charsLeftOver, g += 10 * b._pf.unusedTokens.length, b._pf.score = g, (null == e || e > g) && (e = g, c = b));
        o(a, c || b)
    }
    function ab(a) {
        var b, c, d = a._i,
        e = fc.exec(d);
        if (e) {
            for (a._pf.iso = !0, b = 0, c = hc.length; c > b; b++) if (hc[b][1].exec(d)) {
                a._f = hc[b][0] + (e[6] || " ");
                break
            }
            for (b = 0, c = ic.length; c > b; b++) if (ic[b][1].exec(d)) {
                a._f += ic[b][0];
                break
            }
            d.match(Xb) && (a._f += "Z"),
            Y(a)
        } else a._isValid = !1
    }
    function bb(a) {
        ab(a),
        a._isValid === !1 && (delete a._isValid, vb.createFromInputFallback(a))
    }
    function cb(a, b) {
        var c, d = [];
        for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
        return d
    }
    function db(b) {
        var c, d = b._i;
        d === a ? b._d = new Date: x(d) ? b._d = new Date( + d) : null !== (c = Mb.exec(d)) ? b._d = new Date( + c[1]) : "string" == typeof d ? bb(b) : w(d) ? (b._a = cb(d.slice(0),
        function(a) {
            return parseInt(a, 10)
        }), V(b)) : "object" == typeof d ? W(b) : "number" == typeof d ? b._d = new Date(d) : vb.createFromInputFallback(b)
    }
    function eb(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return 1970 > a && h.setFullYear(a),
        h
    }
    function fb(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return 1970 > a && b.setUTCFullYear(a),
        b
    }
    function gb(a, b) {
        if ("string" == typeof a) if (isNaN(a)) {
            if (a = b.weekdaysParse(a), "number" != typeof a) return null
        } else a = parseInt(a, 10);
        return a
    }
    function hb(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }
    function ib(a, b, c) {
        var d = vb.duration(a).abs(),
        e = Ab(d.as("s")),
        f = Ab(d.as("m")),
        g = Ab(d.as("h")),
        h = Ab(d.as("d")),
        i = Ab(d.as("M")),
        j = Ab(d.as("y")),
        k = e < oc.s && ["s", e] || 1 === f && ["m"] || f < oc.m && ["mm", f] || 1 === g && ["h"] || g < oc.h && ["hh", g] || 1 === h && ["d"] || h < oc.d && ["dd", h] || 1 === i && ["M"] || i < oc.M && ["MM", i] || 1 === j && ["y"] || ["yy", j];
        return k[2] = b,
        k[3] = +a > 0,
        k[4] = c,
        hb.apply({},
        k)
    }
    function jb(a, b, c) {
        var d, e = c - b,
        f = c - a.day();
        return f > e && (f -= 7),
        e - 7 > f && (f += 7),
        d = vb(a).add(f, "d"),
        {
            week: Math.ceil(d.dayOfYear() / 7),
            year: d.year()
        }
    }
    function kb(a, b, c, d, e) {
        var f, g, h = fb(a, 0, 1).getUTCDay();
        return h = 0 === h ? 7 : h,
        c = null != c ? c: e,
        f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0),
        g = 7 * (b - 1) + (c - e) + f + 1,
        {
            year: g > 0 ? a: a - 1,
            dayOfYear: g > 0 ? g: F(a - 1) + g
        }
    }
    function lb(b) {
        var c, d = b._i,
        e = b._f;
        return b._locale = b._locale || vb.localeData(b._l),
        null === d || e === a && "" === d ? vb.invalid({
            nullInput: !0
        }) : ("string" == typeof d && (b._i = d = b._locale.preparse(d)), vb.isMoment(d) ? new m(d, !0) : (e ? w(e) ? _(b) : Y(b) : db(b), c = new m(b), c._nextDay && (c.add(1, "d"), c._nextDay = a), c))
    }
    function mb(a, b) {
        var c, d;
        if (1 === b.length && w(b[0]) && (b = b[0]), !b.length) return vb();
        for (c = b[0], d = 1; d < b.length; ++d) b[d][a](c) && (c = b[d]);
        return c
    }
    function nb(a, b) {
        var c;
        return "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a: (c = Math.min(a.date(), D(a.year(), b)), a._d["set" + (a._isUTC ? "UTC": "") + "Month"](b, c), a)
    }
    function ob(a, b) {
        return a._d["get" + (a._isUTC ? "UTC": "") + b]()
    }
    function pb(a, b, c) {
        return "Month" === b ? nb(a, c) : a._d["set" + (a._isUTC ? "UTC": "") + b](c)
    }
    function qb(a, b) {
        return function(c) {
            return null != c ? (pb(this, a, c), vb.updateOffset(this, b), this) : ob(this, a)
        }
    }
    function rb(a) {
        return 400 * a / 146097
    }
    function sb(a) {
        return 146097 * a / 400
    }
    function tb(a) {
        vb.duration.fn[a] = function() {
            return this._data[a]
        }
    }
    function ub(a) {
        "undefined" == typeof ender && (wb = zb.moment, zb.moment = a ? f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", vb) : vb)
    }
    for (var vb, wb, xb, yb = "2.9.0",
    zb = "undefined" == typeof global || "undefined" != typeof window && window !== global.window ? this: global, Ab = Math.round, Bb = Object.prototype.hasOwnProperty, Cb = 0, Db = 1, Eb = 2, Fb = 3, Gb = 4, Hb = 5, Ib = 6, Jb = {},
    Kb = [], Lb = "undefined" != typeof module && module && module.exports, Mb = /^\/?Date\((\-?\d+)/i, Nb = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Ob = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Pb = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, Qb = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Rb = /\d\d?/, Sb = /\d{1,3}/, Tb = /\d{1,4}/, Ub = /[+\-]?\d{1,6}/, Vb = /\d+/, Wb = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Xb = /Z|[\+\-]\d\d:?\d\d/gi, Yb = /T/i, Zb = /[\+\-]?\d+/, $b = /[\+\-]?\d+(\.\d{1,3})?/, _b = /\d/, ac = /\d\d/, bc = /\d{3}/, cc = /\d{4}/, dc = /[+-]?\d{6}/, ec = /[+-]?\d+/, fc = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, gc = "YYYY-MM-DDTHH:mm:ssZ", hc = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], ic = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], jc = /([\+\-]|\d\d)/gi, kc = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
    }), lc = {
        ms: "millisecond",
        s: "second",
        m: "minute",
        h: "hour",
        d: "day",
        D: "date",
        w: "week",
        W: "isoWeek",
        M: "month",
        Q: "quarter",
        y: "year",
        DDD: "dayOfYear",
        e: "weekday",
        E: "isoWeekday",
        gg: "weekYear",
        GG: "isoWeekYear"
    },
    mc = {
        dayofyear: "dayOfYear",
        isoweekday: "isoWeekday",
        isoweek: "isoWeek",
        weekyear: "weekYear",
        isoweekyear: "isoWeekYear"
    },
    nc = {},
    oc = {
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    },
    pc = "DDD w W M D d".split(" "), qc = "M D H h m s w W".split(" "), rc = {
        M: function() {
            return this.month() + 1
        },
        MMM: function(a) {
            return this.localeData().monthsShort(this, a)
        },
        MMMM: function(a) {
            return this.localeData().months(this, a)
        },
        D: function() {
            return this.date()
        },
        DDD: function() {
            return this.dayOfYear()
        },
        d: function() {
            return this.day()
        },
        dd: function(a) {
            return this.localeData().weekdaysMin(this, a)
        },
        ddd: function(a) {
            return this.localeData().weekdaysShort(this, a)
        },
        dddd: function(a) {
            return this.localeData().weekdays(this, a)
        },
        w: function() {
            return this.week()
        },
        W: function() {
            return this.isoWeek()
        },
        YY: function() {
            return r(this.year() % 100, 2)
        },
        YYYY: function() {
            return r(this.year(), 4)
        },
        YYYYY: function() {
            return r(this.year(), 5)
        },
        YYYYYY: function() {
            var a = this.year(),
            b = a >= 0 ? "+": "-";
            return b + r(Math.abs(a), 6)
        },
        gg: function() {
            return r(this.weekYear() % 100, 2)
        },
        gggg: function() {
            return r(this.weekYear(), 4)
        },
        ggggg: function() {
            return r(this.weekYear(), 5)
        },
        GG: function() {
            return r(this.isoWeekYear() % 100, 2)
        },
        GGGG: function() {
            return r(this.isoWeekYear(), 4)
        },
        GGGGG: function() {
            return r(this.isoWeekYear(), 5)
        },
        e: function() {
            return this.weekday()
        },
        E: function() {
            return this.isoWeekday()
        },
        a: function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), !0)
        },
        A: function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), !1)
        },
        H: function() {
            return this.hours()
        },
        h: function() {
            return this.hours() % 12 || 12
        },
        m: function() {
            return this.minutes()
        },
        s: function() {
            return this.seconds()
        },
        S: function() {
            return C(this.milliseconds() / 100)
        },
        SS: function() {
            return r(C(this.milliseconds() / 10), 2)
        },
        SSS: function() {
            return r(this.milliseconds(), 3)
        },
        SSSS: function() {
            return r(this.milliseconds(), 3)
        },
        Z: function() {
            var a = this.utcOffset(),
            b = "+";
            return 0 > a && (a = -a, b = "-"),
            b + r(C(a / 60), 2) + ":" + r(C(a) % 60, 2)
        },
        ZZ: function() {
            var a = this.utcOffset(),
            b = "+";
            return 0 > a && (a = -a, b = "-"),
            b + r(C(a / 60), 2) + r(C(a) % 60, 2)
        },
        z: function() {
            return this.zoneAbbr()
        },
        zz: function() {
            return this.zoneName()
        },
        x: function() {
            return this.valueOf()
        },
        X: function() {
            return this.unix()
        },
        Q: function() {
            return this.quarter()
        }
    },
    sc = {},
    tc = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"], uc = !1; pc.length;) xb = pc.pop(),
    rc[xb + "o"] = i(rc[xb], xb);
    for (; qc.length;) xb = qc.pop(),
    rc[xb + xb] = h(rc[xb], 2);
    rc.DDDD = h(rc.DDD, 3),
    o(l.prototype, {
        set: function(a) {
            var b, c;
            for (c in a) b = a[c],
            "function" == typeof b ? this[c] = b: this["_" + c] = b;
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function(a) {
            return this._months[a.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function(a) {
            return this._monthsShort[a.month()]
        },
        monthsParse: function(a, b, c) {
            var d, e, f;
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
                if (e = vb.utc([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
                if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
                if (!c && this._monthsParse[d].test(a)) return d
            }
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function(a) {
            return this._weekdays[a.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function(a) {
            return this._weekdaysShort[a.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function(a) {
            return this._weekdaysMin[a.day()]
        },
        weekdaysParse: function(a) {
            var b, c, d;
            for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++) if (this._weekdaysParse[b] || (c = vb([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b
        },
        _longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY LT",
            LLLL: "dddd, MMMM D, YYYY LT"
        },
        longDateFormat: function(a) {
            var b = this._longDateFormat[a];
            return ! b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,
            function(a) {
                return a.slice(1)
            }), this._longDateFormat[a] = b),
            b
        },
        isPM: function(a) {
            return "p" === (a + "").toLowerCase().charAt(0)
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function(a, b, c) {
            return a > 11 ? c ? "pm": "PM": c ? "am": "AM"
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function(a, b, c) {
            var d = this._calendar[a];
            return "function" == typeof d ? d.apply(b, [c]) : d
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function(a, b, c, d) {
            var e = this._relativeTime[c];
            return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
        },
        pastFuture: function(a, b) {
            var c = this._relativeTime[a > 0 ? "future": "past"];
            return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
        },
        ordinal: function(a) {
            return this._ordinal.replace("%d", a)
        },
        _ordinal: "%d",
        _ordinalParse: /\d{1,2}/,
        preparse: function(a) {
            return a
        },
        postformat: function(a) {
            return a
        },
        week: function(a) {
            return jb(a, this._week.dow, this._week.doy).week
        },
        _week: {
            dow: 0,
            doy: 6
        },
        firstDayOfWeek: function() {
            return this._week.dow
        },
        firstDayOfYear: function() {
            return this._week.doy
        },
        _invalidDate: "Invalid date",
        invalidDate: function() {
            return this._invalidDate
        }
    }),
    vb = function(b, c, e, f) {
        var g;
        return "boolean" == typeof e && (f = e, e = a),
        g = {},
        g._isAMomentObject = !0,
        g._i = b,
        g._f = c,
        g._l = e,
        g._strict = f,
        g._isUTC = !1,
        g._pf = d(),
        lb(g)
    },
    vb.suppressDeprecationWarnings = !1,
    vb.createFromInputFallback = f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",
    function(a) {
        a._d = new Date(a._i + (a._useUTC ? " UTC": ""))
    }),
    vb.min = function() {
        var a = [].slice.call(arguments, 0);
        return mb("isBefore", a)
    },
    vb.max = function() {
        var a = [].slice.call(arguments, 0);
        return mb("isAfter", a)
    },
    vb.utc = function(b, c, e, f) {
        var g;
        return "boolean" == typeof e && (f = e, e = a),
        g = {},
        g._isAMomentObject = !0,
        g._useUTC = !0,
        g._isUTC = !0,
        g._l = e,
        g._i = b,
        g._f = c,
        g._strict = f,
        g._pf = d(),
        lb(g).utc()
    },
    vb.unix = function(a) {
        return vb(1e3 * a)
    },
    vb.duration = function(a, b) {
        var d, e, f, g, h = a,
        i = null;
        return vb.isDuration(a) ? h = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        }: "number" == typeof a ? (h = {},
        b ? h[b] = a: h.milliseconds = a) : (i = Nb.exec(a)) ? (d = "-" === i[1] ? -1 : 1, h = {
            y: 0,
            d: C(i[Eb]) * d,
            h: C(i[Fb]) * d,
            m: C(i[Gb]) * d,
            s: C(i[Hb]) * d,
            ms: C(i[Ib]) * d
        }) : (i = Ob.exec(a)) ? (d = "-" === i[1] ? -1 : 1, f = function(a) {
            var b = a && parseFloat(a.replace(",", "."));
            return (isNaN(b) ? 0 : b) * d
        },
        h = {
            y: f(i[2]),
            M: f(i[3]),
            d: f(i[4]),
            h: f(i[5]),
            m: f(i[6]),
            s: f(i[7]),
            w: f(i[8])
        }) : null == h ? h = {}: "object" == typeof h && ("from" in h || "to" in h) && (g = t(vb(h.from), vb(h.to)), h = {},
        h.ms = g.milliseconds, h.M = g.months),
        e = new n(h),
        vb.isDuration(a) && c(a, "_locale") && (e._locale = a._locale),
        e
    },
    vb.version = yb,
    vb.defaultFormat = gc,
    vb.ISO_8601 = function() {},
    vb.momentProperties = Kb,
    vb.updateOffset = function() {},
    vb.relativeTimeThreshold = function(b, c) {
        return oc[b] === a ? !1 : c === a ? oc[b] : (oc[b] = c, !0)
    },
    vb.lang = f("moment.lang is deprecated. Use moment.locale instead.",
    function(a, b) {
        return vb.locale(a, b)
    }),
    vb.locale = function(a, b) {
        var c;
        return a && (c = "undefined" != typeof b ? vb.defineLocale(a, b) : vb.localeData(a), c && (vb.duration._locale = vb._locale = c)),
        vb._locale._abbr
    },
    vb.defineLocale = function(a, b) {
        return null !== b ? (b.abbr = a, Jb[a] || (Jb[a] = new l), Jb[a].set(b), vb.locale(a), Jb[a]) : (delete Jb[a], null)
    },
    vb.langData = f("moment.langData is deprecated. Use moment.localeData instead.",
    function(a) {
        return vb.localeData(a)
    }),
    vb.localeData = function(a) {
        var b;
        if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return vb._locale;
        if (!w(a)) {
            if (b = L(a)) return b;
            a = [a]
        }
        return K(a)
    },
    vb.isMoment = function(a) {
        return a instanceof m || null != a && c(a, "_isAMomentObject")
    },
    vb.isDuration = function(a) {
        return a instanceof n
    };
    for (xb = tc.length - 1; xb >= 0; --xb) B(tc[xb]);
    vb.normalizeUnits = function(a) {
        return z(a)
    },
    vb.invalid = function(a) {
        var b = vb.utc(0 / 0);
        return null != a ? o(b._pf, a) : b._pf.userInvalidated = !0,
        b
    },
    vb.parseZone = function() {
        return vb.apply(null, arguments).parseZone()
    },
    vb.parseTwoDigitYear = function(a) {
        return C(a) + (C(a) > 68 ? 1900 : 2e3)
    },
    vb.isDate = x,
    o(vb.fn = m.prototype, {
        clone: function() {
            return vb(this)
        },
        valueOf: function() {
            return + this._d - 6e4 * (this._offset || 0)
        },
        unix: function() {
            return Math.floor( + this / 1e3)
        },
        toString: function() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function() {
            return this._offset ? new Date( + this) : this._d
        },
        toISOString: function() {
            var a = vb(this).utc();
            return 0 < a.year() && a.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : P(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : P(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
        toArray: function() {
            var a = this;
            return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]
        },
        isValid: function() {
            return I(this)
        },
        isDSTShifted: function() {
            return this._a ? this.isValid() && y(this._a, (this._isUTC ? vb.utc(this._a) : vb(this._a)).toArray()) > 0 : !1
        },
        parsingFlags: function() {
            return o({},
            this._pf)
        },
        invalidAt: function() {
            return this._pf.overflow
        },
        utc: function(a) {
            return this.utcOffset(0, a)
        },
        local: function(a) {
            return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(this._dateUtcOffset(), "m")),
            this
        },
        format: function(a) {
            var b = P(this, a || vb.defaultFormat);
            return this.localeData().postformat(b)
        },
        add: u(1, "add"),
        subtract: u( - 1, "subtract"),
        diff: function(a, b, c) {
            var d, e, f = M(a, this),
            g = 6e4 * (f.utcOffset() - this.utcOffset());
            return b = z(b),
            "year" === b || "month" === b || "quarter" === b ? (e = j(this, f), "quarter" === b ? e /= 3 : "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3: "minute" === b ? d / 6e4: "hour" === b ? d / 36e5: "day" === b ? (d - g) / 864e5: "week" === b ? (d - g) / 6048e5: d),
            c ? e: q(e)
        },
        from: function(a, b) {
            return vb.duration({
                to: this,
                from: a
            }).locale(this.locale()).humanize(!b)
        },
        fromNow: function(a) {
            return this.from(vb(), a)
        },
        calendar: function(a) {
            var b = a || vb(),
            c = M(b, this).startOf("day"),
            d = this.diff(c, "days", !0),
            e = -6 > d ? "sameElse": -1 > d ? "lastWeek": 0 > d ? "lastDay": 1 > d ? "sameDay": 2 > d ? "nextDay": 7 > d ? "nextWeek": "sameElse";
            return this.format(this.localeData().calendar(e, this, vb(b)))
        },
        isLeapYear: function() {
            return G(this.year())
        },
        isDST: function() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        },
        day: function(a) {
            var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != a ? (a = gb(a, this.localeData()), this.add(a - b, "d")) : b
        },
        month: qb("Month", !0),
        startOf: function(a) {
            switch (a = z(a)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
            }
            return "week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1),
            "quarter" === a && this.month(3 * Math.floor(this.month() / 3)),
            this
        },
        endOf: function(b) {
            return b = z(b),
            b === a || "millisecond" === b ? this: this.startOf(b).add(1, "isoWeek" === b ? "week": b).subtract(1, "ms")
        },
        isAfter: function(a, b) {
            var c;
            return b = z("undefined" != typeof b ? b: "millisecond"),
            "millisecond" === b ? (a = vb.isMoment(a) ? a: vb(a), +this > +a) : (c = vb.isMoment(a) ? +a: +vb(a), c < +this.clone().startOf(b))
        },
        isBefore: function(a, b) {
            var c;
            return b = z("undefined" != typeof b ? b: "millisecond"),
            "millisecond" === b ? (a = vb.isMoment(a) ? a: vb(a), +a > +this) : (c = vb.isMoment(a) ? +a: +vb(a), +this.clone().endOf(b) < c)
        },
        isBetween: function(a, b, c) {
            return this.isAfter(a, c) && this.isBefore(b, c)
        },
        isSame: function(a, b) {
            var c;
            return b = z(b || "millisecond"),
            "millisecond" === b ? (a = vb.isMoment(a) ? a: vb(a), +this === +a) : (c = +vb(a), +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))
        },
        min: f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",
        function(a) {
            return a = vb.apply(null, arguments),
            this > a ? this: a
        }),
        max: f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",
        function(a) {
            return a = vb.apply(null, arguments),
            a > this ? this: a
        }),
        zone: f("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",
        function(a, b) {
            return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
        }),
        utcOffset: function(a, b) {
            var c, d = this._offset || 0;
            return null != a ? ("string" == typeof a && (a = S(a)), Math.abs(a) < 16 && (a = 60 * a), !this._isUTC && b && (c = this._dateUtcOffset()), this._offset = a, this._isUTC = !0, null != c && this.add(c, "m"), d !== a && (!b || this._changeInProgress ? v(this, vb.duration(a - d, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, vb.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? d: this._dateUtcOffset()
        },
        isLocal: function() {
            return ! this._isUTC
        },
        isUtcOffset: function() {
            return this._isUTC
        },
        isUtc: function() {
            return this._isUTC && 0 === this._offset
        },
        zoneAbbr: function() {
            return this._isUTC ? "UTC": ""
        },
        zoneName: function() {
            return this._isUTC ? "Coordinated Universal Time": ""
        },
        parseZone: function() {
            return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(S(this._i)),
            this
        },
        hasAlignedHourOffset: function(a) {
            return a = a ? vb(a).utcOffset() : 0,
            (this.utcOffset() - a) % 60 === 0
        },
        daysInMonth: function() {
            return D(this.year(), this.month())
        },
        dayOfYear: function(a) {
            var b = Ab((vb(this).startOf("day") - vb(this).startOf("year")) / 864e5) + 1;
            return null == a ? b: this.add(a - b, "d")
        },
        quarter: function(a) {
            return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
        },
        weekYear: function(a) {
            var b = jb(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return null == a ? b: this.add(a - b, "y")
        },
        isoWeekYear: function(a) {
            var b = jb(this, 1, 4).year;
            return null == a ? b: this.add(a - b, "y")
        },
        week: function(a) {
            var b = this.localeData().week(this);
            return null == a ? b: this.add(7 * (a - b), "d")
        },
        isoWeek: function(a) {
            var b = jb(this, 1, 4).week;
            return null == a ? b: this.add(7 * (a - b), "d")
        },
        weekday: function(a) {
            var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == a ? b: this.add(a - b, "d")
        },
        isoWeekday: function(a) {
            return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a: a - 7)
        },
        isoWeeksInYear: function() {
            return E(this.year(), 1, 4)
        },
        weeksInYear: function() {
            var a = this.localeData()._week;
            return E(this.year(), a.dow, a.doy)
        },
        get: function(a) {
            return a = z(a),
            this[a]()
        },
        set: function(a, b) {
            var c;
            if ("object" == typeof a) for (c in a) this.set(c, a[c]);
            else a = z(a),
            "function" == typeof this[a] && this[a](b);
            return this
        },
        locale: function(b) {
            var c;
            return b === a ? this._locale._abbr: (c = vb.localeData(b), null != c && (this._locale = c), this)
        },
        lang: f("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
        function(b) {
            return b === a ? this.localeData() : this.locale(b)
        }),
        localeData: function() {
            return this._locale
        },
        _dateUtcOffset: function() {
            return 15 * -Math.round(this._d.getTimezoneOffset() / 15)
        }
    }),
    vb.fn.millisecond = vb.fn.milliseconds = qb("Milliseconds", !1),
    vb.fn.second = vb.fn.seconds = qb("Seconds", !1),
    vb.fn.minute = vb.fn.minutes = qb("Minutes", !1),
    vb.fn.hour = vb.fn.hours = qb("Hours", !0),
    vb.fn.date = qb("Date", !0),
    vb.fn.dates = f("dates accessor is deprecated. Use date instead.", qb("Date", !0)),
    vb.fn.year = qb("FullYear", !0),
    vb.fn.years = f("years accessor is deprecated. Use year instead.", qb("FullYear", !0)),
    vb.fn.days = vb.fn.day,
    vb.fn.months = vb.fn.month,
    vb.fn.weeks = vb.fn.week,
    vb.fn.isoWeeks = vb.fn.isoWeek,
    vb.fn.quarters = vb.fn.quarter,
    vb.fn.toJSON = vb.fn.toISOString,
    vb.fn.isUTC = vb.fn.isUtc,
    o(vb.duration.fn = n.prototype, {
        _bubble: function() {
            var a, b, c, d = this._milliseconds,
            e = this._days,
            f = this._months,
            g = this._data,
            h = 0;
            g.milliseconds = d % 1e3,
            a = q(d / 1e3),
            g.seconds = a % 60,
            b = q(a / 60),
            g.minutes = b % 60,
            c = q(b / 60),
            g.hours = c % 24,
            e += q(c / 24),
            h = q(rb(e)),
            e -= q(sb(h)),
            f += q(e / 30),
            e %= 30,
            h += q(f / 12),
            f %= 12,
            g.days = e,
            g.months = f,
            g.years = h
        },
        abs: function() {
            return this._milliseconds = Math.abs(this._milliseconds),
            this._days = Math.abs(this._days),
            this._months = Math.abs(this._months),
            this._data.milliseconds = Math.abs(this._data.milliseconds),
            this._data.seconds = Math.abs(this._data.seconds),
            this._data.minutes = Math.abs(this._data.minutes),
            this._data.hours = Math.abs(this._data.hours),
            this._data.months = Math.abs(this._data.months),
            this._data.years = Math.abs(this._data.years),
            this
        },
        weeks: function() {
            return q(this.days() / 7)
        },
        valueOf: function() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * C(this._months / 12)
        },
        humanize: function(a) {
            var b = ib(this, !a, this.localeData());
            return a && (b = this.localeData().pastFuture( + this, b)),
            this.localeData().postformat(b)
        },
        add: function(a, b) {
            var c = vb.duration(a, b);
            return this._milliseconds += c._milliseconds,
            this._days += c._days,
            this._months += c._months,
            this._bubble(),
            this
        },
        subtract: function(a, b) {
            var c = vb.duration(a, b);
            return this._milliseconds -= c._milliseconds,
            this._days -= c._days,
            this._months -= c._months,
            this._bubble(),
            this
        },
        get: function(a) {
            return a = z(a),
            this[a.toLowerCase() + "s"]()
        },
        as: function(a) {
            var b, c;
            if (a = z(a), "month" === a || "year" === a) return b = this._days + this._milliseconds / 864e5,
            c = this._months + 12 * rb(b),
            "month" === a ? c: c / 12;
            switch (b = this._days + Math.round(sb(this._months / 12)), a) {
            case "week":
                return b / 7 + this._milliseconds / 6048e5;
            case "day":
                return b + this._milliseconds / 864e5;
            case "hour":
                return 24 * b + this._milliseconds / 36e5;
            case "minute":
                return 24 * b * 60 + this._milliseconds / 6e4;
            case "second":
                return 24 * b * 60 * 60 + this._milliseconds / 1e3;
            case "millisecond":
                return Math.floor(24 * b * 60 * 60 * 1e3) + this._milliseconds;
            default:
                throw new Error("Unknown unit " + a)
            }
        },
        lang: vb.fn.lang,
        locale: vb.fn.locale,
        toIsoString: f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
        function() {
            return this.toISOString()
        }),
        toISOString: function() {
            var a = Math.abs(this.years()),
            b = Math.abs(this.months()),
            c = Math.abs(this.days()),
            d = Math.abs(this.hours()),
            e = Math.abs(this.minutes()),
            f = Math.abs(this.seconds() + this.milliseconds() / 1e3);
            return this.asSeconds() ? (this.asSeconds() < 0 ? "-": "") + "P" + (a ? a + "Y": "") + (b ? b + "M": "") + (c ? c + "D": "") + (d || e || f ? "T": "") + (d ? d + "H": "") + (e ? e + "M": "") + (f ? f + "S": "") : "P0D"
        },
        localeData: function() {
            return this._locale
        },
        toJSON: function() {
            return this.toISOString()
        }
    }),
    vb.duration.fn.toString = vb.duration.fn.toISOString;
    for (xb in kc) c(kc, xb) && tb(xb.toLowerCase());
    vb.duration.fn.asMilliseconds = function() {
        return this.as("ms")
    },
    vb.duration.fn.asSeconds = function() {
        return this.as("s")
    },
    vb.duration.fn.asMinutes = function() {
        return this.as("m")
    },
    vb.duration.fn.asHours = function() {
        return this.as("h")
    },
    vb.duration.fn.asDays = function() {
        return this.as("d")
    },
    vb.duration.fn.asWeeks = function() {
        return this.as("weeks")
    },
    vb.duration.fn.asMonths = function() {
        return this.as("M")
    },
    vb.duration.fn.asYears = function() {
        return this.as("y")
    },
    vb.locale("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(a) {
            var b = a % 10,
            c = 1 === C(a % 100 / 10) ? "th": 1 === b ? "st": 2 === b ? "nd": 3 === b ? "rd": "th";
            return a + c
        }
    }),
    Lb ? module.exports = vb: "function" == typeof define && define.amd ? (define(function(a, b, c) {
        return c.config && c.config() && c.config().noGlobal === !0 && (zb.moment = wb),
        vb
    }), ub(!0)) : ub()
}.call(this),
angular.module("devmag", ["devmag.topics", "ngSanitize"]),
angular.module("devmag.topics", ["devmag.topics.services", "devmag.topics.directives", "devmag.topics.filters", "devmag.topics.controllers"]),
angular.module("devmag.topics.services", []).factory("fetchTitle", ["$http",
function(a) {
    return function(b) {
        return a.post("/utils/fetchTitle", {
            url: b
        }).then(function(a) {
            return a.data.title
        })
    }
}]).factory("TagCache", ["$http", "$q",
function(a, b) {
    return {
        init: function() {
            var c = this,
            d = b.defer();
            return a.post("/utils/cached/tags").success(function(a) {
                c.tags = a,
                d.resolve(a)
            }),
            d.promise
        }
    }
}]).factory("Topic", ["$http", "$q",
function(a, b) {
    return {
        vote: function(c) {
            var d = b.defer();
            return a.post("/ajax/topic/vote", c).then(function(a) {
                d.resolve(a.data)
            },
            function(a) {
                403 == a.status && d.reject(null)
            }),
            d.promise
        },
        pollVote: function(c) {
            var d = b.defer();
            return a.post("/ajax/topic/poll-vote", c).success(function(a) {
                d.resolve(a)
            }),
            d.promise
        },
        save: function(c) {
            var d = b.defer();
            return a.post("/topic/create", c).then(function(a) {
                d.resolve(a.data)
            },
            function() {
                d.reject(null)
            }),
            d.promise
        },
        addComment: function(c) {
            var d = b.defer();
            return a.post("/ajax/topic/comments/add", c).success(function(a) {
                d.resolve(a)
            }),
            d.promise
        }
    }
}]),

    
angular.module("devmag.topics.directives", []).directive("topicCreationModal", ["Topic", "$rootScope", "fetchTitle",
function(a, b, c) {
    return {
        restrict: "AE",
        replace: !1,
        scope: {},
        templateUrl: "/js/angular-modules/topics/views/topic-creation-modal.html",
        link: function(b) {
            b.resetModal = function() {
                b.topic = {
                    type: "discussion",
                    pollQuestions: [{},
                    {}]
                },
                b.saved = !1,
                b.buttonText = "Create",
                b.topicURL = "",
                b.availableTypes = [{
                    name: "discussion",
                    icon: "fa-coffee",
                    selected: !0
                },
                {
                    name: "link",
                    icon: "fa-external-link-square",
                    selected: !1
                },
                {
                    name: "poll",
                    icon: "fa-bar-chart",
                    selected: !1
                }],
                b.modeText = "<i class='fa fa-eye'> preview",
                b.previewMode = !1,
                b.titleFetch = "Fetch",
                b.$error = {}
            },
            b.resetModal(),
            angular.element("#topicCreationTextArea").autosize(),
            b.switchMode = function() {
                b.topic.contentMarkdown && (b.previewMode = !b.previewMode, b.modeText = b.previewMode ? "<i class='fa fa-eye-slash'></i> keep editing": "<i class='fa fa-eye'></i> preview")
            },
            b.$watch("previewMode",
            function(a) {
                a && (b.topic.content = b.topic.contentMarkdown ? markdown.toHTML(b.topic.contentMarkdown) : "")
            }),
            b.$watch("topic.type",
            function(a) {
                b.resetModal(),
                b.topic.type = a
            }),
            b.fetchTitle = function() {
                b.fetchingTitle = !0,
                b.titleFetch = "Fetching ",
                c(b.topic.url).then(function(a) {
                    b.topic.title = a,
                    b.fetchingTitle = !1,
                    b.titleFetch = "Fetch "
                },
                function() {
                    b.fetchingTitle = !1,
                    b.titleFetch = "Fetch "
                })
            },
            b.submit = function() {
                if ("link" === b.topic.type && (!validator.isURL(b.topic.url) || 0 !== b.topic.url.lastIndexOf("http", 0) && 0 !== b.topic.url.lastIndexOf("https", 0))) return void(b.$error.invalidURL = !0);
                if (!b.topic.title) return void(b.$error.invalidTitle = !0);
                if ("poll" === b.topic.type) {
                    var c = 0;
                    if (b.topic.pollQuestions.forEach(function(a) {
                        a.question && c++
                    }), 2 > c) return void(b.$error.invalidPoll = !0)
                }

                b.topic.content || (b.topic.content = ""),
                b.buttonText = "Creating. . .",
                a.save(b.topic).then(function(a) {
                    b.saved = !0,
                    b.buttonText = "Create";
                    var c = "/topic/" + a._id ;
                    b.resetModal(),
                    angular.element(".alert-xprs").find("#link").attr("href", c),
                    angular.element(".alert-xprs").addClass("show"),
                    angular.element(".new-topic-creation-modal").toggleClass("show animated fadeInDown"),
                    angular.element("body").toggleClass("bodyOverflow")
                },
                function() {
                    b.buttonText = "Create"
                })
            },
            b.updateType = function(a, c) {
                b.availableTypes[c].selected = !0;
                for (var d = 0; d < b.availableTypes.length; d++) {
                    var e = b.availableTypes[d];
                    if (e.name === b.topic.type) {
                        b.availableTypes[d].selected = !1,
                        b.topic.type = a.name;
                        break
                    }
                }
            },
            b.addMoreOptions = function() {
                b.topic.pollQuestions.length < 4 && b.topic.pollQuestions.push({})
            }
        }
    }
}]).directive("autoComplete", ["$http",
function(a) {
    return {
        restrict: "AE",
        scope: {
            selectedTags: "=model"
        },
        templateUrl: "/js/angular-modules/topics/views/autocomplete-template.html",
        link: function(b, c, d) {
            b.suggestions = [],
            b.selectedTags = [],
            b.selectedIndex = 0,
            b.removeTag = function(a) {
                b.selectedTags.splice(a, 1)
            };
            var e;
            b.search = function() {
                return b.searchText ? (b.selectedTags || (b.selectedTags = []), e && clearTimeout(e), void(e = setTimeout(function() { / ^[A - Za - z 0 - 9] + $ / .test(b.searchText) && (b.suggestions = [b.searchText.toLowerCase()]),
                    a.get(d.url + "?term=" + b.searchText).success(function(a) { / ^[A - Za - z 0 - 9] + $ / .test(b.searchText) && -1 === a.indexOf(b.searchText.toLowerCase()) && a.unshift(b.searchText.toLowerCase()),
                        b.suggestions = a.filter(function(a) {
                            return - 1 === b.selectedTags.indexOf(a)
                        }),
                        b.selectedIndex = 0
                    })
                },
                500))) : void(b.suggestions = void 0)
            },
            b.addToSelectedTags = function(a) {
                b.suggestions[a] && -1 === b.selectedTags.indexOf(b.suggestions[a]) && (b.selectedTags.push(b.suggestions[a]), b.searchText = "", b.suggestions = [])
            },
            b.checkKeyDown = function(a) {
                40 === a.keyCode ? (a.preventDefault(), b.selectedIndex + 1 !== b.suggestions.length && b.selectedIndex++) : 38 === a.keyCode ? (a.preventDefault(), b.selectedIndex - 1 !== -1 && b.selectedIndex--) : 13 === a.keyCode && b.addToSelectedTags(b.selectedIndex)
            },
            b.$watch("selectedIndex",
            function(a) { - 1 !== a && (b.searchText = b.suggestions[b.selectedIndex])
            })
        }
    }
}]).directive("angularCodeTab",
function() {
    return {
        restrict: "AE",
        replace: !0,
        link: function(a, b) {
            b.on("keydown",
            function(c) {
                var d = c.keyCode || c.which;
                if (9 == d) {
                    c.preventDefault();
                    var e = b.get(0).selectionStart,
                    f = b.get(0).selectionEnd,
                    g = b.val(),
                    h = g.substring(e, f),
                    i = /^/gm,
                    j = h.match(i).length,
                    k = g.substring(0, e) + h.replace(i, "	") + g.substring(f);
                    b.val(k),
                    a.topic.contentMarkdown = k,
                    b.get(0).selectionStart = f + j,
                    b.get(0).selectionEnd = f + j
                }
            })
        }
    }
}).directive("autoGrow",
function() {
    return {
        restrict: "AE",
        replace: !0,
        link: function(a, b) {
            b.autosize()
        }
    }
}),
angular.module("devmag.topics.filters", []).filter("expandedName",
function() {
    var a = {
        repo: "Repository",
        experiment: "Experiment",
        poll: "Poll",
        link: "Link",
        discussion: "Discussion"
    };
    return function(b) {
        return a[b]
    }
}).filter("ucfirst",
function() {
    return function(a) {
        return a.charAt(0).toUpperCase() + a.substr(1)
    }
}),
angular.module("devmag.topics.controllers", []).controller("TopicCreationController", ["$timeout", "$http", "$scope", "Topic", "$rootScope", "fetchTitle",
function(a, b, c, d, e, f) {
    c.resetModal = function() {
        c.topic = {
            type: "discussion",
            isAnonymous: !1,
            pollQuestions: [{},
            {},
            {},
            {}]
        },
        c.publishing = !1,
        c.topicURL = "",
        c.previewMode = !1,
        c.titleFetch = "Fetch",
        c.$error = {},
        c.featuredImage = "",
        c.imageStatus = void 0,
        angular.element("#current-user-image").attr("src", c.userImage)
    },
    c.resetModal(),
    c.$watch("previewMode",
    function(a) {
        a && (c.topic.content = c.topic.contentMarkdown ? markdown.toHTML(c.topic.contentMarkdown) : "")
    }),
    c.fetchTitle = function() {
        c.fetchingTitle = !0,
        c.titleFetch = "fetching",
        f(c.topic.url).then(function(a) {
            c.topic.title = a,
            c.fetchingTitle = !1,
            c.titleFetch = "fetched"
        },
        function() {
            c.fetchingTitle = !1,
            c.titleFetch = "fetched"
        })
    },
    c.$watch("topic.isAnonymous",
    function(a, b) {
        a === b && (c.userImage = angular.element("#current-user-image").css("background-image")),
        a ? angular.element("#current-user-image").css("background-image", "url(/images/no-user-photo.png)") : angular.element("#current-user-image").css("background-image", c.userImage)
    }),
    c.submit = function() {
        if ("link" === c.topic.type && (!validator.isURL(c.topic.url) || 0 !== c.topic.url.lastIndexOf("http", 0) && 0 !== c.topic.url.lastIndexOf("https", 0))) return void(c.$error.invalidURL = !0);
        if (!c.topic.title) return void(c.$error.invalidTitle = !0);
        if ("poll" === c.topic.type) {
            var a = 0;
            if (c.topic.pollQuestions.forEach(function(b) {
                b.question && a++
            }), 2 > a) return void(c.$error.invalidPoll = !0)
        }
        c.topic.content || (c.topic.content = ""),
        angular.element(".post-categories").hide(),
        angular.element(".form-post-modal").find(".form-control, .btn").attr("disabled", "true"),
        angular.element(".publish-post").attr("disabled", "true"),
        angular.element("#description-field").trigger("autosize.destroy"),
        c.publishing = !0,
        d.save(c.topic).then(function(a) {
            if (c.publishing = !1, a.error && "SUBMISSION_TOO_OFTEN" === a.error) return angular.element(".post-categories").show(),
            angular.element(".form-post-modal").find(".form-control, .btn").removeAttr("disabled"),
            angular.element(".publish-post").removeAttr("disabled"),
            void sweetAlert("You're doing that too frequently!", "Please wait for 5 minutes before posting another link.", "error");
            var b = window.location.protocol + "//" + window.location.host + "/topic/" + a._id ,
            d = window.location.protocol + "//" + window.location.host + "/topic/" + a._id;
            c.resetModal(),
            angular.element(".post-status-bar").find(".published-post-url").attr("href", b),
            angular.element(".post-status-bar").find(".social-share").data("url", d),
            angular.element(".post-status-bar").find(".social-share").data("title", a.title),
            angular.element(".post-dialog-container").removeClass("show"),
            angular.element(".post-status-bar").addClass("show fadeInDown"),
            angular.element(".post-categories").show(),
            angular.element(".form-post-modal").find(".form-control, .btn").removeAttr("disabled"),
            angular.element(".publish-post").removeAttr("disabled"),
            angular.element(".post-dialog-container").removeClass("auto-height").delay(50).queue(function(a) {
                $(".post-dialog-container").removeClass("show"),
                a()
            }),
            setTimeout(function() {
                window.scrollTo(0, 0)
            },
            200)
        },
        function() {
            c.publishing = !1
        })
    },
    c.closeModal = function() {
        c.resetModal(),
        angular.element(".post-dialog-container").removeClass("auto-height").delay(50).queue(function(a) {
            $(".post-dialog-container").removeClass("show"),
            a()
        }),
        angular.element(".post-categories").show(),
        angular.element(".poll-options-singleton, .link-options").removeClass("flipInX")
    },
    c.fetchLinkImage = function() {
        a(function() { ! c.featuredImage && c.topic.url && (c.imageStatus = "fetching", b.post("/utils/fetchImageFromURL", {
                url: c.topic.url
            }).then(function(a) {
                c.imageStatus = "fetched",
                a.data.image && (c.featuredImage = a.data.image)
            },
            function() {
                c.imageStatus = "fetched"
            }))
        },
        300)
    },
    c.removeImage = function() {
        c.featuredImage = "",
        c.imageStatus = void 0,
        c.topic.url = ""
    },
    c.share = function(a, b) {
        a.preventDefault();
        var c = angular.element(a.currentTarget).data("url"),
        d = "",
        e = angular.element(a.currentTarget).data("title");
        switch (b) {
        case "facebook":
            d = "https://www.facebook.com/dialog/share?app_id=748562761858617&display=popup&href=" + encodeURIComponent(c) + "&redirect_uri=https://devmag.io/auto-close.html&message=" + e;
            break;
        case "twitter":
            d = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(c) + "&via=devmagio&text=" + e;
            break;
        case "google":
            d = "https://plus.google.com/share?url=" + encodeURIComponent(c);
            break;
        case "linkedin":
            d = "http://www.linkedin.com/shareArticle?url=" + encodeURIComponent(c) + "&source=devmag.io&title=" + e
        }
        window.open(d, "_blank")
    }
}]),
!
function(a) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
    else if ("function" == typeof define && define.amd) define([], a);
    else {
        var b;
        "undefined" != typeof window ? b = window: "undefined" != typeof global ? b = global: "undefined" != typeof self && (b = self),
        b.io = a()
    }
} (function() {
    var a;
    return function b(a, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!a[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i) return i(g, !0);
                    if (f) return f(g, !0);
                    throw new Error("Cannot find module '" + g + "'")
                }
                var j = c[g] = {
                    exports: {}
                };
                a[g][0].call(j.exports,
                function(b) {
                    var c = a[g][1][b];
                    return e(c ? c: b)
                },
                j, j.exports, b, a, c, d)
            }
            return c[g].exports
        }
        for (var f = "function" == typeof require && require,
        g = 0; g < d.length; g++) e(d[g]);
        return e
    } ({
        1 : [function(a, b) {
            b.exports = a("./lib/")
        },
        {
            "./lib/": 2
        }],
        2 : [function(a, b, c) {
            function d(a, b) {
                "object" == typeof a && (b = a, a = void 0),
                b = b || {};
                var c, d = e(a),
                f = d.source,
                j = d.id;
                return b.forceNew || b["force new connection"] || !1 === b.multiplex ? (h("ignoring socket cache for %s", f), c = g(f, b)) : (i[j] || (h("new io instance for %s", f), i[j] = g(f, b)), c = i[j]),
                c.socket(d.path)
            }
            var e = a("./url"),
            f = a("socket.io-parser"),
            g = a("./manager"),
            h = a("debug")("socket.io-client");
            b.exports = c = d;
            var i = c.managers = {};
            c.protocol = f.protocol,
            c.connect = d,
            c.Manager = a("./manager"),
            c.Socket = a("./socket")
        },
        {
            "./manager": 3,
            "./socket": 5,
            "./url": 6,
            debug: 9,
            "socket.io-parser": 40
        }],
        3 : [function(a, b) {
            function c(a, b) {
                return this instanceof c ? (a && "object" == typeof a && (b = a, a = void 0), b = b || {},
                b.path = b.path || "/socket.io", this.nsps = {},
                this.subs = [], this.opts = b, this.reconnection(b.reconnection !== !1), this.reconnectionAttempts(b.reconnectionAttempts || 1 / 0), this.reconnectionDelay(b.reconnectionDelay || 1e3), this.reconnectionDelayMax(b.reconnectionDelayMax || 5e3), this.timeout(null == b.timeout ? 2e4: b.timeout), this.readyState = "closed", this.uri = a, this.connected = 0, this.attempts = 0, this.encoding = !1, this.packetBuffer = [], this.encoder = new g.Encoder, this.decoder = new g.Decoder, this.autoConnect = b.autoConnect !== !1, void(this.autoConnect && this.open())) : new c(a, b)
            }
            var d = (a("./url"), a("engine.io-client")),
            e = a("./socket"),
            f = a("component-emitter"),
            g = a("socket.io-parser"),
            h = a("./on"),
            i = a("component-bind"),
            j = (a("object-component"), a("debug")("socket.io-client:manager"));
            b.exports = c,
            c.prototype.emitAll = function() {
                this.emit.apply(this, arguments);
                for (var a in this.nsps) this.nsps[a].emit.apply(this.nsps[a], arguments)
            },
            f(c.prototype),
            c.prototype.reconnection = function(a) {
                return arguments.length ? (this._reconnection = !!a, this) : this._reconnection
            },
            c.prototype.reconnectionAttempts = function(a) {
                return arguments.length ? (this._reconnectionAttempts = a, this) : this._reconnectionAttempts
            },
            c.prototype.reconnectionDelay = function(a) {
                return arguments.length ? (this._reconnectionDelay = a, this) : this._reconnectionDelay
            },
            c.prototype.reconnectionDelayMax = function(a) {
                return arguments.length ? (this._reconnectionDelayMax = a, this) : this._reconnectionDelayMax
            },
            c.prototype.timeout = function(a) {
                return arguments.length ? (this._timeout = a, this) : this._timeout
            },
            c.prototype.maybeReconnectOnOpen = function() {
                this.openReconnect || this.reconnecting || !this._reconnection || 0 !== this.attempts || (this.openReconnect = !0, this.reconnect())
            },
            c.prototype.open = c.prototype.connect = function(a) {
                if (j("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
                j("opening %s", this.uri),
                this.engine = d(this.uri, this.opts);
                var b = this.engine,
                c = this;
                this.readyState = "opening";
                var e = h(b, "open",
                function() {
                    c.onopen(),
                    a && a()
                }),
                f = h(b, "error",
                function(b) {
                    if (j("connect_error"), c.cleanup(), c.readyState = "closed", c.emitAll("connect_error", b), a) {
                        var d = new Error("Connection error");
                        d.data = b,
                        a(d)
                    }
                    c.maybeReconnectOnOpen()
                });
                if (!1 !== this._timeout) {
                    var g = this._timeout;
                    j("connect attempt will timeout after %d", g);
                    var i = setTimeout(function() {
                        j("connect attempt timed out after %d", g),
                        e.destroy(),
                        b.close(),
                        b.emit("error", "timeout"),
                        c.emitAll("connect_timeout", g)
                    },
                    g);
                    this.subs.push({
                        destroy: function() {
                            clearTimeout(i)
                        }
                    })
                }
                return this.subs.push(e),
                this.subs.push(f),
                this
            },
            c.prototype.onopen = function() {
                j("open"),
                this.cleanup(),
                this.readyState = "open",
                this.emit("open");
                var a = this.engine;
                this.subs.push(h(a, "data", i(this, "ondata"))),
                this.subs.push(h(this.decoder, "decoded", i(this, "ondecoded"))),
                this.subs.push(h(a, "error", i(this, "onerror"))),
                this.subs.push(h(a, "close", i(this, "onclose")))
            },
            c.prototype.ondata = function(a) {
                this.decoder.add(a)
            },
            c.prototype.ondecoded = function(a) {
                this.emit("packet", a)
            },
            c.prototype.onerror = function(a) {
                j("error", a),
                this.emitAll("error", a)
            },
            c.prototype.socket = function(a) {
                var b = this.nsps[a];
                if (!b) {
                    b = new e(this, a),
                    this.nsps[a] = b;
                    var c = this;
                    b.on("connect",
                    function() {
                        c.connected++
                    })
                }
                return b
            },
            c.prototype.destroy = function() {--this.connected || this.close()
            },
            c.prototype.packet = function(a) {
                j("writing packet %j", a);
                var b = this;
                b.encoding ? b.packetBuffer.push(a) : (b.encoding = !0, this.encoder.encode(a,
                function(a) {
                    for (var c = 0; c < a.length; c++) b.engine.write(a[c]);
                    b.encoding = !1,
                    b.processPacketQueue()
                }))
            },
            c.prototype.processPacketQueue = function() {
                if (this.packetBuffer.length > 0 && !this.encoding) {
                    var a = this.packetBuffer.shift();
                    this.packet(a)
                }
            },
            c.prototype.cleanup = function() {
                for (var a; a = this.subs.shift();) a.destroy();
                this.packetBuffer = [],
                this.encoding = !1,
                this.decoder.destroy()
            },
            c.prototype.close = c.prototype.disconnect = function() {
                this.skipReconnect = !0,
                this.engine.close()
            },
            c.prototype.onclose = function(a) {
                j("close"),
                this.cleanup(),
                this.readyState = "closed",
                this.emit("close", a),
                this._reconnection && !this.skipReconnect && this.reconnect()
            },
            c.prototype.reconnect = function() {
                if (this.reconnecting) return this;
                var a = this;
                if (this.attempts++, this.attempts > this._reconnectionAttempts) j("reconnect failed"),
                this.emitAll("reconnect_failed"),
                this.reconnecting = !1;
                else {
                    var b = this.attempts * this.reconnectionDelay();
                    b = Math.min(b, this.reconnectionDelayMax()),
                    j("will wait %dms before reconnect attempt", b),
                    this.reconnecting = !0;
                    var c = setTimeout(function() {
                        j("attempting reconnect"),
                        a.emitAll("reconnect_attempt", a.attempts),
                        a.emitAll("reconnecting", a.attempts),
                        a.open(function(b) {
                            b ? (j("reconnect attempt error"), a.reconnecting = !1, a.reconnect(), a.emitAll("reconnect_error", b.data)) : (j("reconnect success"), a.onreconnect())
                        })
                    },
                    b);
                    this.subs.push({
                        destroy: function() {
                            clearTimeout(c)
                        }
                    })
                }
            },
            c.prototype.onreconnect = function() {
                var a = this.attempts;
                this.attempts = 0,
                this.reconnecting = !1,
                this.emitAll("reconnect", a)
            }
        },
        {
            "./on": 4,
            "./socket": 5,
            "./url": 6,
            "component-bind": 7,
            "component-emitter": 8,
            debug: 9,
            "engine.io-client": 10,
            "object-component": 37,
            "socket.io-parser": 40
        }],
        4 : [function(a, b) {
            function c(a, b, c) {
                return a.on(b, c),
                {
                    destroy: function() {
                        a.removeListener(b, c)
                    }
                }
            }
            b.exports = c
        },
        {}],
        5 : [function(a, b, c) {
            function d(a, b) {
                this.io = a,
                this.nsp = b,
                this.json = this,
                this.ids = 0,
                this.acks = {},
                this.io.autoConnect && this.open(),
                this.receiveBuffer = [],
                this.sendBuffer = [],
                this.connected = !1,
                this.disconnected = !0,
                this.subEvents()
            } {
                var e = a("socket.io-parser"),
                f = a("component-emitter"),
                g = a("to-array"),
                h = a("./on"),
                i = a("component-bind"),
                j = a("debug")("socket.io-client:socket"),
                k = a("has-binary");
                a("indexof")
            }
            b.exports = c = d;
            var l = {
                connect: 1,
                connect_error: 1,
                connect_timeout: 1,
                disconnect: 1,
                error: 1,
                reconnect: 1,
                reconnect_attempt: 1,
                reconnect_failed: 1,
                reconnect_error: 1,
                reconnecting: 1
            },
            m = f.prototype.emit;
            f(d.prototype),
            d.prototype.subEvents = function() {
                var a = this.io;
                this.subs = [h(a, "open", i(this, "onopen")), h(a, "packet", i(this, "onpacket")), h(a, "close", i(this, "onclose"))]
            },
            d.prototype.open = d.prototype.connect = function() {
                return this.connected ? this: (this.io.open(), "open" == this.io.readyState && this.onopen(), this)
            },
            d.prototype.send = function() {
                var a = g(arguments);
                return a.unshift("message"),
                this.emit.apply(this, a),
                this
            },
            d.prototype.emit = function(a) {
                if (l.hasOwnProperty(a)) return m.apply(this, arguments),
                this;
                var b = g(arguments),
                c = e.EVENT;
                k(b) && (c = e.BINARY_EVENT);
                var d = {
                    type: c,
                    data: b
                };
                return "function" == typeof b[b.length - 1] && (j("emitting packet with ack id %d", this.ids), this.acks[this.ids] = b.pop(), d.id = this.ids++),
                this.connected ? this.packet(d) : this.sendBuffer.push(d),
                this
            },
            d.prototype.packet = function(a) {
                a.nsp = this.nsp,
                this.io.packet(a)
            },
            d.prototype.onopen = function() {
                j("transport is open - connecting"),
                "/" != this.nsp && this.packet({
                    type: e.CONNECT
                })
            },
            d.prototype.onclose = function(a) {
                j("close (%s)", a),
                this.connected = !1,
                this.disconnected = !0,
                this.emit("disconnect", a)
            },
            d.prototype.onpacket = function(a) {
                if (a.nsp == this.nsp) switch (a.type) {
                case e.CONNECT:
                    this.onconnect();
                    break;
                case e.EVENT:
                    this.onevent(a);
                    break;
                case e.BINARY_EVENT:
                    this.onevent(a);
                    break;
                case e.ACK:
                    this.onack(a);
                    break;
                case e.BINARY_ACK:
                    this.onack(a);
                    break;
                case e.DISCONNECT:
                    this.ondisconnect();
                    break;
                case e.ERROR:
                    this.emit("error", a.data)
                }
            },
            d.prototype.onevent = function(a) {
                var b = a.data || [];
                j("emitting event %j", b),
                null != a.id && (j("attaching ack callback to event"), b.push(this.ack(a.id))),
                this.connected ? m.apply(this, b) : this.receiveBuffer.push(b)
            },
            d.prototype.ack = function(a) {
                var b = this,
                c = !1;
                return function() {
                    if (!c) {
                        c = !0;
                        var d = g(arguments);
                        j("sending ack %j", d);
                        var f = k(d) ? e.BINARY_ACK: e.ACK;
                        b.packet({
                            type: f,
                            id: a,
                            data: d
                        })
                    }
                }
            },
            d.prototype.onack = function(a) {
                j("calling ack %s with %j", a.id, a.data);
                var b = this.acks[a.id];
                b.apply(this, a.data),
                delete this.acks[a.id]
            },
            d.prototype.onconnect = function() {
                this.connected = !0,
                this.disconnected = !1,
                this.emit("connect"),
                this.emitBuffered()
            },
            d.prototype.emitBuffered = function() {
                var a;
                for (a = 0; a < this.receiveBuffer.length; a++) m.apply(this, this.receiveBuffer[a]);
                for (this.receiveBuffer = [], a = 0; a < this.sendBuffer.length; a++) this.packet(this.sendBuffer[a]);
                this.sendBuffer = []
            },
            d.prototype.ondisconnect = function() {
                j("server disconnect (%s)", this.nsp),
                this.destroy(),
                this.onclose("io server disconnect")
            },
            d.prototype.destroy = function() {
                for (var a = 0; a < this.subs.length; a++) this.subs[a].destroy();
                this.io.destroy(this)
            },
            d.prototype.close = d.prototype.disconnect = function() {
                return this.connected ? (j("performing disconnect (%s)", this.nsp), this.packet({
                    type: e.DISCONNECT
                }), this.destroy(), this.onclose("io client disconnect"), this) : this
            }
        },
        {
            "./on": 4,
            "component-bind": 7,
            "component-emitter": 8,
            debug: 9,
            "has-binary": 32,
            indexof: 36,
            "socket.io-parser": 40,
            "to-array": 44
        }],
        6 : [function(a, b) { (function(c) {
                function d(a, b) {
                    var d = a,
                    b = b || c.location;
                    return null == a && (a = b.protocol + "//" + b.hostname),
                    "string" == typeof a && ("/" == a.charAt(0) && "undefined" != typeof b && (a = b.hostname + a), /^(https?|wss?):\/\//.test(a) || (f("protocol-less url %s", a), a = "undefined" != typeof b ? b.protocol + "//" + a: "https://" + a), f("parse %s", a), d = e(a)),
                    d.port || (/^(http|ws)$/.test(d.protocol) ? d.port = "80": /^(http|ws)s$/.test(d.protocol) && (d.port = "443")),
                    d.path = d.path || "/",
                    d.id = d.protocol + "://" + d.host + ":" + d.port,
                    d.href = d.protocol + "://" + d.host + (b && b.port == d.port ? "": ":" + d.port),
                    d
                }
                var e = a("parseuri"),
                f = a("debug")("socket.io-client:url");
                b.exports = d
            }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            debug: 9,
            parseuri: 38
        }],
        7 : [function(a, b) {
            var c = [].slice;
            b.exports = function(a, b) {
                if ("string" == typeof b && (b = a[b]), "function" != typeof b) throw new Error("bind() requires a function");
                var d = c.call(arguments, 2);
                return function() {
                    return b.apply(a, d.concat(c.call(arguments)))
                }
            }
        },
        {}],
        8 : [function(a, b) {
            function c(a) {
                return a ? d(a) : void 0
            }
            function d(a) {
                for (var b in c.prototype) a[b] = c.prototype[b];
                return a
            }
            b.exports = c,
            c.prototype.on = c.prototype.addEventListener = function(a, b) {
                return this._callbacks = this._callbacks || {},
                (this._callbacks[a] = this._callbacks[a] || []).push(b),
                this
            },
            c.prototype.once = function(a, b) {
                function c() {
                    d.off(a, c),
                    b.apply(this, arguments)
                }
                var d = this;
                return this._callbacks = this._callbacks || {},
                c.fn = b,
                this.on(a, c),
                this
            },
            c.prototype.off = c.prototype.removeListener = c.prototype.removeAllListeners = c.prototype.removeEventListener = function(a, b) {
                if (this._callbacks = this._callbacks || {},
                0 == arguments.length) return this._callbacks = {},
                this;
                var c = this._callbacks[a];
                if (!c) return this;
                if (1 == arguments.length) return delete this._callbacks[a],
                this;
                for (var d, e = 0; e < c.length; e++) if (d = c[e], d === b || d.fn === b) {
                    c.splice(e, 1);
                    break
                }
                return this
            },
            c.prototype.emit = function(a) {
                this._callbacks = this._callbacks || {};
                var b = [].slice.call(arguments, 1),
                c = this._callbacks[a];
                if (c) {
                    c = c.slice(0);
                    for (var d = 0,
                    e = c.length; e > d; ++d) c[d].apply(this, b)
                }
                return this
            },
            c.prototype.listeners = function(a) {
                return this._callbacks = this._callbacks || {},
                this._callbacks[a] || []
            },
            c.prototype.hasListeners = function(a) {
                return !! this.listeners(a).length
            }
        },
        {}],
        9 : [function(a, b) {
            function c(a) {
                return c.enabled(a) ?
                function(b) {
                    b = d(b);
                    var e = new Date,
                    f = e - (c[a] || e);
                    c[a] = e,
                    b = a + " " + b + " +" + c.humanize(f),
                    window.console && console.log && Function.prototype.apply.call(console.log, console, arguments)
                }: function() {}
            }
            function d(a) {
                return a instanceof Error ? a.stack || a.message: a
            }
            b.exports = c,
            c.names = [],
            c.skips = [],
            c.enable = function(a) {
                try {
                    localStorage.debug = a
                } catch(b) {}
                for (var d = (a || "").split(/[\s,]+/), e = d.length, f = 0; e > f; f++) a = d[f].replace("*", ".*?"),
                "-" === a[0] ? c.skips.push(new RegExp("^" + a.substr(1) + "$")) : c.names.push(new RegExp("^" + a + "$"))
            },
            c.disable = function() {
                c.enable("")
            },
            c.humanize = function(a) {
                var b = 1e3,
                c = 6e4,
                d = 60 * c;
                return a >= d ? (a / d).toFixed(1) + "h": a >= c ? (a / c).toFixed(1) + "m": a >= b ? (a / b | 0) + "s": a + "ms"
            },
            c.enabled = function(a) {
                for (var b = 0,
                d = c.skips.length; d > b; b++) if (c.skips[b].test(a)) return ! 1;
                for (var b = 0,
                d = c.names.length; d > b; b++) if (c.names[b].test(a)) return ! 0;
                return ! 1
            };
            try {
                window.localStorage && c.enable(localStorage.debug)
            } catch(e) {}
        },
        {}],
        10 : [function(a, b) {
            b.exports = a("./lib/")
        },
        {
            "./lib/": 11
        }],
        11 : [function(a, b) {
            b.exports = a("./socket"),
            b.exports.parser = a("engine.io-parser")
        },
        {
            "./socket": 12,
            "engine.io-parser": 21
        }],
        12 : [function(a, b) { (function(c) {
                function d(a, b) {
                    if (! (this instanceof d)) return new d(a, b);
                    if (b = b || {},
                    a && "object" == typeof a && (b = a, a = null), a && (a = k(a), b.host = a.host, b.secure = "https" == a.protocol || "wss" == a.protocol, b.port = a.port, a.query && (b.query = a.query)), this.secure = null != b.secure ? b.secure: c.location && "https:" == location.protocol, b.host) {
                        var e = b.host.split(":");
                        b.hostname = e.shift(),
                        e.length && (b.port = e.pop())
                    }
                    this.agent = b.agent || !1,
                    this.hostname = b.hostname || (c.location ? location.hostname: "localhost"),
                    this.port = b.port || (c.location && location.port ? location.port: this.secure ? 443 : 80),
                    this.query = b.query || {},
                    "string" == typeof this.query && (this.query = m.decode(this.query)),
                    this.upgrade = !1 !== b.upgrade,
                    this.path = (b.path || "/engine.io").replace(/\/$/, "") + "/",
                    this.forceJSONP = !!b.forceJSONP,
                    this.jsonp = !1 !== b.jsonp,
                    this.forceBase64 = !!b.forceBase64,
                    this.enablesXDR = !!b.enablesXDR,
                    this.timestampParam = b.timestampParam || "t",
                    this.timestampRequests = b.timestampRequests,
                    this.transports = b.transports || ["polling", "websocket"],
                    this.readyState = "",
                    this.writeBuffer = [],
                    this.callbackBuffer = [],
                    this.policyPort = b.policyPort || 843,
                    this.rememberUpgrade = b.rememberUpgrade || !1,
                    this.open(),
                    this.binaryType = null,
                    this.onlyBinaryUpgrades = b.onlyBinaryUpgrades
                }
                function e(a) {
                    var b = {};
                    for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
                    return b
                }
                var f = a("./transports"),
                g = a("component-emitter"),
                h = a("debug")("engine.io-client:socket"),
                i = a("indexof"),
                j = a("engine.io-parser"),
                k = a("parseuri"),
                l = a("parsejson"),
                m = a("parseqs");
                b.exports = d,
                d.priorWebsocketSuccess = !1,
                g(d.prototype),
                d.protocol = j.protocol,
                d.Socket = d,
                d.Transport = a("./transport"),
                d.transports = a("./transports"),
                d.parser = a("engine.io-parser"),
                d.prototype.createTransport = function(a) {
                    h('creating transport "%s"', a);
                    var b = e(this.query);
                    b.EIO = j.protocol,
                    b.transport = a,
                    this.id && (b.sid = this.id);
                    var c = new f[a]({
                        agent: this.agent,
                        hostname: this.hostname,
                        port: this.port,
                        secure: this.secure,
                        path: this.path,
                        query: b,
                        forceJSONP: this.forceJSONP,
                        jsonp: this.jsonp,
                        forceBase64: this.forceBase64,
                        enablesXDR: this.enablesXDR,
                        timestampRequests: this.timestampRequests,
                        timestampParam: this.timestampParam,
                        policyPort: this.policyPort,
                        socket: this
                    });
                    return c
                },
                d.prototype.open = function() {
                    var a;
                    if (this.rememberUpgrade && d.priorWebsocketSuccess && -1 != this.transports.indexOf("websocket")) a = "websocket";
                    else {
                        if (0 == this.transports.length) {
                            var b = this;
                            return void setTimeout(function() {
                                b.emit("error", "No transports available")
                            },
                            0)
                        }
                        a = this.transports[0]
                    }
                    this.readyState = "opening";
                    var a;
                    try {
                        a = this.createTransport(a)
                    } catch(c) {
                        return this.transports.shift(),
                        void this.open()
                    }
                    a.open(),
                    this.setTransport(a)
                },
                d.prototype.setTransport = function(a) {
                    h("setting transport %s", a.name);
                    var b = this;
                    this.transport && (h("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()),
                    this.transport = a,
                    a.on("drain",
                    function() {
                        b.onDrain()
                    }).on("packet",
                    function(a) {
                        b.onPacket(a)
                    }).on("error",
                    function(a) {
                        b.onError(a)
                    }).on("close",
                    function() {
                        b.onClose("transport close")
                    })
                },
                d.prototype.probe = function(a) {
                    function b() {
                        if (m.onlyBinaryUpgrades) {
                            var b = !this.supportsBinary && m.transport.supportsBinary;
                            l = l || b
                        }
                        l || (h('probe transport "%s" opened', a), k.send([{
                            type: "ping",
                            data: "probe"
                        }]), k.once("packet",
                        function(b) {
                            if (!l) if ("pong" == b.type && "probe" == b.data) h('probe transport "%s" pong', a),
                            m.upgrading = !0,
                            m.emit("upgrading", k),
                            d.priorWebsocketSuccess = "websocket" == k.name,
                            h('pausing current transport "%s"', m.transport.name),
                            m.transport.pause(function() {
                                l || "closed" != m.readyState && "closing" != m.readyState && (h("changing transport and sending upgrade packet"), j(), m.setTransport(k), k.send([{
                                    type: "upgrade"
                                }]), m.emit("upgrade", k), k = null, m.upgrading = !1, m.flush())
                            });
                            else {
                                h('probe transport "%s" failed', a);
                                var c = new Error("probe error");
                                c.transport = k.name,
                                m.emit("upgradeError", c)
                            }
                        }))
                    }
                    function c() {
                        l || (l = !0, j(), k.close(), k = null)
                    }
                    function e(b) {
                        var d = new Error("probe error: " + b);
                        d.transport = k.name,
                        c(),
                        h('probe transport "%s" failed because of error: %s', a, b),
                        m.emit("upgradeError", d)
                    }
                    function f() {
                        e("transport closed")
                    }
                    function g() {
                        e("socket closed")
                    }
                    function i(a) {
                        k && a.name != k.name && (h('"%s" works - aborting "%s"', a.name, k.name), c())
                    }
                    function j() {
                        k.removeListener("open", b),
                        k.removeListener("error", e),
                        k.removeListener("close", f),
                        m.removeListener("close", g),
                        m.removeListener("upgrading", i)
                    }
                    h('probing transport "%s"', a);
                    var k = this.createTransport(a, {
                        probe: 1
                    }),
                    l = !1,
                    m = this;
                    d.priorWebsocketSuccess = !1,
                    k.once("open", b),
                    k.once("error", e),
                    k.once("close", f),
                    this.once("close", g),
                    this.once("upgrading", i),
                    k.open()
                },
                d.prototype.onOpen = function() {
                    if (h("socket open"), this.readyState = "open", d.priorWebsocketSuccess = "websocket" == this.transport.name, this.emit("open"), this.flush(), "open" == this.readyState && this.upgrade && this.transport.pause) {
                        h("starting upgrade probes");
                        for (var a = 0,
                        b = this.upgrades.length; b > a; a++) this.probe(this.upgrades[a])
                    }
                },
                d.prototype.onPacket = function(a) {
                    if ("opening" == this.readyState || "open" == this.readyState) switch (h('socket receive: type "%s", data "%s"', a.type, a.data), this.emit("packet", a), this.emit("heartbeat"), a.type) {
                    case "open":
                        this.onHandshake(l(a.data));
                        break;
                    case "pong":
                        this.setPing();
                        break;
                    case "error":
                        var b = new Error("server error");
                        b.code = a.data,
                        this.emit("error", b);
                        break;
                    case "message":
                        this.emit("data", a.data),
                        this.emit("message", a.data)
                    } else h('packet received with socket readyState "%s"', this.readyState)
                },
                d.prototype.onHandshake = function(a) {
                    this.emit("handshake", a),
                    this.id = a.sid,
                    this.transport.query.sid = a.sid,
                    this.upgrades = this.filterUpgrades(a.upgrades),
                    this.pingInterval = a.pingInterval,
                    this.pingTimeout = a.pingTimeout,
                    this.onOpen(),
                    "closed" != this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
                },
                d.prototype.onHeartbeat = function(a) {
                    clearTimeout(this.pingTimeoutTimer);
                    var b = this;
                    b.pingTimeoutTimer = setTimeout(function() {
                        "closed" != b.readyState && b.onClose("ping timeout")
                    },
                    a || b.pingInterval + b.pingTimeout)
                },
                d.prototype.setPing = function() {
                    var a = this;
                    clearTimeout(a.pingIntervalTimer),
                    a.pingIntervalTimer = setTimeout(function() {
                        h("writing ping packet - expecting pong within %sms", a.pingTimeout),
                        a.ping(),
                        a.onHeartbeat(a.pingTimeout)
                    },
                    a.pingInterval)
                },
                d.prototype.ping = function() {
                    this.sendPacket("ping")
                },
                d.prototype.onDrain = function() {
                    for (var a = 0; a < this.prevBufferLen; a++) this.callbackBuffer[a] && this.callbackBuffer[a]();
                    this.writeBuffer.splice(0, this.prevBufferLen),
                    this.callbackBuffer.splice(0, this.prevBufferLen),
                    this.prevBufferLen = 0,
                    0 == this.writeBuffer.length ? this.emit("drain") : this.flush()
                },
                d.prototype.flush = function() {
                    "closed" != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (h("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
                },
                d.prototype.write = d.prototype.send = function(a, b) {
                    return this.sendPacket("message", a, b),
                    this
                },
                d.prototype.sendPacket = function(a, b, c) {
                    var d = {
                        type: a,
                        data: b
                    };
                    this.emit("packetCreate", d),
                    this.writeBuffer.push(d),
                    this.callbackBuffer.push(c),
                    this.flush()
                },
                d.prototype.close = function() {
                    return ("opening" == this.readyState || "open" == this.readyState) && (this.onClose("forced close"), h("socket closing - telling transport to close"), this.transport.close()),
                    this
                },
                d.prototype.onError = function(a) {
                    h("socket error %j", a),
                    d.priorWebsocketSuccess = !1,
                    this.emit("error", a),
                    this.onClose("transport error", a)
                },
                d.prototype.onClose = function(a, b) {
                    if ("opening" == this.readyState || "open" == this.readyState) {
                        h('socket close with reason: "%s"', a);
                        var c = this;
                        clearTimeout(this.pingIntervalTimer),
                        clearTimeout(this.pingTimeoutTimer),
                        setTimeout(function() {
                            c.writeBuffer = [],
                            c.callbackBuffer = [],
                            c.prevBufferLen = 0
                        },
                        0),
                        this.transport.removeAllListeners("close"),
                        this.transport.close(),
                        this.transport.removeAllListeners(),
                        this.readyState = "closed",
                        this.id = null,
                        this.emit("close", a, b)
                    }
                },
                d.prototype.filterUpgrades = function(a) {
                    for (var b = [], c = 0, d = a.length; d > c; c++)~i(this.transports, a[c]) && b.push(a[c]);
                    return b
                }
            }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            "./transport": 13,
            "./transports": 14,
            "component-emitter": 8,
            debug: 9,
            "engine.io-parser": 21,
            indexof: 36,
            parsejson: 28,
            parseqs: 29,
            parseuri: 30
        }],
        13 : [function(a, b) {
            function c(a) {
                this.path = a.path,
                this.hostname = a.hostname,
                this.port = a.port,
                this.secure = a.secure,
                this.query = a.query,
                this.timestampParam = a.timestampParam,
                this.timestampRequests = a.timestampRequests,
                this.readyState = "",
                this.agent = a.agent || !1,
                this.socket = a.socket,
                this.enablesXDR = a.enablesXDR
            }
            var d = a("engine.io-parser"),
            e = a("component-emitter");
            b.exports = c,
            e(c.prototype),
            c.timestamps = 0,
            c.prototype.onError = function(a, b) {
                var c = new Error(a);
                return c.type = "TransportError",
                c.description = b,
                this.emit("error", c),
                this
            },
            c.prototype.open = function() {
                return ("closed" == this.readyState || "" == this.readyState) && (this.readyState = "opening", this.doOpen()),
                this
            },
            c.prototype.close = function() {
                return ("opening" == this.readyState || "open" == this.readyState) && (this.doClose(), this.onClose()),
                this
            },
            c.prototype.send = function(a) {
                if ("open" != this.readyState) throw new Error("Transport not open");
                this.write(a)
            },
            c.prototype.onOpen = function() {
                this.readyState = "open",
                this.writable = !0,
                this.emit("open")
            },
            c.prototype.onData = function(a) {
                var b = d.decodePacket(a, this.socket.binaryType);
                this.onPacket(b)
            },
            c.prototype.onPacket = function(a) {
                this.emit("packet", a)
            },
            c.prototype.onClose = function() {
                this.readyState = "closed",
                this.emit("close")
            }
        },
        {
            "component-emitter": 8,
            "engine.io-parser": 21
        }],
        14 : [function(a, b, c) { (function(b) {
                function d(a) {
                    var c, d = !1,
                    h = !1,
                    i = !1 !== a.jsonp;
                    if (b.location) {
                        var j = "https:" == location.protocol,
                        k = location.port;
                        k || (k = j ? 443 : 80),
                        d = a.hostname != location.hostname || k != a.port,
                        h = a.secure != j
                    }
                    if (a.xdomain = d, a.xscheme = h, c = new e(a), "open" in c && !a.forceJSONP) return new f(a);
                    if (!i) throw new Error("JSONP disabled");
                    return new g(a)
                }
                var e = a("xmlhttprequest"),
                f = a("./polling-xhr"),
                g = a("./polling-jsonp"),
                h = a("./websocket");
                c.polling = d,
                c.websocket = h
            }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            "./polling-jsonp": 15,
            "./polling-xhr": 16,
            "./websocket": 18,
            xmlhttprequest: 19
        }],
        15 : [function(a, b) { (function(c) {
                function d() {}
                function e(a) {
                    f.call(this, a),
                    this.query = this.query || {},
                    h || (c.___eio || (c.___eio = []), h = c.___eio),
                    this.index = h.length;
                    var b = this;
                    h.push(function(a) {
                        b.onData(a)
                    }),
                    this.query.j = this.index,
                    c.document && c.addEventListener && c.addEventListener("beforeunload",
                    function() {
                        b.script && (b.script.onerror = d)
                    })
                }
                var f = a("./polling"),
                g = a("component-inherit");
                b.exports = e;
                var h, i = /\n/g,
                j = /\\n/g;
                g(e, f),
                e.prototype.supportsBinary = !1,
                e.prototype.doClose = function() {
                    this.script && (this.script.parentNode.removeChild(this.script), this.script = null),
                    this.form && (this.form.parentNode.removeChild(this.form), this.form = null),
                    f.prototype.doClose.call(this)
                },
                e.prototype.doPoll = function() {
                    var a = this,
                    b = document.createElement("script");
                    this.script && (this.script.parentNode.removeChild(this.script), this.script = null),
                    b.async = !0,
                    b.src = this.uri(),
                    b.onerror = function(b) {
                        a.onError("jsonp poll error", b)
                    };
                    var c = document.getElementsByTagName("script")[0];
                    c.parentNode.insertBefore(b, c),
                    this.script = b;
                    var d = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);
                    d && setTimeout(function() {
                        var a = document.createElement("iframe");
                        document.body.appendChild(a),
                        document.body.removeChild(a)
                    },
                    100)
                },
                e.prototype.doWrite = function(a, b) {
                    function c() {
                        d(),
                        b()
                    }
                    function d() {
                        if (e.iframe) try {
                            e.form.removeChild(e.iframe)
                        } catch(a) {
                            e.onError("jsonp polling iframe removal error", a)
                        }
                        try {
                            var b = '<iframe src="javascript:0" name="' + e.iframeId + '">';
                            f = document.createElement(b)
                        } catch(a) {
                            f = document.createElement("iframe"),
                            f.name = e.iframeId,
                            f.src = "javascript:0"
                        }
                        f.id = e.iframeId,
                        e.form.appendChild(f),
                        e.iframe = f
                    }
                    var e = this;
                    if (!this.form) {
                        var f, g = document.createElement("form"),
                        h = document.createElement("textarea"),
                        k = this.iframeId = "eio_iframe_" + this.index;
                        g.className = "socketio",
                        g.style.position = "absolute",
                        g.style.top = "-1000px",
                        g.style.left = "-1000px",
                        g.target = k,
                        g.method = "POST",
                        g.setAttribute("accept-charset", "utf-8"),
                        h.name = "d",
                        g.appendChild(h),
                        document.body.appendChild(g),
                        this.form = g,
                        this.area = h
                    }
                    this.form.action = this.uri(),
                    d(),
                    a = a.replace(j, "\\\n"),
                    this.area.value = a.replace(i, "\\n");
                    try {
                        this.form.submit()
                    } catch(l) {}
                    this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                        "complete" == e.iframe.readyState && c()
                    }: this.iframe.onload = c
                }
            }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            "./polling": 17,
            "component-inherit": 20
        }],
        16 : [function(a, b) { (function(c) {
                function d() {}
                function e(a) {
                    if (i.call(this, a), c.location) {
                        var b = "https:" == location.protocol,
                        d = location.port;
                        d || (d = b ? 443 : 80),
                        this.xd = a.hostname != c.location.hostname || d != a.port,
                        this.xs = a.secure != b
                    }
                }
                function f(a) {
                    this.method = a.method || "GET",
                    this.uri = a.uri,
                    this.xd = !!a.xd,
                    this.xs = !!a.xs,
                    this.async = !1 !== a.async,
                    this.data = void 0 != a.data ? a.data: null,
                    this.agent = a.agent,
                    this.isBinary = a.isBinary,
                    this.supportsBinary = a.supportsBinary,
                    this.enablesXDR = a.enablesXDR,
                    this.create()
                }
                function g() {
                    for (var a in f.requests) f.requests.hasOwnProperty(a) && f.requests[a].abort()
                }
                var h = a("xmlhttprequest"),
                i = a("./polling"),
                j = a("component-emitter"),
                k = a("component-inherit"),
                l = a("debug")("engine.io-client:polling-xhr");
                b.exports = e,
                b.exports.Request = f,
                k(e, i),
                e.prototype.supportsBinary = !0,
                e.prototype.request = function(a) {
                    return a = a || {},
                    a.uri = this.uri(),
                    a.xd = this.xd,
                    a.xs = this.xs,
                    a.agent = this.agent || !1,
                    a.supportsBinary = this.supportsBinary,
                    a.enablesXDR = this.enablesXDR,
                    new f(a)
                },
                e.prototype.doWrite = function(a, b) {
                    var c = "string" != typeof a && void 0 !== a,
                    d = this.request({
                        method: "POST",
                        data: a,
                        isBinary: c
                    }),
                    e = this;
                    d.on("success", b),
                    d.on("error",
                    function(a) {
                        e.onError("xhr post error", a)
                    }),
                    this.sendXhr = d
                },
                e.prototype.doPoll = function() {
                    l("xhr poll");
                    var a = this.request(),
                    b = this;
                    a.on("data",
                    function(a) {
                        b.onData(a)
                    }),
                    a.on("error",
                    function(a) {
                        b.onError("xhr poll error", a)
                    }),
                    this.pollXhr = a
                },
                j(f.prototype),
                f.prototype.create = function() {
                    var a = this.xhr = new h({
                        agent: this.agent,
                        xdomain: this.xd,
                        xscheme: this.xs,
                        enablesXDR: this.enablesXDR
                    }),
                    b = this;
                    try {
                        if (l("xhr open %s: %s", this.method, this.uri), a.open(this.method, this.uri, this.async), this.supportsBinary && (a.responseType = "arraybuffer"), "POST" == this.method) try {
                            this.isBinary ? a.setRequestHeader("Content-type", "application/octet-stream") : a.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                        } catch(d) {}
                        "withCredentials" in a && (a.withCredentials = !0),
                        this.hasXDR() ? (a.onload = function() {
                            b.onLoad()
                        },
                        a.onerror = function() {
                            b.onError(a.responseText)
                        }) : a.onreadystatechange = function() {
                            4 == a.readyState && (200 == a.status || 1223 == a.status ? b.onLoad() : setTimeout(function() {
                                b.onError(a.status)
                            },
                            0))
                        },
                        l("xhr data %s", this.data),
                        a.send(this.data)
                    } catch(d) {
                        return void setTimeout(function() {
                            b.onError(d)
                        },
                        0)
                    }
                    c.document && (this.index = f.requestsCount++, f.requests[this.index] = this)
                },
                f.prototype.onSuccess = function() {
                    this.emit("success"),
                    this.cleanup()
                },
                f.prototype.onData = function(a) {
                    this.emit("data", a),
                    this.onSuccess()
                },
                f.prototype.onError = function(a) {
                    this.emit("error", a),
                    this.cleanup()
                },
                f.prototype.cleanup = function() {
                    if ("undefined" != typeof this.xhr && null !== this.xhr) {
                        this.hasXDR() ? this.xhr.onload = this.xhr.onerror = d: this.xhr.onreadystatechange = d;
                        try {
                            this.xhr.abort()
                        } catch(a) {}
                        c.document && delete f.requests[this.index],
                        this.xhr = null
                    }
                },
                f.prototype.onLoad = function() {
                    var a;
                    try {
                        var b;
                        try {
                            b = this.xhr.getResponseHeader("Content-Type")
                        } catch(c) {}
                        a = "application/octet-stream" === b ? this.xhr.response: this.supportsBinary ? "ok": this.xhr.responseText
                    } catch(c) {
                        this.onError(c)
                    }
                    null != a && this.onData(a)
                },
                f.prototype.hasXDR = function() {
                    return "undefined" != typeof c.XDomainRequest && !this.xs && this.enablesXDR
                },
                f.prototype.abort = function() {
                    this.cleanup()
                },
                c.document && (f.requestsCount = 0, f.requests = {},
                c.attachEvent ? c.attachEvent("onunload", g) : c.addEventListener && c.addEventListener("beforeunload", g))
            }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            "./polling": 17,
            "component-emitter": 8,
            "component-inherit": 20,
            debug: 9,
            xmlhttprequest: 19
        }],
        17 : [function(a, b) {
            function c(a) {
                var b = a && a.forceBase64; (!i || b) && (this.supportsBinary = !1),
                d.call(this, a)
            }
            var d = a("../transport"),
            e = a("parseqs"),
            f = a("engine.io-parser"),
            g = a("component-inherit"),
            h = a("debug")("engine.io-client:polling");
            b.exports = c;
            var i = function() {
                var b = a("xmlhttprequest"),
                c = new b({
                    agent: this.agent,
                    xdomain: !1
                });
                return null != c.responseType
            } ();
            g(c, d),
            c.prototype.name = "polling",
            c.prototype.doOpen = function() {
                this.poll()
            },
            c.prototype.pause = function(a) {
                function b() {
                    h("paused"),
                    c.readyState = "paused",
                    a()
                }
                var c = this;
                if (this.readyState = "pausing", this.polling || !this.writable) {
                    var d = 0;
                    this.polling && (h("we are currently polling - waiting to pause"), d++, this.once("pollComplete",
                    function() {
                        h("pre-pause polling complete"),
                        --d || b()
                    })),
                    this.writable || (h("we are currently writing - waiting to pause"), d++, this.once("drain",
                    function() {
                        h("pre-pause writing complete"),
                        --d || b()
                    }))
                } else b()
            },
            c.prototype.poll = function() {
                h("polling"),
                this.polling = !0,
                this.doPoll(),
                this.emit("poll")
            },
            c.prototype.onData = function(a) {
                var b = this;
                h("polling got data %s", a);
                var c = function(a) {
                    return "opening" == b.readyState && b.onOpen(),
                    "close" == a.type ? (b.onClose(), !1) : void b.onPacket(a)
                };
                f.decodePayload(a, this.socket.binaryType, c),
                "closed" != this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" == this.readyState ? this.poll() : h('ignoring poll - transport state "%s"', this.readyState))
            },
            c.prototype.doClose = function() {
                function a() {
                    h("writing close packet"),
                    b.write([{
                        type: "close"
                    }])
                }
                var b = this;
                "open" == this.readyState ? (h("transport open - closing"), a()) : (h("transport not open - deferring close"), this.once("open", a))
            },
            c.prototype.write = function(a) {
                var b = this;
                this.writable = !1;
                var c = function() {
                    b.writable = !0,
                    b.emit("drain")
                },
                b = this;
                f.encodePayload(a, this.supportsBinary,
                function(a) {
                    b.doWrite(a, c)
                })
            },
            c.prototype.uri = function() {
                var a = this.query || {},
                b = this.secure ? "https": "http",
                c = "";
                return ! 1 !== this.timestampRequests && (a[this.timestampParam] = +new Date + "-" + d.timestamps++),
                this.supportsBinary || a.sid || (a.b64 = 1),
                a = e.encode(a),
                this.port && ("https" == b && 443 != this.port || "http" == b && 80 != this.port) && (c = ":" + this.port),
                a.length && (a = "?" + a),
                b + "://" + this.hostname + c + this.path + a
            }
        },
        {
            "../transport": 13,
            "component-inherit": 20,
            debug: 9,
            "engine.io-parser": 21,
            parseqs: 29,
            xmlhttprequest: 19
        }],
        18 : [function(a, b) {
            function c(a) {
                var b = a && a.forceBase64;
                b && (this.supportsBinary = !1),
                d.call(this, a)
            }
            var d = a("../transport"),
            e = a("engine.io-parser"),
            f = a("parseqs"),
            g = a("component-inherit"),
            h = a("debug")("engine.io-client:websocket"),
            i = a("ws");
            b.exports = c,
            g(c, d),
            c.prototype.name = "websocket",
            c.prototype.supportsBinary = !0,
            c.prototype.doOpen = function() {
                if (this.check()) {
                    var a = this.uri(),
                    b = void 0,
                    c = {
                        agent: this.agent
                    };
                    this.ws = new i(a, b, c),
                    void 0 === this.ws.binaryType && (this.supportsBinary = !1),
                    this.ws.binaryType = "arraybuffer",
                    this.addEventListeners()
                }
            },
            c.prototype.addEventListeners = function() {
                var a = this;
                this.ws.onopen = function() {
                    a.onOpen()
                },
                this.ws.onclose = function() {
                    a.onClose()
                },
                this.ws.onmessage = function(b) {
                    a.onData(b.data)
                },
                this.ws.onerror = function(b) {
                    a.onError("websocket error", b)
                }
            },
            "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent) && (c.prototype.onData = function(a) {
                var b = this;
                setTimeout(function() {
                    d.prototype.onData.call(b, a)
                },
                0)
            }),
            c.prototype.write = function(a) {
                function b() {
                    c.writable = !0,
                    c.emit("drain")
                }
                var c = this;
                this.writable = !1;
                for (var d = 0,
                f = a.length; f > d; d++) e.encodePacket(a[d], this.supportsBinary,
                function(a) {
                    try {
                        c.ws.send(a)
                    } catch(b) {
                        h("websocket closed before onclose event")
                    }
                });
                setTimeout(b, 0)
            },
            c.prototype.onClose = function() {
                d.prototype.onClose.call(this)
            },
            c.prototype.doClose = function() {
                "undefined" != typeof this.ws && this.ws.close()
            },
            c.prototype.uri = function() {
                var a = this.query || {},
                b = this.secure ? "wss": "ws",
                c = "";
                return this.port && ("wss" == b && 443 != this.port || "ws" == b && 80 != this.port) && (c = ":" + this.port),
                this.timestampRequests && (a[this.timestampParam] = +new Date),
                this.supportsBinary || (a.b64 = 1),
                a = f.encode(a),
                a.length && (a = "?" + a),
                b + "://" + this.hostname + c + this.path + a
            },
            c.prototype.check = function() {
                return ! (!i || "__initialize" in i && this.name === c.prototype.name)
            }
        },
        {
            "../transport": 13,
            "component-inherit": 20,
            debug: 9,
            "engine.io-parser": 21,
            parseqs: 29,
            ws: 31
        }],
        19 : [function(a, b) {
            var c = a("has-cors");
            b.exports = function(a) {
                var b = a.xdomain,
                d = a.xscheme,
                e = a.enablesXDR;
                try {
                    if ("undefined" != typeof XDomainRequest && !d && e) return new XDomainRequest
                } catch(f) {}
                try {
                    if ("undefined" != typeof XMLHttpRequest && (!b || c)) return new XMLHttpRequest
                } catch(f) {}
                if (!b) try {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                } catch(f) {}
            }
        },
        {
            "has-cors": 34
        }],
        20 : [function(a, b) {
            b.exports = function(a, b) {
                var c = function() {};
                c.prototype = b.prototype,
                a.prototype = new c,
                a.prototype.constructor = a
            }
        },
        {}],
        21 : [function(a, b, c) { (function(b) {
                function d(a, b, d) {
                    if (!b) return c.encodeBase64Packet(a, d);
                    var e = a.data,
                    f = new Uint8Array(e),
                    g = new Uint8Array(1 + e.byteLength);
                    g[0] = n[a.type];
                    for (var h = 0; h < f.length; h++) g[h + 1] = f[h];
                    return d(g.buffer)
                }
                function e(a, b, d) {
                    if (!b) return c.encodeBase64Packet(a, d);
                    var e = new FileReader;
                    return e.onload = function() {
                        a.data = e.result,
                        c.encodePacket(a, b, !0, d)
                    },
                    e.readAsArrayBuffer(a.data)
                }
                function f(a, b, d) {
                    if (!b) return c.encodeBase64Packet(a, d);
                    if (m) return e(a, b, d);
                    var f = new Uint8Array(1);
                    f[0] = n[a.type];
                    var g = new q([f.buffer, a.data]);
                    return d(g)
                }
                function g(a, b, c) {
                    for (var d = new Array(a.length), e = k(a.length, c), f = function(a, c, e) {
                        b(c,
                        function(b, c) {
                            d[a] = c,
                            e(b, d)
                        })
                    },
                    g = 0; g < a.length; g++) f(g, a[g], e)
                }
                var h = a("./keys"),
                i = a("arraybuffer.slice"),
                j = a("base64-arraybuffer"),
                k = a("after"),
                l = a("utf8"),
                m = navigator.userAgent.match(/Android/i);
                c.protocol = 3;
                var n = c.packets = {
                    open: 0,
                    close: 1,
                    ping: 2,
                    pong: 3,
                    message: 4,
                    upgrade: 5,
                    noop: 6
                },
                o = h(n),
                p = {
                    type: "error",
                    data: "parser error"
                },
                q = a("blob");
                c.encodePacket = function(a, c, e, g) {
                    "function" == typeof c && (g = c, c = !1),
                    "function" == typeof e && (g = e, e = null);
                    var h = void 0 === a.data ? void 0 : a.data.buffer || a.data;
                    if (b.ArrayBuffer && h instanceof ArrayBuffer) return d(a, c, g);
                    if (q && h instanceof b.Blob) return f(a, c, g);
                    var i = n[a.type];
                    return void 0 !== a.data && (i += e ? l.encode(String(a.data)) : String(a.data)),
                    g("" + i)
                },
                c.encodeBase64Packet = function(a, d) {
                    var e = "b" + c.packets[a.type];
                    if (q && a.data instanceof q) {
                        var f = new FileReader;
                        return f.onload = function() {
                            var a = f.result.split(",")[1];
                            d(e + a)
                        },
                        f.readAsDataURL(a.data)
                    }
                    var g;
                    try {
                        g = String.fromCharCode.apply(null, new Uint8Array(a.data))
                    } catch(h) {
                        for (var i = new Uint8Array(a.data), j = new Array(i.length), k = 0; k < i.length; k++) j[k] = i[k];
                        g = String.fromCharCode.apply(null, j)
                    }
                    return e += b.btoa(g),
                    d(e)
                },
                c.decodePacket = function(a, b, d) {
                    if ("string" == typeof a || void 0 === a) {
                        if ("b" == a.charAt(0)) return c.decodeBase64Packet(a.substr(1), b);
                        if (d) try {
                            a = l.decode(a)
                        } catch(e) {
                            return p
                        }
                        var f = a.charAt(0);
                        return Number(f) == f && o[f] ? a.length > 1 ? {
                            type: o[f],
                            data: a.substring(1)
                        }: {
                            type: o[f]
                        }: p
                    }
                    var g = new Uint8Array(a),
                    f = g[0],
                    h = i(a, 1);
                    return q && "blob" === b && (h = new q([h])),
                    {
                        type: o[f],
                        data: h
                    }
                },
                c.decodeBase64Packet = function(a, c) {
                    var d = o[a.charAt(0)];
                    if (!b.ArrayBuffer) return {
                        type: d,
                        data: {
                            base64: !0,
                            data: a.substr(1)
                        }
                    };
                    var e = j.decode(a.substr(1));
                    return "blob" === c && q && (e = new q([e])),
                    {
                        type: d,
                        data: e
                    }
                },
                c.encodePayload = function(a, b, d) {
                    function e(a) {
                        return a.length + ":" + a
                    }
                    function f(a, d) {
                        c.encodePacket(a, b, !0,
                        function(a) {
                            d(null, e(a))
                        })
                    }
                    return "function" == typeof b && (d = b, b = null),
                    b ? q && !m ? c.encodePayloadAsBlob(a, d) : c.encodePayloadAsArrayBuffer(a, d) : a.length ? void g(a, f,
                    function(a, b) {
                        return d(b.join(""))
                    }) : d("0:")
                },
                c.decodePayload = function(a, b, d) {
                    if ("string" != typeof a) return c.decodePayloadAsBinary(a, b, d);
                    "function" == typeof b && (d = b, b = null);
                    var e;
                    if ("" == a) return d(p, 0, 1);
                    for (var f, g, h = "",
                    i = 0,
                    j = a.length; j > i; i++) {
                        var k = a.charAt(i);
                        if (":" != k) h += k;
                        else {
                            if ("" == h || h != (f = Number(h))) return d(p, 0, 1);
                            if (g = a.substr(i + 1, f), h != g.length) return d(p, 0, 1);
                            if (g.length) {
                                if (e = c.decodePacket(g, b, !0), p.type == e.type && p.data == e.data) return d(p, 0, 1);
                                var l = d(e, i + f, j);
                                if (!1 === l) return
                            }
                            i += f,
                            h = ""
                        }
                    }
                    return "" != h ? d(p, 0, 1) : void 0
                },
                c.encodePayloadAsArrayBuffer = function(a, b) {
                    function d(a, b) {
                        c.encodePacket(a, !0, !0,
                        function(a) {
                            return b(null, a)
                        })
                    }
                    return a.length ? void g(a, d,
                    function(a, c) {
                        var d = c.reduce(function(a, b) {
                            var c;
                            return c = "string" == typeof b ? b.length: b.byteLength,
                            a + c.toString().length + c + 2
                        },
                        0),
                        e = new Uint8Array(d),
                        f = 0;
                        return c.forEach(function(a) {
                            var b = "string" == typeof a,
                            c = a;
                            if (b) {
                                for (var d = new Uint8Array(a.length), g = 0; g < a.length; g++) d[g] = a.charCodeAt(g);
                                c = d.buffer
                            }
                            e[f++] = b ? 0 : 1;
                            for (var h = c.byteLength.toString(), g = 0; g < h.length; g++) e[f++] = parseInt(h[g]);
                            e[f++] = 255;
                            for (var d = new Uint8Array(c), g = 0; g < d.length; g++) e[f++] = d[g]
                        }),
                        b(e.buffer)
                    }) : b(new ArrayBuffer(0))
                },
                c.encodePayloadAsBlob = function(a, b) {
                    function d(a, b) {
                        c.encodePacket(a, !0, !0,
                        function(a) {
                            var c = new Uint8Array(1);
                            if (c[0] = 1, "string" == typeof a) {
                                for (var d = new Uint8Array(a.length), e = 0; e < a.length; e++) d[e] = a.charCodeAt(e);
                                a = d.buffer,
                                c[0] = 0
                            }
                            for (var f = a instanceof ArrayBuffer ? a.byteLength: a.size, g = f.toString(), h = new Uint8Array(g.length + 1), e = 0; e < g.length; e++) h[e] = parseInt(g[e]);
                            if (h[g.length] = 255, q) {
                                var i = new q([c.buffer, h.buffer, a]);
                                b(null, i)
                            }
                        })
                    }
                    g(a, d,
                    function(a, c) {
                        return b(new q(c))
                    })
                },
                c.decodePayloadAsBinary = function(a, b, d) {
                    "function" == typeof b && (d = b, b = null);
                    for (var e = a,
                    f = [], g = !1; e.byteLength > 0;) {
                        for (var h = new Uint8Array(e), j = 0 === h[0], k = "", l = 1; 255 != h[l]; l++) {
                            if (k.length > 310) {
                                g = !0;
                                break
                            }
                            k += h[l]
                        }
                        if (g) return d(p, 0, 1);
                        e = i(e, 2 + k.length),
                        k = parseInt(k);
                        var m = i(e, 0, k);
                        if (j) try {
                            m = String.fromCharCode.apply(null, new Uint8Array(m))
                        } catch(n) {
                            var o = new Uint8Array(m);
                            m = "";
                            for (var l = 0; l < o.length; l++) m += String.fromCharCode(o[l])
                        }
                        f.push(m),
                        e = i(e, k)
                    }
                    var q = f.length;
                    f.forEach(function(a, e) {
                        d(c.decodePacket(a, b, !0), e, q)
                    })
                }
            }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            "./keys": 22,
            after: 23,
            "arraybuffer.slice": 24,
            "base64-arraybuffer": 25,
            blob: 26,
            utf8: 27
        }],
        22 : [function(a, b) {
            b.exports = Object.keys ||
            function(a) {
                var b = [],
                c = Object.prototype.hasOwnProperty;
                for (var d in a) c.call(a, d) && b.push(d);
                return b
            }
        },
        {}],
        23 : [function(a, b) {
            function c(a, b, c) {
                function e(a, d) {
                    if (e.count <= 0) throw new Error("after called too many times"); --e.count,
                    a ? (f = !0, b(a), b = c) : 0 !== e.count || f || b(null, d)
                }
                var f = !1;
                return c = c || d,
                e.count = a,
                0 === a ? b() : e
            }
            function d() {}
            b.exports = c
        },
        {}],
        24 : [function(a, b) {
            b.exports = function(a, b, c) {
                var d = a.byteLength;
                if (b = b || 0, c = c || d, a.slice) return a.slice(b, c);
                if (0 > b && (b += d), 0 > c && (c += d), c > d && (c = d), b >= d || b >= c || 0 === d) return new ArrayBuffer(0);
                for (var e = new Uint8Array(a), f = new Uint8Array(c - b), g = b, h = 0; c > g; g++, h++) f[h] = e[g];
                return f.buffer
            }
        },
        {}],
        25 : [function(a, b, c) { !
            function(a) {
                "use strict";
                c.encode = function(b) {
                    var c, d = new Uint8Array(b),
                    e = d.length,
                    f = "";
                    for (c = 0; e > c; c += 3) f += a[d[c] >> 2],
                    f += a[(3 & d[c]) << 4 | d[c + 1] >> 4],
                    f += a[(15 & d[c + 1]) << 2 | d[c + 2] >> 6],
                    f += a[63 & d[c + 2]];
                    return e % 3 === 2 ? f = f.substring(0, f.length - 1) + "=": e % 3 === 1 && (f = f.substring(0, f.length - 2) + "=="),
                    f
                },
                c.decode = function(b) {
                    var c, d, e, f, g, h = .75 * b.length,
                    i = b.length,
                    j = 0;
                    "=" === b[b.length - 1] && (h--, "=" === b[b.length - 2] && h--);
                    var k = new ArrayBuffer(h),
                    l = new Uint8Array(k);
                    for (c = 0; i > c; c += 4) d = a.indexOf(b[c]),
                    e = a.indexOf(b[c + 1]),
                    f = a.indexOf(b[c + 2]),
                    g = a.indexOf(b[c + 3]),
                    l[j++] = d << 2 | e >> 4,
                    l[j++] = (15 & e) << 4 | f >> 2,
                    l[j++] = (3 & f) << 6 | 63 & g;
                    return k
                }
            } ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
        },
        {}],
        26 : [function(a, b) { (function(a) {
                function c(a, b) {
                    b = b || {};
                    for (var c = new d,
                    e = 0; e < a.length; e++) c.append(a[e]);
                    return b.type ? c.getBlob(b.type) : c.getBlob()
                }
                var d = a.BlobBuilder || a.WebKitBlobBuilder || a.MSBlobBuilder || a.MozBlobBuilder,
                e = function() {
                    try {
                        var a = new Blob(["hi"]);
                        return 2 == a.size
                    } catch(b) {
                        return ! 1
                    }
                } (),
                f = d && d.prototype.append && d.prototype.getBlob;
                b.exports = function() {
                    return e ? a.Blob: f ? c: void 0
                } ()
            }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {}],
        27 : [function(b, c, d) { (function(b) { !
                function(e) {
                    function f(a) {
                        for (var b, c, d = [], e = 0, f = a.length; f > e;) b = a.charCodeAt(e++),
                        b >= 55296 && 56319 >= b && f > e ? (c = a.charCodeAt(e++), 56320 == (64512 & c) ? d.push(((1023 & b) << 10) + (1023 & c) + 65536) : (d.push(b), e--)) : d.push(b);
                        return d
                    }
                    function g(a) {
                        for (var b, c = a.length,
                        d = -1,
                        e = ""; ++d < c;) b = a[d],
                        b > 65535 && (b -= 65536, e += t(b >>> 10 & 1023 | 55296), b = 56320 | 1023 & b),
                        e += t(b);
                        return e
                    }
                    function h(a, b) {
                        return t(a >> b & 63 | 128)
                    }
                    function i(a) {
                        if (0 == (4294967168 & a)) return t(a);
                        var b = "";
                        return 0 == (4294965248 & a) ? b = t(a >> 6 & 31 | 192) : 0 == (4294901760 & a) ? (b = t(a >> 12 & 15 | 224), b += h(a, 6)) : 0 == (4292870144 & a) && (b = t(a >> 18 & 7 | 240), b += h(a, 12), b += h(a, 6)),
                        b += t(63 & a | 128)
                    }
                    function j(a) {
                        for (var b, c = f(a), d = c.length, e = -1, g = ""; ++e < d;) b = c[e],
                        g += i(b);
                        return g
                    }
                    function k() {
                        if (s >= r) throw Error("Invalid byte index");
                        var a = 255 & q[s];
                        if (s++, 128 == (192 & a)) return 63 & a;
                        throw Error("Invalid continuation byte")
                    }
                    function l() {
                        var a, b, c, d, e;
                        if (s > r) throw Error("Invalid byte index");
                        if (s == r) return ! 1;
                        if (a = 255 & q[s], s++, 0 == (128 & a)) return a;
                        if (192 == (224 & a)) {
                            var b = k();
                            if (e = (31 & a) << 6 | b, e >= 128) return e;
                            throw Error("Invalid continuation byte")
                        }
                        if (224 == (240 & a)) {
                            if (b = k(), c = k(), e = (15 & a) << 12 | b << 6 | c, e >= 2048) return e;
                            throw Error("Invalid continuation byte")
                        }
                        if (240 == (248 & a) && (b = k(), c = k(), d = k(), e = (15 & a) << 18 | b << 12 | c << 6 | d, e >= 65536 && 1114111 >= e)) return e;
                        throw Error("Invalid UTF-8 detected")
                    }
                    function m(a) {
                        q = f(a),
                        r = q.length,
                        s = 0;
                        for (var b, c = []; (b = l()) !== !1;) c.push(b);
                        return g(c)
                    }
                    var n = "object" == typeof d && d,
                    o = "object" == typeof c && c && c.exports == n && c,
                    p = "object" == typeof b && b; (p.global === p || p.window === p) && (e = p);
                    var q, r, s, t = String.fromCharCode,
                    u = {
                        version: "2.0.0",
                        encode: j,
                        decode: m
                    };
                    if ("function" == typeof a && "object" == typeof a.amd && a.amd) a(function() {
                        return u
                    });
                    else if (n && !n.nodeType) if (o) o.exports = u;
                    else {
                        var v = {},
                        w = v.hasOwnProperty;
                        for (var x in u) w.call(u, x) && (n[x] = u[x])
                    } else e.utf8 = u
                } (this)
            }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {}],
        28 : [function(a, b) { (function(a) {
                var c = /^[\],:{}\s]*$/,
                d = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                e = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                f = /(?:^|:|,)(?:\s*\[)+/g,
                g = /^\s+/,
                h = /\s+$/;
                b.exports = function(b) {
                    return "string" == typeof b && b ? (b = b.replace(g, "").replace(h, ""), a.JSON && JSON.parse ? JSON.parse(b) : c.test(b.replace(d, "@").replace(e, "]").replace(f, "")) ? new Function("return " + b)() : void 0) : null
                }
            }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {}],
        29 : [function(a, b, c) {
            c.encode = function(a) {
                var b = "";
                for (var c in a) a.hasOwnProperty(c) && (b.length && (b += "&"), b += encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
                return b
            },
            c.decode = function(a) {
                for (var b = {},
                c = a.split("&"), d = 0, e = c.length; e > d; d++) {
                    var f = c[d].split("=");
                    b[decodeURIComponent(f[0])] = decodeURIComponent(f[1])
                }
                return b
            }
        },
        {}],
        30 : [function(a, b) {
            var c = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
            d = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
            b.exports = function(a) {
                var b = a,
                e = a.indexOf("["),
                f = a.indexOf("]"); - 1 != e && -1 != f && (a = a.substring(0, e) + a.substring(e, f).replace(/:/g, ";") + a.substring(f, a.length));
                for (var g = c.exec(a || ""), h = {},
                i = 14; i--;) h[d[i]] = g[i] || "";
                return - 1 != e && -1 != f && (h.source = b, h.host = h.host.substring(1, h.host.length - 1).replace(/;/g, ":"), h.authority = h.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), h.ipv6uri = !0),
                h
            }
        },
        {}],
        31 : [function(a, b) {
            function c(a, b) {
                var c;
                return c = b ? new e(a, b) : new e(a)
            }
            var d = function() {
                return this
            } (),
            e = d.WebSocket || d.MozWebSocket;
            b.exports = e ? c: null,
            e && (c.prototype = e.prototype)
        },
        {}],
        32 : [function(a, b) { (function(c) {
                function d(a) {
                    function b(a) {
                        if (!a) return ! 1;
                        if (c.Buffer && c.Buffer.isBuffer(a) || c.ArrayBuffer && a instanceof ArrayBuffer || c.Blob && a instanceof Blob || c.File && a instanceof File) return ! 0;
                        if (e(a)) {
                            for (var d = 0; d < a.length; d++) if (b(a[d])) return ! 0
                        } else if (a && "object" == typeof a) {
                            a.toJSON && (a = a.toJSON());
                            for (var f in a) if (a.hasOwnProperty(f) && b(a[f])) return ! 0
                        }
                        return ! 1
                    }
                    return b(a)
                }
                var e = a("isarray");
                b.exports = d
            }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            isarray: 33
        }],
        33 : [function(a, b) {
            b.exports = Array.isArray ||
            function(a) {
                return "[object Array]" == Object.prototype.toString.call(a)
            }
        },
        {}],
        34 : [function(a, b) {
            var c = a("global");
            try {
                b.exports = "XMLHttpRequest" in c && "withCredentials" in new c.XMLHttpRequest
            } catch(d) {
                b.exports = !1
            }
        },
        {
            global: 35
        }],
        35 : [function(a, b) {
            b.exports = function() {
                return this
            } ()
        },
        {}],
        36 : [function(a, b) {
            var c = [].indexOf;
            b.exports = function(a, b) {
                if (c) return a.indexOf(b);
                for (var d = 0; d < a.length; ++d) if (a[d] === b) return d;
                return - 1
            }
        },
        {}],
        37 : [function(a, b, c) {
            var d = Object.prototype.hasOwnProperty;
            c.keys = Object.keys ||
            function(a) {
                var b = [];
                for (var c in a) d.call(a, c) && b.push(c);
                return b
            },
            c.values = function(a) {
                var b = [];
                for (var c in a) d.call(a, c) && b.push(a[c]);
                return b
            },
            c.merge = function(a, b) {
                for (var c in b) d.call(b, c) && (a[c] = b[c]);
                return a
            },
            c.length = function(a) {
                return c.keys(a).length
            },
            c.isEmpty = function(a) {
                return 0 == c.length(a)
            }
        },
        {}],
        38 : [function(a, b) {
            var c = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
            d = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
            b.exports = function(a) {
                for (var b = c.exec(a || ""), e = {},
                f = 14; f--;) e[d[f]] = b[f] || "";
                return e
            }
        },
        {}],
        39 : [function(a, b, c) { (function(b) {
                var d = a("isarray"),
                e = a("./is-buffer");
                c.deconstructPacket = function(a) {
                    function b(a) {
                        if (!a) return a;
                        if (e(a)) {
                            var f = {
                                _placeholder: !0,
                                num: c.length
                            };
                            return c.push(a),
                            f
                        }
                        if (d(a)) {
                            for (var g = new Array(a.length), h = 0; h < a.length; h++) g[h] = b(a[h]);
                            return g
                        }
                        if ("object" == typeof a && !(a instanceof Date)) {
                            var g = {};
                            for (var i in a) g[i] = b(a[i]);
                            return g
                        }
                        return a
                    }
                    var c = [],
                    f = a.data,
                    g = a;
                    return g.data = b(f),
                    g.attachments = c.length,
                    {
                        packet: g,
                        buffers: c
                    }
                },
                c.reconstructPacket = function(a, b) {
                    function c(a) {
                        if (a && a._placeholder) {
                            var e = b[a.num];
                            return e
                        }
                        if (d(a)) {
                            for (var f = 0; f < a.length; f++) a[f] = c(a[f]);
                            return a
                        }
                        if (a && "object" == typeof a) {
                            for (var g in a) a[g] = c(a[g]);
                            return a
                        }
                        return a
                    }
                    return a.data = c(a.data),
                    a.attachments = void 0,
                    a
                },
                c.removeBlobs = function(a, c) {
                    function f(a, i, j) {
                        if (!a) return a;
                        if (b.Blob && a instanceof Blob || b.File && a instanceof File) {
                            g++;
                            var k = new FileReader;
                            k.onload = function() {
                                j ? j[i] = this.result: h = this.result,
                                --g || c(h)
                            },
                            k.readAsArrayBuffer(a)
                        } else if (d(a)) for (var l = 0; l < a.length; l++) f(a[l], l, a);
                        else if (a && "object" == typeof a && !e(a)) for (var m in a) f(a[m], m, a)
                    }
                    var g = 0,
                    h = a;
                    f(h),
                    g || c(h)
                }
            }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            "./is-buffer": 41,
            isarray: 42
        }],
        40 : [function(a, b, c) {
            function d() {}
            function e(a) {
                var b = "",
                d = !1;
                return b += a.type,
                (c.BINARY_EVENT == a.type || c.BINARY_ACK == a.type) && (b += a.attachments, b += "-"),
                a.nsp && "/" != a.nsp && (d = !0, b += a.nsp),
                null != a.id && (d && (b += ",", d = !1), b += a.id),
                null != a.data && (d && (b += ","), b += l.stringify(a.data)),
                k("encoded %j as %s", a, b),
                b
            }
            function f(a, b) {
                function c(a) {
                    var c = n.deconstructPacket(a),
                    d = e(c.packet),
                    f = c.buffers;
                    f.unshift(d),
                    b(f)
                }
                n.removeBlobs(a, c)
            }
            function g() {
                this.reconstructor = null
            }
            function h(a) {
                var b = {},
                d = 0;
                if (b.type = Number(a.charAt(0)), null == c.types[b.type]) return j();
                if (c.BINARY_EVENT == b.type || c.BINARY_ACK == b.type) {
                    for (b.attachments = "";
                    "-" != a.charAt(++d);) b.attachments += a.charAt(d);
                    b.attachments = Number(b.attachments)
                }
                if ("/" == a.charAt(d + 1)) for (b.nsp = ""; ++d;) {
                    var e = a.charAt(d);
                    if ("," == e) break;
                    if (b.nsp += e, d + 1 == a.length) break
                } else b.nsp = "/";
                var f = a.charAt(d + 1);
                if ("" != f && Number(f) == f) {
                    for (b.id = ""; ++d;) {
                        var e = a.charAt(d);
                        if (null == e || Number(e) != e) {--d;
                            break
                        }
                        if (b.id += a.charAt(d), d + 1 == a.length) break
                    }
                    b.id = Number(b.id)
                }
                if (a.charAt(++d)) try {
                    b.data = l.parse(a.substr(d))
                } catch(g) {
                    return j()
                }
                return k("decoded %s as %j", a, b),
                b
            }
            function i(a) {
                this.reconPack = a,
                this.buffers = []
            }
            function j() {
                return {
                    type: c.ERROR,
                    data: "parser error"
                }
            }
            var k = a("debug")("socket.io-parser"),
            l = a("json3"),
            m = (a("isarray"), a("component-emitter")),
            n = a("./binary"),
            o = a("./is-buffer");
            c.protocol = 4,
            c.types = ["CONNECT", "DISCONNECT", "EVENT", "BINARY_EVENT", "ACK", "BINARY_ACK", "ERROR"],
            c.CONNECT = 0,
            c.DISCONNECT = 1,
            c.EVENT = 2,
            c.ACK = 3,
            c.ERROR = 4,
            c.BINARY_EVENT = 5,
            c.BINARY_ACK = 6,
            c.Encoder = d,
            c.Decoder = g,
            d.prototype.encode = function(a, b) {
                if (k("encoding packet %j", a), c.BINARY_EVENT == a.type || c.BINARY_ACK == a.type) f(a, b);
                else {
                    var d = e(a);
                    b([d])
                }
            },
            m(g.prototype),
            g.prototype.add = function(a) {
                var b;
                if ("string" == typeof a) b = h(a),
                c.BINARY_EVENT == b.type || c.BINARY_ACK == b.type ? (this.reconstructor = new i(b), 0 == this.reconstructor.reconPack.attachments && this.emit("decoded", b)) : this.emit("decoded", b);
                else {
                    if (!o(a) && !a.base64) throw new Error("Unknown type: " + a);
                    if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                    b = this.reconstructor.takeBinaryData(a),
                    b && (this.reconstructor = null, this.emit("decoded", b))
                }
            },
            g.prototype.destroy = function() {
                this.reconstructor && this.reconstructor.finishedReconstruction()
            },
            i.prototype.takeBinaryData = function(a) {
                if (this.buffers.push(a), this.buffers.length == this.reconPack.attachments) {
                    var b = n.reconstructPacket(this.reconPack, this.buffers);
                    return this.finishedReconstruction(),
                    b
                }
                return null
            },
            i.prototype.finishedReconstruction = function() {
                this.reconPack = null,
                this.buffers = []
            }
        },
        {
            "./binary": 39,
            "./is-buffer": 41,
            "component-emitter": 8,
            debug: 9,
            isarray: 42,
            json3: 43
        }],
        41 : [function(a, b) { (function(a) {
                function c(b) {
                    return a.Buffer && a.Buffer.isBuffer(b) || a.ArrayBuffer && b instanceof ArrayBuffer
                }
                b.exports = c
            }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {}],
        42 : [function(a, b) {
            b.exports = a(33)
        },
        {}],
        43 : [function(b, c, d) { !
            function(b) {
                function c(a) {
                    if (c[a] !== g) return c[a];
                    var b;
                    if ("bug-string-char-index" == a) b = "a" != "a" [0];
                    else if ("json" == a) b = c("json-stringify") && c("json-parse");
                    else {
                        var d, e = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                        if ("json-stringify" == a) {
                            var f = k.stringify,
                            i = "function" == typeof f && l;
                            if (i) { (d = function() {
                                    return 1
                                }).toJSON = d;
                                try {
                                    i = "0" === f(0) && "0" === f(new Number) && '""' == f(new String) && f(h) === g && f(g) === g && f() === g && "1" === f(d) && "[1]" == f([d]) && "[null]" == f([g]) && "null" == f(null) && "[null,null,null]" == f([g, h, null]) && f({
                                        a: [d, !0, !1, null, "\x00\b\n\f\r	"]
                                    }) == e && "1" === f(null, d) && "[\n 1,\n 2\n]" == f([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == f(new Date( - 864e13)) && '"+275760-09-13T00:00:00.000Z"' == f(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == f(new Date( - 621987552e5)) && '"1969-12-31T23:59:59.999Z"' == f(new Date( - 1))
                                } catch(j) {
                                    i = !1
                                }
                            }
                            b = i
                        }
                        if ("json-parse" == a) {
                            var m = k.parse;
                            if ("function" == typeof m) try {
                                if (0 === m("0") && !m(!1)) {
                                    d = m(e);
                                    var n = 5 == d.a.length && 1 === d.a[0];
                                    if (n) {
                                        try {
                                            n = !m('"	"')
                                        } catch(j) {}
                                        if (n) try {
                                            n = 1 !== m("01")
                                        } catch(j) {}
                                        if (n) try {
                                            n = 1 !== m("1.")
                                        } catch(j) {}
                                    }
                                }
                            } catch(j) {
                                n = !1
                            }
                            b = n
                        }
                    }
                    return c[a] = !!b
                }
                var e, f, g, h = {}.toString,
                i = "function" == typeof a && a.amd,
                j = "object" == typeof JSON && JSON,
                k = "object" == typeof d && d && !d.nodeType && d;
                k && j ? (k.stringify = j.stringify, k.parse = j.parse) : k = b.JSON = j || {};
                var l = new Date( - 0xc782b5b800cec);
                try {
                    l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
                } catch(m) {}
                if (!c("json")) {
                    var n = "[object Function]",
                    o = "[object Date]",
                    p = "[object Number]",
                    q = "[object String]",
                    r = "[object Array]",
                    s = "[object Boolean]",
                    t = c("bug-string-char-index");
                    if (!l) var u = Math.floor,
                    v = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                    w = function(a, b) {
                        return v[b] + 365 * (a - 1970) + u((a - 1969 + (b = +(b > 1))) / 4) - u((a - 1901 + b) / 100) + u((a - 1601 + b) / 400)
                    }; (e = {}.hasOwnProperty) || (e = function(a) {
                        var b, c = {};
                        return (c.__proto__ = null, c.__proto__ = {
                            toString: 1
                        },
                        c).toString != h ? e = function(a) {
                            var b = this.__proto__,
                            c = a in (this.__proto__ = null, this);
                            return this.__proto__ = b,
                            c
                        }: (b = c.constructor, e = function(a) {
                            var c = (this.constructor || b).prototype;
                            return a in this && !(a in c && this[a] === c[a])
                        }),
                        c = null,
                        e.call(this, a)
                    });
                    var x = {
                        "boolean": 1,
                        number: 1,
                        string: 1,
                        undefined: 1
                    },
                    y = function(a, b) {
                        var c = typeof a[b];
                        return "object" == c ? !!a[b] : !x[c]
                    };
                    if (f = function(a, b) {
                        var c, d, g, i = 0; (c = function() {
                            this.valueOf = 0
                        }).prototype.valueOf = 0,
                        d = new c;
                        for (g in d) e.call(d, g) && i++;
                        return c = d = null,
                        i ? f = 2 == i ?
                        function(a, b) {
                            var c, d = {},
                            f = h.call(a) == n;
                            for (c in a) f && "prototype" == c || e.call(d, c) || !(d[c] = 1) || !e.call(a, c) || b(c)
                        }: function(a, b) {
                            var c, d, f = h.call(a) == n;
                            for (c in a) f && "prototype" == c || !e.call(a, c) || (d = "constructor" === c) || b(c); (d || e.call(a, c = "constructor")) && b(c)
                        }: (d = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], f = function(a, b) {
                            var c, f, g = h.call(a) == n,
                            i = !g && "function" != typeof a.constructor && y(a, "hasOwnProperty") ? a.hasOwnProperty: e;
                            for (c in a) g && "prototype" == c || !i.call(a, c) || b(c);
                            for (f = d.length; c = d[--f]; i.call(a, c) && b(c));
                        }),
                        f(a, b)
                    },
                    !c("json-stringify")) {
                        var z = {
                            92 : "\\\\",
                            34 : '\\"',
                            8 : "\\b",
                            12 : "\\f",
                            10 : "\\n",
                            13 : "\\r",
                            9 : "\\t"
                        },
                        A = "000000",
                        B = function(a, b) {
                            return (A + (b || 0)).slice( - a)
                        },
                        C = "\\u00",
                        D = function(a) {
                            var b, c = '"',
                            d = 0,
                            e = a.length,
                            f = e > 10 && t;
                            for (f && (b = a.split("")); e > d; d++) {
                                var g = a.charCodeAt(d);
                                switch (g) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    c += z[g];
                                    break;
                                default:
                                    if (32 > g) {
                                        c += C + B(2, g.toString(16));
                                        break
                                    }
                                    c += f ? b[d] : t ? a.charAt(d) : a[d]
                                }
                            }
                            return c + '"'
                        },
                        E = function(a, b, c, d, i, j, k) {
                            var l, m, n, t, v, x, y, z, A, C, F, G, H, I, J, K;
                            try {
                                l = b[a]
                            } catch(L) {}
                            if ("object" == typeof l && l) if (m = h.call(l), m != o || e.call(l, "toJSON"))"function" == typeof l.toJSON && (m != p && m != q && m != r || e.call(l, "toJSON")) && (l = l.toJSON(a));
                            else if (l > -1 / 0 && 1 / 0 > l) {
                                if (w) {
                                    for (v = u(l / 864e5), n = u(v / 365.2425) + 1970 - 1; w(n + 1, 0) <= v; n++);
                                    for (t = u((v - w(n, 0)) / 30.42); w(n, t + 1) <= v; t++);
                                    v = 1 + v - w(n, t),
                                    x = (l % 864e5 + 864e5) % 864e5,
                                    y = u(x / 36e5) % 24,
                                    z = u(x / 6e4) % 60,
                                    A = u(x / 1e3) % 60,
                                    C = x % 1e3
                                } else n = l.getUTCFullYear(),
                                t = l.getUTCMonth(),
                                v = l.getUTCDate(),
                                y = l.getUTCHours(),
                                z = l.getUTCMinutes(),
                                A = l.getUTCSeconds(),
                                C = l.getUTCMilliseconds();
                                l = (0 >= n || n >= 1e4 ? (0 > n ? "-": "+") + B(6, 0 > n ? -n: n) : B(4, n)) + "-" + B(2, t + 1) + "-" + B(2, v) + "T" + B(2, y) + ":" + B(2, z) + ":" + B(2, A) + "." + B(3, C) + "Z"
                            } else l = null;
                            if (c && (l = c.call(b, a, l)), null === l) return "null";
                            if (m = h.call(l), m == s) return "" + l;
                            if (m == p) return l > -1 / 0 && 1 / 0 > l ? "" + l: "null";
                            if (m == q) return D("" + l);
                            if ("object" == typeof l) {
                                for (I = k.length; I--;) if (k[I] === l) throw TypeError();
                                if (k.push(l), F = [], J = j, j += i, m == r) {
                                    for (H = 0, I = l.length; I > H; H++) G = E(H, l, c, d, i, j, k),
                                    F.push(G === g ? "null": G);
                                    K = F.length ? i ? "[\n" + j + F.join(",\n" + j) + "\n" + J + "]": "[" + F.join(",") + "]": "[]"
                                } else f(d || l,
                                function(a) {
                                    var b = E(a, l, c, d, i, j, k);
                                    b !== g && F.push(D(a) + ":" + (i ? " ": "") + b)
                                }),
                                K = F.length ? i ? "{\n" + j + F.join(",\n" + j) + "\n" + J + "}": "{" + F.join(",") + "}": "{}";
                                return k.pop(),
                                K
                            }
                        };
                        k.stringify = function(a, b, c) {
                            var d, e, f, g;
                            if ("function" == typeof b || "object" == typeof b && b) if ((g = h.call(b)) == n) e = b;
                            else if (g == r) {
                                f = {};
                                for (var i, j = 0,
                                k = b.length; k > j; i = b[j++], g = h.call(i), (g == q || g == p) && (f[i] = 1));
                            }
                            if (c) if ((g = h.call(c)) == p) {
                                if ((c -= c % 1) > 0) for (d = "", c > 10 && (c = 10); d.length < c; d += " ");
                            } else g == q && (d = c.length <= 10 ? c: c.slice(0, 10));
                            return E("", (i = {},
                            i[""] = a, i), e, f, d, "", [])
                        }
                    }
                    if (!c("json-parse")) {
                        var F, G, H = String.fromCharCode,
                        I = {
                            92 : "\\",
                            34 : '"',
                            47 : "/",
                            98 : "\b",
                            116 : "	",
                            110 : "\n",
                            102 : "\f",
                            114 : "\r"
                        },
                        J = function() {
                            throw F = G = null,
                            SyntaxError()
                        },
                        K = function() {
                            for (var a, b, c, d, e, f = G,
                            g = f.length; g > F;) switch (e = f.charCodeAt(F)) {
                            case 9:
                            case 10:
                            case 13:
                            case 32:
                                F++;
                                break;
                            case 123:
                            case 125:
                            case 91:
                            case 93:
                            case 58:
                            case 44:
                                return a = t ? f.charAt(F) : f[F],
                                F++,
                                a;
                            case 34:
                                for (a = "@", F++; g > F;) if (e = f.charCodeAt(F), 32 > e) J();
                                else if (92 == e) switch (e = f.charCodeAt(++F)) {
                                case 92:
                                case 34:
                                case 47:
                                case 98:
                                case 116:
                                case 110:
                                case 102:
                                case 114:
                                    a += I[e],
                                    F++;
                                    break;
                                case 117:
                                    for (b = ++F, c = F + 4; c > F; F++) e = f.charCodeAt(F),
                                    e >= 48 && 57 >= e || e >= 97 && 102 >= e || e >= 65 && 70 >= e || J();
                                    a += H("0x" + f.slice(b, F));
                                    break;
                                default:
                                    J()
                                } else {
                                    if (34 == e) break;
                                    for (e = f.charCodeAt(F), b = F; e >= 32 && 92 != e && 34 != e;) e = f.charCodeAt(++F);
                                    a += f.slice(b, F)
                                }
                                if (34 == f.charCodeAt(F)) return F++,
                                a;
                                J();
                            default:
                                if (b = F, 45 == e && (d = !0, e = f.charCodeAt(++F)), e >= 48 && 57 >= e) {
                                    for (48 == e && (e = f.charCodeAt(F + 1), e >= 48 && 57 >= e) && J(), d = !1; g > F && (e = f.charCodeAt(F), e >= 48 && 57 >= e); F++);
                                    if (46 == f.charCodeAt(F)) {
                                        for (c = ++F; g > c && (e = f.charCodeAt(c), e >= 48 && 57 >= e); c++);
                                        c == F && J(),
                                        F = c
                                    }
                                    if (e = f.charCodeAt(F), 101 == e || 69 == e) {
                                        for (e = f.charCodeAt(++F), (43 == e || 45 == e) && F++, c = F; g > c && (e = f.charCodeAt(c), e >= 48 && 57 >= e); c++);
                                        c == F && J(),
                                        F = c
                                    }
                                    return + f.slice(b, F)
                                }
                                if (d && J(), "true" == f.slice(F, F + 4)) return F += 4,
                                !0;
                                if ("false" == f.slice(F, F + 5)) return F += 5,
                                !1;
                                if ("null" == f.slice(F, F + 4)) return F += 4,
                                null;
                                J()
                            }
                            return "$"
                        },
                        L = function(a) {
                            var b, c;
                            if ("$" == a && J(), "string" == typeof a) {
                                if ("@" == (t ? a.charAt(0) : a[0])) return a.slice(1);
                                if ("[" == a) {
                                    for (b = []; a = K(), "]" != a; c || (c = !0)) c && ("," == a ? (a = K(), "]" == a && J()) : J()),
                                    "," == a && J(),
                                    b.push(L(a));
                                    return b
                                }
                                if ("{" == a) {
                                    for (b = {}; a = K(), "}" != a; c || (c = !0)) c && ("," == a ? (a = K(), "}" == a && J()) : J()),
                                    ("," == a || "string" != typeof a || "@" != (t ? a.charAt(0) : a[0]) || ":" != K()) && J(),
                                    b[a.slice(1)] = L(K());
                                    return b
                                }
                                J()
                            }
                            return a
                        },
                        M = function(a, b, c) {
                            var d = N(a, b, c);
                            d === g ? delete a[b] : a[b] = d
                        },
                        N = function(a, b, c) {
                            var d, e = a[b];
                            if ("object" == typeof e && e) if (h.call(e) == r) for (d = e.length; d--;) M(e, d, c);
                            else f(e,
                            function(a) {
                                M(e, a, c)
                            });
                            return c.call(a, b, e)
                        };
                        k.parse = function(a, b) {
                            var c, d;
                            return F = 0,
                            G = "" + a,
                            c = L(K()),
                            "$" != K() && J(),
                            F = G = null,
                            b && h.call(b) == n ? N((d = {},
                            d[""] = c, d), "", b) : c
                        }
                    }
                }
                i && a(function() {
                    return k
                })
            } (this)
        },
        {}],
        44 : [function(a, b) {
            function c(a, b) {
                var c = [];
                b = b || 0;
                for (var d = b || 0; d < a.length; d++) c[d - b] = a[d];
                return c
            }
            b.exports = c
        },
        {}]
    },
    {},
    [1])(1)
}),
function() {
    var rsplit = function(a, b) {
        for (var c, d, e, f = b.exec(a), g = new Array; null != f;) c = f.index,
        d = b.lastIndex,
        0 != c && (e = a.substring(0, c), g.push(a.substring(0, c)), a = a.slice(c)),
        g.push(f[0]),
        a = a.slice(f[0].length),
        f = b.exec(a);
        return "" == !a && g.push(a),
        g
    },
    chop = function(a) {
        return a.substr(0, a.length - 1)
    },
    extend = function(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    };
    EJS = function(a) {
        if (a = "string" == typeof a ? {
            view: a
        }: a, this.set_options(a), a.precompiled) return this.template = {},
        this.template.process = a.precompiled,
        void EJS.update(this.name, this);
        if (a.element) {
            if ("string" == typeof a.element) {
                var b = a.element;
                if (a.element = document.getElementById(a.element), null == a.element) throw b + "does not exist!"
            }
            this.text = a.element.value ? a.element.value: a.element.innerHTML,
            this.name = a.element.id,
            this.type = "["
        } else if (a.url) {
            a.url = EJS.endExt(a.url, this.extMatch),
            this.name = this.name ? this.name: a.url;
            var c = a.url,
            d = EJS.get(this.name, this.cache);
            if (d) return d;
            if (d == EJS.INVALID_PATH) return null;
            try {
                this.text = EJS.request(c + (this.cache ? "": "?" + Math.random()))
            } catch(e) {}
            if (null == this.text) throw {
                type: "EJS",
                message: "There is no template at " + c
            }
        }
        var d = new EJS.Compiler(this.text, this.type);
        d.compile(a, this.name),
        EJS.update(this.name, this),
        this.template = d
    },
    EJS.prototype = {
        render: function(a, b) {
            a = a || {},
            this._extra_helpers = b;
            var c = new EJS.Helpers(a, b || {});
            return this.template.process.call(a, a, c)
        },
        update: function(element, options) {
            return "string" == typeof element && (element = document.getElementById(element)),
            null == options ? (_template = this,
            function(a) {
                EJS.prototype.update.call(_template, element, a)
            }) : void("string" == typeof options ? (params = {},
            params.url = options, _template = this, params.onComplete = function(request) {
                var object = eval(request.responseText);
                EJS.prototype.update.call(_template, element, object)
            },
            EJS.ajax_request(params)) : element.innerHTML = this.render(options))
        },
        out: function() {
            return this.template.out
        },
        set_options: function(a) {
            this.type = a.type || EJS.type,
            this.cache = null != a.cache ? a.cache: EJS.cache,
            this.text = a.text || null,
            this.name = a.name || null,
            this.ext = a.ext || EJS.ext,
            this.extMatch = new RegExp(this.ext.replace(/\./, "."))
        }
    },
    EJS.endExt = function(a, b) {
        return a ? (b.lastIndex = 0, a + (b.test(a) ? "": this.ext)) : null
    },
    EJS.Scanner = function(a, b, c) {
        extend(this, {
            left_delimiter: b + "%",
            right_delimiter: "%" + c,
            double_left: b + "%%",
            double_right: "%%" + c,
            left_equal: b + "%=",
            left_comment: b + "%#"
        }),
        this.SplitRegexp = "[" == b ? /(\[%%)|(%%\])|(\[%=)|(\[%#)|(\[%)|(%\]\n)|(%\])|(\n)/: new RegExp("(" + this.double_left + ")|(%%" + this.double_right + ")|(" + this.left_equal + ")|(" + this.left_comment + ")|(" + this.left_delimiter + ")|(" + this.right_delimiter + "\n)|(" + this.right_delimiter + ")|(\n)"),
        this.source = a,
        this.stag = null,
        this.lines = 0
    },
    EJS.Scanner.to_text = function(a) {
        return null == a || void 0 === a ? "": a instanceof Date ? a.toDateString() : a.toString ? a.toString() : ""
    },
    EJS.Scanner.prototype = {
        scan: function(a) {
            if (scanline = this.scanline, regex = this.SplitRegexp, "" == !this.source) for (var b = rsplit(this.source, /\n/), c = 0; c < b.length; c++) {
                var d = b[c];
                this.scanline(d, regex, a)
            }
        },
        scanline: function(a, b, c) {
            this.lines++;
            for (var d = rsplit(a, b), e = 0; e < d.length; e++) {
                var f = d[e];
                if (null != f) try {
                    c(f, this)
                } catch(g) {
                    throw {
                        type: "EJS.Scanner",
                        line: this.lines
                    }
                }
            }
        }
    },
    EJS.Buffer = function(a, b) {
        this.line = new Array,
        this.script = "",
        this.pre_cmd = a,
        this.post_cmd = b;
        for (var c = 0; c < this.pre_cmd.length; c++) this.push(a[c])
    },
    EJS.Buffer.prototype = {
        push: function(a) {
            this.line.push(a)
        },
        cr: function() {
            this.script = this.script + this.line.join("; "),
            this.line = new Array,
            this.script = this.script + "\n"
        },
        close: function() {
            if (this.line.length > 0) {
                for (var a = 0; a < this.post_cmd.length; a++) this.push(pre_cmd[a]);
                this.script = this.script + this.line.join("; "),
                line = null
            }
        }
    },
    EJS.Compiler = function(a, b) {
        this.pre_cmd = ["var ___ViewO = [];"],
        this.post_cmd = new Array,
        this.source = " ",
        null != a && ("string" == typeof a ? (a = a.replace(/\r\n/g, "\n"), a = a.replace(/\r/g, "\n"), this.source = a) : a.innerHTML && (this.source = a.innerHTML), "string" != typeof this.source && (this.source = "")),
        b = b || "<";
        var c = ">";
        switch (b) {
        case "[":
            c = "]";
            break;
        case "<":
            break;
        default:
            throw b + " is not a supported deliminator"
        }
        this.scanner = new EJS.Scanner(this.source, b, c),
        this.out = ""
    },
    EJS.Compiler.prototype = {
        compile: function(options, name) {
            options = options || {},
            this.out = "";
            var put_cmd = "___ViewO.push(",
            insert_cmd = put_cmd,
            buff = new EJS.Buffer(this.pre_cmd, this.post_cmd),
            content = "",
            clean = function(a) {
                return a = a.replace(/\\/g, "\\\\"),
                a = a.replace(/\n/g, "\\n"),
                a = a.replace(/"/g, '\\"')
            };
            this.scanner.scan(function(a, b) {
                if (null == b.stag) switch (a) {
                case "\n":
                    content += "\n",
                    buff.push(put_cmd + '"' + clean(content) + '");'),
                    buff.cr(),
                    content = "";
                    break;
                case b.left_delimiter:
                case b.left_equal:
                case b.left_comment:
                    b.stag = a,
                    content.length > 0 && buff.push(put_cmd + '"' + clean(content) + '")'),
                    content = "";
                    break;
                case b.double_left:
                    content += b.left_delimiter;
                    break;
                default:
                    content += a
                } else switch (a) {
                case b.right_delimiter:
                    switch (b.stag) {
                    case b.left_delimiter:
                        "\n" == content[content.length - 1] ? (content = chop(content), buff.push(content), buff.cr()) : buff.push(content);
                        break;
                    case b.left_equal:
                        buff.push(insert_cmd + "(EJS.Scanner.to_text(" + content + ")))")
                    }
                    b.stag = null,
                    content = "";
                    break;
                case b.double_right:
                    content += b.right_delimiter;
                    break;
                default:
                    content += a
                }
            }),
            content.length > 0 && buff.push(put_cmd + '"' + clean(content) + '")'),
            buff.close(),
            this.out = buff.script + ";";
            var to_be_evaled = "/*" + name + "*/this.process = function(_CONTEXT,_VIEW) { try { with(_VIEW) { with (_CONTEXT) {" + this.out + " return ___ViewO.join('');}}}catch(e){e.lineNumber=null;throw e;}};";
            try {
                eval(to_be_evaled)
            } catch(e) {
                if ("undefined" == typeof JSLINT) throw e;
                JSLINT(this.out);
                for (var i = 0; i < JSLINT.errors.length; i++) {
                    var error = JSLINT.errors[i];
                    if ("Unnecessary semicolon." != error.reason) {
                        error.line++;
                        var e = new Error;
                        throw e.lineNumber = error.line,
                        e.message = error.reason,
                        options.view && (e.fileName = options.view),
                        e
                    }
                }
            }
        }
    },
    EJS.config = function(a) {
        EJS.cache = null != a.cache ? a.cache: EJS.cache,
        EJS.type = null != a.type ? a.type: EJS.type,
        EJS.ext = null != a.ext ? a.ext: EJS.ext;
        var b = EJS.templates_directory || {};
        EJS.templates_directory = b,
        EJS.get = function(a, c) {
            return 0 == c ? null: b[a] ? b[a] : null
        },
        EJS.update = function(a, c) {
            null != a && (b[a] = c)
        },
        EJS.INVALID_PATH = -1
    },
    EJS.config({
        cache: !0,
        type: "<",
        ext: ".ejs"
    }),
    EJS.Helpers = function(a, b) {
        this._data = a,
        this._extras = b,
        extend(this, b)
    },
    EJS.Helpers.prototype = {
        view: function(a, b, c) {
            return c || (c = this._extras),
            b || (b = this._data),
            new EJS(a).render(b, c)
        },
        to_text: function(a, b) {
            return null == a || void 0 === a ? b || "": a instanceof Date ? a.toDateString() : a.toString ? a.toString().replace(/\n/g, "<br />").replace(/''/g, "'") : ""
        }
    },
    EJS.newRequest = function() {
        for (var a = [function() {
            return new ActiveXObject("Msxml2.XMLHTTP")
        },
        function() {
            return new XMLHttpRequest
        },
        function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        }], b = 0; b < a.length; b++) try {
            var c = a[b]();
            if (null != c) return c
        } catch(d) {
            continue
        }
    },
    EJS.request = function(a) {
        var b = new EJS.newRequest;
        b.open("GET", a, !1);
        try {
            b.send(null)
        } catch(c) {
            return null
        }
        return 404 == b.status || 2 == b.status || 0 == b.status && "" == b.responseText ? null: b.responseText
    },
    EJS.ajax_request = function(a) {
        a.method = a.method ? a.method: "GET";
        var b = new EJS.newRequest;
        b.onreadystatechange = function() {
            4 == b.readyState && a.onComplete(200 == b.status ? b: b)
        },
        b.open(a.method, a.url),
        b.send(null)
    }
} (),
function(b) {
    function c() {
        return "Markdown.mk_block( " + uneval(this.toString()) + ", " + uneval(this.trailing) + ", " + uneval(this.lineNumber) + " )"
    }
    function d() {
        var a = require("util");
        return "Markdown.mk_block( " + a.inspect(this.toString()) + ", " + a.inspect(this.trailing) + ", " + a.inspect(this.lineNumber) + " )"
    }
    function e(a) {
        for (var b = 0,
        c = -1; - 1 !== (c = a.indexOf("\n", c + 1));) b++;
        return b
    }
    function f(a, b) {
        function c(a) {
            this.len_after = a,
            this.name = "close_" + b
        }
        var d = a + "_state",
        e = "strong" == a ? "em_state": "strong_state";
        return function(f) {
            if (this[d][0] == b) return this[d].shift(),
            [f.length, new c(f.length - b.length)];
            var g = this[e].slice(),
            h = this[d].slice();
            this[d].unshift(b); {
                var i = this.processInline(f.substr(b.length)),
                j = i[i.length - 1];
                this[d].shift()
            }
            if (j instanceof c) {
                i.pop();
                var k = f.length - j.len_after;
                return [k, [a].concat(i)]
            }
            return this[e] = g,
            this[d] = h,
            [b.length, b]
        }
    }
    function g(a) {
        for (var b = a.split(""), c = [""], d = !1; b.length;) {
            var e = b.shift();
            switch (e) {
            case " ":
                d ? c[c.length - 1] += e: c.push("");
                break;
            case "'":
            case '"':
                d = !d;
                break;
            case "\\":
                e = b.shift();
            default:
                c[c.length - 1] += e
            }
        }
        return c
    }
    function h(a) {
        return q(a) && a.length > 1 && "object" == typeof a[1] && !q(a[1]) ? a[1] : void 0
    }
    function i(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }
    function j(a) {
        if ("string" == typeof a) return i(a);
        var b = a.shift(),
        c = {},
        d = [];
        for (!a.length || "object" != typeof a[0] || a[0] instanceof Array || (c = a.shift()); a.length;) d.push(j(a.shift()));
        var e = "";
        for (var f in c) e += " " + f + '="' + i(c[f]) + '"';
        return "img" == b || "br" == b || "hr" == b ? "<" + b + e + "/>": "<" + b + e + ">" + d.join("") + "</" + b + ">"
    }
    function k(a, b, c) {
        var d;
        c = c || {};
        var e = a.slice(0);
        "function" == typeof c.preprocessTreeNode && (e = c.preprocessTreeNode(e, b));
        var f = h(e);
        if (f) {
            e[1] = {};
            for (d in f) e[1][d] = f[d];
            f = e[1]
        }
        if ("string" == typeof e) return e;
        switch (e[0]) {
        case "header":
            e[0] = "h" + e[1].level,
            delete e[1].level;
            break;
        case "bulletlist":
            e[0] = "ul";
            break;
        case "numberlist":
            e[0] = "ol";
            break;
        case "listitem":
            e[0] = "li";
            break;
        case "para":
            e[0] = "p";
            break;
        case "markdown":
            e[0] = "html",
            f && delete f.references;
            break;
        case "code_block":
            e[0] = "pre",
            d = f ? 2 : 1;
            var g = ["code"];
            g.push.apply(g, e.splice(d, e.length - d)),
            e[d] = g;
            break;
        case "inlinecode":
            e[0] = "code";
            break;
        case "img":
            e[1].src = e[1].href,
            delete e[1].href;
            break;
        case "linebreak":
            e[0] = "br";
            break;
        case "link":
            e[0] = "a";
            break;
        case "link_ref":
            e[0] = "a";
            var i = b[f.ref];
            if (!i) return f.original;
            delete f.ref,
            f.href = i.href,
            i.title && (f.title = i.title),
            delete f.original;
            break;
        case "img_ref":
            e[0] = "img";
            var i = b[f.ref];
            if (!i) return f.original;
            delete f.ref,
            f.src = i.href,
            i.title && (f.title = i.title),
            delete f.original
        }
        if (d = 1, f) {
            for (var j in e[1]) {
                d = 2;
                break
            }
            1 === d && e.splice(d, 1)
        }
        for (; d < e.length; ++d) e[d] = k(e[d], b, c);
        return e
    }
    function l(a) {
        for (var b = h(a) ? 2 : 1; b < a.length;)"string" == typeof a[b] ? b + 1 < a.length && "string" == typeof a[b + 1] ? a[b] += a.splice(b + 1, 1)[0] : ++b: (l(a[b]), ++b)
    }
    var m = b.Markdown = function(a) {
        switch (typeof a) {
        case "undefined":
            this.dialect = m.dialects.Gruber;
            break;
        case "object":
            this.dialect = a;
            break;
        default:
            if (! (a in m.dialects)) throw new Error("Unknown Markdown dialect '" + String(a) + "'");
            this.dialect = m.dialects[a]
        }
        this.em_state = [],
        this.strong_state = [],
        this.debug_indent = ""
    };
    b.parse = function(a, b) {
        var c = new m(b);
        return c.toTree(a)
    },
    b.toHTML = function(a, c, d) {
        var e = b.toHTMLTree(a, c, d);
        return b.renderJsonML(e)
    },
    b.toHTMLTree = function(a, b, c) {
        "string" == typeof a && (a = this.parse(a, b));
        var d = h(a),
        e = {};
        d && d.references && (e = d.references);
        var f = k(a, e, c);
        return l(f),
        f
    };
    var n = m.mk_block = function(a, b, e) {
        1 == arguments.length && (b = "\n\n");
        var f = new String(a);
        return f.trailing = b,
        f.inspect = d,
        f.toSource = c,
        void 0 != e && (f.lineNumber = e),
        f
    };
    m.prototype.split_blocks = function(a) {
        a = a.replace(/(\r\n|\n|\r)/g, "\n");
        var b, c = /([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,
        d = [],
        f = 1;
        for (null != (b = /^(\s*\n)/.exec(a)) && (f += e(b[0]), c.lastIndex = b[0].length); null !== (b = c.exec(a));)"\n#" == b[2] && (b[2] = "\n", c.lastIndex--),
        d.push(n(b[1], b[2], f)),
        f += e(b[0]);
        return d
    },
    m.prototype.processBlock = function(a, b) {
        var c = this.dialect.block,
        d = c.__order__;
        if ("__call__" in c) return c.__call__.call(this, a, b);
        for (var e = 0; e < d.length; e++) {
            var f = c[d[e]].call(this, a, b);
            if (f) return (!q(f) || f.length > 0 && !q(f[0])) && this.debug(d[e], "didn't return a proper array"),
            f
        }
        return []
    },
    m.prototype.processInline = function(a) {
        return this.dialect.inline.__call__.call(this, String(a))
    },
    m.prototype.toTree = function(a, b) {
        var c = a instanceof Array ? a: this.split_blocks(a),
        d = this.tree;
        try {
            for (this.tree = b || this.tree || ["markdown"]; c.length;) {
                var e = this.processBlock(c.shift(), c);
                e.length && this.tree.push.apply(this.tree, e)
            }
            return this.tree
        } finally {
            b && (this.tree = d)
        }
    },
    m.prototype.debug = function() {
        var a = Array.prototype.slice.call(arguments);
        a.unshift(this.debug_indent),
        "undefined" != typeof print && print.apply(print, a),
        "undefined" != typeof console && "undefined" != typeof console.log && console.log.apply(null, a)
    },
    m.prototype.loop_re_over_block = function(a, b, c) {
        for (var d, e = b.valueOf(); e.length && null != (d = a.exec(e));) e = e.substr(d[0].length),
        c.call(this, d);
        return e
    },
    m.dialects = {},
    m.dialects.Gruber = {
        block: {
            atxHeader: function(a, b) {
                var c = a.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);
                if (!c) return void 0;
                var d = ["header", {
                    level: c[1].length
                }];
                return Array.prototype.push.apply(d, this.processInline(c[2])),
                c[0].length < a.length && b.unshift(n(a.substr(c[0].length), a.trailing, a.lineNumber + 2)),
                [d]
            },
            setextHeader: function(a, b) {
                var c = a.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);
                if (!c) return void 0;
                var d = "=" === c[2] ? 1 : 2,
                e = ["header", {
                    level: d
                },
                c[1]];
                return c[0].length < a.length && b.unshift(n(a.substr(c[0].length), a.trailing, a.lineNumber + 2)),
                [e]
            },
            code: function(a, b) {
                var c = [],
                d = /^(?: {0,3}\t| {4})(.*)\n?/;
                if (!a.match(d)) return void 0;
                a: for (;;) {
                    var e = this.loop_re_over_block(d, a.valueOf(),
                    function(a) {
                        c.push(a[1])
                    });
                    if (e.length) {
                        b.unshift(n(e, a.trailing));
                        break a
                    }
                    if (!b.length) break a;
                    if (!b[0].match(d)) break a;
                    c.push(a.trailing.replace(/[^\n]/g, "").substring(2)),
                    a = b.shift()
                }
                return [["code_block", c.join("\n")]]
            },
            horizRule: function(a, b) {
                var c = a.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);
                if (!c) return void 0;
                var d = [["hr"]];
                return c[1] && d.unshift.apply(d, this.processBlock(c[1], [])),
                c[3] && b.unshift(n(c[3])),
                d
            },
            lists: function() {
                function a(a) {
                    return new RegExp("(?:^(" + i + "{0," + a + "} {0,3})(" + f + ")\\s+)|(^" + i + "{0," + (a - 1) + "}[ ]{0,4})")
                }
                function b(a) {
                    return a.replace(/ {0,3}\t/g, "    ")
                }
                function c(a, b, c, d) {
                    if (b) return void a.push(["para"].concat(c));
                    var e = a[a.length - 1] instanceof Array && "para" == a[a.length - 1][0] ? a[a.length - 1] : a;
                    d && a.length > 1 && c.unshift(d);
                    for (var f = 0; f < c.length; f++) {
                        var g = c[f],
                        h = "string" == typeof g;
                        h && e.length > 1 && "string" == typeof e[e.length - 1] ? e[e.length - 1] += g: e.push(g)
                    }
                }
                function d(a, b) {
                    for (var c = new RegExp("^(" + i + "{" + a + "}.*?\\n?)*$"), d = new RegExp("^" + i + "{" + a + "}", "gm"), e = []; b.length > 0 && c.exec(b[0]);) {
                        var f = b.shift(),
                        g = f.replace(d, "");
                        e.push(n(g, f.trailing, f.lineNumber))
                    }
                    return e
                }
                function e(a, b, c) {
                    var d = a.list,
                    e = d[d.length - 1];
                    if (! (e[1] instanceof Array && "para" == e[1][0])) if (b + 1 == c.length) e.push(["para"].concat(e.splice(1, e.length - 1)));
                    else {
                        var f = e.pop();
                        e.push(["para"].concat(e.splice(1, e.length - 1)), f)
                    }
                }
                var f = "[*+-]|\\d+\\.",
                g = /[*+-]/,
                h = new RegExp("^( {0,3})(" + f + ")[ 	]+"),
                i = "(?: {0,3}\\t| {4})";
                return function(f, i) {
                    function j(a) {
                        var b = g.exec(a[2]) ? ["bulletlist"] : ["numberlist"];
                        return n.push({
                            list: b,
                            indent: a[1]
                        }),
                        b
                    }
                    var k = f.match(h);
                    if (!k) return void 0;
                    for (var l, m, n = [], p = j(k), q = !1, r = [n[0].list];;) {
                        for (var s = f.split(/(?=\n)/), t = "", u = 0; u < s.length; u++) {
                            var v = "",
                            w = s[u].replace(/^\n/,
                            function(a) {
                                return v = a,
                                ""
                            }),
                            x = a(n.length);
                            if (k = w.match(x), void 0 !== k[1]) {
                                t.length && (c(l, q, this.processInline(t), v), q = !1, t = ""),
                                k[1] = b(k[1]);
                                var y = Math.floor(k[1].length / 4) + 1;
                                if (y > n.length) p = j(k),
                                l.push(p),
                                l = p[1] = ["listitem"];
                                else {
                                    var z = !1;
                                    for (m = 0; m < n.length; m++) if (n[m].indent == k[1]) {
                                        p = n[m].list,
                                        n.splice(m + 1, n.length - (m + 1)),
                                        z = !0;
                                        break
                                    }
                                    z || (y++, y <= n.length ? (n.splice(y, n.length - y), p = n[y - 1].list) : (p = j(k), l.push(p))),
                                    l = ["listitem"],
                                    p.push(l)
                                }
                                v = ""
                            }
                            w.length > k[0].length && (t += v + w.substr(k[0].length))
                        }
                        t.length && (c(l, q, this.processInline(t), v), q = !1, t = "");
                        var A = d(n.length, i);
                        A.length > 0 && (o(n, e, this), l.push.apply(l, this.toTree(A, [])));
                        var B = i[0] && i[0].valueOf() || "";
                        if (!B.match(h) && !B.match(/^ /)) break;
                        f = i.shift();
                        var C = this.dialect.block.horizRule(f, i);
                        if (C) {
                            r.push.apply(r, C);
                            break
                        }
                        o(n, e, this),
                        q = !0
                    }
                    return r
                }
            } (),
            blockquote: function(a, b) {
                if (!a.match(/^>/m)) return void 0;
                var c = [];
                if (">" != a[0]) {
                    for (var d = a.split(/\n/), e = [], f = a.lineNumber; d.length && ">" != d[0][0];) e.push(d.shift()),
                    f++;
                    var g = n(e.join("\n"), "\n", a.lineNumber);
                    c.push.apply(c, this.processBlock(g, [])),
                    a = n(d.join("\n"), a.trailing, f)
                }
                for (; b.length && ">" == b[0][0];) {
                    var i = b.shift();
                    a = n(a + a.trailing + i, i.trailing, a.lineNumber)
                }
                var j = a.replace(/^> ?/gm, ""),
                k = (this.tree, this.toTree(j, ["blockquote"])),
                l = h(k);
                return l && l.references && (delete l.references, r(l) && k.splice(1, 1)),
                c.push(k),
                c
            },
            referenceDefn: function(a, b) {
                var c = /^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;
                if (!a.match(c)) return void 0;
                h(this.tree) || this.tree.splice(1, 0, {});
                var d = h(this.tree);
                void 0 === d.references && (d.references = {});
                var e = this.loop_re_over_block(c, a,
                function(a) {
                    a[2] && "<" == a[2][0] && ">" == a[2][a[2].length - 1] && (a[2] = a[2].substring(1, a[2].length - 1));
                    var b = d.references[a[1].toLowerCase()] = {
                        href: a[2]
                    };
                    void 0 !== a[4] ? b.title = a[4] : void 0 !== a[5] && (b.title = a[5])
                });
                return e.length && b.unshift(n(e, a.trailing)),
                []
            },
            para: function(a) {
                return [["para"].concat(this.processInline(a))]
            }
        }
    },
    m.dialects.Gruber.inline = {
        __oneElement__: function(a, b, c) {
            var d, e;
            b = b || this.dialect.inline.__patterns__;
            var f = new RegExp("([\\s\\S]*?)(" + (b.source || b) + ")");
            if (d = f.exec(a), !d) return [a.length, a];
            if (d[1]) return [d[1].length, d[1]];
            var e;
            return d[2] in this.dialect.inline && (e = this.dialect.inline[d[2]].call(this, a.substr(d.index), d, c || [])),
            e = e || [d[2].length, d[2]]
        },
        __call__: function(a, b) {
            function c(a) {
                "string" == typeof a && "string" == typeof e[e.length - 1] ? e[e.length - 1] += a: e.push(a)
            }
            for (var d, e = []; a.length > 0;) d = this.dialect.inline.__oneElement__.call(this, a, b, e),
            a = a.substr(d.shift()),
            o(d, c);
            return e
        },
        "]": function() {},
        "}": function() {},
        __escape__: /^\\[\\`\*_{}\[\]()#\+.!\-]/,
        "\\": function(a) {
            return this.dialect.inline.__escape__.exec(a) ? [2, a.charAt(1)] : [1, "\\"]
        },
        "![": function(a) {
            var b = a.match(/^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);
            if (b) {
                b[2] && "<" == b[2][0] && ">" == b[2][b[2].length - 1] && (b[2] = b[2].substring(1, b[2].length - 1)),
                b[2] = this.dialect.inline.__call__.call(this, b[2], /\\/)[0];
                var c = {
                    alt: b[1],
                    href: b[2] || ""
                };
                return void 0 !== b[4] && (c.title = b[4]),
                [b[0].length, ["img", c]]
            }
            return b = a.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/),
            b ? [b[0].length, ["img_ref", {
                alt: b[1],
                ref: b[2].toLowerCase(),
                original: b[0]
            }]] : [2, "!["]
        },
        "[": function s(a) {
            var b = String(a),
            c = m.DialectHelpers.inline_until_char.call(this, a.substr(1), "]");
            if (!c) return [1, "["];
            var s, d, e = 1 + c[0],
            f = c[1];
            a = a.substr(e);
            var g = a.match(/^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);
            if (g) {
                var h = g[1];
                if (e += g[0].length, h && "<" == h[0] && ">" == h[h.length - 1] && (h = h.substring(1, h.length - 1)), !g[3]) for (var i = 1,
                j = 0; j < h.length; j++) switch (h[j]) {
                case "(":
                    i++;
                    break;
                case ")":
                    0 == --i && (e -= h.length - j, h = h.substring(0, j))
                }
                return h = this.dialect.inline.__call__.call(this, h, /\\/)[0],
                d = {
                    href: h || ""
                },
                void 0 !== g[3] && (d.title = g[3]),
                s = ["link", d].concat(f),
                [e, s]
            }
            return g = a.match(/^\s*\[(.*?)\]/),
            g ? (e += g[0].length, d = {
                ref: (g[1] || String(f)).toLowerCase(),
                original: b.substr(0, e)
            },
            s = ["link_ref", d].concat(f), [e, s]) : 1 == f.length && "string" == typeof f[0] ? (d = {
                ref: f[0].toLowerCase(),
                original: b.substr(0, e)
            },
            s = ["link_ref", d, f[0]], [e, s]) : [1, "["]
        },
        "<": function(a) {
            var b;
            return null != (b = a.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/)) ? b[3] ? [b[0].length, ["link", {
                href: "mailto:" + b[3]
            },
            b[3]]] : "mailto" == b[2] ? [b[0].length, ["link", {
                href: b[1]
            },
            b[1].substr("mailto:".length)]] : [b[0].length, ["link", {
                href: b[1]
            },
            b[1]]] : [1, "<"]
        },
        "`": function(a) {
            var b = a.match(/(`+)(([\s\S]*?)\1)/);
            return b && b[2] ? [b[1].length + b[2].length, ["inlinecode", b[3]]] : [1, "`"]
        },
        "  \n": function() {
            return [3, ["linebreak"]]
        }
    },
    m.dialects.Gruber.inline["**"] = f("strong", "**"),
    m.dialects.Gruber.inline.__ = f("strong", "__"),
    m.dialects.Gruber.inline["*"] = f("em", "*"),
    m.dialects.Gruber.inline._ = f("em", "_"),
    m.buildBlockOrder = function(a) {
        var b = [];
        for (var c in a)"__order__" != c && "__call__" != c && b.push(c);
        a.__order__ = b
    },
    m.buildInlinePatterns = function(a) {
        var b = [];
        for (var c in a) if (!c.match(/^__.*__$/)) {
            var d = c.replace(/([\\.*+?|()\[\]{}])/g, "\\$1").replace(/\n/, "\\n");
            b.push(1 == c.length ? d: "(?:" + d + ")")
        }
        b = b.join("|"),
        a.__patterns__ = b;
        var e = a.__call__;
        a.__call__ = function(a, c) {
            return void 0 != c ? e.call(this, a, c) : e.call(this, a, b)
        }
    },
    m.DialectHelpers = {},
    m.DialectHelpers.inline_until_char = function(a, b) {
        for (var c = 0,
        d = [];;) {
            if (a.charAt(c) == b) return c++,
            [c, d];
            if (c >= a.length) return null;
            var e = this.dialect.inline.__oneElement__.call(this, a.substr(c));
            c += e[0],
            d.push.apply(d, e.slice(1))
        }
    },
    m.subclassDialect = function(a) {
        function b() {}
        function c() {}
        return b.prototype = a.block,
        c.prototype = a.inline,
        {
            block: new b,
            inline: new c
        }
    },
    m.buildBlockOrder(m.dialects.Gruber.block),
    m.buildInlinePatterns(m.dialects.Gruber.inline),
    m.dialects.Maruku = m.subclassDialect(m.dialects.Gruber),
    m.dialects.Maruku.processMetaHash = function(a) {
        for (var b = g(a), c = {},
        d = 0; d < b.length; ++d) if (/^#/.test(b[d])) c.id = b[d].substring(1);
        else if (/^\./.test(b[d])) c["class"] = c["class"] ? c["class"] + b[d].replace(/./, " ") : b[d].substring(1);
        else if (/\=/.test(b[d])) {
            var e = b[d].split(/\=/);
            c[e[0]] = e[1]
        }
        return c
    },
    m.dialects.Maruku.block.document_meta = function(a) {
        if (a.lineNumber > 1) return void 0;
        if (!a.match(/^(?:\w+:.*\n)*\w+:.*$/)) return void 0;
        h(this.tree) || this.tree.splice(1, 0, {});
        var b = a.split(/\n/);
        for (p in b) {
            var c = b[p].match(/(\w+):\s*(.*)$/),
            d = c[1].toLowerCase(),
            e = c[2];
            this.tree[1][d] = e
        }
        return []
    },
    m.dialects.Maruku.block.block_meta = function(b) {
        var c = b.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);
        if (!c) return void 0;
        var d, e = this.dialect.processMetaHash(c[2]);
        if ("" === c[1]) {
            var f = this.tree[this.tree.length - 1];
            if (d = h(f), "string" == typeof f) return void 0;
            d || (d = {},
            f.splice(1, 0, d));
            for (a in e) d[a] = e[a];
            return []
        }
        var g = b.replace(/\n.*$/, ""),
        i = this.processBlock(g, []);
        d = h(i[0]),
        d || (d = {},
        i[0].splice(1, 0, d));
        for (a in e) d[a] = e[a];
        return i
    },
    m.dialects.Maruku.block.definition_list = function(a, b) {
        var c, d, e = /^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,
        f = ["dl"];
        if (! (d = a.match(e))) return void 0;
        for (var g = [a]; b.length && e.exec(b[0]);) g.push(b.shift());
        for (var h = 0; h < g.length; ++h) {
            var d = g[h].match(e),
            i = d[1].replace(/\n$/, "").split(/\n/),
            j = d[2].split(/\n:\s+/);
            for (c = 0; c < i.length; ++c) f.push(["dt", i[c]]);
            for (c = 0; c < j.length; ++c) f.push(["dd"].concat(this.processInline(j[c].replace(/(\n)\s+/, "$1"))))
        }
        return [f]
    },
    m.dialects.Maruku.block.table = function t(a) {
        var b, c, d = function(a, b) {
            b = b || "\\s",
            b.match(/^[\\|\[\]{}?*.+^$]$/) && (b = "\\" + b);
            for (var c, d = [], e = new RegExp("^((?:\\\\.|[^\\\\" + b + "])*)" + b + "(.*)"); c = a.match(e);) d.push(c[1]),
            a = c[2];
            return d.push(a),
            d
        },
        e = /^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/,
        f = /^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/;
        if (c = a.match(e)) c[3] = c[3].replace(/^\s*\|/gm, "");
        else if (! (c = a.match(f))) return void 0;
        var t = ["table", ["thead", ["tr"]], ["tbody"]];
        c[2] = c[2].replace(/\|\s*$/, "").split("|");
        var g = [];
        for (o(c[2],
        function(a) {
            g.push(a.match(/^\s*-+:\s*$/) ? {
                align: "right"
            }: a.match(/^\s*:-+\s*$/) ? {
                align: "left"
            }: a.match(/^\s*:-+:\s*$/) ? {
                align: "center"
            }: {})
        }), c[1] = d(c[1].replace(/\|\s*$/, ""), "|"), b = 0; b < c[1].length; b++) t[1][1].push(["th", g[b] || {}].concat(this.processInline(c[1][b].trim())));
        return o(c[3].replace(/\|\s*$/gm, "").split("\n"),
        function(a) {
            var c = ["tr"];
            for (a = d(a, "|"), b = 0; b < a.length; b++) c.push(["td", g[b] || {}].concat(this.processInline(a[b].trim())));
            t[2].push(c)
        },
        this),
        [t]
    },
    m.dialects.Maruku.inline["{:"] = function(a, b, c) {
        if (!c.length) return [2, "{:"];
        var d = c[c.length - 1];
        if ("string" == typeof d) return [2, "{:"];
        var e = a.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);
        if (!e) return [2, "{:"];
        var f = this.dialect.processMetaHash(e[1]),
        g = h(d);
        g || (g = {},
        d.splice(1, 0, g));
        for (var i in f) g[i] = f[i];
        return [e[0].length, ""]
    },
    m.dialects.Maruku.inline.__escape__ = /^\\[\\`\*_{}\[\]()#\+.!\-|:]/,
    m.buildBlockOrder(m.dialects.Maruku.block),
    m.buildInlinePatterns(m.dialects.Maruku.inline);
    var o, q = Array.isArray ||
    function(a) {
        return "[object Array]" == Object.prototype.toString.call(a)
    };
    o = Array.prototype.forEach ?
    function(a, b, c) {
        return a.forEach(b, c)
    }: function(a, b, c) {
        for (var d = 0; d < a.length; d++) b.call(c || a, a[d], d, a)
    };
    var r = function(a) {
        for (var b in a) if (hasOwnProperty.call(a, b)) return ! 1;
        return ! 0
    };
    b.renderJsonML = function(a, b) {
        b = b || {},
        b.root = b.root || !1;
        var c = [];
        if (b.root) c.push(j(a));
        else for (a.shift(), !a.length || "object" != typeof a[0] || a[0] instanceof Array || a.shift(); a.length;) c.push(j(a.shift()));
        return c.join("\n\n")
    }
} (function() {
    return "undefined" == typeof exports ? (window.markdown = {},
    window.markdown) : exports
} ()),
function(a, b) {
    "undefined" != typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && "object" == typeof define.amd ? define(b) : this[a] = b()
} ("validator",
function(a) {
    "use strict";
    function b(a, b) {
        a = a || {};
        for (var c in b)"undefined" == typeof a[c] && (a[c] = b[c]);
        return a
    }
    a = {
        version: "3.22.1"
    };
    var c = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
    d = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
    e = /^(?:[0-9]{9}X|[0-9]{10})$/,
    f = /^(?:[0-9]{13})$/,
    g = /^(\d?\d?\d)\.(\d?\d?\d)\.(\d?\d?\d)\.(\d?\d?\d)$/,
    h = /^::|^::1|^([a-fA-F0-9]{1,4}::?){1,7}([a-fA-F0-9]{1,4})$/,
    i = {
        3 : /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        4 : /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        5 : /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
    },
    j = /^[a-zA-Z]+$/,
    k = /^[a-zA-Z0-9]+$/,
    l = /^-?[0-9]+$/,
    m = /^(?:-?(?:0|[1-9][0-9]*))$/,
    n = /^(?:-?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/,
    o = /^[0-9a-fA-F]+$/,
    p = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,
    q = /^[\x00-\x7F]+$/,
    r = /[^\x00-\x7F]/,
    s = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/,
    t = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/,
    u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/,
    v = /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{4})$/;
    a.extend = function(b, c) {
        a[b] = function() {
            var b = Array.prototype.slice.call(arguments);
            return b[0] = a.toString(b[0]),
            c.apply(a, b)
        }
    },
    a.init = function() {
        for (var b in a)"function" == typeof a[b] && "toString" !== b && "toDate" !== b && "extend" !== b && "init" !== b && a.extend(b, a[b])
    },
    a.toString = function(a) {
        return "object" == typeof a && null !== a && a.toString ? a = a.toString() : null === a || "undefined" == typeof a || isNaN(a) && !a.length ? a = "": "string" != typeof a && (a += ""),
        a
    },
    a.toDate = function(a) {
        return "[object Date]" === Object.prototype.toString.call(a) ? a: (a = Date.parse(a), isNaN(a) ? null: new Date(a))
    },
    a.toFloat = function(a) {
        return parseFloat(a)
    },
    a.toInt = function(a, b) {
        return parseInt(a, b || 10)
    },
    a.toBoolean = function(a, b) {
        return b ? "1" === a || "true" === a: "0" !== a && "false" !== a && "" !== a
    },
    a.equals = function(b, c) {
        return b === a.toString(c)
    },
    a.contains = function(b, c) {
        return b.indexOf(a.toString(c)) >= 0
    },
    a.matches = function(a, b, c) {
        return "[object RegExp]" !== Object.prototype.toString.call(b) && (b = new RegExp(b, c)),
        b.test(a)
    },
    a.isEmail = function(a) {
        return c.test(a)
    };
    var w = {
        protocols: ["http", "https", "ftp"],
        require_tld: !0,
        require_protocol: !1,
        allow_underscores: !1
    };
    a.isURL = function(c, d) {
        if (!c || c.length >= 2083) return ! 1;
        if (0 === c.indexOf("mailto:")) return ! 1;
        d = b(d, w);
        var e, f, g, h, i, j, k, l, m, n, o, p;
        if (p = c.split("://"), p.length > 1) {
            if (e = p.shift(), -1 === d.protocols.indexOf(e)) return ! 1
        } else if (d.require_protocol) return ! 1;
        if (c = p.join("://"), p = c.split("#"), c = p.shift(), o = p.join("#"), o && /\s/.test(o)) return ! 1;
        if (p = c.split("?"), c = p.shift(), n = p.join("?"), n && /\s/.test(n)) return ! 1;
        if (p = c.split("/"), c = p.shift(), m = p.join("/"), m && /\s/.test(m)) return ! 1;
        if (p = c.split("@"), p.length > 1 && (h = p.shift(), h.indexOf(":") >= 0)) {
            if (h = h.split(":"), f = h.shift(), !/^\S+$/.test(f)) return ! 1;
            if (g = h.join(":"), !/^\S*$/.test(f)) return ! 1
        }
        return j = p.join("@"),
        p = j.split(":"),
        i = p.shift(),
        p.length && (l = p.join(":"), k = parseInt(l, 10), !/^[0-9]+$/.test(l) || 0 >= k || k > 65535) ? !1 : a.isIP(i) || a.isFQDN(i, d) || "localhost" === i ? d.host_whitelist && -1 === d.host_whitelist.indexOf(i) ? !1 : d.host_blacklist && -1 !== d.host_blacklist.indexOf(i) ? !1 : !0 : !1
    },
    a.isIP = function(b, c) {
        if (c = a.toString(c), !c) return a.isIP(b, 4) || a.isIP(b, 6);
        if ("4" === c) {
            if (!g.test(b)) return ! 1;
            var d = b.split(".").sort(function(a, b) {
                return a - b
            });
            return d[3] <= 255
        }
        return "6" === c && h.test(b)
    };
    var x = {
        require_tld: !0,
        allow_underscores: !1
    };
    a.isFQDN = function(a, c) {
        c = b(c, x);
        var d = a.split(".");
        if (c.require_tld) {
            var e = d.pop();
            if (!d.length || !/^[a-z]{2,}$/i.test(e)) return ! 1
        }
        for (var f, g = 0; g < d.length; g++) {
            if (f = d[g], c.allow_underscores) {
                if (f.indexOf("__") >= 0) return ! 1;
                f = f.replace(/_/g, "")
            }
            if (!/^[a-z\\u00a1-\\uffff0-9-]+$/i.test(f)) return ! 1;
            if ("-" === f[0] || "-" === f[f.length - 1] || f.indexOf("---") >= 0) return ! 1
        }
        return ! 0
    },
    a.isAlpha = function(a) {
        return j.test(a)
    },
    a.isAlphanumeric = function(a) {
        return k.test(a)
    },
    a.isNumeric = function(a) {
        return l.test(a)
    },
    a.isHexadecimal = function(a) {
        return o.test(a)
    },
    a.isHexColor = function(a) {
        return p.test(a)
    },
    a.isLowercase = function(a) {
        return a === a.toLowerCase()
    },
    a.isUppercase = function(a) {
        return a === a.toUpperCase()
    },
    a.isInt = function(a) {
        return m.test(a)
    },
    a.isFloat = function(a) {
        return "" !== a && n.test(a)
    },
    a.isDivisibleBy = function(b, c) {
        return a.toFloat(b) % a.toInt(c) === 0
    },
    a.isNull = function(a) {
        return 0 === a.length
    },
    a.isLength = function(a, b, c) {
        var d = a.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [],
        e = a.length - d.length;
        return e >= b && ("undefined" == typeof c || c >= e)
    },
    a.isByteLength = function(a, b, c) {
        return a.length >= b && ("undefined" == typeof c || a.length <= c)
    },
    a.isUUID = function(a, b) {
        var c = i[b ? b: "all"];
        return c && c.test(a)
    },
    a.isDate = function(a) {
        return ! isNaN(Date.parse(a))
    },
    a.isAfter = function(b, c) {
        var d = a.toDate(c || new Date),
        e = a.toDate(b);
        return !! (e && d && e > d)
    },
    a.isBefore = function(b, c) {
        var d = a.toDate(c || new Date),
        e = a.toDate(b);
        return e && d && d > e
    },
    a.isIn = function(b, c) {
        if (!c || "function" != typeof c.indexOf) return ! 1;
        if ("[object Array]" === Object.prototype.toString.call(c)) {
            for (var d = [], e = 0, f = c.length; f > e; e++) d[e] = a.toString(c[e]);
            c = d
        }
        return c.indexOf(b) >= 0
    },
    a.isCreditCard = function(a) {
        var b = a.replace(/[^0-9]+/g, "");
        if (!d.test(b)) return ! 1;
        for (var c, e, f, g = 0,
        h = b.length - 1; h >= 0; h--) c = b.substring(h, h + 1),
        e = parseInt(c, 10),
        f ? (e *= 2, g += e >= 10 ? e % 10 + 1 : e) : g += e,
        f = !f;
        return !! (g % 10 === 0 ? b: !1)
    },
    a.isISBN = function(b, c) {
        if (c = a.toString(c), !c) return a.isISBN(b, 10) || a.isISBN(b, 13);
        var d, g = b.replace(/[\s-]+/g, ""),
        h = 0;
        if ("10" === c) {
            if (!e.test(g)) return ! 1;
            for (d = 0; 9 > d; d++) h += (d + 1) * g.charAt(d);
            if (h += "X" === g.charAt(9) ? 100 : 10 * g.charAt(9), h % 11 === 0) return !! g
        } else if ("13" === c) {
            if (!f.test(g)) return ! 1;
            var i = [1, 3];
            for (d = 0; 12 > d; d++) h += i[d % 2] * g.charAt(d);
            if (g.charAt(12) - (10 - h % 10) % 10 === 0) return !! g
        }
        return ! 1
    },
    a.isJSON = function(a) {
        try {
            JSON.parse(a)
        } catch(b) {
            return ! 1
        }
        return ! 0
    },
    a.isMultibyte = function(a) {
        return r.test(a)
    },
    a.isAscii = function(a) {
        return q.test(a)
    },
    a.isFullWidth = function(a) {
        return s.test(a)
    },
    a.isHalfWidth = function(a) {
        return t.test(a)
    },
    a.isVariableWidth = function(a) {
        return s.test(a) && t.test(a)
    },
    a.isSurrogatePair = function(a) {
        return u.test(a)
    },
    a.isBase64 = function(a) {
        return v.test(a)
    },
    a.isMongoId = function(b) {
        return a.isHexadecimal(b) && 24 === b.length
    },
    a.ltrim = function(a, b) {
        var c = b ? new RegExp("^[" + b + "]+", "g") : /^\s+/g;
        return a.replace(c, "")
    },
    a.rtrim = function(a, b) {
        var c = b ? new RegExp("[" + b + "]+$", "g") : /\s+$/g;
        return a.replace(c, "")
    },
    a.trim = function(a, b) {
        var c = b ? new RegExp("^[" + b + "]+|[" + b + "]+$", "g") : /^\s+|\s+$/g;
        return a.replace(c, "")
    },
    a.escape = function(a) {
        return a.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    },
    a.stripLow = function(b, c) {
        var d = c ? "\x00-	\f-": "\x00-";
        return a.blacklist(b, d)
    },
    a.whitelist = function(a, b) {
        return a.replace(new RegExp("[^" + b + "]+", "g"), "")
    },
    a.blacklist = function(a, b) {
        return a.replace(new RegExp("[" + b + "]+", "g"), "")
    };
    var y = {
        lowercase: !0
    };
    return a.normalizeEmail = function(c, d) {
        if (d = b(d, y), !a.isEmail(c)) return ! 1;
        var e = c.split("@", 2);
        return e[1] = e[1].toLowerCase(),
        d.lowercase && (e[0] = e[0].toLowerCase()),
        ("gmail.com" === e[1] || "googlemail.com" === e[1]) && (d.lowercase || (e[0] = e[0].toLowerCase()), e[0] = e[0].replace(/\./g, "").split("+")[0], e[1] = "gmail.com"),
        e.join("@")
    },
    a.init(),
    a
}),
function(a) {
    var b = '<div class="tags-wrapper"><div id="tagsList" class="tags-cloud"><div id="selectedTags"></div><input type="text" autocomplete="off" placeholder="Start typing a tag" id="searchInput" class="form-control" /></div><ul id="suggestions" class="suggestions-list"></ul></div>',
    c = '<% _.forEach(selectedTags,function(selectedTag,i){ %><div class="tag"><span class="tagName"><%= selectedTag %></span><span class="removeTag" data-tag-id="<%= i %>">&nbsp;<b class="fa fa-times cross"></b></span></div><% }); %>',
    d = '<% _.forEach(suggestions,function(suggestion,i){%><li href="#" class="blockSpan <%= selectedIndex===i ? "active" : "" %>"><%= suggestion %></li><% }); %>';
    a.fn.devMagTagInput = function(e) {
        function f(a) {
            i.suggestions = [],
            i.selectedIndex = 0,
            a.find("#suggestions").html(_.template(d, {
                suggestions: i.suggestions,
                selectedIndex: i.selectedIndex
            }))
        }
        var g = this,
        h = e.url;
        g.html(b);
        var i = {
            suggestions: [],
            selectedTags: [],
            selectedIndex: 0
        };
        i.selectedTags = a("#selectedTagsInput").val() ? a("#selectedTagsInput").val().split(",") : [],
        g.find("#selectedTags").html(_.template(c, {
            selectedTags: i.selectedTags
        }));
        var j;
        g.find("#searchInput").on("keyup",
        function(b) {
            if ( - 1 === [13, 40, 38].indexOf(b.keyCode)) {
                j && clearTimeout(j);
                var c = a(this);
                j = setTimeout(function() {
                    var b = c.val();
                    i.suggestions = [],
                    a.get(h + "?term=" + b,
                    function(a) {
                        a || (a = []),
                        -1 === a.indexOf(b) && /^[a-z 0-9]+$/.test(b) && a.unshift(b),
                        i.suggestions = a.filter(function(a) {
                            return - 1 === i.selectedTags.indexOf(a)
                        }),
                        g.find("#suggestions").html(_.template(d, {
                            suggestions: i.suggestions,
                            selectedIndex: i.selectedIndex
                        }))
                    })
                },
                500)
            }
        }),
        g.find("#searchInput").on("keydown",
        function(b) {
            if (40 === b.keyCode) b.preventDefault(),
            i.selectedIndex + 1 !== i.suggestions.length && i.selectedIndex++,
            g.find("#suggestions").html(_.template(d, {
                suggestions: i.suggestions,
                selectedIndex: i.selectedIndex
            }));
            else if (38 === b.keyCode) b.preventDefault(),
            i.selectedIndex - 1 !== -1 && i.selectedIndex--,
            g.find("#suggestions").html(_.template(d, {
                suggestions: i.suggestions,
                selectedIndex: i.selectedIndex
            }));
            else if (13 === b.keyCode) {
                b.preventDefault();
                var e = i.suggestions[i.selectedIndex];
                if (!e) return;
                i.selectedTags.push(e),
                g.find("#selectedTags").html(_.template(c, {
                    selectedTags: i.selectedTags
                })),
                f(g),
                a(b.currentTarget).val(""),
                a("#selectedTagsInput").val(i.selectedTags.toString())
            }
        }),
        g.on("click", ".blockSpan",
        function(b) {
            b.preventDefault(),
            i.selectedTags.push(a(this).html()),
            g.find("#selectedTags").html(_.template(c, {
                selectedTags: i.selectedTags
            })),
            f(g),
            g.find("#searchInput").val(""),
            a("#selectedTagsInput").val(i.selectedTags.toString())
        }),
        g.on("click", ".removeTag",
        function(b) {
            b.preventDefault(),
            i.selectedTags.splice(a(b.currentTarget).data("tag-id"), 1),
            a("#selectedTagsInput").val(i.selectedTags.toString()),
            g.find("#selectedTags").html(_.template(c, {
                selectedTags: i.selectedTags
            }))
        })
    }
} (jQuery),
function(a) {
    var b = '<% _.forEach(suggestions,function(suggestion,i){%><li href="#" class="blockSpan <%= selectedIndex===i ? "active" : "" %>"><%= suggestion %></li><% }); %>';
    a.fn.autoSuggest = function(c) {
        function d() {
            g = {
                suggestions: [],
                selectedIndex: 0
            },
            e.siblings("#suggestions").html(_.template(b, {
                suggestions: g.suggestions,
                selectedIndex: g.selectedIndex
            }))
        }
        var e = this,
        f = c.url,
        g = {
            suggestions: [],
            selectedIndex: 0
        };
        e.after('<ul id="suggestions" class="suggestions-list"></ul>');
        var h;
        e.on("keyup",
        function(c) { - 1 === [13, 40, 38].indexOf(c.keyCode) && (h && clearTimeout(h), h = setTimeout(function() {
                var c = e.val();
                g.suggestions = [],
                a.get(f + "?term=" + c,
                function(a) {
                    a || (a = []),
                    g.suggestions = a,
                    e.siblings("#suggestions").html(_.template(b, {
                        suggestions: g.suggestions,
                        selectedIndex: g.selectedIndex
                    }))
                })
            },
            500))
        }),
        e.on("keydown",
        function(a) {
            if (40 === a.keyCode) a.preventDefault(),
            g.selectedIndex + 1 !== g.suggestions.length && g.selectedIndex++,
            e.siblings("#suggestions").html(_.template(b, {
                suggestions: g.suggestions,
                selectedIndex: g.selectedIndex
            }));
            else if (38 === a.keyCode) a.preventDefault(),
            g.selectedIndex - 1 !== -1 && g.selectedIndex--,
            e.siblings("#suggestions").html(_.template(b, {
                suggestions: g.suggestions,
                selectedIndex: g.selectedIndex
            }));
            else if (13 === a.keyCode) {
                a.preventDefault();
                var f = g.suggestions[g.selectedIndex];
                if (!f) return;
                d(),
                e.val(""),
                c.onSelect(f)
            }
        }),
        e.parent("div").on("click", ".blockSpan",
        function(b) {
            b.preventDefault();
            var f = a(this).html();
            d(),
            e.val(""),
            c.onSelect(f)
        })
    }
} (jQuery),
function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
} (function(a) {
    "use strict";
    function b(a) {
        return "string" == typeof a ? parseInt(a, 10) : ~~a
    }
    var c = {
        wheelSpeed: 1,
        wheelPropagation: !1,
        minScrollbarLength: null,
        maxScrollbarLength: null,
        useBothWheelAxes: !1,
        useKeyboard: !0,
        suppressScrollX: !1,
        suppressScrollY: !1,
        scrollXMarginOffset: 0,
        scrollYMarginOffset: 0,
        includePadding: !1
    },
    d = 0,
    e = function() {
        var a = d++;
        return function(b) {
            var c = ".perfect-scrollbar-" + a;
            return "undefined" == typeof b ? c: b + c
        }
    };
    a.fn.perfectScrollbar = function(d, f) {
        return this.each(function() {
            function g(a, c) {
                var d = a + c,
                e = A - H;
                I = 0 > d ? 0 : d > e ? e: d;
                var f = b(I * (C - A) / (A - H));
                x.scrollTop(f)
            }
            function h(a, c) {
                var d = a + c,
                e = z - E;
                F = 0 > d ? 0 : d > e ? e: d;
                var f = b(F * (B - z) / (z - E));
                x.scrollLeft(f)
            }
            function i(a) {
                return w.minScrollbarLength && (a = Math.max(a, w.minScrollbarLength)),
                w.maxScrollbarLength && (a = Math.min(a, w.maxScrollbarLength)),
                a
            }
            function j() {
                var a = {
                    width: z
                };
                a.left = J ? x.scrollLeft() + z - B: x.scrollLeft(),
                P ? a.bottom = O - x.scrollTop() : a.top = Q + x.scrollTop(),
                M.css(a);
                var b = {
                    top: x.scrollTop(),
                    height: A
                };
                V ? b.right = J ? B - x.scrollLeft() - U - T.outerWidth() : U - x.scrollLeft() : b.left = J ? x.scrollLeft() + 2 * z - B - W - T.outerWidth() : W + x.scrollLeft(),
                S.css(b),
                N.css({
                    left: F,
                    width: E - R
                }),
                T.css({
                    top: I,
                    height: H - X
                })
            }
            function k() {
                x.removeClass("ps-active-x"),
                x.removeClass("ps-active-y"),
                z = w.includePadding ? x.innerWidth() : x.width(),
                A = w.includePadding ? x.innerHeight() : x.height(),
                B = x.prop("scrollWidth"),
                C = x.prop("scrollHeight"),
                !w.suppressScrollX && z + w.scrollXMarginOffset < B ? (D = !0, E = i(b(z * z / B)), F = b(x.scrollLeft() * (z - E) / (B - z))) : (D = !1, E = 0, F = 0, x.scrollLeft(0)),
                !w.suppressScrollY && A + w.scrollYMarginOffset < C ? (G = !0, H = i(b(A * A / C)), I = b(x.scrollTop() * (A - H) / (C - A))) : (G = !1, H = 0, I = 0, x.scrollTop(0)),
                F >= z - E && (F = z - E),
                I >= A - H && (I = A - H),
                j(),
                D && x.addClass("ps-active-x"),
                G && x.addClass("ps-active-y")
            }
            function l() {
                var b, c, d = !1;
                N.bind(K("mousedown"),
                function(a) {
                    c = a.pageX,
                    b = N.position().left,
                    M.addClass("in-scrolling"),
                    d = !0,
                    a.stopPropagation(),
                    a.preventDefault()
                }),
                a(L).bind(K("mousemove"),
                function(a) {
                    d && (h(b, a.pageX - c), k(), a.stopPropagation(), a.preventDefault())
                }),
                a(L).bind(K("mouseup"),
                function() {
                    d && (d = !1, M.removeClass("in-scrolling"))
                }),
                b = c = null
            }
            function m() {
                var b, c, d = !1;
                T.bind(K("mousedown"),
                function(a) {
                    c = a.pageY,
                    b = T.position().top,
                    d = !0,
                    S.addClass("in-scrolling"),
                    a.stopPropagation(),
                    a.preventDefault()
                }),
                a(L).bind(K("mousemove"),
                function(a) {
                    d && (g(b, a.pageY - c), k(), a.stopPropagation(), a.preventDefault())
                }),
                a(L).bind(K("mouseup"),
                function() {
                    d && (d = !1, S.removeClass("in-scrolling"))
                }),
                b = c = null
            }
            function n(a, b) {
                var c = x.scrollTop();
                if (0 === a) {
                    if (!G) return ! 1;
                    if (0 === c && b > 0 || c >= C - A && 0 > b) return ! w.wheelPropagation
                }
                var d = x.scrollLeft();
                if (0 === b) {
                    if (!D) return ! 1;
                    if (0 === d && 0 > a || d >= B - z && a > 0) return ! w.wheelPropagation
                }
                return ! 0
            }
            function o() {
                function a(a) {
                    var b = a.originalEvent.deltaX,
                    c = -1 * a.originalEvent.deltaY;
                    return ("undefined" == typeof b || "undefined" == typeof c) && (b = -1 * a.originalEvent.wheelDeltaX / 6, c = a.originalEvent.wheelDeltaY / 6),
                    a.originalEvent.deltaMode && 1 === a.originalEvent.deltaMode && (b *= 10, c *= 10),
                    b !== b && c !== c && (b = 0, c = a.originalEvent.wheelDelta),
                    [b, c]
                }
                function b(b) {
                    var d = a(b),
                    e = d[0],
                    f = d[1];
                    c = !1,
                    w.useBothWheelAxes ? G && !D ? (x.scrollTop(f ? x.scrollTop() - f * w.wheelSpeed: x.scrollTop() + e * w.wheelSpeed), c = !0) : D && !G && (x.scrollLeft(e ? x.scrollLeft() + e * w.wheelSpeed: x.scrollLeft() - f * w.wheelSpeed), c = !0) : (x.scrollTop(x.scrollTop() - f * w.wheelSpeed), x.scrollLeft(x.scrollLeft() + e * w.wheelSpeed)),
                    k(),
                    c = c || n(e, f),
                    c && (b.stopPropagation(), b.preventDefault())
                }
                var c = !1;
                "undefined" != typeof window.onwheel ? x.bind(K("wheel"), b) : "undefined" != typeof window.onmousewheel && x.bind(K("mousewheel"), b)
            }
            function p() {
                var b = !1;
                x.bind(K("mouseenter"),
                function() {
                    b = !0
                }),
                x.bind(K("mouseleave"),
                function() {
                    b = !1
                });
                var c = !1;
                a(L).bind(K("keydown"),
                function(d) {
                    if ((!d.isDefaultPrevented || !d.isDefaultPrevented()) && b) {
                        for (var e = document.activeElement ? document.activeElement: L.activeElement; e.shadowRoot;) e = e.shadowRoot.activeElement;
                        if (!a(e).is(":input,[contenteditable]")) {
                            var f = 0,
                            g = 0;
                            switch (d.which) {
                            case 37:
                                f = -30;
                                break;
                            case 38:
                                g = 30;
                                break;
                            case 39:
                                f = 30;
                                break;
                            case 40:
                                g = -30;
                                break;
                            case 33:
                                g = 90;
                                break;
                            case 32:
                            case 34:
                                g = -90;
                                break;
                            case 35:
                                g = d.ctrlKey ? -C: -A;
                                break;
                            case 36:
                                g = d.ctrlKey ? x.scrollTop() : A;
                                break;
                            default:
                                return
                            }
                            x.scrollTop(x.scrollTop() - g),
                            x.scrollLeft(x.scrollLeft() + f),
                            c = n(f, g),
                            c && d.preventDefault()
                        }
                    }
                })
            }
            function q() {
                function a(a) {
                    a.stopPropagation()
                }
                T.bind(K("click"), a),
                S.bind(K("click"),
                function(a) {
                    var c = b(H / 2),
                    d = a.pageY - S.offset().top - c,
                    e = A - H,
                    f = d / e;
                    0 > f ? f = 0 : f > 1 && (f = 1),
                    x.scrollTop((C - A) * f)
                }),
                N.bind(K("click"), a),
                M.bind(K("click"),
                function(a) {
                    var c = b(E / 2),
                    d = a.pageX - M.offset().left - c,
                    e = z - E,
                    f = d / e;
                    0 > f ? f = 0 : f > 1 && (f = 1),
                    x.scrollLeft((B - z) * f)
                })
            }
            function r() {
                function b() {
                    var a = window.getSelection ? window.getSelection() : document.getSlection ? document.getSlection() : {
                        rangeCount: 0
                    };
                    return 0 === a.rangeCount ? null: a.getRangeAt(0).commonAncestorContainer
                }
                function c() {
                    e || (e = setInterval(function() {
                        return y() ? (x.scrollTop(x.scrollTop() + f.top), x.scrollLeft(x.scrollLeft() + f.left), void k()) : void clearInterval(e)
                    },
                    50))
                }
                function d() {
                    e && (clearInterval(e), e = null),
                    M.removeClass("in-scrolling"),
                    S.removeClass("in-scrolling")
                }
                var e = null,
                f = {
                    top: 0,
                    left: 0
                },
                g = !1;
                a(L).bind(K("selectionchange"),
                function() {
                    a.contains(x[0], b()) ? g = !0 : (g = !1, d())
                }),
                a(window).bind(K("mouseup"),
                function() {
                    g && (g = !1, d())
                }),
                a(window).bind(K("mousemove"),
                function(a) {
                    if (g) {
                        var b = {
                            x: a.pageX,
                            y: a.pageY
                        },
                        e = x.offset(),
                        h = {
                            left: e.left,
                            right: e.left + x.outerWidth(),
                            top: e.top,
                            bottom: e.top + x.outerHeight()
                        };
                        b.x < h.left + 3 ? (f.left = -5, M.addClass("in-scrolling")) : b.x > h.right - 3 ? (f.left = 5, M.addClass("in-scrolling")) : f.left = 0,
                        b.y < h.top + 3 ? (f.top = h.top + 3 - b.y < 5 ? -5 : -20, S.addClass("in-scrolling")) : b.y > h.bottom - 3 ? (f.top = b.y - h.bottom + 3 < 5 ? 5 : 20, S.addClass("in-scrolling")) : f.top = 0,
                        0 === f.top && 0 === f.left ? d() : c()
                    }
                })
            }
            function s(b, c) {
                function d(a, b) {
                    x.scrollTop(x.scrollTop() - b),
                    x.scrollLeft(x.scrollLeft() - a),
                    k()
                }
                function e() {
                    q = !0
                }
                function f() {
                    q = !1
                }
                function g(a) {
                    return a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0] : a.originalEvent
                }
                function h(a) {
                    var b = a.originalEvent;
                    return b.targetTouches && 1 === b.targetTouches.length ? !0 : b.pointerType && "mouse" !== b.pointerType && b.pointerType !== b.MSPOINTER_TYPE_MOUSE ? !0 : !1
                }
                function i(a) {
                    if (h(a)) {
                        r = !0;
                        var b = g(a);
                        m.pageX = b.pageX,
                        m.pageY = b.pageY,
                        n = (new Date).getTime(),
                        null !== p && clearInterval(p),
                        a.stopPropagation()
                    }
                }
                function j(a) {
                    if (!q && r && h(a)) {
                        var b = g(a),
                        c = {
                            pageX: b.pageX,
                            pageY: b.pageY
                        },
                        e = c.pageX - m.pageX,
                        f = c.pageY - m.pageY;
                        d(e, f),
                        m = c;
                        var i = (new Date).getTime(),
                        j = i - n;
                        j > 0 && (o.x = e / j, o.y = f / j, n = i),
                        a.stopPropagation(),
                        a.preventDefault()
                    }
                }
                function l() { ! q && r && (r = !1, clearInterval(p), p = setInterval(function() {
                        return y() ? Math.abs(o.x) < .01 && Math.abs(o.y) < .01 ? void clearInterval(p) : (d(30 * o.x, 30 * o.y), o.x *= .8, void(o.y *= .8)) : void clearInterval(p)
                    },
                    10))
                }
                var m = {},
                n = 0,
                o = {},
                p = null,
                q = !1,
                r = !1;
                b && (a(window).bind(K("touchstart"), e), a(window).bind(K("touchend"), f), x.bind(K("touchstart"), i), x.bind(K("touchmove"), j), x.bind(K("touchend"), l)),
                c && (window.PointerEvent ? (a(window).bind(K("pointerdown"), e), a(window).bind(K("pointerup"), f), x.bind(K("pointerdown"), i), x.bind(K("pointermove"), j), x.bind(K("pointerup"), l)) : window.MSPointerEvent && (a(window).bind(K("MSPointerDown"), e), a(window).bind(K("MSPointerUp"), f), x.bind(K("MSPointerDown"), i), x.bind(K("MSPointerMove"), j), x.bind(K("MSPointerUp"), l)))
            }
            function t() {
                x.bind(K("scroll"),
                function() {
                    k()
                })
            }
            function u() {
                x.unbind(K()),
                a(window).unbind(K()),
                a(L).unbind(K()),
                x.data("perfect-scrollbar", null),
                x.data("perfect-scrollbar-update", null),
                x.data("perfect-scrollbar-destroy", null),
                N.remove(),
                T.remove(),
                M.remove(),
                S.remove(),
                x = M = S = N = T = D = G = z = A = B = C = E = F = O = P = Q = H = I = U = V = W = J = K = null
            }
            function v() {
                k(),
                t(),
                l(),
                m(),
                q(),
                r(),
                o(),
                (Y || Z) && s(Y, Z),
                w.useKeyboard && p(),
                x.data("perfect-scrollbar", x),
                x.data("perfect-scrollbar-update", k),
                x.data("perfect-scrollbar-destroy", u)
            }
            var w = a.extend(!0, {},
            c),
            x = a(this),
            y = function() {
                return !! x
            };
            if ("object" == typeof d ? a.extend(!0, w, d) : f = d, "update" === f) return x.data("perfect-scrollbar-update") && x.data("perfect-scrollbar-update")(),
            x;
            if ("destroy" === f) return x.data("perfect-scrollbar-destroy") && x.data("perfect-scrollbar-destroy")(),
            x;
            if (x.data("perfect-scrollbar")) return x.data("perfect-scrollbar");
            x.addClass("ps-container");
            var z, A, B, C, D, E, F, G, H, I, J = "rtl" === x.css("direction"),
            K = e(),
            L = this.ownerDocument || document,
            M = a("<div class='ps-scrollbar-x-rail'>").appendTo(x),
            N = a("<div class='ps-scrollbar-x'>").appendTo(M),
            O = b(M.css("bottom")),
            P = O === O,
            Q = P ? null: b(M.css("top")),
            R = b(M.css("borderLeftWidth")) + b(M.css("borderRightWidth")),
            S = a("<div class='ps-scrollbar-y-rail'>").appendTo(x),
            T = a("<div class='ps-scrollbar-y'>").appendTo(S),
            U = b(S.css("right")),
            V = U === U,
            W = V ? null: b(S.css("left")),
            X = b(S.css("borderTopWidth")) + b(S.css("borderBottomWidth")),
            Y = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            Z = null !== window.navigator.msMaxTouchPoints;
            return v(),
            x
        })
    }
}),
$(document).ready(function() {
    function a() {
        k && $.get("/notifications",
        function(a) {
            0 === a.length && $(".no-notification-content").show();
            for (var b = 0,
            c = 0; c < a.length; c++) - 1 === a[c].readBy.indexOf(k) && b++;
            $(".notifcation-count").html(b || ""),
            b > 0 && $(".notification-icon").addClass("highlight");
            var d = new EJS({
                url: "/templates/user/user-notifications.ejs?v=1.60"
            }).render({
                notifs: a,
                username: k
            });
            $(".notification-list-items").html(d)
        })
    }
    function b(a, b) {
        $.post("/notifications/mark-read", {
            ids: a
        },
        function() {
            window.location.href = b
        })
    }
    function c(a) {
        $("." + a).perfectScrollbar();
        var b = $(window).height();
        b -= 100;
        var c = $("." + a).height();
        c >= b && ($("." + a).height(b), $("." + a).perfectScrollbar("update"))
    }
    function d(a) {
        for (var b = atob(a.split(",")[1]), c = [], d = 0; d < b.length; d++) c.push(b.charCodeAt(d));
        var e = new Blob([new Uint8Array(c)], {
            type: "image/png"
        });
        return e
    }
    function e(a) {
        $.post("/utils/report-bug", a,
        function() {
            $(".feedback-message").val(""),
            $(".feedback-modal").data("screenshot", ""),
            $(".feedback-modal").hide().removeClass("bounceInUp"),
            $(".feedback-modal-status").show().addClass("bounceInUp"),
            $("#submit-bug-report").html("Submit")
        })
    }
    function f(a, b) {
        a ? setTimeout(function() {
            b.show()
        },
        800) : b.hide()
    }
    function g(a, b, c) {
        $.post("/utils/add-or-remove-from-collection", {
            postId: a,
            collectionId: b
        },
        function(a) {
            c && c(a.added)
        })
    }
    function h(a, b) {
        i(function(c) {
            for (var d = !1,
            e = 0; e < c.length; e++) if ( - 1 !== c[e].items.indexOf(a)) {
                d = !0;
                break
            }
            b(d)
        })
    }
    function i(a) {
        $.get("/utils/fetch-collections",
        function(b) {
            a(b.data)
        })
    }
    function j() {
        i(function(a) {
            $(".row.post-item").each(function(b, c) {
                for (var d = $(c).data("topic-id"), e = !1, f = 0; f < a.length; f++) if ( - 1 !== a[f].items.indexOf(d)) {
                    e = !0;
                    break
                }
                e && ($(c).find(".saveBtn").removeClass("saved").addClass("saved"), $(c).find(".saveBtn").find("i").removeClass("mdi-bookmark-outline").addClass("mdi-bookmark"))
            })
        })
    }
    var k = $("#username-internal").val();
    $(".submit-button").click(function() {
        $(".submitting-response").toggle()
    }),
    $(".fetch-button").click(function(a) {
        a.preventDefault(),
        $(this).html('<i class="fa fa-spin fa-spinner"></i> Fetching..')
    }),
    $(".login-wrapper, .getStarted").click(function(a) {
        a.preventDefault(),
        $(".login").toggle()
    }),
    $("body").click(function() {
        $(".dropdown-profile").removeClass("active")
    }),
    $(".dropdown-profile a").click(function(a) {
        a.preventDefault(),
        a.stopPropagation(),
        $(this).parent().toggleClass("active")
    }),
    $(document).on("click", ".closeTopicCreationDialogBtn",
    function(a) {
        a.preventDefault(),
        $(".fixed-modal").toggleClass("show"),
        $("body").toggleClass("bodyOverflow")
    }),
    $(".savedTagsInput").autoSuggest({
        url: "/utils/showTagSuggestions",
        onSelect: function(a) {
            $.post("/utils/savedTags/add", {
                tag: a
            },
            function(b) {
                b && ($("#savedTags").prepend('<li><a id="' + a + '" class="single-tag singleSavedTag tag-highlight" href="/tags/' + a.replace(/ /g, "-") + '">#' + a + ' <i class="mdi mdi-close deleteSavedTag" id="' + a + '"></i></a></li>'), $("#add-tag-to-fav").addClass("added").find("i").toggleClass("mdi-plus-circle mdi-check"), $("#add-tag-to-fav").find("span").html("Added to favorites"))
            })
        }
    }),
    $(document).on("click", ".deleteSavedTag",
    function(a) {
        a.preventDefault();
        var b = $(this).attr("id");
        $(this).closest("li").remove(),
        $.post("/utils/savedTags/remove", {
            tag: b
        }),
        $("#add-tag-to-fav").removeClass("added").find("i").toggleClass("mdi-check mdi-plus-circle"),
        $("#add-tag-to-fav").find("span").html("Add to favorites")
    }),
    $('*:not(".primary-bar a.active")').click(function(a) {
        $(a.target).hasClass("noop") || ($(".primary-bar .active.on").siblings(".dm-dropdown").removeClass("show"), $(".primary-bar .active.on").find(".fa").toggleClass("fa-chevron-down fa-chevron-up"), $(".primary-bar .active.on").removeClass("on"))
    }),
    $(".primary-bar a.active").click(function(a) {
        a.stopPropagation(),
        a.preventDefault(),
        $(this).toggleClass("on"),
        $(this).find(".fa").toggleClass("fa-chevron-down fa-chevron-up"),
        $(this).siblings(".dm-dropdown").toggleClass("show")
    }),
    $(".global-alert").click(function() {
        $(this).removeClass("show")
    }),
    $("a.featured").click(function(a) {
        a.preventDefault(),
        $(this).toggleClass("active")
    }),
    $(document).on("click", ".followBtn",
    function(a) {
        if (a.preventDefault(), !$(this).hasClass("devmag-login-unauth")) {
            $.post("/utils/follow-user", {
                followee: $(this).data("followee"),
                follower: $(this).data("follower")
            });
            var b = $(this).html(),
            c = '<i class="mdi mdi-plus-circle"></i> Follow' === b ? '<i class="mdi mdi-check"></i> Following': '<i class="mdi mdi-plus-circle"></i> Follow';
            $(this).toggleClass("active"),
            $(this).toggleClass("following"),
            $(this).html(c)
        }
    }),
    $(document).on("click", ".single-poll-option",
    function(a) {
        if (a.preventDefault(), !$(this).hasClass("devmag-login-unauth")) {
            var b = $(this).data("index"),
            c = $(this).data("topic-id");
            if (!$(this).data("allowed")) return $(".modal-overlay").toggle(),
            void $(".login-modal").toggleClass("show");
            $.post("/ajax/topic/poll-vote", {
                index: b,
                topicId: c
            });
            var d = $(this),
            e = !1;
            d.parent().siblings("div.col-xs-12").each(function() {
                $(this).find("a.single-poll-option").hasClass("active") && (e = !0)
            }),
            d.toggleClass("active"),
            f(d.hasClass("active"), d.closest(".single-poll-options").next(".postVoteBox")),
            d.find(".fa-check-circle").toggleClass("show");
            var g = d.hasClass("active") ? 1 : -1,
            h = e ? parseInt(d.closest(".single-poll-options").data("total-poll-votes")) : parseInt(d.closest(".single-poll-options").data("total-poll-votes")) + g;
            d.closest(".single-poll-options").data("total-poll-votes", h),
            d.closest("div.col-xs-12").siblings().each(function() {
                var a = $(this).find(".single-poll-option").hasClass("active") ? -1 : 0,
                b = parseInt($(this).find(".progress-option").data("width")) + a,
                c = h > 0 && b > 0 ? b / h * 100 : 0;
                $(this).find(".progress-option").css("width", Math.round(c) + "%"),
                $(this).find(".badge").show(),
                $(this).find(".badge").addClass("showBadge"),
                $(this).find(".badge").html(Math.round(c) + "%"),
                $(this).find(".progress-option").data("width", b)
            });
            var i = d.find(".progress-option").data("width"),
            j = h > 0 ? (parseInt(i) + g) / h * 100 : 0;
            d.find(".progress-option").css("width", Math.round(j) + "%"),
            d.find(".badge").addClass("showBadge"),
            d.find(".badge").html(Math.round(j) + "%"),
            d.find(".progress-option").data("width", parseInt(i) + g),
            d.parent().siblings("div.col-xs-12").find("a.single-poll-option").removeClass("active"),
            d.parent().siblings("div.col-xs-12").find("a.single-poll-option").find(".fa-check-circle").removeClass("show");
            var k = !0;
            d.closest("div.col-xs-12").siblings().andSelf().each(function(a, b) {
                0 !== $(b).find(".single-poll-option.active").length && (k = !1)
            }),
            k && d.closest("div.col-xs-12").siblings().andSelf().each(function(a, b) {
                $(b).find(".badge").removeClass("showBadge"),
                $(b).find(".progress-option").css("width", 0)
            })
        }
    }),
    $(".slideout-body").perfectScrollbar(),
    setTimeout(a, 500),
    $(document).on("click", ".mark-all-as-read",
    function(a) {
        a.preventDefault(),
        $.post("/notifications/mark-all-as-read"),
        $(".single-notification.unread").each(function(a, b) {
            $(b).removeClass("unread"),
            $(".notifcation-count").html("")
        }),
        $(".notification-icon").removeClass("highlight")
    }),
    $(document).on("click", ".clear-all",
    function(a) {
        a.preventDefault(),
        $.post("/notifications/clear-all"),
        $(".no-notification-content").show(),
        $(".fill-notifications").hide(),
        $(".notifcation-count").html(""),
        $(".notification-icon").removeClass("highlight")
    }),
    $(document).mouseup(function(a) {
        var b = $(".notification-bell"),
        c = $(".profile-img"),
        d = $(".category-name-handle"),
        e = $("#moreOptions"),
        f = $(".search-field"),
        g = $(".search-results"),
        h = $(".save-list-box"),
        i = $(".saveBtn"),
        j = $(".privacy-dropdown");
        b.is(a.target) || 0 !== b.has(a.target).length || ($(".notification-container").hide(), $(".notification-icon").removeClass("shown")),
        c.is(a.target) || 0 !== c.has(a.target).length || $("#profileMenuDropdown").hide(),
        d.is(a.target) || 0 !== d.has(a.target).length || ($(".topic-changer-bars").removeClass("active"), $(".topic-switcher-dropdown").removeClass("show")),
        e.is(a.target) || 0 !== e.has(a.target).length || (e.removeClass("highlight"), $("#moreOptionsDropdown").hide()),
        f.is(a.target) || g.is(a.target) || 0 !== f.has(a.target).length || 0 !== g.has(a.target).length || ($(".search-results").hide(), $(".search-field").val("")),
        h.is(a.target) || i.is(a.target) || 0 !== h.has(a.target).length || 0 !== i.has(a.target).length || h.hide(),
        j.is(a.target) || 0 !== j.has(a.target).length || j.find(".dropdown-list").hide()
    }),
    $(document).on("keydown", ".markdown-editor",
    function(a) {
        var b = a.keyCode || a.which;
        if (9 == b) {
            a.preventDefault();
            var c = $(this).get(0).selectionStart,
            d = $(this).get(0).selectionEnd,
            e = $(this).val(),
            f = e.substring(c, d),
            g = /^/gm,
            h = f.match(g).length;
            $(this).val(e.substring(0, c) + f.replace(g, "	") + e.substring(d)),
            $(this).get(0).selectionStart = d + h,
            $(this).get(0).selectionEnd = d + h
        }
    }),
    $("#notificationIcon").click(function(a) {
        a.preventDefault(),
        $(".transparent-wrapper").show().delay(50).queue(function(a) {
            $(".slideout-menu").show().removeClass("fadeOutRight").addClass("fadeInRight"),
            a()
        })
    }),
    $(".transparent-wrapper").click(function(a) {
        1 !== $(a.target).closest(".slideout-menu").length && $(".slideout-menu").removeClass("fadeInRight").addClass("fadeOutRight").delay(500).queue(function(a) {
            $(this).hide(),
            $(".transparent-wrapper").hide(),
            a()
        })
    }),
    $(document).on("click", ".notification-li",
    function(a) {
        a.preventDefault();
        var c = $(this).find(".single-notification"),
        d = c.data("notification-ids"),
        e = c.data("read"),
        f = c.data("link");
        return $(a.target).hasClass("follower-image") && (f = $(a.target).data("href")),
        e ? void(f && (window.location.href = f)) : void b(d, f)
    }),
    $(".profile-img").click(function(a) {
        a.preventDefault(),
        $(".profile-dropdown").toggle()
    }),
    $("#moreOptions").click(function(a) {
        a.preventDefault(),
        $(this).toggleClass("highlight"),
        $(".more-options-dropdown").toggle()
    });
    var l;
    if ($(".search-field").on("keyup",
    function() {
        var a = $(this);
        return a.val() ? (l && clearTimeout(l), void(l = setTimeout(function() {
            $("#search-icon").removeClass("mdi-magnify").addClass("fa-spin mdi-refresh"),
            $.get("/utils/showSearchSuggestions?term=" + a.val(),
            function(a) {
                if ($("#search-icon").removeClass("fa-spin mdi-refresh").addClass("mdi-magnify"), 0 === $("#search-results-container").length && $(".results-container").html('<div id="search-results-container"></div>'), $("#search-results-container").html(""), $(".results-container").css("height", "auto"), !a || 0 === a.users.length && 0 === a.topics.length) return void $(".search-results,.no-results-container").show();
                $(".no-results-container").hide();
                var b = new EJS({
                    url: "/templates/search/search-suggestion.ejs?v=1.60"
                }).render(a);
                $("#search-results-container").html(b),
                $(".search-results").show(),
                $(".results-container").perfectScrollbar("destroy"),
                c("results-container")
            })
        },
        500))) : ($(".results-container").html(""), $(".search-results,.no-results-container").hide(), void clearTimeout(l))
    }), $(document).on("click", ".closeDialog",
    function(a) {
        a.preventDefault(),
        $(".new-topic-creation-modal").toggle(),
        $("body").toggleClass("bodyOverflow")
    }), $(document).on("click", ".new-topic-creation-modal",
    function() {
        $(this).toggleClass("show animated fadeInDown"),
        $("body").toggleClass("bodyOverflow")
    }), $(document).on("click", ".topic-items, .topic-form-container, .slideout-helper",
    function(a) {
        a.stopPropagation()
    }), $(document).on("click", ".help-icon, .slideout-wrapper, .help",
    function(a) {
        a.preventDefault(),
        $(".markdown-content").load("/templates/utils/markdown-helper.ejs",
        function() {
            $(".markdown-help-preloader").hide()
        }),
        $(".slideout-wrapper").toggle().find(".slideout-helper").toggleClass("fadeInRight"),
        $("body").toggleClass("bodyOverflow")
    }), $(".alert-xprs .dismiss, .alert-xprs.wrapper").click(function(a) {
        a.preventDefault(),
        $(".alert-xprs").removeClass("show")
    }), $(".alert-xprs .alert-content").click(function(a) {
        a.stopPropagation()
    }), $(".post-categories-list").click(function(a) {
        a.preventDefault(),
        $(".post-categories").hide()
    }), $(".link-category").click(function() {
        $(".link-options").show().addClass("flipInX").find(".form-control").focus()
    }), $(".poll-category").click(function() {
        $(".poll-options-singleton").show().addClass("flipInX")
    }), $(".create-button").click(function(a) {
        if (a.preventDefault(), !$(this).hasClass("devmag-login-unauth")) {
            if (!$(this).data("allowed")) return $(".modal-overlay").toggle(),
            void $(".login-modal").toggleClass("show");
            $(".post-dialog-container").addClass("show").delay(50).queue(function(a) {
                $(".post-dialog-container").addClass("auto-height"),
                a()
            }),
            $("#title-field").focus()
        }
    }), $(".close-status-bar-handle").click(function() {
        $(".post-status-bar").removeClass("show fadeInDown")
    }), $(".post-status-bar .btn").click(function(a) {
        a.stopPropagation()
    }), $(".topic-changer-bars, .category-name").click(function(a) {
        a.preventDefault(),
        $(".topic-changer-bars").toggleClass("active"),
        $(".topic-switcher-dropdown").toggleClass("show")
    }), $(".post-description p").ellipsis({
        row: 2,
        onlyFullWords: !0,
        "char": "..."
    }), $(document).on("click", ".post-link-image i.fa-angle-down",
    function(a) {
        a.preventDefault();
        var b = $(this).parent(".post-link-image"),
        c = b.height(),
        d = b.css("height", "auto").height();
        b.height(c).animate({
            height: d
        },
        300),
        $(this).hide().parent(".post-link-image").find(".fa-angle-up").show()
    }), $(document).on("click", ".post-link-image i.fa-angle-up",
    function(a) {
        a.preventDefault(),
        $(this).parent(".post-link-image").animate({
            height: "100px"
        }),
        $(this).hide().parent(".post-link-image").find(".fa-angle-down").show()
    }), $(".close-card").click(function(a) {
        a.preventDefault(),
        $(".welcome-card-row").hide()
    }), $('[data-toggle="tooltip"]').tooltip(), $(".report_bug_handle").click(function(a) {
        a.preventDefault(),
        $(".report_bug_handle").html("Please Wait..."),
        html2canvas(document.body, {
            onrendered: function(a) {
                $(".report_bug_handle").html('<i class="mdi mdi-bug"></i> Report Bug'),
                $(".report_cover").show(),
                $(".feedback-modal").show().addClass("bounceInUp");
                var b = a.toDataURL();
                $(".feedback-modal").data("screenshot", b)
            }
        })
    }), $(".report_close").click(function(a) {
        a.preventDefault(),
        $(".report_cover").hide(),
        $(".feedback-modal").hide().removeClass("bounceInUp")
    }), $(document).on("click", "#submit-bug-report",
    function() {
        var a = $(".feedback-message").val(),
        b = $(".feedback-modal").data("screenshot"),
        c = d(b);
        if (a) if ($(this).html("Submitting..."), $("#autoScreenshot").is(":checked")) {
            var f = "https://api.parse.com/1/files/file" + (new Date).getTime();
            $.ajax({
                type: "POST",
                beforeSend: function(a) {
                    a.setRequestHeader("X-Parse-Application-Id", "dJKJBya04CnLKqODrV7JF3b1Py4s5C9VV0oturl7"),
                    a.setRequestHeader("X-Parse-REST-API-Key", "PZBzCCTicgmK4PZFbqhYLQiIzLpn3Et64XVjDbBs"),
                    a.setRequestHeader("Content-Type", "image/png")
                },
                url: f,
                data: c,
                processData: !1,
                contentType: !1,
                success: function(b) {
                    var c = b.url;
                    e({
                        fileUrl: c,
                        description: a
                    })
                }
            })
        } else e({
            description: a
        })
    }), $(document).on("click", "#feedback-ok-button",
    function() {
        $(".feedback-modal-status").hide().removeClass("bounceInUp"),
        $(".report_cover").hide()
    }), $(document).on("click", ".close-notification-center",
    function(a) {
        a.preventDefault(),
        $(".transparent-wrapper").click()
    }), $(document).on("click", ".edit-link",
    function(a) {
        a.preventDefault();
        var b = $(this).attr("title"),
        c = "Edit saved tags" === b ? "Done": "Edit saved tags";
        $(this).attr("title", c),
        $(this).find("i").toggleClass("mdi-pencil mdi-check"),
        $(".tagsForm").toggle(),
        $(".singleSavedTag").each(function(a, b) {
            $(b).toggleClass("edit")
        })
    }), $(document).on("click", ".color-circles .color-circle",
    function() {
        $(this).parent(".col-xs-3").siblings().find(".color-circle").addClass("inactive").removeClass("active"),
        $(this).addClass("active").removeClass("inactive")
    }), $(document).on("click", "#addCollectionDesc",
    function(a) {
        $(this).siblings("textarea").show().focus(),
        $(this).hide(),
        a.preventDefault()
    }), $(document).on("click", ".justifyVoteBtn",
    function(a) {
        a.preventDefault(),
        $(this).parent().hide(),
        $(this).parent().siblings(".voteFormBox").show(),
        $(this).parents(".postVoteBox").find(".closeVoteAlert").hide()
    }), $(document).on("click", ".closeBox",
    function(a) {
        a.preventDefault(),
        $(this).parents(".postVoteBox").hide()
    }), $(document).on("click", ".submit-justification-btn",
    function(a) {
        a.preventDefault();
        var b = $(this).siblings(".poll-justification-area").val(),
        c = $(this).data("topic-id"),
        d = $(this).data("topic-title"),
        e = $(this);
        $.post("/ajax/topic/comments/add", {
            type: "comment",
            topicId: c,
            content: b
        },
        function(a) {
            e.closest(".voteFormBox").hide(),
            e.closest(".voteFormBox").next(".voteMessage").show(),
            e.closest(".voteFormBox").next(".voteMessage").find(".addVoteCommentBtn").attr("href", "/post/" + c + "/" + d + "#" + a.created._id)
        })
    }), $(document).on("keyup", "#new-collection-input",
    function(a) {
        if (a.preventDefault(), a.stopPropagation(), 13 === a.which) {
            var b = $(this).val(),
            c = $(this).siblings(".dropdown-privacy").data("val"),
            d = $(this).closest(".save-list-box").find(".collections-container").data("post-id"),
            e = $(this);
            $(this).val(""),
            $.post("/utils/create-edit-collection", {
                name: b,
                type: c
            },
            function(a) {
                g(d, a.data._id,
                function() {
                    i(function(a) {
                        e.closest(".save-list-box").find(".collections-container").html(new EJS({
                            url: "/templates/user/user-collections.ejs?v=1.60"
                        }).render({
                            collections: a,
                            postId: parseInt(d, 10)
                        })),
                        e.closest(".save-list-box").find(".collections-container").animate({
                            scrollTop: e.closest(".save-list-box").find(".collections-container")[0].scrollHeight
                        },
                        1e3),
                        h(d,
                        function(a) {
                            a ? e.closest(".save-list-container").find(".saveBtn").removeClass("saved").addClass("saved") : e.closest(".save-list-container").find(".saveBtn").removeClass("saved")
                        })
                    })
                })
            })
        }
    }), $(document).on("click", ".saveBtn",
    function(a) {
        if (a.preventDefault(), !$(this).hasClass("devmag-login-unauth")) {
            var b = $(this);
            $(".saveBtn").each(function(a, c) {
                $(c).attr("id") !== b.attr("id") && $(c).siblings(".save-list-box").hide()
            }),
            $(this).siblings(".save-list-box").toggle(),
            $(this).siblings(".save-list-box").find(".loading-div").show(),
            $(this).siblings(".save-list-box").find(".list-container").hide();
            var c = $(this).siblings(".save-list-box").find(".collections-container").data("post-id");
            i(function(a) {
                var d = a.length > 0 ? a[a.length - 1] : {};
                b.siblings(".save-list-box").find(".loading-div").hide(),
                b.siblings(".save-list-box").find(".list-container").show(),
                b.siblings(".save-list-box").find(".collections-container").html(new EJS({
                    url: "/templates/user/user-collections.ejs?v=1.60"
                }).render({
                    collections: a,
                    postId: parseInt(c, 10)
                })),
                b.siblings(".save-list-box").find(".dropdown-privacy").removeClass("public private").addClass(d.type || "private"),
                b.siblings(".save-list-box").find(".dropdown-privacy").data("val", d.type || "private"),
                b.siblings(".save-list-box").find(".dropdown-privacy").find(".dropdown-text").html((d.type ? d.type.charAt(0).toUpperCase() + d.type.substring(1, d.type.length) : "Private") + '<i class="mdi mdi-menu-down"></i>')
            })
        }
    }), $(document).on("click", ".collection-list-item",
    function(a) {
        a.preventDefault(),
        $(this).find("i").toggleClass("mdi-checkbox-blank-outline mdi-checkbox-marked"),
        $(this).toggleClass("selected");
        var b = $(this).data("collection-id"),
        c = $(this).closest(".collections-container").data("post-id");
        g(c, b,
        function() {
            h(c,
            function(b) {
                b ? ($(a.target).closest(".save-list-container").find(".saveBtn").removeClass("saved").addClass("saved"), $(a.target).closest(".save-list-container").find(".saveBtn").find("i").removeClass("mdi-bookmark-outline").addClass("mdi-bookmark")) : ($(a.target).closest(".save-list-container").find(".saveBtn").removeClass("saved"), $(a.target).closest(".save-list-container").find(".saveBtn").find("i").removeClass("mdi-bookmark").addClass("mdi-bookmark-outline"))
            })
        })
    }), $(document).on("click", ".create-new-list",
    function(a) {
        a.preventDefault(),
        $(this).hide(),
        $(this).siblings(".create-list-box").show().find("input").focus()
    }), -1 !== ["home", "discussion", "repo", "showcase", "poll", "link", "tagged"].indexOf($("#type").val()) && k && j(), $(document).on("click", ".votes-count",
    function(a) {
        a.preventDefault();
        var b = $(this).data("topic-id");
        $(".poll-modal-container").show().delay(10).queue(function(a) {
            $(this).addClass("show-poll-results"),
            a()
        }),
        $.get("/ajax/topics/" + b,
        function(a) {
            var b = a.data.topic,
            c = a.data.user;
            $("#poll-main-title").text(b.title),
            $("#poll-creator-info").text(c ? c.name + " ( @" + c.username + " )": " Anonymous"),
            $("#poll-date-count").text("- " + moment(new Date(b.dateAdded)).fromNow() + " - Total " + b.totalPollVotes + " votes");
            var d = new EJS({
                url: "/templates/topic/poll-stats.ejs"
            }).render({
                pollQuestions: b.pollQuestions,
                totalPollVotes: b.totalPollVotes
            });
            $("#poll-modal-options").html(d),
            setTimeout(function() {
                for (var a = 0; a < b.pollQuestions.length; a++) {
                    if (!b.pollQuestions[a].question) return;
                    var c = b.pollQuestions[a],
                    d = 0 !== b.totalPollVotes ? Math.round(c.votes / b.totalPollVotes * 100) : 0;
                    $("#poll-stats-info-" + a).find(".completed-poll-bar").css("width", d + "%")
                }
            },
            500)
        })
    }), $(document).on("click", ".poll-backdrop, .close-modal-button",
    function(a) {
        a.preventDefault(),
        $(".poll-modal-container").removeClass("show-poll-results").delay(100).queue(function(a) {
            $(this).hide(),
            a()
        })
    }), $(document).on("click", ".more-voters-link",
    function(a) {
        a.preventDefault(),
        $(".upvoted-people-modal").show().delay(50).queue(function(a) {
            $(this).addClass("active"),
            a()
        })
    }), $(document).on("click", ".upm-done-btn",
    function(a) {
        a.preventDefault(),
        $(".upvoted-people-modal").removeClass("active").delay(600).queue(function(a) {
            $(this).hide(),
            a()
        })
    }), $(document).on("click", ".upvoted-people-modal",
    function() {
        $(".upvoted-people-modal").removeClass("active").delay(600).queue(function(a) {
            $(this).hide(),
            a()
        })
    }), $(document).on("click", ".upvoted-people-modal .upm-container",
    function() {
        $(this).stopPropagation()
    }), $(window).width() >= 992 && $(document).on("scroll",
    function() {
        $(window).scrollTop();
        if (0 !== $(".tags-widget").length) {
            var a = $(".tags-widget").width() + 30,
            b = $(".tags-widget").offset().left - 10,
            c = $(".invite-handle"),
            d = $(".invite-friends");
            c.offset().top - $(window).scrollTop() < 16 && !d.hasClass("stick") ? window.requestAnimationFrame(function() {
                d.addClass("stick"),
                d.css("left", b + "px").css("width", a + "px")
            }) : c.offset().top - $(window).scrollTop() > 16 && d.hasClass("stick") && window.requestAnimationFrame(function() {
                d.removeClass("stick"),
                d.css("left", "auto").css("width", "auto")
            })
        }
    }), $(document).on("click", ".devmag-login-unauth",
    function(a) {
        a.preventDefault(),
        $(".user-login-modal").show().delay(10).queue(function(a) {
            $(this).addClass("show"),
            a()
        })
    }), $(document).on("click", ".close-login-modal, .user-login-modal",
    function(a) {
        a.preventDefault(),
        $(".user-login-modal").removeClass("show").delay(300).queue(function(a) {
            $(this).hide(),
            a()
        })
    }), $(document).on("click", ".login-container",
    function(a) {
        a.stopPropagation()
    }), window.wizrocket) {
        var m = Cookies.get("user");
        m ? (userObject = JSON.parse(m.substring(m.indexOf("j:") + 2)), wizrocket.event.push("userviewed", {
            Username: userObject.username,
            ID: userObject.id,
            Page: window.location.href,
            Date: new Date
        })) : (Cookies.get("user-anonym") || Cookies.set("user-anonym", "user" + (new Date).getTime() + "-" + uuid.v1(), {
            expires: 365
        }), wizrocket.event.push("userviewed", {
            ID: Cookies.get("user-anonym"),
            Page: window.location.href,
            Date: new Date
        }))
    }
}),
$(document).ready(function() {
    function a(a) {
        $.get("/utils/fetch-collections",
        function(b) {
            a(b.data)
        })
    }
    function b() {
        a(function(a) {
            $(".row.post-item").each(function(b, c) {
                for (var d = $(c).data("topic-id"), e = !1, f = 0; f < a.length; f++) if ( - 1 !== a[f].items.indexOf(d)) {
                    e = !0;
                    break
                }
                e && $(c).find(".saveBtn").removeClass("saved").addClass("saved")
            })
        })
    }
    function c() {
        $(".post-item.repo-item").each(function(a, b) {
            var c = $(b).data("url");
            if (0 === $(b).find(".github-box").length && c && (0 === c.indexOf("https://github.com") || 0 === c.indexOf("http://github.com"))) {
                var d = $(b).data("photo");
                $.post("/utils/github-stats", {
                    url: c
                },
                function(a) {
                    if (a.data) {
                        a.data.photo = d;
                        var c = new EJS({
                            url: "/templates/topic/topic-git-stats.ejs?v=1.42"
                        }).render(a);
                        $(b).find(".post-description").after(c)
                    }
                })
            }
        })
    }
    function d(a, b) {
        var c = a.hasClass("active"),
        d = a.closest("ul").find(".score-count"),
        e = parseInt(d.html());
        a.toggleClass("active"),
        "up" === b ? (d.html(c ? 0 === e ? e: --e: ++e), d.toggleClass("green"), a.closest("ul").find("a.thumbs-down").removeClass("active")) : (d.removeClass("green"), a.closest("ul").find(".thumbs-up").hasClass("active") && d.html(0 === e ? e: --e), a.closest("ul").find(".thumbs-up").removeClass("active"))
    }
    function e(a) {
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "/utils/fetch-contributors",
            data: JSON.stringify({
                topicIds: a
            }),
            complete: function(a) {
                var b = a.responseJSON;
                for (var c in b) {
                    var d = b[c],
                    e = new EJS({
                        url: "/templates/topic/topic-contributors.ejs?v=1.60"
                    }).render({
                        users: d
                    });
                    $("div[data-topic-id=" + c + "]").find(".upvote-profiles-list").html(e),
                    $("div[data-topic-id=" + c + "]").find(".more-voters-link").data("contributors", JSON.stringify(d)),
                    $(".voter-profile-pic").tooltip()
                }
            }
        })
    }
    function f(a) {
        for (var b = [], c = 0; c < a.length; c++) b.push(a[c]._id);
        return b
    }
    var g = $("#internals > #type").val(),
    h = $("#internals > #category").val(),
    i = $("#internals > #tag").val(),
    j = $("#writeAnswer").val();
    if ($(".poll-justification-area").autosize(), g) {
        var k = 25,
        l = 25;
        "home" === g && (g = ""),
        $("#loadMoreBtn").click(function(a) {
            a.preventDefault();
            var d = $(this);
            $(this).find(".toggleThis").toggle(),
            $(this).parent(".single-thread").toggleClass("highlight");
            var d = $(this),
            m = "/ajax/topics?skip=" + k + "&limit=" + l + "&type=" + (j || g) + "&category=" + h + "&tag=" + i;
            $.get(m,
            function(a) {
                var g = new EJS({
                    url: "/public/templates/topic/topics.ejs?v=1.65"
                }).render(a);
                $("#newTopicsMountPoint").append(g),
                k += l,
                d.find(".toggleThis").toggle(),
                d.parent(".single-thread").toggleClass("highlight"),
                0 === a.topics.length && ($(".loadMoreContainer").hide(), $("#no-more-posts").show()),
                c(),
                b(),
                e(f(a.topics)),
                $(".duplicate-post-alert").tooltip()
            })
        }),
        $(document).on("click", ".topicVotingBtn",
        function(a) {
            if (a.preventDefault(), !$(this).hasClass("devmag-login-unauth")) {
                var b = $(this).data("type"),
                c = $(this).data("topic-id"),
                f = $(this).find("span").text();
                if (!$(this).data("allowed")) return void swal({
                    title: "Sorry!",
                    text: "You can't vote for your own post!",
                    timer: 2e3
                });
                $.post("/ajax/topic/vote", {
                    type: b,
                    topicId: c
                },
                function() {
                    e([c])
                }),
                "down" === b ? $(this).closest("li").siblings("li").find(".thumbs-up").find("span").text("Upvote") : $(this).find("span").text("Upvoted" === f ? "Upvote": "Upvoted"),
                d($(this), b)
            }
        }),
        $(document).on("click", "#add-tag-to-fav",
        function(a) {
            a.preventDefault(),
            $(this).toggleClass("added"),
            $(this).find("i").toggleClass("mdi-plus-circle mdi-check");
            var b = $(this).data("tag"),
            c = $(this);
            $(this).hasClass("added") ? $.post("/utils/savedTags/add", {
                tag: b
            },
            function(a) {
                a && ($("#savedTags").prepend('<li><a id="' + b + '" class="single-tag singleSavedTag tag-highlight" href="/tags/' + b.replace(/ /g, "-") + '">#' + b + ' <i class="mdi mdi-close deleteSavedTag" id="' + b + '"></i></a></li>'), $(".edit-link").find("i").hasClass("flaticon-check52") && $("#savedTags").find("a#" + b).toggleClass("edit"), c.find("span").html("Added to favorites"))
            }) : ($.post("/utils/savedTags/remove", {
                tag: b
            }), $("#savedTags").find('i[id="' + b.replace(/\-/i, " ") + '"]').closest("li").remove(), $(this).find("span").html("Add to favorites"))
        }),
        c(),
        e(JSON.parse(document.getElementById("topicIds").value)),
        $(document).on("click", ".more-voters-link",
        function() {
            $(".upvoted-people-modal").find(".upm-content").html("");
            var a = JSON.parse($(this).data("contributors")),
            b = new EJS({
                url: "/templates/topic/topic-activity.ejs?V=1.45"
            }).render({
                users: a
            });
            $(".upvoted-people-modal").find(".upm-content").html(b)
        })
    }
}),
$(document).ready(function() {
    function a() {
        "repo" !== l || 0 !== n.indexOf("https://github.com") && 0 !== n.indexOf("http://github.com") || $.post("/utils/github-stats", {
            url: n
        },
        function(a) {
            if (a.data) {
                a.data.photo = m;
                var b = new EJS({
                    url: "/templates/topic/topic-git-stats.ejs"
                }).render(a);
                $("#github-box-mount").html(b)
            }
        })
    }
    function b(a, b) {
        var c = a.hasClass("active"),
        d = a.closest("ul").find(".score-count"),
        e = parseInt(d.html());
        a.toggleClass("active"),
        "up" === b ? (d.html(c ? 0 === e ? e: --e: ++e), d.toggleClass("green"), a.closest("ul").find("a.thumbs-down").removeClass("active")) : (d.removeClass("green"), a.closest("ul").find(".thumbs-up").hasClass("active") && d.html(0 === e ? e: --e), a.closest("ul").find(".thumbs-up").removeClass("active"))
    }
    function c() {
        var a = o ? window.localStorage: window.sessionStorage;
        if (a) {
            var b = "comment-" + j;
            o && (b += "-" + o._id),
            a === window.localStorage && window.sessionStorage.getItem("comment-" + j) && (a.setItem(b, window.sessionStorage.getItem("comment-" + j)), window.sessionStorage.removeItem("comment-" + j));
            var c = a.getItem(b);
            c && $("#commentArea.sync-to-localstorage").val(c),
            $(document).on("keyup", "#commentArea.sync-to-localstorage",
            function() {
                q && clearTimeout(q),
                q = setTimeout(function() {
                    a.setItem(b, $(this).val()),
                    $("#sync-info").is(":visible") || $("#sync-info").show(),
                    $("#sync-info").find(".sync-label").html('<i class="mdi mdi-refresh"></i> Saving..'),
                    setTimeout(function() {
                        $("#sync-info").find(".sync-label").html('<i class="mdi mdi-database"></i> Saved to Local Storage')
                    },
                    800)
                }.bind(this), 500)
            })
        }
    }
    function d(a, b) {
        $.get("/utils/fetch-collections",
        function(c) {
            for (var d = c.data,
            e = !1,
            f = 0; f < d.length; f++) if ( - 1 !== d[f].items.indexOf(a)) {
                e = !0;
                break
            }
            b(e)
        })
    }
    function e(a) {
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "/utils/fetch-contributors",
            data: JSON.stringify({
                topicIds: a
            }),
            complete: function(b) {
                var c = b.responseJSON,
                d = c[j],
                e = new EJS({
                    url: "/templates/topic/topic-contributors.ejs?v=1.60"
                }).render({
                    users: d
                });
                $("div[data-topic-id=" + a[0] + "]").find(".upvote-profiles-list").html(e),
                $("div[data-topic-id=" + a[0] + "]").find(".more-voters-link").data("contributors", JSON.stringify(d)),
                $(".voter-profile-pic").tooltip()
            }
        })
    }
    function f(a) {
        // $.ajax({
        //     type: "POST",
        //     contentType: "application/json",
        //     url: "/utils/fetch-comment-upvoters",
        //     data: JSON.stringify({
        //         topicId: a
        //     }),
        //     complete: function(a) {
        //         var b = a.responseJSON;
        //         for (var c in b) {
        //             var d = b[c],
        //             e = new EJS({
        //                 url: "/templates/topic/topic-contributors.ejs?v=1.60"
        //             }).render({
        //                 users: d
        //             });
        //             $("div[data-comment-id=" + c + "]").find(".upvote-profiles-list").html(e),
        //             $("div[data-comment-id=" + c + "]").find(".more-voters-link").data("contributors", JSON.stringify(d)),
        //             $(".voter-profile-pic").tooltip()
        //         }
        //     }
        // })
    }
    function g(a) {
        var b = "/auth/twitter",
        c = 500,
        d = 500,
        e = screen.width / 2 - c / 2,
        f = screen.height / 2 - d / 2,
        g = window.open(b, "_blank", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + c + ", height=" + d + ", top=" + f + ", left=" + e),
        h = setInterval(function() {
            g.closed && (clearInterval(h), $.get("/auth/user",
            function(b) {
                a(b.otherAccounts && b.otherAccounts.twitter)
            }))
        },
        1500)
    }
    function h(a) {
        $(".ask-body-content .step-" + a).show().delay(100).queue(function(a) {
            $(this).addClass("slide"),
            a()
        })
    }
    function i() {
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "/utils/answerer-suggestions",
            data: JSON.stringify({
                tags: k,
                topicId: j
            }),
            complete: function(a) {
                var b = a.responseJSON.data;
                s = b;
                var c = new EJS({
                    url: "/templates/search/invite-suggestions.ejs?v=1.52"
                }).render({
                    users: b
                });
                $("#invite-search-results").html('<div class="suggested-people-header" id="suggested-people-header">Suggested People</div>' + c)
            }
        })
    }
    if ("undefined" != typeof devmagTopicViewInternals) {
        var j = devmagTopicViewInternals.topicId,
        k = devmagTopicViewInternals.topicTags,
        l = devmagTopicViewInternals.topicType,
        m = devmagTopicViewInternals.coverImage,
        n = devmagTopicViewInternals.topicExternalUrl,
        o = devmagTopicViewInternals.userJSON,
        p = $(".create-comment-box").find(".markdown-text-area").clone();
        $(".btn-comment").click(function(a) {
            a.preventDefault(),
            $(this).hide(),
            $(".new-comment-wrapper, .comment-form").show(),
            $("#commentArea").focus()
        }),
        $("#topicContent").autosize(),
        $("#commentArea").autosize(),
        $(".replyField,.editReplyField").autosize(),
        $("#selectedTagsInput").val(k.toString()),
        $(".autocompleteTags").devMagTagInput({
            url: "/utils/showTagSuggestions"
        }),
        $(document).on("keydown", ".replyField",
        function(a) {
            if (13 === a.keyCode && a.shiftKey) a.stopPropagation();
            else if (13 === a.keyCode) {
                if (!o) return void $(".user-login-modal").show().delay(10).queue(function(a) {
                    $(this).addClass("show"),
                    a()
                });
                var b = $(this).data("reply-to"),
                c = $(this).val(),
                d = $(this);
                if ("" === c.trim()) return;
                d.attr("disabled", "disabled"),
                $.post("/ajax/topic/comments/add", {
                    type: "reply",
                    replyTo: b,
                    topicId: j,
                    content: c
                },
                function(a) {
                    if (d.val(""), "topic" === a.parent) {
                        a.created.content = Autolinker.link(a.created.content, {
                            twitter: !1,
                            truncate: 45,
                            className: "autolinkedURL",
                            replaceFn: function(a, b) {
                                switch (b.getType()) {
                                case "url":
                                    var c = a.getTagBuilder().build(b);
                                    return c.setAttr("rel", "nofollow"),
                                    c.addClass("external-link"),
                                    c.setAttr("href", "/utils/redirect?url=" + b.getUrl()),
                                    c;
                                case "email":
                                    return;
                                case "twitter":
                                    return
                                }
                            }
                        });
                        var b = new EJS({
                            url: "/templates/topic/new-reply.ejs?v=1.42"
                        }).render({
                            reply: a.created,
                            user: o
                        });
                        $("#topicReplies").append(b)
                    } else {
                        var c = d.closest(".row.single-container").attr("id");
                        a.created.content = Autolinker.link(a.created.content, {
                            twitter: !1,
                            truncate: 45,
                            className: "autolinkedURL",
                            replaceFn: function(a, b) {
                                switch (b.getType()) {
                                case "url":
                                    var c = a.getTagBuilder().build(b);
                                    return c.setAttr("rel", "nofollow"),
                                    c.addClass("external-link"),
                                    c.setAttr("href", "/utils/redirect?url=" + b.getUrl()),
                                    c;
                                case "email":
                                    return;
                                case "twitter":
                                    return
                                }
                            }
                        });
                        var b = new EJS({
                            url: "/templates/topic/new-reply-to-comment.ejs?v=1.42"
                        }).render({
                            commentId: c,
                            reply: a.created,
                            user: o
                        });
                        d.closest(".single-reply").before(b)
                    }
                    d.removeAttr("disabled"),
                    $(".reply-helper").hide(),
                    d.trigger("autosize.resize"),
                    $(".editReplyField").autosize()
                })
            }
        }),
        $(document).on("click", ".addCommentBtn",
        function(a) {
            if (a.preventDefault(), o) {
                var b = $(this),
                c = $("#commentArea").val();
                "" !== c.trim() && ($("#commentArea").attr("disabled", "disabled"), b.attr("disabled", "disabled"), $.post("/ajax/topic/comments/add", {
                    type: "comment",
                    topicId: j,
                    content: c
                },
                function(a) {
                    $(".btn-comment").show(),
                    $("#commentArea").val(""),
                    a.created.content = Autolinker.link(a.created.content, {
                        twitter: !1,
                        truncate: 45,
                        className: "autolinkedURL",
                        replaceFn: function(a, b) {
                            switch (b.getType()) {
                            case "url":
                                var c = a.getTagBuilder().build(b);
                                return c.setAttr("rel", "nofollow"),
                                c.addClass("external-link"),
                                c.setAttr("href", "/utils/redirect?url=" + b.getUrl()),
                                c;
                            case "email":
                                return;
                            case "twitter":
                                return
                            }
                        }
                    });
                    var c = new EJS({
                        url: "/templates/topic/new-comment.ejs?v=1.42"
                    }).render({
                        topicId: j,
                        comment: a.created,
                        user: o
                    });
                    $("#comments").prepend(c),
                    b.closest(".markdown-text-area").replaceWith(p.clone()),
                    $("#total-comments-count").html(parseInt($("#total-comments-count").html()) + 1),
                    $(".replyField,.editReplyField").autosize(),
                    window.localStorage && localStorage.removeItem("comment-" + j + "-" + o._id)
                }))
            }
        }),
        $(document).on("click", ".editCommentBtn",
        function(a) {
            a.preventDefault();
            var b = $(this).data("comment-id");
            $("#" + b).find(".editCommentOptions").toggleClass("hide show"),
            $("#" + b).find(".single-comment-desc").toggleClass("show hide"),
            $("#" + b).find(".saveCommentTextArea").focus(),
            $(this).hide(),
            $(this).parents(".single-thread").toggleClass("edit-mode"),
            $("#" + b).find(".saveCommentTextArea").trigger("autosize.resize")
        }),
        $(document).on("click", ".cancelCommentBtn",
        function(a) {
            a.preventDefault();
            var b = $(this).data("comment-id");
            $("#" + b).find(".comment-compiled-view-area").hide(),
            $("#" + b).find(".markdown-editor").show(),
            $("#" + b).find("#markdown-view").addClass("active"),
            $("#" + b).find("#compiled-view").removeClass("active"),
            $("#" + b).find(".editCommentOptions").toggleClass("show hide"),
            $("#" + b).find(".single-comment-desc").toggleClass("hide show"),
            $(".editCommentBtn[data-comment-id=" + b + "]").show(),
            $("#" + b).find(".markdown-editor").val($("#" + b).find(".initial-content").val()),
            $(this).parents(".single-thread").removeClass("edit-mode")
        }),
        $(document).on("click", ".saveCommentBtn",
        function(a) {
            a.preventDefault();
            var b = $(this),
            c = $(this).closest(".editCommentOptions").find(".saveCommentTextArea").val();
            if ("" !== c.trim()) {
                var d = $(this).data("topic-id"),
                e = $(this).data("comment-id");
                $(".editCommentBtn[data-comment-id=" + e + "]").show(),
                b.attr("disabled", "disabled"),
                b.closest(".editCommentOptions").find(".saveCommentTextArea").attr("disabled", "disabled"),
                $.post("/ajax/topic/comments/edit", {
                    topicId: d,
                    commentId: e,
                    content: c
                },
                function() {
                    $("#" + e).find(".editCommentOptions").toggleClass("show hide"),
                    $("#" + e).find(".single-comment-desc").html(Autolinker.link(markdown.toHTML(c), {
                        twitter: !1,
                        truncate: 45,
                        className: "autolinkedURL",
                        replaceFn: function(a, b) {
                            switch (b.getType()) {
                            case "url":
                                var c = a.getTagBuilder().build(b);
                                return c.setAttr("rel", "nofollow"),
                                c.addClass("external-link"),
                                c.setAttr("href", "/utils/redirect?url=" + b.getUrl()),
                                c;
                            case "email":
                                return;
                            case "twitter":
                                return
                            }
                        }
                    })),
                    $("#" + e).find(".single-comment-desc").toggleClass("hide show"),
                    $("#" + e).find(".comment-compiled-view-area").hide(),
                    $("#" + e).find(".markdown-editor").show(),
                    $("#" + e).find("#markdown-view").addClass("active"),
                    $("#" + e).find("#compiled-view").removeClass("active"),
                    $("#" + e).find(".initial-content").val(c),
                    b.removeAttr("disabled"),
                    b.closest(".editCommentOptions").find(".saveCommentTextArea").removeAttr("disabled")
                }),
                $(this).parents(".single-thread").toggleClass("edit-mode")
            }
        }),
        $(document).on("click", ".deleteCommentBtn",
        function(a) {
            a.preventDefault();
            var b = $(this).data("comment-id"),
            c = $(this).data("topic-id");
            swal({
                title: "Are you sure?",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes!",
                closeOnConfirm: !0
            },
            function() {
                $.post("/ajax/topic/comments/delete", {
                    topicId: c,
                    commentId: b
                },
                function() {
                    $(".row.single-container#" + b).detach(),
                    $("#total-comments-count").html(parseInt($("#total-comments-count").html()) - 1)
                })
            })
        }),
        $(".deleteTopicBtn").on("click",
        function(a) {
            a.preventDefault(),
            swal({
                title: "Are you sure?",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes!",
                closeOnConfirm: !0
            },
            function() {
                $.post("/ajax/topics/delete", {
                    topicId: j
                },
                function() {
                    window.location.href = "/"
                })
            })
        }),
        $(document).on("click", ".editReplyBtn",
        function(a) {
            a.preventDefault(),
            $(this).closest("div").find(".replyContent").toggleClass("show hide"),
            $(this).closest("div").find(".editReplyField").toggleClass("hide show"),
            $(this).closest("div").find(".editReplyField").focus();
            var b = '<i class="fa fa-pencil"></i> edit' === $(this).html() ? '<i class="fa fa-pencil"></i> cancel': '<i class="fa fa-pencil"></i> edit';
            $(this).html(b),
            $(this).closest(".reply-content-container").find(".editReplyField").length > 0 ? $(this).closest(".reply-content-container").find(".editReplyField").trigger("autosize.resize") : $(this).closest(".reply-photo-container").find(".editReplyField").length > 0 && $(this).closest(".reply-photo-container").find(".editReplyField").trigger("autosize.resize"),
            $(this).parents(".single-reply").toggleClass("edit-mode"),
            $(this).closest("div").find(".editReplyField").hasClass("hide") && $(this).closest("div").find(".editReplyField").val($(this).closest("div").find(".initial-content").val())
        }),
        $(document).on("keydown", ".editReplyField",
        function(a) {
            if (13 === a.keyCode) {
                if (13 === a.keyCode && a.shiftKey) return void a.stopPropagation();
                var b = $(this).data("reply-id"),
                c = $(this).data("comment-id"),
                d = $(this).val();
                if ("" !== d.trim()) {
                    var e = $(this);
                    e.attr("disabled", "disabled"),
                    $.post("/ajax/topic/replies/edit", {
                        topicId: j,
                        commentId: c || "",
                        replyId: b,
                        content: d
                    },
                    function() {
                        e.closest("div.reply-text").find(".replyContent").html(Autolinker.link(markdown.toHTML(d), {
                            twitter: !1,
                            truncate: 45,
                            className: "autolinkedURL",
                            replaceFn: function(a, b) {
                                switch (b.getType()) {
                                case "url":
                                    var c = a.getTagBuilder().build(b);
                                    return c.setAttr("rel", "nofollow"),
                                    c.addClass("external-link"),
                                    c.setAttr("href", "/utils/redirect?url=" + b.getUrl()),
                                    c;
                                case "email":
                                    return;
                                case "twitter":
                                    return
                                }
                            }
                        })),
                        e.closest("div.reply-text").find(".replyContent").toggleClass("hide show"),
                        e.closest("div.reply-text").find(".editReplyField").toggleClass("show hide"),
                        e.closest("div.reply-text").find(".editReplyBtn").html('<i class="fa fa-pencil"></i> edit'),
                        e.closest("div.reply-text").find(".initial-content").val(d),
                        e.removeAttr("disabled")
                    }),
                    $(this).parents(".single-reply").toggleClass("edit-mode")
                }
            }
        }),
        $(document).on("click", ".deleteReplyBtn",
        function(a) {
            a.preventDefault();
            var b = $(this).data("reply-id"),
            c = $(this).data("comment-id"),
            d = $(this);
            swal({
                title: "Are you sure?",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes!",
                closeOnConfirm: !0
            },
            function() {
                $.post("/ajax/topic/replies/delete", {
                    topicId: j,
                    commentId: c || "",
                    replyId: b
                },
                function() {
                    d.closest(".single-reply").detach()
                })
            })
        }),
        $(document).on("click", ".votingBtn",
        function(a) {
            a.preventDefault();
            var c = $(this).find("span").text();
            if (o) {
                if (!$(this).data("allowed")) return void swal({
                    title: "Sorry!",
                    text: "You can't vote for your own comment!",
                    timer: 2e3
                });
                var d = $(this).data("type"),
                e = $(this).data("comment-id"),
                g = $.post("/ajax/comment/vote", {
                    topicId: j,
                    commentId: e,
                    type: d
                },
                function() {
                    f(j)
                });
                g.fail(function(a) {
                    403 == a.status && swal({
                        title: "Sorry!",
                        text: "You can't vote for your own comment!",
                        timer: 2e3
                    })
                }),
                "down" === d ? $(this).closest("li").siblings("li").find(".thumbs-up").find("span").text("Upvote") : $(this).find("span").text("Upvoted" === c ? "Upvote": "Upvoted"),
                b($(this), d)
            }
        }),
        $(".topicVoteBtn").on("click",
        function(a) {
            a.preventDefault();
            var c = $(this).find("span").text();
            if (o) {
                if (!$(this).data("allowed")) return void swal({
                    title: "Sorry!",
                    text: "You can't vote for your own post!",
                    timer: 2e3
                });
                var d = $(this).data("type"),
                f = $.post("/ajax/topic/vote", {
                    topicId: j,
                    type: d
                },
                function() {
                    e([j])
                });
                f.fail(function(a) {
                    403 == a.status && swal({
                        title: "Sorry!",
                        text: "You can't vote for your own post!",
                        timer: 2e3
                    })
                }),
                "down" === d ? $(this).closest("li").siblings("li").find(".thumbs-up").find("span").text("Upvote") : $(this).find("span").text("Upvoted" === c ? "Upvote": "Upvoted"),
                b($(this), d)
            }
        }),
        $(".editTopicBtn").on("click",
        function(a) {
            a.preventDefault(),
            $(".thread-edit-content").toggleClass("hide show"),
            $(".thread-final-content").toggleClass("show hide"),
            $(this).parents(".single-thread").toggleClass("edit-mode"),
            $(".thread-edit-content").find("#topicTitle").focus(),
            $("#topicContent").trigger("autosize.resize"),
            $(this).hide()
        }),
        $(document).on("click", ".cancelSaveBtn",
        function() {
            $(".editTopicBtn").show(),
            $(this).parents(".single-thread").toggleClass("edit-mode"),
            $(".thread-edit-content").toggleClass("hide show"),
            $(".thread-final-content").toggleClass("show hide"),
            $("#topicedit-textarea-tabs").find(".markdown-view").addClass("active"),
            $("#topicedit-textarea-tabs").find(".compiled-view").removeClass("active"),
            $(".thread-edit-content").find("#compiled-view-area").hide(),
            $(".thread-edit-content").find("#topicContent").show(),
            $(".thread-edit-content").find("#topicContent").val($(".thread-edit-content").find(".initial-content").val())
        }),
        $(".saveTopicBtn").on("click",
        function(a) {
            a.preventDefault(),
            $(".editTopicBtn").show(),
            $(this).parents(".single-thread").toggleClass("edit-mode");
            var b = ($(this), $("#topicContent").val()),
            c = $("#topicTitle").val(),
            d = $("#selectedTagsInput").val().trim();
            d = d ? d.split(",") : [],
            $.ajax({
                url: "/ajax/topics/update",
                type: "post",
                data: JSON.stringify({
                    topicId: j,
                    topicUpdate: {
                        title: c,
                        contentMarkdown: b,
                        tags: d
                    }
                }),
                dataType: "json",
                contentType: "application/json; charset=utf-8"
            }),
            $(".thread-edit-content").toggleClass("hide show"),
            $(".thread-final-content").toggleClass("show hide"),
            0 !== $(".thread-final-content").find(".item-desc").length ? $(".thread-final-content").find(".item-desc").html(Autolinker.link(markdown.toHTML(b), {
                twitter: !1,
                truncate: 45,
                className: "autolinkedURL",
                replaceFn: function(a, b) {
                    switch (b.getType()) {
                    case "url":
                        var c = a.getTagBuilder().build(b);
                        return c.setAttr("rel", "nofollow"),
                        c.addClass("external-link"),
                        c.setAttr("href", "/utils/redirect?url=" + b.getUrl()),
                        c;
                    case "email":
                        return;
                    case "twitter":
                        return
                    }
                }
            })):
            $(".thread-final-content").find(".topic-title").after('<div class="item-desc">' + Autolinker.link(markdown.toHTML(b), {
                twitter: !1,
                truncate: 45,
                className: "autolinkedURL",
                replaceFn: function(a, b) {
                    switch (b.getType()) {
                    case "url":
                        var c = a.getTagBuilder().build(b);
                        return c.setAttr("rel", "nofollow"),
                        c.addClass("external-link"),
                        c.setAttr("href", "/utils/redirect?url=" + b.getUrl()),
                        c;
                    case "email":
                        return;
                    case "twitter":
                        return
                    }
                }
            }) + "</div>");
            var e = $("#selectedTagsInput").val() ? $("#selectedTagsInput").val().split(",") : [],
            f = "";
            _.forEach(e,
            function(a) {
                f += '<li><a href="/tags/' + a.replace(" ", "-") + '">' + a + "</a></li>"
            }),
            $(".thread-final-content").find(".tagsList").html(f),
            $("#topic-title-final").html(c),
            $(".thread-edit-content").find("#compiled-view-area").hide(),
            $(".thread-edit-content").find("#topicContent").show(),
            $("#topicedit-textarea-tabs").find(".markdown-view").addClass("active"),
            $("#topicedit-textarea-tabs").find(".compiled-view").removeClass("active"),
            $(".thread-edit-content").find(".initial-content").val(b)
        }),
        $(document).on("click", ".switch-preview",
        function(a) {
            if (a.preventDefault(), $(this).removeClass("active").addClass("active"), $(this).closest("li").siblings("li").find(".switch-preview").removeClass("active"), $(this).hasClass("compiled-view")) {
                var b = $("#topicContent").val();
                $("#markdown-preview").html(b ? markdown.toHTML(b) : ""),
                $("#topicContent").hide(),
                $("#compiled-view-area").show(),
                b ? ($("#no-text-preview").hide(), $("#markdown-preview").show()) : ($("#no-text-preview").show(), $("#markdown-preview").hide())
            } else $("#compiled-view-area").hide(),
            $("#topicContent").show()
        }),
        $(document).on("click", ".comment-tab",
        function(a) {
            a.preventDefault(),
            $(this).removeClass("active").addClass("active"),
            $(this).closest("li").siblings("li").find(".comment-tab").removeClass("active");
            var b = $(this).closest(".form-group");
            if ("compiled-view" === $(this).attr("id")) {
                var c = b.find(".commentArea").val();
                b.find(".comment-preview").html(c ? markdown.toHTML(c) : ""),
                b.find(".commentArea").hide(),
                b.find(".comment-compiled-view-area").show(),
                c ? (b.find(".no-comment-preview").hide(), b.find(".comment-preview").show()) : (b.find(".no-comment-preview").show(), b.find(".comment-preview").hide())
            } else b.find(".comment-compiled-view-area").hide(),
            b.find(".commentArea").show()
        }),
        $("#make-featured").on("click",
        function(a) {
            a.preventDefault();
            var b = $(this).data("topic-id");
            $.post("/ajax/topic/make-featured", {
                topicId: b
            })
        }),
        $("#mark-spam").on("click",
        function(a) {
            a.preventDefault();
            var b = $(this).data("topic-id");
            $.post("/ajax/topic/mark-spam", {
                topicId: b
            })
        }),
        $(".subscribe-topic").click(function(a) {
            a.preventDefault();
            var b = $(this).data("topic-id");
            $.post("/user/subscribe-topic", {
                topicId: b
            });
            var c = $(this).find(".subscribeIcon");
            $(this).html(c.hasClass("mdi-check") ? '<i class="subscribeIcon"></i>Subscribe': '<i class="subscribeIcon mdi mdi-check"></i>Subscribed')
        }),
        // $.get("/utils/top-developers",
        // function(a) {
        //     if (! (a && a.length < 5)) {
        //         var b = new EJS({
        //             url: "/templates/utils/top-developers.ejs"
        //         }).render({
        //             users: a
        //         });
        //         $(".top-devs").html(b)
        //     }
        // }),
        a(),
        $(document).on("focus", ".new-comment-wrapper #commentArea",
        function() {
            $(".comment-form-buttons").addClass("show"),
            $(this).addClass("highlight"),
            $(this).trigger("autosize.resize")
        }),
        c();
        var q;
        o && d(j,
        function(a) {
            a ? ($("#list-box-" + j).removeClass("saved").addClass("saved"), $("#list-box-" + j).find("i").removeClass("mdi-bookmark-outline").addClass("mdi-bookmark")) : ($("#list-box-" + j).removeClass("saved"), $("#list-box-" + j).find("i").removeClass("mdi-bookmark").addClass("mdi-bookmark-outline"))
        }),
        e([j]),
        f(j),
        $(document).on("click", ".more-voters-link",
        function() {
            $(".upvoted-people-modal").find(".upm-content").html("");
            var a = JSON.parse($(this).data("contributors")),
            b = new EJS({
                url: "/templates/topic/topic-activity.ejs"
            }).render({
                users: a
            });
            $(".upvoted-people-modal").find(".upm-content").html(b)
        }),
        $(document).on("click", ".ask-button-1",
        function(a) {
            a.preventDefault();
            var b = $("#user-handle").val();
            b && "" !== b.trim() && ($("#invite-btn-1").addClass("disabled"), $.ajax({
                type: "POST",
                contentType: "application/json",
                url: "/utils/twitter/lookup-user",
                data: JSON.stringify({
                    username: b
                }),
                complete: function(a) {
                    $("#invite-btn-1").removeClass("disabled");
                    var c = a.responseJSON.data;
                    return c ? void $(".ask-body-content .step-1").addClass("slide").delay(200).queue(function(a) {
                        $("#lookup-preview-name").html(c.name),
                        $("#lookup-preview-username").html(b),
                        $("#lookup-preview-image").attr("src", c.photo);
                        var d = "Hey @" + b + ", I would like to invite you to participate in an interesting discussion on devmag.io.";
                        $("#tweet-text").val(d),
                        $("#character-count").html(d.length + "/117"),
                        $(this).hide(),
                        h(2),
                        a()
                    }) : $("#user-handle").tooltip("show")
                }
            }))
        }),
        $("#user-handle").on("focus",
        function() {
            $(this).tooltip("hide")
        }),
        $(document).on("keyup", "#tweet-text",
        function() {
            var a = $(this).val().length;
            a >= 117 && $(this).val($(this).val().substring(0, a - 1)),
            $("#character-count").html(a + "/117")
        }),
        $(document).on("click", ".edit-twitter-handle",
        function(a) {
            a.preventDefault(),
            $(".ask-body-content .step-2").removeClass("slide").delay(300).queue(function(a) {
                $(this).hide(),
                $(".ask-body-content .step-1").show().delay(50).queue(function(a) {
                    $(this).removeClass("slide"),
                    a()
                }),
                a()
            })
        }),
        $(document).on("click", ".tweet-button",
        function(a) {
            a.preventDefault(),
            o.otherAccounts && o.otherAccounts.twitter ? ($("#invite-btn-2").addClass("disabled"), $.ajax({
                type: "POST",
                contentType: "application/json",
                url: "/utils/twitter/send-tweet",
                data: JSON.stringify({
                    tweet: $("#tweet-text").val(),
                    postId: j
                }),
                complete: function(a) {
                    $("#invite-btn-2").removeClass("disabled"),
                    $(".ask-body-content .step-2").addClass("slide-more").delay(200).queue(89 === a.responseJSON.errorCode ?
                    function(a) {
                        $(this).hide(),
                        h(3),
                        a()
                    }: function(a) {
                        $(this).hide(),
                        h(4),
                        a()
                    })
                }
            })) : $(".ask-body-content .step-2").addClass("slide-more").delay(200).queue(function(a) {
                $(this).hide(),
                h(3),
                a()
            })
        }),
        $(document).on("click", ".connect-button",
        function(a) {
            a.preventDefault(),
            $("#invite-btn-3").addClass("disabled"),
            g(function(a) {
                a && $.ajax({
                    type: "POST",
                    contentType: "application/json",
                    url: "/utils/twitter/send-tweet",
                    data: JSON.stringify({
                        tweet: $("#tweet-text").val(),
                        postId: j
                    }),
                    complete: function() {
                        $("#invite-btn-3").removeClass("disabled"),
                        $(".ask-body-content .step-3").addClass("slide-more").delay(200).queue(function(a) {
                            $(this).hide(),
                            h(4),
                            a()
                        })
                    }
                })
            })
        }),
        $(document).on("click", ".invite-another",
        function(a) {
            a.preventDefault(),
            $(".ask-body-content .step-4").addClass("slide-more").delay(200).queue(function(a) {
                $(this).hide(),
                $(".ask-body-content .step-1").show().delay(100).queue(function(a) {
                    $(".ask-body-content .step-1, .ask-body-content .step-2, .ask-body-content .step-3, .ask-body-content .step-4").removeClass("slide slide-more"),
                    a()
                }),
                a()
            })
        }),
        $(document).on("click", ".twitter-tab",
        function(a) {
            a.preventDefault(),
            $(".content-for-devmagio").hide(),
            $(".content-for-twitter").find(".step-2,.step-3,.step-4").removeClass("slide slide-more").hide(),
            $(".content-for-twitter").find(".step-1").removeClass("slide slide-more").show(),
            $(".content-for-twitter").show(),
            $(this).addClass("active"),
            $(".devmagio-tab").removeClass("active")
        }),
        $(document).on("click", ".devmagio-tab",
        function(a) {
            a.preventDefault(),
            $(".content-for-twitter").hide(),
            $(".content-for-twitter").find(".step-2,.step-3,.step-4").removeClass("slide slide-more").hide(),
            $(".content-for-twitter").find(".step-1").removeClass("slide slide-more").show(),
            $(".content-for-devmagio").show(),
            $(this).addClass("active"),
            $(".twitter-tab").removeClass("active")
        }),
        $(document).on("click", ".ask-to-answer-button a",
        function(a) {
            a.preventDefault(),
            $(".ask-to-answer-modal").show().delay(50).queue(function(a) {
                $(this).addClass("show").delay(50).queue(function(a) {
                    $(".ask-modal").addClass("show"),
                    a()
                }),
                a()
            }),
            i()
        }),
        $(document).on("click", ".ask-to-answer-modal, .close-ask-modal",
        function(a) {
            a.preventDefault(),
            $(".content-for-twitter").find(".step-2,.step-3,.step-4").removeClass("slide slide-more").hide(),
            $(".content-for-twitter").find(".step-1").removeClass("slide slide-more").show(),
            $(".ask-modal").removeClass("show").delay(300).queue(function(a) {
                $(".ask-to-answer-modal").removeClass("show").delay(50).queue(function(a) {
                    $(this).hide(),
                    a()
                }),
                a()
            })
        }),
        $(document).on("click", ".ask-modal",
        function(a) {
            a.stopPropagation()
        });
        var r, s = [];
        $("#inviteSuggestionsInput").on("keyup",
        function() {
            var a = $(this);
            if (!a.val()) {
                if ($("#invite-search-results").html(""), s.length > 0) {
                    var b = new EJS({
                        url: "/templates/search/invite-suggestions.ejs?v=1.52"
                    }).render({
                        users: s
                    });
                    $("#invite-search-results").html('<div class="suggested-people-header" id="suggested-people-header">Suggested People</div>' + b)
                }
                return clearTimeout(r)
            }
            r && clearTimeout(r),
            r = setTimeout(function() {
                $.ajax({
                    type: "POST",
                    contentType: "application/json",
                    url: "/utils/showInviteSuggestions",
                    data: JSON.stringify({
                        term: a.val(),
                        postId: j
                    }),
                    complete: function(a) {
                        var b = a.responseJSON.users,
                        c = new EJS({
                            url: "/templates/search/invite-suggestions.ejs?v=1.52"
                        }).render({
                            users: b
                        });
                        $("#invite-search-results").html(c)
                    }
                })
            },
            500)
        }),
        $(document).on("click", ".invite-button",
        function(a) {
            if (a.preventDefault(), !$(a.currentTarget).data("invited")) {
                var b = $(a.currentTarget).data("username"),
                c = $(a.currentTarget);
                $.ajax({
                    type: "POST",
                    contentType: "application/json",
                    url: "/utils/invite-user",
                    data: JSON.stringify({
                        username: b,
                        postId: j
                    }),
                    complete: function(a) {
                        a.responseJSON && "CREDITS_EXHAUSTED" === a.responseJSON.error ? ($(".global-error-notification").addClass("show"), setTimeout(function() {
                            $(".global-error-notification").removeClass("show")
                        },
                        8e3)) : (c.addClass("invited"), c.text("Invited"), c.data("invited", !0))
                    }
                })
            }
        })
    }
}),
$(document).ready(function() {
    function a(a, b, c) {
        $.ajax({
            url: "/utils/delete-collection-posts",
            type: "POST",
            data: JSON.stringify({
                collectionId: b,
                postIds: a
            }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            complete: function() {
                c()
            }
        })
    }
    var b = 50,
    c = 50,
    d = $("#current-user").val(),
    e = $(".inv-hostname").attr("href");
    "undefined" != typeof e && 0 !== e.indexOf("http://") && 0 !== e.indexOf("https://") && (e = "http://" + e);
    var f = document.createElement("a");
    f.href = e,
    $(".inv-hostname").attr("href", f.href),
    $(".inv-hostname").html(f.hostname),
    $(".inv-hostname").show(),
    $(".btn-follow").click(function(a) {
        a.preventDefault(),
        $.post("/utils/follow-user", {
            followee: $(this).data("followee"),
            follower: $(this).data("follower")
        });
        var b = $(this).html(),
        c = '<i class="fa fa-plus-circle"></i>Follow' === b ? '<i class="fa fa-check"></i>Following': '<i class="fa fa-plus-circle"></i>Follow';
        $(this).toggleClass("active"),
        $(this).html(c)
    }),
    $("#profile-load-topics").click(function(a) {
        a.preventDefault();
        var e = "/user/" + d + "/posts?skip=" + b + "&limit=" + c;
        $.get(e,
        function(a) {
            var d = new EJS({
                url: "/templates/user/user-topics.ejs"
            }).render(a);
            $(".created-threads-list").append(d),
            b += c
        })
    }),
    $("#profile-load-upvoted").click(function(a) {
        a.preventDefault();
        var d = $("#current-user").val(),
        e = "/user/" + d + "/upvoted?skip=" + b + "&limit=" + c;
        $.get(e,
        function(a) {
            var d = new EJS({
                url: "/templates/user/user-upvoted.ejs"
            }).render(a);
            $(".upvoted-threads-list").append(d),
            b += c
        })
    }),
    $("#profile-load-following").click(function(a) {
        a.preventDefault();
        var d = $("#current-user").val(),
        e = "/user/" + d + "/following?skip=" + b + "&limit=" + c;
        $.get(e,
        function(a) {
            var d = new EJS({
                url: "/templates/user/user-following.ejs"
            }).render(a);
            $(".following-list").append(d),
            b += c
        })
    }),
    $("#profile-load-followers").click(function(a) {
        a.preventDefault();
        var d = $("#current-user").val(),
        e = "/user/" + d + "/followers?skip=" + b + "&limit=" + c;
        $.get(e,
        function(a) {
            var d = new EJS({
                url: "/templates/user/user-followers.ejs"
            }).render(a);
            $(".followers-list").append(d),
            b += c
        })
    }),
    $(".dismiss-topic").on("click",
    function(a) {
        a.preventDefault();
        var b = $(this).data("topic-id");
        $.post("/ajax/topic/dismiss-spam", {
            topicId: b
        }),
        window.location.reload()
    }),
    $(".prof-name small").click(function() {
        $(".prof-name").hide(),
        $(".name-edit").toggle(),
        $(".name-edit").focus().val(),
        $(".name-edit").val($(this).parent("h1").find("#updated-name").html().trim())
    }),
    $(".name-edit").on("keyup",
    function(a) {
        if (a.preventDefault(), 13 === a.keyCode) {
            var b = $(this).val();
            if (!b) return;
            $.post("/user/update-profile", {
                name: b
            }),
            $(".prof-name").find("#updated-name").text(b),
            $(this).hide(),
            $(".prof-name").show(),
            $(this).blur()
        }
    }),
    $(".tagline-field small").click(function() {
        $(".tagline-field").hide(),
        $(".tagline-edit-field").toggle(),
        $(".tagline-edit-field").focus().val(),
        $(".tagline-edit-field").val($(this).parent("p").find("#updated-tagline").html().trim())
    }),
    $("#location-edit").on("keyup",
    function(a) {
        return a.preventDefault(),
        $(this).val().length > 70 ? void $(this).val($(this).val().substring(0, 70)) : void 0
    }),
    $(".tagline-edit-field").on("keyup",
    function(a) {
        if (a.preventDefault(), $(this).val().length > 160) return void $(this).val($(this).val().substring(0, 160));
        if (13 === a.keyCode) {
            var b = $(this).val();
            $.post("/user/update-profile", {
                tagline: b
            }),
            $(".tagline-field").find("#updated-tagline").text(b),
            $(this).hide(),
            $(".tagline-field").show(),
            $(this).blur()
        }
    }),
    $(".addBtn").click(function(a) {
        a.preventDefault(),
        $(this).parent(".no-text").toggle(),
        $(this).parent(".no-text").siblings(".add-edit-form").toggle()
    }),
    $(".editBtn").on("click",
    function(a) {
        a.preventDefault(),
        $(this).parent(".text").hide(),
        $(this).parent(".text").siblings(".add-edit-form").show()
    }),
    $(".saveFieldsBtn").on("click",
    function(a) {
        a.preventDefault();
        var b = !1,
        c = {},
        d = $(this).closest(".add-edit-form"),
        e = d.data("field-group");
        if (e) {
            var f = {};
            d.find(".form-group").each(function(a, b) {
                var c = $(b).data("key"),
                d = $(b).find(".add-data").val();
                f[c] = d
            });
            var g = !0;
            for (var h in f) if ("" !== f[h]) {
                g = !1;
                break
            }
            g && (b = !0),
            c[e] = f,
            c._group = !0;
            var i = new EJS({
                url: "/templates/user/user-social-accounts.ejs"
            }).render(c);
            $(this).parent(".add-edit-form").siblings(".text").find(".updated-value").html(i)
        } else {
            var j = d.data("key");
            c[j] = d.find(".add-data").val(),
            c[j] || (b = !0),
            "bioMarkdown" === j ? $(this).parent(".add-edit-form").siblings(".text").find(".updated-value").html(markdown.toHTML(c[j])) : "location" === j && c[j] ? ($("#locationIframe").attr("src", "https://www.google.com/maps/embed/v1/place?q=" + c[j] + "&key=AIzaSyAbBNA__x0T9-hLKHXtQ_5mIkQGSvUgzSc"), $(this).parent(".add-edit-form").siblings(".text").show()) : $(this).parent(".add-edit-form").siblings(".text").find(".updated-value").text(c[j])
        }
        $.ajax({
            url: "/user/update-profile",
            type: "post",
            data: JSON.stringify(c),
            dataType: "json",
            contentType: "application/json; charset=utf-8"
        }),
        $(this).parent(".add-edit-form").hide();
        var k = b ? ".no-text": ".text";
        $(this).parent(".add-edit-form").siblings(k).show()
    }),
    $(".cancelFieldsBtn").on("click",
    function(a) {
        a.preventDefault();
        var b;
        if ("socialMedia" === $(this).parent(".add-edit-form").data("field-group")) {
            var c = $(this).parent(".add-edit-form").siblings(".text").find("li"),
            d = 0;
            $.each(c,
            function(a, b) {
                "none" === b.style.display && d++
            }),
            b = d === c.length ? !1 : !0
        } else {
            var e = $(this).parent(".add-edit-form").siblings(".text").find(".updated-value");
            if (e.find("iframe").length > 0) {
                var f = e.find("iframe").attr("src"),
                g = f.indexOf("?q=");
                b = f.substring(g + 3, f.indexOf("&"), g)
            } else b = e.html()
        }
        var h = b ? ".text": ".no-text";
        $(this).parent(".add-edit-form").siblings(h).show(),
        $(this).parent(".add-edit-form").hide()
    }),
    $(".ban-user").on("click",
    function(a) {
        a.preventDefault(),
        $.post("/user/ban-user", {
            username: d
        }),
        $(this).toggleClass("banned")
    }),
    $(".edit-image").click(function(a) {
        a.preventDefault(),
        $(".no-image-uploaded").show(),
        $(".image-uploaded, .crop-save-btn").hide(),
        $(".crop-save-btn").html("Crop &amp; Save").attr("disabled", !1),
        $(".upload-btn").html('<i class="fa fa-upload"></i> Select File'),
        $(".file-upload-modal").addClass("show animated fadeInDown")
    }),
    $(".cancel-btn").click(function(a) {
        a.preventDefault(),
        $(".file-upload-modal").removeClass("show animated fadeInDown"),
        h && ($.post("/user/delete-pending-image"), h = !1),
        $(".crop-save-btn, .no-image-uploaded").show(),
        $(".image-uploaded").hide()
    }),
    window.onbeforeunload = function() {
        h && ($.post("/user/delete-pending-image"), h = !1)
    };
    var g = {},
    h = !1;
    $("#hiddenUploadInput").change(function(a) {
        var b = a.currentTarget.files[0];
        b && $(".upload-btn").html("Uploading...");
        var c = new XMLHttpRequest,
        d = new FormData;
        d.append("image", b),
        c.addEventListener("readystatechange",
        function(a) {
            4 == c.readyState && 200 == c.status && ($(".image-uploaded > img").attr("src") && $(".image-uploaded > img").cropper("replace", a.currentTarget.responseText), $(".image-uploaded > img").attr("src", a.currentTarget.responseText + "?timestamp=" + (new Date).getTime()), $(".image-uploaded,.crop-save-btn").show(), $(".no-image-uploaded").hide(), h = !0, $(".image-uploaded > img").cropper({
                data: {
                    width: 200,
                    height: 200
                },
                aspectRatio: 1,
                done: function(a) {
                    g = a
                }
            }))
        },
        !1),
        c.open("POST", "/user/upload-image"),
        c.overrideMimeType("text/plain; charset=x-user-defined-binary"),
        c.send(d)
    }),
    $(".upload-btn").click(function(a) {
        a.preventDefault(),
        $("#hiddenUploadInput").click()
    }),
    $(".crop-save-btn").click(function() {
        $(this).attr("disabled", "true"),
        $(this).html('<i class="fa fa-spinner fa-fw fa-spin"></i> Saving..'),
        $.post("/user/crop-image", g,
        function(a) {
            $("#profile-pic").css("background-image", "url('" + a.photo + "?" + (new Date).getTime() + "')"),
            $(".no-image-uploaded, .image-uploaded, .crop-save-btn").toggle(),
            $(".file-upload-modal").toggleClass("show animated fadeInDown"),
            h = !1,
            $(".image-uploaded,.crop-save-btn, .no-image-uploaded").toggle()
        })
    }),
    $("#submitSubscriptionPreference").on("click",
    function() {
        var a = [];
        $(".subscription-checkbox").each(function(b, c) {
            var d = $(c).is(":checked");
            d && a.push($(c).attr("id"))
        }),
        $.ajax({
            url: "/user/update-subscription",
            type: "post",
            data: JSON.stringify({
                subscriptions: a
            }),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            complete: function() {
                swal({
                    title: "Cool...",
                    text: "Your preferences have been saved.",
                    timer: 2e3
                })
            }
        })
    }),
    $(document).on("click", "#btn-create-collection,#btn-edit-collection",
    function(a) {
        a.preventDefault();
        var b = ["#collection-name", "#collection-desc", "#collection-privacy"],
        c = $("#collection-name").val(),
        e = $("#collection-desc").val(),
        f = i(),
        g = $("#collection-privacy").data("val"),
        h = $("#hidden-collection-id").val();
        c && 0 !== c.trim().length && $.post("/utils/create-edit-collection", {
            collectionId: h,
            name: c,
            type: g,
            description: e,
            color: f
        },
        function(a) {
            if (a.data) {
                if (!h) {
                    var c = new EJS({
                        url: "/templates/user/new-collection.ejs?v=1.37"
                    }).render({
                        username: d,
                        collection: a.data
                    });
                    $(".collection-empty").length > 0 && $(".collection-empty").hide(),
                    $("#collection-list").append(c),
                    $("#collection-creation-status").show()
                }
                j();
                for (var e = 0; e < b.length; e++) $(b[e]).val(""),
                "#collection-privacy" === b[e] && ($(b[e]).removeClass("public private").addClass("private"), $(b[e]).find("option[value=public]").removeAttr("selected"), $(b[e]).find("option[value=private]").attr("selected", "true"));
                h && window.location.reload()
            }
        })
    }),
    $(document).on("click", ".privacy-li",
    function() {
        var a = $(this);
        setTimeout(function() {
            var b = a.closest(".privacy-dropdown").data("collection-id"),
            c = a.closest(".privacy-dropdown").data("val");
            $.ajax({
                url: "/utils/create-edit-collection",
                type: "POST",
                data: JSON.stringify({
                    collectionId: b,
                    type: c
                }),
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            })
        },
        500)
    }),
    $(document).on("click", "#dismiss-creation-status",
    function(a) {
        a.preventDefault(),
        $(this).closest("div").hide()
    });
    var i = function() {
        var a = "";
        return $(".color-circles").find(".color-circle").each(function(b, c) {
            $(c).hasClass("active") && (a = $(c).data("color"))
        }),
        a
    },
    j = function() {
        $(".color-circles").find(".color-circle").each(function(a, b) {
            $(b).removeClass("active inactive")
        })
    };
    $(document).on("change", ".dropdown-privacy",
    function() {
        $(this).removeClass("private public").addClass($(this).val()),
        $(this).siblings("input[type=text]").focus()
    }),
    $(document).on("change", ".collection-privacy-selector",
    function() {
        $(this).toggleClass("public private")
    }),
    $(document).on("click", ".color-circle",
    function() {
        var a = $(this).data("circle"),
        b = $(".collection-form").data("circle");
        $(".collection-form").removeClass(b + "-form").addClass(a + "-form"),
        $(".collection-form").data("circle", a)
    });
    var k = $(".color-circle").width();
    $(".color-circle").height(k).css("border-radius", k / 2 + "px"),
    $(document).on("click", ".collection-edit-btn",
    function(a) {
        a.preventDefault(),
        $(this).hide(),
        $(this).siblings(".collection-item-settings").show(),
        $(".collection-list .select-box").removeClass("collapsed")
    }),
    $(document).on("change", ".select-all-checkbox",
    function() {
        $(this).prop("checked") ? $(".collection-list .select-box .check-box").prop("checked", !0) : $(".collection-list .select-box .check-box").prop("checked", !1)
    }),
    $(document).on("click", ".done-toolbar",
    function(a) {
        a.preventDefault(),
        $(".collection-item-settings").hide(),
        $(".collection-list .select-box").addClass("collapsed"),
        $(".collection-edit-btn").show()
    }),
    $(document).on("click", ".collection-settings",
    function(a) {
        a.preventDefault(),
        $(".collection-options").hide(),
        $(".edit-collection-section").show();
        var b = $(".color-circle").width();
        $(".color-circle").height(b).css("border-radius", b / 2 + "px")
    }),
    $(document).on("click", ".collection-settings-cancel",
    function(a) {
        a.preventDefault(),
        $(".collection-options").show(),
        $(".edit-collection-section").hide()
    }),
    $(document).on("click", "#remove-collection-posts",
    function(b) {
        b.preventDefault();
        var c = [],
        d = $("#hidden-collection-id").val();
        $(".collection-item-checkbox").each(function(a, b) {
            $(b).prop("checked") && c.push($(b).data("post-id"))
        }),
        0 !== c.length && swal({
            title: "Are you sure?",
            type: "warning",
            showCancelButton: !0,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes!",
            closeOnConfirm: !0
        },
        function() {
            a(c, d,
            function() {
                setTimeout(function() {
                    window.location.reload()
                },
                500)
            })
        })
    }),
    $(document).on("click", "#btn-delete-collection",
    function(a) {
        a.preventDefault();
        var b = $("#hidden-collection-id").val();
        swal({
            title: "Are you sure?",
            type: "warning",
            showCancelButton: !0,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes!",
            closeOnConfirm: !0
        },
        function() {
            $.post("/utils/delete-collection", {
                collectionId: b
            },
            function() {
                window.location.href = "/@" + d + "/collections"
            })
        })
    }),
    $(document).on("click", ".privacy-dropdown",
    function(a) {
        a.preventDefault(),
        a.stopPropagation(),
        $(this).find(".dropdown-list").toggle()
    }),
    $(document).on("click", ".dropdown-list li",
    function(a) {
        a.preventDefault(),
        a.stopPropagation();
        var b = $(this).data("privacy");
        $(this).parents(".privacy-dropdown").data("val", b),
        "private" === b ? ($(this).parents(".privacy-dropdown").removeClass("public").addClass("private"), $(this).parent(".dropdown-list").siblings(".dropdown-text").html('Private <i class="mdi mdi-menu-down"></i>')) : "public" === b && ($(this).parents(".privacy-dropdown").removeClass("private").addClass("public"), $(this).parent(".dropdown-list").siblings(".dropdown-text").html('Public <i class="mdi mdi-menu-down"></i>')),
        $(this).parent(".dropdown-list").hide(),
        $(this).closest(".privacy-dropdown").siblings("#new-collection-input").focus()
    }),
    $(document).on("click", ".show-log-handle",
    function(a) {
        a.preventDefault();
        var b = $(".credits-log-table"),
        c = $(".show-log-handle");
        b.hasClass("show") ? (b.removeClass("show").delay(300).queue(function(a) {
            $(this).hide(),
            a()
        }), c.html("Full Credits Log <i class='mdi mdi-unfold-more'></i>")) : (b.show().delay(1).queue(function(a) {
            $(this).addClass("show"),
            a()
        }), c.html("Full Credits Log <i class='mdi mdi-unfold-less'></i>"))
    });
    var l = 10,
    m = l;
    $(document).on("click", ".credit-load-more",
    function(a) {
        a.preventDefault(),
        $.ajax({
            url: "/utils/credits-log",
            type: "POST",
            data: JSON.stringify({
                skip: m
            }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            complete: function(a) {
                m += l;
                var b = a.responseJSON.data;
                if (b.length > 0) {
                    var c = new EJS({
                        url: "/templates/user/user-credits-log.ejs"
                    }).render({
                        creditLogs: b
                    });
                    $(".load-more-row").before(c)
                } else $(".load-more-row").hide()
            }
        })
    })
}),
$(document).ready(function() {
    function a(a) {
        a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var b = new RegExp("[\\?&]" + a + "=([^&#]*)"),
        c = b.exec(location.search);
        return null === c ? "": decodeURIComponent(c[1].replace(/\+/g, " "))
    }
    var b = {
        google: "Google",
        linkedin: "LinkedIn",
        facebook: "Facebook",
        github: "GitHub"
    };
    $(".social-signin-btn").on("click",
    function(c) {
        c.preventDefault();
        var d = $(this).attr("id");
        $("#while-login").show(),
        $("#pre-login").hide(),
        $("#while-login").find(".talking").html("Connecting with " + b[d]);
        var e = "/auth/" + d,
        f = 500,
        g = 500,
        h = screen.width / 2 - f / 2,
        i = screen.height / 2 - g / 2,
        j = window.open(e, "_blank", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + f + ", height=" + g + ", top=" + i + ", left=" + h),
        k = setInterval(function() {
            j.closed && (clearInterval(k), $.get("/auth/user",
            function(b) {
                if (b && "presuccess" === b.stage) window.location.href = "/welcome?next=" + window.location.href;
                else if (b && b._id) {
                    window.wizrocket && wizrocket.event.push("userlogin", {
                        Username: b.username,
                        Name: b.name,
                        Date: new Date
                    });
                    var c = a("next") || window.location.href;
                    window.location.href = c
                } else window.location.reload()
            }))
        },
        1500)
    }),
    $("#finishSignupBtn").on("click",
    function(b) {
        b.preventDefault();
        var c = $("#username").val(),
        d = $("#fullname").val(); ! /^[A-Za-z_0-9]+$/.test(c) || $(".fullname-getter").is(":visible") && !d || $.post("/auth/finish", {
            username: c,
            name: d
        },
        function(b) {
            if (b && b.failed) $("#signup-failed").show(),
            setTimeout(function() {
                $("#signup-failed").hide()
            },
            1e3);
            else if (b) {
                var c = a("redirect") || window.location.href;
                window.location.href = c
            }
        })
    });
    var c;
    $("#username-picker").on("keyup",
    function() {
        $(this).siblings(".mdi-check").hide(),
        $(this).siblings(".mdi-close").hide();
        var a = $(this);
        return a.val() && !/^[A-Za-z_0-9]+$/.test(a.val()) ? a.siblings(".mdi-close").show() : (c && clearTimeout(c), void(c = setTimeout(function() {
            return a.val() ? (a.siblings(".mdi-refresh").show(), void $.post("/utils/check-username", {
                username: a.val()
            },
            function(b) {
                a.siblings(".mdi-refresh").hide(),
                1 === b.status ? a.siblings(".mdi-check").show() : a.siblings(".mdi-close").show()
            })) : a.siblings(".mdi-refresh").hide()
        },
        500)))
    }),
    $(document).on("click", ".onboarding-next.next-1",
    function(a) {
        if (a.preventDefault(), !$(this).hasClass("disabled")) {
            var b = $("#name-picker").val(),
            c = $("#tagline-picker").val(),
            d = $("#username-picker").val();
            if ($("#email-picker").is(":visible") && !validator.isEmail($("#email-picker").val())) return $("#email-picker").siblings(".error-message").show();
            if (!$("#name-picker").val() || "" === $("#name-picker").val().trim()) return $("#name-picker").siblings(".error-message").show();
            if (!/^[A-Za-z_0-9]+$/.test(d)) return $("#username-picker").siblings(".error-message").show();
            $(this).attr("disabled", "disabled").addClass("disabled");
            var e = $(this);
            $.post("/auth/finish", {
                username: d,
                name: b,
                tagline: c
            },
            function(a) {
                a && !a.failed ? ($(".step-1").addClass("slide").delay(300).queue(function(a) {
                    $(this).hide(),
                    $(".step-2").show().delay(10).queue(function(a) {
                        $(this).addClass("slide"),
                        a()
                    }),
                    a()
                }), window.wizrocket && wizrocket.event.push("usersignup", {
                    Name: b,
                    Username: d,
                    Date: new Date
                })) : a.failed && a.err && a.err.field && $("#" + a.err.field).siblings(".error-message").html(a.err.message).show(),
                e.removeAttr("disabled").removeClass("disabled")
            })
        }
    }),
    $(document).on("click", "#send-verification-email",
    function(a) {
        a.preventDefault();
        var b = $("#email-picker").val();
        return validator.isEmail(b) ? void $.post("/utils/send-verification-email", {
            email: b
        },
        function(a) {
            return a.success === !1 ? $("#email-picker").siblings(".error-message").html(a.message).show() : ($("#email-picker").attr("disabled", "disabled"), $("#email-picker").siblings(".edit-email").show(), $("#code-container").addClass("make-visible"), void $("#send-verification-email").hide())
        }) : $(this).siblings(".error-message").html("Invalid Email").show()
    }),
    $(document).on("click", ".profile-edits",
    function() {
        $(this).siblings(".error-message").hide()
    }),
    $(document).on("click", ".edit-email",
    function(a) {
        a.preventDefault(),
        $("#email-picker").removeAttr("disabled").val(""),
        $("#email-picker").siblings(".edit-email").hide(),
        $("#code-container").removeClass("make-visible"),
        $("#send-verification-email").show(),
        $.post("/utils/reset-verification-email", {})
    }),
    $(document).on("click", "#verify-email-btn",
    function(a) {
        a.preventDefault(),
        $.post("/utils/verify-email", {
            code: $("#email-code-box").val()
        },
        function(a) {
            return a.success ? ($("#email-picker").closest("div").before('<div class="single-form-container"> <label>Email</label> <p>' + $("#email-picker").val() + '<i class="mdi mdi-lock"></i></p></div>'), $("#code-container").removeClass("make-visible"), void $("#email-picker").closest("div").hide()) : $("#code-container").find(".error-message").show()
        })
    }),
    $(document).on("click", ".tags-cloud a",
    function(a) {
        a.preventDefault(),
        $(this).toggleClass("active"),
        $(this).data("added", !$(this).data("added"));
        var b = $(this).data("tag");
        $(this).data("added") ? $.post("/utils/savedTags/add", {
            tag: b
        }) : $.post("/utils/savedTags/remove", {
            tag: b
        })
    }),
    $(document).on("click", "#onboard-finish",
    function(b) {
        b.preventDefault();
        var c = a("next") || window.location.href;
        window.location.href = c
    })
}),
$(document).ready(function() {
    "" !== $("#first-time-login").val() && $(window).width() >= 992,
    $("#aboutField").autosize(),
    $("#step-count").html("1"),
    $(".btn-pcm-default, .btn-pcw-default").click(function(a) {
        a.preventDefault()
    }),
    $("#next-1, #back-3").click(function() {
        $(".pcm-form-1").css("left", "-200%"),
        $(".pcm-form-2").css("left", "0"),
        $(".pcm-form-3").css("left", "200%"),
        $("#step-count").html("2"),
        $("#aboutField").val($("#aboutField").val()),
        $("#aboutField").trigger("autosize.resize")
    }),
    $("#next-2").click(function() {
        $(".pcm-form-1").css("left", "-400%"),
        $(".pcm-form-2").css("left", "-200%"),
        $(".pcm-form-3").css("left", "0"),
        $("#step-count").html("3")
    }),
    $("#back-2").click(function() {
        $(".pcm-form-1").css("left", "0"),
        $(".pcm-form-2").css("left", "200%"),
        $(".pcm-form-3").css("left", "400%"),
        $("#step-count").html("1")
    }),
    $(".pcm-skip-link").click(function(a) {
        a.preventDefault(),
        $(".profile-completion-modal").hide(),
        $(".profile-completion-modal").removeClass("fadeInUp"),
        $(".profile-completion-widget").hide()
    }),
    $("#pcw-continue").click(function() {
        $(".profile-completion-modal").show().addClass("fadeInUp")
    }),
    $(document).on("click", ".submitTagline",
    function(a) {
        a.preventDefault();
        var b = $("#taglineField").val();
        $.post("/user/update-profile", {
            tagline: b
        })
    }),
    $(document).on("click", ".submitBio",
    function(a) {
        a.preventDefault();
        var b = $("#aboutField").val();
        $.ajax({
            url: "/user/update-profile",
            type: "post",
            data: JSON.stringify({
                bioMarkdown: b
            }),
            dataType: "json",
            contentType: "application/json; charset=utf-8"
        })
    }),
    $(document).on("click", ".submitWebsite",
    function(a) {
        a.preventDefault();
        var b = $("#websiteField").val();
        $.ajax({
            url: "/user/update-profile-website",
            type: "post",
            data: JSON.stringify({
                website: b
            }),
            dataType: "json",
            contentType: "application/json; charset=utf-8"
        }),
        $(".profile-completion-modal").hide(),
        $(".profile-completion-modal").removeClass("fadeInUp"),
        $(".profile-completion-widget").hide(),
        swal("Great!", "Your Profile Has Been Updated.", "success")
    })
}),
function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
} (function(a) {
    "use strict";
    var b = a(window),
    c = a(document),
    d = window.location,
    e = !0,
    f = !1,
    g = null,
    h = 0 / 0,
    i = 1 / 0,
    j = "undefined",
    k = "directive",
    l = ".cropper",
    m = /^(e|n|w|s|ne|nw|sw|se|all|crop|move|zoom)$/,
    n = /^(x|y|width|height)$/,
    o = /^(naturalWidth|naturalHeight|width|height|aspectRatio|ratio|rotate)$/,
    p = "cropper-modal",
    q = "cropper-hidden",
    r = "cropper-invisible",
    s = "cropper-move",
    t = "cropper-crop",
    u = "cropper-disabled",
    v = "mousedown touchstart",
    w = "mousemove touchmove",
    x = "mouseup mouseleave touchend touchleave touchcancel",
    y = "wheel mousewheel DOMMouseScroll",
    z = "resize" + l,
    A = "dblclick",
    B = "build" + l,
    C = "built" + l,
    D = "dragstart" + l,
    E = "dragmove" + l,
    F = "dragend" + l,
    G = function(a) {
        return "number" == typeof a
    },
    H = function(b, c) {
        this.element = b,
        this.$element = a(b),
        this.defaults = a.extend({},
        H.DEFAULTS, a.isPlainObject(c) ? c: {}),
        this.$original = g,
        this.ready = f,
        this.built = f,
        this.cropped = f,
        this.rotated = f,
        this.disabled = f,
        this.replaced = f,
        this.init()
    },
    I = Math.round,
    J = Math.sqrt,
    K = Math.min,
    L = Math.max,
    M = Math.abs,
    N = Math.sin,
    O = Math.cos,
    P = parseFloat;
    H.prototype = {
        constructor: H,
        support: {
            canvas: a.isFunction(a("<canvas>")[0].getContext)
        },
        init: function() {
            var b = this.defaults;
            a.each(b,
            function(a, c) {
                switch (a) {
                case "aspectRatio":
                    b[a] = M(P(c)) || h;
                    break;
                case "autoCropArea":
                    b[a] = M(P(c)) || .8;
                    break;
                case "minWidth":
                case "minHeight":
                    b[a] = M(P(c)) || 0;
                    break;
                case "maxWidth":
                case "maxHeight":
                    b[a] = M(P(c)) || i
                }
            }),
            this.image = {
                rotate: 0
            },
            this.load()
        },
        load: function() {
            var b, c, d = this,
            g = this.$element,
            h = this.element,
            i = this.image;
            g.is("img") ? c = g.prop("src") : g.is("canvas") && this.support.canvas && (c = h.toDataURL()),
            c && (this.replaced && (this.replaced = f, i.rotate = 0), this.$clone = b = a("<img" + (typeof g.attr("crossOrigin") !== j || this.isCrossOriginURL(c) ? " crossOrigin": "") + ' src="' + c + '">'), b.one("load",
            function() {
                i.naturalWidth = this.naturalWidth || b.width(),
                i.naturalHeight = this.naturalHeight || b.height(),
                i.aspectRatio = i.naturalWidth / i.naturalHeight,
                d.url = c,
                d.ready = e,
                d.build()
            }), b.addClass(r).prependTo("body"))
        },
        isCrossOriginURL: function(a) {
            var b = a.match(/^(https?:)\/\/([^\:\/\?#]+):?(\d*)/i);
            return ! b || b[1] === d.protocol && b[2] === d.hostname && b[3] === d.port ? f: e
        },
        build: function() {
            var b, d, f = this.$element,
            g = this.defaults;
            this.ready && (this.built && this.unbuild(), f.one(B, g.build), b = a.Event(B), f.trigger(b), b.isDefaultPrevented() || (this.$cropper = d = a(H.TEMPLATE), f.addClass(q), this.$clone.removeClass(r).prependTo(d), this.rotated || (this.$original = this.$clone.clone(), this.$original.addClass(r).prependTo(this.$cropper), this.originalImage = a.extend({},
            this.image)), this.$container = f.parent(), this.$container.append(d), this.$canvas = d.find(".cropper-canvas"), this.$dragger = d.find(".cropper-dragger"), this.$viewer = d.find(".cropper-viewer"), g.autoCrop ? this.cropped = e: this.$dragger.addClass(q), g.dragCrop && this.setDragMode("crop"), g.modal && this.$canvas.addClass(p), !g.dashed && this.$dragger.find(".cropper-dashed").addClass(q), !g.movable && this.$dragger.find(".cropper-face").data(k, "move"), !g.resizable && this.$dragger.find(".cropper-line, .cropper-point").addClass(q), this.$scope = g.multiple ? this.$cropper: c, this.addListeners(), this.initPreview(), this.built = e, this.update(), f.one(C, g.built), f.trigger(C)))
        },
        unbuild: function() {
            this.built && (this.built = f, this.removeListeners(), this.$preview.empty(), this.$preview = g, this.$dragger = g, this.$canvas = g, this.$container = g, this.$cropper.remove(), this.$cropper = g)
        },
        update: function(a) {
            this.initContainer(),
            this.initCropper(),
            this.initImage(),
            this.initDragger(),
            a ? (this.setData(a, e), this.setDragMode("crop")) : this.setData(this.defaults.data)
        },
        resize: function() {
            clearTimeout(this.resizing),
            this.resizing = setTimeout(a.proxy(this.update, this, this.getData()), 200)
        },
        preview: function() {
            var b = this.image,
            c = this.dragger,
            d = b.width,
            e = b.height,
            f = c.left - b.left,
            g = c.top - b.top;
            this.$viewer.find("img").css({
                width: I(d),
                height: I(e),
                marginLeft: -I(f),
                marginTop: -I(g)
            }),
            this.$preview.each(function() {
                var b = a(this),
                h = b.width() / c.width;
                b.find("img").css({
                    width: I(d * h),
                    height: I(e * h),
                    marginLeft: -I(f * h),
                    marginTop: -I(g * h)
                })
            })
        },
        addListeners: function() {
            var c = this.defaults;
            this.$element.on(D, c.dragstart).on(E, c.dragmove).on(F, c.dragend),
            this.$cropper.on(v, this._dragstart = a.proxy(this.dragstart, this)).on(A, this._dblclick = a.proxy(this.dblclick, this)),
            c.zoomable && this.$cropper.on(y, this._wheel = a.proxy(this.wheel, this)),
            this.$scope.on(w, this._dragmove = a.proxy(this.dragmove, this)).on(x, this._dragend = a.proxy(this.dragend, this)),
            b.on(z, this._resize = a.proxy(this.resize, this))
        },
        removeListeners: function() {
            var a = this.defaults;
            this.$element.off(D, a.dragstart).off(E, a.dragmove).off(F, a.dragend),
            this.$cropper.off(v, this._dragstart).off(A, this._dblclick),
            a.zoomable && this.$cropper.off(y, this._wheel),
            this.$scope.off(w, this._dragmove).off(x, this._dragend),
            b.off(z, this._resize)
        },
        initPreview: function() {
            var b = '<img src="' + this.url + '">';
            this.$preview = a(this.defaults.preview),
            this.$preview.html(b),
            this.$viewer.html(b)
        },
        initContainer: function() {
            var a = this.$container;
            this.container = {
                width: L(a.width(), 300),
                height: L(a.height(), 150)
            }
        },
        initCropper: function() {
            var a, b = this.container,
            c = this.image;
            c.naturalWidth * b.height / c.naturalHeight - b.width >= 0 ? (a = {
                width: b.width,
                height: b.width / c.aspectRatio,
                left: 0
            },
            a.top = (b.height - a.height) / 2) : (a = {
                width: b.height * c.aspectRatio,
                height: b.height,
                top: 0
            },
            a.left = (b.width - a.width) / 2),
            this.$cropper.css({
                width: I(a.width),
                height: I(a.height),
                left: I(a.left),
                top: I(a.top)
            }),
            this.cropper = a
        },
        initImage: function() {
            var b = this.image,
            c = this.cropper,
            d = {
                _width: c.width,
                _height: c.height,
                width: c.width,
                height: c.height,
                left: 0,
                top: 0,
                ratio: c.width / b.naturalWidth
            };
            this.defaultImage = a.extend({},
            b, d),
            b._width !== c.width || b._height !== c.height ? a.extend(b, d) : b = a.extend(d, b),
            this.image = b,
            this.renderImage()
        },
        renderImage: function(a) {
            var b = this.image;
            "zoom" === a && (b.left -= (b.width - b.oldWidth) / 2, b.top -= (b.height - b.oldHeight) / 2),
            b.left = K(L(b.left, b._width - b.width), 0),
            b.top = K(L(b.top, b._height - b.height), 0),
            this.$clone.css({
                width: I(b.width),
                height: I(b.height),
                marginLeft: I(b.left),
                marginTop: I(b.top)
            }),
            a && (this.defaults.done(this.getData()), this.preview())
        },
        initDragger: function() {
            var b, c = this.defaults,
            d = this.cropper,
            e = c.aspectRatio || this.image.aspectRatio,
            f = this.image.ratio;
            b = d.height * e - d.width >= 0 ? {
                height: d.width / e,
                width: d.width,
                left: 0,
                top: (d.height - d.width / e) / 2,
                maxWidth: d.width,
                maxHeight: d.width / e
            }: {
                height: d.height,
                width: d.height * e,
                left: (d.width - d.height * e) / 2,
                top: 0,
                maxWidth: d.height * e,
                maxHeight: d.height
            },
            b.minWidth = 0,
            b.minHeight = 0,
            c.aspectRatio ? (isFinite(c.maxWidth) ? (b.maxWidth = K(b.maxWidth, c.maxWidth * f), b.maxHeight = b.maxWidth / e) : isFinite(c.maxHeight) && (b.maxHeight = K(b.maxHeight, c.maxHeight * f), b.maxWidth = b.maxHeight * e), c.minWidth > 0 ? (b.minWidth = L(0, c.minWidth * f), b.minHeight = b.minWidth / e) : c.minHeight > 0 && (b.minHeight = L(0, c.minHeight * f), b.minWidth = b.minHeight * e)) : (b.maxWidth = K(b.maxWidth, c.maxWidth * f), b.maxHeight = K(b.maxHeight, c.maxHeight * f), b.minWidth = L(0, c.minWidth * f), b.minHeight = L(0, c.minHeight * f)),
            b.minWidth = K(b.maxWidth, b.minWidth),
            b.minHeight = K(b.maxHeight, b.minHeight),
            b.height *= c.autoCropArea,
            b.width *= c.autoCropArea,
            b.left = (d.width - b.width) / 2,
            b.top = (d.height - b.height) / 2,
            b.oldLeft = b.left,
            b.oldTop = b.top,
            this.defaultDragger = b,
            this.dragger = a.extend({},
            b)
        },
        renderDragger: function() {
            var a = this.dragger,
            b = this.cropper;
            a.width > a.maxWidth ? (a.width = a.maxWidth, a.left = a.oldLeft) : a.width < a.minWidth && (a.width = a.minWidth, a.left = a.oldLeft),
            a.height > a.maxHeight ? (a.height = a.maxHeight, a.top = a.oldTop) : a.height < a.minHeight && (a.height = a.minHeight, a.top = a.oldTop),
            a.left = K(L(a.left, 0), b.width - a.width),
            a.top = K(L(a.top, 0), b.height - a.height),
            a.oldLeft = a.left,
            a.oldTop = a.top,
            this.dragger = a,
            this.defaults.done(this.getData()),
            this.$dragger.css({
                width: I(a.width),
                height: I(a.height),
                left: I(a.left),
                top: I(a.top)
            }),
            this.preview()
        },
        reset: function(b) {
            this.cropped && (b && (this.defaults.data = {}), this.image = a.extend({},
            this.defaultImage), this.renderImage(), this.dragger = a.extend({},
            this.defaultDragger), this.setData(this.defaults.data))
        },
        clear: function() {
            this.cropped && (this.cropped = f, this.setData({
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }), this.$canvas.removeClass(p), this.$dragger.addClass(q))
        },
        destroy: function() {
            var a = this.$element;
            this.ready && (this.unbuild(), a.removeClass(q).removeData("cropper"), this.rotated && a.attr("src", this.$original.attr("src")))
        },
        replace: function(b, c) {
            var d, g = this,
            h = this.$element,
            i = this.element;
            b && b !== this.url && b !== h.attr("src") && (c || (this.rotated = f, this.replaced = e), h.is("img") ? (h.attr("src", b), this.load()) : h.is("canvas") && this.support.canvas && (d = i.getContext("2d"), a('<img src="' + b + '">').one("load",
            function() {
                i.width = this.width,
                i.height = this.height,
                d.clearRect(0, 0, i.width, i.height),
                d.drawImage(this, 0, 0),
                g.load()
            })))
        },
        setData: function(b, c) {
            var d = this.cropper,
            e = this.dragger,
            f = this.image,
            h = this.defaults.aspectRatio;
            this.built && typeof b !== j && ((b === g || a.isEmptyObject(b)) && (e = a.extend({},
            this.defaultDragger)), a.isPlainObject(b) && !a.isEmptyObject(b) && (c || (this.defaults.data = b), b = this.transformData(b), G(b.x) && b.x <= d.width - f.left && (e.left = b.x + f.left), G(b.y) && b.y <= d.height - f.top && (e.top = b.y + f.top), h ? G(b.width) && b.width <= e.maxWidth && b.width >= e.minWidth ? (e.width = b.width, e.height = e.width / h) : G(b.height) && b.height <= e.maxHeight && b.height >= e.minHeight && (e.height = b.height, e.width = e.height * h) : (G(b.width) && b.width <= e.maxWidth && b.width >= e.minWidth && (e.width = b.width), G(b.height) && b.height <= e.maxHeight && b.height >= e.minHeight && (e.height = b.height))), this.dragger = e, this.renderDragger())
        },
        getData: function() {
            var a = this.dragger,
            b = this.image,
            c = {};
            return this.built && (c = {
                x: a.left - b.left,
                y: a.top - b.top,
                width: a.width,
                height: a.height
            },
            c = this.transformData(c, e)),
            c
        },
        transformData: function(b, c) {
            var d = this.image.ratio,
            e = {};
            return a.each(b,
            function(a, b) {
                b = P(b),
                n.test(a) && !isNaN(b) && (e[a] = c ? I(b / d) : b * d)
            }),
            e
        },
        setAspectRatio: function(a) {
            var b = "auto" === a;
            a = P(a),
            (b || !isNaN(a) && a > 0) && (this.defaults.aspectRatio = b ? h: a, this.built && (this.initDragger(), this.renderDragger()))
        },
        getImageData: function() {
            var b = {};
            return this.ready && a.each(this.image,
            function(a, c) {
                o.test(a) && (b[a] = c)
            }),
            b
        },
        getDataURL: function(b, c, d) {
            var e, f = a("<canvas>")[0],
            g = this.getData(),
            h = "";
            return a.isPlainObject(b) || (d = c, c = b, b = {}),
            b = a.extend({
                width: g.width,
                height: g.height
            },
            b),
            this.cropped && this.support.canvas && (f.width = b.width, f.height = b.height, e = f.getContext("2d"), "image/jpeg" === c && (e.fillStyle = "#fff", e.fillRect(0, 0, b.width, b.height)), e.drawImage(this.$clone[0], g.x, g.y, g.width, g.height, 0, 0, b.width, b.height), h = f.toDataURL(c, d)),
            h
        },
        setDragMode: function(a) {
            var b = this.$canvas,
            c = this.defaults,
            d = f,
            g = f;
            if (this.built && !this.disabled) {
                switch (a) {
                case "crop":
                    c.dragCrop && (d = e, b.data(k, a));
                    break;
                case "move":
                    g = e,
                    b.data(k, a);
                    break;
                default:
                    b.removeData(k)
                }
                b.toggleClass(t, d).toggleClass(s, g)
            }
        },
        enable: function() {
            this.built && (this.disabled = f, this.$cropper.removeClass(u))
        },
        disable: function() {
            this.built && (this.disabled = e, this.$cropper.addClass(u))
        },
        rotate: function(a) {
            var b = this.image;
            a = P(a) || 0,
            this.built && 0 !== a && !this.disabled && this.defaults.rotatable && this.support.canvas && (this.rotated = e, a = b.rotate = (b.rotate + a) % 360, this.replace(this.getRotatedDataURL(a), !0))
        },
        getRotatedDataURL: function(b) {
            var c = a("<canvas>")[0],
            d = c.getContext("2d"),
            e = b * Math.PI / 180,
            f = M(b) % 180,
            g = f > 90 ? 180 - f: f,
            h = g * Math.PI / 180,
            i = this.originalImage,
            j = i.naturalWidth,
            k = i.naturalHeight,
            l = M(j * O(h) + k * N(h)),
            m = M(j * N(h) + k * O(h));
            return c.width = l,
            c.height = m,
            d.save(),
            d.translate(l / 2, m / 2),
            d.rotate(e),
            d.drawImage(this.$original[0], -j / 2, -k / 2, j, k),
            d.restore(),
            c.toDataURL()
        },
        zoom: function(a) {
            var b, c, d, e = this.image;
            a = P(a),
            this.built && a && !this.disabled && this.defaults.zoomable && (b = e.width * (1 + a), c = e.height * (1 + a), d = b / e._width, d > 10 || (1 > d && (b = e._width, c = e._height), this.setDragMode(1 >= d ? "crop": "move"), e.oldWidth = e.width, e.oldHeight = e.height, e.width = b, e.height = c, e.ratio = e.width / e.naturalWidth, this.renderImage("zoom")))
        },
        dblclick: function() {
            this.disabled || this.setDragMode(this.$canvas.hasClass(t) ? "move": "crop")
        },
        wheel: function(a) {
            var b, c = a.originalEvent,
            d = 117.25,
            e = 5,
            f = 166.66665649414062,
            g = .1;
            this.disabled || (a.preventDefault(), c.deltaY ? (b = c.deltaY, b = b % e === 0 ? b / e: b % d === 0 ? b / d: b / f) : b = c.wheelDelta ? -c.wheelDelta / 120 : c.detail ? c.detail / 3 : 0, this.zoom(b * g))
        },
        dragstart: function(b) {
            var c, d, g, h = b.originalEvent.touches,
            i = b;
            if (!this.disabled) {
                if (h) {
                    if (g = h.length, g > 1) {
                        if (!this.defaults.zoomable || 2 !== g) return;
                        i = h[1],
                        this.startX2 = i.pageX,
                        this.startY2 = i.pageY,
                        c = "zoom"
                    }
                    i = h[0]
                }
                if (c = c || a(i.target).data(k), m.test(c)) {
                    if (b.preventDefault(), d = a.Event(D), this.$element.trigger(d), d.isDefaultPrevented()) return;
                    this.directive = c,
                    this.cropping = f,
                    this.startX = i.pageX,
                    this.startY = i.pageY,
                    "crop" === c && (this.cropping = e, this.$canvas.addClass(p))
                }
            }
        },
        dragmove: function(b) {
            var c, d, e = b.originalEvent.touches,
            f = b;
            if (!this.disabled) {
                if (e) {
                    if (d = e.length, d > 1) {
                        if (!this.defaults.zoomable || 2 !== d) return;
                        f = e[1],
                        this.endX2 = f.pageX,
                        this.endY2 = f.pageY
                    }
                    f = e[0]
                }
                if (this.directive) {
                    if (b.preventDefault(), c = a.Event(E), this.$element.trigger(c), c.isDefaultPrevented()) return;
                    this.endX = f.pageX,
                    this.endY = f.pageY,
                    this.dragging()
                }
            }
        },
        dragend: function(b) {
            var c;
            if (!this.disabled && this.directive) {
                if (b.preventDefault(), c = a.Event(F), this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.cropping && (this.cropping = f, this.$canvas.toggleClass(p, this.cropped && this.defaults.modal)),
                this.directive = ""
            }
        },
        dragging: function() {
            var a, b = this.directive,
            c = this.image,
            d = this.cropper,
            g = d.width,
            h = d.height,
            i = this.dragger,
            j = i.width,
            k = i.height,
            l = i.left,
            m = i.top,
            n = l + j,
            o = m + k,
            p = e,
            r = this.defaults,
            s = r.aspectRatio,
            t = {
                x: this.endX - this.startX,
                y: this.endY - this.startY
            };
            switch (s && (t.X = t.y * s, t.Y = t.x / s), b) {
            case "all":
                l += t.x,
                m += t.y;
                break;
            case "e":
                if (t.x >= 0 && (n >= g || s && (0 >= m || o >= h))) {
                    p = f;
                    break
                }
                j += t.x,
                s && (k = j / s, m -= t.Y / 2),
                0 > j && (b = "w", j = 0);
                break;
            case "n":
                if (t.y <= 0 && (0 >= m || s && (0 >= l || n >= g))) {
                    p = f;
                    break
                }
                k -= t.y,
                m += t.y,
                s && (j = k * s, l += t.X / 2),
                0 > k && (b = "s", k = 0);
                break;
            case "w":
                if (t.x <= 0 && (0 >= l || s && (0 >= m || o >= h))) {
                    p = f;
                    break
                }
                j -= t.x,
                l += t.x,
                s && (k = j / s, m += t.Y / 2),
                0 > j && (b = "e", j = 0);
                break;
            case "s":
                if (t.y >= 0 && (o >= h || s && (0 >= l || n >= g))) {
                    p = f;
                    break
                }
                k += t.y,
                s && (j = k * s, l -= t.X / 2),
                0 > k && (b = "n", k = 0);
                break;
            case "ne":
                if (s) {
                    if (t.y <= 0 && (0 >= m || n >= g)) {
                        p = f;
                        break
                    }
                    k -= t.y,
                    m += t.y,
                    j = k * s
                } else t.x >= 0 ? g > n ? j += t.x: t.y <= 0 && 0 >= m && (p = f) : j += t.x,
                t.y <= 0 ? m > 0 && (k -= t.y, m += t.y) : (k -= t.y, m += t.y);
                0 > k && (b = "sw", k = 0, j = 0);
                break;
            case "nw":
                if (s) {
                    if (t.y <= 0 && (0 >= m || 0 >= l)) {
                        p = f;
                        break
                    }
                    k -= t.y,
                    m += t.y,
                    j = k * s,
                    l += t.X
                } else t.x <= 0 ? l > 0 ? (j -= t.x, l += t.x) : t.y <= 0 && 0 >= m && (p = f) : (j -= t.x, l += t.x),
                t.y <= 0 ? m > 0 && (k -= t.y, m += t.y) : (k -= t.y, m += t.y);
                0 > k && (b = "se", k = 0, j = 0);
                break;
            case "sw":
                if (s) {
                    if (t.x <= 0 && (0 >= l || o >= h)) {
                        p = f;
                        break
                    }
                    j -= t.x,
                    l += t.x,
                    k = j / s
                } else t.x <= 0 ? l > 0 ? (j -= t.x, l += t.x) : t.y >= 0 && o >= h && (p = f) : (j -= t.x, l += t.x),
                t.y >= 0 ? h > o && (k += t.y) : k += t.y;
                0 > j && (b = "ne", k = 0, j = 0);
                break;
            case "se":
                if (s) {
                    if (t.x >= 0 && (n >= g || o >= h)) {
                        p = f;
                        break
                    }
                    j += t.x,
                    k = j / s
                } else t.x >= 0 ? g > n ? j += t.x: t.y >= 0 && o >= h && (p = f) : j += t.x,
                t.y >= 0 ? h > o && (k += t.y) : k += t.y;
                0 > j && (b = "nw", k = 0, j = 0);
                break;
            case "move":
                c.left += t.x,
                c.top += t.y,
                this.renderImage("move"),
                p = f;
                break;
            case "zoom":
                r.zoomable && (this.zoom(function(a, b, c, d, e, f) {
                    return (J(e * e + f * f) - J(c * c + d * d)) / J(a * a + b * b)
                } (c.width, c.height, M(this.startX - this.startX2), M(this.startY - this.startY2), M(this.endX - this.endX2), M(this.endY - this.endY2))), this.endX2 = this.startX2, this.endY2 = this.startY2);
                break;
            case "crop":
                t.x && t.y && (a = this.$cropper.offset(), l = this.startX - a.left, m = this.startY - a.top, j = i.minWidth, k = i.minHeight, t.x > 0 ? t.y > 0 ? b = "se": (b = "ne", m -= k) : t.y > 0 ? (b = "sw", l -= j) : (b = "nw", l -= j, m -= k), this.cropped || (this.cropped = e, this.$dragger.removeClass(q)))
            }
            p && (i.width = j, i.height = k, i.left = l, i.top = m, this.directive = b, this.renderDragger()),
            this.startX = this.endX,
            this.startY = this.endY
        }
    },
    H.TEMPLATE = function(a, b) {
        return b = b.split(","),
        a.replace(/\d+/g,
        function(a) {
            return b[a]
        })
    } ('<0 6="5-container"><0 6="5-canvas"></0><0 6="5-dragger"><1 6="5-viewer"></1><1 6="5-8 8-h"></1><1 6="5-8 8-v"></1><1 6="5-face" 3-2="all"></1><1 6="5-7 7-e" 3-2="e"></1><1 6="5-7 7-n" 3-2="n"></1><1 6="5-7 7-w" 3-2="w"></1><1 6="5-7 7-s" 3-2="s"></1><1 6="5-4 4-e" 3-2="e"></1><1 6="5-4 4-n" 3-2="n"></1><1 6="5-4 4-w" 3-2="w"></1><1 6="5-4 4-s" 3-2="s"></1><1 6="5-4 4-ne" 3-2="ne"></1><1 6="5-4 4-nw" 3-2="nw"></1><1 6="5-4 4-sw" 3-2="sw"></1><1 6="5-4 4-se" 3-2="se"></1></0></0>', "div,span,directive,data,point,cropper,class,line,dashed"),
    H.DEFAULTS = {
        aspectRatio: "auto",
        autoCropArea: .8,
        data: {},
        done: a.noop,
        preview: "",
        multiple: f,
        autoCrop: e,
        dragCrop: e,
        dashed: e,
        modal: e,
        movable: e,
        resizable: e,
        zoomable: e,
        rotatable: e,
        minWidth: 0,
        minHeight: 0,
        maxWidth: i,
        maxHeight: i,
        build: g,
        built: g,
        dragstart: g,
        dragmove: g,
        dragend: g
    },
    H.setDefaults = function(b) {
        a.extend(H.DEFAULTS, b)
    },
    H.other = a.fn.cropper,
    a.fn.cropper = function(b) {
        var c, d = [].slice.call(arguments, 1);
        return this.each(function() {
            var e, f = a(this),
            g = f.data("cropper");
            g || f.data("cropper", g = new H(this, b)),
            "string" == typeof b && a.isFunction(e = g[b]) && (c = e.apply(g, d))
        }),
        typeof c !== j ? c: this
    },
    a.fn.cropper.Constructor = H,
    a.fn.cropper.setDefaults = H.setDefaults,
    a.fn.cropper.noConflict = function() {
        return a.fn.cropper = H.other,
        this
    }
}),
function(a, b, c) {
    "use strict";
    function d(a, b, c) {
        var d, e = a.runtimeStyle && a.runtimeStyle[b],
        f = a.style;
        return ! /^-?[0-9]+\.?[0-9]*(?:px)?$/i.test(c) && /^-?\d/.test(c) && (d = f.left, e && (a.runtimeStyle.left = a.currentStyle.left), f.left = "fontSize" === b ? "1em": c || 0, c = f.pixelLeft + "px", f.left = d, e && (a.runtimeStyle.left = e)),
        /^(thin|medium|thick)$/i.test(c) ? c: Math.round(parseFloat(c)) + "px"
    }
    function e(a) {
        return parseInt(a, 10)
    }
    function f(a, b, e, f) {
        if (a = (a || "").split(","), a = a[f || 0] || a[0] || "auto", a = l.Util.trimText(a).split(" "), "backgroundSize" !== e || a[0] && !a[0].match(/cover|contain|auto/)) {
            if (a[0] = -1 === a[0].indexOf("%") ? d(b, e + "X", a[0]) : a[0], a[1] === c) {
                if ("backgroundSize" === e) return a[1] = "auto",
                a;
                a[1] = a[0]
            }
            a[1] = -1 === a[1].indexOf("%") ? d(b, e + "Y", a[1]) : a[1]
        } else;
        return a
    }
    function g(a, b, c, d, e, f) {
        var g, h, i, j, k = l.Util.getCSS(b, a, e);
        if (1 === k.length && (j = k[0], k = [], k[0] = j, k[1] = j), -1 !== k[0].toString().indexOf("%")) i = parseFloat(k[0]) / 100,
        h = c.width * i,
        "backgroundSize" !== a && (h -= (f || d).width * i);
        else if ("backgroundSize" === a) if ("auto" === k[0]) h = d.width;
        else if (/contain|cover/.test(k[0])) {
            var m = l.Util.resizeBounds(d.width, d.height, c.width, c.height, k[0]);
            h = m.width,
            g = m.height
        } else h = parseInt(k[0], 10);
        else h = parseInt(k[0], 10);
        return "auto" === k[1] ? g = h / d.width * d.height: -1 !== k[1].toString().indexOf("%") ? (i = parseFloat(k[1]) / 100, g = c.height * i, "backgroundSize" !== a && (g -= (f || d).height * i)) : g = parseInt(k[1], 10),
        [h, g]
    }
    function h(a, b) {
        var c = [];
        return {
            storage: c,
            width: a,
            height: b,
            clip: function() {
                c.push({
                    type: "function",
                    name: "clip",
                    arguments: arguments
                })
            },
            translate: function() {
                c.push({
                    type: "function",
                    name: "translate",
                    arguments: arguments
                })
            },
            fill: function() {
                c.push({
                    type: "function",
                    name: "fill",
                    arguments: arguments
                })
            },
            save: function() {
                c.push({
                    type: "function",
                    name: "save",
                    arguments: arguments
                })
            },
            restore: function() {
                c.push({
                    type: "function",
                    name: "restore",
                    arguments: arguments
                })
            },
            fillRect: function() {
                c.push({
                    type: "function",
                    name: "fillRect",
                    arguments: arguments
                })
            },
            createPattern: function() {
                c.push({
                    type: "function",
                    name: "createPattern",
                    arguments: arguments
                })
            },
            drawShape: function() {
                var a = [];
                return c.push({
                    type: "function",
                    name: "drawShape",
                    arguments: a
                }),
                {
                    moveTo: function() {
                        a.push({
                            name: "moveTo",
                            arguments: arguments
                        })
                    },
                    lineTo: function() {
                        a.push({
                            name: "lineTo",
                            arguments: arguments
                        })
                    },
                    arcTo: function() {
                        a.push({
                            name: "arcTo",
                            arguments: arguments
                        })
                    },
                    bezierCurveTo: function() {
                        a.push({
                            name: "bezierCurveTo",
                            arguments: arguments
                        })
                    },
                    quadraticCurveTo: function() {
                        a.push({
                            name: "quadraticCurveTo",
                            arguments: arguments
                        })
                    }
                }
            },
            drawImage: function() {
                c.push({
                    type: "function",
                    name: "drawImage",
                    arguments: arguments
                })
            },
            fillText: function() {
                c.push({
                    type: "function",
                    name: "fillText",
                    arguments: arguments
                })
            },
            setVariable: function(a, b) {
                return c.push({
                    type: "variable",
                    name: a,
                    arguments: b
                }),
                b
            }
        }
    }
    function i(a) {
        return {
            zindex: a,
            children: []
        }
    }
    var j, k, l = {};
    l.Util = {},
    l.Util.log = function(b) {
        l.logging && a.console && a.console.log && a.console.log(b)
    },
    l.Util.trimText = function(a) {
        return function(b) {
            return a ? a.apply(b) : ((b || "") + "").replace(/^\s+|\s+$/g, "")
        }
    } (String.prototype.trim),
    l.Util.asFloat = function(a) {
        return parseFloat(a)
    },
    function() {
        var a = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g,
        b = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g;
        l.Util.parseTextShadows = function(c) {
            if (!c || "none" === c) return [];
            for (var d = c.match(a), e = [], f = 0; d && f < d.length; f++) {
                var g = d[f].match(b);
                e.push({
                    color: g[0],
                    offsetX: g[1] ? g[1].replace("px", "") : 0,
                    offsetY: g[2] ? g[2].replace("px", "") : 0,
                    blur: g[3] ? g[3].replace("px", "") : 0
                })
            }
            return e
        }
    } (),
    l.Util.parseBackgroundImage = function(a) {
        var b, c, d, e, f, g, h, i, j = " \r\n	",
        k = [],
        l = 0,
        m = 0,
        n = function() {
            b && ('"' === c.substr(0, 1) && (c = c.substr(1, c.length - 2)), c && i.push(c), "-" === b.substr(0, 1) && (e = b.indexOf("-", 1) + 1) > 0 && (d = b.substr(0, e), b = b.substr(e)), k.push({
                prefix: d,
                method: b.toLowerCase(),
                value: f,
                args: i
            })),
            i = [],
            b = d = c = f = ""
        };
        n();
        for (var o = 0,
        p = a.length; p > o; o++) if (g = a[o], !(0 === l && j.indexOf(g) > -1)) {
            switch (g) {
            case '"':
                h ? h === g && (h = null) : h = g;
                break;
            case "(":
                if (h) break;
                if (0 === l) {
                    l = 1,
                    f += g;
                    continue
                }
                m++;
                break;
            case ")":
                if (h) break;
                if (1 === l) {
                    if (0 === m) {
                        l = 0,
                        f += g,
                        n();
                        continue
                    }
                    m--
                }
                break;
            case ",":
                if (h) break;
                if (0 === l) {
                    n();
                    continue
                }
                if (1 === l && 0 === m && !b.match(/^url$/i)) {
                    i.push(c),
                    c = "",
                    f += g;
                    continue
                }
            }
            f += g,
            0 === l ? b += g: c += g
        }
        return n(),
        k
    },
    l.Util.Bounds = function(a) {
        var b, c = {};
        return a.getBoundingClientRect && (b = a.getBoundingClientRect(), c.top = b.top, c.bottom = b.bottom || b.top + b.height, c.left = b.left, c.width = a.offsetWidth, c.height = a.offsetHeight),
        c
    },
    l.Util.OffsetBounds = function(a) {
        var b = a.offsetParent ? l.Util.OffsetBounds(a.offsetParent) : {
            top: 0,
            left: 0
        };
        return {
            top: a.offsetTop + b.top,
            bottom: a.offsetTop + a.offsetHeight + b.top,
            left: a.offsetLeft + b.left,
            width: a.offsetWidth,
            height: a.offsetHeight
        }
    },
    l.Util.getCSS = function(a, c, d) {
        j !== a && (k = b.defaultView.getComputedStyle(a, null));
        var g = k[c];
        if (/^background(Size|Position)$/.test(c)) return f(g, a, c, d);
        if (/border(Top|Bottom)(Left|Right)Radius/.test(c)) {
            var h = g.split(" ");
            return h.length <= 1 && (h[1] = h[0]),
            h.map(e)
        }
        return g
    },
    l.Util.resizeBounds = function(a, b, c, d, e) {
        var f, g, h = c / d,
        i = a / b;
        return e && "auto" !== e ? i > h ^ "contain" === e ? (g = d, f = d * i) : (f = c, g = c / i) : (f = c, g = d),
        {
            width: f,
            height: g
        }
    },
    l.Util.BackgroundPosition = function(a, b, c, d, e) {
        var f = g("backgroundPosition", a, b, c, d, e);
        return {
            left: f[0],
            top: f[1]
        }
    },
    l.Util.BackgroundSize = function(a, b, c, d) {
        var e = g("backgroundSize", a, b, c, d);
        return {
            width: e[0],
            height: e[1]
        }
    },
    l.Util.Extend = function(a, b) {
        for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
        return b
    },
    l.Util.Children = function(a) {
        var b;
        try {
            b = a.nodeName && "IFRAME" === a.nodeName.toUpperCase() ? a.contentDocument || a.contentWindow.document: function(a) {
                var b = [];
                return null !== a && !
                function(a, b) {
                    var d = a.length,
                    e = 0;
                    if ("number" == typeof b.length) for (var f = b.length; f > e; e++) a[d++] = b[e];
                    else for (; b[e] !== c;) a[d++] = b[e++];
                    return a.length = d,
                    a
                } (b, a),
                b
            } (a.childNodes)
        } catch(d) {
            l.Util.log("html2canvas.Util.Children failed with exception: " + d.message),
            b = []
        }
        return b
    },
    l.Util.isTransparent = function(a) {
        return "transparent" === a || "rgba(0, 0, 0, 0)" === a
    },
    l.Util.Font = function() {
        var a = {};
        return function(b, d, e) {
            if (a[b + "-" + d] !== c) return a[b + "-" + d];
            var f, g, h, i = e.createElement("div"),
            j = e.createElement("img"),
            k = e.createElement("span"),
            l = "Hidden Text";
            return i.style.visibility = "hidden",
            i.style.fontFamily = b,
            i.style.fontSize = d,
            i.style.margin = 0,
            i.style.padding = 0,
            e.body.appendChild(i),
            j.src = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=",
            j.width = 1,
            j.height = 1,
            j.style.margin = 0,
            j.style.padding = 0,
            j.style.verticalAlign = "baseline",
            k.style.fontFamily = b,
            k.style.fontSize = d,
            k.style.margin = 0,
            k.style.padding = 0,
            k.appendChild(e.createTextNode(l)),
            i.appendChild(k),
            i.appendChild(j),
            f = j.offsetTop - k.offsetTop + 1,
            i.removeChild(k),
            i.appendChild(e.createTextNode(l)),
            i.style.lineHeight = "normal",
            j.style.verticalAlign = "super",
            g = j.offsetTop - i.offsetTop + 1,
            h = {
                baseline: f,
                lineWidth: 1,
                middle: g
            },
            a[b + "-" + d] = h,
            e.body.removeChild(i),
            h
        }
    } (),
    function() {
        function a(a) {
            return function(b) {
                try {
                    a.addColorStop(b.stop, b.color)
                } catch(d) {
                    c.log(["failed to add color stop: ", d, "; tried to add: ", b])
                }
            }
        }
        var c = l.Util,
        d = {};
        l.Generate = d;
        var e = [/^(-webkit-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/, /^(-o-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/, /^(-webkit-gradient)\((linear|radial),\s((?:\d{1,3}%?)\s(?:\d{1,3}%?),\s(?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)\-]+)\)$/, /^(-moz-linear-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)]+)\)$/, /^(-webkit-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/, /^(-moz-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s?([a-z\-]*)([\w\d\.\s,%\(\)]+)\)$/, /^(-o-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/];
        d.parseGradient = function(a, b) {
            var c, d, f, g, h, i, j, k, l, m, n, o, p = e.length;
            for (d = 0; p > d && !(f = a.match(e[d])); d += 1);
            if (f) switch (f[1]) {
            case "-webkit-linear-gradient":
            case "-o-linear-gradient":
                if (c = {
                    type: "linear",
                    x0: null,
                    y0: null,
                    x1: null,
                    y1: null,
                    colorStops: []
                },
                h = f[2].match(/\w+/g)) for (i = h.length, d = 0; i > d; d += 1) switch (h[d]) {
                case "top":
                    c.y0 = 0,
                    c.y1 = b.height;
                    break;
                case "right":
                    c.x0 = b.width,
                    c.x1 = 0;
                    break;
                case "bottom":
                    c.y0 = b.height,
                    c.y1 = 0;
                    break;
                case "left":
                    c.x0 = 0,
                    c.x1 = b.width
                }
                if (null === c.x0 && null === c.x1 && (c.x0 = c.x1 = b.width / 2), null === c.y0 && null === c.y1 && (c.y0 = c.y1 = b.height / 2), h = f[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g)) for (i = h.length, j = 1 / Math.max(i - 1, 1), d = 0; i > d; d += 1) k = h[d].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/),
                k[2] ? (g = parseFloat(k[2]), g /= "%" === k[3] ? 100 : b.width) : g = d * j,
                c.colorStops.push({
                    color: k[1],
                    stop: g
                });
                break;
            case "-webkit-gradient":
                if (c = {
                    type: "radial" === f[2] ? "circle": f[2],
                    x0: 0,
                    y0: 0,
                    x1: 0,
                    y1: 0,
                    colorStops: []
                },
                h = f[3].match(/(\d{1,3})%?\s(\d{1,3})%?,\s(\d{1,3})%?\s(\d{1,3})%?/), h && (c.x0 = h[1] * b.width / 100, c.y0 = h[2] * b.height / 100, c.x1 = h[3] * b.width / 100, c.y1 = h[4] * b.height / 100), h = f[4].match(/((?:from|to|color-stop)\((?:[0-9\.]+,\s)?(?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)\))+/g)) for (i = h.length, d = 0; i > d; d += 1) k = h[d].match(/(from|to|color-stop)\(([0-9\.]+)?(?:,\s)?((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\)/),
                g = parseFloat(k[2]),
                "from" === k[1] && (g = 0),
                "to" === k[1] && (g = 1),
                c.colorStops.push({
                    color: k[3],
                    stop: g
                });
                break;
            case "-moz-linear-gradient":
                if (c = {
                    type: "linear",
                    x0: 0,
                    y0: 0,
                    x1: 0,
                    y1: 0,
                    colorStops: []
                },
                h = f[2].match(/(\d{1,3})%?\s(\d{1,3})%?/), h && (c.x0 = h[1] * b.width / 100, c.y0 = h[2] * b.height / 100, c.x1 = b.width - c.x0, c.y1 = b.height - c.y0), h = f[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}%)?)+/g)) for (i = h.length, j = 1 / Math.max(i - 1, 1), d = 0; i > d; d += 1) k = h[d].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%)?/),
                k[2] ? (g = parseFloat(k[2]), k[3] && (g /= 100)) : g = d * j,
                c.colorStops.push({
                    color: k[1],
                    stop: g
                });
                break;
            case "-webkit-radial-gradient":
            case "-moz-radial-gradient":
            case "-o-radial-gradient":
                if (c = {
                    type: "circle",
                    x0: 0,
                    y0: 0,
                    x1: b.width,
                    y1: b.height,
                    cx: 0,
                    cy: 0,
                    rx: 0,
                    ry: 0,
                    colorStops: []
                },
                h = f[2].match(/(\d{1,3})%?\s(\d{1,3})%?/), h && (c.cx = h[1] * b.width / 100, c.cy = h[2] * b.height / 100), h = f[3].match(/\w+/), k = f[4].match(/[a-z\-]*/), h && k) switch (k[0]) {
                case "farthest-corner":
                case "cover":
                case "":
                    l = Math.sqrt(Math.pow(c.cx, 2) + Math.pow(c.cy, 2)),
                    m = Math.sqrt(Math.pow(c.cx, 2) + Math.pow(c.y1 - c.cy, 2)),
                    n = Math.sqrt(Math.pow(c.x1 - c.cx, 2) + Math.pow(c.y1 - c.cy, 2)),
                    o = Math.sqrt(Math.pow(c.x1 - c.cx, 2) + Math.pow(c.cy, 2)),
                    c.rx = c.ry = Math.max(l, m, n, o);
                    break;
                case "closest-corner":
                    l = Math.sqrt(Math.pow(c.cx, 2) + Math.pow(c.cy, 2)),
                    m = Math.sqrt(Math.pow(c.cx, 2) + Math.pow(c.y1 - c.cy, 2)),
                    n = Math.sqrt(Math.pow(c.x1 - c.cx, 2) + Math.pow(c.y1 - c.cy, 2)),
                    o = Math.sqrt(Math.pow(c.x1 - c.cx, 2) + Math.pow(c.cy, 2)),
                    c.rx = c.ry = Math.min(l, m, n, o);
                    break;
                case "farthest-side":
                    "circle" === h[0] ? c.rx = c.ry = Math.max(c.cx, c.cy, c.x1 - c.cx, c.y1 - c.cy) : (c.type = h[0], c.rx = Math.max(c.cx, c.x1 - c.cx), c.ry = Math.max(c.cy, c.y1 - c.cy));
                    break;
                case "closest-side":
                case "contain":
                    "circle" === h[0] ? c.rx = c.ry = Math.min(c.cx, c.cy, c.x1 - c.cx, c.y1 - c.cy) : (c.type = h[0], c.rx = Math.min(c.cx, c.x1 - c.cx), c.ry = Math.min(c.cy, c.y1 - c.cy))
                }
                if (h = f[5].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g)) for (i = h.length, j = 1 / Math.max(i - 1, 1), d = 0; i > d; d += 1) k = h[d].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/),
                k[2] ? (g = parseFloat(k[2]), g /= "%" === k[3] ? 100 : b.width) : g = d * j,
                c.colorStops.push({
                    color: k[1],
                    stop: g
                })
            }
            return c
        },
        d.Gradient = function(c, d) {
            if (0 !== d.width && 0 !== d.height) {
                var e, f, g = b.createElement("canvas"),
                h = g.getContext("2d");
                if (g.width = d.width, g.height = d.height, e = l.Generate.parseGradient(c, d)) switch (e.type) {
                case "linear":
                    f = h.createLinearGradient(e.x0, e.y0, e.x1, e.y1),
                    e.colorStops.forEach(a(f)),
                    h.fillStyle = f,
                    h.fillRect(0, 0, d.width, d.height);
                    break;
                case "circle":
                    f = h.createRadialGradient(e.cx, e.cy, 0, e.cx, e.cy, e.rx),
                    e.colorStops.forEach(a(f)),
                    h.fillStyle = f,
                    h.fillRect(0, 0, d.width, d.height);
                    break;
                case "ellipse":
                    var i = b.createElement("canvas"),
                    j = i.getContext("2d"),
                    k = Math.max(e.rx, e.ry),
                    m = 2 * k;
                    i.width = i.height = m,
                    f = j.createRadialGradient(e.rx, e.ry, 0, e.rx, e.ry, k),
                    e.colorStops.forEach(a(f)),
                    j.fillStyle = f,
                    j.fillRect(0, 0, m, m),
                    h.fillStyle = e.colorStops[e.colorStops.length - 1].color,
                    h.fillRect(0, 0, g.width, g.height),
                    h.drawImage(i, e.cx - e.rx, e.cy - e.ry, 2 * e.rx, 2 * e.ry)
                }
                return g
            }
        },
        d.ListAlpha = function(a) {
            var b, c = "";
            do b = a % 26,
            c = String.fromCharCode(b + 64) + c,
            a /= 26;
            while (26 * a > 26);
            return c
        },
        d.ListRoman = function(a) {
            var b, c = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
            d = [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
            e = "",
            f = c.length;
            if (0 >= a || a >= 4e3) return a;
            for (b = 0; f > b; b += 1) for (; a >= d[b];) a -= d[b],
            e += c[b];
            return e
        }
    } (),
    l.Parse = function(d, e) {
        function f() {
            return Math.max(Math.max(kb.body.scrollWidth, kb.documentElement.scrollWidth), Math.max(kb.body.offsetWidth, kb.documentElement.offsetWidth), Math.max(kb.body.clientWidth, kb.documentElement.clientWidth))
        }
        function g() {
            return Math.max(Math.max(kb.body.scrollHeight, kb.documentElement.scrollHeight), Math.max(kb.body.offsetHeight, kb.documentElement.offsetHeight), Math.max(kb.body.clientHeight, kb.documentElement.clientHeight))
        }
        function j(a, b) {
            var c = parseInt(pb(a, b), 10);
            return isNaN(c) ? 0 : c
        }
        function k(a, b, c, d, e, f) {
            "transparent" !== f && (a.setVariable("fillStyle", f), a.fillRect(b, c, d, e), jb += 1)
        }
        function m(a, b, c) {
            return a.length > 0 ? b + c.toUpperCase() : void 0
        }
        function n(a, b) {
            switch (b) {
            case "lowercase":
                return a.toLowerCase();
            case "capitalize":
                return a.replace(/(^|\s|:|-|\(|\))([a-z])/g, m);
            case "uppercase":
                return a.toUpperCase();
            default:
                return a
            }
        }
        function o(a) {
            return /^(normal|none|0px)$/.test(a)
        }
        function p(a, b, c, d) {
            null !== a && lb.trimText(a).length > 0 && (d.fillText(a, b, c), jb += 1)
        }
        function q(a, b, c, d) {
            var e = !1,
            f = pb(b, "fontWeight"),
            g = pb(b, "fontFamily"),
            h = pb(b, "fontSize"),
            i = lb.parseTextShadows(pb(b, "textShadow"));
            switch (parseInt(f, 10)) {
            case 401:
                f = "bold";
                break;
            case 400:
                f = "normal"
            }
            return a.setVariable("fillStyle", d),
            a.setVariable("font", [pb(b, "fontStyle"), pb(b, "fontVariant"), f, h, g].join(" ")),
            a.setVariable("textAlign", e ? "right": "left"),
            i.length && (a.setVariable("shadowColor", i[0].color), a.setVariable("shadowOffsetX", i[0].offsetX), a.setVariable("shadowOffsetY", i[0].offsetY), a.setVariable("shadowBlur", i[0].blur)),
            "none" !== c ? lb.Font(g, h, kb) : void 0
        }
        function r(a, b, c, d, e) {
            switch (b) {
            case "underline":
                k(a, c.left, Math.round(c.top + d.baseline + d.lineWidth), c.width, 1, e);
                break;
            case "overline":
                k(a, c.left, Math.round(c.top), c.width, 1, e);
                break;
            case "line-through":
                k(a, c.left, Math.ceil(c.top + d.middle + d.lineWidth), c.width, 1, e)
            }
        }
        function s(a, b, c, d, e) {
            var f;
            if (mb.rangeBounds && !e)("none" !== c || 0 !== lb.trimText(b).length) && (f = t(b, a.node, a.textOffset)),
            a.textOffset += b.length;
            else if (a.node && "string" == typeof a.node.nodeValue) {
                var g = d ? a.node.splitText(b.length) : null;
                f = u(a.node, e),
                a.node = g
            }
            return f
        }
        function t(a, b, c) {
            var d = kb.createRange();
            return d.setStart(b, c),
            d.setEnd(b, c + a.length),
            d.getBoundingClientRect()
        }
        function u(a, b) {
            var c = a.parentNode,
            d = kb.createElement("wrapper"),
            e = a.cloneNode(!0);
            d.appendChild(a.cloneNode(!0)),
            c.replaceChild(d, a);
            var f = b ? lb.OffsetBounds(d) : lb.Bounds(d);
            return c.replaceChild(e, d),
            f
        }
        function v(a, b, c) {
            var d, f, g = c.ctx,
            h = pb(a, "color"),
            i = pb(a, "textDecoration"),
            j = pb(a, "textAlign"),
            k = {
                node: b,
                textOffset: 0
            };
            lb.trimText(b.nodeValue).length > 0 && (b.nodeValue = n(b.nodeValue, pb(a, "textTransform")), j = j.replace(["-webkit-auto"], ["auto"]), f = b.nodeValue.split(!e.letterRendering && /^(left|right|justify|auto)$/.test(j) && o(pb(a, "letterSpacing")) ? /(\b| )/: ""), d = q(g, a, i, h), e.chinese && f.forEach(function(a, b) { / . * [\u4E00 - \u9FA5]. * $ / .test(a) && (a = a.split(""), a.unshift(b, 1), f.splice.apply(f, a))
            }), f.forEach(function(a, b) {
                var e = s(k, a, i, b < f.length - 1, c.transform.matrix);
                e && (p(a, e.left, e.bottom, g), r(g, i, e, d, h))
            }))
        }
        function w(a, b) {
            var c, d, e = kb.createElement("boundelement");
            return e.style.display = "inline",
            c = a.style.listStyleType,
            a.style.listStyleType = "none",
            e.appendChild(kb.createTextNode(b)),
            a.insertBefore(e, a.firstChild),
            d = lb.Bounds(e),
            a.removeChild(e),
            a.style.listStyleType = c,
            d
        }
        function x(a) {
            var b = -1,
            c = 1,
            d = a.parentNode.childNodes;
            if (a.parentNode) {
                for (; d[++b] !== a;) 1 === d[b].nodeType && c++;
                return c
            }
            return - 1
        }
        function y(a, b) {
            var c, d = x(a);
            switch (b) {
            case "decimal":
                c = d;
                break;
            case "decimal-leading-zero":
                c = 1 === d.toString().length ? d = "0" + d.toString() : d.toString();
                break;
            case "upper-roman":
                c = l.Generate.ListRoman(d);
                break;
            case "lower-roman":
                c = l.Generate.ListRoman(d).toLowerCase();
                break;
            case "lower-alpha":
                c = l.Generate.ListAlpha(d).toLowerCase();
                break;
            case "upper-alpha":
                c = l.Generate.ListAlpha(d)
            }
            return c + ". "
        }
        function z(a, b, c) {
            var d, e, f, g = b.ctx,
            h = pb(a, "listStyleType");
            if (/^(decimal|decimal-leading-zero|upper-alpha|upper-latin|upper-roman|lower-alpha|lower-greek|lower-latin|lower-roman)$/i.test(h)) {
                if (e = y(a, h), f = w(a, e), q(g, a, "none", pb(a, "color")), "inside" !== pb(a, "listStylePosition")) return;
                g.setVariable("textAlign", "left"),
                d = c.left,
                p(e, d, f.bottom, g)
            }
        }
        function A(a) {
            var b = d[a];
            return b && b.succeeded === !0 ? b.img: !1
        }
        function B(a, b) {
            var c = Math.max(a.left, b.left),
            d = Math.max(a.top, b.top),
            e = Math.min(a.left + a.width, b.left + b.width),
            f = Math.min(a.top + a.height, b.top + b.height);
            return {
                left: c,
                top: d,
                width: e - c,
                height: f - d
            }
        }
        function C(a, b, c) {
            var d, e = "static" !== b.cssPosition,
            f = e ? pb(a, "zIndex") : "auto",
            g = pb(a, "opacity"),
            h = "none" !== pb(a, "cssFloat");
            b.zIndex = d = i(f),
            d.isPositioned = e,
            d.isFloated = h,
            d.opacity = g,
            d.ownStacking = "auto" !== f || 1 > g,
            c && c.zIndex.children.push(b)
        }
        function D(a, b, c, d, e) {
            var f = j(b, "paddingLeft"),
            g = j(b, "paddingTop"),
            h = j(b, "paddingRight"),
            i = j(b, "paddingBottom");
            P(a, c, 0, 0, c.width, c.height, d.left + f + e[3].width, d.top + g + e[0].width, d.width - (e[1].width + e[3].width + f + h), d.height - (e[0].width + e[2].width + g + i))
        }
        function E(a) {
            return ["Top", "Right", "Bottom", "Left"].map(function(b) {
                return {
                    width: j(a, "border" + b + "Width"),
                    color: pb(a, "border" + b + "Color")
                }
            })
        }
        function F(a) {
            return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(b) {
                return pb(a, "border" + b + "Radius")
            })
        }
        function G(a, b, c, d) {
            var e = function(a, b, c) {
                return {
                    x: a.x + (b.x - a.x) * c,
                    y: a.y + (b.y - a.y) * c
                }
            };
            return {
                start: a,
                startControl: b,
                endControl: c,
                end: d,
                subdivide: function(f) {
                    var g = e(a, b, f),
                    h = e(b, c, f),
                    i = e(c, d, f),
                    j = e(g, h, f),
                    k = e(h, i, f),
                    l = e(j, k, f);
                    return [G(a, g, j, l), G(l, k, i, d)]
                },
                curveTo: function(a) {
                    a.push(["bezierCurve", b.x, b.y, c.x, c.y, d.x, d.y])
                },
                curveToReversed: function(d) {
                    d.push(["bezierCurve", c.x, c.y, b.x, b.y, a.x, a.y])
                }
            }
        }
        function H(a, b, c, d, e, f, g) {
            b[0] > 0 || b[1] > 0 ? (a.push(["line", d[0].start.x, d[0].start.y]), d[0].curveTo(a), d[1].curveTo(a)) : a.push(["line", f, g]),
            (c[0] > 0 || c[1] > 0) && a.push(["line", e[0].start.x, e[0].start.y])
        }
        function I(a, b, c, d, e, f, g) {
            var h = [];
            return b[0] > 0 || b[1] > 0 ? (h.push(["line", d[1].start.x, d[1].start.y]), d[1].curveTo(h)) : h.push(["line", a.c1[0], a.c1[1]]),
            c[0] > 0 || c[1] > 0 ? (h.push(["line", f[0].start.x, f[0].start.y]), f[0].curveTo(h), h.push(["line", g[0].end.x, g[0].end.y]), g[0].curveToReversed(h)) : (h.push(["line", a.c2[0], a.c2[1]]), h.push(["line", a.c3[0], a.c3[1]])),
            b[0] > 0 || b[1] > 0 ? (h.push(["line", e[1].end.x, e[1].end.y]), e[1].curveToReversed(h)) : h.push(["line", a.c4[0], a.c4[1]]),
            h
        }
        function J(a, b, c) {
            var d = a.left,
            e = a.top,
            f = a.width,
            g = a.height,
            h = b[0][0],
            i = b[0][1],
            j = b[1][0],
            k = b[1][1],
            l = b[2][0],
            m = b[2][1],
            n = b[3][0],
            o = b[3][1],
            p = f - j,
            q = g - m,
            r = f - l,
            s = g - o;
            return {
                topLeftOuter: sb(d, e, h, i).topLeft.subdivide(.5),
                topLeftInner: sb(d + c[3].width, e + c[0].width, Math.max(0, h - c[3].width), Math.max(0, i - c[0].width)).topLeft.subdivide(.5),
                topRightOuter: sb(d + p, e, j, k).topRight.subdivide(.5),
                topRightInner: sb(d + Math.min(p, f + c[3].width), e + c[0].width, p > f + c[3].width ? 0 : j - c[3].width, k - c[0].width).topRight.subdivide(.5),
                bottomRightOuter: sb(d + r, e + q, l, m).bottomRight.subdivide(.5),
                bottomRightInner: sb(d + Math.min(r, f + c[3].width), e + Math.min(q, g + c[0].width), Math.max(0, l - c[1].width), Math.max(0, m - c[2].width)).bottomRight.subdivide(.5),
                bottomLeftOuter: sb(d, e + s, n, o).bottomLeft.subdivide(.5),
                bottomLeftInner: sb(d + c[3].width, e + s, Math.max(0, n - c[3].width), Math.max(0, o - c[2].width)).bottomLeft.subdivide(.5)
            }
        }
        function K(a, b, c, d, e) {
            var f = pb(a, "backgroundClip"),
            g = [];
            switch (f) {
            case "content-box":
            case "padding-box":
                H(g, d[0], d[1], b.topLeftInner, b.topRightInner, e.left + c[3].width, e.top + c[0].width),
                H(g, d[1], d[2], b.topRightInner, b.bottomRightInner, e.left + e.width - c[1].width, e.top + c[0].width),
                H(g, d[2], d[3], b.bottomRightInner, b.bottomLeftInner, e.left + e.width - c[1].width, e.top + e.height - c[2].width),
                H(g, d[3], d[0], b.bottomLeftInner, b.topLeftInner, e.left + c[3].width, e.top + e.height - c[2].width);
                break;
            default:
                H(g, d[0], d[1], b.topLeftOuter, b.topRightOuter, e.left, e.top),
                H(g, d[1], d[2], b.topRightOuter, b.bottomRightOuter, e.left + e.width, e.top),
                H(g, d[2], d[3], b.bottomRightOuter, b.bottomLeftOuter, e.left + e.width, e.top + e.height),
                H(g, d[3], d[0], b.bottomLeftOuter, b.topLeftOuter, e.left, e.top + e.height)
            }
            return g
        }
        function L(a, b, c) {
            var d, e, f, g, h, i, j = b.left,
            k = b.top,
            l = b.width,
            m = b.height,
            n = F(a),
            o = J(b, n, c),
            p = {
                clip: K(a, o, c, n, b),
                borders: []
            };
            for (d = 0; 4 > d; d++) if (c[d].width > 0) {
                switch (e = j, f = k, g = l, h = m - c[2].width, d) {
                case 0:
                    h = c[0].width,
                    i = I({
                        c1: [e, f],
                        c2: [e + g, f],
                        c3: [e + g - c[1].width, f + h],
                        c4: [e + c[3].width, f + h]
                    },
                    n[0], n[1], o.topLeftOuter, o.topLeftInner, o.topRightOuter, o.topRightInner);
                    break;
                case 1:
                    e = j + l - c[1].width,
                    g = c[1].width,
                    i = I({
                        c1: [e + g, f],
                        c2: [e + g, f + h + c[2].width],
                        c3: [e, f + h],
                        c4: [e, f + c[0].width]
                    },
                    n[1], n[2], o.topRightOuter, o.topRightInner, o.bottomRightOuter, o.bottomRightInner);
                    break;
                case 2:
                    f = f + m - c[2].width,
                    h = c[2].width,
                    i = I({
                        c1: [e + g, f + h],
                        c2: [e, f + h],
                        c3: [e + c[3].width, f],
                        c4: [e + g - c[3].width, f]
                    },
                    n[2], n[3], o.bottomRightOuter, o.bottomRightInner, o.bottomLeftOuter, o.bottomLeftInner);
                    break;
                case 3:
                    g = c[3].width,
                    i = I({
                        c1: [e, f + h + c[2].width],
                        c2: [e, f],
                        c3: [e + g, f + c[0].width],
                        c4: [e + g, f + h]
                    },
                    n[3], n[0], o.bottomLeftOuter, o.bottomLeftInner, o.topLeftOuter, o.topLeftInner)
                }
                p.borders.push({
                    args: i,
                    color: c[d].color
                })
            }
            return p
        }
        function M(a, b) {
            var c = a.drawShape();
            return b.forEach(function(a, b) {
                c[0 === b ? "moveTo": a[0] + "To"].apply(null, a.slice(1))
            }),
            c
        }
        function N(a, b, c) {
            "transparent" !== c && (a.setVariable("fillStyle", c), M(a, b), a.fill(), jb += 1)
        }
        function O(a, b, c) {
            var d, e, f = kb.createElement("valuewrap"),
            g = ["lineHeight", "textAlign", "fontFamily", "color", "fontSize", "paddingLeft", "paddingTop", "width", "height", "border", "borderLeftWidth", "borderTopWidth"];
            g.forEach(function(b) {
                try {
                    f.style[b] = pb(a, b)
                } catch(c) {
                    lb.log("html2canvas: Parse: Exception caught in renderFormValue: " + c.message)
                }
            }),
            f.style.borderColor = "black",
            f.style.borderStyle = "solid",
            f.style.display = "block",
            f.style.position = "absolute",
            (/^(submit|reset|button|text|password)$/.test(a.type) || "SELECT" === a.nodeName) && (f.style.lineHeight = pb(a, "height")),
            f.style.top = b.top + "px",
            f.style.left = b.left + "px",
            d = "SELECT" === a.nodeName ? (a.options[a.selectedIndex] || 0).text: a.value,
            d || (d = a.placeholder),
            e = kb.createTextNode(d),
            f.appendChild(e),
            ob.appendChild(f),
            v(a, e, c),
            ob.removeChild(f)
        }
        function P(a) {
            a.drawImage.apply(a, Array.prototype.slice.call(arguments, 1)),
            jb += 1
        }
        function Q(c, d) {
            var e = a.getComputedStyle(c, d);
            if (e && e.content && "none" !== e.content && "-moz-alt-content" !== e.content && "none" !== e.display) {
                var f = e.content + "",
                g = f.substr(0, 1);
                g === f.substr(f.length - 1) && g.match(/'|"/) && (f = f.substr(1, f.length - 2));
                var h = "url" === f.substr(0, 3),
                i = b.createElement(h ? "img": "span");
                return i.className = qb + "-before " + qb + "-after",
                Object.keys(e).filter(R).forEach(function(a) {
                    try {
                        i.style[a] = e[a]
                    } catch(b) {
                        lb.log(["Tried to assign readonly property ", a, "Error:", b])
                    }
                }),
                h ? i.src = lb.parseBackgroundImage(f)[0].args[0] : i.innerHTML = f,
                i
            }
        }
        function R(b) {
            return isNaN(a.parseInt(b, 10))
        }
        function S(a, b) {
            var c = Q(a, ":before"),
            d = Q(a, ":after"); (c || d) && (c && (a.className += " " + qb + "-before", a.parentNode.insertBefore(c, a), fb(c, b, !0), a.parentNode.removeChild(c), a.className = a.className.replace(qb + "-before", "").trim()), d && (a.className += " " + qb + "-after", a.appendChild(d), fb(d, b, !0), a.removeChild(d), a.className = a.className.replace(qb + "-after", "").trim()))
        }
        function T(a, b, c, d) {
            var e = Math.round(d.left + c.left),
            f = Math.round(d.top + c.top);
            a.createPattern(b),
            a.translate(e, f),
            a.fill(),
            a.translate( - e, -f)
        }
        function U(a, b, c, d, e, f, g, h) {
            var i = [];
            i.push(["line", Math.round(e), Math.round(f)]),
            i.push(["line", Math.round(e + g), Math.round(f)]),
            i.push(["line", Math.round(e + g), Math.round(h + f)]),
            i.push(["line", Math.round(e), Math.round(h + f)]),
            M(a, i),
            a.save(),
            a.clip(),
            T(a, b, c, d),
            a.restore()
        }
        function V(a, b, c) {
            k(a, b.left, b.top, b.width, b.height, c)
        }
        function W(a, b, c, d, e) {
            var f = lb.BackgroundSize(a, b, d, e),
            g = lb.BackgroundPosition(a, b, d, e, f),
            h = pb(a, "backgroundRepeat").split(",").map(lb.trimText);
            switch (d = Y(d, f), h = h[e] || h[0]) {
            case "repeat-x":
                U(c, d, g, b, b.left, b.top + g.top, 99999, d.height);
                break;
            case "repeat-y":
                U(c, d, g, b, b.left + g.left, b.top, d.width, 99999);
                break;
            case "no-repeat":
                U(c, d, g, b, b.left + g.left, b.top + g.top, d.width, d.height);
                break;
            default:
                T(c, d, g, {
                    top: b.top,
                    left: b.left,
                    width: d.width,
                    height: d.height
                })
            }
        }
        function X(a, b, c) {
            for (var d, e = pb(a, "backgroundImage"), f = lb.parseBackgroundImage(e), g = f.length; g--;) if (e = f[g], e.args && 0 !== e.args.length) {
                var h = "url" === e.method ? e.args[0] : e.value;
                d = A(h),
                d ? W(a, b, c, d, g) : lb.log("html2canvas: Error loading background:", e)
            }
        }
        function Y(a, b) {
            if (a.width === b.width && a.height === b.height) return a;
            var c, d = kb.createElement("canvas");
            return d.width = b.width,
            d.height = b.height,
            c = d.getContext("2d"),
            P(c, a, 0, 0, a.width, a.height, 0, 0, b.width, b.height),
            d
        }
        function Z(a, b, c) {
            return a.setVariable("globalAlpha", pb(b, "opacity") * (c ? c.opacity: 1))
        }
        function $(a) {
            return a.replace("px", "")
        }
        function _(a) {
            var b = pb(a, "transform") || pb(a, "-webkit-transform") || pb(a, "-moz-transform") || pb(a, "-ms-transform") || pb(a, "-o-transform"),
            c = pb(a, "transform-origin") || pb(a, "-webkit-transform-origin") || pb(a, "-moz-transform-origin") || pb(a, "-ms-transform-origin") || pb(a, "-o-transform-origin") || "0px 0px";
            c = c.split(" ").map($).map(lb.asFloat);
            var d;
            if (b && "none" !== b) {
                var e = b.match(tb);
                if (e) switch (e[1]) {
                case "matrix":
                    d = e[2].split(",").map(lb.trimText).map(lb.asFloat)
                }
            }
            return {
                origin: c,
                matrix: d
            }
        }
        function ab(a, b, c, d) {
            var i = h(b ? c.width: f(), b ? c.height: g()),
            j = {
                ctx: i,
                opacity: Z(i, a, b),
                cssPosition: pb(a, "position"),
                borders: E(a),
                transform: d,
                clip: b && b.clip ? lb.Extend({},
                b.clip) : null
            };
            return C(a, j, b),
            e.useOverflow === !0 && /(hidden|scroll|auto)/.test(pb(a, "overflow")) === !0 && /(BODY)/i.test(a.nodeName) === !1 && (j.clip = j.clip ? B(j.clip, c) : c),
            j
        }
        function bb(a, b, c) {
            var d = {
                left: b.left + a[3].width,
                top: b.top + a[0].width,
                width: b.width - (a[1].width + a[3].width),
                height: b.height - (a[0].width + a[2].width)
            };
            return c && (d = B(d, c)),
            d
        }
        function cb(a, b) {
            var c = b.matrix ? lb.OffsetBounds(a) : lb.Bounds(a);
            return b.origin[0] += c.left,
            b.origin[1] += c.top,
            c
        }
        function db(a, b, c, d) {
            var e, f = _(a, b),
            g = cb(a, f),
            h = ab(a, b, g, f),
            i = h.borders,
            j = h.ctx,
            k = bb(i, g, h.clip),
            l = L(a, g, i),
            m = nb.test(a.nodeName) ? "#efefef": pb(a, "backgroundColor");
            switch (M(j, l.clip), j.save(), j.clip(), k.height > 0 && k.width > 0 && !d ? (V(j, g, m), X(a, k, j)) : d && (h.backgroundColor = m), j.restore(), l.borders.forEach(function(a) {
                N(j, a.args, a.color)
            }), c || S(a, h), a.nodeName) {
            case "IMG":
                (e = A(a.getAttribute("src"))) ? D(j, a, e, g, i) : lb.log("html2canvas: Error loading <img>:" + a.getAttribute("src"));
                break;
            case "INPUT":
                /^(text|url|email|submit|button|reset)$/.test(a.type) && (a.value || a.placeholder || "").length > 0 && O(a, g, h);
                break;
            case "TEXTAREA":
                (a.value || a.placeholder || "").length > 0 && O(a, g, h);
                break;
            case "SELECT":
                (a.options || a.placeholder || "").length > 0 && O(a, g, h);
                break;
            case "LI":
                z(a, h, k);
                break;
            case "CANVAS":
                D(j, a, a, g, i)
            }
            return h
        }
        function eb(a) {
            return "none" !== pb(a, "display") && "hidden" !== pb(a, "visibility") && !a.hasAttribute("data-html2canvas-ignore")
        }
        function fb(a, b, c) {
            eb(a) && (b = db(a, b, c, !1) || b, nb.test(a.nodeName) || gb(a, b, c))
        }
        function gb(a, b, c) {
            lb.Children(a).forEach(function(d) {
                d.nodeType === d.ELEMENT_NODE ? fb(d, b, c) : d.nodeType === d.TEXT_NODE && v(a, d, b)
            })
        }
        function hb() {
            var a = pb(b.documentElement, "backgroundColor"),
            c = lb.isTransparent(a) && ib === b.body,
            d = db(ib, null, !1, c);
            return gb(ib, d),
            c && (a = d.backgroundColor),
            ob.removeChild(rb),
            {
                backgroundColor: a,
                stack: d
            }
        }
        a.scroll(0, 0);
        var ib = e.elements === c ? b.body: e.elements[0],
        jb = 0,
        kb = ib.ownerDocument,
        lb = l.Util,
        mb = lb.Support(e, kb),
        nb = new RegExp("(" + e.ignoreElements + ")"),
        ob = kb.body,
        pb = lb.getCSS,
        qb = "___html2canvas___pseudoelement",
        rb = kb.createElement("style");
        rb.innerHTML = "." + qb + '-before:before { content: "" !important; display: none !important; }.' + qb + '-after:after { content: "" !important; display: none !important; }',
        ob.appendChild(rb),
        d = d || {};
        var sb = function(a) {
            return function(b, c, d, e) {
                var f = d * a,
                g = e * a,
                h = b + d,
                i = c + e;
                return {
                    topLeft: G({
                        x: b,
                        y: i
                    },
                    {
                        x: b,
                        y: i - g
                    },
                    {
                        x: h - f,
                        y: c
                    },
                    {
                        x: h,
                        y: c
                    }),
                    topRight: G({
                        x: b,
                        y: c
                    },
                    {
                        x: b + f,
                        y: c
                    },
                    {
                        x: h,
                        y: i - g
                    },
                    {
                        x: h,
                        y: i
                    }),
                    bottomRight: G({
                        x: h,
                        y: c
                    },
                    {
                        x: h,
                        y: c + g
                    },
                    {
                        x: b + f,
                        y: i
                    },
                    {
                        x: b,
                        y: i
                    }),
                    bottomLeft: G({
                        x: h,
                        y: i
                    },
                    {
                        x: h - f,
                        y: i
                    },
                    {
                        x: b,
                        y: c + g
                    },
                    {
                        x: b,
                        y: c
                    })
                }
            }
        } (4 * ((Math.sqrt(2) - 1) / 3)),
        tb = /(matrix)\((.+)\)/;
        return hb()
    },
    l.Preload = function(d) {
        function e(a) {
            A.href = a,
            A.href = A.href;
            var b = A.protocol + A.host;
            return b === p
        }
        function f() {
            u.log("html2canvas: start: images: " + t.numLoaded + " / " + t.numTotal + " (failed: " + t.numFailed + ")"),
            !t.firstRun && t.numLoaded >= t.numTotal && (u.log("Finished loading images: # " + t.numTotal + " (failed: " + t.numFailed + ")"), "function" == typeof d.complete && d.complete(t))
        }
        function g(b, e, g) {
            var h, i, j = d.proxy;
            A.href = b,
            b = A.href,
            h = "html2canvas_" + v++,
            g.callbackname = h,
            j += j.indexOf("?") > -1 ? "&": "?",
            j += "url=" + encodeURIComponent(b) + "&callback=" + h,
            i = x.createElement("script"),
            a[h] = function(b) {
                "error:" === b.substring(0, 6) ? (g.succeeded = !1, t.numLoaded++, t.numFailed++, f()) : (o(e, g), e.src = b),
                a[h] = c;
                try {
                    delete a[h]
                } catch(d) {}
                i.parentNode.removeChild(i),
                i = null,
                delete g.script,
                delete g.callbackname
            },
            i.setAttribute("type", "text/javascript"),
            i.setAttribute("src", j),
            g.script = i,
            a.document.body.appendChild(i)
        }
        function h(b, c) {
            var d = a.getComputedStyle(b, c),
            e = d.content;
            "url" === e.substr(0, 3) && q.loadImage(l.Util.parseBackgroundImage(e)[0].args[0]),
            m(d.backgroundImage, b)
        }
        function i(a) {
            h(a, ":before"),
            h(a, ":after")
        }
        function j(a, b) {
            var d = l.Generate.Gradient(a, b);
            d !== c && (t[a] = {
                img: d,
                succeeded: !0
            },
            t.numTotal++, t.numLoaded++, f())
        }
        function k(a) {
            return a && a.method && a.args && a.args.length > 0
        }
        function m(a, b) {
            var d;
            l.Util.parseBackgroundImage(a).filter(k).forEach(function(a) {
                "url" === a.method ? q.loadImage(a.args[0]) : a.method.match(/\-?gradient$/) && (d === c && (d = l.Util.Bounds(b)), j(a.value, d))
            })
        }
        function n(a) {
            var b = !1;
            try {
                u.Children(a).forEach(n)
            } catch(d) {}
            try {
                b = a.nodeType
            } catch(e) {
                b = !1,
                u.log("html2canvas: failed to access some element's nodeType - Exception: " + e.message)
            }
            if (1 === b || b === c) {
                i(a);
                try {
                    m(u.getCSS(a, "backgroundImage"), a)
                } catch(d) {
                    u.log("html2canvas: failed to get background-image - Exception: " + d.message)
                }
                m(a)
            }
        }
        function o(b, e) {
            b.onload = function() {
                e.timer !== c && a.clearTimeout(e.timer),
                t.numLoaded++,
                e.succeeded = !0,
                b.onerror = b.onload = null,
                f()
            },
            b.onerror = function() {
                if ("anonymous" === b.crossOrigin && (a.clearTimeout(e.timer), d.proxy)) {
                    var c = b.src;
                    return b = new Image,
                    e.img = b,
                    b.src = c,
                    void g(b.src, b, e)
                }
                t.numLoaded++,
                t.numFailed++,
                e.succeeded = !1,
                b.onerror = b.onload = null,
                f()
            }
        }
        var p, q, r, s, t = {
            numLoaded: 0,
            numFailed: 0,
            numTotal: 0,
            cleanupDone: !1
        },
        u = l.Util,
        v = 0,
        w = d.elements[0] || b.body,
        x = w.ownerDocument,
        y = w.getElementsByTagName("img"),
        z = y.length,
        A = x.createElement("a"),
        B = function(a) {
            return a.crossOrigin !== c
        } (new Image);
        for (A.href = a.location.href, p = A.protocol + A.host, q = {
            loadImage: function(a) {
                var b, f;
                a && t[a] === c && (b = new Image, a.match(/data:image\/.*;base64,/i) ? (b.src = a.replace(/url\(['"]{0,}|['"]{0,}\)$/gi, ""), f = t[a] = {
                    img: b
                },
                t.numTotal++, o(b, f)) : e(a) || d.allowTaint === !0 ? (f = t[a] = {
                    img: b
                },
                t.numTotal++, o(b, f), b.src = a) : B && !d.allowTaint && d.useCORS ? (b.crossOrigin = "anonymous", f = t[a] = {
                    img: b
                },
                t.numTotal++, o(b, f), b.src = a) : d.proxy && (f = t[a] = {
                    img: b
                },
                t.numTotal++, g(a, b, f)))
            },
            cleanupDOM: function(e) {
                var g, h;
                if (!t.cleanupDone) {
                    u.log(e && "string" == typeof e ? "html2canvas: Cleanup because: " + e: "html2canvas: Cleanup after timeout: " + d.timeout + " ms.");
                    for (h in t) if (t.hasOwnProperty(h) && (g = t[h], "object" == typeof g && g.callbackname && g.succeeded === c)) {
                        a[g.callbackname] = c;
                        try {
                            delete a[g.callbackname]
                        } catch(i) {}
                        g.script && g.script.parentNode && (g.script.setAttribute("src", "about:blank"), g.script.parentNode.removeChild(g.script)),
                        t.numLoaded++,
                        t.numFailed++,
                        u.log("html2canvas: Cleaned up failed img: '" + h + "' Steps: " + t.numLoaded + " / " + t.numTotal)
                    }
                    a.stop !== c ? a.stop() : b.execCommand !== c && b.execCommand("Stop", !1),
                    b.close !== c && b.close(),
                    t.cleanupDone = !0,
                    e && "string" == typeof e || f()
                }
            },
            renderingDone: function() {
                s && a.clearTimeout(s)
            }
        },
        d.timeout > 0 && (s = a.setTimeout(q.cleanupDOM, d.timeout)), u.log("html2canvas: Preload starts: finding background-images"), t.firstRun = !0, n(w), u.log("html2canvas: Preload: Finding images"), r = 0; z > r; r += 1) q.loadImage(y[r].getAttribute("src"));
        return t.firstRun = !1,
        u.log("html2canvas: Preload: Done."),
        t.numTotal === t.numLoaded && f(),
        q
    },
    l.Renderer = function(a, d) {
        function e(a) {
            function b(a) {
                Object.keys(a).sort().forEach(function(c) {
                    var d = [],
                    f = [],
                    g = [],
                    h = [];
                    a[c].forEach(function(a) {
                        a.node.zIndex.isPositioned || a.node.zIndex.opacity < 1 ? g.push(a) : a.node.zIndex.isFloated ? f.push(a) : d.push(a)
                    }),
                    function i(a) {
                        a.forEach(function(a) {
                            h.push(a),
                            a.children && i(a.children)
                        })
                    } (d.concat(f, g)),
                    h.forEach(function(a) {
                        a.context ? b(a.context) : e.push(a.node)
                    })
                })
            }
            var d, e = [];
            return d = function(a) {
                function b(a, d, e) {
                    var f = "auto" === d.zIndex.zindex ? 0 : Number(d.zIndex.zindex),
                    g = a,
                    h = d.zIndex.isPositioned,
                    i = d.zIndex.isFloated,
                    j = {
                        node: d
                    },
                    k = e;
                    d.zIndex.ownStacking ? (g = j.context = {
                        "!": [{
                            node: d,
                            children: []
                        }]
                    },
                    k = c) : (h || i) && (k = j.children = []),
                    0 === f && e ? e.push(j) : (a[f] || (a[f] = []), a[f].push(j)),
                    d.zIndex.children.forEach(function(a) {
                        b(g, a, k)
                    })
                }
                var d = {};
                return b(d, a),
                d
            } (a),
            b(d),
            e
        }
        function f(a) {
            var b;
            if ("string" == typeof d.renderer && l.Renderer[a] !== c) b = l.Renderer[a](d);
            else {
                if ("function" != typeof a) throw new Error("Unknown renderer");
                b = a(d)
            }
            if ("function" != typeof b) throw new Error("Invalid renderer defined");
            return b
        }
        return f(d.renderer)(a, d, b, e(a.stack), l)
    },
    l.Util.Support = function(a, b) {
        function d() {
            var a = new Image,
            d = b.createElement("canvas"),
            e = d.getContext === c ? !1 : d.getContext("2d");
            if (e === !1) return ! 1;
            d.width = d.height = 10,
            a.src = ["data:image/svg+xml,", "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'>", "<foreignObject width='10' height='10'>", "<div xmlns='http://www.w3.org/1999/xhtml' style='width:10;height:10;'>", "sup", "</div>", "</foreignObject>", "</svg>"].join("");
            try {
                e.drawImage(a, 0, 0),
                d.toDataURL()
            } catch(f) {
                return ! 1
            }
            return l.Util.log("html2canvas: Parse: SVG powered rendering available"),
            !0
        }
        function e() {
            var a, c, d, e, f = !1;
            return b.createRange && (a = b.createRange(), a.getBoundingClientRect && (c = b.createElement("boundtest"), c.style.height = "123px", c.style.display = "block", b.body.appendChild(c), a.selectNode(c), d = a.getBoundingClientRect(), e = d.height, 123 === e && (f = !0), b.body.removeChild(c))),
            f
        }
        return {
            rangeBounds: e(),
            svgRendering: a.svgRendering && d()
        }
    },
    a.html2canvas = function(b, c) {
        b = b.length ? b: [b];
        var d, e, f = {
            logging: !1,
            elements: b,
            background: "#fff",
            proxy: null,
            timeout: 0,
            useCORS: !1,
            allowTaint: !1,
            svgRendering: !1,
            ignoreElements: "IFRAME|OBJECT|PARAM",
            useOverflow: !0,
            letterRendering: !1,
            chinese: !1,
            width: null,
            height: null,
            taintTest: !0,
            renderer: "Canvas"
        };
        return f = l.Util.Extend(c, f),
        l.logging = f.logging,
        f.complete = function(a) { ("function" != typeof f.onpreloaded || f.onpreloaded(a) !== !1) && (d = l.Parse(a, f), ("function" != typeof f.onparsed || f.onparsed(d) !== !1) && (e = l.Renderer(d, f), "function" == typeof f.onrendered && f.onrendered(e)))
        },
        a.setTimeout(function() {
            l.Preload(f)
        },
        0),
        {
            render: function(a, b) {
                return l.Renderer(a, l.Util.Extend(b, f))
            },
            parse: function(a, b) {
                return l.Parse(a, l.Util.Extend(b, f))
            },
            preload: function(a) {
                return l.Preload(l.Util.Extend(a, f))
            },
            log: l.Util.log
        }
    },
    a.html2canvas.log = l.Util.log,
    a.html2canvas.Renderer = {
        Canvas: c
    },
    l.Renderer.Canvas = function(a) {
        function d(a, b) {
            a.beginPath(),
            b.forEach(function(b) {
                a[b.name].apply(a, b.arguments)
            }),
            a.closePath()
        }
        function e(a) {
            if ( - 1 === h.indexOf(a.arguments[0].src)) {
                j.drawImage(a.arguments[0], 0, 0);
                try {
                    j.getImageData(0, 0, 1, 1)
                } catch(b) {
                    return i = g.createElement("canvas"),
                    j = i.getContext("2d"),
                    !1
                }
                h.push(a.arguments[0].src)
            }
            return ! 0
        }
        function f(b, c) {
            switch (c.type) {
            case "variable":
                b[c.name] = c.arguments;
                break;
            case "function":
                switch (c.name) {
                case "createPattern":
                    if (c.arguments[0].width > 0 && c.arguments[0].height > 0) try {
                        b.fillStyle = b.createPattern(c.arguments[0], "repeat")
                    } catch(f) {
                        k.log("html2canvas: Renderer: Error creating pattern", f.message)
                    }
                    break;
                case "drawShape":
                    d(b, c.arguments);
                    break;
                case "drawImage":
                    c.arguments[8] > 0 && c.arguments[7] > 0 && (!a.taintTest || a.taintTest && e(c)) && b.drawImage.apply(b, c.arguments);
                    break;
                default:
                    b[c.name].apply(b, c.arguments)
                }
            }
        }
        a = a || {};
        var g = b,
        h = [],
        i = b.createElement("canvas"),
        j = i.getContext("2d"),
        k = l.Util,
        m = a.canvas || g.createElement("canvas");
        return function(a, b, d, e, g) {
            var h, i, j, l = m.getContext("2d"),
            n = a.stack;
            return m.width = m.style.width = b.width || n.ctx.width,
            m.height = m.style.height = b.height || n.ctx.height,
            j = l.fillStyle,
            l.fillStyle = k.isTransparent(n.backgroundColor) && b.background !== c ? b.background: a.backgroundColor,
            l.fillRect(0, 0, m.width, m.height),
            l.fillStyle = j,
            e.forEach(function(a) {
                l.textBaseline = "bottom",
                l.save(),
                a.transform.matrix && (l.translate(a.transform.origin[0], a.transform.origin[1]), l.transform.apply(l, a.transform.matrix), l.translate( - a.transform.origin[0], -a.transform.origin[1])),
                a.clip && (l.beginPath(), l.rect(a.clip.left, a.clip.top, a.clip.width, a.clip.height), l.clip()),
                a.ctx.storage && a.ctx.storage.forEach(function(a) {
                    f(l, a)
                }),
                l.restore()
            }),
            k.log("html2canvas: Renderer: Canvas renderer done - returning canvas obj"),
            1 === b.elements.length && "object" == typeof b.elements[0] && "BODY" !== b.elements[0].nodeName ? (i = g.Util.Bounds(b.elements[0]), h = d.createElement("canvas"), h.width = Math.ceil(i.width), h.height = Math.ceil(i.height), l = h.getContext("2d"), l.drawImage(m, i.left, i.top, i.width, i.height, 0, 0, i.width, i.height), m = null, h) : m
        }
    }
} (window, document),
function(a) {
    if ("function" == typeof define && define.amd) define(a);
    else if ("object" == typeof exports) module.exports = a();
    else {
        var b = window.Cookies,
        c = window.Cookies = a(window.jQuery);
        c.noConflict = function() {
            return window.Cookies = b,
            c
        }
    }
} (function() {
    function a() {
        for (var a = 0,
        b = {}; a < arguments.length; a++) {
            var c = arguments[a];
            for (var d in c) b[d] = c[d]
        }
        return b
    }
    function b(c) {
        function d(b, e, f) {
            var g;
            if (arguments.length > 1) {
                if (f = a({
                    path: "/"
                },
                d.defaults, f), "number" == typeof f.expires) {
                    var h = new Date;
                    h.setMilliseconds(h.getMilliseconds() + 864e5 * f.expires),
                    f.expires = h
                }
                try {
                    g = JSON.stringify(e),
                    /^[\{\[]/.test(g) && (e = g)
                } catch(i) {}
                return e = encodeURIComponent(String(e)),
                e = e.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                b = encodeURIComponent(String(b)),
                b = b.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent),
                b = b.replace(/[\(\)]/g, escape),
                document.cookie = [b, "=", e, f.expires && "; expires=" + f.expires.toUTCString(), f.path && "; path=" + f.path, f.domain && "; domain=" + f.domain, f.secure ? "; secure": ""].join("")
            }
            b || (g = {});
            for (var j = document.cookie ? document.cookie.split("; ") : [], k = /(%[0-9A-Z]{2})+/g, l = 0; l < j.length; l++) {
                var m = j[l].split("="),
                n = m[0].replace(k, decodeURIComponent),
                o = m.slice(1).join("=");
                '"' === o.charAt(0) && (o = o.slice(1, -1));
                try {
                    if (o = c && c(o, n) || o.replace(k, decodeURIComponent), this.json) try {
                        o = JSON.parse(o)
                    } catch(i) {}
                    if (b === n) {
                        g = o;
                        break
                    }
                    b || (g[n] = o)
                } catch(i) {}
            }
            return g
        }
        return d.get = d.set = d,
        d.getJSON = function() {
            return d.apply({
                json: !0
            },
            [].slice.call(arguments))
        },
        d.defaults = {},
        d.remove = function(b, c) {
            d(b, "", a(c, {
                expires: -1
            }))
        },
        d.withConverter = b,
        d
    }
    return b()
}),
function() {
    function a(a, b, c) {
        var d = b && c || 0,
        e = 0;
        for (b = b || [], a.toLowerCase().replace(/[0-9a-f]{2}/g,
        function(a) {
            16 > e && (b[d + e++] = m[a])
        }); 16 > e;) b[d + e++] = 0;
        return b
    }
    function b(a, b) {
        var c = b || 0,
        d = l;
        return d[a[c++]] + d[a[c++]] + d[a[c++]] + d[a[c++]] + "-" + d[a[c++]] + d[a[c++]] + "-" + d[a[c++]] + d[a[c++]] + "-" + d[a[c++]] + d[a[c++]] + "-" + d[a[c++]] + d[a[c++]] + d[a[c++]] + d[a[c++]] + d[a[c++]] + d[a[c++]]
    }
    function c(a, c, d) {
        var e = c && d || 0,
        f = c || [];
        a = a || {};
        var g = null != a.clockseq ? a.clockseq: q,
        h = null != a.msecs ? a.msecs: (new Date).getTime(),
        i = null != a.nsecs ? a.nsecs: s + 1,
        j = h - r + (i - s) / 1e4;
        if (0 > j && null == a.clockseq && (g = g + 1 & 16383), (0 > j || h > r) && null == a.nsecs && (i = 0), i >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        r = h,
        s = i,
        q = g,
        h += 122192928e5;
        var k = (1e4 * (268435455 & h) + i) % 4294967296;
        f[e++] = k >>> 24 & 255,
        f[e++] = k >>> 16 & 255,
        f[e++] = k >>> 8 & 255,
        f[e++] = 255 & k;
        var l = h / 4294967296 * 1e4 & 268435455;
        f[e++] = l >>> 8 & 255,
        f[e++] = 255 & l,
        f[e++] = l >>> 24 & 15 | 16,
        f[e++] = l >>> 16 & 255,
        f[e++] = g >>> 8 | 128,
        f[e++] = 255 & g;
        for (var m = a.node || p,
        n = 0; 6 > n; n++) f[e + n] = m[n];
        return c ? c: b(f)
    }
    function d(a, c, d) {
        var f = c && d || 0;
        "string" == typeof a && (c = "binary" == a ? new k(16) : null, a = null),
        a = a || {};
        var g = a.random || (a.rng || e)();
        if (g[6] = 15 & g[6] | 64, g[8] = 63 & g[8] | 128, c) for (var h = 0; 16 > h; h++) c[f + h] = g[h];
        return c || b(g)
    }
    var e, f = this;
    if ("function" == typeof require) try {
        var g = require("crypto").randomBytes;
        e = g &&
        function() {
            return g(16)
        }
    } catch(h) {}
    if (!e && f.crypto && crypto.getRandomValues) {
        var i = new Uint8Array(16);
        e = function() {
            return crypto.getRandomValues(i),
            i
        }
    }
    if (!e) {
        var j = new Array(16);
        e = function() {
            for (var a, b = 0; 16 > b; b++) 0 === (3 & b) && (a = 4294967296 * Math.random()),
            j[b] = a >>> ((3 & b) << 3) & 255;
            return j
        }
    }
    for (var k = "function" == typeof Buffer ? Buffer: Array, l = [], m = {},
    n = 0; 256 > n; n++) l[n] = (n + 256).toString(16).substr(1),
    m[l[n]] = n;
    var o = e(),
    p = [1 | o[0], o[1], o[2], o[3], o[4], o[5]],
    q = 16383 & (o[6] << 8 | o[7]),
    r = 0,
    s = 0,
    t = d;
    if (t.v1 = c, t.v4 = d, t.parse = a, t.unparse = b, t.BufferClass = k, "function" == typeof define && define.amd) define(function() {
        return t
    });
    else if ("undefined" != typeof module && module.exports) module.exports = t;
    else {
        var u = f.uuid;
        t.noConflict = function() {
            return f.uuid = u,
            t
        },
        f.uuid = t
    }
}.call(this);
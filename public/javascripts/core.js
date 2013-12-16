/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a, b) {
    function cy(a) {
        return f.isWindow(a) ? a: a.nodeType === 9 ? a.defaultView || a.parentWindow: !1
    }
    function cu(a) {
        if (!cj[a]) {
            var b = c.body,
            d = f("<" + a + ">").appendTo(b),
            e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                ck || (ck = c.createElement("iframe"), ck.frameBorder = ck.width = ck.height = 0),
                b.appendChild(ck);
                if (!cl || !ck.createElement) cl = (ck.contentWindow || ck.contentDocument).document,
                cl.write((f.support.boxModel ? "<!doctype html>": "") + "<html><body>"),
                cl.close();
                d = cl.createElement(a),
                cl.body.appendChild(d),
                e = f.css(d, "display"),
                b.removeChild(ck)
            }
            cj[a] = e
        }
        return cj[a]
    }
    function ct(a, b) {
        var c = {};
        f.each(cp.concat.apply([], cp.slice(0, b)),
        function() {
            c[this] = a
        });
        return c
    }
    function cs() {
        cq = b
    }
    function cr() {
        setTimeout(cs, 0);
        return cq = f.now()
    }
    function ci() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch(b) {}
    }
    function ch() {
        try {
            return new a.XMLHttpRequest
        } catch(b) {}
    }
    function cb(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes,
        e = {},
        g, h, i = d.length,
        j, k = d[0],
        l,
        m,
        n,
        o,
        p;
        for (g = 1; g < i; g++) {
            if (g === 1) for (h in a.converters) typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k,
            k = d[g];
            if (k === "*") k = l;
            else if (l !== "*" && l !== k) {
                m = l + " " + k,
                n = e[m] || e["* " + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o],
                                o === !0 ? n = p: p === !0 && (n = o);
                                break
                            }
                        }
                    }
                } ! n && !p && f.error("No conversion from " + m.replace(" ", " to ")),
                n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }
    function ca(a, c, d) {
        var e = a.contents,
        f = a.dataTypes,
        g = a.responseFields,
        h, i, j, k;
        for (i in g) i in d && (c[g[i]] = d[i]);
        while (f[0] === "*") f.shift(),
        h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h) for (i in e) if (e[i] && e[i].test(h)) {
            f.unshift(i);
            break
        }
        if (f[0] in d) j = f[0];
        else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }
    function b_(a, b, c, d) {
        if (f.isArray(b)) f.each(b,
        function(b, e) {
            c || bD.test(a) ? d(a, e) : b_(a + "[" + (typeof e == "object" ? b: "") + "]", e, c, d)
        });
        else if (!c && f.type(b) === "object") for (var e in b) b_(a + "[" + e + "]", b[e], c, d);
        else d(a, b)
    }
    function b$(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((g[d] ? a: e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }
    function bZ(a, c, d, e, f, g) {
        f = f || c.dataTypes[0],
        g = g || {},
        g[f] = !0;
        var h = a[f],
        i = 0,
        j = h ? h.length: 0,
        k = a === bS,
        l;
        for (; i < j && (k || !l); i++) l = h[i](c, d, e),
        typeof l == "string" && (!k || g[l] ? l = b: (c.dataTypes.unshift(l), l = bZ(a, c, d, e, l, g))); (k || !l) && !g["*"] && (l = bZ(a, c, d, e, "*", g));
        return l
    }
    function bY(a) {
        return function(b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bO),
                e = 0,
                g = d.length,
                h,
                i,
                j;
                for (; e < g; e++) h = d[e],
                j = /^\+/.test(h),
                j && (h = h.substr(1) || "*"),
                i = a[h] = a[h] || [],
                i[j ? "unshift": "push"](c)
            }
        }
    }
    function bB(a, b, c) {
        var d = b === "width" ? a.offsetWidth: a.offsetHeight,
        e = b === "width" ? 1 : 0,
        g = 4;
        if (d > 0) {
            if (c !== "border") for (; e < g; e += 2) c || (d -= parseFloat(f.css(a, "padding" + bx[e])) || 0),
            c === "margin" ? d += parseFloat(f.css(a, c + bx[e])) || 0 : d -= parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0;
            return d + "px"
        }
        d = by(a, b);
        if (d < 0 || d == null) d = a.style[b];
        if (bt.test(d)) return d;
        d = parseFloat(d) || 0;
        if (c) for (; e < g; e += 2) d += parseFloat(f.css(a, "padding" + bx[e])) || 0,
        c !== "padding" && (d += parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0),
        c === "margin" && (d += parseFloat(f.css(a, c + bx[e])) || 0);
        return d + "px"
    }
    function bo(a) {
        var b = c.createElement("div");
        bh.appendChild(b),
        b.innerHTML = a.outerHTML;
        return b.firstChild
    }
    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
    }
    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked
    }
    function bl(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }
    function bk(a, b) {
        var c;
        b.nodeType === 1 && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? b.outerHTML = a.outerHTML: c !== "input" || a.type !== "checkbox" && a.type !== "radio" ? c === "option" ? b.selected = a.defaultSelected: c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue: c === "script" && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(f.expando), b.removeAttribute("_submit_attached"), b.removeAttribute("_change_attached"))
    }
    function bj(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c, d, e, g = f._data(a),
            h = f._data(b, g),
            i = g.events;
            if (i) {
                delete h.handle,
                h.events = {};
                for (c in i) for (d = 0, e = i[c].length; d < e; d++) f.event.add(b, c, i[c][d])
            }
            h.data && (h.data = f.extend({},
            h.data))
        }
    }
    function bi(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function U(a) {
        var b = V.split("|"),
        c = a.createDocumentFragment();
        if (c.createElement) while (b.length) c.createElement(b.pop());
        return c
    }
    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) return f.grep(a,
        function(a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return f.grep(a,
        function(a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = f.grep(a,
            function(a) {
                return a.nodeType === 1
            });
            if (O.test(b)) return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a,
        function(a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }
    function S(a) {
        return ! a || !a.parentNode || a.parentNode.nodeType === 11
    }
    function K() {
        return ! 0
    }
    function J() {
        return ! 1
    }
    function n(a, b, c) {
        var d = b + "defer",
        e = b + "queue",
        g = b + "mark",
        h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function() { ! f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        },
        0)
    }
    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b])) continue;
            if (b !== "toJSON") return ! 1
        }
        return ! 0
    }
    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null: f.isNumeric(d) ? +d: j.test(d) ? f.parseJSON(d) : d
                } catch(g) {}
                f.data(a, c, d)
            } else d = b
        }
        return d
    }
    function h(a) {
        var b = g[a] = {},
        c,
        d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++) b[a[c]] = !0;
        return b
    }
    var c = a.document,
    d = a.navigator,
    e = a.location,
    f = function() {
        function J() {
            if (!e.isReady) {
                try {
                    c.documentElement.doScroll("left")
                } catch(a) {
                    setTimeout(J, 1);
                    return
                }
                e.ready()
            }
        }
        var e = function(a, b) {
            return new e.fn.init(a, b, h)
        },
        f = a.jQuery,
        g = a.$,
        h,
        i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        j = /\S/,
        k = /^\s+/,
        l = /\s+$/,
        m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        n = /^[\],:{}\s]*$/,
        o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        q = /(?:^|:|,)(?:\s*\[)+/g,
        r = /(webkit)[ \/]([\w.]+)/,
        s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        t = /(msie) ([\w.]+)/,
        u = /(mozilla)(?:.*? rv:([\w.]+))?/,
        v = /-([a-z]|[0-9])/ig,
        w = /^-ms-/,
        x = function(a, b) {
            return (b + "").toUpperCase()
        },
        y = d.userAgent,
        z,
        A,
        B,
        C = Object.prototype.toString,
        D = Object.prototype.hasOwnProperty,
        E = Array.prototype.push,
        F = Array.prototype.slice,
        G = String.prototype.trim,
        H = Array.prototype.indexOf,
        I = {};
        e.fn = e.prototype = {
            constructor: e,
            init: function(a, d, f) {
                var g, h, j, k;
                if (!a) return this;
                if (a.nodeType) {
                    this.context = this[0] = a,
                    this.length = 1;
                    return this
                }
                if (a === "body" && !d && c.body) {
                    this.context = c,
                    this[0] = c.body,
                    this.selector = a,
                    this.length = 1;
                    return this
                }
                if (typeof a == "string") {
                    a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                    if (g && (g[1] || !d)) {
                        if (g[1]) {
                            d = d instanceof e ? d[0] : d,
                            k = d ? d.ownerDocument || d: c,
                            j = m.exec(a),
                            j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                            return e.merge(this, a)
                        }
                        h = c.getElementById(g[2]);
                        if (h && h.parentNode) {
                            if (h.id !== g[2]) return f.find(a);
                            this.length = 1,
                            this[0] = h
                        }
                        this.context = c,
                        this.selector = a;
                        return this
                    }
                    return ! d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                }
                if (e.isFunction(a)) return f.ready(a);
                a.selector !== b && (this.selector = a.selector, this.context = a.context);
                return e.makeArray(a, this)
            },
            selector: "",
            jquery: "1.7.2",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return F.call(this, 0)
            },
            get: function(a) {
                return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
            },
            pushStack: function(a, b, c) {
                var d = this.constructor();
                e.isArray(a) ? E.apply(d, a) : e.merge(d, a),
                d.prevObject = this,
                d.context = this.context,
                b === "find" ? d.selector = this.selector + (this.selector ? " ": "") + c: b && (d.selector = this.selector + "." + b + "(" + c + ")");
                return d
            },
            each: function(a, b) {
                return e.each(this, a, b)
            },
            ready: function(a) {
                e.bindReady(),
                A.add(a);
                return this
            },
            eq: function(a) {
                a = +a;
                return a === -1 ? this.slice(a) : this.slice(a, a + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq( - 1)
            },
            slice: function() {
                return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
            },
            map: function(a) {
                return this.pushStack(e.map(this,
                function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: E,
            sort: [].sort,
            splice: [].splice
        },
        e.fn.init.prototype = e.fn,
        e.extend = e.fn.extend = function() {
            var a, c, d, f, g, h, i = arguments[0] || {},
            j = 1,
            k = arguments.length,
            l = !1;
            typeof i == "boolean" && (l = i, i = arguments[1] || {},
            j = 2),
            typeof i != "object" && !e.isFunction(i) && (i = {}),
            k === j && (i = this, --j);
            for (; j < k; j++) if ((a = arguments[j]) != null) for (c in a) {
                d = i[c],
                f = a[c];
                if (i === f) continue;
                l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d: []) : h = d && e.isPlainObject(d) ? d: {},
                i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
            }
            return i
        },
        e.extend({
            noConflict: function(b) {
                a.$ === e && (a.$ = g),
                b && a.jQuery === e && (a.jQuery = f);
                return e
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? e.readyWait++:e.ready(!0)
            },
            ready: function(a) {
                if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                    if (!c.body) return setTimeout(e.ready, 1);
                    e.isReady = !0;
                    if (a !== !0 && --e.readyWait > 0) return;
                    A.fireWith(c, [e]),
                    e.fn.trigger && e(c).trigger("ready").off("ready")
                }
            },
            bindReady: function() {
                if (!A) {
                    A = e.Callbacks("once memory");
                    if (c.readyState === "complete") return setTimeout(e.ready, 1);
                    if (c.addEventListener) c.addEventListener("DOMContentLoaded", B, !1),
                    a.addEventListener("load", e.ready, !1);
                    else if (c.attachEvent) {
                        c.attachEvent("onreadystatechange", B),
                        a.attachEvent("onload", e.ready);
                        var b = !1;
                        try {
                            b = a.frameElement == null
                        } catch(d) {}
                        c.documentElement.doScroll && b && J()
                    }
                }
            },
            isFunction: function(a) {
                return e.type(a) === "function"
            },
            isArray: Array.isArray ||
            function(a) {
                return e.type(a) === "array"
            },
            isWindow: function(a) {
                return a != null && a == a.window
            },
            isNumeric: function(a) {
                return ! isNaN(parseFloat(a)) && isFinite(a)
            },
            type: function(a) {
                return a == null ? String(a) : I[C.call(a)] || "object"
            },
            isPlainObject: function(a) {
                if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) return ! 1;
                try {
                    if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) return ! 1
                } catch(c) {
                    return ! 1
                }
                var d;
                for (d in a);
                return d === b || D.call(a, d)
            },
            isEmptyObject: function(a) {
                for (var b in a) return ! 1;
                return ! 0
            },
            error: function(a) {
                throw new Error(a)
            },
            parseJSON: function(b) {
                if (typeof b != "string" || !b) return null;
                b = e.trim(b);
                if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) return (new Function("return " + b))();
                e.error("Invalid JSON: " + b)
            },
            parseXML: function(c) {
                if (typeof c != "string" || !c) return null;
                var d, f;
                try {
                    a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                } catch(g) {
                    d = b
                } (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                return d
            },
            noop: function() {},
            globalEval: function(b) {
                b && j.test(b) && (a.execScript ||
                function(b) {
                    a.eval.call(a, b)
                })(b)
            },
            camelCase: function(a) {
                return a.replace(w, "ms-").replace(v, x)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
            },
            each: function(a, c, d) {
                var f, g = 0,
                h = a.length,
                i = h === b || e.isFunction(a);
                if (d) {
                    if (i) {
                        for (f in a) if (c.apply(a[f], d) === !1) break
                    } else for (; g < h;) if (c.apply(a[g++], d) === !1) break
                } else if (i) {
                    for (f in a) if (c.call(a[f], f, a[f]) === !1) break
                } else for (; g < h;) if (c.call(a[g], g, a[g++]) === !1) break;
                return a
            },
            trim: G ?
            function(a) {
                return a == null ? "": G.call(a)
            }: function(a) {
                return a == null ? "": (a + "").replace(k, "").replace(l, "")
            },
            makeArray: function(a, b) {
                var c = b || [];
                if (a != null) {
                    var d = e.type(a);
                    a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
                }
                return c
            },
            inArray: function(a, b, c) {
                var d;
                if (b) {
                    if (H) return H.call(b, a, c);
                    d = b.length,
                    c = c ? c < 0 ? Math.max(0, d + c) : c: 0;
                    for (; c < d; c++) if (c in b && b[c] === a) return c
                }
                return - 1
            },
            merge: function(a, c) {
                var d = a.length,
                e = 0;
                if (typeof c.length == "number") for (var f = c.length; e < f; e++) a[d++] = c[e];
                else while (c[e] !== b) a[d++] = c[e++];
                a.length = d;
                return a
            },
            grep: function(a, b, c) {
                var d = [],
                e;
                c = !!c;
                for (var f = 0,
                g = a.length; f < g; f++) e = !!b(a[f], f),
                c !== e && d.push(a[f]);
                return d
            },
            map: function(a, c, d) {
                var f, g, h = [],
                i = 0,
                j = a.length,
                k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                if (k) for (; i < j; i++) f = c(a[i], i, d),
                f != null && (h[h.length] = f);
                else for (g in a) f = c(a[g], g, d),
                f != null && (h[h.length] = f);
                return h.concat.apply([], h)
            },
            guid: 1,
            proxy: function(a, c) {
                if (typeof c == "string") {
                    var d = a[c];
                    c = a,
                    a = d
                }
                if (!e.isFunction(a)) return b;
                var f = F.call(arguments, 2),
                g = function() {
                    return a.apply(c, f.concat(F.call(arguments)))
                };
                g.guid = a.guid = a.guid || g.guid || e.guid++;
                return g
            },
            access: function(a, c, d, f, g, h, i) {
                var j, k = d == null,
                l = 0,
                m = a.length;
                if (d && typeof d == "object") {
                    for (l in d) e.access(a, c, l, d[l], 1, h, f);
                    g = 1
                } else if (f !== b) {
                    j = i === b && e.isFunction(f),
                    k && (j ? (j = c, c = function(a, b, c) {
                        return j.call(e(a), c)
                    }) : (c.call(a, f), c = null));
                    if (c) for (; l < m; l++) c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i);
                    g = 1
                }
                return g ? a: k ? c.call(a) : m ? c(a[0], d) : h
            },
            now: function() {
                return (new Date).getTime()
            },
            uaMatch: function(a) {
                a = a.toLowerCase();
                var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                return {
                    browser: b[1] || "",
                    version: b[2] || "0"
                }
            },
            sub: function() {
                function a(b, c) {
                    return new a.fn.init(b, c)
                }
                e.extend(!0, a, this),
                a.superclass = this,
                a.fn = a.prototype = this(),
                a.fn.constructor = a,
                a.sub = this.sub,
                a.fn.init = function(d, f) {
                    f && f instanceof e && !(f instanceof a) && (f = a(f));
                    return e.fn.init.call(this, d, f, b)
                },
                a.fn.init.prototype = a.fn;
                var b = a(c);
                return a
            },
            browser: {}
        }),
        e.each("Boolean Number String Function Array Date RegExp Object".split(" "),
        function(a, b) {
            I["[object " + b + "]"] = b.toLowerCase()
        }),
        z = e.uaMatch(y),
        z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version),
        e.browser.webkit && (e.browser.safari = !0),
        j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/),
        h = e(c),
        c.addEventListener ? B = function() {
            c.removeEventListener("DOMContentLoaded", B, !1),
            e.ready()
        }: c.attachEvent && (B = function() {
            c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
        });
        return e
    } (),
    g = {};
    f.Callbacks = function(a) {
        a = a ? g[a] || h(a) : {};
        var c = [],
        d = [],
        e,
        i,
        j,
        k,
        l,
        m,
        n = function(b) {
            var d, e, g, h, i;
            for (d = 0, e = b.length; d < e; d++) g = b[d],
            h = f.type(g),
            h === "array" ? n(g) : h === "function" && (!a.unique || !p.has(g)) && c.push(g)
        },
        o = function(b, f) {
            f = f || [],
            e = !a.memory || [b, f],
            i = !0,
            j = !0,
            m = k || 0,
            k = 0,
            l = c.length;
            for (; c && m < l; m++) if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
                e = !0;
                break
            }
            j = !1,
            c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(), p.fireWith(e[0], e[1])))
        },
        p = {
            add: function() {
                if (c) {
                    var a = c.length;
                    n(arguments),
                    j ? l = c.length: e && e !== !0 && (k = a, o(e[0], e[1]))
                }
                return this
            },
            remove: function() {
                if (c) {
                    var b = arguments,
                    d = 0,
                    e = b.length;
                    for (; d < e; d++) for (var f = 0; f < c.length; f++) if (b[d] === c[f]) {
                        j && f <= l && (l--, f <= m && m--),
                        c.splice(f--, 1);
                        if (a.unique) break
                    }
                }
                return this
            },
            has: function(a) {
                if (c) {
                    var b = 0,
                    d = c.length;
                    for (; b < d; b++) if (a === c[b]) return ! 0
                }
                return ! 1
            },
            empty: function() {
                c = [];
                return this
            },
            disable: function() {
                c = d = e = b;
                return this
            },
            disabled: function() {
                return ! c
            },
            lock: function() {
                d = b,
                (!e || e === !0) && p.disable();
                return this
            },
            locked: function() {
                return ! d
            },
            fireWith: function(b, c) {
                d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c));
                return this
            },
            fire: function() {
                p.fireWith(this, arguments);
                return this
            },
            fired: function() {
                return !! i
            }
        };
        return p
    };
    var i = [].slice;
    f.extend({
        Deferred: function(a) {
            var b = f.Callbacks("once memory"),
            c = f.Callbacks("once memory"),
            d = f.Callbacks("memory"),
            e = "pending",
            g = {
                resolve: b,
                reject: c,
                notify: d
            },
            h = {
                done: b.add,
                fail: c.add,
                progress: d.add,
                state: function() {
                    return e
                },
                isResolved: b.fired,
                isRejected: c.fired,
                then: function(a, b, c) {
                    i.done(a).fail(b).progress(c);
                    return this
                },
                always: function() {
                    i.done.apply(i, arguments).fail.apply(i, arguments);
                    return this
                },
                pipe: function(a, b, c) {
                    return f.Deferred(function(d) {
                        f.each({
                            done: [a, "resolve"],
                            fail: [b, "reject"],
                            progress: [c, "notify"]
                        },
                        function(a, b) {
                            var c = b[0],
                            e = b[1],
                            g;
                            f.isFunction(c) ? i[a](function() {
                                g = c.apply(this, arguments),
                                g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d: this, [g])
                            }) : i[a](d[e])
                        })
                    }).promise()
                },
                promise: function(a) {
                    if (a == null) a = h;
                    else for (var b in h) a[b] = h[b];
                    return a
                }
            },
            i = h.promise({}),
            j;
            for (j in g) i[j] = g[j].fire,
            i[j + "With"] = g[j].fireWith;
            i.done(function() {
                e = "resolved"
            },
            c.disable, d.lock).fail(function() {
                e = "rejected"
            },
            b.disable, d.lock),
            a && a.call(i, i);
            return i
        },
        when: function(a) {
            function m(a) {
                return function(b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b,
                    j.notifyWith(k, e)
                }
            }
            function l(a) {
                return function(c) {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0) : c,
                    --g || j.resolveWith(j, b)
                }
            }
            var b = i.call(arguments, 0),
            c = 0,
            d = b.length,
            e = Array(d),
            g = d,
            h = d,
            j = d <= 1 && a && f.isFunction(a.promise) ? a: f.Deferred(),
            k = j.promise();
            if (d > 1) {
                for (; c < d; c++) b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
                g || j.resolveWith(j, b)
            } else j !== a && j.resolveWith(j, d ? [a] : []);
            return k
        }
    }),
    f.support = function() {
        var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement("div"),
        q = c.documentElement;
        p.setAttribute("className", "t"),
        p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",
        d = p.getElementsByTagName("*"),
        e = p.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) return {};
        g = c.createElement("select"),
        h = g.appendChild(c.createElement("option")),
        i = p.getElementsByTagName("input")[0],
        b = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: p.className !== "t",
            enctype: !!c.createElement("form").enctype,
            html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        },
        f.boxModel = b.boxModel = c.compatMode === "CSS1Compat",
        i.checked = !0,
        b.noCloneChecked = i.cloneNode(!0).checked,
        g.disabled = !0,
        b.optDisabled = !h.disabled;
        try {
            delete p.test
        } catch(r) {
            b.deleteExpando = !1
        } ! p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick",
        function() {
            b.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick")),
        i = c.createElement("input"),
        i.value = "t",
        i.setAttribute("type", "radio"),
        b.radioValue = i.value === "t",
        i.setAttribute("checked", "checked"),
        i.setAttribute("name", "t"),
        p.appendChild(i),
        j = c.createDocumentFragment(),
        j.appendChild(p.lastChild),
        b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked,
        b.appendChecked = i.checked,
        j.removeChild(i),
        j.appendChild(p);
        if (p.attachEvent) for (n in {
            submit: 1,
            change: 1,
            focusin: 1
        }) m = "on" + n,
        o = m in p,
        o || (p.setAttribute(m, "return;"), o = typeof p[m] == "function"),
        b[n + "Bubbles"] = o;
        j.removeChild(p),
        j = g = h = p = i = null,
        f(function() {
            var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName("body")[0]; ! u || (m = 1, t = "padding:0;margin:0;border:", r = "position:absolute;top:0;left:0;width:1px;height:1px;", s = t + "0;visibility:hidden;", n = "style='" + r + t + "5px solid #000;", q = "<div " + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div>" + "<table " + n + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", d = c.createElement("div"), d.style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:" + m + "px", u.insertBefore(d, u.firstChild), p = c.createElement("div"), d.appendChild(p), p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>", k = p.getElementsByTagName("td"), o = k[0].offsetHeight === 0, k[0].style.display = "", k[1].style.display = "none", b.reliableHiddenOffsets = o && k[0].offsetHeight === 0, a.getComputedStyle && (p.innerHTML = "", l = c.createElement("div"), l.style.width = "0", l.style.marginRight = "0", p.style.width = "2px", p.appendChild(l), b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || {
                marginRight: 0
            }).marginRight, 10) || 0) === 0), typeof p.style.zoom != "undefined" && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, b.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = r + s, p.innerHTML = q, e = p.firstChild, g = e.firstChild, i = e.nextSibling.firstChild.firstChild, j = {
                doesNotAddBorder: g.offsetTop !== 5,
                doesAddBorderForTableAndCells: i.offsetTop === 5
            },
            g.style.position = "fixed", g.style.top = "20px", j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15, g.style.position = g.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5, j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m, a.getComputedStyle && (p.style.marginTop = "1%", b.pixelMargin = (a.getComputedStyle(p, null) || {
                marginTop: 0
            }).marginTop !== "1%"), typeof d.style.zoom != "undefined" && (d.style.zoom = 1), u.removeChild(d), l = p = d = null, f.extend(b, j))
        });
        return b
    } ();
    var j = /^(?:\{.*\}|\[.*\])$/,
    k = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !! a && !m(a)
        },
        data: function(a, c, d, e) {
            if ( !! f.acceptData(a)) {
                var g, h, i, j = f.expando,
                k = typeof c == "string",
                l = a.nodeType,
                m = l ? f.cache: a,
                n = l ? a[j] : a[j] && j,
                o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) return;
                n || (l ? a[j] = n = ++f.uuid: n = j),
                m[n] || (m[n] = {},
                l || (m[n].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function") e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
                g = h = m[n],
                e || (h.data || (h.data = {}), h = h.data),
                d !== b && (h[f.camelCase(c)] = d);
                if (o && !h[c]) return g.events;
                k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
                return i
            }
        },
        removeData: function(a, b, c) {
            if ( !! f.acceptData(a)) {
                var d, e, g, h = f.expando,
                i = a.nodeType,
                j = i ? f.cache: a,
                k = i ? a[h] : h;
                if (!j[k]) return;
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                        for (e = 0, g = b.length; e < g; e++) delete d[b[e]];
                        if (! (c ? m: f.isEmptyObject)(d)) return
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k])) return
                }
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null,
                i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
            }
        },
        _data: function(a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b
            }
            return ! 0
        }
    }),
    f.fn.extend({
        data: function(a, c) {
            var d, e, g, h, i, j = this[0],
            k = 0,
            m = null;
            if (a === b) {
                if (this.length) {
                    m = f.data(j);
                    if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) {
                        g = j.attributes;
                        for (i = g.length; k < i; k++) h = g[k].name,
                        h.indexOf("data-") === 0 && (h = f.camelCase(h.substring(5)), l(j, h, m[h]));
                        f._data(j, "parsedAttrs", !0)
                    }
                }
                return m
            }
            if (typeof a == "object") return this.each(function() {
                f.data(this, a)
            });
            d = a.split(".", 2),
            d[1] = d[1] ? "." + d[1] : "",
            e = d[1] + "!";
            return f.access(this,
            function(c) {
                if (c === b) {
                    m = this.triggerHandler("getData" + e, [d[0]]),
                    m === b && j && (m = f.data(j, a), m = l(j, a, m));
                    return m === b && d[1] ? this.data(d[0]) : m
                }
                d[1] = c,
                this.each(function() {
                    var b = f(this);
                    b.triggerHandler("setData" + e, d),
                    f.data(this, a, c),
                    b.triggerHandler("changeData" + e, d)
                })
            },
            null, c, arguments.length > 1, null, !1)
        },
        removeData: function(a) {
            return this.each(function() {
                f.removeData(this, a)
            })
        }
    }),
    f.extend({
        _mark: function(a, b) {
            a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
        },
        _unmark: function(a, b, c) {
            a !== !0 && (c = b, b = a, a = !1);
            if (b) {
                c = c || "fx";
                var d = c + "mark",
                e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
            }
        },
        queue: function(a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue",
                d = f._data(a, b),
                c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
                return d || []
            }
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = f.queue(a, b),
            d = c.shift(),
            e = {};
            d === "inprogress" && (d = c.shift()),
            d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a,
            function() {
                f.dequeue(a, b)
            },
            e)),
            c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
        }
    }),
    f.fn.extend({
        queue: function(a, c) {
            var d = 2;
            typeof a != "string" && (c = a, a = "fx", d--);
            if (arguments.length < d) return f.queue(this[0], a);
            return c === b ? this: this.each(function() {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                f.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            a = f.fx ? f.fx.speeds[a] || a: a,
            b = b || "fx";
            return this.queue(b,
            function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            function m() {--h || d.resolveWith(e, [e])
            }
            typeof a != "string" && (c = a, a = b),
            a = a || "fx";
            var d = f.Deferred(),
            e = this,
            g = e.length,
            h = 1,
            i = a + "defer",
            j = a + "queue",
            k = a + "mark",
            l;
            while (g--) if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) h++,
            l.add(m);
            m();
            return d.promise(c)
        }
    });
    var o = /[\n\t\r]/g,
    p = /\s+/,
    q = /\r/g,
    r = /^(?:button|input)$/i,
    s = /^(?:button|input|object|select|textarea)$/i,
    t = /^a(?:rea)?$/i,
    u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    v = f.support.getSetAttribute,
    w, x, y;
    f.fn.extend({
        attr: function(a, b) {
            return f.access(this, f.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                f.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return f.access(this, f.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            a = f.propFix[a] || a;
            return this.each(function() {
                try {
                    this[a] = b,
                    delete this[a]
                } catch(c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string") {
                b = a.split(p);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1) if (!e.className && b.length === 1) e.className = a;
                    else {
                        g = " " + e.className + " ";
                        for (h = 0, i = b.length; h < i; h++)~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                        e.className = f.trim(g)
                    }
                }
            }
            return this
        },
        removeClass: function(a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(p);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className) if (a) {
                        h = (" " + g.className + " ").replace(o, " ");
                        for (i = 0, j = c.length; i < j; i++) h = h.replace(" " + c[i] + " ", " ");
                        g.className = f.trim(h)
                    } else g.className = ""
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
            d = typeof b == "boolean";
            if (f.isFunction(a)) return this.each(function(c) {
                f(this).toggleClass(a.call(this, c, this.className, b), b)
            });
            return this.each(function() {
                if (c === "string") {
                    var e, g = 0,
                    h = f(this),
                    i = b,
                    j = a.split(p);
                    while (e = j[g++]) i = d ? i: !h.hasClass(e),
                    h[i ? "addClass": "removeClass"](e)
                } else if (c === "undefined" || c === "boolean") this.className && f._data(this, "__className__", this.className),
                this.className = this.className || a === !1 ? "": f._data(this, "__className__") || ""
            })
        },
        hasClass: function(a) {
            var b = " " + a + " ",
            c = 0,
            d = this.length;
            for (; c < d; c++) if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) return ! 0;
            return ! 1
        },
        val: function(a) {
            var c, d, e, g = this[0]; {
                if ( !! arguments.length) {
                    e = f.isFunction(a);
                    return this.each(function(d) {
                        var g = f(this),
                        h;
                        if (this.nodeType === 1) {
                            e ? h = a.call(this, d, g.val()) : h = a,
                            h == null ? h = "": typeof h == "number" ? h += "": f.isArray(h) && (h = f.map(h,
                            function(a) {
                                return a == null ? "": a + ""
                            })),
                            c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()];
                            if (!c || !("set" in c) || c.set(this, h, "value") === b) this.value = h
                        }
                    })
                }
                if (g) {
                    c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()];
                    if (c && "get" in c && (d = c.get(g, "value")) !== b) return d;
                    d = g.value;
                    return typeof d == "string" ? d.replace(q, "") : d == null ? "": d
                }
            }
        }
    }),
    f.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return ! b || b.specified ? a.value: a.text
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e, g = a.selectedIndex,
                    h = [],
                    i = a.options,
                    j = a.type === "select-one";
                    if (g < 0) return null;
                    c = j ? g: 0,
                    d = j ? g + 1 : i.length;
                    for (; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled: e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                            b = f(e).val();
                            if (j) return b;
                            h.push(b)
                        }
                    }
                    if (j && !h.length && i.length) return f(i[g]).val();
                    return h
                },
                set: function(a, b) {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function() {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }),
                    c.length || (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(a, c, d, e) {
            var g, h, i, j = a.nodeType;
            if ( !! a && j !== 3 && j !== 8 && j !== 2) {
                if (e && c in f.attrFn) return f(a)[c](d);
                if (typeof a.getAttribute == "undefined") return f.prop(a, c, d);
                i = j !== 1 || !f.isXMLDoc(a),
                i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x: w));
                if (d !== b) {
                    if (d === null) {
                        f.removeAttr(a, c);
                        return
                    }
                    if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) return g;
                    a.setAttribute(c, "" + d);
                    return d
                }
                if (h && "get" in h && i && (g = h.get(a, c)) !== null) return g;
                g = a.getAttribute(c);
                return g === null ? b: g
            }
        },
        removeAttr: function(a, b) {
            var c, d, e, g, h, i = 0;
            if (b && a.nodeType === 1) {
                d = b.toLowerCase().split(p),
                g = d.length;
                for (; i < g; i++) e = d[i],
                e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a, e, ""), a.removeAttribute(v ? e: c), h && c in a && (a[c] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (r.test(a.nodeName) && a.parentNode) f.error("type property can't be changed");
                    else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b),
                        c && (a.value = c);
                        return b
                    }
                }
            },
            value: {
                get: function(a, b) {
                    if (w && f.nodeName(a, "button")) return w.get(a, b);
                    return b in a ? a.value: null
                },
                set: function(a, b, c) {
                    if (w && f.nodeName(a, "button")) return w.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, d) {
            var e, g, h, i = a.nodeType;
            if ( !! a && i !== 3 && i !== 8 && i !== 2) {
                h = i !== 1 || !f.isXMLDoc(a),
                h && (c = f.propFix[c] || c, g = f.propHooks[c]);
                return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e: a[c] = d: g && "get" in g && (e = g.get(a, c)) !== null ? e: a[c]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }),
    f.attrHooks.tabindex = f.propHooks.tabIndex,
    x = {
        get: function(a, c) {
            var d, e = f.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function(a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
            return c
        }
    },
    v || (y = {
        name: !0,
        id: !0,
        coords: !0
    },
    w = f.valHooks.button = {
        get: function(a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && (y[c] ? d.nodeValue !== "": d.specified) ? d.nodeValue: b
        },
        set: function(a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    },
    f.attrHooks.tabindex.set = w.set, f.each(["width", "height"],
    function(a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function(a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    }), f.attrHooks.contenteditable = {
        get: w.get,
        set: function(a, b, c) {
            b === "" && (b = "false"),
            w.set(a, b, c)
        }
    }),
    f.support.hrefNormalized || f.each(["href", "src", "width", "height"],
    function(a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function(a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b: d
            }
        })
    }),
    f.support.style || (f.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function(a, b) {
            return a.style.cssText = "" + b
        }
    }),
    f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })),
    f.support.enctype || (f.propFix.enctype = "encoding"),
    f.support.checkOn || f.each(["radio", "checkbox"],
    function() {
        f.valHooks[this] = {
            get: function(a) {
                return a.getAttribute("value") === null ? "on": a.value
            }
        }
    }),
    f.each(["radio", "checkbox"],
    function() {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function(a, b) {
                if (f.isArray(b)) return a.checked = f.inArray(f(a).val(), b) >= 0
            }
        })
    });
    var z = /^(?:textarea|input|select)$/i,
    A = /^([^\.]*)?(?:\.(.+))?$/,
    B = /(?:^|\s)hover(\.\S+)?\b/,
    C = /^key/,
    D = /^(?:mouse|contextmenu)|click/,
    E = /^(?:focusinfocus|focusoutblur)$/,
    F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
    G = function(a) {
        var b = F.exec(a);
        b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
        return b
    },
    H = function(a, b) {
        var c = a.attributes || {};
        return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
    },
    I = function(a) {
        return f.event.special.hover ? a: a.replace(B, "mouseenter$1 mouseleave$1")
    };
    f.event = {
        add: function(a, c, d, e, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s;
            if (! (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
                d.handler && (p = d, d = p.handler, g = p.selector),
                d.guid || (d.guid = f.guid++),
                j = h.events,
                j || (h.events = j = {}),
                i = h.handle,
                i || (h.handle = i = function(a) {
                    return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
                },
                i.elem = a),
                c = f.trim(I(c)).split(" ");
                for (k = 0; k < c.length; k++) {
                    l = A.exec(c[k]) || [],
                    m = l[1],
                    n = (l[2] || "").split(".").sort(),
                    s = f.event.special[m] || {},
                    m = (g ? s.delegateType: s.bindType) || m,
                    s = f.event.special[m] || {},
                    o = f.extend({
                        type: m,
                        origType: l[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: g,
                        quick: g && G(g),
                        namespace: n.join(".")
                    },
                    p),
                    r = j[m];
                    if (!r) {
                        r = j[m] = [],
                        r.delegateCount = 0;
                        if (!s.setup || s.setup.call(a, e, n, i) === !1) a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                    }
                    s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)),
                    g ? r.splice(r.delegateCount++, 0, o) : r.push(o),
                    f.event.global[m] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function(a, b, c, d, e) {
            var g = f.hasData(a) && f._data(a),
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s;
            if ( !! g && !!(o = g.events)) {
                b = f.trim(I(b || "")).split(" ");
                for (h = 0; h < b.length; h++) {
                    i = A.exec(b[h]) || [],
                    j = k = i[1],
                    l = i[2];
                    if (!j) {
                        for (j in o) f.event.remove(a, j + b[h], c, d, !0);
                        continue
                    }
                    p = f.event.special[j] || {},
                    j = (d ? p.delegateType: p.bindType) || j,
                    r = o[j] || [],
                    m = r.length,
                    l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    for (n = 0; n < r.length; n++) s = r[n],
                    (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s));
                    r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
                }
                f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(c, d, e, g) {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                var h = c.type || c,
                i = [],
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q,
                r,
                s;
                if (E.test(h + f.event.triggered)) return;
                h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0),
                h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
                if ((!e || f.event.customEvent[h]) && !f.event.global[h]) return;
                c = typeof c == "object" ? c[f.expando] ? c: new f.Event(h, c) : new f.Event(h),
                c.type = h,
                c.isTrigger = !0,
                c.exclusive = k,
                c.namespace = i.join("."),
                c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null,
                o = h.indexOf(":") < 0 ? "on" + h: "";
                if (!e) {
                    j = f.cache;
                    for (l in j) j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                    return
                }
                c.result = b,
                c.target || (c.target = e),
                d = d != null ? f.makeArray(d) : [],
                d.unshift(c),
                p = f.event.special[h] || {};
                if (p.trigger && p.trigger.apply(e, d) === !1) return;
                r = [[e, p.bindType || h]];
                if (!g && !p.noBubble && !f.isWindow(e)) {
                    s = p.delegateType || h,
                    m = E.test(s + h) ? e: e.parentNode,
                    n = null;
                    for (; m; m = m.parentNode) r.push([m, s]),
                    n = m;
                    n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                }
                for (l = 0; l < r.length && !c.isPropagationStopped(); l++) m = r[l][0],
                c.type = r[l][1],
                q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"),
                q && q.apply(m, d),
                q = o && m[o],
                q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
                c.type = h,
                !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
                return c.result
            }
        },
        dispatch: function(c) {
            c = f.event.fix(c || a.event);
            var d = (f._data(this, "events") || {})[c.type] || [],
            e = d.delegateCount,
            g = [].slice.call(arguments, 0),
            h = !c.exclusive && !c.namespace,
            i = f.event.special[c.type] || {},
            j = [],
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u;
            g[0] = c,
            c.delegateTarget = this;
            if (!i.preDispatch || i.preDispatch.call(this, c) !== !1) {
                if (e && (!c.button || c.type !== "click")) {
                    n = f(this),
                    n.context = this.ownerDocument || this;
                    for (m = c.target; m != this; m = m.parentNode || this) if (m.disabled !== !0) {
                        p = {},
                        r = [],
                        n[0] = m;
                        for (k = 0; k < e; k++) s = d[k],
                        t = s.selector,
                        p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)),
                        p[t] && r.push(s);
                        r.length && j.push({
                            elem: m,
                            matches: r
                        })
                    }
                }
                d.length > e && j.push({
                    elem: this,
                    matches: d.slice(e)
                });
                for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
                    q = j[k],
                    c.currentTarget = q.elem;
                    for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) {
                        s = q.matches[l];
                        if (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace)) c.data = s.data,
                        c.handleObj = s,
                        o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g),
                        o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation()))
                    }
                }
                i.postDispatch && i.postDispatch.call(this, c);
                return c.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                a.which == null && (a.which = b.charCode != null ? b.charCode: b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, d) {
                var e, f, g, h = d.button,
                i = d.fromElement;
                a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)),
                !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement: i),
                !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                return a
            }
        },
        fix: function(a) {
            if (a[f.expando]) return a;
            var d, e, g = a,
            h = f.event.fixHooks[a.type] || {},
            i = h.props ? this.props.concat(h.props) : this.props;
            a = f.Event(g);
            for (d = i.length; d;) e = i[--d],
            a[e] = g[e];
            a.target || (a.target = g.srcElement || c),
            a.target.nodeType === 3 && (a.target = a.target.parentNode),
            a.metaKey === b && (a.metaKey = a.ctrlKey);
            return h.filter ? h.filter(a, g) : a
        },
        special: {
            ready: {
                setup: f.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function(a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = f.extend(new f.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    f.event.handle = f.event.dispatch,
    f.removeEvent = c.removeEventListener ?
    function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }: function(a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    },
    f.Event = function(a, b) {
        if (! (this instanceof f.Event)) return new f.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K: J) : this.type = a,
        b && f.extend(this, b),
        this.timeStamp = a && a.timeStamp || f.now(),
        this[f.expando] = !0
    },
    f.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = K;
            var a = this.originalEvent; ! a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = K;
            var a = this.originalEvent; ! a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = K,
            this.stopPropagation()
        },
        isDefaultPrevented: J,
        isPropagationStopped: J,
        isImmediatePropagationStopped: J
    },
    f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(a, b) {
        f.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c = this,
                d = a.relatedTarget,
                e = a.handleObj,
                g = e.selector,
                h;
                if (!d || d !== c && !f.contains(c, d)) a.type = e.origType,
                h = e.handler.apply(this, arguments),
                a.type = b;
                return h
            }
        }
    }),
    f.support.submitBubbles || (f.event.special.submit = {
        setup: function() {
            if (f.nodeName(this, "form")) return ! 1;
            f.event.add(this, "click._submit keypress._submit",
            function(a) {
                var c = a.target,
                d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form: b;
                d && !d._submit_attached && (f.event.add(d, "submit._submit",
                function(a) {
                    a._submit_bubble = !0
                }), d._submit_attached = !0)
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            if (f.nodeName(this, "form")) return ! 1;
            f.event.remove(this, "._submit")
        }
    }),
    f.support.changeBubbles || (f.event.special.change = {
        setup: function() {
            if (z.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") f.event.add(this, "propertychange._change",
                function(a) {
                    a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }),
                f.event.add(this, "click._change",
                function(a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
                });
                return ! 1
            }
            f.event.add(this, "beforeactivate._change",
            function(a) {
                var b = a.target;
                z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change",
                function(a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
                }), b._change_attached = !0)
            })
        },
        handle: function(a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            f.event.remove(this, "._change");
            return z.test(this.nodeName)
        }
    }),
    f.support.focusinBubbles || f.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(a, b) {
        var d = 0,
        e = function(a) {
            f.event.simulate(b, a.target, f.event.fix(a), !0)
        };
        f.event.special[b] = {
            setup: function() {
                d++===0 && c.addEventListener(a, e, !0)
            },
            teardown: function() {--d === 0 && c.removeEventListener(a, e, !0)
            }
        }
    }),
    f.fn.extend({
        on: function(a, c, d, e, g) {
            var h, i;
            if (typeof a == "object") {
                typeof c != "string" && (d = d || c, c = b);
                for (i in a) this.on(i, c, d, a[i], g);
                return this
            }
            d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
            if (e === !1) e = J;
            else if (!e) return this;
            g === 1 && (h = e, e = function(a) {
                f().off(a);
                return h.apply(this, arguments)
            },
            e.guid = h.guid || (h.guid = f.guid++));
            return this.each(function() {
                f.event.add(this, a, e, d, c)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, c, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e = a.handleObj;
                f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace: e.origType, e.selector, e.handler);
                return this
            }
            if (typeof a == "object") {
                for (var g in a) this.off(g, c, a[g]);
                return this
            }
            if (c === !1 || typeof c == "function") d = c,
            c = b;
            d === !1 && (d = J);
            return this.each(function() {
                f.event.remove(this, a, d, c)
            })
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        live: function(a, b, c) {
            f(this.context).on(a, this.selector, b, c);
            return this
        },
        die: function(a, b) {
            f(this.context).off(a, this.selector || "**", b);
            return this
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
        },
        trigger: function(a, b) {
            return this.each(function() {
                f.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            if (this[0]) return f.event.trigger(a, b, this[0], !0)
        },
        toggle: function(a) {
            var b = arguments,
            c = a.guid || f.guid++,
            d = 0,
            e = function(c) {
                var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                f._data(this, "lastToggle" + a.guid, e + 1),
                c.preventDefault();
                return b[e].apply(this, arguments) || !1
            };
            e.guid = c;
            while (d < b.length) b[d++].guid = c;
            return this.click(e)
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }),
    f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(a, b) {
        f.fn[b] = function(a, c) {
            c == null && (c = a, a = null);
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        },
        f.attrFn && (f.attrFn[b] = !0),
        C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks),
        D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
    }),
    function() {
        function x(a, b, c, e, f, g) {
            for (var h = 0,
            i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        if (j.nodeType === 1) {
                            g || (j[d] = c, j.sizset = h);
                            if (typeof b != "string") {
                                if (j === b) {
                                    k = !0;
                                    break
                                }
                            } else if (m.filter(b, [j]).length > 0) {
                                k = j;
                                break
                            }
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }
        function w(a, b, c, e, f, g) {
            for (var h = 0,
            i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                        if (j.nodeName.toLowerCase() === b) {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }
        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        d = "sizcache" + (Math.random() + "").replace(".", ""),
        e = 0,
        g = Object.prototype.toString,
        h = !1,
        i = !0,
        j = /\\/g,
        k = /\r\n/g,
        l = /\W/; [0, 0].sort(function() {
            i = !1;
            return 0
        });
        var m = function(b, d, e, f) {
            e = e || [],
            d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9) return [];
            if (!b || typeof b != "string") return e;
            var i, j, k, l, n, q, r, t, u = !0,
            v = m.isXML(d),
            w = [],
            x = b;
            do {
                a.exec(""), i = a.exec(x);
                if (i) {
                    x = i[3],
                    w.push(i[1]);
                    if (i[2]) {
                        l = i[3];
                        break
                    }
                }
            } while ( i );
            if (w.length > 1 && p.exec(b)) if (w.length === 2 && o.relative[w[0]]) j = y(w[0] + w[1], d, f);
            else {
                j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                while (w.length) b = w.shift(),
                o.relative[b] && (b += w.shift()),
                j = y(b, j, f)
            } else { ! f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                if (d) {
                    n = f ? {
                        expr: w.pop(),
                        set: s(f)
                    }: m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode: d, v),
                    j = n.expr ? m.filter(n.expr, n.set) : n.set,
                    w.length > 0 ? k = s(j) : u = !1;
                    while (w.length) q = w.pop(),
                    r = q,
                    o.relative[q] ? r = w.pop() : q = "",
                    r == null && (r = d),
                    o.relative[q](k, r, v)
                } else k = w = []
            }
            k || (k = j),
            k || m.error(q || b);
            if (g.call(k) === "[object Array]") if (!u) e.push.apply(e, k);
            else if (d && d.nodeType === 1) for (t = 0; k[t] != null; t++) k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]);
            else for (t = 0; k[t] != null; t++) k[t] && k[t].nodeType === 1 && e.push(j[t]);
            else s(k, e);
            l && (m(l, h, e, f), m.uniqueSort(e));
            return e
        };
        m.uniqueSort = function(a) {
            if (u) {
                h = i,
                a.sort(u);
                if (h) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        },
        m.matches = function(a, b) {
            return m(a, null, null, b)
        },
        m.matchesSelector = function(a, b) {
            return m(b, null, null, [a]).length > 0
        },
        m.find = function(a, b, c) {
            var d, e, f, g, h, i;
            if (!a) return [];
            for (e = 0, f = o.order.length; e < f; e++) {
                h = o.order[e];
                if (g = o.leftMatch[h].exec(a)) {
                    i = g[1],
                    g.splice(1, 1);
                    if (i.substr(i.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(j, ""),
                        d = o.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(o.match[h], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
            return {
                set: d,
                expr: a
            }
        },
        m.filter = function(a, c, d, e) {
            var f, g, h, i, j, k, l, n, p, q = a,
            r = [],
            s = c,
            t = c && c[0] && m.isXML(c[0]);
            while (a && c.length) {
                for (h in o.filter) if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                    k = o.filter[h],
                    l = f[1],
                    g = !1,
                    f.splice(1, 1);
                    if (l.substr(l.length - 1) === "\\") continue;
                    s === r && (r = []);
                    if (o.preFilter[h]) {
                        f = o.preFilter[h](f, s, d, r, e, t);
                        if (!f) g = i = !0;
                        else if (f === !0) continue
                    }
                    if (f) for (n = 0; (j = s[n]) != null; n++) j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                    if (i !== b) {
                        d || (s = r),
                        a = a.replace(o.match[h], "");
                        if (!g) return [];
                        break
                    }
                }
                if (a === q) if (g == null) m.error(a);
                else break;
                q = a
            }
            return s
        },
        m.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        };
        var n = m.getText = function(a) {
            var b, c, d = a.nodeType,
            e = "";
            if (d) {
                if (d === 1 || d === 9 || d === 11) {
                    if (typeof a.textContent == "string") return a.textContent;
                    if (typeof a.innerText == "string") return a.innerText.replace(k, "");
                    for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
                } else if (d === 3 || d === 4) return a.nodeValue
            } else for (b = 0; c = a[b]; b++) c.nodeType !== 8 && (e += n(c));
            return e
        },
        o = m.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(a) {
                    return a.getAttribute("href")
                },
                type: function(a) {
                    return a.getAttribute("type")
                }
            },
            relative: {
                "+": function(a, b) {
                    var c = typeof b == "string",
                    d = c && !l.test(b),
                    e = c && !d;
                    d && (b = b.toLowerCase());
                    for (var f = 0,
                    g = a.length,
                    h; f < g; f++) if (h = a[f]) {
                        while ((h = h.previousSibling) && h.nodeType !== 1);
                        a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                    }
                    e && m.filter(b, a, !0)
                },
                ">": function(a, b) {
                    var c, d = typeof b == "string",
                    e = 0,
                    f = a.length;
                    if (d && !l.test(b)) {
                        b = b.toLowerCase();
                        for (; e < f; e++) {
                            c = a[e];
                            if (c) {
                                var g = c.parentNode;
                                a[e] = g.nodeName.toLowerCase() === b ? g: !1
                            }
                        }
                    } else {
                        for (; e < f; e++) c = a[e],
                        c && (a[e] = d ? c.parentNode: c.parentNode === b);
                        d && m.filter(b, a, !0)
                    }
                },
                "": function(a, b, c) {
                    var d, f = e++,
                    g = x;
                    typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w),
                    g("parentNode", b, f, a, d, c)
                },
                "~": function(a, b, c) {
                    var d, f = e++,
                    g = x;
                    typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w),
                    g("previousSibling", b, f, a, d, c)
                }
            },
            find: {
                ID: function(a, b, c) {
                    if (typeof b.getElementById != "undefined" && !c) {
                        var d = b.getElementById(a[1]);
                        return d && d.parentNode ? [d] : []
                    }
                },
                NAME: function(a, b) {
                    if (typeof b.getElementsByName != "undefined") {
                        var c = [],
                        d = b.getElementsByName(a[1]);
                        for (var e = 0,
                        f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                        return c.length === 0 ? null: c
                    }
                },
                TAG: function(a, b) {
                    if (typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[1])
                }
            },
            preFilter: {
                CLASS: function(a, b, c, d, e, f) {
                    a = " " + a[1].replace(j, "") + " ";
                    if (f) return a;
                    for (var g = 0,
                    h; (h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                    return ! 1
                },
                ID: function(a) {
                    return a[1].replace(j, "")
                },
                TAG: function(a, b) {
                    return a[1].replace(j, "").toLowerCase()
                },
                CHILD: function(a) {
                    if (a[1] === "nth") {
                        a[2] || m.error(a[0]),
                        a[2] = a[2].replace(/^\+|\s*/g, "");
                        var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                        a[2] = b[1] + (b[2] || 1) - 0,
                        a[3] = b[3] - 0
                    } else a[2] && m.error(a[0]);
                    a[0] = e++;
                    return a
                },
                ATTR: function(a, b, c, d, e, f) {
                    var g = a[1] = a[1].replace(j, ""); ! f && o.attrMap[g] && (a[1] = o.attrMap[g]),
                    a[4] = (a[4] || a[5] || "").replace(j, ""),
                    a[2] === "~=" && (a[4] = " " + a[4] + " ");
                    return a
                },
                PSEUDO: function(b, c, d, e, f) {
                    if (b[1] === "not") if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = m(b[3], null, null, c);
                    else {
                        var g = m.filter(b[3], c, d, !0 ^ f);
                        d || e.push.apply(e, g);
                        return ! 1
                    } else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) return ! 0;
                    return b
                },
                POS: function(a) {
                    a.unshift(!0);
                    return a
                }
            },
            filters: {
                enabled: function(a) {
                    return a.disabled === !1 && a.type !== "hidden"
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    return a.checked === !0
                },
                selected: function(a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return a.selected === !0
                },
                parent: function(a) {
                    return !! a.firstChild
                },
                empty: function(a) {
                    return ! a.firstChild
                },
                has: function(a, b, c) {
                    return !! m(c[3], a).length
                },
                header: function(a) {
                    return /h\d/i.test(a.nodeName)
                },
                text: function(a) {
                    var b = a.getAttribute("type"),
                    c = a.type;
                    return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                },
                radio: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                },
                checkbox: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                },
                file: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "file" === a.type
                },
                password: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "password" === a.type
                },
                submit: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "submit" === a.type
                },
                image: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "image" === a.type
                },
                reset: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "reset" === a.type
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && "button" === a.type || b === "button"
                },
                input: function(a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                },
                focus: function(a) {
                    return a === a.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function(a, b) {
                    return b === 0
                },
                last: function(a, b, c, d) {
                    return b === d.length - 1
                },
                even: function(a, b) {
                    return b % 2 === 0
                },
                odd: function(a, b) {
                    return b % 2 === 1
                },
                lt: function(a, b, c) {
                    return b < c[3] - 0
                },
                gt: function(a, b, c) {
                    return b > c[3] - 0
                },
                nth: function(a, b, c) {
                    return c[3] - 0 === b
                },
                eq: function(a, b, c) {
                    return c[3] - 0 === b
                }
            },
            filter: {
                PSEUDO: function(a, b, c, d) {
                    var e = b[1],
                    f = o.filters[e];
                    if (f) return f(a, c, b, d);
                    if (e === "contains") return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                    if (e === "not") {
                        var g = b[3];
                        for (var h = 0,
                        i = g.length; h < i; h++) if (g[h] === a) return ! 1;
                        return ! 0
                    }
                    m.error(e)
                },
                CHILD: function(a, b) {
                    var c, e, f, g, h, i, j, k = b[1],
                    l = a;
                    switch (k) {
                    case "only":
                    case "first":
                        while (l = l.previousSibling) if (l.nodeType === 1) return ! 1;
                        if (k === "first") return ! 0;
                        l = a;
                    case "last":
                        while (l = l.nextSibling) if (l.nodeType === 1) return ! 1;
                        return ! 0;
                    case "nth":
                        c = b[2],
                        e = b[3];
                        if (c === 1 && e === 0) return ! 0;
                        f = b[0],
                        g = a.parentNode;
                        if (g && (g[d] !== f || !a.nodeIndex)) {
                            i = 0;
                            for (l = g.firstChild; l; l = l.nextSibling) l.nodeType === 1 && (l.nodeIndex = ++i);
                            g[d] = f
                        }
                        j = a.nodeIndex - e;
                        return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                    }
                },
                ID: function(a, b) {
                    return a.nodeType === 1 && a.getAttribute("id") === b
                },
                TAG: function(a, b) {
                    return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
                },
                CLASS: function(a, b) {
                    return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                },
                ATTR: function(a, b) {
                    var c = b[1],
                    d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                    e = d + "",
                    f = b[2],
                    g = b[4];
                    return d == null ? f === "!=": !f && m.attr ? d != null: f === "=" ? e === g: f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g: f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g: f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-": !1 : e && d !== !1
                },
                POS: function(a, b, c, d) {
                    var e = b[2],
                    f = o.setFilters[e];
                    if (f) return f(a, c, b, d)
                }
            }
        },
        p = o.match.POS,
        q = function(a, b) {
            return "\\" + (b - 0 + 1)
        };
        for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source),
        o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
        o.match.globalPOS = p;
        var s = function(a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch(t) {
            s = function(a, b) {
                var c = 0,
                d = b || [];
                if (g.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
                else if (typeof a.length == "number") for (var e = a.length; c < e; c++) d.push(a[c]);
                else for (; a[c]; c++) d.push(a[c]);
                return d
            }
        }
        var u, v;
        c.documentElement.compareDocumentPosition ? u = function(a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1;
            return a.compareDocumentPosition(b) & 4 ? -1 : 1
        }: (u = function(a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
            var c, d, e = [],
            f = [],
            g = a.parentNode,
            i = b.parentNode,
            j = g;
            if (g === i) return v(a, b);
            if (!g) return - 1;
            if (!i) return 1;
            while (j) e.unshift(j),
            j = j.parentNode;
            j = i;
            while (j) f.unshift(j),
            j = j.parentNode;
            c = e.length,
            d = f.length;
            for (var k = 0; k < c && k < d; k++) if (e[k] !== f[k]) return v(e[k], f[k]);
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
        },
        v = function(a, b, c) {
            if (a === b) return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b) return - 1;
                d = d.nextSibling
            }
            return 1
        }),
        function() {
            var a = c.createElement("div"),
            d = "script" + (new Date).getTime(),
            e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>",
            e.insertBefore(a, e.firstChild),
            c.getElementById(d) && (o.find.ID = function(a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b: []
                }
            },
            o.filter.ID = function(a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }),
            e.removeChild(a),
            e = a = null
        } (),
        function() {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")),
            a.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                    c = d
                }
                return c
            }),
            a.innerHTML = "<a href='#'></a>",
            a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function(a) {
                return a.getAttribute("href", 2)
            }),
            a = null
        } (),
        c.querySelectorAll &&
        function() {
            var a = m,
            b = c.createElement("div"),
            d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                m = function(b, e, f, g) {
                    e = e || c;
                    if (!g && !m.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1]) return s(e.getElementsByTagName(b), f);
                            if (h[2] && o.find.CLASS && e.getElementsByClassName) return s(e.getElementsByClassName(h[2]), f)
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body) return s([e.body], f);
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode) return s([], f);
                                if (i.id === h[3]) return s([i], f)
                            }
                            try {
                                return s(e.querySelectorAll(b), f)
                            } catch(j) {}
                        } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                            var k = e,
                            l = e.getAttribute("id"),
                            n = l || d,
                            p = e.parentNode,
                            q = /^\s*[+~]/.test(b);
                            l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n),
                            q && p && (e = e.parentNode);
                            try {
                                if (!q || p) return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                            } catch(r) {} finally {
                                l || k.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, e, f, g)
                };
                for (var e in a) m[e] = a[e];
                b = null
            }
        } (),
        function() {
            var a = c.documentElement,
            b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div"),
                e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch(f) {
                    e = !0
                }
                m.matchesSelector = function(a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!m.isXML(a)) try {
                        if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                            var f = b.call(a, c);
                            if (f || !d || a.document && a.document.nodeType !== 11) return f
                        }
                    } catch(g) {}
                    return m(c, null, null, [a]).length > 0
                }
            }
        } (),
        function() {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if ( !! a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1) return;
                o.order.splice(1, 0, "CLASS"),
                o.find.CLASS = function(a, b, c) {
                    if (typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1])
                },
                a = null
            }
        } (),
        c.documentElement.contains ? m.contains = function(a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        }: c.documentElement.compareDocumentPosition ? m.contains = function(a, b) {
            return !! (a.compareDocumentPosition(b) & 16)
        }: m.contains = function() {
            return ! 1
        },
        m.isXML = function(a) {
            var b = (a ? a.ownerDocument || a: 0).documentElement;
            return b ? b.nodeName !== "HTML": !1
        };
        var y = function(a, b, c) {
            var d, e = [],
            f = "",
            g = b.nodeType ? [b] : b;
            while (d = o.match.PSEUDO.exec(a)) f += d[0],
            a = a.replace(o.match.PSEUDO, "");
            a = o.relative[a] ? a + "*": a;
            for (var h = 0,
            i = g.length; h < i; h++) m(a, g[h], e, c);
            return m.filter(f, e)
        };
        m.attr = f.attr,
        m.selectors.attrMap = {},
        f.find = m,
        f.expr = m.selectors,
        f.expr[":"] = f.expr.filters,
        f.unique = m.uniqueSort,
        f.text = m.getText,
        f.isXMLDoc = m.isXML,
        f.contains = m.contains
    } ();
    var L = /Until$/,
    M = /^(?:parents|prevUntil|prevAll)/,
    N = /,/,
    O = /^.[^:#\[\.,]*$/,
    P = Array.prototype.slice,
    Q = f.expr.match.globalPOS,
    R = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    f.fn.extend({
        find: function(a) {
            var b = this,
            c, d;
            if (typeof a != "string") return f(a).filter(function() {
                for (c = 0, d = b.length; c < d; c++) if (f.contains(b[c], this)) return ! 0
            });
            var e = this.pushStack("", "find", a),
            g,
            h,
            i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length,
                f.find(a, this[c], e);
                if (c > 0) for (h = g; h < e.length; h++) for (i = 0; i < g; i++) if (e[i] === e[h]) {
                    e.splice(h--, 1);
                    break
                }
            }
            return e
        },
        has: function(a) {
            var b = f(a);
            return this.filter(function() {
                for (var a = 0,
                c = b.length; a < c; a++) if (f.contains(this, b[a])) return ! 0
            })
        },
        not: function(a) {
            return this.pushStack(T(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(T(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !! a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function(a, b) {
            var c = [],
            d,
            e,
            g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++) f(g).is(a[d]) && c.push({
                        selector: a[d],
                        elem: g,
                        level: h
                    });
                    g = g.parentNode,
                    h++
                }
                return c
            }
            var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },
        index: function(a) {
            if (!a) return this[0] && this[0].parentNode ? this.prevAll().length: -1;
            if (typeof a == "string") return f.inArray(this[0], f(a));
            return f.inArray(a.jquery ? a[0] : a, this)
        },
        add: function(a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
            d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d: f.unique(d))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }),
    f.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b: null
        },
        parents: function(a) {
            return f.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return f.dir(a, "parentNode", c)
        },
        next: function(a) {
            return f.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return f.nth(a, 2, "previousSibling")
        },
        nextAll: function(a) {
            return f.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return f.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return f.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return f.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return f.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return f.sibling(a.firstChild)
        },
        contents: function(a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document: f.makeArray(a.childNodes)
        }
    },
    function(a, b) {
        f.fn[a] = function(c, d) {
            var e = f.map(this, b, c);
            L.test(a) || (d = c),
            d && typeof d == "string" && (e = f.filter(d, e)),
            e = this.length > 1 && !R[a] ? f.unique(e) : e,
            (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
            return this.pushStack(e, a, P.call(arguments).join(","))
        }
    }),
    f.extend({
        filter: function(a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        },
        dir: function(a, c, d) {
            var e = [],
            g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) g.nodeType === 1 && e.push(g),
            g = g[c];
            return e
        },
        nth: function(a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c]) if (a.nodeType === 1 && ++e === b) break;
            return a
        },
        sibling: function(a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var V = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    W = / jQuery\d+="(?:\d+|null)"/g,
    X = /^\s+/,
    Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    Z = /<([\w:]+)/,
    $ = /<tbody/i,
    _ = /<|&#?\w+;/,
    ba = /<(?:script|style)/i,
    bb = /<(?:script|object|embed|option|style)/i,
    bc = new RegExp("<(?:" + V + ")[\\s/>]", "i"),
    bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
    be = /\/(java|ecma)script/i,
    bf = /^\s*<!(?:\[CDATA\[|\-\-)/,
    bg = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    },
    bh = U(c);
    bg.optgroup = bg.option,
    bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead,
    bg.th = bg.td,
    f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]),
    f.fn.extend({
        text: function(a) {
            return f.access(this,
            function(a) {
                return a === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
            },
            null, a, arguments.length)
        },
        wrapAll: function(a) {
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).wrapInner(a.call(this, b))
            });
            return this.each(function() {
                var b = f(this),
                c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = f.isFunction(a);
            return this.each(function(c) {
                f(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0,
            function(a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0,
            function(a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
            function(a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = f.clean(arguments);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
            function(a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, f.clean(arguments));
                return a
            }
        },
        remove: function(a, b) {
            for (var c = 0,
            d; (d = this[c]) != null; c++) if (!a || f.filter(a, [d]).length) ! b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])),
            d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function() {
            for (var a = 0,
            b; (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) b.removeChild(b.firstChild)
            }
            return this
        },
        clone: function(a, b) {
            a = a == null ? !1 : a,
            b = b == null ? a: b;
            return this.map(function() {
                return f.clone(this, a, b)
            })
        },
        html: function(a) {
            return f.access(this,
            function(a) {
                var c = this[0] || {},
                d = 0,
                e = this.length;
                if (a === b) return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null;
                if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Y, "<$1></$2>");
                    try {
                        for (; d < e; d++) c = this[d] || {},
                        c.nodeType === 1 && (f.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                        c = 0
                    } catch(g) {}
                }
                c && this.empty().append(a)
            },
            null, a, arguments.length)
        },
        replaceWith: function(a) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(a)) return this.each(function(b) {
                    var c = f(this),
                    d = c.html();
                    c.replaceWith(a.call(this, b, d))
                });
                typeof a != "string" && (a = f(a).detach());
                return this.each(function() {
                    var b = this.nextSibling,
                    c = this.parentNode;
                    f(this).remove(),
                    b ? f(b).before(a) : f(c).append(a)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c, d) {
            var e, g, h, i, j = a[0],
            k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j)) return this.each(function() {
                f(this).domManip(a, c, d, !0)
            });
            if (f.isFunction(j)) return this.each(function(e) {
                var g = f(this);
                a[0] = j.call(this, e, c ? g.html() : b),
                g.domManip(a, c, d)
            });
            if (this[0]) {
                i = j && j.parentNode,
                f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
                    fragment: i
                }: e = f.buildFragment(a, this, k),
                h = e.fragment,
                h.childNodes.length === 1 ? g = h = h.firstChild: g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0,
                    m = this.length,
                    n = m - 1; l < m; l++) d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                }
                k.length && f.each(k,
                function(a, b) {
                    b.src ? f.ajax({
                        type: "GET",
                        global: !1,
                        url: b.src,
                        async: !1,
                        dataType: "script"
                    }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")),
                    b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    }),
    f.buildFragment = function(a, b, d) {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]),
        i.createDocumentFragment || (i = c),
        a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)),
        e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)),
        g && (f.fragments[j] = h ? e: 1);
        return {
            fragment: e,
            cacheable: g
        }
    },
    f.fragments = {},
    f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(a, b) {
        f.fn[a] = function(c) {
            var d = [],
            e = f(c),
            g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0,
            i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j),
                d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }),
    f.extend({
        clone: function(a, b, c) {
            var d, e, g, h = f.support.html5Clone || f.isXMLDoc(a) || !bc.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : bo(a);
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                bk(a, h),
                d = bl(a),
                e = bl(h);
                for (g = 0; d[g]; ++g) e[g] && bk(d[g], e[g])
            }
            if (b) {
                bj(a, h);
                if (c) {
                    d = bl(a),
                    e = bl(h);
                    for (g = 0; d[g]; ++g) bj(d[g], e[g])
                }
            }
            d = e = null;
            return h
        },
        clean: function(a, b, d, e) {
            var g, h, i, j = [];
            b = b || c,
            typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            for (var k = 0,
            l; (l = a[k]) != null; k++) {
                typeof l == "number" && (l += "");
                if (!l) continue;
                if (typeof l == "string") if (!_.test(l)) l = b.createTextNode(l);
                else {
                    l = l.replace(Y, "<$1></$2>");
                    var m = (Z.exec(l) || ["", ""])[1].toLowerCase(),
                    n = bg[m] || bg._default,
                    o = n[0],
                    p = b.createElement("div"),
                    q = bh.childNodes,
                    r;
                    b === c ? bh.appendChild(p) : U(b).appendChild(p),
                    p.innerHTML = n[1] + l + n[2];
                    while (o--) p = p.lastChild;
                    if (!f.support.tbody) {
                        var s = $.test(l),
                        t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes: n[1] === "<table>" && !s ? p.childNodes: [];
                        for (i = t.length - 1; i >= 0; --i) f.nodeName(t[i], "tbody") && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i])
                    } ! f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild),
                    l = p.childNodes,
                    p && (p.parentNode.removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r.parentNode && r.parentNode.removeChild(r)))
                }
                var u;
                if (!f.support.appendChecked) if (l[0] && typeof(u = l.length) == "number") for (i = 0; i < u; i++) bn(l[i]);
                else bn(l);
                l.nodeType ? j.push(l) : j = f.merge(j, l)
            }
            if (d) {
                g = function(a) {
                    return ! a.type || be.test(a.type)
                };
                for (k = 0; j[k]; k++) {
                    h = j[k];
                    if (e && f.nodeName(h, "script") && (!h.type || be.test(h.type))) e.push(h.parentNode ? h.parentNode.removeChild(h) : h);
                    else {
                        if (h.nodeType === 1) {
                            var v = f.grep(h.getElementsByTagName("script"), g);
                            j.splice.apply(j, [k + 1, 0].concat(v))
                        }
                        d.appendChild(h)
                    }
                }
            }
            return j
        },
        cleanData: function(a) {
            var b, c, d = f.cache,
            e = f.event.special,
            g = f.support.deleteExpando;
            for (var h = 0,
            i; (i = a[h]) != null; h++) {
                if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue;
                c = i[f.expando];
                if (c) {
                    b = d[c];
                    if (b && b.events) {
                        for (var j in b.events) e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando),
                    delete d[c]
                }
            }
        }
    });
    var bp = /alpha\([^)]*\)/i,
    bq = /opacity=([^)]*)/,
    br = /([A-Z]|^ms)/g,
    bs = /^[\-+]?(?:\d*\.)?\d+$/i,
    bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
    bu = /^([\-+])=([\-+.\de]+)/,
    bv = /^margin/,
    bw = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    bx = ["Top", "Right", "Bottom", "Left"],
    by,
    bz,
    bA;
    f.fn.css = function(a, c) {
        return f.access(this,
        function(a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        },
        a, c, arguments.length > 1)
    },
    f.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = by(a, "opacity");
                        return c === "" ? "1": c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(a, c, d, e) {
            if ( !! a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                var g, h, i = f.camelCase(c),
                j = a.style,
                k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && "get" in k && (g = k.get(a, !1, e)) !== b) return g;
                    return j[c]
                }
                h = typeof d,
                h === "string" && (g = bu.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
                if (d == null || h === "number" && isNaN(d)) return;
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set" in k) || (d = k.set(a, d)) !== b) try {
                    j[c] = d
                } catch(l) {}
            }
        },
        css: function(a, c, d) {
            var e, g;
            c = f.camelCase(c),
            g = f.cssHooks[c],
            c = f.cssProps[c] || c,
            c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
            if (by) return by(a, c)
        },
        swap: function(a, b, c) {
            var d = {},
            e, f;
            for (f in b) d[f] = a.style[f],
            a.style[f] = b[f];
            e = c.call(a);
            for (f in b) a.style[f] = d[f];
            return e
        }
    }),
    f.curCSS = f.css,
    c.defaultView && c.defaultView.getComputedStyle && (bz = function(a, b) {
        var c, d, e, g, h = a.style;
        b = b.replace(br, "-$1").toLowerCase(),
        (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))),
        !f.support.pixelMargin && e && bv.test(b) && bt.test(c) && (g = h.width, h.width = c, c = e.width, h.width = g);
        return c
    }),
    c.documentElement.currentStyle && (bA = function(a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b],
        g = a.style;
        f == null && g && (e = g[b]) && (f = e),
        bt.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em": f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
        return f === "" ? "auto": f
    }),
    by = bz || bA,
    f.each(["height", "width"],
    function(a, b) {
        f.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return a.offsetWidth !== 0 ? bB(a, b, d) : f.swap(a, bw,
                function() {
                    return bB(a, b, d)
                })
            },
            set: function(a, b) {
                return bs.test(b) ? b + "px": b
            }
        }
    }),
    f.support.opacity || (f.cssHooks.opacity = {
        get: function(a, b) {
            return bq.test((b && a.currentStyle ? a.currentStyle.filter: a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "": b ? "1": ""
        },
        set: function(a, b) {
            var c = a.style,
            d = a.currentStyle,
            e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")": "",
            g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bp, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) return
            }
            c.filter = bp.test(g) ? g.replace(bp, e) : g + " " + e
        }
    }),
    f(function() {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function(a, b) {
                return f.swap(a, {
                    display: "inline-block"
                },
                function() {
                    return b ? by(a, "margin-right") : a.style.marginRight
                })
            }
        })
    }),
    f.expr && f.expr.filters && (f.expr.filters.hidden = function(a) {
        var b = a.offsetWidth,
        c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    },
    f.expr.filters.visible = function(a) {
        return ! f.expr.filters.hidden(a)
    }),
    f.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(a, b) {
        f.cssHooks[a + b] = {
            expand: function(c) {
                var d, e = typeof c == "string" ? c.split(" ") : [c],
                f = {};
                for (d = 0; d < 4; d++) f[a + bx[d] + b] = e[d] || e[d - 2] || e[0];
                return f
            }
        }
    });
    var bC = /%20/g,
    bD = /\[\]$/,
    bE = /\r?\n/g,
    bF = /#.*$/,
    bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
    bH = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
    bJ = /^(?:GET|HEAD)$/,
    bK = /^\/\//,
    bL = /\?/,
    bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    bN = /^(?:select|textarea)/i,
    bO = /\s+/,
    bP = /([?&])_=[^&]*/,
    bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    bR = f.fn.load,
    bS = {},
    bT = {},
    bU, bV, bW = ["*/"] + ["*"];
    try {
        bU = e.href
    } catch(bX) {
        bU = c.createElement("a"),
        bU.href = "",
        bU = bU.href
    }
    bV = bQ.exec(bU.toLowerCase()) || [],
    f.fn.extend({
        load: function(a, c, d) {
            if (typeof a != "string" && bR) return bR.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            f.ajax({
                url: a,
                type: h,
                dataType: "html",
                data: c,
                complete: function(a, b, c) {
                    c = a.responseText,
                    a.isResolved() && (a.done(function(a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(bM, "")).find(g) : c)),
                    d && i.each(d, [c, b, a])
                }
            });
            return this
        },
        serialize: function() {
            return f.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || bN.test(this.nodeName) || bH.test(this.type))
            }).map(function(a, b) {
                var c = f(this).val();
                return c == null ? null: f.isArray(c) ? f.map(c,
                function(a, c) {
                    return {
                        name: b.name,
                        value: a.replace(bE, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(bE, "\r\n")
                }
            }).get()
        }
    }),
    f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
    function(a, b) {
        f.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    f.each(["get", "post"],
    function(a, c) {
        f[c] = function(a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: g
            })
        }
    }),
    f.extend({
        getScript: function(a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            b ? b$(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings),
            b$(a, b);
            return a
        },
        ajaxSettings: {
            url: bU,
            isLocal: bI.test(bV[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bW
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: bY(bS),
        ajaxTransport: bY(bT),
        ajax: function(a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2,
                    q && clearTimeout(q),
                    p = b,
                    n = m || "",
                    v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c,
                    x = l ? ca(d, v, l) : b,
                    y,
                    z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified")) f.lastModified[k] = y;
                            if (z = v.getResponseHeader("Etag")) f.etag[k] = z
                        }
                        if (a === 304) w = "notmodified",
                        o = !0;
                        else try {
                            r = cb(d, x),
                            w = "success",
                            o = !0
                        } catch(A) {
                            w = "parsererror",
                            u = A
                        }
                    } else {
                        u = w;
                        if (!w || a) w = "error",
                        a < 0 && (a = 0)
                    }
                    v.status = a,
                    v.statusText = "" + (c || w),
                    o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]),
                    v.statusCode(j),
                    j = b,
                    t && g.trigger("ajax" + (o ? "Success": "Error"), [v, d, o ? r: u]),
                    i.fireWith(e, [v, w]),
                    t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            typeof a == "object" && (c = a, a = b),
            c = c || {};
            var d = f.ajaxSetup({},
            c),
            e = d.context || d,
            g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
            h = f.Deferred(),
            i = f.Callbacks("once memory"),
            j = d.statusCode || {},
            k,
            l = {},
            m = {},
            n,
            o,
            p,
            q,
            r,
            s = 0,
            t,
            u,
            v = {
                readyState: 0,
                setRequestHeader: function(a, b) {
                    if (!s) {
                        var c = a.toLowerCase();
                        a = m[c] = m[c] || a,
                        l[a] = b
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return s === 2 ? n: null
                },
                getResponseHeader: function(a) {
                    var c;
                    if (s === 2) {
                        if (!o) {
                            o = {};
                            while (c = bG.exec(n)) o[c[1].toLowerCase()] = c[2]
                        }
                        c = o[a.toLowerCase()]
                    }
                    return c === b ? null: c
                },
                overrideMimeType: function(a) {
                    s || (d.mimeType = a);
                    return this
                },
                abort: function(a) {
                    a = a || "abort",
                    p && p.abort(a),
                    w(0, a);
                    return this
                }
            };
            h.promise(v),
            v.success = v.done,
            v.error = v.fail,
            v.complete = i.add,
            v.statusCode = function(a) {
                if (a) {
                    var b;
                    if (s < 2) for (b in a) j[b] = [j[b], a[b]];
                    else b = a[v.status],
                    v.then(b, b)
                }
                return this
            },
            d.url = ((a || d.url) + "").replace(bF, "").replace(bK, bV[1] + "//"),
            d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bO),
            d.crossDomain == null && (r = bQ.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bV[1] && r[2] == bV[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bV[3] || (bV[1] === "http:" ? 80 : 443)))),
            d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)),
            bZ(bS, d, c, v);
            if (s === 2) return ! 1;
            t = d.global,
            d.type = d.type.toUpperCase(),
            d.hasContent = !bJ.test(d.type),
            t && f.active++===0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bL.test(d.url) ? "&": "?") + d.data, delete d.data),
                k = d.url;
                if (d.cache === !1) {
                    var x = f.now(),
                    y = d.url.replace(bP, "$1_=" + x);
                    d.url = y + (y === d.url ? (bL.test(d.url) ? "&": "?") + "_=" + x: "")
                }
            } (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType),
            d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])),
            v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bW + "; q=0.01": "") : d.accepts["*"]);
            for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return ! 1
            }
            for (u in {
                success: 1,
                error: 1,
                complete: 1
            }) v[u](d[u]);
            p = bZ(bT, d, c, v);
            if (!p) w( - 1, "No Transport");
            else {
                v.readyState = 1,
                t && g.trigger("ajaxSend", [v, d]),
                d.async && d.timeout > 0 && (q = setTimeout(function() {
                    v.abort("timeout")
                },
                d.timeout));
                try {
                    s = 1,
                    p.send(l, w)
                } catch(z) {
                    if (s < 2) w( - 1, z);
                    else throw z
                }
            }
            return v
        },
        param: function(a, c) {
            var d = [],
            e = function(a, b) {
                b = f.isFunction(b) ? b() : b,
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a,
            function() {
                e(this.name, this.value)
            });
            else for (var g in a) b_(g, a[g], c, e);
            return d.join("&").replace(bC, "+")
        }
    }),
    f.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cc = f.now(),
    cd = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return f.expando + "_" + cc++
        }
    }),
    f.ajaxPrefilter("json jsonp",
    function(b, c, d) {
        var e = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cd.test(b.url) || e && cd.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
            i = a[h],
            j = b.url,
            k = b.data,
            l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(cd, l), b.url === j && (e && (k = k.replace(cd, l)), b.data === k && (j += (/\?/.test(j) ? "&": "?") + b.jsonp + "=" + h))),
            b.url = j,
            b.data = k,
            a[h] = function(a) {
                g = [a]
            },
            d.always(function() {
                a[h] = i,
                g && f.isFunction(i) && a[h](g[0])
            }),
            b.converters["script json"] = function() {
                g || f.error(h + " was not called");
                return g[0]
            },
            b.dataTypes[0] = "json";
            return "script"
        }
    }),
    f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                f.globalEval(a);
                return a
            }
        }
    }),
    f.ajaxPrefilter("script",
    function(a) {
        a.cache === b && (a.cache = !1),
        a.crossDomain && (a.type = "GET", a.global = !1)
    }),
    f.ajaxTransport("script",
    function(a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function(f, g) {
                    d = c.createElement("script"),
                    d.async = "async",
                    a.scriptCharset && (d.charset = a.scriptCharset),
                    d.src = a.url,
                    d.onload = d.onreadystatechange = function(a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null,
                        e && d.parentNode && e.removeChild(d),
                        d = b,
                        c || g(200, "success")
                    },
                    e.insertBefore(d, e.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var ce = a.ActiveXObject ?
    function() {
        for (var a in cg) cg[a](0, 1)
    }: !1,
    cf = 0,
    cg;
    f.ajaxSettings.xhr = a.ActiveXObject ?
    function() {
        return ! this.isLocal && ch() || ci()
    }: ch,
    function(a) {
        f.extend(f.support, {
            ajax: !!a,
            cors: !!a && "withCredentials" in a
        })
    } (f.ajaxSettings.xhr()),
    f.support.ajax && f.ajaxTransport(function(c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return {
                send: function(e, g) {
                    var h = c.xhr(),
                    i,
                    j;
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                    if (c.xhrFields) for (j in c.xhrFields) h[j] = c.xhrFields[j];
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType),
                    !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (j in e) h.setRequestHeader(j, e[j])
                    } catch(k) {}
                    h.send(c.hasContent && c.data || null),
                    d = function(a, e) {
                        var j, k, l, m, n;
                        try {
                            if (d && (e || h.readyState === 4)) {
                                d = b,
                                i && (h.onreadystatechange = f.noop, ce && delete cg[i]);
                                if (e) h.readyState !== 4 && h.abort();
                                else {
                                    j = h.status,
                                    l = h.getAllResponseHeaders(),
                                    m = {},
                                    n = h.responseXML,
                                    n && n.documentElement && (m.xml = n);
                                    try {
                                        m.text = h.responseText
                                    } catch(a) {}
                                    try {
                                        k = h.statusText
                                    } catch(o) {
                                        k = ""
                                    } ! j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                }
                            }
                        } catch(p) {
                            e || g( - 1, p)
                        }
                        m && g(j, k, m, l)
                    },
                    !c.async || h.readyState === 4 ? d() : (i = ++cf, ce && (cg || (cg = {},
                    f(a).unload(ce)), cg[i] = d), h.onreadystatechange = d)
                },
                abort: function() {
                    d && d(0, 1)
                }
            }
        }
    });
    var cj = {},
    ck, cl, cm = /^(?:toggle|show|hide)$/,
    cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
    co, cp = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]],
    cq;
    f.fn.extend({
        show: function(a, b, c) {
            var d, e;
            if (a || a === 0) return this.animate(ct("show", 3), a, b, c);
            for (var g = 0,
            h = this.length; g < h; g++) d = this[g],
            d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), (e === "" && f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, "olddisplay", cu(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function(a, b, c) {
            if (a || a === 0) return this.animate(ct("hide", 3), a, b, c);
            var d, e, g = 0,
            h = this.length;
            for (; g < h; g++) d = this[g],
            d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
            for (g = 0; g < h; g++) this[g].style && (this[g].style.display = "none");
            return this
        },
        _toggle: f.fn.toggle,
        toggle: function(a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function() {
                var b = d ? a: f(this).is(":hidden");
                f(this)[b ? "show": "hide"]()
            }) : this.animate(ct("toggle", 3), a, b, c);
            return this
        },
        fadeTo: function(a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            },
            a, c, d)
        },
        animate: function(a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({},
                e),
                c = this.nodeType === 1,
                d = c && f(this).is(":hidden"),
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i),
                    i !== g && (a[g] = a[i], delete a[i]);
                    if ((k = f.cssHooks[g]) && "expand" in k) {
                        l = k.expand(a[g]),
                        delete a[g];
                        for (i in l) i in a || (a[i] = l[i])
                    }
                }
                for (g in a) {
                    h = a[g],
                    f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d) return b.complete.call(this);
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cu(this.nodeName) === "inline" ? this.style.display = "inline-block": this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) j = new f.fx(this, b, i),
                h = a[i],
                cm.test(h) ? (q = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show": "hide": 0), q ? (f._data(this, "toggle" + i, q === "show" ? "hide": "show"), j[q]()) : j[h]()) : (m = cn.exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ? "": "px"), p !== "px" && (f.style(this, i, (o || 1) + p), n = (o || 1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n), j.custom(n, o, p)) : j.custom(n, h, ""));
                return ! 0
            }
            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a)) return this.each(e.complete, [!1]);
            a = f.extend({},
            a);
            return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
        },
        stop: function(a, c, d) {
            typeof a != "string" && (d = c, c = a, a = b),
            c && a !== !1 && this.queue(a || "fx", []);
            return this.each(function() {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0),
                    e.stop(d)
                }
                var b, c = !1,
                e = f.timers,
                g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null) for (b in g) g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b);
                else g[b = a + ".run"] && g[b].stop && h(this, g, b);
                for (b = e.length; b--;) e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1)); (!d || !c) && f.dequeue(this, a)
            })
        }
    }),
    f.each({
        slideDown: ct("show", 1),
        slideUp: ct("hide", 1),
        slideToggle: ct("toggle", 1),
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
        f.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    f.extend({
        speed: function(a, b, c) {
            var d = a && typeof a == "object" ? f.extend({},
            a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration: d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0) d.queue = "fx";
            d.old = d.complete,
            d.complete = function(a) {
                f.isFunction(d.old) && d.old.call(this),
                d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
            };
            return d
        },
        easing: {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return - Math.cos(a * Math.PI) / 2 + .5
            }
        },
        timers: [],
        fx: function(a, b, c) {
            this.options = b,
            this.elem = a,
            this.prop = c,
            b.orig = b.orig || {}
        }
    }),
    f.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (f.fx.step[this.prop] || f.fx.step._default)(this)
        },
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b: a
        },
        custom: function(a, c, d) {
            function h(a) {
                return e.step(a)
            }
            var e = this,
            g = f.fx;
            this.startTime = cq || cr(),
            this.end = c,
            this.now = this.start = a,
            this.pos = this.state = 0,
            this.unit = d || this.unit || (f.cssNumber[this.prop] ? "": "px"),
            h.queue = this.options.queue,
            h.elem = this.elem,
            h.saveState = function() {
                f._data(e.elem, "fxshow" + e.prop) === b && (e.options.hide ? f._data(e.elem, "fxshow" + e.prop, e.start) : e.options.show && f._data(e.elem, "fxshow" + e.prop, e.end))
            },
            h() && f.timers.push(h) && !co && (co = setInterval(g.tick, g.interval))
        },
        show: function() {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem, this.prop),
            this.options.show = !0,
            a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()),
            f(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop),
            this.options.hide = !0,
            this.custom(this.cur(), 0)
        },
        step: function(a) {
            var b, c, d, e = cq || cr(),
            g = !0,
            h = this.elem,
            i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end,
                this.pos = this.state = 1,
                this.update(),
                i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (g = !1);
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"],
                    function(a, b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }),
                    i.hide && f(h).hide();
                    if (i.hide || i.show) for (b in i.animatedProperties) f.style(h, b, i.orig[b]),
                    f.removeData(h, "fxshow" + b, !0),
                    f.removeData(h, "toggle" + b, !0);
                    d = i.complete,
                    d && (i.complete = !1, d.call(h))
                }
                return ! 1
            }
            i.duration == Infinity ? this.now = e: (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos),
            this.update();
            return ! 0
        }
    },
    f.extend(f.fx, {
        tick: function() {
            var a, b = f.timers,
            c = 0;
            for (; c < b.length; c++) a = b[c],
            !a() && b[c] === a && b.splice(c--, 1);
            b.length || f.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(co),
            co = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                f.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit: a.elem[a.prop] = a.now
            }
        }
    }),
    f.each(cp.concat.apply([], cp),
    function(a, b) {
        b.indexOf("margin") && (f.fx.step[b] = function(a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit)
        })
    }),
    f.expr && f.expr.filters && (f.expr.filters.animated = function(a) {
        return f.grep(f.timers,
        function(b) {
            return a === b.elem
        }).length
    });
    var cv, cw = /^t(?:able|d|h)$/i,
    cx = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? cv = function(a, b, c, d) {
        try {
            d = a.getBoundingClientRect()
        } catch(e) {}
        if (!d || !f.contains(c, a)) return d ? {
            top: d.top,
            left: d.left
        }: {
            top: 0,
            left: 0
        };
        var g = b.body,
        h = cy(b),
        i = c.clientTop || g.clientTop || 0,
        j = c.clientLeft || g.clientLeft || 0,
        k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop,
        l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft,
        m = d.top + k - i,
        n = d.left + l - j;
        return {
            top: m,
            left: n
        }
    }: cv = function(a, b, c) {
        var d, e = a.offsetParent,
        g = a,
        h = b.body,
        i = b.defaultView,
        j = i ? i.getComputedStyle(a, null) : a.currentStyle,
        k = a.offsetTop,
        l = a.offsetLeft;
        while ((a = a.parentNode) && a !== h && a !== c) {
            if (f.support.fixedPosition && j.position === "fixed") break;
            d = i ? i.getComputedStyle(a, null) : a.currentStyle,
            k -= a.scrollTop,
            l -= a.scrollLeft,
            a === e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a.offsetParent),
            f.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0),
            j = d
        }
        if (j.position === "relative" || j.position === "static") k += h.offsetTop,
        l += h.offsetLeft;
        f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft, h.scrollLeft));
        return {
            top: k,
            left: l
        }
    },
    f.fn.offset = function(a) {
        if (arguments.length) return a === b ? this: this.each(function(b) {
            f.offset.setOffset(this, a, b)
        });
        var c = this[0],
        d = c && c.ownerDocument;
        if (!d) return null;
        if (c === d.body) return f.offset.bodyOffset(c);
        return cv(c, d, d.documentElement)
    },
    f.offset = {
        bodyOffset: function(a) {
            var b = a.offsetTop,
            c = a.offsetLeft;
            f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
            return {
                top: b,
                left: c
            }
        },
        setOffset: function(a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a),
            g = e.offset(),
            h = f.css(a, "top"),
            i = f.css(a, "left"),
            j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1,
            k = {},
            l = {},
            m,
            n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0),
            f.isFunction(b) && (b = b.call(a, c, g)),
            b.top != null && (k.top = b.top - g.top + m),
            b.left != null && (k.left = b.left - g.left + n),
            "using" in b ? b.using.call(a, k) : e.css(k)
        }
    },
    f.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var a = this[0],
            b = this.offsetParent(),
            c = this.offset(),
            d = cx.test(b[0].nodeName) ? {
                top: 0,
                left: 0
            }: b.offset();
            c.top -= parseFloat(f.css(a, "marginTop")) || 0,
            c.left -= parseFloat(f.css(a, "marginLeft")) || 0,
            d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0,
            d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || c.body;
                while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static") a = a.offsetParent;
                return a
            })
        }
    }),
    f.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(a, c) {
        var d = /Y/.test(c);
        f.fn[a] = function(e) {
            return f.access(this,
            function(a, e, g) {
                var h = cy(a);
                if (g === b) return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e];
                h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g: f(h).scrollTop()) : a[e] = g
            },
            a, e, arguments.length, null)
        }
    }),
    f.each({
        Height: "height",
        Width: "width"
    },
    function(a, c) {
        var d = "client" + a,
        e = "scroll" + a,
        g = "offset" + a;
        f.fn["inner" + a] = function() {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, c, "padding")) : this[c]() : null
        },
        f.fn["outer" + a] = function(a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, c, a ? "margin": "border")) : this[c]() : null
        },
        f.fn[c] = function(a) {
            return f.access(this,
            function(a, c, h) {
                var i, j, k, l;
                if (f.isWindow(a)) {
                    i = a.document,
                    j = i.documentElement[d];
                    return f.support.boxModel && j || i.body && i.body[d] || j
                }
                if (a.nodeType === 9) {
                    i = a.documentElement;
                    if (i[d] >= i[e]) return i[d];
                    return Math.max(a.body[e], i[e], a.body[g], i[g])
                }
                if (h === b) {
                    k = f.css(a, c),
                    l = parseFloat(k);
                    return f.isNumeric(l) ? l: k
                }
                f(a).css(c, h)
            },
            c, a, arguments.length, null)
        }
    }),
    a.jQuery = a.$ = f,
    typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [],
    function() {
        return f
    })
})(window);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function(x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function(x, t, b, c, d) {
        return - c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return - c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function(x, t, b, c, d) {
        return - c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return - c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function(x, t, b, c, d) {
        return - c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function(x, t, b, c, d) {
        return - c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function(x, t, b, c, d) {
        return (t == 0) ? b: c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function(x, t, b, c, d) {
        return (t == d) ? b + c: c * ( - Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function(x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * ( - Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function(x, t, b, c, d) {
        return - c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return - c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return - (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return - .5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function(x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function(x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/*!
 * jQuery Tools v1.2.7 - The missing UI library for the Web
 * 
 * overlay/overlay.js
 * rangeinput/rangeinput.js
 * scrollable/scrollable.js
 * tabs/tabs.js
 * toolbox/toolbox.expose.js
 * toolbox/toolbox.mousewheel.js
 * tooltip/tooltip.js
 * tooltip/tooltip.slide.js
 * validator/validator.js
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/
 * 
 * jquery.event.wheel.js - rev 1 
 * Copyright (c) 2008, Three Dub Media (http://threedubmedia.com)
 * Liscensed under the MIT License (MIT-LICENSE.txt)
 * http://www.opensource.org/licenses/mit-license.php
 * Created: 2008-07-01 | Updated: 2008-07-14
 * 
 * -----
 * 
 */
(function(a) {
    a.tools = a.tools || {
        version: "v1.2.7"
    },
    a.tools.overlay = {
        addEffect: function(a, b, d) {
            c[a] = [b, d]
        },
        conf: {
            close: null,
            closeOnClick: !0,
            closeOnEsc: !0,
            closeSpeed: "fast",
            effect: "default",
            fixed: !a.browser.msie || a.browser.version > 6,
            left: "center",
            load: !1,
            mask: null,
            oneInstance: !0,
            speed: "normal",
            target: null,
            top: "10%"
        }
    };
    var b = [],
    c = {};
    a.tools.overlay.addEffect("default",
    function(b, c) {
        var d = this.getConf(),
        e = a(window);
        d.fixed || (b.top += e.scrollTop(), b.left += e.scrollLeft()),
        b.position = d.fixed ? "fixed": "absolute",
        this.getOverlay().css(b).fadeIn(d.speed, c)
    },
    function(a) {
        this.getOverlay().fadeOut(this.getConf().closeSpeed, a)
    });
    function d(d, e) {
        var f = this,
        g = d.add(f),
        h = a(window),
        i,
        j,
        k,
        l = a.tools.expose && (e.mask || e.expose),
        m = Math.random().toString().slice(10);
        l && (typeof l == "string" && (l = {
            color: l
        }), l.closeOnClick = l.closeOnEsc = !1);
        var n = e.target || d.attr("rel");
        j = n ? a(n) : null || d;
        if (!j.length) throw "Could not find Overlay: " + n;
        d && d.index(j) == -1 && d.click(function(a) {
            f.load(a);
            return a.preventDefault()
        }),
        a.extend(f, {
            load: function(d) {
                if (f.isOpened()) return f;
                var i = c[e.effect];
                if (!i) throw "Overlay: cannot find effect : \"" + e.effect + "\"";
                e.oneInstance && a.each(b,
                function() {
                    this.close(d)
                }),
                d = d || a.Event(),
                d.type = "onBeforeLoad",
                g.trigger(d);
                if (d.isDefaultPrevented()) return f;
                k = !0,
                l && a(j).expose(l);
                var n = e.top,
                o = e.left,
                p = j.outerWidth({
                    margin: !0
                }),
                q = j.outerHeight({
                    margin: !0
                });
                typeof n == "string" && (n = n == "center" ? Math.max((h.height() - q) / 2, 0) : parseInt(n, 10) / 100 * h.height()),
                o == "center" && (o = Math.max((h.width() - p) / 2, 0)),
                i[0].call(f, {
                    top: n,
                    left: o
                },
                function() {
                    k && (d.type = "onLoad", g.trigger(d))
                }),
                l && e.closeOnClick && a.mask.getMask().one("click", f.close),
                e.closeOnClick && a(document).on("click." + m,
                function(b) {
                    a(b.target).parents(j).length || f.close(b)
                }),
                e.closeOnEsc && a(document).on("keydown." + m,
                function(a) {
                    a.keyCode == 27 && f.close(a)
                });
                return f
            },
            close: function(b) {
                if (!f.isOpened()) return f;
                b = b || a.Event(),
                b.type = "onBeforeClose",
                g.trigger(b);
                if (!b.isDefaultPrevented()) {
                    k = !1,
                    c[e.effect][1].call(f,
                    function() {
                        b.type = "onClose",
                        g.trigger(b)
                    }),
                    a(document).off("click." + m + " keydown." + m),
                    l && a.mask.close();
                    return f
                }
            },
            getOverlay: function() {
                return j
            },
            getTrigger: function() {
                return d
            },
            getClosers: function() {
                return i
            },
            isOpened: function() {
                return k
            },
            getConf: function() {
                return e
            }
        }),
        a.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","),
        function(b, c) {
            a.isFunction(e[c]) && a(f).on(c, e[c]),
            f[c] = function(b) {
                b && a(f).on(c, b);
                return f
            }
        }),
        i = j.find(e.close || ".close"),
        !i.length && !e.close && (i = a("<a class=\"close\"></a>"), j.prepend(i)),
        i.click(function(a) {
            f.close(a)
        }),
        e.load && f.load()
    }
    a.fn.overlay = function(c) {
        var e = this.data("overlay");
        if (e) return e;
        a.isFunction(c) && (c = {
            onBeforeLoad: c
        }),
        c = a.extend(!0, {},
        a.tools.overlay.conf, c),
        this.each(function() {
            e = new d(a(this), c),
            b.push(e),
            a(this).data("overlay", e)
        });
        return c.api ? e: this
    }
})(jQuery); (function(a) {
    a.tools = a.tools || {
        version: "v1.2.7"
    };
    var b;
    b = a.tools.rangeinput = {
        conf: {
            min: 0,
            max: 100,
            step: "any",
            steps: 0,
            value: 0,
            precision: undefined,
            vertical: 0,
            keyboard: !0,
            progress: !1,
            speed: 100,
            css: {
                input: "range",
                slider: "slider",
                progress: "progress",
                handle: "handle"
            }
        }
    };
    var c, d;
    a.fn.drag = function(b) {
        document.ondragstart = function() {
            return ! 1
        },
        b = a.extend({
            x: !0,
            y: !0,
            drag: !0
        },
        b),
        c = c || a(document).on("mousedown mouseup",
        function(e) {
            var f = a(e.target);
            if (e.type == "mousedown" && f.data("drag")) {
                var g = f.position(),
                h = e.pageX - g.left,
                i = e.pageY - g.top,
                j = !0;
                c.on("mousemove.drag",
                function(a) {
                    var c = a.pageX - h,
                    e = a.pageY - i,
                    g = {};
                    b.x && (g.left = c),
                    b.y && (g.top = e),
                    j && (f.trigger("dragStart"), j = !1),
                    b.drag && f.css(g),
                    f.trigger("drag", [e, c]),
                    d = f
                }),
                e.preventDefault()
            } else try {
                d && d.trigger("dragEnd")
            } finally {
                c.off("mousemove.drag"),
                d = null
            }
        });
        return this.data("drag", !0)
    };
    function e(a, b) {
        var c = Math.pow(10, b);
        return Math.round(a * c) / c
    }
    function f(a, b) {
        var c = parseInt(a.css(b), 10);
        if (c) return c;
        var d = a[0].currentStyle;
        return d && d.width && parseInt(d.width, 10)
    }
    function g(a) {
        var b = a.data("events");
        return b && b.onSlide
    }
    function h(b, c) {
        var d = this,
        h = c.css,
        i = a("<div><div/><a href='#'/></div>").data("rangeinput", d),
        j,
        k,
        l,
        m,
        n;
        b.before(i);
        var o = i.addClass(h.slider).find("a").addClass(h.handle),
        p = i.find("div").addClass(h.progress);
        a.each("min,max,step,value".split(","),
        function(a, d) {
            var e = b.attr(d);
            parseFloat(e) && (c[d] = parseFloat(e, 10))
        });
        var q = c.max - c.min,
        r = c.step == "any" ? 0 : c.step,
        s = c.precision;
        s === undefined && (s = r.toString().split("."), s = s.length === 2 ? s[1].length: 0);
        if (b.attr("type") == "range") {
            var t = b.clone().wrap("<div/>").parent().html(),
            u = a(t.replace(/type/i, "type=text data-orig-type"));
            u.val(c.value),
            b.replaceWith(u),
            b = u
        }
        b.addClass(h.input);
        var v = a(d).add(b),
        w = !0;
        function x(a, f, g, h) {
            g === undefined ? g = f / m * q: h && (g -= c.min),
            r && (g = Math.round(g / r) * r);
            if (f === undefined || r) f = g * m / q;
            if (isNaN(g)) return d;
            f = Math.max(0, Math.min(f, m)),
            g = f / m * q;
            if (h || !j) g += c.min;
            j && (h ? f = m - f: g = c.max - g),
            g = e(g, s);
            var i = a.type == "click";
            if (w && k !== undefined && !i) {
                a.type = "onSlide",
                v.trigger(a, [g, f]);
                if (a.isDefaultPrevented()) return d
            }
            var l = i ? c.speed: 0,
            t = i ?
            function() {
                a.type = "change",
                v.trigger(a, [g])
            }: null;
            j ? (o.animate({
                top: f
            },
            l, t), c.progress && p.animate({
                height: m - f + o.height() / 2
            },
            l)) : (o.animate({
                left: f
            },
            l, t), c.progress && p.animate({
                width: f + o.width() / 2
            },
            l)),
            k = g,
            n = f,
            b.val(g);
            return d
        }
        a.extend(d, {
            getValue: function() {
                return k
            },
            setValue: function(b, c) {
                y();
                return x(c || a.Event("api"), undefined, b, !0)
            },
            getConf: function() {
                return c
            },
            getProgress: function() {
                return p
            },
            getHandle: function() {
                return o
            },
            getInput: function() {
                return b
            },
            step: function(b, e) {
                e = e || a.Event();
                var f = c.step == "any" ? 1 : c.step;
                d.setValue(k + f * (b || 1), e)
            },
            stepUp: function(a) {
                return d.step(a || 1)
            },
            stepDown: function(a) {
                return d.step( - a || -1)
            }
        }),
        a.each("onSlide,change".split(","),
        function(b, e) {
            a.isFunction(c[e]) && a(d).on(e, c[e]),
            d[e] = function(b) {
                b && a(d).on(e, b);
                return d
            }
        }),
        o.drag({
            drag: !1
        }).on("dragStart",
        function() {
            y(),
            w = g(a(d)) || g(b)
        }).on("drag",
        function(a, c, d) {
            if (b.is(":disabled")) return ! 1;
            x(a, j ? c: d)
        }).on("dragEnd",
        function(a) {
            a.isDefaultPrevented() || (a.type = "change", v.trigger(a, [k]))
        }).click(function(a) {
            return a.preventDefault()
        }),
        i.click(function(a) {
            if (b.is(":disabled") || a.target == o[0]) return a.preventDefault();
            y();
            var c = j ? o.height() / 2 : o.width() / 2;
            x(a, j ? m - l - c + a.pageY: a.pageX - l - c)
        }),
        c.keyboard && b.keydown(function(c) {
            if (!b.attr("readonly")) {
                var e = c.keyCode,
                f = a([75, 76, 38, 33, 39]).index(e) != -1,
                g = a([74, 72, 40, 34, 37]).index(e) != -1;
                if ((f || g) && !(c.shiftKey || c.altKey || c.ctrlKey)) {
                    f ? d.step(e == 33 ? 10 : 1, c) : g && d.step(e == 34 ? -10 : -1, c);
                    return c.preventDefault()
                }
            }
        }),
        b.blur(function(b) {
            var c = a(this).val();
            c !== k && d.setValue(c, b)
        }),
        a.extend(b[0], {
            stepUp: d.stepUp,
            stepDown: d.stepDown
        });
        function y() {
            j = c.vertical || f(i, "height") > f(i, "width"),
            j ? (m = f(i, "height") - f(o, "height"), l = i.offset().top + m) : (m = f(i, "width") - f(o, "width"), l = i.offset().left)
        }
        function z() {
            y(),
            d.setValue(c.value !== undefined ? c.value: c.min)
        }
        z(),
        m || a(window).load(z)
    }
    a.expr[":"].range = function(b) {
        var c = b.getAttribute("type");
        return c && c == "range" || a(b).filter("input").data("rangeinput")
    },
    a.fn.rangeinput = function(c) {
        if (this.data("rangeinput")) return this;
        c = a.extend(!0, {},
        b.conf, c);
        var d;
        this.each(function() {
            var b = new h(a(this), a.extend(!0, {},
            c)),
            e = b.getInput().data("rangeinput", b);
            d = d ? d.add(e) : e
        });
        return d ? d: this
    }
})(jQuery); (function(a) {
    a.tools = a.tools || {
        version: "v1.2.7"
    },
    a.tools.scrollable = {
        conf: {
            activeClass: "active",
            circular: !1,
            clonedClass: "cloned",
            disabledClass: "disabled",
            easing: "swing",
            initialIndex: 0,
            item: "> *",
            items: ".items",
            keyboard: !0,
            mousewheel: !1,
            next: ".next",
            prev: ".prev",
            size: 1,
            speed: 400,
            vertical: !1,
            touch: !0,
            wheelSpeed: 0
        }
    };
    function b(a, b) {
        var c = parseInt(a.css(b), 10);
        if (c) return c;
        var d = a[0].currentStyle;
        return d && d.width && parseInt(d.width, 10)
    }
    function c(b, c) {
        var d = a(c);
        return d.length < 2 ? d: b.parent().find(c)
    }
    var d;
    function e(b, e) {
        var f = this,
        g = b.add(f),
        h = b.children(),
        i = 0,
        j = e.vertical;
        d || (d = f),
        h.length > 1 && (h = a(e.items, b)),
        e.size > 1 && (e.circular = !1),
        a.extend(f, {
            getConf: function() {
                return e
            },
            getIndex: function() {
                return i
            },
            getSize: function() {
                return f.getItems().size()
            },
            getNaviButtons: function() {
                return n.add(o)
            },
            getRoot: function() {
                return b
            },
            getItemWrap: function() {
                return h
            },
            getItems: function() {
                return h.find(e.item).not("." + e.clonedClass)
            },
            move: function(a, b) {
                return f.seekTo(i + a, b)
            },
            next: function(a) {
                return f.move(e.size, a)
            },
            prev: function(a) {
                return f.move( - e.size, a)
            },
            begin: function(a) {
                return f.seekTo(0, a)
            },
            end: function(a) {
                return f.seekTo(f.getSize() - 1, a)
            },
            focus: function() {
                d = f;
                return f
            },
            addItem: function(b) {
                b = a(b),
                e.circular ? (h.children().last().before(b), h.children().first().replaceWith(b.clone().addClass(e.clonedClass))) : (h.append(b), o.removeClass("disabled")),
                g.trigger("onAddItem", [b]);
                return f
            },
            seekTo: function(b, c, k) {
                b.jquery || (b *= 1);
                if (e.circular && b === 0 && i == -1 && c !== 0) return f;
                if (!e.circular && b < 0 || b > f.getSize() || b < -1) return f;
                var l = b;
                b.jquery ? b = f.getItems().index(b) : l = f.getItems().eq(b);
                var m = a.Event("onBeforeSeek");
                if (!k) {
                    g.trigger(m, [b, c]);
                    if (m.isDefaultPrevented() || !l.length) return f
                }
                var n = j ? {
                    top: -l.position().top
                }: {
                    left: -l.position().left
                };
                i = b,
                d = f,
                c === undefined && (c = e.speed),
                h.animate(n, c, e.easing, k ||
                function() {
                    g.trigger("onSeek", [b])
                });
                return f
            }
        }),
        a.each(["onBeforeSeek", "onSeek", "onAddItem"],
        function(b, c) {
            a.isFunction(e[c]) && a(f).on(c, e[c]),
            f[c] = function(b) {
                b && a(f).on(c, b);
                return f
            }
        });
        if (e.circular) {
            var k = f.getItems().slice( - 1).clone().prependTo(h),
            l = f.getItems().eq(1).clone().appendTo(h);
            k.add(l).addClass(e.clonedClass),
            f.onBeforeSeek(function(a, b, c) {
                if (!a.isDefaultPrevented()) {
                    if (b == -1) {
                        f.seekTo(k, c,
                        function() {
                            f.end(0)
                        });
                        return a.preventDefault()
                    }
                    b == f.getSize() && f.seekTo(l, c,
                    function() {
                        f.begin(0)
                    })
                }
            });
            var m = b.parents().add(b).filter(function() {
                if (a(this).css("display") === "none") return ! 0
            });
            m.length ? (m.show(), f.seekTo(0, 0,
            function() {}), m.hide()) : f.seekTo(0, 0,
            function() {})
        }
        var n = c(b, e.prev).click(function(a) {
            a.stopPropagation(),
            f.prev()
        }),
        o = c(b, e.next).click(function(a) {
            a.stopPropagation(),
            f.next()
        });
        e.circular || (f.onBeforeSeek(function(a, b) {
            setTimeout(function() {
                a.isDefaultPrevented() || (n.toggleClass(e.disabledClass, b <= 0), o.toggleClass(e.disabledClass, b >= f.getSize() - 1))
            },
            1)
        }), e.initialIndex || n.addClass(e.disabledClass)),
        f.getSize() < 2 && n.add(o).addClass(e.disabledClass),
        e.mousewheel && a.fn.mousewheel && b.mousewheel(function(a, b) {
            if (e.mousewheel) {
                f.move(b < 0 ? 1 : -1, e.wheelSpeed || 50);
                return ! 1
            }
        });
        if (e.touch) {
            var p = {};
            h[0].ontouchstart = function(a) {
                var b = a.touches[0];
                p.x = b.clientX,
                p.y = b.clientY
            },
            h[0].ontouchmove = function(a) {
                if (a.touches.length == 1 && !h.is(":animated")) {
                    var b = a.touches[0],
                    c = p.x - b.clientX,
                    d = p.y - b.clientY;
                    f[j && d > 0 || !j && c > 0 ? "next": "prev"](),
                    a.preventDefault()
                }
            }
        }
        e.keyboard && a(document).on("keydown.scrollable",
        function(b) {
            if (! (!e.keyboard || b.altKey || b.ctrlKey || b.metaKey || a(b.target).is(":input"))) {
                if (e.keyboard != "static" && d != f) return;
                var c = b.keyCode;
                if (j && (c == 38 || c == 40)) {
                    f.move(c == 38 ? -1 : 1);
                    return b.preventDefault()
                }
                if (!j && (c == 37 || c == 39)) {
                    f.move(c == 37 ? -1 : 1);
                    return b.preventDefault()
                }
            }
        }),
        e.initialIndex && f.seekTo(e.initialIndex, 0,
        function() {})
    }
    a.fn.scrollable = function(b) {
        var c = this.data("scrollable");
        if (c) return c;
        b = a.extend({},
        a.tools.scrollable.conf, b),
        this.each(function() {
            c = new e(a(this), b),
            a(this).data("scrollable", c)
        });
        return b.api ? c: this
    }
})(jQuery); (function(a) {
    a.tools = a.tools || {
        version: "v1.2.7"
    },
    a.tools.tabs = {
        conf: {
            tabs: "a",
            current: "current",
            onBeforeClick: null,
            onClick: null,
            effect: "default",
            initialEffect: !1,
            initialIndex: 0,
            event: "click",
            rotate: !1,
            slideUpSpeed: 400,
            slideDownSpeed: 400,
            history: !1
        },
        addEffect: function(a, c) {
            b[a] = c
        }
    };
    var b = {
        "default": function(a, b) {
            this.getPanes().hide().eq(a).show(),
            b.call()
        },
        fade: function(a, b) {
            var c = this.getConf(),
            d = c.fadeOutSpeed,
            e = this.getPanes();
            d ? e.fadeOut(d) : e.hide(),
            e.eq(a).fadeIn(c.fadeInSpeed, b)
        },
        slide: function(a, b) {
            var c = this.getConf();
            this.getPanes().slideUp(c.slideUpSpeed),
            this.getPanes().eq(a).slideDown(c.slideDownSpeed, b)
        },
        ajax: function(a, b) {
            this.getPanes().eq(0).load(this.getTabs().eq(a).attr("href"), b)
        }
    },
    c,
    d;
    a.tools.tabs.addEffect("horizontal",
    function(b, e) {
        if (!c) {
            var f = this.getPanes().eq(b),
            g = this.getCurrentPane();
            d || (d = this.getPanes().eq(0).width()),
            c = !0,
            f.show(),
            g.animate({
                width: 0
            },
            {
                step: function(a) {
                    f.css("width", d - a)
                },
                complete: function() {
                    a(this).hide(),
                    e.call(),
                    c = !1
                }
            }),
            g.length || (e.call(), c = !1)
        }
    });
    function e(c, d, e) {
        var f = this,
        g = c.add(this),
        h = c.find(e.tabs),
        i = d.jquery ? d: c.children(d),
        j;
        h.length || (h = c.children()),
        i.length || (i = c.parent().find(d)),
        i.length || (i = a(d)),
        a.extend(this, {
            click: function(d, i) {
                var k = h.eq(d),
                l = !c.data("tabs");
                typeof d == "string" && d.replace("#", "") && (k = h.filter("[href*=\"" + d.replace("#", "") + "\"]"), d = Math.max(h.index(k), 0));
                if (e.rotate) {
                    var m = h.length - 1;
                    if (d < 0) return f.click(m, i);
                    if (d > m) return f.click(0, i)
                }
                if (!k.length) {
                    if (j >= 0) return f;
                    d = e.initialIndex,
                    k = h.eq(d)
                }
                if (d === j) return f;
                i = i || a.Event(),
                i.type = "onBeforeClick",
                g.trigger(i, [d]);
                if (!i.isDefaultPrevented()) {
                    var n = l ? e.initialEffect && e.effect || "default": e.effect;
                    b[n].call(f, d,
                    function() {
                        j = d,
                        i.type = "onClick",
                        g.trigger(i, [d])
                    }),
                    h.removeClass(e.current),
                    k.addClass(e.current);
                    return f
                }
            },
            getConf: function() {
                return e
            },
            getTabs: function() {
                return h
            },
            getPanes: function() {
                return i
            },
            getCurrentPane: function() {
                return i.eq(j)
            },
            getCurrentTab: function() {
                return h.eq(j)
            },
            getIndex: function() {
                return j
            },
            next: function() {
                return f.click(j + 1)
            },
            prev: function() {
                return f.click(j - 1)
            },
            destroy: function() {
                h.off(e.event).removeClass(e.current),
                i.find("a[href^=\"#\"]").off("click.T");
                return f
            }
        }),
        a.each("onBeforeClick,onClick".split(","),
        function(b, c) {
            a.isFunction(e[c]) && a(f).on(c, e[c]),
            f[c] = function(b) {
                b && a(f).on(c, b);
                return f
            }
        }),
        e.history && a.fn.history && (a.tools.history.init(h), e.event = "history"),
        h.each(function(b) {
            a(this).on(e.event,
            function(a) {
                f.click(b, a);
                return a.preventDefault()
            })
        }),
        i.find("a[href^=\"#\"]").on("click.T",
        function(b) {
            f.click(a(this).attr("href"), b)
        }),
        location.hash && e.tabs == "a" && c.find("[href=\"" + location.hash + "\"]").length ? f.click(location.hash) : (e.initialIndex === 0 || e.initialIndex > 0) && f.click(e.initialIndex)
    }
    a.fn.tabs = function(b, c) {
        var d = this.data("tabs");
        d && (d.destroy(), this.removeData("tabs")),
        a.isFunction(c) && (c = {
            onBeforeClick: c
        }),
        c = a.extend({},
        a.tools.tabs.conf, c),
        this.each(function() {
            d = new e(a(this), b, c),
            a(this).data("tabs", d)
        });
        return c.api ? d: this
    }
})(jQuery); (function(a) {
    a.tools = a.tools || {
        version: "v1.2.7"
    };
    var b;
    b = a.tools.expose = {
        conf: {
            maskId: "exposeMask",
            loadSpeed: "slow",
            closeSpeed: "fast",
            closeOnClick: !0,
            closeOnEsc: !0,
            zIndex: 9998,
            opacity: .8,
            startOpacity: 0,
            color: "#fff",
            onLoad: null,
            onClose: null
        }
    };
    function c() {
        if (a.browser.msie) {
            var b = a(document).height(),
            c = a(window).height();
            return [window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, b - c < 20 ? c: b]
        }
        return [a(document).width(), a(document).height()]
    }
    function d(b) {
        if (b) return b.call(a.mask)
    }
    var e, f, g, h, i;
    a.mask = {
        load: function(j, k) {
            if (g) return this;
            typeof j == "string" && (j = {
                color: j
            }),
            j = j || h,
            h = j = a.extend(a.extend({},
            b.conf), j),
            e = a("#" + j.maskId),
            e.length || (e = a("<div/>").attr("id", j.maskId), a("body").append(e));
            var l = c();
            e.css({
                position: "absolute",
                top: 0,
                left: 0,
                width: l[0],
                height: l[1],
                display: "none",
                opacity: j.startOpacity,
                zIndex: j.zIndex
            }),
            j.color && e.css("backgroundColor", j.color);
            if (d(j.onBeforeLoad) === !1) return this;
            j.closeOnEsc && a(document).on("keydown.mask",
            function(b) {
                b.keyCode == 27 && a.mask.close(b)
            }),
            j.closeOnClick && e.on("click.mask",
            function(b) {
                a.mask.close(b)
            }),
            a(window).on("resize.mask",
            function() {
                a.mask.fit()
            }),
            k && k.length && (i = k.eq(0).css("zIndex"), a.each(k,
            function() {
                var b = a(this);
                /relative|absolute|fixed/i.test(b.css("position")) || b.css("position", "relative")
            }), f = k.css({
                zIndex: Math.max(j.zIndex + 1, i == "auto" ? 0 : i)
            })),
            e.css({
                display: "block"
            }).fadeTo(j.loadSpeed, j.opacity,
            function() {
                a.mask.fit(),
                d(j.onLoad),
                g = "full"
            }),
            g = !0;
            return this
        },
        close: function() {
            if (g) {
                if (d(h.onBeforeClose) === !1) return this;
                e.fadeOut(h.closeSpeed,
                function() {
                    d(h.onClose),
                    f && f.css({
                        zIndex: i
                    }),
                    g = !1
                }),
                a(document).off("keydown.mask"),
                e.off("click.mask"),
                a(window).off("resize.mask")
            }
            return this
        },
        fit: function() {
            if (g) {
                var a = c();
                e.css({
                    width: a[0],
                    height: a[1]
                })
            }
        },
        getMask: function() {
            return e
        },
        isLoaded: function(a) {
            return a ? g == "full": g
        },
        getConf: function() {
            return h
        },
        getExposed: function() {
            return f
        }
    },
    a.fn.mask = function(b) {
        a.mask.load(b);
        return this
    },
    a.fn.expose = function(b) {
        a.mask.load(b, this);
        return this
    }
})(jQuery); (function(a) {
    a.fn.mousewheel = function(a) {
        return this[a ? "on": "trigger"]("wheel", a)
    },
    a.event.special.wheel = {
        setup: function() {
            a.event.add(this, b, c, {})
        },
        teardown: function() {
            a.event.remove(this, b, c)
        }
    };
    var b = a.browser.mozilla ? "DOMMouseScroll" + (a.browser.version < "1.9" ? " mousemove": "") : "mousewheel";
    function c(b) {
        switch (b.type) {
        case "mousemove":
            return a.extend(b.data, {
                clientX: b.clientX,
                clientY: b.clientY,
                pageX: b.pageX,
                pageY: b.pageY
            });
        case "DOMMouseScroll":
            a.extend(b, b.data),
            b.delta = -b.detail / 3;
            break;
        case "mousewheel":
            b.delta = b.wheelDelta / 120
        }
        b.type = "wheel";
        return a.event.handle.call(this, b, b.delta)
    }
})(jQuery); (function(a) {
    a.tools = a.tools || {
        version: "v1.2.7"
    },
    a.tools.tooltip = {
        conf: {
            effect: "toggle",
            fadeOutSpeed: "fast",
            predelay: 0,
            delay: 30,
            opacity: 1,
            tip: 0,
            fadeIE: !1,
            position: ["top", "center"],
            offset: [0, 0],
            relative: !1,
            cancelDefault: !0,
            events: {
                def: "mouseenter,mouseleave",
                input: "focus,blur",
                widget: "focus mouseenter,blur mouseleave",
                tooltip: "mouseenter,mouseleave"
            },
            layout: "<div/>",
            tipClass: "tooltip"
        },
        addEffect: function(a, c, d) {
            b[a] = [c, d]
        }
    };
    var b = {
        toggle: [function(a) {
            var b = this.getConf(),
            c = this.getTip(),
            d = b.opacity;
            d < 1 && c.css({
                opacity: d
            }),
            c.show(),
            a.call()
        },
        function(a) {
            this.getTip().hide(),
            a.call()
        }],
        fade: [function(b) {
            var c = this.getConf(); ! a.browser.msie || c.fadeIE ? this.getTip().fadeTo(c.fadeInSpeed, c.opacity, b) : (this.getTip().show(), b())
        },
        function(b) {
            var c = this.getConf(); ! a.browser.msie || c.fadeIE ? this.getTip().fadeOut(c.fadeOutSpeed, b) : (this.getTip().hide(), b())
        }]
    };
    function c(b, c, d) {
        var e = d.relative ? b.position().top: b.offset().top,
        f = d.relative ? b.position().left: b.offset().left,
        g = d.position[0];
        e -= c.outerHeight() - d.offset[0],
        f += b.outerWidth() + d.offset[1],
        /iPad/i.test(navigator.userAgent) && (e -= a(window).scrollTop());
        var h = c.outerHeight() + b.outerHeight();
        g == "center" && (e += h / 2),
        g == "bottom" && (e += h),
        g = d.position[1];
        var i = c.outerWidth() + b.outerWidth();
        g == "center" && (f -= i / 2),
        g == "left" && (f -= i);
        return {
            top: e,
            left: f
        }
    }
    function d(d, e) {
        var f = this,
        g = d.add(f),
        h,
        i = 0,
        j = 0,
        k = d.attr("title"),
        l = d.attr("data-tooltip"),
        m = b[e.effect],
        n,
        o = d.is(":input"),
        p = o && d.is(":checkbox, :radio, select, :button, :submit"),
        q = d.attr("type"),
        r = e.events[q] || e.events[o ? p ? "widget": "input": "def"];
        if (!m) throw "Nonexistent effect \"" + e.effect + "\"";
        r = r.split(/,\s*/);
        if (r.length != 2) throw "Tooltip: bad events configuration for " + q;
        d.on(r[0],
        function(a) {
            clearTimeout(i),
            e.predelay ? j = setTimeout(function() {
                f.show(a)
            },
            e.predelay) : f.show(a)
        }).on(r[1],
        function(a) {
            clearTimeout(j),
            e.delay ? i = setTimeout(function() {
                f.hide(a)
            },
            e.delay) : f.hide(a)
        }),
        k && e.cancelDefault && (d.removeAttr("title"), d.data("title", k)),
        a.extend(f, {
            show: function(b) {
                if (!h) {
                    l ? h = a(l) : e.tip ? h = a(e.tip).eq(0) : k ? h = a(e.layout).addClass(e.tipClass).appendTo(document.body).hide().append(k) : (h = d.next(), h.length || (h = d.parent().next()));
                    if (!h.length) throw "Cannot find tooltip for " + d
                }
                if (f.isShown()) return f;
                h.stop(!0, !0);
                var o = c(d, h, e);
                e.tip && h.html(d.data("title")),
                b = a.Event(),
                b.type = "onBeforeShow",
                g.trigger(b, [o]);
                if (b.isDefaultPrevented()) return f;
                o = c(d, h, e),
                h.css({
                    position: "absolute",
                    top: o.top,
                    left: o.left
                }),
                n = !0,
                m[0].call(f,
                function() {
                    b.type = "onShow",
                    n = "full",
                    g.trigger(b)
                });
                var p = e.events.tooltip.split(/,\s*/);
                h.data("__set") || (h.off(p[0]).on(p[0],
                function() {
                    clearTimeout(i),
                    clearTimeout(j)
                }), p[1] && !d.is("input:not(:checkbox, :radio), textarea") && h.off(p[1]).on(p[1],
                function(a) {
                    a.relatedTarget != d[0] && d.trigger(r[1].split(" ")[0])
                }), e.tip || h.data("__set", !0));
                return f
            },
            hide: function(c) {
                if (!h || !f.isShown()) return f;
                c = a.Event(),
                c.type = "onBeforeHide",
                g.trigger(c);
                if (!c.isDefaultPrevented()) {
                    n = !1,
                    b[e.effect][1].call(f,
                    function() {
                        c.type = "onHide",
                        g.trigger(c)
                    });
                    return f
                }
            },
            isShown: function(a) {
                return a ? n == "full": n
            },
            getConf: function() {
                return e
            },
            getTip: function() {
                return h
            },
            getTrigger: function() {
                return d
            }
        }),
        a.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),
        function(b, c) {
            a.isFunction(e[c]) && a(f).on(c, e[c]),
            f[c] = function(b) {
                b && a(f).on(c, b);
                return f
            }
        })
    }
    a.fn.tooltip = function(b) {
        var c = this.data("tooltip");
        if (c) return c;
        b = a.extend(!0, {},
        a.tools.tooltip.conf, b),
        typeof b.position == "string" && (b.position = b.position.split(/,?\s/)),
        this.each(function() {
            c = new d(a(this), b),
            a(this).data("tooltip", c)
        });
        return b.api ? c: this
    }
})(jQuery); (function(a) {
    var b = a.tools.tooltip;
    a.extend(b.conf, {
        direction: "up",
        bounce: !1,
        slideOffset: 10,
        slideInSpeed: 200,
        slideOutSpeed: 200,
        slideFade: !a.browser.msie
    });
    var c = {
        up: ["-", "top"],
        down: ["+", "top"],
        left: ["-", "left"],
        right: ["+", "left"]
    };
    b.addEffect("slide",
    function(a) {
        var b = this.getConf(),
        d = this.getTip(),
        e = b.slideFade ? {
            opacity: b.opacity
        }: {},
        f = c[b.direction] || c.up;
        e[f[1]] = f[0] + "=" + b.slideOffset,
        b.slideFade && d.css({
            opacity: 0
        }),
        d.show().animate(e, b.slideInSpeed, a)
    },
    function(b) {
        var d = this.getConf(),
        e = d.slideOffset,
        f = d.slideFade ? {
            opacity: 0
        }: {},
        g = c[d.direction] || c.up,
        h = "" + g[0];
        d.bounce && (h = h == "+" ? "-": "+"),
        f[g[1]] = h + "=" + e,
        this.getTip().animate(f, d.slideOutSpeed,
        function() {
            a(this).hide(),
            b.call()
        })
    })
})(jQuery); (function(a) {
    a.tools = a.tools || {
        version: "v1.2.7"
    };
    var b = /\[type=([a-z]+)\]/,
    c = /^-?[0-9]*(\.[0-9]+)?$/,
    d = a.tools.dateinput,
    e = /^([a-z0-9_\.\-\+]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/i,
    f = /^(https?:\/\/)?[\da-z\.\-]+\.[a-z\.]{2,6}[#&+_\?\/\w \.\-=]*$/i,
    g;
    g = a.tools.validator = {
        conf: {
            grouped: !1,
            effect: "default",
            errorClass: "invalid",
            inputEvent: null,
            errorInputEvent: "keyup",
            formEvent: "submit",
            lang: "en",
            message: "<div/>",
            messageAttr: "data-message",
            messageClass: "error",
            offset: [0, 0],
            position: "center right",
            singleError: !1,
            speed: "normal"
        },
        messages: {
            "*": {
                en: "Please correct this value"
            }
        },
        localize: function(b, c) {
            a.each(c,
            function(a, c) {
                g.messages[a] = g.messages[a] || {},
                g.messages[a][b] = c
            })
        },
        localizeFn: function(b, c) {
            g.messages[b] = g.messages[b] || {},
            a.extend(g.messages[b], c)
        },
        fn: function(c, d, e) {
            a.isFunction(d) ? e = d: (typeof d == "string" && (d = {
                en: d
            }), this.messages[c.key || c] = d);
            var f = b.exec(c);
            f && (c = i(f[1])),
            j.push([c, e])
        },
        addEffect: function(a, b, c) {
            k[a] = [b, c]
        }
    };
    function h(b, c, d) {
        c = a(c).first() || c;
        var e = b.offset().top,
        f = b.offset().left,
        g = d.position.split(/,?\s+/),
        h = g[0],
        i = g[1];
        e -= c.outerHeight() - d.offset[0],
        f += b.outerWidth() + d.offset[1],
        /iPad/i.test(navigator.userAgent) && (e -= a(window).scrollTop());
        var j = c.outerHeight() + b.outerHeight();
        h == "center" && (e += j / 2),
        h == "bottom" && (e += j);
        var k = b.outerWidth();
        i == "center" && (f -= (k + c.outerWidth()) / 2),
        i == "left" && (f -= k);
        return {
            top: e,
            left: f
        }
    }
    function i(a) {
        function b() {
            return this.getAttribute("type") == a
        }
        b.key = "[type=\"" + a + "\"]";
        return b
    }
    var j = [],
    k = {
        "default": [function(b) {
            var c = this.getConf();
            a.each(b,
            function(b, d) {
                var e = d.input;
                e.addClass(c.errorClass);
                var f = e.data("msg.el");
                f || (f = a(c.message).addClass(c.messageClass).appendTo(document.body), e.data("msg.el", f)),
                f.css({
                    visibility: "hidden"
                }).find("p").remove(),
                a.each(d.messages,
                function(b, c) {
                    a("<p/>").html(c).appendTo(f)
                }),
                f.outerWidth() == f.parent().width() && f.add(f.find("p")).css({
                    display: "inline"
                });
                var g = h(e, f, c);
                f.css({
                    visibility: "visible",
                    position: "absolute",
                    top: g.top,
                    left: g.left
                }).fadeIn(c.speed)
            })
        },
        function(b) {
            var c = this.getConf();
            b.removeClass(c.errorClass).each(function() {
                var b = a(this).data("msg.el");
                b && b.css({
                    visibility: "hidden"
                })
            })
        }]
    };
    a.each("email,url,number".split(","),
    function(b, c) {
        a.expr[":"][c] = function(a) {
            return a.getAttribute("type") === c
        }
    }),
    a.fn.oninvalid = function(a) {
        return this[a ? "on": "trigger"]("OI", a)
    },
    g.fn(":email", "Please enter a valid email address",
    function(a, b) {
        return ! b || e.test(b)
    }),
    g.fn(":url", "Please enter a valid URL",
    function(a, b) {
        return ! b || f.test(b)
    }),
    g.fn(":number", "Please enter a numeric value.",
    function(a, b) {
        return c.test(b)
    }),
    g.fn("[max]", "Please enter a value no larger than $1",
    function(a, b) {
        if (b === "" || d && a.is(":date")) return ! 0;
        var c = a.attr("max");
        return parseFloat(b) <= parseFloat(c) ? !0 : [c]
    }),
    g.fn("[min]", "Please enter a value of at least $1",
    function(a, b) {
        if (b === "" || d && a.is(":date")) return ! 0;
        var c = a.attr("min");
        return parseFloat(b) >= parseFloat(c) ? !0 : [c]
    }),
    g.fn("[required]", "Please complete this mandatory field.",
    function(a, b) {
        if (a.is(":checkbox")) return a.is(":checked");
        return b
    }),
    g.fn("[pattern]",
    function(a, b) {
        return b === "" || (new RegExp("^" + a.attr("pattern") + "$")).test(b)
    }),
    g.fn(":radio", "Please select an option.",
    function(b) {
        var c = !1,
        d = a("[name='" + b.attr("name") + "']").each(function(b, d) {
            a(d).is(":checked") && (c = !0)
        });
        return c ? !0 : !1
    });
    function l(b, c, e) {
        var f = this,
        i = c.add(f);
        b = b.not(":button, :image, :reset, :submit"),
        c.attr("novalidate", "novalidate");
        function l(b, c, d) {
            if (e.grouped || !b.length) {
                var f;
                if (d === !1 || a.isArray(d)) {
                    f = g.messages[c.key || c] || g.messages["*"],
                    f = f[e.lang] || g.messages["*"].en;
                    var h = f.match(/\$\d/g);
                    h && a.isArray(d) && a.each(h,
                    function(a) {
                        f = f.replace(this, d[a])
                    })
                } else f = d[e.lang] || d;
                b.push(f)
            }
        }
        a.extend(f, {
            getConf: function() {
                return e
            },
            getForm: function() {
                return c
            },
            getInputs: function() {
                return b
            },
            reflow: function() {
                b.each(function() {
                    var b = a(this),
                    c = b.data("msg.el");
                    if (c) {
                        var d = h(b, c, e);
                        c.css({
                            top: d.top,
                            left: d.left
                        })
                    }
                });
                return f
            },
            invalidate: function(c, d) {
                if (!d) {
                    var g = [];
                    a.each(c,
                    function(a, c) {
                        var d = b.filter("[name='" + a + "']");
                        d.length && (d.trigger("OI", [c]), g.push({
                            input: d,
                            messages: [c]
                        }))
                    }),
                    c = g,
                    d = a.Event()
                }
                d.type = "onFail",
                i.trigger(d, [c]),
                d.isDefaultPrevented() || k[e.effect][0].call(f, c, d);
                return f
            },
            reset: function(c) {
                c = c || b,
                c.removeClass(e.errorClass).each(function() {
                    var b = a(this).data("msg.el");
                    b && (b.remove(), a(this).data("msg.el", null))
                }).off(e.errorInputEvent + ".v");
                return f
            },
            destroy: function() {
                c.off(e.formEvent + ".V reset.V"),
                b.off(e.inputEvent + ".V change.V");
                return f.reset()
            },
            checkValidity: function(c, g) {
                c = c || b,
                c = c.not(":disabled");
                var h = {};
                c = c.filter(function() {
                    var b = a(this).attr("name");
                    if (!h[b]) {
                        h[b] = !0;
                        return a(this)
                    }
                });
                if (!c.length) return ! 0;
                g = g || a.Event(),
                g.type = "onBeforeValidate",
                i.trigger(g, [c]);
                if (g.isDefaultPrevented()) return g.result;
                var m = [];
                c.each(function() {
                    var b = [],
                    c = a(this).data("messages", b),
                    h = d && c.is(":date") ? "onHide.v": e.errorInputEvent + ".v";
                    c.off(h),
                    a.each(j,
                    function() {
                        var a = this,
                        d = a[0];
                        if (c.filter(d).length) {
                            var h = a[1].call(f, c, c.val());
                            if (h !== !0) {
                                g.type = "onBeforeFail",
                                i.trigger(g, [c, d]);
                                if (g.isDefaultPrevented()) return ! 1;
                                var j = c.attr(e.messageAttr);
                                if (j) {
                                    b = [j];
                                    return ! 1
                                }
                                l(b, d, h)
                            }
                        }
                    }),
                    b.length && (m.push({
                        input: c,
                        messages: b
                    }), c.trigger("OI", [b]), e.errorInputEvent && c.on(h,
                    function(a) {
                        f.checkValidity(c, a)
                    }));
                    if (e.singleError && m.length) return ! 1
                });
                var n = k[e.effect];
                if (!n) throw "Validator: cannot find effect \"" + e.effect + "\"";
                if (m.length) {
                    f.invalidate(m, g);
                    return ! 1
                }
                n[1].call(f, c, g),
                g.type = "onSuccess",
                i.trigger(g, [c]),
                c.off(e.errorInputEvent + ".v");
                return ! 0
            }
        }),
        a.each("onBeforeValidate,onBeforeFail,onFail,onSuccess".split(","),
        function(b, c) {
            a.isFunction(e[c]) && a(f).on(c, e[c]),
            f[c] = function(b) {
                b && a(f).on(c, b);
                return f
            }
        }),
        e.formEvent && c.on(e.formEvent + ".V",
        function(a) {
            if (!f.checkValidity(null, a)) return a.preventDefault();
            a.target = c,
            a.type = e.formEvent
        }),
        c.on("reset.V",
        function() {
            f.reset()
        }),
        b[0] && b[0].validity && b.each(function() {
            this.oninvalid = function() {
                return ! 1
            }
        }),
        c[0] && (c[0].checkValidity = f.checkValidity),
        e.inputEvent && b.on(e.inputEvent + ".V",
        function(b) {
            f.checkValidity(a(this), b)
        }),
        b.filter(":checkbox, select").filter("[required]").on("change.V",
        function(b) {
            var c = a(this); (this.checked || c.is("select") && a(this).val()) && k[e.effect][1].call(f, c, b)
        }),
        b.filter(":radio[required]").on("change.V",
        function(b) {
            var c = a("[name='" + a(b.srcElement).attr("name") + "']");
            c != null && c.length != 0 && f.checkValidity(c, b)
        }),
        a(window).resize(function() {
            f.reflow()
        })
    }
    a.fn.validator = function(b) {
        var c = this.data("validator");
        c && (c.destroy(), this.removeData("validator")),
        b = a.extend(!0, {},
        g.conf, b);
        if (this.is("form")) return this.each(function() {
            var d = a(this);
            c = new l(d.find(":input"), d, b),
            d.data("validator", c)
        });
        c = new l(this, this.eq(0).closest("form"), b);
        return this.data("validator", c)
    }
})(jQuery);

/*! http://mths.be/placeholder v2.0.7 by @mathias */
; (function(window, document, $) {

    var isInputSupported = 'placeholder' in document.createElement('input'),
    isTextareaSupported = 'placeholder' in document.createElement('textarea'),
    prototype = $.fn,
    valHooks = $.valHooks,
    hooks,
    placeholder;

    if (isInputSupported && isTextareaSupported) {

        placeholder = prototype.placeholder = function() {
            return this;
        };

        placeholder.input = placeholder.textarea = true;

    } else {

        placeholder = prototype.placeholder = function() {
            var $this = this;
            $this.filter((isInputSupported ? 'textarea': ':input') + '[placeholder]').not('.placeholder').bind({
                'focus.placeholder': clearPlaceholder,
                'blur.placeholder': setPlaceholder
            }).data('placeholder-enabled', true).trigger('blur.placeholder');
            return $this;
        };

        placeholder.input = isInputSupported;
        placeholder.textarea = isTextareaSupported;

        hooks = {
            'get': function(element) {
                var $element = $(element);
                return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '': element.value;
            },
            'set': function(element, value) {
                var $element = $(element);
                if (!$element.data('placeholder-enabled')) {
                    return element.value = value;
                }
                if (value == '') {
                    element.value = value;
                    // Issue #56: Setting the placeholder causes problems if the element continues to have focus.
                    if (element != document.activeElement) {
                        // We can't use `triggerHandler` here because of dummy text/password inputs :(
                        setPlaceholder.call(element);
                    }
                } else if ($element.hasClass('placeholder')) {
                    clearPlaceholder.call(element, true, value) || (element.value = value);
                } else {
                    element.value = value;
                }
                // `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
                return $element;
            }
        };

        isInputSupported || (valHooks.input = hooks);
        isTextareaSupported || (valHooks.textarea = hooks);

        $(function() {
            // Look for forms
            $(document).delegate('form', 'submit.placeholder',
            function() {
                // Clear the placeholder values so they don't get submitted
                var $inputs = $('.placeholder', this).each(clearPlaceholder);
                setTimeout(function() {
                    $inputs.each(setPlaceholder);
                },
                10);
            });
        });

        // Clear placeholder values upon page reload
        $(window).bind('beforeunload.placeholder',
        function() {
            $('.placeholder').each(function() {
                this.value = '';
            });
        });

    }

    function args(elem) {
        // Return an object of element attributes
        var newAttrs = {},
        rinlinejQuery = /^jQuery\d+$/;
        $.each(elem.attributes,
        function(i, attr) {
            if (attr.specified && !rinlinejQuery.test(attr.name)) {
                newAttrs[attr.name] = attr.value;
            }
        });
        return newAttrs;
    }

    function clearPlaceholder(event, value) {
        var input = this,
        $input = $(input);
        if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
            if ($input.data('placeholder-password')) {
                $input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
                // If `clearPlaceholder` was called from `$.valHooks.input.set`
                if (event === true) {
                    return $input[0].value = value;
                }
                $input.focus();
            } else {
                input.value = '';
                $input.removeClass('placeholder');
                input == document.activeElement && input.select();
            }
        }
    }

    function setPlaceholder() {
        var $replacement, input = this,
        $input = $(input),
        $origInput = $input,
        id = this.id;
        if (input.value == '') {
            if (input.type == 'password') {
                if (!$input.data('placeholder-textinput')) {
                    try {
                        $replacement = $input.clone().attr({
                            'type': 'text'
                        });
                    } catch(e) {
                        $replacement = $('<input>').attr($.extend(args(this), {
                            'type': 'text'
                        }));
                    }
                    $replacement.removeAttr('name').data({
                        'placeholder-password': true,
                        'placeholder-id': id
                    }).bind('focus.placeholder', clearPlaceholder);
                    $input.data({
                        'placeholder-textinput': $replacement,
                        'placeholder-id': id
                    }).before($replacement);
                }
                $input = $input.removeAttr('id').hide().prev().attr('id', id).show();
                // Note: `$input[0] != input` now!
            }
            $input.addClass('placeholder');
            $input[0].value = $input.attr('placeholder');
        } else {
            $input.removeClass('placeholder');
        }
    }

} (this, document, jQuery)); (function() {
    var n = this,
    t = n._,
    r = {},
    e = Array.prototype,
    u = Object.prototype,
    i = Function.prototype,
    a = e.push,
    o = e.slice,
    c = e.concat,
    l = u.toString,
    f = u.hasOwnProperty,
    s = e.forEach,
    p = e.map,
    v = e.reduce,
    h = e.reduceRight,
    g = e.filter,
    d = e.every,
    m = e.some,
    y = e.indexOf,
    b = e.lastIndexOf,
    x = Array.isArray,
    _ = Object.keys,
    j = i.bind,
    w = function(n) {
        return n instanceof w ? n: this instanceof w ? (this._wrapped = n, void 0) : new w(n)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = w), exports._ = w) : n._ = w,
    w.VERSION = "1.4.3";
    var A = w.each = w.forEach = function(n, t, e) {
        if (null != n) if (s && n.forEach === s) n.forEach(t, e);
        else if (n.length === +n.length) {
            for (var u = 0,
            i = n.length; i > u; u++) if (t.call(e, n[u], u, n) === r) return
        } else for (var a in n) if (w.has(n, a) && t.call(e, n[a], a, n) === r) return
    };
    w.map = w.collect = function(n, t, r) {
        var e = [];
        return null == n ? e: p && n.map === p ? n.map(t, r) : (A(n,
        function(n, u, i) {
            e[e.length] = t.call(r, n, u, i)
        }), e)
    };
    var O = "Reduce of empty array with no initial value";
    w.reduce = w.foldl = w.inject = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), v && n.reduce === v) return e && (t = w.bind(t, e)),
        u ? n.reduce(t, r) : n.reduce(t);
        if (A(n,
        function(n, i, a) {
            u ? r = t.call(e, r, n, i, a) : (r = n, u = !0)
        }), !u) throw new TypeError(O);
        return r
    },
    w.reduceRight = w.foldr = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), h && n.reduceRight === h) return e && (t = w.bind(t, e)),
        u ? n.reduceRight(t, r) : n.reduceRight(t);
        var i = n.length;
        if (i !== +i) {
            var a = w.keys(n);
            i = a.length
        }
        if (A(n,
        function(o, c, l) {
            c = a ? a[--i] : --i,
            u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0)
        }), !u) throw new TypeError(O);
        return r
    },
    w.find = w.detect = function(n, t, r) {
        var e;
        return E(n,
        function(n, u, i) {
            return t.call(r, n, u, i) ? (e = n, !0) : void 0
        }),
        e
    },
    w.filter = w.select = function(n, t, r) {
        var e = [];
        return null == n ? e: g && n.filter === g ? n.filter(t, r) : (A(n,
        function(n, u, i) {
            t.call(r, n, u, i) && (e[e.length] = n)
        }), e)
    },
    w.reject = function(n, t, r) {
        return w.filter(n,
        function(n, e, u) {
            return ! t.call(r, n, e, u)
        },
        r)
    },
    w.every = w.all = function(n, t, e) {
        t || (t = w.identity);
        var u = !0;
        return null == n ? u: d && n.every === d ? n.every(t, e) : (A(n,
        function(n, i, a) {
            return (u = u && t.call(e, n, i, a)) ? void 0 : r
        }), !!u)
    };
    var E = w.some = w.any = function(n, t, e) {
        t || (t = w.identity);
        var u = !1;
        return null == n ? u: m && n.some === m ? n.some(t, e) : (A(n,
        function(n, i, a) {
            return u || (u = t.call(e, n, i, a)) ? r: void 0
        }), !!u)
    };
    w.contains = w.include = function(n, t) {
        return null == n ? !1 : y && n.indexOf === y ? -1 != n.indexOf(t) : E(n,
        function(n) {
            return n === t
        })
    },
    w.invoke = function(n, t) {
        var r = o.call(arguments, 2);
        return w.map(n,
        function(n) {
            return (w.isFunction(t) ? t: n[t]).apply(n, r)
        })
    },
    w.pluck = function(n, t) {
        return w.map(n,
        function(n) {
            return n[t]
        })
    },
    w.where = function(n, t) {
        return w.isEmpty(t) ? [] : w.filter(n,
        function(n) {
            for (var r in t) if (t[r] !== n[r]) return ! 1;
            return ! 0
        })
    },
    w.max = function(n, t, r) {
        if (!t && w.isArray(n) && n[0] === +n[0] && 65535 > n.length) return Math.max.apply(Math, n);
        if (!t && w.isEmpty(n)) return - 1 / 0;
        var e = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return A(n,
        function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a >= e.computed && (e = {
                value: n,
                computed: a
            })
        }),
        e.value
    },
    w.min = function(n, t, r) {
        if (!t && w.isArray(n) && n[0] === +n[0] && 65535 > n.length) return Math.min.apply(Math, n);
        if (!t && w.isEmpty(n)) return 1 / 0;
        var e = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return A(n,
        function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            e.computed > a && (e = {
                value: n,
                computed: a
            })
        }),
        e.value
    },
    w.shuffle = function(n) {
        var t, r = 0,
        e = [];
        return A(n,
        function(n) {
            t = w.random(r++),
            e[r - 1] = e[t],
            e[t] = n
        }),
        e
    };
    var F = function(n) {
        return w.isFunction(n) ? n: function(t) {
            return t[n]
        }
    };
    w.sortBy = function(n, t, r) {
        var e = F(t);
        return w.pluck(w.map(n,
        function(n, t, u) {
            return {
                value: n,
                index: t,
                criteria: e.call(r, n, t, u)
            }
        }).sort(function(n, t) {
            var r = n.criteria,
            e = t.criteria;
            if (r !== e) {
                if (r > e || void 0 === r) return 1;
                if (e > r || void 0 === e) return - 1
            }
            return n.index < t.index ? -1 : 1
        }), "value")
    };
    var k = function(n, t, r, e) {
        var u = {},
        i = F(t || w.identity);
        return A(n,
        function(t, a) {
            var o = i.call(r, t, a, n);
            e(u, o, t)
        }),
        u
    };
    w.groupBy = function(n, t, r) {
        return k(n, t, r,
        function(n, t, r) { (w.has(n, t) ? n[t] : n[t] = []).push(r)
        })
    },
    w.countBy = function(n, t, r) {
        return k(n, t, r,
        function(n, t) {
            w.has(n, t) || (n[t] = 0),
            n[t]++
        })
    },
    w.sortedIndex = function(n, t, r, e) {
        r = null == r ? w.identity: F(r);
        for (var u = r.call(e, t), i = 0, a = n.length; a > i;) {
            var o = i + a >>> 1;
            u > r.call(e, n[o]) ? i = o + 1 : a = o
        }
        return i
    },
    w.toArray = function(n) {
        return n ? w.isArray(n) ? o.call(n) : n.length === +n.length ? w.map(n, w.identity) : w.values(n) : []
    },
    w.size = function(n) {
        return null == n ? 0 : n.length === +n.length ? n.length: w.keys(n).length
    },
    w.first = w.head = w.take = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : o.call(n, 0, t)
    },
    w.initial = function(n, t, r) {
        return o.call(n, 0, n.length - (null == t || r ? 1 : t))
    },
    w.last = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0))
    },
    w.rest = w.tail = w.drop = function(n, t, r) {
        return o.call(n, null == t || r ? 1 : t)
    },
    w.compact = function(n) {
        return w.filter(n, w.identity)
    };
    var R = function(n, t, r) {
        return A(n,
        function(n) {
            w.isArray(n) ? t ? a.apply(r, n) : R(n, t, r) : r.push(n)
        }),
        r
    };
    w.flatten = function(n, t) {
        return R(n, t, [])
    },
    w.without = function(n) {
        return w.difference(n, o.call(arguments, 1))
    },
    w.uniq = w.unique = function(n, t, r, e) {
        w.isFunction(t) && (e = r, r = t, t = !1);
        var u = r ? w.map(n, r, e) : n,
        i = [],
        a = [];
        return A(u,
        function(r, e) { (t ? e && a[a.length - 1] === r: w.contains(a, r)) || (a.push(r), i.push(n[e]))
        }),
        i
    },
    w.union = function() {
        return w.uniq(c.apply(e, arguments))
    },
    w.intersection = function(n) {
        var t = o.call(arguments, 1);
        return w.filter(w.uniq(n),
        function(n) {
            return w.every(t,
            function(t) {
                return w.indexOf(t, n) >= 0
            })
        })
    },
    w.difference = function(n) {
        var t = c.apply(e, o.call(arguments, 1));
        return w.filter(n,
        function(n) {
            return ! w.contains(t, n)
        })
    },
    w.zip = function() {
        for (var n = o.call(arguments), t = w.max(w.pluck(n, "length")), r = Array(t), e = 0; t > e; e++) r[e] = w.pluck(n, "" + e);
        return r
    },
    w.object = function(n, t) {
        if (null == n) return {};
        for (var r = {},
        e = 0,
        u = n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    },
    w.indexOf = function(n, t, r) {
        if (null == n) return - 1;
        var e = 0,
        u = n.length;
        if (r) {
            if ("number" != typeof r) return e = w.sortedIndex(n, t),
            n[e] === t ? e: -1;
            e = 0 > r ? Math.max(0, u + r) : r
        }
        if (y && n.indexOf === y) return n.indexOf(t, r);
        for (; u > e; e++) if (n[e] === t) return e;
        return - 1
    },
    w.lastIndexOf = function(n, t, r) {
        if (null == n) return - 1;
        var e = null != r;
        if (b && n.lastIndexOf === b) return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
        for (var u = e ? r: n.length; u--;) if (n[u] === t) return u;
        return - 1
    },
    w.range = function(n, t, r) {
        1 >= arguments.length && (t = n || 0, n = 0),
        r = arguments[2] || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = Array(e); e > u;) i[u++] = n,
        n += r;
        return i
    };
    var I = function() {};
    w.bind = function(n, t) {
        var r, e;
        if (n.bind === j && j) return j.apply(n, o.call(arguments, 1));
        if (!w.isFunction(n)) throw new TypeError;
        return r = o.call(arguments, 2),
        e = function() {
            if (! (this instanceof e)) return n.apply(t, r.concat(o.call(arguments)));
            I.prototype = n.prototype;
            var u = new I;
            I.prototype = null;
            var i = n.apply(u, r.concat(o.call(arguments)));
            return Object(i) === i ? i: u
        }
    },
    w.bindAll = function(n) {
        var t = o.call(arguments, 1);
        return 0 == t.length && (t = w.functions(n)),
        A(t,
        function(t) {
            n[t] = w.bind(n[t], n)
        }),
        n
    },
    w.memoize = function(n, t) {
        var r = {};
        return t || (t = w.identity),
        function() {
            var e = t.apply(this, arguments);
            return w.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
        }
    },
    w.delay = function(n, t) {
        var r = o.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r)
        },
        t)
    },
    w.defer = function(n) {
        return w.delay.apply(w, [n, 1].concat(o.call(arguments, 1)))
    },
    w.throttle = function(n, t) {
        var r, e, u, i, a = 0,
        o = function() {
            a = new Date,
            u = null,
            i = n.apply(r, e)
        };
        return function() {
            var c = new Date,
            l = t - (c - a);
            return r = this,
            e = arguments,
            0 >= l ? (clearTimeout(u), u = null, a = c, i = n.apply(r, e)) : u || (u = setTimeout(o, l)),
            i
        }
    },
    w.debounce = function(n, t, r) {
        var e, u;
        return function() {
            var i = this,
            a = arguments,
            o = function() {
                e = null,
                r || (u = n.apply(i, a))
            },
            c = r && !e;
            return clearTimeout(e),
            e = setTimeout(o, t),
            c && (u = n.apply(i, a)),
            u
        }
    },
    w.once = function(n) {
        var t, r = !1;
        return function() {
            return r ? t: (r = !0, t = n.apply(this, arguments), n = null, t)
        }
    },
    w.wrap = function(n, t) {
        return function() {
            var r = [n];
            return a.apply(r, arguments),
            t.apply(this, r)
        }
    },
    w.compose = function() {
        var n = arguments;
        return function() {
            for (var t = arguments,
            r = n.length - 1; r >= 0; r--) t = [n[r].apply(this, t)];
            return t[0]
        }
    },
    w.after = function(n, t) {
        return 0 >= n ? t() : function() {
            return 1 > --n ? t.apply(this, arguments) : void 0
        }
    },
    w.keys = _ ||
    function(n) {
        if (n !== Object(n)) throw new TypeError("Invalid object");
        var t = [];
        for (var r in n) w.has(n, r) && (t[t.length] = r);
        return t
    },
    w.values = function(n) {
        var t = [];
        for (var r in n) w.has(n, r) && t.push(n[r]);
        return t
    },
    w.pairs = function(n) {
        var t = [];
        for (var r in n) w.has(n, r) && t.push([r, n[r]]);
        return t
    },
    w.invert = function(n) {
        var t = {};
        for (var r in n) w.has(n, r) && (t[n[r]] = r);
        return t
    },
    w.functions = w.methods = function(n) {
        var t = [];
        for (var r in n) w.isFunction(n[r]) && t.push(r);
        return t.sort()
    },
    w.extend = function(n) {
        return A(o.call(arguments, 1),
        function(t) {
            if (t) for (var r in t) n[r] = t[r]
        }),
        n
    },
    w.pick = function(n) {
        var t = {},
        r = c.apply(e, o.call(arguments, 1));
        return A(r,
        function(r) {
            r in n && (t[r] = n[r])
        }),
        t
    },
    w.omit = function(n) {
        var t = {},
        r = c.apply(e, o.call(arguments, 1));
        for (var u in n) w.contains(r, u) || (t[u] = n[u]);
        return t
    },
    w.defaults = function(n) {
        return A(o.call(arguments, 1),
        function(t) {
            if (t) for (var r in t) null == n[r] && (n[r] = t[r])
        }),
        n
    },
    w.clone = function(n) {
        return w.isObject(n) ? w.isArray(n) ? n.slice() : w.extend({},
        n) : n
    },
    w.tap = function(n, t) {
        return t(n),
        n
    };
    var S = function(n, t, r, e) {
        if (n === t) return 0 !== n || 1 / n == 1 / t;
        if (null == n || null == t) return n === t;
        n instanceof w && (n = n._wrapped),
        t instanceof w && (t = t._wrapped);
        var u = l.call(n);
        if (u != l.call(t)) return ! 1;
        switch (u) {
        case "[object String]":
            return n == t + "";
        case "[object Number]":
            return n != +n ? t != +t: 0 == n ? 1 / n == 1 / t: n == +t;
        case "[object Date]":
        case "[object Boolean]":
            return + n == +t;
        case "[object RegExp]":
            return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof n || "object" != typeof t) return ! 1;
        for (var i = r.length; i--;) if (r[i] == n) return e[i] == t;
        r.push(n),
        e.push(t);
        var a = 0,
        o = !0;
        if ("[object Array]" == u) {
            if (a = n.length, o = a == t.length) for (; a--&&(o = S(n[a], t[a], r, e)););
        } else {
            var c = n.constructor,
            f = t.constructor;
            if (c !== f && !(w.isFunction(c) && c instanceof c && w.isFunction(f) && f instanceof f)) return ! 1;
            for (var s in n) if (w.has(n, s) && (a++, !(o = w.has(t, s) && S(n[s], t[s], r, e)))) break;
            if (o) {
                for (s in t) if (w.has(t, s) && !a--) break;
                o = !a
            }
        }
        return r.pop(),
        e.pop(),
        o
    };
    w.isEqual = function(n, t) {
        return S(n, t, [], [])
    },
    w.isEmpty = function(n) {
        if (null == n) return ! 0;
        if (w.isArray(n) || w.isString(n)) return 0 === n.length;
        for (var t in n) if (w.has(n, t)) return ! 1;
        return ! 0
    },
    w.isElement = function(n) {
        return ! (!n || 1 !== n.nodeType)
    },
    w.isArray = x ||
    function(n) {
        return "[object Array]" == l.call(n)
    },
    w.isObject = function(n) {
        return n === Object(n)
    },
    A(["Arguments", "Function", "String", "Number", "Date", "RegExp"],
    function(n) {
        w["is" + n] = function(t) {
            return l.call(t) == "[object " + n + "]"
        }
    }),
    w.isArguments(arguments) || (w.isArguments = function(n) {
        return ! (!n || !w.has(n, "callee"))
    }),
    w.isFunction = function(n) {
        return "function" == typeof n
    },
    w.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    },
    w.isNaN = function(n) {
        return w.isNumber(n) && n != +n
    },
    w.isBoolean = function(n) {
        return n === !0 || n === !1 || "[object Boolean]" == l.call(n)
    },
    w.isNull = function(n) {
        return null === n
    },
    w.isUndefined = function(n) {
        return void 0 === n
    },
    w.has = function(n, t) {
        return f.call(n, t)
    },
    w.noConflict = function() {
        return n._ = t,
        this
    },
    w.identity = function(n) {
        return n
    },
    w.times = function(n, t, r) {
        for (var e = Array(n), u = 0; n > u; u++) e[u] = t.call(r, u);
        return e
    },
    w.random = function(n, t) {
        return null == t && (t = n, n = 0),
        n + (0 | Math.random() * (t - n + 1))
    };
    var T = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    T.unescape = w.invert(T.escape);
    var M = {
        escape: RegExp("[" + w.keys(T.escape).join("") + "]", "g"),
        unescape: RegExp("(" + w.keys(T.unescape).join("|") + ")", "g")
    };
    w.each(["escape", "unescape"],
    function(n) {
        w[n] = function(t) {
            return null == t ? "": ("" + t).replace(M[n],
            function(t) {
                return T[n][t]
            })
        }
    }),
    w.result = function(n, t) {
        if (null == n) return null;
        var r = n[t];
        return w.isFunction(r) ? r.call(n) : r
    },
    w.mixin = function(n) {
        A(w.functions(n),
        function(t) {
            var r = w[t] = n[t];
            w.prototype[t] = function() {
                var n = [this._wrapped];
                return a.apply(n, arguments),
                z.call(this, r.apply(w, n))
            }
        })
    };
    var N = 0;
    w.uniqueId = function(n) {
        var t = "" + ++N;
        return n ? n + t: t
    },
    w.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var q = /(.)^/,
    B = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "   ": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    },
    D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    w.template = function(n, t, r) {
        r = w.defaults({},
        r, w.templateSettings);
        var e = RegExp([(r.escape || q).source, (r.interpolate || q).source, (r.evaluate || q).source].join("|") + "|$", "g"),
        u = 0,
        i = "__p+='";
        n.replace(e,
        function(t, r, e, a, o) {
            return i += n.slice(u, o).replace(D,
            function(n) {
                return "\\" + B[n]
            }),
            r && (i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"),
            e && (i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"),
            a && (i += "';\n" + a + "\n__p+='"),
            u = o + t.length,
            t
        }),
        i += "';\n",
        r.variable || (i = "with(obj||{}){\n" + i + "}\n"),
        i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
        try {
            var a = Function(r.variable || "obj", "_", i)
        } catch(o) {
            throw o.source = i,
            o
        }
        if (t) return a(t, w);
        var c = function(n) {
            return a.call(this, n, w)
        };
        return c.source = "function(" + (r.variable || "obj") + "){\n" + i + "}",
        c
    },
    w.chain = function(n) {
        return w(n).chain()
    };
    var z = function(n) {
        return this._chain ? w(n).chain() : n
    };
    w.mixin(w),
    A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
    function(n) {
        var t = e[n];
        w.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments),
            "shift" != n && "splice" != n || 0 !== r.length || delete r[0],
            z.call(this, r)
        }
    }),
    A(["concat", "join", "slice"],
    function(n) {
        var t = e[n];
        w.prototype[n] = function() {
            return z.call(this, t.apply(this._wrapped, arguments))
        }
    }),
    w.extend(w.prototype, {
        chain: function() {
            return this._chain = !0,
            this
        },
        value: function() {
            return this._wrapped
        }
    })
}).call(this);
// Backbone.js 0.9.2
// (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://backbonejs.org
(function() {
    var l = this,
    y = l.Backbone,
    z = Array.prototype.slice,
    A = Array.prototype.splice,
    g;
    g = "undefined" !== typeof exports ? exports: l.Backbone = {};
    g.VERSION = "0.9.2";
    var f = l._; ! f && "undefined" !== typeof require && (f = require("underscore"));
    var i = l.jQuery || l.Zepto || l.ender;
    g.setDomLibrary = function(a) {
        i = a
    };
    g.noConflict = function() {
        l.Backbone = y;
        return this
    };
    g.emulateHTTP = !1;
    g.emulateJSON = !1;
    var p = /\s+/,
    k = g.Events = {
        on: function(a, b, c) {
            var d, e, f, g, j;
            if (!b) return this;
            a = a.split(p);
            for (d = this._callbacks || (this._callbacks = {}); e = a.shift();) f = (j = d[e]) ? j.tail: {},
            f.next = g = {},
            f.context = c,
            f.callback = b,
            d[e] = {
                tail: g,
                next: j ? j.next: f
            };
            return this
        },
        off: function(a, b, c) {
            var d, e, h, g, j, q;
            if (e = this._callbacks) {
                if (!a && !b && !c) return delete this._callbacks,
                this;
                for (a = a ? a.split(p) : f.keys(e); d = a.shift();) if (h = e[d], delete e[d], h && (b || c)) for (g = h.tail; (h = h.next) !== g;) if (j = h.callback, q = h.context, b && j !== b || c && q !== c) this.on(d, j, q);
                return this
            }
        },
        trigger: function(a) {
            var b, c, d, e, f, g;
            if (! (d = this._callbacks)) return this;
            f = d.all;
            a = a.split(p);
            for (g = z.call(arguments, 1); b = a.shift();) {
                if (c = d[b]) for (e = c.tail; (c = c.next) !== e;) c.callback.apply(c.context || this, g);
                if (c = f) {
                    e = c.tail;
                    for (b = [b].concat(g); (c = c.next) !== e;) c.callback.apply(c.context || this, b)
                }
            }
            return this
        }
    };
    k.bind = k.on;
    k.unbind = k.off;
    var o = g.Model = function(a, b) {
        var c;
        a || (a = {});
        b && b.parse && (a = this.parse(a));
        if (c = n(this, "defaults")) a = f.extend({},
        c, a);
        b && b.collection && (this.collection = b.collection);
        this.attributes = {};
        this._escapedAttributes = {};
        this.cid = f.uniqueId("c");
        this.changed = {};
        this._silent = {};
        this._pending = {};
        this.set(a, {
            silent: !0
        });
        this.changed = {};
        this._silent = {};
        this._pending = {};
        this._previousAttributes = f.clone(this.attributes);
        this.initialize.apply(this, arguments)
    };
    f.extend(o.prototype, k, {
        changed: null,
        _silent: null,
        _pending: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function() {
            return f.clone(this.attributes)
        },
        get: function(a) {
            return this.attributes[a]
        },
        escape: function(a) {
            var b;
            if (b = this._escapedAttributes[a]) return b;
            b = this.get(a);
            return this._escapedAttributes[a] = f.escape(null == b ? "": "" + b)
        },
        has: function(a) {
            return null != this.get(a)
        },
        set: function(a, b, c) {
            var d, e;
            f.isObject(a) || null == a ? (d = a, c = b) : (d = {},
            d[a] = b);
            c || (c = {});
            if (!d) return this;
            d instanceof o && (d = d.attributes);
            if (c.unset) for (e in d) d[e] = void 0;
            if (!this._validate(d, c)) return ! 1;
            this.idAttribute in d && (this.id = d[this.idAttribute]);
            var b = c.changes = {},
            h = this.attributes,
            g = this._escapedAttributes,
            j = this._previousAttributes || {};
            for (e in d) {
                a = d[e];
                if (!f.isEqual(h[e], a) || c.unset && f.has(h, e)) delete g[e],
                (c.silent ? this._silent: b)[e] = !0;
                c.unset ? delete h[e] : h[e] = a; ! f.isEqual(j[e], a) || f.has(h, e) != f.has(j, e) ? (this.changed[e] = a, c.silent || (this._pending[e] = !0)) : (delete this.changed[e], delete this._pending[e])
            }
            c.silent || this.change(c);
            return this
        },
        unset: function(a, b) { (b || (b = {})).unset = !0;
            return this.set(a, null, b)
        },
        clear: function(a) { (a || (a = {})).unset = !0;
            return this.set(f.clone(this.attributes), a)
        },
        fetch: function(a) {
            var a = a ? f.clone(a) : {},
            b = this,
            c = a.success;
            a.success = function(d, e, f) {
                if (!b.set(b.parse(d, f), a)) return ! 1;
                c && c(b, d)
            };
            a.error = g.wrapError(a.error, b, a);
            return (this.sync || g.sync).call(this, "read", this, a)
        },
        save: function(a, b, c) {
            var d, e;
            f.isObject(a) || null == a ? (d = a, c = b) : (d = {},
            d[a] = b);
            c = c ? f.clone(c) : {};
            if (c.wait) {
                if (!this._validate(d, c)) return ! 1;
                e = f.clone(this.attributes)
            }
            a = f.extend({},
            c, {
                silent: !0
            });
            if (d && !this.set(d, c.wait ? a: c)) return ! 1;
            var h = this,
            i = c.success;
            c.success = function(a, b, e) {
                b = h.parse(a, e);
                if (c.wait) {
                    delete c.wait;
                    b = f.extend(d || {},
                    b)
                }
                if (!h.set(b, c)) return false;
                i ? i(h, a) : h.trigger("sync", h, a, c)
            };
            c.error = g.wrapError(c.error, h, c);
            b = this.isNew() ? "create": "update";
            b = (this.sync || g.sync).call(this, b, this, c);
            c.wait && this.set(e, a);
            return b
        },
        destroy: function(a) {
            var a = a ? f.clone(a) : {},
            b = this,
            c = a.success,
            d = function() {
                b.trigger("destroy", b, b.collection, a)
            };
            if (this.isNew()) return d(),
            !1;
            a.success = function(e) {
                a.wait && d();
                c ? c(b, e) : b.trigger("sync", b, e, a)
            };
            a.error = g.wrapError(a.error, b, a);
            var e = (this.sync || g.sync).call(this, "delete", this, a);
            a.wait || d();
            return e
        },
        url: function() {
            var a = n(this, "urlRoot") || n(this.collection, "url") || t();
            return this.isNew() ? a: a + ("/" == a.charAt(a.length - 1) ? "": "/") + encodeURIComponent(this.id)
        },
        parse: function(a) {
            return a
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return null == this.id
        },
        change: function(a) {
            a || (a = {});
            var b = this._changing;
            this._changing = !0;
            for (var c in this._silent) this._pending[c] = !0;
            var d = f.extend({},
            a.changes, this._silent);
            this._silent = {};
            for (c in d) this.trigger("change:" + c, this, this.get(c), a);
            if (b) return this;
            for (; ! f.isEmpty(this._pending);) {
                this._pending = {};
                this.trigger("change", this, a);
                for (c in this.changed) ! this._pending[c] && !this._silent[c] && delete this.changed[c];
                this._previousAttributes = f.clone(this.attributes)
            }
            this._changing = !1;
            return this
        },
        hasChanged: function(a) {
            return ! arguments.length ? !f.isEmpty(this.changed) : f.has(this.changed, a)
        },
        changedAttributes: function(a) {
            if (!a) return this.hasChanged() ? f.clone(this.changed) : !1;
            var b, c = !1,
            d = this._previousAttributes,
            e;
            for (e in a) if (!f.isEqual(d[e], b = a[e]))(c || (c = {}))[e] = b;
            return c
        },
        previous: function(a) {
            return ! arguments.length || !this._previousAttributes ? null: this._previousAttributes[a]
        },
        previousAttributes: function() {
            return f.clone(this._previousAttributes)
        },
        isValid: function() {
            return ! this.validate(this.attributes)
        },
        _validate: function(a, b) {
            if (b.silent || !this.validate) return ! 0;
            var a = f.extend({},
            this.attributes, a),
            c = this.validate(a, b);
            if (!c) return ! 0;
            b && b.error ? b.error(this, c, b) : this.trigger("error", this, c, b);
            return ! 1
        }
    });
    var r = g.Collection = function(a, b) {
        b || (b = {});
        b.model && (this.model = b.model);
        b.comparator && (this.comparator = b.comparator);
        this._reset();
        this.initialize.apply(this, arguments);
        a && this.reset(a, {
            silent: !0,
            parse: b.parse
        })
    };
    f.extend(r.prototype, k, {
        model: o,
        initialize: function() {},
        toJSON: function(a) {
            return this.map(function(b) {
                return b.toJSON(a)
            })
        },
        add: function(a, b) {
            var c, d, e, g, i, j = {},
            k = {},
            l = [];
            b || (b = {});
            a = f.isArray(a) ? a.slice() : [a];
            c = 0;
            for (d = a.length; c < d; c++) {
                if (! (e = a[c] = this._prepareModel(a[c], b))) throw Error("Can't add an invalid model to a collection");
                g = e.cid;
                i = e.id;
                j[g] || this._byCid[g] || null != i && (k[i] || this._byId[i]) ? l.push(c) : j[g] = k[i] = e
            }
            for (c = l.length; c--;) a.splice(l[c], 1);
            c = 0;
            for (d = a.length; c < d; c++)(e = a[c]).on("all", this._onModelEvent, this),
            this._byCid[e.cid] = e,
            null != e.id && (this._byId[e.id] = e);
            this.length += d;
            A.apply(this.models, [null != b.at ? b.at: this.models.length, 0].concat(a));
            this.comparator && this.sort({
                silent: !0
            });
            if (b.silent) return this;
            c = 0;
            for (d = this.models.length; c < d; c++) if (j[(e = this.models[c]).cid]) b.index = c,
            e.trigger("add", e, this, b);
            return this
        },
        remove: function(a, b) {
            var c, d, e, g;
            b || (b = {});
            a = f.isArray(a) ? a.slice() : [a];
            c = 0;
            for (d = a.length; c < d; c++) if (g = this.getByCid(a[c]) || this.get(a[c])) delete this._byId[g.id],
            delete this._byCid[g.cid],
            e = this.indexOf(g),
            this.models.splice(e, 1),
            this.length--,
            b.silent || (b.index = e, g.trigger("remove", g, this, b)),
            this._removeReference(g);
            return this
        },
        push: function(a, b) {
            a = this._prepareModel(a, b);
            this.add(a, b);
            return a
        },
        pop: function(a) {
            var b = this.at(this.length - 1);
            this.remove(b, a);
            return b
        },
        unshift: function(a, b) {
            a = this._prepareModel(a, b);
            this.add(a, f.extend({
                at: 0
            },
            b));
            return a
        },
        shift: function(a) {
            var b = this.at(0);
            this.remove(b, a);
            return b
        },
        get: function(a) {
            return null == a ? void 0 : this._byId[null != a.id ? a.id: a]
        },
        getByCid: function(a) {
            return a && this._byCid[a.cid || a]
        },
        at: function(a) {
            return this.models[a]
        },
        where: function(a) {
            return f.isEmpty(a) ? [] : this.filter(function(b) {
                for (var c in a) if (a[c] !== b.get(c)) return ! 1;
                return ! 0
            })
        },
        sort: function(a) {
            a || (a = {});
            if (!this.comparator) throw Error("Cannot sort a set without a comparator");
            var b = f.bind(this.comparator, this);
            1 == this.comparator.length ? this.models = this.sortBy(b) : this.models.sort(b);
            a.silent || this.trigger("reset", this, a);
            return this
        },
        pluck: function(a) {
            return f.map(this.models,
            function(b) {
                return b.get(a)
            })
        },
        reset: function(a, b) {
            a || (a = []);
            b || (b = {});
            for (var c = 0,
            d = this.models.length; c < d; c++) this._removeReference(this.models[c]);
            this._reset();
            this.add(a, f.extend({
                silent: !0
            },
            b));
            b.silent || this.trigger("reset", this, b);
            return this
        },
        fetch: function(a) {
            a = a ? f.clone(a) : {};
            void 0 === a.parse && (a.parse = !0);
            var b = this,
            c = a.success;
            a.success = function(d, e, f) {
                b[a.add ? "add": "reset"](b.parse(d, f), a);
                c && c(b, d)
            };
            a.error = g.wrapError(a.error, b, a);
            return (this.sync || g.sync).call(this, "read", this, a)
        },
        create: function(a, b) {
            var c = this,
            b = b ? f.clone(b) : {},
            a = this._prepareModel(a, b);
            if (!a) return ! 1;
            b.wait || c.add(a, b);
            var d = b.success;
            b.success = function(e, f) {
                b.wait && c.add(e, b);
                d ? d(e, f) : e.trigger("sync", a, f, b)
            };
            a.save(null, b);
            return a
        },
        parse: function(a) {
            return a
        },
        chain: function() {
            return f(this.models).chain()
        },
        _reset: function() {
            this.length = 0;
            this.models = [];
            this._byId = {};
            this._byCid = {}
        },
        _prepareModel: function(a, b) {
            b || (b = {});
            a instanceof o ? a.collection || (a.collection = this) : (b.collection = this, a = new this.model(a, b), a._validate(a.attributes, b) || (a = !1));
            return a
        },
        _removeReference: function(a) {
            this == a.collection && delete a.collection;
            a.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(a, b, c, d) { ("add" == a || "remove" == a) && c != this || ("destroy" == a && this.remove(b, d), b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], this._byId[b.id] = b), this.trigger.apply(this, arguments))
        }
    });
    f.each("forEach,each,map,reduce,reduceRight,find,detect,filter,select,reject,every,all,some,any,include,contains,invoke,max,min,sortBy,sortedIndex,toArray,size,first,initial,rest,last,without,indexOf,shuffle,lastIndexOf,isEmpty,groupBy".split(","),
    function(a) {
        r.prototype[a] = function() {
            return f[a].apply(f, [this.models].concat(f.toArray(arguments)))
        }
    });
    var u = g.Router = function(a) {
        a || (a = {});
        a.routes && (this.routes = a.routes);
        this._bindRoutes();
        this.initialize.apply(this, arguments)
    },
    B = /:\w+/g,
    C = /\*\w+/g,
    D = /[-[\]{}()+?.,\\^$|#\s]/g;
    f.extend(u.prototype, k, {
        initialize: function() {},
        route: function(a, b, c) {
            g.history || (g.history = new m);
            f.isRegExp(a) || (a = this._routeToRegExp(a));
            c || (c = this[b]);
            g.history.route(a, f.bind(function(d) {
                d = this._extractParameters(a, d);
                c && c.apply(this, d);
                this.trigger.apply(this, ["route:" + b].concat(d));
                g.history.trigger("route", this, b, d)
            },
            this));
            return this
        },
        navigate: function(a, b) {
            g.history.navigate(a, b)
        },
        _bindRoutes: function() {
            if (this.routes) {
                var a = [],
                b;
                for (b in this.routes) a.unshift([b, this.routes[b]]);
                b = 0;
                for (var c = a.length; b < c; b++) this.route(a[b][0], a[b][1], this[a[b][1]])
            }
        },
        _routeToRegExp: function(a) {
            a = a.replace(D, "\\$&").replace(B, "([^/]+)").replace(C, "(.*?)");
            return RegExp("^" + a + "$")
        },
        _extractParameters: function(a, b) {
            return a.exec(b).slice(1)
        }
    });
    var m = g.History = function() {
        this.handlers = [];
        f.bindAll(this, "checkUrl")
    },
    s = /^[#\/]/,
    E = /msie [\w.]+/;
    m.started = !1;
    f.extend(m.prototype, k, {
        interval: 50,
        getHash: function(a) {
            return (a = (a ? a.location: window.location).href.match(/#(.*)$/)) ? a[1] : ""
        },
        getFragment: function(a, b) {
            if (null == a) if (this._hasPushState || b) {
                var a = window.location.pathname,
                c = window.location.search;
                c && (a += c)
            } else a = this.getHash();
            a.indexOf(this.options.root) || (a = a.substr(this.options.root.length));
            return a.replace(s, "")
        },
        start: function(a) {
            if (m.started) throw Error("Backbone.history has already been started");
            m.started = !0;
            this.options = f.extend({},
            {
                root: "/"
            },
            this.options, a);
            this._wantsHashChange = !1 !== this.options.hashChange;
            this._wantsPushState = !!this.options.pushState;
            this._hasPushState = !(!this.options.pushState || !window.history || !window.history.pushState);
            var a = this.getFragment(),
            b = document.documentMode;
            if (b = E.exec(navigator.userAgent.toLowerCase()) && (!b || 7 >= b)) this.iframe = i('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,
            this.navigate(a);
            this._hasPushState ? i(window).bind("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !b ? i(window).bind("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval));
            this.fragment = a;
            a = window.location;
            b = a.pathname == this.options.root;
            if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !b) return this.fragment = this.getFragment(null, !0),
            window.location.replace(this.options.root + "#" + this.fragment),
            !0;
            this._wantsPushState && this._hasPushState && b && a.hash && (this.fragment = this.getHash().replace(s, ""), window.history.replaceState({},
            document.title, a.protocol + "//" + a.host + this.options.root + this.fragment));
            if (!this.options.silent) return this.loadUrl()
        },
        stop: function() {
            i(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl);
            clearInterval(this._checkUrlInterval);
            m.started = !1
        },
        route: function(a, b) {
            this.handlers.unshift({
                route: a,
                callback: b
            })
        },
        checkUrl: function() {
            var a = this.getFragment();
            a == this.fragment && this.iframe && (a = this.getFragment(this.getHash(this.iframe)));
            if (a == this.fragment) return ! 1;
            this.iframe && this.navigate(a);
            this.loadUrl() || this.loadUrl(this.getHash())
        },
        loadUrl: function(a) {
            var b = this.fragment = this.getFragment(a);
            return f.any(this.handlers,
            function(a) {
                if (a.route.test(b)) return a.callback(b),
                !0
            })
        },
        navigate: function(a, b) {
            if (!m.started) return ! 1;
            if (!b || !0 === b) b = {
                trigger: b
            };
            var c = (a || "").replace(s, "");
            this.fragment != c && (this._hasPushState ? (0 != c.indexOf(this.options.root) && (c = this.options.root + c), this.fragment = c, window.history[b.replace ? "replaceState": "pushState"]({},
            document.title, c)) : this._wantsHashChange ? (this.fragment = c, this._updateHash(window.location, c, b.replace), this.iframe && c != this.getFragment(this.getHash(this.iframe)) && (b.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, c, b.replace))) : window.location.assign(this.options.root + a), b.trigger && this.loadUrl(a))
        },
        _updateHash: function(a, b, c) {
            c ? a.replace(a.toString().replace(/(javascript:|#).*$/, "") + "#" + b) : a.hash = b
        }
    });
    var v = g.View = function(a) {
        this.cid = f.uniqueId("view");
        this._configure(a || {});
        this._ensureElement();
        this.initialize.apply(this, arguments);
        this.delegateEvents()
    },
    F = /^(\S+)\s*(.*)$/,
    w = "model,collection,el,id,attributes,className,tagName".split(",");
    f.extend(v.prototype, k, {
        tagName: "div",
        $: function(a) {
            return this.$el.find(a)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            this.$el.remove();
            return this
        },
        make: function(a, b, c) {
            a = document.createElement(a);
            b && i(a).attr(b);
            c && i(a).html(c);
            return a
        },
        setElement: function(a, b) {
            this.$el && this.undelegateEvents();
            this.$el = a instanceof i ? a: i(a);
            this.el = this.$el[0]; ! 1 !== b && this.delegateEvents();
            return this
        },
        delegateEvents: function(a) {
            if (a || (a = n(this, "events"))) {
                this.undelegateEvents();
                for (var b in a) {
                    var c = a[b];
                    f.isFunction(c) || (c = this[a[b]]);
                    if (!c) throw Error('Method "' + a[b] + '" does not exist');
                    var d = b.match(F),
                    e = d[1],
                    d = d[2],
                    c = f.bind(c, this),
                    e = e + (".delegateEvents" + this.cid);
                    "" === d ? this.$el.bind(e, c) : this.$el.delegate(d, e, c)
                }
            }
        },
        undelegateEvents: function() {
            this.$el.unbind(".delegateEvents" + this.cid)
        },
        _configure: function(a) {
            this.options && (a = f.extend({},
            this.options, a));
            for (var b = 0,
            c = w.length; b < c; b++) {
                var d = w[b];
                a[d] && (this[d] = a[d])
            }
            this.options = a
        },
        _ensureElement: function() {
            if (this.el) this.setElement(this.el, !1);
            else {
                var a = n(this, "attributes") || {};
                this.id && (a.id = this.id);
                this.className && (a["class"] = this.className);
                this.setElement(this.make(this.tagName, a), !1)
            }
        }
    });
    o.extend = r.extend = u.extend = v.extend = function(a, b) {
        var c = G(this, a, b);
        c.extend = this.extend;
        return c
    };
    var H = {
        create: "POST",
        update: "PUT",
        "delete": "DELETE",
        read: "GET"
    };
    g.sync = function(a, b, c) {
        var d = H[a];
        c || (c = {});
        var e = {
            type: d,
            dataType: "json"
        };
        c.url || (e.url = n(b, "url") || t());
        if (!c.data && b && ("create" == a || "update" == a)) e.contentType = "application/json",
        e.data = JSON.stringify(b.toJSON());
        g.emulateJSON && (e.contentType = "application/x-www-form-urlencoded", e.data = e.data ? {
            model: e.data
        }: {});
        if (g.emulateHTTP && ("PUT" === d || "DELETE" === d)) g.emulateJSON && (e.data._method = d),
        e.type = "POST",
        e.beforeSend = function(a) {
            a.setRequestHeader("X-HTTP-Method-Override", d)
        };
        "GET" !== e.type && !g.emulateJSON && (e.processData = !1);
        return i.ajax(f.extend(e, c))
    };
    g.wrapError = function(a, b, c) {
        return function(d, e) {
            e = d === b ? e: d;
            a ? a(b, e, c) : b.trigger("error", b, e, c)
        }
    };
    var x = function() {},
    G = function(a, b, c) {
        var d;
        d = b && b.hasOwnProperty("constructor") ? b.constructor: function() {
            a.apply(this, arguments)
        };
        f.extend(d, a);
        x.prototype = a.prototype;
        d.prototype = new x;
        b && f.extend(d.prototype, b);
        c && f.extend(d, c);
        d.prototype.constructor = d;
        d.__super__ = a.prototype;
        return d
    },
    n = function(a, b) {
        return ! a || !a[b] ? null: f.isFunction(a[b]) ? a[b]() : a[b]
    },
    t = function() {
        throw Error('A "url" property or function must be specified');
    }
}).call(this);

// Backbone.Validation v0.7.0
//
// Copyright (c) 2011-2012 Thomas Pedersen
// Distributed under MIT License
//
// Documentation and full license available at:
// http://thedersen.com/projects/backbone-validation
Backbone.Validation = function(e) {
    "use strict";
    var t = {
        forceUpdate: !1,
        selector: "name",
        labelFormatter: "sentenceCase",
        valid: Function.prototype,
        invalid: Function.prototype
    },
    n = {
        formatLabel: function(e, n) {
            return a[t.labelFormatter](e, n)
        },
        format: function() {
            var e = Array.prototype.slice.call(arguments),
            t = e.shift();
            return t.replace(/\{(\d+)\}/g,
            function(t, n) {
                return typeof e[n] != "undefined" ? e[n] : t
            })
        }
    },
    r = function(t, n, i) {
        return n = n || {},
        i = i || "",
        e.each(t,
        function(e, s) {
            t.hasOwnProperty(s) && (!e || typeof e != "object" || e instanceof Date || e instanceof RegExp ? n[i + s] = e: r(e, n, i + s + "."))
        }),
        n
    },
    i = function() {
        var i = function(t) {
            return e.reduce(e.keys(t.validation || {}),
            function(e, t) {
                return e[t] = void 0,
                e
            },
            {})
        },
        o = function(t, n) {
            var r = t.validation ? t.validation[n] || {}: {};
            if (e.isFunction(r) || e.isString(r)) r = {
                fn: r
            };
            return e.isArray(r) || (r = [r]),
            e.reduce(r,
            function(t, n) {
                return e.each(e.without(e.keys(n), "msg"),
                function(e) {
                    t.push({
                        fn: f[e],
                        val: n[e],
                        msg: n.msg
                    })
                }),
                t
            },
            [])
        },
        u = function(t, r, i, s) {
            return e.reduce(o(t, r),
            function(o, u) {
                var a = e.extend({},
                n, f),
                l = u.fn.call(a, i, r, u.val, t, s);
                return l === !1 || o === !1 ? !1 : l && !o ? u.msg || l: o
            },
            "")
        },
        a = function(t, n) {
            var i, s = {},
            o = !0,
            a = e.clone(n),
            f = r(n);
            return e.each(f,
            function(e, n) {
                i = u(t, n, e, a),
                i && (s[n] = i, o = !1)
            }),
            {
                invalidAttrs: s,
                isValid: o
            }
        },
        l = function(t, n) {
            return {
                preValidate: function(t, n) {
                    return u(this, t, n, e.extend({},
                    this.attributes))
                },
                isValid: function(t) {
                    var n = r(this.attributes);
                    if (e.isString(t)) return ! u(this, t, n[t], e.extend({},
                    this.attributes));
                    if (e.isArray(t)) {
                        for (var i = 0; i < t.length; i++) if (u(this, t[i], n[t[i]], e.extend({},
                        this.attributes))) return ! 1;
                        return ! 0
                    }
                    return t === !0 && this.validate(),
                    this.validation ? this._isValid: !0
                },
                validate: function(s, o) {
                    var u = this,
                    f = !s,
                    l = e.extend({},
                    n, o),
                    c = i(u),
                    h = e.extend({},
                    c, u.attributes, s),
                    p = r(s || h),
                    d = a(u, h);
                    u._isValid = d.isValid,
                    e.each(e.keys(c),
                    function(e) {
                        var n = d.invalidAttrs.hasOwnProperty(e);
                        n || l.valid(t, e, l.selector)
                    }),
                    e.each(e.keys(c),
                    function(e) {
                        var n = d.invalidAttrs.hasOwnProperty(e),
                        r = p.hasOwnProperty(e);
                        n && (r || f) && l.invalid(t, e, d.invalidAttrs[e], l.selector)
                    }),
                    e.defer(function() {
                        u.trigger("validated", u._isValid, u, d.invalidAttrs),
                        u.trigger("validated:" + (u._isValid ? "valid": "invalid"), u, d.invalidAttrs)
                    });
                    if (!l.forceUpdate && e.intersection(e.keys(d.invalidAttrs), e.keys(p)).length > 0) return d.invalidAttrs
                }
            }
        },
        c = function(t, n, r) {
            e.extend(n, l(t, r))
        },
        h = function(e) {
            delete e.validate,
            delete e.preValidate,
            delete e.isValid
        },
        p = function(e) {
            c(this.view, e, this.options)
        },
        d = function(e) {
            h(e)
        };
        return {
            version: "0.7.0",
            configure: function(n) {
                e.extend(t, n)
            },
            bind: function(n, r) {
                var i = n.model,
                o = n.collection;
                r = e.extend({},
                t, s, r);
                if (typeof i == "undefined" && typeof o == "undefined") throw "Before you execute the binding your view must have a model or a collection.\nSee http://thedersen.com/projects/backbone-validation/#using-form-model-validation for more information.";
                i && c(n, i, r),
                o && (o.each(function(e) {
                    c(n, e, r)
                }), o.bind("add", p, {
                    view: n,
                    options: r
                }), o.bind("remove", d))
            },
            unbind: function(e) {
                var t = e.model,
                n = e.collection;
                t && h(e.model),
                n && (n.each(function(e) {
                    h(e)
                }), n.unbind("add", p), n.unbind("remove", d))
            },
            mixin: l(null, t)
        }
    } (),
    s = i.callbacks = {
        valid: function(e, t, n) {
            e.$("[" + n + "~=" + t + "]").removeClass("invalid").removeAttr("data-error")
        },
        invalid: function(e, t, n, r) {
            e.$("[" + r + "~=" + t + "]").addClass("invalid").attr("data-error", n)
        }
    },
    o = i.patterns = {
        digits: /^\d+$/,
        number: /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/,
        email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
        url: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
    },
    u = i.messages = {
        required: "{0} is required",
        acceptance: "{0} must be accepted",
        min: "{0} must be greater than or equal to {1}",
        max: "{0} must be less than or equal to {1}",
        range: "{0} must be between {1} and {2}",
        length: "{0} must be {1} characters",
        minLength: "{0} must be at least {1} characters",
        maxLength: "{0} must be at most {1} characters",
        rangeLength: "{0} must be between {1} and {2} characters",
        oneOf: "{0} must be one of: {1}",
        equalTo: "{0} must be the same as {1}",
        pattern: "{0} must be a valid {1}"
    },
    a = i.labelFormatters = {
        none: function(e) {
            return e
        },
        sentenceCase: function(e) {
            return e.replace(/(?:^\w|[A-Z]|\b\w)/g,
            function(e, t) {
                return t === 0 ? e.toUpperCase() : " " + e.toLowerCase()
            }).replace("_", " ")
        },
        label: function(e, t) {
            return t.labels && t.labels[e] || a.sentenceCase(e, t)
        }
    },
    f = i.validators = function() {
        var t = String.prototype.trim ?
        function(e) {
            return e === null ? "": String.prototype.trim.call(e)
        }: function(e) {
            var t = /^\s+/,
            n = /\s+$/;
            return e === null ? "": e.toString().replace(t, "").replace(n, "")
        },
        n = function(t) {
            return e.isNumber(t) || e.isString(t) && t.match(o.number)
        },
        r = function(n) {
            return ! (e.isNull(n) || e.isUndefined(n) || e.isString(n) && t(n) === "")
        };
        return {
            fn: function(t, n, r, i, s) {
                return e.isString(r) && (r = i[r]),
                r.call(i, t, n, s)
            },
            required: function(t, n, i, s, o) {
                var a = e.isFunction(i) ? i.call(s, t, n, o) : i;
                if (!a && !r(t)) return ! 1;
                if (a && !r(t)) return this.format(u.required, this.formatLabel(n, s))
            },
            acceptance: function(t, n, r, i) {
                if (t !== "true" && (!e.isBoolean(t) || t === !1)) return this.format(u.acceptance, this.formatLabel(n, i))
            },
            min: function(e, t, r, i) {
                if (!n(e) || e < r) return this.format(u.min, this.formatLabel(t, i), r)
            },
            max: function(e, t, r, i) {
                if (!n(e) || e > r) return this.format(u.max, this.formatLabel(t, i), r)
            },
            range: function(e, t, r, i) {
                if (!n(e) || e < r[0] || e > r[1]) return this.format(u.range, this.formatLabel(t, i), r[0], r[1])
            },
            length: function(e, n, i, s) {
                if (!r(e) || t(e).length !== i) return this.format(u.length, this.formatLabel(n, s), i)
            },
            minLength: function(e, n, i, s) {
                if (!r(e) || t(e).length < i) return this.format(u.minLength, this.formatLabel(n, s), i)
            },
            maxLength: function(e, n, i, s) {
                if (!r(e) || t(e).length > i) return this.format(u.maxLength, this.formatLabel(n, s), i)
            },
            rangeLength: function(e, n, i, s) {
                if (!r(e) || t(e).length < i[0] || t(e).length > i[1]) return this.format(u.rangeLength, this.formatLabel(n, s), i[0], i[1])
            },
            oneOf: function(t, n, r, i) {
                if (!e.include(r, t)) return this.format(u.oneOf, this.formatLabel(n, i), r.join(", "))
            },
            equalTo: function(e, t, n, r, i) {
                if (e !== i[n]) return this.format(u.equalTo, this.formatLabel(t, r), this.formatLabel(n, r))
            },
            pattern: function(e, t, n, i) {
                if (!r(e) || !e.toString().match(o[n] || n)) return this.format(u.pattern, this.formatLabel(t, i), n)
            }
        }
    } ();
    return i
} (_); (function() {
    function e(e, t) {
        try {
            for (var n in t) Object.defineProperty(e.prototype, n, {
                value: t[n],
                enumerable: !1
            })
        } catch(r) {
            e.prototype = t
        }
    }
    function t(e) {
        var t = -1,
        n = e.length,
        r = [];
        while (++t < n) r.push(e[t]);
        return r
    }
    function n(e) {
        return Array.prototype.slice.call(e)
    }
    function r() {}
    function i(e) {
        return e
    }
    function s() {
        return this
    }
    function o() {
        return ! 0
    }
    function u(e) {
        return typeof e == "function" ? e: function() {
            return e
        }
    }
    function a(e, t, n) {
        return function() {
            var r = n.apply(t, arguments);
            return arguments.length ? e: r
        }
    }
    function f(e) {
        return e != null && !isNaN(e)
    }
    function l(e) {
        return e.length
    }
    function c(e) {
        return e == null
    }
    function h(e) {
        return e.trim().replace(/\s+/g, " ")
    }
    function p(e) {
        var t = 1;
        while (e * t % 1) t *= 10;
        return t
    }
    function d() {}
    function v(e) {
        function t() {
            var t = n,
            r = -1,
            i = t.length,
            s;
            while (++r < i)(s = t[r].on) && s.apply(this, arguments);
            return e
        }
        var n = [],
        i = new r;
        return t.on = function(t, r) {
            var s = i.get(t),
            o;
            return arguments.length < 2 ? s && s.on: (s && (s.on = null, n = n.slice(0, o = n.indexOf(s)).concat(n.slice(o + 1)), i.remove(t)), r && n.push(i.set(t, {
                on: r
            })), e)
        },
        t
    }
    function m(e, t) {
        return t - (e ? 1 + Math.floor(Math.log(e + Math.pow(10, 1 + Math.floor(Math.log(e) / Math.LN10) - t)) / Math.LN10) : 1)
    }
    function g(e) {
        return e + ""
    }
    function y(e) {
        var t = e.lastIndexOf("."),
        n = t >= 0 ? e.substring(t) : (t = e.length, ""),
        r = [];
        while (t > 0) r.push(e.substring(t -= 3, t + 3));
        return r.reverse().join(",") + n
    }
    function b(e, t) {
        var n = Math.pow(10, Math.abs(8 - t) * 3);
        return {
            scale: t > 8 ?
            function(e) {
                return e / n
            }: function(e) {
                return e * n
            },
            symbol: e
        }
    }
    function w(e) {
        return function(t) {
            return t <= 0 ? 0 : t >= 1 ? 1 : e(t)
        }
    }
    function E(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    }
    function S(e) {
        return function(t) {
            return.5 * (t < .5 ? e(2 * t) : 2 - e(2 - 2 * t))
        }
    }
    function x(e) {
        return e
    }
    function T(e) {
        return function(t) {
            return Math.pow(t, e)
        }
    }
    function N(e) {
        return 1 - Math.cos(e * Math.PI / 2)
    }
    function C(e) {
        return Math.pow(2, 10 * (e - 1))
    }
    function k(e) {
        return 1 - Math.sqrt(1 - e * e)
    }
    function L(e, t) {
        var n;
        return arguments.length < 2 && (t = .45),
        arguments.length < 1 ? (e = 1, n = t / 4) : n = t / (2 * Math.PI) * Math.asin(1 / e),
        function(r) {
            return 1 + e * Math.pow(2, 10 * -r) * Math.sin((r - n) * 2 * Math.PI / t)
        }
    }
    function A(e) {
        return e || (e = 1.70158),
        function(t) {
            return t * t * ((e + 1) * t - e)
        }
    }
    function O(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e: e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function M() {
        d3.event.stopPropagation(),
        d3.event.preventDefault()
    }
    function _() {
        var e = d3.event,
        t;
        while (t = e.sourceEvent) e = t;
        return e
    }
    function D(e) {
        var t = new d,
        n = 0,
        r = arguments.length;
        while (++n < r) t[arguments[n]] = v(t);
        return t.of = function(n, r) {
            return function(i) {
                try {
                    var s = i.sourceEvent = d3.event;
                    i.target = e,
                    d3.event = i,
                    t[i.type].apply(n, r)
                } finally {
                    d3.event = s
                }
            }
        },
        t
    }
    function P(e) {
        var t = [e.a, e.b],
        n = [e.c, e.d],
        r = B(t),
        i = H(t, n),
        s = B(j(n, t, -i)) || 0;
        t[0] * n[1] < n[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, i *= -1),
        this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2( - n[0], n[1])) * ls,
        this.translate = [e.e, e.f],
        this.scale = [r, s],
        this.skew = s ? Math.atan2(i, s) * ls: 0
    }
    function H(e, t) {
        return e[0] * t[0] + e[1] * t[1]
    }
    function B(e) {
        var t = Math.sqrt(H(e, e));
        return t && (e[0] /= t, e[1] /= t),
        t
    }
    function j(e, t, n) {
        return e[0] += n * t[0],
        e[1] += n * t[1],
        e
    }
    function F(e) {
        return e == "transform" ? d3.interpolateTransform: d3.interpolate
    }
    function I(e, t) {
        return t = t - (e = +e) ? 1 / (t - e) : 0,
        function(n) {
            return (n - e) * t
        }
    }
    function q(e, t) {
        return t = t - (e = +e) ? 1 / (t - e) : 0,
        function(n) {
            return Math.max(0, Math.min(1, (n - e) * t))
        }
    }
    function R() {}
    function U(e, t, n) {
        return new z(e, t, n)
    }
    function z(e, t, n) {
        this.r = e,
        this.g = t,
        this.b = n
    }
    function W(e) {
        return e < 16 ? "0" + Math.max(0, e).toString(16) : Math.min(255, e).toString(16)
    }
    function X(e, t, n) {
        var r = 0,
        i = 0,
        s = 0,
        o, u, a;
        o = /([a-z]+)\((.*)\)/i.exec(e);
        if (o) {
            u = o[2].split(",");
            switch (o[1]) {
            case "hsl":
                return n(parseFloat(u[0]), parseFloat(u[1]) / 100, parseFloat(u[2]) / 100);
            case "rgb":
                return t(K(u[0]), K(u[1]), K(u[2]))
            }
        }
        return (a = ds.get(e)) ? t(a.r, a.g, a.b) : (e != null && e.charAt(0) === "#" && (e.length === 4 ? (r = e.charAt(1), r += r, i = e.charAt(2), i += i, s = e.charAt(3), s += s) : e.length === 7 && (r = e.substring(1, 3), i = e.substring(3, 5), s = e.substring(5, 7)), r = parseInt(r, 16), i = parseInt(i, 16), s = parseInt(s, 16)), t(r, i, s))
    }
    function V(e, t, n) {
        var r = Math.min(e /= 255, t /= 255, n /= 255),
        i = Math.max(e, t, n),
        s = i - r,
        o,
        u,
        a = (i + r) / 2;
        return s ? (u = a < .5 ? s / (i + r) : s / (2 - i - r), e == i ? o = (t - n) / s + (t < n ? 6 : 0) : t == i ? o = (n - e) / s + 2 : o = (e - t) / s + 4, o *= 60) : u = o = 0,
        Q(o, u, a)
    }
    function $(e, t, n) {
        e = J(e),
        t = J(t),
        n = J(n);
        var r = ut((.4124564 * e + .3575761 * t + .1804375 * n) / ys),
        i = ut((.2126729 * e + .7151522 * t + .072175 * n) / bs),
        s = ut((.0193339 * e + .119192 * t + .9503041 * n) / ws);
        return nt(116 * i - 16, 500 * (r - i), 200 * (i - s))
    }
    function J(e) {
        return (e /= 255) <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
    }
    function K(e) {
        var t = parseFloat(e);
        return e.charAt(e.length - 1) === "%" ? Math.round(t * 2.55) : t
    }
    function Q(e, t, n) {
        return new G(e, t, n)
    }
    function G(e, t, n) {
        this.h = e,
        this.s = t,
        this.l = n
    }
    function Y(e, t, n) {
        function r(e) {
            return e > 360 ? e -= 360 : e < 0 && (e += 360),
            e < 60 ? s + (o - s) * e / 60 : e < 180 ? o: e < 240 ? s + (o - s) * (240 - e) / 60 : s
        }
        function i(e) {
            return Math.round(r(e) * 255)
        }
        var s, o;
        return e %= 360,
        e < 0 && (e += 360),
        t = t < 0 ? 0 : t > 1 ? 1 : t,
        n = n < 0 ? 0 : n > 1 ? 1 : n,
        o = n <= .5 ? n * (1 + t) : n + t - n * t,
        s = 2 * n - o,
        U(i(e + 120), i(e), i(e - 120))
    }
    function Z(e, t, n) {
        return new et(e, t, n)
    }
    function et(e, t, n) {
        this.h = e,
        this.c = t,
        this.l = n
    }
    function tt(e, t, n) {
        return nt(n, Math.cos(e *= Math.PI / 180) * t, Math.sin(e) * t)
    }
    function nt(e, t, n) {
        return new rt(e, t, n)
    }
    function rt(e, t, n) {
        this.l = e,
        this.a = t,
        this.b = n
    }
    function it(e, t, n) {
        var r = (e + 16) / 116,
        i = r + t / 500,
        s = r - n / 200;
        return i = ot(i) * ys,
        r = ot(r) * bs,
        s = ot(s) * ws,
        U(at(3.2404542 * i - 1.5371385 * r - .4985314 * s), at( - 0.969266 * i + 1.8760108 * r + .041556 * s), at(.0556434 * i - .2040259 * r + 1.0572252 * s))
    }
    function st(e, t, n) {
        return Z(Math.atan2(n, t) / Math.PI * 180, Math.sqrt(t * t + n * n), e)
    }
    function ot(e) {
        return e > .206893034 ? e * e * e: (e - 4 / 29) / 7.787037
    }
    function ut(e) {
        return e > .008856 ? Math.pow(e, 1 / 3) : 7.787037 * e + 4 / 29
    }
    function at(e) {
        return Math.round(255 * (e <= .00304 ? 12.92 * e: 1.055 * Math.pow(e, 1 / 2.4) - .055))
    }
    function ft(e) {
        return Qi(e, ks),
        e
    }
    function lt(e) {
        return function() {
            return Ss(e, this)
        }
    }
    function ct(e) {
        return function() {
            return xs(e, this)
        }
    }
    function ht(e, t) {
        function n() {
            this.removeAttribute(e)
        }
        function r() {
            this.removeAttributeNS(e.space, e.local)
        }
        function i() {
            this.setAttribute(e, t)
        }
        function s() {
            this.setAttributeNS(e.space, e.local, t)
        }
        function o() {
            var n = t.apply(this, arguments);
            n == null ? this.removeAttribute(e) : this.setAttribute(e, n)
        }
        function u() {
            var n = t.apply(this, arguments);
            n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n)
        }
        return e = d3.ns.qualify(e),
        t == null ? e.local ? r: n: typeof t == "function" ? e.local ? u: o: e.local ? s: i
    }
    function pt(e) {
        return new RegExp("(?:^|\\s+)" + d3.requote(e) + "(?:\\s+|$)", "g")
    }
    function dt(e, t) {
        function n() {
            var n = -1;
            while (++n < i) e[n](this, t)
        }
        function r() {
            var n = -1,
            r = t.apply(this, arguments);
            while (++n < i) e[n](this, r)
        }
        e = e.trim().split(/\s+/).map(vt);
        var i = e.length;
        return typeof t == "function" ? r: n
    }
    function vt(e) {
        var t = pt(e);
        return function(n, r) {
            if (i = n.classList) return r ? i.add(e) : i.remove(e);
            var i = n.className,
            s = i.baseVal != null,
            o = s ? i.baseVal: i;
            r ? (t.lastIndex = 0, t.test(o) || (o = h(o + " " + e), s ? i.baseVal = o: n.className = o)) : o && (o = h(o.replace(t, " ")), s ? i.baseVal = o: n.className = o)
        }
    }
    function mt(e, t, n) {
        function r() {
            this.style.removeProperty(e)
        }
        function i() {
            this.style.setProperty(e, t, n)
        }
        function s() {
            var r = t.apply(this, arguments);
            r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n)
        }
        return t == null ? r: typeof t == "function" ? s: i
    }
    function gt(e, t) {
        function n() {
            delete this[e]
        }
        function r() {
            this[e] = t
        }
        function i() {
            var n = t.apply(this, arguments);
            n == null ? delete this[e] : this[e] = n
        }
        return t == null ? n: typeof t == "function" ? i: r
    }
    function yt(e) {
        return {
            __data__: e
        }
    }
    function bt(e) {
        return function() {
            return Cs(this, e)
        }
    }
    function wt(e) {
        return arguments.length || (e = d3.ascending),
        function(t, n) {
            return e(t && t.__data__, n && n.__data__)
        }
    }
    function Et(e, t, n) {
        function r() {
            var t = this[s];
            t && (this.removeEventListener(e, t, t.$), delete this[s])
        }
        function i() {
            function i(e) {
                var n = d3.event;
                d3.event = e,
                u[0] = o.__data__;
                try {
                    t.apply(o, u)
                } finally {
                    d3.event = n
                }
            }
            var o = this,
            u = arguments;
            r.call(this),
            this.addEventListener(e, this[s] = i, i.$ = n),
            i._ = t
        }
        var s = "__on" + e,
        o = e.indexOf(".");
        return o > 0 && (e = e.substring(0, o)),
        t ? i: r
    }
    function St(e, t) {
        for (var n = 0,
        r = e.length; n < r; n++) for (var i = e[n], s = 0, o = i.length, u; s < o; s++)(u = i[s]) && t(u, s, n);
        return e
    }
    function xt(e) {
        return Qi(e, As),
        e
    }
    function Tt(e, t, n) {
        Qi(e, Os);
        var i = new r,
        s = d3.dispatch("start", "end"),
        o = Fs;
        return e.id = t,
        e.time = n,
        e.tween = function(t, n) {
            return arguments.length < 2 ? i.get(t) : (n == null ? i.remove(t) : i.set(t, n), e)
        },
        e.ease = function(t) {
            return arguments.length ? (o = typeof t == "function" ? t: d3.ease.apply(d3, arguments), e) : o
        },
        e.each = function(t, n) {
            return arguments.length < 2 ? Nt.call(e, t) : (s.on(t, n), e)
        },
        d3.timer(function(r) {
            return St(e,
            function(e, u, a) {
                function f(r) {
                    return v.active > t ? c() : (v.active = t, i.forEach(function(t, n) { (n = n.call(e, m, u)) && h.push(n)
                    }), s.start.call(e, m, u), l(r) || d3.timer(l, 0, n), 1)
                }
                function l(n) {
                    if (v.active !== t) return c();
                    var r = (n - p) / d,
                    i = o(r),
                    a = h.length;
                    while (a > 0) h[--a].call(e, i);
                    if (r >= 1) return c(),
                    _s = t,
                    s.end.call(e, m, u),
                    _s = 0,
                    1
                }
                function c() {
                    return--v.count || delete e.__transition__,
                    1
                }
                var h = [],
                p = e.delay,
                d = e.duration,
                v = (e = e.node).__transition__ || (e.__transition__ = {
                    active: 0,
                    count: 0
                }),
                m = e.__data__; ++v.count,
                p <= r ? f(r) : d3.timer(f, p, n)
            })
        },
        0, n),
        e
    }
    function Nt(e) {
        var t = _s,
        n = Fs,
        r = Bs,
        i = js;
        return _s = this.id,
        Fs = this.ease(),
        St(this,
        function(t, n, r) {
            Bs = t.delay,
            js = t.duration,
            e.call(t = t.node, t.__data__, n, r)
        }),
        _s = t,
        Fs = n,
        Bs = r,
        js = i,
        this
    }
    function Ct(e, t, n) {
        return n != "" && Is
    }
    function kt(e, t) {
        return d3.tween(e, F(t))
    }
    function Lt() {
        var e, t = Date.now(),
        n = Us;
        while (n) e = t - n.then,
        e >= n.delay && (n.flush = n.callback(e)),
        n = n.next;
        var r = At() - t;
        r > 24 ? (isFinite(r) && (clearTimeout(Ws), Ws = setTimeout(Lt, r)), zs = 0) : (zs = 1, Xs(Lt))
    }
    function At() {
        var e = null,
        t = Us,
        n = Infinity;
        while (t) t.flush ? (delete Rs[t.callback.id], t = e ? e.next = t.next: Us = t.next) : (n = Math.min(n, t.then + t.delay), t = (e = t).next);
        return n
    }
    function Ot(e, t) {
        var n = e.ownerSVGElement || e;
        if (n.createSVGPoint) {
            var r = n.createSVGPoint();
            if (Vs < 0 && (window.scrollX || window.scrollY)) {
                n = d3.select(document.body).append("svg").style("position", "absolute").style("top", 0).style("left", 0);
                var i = n[0][0].getScreenCTM();
                Vs = !i.f && !i.e,
                n.remove()
            }
            return Vs ? (r.x = t.pageX, r.y = t.pageY) : (r.x = t.clientX, r.y = t.clientY),
            r = r.matrixTransform(e.getScreenCTM().inverse()),
            [r.x, r.y]
        }
        var s = e.getBoundingClientRect();
        return [t.clientX - s.left - e.clientLeft, t.clientY - s.top - e.clientTop]
    }
    function Mt() {}
    function _t(e) {
        var t = e[0],
        n = e[e.length - 1];
        return t < n ? [t, n] : [n, t]
    }
    function Dt(e) {
        return e.rangeExtent ? e.rangeExtent() : _t(e.range())
    }
    function Pt(e, t) {
        var n = 0,
        r = e.length - 1,
        i = e[n],
        s = e[r],
        o;
        s < i && (o = n, n = r, r = o, o = i, i = s, s = o);
        if (t = t(s - i)) e[n] = t.floor(i),
        e[r] = t.ceil(s);
        return e
    }
    function Ht() {
        return Math
    }
    function Bt(e, t, n, r) {
        function i() {
            var i = Math.min(e.length, t.length) > 2 ? zt: Ut,
            a = r ? q: I;
            return o = i(e, t, a, n),
            u = i(t, e, a, d3.interpolate),
            s
        }
        function s(e) {
            return o(e)
        }
        var o, u;
        return s.invert = function(e) {
            return u(e)
        },
        s.domain = function(t) {
            return arguments.length ? (e = t.map(Number), i()) : e
        },
        s.range = function(e) {
            return arguments.length ? (t = e, i()) : t
        },
        s.rangeRound = function(e) {
            return s.range(e).interpolate(d3.interpolateRound)
        },
        s.clamp = function(e) {
            return arguments.length ? (r = e, i()) : r
        },
        s.interpolate = function(e) {
            return arguments.length ? (n = e, i()) : n
        },
        s.ticks = function(t) {
            return qt(e, t)
        },
        s.tickFormat = function(t) {
            return Rt(e, t)
        },
        s.nice = function() {
            return Pt(e, Ft),
            i()
        },
        s.copy = function() {
            return Bt(e, t, n, r)
        },
        i()
    }
    function jt(e, t) {
        return d3.rebind(e, t, "range", "rangeRound", "interpolate", "clamp")
    }
    function Ft(e) {
        return e = Math.pow(10, Math.round(Math.log(e) / Math.LN10) - 1),
        e && {
            floor: function(t) {
                return Math.floor(t / e) * e
            },
            ceil: function(t) {
                return Math.ceil(t / e) * e
            }
        }
    }
    function It(e, t) {
        var n = _t(e),
        r = n[1] - n[0],
        i = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)),
        s = t / r * i;
        return s <= .15 ? i *= 10 : s <= .35 ? i *= 5 : s <= .75 && (i *= 2),
        n[0] = Math.ceil(n[0] / i) * i,
        n[1] = Math.floor(n[1] / i) * i + i * .5,
        n[2] = i,
        n
    }
    function qt(e, t) {
        return d3.range.apply(d3, It(e, t))
    }
    function Rt(e, t) {
        return d3.format(",." + Math.max(0, -Math.floor(Math.log(It(e, t)[2]) / Math.LN10 + .01)) + "f")
    }
    function Ut(e, t, n, r) {
        var i = n(e[0], e[1]),
        s = r(t[0], t[1]);
        return function(e) {
            return s(i(e))
        }
    }
    function zt(e, t, n, r) {
        var i = [],
        s = [],
        o = 0,
        u = Math.min(e.length, t.length) - 1;
        e[u] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse());
        while (++o <= u) i.push(n(e[o - 1], e[o])),
        s.push(r(t[o - 1], t[o]));
        return function(t) {
            var n = d3.bisect(e, t, 1, u) - 1;
            return s[n](i[n](t))
        }
    }
    function Wt(e, t) {
        function n(n) {
            return e(t(n))
        }
        var r = t.pow;
        return n.invert = function(t) {
            return r(e.invert(t))
        },
        n.domain = function(i) {
            return arguments.length ? (t = i[0] < 0 ? Vt: Xt, r = t.pow, e.domain(i.map(t)), n) : e.domain().map(r)
        },
        n.nice = function() {
            return e.domain(Pt(e.domain(), Ht)),
            n
        },
        n.ticks = function() {
            var n = _t(e.domain()),
            i = [];
            if (n.every(isFinite)) {
                var s = Math.floor(n[0]),
                o = Math.ceil(n[1]),
                u = r(n[0]),
                a = r(n[1]);
                if (t === Vt) {
                    i.push(r(s));
                    for (; s++<o;) for (var f = 9; f > 0; f--) i.push(r(s) * f)
                } else {
                    for (; s < o; s++) for (var f = 1; f < 10; f++) i.push(r(s) * f);
                    i.push(r(s))
                }
                for (s = 0; i[s] < u; s++);
                for (o = i.length; i[o - 1] > a; o--);
                i = i.slice(s, o)
            }
            return i
        },
        n.tickFormat = function(e, i) {
            arguments.length < 2 && (i = $s);
            if (arguments.length < 1) return i;
            var s = Math.max(.1, e / n.ticks().length),
            o = t === Vt ? (u = -1e-12, Math.floor) : (u = 1e-12, Math.ceil),
            u;
            return function(e) {
                return e / r(o(t(e) + u)) <= s ? i(e) : ""
            }
        },
        n.copy = function() {
            return Wt(e.copy(), t)
        },
        jt(n, e)
    }
    function Xt(e) {
        return Math.log(e < 0 ? 0 : e) / Math.LN10
    }
    function Vt(e) {
        return - Math.log(e > 0 ? 0 : -e) / Math.LN10
    }
    function $t(e, t) {
        function n(t) {
            return e(r(t))
        }
        var r = Jt(t),
        i = Jt(1 / t);
        return n.invert = function(t) {
            return i(e.invert(t))
        },
        n.domain = function(t) {
            return arguments.length ? (e.domain(t.map(r)), n) : e.domain().map(i)
        },
        n.ticks = function(e) {
            return qt(n.domain(), e)
        },
        n.tickFormat = function(e) {
            return Rt(n.domain(), e)
        },
        n.nice = function() {
            return n.domain(Pt(n.domain(), Ft))
        },
        n.exponent = function(e) {
            if (!arguments.length) return t;
            var s = n.domain();
            return r = Jt(t = e),
            i = Jt(1 / t),
            n.domain(s)
        },
        n.copy = function() {
            return $t(e.copy(), t)
        },
        jt(n, e)
    }
    function Jt(e) {
        return function(t) {
            return t < 0 ? -Math.pow( - t, e) : Math.pow(t, e)
        }
    }
    function Kt(e, t) {
        function n(t) {
            return o[((s.get(t) || s.set(t, e.push(t))) - 1) % o.length]
        }
        function i(t, n) {
            return d3.range(e.length).map(function(e) {
                return t + n * e
            })
        }
        var s, o, u;
        return n.domain = function(i) {
            if (!arguments.length) return e;
            e = [],
            s = new r;
            var o = -1,
            u = i.length,
            a;
            while (++o < u) s.has(a = i[o]) || s.set(a, e.push(a));
            return n[t.t].apply(n, t.a)
        },
        n.range = function(e) {
            return arguments.length ? (o = e, u = 0, t = {
                t: "range",
                a: arguments
            },
            n) : o
        },
        n.rangePoints = function(r, s) {
            arguments.length < 2 && (s = 0);
            var a = r[0],
            f = r[1],
            l = (f - a) / (Math.max(1, e.length - 1) + s);
            return o = i(e.length < 2 ? (a + f) / 2 : a + l * s / 2, l),
            u = 0,
            t = {
                t: "rangePoints",
                a: arguments
            },
            n
        },
        n.rangeBands = function(r, s, a) {
            arguments.length < 2 && (s = 0),
            arguments.length < 3 && (a = s);
            var f = r[1] < r[0],
            l = r[f - 0],
            c = r[1 - f],
            h = (c - l) / (e.length - s + 2 * a);
            return o = i(l + h * a, h),
            f && o.reverse(),
            u = h * (1 - s),
            t = {
                t: "rangeBands",
                a: arguments
            },
            n
        },
        n.rangeRoundBands = function(r, s, a) {
            arguments.length < 2 && (s = 0),
            arguments.length < 3 && (a = s);
            var f = r[1] < r[0],
            l = r[f - 0],
            c = r[1 - f],
            h = Math.floor((c - l) / (e.length - s + 2 * a)),
            p = c - l - (e.length - s) * h;
            return o = i(l + Math.round(p / 2), h),
            f && o.reverse(),
            u = Math.round(h * (1 - s)),
            t = {
                t: "rangeRoundBands",
                a: arguments
            },
            n
        },
        n.rangeBand = function() {
            return u
        },
        n.rangeExtent = function() {
            return _t(t.a[0])
        },
        n.copy = function() {
            return Kt(e, t)
        },
        n.domain(e)
    }
    function Qt(e, t) {
        function n() {
            var n = 0,
            s = e.length,
            o = t.length;
            i = [];
            while (++n < o) i[n - 1] = d3.quantile(e, n / o);
            return r
        }
        function r(e) {
            return isNaN(e = +e) ? NaN: t[d3.bisect(i, e)]
        }
        var i;
        return r.domain = function(t) {
            return arguments.length ? (e = t.filter(function(e) {
                return ! isNaN(e)
            }).sort(d3.ascending), n()) : e
        },
        r.range = function(e) {
            return arguments.length ? (t = e, n()) : t
        },
        r.quantiles = function() {
            return i
        },
        r.copy = function() {
            return Qt(e, t)
        },
        n()
    }
    function Gt(e, t, n) {
        function r(t) {
            return n[Math.max(0, Math.min(o, Math.floor(s * (t - e))))]
        }
        function i() {
            return s = n.length / (t - e),
            o = n.length - 1,
            r
        }
        var s, o;
        return r.domain = function(n) {
            return arguments.length ? (e = +n[0], t = +n[n.length - 1], i()) : [e, t]
        },
        r.range = function(e) {
            return arguments.length ? (n = e, i()) : n
        },
        r.copy = function() {
            return Gt(e, t, n)
        },
        i()
    }
    function Yt(e, t) {
        function n(n) {
            return t[d3.bisect(e, n)]
        }
        return n.domain = function(t) {
            return arguments.length ? (e = t, n) : e
        },
        n.range = function(e) {
            return arguments.length ? (t = e, n) : t
        },
        n.copy = function() {
            return Yt(e, t)
        },
        n
    }
    function Zt(e) {
        function t(e) {
            return + e
        }
        return t.invert = t,
        t.domain = t.range = function(n) {
            return arguments.length ? (e = n.map(t), t) : e
        },
        t.ticks = function(t) {
            return qt(e, t)
        },
        t.tickFormat = function(t) {
            return Rt(e, t)
        },
        t.copy = function() {
            return Zt(e)
        },
        t
    }
    function en(e) {
        return e.innerRadius
    }
    function tn(e) {
        return e.outerRadius
    }
    function nn(e) {
        return e.startAngle
    }
    function rn(e) {
        return e.endAngle
    }
    function sn(e) {
        function t(t) {
            function o() {
                a.push("M", s(e(l), f))
            }
            var a = [],
            l = [],
            c = -1,
            h = t.length,
            p,
            d = u(n),
            v = u(r);
            while (++c < h) i.call(this, p = t[c], c) ? l.push([ + d.call(this, p, c), +v.call(this, p, c)]) : l.length && (o(), l = []);
            return l.length && o(),
            a.length ? a.join("") : null
        }
        var n = on,
        r = un,
        i = o,
        s = an,
        a = s.key,
        f = .7;
        return t.x = function(e) {
            return arguments.length ? (n = e, t) : n
        },
        t.y = function(e) {
            return arguments.length ? (r = e, t) : r
        },
        t.defined = function(e) {
            return arguments.length ? (i = e, t) : i
        },
        t.interpolate = function(e) {
            return arguments.length ? (typeof e == "function" ? a = s = e: a = (s = eo.get(e) || an).key, t) : a
        },
        t.tension = function(e) {
            return arguments.length ? (f = e, t) : f
        },
        t
    }
    function on(e) {
        return e[0]
    }
    function un(e) {
        return e[1]
    }
    function an(e) {
        return e.join("L")
    }
    function fn(e) {
        return an(e) + "Z"
    }
    function ln(e) {
        var t = 0,
        n = e.length,
        r = e[0],
        i = [r[0], ",", r[1]];
        while (++t < n) i.push("V", (r = e[t])[1], "H", r[0]);
        return i.join("")
    }
    function cn(e) {
        var t = 0,
        n = e.length,
        r = e[0],
        i = [r[0], ",", r[1]];
        while (++t < n) i.push("H", (r = e[t])[0], "V", r[1]);
        return i.join("")
    }
    function hn(e, t) {
        return e.length < 4 ? an(e) : e[1] + vn(e.slice(1, e.length - 1), mn(e, t))
    }
    function pn(e, t) {
        return e.length < 3 ? an(e) : e[0] + vn((e.push(e[0]), e), mn([e[e.length - 2]].concat(e, [e[1]]), t))
    }
    function dn(e, t, n) {
        return e.length < 3 ? an(e) : e[0] + vn(e, mn(e, t))
    }
    function vn(e, t) {
        if (t.length < 1 || e.length != t.length && e.length != t.length + 2) return an(e);
        var n = e.length != t.length,
        r = "",
        i = e[0],
        s = e[1],
        o = t[0],
        u = o,
        a = 1;
        n && (r += "Q" + (s[0] - o[0] * 2 / 3) + "," + (s[1] - o[1] * 2 / 3) + "," + s[0] + "," + s[1], i = e[1], a = 2);
        if (t.length > 1) {
            u = t[1],
            s = e[a],
            a++,
            r += "C" + (i[0] + o[0]) + "," + (i[1] + o[1]) + "," + (s[0] - u[0]) + "," + (s[1] - u[1]) + "," + s[0] + "," + s[1];
            for (var f = 2; f < t.length; f++, a++) s = e[a],
            u = t[f],
            r += "S" + (s[0] - u[0]) + "," + (s[1] - u[1]) + "," + s[0] + "," + s[1]
        }
        if (n) {
            var l = e[a];
            r += "Q" + (s[0] + u[0] * 2 / 3) + "," + (s[1] + u[1] * 2 / 3) + "," + l[0] + "," + l[1]
        }
        return r
    }
    function mn(e, t) {
        var n = [],
        r = (1 - t) / 2,
        i,
        s = e[0],
        o = e[1],
        u = 1,
        a = e.length;
        while (++u < a) i = s,
        s = o,
        o = e[u],
        n.push([r * (o[0] - i[0]), r * (o[1] - i[1])]);
        return n
    }
    function gn(e) {
        if (e.length < 3) return an(e);
        var t = 1,
        n = e.length,
        r = e[0],
        i = r[0],
        s = r[1],
        o = [i, i, i, (r = e[1])[0]],
        u = [s, s, s, r[1]],
        a = [i, ",", s];
        Sn(a, o, u);
        while (++t < n) r = e[t],
        o.shift(),
        o.push(r[0]),
        u.shift(),
        u.push(r[1]),
        Sn(a, o, u);
        t = -1;
        while (++t < 2) o.shift(),
        o.push(r[0]),
        u.shift(),
        u.push(r[1]),
        Sn(a, o, u);
        return a.join("")
    }
    function yn(e) {
        if (e.length < 4) return an(e);
        var t = [],
        n = -1,
        r = e.length,
        i,
        s = [0],
        o = [0];
        while (++n < 3) i = e[n],
        s.push(i[0]),
        o.push(i[1]);
        t.push(En(ro, s) + "," + En(ro, o)),
        --n;
        while (++n < r) i = e[n],
        s.shift(),
        s.push(i[0]),
        o.shift(),
        o.push(i[1]),
        Sn(t, s, o);
        return t.join("")
    }
    function bn(e) {
        var t, n = -1,
        r = e.length,
        i = r + 4,
        s, o = [],
        u = [];
        while (++n < 4) s = e[n % r],
        o.push(s[0]),
        u.push(s[1]);
        t = [En(ro, o), ",", En(ro, u)],
        --n;
        while (++n < i) s = e[n % r],
        o.shift(),
        o.push(s[0]),
        u.shift(),
        u.push(s[1]),
        Sn(t, o, u);
        return t.join("")
    }
    function wn(e, t) {
        var n = e.length - 1;
        if (n) {
            var r = e[0][0],
            i = e[0][1],
            s = e[n][0] - r,
            o = e[n][1] - i,
            u = -1,
            a,
            f;
            while (++u <= n) a = e[u],
            f = u / n,
            a[0] = t * a[0] + (1 - t) * (r + f * s),
            a[1] = t * a[1] + (1 - t) * (i + f * o)
        }
        return gn(e)
    }
    function En(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3]
    }
    function Sn(e, t, n) {
        e.push("C", En(to, t), ",", En(to, n), ",", En(no, t), ",", En(no, n), ",", En(ro, t), ",", En(ro, n))
    }
    function xn(e, t) {
        return (t[1] - e[1]) / (t[0] - e[0])
    }
    function Tn(e) {
        var t = 0,
        n = e.length - 1,
        r = [],
        i = e[0],
        s = e[1],
        o = r[0] = xn(i, s);
        while (++t < n) r[t] = (o + (o = xn(i = s, s = e[t + 1]))) / 2;
        return r[t] = o,
        r
    }
    function Nn(e) {
        var t = [],
        n,
        r,
        i,
        s,
        o = Tn(e),
        u = -1,
        a = e.length - 1;
        while (++u < a) n = xn(e[u], e[u + 1]),
        Math.abs(n) < 1e-6 ? o[u] = o[u + 1] = 0 : (r = o[u] / n, i = o[u + 1] / n, s = r * r + i * i, s > 9 && (s = n * 3 / Math.sqrt(s), o[u] = s * r, o[u + 1] = s * i));
        u = -1;
        while (++u <= a) s = (e[Math.min(a, u + 1)][0] - e[Math.max(0, u - 1)][0]) / (6 * (1 + o[u] * o[u])),
        t.push([s || 0, o[u] * s || 0]);
        return t
    }
    function Cn(e) {
        return e.length < 3 ? an(e) : e[0] + vn(e, Nn(e))
    }
    function kn(e) {
        var t, n = -1,
        r = e.length,
        i, s;
        while (++n < r) t = e[n],
        i = t[0],
        s = t[1] + Ys,
        t[0] = i * Math.cos(s),
        t[1] = i * Math.sin(s);
        return e
    }
    function Ln(e) {
        function t(t) {
            function o() {
                l.push("M", f(e(v), p), h, c(e(d.reverse()), p), "Z")
            }
            var l = [],
            d = [],
            v = [],
            m = -1,
            g = t.length,
            y,
            b = u(n),
            w = u(i),
            E = n === r ?
            function() {
                return x
            }: u(r),
            S = i === s ?
            function() {
                return T
            }: u(s),
            x,
            T;
            while (++m < g) a.call(this, y = t[m], m) ? (d.push([x = +b.call(this, y, m), T = +w.call(this, y, m)]), v.push([ + E.call(this, y, m), +S.call(this, y, m)])) : d.length && (o(), d = [], v = []);
            return d.length && o(),
            l.length ? l.join("") : null
        }
        var n = on,
        r = on,
        i = 0,
        s = un,
        a = o,
        f = an,
        l = f.key,
        c = f,
        h = "L",
        p = .7;
        return t.x = function(e) {
            return arguments.length ? (n = r = e, t) : r
        },
        t.x0 = function(e) {
            return arguments.length ? (n = e, t) : n
        },
        t.x1 = function(e) {
            return arguments.length ? (r = e, t) : r
        },
        t.y = function(e) {
            return arguments.length ? (i = s = e, t) : s
        },
        t.y0 = function(e) {
            return arguments.length ? (i = e, t) : i
        },
        t.y1 = function(e) {
            return arguments.length ? (s = e, t) : s
        },
        t.defined = function(e) {
            return arguments.length ? (a = e, t) : a
        },
        t.interpolate = function(e) {
            return arguments.length ? (typeof e == "function" ? l = f = e: l = (f = eo.get(e) || an).key, c = f.reverse || f, h = f.closed ? "M": "L", t) : l
        },
        t.tension = function(e) {
            return arguments.length ? (p = e, t) : p
        },
        t
    }
    function An(e) {
        return e.source
    }
    function On(e) {
        return e.target
    }
    function Mn(e) {
        return e.radius
    }
    function _n(e) {
        return e.startAngle
    }
    function Dn(e) {
        return e.endAngle
    }
    function Pn(e) {
        return [e.x, e.y]
    }
    function Hn(e) {
        return function() {
            var t = e.apply(this, arguments),
            n = t[0],
            r = t[1] + Ys;
            return [n * Math.cos(r), n * Math.sin(r)]
        }
    }
    function Bn() {
        return 64
    }
    function jn() {
        return "circle"
    }
    function Fn(e) {
        var t = Math.sqrt(e / Math.PI);
        return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"
    }
    function In(e, t) {
        e.attr("transform",
        function(e) {
            return "translate(" + t(e) + ",0)"
        })
    }
    function qn(e, t) {
        e.attr("transform",
        function(e) {
            return "translate(0," + t(e) + ")"
        })
    }
    function Rn(e, t, n) {
        i = [];
        if (n && t.length > 1) {
            var r = _t(e.domain()),
            i,
            s = -1,
            o = t.length,
            u = (t[1] - t[0]) / ++n,
            a,
            f;
            while (++s < o) for (a = n; --a > 0;)(f = +t[s] - a * u) >= r[0] && i.push(f);
            for (--s, a = 0; ++a < n && (f = +t[s] + a * u) < r[1];) i.push(f)
        }
        return i
    }
    function Un() {
        fo || (fo = d3.select("body").append("div").style("visibility", "hidden").style("top", 0).style("height", 0).style("width", 0).style("overflow-y", "scroll").append("div").style("height", "2000px").node().parentNode);
        var e = d3.event,
        t;
        try {
            fo.scrollTop = 1e3,
            fo.dispatchEvent(e),
            t = 1e3 - fo.scrollTop
        } catch(n) {
            t = e.wheelDelta || -e.detail * 5
        }
        return t
    }
    function zn(e) {
        var t = e.source,
        n = e.target,
        r = Xn(t, n),
        i = [t];
        while (t !== r) t = t.parent,
        i.push(t);
        var s = i.length;
        while (n !== r) i.splice(s, 0, n),
        n = n.parent;
        return i
    }
    function Wn(e) {
        var t = [],
        n = e.parent;
        while (n != null) t.push(e),
        e = n,
        n = n.parent;
        return t.push(e),
        t
    }
    function Xn(e, t) {
        if (e === t) return e;
        var n = Wn(e),
        r = Wn(t),
        i = n.pop(),
        s = r.pop(),
        o = null;
        while (i === s) o = i,
        i = n.pop(),
        s = r.pop();
        return o
    }
    function Vn(e) {
        e.fixed |= 2
    }
    function $n(e) {
        e.fixed &= 1
    }
    function Jn(e) {
        e.fixed |= 4
    }
    function Kn(e) {
        e.fixed &= 3
    }
    function Qn(e, t, n) {
        var r = 0,
        i = 0;
        e.charge = 0;
        if (!e.leaf) {
            var s = e.nodes,
            o = s.length,
            u = -1,
            a;
            while (++u < o) {
                a = s[u];
                if (a == null) continue;
                Qn(a, t, n),
                e.charge += a.charge,
                r += a.charge * a.cx,
                i += a.charge * a.cy
            }
        }
        if (e.point) {
            e.leaf || (e.point.x += Math.random() - .5, e.point.y += Math.random() - .5);
            var f = t * n[e.point.index];
            e.charge += e.pointCharge = f,
            r += f * e.point.x,
            i += f * e.point.y
        }
        e.cx = r / e.charge,
        e.cy = i / e.charge
    }
    function Gn(e) {
        return 20
    }
    function Yn(e) {
        return 1
    }
    function Zn(e) {
        return e.x
    }
    function er(e) {
        return e.y
    }
    function tr(e, t, n) {
        e.y0 = t,
        e.y = n
    }
    function nr(e) {
        return d3.range(e.length)
    }
    function rr(e) {
        var t = -1,
        n = e[0].length,
        r = [];
        while (++t < n) r[t] = 0;
        return r
    }
    function ir(e) {
        var t = 1,
        n = 0,
        r = e[0][1],
        i,
        s = e.length;
        for (; t < s; ++t)(i = e[t][1]) > r && (n = t, r = i);
        return n
    }
    function sr(e) {
        return e.reduce(or, 0)
    }
    function or(e, t) {
        return e + t[1]
    }
    function ur(e, t) {
        return ar(e, Math.ceil(Math.log(t.length) / Math.LN2 + 1))
    }
    function ar(e, t) {
        var n = -1,
        r = +e[0],
        i = (e[1] - r) / t,
        s = [];
        while (++n <= t) s[n] = i * n + r;
        return s
    }
    function fr(e) {
        return [d3.min(e), d3.max(e)]
    }
    function lr(e, t) {
        return d3.rebind(e, t, "sort", "children", "value"),
        e.links = dr,
        e.nodes = function(t) {
            return vo = !0,
            (e.nodes = e)(t)
        },
        e
    }
    function cr(e) {
        return e.children
    }
    function hr(e) {
        return e.value
    }
    function pr(e, t) {
        return t.value - e.value
    }
    function dr(e) {
        return d3.merge(e.map(function(e) {
            return (e.children || []).map(function(t) {
                return {
                    source: e,
                    target: t
                }
            })
        }))
    }
    function vr(e, t) {
        return e.value - t.value
    }
    function mr(e, t) {
        var n = e._pack_next;
        e._pack_next = t,
        t._pack_prev = e,
        t._pack_next = n,
        n._pack_prev = t
    }
    function gr(e, t) {
        e._pack_next = t,
        t._pack_prev = e
    }
    function yr(e, t) {
        var n = t.x - e.x,
        r = t.y - e.y,
        i = e.r + t.r;
        return i * i - n * n - r * r > .001
    }
    function br(e) {
        function t(e) {
            r = Math.min(e.x - e.r, r),
            i = Math.max(e.x + e.r, i),
            s = Math.min(e.y - e.r, s),
            o = Math.max(e.y + e.r, o)
        }
        if (! (n = e.children) || !(p = n.length)) return;
        var n, r = Infinity,
        i = -Infinity,
        s = Infinity,
        o = -Infinity,
        u, a, f, l, c, h, p;
        n.forEach(wr),
        u = n[0],
        u.x = -u.r,
        u.y = 0,
        t(u);
        if (p > 1) {
            a = n[1],
            a.x = a.r,
            a.y = 0,
            t(a);
            if (p > 2) {
                f = n[2],
                xr(u, a, f),
                t(f),
                mr(u, f),
                u._pack_prev = f,
                mr(f, a),
                a = u._pack_next;
                for (l = 3; l < p; l++) {
                    xr(u, a, f = n[l]);
                    var d = 0,
                    v = 1,
                    m = 1;
                    for (c = a._pack_next; c !== a; c = c._pack_next, v++) if (yr(c, f)) {
                        d = 1;
                        break
                    }
                    if (d == 1) for (h = u._pack_prev; h !== c._pack_prev; h = h._pack_prev, m++) if (yr(h, f)) break;
                    d ? (v < m || v == m && a.r < u.r ? gr(u, a = c) : gr(u = h, a), l--) : (mr(u, f), a = f, t(f))
                }
            }
        }
        var g = (r + i) / 2,
        y = (s + o) / 2,
        b = 0;
        for (l = 0; l < p; l++) f = n[l],
        f.x -= g,
        f.y -= y,
        b = Math.max(b, f.r + Math.sqrt(f.x * f.x + f.y * f.y));
        e.r = b,
        n.forEach(Er)
    }
    function wr(e) {
        e._pack_next = e._pack_prev = e
    }
    function Er(e) {
        delete e._pack_next,
        delete e._pack_prev
    }
    function Sr(e, t, n, r) {
        var i = e.children;
        e.x = t += r * e.x,
        e.y = n += r * e.y,
        e.r *= r;
        if (i) {
            var s = -1,
            o = i.length;
            while (++s < o) Sr(i[s], t, n, r)
        }
    }
    function xr(e, t, n) {
        var r = e.r + n.r,
        i = t.x - e.x,
        s = t.y - e.y;
        if (r && (i || s)) {
            var o = t.r + n.r,
            u = i * i + s * s;
            o *= o,
            r *= r;
            var a = .5 + (r - o) / (2 * u),
            f = Math.sqrt(Math.max(0, 2 * o * (r + u) - (r -= u) * r - o * o)) / (2 * u);
            n.x = e.x + a * i + f * s,
            n.y = e.y + a * s - f * i
        } else n.x = e.x + r,
        n.y = e.y
    }
    function Tr(e) {
        return 1 + d3.max(e,
        function(e) {
            return e.y
        })
    }
    function Nr(e) {
        return e.reduce(function(e, t) {
            return e + t.x
        },
        0) / e.length
    }
    function Cr(e) {
        var t = e.children;
        return t && t.length ? Cr(t[0]) : e
    }
    function kr(e) {
        var t = e.children,
        n;
        return t && (n = t.length) ? kr(t[n - 1]) : e
    }
    function Lr(e, t) {
        return e.parent == t.parent ? 1 : 2
    }
    function Ar(e) {
        var t = e.children;
        return t && t.length ? t[0] : e._tree.thread
    }
    function Or(e) {
        var t = e.children,
        n;
        return t && (n = t.length) ? t[n - 1] : e._tree.thread
    }
    function Mr(e, t) {
        var n = e.children;
        if (n && (i = n.length)) {
            var r, i, s = -1;
            while (++s < i) t(r = Mr(n[s], t), e) > 0 && (e = r)
        }
        return e
    }
    function _r(e, t) {
        return e.x - t.x
    }
    function Dr(e, t) {
        return t.x - e.x
    }
    function Pr(e, t) {
        return e.depth - t.depth
    }
    function Hr(e, t) {
        function n(e, r) {
            var i = e.children;
            if (i && (a = i.length)) {
                var s, o = null,
                u = -1,
                a;
                while (++u < a) s = i[u],
                n(s, o),
                o = s
            }
            t(e, r)
        }
        n(e, null)
    }
    function Br(e) {
        var t = 0,
        n = 0,
        r = e.children,
        i = r.length,
        s;
        while (--i >= 0) s = r[i]._tree,
        s.prelim += t,
        s.mod += t,
        t += s.shift + (n += s.change)
    }
    function jr(e, t, n) {
        e = e._tree,
        t = t._tree;
        var r = n / (t.number - e.number);
        e.change += r,
        t.change -= r,
        t.shift += n,
        t.prelim += n,
        t.mod += n
    }
    function Fr(e, t, n) {
        return e._tree.ancestor.parent == t.parent ? e._tree.ancestor: n
    }
    function Ir(e) {
        return {
            x: e.x,
            y: e.y,
            dx: e.dx,
            dy: e.dy
        }
    }
    function qr(e, t) {
        var n = e.x + t[3],
        r = e.y + t[0],
        i = e.dx - t[1] - t[3],
        s = e.dy - t[0] - t[2];
        return i < 0 && (n += i / 2, i = 0),
        s < 0 && (r += s / 2, s = 0),
        {
            x: n,
            y: r,
            dx: i,
            dy: s
        }
    }
    function Rr(e, t) {
        function n(e, r) {
            d3.text(e, t,
            function(e) {
                r(e && n.parse(e))
            })
        }
        function r(t) {
            return t.map(i).join(e)
        }
        function i(e) {
            return o.test(e) ? '"' + e.replace(/\"/g, '""') + '"': e
        }
        var s = new RegExp("\r\n|[" + e + "\r\n]", "g"),
        o = new RegExp('["' + e + "\n]"),
        u = e.charCodeAt(0);
        return n.parse = function(e) {
            var t;
            return n.parseRows(e,
            function(e, n) {
                if (n) {
                    var r = {},
                    i = -1,
                    s = t.length;
                    while (++i < s) r[t[i]] = e[i];
                    return r
                }
                return t = e,
                null
            })
        },
        n.parseRows = function(e, t) {
            function n() {
                if (s.lastIndex >= e.length) return i;
                if (l) return l = !1,
                r;
                var t = s.lastIndex;
                if (e.charCodeAt(t) === 34) {
                    var n = t;
                    while (n++<e.length) if (e.charCodeAt(n) === 34) {
                        if (e.charCodeAt(n + 1) !== 34) break;
                        n++
                    }
                    s.lastIndex = n + 2;
                    var o = e.charCodeAt(n + 1);
                    return o === 13 ? (l = !0, e.charCodeAt(n + 2) === 10 && s.lastIndex++) : o === 10 && (l = !0),
                    e.substring(t + 1, n).replace(/""/g, '"')
                }
                var a = s.exec(e);
                return a ? (l = a[0].charCodeAt(0) !== u, e.substring(t, a.index)) : (s.lastIndex = e.length, e.substring(t))
            }
            var r = {},
            i = {},
            o = [],
            a = 0,
            f,
            l;
            s.lastIndex = 0;
            while ((f = n()) !== i) {
                var c = [];
                while (f !== r && f !== i) c.push(f),
                f = n();
                if (t && !(c = t(c, a++))) continue;
                o.push(c)
            }
            return o
        },
        n.format = function(e) {
            return e.map(r).join("\n")
        },
        n
    }
    function Ur(e, t) {
        return function(n) {
            return n && e.hasOwnProperty(n.type) ? e[n.type](n) : t
        }
    }
    function zr(e) {
        return "m0," + e + "a" + e + "," + e + " 0 1,1 0," + -2 * e + "a" + e + "," + e + " 0 1,1 0," + 2 * e + "z"
    }
    function Wr(e, t) {
        go.hasOwnProperty(e.type) && go[e.type](e, t)
    }
    function Xr(e, t) {
        Wr(e.geometry, t)
    }
    function Vr(e, t) {
        for (var n = e.features,
        r = 0,
        i = n.length; r < i; r++) Wr(n[r].geometry, t)
    }
    function $r(e, t) {
        for (var n = e.geometries,
        r = 0,
        i = n.length; r < i; r++) Wr(n[r], t)
    }
    function Jr(e, t) {
        for (var n = e.coordinates,
        r = 0,
        i = n.length; r < i; r++) t.apply(null, n[r])
    }
    function Kr(e, t) {
        for (var n = e.coordinates,
        r = 0,
        i = n.length; r < i; r++) for (var s = n[r], o = 0, u = s.length; o < u; o++) t.apply(null, s[o])
    }
    function Qr(e, t) {
        for (var n = e.coordinates,
        r = 0,
        i = n.length; r < i; r++) for (var s = n[r][0], o = 0, u = s.length; o < u; o++) t.apply(null, s[o])
    }
    function Gr(e, t) {
        t.apply(null, e.coordinates)
    }
    function Yr(e, t) {
        for (var n = e.coordinates[0], r = 0, i = n.length; r < i; r++) t.apply(null, n[r])
    }
    function Zr(e) {
        return e.source
    }
    function ei(e) {
        return e.target
    }
    function ti() {
        function e(e) {
            var t = Math.sin(e *= p) * d,
            n = Math.sin(p - e) * d,
            r = n * s + t * c,
            u = n * o + t * h,
            a = n * i + t * l;
            return [Math.atan2(u, r) / mo, Math.atan2(a, Math.sqrt(r * r + u * u)) / mo]
        }
        var t, n, r, i, s, o, u, a, f, l, c, h, p, d;
        return e.distance = function() {
            return p == null && (d = 1 / Math.sin(p = Math.acos(Math.max( - 1, Math.min(1, i * l + r * f * Math.cos(u - t)))))),
            p
        },
        e.source = function(u) {
            var a = Math.cos(t = u[0] * mo),
            f = Math.sin(t);
            return r = Math.cos(n = u[1] * mo),
            i = Math.sin(n),
            s = r * a,
            o = r * f,
            p = null,
            e
        },
        e.target = function(t) {
            var n = Math.cos(u = t[0] * mo),
            r = Math.sin(u);
            return f = Math.cos(a = t[1] * mo),
            l = Math.sin(a),
            c = f * n,
            h = f * r,
            p = null,
            e
        },
        e
    }
    function ni(e, t) {
        var n = ti().source(e).target(t);
        return n.distance(),
        n
    }
    function ri(e) {
        var t = 0,
        n = 0;
        for (;;) {
            if (e(t, n)) return [t, n];
            t === 0 ? (t = n + 1, n = 0) : (t -= 1, n += 1)
        }
    }
    function ii(e, t, n, r) {
        var i, s, o, u, a, f, l;
        return i = r[e],
        s = i[0],
        o = i[1],
        i = r[t],
        u = i[0],
        a = i[1],
        i = r[n],
        f = i[0],
        l = i[1],
        (l - o) * (u - s) - (a - o) * (f - s) > 0
    }
    function si(e, t, n) {
        return (n[0] - t[0]) * (e[1] - t[1]) < (n[1] - t[1]) * (e[0] - t[0])
    }
    function oi(e, t, n, r) {
        var i = e[0],
        s = t[0],
        o = n[0],
        u = r[0],
        a = e[1],
        f = t[1],
        l = n[1],
        c = r[1],
        h = i - o,
        p = s - i,
        d = u - o,
        v = a - l,
        m = f - a,
        g = c - l,
        y = (d * v - g * h) / (g * p - d * m);
        return [i + y * p, a + y * m]
    }
    function ui(e, t) {
        var n = {
            list: e.map(function(e, t) {
                return {
                    index: t,
                    x: e[0],
                    y: e[1]
                }
            }).sort(function(e, t) {
                return e.y < t.y ? -1 : e.y > t.y ? 1 : e.x < t.x ? -1 : e.x > t.x ? 1 : 0
            }),
            bottomSite: null
        },
        r = {
            list: [],
            leftEnd: null,
            rightEnd: null,
            init: function() {
                r.leftEnd = r.createHalfEdge(null, "l"),
                r.rightEnd = r.createHalfEdge(null, "l"),
                r.leftEnd.r = r.rightEnd,
                r.rightEnd.l = r.leftEnd,
                r.list.unshift(r.leftEnd, r.rightEnd)
            },
            createHalfEdge: function(e, t) {
                return {
                    edge: e,
                    side: t,
                    vertex: null,
                    l: null,
                    r: null
                }
            },
            insert: function(e, t) {
                t.l = e,
                t.r = e.r,
                e.r.l = t,
                e.r = t
            },
            leftBound: function(e) {
                var t = r.leftEnd;
                do t = t.r;
                while (t != r.rightEnd && i.rightOf(t, e));
                return t = t.l,
                t
            },
            del: function(e) {
                e.l.r = e.r,
                e.r.l = e.l,
                e.edge = null
            },
            right: function(e) {
                return e.r
            },
            left: function(e) {
                return e.l
            },
            leftRegion: function(e) {
                return e.edge == null ? n.bottomSite: e.edge.region[e.side]
            },
            rightRegion: function(e) {
                return e.edge == null ? n.bottomSite: e.edge.region[wo[e.side]]
            }
        },
        i = {
            bisect: function(e, t) {
                var n = {
                    region: {
                        l: e,
                        r: t
                    },
                    ep: {
                        l: null,
                        r: null
                    }
                },
                r = t.x - e.x,
                i = t.y - e.y,
                s = r > 0 ? r: -r,
                o = i > 0 ? i: -i;
                return n.c = e.x * r + e.y * i + (r * r + i * i) * .5,
                s > o ? (n.a = 1, n.b = i / r, n.c /= r) : (n.b = 1, n.a = r / i, n.c /= i),
                n
            },
            intersect: function(e, t) {
                var n = e.edge,
                r = t.edge;
                if (!n || !r || n.region.r == r.region.r) return null;
                var i = n.a * r.b - n.b * r.a;
                if (Math.abs(i) < 1e-10) return null;
                var s = (n.c * r.b - r.c * n.b) / i,
                o = (r.c * n.a - n.c * r.a) / i,
                u = n.region.r,
                a = r.region.r,
                f,
                l;
                u.y < a.y || u.y == a.y && u.x < a.x ? (f = e, l = n) : (f = t, l = r);
                var c = s >= l.region.r.x;
                return c && f.side === "l" || !c && f.side === "r" ? null: {
                    x: s,
                    y: o
                }
            },
            rightOf: function(e, t) {
                var n = e.edge,
                r = n.region.r,
                i = t.x > r.x;
                if (i && e.side === "l") return 1;
                if (!i && e.side === "r") return 0;
                if (n.a === 1) {
                    var s = t.y - r.y,
                    o = t.x - r.x,
                    u = 0,
                    a = 0; ! i && n.b < 0 || i && n.b >= 0 ? a = u = s >= n.b * o: (a = t.x + t.y * n.b > n.c, n.b < 0 && (a = !a), a || (u = 1));
                    if (!u) {
                        var f = r.x - n.region.l.x;
                        a = n.b * (o * o - s * s) < f * s * (1 + 2 * o / f + n.b * n.b),
                        n.b < 0 && (a = !a)
                    }
                } else {
                    var l = n.c - n.a * t.x,
                    c = t.y - l,
                    h = t.x - r.x,
                    p = l - r.y;
                    a = c * c > h * h + p * p
                }
                return e.side === "l" ? a: !a
            },
            endPoint: function(e, n, r) {
                e.ep[n] = r;
                if (!e.ep[wo[n]]) return;
                t(e)
            },
            distance: function(e, t) {
                var n = e.x - t.x,
                r = e.y - t.y;
                return Math.sqrt(n * n + r * r)
            }
        },
        s = {
            list: [],
            insert: function(e, t, n) {
                e.vertex = t,
                e.ystar = t.y + n;
                for (var r = 0,
                i = s.list,
                o = i.length; r < o; r++) {
                    var u = i[r];
                    if (e.ystar > u.ystar || e.ystar == u.ystar && t.x > u.vertex.x) continue;
                    break
                }
                i.splice(r, 0, e)
            },
            del: function(e) {
                for (var t = 0,
                n = s.list,
                r = n.length; t < r && n[t] != e; ++t);
                n.splice(t, 1)
            },
            empty: function() {
                return s.list.length === 0
            },
            nextEvent: function(e) {
                for (var t = 0,
                n = s.list,
                r = n.length; t < r; ++t) if (n[t] == e) return n[t + 1];
                return null
            },
            min: function() {
                var e = s.list[0];
                return {
                    x: e.vertex.x,
                    y: e.ystar
                }
            },
            extractMin: function() {
                return s.list.shift()
            }
        };
        r.init(),
        n.bottomSite = n.list.shift();
        var o = n.list.shift(),
        u,
        a,
        f,
        l,
        c,
        h,
        p,
        d,
        v,
        m,
        g,
        y,
        b;
        for (;;) {
            s.empty() || (u = s.min());
            if (o && (s.empty() || o.y < u.y || o.y == u.y && o.x < u.x)) a = r.leftBound(o),
            f = r.right(a),
            p = r.rightRegion(a),
            y = i.bisect(p, o),
            h = r.createHalfEdge(y, "l"),
            r.insert(a, h),
            m = i.intersect(a, h),
            m && (s.del(a), s.insert(a, m, i.distance(m, o))),
            a = h,
            h = r.createHalfEdge(y, "r"),
            r.insert(a, h),
            m = i.intersect(h, f),
            m && s.insert(h, m, i.distance(m, o)),
            o = n.list.shift();
            else {
                if ( !! s.empty()) break;
                a = s.extractMin(),
                l = r.left(a),
                f = r.right(a),
                c = r.right(f),
                p = r.leftRegion(a),
                d = r.rightRegion(f),
                g = a.vertex,
                i.endPoint(a.edge, a.side, g),
                i.endPoint(f.edge, f.side, g),
                r.del(a),
                s.del(f),
                r.del(f),
                b = "l",
                p.y > d.y && (v = p, p = d, d = v, b = "r"),
                y = i.bisect(p, d),
                h = r.createHalfEdge(y, b),
                r.insert(l, h),
                i.endPoint(y, wo[b], g),
                m = i.intersect(l, h),
                m && (s.del(l), s.insert(l, m, i.distance(m, p))),
                m = i.intersect(h, c),
                m && s.insert(h, m, i.distance(m, p))
            }
        }
        for (a = r.right(r.leftEnd); a != r.rightEnd; a = r.right(a)) t(a.edge)
    }
    function ai() {
        return {
            leaf: !0,
            nodes: [],
            point: null
        }
    }
    function fi(e, t, n, r, i, s) {
        if (!e(t, n, r, i, s)) {
            var o = (n + i) * .5,
            u = (r + s) * .5,
            a = t.nodes;
            a[0] && fi(e, a[0], n, r, o, u),
            a[1] && fi(e, a[1], o, r, i, u),
            a[2] && fi(e, a[2], n, u, o, s),
            a[3] && fi(e, a[3], o, u, i, s)
        }
    }
    function li(e) {
        return {
            x: e[0],
            y: e[1]
        }
    }
    function ci() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
    }
    function hi(e) {
        return e.substring(0, 3)
    }
    function pi(e, t, n, r) {
        var i, s, o = 0,
        u = t.length,
        a = n.length;
        while (o < u) {
            if (r >= a) return - 1;
            i = t.charCodeAt(o++);
            if (i == 37) {
                s = Uo[t.charAt(o++)];
                if (!s || (r = s(e, n, r)) < 0) return - 1
            } else if (i != n.charCodeAt(r++)) return - 1
        }
        return r
    }
    function di(e) {
        return new RegExp("^(?:" + e.map(d3.requote).join("|") + ")", "i")
    }
    function vi(e) {
        var t = new r,
        n = -1,
        i = e.length;
        while (++n < i) t.set(e[n].toLowerCase(), n);
        return t
    }
    function mi(e, t, n) {
        Bo.lastIndex = 0;
        var r = Bo.exec(t.substring(n));
        return r ? n += r[0].length: -1
    }
    function gi(e, t, n) {
        Ho.lastIndex = 0;
        var r = Ho.exec(t.substring(n));
        return r ? n += r[0].length: -1
    }
    function yi(e, t, n) {
        Io.lastIndex = 0;
        var r = Io.exec(t.substring(n));
        return r ? (e.m = qo.get(r[0].toLowerCase()), n += r[0].length) : -1
    }
    function bi(e, t, n) {
        jo.lastIndex = 0;
        var r = jo.exec(t.substring(n));
        return r ? (e.m = Fo.get(r[0].toLowerCase()), n += r[0].length) : -1
    }
    function wi(e, t, n) {
        return pi(e, Ro.c.toString(), t, n)
    }
    function Ei(e, t, n) {
        return pi(e, Ro.x.toString(), t, n)
    }
    function Si(e, t, n) {
        return pi(e, Ro.X.toString(), t, n)
    }
    function xi(e, t, n) {
        zo.lastIndex = 0;
        var r = zo.exec(t.substring(n, n + 4));
        return r ? (e.y = +r[0], n += r[0].length) : -1
    }
    function Ti(e, t, n) {
        zo.lastIndex = 0;
        var r = zo.exec(t.substring(n, n + 2));
        return r ? (e.y = Ni( + r[0]), n += r[0].length) : -1
    }
    function Ni(e) {
        return e + (e > 68 ? 1900 : 2e3)
    }
    function Ci(e, t, n) {
        zo.lastIndex = 0;
        var r = zo.exec(t.substring(n, n + 2));
        return r ? (e.m = r[0] - 1, n += r[0].length) : -1
    }
    function ki(e, t, n) {
        zo.lastIndex = 0;
        var r = zo.exec(t.substring(n, n + 2));
        return r ? (e.d = +r[0], n += r[0].length) : -1
    }
    function Li(e, t, n) {
        zo.lastIndex = 0;
        var r = zo.exec(t.substring(n, n + 2));
        return r ? (e.H = +r[0], n += r[0].length) : -1
    }
    function Ai(e, t, n) {
        zo.lastIndex = 0;
        var r = zo.exec(t.substring(n, n + 2));
        return r ? (e.M = +r[0], n += r[0].length) : -1
    }
    function Oi(e, t, n) {
        zo.lastIndex = 0;
        var r = zo.exec(t.substring(n, n + 2));
        return r ? (e.S = +r[0], n += r[0].length) : -1
    }
    function Mi(e, t, n) {
        zo.lastIndex = 0;
        var r = zo.exec(t.substring(n, n + 3));
        return r ? (e.L = +r[0], n += r[0].length) : -1
    }
    function _i(e, t, n) {
        var r = Wo.get(t.substring(n, n += 2).toLowerCase());
        return r == null ? -1 : (e.p = r, n)
    }
    function Di(e) {
        var t = e.getTimezoneOffset(),
        n = t > 0 ? "-": "+",
        r = ~~ (Math.abs(t) / 60),
        i = Math.abs(t) % 60;
        return n + Mo(r) + Mo(i)
    }
    function Pi(e) {
        return e.toISOString()
    }
    function Hi(e, t, n) {
        function r(t) {
            var n = e(t),
            r = s(n, 1);
            return t - n < r - t ? n: r
        }
        function i(n) {
            return t(n = e(new Eo(n - 1)), 1),
            n
        }
        function s(e, n) {
            return t(e = new Eo( + e), n),
            e
        }
        function o(e, r, s) {
            var o = i(e),
            u = [];
            if (s > 1) while (o < r) n(o) % s || u.push(new Date( + o)),
            t(o, 1);
            else while (o < r) u.push(new Date( + o)),
            t(o, 1);
            return u
        }
        function u(e, t, n) {
            try {
                Eo = ci;
                var r = new ci;
                return r._ = e,
                o(r, t, n)
            } finally {
                Eo = Date
            }
        }
        e.floor = e,
        e.round = r,
        e.ceil = i,
        e.offset = s,
        e.range = o;
        var a = e.utc = Bi(e);
        return a.floor = a,
        a.round = Bi(r),
        a.ceil = Bi(i),
        a.offset = Bi(s),
        a.range = u,
        e
    }
    function Bi(e) {
        return function(t, n) {
            try {
                Eo = ci;
                var r = new ci;
                return r._ = t,
                e(r, n)._
            } finally {
                Eo = Date
            }
        }
    }
    function ji(e, t, n) {
        function r(t) {
            return e(t)
        }
        return r.invert = function(t) {
            return Ii(e.invert(t))
        },
        r.domain = function(t) {
            return arguments.length ? (e.domain(t), r) : e.domain().map(Ii)
        },
        r.nice = function(e) {
            return r.domain(Pt(r.domain(),
            function() {
                return e
            }))
        },
        r.ticks = function(n, i) {
            var s = Fi(r.domain());
            if (typeof n != "function") {
                var o = s[1] - s[0],
                u = o / n,
                a = d3.bisect(Vo, u);
                if (a == Vo.length) return t.year(s, n);
                if (!a) return e.ticks(n).map(Ii);
                Math.log(u / Vo[a - 1]) < Math.log(Vo[a] / u) && --a,
                n = t[a],
                i = n[1],
                n = n[0].range
            }
            return n(s[0], new Date( + s[1] + 1), i)
        },
        r.tickFormat = function() {
            return n
        },
        r.copy = function() {
            return ji(e.copy(), t, n)
        },
        d3.rebind(r, e, "range", "rangeRound", "interpolate", "clamp")
    }
    function Fi(e) {
        var t = e[0],
        n = e[e.length - 1];
        return t < n ? [t, n] : [n, t]
    }
    function Ii(e) {
        return new Date(e)
    }
    function qi(e) {
        return function(t) {
            var n = e.length - 1,
            r = e[n];
            while (!r[1](t)) r = e[--n];
            return r[0](t)
        }
    }
    function Ri(e) {
        var t = new Date(e, 0, 1);
        return t.setFullYear(e),
        t
    }
    function Ui(e) {
        var t = e.getFullYear(),
        n = Ri(t),
        r = Ri(t + 1);
        return t + (e - n) / (r - n)
    }
    function zi(e) {
        var t = new Date(Date.UTC(e, 0, 1));
        return t.setUTCFullYear(e),
        t
    }
    function Wi(e) {
        var t = e.getUTCFullYear(),
        n = zi(t),
        r = zi(t + 1);
        return t + (e - n) / (r - n)
    }
    Date.now || (Date.now = function() {
        return + (new Date)
    });
    try {
        document.createElement("div").style.setProperty("opacity", 0, "")
    } catch(Xi) {
        var Vi = CSSStyleDeclaration.prototype,
        $i = Vi.setProperty;
        Vi.setProperty = function(e, t, n) {
            $i.call(this, e, t + "", n)
        }
    }
    d3 = {
        version: "2.10.3"
    };
    var Ji = n;
    try {
        Ji(document.documentElement.childNodes)[0].nodeType
    } catch(Ki) {
        Ji = t
    }
    var Qi = [].__proto__ ?
    function(e, t) {
        e.__proto__ = t
    }: function(e, t) {
        for (var n in t) e[n] = t[n]
    };
    d3.map = function(e) {
        var t = new r;
        for (var n in e) t.set(n, e[n]);
        return t
    },
    e(r, {
        has: function(e) {
            return Gi + e in this
        },
        get: function(e) {
            return this[Gi + e]
        },
        set: function(e, t) {
            return this[Gi + e] = t
        },
        remove: function(e) {
            return e = Gi + e,
            e in this && delete this[e]
        },
        keys: function() {
            var e = [];
            return this.forEach(function(t) {
                e.push(t)
            }),
            e
        },
        values: function() {
            var e = [];
            return this.forEach(function(t, n) {
                e.push(n)
            }),
            e
        },
        entries: function() {
            var e = [];
            return this.forEach(function(t, n) {
                e.push({
                    key: t,
                    value: n
                })
            }),
            e
        },
        forEach: function(e) {
            for (var t in this) t.charCodeAt(0) === Yi && e.call(this, t.substring(1), this[t])
        }
    });
    var Gi = "\0",
    Yi = Gi.charCodeAt(0);
    d3.functor = u,
    d3.rebind = function(e, t) {
        var n = 1,
        r = arguments.length,
        i;
        while (++n < r) e[i = arguments[n]] = a(e, t, t[i]);
        return e
    },
    d3.ascending = function(e, t) {
        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
    },
    d3.descending = function(e, t) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
    },
    d3.mean = function(e, t) {
        var n = e.length,
        r, i = 0,
        s = -1,
        o = 0;
        if (arguments.length === 1) while (++s < n) f(r = e[s]) && (i += (r - i) / ++o);
        else while (++s < n) f(r = t.call(e, e[s], s)) && (i += (r - i) / ++o);
        return o ? i: undefined
    },
    d3.median = function(e, t) {
        return arguments.length > 1 && (e = e.map(t)),
        e = e.filter(f),
        e.length ? d3.quantile(e.sort(d3.ascending), .5) : undefined
    },
    d3.min = function(e, t) {
        var n = -1,
        r = e.length,
        i, s;
        if (arguments.length === 1) {
            while (++n < r && ((i = e[n]) == null || i != i)) i = undefined;
            while (++n < r)(s = e[n]) != null && i > s && (i = s)
        } else {
            while (++n < r && ((i = t.call(e, e[n], n)) == null || i != i)) i = undefined;
            while (++n < r)(s = t.call(e, e[n], n)) != null && i > s && (i = s)
        }
        return i
    },
    d3.max = function(e, t) {
        var n = -1,
        r = e.length,
        i, s;
        if (arguments.length === 1) {
            while (++n < r && ((i = e[n]) == null || i != i)) i = undefined;
            while (++n < r)(s = e[n]) != null && s > i && (i = s)
        } else {
            while (++n < r && ((i = t.call(e, e[n], n)) == null || i != i)) i = undefined;
            while (++n < r)(s = t.call(e, e[n], n)) != null && s > i && (i = s)
        }
        return i
    },
    d3.extent = function(e, t) {
        var n = -1,
        r = e.length,
        i, s, o;
        if (arguments.length === 1) {
            while (++n < r && ((i = o = e[n]) == null || i != i)) i = o = undefined;
            while (++n < r)(s = e[n]) != null && (i > s && (i = s), o < s && (o = s))
        } else {
            while (++n < r && ((i = o = t.call(e, e[n], n)) == null || i != i)) i = undefined;
            while (++n < r)(s = t.call(e, e[n], n)) != null && (i > s && (i = s), o < s && (o = s))
        }
        return [i, o]
    },
    d3.random = {
        normal: function(e, t) {
            var n = arguments.length;
            return n < 2 && (t = 1),
            n < 1 && (e = 0),
            function() {
                var n, r, i;
                do n = Math.random() * 2 - 1,
                r = Math.random() * 2 - 1,
                i = n * n + r * r;
                while (!i || i > 1);
                return e + t * n * Math.sqrt( - 2 * Math.log(i) / i)
            }
        },
        logNormal: function(e, t) {
            var n = arguments.length;
            n < 2 && (t = 1),
            n < 1 && (e = 0);
            var r = d3.random.normal();
            return function() {
                return Math.exp(e + t * r())
            }
        },
        irwinHall: function(e) {
            return function() {
                for (var t = 0,
                n = 0; n < e; n++) t += Math.random();
                return t / e
            }
        }
    },
    d3.sum = function(e, t) {
        var n = 0,
        r = e.length,
        i, s = -1;
        if (arguments.length === 1) while (++s < r) isNaN(i = +e[s]) || (n += i);
        else while (++s < r) isNaN(i = +t.call(e, e[s], s)) || (n += i);
        return n
    },
    d3.quantile = function(e, t) {
        var n = (e.length - 1) * t + 1,
        r = Math.floor(n),
        i = e[r - 1],
        s = n - r;
        return s ? i + s * (e[r] - i) : i
    },
    d3.transpose = function(e) {
        return d3.zip.apply(d3, e)
    },
    d3.zip = function() {
        if (! (i = arguments.length)) return [];
        for (var e = -1,
        t = d3.min(arguments, l), n = new Array(t); ++e < t;) for (var r = -1,
        i, s = n[e] = new Array(i); ++r < i;) s[r] = arguments[r][e];
        return n
    },
    d3.bisector = function(e) {
        return {
            left: function(t, n, r, i) {
                arguments.length < 3 && (r = 0),
                arguments.length < 4 && (i = t.length);
                while (r < i) {
                    var s = r + i >>> 1;
                    e.call(t, t[s], s) < n ? r = s + 1 : i = s
                }
                return r
            },
            right: function(t, n, r, i) {
                arguments.length < 3 && (r = 0),
                arguments.length < 4 && (i = t.length);
                while (r < i) {
                    var s = r + i >>> 1;
                    n < e.call(t, t[s], s) ? i = s: r = s + 1
                }
                return r
            }
        }
    };
    var Zi = d3.bisector(function(e) {
        return e
    });
    d3.bisectLeft = Zi.left,
    d3.bisect = d3.bisectRight = Zi.right,
    d3.first = function(e, t) {
        var n = 0,
        r = e.length,
        i = e[0],
        s;
        arguments.length === 1 && (t = d3.ascending);
        while (++n < r) t.call(e, i, s = e[n]) > 0 && (i = s);
        return i
    },
    d3.last = function(e, t) {
        var n = 0,
        r = e.length,
        i = e[0],
        s;
        arguments.length === 1 && (t = d3.ascending);
        while (++n < r) t.call(e, i, s = e[n]) <= 0 && (i = s);
        return i
    },
    d3.nest = function() {
        function e(t, s) {
            if (s >= i.length) return u ? u.call(n, t) : o ? t.sort(o) : t;
            var a = -1,
            f = t.length,
            l = i[s++],
            c,
            h,
            p = new r,
            d,
            v = {};
            while (++a < f)(d = p.get(c = l(h = t[a]))) ? d.push(h) : p.set(c, [h]);
            return p.forEach(function(t, n) {
                v[t] = e(n, s)
            }),
            v
        }
        function t(e, n) {
            if (n >= i.length) return e;
            var r = [],
            o = s[n++],
            u;
            for (u in e) r.push({
                key: u,
                values: t(e[u], n)
            });
            return o && r.sort(function(e, t) {
                return o(e.key, t.key)
            }),
            r
        }
        var n = {},
        i = [],
        s = [],
        o,
        u;
        return n.map = function(t) {
            return e(t, 0)
        },
        n.entries = function(n) {
            return t(e(n, 0), 0)
        },
        n.key = function(e) {
            return i.push(e),
            n
        },
        n.sortKeys = function(e) {
            return s[i.length - 1] = e,
            n
        },
        n.sortValues = function(e) {
            return o = e,
            n
        },
        n.rollup = function(e) {
            return u = e,
            n
        },
        n
    },
    d3.keys = function(e) {
        var t = [];
        for (var n in e) t.push(n);
        return t
    },
    d3.values = function(e) {
        var t = [];
        for (var n in e) t.push(e[n]);
        return t
    },
    d3.entries = function(e) {
        var t = [];
        for (var n in e) t.push({
            key: n,
            value: e[n]
        });
        return t
    },
    d3.permute = function(e, t) {
        var n = [],
        r = -1,
        i = t.length;
        while (++r < i) n[r] = e[t[r]];
        return n
    },
    d3.merge = function(e) {
        return Array.prototype.concat.apply([], e)
    },
    d3.split = function(e, t) {
        var n = [],
        r = [],
        i,
        s = -1,
        o = e.length;
        arguments.length < 2 && (t = c);
        while (++s < o) t.call(r, i = e[s], s) ? r = [] : (r.length || n.push(r), r.push(i));
        return n
    },
    d3.range = function(e, t, n) {
        arguments.length < 3 && (n = 1, arguments.length < 2 && (t = e, e = 0));
        if ((t - e) / n === Infinity) throw new Error("infinite range");
        var r = [],
        i = p(Math.abs(n)),
        s = -1,
        o;
        e *= i,
        t *= i,
        n *= i;
        if (n < 0) while ((o = e + n * ++s) > t) r.push(o / i);
        else while ((o = e + n * ++s) < t) r.push(o / i);
        return r
    },
    d3.requote = function(e) {
        return e.replace(es, "\\$&")
    };
    var es = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
    d3.round = function(e, t) {
        return t ? Math.round(e * (t = Math.pow(10, t))) / t: Math.round(e)
    },
    d3.xhr = function(e, t, n) {
        var r = new XMLHttpRequest;
        arguments.length < 3 ? (n = t, t = null) : t && r.overrideMimeType && r.overrideMimeType(t),
        r.open("GET", e, !0),
        t && r.setRequestHeader("Accept", t),
        r.onreadystatechange = function() {
            if (r.readyState === 4) {
                var e = r.status;
                n(!e && r.response || e >= 200 && e < 300 || e === 304 ? r: null)
            }
        },
        r.send(null)
    },
    d3.text = function(e, t, n) {
        function r(e) {
            n(e && e.responseText)
        }
        arguments.length < 3 && (n = t, t = null),
        d3.xhr(e, t, r)
    },
    d3.json = function(e, t) {
        d3.text(e, "application/json",
        function(e) {
            t(e ? JSON.parse(e) : null)
        })
    },
    d3.html = function(e, t) {
        d3.text(e, "text/html",
        function(e) {
            if (e != null) {
                var n = document.createRange();
                n.selectNode(document.body),
                e = n.createContextualFragment(e)
            }
            t(e)
        })
    },
    d3.xml = function(e, t, n) {
        function r(e) {
            n(e && e.responseXML)
        }
        arguments.length < 3 && (n = t, t = null),
        d3.xhr(e, t, r)
    };
    var ts = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    d3.ns = {
        prefix: ts,
        qualify: function(e) {
            var t = e.indexOf(":"),
            n = e;
            return t >= 0 && (n = e.substring(0, t), e = e.substring(t + 1)),
            ts.hasOwnProperty(n) ? {
                space: ts[n],
                local: e
            }: e
        }
    },
    d3.dispatch = function() {
        var e = new d,
        t = -1,
        n = arguments.length;
        while (++t < n) e[arguments[t]] = v(e);
        return e
    },
    d.prototype.on = function(e, t) {
        var n = e.indexOf("."),
        r = "";
        return n > 0 && (r = e.substring(n + 1), e = e.substring(0, n)),
        arguments.length < 2 ? this[e].on(r) : this[e].on(r, t)
    },
    d3.format = function(e) {
        var t = ns.exec(e),
        n = t[1] || " ",
        r = t[3] || "",
        i = t[5],
        s = +t[6],
        o = t[7],
        u = t[8],
        a = t[9],
        f = 1,
        l = "",
        c = !1;
        u && (u = +u.substring(1)),
        i && (n = "0", o && (s -= Math.floor((s - 1) / 4)));
        switch (a) {
        case "n":
            o = !0,
            a = "g";
            break;
        case "%":
            f = 100,
            l = "%",
            a = "f";
            break;
        case "p":
            f = 100,
            l = "%",
            a = "r";
            break;
        case "d":
            c = !0,
            u = 0;
            break;
        case "s":
            f = -1,
            a = "r"
        }
        return a == "r" && !u && (a = "g"),
        a = rs.get(a) || g,
        function(e) {
            if (c && e % 1) return "";
            var t = e < 0 && (e = -e) ? "-": r;
            if (f < 0) {
                var h = d3.formatPrefix(e, u);
                e = h.scale(e),
                l = h.symbol
            } else e *= f;
            e = a(e, u);
            if (i) {
                var p = e.length + t.length;
                p < s && (e = (new Array(s - p + 1)).join(n) + e),
                o && (e = y(e)),
                e = t + e
            } else {
                o && (e = y(e)),
                e = t + e;
                var p = e.length;
                p < s && (e = (new Array(s - p + 1)).join(n) + e)
            }
            return e + l
        }
    };
    var ns = /(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?([0-9]+)?(,)?(\.[0-9]+)?([a-zA-Z%])?/,
    rs = d3.map({
        g: function(e, t) {
            return e.toPrecision(t)
        },
        e: function(e, t) {
            return e.toExponential(t)
        },
        f: function(e, t) {
            return e.toFixed(t)
        },
        r: function(e, t) {
            return d3.round(e, t = m(e, t)).toFixed(Math.max(0, Math.min(20, t)))
        }
    }),
    is = ["y", "z", "a", "f", "p", "n", "μ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(b);
    d3.formatPrefix = function(e, t) {
        var n = 0;
        return e && (e < 0 && (e *= -1), t && (e = d3.round(e, m(e, t))), n = 1 + Math.floor(1e-12 + Math.log(e) / Math.LN10), n = Math.max( - 24, Math.min(24, Math.floor((n <= 0 ? n + 1 : n - 1) / 3) * 3))),
        is[8 + n / 3]
    };
    var ss = T(2),
    os = T(3),
    us = function() {
        return x
    },
    as = d3.map({
        linear: us,
        poly: T,
        quad: function() {
            return ss
        },
        cubic: function() {
            return os
        },
        sin: function() {
            return N
        },
        exp: function() {
            return C
        },
        circle: function() {
            return k
        },
        elastic: L,
        back: A,
        bounce: function() {
            return O
        }
    }),
    fs = d3.map({
        "in": x,
        out: E,
        "in-out": S,
        "out-in": function(e) {
            return S(E(e))
        }
    });
    d3.ease = function(e) {
        var t = e.indexOf("-"),
        n = t >= 0 ? e.substring(0, t) : e,
        r = t >= 0 ? e.substring(t + 1) : "in";
        return n = as.get(n) || us,
        r = fs.get(r) || x,
        w(r(n.apply(null, Array.prototype.slice.call(arguments, 1))))
    },
    d3.event = null,
    d3.transform = function(e) {
        var t = document.createElementNS(d3.ns.prefix.svg, "g");
        return (d3.transform = function(e) {
            t.setAttribute("transform", e);
            var n = t.transform.baseVal.consolidate();
            return new P(n ? n.matrix: cs)
        })(e)
    },
    P.prototype.toString = function() {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    };
    var ls = 180 / Math.PI,
    cs = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
    };
    d3.interpolate = function(e, t) {
        var n = d3.interpolators.length,
        r;
        while (--n >= 0 && !(r = d3.interpolators[n](e, t)));
        return r
    },
    d3.interpolateNumber = function(e, t) {
        return t -= e,
        function(n) {
            return e + t * n
        }
    },
    d3.interpolateRound = function(e, t) {
        return t -= e,
        function(n) {
            return Math.round(e + t * n)
        }
    },
    d3.interpolateString = function(e, t) {
        var n, r, i, s = 0,
        o = 0,
        u = [],
        a = [],
        f,
        l;
        hs.lastIndex = 0;
        for (r = 0; n = hs.exec(t); ++r) n.index && u.push(t.substring(s, o = n.index)),
        a.push({
            i: u.length,
            x: n[0]
        }),
        u.push(null),
        s = hs.lastIndex;
        s < t.length && u.push(t.substring(s));
        for (r = 0, f = a.length; (n = hs.exec(e)) && r < f; ++r) {
            l = a[r];
            if (l.x == n[0]) {
                if (l.i) if (u[l.i + 1] == null) {
                    u[l.i - 1] += l.x,
                    u.splice(l.i, 1);
                    for (i = r + 1; i < f; ++i) a[i].i--
                } else {
                    u[l.i - 1] += l.x + u[l.i + 1],
                    u.splice(l.i, 2);
                    for (i = r + 1; i < f; ++i) a[i].i -= 2
                } else if (u[l.i + 1] == null) u[l.i] = l.x;
                else {
                    u[l.i] = l.x + u[l.i + 1],
                    u.splice(l.i + 1, 1);
                    for (i = r + 1; i < f; ++i) a[i].i--
                }
                a.splice(r, 1),
                f--,
                r--
            } else l.x = d3.interpolateNumber(parseFloat(n[0]), parseFloat(l.x))
        }
        while (r < f) l = a.pop(),
        u[l.i + 1] == null ? u[l.i] = l.x: (u[l.i] = l.x + u[l.i + 1], u.splice(l.i + 1, 1)),
        f--;
        return u.length === 1 ? u[0] == null ? a[0].x: function() {
            return t
        }: function(e) {
            for (r = 0; r < f; ++r) u[(l = a[r]).i] = l.x(e);
            return u.join("")
        }
    },
    d3.interpolateTransform = function(e, t) {
        var n = [],
        r = [],
        i,
        s = d3.transform(e),
        o = d3.transform(t),
        u = s.translate,
        a = o.translate,
        f = s.rotate,
        l = o.rotate,
        c = s.skew,
        h = o.skew,
        p = s.scale,
        d = o.scale;
        return u[0] != a[0] || u[1] != a[1] ? (n.push("translate(", null, ",", null, ")"), r.push({
            i: 1,
            x: d3.interpolateNumber(u[0], a[0])
        },
        {
            i: 3,
            x: d3.interpolateNumber(u[1], a[1])
        })) : a[0] || a[1] ? n.push("translate(" + a + ")") : n.push(""),
        f != l ? (f - l > 180 ? l += 360 : l - f > 180 && (f += 360), r.push({
            i: n.push(n.pop() + "rotate(", null, ")") - 2,
            x: d3.interpolateNumber(f, l)
        })) : l && n.push(n.pop() + "rotate(" + l + ")"),
        c != h ? r.push({
            i: n.push(n.pop() + "skewX(", null, ")") - 2,
            x: d3.interpolateNumber(c, h)
        }) : h && n.push(n.pop() + "skewX(" + h + ")"),
        p[0] != d[0] || p[1] != d[1] ? (i = n.push(n.pop() + "scale(", null, ",", null, ")"), r.push({
            i: i - 4,
            x: d3.interpolateNumber(p[0], d[0])
        },
        {
            i: i - 2,
            x: d3.interpolateNumber(p[1], d[1])
        })) : (d[0] != 1 || d[1] != 1) && n.push(n.pop() + "scale(" + d + ")"),
        i = r.length,
        function(e) {
            var t = -1,
            s;
            while (++t < i) n[(s = r[t]).i] = s.x(e);
            return n.join("")
        }
    },
    d3.interpolateRgb = function(e, t) {
        e = d3.rgb(e),
        t = d3.rgb(t);
        var n = e.r,
        r = e.g,
        i = e.b,
        s = t.r - n,
        o = t.g - r,
        u = t.b - i;
        return function(e) {
            return "#" + W(Math.round(n + s * e)) + W(Math.round(r + o * e)) + W(Math.round(i + u * e))
        }
    },
    d3.interpolateHsl = function(e, t) {
        e = d3.hsl(e),
        t = d3.hsl(t);
        var n = e.h,
        r = e.s,
        i = e.l,
        s = t.h - n,
        o = t.s - r,
        u = t.l - i;
        return s > 180 ? s -= 360 : s < -180 && (s += 360),
        function(e) {
            return Y(n + s * e, r + o * e, i + u * e) + ""
        }
    },
    d3.interpolateLab = function(e, t) {
        e = d3.lab(e),
        t = d3.lab(t);
        var n = e.l,
        r = e.a,
        i = e.b,
        s = t.l - n,
        o = t.a - r,
        u = t.b - i;
        return function(e) {
            return it(n + s * e, r + o * e, i + u * e) + ""
        }
    },
    d3.interpolateHcl = function(e, t) {
        e = d3.hcl(e),
        t = d3.hcl(t);
        var n = e.h,
        r = e.c,
        i = e.l,
        s = t.h - n,
        o = t.c - r,
        u = t.l - i;
        return s > 180 ? s -= 360 : s < -180 && (s += 360),
        function(e) {
            return tt(n + s * e, r + o * e, i + u * e) + ""
        }
    },
    d3.interpolateArray = function(e, t) {
        var n = [],
        r = [],
        i = e.length,
        s = t.length,
        o = Math.min(e.length, t.length),
        u;
        for (u = 0; u < o; ++u) n.push(d3.interpolate(e[u], t[u]));
        for (; u < i; ++u) r[u] = e[u];
        for (; u < s; ++u) r[u] = t[u];
        return function(e) {
            for (u = 0; u < o; ++u) r[u] = n[u](e);
            return r
        }
    },
    d3.interpolateObject = function(e, t) {
        var n = {},
        r = {},
        i;
        for (i in e) i in t ? n[i] = F(i)(e[i], t[i]) : r[i] = e[i];
        for (i in t) i in e || (r[i] = t[i]);
        return function(e) {
            for (i in n) r[i] = n[i](e);
            return r
        }
    };
    var hs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
    d3.interpolators = [d3.interpolateObject,
    function(e, t) {
        return t instanceof Array && d3.interpolateArray(e, t)
    },
    function(e, t) {
        return (typeof e == "string" || typeof t == "string") && d3.interpolateString(e + "", t + "")
    },
    function(e, t) {
        return (typeof t == "string" ? ds.has(t) || /^(#|rgb\(|hsl\()/.test(t) : t instanceof R) && d3.interpolateRgb(e, t)
    },
    function(e, t) {
        return ! isNaN(e = +e) && !isNaN(t = +t) && d3.interpolateNumber(e, t)
    }],
    R.prototype.toString = function() {
        return this.rgb() + ""
    },
    d3.rgb = function(e, t, n) {
        return arguments.length === 1 ? e instanceof z ? U(e.r, e.g, e.b) : X("" + e, U, Y) : U(~~e, ~~t, ~~n)
    };
    var ps = z.prototype = new R;
    ps.brighter = function(e) {
        e = Math.pow(.7, arguments.length ? e: 1);
        var t = this.r,
        n = this.g,
        r = this.b,
        i = 30;
        return ! t && !n && !r ? U(i, i, i) : (t && t < i && (t = i), n && n < i && (n = i), r && r < i && (r = i), U(Math.min(255, Math.floor(t / e)), Math.min(255, Math.floor(n / e)), Math.min(255, Math.floor(r / e))))
    },
    ps.darker = function(e) {
        return e = Math.pow(.7, arguments.length ? e: 1),
        U(Math.floor(e * this.r), Math.floor(e * this.g), Math.floor(e * this.b))
    },
    ps.hsl = function() {
        return V(this.r, this.g, this.b)
    },
    ps.toString = function() {
        return "#" + W(this.r) + W(this.g) + W(this.b)
    };
    var ds = d3.map({
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    });
    ds.forEach(function(e, t) {
        ds.set(e, X(t, U, Y))
    }),
    d3.hsl = function(e, t, n) {
        return arguments.length === 1 ? e instanceof G ? Q(e.h, e.s, e.l) : X("" + e, V, Q) : Q( + e, +t, +n)
    };
    var vs = G.prototype = new R;
    vs.brighter = function(e) {
        return e = Math.pow(.7, arguments.length ? e: 1),
        Q(this.h, this.s, this.l / e)
    },
    vs.darker = function(e) {
        return e = Math.pow(.7, arguments.length ? e: 1),
        Q(this.h, this.s, e * this.l)
    },
    vs.rgb = function() {
        return Y(this.h, this.s, this.l)
    },
    d3.hcl = function(e, t, n) {
        return arguments.length === 1 ? e instanceof et ? Z(e.h, e.c, e.l) : e instanceof rt ? st(e.l, e.a, e.b) : st((e = $((e = d3.rgb(e)).r, e.g, e.b)).l, e.a, e.b) : Z( + e, +t, +n)
    };
    var ms = et.prototype = new R;
    ms.brighter = function(e) {
        return Z(this.h, this.c, Math.min(100, this.l + gs * (arguments.length ? e: 1)))
    },
    ms.darker = function(e) {
        return Z(this.h, this.c, Math.max(0, this.l - gs * (arguments.length ? e: 1)))
    },
    ms.rgb = function() {
        return tt(this.h, this.c, this.l).rgb()
    },
    d3.lab = function(e, t, n) {
        return arguments.length === 1 ? e instanceof rt ? nt(e.l, e.a, e.b) : e instanceof et ? tt(e.l, e.c, e.h) : $((e = d3.rgb(e)).r, e.g, e.b) : nt( + e, +t, +n)
    };
    var gs = 18,
    ys = .95047,
    bs = 1,
    ws = 1.08883,
    Es = rt.prototype = new R;
    Es.brighter = function(e) {
        return nt(Math.min(100, this.l + gs * (arguments.length ? e: 1)), this.a, this.b)
    },
    Es.darker = function(e) {
        return nt(Math.max(0, this.l - gs * (arguments.length ? e: 1)), this.a, this.b)
    },
    Es.rgb = function() {
        return it(this.l, this.a, this.b)
    };
    var Ss = function(e, t) {
        return t.querySelector(e)
    },
    xs = function(e, t) {
        return t.querySelectorAll(e)
    },
    Ts = document.documentElement,
    Ns = Ts.matchesSelector || Ts.webkitMatchesSelector || Ts.mozMatchesSelector || Ts.msMatchesSelector || Ts.oMatchesSelector,
    Cs = function(e, t) {
        return Ns.call(e, t)
    };
    typeof Sizzle == "function" && (Ss = function(e, t) {
        return Sizzle(e, t)[0] || null
    },
    xs = function(e, t) {
        return Sizzle.uniqueSort(Sizzle(e, t))
    },
    Cs = Sizzle.matchesSelector);
    var ks = [];
    d3.selection = function() {
        return Ls
    },
    d3.selection.prototype = ks,
    ks.select = function(e) {
        var t = [],
        n,
        r,
        i,
        s;
        typeof e != "function" && (e = lt(e));
        for (var o = -1,
        u = this.length; ++o < u;) {
            t.push(n = []),
            n.parentNode = (i = this[o]).parentNode;
            for (var a = -1,
            f = i.length; ++a < f;)(s = i[a]) ? (n.push(r = e.call(s, s.__data__, a)), r && "__data__" in s && (r.__data__ = s.__data__)) : n.push(null)
        }
        return ft(t)
    },
    ks.selectAll = function(e) {
        var t = [],
        n,
        r;
        typeof e != "function" && (e = ct(e));
        for (var i = -1,
        s = this.length; ++i < s;) for (var o = this[i], u = -1, a = o.length; ++u < a;) if (r = o[u]) t.push(n = Ji(e.call(r, r.__data__, u))),
        n.parentNode = r;
        return ft(t)
    },
    ks.attr = function(e, t) {
        if (arguments.length < 2) {
            if (typeof e == "string") {
                var n = this.node();
                return e = d3.ns.qualify(e),
                e.local ? n.getAttributeNS(e.space, e.local) : n.getAttribute(e)
            }
            for (t in e) this.each(ht(t, e[t]));
            return this
        }
        return this.each(ht(e, t))
    },
    ks.classed = function(e, t) {
        if (arguments.length < 2) {
            if (typeof e == "string") {
                var n = this.node(),
                r = (e = e.trim().split(/^|\s+/g)).length,
                i = -1;
                if (t = n.classList) {
                    while (++i < r) if (!t.contains(e[i])) return ! 1
                } else {
                    t = n.className,
                    t.baseVal != null && (t = t.baseVal);
                    while (++i < r) if (!pt(e[i]).test(t)) return ! 1
                }
                return ! 0
            }
            for (t in e) this.each(dt(t, e[t]));
            return this
        }
        return this.each(dt(e, t))
    },
    ks.style = function(e, t, n) {
        var r = arguments.length;
        if (r < 3) {
            if (typeof e != "string") {
                r < 2 && (t = "");
                for (n in e) this.each(mt(n, e[n], t));
                return this
            }
            if (r < 2) return window.getComputedStyle(this.node(), null).getPropertyValue(e);
            n = ""
        }
        return this.each(mt(e, t, n))
    },
    ks.property = function(e, t) {
        if (arguments.length < 2) {
            if (typeof e == "string") return this.node()[e];
            for (t in e) this.each(gt(t, e[t]));
            return this
        }
        return this.each(gt(e, t))
    },
    ks.text = function(e) {
        return arguments.length < 1 ? this.node().textContent: this.each(typeof e == "function" ?
        function() {
            var t = e.apply(this, arguments);
            this.textContent = t == null ? "": t
        }: e == null ?
        function() {
            this.textContent = ""
        }: function() {
            this.textContent = e
        })
    },
    ks.html = function(e) {
        return arguments.length < 1 ? this.node().innerHTML: this.each(typeof e == "function" ?
        function() {
            var t = e.apply(this, arguments);
            this.innerHTML = t == null ? "": t
        }: e == null ?
        function() {
            this.innerHTML = ""
        }: function() {
            this.innerHTML = e
        })
    },
    ks.append = function(e) {
        function t() {
            return this.appendChild(document.createElementNS(this.namespaceURI, e))
        }
        function n() {
            return this.appendChild(document.createElementNS(e.space, e.local))
        }
        return e = d3.ns.qualify(e),
        this.select(e.local ? n: t)
    },
    ks.insert = function(e, t) {
        function n() {
            return this.insertBefore(document.createElementNS(this.namespaceURI, e), Ss(t, this))
        }
        function r() {
            return this.insertBefore(document.createElementNS(e.space, e.local), Ss(t, this))
        }
        return e = d3.ns.qualify(e),
        this.select(e.local ? r: n)
    },
    ks.remove = function() {
        return this.each(function() {
            var e = this.parentNode;
            e && e.removeChild(this)
        })
    },
    ks.data = function(e, t) {
        function n(e, n) {
            var i, s = e.length,
            o = n.length,
            u = Math.min(s, o),
            c = Math.max(s, o),
            h = [],
            p = [],
            d = [],
            v,
            m;
            if (t) {
                var g = new r,
                y = [],
                b,
                w = n.length;
                for (i = -1; ++i < s;) b = t.call(v = e[i], v.__data__, i),
                g.has(b) ? d[w++] = v: g.set(b, v),
                y.push(b);
                for (i = -1; ++i < o;) b = t.call(n, m = n[i], i),
                g.has(b) ? (h[i] = v = g.get(b), v.__data__ = m, p[i] = d[i] = null) : (p[i] = yt(m), h[i] = d[i] = null),
                g.remove(b);
                for (i = -1; ++i < s;) g.has(y[i]) && (d[i] = e[i])
            } else {
                for (i = -1; ++i < u;) v = e[i],
                m = n[i],
                v ? (v.__data__ = m, h[i] = v, p[i] = d[i] = null) : (p[i] = yt(m), h[i] = d[i] = null);
                for (; i < o; ++i) p[i] = yt(n[i]),
                h[i] = d[i] = null;
                for (; i < c; ++i) d[i] = e[i],
                p[i] = h[i] = null
            }
            p.update = h,
            p.parentNode = h.parentNode = d.parentNode = e.parentNode,
            a.push(p),
            f.push(h),
            l.push(d)
        }
        var i = -1,
        s = this.length,
        o, u;
        if (!arguments.length) {
            e = new Array(s = (o = this[0]).length);
            while (++i < s) if (u = o[i]) e[i] = u.__data__;
            return e
        }
        var a = xt([]),
        f = ft([]),
        l = ft([]);
        if (typeof e == "function") while (++i < s) n(o = this[i], e.call(o, o.parentNode.__data__, i));
        else while (++i < s) n(o = this[i], e);
        return f.enter = function() {
            return a
        },
        f.exit = function() {
            return l
        },
        f
    },
    ks.datum = ks.map = function(e) {
        return arguments.length < 1 ? this.property("__data__") : this.property("__data__", e)
    },
    ks.filter = function(e) {
        var t = [],
        n,
        r,
        i;
        typeof e != "function" && (e = bt(e));
        for (var s = 0,
        o = this.length; s < o; s++) {
            t.push(n = []),
            n.parentNode = (r = this[s]).parentNode;
            for (var u = 0,
            a = r.length; u < a; u++)(i = r[u]) && e.call(i, i.__data__, u) && n.push(i)
        }
        return ft(t)
    },
    ks.order = function() {
        for (var e = -1,
        t = this.length; ++e < t;) for (var n = this[e], r = n.length - 1, i = n[r], s; --r >= 0;) if (s = n[r]) i && i !== s.nextSibling && i.parentNode.insertBefore(s, i),
        i = s;
        return this
    },
    ks.sort = function(e) {
        e = wt.apply(this, arguments);
        for (var t = -1,
        n = this.length; ++t < n;) this[t].sort(e);
        return this.order()
    },
    ks.on = function(e, t, n) {
        var r = arguments.length;
        if (r < 3) {
            if (typeof e != "string") {
                r < 2 && (t = !1);
                for (n in e) this.each(Et(n, e[n], t));
                return this
            }
            if (r < 2) return (r = this.node()["__on" + e]) && r._;
            n = !1
        }
        return this.each(Et(e, t, n))
    },
    ks.each = function(e) {
        return St(this,
        function(t, n, r) {
            e.call(t, t.__data__, n, r)
        })
    },
    ks.call = function(e) {
        return e.apply(this, (arguments[0] = this, arguments)),
        this
    },
    ks.empty = function() {
        return ! this.node()
    },
    ks.node = function(e) {
        for (var t = 0,
        n = this.length; t < n; t++) for (var r = this[t], i = 0, s = r.length; i < s; i++) {
            var o = r[i];
            if (o) return o
        }
        return null
    },
    ks.transition = function() {
        var e = [],
        t,
        n;
        for (var r = -1,
        i = this.length; ++r < i;) {
            e.push(t = []);
            for (var s = this[r], o = -1, u = s.length; ++o < u;) t.push((n = s[o]) ? {
                node: n,
                delay: Bs,
                duration: js
            }: null)
        }
        return Tt(e, _s || ++Ms, Date.now())
    };
    var Ls = ft([[document]]);
    Ls[0].parentNode = Ts,
    d3.select = function(e) {
        return typeof e == "string" ? Ls.select(e) : ft([[e]])
    },
    d3.selectAll = function(e) {
        return typeof e == "string" ? Ls.selectAll(e) : ft([Ji(e)])
    };
    var As = [];
    d3.selection.enter = xt,
    d3.selection.enter.prototype = As,
    As.append = ks.append,
    As.insert = ks.insert,
    As.empty = ks.empty,
    As.node = ks.node,
    As.select = function(e) {
        var t = [],
        n,
        r,
        i,
        s,
        o;
        for (var u = -1,
        a = this.length; ++u < a;) {
            i = (s = this[u]).update,
            t.push(n = []),
            n.parentNode = s.parentNode;
            for (var f = -1,
            l = s.length; ++f < l;)(o = s[f]) ? (n.push(i[f] = r = e.call(s.parentNode, o.__data__, f)), r.__data__ = o.__data__) : n.push(null)
        }
        return ft(t)
    };
    var Os = [],
    Ms = 0,
    _s = 0,
    Ds = 0,
    Ps = 250,
    Hs = d3.ease("cubic-in-out"),
    Bs = Ds,
    js = Ps,
    Fs = Hs;
    Os.call = ks.call,
    d3.transition = function(e) {
        return arguments.length ? _s ? e.transition() : e: Ls.transition()
    },
    d3.transition.prototype = Os,
    Os.select = function(e) {
        var t = [],
        n,
        r,
        i;
        typeof e != "function" && (e = lt(e));
        for (var s = -1,
        o = this.length; ++s < o;) {
            t.push(n = []);
            for (var u = this[s], a = -1, f = u.length; ++a < f;)(i = u[a]) && (r = e.call(i.node, i.node.__data__, a)) ? ("__data__" in i.node && (r.__data__ = i.node.__data__), n.push({
                node: r,
                delay: i.delay,
                duration: i.duration
            })) : n.push(null)
        }
        return Tt(t, this.id, this.time).ease(this.ease())
    },
    Os.selectAll = function(e) {
        var t = [],
        n,
        r,
        i;
        typeof e != "function" && (e = ct(e));
        for (var s = -1,
        o = this.length; ++s < o;) for (var u = this[s], a = -1, f = u.length; ++a < f;) if (i = u[a]) {
            r = e.call(i.node, i.node.__data__, a),
            t.push(n = []);
            for (var l = -1,
            c = r.length; ++l < c;) n.push({
                node: r[l],
                delay: i.delay,
                duration: i.duration
            })
        }
        return Tt(t, this.id, this.time).ease(this.ease())
    },
    Os.filter = function(e) {
        var t = [],
        n,
        r,
        i;
        typeof e != "function" && (e = bt(e));
        for (var s = 0,
        o = this.length; s < o; s++) {
            t.push(n = []);
            for (var r = this[s], u = 0, a = r.length; u < a; u++)(i = r[u]) && e.call(i.node, i.node.__data__, u) && n.push(i)
        }
        return Tt(t, this.id, this.time).ease(this.ease())
    },
    Os.attr = function(e, t) {
        if (arguments.length < 2) {
            for (t in e) this.attrTween(t, kt(e[t], t));
            return this
        }
        return this.attrTween(e, kt(t, e))
    },
    Os.attrTween = function(e, t) {
        function n(e, n) {
            var r = t.call(this, e, n, this.getAttribute(i));
            return r === Is ? (this.removeAttribute(i), null) : r &&
            function(e) {
                this.setAttribute(i, r(e))
            }
        }
        function r(e, n) {
            var r = t.call(this, e, n, this.getAttributeNS(i.space, i.local));
            return r === Is ? (this.removeAttributeNS(i.space, i.local), null) : r &&
            function(e) {
                this.setAttributeNS(i.space, i.local, r(e))
            }
        }
        var i = d3.ns.qualify(e);
        return this.tween("attr." + e, i.local ? r: n)
    },
    Os.style = function(e, t, n) {
        var r = arguments.length;
        if (r < 3) {
            if (typeof e != "string") {
                r < 2 && (t = "");
                for (n in e) this.styleTween(n, kt(e[n], n), t);
                return this
            }
            n = ""
        }
        return this.styleTween(e, kt(t, e), n)
    },
    Os.styleTween = function(e, t, n) {
        return arguments.length < 3 && (n = ""),
        this.tween("style." + e,
        function(r, i) {
            var s = t.call(this, r, i, window.getComputedStyle(this, null).getPropertyValue(e));
            return s === Is ? (this.style.removeProperty(e), null) : s &&
            function(t) {
                this.style.setProperty(e, s(t), n)
            }
        })
    },
    Os.text = function(e) {
        return this.tween("text",
        function(t, n) {
            this.textContent = typeof e == "function" ? e.call(this, t, n) : e
        })
    },
    Os.remove = function() {
        return this.each("end.transition",
        function() {
            var e; ! this.__transition__ && (e = this.parentNode) && e.removeChild(this)
        })
    },
    Os.delay = function(e) {
        return St(this, typeof e == "function" ?
        function(t, n, r) {
            t.delay = e.call(t = t.node, t.__data__, n, r) | 0
        }: (e |= 0,
        function(t) {
            t.delay = e
        }))
    },
    Os.duration = function(e) {
        return St(this, typeof e == "function" ?
        function(t, n, r) {
            t.duration = Math.max(1, e.call(t = t.node, t.__data__, n, r) | 0)
        }: (e = Math.max(1, e | 0),
        function(t) {
            t.duration = e
        }))
    },
    Os.transition = function() {
        return this.select(s)
    },
    d3.tween = function(e, t) {
        function n(n, r, i) {
            var s = e.call(this, n, r);
            return s == null ? i != "" && Is: i != s && t(i, s + "")
        }
        function r(n, r, i) {
            return i != e && t(i, e)
        }
        return typeof e == "function" ? n: e == null ? Ct: (e += "", r)
    };
    var Is = {},
    qs = 0,
    Rs = {},
    Us = null,
    zs, Ws;
    d3.timer = function(e, t, n) {
        if (arguments.length < 3) {
            if (arguments.length < 2) t = 0;
            else if (!isFinite(t)) return;
            n = Date.now()
        }
        var r = Rs[e.id];
        r && r.callback === e ? (r.then = n, r.delay = t) : Rs[e.id = ++qs] = Us = {
            callback: e,
            then: n,
            delay: t,
            next: Us
        },
        zs || (Ws = clearTimeout(Ws), zs = 1, Xs(Lt))
    },
    d3.timer.flush = function() {
        var e, t = Date.now(),
        n = Us;
        while (n) e = t - n.then,
        n.delay || (n.flush = n.callback(e)),
        n = n.next;
        At()
    };
    var Xs = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(e) {
        setTimeout(e, 17)
    };
    d3.mouse = function(e) {
        return Ot(e, _())
    };
    var Vs = /WebKit/.test(navigator.userAgent) ? -1 : 0;
    d3.touches = function(e, t) {
        return arguments.length < 2 && (t = _().touches),
        t ? Ji(t).map(function(t) {
            var n = Ot(e, t);
            return n.identifier = t.identifier,
            n
        }) : []
    },
    d3.scale = {},
    d3.scale.linear = function() {
        return Bt([0, 1], [0, 1], d3.interpolate, !1)
    },
    d3.scale.log = function() {
        return Wt(d3.scale.linear(), Xt)
    };
    var $s = d3.format(".0e");
    Xt.pow = function(e) {
        return Math.pow(10, e)
    },
    Vt.pow = function(e) {
        return - Math.pow(10, -e)
    },
    d3.scale.pow = function() {
        return $t(d3.scale.linear(), 1)
    },
    d3.scale.sqrt = function() {
        return d3.scale.pow().exponent(.5)
    },
    d3.scale.ordinal = function() {
        return Kt([], {
            t: "range",
            a: [[]]
        })
    },
    d3.scale.category10 = function() {
        return d3.scale.ordinal().range(Js)
    },
    d3.scale.category20 = function() {
        return d3.scale.ordinal().range(Ks)
    },
    d3.scale.category20b = function() {
        return d3.scale.ordinal().range(Qs)
    },
    d3.scale.category20c = function() {
        return d3.scale.ordinal().range(Gs)
    };
    var Js = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"],
    Ks = ["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"],
    Qs = ["#393b79", "#5254a3", "#6b6ecf", "#9c9ede", "#637939", "#8ca252", "#b5cf6b", "#cedb9c", "#8c6d31", "#bd9e39", "#e7ba52", "#e7cb94", "#843c39", "#ad494a", "#d6616b", "#e7969c", "#7b4173", "#a55194", "#ce6dbd", "#de9ed6"],
    Gs = ["#3182bd", "#6baed6", "#9ecae1", "#c6dbef", "#e6550d", "#fd8d3c", "#fdae6b", "#fdd0a2", "#31a354", "#74c476", "#a1d99b", "#c7e9c0", "#756bb1", "#9e9ac8", "#bcbddc", "#dadaeb", "#636363", "#969696", "#bdbdbd", "#d9d9d9"];
    d3.scale.quantile = function() {
        return Qt([], [])
    },
    d3.scale.quantize = function() {
        return Gt(0, 1, [0, 1])
    },
    d3.scale.threshold = function() {
        return Yt([.5], [0, 1])
    },
    d3.scale.identity = function() {
        return Zt([0, 1])
    },
    d3.svg = {},
    d3.svg.arc = function() {
        function e() {
            var e = t.apply(this, arguments),
            s = n.apply(this, arguments),
            o = r.apply(this, arguments) + Ys,
            u = i.apply(this, arguments) + Ys,
            a = (u < o && (a = o, o = u, u = a), u - o),
            f = a < Math.PI ? "0": "1",
            l = Math.cos(o),
            c = Math.sin(o),
            h = Math.cos(u),
            p = Math.sin(u);
            return a >= Zs ? e ? "M0," + s + "A" + s + "," + s + " 0 1,1 0," + -s + "A" + s + "," + s + " 0 1,1 0," + s + "M0," + e + "A" + e + "," + e + " 0 1,0 0," + -e + "A" + e + "," + e + " 0 1,0 0," + e + "Z": "M0," + s + "A" + s + "," + s + " 0 1,1 0," + -s + "A" + s + "," + s + " 0 1,1 0," + s + "Z": e ? "M" + s * l + "," + s * c + "A" + s + "," + s + " 0 " + f + ",1 " + s * h + "," + s * p + "L" + e * h + "," + e * p + "A" + e + "," + e + " 0 " + f + ",0 " + e * l + "," + e * c + "Z": "M" + s * l + "," + s * c + "A" + s + "," + s + " 0 " + f + ",1 " + s * h + "," + s * p + "L0,0" + "Z"
        }
        var t = en,
        n = tn,
        r = nn,
        i = rn;
        return e.innerRadius = function(n) {
            return arguments.length ? (t = u(n), e) : t
        },
        e.outerRadius = function(t) {
            return arguments.length ? (n = u(t), e) : n
        },
        e.startAngle = function(t) {
            return arguments.length ? (r = u(t), e) : r
        },
        e.endAngle = function(t) {
            return arguments.length ? (i = u(t), e) : i
        },
        e.centroid = function() {
            var e = (t.apply(this, arguments) + n.apply(this, arguments)) / 2,
            s = (r.apply(this, arguments) + i.apply(this, arguments)) / 2 + Ys;
            return [Math.cos(s) * e, Math.sin(s) * e]
        },
        e
    };
    var Ys = -Math.PI / 2,
    Zs = 2 * Math.PI - 1e-6;
    d3.svg.line = function() {
        return sn(i)
    };
    var eo = d3.map({
        linear: an,
        "linear-closed": fn,
        "step-before": ln,
        "step-after": cn,
        basis: gn,
        "basis-open": yn,
        "basis-closed": bn,
        bundle: wn,
        cardinal: dn,
        "cardinal-open": hn,
        "cardinal-closed": pn,
        monotone: Cn
    });
    eo.forEach(function(e, t) {
        t.key = e,
        t.closed = /-closed$/.test(e)
    });
    var to = [0, 2 / 3, 1 / 3, 0],
    no = [0, 1 / 3, 2 / 3, 0],
    ro = [0, 1 / 6, 2 / 3, 1 / 6];
    d3.svg.line.radial = function() {
        var e = sn(kn);
        return e.radius = e.x,
        delete e.x,
        e.angle = e.y,
        delete e.y,
        e
    },
    ln.reverse = cn,
    cn.reverse = ln,
    d3.svg.area = function() {
        return Ln(i)
    },
    d3.svg.area.radial = function() {
        var e = Ln(kn);
        return e.radius = e.x,
        delete e.x,
        e.innerRadius = e.x0,
        delete e.x0,
        e.outerRadius = e.x1,
        delete e.x1,
        e.angle = e.y,
        delete e.y,
        e.startAngle = e.y0,
        delete e.y0,
        e.endAngle = e.y1,
        delete e.y1,
        e
    },
    d3.svg.chord = function() {
        function e(e, u) {
            var a = t(this, s, e, u),
            f = t(this, o, e, u);
            return "M" + a.p0 + r(a.r, a.p1, a.a1 - a.a0) + (n(a, f) ? i(a.r, a.p1, a.r, a.p0) : i(a.r, a.p1, f.r, f.p0) + r(f.r, f.p1, f.a1 - f.a0) + i(f.r, f.p1, a.r, a.p0)) + "Z"
        }
        function t(e, t, n, r) {
            var i = t.call(e, n, r),
            s = a.call(e, i, r),
            o = f.call(e, i, r) + Ys,
            u = l.call(e, i, r) + Ys;
            return {
                r: s,
                a0: o,
                a1: u,
                p0: [s * Math.cos(o), s * Math.sin(o)],
                p1: [s * Math.cos(u), s * Math.sin(u)]
            }
        }
        function n(e, t) {
            return e.a0 == t.a0 && e.a1 == t.a1
        }
        function r(e, t, n) {
            return "A" + e + "," + e + " 0 " + +(n > Math.PI) + ",1 " + t
        }
        function i(e, t, n, r) {
            return "Q 0,0 " + r
        }
        var s = An,
        o = On,
        a = Mn,
        f = nn,
        l = rn;
        return e.radius = function(t) {
            return arguments.length ? (a = u(t), e) : a
        },
        e.source = function(t) {
            return arguments.length ? (s = u(t), e) : s
        },
        e.target = function(t) {
            return arguments.length ? (o = u(t), e) : o
        },
        e.startAngle = function(t) {
            return arguments.length ? (f = u(t), e) : f
        },
        e.endAngle = function(t) {
            return arguments.length ? (l = u(t), e) : l
        },
        e
    },
    d3.svg.diagonal = function() {
        function e(e, i) {
            var s = t.call(this, e, i),
            o = n.call(this, e, i),
            u = (s.y + o.y) / 2,
            a = [s, {
                x: s.x,
                y: u
            },
            {
                x: o.x,
                y: u
            },
            o];
            return a = a.map(r),
            "M" + a[0] + "C" + a[1] + " " + a[2] + " " + a[3]
        }
        var t = An,
        n = On,
        r = Pn;
        return e.source = function(n) {
            return arguments.length ? (t = u(n), e) : t
        },
        e.target = function(t) {
            return arguments.length ? (n = u(t), e) : n
        },
        e.projection = function(t) {
            return arguments.length ? (r = t, e) : r
        },
        e
    },
    d3.svg.diagonal.radial = function() {
        var e = d3.svg.diagonal(),
        t = Pn,
        n = e.projection;
        return e.projection = function(e) {
            return arguments.length ? n(Hn(t = e)) : t
        },
        e
    },
    d3.svg.mouse = d3.mouse,
    d3.svg.touches = d3.touches,
    d3.svg.symbol = function() {
        function e(e, r) {
            return (io.get(t.call(this, e, r)) || Fn)(n.call(this, e, r))
        }
        var t = jn,
        n = Bn;
        return e.type = function(n) {
            return arguments.length ? (t = u(n), e) : t
        },
        e.size = function(t) {
            return arguments.length ? (n = u(t), e) : n
        },
        e
    };
    var io = d3.map({
        circle: Fn,
        cross: function(e) {
            var t = Math.sqrt(e / 5) / 2;
            return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"
        },
        diamond: function(e) {
            var t = Math.sqrt(e / (2 * oo)),
            n = t * oo;
            return "M0," + -t + "L" + n + ",0" + " 0," + t + " " + -n + ",0" + "Z"
        },
        square: function(e) {
            var t = Math.sqrt(e) / 2;
            return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"
        },
        "triangle-down": function(e) {
            var t = Math.sqrt(e / so),
            n = t * so / 2;
            return "M0," + n + "L" + t + "," + -n + " " + -t + "," + -n + "Z"
        },
        "triangle-up": function(e) {
            var t = Math.sqrt(e / so),
            n = t * so / 2;
            return "M0," + -n + "L" + t + "," + n + " " + -t + "," + n + "Z"
        }
    });
    d3.svg.symbolTypes = io.keys();
    var so = Math.sqrt(3),
    oo = Math.tan(30 * Math.PI / 180);
    d3.svg.axis = function() {
        function e(e) {
            e.each(function() {
                var e = d3.select(this),
                c = a == null ? t.ticks ? t.ticks.apply(t, u) : t.domain() : a,
                h = f == null ? t.tickFormat ? t.tickFormat.apply(t, u) : String: f,
                p = Rn(t, c, l),
                d = e.selectAll(".minor").data(p, String),
                v = d.enter().insert("line", "g").attr("class", "tick minor").style("opacity", 1e-6),
                m = d3.transition(d.exit()).style("opacity", 1e-6).remove(),
                g = d3.transition(d).style("opacity", 1),
                y = e.selectAll("g").data(c, String),
                b = y.enter().insert("g", "path").style("opacity", 1e-6),
                w = d3.transition(y.exit()).style("opacity", 1e-6).remove(),
                E = d3.transition(y).style("opacity", 1),
                S,
                x = Dt(t),
                T = e.selectAll(".domain").data([0]),
                N = T.enter().append("path").attr("class", "domain"),
                C = d3.transition(T),
                k = t.copy(),
                L = this.__chart__ || k;
                this.__chart__ = k,
                b.append("line").attr("class", "tick"),
                b.append("text");
                var A = b.select("line"),
                O = E.select("line"),
                M = y.select("text").text(h),
                _ = b.select("text"),
                D = E.select("text");
                switch (n) {
                case "bottom":
                    S = In,
                    v.attr("y2", i),
                    g.attr("x2", 0).attr("y2", i),
                    A.attr("y2", r),
                    _.attr("y", Math.max(r, 0) + o),
                    O.attr("x2", 0).attr("y2", r),
                    D.attr("x", 0).attr("y", Math.max(r, 0) + o),
                    M.attr("dy", ".71em").attr("text-anchor", "middle"),
                    C.attr("d", "M" + x[0] + "," + s + "V0H" + x[1] + "V" + s);
                    break;
                case "top":
                    S = In,
                    v.attr("y2", -i),
                    g.attr("x2", 0).attr("y2", -i),
                    A.attr("y2", -r),
                    _.attr("y", -(Math.max(r, 0) + o)),
                    O.attr("x2", 0).attr("y2", -r),
                    D.attr("x", 0).attr("y", -(Math.max(r, 0) + o)),
                    M.attr("dy", "0em").attr("text-anchor", "middle"),
                    C.attr("d", "M" + x[0] + "," + -s + "V0H" + x[1] + "V" + -s);
                    break;
                case "left":
                    S = qn,
                    v.attr("x2", -i),
                    g.attr("x2", -i).attr("y2", 0),
                    A.attr("x2", -r),
                    _.attr("x", -(Math.max(r, 0) + o)),
                    O.attr("x2", -r).attr("y2", 0),
                    D.attr("x", -(Math.max(r, 0) + o)).attr("y", 0),
                    M.attr("dy", ".32em").attr("text-anchor", "end"),
                    C.attr("d", "M" + -s + "," + x[0] + "H0V" + x[1] + "H" + -s);
                    break;
                case "right":
                    S = qn,
                    v.attr("x2", i),
                    g.attr("x2", i).attr("y2", 0),
                    A.attr("x2", r),
                    _.attr("x", Math.max(r, 0) + o),
                    O.attr("x2", r).attr("y2", 0),
                    D.attr("x", Math.max(r, 0) + o).attr("y", 0),
                    M.attr("dy", ".32em").attr("text-anchor", "start"),
                    C.attr("d", "M" + s + "," + x[0] + "H0V" + x[1] + "H" + s)
                }
                if (t.ticks) b.call(S, L),
                E.call(S, k),
                w.call(S, k),
                v.call(S, L),
                g.call(S, k),
                m.call(S, k);
                else {
                    var P = k.rangeBand() / 2,
                    H = function(e) {
                        return k(e) + P
                    };
                    b.call(S, H),
                    E.call(S, H)
                }
            })
        }
        var t = d3.scale.linear(),
        n = "bottom",
        r = 6,
        i = 6,
        s = 6,
        o = 3,
        u = [10],
        a = null,
        f,
        l = 0;
        return e.scale = function(n) {
            return arguments.length ? (t = n, e) : t
        },
        e.orient = function(t) {
            return arguments.length ? (n = t, e) : n
        },
        e.ticks = function() {
            return arguments.length ? (u = arguments, e) : u
        },
        e.tickValues = function(t) {
            return arguments.length ? (a = t, e) : a
        },
        e.tickFormat = function(t) {
            return arguments.length ? (f = t, e) : f
        },
        e.tickSize = function(t, n, o) {
            if (!arguments.length) return r;
            var u = arguments.length - 1;
            return r = +t,
            i = u > 1 ? +n: r,
            s = u > 0 ? +arguments[u] : r,
            e
        },
        e.tickPadding = function(t) {
            return arguments.length ? (o = +t, e) : o
        },
        e.tickSubdivide = function(t) {
            return arguments.length ? (l = +t, e) : l
        },
        e
    },
    d3.svg.brush = function() {
        function e(s) {
            s.each(function() {
                var s = d3.select(this),
                f = s.selectAll(".background").data([0]),
                l = s.selectAll(".extent").data([0]),
                c = s.selectAll(".resize").data(a, String),
                h;
                s.style("pointer-events", "all").on("mousedown.brush", i).on("touchstart.brush", i),
                f.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"),
                l.enter().append("rect").attr("class", "extent").style("cursor", "move"),
                c.enter().append("g").attr("class",
                function(e) {
                    return "resize " + e
                }).style("cursor",
                function(e) {
                    return uo[e]
                }).append("rect").attr("x",
                function(e) {
                    return /[ew]$/.test(e) ? -3 : null
                }).attr("y",
                function(e) {
                    return /^[ns]/.test(e) ? -3 : null
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden"),
                c.style("display", e.empty() ? "none": null),
                c.exit().remove(),
                o && (h = Dt(o), f.attr("x", h[0]).attr("width", h[1] - h[0]), n(s)),
                u && (h = Dt(u), f.attr("y", h[0]).attr("height", h[1] - h[0]), r(s)),
                t(s)
            })
        }
        function t(e) {
            e.selectAll(".resize").attr("transform",
            function(e) {
                return "translate(" + f[ + /e$/.test(e)][0] + "," + f[ + /^s/.test(e)][1] + ")"
            })
        }
        function n(e) {
            e.select(".extent").attr("x", f[0][0]),
            e.selectAll(".extent,.n>rect,.s>rect").attr("width", f[1][0] - f[0][0])
        }
        function r(e) {
            e.select(".extent").attr("y", f[0][1]),
            e.selectAll(".extent,.e>rect,.w>rect").attr("height", f[1][1] - f[0][1])
        }
        function i() {
            function i() {
                var e = d3.event.changedTouches;
                return e ? d3.touches(v, e)[0] : d3.mouse(v)
            }
            function a() {
                d3.event.keyCode == 32 && (S || (x = null, T[0] -= f[1][0], T[1] -= f[1][1], S = 2), M())
            }
            function c() {
                d3.event.keyCode == 32 && S == 2 && (T[0] += f[1][0], T[1] += f[1][1], S = 0, M())
            }
            function h() {
                var e = i(),
                s = !1;
                N && (e[0] += N[0], e[1] += N[1]),
                S || (d3.event.altKey ? (x || (x = [(f[0][0] + f[1][0]) / 2, (f[0][1] + f[1][1]) / 2]), T[0] = f[ + (e[0] < x[0])][0], T[1] = f[ + (e[1] < x[1])][1]) : x = null),
                w && p(e, o, 0) && (n(y), s = !0),
                E && p(e, u, 1) && (r(y), s = !0),
                s && (t(y), g({
                    type: "brush",
                    mode: S ? "move": "resize"
                }))
            }
            function p(e, t, n) {
                var r = Dt(t),
                i = r[0],
                s = r[1],
                o = T[n],
                u = f[1][n] - f[0][n],
                a,
                c;
                S && (i -= o, s -= u + o),
                a = Math.max(i, Math.min(s, e[n])),
                S ? c = (a += o) + u: (x && (o = Math.max(i, Math.min(s, 2 * x[n] - a))), o < a ? (c = a, a = o) : c = o);
                if (f[0][n] !== a || f[1][n] !== c) return l = null,
                f[0][n] = a,
                f[1][n] = c,
                !0
            }
            function d() {
                h(),
                y.style("pointer-events", "all").selectAll(".resize").style("display", e.empty() ? "none": null),
                d3.select("body").style("cursor", null),
                C.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null),
                g({
                    type: "brushend"
                }),
                M()
            }
            var v = this,
            m = d3.select(d3.event.target),
            g = s.of(v, arguments),
            y = d3.select(v),
            b = m.datum(),
            w = !/^(n|s)$/.test(b) && o,
            E = !/^(e|w)$/.test(b) && u,
            S = m.classed("extent"),
            x,
            T = i(),
            N,
            C = d3.select(window).on("mousemove.brush", h).on("mouseup.brush", d).on("touchmove.brush", h).on("touchend.brush", d).on("keydown.brush", a).on("keyup.brush", c);
            if (S) T[0] = f[0][0] - T[0],
            T[1] = f[0][1] - T[1];
            else if (b) {
                var k = +/w$/.test(b),
                L = +/^n/.test(b);
                N = [f[1 - k][0] - T[0], f[1 - L][1] - T[1]],
                T[0] = f[k][0],
                T[1] = f[L][1]
            } else d3.event.altKey && (x = T.slice());
            y.style("pointer-events", "none").selectAll(".resize").style("display", null),
            d3.select("body").style("cursor", m.style("cursor")),
            g({
                type: "brushstart"
            }),
            h(),
            M()
        }
        var s = D(e, "brushstart", "brush", "brushend"),
        o = null,
        u = null,
        a = ao[0],
        f = [[0, 0], [0, 0]],
        l;
        return e.x = function(t) {
            return arguments.length ? (o = t, a = ao[!o << 1 | !u], e) : o
        },
        e.y = function(t) {
            return arguments.length ? (u = t, a = ao[!o << 1 | !u], e) : u
        },
        e.extent = function(t) {
            var n, r, i, s, a;
            return arguments.length ? (l = [[0, 0], [0, 0]], o && (n = t[0], r = t[1], u && (n = n[0], r = r[0]), l[0][0] = n, l[1][0] = r, o.invert && (n = o(n), r = o(r)), r < n && (a = n, n = r, r = a), f[0][0] = n | 0, f[1][0] = r | 0), u && (i = t[0], s = t[1], o && (i = i[1], s = s[1]), l[0][1] = i, l[1][1] = s, u.invert && (i = u(i), s = u(s)), s < i && (a = i, i = s, s = a), f[0][1] = i | 0, f[1][1] = s | 0), e) : (t = l || f, o && (n = t[0][0], r = t[1][0], l || (n = f[0][0], r = f[1][0], o.invert && (n = o.invert(n), r = o.invert(r)), r < n && (a = n, n = r, r = a))), u && (i = t[0][1], s = t[1][1], l || (i = f[0][1], s = f[1][1], u.invert && (i = u.invert(i), s = u.invert(s)), s < i && (a = i, i = s, s = a))), o && u ? [[n, i], [r, s]] : o ? [n, r] : u && [i, s])
        },
        e.clear = function() {
            return l = null,
            f[0][0] = f[0][1] = f[1][0] = f[1][1] = 0,
            e
        },
        e.empty = function() {
            return o && f[0][0] === f[1][0] || u && f[0][1] === f[1][1]
        },
        d3.rebind(e, s, "on")
    };
    var uo = {
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize"
    },
    ao = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []];
    d3.behavior = {},
    d3.behavior.drag = function() {
        function e() {
            this.on("mousedown.drag", t).on("touchstart.drag", t)
        }
        function t() {
            function e() {
                var e = o.parentNode;
                return f ? d3.touches(e).filter(function(e) {
                    return e.identifier === f
                })[0] : d3.mouse(e)
            }
            function t() {
                if (!o.parentNode) return i();
                var t = e(),
                n = t[0] - c[0],
                r = t[1] - c[1];
                h |= n | r,
                c = t,
                M(),
                u({
                    type: "drag",
                    x: t[0] + l[0],
                    y: t[1] + l[1],
                    dx: n,
                    dy: r
                })
            }
            function i() {
                u({
                    type: "dragend"
                }),
                h && (M(), d3.event.target === a && p.on("click.drag", s, !0)),
                p.on(f ? "touchmove.drag-" + f: "mousemove.drag", null).on(f ? "touchend.drag-" + f: "mouseup.drag", null)
            }
            function s() {
                M(),
                p.on("click.drag", null)
            }
            var o = this,
            u = n.of(o, arguments),
            a = d3.event.target,
            f = d3.event.touches && d3.event.changedTouches[0].identifier,
            l,
            c = e(),
            h = 0,
            p = d3.select(window).on(f ? "touchmove.drag-" + f: "mousemove.drag", t).on(f ? "touchend.drag-" + f: "mouseup.drag", i, !0);
            r ? (l = r.apply(o, arguments), l = [l.x - c[0], l.y - c[1]]) : l = [0, 0],
            f || M(),
            u({
                type: "dragstart"
            })
        }
        var n = D(e, "drag", "dragstart", "dragend"),
        r = null;
        return e.origin = function(t) {
            return arguments.length ? (r = t, e) : r
        },
        d3.rebind(e, n, "on")
    },
    d3.behavior.zoom = function() {
        function e() {
            this.on("mousedown.zoom", o).on("mousewheel.zoom", u).on("mousemove.zoom", a).on("DOMMouseScroll.zoom", u).on("dblclick.zoom", f).on("touchstart.zoom", l).on("touchmove.zoom", c).on("touchend.zoom", l)
        }
        function t(e) {
            return [(e[0] - h[0]) / d, (e[1] - h[1]) / d]
        }
        function n(e) {
            return [e[0] * d + h[0], e[1] * d + h[1]]
        }
        function r(e) {
            d = Math.max(m[0], Math.min(m[1], e))
        }
        function i(e, t) {
            t = n(t),
            h[0] += e[0] - t[0],
            h[1] += e[1] - t[1]
        }
        function s(e) {
            b && b.domain(y.range().map(function(e) {
                return (e - h[0]) / d
            }).map(y.invert)),
            E && E.domain(w.range().map(function(e) {
                return (e - h[1]) / d
            }).map(w.invert)),
            d3.event.preventDefault(),
            e({
                type: "zoom",
                scale: d,
                translate: h
            })
        }
        function o() {
            function e() {
                f = 1,
                i(d3.mouse(o), c),
                s(u)
            }
            function n() {
                f && M(),
                l.on("mousemove.zoom", null).on("mouseup.zoom", null),
                f && d3.event.target === a && l.on("click.zoom", r, !0)
            }
            function r() {
                M(),
                l.on("click.zoom", null)
            }
            var o = this,
            u = g.of(o, arguments),
            a = d3.event.target,
            f = 0,
            l = d3.select(window).on("mousemove.zoom", e).on("mouseup.zoom", n),
            c = t(d3.mouse(o));
            window.focus(),
            M()
        }
        function u() {
            p || (p = t(d3.mouse(this))),
            r(Math.pow(2, Un() * .002) * d),
            i(d3.mouse(this), p),
            s(g.of(this, arguments))
        }
        function a() {
            p = null
        }
        function f() {
            var e = d3.mouse(this),
            n = t(e);
            r(d3.event.shiftKey ? d / 2 : d * 2),
            i(e, n),
            s(g.of(this, arguments))
        }
        function l() {
            var e = d3.touches(this),
            n = Date.now();
            v = d,
            p = {},
            e.forEach(function(e) {
                p[e.identifier] = t(e)
            }),
            M();
            if (e.length === 1) {
                if (n - S < 500) {
                    var o = e[0],
                    u = t(e[0]);
                    r(d * 2),
                    i(o, u),
                    s(g.of(this, arguments))
                }
                S = n
            }
        }
        function c() {
            var e = d3.touches(this),
            t = e[0],
            n = p[t.identifier];
            if (o = e[1]) {
                var o, u = p[o.identifier];
                t = [(t[0] + o[0]) / 2, (t[1] + o[1]) / 2],
                n = [(n[0] + u[0]) / 2, (n[1] + u[1]) / 2],
                r(d3.event.scale * v)
            }
            i(t, n),
            S = null,
            s(g.of(this, arguments))
        }
        var h = [0, 0],
        p,
        d = 1,
        v,
        m = lo,
        g = D(e, "zoom"),
        y,
        b,
        w,
        E,
        S;
        return e.translate = function(t) {
            return arguments.length ? (h = t.map(Number), e) : h
        },
        e.scale = function(t) {
            return arguments.length ? (d = +t, e) : d
        },
        e.scaleExtent = function(t) {
            return arguments.length ? (m = t == null ? lo: t.map(Number), e) : m
        },
        e.x = function(t) {
            return arguments.length ? (b = t, y = t.copy(), e) : b
        },
        e.y = function(t) {
            return arguments.length ? (E = t, w = t.copy(), e) : E
        },
        d3.rebind(e, g, "on")
    };
    var fo, lo = [0, Infinity];
    d3.layout = {},
    d3.layout.bundle = function() {
        return function(e) {
            var t = [],
            n = -1,
            r = e.length;
            while (++n < r) t.push(zn(e[n]));
            return t
        }
    },
    d3.layout.chord = function() {
        function e() {
            var e = {},
            n = [],
            c = d3.range(o),
            h = [],
            p,
            d,
            v,
            m,
            g;
            r = [],
            i = [],
            p = 0,
            m = -1;
            while (++m < o) {
                d = 0,
                g = -1;
                while (++g < o) d += s[m][g];
                n.push(d),
                h.push(d3.range(o)),
                p += d
            }
            a && c.sort(function(e, t) {
                return a(n[e], n[t])
            }),
            f && h.forEach(function(e, t) {
                e.sort(function(e, n) {
                    return f(s[t][e], s[t][n])
                })
            }),
            p = (2 * Math.PI - u * o) / p,
            d = 0,
            m = -1;
            while (++m < o) {
                v = d,
                g = -1;
                while (++g < o) {
                    var y = c[m],
                    b = h[y][g],
                    w = s[y][b],
                    E = d,
                    S = d += w * p;
                    e[y + "-" + b] = {
                        index: y,
                        subindex: b,
                        startAngle: E,
                        endAngle: S,
                        value: w
                    }
                }
                i[y] = {
                    index: y,
                    startAngle: v,
                    endAngle: d,
                    value: (d - v) / p
                },
                d += u
            }
            m = -1;
            while (++m < o) {
                g = m - 1;
                while (++g < o) {
                    var x = e[m + "-" + g],
                    T = e[g + "-" + m]; (x.value || T.value) && r.push(x.value < T.value ? {
                        source: T,
                        target: x
                    }: {
                        source: x,
                        target: T
                    })
                }
            }
            l && t()
        }
        function t() {
            r.sort(function(e, t) {
                return l((e.source.value + e.target.value) / 2, (t.source.value + t.target.value) / 2)
            })
        }
        var n = {},
        r, i, s, o, u = 0,
        a, f, l;
        return n.matrix = function(e) {
            return arguments.length ? (o = (s = e) && s.length, r = i = null, n) : s
        },
        n.padding = function(e) {
            return arguments.length ? (u = e, r = i = null, n) : u
        },
        n.sortGroups = function(e) {
            return arguments.length ? (a = e, r = i = null, n) : a
        },
        n.sortSubgroups = function(e) {
            return arguments.length ? (f = e, r = null, n) : f
        },
        n.sortChords = function(e) {
            return arguments.length ? (l = e, r && t(), n) : l
        },
        n.chords = function() {
            return r || e(),
            r
        },
        n.groups = function() {
            return i || e(),
            i
        },
        n
    },
    d3.layout.force = function() {
        function e(e) {
            return function(t, n, r, i, s) {
                if (t.point !== e) {
                    var o = t.cx - e.x,
                    u = t.cy - e.y,
                    a = 1 / Math.sqrt(o * o + u * u);
                    if ((i - n) * a < d) {
                        var f = t.charge * a * a;
                        return e.px -= o * f,
                        e.py -= u * f,
                        !0
                    }
                    if (t.point && isFinite(a)) {
                        var f = t.pointCharge * a * a;
                        e.px -= o * f,
                        e.py -= u * f
                    }
                }
                return ! t.charge
            }
        }
        function t(e) {
            e.px = d3.event.x,
            e.py = d3.event.y,
            n.resume()
        }
        var n = {},
        r = d3.dispatch("start", "tick", "end"),
        s = [1, 1],
        o,
        a,
        f = .9,
        l = Gn,
        c = Yn,
        h = -30,
        p = .1,
        d = .8,
        v,
        m = [],
        g = [],
        y,
        b,
        w;
        return n.tick = function() {
            if ((a *= .99) < .005) return r.end({
                type: "end",
                alpha: a = 0
            }),
            !0;
            var t = m.length,
            n = g.length,
            i, o, u, l, c, d, v, E, S;
            for (o = 0; o < n; ++o) {
                u = g[o],
                l = u.source,
                c = u.target,
                E = c.x - l.x,
                S = c.y - l.y;
                if (d = E * E + S * S) d = a * b[o] * ((d = Math.sqrt(d)) - y[o]) / d,
                E *= d,
                S *= d,
                c.x -= E * (v = l.weight / (c.weight + l.weight)),
                c.y -= S * v,
                l.x += E * (v = 1 - v),
                l.y += S * v
            }
            if (v = a * p) {
                E = s[0] / 2,
                S = s[1] / 2,
                o = -1;
                if (v) while (++o < t) u = m[o],
                u.x += (E - u.x) * v,
                u.y += (S - u.y) * v
            }
            if (h) {
                Qn(i = d3.geom.quadtree(m), a, w),
                o = -1;
                while (++o < t)(u = m[o]).fixed || i.visit(e(u))
            }
            o = -1;
            while (++o < t) u = m[o],
            u.fixed ? (u.x = u.px, u.y = u.py) : (u.x -= (u.px - (u.px = u.x)) * f, u.y -= (u.py - (u.py = u.y)) * f);
            r.tick({
                type: "tick",
                alpha: a
            })
        },
        n.nodes = function(e) {
            return arguments.length ? (m = e, n) : m
        },
        n.links = function(e) {
            return arguments.length ? (g = e, n) : g
        },
        n.size = function(e) {
            return arguments.length ? (s = e, n) : s
        },
        n.linkDistance = function(e) {
            return arguments.length ? (l = u(e), n) : l
        },
        n.distance = n.linkDistance,
        n.linkStrength = function(e) {
            return arguments.length ? (c = u(e), n) : c
        },
        n.friction = function(e) {
            return arguments.length ? (f = e, n) : f
        },
        n.charge = function(e) {
            return arguments.length ? (h = typeof e == "function" ? e: +e, n) : h
        },
        n.gravity = function(e) {
            return arguments.length ? (p = e, n) : p
        },
        n.theta = function(e) {
            return arguments.length ? (d = e, n) : d
        },
        n.alpha = function(e) {
            return arguments.length ? (a ? e > 0 ? a = e: a = 0 : e > 0 && (r.start({
                type: "start",
                alpha: a = e
            }), d3.timer(n.tick)), n) : a
        },
        n.start = function() {
            function e(e, n) {
                var i = t(r),
                s = -1,
                o = i.length,
                u;
                while (++s < o) if (!isNaN(u = i[s][e])) return u;
                return Math.random() * n
            }
            function t() {
                if (!p) {
                    p = [];
                    for (i = 0; i < o; ++i) p[i] = [];
                    for (i = 0; i < u; ++i) {
                        var e = g[i];
                        p[e.source.index].push(e.target),
                        p[e.target.index].push(e.source)
                    }
                }
                return p[r]
            }
            var r, i, o = m.length,
            u = g.length,
            a = s[0],
            f = s[1],
            p,
            d;
            for (r = 0; r < o; ++r)(d = m[r]).index = r,
            d.weight = 0;
            y = [],
            b = [];
            for (r = 0; r < u; ++r) d = g[r],
            typeof d.source == "number" && (d.source = m[d.source]),
            typeof d.target == "number" && (d.target = m[d.target]),
            y[r] = l.call(this, d, r),
            b[r] = c.call(this, d, r),
            ++d.source.weight,
            ++d.target.weight;
            for (r = 0; r < o; ++r) d = m[r],
            isNaN(d.x) && (d.x = e("x", a)),
            isNaN(d.y) && (d.y = e("y", f)),
            isNaN(d.px) && (d.px = d.x),
            isNaN(d.py) && (d.py = d.y);
            w = [];
            if (typeof h == "function") for (r = 0; r < o; ++r) w[r] = +h.call(this, m[r], r);
            else for (r = 0; r < o; ++r) w[r] = h;
            return n.resume()
        },
        n.resume = function() {
            return n.alpha(.1)
        },
        n.stop = function() {
            return n.alpha(0)
        },
        n.drag = function() {
            o || (o = d3.behavior.drag().origin(i).on("dragstart", Vn).on("drag", t).on("dragend", $n)),
            this.on("mouseover.force", Jn).on("mouseout.force", Kn).call(o)
        },
        d3.rebind(n, r, "on")
    },
    d3.layout.partition = function() {
        function e(t, n, r, i) {
            var s = t.children;
            t.x = n,
            t.y = t.depth * i,
            t.dx = r,
            t.dy = i;
            if (s && (u = s.length)) {
                var o = -1,
                u, a, f;
                r = t.value ? r / t.value: 0;
                while (++o < u) e(a = s[o], n, f = a.value * r, i),
                n += f
            }
        }
        function t(e) {
            var n = e.children,
            r = 0;
            if (n && (s = n.length)) {
                var i = -1,
                s;
                while (++i < s) r = Math.max(r, t(n[i]))
            }
            return 1 + r
        }
        function n(n, s) {
            var o = r.call(this, n, s);
            return e(o[0], 0, i[0], i[1] / t(o[0])),
            o
        }
        var r = d3.layout.hierarchy(),
        i = [1, 1];
        return n.size = function(e) {
            return arguments.length ? (i = e, n) : i
        },
        lr(n, r)
    },
    d3.layout.pie = function() {
        function e(s, o) {
            var u = s.map(function(n, r) {
                return + t.call(e, n, r)
            }),
            a = +(typeof r == "function" ? r.apply(this, arguments) : r),
            f = ((typeof i == "function" ? i.apply(this, arguments) : i) - r) / d3.sum(u),
            l = d3.range(s.length);
            n != null && l.sort(n === co ?
            function(e, t) {
                return u[t] - u[e]
            }: function(e, t) {
                return n(s[e], s[t])
            });
            var c = [];
            return l.forEach(function(e) {
                var t;
                c[e] = {
                    data: s[e],
                    value: t = u[e],
                    startAngle: a,
                    endAngle: a += t * f
                }
            }),
            c
        }
        var t = Number,
        n = co,
        r = 0,
        i = 2 * Math.PI;
        return e.value = function(n) {
            return arguments.length ? (t = n, e) : t
        },
        e.sort = function(t) {
            return arguments.length ? (n = t, e) : n
        },
        e.startAngle = function(t) {
            return arguments.length ? (r = t, e) : r
        },
        e.endAngle = function(t) {
            return arguments.length ? (i = t, e) : i
        },
        e
    };
    var co = {};
    d3.layout.stack = function() {
        function e(i, a) {
            var f = i.map(function(n, r) {
                return t.call(e, n, r)
            }),
            l = f.map(function(t, n) {
                return t.map(function(t, n) {
                    return [o.call(e, t, n), u.call(e, t, n)]
                })
            }),
            c = n.call(e, l, a);
            f = d3.permute(f, c),
            l = d3.permute(l, c);
            var h = r.call(e, l, a),
            p = f.length,
            d = f[0].length,
            v,
            m,
            g;
            for (m = 0; m < d; ++m) {
                s.call(e, f[0][m], g = h[m], l[0][m][1]);
                for (v = 1; v < p; ++v) s.call(e, f[v][m], g += l[v - 1][m][1], l[v][m][1])
            }
            return i
        }
        var t = i,
        n = nr,
        r = rr,
        s = tr,
        o = Zn,
        u = er;
        return e.values = function(n) {
            return arguments.length ? (t = n, e) : t
        },
        e.order = function(t) {
            return arguments.length ? (n = typeof t == "function" ? t: ho.get(t) || nr, e) : n
        },
        e.offset = function(t) {
            return arguments.length ? (r = typeof t == "function" ? t: po.get(t) || rr, e) : r
        },
        e.x = function(t) {
            return arguments.length ? (o = t, e) : o
        },
        e.y = function(t) {
            return arguments.length ? (u = t, e) : u
        },
        e.out = function(t) {
            return arguments.length ? (s = t, e) : s
        },
        e
    };
    var ho = d3.map({
        "inside-out": function(e) {
            var t = e.length,
            n, r, i = e.map(ir),
            s = e.map(sr),
            o = d3.range(t).sort(function(e, t) {
                return i[e] - i[t]
            }),
            u = 0,
            a = 0,
            f = [],
            l = [];
            for (n = 0; n < t; ++n) r = o[n],
            u < a ? (u += s[r], f.push(r)) : (a += s[r], l.push(r));
            return l.reverse().concat(f)
        },
        reverse: function(e) {
            return d3.range(e.length).reverse()
        },
        "default": nr
    }),
    po = d3.map({
        silhouette: function(e) {
            var t = e.length,
            n = e[0].length,
            r = [],
            i = 0,
            s,
            o,
            u,
            a = [];
            for (o = 0; o < n; ++o) {
                for (s = 0, u = 0; s < t; s++) u += e[s][o][1];
                u > i && (i = u),
                r.push(u)
            }
            for (o = 0; o < n; ++o) a[o] = (i - r[o]) / 2;
            return a
        },
        wiggle: function(e) {
            var t = e.length,
            n = e[0],
            r = n.length,
            i = 0,
            s,
            o,
            u,
            a,
            f,
            l,
            c,
            h,
            p,
            d = [];
            d[0] = h = p = 0;
            for (o = 1; o < r; ++o) {
                for (s = 0, a = 0; s < t; ++s) a += e[s][o][1];
                for (s = 0, f = 0, c = n[o][0] - n[o - 1][0]; s < t; ++s) {
                    for (u = 0, l = (e[s][o][1] - e[s][o - 1][1]) / (2 * c); u < s; ++u) l += (e[u][o][1] - e[u][o - 1][1]) / c;
                    f += l * e[s][o][1]
                }
                d[o] = h -= a ? f / a * c: 0,
                h < p && (p = h)
            }
            for (o = 0; o < r; ++o) d[o] -= p;
            return d
        },
        expand: function(e) {
            var t = e.length,
            n = e[0].length,
            r = 1 / t,
            i,
            s,
            o,
            u = [];
            for (s = 0; s < n; ++s) {
                for (i = 0, o = 0; i < t; i++) o += e[i][s][1];
                if (o) for (i = 0; i < t; i++) e[i][s][1] /= o;
                else for (i = 0; i < t; i++) e[i][s][1] = r
            }
            for (s = 0; s < n; ++s) u[s] = 0;
            return u
        },
        zero: rr
    });
    d3.layout.histogram = function() {
        function e(e, s) {
            var o = [],
            u = e.map(n, this),
            a = r.call(this, u, s),
            f = i.call(this, a, u, s),
            l,
            s = -1,
            c = u.length,
            h = f.length - 1,
            p = t ? 1 : 1 / c,
            d;
            while (++s < h) l = o[s] = [],
            l.dx = f[s + 1] - (l.x = f[s]),
            l.y = 0;
            if (h > 0) {
                s = -1;
                while (++s < c) d = u[s],
                d >= a[0] && d <= a[1] && (l = o[d3.bisect(f, d, 1, h) - 1], l.y += p, l.push(e[s]))
            }
            return o
        }
        var t = !0,
        n = Number,
        r = fr,
        i = ur;
        return e.value = function(t) {
            return arguments.length ? (n = t, e) : n
        },
        e.range = function(t) {
            return arguments.length ? (r = u(t), e) : r
        },
        e.bins = function(t) {
            return arguments.length ? (i = typeof t == "number" ?
            function(e) {
                return ar(e, t)
            }: u(t), e) : i
        },
        e.frequency = function(n) {
            return arguments.length ? (t = !!n, e) : t
        },
        e
    },
    d3.layout.hierarchy = function() {
        function e(t, o, u) {
            var a = i.call(n, t, o),
            f = vo ? t: {
                data: t
            };
            f.depth = o,
            u.push(f);
            if (a && (c = a.length)) {
                var l = -1,
                c, h = f.children = [],
                p = 0,
                d = o + 1,
                v;
                while (++l < c) v = e(a[l], d, u),
                v.parent = f,
                h.push(v),
                p += v.value;
                r && h.sort(r),
                s && (f.value = p)
            } else s && (f.value = +s.call(n, t, o) || 0);
            return f
        }
        function t(e, r) {
            var i = e.children,
            o = 0;
            if (i && (a = i.length)) {
                var u = -1,
                a, f = r + 1;
                while (++u < a) o += t(i[u], f)
            } else s && (o = +s.call(n, vo ? e: e.data, r) || 0);
            return s && (e.value = o),
            o
        }
        function n(t) {
            var n = [];
            return e(t, 0, n),
            n
        }
        var r = pr,
        i = cr,
        s = hr;
        return n.sort = function(e) {
            return arguments.length ? (r = e, n) : r
        },
        n.children = function(e) {
            return arguments.length ? (i = e, n) : i
        },
        n.value = function(e) {
            return arguments.length ? (s = e, n) : s
        },
        n.revalue = function(e) {
            return t(e, 0),
            e
        },
        n
    };
    var vo = !1;
    d3.layout.pack = function() {
        function e(e, i) {
            var s = t.call(this, e, i),
            o = s[0];
            o.x = 0,
            o.y = 0,
            Hr(o,
            function(e) {
                e.r = Math.sqrt(e.value)
            }),
            Hr(o, br);
            var u = r[0],
            a = r[1],
            f = Math.max(2 * o.r / u, 2 * o.r / a);
            if (n > 0) {
                var l = n * f / 2;
                Hr(o,
                function(e) {
                    e.r += l
                }),
                Hr(o, br),
                Hr(o,
                function(e) {
                    e.r -= l
                }),
                f = Math.max(2 * o.r / u, 2 * o.r / a)
            }
            return Sr(o, u / 2, a / 2, 1 / f),
            s
        }
        var t = d3.layout.hierarchy().sort(vr),
        n = 0,
        r = [1, 1];
        return e.size = function(t) {
            return arguments.length ? (r = t, e) : r
        },
        e.padding = function(t) {
            return arguments.length ? (n = +t, e) : n
        },
        lr(e, t)
    },
    d3.layout.cluster = function() {
        function e(e, i) {
            var s = t.call(this, e, i),
            o = s[0],
            u,
            a = 0,
            f,
            l;
            Hr(o,
            function(e) {
                var t = e.children;
                t && t.length ? (e.x = Nr(t), e.y = Tr(t)) : (e.x = u ? a += n(e, u) : 0, e.y = 0, u = e)
            });
            var c = Cr(o),
            h = kr(o),
            p = c.x - n(c, h) / 2,
            d = h.x + n(h, c) / 2;
            return Hr(o,
            function(e) {
                e.x = (e.x - p) / (d - p) * r[0],
                e.y = (1 - (o.y ? e.y / o.y: 1)) * r[1]
            }),
            s
        }
        var t = d3.layout.hierarchy().sort(null).value(null),
        n = Lr,
        r = [1, 1];
        return e.separation = function(t) {
            return arguments.length ? (n = t, e) : n
        },
        e.size = function(t) {
            return arguments.length ? (r = t, e) : r
        },
        lr(e, t)
    },
    d3.layout.tree = function() {
        function e(e, i) {
            function s(e, t) {
                var r = e.children,
                i = e._tree;
                if (r && (o = r.length)) {
                    var o, a = r[0],
                    f,
                    l = a,
                    c,
                    h = -1;
                    while (++h < o) c = r[h],
                    s(c, f),
                    l = u(c, f, l),
                    f = c;
                    Br(e);
                    var p = .5 * (a._tree.prelim + c._tree.prelim);
                    t ? (i.prelim = t._tree.prelim + n(e, t), i.mod = i.prelim - p) : i.prelim = p
                } else t && (i.prelim = t._tree.prelim + n(e, t))
            }
            function o(e, t) {
                e.x = e._tree.prelim + t;
                var n = e.children;
                if (n && (i = n.length)) {
                    var r = -1,
                    i;
                    t += e._tree.mod;
                    while (++r < i) o(n[r], t)
                }
            }
            function u(e, t, r) {
                if (t) {
                    var i = e,
                    s = e,
                    o = t,
                    u = e.parent.children[0],
                    a = i._tree.mod,
                    f = s._tree.mod,
                    l = o._tree.mod,
                    c = u._tree.mod,
                    h;
                    while (o = Or(o), i = Ar(i), o && i) u = Ar(u),
                    s = Or(s),
                    s._tree.ancestor = e,
                    h = o._tree.prelim + l - i._tree.prelim - a + n(o, i),
                    h > 0 && (jr(Fr(o, e, r), e, h), a += h, f += h),
                    l += o._tree.mod,
                    a += i._tree.mod,
                    c += u._tree.mod,
                    f += s._tree.mod;
                    o && !Or(s) && (s._tree.thread = o, s._tree.mod += l - f),
                    i && !Ar(u) && (u._tree.thread = i, u._tree.mod += a - c, r = e)
                }
                return r
            }
            var a = t.call(this, e, i),
            f = a[0];
            Hr(f,
            function(e, t) {
                e._tree = {
                    ancestor: e,
                    prelim: 0,
                    mod: 0,
                    change: 0,
                    shift: 0,
                    number: t ? t._tree.number + 1 : 0
                }
            }),
            s(f),
            o(f, -f._tree.prelim);
            var l = Mr(f, Dr),
            c = Mr(f, _r),
            h = Mr(f, Pr),
            p = l.x - n(l, c) / 2,
            d = c.x + n(c, l) / 2,
            v = h.depth || 1;
            return Hr(f,
            function(e) {
                e.x = (e.x - p) / (d - p) * r[0],
                e.y = e.depth / v * r[1],
                delete e._tree
            }),
            a
        }
        var t = d3.layout.hierarchy().sort(null).value(null),
        n = Lr,
        r = [1, 1];
        return e.separation = function(t) {
            return arguments.length ? (n = t, e) : n
        },
        e.size = function(t) {
            return arguments.length ? (r = t, e) : r
        },
        lr(e, t)
    },
    d3.layout.treemap = function() {
        function e(e, t) {
            var n = -1,
            r = e.length,
            i, s;
            while (++n < r) s = (i = e[n]).value * (t < 0 ? 0 : t),
            i.area = isNaN(s) || s <= 0 ? 0 : s
        }
        function t(n) {
            var s = n.children;
            if (s && s.length) {
                var o = l(n),
                u = [],
                a = s.slice(),
                f,
                c = Infinity,
                h,
                p = Math.min(o.dx, o.dy),
                d;
                e(a, o.dx * o.dy / n.value),
                u.area = 0;
                while ((d = a.length) > 0) u.push(f = a[d - 1]),
                u.area += f.area,
                (h = r(u, p)) <= c ? (a.pop(), c = h) : (u.area -= u.pop().area, i(u, p, o, !1), p = Math.min(o.dx, o.dy), u.length = u.area = 0, c = Infinity);
                u.length && (i(u, p, o, !0), u.length = u.area = 0),
                s.forEach(t)
            }
        }
        function n(t) {
            var r = t.children;
            if (r && r.length) {
                var s = l(t),
                o = r.slice(),
                u,
                a = [];
                e(o, s.dx * s.dy / t.value),
                a.area = 0;
                while (u = o.pop()) a.push(u),
                a.area += u.area,
                u.z != null && (i(a, u.z ? s.dx: s.dy, s, !o.length), a.length = a.area = 0);
                r.forEach(n)
            }
        }
        function r(e, t) {
            var n = e.area,
            r, i = 0,
            s = Infinity,
            o = -1,
            u = e.length;
            while (++o < u) {
                if (! (r = e[o].area)) continue;
                r < s && (s = r),
                r > i && (i = r)
            }
            return n *= n,
            t *= t,
            n ? Math.max(t * i * p / n, n / (t * s * p)) : Infinity
        }
        function i(e, t, n, r) {
            var i = -1,
            s = e.length,
            o = n.x,
            a = n.y,
            f = t ? u(e.area / t) : 0,
            l;
            if (t == n.dx) {
                if (r || f > n.dy) f = n.dy;
                while (++i < s) l = e[i],
                l.x = o,
                l.y = a,
                l.dy = f,
                o += l.dx = Math.min(n.x + n.dx - o, f ? u(l.area / f) : 0);
                l.z = !0,
                l.dx += n.x + n.dx - o,
                n.y += f,
                n.dy -= f
            } else {
                if (r || f > n.dx) f = n.dx;
                while (++i < s) l = e[i],
                l.x = o,
                l.y = a,
                l.dx = f,
                a += l.dy = Math.min(n.y + n.dy - a, f ? u(l.area / f) : 0);
                l.z = !1,
                l.dy += n.y + n.dy - a,
                n.x += f,
                n.dx -= f
            }
        }
        function s(r) {
            var i = h || o(r),
            s = i[0];
            return s.x = 0,
            s.y = 0,
            s.dx = a[0],
            s.dy = a[1],
            h && o.revalue(s),
            e([s], s.dx * s.dy / s.value),
            (h ? n: t)(s),
            c && (h = i),
            i
        }
        var o = d3.layout.hierarchy(),
        u = Math.round,
        a = [1, 1],
        f = null,
        l = Ir,
        c = !1,
        h,
        p = .5 * (1 + Math.sqrt(5));
        return s.size = function(e) {
            return arguments.length ? (a = e, s) : a
        },
        s.padding = function(e) {
            function t(t) {
                var n = e.call(s, t, t.depth);
                return n == null ? Ir(t) : qr(t, typeof n == "number" ? [n, n, n, n] : n)
            }
            function n(t) {
                return qr(t, e)
            }
            if (!arguments.length) return f;
            var r;
            return l = (f = e) == null ? Ir: (r = typeof e) === "function" ? t: r === "number" ? (e = [e, e, e, e], n) : n,
            s
        },
        s.round = function(e) {
            return arguments.length ? (u = e ? Math.round: Number, s) : u != Number
        },
        s.sticky = function(e) {
            return arguments.length ? (c = e, h = null, s) : c
        },
        s.ratio = function(e) {
            return arguments.length ? (p = e, s) : p
        },
        lr(s, o)
    },
    d3.csv = Rr(",", "text/csv"),
    d3.tsv = Rr("   ", "text/tab-separated-values"),
    d3.geo = {};
    var mo = Math.PI / 180;
    d3.geo.azimuthal = function() {
        function e(e) {
            var n = e[0] * mo - s,
            o = e[1] * mo,
            f = Math.cos(n),
            l = Math.sin(n),
            c = Math.cos(o),
            h = Math.sin(o),
            p = t !== "orthographic" ? a * h + u * c * f: null,
            d,
            v = t === "stereographic" ? 1 / (1 + p) : t === "gnomonic" ? 1 / p: t === "equidistant" ? (d = Math.acos(p), d ? d / Math.sin(d) : 0) : t === "equalarea" ? Math.sqrt(2 / (1 + p)) : 1,
            m = v * c * l,
            g = v * (a * c * f - u * h);
            return [r * m + i[0], r * g + i[1]]
        }
        var t = "orthographic",
        n, r = 200,
        i = [480, 250],
        s,
        o,
        u,
        a;
        return e.invert = function(e) {
            var n = (e[0] - i[0]) / r,
            o = (e[1] - i[1]) / r,
            f = Math.sqrt(n * n + o * o),
            l = t === "stereographic" ? 2 * Math.atan(f) : t === "gnomonic" ? Math.atan(f) : t === "equidistant" ? f: t === "equalarea" ? 2 * Math.asin(.5 * f) : Math.asin(f),
            c = Math.sin(l),
            h = Math.cos(l);
            return [(s + Math.atan2(n * c, f * u * h + o * a * c)) / mo, Math.asin(h * a - (f ? o * c * u / f: 0)) / mo]
        },
        e.mode = function(n) {
            return arguments.length ? (t = n + "", e) : t
        },
        e.origin = function(t) {
            return arguments.length ? (n = t, s = n[0] * mo, o = n[1] * mo, u = Math.cos(o), a = Math.sin(o), e) : n
        },
        e.scale = function(t) {
            return arguments.length ? (r = +t, e) : r
        },
        e.translate = function(t) {
            return arguments.length ? (i = [ + t[0], +t[1]], e) : i
        },
        e.origin([0, 0])
    },
    d3.geo.albers = function() {
        function e(e) {
            var t = u * (mo * e[0] - o),
            n = Math.sqrt(a - 2 * u * Math.sin(mo * e[1])) / u;
            return [i * n * Math.sin(t) + s[0], i * (n * Math.cos(t) - f) + s[1]]
        }
        function t() {
            var t = mo * r[0],
            i = mo * r[1],
            s = mo * n[1],
            l = Math.sin(t),
            c = Math.cos(t);
            return o = mo * n[0],
            u = .5 * (l + Math.sin(i)),
            a = c * c + 2 * u * l,
            f = Math.sqrt(a - 2 * u * Math.sin(s)) / u,
            e
        }
        var n = [ - 98, 38],
        r = [29.5, 45.5],
        i = 1e3,
        s = [480, 250],
        o,
        u,
        a,
        f;
        return e.invert = function(e) {
            var t = (e[0] - s[0]) / i,
            n = (e[1] - s[1]) / i,
            r = f + n,
            l = Math.atan2(t, r),
            c = Math.sqrt(t * t + r * r);
            return [(o + l / u) / mo, Math.asin((a - c * c * u * u) / (2 * u)) / mo]
        },
        e.origin = function(e) {
            return arguments.length ? (n = [ + e[0], +e[1]], t()) : n
        },
        e.parallels = function(e) {
            return arguments.length ? (r = [ + e[0], +e[1]], t()) : r
        },
        e.scale = function(t) {
            return arguments.length ? (i = +t, e) : i
        },
        e.translate = function(t) {
            return arguments.length ? (s = [ + t[0], +t[1]], e) : s
        },
        t()
    },
    d3.geo.albersUsa = function() {
        function e(e) {
            var s = e[0],
            o = e[1];
            return (o > 50 ? n: s < -140 ? r: o < 21 ? i: t)(e)
        }
        var t = d3.geo.albers(),
        n = d3.geo.albers().origin([ - 160, 60]).parallels([55, 65]),
        r = d3.geo.albers().origin([ - 160, 20]).parallels([8, 18]),
        i = d3.geo.albers().origin([ - 60, 10]).parallels([8, 18]);
        return e.scale = function(s) {
            return arguments.length ? (t.scale(s), n.scale(s * .6), r.scale(s), i.scale(s * 1.5), e.translate(t.translate())) : t.scale()
        },
        e.translate = function(s) {
            if (!arguments.length) return t.translate();
            var o = t.scale() / 1e3,
            u = s[0],
            a = s[1];
            return t.translate(s),
            n.translate([u - 400 * o, a + 170 * o]),
            r.translate([u - 190 * o, a + 200 * o]),
            i.translate([u + 580 * o, a + 430 * o]),
            e
        },
        e.scale(t.scale())
    },
    d3.geo.bonne = function() {
        function e(e) {
            var u = e[0] * mo - r,
            a = e[1] * mo - i;
            if (s) {
                var f = o + s - a,
                l = u * Math.cos(a) / f;
                u = f * Math.sin(l),
                a = f * Math.cos(l) - o
            } else u *= Math.cos(a),
            a *= -1;
            return [t * u + n[0], t * a + n[1]]
        }
        var t = 200,
        n = [480, 250],
        r,
        i,
        s,
        o;
        return e.invert = function(e) {
            var i = (e[0] - n[0]) / t,
            u = (e[1] - n[1]) / t;
            if (s) {
                var a = o + u,
                f = Math.sqrt(i * i + a * a);
                u = o + s - f,
                i = r + f * Math.atan2(i, a) / Math.cos(u)
            } else u *= -1,
            i /= Math.cos(u);
            return [i / mo, u / mo]
        },
        e.parallel = function(t) {
            return arguments.length ? (o = 1 / Math.tan(s = t * mo), e) : s / mo
        },
        e.origin = function(t) {
            return arguments.length ? (r = t[0] * mo, i = t[1] * mo, e) : [r / mo, i / mo]
        },
        e.scale = function(n) {
            return arguments.length ? (t = +n, e) : t
        },
        e.translate = function(t) {
            return arguments.length ? (n = [ + t[0], +t[1]], e) : n
        },
        e.origin([0, 0]).parallel(45)
    },
    d3.geo.equirectangular = function() {
        function e(e) {
            var r = e[0] / 360,
            i = -e[1] / 360;
            return [t * r + n[0], t * i + n[1]]
        }
        var t = 500,
        n = [480, 250];
        return e.invert = function(e) {
            var r = (e[0] - n[0]) / t,
            i = (e[1] - n[1]) / t;
            return [360 * r, -360 * i]
        },
        e.scale = function(n) {
            return arguments.length ? (t = +n, e) : t
        },
        e.translate = function(t) {
            return arguments.length ? (n = [ + t[0], +t[1]], e) : n
        },
        e
    },
    d3.geo.mercator = function() {
        function e(e) {
            var r = e[0] / 360,
            i = -(Math.log(Math.tan(Math.PI / 4 + e[1] * mo / 2)) / mo) / 360;
            return [t * r + n[0], t * Math.max( - 0.5, Math.min(.5, i)) + n[1]]
        }
        var t = 500,
        n = [480, 250];
        return e.invert = function(e) {
            var r = (e[0] - n[0]) / t,
            i = (e[1] - n[1]) / t;
            return [360 * r, 2 * Math.atan(Math.exp( - 360 * i * mo)) / mo - 90]
        },
        e.scale = function(n) {
            return arguments.length ? (t = +n, e) : t
        },
        e.translate = function(t) {
            return arguments.length ? (n = [ + t[0], +t[1]], e) : n
        },
        e
    },
    d3.geo.path = function() {
        function e(e, t) {
            typeof s == "function" && (o = zr(s.apply(this, arguments))),
            f(e);
            var n = a.length ? a.join("") : null;
            return a = [],
            n
        }
        function t(e) {
            return u(e).join(",")
        }
        function n(e) {
            var t = i(e[0]),
            n = 0,
            r = e.length;
            while (++n < r) t -= i(e[n]);
            return t
        }
        function r(e) {
            var t = d3.geom.polygon(e[0].map(u)),
            n = t.area(),
            r = t.centroid(n < 0 ? (n *= -1, 1) : -1),
            i = r[0],
            s = r[1],
            o = n,
            a = 0,
            f = e.length;
            while (++a < f) t = d3.geom.polygon(e[a].map(u)),
            n = t.area(),
            r = t.centroid(n < 0 ? (n *= -1, 1) : -1),
            i -= r[0],
            s -= r[1],
            o -= n;
            return [i, s, 6 * o]
        }
        function i(e) {
            return Math.abs(d3.geom.polygon(e.map(u)).area())
        }
        var s = 4.5,
        o = zr(s),
        u = d3.geo.albersUsa(),
        a = [],
        f = Ur({
            FeatureCollection: function(e) {
                var t = e.features,
                n = -1,
                r = t.length;
                while (++n < r) a.push(f(t[n].geometry))
            },
            Feature: function(e) {
                f(e.geometry)
            },
            Point: function(e) {
                a.push("M", t(e.coordinates), o)
            },
            MultiPoint: function(e) {
                var n = e.coordinates,
                r = -1,
                i = n.length;
                while (++r < i) a.push("M", t(n[r]), o)
            },
            LineString: function(e) {
                var n = e.coordinates,
                r = -1,
                i = n.length;
                a.push("M");
                while (++r < i) a.push(t(n[r]), "L");
                a.pop()
            },
            MultiLineString: function(e) {
                var n = e.coordinates,
                r = -1,
                i = n.length,
                s, o, u;
                while (++r < i) {
                    s = n[r],
                    o = -1,
                    u = s.length,
                    a.push("M");
                    while (++o < u) a.push(t(s[o]), "L");
                    a.pop()
                }
            },
            Polygon: function(e) {
                var n = e.coordinates,
                r = -1,
                i = n.length,
                s, o, u;
                while (++r < i) {
                    s = n[r],
                    o = -1;
                    if ((u = s.length - 1) > 0) {
                        a.push("M");
                        while (++o < u) a.push(t(s[o]), "L");
                        a[a.length - 1] = "Z"
                    }
                }
            },
            MultiPolygon: function(e) {
                var n = e.coordinates,
                r = -1,
                i = n.length,
                s, o, u, f, l, c;
                while (++r < i) {
                    s = n[r],
                    o = -1,
                    u = s.length;
                    while (++o < u) {
                        f = s[o],
                        l = -1;
                        if ((c = f.length - 1) > 0) {
                            a.push("M");
                            while (++l < c) a.push(t(f[l]), "L");
                            a[a.length - 1] = "Z"
                        }
                    }
                }
            },
            GeometryCollection: function(e) {
                var t = e.geometries,
                n = -1,
                r = t.length;
                while (++n < r) a.push(f(t[n]))
            }
        }),
        l = e.area = Ur({
            FeatureCollection: function(e) {
                var t = 0,
                n = e.features,
                r = -1,
                i = n.length;
                while (++r < i) t += l(n[r]);
                return t
            },
            Feature: function(e) {
                return l(e.geometry)
            },
            Polygon: function(e) {
                return n(e.coordinates)
            },
            MultiPolygon: function(e) {
                var t = 0,
                r = e.coordinates,
                i = -1,
                s = r.length;
                while (++i < s) t += n(r[i]);
                return t
            },
            GeometryCollection: function(e) {
                var t = 0,
                n = e.geometries,
                r = -1,
                i = n.length;
                while (++r < i) t += l(n[r]);
                return t
            }
        },
        0),
        c = e.centroid = Ur({
            Feature: function(e) {
                return c(e.geometry)
            },
            Polygon: function(e) {
                var t = r(e.coordinates);
                return [t[0] / t[2], t[1] / t[2]]
            },
            MultiPolygon: function(e) {
                var t = 0,
                n = e.coordinates,
                i, s = 0,
                o = 0,
                u = 0,
                a = -1,
                f = n.length;
                while (++a < f) i = r(n[a]),
                s += i[0],
                o += i[1],
                u += i[2];
                return [s / u, o / u]
            }
        });
        return e.projection = function(t) {
            return u = t,
            e
        },
        e.pointRadius = function(t) {
            return typeof t == "function" ? s = t: (s = +t, o = zr(s)),
            e
        },
        e
    },
    d3.geo.bounds = function(e) {
        var t = Infinity,
        n = Infinity,
        r = -Infinity,
        i = -Infinity;
        return Wr(e,
        function(e, s) {
            e < t && (t = e),
            e > r && (r = e),
            s < n && (n = s),
            s > i && (i = s)
        }),
        [[t, n], [r, i]]
    };
    var go = {
        Feature: Xr,
        FeatureCollection: Vr,
        GeometryCollection: $r,
        LineString: Jr,
        MultiLineString: Kr,
        MultiPoint: Jr,
        MultiPolygon: Qr,
        Point: Gr,
        Polygon: Yr
    };
    d3.geo.circle = function() {
        function e() {}
        function t(e) {
            return a.distance(e) < u
        }
        function n(e) {
            var t = -1,
            n = e.length,
            i = [],
            s,
            o,
            f,
            l,
            c;
            while (++t < n) c = a.distance(f = e[t]),
            c < u ? (o && i.push(ni(o, f)((l - u) / (l - c))), i.push(f), s = o = null) : (o = f, !s && i.length && (i.push(ni(i[i.length - 1], o)((u - l) / (c - l))), s = o)),
            l = c;
            return s = e[0],
            o = i[0],
            o && f[0] === s[0] && f[1] === s[1] && (f[0] !== o[0] || f[1] !== o[1]) && i.push(o),
            r(i)
        }
        function r(e) {
            var t = 0,
            n = e.length,
            r, i, s = n ? [e[0]] : e,
            o,
            u = a.source();
            while (++t < n) {
                o = a.source(e[t - 1])(e[t]).coordinates;
                for (r = 0, i = o.length; ++r < i;) s.push(o[r])
            }
            return a.source(u),
            s
        }
        var s = [0, 0],
        o = 89.99,
        u = o * mo,
        a = d3.geo.greatArc().source(s).target(i);
        e.clip = function(e) {
            return typeof s == "function" && a.source(s.apply(this, arguments)),
            f(e) || null
        };
        var f = Ur({
            FeatureCollection: function(e) {
                var t = e.features.map(f).filter(i);
                return t && (e = Object.create(e), e.features = t, e)
            },
            Feature: function(e) {
                var t = f(e.geometry);
                return t && (e = Object.create(e), e.geometry = t, e)
            },
            Point: function(e) {
                return t(e.coordinates) && e
            },
            MultiPoint: function(e) {
                var n = e.coordinates.filter(t);
                return n.length && {
                    type: e.type,
                    coordinates: n
                }
            },
            LineString: function(e) {
                var t = n(e.coordinates);
                return t.length && (e = Object.create(e), e.coordinates = t, e)
            },
            MultiLineString: function(e) {
                var t = e.coordinates.map(n).filter(function(e) {
                    return e.length
                });
                return t.length && (e = Object.create(e), e.coordinates = t, e)
            },
            Polygon: function(e) {
                var t = e.coordinates.map(n);
                return t[0].length && (e = Object.create(e), e.coordinates = t, e)
            },
            MultiPolygon: function(e) {
                var t = e.coordinates.map(function(e) {
                    return e.map(n)
                }).filter(function(e) {
                    return e[0].length
                });
                return t.length && (e = Object.create(e), e.coordinates = t, e)
            },
            GeometryCollection: function(e) {
                var t = e.geometries.map(f).filter(i);
                return t.length && (e = Object.create(e), e.geometries = t, e)
            }
        });
        return e.origin = function(t) {
            return arguments.length ? (s = t, typeof s != "function" && a.source(s), e) : s
        },
        e.angle = function(t) {
            return arguments.length ? (u = (o = +t) * mo, e) : o
        },
        d3.rebind(e, a, "precision")
    },
    d3.geo.greatArc = function() {
        function e() {
            var t = e.distance.apply(this, arguments),
            r = 0,
            u = s / t,
            a = [n];
            while ((r += u) < 1) a.push(o(r));
            return a.push(i),
            {
                type: "LineString",
                coordinates: a
            }
        }
        var t = Zr,
        n, r = ei,
        i, s = 6 * mo,
        o = ti();
        return e.distance = function() {
            return typeof t == "function" && o.source(n = t.apply(this, arguments)),
            typeof r == "function" && o.target(i = r.apply(this, arguments)),
            o.distance()
        },
        e.source = function(r) {
            return arguments.length ? (t = r, typeof t != "function" && o.source(n = t), e) : t
        },
        e.target = function(t) {
            return arguments.length ? (r = t, typeof r != "function" && o.target(i = r), e) : r
        },
        e.precision = function(t) {
            return arguments.length ? (s = t * mo, e) : s / mo
        },
        e
    },
    d3.geo.greatCircle = d3.geo.circle,
    d3.geom = {},
    d3.geom.contour = function(e, t) {
        var n = t || ri(e),
        r = [],
        i = n[0],
        s = n[1],
        o = 0,
        u = 0,
        a = NaN,
        f = NaN,
        l = 0;
        do l = 0,
        e(i - 1, s - 1) && (l += 1),
        e(i, s - 1) && (l += 2),
        e(i - 1, s) && (l += 4),
        e(i, s) && (l += 8),
        l === 6 ? (o = f === -1 ? -1 : 1, u = 0) : l === 9 ? (o = 0, u = a === 1 ? -1 : 1) : (o = yo[l], u = bo[l]),
        o != a && u != f && (r.push([i, s]), a = o, f = u),
        i += o,
        s += u;
        while (n[0] != i || n[1] != s);
        return r
    };
    var yo = [1, 0, 1, 1, -1, 0, -1, 1, 0, 0, 0, 0, -1, 0, -1, NaN],
    bo = [0, -1, 0, 0, 0, -1, 0, 0, 1, -1, 1, 1, 0, -1, 0, NaN];
    d3.geom.hull = function(e) {
        if (e.length < 3) return [];
        var t = e.length,
        n = t - 1,
        r = [],
        i = [],
        s,
        o,
        u = 0,
        a,
        f,
        l,
        c,
        h,
        p,
        d,
        v;
        for (s = 1; s < t; ++s) e[s][1] < e[u][1] ? u = s: e[s][1] == e[u][1] && (u = e[s][0] < e[u][0] ? s: u);
        for (s = 0; s < t; ++s) {
            if (s === u) continue;
            f = e[s][1] - e[u][1],
            a = e[s][0] - e[u][0],
            r.push({
                angle: Math.atan2(f, a),
                index: s
            })
        }
        r.sort(function(e, t) {
            return e.angle - t.angle
        }),
        d = r[0].angle,
        p = r[0].index,
        h = 0;
        for (s = 1; s < n; ++s) o = r[s].index,
        d == r[s].angle ? (a = e[p][0] - e[u][0], f = e[p][1] - e[u][1], l = e[o][0] - e[u][0], c = e[o][1] - e[u][1], a * a + f * f >= l * l + c * c ? r[s].index = -1 : (r[h].index = -1, d = r[s].angle, h = s, p = o)) : (d = r[s].angle, h = s, p = o);
        i.push(u);
        for (s = 0, o = 0; s < 2; ++o) r[o].index !== -1 && (i.push(r[o].index), s++);
        v = i.length;
        for (; o < n; ++o) {
            if (r[o].index === -1) continue;
            while (!ii(i[v - 2], i[v - 1], r[o].index, e))--v;
            i[v++] = r[o].index
        }
        var m = [];
        for (s = 0; s < v; ++s) m.push(e[i[s]]);
        return m
    },
    d3.geom.polygon = function(e) {
        return e.area = function() {
            var t = 0,
            n = e.length,
            r = e[n - 1][0] * e[0][1],
            i = e[n - 1][1] * e[0][0];
            while (++t < n) r += e[t - 1][0] * e[t][1],
            i += e[t - 1][1] * e[t][0];
            return (i - r) * .5
        },
        e.centroid = function(t) {
            var n = -1,
            r = e.length,
            i = 0,
            s = 0,
            o, u = e[r - 1],
            a;
            arguments.length || (t = -1 / (6 * e.area()));
            while (++n < r) o = u,
            u = e[n],
            a = o[0] * u[1] - u[0] * o[1],
            i += (o[0] + u[0]) * a,
            s += (o[1] + u[1]) * a;
            return [i * t, s * t]
        },
        e.clip = function(t) {
            var n, r = -1,
            i = e.length,
            s, o, u = e[i - 1],
            a,
            f,
            l;
            while (++r < i) {
                n = t.slice(),
                t.length = 0,
                a = e[r],
                f = n[(o = n.length) - 1],
                s = -1;
                while (++s < o) l = n[s],
                si(l, u, a) ? (si(f, u, a) || t.push(oi(f, l, u, a)), t.push(l)) : si(f, u, a) && t.push(oi(f, l, u, a)),
                f = l;
                u = a
            }
            return t
        },
        e
    },
    d3.geom.voronoi = function(e) {
        var t = e.map(function() {
            return []
        });
        return ui(e,
        function(e) {
            var n, r, i, s, o, u;
            e.a === 1 && e.b >= 0 ? (n = e.ep.r, r = e.ep.l) : (n = e.ep.l, r = e.ep.r),
            e.a === 1 ? (o = n ? n.y: -1e6, i = e.c - e.b * o, u = r ? r.y: 1e6, s = e.c - e.b * u) : (i = n ? n.x: -1e6, o = e.c - e.a * i, s = r ? r.x: 1e6, u = e.c - e.a * s);
            var a = [i, o],
            f = [s, u];
            t[e.region.l.index].push(a, f),
            t[e.region.r.index].push(a, f)
        }),
        t.map(function(t, n) {
            var r = e[n][0],
            i = e[n][1];
            return t.forEach(function(e) {
                e.angle = Math.atan2(e[0] - r, e[1] - i)
            }),
            t.sort(function(e, t) {
                return e.angle - t.angle
            }).filter(function(e, n) {
                return ! n || e.angle - t[n - 1].angle > 1e-10
            })
        })
    };
    var wo = {
        l: "r",
        r: "l"
    };
    d3.geom.delaunay = function(e) {
        var t = e.map(function() {
            return []
        }),
        n = [];
        return ui(e,
        function(n) {
            t[n.region.l.index].push(e[n.region.r.index])
        }),
        t.forEach(function(t, r) {
            var i = e[r],
            s = i[0],
            o = i[1];
            t.forEach(function(e) {
                e.angle = Math.atan2(e[0] - s, e[1] - o)
            }),
            t.sort(function(e, t) {
                return e.angle - t.angle
            });
            for (var u = 0,
            a = t.length - 1; u < a; u++) n.push([i, t[u], t[u + 1]])
        }),
        n
    },
    d3.geom.quadtree = function(e, t, n, r, i) {
        function s(e, t, n, r, i, s) {
            if (isNaN(t.x) || isNaN(t.y)) return;
            if (e.leaf) {
                var u = e.point;
                u ? Math.abs(u.x - t.x) + Math.abs(u.y - t.y) < .01 ? o(e, t, n, r, i, s) : (e.point = null, o(e, u, n, r, i, s), o(e, t, n, r, i, s)) : e.point = t
            } else o(e, t, n, r, i, s)
        }
        function o(e, t, n, r, i, o) {
            var u = (n + i) * .5,
            a = (r + o) * .5,
            f = t.x >= u,
            l = t.y >= a,
            c = (l << 1) + f;
            e.leaf = !1,
            e = e.nodes[c] || (e.nodes[c] = ai()),
            f ? n = u: i = u,
            l ? r = a: o = a,
            s(e, t, n, r, i, o)
        }
        var u, a = -1,
        f = e.length;
        f && isNaN(e[0].x) && (e = e.map(li));
        if (arguments.length < 5) if (arguments.length === 3) i = r = n,
        n = t;
        else {
            t = n = Infinity,
            r = i = -Infinity;
            while (++a < f) u = e[a],
            u.x < t && (t = u.x),
            u.y < n && (n = u.y),
            u.x > r && (r = u.x),
            u.y > i && (i = u.y);
            var l = r - t,
            c = i - n;
            l > c ? i = n + l: r = t + c
        }
        var h = ai();
        return h.add = function(e) {
            s(h, e, t, n, r, i)
        },
        h.visit = function(e) {
            fi(e, h, t, n, r, i)
        },
        e.forEach(h.add),
        h
    },
    d3.time = {};
    var Eo = Date,
    So = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    ci.prototype = {
        getDate: function() {
            return this._.getUTCDate()
        },
        getDay: function() {
            return this._.getUTCDay()
        },
        getFullYear: function() {
            return this._.getUTCFullYear()
        },
        getHours: function() {
            return this._.getUTCHours()
        },
        getMilliseconds: function() {
            return this._.getUTCMilliseconds()
        },
        getMinutes: function() {
            return this._.getUTCMinutes()
        },
        getMonth: function() {
            return this._.getUTCMonth()
        },
        getSeconds: function() {
            return this._.getUTCSeconds()
        },
        getTime: function() {
            return this._.getTime()
        },
        getTimezoneOffset: function() {
            return 0
        },
        valueOf: function() {
            return this._.valueOf()
        },
        setDate: function() {
            xo.setUTCDate.apply(this._, arguments)
        },
        setDay: function() {
            xo.setUTCDay.apply(this._, arguments)
        },
        setFullYear: function() {
            xo.setUTCFullYear.apply(this._, arguments)
        },
        setHours: function() {
            xo.setUTCHours.apply(this._, arguments)
        },
        setMilliseconds: function() {
            xo.setUTCMilliseconds.apply(this._, arguments)
        },
        setMinutes: function() {
            xo.setUTCMinutes.apply(this._, arguments)
        },
        setMonth: function() {
            xo.setUTCMonth.apply(this._, arguments)
        },
        setSeconds: function() {
            xo.setUTCSeconds.apply(this._, arguments)
        },
        setTime: function() {
            xo.setTime.apply(this._, arguments)
        }
    };
    var xo = Date.prototype,
    To = "%a %b %e %H:%M:%S %Y",
    No = "%m/%d/%y",
    Co = "%H:%M:%S",
    ko = So,
    Lo = ko.map(hi),
    Ao = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    Oo = Ao.map(hi);
    d3.time.format = function(e) {
        function t(t) {
            var r = [],
            i = -1,
            s = 0,
            o,
            u;
            while (++i < n) e.charCodeAt(i) == 37 && (r.push(e.substring(s, i), (u = Ro[o = e.charAt(++i)]) ? u(t) : o), s = i + 1);
            return r.push(e.substring(s, i)),
            r.join("")
        }
        var n = e.length;
        return t.parse = function(t) {
            var n = {
                y: 1900,
                m: 0,
                d: 1,
                H: 0,
                M: 0,
                S: 0,
                L: 0
            },
            r = pi(n, e, t, 0);
            if (r != t.length) return null;
            "p" in n && (n.H = n.H % 12 + n.p * 12);
            var i = new Eo;
            return i.setFullYear(n.y, n.m, n.d),
            i.setHours(n.H, n.M, n.S, n.L),
            i
        },
        t.toString = function() {
            return e
        },
        t
    };
    var Mo = d3.format("02d"),
    _o = d3.format("03d"),
    Do = d3.format("04d"),
    Po = d3.format("2d"),
    Ho = di(ko),
    Bo = di(Lo),
    jo = di(Ao),
    Fo = vi(Ao),
    Io = di(Oo),
    qo = vi(Oo),
    Ro = {
        a: function(e) {
            return Lo[e.getDay()]
        },
        A: function(e) {
            return ko[e.getDay()]
        },
        b: function(e) {
            return Oo[e.getMonth()]
        },
        B: function(e) {
            return Ao[e.getMonth()]
        },
        c: d3.time.format(To),
        d: function(e) {
            return Mo(e.getDate())
        },
        e: function(e) {
            return Po(e.getDate())
        },
        H: function(e) {
            return Mo(e.getHours())
        },
        I: function(e) {
            return Mo(e.getHours() % 12 || 12)
        },
        j: function(e) {
            return _o(1 + d3.time.dayOfYear(e))
        },
        L: function(e) {
            return _o(e.getMilliseconds())
        },
        m: function(e) {
            return Mo(e.getMonth() + 1)
        },
        M: function(e) {
            return Mo(e.getMinutes())
        },
        p: function(e) {
            return e.getHours() >= 12 ? "PM": "AM"
        },
        S: function(e) {
            return Mo(e.getSeconds())
        },
        U: function(e) {
            return Mo(d3.time.sundayOfYear(e))
        },
        w: function(e) {
            return e.getDay()
        },
        W: function(e) {
            return Mo(d3.time.mondayOfYear(e))
        },
        x: d3.time.format(No),
        X: d3.time.format(Co),
        y: function(e) {
            return Mo(e.getFullYear() % 100)
        },
        Y: function(e) {
            return Do(e.getFullYear() % 1e4)
        },
        Z: Di,
        "%": function(e) {
            return "%"
        }
    },
    Uo = {
        a: mi,
        A: gi,
        b: yi,
        B: bi,
        c: wi,
        d: ki,
        e: ki,
        H: Li,
        I: Li,
        L: Mi,
        m: Ci,
        M: Ai,
        p: _i,
        S: Oi,
        x: Ei,
        X: Si,
        y: Ti,
        Y: xi
    },
    zo = /^\s*\d+/,
    Wo = d3.map({
        am: 0,
        pm: 1
    });
    d3.time.format.utc = function(e) {
        function t(e) {
            try {
                Eo = ci;
                var t = new Eo;
                return t._ = e,
                n(t)
            } finally {
                Eo = Date
            }
        }
        var n = d3.time.format(e);
        return t.parse = function(e) {
            try {
                Eo = ci;
                var t = n.parse(e);
                return t && t._
            } finally {
                Eo = Date
            }
        },
        t.toString = n.toString,
        t
    };
    var Xo = d3.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");
    d3.time.format.iso = Date.prototype.toISOString ? Pi: Xo,
    Pi.parse = function(e) {
        var t = new Date(e);
        return isNaN(t) ? null: t
    },
    Pi.toString = Xo.toString,
    d3.time.second = Hi(function(e) {
        return new Eo(Math.floor(e / 1e3) * 1e3)
    },
    function(e, t) {
        e.setTime(e.getTime() + Math.floor(t) * 1e3)
    },
    function(e) {
        return e.getSeconds()
    }),
    d3.time.seconds = d3.time.second.range,
    d3.time.seconds.utc = d3.time.second.utc.range,
    d3.time.minute = Hi(function(e) {
        return new Eo(Math.floor(e / 6e4) * 6e4)
    },
    function(e, t) {
        e.setTime(e.getTime() + Math.floor(t) * 6e4)
    },
    function(e) {
        return e.getMinutes()
    }),
    d3.time.minutes = d3.time.minute.range,
    d3.time.minutes.utc = d3.time.minute.utc.range,
    d3.time.hour = Hi(function(e) {
        var t = e.getTimezoneOffset() / 60;
        return new Eo((Math.floor(e / 36e5 - t) + t) * 36e5)
    },
    function(e, t) {
        e.setTime(e.getTime() + Math.floor(t) * 36e5)
    },
    function(e) {
        return e.getHours()
    }),
    d3.time.hours = d3.time.hour.range,
    d3.time.hours.utc = d3.time.hour.utc.range,
    d3.time.day = Hi(function(e) {
        var t = new Eo(1970, 0);
        return t.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()),
        t
    },
    function(e, t) {
        e.setDate(e.getDate() + t)
    },
    function(e) {
        return e.getDate() - 1
    }),
    d3.time.days = d3.time.day.range,
    d3.time.days.utc = d3.time.day.utc.range,
    d3.time.dayOfYear = function(e) {
        var t = d3.time.year(e);
        return Math.floor((e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) / 864e5)
    },
    So.forEach(function(e, t) {
        e = e.toLowerCase(),
        t = 7 - t;
        var n = d3.time[e] = Hi(function(e) {
            return (e = d3.time.day(e)).setDate(e.getDate() - (e.getDay() + t) % 7),
            e
        },
        function(e, t) {
            e.setDate(e.getDate() + Math.floor(t) * 7)
        },
        function(e) {
            var n = d3.time.year(e).getDay();
            return Math.floor((d3.time.dayOfYear(e) + (n + t) % 7) / 7) - (n !== t)
        });
        d3.time[e + "s"] = n.range,
        d3.time[e + "s"].utc = n.utc.range,
        d3.time[e + "OfYear"] = function(e) {
            var n = d3.time.year(e).getDay();
            return Math.floor((d3.time.dayOfYear(e) + (n + t) % 7) / 7)
        }
    }),
    d3.time.week = d3.time.sunday,
    d3.time.weeks = d3.time.sunday.range,
    d3.time.weeks.utc = d3.time.sunday.utc.range,
    d3.time.weekOfYear = d3.time.sundayOfYear,
    d3.time.month = Hi(function(e) {
        return e = d3.time.day(e),
        e.setDate(1),
        e
    },
    function(e, t) {
        e.setMonth(e.getMonth() + t)
    },
    function(e) {
        return e.getMonth()
    }),
    d3.time.months = d3.time.month.range,
    d3.time.months.utc = d3.time.month.utc.range,
    d3.time.year = Hi(function(e) {
        return e = d3.time.day(e),
        e.setMonth(0, 1),
        e
    },
    function(e, t) {
        e.setFullYear(e.getFullYear() + t)
    },
    function(e) {
        return e.getFullYear()
    }),
    d3.time.years = d3.time.year.range,
    d3.time.years.utc = d3.time.year.utc.range;
    var Vo = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
    $o = [[d3.time.second, 1], [d3.time.second, 5], [d3.time.second, 15], [d3.time.second, 30], [d3.time.minute, 1], [d3.time.minute, 5], [d3.time.minute, 15], [d3.time.minute, 30], [d3.time.hour, 1], [d3.time.hour, 3], [d3.time.hour, 6], [d3.time.hour, 12], [d3.time.day, 1], [d3.time.day, 2], [d3.time.week, 1], [d3.time.month, 1], [d3.time.month, 3], [d3.time.year, 1]],
    Jo = [[d3.time.format("%Y"),
    function(e) {
        return ! 0
    }], [d3.time.format("%B"),
    function(e) {
        return e.getMonth()
    }], [d3.time.format("%b %d"),
    function(e) {
        return e.getDate() != 1
    }], [d3.time.format("%a %d"),
    function(e) {
        return e.getDay() && e.getDate() != 1
    }], [d3.time.format("%I %p"),
    function(e) {
        return e.getHours()
    }], [d3.time.format("%I:%M"),
    function(e) {
        return e.getMinutes()
    }], [d3.time.format(":%S"),
    function(e) {
        return e.getSeconds()
    }], [d3.time.format(".%L"),
    function(e) {
        return e.getMilliseconds()
    }]],
    Ko = d3.scale.linear(),
    Qo = qi(Jo);
    $o.year = function(e, t) {
        return Ko.domain(e.map(Ui)).ticks(t).map(Ri)
    },
    d3.time.scale = function() {
        return ji(d3.scale.linear(), $o, Qo)
    };
    var Go = $o.map(function(e) {
        return [e[0].utc, e[1]]
    }),
    Yo = [[d3.time.format.utc("%Y"),
    function(e) {
        return ! 0
    }], [d3.time.format.utc("%B"),
    function(e) {
        return e.getUTCMonth()
    }], [d3.time.format.utc("%b %d"),
    function(e) {
        return e.getUTCDate() != 1
    }], [d3.time.format.utc("%a %d"),
    function(e) {
        return e.getUTCDay() && e.getUTCDate() != 1
    }], [d3.time.format.utc("%I %p"),
    function(e) {
        return e.getUTCHours()
    }], [d3.time.format.utc("%I:%M"),
    function(e) {
        return e.getUTCMinutes()
    }], [d3.time.format.utc(":%S"),
    function(e) {
        return e.getUTCSeconds()
    }], [d3.time.format.utc(".%L"),
    function(e) {
        return e.getUTCMilliseconds()
    }]],
    Zo = qi(Yo);
    Go.year = function(e, t) {
        return Ko.domain(e.map(Wi)).ticks(t).map(zi)
    },
    d3.time.scale.utc = function() {
        return ji(d3.scale.linear(), Go, Zo)
    }
})();
var mod = mod || {};
mod.helper = {};

mod.helper.createTooltip = function() {
    // Append tooltip
    var tooltipDiv = d3.select('body').append('div').attr('class', 'd3-tip');
    tooltipDiv.style('display', 'none').style('position', 'absolute').style('z-index', 1001).style('width', '100px');

    return tooltipDiv;
};

mod.helper.showTooltip = function(tooltip) {
    if (tooltip) {
        tooltip.style('display', 'block');
    }
};

mod.helper.hideTooltip = function(tooltip) {
    if (tooltip) {
        tooltip.style('display', 'none');
    }
};

mod.helper.updateTooltip = function(tooltip, text) {
    var bodyNode = d3.select('body').node();
    // Move tooltip
    var mousePos = d3.mouse(bodyNode);
    tooltip.style('left', (mousePos[0] + 20) + 'px').style('top', (mousePos[1] + 20) + 'px');
    tooltip.style('width',
    function(d, i) {
        return (text.length > 80) ? '300px': null;
    }).html(text);
};
var mod = mod || {};
mod.d3 = mod.d3 || {};

mod.d3.Series = function(params) {
    params = params || {};
    this.name = params.name || '';
    this.data = params.data || null;
    this.data = params.unit || '';
    this.type = params.type || null;
};

mod.d3.Series.prototype.draw = function(svg, xScale, yScale, w, h) {
    if (!this.type || !this.data) {
        return;
    }

    if (this.type.name === 'bar') {
        this._drawBar(svg, xScale, yScale, w, h);
    }

    // Setup hover
    if (this.type.hoverEnabled) {
        this._prevPoint = null;
    }
};

mod.d3.Series.prototype._drawBar = function(svg, xScale, yScale, w, h) {
    var rects = svg.selectAll('rect.' + this.name + '-data-point').data(this.data).enter().append("rect");

    var barSpacing = this.type.barSpacing || 0;
    var barWidth = this.type.barWidth || w / this.data.length - barSpacing;
    var color = this.type.color || 'rgb(0,0,0)';
    rects.attr('class', this.name + "-data-point").attr("x",
    function(d, i) {
        return xScale(new Date(d.time)) - barWidth / 2;
    }).attr("y",
    function(d, i) {
        return yScale(d.value);
    }).attr("width",
    function(d) {
        return barWidth;
    }).attr("height",
    function(d) {
        return h - yScale(d.value);
    }).attr("fill",
    function(d) {
        return color;
    });
};

mod.d3.Series.prototype.handleMouseMove = function(svg, mouse, container, xScale, yScale) {
    if (!this.type.hoverEnabled) {
        return;
    }
    if (this._prevPoint) {
        this._prevPoint.attr('fill', this.type.color);
    }
    if (mouse.x > container.padding && mouse.x < container.width && mouse.y > 0 && mouse.y < container.height) {

        var minDist = 100000000;
        var dist = 0;
        var index = 0;

        // find closest data point
        for (var i = 0,
        len = this.data.length; i < len; i++) {
            var xs = xScale(new Date(this.data[i].time));
            dist = Math.abs(xs - container.padding - mouse.x);
            if (dist < minDist) {
                index = i;
                minDist = dist;
            }
        }

        // highlight that datapoint
        var allDp = svg.selectAll('rect.' + this.name + '-data-point');
        var dp = d3.select(allDp[0][index]);
        dp.attr("fill", this.type.hoverColor);
        this._prevPoint = dp;

        if (this.tooltip) {
            if (!this._tooltipElement) {
                this._tooltipElement = mod.helper.createTooltip();
            }
            mod.helper.showTooltip(this._tooltipElement);
            mod.helper.updateTooltip(this._tooltipElement, this.tooltip.text(this.data[index]));
        }
    } else {
        if (this.tooltip) {
            mod.helper.hideTooltip(this._tooltipElement);
        }
    }
};

mod.d3.Series.prototype.handleMouseOut = function(svg, mouse, container, xScale, yScale) {
    if (!this.type.hoverEnabled) {
        return;
    }
    if (this._prevPoint) {
        this._prevPoint.attr('fill', this.type.color);
    }
    if (this._tooltipElement) {
        mod.helper.hideTooltip(this._tooltipElement);
    }
};

mod.d3.Graph = function(params) {
    params = params || {};
    this.el = params.el || d3.select("body");
    this.width = params.width || 480;
    this.height = params.height || 400;
    this.padding = params.padding || 30;
    this.className = params.className || 'mod-graph';
    this.series = params.series || null;
    this.legend = params.legend || null;
    this.xAxis = params.xAxis || null;
    this.yAxis = params.yAxis || null;
    this.gridLines = params.gridLines || null;
    this.tooltip = params.tooltip || null;
};

mod.d3.Graph.prototype.draw = function() {
    if (this.svg) {
        this.svg.remove();
    }
    this._calculateScales();
    this._calculateAxes();
    this.svg = this.el.append("svg").attr('class', this.className).attr("width", this.width).attr("height", this.height);
    this._drawGrid(this.svg);
    var series = [this.series];
    if (typeof this.series.length !== 'undefined') {
        series = this.series;
    }
    for (var i = 0,
    len = series.length; i < len; i++) {
        series[i].draw(this.svg, this.xScale, this.yScale, this.width - 2 * this.padding, this.height - this.padding);
    }
    this.svg.append("g").attr("class", "axis").attr("transform", "translate(0," + (this.height - this.padding) + ")").call(this.xAxisSvg);
    this.svg.append("g").attr("class", "axis").attr("transform", "translate(" + this.padding * 2 + ",0)").call(this.yAxisSvg);
    this._setupHover(this.svg, series, this.xScale, this.yScale);
    if (this.legend) {
        this._drawLegend(this.legend, series);
    }
};

mod.d3.Graph.prototype._calculateScales = function() {
    this.xScale = this._calculateScale(this.xAxis, [this.padding * 2, this.width - this.padding]);
    this.yScale = this._calculateScale(this.yAxis, [this.height - this.padding, this.padding]);
};

mod.d3.Graph.prototype._calculateScale = function(axis, range) {
    var scale = null;
    if (axis) {
        var type = axis.type || 'linear';
        switch (type) {
        case 'linear':
            scale = d3.scale.linear();
            break;
        case 'pow':
            scale = d3.scale.pow();
            if (axis.exponent) {
                scale.exponent(axis.exponent);
            }
            break;
        case 'time':
            scale = d3.time.scale();
            break;
        default:
            scale = d3.scale.linear();
        }
        var min = axis.min || 0;
        var max = axis.max || 1;
        if (axis.buffer) {
            min = (min === 0) ? min: min - axis.buffer;
            max = (max === 1) ? max: max + axis.buffer;
        }

        scale.domain([min, max]).range(range);

        if (axis.nice) {
            scale.nice();
        }
    }

    return scale;
};

mod.d3.Graph.prototype._calculateAxes = function() {
    if (this.xAxis && !this.xAxis.orient) {
        this.xAxis.orient = 'bottom';
    }
    this.xAxisSvg = this._calculateAxis(this.xAxis, this.xScale);
    if (this.yAxis && !this.yAxis.orient) {
        this.yAxis.orient = 'left';
    }
    this.yAxisSvg = this._calculateAxis(this.yAxis, this.yScale);
};

mod.d3.Graph.prototype._calculateAxis = function(axis, scale) {
    var axisSvg = null;
    if (axis && scale) {
        axisSvg = d3.svg.axis().scale(scale);
        var orient = axis.orient || 'bottom';
        var ticks = axis.ticks || 4;
        axisSvg.orient(orient).ticks(ticks);
    }
    return axisSvg;
};

mod.d3.Graph.prototype._drawGrid = function(svg) {
    var ticks = 0;
    var scale = null;
    if (this.gridLines) {
        if (this.gridLines.xColor && this.xScale) {
            ticks = this.yAxis.ticks || 4;
            scale = this.xScale;
            svg.selectAll("line.x-gridline").data(scale.ticks(ticks)).enter().append("line").attr("class", "x-gridline").attr("x1",
            function(d) {
                return scale(d);
            }).attr("x2",
            function(d) {
                return scale(d);
            }).attr("y1", this.padding).attr("y2", this.height - this.padding).style("stroke", this.gridLines.xColor);
        }
        if (this.gridLines.yColor && this.yScale) {
            ticks = this.yAxis.ticks || 4;
            scale = this.yScale;
            svg.selectAll("line.y-gridline").data(scale.ticks(ticks)).enter().append("line").attr("class", "y-gridline").attr("x1", this.padding * 2).attr("x2", this.width - this.padding).attr("y1",
            function(d) {
                return scale(d);
            }).attr("y2",
            function(d) {
                return scale(d);
            }).style("stroke", this.gridLines.yColor);
        }
    }
};

mod.d3.Graph.prototype._setupHover = function(el, series, xScale, yScale) {
    var self = this;
    el.on('mousemove',
    function() {
        var mousePos = d3.mouse(el.node());
        var pt = {
            x: mousePos[0] - self.padding,
            y: mousePos[1] - self.padding
        };
        var container = {
            width: self.width - 2 * self.padding,
            height: self.height - 2 * self.padding,
            padding: self.padding
        };
        for (var i = 0,
        len = series.length; i < len; i++) {
            series[i].handleMouseMove(el, pt, container, xScale, yScale);
        }
    }).on('mouseout',
    function() {
        var mousePos = d3.mouse(el.node());
        var pt = {
            x: mousePos[0] - self.padding,
            y: mousePos[1] - self.padding
        };
        var container = {
            width: self.width - 2 * self.padding,
            height: self.height - 2 * self.padding,
            padding: self.padding
        };
        for (var i = 0,
        len = series.length; i < len; i++) {
            series[i].handleMouseOut(el, pt, container, xScale, yScale);
        }
    });
};

mod.d3.Graph.prototype._drawLegend = function(el, series) {
    el.selectAll('div.legend-item').data(series).enter().append('div').attr('class', 'legend-item').text(function(s) {
        return (s.units === '') ? s.name: s.name + ' (' + s.units + ')';
    }).append('div').attr('class', 'marker').style('background-color',
    function(s) {
        return s.type.color;
    });
};

// Generated by CoffeeScript 1.3.3
(function() {
    var e, t;
    e = function() {
        function e(e) {
            var t, n;
            this.options = {
                target: "instafeed",
                get: "popular",
                resolution: "thumbnail",
                sortBy: "most-recent",
                links: !0,
                limit: 15,
                mock: !1
            };
            if (typeof e == "object") for (t in e) n = e[t],
            this.options[t] = n;
            this.unique = this._genKey()
        }
        return e.prototype.run = function() {
            var t, n, r;
            if (typeof this.options.clientId != "string" && typeof this.options.accessToken != "string") throw new Error("Missing clientId or accessToken.");
            if (typeof this.options.accessToken != "string" && typeof this.options.clientId != "string") throw new Error("Missing clientId or accessToken.");
            return this.options.before != null && typeof this.options.before == "function" && this.options.before.call(this),
            typeof document != "undefined" && document !== null && (r = document.createElement("script"), r.id = "instafeed-fetcher", r.src = this._buildUrl(), t = document.getElementsByTagName("head"), t[0].appendChild(r), n = "instafeedCache" + this.unique, window[n] = new e(this.options), window[n].unique = this.unique),
            !0
        },
        e.prototype.parse = function(e) {
            var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v;
            if (typeof e != "object") {
                if (this.options.error != null && typeof this.options.error == "function") return this.options.error.call(this, "Invalid JSON data"),
                !1;
                throw new Error("Invalid JSON response")
            }
            if (e.meta.code !== 200) {
                if (this.options.error != null && typeof this.options.error == "function") return this.options.error.call(this, e.meta.error_message),
                !1;
                throw new Error("Error from Instagram: " + e.meta.error_message)
            }
            if (e.data.length === 0) {
                if (this.options.error != null && typeof this.options.error == "function") return this.options.error.call(this, "No images were returned from Instagram"),
                !1;
                throw new Error("No images were returned from Instagram")
            }
            this.options.success != null && typeof this.options.success == "function" && this.options.success.call(this, e);
            if (this.options.sortBy !== "most-recent") {
                this.options.sortBy === "random" ? c = ["", "random"] : c = this.options.sortBy.split("-"),
                l = c[0] === "least" ? !0 : !1;
                switch (c[1]) {
                case "random":
                    e.data.sort(function() {
                        return.5 - Math.random()
                    });
                    break;
                case "recent":
                    e.data = this._sortBy(e.data, "created_time", l);
                    break;
                case "liked":
                    e.data = this._sortBy(e.data, "likes.count", l);
                    break;
                case "commented":
                    e.data = this._sortBy(e.data, "comments.count", l);
                    break;
                default:
                    throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.")
                }
            }
            if (typeof document != "undefined" && document !== null && this.options.mock === !1) {
                document.getElementById(this.options.target).innerHTML = "",
                u = e.data,
                u.length > this.options.limit && (u = u.slice(0, this.options.limit + 1 || 9e9));
                if (this.options.template != null && typeof this.options.template == "string") {
                    i = "",
                    o = "";
                    for (h = 0, d = u.length; h < d; h++) s = u[h],
                    o = this._makeTemplate(this.options.template, {
                        model: s,
                        id: s.id,
                        link: s.link,
                        image: s.images[this.options.resolution].url,
                        caption: this._getObjectProperty(s, "caption.text"),
                        likes: s.likes.count,
                        comments: s.comments.count,
                        location: this._getObjectProperty(s, "location.name")
                    }),
                    i += o;
                    document.getElementById(this.options.target).innerHTML = i
                } else {
                    n = document.createDocumentFragment();
                    for (p = 0, v = u.length; p < v; p++) s = u[p],
                    a = document.createElement("img"),
                    a.src = s.images[this.options.resolution].url,
                    this.options.links === !0 ? (t = document.createElement("a"), t.href = s.link, t.appendChild(a), n.appendChild(t)) : n.appendChild(a);
                    document.getElementById(this.options.target).appendChild(n)
                }
                r = document.getElementsByTagName("head")[0],
                r.removeChild(document.getElementById("instafeed-fetcher")),
                f = "instafeedCache" + this.unique,
                delete window[f]
            }
            return this.options.after != null && typeof this.options.after == "function" && this.options.after.call(this),
            !0
        },
        e.prototype._buildUrl = function() {
            var e, t, n;
            e = "https://api.instagram.com/v1";
            switch (this.options.get) {
            case "popular":
                t = "media/popular";
                break;
            case "tagged":
                if (typeof this.options.tagName != "string") throw new Error("No tag name specified. Use the 'tagName' option.");
                t = "tags/" + this.options.tagName + "/media/recent";
                break;
            case "location":
                if (typeof this.options.locationId != "number") throw new Error("No location specified. Use the 'locationId' option.");
                t = "locations/" + this.options.locationId + "/media/recent";
                break;
            case "user":
                if (typeof this.options.userId != "number") throw new Error("No user specified. Use the 'userId' option.");
                if (typeof this.options.accessToken != "string") throw new Error("No access token. Use the 'accessToken' option.");
                t = "users/" + this.options.userId + "/media/recent";
                break;
            default:
                throw new Error("Invalid option for get: '" + this.options.get + "'.")
            }
            return n = "" + e + "/" + t,
            this.options.accessToken != null ? n += "?access_token=" + this.options.accessToken: n += "?client_id=" + this.options.clientId,
            n += "&count=" + this.options.limit,
            n += "&callback=instafeedCache" + this.unique + ".parse",
            n
        },
        e.prototype._genKey = function() {
            var e;
            return e = function() {
                return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
            },
            "" + e() + e() + e() + e()
        },
        e.prototype._makeTemplate = function(e, t) {
            var n, r, i, s, o;
            r = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,
            n = e;
            while (r.test(n)) i = n.match(r)[1],
            s = (o = this._getObjectProperty(t, i)) != null ? o: "",
            n = n.replace(r, "" + s);
            return n
        },
        e.prototype._getObjectProperty = function(e, t) {
            var n, r;
            t = t.replace(/\[(\w+)\]/g, ".$1"),
            r = t.split(".");
            while (r.length) {
                n = r.shift();
                if (! (e != null && n in e)) return null;
                e = e[n]
            }
            return e
        },
        e.prototype._sortBy = function(e, t, n) {
            var r;
            return r = function(e, r) {
                var i, s;
                return i = this._getObjectProperty(e, t),
                s = this._getObjectProperty(r, t),
                n ? i > s ? 1 : -1 : i < s ? 1 : -1
            },
            e.sort(r.bind(this)),
            e
        },
        e
    } (),
    t = typeof exports != "undefined" && exports !== null ? exports: window,
    t.Instafeed = e
}).call(this);
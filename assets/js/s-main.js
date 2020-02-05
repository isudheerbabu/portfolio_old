function shuffle_init(t) {
    var e = $(t + " .portfolio-colum"),
        i = $(t + " .portfolio-filter-nav");
    e && (e.shuffle({
        speed: 500,
        itemSelector: "figure"
    }), e.find("img").each(function () {
        var t;
        this.complete && void 0 !== this.naturalWidth || (t = new Image, $(t).on("load", function () {
            $(this).off("load"), e.shuffle("update")
        }), t.src = this.src)
    }), setTimeout(function () {
        e.shuffle("update")
    }, 500), i.on("click", ".filter", function (t) {
        t.preventDefault(), $(".portfolio-filter-nav .filter").removeClass("active"), $(this).addClass("active"), e.shuffle("shuffle", $(this).attr("data-group"))
    }))
}







function stellar_init(t) {
    return !(window.innerWidth < 980) && void jQuery(t).stellar({
        horizontalScrolling: !1,
        verticalScrolling: !0,
        horizontalOffset: 0,
        verticalOffset: 0,
        responsive: !1,
        scrollProperty: "scroll",
        positionProperty: "transform",
        parallaxBackgrounds: !0,
        parallaxElements: !0,
        hideDistantElements: !1,
        hideElement: function (t) {
            t.hide()
        },
        showElement: function (t) {
            t.show()
        }
    })
}

function contact_form_validate(t) {
    (void 0 !== t && t.length > 0 ? t : $("#contact-valid-form")).each(function () {
        var t = $(this);
        t.find(".field-validation").each(function () {
            $(this).change(function () {
                if ($(this).siblings(".alert").remove().fadeOut("slow", function () {
                        $(this).remove()
                    }), "" !== $(this).val().trim()) {
                    var e = contact_field_validation(t, $(this));
                    if (e.length > 0 && void 0 !== e[0].message && "" !== e[0].message && "success" !== e[0].message) {
                        var i = '<div class="alert"><i class="fa fa-exclamation-triangle"></i> ' + e[0].message + "</div>";
                        $(this).after(i), $(this).siblings(".alert").fadeIn("slow")
                    }
                }
            })
        }), t.submit(function (e) {
            e.preventDefault(), $(this).find(".form-loader").fadeIn("slow");
            var i = $(this).attr("action");
            if (void 0 == i && "" == i) return !1;
            $(this).find(".alert").remove().fadeOut("fast", function () {
                $(this).remove()
            }), $(this).find(".alert-validate-form").fadeOut("fast", function () {
                $(this).empty()
            });
            var n = !1;
            return $(this).find(".field-validation").each(function () {
                var e = contact_field_validation(t, $(this));
                if (e.length > 0 && void 0 !== e[0].message && "" != e[0].message && "success" != e[0].message) {
                    var i = '<div class="alert alert-danger"><i class="fa fa-exclamation-triangle"></i> ' + e[0].message + "</div>";
                    $(this).after(i), $(this).siblings(".alert").fadeIn(), n = !0
                }
            }), 1 == n ? ($(this).find(".form-loader").fadeOut("fast"), !1) : void $.ajax({
                type: "POST",
                url: i,
                data: $(this).serialize(),
                dataType: "json",
                success: function (e) {
                    t.find(".form-loader").fadeOut("fast");
                    var i = "1" == e.status,
                        n = '<div class="alert ';
                    n += 1 == i ? "success" : "error", n += '"><i class="fa fa-check-circle"></i> ' + e.text + "</div>", t.find(".alert-validate-form").html(n).fadeIn("fast", function () {
                        $(this).delay(1e4).fadeOut("fast", function () {})
                    }), 1 == i && t.find(".form-control").val("")
                },
                error: function () {
                    t.find(".form-loader").fadeOut("fast");
                    t.find(".alert-validate-form").html('<div class="alert alert-danger"><i class="fa fa-exclamation-triangle"></i> An error occured. Please try again later.</div>').fadeIn("fast")
                }
            })
        })
    })
}

function contact_field_validation(t, e) {
    if (void 0 !== t && t.length > 0) {
        var i = void 0 !== e && e.length > 0 ? e : t.find(".validate"),
            n = new Array;
        return i.each(function () {
            var t = $(this).attr("data-validation-type"),
                e = $(this).hasClass("required"),
                i = $(this).val().trim(),
                o = new Array;
            o.field_object = $(this), o.message = "success", 1 != e || "" != i && null !== i && void 0 !== i || (o.message = "This field is required"), "string" == t && "" != i && null !== i && void 0 !== i ? null == i.match(/^[a-z0-9α-ω-ά-ώ .\-]+$/i) && (o.message = "Invalid characters found.") : "email" == t && "" != i && null !== i && void 0 !== i ? null == i.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && (o.message = "Please enter a valid email address.") : "phone" == t && "" != i && null !== i && void 0 !== i && null == i.match(/^\(?\+?[\d\(\-\s\)]+$/) && (o.message = "Invalid characters found."), n.push(o)
        }), n
    }
}

function addMenuHeight() {
    var t = jQuery(".menu-box"),
        e = jQuery("nav").height() - (jQuery("nav .logo-box").height() + jQuery("nav footer.footer").height());
    return t.css({
        "max-height": e + "px"
    }), !1
}
if (window.Modernizr = function (t, e, i) {
        function n(t) {
            g.cssText = t
        }

        function o(t, e) {
            return typeof t === e
        }

        function s(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function r(t, e) {
            for (var n in t) {
                var o = t[n];
                if (!s(o, "-") && g[o] !== i) return "pfx" != e || o
            }
            return !1
        }

        function a(t, e, n) {
            for (var s in t) {
                var r = e[t[s]];
                if (r !== i) return !1 === n ? t[s] : o(r, "function") ? r.bind(n || e) : r
            }
            return !1
        }

        function l(t, e, i) {
            var n = t.charAt(0).toUpperCase() + t.slice(1),
                s = (t + " " + y.join(n + " ") + n).split(" ");
            return o(e, "string") || o(e, "undefined") ? r(s, e) : (s = (t + " " + b.join(n + " ") + n).split(" "), a(s, e, i))
        }
        var c, h, u = {},
            p = e.documentElement,
            d = "modernizr",
            f = e.createElement(d),
            g = f.style,
            m = " -webkit- -moz- -o- -ms- ".split(" "),
            v = "Webkit Moz O ms",
            y = v.split(" "),
            b = v.toLowerCase().split(" "),
            w = {},
            x = [],
            C = x.slice,
            _ = function (t, i, n, o) {
                var s, r, a, l, c = e.createElement("div"),
                    h = e.body,
                    u = h || e.createElement("body");
                if (parseInt(n, 10))
                    for (; n--;) a = e.createElement("div"), a.id = o ? o[n] : d + (n + 1), c.appendChild(a);
                return s = ["&#173;", '<style id="s', d, '">', t, "</style>"].join(""), c.id = d, (h ? c : u).innerHTML += s, u.appendChild(c), h || (u.style.background = "", u.style.overflow = "hidden", l = p.style.overflow, p.style.overflow = "hidden", p.appendChild(u)), r = i(c, t), h ? c.parentNode.removeChild(c) : (u.parentNode.removeChild(u), p.style.overflow = l), !!r
            },
            T = {}.hasOwnProperty;
        h = o(T, "undefined") || o(T.call, "undefined") ? function (t, e) {
            return e in t && o(t.constructor.prototype[e], "undefined")
        } : function (t, e) {
            return T.call(t, e)
        }, Function.prototype.bind || (Function.prototype.bind = function (t) {
            var e = this;
            if ("function" != typeof e) throw new TypeError;
            var i = C.call(arguments, 1),
                n = function () {
                    if (this instanceof n) {
                        var o = function () {};
                        o.prototype = e.prototype;
                        var s = new o,
                            r = e.apply(s, i.concat(C.call(arguments)));
                        return Object(r) === r ? r : s
                    }
                    return e.apply(t, i.concat(C.call(arguments)))
                };
            return n
        }), w.touch = function () {
            var i;
            return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? i = !0 : _(["@media (", m.join("touch-enabled),("), d, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (t) {
                i = 9 === t.offsetTop
            }), i
        }, w.cssanimations = function () {
            return l("animationName")
        }, w.csstransforms = function () {
            return !!l("transform")
        }, w.csstransforms3d = function () {
            var t = !!l("perspective");
            return t && "webkitPerspective" in p.style && _("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (e, i) {
                t = 9 === e.offsetLeft && 3 === e.offsetHeight
            }), t
        }, w.csstransitions = function () {
            return l("transition")
        };
        for (var E in w) h(w, E) && (c = E.toLowerCase(), u[c] = w[E](), x.push((u[c] ? "" : "no-") + c));
        return u.addTest = function (t, e) {
                if ("object" == typeof t)
                    for (var n in t) h(t, n) && u.addTest(n, t[n]);
                else {
                    if (t = t.toLowerCase(), u[t] !== i) return u;
                    e = "function" == typeof e ? e() : e, p.className += " " + (e ? "" : "no-") + t, u[t] = e
                }
                return u
            }, n(""), f = null,
            function (t, e) {
                function i(t, e) {
                    var i = t.createElement("p"),
                        n = t.getElementsByTagName("head")[0] || t.documentElement;
                    return i.innerHTML = "x<style>" + e + "</style>", n.insertBefore(i.lastChild, n.firstChild)
                }

                function n() {
                    var t = v.elements;
                    return "string" == typeof t ? t.split(" ") : t
                }

                function o(t) {
                    var e = m[t[f]];
                    return e || (e = {}, g++, t[f] = g, m[g] = e), e
                }

                function s(t, i, n) {
                    if (i || (i = e), h) return i.createElement(t);
                    n || (n = o(i));
                    var s;
                    return s = n.cache[t] ? n.cache[t].cloneNode() : d.test(t) ? (n.cache[t] = n.createElem(t)).cloneNode() : n.createElem(t), !s.canHaveChildren || p.test(t) || s.tagUrn ? s : n.frag.appendChild(s)
                }

                function r(t, i) {
                    if (t || (t = e), h) return t.createDocumentFragment();
                    for (var s = (i = i || o(t)).frag.cloneNode(), r = 0, a = n(), l = a.length; r < l; r++) s.createElement(a[r]);
                    return s
                }

                function a(t, e) {
                    e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function (i) {
                        return v.shivMethods ? s(i, t, e) : e.createElem(i)
                    }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-]+/g, function (t) {
                        return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                    }) + ");return n}")(v, e.frag)
                }

                function l(t) {
                    t || (t = e);
                    var n = o(t);
                    return v.shivCSS && !c && !n.hasCSS && (n.hasCSS = !!i(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), h || a(t, n), t
                }
                var c, h, u = t.html5 || {},
                    p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    d = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    f = "_html5shiv",
                    g = 0,
                    m = {};
                ! function () {
                    try {
                        var t = e.createElement("a");
                        t.innerHTML = "<xyz></xyz>", c = "hidden" in t, h = 1 == t.childNodes.length || function () {
                            e.createElement("a");
                            var t = e.createDocumentFragment();
                            return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement
                        }()
                    } catch (t) {
                        c = !0, h = !0
                    }
                }();
                var v = {
                    elements: u.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: "3.7.0",
                    shivCSS: !1 !== u.shivCSS,
                    supportsUnknownElements: h,
                    shivMethods: !1 !== u.shivMethods,
                    type: "default",
                    shivDocument: l,
                    createElement: s,
                    createDocumentFragment: r
                };
                t.html5 = v, l(e)
            }(this, e), u._version = "2.8.3", u._prefixes = m, u._domPrefixes = b, u._cssomPrefixes = y, u.testProp = function (t) {
                return r([t])
            }, u.testAllProps = l, u.testStyles = _, u.prefixed = function (t, e, i) {
                return e ? l(t, e, i) : l(t, "pfx")
            }, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + x.join(" "), u
    }(this, this.document), function (t, e, i) {
        function n(t) {
            return "[object Function]" == m.call(t)
        }

        function o(t) {
            return "string" == typeof t
        }

        function s() {}

        function r(t) {
            return !t || "loaded" == t || "complete" == t || "uninitialized" == t
        }

        function a() {
            var t = v.shift();
            y = 1, t ? t.t ? f(function () {
                ("c" == t.t ? p.injectCss : p.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
            }, 0) : (t(), a()) : y = 0
        }

        function l(t, i, n, o, s, l, c) {
            function h(e) {
                if (!d && r(u.readyState) && (b.r = d = 1, !y && a(), u.onload = u.onreadystatechange = null, e)) {
                    "img" != t && f(function () {
                        x.removeChild(u)
                    }, 50);
                    for (var n in $[i]) $[i].hasOwnProperty(n) && $[i][n].onload()
                }
            }
            var c = c || p.errorTimeout,
                u = e.createElement(t),
                d = 0,
                m = 0,
                b = {
                    t: n,
                    s: i,
                    e: s,
                    a: l,
                    x: c
                };
            1 === $[i] && (m = 1, $[i] = []), "object" == t ? u.data = i : (u.src = i, u.type = t), u.width = u.height = "0", u.onerror = u.onload = u.onreadystatechange = function () {
                h.call(this, m)
            }, v.splice(o, 0, b), "img" != t && (m || 2 === $[i] ? (x.insertBefore(u, w ? null : g), f(h, c)) : $[i].push(u))
        }

        function c(t, e, i, n, s) {
            return y = 0, e = e || "j", o(t) ? l("c" == e ? _ : C, t, e, this.i++, i, n, s) : (v.splice(this.i++, 0, t), 1 == v.length && a()), this
        }

        function h() {
            var t = p;
            return t.loader = {
                load: c,
                i: 0
            }, t
        }
        var u, p, d = e.documentElement,
            f = t.setTimeout,
            g = e.getElementsByTagName("script")[0],
            m = {}.toString,
            v = [],
            y = 0,
            b = "MozAppearance" in d.style,
            w = b && !!e.createRange().compareNode,
            x = w ? d : g.parentNode,
            d = t.opera && "[object Opera]" == m.call(t.opera),
            d = !!e.attachEvent && !d,
            C = b ? "object" : d ? "script" : "img",
            _ = d ? "script" : C,
            T = Array.isArray || function (t) {
                return "[object Array]" == m.call(t)
            },
            E = [],
            $ = {},
            S = {
                timeout: function (t, e) {
                    return e.length && (t.timeout = e[0]), t
                }
            };
        (p = function (t) {
            function e(t) {
                var e, i, n, t = t.split("!"),
                    o = E.length,
                    s = t.pop(),
                    r = t.length,
                    s = {
                        url: s,
                        origUrl: s,
                        prefixes: t
                    };
                for (i = 0; i < r; i++) n = t[i].split("="), (e = S[n.shift()]) && (s = e(s, n));
                for (i = 0; i < o; i++) s = E[i](s);
                return s
            }

            function r(t, o, s, r, a) {
                var l = e(t),
                    c = l.autoCallback;
                l.url.split(".").pop().split("?").shift(), l.bypass || (o && (o = n(o) ? o : o[t] || o[r] || o[t.split("/").pop().split("?")[0]]), l.instead ? l.instead(t, o, s, r, a) : ($[l.url] ? l.noexec = !0 : $[l.url] = 1, s.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : i, l.noexec, l.attrs, l.timeout), (n(o) || n(c)) && s.load(function () {
                    h(), o && o(l.origUrl, a, r), c && c(l.origUrl, a, r), $[l.url] = 2
                })))
            }

            function a(t, e) {
                function i(t, i) {
                    if (t) {
                        if (o(t)) i || (u = function () {
                            var t = [].slice.call(arguments);
                            p.apply(this, t), d()
                        }), r(t, u, e, 0, c);
                        else if (Object(t) === t)
                            for (l in a = function () {
                                    var e, i = 0;
                                    for (e in t) t.hasOwnProperty(e) && i++;
                                    return i
                                }(), t) t.hasOwnProperty(l) && (!i && !--a && (n(u) ? u = function () {
                                var t = [].slice.call(arguments);
                                p.apply(this, t), d()
                            } : u[l] = function (t) {
                                return function () {
                                    var e = [].slice.call(arguments);
                                    t && t.apply(this, e), d()
                                }
                            }(p[l])), r(t[l], u, e, l, c))
                    } else !i && d()
                }
                var a, l, c = !!t.test,
                    h = t.load || t.both,
                    u = t.callback || s,
                    p = u,
                    d = t.complete || s;
                i(c ? t.yep : t.nope, !!h), h && i(h)
            }
            var l, c, u = this.yepnope.loader;
            if (o(t)) r(t, 0, u, 0);
            else if (T(t))
                for (l = 0; l < t.length; l++) c = t[l], o(c) ? r(c, 0, u, 0) : T(c) ? p(c) : Object(c) === c && a(c, u);
            else Object(t) === t && a(t, u)
        }).addPrefix = function (t, e) {
            S[t] = e
        }, p.addFilter = function (t) {
            E.push(t)
        }, p.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", u = function () {
            e.removeEventListener("DOMContentLoaded", u, 0), e.readyState = "complete"
        }, 0)), t.yepnope = h(), t.yepnope.executeStack = a, t.yepnope.injectJs = function (t, i, n, o, l, c) {
            var h, u, d = e.createElement("script"),
                o = o || p.errorTimeout;
            d.src = t;
            for (u in n) d.setAttribute(u, n[u]);
            i = c ? a : i || s, d.onreadystatechange = d.onload = function () {
                !h && r(d.readyState) && (h = 1, i(), d.onload = d.onreadystatechange = null)
            }, f(function () {
                h || (h = 1, i(1))
            }, o), l ? d.onload() : g.parentNode.insertBefore(d, g)
        }, t.yepnope.injectCss = function (t, i, n, o, r, l) {
            var c, o = e.createElement("link"),
                i = l ? a : i || s;
            o.href = t, o.rel = "stylesheet", o.type = "text/css";
            for (c in n) o.setAttribute(c, n[c]);
            r || (g.parentNode.insertBefore(o, g), f(i, 0))
        }
    }(this, document), Modernizr.load = function () {
        yepnope.apply(window, [].slice.call(arguments, 0))
    }, function (t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function (t, e) {
        function i(t) {
            var e = t.length,
                i = K.type(t);
            return "function" !== i && !K.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
        }

        function n(t, e, i) {
            if (K.isFunction(e)) return K.grep(t, function (t, n) {
                return !!e.call(t, n, t) !== i
            });
            if (e.nodeType) return K.grep(t, function (t) {
                return t === e !== i
            });
            if ("string" == typeof e) {
                if (at.test(e)) return K.filter(e, t, i);
                e = K.filter(e, t)
            }
            return K.grep(t, function (t) {
                return Q.call(e, t) >= 0 !== i
            })
        }

        function o(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function s(t) {
            var e = dt[t] = {};
            return K.each(t.match(pt) || [], function (t, i) {
                e[i] = !0
            }), e
        }

        function r() {
            Z.removeEventListener("DOMContentLoaded", r, !1), t.removeEventListener("load", r, !1), K.ready()
        }

        function a() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function () {
                    return {}
                }
            }), this.expando = K.expando + a.uid++
        }

        function l(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(bt, "-$1").toLowerCase(), "string" == typeof (i = t.getAttribute(n))) {
                    try {
                        i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : yt.test(i) ? K.parseJSON(i) : i)
                    } catch (t) {}
                    vt.set(t, e, i)
                } else i = void 0;
            return i
        }

        function c() {
            return !0
        }

        function h() {
            return !1
        }

        function u() {
            try {
                return Z.activeElement
            } catch (t) {}
        }

        function p(t, e) {
            return K.nodeName(t, "table") && K.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function d(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function f(t) {
            var e = jt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function g(t, e) {
            for (var i = 0, n = t.length; n > i; i++) mt.set(t[i], "globalEval", !e || mt.get(e[i], "globalEval"))
        }

        function m(t, e) {
            var i, n, o, s, r, a, l, c;
            if (1 === e.nodeType) {
                if (mt.hasData(t) && (s = mt.access(t), r = mt.set(e, s), c = s.events)) {
                    delete r.handle, r.events = {};
                    for (o in c)
                        for (i = 0, n = c[o].length; n > i; i++) K.event.add(e, o, c[o][i])
                }
                vt.hasData(t) && (a = vt.access(t), l = K.extend({}, a), vt.set(e, l))
            }
        }

        function v(t, e) {
            var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && K.nodeName(t, e) ? K.merge([t], i) : i
        }

        function y(t, e) {
            var i = e.nodeName.toLowerCase();
            "input" === i && _t.test(t.type) ? e.checked = t.checked : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
        }

        function b(e, i) {
            var n, o = K(i.createElement(e)).appendTo(i.body),
                s = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(o[0])) ? n.display : K.css(o[0], "display");
            return o.detach(), s
        }

        function w(t) {
            var e = Z,
                i = Ft[t];
            return i || ("none" !== (i = b(t, e)) && i || (Rt = (Rt || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), (e = Rt[0].contentDocument).write(), e.close(), i = b(t, e), Rt.detach()), Ft[t] = i), i
        }

        function x(t, e, i) {
            var n, o, s, r, a = t.style;
            return (i = i || Ht(t)) && (r = i.getPropertyValue(e) || i[e]), i && ("" !== r || K.contains(t.ownerDocument, t) || (r = K.style(t, e)), Wt.test(r) && Mt.test(e) && (n = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = o, a.maxWidth = s)), void 0 !== r ? r + "" : r
        }

        function C(t, e) {
            return {
                get: function () {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function _(t, e) {
            if (e in t) return e;
            for (var i = e[0].toUpperCase() + e.slice(1), n = e, o = Xt.length; o--;)
                if ((e = Xt[o] + i) in t) return e;
            return n
        }

        function T(t, e, i) {
            var n = Bt.exec(e);
            return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
        }

        function E(t, e, i, n, o) {
            for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > s; s += 2) "margin" === i && (r += K.css(t, i + xt[s], !0, o)), n ? ("content" === i && (r -= K.css(t, "padding" + xt[s], !0, o)), "margin" !== i && (r -= K.css(t, "border" + xt[s] + "Width", !0, o))) : (r += K.css(t, "padding" + xt[s], !0, o), "padding" !== i && (r += K.css(t, "border" + xt[s] + "Width", !0, o)));
            return r
        }

        function $(t, e, i) {
            var n = !0,
                o = "width" === e ? t.offsetWidth : t.offsetHeight,
                s = Ht(t),
                r = "border-box" === K.css(t, "boxSizing", !1, s);
            if (0 >= o || null == o) {
                if ((0 > (o = x(t, e, s)) || null == o) && (o = t.style[e]), Wt.test(o)) return o;
                n = r && (G.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
            }
            return o + E(t, e, i || (r ? "border" : "content"), n, s) + "px"
        }

        function S(t, e) {
            for (var i, n, o, s = [], r = 0, a = t.length; a > r; r++)(n = t[r]).style && (s[r] = mt.get(n, "olddisplay"), i = n.style.display, e ? (s[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && Ct(n) && (s[r] = mt.access(n, "olddisplay", w(n.nodeName)))) : (o = Ct(n), "none" === i && o || mt.set(n, "olddisplay", o ? i : K.css(n, "display"))));
            for (r = 0; a > r; r++)(n = t[r]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[r] || "" : "none"));
            return t
        }

        function k(t, e, i, n, o) {
            return new k.prototype.init(t, e, i, n, o)
        }

        function L() {
            return setTimeout(function () {
                Yt = void 0
            }), Yt = K.now()
        }

        function A(t, e) {
            var i, n = 0,
                o = {
                    height: t
                };
            for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = xt[n], o["margin" + i] = o["padding" + i] = t;
            return e && (o.opacity = o.width = t), o
        }

        function O(t, e, i) {
            for (var n, o = (ee[e] || []).concat(ee["*"]), s = 0, r = o.length; r > s; s++)
                if (n = o[s].call(i, e, t)) return n
        }

        function D(t, e, i) {
            var n, o, s, r, a, l, c, h = this,
                u = {},
                p = t.style,
                d = t.nodeType && Ct(t),
                f = mt.get(t, "fxshow");
            i.queue || (null == (a = K._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                a.unqueued || l()
            }), a.unqueued++, h.always(function () {
                h.always(function () {
                    a.unqueued--, K.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], c = K.css(t, "display"), "inline" === ("none" === c ? mt.get(t, "olddisplay") || w(t.nodeName) : c) && "none" === K.css(t, "float") && (p.display = "inline-block")), i.overflow && (p.overflow = "hidden", h.always(function () {
                p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
            }));
            for (n in e)
                if (o = e[n], Zt.exec(o)) {
                    if (delete e[n], s = s || "toggle" === o, o === (d ? "hide" : "show")) {
                        if ("show" !== o || !f || void 0 === f[n]) continue;
                        d = !0
                    }
                    u[n] = f && f[n] || K.style(t, n)
                } else c = void 0;
            if (K.isEmptyObject(u)) "inline" === ("none" === c ? w(t.nodeName) : c) && (p.display = c);
            else {
                f ? "hidden" in f && (d = f.hidden) : f = mt.access(t, "fxshow", {}), s && (f.hidden = !d), d ? K(t).show() : h.done(function () {
                    K(t).hide()
                }), h.done(function () {
                    var e;
                    mt.remove(t, "fxshow");
                    for (e in u) K.style(t, e, u[e])
                });
                for (n in u) r = O(d ? f[n] : 0, n, h), n in f || (f[n] = r.start, d && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
            }
        }

        function N(t, e) {
            var i, n, o, s, r;
            for (i in t)
                if (n = K.camelCase(i), o = e[n], s = t[i], K.isArray(s) && (o = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), (r = K.cssHooks[n]) && "expand" in r) {
                    s = r.expand(s), delete t[n];
                    for (i in s) i in t || (t[i] = s[i], e[i] = o)
                } else e[n] = o
        }

        function I(t, e, i) {
            var n, o, s = 0,
                r = te.length,
                a = K.Deferred().always(function () {
                    delete l.elem
                }),
                l = function () {
                    if (o) return !1;
                    for (var e = Yt || L(), i = Math.max(0, c.startTime + c.duration - e), n = 1 - (i / c.duration || 0), s = 0, r = c.tweens.length; r > s; s++) c.tweens[s].run(n);
                    return a.notifyWith(t, [c, n, i]), 1 > n && r ? i : (a.resolveWith(t, [c]), !1)
                },
                c = a.promise({
                    elem: t,
                    props: K.extend({}, e),
                    opts: K.extend(!0, {
                        specialEasing: {}
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: Yt || L(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function (e, i) {
                        var n = K.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(n), n
                    },
                    stop: function (e) {
                        var i = 0,
                            n = e ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n > i; i++) c.tweens[i].run(1);
                        return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
                    }
                }),
                h = c.props;
            for (N(h, c.opts.specialEasing); r > s; s++)
                if (n = te[s].call(c, t, h, c.opts)) return n;
            return K.map(h, O, c), K.isFunction(c.opts.start) && c.opts.start.call(t, c), K.fx.timer(K.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function j(t) {
            return function (e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, o = 0,
                    s = e.toLowerCase().match(pt) || [];
                if (K.isFunction(i))
                    for (; n = s[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function z(t, e, i, n) {
            function o(a) {
                var l;
                return s[a] = !0, K.each(t[a] || [], function (t, a) {
                    var c = a(e, i, n);
                    return "string" != typeof c || r || s[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
                }), l
            }
            var s = {},
                r = t === ve;
            return o(e.dataTypes[0]) || !s["*"] && o("*")
        }

        function P(t, e) {
            var i, n, o = K.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
            return n && K.extend(!0, t, n), t
        }

        function R(t, e, i) {
            for (var n, o, s, r, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
            if (n)
                for (o in a)
                    if (a[o] && a[o].test(n)) {
                        l.unshift(o);
                        break
                    }
            if (l[0] in i) s = l[0];
            else {
                for (o in i) {
                    if (!l[0] || t.converters[o + " " + l[0]]) {
                        s = o;
                        break
                    }
                    r || (r = o)
                }
                s = s || r
            }
            return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
        }

        function F(t, e, i, n) {
            var o, s, r, a, l, c = {},
                h = t.dataTypes.slice();
            if (h[1])
                for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
            for (s = h.shift(); s;)
                if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = h.shift())
                    if ("*" === s) s = l;
                    else if ("*" !== l && l !== s) {
                if (!(r = c[l + " " + s] || c["* " + s]))
                    for (o in c)
                        if ((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                            !0 === r ? r = c[o] : !0 !== c[o] && (s = a[0], h.unshift(a[1]));
                            break
                        }
                if (!0 !== r)
                    if (r && t.throws) e = r(e);
                    else try {
                        e = r(e)
                    } catch (t) {
                        return {
                            state: "parsererror",
                            error: r ? t : "No conversion from " + l + " to " + s
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function M(t, e, i, n) {
            var o;
            if (K.isArray(e)) K.each(e, function (e, o) {
                i || Ce.test(t) ? n(t, o) : M(t + "[" + ("object" == typeof o ? e : "") + "]", o, i, n)
            });
            else if (i || "object" !== K.type(e)) n(t, e);
            else
                for (o in e) M(t + "[" + o + "]", e[o], i, n)
        }

        function W(t) {
            return K.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var H = [],
            q = H.slice,
            B = H.concat,
            U = H.push,
            Q = H.indexOf,
            V = {},
            X = V.toString,
            Y = V.hasOwnProperty,
            G = {},
            Z = t.document,
            J = "2.1.3",
            K = function (t, e) {
                return new K.fn.init(t, e)
            },
            tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            et = /^-ms-/,
            it = /-([\da-z])/gi,
            nt = function (t, e) {
                return e.toUpperCase()
            };
        K.fn = K.prototype = {
            jquery: J,
            constructor: K,
            selector: "",
            length: 0,
            toArray: function () {
                return q.call(this)
            },
            get: function (t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : q.call(this)
            },
            pushStack: function (t) {
                var e = K.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function (t, e) {
                return K.each(this, t, e)
            },
            map: function (t) {
                return this.pushStack(K.map(this, function (e, i) {
                    return t.call(e, i, e)
                }))
            },
            slice: function () {
                return this.pushStack(q.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (t) {
                var e = this.length,
                    i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor(null)
            },
            push: U,
            sort: H.sort,
            splice: H.splice
        }, K.extend = K.fn.extend = function () {
            var t, e, i, n, o, s, r = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || K.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
                if (null != (t = arguments[a]))
                    for (e in t) i = r[e], n = t[e], r !== n && (c && n && (K.isPlainObject(n) || (o = K.isArray(n))) ? (o ? (o = !1, s = i && K.isArray(i) ? i : []) : s = i && K.isPlainObject(i) ? i : {}, r[e] = K.extend(c, s, n)) : void 0 !== n && (r[e] = n));
            return r
        }, K.extend({
            expando: "jQuery" + (J + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
                throw new Error(t)
            },
            noop: function () {},
            isFunction: function (t) {
                return "function" === K.type(t)
            },
            isArray: Array.isArray,
            isWindow: function (t) {
                return null != t && t === t.window
            },
            isNumeric: function (t) {
                return !K.isArray(t) && t - parseFloat(t) + 1 >= 0
            },
            isPlainObject: function (t) {
                return "object" === K.type(t) && !t.nodeType && !K.isWindow(t) && !(t.constructor && !Y.call(t.constructor.prototype, "isPrototypeOf"))
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? V[X.call(t)] || "object" : typeof t
            },
            globalEval: function (t) {
                var e, i = eval;
                (t = K.trim(t)) && (1 === t.indexOf("use strict") ? (e = Z.createElement("script"), e.text = t, Z.head.appendChild(e).parentNode.removeChild(e)) : i(t))
            },
            camelCase: function (t) {
                return t.replace(et, "ms-").replace(it, nt)
            },
            nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function (t, e, n) {
                var o = 0,
                    s = t.length,
                    r = i(t);
                if (n) {
                    if (r)
                        for (; s > o && !1 !== e.apply(t[o], n); o++);
                    else
                        for (o in t)
                            if (!1 === e.apply(t[o], n)) break
                } else if (r)
                    for (; s > o && !1 !== e.call(t[o], o, t[o]); o++);
                else
                    for (o in t)
                        if (!1 === e.call(t[o], o, t[o])) break;
                return t
            },
            trim: function (t) {
                return null == t ? "" : (t + "").replace(tt, "")
            },
            makeArray: function (t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? K.merge(n, "string" == typeof t ? [t] : t) : U.call(n, t)), n
            },
            inArray: function (t, e, i) {
                return null == e ? -1 : Q.call(e, t, i)
            },
            merge: function (t, e) {
                for (var i = +e.length, n = 0, o = t.length; i > n; n++) t[o++] = e[n];
                return t.length = o, t
            },
            grep: function (t, e, i) {
                for (var n = [], o = 0, s = t.length, r = !i; s > o; o++) !e(t[o], o) !== r && n.push(t[o]);
                return n
            },
            map: function (t, e, n) {
                var o, s = 0,
                    r = t.length,
                    a = [];
                if (i(t))
                    for (; r > s; s++) null != (o = e(t[s], s, n)) && a.push(o);
                else
                    for (s in t) null != (o = e(t[s], s, n)) && a.push(o);
                return B.apply([], a)
            },
            guid: 1,
            proxy: function (t, e) {
                var i, n, o;
                return "string" == typeof e && (i = t[e], e = t, t = i), K.isFunction(t) ? (n = q.call(arguments, 2), o = function () {
                    return t.apply(e || this, n.concat(q.call(arguments)))
                }, o.guid = t.guid = t.guid || K.guid++, o) : void 0
            },
            now: Date.now,
            support: G
        }), K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
            V["[object " + e + "]"] = e.toLowerCase()
        });
        var ot = function (t) {
            function e(t, e, i, n) {
                var o, s, r, a, c, u, p, d, f, g;
                if ((e ? e.ownerDocument || e : R) !== A && L(e), e = e || A, i = i || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
                if (!n && D) {
                    if (11 !== a && (o = mt.exec(t)))
                        if (r = o[1]) {
                            if (9 === a) {
                                if (!(s = e.getElementById(r)) || !s.parentNode) return i;
                                if (s.id === r) return i.push(s), i
                            } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(r)) && z(e, s) && s.id === r) return i.push(s), i
                        } else {
                            if (o[2]) return G.apply(i, e.getElementsByTagName(t)), i;
                            if ((r = o[3]) && b.getElementsByClassName) return G.apply(i, e.getElementsByClassName(r)), i
                        }
                    if (b.qsa && (!N || !N.test(t))) {
                        if (d = p = P, f = e, g = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (u = _(t), (p = e.getAttribute("id")) ? d = p.replace(yt, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", c = u.length; c--;) u[c] = d + h(u[c]);
                            f = vt.test(t) && l(e.parentNode) || e, g = u.join(",")
                        }
                        if (g) try {
                            return G.apply(i, f.querySelectorAll(g)), i
                        } catch (t) {} finally {
                            p || e.removeAttribute("id")
                        }
                    }
                }
                return E(t.replace(rt, "$1"), e, i, n)
            }

            function i() {
                function t(i, n) {
                    return e.push(i + " ") > w.cacheLength && delete t[e.shift()], t[i + " "] = n
                }
                var e = [];
                return t
            }

            function n(t) {
                return t[P] = !0, t
            }

            function o(t) {
                var e = A.createElement("div");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function s(t, e) {
                for (var i = t.split("|"), n = t.length; n--;) w.attrHandle[i[n]] = e
            }

            function r(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return n(function (e) {
                    return e = +e, n(function (i, n) {
                        for (var o, s = t([], i.length, e), r = s.length; r--;) i[o = s[r]] && (i[o] = !(n[o] = i[o]))
                    })
                })
            }

            function l(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }

            function c() {}

            function h(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n
            }

            function u(t, e, i) {
                var n = e.dir,
                    o = i && "parentNode" === n,
                    s = M++;
                return e.first ? function (e, i, s) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || o) return t(e, i, s)
                } : function (e, i, r) {
                    var a, l, c = [F, s];
                    if (r) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || o) && t(e, i, r)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || o) {
                                if (l = e[P] || (e[P] = {}), (a = l[n]) && a[0] === F && a[1] === s) return c[2] = a[2];
                                if (l[n] = c, c[2] = t(e, i, r)) return !0
                            }
                }
            }

            function p(t) {
                return t.length > 1 ? function (e, i, n) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function d(t, i, n) {
                for (var o = 0, s = i.length; s > o; o++) e(t, i[o], n);
                return n
            }

            function f(t, e, i, n, o) {
                for (var s, r = [], a = 0, l = t.length, c = null != e; l > a; a++)(s = t[a]) && (!i || i(s, n, o)) && (r.push(s), c && e.push(a));
                return r
            }

            function g(t, e, i, o, s, r) {
                return o && !o[P] && (o = g(o)), s && !s[P] && (s = g(s, r)), n(function (n, r, a, l) {
                    var c, h, u, p = [],
                        g = [],
                        m = r.length,
                        v = n || d(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !n && e ? v : f(v, p, t, a, l),
                        b = i ? s || (n ? t : m || o) ? [] : r : y;
                    if (i && i(y, b, a, l), o)
                        for (c = f(b, g), o(c, [], a, l), h = c.length; h--;)(u = c[h]) && (b[g[h]] = !(y[g[h]] = u));
                    if (n) {
                        if (s || t) {
                            if (s) {
                                for (c = [], h = b.length; h--;)(u = b[h]) && c.push(y[h] = u);
                                s(null, b = [], c, l)
                            }
                            for (h = b.length; h--;)(u = b[h]) && (c = s ? J(n, u) : p[h]) > -1 && (n[c] = !(r[c] = u))
                        }
                    } else b = f(b === r ? b.splice(m, b.length) : b), s ? s(null, r, b, l) : G.apply(r, b)
                })
            }

            function m(t) {
                for (var e, i, n, o = t.length, s = w.relative[t[0].type], r = s || w.relative[" "], a = s ? 1 : 0, l = u(function (t) {
                        return t === e
                    }, r, !0), c = u(function (t) {
                        return J(e, t) > -1
                    }, r, !0), d = [function (t, i, n) {
                        var o = !s && (n || i !== $) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                        return e = null, o
                    }]; o > a; a++)
                    if (i = w.relative[t[a].type]) d = [u(p(d), i)];
                    else {
                        if ((i = w.filter[t[a].type].apply(null, t[a].matches))[P]) {
                            for (n = ++a; o > n && !w.relative[t[n].type]; n++);
                            return g(a > 1 && p(d), a > 1 && h(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(rt, "$1"), i, n > a && m(t.slice(a, n)), o > n && m(t = t.slice(n)), o > n && h(t))
                        }
                        d.push(i)
                    }
                return p(d)
            }

            function v(t, i) {
                var o = i.length > 0,
                    s = t.length > 0,
                    r = function (n, r, a, l, c) {
                        var h, u, p, d = 0,
                            g = "0",
                            m = n && [],
                            v = [],
                            y = $,
                            b = n || s && w.find.TAG("*", c),
                            x = F += null == y ? 1 : Math.random() || .1,
                            C = b.length;
                        for (c && ($ = r !== A && r); g !== C && null != (h = b[g]); g++) {
                            if (s && h) {
                                for (u = 0; p = t[u++];)
                                    if (p(h, r, a)) {
                                        l.push(h);
                                        break
                                    }
                                c && (F = x)
                            }
                            o && ((h = !p && h) && d--, n && m.push(h))
                        }
                        if (d += g, o && g !== d) {
                            for (u = 0; p = i[u++];) p(m, v, r, a);
                            if (n) {
                                if (d > 0)
                                    for (; g--;) m[g] || v[g] || (v[g] = X.call(l));
                                v = f(v)
                            }
                            G.apply(l, v), c && !n && v.length > 0 && d + i.length > 1 && e.uniqueSort(l)
                        }
                        return c && (F = x, $ = y), m
                    };
                return o ? n(r) : r
            }
            var y, b, w, x, C, _, T, E, $, S, k, L, A, O, D, N, I, j, z, P = "sizzle" + 1 * new Date,
                R = t.document,
                F = 0,
                M = 0,
                W = i(),
                H = i(),
                q = i(),
                B = function (t, e) {
                    return t === e && (k = !0), 0
                },
                U = 1 << 31,
                Q = {}.hasOwnProperty,
                V = [],
                X = V.pop,
                Y = V.push,
                G = V.push,
                Z = V.slice,
                J = function (t, e) {
                    for (var i = 0, n = t.length; n > i; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                tt = "[\\x20\\t\\r\\n\\f]",
                et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                it = et.replace("w", "w#"),
                nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + tt + "*\\]",
                ot = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)",
                st = new RegExp(tt + "+", "g"),
                rt = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
                at = new RegExp("^" + tt + "*," + tt + "*"),
                lt = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
                ct = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
                ht = new RegExp(ot),
                ut = new RegExp("^" + it + "$"),
                pt = {
                    ID: new RegExp("^#(" + et + ")"),
                    CLASS: new RegExp("^\\.(" + et + ")"),
                    TAG: new RegExp("^(" + et.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + nt),
                    PSEUDO: new RegExp("^" + ot),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + K + ")$", "i"),
                    needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
                },
                dt = /^(?:input|select|textarea|button)$/i,
                ft = /^h\d$/i,
                gt = /^[^{]+\{\s*\[native \w/,
                mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                vt = /[+~]/,
                yt = /'|\\/g,
                bt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
                wt = function (t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                },
                xt = function () {
                    L()
                };
            try {
                G.apply(V = Z.call(R.childNodes), R.childNodes), V[R.childNodes.length].nodeType
            } catch (t) {
                G = {
                    apply: V.length ? function (t, e) {
                        Y.apply(t, Z.call(e))
                    } : function (t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }
            b = e.support = {}, C = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, L = e.setDocument = function (t) {
                var e, i, n = t ? t.ownerDocument || t : R;
                return n !== A && 9 === n.nodeType && n.documentElement ? (A = n, O = n.documentElement, (i = n.defaultView) && i !== i.top && (i.addEventListener ? i.addEventListener("unload", xt, !1) : i.attachEvent && i.attachEvent("onunload", xt)), D = !C(n), b.attributes = o(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), b.getElementsByTagName = o(function (t) {
                    return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                }), b.getElementsByClassName = gt.test(n.getElementsByClassName), b.getById = o(function (t) {
                    return O.appendChild(t).id = P, !n.getElementsByName || !n.getElementsByName(P).length
                }), b.getById ? (w.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && D) {
                        var i = e.getElementById(t);
                        return i && i.parentNode ? [i] : []
                    }
                }, w.filter.ID = function (t) {
                    var e = t.replace(bt, wt);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete w.find.ID, w.filter.ID = function (t) {
                    var e = t.replace(bt, wt);
                    return function (t) {
                        var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), w.find.TAG = b.getElementsByTagName ? function (t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var i, n = [],
                        o = 0,
                        s = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = s[o++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return s
                }, w.find.CLASS = b.getElementsByClassName && function (t, e) {
                    return D ? e.getElementsByClassName(t) : void 0
                }, I = [], N = [], (b.qsa = gt.test(n.querySelectorAll)) && (o(function (t) {
                    O.appendChild(t).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || N.push("\\[" + tt + "*(?:value|" + K + ")"), t.querySelectorAll("[id~=" + P + "-]").length || N.push("~="), t.querySelectorAll(":checked").length || N.push(":checked"), t.querySelectorAll("a#" + P + "+*").length || N.push(".#.+[+~]")
                }), o(function (t) {
                    var e = n.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && N.push("name" + tt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), N.push(",.*:")
                })), (b.matchesSelector = gt.test(j = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function (t) {
                    b.disconnectedMatch = j.call(t, "div"), j.call(t, "[s!='']:x"), I.push("!=", ot)
                }), N = N.length && new RegExp(N.join("|")), I = I.length && new RegExp(I.join("|")), e = gt.test(O.compareDocumentPosition), z = e || gt.test(O.contains) ? function (t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function (t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, B = e ? function (t, e) {
                    if (t === e) return k = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i || (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !b.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === R && z(R, t) ? -1 : e === n || e.ownerDocument === R && z(R, e) ? 1 : S ? J(S, t) - J(S, e) : 0 : 4 & i ? -1 : 1)
                } : function (t, e) {
                    if (t === e) return k = !0, 0;
                    var i, o = 0,
                        s = t.parentNode,
                        a = e.parentNode,
                        l = [t],
                        c = [e];
                    if (!s || !a) return t === n ? -1 : e === n ? 1 : s ? -1 : a ? 1 : S ? J(S, t) - J(S, e) : 0;
                    if (s === a) return r(t, e);
                    for (i = t; i = i.parentNode;) l.unshift(i);
                    for (i = e; i = i.parentNode;) c.unshift(i);
                    for (; l[o] === c[o];) o++;
                    return o ? r(l[o], c[o]) : l[o] === R ? -1 : c[o] === R ? 1 : 0
                }, n) : A
            }, e.matches = function (t, i) {
                return e(t, null, null, i)
            }, e.matchesSelector = function (t, i) {
                if ((t.ownerDocument || t) !== A && L(t), i = i.replace(ct, "='$1']"), !(!b.matchesSelector || !D || I && I.test(i) || N && N.test(i))) try {
                    var n = j.call(t, i);
                    if (n || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (t) {}
                return e(i, A, null, [t]).length > 0
            }, e.contains = function (t, e) {
                return (t.ownerDocument || t) !== A && L(t), z(t, e)
            }, e.attr = function (t, e) {
                (t.ownerDocument || t) !== A && L(t);
                var i = w.attrHandle[e.toLowerCase()],
                    n = i && Q.call(w.attrHandle, e.toLowerCase()) ? i(t, e, !D) : void 0;
                return void 0 !== n ? n : b.attributes || !D ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function (t) {
                var e, i = [],
                    n = 0,
                    o = 0;
                if (k = !b.detectDuplicates, S = !b.sortStable && t.slice(0), t.sort(B), k) {
                    for (; e = t[o++];) e === t[o] && (n = i.push(o));
                    for (; n--;) t.splice(i[n], 1)
                }
                return S = null, t
            }, x = e.getText = function (t) {
                var e, i = "",
                    n = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += x(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[n++];) i += x(e);
                return i
            }, (w = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: pt,
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
                    ATTR: function (t) {
                        return t[1] = t[1].replace(bt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function (t) {
                        var e, i = !t[6] && t[2];
                        return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ht.test(i) && (e = _(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(bt, wt).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function (t) {
                        var e = W[t + " "];
                        return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && W(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (t, i, n) {
                        return function (o) {
                            var s = e.attr(o, t);
                            return null == s ? "!=" === i : !i || (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(st, " ") + " ").indexOf(n) > -1 : "|=" === i && (s === n || s.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function (t, e, i, n, o) {
                        var s = "nth" !== t.slice(0, 3),
                            r = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === o ? function (t) {
                            return !!t.parentNode
                        } : function (e, i, l) {
                            var c, h, u, p, d, f, g = s !== r ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a;
                            if (m) {
                                if (s) {
                                    for (; g;) {
                                        for (u = e; u = u[g];)
                                            if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                        f = g = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [r ? m.firstChild : m.lastChild], r && y) {
                                    for (d = (c = (h = m[P] || (m[P] = {}))[t] || [])[0] === F && c[1], p = c[0] === F && c[2], u = d && m.childNodes[d]; u = ++d && u && u[g] || (p = d = 0) || f.pop();)
                                        if (1 === u.nodeType && ++p && u === e) {
                                            h[t] = [F, d, p];
                                            break
                                        }
                                } else if (y && (c = (e[P] || (e[P] = {}))[t]) && c[0] === F) p = c[1];
                                else
                                    for (;
                                        (u = ++d && u && u[g] || (p = d = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++p || (y && ((u[P] || (u[P] = {}))[t] = [F, p]), u !== e)););
                                return (p -= o) === n || p % n == 0 && p / n >= 0
                            }
                        }
                    },
                    PSEUDO: function (t, i) {
                        var o, s = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return s[P] ? s(i) : s.length > 1 ? (o = [t, t, "", i], w.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
                            for (var n, o = s(t, i), r = o.length; r--;) n = J(t, o[r]), t[n] = !(e[n] = o[r])
                        }) : function (t) {
                            return s(t, 0, o)
                        }) : s
                    }
                },
                pseudos: {
                    not: n(function (t) {
                        var e = [],
                            i = [],
                            o = T(t.replace(rt, "$1"));
                        return o[P] ? n(function (t, e, i, n) {
                            for (var s, r = o(t, null, n, []), a = t.length; a--;)(s = r[a]) && (t[a] = !(e[a] = s))
                        }) : function (t, n, s) {
                            return e[0] = t, o(e, null, s, i), e[0] = null, !i.pop()
                        }
                    }),
                    has: n(function (t) {
                        return function (i) {
                            return e(t, i).length > 0
                        }
                    }),
                    contains: n(function (t) {
                        return t = t.replace(bt, wt),
                            function (e) {
                                return (e.textContent || e.innerText || x(e)).indexOf(t) > -1
                            }
                    }),
                    lang: n(function (t) {
                        return ut.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, wt).toLowerCase(),
                            function (e) {
                                var i;
                                do {
                                    if (i = D ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function (t) {
                        return t === O
                    },
                    focus: function (t) {
                        return t === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function (t) {
                        return !1 === t.disabled
                    },
                    disabled: function (t) {
                        return !0 === t.disabled
                    },
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (t) {
                        return !w.pseudos.empty(t)
                    },
                    header: function (t) {
                        return ft.test(t.nodeName)
                    },
                    input: function (t) {
                        return dt.test(t.nodeName)
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: a(function () {
                        return [0]
                    }),
                    last: a(function (t, e) {
                        return [e - 1]
                    }),
                    eq: a(function (t, e, i) {
                        return [0 > i ? i + e : i]
                    }),
                    even: a(function (t, e) {
                        for (var i = 0; e > i; i += 2) t.push(i);
                        return t
                    }),
                    odd: a(function (t, e) {
                        for (var i = 1; e > i; i += 2) t.push(i);
                        return t
                    }),
                    lt: a(function (t, e, i) {
                        for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }),
                    gt: a(function (t, e, i) {
                        for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }).pseudos.nth = w.pseudos.eq;
            for (y in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) w.pseudos[y] = function (t) {
                return function (e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(y);
            for (y in {
                    submit: !0,
                    reset: !0
                }) w.pseudos[y] = function (t) {
                return function (e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }(y);
            return c.prototype = w.filters = w.pseudos, w.setFilters = new c, _ = e.tokenize = function (t, i) {
                var n, o, s, r, a, l, c, h = H[t + " "];
                if (h) return i ? 0 : h.slice(0);
                for (a = t, l = [], c = w.preFilter; a;) {
                    (!n || (o = at.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(s = [])), n = !1, (o = lt.exec(a)) && (n = o.shift(), s.push({
                        value: n,
                        type: o[0].replace(rt, " ")
                    }), a = a.slice(n.length));
                    for (r in w.filter) !(o = pt[r].exec(a)) || c[r] && !(o = c[r](o)) || (n = o.shift(), s.push({
                        value: n,
                        type: r,
                        matches: o
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return i ? a.length : a ? e.error(t) : H(t, l).slice(0)
            }, T = e.compile = function (t, e) {
                var i, n = [],
                    o = [],
                    s = q[t + " "];
                if (!s) {
                    for (e || (e = _(t)), i = e.length; i--;) s = m(e[i]), s[P] ? n.push(s) : o.push(s);
                    (s = q(t, v(o, n))).selector = t
                }
                return s
            }, E = e.select = function (t, e, i, n) {
                var o, s, r, a, c, u = "function" == typeof t && t,
                    p = !n && _(t = u.selector || t);
                if (i = i || [], 1 === p.length) {
                    if ((s = p[0] = p[0].slice(0)).length > 2 && "ID" === (r = s[0]).type && b.getById && 9 === e.nodeType && D && w.relative[s[1].type]) {
                        if (!(e = (w.find.ID(r.matches[0].replace(bt, wt), e) || [])[0])) return i;
                        u && (e = e.parentNode), t = t.slice(s.shift().value.length)
                    }
                    for (o = pt.needsContext.test(t) ? 0 : s.length; o-- && (r = s[o], !w.relative[a = r.type]);)
                        if ((c = w.find[a]) && (n = c(r.matches[0].replace(bt, wt), vt.test(s[0].type) && l(e.parentNode) || e))) {
                            if (s.splice(o, 1), !(t = n.length && h(s))) return G.apply(i, n), i;
                            break
                        }
                }
                return (u || T(t, p))(n, e, !D, i, vt.test(t) && l(e.parentNode) || e), i
            }, b.sortStable = P.split("").sort(B).join("") === P, b.detectDuplicates = !!k, L(), b.sortDetached = o(function (t) {
                return 1 & t.compareDocumentPosition(A.createElement("div"))
            }), o(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || s("type|href|height|width", function (t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), b.attributes && o(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || s("value", function (t, e, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), o(function (t) {
                return null == t.getAttribute("disabled")
            }) || s(K, function (t, e, i) {
                var n;
                return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), e
        }(t);
        K.find = ot, K.expr = ot.selectors, K.expr[":"] = K.expr.pseudos, K.unique = ot.uniqueSort, K.text = ot.getText, K.isXMLDoc = ot.isXML, K.contains = ot.contains;
        var st = K.expr.match.needsContext,
            rt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            at = /^.[^:#\[\.,]*$/;
        K.filter = function (t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? K.find.matchesSelector(n, t) ? [n] : [] : K.find.matches(t, K.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, K.fn.extend({
            find: function (t) {
                var e, i = this.length,
                    n = [],
                    o = this;
                if ("string" != typeof t) return this.pushStack(K(t).filter(function () {
                    for (e = 0; i > e; e++)
                        if (K.contains(o[e], this)) return !0
                }));
                for (e = 0; i > e; e++) K.find(t, o[e], n);
                return n = this.pushStack(i > 1 ? K.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function (t) {
                return this.pushStack(n(this, t || [], !1))
            },
            not: function (t) {
                return this.pushStack(n(this, t || [], !0))
            },
            is: function (t) {
                return !!n(this, "string" == typeof t && st.test(t) ? K(t) : t || [], !1).length
            }
        });
        var lt, ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (K.fn.init = function (t, e) {
            var i, n;
            if (!t) return this;
            if ("string" == typeof t) {
                if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ct.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || lt).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof K ? e[0] : e, K.merge(this, K.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Z, !0)), rt.test(i[1]) && K.isPlainObject(e))
                        for (i in e) K.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return (n = Z.getElementById(i[2])) && n.parentNode && (this.length = 1, this[0] = n), this.context = Z, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : K.isFunction(t) ? void 0 !== lt.ready ? lt.ready(t) : t(K) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), K.makeArray(t, this))
        }).prototype = K.fn, lt = K(Z);
        var ht = /^(?:parents|prev(?:Until|All))/,
            ut = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        K.extend({
            dir: function (t, e, i) {
                for (var n = [], o = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (o && K(t).is(i)) break;
                        n.push(t)
                    }
                return n
            },
            sibling: function (t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            }
        }), K.fn.extend({
            has: function (t) {
                var e = K(t, this),
                    i = e.length;
                return this.filter(function () {
                    for (var t = 0; i > t; t++)
                        if (K.contains(this, e[t])) return !0
                })
            },
            closest: function (t, e) {
                for (var i, n = 0, o = this.length, s = [], r = st.test(t) || "string" != typeof t ? K(t, e || this.context) : 0; o > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && K.find.matchesSelector(i, t))) {
                            s.push(i);
                            break
                        }
                return this.pushStack(s.length > 1 ? K.unique(s) : s)
            },
            index: function (t) {
                return t ? "string" == typeof t ? Q.call(K(t), this[0]) : Q.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (t, e) {
                return this.pushStack(K.unique(K.merge(this.get(), K(t, e))))
            },
            addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), K.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function (t) {
                return K.dir(t, "parentNode")
            },
            parentsUntil: function (t, e, i) {
                return K.dir(t, "parentNode", i)
            },
            next: function (t) {
                return o(t, "nextSibling")
            },
            prev: function (t) {
                return o(t, "previousSibling")
            },
            nextAll: function (t) {
                return K.dir(t, "nextSibling")
            },
            prevAll: function (t) {
                return K.dir(t, "previousSibling")
            },
            nextUntil: function (t, e, i) {
                return K.dir(t, "nextSibling", i)
            },
            prevUntil: function (t, e, i) {
                return K.dir(t, "previousSibling", i)
            },
            siblings: function (t) {
                return K.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function (t) {
                return K.sibling(t.firstChild)
            },
            contents: function (t) {
                return t.contentDocument || K.merge([], t.childNodes)
            }
        }, function (t, e) {
            K.fn[t] = function (i, n) {
                var o = K.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = K.filter(n, o)), this.length > 1 && (ut[t] || K.unique(o), ht.test(t) && o.reverse()), this.pushStack(o)
            }
        });
        var pt = /\S+/g,
            dt = {};
        K.Callbacks = function (t) {
            var e, i, n, o, r, a, l = [],
                c = !(t = "string" == typeof t ? dt[t] || s(t) : K.extend({}, t)).once && [],
                h = function (s) {
                    for (e = t.memory && s, i = !0, a = o || 0, o = 0, r = l.length, n = !0; l && r > a; a++)
                        if (!1 === l[a].apply(s[0], s[1]) && t.stopOnFalse) {
                            e = !1;
                            break
                        }
                    n = !1, l && (c ? c.length && h(c.shift()) : e ? l = [] : u.disable())
                },
                u = {
                    add: function () {
                        if (l) {
                            var i = l.length;
                            ! function e(i) {
                                K.each(i, function (i, n) {
                                    var o = K.type(n);
                                    "function" === o ? t.unique && u.has(n) || l.push(n) : n && n.length && "string" !== o && e(n)
                                })
                            }(arguments), n ? r = l.length : e && (o = i, h(e))
                        }
                        return this
                    },
                    remove: function () {
                        return l && K.each(arguments, function (t, e) {
                            for (var i;
                                (i = K.inArray(e, l, i)) > -1;) l.splice(i, 1), n && (r >= i && r--, a >= i && a--)
                        }), this
                    },
                    has: function (t) {
                        return t ? K.inArray(t, l) > -1 : !(!l || !l.length)
                    },
                    empty: function () {
                        return l = [], r = 0, this
                    },
                    disable: function () {
                        return l = c = e = void 0, this
                    },
                    disabled: function () {
                        return !l
                    },
                    lock: function () {
                        return c = void 0, e || u.disable(), this
                    },
                    locked: function () {
                        return !c
                    },
                    fireWith: function (t, e) {
                        return !l || i && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? c.push(e) : h(e)), this
                    },
                    fire: function () {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!i
                    }
                };
            return u
        }, K.extend({
            Deferred: function (t) {
                var e = [
                        ["resolve", "done", K.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", K.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", K.Callbacks("memory")]
                    ],
                    i = "pending",
                    n = {
                        state: function () {
                            return i
                        },
                        always: function () {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function () {
                            var t = arguments;
                            return K.Deferred(function (i) {
                                K.each(e, function (e, s) {
                                    var r = K.isFunction(t[e]) && t[e];
                                    o[s[1]](function () {
                                        var t = r && r.apply(this, arguments);
                                        t && K.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s[0] + "With"](this === n ? i.promise() : this, r ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function (t) {
                            return null != t ? K.extend(t, n) : n
                        }
                    },
                    o = {};
                return n.pipe = n.then, K.each(e, function (t, s) {
                    var r = s[2],
                        a = s[3];
                    n[s[1]] = r.add, a && r.add(function () {
                        i = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[s[0]] = function () {
                        return o[s[0] + "With"](this === o ? n : this, arguments), this
                    }, o[s[0] + "With"] = r.fireWith
                }), n.promise(o), t && t.call(o, o), o
            },
            when: function (t) {
                var e, i, n, o = 0,
                    s = q.call(arguments),
                    r = s.length,
                    a = 1 !== r || t && K.isFunction(t.promise) ? r : 0,
                    l = 1 === a ? t : K.Deferred(),
                    c = function (t, i, n) {
                        return function (o) {
                            i[t] = this, n[t] = arguments.length > 1 ? q.call(arguments) : o, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                        }
                    };
                if (r > 1)
                    for (e = new Array(r), i = new Array(r), n = new Array(r); r > o; o++) s[o] && K.isFunction(s[o].promise) ? s[o].promise().done(c(o, n, s)).fail(l.reject).progress(c(o, i, e)) : --a;
                return a || l.resolveWith(n, s), l.promise()
            }
        });
        var ft;
        K.fn.ready = function (t) {
            return K.ready.promise().done(t), this
        }, K.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (t) {
                t ? K.readyWait++ : K.ready(!0)
            },
            ready: function (t) {
                (!0 === t ? --K.readyWait : K.isReady) || (K.isReady = !0, !0 !== t && --K.readyWait > 0 || (ft.resolveWith(Z, [K]), K.fn.triggerHandler && (K(Z).triggerHandler("ready"), K(Z).off("ready"))))
            }
        }), K.ready.promise = function (e) {
            return ft || (ft = K.Deferred(), "complete" === Z.readyState ? setTimeout(K.ready) : (Z.addEventListener("DOMContentLoaded", r, !1), t.addEventListener("load", r, !1))), ft.promise(e)
        }, K.ready.promise();
        var gt = K.access = function (t, e, i, n, o, s, r) {
            var a = 0,
                l = t.length,
                c = null == i;
            if ("object" === K.type(i)) {
                o = !0;
                for (a in i) K.access(t, e, a, i[a], !0, s, r)
            } else if (void 0 !== n && (o = !0, K.isFunction(n) || (r = !0), c && (r ? (e.call(t, n), e = null) : (c = e, e = function (t, e, i) {
                    return c.call(K(t), i)
                })), e))
                for (; l > a; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
            return o ? t : c ? e.call(t) : l ? e(t[0], i) : s
        };
        K.acceptData = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        }, a.uid = 1, a.accepts = K.acceptData, a.prototype = {
            key: function (t) {
                if (!a.accepts(t)) return 0;
                var e = {},
                    i = t[this.expando];
                if (!i) {
                    i = a.uid++;
                    try {
                        e[this.expando] = {
                            value: i
                        }, Object.defineProperties(t, e)
                    } catch (n) {
                        e[this.expando] = i, K.extend(t, e)
                    }
                }
                return this.cache[i] || (this.cache[i] = {}), i
            },
            set: function (t, e, i) {
                var n, o = this.key(t),
                    s = this.cache[o];
                if ("string" == typeof e) s[e] = i;
                else if (K.isEmptyObject(s)) K.extend(this.cache[o], e);
                else
                    for (n in e) s[n] = e[n];
                return s
            },
            get: function (t, e) {
                var i = this.cache[this.key(t)];
                return void 0 === e ? i : i[e]
            },
            access: function (t, e, i) {
                var n;
                return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, K.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove: function (t, e) {
                var i, n, o, s = this.key(t),
                    r = this.cache[s];
                if (void 0 === e) this.cache[s] = {};
                else {
                    K.isArray(e) ? n = e.concat(e.map(K.camelCase)) : (o = K.camelCase(e), e in r ? n = [e, o] : (n = o, n = n in r ? [n] : n.match(pt) || [])), i = n.length;
                    for (; i--;) delete r[n[i]]
                }
            },
            hasData: function (t) {
                return !K.isEmptyObject(this.cache[t[this.expando]] || {})
            },
            discard: function (t) {
                t[this.expando] && delete this.cache[t[this.expando]]
            }
        };
        var mt = new a,
            vt = new a,
            yt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            bt = /([A-Z])/g;
        K.extend({
            hasData: function (t) {
                return vt.hasData(t) || mt.hasData(t)
            },
            data: function (t, e, i) {
                return vt.access(t, e, i)
            },
            removeData: function (t, e) {
                vt.remove(t, e)
            },
            _data: function (t, e, i) {
                return mt.access(t, e, i)
            },
            _removeData: function (t, e) {
                mt.remove(t, e)
            }
        }), K.fn.extend({
            data: function (t, e) {
                var i, n, o, s = this[0],
                    r = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && (o = vt.get(s), 1 === s.nodeType && !mt.get(s, "hasDataAttrs"))) {
                        for (i = r.length; i--;) r[i] && 0 === (n = r[i].name).indexOf("data-") && (n = K.camelCase(n.slice(5)), l(s, n, o[n]));
                        mt.set(s, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function () {
                    vt.set(this, t)
                }) : gt(this, function (e) {
                    var i, n = K.camelCase(t);
                    if (s && void 0 === e) {
                        if (void 0 !== (i = vt.get(s, t))) return i;
                        if (void 0 !== (i = vt.get(s, n))) return i;
                        if (void 0 !== (i = l(s, n, void 0))) return i
                    } else this.each(function () {
                        var i = vt.get(this, n);
                        vt.set(this, n, e), -1 !== t.indexOf("-") && void 0 !== i && vt.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function (t) {
                return this.each(function () {
                    vt.remove(this, t)
                })
            }
        }), K.extend({
            queue: function (t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = mt.get(t, e), i && (!n || K.isArray(i) ? n = mt.access(t, e, K.makeArray(i)) : n.push(i)), n || []) : void 0
            },
            dequeue: function (t, e) {
                e = e || "fx";
                var i = K.queue(t, e),
                    n = i.length,
                    o = i.shift(),
                    s = K._queueHooks(t, e),
                    r = function () {
                        K.dequeue(t, e)
                    };
                "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete s.stop, o.call(t, r, s)), !n && s && s.empty.fire()
            },
            _queueHooks: function (t, e) {
                var i = e + "queueHooks";
                return mt.get(t, i) || mt.access(t, i, {
                    empty: K.Callbacks("once memory").add(function () {
                        mt.remove(t, [e + "queue", i])
                    })
                })
            }
        }), K.fn.extend({
            queue: function (t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? K.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var i = K.queue(this, t, e);
                    K._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && K.dequeue(this, t)
                })
            },
            dequeue: function (t) {
                return this.each(function () {
                    K.dequeue(this, t)
                })
            },
            clearQueue: function (t) {
                return this.queue(t || "fx", [])
            },
            promise: function (t, e) {
                var i, n = 1,
                    o = K.Deferred(),
                    s = this,
                    r = this.length,
                    a = function () {
                        --n || o.resolveWith(s, [s])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;)(i = mt.get(s[r], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                return a(), o.promise(e)
            }
        });
        var wt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            xt = ["Top", "Right", "Bottom", "Left"],
            Ct = function (t, e) {
                return t = e || t, "none" === K.css(t, "display") || !K.contains(t.ownerDocument, t)
            },
            _t = /^(?:checkbox|radio)$/i;
        ! function () {
            var t = Z.createDocumentFragment().appendChild(Z.createElement("div")),
                e = Z.createElement("input");
            e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), G.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var Tt = "undefined";
        G.focusinBubbles = "onfocusin" in t;
        var Et = /^key/,
            $t = /^(?:mouse|pointer|contextmenu)|click/,
            St = /^(?:focusinfocus|focusoutblur)$/,
            kt = /^([^.]*)(?:\.(.+)|)$/;
        K.event = {
            global: {},
            add: function (t, e, i, n, o) {
                var s, r, a, l, c, h, u, p, d, f, g, m = mt.get(t);
                if (m)
                    for (i.handler && (s = i, i = s.handler, o = s.selector), i.guid || (i.guid = K.guid++), (l = m.events) || (l = m.events = {}), (r = m.handle) || (r = m.handle = function (e) {
                            return typeof K !== Tt && K.event.triggered !== e.type ? K.event.dispatch.apply(t, arguments) : void 0
                        }), c = (e = (e || "").match(pt) || [""]).length; c--;) a = kt.exec(e[c]) || [], d = g = a[1], f = (a[2] || "").split(".").sort(), d && (u = K.event.special[d] || {}, d = (o ? u.delegateType : u.bindType) || d, u = K.event.special[d] || {}, h = K.extend({
                        type: d,
                        origType: g,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && K.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, s), (p = l[d]) || (p = l[d] = [], p.delegateCount = 0, u.setup && !1 !== u.setup.call(t, n, f, r) || t.addEventListener && t.addEventListener(d, r, !1)), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, h) : p.push(h), K.event.global[d] = !0)
            },
            remove: function (t, e, i, n, o) {
                var s, r, a, l, c, h, u, p, d, f, g, m = mt.hasData(t) && mt.get(t);
                if (m && (l = m.events)) {
                    for (c = (e = (e || "").match(pt) || [""]).length; c--;)
                        if (a = kt.exec(e[c]) || [], d = g = a[1], f = (a[2] || "").split(".").sort(), d) {
                            for (u = K.event.special[d] || {}, p = l[d = (n ? u.delegateType : u.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = p.length; s--;) h = p[s], !o && g !== h.origType || i && i.guid !== h.guid || a && !a.test(h.namespace) || n && n !== h.selector && ("**" !== n || !h.selector) || (p.splice(s, 1), h.selector && p.delegateCount--, u.remove && u.remove.call(t, h));
                            r && !p.length && (u.teardown && !1 !== u.teardown.call(t, f, m.handle) || K.removeEvent(t, d, m.handle), delete l[d])
                        } else
                            for (d in l) K.event.remove(t, d + e[c], i, n, !0);
                    K.isEmptyObject(l) && (delete m.handle, mt.remove(t, "events"))
                }
            },
            trigger: function (e, i, n, o) {
                var s, r, a, l, c, h, u, p = [n || Z],
                    d = Y.call(e, "type") ? e.type : e,
                    f = Y.call(e, "namespace") ? e.namespace.split(".") : [];
                if (r = a = n = n || Z, 3 !== n.nodeType && 8 !== n.nodeType && !St.test(d + K.event.triggered) && (d.indexOf(".") >= 0 && (f = d.split("."), d = f.shift(), f.sort()), c = d.indexOf(":") < 0 && "on" + d, e = e[K.expando] ? e : new K.Event(d, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : K.makeArray(i, [e]), u = K.event.special[d] || {}, o || !u.trigger || !1 !== u.trigger.apply(n, i))) {
                    if (!o && !u.noBubble && !K.isWindow(n)) {
                        for (l = u.delegateType || d, St.test(l + d) || (r = r.parentNode); r; r = r.parentNode) p.push(r), a = r;
                        a === (n.ownerDocument || Z) && p.push(a.defaultView || a.parentWindow || t)
                    }
                    for (s = 0;
                        (r = p[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? l : u.bindType || d, (h = (mt.get(r, "events") || {})[e.type] && mt.get(r, "handle")) && h.apply(r, i), (h = c && r[c]) && h.apply && K.acceptData(r) && (e.result = h.apply(r, i), !1 === e.result && e.preventDefault());
                    return e.type = d, o || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(p.pop(), i) || !K.acceptData(n) || c && K.isFunction(n[d]) && !K.isWindow(n) && ((a = n[c]) && (n[c] = null), K.event.triggered = d, n[d](), K.event.triggered = void 0, a && (n[c] = a)), e.result
                }
            },
            dispatch: function (t) {
                t = K.event.fix(t);
                var e, i, n, o, s, r = [],
                    a = q.call(arguments),
                    l = (mt.get(this, "events") || {})[t.type] || [],
                    c = K.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                    for (r = K.event.handlers.call(this, t, l), e = 0;
                        (o = r[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = o.elem, i = 0;
                            (s = o.handlers[i++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(s.namespace)) && (t.handleObj = s, t.data = s.data, void 0 !== (n = ((K.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, a)) && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function (t, e) {
                var i, n, o, s, r = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l !== this; l = l.parentNode || this)
                        if (!0 !== l.disabled || "click" !== t.type) {
                            for (n = [], i = 0; a > i; i++) s = e[i], o = s.selector + " ", void 0 === n[o] && (n[o] = s.needsContext ? K(o, this).index(l) >= 0 : K.find(o, this, null, [l]).length), n[o] && n.push(s);
                            n.length && r.push({
                                elem: l,
                                handlers: n
                            })
                        }
                return a < e.length && r.push({
                    elem: this,
                    handlers: e.slice(a)
                }), r
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (t, e) {
                    var i, n, o, s = e.button;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || Z, n = i.documentElement, o = i.body, t.pageX = e.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
                }
            },
            fix: function (t) {
                if (t[K.expando]) return t;
                var e, i, n, o = t.type,
                    s = t,
                    r = this.fixHooks[o];
                for (r || (this.fixHooks[o] = r = $t.test(o) ? this.mouseHooks : Et.test(o) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, t = new K.Event(s), e = n.length; e--;) i = n[e], t[i] = s[i];
                return t.target || (t.target = Z), 3 === t.target.nodeType && (t.target = t.target.parentNode), r.filter ? r.filter(t, s) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        return this !== u() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        return this === u() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        return "checkbox" === this.type && this.click && K.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function (t) {
                        return K.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function (t, e, i, n) {
                var o = K.extend(new K.Event, i, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                n ? K.event.trigger(o, null, e) : K.event.dispatch.call(e, o), o.isDefaultPrevented() && i.preventDefault()
            }
        }, K.removeEvent = function (t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i, !1)
        }, K.Event = function (t, e) {
            return this instanceof K.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? c : h) : this.type = t, e && K.extend(this, e), this.timeStamp = t && t.timeStamp || K.now(), void(this[K.expando] = !0)) : new K.Event(t, e)
        }, K.Event.prototype = {
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = c, t && t.preventDefault && t.preventDefault()
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = c, t && t.stopPropagation && t.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = c, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, K.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            K.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function (t) {
                    var i, n = this,
                        o = t.relatedTarget,
                        s = t.handleObj;
                    return (!o || o !== n && !K.contains(n, o)) && (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), G.focusinBubbles || K.each({
            focus: "focusin",
            blur: "focusout"
        }, function (t, e) {
            var i = function (t) {
                K.event.simulate(e, t.target, K.event.fix(t), !0)
            };
            K.event.special[e] = {
                setup: function () {
                    var n = this.ownerDocument || this,
                        o = mt.access(n, e);
                    o || n.addEventListener(t, i, !0), mt.access(n, e, (o || 0) + 1)
                },
                teardown: function () {
                    var n = this.ownerDocument || this,
                        o = mt.access(n, e) - 1;
                    o ? mt.access(n, e, o) : (n.removeEventListener(t, i, !0), mt.remove(n, e))
                }
            }
        }), K.fn.extend({
            on: function (t, e, i, n, o) {
                var s, r;
                if ("object" == typeof t) {
                    "string" != typeof e && (i = i || e, e = void 0);
                    for (r in t) this.on(r, e, i, t[r], o);
                    return this
                }
                if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), !1 === n) n = h;
                else if (!n) return this;
                return 1 === o && (s = n, n = function (t) {
                    return K().off(t), s.apply(this, arguments)
                }, n.guid = s.guid || (s.guid = K.guid++)), this.each(function () {
                    K.event.add(this, t, n, i, e)
                })
            },
            one: function (t, e, i, n) {
                return this.on(t, e, i, n, 1)
            },
            off: function (t, e, i) {
                var n, o;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, K(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return (!1 === e || "function" == typeof e) && (i = e, e = void 0), !1 === i && (i = h), this.each(function () {
                    K.event.remove(this, t, i, e)
                })
            },
            trigger: function (t, e) {
                return this.each(function () {
                    K.event.trigger(t, e, this)
                })
            },
            triggerHandler: function (t, e) {
                var i = this[0];
                return i ? K.event.trigger(t, e, i, !0) : void 0
            }
        });
        var Lt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            At = /<([\w:]+)/,
            Ot = /<|&#?\w+;/,
            Dt = /<(?:script|style|link)/i,
            Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            It = /^$|\/(?:java|ecma)script/i,
            jt = /^true\/(.*)/,
            zt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Pt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Pt.optgroup = Pt.option, Pt.tbody = Pt.tfoot = Pt.colgroup = Pt.caption = Pt.thead, Pt.th = Pt.td, K.extend({
            clone: function (t, e, i) {
                var n, o, s, r, a = t.cloneNode(!0),
                    l = K.contains(t.ownerDocument, t);
                if (!(G.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || K.isXMLDoc(t)))
                    for (r = v(a), s = v(t), n = 0, o = s.length; o > n; n++) y(s[n], r[n]);
                if (e)
                    if (i)
                        for (s = s || v(t), r = r || v(a), n = 0, o = s.length; o > n; n++) m(s[n], r[n]);
                    else m(t, a);
                return (r = v(a, "script")).length > 0 && g(r, !l && v(t, "script")), a
            },
            buildFragment: function (t, e, i, n) {
                for (var o, s, r, a, l, c, h = e.createDocumentFragment(), u = [], p = 0, d = t.length; d > p; p++)
                    if ((o = t[p]) || 0 === o)
                        if ("object" === K.type(o)) K.merge(u, o.nodeType ? [o] : o);
                        else if (Ot.test(o)) {
                    for (s = s || h.appendChild(e.createElement("div")), r = (At.exec(o) || ["", ""])[1].toLowerCase(), a = Pt[r] || Pt._default, s.innerHTML = a[1] + o.replace(Lt, "<$1></$2>") + a[2], c = a[0]; c--;) s = s.lastChild;
                    K.merge(u, s.childNodes), (s = h.firstChild).textContent = ""
                } else u.push(e.createTextNode(o));
                for (h.textContent = "", p = 0; o = u[p++];)
                    if ((!n || -1 === K.inArray(o, n)) && (l = K.contains(o.ownerDocument, o), s = v(h.appendChild(o), "script"), l && g(s), i))
                        for (c = 0; o = s[c++];) It.test(o.type || "") && i.push(o);
                return h
            },
            cleanData: function (t) {
                for (var e, i, n, o, s = K.event.special, r = 0; void 0 !== (i = t[r]); r++) {
                    if (K.acceptData(i) && (o = i[mt.expando]) && (e = mt.cache[o])) {
                        if (e.events)
                            for (n in e.events) s[n] ? K.event.remove(i, n) : K.removeEvent(i, n, e.handle);
                        mt.cache[o] && delete mt.cache[o]
                    }
                    delete vt.cache[i[vt.expando]]
                }
            }
        }), K.fn.extend({
            text: function (t) {
                return gt(this, function (t) {
                    return void 0 === t ? K.text(this) : this.empty().each(function () {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function () {
                return this.domManip(arguments, function (t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || p(this, t).appendChild(t)
                })
            },
            prepend: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = p(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function (t, e) {
                for (var i, n = t ? K.filter(t, this) : this, o = 0; null != (i = n[o]); o++) e || 1 !== i.nodeType || K.cleanData(v(i)), i.parentNode && (e && K.contains(i.ownerDocument, i) && g(v(i, "script")), i.parentNode.removeChild(i));
                return this
            },
            empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (K.cleanData(v(t, !1)), t.textContent = "");
                return this
            },
            clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function () {
                    return K.clone(this, t, e)
                })
            },
            html: function (t) {
                return gt(this, function (t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Dt.test(t) && !Pt[(At.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = t.replace(Lt, "<$1></$2>");
                        try {
                            for (; n > i; i++) 1 === (e = this[i] || {}).nodeType && (K.cleanData(v(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function () {
                var t = arguments[0];
                return this.domManip(arguments, function (e) {
                    t = this.parentNode, K.cleanData(v(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            },
            detach: function (t) {
                return this.remove(t, !0)
            },
            domManip: function (t, e) {
                t = B.apply([], t);
                var i, n, o, s, r, a, l = 0,
                    c = this.length,
                    h = this,
                    u = c - 1,
                    p = t[0],
                    g = K.isFunction(p);
                if (g || c > 1 && "string" == typeof p && !G.checkClone && Nt.test(p)) return this.each(function (i) {
                    var n = h.eq(i);
                    g && (t[0] = p.call(this, i, n.html())), n.domManip(t, e)
                });
                if (c && (i = K.buildFragment(t, this[0].ownerDocument, !1, this), n = i.firstChild, 1 === i.childNodes.length && (i = n), n)) {
                    for (s = (o = K.map(v(i, "script"), d)).length; c > l; l++) r = i, l !== u && (r = K.clone(r, !0, !0), s && K.merge(o, v(r, "script"))), e.call(this[l], r, l);
                    if (s)
                        for (a = o[o.length - 1].ownerDocument, K.map(o, f), l = 0; s > l; l++) r = o[l], It.test(r.type || "") && !mt.access(r, "globalEval") && K.contains(a, r) && (r.src ? K._evalUrl && K._evalUrl(r.src) : K.globalEval(r.textContent.replace(zt, "")))
                }
                return this
            }
        }), K.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            K.fn[t] = function (t) {
                for (var i, n = [], o = K(t), s = o.length - 1, r = 0; s >= r; r++) i = r === s ? this : this.clone(!0), K(o[r])[e](i), U.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var Rt, Ft = {},
            Mt = /^margin/,
            Wt = new RegExp("^(" + wt + ")(?!px)[a-z%]+$", "i"),
            Ht = function (e) {
                return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
            };
        ! function () {
            function e() {
                r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r.innerHTML = "", o.appendChild(s);
                var e = t.getComputedStyle(r, null);
                i = "1%" !== e.top, n = "4px" === e.width, o.removeChild(s)
            }
            var i, n, o = Z.documentElement,
                s = Z.createElement("div"),
                r = Z.createElement("div");
            r.style && (r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === r.style.backgroundClip, s.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", s.appendChild(r), t.getComputedStyle && K.extend(G, {
                pixelPosition: function () {
                    return e(), i
                },
                boxSizingReliable: function () {
                    return null == n && e(), n
                },
                reliableMarginRight: function () {
                    var e, i = r.appendChild(Z.createElement("div"));
                    return i.style.cssText = r.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", r.style.width = "1px", o.appendChild(s), e = !parseFloat(t.getComputedStyle(i, null).marginRight), o.removeChild(s), r.removeChild(i), e
                }
            }))
        }(), K.swap = function (t, e, i, n) {
            var o, s, r = {};
            for (s in e) r[s] = t.style[s], t.style[s] = e[s];
            o = i.apply(t, n || []);
            for (s in e) t.style[s] = r[s];
            return o
        };
        var qt = /^(none|table(?!-c[ea]).+)/,
            Bt = new RegExp("^(" + wt + ")(.*)$", "i"),
            Ut = new RegExp("^([+-])=(" + wt + ")", "i"),
            Qt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Vt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Xt = ["Webkit", "O", "Moz", "ms"];
        K.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var i = x(t, "opacity");
                            return "" === i ? "1" : i
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
                float: "cssFloat"
            },
            style: function (t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, s, r, a = K.camelCase(e),
                        l = t.style;
                    return e = K.cssProps[a] || (K.cssProps[a] = _(l, a)), r = K.cssHooks[e] || K.cssHooks[a], void 0 === i ? r && "get" in r && void 0 !== (o = r.get(t, !1, n)) ? o : l[e] : ("string" === (s = typeof i) && (o = Ut.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(K.css(t, e)), s = "number"), void(null != i && i === i && ("number" !== s || K.cssNumber[a] || (i += "px"), G.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, n)) || (l[e] = i))))
                }
            },
            css: function (t, e, i, n) {
                var o, s, r, a = K.camelCase(e);
                return e = K.cssProps[a] || (K.cssProps[a] = _(t.style, a)), (r = K.cssHooks[e] || K.cssHooks[a]) && "get" in r && (o = r.get(t, !0, i)), void 0 === o && (o = x(t, e, n)), "normal" === o && e in Vt && (o = Vt[e]), "" === i || i ? (s = parseFloat(o), !0 === i || K.isNumeric(s) ? s || 0 : o) : o
            }
        }), K.each(["height", "width"], function (t, e) {
            K.cssHooks[e] = {
                get: function (t, i, n) {
                    return i ? qt.test(K.css(t, "display")) && 0 === t.offsetWidth ? K.swap(t, Qt, function () {
                        return $(t, e, n)
                    }) : $(t, e, n) : void 0
                },
                set: function (t, i, n) {
                    var o = n && Ht(t);
                    return T(t, i, n ? E(t, e, n, "border-box" === K.css(t, "boxSizing", !1, o), o) : 0)
                }
            }
        }), K.cssHooks.marginRight = C(G.reliableMarginRight, function (t, e) {
            return e ? K.swap(t, {
                display: "inline-block"
            }, x, [t, "marginRight"]) : void 0
        }), K.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (t, e) {
            K.cssHooks[t + e] = {
                expand: function (i) {
                    for (var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[t + xt[n] + e] = s[n] || s[n - 2] || s[0];
                    return o
                }
            }, Mt.test(t) || (K.cssHooks[t + e].set = T)
        }), K.fn.extend({
            css: function (t, e) {
                return gt(this, function (t, e, i) {
                    var n, o, s = {},
                        r = 0;
                    if (K.isArray(e)) {
                        for (n = Ht(t), o = e.length; o > r; r++) s[e[r]] = K.css(t, e[r], !1, n);
                        return s
                    }
                    return void 0 !== i ? K.style(t, e, i) : K.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function () {
                return S(this, !0)
            },
            hide: function () {
                return S(this)
            },
            toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    Ct(this) ? K(this).show() : K(this).hide()
                })
            }
        }), K.Tween = k, k.prototype = {
            constructor: k,
            init: function (t, e, i, n, o, s) {
                this.elem = t, this.prop = i, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (K.cssNumber[i] ? "" : "px")
            },
            cur: function () {
                var t = k.propHooks[this.prop];
                return t && t.get ? t.get(this) : k.propHooks._default.get(this)
            },
            run: function (t) {
                var e, i = k.propHooks[this.prop];
                return this.pos = e = this.options.duration ? K.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : k.propHooks._default.set(this), this
            }
        }, k.prototype.init.prototype = k.prototype, k.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = K.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function (t) {
                    K.fx.step[t.prop] ? K.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[K.cssProps[t.prop]] || K.cssHooks[t.prop]) ? K.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, k.propHooks.scrollTop = k.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, K.easing = {
            linear: function (t) {
                return t
            },
            swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, K.fx = k.prototype.init, K.fx.step = {};
        var Yt, Gt, Zt = /^(?:toggle|show|hide)$/,
            Jt = new RegExp("^(?:([+-])=|)(" + wt + ")([a-z%]*)$", "i"),
            Kt = /queueHooks$/,
            te = [D],
            ee = {
                "*": [function (t, e) {
                    var i = this.createTween(t, e),
                        n = i.cur(),
                        o = Jt.exec(e),
                        s = o && o[3] || (K.cssNumber[t] ? "" : "px"),
                        r = (K.cssNumber[t] || "px" !== s && +n) && Jt.exec(K.css(i.elem, t)),
                        a = 1,
                        l = 20;
                    if (r && r[3] !== s) {
                        s = s || r[3], o = o || [], r = +n || 1;
                        do {
                            a = a || ".5", r /= a, K.style(i.elem, t, r + s)
                        } while (a !== (a = i.cur() / n) && 1 !== a && --l)
                    }
                    return o && (r = i.start = +r || +n || 0, i.unit = s, i.end = o[1] ? r + (o[1] + 1) * o[2] : +o[2]), i
                }]
            };
        K.Animation = K.extend(I, {
                tweener: function (t, e) {
                    K.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var i, n = 0, o = t.length; o > n; n++) i = t[n], ee[i] = ee[i] || [], ee[i].unshift(e)
                },
                prefilter: function (t, e) {
                    e ? te.unshift(t) : te.push(t)
                }
            }), K.speed = function (t, e, i) {
                var n = t && "object" == typeof t ? K.extend({}, t) : {
                    complete: i || !i && e || K.isFunction(t) && t,
                    duration: t,
                    easing: i && e || e && !K.isFunction(e) && e
                };
                return n.duration = K.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in K.fx.speeds ? K.fx.speeds[n.duration] : K.fx.speeds._default, (null == n.queue || !0 === n.queue) && (n.queue = "fx"), n.old = n.complete, n.complete = function () {
                    K.isFunction(n.old) && n.old.call(this), n.queue && K.dequeue(this, n.queue)
                }, n
            }, K.fn.extend({
                fadeTo: function (t, e, i, n) {
                    return this.filter(Ct).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, i, n)
                },
                animate: function (t, e, i, n) {
                    var o = K.isEmptyObject(t),
                        s = K.speed(e, i, n),
                        r = function () {
                            var e = I(this, K.extend({}, t), s);
                            (o || mt.get(this, "finish")) && e.stop(!0)
                        };
                    return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
                },
                stop: function (t, e, i) {
                    var n = function (t) {
                        var e = t.stop;
                        delete t.stop, e(i)
                    };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            s = K.timers,
                            r = mt.get(this);
                        if (o) r[o] && r[o].stop && n(r[o]);
                        else
                            for (o in r) r[o] && r[o].stop && Kt.test(o) && n(r[o]);
                        for (o = s.length; o--;) s[o].elem !== this || null != t && s[o].queue !== t || (s[o].anim.stop(i), e = !1, s.splice(o, 1));
                        (e || !i) && K.dequeue(this, t)
                    })
                },
                finish: function (t) {
                    return !1 !== t && (t = t || "fx"), this.each(function () {
                        var e, i = mt.get(this),
                            n = i[t + "queue"],
                            o = i[t + "queueHooks"],
                            s = K.timers,
                            r = n ? n.length : 0;
                        for (i.finish = !0, K.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                        for (e = 0; r > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
                    })
                }
            }), K.each(["toggle", "show", "hide"], function (t, e) {
                var i = K.fn[e];
                K.fn[e] = function (t, n, o) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(A(e, !0), t, n, o)
                }
            }), K.each({
                slideDown: A("show"),
                slideUp: A("hide"),
                slideToggle: A("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (t, e) {
                K.fn[t] = function (t, i, n) {
                    return this.animate(e, t, i, n)
                }
            }), K.timers = [], K.fx.tick = function () {
                var t, e = 0,
                    i = K.timers;
                for (Yt = K.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
                i.length || K.fx.stop(), Yt = void 0
            }, K.fx.timer = function (t) {
                K.timers.push(t), t() ? K.fx.start() : K.timers.pop()
            }, K.fx.interval = 13, K.fx.start = function () {
                Gt || (Gt = setInterval(K.fx.tick, K.fx.interval))
            }, K.fx.stop = function () {
                clearInterval(Gt), Gt = null
            }, K.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, K.fn.delay = function (t, e) {
                return t = K.fx ? K.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, i) {
                    var n = setTimeout(e, t);
                    i.stop = function () {
                        clearTimeout(n)
                    }
                })
            },
            function () {
                var t = Z.createElement("input"),
                    e = Z.createElement("select"),
                    i = e.appendChild(Z.createElement("option"));
                t.type = "checkbox", G.checkOn = "" !== t.value, G.optSelected = i.selected, e.disabled = !0, G.optDisabled = !i.disabled, (t = Z.createElement("input")).value = "t", t.type = "radio", G.radioValue = "t" === t.value
            }();
        var ie, ne = K.expr.attrHandle;
        K.fn.extend({
            attr: function (t, e) {
                return gt(this, K.attr, t, e, arguments.length > 1)
            },
            removeAttr: function (t) {
                return this.each(function () {
                    K.removeAttr(this, t)
                })
            }
        }), K.extend({
            attr: function (t, e, i) {
                var n, o, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s) return typeof t.getAttribute === Tt ? K.prop(t, e, i) : (1 === s && K.isXMLDoc(t) || (e = e.toLowerCase(), n = K.attrHooks[e] || (K.expr.match.bool.test(e) ? ie : void 0)), void 0 === i ? n && "get" in n && null !== (o = n.get(t, e)) ? o : (o = K.find.attr(t, e), null == o ? void 0 : o) : null !== i ? n && "set" in n && void 0 !== (o = n.set(t, i, e)) ? o : (t.setAttribute(e, i + ""), i) : void K.removeAttr(t, e))
            },
            removeAttr: function (t, e) {
                var i, n, o = 0,
                    s = e && e.match(pt);
                if (s && 1 === t.nodeType)
                    for (; i = s[o++];) n = K.propFix[i] || i, K.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
            },
            attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!G.radioValue && "radio" === e && K.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            }
        }), ie = {
            set: function (t, e, i) {
                return !1 === e ? K.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, K.each(K.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var i = ne[e] || K.find.attr;
            ne[e] = function (t, e, n) {
                var o, s;
                return n || (s = ne[e], ne[e] = o, o = null != i(t, e, n) ? e.toLowerCase() : null, ne[e] = s), o
            }
        });
        var oe = /^(?:input|select|textarea|button)$/i;
        K.fn.extend({
            prop: function (t, e) {
                return gt(this, K.prop, t, e, arguments.length > 1)
            },
            removeProp: function (t) {
                return this.each(function () {
                    delete this[K.propFix[t] || t]
                })
            }
        }), K.extend({
            propFix: {
                for: "htmlFor",
                class: "className"
            },
            prop: function (t, e, i) {
                var n, o, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s) return (1 !== s || !K.isXMLDoc(t)) && (e = K.propFix[e] || e, o = K.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function (t) {
                        return t.hasAttribute("tabindex") || oe.test(t.nodeName) || t.href ? t.tabIndex : -1
                    }
                }
            }
        }), G.optSelected || (K.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            }
        }), K.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            K.propFix[this.toLowerCase()] = this
        });
        var se = /[\t\r\n\f]/g;
        K.fn.extend({
            addClass: function (t) {
                var e, i, n, o, s, r, a = "string" == typeof t && t,
                    l = 0,
                    c = this.length;
                if (K.isFunction(t)) return this.each(function (e) {
                    K(this).addClass(t.call(this, e, this.className))
                });
                if (a)
                    for (e = (t || "").match(pt) || []; c > l; l++)
                        if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(se, " ") : " ")) {
                            for (s = 0; o = e[s++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                            r = K.trim(n), i.className !== r && (i.className = r)
                        }
                return this
            },
            removeClass: function (t) {
                var e, i, n, o, s, r, a = 0 === arguments.length || "string" == typeof t && t,
                    l = 0,
                    c = this.length;
                if (K.isFunction(t)) return this.each(function (e) {
                    K(this).removeClass(t.call(this, e, this.className))
                });
                if (a)
                    for (e = (t || "").match(pt) || []; c > l; l++)
                        if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(se, " ") : "")) {
                            for (s = 0; o = e[s++];)
                                for (; n.indexOf(" " + o + " ") >= 0;) n = n.replace(" " + o + " ", " ");
                            r = t ? K.trim(n) : "", i.className !== r && (i.className = r)
                        }
                return this
            },
            toggleClass: function (t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(K.isFunction(t) ? function (i) {
                    K(this).toggleClass(t.call(this, i, this.className, e), e)
                } : function () {
                    if ("string" === i)
                        for (var e, n = 0, o = K(this), s = t.match(pt) || []; e = s[n++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else(i === Tt || "boolean" === i) && (this.className && mt.set(this, "__className__", this.className), this.className = this.className || !1 === t ? "" : mt.get(this, "__className__") || "")
                })
            },
            hasClass: function (t) {
                for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                    if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(se, " ").indexOf(e) >= 0) return !0;
                return !1
            }
        });
        var re = /\r/g;
        K.fn.extend({
            val: function (t) {
                var e, i, n, o = this[0];
                return arguments.length ? (n = K.isFunction(t), this.each(function (i) {
                    var o;
                    1 === this.nodeType && (o = n ? t.call(this, i, K(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : K.isArray(o) && (o = K.map(o, function (t) {
                        return null == t ? "" : t + ""
                    })), (e = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                })) : o ? (e = K.valHooks[o.type] || K.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(re, "") : null == i ? "" : i)) : void 0
            }
        }), K.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = K.find.attr(t, "value");
                        return null != e ? e : K.trim(K.text(t))
                    }
                },
                select: {
                    get: function (t) {
                        for (var e, i, n = t.options, o = t.selectedIndex, s = "select-one" === t.type || 0 > o, r = s ? null : [], a = s ? o + 1 : n.length, l = 0 > o ? a : s ? o : 0; a > l; l++)
                            if (!(!(i = n[l]).selected && l !== o || (G.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && K.nodeName(i.parentNode, "optgroup"))) {
                                if (e = K(i).val(), s) return e;
                                r.push(e)
                            }
                        return r
                    },
                    set: function (t, e) {
                        for (var i, n, o = t.options, s = K.makeArray(e), r = o.length; r--;) n = o[r], (n.selected = K.inArray(n.value, s) >= 0) && (i = !0);
                        return i || (t.selectedIndex = -1), s
                    }
                }
            }
        }), K.each(["radio", "checkbox"], function () {
            K.valHooks[this] = {
                set: function (t, e) {
                    return K.isArray(e) ? t.checked = K.inArray(K(t).val(), e) >= 0 : void 0
                }
            }, G.checkOn || (K.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
            K.fn[e] = function (t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), K.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function (t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function (t, e) {
                return this.off(t, null, e)
            },
            delegate: function (t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function (t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            }
        });
        var ae = K.now(),
            le = /\?/;
        K.parseJSON = function (t) {
            return JSON.parse(t + "")
        }, K.parseXML = function (t) {
            var e, i;
            if (!t || "string" != typeof t) return null;
            try {
                i = new DOMParser, e = i.parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return (!e || e.getElementsByTagName("parsererror").length) && K.error("Invalid XML: " + t), e
        };
        var ce = /#.*$/,
            he = /([?&])_=[^&]*/,
            ue = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            pe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            de = /^(?:GET|HEAD)$/,
            fe = /^\/\//,
            ge = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            me = {},
            ve = {},
            ye = "*/".concat("*"),
            be = t.location.href,
            we = ge.exec(be.toLowerCase()) || [];
        K.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: be,
                type: "GET",
                isLocal: pe.test(we[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": ye,
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
                    "text json": K.parseJSON,
                    "text xml": K.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (t, e) {
                return e ? P(P(t, K.ajaxSettings), e) : P(K.ajaxSettings, t)
            },
            ajaxPrefilter: j(me),
            ajaxTransport: j(ve),
            ajax: function (t, e) {
                function i(t, e, i, r) {
                    var l, h, v, y, w, C = e;
                    2 !== b && (b = 2, a && clearTimeout(a), n = void 0, s = r || "", x.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, i && (y = R(u, x, i)), y = F(u, y, x, l), l ? (u.ifModified && ((w = x.getResponseHeader("Last-Modified")) && (K.lastModified[o] = w), (w = x.getResponseHeader("etag")) && (K.etag[o] = w)), 204 === t || "HEAD" === u.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = y.state, h = y.data, v = y.error, l = !v)) : (v = C, (t || !C) && (C = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || C) + "", l ? f.resolveWith(p, [h, C, x]) : f.rejectWith(p, [x, C, v]), x.statusCode(m), m = void 0, c && d.trigger(l ? "ajaxSuccess" : "ajaxError", [x, u, l ? h : v]), g.fireWith(p, [x, C]), c && (d.trigger("ajaxComplete", [x, u]), --K.active || K.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var n, o, s, r, a, l, c, h, u = K.ajaxSetup({}, e),
                    p = u.context || u,
                    d = u.context && (p.nodeType || p.jquery) ? K(p) : K.event,
                    f = K.Deferred(),
                    g = K.Callbacks("once memory"),
                    m = u.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function (t) {
                            var e;
                            if (2 === b) {
                                if (!r)
                                    for (r = {}; e = ue.exec(s);) r[e[1].toLowerCase()] = e[2];
                                e = r[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function () {
                            return 2 === b ? s : null
                        },
                        setRequestHeader: function (t, e) {
                            var i = t.toLowerCase();
                            return b || (t = y[i] = y[i] || t, v[t] = e), this
                        },
                        overrideMimeType: function (t) {
                            return b || (u.mimeType = t), this
                        },
                        statusCode: function (t) {
                            var e;
                            if (t)
                                if (2 > b)
                                    for (e in t) m[e] = [m[e], t[e]];
                                else x.always(t[x.status]);
                            return this
                        },
                        abort: function (t) {
                            var e = t || w;
                            return n && n.abort(e), i(0, e), this
                        }
                    };
                if (f.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, u.url = ((t || u.url || be) + "").replace(ce, "").replace(fe, we[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = K.trim(u.dataType || "*").toLowerCase().match(pt) || [""], null == u.crossDomain && (l = ge.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] === we[1] && l[2] === we[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (we[3] || ("http:" === we[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = K.param(u.data, u.traditional)), z(me, u, e, x), 2 === b) return x;
                (c = K.event && u.global) && 0 == K.active++ && K.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !de.test(u.type), o = u.url, u.hasContent || (u.data && (o = u.url += (le.test(o) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (u.url = he.test(o) ? o.replace(he, "$1_=" + ae++) : o + (le.test(o) ? "&" : "?") + "_=" + ae++)), u.ifModified && (K.lastModified[o] && x.setRequestHeader("If-Modified-Since", K.lastModified[o]), K.etag[o] && x.setRequestHeader("If-None-Match", K.etag[o])), (u.data && u.hasContent && !1 !== u.contentType || e.contentType) && x.setRequestHeader("Content-Type", u.contentType), x.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + ye + "; q=0.01" : "") : u.accepts["*"]);
                for (h in u.headers) x.setRequestHeader(h, u.headers[h]);
                if (u.beforeSend && (!1 === u.beforeSend.call(p, x, u) || 2 === b)) return x.abort();
                w = "abort";
                for (h in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[h](u[h]);
                if (n = z(ve, u, e, x)) {
                    x.readyState = 1, c && d.trigger("ajaxSend", [x, u]), u.async && u.timeout > 0 && (a = setTimeout(function () {
                        x.abort("timeout")
                    }, u.timeout));
                    try {
                        b = 1, n.send(v, i)
                    } catch (t) {
                        if (!(2 > b)) throw t;
                        i(-1, t)
                    }
                } else i(-1, "No Transport");
                return x
            },
            getJSON: function (t, e, i) {
                return K.get(t, e, i, "json")
            },
            getScript: function (t, e) {
                return K.get(t, void 0, e, "script")
            }
        }), K.each(["get", "post"], function (t, e) {
            K[e] = function (t, i, n, o) {
                return K.isFunction(i) && (o = o || n, n = i, i = void 0), K.ajax({
                    url: t,
                    type: e,
                    dataType: o,
                    data: i,
                    success: n
                })
            }
        }), K._evalUrl = function (t) {
            return K.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, K.fn.extend({
            wrapAll: function (t) {
                var e;
                return K.isFunction(t) ? this.each(function (e) {
                    K(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = K(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function (t) {
                return this.each(K.isFunction(t) ? function (e) {
                    K(this).wrapInner(t.call(this, e))
                } : function () {
                    var e = K(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function (t) {
                var e = K.isFunction(t);
                return this.each(function (i) {
                    K(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
                }).end()
            }
        }), K.expr.filters.hidden = function (t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0
        }, K.expr.filters.visible = function (t) {
            return !K.expr.filters.hidden(t)
        };
        var xe = /%20/g,
            Ce = /\[\]$/,
            _e = /\r?\n/g,
            Te = /^(?:submit|button|image|reset|file)$/i,
            Ee = /^(?:input|select|textarea|keygen)/i;
        K.param = function (t, e) {
            var i, n = [],
                o = function (t, e) {
                    e = K.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(t) || t.jquery && !K.isPlainObject(t)) K.each(t, function () {
                o(this.name, this.value)
            });
            else
                for (i in t) M(i, t[i], e, o);
            return n.join("&").replace(xe, "+")
        }, K.fn.extend({
            serialize: function () {
                return K.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var t = K.prop(this, "elements");
                    return t ? K.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !K(this).is(":disabled") && Ee.test(this.nodeName) && !Te.test(t) && (this.checked || !_t.test(t))
                }).map(function (t, e) {
                    var i = K(this).val();
                    return null == i ? null : K.isArray(i) ? K.map(i, function (t) {
                        return {
                            name: e.name,
                            value: t.replace(_e, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(_e, "\r\n")
                    }
                }).get()
            }
        }), K.ajaxSettings.xhr = function () {
            try {
                return new XMLHttpRequest
            } catch (t) {}
        };
        var $e = 0,
            Se = {},
            ke = {
                0: 200,
                1223: 204
            },
            Le = K.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function () {
            for (var t in Se) Se[t]()
        }), G.cors = !!Le && "withCredentials" in Le, G.ajax = Le = !!Le, K.ajaxTransport(function (t) {
            var e;
            return G.cors || Le && !t.crossDomain ? {
                send: function (i, n) {
                    var o, s = t.xhr(),
                        r = ++$e;
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) s[o] = t.xhrFields[o];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (o in i) s.setRequestHeader(o, i[o]);
                    e = function (t) {
                        return function () {
                            e && (delete Se[r], e = s.onload = s.onerror = null, "abort" === t ? s.abort() : "error" === t ? n(s.status, s.statusText) : n(ke[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
                                text: s.responseText
                            } : void 0, s.getAllResponseHeaders()))
                        }
                    }, s.onload = e(), s.onerror = e("error"), e = Se[r] = e("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (t) {
                        if (e) throw t
                    }
                },
                abort: function () {
                    e && e()
                }
            } : void 0
        }), K.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function (t) {
                    return K.globalEval(t), t
                }
            }
        }), K.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), K.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e, i;
                return {
                    send: function (n, o) {
                        e = K("<script>").prop({
                            async: !0,
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", i = function (t) {
                            e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                        }), Z.head.appendChild(e[0])
                    },
                    abort: function () {
                        i && i()
                    }
                }
            }
        });
        var Ae = [],
            Oe = /(=)\?(?=&|$)|\?\?/;
        K.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var t = Ae.pop() || K.expando + "_" + ae++;
                return this[t] = !0, t
            }
        }), K.ajaxPrefilter("json jsonp", function (e, i, n) {
            var o, s, r, a = !1 !== e.jsonp && (Oe.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Oe.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = K.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Oe, "$1" + o) : !1 !== e.jsonp && (e.url += (le.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
                return r || K.error(o + " was not called"), r[0]
            }, e.dataTypes[0] = "json", s = t[o], t[o] = function () {
                r = arguments
            }, n.always(function () {
                t[o] = s, e[o] && (e.jsonpCallback = i.jsonpCallback, Ae.push(o)), r && K.isFunction(s) && s(r[0]), r = s = void 0
            }), "script") : void 0
        }), K.parseHTML = function (t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || Z;
            var n = rt.exec(t),
                o = !i && [];
            return n ? [e.createElement(n[1])] : (n = K.buildFragment([t], e, o), o && o.length && K(o).remove(), K.merge([], n.childNodes))
        };
        var De = K.fn.load;
        K.fn.load = function (t, e, i) {
            if ("string" != typeof t && De) return De.apply(this, arguments);
            var n, o, s, r = this,
                a = t.indexOf(" ");
            return a >= 0 && (n = K.trim(t.slice(a)), t = t.slice(0, a)), K.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), r.length > 0 && K.ajax({
                url: t,
                type: o,
                dataType: "html",
                data: e
            }).done(function (t) {
                s = arguments, r.html(n ? K("<div>").append(K.parseHTML(t)).find(n) : t)
            }).complete(i && function (t, e) {
                r.each(i, s || [t.responseText, e, t])
            }), this
        }, K.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            K.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), K.expr.filters.animated = function (t) {
            return K.grep(K.timers, function (e) {
                return t === e.elem
            }).length
        };
        var Ne = t.document.documentElement;
        K.offset = {
            setOffset: function (t, e, i) {
                var n, o, s, r, a, l, c = K.css(t, "position"),
                    h = K(t),
                    u = {};
                "static" === c && (t.style.position = "relative"), a = h.offset(), s = K.css(t, "top"), l = K.css(t, "left"), ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1 ? (n = h.position(), r = n.top, o = n.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), K.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (u.top = e.top - a.top + r), null != e.left && (u.left = e.left - a.left + o), "using" in e ? e.using.call(t, u) : h.css(u)
            }
        }, K.fn.extend({
            offset: function (t) {
                if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                    K.offset.setOffset(this, t, e)
                });
                var e, i, n = this[0],
                    o = {
                        top: 0,
                        left: 0
                    },
                    s = n && n.ownerDocument;
                return s ? (e = s.documentElement, K.contains(e, n) ? (typeof n.getBoundingClientRect !== Tt && (o = n.getBoundingClientRect()), i = W(s), {
                    top: o.top + i.pageYOffset - e.clientTop,
                    left: o.left + i.pageXOffset - e.clientLeft
                }) : o) : void 0
            },
            position: function () {
                if (this[0]) {
                    var t, e, i = this[0],
                        n = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === K.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), K.nodeName(t[0], "html") || (n = t.offset()), n.top += K.css(t[0], "borderTopWidth", !0), n.left += K.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - K.css(i, "marginTop", !0),
                        left: e.left - n.left - K.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent || Ne; t && !K.nodeName(t, "html") && "static" === K.css(t, "position");) t = t.offsetParent;
                    return t || Ne
                })
            }
        }), K.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (e, i) {
            var n = "pageYOffset" === i;
            K.fn[e] = function (o) {
                return gt(this, function (e, o, s) {
                    var r = W(e);
                    return void 0 === s ? r ? r[i] : e[o] : void(r ? r.scrollTo(n ? t.pageXOffset : s, n ? s : t.pageYOffset) : e[o] = s)
                }, e, o, arguments.length, null)
            }
        }), K.each(["top", "left"], function (t, e) {
            K.cssHooks[e] = C(G.pixelPosition, function (t, i) {
                return i ? (i = x(t, e), Wt.test(i) ? K(t).position()[e] + "px" : i) : void 0
            })
        }), K.each({
            Height: "height",
            Width: "width"
        }, function (t, e) {
            K.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function (i, n) {
                K.fn[n] = function (n, o) {
                    var s = arguments.length && (i || "boolean" != typeof n),
                        r = i || (!0 === n || !0 === o ? "margin" : "border");
                    return gt(this, function (e, i, n) {
                        var o;
                        return K.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === n ? K.css(e, i, r) : K.style(e, i, n, r)
                    }, e, s ? n : void 0, s, null)
                }
            })
        }), K.fn.size = function () {
            return this.length
        }, K.fn.andSelf = K.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return K
        });
        var Ie = t.jQuery,
            je = t.$;
        return K.noConflict = function (e) {
            return t.$ === K && (t.$ = je), e && t.jQuery === K && (t.jQuery = Ie), K
        }, typeof e === Tt && (t.jQuery = t.$ = K), K
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (t) {
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery),
function (t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function (e) {
        var i = !1,
            n = this;
        t(this).one("bsTransitionEnd", function () {
            i = !0
        });
        var o = function () {
            i || t(n).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                o = i.data("bs.alert");
            o || i.data("bs.alert", o = new n(this)), "string" == typeof e && o[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]',
        n = function (e) {
            t(e).on("click", i, this.close)
        };
    n.VERSION = "3.3.1", n.TRANSITION_DURATION = 150, n.prototype.close = function (e) {
        function i() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var o = t(this),
            s = o.attr("data-target");
        s || (s = o.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var r = t(s);
        e && e.preventDefault(), r.length || (r = o.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function () {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this),
                o = n.data("bs.button"),
                s = "object" == typeof e && e;
            o || n.data("bs.button", o = new i(this, s)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }
    var i = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
    };
    i.VERSION = "3.3.1", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function (e) {
        var i = "disabled",
            n = this.$element,
            o = n.is("input") ? "val" : "html",
            s = n.data();
        e += "Text", null == s.resetText && n.data("resetText", n[o]()), setTimeout(t.proxy(function () {
            n[o](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
        }, this), 0)
    }, i.prototype.toggle = function () {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        t && this.$element.toggleClass("active")
    };
    var n = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function () {
        return t.fn.button = n, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
        var n = t(i.target);
        n.hasClass("btn") || (n = n.closest(".btn")), e.call(n, "toggle"), i.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this),
                o = n.data("bs.carousel"),
                s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                r = "string" == typeof e ? e : s.slide;
            o || n.data("bs.carousel", o = new i(this, s)), "number" == typeof e ? o.to(e) : r ? o[r]() : s.interval && o.pause().cycle()
        })
    }
    var i = function (e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.1", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function (t, e) {
        var i = "prev" == t ? -1 : 1,
            n = (this.getItemIndex(e) + i) % this.$items.length;
        return this.$items.eq(n)
    }, i.prototype.to = function (t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function (e, n) {
        var o = this.$element.find(".item.active"),
            s = n || this.getItemForDirection(e, o),
            r = this.interval,
            a = "next" == e ? "left" : "right",
            l = "next" == e ? "first" : "last",
            c = this;
        if (!s.length) {
            if (!this.options.wrap) return;
            s = this.$element.find(".item")[l]()
        }
        if (s.hasClass("active")) return this.sliding = !1;
        var h = s[0],
            u = t.Event("slide.bs.carousel", {
                relatedTarget: h,
                direction: a
            });
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = t(this.$indicators.children()[this.getItemIndex(s)]);
                p && p.addClass("active")
            }
            var d = t.Event("slid.bs.carousel", {
                relatedTarget: h,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, o.addClass(a), s.addClass(a), o.one("bsTransitionEnd", function () {
                s.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), c.sliding = !1, setTimeout(function () {
                    c.$element.trigger(d)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (o.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(d)), r && this.cycle(), this
        }
    };
    var n = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = n, this
    };
    var o = function (i) {
        var n, o = t(this),
            s = t(o.attr("data-target") || (n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var r = t.extend({}, s.data(), o.data()),
                a = o.attr("data-slide-to");
            a && (r.interval = !1), e.call(s, r), a && s.data("bs.carousel").to(a), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(n)
    }

    function i(e) {
        return this.each(function () {
            var i = t(this),
                o = i.data("bs.collapse"),
                s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !o && s.toggle && "show" == e && (s.toggle = !1), o || i.data("bs.collapse", o = new n(this, s)), "string" == typeof e && o[e]()
        })
    }
    var n = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t(this.options.trigger).filter('[href="#' + e.id + '"], [data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.3.1", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
        toggle: !0,
        trigger: '[data-toggle="collapse"]'
    }, n.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height"
    }, n.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.find("> .panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse")) && e.transitioning)) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    o && o.length && (i.call(o, "hide"), e || o.data("bs.collapse", null));
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", r].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[r](this.$element[0][l])
                }
            }
        }
    }, n.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, n.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, n.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, n) {
            var o = t(n);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, n.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var o = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (n) {
        var o = t(this);
        o.attr("data-target") || n.preventDefault();
        var s = e(o),
            r = s.data("bs.collapse") ? "toggle" : t.extend({}, o.data(), {
                trigger: this
            });
        i.call(s, r)
    })
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        e && 3 === e.which || (t(o).remove(), t(s).each(function () {
            var n = t(this),
                o = i(n),
                s = {
                    relatedTarget: this
                };
            o.hasClass("open") && (o.trigger(e = t.Event("hide.bs.dropdown", s)), e.isDefaultPrevented() || (n.attr("aria-expanded", "false"), o.removeClass("open").trigger("hidden.bs.dropdown", s)))
        }))
    }

    function i(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var n = i && t(i);
        return n && n.length ? n : e.parent()
    }

    function n(e) {
        return this.each(function () {
            var i = t(this),
                n = i.data("bs.dropdown");
            n || i.data("bs.dropdown", n = new r(this)), "string" == typeof e && n[e].call(i)
        })
    }
    var o = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        r = function (e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    r.VERSION = "3.3.1", r.prototype.toggle = function (n) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var s = i(o),
                r = s.hasClass("open");
            if (e(), !r) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var a = {
                    relatedTarget: this
                };
                if (s.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, r.prototype.keydown = function (e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var n = t(this);
            if (e.preventDefault(), e.stopPropagation(), !n.is(".disabled, :disabled")) {
                var o = i(n),
                    r = o.hasClass("open");
                if (!r && 27 != e.which || r && 27 == e.which) return 27 == e.which && o.find(s).trigger("focus"), n.trigger("click");
                var a = " li:not(.divider):visible a",
                    l = o.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                if (l.length) {
                    var c = l.index(e.target);
                    38 == e.which && c > 0 && c--, 40 == e.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = n, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, r.prototype.toggle).on("keydown.bs.dropdown.data-api", s, r.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', r.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', r.prototype.keydown)
}(jQuery),
function (t) {
    "use strict";

    function e(e, n) {
        return this.each(function () {
            var o = t(this),
                s = o.data("bs.modal"),
                r = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
            s || o.data("bs.modal", s = new i(this, r)), "string" == typeof e ? s[e](n) : r.show && s.show(n)
        })
    }
    var i = function (e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.1", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function (e) {
        var n = this,
            o = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function () {
            var o = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.options.backdrop && n.adjustBackdrop(), n.adjustDialog(), o && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var s = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            o ? n.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
                n.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(s)
        }))
    }, i.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function (e) {
        var n = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && o;
            if (this.$backdrop = t('<div class="modal-backdrop ' + o + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", t.proxy(function (t) {
                    t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function () {
                n.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : r()
        } else e && e()
    }, i.prototype.handleUpdate = function () {
        this.options.backdrop && this.adjustBackdrop(), this.adjustDialog()
    }, i.prototype.adjustBackdrop = function () {
        this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
    }, i.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function () {
        this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", "")
    }, i.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var n = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
        return t.fn.modal = n, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
        var n = t(this),
            o = n.attr("href"),
            s = t(n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            r = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(o) && o
            }, s.data(), n.data());
        n.is("a") && i.preventDefault(), s.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
                n.is(":visible") && n.trigger("focus")
            })
        }), e.call(s, r, this)
    })
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this),
                o = n.data("bs.tooltip"),
                s = "object" == typeof e && e,
                r = s && s.selector;
            (o || "destroy" != e) && (r ? (o || n.data("bs.tooltip", o = {}), o[r] || (o[r] = new i(this, s))) : o || n.data("bs.tooltip", o = new i(this, s)), "string" == typeof e && o[e]())
        })
    }
    var i = function (t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.1", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
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
    }, i.prototype.init = function (e, i, n) {
        this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
        for (var o = this.options.trigger.split(" "), s = o.length; s--;) {
            var r = o[s];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin",
                    l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.getOptions = function (e) {
        return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function () {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function (t, n) {
            i[t] != n && (e[t] = n)
        }), e
    }, i.prototype.enter = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i && i.$tip && i.$tip.is(":visible") ? void(i.hoverState = "in") : (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function () {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.leave = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function () {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    }, i.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var o = this,
                s = this.tip(),
                r = this.getUID(this.type);
            this.setContent(), s.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && s.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(a);
            c && (a = a.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element);
            var h = this.getPosition(),
                u = s[0].offsetWidth,
                p = s[0].offsetHeight;
            if (c) {
                var d = a,
                    f = this.options.container ? t(this.options.container) : this.$element.parent(),
                    g = this.getPosition(f);
                a = "bottom" == a && h.bottom + p > g.bottom ? "top" : "top" == a && h.top - p < g.top ? "bottom" : "right" == a && h.right + u > g.width ? "left" : "left" == a && h.left - u < g.left ? "right" : a, s.removeClass(d).addClass(a)
            }
            var m = this.getCalculatedOffset(a, h, u, p);
            this.applyPlacement(m, a);
            var v = function () {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", v).emulateTransitionEnd(i.TRANSITION_DURATION) : v()
        }
    }, i.prototype.applyPlacement = function (e, i) {
        var n = this.tip(),
            o = n[0].offsetWidth,
            s = n[0].offsetHeight,
            r = parseInt(n.css("margin-top"), 10),
            a = parseInt(n.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top = e.top + r, e.left = e.left + a, t.offset.setOffset(n[0], t.extend({
            using: function (t) {
                n.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), n.addClass("in");
        var l = n[0].offsetWidth,
            c = n[0].offsetHeight;
        "top" == i && c != s && (e.top = e.top + s - c);
        var h = this.getViewportAdjustedDelta(i, e, l, c);
        h.left ? e.left += h.left : e.top += h.top;
        var u = /top|bottom/.test(i),
            p = u ? 2 * h.left - o + l : 2 * h.top - s + c,
            d = u ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(p, n[0][d], u)
    }, i.prototype.replaceArrow = function (t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function (e) {
        function n() {
            "in" != o.hoverState && s.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
        }
        var o = this,
            s = this.tip(),
            r = t.Event("hide.bs." + this.type);
        return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function () {
        return this.getTitle()
    }, i.prototype.getPosition = function (e) {
        var i = (e = e || this.$element)[0],
            n = "BODY" == i.tagName,
            o = i.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var s = n ? {
                top: 0,
                left: 0
            } : e.offset(),
            r = {
                scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            a = n ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, o, r, a, s)
    }, i.prototype.getCalculatedOffset = function (t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - n / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function (t, e, i, n) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - s - r.scroll,
                l = e.top + s - r.scroll + n;
            a < r.top ? o.top = r.top - a : l > r.top + r.height && (o.top = r.top + r.height - l)
        } else {
            var c = e.left - s,
                h = e.left + s + i;
            c < r.left ? o.left = r.left - c : h > r.width && (o.left = r.left + r.width - h)
        }
        return o
    }, i.prototype.getTitle = function () {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, i.prototype.getUID = function (t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, i.prototype.tip = function () {
        return this.$tip = this.$tip || t(this.options.template)
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function () {
        this.enabled = !0
    }, i.prototype.disable = function () {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function (e) {
        var i = this;
        e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type)
        })
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = n, this
    }
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this),
                o = n.data("bs.popover"),
                s = "object" == typeof e && e,
                r = s && s.selector;
            (o || "destroy" != e) && (r ? (o || n.data("bs.popover", o = {}), o[r] || (o[r] = new i(this, s))) : o || n.data("bs.popover", o = new i(this, s)), "string" == typeof e && o[e]())
        })
    }
    var i = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.1", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function () {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, i.prototype.tip = function () {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip
    };
    var n = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function () {
        return t.fn.popover = n, this
    }
}(jQuery),
function (t) {
    "use strict";

    function e(i, n) {
        var o = t.proxy(this.process, this);
        this.$body = t("body"), this.$scrollElement = t(t(i).is("body") ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", o), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function () {
            var n = t(this),
                o = n.data("bs.scrollspy"),
                s = "object" == typeof i && i;
            o || n.data("bs.scrollspy", o = new e(this, s)), "string" == typeof i && o[i]()
        })
    }
    e.VERSION = "3.3.1", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = "offset",
            i = 0;
        t.isWindow(this.$scrollElement[0]) || (e = "position", i = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var n = this;
        this.$body.find(this.selector).map(function () {
            var n = t(this),
                o = n.data("target") || n.attr("href"),
                s = /^#./.test(o) && t(o);
            return s && s.length && s.is(":visible") && [
                [s[e]().top + i, o]
            ] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            n.offsets.push(this[0]), n.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            n = this.options.offset + i - this.$scrollElement.height(),
            o = this.offsets,
            s = this.targets,
            r = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= n) return r != (t = s[s.length - 1]) && this.activate(t);
        if (r && e < o[0]) return this.activeTarget = null, this.clear();
        for (t = o.length; t--;) r != s[t] && e >= o[t] && (!o[t + 1] || e <= o[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            n = t(i).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var n = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = n, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this),
                o = n.data("bs.tab");
            o || n.data("bs.tab", o = new i(this)), "string" == typeof e && o[e]()
        })
    }
    var i = function (e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.1", i.TRANSITION_DURATION = 150, i.prototype.show = function () {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            n = e.data("target");
        if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = i.find(".active:last a"),
                s = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                r = t.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(s), e.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var a = t(n);
                this.activate(e.closest("li"), i), this.activate(a, a.parent(), function () {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function (e, n, o) {
        function s() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var r = n.find("> .active"),
            a = o && t.support.transition && (r.length && r.hasClass("fade") || !!n.find("> .fade").length);
        r.length && a ? r.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), r.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
        return t.fn.tab = n, this
    };
    var o = function (i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this),
                o = n.data("bs.affix"),
                s = "object" == typeof e && e;
            o || n.data("bs.affix", o = new i(this, s)), "string" == typeof e && o[e]()
        })
    }
    var i = function (e, n) {
        this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.1", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function (t, e, i, n) {
        var o = this.$target.scrollTop(),
            s = this.$element.offset(),
            r = this.$target.height();
        if (null != i && "top" == this.affixed) return i > o && "top";
        if ("bottom" == this.affixed) return null != i ? !(o + this.unpin <= s.top) && "bottom" : !(t - n >= o + r) && "bottom";
        var a = null == this.affixed,
            l = a ? o : s.top,
            c = a ? r : e;
        return null != i && i >= l ? "top" : null != n && l + c >= t - n && "bottom"
    }, i.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                n = this.options.offset,
                o = n.top,
                s = n.bottom,
                r = t("body").height();
            "object" != typeof n && (s = o = n), "function" == typeof o && (o = n.top(this.$element)), "function" == typeof s && (s = n.bottom(this.$element));
            var a = this.getState(r, e, o, s);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: r - e - s
            })
        }
    };
    var n = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function () {
        return t.fn.affix = n, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var i = t(this),
                n = i.data();
            n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
        })
    })
}(jQuery),
function () {
    function t() {}

    function e(t, e) {
        for (var i = t.length; i--;)
            if (t[i].listener === e) return i;
        return -1
    }

    function i(t) {
        return function () {
            return this[t].apply(this, arguments)
        }
    }
    var n = t.prototype,
        o = this,
        s = o.EventEmitter;
    n.getListeners = function (t) {
        var e, i, n = this._getEvents();
        if ("object" == typeof t) {
            e = {};
            for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
        } else e = n[t] || (n[t] = []);
        return e
    }, n.flattenListeners = function (t) {
        var e, i = [];
        for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
        return i
    }, n.getListenersAsObject = function (t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    }, n.addListener = function (t, i) {
        var n, o = this.getListenersAsObject(t),
            s = "object" == typeof i;
        for (n in o) o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(s ? i : {
            listener: i,
            once: !1
        });
        return this
    }, n.on = i("addListener"), n.addOnceListener = function (t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }, n.once = i("addOnceListener"), n.defineEvent = function (t) {
        return this.getListeners(t), this
    }, n.defineEvents = function (t) {
        for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
        return this
    }, n.removeListener = function (t, i) {
        var n, o, s = this.getListenersAsObject(t);
        for (o in s) s.hasOwnProperty(o) && -1 !== (n = e(s[o], i)) && s[o].splice(n, 1);
        return this
    }, n.off = i("removeListener"), n.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e)
    }, n.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e)
    }, n.manipulateListeners = function (t, e, i) {
        var n, o, s = t ? this.removeListener : this.addListener,
            r = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (n = i.length; n--;) s.call(this, e, i[n]);
        else
            for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? s.call(this, n, o) : r.call(this, n, o));
        return this
    }, n.removeEvent = function (t) {
        var e, i = typeof t,
            n = this._getEvents();
        if ("string" === i) delete n[t];
        else if ("object" === i)
            for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
        else delete this._events;
        return this
    }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function (t, e) {
        var i, n, o, s = this.getListenersAsObject(t);
        for (o in s)
            if (s.hasOwnProperty(o))
                for (n = s[o].length; n--;) !0 === (i = s[o][n]).once && this.removeListener(t, i.listener), i.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, n.trigger = i("emitEvent"), n.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, n.setOnceReturnValue = function (t) {
        return this._onceReturnValue = t, this
    }, n._getOnceReturnValue = function () {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }, n._getEvents = function () {
        return this._events || (this._events = {})
    }, t.noConflict = function () {
        return o.EventEmitter = s, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}.call(this),
    function (t) {
        function e(e) {
            var i = t.event;
            return i.target = i.target || i.srcElement || e, i
        }
        var i = document.documentElement,
            n = function () {};
        i.addEventListener ? n = function (t, e, i) {
            t.addEventListener(e, i, !1)
        } : i.attachEvent && (n = function (t, i, n) {
            t[i + n] = n.handleEvent ? function () {
                var i = e(t);
                n.handleEvent.call(n, i)
            } : function () {
                var i = e(t);
                n.call(t, i)
            }, t.attachEvent("on" + i, t[i + n])
        });
        var o = function () {};
        i.removeEventListener ? o = function (t, e, i) {
            t.removeEventListener(e, i, !1)
        } : i.detachEvent && (o = function (t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (n) {
                t[e + i] = void 0
            }
        });
        var s = {
            bind: n,
            unbind: o
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", s) : t.eventie = s
    }(this),
    function (t, e) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
    }(window, function (t, e, i) {
        function n(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function o(t) {
            return "[object Array]" === p.call(t)
        }

        function s(t) {
            var e = [];
            if (o(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0, n = t.length; n > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function r(t, e, i) {
            if (!(this instanceof r)) return new r(t, e);
            "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = s(t), this.options = n({}, this.options), "function" == typeof e ? i = e : n(this.options, e), i && this.on("always", i), this.getImages(), c && (this.jqDeferred = new c.Deferred);
            var o = this;
            setTimeout(function () {
                o.check()
            })
        }

        function a(t) {
            this.img = t
        }

        function l(t) {
            this.src = t, d[t] = this
        }
        var c = t.jQuery,
            h = t.console,
            u = void 0 !== h,
            p = Object.prototype.toString;
        r.prototype = new e, r.prototype.options = {}, r.prototype.getImages = function () {
            this.images = [];
            for (var t = 0, e = this.elements.length; e > t; t++) {
                var i = this.elements[t];
                "IMG" === i.nodeName && this.addImage(i);
                var n = i.nodeType;
                if (n && (1 === n || 9 === n || 11 === n))
                    for (var o = i.querySelectorAll("img"), s = 0, r = o.length; r > s; s++) {
                        var a = o[s];
                        this.addImage(a)
                    }
            }
        }, r.prototype.addImage = function (t) {
            var e = new a(t);
            this.images.push(e)
        }, r.prototype.check = function () {
            function t(t, o) {
                return e.options.debug && u && h.log("confirm", t, o), e.progress(t), ++i === n && e.complete(), !0
            }
            var e = this,
                i = 0,
                n = this.images.length;
            if (this.hasAnyBroken = !1, n)
                for (var o = 0; n > o; o++) {
                    var s = this.images[o];
                    s.on("confirm", t), s.check()
                } else this.complete()
        }, r.prototype.progress = function (t) {
            this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
            var e = this;
            setTimeout(function () {
                e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
            })
        }, r.prototype.complete = function () {
            var t = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var e = this;
            setTimeout(function () {
                if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
                    var i = e.hasAnyBroken ? "reject" : "resolve";
                    e.jqDeferred[i](e)
                }
            })
        }, c && (c.fn.imagesLoaded = function (t, e) {
            return new r(this, t, e).jqDeferred.promise(c(this))
        }), a.prototype = new e, a.prototype.check = function () {
            var t = d[this.img.src] || new l(this.img.src);
            if (t.isConfirmed) this.confirm(t.isLoaded, "cached was confirmed");
            else if (this.img.complete && void 0 !== this.img.naturalWidth) this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            else {
                var e = this;
                t.on("confirm", function (t, i) {
                    return e.confirm(t.isLoaded, i), !0
                }), t.check()
            }
        }, a.prototype.confirm = function (t, e) {
            this.isLoaded = t, this.emit("confirm", this, e)
        };
        var d = {};
        return l.prototype = new e, l.prototype.check = function () {
            if (!this.isChecked) {
                var t = new Image;
                i.bind(t, "load", this), i.bind(t, "error", this), t.src = this.src, this.isChecked = !0
            }
        }, l.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, l.prototype.onload = function (t) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(t)
        }, l.prototype.onerror = function (t) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(t)
        }, l.prototype.confirm = function (t, e) {
            this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
        }, l.prototype.unbindProxyEvents = function (t) {
            i.unbind(t.target, "load", this), i.unbind(t.target, "error", this)
        }, r
    }),
    function (t) {
        function e() {}

        function i(t) {
            function i(e) {
                e.prototype.option || (e.prototype.option = function (e) {
                    t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
                })
            }

            function o(e, i) {
                t.fn[e] = function (o) {
                    if ("string" == typeof o) {
                        for (var r = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                            var c = this[a],
                                h = t.data(c, e);
                            if (h)
                                if (t.isFunction(h[o]) && "_" !== o.charAt(0)) {
                                    var u = h[o].apply(h, r);
                                    if (void 0 !== u) return u
                                } else s("no such method '" + o + "' for " + e + " instance");
                            else s("cannot call methods on " + e + " prior to initialization; attempted to call '" + o + "'")
                        }
                        return this
                    }
                    return this.each(function () {
                        var n = t.data(this, e);
                        n ? (n.option(o), n._init()) : (n = new i(this, o), t.data(this, e, n))
                    })
                }
            }
            if (t) {
                var s = "undefined" == typeof console ? e : function (t) {
                    console.error(t)
                };
                return t.bridget = function (t, e) {
                    i(e), o(t, e)
                }, t.bridget
            }
        }
        var n = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i(t.jQuery)
    }(window),
    function (t) {
        function e(e) {
            var i = t.event;
            return i.target = i.target || i.srcElement || e, i
        }
        var i = document.documentElement,
            n = function () {};
        i.addEventListener ? n = function (t, e, i) {
            t.addEventListener(e, i, !1)
        } : i.attachEvent && (n = function (t, i, n) {
            t[i + n] = n.handleEvent ? function () {
                var i = e(t);
                n.handleEvent.call(n, i)
            } : function () {
                var i = e(t);
                n.call(t, i)
            }, t.attachEvent("on" + i, t[i + n])
        });
        var o = function () {};
        i.removeEventListener ? o = function (t, e, i) {
            t.removeEventListener(e, i, !1)
        } : i.detachEvent && (o = function (t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (n) {
                t[e + i] = void 0
            }
        });
        var s = {
            bind: n,
            unbind: o
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", s) : "object" == typeof exports ? module.exports = s : t.eventie = s
    }(this),
    function (t) {
        function e(t) {
            "function" == typeof t && (e.isReady ? t() : s.push(t))
        }

        function i(t) {
            var i = "readystatechange" === t.type && "complete" !== o.readyState;
            if (!e.isReady && !i) {
                e.isReady = !0;
                for (var n = 0, r = s.length; r > n; n++)(0, s[n])()
            }
        }

        function n(n) {
            return n.bind(o, "DOMContentLoaded", i), n.bind(o, "readystatechange", i), n.bind(t, "load", i), e
        }
        var o = t.document,
            s = [];
        e.isReady = !1, "function" == typeof define && define.amd ? (e.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], n)) : t.docReady = n(t.eventie)
    }(this),
    function () {
        function t() {}

        function e(t, e) {
            for (var i = t.length; i--;)
                if (t[i].listener === e) return i;
            return -1
        }

        function i(t) {
            return function () {
                return this[t].apply(this, arguments)
            }
        }
        var n = t.prototype,
            o = this,
            s = o.EventEmitter;
        n.getListeners = function (t) {
            var e, i, n = this._getEvents();
            if (t instanceof RegExp) {
                e = {};
                for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
            } else e = n[t] || (n[t] = []);
            return e
        }, n.flattenListeners = function (t) {
            var e, i = [];
            for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
            return i
        }, n.getListenersAsObject = function (t) {
            var e, i = this.getListeners(t);
            return i instanceof Array && (e = {}, e[t] = i), e || i
        }, n.addListener = function (t, i) {
            var n, o = this.getListenersAsObject(t),
                s = "object" == typeof i;
            for (n in o) o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(s ? i : {
                listener: i,
                once: !1
            });
            return this
        }, n.on = i("addListener"), n.addOnceListener = function (t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            })
        }, n.once = i("addOnceListener"), n.defineEvent = function (t) {
            return this.getListeners(t), this
        }, n.defineEvents = function (t) {
            for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
            return this
        }, n.removeListener = function (t, i) {
            var n, o, s = this.getListenersAsObject(t);
            for (o in s) s.hasOwnProperty(o) && -1 !== (n = e(s[o], i)) && s[o].splice(n, 1);
            return this
        }, n.off = i("removeListener"), n.addListeners = function (t, e) {
            return this.manipulateListeners(!1, t, e)
        }, n.removeListeners = function (t, e) {
            return this.manipulateListeners(!0, t, e)
        }, n.manipulateListeners = function (t, e, i) {
            var n, o, s = t ? this.removeListener : this.addListener,
                r = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (n = i.length; n--;) s.call(this, e, i[n]);
            else
                for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? s.call(this, n, o) : r.call(this, n, o));
            return this
        }, n.removeEvent = function (t) {
            var e, i = typeof t,
                n = this._getEvents();
            if ("string" === i) delete n[t];
            else if (t instanceof RegExp)
                for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
            else delete this._events;
            return this
        }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function (t, e) {
            var i, n, o, s = this.getListenersAsObject(t);
            for (o in s)
                if (s.hasOwnProperty(o))
                    for (n = s[o].length; n--;) !0 === (i = s[o][n]).once && this.removeListener(t, i.listener), i.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, i.listener);
            return this
        }, n.trigger = i("emitEvent"), n.emit = function (t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, n.setOnceReturnValue = function (t) {
            return this._onceReturnValue = t, this
        }, n._getOnceReturnValue = function () {
            return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
        }, n._getEvents = function () {
            return this._events || (this._events = {})
        }, t.noConflict = function () {
            return o.EventEmitter = s, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
    }.call(this),
    function (t) {
        function e(t) {
            if (t) {
                if ("string" == typeof n[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, o = 0, s = i.length; s > o; o++)
                    if (e = i[o] + t, "string" == typeof n[e]) return e
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            n = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
            return e
        }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
    }(window),
    function (t) {
        function e(t) {
            var e = parseFloat(t);
            return -1 === t.indexOf("%") && !isNaN(e) && e
        }

        function i() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0, i = r.length; i > e; e++) t[r[e]] = 0;
            return t
        }

        function n(t) {
            function n(t) {
                if ("string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var n = s(t);
                    if ("none" === n.display) return i();
                    var o = {};
                    o.width = t.offsetWidth, o.height = t.offsetHeight;
                    for (var h = o.isBorderBox = !(!c || !n[c] || "border-box" !== n[c]), u = 0, p = r.length; p > u; u++) {
                        var d = r[u],
                            f = n[d];
                        f = a(t, f);
                        var g = parseFloat(f);
                        o[d] = isNaN(g) ? 0 : g
                    }
                    var m = o.paddingLeft + o.paddingRight,
                        v = o.paddingTop + o.paddingBottom,
                        y = o.marginLeft + o.marginRight,
                        b = o.marginTop + o.marginBottom,
                        w = o.borderLeftWidth + o.borderRightWidth,
                        x = o.borderTopWidth + o.borderBottomWidth,
                        C = h && l,
                        _ = e(n.width);
                    !1 !== _ && (o.width = _ + (C ? 0 : m + w));
                    var T = e(n.height);
                    return !1 !== T && (o.height = T + (C ? 0 : v + x)), o.innerWidth = o.width - (m + w), o.innerHeight = o.height - (v + x), o.outerWidth = o.width + y, o.outerHeight = o.height + b, o
                }
            }

            function a(t, e) {
                if (o || -1 === e.indexOf("%")) return e;
                var i = t.style,
                    n = i.left,
                    s = t.runtimeStyle,
                    r = s && s.left;
                return r && (s.left = t.currentStyle.left), i.left = e, e = i.pixelLeft, i.left = n, r && (s.left = r), e
            }
            var l, c = t("boxSizing");
            return function () {
                if (c) {
                    var t = document.createElement("div");
                    t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style[c] = "border-box";
                    var i = document.body || document.documentElement;
                    i.appendChild(t);
                    var n = s(t);
                    l = 200 === e(n.width), i.removeChild(t)
                }
            }(), n
        }
        var o = t.getComputedStyle,
            s = o ? function (t) {
                return o(t, null)
            } : function (t) {
                return t.currentStyle
            },
            r = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], n) : "object" == typeof exports ? module.exports = n(require("get-style-property")) : t.getSize = n(t.getStyleProperty)
    }(window),
    function (t, e) {
        function i(t, e) {
            return t[a](e)
        }

        function n(t) {
            t.parentNode || document.createDocumentFragment().appendChild(t)
        }

        function o(t, e) {
            n(t);
            for (var i = t.parentNode.querySelectorAll(e), o = 0, s = i.length; s > o; o++)
                if (i[o] === t) return !0;
            return !1
        }

        function s(t, e) {
            return n(t), i(t, e)
        }
        var r, a = function () {
            if (e.matchesSelector) return "matchesSelector";
            for (var t = ["webkit", "moz", "ms", "o"], i = 0, n = t.length; n > i; i++) {
                var o = t[i] + "MatchesSelector";
                if (e[o]) return o
            }
        }();
        if (a) {
            var l = i(document.createElement("div"), "div");
            r = l ? i : s
        } else r = o;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
            return r
        }) : window.matchesSelector = r
    }(0, Element.prototype),
    function (t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            for (var e in t) return !1;
            return null, !0
        }

        function n(t) {
            return t.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase()
            })
        }

        function o(t, o, s) {
            function a(t, e) {
                t && (this.element = t, this.layout = e, this.position = {
                    x: 0,
                    y: 0
                }, this._create())
            }
            var l = s("transition"),
                c = s("transform"),
                h = l && c,
                u = !!s("perspective"),
                p = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                }[l],
                d = ["transform", "transition", "transitionDuration", "transitionProperty"],
                f = function () {
                    for (var t = {}, e = 0, i = d.length; i > e; e++) {
                        var n = d[e],
                            o = s(n);
                        o && o !== n && (t[n] = o)
                    }
                    return t
                }();
            e(a.prototype, t.prototype), a.prototype._create = function () {
                this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                }, this.css({
                    position: "absolute"
                })
            }, a.prototype.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, a.prototype.getSize = function () {
                this.size = o(this.element)
            }, a.prototype.css = function (t) {
                var e = this.element.style;
                for (var i in t) e[f[i] || i] = t[i]
            }, a.prototype.getPosition = function () {
                var t = r(this.element),
                    e = this.layout.options,
                    i = e.isOriginLeft,
                    n = e.isOriginTop,
                    o = parseInt(t[i ? "left" : "right"], 10),
                    s = parseInt(t[n ? "top" : "bottom"], 10);
                o = isNaN(o) ? 0 : o, s = isNaN(s) ? 0 : s;
                var a = this.layout.size;
                o -= i ? a.paddingLeft : a.paddingRight, s -= n ? a.paddingTop : a.paddingBottom, this.position.x = o, this.position.y = s
            }, a.prototype.layoutPosition = function () {
                var t = this.layout.size,
                    e = this.layout.options,
                    i = {};
                e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px", i.right = "") : (i.right = this.position.x + t.paddingRight + "px", i.left = ""), e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px", i.top = ""), this.css(i), this.emitEvent("layout", [this])
            };
            var g = u ? function (t, e) {
                return "translate3d(" + t + "px, " + e + "px, 0)"
            } : function (t, e) {
                return "translate(" + t + "px, " + e + "px)"
            };
            a.prototype._transitionTo = function (t, e) {
                this.getPosition();
                var i = this.position.x,
                    n = this.position.y,
                    o = parseInt(t, 10),
                    s = parseInt(e, 10),
                    r = o === this.position.x && s === this.position.y;
                if (this.setPosition(t, e), !r || this.isTransitioning) {
                    var a = t - i,
                        l = e - n,
                        c = {},
                        h = this.layout.options;
                    a = h.isOriginLeft ? a : -a, l = h.isOriginTop ? l : -l, c.transform = g(a, l), this.transition({
                        to: c,
                        onTransitionEnd: {
                            transform: this.layoutPosition
                        },
                        isCleaning: !0
                    })
                } else this.layoutPosition()
            }, a.prototype.goTo = function (t, e) {
                this.setPosition(t, e), this.layoutPosition()
            }, a.prototype.moveTo = h ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function (t, e) {
                this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
            }, a.prototype._nonTransition = function (t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
            }, a.prototype._transition = function (t) {
                if (parseFloat(this.layout.options.transitionDuration)) {
                    var e = this._transn;
                    for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                    for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                    if (t.from) {
                        this.css(t.from);
                        this.element.offsetHeight;
                        null
                    }
                    this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
                } else this._nonTransition(t)
            };
            var m = c && n(c) + ",opacity";
            a.prototype.enableTransition = function () {
                this.isTransitioning || (this.css({
                    transitionProperty: m,
                    transitionDuration: this.layout.options.transitionDuration
                }), this.element.addEventListener(p, this, !1))
            }, a.prototype.transition = a.prototype[l ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function (t) {
                this.ontransitionend(t)
            }, a.prototype.onotransitionend = function (t) {
                this.ontransitionend(t)
            };
            var v = {
                "-webkit-transform": "transform",
                "-moz-transform": "transform",
                "-o-transform": "transform"
            };
            a.prototype.ontransitionend = function (t) {
                if (t.target === this.element) {
                    var e = this._transn,
                        n = v[t.propertyName] || t.propertyName;
                    delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd && (e.onEnd[n].call(this), delete e.onEnd[n]), this.emitEvent("transitionEnd", [this])
                }
            }, a.prototype.disableTransition = function () {
                this.removeTransitionStyles(), this.element.removeEventListener(p, this, !1), this.isTransitioning = !1
            }, a.prototype._removeStyles = function (t) {
                var e = {};
                for (var i in t) e[i] = "";
                this.css(e)
            };
            var y = {
                transitionProperty: "",
                transitionDuration: ""
            };
            return a.prototype.removeTransitionStyles = function () {
                this.css(y)
            }, a.prototype.removeElem = function () {
                this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
            }, a.prototype.remove = function () {
                if (l && parseFloat(this.layout.options.transitionDuration)) {
                    var t = this;
                    this.on("transitionEnd", function () {
                        return t.removeElem(), !0
                    }), this.hide()
                } else this.removeElem()
            }, a.prototype.reveal = function () {
                delete this.isHidden, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.hiddenStyle,
                    to: t.visibleStyle,
                    isCleaning: !0
                })
            }, a.prototype.hide = function () {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.visibleStyle,
                    to: t.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: {
                        opacity: function () {
                            this.isHidden && this.css({
                                display: "none"
                            })
                        }
                    }
                })
            }, a.prototype.destroy = function () {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }, a
        }
        var s = t.getComputedStyle,
            r = s ? function (t) {
                return s(t, null)
            } : function (t) {
                return t.currentStyle
            };
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], o) : (t.Outlayer = {}, t.Outlayer.Item = o(t.EventEmitter, t.getSize, t.getStyleProperty))
    }(window),
    function (t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            return "[object Array]" === u.call(t)
        }

        function n(t) {
            var e = [];
            if (i(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var n = 0, o = t.length; o > n; n++) e.push(t[n]);
            else e.push(t);
            return e
        }

        function o(t, e) {
            var i = d(e, t); - 1 !== i && e.splice(i, 1)
        }

        function s(t) {
            return t.replace(/(.)([A-Z])/g, function (t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        }

        function r(i, r, u, d, f, g) {
            function m(t, i) {
                if ("string" == typeof t && (t = a.querySelector(t)), t && p(t)) {
                    this.element = t, this.options = e({}, this.constructor.defaults), this.option(i);
                    var n = ++v;
                    this.element.outlayerGUID = n, y[n] = this, this._create(), this.options.isInitLayout && this.layout()
                } else l && l.error("Bad " + this.constructor.namespace + " element: " + t)
            }
            var v = 0,
                y = {};
            return m.namespace = "outlayer", m.Item = g, m.defaults = {
                containerStyle: {
                    position: "relative"
                },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                isResizingContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            }, e(m.prototype, u.prototype), m.prototype.option = function (t) {
                e(this.options, t)
            }, m.prototype._create = function () {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
            }, m.prototype.reloadItems = function () {
                this.items = this._itemize(this.element.children)
            }, m.prototype._itemize = function (t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0, s = e.length; s > o; o++) {
                    var r = new i(e[o], this);
                    n.push(r)
                }
                return n
            }, m.prototype._filterFindItemElements = function (t) {
                t = n(t);
                for (var e = this.options.itemSelector, i = [], o = 0, s = t.length; s > o; o++) {
                    var r = t[o];
                    if (p(r))
                        if (e) {
                            f(r, e) && i.push(r);
                            for (var a = r.querySelectorAll(e), l = 0, c = a.length; c > l; l++) i.push(a[l])
                        } else i.push(r)
                }
                return i
            }, m.prototype.getItemElements = function () {
                for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
                return t
            }, m.prototype.layout = function () {
                this._resetLayout(), this._manageStamps();
                var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, t), this._isLayoutInited = !0
            }, m.prototype._init = m.prototype.layout, m.prototype._resetLayout = function () {
                this.getSize()
            }, m.prototype.getSize = function () {
                this.size = d(this.element)
            }, m.prototype._getMeasurement = function (t, e) {
                var i, n = this.options[t];
                n ? ("string" == typeof n ? i = this.element.querySelector(n) : p(n) && (i = n), this[t] = i ? d(i)[e] : n) : this[t] = 0
            }, m.prototype.layoutItems = function (t, e) {
                t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
            }, m.prototype._getItemsForLayout = function (t) {
                for (var e = [], i = 0, n = t.length; n > i; i++) {
                    var o = t[i];
                    o.isIgnored || e.push(o)
                }
                return e
            }, m.prototype._layoutItems = function (t, e) {
                function i() {
                    n.emitEvent("layoutComplete", [n, t])
                }
                var n = this;
                if (t && t.length) {
                    this._itemsOn(t, "layout", i);
                    for (var o = [], s = 0, r = t.length; r > s; s++) {
                        var a = t[s],
                            l = this._getItemLayoutPosition(a);
                        l.item = a, l.isInstant = e || a.isLayoutInstant, o.push(l)
                    }
                    this._processLayoutQueue(o)
                } else i()
            }, m.prototype._getItemLayoutPosition = function () {
                return {
                    x: 0,
                    y: 0
                }
            }, m.prototype._processLayoutQueue = function (t) {
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    this._positionItem(n.item, n.x, n.y, n.isInstant)
                }
            }, m.prototype._positionItem = function (t, e, i, n) {
                n ? t.goTo(e, i) : t.moveTo(e, i)
            }, m.prototype._postLayout = function () {
                this.resizeContainer()
            }, m.prototype.resizeContainer = function () {
                if (this.options.isResizingContainer) {
                    var t = this._getContainerSize();
                    t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
                }
            }, m.prototype._getContainerSize = h, m.prototype._setContainerMeasure = function (t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
                }
            }, m.prototype._itemsOn = function (t, e, i) {
                function n() {
                    return ++o === s && i.call(r), !0
                }
                for (var o = 0, s = t.length, r = this, a = 0, l = t.length; l > a; a++) t[a].on(e, n)
            }, m.prototype.ignore = function (t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0)
            }, m.prototype.unignore = function (t) {
                var e = this.getItem(t);
                e && delete e.isIgnored
            }, m.prototype.stamp = function (t) {
                if (t = this._find(t)) {
                    this.stamps = this.stamps.concat(t);
                    for (var e = 0, i = t.length; i > e; e++) {
                        var n = t[e];
                        this.ignore(n)
                    }
                }
            }, m.prototype.unstamp = function (t) {
                if (t = this._find(t))
                    for (var e = 0, i = t.length; i > e; e++) {
                        var n = t[e];
                        o(n, this.stamps), this.unignore(n)
                    }
            }, m.prototype._find = function (t) {
                return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n(t)) : void 0
            }, m.prototype._manageStamps = function () {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var t = 0, e = this.stamps.length; e > t; t++) {
                        var i = this.stamps[t];
                        this._manageStamp(i)
                    }
                }
            }, m.prototype._getBoundingRect = function () {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
                }
            }, m.prototype._manageStamp = h, m.prototype._getElementOffset = function (t) {
                var e = t.getBoundingClientRect(),
                    i = this._boundingRect,
                    n = d(t);
                return {
                    left: e.left - i.left - n.marginLeft,
                    top: e.top - i.top - n.marginTop,
                    right: i.right - e.right - n.marginRight,
                    bottom: i.bottom - e.bottom - n.marginBottom
                }
            }, m.prototype.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, m.prototype.bindResize = function () {
                this.isResizeBound || (i.bind(t, "resize", this), this.isResizeBound = !0)
            }, m.prototype.unbindResize = function () {
                this.isResizeBound && i.unbind(t, "resize", this), this.isResizeBound = !1
            }, m.prototype.onresize = function () {
                function t() {
                    e.resize(), delete e.resizeTimeout
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var e = this;
                this.resizeTimeout = setTimeout(t, 100)
            }, m.prototype.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout()
            }, m.prototype.needsResizeLayout = function () {
                var t = d(this.element);
                return this.size && t && t.innerWidth !== this.size.innerWidth
            }, m.prototype.addItems = function (t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e
            }, m.prototype.appended = function (t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e))
            }, m.prototype.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
                }
            }, m.prototype.reveal = function (t) {
                var e = t && t.length;
                if (e)
                    for (var i = 0; e > i; i++) t[i].reveal()
            }, m.prototype.hide = function (t) {
                var e = t && t.length;
                if (e)
                    for (var i = 0; e > i; i++) t[i].hide()
            }, m.prototype.getItem = function (t) {
                for (var e = 0, i = this.items.length; i > e; e++) {
                    var n = this.items[e];
                    if (n.element === t) return n
                }
            }, m.prototype.getItems = function (t) {
                if (t && t.length) {
                    for (var e = [], i = 0, n = t.length; n > i; i++) {
                        var o = t[i],
                            s = this.getItem(o);
                        s && e.push(s)
                    }
                    return e
                }
            }, m.prototype.remove = function (t) {
                t = n(t);
                var e = this.getItems(t);
                if (e && e.length) {
                    this._itemsOn(e, "remove", function () {
                        this.emitEvent("removeComplete", [this, e])
                    });
                    for (var i = 0, s = e.length; s > i; i++) {
                        var r = e[i];
                        r.remove(), o(r, this.items)
                    }
                }
            }, m.prototype.destroy = function () {
                var t = this.element.style;
                t.height = "", t.position = "", t.width = "";
                for (var e = 0, i = this.items.length; i > e; e++) this.items[e].destroy();
                this.unbindResize(), delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace)
            }, m.data = function (t) {
                var e = t && t.outlayerGUID;
                return e && y[e]
            }, m.create = function (t, i) {
                function n() {
                    m.apply(this, arguments)
                }
                return Object.create ? n.prototype = Object.create(m.prototype) : e(n.prototype, m.prototype), n.prototype.constructor = n, n.defaults = e({}, m.defaults), e(n.defaults, i), n.prototype.settings = {}, n.namespace = t, n.data = m.data, n.Item = function () {
                    g.apply(this, arguments)
                }, n.Item.prototype = new g, r(function () {
                    for (var e = s(t), i = a.querySelectorAll(".js-" + e), o = "data-" + e + "-options", r = 0, h = i.length; h > r; r++) {
                        var u, p = i[r],
                            d = p.getAttribute(o);
                        try {
                            u = d && JSON.parse(d)
                        } catch (t) {
                            l && l.error("Error parsing " + o + " on " + p.nodeName.toLowerCase() + (p.id ? "#" + p.id : "") + ": " + t);
                            continue
                        }
                        var f = new n(p, u);
                        c && c.data(p, t, f)
                    }
                }), c && c.bridget && c.bridget(t, n), n
            }, m.Item = g, m
        }
        var a = t.document,
            l = t.console,
            c = t.jQuery,
            h = function () {},
            u = Object.prototype.toString,
            p = "object" == typeof HTMLElement ? function (t) {
                return t instanceof HTMLElement
            } : function (t) {
                return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
            },
            d = Array.prototype.indexOf ? function (t, e) {
                return t.indexOf(e)
            } : function (t, e) {
                for (var i = 0, n = t.length; n > i; i++)
                    if (t[i] === e) return i;
                return -1
            };
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], r) : t.Outlayer = r(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
    }(window),
    function (t) {
        function e(t, e) {
            var n = t.create("masonry");
            return n.prototype._resetLayout = function () {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
                var t = this.cols;
                for (this.colYs = []; t--;) this.colYs.push(0);
                this.maxY = 0
            }, n.prototype.measureColumns = function () {
                if (this.getContainerWidth(), !this.columnWidth) {
                    var t = this.items[0],
                        i = t && t.element;
                    this.columnWidth = i && e(i).outerWidth || this.containerWidth
                }
                this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
            }, n.prototype.getContainerWidth = function () {
                var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                    i = e(t);
                this.containerWidth = i && i.innerWidth
            }, n.prototype._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth,
                    n = e && 1 > e ? "round" : "ceil",
                    o = Math[n](t.size.outerWidth / this.columnWidth);
                o = Math.min(o, this.cols);
                for (var s = this._getColGroup(o), r = Math.min.apply(Math, s), a = i(s, r), l = {
                        x: this.columnWidth * a,
                        y: r
                    }, c = r + t.size.outerHeight, h = this.cols + 1 - s.length, u = 0; h > u; u++) this.colYs[a + u] = c;
                return l
            }, n.prototype._getColGroup = function (t) {
                if (2 > t) return this.colYs;
                for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
                    var o = this.colYs.slice(n, n + t);
                    e[n] = Math.max.apply(Math, o)
                }
                return e
            }, n.prototype._manageStamp = function (t) {
                var i = e(t),
                    n = this._getElementOffset(t),
                    o = this.options.isOriginLeft ? n.left : n.right,
                    s = o + i.outerWidth,
                    r = Math.floor(o / this.columnWidth);
                r = Math.max(0, r);
                var a = Math.floor(s / this.columnWidth);
                a -= s % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
                for (var l = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, c = r; a >= c; c++) this.colYs[c] = Math.max(l, this.colYs[c])
            }, n.prototype._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = {
                    height: this.maxY
                };
                return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
            }, n.prototype._getContainerFitWidth = function () {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
                return (this.cols - t) * this.columnWidth - this.gutter
            }, n.prototype.needsResizeLayout = function () {
                var t = this.containerWidth;
                return this.getContainerWidth(), t !== this.containerWidth
            }, n
        }
        var i = Array.prototype.indexOf ? function (t, e) {
            return t.indexOf(e)
        } : function (t, e) {
            for (var i = 0, n = t.length; n > i; i++)
                if (t[i] === e) return i;
            return -1
        };
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window),
    function (t, e, i) {
        t.fn.backstretch = function (n, o) {
            return (n === i || 0 === n.length) && t.error("No images were supplied for Backstretch"), 0 === t(e).scrollTop() && e.scrollTo(0, 0), this.each(function () {
                var e = t(this),
                    i = e.data("backstretch");
                if (i) {
                    if ("string" == typeof n && "function" == typeof i[n]) return void i[n](o);
                    o = t.extend(i.options, o), i.destroy(!0)
                }
                i = new s(this, n, o), e.data("backstretch", i)
            })
        }, t.backstretch = function (e, i) {
            return t("body").backstretch(e, i).data("backstretch")
        }, t.expr[":"].backstretch = function (e) {
            return t(e).data("backstretch") !== i
        }, t.fn.backstretch.defaults = {
            centeredX: !0,
            centeredY: !0,
            duration: 5e3,
            fade: 0
        };
        var n = {
                left: 0,
                top: 0,
                overflow: "hidden",
                margin: 0,
                padding: 0,
                height: "100%",
                width: "100%",
                zIndex: -999999
            },
            o = {
                position: "absolute",
                display: "none",
                margin: 0,
                padding: 0,
                border: "none",
                width: "auto",
                height: "auto",
                maxHeight: "none",
                maxWidth: "none",
                zIndex: -999999
            },
            s = function (i, o, s) {
                this.options = t.extend({}, t.fn.backstretch.defaults, s || {}), this.images = t.isArray(o) ? o : [o], t.each(this.images, function () {
                    t("<img />")[0].src = this
                }), this.isBody = i === document.body, this.$container = t(i), this.$root = this.isBody ? t(r ? e : document) : this.$container, i = this.$container.children(".backstretch").first(), this.$wrap = i.length ? i : t('<div class="backstretch"></div>').css(n).appendTo(this.$container), this.isBody || (i = this.$container.css("position"), o = this.$container.css("zIndex"), this.$container.css({
                    position: "static" === i ? "relative" : i,
                    zIndex: "auto" === o ? 0 : o,
                    background: "none"
                }), this.$wrap.css({
                    zIndex: -999998
                })), this.$wrap.css({
                    position: this.isBody && r ? "fixed" : "absolute"
                }), this.index = 0, this.show(this.index), t(e).on("resize.backstretch", t.proxy(this.resize, this)).on("orientationchange.backstretch", t.proxy(function () {
                    this.isBody && 0 === e.pageYOffset && (e.scrollTo(0, 1), this.resize())
                }, this))
            };
        s.prototype = {
            resize: function () {
                try {
                    var t, i = {
                            left: 0,
                            top: 0
                        },
                        n = this.isBody ? this.$root.width() : this.$root.innerWidth(),
                        o = n,
                        s = this.isBody ? e.innerHeight ? e.innerHeight : this.$root.height() : this.$root.innerHeight(),
                        r = o / this.$img.data("ratio");
                    r >= s ? (t = (r - s) / 2, this.options.centeredY && (i.top = "-" + t + "px")) : (r = s, o = r * this.$img.data("ratio"), t = (o - n) / 2, this.options.centeredX && (i.left = "-" + t + "px")), this.$wrap.css({
                        width: n,
                        height: s
                    }).find("img:not(.deleteable)").css({
                        width: o,
                        height: r
                    }).css(i)
                } catch (t) {}
                return this
            },
            show: function (e) {
                if (!(Math.abs(e) > this.images.length - 1)) {
                    var i = this,
                        n = i.$wrap.find("img").addClass("deleteable"),
                        s = {
                            relatedTarget: i.$container[0]
                        };
                    return i.$container.trigger(t.Event("backstretch.before", s), [i, e]), this.index = e, clearInterval(i.interval), i.$img = t("<img />").css(o).bind("load", function (o) {
                        var r = this.width || t(o.target).width();
                        o = this.height || t(o.target).height(), t(this).data("ratio", r / o), t(this).fadeIn(i.options.speed || i.options.fade, function () {
                            n.remove(), i.paused || i.cycle(), t(["after", "show"]).each(function () {
                                i.$container.trigger(t.Event("backstretch." + this, s), [i, e])
                            })
                        }), i.resize()
                    }).appendTo(i.$wrap), i.$img.attr("src", i.images[e]), i
                }
            },
            next: function () {
                return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0)
            },
            prev: function () {
                return this.show(0 === this.index ? this.images.length - 1 : this.index - 1)
            },
            pause: function () {
                return this.paused = !0, this
            },
            resume: function () {
                return this.paused = !1, this.next(), this
            },
            cycle: function () {
                return 1 < this.images.length && (clearInterval(this.interval), this.interval = setInterval(t.proxy(function () {
                    this.paused || this.next()
                }, this), this.options.duration)), this
            },
            destroy: function (i) {
                t(e).off("resize.backstretch orientationchange.backstretch"), clearInterval(this.interval), i || this.$wrap.remove(), this.$container.removeData("backstretch")
            }
        };
        var r, a = navigator.userAgent,
            l = navigator.platform,
            c = !!(c = a.match(/AppleWebKit\/([0-9]+)/)) && c[1],
            h = !!(h = a.match(/Fennec\/([0-9]+)/)) && h[1],
            u = a.match(/Opera Mobi\/([0-9]+)/),
            p = !!u && u[1],
            d = !!(d = a.match(/MSIE ([0-9]+)/)) && d[1];
        r = !((-1 < l.indexOf("iPhone") || -1 < l.indexOf("iPad") || -1 < l.indexOf("iPod")) && c && 534 > c || e.operamini && "[object OperaMini]" === {}.toString.call(e.operamini) || u && 7458 > p || -1 < a.indexOf("Android") && c && 533 > c || h && 6 > h || "palmGetResource" in e && c && 534 > c || -1 < a.indexOf("MeeGo") && -1 < a.indexOf("NokiaBrowser/8.5.0") || d && 6 >= d)
    }(jQuery, window),
    function (t, e, i, n) {
        function o(e, i) {
            this.element = e, this.options = t.extend({}, r, i), this._defaults = r, this._name = s, this.init()
        }
        var s = "stellar",
            r = {
                scrollProperty: "scroll",
                positionProperty: "position",
                horizontalScrolling: !0,
                verticalScrolling: !0,
                horizontalOffset: 0,
                verticalOffset: 0,
                responsive: !1,
                parallaxBackgrounds: !0,
                parallaxElements: !0,
                hideDistantElements: !0,
                hideElement: function (t) {
                    t.hide()
                },
                showElement: function (t) {
                    t.show()
                }
            },
            a = {
                scroll: {
                    getLeft: function (t) {
                        return t.scrollLeft()
                    },
                    setLeft: function (t, e) {
                        t.scrollLeft(e)
                    },
                    getTop: function (t) {
                        return t.scrollTop()
                    },
                    setTop: function (t, e) {
                        t.scrollTop(e)
                    }
                },
                position: {
                    getLeft: function (t) {
                        return -1 * parseInt(t.css("left"), 10)
                    },
                    getTop: function (t) {
                        return -1 * parseInt(t.css("top"), 10)
                    }
                },
                margin: {
                    getLeft: function (t) {
                        return -1 * parseInt(t.css("margin-left"), 10)
                    },
                    getTop: function (t) {
                        return -1 * parseInt(t.css("margin-top"), 10)
                    }
                },
                transform: {
                    getLeft: function (t) {
                        var e = getComputedStyle(t[0])[c];
                        return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[4], 10) : 0
                    },
                    getTop: function (t) {
                        var e = getComputedStyle(t[0])[c];
                        return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[5], 10) : 0
                    }
                }
            },
            l = {
                position: {
                    setLeft: function (t, e) {
                        t.css("left", e)
                    },
                    setTop: function (t, e) {
                        t.css("top", e)
                    }
                },
                transform: {
                    setPosition: function (t, e, i, n, o) {
                        t[0].style[c] = "translate3d(" + (e - i) + "px, " + (n - o) + "px, 0)"
                    }
                }
            },
            c = function () {
                var e, i = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                    n = t("script")[0].style,
                    o = "";
                for (e in n)
                    if (i.test(e)) {
                        o = e.match(i)[0];
                        break
                    }
                return "WebkitOpacity" in n && (o = "Webkit"), "KhtmlOpacity" in n && (o = "Khtml"),
                    function (t) {
                        return o + (o.length > 0 ? t.charAt(0).toUpperCase() + t.slice(1) : t)
                    }
            }()("transform"),
            h = t("<div />", {
                style: "background:#fff"
            }).css("background-position-x") !== n,
            u = h ? function (t, e, i) {
                t.css({
                    "background-position-x": e,
                    "background-position-y": i
                })
            } : function (t, e, i) {
                t.css("background-position", e + " " + i)
            },
            p = h ? function (t) {
                return [t.css("background-position-x"), t.css("background-position-y")]
            } : function (t) {
                return t.css("background-position").split(" ")
            },
            d = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (t) {
                setTimeout(t, 1e3 / 60)
            };
        o.prototype = {
            init: function () {
                this.options.name = s + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
                    firstLoad: !0
                }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
            },
            _defineElements: function () {
                this.element === i.body && (this.element = e), this.$scrollElement = t(this.element), this.$element = this.element === e ? t("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== n ? t(this.options.viewportElement) : this.$scrollElement[0] === e || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
            },
            _defineGetters: function () {
                var t = this,
                    e = a[t.options.scrollProperty];
                this._getScrollLeft = function () {
                    return e.getLeft(t.$scrollElement)
                }, this._getScrollTop = function () {
                    return e.getTop(t.$scrollElement)
                }
            },
            _defineSetters: function () {
                var e = this,
                    i = a[e.options.scrollProperty],
                    n = l[e.options.positionProperty],
                    o = i.setLeft,
                    s = i.setTop;
                this._setScrollLeft = "function" == typeof o ? function (t) {
                    o(e.$scrollElement, t)
                } : t.noop, this._setScrollTop = "function" == typeof s ? function (t) {
                    s(e.$scrollElement, t)
                } : t.noop, this._setPosition = n.setPosition || function (t, i, o, s, r) {
                    e.options.horizontalScrolling && n.setLeft(t, i, o), e.options.verticalScrolling && n.setTop(t, s, r)
                }
            },
            _handleWindowLoadAndResize: function () {
                var i = this,
                    n = t(e);
                i.options.responsive && n.bind("load." + this.name, function () {
                    i.refresh()
                }), n.bind("resize." + this.name, function () {
                    i._detectViewport(), i.options.responsive && i.refresh()
                })
            },
            refresh: function (i) {
                var n = this,
                    o = n._getScrollLeft(),
                    s = n._getScrollTop();
                i && i.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), i && i.firstLoad && /WebKit/.test(navigator.userAgent) && t(e).load(function () {
                    var t = n._getScrollLeft(),
                        e = n._getScrollTop();
                    n._setScrollLeft(t + 1), n._setScrollTop(e + 1), n._setScrollLeft(t), n._setScrollTop(e)
                }), this._setScrollLeft(o), this._setScrollTop(s)
            },
            _detectViewport: function () {
                var t = this.$viewportElement.offset(),
                    e = null !== t && t !== n;
                this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = e ? t.top : 0, this.viewportOffsetLeft = e ? t.left : 0
            },
            _findParticles: function () {
                var e = this;
                if (this._getScrollLeft(), this._getScrollTop(), this.particles !== n)
                    for (var i = this.particles.length - 1; i >= 0; i--) this.particles[i].$element.data("stellar-elementIsActive", n);
                this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function () {
                    var i, o, s, r, a, l, c, h, u, p = t(this),
                        d = 0,
                        f = 0,
                        g = 0,
                        m = 0;
                    if (p.data("stellar-elementIsActive")) {
                        if (p.data("stellar-elementIsActive") !== this) return
                    } else p.data("stellar-elementIsActive", this);
                    e.options.showElement(p), p.data("stellar-startingLeft") ? (p.css("left", p.data("stellar-startingLeft")), p.css("top", p.data("stellar-startingTop"))) : (p.data("stellar-startingLeft", p.css("left")), p.data("stellar-startingTop", p.css("top"))), s = p.position().left, r = p.position().top, a = "auto" === p.css("margin-left") ? 0 : parseInt(p.css("margin-left"), 10), l = "auto" === p.css("margin-top") ? 0 : parseInt(p.css("margin-top"), 10), h = p.offset().left - a, u = p.offset().top - l, p.parents().each(function () {
                        var e = t(this);
                        return !0 === e.data("stellar-offset-parent") ? (d = g, f = m, c = e, !1) : (g += e.position().left, void(m += e.position().top))
                    }), i = p.data("stellar-horizontal-offset") !== n ? p.data("stellar-horizontal-offset") : c !== n && c.data("stellar-horizontal-offset") !== n ? c.data("stellar-horizontal-offset") : e.horizontalOffset, o = p.data("stellar-vertical-offset") !== n ? p.data("stellar-vertical-offset") : c !== n && c.data("stellar-vertical-offset") !== n ? c.data("stellar-vertical-offset") : e.verticalOffset, e.particles.push({
                        $element: p,
                        $offsetParent: c,
                        isFixed: "fixed" === p.css("position"),
                        horizontalOffset: i,
                        verticalOffset: o,
                        startingPositionLeft: s,
                        startingPositionTop: r,
                        startingOffsetLeft: h,
                        startingOffsetTop: u,
                        parentOffsetLeft: d,
                        parentOffsetTop: f,
                        stellarRatio: p.data("stellar-ratio") !== n ? p.data("stellar-ratio") : 1,
                        width: p.outerWidth(!0),
                        height: p.outerHeight(!0),
                        isHidden: !1
                    })
                })
            },
            _findBackgrounds: function () {
                var e, i = this,
                    o = this._getScrollLeft(),
                    s = this._getScrollTop();
                this.backgrounds = [], this.options.parallaxBackgrounds && (e = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (e = e.add(this.$element)), e.each(function () {
                    var e, r, a, l, c, h, d, f = t(this),
                        g = p(f),
                        m = 0,
                        v = 0,
                        y = 0,
                        b = 0;
                    if (f.data("stellar-backgroundIsActive")) {
                        if (f.data("stellar-backgroundIsActive") !== this) return
                    } else f.data("stellar-backgroundIsActive", this);
                    f.data("stellar-backgroundStartingLeft") ? u(f, f.data("stellar-backgroundStartingLeft"), f.data("stellar-backgroundStartingTop")) : (f.data("stellar-backgroundStartingLeft", g[0]), f.data("stellar-backgroundStartingTop", g[1])), a = "auto" === f.css("margin-left") ? 0 : parseInt(f.css("margin-left"), 10), l = "auto" === f.css("margin-top") ? 0 : parseInt(f.css("margin-top"), 10), c = f.offset().left - a - o, h = f.offset().top - l - s, f.parents().each(function () {
                        var e = t(this);
                        return !0 === e.data("stellar-offset-parent") ? (m = y, v = b, d = e, !1) : (y += e.position().left, void(b += e.position().top))
                    }), e = f.data("stellar-horizontal-offset") !== n ? f.data("stellar-horizontal-offset") : d !== n && d.data("stellar-horizontal-offset") !== n ? d.data("stellar-horizontal-offset") : i.horizontalOffset, r = f.data("stellar-vertical-offset") !== n ? f.data("stellar-vertical-offset") : d !== n && d.data("stellar-vertical-offset") !== n ? d.data("stellar-vertical-offset") : i.verticalOffset, i.backgrounds.push({
                        $element: f,
                        $offsetParent: d,
                        isFixed: "fixed" === f.css("background-attachment"),
                        horizontalOffset: e,
                        verticalOffset: r,
                        startingValueLeft: g[0],
                        startingValueTop: g[1],
                        startingBackgroundPositionLeft: isNaN(parseInt(g[0], 10)) ? 0 : parseInt(g[0], 10),
                        startingBackgroundPositionTop: isNaN(parseInt(g[1], 10)) ? 0 : parseInt(g[1], 10),
                        startingPositionLeft: f.position().left,
                        startingPositionTop: f.position().top,
                        startingOffsetLeft: c,
                        startingOffsetTop: h,
                        parentOffsetLeft: m,
                        parentOffsetTop: v,
                        stellarRatio: f.data("stellar-background-ratio") === n ? 1 : f.data("stellar-background-ratio")
                    })
                }))
            },
            _reset: function () {
                var t, e, i, n, o;
                for (o = this.particles.length - 1; o >= 0; o--) t = this.particles[o], e = t.$element.data("stellar-startingLeft"), i = t.$element.data("stellar-startingTop"), this._setPosition(t.$element, e, e, i, i), this.options.showElement(t.$element), t.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
                for (o = this.backgrounds.length - 1; o >= 0; o--)(n = this.backgrounds[o]).$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), u(n.$element, n.startingValueLeft, n.startingValueTop)
            },
            destroy: function () {
                this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = t.noop, t(e).unbind("load." + this.name).unbind("resize." + this.name)
            },
            _setOffsets: function () {
                var i = this,
                    n = t(e);
                n.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), n.bind("resize.horizontal-" + this.name, function () {
                    i.horizontalOffset = i.options.horizontalOffset()
                })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), n.bind("resize.vertical-" + this.name, function () {
                    i.verticalOffset = i.options.verticalOffset()
                })) : this.verticalOffset = this.options.verticalOffset
            },
            _repositionElements: function () {
                var t, e, i, n, o, s, r, a, l, c, h = this._getScrollLeft(),
                    p = this._getScrollTop(),
                    d = !0,
                    f = !0;
                if (this.currentScrollLeft !== h || this.currentScrollTop !== p || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                    for (this.currentScrollLeft = h, this.currentScrollTop = p, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, c = this.particles.length - 1; c >= 0; c--) t = this.particles[c], e = t.isFixed ? 1 : 0, this.options.horizontalScrolling ? (s = (h + t.horizontalOffset + this.viewportOffsetLeft + t.startingPositionLeft - t.startingOffsetLeft + t.parentOffsetLeft) * -(t.stellarRatio + e - 1) + t.startingPositionLeft, a = s - t.startingPositionLeft + t.startingOffsetLeft) : (s = t.startingPositionLeft, a = t.startingOffsetLeft), this.options.verticalScrolling ? (r = (p + t.verticalOffset + this.viewportOffsetTop + t.startingPositionTop - t.startingOffsetTop + t.parentOffsetTop) * -(t.stellarRatio + e - 1) + t.startingPositionTop, l = r - t.startingPositionTop + t.startingOffsetTop) : (r = t.startingPositionTop, l = t.startingOffsetTop), this.options.hideDistantElements && (f = !this.options.horizontalScrolling || a + t.width > (t.isFixed ? 0 : h) && a < (t.isFixed ? 0 : h) + this.viewportWidth + this.viewportOffsetLeft, d = !this.options.verticalScrolling || l + t.height > (t.isFixed ? 0 : p) && l < (t.isFixed ? 0 : p) + this.viewportHeight + this.viewportOffsetTop), f && d ? (t.isHidden && (this.options.showElement(t.$element), t.isHidden = !1), this._setPosition(t.$element, s, t.startingPositionLeft, r, t.startingPositionTop)) : t.isHidden || (this.options.hideElement(t.$element), t.isHidden = !0);
                    for (c = this.backgrounds.length - 1; c >= 0; c--) i = this.backgrounds[c], e = i.isFixed ? 0 : 1, n = this.options.horizontalScrolling ? (h + i.horizontalOffset - this.viewportOffsetLeft - i.startingOffsetLeft + i.parentOffsetLeft - i.startingBackgroundPositionLeft) * (e - i.stellarRatio) + "px" : i.startingValueLeft, o = this.options.verticalScrolling ? (p + i.verticalOffset - this.viewportOffsetTop - i.startingOffsetTop + i.parentOffsetTop - i.startingBackgroundPositionTop) * (e - i.stellarRatio) + "px" : i.startingValueTop, u(i.$element, n, o)
                }
            },
            _handleScrollEvent: function () {
                var t = this,
                    e = !1,
                    i = function () {
                        t._repositionElements(), e = !1
                    },
                    n = function () {
                        e || (d(i), e = !0)
                    };
                this.$scrollElement.bind("scroll." + this.name, n), n()
            },
            _startAnimationLoop: function () {
                var t = this;
                this._animationLoop = function () {
                    d(t._animationLoop), t._repositionElements()
                }, this._animationLoop()
            }
        }, t.fn[s] = function (e) {
            var i = arguments;
            return e === n || "object" == typeof e ? this.each(function () {
                t.data(this, "plugin_" + s) || t.data(this, "plugin_" + s, new o(this, e))
            }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each(function () {
                var n = t.data(this, "plugin_" + s);
                n instanceof o && "function" == typeof n[e] && n[e].apply(n, Array.prototype.slice.call(i, 1)), "destroy" === e && t.data(this, "plugin_" + s, null)
            }) : void 0
        }, t[s] = function () {
            var i = t(e);
            return i.stellar.apply(i, Array.prototype.slice.call(arguments, 0))
        }, t[s].scrollProperty = a, t[s].positionProperty = l, e.Stellar = o
    }(jQuery, this, document),
    function (t, e, i, n) {
        function o(e, i) {
            this.settings = null, this.options = t.extend({}, o.Defaults, i), this.$element = t(e), this.drag = t.extend({}, p), this.state = t.extend({}, d), this.e = t.extend({}, f), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(o.Plugins, t.proxy(function (t, e) {
                this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this)
            }, this)), t.each(o.Pipe, t.proxy(function (e, i) {
                this._pipe.push({
                    filter: i.filter,
                    run: t.proxy(i.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }

        function s(t) {
            if (t.touches !== n) return {
                x: t.touches[0].pageX,
                y: t.touches[0].pageY
            };
            if (t.touches === n) {
                if (t.pageX !== n) return {
                    x: t.pageX,
                    y: t.pageY
                };
                if (t.pageX === n) return {
                    x: t.clientX,
                    y: t.clientY
                }
            }
        }

        function r(t) {
            var e, n, o = i.createElement("div"),
                s = t;
            for (e in s)
                if (n = s[e], void 0 !== o.style[n]) return o = null, [n, e];
            return [!1]
        }

        function a() {
            return r(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
        }

        function l() {
            return r(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
        }

        function c() {
            return r(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
        }

        function h() {
            return "ontouchstart" in e || !!navigator.msMaxTouchPoints
        }

        function u() {
            return e.navigator.msPointerEnabled
        }
        var p, d, f;
        p = {
            start: 0,
            startX: 0,
            startY: 0,
            current: 0,
            currentX: 0,
            currentY: 0,
            offsetX: 0,
            offsetY: 0,
            distance: null,
            startTime: 0,
            endTime: 0,
            updatedX: 0,
            targetEl: null
        }, d = {
            isTouch: !1,
            isScrolling: !1,
            isSwiping: !1,
            direction: !1,
            inMotion: !1
        }, f = {
            _onDragStart: null,
            _onDragMove: null,
            _onDragEnd: null,
            _transitionEnd: null,
            _resizer: null,
            _responsiveCall: null,
            _goToLoop: null,
            _checkVisibile: null
        }, o.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: e,
            responsiveClass: !1,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            themeClass: "owl-theme",
            baseClass: "owl-carousel",
            itemClass: "owl-item",
            centerClass: "center",
            activeClass: "active"
        }, o.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, o.Plugins = {}, o.Pipe = [{
            filter: ["width", "items", "settings"],
            run: function (t) {
                t.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function () {
                var t = this._clones;
                (this.$stage.children(".cloned").length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
            }
        }, {
            filter: ["items", "settings"],
            run: function () {
                var t, e, i = this._clones,
                    n = this._items,
                    o = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0;
                for (t = 0, e = Math.abs(o / 2); e > t; t++) o > 0 ? (this.$stage.children().eq(n.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(n[i[i.length - 1]].clone().addClass("cloned")), i.push(n.length - 1 - (i.length - 1) / 2), this.$stage.prepend(n[i[i.length - 1]].clone().addClass("cloned")))
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function () {
                var t, e, i, n = this.settings.rtl ? 1 : -1,
                    o = (this.width() / this.settings.items).toFixed(3),
                    s = 0;
                for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; i > e; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, s += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : o * t) * n, this._coordinates.push(s)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function () {
                var e, i, n = (this.width() / this.settings.items).toFixed(3),
                    o = {
                        width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                        "padding-left": this.settings.stagePadding || "",
                        "padding-right": this.settings.stagePadding || ""
                    };
                if (this.$stage.css(o), o = {
                        width: this.settings.autoWidth ? "auto" : n - this.settings.margin
                    }, o[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function (t) {
                        return t > 1
                    }).length > 0)
                    for (e = 0, i = this._coordinates.length; i > e; e++) o.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(o);
                else this.$stage.children().css(o)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function (t) {
                t.current && this.reset(this.$stage.children().index(t.current))
            }
        }, {
            filter: ["position"],
            run: function () {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function () {
                var t, e, i, n, o = this.settings.rtl ? 1 : -1,
                    s = 2 * this.settings.stagePadding,
                    r = this.coordinates(this.current()) + s,
                    a = r + this.width() * o,
                    l = [];
                for (i = 0, n = this._coordinates.length; n > i; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + s * o, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
                this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
            }
        }], o.prototype.initialize = function () {
            if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && !0 !== this.state.imagesLoaded) {
                var e, i, o;
                if (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, o = this.$element.children(i).width(), e.length && 0 >= o) return this.preloadAutoWidthImages(e), !1
            }
            this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
        }, o.prototype.setup = function () {
            var e = this.viewport(),
                i = this.options.responsive,
                n = -1,
                o = null;
            i ? (t.each(i, function (t) {
                e >= t && t > n && (n = Number(t))
            }), o = t.extend({}, this.options, i[n]), delete o.responsive, o.responsiveClass && this.$element.attr("class", function (t, e) {
                return e.replace(/\b owl-responsive-\S+/g, "")
            }).addClass("owl-responsive-" + n)) : o = t.extend({}, this.options), (null === this.settings || this._breakpoint !== n) && (this.trigger("change", {
                property: {
                    name: "settings",
                    value: o
                }
            }), this._breakpoint = n, this.settings = o, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            }))
        }, o.prototype.optionsLogic = function () {
            this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, o.prototype.prepare = function (e) {
            var i = this.trigger("prepare", {
                content: e
            });
            return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", {
                content: i.data
            }), i.data
        }, o.prototype.update = function () {
            for (var e = 0, i = this._pipe.length, n = t.proxy(function (t) {
                    return this[t]
                }, this._invalidated), o = {}; i > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(o), e++;
            this._invalidated = {}
        }, o.prototype.width = function (t) {
            switch (t = t || o.Width.Default) {
                case o.Width.Inner:
                case o.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, o.prototype.refresh = function () {
            return 0 !== this._items.length && ((new Date).getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), void this.trigger("refreshed"))
        }, o.prototype.eventsCall = function () {
            this.e._onDragStart = t.proxy(function (t) {
                this.onDragStart(t)
            }, this), this.e._onDragMove = t.proxy(function (t) {
                this.onDragMove(t)
            }, this), this.e._onDragEnd = t.proxy(function (t) {
                this.onDragEnd(t)
            }, this), this.e._onResize = t.proxy(function (t) {
                this.onResize(t)
            }, this), this.e._transitionEnd = t.proxy(function (t) {
                this.transitionEnd(t)
            }, this), this.e._preventClick = t.proxy(function (t) {
                this.preventClick(t)
            }, this)
        }, o.prototype.onThrottledResize = function () {
            e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
        }, o.prototype.onResize = function () {
            return !!this._items.length && (this._width !== this.$element.width() && (!this.trigger("resize").isDefaultPrevented() && (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized"))))
        }, o.prototype.eventsRouter = function (t) {
            var e = t.type;
            "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t)
        }, o.prototype.internalEvents = function () {
            var i = (h(), u());
            this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function (t) {
                this.eventsRouter(t)
            }, this)), this.$stage.on("dragstart", function () {
                return !1
            }), this.$stage.get(0).onselectstart = function () {
                return !1
            }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", t.proxy(function (t) {
                this.eventsRouter(t)
            }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), !1 !== this.settings.responsive && this.on(e, "resize", t.proxy(this.onThrottledResize, this))
        }, o.prototype.onDragStart = function (n) {
            var o, r, a, l;
            if (3 === (o = n.originalEvent || n || e.event).which || this.state.isTouch) return !1;
            if ("mousedown" === o.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, r = s(o).x, a = s(o).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) l = this.getTransformProperty(), this.drag.offsetX = l, this.animate(l), this.state.inMotion = !0;
            else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
            this.drag.startX = r - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = r - this.drag.startX, this.drag.targetEl = o.target || o.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function (t) {
                this.eventsRouter(t)
            }, this))
        }, o.prototype.onDragMove = function (t) {
            var i, o, r, a, l, c;
            this.state.isTouch && (this.state.isScrolling || (i = t.originalEvent || t || e.event, o = s(i).x, r = s(i).y, this.drag.currentX = o - this.drag.startX, this.drag.currentY = r - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), l = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), c = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + c), l + c)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== n ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && !1 === this.state.isSwiping && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
        }, o.prototype.onDragEnd = function (e) {
            var n, o;
            if (this.state.isTouch) {
                if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && !0 !== this.state.inMotion) return this.state.inMotion = !1, !1;
                this.drag.endTime = (new Date).getTime(), n = this.drag.endTime - this.drag.startTime, (Math.abs(this.drag.distance) > 3 || n > 300) && this.removeClick(this.drag.targetEl), o = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(o), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(o) || this.transitionEnd(), this.drag.distance = 0, t(i).off(".owl.dragEvents")
            }
        }, o.prototype.removeClick = function (i) {
            this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function () {
                t(i).off("click.preventClick")
            }, 300)
        }, o.prototype.preventClick = function (e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick")
        }, o.prototype.getTransformProperty = function () {
            var t, i;
            return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), i = 16 === t.length, !0 !== i ? t[4] : t[12]
        }, o.prototype.closest = function (e) {
            var i = -1,
                n = this.width(),
                o = this.coordinates();
            return this.settings.freeDrag || t.each(o, t.proxy(function (t, s) {
                return e > s - 30 && s + 30 > e ? i = t : this.op(e, "<", s) && this.op(e, ">", o[t + 1] || s - n) && (i = "left" === this.state.direction ? t + 1 : t), -1 === i
            }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (i = e = this.maximum())), i
        }, o.prototype.animate = function (e) {
            this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
                transform: "translate3d(" + e + "px,0px, 0px)",
                transition: this.speed() / 1e3 + "s"
            }) : this.state.isTouch ? this.$stage.css({
                left: e + "px"
            }) : this.$stage.animate({
                left: e
            }, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function () {
                this.state.inMotion && this.transitionEnd()
            }, this))
        }, o.prototype.current = function (t) {
            if (t === n) return this._current;
            if (0 === this._items.length) return n;
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", {
                    property: {
                        name: "position",
                        value: t
                    }
                });
                e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }, o.prototype.invalidate = function (t) {
            this._invalidated[t] = !0
        }, o.prototype.reset = function (t) {
            (t = this.normalize(t)) !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
        }, o.prototype.normalize = function (e, i) {
            var o = i ? this._items.length : this._items.length + this._clones.length;
            return !t.isNumeric(e) || 1 > o ? n : e = this._clones.length ? (e % o + o) % o : Math.max(this.minimum(i), Math.min(this.maximum(i), e))
        }, o.prototype.relative = function (t) {
            return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0)
        }, o.prototype.maximum = function (t) {
            var e, i, n, o = 0,
                s = this.settings;
            if (t) return this._items.length - 1;
            if (!s.loop && s.center) e = this._items.length - 1;
            else if (s.loop || s.center)
                if (s.loop || s.center) e = this._items.length + s.items;
                else {
                    if (!s.autoWidth && !s.merge) throw "Can not detect maximum absolute position.";
                    for (revert = s.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width();
                        (n = this.coordinates(o)) && !(n * revert >= i);) e = ++o
                }
            else e = this._items.length - s.items;
            return e
        }, o.prototype.minimum = function (t) {
            return t ? 0 : this._clones.length / 2
        }, o.prototype.items = function (t) {
            return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
        }, o.prototype.mergers = function (t) {
            return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
        }, o.prototype.clones = function (e) {
            var i = this._clones.length / 2,
                o = i + this._items.length,
                s = function (t) {
                    return t % 2 == 0 ? o + t / 2 : i - (t + 1) / 2
                };
            return e === n ? t.map(this._clones, function (t, e) {
                return s(e)
            }) : t.map(this._clones, function (t, i) {
                return t === e ? s(i) : null
            })
        }, o.prototype.speed = function (t) {
            return t !== n && (this._speed = t), this._speed
        }, o.prototype.coordinates = function (e) {
            var i = null;
            return e === n ? t.map(this._coordinates, t.proxy(function (t, e) {
                return this.coordinates(e)
            }, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i)
        }, o.prototype.duration = function (t, e, i) {
            return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
        }, o.prototype.to = function (i, n) {
            if (this.settings.loop) {
                var o = i - this.relative(this.current()),
                    s = this.current(),
                    r = this.current(),
                    a = this.current() + o,
                    l = 0 > r - a,
                    c = this._clones.length + this._items.length;
                a < this.settings.items && !1 === l ? (s = r + this._items.length, this.reset(s)) : a >= c - this.settings.items && !0 === l && (s = r - this._items.length, this.reset(s)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function () {
                    this.speed(this.duration(this.current(), s + o, n)), this.current(s + o), this.update()
                }, this), 30)
            } else this.speed(this.duration(this.current(), i, n)), this.current(i), this.update()
        }, o.prototype.next = function (t) {
            t = t || !1, this.to(this.relative(this.current()) + 1, t)
        }, o.prototype.prev = function (t) {
            t = t || !1, this.to(this.relative(this.current()) - 1, t)
        }, o.prototype.transitionEnd = function (t) {
            return (t === n || (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) === this.$stage.get(0))) && (this.state.inMotion = !1, void this.trigger("translated"))
        }, o.prototype.viewport = function () {
            var n;
            if (this.options.responsiveBaseElement !== e) n = t(this.options.responsiveBaseElement).width();
            else if (e.innerWidth) n = e.innerWidth;
            else {
                if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
                n = i.documentElement.clientWidth
            }
            return n
        }, o.prototype.replace = function (e) {
            this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
                return 1 === this.nodeType
            }).each(t.proxy(function (t, e) {
                e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, o.prototype.add = function (t, e) {
            e = e === n ? this._items.length : this.normalize(e, !0), this.trigger("add", {
                content: t,
                position: e
            }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
                content: t,
                position: e
            })
        }, o.prototype.remove = function (t) {
            (t = this.normalize(t, !0)) !== n && (this.trigger("remove", {
                content: this._items[t],
                position: t
            }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: t
            }))
        }, o.prototype.addTriggerableEvents = function () {
            var e = t.proxy(function (e, i) {
                return t.proxy(function (t) {
                    t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i]))
                }, this)
            }, this);
            t.each({
                next: this.next,
                prev: this.prev,
                to: this.to,
                destroy: this.destroy,
                refresh: this.refresh,
                replace: this.replace,
                add: this.add,
                remove: this.remove
            }, t.proxy(function (t, i) {
                this.$element.on(t + ".owl.carousel", e(i, t + ".owl.carousel"))
            }, this))
        }, o.prototype.watchVisibility = function () {
            function i(t) {
                return t.offsetWidth > 0 && t.offsetHeight > 0
            }

            function n() {
                i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile))
            }
            i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(n, this), 500))
        }, o.prototype.preloadAutoWidthImages = function (e) {
            var i, n, o, s;
            i = 0, n = this, e.each(function (r, a) {
                o = t(a), (s = new Image).onload = function () {
                    i++, o.attr("src", s.src), o.css("opacity", 1), i >= e.length && (n.state.imagesLoaded = !0, n.initialize())
                }, s.src = o.attr("src") || o.attr("data-src") || o.attr("data-src-retina")
            })
        }, o.prototype.destroy = function () {
            this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), !1 !== this.settings.responsive && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
            for (var n in this._plugins) this._plugins[n].destroy();
            (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function () {}, this.$stage.off("dragstart", function () {
                return !1
            })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
        }, o.prototype.op = function (t, e, i) {
            var n = this.settings.rtl;
            switch (e) {
                case "<":
                    return n ? t > i : i > t;
                case ">":
                    return n ? i > t : t > i;
                case ">=":
                    return n ? i >= t : t >= i;
                case "<=":
                    return n ? t >= i : i >= t
            }
        }, o.prototype.on = function (t, e, i, n) {
            t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
        }, o.prototype.off = function (t, e, i, n) {
            t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
        }, o.prototype.trigger = function (e, i, n) {
            var o = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                s = t.camelCase(t.grep(["on", e, n], function (t) {
                    return t
                }).join("-").toLowerCase()),
                r = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({
                    relatedTarget: this
                }, o, i));
            return this._supress[e] || (t.each(this._plugins, function (t, e) {
                e.onTrigger && e.onTrigger(r)
            }), this.$element.trigger(r), this.settings && "function" == typeof this.settings[s] && this.settings[s].apply(this, r)), r
        }, o.prototype.suppress = function (e) {
            t.each(e, t.proxy(function (t, e) {
                this._supress[e] = !0
            }, this))
        }, o.prototype.release = function (e) {
            t.each(e, t.proxy(function (t, e) {
                delete this._supress[e]
            }, this))
        }, o.prototype.browserSupport = function () {
            if (this.support3d = c(), this.support3d) {
                this.transformVendor = l();
                var t = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
                this.transitionEndVendor = t[a()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
            }
            this.state.orientation = e.orientation
        }, t.fn.owlCarousel = function (e) {
            return this.each(function () {
                t(this).data("owlCarousel") || t(this).data("owlCarousel", new o(this, e))
            })
        }, t.fn.owlCarousel.Constructor = o
    }(window.Zepto || window.jQuery, window, document),
    function (t, e) {
        var i = function (e) {
            this._core = e, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel": t.proxy(function (e) {
                    if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                        for (var i = this._core.settings, n = i.center && Math.ceil(i.items / 2) || i.items, o = i.center && -1 * n || 0, s = (e.property && e.property.value || this._core.current()) + o, r = this._core.clones().length, a = t.proxy(function (t, e) {
                                this.load(e)
                            }, this); o++ < n;) this.load(r / 2 + this._core.relative(s)), r && t.each(this._core.clones(this._core.relative(s++)), a)
                }, this)
            }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        i.Defaults = {
            lazyLoad: !1
        }, i.prototype.load = function (i) {
            var n = this._core.$stage.children().eq(i),
                o = n && n.find(".owl-lazy");
            !o || t.inArray(n.get(0), this._loaded) > -1 || (o.each(t.proxy(function (i, n) {
                var o, s = t(n),
                    r = e.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src");
                this._core.trigger("load", {
                    element: s,
                    url: r
                }, "lazy"), s.is("img") ? s.one("load.owl.lazy", t.proxy(function () {
                    s.css("opacity", 1), this._core.trigger("loaded", {
                        element: s,
                        url: r
                    }, "lazy")
                }, this)).attr("src", r) : (o = new Image, o.onload = t.proxy(function () {
                    s.css({
                        "background-image": "url(" + r + ")",
                        opacity: "1"
                    }), this._core.trigger("loaded", {
                        element: s,
                        url: r
                    }, "lazy")
                }, this), o.src = r)
            }, this)), this._loaded.push(n.get(0)))
        }, i.prototype.destroy = function () {
            var t, e;
            for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Lazy = i
    }(window.Zepto || window.jQuery, window, document),
    function (t) {
        var e = function (i) {
            this._core = i, this._handlers = {
                "initialized.owl.carousel": t.proxy(function () {
                    this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": t.proxy(function (t) {
                    this._core.settings.autoHeight && "position" == t.property.name && this.update()
                }, this),
                "loaded.owl.lazy": t.proxy(function (t) {
                    this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
                }, this)
            }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        e.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        }, e.prototype.update = function () {
            this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
        }, e.prototype.destroy = function () {
            var t, e;
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
    }(window.Zepto || window.jQuery, window, document),
    function (t, e, i) {
        var n = function (e) {
            this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
                "resize.owl.carousel": t.proxy(function (t) {
                    this._core.settings.video && !this.isInFullScreen() && t.preventDefault()
                }, this),
                "refresh.owl.carousel changed.owl.carousel": t.proxy(function () {
                    this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": t.proxy(function (e) {
                    var i = t(e.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                }, this)
            }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function (t) {
                this.play(t)
            }, this))
        };
        n.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        }, n.prototype.fetch = function (t, e) {
            var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
                n = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
                o = t.attr("data-width") || this._core.settings.videoWidth,
                s = t.attr("data-height") || this._core.settings.videoHeight,
                r = t.attr("href");
            if (!r) throw new Error("Missing video URL.");
            if ((n = r.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube";
            else {
                if (!(n[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
                i = "vimeo"
            }
            n = n[6], this._videos[r] = {
                type: i,
                id: n,
                width: o,
                height: s
            }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
        }, n.prototype.thumbnail = function (e, i) {
            var n, o, s, r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
                a = e.find("img"),
                l = "src",
                c = "",
                h = this._core.settings,
                u = function (t) {
                    o = '<div class="owl-video-play-icon"></div>', n = h.lazyLoad ? '<div class="owl-video-tn ' + c + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(n), e.after(o)
                };
            return e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (l = "data-src", c = "owl-lazy"), a.length ? (u(a.attr(l)), a.remove(), !1) : void("youtube" === i.type ? (s = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", u(s)) : "vimeo" === i.type && t.ajax({
                type: "GET",
                url: "http://vimeo.com/api/v2/video/" + i.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function (t) {
                    s = t[0].thumbnail_large, u(s)
                }
            }))
        }, n.prototype.stop = function () {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
        }, n.prototype.play = function (e) {
            this._core.trigger("play", null, "video"), this._playing && this.stop();
            var i, n, o = t(e.target || e.srcElement),
                s = o.closest("." + this._core.settings.itemClass),
                r = this._videos[s.attr("data-video")],
                a = r.width || "100%",
                l = r.height || this._core.$stage.height();
            "youtube" === r.type ? i = '<iframe width="' + a + '" height="' + l + '" src="http://www.youtube.com/embed/' + r.id + "?autoplay=1&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type && (i = '<iframe src="http://player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + a + '" height="' + l + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), s.addClass("owl-video-playing"), this._playing = s, n = t('<div style="height:' + l + "px; width:" + a + 'px" class="owl-video-frame">' + i + "</div>"), o.after(n)
        }, n.prototype.isInFullScreen = function () {
            var n = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
            return n && t(n).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), !(n && this._fullscreen && this._playing) && (this._fullscreen ? (this._fullscreen = !1, !1) : !this._playing || this._core.state.orientation === e.orientation || (this._core.state.orientation = e.orientation, !1))
        }, n.prototype.destroy = function () {
            var t, e;
            this._core.$element.off("click.owl.video");
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Video = n
    }(window.Zepto || window.jQuery, window, document),
    function (t, e, i, n) {
        var o = function (e) {
            this.core = e, this.core.options = t.extend({}, o.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
                "change.owl.carousel": t.proxy(function (t) {
                    "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
                    this.swapping = "translated" == t.type
                }, this),
                "translate.owl.carousel": t.proxy(function () {
                    this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        o.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, o.prototype.swap = function () {
            if (1 === this.core.settings.items && this.core.support3d) {
                this.core.speed(0);
                var e, i = t.proxy(this.clear, this),
                    n = this.core.$stage.children().eq(this.previous),
                    o = this.core.$stage.children().eq(this.next),
                    s = this.core.settings.animateIn,
                    r = this.core.settings.animateOut;
                this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.css({
                    left: e + "px"
                }).addClass("animated owl-animated-out").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), s && o.addClass("animated owl-animated-in").addClass(s).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i))
            }
        }, o.prototype.clear = function (e) {
            t(e.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
        }, o.prototype.destroy = function () {
            var t, e;
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Animate = o
    }(window.Zepto || window.jQuery, window, document),
    function (t, e, i) {
        var n = function (e) {
            this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.handlers = {
                "translated.owl.carousel refreshed.owl.carousel": t.proxy(function () {
                    this.autoplay()
                }, this),
                "play.owl.autoplay": t.proxy(function (t, e, i) {
                    this.play(e, i)
                }, this),
                "stop.owl.autoplay": t.proxy(function () {
                    this.stop()
                }, this),
                "mouseover.owl.autoplay": t.proxy(function () {
                    this.core.settings.autoplayHoverPause && this.pause()
                }, this),
                "mouseleave.owl.autoplay": t.proxy(function () {
                    this.core.settings.autoplayHoverPause && this.autoplay()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        n.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, n.prototype.autoplay = function () {
            this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function () {
                this.play()
            }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval)
        }, n.prototype.play = function () {
            return !0 === i.hidden || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : !1 === this.core.settings.autoplay ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
        }, n.prototype.stop = function () {
            e.clearInterval(this.interval)
        }, n.prototype.pause = function () {
            e.clearInterval(this.interval)
        }, n.prototype.destroy = function () {
            var t, i;
            e.clearInterval(this.interval);
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.autoplay = n
    }(window.Zepto || window.jQuery, window, document),
    function (t) {
        "use strict";
        var e = function (i) {
            this._core = i, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": t.proxy(function (e) {
                    this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
                }, this),
                "add.owl.carousel": t.proxy(function (e) {
                    this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
                }, this),
                "remove.owl.carousel prepared.owl.carousel": t.proxy(function (t) {
                    this._core.settings.dotsData && this._templates.splice(t.position, 1)
                }, this),
                "change.owl.carousel": t.proxy(function (t) {
                    if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                        var e = this._core.current(),
                            i = this._core.maximum(),
                            n = this._core.minimum();
                        t.data = t.property.value > i ? e >= i ? n : i : t.property.value < n ? i : t.property.value
                    }
                }, this),
                "changed.owl.carousel": t.proxy(function (t) {
                    "position" == t.property.name && this.draw()
                }, this),
                "refreshed.owl.carousel": t.proxy(function () {
                    this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
                }, this)
            }, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        e.Defaults = {
            nav: !1,
            navRewind: !0,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
            controlsClass: "owl-controls"
        }, e.prototype.initialize = function () {
            var e, i, n = this._core.settings;
            n.dotsData || (this._templates = [t("<div>").addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]), n.navContainer && n.dotsContainer || (this._controls.$container = t("<div>").addClass(n.controlsClass).appendTo(this.$element)), this._controls.$indicators = n.dotsContainer ? t(n.dotsContainer) : t("<div>").hide().addClass(n.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function (e) {
                var i = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(i, n.dotsSpeed)
            }, this)), e = n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + n.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(n.navClass[0]).html(n.navText[0]).hide().prependTo(e).on("click", t.proxy(function () {
                this.prev(n.navSpeed)
            }, this)), this._controls.$next.addClass(n.navClass[1]).html(n.navText[1]).hide().appendTo(e).on("click", t.proxy(function () {
                this.next(n.navSpeed)
            }, this));
            for (i in this._overrides) this._core[i] = t.proxy(this[i], this)
        }, e.prototype.destroy = function () {
            var t, e, i, n;
            for (t in this._handlers) this.$element.off(t, this._handlers[t]);
            for (e in this._controls) this._controls[e].remove();
            for (n in this.overides) this._core[n] = this._overrides[n];
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, e.prototype.update = function () {
            var t, e, i, n = this._core.settings,
                o = this._core.clones().length / 2,
                s = o + this._core.items().length,
                r = n.center || n.autoWidth || n.dotData ? 1 : n.dotsEach || n.items;
            if ("page" !== n.slideBy && (n.slideBy = Math.min(n.slideBy, n.items)), n.dots || "page" == n.slideBy)
                for (this._pages = [], t = o, e = 0, i = 0; s > t; t++)(e >= r || 0 === e) && (this._pages.push({
                    start: t - o,
                    end: t - o + r - 1
                }), e = 0, ++i), e += this._core.mergers(this._core.relative(t))
        }, e.prototype.draw = function () {
            var e, i, n = "",
                o = this._core.settings,
                s = (this._core.$stage.children(), this._core.relative(this._core.current()));
            if (!o.nav || o.loop || o.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= s), this._controls.$next.toggleClass("disabled", s >= this._core.maximum())), this._controls.$previous.toggle(o.nav), this._controls.$next.toggle(o.nav), o.dots) {
                if (e = this._pages.length - this._controls.$indicators.children().length, o.dotData && 0 !== e) {
                    for (i = 0; i < this._controls.$indicators.children().length; i++) n += this._templates[this._core.relative(i)];
                    this._controls.$indicators.html(n)
                } else e > 0 ? (n = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(n)) : 0 > e && this._controls.$indicators.children().slice(e).remove();
                this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active")
            }
            this._controls.$indicators.toggle(o.dots)
        }, e.prototype.onTrigger = function (e) {
            var i = this._core.settings;
            e.page = {
                index: t.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items)
            }
        }, e.prototype.current = function () {
            var e = this._core.relative(this._core.current());
            return t.grep(this._pages, function (t) {
                return t.start <= e && t.end >= e
            }).pop()
        }, e.prototype.getPosition = function (e) {
            var i, n, o = this._core.settings;
            return "page" == o.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += o.slideBy : i -= o.slideBy), i
        }, e.prototype.next = function (e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
        }, e.prototype.prev = function (e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
        }, e.prototype.to = function (e, i, n) {
            var o;
            n ? t.proxy(this._overrides.to, this._core)(e, i) : (o = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % o + o) % o].start, i))
        }, t.fn.owlCarousel.Constructor.Plugins.Navigation = e
    }(window.Zepto || window.jQuery, window, document),
    function (t, e) {
        "use strict";
        var i = function (n) {
            this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": t.proxy(function () {
                    "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": t.proxy(function (e) {
                    var i = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                    this._hashes[i] = e.content
                }, this)
            }, this._core.options = t.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function () {
                var t = e.location.hash.substring(1),
                    i = this._core.$stage.children(),
                    n = this._hashes[t] && i.index(this._hashes[t]) || 0;
                return !!t && void this._core.to(n, !1, !0)
            }, this))
        };
        i.Defaults = {
            URLhashListener: !1
        }, i.prototype.destroy = function () {
            var i, n;
            t(e).off("hashchange.owl.navigation");
            for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Hash = i
    }(window.Zepto || window.jQuery, window, document),
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "modernizr"], t) : "object" == typeof exports ? module.exports = t(require("jquery"), window.Modernizr) : window.Shuffle = t(window.jQuery, window.Modernizr)
    }(function (t, e, i) {
        "use strict";

        function n(e, i, n) {
            var o, s, r, a = null,
                l = 0;
            n = n || {};
            var c = function () {
                l = !1 === n.leading ? 0 : t.now(), a = null, r = e.apply(o, s), o = s = null
            };
            return function () {
                var h = t.now();
                l || !1 !== n.leading || (l = h);
                var u = i - (h - l);
                return o = this, s = arguments, 0 >= u || u > i ? (clearTimeout(a), a = null, l = h, r = e.apply(o, s), o = s = null) : a || !1 === n.trailing || (a = setTimeout(c, u)), r
            }
        }

        function o(t, e, i) {
            for (var n = 0, o = t.length; o > n; n++)
                if (e.call(i, t[n], n, t) === {}) return
        }

        function s(e, i, n) {
            return setTimeout(t.proxy(e, i), n)
        }

        function r(t) {
            return Math.max.apply(Math, t)
        }

        function a(t) {
            return Math.min.apply(Math, t)
        }

        function l(e) {
            return t.isNumeric(e) ? e : 0
        }

        function c(t) {
            var e, i, n = t.length;
            if (!n) return t;
            for (; --n;) i = Math.floor(Math.random() * (n + 1)), e = t[i], t[i] = t[n], t[n] = e;
            return t
        }
        if ("object" != typeof e) throw new Error("Shuffle.js requires Modernizr.\nhttp://vestride.github.io/Shuffle/#dependencies");
        var h = e.prefixed("transition"),
            u = e.prefixed("transitionDelay"),
            p = e.prefixed("transitionDuration"),
            d = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            }[h],
            f = e.prefixed("transform"),
            g = function (t) {
                return t ? t.replace(/([A-Z])/g, function (t, e) {
                    return "-" + e.toLowerCase()
                }).replace(/^ms-/, "-ms-") : ""
            }(f),
            m = e.csstransforms && e.csstransitions,
            v = e.csstransforms3d,
            y = !!window.getComputedStyle,
            b = "shuffle",
            w = "all",
            x = .001,
            C = window.getComputedStyle || function () {},
            _ = function (t, e) {
                this.x = l(t), this.y = l(e)
            };
        _.equals = function (t, e) {
            return t.x === e.x && t.y === e.y
        };
        var T = function () {
                if (!y) return !1;
                var t = document.body || document.documentElement,
                    e = document.createElement("div");
                e.style.cssText = "width:10px;padding:2px;-webkit-box-sizing:border-box;box-sizing:border-box;", t.appendChild(e);
                var i = "10px" === C(e, null).width;
                return t.removeChild(e), i
            }(),
            E = 0,
            $ = t(window),
            S = function (e, i) {
                i = i || {}, t.extend(this, S.options, i, S.settings), this.$el = t(e), this.element = e, this.unique = "shuffle_" + E++, this._fire(S.EventType.LOADING), this._init(), s(function () {
                    this.initialized = !0, this._fire(S.EventType.DONE)
                }, this, 16)
            };
        return S.EventType = {
            LOADING: "loading",
            DONE: "done",
            LAYOUT: "layout",
            REMOVED: "removed"
        }, S.ClassName = {
            BASE: b,
            SHUFFLE_ITEM: "shuffle-item",
            FILTERED: "filtered",
            CONCEALED: "concealed"
        }, S.options = {
            group: w,
            speed: 250,
            easing: "ease-out",
            itemSelector: "",
            sizer: null,
            gutterWidth: 0,
            columnWidth: 0,
            delimeter: null,
            buffer: 0,
            columnThreshold: y ? .01 : .1,
            initialSort: null,
            throttle: n,
            throttleTime: 300,
            sequentialFadeDelay: 150,
            supported: m
        }, S.settings = {
            useSizer: !1,
            itemCss: {
                position: "absolute",
                top: 0,
                left: 0,
                visibility: "visible"
            },
            revealAppendedDelay: 300,
            lastSort: {},
            lastFilter: w,
            enabled: !0,
            destroyed: !1,
            initialized: !1,
            _animations: [],
            _transitions: [],
            _isMovementCanceled: !1,
            styleQueue: []
        }, S.Point = _, S._getItemTransformString = function (t, e) {
            return v ? "translate3d(" + t.x + "px, " + t.y + "px, 0) scale3d(" + e + ", " + e + ", 1)" : "translate(" + t.x + "px, " + t.y + "px) scale(" + e + ")"
        }, S._getNumberStyle = function (e, i, n) {
            if (y) {
                n = n || C(e, null);
                var o = S._getFloat(n[i]);
                return T || "width" !== i ? T || "height" !== i || (o += S._getFloat(n.paddingTop) + S._getFloat(n.paddingBottom) + S._getFloat(n.borderTopWidth) + S._getFloat(n.borderBottomWidth)) : o += S._getFloat(n.paddingLeft) + S._getFloat(n.paddingRight) + S._getFloat(n.borderLeftWidth) + S._getFloat(n.borderRightWidth), o
            }
            return S._getFloat(t(e).css(i))
        }, S._getFloat = function (t) {
            return l(parseFloat(t))
        }, S._getOuterWidth = function (t, e) {
            var i = C(t, null),
                n = S._getNumberStyle(t, "width", i);
            return e && (n += S._getNumberStyle(t, "marginLeft", i) + S._getNumberStyle(t, "marginRight", i)), n
        }, S._getOuterHeight = function (t, e) {
            var i = C(t, null),
                n = S._getNumberStyle(t, "height", i);
            return e && (n += S._getNumberStyle(t, "marginTop", i) + S._getNumberStyle(t, "marginBottom", i)), n
        }, S._skipTransition = function (t, e, i) {
            var n = t.style[p];
            t.style[p] = "0ms", e.call(i);
            t.offsetWidth;
            t.style[p] = n
        }, S.prototype._init = function () {
            this.$items = this._getItems(), this.sizer = this._getElementOption(this.sizer), this.sizer && (this.useSizer = !0), this.$el.addClass(S.ClassName.BASE), this._initItems(), $.on("resize." + b + "." + this.unique, this._getResizeFunction());
            var t = this.$el.css(["position", "overflow"]),
                e = S._getOuterWidth(this.element);
            this._validateStyles(t), this._setColumns(e), this.shuffle(this.group, this.initialSort), this.supported && s(function () {
                this._setTransitions(), this.element.style[h] = "height " + this.speed + "ms " + this.easing
            }, this)
        }, S.prototype._getResizeFunction = function () {
            var e = t.proxy(this._onResize, this);
            return this.throttle ? this.throttle(e, this.throttleTime) : e
        }, S.prototype._getElementOption = function (t) {
            return "string" == typeof t ? this.$el.find(t)[0] || null : t && t.nodeType && 1 === t.nodeType ? t : t && t.jquery ? t[0] : null
        }, S.prototype._validateStyles = function (t) {
            "static" === t.position && (this.element.style.position = "relative"), "hidden" !== t.overflow && (this.element.style.overflow = "hidden")
        }, S.prototype._filter = function (t, e) {
            t = t || this.lastFilter, e = e || this.$items;
            var i = this._getFilteredSets(t, e);
            return this._toggleFilterClasses(i.filtered, i.concealed), this.lastFilter = t, "string" == typeof t && (this.group = t), i.filtered
        }, S.prototype._getFilteredSets = function (e, i) {
            var n = t(),
                s = t();
            return e === w ? n = i : o(i, function (i) {
                var o = t(i);
                this._doesPassFilter(e, o) ? n = n.add(o) : s = s.add(o)
            }, this), {
                filtered: n,
                concealed: s
            }
        }, S.prototype._doesPassFilter = function (e, i) {
            if (t.isFunction(e)) return e.call(i[0], i, this);
            var n = i.data("groups"),
                o = this.delimeter && !t.isArray(n) ? n.split(this.delimeter) : n;
            return t.inArray(e, o) > -1
        }, S.prototype._toggleFilterClasses = function (t, e) {
            t.removeClass(S.ClassName.CONCEALED).addClass(S.ClassName.FILTERED), e.removeClass(S.ClassName.FILTERED).addClass(S.ClassName.CONCEALED)
        }, S.prototype._initItems = function (t) {
            (t = t || this.$items).addClass([S.ClassName.SHUFFLE_ITEM, S.ClassName.FILTERED].join(" ")), t.css(this.itemCss).data("point", new _).data("scale", 1)
        }, S.prototype._updateItemCount = function () {
            this.visibleItems = this._getFilteredItems().length
        }, S.prototype._setTransition = function (t) {
            t.style[h] = g + " " + this.speed + "ms " + this.easing + ", opacity " + this.speed + "ms " + this.easing
        }, S.prototype._setTransitions = function (t) {
            o(t = t || this.$items, function (t) {
                this._setTransition(t)
            }, this)
        }, S.prototype._setSequentialDelay = function (t) {
            this.supported && o(t, function (t, e) {
                t.style[u] = "0ms," + (e + 1) * this.sequentialFadeDelay + "ms"
            }, this)
        }, S.prototype._getItems = function () {
            return this.$el.children(this.itemSelector)
        }, S.prototype._getFilteredItems = function () {
            return this.$items.filter("." + S.ClassName.FILTERED)
        }, S.prototype._getConcealedItems = function () {
            return this.$items.filter("." + S.ClassName.CONCEALED)
        }, S.prototype._getColumnSize = function (e, i) {
            var n;
            return 0 === (n = t.isFunction(this.columnWidth) ? this.columnWidth(e) : this.useSizer ? S._getOuterWidth(this.sizer) : this.columnWidth ? this.columnWidth : this.$items.length > 0 ? S._getOuterWidth(this.$items[0], !0) : e) && (n = e), n + i
        }, S.prototype._getGutterSize = function (e) {
            return t.isFunction(this.gutterWidth) ? this.gutterWidth(e) : this.useSizer ? S._getNumberStyle(this.sizer, "marginLeft") : this.gutterWidth
        }, S.prototype._setColumns = function (t) {
            var e = t || S._getOuterWidth(this.element),
                i = this._getGutterSize(e),
                n = this._getColumnSize(e, i),
                o = (e + i) / n;
            Math.abs(Math.round(o) - o) < this.columnThreshold && (o = Math.round(o)), this.cols = Math.max(Math.floor(o), 1), this.containerWidth = e, this.colWidth = n
        }, S.prototype._setContainerSize = function () {
            this.$el.css("height", this._getContainerSize())
        }, S.prototype._getContainerSize = function () {
            return r(this.positions)
        }, S.prototype._fire = function (t, e) {
            this.$el.trigger(t + "." + b, e && e.length ? e : [this])
        }, S.prototype._resetCols = function () {
            var t = this.cols;
            for (this.positions = []; t--;) this.positions.push(0)
        }, S.prototype._layout = function (t, e) {
            o(t, function (t) {
                this._layoutItem(t, !!e)
            }, this), this._processStyleQueue(), this._setContainerSize()
        }, S.prototype._layoutItem = function (e, i) {
            var n = t(e),
                o = n.data(),
                s = o.point,
                r = o.scale,
                a = {
                    width: S._getOuterWidth(e, !0),
                    height: S._getOuterHeight(e, !0)
                },
                l = this._getItemPosition(a);
            _.equals(s, l) && 1 === r || (o.point = l, o.scale = 1, this.styleQueue.push({
                $item: n,
                point: l,
                scale: 1,
                opacity: i ? 0 : 1,
                skipTransition: i || 0 === this.speed,
                callfront: function () {
                    i || n.css("visibility", "visible")
                },
                callback: function () {
                    i && n.css("visibility", "hidden")
                }
            }))
        }, S.prototype._getItemPosition = function (t) {
            for (var e = this._getColumnSpan(t.width, this.colWidth, this.cols), i = this._getColumnSet(e, this.cols), n = this._getShortColumn(i, this.buffer), o = new _(Math.round(this.colWidth * n), Math.round(i[n])), s = i[n] + t.height, r = this.cols + 1 - i.length, a = 0; r > a; a++) this.positions[n + a] = s;
            return o
        }, S.prototype._getColumnSpan = function (t, e, i) {
            var n = t / e;
            return Math.abs(Math.round(n) - n) < this.columnThreshold && (n = Math.round(n)), Math.min(Math.ceil(n), i)
        }, S.prototype._getColumnSet = function (t, e) {
            if (1 === t) return this.positions;
            for (var i = e + 1 - t, n = [], o = 0; i > o; o++) n[o] = r(this.positions.slice(o, o + t));
            return n
        }, S.prototype._getShortColumn = function (t, e) {
            for (var i = a(t), n = 0, o = t.length; o > n; n++)
                if (t[n] >= i - e && t[n] <= i + e) return n;
            return 0
        }, S.prototype._shrink = function (e) {
            o(e || this._getConcealedItems(), function (e) {
                var i = t(e),
                    n = i.data();
                n.scale !== x && (n.scale = x, this.styleQueue.push({
                    $item: i,
                    point: n.point,
                    scale: x,
                    opacity: 0,
                    callback: function () {
                        i.css("visibility", "hidden")
                    }
                }))
            }, this)
        }, S.prototype._onResize = function () {
            this.enabled && !this.destroyed && S._getOuterWidth(this.element) !== this.containerWidth && this.update()
        }, S.prototype._getStylesForTransition = function (t) {
            var e = {
                opacity: t.opacity
            };
            return this.supported ? e[f] = S._getItemTransformString(t.point, t.scale) : (e.left = t.point.x, e.top = t.point.y), e
        }, S.prototype._transition = function (e) {
            var i = this._getStylesForTransition(e);
            this._startItemAnimation(e.$item, i, e.callfront || t.noop, e.callback || t.noop)
        }, S.prototype._startItemAnimation = function (e, i, n, o) {
            function s(e) {
                e.target === e.currentTarget && (t(e.target).off(d, s), r._removeTransitionReference(a), o())
            }
            var r = this,
                a = {
                    $element: e,
                    handler: s
                };
            if (n(), !this.initialized) return e.css(i), void o();
            if (this.supported) e.css(i), e.on(d, s), this._transitions.push(a);
            else {
                var l = e.stop(!0).animate(i, this.speed, "swing", o);
                this._animations.push(l.promise())
            }
        }, S.prototype._processStyleQueue = function (e) {
            this.isTransitioning && this._cancelMovement();
            var i = t();
            o(this.styleQueue, function (t) {
                t.skipTransition ? this._styleImmediately(t) : (i = i.add(t.$item), this._transition(t))
            }, this), i.length > 0 && this.initialized && this.speed > 0 ? (this.isTransitioning = !0, this.supported ? this._whenCollectionDone(i, d, this._movementFinished) : this._whenAnimationsDone(this._movementFinished)) : e || s(this._layoutEnd, this), this.styleQueue.length = 0
        }, S.prototype._cancelMovement = function () {
            this.supported ? o(this._transitions, function (t) {
                t.$element.off(d, t.handler)
            }) : (this._isMovementCanceled = !0, this.$items.stop(!0), this._isMovementCanceled = !1), this._transitions.length = 0, this.isTransitioning = !1
        }, S.prototype._removeTransitionReference = function (e) {
            var i = t.inArray(e, this._transitions);
            i > -1 && this._transitions.splice(i, 1)
        }, S.prototype._styleImmediately = function (t) {
            S._skipTransition(t.$item[0], function () {
                t.$item.css(this._getStylesForTransition(t))
            }, this)
        }, S.prototype._movementFinished = function () {
            this.isTransitioning = !1, this._layoutEnd()
        }, S.prototype._layoutEnd = function () {
            this._fire(S.EventType.LAYOUT)
        }, S.prototype._addItems = function (t, e, i) {
            this._initItems(t), this._setTransitions(t), this.$items = this._getItems(), this._shrink(t), o(this.styleQueue, function (t) {
                t.skipTransition = !0
            }), this._processStyleQueue(!0), e ? this._addItemsToEnd(t, i) : this.shuffle(this.lastFilter)
        }, S.prototype._addItemsToEnd = function (t, e) {
            var i = this._filter(null, t).get();
            this._updateItemCount(), this._layout(i, !0), e && this.supported && this._setSequentialDelay(i), this._revealAppended(i)
        }, S.prototype._revealAppended = function (e) {
            s(function () {
                o(e, function (e) {
                    var i = t(e);
                    this._transition({
                        $item: i,
                        opacity: 1,
                        point: i.data("point"),
                        scale: 1
                    })
                }, this), this._whenCollectionDone(t(e), d, function () {
                    t(e).css(u, "0ms"), this._movementFinished()
                })
            }, this, this.revealAppendedDelay)
        }, S.prototype._whenCollectionDone = function (e, i, n) {
            function o(e) {
                e.target === e.currentTarget && (t(e.target).off(i, o), ++s === r && (a._removeTransitionReference(l), n.call(a)))
            }
            var s = 0,
                r = e.length,
                a = this,
                l = {
                    $element: e,
                    handler: o
                };
            e.on(i, o), this._transitions.push(l)
        }, S.prototype._whenAnimationsDone = function (e) {
            t.when.apply(null, this._animations).always(t.proxy(function () {
                this._animations.length = 0, this._isMovementCanceled || e.call(this)
            }, this))
        }, S.prototype.shuffle = function (t, e) {
            this.enabled && (t || (t = w), this._filter(t), this._updateItemCount(), this._shrink(), this.sort(e))
        }, S.prototype.sort = function (t) {
            if (this.enabled) {
                this._resetCols();
                var e = t || this.lastSort,
                    i = this._getFilteredItems().sorted(e);
                this._layout(i), this.lastSort = e
            }
        }, S.prototype.update = function (t) {
            this.enabled && (t || this._setColumns(), this.sort())
        }, S.prototype.layout = function () {
            this.update(!0)
        }, S.prototype.appended = function (t, e, i) {
            this._addItems(t, !0 === e, !1 !== i)
        }, S.prototype.disable = function () {
            this.enabled = !1
        }, S.prototype.enable = function (t) {
            this.enabled = !0, !1 !== t && this.update()
        }, S.prototype.remove = function (e) {
            function i() {
                e.remove(), this.$items = this._getItems(), this._updateItemCount(), this._fire(S.EventType.REMOVED, [e, this]), e = null
            }
            e.length && e.jquery && (this._toggleFilterClasses(t(), e), this._shrink(e), this.sort(), this.$el.one(S.EventType.LAYOUT + "." + b, t.proxy(i, this)))
        }, S.prototype.destroy = function () {
            $.off("." + this.unique), this.$el.removeClass(b).removeAttr("style").removeData(b), this.$items.removeAttr("style").removeData("point").removeData("scale").removeClass([S.ClassName.CONCEALED, S.ClassName.FILTERED, S.ClassName.SHUFFLE_ITEM].join(" ")), this.$items = null, this.$el = null, this.sizer = null, this.element = null, this._transitions = null, this.destroyed = !0
        }, t.fn.shuffle = function (e) {
            var i = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
                var n = t(this),
                    o = n.data(b);
                o ? "string" == typeof e && o[e] && o[e].apply(o, i) : (o = new S(this, e), n.data(b, o))
            })
        }, t.fn.sorted = function (e) {
            var n = t.extend({}, t.fn.sorted.defaults, e),
                o = this.get(),
                s = !1;
            return o.length ? n.randomize ? c(o) : (t.isFunction(n.by) && o.sort(function (e, o) {
                if (s) return 0;
                var r = n.by(t(e)),
                    a = n.by(t(o));
                return r === i && a === i ? (s = !0, 0) : a > r || "sortFirst" === r || "sortLast" === a ? -1 : r > a || "sortLast" === r || "sortFirst" === a ? 1 : 0
            }), s ? this.get() : (n.reverse && o.reverse(), o)) : []
        }, t.fn.sorted.defaults = {
            reverse: !1,
            by: null,
            randomize: !1
        }, S
    }),
    function (t, e, i) {
        "use strict";
        t.HoverDir = function (e, i) {
            this.$el = t(i), this._init(e)
        }, t.HoverDir.defaults = {
            speed: 300,
            easing: "ease",
            hoverDelay: 0,
            inverse: !1
        }, t.HoverDir.prototype = {
            _init: function (e) {
                this.options = t.extend(!0, {}, t.HoverDir.defaults, e), this.transitionProp = "all " + this.options.speed + "ms " + this.options.easing, this.support = Modernizr.csstransitions, this._loadEvents()
            },
            _loadEvents: function () {
                var e = this;
                this.$el.on("mouseenter.hoverdir, mouseleave.hoverdir", function (i) {
                    var n = t(this),
                        o = n.find("div"),
                        s = e._getDir(n, {
                            x: i.pageX,
                            y: i.pageY
                        }),
                        r = e._getStyle(s);
                    "mouseenter" === i.type ? (o.hide().css(r.from), clearTimeout(e.tmhover), e.tmhover = setTimeout(function () {
                        o.show(0, function () {
                            var i = t(this);
                            e.support && i.css("transition", e.transitionProp), e._applyAnimation(i, r.to, e.options.speed)
                        })
                    }, e.options.hoverDelay)) : (e.support && o.css("transition", e.transitionProp), clearTimeout(e.tmhover), e._applyAnimation(o, r.from, e.options.speed))
                })
            },
            _getDir: function (t, e) {
                var i = t.width(),
                    n = t.height(),
                    o = (e.x - t.offset().left - i / 2) * (i > n ? n / i : 1),
                    s = (e.y - t.offset().top - n / 2) * (n > i ? i / n : 1);
                return Math.round((Math.atan2(s, o) * (180 / Math.PI) + 180) / 90 + 3) % 4
            },
            _getStyle: function (t) {
                var e, i, n = {
                        left: "0px",
                        top: "-100%"
                    },
                    o = {
                        left: "0px",
                        top: "100%"
                    },
                    s = {
                        left: "-100%",
                        top: "0px"
                    },
                    r = {
                        left: "100%",
                        top: "0px"
                    },
                    a = {
                        top: "0px"
                    },
                    l = {
                        left: "0px"
                    };
                switch (t) {
                    case 0:
                        e = this.options.inverse ? o : n, i = a;
                        break;
                    case 1:
                        e = this.options.inverse ? s : r, i = l;
                        break;
                    case 2:
                        e = this.options.inverse ? n : o, i = a;
                        break;
                    case 3:
                        e = this.options.inverse ? r : s, i = l
                }
                return {
                    from: e,
                    to: i
                }
            },
            _applyAnimation: function (e, i, n) {
                t.fn.applyStyle = this.support ? t.fn.css : t.fn.animate, e.stop().applyStyle(i, t.extend(!0, [], {
                    duration: n + "ms"
                }))
            }
        };
        var n = function (t) {
            e.console && e.console.error(t)
        };
        t.fn.hoverdir = function (e) {
            var i = t.data(this, "hoverdir");
            if ("string" == typeof e) {
                var o = Array.prototype.slice.call(arguments, 1);
                this.each(function () {
                    return i ? t.isFunction(i[e]) && "_" !== e.charAt(0) ? void i[e].apply(i, o) : void n("no such method '" + e + "' for hoverdir instance") : void n("cannot call methods on hoverdir prior to initialization; attempted to call method '" + e + "'")
                })
            } else this.each(function () {
                i ? i._init() : i = t.data(this, "hoverdir", new t.HoverDir(e, this))
            });
            return i
        }
    }(jQuery, window),
    function (t, e, i, n) {
        "use strict";

        function o(o, s, r, a) {
            function l() {
                if (_ = e.devicePixelRatio > 1, null !== s("defaultImage") || null !== s("placeholder"))
                    for (var i = 0; i < r.length; i++) {
                        var n = t(r[i]),
                            l = r[i].tagName.toLowerCase(),
                            h = "background-image";
                        n.data("plugin_" + o.name, o), "img" == l && s("defaultImage") && !n.attr("src") ? n.attr("src", s("defaultImage")) : "img" == l || !s("placeholder") || n.css(h) && "none" != n.css(h) || n.css(h, "url(" + s("placeholder") + ")")
                    }
                s("delay") >= 0 && setTimeout(function () {
                    c(!0)
                }, s("delay")), (s("delay") < 0 || s("combined")) && (c(), a.e = g(s("throttle"), function (t) {
                    "resize" === t.type && (x = C = -1), b(function () {
                        c(t.all)
                    }, o, !0)
                }), t(s("appendScroll")).on("scroll." + o.name + " resize." + o.name, a.e))
            }

            function c(e) {
                if (!r.length) return o.destroy();
                for (var i = !1, n = 0; n < r.length; n++) ! function (n) {
                    if (u(n) || e) {
                        var o = t(n),
                            r = n.tagName.toLowerCase();
                        if (o.data(s("handledName"))) return;
                        o.attr(s("attribute")) && ("img" == r && o.attr(s("attribute")) != o.attr("src") || "img" != r && o.attr(s("attribute")) != o.css("background-image")) && (o.is(":visible") || !s("visibleOnly")) && (i = !0, o.data(s("handledName"), !0), b(function () {
                            h(o, r)
                        }))
                    }
                }(r[n]);
                i && b(function () {
                    r = t(r).filter(function () {
                        return !t(this).data(s("handledName"))
                    })
                })
            }

            function h(e, i) {
                var n = t(new Image);
                ++w, n.error(function () {
                    v("onError", e), m()
                }), n.one("load", function () {
                    e.hide(), "img" == i ? e.attr("src", n.attr("src")) : e.css("background-image", "url(" + n.attr("src") + ")"), e[s("effect")](s("effectTime")), s("removeAttribute") && e.removeAttr(s("attribute") + " " + s("retinaAttribute")), v("afterLoad", e), n.off("error").remove(), m()
                }), v("beforeLoad", e), n.attr("src", e.attr(s(_ && e.attr(s("retinaAttribute")) ? "retinaAttribute" : "attribute"))), n.complete && n.load()
            }

            function u(t) {
                var e = t.getBoundingClientRect(),
                    i = s("threshold"),
                    n = d() + i > e.top && -i < e.bottom,
                    o = p() + i > e.left && -i < e.right;
                return "vertical" == s("scrollDirection") ? n : "horizontal" == s("scrollDirection") ? o : n && o
            }

            function p() {
                return x = f(x, "Width")
            }

            function d() {
                return C = f(C, "Height")
            }

            function f(t, n) {
                return t >= 0 ? t : e["inner" + n] || (i.documentElement || i.body)["client" + n] || i.body["offset" + n] || s("fallback" + n)
            }

            function g(t, e) {
                var i, o = 0;
                return function (r, a) {
                    function l() {
                        o = +new Date, e.call(n, r)
                    }
                    var c = +new Date - o;
                    i && clearTimeout(i), c > t || !s("enableThrottle") || a ? l() : i = setTimeout(l, t - c)
                }
            }

            function m() {
                --w, r.size() || w || v("onFinishedAll", null)
            }

            function v(t, e) {
                (t = s(t)) && (e ? b(function () {
                    t(e)
                }, o) : b(t, o))
            }

            function y() {
                T = setTimeout(function () {
                    b(), E.length && y()
                }, 2)
            }

            function b(t, i, n) {
                return t ? s("enableQueueing") ? (n && $ || (E.push([t, i, n]), n && ($ = !0)), void(1 == E.length && y())) : void t.call(i || e) : void((t = E.shift()) && (t[2] && ($ = !1), t[0].call(t[1] || e)))
            }
            var w = 0,
                x = -1,
                C = -1,
                _ = !1,
                T = null,
                E = [],
                $ = !1;
            ! function () {
                if (s("onError"))
                    for (var i = 0; i < r.length; i++) b(function () {
                        t(this).on("error." + o.name, function () {
                            v("onError", t(this))
                        })
                    }, r[i]);
                "event" == s("bind") ? l() : t(e).load(l)
            }()
        }

        function s(e, i) {
            i && t.extend(this.configuration, i);
            var n = this,
                s = e,
                r = {
                    e: null
                },
                a = function (t) {
                    return n.configuration[t]
                };
            return n.update = function (t) {
                r.e && r.e({}, !t)
            }, n.loadAll = function () {
                r.e && r.e({
                    all: !0
                })
            }, n.destroy = function () {
                t(a("appendScroll")).off("." + n.name, r.e), s = {}, r.e = null
            }, o(n, a, s, r), a("chainable") ? e : n
        }
        t.fn.Lazy = t.fn.lazy = function (t) {
            return new s(this, t)
        }, t.extend(s.prototype, {
            name: "lazy",
            configuration: {
                chainable: !0,
                bind: "load",
                threshold: 500,
                fallbackWidth: 2e3,
                fallbackHeight: 2e3,
                visibleOnly: !1,
                appendScroll: e,
                scrollDirection: "both",
                defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
                placeholder: null,
                delay: -1,
                combined: !1,
                attribute: "data-src",
                retinaAttribute: "data-retina",
                removeAttribute: !0,
                handledName: "handled",
                effect: "show",
                effectTime: 0,
                enableThrottle: !0,
                throttle: 250,
                enableQueueing: !0,
                beforeLoad: null,
                afterLoad: null,
                onError: null,
                onFinishedAll: null
            }
        })
    }(jQuery, window, document),
    function (t, e, i) {
        "use strict";
        var n = e.Modernizr;
        t("body"), t.DLMenu = function (e, i) {
            this.$el = t(i), this._init(e)
        }, t.DLMenu.defaults = {
            animationClasses: {
                classin: "dl-animate-in-2",
                classout: "dl-animate-out-2"
            },
            onLevelClick: function (t, e) {
                return !1
            },
            onLinkClick: function (t, e) {
                return !1
            }
        }, t.DLMenu.prototype = {
            _init: function (e) {
                this.options = t.extend(!0, {}, t.DLMenu.defaults, e), this._config();
                var i = {
                        WebkitAnimation: "webkitAnimationEnd",
                        OAnimation: "oAnimationEnd",
                        msAnimation: "MSAnimationEnd",
                        animation: "animationend"
                    },
                    o = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        msTransition: "MSTransitionEnd",
                        transition: "transitionend"
                    };
                this.animEndEventName = i[n.prefixed("animation")] + ".dlmenu", this.transEndEventName = o[n.prefixed("transition")] + ".dlmenu", this.supportAnimations = n.cssanimations, this.supportTransitions = n.csstransitions, this._initEvents()
            },
            _config: function () {
                this.open = !0, this.$menuScroll = t(".menu-box"), this.$buttonMobile = t(".menu-button-mobile"), this.$menu = this.$el.children("ul.dl-menu"), this.$menuitems = this.$menu.find("li:not(.dl-back)"), this.$el.find("ul.sub-menu").prepend('<li class="dl-back"><a href="#"></a></li>'), this.$back = this.$menu.find("li.dl-back"), this.$menuli = this.$menu.find("li"), this.$menuli.each(function () {
                    var e = t(this),
                        i = e.find("a")[0];
                    i ? e.find("li.dl-back").find("a").html('<i class="fa fa-fw fa-long-arrow-left"></i> ' + i.innerHTML) : e.find("li.dl-back").find("a").html('<i class="fa fa-fw fa-long-arrow-left"></i>')
                })
            },
            _initEvents: function () {
                var e = this;
                this.$buttonMobile.on("click.dlmenu", function () {
                    return t(this).hasClass("close") ? (e.$menuScroll.removeClass("dl-show"), e.$buttonMobile.removeClass("close")) : (e.$menuScroll.addClass("dl-show"), e.$buttonMobile.addClass("close")), !1
                }), t(document).on("click", "li.submenu > a", function (i) {
                    i.stopPropagation();
                    var n = t(this)[0],
                        o = t(n.parentNode),
                        s = o.children("ul.sub-menu");
                    if (s.length > 0) {
                        e.$menuScroll.addClass("scroll-none");
                        var r = s.clone().css("opacity", 0).insertAfter(e.$menu),
                            a = function () {
                                e.$menu.off(e.animEndEventName).removeClass(e.options.animationClasses.classout).addClass("dl-subview"), o.addClass("dl-subviewopen").parents(".dl-subviewopen:first").removeClass("dl-subviewopen").addClass("dl-subview"), r.remove()
                            };
                        return setTimeout(function () {
                            r.addClass(e.options.animationClasses.classin), e.$menu.addClass(e.options.animationClasses.classout), e.supportAnimations ? e.$menu.on(e.animEndEventName, a) : a.call(), e.options.onLevelClick(o, o.children("a:first").text())
                        }), setTimeout(function () {
                            e.$menuScroll.removeClass("scroll-none")
                        }, 1e3), !1
                    }
                    e.$el.removeClass("dl-show"), e.options.onLinkClick(o, i)
                }), this.$back.on("click.dlmenu", function (i) {
                    e.$menuScroll.addClass("scroll-none");
                    var n = t(this),
                        o = n.parents("ul.sub-menu:first"),
                        s = o.parent(),
                        r = o.clone().insertAfter(e.$menu),
                        a = function () {
                            e.$menu.off(e.animEndEventName).removeClass(e.options.animationClasses.classin), r.remove()
                        };
                    return setTimeout(function () {
                        r.addClass(e.options.animationClasses.classout), e.$menu.addClass(e.options.animationClasses.classin), e.supportAnimations ? e.$menu.on(e.animEndEventName, a) : a.call(), s.removeClass("dl-subviewopen");
                        var t = n.parents(".dl-subview:first");
                        t.is("li") && t.addClass("dl-subviewopen"), t.removeClass("dl-subview")
                    }), setTimeout(function () {
                        e.$menuScroll.removeClass("scroll-none")
                    }, 1e3), !1
                })
            },
            _resetMenu: function () {
                this.$menu.removeClass("dl-subview"), this.$menuitems.removeClass("dl-subview dl-subviewopen")
            }
        };
        var o = function (t) {
            e.console && e.console.error(t)
        };
        t.fn.dlmenu = function (e) {
            if ("string" == typeof e) {
                var i = Array.prototype.slice.call(arguments, 1);
                this.each(function () {
                    var n = t.data(this, "dlmenu");
                    return n ? t.isFunction(n[e]) && "_" !== e.charAt(0) ? void n[e].apply(n, i) : void o("no such method '" + e + "' for dlmenu instance") : void o("cannot call methods on dlmenu prior to initialization; attempted to call method '" + e + "'")
                })
            } else this.each(function () {
                var i = t.data(this, "dlmenu");
                i ? i._init() : i = t.data(this, "dlmenu", new t.DLMenu(e, this))
            });
            return this
        }
    }(jQuery, window), PageTransitions = function () {
        function t(t) {
            $main = t.pages, menu = t.menu, animcursor = t.animcursor, nextAnimcursor = t.nextAnimcursor, pageStart = d(), pageActiv = "", $main.append('<section id="page-ajax-prev"></section>'), $pages = $main.children("section"), $pages.each(function () {
                var t = jQuery(this);
                t.attr("class") ? pageClass = t.attr("class") : pageClass = "", t.data("originalClassList", pageClass)
            }), g(animcursor, pageStart);
            var i = jQuery(menu + ' a[href*="' + pageStart + '"]');
            i = i[0], (i = jQuery(i.parentNode)).addClass("active"), e()
        }

        function e() {
            window.onpopstate = function (t) {
                location.hash ? g(animcursor, location.hash) : o(location)
            }, jQuery(document).on("click", ".page-link", function (t) {
                if (t.preventDefault(), b) return !1;
                var e = jQuery(this),
                    n = "#" + e.attr("href").split("#")[1];
                if (n === "#" + pageActiv.attr("id")) return !1;
                p(e);
                var o = setTimeout(function () {
                    g(c(e), n, e), history.pushState("", "New URL: " + e.attr("href"), e.attr("href")), clearTimeout(o)
                }, i())
            }), jQuery(document).on("click", ".ajax-loader", function (t) {
                if (t.preventDefault(), b) return !1;
                var e = jQuery(this);
                p(e);
                var n = setTimeout(function () {
                    o(e), history.pushState("", "New URL: " + e.attr("href"), e.attr("href")), clearTimeout(n)
                }, i())
            })
        }

        function i() {
            var t = 0;
            return jQuery(".menu-box").hasClass("dl-show") && (jQuery(".menu-box").removeClass("dl-show"), jQuery(".menu-button-mobile").removeClass("close"), t = 700), t
        }

        function n() {
            var t = setTimeout(function () {
                jQuery("section.section-current img.lazy").lazy({
                    bind: "event",
                    effect: "fadeIn",
                    effectTime: 2e3,
                    appendScroll: jQuery("section.section-current .content"),
                    delay: -1
                }), clearTimeout(t)
            }, 200)
        }

        function o(t) {
            $(".page-ajax-preloader").addClass("activ");
            var e = "#page-ajax-prev",
                i = c(t),
                n = t,
                o = n.data("remote") || n.attr("href");
            jQuery.ajax({
                url: o,
                async: !1,
                beforeSend: !1,
                cache: !1,
                dataType: "html",
                context: document.body,
                success: function (t) {
                    var n = $(t).children("section").children("div.content");
                    document.querySelector("#page-ajax-prev") || $main.append('<section id="page-ajax-prev"></section>'), $(e).html(n), $(e + " .ajax-page-link").addClass("page-link");
                    var o = setTimeout(function () {
                        $(".page-ajax-preloader").removeClass("activ"), g(i, e), clearTimeout(o)
                    }, 500)
                },
                error: function (t, n, o) {
                    document.querySelector("#page-ajax-prev") || $main.append('<section id="page-ajax-prev"></section>');
                    var s = '<h1 class="text-center">Error - page not found!</h1>';
                    "file" === location.origin.split("://")[0] && (s = '<h1 class="text-center">Error - url adress!</h1><p class="lead text-center">Please use url adress: <kbd>http://</kbd> do not <kbd>file://</kbd> in your browser.</p>'), $(e).html(s), g(i, e), $(".page-ajax-preloader").removeClass("activ")
                }
            })
        }

        function s() {
            "page-ajax-prev" === pageActiv.attr("id") && ($("#page-ajax").remove(), $("#page-ajax-prev").attr("id", "page-ajax"))
        }

        function r() {
            jQuery(".content").removeClass("scroll-auto"), jQuery("section.section-current .content").addClass("scroll-auto")
        }

        function a(t) {
            animcursor = t, ++animcursor
        }

        function l(t) {
            return nextAnimcursor = !1, t && (nextAnimcursor = !0), nextAnimcursor
        }

        function c(t) {
            var e = t.attr("data-pageanim");
            return t.attr("data-pageanim") ? u(e) : h()
        }

        function h() {
            return nextAnimcursor && (++animcursor, animcursor = u(animcursor)), animcursor
        }

        function u(t) {
            return t > 67 && (t = 1), t
        }

        function p(t) {
            if (!t) return !1;
            var e = $(t);
            e = e[0], (e = $(e.parentNode)) && (jQuery(menu + " li").removeClass("active"), e.addClass("active"))
        }

        function d(t) {
            return "" !== location.hash ? location.hash : t || "#" + $("section.page-activ").attr("id")
        }

        function f(t) {
            return !!document.querySelector(t)
        }

        function g(t, e, i) {
            if (b) return !1;
            b = !0, f(e) || (e = "#error404");
            var n = $(pageActiv),
                o = $(e).addClass("section-current"),
                s = y(t);
            n.addClass(s.out).on(C, function () {
                n.off(C), w = !0, x && m(n, o)
            }), o.addClass(s.in).on(C, function () {
                o.off(C), x = !0, w && m(n, o)
            }), _ || m(n, o)
        }

        function m(t, e) {
            w = !1, x = !1, v(t, e), b = !1
        }

        function v(t, e) {
            t.attr("class", t.data("originalClassList") + ""), e.attr("class", e.data("originalClassList") + " section-current"), pageActiv = e, s(), r(), n()
        }

        function y(t) {
            switch (t) {
                case 1:
                    outClass = "pt-page-moveToLeft", inClass = "pt-page-moveFromRight";
                    break;
                case 2:
                    outClass = "pt-page-moveToRight", inClass = "pt-page-moveFromLeft";
                    break;
                case 3:
                    outClass = "pt-page-moveToTop", inClass = "pt-page-moveFromBottom";
                    break;
                case 4:
                    outClass = "pt-page-moveToBottom", inClass = "pt-page-moveFromTop";
                    break;
                case 5:
                    outClass = "pt-page-fade", inClass = "pt-page-moveFromRight pt-page-ontop";
                    break;
                case 6:
                    outClass = "pt-page-fade", inClass = "pt-page-moveFromLeft pt-page-ontop";
                    break;
                case 7:
                    outClass = "pt-page-fade", inClass = "pt-page-moveFromBottom pt-page-ontop";
                    break;
                case 8:
                    outClass = "pt-page-fade", inClass = "pt-page-moveFromTop pt-page-ontop";
                    break;
                case 9:
                    outClass = "pt-page-moveToLeftFade", inClass = "pt-page-moveFromRightFade";
                    break;
                case 10:
                    outClass = "pt-page-moveToRightFade", inClass = "pt-page-moveFromLeftFade";
                    break;
                case 11:
                    outClass = "pt-page-moveToTopFade", inClass = "pt-page-moveFromBottomFade";
                    break;
                case 12:
                    outClass = "pt-page-moveToBottomFade", inClass = "pt-page-moveFromTopFade";
                    break;
                case 13:
                    outClass = "pt-page-moveToLeftEasing pt-page-ontop", inClass = "pt-page-moveFromRight";
                    break;
                case 14:
                    outClass = "pt-page-moveToRightEasing pt-page-ontop", inClass = "pt-page-moveFromLeft";
                    break;
                case 15:
                    outClass = "pt-page-moveToTopEasing pt-page-ontop", inClass = "pt-page-moveFromBottom";
                    break;
                case 16:
                    outClass = "pt-page-moveToBottomEasing pt-page-ontop", inClass = "pt-page-moveFromTop";
                    break;
                case 17:
                    outClass = "pt-page-scaleDown", inClass = "pt-page-moveFromRight pt-page-ontop";
                    break;
                case 18:
                    outClass = "pt-page-scaleDown", inClass = "pt-page-moveFromLeft pt-page-ontop";
                    break;
                case 19:
                    outClass = "pt-page-scaleDown", inClass = "pt-page-moveFromBottom pt-page-ontop";
                    break;
                case 20:
                    outClass = "pt-page-scaleDown", inClass = "pt-page-moveFromTop pt-page-ontop";
                    break;
                case 21:
                    outClass = "pt-page-scaleDown", inClass = "pt-page-scaleUpDown pt-page-delay300";
                    break;
                case 22:
                    outClass = "pt-page-scaleDownUp", inClass = "pt-page-scaleUp pt-page-delay300";
                    break;
                case 23:
                    outClass = "pt-page-moveToLeft pt-page-ontop", inClass = "pt-page-scaleUp";
                    break;
                case 24:
                    outClass = "pt-page-moveToRight pt-page-ontop", inClass = "pt-page-scaleUp";
                    break;
                case 25:
                    outClass = "pt-page-moveToTop pt-page-ontop", inClass = "pt-page-scaleUp";
                    break;
                case 26:
                    outClass = "pt-page-moveToBottom pt-page-ontop", inClass = "pt-page-scaleUp";
                    break;
                case 27:
                    outClass = "pt-page-scaleDownCenter", inClass = "pt-page-scaleUpCenter pt-page-delay400";
                    break;
                case 28:
                    outClass = "pt-page-rotateRightSideFirst", inClass = "pt-page-moveFromRight pt-page-delay200 pt-page-ontop";
                    break;
                case 29:
                    outClass = "pt-page-rotateLeftSideFirst", inClass = "pt-page-moveFromLeft pt-page-delay200 pt-page-ontop";
                    break;
                case 30:
                    outClass = "pt-page-rotateTopSideFirst", inClass = "pt-page-moveFromTop pt-page-delay200 pt-page-ontop";
                    break;
                case 31:
                    outClass = "pt-page-rotateBottomSideFirst", inClass = "pt-page-moveFromBottom pt-page-delay200 pt-page-ontop";
                    break;
                case 32:
                    outClass = "pt-page-flipOutRight", inClass = "pt-page-flipInLeft pt-page-delay500";
                    break;
                case 33:
                    outClass = "pt-page-flipOutLeft", inClass = "pt-page-flipInRight pt-page-delay500";
                    break;
                case 34:
                    outClass = "pt-page-flipOutTop", inClass = "pt-page-flipInBottom pt-page-delay500";
                    break;
                case 35:
                    outClass = "pt-page-flipOutBottom", inClass = "pt-page-flipInTop pt-page-delay500";
                    break;
                case 36:
                    outClass = "pt-page-rotateFall pt-page-ontop", inClass = "pt-page-scaleUp";
                    break;
                case 37:
                    outClass = "pt-page-rotateOutNewspaper", inClass = "pt-page-rotateInNewspaper pt-page-delay500";
                    break;
                case 38:
                    outClass = "pt-page-rotatePushLeft", inClass = "pt-page-moveFromRight";
                    break;
                case 39:
                    outClass = "pt-page-rotatePushRight", inClass = "pt-page-moveFromLeft";
                    break;
                case 40:
                    outClass = "pt-page-rotatePushTop", inClass = "pt-page-moveFromBottom";
                    break;
                case 41:
                    outClass = "pt-page-rotatePushBottom", inClass = "pt-page-moveFromTop";
                    break;
                case 42:
                    outClass = "pt-page-rotatePushLeft", inClass = "pt-page-rotatePullRight pt-page-delay180";
                    break;
                case 43:
                    outClass = "pt-page-rotatePushRight", inClass = "pt-page-rotatePullLeft pt-page-delay180";
                    break;
                case 44:
                    outClass = "pt-page-rotatePushTop", inClass = "pt-page-rotatePullBottom pt-page-delay180";
                    break;
                case 45:
                    outClass = "pt-page-rotatePushBottom", inClass = "pt-page-rotatePullTop pt-page-delay180";
                    break;
                case 46:
                    outClass = "pt-page-rotateFoldLeft", inClass = "pt-page-moveFromRightFade";
                    break;
                case 47:
                    outClass = "pt-page-rotateFoldRight", inClass = "pt-page-moveFromLeftFade";
                    break;
                case 48:
                    outClass = "pt-page-rotateFoldTop", inClass = "pt-page-moveFromBottomFade";
                    break;
                case 49:
                    outClass = "pt-page-rotateFoldBottom", inClass = "pt-page-moveFromTopFade";
                    break;
                case 50:
                    outClass = "pt-page-moveToRightFade", inClass = "pt-page-rotateUnfoldLeft";
                    break;
                case 51:
                    outClass = "pt-page-moveToLeftFade", inClass = "pt-page-rotateUnfoldRight";
                    break;
                case 52:
                    outClass = "pt-page-moveToBottomFade", inClass = "pt-page-rotateUnfoldTop";
                    break;
                case 53:
                    outClass = "pt-page-moveToTopFade", inClass = "pt-page-rotateUnfoldBottom";
                    break;
                case 54:
                    outClass = "pt-page-rotateRoomLeftOut pt-page-ontop", inClass = "pt-page-rotateRoomLeftIn";
                    break;
                case 55:
                    outClass = "pt-page-rotateRoomRightOut pt-page-ontop", inClass = "pt-page-rotateRoomRightIn";
                    break;
                case 56:
                    outClass = "pt-page-rotateRoomTopOut pt-page-ontop", inClass = "pt-page-rotateRoomTopIn";
                    break;
                case 57:
                    outClass = "pt-page-rotateRoomBottomOut pt-page-ontop", inClass = "pt-page-rotateRoomBottomIn";
                    break;
                case 58:
                    outClass = "pt-page-rotateCubeLeftOut pt-page-ontop", inClass = "pt-page-rotateCubeLeftIn";
                    break;
                case 59:
                    outClass = "pt-page-rotateCubeRightOut pt-page-ontop", inClass = "pt-page-rotateCubeRightIn";
                    break;
                case 60:
                    outClass = "pt-page-rotateCubeTopOut pt-page-ontop", inClass = "pt-page-rotateCubeTopIn";
                    break;
                case 61:
                    outClass = "pt-page-rotateCubeBottomOut pt-page-ontop", inClass = "pt-page-rotateCubeBottomIn";
                    break;
                case 62:
                    outClass = "pt-page-rotateCarouselLeftOut pt-page-ontop", inClass = "pt-page-rotateCarouselLeftIn";
                    break;
                case 63:
                    outClass = "pt-page-rotateCarouselRightOut pt-page-ontop", inClass = "pt-page-rotateCarouselRightIn";
                    break;
                case 64:
                    outClass = "pt-page-rotateCarouselTopOut pt-page-ontop", inClass = "pt-page-rotateCarouselTopIn";
                    break;
                case 65:
                    outClass = "pt-page-rotateCarouselBottomOut pt-page-ontop", inClass = "pt-page-rotateCarouselBottomIn";
                    break;
                case 66:
                    outClass = "pt-page-rotateSidesOut", inClass = "pt-page-rotateSidesIn pt-page-delay200";
                    break;
                case 67:
                    outClass = "pt-page-rotateSlideOut", inClass = "pt-page-rotateSlideIn"
            }
            return anim = {
                out: outClass,
                in: inClass
            }
        }
        var b = !1,
            w = !0,
            x = !1,
            C = {
                WebkitAnimation: "webkitAnimationEnd",
                OAnimation: "oAnimationEnd",
                msAnimation: "MSAnimationEnd",
                animation: "animationend"
            }[Modernizr.prefixed("animation")],
            _ = Modernizr.cssanimations;
        return {
            init: t,
            updateAnimcursor: a,
            updateNextAnimcursor: l
        }
    }(),
    function (t) {
        "use strict";
        t(window).load(function () {
            t("nav").addClass("activ"), t(".preloader").delay("200").fadeOut(200);
            var e = setTimeout(function () {
                    PageTransitions.init({
                        pages: t(".page-wrapper"),
                        menu: "ul.dl-menu",
                        animcursor: 55,
                        nextAnimcursor: !0
                    }), clearTimeout(e)
                }, 1500),
                i = document.querySelector(".blog-masonry");
            i && new Masonry(i, {
                itemSelector: ".item",
                columnWidth: i.querySelector(".item-sizer")
            })
        }), t(document).ready(function () {
            addMenuHeight(), t("#dl-menu").dlmenu(), document.querySelector(".home-bg") && t(".home-bg").backstretch("assets/img/bg/intro.jpg"), t(".rotate-text").owlCarousel({
                loop: !0,
                dots: !1,
                nav: !1,
                margin: 0,
                items: 1,
                autoplay: !0,
                autoplayTimeout: 4e3,
                autoplayHoverPause: !1,
                animateOut: "slideOutDown",
                animateIn: "zoomIn"
            }), t(".testimonials").owlCarousel({
                animateIn: "flipInX",
                items: 1,
                autoplay: !0,
                autoplayTimeout: 5e3,
                autoplayHoverPause: !0,
                smartSpeed: 450,
                loop: !0,
                dots: !1,
                nav: !0,
                navContainerClass: "testimonials-owl-nav"
            }), shuffle_init("#portfolio-filter"), t(".portfolio-hover > figure").each(function () {
                t(this).hoverdir({
                    hoverDelay: 75
                })
            }), contact_form_validate(), stellar_init(".content"), t("body").tooltip({
                selector: "[data-toggle=tooltip]"
            })
        }), t(window).resize(function () {
            addMenuHeight()
        })
    }(jQuery);
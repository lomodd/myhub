modulus = {},
modulus.envs = {
    product: "PRODUCTION",
    staging: "STAGING",
    develop: "DEVELOPMENT"
},
modulus.data = {},
modulus.models = {},
modulus.collections = {},
modulus.tpls = {},
modulus.views = {},
modulus.widgets = {},
modulus.util = {},
modulus.util.convert = {},
modulus.util.convert.toNumber = function(a, b) {
    b = b || "Not a Number";
    if (typeof a != "number") {
        a = parseFloat(a);
        if (isNaN(a)) throw b;
        return a
    }
    return a
},
modulus.util.convert.shorten = function(a, b, c, d) {
    b = b || 1e3,
    c = c || ["", "k", "m", "b", "t"],
    d = d;
    if (typeof d == "undefined" || d < 0) d = 2;
    a = modulus.util.convert.toNumber(a, "Value must be a number"),
    b = modulus.util.convert.toNumber(b, "Base must be a number"),
    d = modulus.util.convert.toNumber(d, "Precision must be a number");
    if (c instanceof Array != !0) throw "Units must be an array";
    var e = b,
    f = a,
    g = c[0],
    h = 1;
    while (a / e >= 1 && h < c.length) e *= b,
    f = (a / e * b).toFixed(d),
    g = c[h],
    h++;
    return d < 1 && (f = Math.floor(f)),
    {
        value: f,
        unit: g
    }
},
modulus.util.convert.bytes = function(a, b) {
    return modulus.util.convert.shorten(a, 1024, ["b", "kb", "mb", "gb", "tb"], b)
},
modulus.util.commaize = function(a) {
    return typeof a == "number" && (a = a.toString()),
    a = a.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    a
},
modulus.util.daySuffix = function(a) {
    if (a >= 11 && a <= 13) return "th";
    switch (a % 10) {
    case 1:
        return "st";
    case 2:
        return "nd";
    case 3:
        return "rd";
    default:
        return "th"
    }
},
modulus.util.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
modulus.util.generate = function(a, b) {
    var c = [],
    d,
    e,
    f,
    g;
    for (var h = 0; h < a; h++) {
        d = {};
        for (var i in b) typeof b[i] == "number" ? d[i] = Math.random() * b[i] : typeof b[i] == "string" ? b[i].match(/[0-9]+-[0-9]+/) ? (e = b[i].split("-"), e[0] = parseFloat(e[0]), e[1] = parseFloat(e[1]), d[i] = Math.random() * (e[1] - e[0]) + e[0]) : b[i].indexOf("datetime") === 0 ? (f = Date.now(), g = b[i].replace("datetime", ""), g.length === 0 ? g = 6e4 * h: g = parseInt(g) * 1e3 * h, d[i] = new Date(f + g)) : d[i] = b[i] : typeof b[i] == "object" && (d[i] = modulus.util.generate(1, b[i])[0]);
        c.push(d)
    }
    return c
},
modulus.util.isJSObject = /^\{.*\}$/,
modulus.util.getError = function(a) {
    var b = null;
    if (typeof a == "string" && a.match(modulus.util.isJSObject) !== null) try {
        b = JSON.parse(a)
    } catch(c) {
        b = null
    } else typeof data == "object" && (b = a);
    return b && b.errors ? {
        error: b.errors[0].id,
        message: b.errors[0].message
    }: null
},
modulus.models.Base = Backbone.Model.extend({
    initialize: function(a, b, c) {
        b === !1 && (this.validation = {}),
        c === undefined && (c = !0),
        this.onlyDefaults = !c
    },
    set: function(a, b) {
        if (this.onlyDefaults) if (typeof a == "string" && _.has(this.defaults, a)) Backbone.Model.prototype.set.call(this, a, b);
        else {
            var c = {},
            d = this.defaults;
            _.each(a,
            function(a, b) {
                _.has(d, b) && (c[b] = a)
            }),
            Backbone.Model.prototype.set.call(this, c, b)
        } else Backbone.Model.prototype.set.call(this, a, b);
        return this
    }
}),
modulus.util.preventPageScroll = function(a) {
    a = $(a),
    a.bind("mousewheel DOMMouseScroll", modulus.util.scroll)
},
modulus.util.scroll = function(a) {
    var b = 0;
    a.type == "mousewheel" ? b = a.originalEvent.wheelDelta * -1 : a.type == "DOMMouseScroll" && (b = 40 * a.originalEvent.detail),
    $(this).scrollTop(b * .5 + $(this).scrollTop()),
    a.preventDefault()
},
modulus.models.status = modulus.models.Base.extend({
    defaults: {
        name: "",
        text: "",
        shortName: "",
        step: -1
    }
}),
modulus.env = modulus.envs.product,
modulus.config = {
    socketio: {
        url: "https://modulus.io"
    }
},
modulus.Metrics = function() {
    var a = window.analytics || [];
    a.load = function(b) {
        var c = document.createElement("script");
        c.type = "text/javascript",
        c.async = !0,
        c.src = ("https:" === document.location.protocol ? "https://": "http://") + "d2dq2ahtl5zl1z.cloudfront.net/analytics.js/v1/" + b + "/analytics.min.js";
        var d = document.getElementsByTagName("script")[0];
        d.parentNode.insertBefore(c, d);
        var e = function(b) {
            return function() {
                a.push([b].concat(Array.prototype.slice.call(arguments, 0)))
            }
        },
        f = ["identify", "track", "trackLink", "trackForm", "trackClick", "trackSubmit", "pageview", "ab", "alias", "ready", "group"];
        for (var g = 0; g < f.length; g++) a[f[g]] = e(f[g])
    },
    modulus.env !== modulus.envs.product ? a.load("2ggj7ul4y9") : a.load("o4qya0rvi8"),
    window.analytics = a
},
_.extend(modulus.Metrics.prototype, Backbone.Events, {
    identify: function(a) {
        window.analytics.identify(a.get("id"), {
            email: a.get("email"),
            username: a.get("username"),
            name: a.get("firstName") + " " + a.get("lastName"),
            created: a.get("created_datetime"),
            status: a.get("status")
        })
    },
    record: function(a, b, c) {
        var d = a + ":" + b;
        if (typeof c != "undefined") return window.analytics.track(d, c);
        window.analytics.track(d)
    },
    register: function(a, b) {
        this.on(a, b, this)
    }
});
var _metrics = new modulus.Metrics;
_metrics.register("User:Created",
function(a, b) {
    a.password && delete a.password,
    a.passwordConfirm && delete a.passwordConfirm,
    this.record("User", "Site Signup", {
        user: a,
        url: b
    })
}),
_metrics.register("User:Login",
function(a) {
    this.record("User", "Login", {
        user: a
    })
}),
_metrics.register("Feedback:Email",
function(a) {
    this.record("Feedback", "Email Sent", {
        message: a
    })
}),
_metrics.register("Social:Tweet",
function(a, b) {
    this.record("Social", "Tweeted", {
        email: a,
        tweet: b
    })
}),
modulus.context = {},
modulus.log = function(a, b) {
    console.log(a + " : " + b)
},
Backbone.Validation.configure({
    forceUpdate: !0
}),
_.extend(Backbone.Validation.callbacks, {
    valid: function(a, b, c) {
        var d = a.fieldPrefix || "",
        e = a.$el.find("[name=" + d + b + "]").removeClass("invalid");
        a.$el.find("." + d + b + "-error").remove(),
        a.trigger("valid")
    },
    invalid: function(a, b, c, d) {
        var e = a.fieldPrefix || "",
        f = a.$el.find("[name=" + e + b + "]");
        f.addClass("invalid");
        if (a.$el.find("." + e + b + "-error:contains('" + c + "')").length === 0) {
            a.$el.find("." + e + b + "-error").remove();
            var g = $('<span class="' + e + b + '-error validation-error"><span class="left-arrow"></span>' + c + "</span>");
            g.bind("click", !1),
            f.before(g)
        }
        a.trigger("invalid", c)
    }
}),
_.extend(Backbone.Validation.validators, {
    fieldMatch: function(a, b, c, d) {
        var e = $(c);
        if (e.length === 1 && e.val() === a || e.length < 1) return;
        return b + " needs to be confirmed"
    },
    notOnModulus: function(a, b, c, d) {
        if (c) {
            a = a.toLowerCase();
            if (a === "onmodulus.net" || a.substr( - 14) === ".onmodulus.net" || a.indexOf("107.21.216.112") !== -1) return "Domain cannot be onmodulus.net"
        }
        return
    }
}),
modulus.views.render = function() {
    var a = this;
    this.template({},
    function(b, c) {
        a.$el.html(c)
    })
},
modulus.views.AutoUpdate = Backbone.View.extend({
    events: {},
    silentUpdates: !0,
    initialize: function(a) {
        this.model && (this.model.validation && (this.model.validation = _.clone(this.model.validation), Backbone.Validation.bind(this)), this.events["change input,textarea"] = "inputChanged", this.events["change select"] = "selectChanged"),
        this.placeholders && this.setupPlaceholders(),
        Backbone.View.prototype.initialize.call(this, a)
    },
    inputChanged: function(a) {
        var b = $(a.currentTarget),
        c = {};
        c[this.getAttributeName(b.attr("name"))] = b.val(),
        this.model.set(c, {
            silent: this.silentUpdates
        })
    },
    selectChanged: function(a) {
        var b = $(a.currentTarget),
        c = {};
        c[this.getAttributeName(b.attr("name"))] = $("option:selected", b).val(),
        this.model.set(c, {
            silent: this.silentUpdates
        })
    },
    getAttributeName: function(a) {
        if (!this.fieldPrefix) return a;
        if (a.indexOf(this.fieldPrefix) === 0) return a.substring(this.fieldPrefix.length)
    },
    setupPlaceholders: function() {
        var a;
        for (var b in this.placeholders) a = this.$el.find("[name=" + b + "]"),
        a.attr("placeholder", this.placeholders[b]),
        a.placeholder()
    },
    removeField: function(a) {
        delete this.model.attributes[a],
        this.$el.find("#" + a + "Field").remove(),
        this.model.validation && delete this.model.validation[a]
    },
    fillFields: function(a) {
        var b, c = this.fieldPrefix || "";
        for (var d in this.model.attributes) b = this.$el.find("[name=" + c + d + "]"),
        b.length > 0 && b.val(this.model.get(d));
        for (var e in a) b = this.$el.find("[name=" + c + e + "]"),
        b.length > 0 && b.val(this.model.get(a[e]))
    },
    render: modulus.views.render
}),
$(document).ready(function() {
    modulus.positionFooter = function(a) {
        var htmlOutHeight = $("html").outerHeight(!0),
        windowHeight = $(window).height(),
        footer = $("#footer"),
        footerHeight = footer.outerHeight(!0);
        footer.css("position") === "static" && (htmlOutHeight -= footerHeight),
        a = a || 0;
        htmlOutHeight + footerHeight + a < windowHeight ? footer.css("position", "absolute") : footer.css("position", "static");
        console.log(' window resizing....')
    },
    modulus.positionFooter(),
    $(window).resize(function() {
        modulus.positionFooter()
    })
}),
modulus.models.CreditCard = modulus.models.Base.extend({
    url: function() {
        return "/billing/" + this.get("userId")
    },
    defaults: {
        name: "",
        card: "",
        expirationMonth: "",
        expirationYear: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: ""
    },
    validation: {
        name: {
            required: !0
        },
        state: [{
            required: !1
        },
        {
            pattern: /^([a-zA-z]{2})/,
            msg: "State must be the 2 letter abbreviation"
        }],
        zip: [{
            required: !1
        },
        {
            pattern: /^([0-9]{5})(-[0-9]{4})?$/,
            msg: "Invalid zip"
        }],
        card: [{
            required: !0,
            msg: "Please provide a card number"
        },
        {
            pattern: /^[0-9]+$/,
            msg: "Invalid card number"
        }],
        expirationMonth: [{
            required: !0,
            msg: "Please provide an expiration month"
        },
        {
            range: [1, 12],
            msg: "invalid expiration month"
        }],
        expirationYear: [{
            required: !0,
            msg: "Please provide an expiration year"
        },
        {
            min: (new Date).getFullYear(),
            msg: "Year cannot be in the past"
        }]
    },
    getBillingUser: function() {
        return {
            billing: {
                cc_name: this.attributes.name,
                cc_num: this.attributes.card,
                exp_month: this.attributes.expirationMonth,
                exp_year: this.attributes.expirationYear
            },
            address: {
                line_1: this.attributes.address1,
                line_2: this.attributes.address2,
                city: this.attributes.city,
                state: this.attributes.state,
                zip: this.attributes.zip
            }
        }
    },
    setBillingUser: function(a) {
        if (!a.billing || !a.address) return;
        this.set({
            name: a.billing.cc_name,
            card: a.billing.cc_num,
            expirationMonth: a.billing.exp_month,
            expirationYear: a.billing.exp_year,
            address1: a.address.line_1,
            address2: a.address.line_2,
            city: a.address.city,
            state: a.address.state,
            zip: a.address.zip
        },
        {
            silent: !0
        })
    }
}),
modulus.models.DBUser = modulus.models.Base.extend({
    url: function() {
        var a = "/database/" + this.get("database") + "/user";
        return this.id && (a += "/" + this.id),
        a
    },
    defaults: {
        prevId: "",
        userId: 0,
        database: 0,
        username: "",
        password: "",
        isReadOnly: !0
    },
    validation: {
        username: {
            required: !0,
            msg: "Please provide a username"
        },
        password: {
            required: !0,
            msg: "Please provide a password"
        }
    }
}),
modulus.models.Database = modulus.models.Base.extend({
    url: function() {
        var a = "/database";
        return this.id && (a += "/" + this.id),
        a
    },
    defaults: {
        userId: 0,
        name: "",
        created_datetime: new Date,
        uri: "",
        cli: "",
        envar: "",
        users: [],
        collections: [],
        stats: {
            documents: 0,
            size: 0
        }
    },
    validation: {
        name: {
            required: !0,
            msg: "Please provide a name"
        }
    },
    sanitize: function() {
        var a = this.get("users");
        for (var b = 0; b < a.length; b++) for (var c in a[b]) c !== "username" && c !== "isReadOnly" && c !== "id" && delete a[b][c];
        this.set({
            users: a
        })
    },
    addUser: function(a) {
        var b = this.get("users");
        b.push(a),
        this.set({
            users: b
        })
    },
    getUser: function(a) {
        var b = _.find(this.get("users"),
        function(b) {
            return b.id === a ? !0 : !1
        },
        this);
        return b.database = this.id,
        b
    },
    getUsernames: function() {
        var a = this.get("users"),
        b = [];
        for (var c in a) b.push(a[c].username);
        return b
    },
    updateUser: function(a) {
        var b = this.get("users");
        for (var c = 0; c < b.length; c++) if (b[c].id === a.prevId) {
            b[c] = a;
            break
        }
        this.set({
            users: b
        })
    },
    removeUser: function(a) {
        var b = _.filter(this.get("users"),
        function(b) {
            return b.id === a ? !1 : !0
        },
        this);
        this.set({
            users: b
        })
    }
}),
modulus.collections.Database = Backbone.Collection.extend({
    model: modulus.models.Database
}),
modulus.models.Domain = modulus.models.Base.extend({
    defaults: {
        domain: "",
        isPrimary: !1
    },
    validation: {
        domain: {
            required: !0,
            pattern: /^[^"]+\.[^"]+$/,
            notOnModulus: !0
        }
    },
    empty: !1,
    initialize: function() {
        var a = this;
        this.on("change",
        function() {
            a.get("domain").length < 1 && (this.empty = !0)
        })
    }
}),
modulus.collections.Domain = Backbone.Collection.extend({
    model: modulus.models.Domain,
    initialize: function() {
        this.on("remove",
        function() {
            this.hasChanged = !0
        },
        this)
    },
    add: function(a, b) {
        if (a instanceof Array && a.length === 0) return;
        Backbone.Collection.prototype.add.call(this, a, b),
        this.hasChanged = !0;
        if (a instanceof Array) for (var c = 0; c < a.length; c++) this.models[this.models.length - (1 + c)].on("change", this.changed, this);
        else this.models[this.models.length - 1].on("change", this.changed, this)
    },
    changed: function() {
        this.hasChanged = !0
    },
    save: function() {
        if (this.hasChanged === !0) {
            var a = !0,
            b = [];
            for (var c = 0; c < this.models.length; c++) {
                this.models[c].validate(this.models[c].attributes);
                if (!this.models[c].isValid()) {
                    a = !1;
                    break
                }
                if (_.indexOf(b, this.models[c].get("domain")) >= 0) {
                    a = !1,
                    this.models[c].trigger("duplicate");
                    break
                }
                b.push(this.models[c].get("domain"))
            }
            if (a) {
                var d = this;
                $.ajax({
                    type: "POST",
                    url: this.url,
                    data: {
                        urls: JSON.stringify(this.toJSON())
                    }
                }).done(function(a) {
                    a.length > 0 && (a = JSON.parse(a)),
                    d.hasChanged = !1,
                    d.trigger("save", a)
                })
            }
        }
    }
}),
modulus.models.Entry = modulus.models.Base.extend({
    defaults: {
        id: 0,
        index: -1,
        path: "",
        title: "",
        keywords: "",
        description: "",
        author: "",
        created: "",
        lastEdit: "",
        summary: "",
        body: "",
        html: ""
    },
    parse: function(a) {
        a = a.replace(/-{3,}config-{3,}/i, "");
        var b = a.split(/-{3,}post-{3,}/i),
        c = "",
        d = "";
        b.length === 1 ? (this.set({
            title: "No Title",
            description: "Modulus Codex entry"
        }), c = b[0]) : b.length === 2 && (this.set(JSON.parse(b[0])), c = b[1]),
        c = c.split(/-{3,}summary-{3,}/i),
        c.length === 2 ? this.set({
            summary: c[0],
            body: c[1]
        }) : this.set({
            body: c[0]
        })
    }
}),
modulus.models.Forgot = modulus.models.Base.extend({
    defaults: {
        email: ""
    },
    validation: {
        email: [{
            required: !0,
            msg: "Email is required."
        },
        {
            pattern: "email",
            msg: "Invalid email format."
        }]
    }
}),
modulus.models.Log = modulus.models.Base.extend({
    url: function() {
        return "/project/" + this.id + "/log"
    },
    defaults: {
        data: null
    }
}),
modulus.models.Login = modulus.models.Base.extend({
    urlRoot: "/login",
    defaults: {
        login: "",
        password: ""
    },
    validation: {
        login: {
            required: !0,
            msg: "Login is required."
        },
        password: {
            required: !0,
            msg: "Password is required."
        }
    }
}),
modulus.models.Message = modulus.models.Base.extend({
    urlRoot: "/contact",
    defaults: {
        email: "",
        message: ""
    },
    validation: {
        email: {
            required: !1,
            pattern: "email",
            msg: "Invalid email format."
        },
        message: {
            required: !0,
            msg: "Please provide a message."
        }
    }
}),
modulus.models.WebHook = modulus.models.Base.extend({
    defaults: {
        id: "",
        creator: "",
        source: "project",
        sourceId: "",
        type: "all",
        uri: ""
    },
    validation: {
        uri: {
            required: !0,
            pattern: /^[^"]+\.[^"]+$/
        }
    },
    created: !0,
    empty: !1,
    updated: !1,
    initialize: function() {
        this.on("change", this.onChange, this)
    },
    onChange: function() {
        this.updated = !0,
        this.get("uri").length < 1 && (this.empty = !0)
    }
}),
modulus.models.EmailNotification = modulus.models.WebHook.extend({
    defaults: {
        id: "",
        creator: "",
        source: "project",
        sourceId: "",
        type: "all",
        email: ""
    },
    validation: {
        email: {
            required: !0,
            pattern: "email"
        }
    },
    onChange: function() {
        this.updated = !0,
        this.get("email").length < 1 && (this.empty = !0)
    }
}),
modulus.collections.WebHook = Backbone.Collection.extend({
    model: modulus.models.WebHook,
    urlRoot: "/hook",
    removed: [],
    saving: !1,
    count: 0,
    saves: 0,
    project: "",
    mainAttribute: "uri",
    initialize: function() {
        this.on("remove",
        function() {
            this.hasChanged = !0
        },
        this)
    },
    add: function(a, b) {
        if (a instanceof Array && a.length === 0) return;
        Backbone.Collection.prototype.add.call(this, a, b),
        this.hasChanged = !0;
        if (a instanceof Array) for (var c = 0; c < a.length; c++) this.models[this.models.length - (1 + c)].set({
            sourceId: this.project
        },
        {
            silent: !0
        }),
        this.models[this.models.length - (1 + c)].get("id").length > 0 && (this.models[this.models.length - (1 + c)].created = !1);
        else this.models[this.models.length - 1].set({
            sourceId: this.project
        },
        {
            silent: !0
        }),
        this.models[this.models.length - 1].get("id").length > 0 && (this.models[this.models.length - 1].created = !1)
    },
    remove: function(a, b) {
        if (a instanceof Array && a.length === 0) return;
        a.created || this.removed.push(a.get("id")),
        Backbone.Collection.prototype.remove.call(this, a, b)
    },
    send: function(a, b, c) {
        this.count++;
        var d = {
            type: b,
            url: a
        };
        c && (d.data = c.toJSON());
        var e = this;
        $.ajax(d).done(function(a) {
            a.length > 0 && (a = JSON.parse(a));
            if (a.id) {
                var b = c.id;
                c.set(a, {
                    silent: !0
                }),
                c.id = b
            }
            c && (c.created === !0 && c.on("change", c.onChange, c), c.created = !1, c.updated = !1),
            e.saved(a)
        }).fail(function() {
            e.error("Internal Server Error.")
        })
    },
    saved: function(a) {
        this.saves++,
        this.saves === this.count && (this.removed = [], this.saving = !1, this.trigger("save", ""))
    },
    save: function() {
        if (this.saving) return;
        this.saves = this.count = 0;
        for (var a = 0; a < this.models.length; a++) {
            this.models[a].validate();
            if (!this.models[a].isValid()) return;
            for (var b = 0; b < this.models.length; b++) if (this.models[a].id !== this.models[b].id && this.models[a].get(this.mainAttribute) === this.models[b].get(this.mainAttribute) && this.models[a].get("type") === this.models[b].get("type")) {
                this.models[a].trigger("duplicate");
                return
            }
        }
        this.saving = !0;
        for (var c = 0; c < this.removed.length; c++) this.send(this.urlRoot + "/" + this.removed[c], "DELETE");
        for (var d = 0; d < this.models.length; d++) this.models[d].created ? this.send(this.urlRoot, "POST", this.models[d]) : this.models[d].updated && this.send(this.urlRoot + "/" + this.models[d].get("id"), "PUT", this.models[d]);
        this.saves === 0 && this.count === 0 && (this.saving = !1)
    },
    error: function(a) {
        this.saving = !1,
        this.trigger("error", a),
        this.trigger("save", {
            error: a
        })
    }
}),
modulus.collections.EmailNotification = modulus.collections.WebHook.extend({
    model: modulus.models.EmailNotification,
    urlRoot: "/notification/email",
    mainAttribute: "email"
}),
modulus.models.Project = modulus.models.Base.extend({
    urlRoot: "/project",
    validation: {
        name: [{
            required: !0,
            msg: "All projects need a name."
        },
        {
            maxLength: 50,
            msg: "Name is too long."
        }]
    },
    defaults: {
        name: "",
        domain: "",
        modulusDomain: "",
        created_date: "",
        creator: 0,
        owner: 0,
        status: "nonexistent",
        fileList: [],
        puCount: 0,
        size: 0,
        envVars: [],
        customDomains: [],
        customSSL: [],
        autoSSLRedirect: !1,
        files: {
            deploy_datetime: "",
            fileList: [],
            fileLocation: "",
            size: ""
        }
    },
    statuses: [(new modulus.models.status({
        name: "UPLOADING",
        text: "Uploading",
        shortName: "up",
        step: 1
    })).toJSON(), (new modulus.models.status({
        name: "DEPLOYING",
        text: "Deploying",
        shortName: "dep",
        step: 2
    })).toJSON(), (new modulus.models.status({
        name: "RUNNING",
        text: "Running",
        shortName: "run",
        isProgress: !1,
        step: 3
    })).toJSON(), (new modulus.models.status({
        name: "NONE",
        text: "None",
        shortName: "none",
        isProgress: !1,
        step: 0
    })).toJSON(), (new modulus.models.status({
        name: "RESTARTING",
        text: "Restarting",
        shortName: "restart",
        step: 3
    })).toJSON(), (new modulus.models.status({
        name: "STOPPING",
        text: "Stopping",
        shortName: "stopped",
        step: 3
    })).toJSON(), (new modulus.models.status({
        name: "STOPPED",
        text: "Stopped",
        shortName: "stopped",
        step: 3
    })).toJSON(), (new modulus.models.status({
        name: "SCALING",
        text: "Scaling",
        shortName: "scaling",
        step: 3
    })).toJSON()],
    initialize: function(a, b, c) {
        this.on("change:status", this.setStatus, this),
        modulus.models.Base.prototype.initialize.call(this, a, b, c)
    },
    setStatus: function() {
        for (var a in this.statuses) this.statuses[a].name === this.get("status") && this.set({
            status: this.statuses[a]
        },
        {
            silent: !0
        })
    },
    sync: function(a, b, c) {
        a.toLowerCase() === "read" && (c.url = this.urlRoot + "/" + this.get("id") + "/json"),
        Backbone.sync(a, b, c)
    }
}),
modulus.collections.Project = Backbone.Collection.extend({
    model: modulus.models.Project
}),
modulus.models.SSL = modulus.models.Base.extend({
    url: function() {
        var a = "/project/" + this.get("projectId") + "/ssl";
        return this.id && (a += "/" + this.id),
        a
    },
    validation: {
        key: [{
            required: !0,
            msg: "Please provide a Private Key."
        }],
        crt: [{
            required: !0,
            msg: "Please provide a certification."
        }]
    },
    defaults: {
        id: null,
        key: "",
        crt: "",
        ca: "",
        domain: "",
        projectId: null
    }
}),
modulus.collections.SSL = Backbone.Collection.extend({
    model: modulus.models.SSL
}),
modulus.models.Stats = modulus.models.Base.extend({
    url: function() {
        var a = this.get("stat"),
        b = "type=" + this.get("type"),
        c = "resolution=" + this.get("resolution"),
        d = "duration=" + this.get("duration");
        return "/" + this.get("objectType") + "/" + this.id + "/stats/" + this.get("stat") + "?" + b + "&" + c + "&" + d
    },
    defaults: {
        objectType: "project",
        rawData: [],
        data: [],
        stat: "",
        label: "",
        visual: {},
        type: "average",
        resolution: 60,
        duration: 3600,
        tooltip: null,
        ref: !1,
        xMin: 0,
        xMax: 1
    },
    parse: function(a) {
        if (!a || !a.rawData) return;
        this.set("rawData", a.rawData);
        var b, c = [],
        d = this.get("rawData");
        this.set("xMin", d[0].time),
        this.set("xMax", d[d.length - 1].time);
        for (var e = 0; e < d.length; e++) d[e].value !== null && (b = {
            time: d[e].time,
            value: d[e].value
        },
        c.push(b));
        this.set("data", c)
    }
}),
modulus.collections.Stats = Backbone.Collection.extend({
    model: modulus.models.Stats,
    add: function(a) {
        this.models.push(a)
    },
    update: function() {
        this.fetch()
    },
    fetch: function() {
        var a = 0,
        b = this;
        for (var c = 0; c < this.models.length; c++) this.models[c].fetch({
            success: function(c, d) {
                typeof d != "object" && (d = JSON.parse(d)),
                a++,
                b.models.length === a && b.loaded()
            }
        })
    },
    loaded: function() {
        this.trigger("loaded")
    }
}),
modulus.models.RouteStats = modulus.models.Stats.extend({
    url: function() {
        var a = modulus.models.Stats.prototype.url.call(this);
        return a + "&route=" + this.get("route")
    },
    initialize: function(a, b, c) {
        this.defaults.route = "all",
        this.set("route", "all"),
        modulus.models.Base.prototype.initialize.call(this, a, b, c)
    },
    parse: function(a) {
        if (!a || !a.rawData) return;
        this.set("rawData", a.rawData)
    }
}),
modulus.models.User = modulus.models.Base.extend({
    urlRoot: "/user",
    defaults: {
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordCurrent: ""
    },
    validation: {
        username: [{
            required: !0,
            msg: "Username is required."
        },
        {
            maxLength: 50,
            pattern: /^[a-zA-Z0-9()<>\[\]:,;@\"!#$%&'*+\-\/=?\^_`{}|~?\.]+$/,
            msg: "Invalid username format."
        }],
        email: [{
            required: !0,
            msg: "Email is required."
        },
        {
            pattern: "email",
            msg: "Invalid email format."
        },
        {
            fieldMatch: "[name=emailConfirm]",
            msg: "Please confirm email."
        }],
        passwordCurrent: {
            required: !0,
            msg: "Please enter your current password."
        },
        password: [{
            required: !0,
            msg: "Password is required."
        },
        {
            fieldMatch: "[name=passwordConfirm]",
            msg: "Please confirm password."
        }]
    }
}),
modulus.models.EnVar = modulus.models.Base.extend({
    defaults: {
        name: "",
        value: ""
    },
    validation: {
        name: {
            required: !0,
            pattern: /^[a-zA-Z_]+[a-zA-Z0-9_]+[^'"]*$/,
            msg: "Variable names cannot start with numbers, can only contain alpha-numeric characters and underscores, and cannot contain quotes."
        },
        value: {
            required: !1,
            pattern: /^[^']*$/,
            msg: "Variable value cannot contain single quotes"
        }
    },
    initialize: function() {
        this.empty = !1;
        var a = this;
        this.on("change",
        function() {
            a.get("name").length < 1 && a.get("value").length < 1 && (this.empty = !0)
        })
    }
}),
modulus.collections.EnVar = Backbone.Collection.extend({
    model: modulus.models.EnVar,
    hasChanged: !1,
    initialize: function() {
        this.on("add",
        function() {
            this.hasChanged = !0
        },
        this),
        this.on("remove",
        function() {
            this.hasChanged = !0
        },
        this)
    },
    add: function(a, b) {
        if (a instanceof Array && a.length === 0) return;
        Backbone.Collection.prototype.add.call(this, a, b),
        this.hasChanged = !0;
        if (a instanceof Array) for (var c = 0; c < a.length; c++) this.models[this.models.length - (1 + c)].on("change", this.changed, this);
        else this.models[this.models.length - 1].on("change", this.changed, this)
    },
    changed: function() {
        this.hasChanged = !0
    },
    save: function() {
        if (this.hasChanged === !0) {
            var a = !0,
            b = [];
            for (var c = 0; c < this.models.length; c++) {
                this.models[c].validate(this.models[c].attributes);
                if (!this.models[c].isValid()) {
                    a = !1;
                    break
                }
                if (_.indexOf(b, this.models[c].get("name")) >= 0) {
                    a = !1,
                    this.models[c].trigger("duplicate");
                    break
                }
                b.push(this.models[c].get("name"))
            }
            if (a) {
                var d = this;
                $.ajax({
                    type: "POST",
                    url: this.url,
                    data: this.toJSON()
                }).done(function(a) {
                    a.length > 0 && (a = JSON.parse(a)),
                    d.hasChanged = !1,
                    d.trigger("save", a)
                })
            }
        }
    }
}),
modulus.tpls.ContactThankYou = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<div", ' class="thankyou"', ">"),
        __.line = 2,
        __.col = 3,
        __.push("<span", ">"),
        __.line = 3,
        __.col = 5,
        __.push("Thank you for contacting us."),
        __.line = 4,
        __.col = 5,
        __.push("<br", "/>"),
        __.line = 5,
        __.col = 5,
        __.push("Your message has been received.", "</span>", "</div>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.ContactUs = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<form", ' class="form"', ">"),
        __.line = 2,
        __.col = 3,
        __.push("<input", ' type="text"', ' name="contactemail"', "/>"),
        __.line = 3,
        __.col = 3,
        __.push("<textarea", ' name="contactmessage"', ">", "</textarea>"),
        __.line = 4,
        __.col = 3,
        __.push("<div", ' class="submitDiv"', ">"),
        __.line = 5,
        __.col = 5,
        __.push("<input", ' type="submit"', ' name="submitContact"', ' value="Contact Us!"', ' class="wow"', "/>", "</div>", "</form>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.CreateDB = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<h3", ' class="popupTitle"', ">", "Create Database", "</h3>"),
        __.line = 2,
        __.col = 1,
        __.push("<form", ' class="form"', ">"),
        __.line = 3,
        __.col = 3,
        __.push("<span", ">"),
        __.line = 4,
        __.col = 5,
        __.push("Database", "</span>"),
        __.line = 5,
        __.col = 3,
        __.push("<div", ' class="field"', ">"),
        __.line = 6,
        __.col = 5,
        __.push("<input", ' name="dbName"', ' type="text"', "/>", "</div>"),
        __.line = 7,
        __.col = 3,
        __.push("<span", ">"),
        __.line = 8,
        __.col = 5,
        __.push("Default User", "</span>"),
        __.line = 9,
        __.col = 3,
        __.push("<div", ' class="field"', ">"),
        __.line = 10,
        __.col = 5,
        __.push("<input", ' name="dbUsername"', ' type="text"', "/>", "</div>"),
        __.line = 11,
        __.col = 3,
        __.push("<div", ' class="field"', ">"),
        __.line = 12,
        __.col = 5,
        __.push("<input", ' name="dbPassword"', ' type="password"', "/>", "</div>"),
        __.line = 13,
        __.col = 3,
        __.push("<p", ">"),
        __.line = 14,
        __.col = 5,
        __.push("You have the option to create a user now, so you can get"),
        __.line = 15,
        __.col = 5,
        __.push("\nto using your Database right away. This user will be created"),
        __.line = 16,
        __.col = 5,
        __.push("\nwith Read/Write access and will be added to your newly created"),
        __.line = 17,
        __.col = 5,
        __.push("\nDatabase during the creation process.", "</p>"),
        __.line = 18,
        __.col = 3,
        __.push("<input", ' name="dbCreate"', ' type="submit"', ' value="Create"', ' class="wow"', "/>", "</form>"),
        __.line = 19,
        __.col = 1,
        __.push("<div", ' class="complete hidden"', ">"),
        __.line = 20,
        __.col = 3,
        __.push("Your database has been created and is ready for use."),
        __.line = 21,
        __.col = 3,
        __.push("<br", "/>"),
        __.line = 22,
        __.col = 3,
        __.push("<div", ' class="connect"', ">"),
        __.line = 23,
        __.col = 5,
        __.push("<h5", ">", "Mongo URI", "</h5>"),
        __.line = 24,
        __.col = 5,
        __.push("<div", ' class="info"', ">"),
        __.line = 25,
        __.col = 7,
        __.push("mongodb://&lt;user&gt;:&lt;pass&gt;@mongo.onmodulus.net:27017/"),
        __.line = 26,
        __.col = 7,
        __.push("<span", ' class="dbId"', ">", "000000", "</span>", "</div>"),
        __.line = 27,
        __.col = 5,
        __.push("<h5", ">", "Mongo Console", "</h5>"),
        __.line = 28,
        __.col = 5,
        __.push("<div", ' class="info"', ">"),
        __.line = 29,
        __.col = 7,
        __.push("mongo mongo.onmodulus.net:27017/"),
        __.line = 30,
        __.col = 7,
        __.push("<span", ' class="dbId"', ">", "000000", "</span>"),
        __.line = 31,
        __.col = 7,
        __.push(" -u &lt;user&gt; -p &lt;pass&gt;", "</div>", "</div>"),
        __.line = 32,
        __.col = 3,
        __.push(" You can view stats, manage users, export your data, and other tasks through the&nbsp;"),
        __.line = 33,
        __.col = 3,
        __.push("<a", ' href="#"', ' class="greenLink portalLink"', ">", "Database Dashboard.", "</a>", "</div>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.Database = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) {
            __.line = 1,
            __.col = 1,
            __.push("<tr", ' class="summary"'),
            __.r.attrs({
                id: {
                    v: database.id,
                    e: 1
                }
            },
            __),
            __.push(">"),
            __.line = 2,
            __.col = 3,
            __.push("<td", ' class="first"', ">"),
            __.line = 3,
            __.col = 5,
            __.push("<a", ' href="#"', ' class="greenLink showInfo"', ">", __.r.escape(database.name), "</a>", "</td>"),
            __.line = 4,
            __.col = 3,
            __.push("<td", ' class="docs"', ">", __.r.escape(database.stats.objects), "</td>"),
            __.line = 5,
            __.col = 3,
            __.push("<td", ' class="size"', ">", __.r.escape(database.stats.storageSize), "</td>"),
            __.line = 6,
            __.col = 3,
            __.push("<td", ">"),
            __.line = 7,
            __.col = 5,
            __.push("<a", ' href="#"', ' title="Edit Database Info"', ' class="editPen editDB"', ">", "</a>"),
            __.line = 8,
            __.col = 5,
            __.push("<a", ' href="#"', ' title="Export Data"', ' class="exportDisk exportDB"', ">", "</a>"),
            __.line = 9,
            __.col = 5,
            __.push("<a", ' href="#"', ' title="Delete Database"', ' class="removeCan deleteDB"', ">", "</a>", "</td>", "</tr>"),
            __.line = 10,
            __.col = 1,
            __.push("<tr", ' class="information hidden"', ">"),
            __.line = 11,
            __.col = 3,
            __.push("<td", ' colspan="4"', ">"),
            __.line = 12,
            __.col = 5,
            __.push("<div", ' class="static"', ">"),
            __.line = 13,
            __.col = 7,
            __.push("<h5", ">", "Mongo URI", "</h5>"),
            __.line = 14,
            __.col = 7,
            __.push("<div", ' class="info"', ">"),
            __.line = 15,
            __.col = 9,
            __.push("mongodb://&lt;user&gt;:&lt;pass&gt;@"),
            __.line = 16,
            __.col = 9,
            __.push(__.r.escape(database.uri), "</div>"),
            __.line = 17,
            __.col = 7,
            __.push("<h5", ">", "Mongo Console", "</h5>"),
            __.line = 18,
            __.col = 7,
            __.push("<div", ' class="info"', ">"),
            __.line = 19,
            __.col = 9,
            __.push("mongo "),
            __.line = 20,
            __.col = 9,
            __.push(__.r.escape(database.uri)),
            __.line = 21,
            __.col = 9,
            __.push("&nbsp;-u &lt;user&gt; -p &lt;pass&gt;", "</div>"),
            __.line = 22,
            __.col = 7,
            __.push("<h5", ' class="hidden"', ">", "Environment Variable", "</h5>"),
            __.line = 23,
            __.col = 7,
            __.push("<div", ' class="info envar hidden"', ">", __.r.escape(database.envar), "</div>", "</div>"),
            __.line = 24,
            __.col = 5,
            __.push("<table", ' class="users"', ">"),
            __.line = 25,
            __.col = 7,
            __.push("<thead", ' class="thead"', ">"),
            __.line = 26,
            __.col = 9,
            __.push("<tr", ">"),
            __.line = 27,
            __.col = 11,
            __.push("<th", ' class="first"', ">", "Username", "</th>"),
            __.line = 28,
            __.col = 11,
            __.push("<th", ">", "Rights", "</th>"),
            __.line = 29,
            __.col = 11,
            __.push("<th", ' class="actions"', ">"),
            __.line = 30,
            __.col = 13,
            __.push("<a", ' href="#"', ' title="Add User"', ' class="addPlus addDBUser"', ">", "</a>", "</th>", "</tr>", "</thead>"),
            __.line = 31,
            __.col = 7,
            __.push("<tbody", ' class="body"', ">"),
            __.line = 32,
            __.col = 9,
            __.push("<!--", "Any changes the to user template must be reflected info", "-->"),
            __.line = 33,
            __.col = 9,
            __.push("<!--", "templates/dbUser.blade as well", "-->"),
            __.line = 34,
            __.col = 9;
            for (var u = 0; u < database.users.length; u++) __.line = 35,
            __.col = 11,
            __.push("<tr"),
            __.r.attrs({
                userid: {
                    v: database.users[u].id,
                    e: 1
                }
            },
            __),
            __.push(">"),
            __.line = 36,
            __.col = 13,
            __.push("<td", ' class="first"', ">", __.r.escape(database.users[u].username), "</td>"),
            __.line = 37,
            __.col = 13,
            __.push("<td", ">"),
            __.line = 38,
            __.col = 15,
            database.users[u].isReadOnly ? (__.line = 39, __.col = 17, __.push("R")) : (__.line = 41, __.col = 17, __.push("R + W")),
            __.push("</td>"),
            __.line = 42,
            __.col = 13,
            __.push("<td", ' class="actions"', ">"),
            __.line = 43,
            __.col = 15,
            __.push("<a", ' href="#"', ' class="editPen editDBUser"'),
            __.r.attrs({
                title: {
                    v: "Edit " + database.users[u].username,
                    e: 1
                }
            },
            __),
            __.push(">", "</a>"),
            __.line = 44,
            __.col = 15,
            __.push("<a", ' href="#"', ' class="removeCan deleteDBUser"'),
            __.r.attrs({
                title: {
                    v: "Delete " + database.users[u].username,
                    e: 1
                }
            },
            __),
            __.push(">", "</a>", "</td>", "</tr>");
            __.push("</tbody>"),
            __.line = 45,
            __.col = 7,
            __.push("<tfoot", ">"),
            __.line = 46,
            __.col = 9,
            __.push("<tr", ">"),
            __.line = 47,
            __.col = 11,
            __.push("<td"),
            __.r.attrs({
                colspan: {
                    v: 3,
                    e: 1
                }
            },
            __),
            __.push(">", "</td>", "</tr>", "</tfoot>", "</table>", "</td>", "</tr>")
        }
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.DatabaseDelete = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<h3", ' class="popupTitle"', ">", "Confirm Database Deletion", "</h3>"),
        __.line = 2,
        __.col = 1,
        __.push("<form", ' class="form"', ">"),
        __.line = 3,
        __.col = 3,
        __.push("<p", ">"),
        __.line = 4,
        __.col = 5,
        __.push("You are about to delete&nbsp;&quot;"),
        __.line = 5,
        __.col = 5,
        __.push("<span", ' class="dbname"', ">", "name here", "</span>"),
        __.line = 6,
        __.col = 5,
        __.push("&quot;, which has&nbsp;"),
        __.line = 7,
        __.col = 5,
        __.push("<span", ' class="docs"', ">", "0", "</span>"),
        __.line = 8,
        __.col = 5,
        __.push("&nbsp;docs. This action cannot be undone. All data will be deleted. Please type &quot;delete&quot; to continue.", "</p>"),
        __.line = 9,
        __.col = 3,
        __.push("<input", ' name="confirmation"', ' type="text"', ' class="text"', "/>"),
        __.line = 10,
        __.col = 3,
        __.push("<input", ' id="confirm"', ' type="submit"', ' value="Confirm"', ' class="create-btn wow"', "/>", "</form>"),
        __.line = 11,
        __.col = 1,
        __.push("<input", ' type="button"', ' value="CLOSE"', ' class="close"', "/>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.DatabaseItem = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<div", ' class="info"', ">"),
        __.line = 2,
        __.col = 3,
        __.push("<div", ' class="header"', ">"),
        __.line = 3,
        __.col = 5,
        __.push("<h3", ">"),
        __.line = 4,
        __.col = 7,
        __.push("<a", ' class="item-name"'),
        __.r.attrs({
            href: {
                v: "/database/" + id,
                e: 1
            }
        },
        __),
        __.push(">", __.r.escape("" + ((__.z = name) == null ? "": __.z) + ""), "</a>", "</h3>", "</div>"),
        __.line = 5,
        __.col = 3,
        __.push("<div", ' class="deploy-date"', ">"),
        __.line = 6,
        __.col = 5,
        __.push(__.r.escape("Created on " + ((__.z = (new Date(created_datetime)).toDateString()) == null ? "": __.z) + ""), "</div>"),
        __.line = 7,
        __.col = 3,
        __.push("<div", ' class="stats"', ">"),
        __.line = 8,
        __.col = 5,
        __.push("<div", ' class="nums"', ">"),
        __.line = 9,
        __.col = 7,
        __.push("<h4", ">"),
        __.line = 10,
        __.col = 9,
        __.push("<span", ">", __.r.escape("" + ((__.z = stats.objects) == null ? "": __.z) + ""), "</span>"),
        __.line = 11,
        __.col = 9,
        __.push(" Objects", "</h4>"),
        __.line = 12,
        __.col = 7,
        __.push("<h4", ">"),
        __.line = 13,
        __.col = 9,
        __.push("<span", ">", __.r.escape(stats.storageSize), "</span>"),
        __.line = 14,
        __.col = 9,
        __.push(" Storage Size", "</h4>", "</div>"),
        __.line = 15,
        __.col = 5,
        __.push("<div", ' class="billing"', ">"),
        __.line = 16,
        __.col = 7,
        __.push("<span", ">", "Accrued to Date", "</span>"),
        __.line = 17,
        __.col = 7,
        __.push("<h5", ">", "$"),
        __.line = 18,
        __.col = 9,
        __.push(__.r.escape(stats.cost), "</h5>"),
        __.line = 19,
        __.col = 7,
        __.push("<span", ' class="small"', ">", "*Credit Not Applied", "</span>", "</div>", "</div>", "</div>"),
        __.line = 20,
        __.col = 1,
        __.push("<div", ' class="graph"', ">"),
        __.line = 21,
        __.col = 3,
        __.push("<div"),
        __.r.attrs({
            "class": {
                v: "database-response-graph-" + id,
                e: 1
            }
        },
        __),
        __.push(">", "</div>"),
        __.line = 22,
        __.col = 3,
        __.push('<script type="text/javascript">\nsetTimeout(function() {\n    var el = ".database-response-graph-' + ((__.z = id) == null ? "": __.z) + '";\n    var tooltipDateFormatter = d3.time.format("%I:%M:%S %p");\n    var msTooltipText = function(d) {\n        if (!d) {\n            return "";\n        }\n        var date = new Date(d.time);\n        return d.value.toFixed(1) + " ms @ " + tooltipDateFormatter(date);\n    };\n    var stats = [];\n    stat = new modulus.models.Stats({\n        objectType: "database",\n        label: "response",\n        stat: "*",\n        id: "' + ((__.z = id) == null ? "": __.z) + '",\n        units: "ms",\n        ref: true\n    });\n    var color = "#43B9A3";\n    if ($(el).parents("li.even").length > 0) {\n        color = "#7B80A8";\n    }\n    stat.set("visual", {\n        name: "bar",\n        color: color,\n        hoverEnabled: true,\n        hoverColor: "rgb(255,255,255)",\n        barWidth: 2\n    });\n    stat.set("tooltip", {\n        text: msTooltipText\n    });\n    stats.push(stat);\n    var databaseResponseGraph = new modulus.widgets.Graph({\n        el: el,\n        model: stats\n    });\n    databaseResponseGraph.height = 190;\n    databaseResponseGraph.includeLegend = false;\n    databaseResponseGraph.update();\n}, 1e3);\n</script>', "</div>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.DbUser = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) {
            __.line = 1,
            __.col = 1;
            for (var u = 0; u < users.length; u++) {
                __.line = 2,
                __.col = 3;
                var rowClass = "odd";
                __.line = 3,
                __.col = 3,
                u % 2 === 0 && (__.line = 4, __.col = 5, rowClass = "even");
                var user = users[u];
                __.line = 6,
                __.col = 3,
                __.push("<tr"),
                __.r.attrs({
                    userid: {
                        v: user.id,
                        e: 1
                    },
                    "class": {
                        v: rowClass,
                        e: 1
                    }
                },
                __),
                __.push(">"),
                __.line = 7,
                __.col = 5,
                __.push("<td", ' class="username first"', ">", __.r.escape(user.username), "</td>"),
                __.line = 8,
                __.col = 5,
                __.push("<td", ' class="privs"', ">"),
                __.line = 9,
                __.col = 7,
                user.isReadOnly ? (__.line = 10, __.col = 9, __.push("R")) : (__.line = 12, __.col = 9, __.push("R + W")),
                __.push("</td>"),
                __.line = 13,
                __.col = 5,
                __.push("<td", ' class="actions"', ">"),
                __.line = 14,
                __.col = 7,
                __.push("<input", ' type="button"', ' class="editPen editDBUser"'),
                __.r.attrs({
                    title: {
                        v: "Edit " + user.username,
                        e: 1
                    },
                    userid: {
                        v: user.id,
                        e: 1
                    }
                },
                __),
                __.push("/>"),
                __.line = 15,
                __.col = 7,
                __.push("<input", ' type="button"', ' class="removeCan deleteDBUser"'),
                __.r.attrs({
                    title: {
                        v: "Delete " + user.username,
                        e: 1
                    },
                    userid: {
                        v: user.id,
                        e: 1
                    }
                },
                __),
                __.push("/>", "</td>", "</tr>")
            }
        }
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.EditDB = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<h3", ' class="popupTitle"', ">", "Edit Database", "</h3>"),
        __.line = 2,
        __.col = 1,
        __.push("<form", ' class="form"', ">"),
        __.line = 3,
        __.col = 3,
        __.push("Database Name"),
        __.line = 4,
        __.col = 3,
        __.push("<div", ' class="field"', ">"),
        __.line = 5,
        __.col = 5,
        __.push("<input", ' name="name"', ' type="text"', "/>", "</div>"),
        __.line = 6,
        __.col = 3,
        __.push("<input", ' name="dbEdit"', ' type="submit"', ' value="Save"', ' class="wow"', "/>", "</form>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.EditDBUser = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<h3", ' class="popupTitle"', ">", "Create User", "</h3>"),
        __.line = 2,
        __.col = 1,
        __.push("<form", ' class="form"', ">"),
        __.line = 3,
        __.col = 3,
        __.push("<div", ' class="field"', ">"),
        __.line = 4,
        __.col = 5,
        __.push("Username: "),
        __.line = 5,
        __.col = 5,
        __.push("<input", ' name="username"', ' type="text"', "/>", "</div>"),
        __.line = 6,
        __.col = 3,
        __.push("<div", ' class="field"', ">"),
        __.line = 7,
        __.col = 5,
        __.push("Password: "),
        __.line = 8,
        __.col = 5,
        __.push("<input", ' name="password"', ' type="password"', "/>", "</div>"),
        __.line = 9,
        __.col = 3,
        __.push("<p", ' class="instructions small-text"', ">"),
        __.line = 10,
        __.col = 5,
        __.push("To reset the user's password, enter a new one here.", "</p>"),
        __.line = 11,
        __.col = 3,
        __.push("<div", ' class="privs"', ">"),
        __.line = 12,
        __.col = 5,
        __.push("<label", ' for="isReadOnly"', ">", "Read Only:", "</label>"),
        __.line = 13,
        __.col = 5,
        __.push("<input", ' id="isReadOnly"', ' name="isReadOnly"', ' type="checkbox"', ' value="readonly"', "/>", "</div>"),
        __.line = 14,
        __.col = 3,
        __.push("<input", ' name="dbUserSave"', ' type="submit"', ' value="Save"', ' class="wow"', "/>", "</form>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.ErrorList = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) {
            __.line = 1,
            __.col = 1,
            __.push("<ul", ">"),
            __.line = 2,
            __.col = 3;
            for (var e = 0; e < errors.length; e++) __.line = 3,
            __.col = 5,
            __.push("<li", ">", __.r.escape(errors[e].message), "</li>");
            __.push("</ul>")
        }
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.DomainItem = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<div", ' class="domain"'),
        __.r.attrs({
            id: {
                v: "domain" + id,
                e: 1
            }
        },
        __),
        __.push(">"),
        __.line = 2,
        __.col = 3,
        __.push("<input", ' name="domain"', ' type="text"', ' class="varname"', "/>"),
        __.line = 3,
        __.col = 3,
        __.push("<input", ' type="button"', ' tabindex="-1"', ' class="removeCan removeDomain"'),
        __.r.attrs({
            name: {
                v: "remove" + id,
                e: 1
            }
        },
        __),
        __.push("/>", "</div>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.EnVarItem = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<div", ' class="envar"'),
        __.r.attrs({
            id: {
                v: "envar" + id,
                e: 1
            }
        },
        __),
        __.push(">"),
        __.line = 2,
        __.col = 3,
        __.push("<input", ' name="name"', ' type="text"', ' class="varname"', "/>"),
        __.line = 3,
        __.col = 3,
        __.push("<input", ' name="value"', ' class="varvalue"', "/>"),
        __.line = 4,
        __.col = 3,
        __.push("<input", ' type="button"', ' tabindex="-1"', ' class="removeCan removeVar"'),
        __.r.attrs({
            name: {
                v: "remove" + id,
                e: 1
            }
        },
        __),
        __.push("/>", "</div>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.SSLItem = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<div", ' class="domain"'),
        __.r.attrs({
            id: {
                v: id,
                e: 1
            }
        },
        __),
        __.push(">"),
        __.line = 2,
        __.col = 3,
        __.push("<span", ' class="dot"', ">", "&bull;", "</span>"),
        __.line = 3,
        __.col = 3,
        __.push("<span", ' class="domain"', ">", __.r.escape(domain), "</span>"),
        __.line = 4,
        __.col = 3,
        __.push("<a", ' href="#"', ' class="delete"'),
        __.r.attrs({
            name: {
                v: "delete" + id,
                e: 1
            }
        },
        __),
        __.push(">", "</a>", "</div>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.Sslpopup = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<h3", ' class="popupTitle"', ">", "Add Custom SSL", "</h3>"),
        __.line = 2,
        __.col = 1,
        __.push("<p", ">"),
        __.line = 3,
        __.col = 3,
        __.push("Copy and paste the contents of your private key file and certificate file into the following text boxes.", "</p>"),
        __.line = 4,
        __.col = 1,
        __.push("<form", ' class="form"', ">"),
        __.line = 5,
        __.col = 3,
        __.push("<label", ' for="sslKey"', ">", "Private Key", "</label>"),
        __.line = 6,
        __.col = 3,
        __.push("<textarea", ' name="sslKey"', ' type="text"', ">", "</textarea>"),
        __.line = 7,
        __.col = 3,
        __.push("<p", ' class="ext"', ">", "*.key file", "</p>"),
        __.line = 8,
        __.col = 3,
        __.push("<label", ' for="sslCrt"', ">", "Certificate", "</label>"),
        __.line = 9,
        __.col = 3,
        __.push("<textarea", ' name="sslCrt"', ' type="text"', ">", "</textarea>"),
        __.line = 10,
        __.col = 3,
        __.push("<p", ' class="ext"', ">", "*.crt file", "</p>"),
        __.line = 11,
        __.col = 3,
        __.push("<label", ' for="sslCrt"', ">", "Certificate Authority", "</label>"),
        __.line = 12,
        __.col = 3,
        __.push("<textarea", ' name="sslCA"', ' type="text"', ">", "</textarea>"),
        __.line = 13,
        __.col = 3,
        __.push("<p", ' class="ext"', ">", "gd_bundle.crt (or similar)", "</p>"),
        __.line = 14,
        __.col = 3,
        __.push("<label", ' for="domainSelect"', ">", "Domain", "</label>"),
        __.line = 15,
        __.col = 3,
        __.push("<select", ' id="domain"', ' name="domainSelect"', ">", "</select>"),
        __.line = 16,
        __.col = 3,
        __.push("<div", ">"),
        __.line = 17,
        __.col = 5,
        __.push("<input", ' name="gogoSSL"', ' type="submit"', ' value="Go"', ' class="wow right"', "/>", "</div>", "</form>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.CreateProject = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<div", ' class="spinner"', ">", "</div>"),
        __.line = 2,
        __.col = 1,
        __.push("<div", ' class="content"', ">"),
        __.line = 3,
        __.col = 3,
        __.push("<form", ' class="form"', ">"),
        __.line = 4,
        __.col = 5,
        __.push("<label", ' for="name"', ' class="hidden"', ">", "Name:", "</label>"),
        __.line = 5,
        __.col = 5,
        __.push("<input", ' name="name"', ' type="text"', ' class="project-name"', "/>"),
        __.line = 6,
        __.col = 5,
        __.push("<input", ' id="create"', ' type="submit"', ' value="Make it so"', ' class="create-btn wow"', "/>", "</form>"),
        __.line = 7,
        __.col = 3,
        __.push("<div", ' class="info clear"', ">"),
        __.line = 8,
        __.col = 5,
        __.push("<a", ' href="/app-guidelines"', ' class="guidelines greenLink"', ">", "App Guidelines", "</a>", "</div>"),
        __.line = 9,
        __.col = 3,
        __.push("<div", ' class="nocap hidden clear"', ">"),
        __.line = 10,
        __.col = 5,
        __.push("Not enough capacity for new projects. New capacity is being "),
        __.line = 11,
        __.col = 5,
        __.push("\nadded now. Please attempt the request again in a few minutes.", "</div>", "</div>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.DeployFinish = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<h1", ">", "Finished!!!", "</h1>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.DeployProject = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<h3", ">", "Deploy Files", "</h3>"),
        __.line = 2,
        __.col = 1,
        __.push("<div", ' class="browser"', ">"),
        __.line = 3,
        __.col = 3,
        __.push("<span", ' class="selected-zip left"', ">", "</span>"),
        __.line = 4,
        __.col = 3,
        __.push("<input", ' type="button"', ' value="Browse"', ' id="select-zip"', ' class="right"', "/>", "</div>"),
        __.line = 5,
        __.col = 1,
        __.push("<div", ' class="uploadButton clear"', ">"),
        __.line = 6,
        __.col = 3,
        __.push("<input", ' type="button"', ' value="Upload"', ' class="deploy-project-btn wow"', "/>"),
        __.line = 7,
        __.col = 3,
        __.push("<br", "/>"),
        __.line = 8,
        __.col = 3,
        __.push("<a", ' href="/app-guidelines"', ' class="guidelines greenLink"', ">", "App Guidelines", "</a>", "</div>"),
        __.line = 9,
        __.col = 1,
        __.push("<div", ' class="demoProject"', ">"),
        __.line = 10,
        __.col = 3,
        __.push("Want a demo project? "),
        __.line = 11,
        __.col = 3,
        __.push("<a", ' href="/demos/ModulusDemo.zip"', ' class="greenLink"', ">", "Try this one.", "</a>", "</div>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.DeployStatus = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<h1", ' class="popupTitle"', ">", "Deploying Project", "</h1>"),
        __.line = 2,
        __.col = 1,
        __.push("<div", ' class="steps"', ">"),
        __.line = 3,
        __.col = 3,
        __.push("<div", ' id="step1"', ' class="progressStep"', ">"),
        __.line = 4,
        __.col = 5,
        __.push("<div", ' class="stepLabel"', ">"),
        __.line = 5,
        __.col = 7,
        __.push("<span", ">", "1. Uploading", "</span>", "</div>"),
        __.line = 6,
        __.col = 5,
        __.push("<span", ' class="time"', ">", "</span>"),
        __.line = 7,
        __.col = 5,
        __.push("<div", ' class="bar"', ">"),
        __.line = 8,
        __.col = 7,
        __.push("<div", ' class="progress"', ">", "</div>", "</div>"),
        __.line = 9,
        __.col = 5,
        __.push("<div", ' class="percent"', ">", "0%", "</div>", "</div>"),
        __.line = 10,
        __.col = 3,
        __.push("<div", ' id="step2"', ' class="progressStep"', ">"),
        __.line = 11,
        __.col = 5,
        __.push("<div", ' class="stepLabel"', ">"),
        __.line = 12,
        __.col = 7,
        __.push("<span", ">", "2. Deploying", "</span>", "</div>"),
        __.line = 13,
        __.col = 5,
        __.push("<span", ' class="time"', ">", "</span>"),
        __.line = 14,
        __.col = 5,
        __.push("<div", ' class="deploy-logs"', ">"),
        __.line = 15,
        __.col = 7,
        __.push("<pre", ' class="logs"', ">", "</pre>", "</div>", "</div>"),
        __.line = 16,
        __.col = 3,
        __.push("<div", ' id="step3"', ' class="progressStep"', ">"),
        __.line = 17,
        __.col = 5,
        __.push("<div", ' class="stepLabel"', ">"),
        __.line = 18,
        __.col = 7,
        __.push("<span", ">", "3. Running", "</span>", "</div>"),
        __.line = 19,
        __.col = 5,
        __.push("<span", ' class="time"', ">", "</span>", "</div>", "</div>"),
        __.line = 20,
        __.col = 1,
        __.push("<div", ' class="greenCheckmark"', ">", "</div>"),
        __.line = 21,
        __.col = 1,
        __.push("<div", ' id="tbox"', ">", "</div>"),
        __.line = 22,
        __.col = 1,
        __.push("<div", ' id="url"', ' class="hidden"', ">", "Project URL:&nbsp;"),
        __.line = 23,
        __.col = 3,
        __.push("<a", ' href="#"', ' target="_blank"', ' id="urlLink"', ' class="greenLink"', ">", "</a>", "</div>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.Log = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        typeof entries != "string" ? (__.line = 2, __.col = 3, __.push("<pre", ">", "loading...", "</pre>")) : entries.length < 1 ? (__.line = 4, __.col = 3, __.push("<pre", ">", "Your logs are empty.", "</pre>")) : (__.line = 6, __.col = 3, __.push("<pre", ">", __.r.escape("" + ((__.z = entries) == null ? "": __.z) + ""), "</pre>"))
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.EmailItem = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<div", ' class="domain"'),
        __.r.attrs({
            id: {
                v: "email" + id,
                e: 1
            }
        },
        __),
        __.push(">"),
        __.line = 2,
        __.col = 3,
        __.push("Email"),
        __.line = 3,
        __.col = 3,
        __.push("<input", ' name="email"', ' type="text"', ' class="varname"', "/>"),
        __.line = 4,
        __.col = 3,
        __.push("on"),
        __.line = 5,
        __.col = 3,
        __.push("<select", ' name="type"', ">"),
        __.line = 6,
        __.col = 5,
        __.push("<option", ' value="all"', ">", "all project changes", "</option>"),
        __.line = 7,
        __.col = 5,
        __.push("<option", ' value="crash"', ">", "project crashes", "</option>"),
        __.line = 8,
        __.col = 5,
        __.push("<option", ' value="deploy"', ">", "project deploys", "</option>"),
        __.line = 9,
        __.col = 5,
        __.push("<option", ' value="scale"', ">", "project scaling", "</option>"),
        __.line = 10,
        __.col = 5,
        __.push("<option", ' value="stop"', ">", "project stopped", "</option>"),
        __.line = 11,
        __.col = 5,
        __.push("<option", ' value="start"', ">", "project started", "</option>"),
        __.line = 12,
        __.col = 5,
        __.push("<option", ' value="restart"', ">", "project restarted", "</option>", "</select>"),
        __.line = 13,
        __.col = 3,
        __.push("<input", ' type="button"', ' tabindex="-1"', ' class="removeCan removeEmail"'),
        __.r.attrs({
            name: {
                v: "remove" + id,
                e: 1
            }
        },
        __),
        __.push("/>", "</div>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.HookItem = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<div", ' class="domain"'),
        __.r.attrs({
            id: {
                v: "hook" + id,
                e: 1
            }
        },
        __),
        __.push(">"),
        __.line = 2,
        __.col = 3,
        __.push("POST to"),
        __.line = 3,
        __.col = 3,
        __.push("<input", ' name="uri"', ' type="text"', ' class="varname"', "/>"),
        __.line = 4,
        __.col = 3,
        __.push("on"),
        __.line = 5,
        __.col = 3,
        __.push("<select", ' name="type"', ">"),
        __.line = 6,
        __.col = 5,
        __.push("<option", ' value="all"', ">", "all project changes", "</option>"),
        __.line = 7,
        __.col = 5,
        __.push("<option", ' value="crash"', ">", "project crashes", "</option>"),
        __.line = 8,
        __.col = 5,
        __.push("<option", ' value="deploy"', ">", "project deploys", "</option>"),
        __.line = 9,
        __.col = 5,
        __.push("<option", ' value="scale"', ">", "project scaling", "</option>"),
        __.line = 10,
        __.col = 5,
        __.push("<option", ' value="stop"', ">", "project stopped", "</option>"),
        __.line = 11,
        __.col = 5,
        __.push("<option", ' value="start"', ">", "project started", "</option>"),
        __.line = 12,
        __.col = 5,
        __.push("<option", ' value="restart"', ">", "project restarted", "</option>", "</select>"),
        __.line = 13,
        __.col = 3,
        __.push("<input", ' type="button"', ' tabindex="-1"', ' class="removeCan removeHook"'),
        __.r.attrs({
            name: {
                v: "remove" + id,
                e: 1
            }
        },
        __),
        __.push("/>", "</div>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.ProjectActions = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<div", ' class="project-actions"', ">"),
        __.line = 2,
        __.col = 3,
        __.push("<div", ' class="content"', ">"),
        __.line = 3,
        __.col = 5,
        __.push("<div", ' class="error"', ">", "This is the super error!", "</div>"),
        __.line = 4,
        __.col = 5,
        __.push("<div", ' class="overlay"', ">", "</div>"),
        __.line = 5,
        __.col = 5,
        __.push("<div", ' class="noactions"', ">"),
        __.line = 6,
        __.col = 7,
        __.push("Your project is currently busy.", "</div>"),
        __.line = 7,
        __.col = 5,
        __.push("<div", ' class="RUNNING"', ">"),
        __.line = 8,
        __.col = 7,
        __.push("<input", ' type="button"', ' value="RESTART"', ' class="restart wow"', "/>"),
        __.line = 9,
        __.col = 7,
        __.push("<input", ' type="button"', ' value="STOP"', ' class="stop wow"', "/>", "</div>"),
        __.line = 10,
        __.col = 5,
        __.push("<div", ' class="STOPPED"', ">"),
        __.line = 11,
        __.col = 7,
        __.push("<input", ' type="button"', ' value="START"', ' class="start wow"', "/>", "</div>"),
        __.line = 12,
        __.col = 5,
        __.push("<p", ' class="info"', ">"),
        __.line = 13,
        __.col = 7,
        __.push("<a", ' href="/codex/projects/start_stop"', ' target="_blank"', ' class="greenLink"', ">", "What do these do?", "</a>", "</p>", "</div>", "</div>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.ProjectDelete = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<h3", ' class="popupTitle"', ">", "Confirm Destruction", "</h3>"),
        __.line = 2,
        __.col = 1,
        __.push("<form", ' class="form"', ">"),
        __.line = 3,
        __.col = 3,
        __.push("<p", ">", "Deleting a project cannot be undone. Are you sure you want to continue?", "</p>"),
        __.line = 4,
        __.col = 3,
        __.push("<label", ' for="confirmation"', ">", "Please Type &quot;delete&quot;", "</label>"),
        __.line = 5,
        __.col = 3,
        __.push("<input", ' name="confirmation"', ' type="text"', ' class="text"', "/>"),
        __.line = 6,
        __.col = 3,
        __.push("<input", ' id="confirm"', ' type="submit"', ' value="Confirm"', ' class="create-btn wow"', "/>", "</form>"),
        __.line = 7,
        __.col = 1,
        __.push("<input", ' type="button"', ' value="CLOSE"', ' class="close"', "/>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.RouteTable = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<div", ' class="overlay hidden"', ">", "</div>"),
        __.line = 2,
        __.col = 1,
        __.push("<div", ' class="statTools hidden"', ">"),
        __.line = 3,
        __.col = 3,
        __.push("<a", ' id="30days"', ' href="#"', ' rel="duration"', ">", "30 days", "</a>"),
        __.line = 4,
        __.col = 3,
        __.push("<input", ' type="hidden"', ' value="2592000"', "/>"),
        __.line = 5,
        __.col = 3,
        __.push("<a", ' id="7days"', ' href="#"', ' rel="duration"', ">", "7 days", "</a>"),
        __.line = 6,
        __.col = 3,
        __.push("<input", ' type="hidden"', ' value="604800"', "/>"),
        __.line = 7,
        __.col = 3,
        __.push("<a", ' id="1day"', ' href="#"', ' rel="duration"', ">", "1 day", "</a>"),
        __.line = 8,
        __.col = 3,
        __.push("<input", ' type="hidden"', ' value="86400"', "/>"),
        __.line = 9,
        __.col = 3,
        __.push("<a", ' id="4hours"', ' href="#"', ' rel="duration"', ">", "4 hours", "</a>"),
        __.line = 10,
        __.col = 3,
        __.push("<input", ' type="hidden"', ' value="14400"', "/>"),
        __.line = 11,
        __.col = 3,
        __.push("<a", ' id="1hour"', ' href="#"', ' rel="duration"', ' class="selected"', ">", "1 hour", "</a>"),
        __.line = 12,
        __.col = 3,
        __.push("<input", ' type="hidden"', ' value="3600"', "/>", "</div>"),
        __.line = 13,
        __.col = 1,
        __.push("<table", ">"),
        __.line = 14,
        __.col = 3,
        __.push("<thead", ">"),
        __.line = 15,
        __.col = 5,
        __.push("<tr", ">"),
        __.line = 16,
        __.col = 7,
        __.push("<th", ">", "Route", "</th>"),
        __.line = 17,
        __.col = 7,
        __.push("<th", ">", "Route (RAW)", "</th>"),
        __.line = 18,
        __.col = 7,
        __.push("<th", ">", "&nbsp;&nbsp;&nbsp;Requests&nbsp;&nbsp;&nbsp;", "</th>"),
        __.line = 19,
        __.col = 7,
        __.push("<th", ">", "&nbsp;&nbsp;&nbsp;Transfer&nbsp;&nbsp;&nbsp;", "</th>"),
        __.line = 20,
        __.col = 7,
        __.push("<th", ">", "Transfer (RAW)", "</th>"),
        __.line = 21,
        __.col = 7,
        __.push("<th", ">", "Response Time (AVG)", "</th>"),
        __.line = 22,
        __.col = 7,
        __.push("<th", ">", "Response Time (RAW)", "</th>", "</tr>", "</thead>"),
        __.line = 23,
        __.col = 3,
        __.push("<tbody", ">", "</tbody>"),
        __.line = 24,
        __.col = 3,
        __.push("<tfoot", ">"),
        __.line = 25,
        __.col = 5,
        __.push("<tr", ">"),
        __.line = 26,
        __.col = 7,
        __.push("<th", ">", "</th>"),
        __.line = 27,
        __.col = 7,
        __.push("<th", ">", "</th>"),
        __.line = 28,
        __.col = 7,
        __.push("<th", ">", "</th>"),
        __.line = 29,
        __.col = 7,
        __.push("<th", ">", "</th>"),
        __.line = 30,
        __.col = 7,
        __.push("<th", ">", "</th>"),
        __.line = 31,
        __.col = 7,
        __.push("<th", ">", "</th>"),
        __.line = 32,
        __.col = 7,
        __.push("<th", ">", "</th>", "</tr>", "</tfoot>", "</table>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.Tweet = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<form", ' class="form tweetform"', ">"),
        __.line = 2,
        __.col = 3,
        __.push("<div", ' class="title"', ">"),
        __.line = 3,
        __.col = 5,
        __.push("<span", ' aria-hidden="true"', ' data-icon="&#x54;"', ' class="icon"', ">", "</span>"),
        __.line = 4,
        __.col = 5,
        __.push("<span", ' class="text"', ">", "</span>"),
        __.line = 5,
        __.col = 5,
        __.push("<span", ' class="count"', ">", "0", "</span>", "</div>"),
        __.line = 6,
        __.col = 3,
        __.push("<textarea", ' class="tweettext borderSizing"', ">", "</textarea>"),
        __.line = 7,
        __.col = 3,
        __.push("<input", ' type="submit"', ' value="Tweet It!"', ' id="tweetit"', ' class="wow"', "/>", "</form>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.BetaCode = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<div", ' class="beta-key-form"', ">"),
        __.line = 2,
        __.col = 3,
        __.push("<label", ' for="code"', ">", "Enter Beta Code:", "</label>"),
        __.line = 3,
        __.col = 3,
        __.push("<input", ' id="beta-code-input"', ' name="code"', ' type="text"', "/>"),
        __.line = 4,
        __.col = 3,
        __.push("<input", ' id="codeSubmit"', ' type="button"', ' class="wow-large"', ' value="Let\'s do this!"', "/>"),
        __.line = 5,
        __.col = 3,
        __.push("<div", ' class="error hidden"', ">", "</div>", "</div>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.BillingInfo = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) {
            __.line = 1,
            __.col = 1,
            __.push("<h3", ">", "Billing Info", "</h3>"),
            __.line = 2,
            __.col = 1;
            if (typeof billing != "undefined") {
                __.line = 3,
                __.col = 3;
                var cardClass = "cardForm";
                __.line = 4,
                __.col = 3;
                if (billing === {} || typeof billing.billing == "undefined") __.line = 5,
                __.col = 5,
                __.push("<div", ' class="cardInfo hidden"', ">"),
                __.line = 6,
                __.col = 7,
                __.push("<div", ' class="name"', ">", "</div>"),
                __.line = 7,
                __.col = 7,
                __.push("<div", ' class="address"', ">"),
                __.line = 8,
                __.col = 9,
                __.push("<div", ' class="street"', ">", "</div>"),
                __.line = 9,
                __.col = 9,
                __.push("<div", ' class="cityStateZip"', ">", "</div>", "</div>"),
                __.line = 10,
                __.col = 7,
                __.push("<div", ' class="cardInfo"', ">"),
                __.line = 11,
                __.col = 9,
                __.push("<div", ' class="number"', ">", "</div>"),
                __.line = 12,
                __.col = 9,
                __.push("<div", ' class="expire"', ">", "</div>", "</div>"),
                __.line = 13,
                __.col = 7,
                __.push("<input", ' name="changeCard"', ' type="submit"', ' value="Change"', ' class="wow"', "/>", "</div>");
                else {
                    cardClass += " hidden",
                    __.line = 16,
                    __.col = 5,
                    __.push("<div", ' class="cardInfo"', ">"),
                    __.line = 17,
                    __.col = 7,
                    __.push("<div", ' class="name green caps"', ">", __.r.escape(billing.billing.cc_name), "</div>"),
                    __.line = 18,
                    __.col = 7,
                    __.push("<div", ' class="address"', ">"),
                    __.line = 19,
                    __.col = 9,
                    __.push("<div", ' class="street ellipsis"', ">", __.r.escape(billing.address.line_1 + " " + billing.address.line_2), "</div>"),
                    __.line = 20,
                    __.col = 9;
                    var cityState = "";
                    __.line = 21,
                    __.col = 9,
                    typeof billing.address.city == "string" && billing.address.city.length > 0 && (__.line = 22, __.col = 11, cityState += billing.address.city),
                    typeof billing.address.state == "string" && billing.address.state.length > 0 && (cityState.length > 0 && (cityState += ", "), cityState += billing.address.state),
                    __.line = 27,
                    __.col = 9,
                    __.push("<div", ' class="cityStateZip ellipsis"', ">", __.r.escape(cityState + " " + billing.address.zip), "</div>", "</div>"),
                    __.line = 28,
                    __.col = 7,
                    __.push("<div", ' class="cardData textRight"', ">"),
                    __.line = 29,
                    __.col = 9,
                    __.push("<div", ' class="number"', ">", __.r.escape(billing.billing.cc_num), "</div>"),
                    __.line = 30,
                    __.col = 9;
                    var exp = (billing.billing.exp_year + "").substr( - 2);
                    __.line = 31,
                    __.col = 9,
                    (billing.billing.exp_month + "").length === 1 ? (__.line = 32, __.col = 11, exp = "0" + billing.billing.exp_month + "/" + exp) : exp = billing.billing.exp_month + "/" + exp,
                    __.line = 35,
                    __.col = 9,
                    __.push("<div", ' class="expire"', ">", __.r.escape(exp), "</div>", "</div>"),
                    __.line = 36,
                    __.col = 7,
                    __.push("<div", ' class="clear"', ">"),
                    __.line = 37,
                    __.col = 9,
                    __.push("<input", ' name="change"', ' type="submit"', ' value="Change"', ' class="wow"', "/>"),
                    __.line = 38,
                    __.col = 9,
                    __.push("<a", ' href="#"', ' id="delete"', ' class="caps"', ">", "Remove Card", "</a>", "</div>", "</div>")
                }
                __.line = 39,
                __.col = 3,
                __.push("<div"),
                __.r.attrs({
                    "class": {
                        v: cardClass,
                        e: 1
                    }
                },
                __),
                __.push(">"),
                __.line = 40,
                __.col = 5,
                __.push("<form", ' class="form"', ">"),
                __.line = 41,
                __.col = 7,
                __.push("<div", ' class="actions right caps"', ">"),
                __.line = 42,
                __.col = 9,
                __.push("<div", ' class="verify"', ">"),
                __.line = 43,
                __.col = 11,
                __.push("<input", ' name="verify"', ' type="submit"', ' value="Verify"', ' class="wow"', "/>", "</div>"),
                __.line = 44,
                __.col = 9,
                __.push("<a", ' href="#"', ' id="cancel"', ' class="hidden"', ">", "Cancel", "</a>"),
                __.line = 45,
                __.col = 9,
                __.push("<a", ' href="#"', ' id="clear"', ">", "Clear", "</a>"),
                __.line = 46,
                __.col = 9,
                __.push("<div", ' class="spinner"', ">", "</div>", "</div>"),
                __.line = 47,
                __.col = 7,
                __.push("<div", ' class="field"', ">"),
                __.line = 48,
                __.col = 9;
                var fullName = user.firstName + " " + user.lastName;
                __.line = 49,
                __.col = 9,
                fullName.length > 1 ? (__.line = 50, __.col = 11, __.push("<input", ' name="name"', ' type="text"', ' class="full"'), __.r.attrs({
                    value: {
                        v: fullName,
                        e: 1
                    }
                },
                __), __.push("/>")) : (__.line = 52, __.col = 11, __.push("<input", ' name="name"', ' type="text"', ' class="full"', "/>")),
                __.push("</div>"),
                __.line = 53,
                __.col = 7,
                __.push("<div", ' class="field"', ">"),
                __.line = 54,
                __.col = 9,
                __.push("<input", ' name="card"', ' type="text"', ' class="half pad"', "/>"),
                __.line = 55,
                __.col = 9,
                __.push("<input", ' name="expirationMonth"', ' type="text"', ' class="quarter pad"', "/>"),
                __.line = 56,
                __.col = 9,
                __.push("<input", ' name="expirationYear"', ' type="text"', ' class="quarter"', "/>", "</div>"),
                __.line = 57,
                __.col = 7,
                __.push("<div", ' class="separator readable"', ">", "Optional Billing Address (U.S. Residents Only)", "</div>"),
                __.line = 58,
                __.col = 7,
                __.push("<div", ' class="field"', ">"),
                __.line = 59,
                __.col = 9,
                __.push("<input", ' name="address1"', ' type="text"', ' class="half pad"', "/>"),
                __.line = 60,
                __.col = 9,
                __.push("<input", ' name="address2"', ' type="text"', ' class="half"', "/>", "</div>"),
                __.line = 61,
                __.col = 7,
                __.push("<div", ' class="field"', ">"),
                __.line = 62,
                __.col = 9,
                __.push("<input", ' name="city"', ' type="text"', ' class="half pad"', "/>"),
                __.line = 63,
                __.col = 9,
                __.push("<input", ' name="state"', ' type="text"', ' class="quarter pad"', "/>"),
                __.line = 64,
                __.col = 9,
                __.push("<input", ' name="zip"', ' type="text"', ' class="quarter"', "/>", "</div>", "</form>", "</div>"),
                __.line = 65,
                __.col = 3,
                __.push("<div", ' class="errors caps"', ">", "</div>")
            } else __.line = 67,
            __.col = 3,
            __.push("<div", ' class="billingInfoError"', ">", "There was an error retrieving your billing information. Please refresh to try again.", "</div>")
        }
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.Forgot = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<form", ' class="form"', ">"),
        __.line = 2,
        __.col = 3,
        __.push("<div", ' id="usernameField"', ' class="form-field"', ">"),
        __.line = 3,
        __.col = 5,
        __.push("<label", ' for="email"', ' class="hidden"', ">", "Email:", "</label>"),
        __.line = 4,
        __.col = 5,
        __.push("<input", ' type="text"', ' name="email"', "/>", "</div>"),
        __.line = 5,
        __.col = 3,
        __.push("<div", ' id="errors"', ">", "</div>"),
        __.line = 6,
        __.col = 3,
        __.push("<input", ' type="submit"', ' value="Reset Password"', ' id="input-submit"', ' class="wow"', "/>", "</form>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.Invoice = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<tr"),
        __.r.attrs({
            "class": {
                a: "summary",
                v: rowClass,
                e: 1
            }
        },
        __),
        __.push(">"),
        __.line = 2,
        __.col = 3,
        __.push("<td", ' class="date"', ">"),
        __.line = 3,
        __.col = 5,
        __.push(__.r.escape(invoice.invoice.start)),
        __.line = 4,
        __.col = 5,
        __.push("&nbsp;-&nbsp;"),
        __.line = 5,
        __.col = 5,
        __.push(__.r.escape(invoice.invoice.end), "</td>"),
        __.line = 6,
        __.col = 3,
        __.push("<td", ' class="total textRight"', ">", __.r.escape("$" + ((__.z = invoice.invoice.totalAdjusted) == null ? "": __.z) + ""), "</td>"),
        __.line = 7,
        __.col = 3,
        __.push("<td", ' class="pdf textCenter"', ">"),
        __.line = 8,
        __.col = 5,
        __.push("<a", ' target="_blank"', ' class="greenLink"'),
        __.r.attrs({
            href: {
                v: "/invoice/" + invoice.id + "/pdf",
                e: 1
            }
        },
        __),
        __.push(">", "PDF", "</a>", "</td>", "</tr>"),
        __.line = 9,
        __.col = 1,
        __.push("<tr", ">"),
        __.line = 10,
        __.col = 3,
        __.push("<td"),
        __.r.attrs({
            colspan: {
                v: 3,
                e: 1
            }
        },
        __),
        __.push(">"),
        __.line = 11,
        __.col = 5,
        __.push("<div", ' class="details hidden"', ">"),
        __.line = 12,
        __.col = 7,
        __.push("<table", ' class="breakdown caps"', ">"),
        __.line = 13,
        __.col = 9,
        __.push("<tr", ' class="greyBottom"', ">"),
        __.line = 14,
        __.col = 11,
        __.push("<td", ">", "Servos", "</td>"),
        __.line = 15,
        __.col = 11,
        __.push("<td", ' class="textCenter value"', ">", __.r.escape(invoice.invoice.project.totalHours)),
        __.line = 16,
        __.col = 13,
        __.push("&nbsp;hrs", "</td>"),
        __.line = 17,
        __.col = 11,
        __.push("<td", ' class="textRight"', ">", "$"),
        __.line = 18,
        __.col = 13,
        __.push(__.r.escape(invoice.invoice.project.total), "</td>", "</tr>"),
        __.line = 19,
        __.col = 9,
        __.push("<tr", ' class="greyBottom"', ">"),
        __.line = 20,
        __.col = 11,
        __.push("<td", ">", "Mongo", "</td>"),
        __.line = 21,
        __.col = 11,
        __.push("<td", ' class="textCenter value"', ">", __.r.escape(invoice.invoice.database.totalSize), "</td>"),
        __.line = 22,
        __.col = 11,
        __.push("<td", ' class="textRight"', ">", "$"),
        __.line = 23,
        __.col = 13,
        __.push(__.r.escape(invoice.invoice.database.total), "</td>", "</tr>"),
        __.line = 24,
        __.col = 9,
        typeof invoice.invoice.credit == "number" && invoice.invoice.credit > 0 ? (__.line = 25, __.col = 11, __.push("<tr", ' class="greyBottom"', ">"), __.line = 26, __.col = 13, __.push("<td", ">", "Storage", "</td>"), __.line = 27, __.col = 13, __.push("<td", ' class="textCenter value"', ">", __.r.escape(invoice.invoice.storage.totalSize), "</td>"), __.line = 28, __.col = 13, __.push("<td", ' class="textRight"', ">", "$"), __.line = 29, __.col = 15, __.push(__.r.escape(invoice.invoice.storage.total), "</td>", "</tr>"), __.line = 30, __.col = 11, __.push("<tr", ' class="credits"', ">"), __.line = 31, __.col = 13, __.push("<td", ">", "Credit", "</td>"), __.line = 32, __.col = 13, __.push("<td", ">", "</td>"), __.line = 33, __.col = 13, __.push("<td", ' class="textRight"', ">", __.r.escape("-$" + ((__.z = invoice.invoice.credit.toFixed(2)) == null ? "": __.z) + ""), "</td>", "</tr>")) : (__.line = 35, __.col = 11, __.push("<tr", ">"), __.line = 36, __.col = 13, __.push("<td", ">", "Storage", "</td>"), __.line = 37, __.col = 13, __.push("<td", ' class="textCenter value"', ">", __.r.escape(invoice.invoice.storage.totalSize), "</td>"), __.line = 38, __.col = 13, __.push("<td", ' class="textRight"', ">", "$"), __.line = 39, __.col = 15, __.push(__.r.escape(invoice.invoice.storage.total), "</td>", "</tr>")),
        __.push("</table>", "</div>", "</td>", "</tr>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.Login = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<div", ' class="form"', ">"),
        __.line = 2,
        __.col = 3,
        __.push("<a", ' href="/github/auth"', ' class="wow github-btn"', ">", "Sign In With GitHub", "</a>"),
        __.line = 3,
        __.col = 3,
        __.push("<span", ' class="or"', ">", "or", "</span>"),
        __.line = 4,
        __.col = 3,
        __.push("<form", ">"),
        __.line = 5,
        __.col = 5,
        __.push("<div", ' id="usernameField"', ' class="form-field"', ">"),
        __.line = 6,
        __.col = 7,
        __.push("<label", ' for="login"', ' class="hidden"', ">", "User/Email:", "</label>"),
        __.line = 7,
        __.col = 7,
        __.push("<input", ' type="text"', ' name="login"', "/>", "</div>"),
        __.line = 8,
        __.col = 5,
        __.push("<div", ' id="passwordField"', ' class="form-field"', ">"),
        __.line = 9,
        __.col = 7,
        __.push("<label", ' for="password"', ' class="hidden"', ">", "Password:", "</label>"),
        __.line = 10,
        __.col = 7,
        __.push("<input", ' type="password"', ' name="password"', "/>", "</div>"),
        __.line = 11,
        __.col = 5,
        __.push("<div", ' id="errors"', ">", "</div>"),
        __.line = 12,
        __.col = 5,
        __.push("<input", ' type="submit"', ' value="Log Me In"', ' id="input-submit"', ' class="wow"', "/>", "</form>", "</div>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.NewPassword = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<h3", ' class="popupTitle"', ">", "Enter A New Password", "</h3>"),
        __.line = 2,
        __.col = 1,
        __.push("<form", ' class="form"', ">"),
        __.line = 3,
        __.col = 3,
        __.push("<p", ">", "Please enter a new password that can be used to access your Modulus account without Github authentication.", "</p>"),
        __.line = 4,
        __.col = 3,
        __.push("<input", ' name="password-new"', ' type="password"', ' placeholder="Password"', ' class="text"', "/>"),
        __.line = 5,
        __.col = 3,
        __.push("<br", "/>"),
        __.line = 6,
        __.col = 3,
        __.push("<input", ' name="password-confirm"', ' type="password"', ' placeholder="Confirm Password"', ' class="text"', "/>"),
        __.line = 7,
        __.col = 3,
        __.push("<br", "/>"),
        __.line = 8,
        __.col = 3,
        __.push("<input", ' id="confirm"', ' type="submit"', ' value="Confirm"', ' class="create-btn wow"', "/>", "</form>"),
        __.line = 9,
        __.col = 1,
        __.push("<input", ' type="button"', ' value="CLOSE"', ' class="close"', "/>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.ProjectItem = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<div", ' class="info"', ">"),
        __.line = 2,
        __.col = 3,
        __.push("<div", ' class="header"', ">"),
        __.line = 3,
        __.col = 5,
        __.push("<h3", ">"),
        __.line = 4,
        __.col = 7,
        __.push("<a", ' class="item-name"'),
        __.r.attrs({
            href: {
                v: "/project/" + id,
                e: 1
            }
        },
        __),
        __.push(">", __.r.escape("" + ((__.z = name) == null ? "": __.z) + ""), "</a>", "</h3>"),
        __.line = 5,
        __.col = 5,
        __.push("<div"),
        __.r.attrs({
            "class": {
                a: "project-status",
                v: status,
                e: 1
            }
        },
        __),
        __.push(">", __.r.escape("" + ((__.z = status) == null ? "": __.z) + ""), "</div>", "</div>"),
        __.line = 6,
        __.col = 3,
        __.push("<div", ' class="deploy-date"', ">"),
        __.line = 7,
        __.col = 5,
        __.push(__.r.escape("Created on " + ((__.z = (new Date(created_date)).toDateString()) == null ? "": __.z) + ""), "</div>"),
        __.line = 8,
        __.col = 3,
        __.push("<div", ' class="stats"', ">"),
        __.line = 9,
        __.col = 5,
        __.push("<div", ' class="nums"', ">"),
        __.line = 10,
        __.col = 7,
        __.push("<h4", ">"),
        __.line = 11,
        __.col = 9,
        __.push("<span", ">", __.r.escape("" + ((__.z = puCount) == null ? "": __.z) + ""), "</span>"),
        __.line = 12,
        __.col = 9,
        puCount == 1 ? (__.line = 13, __.col = 11, __.push(" Servo")) : (__.line = 15, __.col = 11, __.push(" Servos")),
        __.push("</h4>"),
        __.line = 16,
        __.col = 7,
        __.push("<h4", ">"),
        __.line = 17,
        __.col = 9,
        __.push("<span", ' class="value"', ">", __.r.escape(storage.totalConvert.value), "</span>"),
        __.line = 18,
        __.col = 9,
        __.push("&nbsp;"),
        __.line = 19,
        __.col = 9,
        __.push("<span", ' class="unit"', ">", __.r.escape(storage.totalConvert.unit.toUpperCase()), "</span>"),
        __.line = 20,
        __.col = 9,
        __.push("&nbsp;Bundle Size", "</h4>", "</div>"),
        __.line = 21,
        __.col = 5,
        __.push("<div", ' class="billing"', ">"),
        __.line = 22,
        __.col = 7,
        __.push("<span", ">", "Accrued to Date", "</span>"),
        __.line = 23,
        __.col = 7,
        __.push("<h5", ">", "$"),
        __.line = 24,
        __.col = 9,
        __.push(__.r.escape(charges), "</h5>"),
        __.line = 25,
        __.col = 7,
        __.push("<span", ' class="small"', ">", "*Credit Not Applied", "</span>", "</div>", "</div>", "</div>"),
        __.line = 26,
        __.col = 1,
        __.push("<div", ' class="graph"', ">"),
        __.line = 27,
        __.col = 3,
        __.push("<div"),
        __.r.attrs({
            "class": {
                v: "project-response-graph-" + id,
                e: 1
            }
        },
        __),
        __.push(">", "</div>"),
        __.line = 28,
        __.col = 3,
        __.push('<script type="text/javascript">\nsetTimeout(function(){\n  var el = \'.project-response-graph-' + ((__.z = id) == null ? "": __.z) + "';\n  var tooltipDateFormatter = d3.time.format(\"%I:%M:%S %p\");\n  var msTooltipText = function(d) {\n    if(!d) {\n      return '';\n    }\n    var date = new Date(d.time);\n    return d.value.toFixed(1) + ' ms @ ' + tooltipDateFormatter(date);\n  };\n  var stats = [];\n  stat = new modulus.models.Stats({label: 'project', stat: 'servo_response_0', id : " + ((__.z = id) == null ? "": __.z) + ", units : 'ms', ref : true});\n  var color = '#43B9A3';\n  if($(el).parents('li.even').length > 0) {\n    color = '#7B80A8';\n  }\n  stat.set('visual', {\n    name : 'bar',\n    color : color,\n    hoverEnabled : true,\n    hoverColor : 'rgb(255,255,255)',\n    barWidth : 2\n  });\n  stat.set('tooltip', {\n    text : msTooltipText\n  });\n  stats.push(stat);\n  var projectResponseGraph = new modulus.widgets.Graph({\n    el : el,\n    model : stats\n  });\n  projectResponseGraph.height = 190;\n  projectResponseGraph.includeLegend = false;\n  projectResponseGraph.update();\n}, 1000);\n</script>", "</div>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.Register = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<div", ' id="errors"', ">", "</div>"),
        __.line = 2,
        __.col = 1,
        __.push("<form", ' class="form"', ">"),
        __.line = 3,
        __.col = 3,
        __.push("<div", ' id="creditsField"', ">"),
        __.line = 4,
        __.col = 5,
        __.push("<p", ">", "All new accounts get&nbsp;"),
        __.line = 5,
        __.col = 7,
        __.push("<span", ' class="green"', ">", "$15 in starting credit,", "</span>", "</p>"),
        __.line = 6,
        __.col = 5,
        __.push("<p", ">", "which is good for&nbsp;"),
        __.line = 7,
        __.col = 7,
        __.push("<span", ' class="green"', ">", "30 days of free service.", "</span>", "</p>", "</div>"),
        __.line = 8,
        __.col = 3,
        __.push("<div", ' id="githubSignupField"', ">"),
        __.line = 9,
        __.col = 5,
        __.push("<a", ' href="/github/auth"', ' id="signup-github"', ' class="wow github-btn"', ">", "Sign In With GitHub", "</a>"),
        __.line = 10,
        __.col = 5,
        __.push("<span", ' class="or"', ">", "or", "</span>", "</div>"),
        __.line = 11,
        __.col = 3,
        __.push("<div", ' id="usernameField"', ' class="form-field"', ">"),
        __.line = 12,
        __.col = 5,
        __.push("<label", ' for="username"', ' class="hidden small-text"', ">", "Username", "</label>"),
        __.line = 13,
        __.col = 5,
        __.push("<input", ' type="text"', ' name="username"', "/>", "</div>"),
        __.line = 14,
        __.col = 3,
        __.push("<div", ' id="firstNameField"', ' class="form-field"', ">"),
        __.line = 15,
        __.col = 5,
        __.push("<label", ' for="firstName"', ' class="hidden small-text"', ">", "First Name", "</label>"),
        __.line = 16,
        __.col = 5,
        __.push("<input", ' type="text"', ' name="firstName"', "/>", "</div>"),
        __.line = 17,
        __.col = 3,
        __.push("<div", ' id="lastNameField"', ' class="form-field"', ">"),
        __.line = 18,
        __.col = 5,
        __.push("<label", ' for="lastName"', ' class="hidden small-text"', ">", "Last Name", "</label>"),
        __.line = 19,
        __.col = 5,
        __.push("<input", ' type="text"', ' name="lastName"', "/>", "</div>"),
        __.line = 20,
        __.col = 3,
        __.push("<div", ' id="emailField"', ' class="form-field"', ">"),
        __.line = 21,
        __.col = 5,
        __.push("<label", ' for="email"', ' class="hidden small-text"', ">", "Email", "</label>"),
        __.line = 22,
        __.col = 5,
        __.push("<input", ' type="text"', ' name="email"', "/>", "</div>"),
        __.line = 23,
        __.col = 3,
        __.push("<div", ' id="passwordField"', ' class="form-field"', ">"),
        __.line = 24,
        __.col = 5,
        __.push("<label", ' for="password"', ' class="hidden small-text"', ">", "Password:", "</label>"),
        __.line = 25,
        __.col = 5,
        __.push("<input", ' type="password"', ' name="password"', "/>", "</div>"),
        __.line = 26,
        __.col = 3,
        __.push("<div", ' id="passwordConfirmField"', ' class="form-field"', ">"),
        __.line = 27,
        __.col = 5,
        __.push("<label", ' for="passwordConfirm"', ' class="hidden small-text"', ">", "Confirm Password:", "</label>"),
        __.line = 28,
        __.col = 5,
        __.push("<input", ' type="password"', ' name="passwordConfirm"', "/>", "</div>"),
        __.line = 29,
        __.col = 3,
        __.push("<input", ' type="submit"', ' value="Create Account"', ' id="input-submit"', ' class="wow"', "/>"),
        __.line = 30,
        __.col = 3,
        typeof includePromo == "boolean" && includePromo === !0 && (__.line = 31, __.col = 5, __.push("<div", ' id="promoField"', ' class="form-field"', ">"), __.line = 32, __.col = 7, __.push("<label", ' for="code"', ">", "Got a Promo Code?", "</label>"), __.line = 33, __.col = 7, typeof promoText == "undefined" && (__.line = 34, __.col = 9, promoText = ""), __.line = 35, __.col = 7, __.push("<input", ' type="text"', ' name="code"'), __.r.attrs({
            value: {
                v: promoText,
                e: 1
            }
        },
        __), __.push("/>", "</div>")),
        __.push("</form>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.SetPassword = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<div", ' id="errors"', ">", "</div>"),
        __.line = 2,
        __.col = 1,
        __.push("<form", ' class="form"', ">"),
        __.line = 3,
        __.col = 3,
        __.push("<p", ' class="small-text"', ">"),
        __.line = 4,
        __.col = 5,
        __.push("<span", ' style="padding-top:4px"', ' class="red-text rdot"', ">", "&bull;", "</span>"),
        __.line = 5,
        __.col = 5,
        __.push("Required Fields", "</p>"),
        __.line = 6,
        __.col = 3,
        __.push("<div", ' id="passwordCurrentField"', ' class="form-field"', ">"),
        __.line = 7,
        __.col = 5,
        __.push("<span", ' class="required"', ">", "&bull;", "</span>"),
        __.line = 8,
        __.col = 5,
        __.push("<label", ' for="passwordCurrent"', ' class="hidden small-text"', ">", "Current Password", "</label>"),
        __.line = 9,
        __.col = 5,
        __.push("<input", ' type="password"', ' name="passwordCurrent"', "/>", "</div>"),
        __.line = 10,
        __.col = 3,
        __.push("<div", ' id="passwordField"', ' class="form-field"', ">"),
        __.line = 11,
        __.col = 5,
        __.push("<span", ' class="required"', ">", "&bull;", "</span>"),
        __.line = 12,
        __.col = 5,
        __.push("<label", ' for="password"', ' class="hidden small-text"', ">", "New Password", "</label>"),
        __.line = 13,
        __.col = 5,
        __.push("<input", ' type="password"', ' name="password"', "/>", "</div>"),
        __.line = 14,
        __.col = 3,
        __.push("<div", ' id="passwordConfirmField"', ' class="form-field"', ">"),
        __.line = 15,
        __.col = 5,
        __.push("<span", ' class="required"', ">", "&bull;", "</span>"),
        __.line = 16,
        __.col = 5,
        __.push("<label", ' for="passwordConfirm"', ' class="hidden small-text"', ">", "Confirm Password", "</label>"),
        __.line = 17,
        __.col = 5,
        __.push("<input", ' type="password"', ' name="passwordConfirm"', "/>", "</div>"),
        __.line = 18,
        __.col = 3,
        __.push("<input", ' type="submit"', ' value="Change"', ' id="input-submit"', ' class="wow"', "/>", "</form>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.UserDelete = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<h3", ' class="popupTitle"', ">", "Confirm Account Deletion", "</h3>"),
        __.line = 2,
        __.col = 1,
        __.push("<form", ' class="form"', ">"),
        __.line = 3,
        __.col = 3,
        __.push("<h4", ">", "This action cannot be undone.", "</h4>"),
        __.line = 4,
        __.col = 3,
        __.push("<p", ">", "All data associated with your account will be deleted. Please type &quot;delete&quot; to continue.", "</p>"),
        __.line = 5,
        __.col = 3,
        __.push("<input", ' name="confirmation"', ' type="text"', ' class="text"', "/>"),
        __.line = 6,
        __.col = 3,
        __.push("<input", ' id="confirm"', ' type="submit"', ' value="Confirm"', ' class="create-btn wow"', "/>", "</form>"),
        __.line = 7,
        __.col = 1,
        __.push("<input", ' type="button"', ' value="CLOSE"', ' class="close"', "/>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.ApplyCancel = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<div", ' class="applyCancel"', ">"),
        __.line = 2,
        __.col = 3,
        __.push("<a", ' href="#"', ' class="greenLink apply"', ">", "apply", "</a>"),
        __.line = 3,
        __.col = 3,
        __.push("&nbsp;|&nbsp;"),
        __.line = 4,
        __.col = 3,
        __.push("<a", ' href="#"', ' class="greenLink cancel"', ">", "cancel", "</a>", "</div>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.ChoiceGroup = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) {
            __.line = 1,
            __.col = 1,
            __.push("<div", ' class="choiceGroup"', ">"),
            __.line = 2,
            __.col = 3;
            for (var c = 0; c < choices.length; c++) __.line = 3,
            __.col = 5,
            __.push("<div", ' class="choice"', ">"),
            __.line = 4,
            __.col = 7,
            __.push("<input", ' type="checkbox"'),
            __.r.attrs({
                id: {
                    v: "choice" + c,
                    e: 1
                },
                name: {
                    v: "choice" + c,
                    e: 1
                },
                value: {
                    v: choices[c].value,
                    e: 1
                }
            },
            __),
            __.push("/>"),
            __.line = 5,
            __.col = 7,
            __.push("<label"),
            __.r.attrs({
                "for": {
                    v: "choice" + c,
                    e: 1
                }
            },
            __),
            __.push(">", __.r.escape(choices[c].label)),
            __.line = 6,
            __.col = 9,
            typeof choices[c].info != "undefined" && (__.line = 7, __.col = 11, __.push("&nbsp;"), __.line = 8, __.col = 11, __.push("<span", ' class="info"', ">", __.r.escape(choices[c].info), "</span>")),
            __.push("</label>", "</div>");
            __.push("</div>")
        }
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.Confirm = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.r.func("confirmDialog",
        function(a, b) {
            a.line = 2,
            a.col = 3,
            a.push("<h3"),
            a.r.attrs({
                id: {
                    v: this.id
                },
                "class": {
                    a: "popupTitle",
                    v: this.classes
                }
            },
            a),
            a.push(">", a.r.escape(b), "</h3>"),
            a.line = 3,
            a.col = 3,
            a.push("<form", ' class="form"', ">"),
            a.line = 4,
            a.col = 5,
            a.push("<label", ' for="confirmation"', ">", "Please Type &quot;delete&quot;", "</label>"),
            a.line = 5,
            a.col = 5,
            a.push("<input", ' name="confirmation"', ' type="text"', ' class="text"', "/>"),
            a.line = 6,
            a.col = 5,
            a.push("<input", ' id="confirm"', ' type="submit"', ' value="Confirm"', ' class="create-btn wow"', "/>", "</form>"),
            a.line = 7,
            a.col = 3,
            a.push("<input", ' type="button"', ' value="CLOSE"', ' class="close"', "/>")
        },
        __)
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.Graph = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        typeof error == "string" && (__.line = 2, __.col = 3, __.push("<div", ' class="error"', ">", __.r.escape(error), "</div>")),
        __.line = 3,
        __.col = 1,
        __.push("<div", ' class="graph-holder"', ">", "</div>"),
        __.line = 4,
        __.col = 1,
        __.push("<div", ' class="graph-legend"', ">", "</div>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.InlineEdit = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<div", ' title="Click to Edit"', ' class="inlineEdit valueDisplay"', ">"),
        __.line = 2,
        __.col = 3,
        __.push("<span", ' class="valueText"', ">", __.r.escape(value), "</span>"),
        __.line = 3,
        __.col = 3,
        __.push("<a", ' href="#"', ' class="editLink hidden"', ">", "Edit", "</a>", "</div>"),
        __.line = 4,
        __.col = 1,
        __.push("<div", ' style="display: none;"', ' class="editValue"', ">"),
        __.line = 5,
        __.col = 3,
        __.push("<input", ' type="text"', ' class="value"'),
        __.r.attrs({
            value: {
                v: value,
                e: 1
            }
        },
        __),
        __.push("/>"),
        __.line = 6,
        __.col = 3,
        __.push("<input", ' type="button"', ' class="save"', "/>"),
        __.line = 7,
        __.col = 3,
        __.push("<input", ' type="button"', ' class="cancel"', "/>", "</div>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.Loading = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<div", ' class="loading-holder"', ">"),
        __.line = 2,
        __.col = 3,
        __.push("<div", ' class="loading-ball"', ">", "</div>"),
        __.line = 3,
        __.col = 3,
        __.push("<div", ' class="loading-ball1"', ">", "</div>"),
        __.line = 4,
        __.col = 3,
        __.push("<p", ">", __.r.escape("" + ((__.z = text) == null ? "": __.z) + "&hellip;"), "</p>", "</div>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.NumberWidget = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<div", ' class="numberBox"', ">"),
        __.line = 2,
        __.col = 3,
        typeof preText != "string" && (__.line = 3, __.col = 3, preText = "", __.line = 4, __.col = 3),
        __.line = 5,
        __.col = 3,
        __.push("<span", ' class="preLabel"', ">", __.r.escape("" + ((__.z = preText) == null ? "": __.z) + ""), "</span>"),
        __.line = 6,
        __.col = 3,
        typeof value == "undefined" && (__.line = 7, __.col = 3, value = "0", __.line = 8, __.col = 3),
        __.line = 9,
        __.col = 3,
        typeof unit == "undefined" && (__.line = 10, __.col = 3, unit = "", __.line = 11, __.col = 3),
        __.line = 12,
        __.col = 3,
        __.push("<span", ' class="number fancyFont"', ">", __.r.escape("" + ((__.z = value) == null ? "": __.z) + "")),
        __.line = 13,
        __.col = 5,
        __.push("<span", ' class="unit"', ">", __.r.escape("" + ((__.z = unit) == null ? "": __.z) + ""), "</span>", "</span>"),
        __.line = 14,
        __.col = 3,
        typeof postText != "string" && (__.line = 15, __.col = 3, postText = "", __.line = 16, __.col = 3),
        __.line = 17,
        __.col = 3,
        __.push("<span", ' class="postLabel"', ">", __.r.escape("" + ((__.z = postText) == null ? "": __.z) + ""), "</span>", "</div>"),
        __.line = 18,
        __.col = 1,
        __.push("<div", ' class="widget"', ">", "</div>"),
        __.line = 19,
        __.col = 1,
        __.push("<div", ' class="error"', ">", "</div>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.ProgressBar = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<div", ' class="progressWrapper"', ">"),
        __.line = 2,
        __.col = 3,
        __.push("<div", ' class="progressBar"', ">", "</div>"),
        __.line = 3,
        __.col = 3,
        __.push("<div", ' class="leftLabel left"', ">", __.r.escape(minLabel), "</div>"),
        __.line = 4,
        __.col = 3,
        __.push("<div", ' class="rightLabel right"', ">", __.r.escape(maxLabel), "</div>", "</div>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.QuickAdd = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.r.func("quickAdd",
        function(a, b) {
            a.line = 2,
            a.col = 3,
            a.push("<form"),
            a.r.attrs({
                id: {
                    v: this.id
                },
                "class": {
                    a: "form",
                    v: this.classes
                }
            },
            a),
            a.push(">"),
            a.line = 3,
            a.col = 5,
            a.push("<div", ' class="items"', ">", "</div>"),
            a.line = 4,
            a.col = 5,
            typeof b != "undefined" && b.length > 0 && (a.line = 5, a.col = 7, a.push("<p", ' class="desc"', ">", a.r.escape(b), "</p>")),
            a.line = 6,
            a.col = 5,
            a.push("<input", ' name="saveItems"', ' type="submit"', ' value="SAVE"', ' class="wow"', "/>"),
            a.line = 7,
            a.col = 5,
            a.push("<span", ' class="saveResult hidden"', ">", "</span>", "</form>")
        },
        __)
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.QuickConfirm = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<div", ' class="message"', ">", "</div>"),
        __.line = 2,
        __.col = 1,
        __.push("<div", ' class="choices"', ">"),
        __.line = 3,
        __.col = 3,
        __.push("<input", ' name="ok"', ' type="button"', ' value="YES"', ' class="wow"', "/>"),
        __.line = 4,
        __.col = 3,
        __.push("<input", ' name="cancel"', ' type="button"', ' value="NO"', ' class="wow"', "/>", "</div>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.QuickName = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<div", ' class="inline-edit"', ">"),
        __.line = 2,
        __.col = 3,
        __.push("<div", ' title="Click to Edit"', ' class="name"', ">"),
        __.line = 3,
        __.col = 5,
        __.push("<span", ' class="nameText"', ">", __.r.escape("" + ((__.z = name) == null ? "": __.z) + ""), "</span>"),
        __.line = 4,
        __.col = 5,
        __.push("<a", ' href="#"', ' class="editLink hidden"', ">", "Edit", "</a>", "</div>"),
        __.line = 5,
        __.col = 3,
        __.push("<div", ' class="editName"', ">"),
        __.line = 6,
        __.col = 5,
        __.push("<input", ' type="text"', ' class="nameField"'),
        __.r.attrs({
            value: {
                v: name,
                e: 1
            }
        },
        __),
        __.push("/>"),
        __.line = 7,
        __.col = 5,
        __.push("<input", ' type="button"', ' class="saveName"', "/>"),
        __.line = 8,
        __.col = 5,
        __.push("<input", ' type="button"', ' class="cancelName"', "/>", "</div>", "</div>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.RealtimeToggle = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<div", ' class="realtime"', ">"),
        __.line = 2,
        __.col = 3,
        __.push("<div", ' class="realtime-toggle"', ">"),
        __.line = 3,
        __.col = 5,
        __.push("RealTime"),
        __.line = 4,
        __.col = 5,
        __.push("<div", ' class="toggle"', ">"),
        __.line = 5,
        __.col = 7,
        __.push("<div", ' class="slide"', ">", "</div>", "</div>", "</div>"),
        __.line = 6,
        __.col = 3,
        __.push("<div", ' class="lastUpdate"', ">"),
        __.line = 7,
        __.col = 5,
        __.push("Last Update&nbsp;"),
        __.line = 8,
        __.col = 5,
        __.push("<span", ">", "</span>", "</div>", "</div>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.tpls.Toggle = function anonymous(locals, cb, __) {
    __ = __ || [],
    __.r = __.r || blade.runtime,
    __.func || (__.func = {},
    __.blocks = {},
    __.chunk = {}),
    __.locals = locals || {};
    try {
        with(__.locals) __.line = 1,
        __.col = 1,
        __.push("<div", ' class="toggle toggleOn"', ">", "</div>")
    } catch(e) {
        return cb(__.r.rethrow(e, __))
    }
    __.inc || __.r.done(__),
    cb(null, __.join(""), __)
},
modulus.widgets.ChoiceGroup = Backbone.View.extend({
    template: modulus.tpls.ChoiceGroup,
    initialize: function(a) {
        this.choices = a.choices || [],
        this.render()
    },
    getSelected: function() {
        var a = [];
        return this.$el.find(".choice [type=checkbox]:checked").each(function(b) {
            a.push($(this).val())
        }),
        a
    },
    render: function() {
        var a = {
            choices: this.choices
        },
        b = this;
        this.template(a,
        function(a, c) {
            b.$el.html(c)
        })
    }
}),
modulus.widgets.DotDotDot = Backbone.View.extend({
    current: "",
    interval: null,
    initialize: function(a) {
        this.speed = a.speed || 500,
        this.character = a.character || "."
    },
    start: function() {
        this.stopping = !1,
        this.update(),
        this.interval = setInterval(this.update.bind(this), this.speed)
    },
    update: function() {
        this.current += this.character,
        this.current.length > 3 && (this.current = ""),
        this.$el.text(this.current)
    },
    clear: function() {
        this.current = "",
        this.$el.text("")
    },
    stop: function() {
        clearInterval(this.interval),
        this.clear()
    }
}),
modulus.widgets.Graph = Backbone.View.extend({
    template: modulus.tpls.Graph,
    loadingTemplate: modulus.tpls.Loading,
    height: 280,
    padding: 20,
    includeLegend: !0,
    initialize: function() {
        this.renderLoading()
    },
    update: function() {
        var a = this,
        b = 0;
        for (var c = 0; c < this.model.length; c++) this.model[c].fetch({
            success: function(c, d) {
                typeof d != "object" && (d = JSON.parse(d)),
                b++,
                a.model.length === b && a.render(d.error)
            }
        })
    },
    draw: function() {
        var a = [],
        b = null,
        c = _.filter(this.model,
        function(a) {
            return a.get("ref") === !0
        });
        c = c.length !== null ? c[0] : c;
        var d = c.get("data"),
        e = (new Date(c.get("xMin"))).getTime(),
        f = [],
        g = c.get("resolution");
        for (i = 0, len = this.model.length; i < len; i++) {
            var h = this.model[i].get("resolution") * 1e3 / 2;
            this.graph ? b = this.graph.series[i] : b = new mod.d3.Series,
            b.name = this.model[i].get("label"),
            b.data = _.filter(this.model[i].get("data"),
            function(a) {
                var b = (new Date(a.time)).getTime(),
                c = b - h >= e;
                return c || console.log(a.time + " " + e),
                c
            }),
            b.units = this.model[i].get("units"),
            b.type = this.model[i].get("visual"),
            this.model[i].get("tooltip") && (b.tooltip = this.model[i].get("tooltip")),
            a.push(b),
            f = f.concat(b.data)
        }
        var j = d3.max(f,
        function(a) {
            return a.value
        }),
        k = new Date(c.get("xMin")),
        l = new Date(c.get("xMax")),
        m = g * 1e3;
        k = k.setMilliseconds(k.getMilliseconds() - m),
        l = l.setMilliseconds(l.getMilliseconds() + m);
        var n = this.graph || new mod.d3.Graph;
        n.el = d3.select(this.$el.find(".graph-holder").get(0)),
        n.width = this.$el.width(),
        n.height = this.height,
        n.padding = this.padding,
        n.className = "graph",
        n.series = a,
        this.includeLegend && (n.legend = d3.select(this.$el.find(".graph-legend").get(0))),
        n.xAxis = {
            type: "time",
            min: k,
            max: l,
            ticks: 5
        },
        n.yAxis = {
            type: "pow",
            exponent: .6,
            min: 0,
            max: j,
            buffer: j * .1,
            ticks: 6,
            nice: !0
        },
        n.gridLines = {
            yColor: "#3a3a3a"
        },
        n.draw(),
        this.graph = n
    },
    render: function(a) {
        var b = this;
        return this.template({
            error: a
        },
        function(a, c) {
            b.$el.html(c),
            b.draw(),
            b.trigger("updated")
        }),
        this
    },
    renderLoading: function() {
        var a = this;
        return this.loadingTemplate({
            text: "Loading Graph"
        },
        function(b, c) {
            a.$el.html(c)
        }),
        this
    }
}),
modulus.widgets.InlineEdit = Backbone.View.extend({
    template: modulus.tpls.InlineEdit,
    events: {
        "click .valueDisplay": "edit",
        "click .save": "save",
        "click .cancel": "render",
        "keyup .value": "keyup"
    },
    initialize: function(a) {
        this.property = this.options.property || "name";
        var b = this;
        this.$(".valueDisplay").hover(function(a) {
            $(this).addClass("editLinkVisible"),
            b.$(".editLink").css("display", "block")
        },
        function(a) {
            $(this).removeClass("editLinkVisible"),
            b.$(".editLink").css("display", "none")
        }),
        Backbone.Validation.bind(this)
    },
    edit: function() {
        return this.$el.find(".valueDisplay").hide(),
        this.$el.find(".editValue").show(),
        this.$(".editValue .value").focus(),
        !1
    },
    keyup: function(a) {
        a.keyCode === 13 ? this.save() : a.keyCode == 27 && this.render()
    },
    save: function() {
        var a = this,
        b = {};
        return b[this.property] = this.$(".value").val(),
        this.model.set(b),
        this.model.validate(this.model.attributes),
        this.model.isValid() && this.model.save({},
        {
            success: function(b, c) { ! c.error && !c.errors && (a.trigger("saved"), a.render())
            }
        }),
        !1
    },
    render: function() {
        this.$el.empty();
        var a = this;
        return this.template({
            value: this.model.get(this.property)
        },
        function(b, c) {
            a.$el.html(c),
            a.initialize()
        }),
        !1
    }
}),
modulus.widgets.ItemList = Backbone.View.extend({
    itemView: null,
    _itemViews: [],
    initialize: function(a) {
        var b = this;
        a.itemView && (this.itemView = a.itemView, a.items && a.items.each(function(a) {
            b.addItem(a)
        }), this.render())
    },
    addItem: function(a) {
        this._itemViews.push(new this.itemView({
            model: a
        }))
    },
    render: function() {
        var a = this;
        this.$el.empty();
        var b = !0;
        _(this._itemViews).each(function(c) {
            a.$el.append(c.render().el),
            $(c.el).addClass(b ? "odd": "even"),
            b = !b
        })
    }
}),
modulus.views.number = Backbone.View.extend({
    property: "",
    preText: "",
    postText: "",
    widget: null,
    template: modulus.tpls.NumberWidget,
    format: function(a) {
        return {
            value: a,
            unit: ""
        }
    },
    initialize: function(a) {
        this.$el.addClass("numberWidget"),
        this.property = a.property || "",
        this.preText = a.preText,
        this.postText = a.postText,
        this.widget = a.widget || null,
        this.format = a.format || this.format,
        this.widget !== null && (this.widget.model = this.model, this.widget.properties = this.property, this.widget.on("render",
        function(a) {
            this.render()
        },
        this), this.widget.on("update",
        function(a) {
            this.update(a)
        },
        this), this.widget.initialize(), this.widget.ov = parseInt(this.model.get(this.property), 10)),
        this.update(parseInt(this.model.get(this.property), 10), !0)
    },
    update: function(a) {
        this.property instanceof Array == !1 && typeof this.model.get(this.property) != "object" && this.widget !== null && (this.model.set(this.property, a), this.widget.update(parseInt(a, 10), !0)),
        this.render(),
        this.trigger("update", a)
    },
    render: function() {
        var a = 0;
        if (this.property instanceof Array) for (var b = 0; b < this.property.length; b++) try {
            a += parseInt(this.model.get(this.property[b]), 10)
        } catch(c) {} else if (typeof this.model.get(this.property) == "object") {
            var d = this.model.get(this.property);
            for (var e in d) a += parseInt(d[e], 10)
        } else if (this.property.indexOf(".") > -1) {
            var d = this.property.split(".");
            a = this.model.get(d[0]);
            for (var b = 1; b < d.length; b++) a = a[d[b]]
        } else a = this.model.get(this.property);
        var f = this,
        g = this.format(a);
        return this.template({
            value: g.value,
            unit: g.unit,
            preText: this.preText,
            postText: this.postText
        },
        function(a, b) {
            f.$el.html(b),
            f.$(".error").hide(),
            f.widget !== null && (f.widget.el = f.$(".widget").selector, f.widget.$el = f.$(".widget"), f.widget.render())
        }),
        this
    },
    error: function(a) {
        this.$(".error").html(a),
        this.$(".error").show()
    }
}),
modulus.widgets.Popup = Backbone.View.extend({
    initialize: function(a) {
        this.$el.addClass("popup"),
        this.$("input.close").length < 1 && this.$el.prepend($('<input type="button"></input>').attr("value", "CLOSE").addClass("close"));
        var b = this;
        this.$el.overlay({
            top: a.top || 120,
            mask: {
                color: "#555",
                loadSpeed: 200,
                opacity: .79
            },
            onClose: function() {
                b.trigger("closed")
            }
        }),
        a.handler && a.handler.click(function(a) {
            b.open()
        }),
        this.$(".spinner").length < 1 && this.$el.prepend($("<div></div>").addClass("spinner")),
        this.spinner = new modulus.widgets.Spinner({
            el: this.$(".spinner")
        }),
        this.errorDiv = this.$(".error");
        if (this.errorDiv.length !== 1) {
            var c = '<div class="error"></div>';
            this.$(".popupTitle").length > 0 ? this.$(".popupTitle").after(c) : this.$el.prepend(c),
            this.errorDiv = this.$(".error")
        }
    },
    open: function() {
        this.$el.overlay().load(),
        this.errorDiv.css("display") !== "none" && this.errorDiv.hide(),
        this.trigger("opened")
    },
    working: function(a) {
        this.spinner.show(a)
    },
    done: function() {
        this.spinner.hide()
    },
    close: function() {
        this.$el.overlay().close(),
        this.trigger("closed"),
        this.done()
    },
    clear: function() {
        this.errorDiv.text(""),
        this.errorDiv.hide()
    },
    error: function(a) {
        this.done(),
        a = a || "There was an error processing your request.",
        this.errorDiv.text(a),
        this.errorDiv.show()
    }
}),
modulus.widgets.DeleteConfirm = modulus.widgets.Popup.extend({
    events: {
        "click #confirm": "confirm",
        "click [name=cancel]": "close"
    },
    initialize: function(a) {
        modulus.widgets.Popup.prototype.initialize.call(this, a)
    },
    confirm: function() {
        var a = this.$el.find("[name=confirmation]").val();
        return a.toLowerCase() === "delete" ? this.trigger("confirmed") : (this.trigger("error"), this.error('Please type "delete" in the confirmation text box.')),
        !1
    }
}),
modulus.widgets.SetPassword = modulus.widgets.Popup.extend({
    events: {
        "click #confirm": "confirm",
        "click [name=cancel]": "close"
    },
    initialize: function(a) {
        modulus.widgets.Popup.prototype.initialize.call(this, a)
    },
    confirm: function(a) {
        a.preventDefault && a.preventDefault();
        var b = this.$el.find("[name=password-new]").val(),
        c = this.$el.find("[name=password-confirm]").val(),
        d = this;
        return b.length === 0 ? (this.error("Password must not be empty."), this.trigger("error"), !1) : b !== c ? (this.error("Password fields must match."), this.trigger("error"), !1) : ($.ajax({
            type: "PUT",
            url: "/user/" + this.model.id + "/password?type=github",
            data: {
                password: b
            }
        }).done(function(a) {
            d.unlink(a)
        }), !1)
    },
    unlink: function(a) {
        typeof a == "string" && a.length > 0 && (a = JSON.parse(a)),
        a.error ? (this.error(a.error), this.trigger("error")) : (this.close(), window.location = "/github/unlink")
    }
}),
modulus.widgets.QuickConfirm = modulus.widgets.Popup.extend({
    events: {
        "click [name=ok]": "confirm",
        "click [name=cancel]": "close"
    },
    initialize: function(a) {
        modulus.widgets.Popup.prototype.initialize.call(this, a),
        this.$el.addClass("qconfirm")
    },
    open: function(a) {
        this.$(".message").html(a),
        modulus.widgets.Popup.prototype.open.call(this)
    },
    confirm: function() {
        this.trigger("ok")
    },
    close: function(a) { (typeof a != "boolean" || a === !1) && this.trigger("cancel"),
        modulus.widgets.Popup.prototype.close.call(this)
    }
}),
modulus.widgets.ProgressBar = Backbone.View.extend({
    current: 0,
    total: 0,
    minLabel: "Minimum",
    maxLabel: "Maximum",
    template: modulus.tpls.ProgressBar,
    initialize: function(a) {
        this.options = this.options || {},
        this.current = this.options.value || 0,
        this.total = this.options.total || 0,
        this.minLabel = this.options.minLabel || "Minimum",
        this.maxLabel = this.options.maxLabel || "Maximum"
    },
    update: function(a, b) {
        this.current = a,
        b || this.trigger("update", a),
        this.render(),
        this.current >= this.total && this.trigger("done")
    },
    render: function() {
        var a = this;
        this.template({
            minLabel: this.minLabel,
            maxLabel: this.maxLabel
        },
        function(b, c) {
            a.$el.html(c),
            a.$(".progressBar").css("width", a.$(".progressWrapper").width() / 100 * a.current / a.total * 100)
        })
    }
}),
modulus.widgets.QuickAdd = Backbone.View.extend({
    count: 0,
    vars: null,
    events: {
        "click [name=saveItems]": "save"
    },
    initialize: function(a) {
        this.vars = {},
        this.collection = a.collection || new Backbone.Collection,
        this.itemView = a.itemView || Backbone.View,
        _.isFunction(a.onAdd) && this.on("item:add", a.onAdd, this);
        for (var b = 0; b < this.collection.length; b++) this.addItem(this.collection.at(b), !0);
        this.collection.on("add", this.addItem, this),
        this.collection.on("save",
        function(a) {
            a instanceof Document || a.length === 0 ? (this.fadeMessage("Saved"), this.trigger("saved", this.collection.toJSON())) : _.isObject(a) && a.error ? this.error(a.error) : this.error("There was an issue saving.")
        },
        this),
        this.addNew()
    },
    addNew: function() {
        var a = new this.collection.model;
        this.addItem(a, !1);
        var b = this;
        a.on("change",
        function() {
            this.empty || (this.off("change"), b.collection.add(this, {
                silent: !0
            }), b.vars[this.id].removable = !0, b.vars[this.id].showRemove(!0), b.addNew())
        },
        a)
    },
    addItem: function(a, b) {
        this.count++,
        a.id = this.count,
        this.vars[this.count] = new this.itemView({
            model: a
        }),
        this.vars[a.id].removable = b,
        this.vars[this.count].on("remove", this.remove, this).on("invalid", this.error, this).on("valid", this.reset, this).render(this.$(".items")),
        this.trigger("item:add", this.vars[a.id])
    },
    remove: function(a) {
        a.off("change"),
        this.collection.remove(a)
    },
    save: function() {
        return this.reset(),
        this.collection.save(),
        !1
    },
    render: function(a) {
        this.$(".items").empty();
        for (var b in this.vars) this.vars[b].render(this.$(".items"))
    },
    fadeMessage: function(a) {
        this.$(".saveResult").stop().clearQueue().show(),
        this.$(".saveResult").html(a),
        this.$(".saveResult").fadeOut(3e3)
    },
    error: function(a) {
        this.$(".saveResult").addClass("error").html(a).show()
    },
    reset: function() {
        this.$(".saveResult").removeClass("error").empty().hide()
    }
}),
modulus.widgets.QuickAddItem = modulus.views.AutoUpdate.extend({
    silentUpdates: !1,
    removable: !0,
    elementId: null,
    initialize: function(a) {
        this.events["click ." + this.removeClass] = "remove",
        modulus.views.AutoUpdate.prototype.initialize.call(this, a)
    },
    render: function(a) {
        var b = this;
        this.template({
            id: this.model.id
        },
        function(c, d) {
            a.append(d),
            b.el = a.find(b.elementId)[0],
            b.$el = $(b.el),
            b.delegateEvents(b.events),
            b.setupPlaceholders(),
            b.fillFields(),
            b.showRemove(b.removable)
        })
    },
    showRemove: function(a) {
        a ? this.$("." + this.removeClass).show() : this.$("." + this.removeClass).hide()
    },
    remove: function() {
        this.$el.remove(),
        this.trigger("remove", this.model)
    }
}),
modulus.widgets.QuickName = Backbone.View.extend({
    template: modulus.tpls.QuickName,
    events: {
        "click .name": "edit",
        "click .saveName": "save",
        "click .cancelName": "render",
        "keyup .nameField": "keyup"
    },
    initialize: function() {
        var a = this;
        this.$(".name").hover(function(b) {
            $(this).addClass("editLinkVisible"),
            a.$(".editLink").css("display", "block")
        },
        function(b) {
            $(this).removeClass("editLinkVisible"),
            a.$(".editLink").css("display", "none")
        }),
        Backbone.Validation.bind(this)
    },
    edit: function() {
        return this.$el.find(".name").hide(),
        this.$el.find(".editName").show(),
        this.$(".editName .nameField").focus(),
        !1
    },
    keyup: function(a) {
        a.keyCode === 13 ? this.save() : a.keyCode == 27 && this.render()
    },
    save: function() {
        var a = this;
        return this.model.set({
            name: this.$(".nameField").val().replace(/^\s+|\s+$/g, "")
        }),
        this.model.validate(this.model.attributes),
        this.model.isValid() && this.model.save({},
        {
            success: function(b, c) { ! c.error && !c.errors && a.render()
            }
        }),
        !1
    },
    render: function() {
        this.$el.empty();
        var a = this;
        return this.template({
            name: this.model.get("name")
        },
        function(b, c) {
            a.$el.html(c),
            a.initialize()
        }),
        !1
    }
}),
modulus.views.Refresher = Backbone.View.extend({
    elements: [],
    initialize: function(a) {
        a = a || {},
        this.interval = a.interval || 3e4,
        this.toggle = new modulus.widgets.Toggle({
            el: this.$(".toggle")
        }),
        this.toggleSlide = this.$(".toggle .slide"),
        this.toggleSlide.css("margin-left", this.$(".toggle").width() - this.toggleSlide.width() + "px"),
        this.toggle.on("change:off",
        function() {
            this.stop()
        },
        this),
        this.toggle.on("change:on",
        function() {
            this.start()
        },
        this),
        this.updateTime()
    },
    add: function(a) {
        a.on("updated",
        function() {
            this.ready = !0
        },
        a),
        a.ready = !1,
        a.ticks = 0,
        this.elements.push(a)
    },
    start: function() {
        var a = this;
        this.loop = setInterval(function() {
            a.update()
        },
        this.interval)
    },
    stop: function() {
        clearInterval(this.loop)
    },
    setInterval: function(a) {
        this.stop(),
        this.interval = a,
        this.start()
    },
    formatTime: d3.time.format("%x %I:%M:%S %p"),
    updateTime: function() {
        var a = this.formatTime(new Date);
        this.$(".lastUpdate span").html(a)
    },
    update: function() {
        for (var a = 0; a < this.elements.length; a++) this.elements[a].ticks++,
        this.elements[a].ready && (this.elements[a].update(), this.elements[a].ready = !1);
        this.updateTime()
    }
}),
modulus.widgets.slider = Backbone.View.extend({
    v: 0,
    ov: 0,
    slider: $('<input type="range"/>'),
    template: modulus.tpls.ApplyCancel,
    confirmed: !0,
    initialize: function(a) {
        this.options = this.options || {};
        var b = this;
        this.options.change = function(a, c) {
            b.update(c)
        },
        this.options.updateOnSlide && this.options.updateOnSlide === !0 && (this.options.onSlide = function(a, c) {
            b.update(c)
        })
    },
    update: function(a, b) {
        a !== this.ov && this.options.confirm && this.confirmed === !0 && (this.confirmed = !1, this.ov = this.v),
        this.v = a,
        b || this.trigger("update", a)
    },
    apply: function() {
        this.confirmed = !0,
        this.ov = this.v,
        this.$(".applyCancel").hide(),
        this.trigger("apply", this.v)
    },
    cancel: function() {
        this.confirmed = !0,
        this.update(this.ov),
        this.$(".applyCancel").hide(),
        this.trigger("cancel", this.ov)
    },
    render: function() {
        this.slider.attr("value", this.v);
        if (this.options.confirm) {
            var a = this;
            this.template({},
            function(b, c) {
                a.$el.html(c),
                a.$el.prepend(a.slider),
                a.$(".apply").click(function() {
                    return a.apply(),
                    !1
                }),
                a.$(".cancel").click(function() {
                    return a.cancel(),
                    !1
                }),
                a.confirmed && a.$(".applyCancel").hide()
            })
        } else this.$el.html(this.slider);
        this.slider.rangeinput(this.options)
    }
}),
modulus.widgets.Spinner = Backbone.View.extend({
    template: modulus.tpls.Loading,
    initialize: function() {
        this.$el.hide();
        var a = this;
        this.template({
            text: ""
        },
        function(b, c) {
            a.$el.html(c),
            a.$el.prepend($("<div></div>").addClass("overlay"))
        })
    },
    show: function(a) {
        this.$("p").text(a),
        this.$el.show();
        var b = this.$(".loading-holder");
        b.css("margin-top", this.$el.height() / 2 - b.height() / 2)
    },
    hide: function() {
        this.$el.hide()
    }
}),
modulus.widgets.Toggle = Backbone.View.extend({
    state: !0,
    events: {
        click: "toggle"
    },
    initialize: function() {
        this.$el.addClass("toggle toggleOn"),
        this.toggleSlide = this.$(".slide"),
        this.toggleSlide.length !== 1 && delete this.toggleSlide,
        this.speed = 200
    },
    toggle: function() {
        if (this.state) {
            this.state = !1,
            this.$el.removeClass("toggleOn").addClass("toggleOff"),
            this.trigger("change:off");
            var a = this;
            this.toggleSlide && this.toggleSlide.animate({
                marginLeft: "-1px"
            },
            this.speed)
        } else this.state = !0,
        this.$el.removeClass("toggleOff").addClass("toggleOn"),
        this.trigger("change:on"),
        this.toggleSlide && this.toggleSlide.animate({
            marginLeft: this.$el.width() - this.toggleSlide.width() + "px"
        },
        this.speed)
    }
}),
modulus.widgets.Tweetbox = Backbone.View.extend({
    template: modulus.tpls.Tweet,
    events: {
        "keyup .tweettext": "update",
        "click #tweetit": "open"
    },
    overClass: "toomany",
    initialize: function(a) {
        this.$el.children().length === 0 ? this.render() : this.setup()
    },
    setup: function() {
        this.$(".title .text").text(this.options.title || "Spread it like Peanut Butter"),
        this.options.titleSize && this.$(".title").css("font-size", this.options.titleSize + "px"),
        this.defaultText = this.options.
    default || "Tweet about it",
        this.$(".tweettext").val(this.defaultText),
        this.options.height && this.$(".tweettext").css("height", this.options.height + "px"),
        this.update()
    },
    update: function() {
        var a = this.$(".tweettext").val().length,
        b = this.$(".count").text(a);
        a > 140 ? b.addClass(this.overClass) : b.hasClass(this.overClass) && b.removeClass(this.overClass)
    },
    reset: function() {
        this.$(".tweettext").val(this.defaultText)
    },
    open: function() {
        var a = this.$(".tweettext").val();
        this.trigger("tweet", a);
        var b = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(a),
        c = window.open(b, "_blank");
        return c.focus(),
        !1
    },
    render: function() {
        var a = this;
        this.template({},
        function(b, c) {
            a.$el.html(c),
            a.setup()
        })
    }
}),
modulus.views.ContactUs = modulus.views.AutoUpdate.extend({
    template: modulus.tpls.ContactUs,
    fieldPrefix: "contact",
    placeholders: {
        contactemail: "Email",
        contactmessage: "Message"
    },
    events: {
        "click [name=submitContact]": "submit"
    },
    initialize: function(a) {
        a = a || {},
        a.submitLabel && (this.submitLabel = a.submitLabel, this.$("[name=submitContact]").val(this.submitLabel)),
        modulus.views.AutoUpdate.prototype.initialize.call(this, a)
    },
    submit: function() {
        return this.model.set("email", this.$el.find("[name=contactemail]").val()),
        this.model.set("message", this.$el.find("[name=contactmessage]").val()),
        this.model.isValid() && (_metrics.trigger("Feedback:Email", this.$el.find("[name=contactmessage]").val()), this.sent(), this.model.save(this.model.attributes)),
        !1
    },
    sent: function() {
        var a = this;
        modulus.tpls.ContactThankYou({},
        function(b, c) {
            a.$el.html(c),
            a.trigger("sent")
        })
    },
    render: function() {
        var a = this;
        this.template({},
        function(b, c) {
            a.$el.html(c),
            a.submitLabel && a.$("[name=submitContact]").val(a.submitLabel)
        })
    },
    reset: function() {
        this.model.clear({
            silent: !0
        }),
        this.render()
    }
}),
modulus.views.Feedback = Backbone.View.extend({
    template: modulus.tpls.BetaCode,
    events: {
        "click #openFeedback": "open"
    },
    initialize: function(a) {
        this.$(".popup").overlay({
            top: 120,
            mask: {
                color: "#555",
                loadSpeed: 200,
                opacity: .79
            }
        });
        var b = 175;
        this.$("#openFeedback").hover(function(a) {
            $(this).stop().clearQueue(),
            $(this).animate({
                width: 63
            },
            b)
        },
        function(a) {
            $(this).stop().clearQueue(),
            $(this).animate({
                width: 43
            },
            b)
        }),
        this.contactForm = new modulus.views.ContactUs({
            model: new modulus.models.Message,
            el: this.$(".popup .contactForm")[0],
            submitLabel: "Send"
        });
        var c = this;
        this.contactForm.on("sent",
        function() {
            c.contactForm.$(".thankyou").append("<br/>").append(c.$(".social")),
            c.$(".thankyou div").removeClass("social").css("margin-top", "10px"),
            c.$(".thankyou div a:last").css("margin-right", "0")
        })
    },
    open: function() {
        return this.$(".thankyou div").removeAttr("style").addClass("social").appendTo(this.$(".popup")),
        this.$(".social a:last").css("margin-right", "20px"),
        this.contactForm.reset(),
        this.model && this.$(".popup .contactForm [name=contactemail]").val(this.model.get("email")),
        this.contactForm.initialize(),
        this.$(".popup").overlay().load(),
        !1
    }
});
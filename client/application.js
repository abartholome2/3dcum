// startup code here

var Router = Backbone.Router.extend({
    routes: {
        ""                : "main",
        ":page"           : "main",
        "session/:id"     : "session"
    },

    main: function(page) {
        document.body.innerHTML = "";
        page = page?page:"home";
        Session.set('page', page);
        var frag = Meteor.render(function() {
            var i = Template[page]?Template[page]():Template.notfound();
            return i;
        });
        document.body.appendChild(frag);
    },
});

var app = new Router;
Meteor.startup(function () {
    Backbone.history.start({pushState: true});
    Session.set('page_url', location.pathname);
});

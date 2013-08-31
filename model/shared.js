Content = function(name) {
    this.name     = name;
    this.features = [];
}

Feature = function(name) {
    this.title        = name;
    this.html         = '';
    this.thumbnail    = '*';
    this.content_id   = null;
    this.date_created = null;
    this.date_modified = null;
    this.rating       = 0;
}

Contents = new Meteor.Collection('contents');
Features = new Meteor.Collection('features');

if (Meteor.isServer) {
    Meteor.publish('contents', function() {
        return Contents.find();
    });
    Meteor.publish('features', function() {
        return Features.find();
    });

    var initMock = function() {
        Contents.remove({});
        Features.remove({});

        var mockc = new Content('muzak');
        var cid = Meteor.call('add_content', mockc);
        for (var i=0; i<5; i++) {
            var mockf   = new Feature('test'+i.toString());
            mockf.html  = "<h1>gorb " + i.toString() + "</h1>";
            mockf.content_id = cid;
            mockf.rating = i;
            Meteor.call('add_feature', mockf);
        }
    }

    Meteor.startup(function() {
        initMock();
    });
}

if (Meteor.isClient) {
    Meteor.autorun(function() {

        Meteor.subscribe('contents');
        Meteor.subscribe('features');
        Meteor.subscribe('userData');
    });
}

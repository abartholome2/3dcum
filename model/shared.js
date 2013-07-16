GameSessions      = new Meteor.Collection('sessions');
Games             = new Meteor.Collection('games');
GameContents      = new Meteor.Collection('gamecontents');

if (Meteor.isServer) {
}

if (Meteor.isClient) {
    Meteor.autorun(function() {

        Meteor.subscribe('sessions');
        Meteor.subscribe('games');
        Meteor.subscribe('gamecontents');
        Meteor.subscribe('userData');
    });
}

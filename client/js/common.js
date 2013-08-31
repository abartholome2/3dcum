Template.content.html = function() {
    return Template[Session.get('page')]();
}

Template.feature_entry.events({
    'click .upvote' : function(obj) {
        Meteor.call('upvote_feature', obj.toElement.id);
    },
    'click .downvote' : function(obj) {
        Meteor.call('downvote_feature', obj.toElement.id);
    }
});

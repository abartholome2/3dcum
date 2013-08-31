Template.muzak.features = function() {
    return Session.get('feature_list');
}

Template.muzak.created = function() {
    Meteor.call('fetch_content_features', 'muzak', function(error, result) {
        Session.set('feature_list', result);
    });
}

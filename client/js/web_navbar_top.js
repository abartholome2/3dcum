
var isActive = function(page) {
    if (Session.get('page') == page) { return true; }
    return false;
};

Template.web_navbar_top.home_active = function() {
    return isActive('home');
};

Template.web_navbar_top.dashboard_active = function() {
    return isActive('dashboard');
};

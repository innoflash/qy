define(["app", "js/restaurant/restaurantView"], function (app, View) {
    var $ = jQuery;
    var $$ = Dom7;

    var bindings = [
    ];

    function init() {
        app.f7.panel.close();
        initPage();
        //    loginPopup.open();
        View.render({
            bindings: bindings
        });
    }

    function initPage() {
        app.f7.dialog.preloader('Loading Restaurant');
        setTimeout(function () {
            app.f7.dialog.close();
        }, 2000);
    }

    return {
        init: init
    };
});
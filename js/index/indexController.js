define(["app", "js/index/indexView"], function (app, View) {
    var $ = jQuery;
    var $$ = Dom7;

    var bindings = [
        {
            element: '#btnSignIn',
            event: 'click',
            handler: emailAuth
        }, {
            element: '#fromHere',
            event: 'click',
            handler: fromHere
        }, {
            element: '#fromSomewhere',
            event: 'click',
            handler: fromSomewhere
        }
    ];

    function init() {
        app.f7.panel.close();
        initPopups();
        loginPopup.open();
        View.render({
            bindings: bindings
        });
    }

    function fromSomewhere() {
        app.f7.dialog.alert('Will open a page to select a location for your delivery');
    }

    function fromHere() {
        app.f7.dialog.preloader('Getting location');
        setTimeout(function () {
            app.f7.dialog.close();
        }, 2000);
    }

    function emailAuth() {
        loginPopup.close();
    }

    function initPopups() {
        loginPopup = app.f7.popup.create({
            el: '.popup-login',
            animate: true
        });
        registerPopup = app.f7.popup.create({
            el: '.popup-signup',
            animate: true
        });
        fgtPswdPopup = app.f7.popup.create({
            el: '.popup-forgot-password',
            animate: true
        });
    }


    return {
        init: init
    };
});
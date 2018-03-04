define(["app", "js/findfood/findfoodView"], function (app, View) {
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
        app.f7.dialog.preloader('Loading Restaurants');
        setTimeout(function () {
            app.f7.dialog.close();
        }, 2000);
        var searchbar = app.f7.searchbar.create({
            el: '.searchbar',
            searchContainer: '.restaurants-list',
            searchIn: '.restaurant-name',
            on: {
                search: function (sb, query, prevQuery) {
                    console.log(query);
                }
            }
        });
    }

    return {
        init: init
    };
});
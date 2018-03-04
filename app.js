require.config({
    paths: {
        handlebars: "lib/handlebars-v4.0.11",
        config: 'js/config',
        hbshelper: "js/hbshelper",
        text: "lib/text",
        hbs: "lib/hbs"
    },
    shim: {
        handlebars: {
            exports: "Handlebars"
        }
    }
});
define('app', ['js/router'], function (Router) {
    Router.init();

    var f7 = new Framework7({
        root: '#app',
        name: 'QwikYum',
        id: 'zw.co.flashtech.qwikyum',
        panel: {
            swipe: 'left',
        },
        routes: [
            {
                path: '/about',
                url: 'pages/template.html',
            },
            {
                path: '/home',
                url: 'index.html'
            }, {
                path: '/findfood',
                url: 'pages/findfood.html'
            },
            {
                path: '/restaurant/:id',
                url: 'pages/restaurant.html'
            }
        ],
        theme: 'ios',
        upscroller: {
            text: 'Go down',
            ignorePages: ['index']
        },
        dialog: {
            title: 'QwikYum',
        },
        statusbar: {
            iosOverlaysWebview: true
        },
        notification: {
            title: 'QwikYum',
            closeTimeout: 3000,
        }
    });

    var mainView = f7.views.create('.view-main', {
        dynamicNavbar: true
    });

    return {
        f7: f7,
        mainView: mainView,
        router: Router
    };
});
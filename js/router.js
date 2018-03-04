define(function() {
	var $ = Framework7.$;

	/**
	 * Init router, that handle page events
	 */

    function init() {
        $(document).on('page:init', function (e) {
            var page = e.detail;
            load(page.name, page.route.query);
        })
    }
	/**
	 * Load (or reload) controller from js code (another controller) - call it's init function
	 * @param controllerName
	 * @param query
	 */
	function load(controllerName, query) {
		require(['js/' + controllerName + '/'+ controllerName + 'Controller'], function(controller) {
			controller.init(query);
		});
	}

	return {
        init: init,
		load: load
    };
});
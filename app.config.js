(function() {
	'use strict';

	angular
		.module('app')
		.config(['$locationProvider', '$routeProvider', configRoutes]);

		function configRoutes($locationProvider, $routeProvider){
			$locationProvider.hashPrefix("");

			$routeProvider
			.when('/data',{
				template : '<common></common>'
			})
			.when('/edit/:contactId',{
				template : '<contactedit></contactedit>'
			})
			.when('/favourites',{
				template : '<favourites></favourites>'
			})
			.otherwise({
                redirectTo:'/data'
            });
		}
})();
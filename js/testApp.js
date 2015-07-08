//;(function(){
	'use strict';

	angular
		.module('testApp', ['ngRoute',
							'testApp.home',
							'testApp.Pikachu',
							'testApp.Charmonder',
							'testApp.Psaudak'
				])
		.config (['$routeProvider', '$locationProvider', Config]);
		
		//Config.$inject = ['$routeProvider'];

		function Config ($routeProvider, $locationProvider){
			$routeProvider
				.otherwise({redirectTo: '/'});
			$locationProvider.html5Mode(true);
		}

//})();
//;(function(){
	'use strict';

	angular
		.module('testApp.Pikachu', ['ngRoute'])
		.config(['$routeProvider', function($routeProvider){
			$routeProvider
				.when('/Pikachu',{
	                templateUrl: 'template/Pikachu.html',
	                controller: 'PikachuCtrl'
	            });
		}])
		.controller('PikachuCtrl',['$scope', function($scope){
				$scope.power = "special ability is Static, which can cause paralysis in battle if hit by a physical move";			
				$scope.img = "img/pikachu.png";
		}]);

	//PikachuCtrl.$inject = ];

	/*function PikachuCtrl($scope){
		$scope.title = "Hello";
	}

	function config($routeProvider){
		$routeProvider
			.when('/Pikachu',{
                templateUrl: 'template/Pikachu.html',
                controller: 'PikachuCtrl'
            });
	}*/

//})();
	'use strict';

	angular
		.module('testApp.Psaudak', ['ngRoute'])
		.config(['$routeProvider', function($routeProvider){
			$routeProvider
				.when('/Psaudak',{
	                templateUrl: 'template/Psaudak.html',
	                controller: 'PsaudakCtrl'
	            });
		}])
		.controller('PsaudakCtrl',['$scope', function($scope){
				$scope.power = "Psyduck can have either the ability Damp, Damp is an ability that will prevent the opponent from self destructing";			
				$scope.img = "img/Psyduck.jpg";
		}]);
	'use strict';

	angular
		.module('testApp.Charmonder', ['ngRoute'])
		.config(['$routeProvider', function($routeProvider){
			$routeProvider
				.when('/Charmonder',{
	                templateUrl: 'template/Charmonder.html',
	                controller: 'CharmonderCtrl'
	            });
		}])
		.controller('CharmonderCtrl',['$scope', function($scope){
				$scope.power = "Charmander has the ability Blaze, which allows their Fire-type attacks to cause 150% more damage if their health drops below 30%";	
				$scope.img = "img/charmonder.png";		
		}]);
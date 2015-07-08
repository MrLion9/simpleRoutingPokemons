	'use strict';

	angular
		.module('testApp.home', ['ngRoute'])
		.config(['$routeProvider', function($routeProvider){
			$routeProvider
				.when('/',{
	                templateUrl: 'template/home.html',
	                controller: 'homeCtrl'
	            });
		}])
		.controller('homeCtrl',['$scope', function($scope){
				$scope.home = "home!";			
		}]);
'use strict';

/* Controllers */

var testApp = angular.module('testApp', ['ngRoute']);

testApp
       .config(['$routeProvider', '$locationProvider',
          function( $routeProvider, $locationProvider ){
            $routeProvider
              .when('/pokemons',{
                templateUrl: 'template/home.html',
                controller: 'pokemonCtrl'
              })
              .when('/pokemons/Pikachu',{
                templateUrl: 'template/contact.html',
                controller: 'PikachuCtrl'
              })
              .when('/pokemons/Charmonder',{
                templateUrl: 'template/contact.html',
                controller: 'CharmonderCtrl'
              })
              .when('/pokemons/Psaudak',{
                templateUrl: 'template/contact.html',
                controller: 'PsaudakCtrl'
              })

              .otherwise({
                redirectTo: '/'
              });
          }]);


testApp
        .controller('pokemonCtrl',['$scope','$http', '$location', function($scope, $http, $location) {
            /*console.log('$location.url() - ', $location.url());
            console.log('$location.path() - ', $location.path());
            console.log('$location.search() - ', $location.search());
            console.log('$location.hash() - ', $location.hash());*/

            $http.get('pokemons.json').success(function(data, status, headers, config) {
              console.log(data);
              $scope.pokemons = data.pokemons;

            });
}]);

testApp
      .controller('PikachuCtrl',['$scope','$http', '$location', function($scope, $http, $location) {
        
}]);

testApp
      .controller('CharmonderCtrl',['$scope','$http', '$location', function($scope, $http, $location) {
        
}]);

testApp
      .controller('PsaudakCtrl',['$scope','$http', '$location', function($scope, $http, $location) {
        
}]);
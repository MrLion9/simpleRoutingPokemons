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
                templateUrl: 'template/Pikachu.html',
                controller: 'PikachuCtrl'
              })
              .when('/pokemons/Charmonder',{
                templateUrl: 'template/Charmonder.html',
                controller: 'CharmonderCtrl'
              })
              .when('/pokemons/Psaudak',{
                templateUrl: 'template/Psaudak.html',
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

              $scope.pokemons = [
                {
                "name": "pikachu",
                "superPower": 
                    "special ability is Static, which can cause paralysis in battle if hit by a physical move"
                },

                {
                  "name": "charmonder",
                  "superPower": 
                      "Charmander has the ability Blaze, which allows their Fire-type attacks to cause 150% more damage if their health drops below 30%"
                },

                {
                  "name": "psaudak",
                  "superPower": 
                      "Psyduck can have either the ability Damp, Damp is an ability that will prevent the opponent from self destructing"
                }
              ];

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
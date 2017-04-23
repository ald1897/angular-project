'use strict';

angular.module('myApp.sports', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sports', {
    templateUrl: 'sports/sports.html',
    controller: 'sportsCtrl'
  });
}])

.controller('sportsCtrl', [function() {

}]);
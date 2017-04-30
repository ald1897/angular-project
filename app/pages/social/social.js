'use strict';

angular.module('myApp.social', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/social', {
    templateUrl: 'social/social.html',
    controller: 'socialCtrl'
  });
}])

.controller('socialCtrl', [function() {

}]);
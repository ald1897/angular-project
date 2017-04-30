'use strict';

angular.module('myApp.sports', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sports', {
    templateUrl: 'sports/sports.html',
    controller: 'sportsCtrl'
  });
}])

.controller('sportsCtrl', [function($scope) {
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/files/samples/javascript_learn_apis.xml", false);

xhr.setRequestHeader('Content-Type', 'text/xml');
xhr.send();

xmlDocument = xhr.responseXML;
console.log(xmlDocument.childNodes['0'].textContent);
}]);


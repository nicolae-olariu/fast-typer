'use strict';

angular
  .module('typeracerApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/race', {
        templateUrl: 'views/race.html',
        controller: 'RaceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

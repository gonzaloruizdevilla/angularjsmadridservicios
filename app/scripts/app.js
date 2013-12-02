'use strict';

angular.module('angularJsmadridServiciosApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'hljs'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/ej0', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/ej1', {
        templateUrl: 'views/ej1.html',
        controller: 'Ej1Ctrl'
      })
      .when('/ej2', {
        templateUrl: 'views/ej2.html',
        controller: 'Ej2Ctrl'
      })
      .when('/ej3', {
        templateUrl: 'views/ej3.html',
        controller: 'Ej3Ctrl'
      })
      .when('/ej4', {
        templateUrl: 'views/ej4.html',
        controller: 'Ej4Ctrl'
      })
      .when('/ej5', {
        templateUrl: 'views/ej5.html',
        controller: 'Ej5Ctrl'
      })
      .when('/ej6', {
        templateUrl: 'views/ej6.html',
        controller: 'Ej6Ctrl'
      })
      .when('/ej7', {
        templateUrl: 'views/ej7.html',
        controller: 'Ej7Ctrl'
      })
      .when('/ej8', {
        templateUrl: 'views/ej8.html',
        controller: 'Ej8Ctrl'
      })
      .when('/ej9', {
        templateUrl: 'views/ej9.html',
        controller: 'Ej9Ctrl'
      })
      .when('/ej10', {
        templateUrl: 'views/ej10.html',
        controller: 'Ej10Ctrl'
      })
      .when('/ej11', {
        templateUrl: 'views/ej11.html',
        controller: 'Ej11Ctrl'
      })
      .when('/ej12', {
        templateUrl: 'views/ej12.html',
        controller: 'Ej12Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

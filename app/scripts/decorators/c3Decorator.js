'use strict';

angular.module('angularJsmadridServiciosApp')
  .config(function ($provide) {
    $provide.decorator('c3', function ($delegate) {
      var furlongsPorMetro = 201.168;
      return $delegate / furlongsPorMetro;
    });
  })
  .config(function ($provide) {
    $provide.decorator('c3', function ($delegate) {
      var rodsPorFurlong = 40;
      return $delegate * rodsPorFurlong;
    });
  });
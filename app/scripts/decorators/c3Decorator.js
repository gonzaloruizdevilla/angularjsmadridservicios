'use strict';

angular.module('angularJsmadridServiciosApp')
  .config(function ($provide) {
    $provide.decorator('c3', function ($delegate) {
      var metrosPorFurlong = 201.168;
      return $delegate / metrosPorFurlong;
    });
  })
  .config(function ($provide) {
    $provide.decorator('c3', function ($delegate) {
      var rodsPorFurlong = 40;
      return $delegate * rodsPorFurlong;
    });
  });
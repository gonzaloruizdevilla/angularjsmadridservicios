'use strict';

angular.module('angularJsmadridServiciosApp')
  .config(function ($provide) {
    $provide.decorator('c2', function ($delegate) {
      var furlongsPorMetro = 201.168;
      return $delegate / furlongsPorMetro;
    });
  });

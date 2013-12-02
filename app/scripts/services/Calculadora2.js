'use strict';

angular.module('angularJsmadridServiciosApp')
  .factory('Calculadora2', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });

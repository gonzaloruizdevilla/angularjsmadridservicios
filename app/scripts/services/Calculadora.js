'use strict';

angular.module('angularJsmadridServiciosApp')
  .service('Calculadora', function Calculadora() {
    this.suma = function () {
      return [].reduce.call(arguments,
        function(acc, val){return acc + val;},
        0);
    };
  });
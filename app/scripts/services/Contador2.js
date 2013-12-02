'use strict';

angular.module('angularJsmadridServiciosApp')
  .factory('Contador2', function () {
    var cuenta = 0;

    function total(){
      return cuenta;
    }

    function click(){
      cuenta++;
    }

    return {
      total: total,
      click: click
    };

  });

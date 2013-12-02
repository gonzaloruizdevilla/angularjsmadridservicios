(function (){
  'use strict';
  var cuenta = 0;
  function total(){
    return cuenta;
  }
  function click(){
    cuenta++;
  }

  angular.module('angularJsmadridServiciosApp')
  .factory('Contador3', function () {
    return {
      total: total,
      click: click
    };
  });
}());

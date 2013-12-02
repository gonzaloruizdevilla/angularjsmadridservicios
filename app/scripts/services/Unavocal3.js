'use strict';

angular.module('angularJsmadridServiciosApp')
  .config(function($provide) {
    var dialecto = 'a';
    function setDialecto(s){
      dialecto = s;
    }
    function traduce(s) {
      return s && s.replace(/[aeiou]/ig, dialecto);
    }
    $provide.provider('Unavocal3', {
      setDialecto: setDialecto,
      $get: function () {
        return {
          traduce: traduce
        };
      }
    });
  });
'use strict';

angular.module('angularJsmadridServiciosApp')
  .provider('Unavocal2', function () {
    var dialecto = 'a';

    this.setDialecto = function (s){
      dialecto = s;
    };

    function traduce(s) {
      return s && s.replace(/[aeiou]/ig, dialecto);
    }

    // Method for instantiating
    this.$get = function () {
      return {
        traduce: traduce
      };
    };
  });

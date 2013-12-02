'use strict';

angular.module('angularJsmadridServiciosApp')
  .provider('Unavocal', function () {
    function traduce(s) {
      return s && s.replace(/[aeiou]/ig, 'a');
    }

    // Method for instantiating
    this.$get = function () {
      return {
        traduce: traduce
      };
    };
  });

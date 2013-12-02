'use strict';

angular.module('angularJsmadridServiciosApp')
  .controller('MainCtrl', function ($scope, Calculadora) {
    $scope.total1 = Calculadora.suma(1,2);
    $scope.total2 = Calculadora.suma(1,2,3);
    $scope.total3 = Calculadora.suma(1,2,3,4);
  });

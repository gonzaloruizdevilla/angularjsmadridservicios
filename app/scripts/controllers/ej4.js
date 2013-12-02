'use strict';

angular.module('angularJsmadridServiciosApp')
  .controller('Ej4Ctrl', function ($scope, Contador) {
    $scope.total = function () {
      return Contador.total();
    };
    $scope.click = function () {
      Contador.click();
    };
  });

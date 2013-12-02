'use strict';

angular.module('angularJsmadridServiciosApp')
  .controller('Ej5Ctrl', function ($scope, Contador) {
    $scope.total = Contador.total;
    $scope.click = Contador.click;
  });

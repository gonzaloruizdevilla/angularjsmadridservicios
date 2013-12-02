'use strict';

angular.module('angularJsmadridServiciosApp')
  .controller('Ej6Ctrl', function ($scope, Contador2) {
    $scope.total = Contador2.total;
    $scope.click = Contador2.click;
  });

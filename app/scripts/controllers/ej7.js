'use strict';

angular.module('angularJsmadridServiciosApp')
  .controller('Ej7Ctrl', function ($scope, Unavocal) {
    $scope.traduce = Unavocal.traduce;
  });

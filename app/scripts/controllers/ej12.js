'use strict';

angular.module('angularJsmadridServiciosApp')
  .controller('Ej12Ctrl', function ($scope, $log) {
    $scope.model = {};
    $scope.log = function (){
      if ($scope.model.mensaje) {
        $log.debug($scope.model.mensaje);
        $log.warn($scope.model.mensaje);
        $log.info($scope.model.mensaje);
        $scope.model.mensaje = '';
      }
    };
  });

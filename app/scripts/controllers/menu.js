'use strict';

angular.module('angularJsmadridServiciosApp')
  .controller('MenuCtrl', function ($scope, $location) {
    $scope.menu = [
      'Home',
      'Calculadora',
      'Constant',
      'Value',
      'Service',
      'Service 2',
      'Factory',
      'Provider',
      'Provider 2',
      'Provider 3',
      'Decorator',
      'Decorator 2',
      'Decorator 3'
    ];

    $scope.active = function (index){
      var path = $location.path();
      if (!index){
        return path === '/' || path === '/ej0';
      }
      return path === ('/ej' + index);
    };
  });

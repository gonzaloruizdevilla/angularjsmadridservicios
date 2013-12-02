'use strict';

describe('Controller: Ej10Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularJsmadridServiciosApp'));

  var Ej10Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Ej10Ctrl = $controller('Ej10Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

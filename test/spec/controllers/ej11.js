'use strict';

describe('Controller: Ej11Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularJsmadridServiciosApp'));

  var Ej11Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Ej11Ctrl = $controller('Ej11Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Service: Contador', function () {

  // load the service's module
  beforeEach(module('angularJsmadridServiciosApp'));

  // instantiate service
  var Contador;
  beforeEach(inject(function (_Contador_) {
    Contador = _Contador_;
  }));

  it('should do something', function () {
    expect(!!Contador).toBe(true);
  });

});

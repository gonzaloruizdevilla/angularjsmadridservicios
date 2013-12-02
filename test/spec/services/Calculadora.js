'use strict';

describe('Service: Calculadora', function () {

  // load the service's module
  beforeEach(module('angularJsmadridServiciosApp'));

  // instantiate service
  var Calculadora;
  beforeEach(inject(function (_Calculadora_) {
    Calculadora = _Calculadora_;
  }));

  it('should do something', function () {
    expect(!!Calculadora).toBe(true);
  });

});

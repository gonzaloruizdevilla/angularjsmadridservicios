'use strict';

describe('Service: Contador2', function () {

  // load the service's module
  beforeEach(module('angularJsmadridServiciosApp'));

  // instantiate service
  var Contador2;
  beforeEach(inject(function (_Contador2_) {
    Contador2 = _Contador2_;
  }));

  it('should do something', function () {
    expect(!!Contador2).toBe(true);
  });

});

'use strict';

describe('Service: Contador3', function () {

  // load the service's module
  beforeEach(module('angularJsmadridServiciosApp'));

  // instantiate service
  var Contador3;
  beforeEach(inject(function (_Contador3_) {
    Contador3 = _Contador3_;
  }));

  it('should do something', function () {
    expect(!!Contador3).toBe(true);
  });

});

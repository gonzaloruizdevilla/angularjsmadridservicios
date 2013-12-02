'use strict';

describe('Service: Unavocal', function () {

  // load the service's module
  beforeEach(module('angularJsmadridServiciosApp'));

  // instantiate service
  var Unavocal;
  beforeEach(inject(function (_Unavocal_) {
    Unavocal = _Unavocal_;
  }));

  it('should do something', function () {
    expect(!!Unavocal).toBe(true);
  });

});

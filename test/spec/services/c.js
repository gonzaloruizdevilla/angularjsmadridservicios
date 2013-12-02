'use strict';

describe('Service: C', function () {

  // load the service's module
  beforeEach(module('angularJsmadridServiciosApp'));

  // instantiate service
  var c;
  beforeEach(inject(function (_c_) {
    c = _c_;
  }));

  it('should do something', function () {
    expect(!!c).toBe(true);
  });

});

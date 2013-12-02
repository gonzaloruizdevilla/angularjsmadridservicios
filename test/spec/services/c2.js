'use strict';

describe('Service: c2', function () {

  // load the service's module
  beforeEach(module('angularJsmadridServiciosApp'));

  // instantiate service
  var c2;
  beforeEach(inject(function (_c2_) {
    c2 = _c2_;
  }));

  it('should do something', function () {
    expect(!!c2).toBe(true);
  });

});

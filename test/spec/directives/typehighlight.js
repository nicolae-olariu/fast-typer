'use strict';

describe('Directive: typehighlight', function () {

  // load the directive's module
  beforeEach(module('typeracerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<typehighlight></typehighlight>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the typehighlight directive');
  }));
});

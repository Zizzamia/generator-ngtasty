'use strict';

describe('Directive: <%= cameledName %>', function () {

  // load the directive's module
  beforeEach(module('ngMock'));
  beforeEach(module('<%= scriptAppName %>.component.<%= cameledName %>'));
  beforeEach(module('<%= scriptAppName %>.tpls.<%= cameledName %>.<%= cameledName %>'));
  
  var $scope, element;
  beforeEach(inject(function ($rootScope, $compile) {
    $scope = $rootScope.$new();
    element = angular.element('<<%= slugifyName %>></<%= slugifyName %>>');
    element = $compile(element)($scope);
  }));

  it('should render the component without no errors', function () {
    $scope.$digest();
  });

  it('should have these element.scope() value as default', function () {
    $scope.$digest();
    expect(element.scope().text).toBe('This is the myComponent directive');
  });
});

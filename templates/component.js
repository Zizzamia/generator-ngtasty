'use strict';

/**
 * @ngdoc directive
 * @name ngTasty.component.<%= cameledName %>
 * @description
 * # <%= cameledName %>
 */
angular.module('ngTasty.component.<%= cameledName %>')
  .directive('<%= cameledName %>', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the <%= cameledName %> directive');
      }
    };
  });
  
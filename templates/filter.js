'use strict';

/**
 * @ngdoc filter
 * @name ngTasty.filter.<%= cameledName %>
 * @function
 * @description
 * # <%= cameledName %>
 * Filter in the ngTasty.
 */
angular.module('ngTasty.filter.<%= cameledName %>')
  .filter('<%= cameledName %>', function () {
    return function (input) {
      return '<%= cameledName %> filter: ' + input;
    };
  });
  
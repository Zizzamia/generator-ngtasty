'use strict';

/**
 * @ngdoc service
 * @name ngTasty.service.<%= cameledName %>
 * @description
 * # <%= cameledName %>
 * Factory in the ngTasty.
 */
angular.module('ngTasty.service.<%= cameledName %>')
  .factory('<%= cameledName %>', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });

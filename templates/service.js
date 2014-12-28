/**
 * @ngdoc service
 * @name <%= scriptAppName %>.service.<%= cameledName %>
 * @description
 * # <%= cameledName %>
 * Factory in <%= scriptAppName %>.
 */
angular.module('<%= scriptAppName %>.service.<%= cameledName %>', [])
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

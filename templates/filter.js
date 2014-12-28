/**
 * @ngdoc filter
 * @name <%= scriptAppName %>.filter.<%= cameledName %>
 * @function
 * @description
 * # <%= cameledName %>
 * Filter in <%= scriptAppName %>.
 */
angular.module('<%= scriptAppName %>.filter.<%= cameledName %>', [])
.filter('<%= cameledName %>', function () {
  return function (input) {
    return '<%= cameledName %> filter: ' + input;
  };
});
  
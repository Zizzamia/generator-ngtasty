/**
 * @ngdoc directive
 * @name <%= scriptAppName %>.component.<%= cameledName %>
 * @description
 * # <%= cameledName %>
 */
angular.module('<%= scriptAppName %>.component.<%= cameledName %>', [])
.directive('<%= cameledName %>', function () {
  return {
    template: 'template/<%= slugifyName %>/<%= slugifyName %>.html',
    restrict: 'E',
    link: function postLink(scope, element, attrs) {
      element.text('this is the <%= cameledName %> directive');
    }
  };
});
  
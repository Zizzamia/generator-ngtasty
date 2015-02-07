/**
 * @ngdoc directive
 * @name <%= scriptAppName %>.component.<%= cameledName %>
 * @description
 * # <%= cameledName %>
 */
angular.module('<%= scriptAppName %>.component.<%= cameledName %>', [])
.directive('<%= cameledName %>', function () {
  return {
    restrict: 'E',
    templateUrl: 'template/<%= slugifyName %>/<%= slugifyName %>.html',
    link: function postLink(scope, element, attrs) {
      scope.text = 'This is the myComponent directive';
    }
  };
});
  

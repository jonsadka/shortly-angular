angular.module('shortly.redirect', [])

.controller('RedirectController', function ($scope, Links, Auth, $routeParams) {
  $scope.redir = function(){
    console.log("Redirect Controler rediredct.js");
    console.log($routeParams.code);
    if ($routeParams.code){
      Links.redirectLink($routeParams.code);
    } else {
      Links.allLinks();
    }
  };
  $scope.redir();
});

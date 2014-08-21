angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth, $routeParams) {
  $scope.data = {};
  $scope.getLinks = function(){
    console.log('Link Controller fired');
    console.log($routeParams.code);
    if ( $routeParams.code && $routeParams.code.length === 5 ){
      Links.redirectLink($routeParams.code);
    } else {
      Links.allLinks()
      .then(function(result){
       $scope.data.links = result.data;
      });
    }
  };
  $scope.getLinks();
});

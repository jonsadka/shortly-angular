angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth, $routeParams) {
  $scope.data = {};
  $scope.getLinks = function(){
    Links.allLinks($routeParams)
    .then(function(result){
      $scope.data.links = result.data;
    });
  };
  $scope.getLinks();
})

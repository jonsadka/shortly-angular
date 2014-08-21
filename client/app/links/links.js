angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  $scope.data = {};
  $scope.getLinks = function(){
    Links.allLinks()
    .then(function(result){
      $scope.data.links = result.data;
    });
  };
  $scope.getLinks(); })

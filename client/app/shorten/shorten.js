angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.link.url = "Please Enter URL";
  $scope.loading = false;
  // add properties to scope.link
  $scope.addLink = function(){
    Links.addLink($scope.link);
  }
});

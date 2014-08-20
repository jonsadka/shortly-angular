angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.name = 'Chris'
  $scope.getLinks = function(){};
  $scope.changeName = function(){
    $scope.name === 'Chris'? $scope.name = 'Jon': $scope.name = 'Chris';
  }
});

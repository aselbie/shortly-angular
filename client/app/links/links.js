angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  $scope.data = {};

  $scope.getLinks = function(){
    Links.getLinks()
    .success(function(data){
      $scope.data.links = data;
    });
  };

  $scope.getLinks();


});





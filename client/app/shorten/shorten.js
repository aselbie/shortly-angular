angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $http, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(url){
    $http({
      method: 'POST',
      url: '/api/links',
      data: {
        url: url
      }
    })
    .then(function(){
      $location.path('/links');
    });
  };
});

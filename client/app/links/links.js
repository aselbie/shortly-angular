angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  $scope.data = {};

  $scope.getLinks = function(){
    Links.getLinks()
    .success(function(data){
      $scope.data.links = data;
      var ctx = document.getElementById("chart").getContext("2d");
      for (var i = 0; i < $scope.data.links.length; i++) {
        $scope.data.links[i].value = $scope.data.links[i].visits;
        $scope.data.links[i].color = getRandomColor();
        $scope.data.links[i].label = $scope.data.links[i].title;
      }
      var newChart = new Chart(ctx).Pie($scope.data.links);
    })
    .then(function(){
      $scope.apply();
    });
  };



  $scope.getLinks();

});


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


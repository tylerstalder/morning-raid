var app = angular.module('morning-raid', []);

// "Main" method
app.run(function($rootScope) {
  $rootScope.name = "Tyler";
});

app.controller('CurrentRide', function($scope) {
  $scope.start = function() {};
  $scope.join = function() {};
});

app.controller('Rides', function($scope, $http) {
  $http({
    method: 'GET',
    url: '/rides'
  }).success(function(data, status) {
    $scope.schedule = data;
  }).error(function(data, status) {
    //errors
  });
});

app.controller('Leaderboard', function($scope, $http) {
  $http({
    method: 'GET',
    url: '/leaderboard'
  }).success(function(data, status) {
    $scope.riders = data;
  }).error(function(data, status) {
    //errors
  });
});


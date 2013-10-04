var app = angular.module('morning-raid', []);

// "Main" method
app.run(function($rootScope) {
  $rootScope.name = "Tyler";
});

app.controller('CurrentRide', function($scope) {
  $scope.profile = "https://a248.e.akamai.net/camo.github.com/8dcafcfa097bbbd020552074b67bf4725e3ed82c/687474703a2f2f662e636c2e6c792f6974656d732f337431523244313232623233307a3333324e306e2f656c65766174696f6e2d737061726b2e706e67";

  $scope.start = function(rider) {
    var opts = {name: 'raid', date: new Date()};
    $http({
      method: 'PUT',
      url: '/api/rides',
      data: opts
    }).success(function(data, status) {
      console.log(data);
      console.log('ride starting NOW!');
    }).error(function(data, status) {
      console.log(data, status);
    });
  };

  $scope.join = function() {};
});

app.controller('Rides', function($scope, $http) {
  $http({
    method: 'GET',
    url: '/api/rides'
  }).success(function(data, status) {
    $scope.schedule = data;
  }).error(function(data, status) {
    //errors
  });
});

app.controller('Leaderboard', function($scope, $http) {
  $http({
    method: 'GET',
    url: '/api/leaderboard'
  }).success(function(data, status) {
    $scope.riders = data;
  }).error(function(data, status) {
    //errors
  });
});


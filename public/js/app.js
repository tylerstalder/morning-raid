var app = angular.module('morning-raid', []);

// "Main" method
app.run(function($rootScope) {
  $rootScope.name = "Tyler";
});

app.controller('User', function($scope, $http) {

  navigator.id.watch({
    onlogin: function(assertion) {
      // A user has logged in! Here you need to:
      // 1. Send the assertion to your backend for verification and to create a session.
      // 2. Update your UI.
      console.log('Trying to log in');
      $http({
        method: 'POST',
        url: '/auth/login', // This is a URL on your website.
        data: {assertion: assertion}})
      .success( function(data, status) {
        $scope.user = data.email;
        console.log(data.email + ' logged in.');
      })
      .error( function(data, status) {
        console.log("Login failure");
      });
    },
    onlogout: function() {
      // A user has logged out! Here you need to:
      // Tear down the user's session by redirecting the user or making a call to your backend.
      // Also, make sure loggedInUser will get set to null on the next page load.
      // (That's a literal JavaScript null. Not false, 0, or undefined. null.)
      console.log('Trying to log out');
      $http({
        method: 'POST',
        url: '/auth/logout'})
      .success(function(data, status) {
        $scope.user = null;
        console.log('Logged out');
      })
      .error(function(data, status) {
        console.log("Logout failure");
      });
    }
  });

  $scope.login = function() {
    navigator.id.request();
  };

  $scope.logout = function() {
    navigator.id.logout();
  };
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


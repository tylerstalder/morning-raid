var app = angular.module('morning-raid', []);

// "Main" method
app.run(function($rootScope) {
  $rootScope.name = "Tyler";
});

app.controller('MyController', function($scope) {
  $scope.person = {
    name: "Tyler"
  };
});

var schedule = [
  { date: '07/18/2013' },
  { date: '07/25/2013' },
  { date: '08/01/2013' },
  { date: '08/08/2013' , attendees: ['mls']},
  { date: '08/15/2013' , attendees: ['tjs','dbb','sms','mls','jorge','eric']},
  { date: '08/22/2013' , attendees: []},
  { date: '08/29/2013' , attendees: ['tjs','dbb','sms','mls','jorge','eric']},
  { date: '09/05/2013' , attendees: ['tjs']}
];

var leaderboard = [
  { name: 'Tyler', initials: 'tjs' },
  { name: 'Tyler', initials: 'tjs' },
  { name: 'Tyler', initials: 'tjs' },
  { name: 'Tyler', initials: 'tjs' }
];

app.controller('Rides', function($scope) {
  $scope.schedule = schedule;
});

app.controller('Leaderboard', function($scope) {
  $scope.riders = leaderboard;
});


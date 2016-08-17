var app = angular.module('servicesWorkshop', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl : 'templates/messages.html',
      controller : 'MessagesController'
    })
    .otherwise({
      redirectTo: '/'
    });
  $locationProvider.html5Mode(true);
})

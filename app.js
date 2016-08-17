var app = angular.module('servicesWorkshop', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl : 'templates/messages.html',
      controller : 'MessagesController'
    })
    .otherwise('/', {
      templateUrl : 'templates/messages.html',
      controller : 'controllers/messages_controller.js'
    })
})

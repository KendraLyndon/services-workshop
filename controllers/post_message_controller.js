app.controller('PostMessageController', function ($scope, MessagesService, $location) {
  $scope.vw = {};
  $scope.vw.success = "Success!!"
  $scope.add = function(text){
    var message = {};
    message.text = text;
    MessagesService.add(message);
    $location.path('/');
  }
})

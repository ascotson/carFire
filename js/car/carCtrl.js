angular.module('carFire')
  .controller('carCtrl', function($scope, $firebaseArray, $firebaseObject, carRef, commentsRef){

    $scope.car = $firebaseObject(carRef);
    $scope.car.$bindTo($scope, 'car');

    $scope.comments = $firebaseArray(commentsRef);

    $scope.addComment = function(username, text){
      $scope.comments.$add({
        username: username,
        text: text
      });
    };

  });

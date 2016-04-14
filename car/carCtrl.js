angular.module('carFire')
  .controller('carCtrl', function($scope, carRef, commentsRef, $firebaseObject, $firebaseArray){

    var car = $firebaseObject(carRef);
    car.$bindTo($scope, 'car');

    $scope.comments = $firebaseArray(commentsRef);

    $scope.createComment = function(username, comment){
      $scope.comments.$add({
        username: username,
        comment: comment
      });
    };

  });

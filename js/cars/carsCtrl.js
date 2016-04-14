angular.module('carFire')
  .controller('carsCtrl', function($scope, $firebaseArray, carsRef){

    $scope.cars = $firebaseArray(carsRef);

    $scope.addCar = function(username, carname){
      $scope.cars.$add({
        username: username,
        carname: carname
      });
    };

  });

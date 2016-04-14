angular.module('carFire')
  .controller('carsCtrl', function($scope, carsRef, $firebaseArray){

    $scope.cars = $firebaseArray(carsRef);

    $scope.createCar = function(username, carname){
      $scope.cars.$add({
        username: username,
        carname: carname
      });
    };

  });

angular.module('carFire')
  .service('carsService', function(firebase){

    this.getCars = function(){  //will return a Firebase ref pointing to your app's collection of cars
      return new Firebase(firebase.url + '/cars');
    };

    this.getCar = function(carId){ //will return a Firebase ref pointing to a single car in the cars collection
      return new Firebase(firebase.url + '/cars/' + carId);
    };

    this.getComments = function(carId){ //will return a Firebase ref pointing to a collection of comments made for a single car
      return new Firebase(firebase.url + '/cars/' + carId + '/comments');
    };

  });

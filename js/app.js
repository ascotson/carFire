angular.module('carFire', ['ui.router','firebase'])

  .constant('firebase', {
    url: 'https://devmtn-carfire.firebaseio.com'
  })

  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('cars',{
        url: '/cars',
        templateUrl: 'js/cars/carsTmpl.html',
        controller: 'carsCtrl',
        resolve: {
          carsRef:  function(carsService){
            return carsService.getCars();
          }
        }
      })

      .state('car', {
        url: '/cars/:carId',
        templateUrl: 'js/car/carTmpl.html',
        controller: 'carCtrl',
        resolve: {
          carRef: function(carsService, $stateParams){
            return carsService.getCar($stateParams.carId);
          },
          commentsRef: function(carsService, $stateParams){
            return carsService.getComments($stateParams.carId);
          }
        }
      });

      $urlRouterProvider
        .otherwise('cars');

  });

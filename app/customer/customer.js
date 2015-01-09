'use strict';

angular.module('myApp.customer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/customer', {
    templateUrl: 'customer/customer.html',
    controller: 'customerCtrl'
  });
}])

.controller('customerCtrl', [function() {

}]);
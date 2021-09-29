'use strict'

import './users.css'

angular.module('myApp.users', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'views/users/users.js',
    controller: 'UsersCtrl'
  });
}])

.controller('UsersCtrl', [function() {

}]);
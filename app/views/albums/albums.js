'use strict'

angular.module('myApp.albums', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/albums', {
    templateUrl: 'views/albums/albums.js',
    controller: 'AlbumsCtrl'
  });
}])

.controller('AlbumsCtrl', [function() {

}]);
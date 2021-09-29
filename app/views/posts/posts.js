'use strict'

angular.module('myApp.posts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/posts', {
    templateUrl: 'views/posts/posts.js',
    controller: 'PostsCtrl'
  });
}])

.controller('PostsCtrl', [function() {

}]);
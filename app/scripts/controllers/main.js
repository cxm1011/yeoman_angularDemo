'use strict';

/**
 * @ngdoc function
 * @name yeomanAngularDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanAngularDemoApp
 */
angular.module('yeomanAngularDemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['Item 1','Item 2','Item 3'];
  });

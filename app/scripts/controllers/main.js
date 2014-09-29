'use strict';

/**
 * @ngdoc function
 * @name spoutinginApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spoutinginApp
 */
angular.module('spoutinginApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

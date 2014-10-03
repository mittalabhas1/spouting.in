/*
 * Author: @bhas (mittalabhas1@gmail.com) and V@m$he (vamshedhar@gmail.com)
*/

'use strict';

/**
 * @ngdoc function
 * @name spoutinginApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the spoutinginApp
 */
angular.module('spoutinginApp')
  .controller('AppCtrl', ['$scope', '$rootScope' , function ($scope, $rootScope) {

    $rootScope.global = {};

    $rootScope.global.products = {
      'category': [
        {
          'name': 'Spouting',
          'keyword': 'spouting'
        },
        {
          'name': 'a',
          'keyword': 'a'
        },
        {
          'name': 'b',
          'keyword': 'b'
        },
        {
          'name': 'c',
          'keyword': 'c'
        },
        {
          'name': 'd',
          'keyword': 'd'
        }
      ]
    };

  }]);

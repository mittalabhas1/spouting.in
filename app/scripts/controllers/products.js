/*
 * Author: @bhas (mittalabhas1@gmail.com) and V@m$he (vamshedhar@gmail.com)
*/

'use strict';

/**
 * @ngdoc function
 * @name spoutinginApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the spoutinginApp
 */
angular.module('spoutinginApp')
  .controller('ProductCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

    $scope.temps = {};

    var init = function(){
      if($stateParams.categoryId !== null && typeof $stateParams.categoryId !== undefined){
        if($stateParams.productId !== null && typeof $stateParams.productId !== undefined){
          $scope.show = 'product';
          $scope.temps.category = $stateParams.categoryId;
          $scope.temps.product = $stateParams.productId;
        } else{
          $scope.show = 'category';
          $scope.temps.category = $stateParams.categoryId;
        }
      } else{
        $scope.show = 'all';
      }
    };

    init();

  }]);

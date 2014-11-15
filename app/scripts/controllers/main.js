/*
 * Author: @bhas (mittalabhas1@gmail.com) and V@m$he (vamshedhar@gmail.com)
*/

'use strict';

/**
 * @ngdoc function
 * @name spoutinginApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the spoutinginApp
 */
angular.module('spoutinginApp')
  .controller('HomeCtrl', ['$scope', '$interval', function ($scope, $interval) {

    $scope.temps = {};
    $scope.slides = ['slide1', 'slide2', 'slide3'];

    $scope.currentIndex = 0;

    $scope.setCurrentSlideIndex = function (index) {
      $scope.currentIndex = index;
    };

    $scope.isCurrentSlideIndex = function (index) {
      return $scope.currentIndex === index;
    };

    $scope.prevSlide = function () {
      $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    };

    $scope.nextSlide = function () {
      $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    };

    $interval(function(){
      $scope.nextSlide();
    }, 2000);

  }])
  .animation('.slide-animation', function () {
    return {
      addClass: function (element, className, done) {
        if (className == 'ng-hide') {
            TweenMax.to(element, 0.5, {left: -element.parent().width(), onComplete: done });
        }
        else {
            done();
        }
      },
      removeClass: function (element, className, done) {
        if (className == 'ng-hide') {
          element.removeClass('ng-hide');
          TweenMax.set(element, { left: element.parent().width() });
          TweenMax.to(element, 0.5, {left: 0, onComplete: done });
        }
        else {
          done();
        }
      }
    };
  });

/*
 * Author: @bhas (mittalabhas1@gmail.com) and V@m$he (vamshedhar@gmail.com)
*/

'use strict';

/**
 * @ngdoc overview
 * @name spoutinginApp
 * @description
 * # spoutinginApp
 *
 * Main module of the application.
 */
var app = angular.module('spoutinginApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, will redirect to /
  $urlRouterProvider.otherwise("/");

  // Setting up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/home.html",
      controller: 'HomeCtrl'
    });
});

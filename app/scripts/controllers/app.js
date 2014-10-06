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
          'name': 'Plantsifter Accessories',
          'keyword': 'plantsifter-accessories'
        },
        {
          'name': 'Perforated Sheets',
          'keyword': 'perforated-sheets'
        },
        {
          'name': 'Pneumatic Accessories',
          'keyword': 'pneumatic-accessories'
        },
        {
          'name': 'Knobs & Handles',
          'keyword': 'knobs-and-handles'
        },
        {
          'name': 'Driving Elements',
          'keyword': 'driving-elements'
        },
        {
          'name': 'Elevator & Conveyor Spares',
          'keyword': 'elevator-and-conveyor-spares'
        },
        {
          'name': 'Pulse Jet Bag Filter Accessories',
          'keyword': 'pulse-jet-bag-filter-accessories'
        },
        {
          'name': 'Miscellaneous',
          'keyword': 'miscellaneous'
        }
      ],
      'plantsifter-accessories': {
        'name': 'Plantsifter Accessories',
        'products': [
          {
            'name': 'Cotton Pads',
            'keyword': 'Cotton Pads',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Namda Roll',
            'keyword': 'Namda Roll',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Rubber Ring',
            'keyword': 'Rubber Ring',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Paper Tape',
            'keyword': 'Paper Tape',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Plantsifter Box',
            'keyword': 'Plantsifter Box',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Plantsifter Bag',
            'keyword': 'Plantsifter Bag',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Plantsifter Frame',
            'keyword': 'Plantsifter Frame',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Plantsifter Oval Ball (Dholak)',
            'keyword': 'Plantsifter Oval Ball (Dholak)',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Separator Ball',
            'keyword': 'Separator Ball',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Staple Gun',
            'keyword': 'Staple Gun',
            'description': 'dsfsdfsdfsdf'
          },,
          {
            'name': 'Triangular Brush',
            'keyword': 'Triangular Brush',
            'description': 'dsfsdfsdfsdf'
          },
        ],
      },
      'perforated-sheets': {
        'name': 'Perforated Sheets',
        'products': [
          {
            'name': 'Round Hole Type',
            'keyword': 'Round Hole Type',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Rectangular Hole Type',
            'keyword': 'Rectangular Hole Type',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Sloted Hole Type',
            'keyword': 'Sloted Hole Type',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Dimple Type',
            'keyword': 'Dimple Type',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Triangular Hole Type',
            'keyword': 'Triangular Hole Type',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Stainless Steel Wire Mesh',
            'keyword': 'Stainless Steel Wire Mesh',
            'description': 'dsfsdfsdfsdf'
          },
        ],
      },
      'pneumatic-accessories': {
        'name': 'Pneumatic Accessories',
        'products': [
          {
            'name': 'Air Lock',
            'keyword': 'Air Lock',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Acrylic Glass',
            'keyword': 'Acrylic Glass',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Lift Pipe',
            'keyword': 'Lift Pipe',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Lift Bend',
            'keyword': 'Lift Bend',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Rubber Sleeve',
            'keyword': 'Rubber Sleeve',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Pneumatic Cyclone',
            'keyword': 'Pneumatic Cyclone',
            'description': 'dsfsdfsdfsdf'
          },
        ],
      },
      'spouting': {
        'name': 'Spouting',
        'products': [
          {
            'name': 'Pipe',
            'keyword': 'Pipe',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Divider',
            'keyword': 'Divider',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Inspection (T)',
            'keyword': 'Inspection (T)',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Elbow',
            'keyword': 'Elbow',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Pipe Segment',
            'keyword': 'Pipe Segment',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Universal Bend',
            'keyword': 'Universal Bend',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Branch Pipe (Y)',
            'keyword': 'Branch Pipe (Y)',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Inspection with Hinged Door',
            'keyword': 'Inspection with Hinged Door',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Sleeve',
            'keyword': 'Sleeve',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Bend 90 Degree',
            'keyword': 'Bend 90 Degree',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Tension Ring',
            'keyword': 'Tension Ring',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Bagging Spout',
            'keyword': 'Bagging Spout',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Bag Clamps',
            'keyword': 'Bag Clamps',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Dead Box',
            'keyword': 'Dead Box',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'View Glass',
            'keyword': 'View Glass',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Tension Ring',
            'keyword': 'Tension Ring',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Magnets',
            'keyword': 'Magnets',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Rotameter',
            'keyword': 'Rotameter',
            'description': 'dsfsdfsdfsdf'
          },
        ],
      },
      'elevator-and-conveyor-spares': {
        'name': 'Elevator & Conveyor Spares',
        'products': [
          {
            'name': 'Elevator Belting',
            'keyword': 'Elevator Belting',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'MS Buckets',
            'keyword': 'MS Buckets',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'PVC Buckets',
            'keyword': 'PVC Buckets',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Elevator Bolts',
            'keyword': 'Elevator Bolts',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Elevator Top',
            'keyword': 'Elevator Top',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Elevator Bottom',
            'keyword': 'Elevator Bottom',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Elevator Box',
            'keyword': 'Elevator Box',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Rubberized Pulley',
            'keyword': 'Rubberized Pulley',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Bearings',
            'keyword': 'Bearings',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Screw Flights',
            'keyword': 'Screw Flights',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Drag Chain Conveyor Links',
            'keyword': 'Drag Chain Conveyor Links',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Conveyor Belting',
            'keyword': 'Conveyor Belting',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Bush Bearing',
            'keyword': 'Bush Bearing',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Hanger Bearing',
            'keyword': 'Hanger Bearing',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Conveyor Blades',
            'keyword': 'Conveyor Blades',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Conveyor Inspection Window Clamps',
            'keyword': 'Conveyor Inspection Window Clamps',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Idler Roller',
            'keyword': 'Idler Roller',
            'description': 'dsfsdfsdfsdf'
          },
        ],
      },
      'pulse-jet-bag-filter-accessories': {
        'name': 'Pulse Jet Bag Filter Accessories',
        'products': [
          {
            'name': 'Filter Cages',
            'keyword': 'filter-cages',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Filter Bags',
            'keyword': 'filter-bags',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Solenoid Valve',
            'keyword': 'solenoid-valve',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Sequential Timer Box',
            'keyword': 'sequential-timer-box',
            'description': 'dsfsdfsdfsdf'
          },
        ],
      },
    };

  }]);

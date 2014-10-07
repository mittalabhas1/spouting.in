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
            'name': 'Cotton Pad',
            'keyword': 'cotton-pad',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Namda Roll',
            'keyword': 'namda-roll',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Rubber Ring',
            'keyword': 'rubber-ring',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Paper Tape',
            'keyword': 'paper-tape',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Plantsifter Box',
            'keyword': 'plantsifter-box',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Plantsifter Bag',
            'keyword': 'plantsifter-bag',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Plantsifter Frame',
            'keyword': 'plantsifter-frame',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Plantsifter Oval Ball (Dholak)',
            'keyword': 'plantsifter-oval-ball-dholak',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Separator Ball',
            'keyword': 'separator-ball',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Staple Gun',
            'keyword': 'staple-gun',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Triangular Brush',
            'keyword': 'triangular-brush',
            'description': 'dsfsdfsdfsdf'
          },
        ],
      },
      'perforated-sheets': {
        'name': 'Perforated Sheets',
        'products': [
          {
            'name': 'Round Hole Type',
            'keyword': 'round-hole-type',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Rectangular Hole Type',
            'keyword': 'rectangular-hole-type',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Slotted Hole Type',
            'keyword': 'slotted-hole-type',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Dimple Type',
            'keyword': 'dimple-type',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Triangular Hole Type',
            'keyword': 'triangular-hole-type',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Stainless Steel Wire Mesh',
            'keyword': 'stainless-steel-wire-mesh',
            'description': 'dsfsdfsdfsdf'
          },
        ],
      },
      'pneumatic-accessories': {
        'name': 'Pneumatic Accessories',
        'products': [
          {
            'name': 'Air Lock',
            'keyword': 'air-lock',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Acrylic Glass',
            'keyword': 'acrylic-glass',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Lift Pipe',
            'keyword': 'lift-pipe',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Lift Bend',
            'keyword': 'lift-bend',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Rubber Sleeve',
            'keyword': 'rubber-sleeve',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Pneumatic Cyclone',
            'keyword': 'pneumatic-cyclone',
            'description': 'dsfsdfsdfsdf'
          },
        ],
      },
      'spouting': {
        'name': 'Spouting',
        'products': [
          {
            'name': 'Pipe',
            'keyword': 'pipe',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Divider',
            'keyword': 'divider',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Inspection (T)',
            'keyword': 'inspection-t',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Elbow',
            'keyword': 'elbow',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Pipe Segment',
            'keyword': 'pipe-segment',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Universal Bend',
            'keyword': 'universal-bend',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Branch Pipe (Y)',
            'keyword': 'branch-pipe-y',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Inspection with Hinged Door',
            'keyword': 'inspection-with-hinged-door',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Sleeve',
            'keyword': 'sleeve',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Bend 90 Degree',
            'keyword': 'bend-90-degree',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Tension Ring',
            'keyword': 'tension-ring',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Bagging Spout',
            'keyword': 'bagging-spout',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Bag Clamps',
            'keyword': 'bag-clamps',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Dead Box',
            'keyword': 'dead-box',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'View Glass',
            'keyword': 'view-glass',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Tension Ring',
            'keyword': 'tension-ring',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Magnet',
            'keyword': 'magnet',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Rotameter',
            'keyword': 'rotameter',
            'description': 'dsfsdfsdfsdf'
          },
        ],
      },
      'elevator-and-conveyor-spares': {
        'name': 'Elevator & Conveyor Spares',
        'products': [
          {
            'name': 'Elevator Belting',
            'keyword': 'elevator-belting',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'MS Bucket',
            'keyword': 'ms-bucket',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'PVC Buckets',
            'keyword': 'pvc-buckets',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Elevator Bolt',
            'keyword': 'elevator-bolt',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Elevator Top',
            'keyword': 'elevator-top',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Elevator Bottom',
            'keyword': 'elevator-bottom',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Elevator Box',
            'keyword': 'elevator-box',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Rubberized Pulley',
            'keyword': 'rubberized-pulley',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Bearings',
            'keyword': 'bearings',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Screw Flights',
            'keyword': 'screw-flights',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Drag Chain Conveyor Links',
            'keyword': 'drag-chain-conveyor-links',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Conveyor Belting',
            'keyword': 'conveyor-belting',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Bush Bearing',
            'keyword': 'bush-bearing',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Hanger Bearing',
            'keyword': 'hanger-bearing',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Conveyor Blades',
            'keyword': 'conveyor-blades',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Conveyor Inspection Window Clamps',
            'keyword': 'conveyor-inspection-window-clamps',
            'description': 'dsfsdfsdfsdf'
          },
          {
            'name': 'Idler Roller',
            'keyword': 'idler-roller',
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

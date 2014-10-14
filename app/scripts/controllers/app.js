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
          'keyword': 'spouting',
          'code': 'CG10',
        },
        {
          'name': 'Plantsifter Accessories',
          'keyword': 'plantsifter-accessories',
          'code': 'CG01',
        },
        {
          'name': 'Perforated Sheets',
          'keyword': 'perforated-sheets',
          'code': 'CG02',
        },
        {
          'name': 'Pneumatic Accessories',
          'keyword': 'pneumatic-accessories',
          'code': 'CG03',
        },
        {
          'name': 'Knobs & Handles',
          'keyword': 'knobs-and-handles',
          'code': 'CG05',
        },
        {
          'name': 'Driving Elements',
          'keyword': 'driving-elements',
          'code': 'CG07',
        },
        {
          'name': 'Elevator & Conveyor Spares',
          'keyword': 'elevator-and-conveyor-spares',
          'code': 'CG04',
        },
        {
          'name': 'Pulse Jet Bag Filter Accessories',
          'keyword': 'pulse-jet-bag-filter-accessories',
          'code': 'CG06',
        },
        {
          'name': 'Miscellaneous',
          'keyword': 'miscellaneous',
          'code': 'CG10',
        }
      ],
      'plantsifter-accessories': {
        'name': 'Plantsifter Accessories',
        'products': [
          {
            'name': 'Cotton Pad',
            'keyword': 'cotton-pad',
            'description': 'dsfsdfsdfsdf',
            'code': 'PS01',
          },
          {
            'name': 'Namda Roll',
            'keyword': 'namda-roll',
            'description': 'dsfsdfsdfsdf',
            'code': 'PS02',
          },
          {
            'name': 'Rubber Ring',
            'keyword': 'rubber-ring',
            'description': 'dsfsdfsdfsdf',
            'code': 'PS03',
          },
          {
            'name': 'Paper Tape',
            'keyword': 'paper-tape',
            'description': 'dsfsdfsdfsdf',
            'code': 'PS04',
          },
          {
            'name': 'Plantsifter Box',
            'keyword': 'plantsifter-box',
            'description': 'dsfsdfsdfsdf',
            'code': '',
          },
          {
            'name': 'Plantsifter Bag',
            'keyword': 'plantsifter-bag',
            'description': 'dsfsdfsdfsdf',
            'code': 'PS05',
          },
          {
            'name': 'Plantsifter Frame',
            'keyword': 'plantsifter-frame',
            'description': 'dsfsdfsdfsdf',
            'code': 'PS06',
          },
          {
            'name': 'Plantsifter Oval Ball (Dholak)',
            'keyword': 'plantsifter-oval-ball-dholak',
            'description': 'dsfsdfsdfsdf',
            'code': 'PS07',
          },
          {
            'name': 'Separator Ball',
            'keyword': 'separator-ball',
            'description': 'dsfsdfsdfsdf',
            'code': 'PS08',
          },
          {
            'name': 'Staple Gun',
            'keyword': 'staple-gun',
            'description': 'dsfsdfsdfsdf',
            'code': 'PS09',
          },
          {
            'name': 'Triangular Brush',
            'keyword': 'triangular-brush',
            'description': 'dsfsdfsdfsdf',
            'code': 'PS10',
          },
          {
            'name': 'Sefar Nytal PA - MF',
            'keyword': 'sefar-nytal-pa-mf',
            'description': 'dsfsdfsdfsdf',
            'code': 'PS11',
          },
          {
            'name': 'Sefar Nytal PA - Milling',
            'keyword': 'sefar-nytal-pa-milling',
            'description': 'dsfsdfsdfsdf',
            'code': 'PS12',
          },
          {
            'name': 'Sefar Nytal PA - GG',
            'keyword': 'sefar-nytal-pa-gg',
            'description': 'dsfsdfsdfsdf',
            'code': 'PS13',
          },
          {
            'name': 'Ilet Tape',
            'keyword': 'ilet-tape',
            'description': 'dsfsdfsdfsdf',
            'code': 'PS14',
          },
        ],
      },
      'perforated-sheets': {
        'name': 'Perforated Sheets',
        'products': [
          {
            'name': 'Round Hole Type',
            'keyword': 'round-hole-type',
            'description': 'dsfsdfsdfsdf',
            'code': 'PRF03',
          },
          {
            'name': 'Rectangular Hole Type',
            'keyword': 'rectangular-hole-type',
            'description': 'dsfsdfsdfsdf',
            'code': 'PRF02',
          },
          {
            'name': 'Slotted Hole Type',
            'keyword': 'slotted-hole-type',
            'description': 'dsfsdfsdfsdf',
            'code': 'PRF04',
          },
          {
            'name': 'Dimple Type',
            'keyword': 'dimple-type',
            'description': 'dsfsdfsdfsdf',
            'code': 'PRF01',
          },
          {
            'name': 'Triangular Hole Type',
            'keyword': 'triangular-hole-type',
            'description': 'dsfsdfsdfsdf',
            'code': 'PRF05',
          },
          {
            'name': 'Stainless Steel Wire Mesh',
            'keyword': 'stainless-steel-wire-mesh',
            'description': 'dsfsdfsdfsdf',
            'code': 'PRF01',
          },
        ],
      },
      'pneumatic-accessories': {
        'name': 'Pneumatic Accessories',
        'products': [
          {
            'name': 'Air Lock',
            'keyword': 'air-lock',
            'description': 'dsfsdfsdfsdf',
            'code': 'PNU05',
          },
          {
            'name': 'Acrylic Glass',
            'keyword': 'acrylic-glass',
            'description': 'dsfsdfsdfsdf',
            'code': 'PNU04',
          },
          {
            'name': 'Lift Pipe',
            'keyword': 'lift-pipe',
            'description': 'dsfsdfsdfsdf',
            'code': 'PNU01',
          },
          {
            'name': 'Lift Bend',
            'keyword': 'lift-bend',
            'description': 'dsfsdfsdfsdf',
            'code': 'PNU02',
          },
          {
            'name': 'Rubber Sleeve',
            'keyword': 'rubber-sleeve',
            'description': 'dsfsdfsdfsdf',
            'code': 'PNU03',
          },
          {
            'name': 'Pneumatic Cyclone',
            'keyword': 'pneumatic-cyclone',
            'description': 'dsfsdfsdfsdf',
            'code': 'PNU06',
          },
        ],
      },
      'spouting': {
        'name': 'Spouting',
        'products': [
          {
            'name': 'Pipe',
            'keyword': 'pipe',
            'description': 'dsfsdfsdfsdf',
            'code': 'SP01',
          },
          {
            'name': 'Divider',
            'keyword': 'divider',
            'description': 'dsfsdfsdfsdf',
            'code': 'SP03',
          },
          {
            'name': 'Inspection (T)',
            'keyword': 'inspection-t',
            'description': 'dsfsdfsdfsdf',
            'code': 'SP04',
          },
          {
            'name': 'Elbow',
            'keyword': 'elbow',
            'description': 'dsfsdfsdfsdf',
            'code': 'SP08',
          },
          {
            'name': 'Pipe Segment',
            'keyword': 'pipe-segment',
            'description': 'dsfsdfsdfsdf',
            'code': 'SP07',
          },
          {
            'name': 'Universal Bend',
            'keyword': 'universal-bend',
            'description': 'dsfsdfsdfsdf',
            'code': 'SP09',
          },
          {
            'name': 'Branch Pipe (Y)',
            'keyword': 'branch-pipe-y',
            'description': 'dsfsdfsdfsdf',
            'code': 'SP02',
          },
          {
            'name': 'Inspection with Hinged Door',
            'keyword': 'inspection-with-hinged-door',
            'description': 'dsfsdfsdfsdf',
            'code': 'SP05',
          },
          {
            'name': 'Sleeve',
            'keyword': 'sleeve',
            'description': 'dsfsdfsdfsdf',
            'code': 'SP10',
          },
          {
            'name': 'Bend 90 Degree',
            'keyword': 'bend-90-degree',
            'description': 'dsfsdfsdfsdf',
            'code': 'SP11',
          },
          {
            'name': 'Tension Ring',
            'keyword': 'tension-ring',
            'description': 'dsfsdfsdfsdf',
            'code': '',
          },
          {
            'name': 'Bagging Spout',
            'keyword': 'bagging-spout',
            'description': 'dsfsdfsdfsdf',
            'code': 'SP13',
          },
          {
            'name': 'Bag Clamps',
            'keyword': 'bag-clamps',
            'description': 'dsfsdfsdfsdf',
            'code': '',
          },
          {
            'name': 'Dead Box',
            'keyword': 'dead-box',
            'description': 'dsfsdfsdfsdf',
            'code': 'SP06',
          },
          {
            'name': 'View Glass',
            'keyword': 'view-glass',
            'description': 'dsfsdfsdfsdf',
            'code': 'SP14',
          },
          {
            'name': 'Magnet',
            'keyword': 'magnet',
            'description': 'dsfsdfsdfsdf',
            'code': 'SP15',
          },
          {
            'name': 'Rotameter',
            'keyword': 'rotameter',
            'description': 'dsfsdfsdfsdf',
            'code': 'SP16',
          },
        ],
      },
      'elevator-and-conveyor-spares': {
        'name': 'Elevator & Conveyor Spares',
        'products': [
          {
            'name': 'Elevator Belting',
            'keyword': 'elevator-belting',
            'description': 'dsfsdfsdfsdf',
            'code': 'EC02',
          },
          {
            'name': 'MS Bucket',
            'keyword': 'ms-bucket',
            'description': 'dsfsdfsdfsdf',
            'code': '',
          },
          {
            'name': 'PVC Buckets',
            'keyword': 'pvc-buckets',
            'description': 'dsfsdfsdfsdf',
            'code': '',
          },
          {
            'name': 'Elevator Bolt',
            'keyword': 'elevator-bolt',
            'description': 'dsfsdfsdfsdf',
            'code': 'EC02',
          },
          {
            'name': 'Elevator Top',
            'keyword': 'elevator-top',
            'description': 'dsfsdfsdfsdf',
            'code': 'EC06',
          },
          {
            'name': 'Elevator Bottom',
            'keyword': 'elevator-bottom',
            'description': 'dsfsdfsdfsdf',
            'code': 'EC07',
          },
          {
            'name': 'Elevator Box',
            'keyword': 'elevator-box',
            'description': 'dsfsdfsdfsdf',
            'code': 'EC08',
          },
          {
            'name': 'Rubberized Pulley',
            'keyword': 'rubberized-pulley',
            'description': 'dsfsdfsdfsdf',
            'code': 'EC05',
          },
          {
            'name': 'Bearings',
            'keyword': 'bearings',
            'description': 'dsfsdfsdfsdf',
            'code': 'EC04',
          },
          {
            'name': 'Screw Flights',
            'keyword': 'screw-flights',
            'description': 'dsfsdfsdfsdf',
            'code': 'EC11',
          },
          {
            'name': 'Drag Chain Conveyor Links',
            'keyword': 'drag-chain-conveyor-links',
            'description': 'dsfsdfsdfsdf',
            'code': 'EC14',
          },
          {
            'name': 'Conveyor Belting',
            'keyword': 'conveyor-belting',
            'description': 'dsfsdfsdfsdf',
            'code': '',
          },
          {
            'name': 'Bush Bearing',
            'keyword': 'bush-bearing',
            'description': 'dsfsdfsdfsdf',
            'code': '',
          },
          {
            'name': 'Hanger Bearing',
            'keyword': 'hanger-bearing',
            'description': 'dsfsdfsdfsdf',
            'code': '',
          },
          {
            'name': 'Conveyor Blades',
            'keyword': 'conveyor-blades',
            'description': 'dsfsdfsdfsdf',
            'code': 'EC10',
          },
          {
            'name': 'Conveyor Inspection Window Clamps',
            'keyword': 'conveyor-inspection-window-clamps',
            'description': 'dsfsdfsdfsdf',
            'code': '',
          },
          {
            'name': 'Idler Roller',
            'keyword': 'idler-roller',
            'description': 'dsfsdfsdfsdf',
            'code': 'EC13',
          },
        ],
      },
      'pulse-jet-bag-filter-accessories': {
        'name': 'Pulse Jet Bag Filter Accessories',
        'products': [
          {
            'name': 'Filter Cages',
            'keyword': 'filter-cages',
            'description': 'dsfsdfsdfsdf',
            'code': 'BF02',
          },
          {
            'name': 'Filter Bags',
            'keyword': 'filter-bags',
            'description': 'dsfsdfsdfsdf',
            'code': 'BF01',
          },
          {
            'name': 'Solenoid Valve',
            'keyword': 'solenoid-valve',
            'description': 'dsfsdfsdfsdf',
            'code': 'BF03',
          },
          {
            'name': 'Sequential Timer Box',
            'keyword': 'sequential-timer-box',
            'description': 'dsfsdfsdfsdf',
            'code': 'BF04',
          },
        ],
      },
      'driving-elements': {
        'name': 'Driving Elements',
        'products': [
          {
            'name': 'Jaw Flex Coupling',
            'keyword': 'jaw-flex-coupling',
            'description': 'dsfsdfsdfsdf',
            'code': 'DE01',
          },
          {
            'name': 'Sprocket',
            'keyword': 'sprocket',
            'description': 'dsfsdfsdfsdf',
            'code': 'DE04',
          },
          {
            'name': 'Star Coupling',
            'keyword': 'star-coupling',
            'description': 'dsfsdfsdfsdf',
            'code': '',
          },
          {
            'name': 'Pin Bush Coupling',
            'keyword': 'pin-bush-coupling',
            'description': 'dsfsdfsdfsdf',
            'code': 'DE02',
          },
          {
            'name': 'Roll Body Gears',
            'keyword': 'roll-body-gears',
            'description': 'dsfsdfsdfsdf',
            'code': 'DE03',
          },
        ],
      },
      'knobs-and-handles': {
        'name': 'Knobs & Handles',
        'combined_products': true,
        'products': [
          {
            'keyword': 'knobs1',
            'code': 'KN01',
          },
          {
            'keyword': 'knobs2',
            'code': 'KN02',
          },
        ],
      },
    };

  }]);

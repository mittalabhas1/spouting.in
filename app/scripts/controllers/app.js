/*
 * Author: @bhas (mittalabhas1@gmail.com)
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
  .controller('AppCtrl', ['$scope', '$rootScope', '$firebase', function ($scope, $rootScope, $firebase) {

    $rootScope.global = {};

    var ref = new Firebase('https://spouting-in.firebaseio.com/data/');

    var objectMap = {
        categories: {},
        products: {},
        settings: {}
    };

    ref.on('value', function(snapshot){
        parseData(snapshot.val());
    });

    var parseData = function(data){
        var categories = data.categories;
        var products = data.products;
        objectMap.settings = data.settings;

        _.each(categories, function(category){
            objectMap.categories[category.keyword] = category;
        });

        _.each(products, function(product){
            objectMap.products[product.keyword] = product;
        });

        $rootScope.objectMap = objectMap;
        console.debug(objectMap);
        $rootScope._ = _;
    };

    // $rootScope.global.products = {
    //   'category': [
    //     {
    //       'name': 'Plantsifter Accessories',
    //       'keyword': 'plantsifter-accessories',
    //       'code': 'CG01',
    //     },
    //     {
    //       'name': 'Perforated Sheets',
    //       'keyword': 'perforated-sheets',
    //       'code': 'CG02',
    //     },
    //     {
    //       'name': 'Pneumatic Accessories',
    //       'keyword': 'pneumatic-accessories',
    //       'code': 'CG03',
    //     },
    //     {
    //       'name': 'Elevator & Conveyor Spares',
    //       'keyword': 'elevator-and-conveyor-spares',
    //       'code': 'CG04',
    //     },
    //     {
    //       'name': 'Knobs & Handles',
    //       'keyword': 'knobs-and-handles',
    //       'code': 'CG05',
    //     },
    //     {
    //       'name': 'Pulse Jet Bag Filter Accessories',
    //       'keyword': 'pulse-jet-bag-filter-accessories',
    //       'code': 'CG06',
    //     },
    //     {
    //       'name': 'Driving Elements',
    //       'keyword': 'driving-elements',
    //       'code': 'CG06',
    //     },
    //     {
    //       'name': 'Vibration Absorbers',
    //       'keyword': 'vibration-absorbers',
    //       'code': 'CG08',
    //     },
    //     {
    //       'name': 'Miller Tools',
    //       'keyword': 'miller-tools',
    //       'code': 'CG09',
    //     },
    //     {
    //       'name': 'Spouting & Ducting',
    //       'keyword': 'spouting-and-ducting',
    //       'code': 'CG10',
    //     },
    //   ],
    //   'plantsifter-accessories': {
    //     'name': 'Plantsifter Accessories',
    //     'products': [
    //       {
    //         'name': 'Cotton Pad',
    //         'keyword': 'cotton-pad',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PS01',
    //       },
    //       {
    //         'name': 'Namda Roll',
    //         'keyword': 'namda-roll',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PS02',
    //       },
    //       {
    //         'name': 'Rubber Ring',
    //         'keyword': 'rubber-ring',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PS03',
    //       },
    //       {
    //         'name': 'Paper Tape',
    //         'keyword': 'paper-tape',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PS04',
    //       },
    //       {
    //         'name': 'Plantsifter Bag',
    //         'keyword': 'plantsifter-bag',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PS05',
    //       },
    //       {
    //         'name': 'Plantsifter Frame',
    //         'keyword': 'plantsifter-frame',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PS06',
    //       },
    //       {
    //         'name': 'Plantsifter Box',
    //         'keyword': 'plantsifter-box',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PS07',
    //       },
    //       {
    //         'name': 'Plantsifter Oval Ball (Dholak)',
    //         'keyword': 'plantsifter-oval-ball-dholak',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PS08',
    //       },
    //       {
    //         'name': 'Separator Ball',
    //         'keyword': 'separator-ball',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PS09',
    //       },
    //       {
    //         'name': 'Staple Gun',
    //         'keyword': 'staple-gun',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PS10',
    //       },
    //       {
    //         'name': 'Triangular Brush',
    //         'keyword': 'triangular-brush',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PS11',
    //       },
    //       {
    //         'name': 'Sefar Nytal PA - MF',
    //         'keyword': 'sefar-nytal-pa-mf',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PS12',
    //       },
    //       {
    //         'name': 'Sefar Nytal PA - Milling',
    //         'keyword': 'sefar-nytal-pa-milling',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PS13',
    //       },
    //       {
    //         'name': 'Sefar Nytal PA - GG',
    //         'keyword': 'sefar-nytal-pa-gg',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PS14',
    //       },
    //       {
    //         'name': 'Ilet Tape',
    //         'keyword': 'ilet-tape',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PS15',
    //       },
    //     ],
    //   },
    //   'perforated-sheets': {
    //     'name': 'Perforated Sheets',
    //     'products': [
    //       {
    //         'name': 'Rectangular Hole Type',
    //         'keyword': 'rectangular-hole-type',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PRF02',
    //       },
    //       {
    //         'name': 'Round Hole Type',
    //         'keyword': 'round-hole-type',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PRF03',
    //       },
    //       {
    //         'name': 'Slotted Hole Type',
    //         'keyword': 'slotted-hole-type',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PRF04',
    //       },
    //       {
    //         'name': 'Wire Mesh',
    //         'keyword': 'wire-mesh',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PRF06',
    //       },
    //       {
    //         'name': 'Triangular Hole Type',
    //         'keyword': 'triangular-hole-type',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PRF05',
    //       },
    //       {
    //         'name': 'Dimple Type',
    //         'keyword': 'dimple-type',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PRF01',
    //       },
    //     ],
    //   },
    //   'pneumatic-accessories': {
    //     'name': 'Pneumatic Accessories',
    //     'products': [
    //       {
    //         'name': 'Lift Pipe',
    //         'keyword': 'lift-pipe',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PNU01',
    //       },
    //       {
    //         'name': 'Lift Bend',
    //         'keyword': 'lift-bend',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PNU02',
    //       },
    //       {
    //         'name': 'Rubber Sleeve',
    //         'keyword': 'rubber-sleeve',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PNU03',
    //       },
    //       {
    //         'name': 'Lift Glass',
    //         'keyword': 'lift-glass',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PNU04',
    //       },
    //       {
    //         'name': 'Air Lock',
    //         'keyword': 'air-lock',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PNU05',
    //       },
    //       {
    //         'name': 'Pneumatic Cyclone',
    //         'keyword': 'pneumatic-cyclone',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'PNU06',
    //       },
    //     ],
    //   },
    //   'elevator-and-conveyor-spares': {
    //     'name': 'Elevator & Conveyor Spares',
    //     'products': [
    //       {
    //         'name': 'Elevator Bucket',
    //         'keyword': 'elevator-bucket',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'EC01',
    //       },
    //       {
    //         'name': 'Belt',
    //         'keyword': 'belt',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'EC02',
    //       },
    //       {
    //         'name': 'Bolt',
    //         'keyword': 'bolt',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'EC03',
    //       },
    //       {
    //         'name': 'Bearings',
    //         'keyword': 'bearings',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'EC04',
    //       },
    //       {
    //         'name': 'Rubberized Pulley',
    //         'keyword': 'rubberized-pulley',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'EC05',
    //       },
    //       {
    //         'name': 'Elevator Top',
    //         'keyword': 'elevator-top',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'EC06',
    //       },
    //       {
    //         'name': 'Elevator Bottom',
    //         'keyword': 'elevator-bottom',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'EC07',
    //       },
    //       {
    //         'name': 'Elevator Box',
    //         'keyword': 'elevator-box',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'EC08',
    //       },
    //       {
    //         'name': 'Hanger',
    //         'keyword': 'hanger',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'EC09',
    //       },
    //       {
    //         'name': 'Conveyor Blades',
    //         'keyword': 'conveyor-blades',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'EC10',
    //       },
    //       {
    //         'name': 'Screw Flights',
    //         'keyword': 'screw-flights',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'EC11',
    //       },
    //       {
    //         'name': 'Conveyor Shaft Joint',
    //         'keyword': 'conveyor-shaft-joint',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'EC12',
    //       },
    //       {
    //         'name': 'Idler Roller',
    //         'keyword': 'idler-roller',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'EC13',
    //       },
    //       {
    //         'name': 'Chain Conveyor Links',
    //         'keyword': 'chain-conveyor-links',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'EC14',
    //       },
    //       {
    //         'name': 'Conveyor Window Clamps',
    //         'keyword': 'conveyor-window-clamps',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'EC15',
    //       },
    //     ],
    //   },
    //   'knobs-and-handles': {
    //     'name': 'Knobs & Handles',
    //     'combined_products': true,
    //     'products': [
    //       {
    //         'name': 'Knobs 1',
    //         'keyword': 'knobs1',
    //         'code': 'KN01',
    //       },
    //       {
    //         'name': 'Knobs 2',
    //         'keyword': 'knobs2',
    //         'code': 'KN02',
    //       },
    //     ],
    //   },
    //   'pulse-jet-bag-filter-accessories': {
    //     'name': 'Pulse Jet Bag Filter Accessories',
    //     'products': [
    //       {
    //         'name': 'Filter Bags',
    //         'keyword': 'filter-bags',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'BF01',
    //       },
    //       {
    //         'name': 'Filter Cages with Ventury',
    //         'keyword': 'filter-cages-with-ventury',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'BF02',
    //       },
    //       {
    //         'name': 'Solenoid Valve',
    //         'keyword': 'solenoid-valve',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'BF03',
    //       },
    //       {
    //         'name': 'Sequential Timer Box',
    //         'keyword': 'sequential-timer-box',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'BF04',
    //       },
    //       {
    //         'name': 'FRL Unit',
    //         'keyword': 'frl-unit',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'BF05',
    //       },
    //       {
    //         'name': 'Pressure Gauge',
    //         'keyword': 'pressure-gauge',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'BF06',
    //       },
    //     ],
    //   },
    //   'driving-elements': {
    //     'name': 'Driving Elements',
    //     'products': [
    //       {
    //         'name': 'Jaw Flex Coupling',
    //         'keyword': 'jaw-flex-coupling',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'DE01',
    //       },
    //       {
    //         'name': 'Pin Bush Coupling',
    //         'keyword': 'pin-bush-coupling',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'DE02',
    //       },
    //       {
    //         'name': 'Roll Body Differentials',
    //         'keyword': 'roll-body-differentials',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'DE03',
    //       },
    //       {
    //         'name': 'Sprocket',
    //         'keyword': 'sprocket',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'DE04',
    //       },
    //       {
    //         'name': 'Chain',
    //         'keyword': 'chain',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'DE05',
    //       },
    //     ],
    //   },
    //   'vibration-absorbers': {
    //     'name': 'Vibration Absorbers',
    //     'products': [
    //       {
    //         'name': 'Vibration Pads',
    //         'keyword': 'vibration-pads',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'VA01',
    //       },
    //       {
    //         'name': 'Vibration Rubber',
    //         'keyword': 'vibration-rubber',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'VA02',
    //       },
    //     ],
    //   },
    //   'miller-tools': {
    //     'name': 'Miller Tools',
    //     'products': [
    //       {
    //         'name': 'Flour Spetula',
    //         'keyword': 'flour-spetula',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'MT01',
    //       },
    //       {
    //         'name': 'Mesh Counter',
    //         'keyword': 'mesh-counter',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'MT02',
    //       },
    //       {
    //         'name': 'Measuring Tape',
    //         'keyword': 'measuring-tape',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'MT03',
    //       },
    //     ],
    //   },
    //   'spouting-and-ducting': {
    //     'name': 'Spouting & Ducting',
    //     'products': [
    //       {
    //         'name': 'Pipe',
    //         'keyword': 'pipe',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'SP01',
    //       },
    //       {
    //         'name': 'Branch Pipe (Y)',
    //         'keyword': 'branch-pipe-y',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'SP02',
    //       },
    //       {
    //         'name': 'Divider',
    //         'keyword': 'divider',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'SP03',
    //       },
    //       {
    //         'name': 'Inspection (T)',
    //         'keyword': 'inspection-t',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'SP04',
    //       },
    //       {
    //         'name': 'Inspection Door',
    //         'keyword': 'inspection-door',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'SP05',
    //       },
    //       {
    //         'name': 'Dead Box',
    //         'keyword': 'dead-box',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'SP06',
    //       },
    //       {
    //         'name': 'Pipe Segment',
    //         'keyword': 'pipe-segment',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'SP07',
    //       },
    //       {
    //         'name': 'Elbow',
    //         'keyword': 'elbow',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'SP08',
    //       },
    //       {
    //         'name': 'Universal Bend',
    //         'keyword': 'universal-bend',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'SP09',
    //       },
    //       {
    //         'name': 'Sleeve',
    //         'keyword': 'sleeve',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'SP10',
    //       },
    //       {
    //         'name': 'Bend 90 Degree',
    //         'keyword': 'bend-90-degree',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'SP11',
    //       },
    //       {
    //         'name': 'Tension Ring',
    //         'keyword': 'tension-ring',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': '',
    //       },
    //       {
    //         'name': 'Bag Spout',
    //         'keyword': 'bag-spout',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'SP13',
    //       },
    //       {
    //         'name': 'View Glass',
    //         'keyword': 'view-glass',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'SP14',
    //       },
    //       {
    //         'name': 'Magnet Box',
    //         'keyword': 'magnet-box',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'SP15',
    //       },
    //       {
    //         'name': 'Rotameter',
    //         'keyword': 'rotameter',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'SP16',
    //       },
    //       {
    //         'name': 'Long Ducting',
    //         'keyword': 'long-ducting',
    //         'description': 'dsfsdfsdfsdf',
    //         'code': 'SP17',
    //       },
    //     ],
    //   },
    // };

  }]);

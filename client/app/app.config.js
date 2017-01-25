(function() {
    'use strict';

    angular.module('app').config(config)


    function config($mdThemingProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true)

        $mdThemingProvider
            .theme('default')
            .primaryPalette('green', {
                'default': '500',
                'hue-1': '50',
                'hue-2': '200',
                'hue-3': '300'
            })
            .accentPalette('teal').dark()
            .warnPalette('red')
            .backgroundPalette('grey');
        $mdThemingProvider
            .theme('card')
            .primaryPalette('green').dark()

        $stateProvider
            .state({
                name: 'app',
                abstract: true,
                component: 'app',
            })
            .state({
                name: 'home',
                parent: 'app',
                url: '/',
                component: 'cardList',
            })
            .state({
                name: 'playground',
                parent: 'app',
                url: '/playground/',
                component: 'playGround',
            })
    }

}());

(function() {
    'use strict';

    angular.module('app').config(config)


    function config($mdThemingProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true)

        $mdThemingProvider
            .theme('default')
            .primaryPalette('green')
            .accentPalette('red')
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
                parent: 'home',
                url: '/',
                component: 'cardList',
            })
            .state({
                name: 'form',
                parent: 'app',
                url: '/',
                component: 'formComp',
            })
    }

}());

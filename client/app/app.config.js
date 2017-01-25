(function() {
    'use strict';

    angular.module('app').config(config)


    function config($mdThemingProvider) {
        $mdThemingProvider
            .theme('default')
            .primaryPalette('green', {
                'default': '500',
                'hue-1': '50',
                'hue-2': '200',
                'hue-3': '300'
            })
            .accentPalette('teal')
            .warnPalette('red')
            .backgroundPalette('grey');
    }

}());

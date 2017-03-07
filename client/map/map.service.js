(function() {
    'use strict';

    angular
        .module('app')
        .service('mapService', mapService);

    function mapService($http) {

        this.geolocate = function(googleURL) {
            return $http.get(googleURL).then(function(response) {
                return response;
            });
        };
    }
}())

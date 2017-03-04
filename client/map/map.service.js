(function() {
    'use strict';

    angular
        .module('app')
        .service('mapService', mapService);

    function mapService($http) {
        this.geolocate = function(googleURL) {
            return $http.get(googleURL).then(function(response) {
                return response
            });
        };
        this.getCourses = function(swingURL) {
            return $http.get(swingURL).then(function(response) {
                const courses = response.data.courses
                return courses
            });
        };
    }
}())

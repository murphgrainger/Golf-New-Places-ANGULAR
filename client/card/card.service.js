(function() {
    'use strict';

    angular
        .module('app')
        .service('cardService', cardService)

    function cardService($http) {
        this.getCourses = function() {
            return $http.get(swingURL()).then(function(response) {
                const courses = response.data.courses
                return courses
            })
        }

        function swingURL() {
            const swingAPI = 'https://api.swingbyswing.com/v2/courses/search_by_location?';
            let swingCoordinates = 'lat=' + 39.7392 + '&lng=' + -104.9903;
            let swingRadius = '&radius=' + 50
            let holeCount = '&active_only=yes&hole_count=' + 18;
            let orderBy = '&order_by=local_rank&from=1';
            let swingToken = '&access_token=9a7a612e-4ccf-4deb-a2da-cde8bc46db01';
            return swingAPI + swingCoordinates + swingRadius + holeCount + orderBy + swingToken;
        }

    }

}())

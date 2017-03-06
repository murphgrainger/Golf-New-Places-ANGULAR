(function() {
    'use strict';

    angular
        .module('app')
        .controller('FormController', FormController);

    function FormController(cardService) {
        const vm = this;
        vm.$onInit = function() {}


        vm.formSubmit = function(search) {
            let distance = search.distance;
            let city = search.city;
            let publicCheck = search.public;
            let privateCheck = search.private;
            cardService.geolocate(buildGeoURL(city))
                .then(result => {
                    let lat = result.data.results[0].geometry.location.lat;
                    let lng = result.data.results[0].geometry.location.lng;
                    cardService.getCourses(swingURL(lat, lng, distance))
                        .then(data => {
                            vm.courses = data.courses
                            console.log(data);
                            if (data.meta.courses.next !== undefined) {
                                cardService.getMoreCourses(data.meta.courses.next).then(courses => {
                                    courses.forEach(course => {
                                        vm.courses.push(course);

                                    })
                                })
                            }
                            console.log(vm.courses);

                            // if (publicCheck === true && privateCheck !== true) {
                            //     console.log('public only');
                            //
                            // } else if (publicCheck !== true && privateCheck === true) {
                            //     console.log('private only');
                            //
                            // } else {
                            //     console.log('both');
                            //
                            // }
                        });
                })
        }
    }

    function buildGeoURL(city) {
        const herokuPrefix = 'https://galvanize-cors-proxy.herokuapp.com/';
        const geoAPI = 'https://maps.googleapis.com/maps/api/geocode/json?';
        const mapsAPI = 'https://maps.googleapis.com/maps/api/js?';
        let geoComp = `address=${city}`;
        let geoKey = '&key=AIzaSyDrwG2vaCL_doUJ1Io8bTNrGzxT30N6SqE&libraries=places';
        return herokuPrefix + geoAPI + geoComp + geoKey;
    }

    function swingURL(lat, lng, distance) {
        const swingAPI = 'https://api.swingbyswing.com/v2/courses/search_by_location?';
        let swingCoordinates = `lat=${lat}&lng=${lng}`;
        let swingRadius = `&radius=${distance}`
        let holeCount = '&active_only=yes&hole_count=' + 18;
        let orderBy = '&order_by=local_rank&from=1';
        let swingToken = '&access_token=9a7a612e-4ccf-4deb-a2da-cde8bc46db01';
        return swingAPI + swingCoordinates + swingRadius + holeCount + orderBy + swingToken;
    }

    // function recursiveGetMoreCourses(data) {
    //     if (data.meta.courses.next !== undefined) {
    //         cardService.getMoreCourses(data.meta.courses.next)
    //             .then(moreCourses => {
    //                 moreCourses.forEach(element => {
    //                     vm.courses.push(element);
    //                 });
    //             })
    //     }
    // }
})();

(function() {
    'use strict';

    angular
        .module('app')
        .controller('MapController', MapController);

    function MapController(mapService) {
        const vm = this;
        vm.$onInit = function() {
            var map = null;

            initMap()

            function initMap() {
                console.log('init map running');
                let searchCenter = {
                    lat: 39.7,
                    lng: -104.96
                };
                map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 9,
                    center: searchCenter
                });
            }
        }
    }
})();

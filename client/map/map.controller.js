(function() {
    'use strict';

    angular
        .module('app')
        .controller('MapController', MapController);

    function MapController() {
        const vm = this;
        vm.$onInit = function() {
            console.log('hey from map controller');
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

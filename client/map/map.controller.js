(function() {
    'use strict';

    angular
        .module('app')
        .controller('MapController', MapController);

    function MapController() {
        const vm = this;
        vm.$onInit = function() {}
        var map = null;



        // function addressToMap() {
        //     let marker = new google.maps.Marker({
        //         position: {
        //             lat: Number(this.dataset.lat),
        //             lng: Number(this.dataset.lng)
        //         },
        //         map: map,
        //         title: '',
        //         snippet: ''
        //     });
        //     map.panTo(marker.getPosition());
        // };


    }
})();

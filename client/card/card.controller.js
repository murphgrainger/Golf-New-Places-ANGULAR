(function() {
    'use strict';

    angular
        .module('app')
        .controller('CardController', CardController);

    function CardController(cardService) {
        const vm = this;
        vm.$onInit = function() {}

        vm.addressToMap = function(course) {
            console.log(course.location.lat);
            console.log(map);
            let marker = new google.maps.Marker({
                position: {
                    lat: Number(course.location.lat),
                    lng: Number(course.location.lng)
                },
                map: map,
                title: '',
                snippet: ''
            });
            map.panTo(marker.getPosition());
        }
    }
})();

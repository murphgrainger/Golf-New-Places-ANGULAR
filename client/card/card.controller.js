(function() {
    'use strict';

    angular
        .module('app')
        .controller('CardController', CardController);

    function CardController(cardService) {
        const vm = this;
        vm.$onInit = function() {

        }
    }
})();

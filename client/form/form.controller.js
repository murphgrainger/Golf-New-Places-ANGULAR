(function() {
    'use strict';

    angular
        .module('app')
        .controller('FormController', FormController);

    function FormController(cardService) {
        const vm = this;
        vm.$onInit = function() {

        }
    }
})();

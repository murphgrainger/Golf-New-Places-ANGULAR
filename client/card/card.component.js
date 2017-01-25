(function() {
    'use strict';

    angular
        .module('app')
        .component('cardList', {
            controller: 'CardController',
            templateUrl: 'card/card.template.html'
        });

})();

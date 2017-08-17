(function() {
    'use strict';

    angular
        .module('app')
        .component('search', {
            templateUrl: 'templates/search.html',
            controller: SearchCtrl,
            controllerAs: 'search',
            bindings: {
                query: '='
            }
        });

        function SearchCtrl() {
            var search = this;
        }
})();
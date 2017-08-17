(function() {
    'use strict';

    angular
        .module('app')
        .component('tablebuttons', {
            templateUrl: 'templates/table-buttons.html',
            controller: TableButtonsCtrl,
            controllerAs: 'tb',
            bindings: {
                selected:'='
            }
        });

        TableButtonsCtrl.$inject = ['contactService'];

        function TableButtonsCtrl(contactService) {
            var tb = this;

            tb.remove = removeContacts;

            function removeContacts() {
                contactService.removeContacts(tb.selected);
                tb.selected = {};
            }
        }
})();
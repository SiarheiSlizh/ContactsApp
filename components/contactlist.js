(function() {
    'use strict';
    
	angular
        .module('app')
        .component('contactlist', {
            templateUrl: 'templates/contactlist.html',
			controller: ContactCtrl,
            controllerAs: 'list',
            bindings: {
                query: '=',
                selected: '='
            }
        });
        
        ContactCtrl.$inject = ['contactService'];

		function ContactCtrl(contactService) {
            var list = this;
            list.name = getByName;
            
            contactService.getContacts().then(success);

            function success(data) {
                list.contacts = data;
            }
            
            function getByName(contact) {
                if (list.query === undefined || list.query == "")
                    return true;
                return contact.name.includes(list.query);
            }
       }
})();
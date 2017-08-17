(function(){
	'use strict';

    angular
        .module('app')
        .component('contactedit', {
	        templateUrl: 'templates/edit.html',
	        controller: ContactEditCtrl,
	        controllerAs: 'edit'
	    });

		ContactEditCtrl.$inject = ['contactService', '$routeParams', '$location'];

	    function ContactEditCtrl(contactService, $routeParams, $location) {
	        var edit = this;
			edit.contact = contactService.getContactById($routeParams.contactId);
			edit.cancel = cancel;
			edit.save = save;
			edit.isValid = true;
			edit.relationships = ['Home', 'Work', 'Others'];

			function cancel() {
				$location.path('/data');
			}
			
			function save() {
				if (edit.isValid) {
					contactService.updateContact(edit.contact);
					console.log('id');
					console.log(edit.contact.id);
					$location.path('/data');
				} else {
					alert('Please, enter correct data.');
				}
			}
	    }
})();

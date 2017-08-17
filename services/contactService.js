(function() {
    'use strict';

    angular
        .module('app')
        .factory('contactService', contactService);

        contactService.$inject = ['$localStorage', '$http', '$q', '$location'];

        function contactService($localStorage, $http, $q, $location) {
            var service = {};

            var freeIndexes = []; // indexes of contacts which were deleted; they use in case adding new contact

            $http.get('data/data.json').then(uploadContactsSuccess, uploadContactsFailed);
            service.getContacts = getContacts;
            service.getFavouriteContacts = getFavouriteContacts;
            service.getContactById = getContactById;
            service.updateContact = updateContact;
            service.removeContacts = removeContacts;
            service.freeIndexes = freeIndexes;

            function uploadContactsSuccess(response) {
                $localStorage.contacts = response.data;
                console.log($localStorage.contacts);
            }

            function uploadContactsFailed(error) {
                console.log(error.data);
            }

            function getContacts() {
                return $q.resolve($localStorage.contacts);
            }

            function getFavouriteContacts() {
                return $q.resolve($localStorage.contacts.filter(c => c.isFavourite));
            }

            function getContactById(id) {
                return $localStorage.contacts.find(c => c.id == id);
            }

            function updateContact(contact) {
                var temp = $localStorage.contacts.findIndex(c => c.id == contact.id);
                console.log('temp');
                console.log(temp);
                if (temp === -1) { //create new
                    if (freeIndexes.length !== 0) {
                        contact.id = freeIndexes.splice(0,1)[0];
                    } else {
                        contact.id = $localStorage.contacts.length + 1;
                    }
                    $localStorage.contacts.push(contact);
                }
                $localStorage.contacts[temp] = contact; //update
            }

            function removeContacts(selected) {
                //console.log('selected');
                //console.log(selected);
                for (var val in selected) {
                    var key = $localStorage.contacts.find(c => c.id == val);
                    freeIndexes.push(key.id);
                    //console.log('index');
                    //console.log(key);
                    $localStorage.contacts.splice($localStorage.contacts.indexOf(key), 1);
                    //console.log('contacts');
                    //console.log($localStorage.contacts);
                }
            }

            return service;
        }
})();
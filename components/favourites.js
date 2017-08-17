(function() {
    'use strict';

    angular
        .module('app')
        .component('favourites',{
            templateUrl: 'templates/favourites.html',
            controller: FavouriteCtrl,
            controllerAs: 'fav'
        });

        FavouriteCtrl.$inject = ['contactService'];

        function FavouriteCtrl(contactService) {
            var fav = this;
            contactService.getFavouriteContacts().then(success);

            function success(data) {
                fav.contacts = data;
            }
        }
})();
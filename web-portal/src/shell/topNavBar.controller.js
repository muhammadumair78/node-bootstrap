/**
 * Created By Muhammad Umair Javaid
 */

(function () {

    'use strict';

    angular.module('app.shell')
        .controller('TopNavBar', TopNavBar);

    /* @ngInject */
    function TopNavBar($state, store, Restangular) {
        var vm = this;
        vm.logout = logout;

        function logout(){
            store.remove('user');
            Restangular.setDefaultHeaders();
            $state.go('login');
        }
    }

}());

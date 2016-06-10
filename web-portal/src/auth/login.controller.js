/**
 * Created By Muhammad Umair Javaid
 */

(function () {

    'use strict';

    angular.module('app.auth')
        .controller('LoginCtrl', LoginCtrl);

    /* @ngInject */
    function LoginCtrl(authFactory, store, $state, Restangular) {
        var vm = this;
        vm.login = login;

        function login(user){
            authFactory.login(user).then(function(data){
                store.set('user', {
                    email_address: data.user.emailAddress,
                    access_token: data.token
                });
                Restangular.setDefaultHeaders({'x-access-token': data.token});
                $state.go('shell.users');
            });
        }
    }

}());

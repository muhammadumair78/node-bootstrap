/**
 * Created By Muhammad Umair Javaid
 */

(function () {

    'use strict';

    angular.module('app.auth')
        .controller('RegisterCtrl', RegisterCtrl);

    /* @ngInject */
    function RegisterCtrl(authFactory, $state) {
        var vm = this;
        vm.register = register;

        function register(user){
            authFactory.register(user).then(function(data){
                $state.go('login');
            });
        }
    }

}());

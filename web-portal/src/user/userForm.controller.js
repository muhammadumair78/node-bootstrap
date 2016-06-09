/**
 * Created By Muhammad Umair Javaid
 */

(function () {

    'use strict';

    angular.module('app.users')
        .controller('UserForm', UserForm);

    /* @ngInject */
    function UserForm(usersFactory, $stateParams, $state) {
        var vm = this;
        vm.saveUser = saveUser;

        init();

        ////////////////////

        function init() {
            if($stateParams.id){
                usersFactory.get($stateParams.id).then(function(data){
                    vm.user = data.data;
                });
            }
        }

        function saveUser(){
            if($stateParams.id){
                usersFactory.edit($stateParams.id, vm.user).then(function(data){
                    $state.go('shell.users');
                });
            } else {
                usersFactory.create(vm.user).then(function(data){
                    $state.go('shell.users');
                });
            }
        }

    }

}());

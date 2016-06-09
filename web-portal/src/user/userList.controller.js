/**
 * Created By Muhammad Umair Javaid
 */

(function () {

    'use strict';

    angular.module('app.users')
        .controller('UserList', UserList);

    /* @ngInject */
    function UserList(usersFactory) {
        var vm = this;
        vm.deleteUser = deleteUser;

        init();

        ////////////////////

        function init() {
            usersFactory.all().then(function(data){
                vm.users = data.data;
            });
        }

        function deleteUser(id){
            console.log("123");
            usersFactory.delete(id).then(function(data){
                alert(data);
            });
        }

    }

}());

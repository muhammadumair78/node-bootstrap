/**
 * Created By Muhammad Umair Javaid
 */

(function () {

    'use strict';

    angular.module('app.users')
        .controller('UserDetail', UserDetail);

    /* @ngInject */
    function UserDetail(usersFactory, $stateParams) {
        var vm = this;

        init();

        ////////////////////

        function init() {
            usersFactory.get($stateParams.id).then(function(data){
                vm.user = data.data;
            });
        }
    }

}());

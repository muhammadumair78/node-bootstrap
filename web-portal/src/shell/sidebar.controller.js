/**
 * Created By Muhammad Umair Javaid
 */

(function () {

    'use strict';

    angular.module('app.shell')
        .controller('SideBar', SideBar);

    /* @ngInject */
    function SideBar($rootScope) {
        var vm = this;
        vm.toggleSidebar = toggleSidebar;

        function toggleSidebar(){
            $rootScope.toggled = !$rootScope.toggled;
        }
    }

}());

/**
 * Created By Muhammad Umair Javaid
 */

(function () {

    'use strict';

    angular.module('app.welcome')
        .controller('Welcome', Welcome);

    /* @ngInject */
    function Welcome($rootScope) {
        var vm = this;

        init();

        ////////////////////

        function init() {
            vm.name = "Welcome page";
        }
    }

}());

/**
 * Created By Muhammad Umair Javaid
 */

(function () {

    'use strict';

    angular
        .module('app.shell', [])
        .config(configuration);

    /* @ngInject */
    function configuration($stateProvider) {
        $stateProvider
            .state('shell', {
                url: '/',
                views: {
                    '@': {
                        templateUrl: 'src/shell/shell.html',
                        controller: 'Shell as vm'
                    },
                    'topNavBar@shell': {
                        templateUrl: 'src/shell/topNavBar.html'
                    },
                    'sideBar@shell': {
                        templateUrl: 'src/shell/sideBar.html',
                        controller: 'SideBar as vm'
                    },
                    'content@shell': {
                        templateUrl: 'src/shell/content.html'
                    }
                }
            })
            .state('shell.error', {
                url: 'error',
                views: {
                    'content@shell': {
                        templateUrl: 'src/shell/error.html'
                    }
                }
            });
    }

}());

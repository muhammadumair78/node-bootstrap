/**
 * Created By Muhammad Umair Javaid
 */

(function () {

    angular.module('app.auth', [])
        .config(configuration);

    /* @ngInject */
    function configuration($stateProvider) {

        $stateProvider
            .state('login', {
                url: '/login',
                title: 'Login.',
                templateUrl: 'src/auth/login.html',
                controller: 'LoginCtrl as vm'
            })
            .state('register', {
                url: '/register',
                title: 'Register.',
                templateUrl: 'src/auth/register.html',
                controller: 'RegisterCtrl as vm'
            });
    }

}());

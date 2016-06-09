/**
 * Created By Muhammad Umair Javaid
 */

(function () {

    angular.module('app.welcome', [])
        .config(configuration);

    /* @ngInject */
    function configuration($stateProvider) {

        $stateProvider
            .state('shell.welcome', {
                url: 'welcome',
                title: 'Welcome to mean bootstrap app.',
                views: {
                    'content@shell': {
                        templateUrl: 'src/welcome/welcome.html',
                        controller: 'Welcome as vm'
                    }
                }
            });
    }

}());

/**
 * Created By Muhammad Umair Javaid
 */

(function () {

    angular.module('app.users', [])
        .config(configuration);

    /* @ngInject */
    function configuration($stateProvider) {

        $stateProvider
            .state('shell.users', {
                url: 'user-list',
                title: 'Users.',
                views: {
                    'content@shell': {
                        templateUrl: 'src/user/userList.html',
                        controller: 'UserList as vm'
                    }
                }
            }).state('shell.userForm', {
                url: 'user/:id',
                title: 'User From.',
                views: {
                    'content@shell': {
                        templateUrl: 'src/user/userForm.html',
                        controller: 'UserForm as vm'
                    }
                }
            }).state('shell.userDetail', {
                url: 'user-details/:id',
                title: 'User Detail.',
                views: {
                    'content@shell': {
                        templateUrl: 'src/user/userDetail.html',
                        controller: 'UserDetail as vm'
                    }
                }
            });
    }

}());

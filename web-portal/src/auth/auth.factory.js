/**
 * Created By Muhammad Umair Javaid
 */

(function(){

    'use strict';

    angular
        .module('app.auth')
        .factory('authFactory', authFactory);

    /* @ngInject */
    function authFactory(Restangular){
        return {
            login: _login
        };

        function _login(data) {
            return Restangular.all('login').post(data);
        }

    }

}());
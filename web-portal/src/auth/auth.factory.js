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
            login: _login,
            register: _register
        };

        function _login(data) {
            return Restangular.all('login').post(data);
        }

        function _register(data) {
            return Restangular.all('register').post(data);
        }

    }

}());
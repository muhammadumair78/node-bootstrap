/**
 * Created By Muhammad Umair Javaid
 */

(function(){

    'use strict';

    angular
        .module('app.users')
        .factory('usersFactory', usersFactory);

    /* @ngInject */
    function usersFactory(Restangular){
        return {
            create: _create,
            all: _all,
            get: _get,
            edit: _edit,
            delete: _delete
        };

        function _create(data) {
            return Restangular.all('users').post(data);
        }

        function _all() {
            return Restangular.one('users').get();
        }

        function _get(id) {
            return Restangular.one('users', id).get();
        }

        function _edit(data) {
            return Restangular.one('users', data._id).customPUT(data);
        }

        function _delete(id) {
            return Restangular.one('users/'+id).remove();
        }

    }

}());
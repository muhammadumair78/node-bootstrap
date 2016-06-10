/**
 * Created By Muhammad Umair Javaid
 */

(function () {

    'use strict';

    angular.module('app', [
        'app.core',
        'app.common',
        'app.shell',
    /**
     * Application modules
     **/
        'app.auth',
        'app.welcome',
        'app.users'
    ]);

}());

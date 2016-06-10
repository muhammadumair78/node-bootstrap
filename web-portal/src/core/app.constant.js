/**
 * Created By Muhammad Umair Javaid
 */

(function () {

    'use strict';

    var toastMessages = {
        sessionExpired: 'For your protection, due to inactivity your current session has expired. Please log back in to continue.'
    };

    angular
        .module('app.core')
        .constant('toastMessages', toastMessages);

}());

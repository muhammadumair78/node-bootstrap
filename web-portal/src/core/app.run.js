/**
 * Created By Muhammad Umair Javaid
 */

(function () {

    'use strict';

    angular.module('app.core')
        .run(runFunction);

    /* @ngInject */
    function runFunction(store, Restangular, httpStatus, $rootScope, toast, $state, toastMessages, $http) {

        Restangular.addFullRequestInterceptor(function (element, operation, route, url, headers, params, httpConfig){
            $rootScope.siteLoader = true;
            var headerProperties = {};
            if(store.get('user')){
                headerProperties = {
                    'x-access-token': store.get('user').access_token,
                    'x-email-address': store.get('user').email_address
                }
            }
            return {
                element: element,
                operation : operation,
                route : route,
                url : url,
                headers: _.extend(headers, headerProperties),
                params: params,
                httpConfig: httpConfig
            };
        });

        Restangular.addResponseInterceptor(function (data, operation, what, url) {
            toggleLoader();
            return data;
        });

        Restangular.setErrorInterceptor(function (response, deferred, responseHandler) {
            toast.dismiss();
            if (response.status === httpStatus.UNAUTHORIZED) {
                store.remove('user');
                toast.error(toastMessages.sessionExpired);
                $state.go('login');
            } else if (response.status === httpStatus.NOT_FOUND) {
                toast.error(response.data);
            } else if (response.status === httpStatus.INTERNAL_SERVER_ERROR) {
                $rootScope.errorState = $state.current;
                $rootScope.errorStateParams = $state.params;
                $state.go('shell.error');
            }
            toggleLoader();
            return deferred.reject(response);
        });

        function toggleLoader() {
            var requestsExists =  false;
            if($http.pendingRequests){
                var count = $http.pendingRequests.length;
                if(requestsExists){
                    count -= 1;
                }
                if(count < 1 && $rootScope.siteLoader === true){
                    $rootScope.siteLoader = false;
                }
            }
        }
    }

}());

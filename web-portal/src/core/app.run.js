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
            return {
                element: element,
                operation : operation,
                route : route,
                url : url,
                headers: _.extend(headers, {'x-access-token': store.get('access_token')}),
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
                store.remove('access_token');
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

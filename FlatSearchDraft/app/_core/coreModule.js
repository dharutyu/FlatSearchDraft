
(function () {
    'use strict';
    define(['_core/services/routeProviderService'], function (routeProviderService) {
        return angular.module('coreModule', ['ngRoute']).
            service('routeProviderService', routeProviderService);
    })
}());
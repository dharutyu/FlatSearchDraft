
(function (define, angular) {
    'use strict';
    define(['_core/services/routeProviderService'], function (routeProviderService) {
        var moduleName = 'coreModule';
        var coreModule = angular.module(moduleName, ['ngRoute']).
        service('routeProviderService', routeProviderService);

        return coreModule;
    })
})(define, angular);
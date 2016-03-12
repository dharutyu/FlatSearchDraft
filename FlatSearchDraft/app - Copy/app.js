(function () {
    'use strict';
    define([
        'angular',
        'angular-route',

        'appConfig',
        'coreModule',
        'uiModule',
        'homeModule',
        'searchModule'

    ], function (angular, ngRoute, appConfig) {
        var moduleName = 'app';
        var app = angular.module(moduleName, [
            'ngRoute',

            'coreModule',
            'uiModule',
            'homeModule', 
            'searchModule']);
        app.config(appConfig);
        return app;
    })
}());
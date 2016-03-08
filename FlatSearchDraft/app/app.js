(function (define, angular) {
    'use strict';
    define([
        'appConfig',

    ], function (appConfig) {
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
})(define, angular);
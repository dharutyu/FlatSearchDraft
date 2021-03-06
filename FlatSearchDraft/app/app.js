﻿(function () {
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

        return angular.module('app', [
            'ngRoute',

            'coreModule',
            'uiModule',
            'homeModule',
            'searchModule'])
            .config(appConfig);
    })
}());
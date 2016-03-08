(function (define, angular) {
    'use strict';

    define(['home/homeController'], function (homeController) {

        var moduleName = 'homeModule';

        var searchModule = angular.module(moduleName, [])
            .controller('homeController', homeController);

        return searchModule;
    });
    
})(define, angular);

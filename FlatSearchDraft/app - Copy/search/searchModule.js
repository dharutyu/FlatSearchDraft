(function () {
    'use strict';

    define(['search/searchController'], function (searchController) {

        var moduleName = 'searchModule';

        var searchModule = angular.module(moduleName, [])
            .controller('searchController', searchController);
        
        return searchModule;
    });
}());
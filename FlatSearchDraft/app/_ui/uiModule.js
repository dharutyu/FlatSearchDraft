(function (define, angular) {
    'use strict';
    define(['_ui/searchForm/searchFormDirective'], function (searchFormDirective)
    {
        var moduleName = 'uiModule';
        var uiModule = angular.module(moduleName, [])
        .directive('searchForm', searchFormDirective);
    });
})(define, angular);
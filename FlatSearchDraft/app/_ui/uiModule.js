(function () {
    'use strict';
    define(['_ui/searchForm/searchFormDirective'], function (searchFormDirective) {
        return angular.module('uiModule', [])
            .directive('searchForm', searchFormDirective);
    });
}());
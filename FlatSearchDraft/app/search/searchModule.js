﻿(function () {
    'use strict';

    define(['search/searchController'], function (searchController) {

        return angular.module('searchModule', [])
            .controller('searchController', searchController);
    });
}());
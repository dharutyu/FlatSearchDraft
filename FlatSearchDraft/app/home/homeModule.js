﻿(function () {
    'use strict';

    define(['home/homeController'], function (homeController) {
        return angular.module('homeModule', [])
            .controller('homeController', homeController);
    });

}());

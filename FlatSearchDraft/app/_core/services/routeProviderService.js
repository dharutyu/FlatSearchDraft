(function () {
    'use strict';

    define([], function () {

        return ["$location", '$routeParams', function ($location, $routeParams) {

            function parse() {
                return $routeParams
            }
            function changeLocation(params) {
                $location.search(params);
            }
            return {
                parse: parse,
                changeLocation: changeLocation 
            }
        }];
    });
}());
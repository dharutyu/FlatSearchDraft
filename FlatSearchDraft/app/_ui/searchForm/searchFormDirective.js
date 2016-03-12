(function () {
    'use strict';
    define([], function () {
        return function () {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    location: '=?'
                },
                link: function (scope, element, attrs) {

                    scope.$watch('location', function (newValue, oldValue) {
                        if (oldValue != newValue) {
                            scope._location = newValue;
                        }
                    });

                    function init() {
                        scope._location = scope.location;
                    }
                    init();

                    scope._location;
                    scope.changeLocation = function () {
                        scope.location = scope._location;
                    };
                },
                templateUrl: '_ui/searchForm/searchFormDirective.html'
            };
        };
    });
}());
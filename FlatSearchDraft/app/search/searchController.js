(function (define, angular) {
    'use strict';
    define(function () {       
        return ['$scope', 'routeProviderService', function ($scope, routeProviderService) {        

            $scope.searchModel = routeProviderService.parse();
            
            $scope.$watch('searchModel', function (newValue, oldValue) {

                if (oldValue != newValue)
                {
                    routeProviderService.changeLocation($scope.searchModel);
                }
            }, true);

            $scope.changeLocation = function ()
            {
                $scope.searchModel.location = 'Yerevan';
            };
        }];
    });
})(define, angular);
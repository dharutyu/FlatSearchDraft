require(['angular', 'app'], function (angular, app) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ["app"]);
    });
});
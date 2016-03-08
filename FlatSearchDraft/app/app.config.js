(function (define, angular) {
  'use strict';
  define(function () {
    return ['$routeProvider', "$locationProvider", function ($routeProvider, $locationProvider) {

        console.log($routeProvider);
       
      $routeProvider
        .when('/search', {
          templateUrl: "/app/search/searchView.html",
          controller: "searchController"
        })
      .otherwise({
        templateUrl: "/app/home/homeView.html",
        controller: "homeController"
      });
            
    }];
  });
})(define, angular);
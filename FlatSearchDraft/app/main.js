
require.config({
    baseUrl: "/app",
    paths: {
        'angular': '/scripts/angular',
        'angular-amd': '/scripts/angular-amd',
        'angular-route': '/scripts/angular-route',
        'jquery': '/scripts/jquery-1.10.2',
        'app': "app",
        'appConfig': 'app.config',
        'coreModule': '_core/coreModule',
        'uiModule': '_ui/uiModule',
        'searchModule': 'search/searchModule',
        'homeModule': 'home/homeModule'
    },
    shim: {
        'angular': {
            deps: [
                'jquery']
        },
        'angular-route': {
            deps: [
                'angular'
            ]
        },
        'app': {
            deps: [
                'angular',
                'angular-route',

                'appConfig',
                'homeModule',
                'searchModule',
                'coreModule']
        },
        'appConfig':{
            deps: [
                'angular'
            ]
        },
        'coreModule': {
            deps: [
                'angular',
                'angular-route'
               
            ]
        },
        'uiModule': {
            deps: [
                'angular'
            ]
        },
        'homeModule': {
            deps: [
                'angular'
            ]
        },
        'searchModule': {
            deps: [
                'angular',
                'coreModule',
                'uiModule'
            ]
        }

    }
});

require(['app'], function (app) {
    angular.bootstrap(document, ['app']);
});
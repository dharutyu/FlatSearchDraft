require.config({
    baseUrl: "../app",
    paths: {
        'angular': '../scripts/angular',
        'angular-route': '../scripts/angular-route',
        'app': "app",
        'appConfig': 'app.config',
        'coreModule': '_core/coreModule',
        'uiModule': '_ui/uiModule',
        'searchModule': 'search/searchModule',
        'homeModule': 'home/homeModule'
    },
    shim: {
        'angular': {
            exports: "angular"
           
        },
        'angular-route': {
            deps: [
                'angular'
            ]
        }
    },
    deps: ['app.bootstrap']
});
angular.module("app").config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl: 'index/index.html',
            controller: 'indexCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../scripts/typings/bootstrap/bootstrap.d.ts" />
/// <reference path="../../scripts/typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />

namespace WineApp {
    export function WineConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/");

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('search', {
                url: '/',
                templateUrl: '/assets/ts/components/wine/view/search.html'
            })
            .state('list', {
                url: '/wine',
                templateUrl: '/assets/ts/components/wine/view/list.html'
            })
            .state('detail', {
                url: '/wine/:id',
                templateUrl: '/assets/ts/components/wine/view/detail.html'
            })
            .state('edit', {
                url: '/wine/:id/edit',
                templateUrl: '/assets/ts/components/wine/view/edit.html'
            });
    }
}
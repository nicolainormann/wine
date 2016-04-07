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
                url: '/list',
                templateUrl: '/assets/ts/components/wine/view/list.html'
            })
            .state('detail', {
                url: '/detail/:id',
                templateUrl: '/assets/ts/components/wine/view/detail.html',
                controller: 'DetailCtrl',
                controllerAs: 'detail',
                resolve: {
                    details: function (service, $stateParams) {
                        return service.getCurrentProduct($stateParams.id);
                    }
                }
            })
            .state('edit', {
                url: '/detail/:id/edit',
                templateUrl: '/assets/ts/components/wine/view/edit.html'
            });
    }
}
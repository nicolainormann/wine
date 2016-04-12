/// <reference path="../../../../scripts/typings/bootstrap/bootstrap.d.ts" />
/// <reference path="../../../../scripts/typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />

namespace App {
    class NavigationController {
        constructor(WineService) {
        }
    }

    class Navigation implements ng.IComponentOptions{
        public controller: any;
        public templateUrl: string;

        constructor() {
            this.controller = NavigationController;
            this.templateUrl = "/assets/ts/components/navigation/navigation.html";
        }
    }

    angular.module("app").component("navigation", new Navigation());
}
/// <reference path="../../../../scripts/typings/bootstrap/bootstrap.d.ts" />
/// <reference path="../../../../scripts/typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />

namespace App {
    class Navigation implements ng.IComponentOptions{
        public controller: any;
        public templateUrl: string = "/assets/ts/components/navigation/navigation.html";

        constructor() {
            this.controller = function () {
                console.log("asd");
            }
        }
    }

    angular.module("app").component("navigation", new Navigation());
}
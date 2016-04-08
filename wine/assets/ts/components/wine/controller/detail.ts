/// <reference path="../../../../../scripts/typings/bootstrap/bootstrap.d.ts" />
/// <reference path="../../../../../scripts/typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../../../../scripts/typings/angularjs/angular.d.ts" />

angular.module("wine")
    .controller("DetailCtrl", function (details) {
        this.product = details;
    }); 
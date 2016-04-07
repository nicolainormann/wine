/// <reference path="../../scripts/typings/bootstrap/bootstrap.d.ts" />
/// <reference path="../../scripts/typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />

namespace WineApp {
    angular.module('app', [
        "ui.router",
        "wine"
    ])        
   .config(WineApp.WineConfig)
}
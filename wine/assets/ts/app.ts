/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../scripts/typings/bootstrap/bootstrap.d.ts" />
/// <reference path="../../scripts/typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
//9abd6256d560e9392d129425afe7eee9

namespace WineApp {
    angular.module('app', [
        "ui.router",
        "wine"
    ])        
   .config(WineApp.WineConfig)
}
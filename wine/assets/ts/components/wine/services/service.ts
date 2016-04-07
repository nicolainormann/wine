/// <reference path="../../../../../scripts/typings/bootstrap/bootstrap.d.ts" />
/// <reference path="../../../../../scripts/typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../../../../scripts/typings/angularjs/angular.d.ts" />

angular.module("wine").service("service", function () {
    this.list = [];

    this.get = (url: string, $http: ng.IHttpService, $q, responseType?: string): ng.IPromise<any> => {
        var defer = $q.defer();

        $http.get(url, { responseType: responseType ? responseType : 'json' })
            .then(function successCallback(response) {
                defer.resolve(response.data);
            }, function errorCallback(reason) {
                defer.reject(reason);
            });
        return defer.promise;
    }

    this.addProductToList = (product: Object) => {
        this.list.push(product);
    }

    this.getCurrentProduct = (currentId) => {
        var product = this.list.filter((item) => {
            return item.Id == currentId;
        });

        return product.pop();
    }
});
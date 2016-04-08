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

    this.filterFromJson = (json) => {
        var filter = {};
        var appellation = [];
        var vineyard = [];

        json.forEach((item) => {
            if (appellation.indexOf(item.Appellation.Name) < 0) {
                appellation.push(item.Appellation.Name); 
            }

            if (vineyard.indexOf(item.Vineyard.Name) < 0) {
                vineyard.push(item.Vineyard.Name);
            }
        });

        filter["Appellation"] = appellation;
        filter["Vineyard"] = vineyard;

        return filter;
    }
});
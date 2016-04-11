/// <reference path="../../../../../scripts/typings/bootstrap/bootstrap.d.ts" />
/// <reference path="../../../../../scripts/typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../../../../scripts/typings/angularjs/angular.d.ts" />

angular.module("wine")
    .controller("SearchCtrl", function (service, $q, $http) {
        this.searchQuery = null;
        this.apiKey = "9abd6256d560e9392d129425afe7eee9";
        this.service = "http://services.wine.com/api/beta2/service.svc/json/catalog";
        this.products;
        this.list = service.list;
        this.total;
        this.filter;
        this.showSearchResult = false;
        this.offset = 10;

        this.filterOptions = {
            Appellation: {
                Name: ""
            },
            Vineyard: {
                Name: ""
            }
        }

        this.sortOptions = {
            options: {
                Name: "Name",
                Vineyard: "Vineyard.Name",
                Appellation: "Appellation.Name",
                Price: "PriceRetail"
            },
            reverse: false,
            currentSort: "Name"
        }

        this.updateProductSearch = () => {
            service.get(this.service + "?search=" + this.searchQuery + "&apikey=" + this.apiKey, $http, $q, 'json')
                .then((data) => {
                    this.products = [];
                    var listData = data[Object.keys(data)[1]].List;
                    listData.forEach((item) => {
                        this.products.push(item);
                    });
                        
                    this.total = data[Object.keys(data)[1]].Total;
                    this.filter = service.filterFromJson(this.products);
                    this.showSearchResult = true;
                });
        }

        this.addProductToList = (product) => {
            service.addProductToList(product);
        }

        this.isProductOnList = (product) => {
            var ids = [];
            this.list.forEach((item) => {
                ids.push(item.Id);
            });

            return ids.indexOf(product.Id) !== -1;
        }

        this.loadMoreProducts = () => {
            service.get(this.service + "?search=" + this.searchQuery + "&offset=" + this.offset + "&apikey=" + this.apiKey, $http, $q, 'json')
                .then((data) => {
                    var listData = data[Object.keys(data)[1]].List;
                    listData.forEach((item) => {
                        this.products.push(item);
                    });
                    this.filter = service.filterFromJson(this.products);
                    this.offset += 10;
                });
        }

        this.setFilter = (key, value) => {
            if (this.filterOptions[key].Name == value) {
                this.filterOptions[key].Name = '';
            }
            else {
                this.filterOptions[key].Name = value;
            }
        }

        this.isFilterActive = (key, value) => {
            return this.filterOptions[key].Name == value;
        }

        this.setSort = (value) => {
            this.sortOptions.currentSort = value;
        }

        this.isSortActive = (value) => {
            return this.sortOptions.currentSort == value;
        }

        this.setSortReverse = (value) => {
            this.sortOptions.reverse = value;
        }
    });
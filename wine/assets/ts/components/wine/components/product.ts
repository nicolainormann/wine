angular.module("wine").component("product", {
    controller: function () {
        
    },
    template: `<div class="search__product" ng-class="{'active': $ctrl.search.isProductOnList($ctrl.product)}">
                    <div class="row">
                        <div class="col-md-2 col-sm-2 col-xs-2 search__product_img">
                            <img src="{{$ctrl.product.Vineyard.ImageUrl}}" class="img-responsive" />
                        </div>

                        <div class="col-md-6 col-sm-6 col-xs-6 search__product_details">
                            <div class="row">
                                <div class="col-md-6 col-sm-6 col-xs-6">
                                    <b>Product Name:</b>
                                </div>

                                <div class="col-md-6 col-sm-6 col-xs-6 text-right">
                                    {{$ctrl.product.Name}}
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 col-sm-6 col-xs-6">
                                    <b>Vineyard:</b>
                                </div>

                                <div class="col-md-6 col-sm-6 col-xs-6 text-right">
                                    {{$ctrl.product.Vineyard.Name}}
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 col-sm-6 col-xs-6">
                                    <b>Appellation:</b>
                                </div>

                                <div class="col-md-6 col-sm-6 col-xs-6 text-right">
                                    {{$ctrl.product.Appellation.Name}}
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-3 col-xs-3 search__product_price text-right">
                            <b>{{$ctrl.product.PriceRetail}}$</b>
                        </div>

                        <div class="col-md-1 col-sm-1 col-xs-1 search__product_addtolist" ng-click="$ctrl.search.addProductToList($ctrl.product)">
                        </div>
                    </div>
                </div>`,
    bindings: { product: '=', search: '=' }
});

angular.module("wine").directive("hest", function () {
    return {
        restrict: 'A',
        controller: function ($element) {
            console.log($element);
        }
    };
});
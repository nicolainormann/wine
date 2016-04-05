angular.module("wine")
    .controller("SearchCtrl", function ($scope) {
        $scope.searchQuery = null;

        function updateSearchQuery(query) {
            $scope.searchQuery = query;
        }

        $scope.updateSearchQuery = updateSearchQuery;
    });
angular.module('customerReviews')
    .controller('customerReviews.helloWorldController', ['$scope', 'customerReviews.webApi', function ($scope, api) {
        var blade = $scope.blade;
        blade.title = 'CustomerReviews';

        blade.refresh = function () {
            api.get(function (data) {
                blade.title = 'customerReviews.blades.hello-world.title';
                blade.data = data.result;
                blade.isLoading = false;
            });
        };

        blade.refresh();
    }]);

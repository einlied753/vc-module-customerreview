angular.module('customerReviews')
    .factory('customerReviews.webApi', ['$resource', function ($resource) {
        return $resource('api/CustomerReviews');
}]);

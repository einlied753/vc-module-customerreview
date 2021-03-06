angular.module('CustomerReviews')
    .controller('CustomerReviews.reviewsListController', ['$scope', 'CustomerReviews.api', 'platformWebApp.bladeUtils', 'uiGridConstants', 'platformWebApp.uiGridHelper',
        function ($scope, reviewsApi, bladeUtils, uiGridConstants, uiGridHelper) {
            $scope.uiGridConstants = uiGridConstants;

            var blade = $scope.blade;
            var bladeNavigationService = bladeUtils.bladeNavigationService;

            blade.getSearchCriteria = function () {
                return angular.extend(filter, {
                    searchPhrase: filter.keyword ? filter.keyword : undefined,
                    sort: uiGridHelper.getSortExpression($scope),
                    skip: ($scope.pageSettings.currentPage - 1) * $scope.pageSettings.itemsPerPageCount,
                    take: $scope.pageSettings.itemsPerPageCount
                });
            };

            blade.refresh = function () {
                blade.isLoading = true;
                reviewsApi.search(blade.getSearchCriteria(), function (data) {
                    blade.isLoading = false;
                    $scope.pageSettings.totalItems = data.totalCount;
                    blade.currentEntities = data.results;
                });
            };

            blade.selectNode = function (data) {
                //$scope.selectedNodeId = data.id;

                //var newBlade = {
                //    id: 'reviewDetails',
                //    currentEntityId: data.id,
                //    currentEntity: data,
                //    title: data.name,
                //    controller: 'virtoCommerce.storeModule.storeDetailController',
                //    template: 'Modules/$(VirtoCommerce.Store)/Scripts/blades/store-detail.tpl.html'
                //};
                //bladeNavigationService.showBlade(newBlade, blade);
            };

            //function openBladeNew() {
            //    $scope.selectedNodeId = null;

            //    var newBlade = {
            //        id: 'storeDetails',
            //        currentEntity: {},
            //        title: 'stores.blades.new-store-wizard.title',
            //        subtitle: 'stores.blades.new-store-wizard.subtitle',
            //        controller: 'virtoCommerce.storeModule.newStoreWizardController',
            //        template: 'Modules/$(VirtoCommerce.Store)/Scripts/wizards/newStore/new-store-wizard.tpl.html'
            //    };
            //    bladeNavigationService.showBlade(newBlade, blade);
            //}

            blade.headIcon = 'fa-comments';

            blade.toolbarCommands = [
                {
                    name: "platform.commands.refresh", icon: 'fa fa-refresh',
                    executeMethod: blade.refresh,
                    canExecuteMethod: function () {
                        return true;
                    }
                }
                //{
                //    name: "platform.commands.add", icon: 'fa fa-plus',
                //    executeMethod: openBladeNew,
                //    canExecuteMethod: function () {
                //        return true;
                //    },
                //    permission: 'store:create'
                //}
            ];

            // simple and advanced filtering
            var filter = $scope.filter = blade.filter || {};

            filter.criteriaChanged = function () {
                if ($scope.pageSettings.currentPage > 1) {
                    $scope.pageSettings.currentPage = 1;
                } else {
                    blade.refresh();
                }
            };

            // ui-grid
            $scope.setGridOptions = function (gridOptions) {
                uiGridHelper.initialize($scope, gridOptions, function (gridApi) {
                    uiGridHelper.bindRefreshOnSortChanged($scope);
                });
                bladeUtils.initializePagination($scope.$parent);
            };

        }]);
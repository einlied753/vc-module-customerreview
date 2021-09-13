// Call this to register your module to main application
var moduleName = "customerReviews";

if (AppDependencies !== undefined) {
    AppDependencies.push(moduleName);
}

angular.module(moduleName, [])
    .config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('workspace.customerReviewsState', {
                    url: '/customerReviews',
                    templateUrl: '$(Platform)/Scripts/common/templates/home.tpl.html',
                    controller: [
                        'platformWebApp.bladeNavigationService', function (bladeNavigationService) {
                            var newBlade = {
                                id: 'blade1',
                                controller: 'customerReviews.helloWorldController',
                                template: 'Modules/$(customerReviews)/Scripts/blades/hello-world.html',
                                isClosingDisabled: true
                            };
                            bladeNavigationService.showBlade(newBlade);
                        }
                    ]
                });
        }
    ])

    .run(['platformWebApp.mainMenuService', 'platformWebApp.widgetService', '$state',
        function (mainMenuService, widgetService, $state) {
            //Register module in main menu
            var menuItem = {
                path: 'browse/customerReviews',
                icon: 'fa fa-cube',
                title: 'CustomerReviews',
                priority: 100,
                action: function () { $state.go('workspace.customerReviewsState'); },
                permission: 'customerReviews:access'
            };
            mainMenuService.addMenuItem(menuItem);
        }
    ]);

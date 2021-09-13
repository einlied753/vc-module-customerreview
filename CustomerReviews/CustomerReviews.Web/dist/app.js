/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Scripts/blades/hello-world.js":
/*!***************************************!*\
  !*** ./Scripts/blades/hello-world.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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


/***/ }),

/***/ "./Scripts/module.js":
/*!***************************!*\
  !*** ./Scripts/module.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

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


/***/ }),

/***/ "./Scripts/resources/customer-reviews-api.js":
/*!***************************************************!*\
  !*** ./Scripts/resources/customer-reviews-api.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module('customerReviews')
    .factory('customerReviews.webApi', ['$resource', function ($resource) {
        return $resource('api/CustomerReviews');
}]);


/***/ }),

/***/ 0:
/*!*************************************************************************************************************!*\
  !*** multi ./Scripts/module.js ./Scripts/blades/hello-world.js ./Scripts/resources/customer-reviews-api.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./Scripts/module.js */"./Scripts/module.js");
__webpack_require__(/*! ./Scripts/blades/hello-world.js */"./Scripts/blades/hello-world.js");
module.exports = __webpack_require__(/*! ./Scripts/resources/customer-reviews-api.js */"./Scripts/resources/customer-reviews-api.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9DdXN0b21lclJldmlld3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQ3VzdG9tZXJSZXZpZXdzLy4vU2NyaXB0cy9ibGFkZXMvaGVsbG8td29ybGQuanMiLCJ3ZWJwYWNrOi8vQ3VzdG9tZXJSZXZpZXdzLy4vU2NyaXB0cy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vQ3VzdG9tZXJSZXZpZXdzLy4vU2NyaXB0cy9yZXNvdXJjZXMvY3VzdG9tZXItcmV2aWV3cy1hcGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxLQUFLOzs7Ozs7Ozs7Ozs7QUNkTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDZDQUE2QyxFQUFFO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdjdXN0b21lclJldmlld3MnKVxyXG4gICAgLmNvbnRyb2xsZXIoJ2N1c3RvbWVyUmV2aWV3cy5oZWxsb1dvcmxkQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJ2N1c3RvbWVyUmV2aWV3cy53ZWJBcGknLCBmdW5jdGlvbiAoJHNjb3BlLCBhcGkpIHtcclxuICAgICAgICB2YXIgYmxhZGUgPSAkc2NvcGUuYmxhZGU7XHJcbiAgICAgICAgYmxhZGUudGl0bGUgPSAnQ3VzdG9tZXJSZXZpZXdzJztcclxuXHJcbiAgICAgICAgYmxhZGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYXBpLmdldChmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgYmxhZGUudGl0bGUgPSAnY3VzdG9tZXJSZXZpZXdzLmJsYWRlcy5oZWxsby13b3JsZC50aXRsZSc7XHJcbiAgICAgICAgICAgICAgICBibGFkZS5kYXRhID0gZGF0YS5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBibGFkZS5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYmxhZGUucmVmcmVzaCgpO1xyXG4gICAgfV0pO1xyXG4iLCIvLyBDYWxsIHRoaXMgdG8gcmVnaXN0ZXIgeW91ciBtb2R1bGUgdG8gbWFpbiBhcHBsaWNhdGlvblxyXG52YXIgbW9kdWxlTmFtZSA9IFwiY3VzdG9tZXJSZXZpZXdzXCI7XHJcblxyXG5pZiAoQXBwRGVwZW5kZW5jaWVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgIEFwcERlcGVuZGVuY2llcy5wdXNoKG1vZHVsZU5hbWUpO1xyXG59XHJcblxyXG5hbmd1bGFyLm1vZHVsZShtb2R1bGVOYW1lLCBbXSlcclxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsXHJcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgICAgICAuc3RhdGUoJ3dvcmtzcGFjZS5jdXN0b21lclJldmlld3NTdGF0ZScsIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvY3VzdG9tZXJSZXZpZXdzJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJyQoUGxhdGZvcm0pL1NjcmlwdHMvY29tbW9uL3RlbXBsYXRlcy9ob21lLnRwbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdwbGF0Zm9ybVdlYkFwcC5ibGFkZU5hdmlnYXRpb25TZXJ2aWNlJywgZnVuY3Rpb24gKGJsYWRlTmF2aWdhdGlvblNlcnZpY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdCbGFkZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2JsYWRlMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2N1c3RvbWVyUmV2aWV3cy5oZWxsb1dvcmxkQ29udHJvbGxlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdNb2R1bGVzLyQoY3VzdG9tZXJSZXZpZXdzKS9TY3JpcHRzL2JsYWRlcy9oZWxsby13b3JsZC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Nsb3NpbmdEaXNhYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsYWRlTmF2aWdhdGlvblNlcnZpY2Uuc2hvd0JsYWRlKG5ld0JsYWRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIF0pXHJcblxyXG4gICAgLnJ1bihbJ3BsYXRmb3JtV2ViQXBwLm1haW5NZW51U2VydmljZScsICdwbGF0Zm9ybVdlYkFwcC53aWRnZXRTZXJ2aWNlJywgJyRzdGF0ZScsXHJcbiAgICAgICAgZnVuY3Rpb24gKG1haW5NZW51U2VydmljZSwgd2lkZ2V0U2VydmljZSwgJHN0YXRlKSB7XHJcbiAgICAgICAgICAgIC8vUmVnaXN0ZXIgbW9kdWxlIGluIG1haW4gbWVudVxyXG4gICAgICAgICAgICB2YXIgbWVudUl0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiAnYnJvd3NlL2N1c3RvbWVyUmV2aWV3cycsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZmEgZmEtY3ViZScsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0N1c3RvbWVyUmV2aWV3cycsXHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogMTAwLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoKSB7ICRzdGF0ZS5nbygnd29ya3NwYWNlLmN1c3RvbWVyUmV2aWV3c1N0YXRlJyk7IH0sXHJcbiAgICAgICAgICAgICAgICBwZXJtaXNzaW9uOiAnY3VzdG9tZXJSZXZpZXdzOmFjY2VzcydcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbWFpbk1lbnVTZXJ2aWNlLmFkZE1lbnVJdGVtKG1lbnVJdGVtKTtcclxuICAgICAgICB9XHJcbiAgICBdKTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2N1c3RvbWVyUmV2aWV3cycpXHJcbiAgICAuZmFjdG9yeSgnY3VzdG9tZXJSZXZpZXdzLndlYkFwaScsIFsnJHJlc291cmNlJywgZnVuY3Rpb24gKCRyZXNvdXJjZSkge1xyXG4gICAgICAgIHJldHVybiAkcmVzb3VyY2UoJ2FwaS9DdXN0b21lclJldmlld3MnKTtcclxufV0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
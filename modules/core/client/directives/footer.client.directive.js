'use strict';

angular.module('core').directive("footer", [function () {
    return {
        templateUrl: '/core/views/partials/footer-client-view.html',
        restrict: 'E',
        replace: true,
        link: function (scope, element, attributes) {

        }
    };
}]);

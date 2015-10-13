"use strict";

/**
 * Created by H3rN4n on 10/13/15.
 */
angular.module('core').factory('Facebook', [ '$window', function($window) {
    return $window.FB;
}]);

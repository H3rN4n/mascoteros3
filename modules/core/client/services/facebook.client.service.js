"use strict";

/**
 * Created by H3rN4n on 10/13/15.
 */
angular.module('core').factory('Facebook', [ '$window', '$timeout', function($window, $timeout) {
    $timeout(function(){
        if($window.FB) {
            console.log($window.FB);
            return $window.FB;
        } else {
            return false;
        }
    }, 2000);
}]);

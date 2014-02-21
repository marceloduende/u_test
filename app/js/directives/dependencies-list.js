define(['./module'], function (directives) {
    'use strict';
    directives.directive('dependenciesList', [
        '$http', 
        '$compile', 
        function ($http, $compile) {
            return {
                restrict: 'A',
                replace: true,
                link: function(scope, elm, attrs){
                    console.log(elm);
                }
            }
        }
    ]);
});



/*define(['./module'], function (directives) {
    'use strict';
    directives.directive('appVersion', ['version', function (version) {
        return function (scope, elm) {
            elm.text(version);
        };
    }]);
});
*/


define(['./module'], function (services) {
    'use strict';
    //services.value('version', '0.1');

    services.factory('apiServices', ['$http', function($http){
        

        return {
            loadJson: function(_url){
                console.log("a");
                return $http.get(_url);
            }
        }

       

    }]);
});

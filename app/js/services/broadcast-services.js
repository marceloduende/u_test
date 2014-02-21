

define(['./module'], function (services) {
    'use strict';
    //services.value('version', '0.1');

    services.factory('broadcastServices', ['$rootScope', function($rootScope){
        

        var sharedService = {};
    
        sharedService.message = '';

        sharedService.prepForBroadcast = function(msg) {
            this.message = msg;
            this.broadcastItem();
        };

        sharedService.broadcastItem = function() {
            $rootScope.$broadcast('handleBroadcast');
        };

        return sharedService;

       

    }]);
});

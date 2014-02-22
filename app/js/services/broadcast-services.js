

define(['./module'], function (services) {
    'use strict';
    //services.value('version', '0.1');

    services.factory('broadcastServices', ['$rootScope', function($rootScope){
        

        var sharedService = {};
    
        sharedService.data = '';
        sharedService.el = '';

        sharedService.prepForBroadcast = function(data, element) {
            this.data = data;
            this.el = element;
            this.broadcastItem();
        };

        sharedService.broadcastItem = function() {
            $rootScope.$broadcast('handleBroadcast');
        };

        return sharedService;

       

    }]);
});

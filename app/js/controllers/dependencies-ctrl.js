define(['./module'], function (controllers) {
    
    controllers.controller('DependenciesCtrl', [
        '$scope',
        '$rootScope',
        'apiServices',
        'broadcastServices',
        function ($scope, $rootScope, apiServices, broadcastServices) {

            $scope.authorized = false;
            var scope = $scope;

            var globals = new Globals();
            var list = [];
            var length, count, storeName;
            var data = apiServices.loadJson(globals.JSON_URL).then(function(res){
                data = res.data;

                $rootScope.data = data;

                $scope.dependencies = data;
                $scope.authorized = true;

            });

            $scope.edit = function(obj){
                
                if(obj.currentTarget != undefined){
                    var returnedData = obj.currentTarget.attributes.data.nodeValue;
                    var el = $(obj.currentTarget).parent();
                    returnedData = jQuery.parseJSON(returnedData);
                    broadcastServices.prepForBroadcast(returnedData, el);
                }

            }

            
        }
    ]);
});
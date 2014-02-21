define(['./module'], function (controllers) {
    
    controllers.controller('DependenciesCtrl', [
        '$scope',
        '$compile',
        'apiServices',
        'broadcastServices',
        function ($scope, $compile, apiServices, broadcastServices) {

            $scope.authorized = false;
            var scope = $scope;

            var globals = new Globals();
            var list = [];
            var length, count, storeName;
            var data = apiServices.loadJson(globals.JSON_URL).then(function(res){
                data = res.data;

                $scope.dependencies = data;
                $scope.authorized = true;

            });

            $scope.edit = function(obj){
 
                if(obj.currentTarget != undefined){
                    var returnedData = obj.currentTarget.attributes.data.nodeValue;
                    returnedData = jQuery.parseJSON(returnedData);
                    broadcastServices.prepForBroadcast(returnedData);    
                }
            }

            
        }
    ]);
});
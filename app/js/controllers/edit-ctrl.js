define(['./module'], function (controllers) {
    
    controllers.controller('EditCtrl', [
        '$scope',
        'broadcastServices',
        function ($scope, broadcastServices) {
            $scope.$on('handleBroadcast', function() {
                $scope.message = broadcastServices.message;
                console.log($scope.message);
                $scope.name = $scope.message.name;
                $scope.version = $scope.message.version;
            });
        }
    ]);
});
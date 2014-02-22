define(['./module'], function (controllers) {
    
    controllers.controller('EditCtrl', [
        '$scope',
        '$rootScope',
        'broadcastServices',
        function ($scope, $rootScope, broadcastServices) {
            $scope.dependencies = "";
            $scope.$on('handleBroadcast', function() {
                $scope.message = broadcastServices.data;
                $scope.el = broadcastServices.el;
                
                $scope.name = $scope.message.name;
                $scope.version = $scope.message.version;

                
                listDependencies(); 
            });
            
            function listDependencies() {
                
                $('.filterResults').empty();
                var arrEl = [];
                $.each($($scope.el).find('li'), function(i){
                    $scope.dep = $($scope.el).find('li').eq(i).text();
                    arrEl.push($.trim($($scope.el).find('li').eq(i).text()));
                    //console.log(arrEl);
                    //var newEl = angular.element('<li>' + $scope.dep + ' <input type="checkbox" class="checkbox"> delete</li>');
                    //$('.filterResults').append(newEl);
                });
                
                $scope.dependencies = arrEl;

                console.log($scope.dependencies);

            }


        }
    ]);
});
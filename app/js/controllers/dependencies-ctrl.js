define(['./module'], function (controllers) {
    
    controllers.controller('DependenciesCtrl', [
        '$scope',
        '$compile',
        'apiServices',
        function ($scope, $compile, apiServices) {

            $scope.authorized = false;

            var globals = new Globals();
            var list = [];
            var length, count, storeName;
            var data = apiServices.loadJson(globals.JSON_URL).then(function(res){
                data = res.data;
                var ul = $("<ul class='initList'>");
                //$scope.customHtml(data[0], ul);
                ul.addClass("dependenciesList").appendTo('.dependencies');

                
                $scope.dependencies = data;
                $scope.authorized = true;

            });

            function edit(){
                console.log("porra");
            }

            
        }
    ]);
});


/*******   I gotta do the directive now ***///
define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('DependenciesCtrl', [
        '$scope',
        'apiServices',
        function ($scope, apiServices) {
            var globals = new Globals();

            var data = apiServices.loadJson(globals.JSON_URL).then(function(res){
                data = res.data;
                console.log(data);
            });
            
        }
    ]);
});

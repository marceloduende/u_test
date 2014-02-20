define(['./module'], function (controllers) {
    
    controllers.controller('DependenciesCtrl', [
        '$scope',
        '$compile',
        'apiServices',
        function ($scope, $compile, apiServices) {
            var globals = new Globals();
            var list = [];
            var length, count;
            var data = apiServices.loadJson(globals.JSON_URL).then(function(res){
                data = res.data;
                var ul = $("<ul>");
                loop(data, ul);
                ul.addClass("dependenciesList").appendTo('.dependencies');
            });

            

            function loop(obj, ul){
                
                $.each(obj, function(key, val) {
                    console.log(key);
                    
                    if(val && typeof val === "object") {
                        var ul2 = $("<ul>").appendTo(
                            $("<li>").appendTo(ul)
                        );

                        loop(val, ul2);
                    } else {
                        if(key === "name"){
                            $("<li>", {
                                id: key
                            }).text(val).appendTo(ul);
                        }
                    }    
                    //}
                    
                });

                
                
            }
        }
    ]);
});

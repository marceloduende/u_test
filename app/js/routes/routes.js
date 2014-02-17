define(['modules/app' , 'controllers/dependenciesCtrl'] , function (app) {
  return app.config(['$routeProvider' , function ($routeProvider) {
  	console.log("a");
    $routeProvider.when('/' , {controller: 'dependenciesCtrl' , templateUrl: '/views/Dependencies.html'});
  }]);

});
require.config({
  baseUrl: '/js',
  paths: {
    'jQuery': '../lib/bower_components/jquery/dist/jquery',
    'angular': '../lib/bower_components/angular/angular',
    'angular-route': '../lib/bower_components/angular-route/angular-route',
    'angular-resource': '../lib/bower_components/angular-resource/angular-resource'
    
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'angular-route' : {deps:['angular']},
    'angular-resource' : {deps:['angular']},
    'jQuery' : {'exports' : 'jQuery'},
  }
});


require(['jQuery', 'angular', 'routes/routes'] , function ($, angular, routes) {

  $(function () { // using jQuery because it will run this even if DOM load already happened
    
    //var app = angular.module('app', ['ngResources', 'ngRoute']);
    angular.bootstrap(document , ['app', 'ngRoute', 'ngResources']);
  });
});
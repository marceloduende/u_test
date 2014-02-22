require.config({
  baseUrl: '/js',
  paths: {
    'domReady': '../lib/bower_components/requirejs-domready/domReady',
    'jQuery': '../lib/bower_components/jquery/dist/jquery',
    'angular': '../lib/bower_components/angular/angular',
    'angular-route': '../lib/bower_components/angular-route/angular-route',
    'angular-resource': '../lib/bower_components/angular-resource/angular-resource'
    
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'angular-route' : {deps:['angular']},
    'angular-resource' : {deps:['angular']},
    'jQuery' : {'exports' : 'jQuery'}
  },
  deps: ['./bootstrap']
});
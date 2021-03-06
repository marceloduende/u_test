// Karma configuration
// Generated on Tue Feb 18 2014 16:46:16 GMT-0800 (PST)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '../',


    // frameworks to use
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
        //{pattern: 'lib/bower_components/requirejs-domready/domReady.js', included: false},
      //{pattern: 'lib/bower_components/requirejs/require.js', included: false},  
      {pattern: 'lib/bower_components/jquery/dist/jquery.js', included: false},
      {pattern: 'lib/bower_components/angular/angular.js', included: false},
      {pattern: 'lib/bower_components/angular-route/angular-route.js', included: false},
      {pattern: 'lib/bower_components/angular-resource/angular-resource.js', included: false},
      {pattern: 'js/app.js', included: false},
      {pattern: 'js/bootstrap.js', included: false},
      {pattern: 'js/globals.js', included: false},
      {pattern: 'js/routes.js', included: false},
      {pattern: 'js/controllers/*.js', included: false},
      {pattern: 'js/directives/*.js', included: false},
      {pattern: 'js/filters/*.js', included: false},
      {pattern: 'js/services/*.js', included: false},
      {pattern: 'js/test/*.js', included: false},
      {pattern: 'js/mockApi/dependencies.json', included: false},
      'js/requireConf.js'
    ],


    // list of files to exclude
    exclude: [
        'js/requireConf.js'.
        'lib/bower_components/requirejs-domready/domReady.js',
        


    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
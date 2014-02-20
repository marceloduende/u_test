'use strict';

describe('DependenciesCtrl', function(){
    var scope;
    //jasmine.DEFAULT_UPDATE_INTERVAL = 0;
    beforeEach(angular.mock.module('app'));

    beforeEach(angular.module.inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        $controller('DependenciesCtrl', {$scope: scope});
    }));

    it('should have variable text = "my-library"', function(){
        expect(scope.text).toBe('my-library');
    });

});




define(['./module'], function (filters) {
    'use strict';
    return filters.filter('liblist', function () {
        return function (text) {
            return text ? "porra" : "done";
        }
    });
});

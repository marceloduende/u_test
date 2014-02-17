define(['modules/app'] , function (app) {
  app.factory('Item' , ['$resource' , function ($resource) {
    return $resource('/item/:id' , {id: '@id'});
  }]);
});
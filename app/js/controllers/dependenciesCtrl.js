define(['modules/app' , 'factories/Item'] , function (app) {
  console.log(app);
  app.controller('dependenciesCtrl' , ['$scope' , 'Item' , function ($scope , Item) {
    console.log("dependenciesCtrl.js");
    $scope.items = Item.query();
    
  }]);
});
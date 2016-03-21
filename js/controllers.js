"use strict";

/**
 * MainCtrl - controller
 */
 function MainCtrl() {
 };

 function ProductsCtrl($scope,$stateParams,$http, amplify, products) {
    
     var value = amplify.get('storeName3');
     console.log("from cache = " + angular.toJson(value, true));
     $scope.products = [];
     if(angular.isUndefined(value) || value === null ){
         products.getProductsAsync(1, function (data) {
             console.log("Got response " + angular.toJson(data.products , true));
             amplify.save("storeName3", data.products);
             $scope.products = data.products;
         });
     }
     else
     {
         $scope.products = value;
     }


 };
 
 function ProductCtrl($scope,$stateParams,$http , products ) {
        

         products.getProductByIdAsync($stateParams.id, function (data) {
             console.log("Got response " + angular.toJson(data.product , true));
          
              $scope.product = data.product;
         });



	
		
};
 
 
angular
 .module('dansbutiken')
 .controller('MainCtrl', MainCtrl)
 .controller('ProductsCtrl', ProductsCtrl)
 .controller('ProductCtrl', ProductCtrl);
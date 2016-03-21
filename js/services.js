/**
 *
 */
'use strict';

angular
    .module('dansbutiken')
    .factory('products',
        function ($http) {
            return {
                getProductsAsync: function (page, callback) {
                    $http.jsonp('http://intranet.dansbutiken.se/api/product_products.php?page=1&callback=JSON_CALLBACK').success(callback);
                },
                getProductByIdAsync: function (id, callback) {
                    $http.jsonp('http://intranet.dansbutiken.se/api/product_product.php?id='+ id +'&callback=JSON_CALLBACK').success(callback);
                }
            }
        }
    )
    .factory('myCache', function ($cacheFactory) {
        return $cacheFactory('myData');
    })
    .factory('amplify', function  (localStorageService) {

        var save=function(name, data){
            amplify.store(name, data,{ expires: 60000 });
        };

        var get=function(name){
            return amplify.store(name);
        };

        var clearStore=function(name){
            return amplify.store(name, null);
        };

        return{
            save: save,
            get : get,
            clearStore : clearStore
        }
    });

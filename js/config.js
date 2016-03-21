function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise("/hero");
    $ocLazyLoadProvider.config({
        debug: false
    });

    $stateProvider
       .state('store', {
            abstract: true,
            url: "/hero",
            templateUrl: "views/common/content.html",
        })
        .state('store.hero', {
            url: '',
            templateUrl: "views/hero.html",
            data: { pageTitle: 'hero' }
        })

        .state('store.summary', {
            url: "/summary",
            templateUrl: "views/summary.html",
            data: { pageTitle: 'summary' }
        })




         .state('products', {
            abstract: true,
            url: "/products/{slug}",
            templateUrl: "views/common/products.html",
            controller: ['$scope', '$state', '$stateParams',
            function (  $scope,   $state,  $stateParams) {
                console.log('slug' +  $stateParams.slug); 

                $scope.slug = $stateParams.slug;

            }]
        })
        .state('products.list', {
            url: "",
            templateUrl: "views/product_list.html",
            controller: ProductsCtrl,
            data: { pageTitle: 'Product list' }
        })
	   .state('products.details', {
            url: "/details/{id}",
            templateUrl: "views/product_details.html",
			controller: ProductCtrl,
			data: { pageTitle: 'Product details' }
        })
   
   
  

}
angular
    .module('dansbutiken')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });

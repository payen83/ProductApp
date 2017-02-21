angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('productList', {
    url: '/list',
    templateUrl: 'templates/productList.html',
    controller: 'productListCtrl'
  })

  .state('productDetails', {
    url: '/details/:id',
    templateUrl: 'templates/productDetails.html',
    controller: 'productDetailsCtrl'
  })

  .state('newProduct', {
    url: '/new',
    templateUrl: 'templates/newProduct.html',
    controller: 'newProductCtrl'
  })

$urlRouterProvider.otherwise('/list')

  

});
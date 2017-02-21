angular.module('app.controllers', [])
  
.controller('productListCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('productDetailsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	$scope.product = $scope.myProducts.filter(function(product){
		return product.id == $stateParams.id;
	}).pop();

}])
   
.controller('newProductCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {

	$scope.submitProduct = function(){
		$scope.product.id = $scope.myProducts.length + 1;
		$scope.myProducts.push($scope.product);
		$state.go('productList');
	}


}])
 
angular.module('ts')
	.controller('indexController',function($scope){
		$scope.showAsideFn = function(){
			$scope.showAside = !$scope.showAside;
		}
	})

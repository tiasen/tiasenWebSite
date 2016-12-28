angular.module('ts')
	.controller('indexController',function($scope,$state){
		$scope.showAside = false;
		$scope.showAsideFn = function(){
			$scope.showAside = !$scope.showAside;
		};
		$scope.toSignupPage = function(){
			$state.go('signup');
		};
		$scope.toHomePage = function(){
			$state.go('home');
		};
		$scope.toSigninPage = function(){
			$state.go('login');
		};
	});

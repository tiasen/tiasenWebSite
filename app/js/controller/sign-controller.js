angular.module('ts')
	.controller('signupController',function($scope,$http){
		$scope.signupBtn = function(){
		
			$http({
				url:'http://localhost:5000/api/signup',
				method:'POST',
				timeout:30000,
				data:{
					email:$scope.email,
					password:$scope.pwd
				}
			}).success(function(data){
				console.log(data)
			}).error(function(err){
				console.log(err);
			})
		};
		
	})
	.controller('loginController',function($scope,$http){
		$scope.signinBtn = function(){
		
			$http({
				url:'http://localhost:5000/api/signin',
				method:'POST',
				timeout:30000,
				data:{
					email:$scope.email,
					password:$scope.pwd
				}
			}).success(function(data){
				console.log(data)
			}).error(function(err){
				console.log(err);
			})
		};
		
	})

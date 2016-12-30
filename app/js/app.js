var app = angular.module('ts',['ui.router','ui.bootstrap']);

app.config(function($stateProvider,$urlRouterProvider){
	console.log(window.location.hash);
	$urlRouterProvider.otherwise('/login');
//	$stateProvider.state('index',{
//		url:'/index',
//		abstract:true
//	});
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'./views/home.html'
	});
	$stateProvider.state('login',{
		url:'/login',
		templateUrl:'./views/login.html',
		controller:'loginController'
	});
	$stateProvider.state('signup',{
		url:'/signup',
		templateUrl:'./views/signup.html',
		controller:'signupController'
	})
});

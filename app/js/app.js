var app = angular.module('ts',['ui.router','ui.bootstrap']);

app.config(function($stateProvider,$urlRouterProvider){
	console.log(window.location.hash);
	$urlRouterProvider.otherwise('/index/login');
	$stateProvider.state('index',{
		url:'/index',
		abstract:true,
		templateUrl:'./views/home.html'
	});
	$stateProvider.state('home',{
		url:'/index/home',
		templateUrl:'./views/home.html'
	});
	$stateProvider.state('login',{
		url:'/index/login',
		templateUrl:'./views/login.html'
	});
	$stateProvider.state('signup',{
		url:'/index/signup',
		templateUrl:'./views/signup.html'
	})
});

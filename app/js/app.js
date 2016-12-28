var app = angular.module('ts',['ui.router','ui.bootstrap']);

app.config(function($stateProvider,$urlRouterProvider){
	console.log(window.location.hash);
	$urlRouterProvider.otherwise('/home');
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'./views/home.html'
	});
	$stateProvider.state('login',{
		url:'/login',
		templateUrl:'./views/login.html'
	})
});

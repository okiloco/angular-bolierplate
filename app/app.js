 (function(){

 angular.module('app.services', []).
 factory('appService', ['$http', function($http){
 	var appService={};

 	appService.getModules=function(){
 		var response={};
 		response=$http.get("app/data/modulos.json");
 		return response;
 	}
 	return appService;
 }]);

 angular.module('app.controllers', []).
 controller('loginCtrl', ['$scope','$location', function($scope,$location){
 	
 }]).
 controller('homeCtrl', ['$scope','appService', function($scope,appService){
 	appService.getModules().then(function(result){
 		var d=result.data; 
 		$scope.modulos=d.data;
 		console.log(d);
 	});
 }]);

 angular.module("app",["app.services","app.controllers","ngRoute"])
.config(['$routeProvider','$httpProvider',function($routeProvider,$httpProvider) {
 	$routeProvider.when("/login",{
 		controller:"loginCtrl",
 		templateUrl:"/app/templates/view-login.html",
 		// requireADLogin:true
 	}).when("/",{
 		controller:"homeCtrl",
 		templateUrl:"/app/templates/view-home.html",
 		// requireADLogin:true
 	}).
 	otherwise({redirecTo:"/login"});

 }]);

})();
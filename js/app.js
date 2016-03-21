var app = angular.module('MainApp', ['ngMaterial']).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('deep-purple')
    .accentPalette('pink');
});


var timer = 250;


var hideSection = function(i,j) {

		if ($(j).is(":visible")) {
			$(i).slideToggle();
			$($(j).get().reverse()).each(function(i, obj) {
				setTimeout(function(){
			       $(obj).animate({
					  height: "toggle",
					  opacity: "toggle"
						}, (timer * 2) + (i * timer));
			   });
			});
		}
}

var viewSection = function(i, j) {

		if ($(j).is(":visible")) {
			hideSection(i,j);

		}
    	else {

			$(i).slideToggle('fast');
			$(j).each(function(i, obj) {
				setTimeout(function(){
			       $(obj).animate({
					  height: "toggle",
					  opacity: "toggle"
						}, (timer * 2) + (i * timer));
			   });
			});
    	}
}

app.controller('MainController', 
    ['$scope', '$http', '$sce', '$mdDialog', '$mdMedia','$mdToast',
      function($scope, $http, $sce, $mdDialog, $mdMedia, $mdToast) {

	$http.get('projects.json')
	   .then(function(res){
	      $scope.projects = res.data;                
	});

	$http.get('portfolio.json')
	   .then(function(res){
	      $scope.portfolio = res.data;                
	});

	$http.get('work.json')
	   .then(function(res){
	      $scope.work = res.data;                
	});

	$scope.showProjects = function() {

		hideSection('#gallery','.portfolio');
		hideSection('#credentials', '.cred'); 
		viewSection('#projects', '.project'); 
 
	}

	$scope.showGallery = function() {
		hideSection('#projects', '.project'); 
		hideSection('#credentials', '.cred'); 
		viewSection('#gallery', '.portfolio'); 
	}

	$scope.showCredentials = function() {
		hideSection('#projects', '.project'); 
		hideSection('#gallery', '.portfolio'); 
		viewSection('#credentials', '.cred'); 
	}
   
}]);


$(function() {
				$('#projects').hide();
				$('#gallery').hide();
				$('#credentials').hide();
});
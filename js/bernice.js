(function() {

	var dataget;


	var app = angular.module('portfolio', []); 

	app.controller('portfolioController', function($scope, $http) {
	  $http.get('http://bernicewygo.github.io/portfolio.json')
	       .then(function(res){
	          $scope.infos = res.data;                
	        });
	});

	app.controller("panelController", function() {
		this.tab = 1; 

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;

		};
	})


})();
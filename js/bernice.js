(function() {

	var dataget;

	var app = angular.module('portfolio', []); 

	app.controller('portfolioController', function($scope, $http, $sce) {
	  $http.get('http://bernicewygo.github.io/portfolio.json')
	       .then(function(res){
	          $scope.infos = res.data;                
	        });

		$scope.getHTMLvalue = function(html) {
          return $sce.trustAsHtml(html);	
         };       
	});

	app.controller("panelController", function() {
		this.tab = 2; 

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;

		};
	});


})();
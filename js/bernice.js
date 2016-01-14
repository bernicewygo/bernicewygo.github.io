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

	app.controller('workController', function($scope, $http, $sce) {
	  $http.get('http://bernicewygo.github.io/work.json')
	       .then(function(response){
	          $scope.work = response.data;                
	        });

		$scope.getHTMLvalue = function(html) {
          return $sce.trustAsHtml(html);	
         };       
	});

	app.controller("panelController", function() {
		this.tab = 3; 

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;

		};
	});
  
	$('.icon').hover(function(){
		$('#skills').text($(this).attr('title'));
	},function(){
		$('#skills').text("skills");
		});

	$('.link').hover(function(){
		$link = $(this).text();
		$title = $(this).attr('title');
		$(this).html($title);
		$(this).attr("title", "");
	},function(){
		$(this).text($link);
		$(this).attr("title",$title);
		});
})();
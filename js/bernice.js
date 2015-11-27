(function() {

	var dataget;

	var app = angular.module('portfolio', ['vcRecaptcha']); 

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
		this.tab = 1; 

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;

		};
	});

	app.controller('recapCtrl',['vcRecaptchaService','$http',function(vcRecaptchaService,$http){
		var vm = this;
		vm.publicKey = "6LcE5xETAAAAAGG3ULuCu5KRfin25iGCRaV33-Bz";
		
		vm.signup = function(){
			
			/* vcRecaptchaService.getResponse() gives you the g-captcha-response */
			
			if(vcRecaptchaService.getResponse() === ""){ //if string is empty
				alert("Please resolve the captcha and submit!")
			}else {
				var post_data = {  //prepare payload for request
					'name':vm.name,
					'email':vm.email,
					'message':vm.message,
					'g-recaptcha-response':vcRecaptchaService.getResponse()  //send g-captcah-reponse to our server
				}
				
				/* Make Ajax request to our server with g-captcha-string */
				$http.post('http://strawberry-tenshi.net/api',post_data).success(function(response){
					if(response.error === 0){
						alert("Messaged");
					}else{
						alert("User verification failed");
					}
				})
				.error(function(error){
				
				})
			}
		}
	}]);

})();
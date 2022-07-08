var app = angular.module("rifqymuskar", ["ngRoute"])

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "/home.html"
  })
  .when("/resume", {
    templateUrl : "./resume.html"
  })
  .when("/portofolio", {
    templateUrl : "./portofolio.html"
  })
  .when("/contact", {
    templateUrl : "./contact.html"
  })

  $locationProvider.html5Mode({
		enabled: true,
		requireBase: true 
	});
});
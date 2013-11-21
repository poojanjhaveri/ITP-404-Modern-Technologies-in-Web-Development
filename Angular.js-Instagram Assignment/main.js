// JavaScript Document for Instagram Search Controller
var app = angular.module('instagram-search-app',[]);
app.controller('InstagramSearchController',function($scope,$http)
{
	
	$scope.search=function()
	{
		
		var tag = $scope.searchinstagram;
		$scope.loading=true;
		var url ="https://api.instagram.com/v1/tags/"+tag+"/media/recent?client_id=5a2cc9851c0f45f79561803af05a97f6&callback=JSON_CALLBACK"
		var promise = $http.jsonp(url);
		promise.then(function(response)
		{
			var images = response.data.data;
			console.log(images);
			$scope.images=images;
			$scope.loading=false;
			
		});
	}

});

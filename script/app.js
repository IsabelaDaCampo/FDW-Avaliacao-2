var app = angular.module('theDogShow', []);

app.controller('myController', myController);

function myController($scope, $http) {
  $scope.title = "THE DOG SHOW";
  $scope.apiKey = 'e7a10eb5-1c5c-43fa-b0fb-363351d6cf4e'
  $scope.url = 'https://api.thedogapi.com/v1/';
  $scope.image = 'https://api.thedogapi.com/v1/images/';
  $scope.cdnImage = 'https://cdn2.thedogapi.com/images/';

  $scope.breed = [];
  $scope.searchBreeds = [];
  $scope.topImage = [];

  $scope.listBreeds = function () {
    $http
      .get(
        $scope.url + 'breeds?limit=10'
      )
      .success(function (dados) {
        console.log("breed", dados)
        $scope.breed = dados;
     });
  };

  $scope.searchBreed = function (nameBreed) {
    $http
      .get(
        $scope.url + 'breeds/search?q=' + nameBreed
      )
      .success(function (dados) {
        console.log("search breed", dados)
        $scope.searchBreeds = dados;
     });
  };

  $scope.topImages = function () {
    $http
      .get(
        $scope.url + 'images/search?limit=10'
      )
      .success(function (dados) {
        console.log("top images", dados)
        $scope.topImage = dados;
     });
  };

  $scope.initData = function () {
    $scope.listBreeds();
    $scope.topImages();
  };
}

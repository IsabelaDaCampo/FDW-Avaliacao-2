var app = angular.module('theDogaAPI', []);

app.controller('myController', myController);

function myController($scope, $http) {
  $scope.title = "THE DOG API";
  $scope.apiKey = 'e7a10eb5-1c5c-43fa-b0fb-363351d6cf4e'
  $scope.url = 'https://api.thedogapi.com/v1/';
  $scope.image = 'https://api.thedogapi.com/v1/images/';
  $scope.cdnImage = 'https://cdn2.thedogapi.com/images/';

  $scope.breed = [];
  $scope.searchBreeds = [];
  $scope.topImage = [];

  $scope.topImages = function () {
    $http
      .get(
        $scope.url + 'images/search?limit=10'
      )
      .success(function (dados) {
        $scope.topImage = dados;
     });
  };

  $scope.listBreeds = function () {
    $http
      .get(
        $scope.url + 'breeds?limit=20'
      )
      .success(function (dados) {
        $scope.breed = dados;
     });
  };

  $scope.searchBreed = function (nameBreed) {
    $http
      .get(
        $scope.url + 'breeds/search?q=' + nameBreed
      )
      .success(function (dados) {
        $scope.searchBreeds = dados;
     });
  };

  $scope.initData = function () {
    $scope.topImages();
    $scope.listBreeds();
  };
}

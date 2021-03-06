'use strict';

angular.module('foodApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    $scope.addIngredient = function (newIngredient) {
      newIngredient.id = $rootScope.ingredients[$rootScope.ingredients.length - 1].id + 1;
      $rootScope.ingredients.push(angular.copy(newIngredient));
      $scope.newIngredient = {};
    };
  });
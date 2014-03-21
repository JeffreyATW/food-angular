'use strict';

angular.module('foodApp')
  .controller('IngredientCtrl', function ($scope, $rootScope, $routeParams, getByIdFilter) {
    $scope.ingredient = getByIdFilter($rootScope.ingredients, parseInt($routeParams.ingredientId, 10));
  });
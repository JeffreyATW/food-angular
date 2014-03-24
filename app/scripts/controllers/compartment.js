'use strict';

angular.module('foodApp')
  .controller('CompartmentCtrl', function ($scope, $rootScope, $routeParams, getByIdFilter) {
    $scope.editing = false;
    $scope.compartment = getByIdFilter($rootScope.compartments, parseInt($routeParams.compartmentId, 10));
    $scope.addIngredient = function (newIngredient) {
      newIngredient.compartment = $scope.compartment.id;
      newIngredient.id = $rootScope.ingredients[$rootScope.ingredients.length - 1].id + 1;
      $rootScope.ingredients.push(angular.copy(newIngredient));
      $scope.newIngredient = {};
    };
  });
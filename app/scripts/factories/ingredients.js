'use strict';

angular.module('foodApp')
  .factory('ingredientsFactory', function ($http) {
    return {
      getIngredients: function () {
        return $http.get('/ingredients.json');
      }
    };
  });

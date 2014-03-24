'use strict';

angular.module('foodApp')
  .factory('resolver', function ($http, $q, $rootScope) {
    return function () {
      var deferred = $q.defer(),
        compartments;
      if ($rootScope.ingredients !== undefined) {
        deferred.resolve();
      } else {
        $http.get('/compartments.json').then(function (compartmentsResponse) {
          compartments = compartmentsResponse.data;
          return $http.get('/ingredients.json');
        }).then(function (ingredientsResponse) {
          deferred.resolve();
          $rootScope.compartments = compartments;
          $rootScope.ingredients = ingredientsResponse.data;
        });
      }
      return deferred.promise;
    };
  });
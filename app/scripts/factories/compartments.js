'use strict';

angular.module('foodApp')
  .factory('compartmentsFactory', function ($http) {
    return {
      getCompartments: function () {
        $http.get('/compartments.json');
      }
    };
  });

'use strict';

angular.module('foodApp')
  .filter('attribute', function() {
    return function(input, id) {
      return input[id];
    }
  });
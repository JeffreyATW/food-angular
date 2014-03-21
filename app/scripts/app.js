'use strict';

angular.module('foodApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    var resolve = {
      resolveData: function (resolver) {
        return resolver();
      }
    }

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: resolve
      })
      .when('/ingredients/:ingredientId', {
        templateUrl: 'views/ingredient.html',
        controller: 'IngredientCtrl',
        resolve: resolve
      })
      .otherwise({
        redirectTo: '/'
      });
  });

require('scripts/factories/*');
require('scripts/filters/*');
require('scripts/controllers/*');
(function() {
  'use strict';

  angular
    .module('threeDoor')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {
    $scope.totalPlays = 0;
  }
})();

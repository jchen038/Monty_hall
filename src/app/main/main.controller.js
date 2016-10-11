(function() {
  'use strict';

  angular
    .module('threeDoor')
    .controller('MainController', ['$scope', '$timeout', MainController]);

  /** @ngInject */
  function MainController($scope, $timeout) {
    $scope.switch = false;
    $scope.totalPlays = 1000;
    $scope.results = {total: 0, win: 0, lose: 0};

    $scope.toggleSwitch = function() {
      if($scope.switch) {
        $scope.switch = false;
      } else {
        $scope.switch = true;
      }
    }

    $scope.letsGo = function() {
      var doors = [1, 2, 3];
      $scope.results = {total: 0, win: 0, lose: 0};

      for(var count = 1; count <= $scope.totalPlays; count++) {
        $timeout(function() {
          var pick = Math.floor(Math.random() * 1000) % 3;
          var answer = Math.floor(Math.random() * 1000) % 3
          if($scope.switch) {
            if(pick !== answer) {
              $scope.results.win += 1;
            } else {
              $scope.results.lose += 1;
            }
          } else {
            if(pick === answer) {
              $scope.results.win += 1;
            } else {
              $scope.results.lose += 1;
            }
          }

          $scope.results.total += 1;
        }, 500);
      }
    }

    $scope.reset = function() {

    }
  }
})();

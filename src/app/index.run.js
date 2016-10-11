(function() {
  'use strict';

  angular
    .module('threeDoor')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

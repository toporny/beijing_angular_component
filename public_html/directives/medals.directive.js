(function () {
    var componentName = 'medalStats',
        templateUrl = 'directives/medals.tpl.html';

    angular.module('challengeApp')
        .directive(componentName, component)
        .controller(componentName, medalCtrl);

    // for unit testing: $controller('medal') === new instance of 'medalCtrl'

    function component() {
        return {
            scope: {
            },
            controller: medalCtrl,
            controllerAs: '$ctrl',
            bindToController: true,
            templateUrl: templateUrl
        };
    }

    medalCtrl.$inject = ['$http', 'customCommunication'];

    function medalCtrl($http, customCommunication) {
        var $ctrl = this;
        $ctrl.init = init;
        $ctrl.sortChange = sortChange;
        
        function sortChange(sortby){
          if (sortby == $ctrl.sortby) {
            $ctrl.reverse = !$ctrl.reverse;
            return;
          }
          $ctrl.sortby = sortby;
        }

        function init(){
          $ctrl.httpStatus = 0;
          $ctrl.sortby = 'gold';
          $ctrl.reverse = true;
          
          customCommunication.getJsonData()
          .then(function (response) {
            $ctrl.medalData = response;
            $ctrl.httpStatus = 1;
          })
          .catch(function(fallback) {
            $ctrl.httpStatus = -1;
            console.warn('error communication:', fallback);
          });
        }

        activate();

        /**
         *  initialize
         */
        function activate() {
            $ctrl.init();
        }
    }
})();
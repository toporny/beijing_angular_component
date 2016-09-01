(function () {

    angular.module('challengeApp')
        .directive('medalStats', component)

    function component() {
        return {
            scope: {},
            controller: medalCtrl,
            controllerAs: '$ctrl',
            templateUrl: 'directives/medals.tpl.html'
        };
    }

    medalCtrl.$inject = ['$http', 'customCommunication', 'jsonEndpoint'];

    function medalCtrl($http, customCommunication, jsonEndpoint) {
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
          
          customCommunication.getJsonData(jsonEndpoint)
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
(function() {
  angular.module('challengeApp')
  .controller('MedalsController', MedalsController);

  MedalsController.$inject = ['$scope'];

  function MedalsController ($scope ) {
    vm = this;
    vm.data = {
      price : '0'
    };
    that = vm;
 
      that.data.price = '123';
 
  }
})();



(function () {
    var componentName = 'medalStats',
        templateUrl = 'directives/medals.tpl.html';

    angular.module('challengeApp')
        .directive(componentName, component)
        .controller(componentName, medalCtrl);

    // for unit testing: $controller('intro') === new instance of 'medalCtrl'

    function component() {
        return {
            scope: { },
            controller: medalCtrl,
            controllerAs: '$ctrl',
            bindToController: true,
            templateUrl: templateUrl
        };
    }

    medalCtrl.$inject = ['$http', 'customCommunication' , 'country_codes'];

    function medalCtrl($http, customCommunication, country_codes) {
        // {
        //   "athlete": "KOGO, Micah",
        //   "country": "KEN",
        //   "sex": "Men",
        //   "event": "10000m",
        //   "medal": "Bronze"
        // },

        var $ctrl = this;
        $ctrl.init = init;

        function getJsonData(){

        }

        function init(){

          $ctrl.httpStatus = 1;

          customCommunication.getJsonData()
          .then(function (response) {
            for (i=0; i<response.length; i++) {
              response[i].country_name = country_codes[response[i].country];
            }
            console.log('response', response);
            //this.push(key + ': ' + value);
            return response;
          })
          .catch(function(fallback) {
            console.warn('error communication:', fallback);
          });

          // $http({
          //   method: 'GET',
          //   url: 'athletic_medalists.json.txt'
          // }).then(function successCallback(response) {
          //   console.log(response);
          //   $ctrl.httpStatus = -1; // called asynchronously if an error occurs  or server returns response with an error status.
          //   $ctrl.errorDescription = 'Problem with getting JSON data. Check your internet connection.';
          // }, function errorCallback(response) {
          //   $ctrl.httpStatus = -1; // called asynchronously if an error occurs  or server returns response with an error status.
          //   $ctrl.errorDescription = 'Problem with getting JSON data. Check your internet connection.';
          //   console.error($ctrl.errorDescription + ' from url: ' +jsonEndpoint);
          // });
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
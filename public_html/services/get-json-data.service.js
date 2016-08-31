(function() {
    angular
        .module('challengeApp')
        .factory('customCommunication', customCommunication);

    customCommunication.$inject = ['$q', '$http', 'jsonEndpoint'];

    function customCommunication($q, $http, jsonEndpoint) {
        // interface
        var service = {
            getJsonData: getJsonData
        };

        return service;

        // functions

        function getJsonData(command) {
          return $http.get(jsonEndpoint).then(function(response) {
            //console.log('response',response);
            if (typeof response.data === "object") {
              return response.data;
            } else {
              return $q.reject(response.data);
            }
          }, function(response) {
            return $q.reject(response.data);
          });
        }
    }
})();


 
(function() {
    angular
        .module('challengeApp')
        .factory('customCommunication', customCommunication);

    customCommunication.$inject = ['$q', '$http', 'country_codes'];

    function customCommunication($q, $http, country_codes) {
        
        // interface

        var service = {
            getJsonData: getJsonData,
            makeFuncySort: makeFuncySort
        };

        return service;

        // functions

        function makeFuncySort(responseData) {

          aCountriesArray = [];

          // make table with all winning countries
          for (i=0; i<responseData.length; i++) {
            if (aCountriesArray.indexOf(responseData[i].country) == -1) {
              aCountriesArray.push(responseData[i].country);
            }
          }

          // create countries object with empty medal properities
          oCountries = {};
          
          for (i=0; i<aCountriesArray.length; i++) {
            
            oCountries[aCountriesArray[i]] = {
              country_code: aCountriesArray[i],
              country_name: country_codes[aCountriesArray[i]]['state'],
              flag: country_codes[aCountriesArray[i]]['flag'],
              gold:   0,
              silver: 0,
              bronze: 0
            }
          }

          // increment medals counters
          for (i=0; i<responseData.length; i++) {
            switch (responseData[i].medal) {
              case 'Gold': oCountries[responseData[i].country].gold++;
              break;
              case 'Silver':  oCountries[responseData[i].country].silver++;
              break;
              case 'Bronze': oCountries[responseData[i].country].bronze++;
              break;
            }
          }

          // prepare return array
          aReturn = new Array();

          angular.forEach(oCountries, function(value, key) {
            aReturn.push(value);
          });
          console.log(aReturn.length);
          return aReturn;

        }



        function getJsonData(path) {
          return $http.get(path).then(function(response) {
            if (typeof response.data === "object") {
              aReturn = makeFuncySort(response.data);
              return aReturn;

            } else {
              return $q.reject(response.data);
            }
          }, function(response) {
            return $q.reject(response.data);
          });
        }
    }
})();


 
(function() {
    angular
        .module('challengeApp')
        .factory('customCommunication', customCommunication);

    customCommunication.$inject = ['$q', '$http', 'jsonEndpoint', 'country_codes'];

    function customCommunication($q, $http, jsonEndpoint, country_codes) {
        
        // interface

        var service = {
            getJsonData: getJsonData
        };

        return service;

        // functions

        function getJsonData(command) {
          return $http.get(jsonEndpoint).then(function(response) {
            if (typeof response.data === "object") {
              aCountriesArray = [];

              // make table with all winning countries
              for (i=0; i<response.data.length; i++) {
                if (aCountriesArray.indexOf(response.data[i].country) == -1) {
                  aCountriesArray.push(response.data[i].country);
                }
              }

              // create countries object with empty medal properities
              oCountries = {};
              
              for (i=0; i<aCountriesArray.length; i++) {
                
                console.log(aCountriesArray[i]);
                //console.log(country_codes[aCountriesArray[i]]);
                oCountries[aCountriesArray[i]] = {
                  country_code: aCountriesArray[i],
                  country_name: country_codes[aCountriesArray[i]]['state'],
                  flag: country_codes[aCountriesArray[i]]['flag'],
                  gold:0,
                  silver:0,
                  bronze:0
                }
              }

              // increment medals counters
              for (i=0; i<response.data.length; i++) {
                switch (response.data[i].medal) {
                  case 'Gold': oCountries[response.data[i].country].gold++;
                  break;
                  case 'Silver':  oCountries[response.data[i].country].silver++;
                  break;
                  case 'Bronze': oCountries[response.data[i].country].bronze++;
                  break;
                }
              }

              // prepare return array
              aReturn = new Array();

              angular.forEach(oCountries, function(value, key) {
                aReturn.push(value);
              });

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


 
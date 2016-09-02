(function() {
   describe('customCommunication service', function() {
 
      // Load the challengeApp module, which contains the directive
      beforeEach(module('challengeApp'));

      beforeEach(inject(function(_customCommunication_) {
         customCommunication = _customCommunication_;
      }));

      it('should customCommunication be defined', function () {
         expect(customCommunication).toBeDefined();
      });


     it('should has 3 records after optimization', function () {
      var jsonData = [
         {"athlete": "KOGO, Micah","country": "KEN","sex": "Men","event": "10000m","medal": "Bronze"},
         {"athlete": "BEKELE, Kenenisa","country": "ETH","sex": "Men","event": "10000m","medal": "Gold"},
         {"athlete": "SIHINE, Sileshi","country": "ETH","sex": "Men","event": "10000m","medal": "Silver"},
         {"athlete": "FLANAGAN, Shalane","country": "USA","sex": "Women","event": "10000m","medal": "Bronze"},
         {"athlete": "DIBABA, Tirunesh","country": "ETH","sex": "Women","event": "10000m","medal": "Gold"}
      ];
      expect(customCommunication.makeFuncySort(jsonData).length).toBe(3);
     });

  });
})();



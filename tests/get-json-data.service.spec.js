// Be descriptive with titles here. The describe and it titles combined read like a sentence.
describe('TESTING factory', function() {

	beforeEach(module('challengeApp'));

	var $customCommunication;
	var $httpBackend;

   beforeEach(inject(function($injector) {
     // Set up the mock http service responses
     $httpBackend = $injector.get('$httpBackend');

     // authRequestHandler = $httpBackend.when('GET', '/auth.py')
     //                        .respond({userId: 'userX'}, {'A-Token': 'xxx'});
     
     $customCommunication = $injector.get('customCommunication');
   }));




	// inject(function($injector) {
	// 	customCommunication = $injector.get('customCommunication');
	// });

	// it('customCommunication test', function() {
	// 	$customCommunication.getJsonData('tests/test.json');
	// 	// An intentionally failing test. No code within expect() will never equal 4.
	// 	//expect($customCommunication.getJsonData('tests/test.json')).toEqual('123');
	// });


	// it('should contain a medalStats',
	// 	inject(function($medalStats') {
	// 	expect('medalStats').not.to.equal(null);
	// }));




    // beforeEach(function (done) {
    //     module('challengeApp');
    //     inject(function ($injector) {
    //         $httpBackend = $injector.get('$httpBackend');
    //         medalStats = $injector.get('medalStats');
    //     });
    //     // Loading fixtures
    //     // $.when(
    //     //     $.getJSON('base/test/mock/test_resultset.json', function (data) { testResultSet = data; }),
    //     //     $.getJSON('base/test/mock/test_other_data.json', function (data) { otherTestData = data; })
    //     // ).then(done);
    // });


	it('something', function() {

		// An intentionally failing test. No code within expect() will never equal 4.
		expect(2+2).toEqual(4);
	});

});
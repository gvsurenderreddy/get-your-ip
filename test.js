var should = require('chai').should();
var publicIp = require('./index.js');

describe('connection tests', function() {
	it('should get ip in request', function() {
		publicIp(function(data) {
			data.should.not.empty;
		});
	});
});
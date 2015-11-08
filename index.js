'use strict';
var http = require('http');
module.exports = function(cb) {
	var url = 'http://ip-api.com/json';
	var result = http.get(url, function(res) {
		var body = '';
		res.on('data', function(data) {
			body = body + data;
		});
		
		res.on('end', function() {
			var jsonData = JSON.parse(body);
			cb(jsonData.query);
		});
	});
	
	result.on('error', function(e) {
		cb(e + " Unable to reach server");
	});
};
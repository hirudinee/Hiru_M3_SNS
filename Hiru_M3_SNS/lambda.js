let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {

	console.log('This is the log to know that trigger has startted',event)
	callback(null,'Successfully executed');
}
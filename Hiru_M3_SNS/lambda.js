let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {

	console.log('This is the log to know that trigger has started', event);
	sns.getTopicAttributes({
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:new_resource_hiru'
	}).promise()
		.then(data => {
			console.log('success ',data);
		})
		.catch(err => {
			console.log('error ',err);
		});



	callback(null, 'Successfully executed');
}
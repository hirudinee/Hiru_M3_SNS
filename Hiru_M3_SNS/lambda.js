let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {

	console.log('This is the log to know that trigger has started', event);

	sns.getTopicAttributes({
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:new_resource_hiru'
	}).promise()
		.then(data => {
			console.log('succuess getTopicAttributes',data);
		})
		.catch(err => {
			console.log('error getTopicAttributes',err);
		});

	sns.subscribe({
		Protocol: 'sqs',
		Endpoint: 'arn:aws:sqs:us-east-1:480964559519:Hiru_Test1201',
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:new_resource_hiru'
	}).promise()
		.then(data => {
			console.log('succuess subscribe',data);
		})
		.catch(err => {
			console.log('error subscribe',err);
		});


	sns.unsubscribe({
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:new_resource_hiru',
		SubscriptionArn: 'arn:aws:sns:us-east-1:480964559519:new_resource_hiru:7fca73d1-1aa3-4eed-b5c7-dc31ae15205e'
	}).promise()
		.then(data => {
			console.log('succuess unsubscribe',data);
		})
		.catch(err => {
			console.log('succuess unsubscribe',err);
		});






	callback(null, 'Successfully executed');
}
let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {

	console.log('This is the log to know that trigger has started', event);
	sns.getTopicAttributes({
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:new_resource_hiru'
	}).promise()
		.then(data => {
			console.log('success getTopicAttributes', data);
		})
		.catch(err => {
			console.log('error getTopicAttributes ', err);
		});
	sns.listSubscriptionsByTopic({
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:new_resource_hiru'
	}).promise()
		.then(data => {
			console.log('success listSubscriptionsByTopic ', data);
		})
		.catch(err => {
			console.log('success listSubscriptionsByTopic ', data);
		});

	sns.setTopicAttributes({
		AttributeName: 'DisplayName',
		AttributeValue: 'Changed by the lambda',
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:new_resource_hiru'
	}).promise()
		.then(data => {
			console.log('success setTopicAttributes ', data);
		})
		.catch(err => {
			console.log('success setTopicAttributes ', data);
		});

	sns.subscribe({
		Protocol: 'email',
		Endpoint: 'hirudineel@gmail.com',
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:new_resource_hiru'
	}).promise()
		.then(data => {
			console.log('success subscribe ', data);
		})
		.catch(err => {
			console.log('success subscribe ', data);
		});




	callback(null, 'Successfully executed');
}
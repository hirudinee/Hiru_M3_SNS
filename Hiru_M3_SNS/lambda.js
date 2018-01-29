let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {

	console.log('This is the log to know that trigger has started', event)
	sns.publish({
		Message: 'this is a test message',
		Subject: 'test',
		MessageAttributes: {
			'key001': {
				DataType: 'String',
				StringValue: 'test'
			},
			'key003': {
				DataType: 'Number',
				StringValue: '001'
			},
			'key004': {
				DataType: 'String.Array',
				StringValue: '11'
			},
			'key002': {
				DataType: 'Binary',
				StringValue: '1'
			},
		},
		MessageStructure: 'String',
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:new_resource_hiru'
	}).promise()
		.then(data => {
			console.log('success ',data)
		})
		.catch(err => {
			console.log('err ',err)
		});

	
	callback(null, 'Successfully executed');
}
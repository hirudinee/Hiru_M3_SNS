let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {

	// console.log('This is the log to know that trigger has started', event);
	// sns.confirmSubscription({
	// 	Token: '2336412f37fb687f5d51e6e241da92fd74469bcf40ac3553960a9221f6189934edbd390790357d4675be3cb01f931b6a2eebc6d918f52881f320f7586928045eed26570762662deea161da12ebcd4c77dcfd7cc7bdc6bd0abc50cb05bcd5601036855fb316e47d5cf374e21780fa14d3361a3c9e97b5939d74749c18ddab923f',
	// 	TopicArn: 'arn:aws:sns:us-east-1:480964559519:new_resource_hiru',
	// 	AuthenticateOnUnsubscribe: 'false'
	// }).promise()
	// 	.then(data => {
	// 		console.log('success confirmSubscription ', data);
	// 	})
	// 	.catch(err => {
	// 		console.log('error confirmSubscription ', err);
	// 	});

	sns.unsubscribe({
		SubscriptionArn: 'arn:aws:sns:us-east-1:480964559519:new_resource_hiru:6fbf700d-301d-4709-8877-77e9c98388cd'
	}).promise()
		.then(data => {
			console.log('success unsubscribe ', data);
		})
		.catch(err => {
			console.log('error unsubscribe ', err);
		});




	callback(null, 'Successfully executed');
}
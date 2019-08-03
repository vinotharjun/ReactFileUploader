if (!process.env.NODE_ENV) require('dotenv').config();

const express = require('express');
const AWS = require('aws-sdk');
var path = require('path');
var env =  'production';

const app = express();
const port = process.env.PORT;
if (env === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
}
const s3 = new AWS.S3({
	signatureVersion: 'v4',
	accessKeyId: process.env.AWS_ACCESS_KEY,
	secretAccessKey: process.env.AWS_SECRET_KEY,
	region: 'ap-south-1'
});
const s3Bucket = process.env.S3_BUCKET_NAME;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/getUploadLink', (req, res) => {
	const params = {
		Bucket: s3Bucket,
		Key: `${req.body.fileName}-${Date.now() + req.body.fileExtension}`
	};
	try {
		const uploadLink = s3.getSignedUrl('putObject', params);
		res.json({ uploadLink });
	} catch (err) {
		res.status(500).json({ err });
	}
});

app.use('*', (req, res) => res.json({ msg: 'Server working !' }));

app.listen(port, () => console.log(`Server listening in port ${port}`));

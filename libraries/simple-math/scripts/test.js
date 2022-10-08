'use strict';
const { deploy } = require('roku-deploy');
const net = require('net');
require('dotenv').config();

console.log('Packaging and installing...');

const client = new net.Socket();
client.connect(8085, process.env.ROKU_HOST, function() {
	console.log('Connected');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
});

client.on('close', function() {
	console.log('Connection closed');
});

new Promise(resolve => setTimeout(resolve, 1500)).then(() => {
console.log('\n\n-----\n');
/*	deploy({
	    host: process.env.ROKU_HOST,
	    password: process.env.ROKU_PASSWORD
	}).then(result => {
	    console.log('Done:', result.message);
	});*/
});


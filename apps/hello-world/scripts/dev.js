'use strict';
const { deploy } = require('roku-deploy');
require('dotenv').config();

console.log('Packaging and installing...');

deploy({
    host: process.env.ROKU_HOST,
    password: process.env.ROKU_PASSWORD
}).then(result => {
    console.log('Done:', result.message);
});

#!/usr/bin/env node

'use strict';

const mongoose = require('mongoose');
const factorConfig = require('../src/configs/12-factor-config');
const mongoUrl = 'mongodb://dbUser:dbPassword1@ds249623.mlab.com:49623/getir-case-study';


mongoose.connect(mongoUrl, { useNewUrlParser: true , });
const db = mongoose.connection;

if (db) {
    console.error('Connected.');
} else {
    console.error('Connection failed.');
}

const app = require('../src/app');
const port = parseInt(factorConfig.desiredPort, 10);
const server = app.listen(port);


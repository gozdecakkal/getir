'use strict';

const express = require('express');
const router = new express.Router();
router.use(require('./result-route'));// sample
module.exports = router;

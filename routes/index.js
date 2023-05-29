const express = require('express');
const router = express.Router();
console.log('Router is started...');

router.use('/api',require('./api'));

module.exports = router;

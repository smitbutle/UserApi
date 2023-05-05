const express = require('express');
const router = express.Router();
const { createUser, getUser } = require('./controller');



router.post('/user', createUser);
router.get('/show', getUser);

module.exports = router;


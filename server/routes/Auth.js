const express = require('express');
const router = express.Router();
const { registration, login, getUser } = require('../controller/Auth');
const { verifytoken } = require('../middlewares/Auth')

// ------- routes -------

router.post('/registration', registration);
router.post('/login', login);
router.get('/user-details', verifytoken, getUser)

module.exports = router;
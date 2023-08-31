const express = require('express')
const router = express.Router()
const {registerUser} = require('../controllers/userController')
//creates a user
router.post('/', registerUser)

module.exports = router
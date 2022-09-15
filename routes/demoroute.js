const express = require('express')
const router = express.Router()
const controller = require('../controllers/democontroller')

router.get('/demo', controller.demo)

module.exports = router
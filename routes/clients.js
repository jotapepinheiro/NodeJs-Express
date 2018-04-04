const express = require('express')
const router = express.Router()
const clientsController = require('../controllers/clients')

router.get('/list', clientsController.list)
router.get('/new', clientsController.create)

module.exports = router
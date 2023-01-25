const express = require('express')
const router = express.Router()
const staffController = require("../controllers/staff.controller")

router.get('/', staffController.getStaffPage )
router.get('/login', staffController.getStaffLoginPage )

module.exports = router;
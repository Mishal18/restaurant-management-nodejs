const express = require('express')
const router = express.Router()
const adminController = require("../controllers/admin.controller")

router.get('/', adminController.getAdminPage )
router.get('/login', adminController.getAdminLoginPage )

module.exports = router;
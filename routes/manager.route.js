const express = require('express')
const router = express.Router()
const managerController = require("../controllers/manager.controller")

router.get('/', managerController.getManagerPage )
router.get('/login', managerController.getManagerLoginPage )
router.get('/menu',managerController.getManagerMenuPage)
router.get('/menu/add-category', managerController.getManagerAddCategoryPage)
router.post('/menu/add-category', managerController.postManagerAddCategoryPage)

module.exports = router;
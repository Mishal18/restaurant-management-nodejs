const router = require('express').Router()
const userController = require('../controllers/user.controller') 

router.get('/', userController.getUserPage)
router.get('/login', userController.getUserLoginPage)
router.get('/signup', userController.getUserSignupPage)
router.get('/menu', userController.getUserMenuPage)
router.get('/menu/menu-items', userController.getUserMenuItemPage)

module.exports = router;
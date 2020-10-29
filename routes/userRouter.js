const router = require('express').Router()
const { getUser } = require('../controllers/userController')
const userController = require('../controllers/userController')
const auth = require('../middleware/auth')

router.post('/register', userController.register)

router.post('/login', userController.login)

router.get('/logout', userController.logout)

router.get('/refresh_token', userController.refreshToken)

router.get('/infor', auth, getUser)

router.patch('/addCart', auth, userController.addCart)

router.get('/history', auth, userController.history)

module.exports = router
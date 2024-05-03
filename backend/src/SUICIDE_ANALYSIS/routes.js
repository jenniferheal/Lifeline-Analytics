const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get('/', controller.getSuicides)
router.get('/resources', controller.getAllResources);
router.get('/resources/:id', controller.getOneResource);
router.post('/signup', controller.signup);
router.post('/login', controller.login);
router.post('/logout', controller.logout);

module.exports = router
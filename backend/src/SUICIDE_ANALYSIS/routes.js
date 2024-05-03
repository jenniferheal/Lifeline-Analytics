const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get('/', controller.getSuicides)
router.get('/resources', controller.getAllResources);
router.get('/resources/:id', controller.getOneResource);

module.exports = router

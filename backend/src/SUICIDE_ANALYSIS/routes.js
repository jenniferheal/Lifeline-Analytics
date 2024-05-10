const { Router } = require('express')
const controller = require('./controller')
const router = Router()

router.get('/suicides', controller.getSuicides)
router.get('/resources', controller.getAllResources)
router.get('/resources/:id', controller.getOneResource)
router.post('/signup', controller.signup)
router.post('/login', controller.login)
router.get('/logout', controller.logout)
router.get('/testimonials', controller.getAllTestimonials)
router.post('/add-testimonial', controller.addTestimonial)
router.put('/update-user/:id', controller.updateUser);
router.get('/suicides-data', controller.getSuicidesData);

module.exports = router

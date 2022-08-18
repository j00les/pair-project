const Controller = require('../controllers/controller');
const router = require('express').Router();

// router.get('/', (req, res) => res.redirect('/login'));

router.get('/login', Controller.loginPage);
router.post('/login', Controller.loginPageHandler);

router.get('/users', Controller.userRender);

router.get('/profiles', Controller.adminDashboard);

router.get('/', Controller.landingPage);

router.get('/register', Controller.registerPage);
router.post('/register', Controller.registerPageHandler);

// router.get('/dashboard/', Controller.dashboard);
router.get('/accountDetails/:id', Controller.accountDetail);

router.get('/profiles/edit/:id', Controller.editProfileRender);
router.post('/profiles/edit/:id', Controller.editProfile);

router.get('/profiles/delete/:id', Controller.deleteProfile);

module.exports = router;

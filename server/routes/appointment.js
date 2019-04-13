let express = require('express');
let router = express.Router();

let passport = require('passport');

let appointmentController = require('../controllers/appointment');

function requireAuth(req, res, next) {
    // check if the user is logged in
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

/* GET Contact List page - READ Operation */
//router.get('/', requireAuth, contactController.displayContactList);

/* GET Route for the Add page 
   this will display the Add page */
router.get('/add', passport.authenticate('jwt', {session: false}), appointmentController.displayAddPage);

/* POST Route for processing the Add page */
router.post('/add', passport.authenticate('jwt', {session: false}), appointmentController.processAddPage);

router.get('/edit/:id', passport.authenticate('jwt', {session: false}), appointmentController.displayEditPage);

router.post('/edit/:id', passport.authenticate('jwt', {session: false}), appointmentController.processEditPage);

router.get('/delete/:id', passport.authenticate('jwt', {session: false}), appointmentController.processDeletePage);

router.get('/list', passport.authenticate('jwt', {session: false}), appointmentController.displayAppointments);

module.exports = router;
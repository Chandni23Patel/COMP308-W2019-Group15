/* 
    Student ID: 300990555
    Health Care Application
    Description: Route of Vitals
*/

let express = require('express');
let router = express.Router();

let passport = require('passport');

let vitalsController = require('../controllers/vitals');

function requireAuth(req, res, next) {
    // check if the user is logged in
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

/* GET Patient List page - READ Operation */
router.get('/', passport.authenticate('jwt', {session: false}),  vitalsController.displayVitalsList);

/* GET Route for the Add page 
   this will display the Add page */
router.get('/add', passport.authenticate('jwt', {session: false}),  vitalsController.displayAddPage);

/* POST Route for processing the Add page */
router.post('/add', passport.authenticate('jwt', {session: false}),  vitalsController.processAddPage);

/* GET request - display the Edit page */
router.get('/edit/:id', passport.authenticate('jwt', {session: false}),  vitalsController.displayEditPage);

/* POST request - Update the database with data from the Edit Page */
router.post('/edit/:id', passport.authenticate('jwt', {session: false}),  vitalsController.processEditPage);

/* GET request to perform the delete action */
router.get('/delete/:id', passport.authenticate('jwt', {session: false}),  vitalsController.performDelete);

module.exports = router;
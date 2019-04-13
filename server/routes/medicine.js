let express = require('express');
let router = express.Router();

let passport = require('passport');

let medicineController = require('../controllers/medicine');

function requireAuth(req, res, next) {
    // check if the user is logged in
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

/* GET Medicine List page - READ Operation */
router.get('/', passport.authenticate('jwt', {session: false}),  medicineController.displayMedicineList);

/* GET Route for the Add page 
   this will display the Add page */
router.get('/add', passport.authenticate('jwt', {session: false}),  medicineController.displayAddPage);

/* POST Route for processing the Add page */
router.post('/add', passport.authenticate('jwt', {session: false}),  medicineController.processAddPage);

/* GET request - display the Edit page */
router.get('/edit/:id', passport.authenticate('jwt', {session: false}),  medicineController.displayEditPage);

/* POST request - Update the database with data from the Edit Page */
router.post('/edit/:id', passport.authenticate('jwt', {session: false}),  medicineController.processEditPage);

/* GET request to perform the delete action */
router.get('/delete/:id', passport.authenticate('jwt', {session: false}),  medicineController.performDelete);

module.exports = router;
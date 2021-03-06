const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../controllers/userController');

// // Serve up static assets (usually on heroku)
// router.use(express.static("client/build"));

// // Send every request to the React app
// // Define any API routes before this runs
// router.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

function getCurrentUser(req, res) {
    // I'm picking only the specific fields its OK for the audience to see publicly
    // never send the whole user object in the response, and only show things it's OK
    // for others to read (like ID, name, email address, etc.)
    const { username } = req.user;
    res.json({
        username
    });
}

router.route('/auth')
    // GET to /api/auth will return current logged in user info
    .get((req, res) => {
        if (!req.user) {
            return res.status(401).json({
                message: 'You are not currently logged in.'
            })
        }

        getCurrentUser(req, res);
    })
    // POST to /api/auth with username and password will authenticate the user
    .post(passport.authenticate('local'), (req, res) => {
        if (!req.isAuthenticated()) {
            return res.status(401).json({
                message: 'Invalid username or password.'
            })
        }

        getCurrentUser(req, res);
    })
    // DELETE to /api/auth will log the user out
    .delete((req, res) => {
        req.logout();
        req.session.destroy();
        res.json({
            message: 'You have been logged out.'
        });
});


router.route('/users')

    .post(User.createUser);

router.route('/search/:city')
    .get(User.findByCity);
    



// this route is just returns an array of strings if the user is logged in
// to demonstrate that we can ensure a user must be logged in to use a route




module.exports = router;

const express = require('express');
const { getAllUsers, createUser } = require('../http/controller/userController');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: "EZ Framework",
        message: "Welcome To EZ Framework, Where MEEN Stack Made Easy to use and Develop",
        edit : "Edit the index route in route/router.js",
        views : "Edit the index.ejs in views/ to change the view of this page"
    });
});

//*** EXAMPLES ***
//
// router.get('/about', (req, res) => {
//     res.send('EDIT THE ABOUT ROUTE IN ROUTE/ROUTER.JS');
// });
//
// router.get('/contact', (req, res) => {
//     res.send('EDIT THE CONTACT ROUTE IN ROUTE/ROUTER.JS');
// });

module.exports = router;
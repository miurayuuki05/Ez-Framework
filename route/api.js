const express = require('express');
const router = express.Router();
const userController = require('../http/controller/userController');

router.get('/', (req, res) => {
    res.json({
        status : 'success',
        message: 'EDIT THE API IN ROUTE/API.JS'
    });
});


// Use postman software to test the route below
router.post('/post', (req, res) => {
    const { name, email, password } = req.body;
    res.json({
        status : 'success',
        message: 'EDIT THE API IN ROUTE/API.JS',
        data: {
            name,
            email,
            password
        }
    });
});

// Get All User Data From The Database(mongodb)
router.get('/users', userController.getAllUsers);

router.post('/users/create', userController.createUser);

//*** EXAMPLES ***
//
// router.get('/about', (req, res) => {
//     res.json({
//         status : 'success',
//         message: 'EDIT THE ABOUT API IN ROUTE/API.JS'
//     });
// });
//

module.exports = router;
const User = require('../model/User');

module.exports = {
    createUser,
    getAllUsers
}

async function createUser(req, res){
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (error) {
        res.json({message: error});
    }
}

async function getAllUsers(req, res){
    try {
        const users = await User.find();
        const response = {
            status : 'success',
            message: 'GET ALL USERS',
            data: users
        }
        res.json(
            response
        );
    } catch (error) {
        res.json({message: error});
    }
}


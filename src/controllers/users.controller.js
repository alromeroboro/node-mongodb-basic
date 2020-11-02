const userController = {};

const User = require('../models/user');

userController.getUsers = async (req, res) => {

    const users = await User.find();
    res.json(users);

} 

userController.createUser = async (req, res) => {
    const { username } = req.body
    const newUser = new User({username})
    try {
        await newUser.save() 
        res.json({ message: "User created" });
    } catch {
        res.json(error);
    }
}

userController.deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: "User deleted" });
}

module.exports = userController;
const User = require('../models/user');
async function handleGetAllUsers(req, res) {
    const allDBUsers = await User.find({});
    return res.json({ allDBUsers })
}


async function handleGetUserById(req, res) {
    const userwithid = await User.findById(req.params.id);
    if (!userwithid) return res.status(404).json({ message: "user not found" });
    return res.json({ message: "user is here", user: userwithid })
}

async function handleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, { lastName: 'Changed' })
    return res.json({ message: "Success" });
}

async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ message: "User deleted successfully" });
}

async function handleCreateNewUser(req, res) {
    const body = req.body;
    console.log("Body : ", body);
    if (!body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ message: 'Please enter all the required details' });
    }
    const newUser = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    })
    return res.status(201).json({ message: "user created successfully", user: newUser })
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}
const userModel = require("../model/user");

const getAllUsers = async (req, res) => {
    const data = await userModel.getAllUsers();
    res.json(data);
}

const getUsersById = async (req, res) => {
    const id = req.params.id
    const data = await userModel.getUsersById(id)
    res.json(data)
}

const deleteUser = async (req, res) => {
    const id = req.params.id
    const data = await userModel.deleteUser(id)
    res.json(data)
}

const createUsers = async (req,res) => {
    const postData = req.body
    const data = await userModel.createUsers(postData)
    res.json(data)
}

const updateUsers = async (req, res) => {
    const id = req.params.id
    const body = req.body
    const data = await userModel.updateUsers(id, body)
    res.json(data)
}

module.exports = {
    getAllUsers,
    getUsersById,
    createUsers,
    deleteUser,
    updateUsers
}
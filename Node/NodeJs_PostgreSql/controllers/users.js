const userModel = require("../models/users");

const getAllUsers = async (req, res) => {
  await userModel.getAllUser(req, res).then((data) => data);
};

const getUsersById = async (req, res) => {
  await userModel.getUserById(req, res).then((data) => data);
};

const createUser = async (req, res) => {
  await userModel.createUser(req, res).then((data) => data);
};

const deleteUser = async (req, res) => {
  await userModel.deleteUser(req, res).then((data) => data);
};

const updateUser = async (req, res) => {
  await userModel.updateUser(req, res).then((data) => data);
};

module.exports = {
  getAllUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
};

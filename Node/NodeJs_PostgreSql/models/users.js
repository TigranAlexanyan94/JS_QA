const client = require("../config/config");

const createUser = (req,res) => {
  const {name, surname} = req.body;
  try {
    return client
      .query(`INSERT INTO users(name,surname) VALUES(${name},${surname})`)
      .then((data) => res.send(data.rows))
      .catch((error) => error);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateUser = (req,res) => {
  const {name} = req.body;
  const id = req.params.id;
  try {
    return client
      .query(`UPDATE users SET name = ${name} WHERE user_id = ${id}`)
      .then((data) => res.send(data.rows))
      .catch((error) => error);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteUser = (req,res) => {
  const id = req.params.id;
  try {
    return client
      .query(`DELETE FROM users WHERE user_id = ${id}`)
      .then((data) => res.send(data.rows))
      .catch((error) => error);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUserById = async (req, res) => {
  const param = req.params.id;
  try {
    return client
      .query(`select * from users where user_id = ${param}`)
      .then((data) => res.send(data.rows))
      .catch((error) => error);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllUser = async (req, res) => {
  try {
    return client
      .query("select * from users")
      .then((data) => console.log(data.rows))
      .catch((error) => error);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getAllUser,
};

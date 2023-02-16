const dataPath = "./data/users.json";
const { throws } = require("assert");
const fs = require("fs");

const createProject = () => {};

const updateProject = () => {};

const deleteProject = () => {};

const getProjectById = async ({ id }) => {
  return fs.promises
    .readFile(dataPath, "utf8")
    .then((data) => {
      const jsonData = JSON.parse(data);
      const item = jsonData.users.find((item) => item.id === id);

      return item;
    })
    .catch((error) => console.log(error));
};

const getAllProject = async (req, res) => {
  try {
    client
      .query("select * from project")
      .then((data) => res.send(data.rows))
      .catch((error) => error);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createProject,
  updateProject,
  deleteProject,
  getProjectById,
  getAllProject,
};

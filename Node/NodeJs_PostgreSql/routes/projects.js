const express = require("express");
const projectsControllers = require("../controllers/projects");
const router = express.Router();

router.route("/:id")
                .get(projectsControllers.getProjectById)
                .put(projectsControllers.updateProject)
                .delete(projectsControllers.deleteProject);

router.route("/")
                .get(projectsControllers.getAllProjects)
                .post(projectsControllers.createProject);

module.exports = router;

const express = require("express");
const userControllers = require("../controllers/users");
const router = express.Router();

router.route("/:id")
                .get(userControllers.getUsersById)
                .put(userControllers.updateUser)
                .delete(userControllers.deleteUser);

router.route("/")
                .get(userControllers.getAllUsers)
                .post(userControllers.createUser);

module.exports = router;

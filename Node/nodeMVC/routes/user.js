const express = require('express');
const userControllers = require('../controllers/user');
const router = express.Router();

router.route('/:id')
                .get(userControllers.getUsersById)
                .put(userControllers.updateUsers)
                .delete(userControllers.deleteUser);

router.route('/')
                .get(userControllers.getAllUsers)
                .post(userControllers.createUsers);

module.exports = router;

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// In a production app, you'd add admin authentication middleware here
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);

module.exports = router;

const express = require('express');
const { signup, activate, signin, allUsers, findUserById, deleteUserById, updateUserById } = require('../controllers/AuthController');

const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

// Authentication routes
router.post('/signup', signup);
router.get('/activate/:activationCode', activate);
router.post('/signin', signin);

// User management routes
router.get('/users', allUsers);
router.get('/users/:id', findUserById);
router.put('/users/:id', updateUserById);
router.delete('/users/:id', deleteUserById);

module.exports = router;

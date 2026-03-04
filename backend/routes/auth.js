const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/auth');

// @route   POST api/auth/register
// @desc    Register user
// @access  Public
router.post('/register', authController.register);

// @route   POST api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', authController.login);

// @route   GET api/auth/user
// @desc    Get user data
// @access  Private
router.get('/user', authMiddleware, authController.getUser);

// @route   PUT api/auth/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', authMiddleware, authController.updateProfile);

// @route   PUT api/auth/change-password
// @desc    Change user password
// @access  Private
router.put('/change-password', authMiddleware, authController.changePassword);

// @route   POST api/auth/favorite/:courseId
// @desc    Toggle favorite course
// @access  Private
router.post('/favorite/:courseId', authMiddleware, authController.toggleFavorite);

module.exports = router;


const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/auth');

// @route   GET api/admin/stats
// @desc    Get dashboard statistics
// @access  Private (admin)
router.get('/stats', authMiddleware, adminController.getStats);

// @route   GET api/admin/users
// @desc    Get all users (admin only)
// @access  Private (admin)
router.get('/users', authMiddleware, adminController.getUsers);

// @route   PUT api/admin/users/:id
// @desc    Update user role (admin only)
// @access  Private (admin)
router.put('/users/:id', authMiddleware, adminController.updateUserRole);

// @route   DELETE api/admin/users/:id
// @desc    Delete a user (admin only)
// @access  Private (admin)
router.delete('/users/:id', authMiddleware, adminController.deleteUser);

module.exports = router;


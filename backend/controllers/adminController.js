const Course = require('../models/Course');
const User = require('../models/User');
const OnlineClass = require('../models/OnlineClass');
const Payment = require('../models/Payment');

// @desc    Get dashboard statistics
// @route   GET api/admin/stats
// @access  Private (admin)
exports.getStats = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ msg: 'Not authorized' });
  }

  try {
    const totalStudents = await User.countDocuments({ role: { $in: ['user', 'student'] } });
    const totalCourses = await Course.countDocuments();
    const totalClasses = await OnlineClass.countDocuments();
    const payments = await Payment.find({ status: 'completed' });
    const totalRevenue = payments.reduce((sum, p) => sum + p.total, 0);

    res.json({
      totalStudents,
      totalCourses,
      totalClasses,
      totalRevenue: `$${totalRevenue.toFixed(2)}`
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Get all users (admin only)
// @route   GET api/admin/users
// @access  Private (admin)
exports.getUsers = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ msg: 'Not authorized' });
  }

  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Update user role (admin only)
// @route   PUT api/admin/users/:id
// @access  Private (admin)
exports.updateUserRole = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ msg: 'Not authorized' });
  }

  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    user.role = req.body.role || user.role;
    await user.save();

    const updatedUser = await User.findById(req.params.id).select('-password');
    res.json(updatedUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Delete a user (admin only)
// @route   DELETE api/admin/users/:id
// @access  Private (admin)
exports.deleteUser = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ msg: 'Not authorized' });
  }

  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    if (user.role === 'admin') {
      return res.status(400).json({ msg: 'Cannot delete admin users' });
    }

    await user.deleteOne();
    res.json({ msg: 'User removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

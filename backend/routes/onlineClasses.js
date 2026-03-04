const express = require('express');
const router = express.Router();
const OnlineClass = require('../models/OnlineClass');
const auth = require('../middleware/auth');

// @route   GET api/online-classes
// @desc    Get all online classes
// @access  Public
router.get('/', async (req, res) => {
  try {
    const classes = await OnlineClass.find().sort({ date: 1 });
    res.json(classes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/online-classes/stats
// @desc    Get online classes stats
// @access  Public
router.get('/stats', async (req, res) => {
  try {
    const allClasses = await OnlineClass.find();
    const liveCount = allClasses.filter(c => c.status === 'Live').length;
    const upcomingCount = allClasses.filter(c => c.status === 'Upcoming').length;
    const totalStudents = allClasses.reduce((sum, c) => sum + c.students, 0);
    const totalDuration = allClasses.length * 1.5; // Approximate

    res.json({
      liveNow: liveCount,
      upcoming: upcomingCount,
      totalStudents,
      totalDuration: `${totalDuration} hrs`
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/online-classes
// @desc    Create an online class
// @access  Private (admin/instructor)
router.post('/', auth, async (req, res) => {
  if (req.user.role !== 'admin' && req.user.role !== 'instructor') {
    return res.status(403).json({ msg: 'Not authorized' });
  }

  const { title, instructor, date, time, duration, students, status, meetingLink } = req.body;

  try {
    const newClass = new OnlineClass({
      title,
      instructor,
      date,
      time,
      duration,
      students,
      status,
      meetingLink,
      createdBy: req.user.id
    });

    const onlineClass = await newClass.save();
    res.json(onlineClass);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/online-classes/:id
// @desc    Update an online class
// @access  Private
router.put('/:id', auth, async (req, res) => {
  try {
    const onlineClass = await OnlineClass.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!onlineClass) return res.status(404).json({ msg: 'Class not found' });
    res.json(onlineClass);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/online-classes/:id
// @desc    Delete an online class
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const onlineClass = await OnlineClass.findById(req.params.id);
    if (!onlineClass) return res.status(404).json({ msg: 'Class not found' });

    await onlineClass.deleteOne();
    res.json({ msg: 'Class removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

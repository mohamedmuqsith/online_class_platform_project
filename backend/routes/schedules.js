const express = require('express');
const router = express.Router();
const Schedule = require('../models/Schedule');
const auth = require('../middleware/auth');

// @route   GET api/schedules
// @desc    Get all schedules
// @access  Public
router.get('/', async (req, res) => {
  try {
    const schedules = await Schedule.find().sort({ day: 1, time: 1 });
    res.json(schedules);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/schedules/today
// @desc    Get today's schedule items
// @access  Public
router.get('/today', async (req, res) => {
  try {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = days[new Date().getDay()];
    const schedules = await Schedule.find({ day: today }).sort({ time: 1 });
    res.json(schedules);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/schedules
// @desc    Create a schedule entry
// @access  Private (admin/instructor)
router.post('/', auth, async (req, res) => {
  if (req.user.role !== 'admin' && req.user.role !== 'instructor') {
    return res.status(403).json({ msg: 'Not authorized' });
  }

  const { title, instructor, room, day, time, endTime, color } = req.body;

  try {
    const newSchedule = new Schedule({
      title,
      instructor,
      room,
      day,
      time,
      endTime,
      color,
      createdBy: req.user.id
    });

    const schedule = await newSchedule.save();
    res.json(schedule);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/schedules/:id
// @desc    Delete a schedule entry
// @access  Private (admin)
router.delete('/:id', auth, async (req, res) => {
  try {
    const schedule = await Schedule.findById(req.params.id);
    if (!schedule) return res.status(404).json({ msg: 'Schedule not found' });

    await schedule.deleteOne();
    res.json({ msg: 'Schedule removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

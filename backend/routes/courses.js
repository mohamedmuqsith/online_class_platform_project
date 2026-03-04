const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const auth = require('../middleware/auth');

// @route   GET api/courses
// @desc    Get all courses (with optional search & filter)
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { q, category, level } = req.query;
    let query = {};

    if (q) {
      query.$or = [
        { title: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } }
      ];
    }
    if (category) query.category = category;
    if (level) query.level = level;

    const courses = await Course.find(query).populate('instructor', 'username');
    res.json(courses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/courses/categories
// @desc    Get all unique course categories with counts
// @access  Public
router.get('/categories', async (req, res) => {
  try {
    const categories = await Course.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $project: { name: '$_id', count: 1, _id: 0 } },
      { $sort: { count: -1 } }
    ]);
    res.json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/courses/search
// @desc    Search courses with filters
// @access  Public
router.get('/search', async (req, res) => {
  try {
    const { q, subject, level, page = 1, limit = 12 } = req.query;
    let query = {};

    if (q) {
      query.$or = [
        { title: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
        { category: { $regex: q, $options: 'i' } }
      ];
    }
    if (subject) query.category = subject;
    if (level) query.level = level;

    const skip = (page - 1) * limit;
    const courses = await Course.find(query)
      .populate('instructor', 'username')
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Course.countDocuments(query);

    res.json({
      courses,
      total,
      page: parseInt(page),
      totalPages: Math.ceil(total / limit)
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/courses
// @desc    Add a new course
// @access  Private
router.post('/', auth, async (req, res) => {
  // Only allow instructor or admin to create course
  if (req.user.role !== 'instructor' && req.user.role !== 'admin') {
    return res.status(403).json({ msg: 'Not authorized to create a course' });
  }

  const { title, description, price, category, level, image, duration } = req.body;

  try {
    const newCourse = new Course({
      title,
      description,
      price,
      category,
      level,
      image,
      duration,
      instructor: req.user.id
    });

    const course = await newCourse.save();
    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/courses/:id
// @desc    Update a course
// @access  Private (admin/instructor)
router.put('/:id', auth, async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ).populate('instructor', 'username');

    if (!course) return res.status(404).json({ msg: 'Course not found' });
    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/courses/:id
// @desc    Delete a course
// @access  Private (admin)
router.delete('/:id', auth, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ msg: 'Course not found' });

    await course.deleteOne();
    res.json({ msg: 'Course removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/courses/:id
// @desc    Get course by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate('instructor', 'username');

    if (!course) {
      return res.status(404).json({ msg: 'Course not found' });
    }

    res.json(course);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Course not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;

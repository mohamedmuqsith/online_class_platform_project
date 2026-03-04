const express = require('express');
const router = express.Router();
const Certificate = require('../models/Certificate');
const auth = require('../middleware/auth');

// @route   GET api/certificates
// @desc    Get certificates for logged-in user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const certificates = await Certificate.find({ user: req.user.id })
      .populate('course', 'title')
      .sort({ issuedAt: -1 });
    res.json(certificates);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/certificates
// @desc    Issue a certificate
// @access  Private (admin)
router.post('/', auth, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ msg: 'Not authorized' });
  }

  const { userId, courseId, title } = req.body;

  try {
    const newCert = new Certificate({
      user: userId || req.user.id,
      course: courseId,
      title
    });

    const cert = await newCert.save();
    res.json(cert);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/certificates/:id
// @desc    Get certificate by ID
// @access  Private
router.get('/:id', auth, async (req, res) => {
  try {
    const certificate = await Certificate.findById(req.params.id)
      .populate('user', 'username email')
      .populate('course', 'title');

    if (!certificate) return res.status(404).json({ msg: 'Certificate not found' });
    res.json(certificate);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');
const User = require('../models/User');
const auth = require('../middleware/auth');

// @route   POST api/payments
// @desc    Process a payment
// @access  Private
router.post('/', auth, async (req, res) => {
  const { courses, subtotal, tax, total, paymentMethod, cardLast4 } = req.body;

  try {
    const newPayment = new Payment({
      user: req.user.id,
      courses,
      subtotal,
      tax,
      total,
      paymentMethod,
      cardLast4,
      status: 'completed' // Simulated payment success
    });

    const payment = await newPayment.save();

    // Enroll user in purchased courses
    if (courses && courses.length > 0) {
      const courseIds = courses.map(c => c.course).filter(Boolean);
      if (courseIds.length > 0) {
        await User.findByIdAndUpdate(req.user.id, {
          $addToSet: { enrolledCourses: { $each: courseIds } }
        });
      }
    }

    res.json({ msg: 'Payment successful!', payment });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/payments
// @desc    Get user's payment history
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const payments = await Payment.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(payments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

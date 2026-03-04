const mongoose = require('mongoose');

const OnlineClassSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  instructor: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    default: '1.5 hrs'
  },
  students: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['Live', 'Upcoming', 'Completed'],
    default: 'Upcoming'
  },
  meetingLink: {
    type: String,
    default: ''
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('OnlineClass', OnlineClassSchema);

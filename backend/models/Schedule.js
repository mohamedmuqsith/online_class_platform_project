const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  instructor: {
    type: String,
    default: ''
  },
  room: {
    type: String,
    default: ''
  },
  day: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  endTime: {
    type: String
  },
  color: {
    type: String,
    default: '#c49696'
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

module.exports = mongoose.model('Schedule', ScheduleSchema);

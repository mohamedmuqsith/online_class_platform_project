const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  issuedAt: {
    type: Date,
    default: Date.now
  },
  certificateId: {
    type: String,
    unique: true
  }
});

// Auto-generate certificate ID before saving
CertificateSchema.pre('save', function () {
  if (!this.certificateId) {
    this.certificateId = 'CERT-' + Date.now() + '-' + Math.random().toString(36).substr(2, 6).toUpperCase();
  }
});

module.exports = mongoose.model('Certificate', CertificateSchema);

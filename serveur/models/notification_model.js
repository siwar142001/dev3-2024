const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    content: { type: String, required: true,select: true },
    type: { type: String, required: false ,select: true},
    createdAt: { type: Date, default: Date.now,select: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User',select: true }, // Corrected line
    read: { type: Boolean,select: true/*, default: false*/ }
  });

  const model_notification = mongoose.model('Alerts', notificationSchema);

  module.exports = model_notification; 
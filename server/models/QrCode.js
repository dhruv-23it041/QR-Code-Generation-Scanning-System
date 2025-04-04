const mongoose = require('mongoose');

const qrCodeSchema = new mongoose.Schema({
  text: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  generatedAt: { type: Date, default: Date.now },
});

const QrCode = mongoose.model('QrCode', qrCodeSchema);

module.exports = QrCode;

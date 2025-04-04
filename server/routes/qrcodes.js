const express = require('express');
const qrCode = require('qrcode');
const QrCodeModel = require('../models/QrCode');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Generate QR Code Route
router.post('/', authMiddleware, async (req, res) => {
  const { text } = req.body;
  try {
    const newQrCode = new QrCodeModel({ text, userId: req.userId });
    await newQrCode.save();

    const url = await qrCode.toDataURL(text);
    res.json({ url, id: newQrCode._id });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;

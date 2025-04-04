const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const qrCodeRoutes = require('./routes/qrcodes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); // Body parser middleware

app.use('/api/auth', authRoutes);
app.use('/api/qrcodes', qrCodeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

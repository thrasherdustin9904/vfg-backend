require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const productRoutes = require('./routes/products');
const uploadRoutes = require('./routes/uploads');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*'
}));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/public', express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/products', productRoutes);
app.use('/upload-image', uploadRoutes);
app.use('/api/auth', authRoutes);

app.get('/api/status', (req,res) => res.json({ ok: true }));

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log('VF Gaming backend running on', PORT));

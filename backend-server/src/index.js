const express = require('express');
const cors = require('cors');
const dns = require('dns');
require('dotenv').config();

// Force DNS to resolve IPv4 first (fixes querySrv ECONNREFUSED on Windows)
if (dns.setDefaultResultOrder) {
    dns.setDefaultResultOrder('ipv4first');
}
dns.setServers(['8.8.8.8', '8.8.4.4']); // Force Google DNS

const { connectDB } = require('./config/db');

const app = express();
const PORT = process.env.BACKEND_PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic Heartbeat
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Backend server is running' });
});

// Import Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Initialize DB and Start Server
async function startServer() {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`🚀 Standalone Backend Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
    }
}

startServer();

const { MongoClient } = require('mongodb');
require('dotenv').config();

let db = null;

async function connectDB() {
    if (db) return db;

    const uri = process.env.MONGO_URI;
    if (!uri) {
        console.error('❌ MONGO_URI is not set in environment variables');
        process.exit(1);
    }

    const client = new MongoClient(uri, {
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 15000,
        family: 4, // Force IPv4
    });

    try {
        await client.connect();
        db = client.db('jobcy-data');
        console.log('✅ Standalone Backend: MongoDB connected successfully');
        return db;
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
        throw error;
    }
}

module.exports = { connectDB };

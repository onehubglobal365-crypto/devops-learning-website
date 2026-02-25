const { connectDB } = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const db = await connectDB();
        const user = await db.collection('users').findOne({ email: email.toLowerCase().trim() });

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Update login stats
        await db.collection('users').updateOne(
            { _id: user._id },
            {
                $set: {
                    lastLogin: new Date(),
                    status: 'active',
                    updatedAt: new Date()
                }
            }
        );

        const token = jwt.sign(
            { id: user._id.toString(), email: user.email, role: user.role || 'user' },
            process.env.JWT_SECRET || 'fallback-secret',
            { expiresIn: '7d' }
        );

        res.json({
            message: 'Login successful (via Standalone Backend)',
            token,
            user: {
                id: user._id.toString(),
                name: user.name,
                email: user.email,
                role: user.role || 'user'
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const db = await connectDB();
        const existingUser = await db.collection('users').findOne({ email: email.toLowerCase() });

        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            name: name.trim(),
            email: email.trim().toLowerCase(),
            password: hashedPassword,
            role: 'user',
            status: 'inactive',
            createdAt: new Date(),
            updatedAt: new Date()
        };

        const result = await db.collection('users').insertOne(newUser);

        res.status(201).json({
            message: 'User registered successfully (via Standalone Backend)',
            user: { id: result.insertedId, name: newUser.name, email: newUser.email }
        });
    } catch (error) {
        res.status(500).json({ error: 'Signup failed' });
    }
};

exports.logout = async (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) return res.status(400).json({ error: 'User ID required' });

        const { ObjectId } = require('mongodb');
        const db = await connectDB();

        await db.collection('users').updateOne(
            { _id: new ObjectId(userId) },
            {
                $set: {
                    lastLogout: new Date(),
                    status: 'inactive',
                    updatedAt: new Date()
                }
            }
        );

        res.json({ message: 'Logout successful' });
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({ error: 'Logout failed' });
    }
};

const { connectDB } = require('../config/db');

exports.getAllUsers = async (req, res) => {
    try {
        const db = await connectDB();
        const users = await db.collection('users').find({}).sort({ createdAt: -1 }).toArray();

        // Returning all details including password as requested by admin
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

exports.createUser = async (req, res) => {
    try {
        const { name, email, password, role, nickname, mobile, preferredCourse } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Name, email, and password are required' });
        }

        const db = await connectDB();
        const existingUser = await db.collection('users').findOne({ email: email.toLowerCase() });

        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const bcrypt = require('bcryptjs');
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            name: name.trim(),
            email: email.trim().toLowerCase(),
            password: hashedPassword,
            nickname: nickname || name.trim(),
            mobile: mobile || '',
            preferredCourse: preferredCourse || '',
            role: role || 'user',
            createdAt: new Date(),
            updatedAt: new Date()
        };

        const result = await db.collection('users').insertOne(newUser);

        res.status(201).json({
            message: 'User created successfully',
            user: {
                id: result.insertedId,
                ...newUser
            }
        });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { nickname, mobile, preferredCourse, role } = req.body;
        const { ObjectId } = require('mongodb');

        const db = await connectDB();
        const updateData = {
            updatedAt: new Date()
        };

        if (nickname !== undefined) updateData.nickname = nickname;
        if (mobile !== undefined) updateData.mobile = mobile;
        if (preferredCourse !== undefined) updateData.preferredCourse = preferredCourse;
        if (role !== undefined) updateData.role = role;

        const result = await db.collection('users').updateOne(
            { _id: new ObjectId(id) },
            { $set: updateData }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ message: 'User updated successfully' });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Failed to update user' });
    }
};

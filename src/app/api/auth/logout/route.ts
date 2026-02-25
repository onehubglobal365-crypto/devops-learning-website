import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { userId } = body;

        if (!userId) {
            return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
        }

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

        return NextResponse.json({ message: 'Logout tracked successfully' });
    } catch (error) {
        console.error('Logout error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

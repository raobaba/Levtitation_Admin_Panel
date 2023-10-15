import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const Connection = async () => {
    try {
        const mongoURL = process.env.mongoURL;
        if (!mongoURL) {
            throw new Error('MongoDB connection string is not defined in the environment variables.');
        }

        await mongoose.connect(mongoURL);

        console.log('Database Connected Successfully');
    } catch (error) {
        console.error('Error: Database not connected', error);
    }
};

export default Connection;

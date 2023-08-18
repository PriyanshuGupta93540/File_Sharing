import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config();

const DbConnection = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true
        })
    } catch (error) {
        console.error('Error while connection with the database', error.message);
    }
}

export default DbConnection


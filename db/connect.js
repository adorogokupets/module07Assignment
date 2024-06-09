import mongoose from 'mongoose'

const connectDB = async (dbURI) => {
    try {
        await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Connected to the database...')
    } catch (err) {
        console.error('Database connection failed', err)
        throw err
    }
};

export default connectDB
const mongoose = require('mongoose');
require('dotenv').config()

const mongoURI = process.env.MONGOURI

async function connectDB() {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected successfully.');
    } catch (error) {
        console.error(' MongoDB connection error:', error.message);
        process.exit(1); 
    }
}

module.exports= connectDB;

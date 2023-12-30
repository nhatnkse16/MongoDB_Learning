const mongoose = require('mongoose');
require('dotenv').config();


/* mongoose.connect(`mongodb://${process.env.HOST}:27017/${process.env.MONGODB}`)
 *     .then(() => console.log('Connected!'));
 */

const connectToDatabase = async () => {
    try {
        const connection = await mongoose.connect(`mongodb://${process.env.HOST}/${process.env.MONGODB}`);
        console.log(`>>> Connected to MongoDB: mongodb://${process.env.HOST}/${process.env.MONGODB}`);
        return connection;              // Instead of module.exports
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;                    // Rethrow the error to handle it elsewhere if needed
    }
};

module.exports = { connectToDatabase };

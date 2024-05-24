const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(process.env.DB_URI)

    mongoose.connection.on('connected', () => {
        console.log("MongoDB server connected with backend");
    });

   
};

module.exports = connectDB;

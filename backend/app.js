const express = require('express');
const connectDB = require('./config/Db');
const user = require('./routes/user');
require('dotenv').config();
const cors = require('cors');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());  // Use express.json() to parse JSON bodies

app.use('/auth', user);

app.get("/", (req, res) => {
    res.send("Welcome to the Website");
});

const PORT = process.env.PORT ;  // Fallback port in case environment variable is not set

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

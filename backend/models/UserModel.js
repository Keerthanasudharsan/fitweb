const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        default: "User"
    },
    activationCode: {
        type: String,
        default: null
    },
    isActivated: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', UserSchema);

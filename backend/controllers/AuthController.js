const userModel = require('../models/UserModel');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

exports.signup = async (req, res) => {
    const { email, password, username } = req.body;

    try {
        let user = await userModel.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const activationCode = uuidv4();

        user = new userModel({
            username,
            email,
            password: hashedPassword,
            activationCode
        });

        await user.save();

        const activationLink = `http://localhost:${process.env.PORT || 3000}/auth/activate/${activationCode}`;

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Account activation link',
            text: `Please click on the link to activate your account: ${activationLink}`
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Failed to send activation email" });
            } else {
                console.log(info);
                return res.status(200).json({ message: "Activation email sent successfully" });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.activate = async (req, res) => {
    const { activationCode } = req.params;

    try {
        let user = await userModel.findOne({ activationCode });

        if (!user) {
            return res.status(404).json({ message: "Activation code not found" });
        }

        user.isActivated = true;
        await user.save();

        res.status(200).json({ message: "Account activated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.signin = async (req, res) => {
    const { email, password } = req.body;

    let user = await userModel.findOne({ email })
    if (!user) {
        return res.status(400).json({ message: "User not found" })
    }
    const isMatching = await bcrypt.compare(password, user.password)

    if (!isMatching) {
        return res.status(400).json({ message: "Password is incorrect" })
    }

    if (!user.isActivated) {
        return res.status(400).json({ message: "Account is not activated" })
    }

    return res.status(200).json({
        message: "Login successfully",
        user,
    })
    
};

exports.allUsers = async (req, res) => {
    // Implementation for allUsers function
};

exports.findUserById = async (req, res) => {
    // Implementation for findUserById function
};

exports.updateUserById = async (req, res) => {
    // Implementation for updateUserById function
};

exports.deleteUserById = async (req, res) => {
    // Implementation for deleteUserById function
};

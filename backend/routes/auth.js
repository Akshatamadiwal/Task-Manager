import express from "express";
import User from "../models/user.js";
const router = express.Router();
import bcrypt from "bcrypt";


router.post("/register", async (req, res) => {
    try {
        const { email, username, password } = req.body;

        const existingUser = await User.findOne({
            $or: [{ email }, { username }]
        });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            email,
            username,
            password: hashedPassword
        });

        await user.save();

        res.status(201).json({
            message: "User registered successfully",
            user
        });

    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});


router.post("/signin", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(400).json({ message: "Please signup first" });
        }

        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Password incorrect" });
        }

        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
});



export default router;
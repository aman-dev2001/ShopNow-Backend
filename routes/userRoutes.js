import express from "express";
import User from "../models/user.js";
import jwt from "jsonwebtoken";
import {protect, admin} from "../middleware/authMiddleware.js";

const router = express.Router();

// @route   POST /api/users/register
// @desc    Register a new user
// @access  Public

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Find user
        let user = await User.findOne({ email });
        if (user)
            return res.status(400).json({
                message: "USer is allready exits"
            });

        user = new User({
            name,
            email,
            password
        });
        await user.save();

        // Create JWT Payload 

        const payload = { user: { id: user._id, role: user.role } };
        //sign and return the token with user data 
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "40h" }, (err, token) => {
            if (err) throw err;

            // send the token and response the user
            res.status(200).json({
                token,
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
            })
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error",
        });
    }

});

// route post / api/users/login
// @desc Authenticate user 
// @access Public

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user
        let user = await User.findOne({ email })

        if (!user)
            return res.status(400).json({
                message: "Invalid credentials"
            });

        // Compare password

        const isMatch = await user.matchPassword(password);

        if (!isMatch)
            return res.status(400).json({
                message: "invalid credentials"
            })

        // Create JWT Payload 

        const payload = {
            user: {
                id: user._id,
                role: user.role
            }
        };

        //sign and return the token with user data

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {
                expiresIn: "40h"
            },
            (err, token) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        message: "Token generation failed"
                    });
                }

                // send the token and response the user
                res.status(200).json({
                    token,
                    user: {
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        role: user.role
                    }
                })
            }
        );
    }

    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
});

// @route GET /api/users/profile
//@desc get logged-in user's profile (Protected route)
//access protected

router.get("/profile", protect, async (req, res) => {
    // res.json(req.user)

    res.json({
        message: "Protected route accessed",
        user: req.user
    });
})

export default router;
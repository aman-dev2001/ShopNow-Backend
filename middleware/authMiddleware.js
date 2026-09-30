import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Miidleware to protect route

const protect = async (req, res, next) => {
    let token;
    console.log("Authorization:", req.headers.authorization);
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.user.id).select("-password");

            if (!req.user) {
                return res.status(401).json({
                    message: "User not found"
                });
            }
            next();
        } catch (error) {
            console.error("Token verification failed", error);
            return res.status(401).json({
                message: "Not authorized, token failed"
            })
        }
    } else {
        return res.status(401).json({
            message: "Not authorised, no token provided"
        })
    }
};

// Middleware to check if the user is an admin

const admin = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        res.status(403).json({
            message: "not authorized as an admin"
        })
    }
}

export { protect, admin };
import mongoose from "mongoose";
import dotenv from "dotenv";

import Product from "./models/Product.js";
import User from "./models/user.js";
import Cart from "./models/Cart.js";
import Products from "./data/products.js";

dotenv.config();

// Connect to MongoDB

mongoose.connect(process.env.MONGO_URI);

const seedData = async () => {
    try {
        // Clear exiting data
        await Product.deleteMany();
        await User.deleteMany();
        await Cart.deleteMany();

        // Create a difalt admin User 
        const createdUser = await User.create({
            name: "Admin User",
            email: "admin@example.com",
            password: 123456,
            role: "admin",
        });

        // Assign the defalt user ID to each products

        const userId = createdUser._id;

        const sampleProducts = Products.map((product) => {
            return {
                ...product,
                user: userId,
            };
        });

        // Insert the data into the databse 
        await Product.insertMany(sampleProducts);
        console.log("products data seeded successfully");

        process.exit();
    } catch (error) {
        console.error("Error seeding the data:", error);
        process.exit(1);
    }
}

seedData();
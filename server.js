import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import checkoutRoutes from "./routes/checkOutRoutes.js"

const app = express();

dotenv.config();

// connected mongodb
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("API is working");
});

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);

//404 
app.use((req, res) => {
    res.status(404).json({
        message: "Route not Found"
    });
});

// Global error handling

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error"
    });
});

// console.log(process.env.PORT)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
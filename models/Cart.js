import mongoose from "mongoose";
import cartRoutes from "../routes/cartRoutes.js"

const cartItemSchema = new mongoose.Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },

        name: {
            type: String,
            required: true,
            trim: true,
        },

        image: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
            min: 0,
        },

        size: {
            type: String,
        },

        color: {
            type: String,
        },

        quantity: {
            type: Number,
            default: 1,
            min: 1,
        },
    },
    {
        _id: false,
    }
);

const cartSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },

        guestId: {
            type: String,
        },

        products: [cartItemSchema],

        totalPrice: {
            type: Number,
            required: true,
            default: 0,
            min: 0,
        },
    },
    {
        timestamps: true,
    }
);

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

export default Cart;
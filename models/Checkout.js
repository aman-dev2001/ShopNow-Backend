import mongoose from "mongoose";
const checkOutItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },

    name: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
},

    { _id: false }

);


const checkOutSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    checkoutItems: [checkOutItemSchema],
    shippingAddress: {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },

        postalCode: {
            type: String,
            required: true
        },

        country: {
            type: String,
            required: true
        }
    },

    paymentMethod: {
        type: String,
        required: true,
    },

    totalPrice: {
        type: Number,
        required: true
    },

    isPaid: {
        type: Boolean,
        default: false
    },

    paidAt: {
        type: Date,
    },

    paymentStatus: {
        type: String,
        enum: ["Pending", "Paid", "Failed"],
        default: "Pending"
    },

    paymentDetails: {
        type: mongoose.Schema.Types.Mixed, // store payment related details (transection ID Paypal response)
    },

    isFinalized: {
        type: Boolean,
        default: false
    },

    finalizedAt: {
        type: Date,
    },
}, { timestamps: true }

)
const CheckOut = mongoose.model("CheckOut", checkOutSchema);
export default CheckOut;
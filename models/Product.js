import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            trim: true,
        },

        price: {
            type: Number,
            required: true,
        },

        discountPrice: {
            type: Number,
        },

        countInStock: {
            type: Number,
            required: true,
            default: 0,
        },

        category: {
            type: String,
            required: true,
        },

        brand: {
            type: String,
        },

        size: {
            type: [String],
            required: true,
        },

        colors: {
            type: [String],
            required: true,
        },

        productCollection: {
            type: String,
            required: true,
        },

        material: {
            type: String,
        },

        gender: {
            type: String,
            enum: ["Men", "Women", "Other"],
        },

        images: [
            {
                url: {
                    type: String,
                    required: true,
                },
                altText: {
                    type: String,
                },
            },
        ],

        isFeatured: {
            type: Boolean,
            default: false,
        },

        isPublished: {
            type: Boolean,
            default: false,
        },

        tags: {
            type: [String],
            default: [],
        },

        dimensions: {
            length: {
                type: Number,
            },
            width: {
                type: Number,
            },
            height: {
                type: Number,
            },
        },

        weight: {
            type: Number,
        },

        sku: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },

        metaTitle: {
            type: String,
        },

        metaDescription: {
            type: String,
            trim: true,
        },

        metaKeywords: {
            type: [String],
            default: []
        },
        rating: {
            type: Number,
            default: 0,
            min: 0,
            max: 5,
        },

        numberReviews: {
            type: Number,
            default: 0,
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
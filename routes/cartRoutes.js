import express from "express";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// helper function to get a cart by user Id or guest Id

const getCart = async (userId, guestId) => {
    if (userId) {
        return await Cart.findOne({ user: userId });
    } else if (guestId) {
        return await Cart.findOne({ guestId })
    }
    return null;
}

//@router POST api/cart
//@desc Add a product to the cart for a guest or logged in user 
//@access Public 

router.post("/", async (req, res) => {
    const {
        productId,
        quantity,
        size,
        color,
        guestId,
        userId
    } = req.body;

    try {
        // Validate product ID
        const product = await Product.findById(productId);

        if (!product)
            return res.status(404).json({
                message: "Product not found"
            });

        // Convert quantity into number
        const itemQuantity = Number(quantity) || 1;

        // Find existing cart
        let cart = await getCart(userId, guestId);

        if (cart) {
            // Check whether same product + size + color already exists
            const productIndex = cart.products.findIndex(
                (p) =>
                    p.productId.toString() === productId &&
                    p.size === size &&
                    p.color === color
            );

            // if the product already exists, update the quantity 
            if (productIndex > -1) {
                cart.products[productIndex].quantity = Number(quantity);
            } else {
                // add the new product 
                cart.products.push({
                    productId,
                    name: product.name,
                    image: product.images?.[0]?.url || "",
                    price: product.price,
                    size,
                    color,
                    quantity: itemQuantity
                });
            }

            // Recalculate the total price 
            cart.totalPrice = cart.products.reduce(
                (acc, item) =>
                    acc + item.price * item.quantity,
                0
            );

            await cart.save();
            return res.status(200).json(cart);

        }

        // If cart does not exist, create a new cart
        const newCart = await Cart.create({
            user: userId || undefined,
            guestId: guestId || `guest_${Date.now()}`,
            products: [
                {
                    productId,
                    name: product.name,
                    image: product.images?.[0]?.url || "",
                    price: product.price,
                    size,
                    color,
                    quantity: itemQuantity
                }
            ],
            totalPrice: product.price * itemQuantity
        });

        return res.status(201).json(newCart);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "server error"
        });
    }
});

// @router PUT/api/cart
//@desc Update product quantity in the cart for a guest or gogged-in user 
// access Public 

router.put("/", async (req, res) => {
    const { productId, quantity, size, color, guestId, userId } = req.body;

    try {
        let cart = await getCart(userId, guestId);
        if (!cart) return res.status(404).json({
            message: "cart not found"
        });

        const productIndex = cart.products.findIndex(
            (p) => p.productId.toString() === productId &&
                p.size === size &&
                p.color === color
        );

        if (productIndex > -1) {
            // update quntity 
            if (quantity > 0) {
                cart.products[productIndex].quantity = Number(quantity);;
            } else {
                cart.products.splice(productIndex, 1) // remove the product if quantity is zero
            }

            cart.totalPrice = cart.products.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
            );

            await cart.save();
            return res.status(200).json(cart);

        } else {
            return res.status(404).json({
                message: "product not fonund in cart "
            })
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: "server error"
        })
    }
})

//@route delete /api/cart 
//@desc Remove a product from the cart 
//@access Public 

router.delete("/", async (req, res) => {
    const { productId, size, color, guestId, userId } = req.body;

    try {
        let cart = await getCart(userId, guestId);

        if (!cart) return res.status(404).json({
            message: "cart not found"
        });

        const productIndex = cart.products.findIndex((p) => p.productId.toString() === productId &&
            p.size === size &&
            p.color === color);

        if (productIndex > -1) {
            cart.products.splice(productIndex, 1);

            cart.totalPrice = cart.products.reduce((acc, item) =>
                acc + item.price * item.quantity,
                0
            )
            await cart.save();
            return res.status(200).json(cart);
        } else {
            return res.status(404).json({ message: "product not found in the cart " })
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "server error"
        })
    }
})

//@router get /api/cart
//@desc Remove a product from the cart 
//@access Public

router.get("/", async (req, res) => {
    const { userId, guestId } = req.query;
    try {
        const cart = await getCart(userId, guestId);

        if (cart) {
            res.json(cart);
        } else {
            res.status(404).json({
                message: "Cart not found"
            })
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "server error" })
    }
});

//@route POST /api/cart/merge
//@desc Merge guest cart into user cart on login 
//@access Private 

router.post("/merge", protect, async (req, res) => {
    const { guestId } = req.body;

    try {
        // Find guest cart
        const guestCart = await Cart.findOne({ guestId });

        // Find logged-in user's cart
        const userCart = await Cart.findOne({ user: req.user._id });

        if (guestCart) {
            if (guestCart.products.length === 0) {
                return res.status(404).json({
                    message: "Guest cart is empty"
                });
            }

            if (userCart) {
                // merge guest cart into user cart
                guestCart.products.forEach((guestItem) => {
                    const productIndex = userCart.products.findIndex(
                        (item) =>

                            item.productId.toString() === guestItem.productId.toString() &&
                            item.size === guestItem.size &&
                            item.color === guestItem.color
                    );

                    if (productIndex > -1) {
                        // if item cart exits in the cart, update the quantity 
                        userCart.products[productIndex].quantity += guestItem.quantity;
                    } else {
                        // Otherwise, add the guest item to the cart 
                        userCart.products.push(guestItem);
                    }
                });

                userCart.totalPrice = userCart.products.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                );

                await userCart.save();

                // Remove the guest cart after merging 

                try {
                    await Cart.findOneAndDelete({ guestId });
                } catch (error) {
                    console.error("Error delete guest cart", error);
                }
                res.status(200).json({ userCart })
            } else {

                // if the user have no existing cart, assign the guest cart to the user 

                guestCart.user = req.user._id;
                guestCart.guestId = undefined;
                await guestCart.save();
                res.status(200).json(guestCart)
            }
        } else {
            if (userCart) {
                // Guest cart has already has been merged, return user cart 
                return res.status(200).json(userCart);
            }
            res.status(404).json({
                message: "Guest cart not found"
            });
        }

    } catch (error) {
        console.error("Merge cart error:", error);
        return res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
})

export default router;
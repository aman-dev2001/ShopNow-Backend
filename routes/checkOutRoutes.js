import express from "express";
import CheckOut from "../models/Checkout.js";
import Cart from "../models/Cart.js";
import Order from "../models/Order.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// @route POST /api/checkout
//@desc Create a new checkout session
//@access Private 

router.post("/", protect, async (req, res) => {
    const { checkoutItems, shippingAddress, paymentMethod, totalPrice } = req.body;
    if (!checkoutItems || checkoutItems.length === 0) {
        return res.status(400).json({
            message: "no item in checkout"
        })
    }

    try {
        // create a new checkout session 
        const newCheckOut = await CheckOut.create({
            user: req.user._id,
            checkoutItems: checkoutItems,
            shippingAddress,
            paymentMethod,
            totalPrice,
            paymentStatus: "Pending",
            isPaid: false
        });
        console.log(`checkout created for user: ${req.user._id} `);
        res.status(201).json(newCheckOut);
    } catch (error) {
        console.error("Error creating checkout session", error);
        res.status(500).json({
            message: "Server error"
        })
    }
});

//@Router PUT /api/checkout/:id/pay
// @desc Update checkout to mark as paid after successful payment
// @access Private

router.put("/:id/pay", protect, async (req, res) => {
    const { paymentStatus, paymentDetails } = req.body

    try {

        const checkout = await CheckOut.findById(req.params.id);

        if (!checkout) {
            return res.status(404).json({
                message: "checkout not found"
            })
        }

        if (paymentStatus === "Paid") {
            checkout.isPaid = true;
            checkout.paymentStatus = paymentStatus;
            checkout.paymentDetails = paymentDetails;
            checkout.paidAt = Date.now();

            await checkout.save();
            res.status(200).json(checkout);

        } else {
            res.status(400).json({
                message: "invalid payment status"
            });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "server error"
        })
    }
});

//@route POST /api/checkout/:id/finalize
//@desc Finalize checkout and convert to an order after payment confirmation 
// @access Private

router.post("/:id/finalize", protect, async (req, res) => {
    try {
        const checkout = await CheckOut.findById(req.params.id);
        if (!checkout) {
            return res.status(404).json({
                message: "checkout not found"
            })
        }
        if (checkout.isPaid && !checkout.isFinalized) {
            // create the final order based on checkout details

            const finalOrder = await Order.create({
                user: checkout.user,
                orderItems: checkout.checkoutItems,
                shippingAddress: checkout.shippingAddress,
                paymentMethod: checkout.paymentMethod,
                totalPrice: checkout.totalPrice,
                isPaid: checkout.isPaid,
                paidAt: checkout.paidAt,
                isDelivered: false,
                paymentStatus: "Paid",
                paymentDetails: checkout.paymentDetails,
            });

            // Mark the checkOut as finalized
            checkout.isFinalized = true;
            checkout.finalizedAt = Date.now();
            await checkout.save();

            // Delete the cart associated with thw user 

            await Cart.findOneAndDelete({
                user: checkout.user
            });

            res.status(201).json(finalOrder);

        } else if (checkout.isFinalized) {
            res.status(400).json({
                message: "checkout allready finalized"
            })
        } else {
            res.status(400).json({
                message: "Checkout is not paid"
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "server error"
        })
    }
})

export default router;
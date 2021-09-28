import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    orderStatus: {
      type: String,
      required: true,
    },
    paymentStatus: {
      type: String,
      required: true,
      unique: true,
    },
    shippingStatus: {
      type: String,
      required: true,
    },
    customer: {
      type: Number,
      default: 0,
    },
    orderTotal: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const OrderModel = mongoose.model("orders", orderSchema);

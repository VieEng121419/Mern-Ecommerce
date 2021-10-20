import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    categoryId: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "1",
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    priceDiscount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "1",
      required: false,
    },
    count: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const ProductModel = mongoose.model("products", productSchema);

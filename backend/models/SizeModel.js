import mongoose from "mongoose";
const sizeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const SizeModel = mongoose.model("sizes", sizeSchema);

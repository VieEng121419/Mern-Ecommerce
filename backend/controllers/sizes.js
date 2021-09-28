import { SizeModel } from "../models/SizeModel.js";
import { data } from "../data.js";

export const getSizes = async (req, res) => {
  try {
    const size = await SizeModel.find();
    res.status(200).json(size);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const postSizes = async (req, res) => {
  try {
    const createdSizes = await SizeModel.insertMany(data.sizes);
    res.status(200).json(createdSizes);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

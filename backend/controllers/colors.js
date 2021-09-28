import { ColorModel } from "../models/ColorModel.js";
import { data } from "../data.js";

export const getColors = async (req, res) => {
  try {
    const colors = await ColorModel.find();
    res.status(200).json(colors);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const postColors = async (req, res) => {
  try {
    const createdColors = await ColorModel.insertMany(data.colors);
    res.status(200).json(createdColors);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

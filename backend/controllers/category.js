import { CategoryModel } from "../models/CategoryModel.js";
import { data } from "../data.js";

export const getCategory = async (req, res) => {
  try {
    const category = await CategoryModel.find();
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const postCategory = async (req, res) => {
  try {
    const createdCategories = await CategoryModel.insertMany(data.category);
    res.status(200).json(createdCategories);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

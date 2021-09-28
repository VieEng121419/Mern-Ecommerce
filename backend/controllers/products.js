import { ProductModel } from "../models/ProductModel.js";
import { data } from "../data.js";

export const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const postProducts = async (req, res) => {
  try {
    const createdProducts = await ProductModel.insertMany(data.products);
    res.status(200).json(createdProducts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const postProduct = async (req, res) => {
  try {
    const createdProduct = await ProductModel.insertOne(data.users);
    res.status(200).json(createdProduct);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createProducts = async (req, res) => {
  try {
    const product = await ProductModel.find();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

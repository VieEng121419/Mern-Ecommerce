import { ProductModel } from "../models/ProductModel.js";
import { data } from "../data.js";

//GET LIST PRODUCTS
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

//UPLOAD IMAGES PRODUCT
export const uploadImg = async (req, res) => {
  try {
    res.status(201).send("Upload thành công");
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

//CREATE NEW PRODUCT
export const createProduct = async (req, res) => {
  try {
    const info = JSON.parse(req.body.infos);
    const imgArr = [];
    req.files.forEach((ele) => {
      imgArr.push(ele.path.slice(25));
    });
    const product = {
      name: info.name,
      image: imgArr.toString(),
      categoryId: info.categoryId,
      color: info.color,
      size: info.size,
      description: info.description,
      price: info.price,
      priceDiscount: info.priceDiscount,
      status: info.status,
      count: info.count,
    };
    const newProduct = new ProductModel(product);
    await newProduct.save();
    res.status(200).json({
      info: {
        _id: newProduct._id,
        name: newProduct.name,
        image: newProduct.image,
        categoryId: newProduct.categoryId,
        color: newProduct.color,
        size: newProduct.size,
        description: newProduct.description,
        price: newProduct.price,
        priceDiscount: newProduct.priceDiscount,
        status: newProduct.status,
        count: newProduct.count,
        createdAt: newProduct.createdAt,
        updatedAt: newProduct.updatedAt,
      },
      message: {
        message: "Thêm sản phẩm thành công !",
      },
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

//DELETE PRODUCTS
export const deleteProducts = async (req, res) => {
  try {
    const ids = await req.body.id;
    const idArr = await ids.split(",");
    const confirm = await ProductModel.deleteMany({
      _id: idArr,
    });
    res.status(200).send(confirm);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

//EDIT PRODUCTS
export const updateProducts = async (req, res) => {
  try {
    const info = JSON.parse(req.body.infos);
    const imgArr = [];
    req.files.forEach((ele) => {
      imgArr.push(ele.path.slice(25));
    });
    const product = await ProductModel.findById(req.params.id);
    if (product) {
      product.name = info.name;
      // product.image = imgArr.toString();
      product.categoryId = info.categoryId;
      product.color = info.color;
      product.size = info.size;
      product.description = info.description;
      product.price = info.price;
      product.priceDiscount = info.priceDiscount;
      product.status = info.status;
      product.count = info.count;
      const updateProduct = await product.save();
      console.log(updateProduct);
      res.send({ message: "Cập nhật thành công! ", product: updateProduct });
    } else {
      res.status(404).send({ message: "Sản phẩm không tồn tại! " });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

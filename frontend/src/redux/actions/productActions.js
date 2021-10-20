import api from "../../api";

import {
  PRODUCTS_LIST,
  COLORS_LIST,
  SIZES_LIST,
} from "../../constants/productConstants";

//GET ACTIONS BEGIN
export const getProducts = () => async (dispatch) => {
  try {
    const res = await api.get("api/products");
    dispatch({ type: PRODUCTS_LIST, payload: res.data });
  } catch (e) {
    console.log(e);
  }
};

export const getColors = () => async (dispatch) => {
  try {
    const res = await api.get("api/colors");
    dispatch({ type: COLORS_LIST, payload: res.data });
  } catch (e) {
    console.log(e);
  }
};

export const getSizes = () => async (dispatch) => {
  try {
    const res = await api.get("api/sizes");
    dispatch({ type: SIZES_LIST, payload: res.data });
  } catch (e) {
    console.log(e);
  }
};
//GET ACTIONS END

//POST ACTIONS BEGIN
export const postProduct = (data) => async (dispatch) => {
  try {
    const isSucc = await api.post("api/products/add-product", data);
    if (isSucc) {
      console.log("success");
      document.location.href = "/admin/products";
    }
  } catch (e) {
    console.log(e);
  }
};
export const postImgProduct = (data) => async (dispatch) => {
  try {
    await api.post("api/products/imageProduct", data);
  } catch (e) {
    console.log(e);
  }
};
//POST ACTIONS END

//DELETE ACTIONS BEGIN
export const deleteProducts = (data) => async (dispatch) => {
  try {
    const ids = { id: data };
    const isDeleted = await api.delete("api/products", { data: ids });
    if (isDeleted) {
      document.location.href = "/admin/products";
    }
  } catch (e) {
    console.log(e);
  }
};
//DELETE ACTIONS END

//PUT ACTIONS BEGIN
export const updateProduct = (product) => async (dispatch) => {
  try {
    const data = await api.put(`api/products/${product.id}`, product.formData);
    if (data) {
      document.location.href = "/admin/products";
    }
  } catch (e) {
    console.log(e);
  }
};
//PUT ACTIONS END

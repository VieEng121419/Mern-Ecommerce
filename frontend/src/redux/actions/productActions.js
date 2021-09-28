import api from "../../api";
import {
  PRODUCTS_LIST,
  COLORS_LIST,
  SIZES_LIST,
} from "../../constants/productConstants";

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

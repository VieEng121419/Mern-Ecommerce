import api from "../../api";
import { SET_CATE } from "../../constants/categoryConstant";

export const getCategory = () => async (dispatch) => {
  try {
    const res = await api.get("api/categories");
    dispatch({ type: SET_CATE, payload: res.data });
  } catch (e) {
    console.log(e);
  }
};

import * as _state from "../stores/productState";
import {
  PRODUCTS_LIST,
  COLORS_LIST,
  SIZES_LIST,
} from "../../constants/productConstants";

const productReducer = (state = _state.productState, action) => {
  switch (action.type) {
    case PRODUCTS_LIST: {
      return {
        ...state,
        products_list: action.payload,
      };
    }
    case COLORS_LIST: {
      return {
        ...state,
        colors_list: action.payload,
      };
    }
    case SIZES_LIST: {
      return {
        ...state,
        sizes_list: action.payload,
      };
    }
    default:
      return state;
  }
};
export default productReducer;

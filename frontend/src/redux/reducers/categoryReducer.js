import * as _state from "../stores/categoryState";
import { SET_CATE } from "../../constants/categoryConstant";

const categoryReducer = (state = _state.categoryState, action) => {
  switch (action.type) {
    case SET_CATE: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    default:
      return state;
  }
};
export default categoryReducer;

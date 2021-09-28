import { combineReducers } from "redux";
import category from "./categoryReducer";
import user from "./userReducers";
import product from "./productReducers";

const rootReducer = combineReducers({
  category,
  user,
  product,
});

export default rootReducer;

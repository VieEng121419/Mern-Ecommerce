import api from "../../api";
import {
  REMOVE_USER,
  SET_ROLE,
  SET_USERS,
  SET_USER,
  USER_LOGIN_FAIL,
  RESET_MESSAGE,
} from "../../constants/userConstant";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await api.get("api/users");
    dispatch({ type: SET_USERS, payload: res.data });
  } catch (e) {
    console.log(e);
  }
};

export const getRole = (data) => async (dispatch) => {
  try {
    const res = await api.post("api/users/userInfo", { id: data });
    dispatch({ type: SET_ROLE, payload: res.data });
  } catch (e) {
    console.log(e);
  }
};

export const register = (data) => async (dispatch) => {
  try {
    const res = await api.post("api/users/register", {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      phone: data.phone,
      sex: data.sex,
    });
    console.log(res.data);
    localStorage.setItem("userInfo", JSON.stringify(res.data.info));
    localStorage.setItem("message-user", JSON.stringify(res.data.message));
    dispatch({ type: SET_USER, payload: res.data.info });
  } catch (e) {
    console.log(e);
  }
};

export const login = (data) => async (dispatch) => {
  try {
    const res = await api.post("api/users/login", {
      email: data.email,
      password: data.password,
    });
    localStorage.setItem("userInfo", JSON.stringify(res.data.info));
    localStorage.setItem("message-user", JSON.stringify(res.data.message));
    dispatch({ type: SET_USER, payload: res.data.info });
    document.location.href = "/";
  } catch (error) {
    console.log(error.response);
    dispatch({ type: USER_LOGIN_FAIL, payload: error.response.data.message });
    localStorage.setItem(
      "message-user_error",
      JSON.stringify(error.response.data)
    );
  } finally {
    dispatch({ type: RESET_MESSAGE });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.setItem(
    "message-user",
    JSON.stringify({ message: "Đăng xuất thành công!" })
  );
  dispatch({ type: REMOVE_USER });
  document.location.href = "/";
};

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { FastField, Form, Formik } from "formik";
import InputField from "../components/InputField/InputField";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { login } from "../redux/actions/userActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginScreen() {
  const dispatch = useDispatch();
  const history = useHistory();
  const failMess = useSelector((state) => state.user.message_login_fail);
  const isLogged =
    JSON.parse(localStorage.getItem("userInfo")) !== null ? true : false;
  const initialValues = {
    email: "",
    password: "",
  };
  const notify = () =>
    toast.error(JSON.parse(localStorage.getItem("message-user_error")).message);
  const clearMess = () => {
    localStorage.removeItem("message-user_error");
  };
  useEffect(() => {
    document.title = "Khách hàng đăng nhập";
    if (localStorage.getItem("message-user_error") && failMess) {
      notify();
      setTimeout(clearMess, 5000);
    } else {
      clearTimeout(clearMess);
    }
  }, [failMess]);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email không hợp lệ")
      .required("Bạn phải nhập Email"),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Ít nhất 8 kí tự, gồm chữ HOA, chữ thường, số và kí tự đặc biệt"
      )
      .required("Bạn phải nhập Mật khẩu"),
  });
  useEffect(() => {
    document.title = "Khách hàng đăng nhập";
    if (isLogged) {
      history.push("/");
    }
  }, [isLogged, history]);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) =>
        dispatch(
          login({
            email: values.email,
            password: values.password,
          })
        )
      }
    >
      {(FormikProps) => {
        return (
          <div className="register-login-section spad">
            <ToastContainer />
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <div className="register-form">
                    <h2>ĐĂNG NHẬP</h2>
                    <Form>
                      <FastField
                        name="email"
                        component={InputField}
                        id="email"
                        placeholder="Email"
                      />
                      <FastField
                        type="password"
                        name="password"
                        component={InputField}
                        id="password"
                        placeholder="Mật khẩu"
                      />
                      <button type="submit" className="site-btn register-btn">
                        ĐĂNG NHẬP
                      </button>
                    </Form>
                    <div className="switch-login">
                      <Link to="/register" className="or-login">
                        hoặc ĐĂNG KÝ
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

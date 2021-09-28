import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { FastField, Form, Formik } from "formik";
import InputField from "../components/InputField/InputField";
import CheckboxField from "../components/InputField/CheckboxField";
import * as Yup from "yup";
import { register } from "../redux/actions/userActions";
import { Link } from "react-router-dom";

export default function RegisterScreen() {
  const dispatch = useDispatch();
  const isRegister =
    JSON.parse(localStorage.getItem("userInfo")) !== null ? true : false;
  const history = useHistory();
  const initialValues = {
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    confirmpassword: "",
    sex: false,
  };
  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .max(8, "Tối đa 8 kí tự")
      .required("Bạn phải nhập Họ"),
    lastname: Yup.string()
      .max(8, "Tối đa 8 kí tự")
      .required("Bạn phải nhập Tên"),
    phone: Yup.string()
      .max(11, "Tối đa 11 kí tự")
      .required("Bạn phải nhập Số ĐT"),
    email: Yup.string()
      .email("Email không hợp lệ")
      .required("Bạn phải nhập Email"),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Ít nhất 8 kí tự, gồm chữ HOA, chữ thường, số và kí tự đặc biệt"
      )
      .required("Bạn phải nhập Mật khẩu"),
    confirmpassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Bạn phải nhập lại đúng Mật khẩu "
    ),
  });
  useEffect(() => {
    document.title = "Khách hàng đăng ký";
    if (isRegister) {
      history.push("/");
    }
  }, [isRegister, history]);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) =>
        dispatch(
          register({
            firstName: values.firstname,
            lastName: values.lastname,
            email: values.email,
            password: values.password,
            phone: values.phone,
            sex: values.sex ? 1 : 0,
          })
        )
      }
    >
      {(FormikProps) => {
        return (
          <div className="register-login-section spad">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <div className="register-form">
                    <h2>ĐĂNG KÝ</h2>
                    <Form>
                      <FastField
                        name="firstname"
                        component={InputField}
                        id="firstname"
                        placeholder="Họ"
                      />
                      <FastField
                        name="lastname"
                        component={InputField}
                        id="lastname"
                        placeholder="Tên"
                      />
                      <FastField
                        name="phone"
                        component={InputField}
                        id="phone"
                        placeholder="Số ĐT"
                      />
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
                      <FastField
                        type="password"
                        name="confirmpassword"
                        component={InputField}
                        id="confirmpassword"
                        placeholder="Nhập lại mật khẩu"
                      />
                      <FastField
                        type="checkbox"
                        name="sex"
                        component={CheckboxField}
                        id="sex"
                      />
                      <button type="submit" className="site-btn register-btn">
                        ĐĂNG KÝ
                      </button>
                    </Form>
                    <div className="switch-login">
                      <Link to="/login" className="or-login">
                        hoặc ĐĂNG NHẬP
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

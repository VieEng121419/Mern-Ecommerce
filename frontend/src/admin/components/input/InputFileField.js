import React, { useState } from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "formik";

InputFileField.propsTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  data: PropTypes.string,
};

InputFileField.defaultProps = {
  data: "",
};

export default function InputFileField(props) {
  const [filename, setFilename] = useState([]);
  const [img, setImg] = useState([]);
  const { field, form, data } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  const onChange = (e) => {
    setImg([]);
    setFilename([]);
    showImg(e.target.files);
    const arrImg = [];
    Object.entries(e.target.files).forEach((value) => {
      arrImg.push(value[1].name);
    });
    props.setFile(e.target.files);
    //fake event onchange
    const changeEvent = {
      target: {
        name: name,
        value: arrImg.toString(),
      },
    };
    field.onChange(changeEvent);
  };

  const showImg = (imgArr) => {
    Object.entries(imgArr).forEach((value) => {
      setFilename((oldVal) => [...oldVal, value[1].name]);
      setImg((oldVal) => [...oldVal, URL.createObjectURL(value[1])]);
    });
  };
  return (
    <div className="input-style-1">
      <label>Hình sản phẩm</label>
      <div className="d-inline-flex justify-content-start align-items-center flex-row">
        <input
          type="file"
          id="customFile"
          className="input-image"
          multiple
          onChange={onChange}
          invalid={showError}
        />
        {img.length !== 0 ? (
          img.map((value, key) => {
            return (
              <img
                key={key}
                className="product_img-add"
                src={value}
                alt="hình sản phẩm"
              />
            );
          })
        ) : data !== "" ? (
          data.split(",").map((value, key) => {
            return (
              <img
                key={key}
                className="product_img-add"
                src={`http://localhost:7000/uploads/products/${value}`}
                alt="hình sản phẩm"
              />
            );
          })
        ) : (
          <img
            src="https://admin-demo.nopcommerce.com/images/thumbs/default-image_100.png"
            alt="hình sản phẩm"
          />
        )}
        &emsp;
        <label htmlFor="customFile" className="main-btn btn-hover deactive-btn">
          Chọn hình
        </label>
      </div>
      <ErrorMessage name={name}>
        {(msg) => <p className="input-message">{msg}</p>}
      </ErrorMessage>
    </div>
  );
}

import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "formik";

InputText.propsTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};
InputText.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};
export default function InputText(props) {
  const { field, type, label, disabled, info } = props;
  const { name } = field;
  return (
    <div className="input-style-1">
      <label>{label}</label>
      <input {...field} type={type} id={name} disabled={disabled} />
      <ErrorMessage name={name}>
        {(msg) => <p className="input-message">{msg}</p>}
      </ErrorMessage>
    </div>
  );
}

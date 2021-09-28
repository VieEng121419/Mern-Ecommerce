import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "formik";

InputField.propsTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};
InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

export default function InputField(props) {
  const { field, form, type, placeholder, disabled } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <div className="group-input">
      <input
        className={showError ? "input-error" : ""}
        type={type}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        {...field}
        invalid={showError}
      />
      {showError ? <i className="fas fa-exclamation-circle"></i> : null}
      <ErrorMessage name={name}>
        {(msg) => <p className="input-message">{msg}</p>}
      </ErrorMessage>
    </div>
  );
}

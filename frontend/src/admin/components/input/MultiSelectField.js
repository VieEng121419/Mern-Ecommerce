import React, { useEffect, useState } from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { ErrorMessage } from "formik";

MultiSelectField.propsTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
  data: PropTypes.string,
};
MultiSelectField.defaultProps = {
  label: "",
  placeholder: "",
  disabled: false,
  options: [],
  data: "",
};

export default function MultiSelectField(props) {
  const [defaultValue, setDefaultValue] = useState();
  const { field, form, options, data, placeholder, label } = props;
  const { name, value } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const selectedOption = options.find((option) => option.value === value);

  const handleSelectedOptionChange = (selectedOption) => {
    const selectedValue = [];
    for (const [key, value] of Object.entries(selectedOption)) {
      selectedValue.push(value.value);
    }
    const changeEvent = {
      target: {
        name: name,
        value: selectedValue.toString(),
      },
    };
    field.onChange(changeEvent);
  };

  useEffect(() => {
    if (data !== "") {
      let dataArr = data.split(",");
      let valueArr = [];
      options.forEach((option) => {
        dataArr.forEach((data) => {
          if (option.value === data) {
            valueArr.push(option);
          }
        });
      });
      setDefaultValue(valueArr);
    } else {
      return;
    }
  }, [data, options]);
  return (
    <div className="input-style-1">
      <label>{label}</label>
      <Select
        closeMenuOnSelect={false}
        name={name}
        id={name}
        onChange={handleSelectedOptionChange}
        value={selectedOption}
        isMulti
        placeholder={placeholder}
        options={options}
        invalid={showError}
      />
      <ErrorMessage name={name}>
        {(msg) => <p className="input-message">{msg}</p>}
      </ErrorMessage>
    </div>
  );
}

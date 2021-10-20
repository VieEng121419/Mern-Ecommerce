import React from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import PropTypes from "prop-types";
import { ErrorMessage } from "formik";

CKEditorField.propsTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
};

export default function CKEditorField(props) {
  const { field, form, data } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  const handleCkeditorState = (e, editor) => {
    const data = editor.getData();
    const changeEvent = {
      target: {
        name: name,
        value: data,
      },
    };
    field.onChange(changeEvent);
  };
  return (
    <div className="input-style-1">
      <label>Mô tả</label>
      <CKEditor
        editor={ClassicEditor}
        onInit={(editor) => {}}
        onChange={handleCkeditorState}
        invalid={showError}
        data={data}
      />
      <ErrorMessage name={name}>
        {(msg) => <p className="input-message">{msg}</p>}
      </ErrorMessage>
    </div>
  );
}

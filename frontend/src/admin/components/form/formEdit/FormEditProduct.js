import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategory } from "../../../../redux/actions/categoryActions";
import {
  getColors,
  getSizes,
  updateProduct,
} from "../../../../redux/actions/productActions";
import * as Yup from "yup";
import { FastField, Field, Form, Formik } from "formik";
import "../style.scss";
import InputText from "../../input/InputText";
import SelectField from "../../input/SelectField";
import MultiSelectField from "../../input/MultiSelectField";
import CKEditorField from "../../input/CKEditorField";
import InputFileField from "../../input/InputFileField";

export default function FormEditProduct(props) {
  const dispatch = useDispatch();
  const [cate, setCate] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [file, setFile] = useState([]);

  const lstProduct = useSelector((state) => state.product.products_list);
  const lstCate = useSelector((state) => state.category.categories);
  const lstColors = useSelector((state) => state.product.colors_list);
  const lstSizes = useSelector((state) => state.product.sizes_list);

  const product = lstProduct.find((x) => x._id === props.match.params.id);

  const setSelectCate = () => {
    lstCate.forEach((value) => {
      let objCate = { value: value._id, label: value.name };
      setCate((oldVal) => [...oldVal, objCate]);
    });
  };
  const setSelectColors = () => {
    lstColors.forEach((value) => {
      let objCate = { value: value._id, label: value.name };
      setColors((oldVal) => [...oldVal, objCate]);
    });
  };
  const setSelectSizes = () => {
    lstSizes.forEach((value) => {
      let objCate = { value: value._id, label: value.name };
      setSizes((oldVal) => [...oldVal, objCate]);
    });
  };

  const initialValues = {
    name: "",
    image: "",
    categoryId: "",
    colors: "",
    sizes: "",
    description: "",
    price: 0,
    priceDiscount: 0,
    status: "1",
    count: 0,
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min("5", "T??n s???n ph???m t???i thi???u 5 k?? t???")
      .max(100, "T??n s???n ph???m t???i ??a 100 k?? t???")
      .required("B???n ph???i nh???p t??n s???n ph???m"),
    image: Yup.string().required("B???n ph???i ch???n h??nh ???nh cho s???n ph???m"),
    categoryId: Yup.string().required("B???n ph???i ch???n danh m???c cho s???n ph???m"),
    colors: Yup.string().required("B???n ph???i ch???n m??u cho s???n ph???m"),
    sizes: Yup.string().required("B???n ph???i ch???n size cho s???n ph???m"),
    description: Yup.string().required("B???n ph???i nh???p m?? t??? cho s???n ph???m"),
    price: Yup.number()
      .min(50000, "Gi?? s???n ph???m t??i thi???u t??? 20.000??")
      .required("B???n ph???i nh???p gi?? cho s???n ph???m"),
    priceDiscount: Yup.number().required(
      "B???n ph???i nh???p gi?? khuy???n m??i cho s???n ph???m"
    ),
    status: Yup.string().required("B???n ph???i ch???n tr???ng th??i cho s???n ph???m"),
    count: Yup.number().required("B???n ph???i nh???p s??? l?????ng s???n ph???m trong kho"),
  });

  useEffect(() => {
    document.title = "Qu???n l?? S???n ph???m";
    dispatch(getCategory());
    dispatch(getColors());
    dispatch(getSizes());
    setSelectCate();
    setSelectColors();
    setSelectSizes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, lstProduct]);

  return (
    <Formik
      initialValues={product || initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const value = {
          name: values.name,
          image: values.image,
          price: values.price,
          priceDiscount: values.priceDiscount,
          count: values.count,
          description: values.description,
          categoryId: values.categoryId,
          color: values.colors,
          size: values.sizes,
          status: values.status,
        };
        const formData = new FormData();
        for (let i = 0; i < file.length; i++) {
          formData.append("files", file[i]);
        }
        formData.append("infos", JSON.stringify(value));
        dispatch(
          updateProduct({ formData: formData, id: props.match.params.id })
        );
      }}
      enableReinitialize
    >
      {(formikProps) => {
        const { values, errors } = formikProps;
        console.log(values, errors);
        return (
          <section className="tab-components">
            <Form>
              <div className="container-fluid">
                {/* ========== title-wrapper start ========== */}
                <div className="title-wrapper pt-30">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="title mb-30">
                        <h2>Ch???nh S???a S???n Ph???m</h2>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-md-6">
                      <div className="breadcrumb-wrapper mb-30">
                        <nav aria-label="breadcrumb">
                          <button
                            type="submit"
                            className="main-btn success-btn btn-hover"
                          >
                            <i class="fas fa-save"></i>&ensp;L??u ch???nh s???a
                          </button>
                          &nbsp;
                          <Link
                            to={`/admin/products`}
                            className="main-btn active-btn btn-hover"
                          >
                            <i class="fas fa-chevron-circle-left"></i>&ensp;Quay
                            v??? danh s??ch
                          </Link>
                        </nav>
                      </div>
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row */}
                </div>
                {/* ========== title-wrapper end ========== */}
                {/* ========== form-elements-wrapper start ========== */}
                <div className="form-elements-wrapper">
                  <div className="row">
                    <div className="col-lg-12">
                      {/* input style start */}
                      <div className="card-style mb-30">
                        <Field
                          name="name"
                          label="T??n s???n ph???m"
                          component={InputText}
                          id="name"
                        />
                        {/* end input */}
                        <FastField
                          name="image"
                          setFile={setFile}
                          component={InputFileField}
                          id="image"
                          data={product.image}
                        />
                        <FastField
                          type="number"
                          name="price"
                          label="Gi??"
                          component={InputText}
                          id="price"
                        />
                        {/* end input */}
                        <FastField
                          type="number"
                          name="priceDiscount"
                          label="Gi?? khuy???n m??i"
                          component={InputText}
                          id="priceDiscount"
                        />
                        {/* end input */}
                        <FastField
                          type="number"
                          name="count"
                          label="S??? l?????ng kho"
                          component={InputText}
                          id="count"
                        />
                        {/* end input */}
                        <Field
                          name="description"
                          component={CKEditorField}
                          id="description"
                          data={product.description}
                        />
                        {/* end input */}
                        <Field
                          name="categoryId"
                          label="Danh m???c"
                          component={MultiSelectField}
                          placeholder="Ch???n danh m???c..."
                          id="categoryId"
                          data={product.categoryId}
                          options={cate}
                        />
                        {/* end input */}
                        <div className="input-style-1">
                          <Field
                            data={product.color}
                            name="colors"
                            label="M??u s???c"
                            component={MultiSelectField}
                            placeholder="Ch???n m??u cho s???n ph???m..."
                            id="colors"
                            options={colors}
                          />
                        </div>
                        {/* end input */}
                        <div className="input-style-1">
                          <Field
                            name="sizes"
                            label="Size"
                            data={product.size}
                            component={MultiSelectField}
                            placeholder="Ch???n size..."
                            id="sizes"
                            options={sizes}
                          />
                        </div>
                        {/* end input */}
                        <div className="input-style-1">
                          <FastField
                            name="status"
                            label="Tr???ng th??i"
                            component={SelectField}
                            data={product.status}
                            placeholder="Ch???n tr???ng th??i"
                            id="status"
                            options={[
                              { value: "1", label: "Hi???n" },
                              { value: "0", label: "???n" },
                            ]}
                          />
                        </div>
                        {/* end input */}
                      </div>
                      {/* end card */}
                      {/* ======= input style end ======= */}
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row */}
                </div>
                {/* ========== form-elements-wrapper end ========== */}
              </div>
              {/* end container */}
            </Form>
          </section>
        );
      }}
    </Formik>
  );
}

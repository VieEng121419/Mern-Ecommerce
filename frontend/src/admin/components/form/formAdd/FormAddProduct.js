import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../../../redux/actions/categoryActions";
import {
  getColors,
  getSizes,
  postProduct,
} from "../../../../redux/actions/productActions";
import * as Yup from "yup";
import { FastField, Field, Form, Formik } from "formik";
import "../style.scss";
import InputText from "../../input/InputText";
import SelectField from "../../input/SelectField";
import MultiSelectField from "../../input/MultiSelectField";
import CKEditorField from "../../input/CKEditorField";
import InputFileField from "../../input/InputFileField";

export default function FormAddProduct() {
  const dispatch = useDispatch();
  const [cate, setCate] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [file, setFile] = useState([]);

  const lstCate = useSelector((state) => state.category.categories);
  const lstColors = useSelector((state) => state.product.colors_list);
  const lstSizes = useSelector((state) => state.product.sizes_list);

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
      .min("5", "Tên sản phẩm tối thiểu 5 kí tự")
      .max(100, "Tên sản phẩm tối đa 100 kí tự")
      .required("Bạn phải nhập tên sản phẩm"),
    image: Yup.string().required("Bạn phải chọn hình ảnh cho sản phẩm"),
    categoryId: Yup.string().required("Bạn phải chọn danh mục cho sản phẩm"),
    colors: Yup.string().required("Bạn phải chọn màu cho sản phẩm"),
    sizes: Yup.string().required("Bạn phải chọn size cho sản phẩm"),
    description: Yup.string().required("Bạn phải nhập mô tả cho sản phẩm"),
    price: Yup.number()
      .min(50000, "Giá sản phẩm tôi thiểu từ 20.000đ")
      .required("Bạn phải nhập giá cho sản phẩm"),
    priceDiscount: Yup.number().required(
      "Bạn phải nhập giá khuyến mãi cho sản phẩm"
    ),
    status: Yup.string().required("Bạn phải chọn trạng thái cho sản phẩm"),
    count: Yup.number().required("Bạn phải nhập số lượng sản phẩm trong kho"),
  });

  useEffect(() => {
    document.title = "Quản lý Sản phẩm";
    dispatch(getCategory());
    dispatch(getColors());
    dispatch(getSizes());
    setSelectCate();
    setSelectColors();
    setSelectSizes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Formik
      initialValues={initialValues}
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
        dispatch(postProduct(formData));
      }}
    >
      {(formikProps) => {
        const { values } = formikProps;
        return (
          <section className="tab-components">
            <Form>
              <div className="container-fluid">
                {/* ========== title-wrapper start ========== */}
                <div className="title-wrapper pt-30">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="title mb-30">
                        <h2>Thêm Sản Phẩm</h2>
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
                            <i class="fas fa-save"></i>&ensp;Lưu sản phẩm
                          </button>
                          &nbsp;
                          <button
                            type="submit"
                            className="main-btn info-btn btn-hover"
                          >
                            <i class="far fa-save"></i>&ensp;Lưu và tiếp tục
                          </button>
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
                        <FastField
                          name="name"
                          label="Tên sản phẩm"
                          component={InputText}
                          id="name"
                        />
                        {/* end input */}
                        <FastField
                          name="image"
                          setFile={setFile}
                          component={InputFileField}
                          id="image"
                        />
                        <FastField
                          type="number"
                          name="price"
                          label="Giá"
                          component={InputText}
                          id="price"
                        />
                        {/* end input */}
                        <FastField
                          type="number"
                          name="priceDiscount"
                          label="Giá khuyến mãi"
                          component={InputText}
                          id="priceDiscount"
                        />
                        {/* end input */}
                        <FastField
                          type="number"
                          name="count"
                          label="Số lượng kho"
                          component={InputText}
                          id="count"
                        />
                        {/* end input */}
                        <FastField
                          name="description"
                          component={CKEditorField}
                          id="description"
                        />
                        {/* end input */}
                        <Field
                          name="categoryId"
                          label="Danh mục"
                          component={MultiSelectField}
                          placeholder="Chọn danh mục..."
                          id="categoryId"
                          options={cate}
                        />
                        {/* end input */}
                        <div className="input-style-1">
                          <Field
                            name="colors"
                            label="Màu sắc"
                            component={MultiSelectField}
                            placeholder="Chọn màu cho sản phẩm..."
                            id="colors"
                            options={colors}
                          />
                        </div>
                        {/* end input */}
                        <div className="input-style-1">
                          <Field
                            name="sizes"
                            label="Size"
                            component={MultiSelectField}
                            placeholder="Chọn size..."
                            id="sizes"
                            options={sizes}
                          />
                        </div>
                        {/* end input */}
                        <div className="input-style-1">
                          <FastField
                            name="status"
                            label="Trạng thái"
                            component={SelectField}
                            placeholder="Chọn trạng thái"
                            id="status"
                            options={[
                              { value: "1", label: "Hiện" },
                              { value: "0", label: "Ẩn" },
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

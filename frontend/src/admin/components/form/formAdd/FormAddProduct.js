import React, { useEffect, useState } from "react";
import Select from "react-select";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../../../redux/actions/categoryActions";
import { getColors, getSizes } from "../../../../redux/actions/productActions";
import "../style.scss";

export default function FormAddProduct() {
  const dispatch = useDispatch();
  const [cate, setCate] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [file, setFile] = useState([]);
  const [filename, setFilename] = useState([]);
  const [img, setImg] = useState([]);

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
  const handleCkeditorState = (e, editor) => {
    const data = editor.getData();
  };
  const onChange = (e) => {
    showImg(e.target.files);
  };
  const showImg = (imgArr) => {
    Object.entries(imgArr).forEach((value) => {
      setFile((oldVal) => [...oldVal, value[1]]);
      setFilename((oldVal) => [...oldVal, value[1].name]);
      setImg((oldVal) => [...oldVal, URL.createObjectURL(value[1])]);
    });
    // imgArr.forEach((img) => {
    //   setFile(img);
    //   setFilename(img.name);
    //   setImg((oldVal) => [...oldVal, URL.createObjectURL(img)]);
    // });
  };
  useEffect(() => {
    document.title = "Quản lý Sản phẩm";
    dispatch(getCategory());
    dispatch(getColors());
    dispatch(getSizes());

    setSelectCate();
    setSelectColors();
    setSelectSizes();
  }, [dispatch]);
  return (
    <section className="tab-components">
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
                  <a href="/#" className="main-btn success-btn btn-hover">
                    <i class="fas fa-save"></i>&ensp;Lưu sản phẩm
                  </a>
                  &nbsp;
                  <a href="/#" className="main-btn info-btn btn-hover">
                    <i class="far fa-save"></i>&ensp;Lưu và tiếp tục
                  </a>
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
                <div className="input-style-1">
                  <label>Tên sản phẩm</label>
                  <input type="text" />
                </div>
                {/* end input */}
                <div className="input-style-1">
                  <label>Hình sản phẩm</label>
                  <div className="d-inline-flex justify-content-start align-items-center flex-row">
                    <input
                      type="file"
                      id="customFile"
                      className="input-image"
                      multiple
                      onChange={onChange}
                    />
                    {img !== [] ? (
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
                    ) : (
                      <img
                        src="https://admin-demo.nopcommerce.com/images/thumbs/default-image_100.png"
                        alt="hình sản phẩm"
                      />
                    )}
                    &emsp;
                    <label
                      htmlFor="customFile"
                      className="main-btn btn-hover deactive-btn"
                    >
                      Chọn hình
                    </label>
                  </div>
                </div>
                {/* end input */}
                <div className="input-style-1">
                  <label>Giá</label>
                  <input type="number" />
                </div>
                {/* end input */}
                <div className="input-style-1">
                  <label>Giá khuyến mãi</label>
                  <input type="number" />
                </div>
                {/* end input */}
                <div className="input-style-1">
                  <label>Mô tả</label>
                  <CKEditor
                    editor={ClassicEditor}
                    onInit={(editor) => {}}
                    onChange={handleCkeditorState}
                  />
                </div>
                {/* end input */}
                <div className="input-style-1">
                  <label>Danh mục</label>
                  <Select closeMenuOnSelect={false} isMulti options={cate} />
                </div>
                {/* end input */}
                <div className="input-style-1">
                  <label>Màu</label>
                  <Select closeMenuOnSelect={false} isMulti options={colors} />
                </div>
                {/* end input */}
                <div className="input-style-1">
                  <label>Size</label>
                  <Select closeMenuOnSelect={false} isMulti options={sizes} />
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
    </section>
  );
}

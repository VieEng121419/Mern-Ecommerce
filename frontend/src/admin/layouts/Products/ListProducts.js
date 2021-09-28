import React, { useEffect } from "react";
import {
  getColors,
  getProducts,
  getSizes,
} from "../../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import Table from "../../components/table/ProductTable";
import { getCategory } from "../../../redux/actions/categoryActions";

export default function ListProducts() {
  let { url } = useRouteMatch();
  const dispatch = useDispatch();
  const ListProducts = useSelector((state) => state.product.products_list);
  useEffect(() => {
    document.title = "Quản lý Sản phẩm";
    dispatch(getProducts());
    dispatch(getCategory());
    dispatch(getColors());
    dispatch(getSizes());
  }, [dispatch]);
  return (
    <section className="table-components">
      <div className="container-fluid">
        {/* ========== title-wrapper start ========== */}
        <div className="title-wrapper pt-30">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="title mb-30">
                <h2>Danh Sách Sản phẩm</h2>
              </div>
            </div>
            {/* end col */}
            <div className="col-md-6">
              <div className="breadcrumb-wrapper mb-30">
                <nav aria-label="breadcrumb">
                  <Link
                    to={`${url}/add`}
                    className="main-btn success-btn btn-hover"
                  >
                    <i class="fas fa-plus"></i>&ensp;Thêm
                  </Link>
                  &nbsp;
                  <Link
                    to={`${url}/add`}
                    className="main-btn warning-btn btn-hover"
                  >
                    <i class="fas fa-download"></i>&ensp;Xuất
                  </Link>
                  &nbsp;
                  <Link
                    to={`${url}/add`}
                    className="main-btn active-btn btn-hover"
                  >
                    <i class="fas fa-upload"></i>&ensp;Nhập
                  </Link>
                  &nbsp;
                  <Link
                    to={`${url}/add`}
                    className="main-btn danger-btn btn-hover"
                  >
                    <i class="fas fa-trash-alt"></i>&ensp;Xóa(đã chọn)
                  </Link>
                </nav>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* ========== title-wrapper end ========== */}
        <Table list={ListProducts} />
      </div>
      {/* end container */}
    </section>
  );
}

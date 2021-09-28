import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../../redux/actions/categoryActions";
import CategoryTable from "../../components/table/CategoryTable";

export default function ListCate() {
  const dispatch = useDispatch();
  const listCate = useSelector((state) => state.category.categories);
  useEffect(() => {
    document.title = "Quản lý Danh mục";
    dispatch(getCategory());
  }, [dispatch]);
  return (
    <section className="table-components">
      <div className="container-fluid">
        {/* ========== title-wrapper start ========== */}
        <div className="title-wrapper pt-30">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="title mb-30">
                <h2>Danh Sách Danh Mục </h2>
              </div>
            </div>
            {/* end col */}
            <div className="col-md-6">
              <div className="breadcrumb-wrapper mb-30">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#0">Trang chủ</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Danh mục
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* ========== title-wrapper end ========== */}
        {/* ========== tables-wrapper start ========== */}
        <CategoryTable list={listCate} />
        {/* ========== tables-wrapper end ========== */}
      </div>
      {/* end container */}
    </section>
  );
}

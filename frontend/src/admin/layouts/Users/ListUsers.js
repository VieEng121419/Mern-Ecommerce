import React, { useEffect } from "react";
import { getUsers } from "../../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import UserTable from "../../components/table/UserTable";

export default function ListUsers() {
  let { url } = useRouteMatch();
  const dispatch = useDispatch();
  const listUser = useSelector((state) => state.user.users);
  useEffect(() => {
    document.title = "Quản lý Tài khoản";
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <section className="table-components">
      <div className="container-fluid">
        {/* ========== title-wrapper start ========== */}
        <div className="title-wrapper pt-30">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="title mb-30">
                <h2>Danh Sách Tài khoản</h2>
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
                    Thêm
                  </Link>
                </nav>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* ========== title-wrapper end ========== */}
        <UserTable list={listUser} />
      </div>
      {/* end container */}
    </section>
  );
}

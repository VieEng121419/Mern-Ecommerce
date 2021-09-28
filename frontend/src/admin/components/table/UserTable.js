import React from "react";

export default function UserTable(props) {
  const list = props.list;
  return (
    <div className="tables-wrapper">
      <div className="row">
        <div className="col-lg-12">
          <div className="card-style mb-30">
            <div className="table-wrapper table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      <h6>#</h6>
                    </th>
                    <th style={{}}>
                      <h6>Họ</h6>
                    </th>
                    <th style={{}}>
                      <h6>Tên</h6>
                    </th>
                    <th style={{}}>
                      <h6>Điện thoại</h6>
                    </th>
                    <th style={{}}>
                      <h6>Giới tính</h6>
                    </th>
                    <th>
                      <h6>Quyền</h6>
                    </th>
                    <th>
                      <h6>Thao tác</h6>
                    </th>
                  </tr>
                  {/* end table row*/}
                </thead>
                <tbody>
                  {list.map((value, key) => {
                    return (
                      <tr data-key={key}>
                        <td>
                          <div className="check-input-primary">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="checkbox-1"
                            />
                          </div>
                        </td>
                        <td className="min-width">
                          <p>{value.firstName}</p>
                        </td>
                        <td className="min-width">
                          <p>{value.lastName}</p>
                        </td>
                        <td className="min-width">
                          <p>{value.phone}</p>
                        </td>
                        <td className="min-width">
                          {value.sex === 1 ? (
                            <span className="status-btn">Nam</span>
                          ) : (
                            <span className="status-btn">Nữ</span>
                          )}
                        </td>
                        <td className="min-width">
                          {value.role === 1 ? (
                            <span className="status-btn active-btn">
                              Quản trị
                            </span>
                          ) : (
                            <span className="status-btn danger-btn">
                              Người dùng
                            </span>
                          )}
                        </td>
                        <td>
                          <div className="action">
                            <button className="text-success" title="Chi tiết">
                              <i className="lni lni-information" />
                            </button>
                            <button className="text-warning" title="Chỉnh sửa">
                              <i className="lni lni-cog" />
                            </button>
                            <button
                              className="text-danger"
                              title="Xóa thùng rác"
                            >
                              <i className="lni lni-trash-can" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  {/* end table row */}
                </tbody>
              </table>
              {/* end table */}
            </div>
          </div>
          {/* end card */}
        </div>
        {/* end col */}
      </div>
      {/* end row */}
    </div>
  );
}

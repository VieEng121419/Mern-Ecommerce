import React from "react";

export default function CategoryTable(props) {
  const list = props.list;
  const checkCate = (id) => {
    var cateArr = [];
    list.forEach((value) => {
      if (id.includes(value._id)) cateArr.push(value.name);
    });
    return <p>{cateArr.toString()}</p>;
  };
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
                      <h6>Tên</h6>
                    </th>
                    <th style={{}}>
                      <h6>Danh mục cha</h6>
                    </th>
                    <th style={{}}>
                      <h6>Loại</h6>
                    </th>
                    <th>
                      <h6>Trạng thái</h6>
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
                              class="form-check-input"
                              type="checkbox"
                              id="checkbox-1"
                            />
                          </div>
                        </td>
                        <td className="min-width">
                          <p>{value.name}</p>
                        </td>
                        <td className="min-width">
                          {checkCate(value.parentCate)}
                        </td>
                        <td className="min-width">
                          <p>{value.type}</p>
                        </td>
                        <td className="min-width">
                          {value.status === "1" ? (
                            <span className="status-btn active-btn">
                              Public
                            </span>
                          ) : (
                            <span className="status-btn danger-btn">Hide</span>
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

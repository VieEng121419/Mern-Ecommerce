import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import "./style.scss";

export default function ProductTable(props) {
  const list = props.list;
  let { url } = useRouteMatch();
  const [itemsChecked, setItemsChecked] = useState([]);
  const lstCate = useSelector((state) => state.category.categories);
  const lstColors = useSelector((state) => state.product.colors_list);
  const lstSizes = useSelector((state) => state.product.sizes_list);

  const formatVND = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };
  const checkCate = (id) => {
    var cateArr = [];
    lstCate.forEach((value) => {
      if (id.includes(value._id)) cateArr.push(value.name);
    });
    return <p>{cateArr.toString()}</p>;
  };
  const checkColor = (id) => {
    var colorArr = [];
    lstColors.forEach((value) => {
      if (id.includes(value._id)) colorArr.push(value.name);
    });
    return <p>{colorArr.toString()}</p>;
  };
  const checkSize = (id) => {
    var sizeArr = [];
    lstSizes.forEach((value) => {
      if (id.includes(value._id)) sizeArr.push(value.name);
    });
    return <p>{sizeArr.toString()}</p>;
  };
  function checkImage(key) {
    let imgArr = [];
    list.forEach((value) => {
      imgArr.push(value.image.split(","));
    });
    const imgItem = imgArr[key];
    if (imgItem) return imgItem[0];
  }
  const isChecked = (e, id) => {
    const checked = e.target.checked;
    if (checked) {
      setItemsChecked((oldval) => [...oldval, id]);
    } else {
      setItemsChecked(
        itemsChecked.filter((item) => {
          return item !== id;
        })
      );
    }
  };
  useEffect(() => {
    props.setDeleteItems(itemsChecked);
  }, [itemsChecked, props]);
  return (
    <div className="tables-wrapper">
      <div className="row">
        <div className="col-lg-12">
          <div className="card-style mb-30">
            <div className="table-wrapper table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <h6>#</h6>
                    </th>
                    <th>
                      <h6>Tên</h6>
                    </th>
                    <th>
                      <h6>Hình</h6>
                    </th>
                    <th>
                      <h6>Danh mục</h6>
                    </th>
                    <th>
                      <h6>Màu</h6>
                    </th>
                    <th>
                      <h6>Size</h6>
                    </th>
                    <th>
                      <h6>Giá</h6>
                    </th>
                    <th>
                      <h6>Giá khuyến mãi</h6>
                    </th>
                    <th>
                      <h6>Trạng thái</h6>
                    </th>
                    <th>
                      <h6>Chức năng</h6>
                    </th>
                  </tr>
                  {/* end table row*/}
                </thead>
                {list.length === 0 ? (
                  <p className="text-center">Không có sản phẩm</p>
                ) : (
                  <tbody>
                    {list.map((value, key) => {
                      return (
                        <tr data-key={key} id={value._id}>
                          <td>
                            <div className="check-input-primary">
                              <input
                                className="form-check-input check-admin"
                                type="checkbox"
                                id="checkbox-1"
                                onClick={(e) => isChecked(e, value._id)}
                              />
                            </div>
                          </td>
                          <td className="min-width">
                            <p>{value.name}</p>
                          </td>
                          <td className="min-width th-admin">
                            <img
                              src={`http://localhost:7000/uploads/products/${checkImage(
                                key
                              )}`}
                              alt={`sp ${key + 1}`}
                            />
                          </td>
                          <td className="min-width">
                            {checkCate(value.categoryId)}
                          </td>
                          <td className="min-width">
                            {checkColor(value.color)}
                          </td>
                          <td className="min-width">{checkSize(value.size)}</td>
                          <td className="min-width">
                            <p>{formatVND(value.price)}</p>
                          </td>
                          <td className="min-width">
                            <p>{formatVND(value.priceDiscount)}</p>
                          </td>
                          <td className="min-width">
                            {value.status === "1" ? (
                              <span className="status-btn success-btn">
                                Hiện
                              </span>
                            ) : (
                              <span className="status-btn danger-btn">Ẩn</span>
                            )}
                          </td>
                          <td>
                            <div className="action">
                              <button className="text-warning" title="Chi tiết">
                                <i class="fas fa-info-circle"></i>
                              </button>
                              <Link
                                to={`${url}/${value._id}`}
                                className="text-primary"
                                title="Chỉnh sửa"
                              >
                                <i class="fas fa-pen-square"></i>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                    {/* end table row */}
                  </tbody>
                )}
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

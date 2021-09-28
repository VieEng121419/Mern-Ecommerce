import React from "react";

export default function CardProduct(props) {
  const { product } = props;
  return (
    <div className="product-item" key={product._id}>
      <div className="pi-pic">
        <img src={`assets/img/${product.avatar}`} alt="" />
        {product.priceDiscount && <div className="sale">Sale</div>}
        <div className="icon">
          <i className="icon_heart_alt"></i>
        </div>
        <ul>
          <li className="w-icon active">
            <a href="/#">
              <i className="icon_bag_alt"></i>
            </a>
          </li>
          <li className="quick-view">
            <a href="/#">+ Quick View</a>
          </li>
          <li className="w-icon">
            <a href="/#">
              <i className="fa fa-random"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="pi-text">
        <div className="catagory-name">Coat</div>
        <a href={`/product/${product._id}`}>
          <h5>{product.name}</h5>
        </a>
        <div className="product-price">
          $14.00
          <span>$35.00</span>
        </div>
      </div>
    </div>
  );
}

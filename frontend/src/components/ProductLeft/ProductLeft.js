import React from "react";
import { data } from "../../data";
import CardProduct from "../CardProduct/CardProduct";

export default function ProductLeft() {
  return (
    <div>
      <section className="women-banner spad">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div
                className="product-large set-bg"
                style={{ backgroundImage: "url(/assets/img/women-large.jpg)" }}
              >
                <h2>Women’s</h2>
                <a href="/#">Discover More</a>
              </div>
            </div>
            <div className="col-lg-8 offset-lg-1">
              <div className="filter-control">
                <ul>
                  <li>Clothings</li>
                  <li className="active">HandBag</li>
                  <li>Shoes</li>
                  <li>Accessories</li>
                </ul>
              </div>
              <div className="product-slider owl-carousel">
                {data.products.map((product) => (
                  <CardProduct
                    key={product._id}
                    product={product}
                  ></CardProduct>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

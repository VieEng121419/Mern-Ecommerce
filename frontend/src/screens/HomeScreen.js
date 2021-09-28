import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import DealWeek from "../components/DealWeek/DealWeek";
import ProductLeft from "../components/ProductLeft/ProductLeft";
import ProductRight from "../components/ProductRight/ProductRight";
import Banner from "../layouts/Banner/Banner";
import Blogs from "../layouts/Blogs/Blogs";
import Hero from "../layouts/Hero/Hero";
import Insta from "../layouts/Insta/Insta";
import { getRole } from "../redux/actions/userActions";

export default function HomeScreen() {
  // const state = useSelector((state) => state.state);
  const dispatch = useDispatch();
  const id =
    localStorage.getItem("userInfo") !== null
      ? JSON.parse(localStorage.getItem("userInfo"))._id
      : null;
  useEffect(() => {
    if (!window.location.hash) {
      window.location = window.location + "#home";
      window.location.reload();
    }
    if (id) dispatch(getRole(id));
  }, [id, dispatch]);
  return (
    <div>
      <Hero />
      <Banner />
      <ProductLeft />
      <DealWeek />
      <ProductRight />
      <Insta />
      <Blogs />
    </div>
  );
}

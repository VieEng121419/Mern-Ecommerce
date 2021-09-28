import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/userActions";

export default function LogoutScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);
  return <div></div>;
}

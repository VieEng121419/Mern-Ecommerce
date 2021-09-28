import React from "react";
import { GuardProvider, GuardedRoute } from "react-router-guards";
import { Switch } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import AdminDashboard from "../admin/screens/HomeAdmin";
import LoadingScreen from "../screens/LoadingScreen";
import ErrorScreen from "../screens/ErrorScreen";
import LogoutScreen from "../screens/LogoutScreen";

export default function Routers() {
  const requireAdmin = (to, from, next) => {
    const isLogged =
      JSON.parse(localStorage.getItem("userInfo")) !== null ? true : false;
    const isAdmin =
      JSON.parse(localStorage.getItem("userInfo")) !== null
        ? JSON.parse(localStorage.getItem("userInfo")).role === 1
          ? true
          : false
        : false;
    if (to.meta.auth) {
      if (isLogged) {
        if (isAdmin) {
          next();
        } else {
          next.redirect("/");
        }
      } else {
        next.redirect("/login");
      }
    } else {
      next();
    }
  };
  return (
    <GuardProvider
      guards={[requireAdmin]}
      loading={LoadingScreen}
      error={ErrorScreen}
    >
      <Switch>
        <GuardedRoute
          path="/admin"
          component={AdminDashboard}
          meta={{ auth: true }}
        ></GuardedRoute>
        <GuardedRoute
          path="/login"
          component={LoginScreen}
          meta={{ auth: true }}
        ></GuardedRoute>
        <GuardedRoute
          path="/register"
          component={RegisterScreen}
        ></GuardedRoute>
        <GuardedRoute path="/logout" component={LogoutScreen}></GuardedRoute>
        <GuardedRoute exact path="/" component={HomeScreen} />
        <GuardedRoute
          path="/product/:id"
          component={ProductDetailScreen}
          meta={{ auth: true }}
        />
      </Switch>
    </GuardProvider>
  );
}

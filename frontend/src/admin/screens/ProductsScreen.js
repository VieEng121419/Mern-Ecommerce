import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Form from "../components/form/formAdd/FormAddProduct";
import ListProducts from "../layouts/Products/ListProducts";

export default function ProductsAdmin() {
  let { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <ListProducts />
        </Route>
        <Route path={`${path}/add`}>
          <Form />
        </Route>
      </Switch>
    </div>
  );
}

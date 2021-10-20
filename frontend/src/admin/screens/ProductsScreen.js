import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import FormAdd from "../components/form/formAdd/FormAddProduct";
import FormEdit from "../components/form/formEdit/FormEditProduct";
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
          <FormAdd />
        </Route>
        <Route path={`${path}/:id`} component={FormEdit} />
      </Switch>
    </div>
  );
}

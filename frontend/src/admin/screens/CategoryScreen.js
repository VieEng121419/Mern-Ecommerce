import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import FormAddCate from "../components/form/formAdd/FormAddCate";
import ListCate from "../layouts/Categories/ListCate";

export default function CategoryScreen() {
  let { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <ListCate />
        </Route>
        <Route path={`${path}/add`}>
          <FormAddCate />
        </Route>
      </Switch>
    </div>
  );
}

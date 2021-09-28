import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Form from "../components/form";
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
          <Form />
        </Route>
      </Switch>
    </div>
  );
}

import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import ListUsers from "../layouts/Users/ListUsers";

export default function CategoryScreen() {
  let { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <ListUsers />
        </Route>
      </Switch>
    </div>
  );
}

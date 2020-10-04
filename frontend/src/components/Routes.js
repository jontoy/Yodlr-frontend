import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./Home";
import Signup from "./Signup";
import AdminPanel from "./AdminPanel";
import UserEditForm from "./UserEditForm";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/admin">
        <AdminPanel />
      </Route>
      <Route exact path="/admin/users/:id">
        <UserEditForm />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;

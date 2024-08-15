import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import jaminDanceAcademy from "./pages/jaminDanceAcademy";
import memberships from "./pages/memberships";
import meetTheTeam from "./pages/meetTheTeam";
import signUp from "./pages/SignUp";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Meet the Team" component={meetTheTeam} />
      <Route path="/Memberships" component={memberships} />
      <Route path="/Jamin dance academy" component={jaminDanceAcademy} />
      <Route path="/sign-up" component={signUp} />
    </Switch>
  );
}

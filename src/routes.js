import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import JaminDanceAcademy from "./pages/JaminDanceAcademy";
import Memberships from "./pages/memberships";
import MeetTheTeam from "./pages/meetTheTeam";
import SignUp from "./pages/SignUp";

export default function Routes() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/meet-the-team" component={MeetTheTeam} />
      <Route path="/memberships" component={Memberships} />
      <Route path="/jamin-dance-academy" component={JaminDanceAcademy} />
      <Route path="/sign-up" component={SignUp} />
    </Switch>
  );
}

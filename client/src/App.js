import React, { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import MeetTeam from "./pages/MeetTeam/MeetTeam";
import ContactList from "./pages/ContactList/ContactList";
import ContactPage from "./pages/ContactPage/ContactPage";
import CreateProfile from "./pages/CreateProfile/CreateProfile";
import NotFound from "./pages/NotFound/NotFound.js";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserIDContext from "./utils/UserIDContext";

function App() {

  return (

      <Router>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/meet-team" component={MeetTeam} />
        <Route exact path="/contact-page" component={ContactPage} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/sign-up" component={CreateProfile} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/network" component={ContactList} />
        <Route exact path="/user/profile" component={Profile} />
        <Route component={NotFound} />
        </Switch>
      </Router>

  );
}

export default App;

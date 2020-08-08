import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage'
import MeetTeam from './pages/MeetTeam/MeetTeam'
import ContactPage from './pages/ContactPage/ContactPage'
import CreateProfile from './pages/CreateProfile/CreateProfile'
// import Profile from './pages/Profile/Profile'
import Login from './pages/Login/Login'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route exact path = "/" component={HomePage} />
      <Route exact path = "/meet-team" component={MeetTeam} />
      <Route exact path = "/contact-page" component={ContactPage} />
      <Route exact path = "/sign-up" component={CreateProfile} />
      <Route exact path = "/login" component={Login} />
      {/* <Route exact path = "/user/profile/:id" component = {Profile} /> */}
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage'
<<<<<<< HEAD
import ContactPage from './pages/ContactPage/ContactPage'
import MeetTeam from './pages/MeetTeam/MeetTeam'

function App() {
  return (
    <div className="App">

     <HomePage />
     <ContactPage />
     <MeetTeam />
    </div>
=======
import MeetTeam from './pages/MeetTeam/MeetTeam'
import ContactPage from './pages/ContactPage/ContactPage'
import Signup from './pages/SignUp/Signup'
import Login from './pages/Login/Login'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route exact path = "/" component={HomePage} />
      <Route exact path = "/meet-team" component={MeetTeam} />
      <Route exact path = "/contact-page" component={ContactPage} />
      <Route exact path = "/sign-up" component={Signup} />
      <Route exact path = "/login" component={Login} />
    </Router>
>>>>>>> browser-router
  );
}

export default App;

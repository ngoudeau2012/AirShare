import React,{useState} from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage'
import MeetTeam from './pages/MeetTeam/MeetTeam'
import ContactList from './pages/ContactList/ContactList'
import ContactPage from './pages/ContactPage/ContactPage'
import CreateProfile from './pages/CreateProfile/CreateProfile'
import Profile from './pages/Profile/Profile'
import Login from './pages/Login/Login'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import UserIDContext from "./utils/UserIDContext"


function App() {

  const [userID, setUserIDState] = useState({
    userID: ""
  });

  function login(e){
    e.preventDefault()
    console.log("im clicked")
  }


  return (
    <UserIDContext.Provider value={userID}>
    <Router>
      <Route exact path = "/" component={HomePage} />
      <Route exact path = "/meet-team" component={MeetTeam} />
      <Route exact path = "/contact-page" component={ContactPage} />
      <Route exact path = "/Profile" component={Profile} />
      <Route exact path = "/sign-up" component={CreateProfile} />
      <Route exact path = "/login" render={props => <Login login={login}/>}/>
      <Route exact path = "/Network" component={ContactList} />

      {/* <Route path="/life" render={props => <Life sayHello = {this.sayHello} />} /> */}
      {/* <Route exact path = "/user/profile/:id" component = {Profile} /> */}
    </Router>
    </UserIDContext.Provider>
  );
}

export default App;

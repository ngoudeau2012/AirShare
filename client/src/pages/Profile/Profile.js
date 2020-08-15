import React, {useState, useEffect} from "react";
import "./Profile.css";
import Navbar from "../../components/Navbar/Navbar"
import ECard from "../../components/ECard/ECard";
import ProfileCard from "../../components/ProfileCard"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Footer from "../../components/Footer/Footer";
import "../../App.css";
import API from "../../utils/API";

function UserProfile() {
    
    const isBackgroundDark = true;

    const [connectionsListState, setConnectionsListState] = useState([])

    useEffect (() => {
      let userID = sessionStorage.getItem("id")
      API.getAllUserContacts(userID).then(res => {
        console.log(res)
        setConnectionsListState(res.data)
      }).catch(err => {
        console.log("Get users error:", err)
      })
    },[])

    const [userState, setUserState] = useState({})
    useEffect (() => {
      let userID = sessionStorage.getItem("id")
      let obj = {}
      API.getAllUserInfo(userID).then(res => {
        console.log(res)
        res.data.information.map(item => {
          for (let [key, value] of Object.entries(item)) {
            obj[key] = value;
          }
        })
        setUserState(obj)
      }).catch(err => {
        console.log("Get users error:", err)
      })
    },[])
    
    return (

        <div
        className= "App"
          style={{
            backgroundColor: isBackgroundDark ? '#3282b8' : 'light',
          }}
        >
        <Navbar/>

        <div style={{color: "white"}}>
          <br></br>
          <h1 style={{border: "10px", borderStyle: "groove", borderColor: "white"}}>Who's In Your Network...</h1>
          <br></br>
        </div>
 
        <Container>
        <Row>
          <Col lg={5}>
          <ProfileCard 
          profile={userState}
          />
          </Col>
          <Col lg={7}>
          <Row>
            {/* <ECard 
            profile = {connectionsListState}
            /> */}
          </Row>
          </Col>
        </Row>
        </Container>
      
        <Footer/>
        </div>
    );
}


export default UserProfile;

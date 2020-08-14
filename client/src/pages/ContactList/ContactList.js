import React, {useEffect, useState} from "react";
import "./ContactList.css";
import Navbar from "../../components/Navbar/Navbar"
import ECard from "../../components/ECard/ECard";
import ContactList from "./ContactList.json";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Footer from "../../components/Footer/Footer";
import "../../App.css"
import API from "../../utils/API";

function Contacts() {
    
    const isBackgroundDark = true;
    
    // contact list state to pull down all users

    const [userListState, setUserListState] = useState([])
    useEffect (() => {
      let userID = sessionStorage.getItem("id")
      API.getAllUsers().then(res => {
        console.log(res)
        setUserListState(res.data)
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
          <Col xs={12} lg={3}>
            <ECard
            />
          </Col>
          </Row>
      </Container>
      
        <Footer/>
        </div>

    );
}


export default Contacts;
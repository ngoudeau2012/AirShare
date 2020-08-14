import React,{useState} from "react";
import Container from "../../components/Container"
import LoginForm from "../../components/LoginForm"
import "./Login.css";
import HomeNav from "../../components/HomeNav/HomeNav";
import Footer from "../../components/Footer/Footer";
import { PromiseProvider } from "mongoose";


function Login(){

  const isBackgroundDark = true;

    return (

        <div className="App" style={{
          backgroundColor: isBackgroundDark ? "#3282b8" : "light",
        }}>

          <HomeNav/>

          <div style={{color: "white"}}>
          <br></br>
          <h1 style={{border: "10px", borderStyle: "groove", borderColor: "white"}}>Let's get you logged in.</h1>
          <br></br>
        </div>

          <Container>
            <LoginForm 
            />
          </Container>

          <Footer/>
        </div>
      );
}

export default Login
import React,{useState} from "react";
import Container from "../../components/Container"
import LoginForm from "../../components/LoginForm"
import { PromiseProvider } from "mongoose";


function Login(props){
    return (
        <div className="App">
          <Container>
            <LoginForm 
            login={props.login}
            />
          </Container>
        </div>
      );
}

export default Login
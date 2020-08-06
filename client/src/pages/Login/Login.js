import React from "react";
import Container from "../../components/Container"
import LoginForm from "../../components/LoginForm"

function Login(){
    return (
        <div className="App">
          <Container>
            <LoginForm />
          </Container>
        </div>
      );
}

export default Login
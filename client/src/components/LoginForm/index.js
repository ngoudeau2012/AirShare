import React, {useState} from "react";
import API from "../../utils/API"

function LoginForm() {

    const [loginState, setLoginState] = useState({
      email:"",
      password:""
    })  

    const handleOnChange = e =>{
      setLoginState({...loginState, [e.target.name]: e.target.value})
  }
    const handleSubmit = e => {
        e.preventDefault();
        switch(e.target.name){
          case "login":
            console.log(loginState)
            API.loginUser({ email : loginState.email , password: loginState.password }).then(res =>{
              console.log(res);
              sessionStorage.setItem("id",res.data._id)
              window.location.href = "/network"
            }).catch(err => {
              console.log("Login Error", err)
            })
            return
          case "signUp":
            console.log("Sign Up Clicked :)")
            API.newUser({ email : loginState.email , password: loginState.password }).then(res => {
              console.log(res)
              sessionStorage.setItem("id",res.data._id)
              window.location.href = "/sign-up"
            }).catch(err => {
              console.log("Sign-up Error", err)
            })
        }
      };

  return (

    <div className="animate__animated animate__fadeInUp">
    <div className="row justify-content-md-center" style={{color: "white"}}>
      <form className="col-lg-6" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="jane.joe@example.com"
            aria-describedby="emailHelp"
            onChange={handleOnChange}
          />
          <small id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handleOnChange}
          />
        </div>
        <div className="row">
        <button type="submit" name="login" className="btn btn-primary col-3 mx-2" onClick={handleSubmit}>
          Login
        </button>
        <button type="submit"  name= "signUp" className="btn btn-primary col-3 mx-2" onClick={handleSubmit}>
          Sign Up
        </button>
        </div>
        <br></br>
      </form>
    </div>
    </div>
  );
}

export default LoginForm;
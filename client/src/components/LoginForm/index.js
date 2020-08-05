import React, {useState} from "react";

function LoginForm() {

    const [emailState, setEmailState] = useState("") 
    const [passwordState, setPasswordState] = useState("") 

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Email is " + emailState);
        console.log("Password is " + passwordState);
      };

  return (
    <div className="row justify-content-md-center">
      <form className="col-lg-6" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="jane.joe@example.com"
            aria-describedby="emailHelp"
            onChange={e => setEmailState(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={e => setPasswordState(e.target.value)}
          />
        </div>
        <div className="row">
        <button type="submit" className="btn btn-primary col-3 mx-2">
          Login
        </button>
        <button type="submit" className="btn btn-primary col-3 mx-2">
          Sign Up
        </button>
        </div>
        
      </form>
    </div>
  );
}

export default LoginForm;
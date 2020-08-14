import React, { useState, useEffect } from "react";
import CreateProfileForm from "../../components/CreateProfileForm";
import ProfileCard from "../../components/ProfileCard";
import Navbar from "../../components/Navbar/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import { set } from "mongoose";
import "./createProfile.css";
import API from "../../utils/API";

function CreateProfile() {
  const [formState, setFormState] = useState({
    name: "",
    linkedIn: "",
    photoURL: "",
    photoUpload: "",
    phoneNumber: "",
    company: "",
    position: "",
    bio: "",
  });

  useEffect(() => {
    let _id = sessionStorage.getItem("id");
    API.getAllUserInfo(_id)
      .then((res) => {
        console.log(res);
        res.data.information.map((info) => {
          for (let [key, value] of Object.entries(info)) {
            console.log(key);
            console.log(value);
            setFormState({ ...formState, key: value });
          }
        });
      })
      .then(console.log(formState));
  }, []);

  const saveUserProfile = (e) => {
    e.preventDefault();
    let _id = sessionStorage.getItem("id");
    API.updateCard(_id, formState)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const handleOnChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <Container className="container">
        <p className="createProfileTitle">Creat Your User Profile</p>
        <hr />
        <Row className="justify-content-md-center">
          <Col lg={7}>
            <CreateProfileForm
              onChange={handleOnChange}
              submitProfile={saveUserProfile}
            />
          </Col>
          <Col lg={5}>
            <ProfileCard profile={formState} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CreateProfile;

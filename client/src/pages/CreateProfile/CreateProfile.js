import React, {useState, useEffect} from "react";
import CreateProfileForm from "../../components/CreateProfileForm";
import ProfileCard from "../../components/ProfileCard";
import Navbar from "../../components/Navbar/Navbar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col"
import { set } from "mongoose";
import './createProfile.css'
import API from "../../utils/API"

function CreateProfile(){

    const [formState, setFormState] = useState({
        firstName: "",
        middleInitial: "",
        lastName: "",
        linkedIn: "",
        photoUrl:"",
        pNumber: "",
        company: "",
        position:"",
        bio: ""
    })

    useEffect(()=>{
        API.getAllUserInfo()
    })

    const saveUserProfile = (e, userData) => {
        e.preventDefault();
        let _id = sessionStorage.getItem("id")
        API.updateCard(_id,userData).then((res)=> {
            console.log(res)
        }).catch((err) => console.log(err));
    }
    const handleOnChange = e =>{
        setFormState({...formState, [e.target.name]: e.target.value})
     
    }

    const handleSubmit = e => {
        e.preventDefault();
        
      };

    return(
        <div>
        <Navbar />
        <Container className="container">
           
            <p className="createProfileTitle">Creat Your User Profile</p>
            <hr />
            <Row className="justify-content-md-center">
                <Col lg={7}>
                <CreateProfileForm 
                onChange= {handleOnChange}
                submitProfile ={saveUserProfile}
                />
                
                </Col>
                <Col lg={5}>
                    <ProfileCard 
                    profile={formState}
                    />
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default CreateProfile
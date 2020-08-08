import React, {useState} from "react";
import CreateProfileForm from "../../components/CreateProfileForm";
import ProfileCard from "../../components/ProfileCard";
import Navbar from "../../components/Navbar/Navbar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col"
import { set } from "mongoose";
import './createProfile.css'

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
        
    })

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
                submitProfile ={handleSubmit}
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
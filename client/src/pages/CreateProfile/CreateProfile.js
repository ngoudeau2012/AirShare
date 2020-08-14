import React, {useState, useEffect} from "react";
import CreateProfileForm from "../../components/CreateProfileForm";
import ProfileCard from "../../components/ProfileCard";
import Navbar from "../../components/Navbar/Navbar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col"
import Footer from "../../components/Footer/Footer";
import { set } from "mongoose";
import './createProfile.css'
import API from "../../utils/API"

function CreateProfile(){
    const isBackgroundDark = true;

    const [formState, setFormState] = useState({
        name: "",
        linkedIn: "",
        photoURL:"",
        phoneNumber: "",
        company: "",
        position:"",
        bio: "",
        uploadPhoto: ""
    })

    useEffect(()=>{
        let _id = sessionStorage.getItem("id")
        API.getAllUserInfo(_id).then(res => {
            console.log(res)
            const userInfo = {}
            res.data.information.map(info => {
                for(let [key, value] of Object.entries(info)){
                    console.log(key)
                    console.log(value)
                    userInfo[key] = value 
                }
            })
            setFormState(userInfo)
        })
    },[])

    const saveUserProfile = (e) => {
        e.preventDefault();
        let _id = sessionStorage.getItem("id")
        API.updateCard(_id,formState).then((res)=> {
            console.log(res)
        }).catch((err) => console.log(err));
    }
    const handleOnChange = e =>{
        setFormState({...formState, [e.target.name]: e.target.value})
        console.log(formState)
     
    }
    const handleUpload = e => {
        console.log(e.target.name)
        console.log(e.target.files[0].name)
        setFormState({...formState, [e.target.name]: URL.createObjectURL(e.target.files[0])})
        
    }
    console.log(formState)
    return(

        <div className= "App"
        style={{
          backgroundColor: isBackgroundDark ? '#3282b8' : 'light',
        }}>

        <Navbar />
        <Container>
        <h1 style={{border: "10px", borderStyle: "groove", borderColor: "white", color: "white"}}>Create Your User Profile</h1>
            <hr />
            <Row className="justify-content-md-center">
                <Col lg={7}>
                <CreateProfileForm 
                onChange= {handleOnChange}
                submitProfile ={saveUserProfile}
                handleUpload = {handleUpload}
                profile={formState}
                />
                
                </Col>
                <Col lg={5}>
                    <ProfileCard 
                    profile={formState}
                    />
                </Col>
            </Row>
        </Container>
        <br></br>
        <Footer />
        </div>
    )
}

export default CreateProfile
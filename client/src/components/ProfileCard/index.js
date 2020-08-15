import React from "react";
import {
  Card,
  CardImg,
  CardColumns,
  CardGroup,
  Container,
  Col,
  Image,
  Row,
  Button,
} from "react-bootstrap";
import "./ProfileCard.css"

function ProfileCard({profile}) {

    console.log(profile)

  return (
    <Card>
      <Image
        className="profileImage"
        src={profile.uploadPhoto || "https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png"} 
      />
      <Card.Body>
          <Card.Title className="userName">{profile.name}</Card.Title>
          <p className="careerInfo">{profile.position +" at "+profile.company}</p>
        <Card.Text>
          {profile.bio}
        </Card.Text>
        <Card.Link href={profile.linkedIn}><i className="fab fa-linkedin"></i> LinkedIn</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;

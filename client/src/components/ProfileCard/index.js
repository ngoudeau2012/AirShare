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

    

  return (
    <Card>
      <Image
        className="profileImage"
        src={profile.photoUrl} 
      />
      <Card.Body>
          <Card.Title className="userName">{profile.name}</Card.Title>
          <p className="careerInfo">{profile.position +" at "+profile.company}</p>
        <Card.Text>
          {profile.bio}
        </Card.Text>
        <Card.Link href={profile.linkedIn}><i class="fab fa-linkedin"></i> LinkedIn</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;

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
          <Row>
          <Card.Title>{profile.firstName + " " + profile.middleInitial + " " + profile.lastName}</Card.Title>
          <i class="fab fa-linkedin"></i>
          </Row>
          <p className="careerInfo">{profile.position +" at "+profile.company}</p>
        <Card.Text>
          {profile.bio}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;

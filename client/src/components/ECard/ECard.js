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
import "./ECard.css";

function ECard({ person }) {
  let obj = {};
  person.map((item) => {
    for (let [key, value] of Object.entries(item)) {
      obj[key] = value;
    }
  });
  return (
    <Card>
      <Image className="profileImage" src={obj.photoURL} />
      <Card.Body>
        <Card.Title className="userName">{obj.name}</Card.Title>
        <p className="careerInfo">
          {obj.position} at {obj.company}
        </p>
        <Card.Link>
          <a href={obj.linkedIn}>
            <i class="fab fa-linkedin"></i>
          </a>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ECard;

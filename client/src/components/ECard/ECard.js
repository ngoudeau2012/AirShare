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

function ECard ({profile}) {
  return (
  //   <Card >
  //   <Card.Img variant="top" src={props.ecardimage} />
  //   <Card.Body>
  //     <Card.Title>{props.ecardtitle}</Card.Title>
  //     <Card.Text>
  //     {props.ecarddescription}
  //     </Card.Text>
  //     <Button variant="primary">{props.ecardlinkname}</Button>
  //   </Card.Body>
  // </Card>
  <Card>
  <Image
    className="profileImage"
    
  />
  <Card.Body>
      <Card.Title className="userName">Nicholas J Goudeau</Card.Title>
      <p className="careerInfo">Facilities Guru at Amazon</p>
    <Card.Link ><i class="fab fa-linkedin"></i> LinkedIn</Card.Link>
  </Card.Body>
</Card>
  );
}

export default ECard
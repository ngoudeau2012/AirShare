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

function ECard (props) {
  return (
    <Card style={{ width: '100%', height: '80%'}}>
    <Card.Img variant="top" src={props.ecardimage} />
    <Card.Body>
      <Card.Title>{props.ecardtitle}</Card.Title>
      <Card.Text>
      {props.ecarddescription}
      </Card.Text>
      <Button variant="primary">{props.ecardlinkname}</Button>
    </Card.Body>
  </Card>
  );
}

export default ECard
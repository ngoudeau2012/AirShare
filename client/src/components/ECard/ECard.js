import React, { useState } from "react";
import {
  Card,
  Modal,
  Button,
  CardImg,
  CardColumns,
  CardGroup,
  Container,
  Col,
  Image,
  Row,
} from "react-bootstrap";
import "./ECard.css";
import QR from "../QRCode/QRCode";

function ECard({ person }) {
  let obj = {};
  person.map((item) => {
    for (let [key, value] of Object.entries(item)) {
      obj[key] = value;
    }
  });

  const [show, setShow] = useState(false);
  const [QRState, useQRState] = useState([]);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (e) => {
    setShow(true);
    useQRState(e.target.id);
    console.log(e.target.id);
  };

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
            <i className="fab fa-linkedin"></i>
          </a>
        </Card.Link>
        {/* QR Code */}
        {/* Open */}
        <Button variant="primary" id={obj.id} onClick={handleShow}>
          Launch demo modal
        </Button>
        {/* Close */}
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Scan to Add!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <QR userID={QRState} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>{" "}
      </Card.Body>
    </Card>
  );
}

export default ECard;

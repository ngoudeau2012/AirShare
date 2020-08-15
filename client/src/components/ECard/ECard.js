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
import API from "../../utils/API"

function ECard({ person }) {
  let obj = {};
  person.map((item) => {
    for (let [key, value] of Object.entries(item)) {
      obj[key] = value;
    }
  });

  // const [followClicked,setFollowClickedState]= useState ("animate__flip")
  const handleFollow = (e => {
    let userID = sessionStorage.getItem("id")
    let followID = e.target.id

    API.addContact(userID, followID).then(res =>{
      console.log(res);
      // setFollowClickedState({animate__flip: "true"})
    })
    .catch(err => {
      console.log("Error adding contact")
    })
  })
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
    <Col lg={4} sm={12}>
    <Card className="card animate__animated animate__fadeInDown eCard">
      <Image className="eCardImage" src={obj.photoURL} />
      <Card.Body>
        <Card.Title className="userName">{obj.name}</Card.Title>
        <p className="careerInfo">
          {obj.position} at {obj.company}
        </p>
        <Row>
          <Col>
          <Card.Link>
          <a href={obj.linkedIn} className>
            <i className="fab fa-linkedin"></i>
          </a>
        </Card.Link>
        <Card.Link variant="primary" id={obj.id} onClick={handleShow}>
        <i class="fas fa-share-alt-square"></i>
        </Card.Link>
        <Card.Link variant="primary" id={obj.id} onClick={handleFollow} className={"animate_animated "}>
        <i class="fas fa-plus-square"></i>
        </Card.Link>
          </Col>
        
        </Row>
        
        
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
    </Col>
    
  );
}

export default ECard;

import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import FormGroup from "react-bootstrap/esm/FormGroup";
import { FormLabel, Button } from "react-bootstrap";
import "./form.css";

function CreateProfileForm(props) {
  return (
    <Form enctype="multipart/form-data">
      <Row className="formRow">
        <Col>
          <p className="formLabel">Profile Photo Url</p>
          <Form.Control
            placeholder="Profile Photo"
            name="photoURL"
            onChange={props.onChange}
          />
        </Col>
        <Col>
          <p className="formLabel" name="photoUpload" onChange={props.onChange}>
            Upload photo
          </p>
          <Form.File />
        </Col>
      </Row>
      <Row className="formRow">
        <Col>
          <p className="formLabel">Full Name</p>
          <Form.Control
            placeholder="Michael"
            name="name"
            onChange={props.onChange}
          />
        </Col>
      </Row>
      <Row className="formRow">
        <Col>
          <p className="formLabel">LinkedIn Profile Url</p>
          <Form.Control
            placeholder="i.e. linkedIn.com/michael_scott"
            name="linkedIn"
            onChange={props.onChange}
          />
        </Col>
      </Row>
      <Row className="formRow">
        <Col>
          <p className="formLabel">Phone Number</p>
          <Form.Control
            placeholder="202-555-0149"
            name="pNumber"
            onChange={props.onChange}
          />
        </Col>
      </Row>
      <Row className="formRow">
        <Col>
          <p className="formLabel">Position</p>
          <Form.Control
            placeholder="Regional Manager"
            name="position"
            onChange={props.onChange}
          />
        </Col>
        <Col>
          <p className="formLabel">Company</p>
          <Form.Control
            placeholder="Dunder Mifflin"
            name="company"
            onChange={props.onChange}
          />
        </Col>
      </Row>

      <Row className="formRow">
        <Col>
          <p className="formLabel">Personal Bio</p>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="... tell us a little about yourself!"
            name="bio"
            onChange={props.onChange}
          />
        </Col>
      </Row>
      <Button type="submit" onClick={props.submitProfile}>
        Save Profile Information
      </Button>
    </Form>
  );
}

export default CreateProfileForm;

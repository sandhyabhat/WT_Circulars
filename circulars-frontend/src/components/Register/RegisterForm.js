import React from "react";
import "./RegisterForm.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function RegisterForm() {
  return (
    <div className="register">
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control size="md" type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control size="md" type="text" placeholder="ABC" />
        </Form.Group>

        <Button variant="primary" type="submit" size="lg">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default RegisterForm;

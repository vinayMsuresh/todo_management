import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "./form.css";
export default function TodoForm() {
  return (
    <Container fluid>
      <div>
        <Form className="form">
          <Form.Group as={Row} className="mb-3 mt-5">
            <Form.Label column sm="2"></Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="Enter title"
                onChange={(e) => {}}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2"></Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="Enter description"
                onChange={(e) => {}}
              />
            </Col>
          </Form.Group>
          <Button variant="success" onClick={() => {}}>
            Save
          </Button>
        </Form>
      </div>
    </Container>
  );
}

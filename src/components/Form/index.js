import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "./form.css";
export default function TodoForm({
  title,
  description,
  handleTitle,
  handleDesc,
  errors,
  setTitle,
  setDescription,
  submitForm,
  edit,
  cancelForm,
}) {
  return (
    <Container fluid>
      <div>
        <Form className="form">
          <Form.Group as={Row} className="mb-3 mt-5">
            <Form.Label column sm="2"></Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                value={title}
                placeholder="Enter title"
                onChange={(e) => setTitle(e.target.value)}
                onBlur={(e) => handleTitle(e)}
              />
              <span className="text-danger">
                {errors?.title && errors?.title}
              </span>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2"></Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                value={description}
                placeholder="Enter description"
                onChange={(e) => setDescription(e.target.value)}
                onBlur={(e) => handleDesc(e)}
              />
              <span className="text-danger">
                {errors?.description && errors?.description}
              </span>
            </Col>
          </Form.Group>
          {edit && (
            <Button variant="danger" onClick={cancelForm} className="mx-3">
              Cancel
            </Button>
          )}
          <Button variant="success" onClick={submitForm}>
            Save
          </Button>
        </Form>
      </div>
    </Container>
  );
}

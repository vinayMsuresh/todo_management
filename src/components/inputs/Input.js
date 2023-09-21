import React from "react";
import { Col, Form, Row } from "react-bootstrap";

export default function Input({ value, error, onChange, placeholder }) {
  return (
    <Form.Group as={Row} className="mb-3 ">
      <Form.Label column sm="1"></Form.Label>
      <Col sm="10">
        <Form.Control
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
        <span className="text-danger">{error}</span>
      </Col>
    </Form.Group>
  );
}

import React from "react";
import { Col, Form, Row } from "react-bootstrap";

export default function Input({
  value,
  error,
  handleChange,
  placeholder,
  ...props
}) {
  return (
    <Form.Group as={Row} className="mb-3 ">
      <Form.Label column sm="1"></Form.Label>
      <Col sm="10">
        <Form.Control
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          {...props}
        />
        <span className="text-danger">{error}</span>
      </Col>
    </Form.Group>
  );
}

import React from "react";
import { Col, Form } from "react-bootstrap";

export default function Input({ value, error, onChange, placeholder }) {
  return (
    <>
      <Form.Label column sm="2"></Form.Label>
      <Col sm="6">
        <Form.Control
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
        <span className="text-danger">{error}</span>
      </Col>
    </>
  );
}

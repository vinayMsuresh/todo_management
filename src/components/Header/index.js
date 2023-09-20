import React from "react";
import { Container } from "react-bootstrap";

export default function Header() {
  return (
    <div className="bg-secondary text-white p-1">
      <Container>
        <h2>Todo Management</h2>
      </Container>
    </div>
  );
}

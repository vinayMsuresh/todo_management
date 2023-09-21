import React from "react";
import { Container } from "react-bootstrap";
import Btn from "../inputs/Btn";

export default function Header({ setOperation }) {
  return (
    <div className="bg-secondary text-white p-2">
      <Container className="d-flex justify-content-between">
        <h2>Todo Management</h2>
        <Btn
          variant="warning"
          name="Add todo"
          onClick={() => setOperation(true)}
        />
      </Container>
    </div>
  );
}

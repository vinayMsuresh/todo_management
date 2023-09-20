import React from "react";
import { Button } from "react-bootstrap";

export default function Btn({ variant, onClick, name, ...props }) {
  return (
    <Button variant={variant} onClick={onClick} {...props}>
      {name}
    </Button>
  );
}

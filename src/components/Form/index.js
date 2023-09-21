import React from "react";
import { Form, Row } from "react-bootstrap";
import "./form.css";
import Input from "../inputs/Input";
export default function TodoForm({ title, description, errors, handleChange }) {
  return (
    <Form className="mt-3">
      <Input
        value={title}
        handleChange={handleChange}
        error={errors?.title && errors?.title}
        placeholder="Enter title"
        name="title"
      />

      <Input
        value={description}
        handleChange={handleChange}
        error={errors?.description && errors?.description}
        placeholder="Enter description"
        name="description"
      />
    </Form>
  );
}

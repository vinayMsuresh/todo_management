import React from "react";
import { Form, Row } from "react-bootstrap";
import "./form.css";
import Input from "../inputs/Input";
export default function TodoForm({
  title,
  description,
  errors,
  setTitle,
  setDescription,
}) {
  return (
    <Form className="mt-3">
      <Input
        value={title}
        onChange={setTitle}
        error={errors?.title && errors?.title}
        placeholder="Enter title"
      />

      <Input
        value={description}
        onChange={setDescription}
        error={errors?.description && errors?.description}
        placeholder="Enter description"
      />
    </Form>
  );
}

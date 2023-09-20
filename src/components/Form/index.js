import React from "react";
import { Container, Form, Row } from "react-bootstrap";
import "./form.css";
import Input from "../inputs/Input";
import Btn from "../inputs/Btn";
export default function TodoForm({
  title,
  description,
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
        <Form className="form" onSubmit={submitForm}>
          <Form.Group as={Row} className="mb-3 mt-5">
            <Input
              value={title}
              onChange={setTitle}
              error={errors?.title && errors?.title}
              placeholder="Enter title"
            />
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Input
              value={description}
              onChange={setDescription}
              error={errors?.description && errors?.description}
              placeholder="Enter description"
            />
          </Form.Group>
          {edit && (
            <Btn
              variant="danger"
              onClick={cancelForm}
              className="mx-3"
              name="Cancel"
            />
          )}
          <Btn type="submit" variant="success" name="Save"></Btn>
        </Form>
      </div>
    </Container>
  );
}

import React, { useState } from "react";
import Header from "../Header";
import TodoForm from "../Form";
import TodoListTable from "../Table";
import { v4 as uuid } from "uuid";
import { validate } from "../utils/utils";
import { Modal } from "react-bootstrap";
import Btn from "../inputs/Btn";
import { ConfirmToast } from "react-confirm-toast";

export default function Todo() {
  const initialErrors = {
    title: null,
    description: null,
  };
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [edit, setEdit] = useState(false);
  const [operation, setOperation] = useState(false);
  const [errors, setErrors] = useState(initialErrors);

  const setEditMode = (value) => {
    setEdit(value);
    setTitle(value?.title);
    setDescription(value?.description);
    setOperation(true);
  };
  const cancelForm = () => {
    setEdit(false);
    setTitle("");
    setDescription("");
    setErrors(initialErrors);
    setOperation(false);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const todoObj = {
      id: uuid(),
      title,
      description,
    };
    const ers = validate(todoObj);
    setErrors(ers);
    const error = Object.values(ers).filter((error) => error !== null);
    if (error.length) {
      return;
    }

    setTitle("");
    setDescription("");
    if (edit) {
      let todos = todoList;
      todos = todos.map((todo) => {
        if (todo?.id === edit?.id) {
          return todoObj;
        } else {
          return todo;
        }
      });
      setTodoList(todos);
      setEdit(false);
      alert("Todo updated successfully");
    } else {
      setTodoList([...todoList, todoObj]);
      alert("Todo created successfully");
    }
    setOperation(false);
  };
  const deleteTodo = (value) => {
    let todos = todoList;
    todos = todoList.filter((todo) => todo.id !== value.id);
    setTodoList(todos);
  };
  const onClose = () => {
    setEdit(false);
    setTitle(null);
    setDescription(null);
    setErrors(initialErrors);
    setOperation(false);
  };
  return (
    <div>
      <Header setOperation={setOperation} />
      <Modal show={operation} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{edit ? "Edit Todo" : "Add Todo"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TodoForm
            title={title}
            description={description}
            setTitle={setTitle}
            setDescription={setDescription}
            errors={errors}
            edit={edit}
          />
        </Modal.Body>
        <Modal.Footer>
          {edit && (
            <Btn
              variant="danger"
              onClick={cancelForm}
              className="mx-3"
              name="Cancel"
            />
          )}
          <Btn
            type="submit"
            variant="success"
            name="Save"
            onClick={submitForm}
          ></Btn>
        </Modal.Footer>
      </Modal>

      <TodoListTable
        list={todoList}
        setedit={setEditMode}
        edit={edit}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

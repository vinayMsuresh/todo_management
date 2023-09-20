import React, { useState } from "react";
import Header from "../Header";
import TodoForm from "../Form";
import TodoListTable from "../Table";
import { v4 as uuid } from "uuid";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [edit, setEdit] = useState(false);
  const [errors, setErrors] = useState({
    title: null,
    description: null,
  });

  const handleTitle = (e) => {
    const { value } = e.target;
    if (!value || value.length === 0) {
      const errMsg = "Please enter a todo title";
      setErrors({ ...errors, title: errMsg });
    } else if (value.length > 50 || value.length < 3) {
      const errMsg = "Please enter a todo title in 3-50 characters length";
      setErrors({ ...errors, title: errMsg });
    } else {
      setErrors({ ...errors, title: null });
    }
  };
  const handleDesc = (e) => {
    const { value } = e.target;
    if (value && value.length < 3) {
      const errMsg =
        "Please enter a todo description in minimum 3 characters length";
      setErrors({ ...errors, description: errMsg });
    } else {
      setErrors({ ...errors, description: null });
    }
  };

  const setEditMode = (value) => {
    setEdit(value);
    setTitle(value?.title);
    setDescription(value?.description);
  };
  const cancelForm = () => {
    setEdit(false);
    setTitle("");
    setDescription("");
  };

  const submitForm = () => {
    const error = Object.values(errors).filter((error) => error !== null);
    if (error.length) {
      alert("Please ensure all the fields are filled properly");
      return;
    }
    const todoObj = {
      id: uuid(),
      title,
      description,
    };
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
  };
  const deleteTodo = (value) => {
    if (
      window.confirm(
        "Are you sure you want to save this thing into the database?"
      )
    ) {
      let todos = todoList;
      todos = todoList.filter((todo) => todo.id !== value.id);
      setTodoList(todos);
    } else {
      // Do nothing!
    }
  };
  return (
    <div>
      <Header />
      <TodoForm
        title={title}
        description={description}
        handleTitle={handleTitle}
        handleDesc={handleDesc}
        setTitle={setTitle}
        setDescription={setDescription}
        errors={errors}
        submitForm={submitForm}
        edit={edit}
        cancelForm={cancelForm}
      />
      <TodoListTable
        list={todoList}
        setedit={setEditMode}
        edit={edit}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

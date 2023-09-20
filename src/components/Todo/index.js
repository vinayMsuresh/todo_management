import React, { useState } from "react";
import Header from "../Header";
import TodoForm from "../Form";
import TodoListTable from "../Table";
import { v4 as uuid } from "uuid";
import { validate } from "../utils/utils";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [edit, setEdit] = useState(false);
  const [errors, setErrors] = useState({
    title: null,
    description: null,
  });

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
  };
  const deleteTodo = (value) => {
    if (window.confirm("Are you sure you want to delete this todo")) {
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

import React, { useState } from "react";
import Header from "../Header";
import TodoForm from "../Form";
import TodoListTable from "../Table";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div>
      <Header />
      <TodoForm />
      <TodoListTable list={todoList} />
    </div>
  );
}

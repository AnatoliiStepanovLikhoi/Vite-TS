// import { useState } from "react";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/ToDoList";

const App: React.FC = () => {
  const todos = [{ id: "1", title: "text" }];
  return (
    <>
      <h1>Vite + Typescript</h1>
      <TodoList todos={todos} />
      <AddTodo />
    </>
  );
};

export default App;

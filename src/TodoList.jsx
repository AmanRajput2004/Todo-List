import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample-Task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");
  function addNewTask() {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }]; //isdone : false
    });
    setNewTodo("");
  }

  function updateTodoValue(events) {
    setNewTodo(events.target.value);
  }

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };

  let markAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return { ...todo, isDone: true };
      })
    );
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isDone: true };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="write a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <hr />
      <br />
      <h1>Tasks todo</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span
                style={
                  todo.isDone ? { textDecorationLine: "line-through" } : {}
                }
              >
                {todo.task}
              </span>
              &nbsp;&nbsp;&nbsp;
              <button onClick={() => deleteTodo(todo.id)}>Delete Task</button>
              &nbsp;&nbsp;
              <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
              <br />
              <br />
            </li>
          );
        })}
      </ul>
      <br />
      <button onClick={markAllDone}>Mark All as Done</button>
    </div>
  );
}

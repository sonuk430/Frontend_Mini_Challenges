import { useState } from "react";
import styles from "./Todo.module.css";
const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  return <div className={styles["todo-container"]}></div>;
};

export default Todo;

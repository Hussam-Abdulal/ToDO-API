import { useState } from "react";

export default function Form({ onAddTask }) {
  const [newTask, setNewTask] = useState("");

  const submitHandeler = async (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    onAddTask({
      id: Date.now(),
      task: newTask.trim(),
      done: false,
    });
    setNewTask("");
  };

  return (
    <>
      <form className="add-form" onSubmit={submitHandeler}>

        <input
          type="text"
          placeholder="Add a new Todo"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

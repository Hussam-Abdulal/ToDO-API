import { useState } from "react";
import TaskItem from "./TaskItem/TaskItem";
import useTasks from "../hooks/useTasks";

const TaskList = ({ tasks, onDeleteTask, onToggleTaskDone, onClearTasks }) => {
 
  const [sortBy] = useState("input");
  const { clearAllTasks } = useTasks();
  let sortedTasks;

  if (sortBy === "input") sortedTasks = tasks;

  if (sortBy === "done")
    sortedTasks = tasks.slice().sort((a, b) => Number(a.done) - Number(b.done));

  const tasksList = sortedTasks?.map((task) => (
    <TaskItem
      key={task.id}
      id={task.id}
      taskName={task.task}
      done={task.done}
      onDeleteTask={onDeleteTask}
      onToggleTask={onToggleTaskDone}
    />
  ));

  const clearAllTasksHandler = () => {
    onClearTasks({ clearAllTasks });
  };

  return (
    <>
      <section>
          <ul>{tasksList}</ul>
          <div className="actions">
            <button onClick={clearAllTasksHandler}>Clear All</button>
          </div>
        
      </section>
    </>
  );
};

export default TaskList;

const TaskItem = ({ id, taskName, done, onToggleTask, onDeleteTask }) => {
  console.log("TaskItem props", { onToggleTask, onDeleteTask });

  const deleteTaskHandeler = () => {
    onDeleteTask(id);
  };

  const toggleTaskHandeler = () => {
    onToggleTask(id);
  };
  return (
    <>
      <li>
        <div>
          <input type="checkbox" checked={done} onChange={toggleTaskHandeler} />
          <span style={done ? { textDecoration: "line-through" } : null}>
            {taskName}
          </span>
          <button onClick={deleteTaskHandeler}>❌</button>
        </div>
        <div></div>
      </li>
    </>
  );
};

export default TaskItem;

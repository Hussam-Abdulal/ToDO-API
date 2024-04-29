import { useEffect, useCallback, useState } from "react";
import { useLocalStorageState } from "./use-localStorageState";
import useAxios from "./use-axios";

const useTasks = () => {
  const [tasks, setTasks] = useLocalStorageState("tasks", []);
  const { response, fetchData } = useAxios();
  const [shouldFetch, setShouldFetch] = useState(true);

  useEffect(() => {
    if (shouldFetch === true && tasks.length === 0) {
      fetchData({ method: "GET" });
    }
    if (response) {
      console.log("saved", response);
      setTasks(response);
    }
    setShouldFetch(false);
  }, [shouldFetch, setTasks, response]);

  const addTask = useCallback(
    async (task) => {
      setShouldFetch(false);
      setTasks((currentTasks) => [...currentTasks, task]);
    },
    [setTasks],
  );

  const deleteTask = (id) => {
    setShouldFetch(false);
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setShouldFetch(false);
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task,
    );

    setTasks(updatedTasks);
  };
  const clearAllTasks = useCallback(() => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all todos?",
    );

    if (confirmed) {
      setTasks([]);
    }
  }, [setTasks]);

  return { tasks, addTask, deleteTask, toggleTaskDone, clearAllTasks };
};

export default useTasks;

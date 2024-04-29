
import Form from "./Components/Tasks/Forms/Form";
import TaskList from "./Components/Tasks/TaskList";
import TodoHeader from "./Components/TodoHeader";
import TodoLinethrough from "./Components/TodoLinethrough";
import useTasks from "./Components/hooks/useTasks";

function App() {
  const { tasks, addTask, clearAllTasks, deleteTask, toggleTaskDone } =
    useTasks();

  return (
    <>
      <main>
      <TodoHeader />
      <TodoLinethrough />
        <Form onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onDeleteTask={deleteTask}
          onToggleTaskDone={toggleTaskDone}
          onClearTasks={clearAllTasks}
        />
        
      </main>
      
    </>
  );
}

export default App;





// import { useState, useEffect } from "react";
// import TodoList from "./Components/TodoList";
// import AddTodoForm from "./Components/AddTodoForm";
// import TodoHeader from "./Components/TodoHeader";
// import TodoFooter from "./Components/TodoFooter";
// import TodoLinethrough from "./Components/TodoLinethrough";
// import TodoSortera from "./Components/TodoSortera";
// import axios from "axios" 
// import "./App.css";

// function App() {
//   const [todos, setTodos] = useState([]);
// /*
//   useEffect(() => {
//     const fetchApiKey = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/keys?email=hussamabdulal94%40gmail.com", {
//           headers: {
//             "x-api-key": " $2a$10$28/I3guwskRejVKpZ8wGZuRYRq4EZEMDUgfFT5perThadiRLcvina"
//           }
//         });
//         if (response.ok) {
//           const data = await response.json();
//           if (data.Search) {
//             setTodos(data.Search);
//           } else {
//             console.error("No 'Search' property found in response data");
//           }
//         } else {
//           console.error("Failed to fetch API key");
//         }
//       } catch (error) {
//         console.error("Error fetching API key:", error);
//       }
//     };
    

//     fetchApiKey();
//   }, []);
// */

// useEffect(() => {
//        if (todos.length > 0) return;
  
//       const getTodos = async () => {
//         const response = await axios.get(
//           "https://random-todos.azurewebsites.net//todos",
          
          
          
//         );
//         setTodos(response.data.Search);
//      };
  
//       getTodos();
//     }, [todos]);

//   const handleAddTodo = (text) => {
//     const newItem = { completed: false, text };
//     setTodos([...todos, newItem]);
//   };

//   const handleSortByName = () => {

//   };

//   const handleItemDone = (index) => {
   
//   };

//   const handleDeleteItem = (index) => {
   
//   };

//   const clearAllTodos = () => {
   
//   };

//   return (
//     <div className="App">
//       <TodoHeader />
//       <TodoLinethrough />
//       <div className="to-do-container">
//         <TodoSortera handleSortByName={handleSortByName} />
//         <TodoList
//           todos={todos}
//           handleItemDone={handleItemDone}
//           handleDeleteItem={handleDeleteItem}
//         />
//         <AddTodoForm handleAddTodo={handleAddTodo} />
//         <TodoFooter clearAllTodos={clearAllTodos} />
//       </div>
//     </div>
//   );
// }

// export default App;
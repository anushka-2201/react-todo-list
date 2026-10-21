import React, { useState, useEffect } from 'react';
import Header from "./MyComponents/Header";
import { AddTodo } from "./MyComponents/AddTodo";
import {About} from "./MyComponents/About";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import {
  BrowserRouter as Router,
  Routes, 
  Route, 
  Link
} from "react-router-dom";

function App() {
  // 1. Logic theek kiya (Agar null hai tab empty array banega)
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  // 2. Extra bracket hataya, direct initTodo pass kiya
  const [todos, setTodos] = useState(initTodo);

  // 3. useEffect ko addTodo se bahar nikala aur top par rakha
  // Ab jab bhi 'todos' change hoga, ye automatic localStorage mein 'setItem' se save kar dega
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    
    // 4. Brackets aur if/else logic theek kiya
    if (todos.length === 0) {
      sno = 1; // Pehla todo hamesha sno 1 se start hoga
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    
    // Yahan alag se localStorage save karne ki zaroorat nahi hai
    // Kyunki upar wala useEffect automatic save kar lega jab todos change honge
  };

  return (
    <>
      <Router>
        <Header title="My todos list" />
        
        <Routes>
          {/* Home Route */}
          <Route exact path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          } />

          {/* About Route */}
          <Route exact path="/about" element={<About />} />
        </Routes>

        <Footer/>
      </Router>
    </>
  );
}
export default App;
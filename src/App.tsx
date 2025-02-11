import React, { useState } from 'react'
import "./App.css"
import InputField from './components/InputField'
import { Todo } from './model';
import TodoList from './components/TodoList';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]); // This is how you can create array of type or an interface..

  const handleAdd =(e:React.FormEvent)=> {
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id:Date.now(), todo, isDone: false}])
      setTodo("")
    }
  }
  console.log(todos)

  return (
    <div style={{backgroundColor: "#2f74c0", textAlign: "center"}}>
      <span className="heading">
        Taskify
      </span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/> 
    </div>
  )
}

export default App

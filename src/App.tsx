import React, { useState } from 'react'
import "./App.css"
import InputField from './components/InputField'
import { Todo } from './model';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]); // This is how you can create array of type or an interface..
  console.log(todo)

  return (
    <div style={{backgroundColor: "#2f74c0"}}>
      <span className="heading">
        Taskify
      </span>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './compotents/AddToDo'
import Todos from './compotents/Todos'

function App() {
  

  return (
    <>
      <h1>Learn About redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App

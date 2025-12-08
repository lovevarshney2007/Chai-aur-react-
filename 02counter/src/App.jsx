import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)
  
  // let counter = 15

  const addvalue = () => {
   
    // counter = counter + 1
    if(counter <20)
    setCounter(counter+1)
  }


  const removeValue = () => {
    
    // counter = counter + 1
    if(counter>0)
    setCounter(counter-1)
  }

  return (
    <>
     <h1>Chai Aur React</h1>
     <h2>Counter value: {counter}</h2>
     <button 
     onClick={addvalue} >Add Value {counter}</button>
     <br />
     <button onClick={removeValue}>Decrease Value {counter}</button>
     <p>footer : {counter}</p>
    </>
  )
}

export default App

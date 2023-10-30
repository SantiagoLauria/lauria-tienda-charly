import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar/>
        <ItemListContainer greeting="Qué tal, buenas tardes. Esto es un ItemListContainer."/>
      </div>
      
    </>
  )
}

export default App

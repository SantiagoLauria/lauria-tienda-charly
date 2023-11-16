import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)
  
  
  return (
    <BrowserRouter>
    <>
      <div>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Qué tal, buenas tardes. Esto es un ItemListContainer."/>} />
        
        </Routes>
      </div>
      
    </>
    </BrowserRouter>
  )
}

export default App

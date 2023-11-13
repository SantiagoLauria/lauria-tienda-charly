import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

fetch("public/assets/json/products.JSON")
let products = undefined
.then(res => res.json())
.then(data => products = data)
let item = products[0]

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

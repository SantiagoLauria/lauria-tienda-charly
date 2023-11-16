import { useEffect, useState } from "react"
import "./ItemListContainer.css" 
import ItemCard from "../ItemCard/ItemCard"


const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  
  useEffect(()=>{

    fetch("public/assets/json/products.JSON")
    .then(res => res.json())
    .then(data => data.productos)
    .then(data => setProducts(data))
  }, []
  )

  return (
    <div>
        <h2>{greeting}</h2>
        {products.map(element => <div className="itemCard">
          <img src={element.imagen} alt="" />
          <p>{element.nombre}</p>
          <p>{element.precio}</p>
        </div>)}
    </div>

  )
}

export default ItemListContainer
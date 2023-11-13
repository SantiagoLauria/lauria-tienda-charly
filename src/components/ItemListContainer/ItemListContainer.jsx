import ItemCard from "../ItemCard/ItemCard"

let products

fetch("public/assets/json/products.JSON")
.then(res => res.json())
.then(data => {products = data
  console.log(products);
  let item = products[0]
})
const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h2>{greeting}</h2>
        <ItemCard product={item}></ItemCard>
        
    </div>

  )
}

export default ItemListContainer
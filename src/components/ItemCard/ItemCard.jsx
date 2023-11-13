
const ItemCard = (product) => {
  return (
    <div>
        <img src={product.image} alt="" />
        <p>{product.nombre}</p>
        <p>{product.precio}</p>
    </div>
)
}

export default ItemCard
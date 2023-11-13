import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <div>
      <div className='container-brand'>
        <img className='logo' src="assets/charly-cayendo.png" alt="" />
        <h1>Tienda Charly</h1>
      </div>
        <ul className='nav'>
            <li>
                <a href="">Remeras</a>
                </li>
            <li><a href="">Cuadernos</a></li>
            <li><a href="">Tazas</a></li>
            <li>
      <CartWidget/>

            </li>
        </ul>
    </div>
  )
}

export default NavBar
import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)

    const totalQuantity = getQuantity()

    return (
        <Link className="botonCarro" to='/cart'>
            <img src={'/images/cart.png'} alt="carrito de compras"/>
            { totalQuantity }
        </Link>
    )
}

export default CartWidget
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import CartMap from "./CartMap"

const Cart = () => {
    const { getTotal } = useContext(CartContext)

    const total = getTotal()

    return (
        <div className="d-flex justify-contenet-center flex-column text-center">
            <div className="container">
                <div className='d-flex row p-4'>
                    <h2>Mis Compras</h2>
                    {
                        ( total === 0 ) ? (
                            <div className="col-12 p-2 d-flex flex-column align-items-center">
                                <h2>Tu carro de compras se encuentra vacío!</h2>
                                <Link className="botonPrimary m-2" to='/'>Elegir productos</Link>
                            </div>
                        ) : (<CartMap></CartMap>)
                        
                    }                    
                </div>
            </div> 
        </div>
        
    )
}

export default Cart
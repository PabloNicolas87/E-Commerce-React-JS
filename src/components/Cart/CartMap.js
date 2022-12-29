import { CartContext } from "../../Context/CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const CartMap = () => {
    const { cart, getTotal, removeItems, removeCart } = useContext(CartContext)

    const total = getTotal()

    const mapeo = cart.map(items => {
        return (
            <div className="col-12 p-2" key={ items.id }>
                <div className="p-2 my-2 d-flex flex-column flex-lg-row align-items-center text-center">
                    <div className="col-12 col-lg-2 py-2 py-lg-0">
                        <h2>{ items.title }</h2>    
                    </div>
                    <div className="col-12 col-lg-2 py-2 py-lg-0">
                        <img className="pictureUrl" src={items.pictureUrl} alt={items.title}/>
                    </div>
                    <div className="col-12 col-lg-2 py-2 py-lg-0">
                        <h2>Precio: ${ items.price }</h2>
                    </div>
                    <div className="col-12 col-lg-2 py-2 py-lg-0">
                        <h2>Cantidad: { items.quantity }</h2>
                    </div>
                    <div className="col-12 col-lg-2 py-2 py-lg-0">
                        <h2>Subtotal: ${ items.price * items.quantity }</h2>
                    </div>
                    <div className='col-12 col-lg-2 py-2 py-lg-0 d-flex justify-content-center p-4'>
                        <button onClick={() => removeItems(items.id)} className="botonAlert">Eliminar Producto</button>     
                    </div>
                </div>
            </div>
        )
    })    
    return (
        <div className="card p-2 my-2 d-flex justify-content-center">
            <div className="col-12 p-2 d-flex flex-column align-items-center">
                <Link className="botonPrimary m-2" to='/'>Seguir comprando</Link>
            </div>
            <div>
                { mapeo }
            </div>
            <h2>Total: ${ total }</h2>
            <div className="d-flex justify-content-center">
                <button onClick={() => removeCart()} className="botonAlert m-2">Vaciar Carro</button>  
                <Link className="botonPrimary m-2" to='/checkout'>Checkout</Link>   
            </div>
        </div>
    )
}

export default CartMap
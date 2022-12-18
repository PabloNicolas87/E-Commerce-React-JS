import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, getTotal, removeItems } = useContext(CartContext)

    const total = getTotal()

    return (
        <div className="d-flex justify-contenet-center flex-column text-center">
            
            <div className='col-12 d-flex justify-content-center p-4'>
                <Link className="botonCarro" to='/'>Seguir Comprando</Link>     
            </div>
            <div className="container">
                <div className='d-flex row p-4'>
                <h2>Mis Compras</h2>
                {
                    cart.map(items => {
                        return (   
                            <div className="col-12 p-2" key={ items.id }>
                                <div className="card p-2 d-flex flex-column flex-lg-row align-items-center text-center">
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
                                        <button onClick={() => removeItems(items.id)} className="botonCarro">Eliminar Producto</button>     
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <h2>Total: ${ total }</h2>   
        </div>
        
    )
}

export default Cart
import ItemCount from '../ItemCount/ItemCount.js';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext.js';
import Swal from 'sweetalert2';

const ItemDetail = ({title, id, stock, price, category, pictureUrl, description}) => {

    const {addItems, isInCart } = useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: "Se agregó " + quantity + " producto(s) al carrito.",
            showConfirmButton: true,
          })
        addItems({ id, title, price, quantity, pictureUrl })
    }

    return (
        <div className='container'>
            <div className='col-12 d-flex justify-content-center p-4'>
                <Link className="botonCarro" to='/'>Ver Todo</Link>     
            </div>
            <div className='card d-flex flex-column flex-lg-row'>
                <div className='col-12 col-lg-9 d-flex flex-column flex-lg-row align-items-center'>
                    <div className='col-12 col-lg-6 d-flex justify-content-center'>
                        <img src={ pictureUrl } alt={title}/>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <p>U$D {price}</p>
                        <p>Categoría: {category}</p>
                        <p>Stock: {stock}</p>      
                    </div>
                </div>
                <div className='col-12 col-lg-3 d-flex justify-content-center align-items-center'>
                    {
                        isInCart(id) ? (
                                <div>
                                    <Link className='botonPrimary justify-content-center my-1' to='/cart'>Finalizar compra</Link>
                                </div>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}></ItemCount>
                        )
                    }    
                </div>
            </div>
        </div>
    )
}
export default ItemDetail
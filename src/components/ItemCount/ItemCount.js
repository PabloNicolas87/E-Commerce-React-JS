import { useState } from 'react';
import './ItemCount.css';

const  ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)    
        }
    }
    const decrease = () => {
        if (count > 1) {
            setCount(count - 1)    
        }
    }
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center py-3'>
                <a className="btn-suma px-2" onClick={() => decrease()}>-</a>
                <h2 className="px-2">{count}</h2>
                <a className="btn-resta px-2" onClick={() => increment()}>+</a>
            </div>
            <div className='py-3'>
                <a className="cart p-2" onClick={() =>onAdd(count)} disabled={!count}>Agregar al carrito</a>
            </div>    
        </div>
        
    )
}

export default ItemCount

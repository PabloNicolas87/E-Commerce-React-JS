import { getItemsById } from '../asyncMock/asyncMock.js'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail.js';

const ItemDetailContainer = () => {

    const [items, setProduct] = useState({})

    const { productId } = useParams()

    useEffect(() => {
        getItemsById(productId)
            .then(response => {
                setProduct(response)
        })
        .catch(error => {
            alert('Error')
        })  
      }, [productId])

    
    return (
        <ItemDetail id={items.id} title={items.title} description={items.description} price={items.price} category={items.category} pictureUrl={items.pictureUrl} stock={items.stock}/>
    )
}

export default ItemDetailContainer
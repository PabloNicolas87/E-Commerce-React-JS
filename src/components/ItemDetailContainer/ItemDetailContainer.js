//import { getItemsById } from '../asyncMock/asyncMock.js'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail.js';
import { getDoc, doc } from 'firebase/firestore';
import { db } from "../../services/firebase/firebaseConfig.js"


const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [items, setItem] = useState({})

    const { productId } = useParams()

    useEffect(() => {

        const docRef = doc(db, 'items', productId)

        getDoc(docRef)
        .then(doc=> {
            const data = doc.data()
            const newItem = { id: doc.id, ...data }
            setItem(newItem)
        })
        .catch(error => {
            alert("error")
        })
        .finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return <h2 className='d-flex justify-content-center align-items-center'>Loading...</h2>
    }
    
    return (
        <div>
            <ItemDetail id={items.id} title={items.title} description={items.description} price={items.price} category={items.category} pictureUrl={items.pictureUrl} stock={items.stock}/>    
        </div>
    )
}

export default ItemDetailContainer
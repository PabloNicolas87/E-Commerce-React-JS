import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList.js';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getDocs, collection, query, where  } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig.js"

const ItemListContainer = () => {
    
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
      setLoading(true)
      const collectionRef = categoryId
      ? query(collection(db, 'items'), where('category', '==', categoryId))
      : collection(db, 'items')

      getDocs(collectionRef)
      .then(response => {
        const newItems = response.docs.map(doc => {
          const data = doc.data()
          return {id:doc.id, ...data}
        })
        setItems(newItems)
      })
      .catch(error => {
        alert("error")
      })
      .finally(() => {
        setLoading(false)
    })
      
    }, [categoryId])

    if(loading) {
      return <h2 className='d-flex justify-content-center align-items-center'>Loading...</h2>
  }

    return (
        <div className='ItemListContainer d-flex row justify-content-center p-4'>
            <div className='col-2 d-flex justify-content-center text-center p-0'>
                <Link className="botonCarro" to='/'>Ver Todo</Link>     
            </div>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer
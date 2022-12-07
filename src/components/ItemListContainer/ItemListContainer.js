import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList.js';
import { getItems, getItemsByCategory } from '../asyncMock/asyncMock.js'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ItemListContainer = () => {
    

    const [items, setItems] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {

        if(categoryId) {
          getItemsByCategory(categoryId)
            .then(response => {
            setItems(response)
          })
            .catch(error => {
              alert('Error')
          }) 
        } else {
          getItems()
            .then(response => {
            setItems(response)
          })
            .catch(error => {
              alert('Error')
          })    
        }
        
      }, [categoryId])

    return (
        <div className='ItemListContainer d-flex row justify-content-center p-4'>
            <div className='col-1 d-flex justify-content-center p-0'>
                <Link className="botonCarro" to='/'>Ver Todo</Link>     
            </div>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer
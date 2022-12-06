import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList.js';
import { getItems, getItemsByCategory } from '../asyncMock/asyncMock.js'
import { useParams } from 'react-router-dom';

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
        <div>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer
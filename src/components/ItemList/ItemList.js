import Item from '../Item/Item.js';

const ItemList = ({ items }) => {
    return (
        <div className='ItemListContainer d-flex justify-content-center'>
            <div className='container d-flex row justify-content-center py-2'>
                { items.map(item => (
                    <Item key={item.id} item={item}/>
                )) }     
            </div>
            
        </div>  
    )
}

export default ItemList
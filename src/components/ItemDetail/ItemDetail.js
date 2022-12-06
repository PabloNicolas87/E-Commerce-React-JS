import ItemCount from '../ItemCount/ItemCount.js';

const ItemDetail = ({title, id, stock, price, category, pictureUrl, description}) => {
    const handleOnAdd = (quantity) => {
        alert("se agrego al carrito " + quantity)
    }

    return (
        <div className='container pt-5'>
            <div className='card d-flex flex-column flex-lg-row'>
                <div className='col-12 col-lg-9 d-flex flex-column flex-lg-row align-items-center'>
                    <div className='col-12 col-lg-6'>
                        <img src={pictureUrl} alt={title}/>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <p>U$D {price}</p>
                        <p>{category}</p>      
                    </div>
                </div>
                <div className='col-12 col-lg-3 d-flex justify-content-center align-items-center'>
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}></ItemCount>    
                </div>
            </div>
        </div>
    )
}
export default ItemDetail
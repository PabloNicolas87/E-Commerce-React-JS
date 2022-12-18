import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <div className="col-12 col-lg-6 col-xl-4 d-flex flex-column text-center p-2">
            <div className='card p-2'>
                <h2 className='titulo d-flex align-items-center justify-content-center'>{item.title}</h2>
                <div className='imagen'>
                    <img src={item.pictureUrl} alt={item.title}/>    
                </div>
                <p className='descripcion'>{item.description}</p>
                <div className='card-footer d-flex justify-content-around align-items-center'>
                    <p className='precio'>U$D  {item.price}</p>
                    <Link className='vermas' to={`/detail/${item.id}`}>Ver Más</Link>    
                </div>   
            </div>
            
            
        </div>
    )
}

export default Item
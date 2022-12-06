import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link to='/' className="navbar-brand" href="#">
                    <img src={'/images/logo.png'} alt="Imágen Logo" />
                </Link>
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/category/tablet' className="nav-link" href="#">Tablets</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/category/celular' className="nav-link" href="#">Celulares</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/category/notebook' className="nav-link" href="#">Notebooks</Link>
                        </li>
                    </ul>
                </div>
                <CartWidget/>
            </div>
            
        </nav>
    )
}

export default Navbar
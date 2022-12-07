import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
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
                        <li className="nav-item d-flex justify-content-center align-items-center">
                            <NavLink to='/category/tablet' className= {({ isActive }) => isActive ? 'nav-link-activo' : 'nav-link' }>Tablets</NavLink>
                        </li>
                        <li className="nav-item d-flex justify-content-center align-items-center">
                            <NavLink to='/category/celular' className= {({ isActive }) => isActive ? 'nav-link-activo' : 'nav-link' }>Celulares</NavLink>
                        </li>
                        <li className="nav-item d-flex justify-content-center align-items-center">
                            <NavLink to='/category/notebook' className= {({ isActive }) => isActive ? 'nav-link-activo' : 'nav-link' }>Notebooks</NavLink>
                        </li>
                    </ul>
                </div>
                <CartWidget/>
            </div>
            
        </nav>
    )
}

export default Navbar
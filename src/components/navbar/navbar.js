import './navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={'./images/logo.png'}/>
                </a>
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tablets</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Celulares</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Notebooks</a>
                        </li>
                    </ul>
                </div>
                <CartWidget/>
            </div>
            
        </nav>
    )
}

export default Navbar
import './navbar.css';

const Navbar = () => {
    return (
        

<nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="../../assets/img/logo.png"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
    </div>
</nav>
    )
}

export default Navbar
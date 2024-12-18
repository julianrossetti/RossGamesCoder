import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div>
          <Link to="/" className="navbar-brand" href="#">RossGames</Link>
        </div>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
            <li className="nav-item">
              <div className="btn-group">
                <button type="button" className="btn btn-secondary"><Link className="boton" to="/category/productos">Productos</Link></button>
                <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu">
                  <li><Link to ="/category/perifericos" className="dropdown-item">Periféricos</Link></li>
                  <li><Link to ="/category/graficas" className="dropdown-item">Gráficas</Link></li>
                  <li><Link to ="/category/procesadores" className="dropdown-item">Procesadores</Link></li>
                  <li><Link to ="/category/almacenamientos" className="dropdown-item">Almacenamientos</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar
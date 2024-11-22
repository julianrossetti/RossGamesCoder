import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import {Link} from "react-router-dom"

function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">RossGames</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
            <li className="nav-item">
              <div className="btn-group">
                <button type="button" className="btn btn-secondary">Productos</button>
                <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu">
                  <li><Link to ="/category/perifericos" className="dropdown-item">Periféricos</Link></li>
                  <li><Link to ="/category/Placas de video" className="dropdown-item">Placas de video</Link></li>
                  <li><Link to ="/category/Procesadores" className="dropdown-item">Procesadores</Link></li>
                  <li><Link to ="/category/Almacenamientos" className="dropdown-item">Almacenamientos</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <CartWidget />
    </nav>
  )
}

export default NavBar
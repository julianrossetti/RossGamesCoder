import ItemDetail from "./components/ItemDetail/ItemDetail"
import Inicio from "./components/Inicio/Inicio"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Cart from "./components/Cart/Cart"
import { CartProvider } from "./components/Contexts/CartContext"

function App() {

  return (
    <>
      <Router>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Inicio greeting="Bienvenidos a RossGames" />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/productos/:itemId" element={<ItemDetail />} />
            <Route path="/:carrito" element={<Cart />} />
          </Routes>
        </CartProvider>
      </Router>
    </>
  )
}

export default App

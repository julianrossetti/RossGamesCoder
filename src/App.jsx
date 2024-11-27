import ItemDetail from "./components/ItemDetail/ItemDetail"
import Inicio from "./components/Inicio/Inicio"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Inicio greeting="Bienvenidos a RossGames"/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer />}/>
        <Route path="/productos/:itemId" element={<ItemDetail />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

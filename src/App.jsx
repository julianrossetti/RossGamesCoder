import ItemDetail from "./components/ItemDetail/ItemDetail"
import Inicio from "./components/Inicio/Inicio"
import ItemList from "./components/ItemList/ItemList"
import NavBar from "./components/NavBar/NavBar"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Inicio greeting="Bienvenidos a RossGames"/>}/>
        <Route path="/category/:categoryId" element={<ItemList />}/>
        <Route path="/productos/:itemId" element={<ItemDetail />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

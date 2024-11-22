import Inicio from "./components/Inicio/Inicio"
import NavBar from "./components/NavBar/NavBar"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Inicio greeting="Bienvenidos a RossGames"/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
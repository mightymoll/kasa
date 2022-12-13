import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Logement from "./pages/Logement"
import About from "./pages/About"
import Error from "./pages/Error"
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="logement/:id" element={<Logement />} />
        <Route path="about" element={<About />} />
        <Route path="error" element={<Error />} />
      </Routes>
    </div >
  )
}

export default App
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Logement from "./pages/Logement"
import About from "./pages/About"
import Error from "./pages/Error"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="logement/:id/*" element={<Logement />} />
        <Route path="about/" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div >
  )
}

export default App
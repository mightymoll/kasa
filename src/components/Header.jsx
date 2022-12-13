import logo from '../assets/logo.svg'
import { Link } from "react-router-dom";
import '../styles/header.css';

function Header() {
  return (
    <header className='header'>
      <div>
        <img src={logo} alt='Kasa logo' className='header_image' />
      </div>
      <nav className='header_nav'>
        <Link to="/" className="header_link">Acceuil</Link>
        <Link to="/About" className="header_link">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header
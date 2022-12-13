import { ReactComponent as Logo } from '../assets/logo.svg';
import { Link } from "react-router-dom";
import '../styles/header.css';

function Header() {
  return (
    <header className='header'>
      <div className='header_logo' alt='Kasa logo'>
        <Logo fill='#FF6060' height='68px' />
      </div>
      <nav className='header_nav'>
        <Link to="/" className="header_link">Acceuil</Link>
        <Link to="/About" className="header_link">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header
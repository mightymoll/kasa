import { ReactComponent as Logo } from '../assets/logo.svg';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className='header'>
      <Logo className='header_logo' alt='Kasa logo' fill='#FF6060' />
      <nav className='header_nav'>
        <Link to="/" className="header_link">Accueil</Link>
        <Link to="/About" className="header_link">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header
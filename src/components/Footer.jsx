import { ReactComponent as Logo } from '../assets/logo.svg';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer_logo' alt='Kasa logo'>
        <Logo fill='#FFF' height='36px' />
      </div>
      <p className='footer_text'>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
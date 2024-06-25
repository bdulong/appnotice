import '../../App.css'
import './header.css'
import Logo from '../../images/logo.png'

export default function Header() {
  return (
    <div className='header-container'>
      <img className='logo' src={Logo} alt='Logo' ></img>
    </div>
  )
}
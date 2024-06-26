import '../../App.css'
import Header from '../Header/header.jsx'
import './landing.css'
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <main>
      <Header />
      <h1>Bienvenue !</h1>
      <Link to="/ACGSnenIHF">SEPHORA</Link>
      <Link to="/CLwKZGLtUy">ANTONIO</Link>
      <Link to="/ZdecCTnmIA">CHANEL</Link>
    </main>
  )
}
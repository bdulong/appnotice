import '../../App.css'
import Header from '../Header/header.jsx'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Landing() {
  const { t } = useTranslation();
  return (
    <main>
      <Header />
      <h1>Cette page n'existe pas</h1>
    </main>
  )
}
import '../../App.css'
import Header from '../Header/header.jsx'
import { useTranslation } from 'react-i18next';

export default function Landing() {
  const { t } = useTranslation();
  return (
    <main>
      <Header />
      <h1>{t('Cette page n&apos;existe pas')}</h1>
    </main>
  )
}
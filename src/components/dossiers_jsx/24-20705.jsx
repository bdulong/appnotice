import React from 'react'
import { useTranslation } from 'react-i18next';
import './dossiers_jsx-style.css';
import '../../App.css';
import Header from '../Header/header.jsx';
import CTALanguage from '../CTALanguage/CTALanguage.jsx';

const Page = () => {
    const { t } = useTranslation();

    return (
        <main>
            <Header />
            <div className='content'>
                <h1>CHANEL PARFUMS BEAUTE SAS</h1>
                <div className='CTA-container'>
                    <button className='CTA-notice'>{t(`sousDossiers.Demantelement`)}</button>
					<button className='CTA-notice'>{t(`sousDossiers.Electricite`)}</button>
					<button className='CTA-notice'>{t(`sousDossiers.Emballage`)}</button>
					<button className='CTA-notice'>{t(`sousDossiers.Montage`)}</button>
					<button className='CTA-notice'>{t(`sousDossiers.Transport`)}</button>
                </div>
                <CTALanguage />
            </div>
        </main>
    );
};

export default Page;

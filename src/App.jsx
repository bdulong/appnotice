import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import './App.css';

import Landing from './components/Landing/landing.jsx';
import PageErreur from './components/PageErreur/PageErreur.jsx';
// Import des pages générées par LinksConverter.cjs :
import AgwvZtpORv from './components/dossiers_jsx/24-20610.jsx';
import HjsqGbjAWc from './components/dossiers_jsx/24-20661.jsx';
import ILsobVqsWW from './components/dossiers_jsx/24-20705.jsx';

const Loading = () => <div>Chargement...</div>;

export default function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <Suspense fallback={<Loading />}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        {/* Routes des pages générées par LinksConverter.cjs */}
						<Route path="/AgwvZtpORv" element={<AgwvZtpORv />} />
						<Route path="/HjsqGbjAWc" element={<HjsqGbjAWc />} />
						<Route path="/ILsobVqsWW" element={<ILsobVqsWW />} />
                        {/* Fin des routes des pages générées par LinksConverter.cjs */}
                        <Route path="*" element={<PageErreur />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </I18nextProvider>
    );
}
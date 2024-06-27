import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import './App.css';

import Landing from './components/Landing/landing.jsx';
import ACGSnenIHF from './components/dossiers_jsx/24-20610.jsx';
import CLwKZGLtUy from './components/dossiers_jsx/24-20661.jsx';
import ZdecCTnmIA from './components/dossiers_jsx/24-20705.jsx';

const Loading = () => <div>Chargement...</div>;

export default function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <Suspense fallback={<Loading />}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Landing />} />
						<Route path="/ACGSnenIHF" element={<ACGSnenIHF />} />
						<Route path="/CLwKZGLtUy" element={<CLwKZGLtUy />} />
						<Route path="/ZdecCTnmIA" element={<ZdecCTnmIA />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </I18nextProvider>
    );
}
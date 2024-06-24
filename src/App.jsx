import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Landing from './landing.jsx';
import ACGSnenIHF from './components/dossiers_jsx/24-20610.jsx';
import CLwKZGLtUy from './components/dossiers_jsx/24-20661.jsx';
import ZdecCTnmIA from './components/dossiers_jsx/24-20705.jsx';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/ACGSnenIHF" element={<ACGSnenIHF />} />
				<Route path="/CLwKZGLtUy" element={<CLwKZGLtUy />} />
				<Route path="/ZdecCTnmIA" element={<ZdecCTnmIA />} />
			</Routes>
		</BrowserRouter>
	);
}
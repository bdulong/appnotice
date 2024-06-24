import React from 'react'
import '../dossiers_jsx-style.css'
import '../../App.css'
import Header from '../header.jsx'

const Page = () => {
		return (
				<main>
						<Header />
						<div className='content'>
								<h1>24-20610</h1>
								<div className='CTA-container'>
										<button className='CTA-notice'>Demantelement</button>
<button className='CTA-notice'>Electricite</button>
<button className='CTA-notice'>Emballage</button>
<button className='CTA-notice'>Montage</button>
<button className='CTA-notice'>Transport</button>
								</div>
						</div>
				</main>
		);
};

export default Page;
